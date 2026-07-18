import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import { applyPageMetaOverride } from "@/lib/seo/page-meta-overrides";
import { mergeKeywordClusters } from "@/lib/seo/keyword-clusters";
import { EDDM_SLUG } from "@/lib/seo/eddm-constants";

const SITE_URL = "https://www.vasudevchemopharma.com";
const PATH = "/eddm-cas-3586-55-8-properties";
const PRODUCT_URL = `/product/${EDDM_SLUG}`;

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "EDDM CAS 3586-55-8 — Properties, Specifications & Technical Data | Vasudev Chemo Pharma",
  description:
    "Complete technical data for EDDM / (ethylenedioxy)dimethanol, CAS 3586-55-8: molecular formula C4H10O4, MW 122.12, EINECS 222-720-6, density, pH, aldehyde content, flash point, solubility, InChIKey and SMILES. Specification table for standard and high-purity grades.",
  keywords: mergeKeywordClusters([
    "EDDM CAS 3586-55-8",
    "ethylenedioxy dimethanol properties",
    "ethylenedioxy dimethanol specification",
    "EDDM molecular formula C4H10O4",
    "EDDM molecular weight 122.12",
    "EDDM EINECS 222-720-6",
    "EDDM density",
    "EDDM pH",
    "EDDM flash point",
    "EDDM total aldehyde content",
    "EDDM InChIKey",
    "EDDM SMILES",
    "ethylenedioxy dimethanol technical data",
    "EDDM specification sheet",
    "EDDM solubility water",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "EDDM CAS 3586-55-8 — Properties, Specifications & Technical Data",
    description:
      "Technical data for (ethylenedioxy)dimethanol: formula C4H10O4, MW 122.12, EINECS 222-720-6, density, pH, aldehyde content, flash point, InChIKey, SMILES.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EDDM CAS 3586-55-8 — Properties & Specifications",
    description:
      "Molecular data, physical properties and grade specifications for (ethylenedioxy)dimethanol.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "What is the CAS number and molecular formula of EDDM?",
    answer:
      "EDDM — (ethylenedioxy)dimethanol — has CAS number 3586-55-8 and EINECS number 222-720-6. Its molecular formula is C₄H₁₀O₄ with a molecular weight of 122.12 g/mol.",
  },
  {
    question: "What does EDDM look like and how soluble is it?",
    answer:
      "EDDM is a colourless to pale yellow transparent liquid that is fully miscible with water in any ratio, and soluble in polar organic solvents. Commercial grades have a density of about 1.180–1.200 g/ml at 20°C.",
  },
  {
    question: "What is the pH and aldehyde content of EDDM?",
    answer:
      "A 1% aqueous solution of EDDM has a pH of about 6.0–8.0. Standard commercial grades contain ≥45% total aldehyde (as the slow-release formaldehyde reservoir); high-purity grade is ≥47%.",
  },
  {
    question: "What is the flash point of EDDM?",
    answer:
      "The flash point depends on the form. The formulated / aqueous commercial product typically has a flash point above 100°C. Note that pure (ethylenedioxy)dimethanol is described in reference sources as highly flammable, so always follow the specific product SDS for the grade you handle.",
  },
  {
    question: "What are the InChIKey and SMILES for EDDM?",
    answer:
      "The InChIKey is BXGYYDRIMBPOMN-UHFFFAOYSA-N and the SMILES notation is C(OCO)COCO. The IUPAC-style name is 2-(hydroxymethoxy)ethoxymethanol, and it is also described as 1,2-bis(hydroxymethoxy)ethane.",
  },
  {
    question: "Which grades and packaging are available?",
    answer:
      "EDDM is supplied in 90%, 92% and 95% active grades, in 25 kg HDPE drums, 200 kg MS drums and 1000 kg IBC tanks (≈22 MT per 20-foot FCL). Each batch ships with a certificate of analysis.",
  },
];

export default function EddmPropertiesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "EDDM CAS 3586-55-8 Properties", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionLabel>Technical reference</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                EDDM (CAS 3586-55-8) — Properties &amp; Specifications
              </h1>
              <p className="text-secondary text-lg mt-6">
                Complete technical reference for (ethylenedioxy)dimethanol (EDDM) — chemical identity,
                physical properties, molecular descriptors and grade specifications. EDDM is a
                slow-release formaldehyde-donor biocide and non-triazine H₂S scavenger, fully miscible
                with water.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  EDDM — (ethylenedioxy)dimethanol, CAS 3586-55-8, EINECS 222-720-6 — molecular
                  formula C₄H₁₀O₄, molecular weight 122.12 g/mol. Colourless to pale yellow liquid,
                  fully water-miscible, density ≈1.18–1.20 g/ml, 1% aqueous pH 6.0–8.0, total aldehyde
                  ≥45%.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button href="/contact" variant="primary">
                  Request COA / SDS
                </Button>
                <Button href={PRODUCT_URL} variant="secondary">
                  View EDDM Product Page
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Identity */}
        <section className="py-16 bg-surface">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h3 text-primary mb-8">Chemical Identity</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <tbody className="text-secondary">
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium w-1/3">Chemical name</td>
                    <td className="py-3 px-4">(Ethylenedioxy)dimethanol</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Abbreviation</td>
                    <td className="py-3 px-4">EDDM</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">CAS number</td>
                    <td className="py-3 px-4">3586-55-8</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">EINECS / EC number</td>
                    <td className="py-3 px-4">222-720-6</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Molecular formula</td>
                    <td className="py-3 px-4">C₄H₁₀O₄</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Molecular weight</td>
                    <td className="py-3 px-4">122.12 g/mol</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">IUPAC-style name</td>
                    <td className="py-3 px-4">2-(hydroxymethoxy)ethoxymethanol</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">InChIKey</td>
                    <td className="py-3 px-4">BXGYYDRIMBPOMN-UHFFFAOYSA-N</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">SMILES</td>
                    <td className="py-3 px-4">C(OCO)COCO</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Physical properties */}
        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h3 text-primary mb-8">Physical Properties</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <tbody className="text-secondary">
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium w-1/3">Appearance</td>
                    <td className="py-3 px-4">Colourless to pale yellow transparent liquid</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Density (20°C)</td>
                    <td className="py-3 px-4">1.180 – 1.200 g/ml</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">pH (1% aqueous)</td>
                    <td className="py-3 px-4">6.0 – 8.0</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Refractive index (20°C)</td>
                    <td className="py-3 px-4">1.430 – 1.443</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Total aldehyde content</td>
                    <td className="py-3 px-4">≥45% (standard) · ≥47% (high purity)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Water solubility</td>
                    <td className="py-3 px-4">Fully miscible in any ratio</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Flash point (formulated product)</td>
                    <td className="py-3 px-4">&gt;100°C — follow grade-specific SDS</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Grade specs */}
        <section className="py-16 bg-surface">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h3 text-primary mb-8">Grade Specifications</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="py-3 px-4 font-semibold">Parameter</th>
                    <th className="py-3 px-4 font-semibold">Standard (90–92%)</th>
                    <th className="py-3 px-4 font-semibold">High purity (95%)</th>
                  </tr>
                </thead>
                <tbody className="text-secondary">
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Active content</td>
                    <td className="py-3 px-4">90 – 92%</td>
                    <td className="py-3 px-4">≥95%</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Total aldehyde</td>
                    <td className="py-3 px-4">≥45%</td>
                    <td className="py-3 px-4">≥47%</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">pH (1% aq.)</td>
                    <td className="py-3 px-4">6.0 – 8.0</td>
                    <td className="py-3 px-4">7.0 – 8.0</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Density (20°C)</td>
                    <td className="py-3 px-4">1.180 – 1.200</td>
                    <td className="py-3 px-4">1.190 – 1.200</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-secondary text-sm mt-4">
              Full chemical-name and synonym listing:{" "}
              <Link href="/eddm-synonyms-trade-names" className="text-link">
                EDDM synonyms &amp; chemical names
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">Related Reading</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6">
              <li>
                <Link href="/how-eddm-works-formaldehyde-donor" className="text-link">
                  How EDDM works — slow-release formaldehyde-donor mechanism
                </Link>
              </li>
              <li>
                <Link href="/eddm-grades-selection-guide" className="text-link">
                  EDDM grades 90% / 92% / 95% — selection guide
                </Link>
              </li>
              <li>
                <Link href="/eddm-dosage-guide" className="text-link">
                  EDDM dosage &amp; use-level guide
                </Link>
              </li>
              <li>
                <Link href={PRODUCT_URL} className="text-link">
                  EDDM (Ethylenedioxy)dimethanol — main product page
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16 bg-surface">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <details key={idx} className="border border-border rounded p-4">
                  <summary className="font-semibold cursor-pointer">{faq.question}</summary>
                  <p className="text-secondary mt-3">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 text-center">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h3 text-primary mb-4">Need the COA, TDS or SDS?</h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Vasudev Chemo Pharma manufactures EDDM (CAS 3586-55-8) in Gujarat, India, with
              batch-specific certificates of analysis, technical and safety data sheets, and global
              export in FOB, CIF and DDP terms.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact" variant="primary">
                Request COA / SDS
              </Button>
              <Link href={PRODUCT_URL} className="text-link">
                View EDDM Product Page →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
