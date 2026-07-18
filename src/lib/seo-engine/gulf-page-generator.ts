import type { Product } from "@/lib/types";
import type { FAQItem, GeneratedMeta } from "./types";
import { type GulfCountry, GULF_COUNTRY_BY_SLUG, isHandBuiltSupplySlug } from "./gulf-config";
import { isProductEngineEnabled } from "./resolver";

const BRAND = "Vasudev Chemo Pharma";

/** Canonical path for a generic product × Gulf-country supply page. */
export function buildGulfSupplyPath(productSlug: string, countrySlug: string): string {
  return `/supply/${productSlug}/${countrySlug}`;
}
export type GulfSupply = {
  country: GulfCountry;
  /** Transit window from India (product override or country default). */
  transit: string;
  /** Incoterms for this product (falls back to a sensible default set). */
  incoterms: string[];
  /** Ports of loading in India (product override or default). */
  loadingPorts: string[];
  /** Competitor brand equivalents in this country, if provided. */
  localBrands: string[];
  /** Local-language names for this country's language, if provided. */
  localNames: string[];
};

const DEFAULT_INCOTERMS = ["FOB", "CIF", "CFR"];
const DEFAULT_LOADING_PORTS = ["Mundra", "Hazira", "Kandla"];

function casClause(product: Product): string {
  return product.casNumber ? ` (CAS ${product.casNumber})` : "";
}

/**
 * Resolve a product × Gulf-country supply page, or null when it should NOT
 * exist. A page exists only when ALL hold:
 *   1. the product opted into the SEO engine (isProductEngineEnabled)
 *   2. the country slug is a known Gulf country
 *   3. the country is listed in the product's exportMarkets
 * This prevents thin/auto pages for uncurated products and avoids any
 * collision with the hand-built MEA Triazine supply route.
 */
export function resolveGulfSupply(
  product: Product,
  countrySlug: string
): GulfSupply | null {
  if (!isProductEngineEnabled(product)) return null;

  // The MEA Triazine supply route is hand-built; never auto-generate it here.
  if (isHandBuiltSupplySlug(product.slug)) return null;

  const country = GULF_COUNTRY_BY_SLUG[countrySlug];
  if (!country) return null;

  const markets = Array.isArray(product.exportMarkets) ? product.exportMarkets : [];
  if (!markets.includes(country.code)) return null;

  const transit = product.transitDays?.[country.code] || country.defaultTransitDays;
  const incoterms =
    Array.isArray(product.incoterms) && product.incoterms.length > 0
      ? product.incoterms
      : DEFAULT_INCOTERMS;
  const loadingPorts =
    Array.isArray(product.portOfLoading) && product.portOfLoading.length > 0
      ? product.portOfLoading
      : DEFAULT_LOADING_PORTS;
  const localBrands = product.localBrandEquivalents?.[country.code] ?? [];
  const localNames = product.localLanguageNames?.[country.language] ?? [];

  return { country, transit, incoterms, loadingPorts, localBrands, localNames };
}


/**
 * Doorway-page guard (SEO Rule 6). A generic country supply page only earns
 * indexation when it carries product×country-UNIQUE content beyond the shared
 * template. Country facts (port, transit, regulator, operations) are identical
 * across every product for a given country, so they do NOT make a page unique.
 * The product×country-specific signals are local brand equivalents and
 * local-language names — when at least one is present the page is substantive
 * enough to index; otherwise it stays crawlable but noindex,follow so thin
 * near-duplicates never compete in the index.
 */
export function isGulfSupplyPageIndexable(supply: GulfSupply): boolean {
  return supply.localBrands.length > 0 || supply.localNames.length > 0;
}


/** Generate meta (title/description/keywords) for a Gulf supply page. */
export function buildGulfCountryMeta(
  product: Product,
  supply: GulfSupply
): GeneratedMeta {
  const { country, transit } = supply;
  const title = `${product.name} Supplier ${country.name} | CIF ${country.mainPort} | ${BRAND}`;

  const active = product.activeContent ? `${product.activeContent} active. ` : "";
  const description =
    `Buy ${product.name}${casClause(product)} in ${country.name}. ${active}` +
    `CIF ${country.mainPort}, ${transit} from India. ` +
    `COA, SDS & ${country.regulatoryBody} documentation. Request a quote.`;

  const keywords = [
    `${product.name} supplier ${country.name}`,
    `${product.name} ${country.name}`,
    `${product.name} CIF ${country.mainPort}`,
    `chemical supplier ${country.name}`,
    product.primaryKeyword ? `${product.primaryKeyword} ${country.name}` : null,
    ...supply.localNames.slice(0, 4),
  ]
    .filter((k): k is string => typeof k === "string" && k.trim().length > 0)
    .map((k) => k.toLowerCase());

  return { title, description, keywords: Array.from(new Set(keywords)) };
}

/** Generate country-specific FAQs (supply, documentation, applications). */
export function buildGulfCountryFAQs(
  product: Product,
  supply: GulfSupply
): FAQItem[] {
  const { country, transit } = supply;
  const faqs: FAQItem[] = [];

  faqs.push({
    question: `Can you supply ${product.name} to ${country.name}?`,
    answer:
      `Yes. ${BRAND} ships ${product.name}${casClause(product)} to ${country.name} ` +
      `via ${country.mainPort} with transit times of ${transit} from India. ` +
      `We supply with batch COA and GHS-compliant SDS, and support ${supply.incoterms.join(", ")} terms.`,
  });

  faqs.push({
    question: `What documents are needed to import ${product.name} into ${country.name}?`,
    answer:
      `Importing ${product.name} into ${country.name} requires compliance with ${country.regulatoryBody}. ` +
      `${BRAND} provides a Certificate of Analysis (COA), GHS-compliant Safety Data Sheet (SDS/MSDS), ` +
      `packing list, commercial invoice, and Bill of Lading formatted for customs clearance at ${country.mainPort}.`,
  });

  if (country.operations.length > 0) {
    faqs.push({
      question: `Where is ${product.name} used in ${country.name}?`,
      answer:
        `${product.name} is supplied for operations across ${country.name}, including ` +
        `${country.operations.slice(0, 4).join(", ")}. ` +
        `Contact ${BRAND} for application-specific technical support and samples.`,
    });
  }

  if (supply.localBrands.length > 0) {
    faqs.push({
      question: `What brands is ${product.name} equivalent to in ${country.name}?`,
      answer:
        `In ${country.name}, ${product.name} is a direct equivalent to ${supply.localBrands.slice(0, 6).join(", ")}. ` +
        `${BRAND} provides spec-comparison documents on request for cross-qualification.`,
    });
  }

  return faqs;
}
