import type { Product } from "@/lib/types";
import { CATEGORY_LABELS } from "@/lib/types";
import { GULF_COUNTRY_BY_CODE } from "./gulf-config";

type PropertyValue = {
  "@type": "PropertyValue";
  name: string;
  value: string;
};

function pv(name: string, value: string | undefined | null): PropertyValue | null {
  if (typeof value !== "string" || value.trim().length === 0) return null;
  return { "@type": "PropertyValue", name, value };
}

/** Map export-market codes to full country names for schema areaServed. */
function resolveAreaServed(product: Product): string[] | undefined {
  if (Array.isArray(product.areaServed) && product.areaServed.length > 0) {
    return product.areaServed;
  }
  const markets = Array.isArray(product.exportMarkets) ? product.exportMarkets : [];
  if (markets.length === 0) return undefined;
  return markets.map((m) => GULF_COUNTRY_BY_CODE[m]?.name ?? m);
}

function resolveAudienceType(product: Product): string | undefined {
  if (product.audienceType && product.audienceType.trim()) return product.audienceType;
  const buyers = Array.isArray(product.targetBuyers) ? product.targetBuyers : [];
  return buyers.length > 0 ? buyers.join(", ") : undefined;
}


/**
 * Build Schema.org/Product enrichment from a product's CMS engine fields.
 *
 * Returns ONLY the keys that have data, so the caller can Object.assign it
 * over the base product schema. This is a FALLBACK: the caller must apply it
 * only for engine-enabled products with no hardcoded per-slug enrichment,
 * so existing curated products' JSON-LD is never altered.
 */
export function buildProductSchemaEnrichment(product: Product): Record<string, unknown> {
  const out: Record<string, unknown> = {};

  const alt = Array.isArray(product.alternateNames) ? product.alternateNames.slice(0, 12) : [];
  if (alt.length > 0) out.alternateName = alt;

  // chemicalClass, when set, is a more specific category than the generic label.
  if (product.chemicalClass && product.chemicalClass.trim()) {
    out.category = product.chemicalClass;
  } else {
    out.category = CATEGORY_LABELS[product.category];
  }

  out.countryOfOrigin = product.originCountry || "India";
  if (product.sku && product.sku.trim()) out.mpn = product.sku;

  const props = [
    pv("CAS Number", product.casNumber),
    pv("Molecular Formula", product.formula),
    pv("Molecular Weight", product.molecularWeight),
    pv("Active Content", product.activeContent),
    pv("Base Chemistry", product.baseChemistry),
    pv("Chemical Class", product.chemicalClass),
    pv("HS Code", product.hsCode),
    pv("EINECS", product.einecs),
    pv("UN Number", product.unNumber),
  ].filter((p): p is PropertyValue => p !== null);
  if (props.length > 0) out.additionalProperty = props;

  const audienceType = resolveAudienceType(product);
  if (audienceType) {
    out.audience = { "@type": "BusinessAudience", audienceType };
  }

  const areaServed = resolveAreaServed(product);
  if (areaServed) out.areaServed = areaServed;

  return out;
}

/**
 * Build Schema.org/ChemicalSubstance enrichment from CMS engine fields.
 * Returns only populated keys. Same FALLBACK contract as above.
 */
export function buildChemicalSchemaEnrichment(product: Product): Record<string, unknown> {
  const out: Record<string, unknown> = {};

  const alt = Array.isArray(product.alternateNames) ? product.alternateNames.slice(0, 12) : [];
  if (alt.length > 0) out.alternateName = alt;

  if (product.iupacName && product.iupacName.trim()) out.iupacName = product.iupacName;
  if (product.molecularWeight && product.molecularWeight.trim()) {
    out.molecularWeight = product.molecularWeight;
  }
  if (product.formula && product.formula.trim()) out.molecularFormula = product.formula;

  const identifiers = [
    pv("CAS Number", product.casNumber),
    pv("EINECS", product.einecs),
  ].filter((p): p is PropertyValue => p !== null);
  if (identifiers.length > 0) out.identifier = identifiers;

  const extra = [
    pv("InChI Key", product.inchiKey),
    pv("SMILES", product.smiles),
  ].filter((p): p is PropertyValue => p !== null);
  if (extra.length > 0) out.additionalProperty = extra;

  return out;
}
