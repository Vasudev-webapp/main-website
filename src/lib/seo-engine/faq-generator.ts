import type { Product } from "@/lib/types";
import type { FAQItem } from "./types";
import { GULF_COUNTRY_BY_CODE } from "./gulf-config";

const BRAND = "Vasudev Chemo Pharma";

function casClause(product: Product): string {
  return product.casNumber ? ` (CAS ${product.casNumber})` : "";
}

/** Document types on record in the CMS, normalised to COA/SDS/TDS labels. */
function availableDocLabels(product: Product): string[] {
  const docs = Array.isArray(product.documents) ? product.documents : [];
  const types = new Set(docs.map((d) => (d?.docType || "").toUpperCase()));
  const labels: string[] = [];
  if (types.has("COA")) labels.push("COA");
  if (types.has("SDS") || types.has("MSDS")) labels.push("SDS");
  if (types.has("TDS")) labels.push("TDS");
  return labels;
}

/** Verified certifications matching a keyword (e.g. Kosher, Halal, GHS). */
function certsMatching(product: Product, re: RegExp): string[] {
  return (product.certifications ?? []).filter((c) => typeof c === "string" && re.test(c));
}

function whatIsFAQ(product: Product): FAQItem {
  const app = (product.applications ?? [])[0];
  const cls = product.chemicalClass ? `${product.chemicalClass} ` : "";
  const use = app ? ` It is primarily used for ${app}.` : "";
  return {
    question: `What is ${product.name} used for?`,
    answer:
      `${product.name}${casClause(product)} is a ${cls}manufactured by ${BRAND}.` +
      use +
      ` ${product.description || ""}`.trimEnd(),
  };
}

function casFAQ(product: Product): FAQItem | null {
  if (!product.casNumber) return null;
  const iupac = product.iupacName ? ` (${product.iupacName})` : "";
  return {
    question: `What is the CAS number for ${product.name}?`,
    answer: `The CAS number for ${product.name}${iupac} is ${product.casNumber}. Include this identifier when requesting a quotation, COA, SDS, or TDS.`,
  };
}

function moqFAQ(product: Product): FAQItem {
  const moq = product.minOrderQuantity || "1 MT for export orders and 220 kg (1 drum) for domestic India orders";
  return {
    question: `What is the minimum order quantity for ${product.name}?`,
    answer: `The minimum order quantity for ${product.name} is ${moq}. Contact ${BRAND} for bulk pricing and sample availability.`,
  };
}

function packagingFAQ(product: Product): FAQItem | null {
  const pkg = (product.packaging ?? []).filter((p) => typeof p === "string");
  if (pkg.length === 0) return null;
  // Only assert GHS labelling when GHS classification data is on record.
  const hasGhs =
    (product.ghsPictograms?.length ?? 0) > 0 ||
    Boolean(product.signalWord && product.signalWord.trim());
  const labelClause = hasGhs
    ? " Custom export packaging with GHS-compliant labelling is available on request."
    : " Custom export packaging is available on request — contact us for labelling and batch details.";
  return {
    question: `What packaging options are available for ${product.name}?`,
    answer: `${product.name} is supplied in ${pkg.join(", ")}.${labelClause}`,
  };
}

function documentsFAQ(product: Product): FAQItem {
  const docs = availableDocLabels(product);
  const extraCerts = certsMatching(product, /kosher|halal/i);
  const base =
    docs.length > 0
      ? `Yes. ${BRAND} provides ${docs.join(", ")} for ${product.name}.`
      : `Contact ${BRAND} to request documentation such as COA, SDS/MSDS, and TDS for ${product.name}.`;
  const certClause =
    extraCerts.length > 0 ? ` ${extraCerts.join(" and ")} certification available on request.` : "";
  return {
    question: `Do you provide COA, SDS and TDS for ${product.name}?`,
    answer: (base + certClause).trim(),
  };
}

function exportFAQ(product: Product): FAQItem | null {
  const markets = product.exportMarkets ?? [];
  if (markets.length === 0) return null;
  return {
    question: `Which countries do you export ${product.name} to?`,
    answer: `${BRAND} exports ${product.name} to ${markets.join(", ")}, and can supply other countries with appropriate export documentation. Contact us for the COA, SDS, and customs paperwork required for your destination.`,
  };
}

function gulfCountryFAQs(product: Product): FAQItem[] {
  const markets = product.exportMarkets ?? [];
  const out: FAQItem[] = [];
  for (const market of markets) {
    const country = GULF_COUNTRY_BY_CODE[market];
    if (!country) continue;
    const transit = product.transitDays?.[market] || country.defaultTransitDays;
    out.push({
      question: `Can you supply ${product.name} to ${country.name}?`,
      answer: `Yes. ${BRAND} ships ${product.name} to ${country.name} via ${country.mainPort} with transit times of ${transit} from India. Batch COA and SDS are available on request — contact us to confirm the documentation required for ${country.regulatoryBody} import clearance.`,
    });
    if (out.length >= 4) break;
  }
  return out;
}

function competitorFAQs(product: Product): FAQItem[] {
  const brands = (product.competitorBrands ?? []).slice(0, 2);
  return brands.map((brand) => ({
    question: `Is your ${product.name} equivalent to ${brand}?`,
    answer: `${BRAND} manufactures ${product.name} as an alternative to ${brand}. Contact us for a spec-comparison document and trial samples so you can evaluate suitability for your application.`,
  }));
}

/**
 * Generate up to 15 FAQs from product data.
 *
 * IMPORTANT: This is a FALLBACK. Callers must prefer, in order:
 *   1. hardcoded PRODUCT_PAGE_FAQS[slug] / PRODUCT_FALLBACK_FAQS[slug]
 *   2. product.faqs (CMS-authored)
 *   3. this generated set
 */
export function generateFAQs(product: Product): FAQItem[] {
  const items: (FAQItem | null)[] = [
    whatIsFAQ(product),
    casFAQ(product),
    moqFAQ(product),
    packagingFAQ(product),
    documentsFAQ(product),
    exportFAQ(product),
    ...gulfCountryFAQs(product),
    ...competitorFAQs(product),
  ];
  return items.filter((x): x is FAQItem => x !== null).slice(0, 15);
}
