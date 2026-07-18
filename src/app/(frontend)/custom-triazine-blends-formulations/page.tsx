import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import { applyPageMetaOverride } from "@/lib/seo/page-meta-overrides";
import { mergeKeywordClusters } from "@/lib/seo/keyword-clusters";

const SITE_URL = "https://www.vasudevchemopharma.com";
const PATH = "/custom-triazine-blends-formulations";
const MEA_URL = "/product/mea-triazine-78-h2s-scavenger";
const MMA_URL = "/product/mma-triazine-40";

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "Custom Triazine Blends & Winterized H2S Scavenger Formulations | Vasudev Chemo Pharma",
  description:
    "Custom triazine H2S scavenger blends — winterized (methanol/glycol) for low temperature, oil-soluble grades, and inhibitor-boosted formulations tuned to your stream, temperature range and H2S load. MEA & MMA triazine base. Indian manufacturer, global export.",
  keywords: mergeKeywordClusters([
    "custom triazine blend",
    "winterized H2S scavenger",
    "oil soluble triazine scavenger",
    "triazine methanol glycol blend",
    "low temperature H2S scavenger",
    "custom H2S scavenger formulation",
    "triazine freeze point depressant",
    "tailored triazine scavenger",
    "H2S scavenger private label",
    "triazine performance additives",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Custom Triazine Blends & Winterized H2S Scavenger Formulations",
    description:
      "Winterized, oil-soluble and inhibitor-boosted triazine blends tuned to your stream, temperature and H2S load.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Triazine Blends & Formulations",
    description:
      "Winterized/oil-soluble/inhibitor-boosted triazine H2S scavenger blends made to your spec.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "Why use a custom triazine blend instead of a standard grade?",
    answer:
      "A base triazine is often diluted and adjusted for field conditions. Custom blends tune the freeze point (for cold climates), phase behaviour (oil- vs water-soluble), temperature range and compatibility with other production chemicals — so the scavenger performs reliably in your specific stream rather than a generic one.",
  },
  {
    question: "What is a winterized triazine scavenger?",
    answer:
      "A winterized blend adds a freeze-point depressant such as methanol or glycol so the scavenger stays pumpable and effective at low ambient temperatures. This prevents freezing/gelling in cold-climate injection systems and storage without sacrificing H2S scavenging performance.",
  },
  {
    question: "Can you make an oil-soluble triazine scavenger?",
    answer:
      "Yes. For predominantly hydrocarbon streams where a water-based scavenger partitions poorly, an oil-soluble or mutually-soluble blend improves contact with H2S in the oil phase. The formulation is chosen to match your stream's phase and temperature.",
  },
  {
    question: "Can additives or inhibitors be included?",
    answer:
      "Blends can incorporate performance additives — for example solvents to widen the operating-temperature range, or components tuned for compatibility with corrosion inhibitors and demulsifiers already in your system. We tailor the package to your treatment program.",
  },
  {
    question: "What do you need from us to formulate a blend?",
    answer:
      "Typically: stream type and phase, H2S load and outlet target, temperature range and ambient conditions, injection method, and the other production chemicals in use. With that we recommend a base grade (MEA 78% or MMA 40%) and a blend that fits.",
  },
  {
    question: "Do you supply custom triazine blends for export?",
    answer:
      "Yes. Vasudev Chemo Pharma manufactures MEA Triazine 78% and MMA Triazine 40% and formulates custom blends, with batch COA and global export (FOB/CIF/DDP) from our ISO 9001:2015 certified facility in Gujarat, India.",
  },
];

export default function CustomTriazineBlendsFormulationsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Custom Triazine Blends & Formulations", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionLabel>Custom formulation</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                Custom Triazine Blends &amp; Winterized H₂S Scavenger Formulations
              </h1>
              <p className="text-secondary text-lg mt-6">
                A base triazine rarely fits every field as-is. Custom blends tune freeze point, phase
                solubility, temperature range and chemical compatibility so your H₂S scavenger
                performs in the conditions you actually run — from cold-climate injection to
                hydrocarbon-dominant streams.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: we formulate winterized (methanol/glycol), oil-soluble, and
                  additive-boosted triazine blends on an MEA 78% or MMA 40% base, tuned to your stream
                  phase, H₂S load, temperature range and existing chemical program. Batch COA and
                  global export included.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button href="/contact" variant="primary">
                  Discuss a Custom Blend
                </Button>
                <Button href={MEA_URL} variant="secondary">
                  View MEA Triazine 78%
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">What We Can Tune</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6 mb-12">
              <li>Freeze point — winterized with methanol/glycol for cold climates</li>
              <li>Phase behaviour — water-soluble, oil-soluble or mutually soluble</li>
              <li>Operating-temperature range via solvent selection</li>
              <li>Active strength — diluted to the field concentration you need</li>
              <li>Compatibility with corrosion inhibitors and demulsifiers</li>
            </ul>

            <h2 className="font-heading text-h3 text-primary mb-6">Tell Us Your Conditions</h2>
            <p className="text-secondary">
              Stream type/phase, H₂S load and target, temperature range, injection method, and the
              other chemicals in your program let us recommend the right base grade and blend.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">Related Reading</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6">
              <li>
                <Link href="/mea-triazine-vs-mma-triazine" className="text-link">
                  MEA vs MMA triazine
                </Link>
              </li>
              <li>
                <Link href="/triazine-corrosion-inhibitor-compatibility" className="text-link">
                  Triazine + corrosion inhibitor compatibility
                </Link>
              </li>
              <li>
                <Link href="/triazine-injection-vs-contactor-tower" className="text-link">
                  Direct injection vs contactor tower
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
            <h2 className="font-heading text-h3 text-primary mb-4">Need a blend tuned to your field?</h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Vasudev Chemo Pharma formulates custom MEA/MMA triazine blends — winterized, oil-soluble
              and additive-boosted — with batch COA and global export from Gujarat, India.
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
