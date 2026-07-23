import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import { getAllProducts } from "@/lib/products-payload";
import { products as FALLBACK_CATALOG } from "@/lib/products";
import {
  CATEGORY_LABELS,
  type Product,
  type ProductCategory,
} from "@/lib/types";

/*
 * "We Supply Globally" section on the homepage.
 *
 * Product-centric rebuild: instead of focusing on a single product, this
 * section shows the full range of chemicals Vasudev Chemo Pharma exports
 * (pulled live from the CMS via ISR, with a static fallback) and the global
 * country footprint we ship to. Each product links to its product page.
 */

// Display order for the category groups.
const CATEGORY_ORDER: ProductCategory[] = ["industrial", "specialty", "surfactant"];

/*
 * Products that must NOT be advertised as freely "supplied globally".
 * Export-controlled substances (e.g. CWC Schedule 2 intermediates) require
 * end-user vetting and licensing, so they are excluded from this section.
 * The regex guard below also catches any CMS product flagged with a
 * compliance disclaimer mentioning weapons-convention / export-control.
 */
const EXPORT_EXCLUDED_SLUGS = new Set<string>([
  "bis-2-chloroethyl-amine-hydrochloride",
]);

const EXPORT_CONTROL_PATTERN =
  /chemical weapons convention|cwc|schedule\s*2|export[-\s]control/i;

function isGloballySupplyable(product: Product): boolean {
  if (EXPORT_EXCLUDED_SLUGS.has(product.slug)) return false;
  if (product.complianceDisclaimer && EXPORT_CONTROL_PATTERN.test(product.complianceDisclaimer)) {
    return false;
  }
  return true;
}

type ProductCard = Pick<
  Product,
  "name" | "slug" | "category" | "subcategory" | "formula" | "casNumber"
>;

function sortByPriorityThenName(a: Product, b: Product): number {
  const aPriority = typeof a.productPriority === "number" ? a.productPriority : 100;
  const bPriority = typeof b.productPriority === "number" ? b.productPriority : 100;
  if (aPriority !== bPriority) return aPriority - bPriority;
  return a.name.localeCompare(b.name);
}

function dedupeBySlug(list: Product[]): Product[] {
  const seen = new Set<string>();
  return list.filter((p) => {
    if (seen.has(p.slug)) return false;
    seen.add(p.slug);
    return true;
  });
}

function groupByCategory(list: ProductCard[]) {
  const groups = new Map<ProductCategory, ProductCard[]>();
  for (const product of list) {
    const bucket = groups.get(product.category) ?? [];
    bucket.push(product);
    groups.set(product.category, bucket);
  }
  return groups;
}

/*
 * Global country footprint we export to, grouped by region. Combines the
 * existing 14-country footprint with the newly added markets. Each country
 * carries its ISO 3166-1 alpha-2 code so the flag emoji can be derived.
 */
type Country = { name: string; code: string };

const SUPPLY_REGIONS: { heading: string; countries: Country[] }[] = [
  {
    heading: "North America",
    countries: [
      { name: "United States", code: "US" },
      { name: "Canada", code: "CA" },
    ],
  },
  {
    heading: "Latin America",
    countries: [
      { name: "Mexico", code: "MX" },
      { name: "Brazil", code: "BR" },
      { name: "Argentina", code: "AR" },
      { name: "Colombia", code: "CO" },
    ],
  },
  {
    heading: "Europe",
    countries: [
      { name: "Germany", code: "DE" },
      { name: "France", code: "FR" },
      { name: "United Kingdom", code: "GB" },
      { name: "Italy", code: "IT" },
      { name: "Russia", code: "RU" },
    ],
  },
  {
    heading: "Asia-Pacific",
    countries: [
      { name: "China", code: "CN" },
      { name: "Japan", code: "JP" },
      { name: "South Korea", code: "KR" },
      { name: "Taiwan", code: "TW" },
      { name: "India", code: "IN" },
      { name: "Australia", code: "AU" },
      { name: "Indonesia", code: "ID" },
      { name: "Thailand", code: "TH" },
      { name: "Malaysia", code: "MY" },
      { name: "Vietnam", code: "VN" },
    ],
  },
  {
    heading: "Middle East & Africa",
    countries: [
      { name: "Turkey", code: "TR" },
      { name: "Saudi Arabia", code: "SA" },
      { name: "UAE", code: "AE" },
      { name: "Qatar", code: "QA" },
      { name: "Kuwait", code: "KW" },
      { name: "Oman", code: "OM" },
      { name: "Iraq", code: "IQ" },
      { name: "Iran", code: "IR" },
      { name: "Jordan", code: "JO" },
      { name: "Egypt", code: "EG" },
    ],
  },
];

const TOTAL_COUNTRIES = SUPPLY_REGIONS.reduce(
  (sum, region) => sum + region.countries.length,
  0
);

/** Derive a flag emoji from an ISO 3166-1 alpha-2 country code. */
function flagEmoji(code: string): string {
  return String.fromCodePoint(
    ...code
      .toUpperCase()
      .split("")
      .map((c) => 0x1f1e6 + (c.charCodeAt(0) - 65))
  );
}

async function loadExportableProducts(): Promise<ProductCard[]> {
  let source: Product[];
  try {
    const live = await getAllProducts();
    source = live.length > 0 ? live : FALLBACK_CATALOG;
  } catch (error) {
    console.error("GlobalSupplySection: failed to load products from CMS", error);
    source = FALLBACK_CATALOG;
  }

  return dedupeBySlug(source)
    .filter((p) => p.status === "active")
    .filter(isGloballySupplyable)
    .sort(sortByPriorityThenName)
    .map((p) => ({
      name: p.name,
      slug: p.slug,
      category: p.category,
      subcategory: p.subcategory,
      formula: p.formula,
      casNumber: p.casNumber,
    }));
}

export default async function GlobalSupplySection() {
  const products = await loadExportableProducts();
  const grouped = groupByCategory(products);
  const orderedGroups = CATEGORY_ORDER.map(
    (category) => [category, grouped.get(category) ?? []] as const
  ).filter(([, list]) => list.length > 0);

  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionLabel>We supply globally</SectionLabel>
          <h2 className="font-heading text-h2 font-semibold text-primary mt-4">
            Our chemicals, delivered to {TOTAL_COUNTRIES}+ countries
          </h2>
          <p className="text-secondary text-base mt-4 max-w-2xl mx-auto">
            As a{" "}
            <strong>direct manufacturer &amp; exporter from Gujarat, India</strong>,
            Vasudev Chemo Pharma ships its full range of H₂S scavengers, oilfield
            chemicals, surfactants, hydrotropes and specialty intermediates
            factory-direct to buyers across {SUPPLY_REGIONS.length} continents.
          </p>
        </div>

        {/* Exported product range, grouped by category */}
        <div className="space-y-10 mb-16">
          {orderedGroups.map(([category, categoryProducts]) => (
            <div key={category}>
              <div className="flex items-center gap-4 mb-5">
                <h3 className="font-heading text-h5 font-semibold text-primary">
                  {CATEGORY_LABELS[category]}
                </h3>
                <span className="text-xs font-medium text-secondary bg-light border border-gray-200 rounded-full px-3 py-1">
                  {categoryProducts.length}{" "}
                  {categoryProducts.length === 1 ? "product" : "products"}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryProducts.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/product/${product.slug}`}
                    className="flex flex-col rounded-2xl border border-gray-200 bg-white px-5 py-4 transition-all hover:border-accent/40 hover:shadow-md group"
                  >
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                      {product.subcategory || CATEGORY_LABELS[product.category]}
                    </span>
                    <span className="font-heading text-sm font-medium text-primary mt-1 group-hover:text-accent transition-colors">
                      {product.name}
                    </span>
                    {product.casNumber ? (
                      <span className="text-xs text-gray-500 mt-1">
                        CAS {product.casNumber}
                      </span>
                    ) : null}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Global country footprint by region */}
        <div>
          <h3 className="font-heading text-h4 font-semibold text-primary text-center mb-8">
            Regions we serve
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {SUPPLY_REGIONS.map((region) => (
              <div key={region.heading}>
                <h4 className="font-heading text-sm font-semibold text-primary mb-3 pb-2 border-b border-gray-200 flex items-center justify-between">
                  <span>{region.heading}</span>
                  <span className="text-xs font-medium text-secondary">
                    {region.countries.length}
                  </span>
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {region.countries.map((country) => (
                    <li
                      key={country.code}
                      className="inline-flex items-center gap-1.5 rounded-full bg-light px-3 py-1.5 text-xs font-medium text-primary"
                    >
                      <span aria-hidden="true" className="text-sm leading-none">
                        {flagEmoji(country.code)}
                      </span>
                      {country.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/product"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white text-sm font-medium px-8 py-3.5 rounded-full transition-colors"
          >
            Explore all products
          </Link>
          <p className="text-secondary text-sm mt-4">
            Need supply to a country not listed?{" "}
            <Link href="/contact" className="text-accent hover:underline font-medium">
              Contact us
            </Link>{" "}
            for custom export arrangements.
          </p>
        </div>
      </div>
    </section>
  );
}
