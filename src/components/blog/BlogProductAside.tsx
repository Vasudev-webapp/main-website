import Link from "next/link";
import type { Product } from "@/lib/types";

/*
 * BlogProductAside — sticky product card shown on the right of blog posts.
 *
 * Purpose: make it obvious which product an article relates to and give
 * readers a direct path to the product page and to an enquiry, which helps
 * convert blog traffic into inquiries.
 *
 * When `product` is provided it shows product details + "Visit Product Page"
 * and "Contact Us" links. When it is absent (a blog with no product
 * association) it falls back to a generic company enquiry card so the layout
 * and the contact CTA remain consistent across all posts.
 */

function shortBlurb(product: Product): string {
  const source = (product.metaDescription || product.description || "").trim();
  if (!source) return "";
  const match = source.match(/^.*?[.!?](\s|$)/);
  const firstSentence = (match ? match[0] : source).trim();
  return firstSentence.length > 180
    ? `${firstSentence.slice(0, 177)}…`
    : firstSentence;
}

const PRIMARY_BTN =
  "inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dark";
const SECONDARY_BTN =
  "inline-flex items-center justify-center gap-2 rounded-full border border-accent px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent/10";

export default function BlogProductAside({ product }: { product?: Product }) {
  if (!product) {
    return (
      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">
          Vasudev Chemo Pharma
        </span>
        <h3 className="font-heading text-h5 font-semibold text-primary mt-1">
          Talk to our technical team
        </h3>
        <p className="mt-3 text-sm text-secondary leading-relaxed">
          ISO 9001:2015 certified manufacturer &amp; exporter of industrial and
          specialty chemicals. Request a quote, a free sample, or a technical
          data sheet.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <Link href="/product" className={PRIMARY_BTN}>
            Explore Products
          </Link>
          <Link href="/contact" className={SECONDARY_BTN}>
            Contact Us
          </Link>
        </div>
      </div>
    );
  }

  const blurb = shortBlurb(product);

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">
        {product.subcategory || "Featured product"}
      </span>
      <h3 className="font-heading text-h5 font-semibold text-primary mt-1">
        {product.name}
      </h3>

      {product.formula || product.casNumber ? (
        <dl className="mt-4 space-y-1.5 text-sm">
          {product.formula ? (
            <div className="flex gap-2">
              <dt className="font-medium text-gray-600">Formula:</dt>
              <dd className="text-gray-500">{product.formula}</dd>
            </div>
          ) : null}
          {product.casNumber ? (
            <div className="flex gap-2">
              <dt className="font-medium text-gray-600">CAS:</dt>
              <dd className="text-gray-500">{product.casNumber}</dd>
            </div>
          ) : null}
        </dl>
      ) : null}

      {blurb ? (
        <p className="mt-4 text-sm text-secondary leading-relaxed">{blurb}</p>
      ) : null}

      <div className="mt-6 flex flex-col gap-3">
        <Link href={`/product/${product.slug}`} className={PRIMARY_BTN}>
          Visit Product Page
        </Link>
        <Link
          href={`/contact?product=${encodeURIComponent(product.slug)}`}
          className={SECONDARY_BTN}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
