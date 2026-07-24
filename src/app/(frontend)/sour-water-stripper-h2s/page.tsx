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
const PATH = "/sour-water-stripper-h2s";
const MEA_URL = "/product/mea-triazine-78-h2s-scavenger";
const MMA_URL = "/product/mma-triazine-40";

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "Sour Water Stripper H2S Control — Triazine Scavenger | Vasudev Chemo Pharma",
  description:
    "Triazine H2S scavenger for sour water stripper (SWS) overhead and off-gas, refinery sour water and process condensate. Polish residual H2S, cut odour and corrosion at elevated temperature. MEA & MMA triazine supply. Indian manufacturer, global export.",
  keywords: mergeKeywordClusters([
    "sour water stripper H2S",
    "SWS overhead H2S scavenger",
    "sour water H2S removal",
    "refinery sour water treatment",
    "sour water stripper off-gas",
    "triazine sour water",
    "process condensate H2S",
    "H2S scavenger refinery water",
    "stripper overhead corrosion H2S",
    "high temperature sour water H2S scavenger",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Sour Water Stripper H2S Control — Triazine Scavenger",
    description:
      "Polish residual H2S in sour water stripper overhead, off-gas and refinery sour water with triazine scavenging.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sour Water Stripper H2S Control — Triazine",
    description:
      "Triazine H2S scavenging for SWS overhead, off-gas and refinery sour water.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "What is a sour water stripper and why does residual H2S remain?",
    answer:
      "A sour water stripper (SWS) uses steam to strip H2S and ammonia from refinery/process sour water. Upsets, load swings or capacity limits can leave residual H2S in stripped water, overhead vapour or off-gas, causing odour, corrosion and downstream spec problems. A triazine scavenger polishes that residual H2S.",
  },
  {
    question: "Where is triazine used around a sour water stripper?",
    answer:
      "Common points are the stripper overhead/off-gas, stripped-water polishing before reuse or disposal, and process condensate or intermittent sour streams during turnarounds and upsets. It is a chemical polish/backup rather than a replacement for the stripper itself.",
  },
  {
    question: "Can triazine handle the elevated temperatures of SWS service?",
    answer:
      "Yes, with grade selection. Hot, continuous streams favour a grade whose reaction by-products stay soluble to avoid solids and scaling — often MMA triazine 40% — while MEA triazine 78% suits cost-effective bulk polishing where temperature and by-product solubility allow.",
  },
  {
    question: "Does triazine remove ammonia too?",
    answer:
      "No. Triazine is an H2S scavenger; it neutralises hydrogen sulfide, not ammonia. The sour water stripper remains responsible for ammonia removal — triazine polishes residual H2S the stripper leaves behind.",
  },
  {
    question: "How do I avoid solids when treating SWS streams?",
    answer:
      "Dose to the measured H2S load to limit wasted chemical and residual amine, pick a more soluble grade for hot streams, and ensure adequate mixing/contact time. The main way to avoid solids is to monitor spent scavenger, reaction by-products and ongoing H₂S exposure, and to manage or replace the scavenger in good time — before it becomes over-spent and by-products drop out and foul lines.",
  },
  {
    question: "Do you supply triazine for refinery sour water applications?",
    answer:
      "Yes. Vasudev Chemo Pharma manufactures MEA Triazine 78% and MMA Triazine 40% and exports globally with batch COA and application guidance for sour water stripper polishing and refinery sour water H2S control.",
  },
];

export default function SourWaterStripperH2sPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Sour Water Stripper H2S Control", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <Breadcrumbs items={[
          { name: "Home", url: SITE_URL },
          { name: "Sour Water Stripper H2S Control", url: `${SITE_URL}${PATH}` },
        ]} className="mb-6" />
              <SectionLabel>Application guide</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                Sour Water Stripper H₂S Control — Triazine Scavenger
              </h1>
              <p className="text-secondary text-lg mt-6">
                When a sour water stripper (SWS) leaves residual hydrogen sulfide in overhead vapour,
                off-gas or stripped water — during upsets, load swings or capacity limits — a triazine
                H₂S scavenger polishes it out, cutting odour, corrosion and downstream specification
                problems.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: triazine polishes residual H₂S around the SWS (overhead/off-gas,
                  stripped-water, upset streams). It scavenges H₂S only — the stripper still handles
                  ammonia. For hot continuous service, MMA Triazine 40% resists solids; MEA Triazine
                  78% gives cost-effective bulk polishing.
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
            <h2 className="font-heading text-h3 text-primary mb-6">Where Triazine Helps Around the SWS</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6 mb-12">
              <li>Stripper overhead vapour and off-gas polishing</li>
              <li>Stripped-water residual H₂S before reuse or disposal</li>
              <li>Process condensate and intermittent sour streams</li>
              <li>Turnaround / upset-driven temporary H₂S mitigation</li>
            </ul>

            <h2 className="font-heading text-h3 text-primary mb-6">Keys to Clean Operation</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6">
              <li>Dose to measured H₂S load — avoid over-treatment.</li>
              <li>Select a soluble-by-product grade for hot streams.</li>
              <li>Provide mixing and contact time at the injection point.</li>
              <li>Monitor spent scavenger and residual amine to prevent fouling.</li>
            </ul>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">Related Reading</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6">
              <li>
                <Link href="/refinery-fuel-gas-h2s-scavenger" className="text-link">
                  Refinery fuel-gas H₂S scavenging
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
            <h2 className="font-heading text-h3 text-primary mb-4">Polishing residual H₂S around your SWS?</h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Vasudev Chemo Pharma supplies MEA Triazine 78% and MMA Triazine 40% with application and
              dosing guidance, batch COA, and global export from Gujarat, India.
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
