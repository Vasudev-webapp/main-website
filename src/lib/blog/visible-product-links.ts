import { getAllProducts } from "@/lib/products-payload";

/*
 * Blog → product link safety.
 *
 * Blog posts carry a hand-authored `internalLinks` list that is rendered in the
 * "Related Products & Services" block. Several of those links point at
 * /product/<slug>. When a product is hidden in the CMS (status !== "active") or
 * added to REMOVED_PRODUCT_SLUGS it disappears from the product list and its
 * /product/<slug> route stops resolving — but the blog link stayed, so readers
 * and Googlebot hit a 404.
 *
 * These helpers gate only `/product/...` hrefs against the exact same source
 * the product listing uses (getAllProducts), so the two can never disagree.
 * Every other href — /blog, /contact, /industries, external, anchors — passes
 * through untouched, which keeps the blog otherwise identical.
 *
 * Hide a product  → its link vanishes from the blog.
 * Unhide it       → the link reappears. No content edit needed either way.
 */

const PRODUCT_PATH = /^\/product\/([^/?#]+)/;

/** Slug of the product a `/product/...` href targets, or null for other hrefs. */
export function productSlugFromHref(href: string): string | null {
  const match = href.match(PRODUCT_PATH);
  return match ? match[1] : null;
}

/** Slugs currently visible in the product list. */
export async function getLiveProductSlugs(): Promise<Set<string>> {
  const products = await getAllProducts();
  return new Set(products.map((product) => product.slug));
}

/**
 * Drop links whose target product is no longer live. Non-product links are kept.
 *
 * On a lookup failure the links are returned unchanged (fail open): a transient
 * database blip must not strip internal links from every blog post at once,
 * which would be a worse SEO regression than a temporary broken link — and if
 * the database is down the product page itself is unavailable regardless.
 */
export async function filterLinksToLiveProducts<T extends { href: string }>(
  links: readonly T[]
): Promise<T[]> {
  const productLinks = links.filter((link) => productSlugFromHref(link.href));
  if (productLinks.length === 0) return [...links];

  let liveSlugs: Set<string>;
  try {
    liveSlugs = await getLiveProductSlugs();
  } catch (err) {
    console.error("filterLinksToLiveProducts: product lookup failed, keeping links", err);
    return [...links];
  }

  return links.filter((link) => {
    const slug = productSlugFromHref(link.href);
    return slug === null || liveSlugs.has(slug);
  });
}
