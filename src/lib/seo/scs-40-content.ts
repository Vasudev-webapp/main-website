/**
 * Sodium Cumene Sulfonate 40% (SCS-40) — content + schema enrichment.
 *
 * Mirrors src/lib/seo/sxs-40-content.ts. Centralises the on-page identifier
 * rows, synonym/trade-name lists, pure-substance physical properties, and
 * the JSON-LD enrichment payload consumed by ProductSchema.tsx.
 *
 * Why this file exists: competitor pages that currently rank for
 * "sodium cumene sulfonate 40", "SCS 40", "buy SCS 40 manufacturer in India"
 * (Stepan, Atamankimya, Sigma-Aldrich, ChemicalBook, Tennants, ULProspector,
 * Nandadeep, Navdeep, Dolphin Pharma, Ariix, Du Organics) all expose:
 *   - 50+ alternate trade names + IUPAC synonyms
 *   - InChI / InChIKey / SMILES / EINECS / EC / MDL / UNII identifiers
 *   - Pure-substance physical properties (pKa, LogP, water solubility,
 *     melting point, boiling point, surface tension)
 * Vasudev's page previously had only 2 synonyms and no InChI/SMILES.
 * That's the entity-recognition gap that suppresses ranking + AI Overview
 * citation eligibility.
 */

export const SCS_40_SLUG = "sodium-cumene-sulfonate-40";

export type ScsIdentifierRow = {
  label: string;
  value: string;
};

/* ───────────────── Chemical identifiers (rendered on-page + in JSON-LD) ─── */

export const SCS_40_CHEMICAL_IDENTIFIERS: ScsIdentifierRow[] = [
  { label: "CAS Number", value: "28348-53-0" },
  { label: "EINECS / EC Number", value: "248-983-7" },
  { label: "Alternate CAS (m-isomer)", value: "32073-22-6" },
  { label: "Molecular Formula", value: "C9H11NaO3S" },
  { label: "Molecular Weight", value: "222.24 g/mol" },
  {
    label: "IUPAC Name",
    value: "Sodium 4-(propan-2-yl)benzenesulfonate",
  },
  {
    label: "InChI",
    value: "InChI=1S/C9H12O3S.Na/c1-7(2)8-3-5-9(6-4-8)13(10,11)12;/h3-7H,1-2H3,(H,10,11,12);/q;+1/p-1",
  },
  { label: "InChI Key", value: "QEKATQBVVAZOAY-UHFFFAOYSA-M" },
  {
    label: "SMILES",
    value: "[Na+].CC(C)c1ccc(cc1)S(=O)(=O)[O-]",
  },
  { label: "MDL Number", value: "MFCD00007408" },
  { label: "UNII", value: "Q6NN81YXV4" },
  { label: "COSING Reference", value: "79388" },
  { label: "HS Code (India)", value: "29041090" },
  { label: "Substance Class", value: "Anionic surfactant / hydrotrope" },
];

/* ───────────────── Generic + IUPAC synonyms (entity-recognition signal) ─── */

export const SCS_40_GENERIC_SYNONYMS: string[] = [
  "Sodium cumenesulfonate",
  "Sodium cumenesulphonate",
  "Sodium cumene sulphonate",
  "Sodium cumene sulfonate 40",
  "Sodium cumene sulphonate 40",
  "Sodium isopropylbenzenesulfonate",
  "Sodium 4-isopropylbenzenesulfonate",
  "Sodium p-cumenesulfonate",
  "Sodium p-cumenesulphonate",
  "Sodium 4-(propan-2-yl)benzenesulfonate",
  "Sodium 4-(1-methylethyl)benzenesulfonate",
  "Sodium 2-isopropylbenzenesulfonate",
  "Cumenesulfonic acid sodium salt",
  "Cumene sulfonic acid sodium salt",
  "Isopropylbenzenesulfonic acid sodium salt",
  "Benzenesulfonic acid, (1-methylethyl)-, sodium salt",
  "ar-Cumenesulfonic acid sodium salt",
  "Cumene, monosulpho derivative, sodium salt",
  "Cumolsulfonsäure-Natriumsalz",
  "Natriumcumolsulfonat",
  "Cumolsulfonsaeure-Na-Salz",
];

/* ───────────────── Trade-name synonyms (long-tail + AI extractability) ─── */
/* These are the brand names competitors rank for. Including them on our
 * page lets Google + LLMs map our SKU to the broader entity set so we
 * surface for "Eltesol SC 40 supplier", "Stepanate SCS 40 alternative", etc. */

export const SCS_40_TRADE_NAMES: string[] = [
  "Eltesol SC 40",
  "Eltesol SC 40 F",
  "Stepanate SCS",
  "Stepanate SCS-40",
  "Stepanate SCS-40E",
  "Naxonate SC",
  "Naxonate SCS",
  "Witconate SCS",
  "Conco SCS",
  "Calsoft SCS",
  "Ultrawet SCS",
  "Teric 12A3N",
  "Taycatox N 5040",
  "Spolapon SCS",
  "Cycloryl SCS",
  "Dolanate SCS",
  // ── Indian competitor brand SKUs we are explicitly compared against ──
  "SCSDOL-40",
  "SCSDOL 40%",
  "Neosol 40",
  "MAHANOL SCS-40",
  "NLN-SCS 40",
  "Unisurf SC 40",
  "Mallak SCS-40",
  "Navdeep SCS-40",
  "Nandadeep SCS-40",
  // ── Vasudev SKU ──
  "VCP-SFC-0001",
];

/* ───────────────── Pure-substance physical properties (research E-E-A-T) ─ */
/* These describe the dry chemistry, NOT the 40% solution. Putting them on
 * the page lets Google's chemical-substance entity match the open data
 * (PubChem CID 23665741, ChemicalBook CB8506326). */

export const SCS_40_PURE_PROPERTIES: ScsIdentifierRow[] = [
  { label: "Form (pure)", value: "White to off-white crystalline powder" },
  { label: "Melting Point", value: "> 300 °C (decomposes)" },
  { label: "Boiling Point (calc.)", value: "~549 °C at 101.325 kPa" },
  { label: "Density (solid, 20 °C)", value: "~0.61 g/cm³" },
  { label: "Vapour Pressure (25 °C)", value: "≈ 0 Pa" },
  {
    label: "Water Solubility (25 °C)",
    value: "634.6 g/L (highly soluble)",
  },
  { label: "pKa (20 °C)", value: "≈ 2 (sulfonic acid)" },
  { label: "Log Pow (octanol/water, 25 °C)", value: "−1.5 (hydrophilic)" },
  {
    label: "Surface Tension (1% aq., 25 °C)",
    value: "29.3 – 31.8 dyn/cm",
  },
  { label: "Storage", value: "Inert atmosphere, room temperature, sealed" },
];

/* ───────────────── Application blocks (deeper than current page) ───────── */

export type ScsApplicationBlock = {
  heading: string;
  paragraph: string;
  bullets: string[];
};

export const SCS_40_APPLICATION_BLOCKS: ScsApplicationBlock[] = [
  {
    heading: "Liquid detergents, dish wash and laundry concentrates",
    paragraph:
      "SCS 40% is the standard hydrotrope choice for clear, high-active liquid detergents. It keeps anionic + nonionic surfactant blends single-phase at high active matter, depresses the cloud point so the formula stays clear at low storage temperature, and reduces gel formation when concentrating LAS / SLES / AES surfactants.",
    bullets: [
      "Typical dosage 1 – 8% on product weight; 3% is a common starting point at 20% surfactant active matter",
      "Compatible with LAS, SLES, AES, AOS, alpha-olefin sulfonates, alkanolamides, and amphoterics",
      "Reduces viscosity in concentrated APG / amine-oxide systems for easier pumping and bottling",
      "Maintains clarity in dish wash gels containing fragrance, dye, and electrolyte builders",
    ],
  },
  {
    heading: "Hard-surface cleaners, degreasers and APCs",
    paragraph:
      "In alkaline all-purpose cleaners and metal-degreasing concentrates, SCS 40% couples solvent and surfactant phases at high builder loadings (silicates, carbonates, EDTA, citrate). It tolerates electrolytes better than SXS in the lower-electrolyte cleaner systems and prevents salting-out at the surfactant layer.",
    bullets: [
      "Stabilises clear single-phase concentrates with sodium hydroxide, sodium silicate, or sodium metasilicate",
      "Improves rinse-off behaviour and reduces residue on stainless steel, glass, and painted substrates",
      "Used in floor strippers and wax cleaners as a solubiliser for d-limonene, glycol ether, and aromatic solvents",
    ],
  },
  {
    heading: "Personal care: shampoos, body wash, liquid soap",
    paragraph:
      "SCS 40% is sulfate-free and sulfone-free in its 40% liquid form (sulfate < 1.0%, sulfone < 1.0%) and is acceptable in mild personal-care systems. It clarifies fragrance-loaded SLES / cocamidopropyl betaine systems and is compatible with cationic conditioning agents in 2-in-1 shampoos.",
    bullets: [
      "Keeps cloudy fragrances and essential oils in solution at high surfactant concentration",
      "Reduces viscosity in over-thickened SLES systems for accurate pump dispensing",
      "Compatible with Polyquat-7, Polyquat-10, behentrimonium chloride conditioners",
    ],
  },
  {
    heading: "Agrochemical EC / SL formulations and adjuvants",
    paragraph:
      "SCS 40% acts as a coupling agent in pesticide / herbicide concentrates, helping water-immiscible actives stay solubilised in EC and SL formulations. It improves wetting on hydrophobic leaf surfaces and is permitted as an inert ingredient in non-food pesticide products.",
    bullets: [
      "Used in glyphosate, 2,4-D, paraquat, and dicamba formulations as a hydrotrope/wetting aid",
      "Compatible with nonyl-phenol-free emulsifiers and modern alkyl-polyglycoside surfactants",
      "Improves spray-tank dilution stability of high-electrolyte SL concentrates",
    ],
  },
  {
    heading: "Oilfield and metal processing applications",
    paragraph:
      "In drilling fluids and stimulation fluids, SCS 40% improves the dispersion of polymeric viscosifiers (xanthan, HEC, PHPA) and helps water-soluble actives penetrate oil-bearing formations. In metal processing it is a viscosity reducer for concentrated electroplating bath cleaners and zinc-plating brighteners.",
    bullets: [
      "Drilling fluid solubiliser for water-based mud (WBM) and oil-based mud (OBM) brine phases",
      "Cementing-aid coupling agent in oil-well cement slurries",
      "Bath additive in alkaline degreasers, electroplating cleaners, and zinc-plating brighteners",
    ],
  },
];

/* ───────────────── Comparison table (vs SXS 40, SCS 90) ────────────────── */

export type ScsComparisonRow = {
  attribute: string;
  scs40: string;
  scs90: string;
  sxs40: string;
};

export const SCS_40_COMPARISON_TABLE: ScsComparisonRow[] = [
  {
    attribute: "Form",
    scs40: "Clear aqueous liquid (40 ± 1% active)",
    scs90: "Free-flowing white powder (90 ± 1% active)",
    sxs40: "Pale yellow aqueous liquid (40 ± 1% active)",
  },
  {
    attribute: "CAS Number",
    scs40: "28348-53-0",
    scs90: "28348-53-0 (same chemistry, different form)",
    sxs40: "1300-72-7 (different chemistry)",
  },
  {
    attribute: "Molecular Formula",
    scs40: "C9H11NaO3S",
    scs90: "C9H11NaO3S",
    sxs40: "C8H9NaO3S",
  },
  {
    attribute: "Active Matter",
    scs40: "39 – 41%",
    scs90: "≥ 90%",
    sxs40: "39 – 41%",
  },
  {
    attribute: "Best for",
    scs40: "Cold-blend liquid detergents, regional supply",
    scs90: "Spray-dried powders, dry blends, long-haul export",
    sxs40: "Higher-electrolyte alkaline cleaners, dish wash",
  },
  {
    attribute: "Freight cost / kg active",
    scs40: "Baseline (60% water)",
    scs90: "~60% lower than SCS 40",
    sxs40: "Baseline (60% water)",
  },
  {
    attribute: "Cloud-point depression",
    scs40: "Strong",
    scs90: "Strong",
    sxs40: "Slightly stronger in alkaline systems",
  },
  {
    attribute: "Storage temperature",
    scs40: "> 10 °C (avoid crystallisation)",
    scs90: "10 – 35 °C dry warehouse",
    sxs40: "> 5 °C",
  },
];

/* ───────────────── Regulatory & quality matrix (E-E-A-T signal) ─────────── */

export const SCS_40_REGULATORY_MATRIX: ScsIdentifierRow[] = [
  {
    label: "REACH (EU)",
    value:
      "Pre-registered. Listed on hydrotropes OECD SIDS dossier (2005). Full registration available on request for EU buyers.",
  },
  {
    label: "TSCA (USA)",
    value: "Listed on the TSCA Inventory under CAS 28348-53-0.",
  },
  {
    label: "DSL (Canada)",
    value: "Listed on Canada's Domestic Substances List (DSL).",
  },
  {
    label: "ENCS (Japan)",
    value: "Notified under METI/MHLW; existing chemical.",
  },
  {
    label: "AICS (Australia)",
    value: "Listed on the Australian Inventory of Chemical Substances.",
  },
  {
    label: "IECSC (China)",
    value: "Listed on the Inventory of Existing Chemical Substances in China.",
  },
  { label: "KECI / K-REACH (Korea)", value: "Listed; pre-registered." },
  {
    label: "GHS / CLP",
    value:
      "GHS07 — Skin Irritation Cat 2 (H315), Eye Irritation Cat 2A (H319). Signal word: Warning.",
  },
  {
    label: "Halal / Kosher",
    value: "Available on request from Vasudev Chemo Pharma.",
  },
  { label: "ISO 9001:2015", value: "Manufactured under ISO 9001:2015 QMS." },
];

/* ───────────────── Schema enrichment for ProductSchema.tsx ──────────────── */

export const SCS_40_SCHEMA_ENRICHMENT = {
  alternateName: [
    ...SCS_40_GENERIC_SYNONYMS,
    ...SCS_40_TRADE_NAMES,
    "SCS 40",
    "SCS-40",
    "SCS 40%",
    "Hydrotrope SCS 40",
    "Coupling Agent SCS 40",
  ],
  iupacName: "Sodium 4-(propan-2-yl)benzenesulfonate",
  inChIKey: "QEKATQBVVAZOAY-UHFFFAOYSA-M",
  smiles: "[Na+].CC(C)c1ccc(cc1)S(=O)(=O)[O-]",
  identifierProperties: [
    { name: "CAS Number", value: "28348-53-0" },
    { name: "EINECS / EC Number", value: "248-983-7" },
    { name: "Alternate CAS (m-isomer)", value: "32073-22-6" },
    { name: "MDL Number", value: "MFCD00007408" },
    { name: "UNII", value: "Q6NN81YXV4" },
    { name: "COSING Reference", value: "79388" },
    { name: "HS Code (India)", value: "29041090" },
  ],
  additionalProperty: [
    { name: "Active Matter", value: "39 – 41%" },
    { name: "Molecular Weight", value: "222.24 g/mol" },
    { name: "Charge Type", value: "Anionic surfactant / hydrotrope" },
    { name: "pH (as supplied)", value: "7.0 – 10.0" },
    { name: "Specific Gravity (25 °C)", value: "1.07 – 1.12" },
    { name: "Cloud Point (as supplied)", value: "< 0 °C" },
    { name: "Sulphate Content", value: "< 1.0%" },
    { name: "Sulfone Content", value: "< 1.0%" },
    { name: "Moisture", value: "58 – 62%" },
    { name: "Water Solubility (pure, 25 °C)", value: "634.6 g/L" },
    { name: "pKa (20 °C)", value: "≈ 2" },
    { name: "Log Pow (25 °C)", value: "−1.5" },
    { name: "Biodegradability", value: "Readily biodegradable (OECD 301B)" },
    { name: "Shelf Life", value: "24 months in sealed packaging" },
    { name: "Origin", value: "Manufactured in India" },
  ],
  category: "Surfactant Chemicals — Hydrotropes",
  countryOfOrigin: "IN",
} as const;
