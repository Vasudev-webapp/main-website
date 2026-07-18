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
const PATH = "/eddm-in-can-preservative-coatings";
const PRODUCT_URL = `/product/${EDDM_SLUG}`;

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "EDDM In-Can Preservative for Paints, Coatings & Adhesives (CAS 3586-55-8) | Vasudev Chemo Pharma",
  description:
    "EDDM (Ethylenedioxy dimethanol) is a slow-release formaldehyde-donor in-can preservative for water-based paints, coatings, polymer dispersions, adhesives, slurries and detergents. Broad-spectrum, headspace-active protection at 0.10–0.30%. Indian manufacturer, global supply.",
  keywords: mergeKeywordClusters([
    "EDDM in-can preservative",
    "in-can preservative for paints",
    "in-can preservative for coatings",
    "in-can biocide water based",
    "EDDM coatings preservative",
    "EDDM adhesive preservative",
    "polymer dispersion preservative",
    "pigment slurry preservative",
    "formaldehyde donor in-can preservative",
    "headspace preservative paint",
    "EDDM for latex paint",
    "water based paint biocide",
    "EDDM CAS 3586-55-8 preservative",
    "in-can preservative manufacturer India",
    "EDDM detergent preservative",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "EDDM In-Can Preservative for Paints, Coatings & Adhesives",
    description:
      "Slow-release formaldehyde-donor in-can preservative for water-based paints, coatings, dispersions, adhesives and slurries. Broad-spectrum, headspace-active.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EDDM In-Can Preservative for Coatings & Adhesives",
    description:
      "Broad-spectrum, headspace-active in-can preservation for water-based paints, coatings and adhesives.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "What is an in-can preservative and why is EDDM used as one?",
    answer:
      "An in-can preservative protects a water-based product from bacterial, yeast and fungal spoilage during storage in a sealed container. EDDM (ethylenedioxy dimethanol, CAS 3586-55-8) is used because it is a slow-release formaldehyde donor that provides sustained broad-spectrum activity plus vapour-phase (headspace) protection, and is fully miscible with water for easy incorporation.",
  },
  {
    question: "Which products can EDDM preserve?",
    answer:
      "EDDM preserves water-based paints and decorative coatings, pigment slurries and filler suspensions, polymer dispersions and emulsions, adhesives, binders and thickeners, concrete admixtures, detergents, oil emulsions and polishes. It protects against loss of viscosity, gassing, discolouration, bad odours, surface fungal growth, phase separation and loss of adhesion.",
  },
  {
    question: "What dosage of EDDM is used for in-can preservation?",
    answer:
      "Typical in-use levels are 0.10% to 0.30% by weight of the finished product, adjusted to the contamination risk, storage time and pH of the formulation. Because EDDM is a slow-release formaldehyde donor, free-formaldehyde levels in the finished product vary with formulation and should be confirmed by testing where required.",
  },
  {
    question: "Does EDDM protect the headspace as well as the liquid?",
    answer:
      "Yes. EDDM has good vapour-phase efficacy, so it suppresses fungal and bacterial growth in the air gap and on the lid/wall interface of a sealed container — the region where surface mould typically starts. This headspace activity is a key advantage for coatings and adhesives prone to surface contamination.",
  },
  {
    question: "Is EDDM compatible across the pH range of coatings?",
    answer:
      "EDDM works well across a broad neutral-to-alkaline pH window and is compatible with most water-based coating, dispersion and adhesive systems. It is best added during the let-down stage with good agitation. For strongly acidic systems, formaldehyde release accelerates, so evaluate stability in the finished product.",
  },
  {
    question: "Can EDDM be combined with other preservatives?",
    answer:
      "Yes. EDDM is frequently used as the primary in-can preservative and can be paired with a dry-film or fungistatic partner where extended mould resistance is needed. See our comparison of EDDM with isothiazolinone-class biocides for guidance on combination strategies.",
  },
];

export default function EddmInCanPreservativePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "EDDM In-Can Preservative for Coatings", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionLabel>Application guide</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                EDDM In-Can Preservative for Paints, Coatings &amp; Adhesives
              </h1>
              <p className="text-secondary text-lg mt-6">
                (Ethylenedioxy)dimethanol (EDDM, CAS 3586-55-8) is a slow-release, formaldehyde-donor
                in-can preservative for water-based products. It delivers broad-spectrum protection
                against bacteria, yeast and fungi — plus vapour-phase headspace activity — keeping
                paints, coatings, dispersions and adhesives stable through storage and transport.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: EDDM is dosed at 0.10–0.30% as an in-can preservative for water-based
                  paints, pigment slurries, polymer dispersions, adhesives, concrete admixtures and
                  detergents. Its slow formaldehyde release gives sustained microbial control and
                  headspace (gas-phase) protection in sealed containers.
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
            <h2 className="font-heading text-h3 text-primary mb-6">
              What Microbial Spoilage Costs You
            </h2>
            <p className="text-secondary mb-4">
              Without effective in-can preservation, microbial contamination of water-based products
              causes:
            </p>
            <ul className="text-secondary space-y-2 list-disc pl-6 mb-12">
              <li>Loss of viscosity and product splitting / phase separation</li>
              <li>Gassing, swollen containers and bad odours</li>
              <li>Discolouration and surface fungal growth</li>
              <li>Loss of adhesion in adhesives and binders</li>
              <li>Production clean-down, downtime and lost profit</li>
            </ul>

            <h2 className="font-heading text-h3 text-primary mb-6">Where EDDM Is Used</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6 mb-12">
              <li>Water-based decorative paints and coatings</li>
              <li>Pigment slurries and filler suspensions</li>
              <li>Polymer dispersions and emulsions</li>
              <li>Water-based adhesives, binders and thickeners</li>
              <li>Concrete admixtures</li>
              <li>Detergents, oil emulsions and polishes</li>
            </ul>

            <h2 className="font-heading text-h3 text-primary mb-6">Why Formulators Choose EDDM</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6">
              <li>Slow-release formaldehyde donor — sustained protection, not a single burst</li>
              <li>Vapour-phase / headspace efficacy against surface mould</li>
              <li>Fully water-miscible — easy let-down incorporation</li>
              <li>Broad spectrum: bacteria (incl. gram-negative), yeast and fungi</li>
              <li>Low use levels (0.10–0.30%) and cost-efficient dosing</li>
            </ul>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">Related Reading</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6">
              <li>
                <Link href="/eddm-dosage-guide" className="text-link">
                  EDDM dosage &amp; use-level guide (0.10–0.30%)
                </Link>
              </li>
              <li>
                <Link href="/how-eddm-works-formaldehyde-donor" className="text-link">
                  How EDDM works — slow-release formaldehyde-donor mechanism
                </Link>
              </li>
              <li>
                <Link href="/eddm-vs-isothiazolinone-biocides" className="text-link">
                  EDDM vs isothiazolinone biocides — when to use which
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
              Need an in-can preservative for your water-based line?
            </h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Vasudev Chemo Pharma supplies EDDM (CAS 3586-55-8) for paint, coating, adhesive and
              dispersion manufacturers worldwide — with application-specific dosage guidance,
              batch COA, and export in FOB, CIF and DDP terms from Gujarat, India.
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
