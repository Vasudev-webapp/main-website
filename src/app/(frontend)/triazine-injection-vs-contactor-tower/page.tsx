import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import { applyPageMetaOverride } from "@/lib/seo/page-meta-overrides";
import { mergeKeywordClusters } from "@/lib/seo/keyword-clusters";

const SITE_URL = "https://www.vasudevchemopharma.com";
const PATH = "/triazine-injection-vs-contactor-tower";
const MEA_URL = "/product/mea-triazine-78-h2s-scavenger";
const MMA_URL = "/product/mma-triazine-40";

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "Triazine H2S Scavenger: Direct Injection vs Contactor Tower | Vasudev Chemo Pharma",
  description:
    "Direct injection vs contactor tower for triazine H2S scavenging — removal efficiency, chemical consumption, mixing (atomizers/static mixers), offshore weight/space, and cost. Choose the right application method for MEA/MMA triazine. Indian manufacturer, global supply.",
  keywords: mergeKeywordClusters([
    "triazine direct injection vs contactor tower",
    "H2S scavenger injection method",
    "contactor tower H2S scavenger",
    "triazine injection rate",
    "gas scavenging tower efficiency",
    "MEA triazine direct injection",
    "static mixer H2S scavenger injection",
    "H2S scavenger contact time",
    "triazine application method oil gas",
    "bubble tower H2S removal",
    "H2S scavenger removal efficiency",
    "triazine injection quill atomizer",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Triazine H2S Scavenger: Direct Injection vs Contactor Tower",
    description:
      "Compare direct injection and contactor-tower application of triazine H2S scavengers — efficiency, chemical use, mixing, offshore constraints and cost.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Triazine: Direct Injection vs Contactor Tower",
    description:
      "Removal efficiency, chemical consumption and offshore constraints for the two main triazine application methods.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "What is the difference between direct injection and a contactor tower for triazine?",
    answer:
      "Direct injection sprays triazine H2S scavenger straight into the gas or liquid stream (via a quill, atomizer, fog nozzle or static mixer), relying on in-line contact time. A contactor tower routes sour gas up through a column of liquid triazine so the H2S dissolves and reacts. The tower gives much longer contact time and higher removal efficiency; direct injection is simpler and lower-CAPEX.",
  },
  {
    question: "Which method removes more H2S?",
    answer:
      "A contactor tower is more efficient — removal can reach roughly 80% of theoretical scavenger capacity because of the extended gas–liquid contact, so it consumes less chemical per unit of H2S removed. Direct injection is typically less efficient (often around 40%) because contact time is limited, meaning more chemical is used to hit the same outlet spec.",
  },
  {
    question: "When should I use direct injection instead of a tower?",
    answer:
      "Use direct injection when you need a low-CAPEX, fast-to-deploy solution, have adequate line length/residence time for reaction, or are treating a pipeline or liquid stream. It is also preferred offshore or on skids where the size and weight of a contactor tower and its storage tanks are impractical.",
  },
  {
    question: "How do I improve direct-injection efficiency?",
    answer:
      "Maximize contact by using proper atomization (quills, fog nozzles), a static mixer downstream of the injection point, correct injection location, and enough residence time before the next separation step. Matching the right triazine grade and injection rate to the H2S load also improves scavenging and avoids over-treatment.",
  },
  {
    question: "Is MEA or MMA triazine better for contactor towers?",
    answer:
      "Both work in towers. MEA triazine 78% is the high-active workhorse for many gas and liquid duties. MMA triazine 40% is favoured where its more soluble reaction by-products reduce solids/scaling in the tower and downstream — useful for continuous, long-run or higher-temperature service. See our MEA vs MMA comparison for selection guidance.",
  },
  {
    question: "Does a contactor tower reduce operating cost?",
    answer:
      "Often yes. Because a tower removes more H2S per litre of scavenger, chemical consumption (a major OPEX line) drops significantly versus direct injection at the same outlet spec — frequently offsetting the higher upfront equipment cost over time. The trade-off is footprint, weight and maintenance (solids management).",
  },
];

export default function TriazineInjectionVsContactorTowerPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Triazine: Direct Injection vs Contactor Tower", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionLabel>Application method guide</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                Triazine H₂S Scavenger: Direct Injection vs Contactor Tower
              </h1>
              <p className="text-secondary text-lg mt-6">
                The two dominant ways to apply a triazine H₂S scavenger are direct injection into the
                stream and a liquid-filled contactor tower. The choice drives your removal efficiency,
                chemical consumption, footprint and cost. This guide compares both so you can pick the
                right method for MEA or MMA triazine.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: contactor towers deliver higher H₂S removal (up to ~80%) and lower
                  chemical use per unit removed, at the cost of size and weight. Direct injection is
                  lower-CAPEX and faster to deploy (typically ~40% efficiency) — best where contact
                  time is sufficient or space is limited (offshore/skids).
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
                    <th className="py-3 px-4 font-semibold">Direct Injection</th>
                    <th className="py-3 px-4 font-semibold">Contactor Tower</th>
                  </tr>
                </thead>
                <tbody className="text-secondary">
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Typical H₂S removal efficiency</td>
                    <td className="py-3 px-4">~40% of capacity</td>
                    <td className="py-3 px-4">Up to ~80% of capacity</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Chemical consumption</td>
                    <td className="py-3 px-4">Higher per unit H₂S</td>
                    <td className="py-3 px-4">Lower per unit H₂S</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">CAPEX</td>
                    <td className="py-3 px-4">Low (pump + quill/mixer)</td>
                    <td className="py-3 px-4">Higher (column + tanks)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Footprint / weight</td>
                    <td className="py-3 px-4">Minimal</td>
                    <td className="py-3 px-4">Large — poor fit offshore</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Key equipment</td>
                    <td className="py-3 px-4">Quill, atomizer/fog nozzle, static mixer</td>
                    <td className="py-3 px-4">Packed/tray column, storage tanks</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Best fit</td>
                    <td className="py-3 px-4">Pipelines, liquids, skids, offshore</td>
                    <td className="py-3 px-4">Fixed onshore gas plants, high H₂S load</td>
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
                <Link href="/how-h2s-scavengers-work" className="text-link">
                  How H₂S scavengers work
                </Link>
              </li>
              <li>
                <Link href="/mea-triazine-vs-mma-triazine" className="text-link">
                  MEA vs MMA triazine comparison
                </Link>
              </li>
              <li>
                <Link href="/spent-triazine-monitoring" className="text-link">
                  Spent triazine &amp; residual-amine monitoring
                </Link>
              </li>
              <li>
                <Link href={MEA_URL} className="text-link">
                  MEA Triazine 78% H₂S Scavenger — product page
                </Link>
              </li>
              <li>
                <Link href={MMA_URL} className="text-link">
                  MMA Triazine 40% (BTX-free) — product page
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
            <h2 className="font-heading text-h3 text-primary mb-4">
              Need help choosing an application method?
            </h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Vasudev Chemo Pharma supplies MEA Triazine 78% and MMA Triazine 40% with application
              and injection-rate guidance, batch COA, and global export from our ISO 9001:2015
              certified facility in Gujarat, India.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact" variant="primary">
                Request a Quote
              </Button>
              <Link href={MEA_URL} className="text-link">
                View MEA Triazine 78% →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
