'use client'

import { useRowLabel } from '@payloadcms/ui'

type SectionRow = {
  heading?: string
}

/**
 * Shows the section's H2 text as the collapsed row label in the admin UI so a
 * long article's outline is readable at a glance instead of "Section 01".
 */
export function SectionRowLabel() {
  const { data, rowNumber } = useRowLabel<SectionRow>()
  const index = String((rowNumber ?? 0) + 1).padStart(2, '0')
  const heading = data?.heading?.trim()

  return <span>{heading ? `${index}. ${heading}` : `${index}. Untitled section`}</span>
}
