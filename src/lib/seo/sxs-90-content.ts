/**
 * Sodium Xylene Sulfonate 90% — SEO content module.
 *
 * Holds slug-specific content used by the product detail page to outrank the
 * top competitors (Dolphin Pharma, Nandadeep, Univar, Scimplify, Atamanchemicals,
 * Pilot Chemical, Lobachemie, Multichem, Whitaker, Elchemy, ASES, Arrochem,
 * Ariix India) for the keyword cluster:
 *  - sodium xylene sulfonate 90
 *  - sodium xylene sulfonate 90% manufacturer in india
 *  - sodium xylene sulfonate 90% supplier in india
 *  - sodium xylene sulfonate 90% exporter in india
 *  - SXS 90 / SXS 90% / SXS powder / SXS exporter in india
 *  - sodium xylene sulfonate powder exporter from india
 *
 * All numbers and regulatory references are aligned with industry standards and
 * competitor product sheets.
 */

export const SXS_90_SLUG = "sodium-xylene-sulfonate-90";

/* ───────────────── Chemical identifiers ───────────────── */

export interface SxsIdentifierRow {
  label: string;
  value: string;
}

export const SXS_90_CHEMICAL_IDENTIFIERS: SxsIdentifierRow[] = [
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

export const SXS_90_GENERIC_SYNONYMS: string[] = [
  "Sodium xylenesulfonate",
  "Sodium xylene sulphonate",
  "Sodium dimethylbenzenesulfonate",
  "3,4-Xylenesulfonic acid sodium salt",
  "Sodium o-xylene-4-sulfonate",
  "Xylenesulfonic acid sodium salt",
  "Dimethylbenzenesulfonic acid sodium salt",
  "SXS",
  "SXS-90",
  "SXS 90%",
  "SXS Powder",
  "Sodium Xylene Sulfonate Powder",
];

export const SXS_90_TRADE_NAMES: string[] = [
  "Naxonate",
  "Naxonate G",
  "Naxonate SX",
  "Stepanate X",
  "Stepanate SXS",
  "Richonate SXS",
  "Cyclophil SXS 30",
  "Conco SXS",
  "Surco SXS",
  "Eltesol SX 93",
  "Witconate SXS",
  "Calsoft SXS 96",
  "Reworyl NXS90",
  "ELSURFAC™-NaXS",
  "Kualimate SXS 90",
  "DOLSX-90",
];

/* ───────────────── Physical properties ───────────────── */

export const SXS_90_PURE_PROPERTIES: SxsIdentifierRow[] = [
  { label: "Appearance", value: "White to off-white free-flowing powder" },
  { label: "Active Matter", value: "≥ 90.0% (typically 90.0% ± 1%)" },
  { label: "Melting point", value: "27 °C" },
  { label: "Boiling point", value: "157 °C (at 760 mm Hg)" },
  { label: "Bulk Density", value: "0.50 – 0.70 g/mL (tapped: 0.65 – 0.85 g/mL)" },
  { label: "Water solubility", value: "≥ 60 g / 100 mL at 20 °C — highly soluble under agitation" },
  { label: "pH (10% aqueous solution)", value: "8.0 – 11.0" },
  { label: "Moisture Content", value: "≤ 5.0%" },
  { label: "Sulfate Content", value: "≤ 1.0%" },
  { label: "Charge type", value: "Anionic surfactant / hydrotrope" },
  { label: "Biodegradability", value: "≥ 90% in 28 days (OECD 301B aerobic)" },
  { label: "Shelf life", value: "24 months in sealed packaging at 10–35 °C" },
  {
    label: "Stability",
    value: "Stable; hygroscopic (store in dry conditions); incompatible with strong acids and oxidisers",
  },
];

/* ───────────────── 7 Industry-specific application blocks ───────────────── */

export interface SxsApplicationBlock {
  heading: string;
  dosageRange: string;
  body: string;
}

export const SXS_90_APPLICATION_BLOCKS: SxsApplicationBlock[] = [
  {
    heading: "Detergent Powders & Dry Blends",
    dosageRange: "1–4% w/w",
    body:
      "SXS 90% is the preferred hydrotrope for spray-dried and dry-blended laundry detergent powders. It acts as an anti-caking agent during processing, preventing powder agglomeration in storage and transit. In the slurry phase, it reduces viscosity, enabling high-solids spray-drying which boosts manufacturing capacity. Upon user dilution, it speeds up dissolution rates in cold wash cycles.",
  },
  {
    heading: "Solid Cleaning Blocks, Tablets & Syndet Bars",
    dosageRange: "2–8% w/w",
    body:
      "For solid toilet bowl blocks, urinal tabs, automatic dishwasher tablets, and syndet bars, SXS 90% powder provides excellent binding and processing properties. It helps modify the dissolution rate of the blocks, ensuring a controlled release of active surfactants and fragrances. It prevents premature disintegration in high-humidity bathroom environments.",
  },
  {
    heading: "Agrochemical Wettable Powders (WP) & Granules (WG)",
    dosageRange: "1–5% w/w",
    body:
      "SXS 90% serves as a highly active wetting agent and dispersant in dry agrochemical formulations (WP, WG, and soluble powders). It assists in the rapid wetting and dispersion of pesticide, fungicide, and herbicide granules when mixed in the spray tank. It is approved under US EPA inert ingredient code 079019 for pre- and post-harvest applications.",
  },
  {
    heading: "Concentrated Alkaline Cleaners & Paste Degreasers",
    dosageRange: "1–3% w/w",
    body:
      "In dry-mix industrial alkaline cleaners and heavy-duty degreasing pastes, SXS 90% powder couples nonionic surfactants and builders (like silicates, carbonates, and phosphates) into highly concentrated systems. It prevents phase separation when these systems are hydrated, keeping the cleaning mixture clear and active.",
  },
  {
    heading: "Textile Auxiliary & Dye Levelling",
    dosageRange: "0.5–2.0% on-bath",
    body:
      "In textile dyeing and printing processes, the powder form is dissolved to create levelling baths. It assists in uniform dye penetration on cotton, polyester, and wool fibres. Its high active content means formulators can prepare high-solids dye-assist concentrates without shipping unnecessary water.",
  },
  {
    heading: "Oilfield Drilling Fluids & Cementing",
    dosageRange: "0.5–3.0% on-fluid",
    body:
      "SXS 90% powder is used as a mud-thinning agent and friction reducer in water-based drilling muds, especially in remote offshore rigs where shipping water is uneconomical. It stabilizes bentonite clays and polymeric viscosifiers in high-salinity wells, ensuring smooth rheology and drilling performance.",
  },
  {
    heading: "Paper Pulp & Leather Processing",
    dosageRange: "0.3–2.0% on-product",
    body:
      "In the pulp and paper industry, it is added to pulping liquors to aid in lignin and pentosan extraction. In leather processing, it helps solubilise natural fats during the degreasing step, ensuring deep penetration of tanning and fatliquoring agents without compromising the hide structure.",
  },
];

/* ───────────────── Regulatory matrix ───────────────── */

export const SXS_90_REGULATORY_MATRIX: SxsIdentifierRow[] = [
  {
    label: "US FDA",
    value:
      "Cleared for indirect food-contact use under 21 CFR 175.105 (paper packaging adhesives)",
  },
  { label: "US EPA Safer Choice", value: "Listed as a Safer Surfactant (Detergents and Cleaners)" },
  { label: "US EPA Pesticide Programme", value: "Inert ingredient code 079019" },
  {
    label: "Cosmetic Ingredient Review (CIR)",
    value: "Assessed safe at concentrations up to 5% in cosmetic formulations",
  },
  {
    label: "EU REACH",
    value:
      "Registered (EC 215-090-9); listed without restriction under EU Regulation 648/2004 (Detergents Regulation)",
  },
  {
    label: "EU CLP / GHS",
    value:
      "GHS07; H315, H319, H335 (May cause respiratory irritation due to dust); P261, P264, P280, P304+P340, P305+P351+P338, P312",
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

/* ───────────────── Documents ───────────────── */

export interface SxsDocumentLink {
  fileName: string;
  docType: string;
  fileUrl: string;
  description: string;
  isPrimary?: boolean;
}

export const SXS_90_DOCUMENTS: SxsDocumentLink[] = [
  {
    fileName: "Sodium Xylene Sulfonate 90% Powder — Technical Data Sheet (TDS)",
    docType: "TDS",
    fileUrl: "/contact?product=sodium-xylene-sulfonate-90&doc=tds",
    description: "Active matter, pH, bulk density, sulfate, moisture, mesh size, and storage instructions.",
    isPrimary: true,
  },
  {
    fileName: "Sodium Xylene Sulfonate 90% Powder — Safety Data Sheet (SDS / MSDS)",
    docType: "SDS",
    fileUrl: "/contact?product=sodium-xylene-sulfonate-90&doc=sds",
    description: "GHS-compliant 16-section SDS covering H315/H319/H335 hazard statements and dust handling.",
  },
  {
    fileName: "Sodium Xylene Sulfonate 90% Powder — Certificate of Analysis (COA)",
    docType: "COA",
    fileUrl: "/contact?product=sodium-xylene-sulfonate-90&doc=coa",
    description: "Batch-specific COA containing active content, moisture, and impurity analyses.",
  },
  {
    fileName: "Sodium Xylene Sulfonate 90% Powder — Product Brochure",
    docType: "Brochure",
    fileUrl: "/contact?product=sodium-xylene-sulfonate-90&doc=brochure",
    description: "Overview of powder hydrotrope specifications, packaging, and global logistics options.",
  },
];

/* ───────────────── Shipping & export information ───────────────── */

export interface SxsShippingPort {
  port: string;
  region: string;
  transitWindow: string;
}

export const SXS_90_SHIPPING_PORTS: SxsShippingPort[] = [
  { port: "Mundra (India) → Jebel Ali (UAE) / Dammam (KSA)", region: "GCC & Middle East", transitWindow: "7–10 days" },
  { port: "Mundra (India) → Hamad (Qatar) / Sohar (Oman) / Shuwaikh (Kuwait)", region: "GCC", transitWindow: "8–12 days" },
  { port: "Hazira / JNPT (India) → Cat Lai (Vietnam) / Laem Chabang (Thailand)", region: "Southeast Asia", transitWindow: "12–18 days" },
  { port: "Mundra / Hazira (India) → Houston / NY-NJ (USA)", region: "North America", transitWindow: "26–32 days" },
  { port: "Mundra (India) → Santos / Itapoá (Brazil)", region: "Latin America", transitWindow: "32–38 days" },
  { port: "Mundra (India) → Alexandria (Egypt) / Durban (South Africa)", region: "Africa", transitWindow: "14–22 days" },
  { port: "Mundra / JNPT (India) → Hamburg / Antwerp / Rotterdam", region: "Europe", transitWindow: "22–28 days" },
];

export const SXS_90_INCOTERMS: string[] = [
  "FOB Mundra / Hazira / JNPT",
  "CIF (port-to-port to your destination)",
  "CFR (cost & freight)",
  "DAP / DDP for select GCC and EU destinations",
];

export const SXS_90_EXPORT_DOCS: string[] = [
  "Commercial invoice & packing list",
  "Batch Certificate of Analysis (COA)",
  "GHS-compliant Safety Data Sheet (SDS / MSDS)",
  "Certificate of Origin (CoO) — DGFT / Chamber of Commerce",
  "REACH letter of access (for EU shipments) on request",
  "Halal & Kosher certification on request",
  "Third-party pre-shipment inspection (SGS / BV / Intertek) accepted",
];

/* ───────────────── MOQ context ───────────────── */

export const SXS_90_MOQ_NOTE = `Minimum Order Quantity. Export: 1 MT (one 1,000 kg jumbo bag or forty 25 kg bags). Domestic India: 25 kg (one bag). Free lab samples of 500 g – 2 kg available within 48 hours on request for formulation qualification.`;

/* ───────────────── Schema enrichment ───────────────── */

export const SXS_90_SCHEMA_ENRICHMENT = {
  alternateName: [
    "SXS 90",
    "SXS-90",
    "SXS 90%",
    "Sodium Xylenesulfonate 90%",
    "Sodium Xylene Sulphonate 90%",
    "Sodium Dimethylbenzenesulfonate 90%",
    "Sodium Xylene Sulfonate Powder",
    "Sodium Xylene Sulfonate Solid",
    "Hydrotrope SXS 90",
    "VCP-SXS-90",
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
    { name: "Active Matter", value: "≥ 90.0%" },
    { name: "Physical Form", value: "White to off-white free-flowing powder" },
    { name: "Molecular Weight", value: "208.21 g/mol" },
    { name: "Charge Type", value: "Anionic surfactant / hydrotrope" },
    { name: "pH (10% solution)", value: "8.0 – 11.0" },
    { name: "Moisture Content", value: "≤ 5.0%" },
    { name: "Sulfate Content", value: "≤ 1.0%" },
    { name: "Bulk Density", value: "0.50 – 0.70 g/mL" },
    { name: "Biodegradability", value: "≥ 90% in 28 days (OECD 301B)" },
    { name: "Shelf Life", value: "24 months in sealed packaging" },
    { name: "Origin", value: "Manufactured in India" },
  ],
  category: "Surfactant Chemicals — Hydrotropes",
  countryOfOrigin: "IN",
} as const;
