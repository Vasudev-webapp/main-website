import {
  H2S_SCAVENGER_CORE,
  MEA_TRIAZINE_KEYWORDS,
  SULFIDE_SCAVENGER_KEYWORDS,
  OILFIELD_H2S_KEYWORDS,
  TRIAZINE_BIOCIDE_KEYWORDS,
  TRIAZINE_MANUFACTURER_KEYWORDS,
  WATER_SOLUBLE_SCAVENGER_KEYWORDS,
  SCAVENGER_CORROSION_KEYWORDS,
  MEA_TRIAZINE_PRICING_KEYWORDS,
  SUPPLY_HUB_KEYWORDS,
  MEA_VS_MMA_KEYWORDS,
  BKC_CORE_KEYWORDS,
  BKC_50_KEYWORDS,
  BKC_80_KEYWORDS,
  BKC_APPLICATIONS_KEYWORDS,
  mergeKeywordClusters,
} from "@/lib/seo/keyword-clusters";
import { EXPANDED_KEYWORDS } from "@/lib/seo/expanded-keywords";
import {
  MEA_TRIAZINE_SYNONYMS,
  MMA_TRIAZINE_SYNONYMS,
  EDDM_SYNONYMS,
  BENZALKONIUM_CHLORIDE_SYNONYMS,
  SODIUM_XYLENE_SULFONATE_SYNONYMS,
  TRIAZINE_SCAVENGER_GENERAL_SYNONYMS,
  METAL_WORKING_FLUIDS_SYNONYMS,
  BIOCIDE_OIL_GAS_SYNONYMS,
  MEA_TRIAZINE_78_HIGH_CONC_SYNONYMS,
  BIT_20_SYNONYMS,
  BRONOPOL_SYNONYMS,
  type ProductSynonyms,
} from "@/lib/seo/product-synonyms";
import {
  MEA_TRIAZINE_SEARCH_KEYWORDS,
  MEA_TRIAZINE_COMPETITOR_APPLICATIONS,
  MEA_TRIAZINE_SCHEMA_ENRICHMENT,
} from "@/lib/seo/mea-triazine-schema-data";

// --- Product Keywords Imports ---
import { MEA_TRIAZINE_78_PRIMARY_KEYWORD, MEA_TRIAZINE_78_LONG_TAIL_KEYWORDS } from "./seo/mea-triazine-78-keywords";
import { MMA_TRIAZINE_40_PRIMARY_KEYWORD, MMA_TRIAZINE_40_LONG_TAIL_KEYWORDS } from "./seo/mma-triazine-40-keywords";
import { PTSA_PRIMARY_KEYWORD, PTSA_LONG_TAIL_KEYWORDS } from "./seo/p-toluenesulfonic-acid-keywords";
import { SCS_40_PRIMARY_KEYWORD, SCS_40_LONG_TAIL_KEYWORDS } from "./seo/scs-40-keywords";
import { SCS_90_PRIMARY_KEYWORD, SCS_90_LONG_TAIL_KEYWORDS } from "./seo/scs-90-keywords";
import { SXS_90_PRIMARY_KEYWORD, SXS_90_LONG_TAIL_KEYWORDS } from "./seo/sxs-90-keywords";
import { SXS_40_PRIMARY_KEYWORD, SXS_40_LONG_TAIL_KEYWORDS } from "./seo/sxs-40-keywords";
import { BIS_2_CHLOROETHYL_AMINE_HCL_PRIMARY_KEYWORD, BIS_2_CHLOROETHYL_AMINE_HCL_LONG_TAIL_KEYWORDS } from "./seo/bis-2-chloroethyl-amine-hydrochloride-keywords";
import { DEAEC_HCL_PRIMARY_KEYWORD, DEAEC_HCL_LONG_TAIL_KEYWORDS } from "./seo/di-ethyl-amino-ethyl-chloride-hydrochloride-keywords";
import { AMIT_PRIMARY_KEYWORD, AMIT_LONG_TAIL_KEYWORDS } from "./seo/2-amino-5-methylthiazole-keywords";
import { CEA_HCL_PRIMARY_KEYWORD, CEA_HCL_LONG_TAIL_KEYWORDS } from "./seo/2-chloroethylamine-hydrochloride-keywords";
import { TRIAZINE_SCAVENGER_GENERAL_PRIMARY_KEYWORD, TRIAZINE_SCAVENGER_GENERAL_LONG_TAIL_KEYWORDS } from "./seo/triazine-h2s-scavenger-general-keywords";
import { METAL_WORKING_FLUIDS_PRIMARY_KEYWORD, METAL_WORKING_FLUIDS_LONG_TAIL_KEYWORDS } from "./seo/metal-working-fluids-keywords";
import { BIOCIDE_OIL_GAS_PRIMARY_KEYWORD, BIOCIDE_OIL_GAS_LONG_TAIL_KEYWORDS } from "./seo/biocide-oil-gas-keywords";
import { MEA_TRIAZINE_78_HIGH_CONC_PRIMARY_KEYWORD, MEA_TRIAZINE_78_HIGH_CONC_LONG_TAIL_KEYWORDS } from "./seo/mea-triazine-78-high-concentration-keywords";
import { EDDM_PRIMARY_KEYWORD, EDDM_LONG_TAIL_KEYWORDS } from "./seo/eddm-keywords";
import { MMA_TRIAZINE_40_BTX_FREE_PRIMARY_KEYWORD, MMA_TRIAZINE_40_BTX_FREE_LONG_TAIL_KEYWORDS } from "./seo/mma-triazine-40-btx-free-keywords";
import { BKC_50_PRIMARY_KEYWORD, BKC_50_LONG_TAIL_KEYWORDS } from "./seo/bkc-50-keywords";
import { BKC_80_PRIMARY_KEYWORD, BKC_80_LONG_TAIL_KEYWORDS } from "./seo/bkc-80-keywords";
import {
  BIT_20_PRIMARY_KEYWORD,
  BIT_20_LONG_TAIL_KEYWORDS,
  BIT_20_BUYING_INTENT,
  BIT_20_RESEARCH_BASED,
} from "./seo/bit-20-benzisothiazolinone-keywords";
import {
  BRONOPOL_PRIMARY_KEYWORD,
  BRONOPOL_LONG_TAIL_KEYWORDS,
  BRONOPOL_BUYING_INTENT,
  BRONOPOL_RESEARCH_BASED,
  BRONOPOL_INFORMATIONAL,
} from "./seo/bronopol-keywords";

/**
 * Slug → synonyms mapping for all products that have synonym data.
 * Each product's synonym items (trade names, brand names, chemical names)
 * are merged into the meta keywords pipeline.
 */
const PRODUCT_SYNONYMS_MAP: Record<string, ProductSynonyms> = {
  "mea-triazine-78-h2s-scavenger": MEA_TRIAZINE_SYNONYMS,
  "mma-triazine-40": MMA_TRIAZINE_SYNONYMS,
  "mma-triazine-40-btx-free": MMA_TRIAZINE_SYNONYMS,
  "eddm-non-triazine-h2s-scavenger": EDDM_SYNONYMS,
  "benzalkonium-chloride-50": BENZALKONIUM_CHLORIDE_SYNONYMS,
  "benzalkonium-chloride-80": BENZALKONIUM_CHLORIDE_SYNONYMS,
  "sodium-xylene-sulfonate-40": SODIUM_XYLENE_SULFONATE_SYNONYMS,
  "sodium-xylene-sulfonate-90": SODIUM_XYLENE_SULFONATE_SYNONYMS,
  "triazine-h2s-scavenger-general": TRIAZINE_SCAVENGER_GENERAL_SYNONYMS,
  "metal-working-fluids": METAL_WORKING_FLUIDS_SYNONYMS,
  "biocide-oil-gas": BIOCIDE_OIL_GAS_SYNONYMS,
  "mea-triazine-78-high-concentration": MEA_TRIAZINE_78_HIGH_CONC_SYNONYMS,
  "bit-20-benzisothiazolinone": BIT_20_SYNONYMS,
  "bronopol": BRONOPOL_SYNONYMS,
};

type ProductKeywordConfig = {
  primaryKeyword: string;
  longTailKeywords: string[];
};

const MEA_TRIAZINE_PRODUCT_PAGE_KEYWORDS: ProductKeywordConfig = {
  primaryKeyword: MEA_TRIAZINE_78_PRIMARY_KEYWORD,
  longTailKeywords: mergeKeywordClusters(
    MEA_TRIAZINE_KEYWORDS,
    H2S_SCAVENGER_CORE,
    SULFIDE_SCAVENGER_KEYWORDS,
    OILFIELD_H2S_KEYWORDS,
    MEA_TRIAZINE_78_LONG_TAIL_KEYWORDS
  ),
};

export const PRODUCT_SEO_KEYWORDS: Record<string, ProductKeywordConfig> = {
  "mea-triazine-78-h2s-scavenger": {
    primaryKeyword: MEA_TRIAZINE_78_PRIMARY_KEYWORD,
    longTailKeywords: MEA_TRIAZINE_78_LONG_TAIL_KEYWORDS
  },

  "mma-triazine-40": {
    primaryKeyword: MMA_TRIAZINE_40_PRIMARY_KEYWORD,
    longTailKeywords: MMA_TRIAZINE_40_LONG_TAIL_KEYWORDS
  },

  "p-toluenesulfonic-acid": {
    primaryKeyword: PTSA_PRIMARY_KEYWORD,
    longTailKeywords: PTSA_LONG_TAIL_KEYWORDS
  },

  "sodium-cumene-sulfonate-40": {
    primaryKeyword: SCS_40_PRIMARY_KEYWORD,
    longTailKeywords: SCS_40_LONG_TAIL_KEYWORDS
  },

  "sodium-cumene-sulfonate-90": {
    primaryKeyword: SCS_90_PRIMARY_KEYWORD,
    longTailKeywords: SCS_90_LONG_TAIL_KEYWORDS
  },

  "sodium-xylene-sulfonate-90": {
    primaryKeyword: SXS_90_PRIMARY_KEYWORD,
    longTailKeywords: SXS_90_LONG_TAIL_KEYWORDS
  },

  "sodium-xylene-sulfonate-40": {
    primaryKeyword: SXS_40_PRIMARY_KEYWORD,
    longTailKeywords: SXS_40_LONG_TAIL_KEYWORDS
  },

  "bis-2-chloroethyl-amine-hydrochloride": {
    primaryKeyword: BIS_2_CHLOROETHYL_AMINE_HCL_PRIMARY_KEYWORD,
    longTailKeywords: BIS_2_CHLOROETHYL_AMINE_HCL_LONG_TAIL_KEYWORDS
  },

  "di-ethyl-amino-ethyl-chloride-hydrochloride": {
    primaryKeyword: DEAEC_HCL_PRIMARY_KEYWORD,
    longTailKeywords: DEAEC_HCL_LONG_TAIL_KEYWORDS
  },

  "2-amino-5-methylthiazole": {
    primaryKeyword: AMIT_PRIMARY_KEYWORD,
    longTailKeywords: AMIT_LONG_TAIL_KEYWORDS
  },

  "2-chloroethylamine-hydrochloride": {
    primaryKeyword: CEA_HCL_PRIMARY_KEYWORD,
    longTailKeywords: CEA_HCL_LONG_TAIL_KEYWORDS
  },

  "triazine-h2s-scavenger-general": {
    primaryKeyword: TRIAZINE_SCAVENGER_GENERAL_PRIMARY_KEYWORD,
    longTailKeywords: TRIAZINE_SCAVENGER_GENERAL_LONG_TAIL_KEYWORDS
  },

  "metal-working-fluids": {
    primaryKeyword: METAL_WORKING_FLUIDS_PRIMARY_KEYWORD,
    longTailKeywords: METAL_WORKING_FLUIDS_LONG_TAIL_KEYWORDS
  },

  "biocide-oil-gas": {
    primaryKeyword: BIOCIDE_OIL_GAS_PRIMARY_KEYWORD,
    longTailKeywords: BIOCIDE_OIL_GAS_LONG_TAIL_KEYWORDS
  },

  "mea-triazine-78-high-concentration": {
    primaryKeyword: MEA_TRIAZINE_78_HIGH_CONC_PRIMARY_KEYWORD,
    longTailKeywords: MEA_TRIAZINE_78_HIGH_CONC_LONG_TAIL_KEYWORDS
  },

  "eddm-non-triazine-h2s-scavenger": {
    primaryKeyword: EDDM_PRIMARY_KEYWORD,
    longTailKeywords: EDDM_LONG_TAIL_KEYWORDS
  },

  "mma-triazine-40-btx-free": {
    primaryKeyword: MMA_TRIAZINE_40_BTX_FREE_PRIMARY_KEYWORD,
    longTailKeywords: MMA_TRIAZINE_40_BTX_FREE_LONG_TAIL_KEYWORDS
  },

  "benzalkonium-chloride-50": {
    primaryKeyword: BKC_50_PRIMARY_KEYWORD,
    longTailKeywords: BKC_50_LONG_TAIL_KEYWORDS
  },

  "benzalkonium-chloride-80": {
    primaryKeyword: BKC_80_PRIMARY_KEYWORD,
    longTailKeywords: BKC_80_LONG_TAIL_KEYWORDS
  },

  "bit-20-benzisothiazolinone": {
    primaryKeyword: BIT_20_PRIMARY_KEYWORD,
    longTailKeywords: mergeKeywordClusters(
      BIT_20_LONG_TAIL_KEYWORDS,
      BIT_20_BUYING_INTENT,
      BIT_20_RESEARCH_BASED
    ),
  },

  "bronopol": {
    primaryKeyword: BRONOPOL_PRIMARY_KEYWORD,
    longTailKeywords: mergeKeywordClusters(
      BRONOPOL_LONG_TAIL_KEYWORDS,
      BRONOPOL_BUYING_INTENT,
      BRONOPOL_RESEARCH_BASED,
      BRONOPOL_INFORMATIONAL
    ),
  },
};

function buildDefaultKeywords(name: string, casNumber: string): ProductKeywordConfig {
  const casSuffix = casNumber ? ` cas ${casNumber}` : "";
  return {
    primaryKeyword: `${name.toLowerCase()} manufacturer india`,
    longTailKeywords: [
      `${name.toLowerCase()} supplier${casSuffix}`.trim(),
      `buy ${name.toLowerCase()} industrial grade`,
      `${name.toLowerCase()} msds safety data sheet`,
    ],
  };
}

function mergeAllKeywordSources(base: ProductKeywordConfig, slug: string): ProductKeywordConfig {
  const additionalKeywords: string[][] = [];

  // 1. Expanded buying-intent + research keywords
  const expanded = EXPANDED_KEYWORDS[slug as keyof typeof EXPANDED_KEYWORDS];
  if (expanded) {
    additionalKeywords.push(expanded.buyingIntent, expanded.researchBased);
  }

  // 2. Product synonyms — extract all synonym items as keywords
  const synonymsConfig = PRODUCT_SYNONYMS_MAP[slug];
  if (synonymsConfig) {
    const synonymKeywords = synonymsConfig.groups.flatMap((g) => g.items);
    additionalKeywords.push(synonymKeywords);
  }

  // 3. MEA Triazine geo-targeted search keywords (only for MEA Triazine slug)
  if (slug === "mea-triazine-78-h2s-scavenger") {
    const geoKeywords = MEA_TRIAZINE_SEARCH_KEYWORDS.map((k) => k.keyword);
    additionalKeywords.push(geoKeywords);

    // Also merge competitor brand names + application descriptions
    const competitorKeywords = MEA_TRIAZINE_COMPETITOR_APPLICATIONS.flatMap((c) => [
      c.brand,
      c.application,
      c.meaTriazineRole,
    ]);
    additionalKeywords.push(competitorKeywords);

    // Merge alternate names from schema enrichment
    const schemaAlternateNames = [...MEA_TRIAZINE_SCHEMA_ENRICHMENT.alternateName];
    additionalKeywords.push(schemaAlternateNames);
  }

  // 4. Additional keyword clusters that aren't already in the base
  // These clusters are mapped by relevance to specific product categories
  const clusterMap: Record<string, readonly (readonly string[])[]> = {
    "mea-triazine-78-h2s-scavenger": [
      TRIAZINE_BIOCIDE_KEYWORDS,
      TRIAZINE_MANUFACTURER_KEYWORDS,
      WATER_SOLUBLE_SCAVENGER_KEYWORDS,
      SCAVENGER_CORROSION_KEYWORDS,
      MEA_TRIAZINE_PRICING_KEYWORDS,
      SUPPLY_HUB_KEYWORDS,
      MEA_VS_MMA_KEYWORDS,
    ],
    "mma-triazine-40": [
      TRIAZINE_BIOCIDE_KEYWORDS,
      TRIAZINE_MANUFACTURER_KEYWORDS,
      MEA_VS_MMA_KEYWORDS,
    ],
    "mma-triazine-40-btx-free": [
      TRIAZINE_MANUFACTURER_KEYWORDS,
      MEA_VS_MMA_KEYWORDS,
    ],
    "mea-triazine-78-high-concentration": [
      TRIAZINE_MANUFACTURER_KEYWORDS,
      MEA_TRIAZINE_PRICING_KEYWORDS,
      SUPPLY_HUB_KEYWORDS,
    ],
    "triazine-h2s-scavenger-general": [
      TRIAZINE_BIOCIDE_KEYWORDS,
      TRIAZINE_MANUFACTURER_KEYWORDS,
      WATER_SOLUBLE_SCAVENGER_KEYWORDS,
      SCAVENGER_CORROSION_KEYWORDS,
    ],
    "biocide-oil-gas": [
      TRIAZINE_BIOCIDE_KEYWORDS,
      OILFIELD_H2S_KEYWORDS,
    ],
    "metal-working-fluids": [
      TRIAZINE_BIOCIDE_KEYWORDS,
    ],
    "benzalkonium-chloride-50": [
      BKC_CORE_KEYWORDS,
      BKC_50_KEYWORDS,
      BKC_APPLICATIONS_KEYWORDS,
    ],
    "benzalkonium-chloride-80": [
      BKC_CORE_KEYWORDS,
      BKC_80_KEYWORDS,
      BKC_APPLICATIONS_KEYWORDS,
    ],
  };

  // Fix typo in original source clusterMap for metal-working-fluids
  const fixedClusterMap: Record<string, readonly (readonly string[])[]> = {
    ...clusterMap,
    "metal-working-fluids": [TRIAZINE_BIOCIDE_KEYWORDS]
  };

  const slugClusters = fixedClusterMap[slug];
  if (slugClusters) {
    for (const cluster of slugClusters) {
      additionalKeywords.push([...cluster]);
    }
  }

  if (additionalKeywords.length === 0) return base;

  return {
    primaryKeyword: base.primaryKeyword,
    longTailKeywords: mergeKeywordClusters(
      base.longTailKeywords,
      ...additionalKeywords,
    ),
  };
}

export function getProductSeoKeywords(slug: string, name: string, casNumber: string): ProductKeywordConfig {
  if (slug === "mea-triazine-78-h2s-scavenger") {
    return mergeAllKeywordSources(MEA_TRIAZINE_PRODUCT_PAGE_KEYWORDS, slug);
  }

  const baseConfig = PRODUCT_SEO_KEYWORDS[slug] || buildDefaultKeywords(name, casNumber);
  return mergeAllKeywordSources(baseConfig, slug);
}
