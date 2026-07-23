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
const PATH = "/mma-triazine-40-synonyms-trade-names";
const MMA_URL = "/product/mma-triazine-40";
const MEA_URL = "/product/mea-triazine-78-h2s-scavenger";

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "MMA Triazine Synonyms & Trade Names — CAS 108-74-7 | Vasudev Chemo Pharma",
  description:
    "MMA Triazine synonyms, chemical names and trade names — Monomethylamine Triazine, MMT, methyl-substituted hexahydrotriazine (CAS 108-74-7). A reference to help you identify the same H2S scavenger under different names.",
  keywords: mergeKeywordClusters([
    "mma triazine synonyms",
    "monomethylamine triazine other names",
    "mma triazine trade names",
    "mma triazine chemical name",
    "mma triazine cas 108-74-7 names",
    "mmt triazine",
    "methyl triazine h2s scavenger names",
    "hexahydrotriazine synonym",
    "mma triazine also known as",
    "monomethylamine triazine iupac",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "MMA Triazine Synonyms & Trade Names (CAS 108-74-7)",
    description:
      "The many names for MMA Triazine — Monomethylamine Triazine, MMT, methyl hexahydrotriazine — all identifying the same H2S scavenger.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MMA Triazine Synonyms & Trade Names",
    description:
      "Identify MMA Triazine (CAS 108-74-7) across its synonyms, chemical names and trade names.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "What is MMA Triazine also known as?",
    answer:
      "MMA Triazine is most commonly called Monomethylamine Triazine; its systematic (IUPAC) name is 1,3,5-trimethyl-1,3,5-triazinane. It is also referred to as MMT and monomethylamine-based triazine H2S scavenger. All of these refer to the same monomethylamine-derived triazine associated with CAS 108-74-7. 'MMA Triazine 40%' is not a synonym for the substance itself — it is a separate commercial formulation, the 40% active aqueous grade.",
  },
  {
    question: "What is the difference between a synonym and a trade name?",
    answer:
      "A synonym is an alternative chemical or descriptive name for the same substance (for example 'Monomethylamine Triazine'), while a trade name is a brand or product name a manufacturer gives their formulation. Different suppliers market monomethylamine triazine H2S scavengers under their own brand names, but the underlying chemistry is the same.",
  },
  {
    question: "Why does MMA Triazine appear under so many names?",
    answer:
      "Specialty chemicals accumulate names from chemistry (IUPAC and semi-systematic names), from industry usage (abbreviations like MMA and MMT), and from suppliers' brands. This can make it hard to confirm you are comparing like with like — which is why the CAS number 108-74-7 is the most reliable identifier.",
  },
  {
    question: "Is MMA Triazine the same as MEA Triazine?",
    answer:
      "No. Both are hexahydrotriazine H2S scavengers, but MMA Triazine is built from monomethylamine while MEA Triazine is built from monoethanolamine, and they carry different CAS numbers. They also behave differently — MMA triazine tends to form more soluble by-products and is more thermally stable. See our MEA vs MMA comparison for details.",
  },
  {
    question: "What CAS and HS codes identify MMA Triazine?",
    answer:
      "MMA Triazine is associated with CAS number 108-74-7 and is exported under HS code 29336990. Quoting these on enquiries and documentation removes ambiguity from naming, so you and your supplier are certain to be discussing the same product.",
  },
  {
    question: "How do I make sure I'm buying the right product?",
    answer:
      "Confirm the CAS number (108-74-7), the active content (40% for the standard H2S scavenger grade), and request the datasheet and COA. Vasudev Chemo Pharma supplies MMA Triazine 40% with full specification and documentation so you can verify identity regardless of the name a competing quote uses.",
  },
];

export default function MmaTriazineSynonymsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "MMA Triazine Synonyms & Trade Names", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionLabel>Naming reference</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                MMA Triazine — Synonyms &amp; Trade Names (CAS 108-74-7)
              </h1>
              <p className="text-secondary text-lg mt-6">
                The same H2S scavenger can appear under many names, which makes comparing quotes and
                datasheets confusing. This reference lists the synonyms, chemical names and common
                trade-name patterns for MMA Triazine (Monomethylamine Triazine, CAS 108-74-7) so you
                can be certain you are looking at the same product.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: MMA Triazine is also known as Monomethylamine Triazine (IUPAC name
                  1,3,5-trimethyl-1,3,5-triazinane), MMT and monomethylamine-based triazine H2S
                  scavenger. &ldquo;MMA Triazine 40%&rdquo; is a separate commercial formulation (the
                  40% active liquid grade), not a synonym. Whatever the name, the reliable identifier
                  is CAS 108-74-7 (HS code 29336990).
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button href={MMA_URL} variant="primary">
                  View MMA Triazine 40% Product
                </Button>
                <Button href="/contact?product=mma-triazine-40" variant="secondary">
                  Confirm Product Identity
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Names and identifiers for MMA Triazine
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="py-3 px-4 font-semibold">Type</th>
                    <th className="py-3 px-4 font-semibold">Name / value</th>
                  </tr>
                </thead>
                <tbody className="text-secondary">
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Common name</td>
                    <td className="py-3 px-4">MMA Triazine</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Full name</td>
                    <td className="py-3 px-4">Monomethylamine Triazine</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Abbreviations</td>
                    <td className="py-3 px-4">MMA Triazine, MMT</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">IUPAC name</td>
                    <td className="py-3 px-4">1,3,5-Trimethyl-1,3,5-triazinane</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Descriptive names</td>
                    <td className="py-3 px-4">Monomethylamine-based triazine H2S scavenger; BTEX-free triazine scavenger</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Product grade</td>
                    <td className="py-3 px-4">MMA Triazine 40% (40% active liquid)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">CAS number</td>
                    <td className="py-3 px-4">108-74-7</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">HS code</td>
                    <td className="py-3 px-4">29336990</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Why the naming matters for buyers
            </h2>
            <p className="text-secondary leading-relaxed">
              Specialty chemicals accumulate names over time. Chemists refer to the substance by its
              structure — a methyl-substituted hexahydro-1,3,5-triazine — while the oil and gas
              industry uses convenient abbreviations such as MMA triazine and MMT. On top of that, each
              supplier may market their formulation under a proprietary trade name. The result is that
              the same underlying chemistry can appear on three quotes under three different names,
              making it genuinely difficult to know whether you are comparing like with like. For a
              procurement team, this ambiguity is a commercial risk: a cheaper-looking quote might be a
              different active content, a different chemistry, or simply a re-branded version of the
              same thing.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              The way through the confusion is to anchor on unambiguous identifiers. The CAS number
              108-74-7 pins down the monomethylamine triazine chemistry regardless of the marketing
              name, and the active content (40% for the standard H2S scavenger grade) fixes the
              concentration. The HS code 29336990 identifies the customs classification for import and
              export. When you request quotations, ask each supplier to state the CAS number, active
              content and to provide a datasheet and COA — then you can compare on substance rather
              than on names.
            </p>

            <h2 className="font-heading text-h3 text-primary mb-6 mt-12">
              MMA Triazine vs related chemistries
            </h2>
            <p className="text-secondary leading-relaxed">
              It is also important not to confuse MMA triazine with its close relatives. MEA triazine
              is a hexahydrotriazine too, but it is built from monoethanolamine rather than
              monomethylamine, carries a different CAS number, and behaves differently — notably in
              by-product solubility and thermal stability. Non-triazine scavengers such as EDDM (a
              formaldehyde donor) are a different chemistry altogether. Because names alone will not
              tell you which of these you are being offered, the CAS number and datasheet remain the
              definitive check. Vasudev Chemo Pharma manufactures MMA Triazine 40%, MEA Triazine 78%
              and non-triazine EDDM, and supplies each with full specification and documentation so
              identity is never in doubt.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">
              How the different names show up in practice
            </h2>
            <p className="text-secondary leading-relaxed">
              The naming variation is not just academic — it appears in the everyday documents a
              buyer handles. In a tender or request for quotation, one bidder may list
              &ldquo;Monomethylamine Triazine 40%&rdquo;, another &ldquo;MMA Triazine H2S
              scavenger&rdquo;, and a third a proprietary brand name, yet all three may be offering the
              same chemistry. On a Safety Data Sheet the product may be named by its chemical class —
              a methyl-substituted hexahydro-1,3,5-triazine — while the accompanying Certificate of
              Analysis uses the short trade name. In customs and shipping paperwork the description
              sits alongside the HS code 29336990, and in a plant&rsquo;s chemical register it might be
              logged simply as &ldquo;H2S scavenger, triazine&rdquo;. Recognising that these are all
              pointers to the same substance saves time and prevents costly mismatches.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              The disciplined way to cut through it is to cross-reference on the identifiers that do
              not change. Ask for the CAS number (108-74-7), the active content (40% for the standard
              scavenger grade) and a datasheet, and confirm the appearance and key specification values
              against what you expect. If a quotation cannot supply those, that is itself informative.
              Building a short internal glossary that maps the names you encounter — full name,
              abbreviation, chemical-class name and any supplier brand — back to CAS 108-74-7 makes
              procurement, goods-in checks and audits far smoother. Vasudev Chemo Pharma supplies MMA
              Triazine 40% with complete identification and documentation, so whatever name a competing
              offer uses, you can verify you are comparing the same product on the same basis.
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
                <Link href="/mma-triazine-40-price-supplier-india" className="text-link">
                  Price &amp; supplier in India
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
              Confirm you have the right product
            </h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Whatever name a quote uses, we will confirm the chemistry by CAS number and active
              content and provide the datasheet and COA — direct from an ISO 9001:2015 manufacturer in
              Gujarat, India.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact?product=mma-triazine-40" variant="primary">
                Confirm Product Identity
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
