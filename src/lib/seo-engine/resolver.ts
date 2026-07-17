import type { Product } from "@/lib/types";
import type { FAQItem, GeneratedMeta } from "./types";
import { generateMeta } from "./meta-generator";
import { generateDirectAnswer } from "./direct-answer-generator";
import { generateFAQs } from "./faq-generator";

/**
 * Override-first resolvers.
 *
 * These encapsulate the precedence rule that keeps existing well-performing
 * products untouched. Each resolver accepts the existing hardcoded/CMS values
 * FIRST and only falls through to engine-generated output when those are
 * absent. The engine never imports the hardcoded override maps — precedence
 * is passed in explicitly at the call site.
 *
 * Usage (Phase 2 wiring example):
 *   const directAnswer = resolveDirectAnswer(product, {
 *     hardcoded: PRODUCT_DIRECT_ANSWERS[slug],
 *   });
 */

function firstNonEmptyString(...candidates: (string | undefined | null)[]): string | undefined {
  for (const c of candidates) {
    if (typeof c === "string" && c.trim().length > 0) return c;
  }
  return undefined;
}

/**
 * Whether a product has opted into the SEO engine by populating any of the
 * new engine CMS fields. This is the master safety gate: when it returns
 * false, callers must render EXACTLY as before (no engine output), so
 * existing bare/uncurated products are byte-identical. New products that
 * fill any engine field light up the auto-generation layer.
 */
export function isProductEngineEnabled(product: Product): boolean {
  return Boolean(
    (product.primaryKeyword && product.primaryKeyword.trim()) ||
      (product.directAnswerSnippet && product.directAnswerSnippet.trim()) ||
      (product.activeContent && product.activeContent.trim()) ||
      (product.chemicalClass && product.chemicalClass.trim()) ||
      (product.baseChemistry && product.baseChemistry.trim()) ||
      (product.inchiKey && product.inchiKey.trim()) ||
      (product.smiles && product.smiles.trim()) ||
      (product.audienceType && product.audienceType.trim()) ||
      Boolean(product.physicalForm) ||
      (Array.isArray(product.exportMarkets) && product.exportMarkets.length > 0) ||
      (Array.isArray(product.alternateNames) && product.alternateNames.length > 0) ||
      (Array.isArray(product.secondaryKeywords) && product.secondaryKeywords.length > 0) ||
      (Array.isArray(product.competitorBrands) && product.competitorBrands.length > 0) ||
      (Array.isArray(product.targetBuyers) && product.targetBuyers.length > 0) ||
      (Array.isArray(product.areaServed) && product.areaServed.length > 0) ||
      (product.transitDays && Object.keys(product.transitDays).length > 0) ||
      (product.localLanguageNames && Object.keys(product.localLanguageNames).length > 0) ||
      (product.rankingMetrics && Object.keys(product.rankingMetrics).length > 0) ||
      typeof product.seoScoreOverride === "number"
  );
}

/**
 * Direct answer precedence:
 *   1. hardcoded override (PRODUCT_DIRECT_ANSWERS[slug])
 *   2. CMS field (product.directAnswerSnippet)
 *   3. engine-generated
 */
export function resolveDirectAnswer(
  product: Product,
  opts: { hardcoded?: string } = {}
): string {
  return (
    firstNonEmptyString(opts.hardcoded, product.directAnswerSnippet) ??
    generateDirectAnswer(product)
  );
}

/**
 * FAQ precedence:
 *   1. hardcoded page FAQs (PRODUCT_PAGE_FAQS[slug])
 *   2. hardcoded fallback FAQs (PRODUCT_FALLBACK_FAQS[slug])
 *   3. CMS FAQs (product.faqs)
 *   4. engine-generated
 * Returns the first source that has at least `minCount` items.
 */
export function resolveFAQs(
  product: Product,
  opts: { hardcodedPage?: FAQItem[]; hardcodedFallback?: FAQItem[]; minCount?: number } = {}
): FAQItem[] {
  const minCount = opts.minCount ?? 1;
  const cmsFaqs = Array.isArray(product.faqs) ? product.faqs : [];

  if ((opts.hardcodedPage?.length ?? 0) >= minCount) return opts.hardcodedPage as FAQItem[];
  if ((opts.hardcodedFallback?.length ?? 0) >= minCount) return opts.hardcodedFallback as FAQItem[];
  if (cmsFaqs.length >= minCount) return cmsFaqs;
  return generateFAQs(product);
}

/**
 * Meta precedence for title/description:
 *   1. hardcoded override
 *   2. CMS metaTitle / metaDescription
 *   3. engine-generated
 * Keywords are merged (hardcoded + CMS + generated) and de-duplicated.
 */
export function resolveMeta(
  product: Product,
  opts: { hardcodedTitle?: string; hardcodedDescription?: string; extraKeywords?: string[] } = {}
): GeneratedMeta {
  const generated = generateMeta(product);

  const title =
    firstNonEmptyString(opts.hardcodedTitle, product.metaTitle) ?? generated.title;
  const description =
    firstNonEmptyString(opts.hardcodedDescription, product.metaDescription) ??
    generated.description;

  const keywordSet = new Set<string>();
  for (const kw of [...(opts.extraKeywords ?? []), ...generated.keywords]) {
    if (typeof kw === "string" && kw.trim()) keywordSet.add(kw.toLowerCase());
  }

  return { title, description, keywords: Array.from(keywordSet) };
}
