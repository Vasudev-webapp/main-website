/**
 * Internal Linking Structure
 *
 * Maps product slugs to related internal pages for cross-linking.
 * Strong internal links pass PageRank and help Google understand site structure.
 */

export type InternalLink = {
  href: string;
  label: string;
  context: string; // short description for aria-label / title
};

type ProductInternalLinks = {
  relatedProducts: InternalLink[];
  relatedPages: InternalLink[];
  industryPages: InternalLink[];
};

const DEFAULT_LINKS: InternalLink[] = [
  { href: "/product", label: "All Products", context: "Browse our full chemical product catalog" },
  { href: "/about", label: "About Us", context: "ISO 9001:2015 certified manufacturer in Gujarat, India" },
  { href: "/contact", label: "Request a Quote", context: "Get pricing and samples within 24 hours" },
];

const INDUSTRY_LINKS: Record<string, InternalLink[]> = {
  oilgas: [
    { href: "/industries/oil-gas-h2s-scavenger", label: "Oil & Gas Industry", context: "H2S scavenger solutions for oil and gas" },
    { href: "/h2s-scavenger-oil-gas", label: "H2S Scavenger for Oil & Gas", context: "Complete guide to H2S scavenging in oil and gas" },
  ],
  waterTreatment: [
    { href: "/industries/water-treatment", label: "Water Treatment Industry", context: "Chemical solutions for water treatment" },
  ],
  metalworking: [
    { href: "/industries/metal-working-fluids", label: "Metalworking Fluids Industry", context: "Biocides and preservatives for metalworking fluids" },
  ],
  paperMill: [
    { href: "/industries/paper-mill", label: "Paper & Pulp Industry", context: "Biocides for paper mill applications" },
  ],
  healthcareSanitation: [
    { href: "/industries/healthcare-sanitation", label: "Healthcare & Sanitation", context: "Disinfectants and sanitizers for hospitals, clinics, and food-grade environments" },
  ],
  poolWater: [
    { href: "/industries/pool-water-treatment", label: "Pool & Water Treatment", context: "Algicides and sanitizers for swimming pools, spas, and recreational water" },
  ],
  personalCare: [
    { href: "/industries/personal-care-cosmetics", label: "Personal Care & Cosmetics", context: "Preservatives and surfactants for cosmetics and personal care formulations" },
  ],
};

export const PRODUCT_INTERNAL_LINKS: Record<string, ProductInternalLinks> = {
  "mea-triazine-78-h2s-scavenger": {
    relatedProducts: [
      { href: "/product/mma-triazine-40", label: "MMA Triazine 40%", context: "BTX-free alternative H2S scavenger" },
      { href: "/product/eddm-non-triazine-h2s-scavenger", label: "EDDM Non-Triazine H2S Scavenger", context: "Non-triazine alternative for H2S removal" },
    ],
    relatedPages: [
      { href: "/mea-triazine-vs-mma-triazine", label: "MEA vs MMA Triazine Comparison", context: "Detailed comparison of MEA and MMA triazine scavengers" },
      { href: "/how-h2s-scavengers-work", label: "How H2S Scavengers Work", context: "Technical guide to H2S scavenging chemistry" },
      { href: "/mea-triazine-prices", label: "MEA Triazine Pricing Guide", context: "Current pricing and bulk order information" },
      { href: "/compare", label: "Product Comparisons", context: "Compare H2S scavenger products side by side" },
      { href: "/blog", label: "Industry Blog", context: "Latest insights on chemical manufacturing" },
      ...DEFAULT_LINKS,
    ],
    industryPages: [
      ...INDUSTRY_LINKS.oilgas,
      ...INDUSTRY_LINKS.waterTreatment,
      ...INDUSTRY_LINKS.metalworking,
      ...INDUSTRY_LINKS.paperMill,
    ],
  },
  "mma-triazine-40": {
    relatedProducts: [
      { href: "/product/mea-triazine-78-h2s-scavenger", label: "MEA Triazine 78%", context: "High-concentration H2S scavenger" },
      { href: "/product/eddm-non-triazine-h2s-scavenger", label: "EDDM Non-Triazine H2S Scavenger", context: "Non-triazine alternative for H2S removal" },
    ],
    relatedPages: [
      { href: "/mea-triazine-vs-mma-triazine", label: "MEA vs MMA Triazine Comparison", context: "Detailed comparison of MEA and MMA triazine scavengers" },
      { href: "/how-h2s-scavengers-work", label: "How H2S Scavengers Work", context: "Technical guide to H2S scavenging chemistry" },
      { href: "/compare", label: "Product Comparisons", context: "Compare H2S scavenger products side by side" },
      ...DEFAULT_LINKS,
    ],
    industryPages: [
      ...INDUSTRY_LINKS.oilgas,
      ...INDUSTRY_LINKS.waterTreatment,
      ...INDUSTRY_LINKS.paperMill,
    ],
  },
  "eddm-non-triazine-h2s-scavenger": {
    relatedProducts: [
      { href: "/product/mea-triazine-78-h2s-scavenger", label: "MEA Triazine 78%", context: "Triazine-based H2S scavenger" },
      { href: "/product/mma-triazine-40", label: "MMA Triazine 40%", context: "BTX-free triazine H2S scavenger" },
    ],
    relatedPages: [
      { href: "/how-h2s-scavengers-work", label: "How H2S Scavengers Work", context: "Technical guide to H2S scavenging chemistry" },
      { href: "/compare", label: "Product Comparisons", context: "Compare H2S scavenger products side by side" },
      ...DEFAULT_LINKS,
    ],
    industryPages: [
      ...INDUSTRY_LINKS.oilgas,
      ...INDUSTRY_LINKS.waterTreatment,
      ...INDUSTRY_LINKS.metalworking,
    ],
  },
  "sodium-cumene-sulfonate-40": {
    relatedProducts: [
      { href: "/product/sodium-cumene-sulfonate-90", label: "Sodium Cumene Sulfonate 90%", context: "High-active powder hydrotrope" },
      { href: "/product/sodium-xylene-sulfonate-40", label: "Sodium Xylene Sulfonate 40%", context: "Alternative liquid hydrotrope" },
      { href: "/product/sodium-xylene-sulfonate-90", label: "Sodium Xylene Sulfonate 90%", context: "Powder hydrotrope alternative" },
    ],
    relatedPages: [
      { href: "/hydrotropes", label: "Hydrotropes Guide", context: "Complete guide to hydrotrope chemicals" },
      { href: "/hydrotropes-global-export", label: "Hydrotropes Global Export", context: "Export supply of hydrotrope chemicals" },
      ...DEFAULT_LINKS,
    ],
    industryPages: [],
  },
  "sodium-cumene-sulfonate-90": {
    relatedProducts: [
      { href: "/product/sodium-cumene-sulfonate-40", label: "Sodium Cumene Sulfonate 40%", context: "Liquid hydrotrope version" },
      { href: "/product/sodium-xylene-sulfonate-90", label: "Sodium Xylene Sulfonate 90%", context: "Alternative powder hydrotrope" },
      { href: "/product/sodium-xylene-sulfonate-40", label: "Sodium Xylene Sulfonate 40%", context: "Alternative liquid hydrotrope" },
    ],
    relatedPages: [
      { href: "/hydrotropes", label: "Hydrotropes Guide", context: "Complete guide to hydrotrope chemicals" },
      { href: "/hydrotropes-global-export", label: "Hydrotropes Global Export", context: "Export supply of hydrotrope chemicals" },
      ...DEFAULT_LINKS,
    ],
    industryPages: [],
  },
  "sodium-xylene-sulfonate-40": {
    relatedProducts: [
      { href: "/product/sodium-xylene-sulfonate-90", label: "Sodium Xylene Sulfonate 90%", context: "High-active powder version" },
      { href: "/product/sodium-cumene-sulfonate-40", label: "Sodium Cumene Sulfonate 40%", context: "Alternative liquid hydrotrope" },
      { href: "/product/sodium-cumene-sulfonate-90", label: "Sodium Cumene Sulfonate 90%", context: "Alternative powder hydrotrope" },
    ],
    relatedPages: [
      { href: "/hydrotropes", label: "Hydrotropes Guide", context: "Complete guide to hydrotrope chemicals" },
      { href: "/hydrotropes-global-export", label: "Hydrotropes Global Export", context: "Export supply of hydrotrope chemicals" },
      ...DEFAULT_LINKS,
    ],
    industryPages: [],
  },
  "sodium-xylene-sulfonate-90": {
    relatedProducts: [
      { href: "/product/sodium-xylene-sulfonate-40", label: "Sodium Xylene Sulfonate 40%", context: "Liquid version" },
      { href: "/product/sodium-cumene-sulfonate-90", label: "Sodium Cumene Sulfonate 90%", context: "Alternative powder hydrotrope" },
      { href: "/product/sodium-cumene-sulfonate-40", label: "Sodium Cumene Sulfonate 40%", context: "Alternative liquid hydrotrope" },
    ],
    relatedPages: [
      { href: "/hydrotropes", label: "Hydrotropes Guide", context: "Complete guide to hydrotrope chemicals" },
      { href: "/hydrotropes-global-export", label: "Hydrotropes Global Export", context: "Export supply of hydrotrope chemicals" },
      ...DEFAULT_LINKS,
    ],
    industryPages: [],
  },
  "benzalkonium-chloride-50": {
    relatedProducts: [
      { href: "/product/benzalkonium-chloride-80", label: "Benzalkonium Chloride 80%", context: "Concentrated 80% BKC for export buyers who dilute on-site" },
      { href: "/product/sodium-cumene-sulfonate-40", label: "Sodium Cumene Sulfonate 40%", context: "Anionic hydrotrope (note: anionic + cationic incompatibility)" },
      { href: "/product/sodium-xylene-sulfonate-40", label: "Sodium Xylene Sulfonate 40%", context: "Anionic hydrotrope alternative for non-cationic systems" },
    ],
    relatedPages: [
      { href: "/benzalkonium-chloride-50-vs-80", label: "BKC 50% vs BKC 80% Comparison", context: "Which grade should you buy — full comparison guide" },
      { href: "/applications/disinfectants-sanitizers", label: "Disinfectants & Sanitizers Application Guide", context: "How quaternary ammonium compounds disinfect surfaces" },
      { href: "/bkc-uses-applications", label: "BKC Uses & Applications Hub", context: "All applications of Benzalkonium Chloride from healthcare to oilfield" },
      { href: "/bkc-vs-ddac-vs-ctab", label: "BKC vs DDAC vs CTAB Comparison", context: "Quaternary ammonium compound chemistry comparison" },
      { href: "/compare", label: "Product Comparisons", context: "Compare surfactants and biocides side by side" },
      { href: "/blog", label: "Industry Blog", context: "Latest insights on chemical manufacturing" },
      ...DEFAULT_LINKS,
    ],
    industryPages: [
      ...INDUSTRY_LINKS.healthcareSanitation,
      ...INDUSTRY_LINKS.poolWater,
      ...INDUSTRY_LINKS.personalCare,
      ...INDUSTRY_LINKS.waterTreatment,
      ...INDUSTRY_LINKS.oilgas,
    ],
  },
  "benzalkonium-chloride-80": {
    relatedProducts: [
      { href: "/product/benzalkonium-chloride-50", label: "Benzalkonium Chloride 50%", context: "Ready-to-formulate 50% BKC — global formulation standard" },
      { href: "/product/sodium-cumene-sulfonate-90", label: "Sodium Cumene Sulfonate 90%", context: "Anionic hydrotrope powder (note: anionic + cationic incompatibility)" },
      { href: "/product/sodium-xylene-sulfonate-90", label: "Sodium Xylene Sulfonate 90%", context: "Anionic hydrotrope powder alternative" },
    ],
    relatedPages: [
      { href: "/benzalkonium-chloride-50-vs-80", label: "BKC 50% vs BKC 80% Comparison", context: "Which grade should you buy — full comparison guide" },
      { href: "/applications/disinfectants-sanitizers", label: "Disinfectants & Sanitizers Application Guide", context: "How quaternary ammonium compounds disinfect surfaces" },
      { href: "/bkc-uses-applications", label: "BKC Uses & Applications Hub", context: "All applications of Benzalkonium Chloride from healthcare to oilfield" },
      { href: "/bkc-vs-ddac-vs-ctab", label: "BKC vs DDAC vs CTAB Comparison", context: "Quaternary ammonium compound chemistry comparison" },
      { href: "/compare", label: "Product Comparisons", context: "Compare surfactants and biocides side by side" },
      { href: "/blog", label: "Industry Blog", context: "Latest insights on chemical manufacturing" },
      ...DEFAULT_LINKS,
    ],
    industryPages: [
      ...INDUSTRY_LINKS.healthcareSanitation,
      ...INDUSTRY_LINKS.poolWater,
      ...INDUSTRY_LINKS.personalCare,
      ...INDUSTRY_LINKS.waterTreatment,
      ...INDUSTRY_LINKS.oilgas,
    ],
  },
};

/**
 * Get internal links for a product page. Falls back to default links if no specific mapping exists.
 */
export function getProductInternalLinks(slug: string): ProductInternalLinks {
  return PRODUCT_INTERNAL_LINKS[slug] || {
    relatedProducts: [],
    relatedPages: DEFAULT_LINKS,
    industryPages: [],
  };
}
