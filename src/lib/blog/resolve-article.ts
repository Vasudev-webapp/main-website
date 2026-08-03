import { blogData, type BlogEntry } from "@/app/(frontend)/blog/[slug]/seo-blog-data";
import { getBlogImageOverride, getCmsArticleBySlug } from "@/lib/blogs-payload";

import type { RenderableArticle } from "./article";

/**
 * Normalises a hard-coded `seo-blog-data.ts` entry into the shared render shape.
 * The CMS image override is still honoured, which is what the `blogs` collection
 * was originally used for.
 */
function fromStaticEntry(
  slug: string,
  entry: BlogEntry,
  imageOverride: string | null
): RenderableArticle {
  return {
    slug,
    source: "static",
    isDraft: false,

    title: entry.title,
    metaTitle: entry.metaTitle,
    metaDescription: entry.metaDescription,
    date: entry.date,
    lastUpdated: entry.lastUpdated,
    category: entry.category,
    image: imageOverride || entry.image,
    imageAlt: entry.imageAlt,
    excerpt: entry.excerpt,
    author: entry.author,
    authorCredentials: entry.authorCredentials,

    sections: entry.sections,
    bullets: entry.bullets,
    quote: entry.quote,
    closing: entry.closing,
    internalLinks: entry.internalLinks,
    externalLinks: entry.externalLinks,
    faqs: entry.faqs,
    relatedProductSlug: entry.relatedProductSlug,

    noIndex: false,
  };
}

/**
 * Resolves the article to render at /blog/<slug>.
 *
 * Precedence: a CMS-authored article wins over a hard-coded one with the same
 * slug, so an existing article can be taken over and edited from the CMS. When
 * no CMS article exists the hard-coded entry is used unchanged.
 *
 * `draft` is only ever true for an authenticated preview request; in that mode
 * unpublished CMS content is returned so editors see their draft.
 */
export async function resolveArticle(
  slug: string,
  options: { draft?: boolean } = {}
): Promise<RenderableArticle | null> {
  const draft = options.draft === true;

  let cmsArticle: RenderableArticle | null = null;
  try {
    cmsArticle = await getCmsArticleBySlug(slug, { draft });
  } catch (err) {
    // A CMS outage must not take down articles that are hard-coded.
    console.error(`resolveArticle: CMS lookup failed for "${slug}"`, err);
  }

  if (cmsArticle) return cmsArticle;

  const staticEntry = blogData[slug];
  if (!staticEntry) return null;

  let imageOverride: string | null = null;
  try {
    imageOverride = await getBlogImageOverride(slug);
  } catch (err) {
    console.error(`resolveArticle: image override lookup failed for "${slug}"`, err);
  }

  return fromStaticEntry(slug, staticEntry, imageOverride);
}

/** Slugs of every hard-coded article. */
export function getStaticArticleSlugs(): string[] {
  return Object.keys(blogData);
}
