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
const PATH = "/mma-triazine-40-natural-gas-sweetening";
const MMA_URL = "/product/mma-triazine-40";
const MEA_URL = "/product/mea-triazine-78-h2s-scavenger";

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "MMA Triazine 40% for Natural Gas Sweetening — H2S Removal | Vasudev Chemo Pharma",
  description:
    "MMA Triazine 40% (CAS 108-74-7) for natural gas sweetening and H2S removal — direct injection and contactor-tower application, BTEX-free, high-temperature stable, low solids. Ideal for gas plants, flowlines and compressors.",
  keywords: mergeKeywordClusters([
    "mma triazine natural gas sweetening",
    "mma triazine 40 h2s removal gas",
    "gas sweetening h2s scavenger",
    "natural gas h2s scavenger",
    "sour gas sweetening triazine",
    "mma triazine gas plant",
    "h2s removal natural gas streams",
    "btex free gas sweetening",
    "triazine gas treatment chemical",
    "monomethylamine triazine gas sweetening",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "MMA Triazine 40% for Natural Gas Sweetening",
    description:
      "BTEX-free, high-temperature-stable H2S removal for natural gas — MMA Triazine 40% (CAS 108-74-7) for gas plants, flowlines and compressors.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MMA Triazine 40% for Natural Gas Sweetening",
    description:
      "H2S removal for sour natural gas — BTEX-free, thermally stable, low-solids MMA Triazine 40%.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "How does MMA Triazine 40% sweeten natural gas?",
    answer:
      "MMA Triazine 40% is a non-regenerative liquid scavenger that reacts irreversibly with hydrogen sulphide in the gas. As sour gas contacts the triazine — via direct injection into a pipeline or through a contactor tower or bubble tower — the H2S is converted into stable, more soluble reaction products, lowering the H2S content of the gas to meet pipeline or sales-gas specification.",
  },
  {
    question: "Is MMA Triazine 40% applied by injection or in a tower?",
    answer:
      "Both. For lower H2S loadings and simpler installations, MMA Triazine 40% is injected directly into the gas line with a quill and static mixer. For higher loadings or where more contact time is needed, it is used in a contactor or bubble tower that maximises gas–liquid contact. The right method depends on gas rate, H2S concentration and available space.",
  },
  {
    question: "Why is MMA Triazine 40% good for hot gas systems?",
    answer:
      "Its strong thermal stability suits hotter gas-processing service — including compressors and units downstream of heating — where a less stable scavenger could degrade or drop solids. Combined with its more soluble by-products, this keeps gas equipment cleaner during sweetening.",
  },
  {
    question: "Does gas sweetening with MMA Triazine 40% cause solids or foaming?",
    answer:
      "MMA triazine forms more soluble by-products than MEA triazine, so it is less prone to dithiazine solids and associated fouling. The 40% formulation is also designed not to contribute to foaming in gas processing equipment when dosed correctly, which protects contactor and separation performance.",
  },
  {
    question: "What H2S outlet specification can I reach?",
    answer:
      "Non-regenerative triazine scavenging can take gas down to low ppm H2S suitable for pipeline and sales-gas specifications, with the achievable outlet driven by inlet H2S, contact time and dose rate. Share your inlet H2S, target outlet and gas flow and we can estimate the dosing required.",
  },
  {
    question: "Can you help size the dosing for my gas plant?",
    answer:
      "Yes. Provide gas flow rate, inlet and target outlet H2S, temperature and pressure, and application method, and our technical team will estimate an MMA Triazine 40% dose rate and consumption so you can plan chemical supply and treated cost.",
  },
];

export default function MmaTriazine40NaturalGasSweeteningPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "MMA Triazine 40% for Natural Gas Sweetening", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionLabel>Application guide</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                MMA Triazine 40% for Natural Gas Sweetening
              </h1>
              <p className="text-secondary text-lg mt-6">
                Sour natural gas must be sweetened — its hydrogen sulphide removed — to protect
                people, meet pipeline specification and prevent corrosion. MMA Triazine 40%
                (Monomethylamine Triazine, CAS 108-74-7) is a BTEX-free, thermally stable, low-solids
                liquid scavenger well suited to gas sweetening in flowlines, compressors and gas
                plants. This guide explains how it works and how to apply it.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: MMA Triazine 40% sweetens natural gas by reacting irreversibly with
                  H2S — applied by direct pipeline injection or in a contactor/bubble tower — turning
                  H2S into stable, soluble products and lowering gas H2S to pipeline or sales-gas
                  specification. Its thermal stability and low solids suit hot gas-processing service.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button href="/contact?product=mma-triazine-40" variant="primary">
                  Discuss Your Gas Duty
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
              Why sour gas must be sweetened
            </h2>
            <p className="text-secondary leading-relaxed">
              Hydrogen sulphide is a toxic, corrosive and flammable gas that occurs naturally in many
              natural gas reservoirs. Even at low concentrations it is dangerous to personnel, and it
              is aggressively corrosive to pipelines, tanks and process equipment, driving failures,
              shutdowns and added processing cost. Sales-gas and pipeline specifications therefore set
              tight limits on H2S — commonly a few parts per million — so producers must remove it
              before gas enters transmission. For low to moderate H2S loadings, non-regenerative
              liquid scavengers such as MMA Triazine 40% are the standard, cost-effective solution,
              avoiding the capital and complexity of a regenerative amine plant.
            </p>

            <h2 className="font-heading text-h3 text-primary mb-6 mt-12">
              Two application methods
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="py-3 px-4 font-semibold">Method</th>
                    <th className="py-3 px-4 font-semibold">Best for</th>
                    <th className="py-3 px-4 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-secondary">
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Direct injection</td>
                    <td className="py-3 px-4">Lower H2S, simpler installs</td>
                    <td className="py-3 px-4">Quill + static mixer into the gas line</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Contactor / bubble tower</td>
                    <td className="py-3 px-4">Higher H2S, more contact time</td>
                    <td className="py-3 px-4">Maximises gas–liquid contact efficiency</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Combination</td>
                    <td className="py-3 px-4">Variable or rising H2S</td>
                    <td className="py-3 px-4">Injection upstream, tower for polishing</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-secondary text-sm mt-4">
              For a deeper comparison of the two approaches, see{" "}
              <Link href="/triazine-injection-vs-contactor-tower" className="text-link">
                triazine direct injection vs contactor tower
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Why MMA Triazine 40% suits gas sweetening
            </h2>
            <p className="text-secondary leading-relaxed">
              Gas-processing service rewards a scavenger that is efficient, stable and clean-running.
              MMA Triazine 40% delivers on all three. Its monomethylamine-based chemistry reacts
              rapidly and completely with H2S, giving strong removal per unit dosed. Its high thermal
              stability suits hotter parts of a gas plant — compressor discharge, units downstream of
              heaters, and flowlines — where a less stable scavenger might degrade. Crucially, because
              MMA triazine produces more soluble reaction by-products than MEA triazine, it is far less
              likely to form dithiazine solids that would foul contactors, coalescers and heat
              exchangers. It is BTEX-free, so it introduces no regulated aromatics into the gas or the
              spent product, simplifying emissions and environmental compliance. And the 40%
              formulation is designed to avoid contributing to foaming, protecting separation
              performance.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              Together these properties make MMA Triazine 40% a strong fit for continuous gas
              sweetening where uptime and equipment cleanliness are priorities. Operators moving away
              from a scavenger that has caused solids or fouling often find MMA triazine restores clean
              operation while maintaining or improving H2S removal.
            </p>

            <h2 className="font-heading text-h3 text-primary mb-6 mt-12">
              Getting the dose right
            </h2>
            <p className="text-secondary leading-relaxed">
              Effective, economical gas sweetening depends on matching the dose to the H2S load. The
              scavenger demand rises with inlet H2S concentration and gas flow rate, and the achievable
              outlet depends on contact time and mixing. Under-dosing leaves H2S off-specification;
              over-dosing wastes chemical and, with any triazine, increases the risk of by-product
              solids. The practical approach is to calculate a starting dose from the H2S load and the
              scavenger&rsquo;s theoretical capacity, then trim it in the field against outlet H2S
              readings. Share your gas flow, inlet and target outlet H2S, temperature and pressure, and
              our team will estimate an MMA Triazine 40% dose rate and expected consumption so you can
              plan supply and treated cost — see our dedicated dosing guide for the method.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Monitoring and control during gas sweetening
            </h2>
            <p className="text-secondary leading-relaxed">
              Reliable gas sweetening depends on knowing your H2S in real time, not just at design.
              Inlet H2S can swing with reservoir behaviour, commingling of streams and production
              rate, so a fixed dose set once and forgotten will either waste chemical when H2S falls or
              breach specification when it rises. The practical answer is to measure — with a
              continuous H2S analyser on the sweet-gas outlet, or with regular manual readings — and to
              adjust the MMA Triazine 40% injection rate against those measurements. Pairing the
              scavenger pump with the analyser, whether manually or through a simple control loop, keeps
              the outlet safely on specification while trimming chemical use when conditions allow.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              Good contact is the other control lever. Because triazine scavenging needs the liquid to
              meet the gas, the injection quill, static mixer or tower internals must be sized and
              maintained so that gas and scavenger genuinely mix. Poor atomisation or a fouled tower
              cuts utilisation and pushes up consumption for the same removal. MMA Triazine 40% helps
              here because its soluble by-products keep internals cleaner than a solids-forming
              chemistry, but the mechanical design still matters. Reviewing injection-point location,
              mixing energy and residence time — alongside the H2S data — is the fastest route to a
              stable, economical sweetening programme, and our technical team can help audit an existing
              installation or specify a new one.
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
                <Link href="/mma-triazine-40-dosage-injection-rate-guide" className="text-link">
                  MMA Triazine 40% dosage &amp; injection rate guide
                </Link>
              </li>
              <li>
                <Link href="/triazine-injection-vs-contactor-tower" className="text-link">
                  Direct injection vs contactor tower
                </Link>
              </li>
              <li>
                <Link href="/mma-triazine-40-crude-oil-stabilisation" className="text-link">
                  MMA Triazine 40% for crude oil stabilisation
                </Link>
              </li>
              <li>
                <Link href="/how-mma-triazine-works-h2s-scavenging" className="text-link">
                  How MMA triazine works
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
              Sweeten your gas with MMA Triazine 40%
            </h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Tell us your gas flow, inlet and target H2S and application method and we will estimate
              dosing and quote supply — direct from an ISO 9001:2015 manufacturer in Gujarat, India.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact?product=mma-triazine-40" variant="primary">
                Discuss Your Gas Duty
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
