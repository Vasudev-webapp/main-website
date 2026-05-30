import type { Metadata } from "next";
import { applyPageMetaOverride } from "@/lib/seo/page-meta-overrides";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import {
  BKC_CORE_KEYWORDS,
  BKC_APPLICATIONS_KEYWORDS,
  mergeKeywordClusters,
} from "@/lib/seo/keyword-clusters";

const SITE_URL = "https://www.vasudevchemopharma.com";

export const metadata: Metadata = applyPageMetaOverride("/bkc-vs-ddac-vs-ctab", {
  title: "BKC vs DDAC vs CTAB — Quaternary Ammonium Compound Comparison | Vasudev Chemo Pharma",
  description:
    "Detailed chemistry, biocidal-spectrum, and application comparison of three major quaternary ammonium compounds: Benzalkonium Chloride (BKC, ADBAC), Didecyl Dimethyl Ammonium Chloride (DDAC), and Cetyl Trimethyl Ammonium Bromide (CTAB). Choose the right quat for hospital disinfectant, food sanitiser, pool algicide, or cosmetic preservation.",
  keywords: mergeKeywordClusters(
    BKC_CORE_KEYWORDS,
    BKC_APPLICATIONS_KEYWORDS,
    [
      "BKC vs DDAC",
      "BKC vs CTAB",
      "BKC vs DDAC vs CTAB",
      "benzalkonium chloride vs DDAC",
      "benzalkonium chloride vs cetrimonium",
      "ADBAC vs DDAC vs CTAB",
      "quaternary ammonium compound comparison",
      "QAC selection guide disinfectant",
      "didecyl dimethyl ammonium chloride manufacturer",
      "DDAC supplier india",
      "CTAB cetyl trimethyl ammonium bromide manufacturer",
      "cetrimonium bromide manufacturer",
      "which quat is best for hospital disinfectant",
      "which quat is best for hard water",
      "quat alkyl chain comparison",
      "benzyl group vs alkyl group quat",
    ]
  ),
  alternates: { canonical: `${SITE_URL}/bkc-vs-ddac-vs-ctab` },
  openGraph: {
    title: "BKC vs DDAC vs CTAB — Quaternary Ammonium Compound Comparison",
    description:
      "Detailed chemistry, biocidal-spectrum, and application comparison of three major quaternary ammonium compounds. Decision guide for disinfectant formulators.",
    url: `${SITE_URL}/bkc-vs-ddac-vs-ctab`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "BKC vs DDAC vs CTAB — Quat Comparison Guide",
    description:
      "Choose the right quaternary ammonium compound — BKC, DDAC, or CTAB. By Vasudev Chemo Pharma.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "What is the main difference between BKC, DDAC, and CTAB?",
    answer:
      "All three are quaternary ammonium compounds (QACs / quats), but with different alkyl chain structures. BKC (Alkyl Dimethyl Benzyl Ammonium Chloride) — has a benzyl group + variable alkyl chain (C₈–C₁₈), broad-spectrum, EPA-registered for hospital disinfection. DDAC (Didecyl Dimethyl Ammonium Chloride) — has two C₁₀ alkyl chains (no benzyl), better hard-water tolerance. CTAB (Cetyl Trimethyl Ammonium Bromide) — single C₁₆ alkyl + bromide counter-ion, primarily used in laboratory and hair-care applications.",
  },
  {
    question: "Which quat is best for hospital surface disinfection?",
    answer:
      "BKC is the global standard for hospital surface disinfection. The US EPA's List N for SARS-CoV-2 includes hundreds of BKC-based products. BKC's broad-spectrum efficacy (gram-positive, gram-negative bacteria, fungi, enveloped viruses), regulatory registrations (EPA, EU BPR PT 1/2/3/4, USP/BP/EP/IP/JP), and decades of clinical-use track record make it the first-choice quat for hospital and clinical surface disinfectants.",
  },
  {
    question: "When should I use DDAC instead of BKC?",
    answer:
      "Choose DDAC when hard-water tolerance is critical or when alkaline cleaner formulation requires a quat that performs in pH 9 – 12 conditions. DDAC has better calcium/magnesium tolerance than BKC and is preferred in industrial alkaline cleaners and food-plant sanitation where water hardness is a concern. DDAC is also commonly blended with BKC in 'twin-chain' quat disinfectants for enhanced biofilm activity.",
  },
  {
    question: "What is CTAB used for?",
    answer:
      "CTAB (Cetyl Trimethyl Ammonium Bromide, CAS 57-09-0) is primarily used in laboratory applications — DNA / RNA extraction protocols (CTAB extraction method), electrophoresis buffers, and electron microscopy sample preparation. In personal care, CTAB is used as a cationic surfactant in some hair-care formulations. It is NOT typically used as a hospital disinfectant active substance — its biocidal spectrum is narrower than BKC, and the bromide counter-ion increases cost.",
  },
  {
    question: "Are BKC, DDAC, and CTAB compatible with each other in formulations?",
    answer:
      "Yes — all three are cationic quats and are mutually compatible. They are commonly blended together to broaden the biocidal spectrum and improve performance. BKC + DDAC 'twin-chain' blends are particularly common in hospital disinfectants. However, ALL THREE are INCOMPATIBLE with anionic surfactants (LABSA, SLES, SLS, soaps) and ionic chelants (anionic EDTA species). Mixing cationic quats with anionics destroys biocidal activity.",
  },
  {
    question: "Does Vasudev Chemo Pharma manufacture DDAC and CTAB in addition to BKC?",
    answer:
      "Currently, Vasudev Chemo Pharma manufactures BKC 50% and BKC 80% as our flagship cationic surfactant / quaternary ammonium biocide products. We can source DDAC and CTAB on a project basis for customers who require single-source supply for multi-quat disinfectant blends. Contact our technical team for project-based DDAC and CTAB sourcing.",
  },
  {
    question: "What is the EPA registration status of each quat?",
    answer:
      "BKC: registered active substance under EPA PC Code 069105 — included in EPA List N for SARS-CoV-2. DDAC: registered active substance under EPA PC Code 069149 — also included in EPA List N. CTAB: limited disinfectant registrations; primarily used as a laboratory reagent and personal-care surfactant rather than as a registered EPA antimicrobial active.",
  },
  {
    question: "What are the different chain lengths used in BKC?",
    answer:
      "BKC is a mixture of alkyl chains C₈ – C₁₈ — typically with C₁₂ (dodecyl) being the most active biocide chain length, supported by C₁₄ (tetradecyl) and C₁₆ (hexadecyl). Vasudev Chemo Pharma's typical alkyl distribution is C₁₂ 40-50% / C₁₄ 30-40% / C₁₆ 10-20%, matching the global formulation reference standard used by EPA-registered disinfectant brands. Different alkyl distributions are available on request for specialised applications.",
  },
];

export default function BKCvsDDACvsCTABPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "BKC vs DDAC vs CTAB", url: `${SITE_URL}/bkc-vs-ddac-vs-ctab` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionLabel>Chemistry comparison</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                BKC vs DDAC vs CTAB — Quaternary Ammonium Compound Comparison
              </h1>
              <p className="text-secondary text-lg mt-6">
                A detailed chemistry, biocidal-spectrum, regulatory, and application comparison of the three major
                quaternary ammonium compounds used in disinfectant, sanitiser, and cosmetic-preservation
                formulations. Decision framework for choosing the right quat for hospital disinfection, food
                sanitation, swimming pool algicide, cooling-tower biocide, or laboratory applications.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button href="/contact" variant="primary">Request a Quote</Button>
                <Button href="/product/benzalkonium-chloride-50" variant="secondary">View BKC 50%</Button>
                <Button href="/product/benzalkonium-chloride-80" variant="secondary">View BKC 80%</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-16 bg-surface">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h3 text-primary mb-8">Comparison Matrix</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="py-3 px-3 font-semibold">Attribute</th>
                    <th className="py-3 px-3 font-semibold">BKC (ADBAC)</th>
                    <th className="py-3 px-3 font-semibold">DDAC</th>
                    <th className="py-3 px-3 font-semibold">CTAB</th>
                  </tr>
                </thead>
                <tbody className="text-secondary">
                  <tr className="border-b border-border">
                    <td className="py-3 px-3 font-medium">Full chemical name</td>
                    <td className="py-3 px-3">Alkyl Dimethyl Benzyl Ammonium Chloride</td>
                    <td className="py-3 px-3">Didecyl Dimethyl Ammonium Chloride</td>
                    <td className="py-3 px-3">Cetyl Trimethyl Ammonium Bromide</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-3 font-medium">CAS Number</td>
                    <td className="py-3 px-3">8001-54-5</td>
                    <td className="py-3 px-3">7173-51-5</td>
                    <td className="py-3 px-3">57-09-0</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-3 font-medium">Counter-ion</td>
                    <td className="py-3 px-3">Chloride (Cl⁻)</td>
                    <td className="py-3 px-3">Chloride (Cl⁻)</td>
                    <td className="py-3 px-3">Bromide (Br⁻)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-3 font-medium">Alkyl chain structure</td>
                    <td className="py-3 px-3">Benzyl + variable C₈–C₁₈ alkyl</td>
                    <td className="py-3 px-3">Two C₁₀ (decyl) alkyl chains</td>
                    <td className="py-3 px-3">Single C₁₆ (cetyl/hexadecyl) chain</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-3 font-medium">Form</td>
                    <td className="py-3 px-3">Aqueous solution (50% / 80%)</td>
                    <td className="py-3 px-3">Aqueous solution (50% / 80%)</td>
                    <td className="py-3 px-3">White crystalline powder (technical grade ≥ 99%)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-3 font-medium">Antibacterial spectrum</td>
                    <td className="py-3 px-3">Broad: gram+, gram-, fungi, viruses</td>
                    <td className="py-3 px-3">Broad: similar to BKC</td>
                    <td className="py-3 px-3">Limited: primarily gram+ bacteria</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-3 font-medium">Hard-water tolerance</td>
                    <td className="py-3 px-3">Moderate (200 ppm CaCO₃)</td>
                    <td className="py-3 px-3">Excellent (400+ ppm CaCO₃)</td>
                    <td className="py-3 px-3">Moderate</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-3 font-medium">Alkaline pH tolerance</td>
                    <td className="py-3 px-3">Stable pH 4 – 10</td>
                    <td className="py-3 px-3">Stable pH 4 – 12 (better in alkaline)</td>
                    <td className="py-3 px-3">Stable pH 4 – 10</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-3 font-medium">EPA PC Code</td>
                    <td className="py-3 px-3">069105 (registered)</td>
                    <td className="py-3 px-3">069149 (registered)</td>
                    <td className="py-3 px-3">Limited registrations</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-3 font-medium">EPA List N (COVID)</td>
                    <td className="py-3 px-3">Yes — many products</td>
                    <td className="py-3 px-3">Yes — many products</td>
                    <td className="py-3 px-3">Limited</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-3 font-medium">FDA 21 CFR food contact</td>
                    <td className="py-3 px-3">Yes (max 200 ppm)</td>
                    <td className="py-3 px-3">Yes (max 400 ppm)</td>
                    <td className="py-3 px-3">No</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-3 font-medium">USP / BP / EP monograph</td>
                    <td className="py-3 px-3">Yes (compendial preservative)</td>
                    <td className="py-3 px-3">Limited</td>
                    <td className="py-3 px-3">Yes (lab reagent grade)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-3 font-medium">Cosmetic INCI</td>
                    <td className="py-3 px-3">Benzalkonium Chloride (Annex V)</td>
                    <td className="py-3 px-3">Didecyldimonium Chloride</td>
                    <td className="py-3 px-3">Cetrimonium Bromide</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-3 font-medium">Primary applications</td>
                    <td className="py-3 px-3">Hospital disinfectant, food sanitiser, pool algicide, cosmetic/pharma preservative</td>
                    <td className="py-3 px-3">Industrial alkaline cleaner, hard-water sanitiser, twin-chain disinfectant</td>
                    <td className="py-3 px-3">DNA extraction, lab reagent, hair-care surfactant</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-3 font-medium">Typical use concentration</td>
                    <td className="py-3 px-3">0.1% – 0.4% active</td>
                    <td className="py-3 px-3">0.1% – 0.5% active</td>
                    <td className="py-3 px-3">0.05% – 0.5% active</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-3 font-medium">Cost relative to BKC</td>
                    <td className="py-3 px-3">Baseline (most cost-effective)</td>
                    <td className="py-3 px-3">~1.2× BKC (chloride, twin-chain)</td>
                    <td className="py-3 px-3">~3 – 5× BKC (bromide, single-chain)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-medium">Vasudev product</td>
                    <td className="py-3 px-3">BKC 50% (VCP-SFC-0005), BKC 80% (VCP-SFC-0006)</td>
                    <td className="py-3 px-3">Project-based sourcing</td>
                    <td className="py-3 px-3">Project-based sourcing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Decision sections */}
        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">Choose BKC if you need…</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6 mb-12">
              <li>Hospital, clinical, or healthcare surface disinfectant active — EPA List N for SARS-CoV-2</li>
              <li>Food-contact no-rinse sanitiser — FDA 21 CFR 178.1010 at max 200 ppm</li>
              <li>Cosmetic preservative with INCI declaration — Cosmetics Europe Annex V approved</li>
              <li>Pharmaceutical preservative — eye drops, nasal sprays, topical antiseptics (USP/NF/BP/EP/IP/JP)</li>
              <li>Swimming pool algicide and recreational water sanitiser</li>
              <li>Cosmetic conditioning agent in 2-in-1 shampoo (dual function: preservative + cationic conditioner)</li>
              <li>Most cost-effective broad-spectrum quat for general industrial cleaning concentrates</li>
            </ul>

            <h2 className="font-heading text-h3 text-primary mb-6">Choose DDAC if you need…</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6 mb-12">
              <li>Hard-water tolerance &gt; 300 ppm CaCO₃ — for industrial alkaline cleaners</li>
              <li>Performance at pH 10 – 12 in alkaline degreaser concentrates</li>
              <li>Twin-chain quat in BKC + DDAC blends for enhanced biofilm activity</li>
              <li>Fast-kill against gram-negative bacteria in food-processing plant sanitation</li>
              <li>FDA 21 CFR food-contact sanitiser at higher use concentration (up to 400 ppm)</li>
            </ul>

            <h2 className="font-heading text-h3 text-primary mb-6">Choose CTAB if you need…</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6 mb-12">
              <li>DNA / RNA extraction (CTAB extraction protocol) — standard molecular biology lab reagent</li>
              <li>Electrophoresis buffer additive for protein and nucleic acid analysis</li>
              <li>Electron microscopy sample preparation (negative staining)</li>
              <li>Hair-care cationic surfactant where INCI &lsquo;Cetrimonium Bromide&rsquo; is required</li>
              <li>Specialised academic / industrial research applications</li>
            </ul>

            <h2 className="font-heading text-h3 text-primary mb-6">Twin-Chain Quat Blends (BKC + DDAC)</h2>
            <p className="text-secondary mb-4">
              Many of the highest-performance hospital disinfectants on the market combine BKC and DDAC in a
              &ldquo;twin-chain&rdquo; quat blend — typically a 4:1 to 1:1 ratio of BKC to DDAC. This combination:
            </p>
            <ul className="text-secondary space-y-2 list-disc pl-6 mb-6">
              <li>Broadens the biocidal spectrum across gram-positive, gram-negative, fungi, and biofilm</li>
              <li>Improves hard-water tolerance over BKC alone</li>
              <li>Reduces microbial resistance development vs single-quat formulations</li>
              <li>Enhances activity against Pseudomonas and chlorine-resistant biofilm bacteria</li>
              <li>Shorter contact time required for EN 1276 / EN 14476 efficacy validation</li>
            </ul>
            <p className="text-secondary mb-12">
              For BKC + DDAC twin-chain disinfectant formulators, Vasudev Chemo Pharma supplies the BKC 50%
              and BKC 80% components and can source DDAC on a project basis to deliver a complete twin-chain
              quat package from a single Indian manufacturer.
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
            <h2 className="font-heading text-h3 text-primary mb-4">Source Quaternary Ammonium Compounds from a Single Indian Manufacturer</h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Vasudev Chemo Pharma manufactures BKC 50% and BKC 80% direct from our ISO 9001:2015, GMP, and
              Halal certified facility in Gujarat, India. For DDAC, CTAB, or twin-chain quat blends, we offer
              project-based sourcing to deliver a complete cationic biocide package from a single supply partner.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact" variant="primary">Request a Quote</Button>
              <Link href="/benzalkonium-chloride-50-vs-80" className="text-link">
                BKC 50% vs 80% Comparison →
              </Link>
              <Link href="/bkc-uses-applications" className="text-link">
                All BKC Applications →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
