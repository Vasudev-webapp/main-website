import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { applyPageMetaOverride } from "@/lib/seo/page-meta-overrides";
import { buildAbsoluteUrl, SITE_URL } from "@/lib/seo/seo-route-helpers";
import { getProductBySlug } from "@/lib/products-payload";
import { CATEGORY_LABELS } from "@/lib/types";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import ProductSchema from "@/components/seo/ProductSchema";
import SectionLabel from "@/components/SectionLabel";
import {
  resolveGulfSupply,
  buildGulfSupplyPath,
  buildGulfCountryMeta,
  buildGulfCountryFAQs,
} from "@/lib/seo-engine";

export const revalidate = 3600;

// Generated on-demand via ISR to avoid exhausting DB connections at build.
export async function generateStaticParams() {
  return [];
}

type Props = {
  params: Promise<{ slug: string; country: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { slug, country } = await params;
    const product = await getProductBySlug(slug);
    if (!product) return {};

    const supply = resolveGulfSupply(product, country);
    if (!supply) return {};

    const meta = buildGulfCountryMeta(product, supply);
    const canonicalPath = buildGulfSupplyPath(product.slug, supply.country.slug);
    const canonicalUrl = buildAbsoluteUrl(canonicalPath);

    return applyPageMetaOverride(canonicalUrl, {
      title: meta.title,
      description: meta.description,
      keywords: meta.keywords,
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title: meta.title,
        description: meta.description,
        url: canonicalUrl,
        type: "article",
        siteName: "Vasudev Chemo Pharma Chemicals",
        locale: "en_US",
      },
      twitter: {
        card: "summary_large_image",
        title: meta.title,
        description: meta.description,
      },
    });
  } catch {
    return {};
  }
}


export default async function ProductCountrySupplyPage({ params }: Props) {
  const { slug, country } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const supply = resolveGulfSupply(product, country);
  if (!supply) notFound();

  const { country: gulf, transit, incoterms, loadingPorts, localBrands, localNames } = supply;
  const canonicalUrl = buildAbsoluteUrl(buildGulfSupplyPath(product.slug, gulf.slug));
  const productUrl = `${SITE_URL}/product/${product.slug}`;
  const faqs = buildGulfCountryFAQs(product, supply);
  const categoryLabel = CATEGORY_LABELS[product.category];

  const facts: { label: string; value: string }[] = [
    { label: "Port of Discharge", value: gulf.mainPort },
    { label: "Transit from India", value: transit },
    { label: "Incoterms", value: incoterms.join(", ") },
    { label: "Documentation", value: gulf.regulatoryBody },
  ];

  return (
    <>
      <ProductSchema product={product} />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Products", url: `${SITE_URL}/product` },
          { name: product.name, url: productUrl },
          { name: `${gulf.name} Supply`, url: canonicalUrl },
        ]}
      />

      <main className="pt-28 pb-20">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/product" className="hover:text-accent transition-colors">Products</Link></li>
              <li>/</li>
              <li>
                <Link href={`/product/${product.slug}`} className="hover:text-accent transition-colors">
                  {product.name}
                </Link>
              </li>
              <li>/</li>
              <li><span className="font-medium text-primary">{gulf.name}</span></li>
            </ol>
          </nav>

          {/* Hero */}
          <section className="mb-14">
            <SectionLabel>{categoryLabel} · Export to {gulf.name}</SectionLabel>
            <h1 className="font-heading text-[clamp(1.75rem,6vw,3.5rem)] leading-tight text-primary mt-4 mb-4">
              {product.name} Supplier in {gulf.name}
            </h1>
            <p className="max-w-3xl text-gray-600 leading-relaxed">
              {product.name}{product.casNumber ? ` (CAS ${product.casNumber})` : ""} supplied by
              Vasudev Chemo Pharma to {gulf.name} via {gulf.mainPort}, with {transit} transit
              from India. Batch COA, GHS-compliant SDS, and {gulf.regulatoryBody} documentation
              provided with every shipment.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/contact?product=${encodeURIComponent(product.slug)}&country=${gulf.slug}`}
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark transition-colors text-white text-sm font-medium px-8 py-4 rounded-full"
              >
                Request a Quote for {gulf.name}
              </Link>
              <Link
                href={`/product/${product.slug}`}
                className="inline-flex items-center gap-2 border border-accent text-accent hover:bg-accent/10 transition-colors text-sm font-medium px-8 py-4 rounded-full"
              >
                View full product details →
              </Link>
            </div>
          </section>

          {/* Quick facts */}
          <section className="mb-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {facts.map((f) => (
              <div key={f.label} className="bg-light rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">{f.label}</p>
                <p className="text-sm text-primary font-medium">{f.value}</p>
              </div>
            ))}
          </section>

          {/* Loading ports + operations */}
          <section className="mb-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-2xl p-6">
              <h2 className="font-heading text-h5 text-primary mb-3">Loading Ports (India)</h2>
              <ul className="space-y-2">
                {loadingPorts.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            {gulf.operations.length > 0 && (
              <div className="border border-gray-200 rounded-2xl p-6 bg-light">
                <h2 className="font-heading text-h5 text-primary mb-3">Key Operations in {gulf.name}</h2>
                <ul className="space-y-2">
                  {gulf.operations.map((op) => (
                    <li key={op} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      {op}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {/* Local brand equivalents */}
          {localBrands.length > 0 && (
            <section className="mb-14">
              <h2 className="font-heading text-h3 text-primary mb-4">
                Brand Equivalents in {gulf.name}
              </h2>
              <p className="max-w-3xl text-sm text-gray-600 mb-4">
                {product.name} is a direct equivalent to the following brands used in {gulf.name}:
              </p>
              <div className="flex flex-wrap gap-2">
                {localBrands.map((b) => (
                  <span key={b} className="bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full">
                    {b}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Local language names */}
          {localNames.length > 0 && (
            <section className="mb-14">
              <h2 className="font-heading text-h3 text-primary mb-4">Also Known As (Local Names)</h2>
              <div className="flex flex-wrap gap-2">
                {localNames.map((n) => (
                  <span key={n} className="bg-light text-gray-700 text-sm px-4 py-2 rounded-full">
                    {n}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* FAQ */}
          {faqs.length > 0 && (
            <section className="mb-14">
              <h2 className="font-heading text-h3 text-primary mb-6">
                {gulf.name} Supply — FAQs
              </h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <details key={faq.question} className="border border-gray-200 rounded-2xl overflow-hidden group">
                    <summary className="px-6 py-4 cursor-pointer flex items-center justify-between font-medium text-primary hover:bg-gray-50 transition-colors">
                      {faq.question}
                      <span className="text-accent ml-4 transition-transform group-open:rotate-45 text-xl">+</span>
                    </summary>
                    <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">{faq.answer}</div>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="mb-4">
            <div className="bg-primary rounded-3xl p-10 lg:p-14 text-center">
              <h2 className="font-heading text-h3 text-white mb-4">
                Import {product.name} to {gulf.name}
              </h2>
              <p className="text-white/70 max-w-xl mx-auto mb-8">
                Get CIF {gulf.mainPort} pricing, request a sample, or ask for the technical
                data sheet. Our export team responds within 24 hours.
              </p>
              <Link
                href={`/contact?product=${encodeURIComponent(product.slug)}&country=${gulf.slug}`}
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark transition-colors text-white text-sm font-medium px-8 py-4 rounded-full"
              >
                Request a Quote
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
