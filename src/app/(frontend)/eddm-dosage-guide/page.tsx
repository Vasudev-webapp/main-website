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
const PATH = "/eddm-dosage-guide";
const PRODUCT_URL = `/product/${EDDM_SLUG}`;

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "EDDM Dosage & Use-Level Guide by Application (CAS 3586-55-8) | Vasudev Chemo Pharma",
  description:
    "Recommended EDDM (Ethylenedioxy dimethanol) dosage and use levels by application: in-can preservation of paints, coatings and adhesives (0.10–0.30%), metalworking fluids, detergents and H2S scavenging. How to set and validate the right dose. Indian manufacturer.",
  keywords: mergeKeywordClusters([
    "EDDM dosage",
    "EDDM use level",
    "EDDM dose rate",
    "EDDM dosing guide",
    "in-can preservative dosage",
    "EDDM 0.1 to 0.3 percent",
    "how much EDDM to add",
    "EDDM dosage metalworking fluid",
    "EDDM dosage paint coating",
    "EDDM dosage adhesive",
    "EDDM H2S scavenger dosing",
    "formaldehyde donor dose rate",
    "EDDM CAS 3586-55-8 dosage",
    "EDDM application concentration",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "EDDM Dosage & Use-Level Guide by Application",
    description:
      "Recommended EDDM use levels by application — in-can preservation (0.10–0.30%), metalworking fluids, detergents and H2S scavenging.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EDDM Dosage & Use-Level Guide",
    description:
      "How much EDDM to use by application — preservation, metalworking fluids, detergents and H2S scavenging.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "What is the typical EDDM dosage for in-can preservation?",
    answer:
      "For in-can preservation of water-based paints, coatings, dispersions, adhesives and detergents, EDDM is typically used at 0.10% to 0.30% active in the finished product. The exact level depends on contamination risk, storage time, temperature and formulation pH. Higher-risk or longer-storage products sit toward the upper end.",
  },
  {
    question: "How much EDDM should I add to metalworking fluid?",
    answer:
      "Dose EDDM to reach 0.10–0.30% active in the diluted working fluid, adjusted for contamination load, sump size and dilution ratio. It can be built into the concentrate or added tank-side to correct an infected sump. Monitor with dip-slides and top up as fluid is consumed or diluted.",
  },
  {
    question: "How do I set the right EDDM dose?",
    answer:
      "Work back from the target in-use active concentration. Dose = (target active % × batch weight) ÷ grade active fraction. For example, to reach 0.20% active in a 1000 kg batch using EDDM 90%: (0.0020 × 1000) ÷ 0.90 ≈ 2.22 kg of product. Always validate microbial efficacy in your finished product before commercial use.",
  },
  {
    question: "Does the EDDM grade change the dose?",
    answer:
      "Only the amount of product, not the target active level. A higher grade (e.g. 95%) contains more active per kilogram, so you add slightly less product to hit the same in-use concentration. See the EDDM grades selection guide for the comparison.",
  },
  {
    question: "Can I overdose EDDM?",
    answer:
      "Use the minimum level that achieves reliable microbial control — overdosing wastes product and, for formaldehyde-donor chemistry, raises free-formaldehyde levels in the finished product. Where free-formaldehyde limits apply, confirm the level in the finished product and keep to the lowest effective dose.",
  },
  {
    question: "What dosage is used for H2S scavenging?",
    answer:
      "H2S scavenger dose is set by the H2S load to be removed and the contact time available, not a fixed percentage — it is determined by field conditions and jar/dynamic testing. Higher-active grades (92–95%) deliver more scavenging capacity per litre injected. Contact us for an application-specific starting dose.",
  },
];

export default function EddmDosageGuidePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "EDDM Dosage & Use-Level Guide", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionLabel>Application guide</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                EDDM Dosage &amp; Use-Level Guide by Application
              </h1>
              <p className="text-secondary text-lg mt-6">
                How much (ethylenedioxy)dimethanol (EDDM, CAS 3586-55-8) to use — by application, with
                the logic to set and validate your dose. Preservation duties use a percentage of the
                finished product; H₂S scavenging is set by the sulfide load to be removed.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: for in-can preservation and metalworking fluids, dose EDDM to
                  0.10–0.30% active in the finished product. Set the amount of product from the target
                  active level and your grade&apos;s active fraction, then validate microbial efficacy
                  before scale-up. For H₂S scavenging, dose to the sulfide load, not a fixed percentage.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button href="/contact" variant="primary">
                  Get a dosage recommendation
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
            <h2 className="font-heading text-h3 text-primary mb-8">Recommended Use Levels</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="py-3 px-4 font-semibold">Application</th>
                    <th className="py-3 px-4 font-semibold">Typical in-use level (active)</th>
                    <th className="py-3 px-4 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-secondary">
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Paints &amp; coatings (in-can)</td>
                    <td className="py-3 px-4">0.10 – 0.30%</td>
                    <td className="py-3 px-4">Add at let-down; headspace protection included</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Polymer dispersions / adhesives</td>
                    <td className="py-3 px-4">0.10 – 0.30%</td>
                    <td className="py-3 px-4">Higher end for long storage / high risk</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Metalworking fluids (working fluid)</td>
                    <td className="py-3 px-4">0.10 – 0.30%</td>
                    <td className="py-3 px-4">Concentrate or tank-side; monitor with dip-slides</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Detergents / polishes / slurries</td>
                    <td className="py-3 px-4">0.10 – 0.30%</td>
                    <td className="py-3 px-4">Adjust to contamination risk and pH</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">H₂S scavenging (oil &amp; gas)</td>
                    <td className="py-3 px-4">Load-dependent</td>
                    <td className="py-3 px-4">Set by H₂S concentration &amp; contact time (testing)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-secondary text-sm mt-4">
              Use levels are typical starting points. Always validate microbial efficacy (or scavenging
              performance) in your own finished product / system before commercial use.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">Dose Calculation</h2>
            <p className="text-secondary mb-4">
              To hit a target in-use active level, work back from the grade active fraction:
            </p>
            <pre className="bg-surface p-4 rounded text-sm mb-6 overflow-x-auto">
{`Product to add (kg) = (target active % × batch weight) ÷ grade active fraction

Example — 0.20% active in a 1000 kg batch using EDDM 90%:
= (0.0020 × 1000) ÷ 0.90
≈ 2.22 kg EDDM 90% product`}
            </pre>

            <h2 className="font-heading text-h3 text-primary mb-6">Related Reading</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6">
              <li>
                <Link href="/eddm-grades-selection-guide" className="text-link">
                  EDDM grades 90% / 92% / 95% — selection guide
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
            <h2 className="font-heading text-h3 text-primary mb-4">Want a dose tailored to your formulation?</h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Tell us your product type, pH, storage conditions and contamination challenge, and
              Vasudev Chemo Pharma will recommend an EDDM (CAS 3586-55-8) starting dose and grade —
              backed by batch COA and global supply from Gujarat, India.
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
