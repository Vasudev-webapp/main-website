import type { Metadata } from "next";
import { applyPageMetaOverride } from "@/lib/seo/page-meta-overrides";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import FAQSchema from "@/components/seo/FAQSchema";
import {
  BKC_CORE_KEYWORDS,
  BKC_50_KEYWORDS,
  BKC_80_KEYWORDS,
  BKC_APPLICATIONS_KEYWORDS,
  mergeKeywordClusters,
} from "@/lib/seo/keyword-clusters";

const SITE_URL = "https://www.vasudevchemopharma.com";

export const metadata: Metadata = applyPageMetaOverride("/bkc-uses-applications", {
  title: "Benzalkonium Chloride (BKC) Uses & Applications — Complete Guide | Vasudev Chemo Pharma",
  description:
    "Comprehensive guide to Benzalkonium Chloride (BKC, ADBAC, CAS 8001-54-5) uses across hospital disinfection, food sanitation, swimming pool algicide, cosmetic preservation, pharmaceutical preservative, cooling tower biocide, agricultural disinfection, oilfield biocide, and phase-transfer catalysis. Manufacturer guide by Vasudev Chemo Pharma.",
  keywords: mergeKeywordClusters(
    BKC_CORE_KEYWORDS,
    BKC_50_KEYWORDS,
    BKC_80_KEYWORDS,
    BKC_APPLICATIONS_KEYWORDS,
    [
      "benzalkonium chloride uses",
      "BKC uses and applications",
      "what is BKC used for",
      "benzalkonium chloride applications",
      "ADBAC uses",
      "quaternary ammonium compound applications",
      "BKC for hospital disinfection",
      "BKC for food sanitation",
      "BKC for pool algicide",
      "BKC for cosmetic preservation",
      "BKC for pharmaceutical preservative",
      "BKC for cooling tower biocide",
      "BKC for veterinary disinfection",
      "BKC for wood preservation",
      "BKC for textile antimicrobial",
      "BKC for oilfield biocide",
      "BKC phase transfer catalyst",
    ]
  ),
  alternates: { canonical: `${SITE_URL}/bkc-uses-applications` },
  openGraph: {
    title: "Benzalkonium Chloride (BKC) Uses & Applications — Complete Guide",
    description:
      "Comprehensive guide to BKC uses — hospital disinfection, food sanitation, pool algicide, cosmetic preservation, pharmaceutical preservative, cooling tower biocide, and more.",
    url: `${SITE_URL}/bkc-uses-applications`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "BKC Uses & Applications — Complete Guide",
    description:
      "Complete guide to Benzalkonium Chloride applications across 12 industries. By Vasudev Chemo Pharma.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "What is Benzalkonium Chloride (BKC) and where is it used?",
    answer:
      "Benzalkonium Chloride (BKC, ADBAC, CAS 8001-54-5) is a broad-spectrum cationic surfactant and quaternary ammonium biocide. It is used in hospital surface disinfectants, food and beverage CIP/COP sanitation, swimming pool algicides, cosmetic and pharmaceutical preservatives, cooling tower biocides, agricultural and veterinary disinfection, wood preservation, textile antimicrobial finishes, oilfield biocide, and phase-transfer catalysis.",
  },
  {
    question: "Is Benzalkonium Chloride effective against SARS-CoV-2 and other coronaviruses?",
    answer:
      "Yes. The US EPA's List N (Disinfectants for Use Against SARS-CoV-2) includes hundreds of BKC-based products at active concentrations of 0.1% – 0.4%. BKC inactivates enveloped viruses (coronaviruses, influenza, herpes, HIV) by disrupting the lipid bilayer envelope. Contact times typically range 1 – 10 minutes depending on the formulation, surface, and target organism.",
  },
  {
    question: "What is the typical use concentration of BKC for hospital surface disinfection?",
    answer:
      "Hospital surface disinfectants typically use 0.1% – 0.4% active BKC (1,000 – 4,000 ppm). For routine clinical hard-surface sanitation, 0.2% (2,000 ppm) is the global benchmark. For food-contact no-rinse sanitisers, US FDA 21 CFR 178.1010 limits BKC use to maximum 200 ppm active quat.",
  },
  {
    question: "Can BKC be used in cosmetics and personal care products?",
    answer:
      "Yes. BKC is INCI-listed under 'Benzalkonium Chloride' as an approved cosmetic preservative in Cosmetics Europe Annex V at maximum 0.1% active in rinse-off products and 0.05% active in leave-on products. It is widely used in hair conditioners, mouthwashes, shampoos, leave-on personal-care products, and as a cationic conditioning agent in 2-in-1 shampoos.",
  },
  {
    question: "Is BKC used in pharmaceutical products?",
    answer:
      "Yes. BKC is a pharmacopoeia-grade preservative listed in USP, NF, BP, EP (Ph. Eur.), IP (Indian Pharmacopoeia), and JP (Japanese Pharmacopoeia). It is the most widely used preservative in eye drops, nasal sprays, contact lens solutions, skin antiseptics, and topical antimicrobial pharmaceutical products. Typical use: 0.001% – 0.01% active in finished pharmaceutical product per USP <51> antimicrobial effectiveness testing.",
  },
  {
    question: "What is the role of BKC in swimming pool water treatment?",
    answer:
      "BKC is widely used as an algicide and supplementary sanitiser for residential and commercial swimming pools, spas, and recreational water systems. Typical preventive dose is 5 – 15 ppm active quat (10 – 30 mL of BKC 50% per 1,000 L pool water) weekly. BKC works synergistically with chlorine, bromine, and salt-chlorinated systems — particularly at elevated pH where chlorine alone is less effective.",
  },
  {
    question: "Can BKC be used in oilfield biocide programs?",
    answer:
      "Yes. BKC is used as a biocide for microbial control in oilfield produced water injection systems, drilling fluids, and downhole biocide programs. Typical injection rate is 50 – 200 ppm active quat in produced water for sulphate-reducing bacteria (SRB) control and biofilm prevention. It is compatible with most oilfield production chemistry and does not interfere with corrosion inhibitors or scale inhibitors.",
  },
  {
    question: "What is the difference between BKC and DDAC or CTAB?",
    answer:
      "All three are quaternary ammonium compounds (quats), but with different alkyl chain structures and biocidal profiles. BKC (Alkyl Dimethyl Benzyl Ammonium Chloride) — broad-spectrum, EPA-registered, cosmetic/pharma preservative. DDAC (Didecyl Dimethyl Ammonium Chloride) — better hard-water tolerance, alkaline cleaner additive. CTAB (Cetyl Trimethyl Ammonium Bromide) — primarily lab use, hair-care surfactant. See our /bkc-vs-ddac-vs-ctab comparison page for detailed chemistry.",
  },
];

export default function BKCUsesApplicationsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "BKC Uses & Applications", url: `${SITE_URL}/bkc-uses-applications` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <Breadcrumbs items={[
          { name: "Home", url: SITE_URL },
          { name: "BKC Uses & Applications", url: `${SITE_URL}/bkc-uses-applications` },
        ]} className="mb-6" />
              <SectionLabel>Application guide</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                Benzalkonium Chloride (BKC) Uses & Applications — Complete Guide
              </h1>
              <p className="text-secondary text-lg mt-6">
                Benzalkonium Chloride (BKC, ADBAC, CAS 8001-54-5) is the world&apos;s most widely used quaternary
                ammonium biocide and cationic surfactant. This guide covers every major application — hospital
                disinfection, food sanitation, swimming pool algicide, cosmetic and pharmaceutical preservation,
                cooling tower biocide, agricultural disinfection, wood preservation, textile antimicrobial finish,
                oilfield biocide, and phase-transfer catalysis. Use concentrations, regulatory references, and
                formulation guidance from the technical team at Vasudev Chemo Pharma.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button href="/contact" variant="primary">
                  Request a Quote
                </Button>
                <Button href="/product/benzalkonium-chloride-50" variant="secondary">
                  BKC 50% Product Page
                </Button>
                <Button href="/product/benzalkonium-chloride-80" variant="secondary">
                  BKC 80% Product Page
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Application sections */}
        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-4" id="hospital">1. Hospital & Clinical Surface Disinfection</h2>
            <p className="text-secondary mb-3">
              <strong>Use concentration:</strong> 0.1% – 0.4% active quat (1,000 – 4,000 ppm)
            </p>
            <p className="text-secondary mb-6">
              BKC is the active ingredient in most quaternary-ammonium-based hospital surface disinfectants worldwide.
              The cationic ADBAC binds to negatively charged microbial membranes, disrupts the lipid bilayer, and
              inactivates gram-positive and gram-negative bacteria, fungi, yeasts, and enveloped viruses (including
              SARS-CoV-2, MRSA, C. difficile, VRE, Pseudomonas). The US EPA&apos;s List N includes hundreds of
              BKC-based products. Validated under EN 1276 (bactericidal), EN 1650 (fungicidal), EN 14476 (virucidal).
            </p>

            <h2 className="font-heading text-h3 text-primary mb-4" id="food-contact">2. Food and Beverage Industry CIP/COP Sanitation</h2>
            <p className="text-secondary mb-3">
              <strong>Use concentration:</strong> 200 ppm active quat maximum (no-rinse food-contact)
            </p>
            <p className="text-secondary mb-6">
              BKC is approved as a no-rinse food-contact surface sanitiser under FDA 21 CFR 178.1010 at maximum
              200 ppm active quat. Used in dairy plants, breweries, soft-drink bottlers, meat and poultry processors,
              and food packaging facilities for clean-in-place (CIP) and clean-out-of-place (COP) sanitation cycles.
              Effective against Listeria monocytogenes, Salmonella, E. coli O157:H7, and Pseudomonas spp. — the main
              pathogens of concern in food processing.
            </p>

            <h2 className="font-heading text-h3 text-primary mb-4" id="pool-water">3. Swimming Pool, Spa, and Recreational Water</h2>
            <p className="text-secondary mb-3">
              <strong>Use concentration:</strong> 5 – 15 ppm active quat (preventive); 30 – 50 ppm (algae remediation)
            </p>
            <p className="text-secondary mb-6">
              BKC 50% is widely used as an algicide and supplementary sanitiser in residential and commercial
              swimming pools, spas, fountains, and decorative water features. It works synergistically with chlorine,
              bromine, and salt-chlorinated systems — especially at elevated pH where chlorine alone is less effective.
              BKC is non-foaming at recommended pool concentrations and does not affect pH significantly. Effective
              against algae (chlorella, spirogyra, anabaena), Pseudomonas, and chlorine-resistant biofilm.
            </p>

            <h2 className="font-heading text-h3 text-primary mb-4" id="cosmetic">4. Cosmetic Preservation (INCI: Benzalkonium Chloride)</h2>
            <p className="text-secondary mb-3">
              <strong>Use concentration:</strong> 0.1% active (rinse-off) / 0.05% active (leave-on) — Cosmetics Europe Annex V
            </p>
            <p className="text-secondary mb-6">
              BKC is INCI-listed and approved by Cosmetics Europe as a cosmetic preservative. Used in hair conditioners,
              mouthwashes, shampoos, leave-on personal-care products, and as a cationic conditioning agent in 2-in-1
              shampoo systems. The dual functionality (preservation + conditioning) makes BKC unusually cost-effective
              for cosmetic formulators. Compatible with cationic conditioning polymers (Polyquat-7, Polyquat-10,
              behentrimonium chloride).
            </p>

            <h2 className="font-heading text-h3 text-primary mb-4" id="pharmaceutical">5. Pharmaceutical Preservation (USP/BP/EP/IP/JP)</h2>
            <p className="text-secondary mb-3">
              <strong>Use concentration:</strong> 0.001% – 0.01% active in finished pharmaceutical product
            </p>
            <p className="text-secondary mb-6">
              BKC is the most widely used pharmaceutical preservative — appearing as a compendial monograph in USP, NF,
              BP, EP (Ph. Eur.), IP (Indian Pharmacopoeia), and JP (Japanese Pharmacopoeia). Used in eye drops, nasal
              sprays, contact lens solutions, skin antiseptics, and topical antimicrobial products. Vasudev Chemo
              Pharma&apos;s GMP-certified BKC 50% and 80% are supplied to pharmaceutical OEMs with full COA, SDS, TDS,
              GMP certificate, and stability data suitable for USFDA / CDSCO / MHRA / EMA regulatory submissions.
            </p>

            <h2 className="font-heading text-h3 text-primary mb-4" id="cooling-tower">6. Cooling Tower, HVAC, and Industrial Water Treatment</h2>
            <p className="text-secondary mb-3">
              <strong>Use concentration:</strong> 50 – 200 ppm active quat (slug dose / shock dose)
            </p>
            <p className="text-secondary mb-6">
              BKC controls Legionella pneumophila, sulphate-reducing bacteria (SRB), and biofilm in industrial cooling
              towers, HVAC chillers, and recirculating water systems. The HSE ACOP L8 (UK), ASHRAE 188 (US), and EU
              equivalent standards specify routine slug-dose biocide programs. Used in datacenter cooling, hospital
              HVAC, food-plant cooling, and oilfield produced-water injection.
            </p>

            <h2 className="font-heading text-h3 text-primary mb-4" id="agricultural">7. Agricultural & Veterinary Disinfection</h2>
            <p className="text-secondary mb-3">
              <strong>Use concentration:</strong> 0.2% – 1.0% active quat
            </p>
            <p className="text-secondary mb-6">
              BKC is the cornerstone biocide active in agricultural and veterinary disinfection — poultry house
              pre-stocking decontamination, dairy farm udder hygiene, hatchery foot-baths, greenhouse soil-bed
              sterilisation, and equipment sanitisation for livestock biosecurity zones. Effective against Salmonella,
              E. coli, Campylobacter, avian influenza, and most poultry/dairy pathogens.
            </p>

            <h2 className="font-heading text-h3 text-primary mb-4" id="wood">8. Wood Preservation</h2>
            <p className="text-secondary mb-3">
              <strong>Use concentration:</strong> 0.5% – 2% active quat (surface-spray or pressure-treatment)
            </p>
            <p className="text-secondary mb-6">
              BKC is used in wood preservation against fungal decay, mould, and surface mildew. Applied as a
              surface-spray treatment for log preservation, outdoor furniture, and exterior wood products, or as part
              of pressure-treatment carrier solutions for utility poles and lumber. Compatible with most wood-treatment
              chemistry including copper-based preservatives.
            </p>

            <h2 className="font-heading text-h3 text-primary mb-4" id="textile">9. Textile Antimicrobial Finish</h2>
            <p className="text-secondary mb-3">
              <strong>Use concentration:</strong> 0.05% – 0.2% on dry fabric weight
            </p>
            <p className="text-secondary mb-6">
              BKC is widely used as a textile antimicrobial finish on hospital scrubs, sportswear, military uniforms,
              and antimicrobial bed linen. Applied via pad-bath at 0.5% – 1% active in bath, with pickup yielding
              0.05% – 0.2% on dry fabric weight. Provides durable antimicrobial protection through 30+ wash cycles
              when properly applied. Also functions as a cationic softener.
            </p>

            <h2 className="font-heading text-h3 text-primary mb-4" id="oilfield">10. Oilfield Biocide for Microbial Control</h2>
            <p className="text-secondary mb-3">
              <strong>Use concentration:</strong> 50 – 200 ppm active quat in produced water
            </p>
            <p className="text-secondary mb-6">
              BKC is used as a biocide for microbial control in oilfield produced water injection systems, drilling
              fluids, completion fluids, and downhole biocide programs. Effective against sulphate-reducing bacteria
              (SRB), acid-producing bacteria (APB), and biofilm-forming organisms that cause microbially-influenced
              corrosion (MIC) in pipelines and water injection systems. Compatible with most oilfield production
              chemistry — corrosion inhibitors, scale inhibitors, demulsifiers.
            </p>

            <h2 className="font-heading text-h3 text-primary mb-4" id="catalyst">11. Phase-Transfer Catalyst in Fine-Chemical Synthesis</h2>
            <p className="text-secondary mb-3">
              <strong>Use concentration:</strong> 1% – 10% as catalyst (mol % of starting material)
            </p>
            <p className="text-secondary mb-6">
              BKC is used as a phase-transfer catalyst (PTC) in fine-chemical and pharmaceutical synthesis — enabling
              reactions between organic and aqueous phases. Common applications include nucleophilic substitution
              reactions, oxidation reactions, and N-alkylation reactions where the cationic quat carries the anion
              from the aqueous phase into the organic phase. Often used as an alternative to TBAB or TBAH for
              cost-sensitive PTC applications.
            </p>

            <h2 className="font-heading text-h3 text-primary mb-4" id="industrial-cleaning">12. Industrial & Institutional (I&amp;I) Cleaning</h2>
            <p className="text-secondary mb-3">
              <strong>Use concentration:</strong> 0.1% – 0.5% active quat in finished product
            </p>
            <p className="text-secondary mb-6">
              BKC is widely used in industrial and institutional cleaning concentrates — floor disinfectants,
              hard-surface sanitisers, washroom cleaners, and laundry sanitiser additives. Compatible with nonionic
              and amphoteric surfactant systems but INCOMPATIBLE with anionic surfactants. Provides both detergency
              and antimicrobial action in a single chemistry.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-surface">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <details key={idx} className="border border-border rounded p-4">
                  <summary className="font-semibold cursor-pointer">{faq.question}</summary>
                  <p className="text-secondary mt-3">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h3 text-primary mb-4">Ready to Source BKC for Your Application?</h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Vasudev Chemo Pharma manufactures Benzalkonium Chloride 50% and 80% in Industrial / Technical,
              Cosmetic (CTFA-compliant), and Disinfectant grades from our ISO 9001:2015, GMP, and Halal certified
              facility in Gujarat, India. Direct supply to disinfectant brands, sanitiser blenders, cosmetic
              preservation houses, water-treatment chemical companies, and pharmaceutical OEMs across 30+ countries.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact" variant="primary">Request a Quote</Button>
              <Link href="/benzalkonium-chloride-50-vs-80" className="text-link">
                BKC 50% vs 80% Comparison →
              </Link>
              <Link href="/bkc-vs-ddac-vs-ctab" className="text-link">
                BKC vs DDAC vs CTAB Comparison →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
