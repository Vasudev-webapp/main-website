import Image from "next/image";
import Link from "next/link";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ExpandableImage from "@/components/ExpandableImage";
import { applyPageMetaOverride } from "@/lib/seo/page-meta-overrides";
import SectionLabel from "@/components/SectionLabel";
import ArticleSchema from "@/components/seo/ArticleSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import FAQSchema from "@/components/seo/FAQSchema";
import AuthorByline from "@/components/blog/AuthorByline";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogProductAside from "@/components/blog/BlogProductAside";
import ArticleSectionBody from "@/components/blog/ArticleSectionBody";
import DraftPreviewBanner from "@/components/blog/DraftPreviewBanner";
import { blogData } from "./seo-blog-data";
import type { RenderableArticle } from "@/lib/blog/article";
import { bodyToPlainText, countWordsInText } from "@/lib/blog/lexical-text";
import { resolveArticle } from "@/lib/blog/resolve-article";
import { getPublishedCmsArticleSlugs } from "@/lib/blogs-payload";
import { getProductBySlug } from "@/lib/products-payload";
import { filterLinksToLiveProducts } from "@/lib/blog/visible-product-links";

export const revalidate = 3600;

const SITE_URL = "https://www.vasudevchemopharma.com";

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

const staticBlogs = Object.entries(blogData).map(([slug, data]) => ({
  slug,
  ...data,
}));

function toIsoDateString(value: string): string | undefined {
  if (!value) return undefined;
  const timestamp = Date.parse(value);
  if (Number.isNaN(timestamp)) return undefined;
  return new Date(timestamp).toISOString();
}

/**
 * Word count drives both the Article schema and whether the post gets a table
 * of contents. Rich-text bodies are flattened to plain text first so CMS and
 * hard-coded articles are measured the same way.
 */
function countWords(article: RenderableArticle): number {
  return countWordsInText(
    article.excerpt,
    ...article.sections.map((section) => bodyToPlainText(section.body)),
    article.quote,
    article.closing
  );
}

/**
 * Resolve the product a blog relates to: explicit `relatedProductSlug` wins,
 * otherwise fall back to the first `/product/...` internal link in the post.
 */
function resolveRelatedProductSlug(article: RenderableArticle): string | undefined {
  if (article.relatedProductSlug) return article.relatedProductSlug;
  for (const link of article.internalLinks) {
    const match = link.href.match(/^\/product\/([^/?#]+)/);
    if (match) return match[1];
  }
  return undefined;
}

/* ------------------------------------------------------------------ */
/*  Static params & metadata                                          */
/* ------------------------------------------------------------------ */

export async function generateStaticParams() {
  // Pre-render hard-coded posts plus every published CMS article so both are
  // served as static HTML. Anything published later is picked up on demand via
  // ISR, and the publish hook revalidates the path immediately.
  const slugs = new Set(staticBlogs.map((b) => b.slug));

  try {
    for (const slug of await getPublishedCmsArticleSlugs()) {
      slugs.add(slug);
    }
  } catch (err) {
    console.error("generateStaticParams: CMS slug lookup failed", err);
  }

  return Array.from(slugs, (slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { isEnabled: isDraftMode } = await draftMode();
  const article = await resolveArticle(slug, { draft: isDraftMode });
  if (!article) return {};

  const publishedTime = toIsoDateString(article.date);
  const modifiedTime = toIsoDateString(article.lastUpdated);
  const canonical = article.canonicalOverride ?? `${SITE_URL}/blog/${slug}`;

  const seoTitle = article.metaTitle ?? article.title;
  const seoDescription = article.metaDescription ?? article.excerpt;

  // A draft preview must never be indexable, and neither must an article the
  // editor has explicitly flagged noindex.
  const shouldBlockIndexing = article.isDraft || article.noIndex;

  const metadata: Metadata = {
    title: seoTitle,
    description: seoDescription,
    alternates: {
      canonical,
    },
    robots: shouldBlockIndexing
      ? { index: false, follow: true, googleBot: { index: false, follow: true } }
      : undefined,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: canonical,
      type: "article",
      publishedTime,
      modifiedTime,
      authors: [article.author],
      images: [{ url: article.image, alt: article.imageAlt }],
    },
  };

  // Path-level overrides exist for the hard-coded articles. CMS articles are
  // authored with their own meta fields, so the CMS stays the source of truth.
  return article.source === "cms"
    ? metadata
    : applyPageMetaOverride(`/blog/${slug}`, metadata);
}

/* ------------------------------------------------------------------ */
/*  Page component                                                    */
/* ------------------------------------------------------------------ */

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // `isEnabled` is false for normal visitors, so this page keeps being served
  // as static/ISR HTML. Only a request carrying the draft-mode bypass cookie
  // (set by /api/preview for a logged-in CMS user) renders at request time.
  const { isEnabled: isDraftMode } = await draftMode();

  const article = await resolveArticle(slug, { draft: isDraftMode });
  if (!article) notFound();

  const publishedDateIso = toIsoDateString(article.date);
  const modifiedDateIso = toIsoDateString(article.lastUpdated);
  const wordCount = countWords(article);
  const isPillar = wordCount >= 1500;

  const relatedBlogs = staticBlogs.filter((b) => b.slug !== slug).slice(0, 3);

  const relatedProductSlug = resolveRelatedProductSlug(article);
  let relatedProduct: Awaited<ReturnType<typeof getProductBySlug>> = undefined;
  if (relatedProductSlug) {
    try {
      relatedProduct = await getProductBySlug(relatedProductSlug);
    } catch (err) {
      relatedProduct = undefined;
      console.error("BlogDetailPage: related product lookup failed", err);
    }
  }

  // Links to products that were hidden in the CMS are dropped so the blog
  // never points at a 404. See src/lib/blog/visible-product-links.ts.
  const visibleInternalLinks = await filterLinksToLiveProducts(article.internalLinks);

  const tocItems = article.sections.map((s) => ({
    id: s.id,
    label: s.heading,
  }));

  const breadcrumbItems = [
    { name: "Home", url: SITE_URL },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: article.title, url: `${SITE_URL}/blog/${slug}` },
  ];

  return (
    <>
      {/* Schema markup — omitted for drafts so unpublished content is never
          exposed as structured data. */}
      {!article.isDraft && (
        <>
          <ArticleSchema
            headline={article.title}
            description={article.excerpt}
            datePublished={publishedDateIso}
            dateModified={modifiedDateIso}
            image={article.image}
            url={`${SITE_URL}/blog/${slug}`}
            authorName={article.author}
            authorCredentials={article.authorCredentials}
            wordCount={wordCount}
          />
          <BreadcrumbSchema items={breadcrumbItems} />
          {article.faqs && article.faqs.length > 0 && (
            <FAQSchema
              items={article.faqs.map((f) => ({
                question: f.question,
                answer: f.answer,
              }))}
            />
          )}
        </>
      )}

      <main>
        {/* ── Hero ── */}
        <section className="pt-32 pb-12">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <Breadcrumbs items={breadcrumbItems} className="mb-8" />
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-sm font-medium text-accent">
                  {article.category}
                </span>
              </div>

              {/* H1 — target keyword in first 60 chars */}
              <h1 className="font-heading text-display font-semibold text-primary">
                {article.title}
              </h1>

              <p className="text-secondary text-lg mt-6">{article.excerpt}</p>
            </div>

            {/* Hero image with keyword-rich alt text */}
            {article.image && (
              <div className="relative mt-12 rounded-3xl overflow-hidden bg-gray-50 flex items-center justify-center max-w-4xl mx-auto aspect-[16/9]">
                <ExpandableImage
                  src={article.image}
                  alt={article.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 896px, 100vw"
                  className="object-contain"
                />
              </div>
            )}
          </div>
        </section>

        {/* ── Author byline ── */}
        <section className="pb-8">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <AuthorByline
              name={article.author}
              credentials={article.authorCredentials}
              publishedDate={article.date}
              lastUpdated={article.lastUpdated}
            />
          </div>
        </section>

        {/* ── Content + product aside ── */}
        <section className="pb-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-12 lg:items-stretch">
              {/* Product aside — full-width above the article on mobile; on
                  desktop it occupies the right column. The <aside> stretches to
                  the full height of the article row (items-stretch), and the
                  inner card is position:sticky so it stays pinned near the top
                  of the viewport while the article content scrolls past it. */}
              <aside className="mb-10 lg:mb-0 lg:col-start-2 lg:row-start-1">
                <div className="lg:sticky lg:top-28">
                  <BlogProductAside product={relatedProduct} />
                </div>
              </aside>

              <div className="prose prose-lg max-w-none lg:col-start-1 lg:row-start-1">
              {/* Table of contents for pillar posts (1500+ words) */}
              {isPillar && <TableOfContents items={tocItems} />}

              {/* Sections with H2 headings */}
              {article.sections.map((section, idx) => (
                <div key={section.id} className="mb-8">
                  <h2
                    id={section.id}
                    className="font-heading text-h3 font-semibold text-primary mb-4 scroll-mt-24"
                  >
                    {section.heading}
                  </h2>
                  <ArticleSectionBody body={section.body} />

                  {/* Insert bullets after first section */}
                  {idx === 0 && article.bullets.length > 0 && (
                    <ul className="my-8 space-y-2">
                      {article.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          <span className="text-secondary">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* Block quote */}
              {article.quote && (
                <blockquote className="my-10 border-l-4 border-accent pl-6 py-2">
                  <p className="text-primary font-medium italic text-lg">
                    {article.quote}
                  </p>
                </blockquote>
              )}

              {/* Internal links section */}
              {visibleInternalLinks.length > 0 && (
                <div className="my-8 bg-light rounded-2xl p-6">
                  <h3 className="font-heading font-semibold text-primary text-base mb-3">
                    Related Products &amp; Services
                  </h3>
                  <ul className="space-y-2">
                    {visibleInternalLinks.map((link) => (
                      <li key={link.href} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        <Link
                          href={link.href}
                          className="text-accent hover:underline font-medium text-sm"
                        >
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Closing paragraph */}
              {article.closing && (
                <p className="text-secondary leading-relaxed">{article.closing}</p>
              )}

              {/* FAQ — visible + FAQPage schema above for AI answer engines */}
              {article.faqs && article.faqs.length > 0 && (
                <div className="mt-10 not-prose">
                  <h2 className="font-heading text-h3 font-semibold text-primary mb-4">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {article.faqs.map((faq) => (
                      <details
                        key={faq.question}
                        className="border border-gray-200 rounded-2xl overflow-hidden group"
                      >
                        <summary className="px-6 py-4 cursor-pointer flex items-center justify-between font-medium text-primary hover:bg-gray-50 transition-colors">
                          {faq.question}
                          <span className="text-accent ml-4 transition-transform group-open:rotate-45 text-xl">+</span>
                        </summary>
                        <div className="px-6 pb-4 text-sm text-secondary leading-relaxed">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {/* External references */}
              {article.externalLinks.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="font-heading font-semibold text-primary text-sm mb-2">
                    References &amp; Further Reading
                  </h3>
                  <ul className="space-y-1">
                    {article.externalLinks.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-accent hover:underline"
                        >
                          {link.text} ↗
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              </div>
            </div>
          </div>
        </section>

        {/* ── Related Blogs ── */}
        <section className="pb-20">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <SectionLabel>Insights &amp; Articles</SectionLabel>
                <h2 className="font-heading text-h2 font-semibold text-primary mt-3">
                  Recent blogs
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group bg-light rounded-2xl overflow-hidden"
                >
                  <div className="relative aspect-square bg-gray-50 flex items-center justify-center">
                    <Image
                      src={related.image}
                      alt={related.imageAlt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-medium text-accent">
                        {related.category}
                      </span>
                      <span className="text-xs text-muted">{related.date}</span>
                    </div>
                    <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">
                      {related.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {article.isDraft && <DraftPreviewBanner slug={slug} />}
    </>
  );
}
