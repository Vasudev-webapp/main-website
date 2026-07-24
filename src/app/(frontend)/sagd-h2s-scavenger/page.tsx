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
const PATH = "/sagd-h2s-scavenger";
const MEA_URL = "/product/mea-triazine-78-h2s-scavenger";
const MMA_URL = "/product/mma-triazine-40";

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "SAGD H2S Scavenger — Triazine for Steam-Assisted Gravity Drainage | Vasudev Chemo Pharma",
  description:
    "Triazine H2S scavenger for SAGD (steam-assisted gravity drainage) heavy-oil operations — control H2S in produced fluids, vapour and sour water at elevated temperature. MEA & MMA triazine supply with dosing guidance. Indian manufacturer, global export.",
  keywords: mergeKeywordClusters([
    "SAGD H2S scavenger",
    "steam assisted gravity drainage H2S",
    "heavy oil H2S scavenger",
    "bitumen H2S removal",
    "oil sands H2S scavenger",
    "triazine SAGD produced water",
    "high temperature H2S scavenger",
    "MMA triazine SAGD",
    "SAGD sour water H2S",
    "in situ oil sands H2S control",
    "thermal recovery H2S scavenger",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "SAGD H2S Scavenger — Triazine for Steam-Assisted Gravity Drainage",
    description:
      "Control H2S in SAGD produced fluids, vapour and sour water with MEA/MMA triazine engineered for elevated-temperature heavy-oil operations.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAGD H2S Scavenger — Triazine",
    description:
      "Triazine H2S control for steam-assisted gravity drainage heavy-oil and oil-sands operations.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "Why is H2S a problem in SAGD operations?",
    answer:
      "In steam-assisted gravity drainage (SAGD), high-temperature steam mobilises heavy oil and bitumen and also liberates hydrogen sulfide from sulfur-bearing reservoirs. H2S then partitions into produced fluids, vapour spaces and sour water across separators, tanks and treaters — creating toxicity, corrosion and specification problems that require scavenging.",
  },
  {
    question: "Can triazine scavengers handle SAGD's high temperatures?",
    answer:
      "Yes, with the right grade. Triazine reacts with H2S across a broad range, but at SAGD's elevated temperatures the choice of grade matters: MMA triazine's more soluble reaction by-products reduce solids and scaling versus MEA in hot, long-run service, while MEA triazine 78% offers high active content for cost-effective bulk duty. Grade and injection point are selected to the temperature and phase.",
  },
  {
    question: "Where is triazine injected in a SAGD facility?",
    answer:
      "Common points include produced-fluid lines ahead of separation, sour-water streams, tank and treater vapour spaces, and de-gassing/emulsion-treating stages. The location is chosen so the scavenger has enough contact time with the H2S-bearing phase before the next separation or export step.",
  },
  {
    question: "Which triazine grade is best for SAGD?",
    answer:
      "MMA triazine 40% is often preferred where high temperature and continuous injection would otherwise cause solids from MEA by-products. MEA triazine 78% suits high-throughput, cost-sensitive duty. Many operators use both across different points; we can recommend a grade per stream.",
  },
  {
    question: "Does triazine cause scaling or fouling in SAGD?",
    answer:
      "Highly spent scavenger left under continued H₂S exposure, or the wrong grade, can form solids (e.g. dithiazine-type by-products) that foul lines and equipment. Correct dosing to the H2S load, choosing a more soluble grade for hot service, and monitoring spent scavenger all minimise this risk.",
  },
  {
    question: "Do you supply triazine for oil-sands / heavy-oil operators?",
    answer:
      "Yes. Vasudev Chemo Pharma manufactures MEA Triazine 78% and MMA Triazine 40% and exports globally with batch COA and dosing support, suitable for SAGD and other thermal heavy-oil recovery operations.",
  },
];

export default function SagdH2sScavengerPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "SAGD H2S Scavenger", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <Breadcrumbs items={[
          { name: "Home", url: SITE_URL },
          { name: "SAGD H2S Scavenger", url: `${SITE_URL}${PATH}` },
        ]} className="mb-6" />
              <SectionLabel>Application guide</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                SAGD H₂S Scavenger — Triazine for Steam-Assisted Gravity Drainage
              </h1>
              <p className="text-secondary text-lg mt-6">
                Steam-assisted gravity drainage (SAGD) heavy-oil and oil-sands operations liberate
                hydrogen sulfide into produced fluids, vapour spaces and sour water at elevated
                temperature. Triazine H₂S scavengers neutralise that H₂S to protect people and
                equipment and to meet export specifications.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: triazine scavenges H₂S across SAGD produced fluids, sour water and
                  tank vapour. For hot, continuous SAGD service, MMA Triazine 40% resists the
                  solids/scaling that MEA by-products can form; MEA Triazine 78% gives high-active,
                  cost-effective bulk treatment. Grade is matched per stream.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button href="/contact" variant="primary">
                  Request a Quote
                </Button>
                <Button href={MMA_URL} variant="secondary">
                  View MMA Triazine 40%
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">Where H₂S Shows Up in SAGD</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6 mb-12">
              <li>Produced-fluid lines ahead of separation</li>
              <li>Sour-water and de-oiling streams</li>
              <li>Tank, treater and vessel vapour spaces</li>
              <li>Emulsion-treating and de-gassing stages</li>
              <li>Export oil / diluent blending to meet H₂S spec</li>
            </ul>

            <h2 className="font-heading text-h3 text-primary mb-6">Why Grade Choice Matters at Temperature</h2>
            <p className="text-secondary mb-4">
              SAGD runs hot and continuous, which is exactly where MEA-triazine reaction by-products
              are most likely to drop out as solids and scale lines and equipment. Choosing a more
              soluble grade for the hottest streams, dosing accurately to the H₂S load, and monitoring
              spent scavenger keep the system clean.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">Related Reading</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6">
              <li>
                <Link href="/mea-triazine-vs-mma-triazine" className="text-link">
                  MEA vs MMA triazine — which to use
                </Link>
              </li>
              <li>
                <Link href="/produced-water-h2s-scavenger" className="text-link">
                  Produced-water H₂S control
                </Link>
              </li>
              <li>
                <Link href="/triazine-foaming-emulsion-troubleshooting" className="text-link">
                  Foaming &amp; emulsion troubleshooting
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
            <h2 className="font-heading text-h3 text-primary mb-4">Treating H₂S in a SAGD operation?</h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Vasudev Chemo Pharma supplies MEA Triazine 78% and MMA Triazine 40% with per-stream
              grade and dosing guidance, batch COA, and global export from Gujarat, India.
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
