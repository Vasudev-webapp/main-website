/**
 * SEO Engine — public barrel.
 *
 * Pure, side-effect-free functions that derive SEO / AEO / GEO artifacts
 * from a Product's CMS data. Designed as a FALLBACK layer: existing
 * hardcoded overrides in src/lib/seo/* always take priority via the
 * override-first resolvers. Nothing here is wired into any live page yet
 * — Phase 2 will adopt these behind the resolvers, per integration point,
 * with verification that existing products are unaffected.
 */

export * from "./types";
export * from "./gulf-config";
export * from "./meta-generator";
export * from "./direct-answer-generator";
export * from "./faq-generator";
export * from "./keyword-generator";
export * from "./ranking-calculator";
export * from "./schema-generator";
export * from "./gulf-page-generator";
export * from "./resolver";
