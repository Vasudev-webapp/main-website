import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import FAQSchema from "@/components/seo/FAQSchema";
import { applyPageMetaOverride } from "@/lib/seo/page-meta-overrides";
import { mergeKeywordClusters } from "@/lib/seo/keyword-clusters";
import { EDDM_SLUG } from "@/lib/seo/eddm-constants";

const SITE_URL = "https://www.vasudevchemopharma.com";
const PATH = "/eddm-price-supplier-india";
const PRODUCT_URL = `/product/${EDDM_SLUG}`;

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "EDDM Price & Supplier — India Manufacturer & Bulk Export (CAS 3586-55-8) | Vasudev Chemo Pharma",
  description:
    "Buy EDDM (Ethylenedioxy dimethanol, CAS 3586-55-8) direct from an Indian manufacturer. Bulk supply in drums and IBCs, 90/92/95 grades, FOB/CIF/DDP export to the Gulf, Middle East, Africa, SE Asia and Europe. Request current EDDM price and free samples.",
  keywords: mergeKeywordClusters([
    "EDDM price",
    "EDDM supplier",
    "EDDM manufacturer India",
    "buy EDDM",
    "EDDM price per kg",
    "EDDM price per ton",
    "ethylenedioxy dimethanol supplier India",
    "EDDM exporter India",
    "EDDM bulk supply",
    "EDDM CAS 3586-55-8 price",
    "EDDM supplier UAE",
    "EDDM supplier Middle East",
    "EDDM CIF price",
    "EDDM FOB price",
    "EDDM IBC drum supply",
    "EDDM manufacturer Gujarat",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "EDDM Price & Supplier — India Manufacturer & Bulk Export",
    description:
      "Buy EDDM (CAS 3586-55-8) direct from an Indian manufacturer — bulk drums/IBCs, 90/92/95 grades, FOB/CIF/DDP export worldwide.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EDDM Price & Supplier — India Manufacturer",
    description:
      "Bulk EDDM (CAS 3586-55-8) from an Indian manufacturer. FOB/CIF/DDP export. Request price and samples.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "What determines the price of EDDM?",
    answer:
      "EDDM price depends on grade (90%, 92% or 95% active), order volume, packaging (25 kg drum, 200 kg drum or 1000 kg IBC), incoterms (FOB, CIF or DDP), destination port and prevailing raw-material costs. Higher-active grades cost more per kg but deliver more active per kg, lowering the effective cost and freight per kg of active.",
  },
  {
    question: "Can I buy EDDM directly from the manufacturer in India?",
    answer:
      "Yes. Vasudev Chemo Pharma is an Indian manufacturer of EDDM (CAS 3586-55-8) and supplies direct — with no intermediaries — from our ISO 9001:2015 certified facility in Gujarat, India. Direct factory supply means competitive pricing, batch COA and reliable lead times.",
  },
  {
    question: "What are the minimum order quantity and packaging options?",
    answer:
      "EDDM is available in 25 kg HDPE drums, 200 kg MS drums and 1000 kg IBC tanks, with roughly 22 MT per 20-foot FCL. Minimum order quantity depends on grade and destination; contact us for the current MOQ and a packaging recommendation for your volume.",
  },
  {
    question: "Which countries do you export EDDM to?",
    answer:
      "We export EDDM globally, with a focus on the Gulf and Middle East (UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain), plus Africa, South-East Asia and Europe. Export is offered on FOB, CIF and DDP terms from Indian ports.",
  },
  {
    question: "How do I get a current EDDM price quote?",
    answer:
      "Send your required grade, quantity, packaging, destination port and preferred incoterm through our contact form. We respond with pricing, lead time and documentation, and can provide a free evaluation sample for qualification testing.",
  },
  {
    question: "Do you provide COA, SDS and export documentation?",
    answer:
      "Yes. Every batch ships with a certificate of analysis (COA). We provide the safety data sheet (SDS), technical data sheet (TDS) and all standard export documentation, and can support REACH-ready documentation requests.",
  },
];

export default function EddmPriceSupplierIndiaPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "EDDM Price & Supplier — India", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <Breadcrumbs items={[
          { name: "Home", url: SITE_URL },
          { name: "EDDM Price & Supplier — India", url: `${SITE_URL}${PATH}` },
        ]} className="mb-6" />
              <SectionLabel>Pricing &amp; export</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                EDDM Price &amp; Supplier — India Manufacturer &amp; Bulk Export
              </h1>
              <p className="text-secondary text-lg mt-6">
                Buy (ethylenedioxy)dimethanol (EDDM, CAS 3586-55-8) direct from an Indian manufacturer.
                Bulk supply in drums and IBCs across 90%, 92% and 95% grades, with FOB, CIF and DDP
                export to the Gulf, wider Middle East, Africa, South-East Asia and Europe.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: EDDM pricing is quoted by grade, volume, packaging, incoterm and
                  destination. Vasudev Chemo Pharma supplies EDDM (CAS 3586-55-8) direct from Gujarat,
                  India — with batch COA, free evaluation samples, and FOB/CIF/DDP export worldwide.
                  Send your requirement for a current quote.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button href="/contact" variant="primary">
                  Request current EDDM price
                </Button>
                <Button href={PRODUCT_URL} variant="secondary">
                  View EDDM Product Page
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h3 text-primary mb-8">What Affects Your EDDM Price</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="py-3 px-4 font-semibold">Factor</th>
                    <th className="py-3 px-4 font-semibold">Effect on price</th>
                  </tr>
                </thead>
                <tbody className="text-secondary">
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Grade (90 / 92 / 95%)</td>
                    <td className="py-3 px-4">Higher active = higher per-kg price, lower cost per kg of active</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Order volume</td>
                    <td className="py-3 px-4">Larger volumes attract better per-kg pricing</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Packaging</td>
                    <td className="py-3 px-4">IBC generally more economical than drums at volume</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Incoterm</td>
                    <td className="py-3 px-4">FOB, CIF or DDP changes landed cost</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Destination port</td>
                    <td className="py-3 px-4">Freight varies by route and shipping mode</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-secondary text-sm mt-4">
              Not sure which grade to price? See the{" "}
              <Link href="/eddm-grades-selection-guide" className="text-link">
                EDDM grades selection guide
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">Why Buy From Vasudev Chemo Pharma</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6 mb-12">
              <li>Direct Indian manufacturer — competitive factory pricing, no intermediaries</li>
              <li>ISO 9001:2015 certified facility in Gujarat, India</li>
              <li>Grades 90%, 92% and 95% with batch-specific COA</li>
              <li>Drums and IBCs; ≈22 MT per 20-foot FCL</li>
              <li>FOB / CIF / DDP export to the Gulf, Middle East, Africa, SE Asia and Europe</li>
              <li>Free evaluation samples and SDS / TDS documentation</li>
            </ul>

            <h2 className="font-heading text-h3 text-primary mb-6">Related Reading</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6">
              <li>
                <Link href="/eddm-grades-selection-guide" className="text-link">
                  EDDM grades 90% / 92% / 95% — selection guide
                </Link>
              </li>
              <li>
                <Link href="/eddm-cas-3586-55-8-properties" className="text-link">
                  EDDM CAS 3586-55-8 — properties &amp; specifications
                </Link>
              </li>
              <li>
                <Link href="/eddm-multiphase-h2s-scavenger" className="text-link">
                  EDDM as a non-triazine multiphase H₂S scavenger
                </Link>
              </li>
              <li>
                <Link href={PRODUCT_URL} className="text-link">
                  EDDM (Ethylenedioxy)dimethanol — main product page
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
            <h2 className="font-heading text-h3 text-primary mb-4">Get a current EDDM quote</h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Send your grade, quantity, packaging, destination port and incoterm — Vasudev Chemo
              Pharma will respond with EDDM (CAS 3586-55-8) pricing, lead time and documentation, plus
              a free evaluation sample.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact" variant="primary">
                Request a Quote
              </Button>
              <Link href={PRODUCT_URL} className="text-link">
                View EDDM Product Page →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
