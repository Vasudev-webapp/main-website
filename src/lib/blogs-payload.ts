import { getPayload } from "payload";
import config from "@payload-config";

import type { BlogListItem, RenderableArticle } from "@/lib/blog/article";
import {
  isPublishedDoc,
  resolveDocImage,
  toBlogListItem,
  toDirectDriveLink,
  toRenderableArticle,
  type RawBlogDoc,
} from "@/lib/blog/cms-article";

let blogsCollectionUnavailableUntil = 0;

export function isCollectionCurrentlyUnavailable(): boolean {
  return Date.now() < blogsCollectionUnavailableUntil;
}

export function markCollectionUnavailable(ttlMs: number = 300000): void {
  blogsCollectionUnavailableUntil = Date.now() + ttlMs;
}

function isMissingBlogsTableError(error: unknown): boolean {
  if (!error || typeof error !== "object") return false;

  const maybeError = error as {
    code?: unknown;
    message?: unknown;
    cause?: unknown;
  };

  if (maybeError.code === "42P01") return true;
  if (
    typeof maybeError.message === "string" &&
    maybeError.message.includes('relation "blogs" does not exist')
  ) {
    return true;
  }

  return isMissingBlogsTableError(maybeError.cause);
}

/**
 * Every read goes through here so a missing/!migrated `blogs` table degrades to
 * "no CMS content" instead of taking the whole blog down. The static articles
 * keep rendering either way.
 */
async function withBlogs<T>(fallback: T, run: (payload: Awaited<ReturnType<typeof getPayload>>) => Promise<T>, context: string): Promise<T> {
  if (isCollectionCurrentlyUnavailable()) return fallback;

  try {
    const payload = await getPayload({ config });
    return await run(payload);
  } catch (error) {
    if (isMissingBlogsTableError(error)) {
      markCollectionUnavailable();
      return fallback;
    }
    console.error(`blogs-payload: ${context} failed`, error);
    return fallback;
  }
}

/* ------------------------------------------------------------------ */
/*  Article reads                                                     */
/* ------------------------------------------------------------------ */

/**
 * Fetches a CMS-authored article.
 *
 * When `draft` is true the newest version is returned (including unpublished
 * edits) — this is only ever set from an authenticated preview request, and
 * Payload's `read` access control still restricts drafts to logged-in users.
 * Returns null for image-override rows and for articles with no sections yet,
 * so the caller can fall back to the hard-coded article of the same slug.
 */
export async function getCmsArticleBySlug(
  slug: string,
  options: { draft?: boolean } = {}
): Promise<RenderableArticle | null> {
  const draft = options.draft === true;

  return withBlogs<RenderableArticle | null>(
    null,
    async (payload) => {
      const result = await payload.find({
        collection: "blogs",
        where: draft
          ? { slug: { equals: slug } }
          : {
              and: [{ slug: { equals: slug } }, { _status: { equals: "published" } }],
            },
        limit: 1,
        draft,
        pagination: false,
      });

      const doc = result.docs[0] as RawBlogDoc | undefined;
      if (!doc) return null;
      // Belt-and-braces: never render an unpublished doc outside preview.
      if (!draft && !isPublishedDoc(doc)) return null;

      return toRenderableArticle(doc, { isDraft: draft });
    },
    `getCmsArticleBySlug(${slug})`
  );
}

/** Published CMS articles as listing cards, newest first. */
export async function getPublishedCmsBlogListItems(): Promise<BlogListItem[]> {
  return withBlogs<BlogListItem[]>(
    [],
    async (payload) => {
      const result = await payload.find({
        collection: "blogs",
        where: {
          and: [{ _status: { equals: "published" } }, { entryType: { equals: "article" } }],
        },
        sort: "-publishedDate",
        limit: 500,
        pagination: false,
      });

      return (result.docs as RawBlogDoc[]).flatMap((doc) => {
        const item = toBlogListItem(doc);
        return item ? [item] : [];
      });
    },
    "getPublishedCmsBlogListItems"
  );
}

/** Slugs of published CMS articles, used by generateStaticParams. */
export async function getPublishedCmsArticleSlugs(): Promise<string[]> {
  return withBlogs<string[]>(
    [],
    async (payload) => {
      const result = await payload.find({
        collection: "blogs",
        where: {
          and: [{ _status: { equals: "published" } }, { entryType: { equals: "article" } }],
        },
        limit: 1000,
        pagination: false,
        select: { slug: true },
      });

      return (result.docs as RawBlogDoc[]).flatMap((doc) =>
        typeof doc.slug === "string" && doc.slug ? [doc.slug] : []
      );
    },
    "getPublishedCmsArticleSlugs"
  );
}

/* ------------------------------------------------------------------ */
/*  Legacy image-override reads                                       */
/*                                                                    */
/*  Kept because most rows in this collection still exist only to swap */
/*  the hero image on a hard-coded article.                            */
/* ------------------------------------------------------------------ */

export async function getBlogImageOverride(slug: string): Promise<string | null> {
  return withBlogs<string | null>(
    null,
    async (payload) => {
      const result = await payload.find({
        collection: "blogs",
        where: { slug: { equals: slug } },
        limit: 1,
      });

      const doc = result.docs[0] as RawBlogDoc | undefined;
      if (!doc) return null;

      const drive = doc.googleDriveImageUrl;
      return typeof drive === "string" && drive ? toDirectDriveLink(drive) : null;
    },
    `getBlogImageOverride(${slug})`
  );
}

export async function getAllBlogImageOverrides(): Promise<Record<string, string>> {
  return withBlogs<Record<string, string>>(
    {},
    async (payload) => {
      const result = await payload.find({
        collection: "blogs",
        limit: 1000,
      });

      if (result.totalDocs > 1000) {
        console.warn(
          `getAllBlogImageOverrides: totalDocs(${result.totalDocs}) exceeds limit(1000). Some image overrides may be truncated.`
        );
      }

      const overrides: Record<string, string> = {};
      for (const raw of result.docs as RawBlogDoc[]) {
        const slug = raw.slug;
        const drive = raw.googleDriveImageUrl;
        if (typeof slug === "string" && typeof drive === "string" && drive) {
          overrides[slug] = toDirectDriveLink(drive);
        }
      }
      return overrides;
    },
    "getAllBlogImageOverrides"
  );
}

/* ------------------------------------------------------------------ */
/*  Sitemap                                                           */
/* ------------------------------------------------------------------ */

/**
 * Published, indexable CMS blog URLs for sitemap.xml.
 *
 * Drafts and `noIndex` articles are excluded here — advertising an unpublished
 * URL would surface a 404 to crawlers and waste crawl budget.
 */
export async function getAllBlogSlugs(): Promise<
  { slug: string; updatedAt: string; image?: string }[]
> {
  return withBlogs<{ slug: string; updatedAt: string; image?: string }[]>(
    [],
    async (payload) => {
      const result = await payload.find({
        collection: "blogs",
        where: {
          and: [
            { _status: { equals: "published" } },
            { entryType: { equals: "article" } },
            { noIndex: { not_equals: true } },
          ],
        },
        limit: 1000,
        pagination: false,
        select: {
          slug: true,
          updatedAt: true,
          image: true,
          googleDriveImageUrl: true,
        },
      });

      return (result.docs as RawBlogDoc[]).flatMap((doc) => {
        if (typeof doc.slug !== "string" || typeof doc.updatedAt !== "string") {
          return [];
        }

        const image = resolveDocImage(doc);
        return [
          {
            slug: doc.slug,
            updatedAt: doc.updatedAt,
            image: image || undefined,
          },
        ];
      });
    },
    "getAllBlogSlugs"
  );
}
