import type { BlogEntry } from "./seo-blog-data";

/* ------------------------------------------------------------------ */
/*  VASSOL 40% & 90% — Sodium Cumene Sulfonate (SCS) product article  */
/*  Client-supplied copy; keep wording as written. Cross-links to the */
/*  SCS/SXS product pages and the hydrotropes hub.                    */
/* ------------------------------------------------------------------ */

const AUTHOR = "Vasudev Chemo Pharma Technical Team";
const CREDENTIALS =
  "ISO 9001:2015 Certified Manufacturer of Industrial & Specialty Chemicals";

const IMG_SCS_VASSOL =
  "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/Blogs/sodium-cumene-sulfonate-scs-40-90-vassol.png";

export const scsVassol4090ArticlesData: Record<string, BlogEntry> = {
  "sodium-cumene-sulfonate-scs-40-90-vassol": {
    title: "Sodium Cumene Sulfonate (SCS) – 40% & 90% | VASSOL",
    metaTitle: "Sodium Cumene Sulfonate (SCS) 40% & 90% | VASSOL Supplier",
    metaDescription:
      "VASSOL Sodium Cumene Sulfonate (SCS) in 40% liquid and 90% powder grades: an anionic hydrotrope for detergents, electroplating and textiles. Bulk supply.",
    date: "Oct 7, 2026",
    lastUpdated: "Oct 7, 2026",
    category: "Specialty Chemicals",
    image: IMG_SCS_VASSOL,
    imageAlt:
      "VASSOL 40% liquid drum and VASSOL 90% powder bag of Sodium Cumene Sulfonate (SCS) with key industrial applications",
    excerpt:
      "Vasudev Chemo Pharma is a manufacturer and supplier of Sodium Cumene Sulfonate (SCS), available in 40% liquid and 90% powder grades, designed for high-performance industrial applications.",
    author: AUTHOR,
    authorCredentials: CREDENTIALS,
    sections: [
      {
        heading: "Key Benefits of Sodium Cumene Sulfonate (SCS)",
        id: "key-benefits",
        body: "SCS is an effective anionic hydrotrope and surfactant that helps improve solubility, detergency, wetting and formulation performance.",
      },
      {
        heading: "Key Applications of SCS",
        id: "key-applications",
        body: "Key applications of Sodium Cumene Sulfonate include electroplating & metal finishing, detergents & cleaners, textile processing, paints & coatings, oilfield chemicals, leather processing and industrial cleaning.",
      },
      {
        heading: "VASSOL 40% & VASSOL 90% Bulk Supply",
        id: "bulk-supply",
        body: "Bulk supply available. Vasudev Chemo Pharma is a manufacturer, supplier and exporter of VASSOL 40% and VASSOL 90%, based in Ankleshwar GIDC, Gujarat, India.",
      },
    ],
    bullets: [
      "High detergency and wetting power",
      "Excellent solubility",
      "Good formulation compatibility",
      "Stable over a wide pH range",
      "Effective dispersing properties",
      "Available in liquid and powder forms",
      "Suitable for industrial formulations",
    ],
    quote:
      "VASSOL 40% & VASSOL 90% – Reliable SCS for Industrial Applications.",
    closing:
      "For bulk supply of VASSOL 40% and VASSOL 90% Sodium Cumene Sulfonate, contact the Vasudev Chemo Pharma sales team by phone or email using the contact links above.",
    internalLinks: [
      {
        text: "Sodium Cumene Sulfonate 40% (VASSOL 40%) — product page",
        href: "/product/sodium-cumene-sulfonate-40",
      },
      {
        text: "Sodium Cumene Sulfonate 90% (VASSOL 90%) — product page",
        href: "/product/sodium-cumene-sulfonate-90",
      },
      {
        text: "Sodium Xylene Sulfonate 40% — alternative liquid hydrotrope",
        href: "/product/sodium-xylene-sulfonate-40",
      },
      {
        text: "Sodium Xylene Sulfonate 90% — powder hydrotrope alternative",
        href: "/product/sodium-xylene-sulfonate-90",
      },
      { text: "Hydrotropes guide", href: "/hydrotropes" },
      { text: "Call sales: +91 98988 37713", href: "tel:+919898837713" },
      {
        text: "Email: sales@vasudevchemopharma.com",
        href: "mailto:sales@vasudevchemopharma.com",
      },
    ],
    externalLinks: [],
    relatedProductSlug: "sodium-cumene-sulfonate-40",
  },
};

export const scsVassol4090BlogListItems = Object.entries(
  scsVassol4090ArticlesData,
).map(([slug, blog]) => ({
  slug,
  title: blog.title,
  category: blog.category,
  date: blog.date,
  image: blog.image,
  imageAlt: blog.imageAlt,
}));
