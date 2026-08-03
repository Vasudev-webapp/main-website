import { convertLexicalToPlaintext } from '@payloadcms/richtext-lexical/plaintext'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

/**
 * A section body can come from two places:
 *  - hard-coded articles in `seo-blog-data.ts`, where it is a plain string
 *  - CMS articles, where it is Lexical rich text
 *
 * Everything downstream (word count, Article schema, TOC) needs plain text, so
 * both shapes are normalised here.
 */
export type ArticleBody = string | SerializedEditorState

export function isLexicalBody(body: ArticleBody | null | undefined): body is SerializedEditorState {
  return Boolean(body) && typeof body === 'object' && 'root' in (body as object)
}

/**
 * Flattens a section body to plain text. Returns an empty string for unusable
 * input rather than throwing, because this feeds page rendering.
 */
export function bodyToPlainText(body: ArticleBody | null | undefined): string {
  if (!body) return ''
  if (typeof body === 'string') return body
  if (!isLexicalBody(body)) return ''

  try {
    return convertLexicalToPlaintext({ data: body })
  } catch {
    return ''
  }
}

export function countWordsInText(...parts: (string | null | undefined)[]): number {
  return parts
    .filter((part): part is string => Boolean(part))
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length
}
