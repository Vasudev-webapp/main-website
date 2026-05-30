/**
 * Benzalkonium Chloride 80% (BKC 80%) — content + schema enrichment.
 *
 * Sister file to src/lib/seo/bkc-50-content.ts. Same active substance
 * (ADBAC, CAS 8001-54-5), same chemical identifiers, same regulatory
 * matrix — but emphasises the export-economical concentrate use case
 * and the head-to-head equivalence with Lonza Bardac® 2280, Stepan BTC®
 * 8358, Nouryon Maquat® 4480-E, and Pilot Lonzabac® 80%.
 *
 * The 80% grade is the highest-volume export product in the global
 * BKC market — disinfectant brands and sanitiser blenders ship it
 * as 80% concentrate from India and dilute on-site to 50%, 25%, or
 * final-use concentrations to minimise freight cost per kilogram of
 * active matter. The keyword + entity-recognition gap on the BKC 80%
 * page is therefore the highest-value optimisation in the BKC project.
 */

export const BKC_80_SLUG = "benzalkonium-chloride-80";

export type BkcIdentifierRow = {
  label: string;
  value: string;
};

/* ───────────────── Chemical identifiers (same as BKC 50%) ────────────────── */

export const BKC_80_CHEMICAL_IDENTIFIERS: BkcIdentifierRow[] = [
  { label: "CAS Number (mixture)", value: "8001-54-5" },
  { label: "Alternate CAS (chain-specific)", value: "63449-41-2, 68391-01-5, 68424-85-1" },
  { label: "EC / EINECS Number", value: "264-151-6 (also 269-919-4)" },
  { label: "Molecular Formula", value: "C₆H₅CH₂N(CH₃)₂RCl (R = C₈–C₁₈ alkyl)" },
  { label: "Molecular Weight (avg, C₁₂–C₁₆)", value: "354.0 g/mol" },
  {
    label: "IUPAC Name",
    value: "Alkyl(C₈–C₁₈)Dimethylbenzylammonium Chloride",
  },
  {
    label: "InChI (BKC C₁₂ representative)",
    value: "InChI=1S/C21H38N.ClH/c1-4-5-6-7-8-9-10-11-12-13-17-22(2,3)18-20-15-14-16-21(19-20)23/h14-16,19H,4-13,17-18H2,1-3H3;1H/q+1/p-1",
  },
  { label: "InChI Key (C₁₂)", value: "JUKPWJGBANNWMW-UHFFFAOYSA-M" },
  {
    label: "SMILES (BKC C₁₂ representative)",
    value: "CCCCCCCCCCCC[N+](C)(C)Cc1ccccc1.[Cl-]",
  },
  { label: "MDL Number", value: "MFCD00012522" },
  { label: "UNII", value: "F5UM2KM3W7 (Benzalkonium Chloride)" },
  { label: "INCI Name (cosmetics)", value: "Benzalkonium Chloride" },
  { label: "COSING Reference", value: "31618" },
  { label: "PubChem CID", value: "15865 (BKC; varies by alkyl chain)" },
  { label: "HS Code (India / Global)", value: "29239000" },
  { label: "Substance Class", value: "Cationic surfactant / Quaternary ammonium biocide (QAC)" },
  { label: "EPA PC Code (US Antimicrobial)", value: "069105" },
];

/* ───────────────── Generic + IUPAC synonyms ──────────────────────────────── */

export const BKC_80_GENERIC_SYNONYMS: string[] = [
  "Alkyl Dimethyl Benzyl Ammonium Chloride",
  "Alkyl(C8-C18) Dimethyl Benzyl Ammonium Chloride",
  "Alkyl Dimethyl Benzyl Ammonium Chloride (ADBAC) 80%",
  "Benzyl Dimethyl Alkyl Ammonium Chloride 80% Concentrate",
  "N-Alkyl-N,N-Dimethyl-N-Benzyl Ammonium Chloride 80%",
  "Benzyl Dimethyl C12-C16 Alkyl Ammonium Chloride 80%",
  "Quaternary Ammonium Compounds, Benzyl-(C12-C16)-alkyldimethyl Chlorides 80%",
  "ADBAC 80% Concentrate",
  "BKC 80% High Active Concentrate",
  "Benzyl(dodecyl)dimethylammonium Chloride 80%",
  "Benzalkonium Chloride 80% Solution",
  "Benzalkoniumchlorid 80%",
  "Cloruro de Benzalconio 80%",
  "Cloreto de Benzalcônio 80%",
  "Chlorure de Benzalkonium 80%",
];

/* ───────────────── Trade-name equivalents (CRITICAL for 80% export) ──────── */

export const BKC_80_TRADE_NAMES: string[] = [
  // Common abbreviations
  "BKC 80",
  "BKC 80%",
  "BAC 80",
  "BZK 80",
  "ADBAC 80",
  "ADBAC 80%",
  // Lonza (PRIMARY equivalence target for export market)
  "Lonza Bardac® 2280",
  "Lonza Bardac® 2280 (80% BKC)",
  "Lonza Hyamine® 80",
  "Lonza Bardac® 205M-80",
  // Stepan (SECONDARY equivalence target)
  "Stepan BTC® 8358",
  "Stepan BTC® 80% concentrate",
  "Stepan BTC® 8248",
  // Nouryon / AkzoNobel (TERTIARY equivalence target)
  "Nouryon Maquat® 4480-E",
  "Nouryon Maquat® 4480E",
  "AkzoNobel Maquat® 4480-E",
  "Nouryon Maquat® LC 12-80",
  // Pilot Chemical
  "Pilot Lonzabac® 80",
  "Pilot Lonzabac® 80%",
  "Pilot Sumquat® 2380",
  // Kao
  "Kao Sanisol® C 80%",
  "Kao Quartamin® 80",
  // BASF / Croda
  "Croda Crodaquat® BAC 80",
  // Reagent grade
  "Sigma-Aldrich BC 12060 (80% BKC)",
  // Vasudev SKU
  "VCP-SFC-0006",
];

/* ───────────────── Pure-substance physical properties ─────────────────────── */

export const BKC_80_PURE_PROPERTIES: BkcIdentifierRow[] = [
  { label: "Form (80% solution)", value: "Clear to pale yellow viscous liquid (gel-like below 15°C)" },
  { label: "Active matter range", value: "80.0 ± 1.0% (vs 50.0 ± 1.0% for BKC 50%)" },
  { label: "Density (80% solution, 25°C)", value: "1.00 – 1.04 g/cm³" },
  { label: "Vapour Pressure", value: "Negligible (non-volatile)" },
  { label: "Water Solubility", value: "Fully miscible (gentle warming may help)" },
  { label: "Refractive Index (25°C)", value: "1.450 – 1.480" },
  { label: "Critical gel-formation temperature", value: "Approximately 15°C — store above 15°C to prevent gelation" },
  { label: "Surface Tension (0.1% aq., 25°C)", value: "30 – 40 dyn/cm" },
  { label: "Foam Stability", value: "High (typical cationic surfactant)" },
  { label: "Storage", value: "Sealed HDPE drums, 15 – 40°C, away from direct sunlight (heated storage in cold climates)" },
  { label: "Shipping freight ratio", value: "1.6× more active matter per kg shipped vs BKC 50% (~37% freight cost saving on a per-kg-active basis)" },
];

/* ───────────────── Application blocks (concentrate / blender focus) ──────── */

export type BkcApplicationBlock = {
  heading: string;
  paragraph: string;
  bullets: string[];
};

export const BKC_80_APPLICATION_BLOCKS: BkcApplicationBlock[] = [
  {
    heading: "Concentrated raw material for disinfectant brands and sanitiser blenders",
    paragraph:
      "BKC 80% is the highest-volume export grade purchased by global disinfectant brands, sanitiser blenders, and EPA-registered formulators. Buyers procure 80% concentrate from India and dilute on-site to 50%, 25%, 10%, or final-use concentrations — saving 37% freight cost per kilogram of active matter shipped vs BKC 50%. The 80% concentrate is functionally equivalent to Lonza Bardac® 2280, Stepan BTC® 8358, Nouryon Maquat® 4480-E, and Pilot Lonzabac® 80% reference grades.",
    bullets: [
      "Dilution: 62.5 kg BKC 80% + 37.5 kg demineralised water → 100 kg BKC 50% (mass ratio)",
      "Final-use disinfectant (0.1% – 0.4% active): 1.25 – 5.0 g BKC 80% per litre water",
      "Drop-in replacement for Lonza Bardac® 2280 / Stepan BTC® 8358 in EPA-registered formulations",
      "Vasudev Chemo Pharma provides spec-comparison documents and trial samples (1 – 5 kg) for cross-qualification",
      "Customers cross-qualify via parallel formulation runs, EN 1276 / EN 14476 efficacy testing, and stability studies",
    ],
  },
  {
    heading: "Cosmetic preservative concentrate for INCI-grade formulators",
    paragraph:
      "BKC 80% Cosmetic Grade is purchased in concentrate form by major cosmetic ingredient formulators and personal-care brands who dilute to use concentration in finished products (max 0.1% active in rinse-off, 0.05% in leave-on per Cosmetics Europe Annex V). The 80% concentrate is supplied with INCI declaration ('Benzalkonium Chloride'), CTFA compliance documentation, GMP certificate, and Halal certificate (on request).",
    bullets: [
      "Cosmetic-finished-product use level: 0.1% active (rinse-off) → use 0.125% BKC 80% in formulation",
      "Cosmetic-finished-product use level: 0.05% active (leave-on) → use 0.0625% BKC 80% in formulation",
      "Compatible with cationic conditioning polymers (Polyquat-7, Polyquat-10) and cationic emulsifiers",
      "Cosmetic Grade BKC 80% from Vasudev Chemo Pharma is CTFA-compliant and GMP-certified",
    ],
  },
  {
    heading: "Pool, spa, and water-treatment chemical company concentrate",
    paragraph:
      "BKC 80% is the standard concentrate grade for pool algicide, spa sanitiser, and cooling-tower biocide manufacturers worldwide. Buyers purchase 80% concentrate, blend with stabilisers, fragrances, and dyes, and bottle as ready-to-use 10% – 25% pool algicides for retail. Cooling-tower biocide formulators dilute 80% concentrate to 25% – 50% slug-dose products for industrial use.",
    bullets: [
      "Pool algicide concentrate: typically 10% – 20% BKC 80% in finished formulation",
      "Cooling-tower biocide slug-dose product: typically 20% – 50% BKC 80% in finished formulation",
      "HVAC chiller biocide: 5% – 25% BKC 80% in finished formulation",
      "Compatible with most pool / cooling-tower programs (no anionic incompatibility issues at concentrate stage)",
    ],
  },
  {
    heading: "Pharmaceutical preservative concentrate for OEM formulators",
    paragraph:
      "BKC 80% is purchased in concentrate form by pharmaceutical OEMs producing eye drops, nasal sprays, contact-lens solutions, skin antiseptics, and topical antimicrobial formulations. Buyers dilute to 0.001% – 0.01% active in finished pharmaceutical product per USP <51> antimicrobial effectiveness testing. Vasudev Chemo Pharma's Disinfectant Grade BKC 80% includes complete COA documentation suitable for pharmaceutical regulatory submissions.",
    bullets: [
      "Eye drops / nasal spray preservative: 0.001% – 0.01% active in finished product",
      "Skin antiseptic / topical: 0.01% – 0.1% active in finished product",
      "Contact-lens solutions: 0.001% – 0.005% active (compatible with pharma USP / BP / EP monographs)",
      "GMP-certified BKC 80% available for pharmaceutical buyers — full compliance documentation provided",
    ],
  },
  {
    heading: "Agricultural / veterinary disinfectant concentrate for biosecurity products",
    paragraph:
      "Veterinary and agricultural disinfectant brands purchase BKC 80% concentrate for blending into farm-biosecurity products — poultry house pre-stocking decontamination concentrates, dairy farm udder hygiene preparations, hatchery foot-bath products, greenhouse soil-bed sterilisation aids, and equipment sanitisers for livestock biosecurity zones.",
    bullets: [
      "Poultry / dairy disinfectant concentrate: typically 30% – 60% BKC 80% in finished formulation",
      "Foot-bath disinfectant product: 25% – 50% BKC 80% in finished formulation (diluted by end-user to 0.5% – 1% active)",
      "Hatchery sanitisation: 20% – 40% BKC 80% in finished formulation",
      "Wood preservation pressure-treatment carrier: 10% – 25% BKC 80% in carrier solution",
    ],
  },
  {
    heading: "Industrial cleaning, oilfield biocide, and textile antimicrobial concentrate",
    paragraph:
      "BKC 80% concentrate is blended into industrial / institutional (I&I) cleaner concentrates, oilfield biocide for produced-water injection systems and microbial-control programs in upstream oil and gas, and textile antimicrobial finishing systems for hospital scrubs, sportswear, and military uniforms.",
    bullets: [
      "I&I cleaner concentrate: 5% – 25% BKC 80% blended with nonionic surfactants and chelants",
      "Oilfield biocide: typically 10% – 40% BKC 80% in finished injection product (dosed at 50 – 200 ppm in produced water)",
      "Textile antimicrobial finish concentrate: 10% – 50% BKC 80% in pad-bath formulation",
      "Phase-transfer catalyst applications: typically 1% – 10% BKC 80% as the catalyst",
    ],
  },
];

/* ───────────────── Dilution calculator data ──────────────────────────────── */

export type BkcDilutionRow = {
  targetConcentration: string;
  bkc80Mass: string;
  waterMass: string;
  notes: string;
};

export const BKC_80_DILUTION_TABLE: BkcDilutionRow[] = [
  {
    targetConcentration: "BKC 50% (50% active)",
    bkc80Mass: "62.5 kg",
    waterMass: "37.5 kg",
    notes: "Yields 100 kg of BKC 50% (matches Lonza Bardac® 22 / Stepan BTC® 824 grade)",
  },
  {
    targetConcentration: "BKC 25% (25% active)",
    bkc80Mass: "31.25 kg",
    waterMass: "68.75 kg",
    notes: "Common intermediate dilution for sanitiser blenders",
  },
  {
    targetConcentration: "BKC 10% (10% active)",
    bkc80Mass: "12.5 kg",
    waterMass: "87.5 kg",
    notes: "Ready-to-use hospital concentrate for end-user dilution",
  },
  {
    targetConcentration: "Hospital surface disinfectant (0.4% active = 4,000 ppm)",
    bkc80Mass: "5.0 g",
    waterMass: "1,000 mL water",
    notes: "Direct dilution from BKC 80% — typical hospital hard-surface use",
  },
  {
    targetConcentration: "Routine cleaning sanitiser (0.2% active = 2,000 ppm)",
    bkc80Mass: "2.5 g",
    waterMass: "1,000 mL water",
    notes: "Direct dilution — common all-purpose disinfectant concentration",
  },
  {
    targetConcentration: "Food-contact no-rinse sanitiser (200 ppm active)",
    bkc80Mass: "0.25 g",
    waterMass: "1,000 mL water",
    notes: "FDA 21 CFR 178.1010 — DO NOT exceed 200 ppm for no-rinse food contact",
  },
  {
    targetConcentration: "Pool algicide preventive (10 ppm active)",
    bkc80Mass: "12.5 g",
    waterMass: "1,000 L pool water",
    notes: "Weekly preventive dose for residential pool",
  },
];

/* ───────────────── Comparison table (BKC 80 vs BKC 50, vs key brand SKUs) ── */

export type BkcCompareRow = {
  attribute: string;
  bkc80Vasudev: string;
  bkc50: string;
  lonzaBardac2280: string;
  stepanBTC8358: string;
};

export const BKC_80_COMPARISON_TABLE: BkcCompareRow[] = [
  {
    attribute: "Active matter",
    bkc80Vasudev: "80 ± 1%",
    bkc50: "50 ± 1%",
    lonzaBardac2280: "80% (typical)",
    stepanBTC8358: "80% (typical)",
  },
  {
    attribute: "Active substance",
    bkc80Vasudev: "ADBAC (CAS 8001-54-5)",
    bkc50: "ADBAC (CAS 8001-54-5)",
    lonzaBardac2280: "ADBAC (CAS 8001-54-5)",
    stepanBTC8358: "ADBAC (CAS 8001-54-5)",
  },
  {
    attribute: "Alkyl distribution (C₁₂/C₁₄/C₁₆)",
    bkc80Vasudev: "40-50% / 30-40% / 10-20%",
    bkc50: "40-50% / 30-40% / 10-20%",
    lonzaBardac2280: "Typically 50%/30%/15% (varies by lot)",
    stepanBTC8358: "Typically 50%/30%/15% (varies by lot)",
  },
  {
    attribute: "Country of origin",
    bkc80Vasudev: "India (Gujarat)",
    bkc50: "India (Gujarat)",
    lonzaBardac2280: "Switzerland / USA (varies)",
    stepanBTC8358: "USA",
  },
  {
    attribute: "Certifications",
    bkc80Vasudev: "ISO 9001:2015 + GMP + Halal",
    bkc50: "ISO 9001:2015 + GMP + Halal",
    lonzaBardac2280: "ISO 9001 + GMP",
    stepanBTC8358: "ISO 9001 + GMP",
  },
  {
    attribute: "MOQ",
    bkc80Vasudev: "1 MT",
    bkc50: "1 MT",
    lonzaBardac2280: "Typically 1 – 5 MT",
    stepanBTC8358: "Typically 1 – 5 MT",
  },
  {
    attribute: "Packaging",
    bkc80Vasudev: "50/200 kg drums, 1000 kg IBC, ISO tank",
    bkc50: "50/200 kg drums, 1000 kg IBC, ISO tank",
    lonzaBardac2280: "200 kg drums, IBC",
    stepanBTC8358: "200 kg drums, IBC, bulk tanker",
  },
  {
    attribute: "Storage",
    bkc80Vasudev: "15 – 40°C (gel below 15°C)",
    bkc50: "5 – 40°C",
    lonzaBardac2280: "15 – 40°C (gel below 15°C)",
    stepanBTC8358: "15 – 40°C (gel below 15°C)",
  },
  {
    attribute: "Price competitiveness",
    bkc80Vasudev: "Direct-from-manufacturer pricing (India FOB)",
    bkc50: "Direct-from-manufacturer pricing",
    lonzaBardac2280: "Premium-tier (Western IP brand)",
    stepanBTC8358: "Premium-tier (Western IP brand)",
  },
];

/* ───────────────── Regulatory & quality matrix (E-E-A-T signal) ─────────── */

export const BKC_80_REGULATORY_MATRIX: BkcIdentifierRow[] = [
  {
    label: "US EPA (Antimicrobial)",
    value: "BKC is registered active substance under PC Code 069105. BKC 80% supplied as raw material for EPA-registered formulators producing finished disinfectant / sanitiser products. Listed in EPA List N: Disinfectants for Use Against SARS-CoV-2 in numerous BKC-based formulations.",
  },
  {
    label: "US FDA (Food Contact)",
    value: "BKC is approved as no-rinse food-contact sanitising solution under 21 CFR 178.1010 at maximum 200 ppm active quat. BKC 80% supplied to formulators producing finished food-contact sanitiser concentrates.",
  },
  {
    label: "EU Biocidal Products Regulation (BPR)",
    value: "BKC is approved active substance under product types PT 1, PT 2, PT 3, PT 4. Vasudev Chemo Pharma's BKC 80% supplied as raw material for EU BPR-compliant biocide formulators.",
  },
  {
    label: "REACH (EU)",
    value: "Pre-registered (CAS 8001-54-5). Full registration available through EU representatives.",
  },
  {
    label: "Pharmacopoeia",
    value: "USP, NF, BP, EP (Ph. Eur.), IP, JP — all monograph specifications met by Disinfectant Grade BKC 80%.",
  },
  {
    label: "Cosmetic Regulation (Cosmetics Europe / FDA)",
    value: "BKC is approved cosmetic preservative under INCI 'Benzalkonium Chloride'. Cosmetic Grade BKC 80% supplied to cosmetic ingredient formulators for dilution to use concentration.",
  },
  {
    label: "GHS / CLP",
    value: "GHS05 (Corrosive), GHS07 (Irritant), GHS09 (Aquatic toxicity). H302, H314, H318, H400, H410. Signal word: Danger. The 80% grade is more aggressive than the 50% grade — handle with full PPE.",
  },
  { label: "ISO 9001:2015", value: "Manufactured under ISO 9001:2015 QMS at Vasudev Chemo Pharma's Gujarat facility." },
  { label: "GMP", value: "Manufactured under GMP for cosmetic and pharmaceutical-grade BKC 80%. Full compliance documentation provided on request." },
  { label: "Halal", value: "Halal certified — required for export to UAE, Saudi Arabia, Malaysia, Indonesia. Certificate provided with each shipment on request." },
  { label: "Kosher", value: "Available on request for US/Israeli food-contact sanitisation buyers." },
];

/* ───────────────── Schema enrichment for ProductSchema.tsx ──────────────── */

export const BKC_80_SCHEMA_ENRICHMENT = {
  alternateName: [
    ...BKC_80_GENERIC_SYNONYMS,
    ...BKC_80_TRADE_NAMES,
    "BKC 80",
    "BKC 80%",
    "BKC 80 Concentrate",
    "ADBAC 80%",
    "High Active BKC Concentrate",
    "Disinfectant Grade BKC 80",
    "Cosmetic Grade BKC 80",
    "Lonza Bardac 2280 alternative",
    "Stepan BTC 8358 alternative",
    "Nouryon Maquat 4480-E alternative",
  ],
  iupacName: "Alkyl(C8-C18)Dimethylbenzylammonium Chloride",
  inChIKey: "JUKPWJGBANNWMW-UHFFFAOYSA-M",
  smiles: "CCCCCCCCCCCC[N+](C)(C)Cc1ccccc1.[Cl-]",
  identifierProperties: [
    { name: "CAS Number (mixture)", value: "8001-54-5" },
    { name: "Alternate CAS (chain-specific)", value: "63449-41-2, 68391-01-5, 68424-85-1" },
    { name: "EC / EINECS Number", value: "264-151-6, 269-919-4" },
    { name: "MDL Number", value: "MFCD00012522" },
    { name: "UNII", value: "F5UM2KM3W7" },
    { name: "INCI Name (cosmetic)", value: "Benzalkonium Chloride" },
    { name: "EPA PC Code", value: "069105" },
    { name: "HS Code (Global)", value: "29239000" },
  ],
  additionalProperty: [
    { name: "Active Matter", value: "80 ± 1%" },
    { name: "Molecular Weight (avg, C₁₂–C₁₆)", value: "354.0 g/mol" },
    { name: "Charge Type", value: "Cationic surfactant / Quaternary ammonium biocide" },
    { name: "pH (10% solution, 25°C)", value: "6.0 – 8.0" },
    { name: "Specific Gravity (25°C)", value: "1.00 – 1.04" },
    { name: "Colour (APHA)", value: "≤ 80" },
    { name: "Free Amine", value: "≤ 2.0%" },
    { name: "Alkyl Distribution (C₁₂/C₁₄/C₁₆)", value: "40-50% / 30-40% / 10-20%" },
    { name: "Heavy Metals (as Pb)", value: "≤ 10 ppm" },
    { name: "Flash Point", value: "> 100°C (closed cup)" },
    { name: "Storage Temperature", value: "15 – 40°C (gel below 15°C)" },
    { name: "Shelf Life", value: "24 months in sealed HDPE drums" },
    { name: "Freight saving vs BKC 50%", value: "~37% lower per kg active matter shipped" },
    { name: "Origin", value: "Manufactured in India" },
    { name: "Manufacturing Standards", value: "ISO 9001:2015 + GMP + Halal" },
  ],
  category: "Surfactant Chemicals — Quaternary Ammonium Compounds (Quats) — Concentrate",
  countryOfOrigin: "IN",
} as const;
