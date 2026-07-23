import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { applyPageMetaOverride } from "@/lib/seo/page-meta-overrides";
import { getAllProducts } from "@/lib/products-payload";
import { CUSTOM_LANDING_PAGES_DATA } from "@/lib/seo/custom-landing-pages-data";
import { COUNTRY_PAGES_DATA } from "@/lib/seo/country-pages-data";
import { COMPETITOR_PAGES_DATA } from "@/lib/seo/competitor-comparison-data";
import { APPLICATION_PAGES_DATA } from "@/lib/seo/application-pages-data";
import { RESOURCE_ARTICLES_DATA } from "@/lib/seo/resource-articles-data";
import { blogData } from "@/app/(frontend)/blog/[slug]/seo-blog-data";
import { getAllBlogSlugs } from "@/lib/blogs-payload";
import {
  buildApplicationPagePath,
  buildComparisonPagePath,
  buildCountryPagePath,
  buildResourceArticlePath,
} from "@/lib/seo/seo-route-helpers";

export const revalidate = 3600;

export const metadata: Metadata = applyPageMetaOverride("/sitemap", {
  title: "Site Directory & Visual Sitemap | Vasudev Chemo Pharma",
  description:
    "Explore the complete page directory of Vasudev Chemo Pharma. Discover how our H2S scavengers, industrial biocides, and hydrotropes connect to various applications, locations, and global supply hubs.",
  alternates: {
    canonical: "https://www.vasudevchemopharma.com/sitemap",
  },
  openGraph: {
    title: "Visual Site Sitemap | Vasudev Chemo Pharma",
    description:
      "Full directory of Vasudev Chemo Pharma's products, solutions, manufacturing sites, and global logistics connections.",
    url: "https://www.vasudevchemopharma.com/sitemap",
  },
});

const mainPages = [
  { label: "Home Page", href: "/", desc: "Overview of products, services, and company credentials." },
  { label: "About Us", href: "/about", desc: "Our history, ISO certifications, and manufacturing capacity." },
  { label: "All Products", href: "/product", desc: "Our complete catalog of industrial and specialty chemicals." },
  { label: "Services", href: "/service", desc: "Custom synthesis, global logistics, and bulk contract supply." },
  { label: "Industries Served", href: "/industries", desc: "Sectors we support including oil & gas, water treatment, and paper mills." },
  { label: "Industry Insights (Blog)", href: "/blog", desc: "Technical articles on H2S abatement, biocides, and chemistry." },
  { label: "Case Studies", href: "/case-study", desc: "Real-world desulfurization and preservation project outcomes." },
  { label: "Product Comparisons", href: "/compare", desc: "Side-by-side analysis of various chemical formulations." },
  { label: "Contact Us", href: "/contact", desc: "Inquire for bulk pricing, request COAs, MSDS, or samples." },
];

const productNodes = [
  {
    id: "mea-triazine",
    name: "MEA Triazine 78% H2S Scavenger",
    href: "/product/mea-triazine-78-h2s-scavenger",
    description: "Our flagship amine-based non-regenerative hydrogen sulfide scavenger for oilfield and gas operations.",
    connections: [
      {
        group: "Applications & Technical Guides",
        pages: [
          { label: "Direct Injection vs Contactor Tower", href: "/triazine-injection-vs-contactor-tower" },
          { label: "SAGD H2S Scavenging", href: "/sagd-h2s-scavenger" },
          { label: "LPG H2S Scavenging", href: "/lpg-h2s-scavenger" },
          { label: "Sour Water Stripper H2S Control", href: "/sour-water-stripper-h2s" },
          { label: "Refinery Fuel-Gas H2S Scavenging", href: "/refinery-fuel-gas-h2s-scavenger" },
          { label: "Storage Tank Vapor-Space H2S", href: "/storage-tank-h2s-scavenger" },
          { label: "Marine & Bunker-Fuel H2S Suppression", href: "/marine-bunker-fuel-h2s-scavenger" },
          { label: "Produced Water H2S Control", href: "/produced-water-h2s-scavenger" },
          { label: "Tank Truck & Railcar Transport H2S", href: "/tank-truck-railcar-h2s-transport" },
          { label: "Spent Triazine & Residual-Amine Monitoring", href: "/spent-triazine-monitoring" },
          { label: "Foaming & Emulsion Troubleshooting", href: "/triazine-foaming-emulsion-troubleshooting" },
          { label: "Custom Triazine Blends & Formulations", href: "/custom-triazine-blends-formulations" },
          { label: "Triazine + Corrosion Inhibitor Compatibility", href: "/triazine-corrosion-inhibitor-compatibility" },
          { label: "Triazine vs Nitrite/Nitrate Scavengers", href: "/triazine-vs-nitrite-scavenger" },
          { label: "Triazine vs Non-Triazine Scavengers", href: "/triazine-vs-non-triazine-scavenger" },
        ],
      },
      {
        group: "Solutions & Chemistry Guides",
        pages: [
          { label: "Triazine Based H2S Scavenger", href: "/solutions/triazine-based-h2s-scavenger" },
          { label: "H2S Scavenger Chemicals", href: "/solutions/h2s-scavenger" },
          { label: "Hydrogen Sulfide Scavengers", href: "/solutions/hydrogen-sulfide-scavenger" },
          { label: "MEA Triazine Scavenger", href: "/solutions/mea-triazine-h2s-scavenger" },
          { label: "High Performance Scavengers", href: "/solutions/high-performance-triazine-scavenger" },
          { label: "Liquid Scavenger Chemistry", href: "/solutions/liquid-h2s-scavenger-manufacturer" },
          { label: "Sulfide Scavengers", href: "/solutions/sulfide-scavenger" },
          { label: "Hydrogen Sulfide Removal Solutions", href: "/solutions/hydrogen-sulfide-removal" },
          { label: "Triazine Scavenger Chemical", href: "/solutions/triazine-scavenger-chemical" },
          { label: "H2S Treatment Chemical Package", href: "/solutions/h2s-treatment-chemical" },
          { label: "H2S Scavenger for Oil & Gas", href: "/h2s-scavenger-oil-gas" },
          { label: "How H2S Scavengers Work", href: "/how-h2s-scavengers-work" },
          { label: "MEA Triazine Prices & Dosing Cost", href: "/mea-triazine-prices" },
        ],
      },
      {
        group: "Chemical-Name Pages (Hexahydro Triazine)",
        pages: [
          { label: "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine (CAS 4719-04-4)", href: "/solutions/hexahydro-1-3-5-tris-2-hydroxyethyl-s-triazine" },
          { label: "Hexahydro-triazine Manufacturer in India", href: "/solutions/hexahydro-tris-2-hydroxyethyl-s-triazine-manufacturer-india" },
          { label: "Hexahydro-triazine Supplier & Price", href: "/solutions/hexahydro-tris-2-hydroxyethyl-s-triazine-supplier-price" },
          { label: "Hexahydro-triazine Exporter from India", href: "/solutions/hexahydro-tris-2-hydroxyethyl-s-triazine-exporter-india" },
          { label: "Hexahydro-triazine SDS & Specifications", href: "/solutions/hexahydro-tris-2-hydroxyethyl-s-triazine-sds-specifications" },
          { label: "Hexahydro-triazine Uses & Applications", href: "/solutions/hexahydro-tris-2-hydroxyethyl-s-triazine-uses-applications" },
        ],
      },
      {
        group: "Export & Supply Regions",
        pages: [
          { label: "MEA Triazine 78% Supplier Hub", href: "/supply/mea-triazine-78-supplier" },
          { label: "H2S Control Chemical Supplier", href: "/supply/h2s-control-chemical-supplier" },
          { label: "Global Country Supply Hub", href: "/supply/mea-triazine-78" },
          { label: "Triazine H2S Scavenger Exporter", href: "/export/triazine-h2s-scavenger-exporter" },
          { label: "Specialty Chemical Exporter India", href: "/export/specialty-chemical-exporter-india" },
        ],
      },
      {
        group: "Manufacturing & Location Hubs",
        pages: [
          { label: "Triazine H2S Scavenger Manufacturer", href: "/about/triazine-h2s-scavenger-manufacturer" },
          { label: "H2S Scavenger Manufacturer Ahmedabad", href: "/location/h2s-scavenger-manufacturer-ahmedabad" },
          { label: "H2S Scavenger Manufacturer Gujarat", href: "/location/h2s-scavenger-manufacturer-gujarat" },
          { label: "MEA Triazine Manufacturer Gujarat", href: "/location/mea-triazine-manufacturer-gujarat" },
          { label: "Triazine H2S Scavenger Ahmedabad India", href: "/location/triazine-based-h2s-scavenger-ahmedabad-india" },
          { label: "Oilfield Chemical Manufacturer Gujarat", href: "/location/oilfield-chemical-manufacturer-gujarat" },
          { label: "Chemical Manufacturer Oil & Gas India", href: "/location/chemical-manufacturer-oil-gas-india" },
        ],
      },
    ],
  },
  {
    id: "mma-triazine",
    name: "MMA Triazine 40% (BTX-Free)",
    href: "/product/mma-triazine-40",
    description: "Scale-preventive, low-scaling H2S scavenger optimized for high-temperature offshore environments.",
    connections: [
      {
        group: "Pricing & Sales",
        pages: [
          { label: "MMA Triazine 40% Price & Supplier — India", href: "/mma-triazine-40-price-supplier-india" },
          { label: "Buy MMA Triazine 40% H2S Scavenger", href: "/buy-mma-triazine-40-h2s-scavenger" },
          { label: "Bulk Order, Packaging & MOQ", href: "/mma-triazine-40-bulk-order-packaging-moq" },
          { label: "Export & Global Supply Countries", href: "/mma-triazine-40-export-supply-countries" },
          { label: "Specifications, COA & Datasheet", href: "/mma-triazine-40-specifications-coa-datasheet" },
        ],
      },
      {
        group: "Applications & Marketing",
        pages: [
          { label: "Why Choose MMA Triazine 40%", href: "/why-choose-mma-triazine-40-h2s-scavenger" },
          { label: "MMA Triazine 40% for Natural Gas Sweetening", href: "/mma-triazine-40-natural-gas-sweetening" },
          { label: "MMA Triazine 40% for Crude Oil Stabilisation", href: "/mma-triazine-40-crude-oil-stabilisation" },
          { label: "Applications & Industries Served", href: "/mma-triazine-40-applications-industries" },
          { label: "MMA Triazine 40% for Biogas H2S Removal", href: "/mma-triazine-40-biogas-h2s-removal" },
        ],
      },
      {
        group: "Research & Technical Guides",
        pages: [
          { label: "MMA Triazine CAS 108-74-7 Properties", href: "/mma-triazine-40-cas-108-74-7-properties" },
          { label: "How MMA Triazine Works (Reaction Chemistry)", href: "/how-mma-triazine-works-h2s-scavenging" },
          { label: "Dosage & Injection Rate Guide", href: "/mma-triazine-40-dosage-injection-rate-guide" },
          { label: "Synonyms & Trade Names", href: "/mma-triazine-40-synonyms-trade-names" },
          { label: "Safety, Handling & Storage", href: "/mma-triazine-40-safety-handling-storage" },
        ],
      },
      {
        group: "Solutions & Chemistry Guides",
        pages: [
          { label: "MEA Triazine vs MMA Triazine", href: "/mea-triazine-vs-mma-triazine" },
        ],
      },
      {
        group: "Manufacturing & Location Hubs",
        pages: [
          { label: "Oilfield Chemical Manufacturer Gujarat", href: "/location/oilfield-chemical-manufacturer-gujarat" },
          { label: "Chemical Manufacturer Oil & Gas India", href: "/location/chemical-manufacturer-oil-gas-india" },
        ],
      },
    ],
  },
  {
    id: "eddm",
    name: "EDDM (Ethylenedioxy)dimethanol — Non-Triazine H2S Scavenger",
    href: "/product/eddm-non-triazine-h2s-scavenger",
    description: "Slow-release formaldehyde-donor biocide and non-triazine H2S scavenger (CAS 3586-55-8) for water-based preservation and oil & gas desulfurization.",
    connections: [
      {
        group: "Solutions & Chemistry Guides",
        pages: [
          { label: "How EDDM Works (Formaldehyde-Donor Mechanism)", href: "/how-eddm-works-formaldehyde-donor" },
          { label: "EDDM CAS 3586-55-8 Properties & Specifications", href: "/eddm-cas-3586-55-8-properties" },
          { label: "EDDM Synonyms & Chemical Names", href: "/eddm-synonyms-trade-names" },
          { label: "EDDM vs Isothiazolinone Biocides", href: "/eddm-vs-isothiazolinone-biocides" },
          { label: "EDDM Multiphase H2S Scavenger", href: "/eddm-multiphase-h2s-scavenger" },
        ],
      },
      {
        group: "Applications & Selection",
        pages: [
          { label: "EDDM Grades 90% / 92% / 95% — Selection Guide", href: "/eddm-grades-selection-guide" },
          { label: "EDDM In-Can Preservative for Coatings & Adhesives", href: "/eddm-in-can-preservative-coatings" },
          { label: "EDDM Biocide for Metalworking Fluids", href: "/eddm-metalworking-fluid-biocide" },
          { label: "EDDM Dosage & Use-Level Guide", href: "/eddm-dosage-guide" },
        ],
      },
      {
        group: "Pricing & Supply",
        pages: [
          { label: "EDDM Price & Supplier — India & Bulk Export", href: "/eddm-price-supplier-india" },
        ],
      },
    ],
  },
  {
    id: "bkc-biocide",
    name: "Benzalkonium Chloride (BKC 50% & 80%)",
    href: "/product/benzalkonium-chloride-50",
    description: "Broad-spectrum cationic quaternary ammonium biocides and preservative chemicals.",
    connections: [
      {
        group: "Comparisons & Applications",
        pages: [
          { label: "Benzalkonium Chloride 50% vs 80%", href: "/benzalkonium-chloride-50-vs-80" },
          { label: "BKC Uses & Applications", href: "/bkc-uses-applications" },
          { label: "BKC vs DDAC vs CTAB Biocides", href: "/bkc-vs-ddac-vs-ctab" },
        ],
      },
      {
        group: "Manufacturing & Location Hubs",
        pages: [
          { label: "Industrial Biocide Manufacturer India", href: "/location/industrial-biocide-manufacturer-india" },
        ],
      },
      {
        group: "BKC 50% — Buying & Technical",
        pages: [
          { label: "BKC 50% — CAS 8001-54-5 (ADBAC) Identity", href: "/solutions/benzalkonium-chloride-50-cas-8001-54-5-adbac" },
          { label: "BKC 50% Specifications, SDS & COA", href: "/solutions/benzalkonium-chloride-50-specifications-sds-coa" },
          { label: "BKC 50% Dosage & Dilution Guide", href: "/solutions/benzalkonium-chloride-50-dosage-dilution-guide" },
          { label: "BKC 50% Brand Equivalents", href: "/solutions/benzalkonium-chloride-50-brand-equivalents" },
          { label: "BKC 50% Manufacturer in India", href: "/solutions/benzalkonium-chloride-50-manufacturer-india" },
          { label: "BKC 50% Supplier — Price & MOQ", href: "/solutions/benzalkonium-chloride-50-supplier-price" },
          { label: "BKC 50% Exporter from India", href: "/solutions/benzalkonium-chloride-50-exporter-india" },
        ],
      },
      {
        group: "BKC 80% — Buying & Technical",
        pages: [
          { label: "BKC 80% — CAS 8001-54-5 (ADBAC) Concentrate", href: "/solutions/benzalkonium-chloride-80-cas-8001-54-5-adbac" },
          { label: "BKC 80% Specifications, SDS & COA", href: "/solutions/benzalkonium-chloride-80-specifications-sds-coa" },
          { label: "BKC 80% Dilution Guide", href: "/solutions/benzalkonium-chloride-80-dilution-guide" },
          { label: "BKC 80% Brand Equivalents", href: "/solutions/benzalkonium-chloride-80-brand-equivalents" },
          { label: "BKC 80% Manufacturer in India", href: "/solutions/benzalkonium-chloride-80-manufacturer-india" },
          { label: "BKC 80% Supplier — Price & MOQ", href: "/solutions/benzalkonium-chloride-80-supplier-price" },
          { label: "BKC 80% Exporter from India", href: "/solutions/benzalkonium-chloride-80-exporter-india" },
        ],
      },
      {
        group: "BKC Applications by Industry",
        pages: [
          { label: "Hospital & Healthcare Disinfectant", href: "/solutions/benzalkonium-chloride-hospital-disinfectant" },
          { label: "Food & Beverage CIP/COP Sanitiser", href: "/solutions/benzalkonium-chloride-food-beverage-cip-sanitiser" },
          { label: "Cosmetic Preservative (INCI)", href: "/solutions/benzalkonium-chloride-cosmetic-preservative" },
          { label: "Pharmaceutical Preservative", href: "/solutions/benzalkonium-chloride-pharmaceutical-preservative" },
          { label: "Swimming Pool & Spa Algicide", href: "/solutions/benzalkonium-chloride-swimming-pool-spa-algicide" },
          { label: "Cooling Tower & HVAC Biocide", href: "/solutions/benzalkonium-chloride-cooling-tower-hvac-biocide" },
          { label: "Poultry & Dairy Farm Disinfectant", href: "/solutions/benzalkonium-chloride-poultry-dairy-farm-disinfectant" },
          { label: "Veterinary Disinfectant", href: "/solutions/benzalkonium-chloride-veterinary-disinfectant" },
          { label: "Wood Preservation", href: "/solutions/benzalkonium-chloride-wood-preservation" },
          { label: "Textile Antimicrobial Finish", href: "/solutions/benzalkonium-chloride-textile-antimicrobial-finish" },
          { label: "Oilfield & Produced-Water Biocide", href: "/solutions/benzalkonium-chloride-oilfield-produced-water-biocide" },
          { label: "Phase-Transfer Catalyst", href: "/solutions/benzalkonium-chloride-phase-transfer-catalyst" },
        ],
      },
    ],
  },
  {
    id: "hydrotropes",
    name: "Hydrotrope Coupling Agents (SXS & SCS)",
    href: "/product/sodium-xylene-sulfonate-40",
    description: "High-performance hydrotropes (Sodium Xylene Sulfonate & Sodium Cumene Sulfonate) in liquid/powder forms.",
    connections: [
      {
        group: "Global Supply & Export",
        pages: [
          { label: "Hydrotropes Global Export", href: "/hydrotropes-global-export" },
        ],
      },
    ],
  },
];

export default async function SitemapPage() {
  // 1. Fetch all products exclusively from Payload CMS
  let allProducts: Awaited<ReturnType<typeof getAllProducts>> = [];
  try {
    const liveProducts = await getAllProducts();
    if (liveProducts && liveProducts.length > 0) {
      allProducts = liveProducts;
    }
  } catch (err) {
    console.error("Error fetching products for visual sitemap", err);
  }

  // Group products by subcategory
  const groupedProducts = allProducts.reduce((acc, product) => {
    const sub = product.subcategory || "Other Specialty Products";
    if (!acc[sub]) {
      acc[sub] = [];
    }
    acc[sub].push(product);
    return acc;
  }, {} as Record<string, typeof allProducts>);

  // 2. Fetch and merge all blogs (static + dynamic)
  let liveBlogs: { slug: string; title: string }[] = [];
  try {
    const slugs = await getAllBlogSlugs();
    liveBlogs = slugs.map(b => ({
      slug: b.slug,
      title: b.slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    }));
  } catch (e) {
    console.error("Error fetching live blogs for visual sitemap", e);
  }

  const blogMap = new Map<string, { slug: string; title: string; category?: string }>();
  Object.entries(blogData).forEach(([slug, blog]) => {
    blogMap.set(slug, { slug, title: blog.title, category: blog.category });
  });
  liveBlogs.forEach(blog => {
    if (!blogMap.has(blog.slug)) {
      blogMap.set(blog.slug, { slug: blog.slug, title: blog.title, category: "CMS Blog" });
    }
  });
  const allBlogs = Array.from(blogMap.values());

  // 3. Group custom landing pages by category
  const groupedCustomPages = Object.values(CUSTOM_LANDING_PAGES_DATA).reduce((acc, page) => {
    const cat = page.category;
    if (!acc[cat]) {
      acc[cat] = [];
    }
    acc[cat].push(page);
    return acc;
  }, {} as Record<string, typeof CUSTOM_LANDING_PAGES_DATA[string][]>);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.vasudevchemopharma.com" },
          { name: "Sitemap", url: "https://www.vasudevchemopharma.com/sitemap" },
        ]}
      />
      <main className="pt-32 pb-24 bg-light min-h-screen">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <SectionLabel>Interactive Directory</SectionLabel>
            <h1 className="font-heading text-display font-semibold text-primary mt-4">
              Visual Sitemap &amp; Page Connections
            </h1>
            <p className="text-lg text-secondary leading-relaxed mt-6">
              Browse the structural hierarchy of Vasudev Chemo Pharma&apos;s digital presence. 
              Below is an outline of how our search-engine-optimized landing pages, 
              regional supply nodes, and global exporting hubs connect to our core product lines.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 items-center">
              <Link
                href="/sitemap.xml"
                target="_blank"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                <span>View XML Sitemap (For Search Engines)</span>
                <span className="text-xs px-2 py-0.5 rounded bg-accent/10">XML</span>
              </Link>
            </div>
          </div>

          {/* Section 1: Main Brand Pages */}
          <div className="mb-20">
            <h2 className="font-heading text-h3 font-semibold text-primary mb-8 border-b border-gray-200 pb-3">
              Main Brand Pages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="flex flex-col p-6 bg-white rounded-2xl border border-gray-200/80 hover:shadow-md hover:border-accent/30 transition-all group"
                >
                  <span className="text-base font-semibold text-primary group-hover:text-accent transition-colors">
                    {page.label}
                  </span>
                  <span className="text-sm text-secondary mt-2 flex-grow leading-relaxed">
                    {page.desc}
                  </span>
                  <span className="text-xs font-semibold text-accent mt-4 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Visit page &rarr;
                  </span>
                </Link>
              ))}
              {/* BKC sub-static pages */}
              <Link
                href="/benzalkonium-chloride-50-vs-80"
                className="flex flex-col p-6 bg-white rounded-2xl border border-gray-200/80 hover:shadow-md hover:border-accent/30 transition-all group"
              >
                <span className="text-base font-semibold text-primary group-hover:text-accent transition-colors">
                  BKC 50% vs 80% Comparison
                </span>
                <span className="text-sm text-secondary mt-2 flex-grow leading-relaxed">
                  Detailed comparison between 50% and 80% active Benzalkonium Chloride.
                </span>
                <span className="text-xs font-semibold text-accent mt-4 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Visit page &rarr;
                </span>
              </Link>
              <Link
                href="/bkc-uses-applications"
                className="flex flex-col p-6 bg-white rounded-2xl border border-gray-200/80 hover:shadow-md hover:border-accent/30 transition-all group"
              >
                <span className="text-base font-semibold text-primary group-hover:text-accent transition-colors">
                  BKC Uses &amp; Applications
                </span>
                <span className="text-sm text-secondary mt-2 flex-grow leading-relaxed">
                  Comprehensive overview of industrial and commercial uses of Benzalkonium Chloride.
                </span>
                <span className="text-xs font-semibold text-accent mt-4 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Visit page &rarr;
                </span>
              </Link>
              <Link
                href="/bkc-vs-ddac-vs-ctab"
                className="flex flex-col p-6 bg-white rounded-2xl border border-gray-200/80 hover:shadow-md hover:border-accent/30 transition-all group"
              >
                <span className="text-base font-semibold text-primary group-hover:text-accent transition-colors">
                  BKC vs DDAC vs CTAB Biocides
                </span>
                <span className="text-sm text-secondary mt-2 flex-grow leading-relaxed">
                  Quaternary ammonium compounds side-by-side comparison for biocide applications.
                </span>
                <span className="text-xs font-semibold text-accent mt-4 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Visit page &rarr;
                </span>
              </Link>
              <Link
                href="/legal-pages/privacy-policy"
                className="flex flex-col p-6 bg-white rounded-2xl border border-gray-200/80 hover:shadow-md hover:border-accent/30 transition-all group"
              >
                <span className="text-base font-semibold text-primary group-hover:text-accent transition-colors">
                  Privacy Policy (Legal Pages)
                </span>
                <span className="text-sm text-secondary mt-2 flex-grow leading-relaxed">
                  Legal compliance, data protection, and user rights information.
                </span>
                <span className="text-xs font-semibold text-accent mt-4 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Visit page &rarr;
                </span>
              </Link>
            </div>
          </div>

          {/* Section 2: Complete Product Catalog Directory */}
          <div className="mb-20">
            <h2 className="font-heading text-h3 font-semibold text-primary mb-2 border-b border-gray-200 pb-3">
              Full Product Directory
            </h2>
            <p className="text-sm text-secondary mb-8">
              Explore our complete catalog of specialty and industrial chemicals, structured by subcategory.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(groupedProducts).map(([subcategory, items]) => (
                <div key={subcategory} className="bg-white rounded-2xl border border-gray-200/80 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-base font-semibold text-primary border-b border-gray-100 pb-2 mb-4">
                      {subcategory}
                    </h3>
                    <ul className="space-y-3">
                      {items.map((prod) => (
                        <li key={prod.slug}>
                          <Link
                            href={`/product/${prod.slug}`}
                            className="group flex flex-col text-sm hover:text-accent transition-colors"
                          >
                            <span className="font-medium text-primary group-hover:text-accent">
                              {prod.name}
                            </span>
                            {prod.casNumber && (
                              <span className="text-xs text-secondary mt-0.5">
                                CAS: {prod.casNumber} {prod.formula ? `| Formula: ${prod.formula}` : ""}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Core Product Relationship Map */}
          <div className="mb-20">
            <h2 className="font-heading text-h3 font-semibold text-primary mb-2">
              Product &amp; Landing Page Connections
            </h2>
            <p className="text-sm text-secondary mb-8">
              Click on any core product block to see all associated geo-locations, solutions, and export nodes.
            </p>

            <div className="space-y-12">
              {productNodes.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden"
                >
                  {/* Product Header */}
                  <div className="p-8 bg-dark text-white border-b border-gray-800">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                          Core Product Line
                        </span>
                        <h3 className="font-heading text-h3 font-semibold mt-1">
                          {product.name}
                        </h3>
                        <p className="text-sm text-white/70 mt-2 max-w-2xl leading-relaxed">
                          {product.description}
                        </p>
                      </div>
                      <div>
                        <Link
                          href={product.href}
                          className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark whitespace-nowrap"
                        >
                          View Product Page
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Connected Pages Grid */}
                  <div className="p-8 bg-white grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {product.connections.map((connGroup) => (
                      <div key={connGroup.group} className="space-y-4">
                        <h4 className="font-heading text-xs font-semibold text-primary/45 uppercase tracking-wider border-b border-gray-100 pb-2">
                          {connGroup.group}
                        </h4>
                        <ul className="space-y-2.5">
                          {connGroup.pages.map((p) => (
                            <li key={p.href}>
                              <Link
                                // Convert sitemaps links correctly
                                href={p.href}
                                className="group flex items-start gap-2.5 text-sm text-secondary hover:text-accent transition-colors py-1"
                              >
                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-300 group-hover:bg-accent transition-colors" />
                                <span className="leading-relaxed">{p.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Global Supply Countries */}
          <div className="mb-20">
            <h2 className="font-heading text-h3 font-semibold text-primary mb-2 border-b border-gray-200 pb-3">
              Global Supply Countries (MEA Triazine 78%)
            </h2>
            <p className="text-sm text-secondary mb-6">
              Explore our regional supply logistics hubs and custom import compliance guides.
            </p>
            <div className="flex flex-wrap gap-3">
              {Object.values(COUNTRY_PAGES_DATA).map((country) => (
                <Link
                  key={country.slug}
                  href={buildCountryPagePath(country.slug)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-full hover:border-accent/40 hover:text-accent transition-all text-sm font-medium text-primary"
                >
                  <span className="text-lg">{country.flag}</span>
                  <span>{country.countryName} Supply</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Section 5: Custom Solutions & Landing Pages */}
          <div className="mb-20">
            <h2 className="font-heading text-h3 font-semibold text-primary mb-2 border-b border-gray-200 pb-3">
              Solutions &amp; Custom Directories
            </h2>
            <p className="text-sm text-secondary mb-6">
              Our targeted B2B landing pages for specific locations, solutions, about info, and export regions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(groupedCustomPages).map(([category, pages]) => (
                <div key={category} className="bg-white rounded-2xl border border-gray-200/80 p-6">
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-accent border-b border-gray-100 pb-2 mb-4">
                    {category} Pages
                  </h3>
                  <ul className="space-y-2.5">
                    {pages.map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/${p.category}/${p.slug}`}
                          className="text-sm text-secondary hover:text-accent transition-colors block py-0.5"
                        >
                          {p.title.split(" | ")[0]}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6: Use-Cases, Comparisons & Resources */}
          <div className="mb-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Comparisons */}
            <div className="bg-white rounded-2xl border border-gray-200/80 p-6">
              <h2 className="font-heading text-base font-semibold text-primary border-b border-gray-100 pb-2 mb-4">
                Competitor Comparisons
              </h2>
              <ul className="space-y-2.5">
                {Object.values(COMPETITOR_PAGES_DATA).map((comp) => (
                  <li key={comp.slug}>
                    <Link
                      href={buildComparisonPagePath(comp.slug)}
                      className="text-sm text-secondary hover:text-accent transition-colors block py-0.5"
                    >
                      MEA Triazine vs {comp.competitorBrand}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div className="bg-white rounded-2xl border border-gray-200/80 p-6">
              <h2 className="font-heading text-base font-semibold text-primary border-b border-gray-100 pb-2 mb-4">
                Applications &amp; Guides
              </h2>
              <ul className="space-y-2.5">
                {Object.values(APPLICATION_PAGES_DATA).map((app) => (
                  <li key={app.slug}>
                    <Link
                      href={buildApplicationPagePath(app.slug)}
                      className="text-sm text-secondary hover:text-accent transition-colors block py-0.5"
                    >
                      {app.h1}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="bg-white rounded-2xl border border-gray-200/80 p-6">
              <h2 className="font-heading text-base font-semibold text-primary border-b border-gray-100 pb-2 mb-4">
                Technical Resources &amp; TDS/SDS
              </h2>
              <ul className="space-y-2.5">
                {Object.values(RESOURCE_ARTICLES_DATA).map((res) => (
                  <li key={res.slug}>
                    <Link
                      href={buildResourceArticlePath(res.slug)}
                      className="text-sm text-secondary hover:text-accent transition-colors block py-0.5"
                    >
                      {res.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 7: Technical Blogs & Industry Insights */}
          <div>
            <h2 className="font-heading text-h3 font-semibold text-primary mb-2 border-b border-gray-200 pb-3">
              Industry Insights &amp; Blog Posts
            </h2>
            <p className="text-sm text-secondary mb-8">
              Explore our technical resources, regulatory compliance reviews, and green chemistry developments.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allBlogs.map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/blog/${blog.slug}`}
                  className="flex flex-col justify-between p-5 bg-white rounded-2xl border border-gray-200/80 hover:shadow-md hover:border-accent/30 transition-all group"
                >
                  <div>
                    {blog.category && (
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                        {blog.category}
                      </span>
                    )}
                    <h3 className="text-sm font-semibold text-primary group-hover:text-accent transition-colors mt-2">
                      {blog.title}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-accent mt-4 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read article &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
