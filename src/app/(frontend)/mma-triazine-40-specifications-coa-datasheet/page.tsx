import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import FAQSchema from "@/components/seo/FAQSchema";
import FaqAccordion from "@/components/seo/FaqAccordion";
import { applyPageMetaOverride } from "@/lib/seo/page-meta-overrides";
import { mergeKeywordClusters } from "@/lib/seo/keyword-clusters";

const SITE_URL = "https://www.vasudevchemopharma.com";
const PATH = "/mma-triazine-40-specifications-coa-datasheet";
const MMA_URL = "/product/mma-triazine-40";
const MEA_URL = "/product/mea-triazine-78-h2s-scavenger";

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "MMA Triazine 40% Specifications, COA & Datasheet — CAS 108-74-7 | Vasudev Chemo Pharma",
  description:
    "MMA Triazine 40% (CAS 108-74-7) technical specifications: active content ≥40%, pH 9.5–11.5, specific gravity 1.05–1.10, flash point >93°C. Certificate of Analysis (COA), SDS and datasheet from an ISO 9001:2015 manufacturer.",
  keywords: mergeKeywordClusters([
    "mma triazine 40 specifications",
    "mma triazine coa",
    "mma triazine datasheet",
    "mma triazine tds",
    "mma triazine 40 technical data",
    "monomethylamine triazine specification",
    "mma triazine cas 108-74-7 properties",
    "mma triazine active content",
    "mma triazine sds msds",
    "mma triazine h2s scavenger spec sheet",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "MMA Triazine 40% Specifications, COA & Datasheet",
    description:
      "Full technical specification for MMA Triazine 40% (CAS 108-74-7) with COA and SDS from an ISO 9001:2015 manufacturer in India.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MMA Triazine 40% Specifications & COA",
    description:
      "Active ≥40%, pH 9.5–11.5, SG 1.05–1.10, flash >93°C. MMA Triazine 40% (CAS 108-74-7) datasheet.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "What is the active content of MMA Triazine 40%?",
    answer:
      "MMA Triazine 40% has a minimum active content of 40%. The active species is the methyl-substituted (monomethylamine-based) hexahydrotriazine that reacts with hydrogen sulphide. The 40% grade balances scavenging capacity with a manageable viscosity and freezing point for field handling.",
  },
  {
    question: "What are the key physical properties?",
    answer:
      "MMA Triazine 40% is a clear to pale yellow liquid with a mild amine odour. Typical properties are: pH (1% solution) 9.5–11.5, specific gravity at 25°C of 1.05–1.10, fully miscible in water, flash point above 93°C, and freezing point below −10°C. Exact values for each lot are recorded on the Certificate of Analysis.",
  },
  {
    question: "What is a Certificate of Analysis (COA) and do you provide one?",
    answer:
      "A COA is a batch-specific document that records the measured values of the key specification parameters — active content, pH, specific gravity, appearance and so on — for the exact lot you receive. Vasudev Chemo Pharma issues a COA with every shipment of MMA Triazine 40%, tying the product to a traceable production batch.",
  },
  {
    question: "What is the CAS and HS code for MMA Triazine 40%?",
    answer:
      "The CAS number is 108-74-7 and the export HS code is 29336990. These identify the monomethylamine triazine chemistry and its customs classification, and both appear on the datasheet and export documentation.",
  },
  {
    question: "Is a Safety Data Sheet (SDS) available?",
    answer:
      "Yes. An SDS is provided with every order. MMA Triazine 40% is classified as an irritant (GHS07, signal word ‘Warning’) with hazard statements H315 (causes skin irritation) and H319 (causes serious eye irritation). The SDS covers handling, PPE, storage, first aid and disposal.",
  },
  {
    question: "Can you supply MMA Triazine to a custom specification?",
    answer:
      "In many cases, yes. If your operation needs a specific active content, viscosity or freezing point, or a custom blend, our technical team can review the requirement and advise on a tailored formulation. Share your target parameters and application and we will confirm feasibility.",
  },
];

export default function MmaTriazine40SpecificationsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "MMA Triazine 40% Specifications, COA & Datasheet", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <Breadcrumbs items={[
          { name: "Home", url: SITE_URL },
          { name: "MMA Triazine 40% Specifications, COA & Datasheet", url: `${SITE_URL}${PATH}` },
        ]} className="mb-6" />
              <SectionLabel>Technical data</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                MMA Triazine 40% Specifications, COA &amp; Datasheet
              </h1>
              <p className="text-secondary text-lg mt-6">
                Before you dose or design around a hydrogen sulphide scavenger, you need reliable
                numbers. This page sets out the full technical specification for MMA Triazine 40%
                (Monomethylamine Triazine, CAS 108-74-7) as manufactured by Vasudev Chemo Pharma,
                explains what each parameter means for field use, and describes the Certificate of
                Analysis and Safety Data Sheet supplied with every batch.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: MMA Triazine 40% is a clear to pale yellow liquid, active content
                  &ge;40%, pH (1%) 9.5–11.5, specific gravity 1.05–1.10 at 25&deg;C, fully water
                  miscible, flash point &gt;93&deg;C, freezing point &lt;&minus;10&deg;C, CAS
                  108-74-7, HS 29336990. Every shipment includes a batch COA and SDS.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button href="/contact?product=mma-triazine-40" variant="primary">
                  Request COA &amp; Datasheet
                </Button>
                <Button href={MMA_URL} variant="secondary">
                  View MMA Triazine 40% Product
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Technical specification table
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="py-3 px-4 font-semibold">Parameter</th>
                    <th className="py-3 px-4 font-semibold">Typical value</th>
                  </tr>
                </thead>
                <tbody className="text-secondary">
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Chemical name</td>
                    <td className="py-3 px-4">Monomethylamine Triazine (MMA Triazine)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">CAS number</td>
                    <td className="py-3 px-4">108-74-7</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">HS code</td>
                    <td className="py-3 px-4">29336990</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Molecular formula / weight</td>
                    <td className="py-3 px-4">C₆H₁₅N₃ / 129.20 g/mol</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Appearance</td>
                    <td className="py-3 px-4">Clear to pale yellow liquid</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Active content</td>
                    <td className="py-3 px-4">&ge; 40%</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">pH (1% solution)</td>
                    <td className="py-3 px-4">9.5 – 11.5</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Specific gravity (25&deg;C)</td>
                    <td className="py-3 px-4">1.05 – 1.10</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Odour</td>
                    <td className="py-3 px-4">Mild amine</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Solubility in water</td>
                    <td className="py-3 px-4">Fully miscible</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Flash point</td>
                    <td className="py-3 px-4">&gt; 93&deg;C</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Freezing point</td>
                    <td className="py-3 px-4">&lt; &minus;10&deg;C</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-secondary text-sm mt-4">
              The same data is available on the{" "}
              <Link href={MMA_URL} className="text-link">
                MMA Triazine 40% product page
              </Link>
              , where you can also request a formal datasheet and COA.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">
              What each specification means in the field
            </h2>
            <p className="text-secondary leading-relaxed">
              Active content is the headline number because it drives scavenging capacity: a 40%
              active grade carries the reactive triazine that combines with hydrogen sulphide, so a
              known, consistent active level lets you calculate dosing and treated cost reliably. The
              alkaline pH (9.5–11.5 in a 1% solution) reflects the amine chemistry and is favourable
              for the scavenging reaction; it also informs materials selection and the need to keep
              the product away from strong acids. Specific gravity (1.05–1.10) matters for volumetric
              dosing pumps and for converting between litres and kilograms on your injection skid.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              Full water miscibility means MMA Triazine 40% disperses readily into aqueous and
              multiphase streams, supporting efficient contact with H2S. The high flash point (above
              93&deg;C) makes the product straightforward to store and transport without the
              constraints of a flammable liquid, while the low freezing point (below &minus;10&deg;C)
              gives good cold-weather handling and wide storage latitude. Together these properties
              describe a robust, field-friendly scavenger — but the values that matter for your batch
              are the measured figures on its Certificate of Analysis, not just the specification
              range.
            </p>

            <h2 className="font-heading text-h3 text-primary mb-6 mt-12">
              COA, SDS and quality assurance
            </h2>
            <p className="text-secondary leading-relaxed">
              A specification tells you what the product should be; a Certificate of Analysis tells you
              what your particular lot actually is. Vasudev Chemo Pharma manufactures MMA Triazine 40%
              under an ISO 9001:2015 quality system, and each batch is tested and released against the
              specification before dispatch. The COA that travels with your shipment records the
              measured active content, pH, specific gravity, appearance and other parameters for that
              exact lot, tied to a traceable batch number. Alongside it, the Safety Data Sheet covers
              GHS classification (irritant, GHS07, &ldquo;Warning&rdquo;, hazard statements H315 and
              H319), safe handling, personal protective equipment, storage, first aid and disposal.
              If your procurement or QA process needs the datasheet, COA template or SDS in advance,
              request them and we will provide the current documents so you can complete vendor
              qualification before your first order.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Using the specification in system design
            </h2>
            <p className="text-secondary leading-relaxed">
              A specification is most useful when it feeds directly into engineering decisions. The
              active content of ≥40% sets the scavenging capacity per litre and is the starting point
              for dose calculations and treated-cost estimates. The specific gravity of 1.05–1.10 lets
              you convert between the volumetric output of a metering pump and the mass of chemical
              dosed, which matters for accurate injection control and for reconciling consumption
              against invoiced quantity. The alkaline pH of 9.5–11.5 informs the selection of
              compatible wetted materials for pumps, seals, gaskets and tubing, and reminds designers
              to keep the product isolated from strong acids. Full water miscibility confirms the
              scavenger will disperse into aqueous and multiphase streams for efficient contact with
              hydrogen sulphide.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              The thermal data carry practical design consequences too. A flash point above 93&deg;C
              means MMA Triazine 40% is not handled as a flammable liquid, simplifying the electrical
              area classification and storage requirements around the injection skid. A freezing point
              below &minus;10&deg;C gives confidence that the product will remain pumpable across a wide
              range of ambient conditions, though for very cold climates it is still worth confirming
              heat-tracing or sheltered storage. When you design or retrofit a dosing system, treat the
              specification range as the envelope and the batch Certificate of Analysis as the exact
              working values — that way your pump sizing, materials and control set-points are anchored
              to real numbers. Our technical team is happy to review a proposed injection design against
              the specification before you build it.
            </p>
          </div>
        </section>

        <section className="py-16 bg-surface">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">Related Reading</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6">
              <li>
                <Link href={MMA_URL} className="text-link">
                  MMA Triazine 40% — full product page
                </Link>
              </li>
              <li>
                <Link href="/mma-triazine-40-cas-108-74-7-properties" className="text-link">
                  CAS 108-74-7 properties &amp; chemical identity
                </Link>
              </li>
              <li>
                <Link href="/mma-triazine-40-safety-handling-storage" className="text-link">
                  Safety, handling &amp; storage
                </Link>
              </li>
              <li>
                <Link href="/mma-triazine-40-dosage-injection-rate-guide" className="text-link">
                  Dosage &amp; injection rate guide
                </Link>
              </li>
              <li>
                <Link href="/mma-triazine-40-price-supplier-india" className="text-link">
                  Price &amp; supplier in India
                </Link>
              </li>
              <li>
                <Link href={MEA_URL} className="text-link">
                  MEA Triazine 78% — product page
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-8">Frequently Asked Questions</h2>
            <FaqAccordion items={faqs} />
          </div>
        </section>

        <section className="py-16 text-center bg-surface">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h3 text-primary mb-4">
              Need the datasheet, COA or SDS?
            </h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Request the current MMA Triazine 40% technical datasheet, Certificate of Analysis
              template and Safety Data Sheet for vendor qualification — direct from an ISO 9001:2015
              certified manufacturer in Gujarat, India.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact?product=mma-triazine-40" variant="primary">
                Request Documents
              </Button>
              <Link href={MMA_URL} className="text-link">
                View MMA Triazine 40% →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
