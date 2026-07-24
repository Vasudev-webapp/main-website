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
const PATH = "/mma-triazine-40-dosage-injection-rate-guide";
const MMA_URL = "/product/mma-triazine-40";
const MEA_URL = "/product/mea-triazine-78-h2s-scavenger";

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "MMA Triazine 40% Dosage & Injection Rate Guide — H2S Scavenger | Vasudev Chemo Pharma",
  description:
    "How to calculate MMA Triazine 40% (CAS 108-74-7) dosage and injection rate for H2S scavenging — stoichiometry, real-world efficiency, direct injection vs contactor tower, and field optimisation against outlet H2S.",
  keywords: mergeKeywordClusters([
    "mma triazine dosage",
    "mma triazine injection rate",
    "mma triazine 40 dose calculation",
    "h2s scavenger dosage",
    "triazine dosing guide",
    "mma triazine consumption h2s",
    "h2s scavenger injection rate",
    "triazine stoichiometry h2s",
    "mma triazine dose rate ppm",
    "monomethylamine triazine dosing",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "MMA Triazine 40% Dosage & Injection Rate Guide",
    description:
      "Calculate MMA Triazine 40% dosage from H2S load — stoichiometry, efficiency, injection method and field optimisation.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MMA Triazine 40% Dosage & Injection Guide",
    description:
      "Dose calculation, injection method and field optimisation for MMA Triazine 40% H2S scavenger.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "How do I calculate MMA Triazine 40% dosage?",
    answer:
      "Start from the H2S load — the mass of H2S to be removed per unit time, from gas flow rate and inlet/outlet H2S. Use the triazine stoichiometry and the product active content to find the theoretical chemical demand, then apply a field efficiency factor (real systems rarely reach 100% utilisation) to set a starting injection rate. Finally, trim the rate in the field against measured outlet H2S.",
  },
  {
    question: "What efficiency should I assume for triazine scavenging?",
    answer:
      "Theoretical stoichiometry gives an upper bound, but real utilisation depends on contact time, mixing, temperature and application method. Direct injection typically achieves lower utilisation than a well-designed contactor tower. A conservative starting point uses a utilisation factor below the theoretical maximum, then optimises down as field data confirms performance.",
  },
  {
    question: "Does injection method change the dose?",
    answer:
      "Yes. A contactor or bubble tower maximises gas–liquid contact and generally achieves higher scavenger utilisation, so it needs less chemical for the same removal than simple pipeline injection. Direct injection is simpler and cheaper to install but may need a higher dose. The best choice depends on H2S load, gas rate and available space.",
  },
  {
    question: "Can I over-dose MMA Triazine 40%?",
    answer:
      "Over-dosing wastes chemical and, with any triazine, increases the risk of by-product solids. MMA triazine is more forgiving than MEA triazine because its by-products are more soluble, but the goal is still to dose to the H2S demand plus a controlled margin, not far beyond it. Field trimming against outlet H2S prevents both under- and over-dosing.",
  },
  {
    question: "How does temperature affect dosing?",
    answer:
      "Higher temperatures generally speed the scavenging reaction, which can improve utilisation, and MMA triazine's thermal stability makes it well suited to hot systems. Very low temperatures can slow kinetics and increase viscosity. Because effects vary by system, dosing is always confirmed against field measurements.",
  },
  {
    question: "Can you provide a dosing estimate for my system?",
    answer:
      "Yes. Share gas or liquid flow rate, inlet and target outlet H2S, temperature, pressure and application method, and our technical team will estimate an MMA Triazine 40% injection rate and consumption so you can plan chemical supply and treated cost. Field data is then used to fine-tune.",
  },
];

export default function MmaTriazine40DosageGuidePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "MMA Triazine 40% Dosage & Injection Rate Guide", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <Breadcrumbs items={[
          { name: "Home", url: SITE_URL },
          { name: "MMA Triazine 40% Dosage & Injection Rate Guide", url: `${SITE_URL}${PATH}` },
        ]} className="mb-6" />
              <SectionLabel>Dosing guide</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                MMA Triazine 40% Dosage &amp; Injection Rate Guide
              </h1>
              <p className="text-secondary text-lg mt-6">
                Right-sizing the dose is where H2S-scavenger economics are won or lost. Under-dose and
                you miss specification; over-dose and you waste chemical and risk by-product solids.
                This guide explains how to calculate an MMA Triazine 40% (CAS 108-74-7) injection rate
                from the H2S load, choose an application method, and optimise in the field.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: calculate the H2S load from gas flow and inlet/outlet H2S, convert to a
                  theoretical chemical demand using triazine stoichiometry and the 40% active content,
                  apply a real-world utilisation factor, then trim the injection rate against measured
                  outlet H2S. Contactor towers need less chemical than simple direct injection.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button href="/contact?product=mma-triazine-40" variant="primary">
                  Get a Dosing Estimate
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
              Step 1 — Quantify the H2S load
            </h2>
            <p className="text-secondary leading-relaxed">
              Every dosing calculation begins with the H2S load: how much hydrogen sulphide you need to
              remove per unit time. For a gas stream this comes from the gas flow rate and the
              difference between inlet and target outlet H2S concentration; for a liquid it comes from
              the throughput and the H2S content to be removed. Converting the H2S concentration and
              flow into a mass of H2S per day gives you the demand the scavenger must meet. Getting this
              number right — with representative H2S measurements, not a single spot reading — is the
              foundation of an accurate dose, because everything downstream scales from it.
            </p>

            <h2 className="font-heading text-h3 text-primary mb-6 mt-12">
              Step 2 — From load to chemical demand
            </h2>
            <p className="text-secondary leading-relaxed">
              The triazine ring reacts with H2S in a defined stoichiometry, and the product carries a
              known active content (≥40% for MMA Triazine 40%). Together these let you calculate the
              theoretical mass of scavenger needed to react with the H2S load. This theoretical figure
              is an upper bound on efficiency, however: in a real system, not every molecule of
              scavenger contacts and reacts with H2S. You therefore apply a utilisation (efficiency)
              factor that reflects your application method and conditions, which increases the actual
              dose above the theoretical minimum. The table below summarises the logic.
            </p>
            <div className="overflow-x-auto mt-6">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="py-3 px-4 font-semibold">Step</th>
                    <th className="py-3 px-4 font-semibold">Input</th>
                    <th className="py-3 px-4 font-semibold">Output</th>
                  </tr>
                </thead>
                <tbody className="text-secondary">
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">H2S load</td>
                    <td className="py-3 px-4">Flow &times; (inlet − outlet H2S)</td>
                    <td className="py-3 px-4">kg H2S / day</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Theoretical demand</td>
                    <td className="py-3 px-4">Stoichiometry &amp; 40% active</td>
                    <td className="py-3 px-4">kg product / day (min)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Apply utilisation</td>
                    <td className="py-3 px-4">Method &amp; conditions factor</td>
                    <td className="py-3 px-4">Starting injection rate</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Field trim</td>
                    <td className="py-3 px-4">Measured outlet H2S</td>
                    <td className="py-3 px-4">Optimised dose</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Step 3 — Choose the application method
            </h2>
            <p className="text-secondary leading-relaxed">
              The way you introduce MMA Triazine 40% strongly affects how much you use. Direct
              injection into a pipeline — via a quill and static mixer — is simple and low-cost to
              install and suits lower H2S loadings, but the limited contact time means scavenger
              utilisation is often modest, so the dose per unit of H2S is higher. A contactor or bubble
              tower deliberately maximises gas–liquid contact, achieving higher utilisation and
              therefore lower chemical consumption for the same removal, at the cost of more equipment
              and space. Some systems combine the two: injection upstream to handle the bulk load and a
              tower to polish the gas to specification. Choosing between them is an economic trade-off
              between capital cost and ongoing chemical spend, and it depends on your H2S load, gas rate
              and site constraints.
            </p>

            <h2 className="font-heading text-h3 text-primary mb-6 mt-12">
              Step 4 — Optimise in the field
            </h2>
            <p className="text-secondary leading-relaxed">
              No calculation replaces field measurement. Once the starting injection rate is set,
              monitor outlet H2S and adjust: if the outlet is comfortably below specification, trim the
              rate down to save chemical; if it is close to or above the limit, increase it. Because
              MMA triazine forms more soluble by-products than MEA triazine, it gives more headroom to
              dose confidently without the solids risk that constrains MEA systems — but the discipline
              of dosing to demand plus a controlled margin still applies, since over-dosing wastes
              money and, with any triazine, can eventually promote by-product solids. Temperature,
              pressure and flow variability all feed into the picture, which is why continuous or
              regular H2S monitoring is the key to a stable, economical programme. Share your data and
              we will provide a starting estimate you can refine on site.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Common dosing mistakes to avoid
            </h2>
            <p className="text-secondary leading-relaxed">
              Most dosing problems come from a handful of avoidable mistakes. The first is basing the
              dose on a single H2S spot reading rather than a representative range; H2S varies with
              production, so a one-off number can leave you badly under- or over-dosed once conditions
              shift. The second is assuming theoretical stoichiometry equals field performance —
              ignoring the utilisation factor leads to chronic under-dosing and H2S breakthrough,
              especially with simple pipeline injection where contact time is limited. The third is
              neglecting the mixing and injection hardware: even a correct dose fails if the scavenger
              is not properly atomised and contacted with the gas or liquid. The fourth is failing to
              re-check the dose after a process change, so a rate set for last quarter&rsquo;s
              conditions is quietly wrong today.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              The discipline that prevents all of these is simple: calculate a starting rate from a
              representative H2S load and a realistic utilisation factor, then confirm and trim against
              measured outlet H2S, and revisit the setting whenever flow, temperature or inlet H2S
              changes. MMA Triazine 40% gives more room for error than a solids-forming chemistry
              because over-dosing is less likely to seed dithiazine deposits, but the goal is still to
              dose to demand plus a controlled margin rather than blindly high. Keeping a short log of
              dose rate against outlet H2S turns dosing from guesswork into a repeatable, auditable
              routine — and if you share your data with our technical team, we will provide a starting
              estimate and sanity-check your assumptions before you commit chemical.
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
                <Link href="/how-mma-triazine-works-h2s-scavenging" className="text-link">
                  How MMA triazine works (reaction chemistry)
                </Link>
              </li>
              <li>
                <Link href="/triazine-injection-vs-contactor-tower" className="text-link">
                  Direct injection vs contactor tower
                </Link>
              </li>
              <li>
                <Link href="/mma-triazine-40-natural-gas-sweetening" className="text-link">
                  MMA Triazine 40% for natural gas sweetening
                </Link>
              </li>
              <li>
                <Link href="/mma-triazine-40-specifications-coa-datasheet" className="text-link">
                  Specifications, COA &amp; datasheet
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
              Get an MMA Triazine 40% dosing estimate
            </h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Send your flow, inlet/outlet H2S and application method and we will estimate injection
              rate and consumption — direct from an ISO 9001:2015 manufacturer in Gujarat, India.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact?product=mma-triazine-40" variant="primary">
                Get a Dosing Estimate
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
