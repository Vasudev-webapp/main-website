import type { Metadata } from "next";
import { applyPageMetaOverride } from "@/lib/seo/page-meta-overrides";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import {
  BKC_CORE_KEYWORDS,
  BKC_50_KEYWORDS,
  BKC_80_KEYWORDS,
  BKC_APPLICATIONS_KEYWORDS,
  mergeKeywordClusters,
} from "@/lib/seo/keyword-clusters";

const SITE_URL = "https://www.vasudevchemopharma.com";

export const metadata: Metadata = applyPageMetaOverride("/benzalkonium-chloride-50-vs-80", {
  title: "BKC 50% vs BKC 80% — Which Benzalkonium Chloride Should You Buy? | Vasudev Chemo Pharma",
  description:
    "Complete comparison of Benzalkonium Chloride 50% vs 80% — active matter, freight cost, dilution, storage, and Lonza Bardac® / Stepan BTC® equivalence. Decision guide for disinfectant brands and sanitiser blenders by Vasudev Chemo Pharma.",
  keywords: mergeKeywordClusters(
    BKC_CORE_KEYWORDS,
    BKC_50_KEYWORDS,
    BKC_80_KEYWORDS,
    BKC_APPLICATIONS_KEYWORDS,
    [
      "BKC 50 vs BKC 80",
      "BKC 50 vs 80 comparison",
      "benzalkonium chloride 50 vs 80",
      "benzalkonium chloride 50 vs 80 percent",
      "BKC 50 or BKC 80 which to buy",
      "BKC freight cost saving 80 vs 50",
      "BKC 80 dilution to 50 percent calculation",
      "BKC 50 ready to use vs BKC 80 concentrate",
      "BKC 80 lonza bardac 2280 alternative",
      "BKC 80 stepan BTC 8358 alternative",
      "BKC 80 nouryon maquat 4480-E alternative",
    ]
  ),
  alternates: { canonical: `${SITE_URL}/benzalkonium-chloride-50-vs-80` },
  openGraph: {
    title: "BKC 50% vs BKC 80% — Which Benzalkonium Chloride Should You Buy?",
    description:
      "Complete comparison of BKC 50% vs BKC 80% — active matter, freight cost, dilution math, and equivalence to Lonza Bardac® 2280 / Stepan BTC® 8358 reference grades.",
    url: `${SITE_URL}/benzalkonium-chloride-50-vs-80`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "BKC 50% vs BKC 80% — Comparison Guide",
    description:
      "Complete comparison of BKC 50% vs BKC 80% — active matter, freight, dilution, and global brand equivalence.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
});

const faqs = [
  {
    question: "What is the main difference between BKC 50% and BKC 80%?",
    answer:
      "Same active substance (Alkyl Dimethyl Benzyl Ammonium Chloride / ADBAC, CAS 8001-54-5) at different concentrations in water. BKC 50% contains 50% active matter, BKC 80% contains 80% active matter. BKC 80% delivers 60% more active per kg of shipped product, saving roughly 37% freight cost per kilogram of active matter.",
  },
  {
    question: "Which grade should disinfectant manufacturers buy — 50% or 80%?",
    answer:
      "Buy BKC 80% if you ship internationally, dilute on-site, or want lower freight cost per kg of active. Buy BKC 50% if you formulate as-is, pump directly through metering equipment at room temperature, or want the global formulation reference standard. Most large export buyers procure 80% concentrate; small regional formulators often prefer 50% liquid.",
  },
  {
    question: "How do I dilute BKC 80% to make BKC 50%?",
    answer:
      "Blend 62.5 kg of BKC 80% with 37.5 kg of demineralised water (mass ratio) to yield 100 kg of BKC 50%. Always add concentrate to water (not water to concentrate) and use demineralised or low-hardness water to avoid Ca/Mg precipitation. Gently warm BKC 80% to 25 – 30°C if it has gelled before dilution.",
  },
  {
    question: "Why is BKC 80% more viscous than BKC 50%?",
    answer:
      "Higher active matter (80% vs 50%) means more cationic surfactant + less water — which raises viscosity. Below 15°C, BKC 80% can form a soft gel that takes time to redissolve. BKC 50% remains free-flowing at room temperature and is easier to pump through metering equipment without warming.",
  },
  {
    question: "Are BKC 50% and BKC 80% equivalent to Lonza Bardac® or Stepan BTC®?",
    answer:
      "Yes. Vasudev Chemo Pharma's BKC 50% is functionally equivalent to Lonza Bardac® 22 / Stepan BTC® 824 / Nouryon Maquat® MC 1412. Our BKC 80% is functionally equivalent to Lonza Bardac® 2280 / Stepan BTC® 8358 / Nouryon Maquat® 4480-E / Pilot Lonzabac® 80%. Same active substance (ADBAC, CAS 8001-54-5) and same C₁₂–C₁₆ alkyl distribution.",
  },
  {
    question: "What is the freight cost saving when buying BKC 80% instead of BKC 50%?",
    answer:
      "For an order of 10 MT of active quat: BKC 50% requires 20 MT of shipped product (10/0.5); BKC 80% requires 12.5 MT (10/0.8). The 7.5 MT freight saving per order is significant — typically USD 600 – 1,500 saving on ocean freight to Latin America or West Africa, or USD 300 – 700 on Middle East shipments. On long-haul ocean shipments, the freight saving alone can pay for the price differential within 1 – 2 orders.",
  },
  {
    question: "Does BKC 50% have a lower shelf life than BKC 80%?",
    answer:
      "No. Both grades have a 24-month shelf life in original sealed HDPE drums when stored at recommended temperatures. BKC 50% should be stored at 5 – 40°C; BKC 80% should be stored at 15 – 40°C (gelation prevention). Stored within these ranges, both grades remain stable and do not lose biocidal activity.",
  },
  {
    question: "Can I use BKC 80% directly without diluting it?",
    answer:
      "No — BKC 80% is highly corrosive and concentrated. Always dilute BKC 80% to use concentration before application. For surface disinfection, dilute to 0.1% – 0.4% active quat (1.25 – 5 g BKC 80% per litre water). For food-contact no-rinse, dilute to maximum 200 ppm active. Direct contact with BKC 80% causes severe skin burns and eye damage.",
  },
];

export default function BKC50Vs80Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "BKC 50% vs BKC 80%", url: `${SITE_URL}/benzalkonium-chloride-50-vs-80` },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionLabel>Comparison guide</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                BKC 50% vs BKC 80% — Which Benzalkonium Chloride Should You Buy?
              </h1>
              <p className="text-secondary text-lg mt-6">
                A side-by-side decision guide for disinfectant brands, sanitiser blenders, cosmetic preservation
                houses, and water-treatment formulators choosing between Benzalkonium Chloride 50% and 80%
                concentrate. Same active substance (ADBAC, CAS 8001-54-5) — different concentrations,
                freight economics, and storage requirements.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button href="/contact" variant="primary">
                  Request a Quote
                </Button>
                <Button href="/product/benzalkonium-chloride-50" variant="secondary">
                  View BKC 50%
                </Button>
                <Button href="/product/benzalkonium-chloride-80" variant="secondary">
                  View BKC 80%
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick comparison */}
        <section className="py-16 bg-surface">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h3 text-primary mb-8">Quick Side-by-Side</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="py-3 px-4 font-semibold">Attribute</th>
                    <th className="py-3 px-4 font-semibold">BKC 50%</th>
                    <th className="py-3 px-4 font-semibold">BKC 80%</th>
                  </tr>
                </thead>
                <tbody className="text-secondary">
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Active matter</td>
                    <td className="py-3 px-4">50 ± 1%</td>
                    <td className="py-3 px-4">80 ± 1%</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Active substance</td>
                    <td className="py-3 px-4" colSpan={2}>
                      Alkyl Dimethyl Benzyl Ammonium Chloride (ADBAC), CAS 8001-54-5 — identical
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Form / viscosity</td>
                    <td className="py-3 px-4">Clear pale yellow liquid (free-flowing)</td>
                    <td className="py-3 px-4">Pale yellow viscous liquid (gel below 15°C)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Storage temperature</td>
                    <td className="py-3 px-4">5 – 40°C</td>
                    <td className="py-3 px-4">15 – 40°C (heated storage in cold climates)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Freight per kg active</td>
                    <td className="py-3 px-4">Baseline (50% water)</td>
                    <td className="py-3 px-4">~37% lower than BKC 50%</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Best for</td>
                    <td className="py-3 px-4">Direct formulation, regional supply, room-temp pumping</td>
                    <td className="py-3 px-4">Bulk export, on-site dilution, freight-economic concentrate</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Lonza brand equivalent</td>
                    <td className="py-3 px-4">Bardac® 22, Hyamine® 3500</td>
                    <td className="py-3 px-4">Bardac® 2280</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Stepan brand equivalent</td>
                    <td className="py-3 px-4">BTC® 824, BTC® 50NF</td>
                    <td className="py-3 px-4">BTC® 8358</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Nouryon brand equivalent</td>
                    <td className="py-3 px-4">Maquat® MC 1412</td>
                    <td className="py-3 px-4">Maquat® 4480-E</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Vasudev SKU</td>
                    <td className="py-3 px-4">VCP-SFC-0005</td>
                    <td className="py-3 px-4">VCP-SFC-0006</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Decision sections */}
        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-4xl">
            <h2 className="font-heading text-h3 text-primary mb-6">When to Buy BKC 50%</h2>
            <p className="text-secondary mb-4">
              BKC 50% is the global formulation reference standard — used directly in finished disinfectant
              formulations without dilution. Choose BKC 50% if you fall into one of these profiles:
            </p>
            <ul className="text-secondary space-y-2 list-disc pl-6 mb-12">
              <li>Regional sanitiser blender producing finished disinfectants for local domestic market — the active
                concentration matches your formulation manuals and you don&apos;t want to manage on-site dilution.</li>
              <li>Hospital/clinical disinfectant formulator following EPA-registered formulation specifications based on
                Lonza Bardac® 22, Stepan BTC® 824, or equivalent 50% reference grades.</li>
              <li>Cold-climate operations (Russia, northern Europe, northern China) where BKC 80% gelation requires
                heated warehousing — BKC 50% remains free-flowing at 5°C.</li>
              <li>Small-scale formulators or new-product developers running pilot batches without on-site dilution
                infrastructure.</li>
              <li>Pharmaceutical preservation OEM diluting to 0.001% – 0.01% active in finished product — easier to
                meter accurately from a lower-concentration base.</li>
            </ul>

            <h2 className="font-heading text-h3 text-primary mb-6">When to Buy BKC 80%</h2>
            <p className="text-secondary mb-4">
              BKC 80% is the export-economical concentrate — preferred by global disinfectant brands and sanitiser
              blenders who dilute on-site. Choose BKC 80% if you fall into one of these profiles:
            </p>
            <ul className="text-secondary space-y-2 list-disc pl-6 mb-12">
              <li>Global disinfectant brand or sanitiser blender procuring active matter from India for export to
                Latin America, Africa, Middle East, or Asia — freight saving on 80% over 50% is significant.</li>
              <li>EPA-registered formulator who blends concentrate with surfactants, fragrances, and dyes on-site —
                you have the dilution and metering infrastructure to handle 80% concentrate.</li>
              <li>Cosmetic ingredient formulator producing finished personal-care products — diluting from 80% gives
                better cost-per-kg-active economics for small inclusion levels (0.05% – 0.1%).</li>
              <li>Water-treatment chemical company producing pool algicide concentrates and cooling-tower biocide
                slug-dose products — finished products typically contain 10% – 50% active matter.</li>
              <li>Your facility has heated warehousing (above 15°C) or operates in a temperate-to-tropical climate
                where gelation is not a concern.</li>
            </ul>

            <h2 className="font-heading text-h3 text-primary mb-6">Freight Cost Calculator</h2>
            <p className="text-secondary mb-4">
              For an order of 10 MT of active matter (active quat as ADBAC):
            </p>
            <ul className="text-secondary space-y-2 list-disc pl-6 mb-6">
              <li><strong>BKC 50%:</strong> requires 20 MT of shipped product (10 / 0.50) — full container shipment</li>
              <li><strong>BKC 80%:</strong> requires 12.5 MT of shipped product (10 / 0.80) — partial container or LCL</li>
              <li><strong>Saving:</strong> 7.5 MT of shipped weight (37.5% reduction)</li>
            </ul>
            <p className="text-secondary">
              Typical ocean freight savings:
            </p>
            <ul className="text-secondary space-y-2 list-disc pl-6 mb-12">
              <li>India → USA (Houston): USD 1,200 – 1,800 saving per 10 MT order</li>
              <li>India → Brazil (Santos): USD 1,500 – 2,200 saving per 10 MT order</li>
              <li>India → UAE (Jebel Ali): USD 400 – 700 saving per 10 MT order</li>
              <li>India → Vietnam (Ho Chi Minh): USD 600 – 1,000 saving per 10 MT order</li>
              <li>India → Russia (St Petersburg): USD 1,000 – 1,500 saving per 10 MT order</li>
            </ul>

            <h2 className="font-heading text-h3 text-primary mb-6">Dilution Reference: Making BKC 50% from BKC 80%</h2>
            <p className="text-secondary mb-4">
              The on-site dilution math is straightforward. To make 100 kg of BKC 50% from BKC 80%:
            </p>
            <pre className="bg-surface p-4 rounded text-sm mb-6 overflow-x-auto">
{`Target: 100 kg × 50% = 50 kg active matter
Source: 50 kg ÷ 0.80 (active fraction) = 62.5 kg BKC 80%
Water:  100 kg − 62.5 kg = 37.5 kg demineralised water

Result: 62.5 kg BKC 80% + 37.5 kg DI water → 100 kg BKC 50%`}
            </pre>
            <p className="text-secondary">
              Always add BKC 80% concentrate to water (not water to concentrate). Use demineralised or low-hardness
              water to avoid Ca/Mg precipitation. Gently warm BKC 80% to 25 – 30°C if it has gelled. Validate the
              final active content by titration (BS EN 16370 or USP &lt;081&gt;) before commercial use.
            </p>
          </div>
        </section>

        {/* FAQs */}
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

        {/* CTA */}
        <section className="py-16 text-center">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h3 text-primary mb-4">Ready to Order BKC 50% or BKC 80%?</h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Vasudev Chemo Pharma supplies Benzalkonium Chloride 50% and 80% direct from our ISO 9001:2015,
              GMP, and Halal certified facility in Gujarat, India — to disinfectant manufacturers, sanitiser
              blenders, cosmetic preservation houses, and water-treatment chemical companies across 30+ countries.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact" variant="primary">
                Request a Quote
              </Button>
              <Link href="/applications/disinfectants-sanitizers" className="text-link">
                View Disinfectant Applications →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
