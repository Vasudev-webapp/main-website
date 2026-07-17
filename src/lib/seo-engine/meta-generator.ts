import type { Product } from "@/lib/types";
import { CATEGORY_LABELS } from "@/lib/types";
import type { GeneratedMeta } from "./types";

const BRAND = "Vasudev Chemo Pharma";

function topMarkets(product: Product, count = 3): string[] {
  const markets = Array.isArray(product.exportMarkets) ? product.exportMarkets : [];
  return markets.slice(0, count);
}

function withCas(product: Product): string {
  return product.casNumber ? ` (CAS ${product.casNumber})` : "";
}

/**
 * Truncate to at most `maxLen` characters at a word boundary, trimming any
 * trailing punctuation/separators so the result stays readable.
 */
function truncateAtWord(text: string, maxLen: number): string {
  if (text.length <= maxLen) return text;
  const slice = text.slice(0, maxLen);
  const lastSpace = slice.lastIndexOf(" ");
  const cut = lastSpace > 12 ? slice.slice(0, lastSpace) : slice;
  return cut.replace(/[\s.,;:\-—|]+$/, "");
}

/**
 * Generate a title tag from product data.
 * Kept within ~70 characters, preferring to trim the variable lead
 * (keyword / product name) while retaining category + brand when it fits.
 * Returns a value ONLY as a fallback — callers should prefer any
 * hardcoded override or product.metaTitle first.
 */
export function generateTitle(product: Product): string {
  const keyword = product.primaryKeyword?.trim();
  const category = CATEGORY_LABELS[product.category];
  const lead = keyword || `${product.name}${withCas(product)}`;
  const suffix = ` — ${category} | ${BRAND}`;
  const MAX = 70;

  if (lead.length + suffix.length <= MAX) return lead + suffix;

  const leadBudget = MAX - suffix.length;
  if (leadBudget >= 12) return truncateAtWord(lead, leadBudget) + suffix;

  // Suffix alone is too long to preserve; truncate the whole title.
  return truncateAtWord(lead + suffix, MAX);
}

/**
 * Generate a meta description (target 150-160 chars) from product data.
 */
export function generateDescription(product: Product): string {
  const parts: string[] = [];
  parts.push(`Buy ${product.name}${withCas(product)} from ${BRAND}`);

  if (product.activeContent) parts.push(`${product.activeContent} active`);

  const markets = topMarkets(product, 4);
  if (markets.length > 0) parts.push(`Export to ${markets.join(", ")}`);

  parts.push("COA, SDS & TDS available. ISO 9001:2015 certified");

  let description = parts.join(". ") + ".";
  // Keep within the 150-160 char SERP target (truncate at a word boundary).
  if (description.length > 160) {
    description = truncateAtWord(description, 159);
    if (!/[.!?]$/.test(description)) description += ".";
  }
  return description;
}

/**
 * Generate a keyword list from product data. Combines primary + secondary
 * keywords with a few derived commercial/technical variants.
 */
export function generateKeywords(product: Product): string[] {
  const set = new Set<string>();
  if (product.primaryKeyword) set.add(product.primaryKeyword.toLowerCase());

  for (const kw of product.secondaryKeywords ?? []) {
    if (typeof kw === "string" && kw.trim()) set.add(kw.toLowerCase());
  }

  const name = product.name.toLowerCase();
  set.add(`${name} manufacturer india`);
  set.add(`${name} supplier`);
  set.add(`buy ${name}`);
  if (product.casNumber) set.add(`cas ${product.casNumber} supplier`);

  for (const alt of product.alternateNames ?? []) {
    if (typeof alt === "string" && alt.trim()) {
      set.add(`${alt.toLowerCase()} manufacturer`);
    }
  }

  return Array.from(set);
}

/** Convenience: full meta bundle. Callers apply override-first precedence. */
export function generateMeta(product: Product): GeneratedMeta {
  return {
    title: generateTitle(product),
    description: generateDescription(product),
    keywords: generateKeywords(product),
  };
}
