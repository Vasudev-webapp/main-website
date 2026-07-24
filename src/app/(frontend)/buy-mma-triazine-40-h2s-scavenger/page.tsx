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
const PATH = "/buy-mma-triazine-40-h2s-scavenger";
const MMA_URL = "/product/mma-triazine-40";
const MEA_URL = "/product/mea-triazine-78-h2s-scavenger";
const EDDM_URL = "/product/eddm-non-triazine-h2s-scavenger";

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "Buy MMA Triazine 40% H2S Scavenger — Manufacturer Direct | Vasudev Chemo Pharma",
  description:
    "Buy MMA Triazine 40% (Monomethylamine Triazine, CAS 108-74-7) H2S scavenger direct from an Indian manufacturer. Bulk drums, IBCs, tankers, MOQ 1 MT, COA + SDS, samples and global export. Start your order here.",
  keywords: mergeKeywordClusters([
    "buy mma triazine 40",
    "buy mma triazine h2s scavenger",
    "mma triazine 40 for sale",
    "where to buy mma triazine",
    "monomethylamine triazine buy online",
    "mma triazine h2s scavenger order",
    "mma triazine supplier",
    "h2s scavenger for sale india",
    "mma triazine 40 wholesale",
    "purchase mma triazine cas 108-74-7",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Buy MMA Triazine 40% H2S Scavenger — Manufacturer Direct",
    description:
      "Order MMA Triazine 40% (CAS 108-74-7) direct from an ISO 9001:2015 Indian manufacturer. Drums, IBCs, tankers, MOQ 1 MT, global export.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy MMA Triazine 40% H2S Scavenger",
    description:
      "Manufacturer-direct MMA Triazine 40% (CAS 108-74-7). Bulk packaging, samples, COA, worldwide shipping.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "How do I buy MMA Triazine 40%?",
    answer:
      "Send an enquiry with your quantity, packaging preference and delivery location. Vasudev Chemo Pharma issues a written quotation with EXW and CIF pricing, you confirm the purchase order, we produce and QC the batch, issue the COA and SDS, and dispatch by drum, IBC or bulk tanker with full export documentation. Most first orders complete within a few weeks depending on volume and destination.",
  },
  {
    question: "Can I buy a small trial quantity first?",
    answer:
      "Yes. Although the standard MOQ is 1 metric tonne, we can supply evaluation samples or a small trial quantity with a Certificate of Analysis so your lab and field team can validate performance before committing to a bulk order.",
  },
  {
    question: "What documents come with the order?",
    answer:
      "Every shipment includes a batch-specific Certificate of Analysis (COA), Safety Data Sheet (SDS), commercial invoice and packing list. For export we also provide a certificate of origin and any additional documentation your import regime requires, such as certificates of analysis in your local format.",
  },
  {
    question: "Do you ship MMA Triazine 40% internationally?",
    answer:
      "Yes. We export MMA Triazine 40% worldwide from Indian ports, with regular shipments to the Middle East, South-East Asia, Africa, Europe and the Americas. We arrange sea freight in drums, IBCs or ISO tanks and quote on EXW, FOB, CFR or CIF terms.",
  },
  {
    question: "What payment terms do you offer?",
    answer:
      "We work with standard international trade terms including advance payment and irrevocable letters of credit for export orders. Terms are confirmed on the proforma invoice at the time of order and can be discussed based on order size and relationship history.",
  },
  {
    question: "Is MMA Triazine 40% the right H2S scavenger for me?",
    answer:
      "MMA Triazine 40% suits operators who need a BTEX-free, methyl-substituted triazine with strong high-temperature stability and low solids formation. If you are unsure whether MMA Triazine 40%, MEA Triazine 78% or a non-triazine EDDM chemistry is the best fit, our technical team will review your stream and recommend the right product before you buy.",
  },
];

export default function BuyMmaTriazine40Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Buy MMA Triazine 40% H2S Scavenger", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <Breadcrumbs items={[
          { name: "Home", url: SITE_URL },
          { name: "Buy MMA Triazine 40% H2S Scavenger", url: `${SITE_URL}${PATH}` },
        ]} className="mb-6" />
              <SectionLabel>Buying guide</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                Buy MMA Triazine 40% H₂S Scavenger — Manufacturer Direct
              </h1>
              <p className="text-secondary text-lg mt-6">
                MMA Triazine 40% (Monomethylamine Triazine, CAS 108-74-7) is a BTEX-free liquid
                hydrogen sulphide scavenger used in natural gas sweetening, crude oil stabilisation
                and produced-water treatment. This guide walks you through exactly how to buy it
                direct from Vasudev Chemo Pharma — from first enquiry to delivered drums, IBCs or
                bulk tankers — with COA, SDS and worldwide export handled end to end.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: to buy MMA Triazine 40%, send your quantity, packaging and destination;
                  we return a written EXW/CIF quote, you confirm the PO, and we manufacture, QC,
                  document and ship. MOQ is 1 MT, samples are available, and every batch ships with a
                  Certificate of Analysis from our ISO 9001:2015 facility.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button href="/contact?product=mma-triazine-40" variant="primary">
                  Start Your Order
                </Button>
                <Button href={MMA_URL} variant="secondary">
                  View Product &amp; Specs
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">
              The ordering process, step by step
            </h2>
            <p className="text-secondary leading-relaxed">
              Buying an industrial H2S scavenger should be predictable and well documented. When you
              purchase MMA Triazine 40% from Vasudev Chemo Pharma the process follows a clear
              sequence. It begins with your enquiry, where you share the product grade, quantity,
              packaging format and delivery destination. We respond with a written quotation and a
              proforma invoice that sets out unit price, packaging, Incoterm, lead time and payment
              terms, so nothing is ambiguous. Once you approve, you place the purchase order and,
              where applicable, arrange the agreed payment or letter of credit.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              Production then begins. Because MMA Triazine 40% is manufactured to a defined
              specification, the batch is made and quality-checked against active content, pH,
              specific gravity, appearance and other parameters before release. We issue a
              batch-specific Certificate of Analysis and Safety Data Sheet, prepare the export
              documentation, and dispatch the goods in the packaging you selected. Throughout, you
              have a single point of contact for status updates, documentation queries and logistics
              coordination, which keeps a cross-border chemical purchase from becoming complicated.
            </p>

            <h2 className="font-heading text-h3 text-primary mb-6 mt-12">
              What you need to place an order
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="py-3 px-4 font-semibold">Detail</th>
                    <th className="py-3 px-4 font-semibold">Why it matters</th>
                  </tr>
                </thead>
                <tbody className="text-secondary">
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Quantity &amp; frequency</td>
                    <td className="py-3 px-4">Sets the unit price and production schedule</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Packaging</td>
                    <td className="py-3 px-4">210 L drums, 1000 L IBCs or bulk tanker</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Destination &amp; Incoterm</td>
                    <td className="py-3 px-4">Determines freight, documents and delivered cost</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Application / duty</td>
                    <td className="py-3 px-4">Lets us confirm MMA Triazine 40% is the right fit</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Documentation needs</td>
                    <td className="py-3 px-4">COA format, SDS language, certificates of origin</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Buying from a manufacturer vs a trader
            </h2>
            <p className="text-secondary leading-relaxed">
              When you buy MMA Triazine 40% you can source it from a manufacturer or from a trading
              company that re-sells drums bought elsewhere. The difference matters for both cost and
              quality. A manufacturer controls the production recipe, the raw-material sourcing and the
              quality system, so the active content and physical properties are consistent from batch
              to batch and fully traceable to a production lot. A trader adds a margin and often cannot
              guarantee that consecutive shipments came from the same source or specification, which
              is a real risk for a continuously dosed scavenger where consistency drives treated cost.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              As a direct manufacturer, Vasudev Chemo Pharma also offers something a trader cannot:
              genuine technical support. If your H2S loading changes, if you see foaming or solids
              downstream, or if you want to optimise dosing to reduce chemical spend, we can help
              because we understand the chemistry and the process. That combination of lower delivered
              cost, batch traceability and application support is why operators, oilfield service
              companies and chemical blenders choose to buy their triazine scavenger from the source.
            </p>

            <h2 className="font-heading text-h3 text-primary mb-6 mt-12">
              Confirm the right product before you buy
            </h2>
            <p className="text-secondary leading-relaxed">
              MMA Triazine 40% is one of three H2S scavenging chemistries we manufacture. It is the
              preferred choice where you need a BTEX-free, methyl-substituted triazine with high
              thermal stability and low tendency to form dithiazine solids — for example in hot gas
              streams, DHDS units and systems where MEA triazine has previously caused scaling. If
              your duty is a straightforward, cost-driven bulk gas or crude application, MEA Triazine
              78% may be more economical per kg of H2S removed; if amine pH shift or salt precipitation
              is a concern, a non-triazine EDDM chemistry may fit better. We would rather help you buy
              the correct product once than sell you the wrong one twice, so share your stream details
              and we will confirm the best fit before you commit.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Qualifying MMA Triazine 40% as a vendor
            </h2>
            <p className="text-secondary leading-relaxed">
              For many buyers, the first purchase is preceded by a formal vendor-qualification step,
              and MMA Triazine 40% is straightforward to qualify. The documents most procurement and
              quality teams need are the technical datasheet, a representative Certificate of Analysis,
              the Safety Data Sheet, and evidence of the manufacturer&rsquo;s ISO 9001:2015 quality
              system. We can provide these ahead of an order so your qualification is complete before
              the first shipment arrives. Where your organisation requires supplier questionnaires,
              conflict-mineral or REACH-style declarations, or specific quality clauses on the purchase
              order, we handle those as part of on-boarding rather than treating them as obstacles.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              Buyers also plan for continuity. A scavenger that is dosed continuously cannot run out,
              so it is worth agreeing in advance how repeat orders will be scheduled, what lead time
              to expect, and whether a small buffer stock should be held near the point of use. We work
              with customers on call-off contracts and forward planning so that consistent, batch-traceable
              MMA Triazine 40% keeps arriving without gaps. Because you are dealing directly with the
              manufacturer, changes in demand, packaging or destination can be accommodated quickly,
              and the same technical contact who helped you qualify the product stays with you for
              re-orders, troubleshooting and optimisation. This continuity is a large part of the value
              of buying from the source rather than from a spot-market trader whose supply and quality
              can change between shipments.
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
                <Link href="/mma-triazine-40-price-supplier-india" className="text-link">
                  MMA Triazine 40% price &amp; supplier in India
                </Link>
              </li>
              <li>
                <Link href="/mma-triazine-40-bulk-order-packaging-moq" className="text-link">
                  Bulk order, packaging &amp; MOQ guide
                </Link>
              </li>
              <li>
                <Link href="/mma-triazine-40-specifications-coa-datasheet" className="text-link">
                  Specifications, COA &amp; datasheet
                </Link>
              </li>
              <li>
                <Link href="/why-choose-mma-triazine-40-h2s-scavenger" className="text-link">
                  Why choose MMA Triazine 40%
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
              Ready to buy MMA Triazine 40%?
            </h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Start your order with a quick enquiry. We will confirm pricing, the right product for
              your duty, and lead time — direct from an ISO 9001:2015 certified manufacturer in
              Gujarat, India, with worldwide export.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact?product=mma-triazine-40" variant="primary">
                Start Your Order
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
