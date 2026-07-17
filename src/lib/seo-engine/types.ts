/**
 * SEO Engine — shared types.
 *
 * The engine is a pure, side-effect-free set of functions that derive
 * SEO / AEO / GEO artifacts from a Product's CMS data. It is designed as
 * a FALLBACK layer: existing hardcoded overrides (src/lib/seo/*) always
 * take priority. The engine only fills gaps, so well-performing products
 * with hardcoded content are never affected.
 */

export type FAQItem = {
  question: string;
  answer: string;
};

export type KeywordCluster = {
  primary: string;
  members: string[];
};

export type KeywordClusterSet = {
  identity: KeywordCluster;
  geographic: KeywordCluster[];
  application: KeywordCluster[];
  comparison: KeywordCluster[];
  commercial: KeywordCluster;
};

export type GeneratedMeta = {
  title: string;
  description: string;
  keywords: string[];
};

export type RankingBand = "hero" | "high" | "standard" | "basic";

export type RankingResult = {
  /** 0-100 composite priority score */
  score: number;
  /** Bucketed action band derived from score */
  band: RankingBand;
  /** Suggested sitemap priority (0.5 - 0.95) */
  sitemapPriority: number;
  /** Per-category subtotals for transparency */
  breakdown: {
    commercial: number;
    competition: number;
    contentOpportunity: number;
    gulf: number;
  };
  /** Human-readable notes explaining the score */
  notes: string[];
};
