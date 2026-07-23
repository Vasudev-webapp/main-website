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
const PATH = "/mma-triazine-40-applications-industries";
const MMA_URL = "/product/mma-triazine-40";
const MEA_URL = "/product/mea-triazine-78-h2s-scavenger";

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "MMA Triazine 40% Applications & Industries — H2S Scavenging Uses | Vasudev Chemo Pharma",
  description:
    "MMA Triazine 40% (CAS 108-74-7) applications across oil & gas, petrochemicals, refineries and biogas — natural gas sweetening, crude stabilisation, wellhead & pipeline treatment, DHDS and produced water. See where it fits.",
  keywords: mergeKeywordClusters([
    "mma triazine applications",
    "mma triazine 40 uses",
    "mma triazine industries",
    "mma triazine h2s scavenger applications",
    "triazine oilfield applications",
    "mma triazine wellhead pipeline",
    "mma triazine refinery dhds",
    "mma triazine biogas",
    "h2s scavenger uses oil gas",
    "monomethylamine triazine applications",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "MMA Triazine 40% Applications & Industries",
    description:
      "Where MMA Triazine 40% (CAS 108-74-7) is used — oil & gas, petrochemicals, refineries, biogas — for H2S scavenging across the value chain.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MMA Triazine 40% Applications & Industries",
    description:
      "Oil & gas, petrochemicals, refineries, biogas — the applications of MMA Triazine 40% H2S scavenger.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "What are the main applications of MMA Triazine 40%?",
    answer:
      "MMA Triazine 40% is used for hydrogen sulphide removal in natural gas streams, crude oil stabilisation, BTEX-free scavenging operations, wellhead and pipeline treatment, and gas processing plant sweetening. It serves both onshore and offshore operations and works in aqueous and hydrocarbon phases.",
  },
  {
    question: "Which industries use MMA Triazine 40%?",
    answer:
      "It is used across oil & gas (upstream and midstream), petrochemicals, refineries, and biogas & renewable energy. Anywhere sour gas or sour liquids must be treated to control H2S — for safety, corrosion or specification reasons — MMA Triazine 40% is a candidate scavenger.",
  },
  {
    question: "Is MMA Triazine 40% suitable for offshore use?",
    answer:
      "Yes. It is suitable for both onshore and offshore applications, is non-corrosive to common oilfield metallurgy and does not contribute to foaming in gas processing equipment when applied correctly. Its high thermal stability and low solids formation are particularly valuable offshore where intervention is costly.",
  },
  {
    question: "Can MMA Triazine 40% be used in refineries and DHDS units?",
    answer:
      "It is well suited to refinery service, including higher-temperature systems such as diesel hydro-desulphurisation (DHDS) units, flowlines and compressors, thanks to its strong thermal stability and its tendency to form soluble rather than solid by-products.",
  },
  {
    question: "Does MMA Triazine 40% work for biogas H2S removal?",
    answer:
      "Yes. Biogas and landfill gas often contain significant H2S that must be removed to protect engines, upgrading equipment and gas-grid injection. MMA Triazine 40% can scavenge that H2S; see our dedicated biogas page for how it applies to renewable gas streams.",
  },
  {
    question: "How do I know if MMA Triazine 40% is right for my application?",
    answer:
      "Match the chemistry to the duty: MMA Triazine 40% excels in hot, fouling-sensitive or BTEX-restricted service. Share your stream — phase, H2S load, temperature and constraints — and our technical team will confirm whether MMA Triazine 40%, MEA Triazine 78% or a non-triazine EDDM is the best fit.",
  },
];

export default function MmaTriazine40ApplicationsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "MMA Triazine 40% Applications & Industries", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionLabel>Applications overview</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                MMA Triazine 40% Applications &amp; Industries
              </h1>
              <p className="text-secondary text-lg mt-6">
                MMA Triazine 40% (Monomethylamine Triazine, CAS 108-74-7) is a versatile hydrogen
                sulphide scavenger used wherever sour gas and sour liquids must be treated. From
                wellheads and pipelines to gas plants, refineries and biogas upgrading, this page maps
                the applications and industries where MMA Triazine 40% delivers clean, reliable H2S
                control.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: MMA Triazine 40% is used for H2S removal in natural gas, crude oil
                  stabilisation, BTEX-free scavenging, wellhead and pipeline treatment, and gas-plant
                  sweetening — across oil &amp; gas, petrochemicals, refineries and biogas, both
                  onshore and offshore.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button href="/contact?product=mma-triazine-40" variant="primary">
                  Discuss Your Application
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
              Applications across the value chain
            </h2>
            <p className="text-secondary leading-relaxed">
              Hydrogen sulphide appears throughout the oil and gas value chain, and MMA Triazine 40%
              is applied at each stage where it must be controlled. At the wellhead and in gathering
              systems it protects early-production equipment and reduces sour-gas risk. In flowlines,
              on compressors and in gas plants it sweetens natural gas to pipeline and sales-gas
              specification. In crude systems it stabilises the oil by controlling liquid-phase and
              vapour-space H2S ahead of storage and transport. In refineries it treats sour streams,
              including in higher-temperature units. And in biogas and renewable energy it removes H2S
              that would otherwise damage engines and upgrading equipment. Its effectiveness in both
              aqueous and hydrocarbon phases makes it valuable in the multiphase reality of produced
              fluids.
            </p>
            <div className="overflow-x-auto mt-6">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="py-3 px-4 font-semibold">Application</th>
                    <th className="py-3 px-4 font-semibold">Role of MMA Triazine 40%</th>
                  </tr>
                </thead>
                <tbody className="text-secondary">
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Natural gas sweetening</td>
                    <td className="py-3 px-4">Removes H2S to meet pipeline/sales-gas spec</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Crude oil stabilisation</td>
                    <td className="py-3 px-4">Controls liquid &amp; vapour-space H2S</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Wellhead &amp; pipeline</td>
                    <td className="py-3 px-4">Protects equipment, reduces sour-gas risk</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Refinery / DHDS</td>
                    <td className="py-3 px-4">Thermally stable scavenging in hot units</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Biogas upgrading</td>
                    <td className="py-3 px-4">H2S removal to protect engines &amp; upgrading</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Industries served
            </h2>
            <p className="text-secondary leading-relaxed">
              MMA Triazine 40% supports four core industry groups. In oil &amp; gas, both upstream
              (production, wellheads, gathering) and midstream (pipelines, compression, gas plants)
              operations use it to control H2S for safety, integrity and specification. In
              petrochemicals, it treats sour intermediate and feed streams where H2S must be kept out
              of processing. In refineries, it handles sour gas and liquid streams, and its thermal
              stability suits hotter units such as DHDS. In biogas and renewable energy — anaerobic
              digesters, landfill gas and biomethane upgrading — it removes the H2S that corrodes
              engines and fouls upgrading membranes and adsorbents. Across all of these, the same
              qualities carry through: efficient H2S removal, BTEX-free composition, thermal stability
              and low solids formation.
            </p>

            <h2 className="font-heading text-h3 text-primary mb-6 mt-12">
              Onshore, offshore and multiphase performance
            </h2>
            <p className="text-secondary leading-relaxed">
              A scavenger&rsquo;s real test is how it behaves in field conditions, not just in a
              beaker. MMA Triazine 40% is designed for both onshore and offshore application. Offshore,
              where deck space is limited and intervention is expensive, its low tendency to form
              solids and its high thermal stability reduce the risk of fouling that would otherwise
              demand costly cleaning. Its full water miscibility and effectiveness in both aqueous and
              hydrocarbon phases mean it performs in multiphase production systems where gas, oil and
              water travel together. And because it is non-corrosive to common oilfield metallurgy and
              does not promote foaming when dosed correctly, it integrates cleanly into existing
              injection and separation equipment. This combination of versatility and clean operation
              is why MMA Triazine 40% is specified across such a wide range of applications and
              industries.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Matching MMA Triazine 40% to your operating conditions
            </h2>
            <p className="text-secondary leading-relaxed">
              The same product can behave differently across applications, so the right way to specify
              MMA Triazine 40% is to start from the conditions of your stream. The key variables are
              the phase (gas, liquid or multiphase), the H2S load, the operating temperature and
              pressure, and any downstream sensitivities such as membranes, catalysts or fouling-prone
              exchangers. MMA Triazine 40% is particularly strong where temperatures are high and where
              solids must be avoided, because its thermal stability and soluble by-products keep it
              clean-running in conditions that trouble less robust chemistries. In cooler, low-load
              duties a simple injection scheme may be all that is required, while high-load or
              specification-critical services may justify a contactor tower to raise utilisation.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              Because the product is fully water miscible and effective in both aqueous and hydrocarbon
              phases, it adapts to the multiphase reality of many production and processing systems
              rather than being limited to a single clean stream. That versatility is why a single
              scavenger can serve wellheads, gas plants, crude storage, refinery units and biogas
              upgrading — but the dose, injection method and monitoring should always be tuned to the
              specific duty. If you describe your operating conditions to our technical team, we will
              confirm whether MMA Triazine 40% is the best fit or whether MEA Triazine 78% or a
              non-triazine EDDM would serve better, and then supply the chosen product with the
              application support to deploy it well.
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
                <Link href="/mma-triazine-40-crude-oil-stabilisation" className="text-link">
                  MMA Triazine 40% for crude oil stabilisation
                </Link>
              </li>
              <li>
                <Link href="/mma-triazine-40-biogas-h2s-removal" className="text-link">
                  MMA Triazine 40% for biogas H2S removal
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
              Find the right fit for your application
            </h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Tell us your stream, phase and H2S duty and we will confirm whether MMA Triazine 40% is
              the right scavenger — and quote it direct from an ISO 9001:2015 manufacturer in Gujarat,
              India.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact?product=mma-triazine-40" variant="primary">
                Discuss Your Application
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
