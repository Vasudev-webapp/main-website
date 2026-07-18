import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import { applyPageMetaOverride } from "@/lib/seo/page-meta-overrides";
import { mergeKeywordClusters } from "@/lib/seo/keyword-clusters";

const SITE_URL = "https://www.vasudevchemopharma.com";
const PATH = "/produced-water-h2s-scavenger";
const MEA_URL = "/product/mea-triazine-78-h2s-scavenger";
const MMA_URL = "/product/mma-triazine-40";

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "Produced Water H2S Scavenger — Triazine for Water Reinjection & Disposal | Vasudev Chemo Pharma",
  description:
    "Triazine H2S scavenger for produced water, water reinjection and disposal wells — remove dissolved sulfide to cut corrosion, souring and odour ahead of reinjection or discharge. MEA & MMA triazine supply with dosing guidance. Indian manufacturer, global export.",
  keywords: mergeKeywordClusters([
    "produced water H2S scavenger",
    "produced water sulfide removal",
    "water reinjection H2S",
    "disposal well H2S scavenger",
    "dissolved sulfide produced water",
    "triazine produced water treatment",
    "oilfield water H2S control",
    "reservoir souring H2S scavenger",
    "produced water corrosion H2S",
    "SRB sulfide scavenger produced water",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Produced Water H2S Scavenger — Triazine for Reinjection & Disposal",
    description:
      "Remove dissolved sulfide from produced water ahead of reinjection or disposal with triazine scavenging.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Produced Water H2S Scavenger — Triazine",
    description:
      "Triazine sulfide removal for produced water, reinjection and disposal streams.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "Why treat H2S / sulfide in produced water?",
    answer:
      "Produced water often carries dissolved hydrogen sulfide and sulfides — from the reservoir or from sulfate-reducing bacteria (reservoir souring). Left untreated they cause corrosion of injection lines and equipment, safety and odour issues at handling facilities, and can worsen souring in reinjection. A triazine scavenger removes dissolved sulfide before reinjection or disposal.",
  },
  {
    question: "How does triazine work in the water phase?",
    answer:
      "Triazine is water-miscible and reacts with dissolved H2S/HS− to form stable, non-volatile products, lowering sulfide in the aqueous stream. Because produced water is aqueous, contact is generally good; injection point and residence time are set so the reaction completes before the next stage.",
  },
  {
    question: "Which triazine grade suits produced water?",
    answer:
      "MEA Triazine 78% gives high active content for cost-effective bulk water treatment; MMA Triazine 40% is chosen where more soluble by-products reduce solids in warm or continuous service. Grade is matched to sulfide load, temperature and water chemistry.",
  },
  {
    question: "Does triazine stop reservoir souring / SRB activity?",
    answer:
      "Triazine scavenges the sulfide already present; it is not a biocide and does not kill sulfate-reducing bacteria. For microbial souring control, a biocide program addresses the SRB, while triazine removes the H2S/sulfide load. The two are complementary.",
  },
  {
    question: "How is over-treatment and solids avoided in water systems?",
    answer:
      "Dose to the measured sulfide load, select a soluble-by-product grade for warm streams, provide adequate mixing/contact time, and monitor spent scavenger and residual amine to prevent by-product build-up and deposition.",
  },
  {
    question: "Do you supply triazine for produced-water and water-injection operations?",
    answer:
      "Yes. Vasudev Chemo Pharma manufactures MEA Triazine 78% and MMA Triazine 40% and exports globally with batch COA and dosing guidance for produced-water, reinjection and disposal-well H2S/sulfide control.",
  },
];

export default function ProducedWaterH2sScavengerPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Produced Water H2S Scavenger", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionLabel>Application guide</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                Produced Water H₂S Scavenger — Triazine for Reinjection &amp; Disposal
              </h1>
              <p className="text-secondary text-lg mt-6">
                Produced water carries dissolved hydrogen sulfide and sulfides that corrode injection
                systems, create safety and odour problems, and worsen reservoir souring. Water-miscible
                triazine H₂S scavengers remove that dissolved sulfide before reinjection or disposal.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: triazine reacts with dissolved H₂S/HS− in produced water to form
                  stable, non-volatile products, cutting corrosion and odour ahead of reinjection or
                  discharge. It scavenges sulfide — it is not a biocide, so SRB souring is managed
                  separately. MEA 78% for bulk duty; MMA 40% for warm/continuous streams.
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
            <h2 className="font-heading text-h3 text-primary mb-6">Why Sulfide Must Be Removed</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6 mb-12">
              <li>Corrosion of injection pumps, lines and disposal wells</li>
              <li>Safety and odour at water-handling facilities</li>
              <li>Souring propagation through reinjection</li>
              <li>Discharge / disposal specification compliance</li>
            </ul>

            <h2 className="font-heading text-h3 text-primary mb-6">Scavenger vs Biocide</h2>
            <p className="text-secondary">
              Triazine removes the sulfide already present; a biocide program controls the
              sulfate-reducing bacteria that generate new sulfide. Using both addresses the current
              H₂S load and the microbial source of souring.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">Related Reading</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6">
              <li>
                <Link href="/sagd-h2s-scavenger" className="text-link">
                  SAGD H₂S scavenging
                </Link>
              </li>
              <li>
                <Link href="/spent-triazine-monitoring" className="text-link">
                  Spent triazine &amp; residual-amine monitoring
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
            <h2 className="font-heading text-h3 text-primary mb-4">Removing sulfide from produced water?</h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Vasudev Chemo Pharma supplies MEA Triazine 78% and MMA Triazine 40% with dosing guidance,
              batch COA, and global export from our ISO 9001:2015 certified facility in Gujarat, India.
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
