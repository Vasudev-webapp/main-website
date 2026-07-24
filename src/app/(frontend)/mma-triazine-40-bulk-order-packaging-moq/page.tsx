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
const PATH = "/mma-triazine-40-bulk-order-packaging-moq";
const MMA_URL = "/product/mma-triazine-40";
const MEA_URL = "/product/mea-triazine-78-h2s-scavenger";

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "MMA Triazine 40% Bulk Order, Packaging & MOQ — Drums, IBCs, Tankers | Vasudev Chemo Pharma",
  description:
    "MMA Triazine 40% (CAS 108-74-7) bulk supply: 210 L HDPE drums, 1000 L IBC totes and bulk tanker loads, MOQ 1 MT, custom packaging on request. Lead times, labelling and export packing explained. Request a bulk quote.",
  keywords: mergeKeywordClusters([
    "mma triazine 40 bulk order",
    "mma triazine packaging",
    "mma triazine 40 moq",
    "mma triazine drum ibc tanker",
    "mma triazine 210 litre drum",
    "mma triazine 1000 l ibc",
    "bulk h2s scavenger supply",
    "mma triazine minimum order quantity",
    "mma triazine bulk tanker export",
    "monomethylamine triazine bulk supplier",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "MMA Triazine 40% Bulk Order, Packaging & MOQ",
    description:
      "Bulk MMA Triazine 40% in drums, IBCs and tankers, MOQ 1 MT, custom packaging and export packing. Manufacturer-direct from India.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MMA Triazine 40% Bulk Order & Packaging",
    description:
      "210 L drums, 1000 L IBCs, bulk tankers, MOQ 1 MT. Manufacturer-direct MMA Triazine 40% (CAS 108-74-7).",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "What is the minimum order quantity for MMA Triazine 40%?",
    answer:
      "The standard MOQ for MMA Triazine 40% is 1 metric tonne. This can be supplied in drums or IBCs. Smaller trial quantities are available on request so you can evaluate the product before committing to a full bulk order.",
  },
  {
    question: "What packaging options are available?",
    answer:
      "MMA Triazine 40% is supplied in 210-litre HDPE drums, 1000-litre IBC totes, and bulk tanker or ISO-tank loads for large volumes. Custom packaging and private labelling can be arranged on request to suit your storage and handling systems.",
  },
  {
    question: "How much MMA Triazine 40% fits in a drum, IBC or tanker?",
    answer:
      "A 210-litre HDPE drum holds roughly 220 kg of product at the typical specific gravity of 1.05–1.10, a 1000-litre IBC holds around 1,050–1,100 kg, and a bulk road tanker or ISO tank typically carries about 20–24 tonnes. Exact fill weights are confirmed on the packing list for each shipment.",
  },
  {
    question: "How is MMA Triazine 40% packed for export?",
    answer:
      "For sea freight, drums are palletised, shrink-wrapped and strapped, and IBCs are shipped on their integral pallets. Packaging is labelled per GHS with product name, CAS number, batch number, net weight and hazard information, and each shipment includes a COA, SDS and packing list.",
  },
  {
    question: "What is the typical lead time for a bulk order?",
    answer:
      "Lead time depends on order volume, packaging and destination. Because MMA Triazine 40% is manufactured to a defined specification, production and QC are scheduled after order confirmation. We confirm a firm lead time on the proforma invoice; repeat contract orders can be scheduled in advance to shorten delivery.",
  },
  {
    question: "Can you supply MMA Triazine 40% on an annual contract?",
    answer:
      "Yes. For operators with steady consumption we offer call-off contracts with agreed monthly or quarterly volumes, which stabilise pricing and secure supply. This is ideal for continuous-injection programmes where uninterrupted scavenger availability is critical.",
  },
];

export default function MmaTriazine40BulkOrderPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "MMA Triazine 40% Bulk Order, Packaging & MOQ", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <Breadcrumbs items={[
          { name: "Home", url: SITE_URL },
          { name: "MMA Triazine 40% Bulk Order, Packaging & MOQ", url: `${SITE_URL}${PATH}` },
        ]} className="mb-6" />
              <SectionLabel>Bulk supply</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                MMA Triazine 40% Bulk Order, Packaging &amp; MOQ
              </h1>
              <p className="text-secondary text-lg mt-6">
                Whether you dose a single wellhead or run a continuous-injection programme across a
                gas plant, MMA Triazine 40% (CAS 108-74-7) is available in the packaging and volumes
                that fit your operation. Vasudev Chemo Pharma supplies drums, IBC totes and bulk
                tankers, with a 1 MT minimum order, custom packaging on request and export-ready
                packing for worldwide delivery.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: MMA Triazine 40% ships in 210 L HDPE drums, 1000 L IBC totes and bulk
                  tanker loads, with a minimum order of 1 metric tonne. A drum holds about 220 kg, an
                  IBC about 1,050–1,100 kg and a tanker around 20–24 tonnes. Custom packaging, private
                  labelling and annual call-off contracts are available.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button href="/contact?product=mma-triazine-40" variant="primary">
                  Request a Bulk Quote
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
              Packaging formats and typical fill weights
            </h2>
            <p className="text-secondary leading-relaxed">
              Choosing the right packaging is about matching the format to how you store, move and
              dose the product. Drums suit smaller sites, intermittent dosing and locations without
              bulk-handling infrastructure. IBC totes are the workhorse for medium-volume
              continuous-injection systems because they are easy to store, connect and return or
              recycle. Bulk tankers and ISO tanks are the most cost-effective per kilogram and suit
              large gas plants, terminals and blending operations with dedicated storage. The table
              below summarises the standard options and approximate fill weights, which are confirmed
              precisely on each shipment&rsquo;s packing list.
            </p>
            <div className="overflow-x-auto mt-6">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="py-3 px-4 font-semibold">Packaging</th>
                    <th className="py-3 px-4 font-semibold">Approx. fill weight</th>
                    <th className="py-3 px-4 font-semibold">Best for</th>
                  </tr>
                </thead>
                <tbody className="text-secondary">
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">210 L HDPE drum</td>
                    <td className="py-3 px-4">~220 kg</td>
                    <td className="py-3 px-4">Small sites, trials, intermittent dosing</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">1000 L IBC tote</td>
                    <td className="py-3 px-4">~1,050–1,100 kg</td>
                    <td className="py-3 px-4">Continuous-injection, medium volume</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Bulk tanker / ISO tank</td>
                    <td className="py-3 px-4">~20–24 tonnes</td>
                    <td className="py-3 px-4">Gas plants, terminals, blenders</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Custom packaging</td>
                    <td className="py-3 px-4">On request</td>
                    <td className="py-3 px-4">Private label, special drum sizes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Understanding the 1 MT minimum order
            </h2>
            <p className="text-secondary leading-relaxed">
              The 1 metric tonne minimum order quantity balances production economics with buyer
              flexibility. MMA Triazine 40% is manufactured in defined batches, and a 1 MT floor keeps
              per-unit cost reasonable while still being accessible for a single site or a first
              purchase. In practice a tonne can be delivered as roughly four-and-a-half drums or a
              single IBC, which is a manageable quantity for evaluation or a modest dosing programme.
              For buyers who want to prove the chemistry before scaling, we can arrange a smaller trial
              quantity with a Certificate of Analysis, then move to the standard MOQ or a bulk contract
              once performance is confirmed in the field.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              As consumption grows, the economics shift decisively toward larger packaging. Moving
              from drums to IBCs reduces handling and packaging cost per kilogram, and moving to bulk
              tankers reduces it further while cutting the number of empty containers you must store or
              dispose of. If you run a continuous scavenger-injection system, consolidating onto IBCs
              or bulk supply usually lowers both the chemical cost and the labour cost of changeovers.
            </p>

            <h2 className="font-heading text-h3 text-primary mb-6 mt-12">
              Labelling, documentation and safe handling
            </h2>
            <p className="text-secondary leading-relaxed">
              Every unit of MMA Triazine 40% is labelled in line with GHS, showing the product name,
              CAS number 108-74-7, batch number, net weight, and the relevant hazard pictogram and
              statements — MMA Triazine 40% is classified as an irritant (GHS07, signal word
              &ldquo;Warning&rdquo;) with hazard statements H315 (causes skin irritation) and H319
              (causes serious eye irritation). Each shipment is accompanied by a batch-specific
              Certificate of Analysis, a Safety Data Sheet and a packing list. Drums and IBCs are made
              from HDPE compatible with the product, and for export, drums are palletised and secured
              for sea transport. Because the product is an alkaline amine-based liquid, we recommend
              storing it in a cool, well-ventilated area away from strong acids and oxidisers, with
              appropriate secondary containment.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Reducing total cost with the right packaging mix
            </h2>
            <p className="text-secondary leading-relaxed">
              The cheapest headline price per kilogram is not always the lowest total cost. When you
              plan MMA Triazine 40% supply, weigh the product price against the full cost of handling,
              storage, container disposal and downtime. Drums are convenient and low-commitment but
              carry the highest packaging cost per kilogram and generate the most empty containers to
              manage. IBC totes strike a balance for continuous-injection sites, reducing both cost
              per kilogram and the labour of frequent changeovers. Bulk tankers and ISO tanks deliver
              the lowest unit cost and the least packaging waste, but they require dedicated storage
              and a steady offtake to justify the logistics. Mapping your actual consumption against
              these formats usually reveals a mix — for example bulk supply into a main tank with a
              few drums held as contingency — that minimises total cost rather than just unit price.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              Storage capacity and turnover also shape the ideal order size. Ordering larger volumes
              less often lowers freight and handling per kilogram, but only if you can store the
              product safely and use it within a sensible period. Because MMA Triazine 40% has a wide
              storage window — a high flash point and a low freezing point — it tolerates typical
              site conditions well, giving flexibility in how much you hold. We help buyers model this
              trade-off, matching packaging and order frequency to their tank capacity, dosing rate and
              budget cycle, so the supply plan is efficient rather than simply reactive. If you are
              unsure which mix is right, share your monthly consumption and storage setup and we will
              recommend a packaging and ordering plan.
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
                <Link href="/buy-mma-triazine-40-h2s-scavenger" className="text-link">
                  How to buy MMA Triazine 40%
                </Link>
              </li>
              <li>
                <Link href="/mma-triazine-40-export-supply-countries" className="text-link">
                  Global export &amp; supply countries
                </Link>
              </li>
              <li>
                <Link href="/mma-triazine-40-safety-handling-storage" className="text-link">
                  Safety, handling &amp; storage
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
              Request a bulk MMA Triazine 40% quote
            </h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Tell us your volume and preferred packaging and we will confirm pricing, fill weights,
              export packing and lead time — direct from an ISO 9001:2015 manufacturer in Gujarat,
              India.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact?product=mma-triazine-40" variant="primary">
                Request a Bulk Quote
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
