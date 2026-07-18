import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import { applyPageMetaOverride } from "@/lib/seo/page-meta-overrides";
import { mergeKeywordClusters } from "@/lib/seo/keyword-clusters";

const SITE_URL = "https://www.vasudevchemopharma.com";
const PATH = "/triazine-corrosion-inhibitor-compatibility";
const MEA_URL = "/product/mea-triazine-78-h2s-scavenger";
const MMA_URL = "/product/mma-triazine-40";

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "Triazine H2S Scavenger + Corrosion Inhibitor Compatibility & Co-Injection | Vasudev Chemo Pharma",
  description:
    "How triazine H2S scavengers interact with corrosion inhibitors — co-injection compatibility, sequencing, avoiding demulsifier/inhibitor antagonism, and keeping a clean production-chemical program. MEA & MMA triazine supply with application support.",
  keywords: mergeKeywordClusters([
    "triazine corrosion inhibitor compatibility",
    "H2S scavenger corrosion inhibitor co-injection",
    "production chemical compatibility",
    "scavenger inhibitor antagonism",
    "triazine chemical program",
    "corrosion inhibitor H2S scavenger sequence",
    "oilfield chemical compatibility testing",
    "combined scavenger inhibitor treatment",
    "triazine demulsifier interaction",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Triazine H2S Scavenger + Corrosion Inhibitor Compatibility & Co-Injection",
    description:
      "Co-injection compatibility, sequencing and antagonism avoidance for triazine scavengers and corrosion inhibitors.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Triazine + Corrosion Inhibitor Compatibility",
    description:
      "Keep triazine scavenging and corrosion inhibition working together in one production-chemical program.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "Can triazine H2S scavenger and corrosion inhibitor be co-injected?",
    answer:
      "Often yes, but it must be qualified. Triazine (amine-based) and corrosion-inhibitor packages (frequently amine/imidazoline or quaternary chemistries) can interact — sometimes beneficially, sometimes antagonistically. Bench compatibility testing confirms whether they can share an injection point or need separate points/sequencing.",
  },
  {
    question: "What problems can arise if they are incompatible?",
    answer:
      "Incompatibility can reduce corrosion-inhibitor film performance, tighten emulsions, promote foaming, or form deposits. Because both chemistries are surface-active, competition at interfaces is the usual mechanism. Qualification testing catches this before field deployment.",
  },
  {
    question: "Should scavenger and inhibitor share an injection point?",
    answer:
      "Only if compatibility is proven and the combined fluid stays stable. Otherwise, use separate injection points (and sometimes separate timing) so each chemical reaches its target — H2S for the scavenger, the metal surface for the inhibitor — without antagonism.",
  },
  {
    question: "Does over-treating with triazine affect corrosion control?",
    answer:
      "It can. Excess triazine and residual amine change the fluid chemistry the inhibitor works in and can promote emulsion/foaming that disrupts treatment. Dosing triazine to the measured H2S load (see spent-scavenger monitoring) keeps the wider chemical program stable.",
  },
  {
    question: "Can a combined scavenger + inhibitor product be formulated?",
    answer:
      "In some cases a single multifunctional formulation is feasible, provided the chemistries are compatible and each function retains performance. Where they are not, a co-ordinated two-product program is more reliable. We can advise on the right approach and base grade.",
  },
  {
    question: "Do you support compatibility qualification?",
    answer:
      "Yes. Vasudev Chemo Pharma supplies MEA Triazine 78% and MMA Triazine 40% with application guidance and batch COA, and can advise on grade selection and co-injection strategy to fit your corrosion-inhibitor and demulsifier program.",
  },
];

export default function TriazineCorrosionInhibitorCompatibilityPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Triazine + Corrosion Inhibitor Compatibility", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionLabel>Chemical program guide</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                Triazine H₂S Scavenger + Corrosion Inhibitor Compatibility
              </h1>
              <p className="text-secondary text-lg mt-6">
                H₂S scavengers rarely run alone — they share the stream with corrosion inhibitors,
                demulsifiers and other production chemicals. Because triazine is amine-based and
                surface-active, its interaction with the corrosion-inhibitor package must be managed so
                both keep performing.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: triazine and corrosion inhibitors can often be co-injected, but only
                  after bench compatibility testing. Watch for reduced inhibitor film, emulsion/foam
                  or deposits from surface-active competition. If incompatible, use separate injection
                  points/sequencing, and dose triazine to the H₂S load to keep the program stable.
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
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">Compatibility Checklist</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6 mb-12">
              <li>Bench-test the scavenger with the actual inhibitor/demulsifier package.</li>
              <li>Check inhibitor film persistence and corrosion rate with scavenger present.</li>
              <li>Watch for emulsion tightening, foaming and deposits.</li>
              <li>Decide shared vs separate injection points and sequencing.</li>
              <li>Dose triazine to the measured H₂S load to limit residual amine.</li>
            </ul>

            <h2 className="font-heading text-h3 text-primary mb-6">Single Product vs Coordinated Program</h2>
            <p className="text-secondary">
              A multifunctional scavenger+inhibitor product is possible when chemistries are
              compatible and each function is retained; otherwise a coordinated two-product program is
              more robust. Grade selection (MEA 78% or MMA 40%) supports either route.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">Related Reading</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6">
              <li>
                <Link href="/triazine-foaming-emulsion-troubleshooting" className="text-link">
                  Foaming &amp; emulsion troubleshooting
                </Link>
              </li>
              <li>
                <Link href="/custom-triazine-blends-formulations" className="text-link">
                  Custom triazine blends &amp; formulations
                </Link>
              </li>
              <li>
                <Link href="/spent-triazine-monitoring" className="text-link">
                  Spent triazine &amp; residual-amine monitoring
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
            <h2 className="font-heading text-h3 text-primary mb-4">Co-injecting scavenger and inhibitor?</h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Vasudev Chemo Pharma supplies MEA Triazine 78% and MMA Triazine 40% with compatibility
              and dosing guidance, batch COA, and global export from our ISO 9001:2015 certified
              facility in Gujarat, India.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact" variant="primary">
                Request a Quote
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
