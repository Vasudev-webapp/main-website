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
const PATH = "/marine-bunker-fuel-h2s-scavenger";
const MEA_URL = "/product/mea-triazine-78-h2s-scavenger";
const MMA_URL = "/product/mma-triazine-40";

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "Marine & Bunker Fuel H2S Scavenger — Triazine | Vasudev Chemo Pharma",
  description:
    "Triazine H2S scavenger for marine fuel, bunker fuel oil, fuel-oil cargo tanks and tankers — suppress H2S vapour to meet ISO 8217 / cargo H2S limits and protect crews during storage and transport. MEA & MMA triazine supply. Indian manufacturer, global export.",
  keywords: mergeKeywordClusters([
    "marine fuel H2S scavenger",
    "bunker fuel H2S",
    "fuel oil cargo H2S scavenger",
    "ISO 8217 H2S limit",
    "tanker H2S suppression",
    "residual fuel oil H2S",
    "triazine bunker fuel",
    "marine cargo H2S vapour",
    "H2S scavenger for ships",
    "VLSFO H2S control",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Marine & Bunker Fuel H2S Scavenger — Triazine",
    description:
      "Suppress H2S vapour in marine/bunker fuel and cargo tanks to meet ISO 8217 limits and protect crews.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marine & Bunker Fuel H2S Scavenger",
    description:
      "Triazine H2S suppression for marine fuel, bunker fuel oil and fuel-oil cargo tanks.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "Why is H2S a concern in marine and bunker fuel?",
    answer:
      "Residual fuel oil, bunker fuel and heavy fuel-oil cargoes can evolve hydrogen sulfide into tank vapour space. This is a crew-safety hazard during loading, transport and discharge, and marine fuel standards such as ISO 8217 place limits on H2S in the liquid phase, so suppliers manage H2S with scavengers.",
  },
  {
    question: "How does triazine reduce H2S in fuel oil?",
    answer:
      "Triazine H2S scavenger is dosed into the fuel or cargo so it reacts with hydrogen sulfide to form stable, non-volatile products, lowering both liquid-phase H2S and the vapour concentration above it. This helps meet cargo/fuel H2S limits and protects personnel in enclosed spaces.",
  },
  {
    question: "Which triazine grade suits heavy fuel oil and bunkers?",
    answer:
      "Heavy, sometimes warm fuel-oil service favours a grade with soluble reaction by-products to avoid solids — often MMA triazine 40% — while MEA triazine 78% offers high-active, cost-effective dosing. Grade is selected to the fuel, temperature and H2S load.",
  },
  {
    question: "Does triazine affect fuel quality or ISO 8217 parameters?",
    answer:
      "Dosed correctly to the H2S load, triazine targets H2S without materially affecting bulk fuel properties. Over-treatment should be avoided; dose to the measured H2S and confirm the treated fuel meets the relevant specification before delivery.",
  },
  {
    question: "Where is the scavenger added in the marine fuel chain?",
    answer:
      "It can be dosed at the refinery/blending stage, into storage or barge/cargo tanks, or during bunkering, with mixing and contact time so the scavenger reacts before the fuel is enclosed or transferred.",
  },
  {
    question: "Do you supply triazine for marine fuel and cargo operations?",
    answer:
      "Yes. Vasudev Chemo Pharma manufactures MEA Triazine 78% and MMA Triazine 40% and exports globally with batch COA and application guidance for marine fuel, bunker and fuel-oil cargo H2S suppression.",
  },
];

export default function MarineBunkerFuelH2sScavengerPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Marine & Bunker Fuel H2S Scavenger", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <Breadcrumbs items={[
          { name: "Home", url: SITE_URL },
          { name: "Marine & Bunker Fuel H2S Scavenger", url: `${SITE_URL}${PATH}` },
        ]} className="mb-6" />
              <SectionLabel>Application guide</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                Marine &amp; Bunker Fuel H₂S Scavenger — Triazine
              </h1>
              <p className="text-secondary text-lg mt-6">
                Residual and bunker fuel oils evolve hydrogen sulfide into cargo and storage tank
                vapour space — a crew-safety hazard and a fuel-specification problem. Triazine H₂S
                scavengers lower liquid- and vapour-phase H₂S to help meet ISO 8217 limits and protect
                people during storage, bunkering and transport.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: triazine is dosed into fuel oil/cargo to react out H₂S, cutting both
                  liquid-phase H₂S and headspace vapour to meet marine-fuel limits. MMA Triazine 40%
                  suits heavy/warm fuel (soluble by-products); MEA Triazine 78% gives high-active
                  dosing. Dose to the measured H₂S and confirm spec before delivery.
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
            <h2 className="font-heading text-h3 text-primary mb-6">Where H₂S Is Managed in the Fuel Chain</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6 mb-12">
              <li>Refinery / fuel-oil blending stage</li>
              <li>Shore storage and barge / cargo tanks</li>
              <li>During bunkering and transfer</li>
              <li>Fuel-oil tanker cargoes and enclosed-space entry</li>
            </ul>

            <h2 className="font-heading text-h3 text-primary mb-6">Dosing Notes</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6">
              <li>Dose to the measured H₂S load; avoid over-treatment.</li>
              <li>Select a soluble-by-product grade for heavy/warm fuel.</li>
              <li>Ensure mixing and contact time before enclosure/transfer.</li>
              <li>Confirm treated fuel meets the applicable H₂S specification.</li>
            </ul>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">Related Reading</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6">
              <li>
                <Link href="/storage-tank-h2s-scavenger" className="text-link">
                  Storage-tank vapor-space H₂S control
                </Link>
              </li>
              <li>
                <Link href="/tank-truck-railcar-h2s-transport" className="text-link">
                  Rail/road/ISO-tank transport H₂S suppression
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
            <h2 className="font-heading text-h3 text-primary mb-4">Managing H₂S in marine fuel?</h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Vasudev Chemo Pharma supplies MEA Triazine 78% and MMA Triazine 40% with application
              guidance, batch COA, and global export from our ISO 9001:2015 certified facility in
              Gujarat, India.
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
