import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import FaqAccordion from "@/components/seo/FaqAccordion";
import { applyPageMetaOverride } from "@/lib/seo/page-meta-overrides";
import { mergeKeywordClusters } from "@/lib/seo/keyword-clusters";

const SITE_URL = "https://www.vasudevchemopharma.com";
const PATH = "/mma-triazine-40-safety-handling-storage";
const MMA_URL = "/product/mma-triazine-40";
const MEA_URL = "/product/mea-triazine-78-h2s-scavenger";

export const metadata: Metadata = applyPageMetaOverride(PATH, {
  title:
    "MMA Triazine 40% Safety, Handling & Storage — SDS Guide | Vasudev Chemo Pharma",
  description:
    "MMA Triazine 40% (CAS 108-74-7) safety, handling and storage guide: GHS07 irritant, H315/H319, recommended PPE, compatible materials, storage conditions, spill response and disposal. Practical SDS-based guidance.",
  keywords: mergeKeywordClusters([
    "mma triazine safety",
    "mma triazine handling",
    "mma triazine storage",
    "mma triazine sds",
    "mma triazine msds",
    "mma triazine 40 ppe",
    "mma triazine hazard ghs07",
    "h2s scavenger safe handling",
    "mma triazine spill disposal",
    "monomethylamine triazine safety data",
  ]),
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "MMA Triazine 40% Safety, Handling & Storage",
    description:
      "GHS classification, PPE, storage and spill guidance for MMA Triazine 40% (CAS 108-74-7) — a practical SDS-based reference.",
    url: `${SITE_URL}${PATH}`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MMA Triazine 40% Safety & Handling",
    description:
      "Irritant (GHS07, H315/H319): PPE, storage, spill and disposal guidance for MMA Triazine 40%.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "How is MMA Triazine 40% classified for hazard?",
    answer:
      "MMA Triazine 40% is classified as an irritant. Its GHS pictogram is GHS07 with the signal word 'Warning', and its hazard statements are H315 (causes skin irritation) and H319 (causes serious eye irritation). Full details, including precautionary statements, are on the Safety Data Sheet supplied with every shipment.",
  },
  {
    question: "What PPE should be used when handling MMA Triazine 40%?",
    answer:
      "Because it is a skin and eye irritant, wear chemical-resistant gloves, safety goggles or a face shield, and suitable protective clothing when handling MMA Triazine 40%. Use adequate ventilation, and have eyewash and washing facilities accessible. Always follow the specific PPE guidance in the SDS and your site risk assessment.",
  },
  {
    question: "How should MMA Triazine 40% be stored?",
    answer:
      "Store MMA Triazine 40% in its original closed HDPE containers in a cool, dry, well-ventilated area, away from strong acids and oxidisers. Its high flash point (>93°C) and low freezing point (<−10°C) give wide storage latitude, but keep it out of direct sunlight and provide secondary containment. Keep containers upright and labelled.",
  },
  {
    question: "Is MMA Triazine 40% corrosive to equipment?",
    answer:
      "The 40% formulation is designed to be non-corrosive to common oilfield metallurgy when used correctly, and it does not contribute to foaming in gas processing equipment. However, because it is an alkaline amine-based liquid, keep it away from strong acids and confirm material compatibility for gaskets, seals and dosing components.",
  },
  {
    question: "What should I do in case of a spill?",
    answer:
      "Contain the spill and prevent it from entering drains or watercourses. Absorb with inert material, collect into labelled containers for disposal, and ventilate the area. Wear the recommended PPE during clean-up. Follow the spill and disposal sections of the SDS and applicable local regulations.",
  },
  {
    question: "How is spent or waste MMA Triazine disposed of?",
    answer:
      "Spent scavenger and any waste product should be disposed of in accordance with local, regional and national regulations, typically via a licensed waste contractor. The SDS provides disposal guidance; because spent triazine carries reacted sulphur products, treat it as chemical waste and do not discharge it untreated.",
  },
];

export default function MmaTriazine40SafetyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "MMA Triazine 40% Safety, Handling & Storage", url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionLabel>Safety &amp; handling</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                MMA Triazine 40% Safety, Handling &amp; Storage
              </h1>
              <p className="text-secondary text-lg mt-6">
                Safe handling protects your people and your equipment. This practical, SDS-based guide
                summarises the hazard classification, personal protective equipment, storage
                conditions, spill response and disposal for MMA Triazine 40% (Monomethylamine Triazine,
                CAS 108-74-7). It is a summary for planning — always follow the full Safety Data Sheet
                and your site risk assessment.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-surface p-5 rounded">
                <p className="text-primary font-medium">
                  Quick answer: MMA Triazine 40% is an irritant (GHS07, &ldquo;Warning&rdquo;, H315
                  skin irritation, H319 serious eye irritation). Handle with gloves, goggles and
                  ventilation; store in closed HDPE containers in a cool, ventilated area away from
                  strong acids; contain and absorb spills; and dispose of via a licensed waste route.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button href="/contact?product=mma-triazine-40" variant="primary">
                  Request the SDS
                </Button>
                <Button href={MMA_URL} variant="secondary">
                  View MMA Triazine 40% Product
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Hazard classification and PPE
            </h2>
            <p className="text-secondary leading-relaxed">
              MMA Triazine 40% is an alkaline amine-based liquid classified as an irritant. Under the
              Globally Harmonised System its pictogram is GHS07, its signal word is
              &ldquo;Warning&rdquo;, and its hazard statements are H315 (causes skin irritation) and
              H319 (causes serious eye irritation). The primary risks in normal handling are therefore
              skin and eye contact. Personnel should wear chemical-resistant gloves and eye protection
              (safety goggles or a face shield), together with suitable protective clothing, and work
              with adequate ventilation. Eyewash and washing facilities should be readily accessible in
              areas where the product is handled. These measures are straightforward, but they matter:
              the alkaline nature of the liquid means contact should be avoided and any splashes washed
              off promptly.
            </p>
            <div className="overflow-x-auto mt-6">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="py-3 px-4 font-semibold">Item</th>
                    <th className="py-3 px-4 font-semibold">Detail</th>
                  </tr>
                </thead>
                <tbody className="text-secondary">
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Classification</td>
                    <td className="py-3 px-4">Irritant</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">GHS pictogram</td>
                    <td className="py-3 px-4">GHS07</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Signal word</td>
                    <td className="py-3 px-4">Warning</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Hazard statements</td>
                    <td className="py-3 px-4">H315 (skin), H319 (eyes)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Recommended PPE</td>
                    <td className="py-3 px-4">Gloves, goggles/face shield, protective clothing, ventilation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Storage and material compatibility
            </h2>
            <p className="text-secondary leading-relaxed">
              MMA Triazine 40% should be stored in its original, closed HDPE containers — the 210-litre
              drums or 1000-litre IBCs it is supplied in — kept upright, labelled and in a cool, dry,
              well-ventilated area out of direct sunlight. Its physical properties make storage
              relatively forgiving: a high flash point above 93&deg;C means it is not handled as a
              flammable liquid, and a low freezing point below &minus;10&deg;C gives good cold-weather
              latitude. Nevertheless, because it is an alkaline amine, it must be kept away from strong
              acids and oxidisers, which are incompatible and can react. Provide secondary containment
              to capture any leak, and confirm the compatibility of gaskets, seals, pump components and
              transfer hoses with an amine-based liquid before putting them into service. Rotate stock
              so older material is used first, and keep containers sealed when not dispensing to
              minimise contamination and vapour exposure.
            </p>

            <h2 className="font-heading text-h3 text-primary mb-6 mt-12">
              Spill response, first aid and disposal
            </h2>
            <p className="text-secondary leading-relaxed">
              In the event of a spill, the priorities are to protect people and to prevent the product
              from reaching drains, soil or watercourses. Wearing the recommended PPE, contain the
              spill, absorb it with an inert absorbent, and collect the material into labelled
              containers for proper disposal, then ventilate the area. For first aid, skin contact
              should be treated by washing thoroughly with water, and eye contact by rinsing
              cautiously with water for several minutes — the SDS gives the full first-aid guidance,
              including when to seek medical attention. For disposal, both surplus product and spent
              scavenger should be handled as chemical waste and routed through a licensed waste
              contractor in accordance with local, regional and national regulations; spent triazine
              carries reacted sulphur products and must not be discharged untreated. This page is a
              planning summary only — the authoritative document is the current Safety Data Sheet,
              which we provide with every order and on request.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Training, transport and emergency preparedness
            </h2>
            <p className="text-secondary leading-relaxed">
              Safe use of MMA Triazine 40% depends as much on people and procedures as on the product
              itself. Everyone who handles, doses or transfers the scavenger should be briefed on its
              irritant classification, the required personal protective equipment, and the location of
              eyewash and washing facilities, so that a splash is dealt with immediately and correctly.
              A short site procedure covering connection and disconnection of drums or IBCs, safe
              transfer into dosing systems, and what to do in the event of a leak turns the Safety Data
              Sheet into practical, repeatable behaviour. Because the product is alkaline and amine-based,
              a key rule to reinforce is segregation from strong acids and oxidisers in both storage and
              handling.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              Transport and emergency preparedness round out a responsible programme. When MMA Triazine
              40% is moved between sites or received from a supplier, containers should be secured,
              labelled and accompanied by the current SDS, and drivers and receiving staff should know
              the basic response to a spill. On site, keep suitable inert absorbent, containment
              materials and labelled waste containers accessible near the storage and dosing area, and
              make sure spill and first-aid procedures are visible and understood. Spent scavenger and
              any waste must be routed to a licensed waste contractor in line with local regulations,
              never discharged untreated. None of this is onerous, but treating safety as a designed
              part of the operation — rather than an afterthought — protects your people, your
              equipment and your compliance record. The authoritative reference remains the current
              Safety Data Sheet, which we supply with every order and on request.
            </p>
          </div>
        </section>

        <section className="py-16 bg-surface">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">Related Reading</h2>
            <ul className="text-secondary space-y-2 list-disc pl-6">
              <li>
                <Link href={MMA_URL} className="text-link">
                  MMA Triazine 40% — full product page
                </Link>
              </li>
              <li>
                <Link href="/mma-triazine-40-specifications-coa-datasheet" className="text-link">
                  Specifications, COA &amp; datasheet
                </Link>
              </li>
              <li>
                <Link href="/mma-triazine-40-cas-108-74-7-properties" className="text-link">
                  CAS 108-74-7 properties &amp; chemical identity
                </Link>
              </li>
              <li>
                <Link href="/mma-triazine-40-bulk-order-packaging-moq" className="text-link">
                  Bulk order, packaging &amp; MOQ
                </Link>
              </li>
              <li>
                <Link href="/mma-triazine-40-dosage-injection-rate-guide" className="text-link">
                  Dosage &amp; injection rate guide
                </Link>
              </li>
              <li>
                <Link href={MEA_URL} className="text-link">
                  MEA Triazine 78% — product page
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-8">Frequently Asked Questions</h2>
            <FaqAccordion items={faqs} />
          </div>
        </section>

        <section className="py-16 text-center bg-surface">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h3 text-primary mb-4">
              Request the MMA Triazine 40% SDS
            </h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Get the current Safety Data Sheet and handling guidance for MMA Triazine 40% for your
              site risk assessment — direct from an ISO 9001:2015 certified manufacturer in Gujarat,
              India.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact?product=mma-triazine-40" variant="primary">
                Request the SDS
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
