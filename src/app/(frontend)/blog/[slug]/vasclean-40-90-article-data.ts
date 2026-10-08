import type { BlogEntry } from "./seo-blog-data";

/* ------------------------------------------------------------------ */
/*  VASCLEAN 40 & 90 — Sodium Xylene Sulphonate product article       */
/*  Client-supplied copy; keep wording as written. The TDS/COA        */
/*  disclaimer must stay visible. Cross-links to the SXS/SCS product  */
/*  pages and the hydrotropes hub.                                    */
/* ------------------------------------------------------------------ */

const AUTHOR = "Vasudev Chemo Pharma Technical Team";
const CREDENTIALS =
  "ISO 9001:2015 Certified Manufacturer of Industrial & Specialty Chemicals";

const IMG_VASCLEAN =
  "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/Blogs/vasclean-40-90-sodium-xylene-sulphonate.png";

export const vasclean4090ArticlesData: Record<string, BlogEntry> = {
  "vasclean-40-90-sodium-xylene-sulphonate": {
    title: "VASCLEAN 40 & VASCLEAN 90 (Sodium Xylene Sulphonate 40% & 90%)",
    metaTitle: "VASCLEAN 40 & 90 | Sodium Xylene Sulphonate (SXS) Hydrotrope",
    metaDescription:
      "VASCLEAN 40 & 90 (Sodium Xylene Sulphonate 40% & 90%) are hydrotropic solutions for cleaning and detergent formulations, degreasers and laundry detergents.",
    date: "Oct 7, 2026",
    lastUpdated: "Oct 7, 2026",
    category: "Specialty Chemicals",
    image: IMG_VASCLEAN,
    imageAlt:
      "VASCLEAN 40 drum and VASCLEAN 90 bag of Sodium Xylene Sulphonate hydrotrope for industrial and institutional cleaning formulations",
    excerpt:
      "Vasudev Chemo Pharma introduces VASCLEAN 40 (Sodium Xylene Sulphonate 40%) & VASCLEAN 90 (Sodium Xylene Sulphonate 90%), hydrotropic solutions designed for use in cleaning and detergent formulations.",
    author: AUTHOR,
    authorCredentials: CREDENTIALS,
    sections: [
      {
        heading: "How VASCLEAN Supports Cleaning Formulations",
        id: "formulation-applications",
        body: "Our products are intended to support formulation performance by providing solubilizing, coupling and hydrotropic properties, helping formulators develop stable liquid cleaning systems. Potential formulation applications include:",
      },
      {
        heading: "Quality and Supply",
        id: "quality-and-supply",
        body: "VASCLEAN 40 and VASCLEAN 90 are made in India by Vasudev Chemo Pharma for industrial cleaning and detergent formulators.",
      },
      {
        heading: "Product Suitability and Specifications",
        id: "product-suitability",
        body: "Product suitability and dosage depend on the final formulation and application. Technical specifications should be confirmed through the product TDS/COA.",
      },
    ],
    bullets: [
      "Industrial & institutional cleaners",
      "Degreasers",
      "Hard-surface cleaning formulations",
      "Dishwashing detergents",
      "Laundry detergents",
      "Metalworking cleaners",
      "Other HI&I cleaning formulations",
    ],
    quote:
      "We focus on consistent product quality, reliable supply and formulation-oriented solutions for industrial customers.",
    closing:
      "To discuss VASCLEAN 40 or VASCLEAN 90 for your cleaning or detergent formulation, contact the Vasudev Chemo Pharma sales team by phone or email using the contact links above.",
    internalLinks: [
      {
        text: "Sodium Xylene Sulfonate 40% (VASCLEAN 40) — product page",
        href: "/product/sodium-xylene-sulfonate-40",
      },
      {
        text: "Sodium Xylene Sulfonate 90% (VASCLEAN 90) — product page",
        href: "/product/sodium-xylene-sulfonate-90",
      },
      {
        text: "Sodium Cumene Sulfonate 40% — alternative liquid hydrotrope",
        href: "/product/sodium-cumene-sulfonate-40",
      },
      {
        text: "Sodium Cumene Sulfonate 90% — alternative powder hydrotrope",
        href: "/product/sodium-cumene-sulfonate-90",
      },
      { text: "Hydrotropes guide", href: "/hydrotropes" },
      { text: "Call sales: +91 98988 37713", href: "tel:+919898837713" },
      {
        text: "Email: sales@vasudevchemopharma.com",
        href: "mailto:sales@vasudevchemopharma.com",
      },
    ],
    externalLinks: [],
    relatedProductSlug: "sodium-xylene-sulfonate-40",
  },
};

export const vasclean4090BlogListItems = Object.entries(
  vasclean4090ArticlesData,
).map(([slug, blog]) => ({
  slug,
  title: blog.title,
  category: blog.category,
  date: blog.date,
  image: blog.image,
  imageAlt: blog.imageAlt,
}));
