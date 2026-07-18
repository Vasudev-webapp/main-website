import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import { applyPageMetaOverride } from "@/lib/seo/page-meta-overrides";
import { mergeKeywordClusters } from "@/lib/seo/keyword-clusters";
import { EDDM_SLUG } from "@/lib/seo/eddm-constants";

const SITE_URL = "https://www.vasudevchemopharma.com";
const PATH = "/eddm-grades-selection-guide";
const PRODUCT_URL = `/product/${EDDM_SLUG}`;

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "EDDM Grades 90% / 92% / 95% — Selection Guide (CAS 3586-55-8) | Vasudev Chemo Pharma",
  description:
    "How to choose the right EDDM (Ethylenedioxy dimethanol) grade — 90%, 92% or 95% active content — for metalworking fluids, in-can preservation, and H2S scavenging. Grade comparison table, COA parameters, packaging and dosage logic from an Indian manufacturer.",
  keywords: mergeKeywordClusters([
    "EDDM grades",
    "EDDM 90 percent",
    "EDDM 92 percent",
    "EDDM 95 percent",
    "EDDM active content",
    "EDDM purity grades",
    "which EDDM grade to buy",
    "EDDM grade selection",
    "ethylenedioxy dimethanol grades",
    "EDDM specification 90 92 95",
    "EDDM COA parameters",
    "EDDM total aldehyde content",
    "EDDM CAS 3586-55-8 grade",
    "EDDM manufacturer India",
    "EDDM grade for metalworking fluid",
    "EDDM grade for in-can preservation",
    "EDDM grade for H2S scavenging",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "EDDM Grades 90% / 92% / 95% — Selection Guide (CAS 3586-55-8)",
    description:
      "Pick the right EDDM active-content grade for metalworking fluids, coatings preservation, or H2S scavenging. Grade comparison, COA parameters, packaging and dosage guidance.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EDDM Grades 90% / 92% / 95% — Selection Guide",
    description:
      "Choose the right EDDM grade for your application — active content, COA, packaging and dosage logic.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "What is the difference between EDDM 90%, 92% and 95%?",
    answer:
      "All three are the same chemical — (ethylenedioxy)dimethanol, CAS 3586-55-8 — with active content as the primary difference. The 95% grade also carries tighter appearance and specification distinctions, and it is typically preferred where lower water content or higher active-per-kg dosing economy is required, such as concentrated oilfield H2S scavenger blends. EDDM 90% and 92% remain the standard commercial grades for most in-can preservation and metalworking-fluid applications.",
  },
  {
    question: "Which EDDM grade should I use for metalworking fluids?",
    answer:
      "For full-synthetic, semi-synthetic and emulsified metalworking fluids, EDDM 90–92% is the standard choice. It is neutral in pH, aluminium-compatible, non-corrosive to steel, and effective across pH 6–11 at typical in-use dosages of 0.10–0.30%. The higher-active 95% grade is only needed when you want to minimise added water in a concentrate.",
  },
  {
    question: "Which grade is best for H2S scavenging in oil and gas?",
    answer:
      "For non-triazine H2S scavenging, the 92% and 95% grades are generally preferred because higher active content means more scavenging capacity per litre injected and lower freight cost per kg of active. EDDM reacts with H2S at ambient temperature without forming salt precipitates or poisoning downstream catalysts.",
  },
  {
    question: "Does a higher EDDM grade mean better biocidal performance?",
    answer:
      "Not directly — biocidal performance depends on the in-use active concentration you dose, not the supplied grade. A higher grade simply contains more active per kilogram, so you dose slightly less product to reach the same in-use level. Choose the grade based on freight economics, water-content tolerance and formulation convenience, then set dosage to the target active concentration.",
  },
  {
    question: "What COA parameters should I check when buying EDDM?",
    answer:
      "Key certificate-of-analysis parameters are: active content (%), total aldehyde content (%), appearance (colourless to pale yellow liquid), pH of 1% aqueous solution (6.0–8.0), density at 20°C (1.180–1.200 g/ml), refractive index at 20°C (1.430–1.443), and flash point of the formulated product (>100°C). Every batch from Vasudev Chemo Pharma ships with a batch-specific COA.",
  },
  {
    question: "What packaging sizes are available for each EDDM grade?",
    answer:
      "All grades are available in 25 kg HDPE drums, 200 kg MS drums, and 1000 kg IBC tanks, with roughly 22 MT loading per 20-foot FCL. Packaging choice is independent of grade — select it by order volume, dosing infrastructure and shipping mode.",
  },
];

export default function EddmGradesSelectionGuidePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "EDDM Grades & Selection Guide", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionLabel>Buyer decision guide</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                EDDM Grades 90% / 92% / 95% — Which One Do You Need?
              </h1>
              <p className="text-secondary text-lg mt-6">
                A brand-free selection guide for (ethylenedioxy)dimethanol (EDDM, CAS 3586-55-8)
                across its three commercial active-content grades. Same chemical — active content is the
                primary difference, while the 95% grade also carries tighter appearance and specification
                distinctions and is preferred for lower-water or more concentrated applications. Use the
                logic below to pick the right grade for metalworking fluids, in-can preservation, or
                non-triazine H₂S scavenging.
              </p>
              {/* Direct-answer block for AEO */}
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: choose EDDM 90–92% for most preservation and metalworking-fluid
                  duties, and EDDM 95% when you need higher active-per-kg economy, lower water
                  content, or the tighter appearance/specification profile of the high-purity grade —
                  for example concentrated oilfield H₂S scavenger blends. For preservation and
                  metalworking-fluid duties, performance is set by your in-use dosage (0.10–0.30%),
                  not by the supplied grade alone; H₂S-scavenging duty is instead dosed to the
                  sulfide load and required contact time rather than a fixed percentage.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button href="/contact" variant="primary">
                  Request a Quote
                </Button>
                <Button href={PRODUCT_URL} variant="secondary">
                  View EDDM Product Page
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Grade comparison */}
        <section className="py-16 bg-surface">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h3 text-primary mb-8">Grade Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="py-3 px-4 font-semibold">Parameter</th>
                    <th className="py-3 px-4 font-semibold">EDDM 90%</th>
                    <th className="py-3 px-4 font-semibold">EDDM 92%</th>
                    <th className="py-3 px-4 font-semibold">EDDM 95%</th>
                  </tr>
                </thead>
                <tbody className="text-secondary">
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Active content</td>
                    <td className="py-3 px-4">≈90%</td>
                    <td className="py-3 px-4">≈92%</td>
                    <td className="py-3 px-4">≥95%</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Total aldehyde</td>
                    <td className="py-3 px-4">≥45%</td>
                    <td className="py-3 px-4">≥45%</td>
                    <td className="py-3 px-4">≥47%</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Appearance</td>
                    <td className="py-3 px-4" colSpan={2}>
                      Colourless to pale yellow liquid
                    </td>
                    <td className="py-3 px-4">Colourless liquid</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Typical best use</td>
                    <td className="py-3 px-4">In-can preservation, MWF</td>
                    <td className="py-3 px-4">MWF, coatings, H₂S blends</td>
                    <td className="py-3 px-4">Concentrated H₂S scavenger, low-water blends</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Active per kg shipped</td>
                    <td className="py-3 px-4">Baseline</td>
                    <td className="py-3 px-4">~2% more</td>
                    <td className="py-3 px-4">~5% more (best freight economy)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-secondary text-sm mt-4">
              Shared identity across all grades: CAS 3586-55-8 · EINECS 222-720-6 · molecular formula
              C₄H₁₀O₄ · molecular weight 122.12 g/mol.
            </p>
          </div>
        </section>

        {/* Decision logic */}
        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">Which Grade Do I Need?</h2>
            <ul className="text-secondary space-y-3 list-disc pl-6 mb-12">
              <li>
                <strong>Metalworking-fluid formulators</strong> — EDDM 90–92%. Neutral pH,
                aluminium-safe, non-corrosive, effective pH 6–11. See our{" "}
                <Link href="/eddm-metalworking-fluid-biocide" className="text-link">
                  EDDM metalworking-fluid biocide guide
                </Link>
                .
              </li>
              <li>
                <strong>Paint, coating and adhesive producers</strong> — EDDM 90–92% for in-can and
                headspace protection. See the{" "}
                <Link href="/eddm-in-can-preservative-coatings" className="text-link">
                  in-can preservative guide
                </Link>
                .
              </li>
              <li>
                <strong>Oilfield / gas-treatment buyers</strong> — EDDM 92–95% for maximum scavenging
                capacity per litre. See{" "}
                <Link href="/eddm-multiphase-h2s-scavenger" className="text-link">
                  EDDM as a multiphase H₂S scavenger
                </Link>
                .
              </li>
              <li>
                <strong>Unsure of dosage?</strong> Read the{" "}
                <Link href="/eddm-dosage-guide" className="text-link">
                  EDDM dosage &amp; use-level guide
                </Link>{" "}
                — grade choice and dosage together determine your in-use active level.
              </li>
            </ul>

            <h2 className="font-heading text-h3 text-primary mb-6">Packaging (All Grades)</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6 mb-12">
              <li>25 kg HDPE drums</li>
              <li>200 kg MS drums</li>
              <li>1000 kg IBC tanks</li>
              <li>≈22 MT per 20-foot FCL · custom packaging on request</li>
            </ul>

            <h2 className="font-heading text-h3 text-primary mb-6">
              Full Technical Data &amp; Related Reading
            </h2>
            <ul className="text-secondary space-y-2 list-disc pl-6">
              <li>
                <Link href="/eddm-cas-3586-55-8-properties" className="text-link">
                  EDDM CAS 3586-55-8 — properties &amp; specifications
                </Link>
              </li>
              <li>
                <Link href="/how-eddm-works-formaldehyde-donor" className="text-link">
                  How EDDM works — slow-release formaldehyde-donor mechanism
                </Link>
              </li>
              <li>
                <Link href="/eddm-price-supplier-india" className="text-link">
                  EDDM price &amp; supplier — India manufacturer &amp; bulk export
                </Link>
              </li>
              <li>
                <Link href={PRODUCT_URL} className="text-link">
                  EDDM (Ethylenedioxy)dimethanol — main product page
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
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
            <h2 className="font-heading text-h3 text-primary mb-4">
              Not sure which EDDM grade fits your process?
            </h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Vasudev Chemo Pharma manufactures EDDM (CAS 3586-55-8) in 90%, 92% and 95% grades at our
              ISO 9001:2015 certified facility in Gujarat, India, with batch-specific COA and global
              export in FOB, CIF and DDP terms. Tell us your application and we&apos;ll recommend the
              right grade and dosage.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact" variant="primary">
                Request a Quote
              </Button>
              <Link href={PRODUCT_URL} className="text-link">
                View EDDM Product Page →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
