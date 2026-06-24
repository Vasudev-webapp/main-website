export const REMOVED_PRODUCT_SLUGS = [
  "copper-sulphate",
  "manganese-sulphate",
  "sodium-cumene-sulfonate-40",
  "sodium-cumene-sulfonate-90",
  "sodium-xylene-sulfonate-90",
  "sodium-xylene-sulfonate-40",
] as const;

export function isRemovedProductSlug(slug: string): boolean {
  return (REMOVED_PRODUCT_SLUGS as readonly string[]).includes(slug);
}
