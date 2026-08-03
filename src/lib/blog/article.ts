import type { ArticleBody } from './lexical-text'

/**
 * The single shape the blog detail page renders, regardless of whether the
 * article is hard-coded in `seo-blog-data.ts` or authored in Payload.
 *
 * The only structural difference between the two sources is `sections[].body`,
 * which is a plain string for static articles and Lexical rich text for CMS
 * articles. `ArticleBody` covers both and `ArticleSectionBody` renders both.
 */
export type RenderableSection = {
  heading: string
  id: string
  body: ArticleBody
}

export type RenderableArticle = {
  slug: string
  source: 'static' | 'cms'
  /** True when served through Next.js draft mode, i.e. an unpublished preview. */
  isDraft: boolean

  title: string
  metaTitle?: string
  metaDescription?: string
  /** Display date, e.g. "Mar 24, 2026". */
  date: string
  lastUpdated: string
  category: string
  image: string
  imageAlt: string
  excerpt: string
  author: string
  authorCredentials: string

  sections: RenderableSection[]
  bullets: string[]
  quote: string
  closing: string
  internalLinks: { text: string; href: string }[]
  externalLinks: { text: string; href: string }[]
  faqs?: { question: string; answer: string }[]
  relatedProductSlug?: string

  /** Keeps the article out of the index and the sitemap. */
  noIndex: boolean
  canonicalOverride?: string
}

/** Listing-card shape shared by the static list and CMS articles. */
export type BlogListItem = {
  slug: string
  title: string
  category: string
  date: string
  image: string
  imageAlt: string
  featured?: boolean
}
