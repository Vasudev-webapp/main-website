import type { BlogListItem, RenderableArticle, RenderableSection } from './article'
import { slugify } from '@/lib/slug'

/**
 * Payload documents are typed loosely here on purpose: `payload-types.ts` is
 * generated, and this module has to keep working for legacy rows that predate
 * the authoring fields (where most columns are null).
 */
export type RawBlogDoc = Record<string, unknown> & {
  slug?: unknown
  _status?: unknown
}

const DISPLAY_DATE = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
})

/** Formats an ISO timestamp as "Mar 24, 2026" to match the static articles. */
export function toDisplayDate(value: unknown): string {
  if (typeof value !== 'string' || !value) return ''
  const timestamp = Date.parse(value)
  if (Number.isNaN(timestamp)) return ''
  return DISPLAY_DATE.format(new Date(timestamp))
}

function str(value: unknown): string {
  return typeof value === 'string' ? value : ''
}

function optionalStr(value: unknown): string | undefined {
  const text = str(value).trim()
  return text.length > 0 ? text : undefined
}

/**
 * Rewrites a Google Drive sharing link to a direct image URL.
 * lh3.googleusercontent.com avoids the redirect + ORB issues that
 * drive.google.com/uc links hit when loaded by <Image>.
 */
export function toDirectDriveLink(url: string): string {
  const isDrive = url.includes('drive.google.com') || url.includes('googleusercontent.com')
  if (!isDrive) return url

  const match = url.match(/(?:\/d\/|id=)([\w.-]+)/)
  if (match && match[1]) {
    return `https://lh3.googleusercontent.com/u/0/d/${match[1]}=s0`
  }

  if (url.includes('googleusercontent.com') && url.includes('=')) {
    return `${url.split('=')[0]}=s0`
  }

  return url
}

/** Drive URL wins over the plain hero image URL, matching the field description. */
export function resolveDocImage(doc: RawBlogDoc): string {
  const drive = optionalStr(doc.googleDriveImageUrl)
  if (drive) return toDirectDriveLink(drive)
  return str(doc.image)
}

/** A doc is a full CMS article only when it is explicitly marked as one. */
export function isArticleDoc(doc: RawBlogDoc): boolean {
  return doc.entryType === 'article'
}

export function isPublishedDoc(doc: RawBlogDoc): boolean {
  return doc._status === 'published'
}

function mapSections(value: unknown): RenderableSection[] {
  if (!Array.isArray(value)) return []

  return value.flatMap((row) => {
    if (!row || typeof row !== 'object') return []
    const section = row as Record<string, unknown>
    const heading = str(section.heading).trim()
    const body = section.body
    if (!heading || !body) return []

    return [
      {
        heading,
        // Fall back to a deterministic anchor so the TOC and deep links keep
        // working even if the id was never persisted.
        id: optionalStr(section.id) ?? slugify(heading),
        body: body as RenderableSection['body'],
      },
    ]
  })
}

function mapStringArray(value: unknown, key: string): string[] {
  if (!Array.isArray(value)) return []
  return value.flatMap((row) => {
    if (!row || typeof row !== 'object') return []
    const text = str((row as Record<string, unknown>)[key]).trim()
    return text ? [text] : []
  })
}

function mapLinks(value: unknown): { text: string; href: string }[] {
  if (!Array.isArray(value)) return []
  return value.flatMap((row) => {
    if (!row || typeof row !== 'object') return []
    const link = row as Record<string, unknown>
    const text = str(link.text).trim()
    const href = str(link.href).trim()
    return text && href ? [{ text, href }] : []
  })
}

function mapFaqs(value: unknown): { question: string; answer: string }[] {
  if (!Array.isArray(value)) return []
  return value.flatMap((row) => {
    if (!row || typeof row !== 'object') return []
    const faq = row as Record<string, unknown>
    const question = str(faq.question).trim()
    const answer = str(faq.answer).trim()
    return question && answer ? [{ question, answer }] : []
  })
}

/**
 * Converts a Payload document into the shape the blog detail page renders.
 * Returns null when the doc is not a usable article (e.g. an image-override
 * row, or a draft with no sections yet) so callers can fall back to static data.
 */
export function toRenderableArticle(
  doc: RawBlogDoc,
  options: { isDraft: boolean }
): RenderableArticle | null {
  const slug = str(doc.slug)
  if (!slug || !isArticleDoc(doc)) return null

  const sections = mapSections(doc.sections)
  const title = str(doc.title).trim()
  if (!title || sections.length === 0) return null

  const publishedDisplay = toDisplayDate(doc.publishedDate) || toDisplayDate(doc.createdAt)
  const updatedDisplay = toDisplayDate(doc.lastUpdated) || toDisplayDate(doc.updatedAt)

  return {
    slug,
    source: 'cms',
    isDraft: options.isDraft && !isPublishedDoc(doc),

    title,
    metaTitle: optionalStr(doc.metaTitle),
    metaDescription: optionalStr(doc.metaDescription),
    date: publishedDisplay || updatedDisplay,
    lastUpdated: updatedDisplay || publishedDisplay,
    category: str(doc.category) || 'Insights',
    image: resolveDocImage(doc),
    imageAlt: str(doc.imageAlt) || title,
    excerpt: str(doc.excerpt),
    author: str(doc.author) || 'Vasudev Chemo Pharma Technical Team',
    authorCredentials: str(doc.authorCredentials),

    sections,
    bullets: mapStringArray(doc.bullets, 'text'),
    quote: str(doc.quote),
    closing: str(doc.closing),
    internalLinks: mapLinks(doc.internalLinks),
    externalLinks: mapLinks(doc.externalLinks),
    faqs: mapFaqs(doc.faqs),
    relatedProductSlug: optionalStr(doc.relatedProductSlug),

    noIndex: doc.noIndex === true,
    canonicalOverride: optionalStr(doc.canonicalOverride),
  }
}

/** Converts a Payload document into a blog listing card. */
export function toBlogListItem(doc: RawBlogDoc): BlogListItem | null {
  const slug = str(doc.slug)
  const title = str(doc.title).trim()
  if (!slug || !title || !isArticleDoc(doc)) return null
  if (doc.noIndex === true) return null

  const image = resolveDocImage(doc)
  if (!image) return null

  return {
    slug,
    title,
    category: str(doc.category) || 'Insights',
    date: toDisplayDate(doc.publishedDate) || toDisplayDate(doc.updatedAt),
    image,
    imageAlt: str(doc.imageAlt) || title,
    featured: doc.featured === true,
  }
}
