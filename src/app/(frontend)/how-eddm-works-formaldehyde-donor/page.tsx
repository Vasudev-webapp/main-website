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
const PATH = "/how-eddm-works-formaldehyde-donor";
const PRODUCT_URL = `/product/${EDDM_SLUG}`;

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "How EDDM Works — Slow-Release Formaldehyde-Donor Mechanism (CAS 3586-55-8) | Vasudev Chemo Pharma",
  description:
    "How EDDM (Ethylenedioxy dimethanol) works: a slow-release formaldehyde-donor biocide that provides sustained antimicrobial action and headspace protection, and scavenges H2S at ambient temperature. Mechanism, acid sensitivity, flammability, storage and handling explained.",
  keywords: mergeKeywordClusters([
    "how EDDM works",
    "EDDM mechanism of action",
    "formaldehyde donor biocide",
    "slow release formaldehyde",
    "EDDM formaldehyde release",
    "EDDM headspace protection",
    "how formaldehyde donor biocides work",
    "EDDM H2S reaction mechanism",
    "EDDM acid sensitivity",
    "EDDM flammability",
    "EDDM storage handling",
    "EDDM CAS 3586-55-8 mechanism",
    "formaldehyde donor preservative explained",
    "EDDM antimicrobial mechanism",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "How EDDM Works — Slow-Release Formaldehyde-Donor Mechanism",
    description:
      "A slow-release formaldehyde-donor biocide with headspace protection that also scavenges H2S at ambient temperature. Mechanism, safety and handling explained.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How EDDM Works — Formaldehyde-Donor Mechanism",
    description:
      "The slow-release formaldehyde-donor chemistry behind EDDM's biocidal and H2S-scavenging action.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "How does EDDM work as a biocide?",
    answer:
      "EDDM (ethylenedioxy dimethanol, CAS 3586-55-8) is a slow-release formaldehyde donor. In a water-based system it gradually liberates small amounts of formaldehyde, maintaining an antimicrobial concentration that inhibits bacteria, yeast and fungi over time — without the hazards of handling free formaldehyde directly. The controlled release gives sustained rather than one-shot protection.",
  },
  {
    question: "What is a formaldehyde-donor biocide?",
    answer:
      "A formaldehyde-donor (or formaldehyde-releaser) biocide is a compound that slowly releases formaldehyde in situ. The released formaldehyde is the active biocidal species. This approach delivers long-lasting, broad-spectrum microbial control at low use levels and is widely used for in-can preservation of water-based products.",
  },
  {
    question: "Why does EDDM provide headspace (vapour-phase) protection?",
    answer:
      "Because EDDM releases formaldehyde, which has appreciable vapour pressure, it protects not only the liquid but also the air gap and container walls above the liquid — the headspace where surface mould typically starts. This vapour-phase efficacy is a key benefit for sealed containers of paint, coatings and adhesives.",
  },
  {
    question: "How does EDDM scavenge hydrogen sulfide?",
    answer:
      "As a non-triazine H2S scavenger, EDDM reacts selectively with hydrogen sulfide at ambient temperature in an exothermic reaction, converting H2S into non-hazardous, non-precipitating products. Unlike triazine scavengers it does not form salt precipitates, does not significantly shift pH, and does not poison downstream catalysts.",
  },
  {
    question: "Is EDDM sensitive to acids?",
    answer:
      "Yes. Formaldehyde release accelerates under strongly acidic conditions, so EDDM should be kept away from strong acids during storage and used within its recommended pH window. In neutral conditions it is stable; strong acid contact causes rapid decomposition and formaldehyde liberation.",
  },
  {
    question: "How should EDDM be stored and handled safely?",
    answer:
      "Store in a cool, dry, well-ventilated place, in tightly closed containers protected from moisture, away from direct sunlight, heat, open flame and strong acids. Follow the grade-specific SDS: use appropriate PPE, avoid skin and eye contact, and observe the hazard/precautionary statements for the product form you handle.",
  },
];

export default function HowEddmWorksPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "How EDDM Works", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionLabel>Technical explainer</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                How EDDM Works — The Slow-Release Formaldehyde-Donor Mechanism
              </h1>
              <p className="text-secondary text-lg mt-6">
                (Ethylenedioxy)dimethanol (EDDM, CAS 3586-55-8) is a slow-release formaldehyde-donor.
                That single mechanism explains both of its industrial roles: sustained broad-spectrum
                preservation of water-based products (with headspace protection) and non-triazine
                hydrogen-sulfide scavenging at ambient temperature.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: EDDM slowly liberates formaldehyde in water-based systems. The
                  released formaldehyde is the biocidal active — giving sustained microbial control
                  and vapour-phase headspace protection. The same donor chemistry lets EDDM react with
                  H₂S at ambient temperature without salt precipitation or catalyst poisoning.
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
              1. Controlled Formaldehyde Release
            </h2>
            <p className="text-secondary mb-4">
              In a water-based medium EDDM establishes an equilibrium that steadily releases low
              concentrations of formaldehyde — enough to inhibit microbial growth, but released
              gradually so protection persists over the product&apos;s storage life. Because the
              formaldehyde is generated in situ, formulators avoid handling free formaldehyde
              directly.
            </p>

            <h2 className="font-heading text-h3 text-primary mb-6 mt-12">
              2. Broad-Spectrum + Headspace Action
            </h2>
            <p className="text-secondary mb-4">
              The released formaldehyde acts against bacteria (including gram-negative species), yeast
              and fungi. Its vapour pressure means EDDM also protects the container headspace and
              lid/wall interface, suppressing surface mould that would otherwise colonise the air gap
              of a sealed container.
            </p>

            <h2 className="font-heading text-h3 text-primary mb-6 mt-12">
              3. Non-Triazine H₂S Scavenging
            </h2>
            <p className="text-secondary mb-4">
              The same donor chemistry reacts with hydrogen sulfide. EDDM captures H₂S at ambient
              temperature in an exothermic reaction, producing non-hazardous, non-precipitating
              by-products. This avoids the salt deposition, pH rise and catalyst interference seen with
              triazine-based scavengers — see{" "}
              <Link href="/eddm-multiphase-h2s-scavenger" className="text-link">
                EDDM as a multiphase H₂S scavenger
              </Link>
              .
            </p>

            <h2 className="font-heading text-h3 text-primary mb-6 mt-12">
              4. Stability, Acid Sensitivity &amp; Safety
            </h2>
            <ul className="text-secondary space-y-2 list-disc pl-6">
              <li>Stable under neutral conditions; formaldehyde release accelerates in strong acid.</li>
              <li>Keep away from strong acids, heat, open flame and direct sunlight.</li>
              <li>Store in tightly closed containers, cool, dry and well-ventilated.</li>
              <li>Follow the grade-specific SDS for PPE and hazard/precautionary statements.</li>
            </ul>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">Related Reading</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6">
              <li>
                <Link href="/eddm-cas-3586-55-8-properties" className="text-link">
                  EDDM CAS 3586-55-8 — properties &amp; specifications
                </Link>
              </li>
              <li>
                <Link href="/eddm-in-can-preservative-coatings" className="text-link">
                  EDDM in-can preservative for coatings &amp; adhesives
                </Link>
              </li>
              <li>
                <Link href="/eddm-vs-isothiazolinone-biocides" className="text-link">
                  EDDM vs isothiazolinone biocides
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
            <h2 className="font-heading text-h3 text-primary mb-4">Have a technical question about EDDM?</h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Vasudev Chemo Pharma provides application and mechanism support for EDDM (CAS 3586-55-8)
              alongside batch COA and SDS, manufactured at our ISO 9001:2015 certified facility in
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
