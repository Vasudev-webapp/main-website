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
const PATH = "/eddm-multiphase-h2s-scavenger";
const PRODUCT_URL = `/product/${EDDM_SLUG}`;

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "EDDM Multiphase & Non-Triazine H2S Scavenger for Oil & Gas (CAS 3586-55-8) | Vasudev Chemo Pharma",
  description:
    "EDDM (Ethylenedioxy dimethanol) is a non-triazine H2S scavenger that works in multiphase produced fluids and pipelines. Reacts with H2S at ambient temperature, no salt precipitation, non-corrosive, catalyst-friendly. Compatible with corrosion inhibitor packages. Indian manufacturer.",
  keywords: mergeKeywordClusters([
    "EDDM H2S scavenger",
    "multiphase H2S scavenger",
    "non triazine H2S scavenger",
    "EDDM desulfurizer",
    "H2S scavenger for produced water",
    "H2S scavenger pipeline",
    "subsea H2S scavenger",
    "non triazine desulfurizer oil gas",
    "EDDM crude oil desulfurization",
    "EDDM natural gas sweetening",
    "H2S removal chemical ambient temperature",
    "no salt precipitation H2S scavenger",
    "EDDM CAS 3586-55-8 H2S",
    "non triazine H2S scavenger manufacturer India",
    "corrosion inhibitor compatible H2S scavenger",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "EDDM Multiphase & Non-Triazine H2S Scavenger for Oil & Gas",
    description:
      "Non-triazine H2S scavenger for multiphase produced fluids and pipelines — ambient-temperature reaction, no salt precipitation, non-corrosive.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EDDM Multiphase & Non-Triazine H2S Scavenger",
    description:
      "Non-triazine H2S scavenging in multiphase flow — no salt precipitation, non-corrosive, catalyst-friendly.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "What makes EDDM a non-triazine H2S scavenger?",
    answer:
      "EDDM (ethylenedioxy dimethanol, CAS 3586-55-8) removes hydrogen sulfide through a formaldehyde-donor chemistry rather than a triazine ring. It reacts selectively with H2S at ambient temperature in an exothermic reaction, without the salt precipitation, pH rise or catalyst poisoning associated with triazine-based scavengers.",
  },
  {
    question: "Can EDDM scavenge H2S in multiphase flow?",
    answer:
      "Yes. EDDM has been shown to deliver H2S scavenging capacity in multiphase produced fluids — for example while transiting subsea production pipelines carrying oil, water and gas — making it suitable for scavenging during multiphase flow rather than only in a single phase. Its water miscibility helps it distribute through the aqueous phase where H2S partitions.",
  },
  {
    question: "Does EDDM work alongside corrosion inhibitors?",
    answer:
      "EDDM chemistry can be combined with corrosion-inhibitor packages so that a single injection provides both H2S scavenging and corrosion protection, without deleteriously affecting the performance of the corrosion inhibitor or other production chemicals. Always qualify the specific blend for your system before field deployment.",
  },
  {
    question: "Why choose EDDM over triazine for H2S removal?",
    answer:
      "EDDM operates at neutral to slightly acidic pH, produces no salt precipitates that can block pipelines, does not shift system pH significantly, is non-corrosive to steel, and does not interfere with downstream catalysts. Triazine scavengers can form solid by-products (e.g. dithiazine) that cause deposition and handling problems. See our comparison content for the full picture.",
  },
  {
    question: "At what temperature does EDDM react with H2S?",
    answer:
      "EDDM reacts with H2S at room / ambient temperature. The desulfurization reaction is exothermic and generally requires no external energy input, which simplifies injection into produced fluids and pipelines.",
  },
  {
    question: "Which EDDM grade is best for oilfield H2S scavenging?",
    answer:
      "The 92% and 95% grades are generally preferred for oilfield use because higher active content delivers more scavenging capacity per litre injected and lowers freight cost per kg of active. See the EDDM grades selection guide for details.",
  },
];

export default function EddmMultiphaseH2sScavengerPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "EDDM Multiphase H2S Scavenger", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionLabel>Oil &amp; gas application</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                EDDM — Non-Triazine H₂S Scavenger for Multiphase Systems
              </h1>
              <p className="text-secondary text-lg mt-6">
                (Ethylenedioxy)dimethanol (EDDM, CAS 3586-55-8) is a non-triazine hydrogen sulfide
                scavenger that performs in multiphase produced fluids and pipelines. It reacts with
                H₂S at ambient temperature, forms no salt precipitates, stays non-corrosive to steel,
                and can be combined with corrosion-inhibitor packages for single-injection treatment.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: EDDM removes H₂S via formaldehyde-donor chemistry — not a triazine
                  ring. It scavenges in multiphase flow at ambient temperature, without salt
                  precipitation, significant pH shift, catalyst poisoning or steel corrosion, and is
                  compatible with corrosion-inhibitor formulations.
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
            <h2 className="font-heading text-h3 text-primary mb-8">
              EDDM vs Triazine — H₂S Scavenging Behaviour
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="py-3 px-4 font-semibold">Feature</th>
                    <th className="py-3 px-4 font-semibold">EDDM (non-triazine)</th>
                    <th className="py-3 px-4 font-semibold">Triazine scavengers</th>
                  </tr>
                </thead>
                <tbody className="text-secondary">
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Reaction temperature</td>
                    <td className="py-3 px-4">Ambient (exothermic)</td>
                    <td className="py-3 px-4">Often needs elevated temperature</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Salt / solid by-products</td>
                    <td className="py-3 px-4">None — no salt precipitation</td>
                    <td className="py-3 px-4">Can form solids (deposition risk)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">pH impact</td>
                    <td className="py-3 px-4">Neutral, minimal shift</td>
                    <td className="py-3 px-4">Raises pH significantly</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Steel corrosion</td>
                    <td className="py-3 px-4">Non-corrosive</td>
                    <td className="py-3 px-4">Can be corrosive</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Catalyst interference</td>
                    <td className="py-3 px-4">None</td>
                    <td className="py-3 px-4">Can poison catalysts</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Multiphase suitability</td>
                    <td className="py-3 px-4">Yes — proven in multiphase fluids</td>
                    <td className="py-3 px-4">Typically single-phase optimised</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">Where EDDM H₂S Scavenging Fits</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6 mb-12">
              <li>Subsea and multiphase production pipelines (oil / water / gas)</li>
              <li>Crude oil desulfurization during production</li>
              <li>Natural gas sweetening at ambient temperature</li>
              <li>Produced-water and process-water H₂S control</li>
              <li>Refinery process streams requiring non-corrosive treatment</li>
              <li>Biogas desulphurisation</li>
            </ul>

            <h2 className="font-heading text-h3 text-primary mb-6">Related Reading</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6">
              <li>
                <Link href="/how-h2s-scavengers-work" className="text-link">
                  How H₂S scavengers work (technical guide)
                </Link>
              </li>
              <li>
                <Link href="/h2s-scavenger-oil-gas" className="text-link">
                  H₂S scavenger for oil &amp; gas — overview
                </Link>
              </li>
              <li>
                <Link href="/eddm-grades-selection-guide" className="text-link">
                  EDDM grades 90% / 92% / 95% — selection guide
                </Link>
              </li>
              <li>
                <Link href="/how-eddm-works-formaldehyde-donor" className="text-link">
                  How EDDM works — formaldehyde-donor mechanism
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
              Evaluating a non-triazine H₂S scavenger?
            </h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Vasudev Chemo Pharma supplies EDDM (CAS 3586-55-8) to oil &amp; gas operators and
              oilfield-chemical formulators worldwide — with technical support, batch COA, and export
              in FOB, CIF and DDP terms from Gujarat, India.
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
