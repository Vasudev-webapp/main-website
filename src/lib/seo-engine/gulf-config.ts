/**
 * Gulf country configuration — pre-loaded defaults for the export-focused
 * SEO engine. Used to generate country supply pages, geo keyword clusters,
 * and schema areaServed values when a product does not override them.
 */

/**
 * Product slugs that have a dedicated, hand-built supply hub (for example
 * /supply/mea-triazine-78/[country]). The generic engine-driven
 * /supply/[slug]/[country] pages must NEVER be generated for these products,
 * to avoid duplicate/near-duplicate supply pages competing with the curated
 * hand-built hub. Add a slug here whenever you build a bespoke supply hub.
 */
export const HAND_BUILT_SUPPLY_SLUGS = new Set<string>([
  "mea-triazine-78-h2s-scavenger",
]);

/** True when a product has a dedicated hand-built supply hub. */
export function isHandBuiltSupplySlug(slug: string): boolean {
  return HAND_BUILT_SUPPLY_SLUGS.has(slug);
}

export type GulfCountry = {
  /** ISO-ish key used in transitDays / localBrandEquivalents maps */
  code: string;
  /** URL slug for /supply/{product}/{slug} */
  slug: string;
  /** Display name */
  name: string;
  /** Primary sea port(s) for CIF messaging */
  mainPort: string;
  /** Default transit window from India (fallback when product has none) */
  defaultTransitDays: string;
  /** Regulatory body referenced in country content */
  regulatoryBody: string;
  /** Language key used to look up localLanguageNames */
  language: string;
  /** Key oilfields / operations referenced for local relevance */
  operations: string[];
};

export const GULF_COUNTRIES: GulfCountry[] = [
  {
    code: "UAE",
    slug: "uae",
    name: "United Arab Emirates",
    mainPort: "Jebel Ali",
    defaultTransitDays: "3-5 days",
    regulatoryBody: "UAE EHS / ESMA",
    language: "arabic",
    operations: ["Shah field", "Habshan", "Ghasha", "ADNOC operations"],
  },
  {
    code: "Saudi Arabia",
    slug: "saudi-arabia",
    name: "Saudi Arabia",
    mainPort: "King Abdulaziz Port (Dammam)",
    defaultTransitDays: "4-7 days",
    regulatoryBody: "SASO / SFDA",
    language: "arabic",
    operations: ["Ghawar", "Wasit", "Fadhili", "Jafurah", "Saudi Aramco"],
  },
  {
    code: "Qatar",
    slug: "qatar",
    name: "Qatar",
    mainPort: "Hamad Port",
    defaultTransitDays: "3-5 days",
    regulatoryBody: "Qatar Standards / MoE",
    language: "arabic",
    operations: ["North Field", "Ras Laffan", "Pearl GTL", "Dolphin pipeline"],
  },
  {
    code: "Oman",
    slug: "oman",
    name: "Oman",
    mainPort: "Sohar Port",
    defaultTransitDays: "2-4 days",
    regulatoryBody: "OPAL / MoCI",
    language: "arabic",
    operations: ["Yibal", "Lekhwair", "Birba", "PDO operations", "Oman LNG"],
  },
  {
    code: "Kuwait",
    slug: "kuwait",
    name: "Kuwait",
    mainPort: "Shuwaikh Port",
    defaultTransitDays: "4-6 days",
    regulatoryBody: "KEPA / KFSD",
    language: "arabic",
    operations: ["Burgan field", "Ratqa", "KOC operations", "KNPC refineries"],
  },
  {
    code: "Iraq",
    slug: "iraq",
    name: "Iraq",
    mainPort: "Umm Qasr (Basra)",
    defaultTransitDays: "8-12 days",
    regulatoryBody: "Iraqi Ministry of Oil",
    language: "arabic",
    operations: ["Rumaila", "West Qurna", "Zubair", "Halfaya", "Basra Gas"],
  },
];

export const GULF_COUNTRY_BY_CODE: Record<string, GulfCountry> =
  Object.fromEntries(GULF_COUNTRIES.map((c) => [c.code, c]));

export const GULF_COUNTRY_BY_SLUG: Record<string, GulfCountry> =
  Object.fromEntries(GULF_COUNTRIES.map((c) => [c.slug, c]));

/** Canonical list of Gulf country display names for schema areaServed. */
export const GULF_COUNTRY_NAMES: string[] = GULF_COUNTRIES.map((c) => c.name);
