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
const PATH = "/mma-triazine-40-cas-108-74-7-properties";
const MMA_URL = "/product/mma-triazine-40";
const MEA_URL = "/product/mea-triazine-78-h2s-scavenger";

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "MMA Triazine CAS 108-74-7 — Properties & Chemical Identity | Vasudev Chemo Pharma",
  description:
    "MMA Triazine CAS 108-74-7 (Monomethylamine Triazine) properties: chemical identity, structure, molecular formula, physical data and how it is made from monomethylamine and formaldehyde. Technical reference for the 40% H2S scavenger.",
  keywords: mergeKeywordClusters([
    "mma triazine cas 108-74-7",
    "mma triazine properties",
    "monomethylamine triazine cas number",
    "mma triazine chemical structure",
    "mma triazine molecular formula",
    "mma triazine physical properties",
    "trimethyl triazinane",
    "hexahydrotriazine h2s scavenger",
    "mma triazine 40 chemical identity",
    "mma triazine density ph",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "MMA Triazine CAS 108-74-7 — Properties & Chemical Identity",
    description:
      "Chemical identity, structure and physical properties of MMA Triazine (CAS 108-74-7), the monomethylamine-based H2S scavenger.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MMA Triazine CAS 108-74-7 Properties",
    description:
      "Structure, formula and physical data for MMA Triazine (Monomethylamine Triazine, CAS 108-74-7).",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "What is CAS 108-74-7?",
    answer:
      "CAS 108-74-7 is the Chemical Abstracts Service registry number for the monomethylamine-based triazine commonly called MMA Triazine — a hexahydrotriazine formed by reacting monomethylamine with formaldehyde. In its 40% liquid form it is used as a hydrogen sulphide scavenger in oil and gas.",
  },
  {
    question: "What is the chemical structure of MMA Triazine?",
    answer:
      "MMA Triazine is a six-membered ring made of alternating nitrogen and carbon atoms — a hexahydro-1,3,5-triazine — in which the nitrogen atoms carry methyl groups derived from monomethylamine. This ring is the reactive site that captures hydrogen sulphide, forming thiadiazine and then dithiazine reaction products.",
  },
  {
    question: "How is MMA Triazine manufactured?",
    answer:
      "MMA Triazine is produced by the controlled reaction of monomethylamine (MMA) with formaldehyde. The condensation builds the triazine ring, yielding a cyclic structure with high reactivity toward H2S and low-molecular-weight mercaptans. It is supplied as an aqueous solution, typically at 40% active for the H2S scavenger grade.",
  },
  {
    question: "What are the physical properties of MMA Triazine 40%?",
    answer:
      "MMA Triazine 40% is a clear to pale yellow liquid with a mild amine odour. Typical values: active content ≥40%, pH (1% solution) 9.5–11.5, specific gravity 1.05–1.10 at 25°C, fully water miscible, flash point above 93°C and freezing point below −10°C. CAS 108-74-7, HS code 29336990.",
  },
  {
    question: "What is the difference between MMA and MEA triazine chemistry?",
    answer:
      "Both are hexahydrotriazine H2S scavengers, but MMA triazine is built from monomethylamine while MEA triazine is built from monoethanolamine. The different substituent changes reactivity and, importantly, by-product solubility: MMA triazine tends to form more soluble products and fewer dithiazine solids, and it is more thermally stable.",
  },
  {
    question: "Is MMA Triazine the same as trimethyl-triazinane?",
    answer:
      "MMA Triazine is a methyl-substituted hexahydro-1,3,5-triazine associated with CAS 108-74-7. It is also referred to by names such as trimethyl-hexahydro-triazine and monomethylamine triazine. See our synonyms and trade-names page for the full list of names it appears under.",
  },
];

export default function MmaTriazineCasPropertiesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "MMA Triazine CAS 108-74-7 Properties", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionLabel>Technical reference</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                MMA Triazine (CAS 108-74-7) — Properties &amp; Chemical Identity
              </h1>
              <p className="text-secondary text-lg mt-6">
                This technical reference covers the chemical identity, structure, synthesis and
                physical properties of MMA Triazine (Monomethylamine Triazine, CAS 108-74-7) — the
                active chemistry behind the MMA Triazine 40% hydrogen sulphide scavenger manufactured
                by Vasudev Chemo Pharma.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: CAS 108-74-7 identifies the monomethylamine-based hexahydro-1,3,5-triazine
                  known as MMA Triazine, made by reacting monomethylamine with formaldehyde. As a 40%
                  liquid it is a clear to pale yellow, water-miscible H2S scavenger — pH 9.5–11.5,
                  specific gravity 1.05–1.10, flash point &gt;93&deg;C, HS code 29336990.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button href={MMA_URL} variant="primary">
                  View MMA Triazine 40% Product
                </Button>
                <Button href="/contact?product=mma-triazine-40" variant="secondary">
                  Request Technical Data
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Chemical identity at a glance
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="py-3 px-4 font-semibold">Identifier / property</th>
                    <th className="py-3 px-4 font-semibold">Value</th>
                  </tr>
                </thead>
                <tbody className="text-secondary">
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Common name</td>
                    <td className="py-3 px-4">MMA Triazine / Monomethylamine Triazine</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">CAS number</td>
                    <td className="py-3 px-4">108-74-7</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">HS code</td>
                    <td className="py-3 px-4">29336990</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Chemical class</td>
                    <td className="py-3 px-4">Hexahydro-1,3,5-triazine (methyl-substituted)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Molecular formula / weight</td>
                    <td className="py-3 px-4">C₆H₁₅N₃ / 129.20 g/mol</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Made from</td>
                    <td className="py-3 px-4">Monomethylamine + formaldehyde</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Appearance</td>
                    <td className="py-3 px-4">Clear to pale yellow liquid</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">pH (1% solution)</td>
                    <td className="py-3 px-4">9.5 – 11.5</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Specific gravity (25&deg;C)</td>
                    <td className="py-3 px-4">1.05 – 1.10</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Solubility</td>
                    <td className="py-3 px-4">Fully miscible in water</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Flash / freezing point</td>
                    <td className="py-3 px-4">&gt; 93&deg;C / &lt; &minus;10&deg;C</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Structure and how it is made
            </h2>
            <p className="text-secondary leading-relaxed">
              MMA Triazine belongs to the hexahydro-1,3,5-triazine family — a saturated six-membered
              ring of alternating nitrogen and carbon atoms. It is produced by the controlled
              condensation of monomethylamine with formaldehyde: the amine and aldehyde react to build
              the triazine ring, and the methyl substitution on the ring nitrogens is what distinguishes
              MMA triazine from the monoethanolamine-based MEA triazine. This reaction, run under
              controlled conditions, yields a cyclic structure with high reactivity toward hydrogen
              sulphide and low-molecular-weight mercaptans. The finished scavenger is supplied as an
              aqueous solution, standardised to a defined active content — 40% for the MMA Triazine
              40% grade — so that scavenging capacity and dosing can be calculated reliably.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              The triazine ring is the functional heart of the molecule. When it meets H2S, the ring
              opens stepwise, incorporating sulphur to form a thiadiazine and then a dithiazine — the
              stable end-products of scavenging. Because the reaction is essentially irreversible under
              application conditions, triazines are termed non-regenerative scavengers: the chemical is
              consumed as it works, rather than being stripped and reused. For a fuller treatment of
              this mechanism, see our page on how MMA triazine works.
            </p>

            <h2 className="font-heading text-h3 text-primary mb-6 mt-12">
              Physical properties and what they imply
            </h2>
            <p className="text-secondary leading-relaxed">
              The physical data tell a practical story. The alkaline pH (9.5–11.5 in a 1% solution)
              reflects the amine chemistry and favours the scavenging reaction, while signalling the
              need to keep the product away from strong acids and to select compatible materials. Full
              water miscibility means the scavenger disperses readily into aqueous and multiphase
              streams, giving good contact with dissolved H2S. A specific gravity of 1.05–1.10 supports
              accurate volumetric dosing. The high flash point (above 93&deg;C) classifies it away from
              flammable-liquid handling constraints, easing storage and transport, and the low freezing
              point (below &minus;10&deg;C) gives wide cold-weather latitude. Taken together, CAS
              108-74-7 in its 40% form is a robust, field-friendly molecule whose properties are
              well matched to continuous H2S-scavenger injection.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Reactivity, stability and storage behaviour
            </h2>
            <p className="text-secondary leading-relaxed">
              The reactivity of MMA Triazine (CAS 108-74-7) toward hydrogen sulphide is what makes it
              useful, and it derives directly from the triazine ring. The ring nitrogens, activated by
              the surrounding structure, make the molecule an effective nucleophile for reaction with
              acidic H2S, opening step-wise to incorporate sulphur into thiadiazine and then dithiazine
              products. The same chemistry gives it activity toward low-molecular-weight mercaptans. A
              defining feature of the monomethylamine-based structure is the solubility of those
              reaction products: compared with the monoethanolamine-based MEA triazine, MMA triazine
              tends to keep its sulphur end-products in solution rather than precipitating them as
              solids, which is the root cause of its cleaner operational profile.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              Stability is the other half of the story. MMA Triazine shows good thermal and chemical
              stability, which is why it holds up in hotter service such as compressors and
              diesel-hydro-desulphurisation units where a less robust scavenger could degrade. As an
              aqueous, alkaline product it is stable in normal storage but should be kept away from
              strong acids and oxidisers, which are chemically incompatible. Its high flash point and
              low freezing point translate into a wide, forgiving storage window, and in sealed
              original containers held in cool, ventilated conditions it maintains its specification
              well over a normal storage period. For engineers, the take-away is that CAS 108-74-7 is
              not just reactive toward H2S but reactive in a controlled, stable and clean way — the
              combination that makes it a dependable field scavenger. Detailed handling, PPE and storage
              guidance is covered on our safety page and in the Safety Data Sheet.
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
                <Link href="/mma-triazine-40-synonyms-trade-names" className="text-link">
                  MMA Triazine synonyms &amp; trade names
                </Link>
              </li>
              <li>
                <Link href="/mma-triazine-40-specifications-coa-datasheet" className="text-link">
                  Specifications, COA &amp; datasheet
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
              Need MMA Triazine technical data?
            </h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Request the full datasheet, structure and specification for MMA Triazine (CAS 108-74-7) —
              direct from an ISO 9001:2015 certified manufacturer in Gujarat, India.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact?product=mma-triazine-40" variant="primary">
                Request Technical Data
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
