/**
 * Sodium Xylene Sulfonate 40% — SEO content module.
 *
 * Holds slug-specific content used by the product detail page to outrank the
 * top competitors (Dolphin Pharma, Nandadeep, Univar, Scimplify, Atamanchemicals,
 * Pilot Chemical, Lobachemie, Multichem, Whitaker, Elchemy, ASES, Arrochem,
 * Ariix India) for the keyword cluster:
 *  - sodium xylene sulfonate 40
 *  - sodium xylene sulfonate 40 manufacturer in india
 *  - sodium xylene sulfonate 40 supplier in india
 *  - sodium xylene sulfonate 40 exporter in india
 *  - SXS 40 / SXS 40% / SXS exporter / SXS exporter in india
 *  - sodium xylene sulfonate exporter from india
 *  - sodium xylene sulfonate global exporter
 *
 * All numbers and regulatory references are drawn from a competitor crawl on
 * 2026-05-29 (DataIntelo, 24ChemicalResearch, Lobachemie, Atamanchemicals,
 * Scimplify, ECHA, US FDA, US EPA Safer Choice).
 */

export const SXS_40_SLUG = "sodium-xylene-sulfonate-40";

/* ───────────────── Chemical identifiers ───────────────── */

export interface SxsIdentifierRow {
  label: string;
  value: string;
}

export const SXS_40_CHEMICAL_IDENTIFIERS: SxsIdentifierRow[] = [
  { label: "Chemical Name", value: "Sodium Xylene Sulfonate" },
  { label: "IUPAC Name", value: "Sodium 3,4-dimethylbenzenesulfonate" },
  { label: "CAS Number", value: "1300-72-7" },
  { label: "EINECS / EC Number", value: "215-090-9" },
  { label: "MDL Number", value: "MFCD00007513" },
  { label: "InChI Key", value: "QUCDWLYKDRVKMI-UHFFFAOYSA-M" },
  {
    label: "SMILES",
    value: "CC1=C(C=C(C=C1)S(=O)(=O)[O-])C.[Na+]",
  },
  { label: "Molecular Formula", value: "C₈H₉NaO₃S" },
  { label: "Molecular Weight", value: "208.21 g/mol" },
  { label: "HS Code (India)", value: "29041090" },
  { label: "UNII", value: "2OYF82G7KK" },
  { label: "HSDB Reference", value: "HSDB 776" },
  { label: "EPA Pesticide Code", value: "079019" },
];

/* ───────────────── Synonyms / trade names ───────────────── */
/* Used to capture long-tail searches from formulators looking up alternative
 * supplier brand names. */

export const SXS_40_GENERIC_SYNONYMS: string[] = [
  "Sodium xylenesulfonate",
  "Sodium xylene sulphonate",
  "Sodium dimethylbenzenesulfonate",
  "3,4-Xylenesulfonic acid sodium salt",
  "Sodium o-xylene-4-sulfonate",
  "Xylenesulfonic acid sodium salt",
  "Dimethylbenzenesulfonic acid sodium salt",
  "SXS",
  "SXS-40",
  "SXS 40%",
];

export const SXS_40_TRADE_NAMES: string[] = [
  "Naxonate",
  "Naxonate G",
  "Naxonate SX",
  "Stepanate X",
  "Stepanate SXS",
  "Richonate SXS",
  "Cyclophil SXS 30",
  "Conco SXS",
  "Surco SXS",
  "Ultrawet 40SX",
  "Eltesol SX 30",
  "Eltesol SX 93",
  "Witconate SXS",
  "Calsoft SXS 96",
  "Reworyl NXS40",
  "Alkatrope SX-40",
  "Carsosulf SXS",
  "Kemmat SN 18",
  "Spolapon XS NaP",
  "ELSURFAC™-NaXS",
  "GARDILENE SX40AU",
  "Kualimate SXS 40",
  "Zeonol 40",
  "DOLSX-40",
];

/* ───────────────── Pure-form physical properties ───────────────── */
/* Sourced from Atamanchemicals, Lobachemie, ECHA. */

export const SXS_40_PURE_PROPERTIES: SxsIdentifierRow[] = [
  { label: "Melting point (pure)", value: "27 °C" },
  { label: "Boiling point", value: "157 °C (at 760 mm Hg)" },
  { label: "Density (pure)", value: "1.17 g/mL at 25 °C" },
  { label: "Refractive index (n²⁰/D)", value: "1.405 – 1.425 (20 °C, 589 nm)" },
  { label: "Water solubility", value: "≥ 10 g / 100 mL at 20 °C — fully miscible at use concentrations" },
  { label: "pH (1% aqueous solution)", value: "7.0 – 9.0" },
  { label: "LogP (estimated)", value: "1.390" },
  { label: "Charge type", value: "Anionic surfactant / hydrotrope" },
  { label: "Biodegradability", value: "≥ 90% in 28 days (OECD 301B aerobic)" },
  { label: "Shelf life", value: "36 months in sealed packaging at 10–35 °C" },
  {
    label: "Stability",
    value:
      "Stable; combustible; incompatible with strong acids and oxidisers; moisture-sensitive in solid form",
  },
];

/* ───────────────── 7 Industry-specific application blocks ───────────────── */

export interface SxsApplicationBlock {
  heading: string;
  dosageRange: string;
  body: string;
}

export const SXS_40_APPLICATION_BLOCKS: SxsApplicationBlock[] = [
  {
    heading: "Liquid Detergents, Dishwash & Home Care",
    dosageRange: "1–4% w/w",
    body:
      "SXS 40% is the most cost-effective hydrotrope for high-active anionic systems based on LABSA, SLES, alpha-olefin sulphonate and alkyl ether sulphate. At 1.5–3% in a 25–35% active liquid laundry detergent it prevents gel-phase separation, drops the cloud point below 0 °C, lowers viscosity for easier filling and keeps the product transparent through cold-chain transport. In dishwash liquids it pairs with SLES and CAPB to maintain clarity at 30%+ active loading and to absorb electrolyte spikes from sodium chloride. In hard-surface and APC cleaners it is the coupling agent of choice when alkalinity from sodium carbonate or ethanolamines would otherwise destabilise nonionic ethoxylates.",
  },
  {
    heading: "Personal Care: Shampoo, Body Wash & Liquid Soap",
    dosageRange: "1–4% w/w",
    body:
      "In shampoos and body washes (typical SLES 10–14%, CAPB 2–4%) SXS 40% acts as a clarifier and viscosity modifier, keeping the system pourable and crystal-clear at low temperatures while letting fragrance and silicone co-actives stay dispersed. It is preferred over alcohol-based coupling agents for sulphate-reduced and 'mild surfactant' platforms because it does not strip foam volume or skin feel. Also used in foam baths, intimate wash, hand wash and 2-in-1 conditioning shampoo at 0.8–2.5%.",
  },
  {
    heading: "Textile Dyeing, Printing & Leather Processing",
    dosageRange: "0.5–2% on-bath",
    body:
      "Used as a wetting agent and dye-levelling agent in jet, winch and pad-batch dyeing of cotton, polyester and blends. SXS 40% improves dye penetration and reduces patchiness in reactive and disperse dye systems. In leather cleaning and degreasing it emulsifies natural fats and oils without damaging the corium. Also applied as a printing-paste auxiliary to keep pigment-binder systems stable through mechanical agitation.",
  },
  {
    heading: "Paints, Coatings, Inks & Adhesives",
    dosageRange: "0.5–1.5% on-formulation",
    body:
      "Functions as a co-surfactant in latex emulsion paints to improve pigment dispersion and prevent settling. In water-based inks it acts as a flow and film-formation aid, reducing brush marks and edge bleed. In EVA/PVAc adhesives, leather glues and food-packaging adhesives (US FDA 21 CFR 175.105 indirect food-contact) SXS 40% solubilises tackifier and resin components into the aqueous phase.",
  },
  {
    heading: "Agrochemicals: EC, SL, SC & WG Formulations",
    dosageRange: "1–5% on-product",
    body:
      "SXS 40% is widely used in pesticide, herbicide and fungicide concentrates as a wetting agent, co-solvent and adjuvant. In emulsifiable concentrates it improves the solubility of active ingredients with low water solubility; in spray adjuvants it boosts leaf coverage and active-ingredient absorption. The compound is listed under US EPA inert ingredient code 079019 for use in pesticide formulations. SXS itself shows mild fungistatic behaviour and is sometimes used as a carrier for fungicidal actives in seed-treatment formulations.",
  },
  {
    heading: "Oilfield, Drilling Fluids & Enhanced Oil Recovery",
    dosageRange: "0.5–3% on-fluid",
    body:
      "In water-based drilling muds SXS 40% is added as a dispersant and clay-control agent to keep bentonite and viscosifiers stable at high salinity. In well-stimulation and EOR fluids it works as a coupling agent between hydrocarbon and aqueous phases, stabilising surfactant flooding chemistries. It is also used in completion-fluid friction reducers and in produced-water demulsification packages where it modifies interfacial properties without contributing free oil.",
  },
  {
    heading: "Pulp & Paper, Metalworking & Electroplating",
    dosageRange: "0.3–2% on-product",
    body:
      "In pulp & paper processing SXS 40% reduces foam in the wet-end and improves fibre wetting; in equipment-cleaning chemicals it dissolves sticky residues during shutdown washes. In water-based metalworking fluids (cutting, grinding, drawing) it stabilises the lubricant emulsion, improves biocide compatibility and helps disperse machining swarf. In electroplating chemistries — particularly zinc, nickel and chromium — SXS 40% is used as a brightener carrier and tank stabiliser.",
  },
];

/* ───────────────── Comparison table: SXS-40 / SXS-90 / SCS-40 ───────────────── */

export interface SxsComparisonRow {
  parameter: string;
  sxs40: string;
  sxs90: string;
  scs40: string;
}

export const SXS_40_COMPARISON_TABLE: SxsComparisonRow[] = [
  {
    parameter: "CAS Number",
    sxs40: "1300-72-7",
    sxs90: "1300-72-7",
    scs40: "28348-53-0",
  },
  {
    parameter: "Active Matter",
    sxs40: "39 – 41%",
    sxs90: "88 – 92%",
    scs40: "39 – 41%",
  },
  {
    parameter: "Physical Form",
    sxs40: "Pale-yellow clear liquid",
    sxs90: "White free-flow powder",
    scs40: "Pale-yellow clear liquid",
  },
  {
    parameter: "Hydrotropy in alkaline systems",
    sxs40: "High",
    sxs90: "Highest (concentrated)",
    scs40: "Higher",
  },
  {
    parameter: "Cloud-point depression (nonionic)",
    sxs40: "Good",
    sxs90: "Good",
    scs40: "Best",
  },
  {
    parameter: "Cost basis (per kg active)",
    sxs40: "Lowest",
    sxs90: "Higher per kg, lower freight",
    scs40: "Slightly higher than SXS-40",
  },
  {
    parameter: "Best-fit applications",
    sxs40:
      "Liquid detergents, dishwash, personal care, agrochem, oilfield",
    sxs90:
      "Powder detergents, dry blends, low-water exports",
    scs40:
      "Mild personal care, sulfate-reduced systems, premium clarity",
  },
  {
    parameter: "MOQ from Vasudev Chemo Pharma",
    sxs40: "1 MT (export) / 220 kg (domestic)",
    sxs90: "1 MT (export) / 25 kg (domestic)",
    scs40: "1 MT (export) / 220 kg (domestic)",
  },
];

/* ───────────────── Regulatory matrix ───────────────── */

export const SXS_40_REGULATORY_MATRIX: SxsIdentifierRow[] = [
  {
    label: "US FDA",
    value:
      "Cleared for indirect food-contact use under 21 CFR 175.105 (paper packaging adhesives)",
  },
  { label: "US EPA Safer Choice", value: "Listed as a Safer Surfactant (Detergents and Cleaners)" },
  { label: "US EPA Pesticide Programme", value: "Inert ingredient code 079019" },
  {
    label: "Cosmetic Ingredient Review (CIR)",
    value: "Assessed safe at concentrations up to 5% in cosmetic applications",
  },
  {
    label: "EU REACH",
    value:
      "Registered (EC 215-090-9); listed without restriction under EU Regulation 648/2004 (Detergents Regulation)",
  },
  {
    label: "EU CLP / GHS",
    value:
      "GHS07; H315, H319; P264+P265, P280, P305+P351+P338, P337+P317",
  },
  { label: "Japan ENCS", value: "Listed (existing chemical)" },
  { label: "China IECSC", value: "Listed (existing chemical)" },
  {
    label: "India BIS / CDSCO",
    value:
      "Compliant for industrial, personal-care and cosmetic use; supplied with manufacturer's batch COA referencing IS 4956",
  },
  {
    label: "OECD 301B Biodegradability",
    value: "≥ 90% in 28 days — readily biodegradable",
  },
];

/* ───────────────── Global market context ───────────────── */
/* Sourced from DataIntelo (2026) and 24ChemicalResearch market reports. */

export interface SxsMarketStat {
  label: string;
  value: string;
}

export const SXS_40_MARKET_STATS: SxsMarketStat[] = [
  { label: "Global market size (2025)", value: "USD 1.38 billion" },
  { label: "Forecast (2034)", value: "USD 2.21 billion" },
  { label: "CAGR (2026–2034)", value: "5.4%" },
  { label: "Asia-Pacific share", value: "38.2% (≈ USD 527 million)" },
  { label: "Liquid form share", value: "62.4%" },
  { label: "Detergents & cleaners application share", value: "41.7%" },
];

export const SXS_40_MARKET_PARAGRAPH = `The global Sodium Xylene Sulfonate market is valued at approximately USD 1.38 billion in 2025 and is projected to reach USD 2.21 billion by 2034, expanding at a 5.4% CAGR (DataIntelo, 2026). Asia-Pacific leads with a 38.2% share — driven by China, India, Indonesia and Vietnam — and is also the world's primary SXS production hub. India's personal-care segment is growing at ~10% annually and the Indian liquid-detergent industry continues to expand by double digits, anchoring strong domestic and export demand for SXS 40%. Detergents and cleaners account for 41.7% of global SXS consumption, personal care for 24.3%, textile auxiliaries for 13.8%, and industrial / oilfield / agrochemical use for 12.9% — the fastest-growing segment at ~6.5% CAGR. Vasudev Chemo Pharma is positioned as a reliable Indian-origin alternative to global majors Stepan Company, BASF, Clariant, Solvay, Huntsman, Galaxy Surfactants and Pilot Chemical, offering ISO-certified product quality at India-origin pricing for export buyers in the GCC, Africa, Southeast Asia, the Americas and Europe.`;

/* ───────────────── Documents (replaces placeholder) ───────────────── */

export interface SxsDocumentLink {
  fileName: string;
  docType: string;
  fileUrl: string;
  description: string;
  isPrimary?: boolean;
}

export const SXS_40_DOCUMENTS: SxsDocumentLink[] = [
  {
    fileName: "Sodium Xylene Sulfonate 40% — Technical Data Sheet (TDS)",
    docType: "TDS",
    fileUrl: "/contact?product=sodium-xylene-sulfonate-40&doc=tds",
    description: "Active matter, pH, density, sulphate, moisture, cloud point, packaging and storage data.",
    isPrimary: true,
  },
  {
    fileName: "Sodium Xylene Sulfonate 40% — Safety Data Sheet (SDS / MSDS)",
    docType: "SDS",
    fileUrl: "/contact?product=sodium-xylene-sulfonate-40&doc=sds",
    description: "GHS-compliant 16-section SDS covering H315/H319 hazard statements and biodegradability.",
  },
  {
    fileName: "Sodium Xylene Sulfonate 40% — Certificate of Analysis (COA)",
    docType: "COA",
    fileUrl: "/contact?product=sodium-xylene-sulfonate-40&doc=coa",
    description: "Batch-specific COA issued with every shipment. Sample COA available on request.",
  },
  {
    fileName: "Sodium Xylene Sulfonate 40% — Product Brochure",
    docType: "Brochure",
    fileUrl: "/contact?product=sodium-xylene-sulfonate-40&doc=brochure",
    description: "Specifications, applications, packaging and global supply highlights for procurement teams.",
  },
];

/* ───────────────── Shipping & export information ───────────────── */

export interface SxsShippingPort {
  port: string;
  region: string;
  transitWindow: string;
}

export const SXS_40_SHIPPING_PORTS: SxsShippingPort[] = [
  { port: "Mundra (India) → Jebel Ali (UAE) / Dammam (KSA)", region: "GCC & Middle East", transitWindow: "7–10 days" },
  { port: "Mundra (India) → Hamad (Qatar) / Sohar (Oman) / Shuwaikh (Kuwait)", region: "GCC", transitWindow: "8–12 days" },
  { port: "Hazira / JNPT (India) → Cat Lai (Vietnam) / Laem Chabang (Thailand)", region: "Southeast Asia", transitWindow: "12–18 days" },
  { port: "Mundra / Hazira (India) → Houston / NY-NJ (USA)", region: "North America", transitWindow: "26–32 days" },
  { port: "Mundra (India) → Santos / Itapoá (Brazil)", region: "Latin America", transitWindow: "32–38 days" },
  { port: "Mundra (India) → Alexandria (Egypt) / Durban (South Africa)", region: "Africa", transitWindow: "14–22 days" },
  { port: "Mundra / JNPT (India) → Hamburg / Antwerp / Rotterdam", region: "Europe", transitWindow: "22–28 days" },
];

export const SXS_40_INCOTERMS: string[] = [
  "FOB Mundra / Hazira / JNPT",
  "CIF (port-to-port to your destination)",
  "CFR (cost & freight)",
  "DAP / DDP for select GCC and EU destinations",
];

export const SXS_40_EXPORT_DOCS: string[] = [
  "Commercial invoice & packing list",
  "Batch Certificate of Analysis (COA)",
  "GHS-compliant Safety Data Sheet (SDS / MSDS)",
  "Certificate of Origin (CoO) — DGFT / Chamber of Commerce",
  "REACH letter of access (for EU shipments) on request",
  "Halal & Kosher certification on request (food-contact cleaner customers)",
  "Third-party pre-shipment inspection (SGS / BV / Intertek) accepted",
];

/* ───────────────── MOQ context ───────────────── */

export const SXS_40_MOQ_NOTE = `Minimum Order Quantity. Export: 1 MT (one 1,000 L IBC or four 240 L drums). Domestic India: 220 kg (one drum). Lab samples of 500 g – 5 kg available within 48 hours on request for formulation qualification.`;

/* ───────────────── Schema enrichment for ChemicalSubstance / Product ───────────────── */
/* Mirrors the MEA Triazine pattern in mea-triazine-schema-data.ts. */

export const SXS_40_SCHEMA_ENRICHMENT = {
  alternateName: [
    "SXS 40",
    "SXS-40",
    "SXS 40%",
    "Sodium Xylenesulfonate 40%",
    "Sodium Xylene Sulphonate 40%",
    "Sodium Dimethylbenzenesulfonate 40%",
    "Sodium 3,4-dimethylbenzenesulfonate solution 40%",
    "Xylenesulfonic Acid Sodium Salt 40% solution",
    "Hydrotrope SXS 40",
    "Coupling Agent SXS 40",
    "VCP-SXS-40",
  ],
  iupacName: "Sodium 3,4-dimethylbenzenesulfonate",
  inChIKey: "QUCDWLYKDRVKMI-UHFFFAOYSA-M",
  smiles: "CC1=C(C=C(C=C1)S(=O)(=O)[O-])C.[Na+]",
  identifierProperties: [
    { name: "CAS Number", value: "1300-72-7" },
    { name: "EINECS / EC Number", value: "215-090-9" },
    { name: "MDL Number", value: "MFCD00007513" },
    { name: "UNII", value: "2OYF82G7KK" },
    { name: "HSDB Reference", value: "HSDB 776" },
    { name: "EPA Pesticide Code", value: "079019" },
    { name: "HS Code (India)", value: "29041090" },
  ],
  additionalProperty: [
    { name: "Active Matter", value: "39 – 41%" },
    { name: "Molecular Weight", value: "208.21 g/mol" },
    { name: "Charge Type", value: "Anionic surfactant / hydrotrope" },
    { name: "pH (1% solution)", value: "7.0 – 9.0" },
    { name: "Specific Gravity (25 °C)", value: "1.06 – 1.10" },
    { name: "Cloud Point (as supplied)", value: "< 0 °C" },
    { name: "Sulphate Content", value: "< 1.0%" },
    { name: "Biodegradability", value: "≥ 90% in 28 days (OECD 301B)" },
    { name: "Shelf Life", value: "36 months in sealed packaging" },
    { name: "Origin", value: "Manufactured in India" },
  ],
  category: "Surfactant Chemicals — Hydrotropes",
  countryOfOrigin: "IN",
} as const;
