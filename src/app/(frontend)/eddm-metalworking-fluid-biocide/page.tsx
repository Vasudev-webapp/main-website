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
const PATH = "/eddm-metalworking-fluid-biocide";
const PRODUCT_URL = `/product/${EDDM_SLUG}`;

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "EDDM Biocide for Metalworking Fluids (MWF) — CAS 3586-55-8 | Vasudev Chemo Pharma",
  description:
    "EDDM (Ethylenedioxy dimethanol) is a slow-release, aluminium-safe biocide for full-synthetic, semi-synthetic and emulsified metalworking fluids. Effective pH 6–11, non-corrosive to steel, no alkanolamines. Dosage, compatibility and supply from an Indian manufacturer.",
  keywords: mergeKeywordClusters([
    "EDDM metalworking fluid biocide",
    "metalworking fluid preservative",
    "MWF biocide",
    "cutting fluid biocide",
    "coolant biocide EDDM",
    "biocide for semi synthetic metalworking fluid",
    "biocide for synthetic coolant",
    "aluminium safe metalworking biocide",
    "formaldehyde donor metalworking fluid",
    "EDDM CAS 3586-55-8 metalworking",
    "tank side additive biocide",
    "metalworking fluid bacteria control",
    "EDDM coolant preservative",
    "metalworking fluid biocide manufacturer India",
    "non corrosive metalworking biocide",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "EDDM Biocide for Metalworking Fluids (MWF) — CAS 3586-55-8",
    description:
      "Slow-release, aluminium-safe biocide for synthetic, semi-synthetic and emulsified metalworking fluids. Effective pH 6–11, non-corrosive to steel.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EDDM Biocide for Metalworking Fluids (MWF)",
    description:
      "Aluminium-safe, non-corrosive slow-release biocide for metalworking fluids. Effective pH 6–11.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "Why is EDDM used as a metalworking-fluid biocide?",
    answer:
      "EDDM (ethylenedioxy dimethanol, CAS 3586-55-8) is a slow-release formaldehyde-donor biocide that controls bacteria and fungi in water-mixed metalworking fluids. It has excellent water compatibility, a neutral pH, is effective across pH 6–11, does not contain alkanolamines, is non-corrosive to steel and compatible with aluminium — making it well suited to full-synthetic, semi-synthetic and emulsified fluids.",
  },
  {
    question: "Which types of metalworking fluid can EDDM protect?",
    answer:
      "EDDM is suitable for full-synthetic, semi-synthetic and soluble-oil (emulsified) metalworking fluids. It can be added to the concentrate or used as a tank-side additive to restore microbial control in the sump. Because it is fully water-miscible, it disperses readily through the working emulsion.",
  },
  {
    question: "What dosage of EDDM is used in metalworking fluids?",
    answer:
      "Typical in-use levels are 0.10% to 0.30% of the diluted working fluid, depending on contamination load, sump size and dilution ratio. For tank-side correction of an infected sump, dose to the target in-use active concentration and monitor with dip-slides. Confirm compatibility in your specific concentrate before scale-up.",
  },
  {
    question: "Is EDDM corrosive to metal or harmful to aluminium?",
    answer:
      "No. EDDM is essentially non-corrosive to steel and is compatible with aluminium at recommended use levels, which is important for mixed-metal machining operations. Its neutral pH and alkanolamine-free chemistry avoid the staining and corrosion issues associated with some other biocide chemistries.",
  },
  {
    question: "Does EDDM control both bacteria and fungi in the sump?",
    answer:
      "EDDM is primarily a bactericide with broad activity, including against gram-negative bacteria that commonly infect metalworking sumps. For persistent fungal or mould problems, it can be paired with a fungistatic partner. Its slow formaldehyde release provides sustained protection between top-ups.",
  },
  {
    question: "What grade of EDDM should I buy for metalworking fluids?",
    answer:
      "The standard 90–92% grade is used for most metalworking-fluid applications. Choose the 95% grade only if you want higher active content per kilogram in a concentrate. See our EDDM grades selection guide for the full comparison.",
  },
];

export default function EddmMetalworkingFluidBiocidePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "EDDM Biocide for Metalworking Fluids", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <Breadcrumbs items={[
          { name: "Home", url: SITE_URL },
          { name: "EDDM Biocide for Metalworking Fluids", url: `${SITE_URL}${PATH}` },
        ]} className="mb-6" />
              <SectionLabel>Application guide</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                EDDM Biocide for Metalworking Fluids (MWF)
              </h1>
              <p className="text-secondary text-lg mt-6">
                (Ethylenedioxy)dimethanol (EDDM, CAS 3586-55-8) is a slow-release, formaldehyde-donor
                biocide developed for water-mixed metalworking fluids. It keeps synthetic,
                semi-synthetic and emulsified fluids free of bacterial and fungal spoilage while
                staying neutral in pH, aluminium-safe and non-corrosive to steel.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: EDDM is dosed at 0.10–0.30% in the working metalworking fluid. It is
                  effective across pH 6–11, contains no alkanolamines, is non-corrosive to steel and
                  compatible with aluminium — suitable for full-synthetic, semi-synthetic and
                  emulsified fluids, in the concentrate or as a tank-side additive.
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
            <h2 className="font-heading text-h3 text-primary mb-8">EDDM in Metalworking Fluids — Key Properties</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="py-3 px-4 font-semibold">Property</th>
                    <th className="py-3 px-4 font-semibold">EDDM behaviour</th>
                  </tr>
                </thead>
                <tbody className="text-secondary">
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Effective pH range</td>
                    <td className="py-3 px-4">pH 6 – 11</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Steel corrosion</td>
                    <td className="py-3 px-4">Non-corrosive at use levels</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Aluminium compatibility</td>
                    <td className="py-3 px-4">Compatible — no adverse effect on aluminium</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Alkanolamine content</td>
                    <td className="py-3 px-4">None</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Water miscibility</td>
                    <td className="py-3 px-4">Complete</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Fluid types</td>
                    <td className="py-3 px-4">Full-synthetic, semi-synthetic, emulsified</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Typical dosage</td>
                    <td className="py-3 px-4">0.10 – 0.30% of working fluid</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">How to Use EDDM in the Sump</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6 mb-12">
              <li>Add to the concentrate for built-in protection, or dose tank-side to correct an infected sump.</li>
              <li>Dose to the target in-use active concentration (0.10–0.30%) and mix thoroughly.</li>
              <li>Monitor microbial load with dip-slides and top up as the fluid is diluted / consumed.</li>
              <li>Maintain fluid at recommended concentration and pH to sustain biocide efficacy.</li>
            </ul>

            <h2 className="font-heading text-h3 text-primary mb-6">Related Reading</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6">
              <li>
                <Link href="/eddm-dosage-guide" className="text-link">
                  EDDM dosage &amp; use-level guide
                </Link>
              </li>
              <li>
                <Link href="/eddm-grades-selection-guide" className="text-link">
                  EDDM grades 90% / 92% / 95% — selection guide
                </Link>
              </li>
              <li>
                <Link href="/how-eddm-works-formaldehyde-donor" className="text-link">
                  How EDDM works — slow-release formaldehyde-donor mechanism
                </Link>
              </li>
              <li>
                <Link href="/industries/metal-working-fluids" className="text-link">
                  Metalworking fluids industry solutions
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
            <h2 className="font-heading text-h3 text-primary mb-4">
              Protect your metalworking fluids with EDDM
            </h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Vasudev Chemo Pharma manufactures EDDM (CAS 3586-55-8) for metalworking-fluid formulators
              and machine shops — with dosage support, batch COA, and global export from our
              ISO 9001:2015 certified facility in Gujarat, India.
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
