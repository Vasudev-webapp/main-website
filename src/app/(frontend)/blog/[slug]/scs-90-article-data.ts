import type { BlogEntry } from "./seo-blog-data";

/* ------------------------------------------------------------------ */
/*  Sodium Cumene Sulphonate 90% — product article                    */
/*  Client-supplied copy; keep wording as written. Cross-links to the */
/*  SCS/SXS product pages and the hydrotropes hub.                    */
/* ------------------------------------------------------------------ */

const AUTHOR = "Vasudev Chemo Pharma Technical Team";
const CREDENTIALS =
  "ISO 9001:2015 Certified Manufacturer of Industrial & Specialty Chemicals";

const IMG_SCS_90 =
  "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/Blogs/sodium-cumene-sulphonate-90-high-performance-industrial-surfactant.png";

export const scs90ArticlesData: Record<string, BlogEntry> = {
  "sodium-cumene-sulphonate-90-high-performance-industrial-surfactant": {
    title:
      "Sodium Cumene Sulphonate 90% | High-Performance Industrial Surfactant",
    metaTitle: "Sodium Cumene Sulphonate 90% (CAS 28348-53-0) Manufacturer",
    metaDescription:
      "Sodium Cumene Sulphonate 90% (CAS 28348-53-0) for detergent, dishwashing, personal care and textile formulations. Bulk and export-oriented supply from India.",
    date: "Oct 7, 2026",
    lastUpdated: "Oct 7, 2026",
    category: "Specialty Chemicals",
    image: IMG_SCS_90,
    imageAlt:
      "Sodium Cumene Sulfonate 90% (CAS 28348-53-0) powder bag and bowl with detergent, dishwashing, personal care and textile applications",
    excerpt:
      "At Vasudev Chemo Pharma, we manufacture and supply Sodium Cumene Sulphonate 90% (CAS No. 28348-53-0) for a wide range of industrial and formulation applications.",
    author: AUTHOR,
    authorCredentials: CREDENTIALS,
    sections: [
      {
        heading: "Applications of Sodium Cumene Sulphonate 90%",
        id: "applications",
        body: "Our Sodium Cumene Sulphonate 90% is suitable for applications including:",
      },
      {
        heading: "Why Choose Our SCS 90%?",
        id: "why-choose-scs-90",
        body: "Our SCS 90% offers consistent quality, excellent emulsifying properties, reliable performance, versatile industrial applications, bulk supply capability and export-oriented supply.",
      },
      {
        heading: "Bulk and Customized Supply",
        id: "bulk-supply",
        body: "Sodium Cumene Sulphonate 90% is available for bulk industrial requirements and customized supply.",
      },
    ],
    bullets: [
      "Detergent & Cleaning Formulations",
      "Dishwashing Products",
      "Personal Care Formulations",
      "Textile Processing",
      "Industrial Cleaning",
      "Formulation Stability & Foam Control",
    ],
    quote: "Vasudev Chemo Pharma — Your Partner in Better Formulations.",
    closing:
      "For bulk or customized supply of Sodium Cumene Sulphonate 90%, contact Vasudev Chemo Pharma by phone or email using the contact links above.",
    internalLinks: [
      {
        text: "Sodium Cumene Sulfonate 90% — product page",
        href: "/product/sodium-cumene-sulfonate-90",
      },
      {
        text: "Sodium Cumene Sulfonate 40% — liquid hydrotrope version",
        href: "/product/sodium-cumene-sulfonate-40",
      },
      {
        text: "Sodium Xylene Sulfonate 90% — alternative powder hydrotrope",
        href: "/product/sodium-xylene-sulfonate-90",
      },
      {
        text: "Sodium Xylene Sulfonate 40% — alternative liquid hydrotrope",
        href: "/product/sodium-xylene-sulfonate-40",
      },
      { text: "Hydrotropes guide", href: "/hydrotropes" },
      { text: "Call: +91 9898837713", href: "tel:+919898837713" },
      {
        text: "Email: info@vasudevchemopharma.com",
        href: "mailto:info@vasudevchemopharma.com",
      },
    ],
    externalLinks: [],
    relatedProductSlug: "sodium-cumene-sulfonate-90",
  },
};

export const scs90BlogListItems = Object.entries(scs90ArticlesData).map(
  ([slug, blog]) => ({
    slug,
    title: blog.title,
    category: blog.category,
    date: blog.date,
    image: blog.image,
    imageAlt: blog.imageAlt,
  }),
);
