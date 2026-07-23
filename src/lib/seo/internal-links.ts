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
      { href: "/triazine-injection-vs-contactor-tower", label: "Direct Injection vs Contactor Tower", context: "Application-method engineering for triazine H2S scavenging" },
      { href: "/triazine-vs-non-triazine-scavenger", label: "Triazine vs Non-Triazine Scavengers", context: "Choosing between amine-triazine and non-triazine chemistries" },
      { href: "/triazine-vs-nitrite-scavenger", label: "Triazine vs Nitrite Scavengers", context: "Why triazine avoids sulfur deposition and tower fouling" },
      { href: "/spent-triazine-monitoring", label: "Spent Triazine Monitoring", context: "QA/QC and dosing optimisation to avoid over-treatment" },
      { href: "/refinery-fuel-gas-h2s-scavenger", label: "Refinery Fuel-Gas H2S Scavenging", context: "Polishing residual H2S after amine treating" },
      { href: "/sour-water-stripper-h2s", label: "Sour Water Stripper H2S Control", context: "Residual H2S polishing around the SWS" },
      { href: "/compare", label: "Product Comparisons", context: "Compare H2S scavenger products side by side" },
      { href: "/solutions/hexahydro-1-3-5-tris-2-hydroxyethyl-s-triazine", label: "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine", context: "IUPAC name, CAS 4719-04-4, structure and properties" },
      { href: "/solutions/hexahydro-tris-2-hydroxyethyl-s-triazine-manufacturer-india", label: "Hexahydro-triazine Manufacturer in India", context: "Direct manufacturer, ISO 9001:2015 plant in Gujarat" },
      { href: "/solutions/hexahydro-tris-2-hydroxyethyl-s-triazine-supplier-price", label: "Hexahydro-triazine Supplier & Price", context: "Bulk price, packaging and MOQ" },
      { href: "/solutions/hexahydro-tris-2-hydroxyethyl-s-triazine-exporter-india", label: "Hexahydro-triazine Exporter from India", context: "Ports, Incoterms and export documentation" },
      { href: "/solutions/hexahydro-tris-2-hydroxyethyl-s-triazine-sds-specifications", label: "Hexahydro-triazine SDS & Specifications", context: "GHS safety data, spec table, COA/SDS/TDS" },
      { href: "/solutions/hexahydro-tris-2-hydroxyethyl-s-triazine-uses-applications", label: "Hexahydro-triazine Uses & Applications", context: "H2S scavenging in oil & gas, biogas and wastewater" },
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
      { href: "/sagd-h2s-scavenger", label: "SAGD H2S Scavenging", context: "Heavy-oil/oil-sands H2S control at elevated temperature" },
      { href: "/produced-water-h2s-scavenger", label: "Produced Water H2S Control", context: "Dissolved sulfide removal ahead of reinjection" },
      { href: "/sour-water-stripper-h2s", label: "Sour Water Stripper H2S Control", context: "Residual H2S polishing around the SWS" },
      { href: "/triazine-foaming-emulsion-troubleshooting", label: "Foaming & Emulsion Troubleshooting", context: "Fixing scavenger-related separation upsets" },
      { href: "/custom-triazine-blends-formulations", label: "Custom Triazine Blends", context: "Winterized / oil-soluble tailored formulations" },
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
      { href: "/eddm-grades-selection-guide", label: "EDDM Grades & Selection Guide", context: "Choose between EDDM 90%, 92% and 95% grades" },
      { href: "/eddm-multiphase-h2s-scavenger", label: "EDDM Multiphase H2S Scavenger", context: "Non-triazine H2S scavenging in multiphase systems" },
      { href: "/eddm-in-can-preservative-coatings", label: "EDDM In-Can Preservative", context: "In-can preservation for paints, coatings and adhesives" },
      { href: "/eddm-metalworking-fluid-biocide", label: "EDDM Metalworking Fluid Biocide", context: "Aluminium-safe biocide for metalworking fluids" },
      { href: "/eddm-cas-3586-55-8-properties", label: "EDDM Properties & Specifications", context: "CAS 3586-55-8 technical data and grade specs" },
      { href: "/how-eddm-works-formaldehyde-donor", label: "How EDDM Works", context: "Slow-release formaldehyde-donor mechanism" },
      { href: "/eddm-synonyms-trade-names", label: "EDDM Synonyms & Chemical Names", context: "All chemical names and identifiers for EDDM" },
      { href: "/eddm-dosage-guide", label: "EDDM Dosage Guide", context: "Recommended use levels by application" },
      { href: "/eddm-price-supplier-india", label: "EDDM Price & Supplier India", context: "Bulk supply and export pricing" },
      { href: "/eddm-vs-isothiazolinone-biocides", label: "EDDM vs Isothiazolinone Biocides", context: "When to use formaldehyde-donor vs isothiazolinone chemistry" },
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
      { href: "/solutions/benzalkonium-chloride-50-cas-8001-54-5-adbac", label: "BKC 50% — CAS 8001-54-5 (ADBAC) Identity", context: "Chemical identity, EC, InChI, UNII, INCI" },
      { href: "/solutions/benzalkonium-chloride-50-specifications-sds-coa", label: "BKC 50% Specifications, SDS & COA", context: "Specs, GHS and regulatory status" },
      { href: "/solutions/benzalkonium-chloride-50-dosage-dilution-guide", label: "BKC 50% Dosage & Dilution Guide", context: "In-use concentrations by application" },
      { href: "/solutions/benzalkonium-chloride-50-brand-equivalents", label: "BKC 50% Brand Equivalents", context: "Lonza Bardac 22 / Stepan BTC 824 equivalent" },
      { href: "/solutions/benzalkonium-chloride-50-manufacturer-india", label: "BKC 50% Manufacturer in India", context: "ISO 9001:2015 / GMP / Halal plant in Gujarat" },
      { href: "/solutions/benzalkonium-chloride-50-supplier-price", label: "BKC 50% Supplier — Price & MOQ", context: "Packaging, MOQ and factory-direct pricing" },
      { href: "/solutions/benzalkonium-chloride-50-exporter-india", label: "BKC 50% Exporter from India", context: "Ports, Incoterms and export documentation" },
      { href: "/solutions/benzalkonium-chloride-hospital-disinfectant", label: "BKC Hospital Disinfectant", context: "Hospital & healthcare surface disinfection" },
      { href: "/solutions/benzalkonium-chloride-food-beverage-cip-sanitiser", label: "BKC Food & Beverage CIP Sanitiser", context: "No-rinse food-contact sanitation (max 200 ppm)" },
      { href: "/solutions/benzalkonium-chloride-cosmetic-preservative", label: "BKC Cosmetic Preservative", context: "INCI-grade cosmetic preservation" },
      { href: "/solutions/benzalkonium-chloride-swimming-pool-spa-algicide", label: "BKC Pool & Spa Algicide", context: "Pool algicide dosing and blending" },
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
      { href: "/solutions/benzalkonium-chloride-80-cas-8001-54-5-adbac", label: "BKC 80% — CAS 8001-54-5 (ADBAC) Concentrate", context: "Identity of the 80% concentrate" },
      { href: "/solutions/benzalkonium-chloride-80-specifications-sds-coa", label: "BKC 80% Specifications, SDS & COA", context: "Specs, storage and regulatory status" },
      { href: "/solutions/benzalkonium-chloride-80-dilution-guide", label: "BKC 80% Dilution Guide", context: "Make 50%, 25% and use concentrations" },
      { href: "/solutions/benzalkonium-chloride-80-brand-equivalents", label: "BKC 80% Brand Equivalents", context: "Bardac 2280 / BTC 8358 / Maquat 4480-E equivalent" },
      { href: "/solutions/benzalkonium-chloride-80-manufacturer-india", label: "BKC 80% Manufacturer in India", context: "Concentrate manufacturer, Gujarat" },
      { href: "/solutions/benzalkonium-chloride-80-supplier-price", label: "BKC 80% Supplier — Price & MOQ", context: "Freight-economical concentrate pricing" },
      { href: "/solutions/benzalkonium-chloride-80-exporter-india", label: "BKC 80% Exporter from India", context: "Export concentrate, ports and docs" },
      { href: "/solutions/benzalkonium-chloride-cooling-tower-hvac-biocide", label: "BKC Cooling Tower & HVAC Biocide", context: "Legionella / SRB control dosing" },
      { href: "/solutions/benzalkonium-chloride-poultry-dairy-farm-disinfectant", label: "BKC Poultry & Dairy Disinfectant", context: "Farm biosecurity disinfection" },
      { href: "/solutions/benzalkonium-chloride-veterinary-disinfectant", label: "BKC Veterinary Disinfectant", context: "Clinic and equipment sanitation" },
      { href: "/solutions/benzalkonium-chloride-oilfield-produced-water-biocide", label: "BKC Oilfield Biocide", context: "Produced-water / injection SRB control" },
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
  "triazine-h2s-scavenger-general": {
    relatedProducts: [
      { href: "/product/mea-triazine-78-high-concentration", label: "MEA Triazine 78% (High Concentration)", context: "Premium high-concentration H2S scavenger" },
      { href: "/product/mma-triazine-40-btx-free", label: "MMA Triazine 40% (BTX-Free)", context: "Eco-compliant BTX-free triazine H2S scavenger" },
      { href: "/product/eddm-non-triazine-h2s-scavenger", label: "EDDM Non-Triazine H2S Scavenger", context: "Non-nitrogen non-triazine based H2S scavenger" },
    ],
    relatedPages: [
      { href: "/mea-triazine-vs-mma-triazine", label: "MEA vs MMA Triazine Comparison", context: "Compare MEA and MMA triazine scavengers" },
      { href: "/how-h2s-scavengers-work", label: "How H2S Scavengers Work", context: "Technical guide to H2S scavenging chemistry" },
      { href: "/compare", label: "Product Comparisons", context: "Compare H2S scavenger products side by side" },
      ...DEFAULT_LINKS,
    ],
    industryPages: [
      ...INDUSTRY_LINKS.oilgas,
      ...INDUSTRY_LINKS.waterTreatment,
      ...INDUSTRY_LINKS.metalworking,
      ...INDUSTRY_LINKS.paperMill,
    ],
  },
  "metal-working-fluids": {
    relatedProducts: [
      { href: "/product/triazine-h2s-scavenger-general", label: "Triazine Based H2S Scavenger (General)", context: "General triazine chemical variants" },
      { href: "/product/biocide-oil-gas", label: "Biocide for Oil & Gas Industries", context: "Oilfield biocides and preservatives" },
    ],
    relatedPages: [
      { href: "/how-h2s-scavengers-work", label: "How H2S Scavengers Work", context: "Technical chemistry insights" },
      ...DEFAULT_LINKS,
    ],
    industryPages: [
      ...INDUSTRY_LINKS.metalworking,
      ...INDUSTRY_LINKS.waterTreatment,
    ],
  },
  "biocide-oil-gas": {
    relatedProducts: [
      { href: "/product/triazine-h2s-scavenger-general", label: "Triazine Based H2S Scavenger (General)", context: "General triazine chemical variants" },
      { href: "/product/mea-triazine-78-high-concentration", label: "MEA Triazine 78% (High Concentration)", context: "Premium high-concentration H2S scavenger" },
    ],
    relatedPages: [
      { href: "/how-h2s-scavengers-work", label: "How H2S Scavengers Work", context: "Technical chemistry insights" },
      ...DEFAULT_LINKS,
    ],
    industryPages: [
      ...INDUSTRY_LINKS.oilgas,
      ...INDUSTRY_LINKS.waterTreatment,
    ],
  },
  "mea-triazine-78-high-concentration": {
    relatedProducts: [
      { href: "/product/triazine-h2s-scavenger-general", label: "Triazine Based H2S Scavenger (General)", context: "General triazine chemical variants" },
      { href: "/product/mma-triazine-40-btx-free", label: "MMA Triazine 40% (BTX-Free)", context: "Eco-compliant BTX-free triazine H2S scavenger" },
    ],
    relatedPages: [
      { href: "/mea-triazine-vs-mma-triazine", label: "MEA vs MMA Triazine Comparison", context: "Compare MEA and MMA triazine scavengers" },
      { href: "/how-h2s-scavengers-work", label: "How H2S Scavengers Work", context: "Technical guide to H2S scavenging chemistry" },
      { href: "/compare", label: "Product Comparisons", context: "Compare H2S scavenger products side by side" },
      ...DEFAULT_LINKS,
    ],
    industryPages: [
      ...INDUSTRY_LINKS.oilgas,
      ...INDUSTRY_LINKS.waterTreatment,
    ],
  },
  "mma-triazine-40-btx-free": {
    relatedProducts: [
      { href: "/product/mea-triazine-78-high-concentration", label: "MEA Triazine 78% (High Concentration)", context: "Premium high-concentration H2S scavenger" },
      { href: "/product/triazine-h2s-scavenger-general", label: "Triazine Based H2S Scavenger (General)", context: "General triazine chemical variants" },
    ],
    relatedPages: [
      { href: "/mea-triazine-vs-mma-triazine", label: "MEA vs MMA Triazine Comparison", context: "Compare MEA and MMA triazine scavengers" },
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
