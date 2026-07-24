export const REMOVED_PRODUCT_SLUGS = [
  "copper-sulphate",
  "manganese-sulphate",
  // Sodium Xylene Sulfonate (SXS) remains hidden — not currently sold.
  // Sodium Cumene Sulfonate (SCS 40% & 90%) was restored: the company now
  // sells/manufactures it, so those slugs are intentionally NOT listed here.
  "sodium-xylene-sulfonate-90",
  "sodium-xylene-sulfonate-40",
] as const;

export function isRemovedProductSlug(slug: string): boolean {
  return (REMOVED_PRODUCT_SLUGS as readonly string[]).includes(slug);
}
