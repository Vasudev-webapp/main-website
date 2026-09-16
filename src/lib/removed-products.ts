export const REMOVED_PRODUCT_SLUGS = [
  "copper-sulphate",
  "manganese-sulphate",
  // Sodium Cumene Sulfonate (SCS 40% & 90%) and Sodium Xylene Sulfonate
  // (SXS 40% & 90%) are restored — company sells/manufactures them, so those
  // slugs are intentionally NOT listed here.
] as const;

export function isRemovedProductSlug(slug: string): boolean {
  return (REMOVED_PRODUCT_SLUGS as readonly string[]).includes(slug);
}
