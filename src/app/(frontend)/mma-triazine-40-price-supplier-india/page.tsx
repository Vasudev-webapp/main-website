import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import FAQSchema from "@/components/seo/FAQSchema";
import FaqAccordion from "@/components/seo/FaqAccordion";
import { applyPageMetaOverride } from "@/lib/seo/page-meta-overrides";
import { mergeKeywordClusters } from "@/lib/seo/keyword-clusters";

const SITE_URL = "https://www.vasudevchemopharma.com";
const PATH = "/mma-triazine-40-price-supplier-india";
const MMA_URL = "/product/mma-triazine-40";
const MEA_URL = "/product/mea-triazine-78-h2s-scavenger";
const EDDM_URL = "/product/eddm-non-triazine-h2s-scavenger";

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "MMA Triazine 40% Price & Supplier in India — CAS 108-74-7 | Vasudev Chemo Pharma",
  description:
    "MMA Triazine 40% (Monomethylamine Triazine, CAS 108-74-7) price, supplier and factory quotes from India. Bulk H2S scavenger in drums, IBCs and tankers, MOQ 1 MT, ISO 9001:2015, global export. Request a live price today.",
  keywords: mergeKeywordClusters([
    "mma triazine 40 price",
    "mma triazine price per kg",
    "mma triazine 40% supplier india",
    "monomethylamine triazine price",
    "mma triazine cas 108-74-7 price",
    "mma triazine manufacturer india",
    "buy mma triazine h2s scavenger",
    "mma triazine 40 bulk price",
    "h2s scavenger price india",
    "mma triazine exporter",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "MMA Triazine 40% Price & Supplier in India (CAS 108-74-7)",
    description:
      "Factory pricing for MMA Triazine 40% H2S scavenger from an Indian manufacturer — bulk drums, IBCs, tankers, MOQ 1 MT, global export.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MMA Triazine 40% Price & Supplier — India",
    description:
      "Live factory quotes for MMA Triazine 40% (CAS 108-74-7) H2S scavenger. Bulk export from Gujarat, India.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "What is the price of MMA Triazine 40%?",
    answer:
      "MMA Triazine 40% (CAS 108-74-7) is quoted per metric tonne and the price depends on order volume, packaging (drums, IBCs or bulk tanker), destination port and prevailing monomethylamine and formaldehyde raw-material costs. Because these inputs move with the market, Vasudev Chemo Pharma issues a live written quote rather than a fixed list price. Share your quantity and delivery location and we typically respond within 24 hours with an ex-works and CIF price.",
  },
  {
    question: "Who is a reliable MMA Triazine 40% supplier in India?",
    answer:
      "Vasudev Chemo Pharma is a direct manufacturer of MMA Triazine 40% based in Gujarat, India, operating an ISO 9001:2015 certified facility. Buying from the manufacturer rather than a trader removes intermediary margin, guarantees batch traceability with a Certificate of Analysis, and lets you lock consistent quality across repeat orders.",
  },
  {
    question: "What is the minimum order quantity (MOQ)?",
    answer:
      "The standard MOQ for MMA Triazine 40% is 1 metric tonne. Smaller trial or evaluation quantities can be arranged on request so you can validate performance in your stream before committing to a bulk contract.",
  },
  {
    question: "Does the price include delivery and export documentation?",
    answer:
      "We quote both ex-works (EXW) and delivered (CIF/CFR) terms. Delivered quotes include export packaging, inland haulage, port charges and full documentation — commercial invoice, packing list, COA, SDS and certificate of origin — so the landed cost is transparent before you order.",
  },
  {
    question: "Can I get a sample before placing a bulk order?",
    answer:
      "Yes. We provide evaluation samples with a Certificate of Analysis so your laboratory or field team can confirm active content, scavenging efficiency and compatibility before scaling to a full purchase order.",
  },
  {
    question: "How is MMA Triazine 40% priced compared with MEA Triazine 78%?",
    answer:
      "MMA Triazine 40% is a lower-concentration, methyl-substituted grade, so the per-tonne product price differs from MEA Triazine 78%. The more meaningful comparison is treated-cost per kg of H2S removed, which depends on your gas or liquid H2S loading. We can run a dosing-cost comparison for your duty so you choose on delivered value, not headline price.",
  },
];

export default function MmaTriazine40PriceSupplierIndiaPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "MMA Triazine 40% Price & Supplier India", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <Breadcrumbs items={[
          { name: "Home", url: SITE_URL },
          { name: "MMA Triazine 40% Price & Supplier India", url: `${SITE_URL}${PATH}` },
        ]} className="mb-6" />
              <SectionLabel>Pricing & sourcing</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                MMA Triazine 40% Price &amp; Supplier in India (CAS 108-74-7)
              </h1>
              <p className="text-secondary text-lg mt-6">
                Looking for a live price on MMA Triazine 40% — the monomethylamine-based, BTEX-free
                hydrogen sulphide scavenger (CAS 108-74-7)? Vasudev Chemo Pharma manufactures and
                exports MMA Triazine 40% direct from Gujarat, India, in drums, IBC totes and bulk
                tankers, with factory pricing, batch COA and worldwide logistics.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: MMA Triazine 40% is sold per metric tonne and priced against your
                  order volume, packaging, destination and current raw-material costs. As a direct
                  Indian manufacturer we quote live EXW and CIF prices — usually within 24 hours —
                  with a minimum order of 1 MT and samples available on request.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button href="/contact?product=mma-triazine-40" variant="primary">
                  Request a Live Price
                </Button>
                <Button href={MMA_URL} variant="secondary">
                  View MMA Triazine 40% Product
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">
              What determines the price of MMA Triazine 40%?
            </h2>
            <p className="text-secondary leading-relaxed">
              MMA Triazine 40% is a manufactured specialty chemical, not a commodity with a single
              published rate, so the price you pay reflects several moving variables. The two largest
              cost drivers are the raw materials — monomethylamine (MMA) and formaldehyde — which are
              petrochemical derivatives whose prices track energy and feedstock markets. When those
              inputs rise or fall, the finished scavenger price moves with them, which is why a
              responsible manufacturer quotes on the day rather than promising a fixed list price that
              would quickly become inaccurate.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              Order volume is the next major factor. A single 210-litre drum carries more handling and
              packaging cost per kilogram than a full 20-tonne tanker, so the unit price falls as the
              order size grows. Packaging format, destination port, Incoterms (EXW, FOB, CFR or CIF),
              and whether you need specialised documentation or third-party inspection all feed into
              the final landed cost. Finally, contract structure matters: a one-off spot purchase is
              priced differently from an annual call-off contract with agreed monthly volumes, where
              we can offer more stable pricing in exchange for committed offtake.
            </p>

            <h2 className="font-heading text-h3 text-primary mb-6 mt-12">
              Price factors at a glance
            </h2>
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
                    <td className="py-3 px-4 font-medium">Order volume</td>
                    <td className="py-3 px-4">Larger volumes (tanker &gt; IBC &gt; drum) lower the unit price</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Raw-material cost</td>
                    <td className="py-3 px-4">Monomethylamine &amp; formaldehyde markets drive the base cost</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Packaging</td>
                    <td className="py-3 px-4">210 L drums, 1000 L IBCs or bulk tanker each carry different cost</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Incoterms &amp; destination</td>
                    <td className="py-3 px-4">EXW vs CIF, port distance and freight change the delivered price</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Contract type</td>
                    <td className="py-3 px-4">Annual call-off contracts can stabilise pricing vs spot orders</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-secondary text-sm mt-4">
              For an accurate figure, tell us your annual or per-shipment volume and delivery port and
              we will return a written quote. See full specifications on the{" "}
              <Link href={MMA_URL} className="text-link">
                MMA Triazine 40% product page
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Why buy MMA Triazine 40% direct from the manufacturer
            </h2>
            <p className="text-secondary leading-relaxed">
              Buying MMA Triazine 40% from Vasudev Chemo Pharma means buying from the company that
              actually makes it, not from a re-packer or trading intermediary. That has three
              practical benefits for a procurement or operations team. First, price: removing the
              middleman removes a margin layer, so your delivered cost is lower for the same quality.
              Second, quality assurance: every batch ships with a Certificate of Analysis tied to a
              traceable production lot, manufactured under an ISO 9001:2015 quality system, so the
              active content and physical properties you validated in your trial are the same in every
              repeat order. Third, technical support: because our team understands the chemistry and
              the process, we can advise on dosing, compatibility and troubleshooting rather than
              simply moving boxes.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              India has become a competitive global source for triazine H2S scavengers because of its
              established amine and formaldehyde supply chains, skilled specialty-chemical
              manufacturing base and favourable export logistics from west-coast ports in Gujarat. For
              buyers in the Middle East, South-East Asia, Africa, Europe and the Americas, an Indian
              manufacturer often delivers a strong combination of price, quality and lead time
              compared with domestic suppliers or long-haul alternatives. We routinely ship MMA
              Triazine 40% to oil and gas operators, service companies and chemical blenders across
              these regions.
            </p>

            <h2 className="font-heading text-h3 text-primary mb-6 mt-12">
              How to request a quote
            </h2>
            <p className="text-secondary leading-relaxed">
              To get the fastest, most accurate quote, include the following in your enquiry: the
              grade (MMA Triazine 40%), the quantity per shipment and expected annual volume, your
              preferred packaging (drums, IBCs or bulk tanker), the delivery port or city, and the
              Incoterm you work on. If you have a target H2S removal duty — for example a gas flow
              rate and inlet/outlet H2S specification — share that too, and we can include an
              indicative dosing rate and treated-cost estimate alongside the product price. Most
              enquiries receive a written response within one business day, and we can provide a
              sample with COA for laboratory or field evaluation before you commit to a bulk order.
            </p>
          </div>
        </section>

        <section className="py-16 bg-surface">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">Related Reading</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6">
              <li>
                <Link href={MMA_URL} className="text-link">
                  MMA Triazine 40% — full product page &amp; specifications
                </Link>
              </li>
              <li>
                <Link href="/mma-triazine-40-bulk-order-packaging-moq" className="text-link">
                  Bulk order, packaging &amp; MOQ guide
                </Link>
              </li>
              <li>
                <Link href="/mma-triazine-40-export-supply-countries" className="text-link">
                  Global export &amp; supply countries
                </Link>
              </li>
              <li>
                <Link href="/mma-triazine-40-specifications-coa-datasheet" className="text-link">
                  Specifications, COA &amp; datasheet
                </Link>
              </li>
              <li>
                <Link href="/mea-triazine-vs-mma-triazine" className="text-link">
                  MEA Triazine vs MMA Triazine — which to choose
                </Link>
              </li>
              <li>
                <Link href={MEA_URL} className="text-link">
                  MEA Triazine 78% — product page
                </Link>
              </li>
              <li>
                <Link href={EDDM_URL} className="text-link">
                  EDDM non-triazine H₂S scavenger — product page
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-8">Frequently Asked Questions</h2>
            <FaqAccordion items={faqs} />
          </div>
        </section>

        <section className="py-16 text-center bg-surface">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h3 text-primary mb-4">
              Get a live MMA Triazine 40% price today
            </h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Send us your volume, packaging and destination and receive a written EXW/CIF quote —
              typically within 24 hours — direct from an ISO 9001:2015 certified manufacturer in
              Gujarat, India.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact?product=mma-triazine-40" variant="primary">
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
