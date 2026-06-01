import { config as loadEnv } from "dotenv";
import path from "path";

// Load .env.local first (Next.js convention — has the working pooler credentials),
// fall back to .env. Must happen BEFORE payload.config is imported, otherwise
// process.env.PAYLOAD_SECRET / DATABASE_URI are unset when buildConfig() evaluates.
// Because ES module imports are hoisted, we use dynamic import inside seedBkc().
loadEnv({ path: path.resolve(process.cwd(), ".env.local") });
loadEnv({ path: path.resolve(process.cwd(), ".env") });

/**
 * Delta seed script — inserts ONLY Benzalkonium Chloride 50% and 80%.
 *
 * UNLIKE the full seed.ts, this script does NOT delete existing products.
 * It checks if each BKC slug already exists; skips if yes, creates if no.
 *
 * Run with:  npx tsx src/seed-bkc.ts
 *
 * Safe to run on production — it is idempotent and additive only.
 */

type BkcSeed = {
  name: string;
  slug: string;
  sku: string;
  formula: string;
  casNumber: string;
  category: "surfactant";
  subcategory: string;
  description: string;
  appearance: string;
  molecularWeight: string;
  hsCode: string;
  specs: { key: string; value: string }[];
  applications: string[];
  industries: string[];
  safetyClass: string;
  ghsPictograms: string[];
  signalWord: string;
  hazardStatements: string[];
  grades: string[];
  packaging: string[];
  minOrderQuantity: string;
  faqs: { question: string; answer: string }[];
};

const BKC_50_FAQS = [
  {
    question: "What is Benzalkonium Chloride 50% (BKC 50%) used for?",
    answer:
      "BKC 50% is a 50% aqueous solution of Alkyl Dimethyl Benzyl Ammonium Chloride (ADBAC, CAS 8001-54-5) — a broad-spectrum cationic surfactant and quaternary ammonium biocide. It is the global formulation standard for hospital surface disinfectants, food and beverage CIP/COP sanitation, swimming-pool algicides, cosmetic and pharmaceutical preservation, cooling-tower and HVAC water treatment, agricultural disinfection, wood preservation, and as a phase-transfer catalyst in fine-chemical synthesis.",
  },
  {
    question: "What is the difference between BKC 50% and BKC 80%?",
    answer:
      "BKC 50% and BKC 80% are the same active substance (ADBAC, CAS 8001-54-5) at different concentrations in water. BKC 50% is the ready-to-formulate global standard — easier to pump at room temperature, lower viscosity, and the most common reference grade in disinfectant formulation manuals. BKC 80% is the concentrated export-economical grade preferred by sanitiser blenders who dilute on-site to 50%, 25%, or 10% — it ships less water per kilogram of active and reduces freight cost, but is more viscous and may gel below 15°C.",
  },
  {
    question: "Is Benzalkonium Chloride effective against viruses including coronaviruses?",
    answer:
      "Yes. BKC is a proven virucide against enveloped viruses including coronaviruses (SARS-CoV-2, MERS-CoV), influenza, herpes, and HIV when used at the manufacturer's recommended in-use concentration (typically 0.05% – 0.4% active matter) with adequate contact time (usually 1 – 10 minutes). Efficacy against non-enveloped viruses (e.g. norovirus, poliovirus) is limited. Always validate efficacy against the specific organisms and surfaces in your application.",
  },
  {
    question: "What is the recommended in-use concentration of BKC 50% for surface disinfection?",
    answer:
      "Typical in-use concentrations of BKC 50% for surface disinfection are 0.1% – 0.4% (1,000 – 4,000 ppm active quat). For routine hard-surface sanitation, dilute 1 part BKC 50% in 125 – 500 parts water. For food-contact surfaces, follow local regulations (e.g. US FDA 21 CFR 178.1010 limits no-rinse food-contact use to 200 ppm active quat). Always validate efficacy against the target organisms for your specific application.",
  },
  {
    question: "What grades and certifications does Vasudev Chemo Pharma offer for BKC 50%?",
    answer:
      "Vasudev Chemo Pharma supplies BKC 50% in three grades: Industrial / Technical Grade for general industrial use, Cosmetic Grade (CTFA-compliant) for personal-care preservation, and Disinfectant Grade suitable for EPA-registered formulators. Our manufacturing facility in Gujarat, India is ISO 9001:2015, GMP, and Halal certified. Every shipment includes COA, SDS, TDS, Halal/GMP certificates, and full export documentation.",
  },
  {
    question: "Is BKC compatible with anionic surfactants in formulations?",
    answer:
      "No — BKC is a cationic surfactant and is generally incompatible with anionic surfactants such as LABSA, SLES, SLS, or anionic hydrotropes (SCS, SXS). Mixing leads to ion-pair complexation, precipitation, and complete loss of biocidal activity. BKC is fully compatible with nonionic surfactants (alcohol ethoxylates, APGs), amphoteric surfactants (cocamidopropyl betaine), and other cationic systems. Always pre-test formulations to confirm compatibility before scale-up.",
  },
  {
    question: "Is BKC 50% from Vasudev Chemo Pharma exported globally?",
    answer:
      "Yes. We export BKC 50% (HS code 29239000) worldwide from our Gujarat facility to disinfectant manufacturers, sanitiser blenders, cosmetic preservation houses, water-treatment chemical companies, and pharmaceutical preservative formulators across the USA, EU, UAE, Saudi Arabia, Brazil, Vietnam, Russia, Egypt, and over 30 other countries. Shipments are supported with FOB / CIF / CFR Incoterms from Kandla, Mundra, and Hazira ports.",
  },
  {
    question: "What safety precautions are required when handling BKC 50%?",
    answer:
      "BKC 50% is classified as Corrosive (GHS05), Irritant (GHS07), and Environmentally Hazardous (GHS09), with hazard statements H302, H314, H318, H400, and H410. Handling requires chemical-resistant gloves (nitrile or neoprene), splash-proof safety goggles, face shield, and protective clothing. Provide local exhaust ventilation. Do not discharge BKC waste into waterways, drains, or septic systems — neutralise with anionic surfactants and dispose via licensed hazardous-waste contractors.",
  },
];

const BKC_80_FAQS = [
  {
    question: "What is Benzalkonium Chloride 80% (BKC 80%) used for?",
    answer:
      "BKC 80% is a high-active 80% aqueous solution of Alkyl Dimethyl Benzyl Ammonium Chloride (ADBAC, CAS 8001-54-5) — the export-economical grade preferred by global disinfectant brands, sanitiser blenders, cosmetic preservation houses, and water-treatment chemical companies who dilute on-site to 50%, 25%, 10%, or final-use concentrations. End-use applications include hospital surface disinfection, food and beverage CIP/COP, swimming-pool algicides, cosmetic and pharmaceutical preservation, cooling-tower and HVAC biocide, agricultural disinfection, wood preservation, and phase-transfer catalysis.",
  },
  {
    question: "Why choose BKC 80% over BKC 50%?",
    answer:
      "BKC 80% delivers 60% more active matter per kilogram of shipped product than BKC 50%, which significantly reduces freight cost per kilogram of quat — particularly meaningful for ocean exports to Latin America, Africa, and the Middle East. It also requires less storage volume on-site. Trade-offs: BKC 80% is more viscous, may gel below 15°C, and requires gentle warming or vigorous mixing to dilute. Buyers who plan to dilute on-site or pay high freight should prefer BKC 80%; buyers who use the product as-is should prefer BKC 50%.",
  },
  {
    question: "How do I dilute BKC 80% to make BKC 50% or final-use concentration?",
    answer:
      "To make BKC 50% from BKC 80%, blend 62.5 kg of BKC 80% with 37.5 kg of demineralised water — yielding 100 kg of BKC 50%. For final-use disinfectant concentrations of 0.1% – 0.4% active, dilute 1.25 – 5.0 g of BKC 80% per litre of water. Always add BKC concentrate to water (not water to concentrate), use demineralised or low-hardness water to avoid Ca/Mg precipitation, and gently warm BKC 80% to 25 – 30°C if it has gelled.",
  },
  {
    question: "What is the storage requirement for BKC 80% to prevent gelation?",
    answer:
      "BKC 80% should be stored between 15°C and 40°C in sealed HDPE drums, away from direct sunlight. Below 15°C, BKC 80% becomes viscous and can form a soft gel. If gelation occurs, gently warm the drum to 25 – 30°C for 24 – 48 hours and roll/agitate to homogenise — the product fully recovers without loss of activity. Shelf life is 24 months in original sealed packaging.",
  },
  {
    question: "Is BKC 80% from Vasudev Chemo Pharma equivalent to Lonza Bardac® or Stepan BTC®?",
    answer:
      "Yes. Vasudev Chemo Pharma's BKC 80% is functionally equivalent to Lonza Bardac® 2280, Stepan BTC® 8358, Nouryon Maquat® 4480E, and Pilot Lonzabac® 80% — all of which are 80% ADBAC concentrates with C₁₂–C₁₆ alkyl distribution. Our typical alkyl ratio (C₁₂ 40–50% / C₁₄ 30–40% / C₁₆ 10–20%) matches the global formulation reference standard used by EPA-registered disinfectant formulators.",
  },
  {
    question: "What grades and certifications does Vasudev Chemo Pharma offer for BKC 80%?",
    answer:
      "BKC 80% is supplied in Industrial / Technical Grade, Cosmetic Grade (CTFA-compliant), and Disinfectant Grade suitable for EPA-registered formulators. Our facility is ISO 9001:2015, GMP, and Halal certified, with shipment documentation including COA, SDS, TDS, Halal certificate, GMP certificate, and full export paperwork. We supply USA, EU, UAE, Saudi Arabia, Brazil, Vietnam, Russia, and Egypt — among other markets.",
  },
  {
    question: "Is BKC compatible with anionic surfactants?",
    answer:
      "No. BKC is a cationic surfactant and is generally incompatible with anionic surfactants such as LABSA, SLES, SLS, or anionic hydrotropes (SCS, SXS). Mixing leads to ion-pair complexation, precipitation, and complete loss of biocidal activity. BKC is fully compatible with nonionic, amphoteric, and other cationic systems. Always pre-test formulations to confirm compatibility before scale-up.",
  },
  {
    question: "What safety precautions are required when handling BKC 80%?",
    answer:
      "BKC 80% is classified as Corrosive (GHS05), Irritant (GHS07), and Environmentally Hazardous (GHS09), with hazard statements H302, H314, H318, H400, and H410. The 80% concentration is more aggressive than the 50% grade. Handling requires chemical-resistant gloves (neoprene preferred), splash-proof goggles, face shield, apron, and access to an emergency eyewash and safety shower. Never discharge BKC waste into waterways or drains. Full SDS is supplied with every shipment.",
  },
];

const BKC_PRODUCTS: BkcSeed[] = [
  {
    name: "Benzalkonium Chloride 50% (BKC 50%)",
    slug: "benzalkonium-chloride-50",
    sku: "VCP-SFC-0005",
    formula: "C₆H₅CH₂N(CH₃)₂RCl (R = C₈–C₁₈ alkyl)",
    casNumber: "8001-54-5",
    category: "surfactant",
    subcategory: "Quaternary Ammonium Compounds (Quats)",
    description:
      "Benzalkonium Chloride 50% (BKC 50%) is a 50% aqueous solution of Alkyl Dimethyl Benzyl Ammonium Chloride (ADBAC) — a broad-spectrum cationic surfactant and quaternary ammonium biocide. Effective against gram-positive and gram-negative bacteria, fungi, yeast, algae, and enveloped viruses. The 50% liquid is the global formulation standard for hospital surface disinfectants, food and beverage CIP/COP sanitation, swimming-pool algicides, cosmetic and pharmaceutical preservation, cooling-tower and HVAC water treatment, agricultural and veterinary disinfection, wood preservation, and as a phase-transfer catalyst. Manufactured by Vasudev Chemo Pharma at our ISO 9001:2015, GMP, and Halal-certified facility in Gujarat, India. Available in Industrial / Technical, Cosmetic (CTFA), and Disinfectant grades for EPA-registered formulators.",
    appearance: "Clear to slightly viscous pale yellow liquid",
    molecularWeight: "354.0 g/mol (avg, C₁₂–C₁₆)",
    hsCode: "29239000",
    specs: [
      { key: "Active Content (Quat as ADBAC)", value: "50.0 ± 1.0%" },
      { key: "Appearance", value: "Clear to slightly viscous pale yellow liquid" },
      { key: "pH (10% solution, 25°C)", value: "6.0 – 8.0" },
      { key: "Specific Gravity (25°C)", value: "0.96 – 1.00" },
      { key: "Colour (APHA)", value: "≤ 50" },
      { key: "Free Amine", value: "≤ 1.5%" },
      { key: "Solubility in Water", value: "Fully miscible" },
      { key: "Refractive Index (25°C)", value: "1.430 – 1.450" },
      { key: "Flash Point", value: "> 100°C (closed cup)" },
      { key: "Alkyl Distribution (C₁₂/C₁₄/C₁₆)", value: "40–50% / 30–40% / 10–20%" },
      { key: "Heavy Metals (as Pb)", value: "≤ 10 ppm" },
      { key: "Shelf Life", value: "24 months (sealed HDPE drums)" },
    ],
    applications: [
      "Hospital, clinical, and pharmaceutical surface disinfection",
      "Healthcare instrument sanitisation and pre-sterilisation cleaning",
      "Food & beverage industry CIP / COP sanitation",
      "Pharmaceutical preservative in eye drops, nasal sprays, skin antiseptics",
      "Cosmetic preservative in hair conditioners, mouthwashes, shampoos",
      "Swimming pool, spa, and recreational water algaecide and sanitiser",
      "Cooling tower, HVAC, and industrial water-treatment biocide",
      "Industrial and institutional cleaning concentrates",
      "Agricultural disinfection (poultry, dairy, hatcheries, foot baths)",
      "Veterinary surface and equipment disinfection",
      "Wood preservation against fungal decay and surface mildew",
      "Textile antimicrobial finish and cationic softener base",
      "Phase-transfer catalyst in fine-chemical synthesis",
      "Oilfield biocide for microbial control",
    ],
    industries: [
      "Healthcare & Hospitals",
      "Pharmaceutical & API Manufacturing",
      "Personal Care & Cosmetics",
      "Food & Beverage Processing",
      "Water Treatment & Pool Sanitation",
      "Industrial & Institutional Cleaning",
      "Agriculture & Veterinary",
      "Wood Preservation & Treatment",
      "Oil & Gas (biocide)",
      "Textile Processing",
    ],
    safetyClass: "Corrosive / Environmental Hazard",
    ghsPictograms: ["GHS05", "GHS07", "GHS09"],
    signalWord: "Danger",
    hazardStatements: [
      "H302 – Harmful if swallowed",
      "H314 – Causes severe skin burns and eye damage",
      "H318 – Causes serious eye damage",
      "H400 – Very toxic to aquatic life",
      "H410 – Very toxic to aquatic life with long-lasting effects",
    ],
    grades: [
      "Industrial / Technical Grade",
      "Cosmetic Grade (CTFA-compliant)",
      "Disinfectant Grade (suitable for EPA-registered formulators)",
    ],
    packaging: [
      "50 kg HDPE drums",
      "200 kg HDPE drums",
      "1000 kg IBC tanks",
      "Bulk tanker (ISO tank) loads",
      "Custom packaging on request",
    ],
    minOrderQuantity: "1 MT",
    faqs: BKC_50_FAQS,
  },
  {
    name: "Benzalkonium Chloride 80% (BKC 80%)",
    slug: "benzalkonium-chloride-80",
    sku: "VCP-SFC-0006",
    formula: "C₆H₅CH₂N(CH₃)₂RCl (R = C₈–C₁₈ alkyl)",
    casNumber: "8001-54-5",
    category: "surfactant",
    subcategory: "Quaternary Ammonium Compounds (Quats)",
    description:
      "Benzalkonium Chloride 80% (BKC 80%) is the high-active 80% aqueous concentrate of Alkyl Dimethyl Benzyl Ammonium Chloride (ADBAC) — the export-economical grade preferred by global disinfectant brands, sanitiser blenders, cosmetic preservation houses, and water-treatment chemical companies who dilute on-site to 50%, 25%, 10%, or final-use concentrations. Effective against gram-positive and gram-negative bacteria, fungi, yeast, algae, and enveloped viruses. End-use applications include hospital and clinical surface disinfection, food & beverage CIP/COP, swimming-pool algicides, cosmetic and pharmaceutical preservation, cooling-tower and HVAC biocide, agricultural and veterinary disinfection, wood preservation, and phase-transfer catalysis. Equivalent to Lonza Bardac® 2280, Stepan BTC® 8358, Nouryon Maquat® 4480E, and Pilot Lonzabac® 80% reference grades. Manufactured by Vasudev Chemo Pharma at our ISO 9001:2015, GMP, and Halal-certified facility in Gujarat, India.",
    appearance: "Clear to pale yellow viscous liquid (gel-like below 15°C)",
    molecularWeight: "354.0 g/mol (avg, C₁₂–C₁₆)",
    hsCode: "29239000",
    specs: [
      { key: "Active Content (Quat as ADBAC)", value: "80.0 ± 1.0%" },
      { key: "Appearance", value: "Clear to pale yellow viscous liquid" },
      { key: "pH (10% solution, 25°C)", value: "6.0 – 8.0" },
      { key: "Specific Gravity (25°C)", value: "1.00 – 1.04" },
      { key: "Colour (APHA)", value: "≤ 80" },
      { key: "Free Amine", value: "≤ 2.0%" },
      { key: "Solubility in Water", value: "Fully miscible (gentle warming may help)" },
      { key: "Refractive Index (25°C)", value: "1.450 – 1.480" },
      { key: "Flash Point", value: "> 100°C (closed cup)" },
      { key: "Alkyl Distribution (C₁₂/C₁₄/C₁₆)", value: "40–50% / 30–40% / 10–20%" },
      { key: "Heavy Metals (as Pb)", value: "≤ 10 ppm" },
      { key: "Storage", value: "Keep above 15°C to prevent gelation" },
      { key: "Shelf Life", value: "24 months (sealed HDPE drums)" },
    ],
    applications: [
      "Concentrated raw material for disinfectant and sanitiser blenders",
      "Hospital and clinical surface disinfection (after dilution)",
      "Healthcare instrument pre-sterilisation cleaning",
      "Food & beverage industry CIP / COP sanitation",
      "Pharmaceutical preservative in eye drops, nasal sprays, skin antiseptics",
      "Cosmetic preservative in hair conditioners, mouthwashes, shampoos",
      "Swimming pool, spa, and recreational water algaecide and sanitiser",
      "Cooling tower, HVAC, and industrial water-treatment biocide",
      "Industrial and institutional cleaning concentrate base",
      "Agricultural disinfection (poultry, dairy, hatcheries, foot baths)",
      "Veterinary surface and equipment disinfection",
      "Wood preservation against fungal decay and surface mildew",
      "Textile antimicrobial finish and cationic softener base",
      "Phase-transfer catalyst in fine-chemical synthesis",
      "Oilfield biocide for microbial control",
    ],
    industries: [
      "Healthcare & Hospitals",
      "Pharmaceutical & API Manufacturing",
      "Personal Care & Cosmetics",
      "Food & Beverage Processing",
      "Water Treatment & Pool Sanitation",
      "Industrial & Institutional Cleaning",
      "Agriculture & Veterinary",
      "Wood Preservation & Treatment",
      "Oil & Gas (biocide)",
      "Textile Processing",
    ],
    safetyClass: "Corrosive / Environmental Hazard",
    ghsPictograms: ["GHS05", "GHS07", "GHS09"],
    signalWord: "Danger",
    hazardStatements: [
      "H302 – Harmful if swallowed",
      "H314 – Causes severe skin burns and eye damage",
      "H318 – Causes serious eye damage",
      "H400 – Very toxic to aquatic life",
      "H410 – Very toxic to aquatic life with long-lasting effects",
    ],
    grades: [
      "Industrial / Technical Grade",
      "Cosmetic Grade (CTFA-compliant)",
      "Disinfectant Grade (suitable for EPA-registered formulators)",
    ],
    packaging: [
      "50 kg HDPE drums",
      "200 kg HDPE drums",
      "1000 kg IBC tanks",
      "Bulk tanker (ISO tank) loads",
      "Custom packaging on request",
    ],
    minOrderQuantity: "1 MT",
    faqs: BKC_80_FAQS,
  },
];

async function seedBkc() {
  // Dynamic imports — must happen after dotenv has loaded env vars.
  const { getPayload } = await import("payload");
  const { default: config } = await import("./payload.config");

  const payload = await getPayload({ config });

  console.log("\n🚀 BKC delta seed starting (additive only — does NOT delete existing products)\n");

  for (const product of BKC_PRODUCTS) {
    // Check if already exists
    const existing = await payload.find({
      collection: "products",
      where: { slug: { equals: product.slug } },
      limit: 1,
    });

    if (existing.docs.length > 0) {
      console.log(`  ⏭️  Skipped (already exists): ${product.name}`);
      continue;
    }

    await payload.create({
      collection: "products",
      data: {
        ...product,
        supplier: "Vasudev Chemo Pharma",
        certifications: ["ISO 9001:2015", "GMP Certified", "Halal Certified"],
        currency: "USD",
        priceUnit: "/MT",
        unitOfMeasure: "MT",
        price: 0,
        originCountry: "India",
        status: "active",
        isActive: true,
        images: [],
        documents: [],
      },
    });
    console.log(`  ✅ Created: ${product.name} (${product.sku})`);
  }

  console.log("\n✅ BKC delta seed complete.\n");
  process.exit(0);
}

seedBkc().catch((err) => {
  console.error("❌ BKC seed failed:", err);
  process.exit(1);
});
