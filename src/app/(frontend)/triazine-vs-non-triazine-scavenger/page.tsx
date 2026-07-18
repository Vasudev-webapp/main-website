import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import { applyPageMetaOverride } from "@/lib/seo/page-meta-overrides";
import { mergeKeywordClusters } from "@/lib/seo/keyword-clusters";

const SITE_URL = "https://www.vasudevchemopharma.com";
const PATH = "/triazine-vs-non-triazine-scavenger";
const MEA_URL = "/product/mea-triazine-78-h2s-scavenger";
const MMA_URL = "/product/mma-triazine-40";
const EDDM_URL = "/product/eddm-non-triazine-h2s-scavenger";

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "Triazine vs Non-Triazine H2S Scavenger — How to Choose | Vasudev Chemo Pharma",
  description:
    "Compare triazine (amine-based) and non-triazine/non-amine H2S scavengers — chemistry, by-products, pH and solids behaviour, and when each is the better fit. MEA & MMA triazine plus a non-triazine (EDDM) option. Indian manufacturer, global export.",
  keywords: mergeKeywordClusters([
    "triazine vs non-triazine H2S scavenger",
    "non-amine H2S scavenger",
    "non-triazine scavenger comparison",
    "amine vs non-amine scavenger",
    "H2S scavenger chemistry comparison",
    "formaldehyde donor vs triazine",
    "non-triazine H2S removal",
    "triazine alternative H2S scavenger",
    "EDDM non-triazine scavenger",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Triazine vs Non-Triazine H2S Scavenger — How to Choose",
    description:
      "Chemistry, by-products, pH and solids behaviour — and when triazine vs a non-triazine/non-amine scavenger is the better fit.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Triazine vs Non-Triazine H2S Scavenger",
    description:
      "Compare amine-based triazine with non-triazine/non-amine H2S scavengers and pick the right fit.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "What is a non-triazine H2S scavenger?",
    answer:
      "A non-triazine scavenger removes H2S using chemistry other than an amine-triazine ring — for example formaldehyde-donor products such as (ethylenedioxy)dimethanol (EDDM), glyoxal, or metal/oxidiser-based systems. 'Non-amine' specifically means no alkanolamine backbone, which changes pH behaviour, by-products and solids risk.",
  },
  {
    question: "How does triazine differ from non-triazine chemistries?",
    answer:
      "Triazine (MEA/MMA) is amine-based and reacts H2S into organic products (with dithiazine as a notable by-product that can form solids if over-dosed). Non-triazine options like EDDM release formaldehyde that reacts with H2S to non-volatile products, often with neutral pH, no salt precipitation and a different solids profile — advantageous in some streams.",
  },
  {
    question: "When is triazine the better choice?",
    answer:
      "Triazine remains the workhorse for cost-effective, high-capacity non-regenerative scavenging in gas and hydrocarbon streams, with a large field track record, simple application and wide availability. MEA Triazine 78% and MMA Triazine 40% cover most gas, crude and water duties.",
  },
  {
    question: "When is a non-triazine scavenger preferable?",
    answer:
      "Non-triazine/non-amine products can be preferred where you want to avoid amine-related pH shift, salt precipitation or triazine-specific solids, or where a neutral-pH, non-corrosive profile matters. A formaldehyde-donor such as EDDM is a common non-triazine alternative.",
  },
  {
    question: "Do you supply both triazine and non-triazine scavengers?",
    answer:
      "Yes. Vasudev Chemo Pharma manufactures MEA Triazine 78%, MMA Triazine 40%, and a non-triazine option — EDDM (ethylenedioxy dimethanol) — so we can recommend the right chemistry for your stream rather than forcing one product.",
  },
  {
    question: "How do I decide between them?",
    answer:
      "Match chemistry to the stream: H2S load, phase, temperature, pH sensitivity, solids tolerance and downstream constraints. Triazine for cost-effective bulk gas/hydrocarbon duty; non-triazine (EDDM) where amine pH shift, salts or triazine solids are a problem. We can advise and supply either.",
  },
];

export default function TriazineVsNonTriazineScavengerPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Triazine vs Non-Triazine Scavenger", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionLabel>Comparison guide</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                Triazine vs Non-Triazine H₂S Scavenger — How to Choose
              </h1>
              <p className="text-secondary text-lg mt-6">
                Amine-based triazine is the industry workhorse, but non-triazine / non-amine
                chemistries can be a better fit in specific streams. This brand-free comparison covers
                chemistry, by-products, pH and solids behaviour so you can choose — and we supply both.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: triazine (MEA/MMA) gives cost-effective, high-capacity non-regenerative
                  scavenging with a huge field record. Non-triazine options like EDDM (a
                  formaldehyde-donor) offer neutral pH, no salt precipitation and a different solids
                  profile — better where amine pH shift or triazine solids are a problem.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button href="/contact" variant="primary">
                  Request a Quote
                </Button>
                <Button href={MEA_URL} variant="secondary">
                  View MEA Triazine 78%
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h3 text-primary mb-8">Side-by-Side</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="py-3 px-4 font-semibold">Factor</th>
                    <th className="py-3 px-4 font-semibold">Triazine (amine-based)</th>
                    <th className="py-3 px-4 font-semibold">Non-triazine (e.g. EDDM)</th>
                  </tr>
                </thead>
                <tbody className="text-secondary">
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Backbone chemistry</td>
                    <td className="py-3 px-4">Amine-triazine ring</td>
                    <td className="py-3 px-4">Non-amine (e.g. formaldehyde-donor)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">pH impact</td>
                    <td className="py-3 px-4">Amine-driven; can shift pH</td>
                    <td className="py-3 px-4">Typically neutral</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Solids / salts</td>
                    <td className="py-3 px-4">Dithiazine solids if over-dosed</td>
                    <td className="py-3 px-4">No salt precipitation (EDDM)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Cost / capacity</td>
                    <td className="py-3 px-4">High capacity, cost-effective</td>
                    <td className="py-3 px-4">Niche/premium per duty</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Best fit</td>
                    <td className="py-3 px-4">Bulk gas/hydrocarbon scavenging</td>
                    <td className="py-3 px-4">pH-sensitive / solids-averse streams</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-secondary text-sm mt-4">
              We supply both routes — see the{" "}
              <Link href={EDDM_URL} className="text-link">
                EDDM non-triazine H₂S scavenger
              </Link>{" "}
              product page for the non-triazine option.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">Related Reading</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6">
              <li>
                <Link href="/triazine-vs-nitrite-scavenger" className="text-link">
                  Triazine vs nitrite/nitrate scavengers
                </Link>
              </li>
              <li>
                <Link href="/mea-triazine-vs-mma-triazine" className="text-link">
                  MEA vs MMA triazine
                </Link>
              </li>
              <li>
                <Link href="/how-h2s-scavengers-work" className="text-link">
                  How H₂S scavengers work
                </Link>
              </li>
              <li>
                <Link href={MEA_URL} className="text-link">
                  MEA Triazine 78% — product page
                </Link>
              </li>
              <li>
                <Link href={MMA_URL} className="text-link">
                  MMA Triazine 40% — product page
                </Link>
              </li>
              <li>
                <Link href={EDDM_URL} className="text-link">
                  EDDM (non-triazine) H₂S scavenger — product page
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
            <h2 className="font-heading text-h3 text-primary mb-4">Not sure which chemistry fits?</h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Vasudev Chemo Pharma supplies MEA Triazine 78%, MMA Triazine 40% and non-triazine EDDM,
              with selection and dosing guidance, batch COA, and global export from our ISO 9001:2015
              certified facility in Gujarat, India.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact" variant="primary">
                Request a Quote
              </Button>
              <Link href={MEA_URL} className="text-link">
                View MEA Triazine 78% →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
