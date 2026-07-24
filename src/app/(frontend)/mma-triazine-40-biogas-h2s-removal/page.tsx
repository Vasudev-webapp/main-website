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
const PATH = "/mma-triazine-40-biogas-h2s-removal";
const MMA_URL = "/product/mma-triazine-40";
const MEA_URL = "/product/mea-triazine-78-h2s-scavenger";
const EDDM_URL = "/product/eddm-non-triazine-h2s-scavenger";

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "MMA Triazine 40% for Biogas & Biomethane H2S Removal | Vasudev Chemo Pharma",
  description:
    "MMA Triazine 40% (CAS 108-74-7) for biogas, landfill gas and biomethane H2S removal — protect CHP engines, upgrading membranes and grid injection. BTEX-free, low-solids liquid scavenger for renewable gas. Request a quote.",
  keywords: mergeKeywordClusters([
    "mma triazine biogas",
    "biogas h2s removal",
    "biogas h2s scavenger",
    "landfill gas h2s scavenger",
    "biomethane h2s removal",
    "mma triazine 40 biogas",
    "h2s scavenger renewable gas",
    "chp engine h2s protection",
    "biogas desulfurisation chemical",
    "triazine biogas h2s",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "MMA Triazine 40% for Biogas & Biomethane H2S Removal",
    description:
      "Protect CHP engines and upgrading equipment — BTEX-free, low-solids H2S removal for biogas, landfill gas and biomethane with MMA Triazine 40%.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MMA Triazine 40% for Biogas H2S Removal",
    description:
      "H2S removal for biogas, landfill gas and biomethane — BTEX-free, low-solids MMA Triazine 40%.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "Why does biogas need H2S removal?",
    answer:
      "Biogas from anaerobic digestion and landfill typically contains hydrogen sulphide, often at high and variable levels. H2S is toxic, corrosive and forms SO2 on combustion, so it must be removed to protect CHP engines, boilers, upgrading membranes and gas-grid injection equipment, and to meet emissions and biomethane specifications.",
  },
  {
    question: "How does MMA Triazine 40% remove H2S from biogas?",
    answer:
      "MMA Triazine 40% is a non-regenerative liquid scavenger that reacts irreversibly with H2S in the biogas, converting it to stable, more soluble products. It is typically applied by injection or in a scrubbing/contactor arrangement that gives good gas–liquid contact, lowering the H2S content of the gas before it reaches engines or upgrading.",
  },
  {
    question: "Is MMA Triazine 40% suitable for landfill and digester gas?",
    answer:
      "Yes. Both landfill gas and agricultural or wastewater digester gas carry H2S that MMA Triazine 40% can scavenge. Its thermal stability and low solids formation help it run cleanly in these often-variable renewable-gas streams, and its BTEX-free composition avoids adding regulated aromatics.",
  },
  {
    question: "Does MMA Triazine 40% protect CHP engines?",
    answer:
      "Removing H2S upstream of combined heat and power (CHP) engines protects them from sulphuric-acid corrosion in the crankcase oil and exhaust, extending oil life and reducing maintenance. Controlling H2S with MMA Triazine 40% is a practical way to keep engine warranties and service intervals on track.",
  },
  {
    question: "How much MMA Triazine 40% will my biogas plant need?",
    answer:
      "Consumption depends on the biogas flow rate and its H2S concentration, which can vary widely between sites and over time. Provide your gas flow and H2S level (and target outlet) and our technical team will estimate an MMA Triazine 40% dose rate and consumption for planning and cost control.",
  },
  {
    question: "Could a non-triazine chemistry be better for my biogas?",
    answer:
      "Sometimes. Where you need to avoid amine pH shift or want a formaldehyde-donor profile, our non-triazine EDDM product may fit better. Because we manufacture both, we can compare MMA Triazine 40% and EDDM for your specific biogas stream and recommend the best option.",
  },
];

export default function MmaTriazine40BiogasPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "MMA Triazine 40% for Biogas H2S Removal", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <Breadcrumbs items={[
          { name: "Home", url: SITE_URL },
          { name: "MMA Triazine 40% for Biogas H2S Removal", url: `${SITE_URL}${PATH}` },
        ]} className="mb-6" />
              <SectionLabel>Application guide</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                MMA Triazine 40% for Biogas &amp; Biomethane H₂S Removal
              </h1>
              <p className="text-secondary text-lg mt-6">
                Renewable gas is only valuable if it is clean. Biogas from digesters and landfill
                carries hydrogen sulphide that corrodes engines, fouls upgrading equipment and blocks
                grid injection. MMA Triazine 40% (Monomethylamine Triazine, CAS 108-74-7) is a
                BTEX-free, low-solids liquid scavenger that removes H2S from biogas, landfill gas and
                biomethane so your renewable-energy assets run reliably.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: MMA Triazine 40% removes H2S from biogas, landfill gas and biomethane
                  by reacting irreversibly with the sulphide — applied by injection or scrubbing — to
                  protect CHP engines, upgrading membranes and grid-injection equipment. Its thermal
                  stability and low solids suit variable renewable-gas streams.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button href="/contact?product=mma-triazine-40" variant="primary">
                  Discuss Your Biogas Duty
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
              H2S in renewable gas: the problem
            </h2>
            <p className="text-secondary leading-relaxed">
              Anaerobic digestion of manure, food waste, crop residues and wastewater sludge — and the
              decomposition of waste in landfill — generates biogas rich in methane but contaminated
              with hydrogen sulphide. H2S levels in biogas are frequently far higher and more variable
              than in many natural gas streams, and the consequences are severe: H2S is toxic to site
              personnel, it forms corrosive sulphuric acid when burned in a CHP engine, it degrades
              lubricating oil and exhaust systems, and it poisons or fouls the membranes, PSA
              adsorbents and amine systems used to upgrade biogas to biomethane. Grid operators and
              vehicle-fuel standards also impose strict H2S limits. Removing H2S is therefore not
              optional — it is essential to protect equipment, meet specification and keep a biogas
              plant economic.
            </p>

            <h2 className="font-heading text-h3 text-primary mb-6 mt-12">
              Where MMA Triazine 40% fits
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="py-3 px-4 font-semibold">Point of use</th>
                    <th className="py-3 px-4 font-semibold">Benefit</th>
                  </tr>
                </thead>
                <tbody className="text-secondary">
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Before CHP engine</td>
                    <td className="py-3 px-4">Protects crankcase oil &amp; exhaust from acid attack</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Before upgrading</td>
                    <td className="py-3 px-4">Protects membranes, PSA &amp; amine systems</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Before grid injection</td>
                    <td className="py-3 px-4">Helps meet biomethane H2S specification</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Landfill gas capture</td>
                    <td className="py-3 px-4">Cleans variable, high-H2S gas for use</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Why MMA Triazine 40% suits biogas
            </h2>
            <p className="text-secondary leading-relaxed">
              Biogas streams are demanding because their flow and composition swing with feedstock and
              temperature, and because the equipment downstream — engines, membranes, adsorbents — is
              sensitive to both H2S and to fouling. MMA Triazine 40% is a good match. Its
              monomethylamine chemistry reacts efficiently with H2S, and its high thermal stability
              helps it cope with the warm, humid conditions typical of digester and landfill gas.
              Most importantly, because MMA triazine forms more soluble reaction by-products than MEA
              triazine, it is less likely to precipitate dithiazine solids that could block scrubbers,
              lines and instrumentation — a meaningful advantage in compact biogas skids where
              maintenance access is limited. Being BTEX-free, it adds no regulated aromatics to a gas
              that may be destined for the grid or vehicle fuel.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              For plant operators, controlling H2S with a clean-running scavenger translates into
              longer engine oil life, fewer unplanned shutdowns, protected upgrading assets and easier
              compliance. Non-regenerative scavenging with MMA Triazine 40% avoids the capital and
              complexity of some alternative desulphurisation routes and can be scaled simply by dose
              rate as gas quality changes.
            </p>

            <h2 className="font-heading text-h3 text-primary mb-6 mt-12">
              Sizing and choosing the chemistry
            </h2>
            <p className="text-secondary leading-relaxed">
              Because biogas H2S varies so much between sites, dosing must be based on your actual gas
              flow and H2S concentration, then trimmed against measured outlet H2S. High-H2S landfill
              gas will consume considerably more scavenger than a well-controlled agricultural
              digester, so consumption planning matters for budgeting. We can estimate an MMA Triazine
              40% dose rate from your data, and where a formaldehyde-donor profile is preferable — for
              instance to avoid amine pH shift — we can compare it against our non-triazine EDDM
              product. Because Vasudev Chemo Pharma manufactures both chemistries, the recommendation
              is driven by your stream, not by what we happen to stock.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Commissioning MMA Triazine 40% on a biogas plant
            </h2>
            <p className="text-secondary leading-relaxed">
              Bringing a scavenger online at a biogas plant works best as a short, measured programme
              rather than a fixed-and-forget installation, because biogas H2S is so variable. The first
              step is to characterise the gas: measure H2S over a representative period, not just once,
              since levels rise and fall with feedstock, digester temperature and loading. From that
              data you set a starting injection rate for MMA Triazine 40%, then watch the treated-gas
              H2S — ideally with a continuous analyser ahead of the engine or upgrading unit — and trim
              the dose to hold the target while minimising chemical use. Because renewable-gas skids are
              compact and access is often limited, the low tendency of MMA triazine to form solids is a
              real benefit: it keeps scrubbers, lines and instrumentation clear during operation.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              Protecting the downstream asset is the point of the exercise. Ahead of a CHP engine, even
              modest residual H2S shortens oil life and attacks the exhaust, so a stable, well-controlled
              scavenging step pays back in reduced maintenance and longer service intervals. Ahead of
              upgrading, keeping H2S off the membranes, PSA beds or amine wash preserves their capacity
              and lifetime. As feedstock or throughput changes over the seasons, the dose is simply
              re-trimmed against the analyser rather than requiring new equipment. We can help size the
              starting dose from your gas data, advise on injection or scrubbing arrangement, and — where
              a formaldehyde-donor profile would suit better — compare MMA Triazine 40% against our
              non-triazine EDDM so the plant runs on the most appropriate chemistry.
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
                <Link href="/mma-triazine-40-applications-industries" className="text-link">
                  Applications &amp; industries served
                </Link>
              </li>
              <li>
                <Link href="/mma-triazine-40-dosage-injection-rate-guide" className="text-link">
                  Dosage &amp; injection rate guide
                </Link>
              </li>
              <li>
                <Link href="/how-mma-triazine-works-h2s-scavenging" className="text-link">
                  How MMA triazine works
                </Link>
              </li>
              <li>
                <Link href={EDDM_URL} className="text-link">
                  EDDM non-triazine H₂S scavenger — product page
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
              Clean up your biogas with MMA Triazine 40%
            </h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Share your biogas flow and H2S level and we will estimate dosing and quote supply —
              direct from an ISO 9001:2015 manufacturer in Gujarat, India.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact?product=mma-triazine-40" variant="primary">
                Discuss Your Biogas Duty
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
