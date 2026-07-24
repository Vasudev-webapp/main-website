import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import FAQSchema from "@/components/seo/FAQSchema";
import { applyPageMetaOverride } from "@/lib/seo/page-meta-overrides";
import { mergeKeywordClusters } from "@/lib/seo/keyword-clusters";

const SITE_URL = "https://www.vasudevchemopharma.com";
const PATH = "/triazine-vs-nitrite-scavenger";
const MEA_URL = "/product/mea-triazine-78-h2s-scavenger";
const MMA_URL = "/product/mma-triazine-40";

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "Triazine vs Nitrite/Nitrate H2S Scavenger — Which to Use | Vasudev Chemo Pharma",
  description:
    "Compare triazine H2S scavengers with nitrite/nitrate (sodium nitrite) chemistries — reaction, sulfur deposition, tower fouling, cost and best-fit applications. Why many operators switch from nitrite to triazine. MEA & MMA triazine supply, global export.",
  keywords: mergeKeywordClusters([
    "triazine vs nitrite H2S scavenger",
    "sodium nitrite H2S scavenger",
    "nitrate H2S scavenger comparison",
    "triazine vs sodium nitrite",
    "H2S scavenger sulfur deposition",
    "contactor tower fouling nitrite",
    "nitrite vs triazine cost",
    "best H2S scavenger gas tower",
    "sulfa-check alternative triazine",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Triazine vs Nitrite/Nitrate H2S Scavenger — Which to Use",
    description:
      "Reaction, sulfur deposition, tower fouling, cost and best-fit — triazine vs nitrite/nitrate H2S scavengers.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Triazine vs Nitrite/Nitrate H2S Scavenger",
    description:
      "Compare triazine and nitrite/nitrate H2S scavenger chemistries by fouling, cost and application fit.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "What is the difference between triazine and nitrite H2S scavengers?",
    answer:
      "Triazine is an amine/formaldehyde-based scavenger that reacts with H2S to form water-soluble organic products. Nitrite (e.g. sodium nitrite) chemistries oxidise sulfide, but can precipitate elemental sulfur that deposits in towers and equipment. Triazine generally keeps by-products in solution, reducing solids clean-outs.",
  },
  {
    question: "Why do operators switch from nitrite to triazine?",
    answer:
      "A common driver is sulfur deposition: nitrite-based treatment in contactor towers can precipitate sulfur and deposits, requiring frequent tray removal, steam-cleaning and downtime. Switching to triazine often achieves the same H2S removal with less product and leaves the vessel free of solids, cutting labour and downtime.",
  },
  {
    question: "Is triazine more cost-effective than nitrite?",
    answer:
      "It depends on the duty, but field experience shows triazine can match nitrite performance with substantially less product in tower service, while avoiding the clean-out labour and downtime that nitrite deposition causes. Total cost of ownership — not just unit price — usually favours triazine for these applications.",
  },
  {
    question: "Are there cases where nitrite is still used?",
    answer:
      "Nitrite/nitrate chemistries are used in some water-treatment and souring-control contexts (e.g. nitrate to suppress sulfate-reducing bacteria). For non-regenerative H2S scavenging in gas and hydrocarbon streams, triazine is typically preferred for its cleaner by-product profile.",
  },
  {
    question: "Which triazine grade replaces a nitrite program?",
    answer:
      "MEA Triazine 78% gives high active content for cost-effective bulk treatment; MMA Triazine 40% is chosen where more soluble by-products further reduce solids in hot or continuous service. We can advise on grade and dose for your specific stream.",
  },
  {
    question: "Do you supply triazine to replace nitrite scavengers?",
    answer:
      "Yes. Vasudev Chemo Pharma manufactures MEA Triazine 78% and MMA Triazine 40% and exports globally with batch COA and application guidance for operators moving from nitrite to triazine H2S scavenging.",
  },
];

export default function TriazineVsNitriteScavengerPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Triazine vs Nitrite/Nitrate Scavenger", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <Breadcrumbs items={[
          { name: "Home", url: SITE_URL },
          { name: "Triazine vs Nitrite/Nitrate Scavenger", url: `${SITE_URL}${PATH}` },
        ]} className="mb-6" />
              <SectionLabel>Comparison guide</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                Triazine vs Nitrite/Nitrate H₂S Scavenger
              </h1>
              <p className="text-secondary text-lg mt-6">
                Triazine and nitrite/nitrate chemistries both remove hydrogen sulfide, but they behave
                very differently in the field — especially around sulfur deposition, tower fouling and
                clean-out cost. This brand-free comparison helps you choose.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: triazine reacts H₂S into water-soluble organic products and generally
                  keeps towers free of solids; nitrite chemistries can precipitate elemental sulfur
                  that fouls trays and forces steam clean-outs. For non-regenerative gas/hydrocarbon
                  scavenging, triazine usually wins on total cost and uptime.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button href="/contact" variant="primary">
                  Request a Quote
                </Button>
                <Button href={MEA_URL} variant="secondary">
                  View MEA Triazine 78%
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h3 text-primary mb-8">Side-by-Side</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="py-3 px-4 font-semibold">Factor</th>
                    <th className="py-3 px-4 font-semibold">Triazine (MEA/MMA)</th>
                    <th className="py-3 px-4 font-semibold">Nitrite / Nitrate</th>
                  </tr>
                </thead>
                <tbody className="text-secondary">
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Reaction / by-products</td>
                    <td className="py-3 px-4">Water-soluble organic products</td>
                    <td className="py-3 px-4">Can precipitate elemental sulfur</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Tower fouling / clean-out</td>
                    <td className="py-3 px-4">Low — vessel often stays clean</td>
                    <td className="py-3 px-4">High — sulfur deposits, steam-cleaning</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Chemical use for same removal</td>
                    <td className="py-3 px-4">Often lower</td>
                    <td className="py-3 px-4">Often higher</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Downtime / labour</td>
                    <td className="py-3 px-4">Reduced</td>
                    <td className="py-3 px-4">Frequent change-outs</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Best fit</td>
                    <td className="py-3 px-4">Non-regenerative gas/hydrocarbon scavenging</td>
                    <td className="py-3 px-4">Some water-treatment / souring control</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">Related Reading</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6">
              <li>
                <Link href="/triazine-vs-non-triazine-scavenger" className="text-link">
                  Triazine vs non-triazine scavengers
                </Link>
              </li>
              <li>
                <Link href="/triazine-injection-vs-contactor-tower" className="text-link">
                  Direct injection vs contactor tower
                </Link>
              </li>
              <li>
                <Link href="/mea-triazine-vs-mma-triazine" className="text-link">
                  MEA vs MMA triazine
                </Link>
              </li>
              <li>
                <Link href={MEA_URL} className="text-link">
                  MEA Triazine 78% — product page
                </Link>
              </li>
              <li>
                <Link href={MMA_URL} className="text-link">
                  MMA Triazine 40% — product page
                </Link>
              </li>
            </ul>
          </div>
        </section>

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

        <section className="py-16 text-center">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h3 text-primary mb-4">Moving from nitrite to triazine?</h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Vasudev Chemo Pharma supplies MEA Triazine 78% and MMA Triazine 40% with changeover and
              dosing guidance, batch COA, and global export from our ISO 9001:2015 certified facility
              in Gujarat, India.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact" variant="primary">
                Request a Quote
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
