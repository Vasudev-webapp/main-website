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
const PATH = "/eddm-vs-isothiazolinone-biocides";
const PRODUCT_URL = `/product/${EDDM_SLUG}`;

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "EDDM vs Isothiazolinone Biocides (CIT/MIT/BIT) — Which to Use | Vasudev Chemo Pharma",
  description:
    "Compare EDDM (Ethylenedioxy dimethanol, CAS 3586-55-8), a slow-release formaldehyde-donor biocide, with isothiazolinone-class biocides (CIT, MIT, BIT). Mechanism, spectrum, speed, headspace activity, and when to use each — or combine them. Brand-free technical comparison.",
  keywords: mergeKeywordClusters([
    "EDDM vs isothiazolinone",
    "formaldehyde donor vs isothiazolinone",
    "EDDM vs BIT",
    "EDDM vs CIT MIT",
    "isothiazolinone biocide comparison",
    "EDDM vs MIT",
    "formaldehyde releaser vs isothiazolinone preservative",
    "in-can preservative comparison",
    "biocide selection formaldehyde donor",
    "EDDM combination biocide",
    "CIT MIT BIT biocide",
    "EDDM CAS 3586-55-8 comparison",
    "which biocide for water based products",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "EDDM vs Isothiazolinone Biocides (CIT/MIT/BIT) — Which to Use",
    description:
      "Slow-release formaldehyde-donor (EDDM) vs isothiazolinone-class biocides — mechanism, spectrum, speed, headspace activity, and combination strategies.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EDDM vs Isothiazolinone Biocides",
    description:
      "When to use a formaldehyde-donor (EDDM) versus isothiazolinone-class biocides — or combine them.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "What is the core difference between EDDM and isothiazolinone biocides?",
    answer:
      "EDDM (ethylenedioxy dimethanol, CAS 3586-55-8) is a slow-release formaldehyde-donor: it liberates formaldehyde gradually for sustained, broad-spectrum control with vapour-phase (headspace) activity. Isothiazolinone-class biocides (CIT, MIT, BIT) are non-formaldehyde active molecules that act directly and are typically fast-acting, with the specific spectrum and persistence depending on which isothiazolinone is used.",
  },
  {
    question: "Which gives faster kill — EDDM or isothiazolinones?",
    answer:
      "Chloromethyl/methyl isothiazolinone (CIT/MIT) chemistries are known for rapid initial knockdown, while EDDM provides sustained control through gradual formaldehyde release. In practice, a fast-acting isothiazolinone and a slow-release donor like EDDM are complementary — one delivers speed, the other delivers longevity and headspace protection.",
  },
  {
    question: "Does EDDM protect the headspace better than isothiazolinones?",
    answer:
      "Generally yes. Because EDDM releases formaldehyde, which has vapour pressure, it suppresses microbial growth in the container headspace and at the lid/wall interface. Most isothiazolinone actives are non-volatile and act mainly in the liquid phase, so headspace/surface mould control is a relative strength of formaldehyde-donor chemistry.",
  },
  {
    question: "Can EDDM be combined with isothiazolinones?",
    answer:
      "Yes. Combining a slow-release formaldehyde donor (EDDM) with an isothiazolinone active is a common strategy: the isothiazolinone provides rapid initial control and gram-negative activity, while EDDM extends protection over storage life and adds headspace defence. Always validate compatibility and efficacy in the finished product.",
  },
  {
    question: "When should I choose EDDM alone?",
    answer:
      "EDDM alone is a strong choice for water-based in-can preservation and metalworking fluids where you need sustained, broad-spectrum control, headspace protection, neutral pH, aluminium compatibility and low use levels (0.10–0.30%). Where regulations restrict formaldehyde release, consider an isothiazolinone or a low-formaldehyde combination.",
  },
  {
    question: "Which is better for metalworking fluids?",
    answer:
      "EDDM is well suited to metalworking fluids because it is neutral in pH, alkanolamine-free, non-corrosive to steel, aluminium-compatible and effective across pH 6–11. Isothiazolinones are also used in this sector; the choice depends on regulatory constraints, sump conditions and whether sustained release or fast knockdown is the priority.",
  },
];

export default function EddmVsIsothiazolinonePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "EDDM vs Isothiazolinone Biocides", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionLabel>Technical comparison</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                EDDM vs Isothiazolinone Biocides — Which to Use?
              </h1>
              <p className="text-secondary text-lg mt-6">
                A brand-free comparison of two biocide classes for water-based products:
                (ethylenedioxy)dimethanol (EDDM, CAS 3586-55-8), a slow-release formaldehyde-donor,
                versus the isothiazolinone actives (CIT, MIT, BIT). They differ in mechanism, speed,
                spectrum and headspace activity — and are often used together.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: EDDM gives sustained, broad-spectrum control plus headspace protection
                  through slow formaldehyde release; isothiazolinones (CIT/MIT/BIT) act directly and
                  fast in the liquid phase. Use EDDM for longevity and headspace defence, an
                  isothiazolinone for rapid knockdown — or combine them for both.
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
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h3 text-primary mb-8">Class-by-Class Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="py-3 px-4 font-semibold">Attribute</th>
                    <th className="py-3 px-4 font-semibold">EDDM (formaldehyde donor)</th>
                    <th className="py-3 px-4 font-semibold">Isothiazolinones (CIT/MIT/BIT)</th>
                  </tr>
                </thead>
                <tbody className="text-secondary">
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Mechanism</td>
                    <td className="py-3 px-4">Slow in-situ formaldehyde release</td>
                    <td className="py-3 px-4">Direct-acting active molecule</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Onset</td>
                    <td className="py-3 px-4">Sustained over time</td>
                    <td className="py-3 px-4">Fast initial knockdown (CIT/MIT)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Headspace / vapour activity</td>
                    <td className="py-3 px-4">Yes — protects the air gap</td>
                    <td className="py-3 px-4">Limited (mostly liquid phase)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Spectrum</td>
                    <td className="py-3 px-4">Broad: bacteria, yeast, fungi</td>
                    <td className="py-3 px-4">Broad; balance varies by active</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Persistence</td>
                    <td className="py-3 px-4">Long — reservoir releases over storage life</td>
                    <td className="py-3 px-4">Varies; some deplete faster</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Typical use level</td>
                    <td className="py-3 px-4">0.10 – 0.30%</td>
                    <td className="py-3 px-4">ppm-level, active-dependent</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">Choosing — or Combining</h2>
            <ul className="text-secondary space-y-3 list-disc pl-6 mb-12">
              <li><strong>Need sustained protection + headspace defence:</strong> EDDM.</li>
              <li><strong>Need rapid initial knockdown:</strong> a fast isothiazolinone active.</li>
              <li><strong>Need both speed and longevity:</strong> combine a fast isothiazolinone with slow-release EDDM.</li>
              <li><strong>Formaldehyde-restricted product:</strong> favour an isothiazolinone or low-formaldehyde combination.</li>
            </ul>

            <h2 className="font-heading text-h3 text-primary mb-6">Related Reading</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6">
              <li>
                <Link href="/how-eddm-works-formaldehyde-donor" className="text-link">
                  How EDDM works — formaldehyde-donor mechanism
                </Link>
              </li>
              <li>
                <Link href="/eddm-in-can-preservative-coatings" className="text-link">
                  EDDM in-can preservative for coatings &amp; adhesives
                </Link>
              </li>
              <li>
                <Link href="/eddm-metalworking-fluid-biocide" className="text-link">
                  EDDM biocide for metalworking fluids
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
            <h2 className="font-heading text-h3 text-primary mb-4">Selecting a biocide for your product?</h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Vasudev Chemo Pharma supplies EDDM (CAS 3586-55-8) and can advise on stand-alone or
              combination preservation strategies — with dosage guidance, batch COA and global export
              from Gujarat, India.
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
