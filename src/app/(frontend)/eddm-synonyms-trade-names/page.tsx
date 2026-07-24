import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import FAQSchema from "@/components/seo/FAQSchema";
import { applyPageMetaOverride } from "@/lib/seo/page-meta-overrides";
import { mergeKeywordClusters } from "@/lib/seo/keyword-clusters";
import { EDDM_SLUG } from "@/lib/seo/eddm-constants";

const SITE_URL = "https://www.vasudevchemopharma.com";
const PATH = "/eddm-synonyms-trade-names";
const PRODUCT_URL = `/product/${EDDM_SLUG}`;

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "EDDM Synonyms & Chemical Names — (Ethylenedioxy)dimethanol CAS 3586-55-8 | Vasudev Chemo Pharma",
  description:
    "All chemical names, synonyms and regulatory identifiers for EDDM / (ethylenedioxy)dimethanol, CAS 3586-55-8: IUPAC names, EINECS 222-720-6, molecular formula C4H10O4, and the EU biocidal designation (EGForm). A reference map for buyers matching specifications.",
  keywords: mergeKeywordClusters([
    "EDDM synonyms",
    "ethylenedioxy dimethanol other names",
    "EDDM chemical names",
    "1,6-dihydroxy-2,5-dioxahexane",
    "1,2-bis(hydroxymethoxy)ethane",
    "ethylene glycol bis(hydroxymethyl ether)",
    "dimethylol glycol",
    "ethylene glycol bis(semiformal)",
    "2-(hydroxymethoxy)ethoxymethanol",
    "EDDM EINECS 222-720-6",
    "EDDM EGForm",
    "ethylenedioxy dimethanol IUPAC name",
    "EDDM CAS 3586-55-8 synonyms",
    "ethylene glycol paraformaldehyde reaction product",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "EDDM Synonyms & Chemical Names — (Ethylenedioxy)dimethanol CAS 3586-55-8",
    description:
      "Chemical names, synonyms and regulatory identifiers for EDDM / (ethylenedioxy)dimethanol — IUPAC names, EINECS, formula, and the EU biocidal designation.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EDDM Synonyms & Chemical Names (CAS 3586-55-8)",
    description:
      "A reference map of chemical names, synonyms and regulatory identifiers for (ethylenedioxy)dimethanol.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const synonyms = [
  "(Ethylenedioxy)dimethanol",
  "EDDM (abbreviation)",
  "1,6-Dihydroxy-2,5-dioxahexane",
  "1,6-Dihydroxy-2,5-dioxyhexane",
  "1,2-Bis(hydroxymethoxy)ethane",
  "1,2-Bis[hydroxymethoxy]ethane",
  "2-(Hydroxymethoxy)ethoxymethanol",
  "2-Methyloloxyethoxymethanol",
  "Ethylene glycol bis(hydroxymethyl ether)",
  "Ethylene glycol dimethanol ether",
  "Ethylene glycol bis(semiformal)",
  "Ethylene glycol hemiformal",
  "Dimethylol glycol",
  "[Ethane-1,2-diylbis(oxy)]dimethanol",
  "Methanol, 1,1'-[1,2-ethanediylbis(oxy)]bis-",
];

const identifiers = [
  ["CAS number", "3586-55-8"],
  ["EINECS / EC number", "222-720-6"],
  ["Molecular formula", "C₄H₁₀O₄"],
  ["Molecular weight", "122.12 g/mol"],
  ["IUPAC-style name", "2-(hydroxymethoxy)ethoxymethanol"],
  ["InChIKey", "BXGYYDRIMBPOMN-UHFFFAOYSA-N"],
  ["SMILES", "C(OCO)COCO"],
  [
    "EU biocidal designation",
    "(Ethylenedioxy)dimethanol — reaction products of ethylene glycol with paraformaldehyde (EGForm)",
  ],
];

const faqs = [
  {
    question: "What are the other names for EDDM?",
    answer:
      "EDDM is the common abbreviation for (ethylenedioxy)dimethanol, CAS 3586-55-8. Chemical synonyms include 1,6-dihydroxy-2,5-dioxahexane, 1,2-bis(hydroxymethoxy)ethane, 2-(hydroxymethoxy)ethoxymethanol, ethylene glycol bis(hydroxymethyl ether), ethylene glycol bis(semiformal) and dimethylol glycol. All refer to the same substance.",
  },
  {
    question: "What is the EINECS / EC number for EDDM?",
    answer:
      "EDDM has EINECS / EC number 222-720-6 and CAS number 3586-55-8, with molecular formula C₄H₁₀O₄ and molecular weight 122.12 g/mol.",
  },
  {
    question: "What is 'EGForm' in relation to EDDM?",
    answer:
      "In the EU biocidal-products framework, EDDM is described as '(ethylenedioxy)dimethanol — reaction products of ethylene glycol with paraformaldehyde', abbreviated EGForm. It denotes the same active substance and is the designation used in regulatory listings for the in-situ formaldehyde-releasing chemistry.",
  },
  {
    question: "Is EDDM the same as ethylene glycol hemiformal?",
    answer:
      "Yes — 'ethylene glycol bis(semiformal)' and related hemiformal descriptors refer to the reaction product of ethylene glycol with formaldehyde/paraformaldehyde that is EDDM (CAS 3586-55-8). These are chemical descriptors of the same molecule.",
  },
  {
    question: "Why do buyers see so many names for the same product?",
    answer:
      "Chemical suppliers, regulatory registers and technical data sheets each use different naming conventions — IUPAC systematic names, common names, abbreviations and regional designations. Matching them to a single CAS number (3586-55-8) confirms you are specifying the same substance regardless of the name used.",
  },
];

export default function EddmSynonymsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "EDDM Synonyms & Chemical Names", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <Breadcrumbs items={[
          { name: "Home", url: SITE_URL },
          { name: "EDDM Synonyms & Chemical Names", url: `${SITE_URL}${PATH}` },
        ]} className="mb-6" />
              <SectionLabel>Naming reference</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                EDDM Synonyms &amp; Chemical Names
              </h1>
              <p className="text-secondary text-lg mt-6">
                (Ethylenedioxy)dimethanol (EDDM, CAS 3586-55-8) appears under many chemical names,
                systematic descriptors and regulatory identifiers. This brand-free reference maps them
                all to one substance so you can confirm specifications regardless of the naming
                convention on a data sheet or purchase order.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: EDDM = (ethylenedioxy)dimethanol, CAS 3586-55-8, EINECS 222-720-6,
                  formula C₄H₁₀O₄. Common chemical synonyms include 1,6-dihydroxy-2,5-dioxahexane,
                  1,2-bis(hydroxymethoxy)ethane, ethylene glycol bis(hydroxymethyl ether) and
                  dimethylol glycol; the EU biocidal designation is EGForm.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button href="/contact" variant="primary">
                  Request a Quote
                </Button>
                <Button href={PRODUCT_URL} variant="secondary">
                  View EDDM Product Page
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">Chemical Synonyms</h2>
            <ul className="text-secondary grid sm:grid-cols-2 gap-x-8 gap-y-2 list-disc pl-6">
              {synonyms.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h3 text-primary mb-8">Regulatory &amp; Structural Identifiers</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <tbody className="text-secondary">
                  {identifiers.map(([k, v]) => (
                    <tr key={k} className="border-b border-border">
                      <td className="py-3 px-4 font-medium w-1/3">{k}</td>
                      <td className="py-3 px-4">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">Related Reading</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6">
              <li>
                <Link href="/eddm-cas-3586-55-8-properties" className="text-link">
                  EDDM CAS 3586-55-8 — properties &amp; specifications
                </Link>
              </li>
              <li>
                <Link href="/how-eddm-works-formaldehyde-donor" className="text-link">
                  How EDDM works — formaldehyde-donor mechanism
                </Link>
              </li>
              <li>
                <Link href="/eddm-grades-selection-guide" className="text-link">
                  EDDM grades 90% / 92% / 95% — selection guide
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

        <section className="py-16">
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

        <section className="py-16 bg-surface text-center">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h3 text-primary mb-4">Matching a specification to EDDM?</h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Whatever name your specification uses, Vasudev Chemo Pharma supplies the same substance —
              EDDM (CAS 3586-55-8) — in 90%, 92% and 95% grades with batch COA and global export from
              Gujarat, India.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact" variant="primary">
                Request a Quote
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
