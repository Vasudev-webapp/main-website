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
const PATH = "/mma-triazine-40-crude-oil-stabilisation";
const MMA_URL = "/product/mma-triazine-40";
const MEA_URL = "/product/mea-triazine-78-h2s-scavenger";

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "MMA Triazine 40% for Crude Oil Stabilisation & H2S Control | Vasudev Chemo Pharma",
  description:
    "MMA Triazine 40% (CAS 108-74-7) for crude oil stabilisation — control H2S in the vapour space and liquid phase, reduce corrosion and meet crude H2S specs. BTEX-free, low-solids, thermally stable liquid scavenger.",
  keywords: mergeKeywordClusters([
    "mma triazine crude oil stabilisation",
    "mma triazine 40 crude oil h2s",
    "crude oil h2s scavenger",
    "crude oil sweetening triazine",
    "h2s in crude oil control",
    "vapour space h2s crude",
    "mma triazine oilfield scavenger",
    "crude oil stabilization chemical",
    "btex free crude h2s scavenger",
    "monomethylamine triazine crude oil",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "MMA Triazine 40% for Crude Oil Stabilisation",
    description:
      "Control H2S in crude oil — liquid phase and vapour space — with BTEX-free, low-solids MMA Triazine 40% (CAS 108-74-7).",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MMA Triazine 40% for Crude Oil Stabilisation",
    description:
      "H2S control in crude oil and vapour space with BTEX-free, thermally stable MMA Triazine 40%.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "How does MMA Triazine 40% help stabilise crude oil?",
    answer:
      "Crude oil often carries dissolved hydrogen sulphide that partitions into the vapour space of tanks and during transport, creating toxicity, corrosion and specification problems. MMA Triazine 40% reacts irreversibly with that H2S — in the liquid phase and, through vapour-space treatment, in the gas above the oil — converting it to stable products so the crude meets H2S limits and is safer to store and ship.",
  },
  {
    question: "Where is MMA Triazine 40% dosed for crude treatment?",
    answer:
      "It is typically injected upstream of or into storage and transfer systems — for example into flowlines, at the inlet to stabilisation, or into crude storage tanks — and it can be applied to control vapour-space H2S in tanks, rail cars and marine cargoes. The best injection point depends on where the H2S needs to be controlled and the available residence time.",
  },
  {
    question: "Why choose MMA Triazine 40% for crude over other scavengers?",
    answer:
      "MMA triazine forms more soluble by-products than MEA triazine, so it is less likely to leave dithiazine solids in tanks and lines — a real advantage in crude systems where deposits cause fouling. It is BTEX-free, thermally stable, and non-corrosive to common oilfield metallurgy when applied correctly.",
  },
  {
    question: "Does MMA Triazine 40% affect crude quality or downstream processing?",
    answer:
      "Used at appropriate dose rates, MMA Triazine 40% targets H2S without introducing regulated BTEX aromatics, and its soluble reaction products reduce the risk of solids that could foul equipment. As with any treatment chemical, dosing should be optimised to avoid excess, and compatibility with your specific crude and downstream units can be reviewed with our technical team.",
  },
  {
    question: "Can MMA Triazine 40% control H2S in the vapour space of tanks?",
    answer:
      "Yes. Vapour-space H2S in crude storage and transport is a common safety and specification issue. MMA Triazine 40% can be applied to scavenge H2S evolving above the liquid, reducing headspace H2S readings and the risks associated with loading, gauging and transport.",
  },
  {
    question: "How do I size the dose for crude oil treatment?",
    answer:
      "Dose is driven by the H2S content of the crude (and its vapour) and the throughput. Provide your crude H2S level, flow or batch volume, temperature and the treatment point, and we will estimate an MMA Triazine 40% dose rate and consumption for planning and cost control.",
  },
];

export default function MmaTriazine40CrudeOilStabilisationPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "MMA Triazine 40% for Crude Oil Stabilisation", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <Breadcrumbs items={[
          { name: "Home", url: SITE_URL },
          { name: "MMA Triazine 40% for Crude Oil Stabilisation", url: `${SITE_URL}${PATH}` },
        ]} className="mb-6" />
              <SectionLabel>Application guide</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                MMA Triazine 40% for Crude Oil Stabilisation
              </h1>
              <p className="text-secondary text-lg mt-6">
                Hydrogen sulphide in crude oil is a safety hazard, a corrosion driver and a
                specification problem — in the liquid and in the vapour space of tanks and cargoes.
                MMA Triazine 40% (Monomethylamine Triazine, CAS 108-74-7) is a BTEX-free, low-solids,
                thermally stable liquid scavenger used to control that H2S and help stabilise crude for
                safe storage, transport and sale.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: MMA Triazine 40% stabilises crude oil by reacting irreversibly with
                  dissolved and vapour-space H2S, converting it to stable, soluble products so the
                  crude meets H2S limits and is safer to store and ship. Its low-solids, BTEX-free
                  chemistry suits tanks, flowlines and transport where fouling must be avoided.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button href="/contact?product=mma-triazine-40" variant="primary">
                  Discuss Your Crude Duty
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
              The H2S problem in crude oil
            </h2>
            <p className="text-secondary leading-relaxed">
              Sour crude carries dissolved hydrogen sulphide that does not simply stay in the liquid.
              As pressure and temperature change through separation, stabilisation, storage and
              transport, H2S partitions into the vapour space above the oil, where it concentrates and
              creates a toxic, corrosive headspace. This is why crude storage tanks, rail cars and
              marine cargoes are routinely monitored for vapour-space H2S: the readings can spike
              during loading, gauging and transfer, exposing workers and corroding tank tops, vent
              systems and piping. On top of the safety and integrity risks, crude buyers and pipelines
              impose H2S specifications, so producers must bring both liquid-phase and vapour-space
              H2S under control to move and sell their barrels.
            </p>

            <h2 className="font-heading text-h3 text-primary mb-6 mt-12">
              How MMA Triazine 40% is applied to crude
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="py-3 px-4 font-semibold">Treatment point</th>
                    <th className="py-3 px-4 font-semibold">Purpose</th>
                  </tr>
                </thead>
                <tbody className="text-secondary">
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Flowline / pre-stabilisation injection</td>
                    <td className="py-3 px-4">Reduce liquid-phase H2S before storage</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Storage tank dosing</td>
                    <td className="py-3 px-4">Control H2S in the crude and headspace</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Vapour-space treatment</td>
                    <td className="py-3 px-4">Suppress headspace H2S in tanks &amp; cargoes</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Loading / transfer</td>
                    <td className="py-3 px-4">Meet H2S spec before rail, road or marine transport</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-secondary text-sm mt-4">
              Related guidance:{" "}
              <Link href="/storage-tank-h2s-scavenger" className="text-link">
                storage-tank vapour-space H2S
              </Link>{" "}
              and{" "}
              <Link href="/tank-truck-railcar-h2s-transport" className="text-link">
                transport H2S control
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Why MMA Triazine 40% fits crude service
            </h2>
            <p className="text-secondary leading-relaxed">
              Crude systems are unforgiving of scavengers that leave deposits. Solids that precipitate
              in tanks, lines and separators create fouling, complicate tank cleaning and can carry
              through to downstream units. This is where MMA Triazine 40% has a distinct advantage:
              because the monomethylamine chemistry produces more soluble reaction by-products than MEA
              triazine, it is far less prone to dropping dithiazine solids. Field programmes on
              long-term injection have shown MMA triazine eliminating the solids that MEA triazine
              caused and improving pipeline efficiency. For an operator managing sour crude, that means
              cleaner tanks, fewer interventions and a more predictable treatment programme.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              MMA Triazine 40% is also BTEX-free, so it does not add regulated aromatics to the crude
              or the spent scavenger, and it is thermally stable and non-corrosive to common oilfield
              metallurgy when applied correctly. Fully water miscible and effective in aqueous and
              hydrocarbon phases, it performs in the multiphase reality of produced fluids rather than
              only in a clean gas stream. These characteristics make it a dependable choice for crude
              stabilisation across upstream and midstream operations.
            </p>

            <h2 className="font-heading text-h3 text-primary mb-6 mt-12">
              Dosing and optimisation
            </h2>
            <p className="text-secondary leading-relaxed">
              As with any non-regenerative scavenger, the dose for crude treatment scales with the H2S
              to be removed and the throughput. The starting point is the crude&rsquo;s H2S content —
              in the liquid and, where relevant, the vapour space — and the flow or batch volume.
              From there the dose is optimised in the field against measured H2S, so you neither leave
              the crude off-spec nor waste chemical. Because MMA Triazine 40% resists solids formation,
              it gives more headroom to dose confidently in fouling-sensitive systems. Share your crude
              H2S level, volume, temperature and treatment point and our technical team will estimate an
              MMA Triazine 40% dose rate and consumption for planning and cost control.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Integrating MMA Triazine 40% into a crude treatment programme
            </h2>
            <p className="text-secondary leading-relaxed">
              Controlling H2S in crude is rarely a single-point fix; it works best as a programme that
              treats the oil where the risk actually appears. In practice that means deciding whether
              to knock down liquid-phase H2S early — in the flowline or ahead of stabilisation — or to
              focus on the vapour space that builds up in storage and during loading, or both. MMA
              Triazine 40% is flexible enough to serve either role, and mapping the H2S profile across
              your system tells you where injection delivers the most value. Coordinating the scavenger
              with other production chemicals — corrosion inhibitors, demulsifiers and any downstream
              treatments — is important so that treatments complement rather than interfere with one
              another, and we can advise on sequencing and compatibility.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              Measurement anchors the programme. Vapour-space H2S readings on tanks and during transfer,
              together with liquid-phase analysis, show whether the dose is achieving the target and
              where it can be trimmed. Because crude systems are so sensitive to fouling, MMA Triazine
              40%&rsquo;s resistance to dithiazine solids is a practical advantage — it lets you dose
              confidently to bring headspace H2S down without seeding the deposits that would otherwise
              complicate tank cleaning and downstream handling. Building the treatment around real
              measurements, a sensible injection strategy and a clean-running scavenger gives a crude
              programme that is safe, compliant and economical, and our team is available to help design
              and optimise it for your specific crude and infrastructure.
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
                <Link href="/mma-triazine-40-natural-gas-sweetening" className="text-link">
                  MMA Triazine 40% for natural gas sweetening
                </Link>
              </li>
              <li>
                <Link href="/mma-triazine-40-dosage-injection-rate-guide" className="text-link">
                  Dosage &amp; injection rate guide
                </Link>
              </li>
              <li>
                <Link href="/storage-tank-h2s-scavenger" className="text-link">
                  Storage-tank vapour-space H2S control
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
              Control H2S in your crude with MMA Triazine 40%
            </h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Share your crude H2S level, throughput and treatment point and we will estimate dosing
              and quote supply — direct from an ISO 9001:2015 manufacturer in Gujarat, India.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact?product=mma-triazine-40" variant="primary">
                Discuss Your Crude Duty
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
