import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import ArticleSchema from "@/components/seo/ArticleSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import {
  buildAbsoluteUrl,
  FEATURED_RESOURCE_SLUGS,
  MEA_TRIAZINE_PRODUCT_PATH,
  SITE_URL,
} from "@/lib/seo/seo-route-helpers";
import { RESOURCE_ARTICLES_DATA } from "@/lib/seo/resource-articles-data";

export type LandingPageData = {
  slug: string;
  category: "solutions" | "location" | "about" | "supply" | "export";
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: { heading: string; id: string; body: string }[];
  specs: { label: string; value: string }[];
  benefits: string[];
  faqs: { question: string; answer: string; id?: string }[];
  keywords?: string[];
  datePublished?: string | Date;
  dateModified?: string | Date;
  /**
   * Optional absolute path (e.g. "/solutions/h2s-scavenger") to use as the
   * canonical URL instead of this page's own path. Used to consolidate
   * near-duplicate variants onto one authoritative page WITHOUT removing
   * the variant — it stays live and crawlable but points ranking signals
   * at the canonical page.
   */
  canonicalOverride?: string;
};

type Props = {
  page: LandingPageData;
  categoryPath: string;
};

function getWordCount(page: LandingPageData): number {
  const text = [page.intro, ...page.sections.map((section) => section.body)].join(" ");
  return text.trim().split(/\s+/).length;
}

function toIsoDate(value?: string | Date): string {
  if (value instanceof Date) {
    return value.toISOString().split("T")[0];
  }

  if (typeof value === "string") {
    const trimmed = value.trim();
    if (/^\d{4}-\d{2}-\d{2}/.test(trimmed)) {
      return trimmed.slice(0, 10);
    }

    const parsed = new Date(trimmed);
    if (!Number.isNaN(parsed.getTime())) {
      return parsed.toISOString().split("T")[0];
    }
  }

  return new Date().toISOString().split("T")[0];
}

export default function LandingPageLayout({ page, categoryPath }: Props) {
  const canonicalPath = `/${categoryPath}/${page.slug}`;
  const relatedResources = FEATURED_RESOURCE_SLUGS.slice(0, 3)
    .map((resourceSlug) => RESOURCE_ARTICLES_DATA[resourceSlug])
    .filter(Boolean);

  const categoryLabel =
    page.category.charAt(0).toUpperCase() + page.category.slice(1);
  const datePublished = toIsoDate(page.datePublished);
  const dateModified = toIsoDate(page.dateModified);

  return (
    <>
      <ArticleSchema
        headline={page.title}
        description={page.description}
        url={buildAbsoluteUrl(canonicalPath)}
        image="https://www.vasudevchemopharma.com/images/vcp-logo.png"
        datePublished={datePublished}
        dateModified={dateModified}
        authorName="Vasudev Chemo Pharma Technical Team"
        authorCredentials="Technical Content"
        wordCount={getWordCount(page)}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: categoryLabel, url: `${SITE_URL}/${categoryPath}` },
          { name: page.h1, url: buildAbsoluteUrl(canonicalPath) },
        ]}
      />
      <FAQSchema items={page.faqs} />

      <main className="pt-28 pb-20">
        <section className="mb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-4xl">
              <SectionLabel>{categoryLabel} Guide</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display text-primary mt-4">
                {page.h1}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-secondary">
                {page.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={MEA_TRIAZINE_PRODUCT_PATH}
                  className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
                >
                  View MEA Triazine 78% product
                </Link>
                <Link
                  href="/contact?product=mea-triazine-78-h2s-scavenger"
                  className="inline-flex items-center rounded-full border border-accent px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent/10"
                >
                  Ask for application support
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="max-w-container mx-auto grid grid-cols-1 gap-8 px-6 lg:grid-cols-[1fr_320px] lg:px-10">
            <div className="space-y-10">
              {page.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-28">
                  <h2 className="font-heading text-h3 text-primary mb-4">
                    {section.heading}
                  </h2>
                  <div className="whitespace-pre-line leading-relaxed text-secondary">
                    {section.body}
                  </div>
                </section>
              ))}
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl border border-gray-200 bg-light p-6">
                <h2 className="font-heading text-h4 text-primary">Quick specs</h2>
                <dl className="mt-5 space-y-4 text-sm">
                  {page.specs.map((spec) => (
                    <div key={spec.label}>
                      <dt className="font-semibold uppercase tracking-wide text-accent">
                        {spec.label}
                      </dt>
                      <dd className="mt-1 text-primary">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-6">
                <h2 className="font-heading text-h4 text-primary">Benefits</h2>
                <ul className="mt-5 space-y-3 text-sm text-secondary">
                  {page.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section className="mb-16">
          <div className="max-w-container mx-auto grid grid-cols-1 gap-8 px-6 lg:grid-cols-2 lg:px-10">
            <div className="rounded-3xl border border-gray-200 bg-white p-6">
              <h2 className="font-heading text-h4 text-primary">Related products</h2>
              <div className="mt-5 space-y-3">
                <Link
                  href="/product/mea-triazine-78-h2s-scavenger"
                  className="block rounded-2xl bg-light px-4 py-3 text-sm font-medium text-primary transition-all hover:bg-accent/10 hover:text-accent"
                >
                  MEA Triazine 78% H2S Scavenger
                </Link>
                <Link
                  href="/product/mma-triazine-40"
                  className="block rounded-2xl bg-light px-4 py-3 text-sm font-medium text-primary transition-all hover:bg-accent/10 hover:text-accent"
                >
                  MMA Triazine 40% (BTX-Free)
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6">
              <h2 className="font-heading text-h4 text-primary">Technical resources</h2>
              <div className="mt-5 space-y-3">
                {relatedResources.map((resource) => (
                  <Link
                    key={resource.slug}
                    href={`/resources/${resource.slug}`}
                    className="block rounded-2xl bg-light px-4 py-3 text-sm font-medium text-primary transition-all hover:bg-accent/10 hover:text-accent"
                  >
                    {resource.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h3 text-primary mb-6">Frequently asked questions</h2>
            <div className="space-y-4">
              {page.faqs.map((faq, index) => (
                <details
                  key={faq.id ?? `faq-${index}`}
                  className="overflow-hidden rounded-2xl border border-gray-200 group"
                >
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-medium text-primary transition-colors hover:bg-gray-50">
                    {faq.question}
                    <span className="ml-4 text-xl text-accent transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-4 text-sm leading-relaxed text-secondary">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
