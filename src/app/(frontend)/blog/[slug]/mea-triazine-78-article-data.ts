import type { BlogEntry } from "./seo-blog-data";

// Client-supplied copy from blog-temp/blog-content.txt; keep wording as written.
export const meaTriazine78ArticlesData: Record<string, BlogEntry> = {
  "mea-triazine-78-h2s-scavenger-oil-gas": {
    title: "MEA Triazine 78% | High-Performance H₂S Scavenger for the Oil & Gas Industry",
    metaTitle: "MEA Triazine 78% | H₂S Scavenger for the Oil & Gas Industry",
    metaDescription: "Vasudev Chemo Pharma supplies MEA Triazine 78% (CAS No. 4719-04-4), a high-performance H₂S scavenger for sour gas treatment, pipeline protection and oil & gas processing. Bulk supply and worldwide inquiries welcome.",
    date: "Oct 22, 2026",
    lastUpdated: "Oct 22, 2026",
    category: "H2S Scavengers",
    image: "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/Blogs/mea-triazine-78.png",
    imageAlt: "MEA Triazine 78% H₂S scavenger graphic showing oil and gas facilities, pipelines and storage tanks",
    excerpt: "Vasudev Chemo Pharma is committed to delivering reliable chemical solutions for the oil and gas industry. Our MEA Triazine 78% (CAS No. 4719-04-4) is a high-performance H₂S scavenger designed to support hydrogen sulphide management in oil and gas operations.",
    author: "Vasudev Chemo Pharma",
    authorCredentials: "",
    sections: [
      {
        heading: "Key Applications:",
        id: "key-applications",
        body: ""
      },
      {
        heading: "Why choose Vasudev Chemo Pharma?",
        id: "why-choose-vasudev-chemo-pharma",
        body: "- Consistent product quality\n- Reliable supply for industrial requirements\n- Bulk supply capability\n- Export-oriented supply\n- Technical and commercial support for product inquiries"
      }
    ],
    bullets: [
      "Sour Gas Treatment",
      "Pipeline Protection",
      "Oil & Gas Processing",
      "Storage Tank Protection",
      "Corrosion Mitigation Support"
    ],
    quote: "Vasudev Chemo Pharma — Your Partner in Oil & Gas Chemical Solutions.",
    closing: "We welcome inquiries from oil and gas operators, chemical distributors, trading companies and industrial chemical buyers worldwide.\n\nAvailable for bulk industrial requirements and customized supply.\nContact us for product specifications, COA, pricing and bulk supply inquiries.\n\nDisclaimer: Product suitability and dosage depend on the final application and operating conditions. Technical specifications should be confirmed through the product TDS/COA.\n\nHashtags: #MEATriazine #H2SScavenger #OilAndGas #SourGasTreatment #GasProcessing #OilfieldChemicals #ChemicalManufacturing #IndustrialChemicals #PipelineProtection #CorrosionControl #EnergyIndustry #Petrochemicals #ChemicalTrading #BulkChemicals #VasudevChemoPharma",
    internalLinks: [
      {
        text: "MEA Triazine 78%",
        href: "/product/mea-triazine-78-h2s-scavenger"
      },
      {
        text: "Email: sales@vasudevchemopharma.com",
        href: "mailto:sales@vasudevchemopharma.com"
      },
      {
        text: "Phone: +91 98988 37713",
        href: "tel:+919898837713"
      }
    ],
    externalLinks: [
      {
        text: "Website: www.vasudevchemopharma.com",
        href: "https://www.vasudevchemopharma.com"
      }
    ],
    relatedProductSlug: "mea-triazine-78-h2s-scavenger"
  }
};

export const meaTriazine78BlogListItems = Object.entries(meaTriazine78ArticlesData).map(
  ([slug, blog]) => ({
    slug,
    title: blog.title,
    category: blog.category,
    date: blog.date,
    image: blog.image,
    imageAlt: blog.imageAlt,
  }),
);
