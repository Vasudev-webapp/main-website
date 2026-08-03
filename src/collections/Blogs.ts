import type { CollectionConfig, Validate } from 'payload'
import {
  BlockquoteFeature,
  BoldFeature,
  EXPERIMENTAL_TableFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineCodeFeature,
  InlineToolbarFeature,
  ItalicFeature,
  LinkFeature,
  OrderedListFeature,
  ParagraphFeature,
  StrikethroughFeature,
  SubscriptFeature,
  SuperscriptFeature,
  UnderlineFeature,
  UnorderedListFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { SITE_URL } from '@/lib/seo/seo-route-helpers'
import { slugify } from '@/lib/slug'

/* ------------------------------------------------------------------ */
/*  Publish-time validation                                           */
/*                                                                    */
/*  Content rules are only enforced when the document is published so  */
/*  editors can save half-finished drafts freely. Legacy rows that     */
/*  exist purely to override a static article's image use              */
/*  entryType='image-override' and skip article validation entirely.   */
/* ------------------------------------------------------------------ */

type SiblingData = { _status?: string; entryType?: string }

function isPublishedArticle(data: unknown, siblingData: unknown): boolean {
  const doc = (data ?? {}) as SiblingData
  const sibling = (siblingData ?? {}) as SiblingData
  const status = doc._status ?? sibling._status
  const entryType = doc.entryType ?? sibling.entryType
  // Rows that predate the authoring fields are backfilled to 'image-override'
  // by the add_blog_authoring_fields migration, so they skip article validation.
  return status === 'published' && entryType === 'article'
}

/**
 * Wraps a validate function so it only runs for published articles.
 */
function whenPublished<T>(
  check: (value: T) => true | string
): Validate<T, unknown, unknown> {
  return ((value, { data, siblingData }) => {
    if (!isPublishedArticle(data, siblingData)) return true
    return check(value as T)
  }) as Validate<T, unknown, unknown>
}

function requiredText(label: string, min = 1) {
  return (value: string | null | undefined): true | string => {
    const text = (value ?? '').trim()
    if (!text) return `${label} is required before publishing.`
    if (text.length < min) {
      return `${label} must be at least ${min} characters before publishing.`
    }
    return true
  }
}

function isValidHttpUrl(value: string): boolean {
  try {
    const url = new URL(value)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

/* ------------------------------------------------------------------ */
/*  Rich text editor for article body sections                        */
/*                                                                    */
/*  Deliberately scoped to what the article template needs: H3/H4      */
/*  subheadings (H1/H2 are owned by the page shell and section         */
/*  headings), real HTML tables, ordered/unordered lists, links and    */
/*  inline formatting. Real tables matter because the SEO/AEO ruleset   */
/*  requires liftable structured data, not images of tables.           */
/* ------------------------------------------------------------------ */

const articleBodyEditor = lexicalEditor({
  features: [
    ParagraphFeature(),
    HeadingFeature({ enabledHeadingSizes: ['h3', 'h4'] }),
    BoldFeature(),
    ItalicFeature(),
    UnderlineFeature(),
    StrikethroughFeature(),
    SubscriptFeature(),
    SuperscriptFeature(),
    InlineCodeFeature(),
    UnorderedListFeature(),
    OrderedListFeature(),
    BlockquoteFeature(),
    EXPERIMENTAL_TableFeature(),
    HorizontalRuleFeature(),
    LinkFeature({
      enabledCollections: ['products', 'blogs'],
    }),
    FixedToolbarFeature(),
    InlineToolbarFeature(),
  ],
})

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  labels: {
    singular: 'Article',
    plural: 'Articles',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'entryType', '_status', 'category', 'updatedAt'],
    description:
      'Write, preview and publish articles. "Save as draft" keeps a post private; "Publish" makes it live at /blog/<slug> and adds it to the sitemap.',
    listSearchableFields: ['title', 'slug', 'category', 'primaryKeyword'],
    // Opens the real front-end URL in a new tab with Next.js draft mode on, so
    // an unpublished article renders exactly as it will once published.
    //
    // NOTE: Payload's iframe-based Live Preview is intentionally not enabled.
    // The site CSP sets `frame-ancestors 'none'` (src/middleware.ts), so the
    // admin panel cannot frame the front-end. Enabling it would require
    // relaxing that to `frame-ancestors 'self'`.
    preview: (doc) => {
      if (typeof doc?.slug !== 'string' || !doc.slug) return null
      return `/api/preview?slug=${encodeURIComponent(doc.slug)}`
    },
  },
  // Draft/publish workflow with a version history editors can roll back to.
  // Autosave keeps the draft in sync while typing, so the preview tab always
  // shows the latest edits without needing an explicit save first.
  versions: {
    drafts: {
      autosave: { interval: 2000 },
    },
    maxPerDoc: 30,
  },
  access: {
    // Anonymous traffic may only read published articles. Draft content is
    // restricted to logged-in CMS users, which is what keeps previews private.
    read: ({ req: { user } }) => {
      if (user) return true
      return {
        _status: {
          equals: 'published',
        },
      }
    },
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    // Any logged-in editor can delete, matching create/update. Restricting this
    // to role='admin' would hide the Delete action entirely for the existing
    // accounts, which all carry the default role='user'.
    delete: ({ req: { user } }) => Boolean(user),
  },
  hooks: {
    afterChange: [
      async ({ doc, previousDoc, req }) => {
        // Purge the ISR cache so a publish is visible immediately instead of
        // after the 1-hour revalidate window, and tell IndexNow about it.
        const slug = typeof doc?.slug === 'string' ? doc.slug : undefined
        if (!slug) return

        try {
          const { revalidatePath } = await import('next/cache')
          revalidatePath(`/blog/${slug}`)
          revalidatePath('/blog')
          revalidatePath('/sitemap.xml')

          const previousSlug =
            typeof previousDoc?.slug === 'string' ? previousDoc.slug : undefined
          if (previousSlug && previousSlug !== slug) {
            revalidatePath(`/blog/${previousSlug}`)
          }
        } catch (err) {
          req.payload.logger.error({
            msg: 'Blogs.afterChange: revalidation failed',
            err,
          })
        }

        // Only ping search engines for content that is actually live.
        if (doc?._status !== 'published' || doc?.noIndex === true) return

        try {
          const { submitUrlsToIndexNow } = await import('@/lib/seo/indexnow')
          const result = await submitUrlsToIndexNow([`${SITE_URL}/blog/${slug}`])
          if (!result.ok) {
            req.payload.logger.warn({
              msg: 'Blogs.afterChange: IndexNow submission was not accepted',
              error: result.error,
              status: result.status,
            })
          }
        } catch (err) {
          req.payload.logger.error({ msg: 'Blogs.afterChange: IndexNow failed', err })
        }
      },
    ],
    afterDelete: [
      async ({ doc, req }) => {
        const slug = typeof doc?.slug === 'string' ? doc.slug : undefined
        if (!slug) return
        try {
          const { revalidatePath } = await import('next/cache')
          revalidatePath(`/blog/${slug}`)
          revalidatePath('/blog')
          revalidatePath('/sitemap.xml')
        } catch (err) {
          req.payload.logger.error({
            msg: 'Blogs.afterDelete: revalidation failed',
            err,
          })
        }
      },
    ],
  },
  fields: [
    /* ---------------- Always-visible identity fields ---------------- */
    {
      name: 'title',
      type: 'text',
      required: true,
      unique: true,
      label: 'Title (H1)',
      admin: {
        description:
          'The visible H1. Lead with the primary keyword and keep it readable — the SERP title can differ via the SEO tab.',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      label: 'URL slug',
      admin: {
        position: 'sidebar',
        description:
          'Final URL: /blog/<slug>. Short and keyword-based, no stop-word bloat. Changing this after publishing breaks existing links.',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.title) {
              return slugify(data.title as string)
            }
            return typeof value === 'string' ? slugify(value) : value
          },
        ],
      },
      validate: (value: string | null | undefined) => {
        if (!value) return 'A URL slug is required.'
        if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)) {
          return 'Use lowercase letters, numbers and single hyphens only.'
        }
        return true
      },
    },
    {
      name: 'entryType',
      type: 'select',
      required: true,
      defaultValue: 'article',
      label: 'Entry type',
      options: [
        { label: 'Full article (written in the CMS)', value: 'article' },
        { label: 'Image override only (for a hard-coded article)', value: 'image-override' },
      ],
      admin: {
        position: 'sidebar',
        description:
          'Choose "Full article" to write and publish here. "Image override only" keeps the legacy behaviour of swapping the hero image on a hard-coded article.',
      },
    },

    /* ---------------------------- Tabs ---------------------------- */
    {
      type: 'tabs',
      tabs: [
        /* ======================== CONTENT ======================== */
        {
          label: 'Content',
          description:
            'Follow the house outline: intro → what it is → how it works → applications → dosage/specs → vs alternatives → safety → FAQ → conclusion.',
          fields: [
            {
              name: 'category',
              type: 'select',
              hasMany: false,
              label: 'Category',
              options: [
                'H2S Scavengers',
                'Technical Guides',
                'Specialty Chemicals',
                'Sustainability',
                'Comparisons',
                'Buying Guides',
                'Brand Alternatives',
                'Applications',
                'Safety & Handling',
                'Company News',
              ].map((value) => ({ label: value, value })),
              admin: {
                description: 'Drives the category label and the blog listing filters.',
              },
              validate: whenPublished<string | null | undefined>(
                requiredText('Category')
              ),
            },
            {
              name: 'excerpt',
              type: 'textarea',
              label: 'Intro / excerpt',
              maxLength: 600,
              admin: {
                description:
                  'Shown under the H1 and used as the default meta description. 100–150 words of the reader’s problem plus what the article covers. Put the primary keyword in the first 100 words.',
              },
              validate: whenPublished<string | null | undefined>(
                requiredText('Intro / excerpt', 80)
              ),
            },
            {
              name: 'sections',
              type: 'array',
              label: 'Body sections (each renders as an H2)',
              labels: { singular: 'Section', plural: 'Sections' },
              minRows: 0,
              admin: {
                initCollapsed: false,
                description:
                  'One row per H2. Lead each section with a direct 40–60 word answer, then expand — that is what answer engines lift.',
                components: {
                  RowLabel: '@/components/admin/SectionRowLabel#SectionRowLabel',
                },
              },
              validate: (value: unknown, options) => {
                if (!isPublishedArticle(options?.data, options?.siblingData)) return true
                if (!Array.isArray(value) || value.length < 2) {
                  return 'Add at least 2 body sections before publishing.'
                }
                return true
              },
              fields: [
                {
                  name: 'heading',
                  type: 'text',
                  required: true,
                  label: 'H2 heading',
                  admin: {
                    description:
                      'Prefer question-form headings that mirror People Also Ask. Each secondary keyword should own a heading.',
                  },
                },
                {
                  name: 'id',
                  type: 'text',
                  label: 'Anchor id',
                  admin: {
                    description:
                      'Auto-filled from the heading. Used for the table of contents and deep links — avoid editing after publishing.',
                  },
                  hooks: {
                    beforeValidate: [
                      ({ value, siblingData }) => {
                        if (value) return slugify(String(value))
                        const heading = (siblingData as { heading?: string })?.heading
                        return heading ? slugify(heading) : value
                      },
                    ],
                  },
                },
                {
                  name: 'body',
                  type: 'richText',
                  required: true,
                  label: 'Section body',
                  editor: articleBodyEditor,
                  admin: {
                    description:
                      'Use H3/H4 for sub-points, real tables for dosage/comparison data, and descriptive link text (never "click here").',
                  },
                },
              ],
            },
            {
              name: 'bullets',
              type: 'array',
              label: 'Key takeaways',
              labels: { singular: 'Takeaway', plural: 'Takeaways' },
              admin: {
                description:
                  'Rendered as a scannable list directly after the first section. Front-load the key fact or number in each.',
              },
              fields: [
                {
                  name: 'text',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              name: 'quote',
              type: 'textarea',
              label: 'Pull quote',
              maxLength: 400,
              admin: {
                description:
                  'One quotable, self-contained claim. Highly citable by LLMs, so keep it factual and specific.',
              },
            },
            {
              name: 'closing',
              type: 'textarea',
              label: 'Conclusion',
              maxLength: 1200,
              admin: {
                description:
                  'Recap plus a soft CTA to the product page or a quote request.',
              },
              validate: whenPublished<string | null | undefined>(
                requiredText('Conclusion', 40)
              ),
            },
            {
              name: 'faqs',
              type: 'array',
              label: 'FAQ (emits FAQPage schema)',
              labels: { singular: 'FAQ', plural: 'FAQs' },
              admin: {
                description:
                  '3–5 real questions from sales calls or People Also Ask. Answers must stand alone — they are published as structured data, so they must match the visible text.',
              },
              fields: [
                { name: 'question', type: 'text', required: true },
                {
                  name: 'answer',
                  type: 'textarea',
                  required: true,
                  admin: {
                    description: 'Concise and self-contained; 40–60 words works well.',
                  },
                },
              ],
            },
          ],
        },

        /* ========================== SEO ========================== */
        {
          label: 'SEO',
          description:
            'Controls the SERP snippet, canonical URL and indexing. Leave the meta fields empty to fall back to the title and excerpt.',
          fields: [
            {
              name: 'primaryKeyword',
              type: 'text',
              label: 'Primary keyword',
              admin: {
                description:
                  'One primary keyword per URL. Should appear in the title, H1, first 100 words, one H2, the meta description and one image alt.',
              },
            },
            {
              name: 'secondaryKeywords',
              type: 'array',
              label: 'Secondary / supporting keywords',
              admin: {
                description:
                  'Each of these should own a heading with a full, self-contained answer.',
              },
              fields: [{ name: 'keyword', type: 'text', required: true }],
            },
            {
              name: 'metaTitle',
              type: 'text',
              label: 'Meta title',
              maxLength: 70,
              admin: {
                description:
                  'SERP title only — the on-page H1 is unchanged. Target 55–60 characters with the primary keyword near the front.',
              },
            },
            {
              name: 'metaDescription',
              type: 'textarea',
              label: 'Meta description',
              maxLength: 180,
              admin: {
                description:
                  'Target 150–160 characters: primary keyword, a specific value claim, and a soft CTA. Falls back to the excerpt.',
              },
            },
            {
              name: 'noIndex',
              type: 'checkbox',
              defaultValue: false,
              label: 'Exclude from search engines (noindex)',
              admin: {
                description:
                  'Adds noindex,follow and drops the article from the sitemap. Use for thin or duplicate pages only.',
              },
            },
            {
              name: 'canonicalOverride',
              type: 'text',
              label: 'Canonical URL override',
              admin: {
                description:
                  'Leave empty for the normal self-referencing canonical. Set only when this article deliberately consolidates into another URL.',
              },
              validate: (value: string | null | undefined) => {
                if (!value) return true
                return isValidHttpUrl(value)
                  ? true
                  : 'Enter a full absolute URL including https://'
              },
            },
          ],
        },

        /* ========================= MEDIA ========================= */
        {
          label: 'Media',
          fields: [
            {
              name: 'image',
              type: 'text',
              label: 'Hero image URL',
              admin: {
                description:
                  'Full https URL to the hero image. Also used for the OpenGraph card and the image sitemap entry.',
              },
              validate: ((value, options) => {
                if (value && !isValidHttpUrl(value)) {
                  return 'Must be a valid absolute URL.'
                }
                if (!isPublishedArticle(options?.data, options?.siblingData)) return true
                const drive = (options?.data as { googleDriveImageUrl?: string } | undefined)
                  ?.googleDriveImageUrl
                if (!value && !drive) {
                  return 'Add a hero image URL (or a Google Drive image URL) before publishing.'
                }
                return true
              }) as Validate<string, unknown, unknown>,
            },
            {
              name: 'googleDriveImageUrl',
              type: 'text',
              label: 'Google Drive image URL',
              admin: {
                description:
                  'Public Drive sharing link (/d/FILE_ID/ or id=FILE_ID). Auto-rewritten to a direct image URL and takes priority over the hero image URL.',
              },
              hooks: {
                beforeValidate: [
                  ({ value }: { value?: string }) => {
                    if (!value) return value
                    const match = value.match(/(?:\/d\/|id=)([\w-]+)/)
                    if (match && match[1]) {
                      return `https://lh3.googleusercontent.com/d/${match[1]}=s0`
                    }
                    return value
                  },
                ],
              },
            },
            {
              name: 'imageAlt',
              type: 'text',
              label: 'Hero image alt text',
              maxLength: 180,
              admin: {
                description:
                  'Describe the image for screen readers. Include the keyword only where it reads naturally — never stuff it.',
              },
              validate: whenPublished<string | null | undefined>(
                requiredText('Hero image alt text', 10)
              ),
            },
          ],
        },

        /* ==================== LINKS & AUTHORSHIP ==================== */
        {
          label: 'Links & Authorship',
          description:
            'E-E-A-T signals and the internal link graph. Both are load-bearing for how this article is trusted and crawled.',
          fields: [
            {
              name: 'author',
              type: 'text',
              label: 'Author',
              defaultValue: 'Vasudev Chemo Pharma Technical Team',
              admin: { description: 'Shown in the byline and the Article schema.' },
              validate: whenPublished<string | null | undefined>(requiredText('Author')),
            },
            {
              name: 'authorCredentials',
              type: 'text',
              label: 'Author credentials',
              defaultValue: 'Specialty chemical manufacturing & H2S scavenger formulation',
              admin: {
                description:
                  'Concrete expertise, e.g. "M.Sc. Chemistry, 12 years in sour gas treatment".',
              },
              validate: whenPublished<string | null | undefined>(
                requiredText('Author credentials')
              ),
            },
            {
              name: 'relatedProductSlug',
              type: 'text',
              label: 'Related product slug',
              admin: {
                description:
                  'Product this article supports, e.g. mea-triazine-78-h2s-scavenger. Renders the sticky product card. Leave empty to auto-derive from the first /product/ internal link.',
              },
            },
            {
              name: 'internalLinks',
              type: 'array',
              label: 'Internal links',
              admin: {
                description:
                  'Link to the pillar page, sibling articles and the product page. Descriptive anchors only. Links to hidden products are dropped automatically at render time.',
              },
              fields: [
                {
                  name: 'text',
                  type: 'text',
                  required: true,
                  label: 'Anchor text',
                },
                {
                  name: 'href',
                  type: 'text',
                  required: true,
                  label: 'Path',
                  admin: { description: 'Site-relative path, e.g. /product/mea-triazine-78-h2s-scavenger' },
                  validate: (value: string | null | undefined) => {
                    if (!value) return 'A path is required.'
                    if (!value.startsWith('/')) {
                      return 'Internal links must be site-relative and start with "/".'
                    }
                    return true
                  },
                },
              ],
            },
            {
              name: 'externalLinks',
              type: 'array',
              label: 'References & further reading',
              admin: {
                description:
                  'Cite regulators, standards bodies (NACE/API), SDS or peer-reviewed sources — never competitor blogs as authority.',
              },
              fields: [
                { name: 'text', type: 'text', required: true, label: 'Source name' },
                {
                  name: 'href',
                  type: 'text',
                  required: true,
                  label: 'URL',
                  validate: (value: string | null | undefined) => {
                    if (!value) return 'A URL is required.'
                    return isValidHttpUrl(value)
                      ? true
                      : 'Enter a full absolute URL including https://'
                  },
                },
              ],
            },
          ],
        },
      ],
    },

    /* -------------------------- Sidebar -------------------------- */
    {
      name: 'publishedDate',
      type: 'date',
      label: 'Published date',
      admin: {
        position: 'sidebar',
        date: { pickerAppearance: 'dayOnly', displayFormat: 'd MMM yyyy' },
        description: 'Drives the byline and Article schema datePublished.',
      },
      hooks: {
        beforeChange: [
          ({ value, data }) => {
            // Stamp the publish date the first time an article goes live.
            if (!value && data?._status === 'published') return new Date().toISOString()
            return value
          },
        ],
      },
    },
    {
      name: 'lastUpdated',
      type: 'date',
      label: 'Last reviewed',
      admin: {
        position: 'sidebar',
        date: { pickerAppearance: 'dayOnly', displayFormat: 'd MMM yyyy' },
        description:
          'A visible "last reviewed" date is an E-E-A-T signal. Refreshed automatically on every save.',
      },
      hooks: {
        beforeChange: [() => new Date().toISOString()],
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      label: 'Feature on the blog index',
      admin: { position: 'sidebar' },
    },
  ],
}
