import { NextResponse } from "next/server";
import { getAllProducts } from "@/lib/products-payload";
import { blogData } from "@/app/(frontend)/blog/[slug]/seo-blog-data";
import { getAllBlogSlugs } from "@/lib/blogs-payload";
import { CASE_STUDY_SLUGS } from "@/lib/case-studies-data";
import { COUNTRY_SLUGS } from "@/lib/seo/country-pages-data";
import { COMPETITOR_SLUGS } from "@/lib/seo/competitor-comparison-data";
import { APPLICATION_SLUGS } from "@/lib/seo/application-pages-data";
import { RESOURCE_SLUGS } from "@/lib/seo/resource-articles-data";
import { CUSTOM_LANDING_PAGES_DATA } from "@/lib/seo/custom-landing-pages-data";
import {
  buildApplicationPagePath,
  buildComparisonPagePath,
  buildCountryPagePath,
  buildResourceArticlePath,
  normalizeCountrySlug,
} from "@/lib/seo/seo-route-helpers";
import type { Product } from "@/lib/types";
import {
  isProductEngineEnabled,
  GULF_COUNTRY_BY_CODE,
  buildGulfSupplyPath,
  isHandBuiltSupplySlug,
  resolveGulfSupply,
  isGulfSupplyPageIndexable,
} from "@/lib/seo-engine";

const SITE_URL = "https://www.vasudevchemopharma.com";

// Cache sitemap for 1 hour; regenerate in background via ISR.
// force-dynamic was causing every crawl request to rebuild from DB,
// which hurt crawl budget on slow cold starts.
export const revalidate = 3600;

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

type RouteConfig = {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
};

type SitemapEntry = {
  url: string;
  lastModified: string;
  changeFrequency: ChangeFrequency;
  priority: number;
  image?: {
    url: string;
    caption?: string;
    title?: string;
  };
};

type LiveBlogSlug = {
  slug: string;
  updatedAt: string;
  image?: string;
};

const HIGH_PRIORITY_PRODUCTS = new Set([
  "mea-triazine-78-h2s-scavenger",
]);

const STATIC_ROUTES: RouteConfig[] = [
  { path: "/hydrotropes", changeFrequency: "weekly", priority: 0.9 },
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/product", changeFrequency: "weekly", priority: 0.9 },
  { path: "/service", changeFrequency: "monthly", priority: 0.8 },
  { path: "/industries", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
  { path: "/case-study", changeFrequency: "monthly", priority: 0.6 },
  { path: "/how-h2s-scavengers-work", changeFrequency: "monthly", priority: 0.8 },
  { path: "/mea-triazine-vs-mma-triazine", changeFrequency: "monthly", priority: 0.8 },
  { path: "/h2s-scavenger-oil-gas", changeFrequency: "weekly", priority: 0.9 },
  { path: "/hydrotropes-global-export", changeFrequency: "weekly", priority: 0.9 },
  { path: "/mea-triazine-prices", changeFrequency: "weekly", priority: 0.9 },
  { path: "/supply/mea-triazine-78", changeFrequency: "weekly", priority: 0.85 },
  { path: "/compare", changeFrequency: "weekly", priority: 0.8 },
  { path: "/applications", changeFrequency: "weekly", priority: 0.8 },
  { path: "/resources", changeFrequency: "weekly", priority: 0.75 },
  { path: "/sitemap", changeFrequency: "weekly", priority: 0.8 },
  { path: "/legal/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  // NOTE: /legal-pages/privacy-policy intentionally omitted — it 301-redirects
  // to /legal/privacy-policy (see that route). Listing a redirecting URL in the
  // sitemap is a hygiene error; the page itself remains live via the redirect.
  // ── BKC (Benzalkonium Chloride) support pages — Day 3 additions ──
  { path: "/benzalkonium-chloride-50-vs-80", changeFrequency: "monthly", priority: 0.85 },
  { path: "/bkc-uses-applications", changeFrequency: "monthly", priority: 0.85 },
  { path: "/bkc-vs-ddac-vs-ctab", changeFrequency: "monthly", priority: 0.85 },
  // ── EDDM (Ethylenedioxy dimethanol, CAS 3586-55-8) support pages ──
  { path: "/eddm-grades-selection-guide", changeFrequency: "monthly", priority: 0.85 },
  { path: "/eddm-in-can-preservative-coatings", changeFrequency: "monthly", priority: 0.85 },
  { path: "/eddm-metalworking-fluid-biocide", changeFrequency: "monthly", priority: 0.85 },
  { path: "/eddm-multiphase-h2s-scavenger", changeFrequency: "weekly", priority: 0.9 },
  { path: "/eddm-cas-3586-55-8-properties", changeFrequency: "monthly", priority: 0.8 },
  { path: "/how-eddm-works-formaldehyde-donor", changeFrequency: "monthly", priority: 0.8 },
  { path: "/eddm-synonyms-trade-names", changeFrequency: "monthly", priority: 0.75 },
  { path: "/eddm-dosage-guide", changeFrequency: "monthly", priority: 0.8 },
  { path: "/eddm-price-supplier-india", changeFrequency: "weekly", priority: 0.9 },
  { path: "/eddm-vs-isothiazolinone-biocides", changeFrequency: "monthly", priority: 0.85 },
  // ── Triazine / H2S scavenger support pages (MEA 78% / MMA 40%) ──
  { path: "/triazine-injection-vs-contactor-tower", changeFrequency: "monthly", priority: 0.85 },
  { path: "/sagd-h2s-scavenger", changeFrequency: "monthly", priority: 0.8 },
  { path: "/lpg-h2s-scavenger", changeFrequency: "monthly", priority: 0.8 },
  { path: "/sour-water-stripper-h2s", changeFrequency: "monthly", priority: 0.8 },
  { path: "/refinery-fuel-gas-h2s-scavenger", changeFrequency: "monthly", priority: 0.8 },
  { path: "/storage-tank-h2s-scavenger", changeFrequency: "monthly", priority: 0.8 },
  { path: "/marine-bunker-fuel-h2s-scavenger", changeFrequency: "monthly", priority: 0.8 },
  { path: "/produced-water-h2s-scavenger", changeFrequency: "monthly", priority: 0.8 },
  { path: "/tank-truck-railcar-h2s-transport", changeFrequency: "monthly", priority: 0.8 },
  { path: "/spent-triazine-monitoring", changeFrequency: "monthly", priority: 0.8 },
  { path: "/triazine-foaming-emulsion-troubleshooting", changeFrequency: "monthly", priority: 0.8 },
  { path: "/custom-triazine-blends-formulations", changeFrequency: "monthly", priority: 0.8 },
  { path: "/triazine-corrosion-inhibitor-compatibility", changeFrequency: "monthly", priority: 0.8 },
  { path: "/triazine-vs-nitrite-scavenger", changeFrequency: "monthly", priority: 0.85 },
  { path: "/triazine-vs-non-triazine-scavenger", changeFrequency: "monthly", priority: 0.85 },
  // ── Sodium Cumene Sulfonate (SCS 40% & 90%, CAS 28348-53-0) support pages ──
  { path: "/scs-40-vs-scs-90-selection-guide", changeFrequency: "monthly", priority: 0.85 },
  { path: "/sodium-cumene-sulfonate-vs-sodium-xylene-sulfonate", changeFrequency: "monthly", priority: 0.85 },
  { path: "/best-hydrotrope-liquid-detergent", changeFrequency: "monthly", priority: 0.85 },
  { path: "/sodium-cumene-sulfonate-sls-free-sulfate-free", changeFrequency: "monthly", priority: 0.8 },
  { path: "/sodium-cumene-sulfonate-cas-28348-53-0-properties", changeFrequency: "monthly", priority: 0.8 },
  { path: "/sodium-cumene-sulfonate-synonyms-trade-names", changeFrequency: "monthly", priority: 0.75 },
  { path: "/how-sodium-cumene-sulfonate-works-hydrotrope", changeFrequency: "monthly", priority: 0.8 },
  { path: "/is-sodium-cumene-sulfonate-safe-biodegradable", changeFrequency: "monthly", priority: 0.8 },
  { path: "/sodium-cumene-sulfonate-liquid-detergent-dishwash", changeFrequency: "monthly", priority: 0.85 },
  { path: "/sodium-cumene-sulfonate-shampoo-personal-care", changeFrequency: "monthly", priority: 0.85 },
  { path: "/sodium-cumene-sulfonate-electroplating-bath-additive", changeFrequency: "monthly", priority: 0.8 },
  { path: "/sodium-cumene-sulfonate-agrochemical-adjuvant", changeFrequency: "monthly", priority: 0.8 },
  { path: "/sodium-cumene-sulfonate-hard-surface-cleaner-degreaser", changeFrequency: "monthly", priority: 0.8 },
  { path: "/sodium-cumene-sulfonate-dosage-formulation-guide", changeFrequency: "monthly", priority: 0.8 },
  { path: "/sodium-cumene-sulfonate-price-supplier-india", changeFrequency: "weekly", priority: 0.9 },
];

const SERVICE_SLUGS = [
  "chemical-manufacturing",
  "import-export",
  "custom-formulation",
  "quality-testing-packaging",
  "global-logistics-shipping",
  "bulk-contract-supply",
];

// Must mirror keys in src/app/(frontend)/industries/[slug]/page.tsx
const INDUSTRY_SLUGS = [
  "oil-gas-h2s-scavenger",
  "water-treatment",
  "metal-working-fluids",
  "petrochemical",
  "refining",
  "biogas",
  "paper-mill",
  // ── BKC (Benzalkonium Chloride) industry pages — Day 3 additions ──
  "healthcare-sanitation",
  "pool-water-treatment",
  "personal-care-cosmetics",
];

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildUrlEntry(entry: SitemapEntry): string {
  const lines = [
    "  <url>",
    `    <loc>${escapeXml(entry.url)}</loc>`,
    `    <lastmod>${escapeXml(entry.lastModified)}</lastmod>`,
    `    <changefreq>${escapeXml(entry.changeFrequency)}</changefreq>`,
    `    <priority>${escapeXml(entry.priority.toFixed(2))}</priority>`,
  ];

  if (entry.image) {
    lines.push("    <image:image>");
    lines.push(`      <image:loc>${escapeXml(entry.image.url)}</image:loc>`);
    if (entry.image.caption) {
      lines.push(`      <image:caption>${escapeXml(entry.image.caption)}</image:caption>`);
    }
    if (entry.image.title) {
      lines.push(`      <image:title>${escapeXml(entry.image.title)}</image:title>`);
    }
    lines.push("    </image:image>");
  }

  lines.push("  </url>");
  return lines.join("\n");
}

function buildAbsoluteUrl(path: string): string {
  return path ? `${SITE_URL}${path}` : SITE_URL;
}

function buildEntry(
  path: string,
  changeFrequency: ChangeFrequency,
  priority: number,
  lastModified: string
): SitemapEntry {
  return {
    url: buildAbsoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  };
}

function toIsoDateString(value: string | undefined): string | null {
  if (!value) return null;

  const timestamp = Date.parse(value);
  if (Number.isNaN(timestamp)) {
    return null;
  }

  return new Date(timestamp).toISOString();
}

// De-dup country slugs through the canonical normalizer so aliases
// like `usa` collapse to `united-states` and never appear twice.
function canonicalCountrySlugs(): string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const slug of COUNTRY_SLUGS) {
    const canonical = normalizeCountrySlug(slug);
    if (!seen.has(canonical)) {
      seen.add(canonical);
      result.push(canonical);
    }
  }
  return result;
}

export async function GET() {
  let productSlugs: string[] = [];
  let liveBlogs: LiveBlogSlug[] = [];
  let liveProducts: { slug: string; name: string; imageUrl?: string; metaDescription?: string; description?: string }[] = [];
  let gulfSupplyProducts: Product[] = [];

  try {
    const products = await getAllProducts();
    productSlugs = products.map((p) => p.slug);
    liveProducts = products;
    gulfSupplyProducts = products;
  } catch (err) {
    console.error("Failed to fetch product slugs for sitemap", { error: err });
  }

  try {
    liveBlogs = await getAllBlogSlugs();
  } catch (err) {
    console.error("Failed to fetch blog slugs for sitemap", { error: err });
  }

  const now = new Date().toISOString();

  const rawEntries: SitemapEntry[] = [
    ...STATIC_ROUTES.map((route) =>
      buildEntry(route.path, route.changeFrequency, route.priority, now)
    ),
    ...productSlugs.map((slug) => {
      const product = liveProducts.find((p) => p.slug === slug);
      const entry = buildEntry(
        `/product/${slug}`,
        "monthly",
        HIGH_PRIORITY_PRODUCTS.has(slug) ? 0.95 : 0.9,
        now
      );
      if (product?.imageUrl) {
        entry.image = {
          url: product.imageUrl,
          title: product.name,
          caption: product.metaDescription || product.description?.substring(0, 100),
        };
      }
      return entry;
    }),
    ...SERVICE_SLUGS.map((slug) =>
      buildEntry(`/service/${slug}`, "monthly", 0.7, now)
    ),
    ...Object.entries(blogData).map(([slug, blog]) => {
      const entry = buildEntry(
        `/blog/${slug}`,
        "monthly",
        0.6,
        toIsoDateString(blog.lastUpdated) ?? toIsoDateString(blog.date) ?? now
      );
      if (blog.image) {
        entry.image = {
          url: blog.image,
          title: blog.title,
          caption: blog.imageAlt || blog.excerpt,
        };
      }
      return entry;
    }),
    ...liveBlogs.map((blog) => {
      const entry = buildEntry(
        `/blog/${blog.slug}`,
        "monthly",
        0.6,
        toIsoDateString(blog.updatedAt) ?? now
      );
      if (blog.image) {
        entry.image = {
          url: blog.image,
          title: blog.slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
        };
      }
      return entry;
    }),
    ...CASE_STUDY_SLUGS.map((slug) =>
      buildEntry(`/case-study/${slug}`, "monthly", 0.5, now)
    ),
    ...INDUSTRY_SLUGS.map((slug) =>
      buildEntry(`/industries/${slug}`, "monthly", 0.85, now)
    ),
    ...canonicalCountrySlugs().map((slug) =>
      buildEntry(buildCountryPagePath(slug), "weekly", 0.85, now)
    ),
    ...COMPETITOR_SLUGS.map((slug) =>
      buildEntry(buildComparisonPagePath(slug), "monthly", 0.8, now)
    ),
    ...APPLICATION_SLUGS.map((slug) =>
      buildEntry(buildApplicationPagePath(slug), "monthly", 0.8, now)
    ),
    ...RESOURCE_SLUGS.map((slug) =>
      buildEntry(buildResourceArticlePath(slug), "monthly", 0.75, now)
    ),
    ...Object.values(CUSTOM_LANDING_PAGES_DATA)
      // Skip variants that canonicalize to another page — advertise only the
      // canonical URL. The variant page stays live (it just isn't listed here).
      .filter((page) => !page.canonicalOverride)
      .map((page) =>
        buildEntry(`/${page.category}/${page.slug}`, "weekly", 0.85, now)
      ),
  ];

  // Generic Gulf country supply pages for engine-enabled products.
  // MEA Triazine is excluded — it has a dedicated hand-built supply hub.
  // Only markets in each product's exportMarkets that are Gulf countries emit.
  for (const product of gulfSupplyProducts) {
    if (isHandBuiltSupplySlug(product.slug)) continue;
    if (!isProductEngineEnabled(product)) continue;
    const markets = Array.isArray(product.exportMarkets) ? product.exportMarkets : [];
    for (const code of markets) {
      const country = GULF_COUNTRY_BY_CODE[code];
      if (!country) continue;
      // Only advertise indexable country pages. Data-thin near-duplicates are
      // noindex,follow (see isGulfSupplyPageIndexable) and must not be listed.
      const supply = resolveGulfSupply(product, country.slug);
      if (!supply || !isGulfSupplyPageIndexable(supply)) continue;
      rawEntries.push(
        buildEntry(buildGulfSupplyPath(product.slug, country.slug), "weekly", 0.8, now)
      );
    }
  }

  // Dedupe by URL so overlapping slug sources can't emit the same <loc> twice.
  const entries = Array.from(
    new Map(rawEntries.map((entry) => [entry.url, entry])).values()
  );

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    ...entries.map(buildUrlEntry),
    "</urlset>",
  ].join("\n");

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      "X-Robots-Tag": "noindex",
    },
  });
}
