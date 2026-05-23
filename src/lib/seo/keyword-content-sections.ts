/**
 * Keyword Content Sections Helper
 *
 * Transforms EXPANDED_KEYWORDS into structured content sections
 * for rendering on product pages. These sections surface keyword-rich
 * text as real, crawlable page content — not just meta tags.
 *
 * Google ranks pages based on visible content, headings, and structured data.
 * Meta keywords alone have been ignored by Google since 2009.
 */

import { EXPANDED_KEYWORDS } from "@/lib/seo/expanded-keywords";

/* ── Types ───────────────────────────────────────────────────────── */

export type KeywordContentGroup = {
  heading: string;
  description: string;
  items: string[];
  prose: string;
};

export type ProductKeywordContentSections = {
  categoryLabel: string;
  categorySummary: string;
  supplySectionHeading: string;
  applicationGroups: KeywordContentGroup[];
  supplyGroups: KeywordContentGroup[];
  geographyGroups: KeywordContentGroup[];
};

/* ── Helpers ─────────────────────────────────────────────────────── */

function extractByPattern(keywords: string[], patterns: RegExp[]): string[] {
  return keywords.filter((kw) => patterns.some((p) => p.test(kw)));
}

function titleCase(str: string): string {
  return str
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function dedupeArray(arr: string[]): string[] {
  return Array.from(new Set(arr.map((s) => s.trim()).filter(Boolean)));
}

/**
 * Converts a list of keywords into a natural-sounding prose paragraph.
 * Keywords are woven into readable sentences rather than displayed as a raw list.
 */
function keywordsToProse(keywords: string[], context: string): string {
  if (keywords.length === 0) return "";
  // Group keywords into sentence chunks of 3-4
  const sentences: string[] = [];
  const chunks: string[][] = [];
  for (let i = 0; i < keywords.length; i += 3) {
    chunks.push(keywords.slice(i, i + 3));
  }
  const connectors = [
    "Our product range covers",
    "We supply solutions for",
    "Customers rely on us for",
    "This includes",
    "We also serve requirements for",
    "Additionally, we provide",
  ];
  chunks.forEach((chunk, idx) => {
    const connector = connectors[idx % connectors.length];
    const joined = chunk.map((k) => k.toLowerCase()).join(", ");
    sentences.push(`${connector} ${joined}.`);
  });
  return `${context} ${sentences.join(" ")}`;
}

/* ── Category content config ─────────────────────────────────────── */

const CATEGORY_CONTENT: Record<
  string,
  {
    categoryLabel: string;
    categorySummary: string;
    supplySectionHeading: string;
  }
> = {
  "mea-triazine-78-h2s-scavenger": {
    categoryLabel: "H2S Scavenger — MEA Triazine 78%",
    categorySummary:
      "MEA Triazine 78% is a triazine-based H2S scavenger manufactured by Vasudev Chemo Pharma. It belongs to the broader H2S Scavenger chemical category and is used across oilfield, gas processing, biogas, refinery, and pipeline applications worldwide.",
    supplySectionHeading:
      "Global Supply Network for MEA Triazine 78% H2S Scavenger",
  },
  "mma-triazine-40": {
    categoryLabel: "H2S Scavenger — MMA Triazine 40%",
    categorySummary:
      "MMA Triazine 40% is a BTX-free triazine-based H2S scavenger manufactured by Vasudev Chemo Pharma. Part of the H2S Scavenger chemical category, it is specifically designed for environmental compliance in refineries and gas processing operations.",
    supplySectionHeading:
      "Global Supply Network for MMA Triazine 40% H2S Scavenger",
  },
  "triazine-h2s-scavenger-general": {
    categoryLabel: "Triazine H2S Scavenger",
    categorySummary:
      "Triazine-based H2S scavengers from Vasudev Chemo Pharma are used in oil and gas, biogas, water treatment, and industrial applications. Available as MEA Triazine 78% and MMA Triazine 40% (BTX-free), they provide efficient, cost-effective hydrogen sulphide removal.",
    supplySectionHeading:
      "Global Supply of Triazine H2S Scavenger Chemicals",
  },
  "metal-working-fluids": {
    categoryLabel: "Metal Working Fluid Biocide",
    categorySummary:
      "Triazine-based biocides from Vasudev Chemo Pharma preserve metal working fluids by controlling bacterial and fungal growth. They prevent rancidity, odour, and degradation of cutting fluids, coolants, and machining fluids used in automotive, aerospace, and precision manufacturing.",
    supplySectionHeading:
      "Global Supply of Metal Working Fluid Biocide",
  },
  "biocide-oil-gas": {
    categoryLabel: "Oilfield Biocide",
    categorySummary:
      "Triazine-based oilfield biocides from Vasudev Chemo Pharma control sulphate reducing bacteria (SRB), acid producing bacteria (APB), and general aerobic bacteria in oil and gas operations. They prevent microbially influenced corrosion (MIC) in pipelines, water injection systems, and produced water.",
    supplySectionHeading:
      "Global Supply of Oilfield Biocide Chemicals",
  },
  "mea-triazine-78-high-concentration": {
    categoryLabel: "H2S Scavenger — High Concentration MEA Triazine 78%",
    categorySummary:
      "High concentration MEA Triazine 78% from Vasudev Chemo Pharma delivers maximum scavenging efficiency per unit volume. This premium H2S scavenger is designed for high H2S load operations in offshore, deepwater, and sour gas applications.",
    supplySectionHeading:
      "Global Supply of High Concentration MEA Triazine 78%",
  },
  "mma-triazine-40-btx-free": {
    categoryLabel: "H2S Scavenger — BTX-Free MMA Triazine 40%",
    categorySummary:
      "BTX-free MMA Triazine 40% from Vasudev Chemo Pharma meets strict environmental regulations for BTEX emissions. This environmentally responsible H2S scavenger is used in refineries, gas processing plants, and operations requiring compliance with VOC emission standards.",
    supplySectionHeading:
      "Global Supply of BTX-Free MMA Triazine 40%",
  },
};

/* ── Keyword grouping patterns ───────────────────────────────────── */

const APPLICATION_PATTERNS: {
  heading: string;
  description: string;
  patterns: RegExp[];
}[] = [
  {
    heading: "Oilfield & Gas Processing Applications",
    description:
      "H2S scavenger chemicals for upstream oil and gas operations, wellhead injection, pipeline treatment, and offshore platforms.",
    patterns: [
      /oilfield|offshore|onshore|drilling|completion|production chemicals|wellhead|pipeline/i,
    ],
  },
  {
    heading: "Refinery & Petrochemical Applications",
    description:
      "H2S scavenger and chemical treatment for refinery overhead, crude oil sweetening, and petrochemical processing operations.",
    patterns: [/refiner|petrochemical|crude oil|sweetening|desalter/i],
  },
  {
    heading: "Biogas & Environmental Applications",
    description:
      "H2S removal from biogas, landfill gas, and wastewater treatment using triazine-based scavenging chemicals.",
    patterns: [/biogas|wastewater|environmental|waste|landfill|sour water/i],
  },
  {
    heading: "Natural Gas & LPG Treatment",
    description:
      "Gas sweetening chemicals for natural gas processing, LPG purification, and gas pipeline integrity.",
    patterns: [/natural gas|lpg|gas processing|gas sweetening/i],
  },
  {
    heading: "Biocide for Metalworking Fluids",
    description:
      "Triazine-based biocide for metalworking fluids — prevents bacterial and fungal growth in cutting fluids, coolants, grinding fluids, and CNC machining coolants. Extends fluid life and eliminates rancid odours.",
    patterns: [/metalworking|cutting fluid|coolant biocide|machining|grinding fluid|cnc/i],
  },
];

const SUPPLY_PATTERNS: {
  heading: string;
  description: string;
  patterns: RegExp[];
}[] = [
  {
    heading: "Bulk Supply & Packaging Options",
    description:
      "Available in 210L drums, 1 MT IBC tanks, ISO tanks, flexitanks, and bulk containers. Factory direct pricing from Gujarat, India.",
    patterns: [
      /drum|ibc|iso tank|flexitank|bulk container|210l|1mt|container|fcl|lcl/i,
    ],
  },
  {
    heading: "Contract Manufacturing & White Label Supply",
    description:
      "Private label, white label, and contract manufacturing services for H2S scavenger chemicals. OEM supply from ISO 9001:2015 certified facility.",
    patterns: [
      /contract manufacturing|white label|private label|tender|govt supplier|msme/i,
    ],
  },
  {
    heading: "Chemical Trading & Procurement",
    description:
      "B2B supply, chemical trading, procurement services, and competitive pricing. Available on IndiaMart, Alibaba, and TradeWheel.",
    patterns: [
      /b2b|trading|procurement|indiamart|alibaba|tradewheel|agent|commission|brokerage|indenting/i,
    ],
  },
];

/* ── Main content builder ────────────────────────────────────────── */

export function getProductKeywordContentSections(
  slug: string
): ProductKeywordContentSections | null {
  const expanded = EXPANDED_KEYWORDS[slug as keyof typeof EXPANDED_KEYWORDS];
  const categoryConfig = CATEGORY_CONTENT[slug];

  if (!expanded || !categoryConfig) return null;

  const allBuying = expanded.buyingIntent;
  const allResearch = expanded.researchBased;
  const allKeywords = [...allBuying, ...allResearch];

  // Build application groups
  const applicationGroups: KeywordContentGroup[] = APPLICATION_PATTERNS.map(
    ({ heading, description, patterns }) => {
      const matchedKeywords = dedupeArray(
        extractByPattern(allKeywords, patterns)
      );
      const items = matchedKeywords.slice(0, 8).map(titleCase);
      return {
        heading,
        description,
        items,
        prose: keywordsToProse(items, description),
      };
    }
  ).filter((g) => g.items.length > 0);

  // Build supply groups
  const supplyGroups: KeywordContentGroup[] = SUPPLY_PATTERNS.map(
    ({ heading, description, patterns }) => {
      const matchedKeywords = dedupeArray(
        extractByPattern(allBuying, patterns)
      );
      const items = matchedKeywords.slice(0, 8).map(titleCase);
      return {
        heading,
        description,
        items,
        prose: keywordsToProse(items, description),
      };
    }
  ).filter((g) => g.items.length > 0);

  // Build geography groups from distributor keywords
  const distributorKeywords = allBuying.filter((kw) =>
    /distributor|agent|export|supply.*(?:uae|usa|saudi|oman|qatar|kuwait|russia|vietnam|brazil|egypt|iraq|libya|jordan|thailand|turkey|middle east)/i.test(
      kw
    )
  );

  const regionMap: Record<string, RegExp> = {
    "Middle East & GCC": /uae|saudi|oman|qatar|kuwait|middle east|jordan/i,
    "North Africa & Iraq": /egypt|libya|iraq/i,
    Americas: /usa|brazil|americas/i,
    "Asia Pacific": /vietnam|thailand|asia|australia|china|japan|korea/i,
    "Europe & CIS": /russia|europe|germany|italy|france|uk|turkey/i,
  };

  const geographyGroups: KeywordContentGroup[] = Object.entries(regionMap)
    .map(([heading, pattern]) => {
      const matched = dedupeArray(
        distributorKeywords.filter((kw) => pattern.test(kw))
      );
      const items = matched.slice(0, 6).map(titleCase);
      const desc = `H2S scavenger and triazine chemical distribution, export, and supply to ${heading} markets. FOB, CIF, and CFR terms available.`;
      return {
        heading: `${heading} Supply`,
        description: desc,
        items,
        prose: keywordsToProse(items, desc),
      };
    })
    .filter((g) => g.items.length > 0);

  return {
    ...categoryConfig,
    applicationGroups,
    supplyGroups,
    geographyGroups,
  };
}

/**
 * Returns the list of product slugs that have expanded keyword content sections.
 */
export function getExpandedKeywordSlugs(): string[] {
  return Object.keys(EXPANDED_KEYWORDS);
}
