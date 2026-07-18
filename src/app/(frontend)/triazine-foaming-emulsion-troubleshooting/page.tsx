import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import { applyPageMetaOverride } from "@/lib/seo/page-meta-overrides";
import { mergeKeywordClusters } from "@/lib/seo/keyword-clusters";

const SITE_URL = "https://www.vasudevchemopharma.com";
const PATH = "/triazine-foaming-emulsion-troubleshooting";
const MEA_URL = "/product/mea-triazine-78-h2s-scavenger";
const MMA_URL = "/product/mma-triazine-40";

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "Triazine H2S Scavenger Foaming & Emulsion Troubleshooting | Vasudev Chemo Pharma",
  description:
    "Troubleshoot foaming, emulsion tightening and solids when using triazine H2S scavengers — causes (over-treatment, dithiazine, pH, demulsifier interaction) and fixes for oil/water separation upsets. MEA & MMA triazine supply with application support.",
  keywords: mergeKeywordClusters([
    "triazine foaming",
    "H2S scavenger emulsion problems",
    "triazine emulsion tightening",
    "scavenger demulsifier interaction",
    "dithiazine solids fouling",
    "triazine separation upset",
    "H2S scavenger over-treatment solids",
    "triazine troubleshooting oil water",
    "scavenger induced emulsion",
    "triazine pH foaming",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Triazine H2S Scavenger Foaming & Emulsion Troubleshooting",
    description:
      "Causes and fixes for foaming, emulsion tightening and solids when dosing triazine H2S scavengers.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Triazine Foaming & Emulsion Troubleshooting",
    description:
      "Diagnose and fix foaming, emulsion and solids issues from triazine H2S scavenger dosing.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "Can triazine H2S scavenger cause emulsion or foaming problems?",
    answer:
      "Yes. Triazine is an amine-based, surface-active chemistry, so over-dosing or injecting at the wrong point can tighten oil/water emulsions, contribute to foaming, and leave residual amine that interacts with demulsifiers. Separately, where the scavenger becomes highly spent under continued H₂S exposure, reaction by-products such as dithiazine can drop out as solids that stabilise emulsions and foul equipment.",
  },
  {
    question: "What are the most common causes?",
    answer:
      "Excess active scavenger and amine (over-dosing), poor injection location or mixing, incompatibility or competition with the existing demulsifier package, and pH shifts are the usual culprits behind scavenger-related separation upsets. By-product solids (dithiazine), by contrast, form where the scavenger becomes highly spent under continued H₂S exposure.",
  },
  {
    question: "How do I fix scavenger-induced emulsion tightening?",
    answer:
      "Dose accurately to the measured H2S load to avoid excess active scavenger and residual amine, move the injection point to allow reaction before the separator, re-optimise the demulsifier for the treated fluid, and consider a grade with more soluble by-products (e.g. MMA triazine) for hot streams. Monitoring spent scavenger confirms you are in the efficient dosing window without letting the scavenger over-spend or allowing H2S breakthrough.",
  },
  {
    question: "Why do solids form and how do I control them?",
    answer:
      "Solids are typically dithiazine-type reaction products, most likely where MEA triazine has become highly spent under continued H₂S exposure. Control them by dosing accurately, selecting a more soluble grade for hot service, ensuring good mixing, and monitoring spent scavenger and by-products so deposition is caught early.",
  },
  {
    question: "Does switching MEA to MMA triazine help?",
    answer:
      "Often, yes. MMA triazine's reaction by-products are generally more soluble, reducing solids and the emulsion/foaming issues they cause — a common reason operators switch in hot, continuous or offshore service. See our MEA vs MMA comparison for the trade-offs.",
  },
  {
    question: "Can you support field troubleshooting?",
    answer:
      "Yes. Vasudev Chemo Pharma supplies MEA Triazine 78% and MMA Triazine 40% with application and dosing guidance and batch COA, and can advise on grade, injection strategy and demulsifier compatibility to resolve separation upsets.",
  },
];

export default function TriazineFoamingEmulsionTroubleshootingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Triazine Foaming & Emulsion Troubleshooting", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionLabel>Troubleshooting guide</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                Triazine H₂S Scavenger — Foaming &amp; Emulsion Troubleshooting
              </h1>
              <p className="text-secondary text-lg mt-6">
                Triazine is an effective H₂S scavenger, but as an amine-based, surface-active
                chemistry it can — if mis-applied — tighten emulsions, contribute to foaming, leave
                residual amine that fights your demulsifier, or drop dithiazine solids. This guide
                covers the causes and the fixes.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: most scavenger-related separation upsets come from over-treatment,
                  poor injection point/mixing, demulsifier interaction, pH shift, or dithiazine solids.
                  Fix by dosing to the measured H₂S load, relocating injection ahead of the separator,
                  re-optimising the demulsifier, and choosing a more soluble grade (often MMA) for hot
                  service.
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
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h3 text-primary mb-8">Symptom → Likely Cause → Fix</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="py-3 px-4 font-semibold">Symptom</th>
                    <th className="py-3 px-4 font-semibold">Likely cause</th>
                    <th className="py-3 px-4 font-semibold">Fix</th>
                  </tr>
                </thead>
                <tbody className="text-secondary">
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Tight oil/water emulsion</td>
                    <td className="py-3 px-4">Over-treatment, residual amine, demulsifier competition</td>
                    <td className="py-3 px-4">Dose to H₂S load; re-optimise demulsifier</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Foaming</td>
                    <td className="py-3 px-4">Surface-active amine excess; pH shift</td>
                    <td className="py-3 px-4">Reduce dose; check pH; antifoam if needed</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Solids / scaling</td>
                    <td className="py-3 px-4">Dithiazine by-products (MEA, hot/high dose)</td>
                    <td className="py-3 px-4">Soluble grade (MMA); accurate dosing</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">H₂S breakthrough</td>
                    <td className="py-3 px-4">Under-dose; poor contact time</td>
                    <td className="py-3 px-4">Move injection upstream; add mixing</td>
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
                <Link href="/spent-triazine-monitoring" className="text-link">
                  Spent triazine &amp; residual-amine monitoring
                </Link>
              </li>
              <li>
                <Link href="/triazine-corrosion-inhibitor-compatibility" className="text-link">
                  Triazine + corrosion inhibitor compatibility
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
            <h2 className="font-heading text-h3 text-primary mb-4">Fighting scavenger-related upsets?</h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Vasudev Chemo Pharma supplies MEA Triazine 78% and MMA Triazine 40% with troubleshooting
              and dosing support, batch COA, and global export from our ISO 9001:2015 certified
              facility in Gujarat, India.
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
