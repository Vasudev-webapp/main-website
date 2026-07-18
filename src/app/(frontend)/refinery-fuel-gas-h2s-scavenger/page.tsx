import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import { applyPageMetaOverride } from "@/lib/seo/page-meta-overrides";
import { mergeKeywordClusters } from "@/lib/seo/keyword-clusters";

const SITE_URL = "https://www.vasudevchemopharma.com";
const PATH = "/refinery-fuel-gas-h2s-scavenger";
const MEA_URL = "/product/mea-triazine-78-h2s-scavenger";
const MMA_URL = "/product/mma-triazine-40";

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "Refinery Fuel-Gas H2S Scavenger — Triazine | Vasudev Chemo Pharma",
  description:
    "Triazine H2S scavenger for refinery fuel gas, off-gas and low-pressure gas streams — polish residual H2S after amine treating to protect burners, meet emissions limits and cut corrosion. MEA & MMA triazine supply. Indian manufacturer, global export.",
  keywords: mergeKeywordClusters([
    "refinery fuel gas H2S scavenger",
    "fuel gas H2S removal",
    "refinery off-gas H2S",
    "amine treating polishing H2S scavenger",
    "low pressure gas H2S scavenger",
    "triazine refinery gas",
    "flare gas H2S scavenger",
    "burner fuel gas H2S spec",
    "refinery H2S emissions control",
    "FCC off gas H2S",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Refinery Fuel-Gas H2S Scavenger — Triazine",
    description:
      "Polish residual H2S in refinery fuel gas and off-gas after amine treating with triazine scavenging.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refinery Fuel-Gas H2S Scavenger — Triazine",
    description:
      "Triazine H2S scavenging for refinery fuel gas, off-gas and low-pressure streams.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "Why scavenge H2S from refinery fuel gas if there is an amine unit?",
    answer:
      "Amine treating removes the bulk of H2S, but residual H2S can remain during swings, amine-unit upsets, or in smaller off-gas/low-pressure streams that do not justify their own amine system. A triazine scavenger polishes that residual H2S so fuel gas protects burners, meets emissions limits and avoids corrosion.",
  },
  {
    question: "Where is triazine applied in a refinery gas system?",
    answer:
      "Typical points are fuel-gas headers downstream of amine treating, FCC and coker off-gas, low-pressure or intermittent gas streams, and flare-gas recovery. Injection is by quill/mixer with enough contact time, or via a small contactor where the H2S load justifies it.",
  },
  {
    question: "Which triazine grade suits refinery gas polishing?",
    answer:
      "MEA Triazine 78% gives high active content for cost-effective polishing; MMA Triazine 40% is chosen for hotter or continuous service where more soluble by-products reduce solids/scaling. Grade is matched to temperature, H2S load and stream type.",
  },
  {
    question: "Is a scavenger a replacement for an amine unit?",
    answer:
      "No — triazine is a non-regenerative polish/backup, most economical below a few hundred ppm H2S. For high, continuous H2S loads, regenerative amine treating is the primary technology; triazine handles the residual, the small streams and the upsets.",
  },
  {
    question: "How is over-treatment and solids avoided?",
    answer:
      "Dose to the measured H2S load, select a soluble-by-product grade for hot streams, ensure mixing/contact time, and monitor spent scavenger. Polymeric dithiazine fouling is driven by highly spent MEA triazine left under continued H₂S exposure, so the goal is to manage the scavenger before it becomes over-spent — not to under-dose.",
  },
  {
    question: "Do you supply triazine for refineries and gas plants?",
    answer:
      "Yes. Vasudev Chemo Pharma manufactures MEA Triazine 78% and MMA Triazine 40% and exports globally with batch COA and application guidance for refinery fuel-gas and off-gas H2S polishing.",
  },
];

export default function RefineryFuelGasH2sScavengerPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Refinery Fuel-Gas H2S Scavenger", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionLabel>Application guide</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                Refinery Fuel-Gas H₂S Scavenger — Triazine
              </h1>
              <p className="text-secondary text-lg mt-6">
                Refinery fuel gas, FCC/coker off-gas and low-pressure streams can carry residual
                hydrogen sulfide even downstream of amine treating. A triazine H₂S scavenger polishes
                that residual H₂S to protect burners, meet emissions limits and prevent corrosion.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: triazine is a non-regenerative polish for residual H₂S in refinery
                  fuel gas and off-gas — ideal after amine treating, on small/intermittent streams,
                  and during upsets. MEA Triazine 78% for cost-effective bulk polishing; MMA Triazine
                  40% for hotter/continuous service.
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
            <h2 className="font-heading text-h3 text-primary mb-6">Where It Fits in the Refinery</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6 mb-12">
              <li>Fuel-gas header polishing downstream of amine treating</li>
              <li>FCC and coker off-gas</li>
              <li>Low-pressure / intermittent gas streams without their own amine unit</li>
              <li>Flare-gas recovery</li>
              <li>Upset and turnaround H₂S mitigation</li>
            </ul>

            <h2 className="font-heading text-h3 text-primary mb-6">Scavenger vs Amine Unit</h2>
            <p className="text-secondary">
              Triazine is most economical as a non-regenerative polish below a few hundred ppm H₂S.
              High, continuous loads belong to regenerative amine treating; triazine handles the
              residual, the small streams and the upsets — often at far lower CAPEX.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">Related Reading</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6">
              <li>
                <Link href="/sour-water-stripper-h2s" className="text-link">
                  Sour water stripper H₂S control
                </Link>
              </li>
              <li>
                <Link href="/triazine-injection-vs-contactor-tower" className="text-link">
                  Direct injection vs contactor tower
                </Link>
              </li>
              <li>
                <Link href="/triazine-vs-non-triazine-scavenger" className="text-link">
                  Triazine vs non-triazine scavengers
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
            <h2 className="font-heading text-h3 text-primary mb-4">Polishing H₂S in refinery gas?</h2>
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
