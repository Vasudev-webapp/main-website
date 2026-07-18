import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import { applyPageMetaOverride } from "@/lib/seo/page-meta-overrides";
import { mergeKeywordClusters } from "@/lib/seo/keyword-clusters";

const SITE_URL = "https://www.vasudevchemopharma.com";
const PATH = "/storage-tank-h2s-scavenger";
const MEA_URL = "/product/mea-triazine-78-h2s-scavenger";
const MMA_URL = "/product/mma-triazine-40";

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "Storage Tank H2S Scavenger — Vapor-Space Control for Crude & Asphalt | Vasudev Chemo Pharma",
  description:
    "Triazine H2S scavenger for crude oil, fuel oil and asphalt/bitumen storage tanks — suppress toxic H2S in tank vapor space and headspace to protect workers during storage, loading and gauging. MEA & MMA triazine supply. Indian manufacturer, global export.",
  keywords: mergeKeywordClusters([
    "storage tank H2S scavenger",
    "crude oil tank H2S vapor space",
    "asphalt H2S suppressant",
    "bitumen H2S scavenger",
    "fuel oil tank H2S",
    "tank headspace H2S control",
    "triazine tank vapor H2S",
    "crude storage H2S safety",
    "H2S vapor suppression loading",
    "tank gauging H2S exposure control",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Storage Tank H2S Scavenger — Vapor-Space Control for Crude & Asphalt",
    description:
      "Suppress toxic H2S in crude, fuel-oil and asphalt tank vapor space with triazine scavenging to protect workers.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Storage Tank H2S Scavenger — Triazine",
    description:
      "Vapor-space H2S suppression for crude, fuel oil and asphalt storage tanks.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "Why does H2S build up in storage tank vapor space?",
    answer:
      "H2S partitions out of stored crude, fuel oil, asphalt or bitumen and accumulates in the tank vapor space (headspace). Concentrations there can spike dangerously — a serious exposure risk during gauging, sampling, loading and roof/manway work — so the vapor space is treated to keep H2S below safe limits.",
  },
  {
    question: "How does triazine control tank vapor-space H2S?",
    answer:
      "Triazine H2S scavenger is applied to the liquid or dosed so it reacts with the H2S evolving into the headspace, converting it to stable, non-volatile products. This lowers vapor-phase H2S concentration, protecting personnel and reducing odour and corrosion of the tank and vents.",
  },
  {
    question: "Which triazine grade is best for hot asphalt/bitumen tanks?",
    answer:
      "Hot asphalt and bitumen storage favours a grade whose reaction by-products remain soluble to avoid solids — often MMA triazine 40%. For crude and fuel-oil tanks, MEA triazine 78% provides high active content for cost-effective vapor-space suppression. Grade is matched to temperature and product.",
  },
  {
    question: "Is a vapor-space scavenger a substitute for gas monitoring and PPE?",
    answer:
      "No. Chemical H2S suppression reduces the hazard but does not replace personal gas monitors, PPE, ventilation and safe-work procedures. It is one layer of a complete H2S management program for tank operations.",
  },
  {
    question: "How much triazine is needed for a storage tank?",
    answer:
      "Dose is set by the H2S evolution rate and vapor-space concentration target, not a fixed percentage — it depends on product, temperature, throughput and tank turnover. Dose to the measured H2S and monitor; we can recommend a starting rate for your tank.",
  },
  {
    question: "Do you supply triazine for terminals and tank farms?",
    answer:
      "Yes. Vasudev Chemo Pharma manufactures MEA Triazine 78% and MMA Triazine 40% and exports globally with batch COA and application guidance for crude, fuel-oil and asphalt storage-tank H2S suppression.",
  },
];

export default function StorageTankH2sScavengerPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Storage Tank H2S Scavenger", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionLabel>Application guide</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                Storage Tank H₂S Scavenger — Vapor-Space Control
              </h1>
              <p className="text-secondary text-lg mt-6">
                Crude oil, fuel oil, asphalt and bitumen release hydrogen sulfide into storage-tank
                vapor space, where it can reach dangerous concentrations during gauging, sampling and
                loading. Triazine H₂S scavengers suppress that vapor-phase H₂S to protect workers and
                reduce odour and corrosion.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: triazine reacts out the H₂S evolving into a tank&apos;s headspace,
                  lowering vapor-phase concentration. MMA Triazine 40% suits hot asphalt/bitumen tanks
                  (soluble by-products); MEA Triazine 78% suits crude/fuel-oil tanks. It complements —
                  never replaces — gas monitoring, PPE and ventilation.
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
            <h2 className="font-heading text-h3 text-primary mb-6">High-Risk Tank Activities</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6 mb-12">
              <li>Manual gauging, sampling and temperature checks</li>
              <li>Loading / unloading and roof or manway work</li>
              <li>Asphalt and bitumen hot storage</li>
              <li>Crude and fuel-oil terminals and tank farms</li>
            </ul>

            <h2 className="font-heading text-h3 text-primary mb-6">One Layer of H₂S Safety</h2>
            <p className="text-secondary">
              Vapor-space scavenging lowers the chemical hazard, but must sit alongside personal gas
              monitors, PPE, ventilation and safe-work procedures. Dose to the measured H₂S evolution
              and monitor results.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">Related Reading</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6">
              <li>
                <Link href="/marine-bunker-fuel-h2s-scavenger" className="text-link">
                  Marine &amp; bunker-fuel H₂S suppression
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
            <h2 className="font-heading text-h3 text-primary mb-4">Controlling H₂S in storage tanks?</h2>
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
