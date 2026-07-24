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
const PATH = "/how-mma-triazine-works-h2s-scavenging";
const MMA_URL = "/product/mma-triazine-40";
const MEA_URL = "/product/mea-triazine-78-h2s-scavenger";

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "How MMA Triazine Works — H2S Scavenging Reaction Chemistry | Vasudev Chemo Pharma",
  description:
    "How MMA Triazine (CAS 108-74-7) works as an H2S scavenger: the step-wise reaction with hydrogen sulphide, thiadiazine and dithiazine formation, why by-products stay soluble, and how it compares to MEA triazine chemistry.",
  keywords: mergeKeywordClusters([
    "how mma triazine works",
    "mma triazine reaction chemistry",
    "mma triazine h2s reaction",
    "triazine h2s scavenging mechanism",
    "dithiazine formation",
    "thiadiazine h2s",
    "non-regenerative h2s scavenger",
    "mma triazine mechanism",
    "how triazine removes h2s",
    "monomethylamine triazine chemistry",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "How MMA Triazine Works — H2S Scavenging Chemistry",
    description:
      "The reaction mechanism of MMA Triazine (CAS 108-74-7) with H2S — thiadiazine, dithiazine and why by-products stay soluble.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How MMA Triazine Works",
    description:
      "Step-wise H2S reaction chemistry of MMA Triazine — thiadiazine to dithiazine, and why it fouls less.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "How does MMA Triazine react with H2S?",
    answer:
      "MMA Triazine reacts with hydrogen sulphide in a step-wise substitution: the hexahydrotriazine ring reacts with one molecule of H2S to open into a thiadiazine, then with a second H2S to form a dithiazine. Sulphur is incorporated into stable, soluble organic products, permanently removing H2S from the gas or liquid.",
  },
  {
    question: "What is dithiazine and why does it matter?",
    answer:
      "Dithiazine is the sulphur-containing end-product of triazine H2S scavenging. With MEA triazine it can precipitate as a solid when over-dosed or in certain conditions, causing fouling and scaling. MMA triazine tends to form more soluble products, so it is less prone to leaving dithiazine solids — a key operational advantage.",
  },
  {
    question: "Is MMA Triazine a regenerative or non-regenerative scavenger?",
    answer:
      "MMA Triazine is non-regenerative. The reaction with H2S is essentially irreversible under application conditions, so the chemical is consumed as it scavenges rather than being stripped and reused. This makes it simple to apply — you dose it, it reacts, and the spent product leaves with the treated stream.",
  },
  {
    question: "Why does MMA triazine foul less than MEA triazine?",
    answer:
      "Because the monomethylamine-based chemistry produces reaction by-products that are more soluble than those from MEA triazine, sulphur end-products stay in solution rather than precipitating as dithiazine solids. Field programmes have shown MMA triazine eliminating solids that MEA triazine had caused over years of injection.",
  },
  {
    question: "Does MMA Triazine remove mercaptans as well as H2S?",
    answer:
      "The reactive triazine ring shows high reactivity toward H2S and low-molecular-weight mercaptans, so it can contribute to reducing light mercaptan content alongside its primary role of scavenging hydrogen sulphide, depending on conditions and dose.",
  },
  {
    question: "What controls how much H2S MMA Triazine can remove?",
    answer:
      "Capacity is governed by the stoichiometry of the ring–H2S reaction and the active content of the product. In practice, achievable removal also depends on contact time, mixing and temperature. This is why dosing is calculated from H2S load and active content, then optimised in the field against outlet H2S.",
  },
];

export default function HowMmaTriazineWorksPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "How MMA Triazine Works", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <Breadcrumbs items={[
          { name: "Home", url: SITE_URL },
          { name: "How MMA Triazine Works", url: `${SITE_URL}${PATH}` },
        ]} className="mb-6" />
              <SectionLabel>Reaction chemistry</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                How MMA Triazine Works — H₂S Scavenging Chemistry
              </h1>
              <p className="text-secondary text-lg mt-6">
                Understanding the chemistry helps you dose smarter and troubleshoot faster. This page
                explains how MMA Triazine (Monomethylamine Triazine, CAS 108-74-7) captures hydrogen
                sulphide — the step-wise reaction, the thiadiazine and dithiazine products, and why
                its by-products stay soluble where MEA triazine&rsquo;s can foul.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: MMA Triazine&rsquo;s hexahydrotriazine ring reacts step-wise with H2S —
                  first forming a thiadiazine, then a dithiazine — permanently incorporating sulphur
                  into stable, soluble products. It is a non-regenerative scavenger: consumed as it
                  works, and less prone to dithiazine solids than MEA triazine.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button href={MMA_URL} variant="primary">
                  View MMA Triazine 40% Product
                </Button>
                <Button href="/contact?product=mma-triazine-40" variant="secondary">
                  Ask a Technical Question
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">
              The step-wise reaction with H2S
            </h2>
            <p className="text-secondary leading-relaxed">
              MMA Triazine is built around a hexahydro-1,3,5-triazine ring — a saturated six-membered
              ring of alternating nitrogen and carbon atoms, with methyl groups on the nitrogens from
              its monomethylamine origin. When this ring encounters hydrogen sulphide, it reacts in a
              step-wise fashion. The first equivalent of H2S opens the ring to form a thiadiazine,
              exchanging a nitrogen-bearing group for sulphur. A second equivalent of H2S then reacts
              to form a dithiazine, incorporating a second sulphur atom. The net effect is that
              hydrogen sulphide — a toxic, corrosive gas — is chemically bound into stable organic
              molecules that remain with the treated stream and leave the system harmlessly.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              This chemistry is fast and, under application conditions, effectively irreversible, which
              is exactly what makes triazines such practical field scavengers. There is no need for a
              regeneration cycle, stripping column or catalyst: you simply introduce the triazine into
              the gas or liquid, provide adequate contact, and the H2S is consumed. The trade-off is
              that the chemical is used up as it works, so consumption scales with the H2S load — the
              basis for dose calculations.
            </p>

            <h2 className="font-heading text-h3 text-primary mb-6 mt-12">
              Reaction products and solubility
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="py-3 px-4 font-semibold">Stage</th>
                    <th className="py-3 px-4 font-semibold">What happens</th>
                  </tr>
                </thead>
                <tbody className="text-secondary">
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">1. Triazine + H2S</td>
                    <td className="py-3 px-4">Ring opens to form a thiadiazine (1 S added)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">2. Thiadiazine + H2S</td>
                    <td className="py-3 px-4">Forms a dithiazine (2nd S added)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">MMA by-products</td>
                    <td className="py-3 px-4">More soluble — resist precipitation</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">MEA by-products</td>
                    <td className="py-3 px-4">Dithiazine can precipitate as solids</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Why MMA chemistry stays cleaner
            </h2>
            <p className="text-secondary leading-relaxed">
              The single most important practical difference between MMA and MEA triazine lies in the
              solubility of their reaction products. With MEA triazine, the dithiazine end-product can,
              under certain conditions or when the scavenger is over-dosed, precipitate as a solid —
              building up in pipelines, storage tanks and processing equipment, causing blockages and
              scaling that demand costly cleaning and downtime. The monomethylamine-based chemistry of
              MMA triazine yields by-products that are more soluble, so the sulphur end-products tend
              to stay in solution and travel out with the stream rather than depositing. This is not
              just a laboratory observation: long-term field programmes, including on North Sea
              platforms over injection periods of well over a decade, found that switching from MEA to
              MMA triazine eliminated solids and improved pipeline efficiency.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              MMA triazine is also more thermally stable, which reinforces the clean-running behaviour
              in hot systems such as compressors and DHDS units where a less stable scavenger might
              degrade or drop solids. For an engineer, the takeaway is that the same fundamental
              triazine mechanism can behave very differently in the field depending on the amine it is
              built from — and MMA&rsquo;s soluble by-products are why it is increasingly treated as a
              first-choice scavenger in fouling-sensitive service.
            </p>

            <h2 className="font-heading text-h3 text-primary mb-6 mt-12">
              From mechanism to dosing
            </h2>
            <p className="text-secondary leading-relaxed">
              Because the ring reacts with H2S in a defined stoichiometry, the theoretical capacity of
              a triazine scavenger can be calculated from its active content — the basis for estimating
              how much product a given H2S load will consume. In practice, achievable removal also
              depends on contact time, mixing and temperature, so a field programme sets a starting
              dose from the calculated demand and then trims it against measured outlet H2S.
              Understanding the mechanism helps here: knowing that the reaction is irreversible and
              step-wise explains why adequate contact matters, and knowing that MMA by-products stay
              soluble gives confidence to dose in systems where solids would otherwise be a concern.
              For the practical method, see our MMA Triazine 40% dosage and injection-rate guide.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Practical implications of the mechanism
            </h2>
            <p className="text-secondary leading-relaxed">
              Understanding that MMA triazine scavenges H2S through an irreversible, step-wise ring
              reaction has several practical consequences for the way it is applied. Because the
              reaction is irreversible, there is no equilibrium to fight and no regeneration step to
              engineer — the scavenger simply needs to meet the H2S and react, which is why contact
              time and mixing are the levers that most affect performance. Because the reaction is
              step-wise, with two H2S molecules ultimately consumed per ring, the theoretical capacity
              can be calculated from active content and used to estimate consumption. And because the
              chemical is consumed as it works, usage scales with H2S load: more sulphide simply means
              more scavenger, which is the basis for treated-cost estimates and supply planning.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              The mechanism also explains the operational differences that matter in the field. The
              soluble nature of MMA triazine&rsquo;s dithiazine products is not a marketing claim but a
              direct outcome of the monomethylamine chemistry, and it is why the same fundamental
              triazine reaction fouls far less than MEA triazine in hot or long-running systems.
              Knowing this gives engineers confidence to dose adequately in solids-sensitive service
              without seeding deposits. It also frames troubleshooting: if H2S breakthrough occurs, the
              usual causes are insufficient contact, inadequate dose relative to a risen H2S load, or
              poor mixing — not a failure of the chemistry itself. Reading the mechanism this way turns
              theory into a checklist for reliable, economical scavenging.
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
                <Link href="/mma-triazine-40-cas-108-74-7-properties" className="text-link">
                  CAS 108-74-7 properties &amp; chemical identity
                </Link>
              </li>
              <li>
                <Link href="/mma-triazine-40-dosage-injection-rate-guide" className="text-link">
                  Dosage &amp; injection rate guide
                </Link>
              </li>
              <li>
                <Link href="/how-h2s-scavengers-work" className="text-link">
                  How H2S scavengers work (overview)
                </Link>
              </li>
              <li>
                <Link href="/mea-triazine-vs-mma-triazine" className="text-link">
                  MEA Triazine vs MMA Triazine
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
              Have a technical question about MMA triazine?
            </h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Our team can explain the chemistry for your stream and help translate it into a dosing
              plan — direct from an ISO 9001:2015 certified manufacturer in Gujarat, India.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact?product=mma-triazine-40" variant="primary">
                Ask a Technical Question
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
