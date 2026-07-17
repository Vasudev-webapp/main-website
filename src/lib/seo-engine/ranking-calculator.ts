import type { Product, ProductRankingMetrics } from "@/lib/types";
import type { RankingBand, RankingResult } from "./types";

const NEUTRAL = 5; // default 1-10 score when a metric is absent

/** Clamp a 1-10 metric, defaulting to neutral when missing/invalid. */
function m(value: number | undefined): number {
  if (typeof value !== "number" || Number.isNaN(value)) return NEUTRAL;
  return Math.max(0, Math.min(10, value));
}

/** Map margin category to a 0-10 score. */
function marginScore(cat: ProductRankingMetrics["marginCategory"] | undefined): number {
  switch (cat) {
    case "high":
      return 10;
    case "medium":
      return 6;
    case "low":
      return 3;
    default:
      return NEUTRAL;
  }
}

/** Map price per MT to a 0-10 investment signal (higher value = more SEO worth). */
function priceScore(price: number | undefined): number {
  if (typeof price !== "number" || price <= 0) return NEUTRAL;
  if (price >= 5000) return 10;
  if (price >= 3000) return 8;
  if (price >= 1500) return 6;
  if (price >= 800) return 4;
  return 2;
}

function avg(values: number[]): number {
  if (values.length === 0) return NEUTRAL;
  return values.reduce((a, b) => a + b, 0) / values.length;
}

function bandFor(score: number): RankingBand {
  if (score >= 90) return "hero";
  if (score >= 70) return "high";
  if (score >= 50) return "standard";
  return "basic";
}

/**
 * Compute a 0-100 SEO priority score from a product's ranking metrics.
 *
 * Category weights (export-focused):
 *   Commercial value       40%
 *   Market competition     25%
 *   Content opportunity    20%
 *   Gulf-specific factors  15%
 *
 * A manual product.seoScoreOverride, when set, wins outright.
 * Missing metrics default to a neutral 5/10 so partially-filled
 * products still get a reasonable, non-zero score.
 */
export function calculateRanking(product: Product): RankingResult {
  const r: Partial<ProductRankingMetrics> = product.rankingMetrics ?? {};

  const commercial = avg([
    m(r.exportVolumePotential),
    priceScore(r.pricePerMT),
    marginScore(r.marginCategory),
    m(r.repeatOrderLikelihood),
  ]);

  const competition = avg([
    m(r.searchVolumeEstimate),
    m(r.competitorDensity),
    m(r.brandRecognition),
  ]);

  const contentOpportunity = avg([
    m(r.technicalComplexity),
    m(r.faqPotential),
    m(r.comparisonOpportunity),
    m(r.educationalValue),
  ]);

  const gulf = avg([
    m(r.gulfDemandScore),
    m(r.oilGasRelevance),
    r.regulatoryAdvantageSASO === true ? 10 : r.regulatoryAdvantageSASO === false ? 4 : NEUTRAL,
    m(r.arabicContentNeed),
    m(r.gccCompetitorGap),
  ]);

  const calculated =
    (commercial / 10) * 40 +
    (competition / 10) * 25 +
    (contentOpportunity / 10) * 20 +
    (gulf / 10) * 15;

  const hasOverride = typeof product.seoScoreOverride === "number";
  const score = hasOverride
    ? Math.max(0, Math.min(100, product.seoScoreOverride as number))
    : Math.round(calculated);

  const band = bandFor(score);
  const sitemapPriority = Math.min(0.95, 0.5 + (score / 100) * 0.45);

  const notes: string[] = [];
  if (hasOverride) notes.push(`Manual score override applied (${score}).`);
  if (!product.rankingMetrics) notes.push("No ranking metrics set; neutral defaults used.");
  notes.push(`Band: ${band} → sitemap priority ${sitemapPriority.toFixed(2)}.`);

  return {
    score,
    band,
    sitemapPriority: Number(sitemapPriority.toFixed(2)),
    breakdown: {
      commercial: Number(commercial.toFixed(1)),
      competition: Number(competition.toFixed(1)),
      contentOpportunity: Number(contentOpportunity.toFixed(1)),
      gulf: Number(gulf.toFixed(1)),
    },
    notes,
  };
}
