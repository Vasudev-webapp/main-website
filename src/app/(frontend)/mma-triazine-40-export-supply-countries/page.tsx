import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import FaqAccordion from "@/components/seo/FaqAccordion";
import { applyPageMetaOverride } from "@/lib/seo/page-meta-overrides";
import { mergeKeywordClusters } from "@/lib/seo/keyword-clusters";

const SITE_URL = "https://www.vasudevchemopharma.com";
const PATH = "/mma-triazine-40-export-supply-countries";
const MMA_URL = "/product/mma-triazine-40";
const MEA_URL = "/product/mea-triazine-78-h2s-scavenger";

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "MMA Triazine 40% Export & Global Supply — India to Middle East, USA, Asia | Vasudev Chemo Pharma",
  description:
    "MMA Triazine 40% (CAS 108-74-7) exported worldwide from India — UAE, Saudi Arabia, Qatar, Oman, USA, Vietnam, Thailand and more. HS code 29336990, export documentation, sea freight in drums, IBCs and ISO tanks. Request an export quote.",
  keywords: mergeKeywordClusters([
    "mma triazine 40 export",
    "mma triazine exporter india",
    "mma triazine supplier uae",
    "mma triazine supplier saudi arabia",
    "mma triazine h2s scavenger export",
    "h2s scavenger exporter india",
    "monomethylamine triazine export",
    "mma triazine hs code 29336990",
    "mma triazine supplier usa",
    "mma triazine middle east supply",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "MMA Triazine 40% Export & Global Supply",
    description:
      "Worldwide export of MMA Triazine 40% (CAS 108-74-7) from India — Middle East, USA, South-East Asia and beyond. Full export documentation.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MMA Triazine 40% Export & Global Supply",
    description:
      "MMA Triazine 40% (CAS 108-74-7) exported from India to the Middle East, USA and Asia. HS 29336990.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "Which countries do you export MMA Triazine 40% to?",
    answer:
      "Vasudev Chemo Pharma exports MMA Triazine 40% worldwide from India, with regular shipments to the Middle East (UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain), South-East Asia (Vietnam, Thailand, Malaysia, Indonesia), plus Africa, Europe and the Americas including the USA. If your country is not listed, ask us — we ship to most markets that allow import of triazine H2S scavengers.",
  },
  {
    question: "What is the HS code for MMA Triazine 40%?",
    answer:
      "MMA Triazine 40% is exported under HS code 29336990, which covers heterocyclic compounds with nitrogen hetero-atoms. We confirm the classification and any destination-specific tariff requirements as part of the export documentation.",
  },
  {
    question: "What export documentation do you provide?",
    answer:
      "Each export shipment includes a commercial invoice, packing list, batch Certificate of Analysis, Safety Data Sheet and certificate of origin. Additional documents such as legalised invoices, phytosanitary or dangerous-goods declarations, and inspection certificates can be arranged where your import regime requires them.",
  },
  {
    question: "How is MMA Triazine 40% shipped internationally?",
    answer:
      "We ship by sea freight in 210-litre HDPE drums (palletised), 1000-litre IBC totes, or ISO tanks for bulk volumes. Shipments are prepared to international dangerous-goods and packaging standards where applicable, and we quote on EXW, FOB, CFR or CIF terms.",
  },
  {
    question: "Why source MMA Triazine 40% from India?",
    answer:
      "India has a mature amine and formaldehyde supply chain and a strong specialty-chemical manufacturing base, which lets an Indian manufacturer offer competitive pricing, consistent quality and reliable export logistics. For Gulf, Asian, African and American buyers, sourcing from India frequently delivers a better combination of cost, quality and lead time than local or long-haul alternatives.",
  },
  {
    question: "Can you deliver on CIF terms to my port?",
    answer:
      "Yes. We routinely quote and ship on CIF and CFR terms to major ports, handling inland haulage, export clearance, ocean freight and insurance so you receive a transparent landed cost. Share your destination port and we will include delivered pricing in the quote.",
  },
];

export default function MmaTriazine40ExportPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "MMA Triazine 40% Export & Global Supply", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionLabel>Global export</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                MMA Triazine 40% Export &amp; Global Supply
              </h1>
              <p className="text-secondary text-lg mt-6">
                MMA Triazine 40% (Monomethylamine Triazine, CAS 108-74-7) is manufactured in Gujarat,
                India and exported to oil and gas operators, service companies and chemical blenders
                around the world. From Gulf gas plants to South-East Asian fields and North American
                terminals, Vasudev Chemo Pharma handles the product, packaging, documentation and
                freight so your H2S scavenger arrives ready to use.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: we export MMA Triazine 40% worldwide from India under HS code
                  29336990 — to the Middle East, South-East Asia, Africa, Europe and the Americas —
                  in drums, IBCs and ISO tanks, on EXW, FOB, CFR or CIF terms, with full export
                  documentation including COA, SDS and certificate of origin.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button href="/contact?product=mma-triazine-40" variant="primary">
                  Request an Export Quote
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
              Key export markets for MMA Triazine 40%
            </h2>
            <p className="text-secondary leading-relaxed">
              Demand for MMA Triazine 40% follows the world&rsquo;s sour gas and crude oil production.
              The Middle East is a core market: Gulf operators in the UAE, Saudi Arabia, Qatar, Oman,
              Kuwait and Bahrain treat large volumes of sour gas and crude, and the region&rsquo;s hot
              operating temperatures play to MMA triazine&rsquo;s strength in thermally demanding
              service. South-East Asia — Vietnam, Thailand, Malaysia and Indonesia — is another active
              region, along with Africa&rsquo;s producing basins and the Americas, where North
              American operators and blenders use triazine scavengers across upstream and midstream
              systems. We tailor packaging and Incoterms to each destination&rsquo;s logistics.
            </p>
            <div className="overflow-x-auto mt-6">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="py-3 px-4 font-semibold">Region</th>
                    <th className="py-3 px-4 font-semibold">Representative markets</th>
                  </tr>
                </thead>
                <tbody className="text-secondary">
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Middle East</td>
                    <td className="py-3 px-4">UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">South-East Asia</td>
                    <td className="py-3 px-4">Vietnam, Thailand, Malaysia, Indonesia</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Americas</td>
                    <td className="py-3 px-4">USA, Canada, Latin America</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Africa</td>
                    <td className="py-3 px-4">North &amp; West African producing basins</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Europe</td>
                    <td className="py-3 px-4">Refining &amp; gas-processing hubs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Export logistics and documentation
            </h2>
            <p className="text-secondary leading-relaxed">
              Exporting a specialty chemical reliably depends on getting the paperwork and packing
              right the first time. MMA Triazine 40% moves under HS code 29336990, and every shipment
              is accompanied by a full document set: commercial invoice, packing list, batch
              Certificate of Analysis, Safety Data Sheet and certificate of origin. Where a
              destination requires additional documentation — legalised invoices, dangerous-goods
              declarations, or third-party inspection certificates — we prepare it in advance so
              customs clearance is smooth. Our proximity to west-coast Indian ports gives good sailing
              options to the Gulf, Asia, Africa, Europe and the Americas, and we quote on the Incoterm
              you prefer, from ex-works through to CIF at your destination port.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              Packaging is matched to the shipment. Smaller export orders travel as palletised,
              shrink-wrapped 210-litre drums; medium volumes ship in 1000-litre IBC totes; and large
              contracts move in ISO tanks for the lowest cost per kilogram. All packaging is GHS
              labelled and prepared to the relevant international transport standards. Because MMA
              Triazine 40% has a high flash point (above 93&deg;C) and a low freezing point (below
              &minus;10&deg;C), it tolerates typical ocean-freight conditions well, though we still
              advise on storage and any cold-weather handling for your specific route.
            </p>

            <h2 className="font-heading text-h3 text-primary mb-6 mt-12">
              A dependable Indian supply partner
            </h2>
            <p className="text-secondary leading-relaxed">
              Consistent international supply is about more than a single shipment. Operators running
              continuous H2S-scavenger injection cannot afford a gap in availability, so we work with
              export customers on forward planning, call-off contracts and buffer stock strategies to
              keep product flowing. As a direct manufacturer with an ISO 9001:2015 quality system,
              Vasudev Chemo Pharma gives you batch traceability across repeat orders and a single point
              of contact for technical, commercial and logistics questions. That combination is why
              buyers in demanding markets choose India — and specifically our facility — as their MMA
              Triazine 40% source.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Country-specific import considerations
            </h2>
            <p className="text-secondary leading-relaxed">
              Every importing country has its own rules for bringing in a specialty chemical, and
              getting them right prevents costly delays at the border. Requirements can include an
              import licence or registration for the substance, a Safety Data Sheet in the local
              language and format, specific hazard labelling, and sometimes pre-shipment inspection or
              certification by an approved body. Tariff treatment follows the HS classification —
              29336990 for MMA Triazine 40% — and some destinations require a certificate of origin to
              apply preferential duty rates under trade agreements. Because we export routinely to a
              wide range of markets, we prepare documentation to match the destination and flag any
              known requirements early, so your customs broker has what they need to clear the goods
              without surprises.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              Freight planning is the other half of reliable export. Sailing schedules, transit times
              and the choice between drums, IBCs and ISO tanks all affect when the product reaches you
              and at what landed cost. For continuous-injection users, we build in lead-time buffers
              and, where helpful, agree call-off contracts so shipments are scheduled ahead of demand
              rather than ordered reactively. We can quote on the Incoterm that suits your logistics
              team — from ex-works, where you control the freight, through to CIF at your destination
              port, where we manage haulage, clearance, ocean freight and insurance for a transparent
              delivered price. The goal is simple: your MMA Triazine 40% arrives on time, correctly
              documented and ready to use, wherever in the world you operate.
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
                <Link href="/mma-triazine-40-applications-industries" className="text-link">
                  Applications &amp; industries served
                </Link>
              </li>
              <li>
                <Link href={MEA_URL} className="text-link">
                  MEA Triazine 78% — product page
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
              Export MMA Triazine 40% to your market
            </h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Share your destination port, volume and Incoterm and we will return a delivered export
              quote with full documentation — from an ISO 9001:2015 certified manufacturer in Gujarat,
              India.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact?product=mma-triazine-40" variant="primary">
                Request an Export Quote
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
