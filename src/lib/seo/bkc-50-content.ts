/**
 * Benzalkonium Chloride 50% (BKC 50%) — content + schema enrichment.
 *
 * Mirrors src/lib/seo/scs-40-content.ts. Centralises chemical identifiers
 * (CAS, EC, InChI, SMILES, MDL, UNII, INCI), generic + IUPAC synonyms,
 * trade-name equivalents (Lonza Bardac®, Stepan BTC®, Nouryon Maquat®,
 * Pilot Lonzabac®, Kao Sanisol®, Sigma-Aldrich), pure-substance physical
 * properties, application blocks, comparison data, regulatory matrix,
 * and the JSON-LD enrichment payload consumed by ProductSchema.tsx.
 *
 * Why this file exists: BKC is one of the most contested keyword markets
 * in the global biocide / disinfectant industry. Competitor reference
 * pages (Lonza, Stepan, Nouryon/AkzoNobel, Pilot Chemical, Kao, Croda,
 * BASF, Sigma-Aldrich, ChemicalBook, Sigma, Dishman, etc.) all expose:
 *   - 50+ alternate trade names + IUPAC synonyms (incl. INCI for cosmetics)
 *   - InChI / InChIKey / SMILES / EINECS / EC / MDL / UNII identifiers
 *   - Pure-substance physical properties
 *   - EPA / EU BPR / FDA / USP / BP / EP / IP regulatory references
 * This sidecar exposes the same depth so Google + AI engines map the
 * Vasudev Chemo Pharma SKU to the broader entity set and surface us for
 * "Lonza Bardac 22 alternative", "BKC manufacturer India", "ADBAC 50%
 * supplier", "buy benzalkonium chloride USP grade" and similar queries.
 */

export const BKC_50_SLUG = "benzalkonium-chloride-50";

export type BkcIdentifierRow = {
  label: string;
  value: string;
};

/* ───────────────── Chemical identifiers (rendered on-page + in JSON-LD) ─── */

export const BKC_50_CHEMICAL_IDENTIFIERS: BkcIdentifierRow[] = [
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

export const BKC_50_GENERIC_SYNONYMS: string[] = [
  "Alkyl Dimethyl Benzyl Ammonium Chloride",
  "Alkyl(C8-C18) Dimethyl Benzyl Ammonium Chloride",
  "Alkyl Dimethyl Benzyl Ammonium Chloride (ADBAC)",
  "Benzyl Dimethyl Alkyl Ammonium Chloride",
  "N-Alkyl-N,N-Dimethyl-N-Benzyl Ammonium Chloride",
  "Benzyl Dimethyl C12-C16 Alkyl Ammonium Chloride",
  "Alkyl Benzyldimethylammonium Chloride",
  "Alkyldimethylbenzylammonium Chloride",
  "Quaternary Ammonium Compound, Benzyl-C8-18-Alkyldimethyl, Chloride",
  "Quaternary Ammonium Compounds, Benzyl-(C12-C16)-alkyldimethyl Chlorides",
  "Benzene methanaminium, alkyl-dimethyl-, chloride",
  "Benzenemethanaminium, N-alkyl-N,N-dimethyl-, chloride",
  "Benzyldimethyl(C8-C18)alkylammonium Chloride",
  "Benzyl(dodecyl)dimethylammonium Chloride",
  "Benzyl(tetradecyl)dimethylammonium Chloride",
  "Benzyl(hexadecyl)dimethylammonium Chloride",
  "Benzalkoniumchlorid",
  "Cloruro de Benzalconio",
  "Cloreto de Benzalcônio",
  "Chlorure de Benzalkonium",
  "Benzalkoniya Khlorid",
];

/* ───────────────── Common abbreviations + trade-name equivalents ─────────── */

export const BKC_50_TRADE_NAMES: string[] = [
  // Common abbreviations
  "BKC",
  "BAC",
  "BZK",
  "BZC",
  "ADBAC",
  "BAK",
  "BACL",
  "Quat-12",
  "Quat-14",
  "Quat-16",
  // Lonza
  "Lonza Bardac® 22",
  "Lonza Bardac® 22 (50% BKC)",
  "Lonza Hyamine® 3500",
  "Lonza Bardac® 205M",
  // Stepan
  "Stepan BTC® 824",
  "Stepan BTC® 50NF",
  "Stepan BTC® 818",
  // Nouryon (formerly AkzoNobel)
  "Nouryon Maquat® MC 1412",
  "AkzoNobel Maquat® MC 1412",
  "Nouryon Maquat® LC 12-50",
  // Pilot Chemical
  "Pilot Lonzabac® 50",
  "Pilot Sumquat® 2350",
  // Kao
  "Kao Sanisol® C",
  "Kao Quartamin® 50",
  // BASF / Croda / Solvay
  "BASF Cetrimonium Quat (BKC variant)",
  "Solvay Mirapol® Surf-S",
  "Croda Crodaquat® BAC",
  // Reagent grade
  "Sigma-Aldrich BC 234245",
  "Sigma-Aldrich Benzalkonium Chloride 50% (12060)",
  // Pharmacopoeia / monograph references
  "Benzalkonium Chloride USP",
  "Benzalkonium Chloride NF",
  "Benzalkonium Chloride BP",
  "Benzalkonium Chloride EP / Ph. Eur.",
  "Benzalkonium Chloride IP",
  "Benzalkonium Chloride JP",
  // Vasudev SKU
  "VCP-SFC-0005",
];

/* ───────────────── Pure-substance physical properties ─────────────────────── */

export const BKC_50_PURE_PROPERTIES: BkcIdentifierRow[] = [
  { label: "Form (pure / solid)", value: "Pale yellow waxy solid (above 50°C); typically supplied as aqueous solution" },
  { label: "Melting Point", value: "≈ 50 – 60°C (varies by alkyl distribution)" },
  { label: "Boiling Point", value: "Decomposes before boiling" },
  { label: "Density (50% solution, 25°C)", value: "0.96 – 1.00 g/cm³" },
  { label: "Vapour Pressure", value: "Negligible (non-volatile)" },
  { label: "Water Solubility", value: "Fully miscible (highly soluble)" },
  { label: "pKa", value: "Quaternary salt — not protonated/deprotonated; permanently positively charged" },
  { label: "Log Pow (octanol/water)", value: "~3.0 – 4.0 (depends on alkyl chain length; surface-active)" },
  { label: "CMC (Critical Micelle Concentration)", value: "≈ 7.5 × 10⁻⁴ M (BKC C₁₂); varies by chain length" },
  { label: "Surface Tension (0.1% aq., 25°C)", value: "30 – 40 dyn/cm" },
  { label: "Foam Stability", value: "High (typical cationic surfactant)" },
  { label: "Storage", value: "Sealed HDPE drums, 5 – 40°C, away from direct sunlight" },
];

/* ───────────────── Application blocks ────────────────────────────────────── */

export type BkcApplicationBlock = {
  heading: string;
  paragraph: string;
  bullets: string[];
};

export const BKC_50_APPLICATION_BLOCKS: BkcApplicationBlock[] = [
  {
    heading: "Hospital, clinical, and pharmaceutical surface disinfection",
    paragraph:
      "BKC 50% is the global formulation reference standard for hospital surface disinfectants. The cationic ADBAC active binds to negatively charged microbial membranes, disrupts the lipid bilayer, and inactivates gram-positive and gram-negative bacteria, fungi, yeasts, and enveloped viruses (including coronaviruses, influenza, and HIV). It is the active substance in most quaternary-ammonium-based hospital surface sanitisers worldwide and is included in the US EPA's List N of disinfectants for use against SARS-CoV-2.",
    bullets: [
      "Typical in-use concentration: 0.1% – 0.4% active quat (1,000 – 4,000 ppm) for hospital hard-surface disinfection",
      "Validated efficacy under EN 1276 (bactericidal), EN 1650 (fungicidal), EN 14476 (virucidal)",
      "Compatible with nonionic surfactants (alcohol ethoxylates, APGs) and amphoteric betaines for cleaning-disinfectant blends",
      "Effective at room temperature; no rinse-off required for non-food-contact surfaces (per local regulations)",
      "Used as active in EPA-registered hospital, healthcare, and clinical surface sanitisers worldwide",
    ],
  },
  {
    heading: "Food and beverage industry CIP / COP sanitation",
    paragraph:
      "BKC is approved as a no-rinse food-contact surface sanitiser under FDA 21 CFR 178.1010 at concentrations up to 200 ppm active quat. Used in dairy plants, breweries, soft-drink bottlers, meat and poultry processors, and food packaging facilities for clean-in-place (CIP) and clean-out-of-place (COP) sanitation cycles. Effective against Listeria monocytogenes, Salmonella, E. coli O157:H7, and Pseudomonas spp. — the main pathogens of concern in food processing.",
    bullets: [
      "Maximum 200 ppm active quat for no-rinse food-contact surfaces (FDA 21 CFR 178.1010)",
      "1,000 – 2,000 ppm typical for non-food-contact zones (drains, walls, equipment exteriors)",
      "Compatible with alkaline CIP cycles (after caustic + acid steps) at 60 – 70°C",
      "Validated efficacy against ISO 6888 (Staph), ISO 16649 (E. coli), ISO 11290 (Listeria)",
    ],
  },
  {
    heading: "Cosmetic and pharmaceutical preservation",
    paragraph:
      "BKC is a CTFA / Cosmetics Europe approved cosmetic preservative listed under INCI name 'Benzalkonium Chloride'. Used in hair conditioners, mouthwashes, shampoos, leave-on personal-care products, and as a pharmaceutical preservative in eye drops, nasal sprays, contact-lens solutions, and topical antiseptics. Also acts as a positively-charged conditioning agent in 2-in-1 shampoo systems.",
    bullets: [
      "Maximum cosmetic use: 0.1% active in rinse-off products, 0.05% in leave-on products (Cosmetics Europe Annex V)",
      "Pharmaceutical preservative: 0.001 – 0.01% in eye drops, nasal sprays (USP <51> antimicrobial effectiveness)",
      "Compatible with cationic conditioning polymers (Polyquat-7, Polyquat-10, behentrimonium chloride)",
      "Cosmetic Grade BKC 50% from Vasudev Chemo Pharma is CTFA-compliant for personal-care formulations",
    ],
  },
  {
    heading: "Swimming pool, spa, and recreational water sanitation",
    paragraph:
      "BKC 50% is widely used as an algicide and supplementary sanitiser in residential and commercial swimming pools, spas, fountains, and decorative water features. It works synergistically with chlorine, bromine, and salt-chlorinated systems — especially at elevated pH where chlorine alone is less effective. BKC is non-foaming at recommended pool concentrations and does not affect pH significantly.",
    bullets: [
      "Typical preventive dose: 5 – 15 ppm active quat (10 – 30 mL of BKC 50% per 1,000 L pool water) weekly",
      "Effective against Pseudomonas, green / black algae, and chlorine-resistant biofilms in pool surfaces",
      "Compatible with all standard pool sanitisation systems (chlorine, bromine, salt-water, UV, ozone)",
      "Used as the active ingredient in most commercial pool algicides and shock treatments worldwide",
    ],
  },
  {
    heading: "Cooling tower, HVAC, and industrial water-treatment biocide",
    paragraph:
      "BKC 50% controls Legionella pneumophila, sulphate-reducing bacteria (SRB), and biofilm in industrial cooling towers, HVAC chillers, and recirculating water systems. Slug-dose or shock-treatment programs at 50 – 200 ppm active quat are widely used in hospital HVAC systems, datacenter chillers, food-plant cooling, and oilfield produced-water injection systems. Biofilm-disrupting activity also helps preserve heat-exchanger performance and reduces microbially-influenced corrosion (MIC).",
    bullets: [
      "Cooling-tower slug dose: 50 – 100 ppm active quat for routine biological control",
      "Shock dose: 100 – 200 ppm for biofilm disruption and Legionella control (HSE ACOP L8)",
      "Effective against gram-negative bacteria (Pseudomonas, Legionella, Enterobacter)",
      "Compatible with most cooling-water programs (phosphonate / polyacrylate dispersants)",
    ],
  },
  {
    heading: "Agricultural, veterinary, and wood-preservation applications",
    paragraph:
      "BKC 50% is the cornerstone biocide active in agricultural and veterinary disinfection — poultry house pre-stocking decontamination, dairy farm udder hygiene, hatchery foot-baths, greenhouse soil-bed sterilisation, and equipment sanitisation. Wood preservation applications include surface-mildew control, log preservation, and outdoor furniture treatment against fungal decay. Also widely used as a textile antimicrobial finish on hospital scrubs, sportswear, and military uniforms.",
    bullets: [
      "Poultry / dairy disinfection: 0.2% – 0.5% active quat (1:100 to 1:250 dilution from 50%)",
      "Foot-bath disinfection: 0.5% – 1.0% active quat for biosecurity zones",
      "Wood preservation: 0.5% – 2% active quat applied as surface-spray or pressure-treatment carrier",
      "Textile antimicrobial finish: 0.05% – 0.2% on dry fabric weight after pad-bath application",
    ],
  },
];

/* ───────────────── Comparison table (vs BKC 80%, DDAC, CTAB) ─────────────── */

export type BkcComparisonRow = {
  attribute: string;
  bkc50: string;
  bkc80: string;
  ddac: string;
  ctab: string;
};

export const BKC_50_COMPARISON_TABLE: BkcComparisonRow[] = [
  {
    attribute: "Active substance",
    bkc50: "Alkyl Dimethyl Benzyl Ammonium Chloride (ADBAC)",
    bkc80: "Same as BKC 50% (ADBAC)",
    ddac: "Didecyl Dimethyl Ammonium Chloride",
    ctab: "Cetyl Trimethyl Ammonium Bromide",
  },
  {
    attribute: "CAS Number",
    bkc50: "8001-54-5",
    bkc80: "8001-54-5 (same chemistry)",
    ddac: "7173-51-5",
    ctab: "57-09-0",
  },
  {
    attribute: "Active matter",
    bkc50: "50 ± 1%",
    bkc80: "80 ± 1%",
    ddac: "Typically 50 – 80% solution",
    ctab: "Typically 99% solid (technical grade)",
  },
  {
    attribute: "Form",
    bkc50: "Clear pale-yellow liquid",
    bkc80: "Pale-yellow viscous liquid (gel below 15°C)",
    ddac: "Clear amber liquid",
    ctab: "White crystalline powder",
  },
  {
    attribute: "Best for",
    bkc50: "Direct formulation; ready-to-use disinfectant",
    bkc80: "Bulk export, on-site dilution, freight-economic",
    ddac: "Hard-water tolerance, alkaline cleaners",
    ctab: "Lab use, electrophoresis, hair-care surfactant",
  },
  {
    attribute: "Spectrum vs viruses",
    bkc50: "Broad — enveloped viruses (coronavirus, flu, HIV)",
    bkc80: "Same as BKC 50%",
    ddac: "Broad spectrum — equivalent to BKC",
    ctab: "Limited — primarily bactericidal",
  },
  {
    attribute: "EPA registration",
    bkc50: "PC Code 069105 — widely registered",
    bkc80: "PC Code 069105 — same active",
    ddac: "Separate PC Code — registered",
    ctab: "Limited disinfectant registrations",
  },
  {
    attribute: "Typical use concentration",
    bkc50: "0.1% – 0.4% active",
    bkc80: "0.1% – 0.4% active (after dilution)",
    ddac: "0.1% – 0.5% active",
    ctab: "0.05% – 0.5% active",
  },
];

/* ───────────────── Regulatory & quality matrix (E-E-A-T signal) ─────────── */

export const BKC_50_REGULATORY_MATRIX: BkcIdentifierRow[] = [
  {
    label: "US EPA (Antimicrobial)",
    value: "Registered active substance under PC Code 069105. Listed in EPA List N: Disinfectants for Use Against SARS-CoV-2 in numerous BKC-based formulations.",
  },
  {
    label: "US FDA (Food Contact)",
    value: "Approved as no-rinse food-contact sanitising solution under 21 CFR 178.1010 at maximum 200 ppm active quat.",
  },
  {
    label: "US FDA (OTC Antiseptic)",
    value: "Listed in FDA OTC monograph for healthcare antiseptic and first-aid antiseptic active ingredients.",
  },
  {
    label: "EU Biocidal Products Regulation (BPR)",
    value: "Approved active substance under product types PT 1 (human hygiene), PT 2 (disinfectants for non-food-contact private/public surfaces), PT 3 (veterinary hygiene), PT 4 (food and feed area).",
  },
  {
    label: "REACH (EU)",
    value: "Pre-registered (CAS 8001-54-5). Full registration available through EU representatives.",
  },
  {
    label: "TSCA (USA)",
    value: "Listed on TSCA Inventory under multiple BKC chain-specific CAS numbers.",
  },
  {
    label: "DSL (Canada)",
    value: "Listed on Canada's Domestic Substances List (DSL).",
  },
  {
    label: "Pharmacopoeia",
    value: "Compendial monographs in USP, NF, BP, EP (Ph. Eur.), IP (Indian Pharmacopoeia), JP (Japanese Pharmacopoeia).",
  },
  {
    label: "Cosmetic Regulation (Cosmetics Europe / FDA)",
    value: "Approved cosmetic preservative under INCI name 'Benzalkonium Chloride'. Maximum 0.1% active in rinse-off products, 0.05% in leave-on products (EU Annex V).",
  },
  {
    label: "GHS / CLP",
    value: "GHS05 (Corrosive), GHS07 (Irritant), GHS09 (Aquatic toxicity). H302, H314, H318, H400, H410. Signal word: Danger.",
  },
  { label: "ISO 9001:2015", value: "Manufactured under ISO 9001:2015 QMS at Vasudev Chemo Pharma's Gujarat facility." },
  { label: "GMP", value: "Manufactured under GMP for cosmetic and pharmaceutical-grade BKC 50%." },
  { label: "Halal", value: "Halal certified — required for export to UAE, Saudi Arabia, Malaysia, Indonesia, and other Muslim-majority markets. Certificate provided on request." },
  { label: "Kosher", value: "Available on request for US/Israeli food-contact sanitisation buyers." },
];

/* ───────────────── Schema enrichment for ProductSchema.tsx ──────────────── */

export const BKC_50_SCHEMA_ENRICHMENT = {
  alternateName: [
    ...BKC_50_GENERIC_SYNONYMS,
    ...BKC_50_TRADE_NAMES,
    "BKC 50",
    "BKC 50%",
    "BKC 50 Liquid",
    "ADBAC 50%",
    "Disinfectant Grade BKC 50",
    "Cosmetic Grade BKC 50",
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
    { name: "Active Matter", value: "50 ± 1%" },
    { name: "Molecular Weight (avg, C₁₂–C₁₆)", value: "354.0 g/mol" },
    { name: "Charge Type", value: "Cationic surfactant / Quaternary ammonium biocide" },
    { name: "pH (10% solution, 25°C)", value: "6.0 – 8.0" },
    { name: "Specific Gravity (25°C)", value: "0.96 – 1.00" },
    { name: "Colour (APHA)", value: "≤ 50" },
    { name: "Free Amine", value: "≤ 1.5%" },
    { name: "Alkyl Distribution (C₁₂/C₁₄/C₁₆)", value: "40-50% / 30-40% / 10-20%" },
    { name: "Heavy Metals (as Pb)", value: "≤ 10 ppm" },
    { name: "Flash Point", value: "> 100°C (closed cup)" },
    { name: "Shelf Life", value: "24 months in sealed HDPE drums" },
    { name: "Origin", value: "Manufactured in India" },
    { name: "Manufacturing Standards", value: "ISO 9001:2015 + GMP + Halal" },
  ],
  category: "Surfactant Chemicals — Quaternary Ammonium Compounds (Quats)",
  countryOfOrigin: "IN",
} as const;
