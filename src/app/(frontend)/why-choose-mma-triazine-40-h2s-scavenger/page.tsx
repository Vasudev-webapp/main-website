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
const PATH = "/why-choose-mma-triazine-40-h2s-scavenger";
const MMA_URL = "/product/mma-triazine-40";
const EDDM_URL = "/product/eddm-non-triazine-h2s-scavenger";

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "Why Choose MMA Triazine 40% H2S Scavenger — Benefits & Advantages | Vasudev Chemo Pharma",
  description:
    "Why choose MMA Triazine 40% (CAS 108-74-7)? BTEX-free chemistry, higher scavenging efficiency, superior high-temperature stability and fewer dithiazine solids than MEA triazine. See the benefits for gas, crude and DHDS service.",
  keywords: mergeKeywordClusters([
    "why choose mma triazine 40",
    "mma triazine benefits",
    "mma triazine advantages",
    "mma triazine vs mea triazine efficiency",
    "btex free h2s scavenger",
    "mma triazine high temperature stability",
    "mma triazine low solids",
    "best triazine h2s scavenger",
    "mma triazine dhds gas sweetening",
    "monomethylamine triazine advantages",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Why Choose MMA Triazine 40% H2S Scavenger",
    description:
      "BTEX-free, high-efficiency, thermally stable and low-solids: the case for MMA Triazine 40% (CAS 108-74-7) in demanding H2S service.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Choose MMA Triazine 40%",
    description:
      "BTEX-free, higher efficiency, better high-temp stability and fewer solids than MEA triazine.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "Why choose MMA Triazine 40% over MEA triazine?",
    answer:
      "MMA Triazine 40% (monomethylamine-based) is often chosen where scavenging efficiency, high-temperature stability and low solids formation are priorities. Its reaction by-products are generally more soluble than the dithiazine that MEA triazine can precipitate, so in many hot systems, flowlines, compressors and DHDS units it tends to foul less. Some reported long-term injection programmes found MMA triazine reduced or eliminated solids that had formed with MEA triazine; results vary with the system, so validate for your duty and confirm suitability against Vasudev's current TDS/SDS.",
  },
  {
    question: "What does BTEX-free mean and why does it matter?",
    answer:
      "BTEX refers to benzene, toluene, ethylbenzene and xylene — regulated aromatic compounds. A BTEX-free H2S scavenger like MMA Triazine 40% does not introduce these aromatics into the treated stream or spent product, which simplifies environmental compliance, emissions reporting and downstream handling, especially in gas processing.",
  },
  {
    question: "Is MMA Triazine 40% suitable for high-temperature service?",
    answer:
      "Yes. MMA Triazine 40% has good thermal and chemical stability, which makes it well suited to hotter systems such as diesel hydro-desulphurisation (DHDS) units, compressors and hot flowlines where a less stable scavenger might degrade or drop solids.",
  },
  {
    question: "Does MMA Triazine 40% reduce fouling and scaling?",
    answer:
      "It tends to. Because MMA triazine forms more soluble reaction by-products, it is less prone to the dithiazine precipitation and scaling that can block pipelines, tanks and equipment. Operators who switched from MEA to MMA triazine in long-term injection reported the disappearance of solids and improved pipeline efficiency.",
  },
  {
    question: "Is MMA Triazine 40% non-corrosive to oilfield metallurgy?",
    answer:
      "The 40% formulation is designed to be compatible with common oilfield metallurgy and, at the recommended dose, is not expected to promote foaming in gas-processing equipment; corrosion and foaming behaviour still depend on the system, temperature and co-additives. As with any amine-based chemical, keep it away from strong acids and confirm materials compatibility and dosing against Vasudev's current TDS/SDS for your system.",
  },
  {
    question: "When might another chemistry be a better choice?",
    answer:
      "For straightforward, cost-driven bulk gas or crude duty, MEA Triazine 78% can be more economical per kg of H2S removed. Where amine pH shift or salt precipitation must be avoided entirely, a non-triazine EDDM formaldehyde-donor chemistry may fit better. We manufacture all three and will recommend the best fit for your stream.",
  },
];

export default function WhyChooseMmaTriazine40Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Why Choose MMA Triazine 40%", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <Breadcrumbs items={[
          { name: "Home", url: SITE_URL },
          { name: "Why Choose MMA Triazine 40%", url: `${SITE_URL}${PATH}` },
        ]} className="mb-6" />
              <SectionLabel>Product advantages</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                Why Choose MMA Triazine 40% H₂S Scavenger
              </h1>
              <p className="text-secondary text-lg mt-6">
                Not every triazine is the same. MMA Triazine 40% (Monomethylamine Triazine, CAS
                108-74-7) is the methyl-substituted grade chosen when efficiency, high-temperature
                stability and clean, low-solids operation matter most. This page makes the case for
                MMA Triazine 40% and shows where it can outperform conventional MEA triazine in the
                right duty.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: MMA Triazine 40% is a BTEX-free grade that, in the right service, can
                  offer strong H2S scavenging efficiency, good high-temperature stability, and more
                  soluble by-products that reduce dithiazine fouling relative to MEA triazine — a good
                  fit for hot gas, DHDS units, compressors and long-term injection where solids have
                  been a problem. Actual performance depends on stream composition, temperature and
                  dose; confirm against Vasudev&apos;s current TDS/SDS and a field trial.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button href="/contact?product=mma-triazine-40" variant="primary">
                  Request a Quote
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
              Five reasons operators choose MMA Triazine 40%
            </h2>
            <p className="text-secondary leading-relaxed">
              The value of an H2S scavenger is not just how much sulphide it removes, but how cleanly
              and reliably it does so across the operating envelope of a real system. MMA Triazine 40%
              earns its place on five counts. First, scavenging efficiency: the monomethylamine-based
              triazine reacts quickly with hydrogen sulphide, giving strong H2S removal per unit dosed
              under typical conditions. Second, thermal stability: it holds up well in hot service
              where some less stable chemistries can degrade. Third, by-product solubility: its
              reaction products are generally more soluble than the dithiazine associated with MEA
              triazine, so in many systems it fouls and scales less. Fourth, BTEX-free composition: it
              introduces no regulated BTEX aromatics. Fifth, metallurgy-compatible, low-foaming
              behaviour that, at recommended dosing, helps keep gas-processing equipment running
              smoothly. Exact performance is duty-specific — confirm against Vasudev&apos;s current
              TDS/SDS.
            </p>

            <h2 className="font-heading text-h3 text-primary mb-6 mt-12">
              MMA Triazine 40% vs MEA triazine at a glance
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="py-3 px-4 font-semibold">Factor</th>
                    <th className="py-3 px-4 font-semibold">MMA Triazine 40%</th>
                    <th className="py-3 px-4 font-semibold">MEA triazine</th>
                  </tr>
                </thead>
                <tbody className="text-secondary">
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Scavenging efficiency</td>
                    <td className="py-3 px-4">Higher</td>
                    <td className="py-3 px-4">Moderate to high</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Thermal stability</td>
                    <td className="py-3 px-4">Very high — suits DHDS / hot systems</td>
                    <td className="py-3 px-4">Stable in normal field conditions</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">By-products</td>
                    <td className="py-3 px-4">More soluble, less fouling</td>
                    <td className="py-3 px-4">Dithiazine can precipitate / foul</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">BTEX</td>
                    <td className="py-3 px-4">BTEX-free</td>
                    <td className="py-3 px-4">Depends on formulation</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Typical duty</td>
                    <td className="py-3 px-4">Flowlines, compressors, DHDS, gas sweetening</td>
                    <td className="py-3 px-4">Wellheads, pipelines, early production</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-secondary text-sm mt-4">
              Relative ratings above are indicative and duty-dependent — confirm the values for your
              stream against Vasudev&apos;s current TDS/SDS. For a full side-by-side, see{" "}
              <Link href="/mea-triazine-vs-mma-triazine" className="text-link">
                MEA Triazine vs MMA Triazine
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">
              The field evidence: less solids, cleaner pipelines
            </h2>
            <p className="text-secondary leading-relaxed">
              The strongest argument for MMA triazine comes from long-term field experience. On some
              producing platforms, operators injecting MEA triazine over many years saw solid deposits
              form — precipitation and build-up in pipelines, storage tanks and processing equipment
              that led to blockages and scaling. Reported field programmes spanning well over a decade
              found that switching to MMA triazine reduced or eliminated those solids and improved
              pipeline efficiency in those cases, because the monomethylamine chemistry produces more
              soluble reaction
              products rather than the dithiazine solids that MEA triazine can drop. For an operator,
              that translates directly into fewer intervention costs, less downtime and a more
              predictable treatment programme.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              This is why MMA triazine is increasingly considered a first-choice H2S scavenger in
              systems that run hot or that have a history of triazine solids. It combines the proven,
              cost-effective, non-regenerative scavenging that made triazines the industry workhorse
              with a cleaner operational profile in demanding service. The 40% active grade is a
              practical concentration for continuous-injection systems, offering a good balance of
              capacity, handling viscosity and cold-weather performance.
            </p>

            <h2 className="font-heading text-h3 text-primary mb-6 mt-12">
              Choose the right chemistry, backed by a manufacturer
            </h2>
            <p className="text-secondary leading-relaxed">
              Choosing MMA Triazine 40% is not about picking the &ldquo;best&rdquo; scavenger in the
              abstract; it is about matching chemistry to duty. MMA Triazine 40% is the right answer
              for hot, fouling-prone or BTEX-sensitive service. For simple, cost-led bulk applications,
              MEA Triazine 78% may deliver lower treated cost, and where amine pH shift or salts must
              be avoided altogether, a non-triazine EDDM chemistry may be preferable. Because Vasudev
              Chemo Pharma manufactures all three, we have no incentive to force one product — we
              recommend what actually fits your stream, then supply it consistently with batch COA and
              technical support from our ISO 9001:2015 facility in India.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Think total cost of ownership, not just chemical price
            </h2>
            <p className="text-secondary leading-relaxed">
              When operators compare scavengers on headline price per tonne alone, they often miss the
              costs that actually dominate a treatment programme. The real economics of an H2S
              scavenger include the treated cost per kilogram of H2S removed, the cost of managing
              by-product solids, the downtime and labour of cleaning fouled equipment, and the risk of
              missing a sales-gas or crude specification. MMA Triazine 40% is chosen precisely because
              it performs well on these hidden costs: its efficient chemistry gives strong removal per
              unit dosed, and its soluble by-products avoid the dithiazine solids that drive cleaning
              and intervention spend. On a hot, fouling-prone system, a scavenger that keeps pipelines
              and vessels clean can be far cheaper over a year than one with a lower sticker price that
              deposits solids.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              Reliability of supply is part of ownership cost too. A continuously dosed scavenger that
              is unavailable at the wrong moment can put a whole facility off-specification, so a
              dependable, batch-traceable source matters as much as the chemistry. Buying MMA Triazine
              40% direct from Vasudev Chemo Pharma combines a clean-running product with the continuity
              of a manufacturer relationship: consistent quality across repeat orders, technical
              support to optimise dosing, and flexible supply from our ISO 9001:2015 facility in
              Gujarat, India. Judged on total cost of ownership rather than unit price, that
              combination is why MMA Triazine 40% earns a place in demanding H2S service.
            </p>
          </div>
        </section>

        <section className="py-16 bg-surface">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">Related Reading</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6">
              <li>
                <Link href={MMA_URL} className="text-link">
                  MMA Triazine 40% — full product page
                </Link>
              </li>
              <li>
                <Link href="/mea-triazine-vs-mma-triazine" className="text-link">
                  MEA Triazine vs MMA Triazine — full comparison
                </Link>
              </li>
              <li>
                <Link href="/how-mma-triazine-works-h2s-scavenging" className="text-link">
                  How MMA triazine works (reaction chemistry)
                </Link>
              </li>
              <li>
                <Link href="/mma-triazine-40-applications-industries" className="text-link">
                  Applications &amp; industries served
                </Link>
              </li>
              <li>
                <Link href="/triazine-vs-non-triazine-scavenger" className="text-link">
                  Triazine vs non-triazine scavengers
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
              See if MMA Triazine 40% fits your system
            </h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Share your H2S duty, temperature and history of solids and we will confirm whether MMA
              Triazine 40% is the right choice — and quote it direct from our ISO 9001:2015 facility in
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
