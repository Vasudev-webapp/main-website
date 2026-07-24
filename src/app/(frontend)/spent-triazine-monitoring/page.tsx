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
const PATH = "/spent-triazine-monitoring";
const MEA_URL = "/product/mea-triazine-78-h2s-scavenger";
const MMA_URL = "/product/mma-triazine-40";

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "Spent Triazine & Residual-Amine Monitoring — Avoid Over-Treatment | Vasudev Chemo Pharma",
  description:
    "How to monitor spent triazine H2S scavenger: measure residual active triazine, excess amine and dithiazine to detect breakthrough, avoid over-treatment and control solids. QA/QC methods (titration, spectroscopy) and dosing optimisation. MEA & MMA triazine supply.",
  keywords: mergeKeywordClusters([
    "spent triazine monitoring",
    "residual triazine measurement",
    "triazine over-treatment",
    "dithiazine analysis",
    "scavenger breakthrough detection",
    "residual amine triazine",
    "H2S scavenger QA QC",
    "triazine titration",
    "scavenger dosing optimisation",
    "spent scavenger analysis oilfield",
    "triazine active content test",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Spent Triazine & Residual-Amine Monitoring — Avoid Over-Treatment",
    description:
      "Measure residual triazine, excess amine and dithiazine to detect breakthrough, avoid over-treatment and control solids.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spent Triazine & Residual-Amine Monitoring",
    description:
      "QA/QC and dosing optimisation for triazine H2S scavengers — detect breakthrough and control solids.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "Why monitor spent triazine scavenger?",
    answer:
      "Monitoring the reacted (spent) scavenger tells you whether you are under-dosing (H2S breakthrough) or over-dosing (wasted chemical and solids risk). Measuring residual active triazine, excess amine and dithiazine-type reaction products lets you dose precisely to the H2S load, cut chemical cost and prevent fouling.",
  },
  {
    question: "What happens if triazine is over-dosed?",
    answer:
      "Over-dosing mainly wastes chemical and leaves residual unreacted scavenger and excess amine in the stream. Polymeric dithiazine fouling, by contrast, is associated with heavily spent MEA triazine left under ongoing H₂S contact rather than with excess unreacted chemical. Monitoring residual active and by-products keeps dosing in the efficient window.",
  },
  {
    question: "How is spent triazine measured?",
    answer:
      "Common approaches include wet-chemistry titrations for active triazine and amine, and instrumental methods such as Raman or other spectroscopy that fingerprint intact triazine, excess reactants and reaction products. These give a quantitative read on residual active and spent fractions for QA/QC and field dosing.",
  },
  {
    question: "What is dithiazine and why measure it?",
    answer:
      "Dithiazine is a primary reaction product formed when triazine scavenges H2S. It can be relatively insoluble and is a common cause of solids/scaling, especially with heavily spent MEA triazine under continued H₂S exposure. Tracking dithiazine helps predict and prevent deposition problems.",
  },
  {
    question: "How does monitoring reduce chemical cost?",
    answer:
      "By revealing how much active scavenger is left unreacted, monitoring lets you trim the injection rate to the minimum that still meets the outlet H2S spec — directly lowering chemical consumption (a major OPEX line) while avoiding both breakthrough and over-treatment.",
  },
  {
    question: "Can you advise on dosing and product selection?",
    answer:
      "Yes. Vasudev Chemo Pharma supplies MEA Triazine 78% and MMA Triazine 40% with dosing guidance and batch COA, and can advise on grade selection (e.g. more soluble by-products for hot service) to complement your spent-scavenger monitoring program.",
  },
];

export default function SpentTriazineMonitoringPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Spent Triazine & Residual-Amine Monitoring", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <Breadcrumbs items={[
          { name: "Home", url: SITE_URL },
          { name: "Spent Triazine & Residual-Amine Monitoring", url: `${SITE_URL}${PATH}` },
        ]} className="mb-6" />
              <SectionLabel>Technical guide</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                Spent Triazine &amp; Residual-Amine Monitoring
              </h1>
              <p className="text-secondary text-lg mt-6">
                Measuring what happens to a triazine H₂S scavenger after it reacts — residual active
                triazine, excess amine and dithiazine-type by-products — is how you dose precisely,
                detect breakthrough, cut chemical cost and prevent solids. This guide covers why and
                how to monitor spent scavenger.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: monitor residual active triazine, excess amine and dithiazine to stay
                  in the efficient dosing window — enough to remove H₂S, not so much that you waste
                  chemical or form solids. Methods include titration and spectroscopy (e.g. Raman).
                  Over-treatment, not under-treatment, is the usual cause of fouling.
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
            <h2 className="font-heading text-h3 text-primary mb-6">What to Measure</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6 mb-12">
              <li>Residual active (unreacted) triazine — spare capacity / over-dose</li>
              <li>Excess amine — reactant left in the stream</li>
              <li>Dithiazine and reaction by-products — solids/scaling risk</li>
              <li>Outlet H₂S — breakthrough / spec compliance</li>
            </ul>

            <h2 className="font-heading text-h3 text-primary mb-6">Why It Pays Off</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6">
              <li>Trim injection rate to the minimum that meets spec → lower OPEX.</li>
              <li>Prevent dithiazine solids that foul valves and vessels.</li>
              <li>Catch breakthrough before it becomes a safety/spec problem.</li>
              <li>Inform grade selection for hot or continuous service.</li>
            </ul>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">Related Reading</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6">
              <li>
                <Link href="/triazine-foaming-emulsion-troubleshooting" className="text-link">
                  Foaming &amp; emulsion troubleshooting
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
            <h2 className="font-heading text-h3 text-primary mb-4">Optimising your triazine dosing?</h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Vasudev Chemo Pharma supplies MEA Triazine 78% and MMA Triazine 40% with dosing guidance
              and batch COA, and can help you match grade and rate to your monitoring data — global
              export from Gujarat, India.
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
