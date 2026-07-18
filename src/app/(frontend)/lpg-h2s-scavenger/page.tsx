import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import { applyPageMetaOverride } from "@/lib/seo/page-meta-overrides";
import { mergeKeywordClusters } from "@/lib/seo/keyword-clusters";

const SITE_URL = "https://www.vasudevchemopharma.com";
const PATH = "/lpg-h2s-scavenger";
const MEA_URL = "/product/mea-triazine-78-h2s-scavenger";
const MMA_URL = "/product/mma-triazine-40";

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "LPG H2S Scavenger — Triazine for Liquefied Petroleum Gas | Vasudev Chemo Pharma",
  description:
    "Triazine H2S scavenger for LPG (liquefied petroleum gas), propane and butane — meet copper-strip and H2S specifications, protect against corrosion and odour. MEA & MMA triazine supply with application guidance. Indian manufacturer, global export.",
  keywords: mergeKeywordClusters([
    "LPG H2S scavenger",
    "liquefied petroleum gas H2S removal",
    "propane H2S scavenger",
    "butane H2S removal",
    "LPG sweetening",
    "LPG copper strip corrosion H2S",
    "triazine LPG treatment",
    "H2S scavenger for NGL",
    "LPG mercaptan scavenger",
    "LPG sulfur specification H2S",
    "H2S removal liquefied gas",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "LPG H2S Scavenger — Triazine for Liquefied Petroleum Gas",
    description:
      "Meet LPG H2S and copper-strip specs with triazine scavenging for propane, butane and NGL streams.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "LPG H2S Scavenger — Triazine",
    description:
      "Triazine H2S scavenging for LPG, propane, butane and NGL — meet H2S and copper-strip specifications.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "Why does LPG need H2S scavenging?",
    answer:
      "Liquefied petroleum gas (propane/butane) and NGL streams can carry hydrogen sulfide that causes toxicity, corrosion, bad odour and copper-strip corrosion test failures. Product must meet tight H2S/sulfur specifications before sale, so residual H2S is removed with a scavenger such as triazine.",
  },
  {
    question: "How is triazine applied to an LPG stream?",
    answer:
      "Triazine is typically injected into the liquid LPG/NGL stream with adequate mixing and contact time, or the stream is contacted with the scavenger so H2S reacts into stable, non-volatile products. Because LPG is a light liquid, injection point, mixing and residence time are chosen to ensure the scavenger contacts the H2S before storage or loading.",
  },
  {
    question: "Does triazine remove mercaptans from LPG as well as H2S?",
    answer:
      "Triazine is highly selective for H2S and reacts with some low-molecular-weight mercaptans, but it is not a primary mercaptan-removal technology. For streams where mercaptan (copper-strip) failure is driven by heavier thiols, a dedicated mercaptan treatment may be needed alongside H2S scavenging — we can advise on the combination.",
  },
  {
    question: "Which triazine grade suits LPG treatment?",
    answer:
      "MEA Triazine 78% provides high active content for cost-effective bulk treatment; MMA Triazine 40% is chosen where more soluble by-products reduce solids in continuous service. The right grade depends on H2S load, temperature and whether the stream is liquid-phase LPG or mixed NGL.",
  },
  {
    question: "Will triazine treatment cause solids in LPG systems?",
    answer:
      "Correct dosing to the H2S load and grade selection keep reaction by-products soluble and avoid deposition. Polymeric dithiazine fouling — most associated with MEA triazine — comes from highly spent scavenger left under continued H₂S exposure (over-spending), not from excess unreacted chemical. Dose accurately and monitor the scavenger so it is managed before it becomes over-spent and before H2S breakthrough occurs.",
  },
  {
    question: "Do you supply triazine for LPG and gas-processing plants?",
    answer:
      "Yes. Vasudev Chemo Pharma manufactures MEA Triazine 78% and MMA Triazine 40% and exports globally with batch COA and application guidance for LPG, propane, butane and NGL treatment.",
  },
];

export default function LpgH2sScavengerPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "LPG H2S Scavenger", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionLabel>Application guide</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                LPG H₂S Scavenger — Triazine for Liquefied Petroleum Gas
              </h1>
              <p className="text-secondary text-lg mt-6">
                LPG, propane, butane and NGL streams must meet strict H₂S and copper-strip corrosion
                specifications. Triazine H₂S scavengers convert residual hydrogen sulfide into stable,
                non-volatile products so product is safe, on-spec and non-corrosive for storage and
                sale.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: triazine is injected into the LPG/NGL liquid with proper mixing and
                  contact time to react out H₂S and help pass copper-strip and H₂S specs. MEA Triazine
                  78% gives high-active bulk treatment; MMA Triazine 40% reduces solids in continuous
                  service. It is H₂S-selective — heavier mercaptans may need a separate step.
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
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">Why H₂S Must Be Removed From LPG</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6 mb-12">
              <li>Toxicity and safety during storage, loading and transport</li>
              <li>Corrosion of tanks, cylinders and pipework</li>
              <li>Copper-strip corrosion test failure</li>
              <li>Odour and off-spec product rejection</li>
              <li>Sulfur specification compliance for sale/export</li>
            </ul>

            <h2 className="font-heading text-h3 text-primary mb-6">Application Notes</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6">
              <li>Inject into the liquid stream with a static mixer / adequate residence time.</li>
              <li>Dose to the measured H₂S load to avoid over-treatment and solids.</li>
              <li>Select grade by temperature, H₂S load and phase (LPG vs mixed NGL).</li>
              <li>Pair with a mercaptan step where copper-strip failure is thiol-driven.</li>
            </ul>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">Related Reading</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6">
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
                <Link href="/refinery-fuel-gas-h2s-scavenger" className="text-link">
                  Refinery fuel-gas H₂S scavenging
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
            <h2 className="font-heading text-h3 text-primary mb-4">Need to meet an LPG H₂S spec?</h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Vasudev Chemo Pharma supplies MEA Triazine 78% and MMA Triazine 40% with application
              guidance, batch COA, and global export from our ISO 9001:2015 certified facility in
              Gujarat, India.
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
