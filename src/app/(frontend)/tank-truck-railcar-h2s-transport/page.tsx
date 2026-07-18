import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import { applyPageMetaOverride } from "@/lib/seo/page-meta-overrides";
import { mergeKeywordClusters } from "@/lib/seo/keyword-clusters";

const SITE_URL = "https://www.vasudevchemopharma.com";
const PATH = "/tank-truck-railcar-h2s-transport";
const MEA_URL = "/product/mea-triazine-78-h2s-scavenger";
const MMA_URL = "/product/mma-triazine-40";

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "Tank Truck & Railcar H2S Scavenger — Transport Vapor Control | Vasudev Chemo Pharma",
  description:
    "Triazine H2S scavenger for tank trucks, railcars and ISO tanks transporting crude, condensate and fuel oil — suppress H2S vapour build-up in transit to protect drivers and loaders and meet transport safety limits. MEA & MMA triazine. Indian manufacturer, global export.",
  keywords: mergeKeywordClusters([
    "tank truck H2S scavenger",
    "railcar H2S scavenger",
    "ISO tank H2S control",
    "crude transport H2S vapour",
    "condensate railcar H2S",
    "triazine transport H2S suppression",
    "loading rack H2S scavenger",
    "H2S in transit tank car",
    "fuel oil truck H2S",
    "H2S vapour suppression transport",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Tank Truck & Railcar H2S Scavenger — Transport Vapor Control",
    description:
      "Suppress H2S vapour build-up in tank trucks, railcars and ISO tanks in transit with triazine scavenging.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tank Truck & Railcar H2S Scavenger",
    description:
      "Triazine H2S vapour suppression for road/rail/ISO-tank transport of crude, condensate and fuel oil.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "Why does H2S build up during road and rail transport?",
    answer:
      "Crude, condensate and fuel-oil cargoes continue to evolve hydrogen sulfide into the tank vapour space during transit. In a sealed tank truck, railcar or ISO tank, H2S can accumulate to dangerous levels, creating a serious exposure risk at unloading, sampling and manway opening. Treating the cargo suppresses that build-up.",
  },
  {
    question: "How does triazine suppress transport H2S?",
    answer:
      "Triazine H2S scavenger is dosed into the cargo at loading so it reacts with H2S to form stable, non-volatile products, reducing vapour-space H2S build-up during transport. Adequate mixing at loading ensures the scavenger contacts the cargo. Conditions can change after loading, so vapour-space H2S must be monitored and verified as safe before unloading, sampling or manway opening rather than assumed safe for the whole transit.",
  },
  {
    question: "Which triazine grade is used for transport treatment?",
    answer:
      "MEA Triazine 78% provides high active content for cost-effective dosing at the loading rack; MMA Triazine 40% is chosen for warmer cargoes or where more soluble by-products reduce solids. Grade and dose are matched to the cargo, transit time and expected H2S evolution.",
  },
  {
    question: "Does treating the cargo replace transport safety procedures?",
    answer:
      "No. Chemical suppression is one layer. Personal gas monitors, PPE, controlled unloading, ventilation and adherence to dangerous-goods transport rules remain essential. Scavenging reduces — but does not eliminate — the need for H2S safe-work practices.",
  },
  {
    question: "How much triazine is dosed for a transport load?",
    answer:
      "Dose is set by the cargo's H2S evolution rate, transit time and vapour-space target, not a fixed percentage. Dose to the measured/expected H2S and confirm safe vapour levels before dispatch, then re-verify before unloading because conditions can change in transit; we can suggest a starting rate for your cargo and route.",
  },
  {
    question: "Do you supply triazine for loading terminals and logistics operators?",
    answer:
      "Yes. Vasudev Chemo Pharma manufactures MEA Triazine 78% and MMA Triazine 40% and exports globally with batch COA and dosing guidance for tank-truck, railcar and ISO-tank H2S vapour suppression.",
  },
];

export default function TankTruckRailcarH2sTransportPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Tank Truck & Railcar H2S Scavenger", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionLabel>Application guide</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                Tank Truck &amp; Railcar H₂S Scavenger — Transport Vapor Control
              </h1>
              <p className="text-secondary text-lg mt-6">
                Crude, condensate and fuel-oil cargoes evolve hydrogen sulfide into the vapour space of
                sealed tank trucks, railcars and ISO tanks during transit — a serious exposure risk at
                unloading. Triazine H₂S scavengers, dosed at loading, suppress that vapour build-up.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: dose triazine into the cargo at the loading rack to react out H₂S and
                  keep vapour-space levels safe through transit. MEA Triazine 78% for cost-effective
                  dosing; MMA Triazine 40% for warm cargoes. It complements — never replaces — gas
                  monitors, PPE and dangerous-goods procedures.
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
            <h2 className="font-heading text-h3 text-primary mb-6">Where It Applies</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6 mb-12">
              <li>Crude and condensate tank trucks and railcars</li>
              <li>ISO-tank fuel-oil and heavy-liquid shipments</li>
              <li>Loading racks and gathering-to-terminal logistics</li>
              <li>Long-transit or warm-climate routes with high H₂S evolution</li>
            </ul>

            <h2 className="font-heading text-h3 text-primary mb-6">Dosing &amp; Safety</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6">
              <li>Dose at loading with mixing so the scavenger contacts the cargo.</li>
              <li>Set dose by H₂S evolution, transit time and vapour-space target.</li>
              <li>Confirm safe vapour levels before dispatch.</li>
              <li>Maintain gas monitoring, PPE and dangerous-goods compliance.</li>
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
                <Link href="/marine-bunker-fuel-h2s-scavenger" className="text-link">
                  Marine &amp; bunker-fuel H₂S suppression
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
            <h2 className="font-heading text-h3 text-primary mb-4">Suppressing H₂S in transit?</h2>
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
