import type { Metadata } from "next";
import Link from "next/link";
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
import { REMOVED_PRODUCT_SLUGS } from "@/lib/removed-products";
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
  { label: "Home Page", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "All Products", href: "/product" },
  { label: "Services", href: "/service" },
  { label: "Industries Served", href: "/industries" },
  { label: "Industry Insights (Blog)", href: "/blog" },
  { label: "Case Studies", href: "/case-study" },
  { label: "Product Comparisons", href: "/compare" },
  { label: "Contact Us", href: "/contact" },
  { label: "BKC 50% vs 80% Comparison", href: "/benzalkonium-chloride-50-vs-80" },
  { label: "BKC Uses & Applications", href: "/bkc-uses-applications" },
  { label: "BKC vs DDAC vs CTAB Biocides", href: "/bkc-vs-ddac-vs-ctab" },
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
];

const productNodes = [
  {
    id: "mea-triazine",
    name: "MEA Triazine 78% H2S Scavenger",
    href: "/product/mea-triazine-78-h2s-scavenger",
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
          { label: "H2S Scavenger Chemicals (Solutions Hub)", href: "/solutions/h2s-scavenger" },
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
    name: "Hydrotrope Coupling Agents (Sodium Cumene Sulfonate)",
    href: "/product/sodium-cumene-sulfonate-40",
    connections: [
      {
        group: "Products",
        pages: [
          { label: "Sodium Cumene Sulfonate 40% (Liquid Hydrotrope)", href: "/product/sodium-cumene-sulfonate-40" },
          { label: "Sodium Cumene Sulfonate 90% (Powder Hydrotrope)", href: "/product/sodium-cumene-sulfonate-90" },
        ],
      },
      {
        group: "Guides & Global Supply",
        pages: [
          { label: "Hydrotropes Guide", href: "/hydrotropes" },
          { label: "Hydrotropes Global Export", href: "/hydrotropes-global-export" },
        ],
      },
      {
        group: "Buying & Technical Guides",
        pages: [
          { label: "SCS 40% Manufacturer in India — Bulk Supply", href: "/blog/sodium-cumene-sulfonate-40-manufacturer-india-bulk-supply" },
          { label: "SCS 90% Price, MOQ & Packaging", href: "/blog/sodium-cumene-sulfonate-90-price-quote-moq-packaging" },
        ],
      },
    ],
  },
  {
    id: "bit-20-biocide",
    name: "BIT 20% (Benzisothiazolinone)",
    href: "/product/bit-20-benzisothiazolinone",
    connections: [
      {
        group: "Buying & Pricing",
        pages: [
          { label: "BIT 20% Price & Supplier Guide — India", href: "/resources/bit-20-price-supplier-india" },
          { label: "Preventol / Nipacide / Mergal BIT 20 Alternative", href: "/resources/preventol-nipacide-mergal-bit-20-alternative-india" },
        ],
      },
      {
        group: "Applications & Selection",
        pages: [
          { label: "Benzisothiazolinone Uses in Paints & Coatings", href: "/resources/benzisothiazolinone-uses-paints-coatings" },
          { label: "BIT 20% for Adhesives & Inks", href: "/resources/bit-20-for-adhesives-inks" },
          { label: "BIT 20% for Metalworking Fluids", href: "/resources/bit-20-for-metalworking-fluids" },
          { label: "BIT 20% as a Cosmetic & Personal Care Preservative", href: "/resources/bit-20-cosmetic-personal-care-preservative" },
          { label: "BIT 20% for Detergents & Household Cleaning", href: "/resources/bit-20-detergent-household-cleaning-preservative" },
          { label: "BIT 20% for Leather & Textile Processing", href: "/resources/bit-20-leather-textile-processing" },
          { label: "BIT 20% for Construction Chemicals & Wood Preservation", href: "/resources/bit-20-construction-chemicals-wood-preservation" },
        ],
      },
      {
        group: "Technical & Safety Guides",
        pages: [
          { label: "BIT 20% Dosage Guide", href: "/resources/bit-20-dosage-guide" },
          { label: "BIT 20% Safety, Handling & Storage", href: "/resources/bit-20-safety-handling-storage" },
          { label: "Benzisothiazolinone Technical Data (CAS 2634-33-5)", href: "/resources/benzisothiazolinone-cas-2634-33-5-technical-data" },
          { label: "Benzisothiazolinone Allergy, Toxicity & Environmental Impact", href: "/resources/benzisothiazolinone-allergy-toxicity-environmental-impact" },
        ],
      },
      {
        group: "Comparisons",
        pages: [
          { label: "BIT 20% vs MIT/CMIT Preservatives", href: "/resources/bit-20-vs-mit-cmit-preservatives" },
          { label: "BIT vs Bronopol & Formaldehyde Biocides", href: "/resources/benzisothiazolinone-vs-bronopol-formaldehyde-biocides" },
        ],
      },
    ],
  },
  {
    id: "bronopol-biocide",
    name: "Bronopol",
    href: "/product/bronopol",
    connections: [
      {
        group: "Buying & Pricing",
        pages: [
          { label: "Bronopol Price & Supplier Guide — India", href: "/resources/bronopol-price-supplier-india" },
          { label: "Onyxide 500 / Lexgard / Myacide Bronopol Alternative", href: "/resources/onyxide-500-lexgard-myacide-bronopol-alternative-india" },
        ],
      },
      {
        group: "Applications & Selection",
        pages: [
          { label: "Bronopol Uses in Cosmetics & Personal Care", href: "/resources/bronopol-uses-cosmetics-personal-care" },
          { label: "Bronopol for Water Treatment & Cooling Towers", href: "/resources/bronopol-for-water-treatment-cooling-towers" },
          { label: "Bronopol for Metalworking Fluids & Cutting Oils", href: "/resources/bronopol-for-metalworking-fluids-cutting-oils" },
          { label: "Bronopol for Paper Mill & Pulp Processing", href: "/resources/bronopol-for-paper-mill-pulp-processing" },
          { label: "Bronopol for Oilfield Drilling Fluids", href: "/resources/bronopol-for-oilfield-drilling-fluids" },
          { label: "Bronopol for Household Cleaning Products", href: "/resources/bronopol-for-household-cleaning-products" },
          { label: "Bronopol Pharmacopoeia Grades (IP/BP/Ph.Eur.)", href: "/resources/bronopol-pharmacopoeia-grades-ip-bp-ph-eur" },
        ],
      },
      {
        group: "Technical & Safety Guides",
        pages: [
          { label: "Bronopol Dosage Guide", href: "/resources/bronopol-dosage-guide" },
          { label: "Bronopol Safety, Handling & Storage", href: "/resources/bronopol-safety-handling-storage" },
          { label: "Bronopol Technical Data (CAS 52-51-7)", href: "/resources/bronopol-cas-52-51-7-technical-data" },
          { label: "Bronopol Mechanism of Action & Pseudomonas Control", href: "/resources/bronopol-mechanism-of-action-pseudomonas" },
          { label: "Bronopol Stability: pH & Temperature", href: "/resources/bronopol-stability-ph-temperature" },
          { label: "Bronopol Compatibility with Surfactants", href: "/resources/bronopol-compatibility-surfactants-formulation" },
          { label: "Bronopol Allergy, Toxicity & Environmental Impact", href: "/resources/bronopol-allergy-toxicity-environmental-impact" },
          { label: "Bronopol Nitrosamine Formation Risk", href: "/resources/bronopol-nitrosamine-formation-risk" },
        ],
      },
      {
        group: "Comparisons",
        pages: [
          { label: "Bronopol vs BIT (Benzisothiazolinone)", href: "/resources/bronopol-vs-bit-benzisothiazolinone" },
          { label: "Bronopol vs Formaldehyde Donors", href: "/resources/bronopol-vs-formaldehyde-donors" },
          { label: "Bronopol vs Parabens Preservative Comparison", href: "/resources/bronopol-vs-parabens-preservative-comparison" },
        ],
      },
    ],
  },
];

type LinkItem = { label: string; href: string };

function LinkSection({ title, links }: { title: string; links: LinkItem[] }) {
  if (links.length === 0) return null;
  return (
    <section className="mb-10">
      <h2 className="text-lg font-semibold text-primary mb-3">{title}</h2>
      <ul className="list-disc pl-5 space-y-1.5">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link
              href={link.href}
              className="text-accent hover:underline break-words"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function SitemapPage() {
  // 1. Products from Payload CMS
  let allProducts: Awaited<ReturnType<typeof getAllProducts>> = [];
  try {
    const liveProducts = await getAllProducts();
    if (liveProducts && liveProducts.length > 0) {
      allProducts = liveProducts;
    }
  } catch (err) {
    console.error("Error fetching products for sitemap", err);
  }

  const productLinks: LinkItem[] = allProducts
    .filter((prod) => !REMOVED_PRODUCT_SLUGS.includes(prod.slug as (typeof REMOVED_PRODUCT_SLUGS)[number]))
    .map((prod) => ({
      label: prod.name,
      href: `/product/${prod.slug}`,
    }));

  // 2. Blogs (static + dynamic)
  let liveBlogs: { slug: string; title: string }[] = [];
  try {
    const slugs = await getAllBlogSlugs();
    liveBlogs = slugs.map((b) => ({
      slug: b.slug,
      title: b.slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" "),
    }));
  } catch (e) {
    console.error("Error fetching live blogs for sitemap", e);
  }

  const belongsToRemovedProduct = (slug: string): boolean =>
    REMOVED_PRODUCT_SLUGS.some(
      (removed) => slug === removed || slug.startsWith(`${removed}-`)
    );

  const blogMap = new Map<string, { slug: string; title: string }>();
  Object.entries(blogData).forEach(([slug, blog]) => {
    if (belongsToRemovedProduct(slug)) return;
    blogMap.set(slug, { slug, title: blog.title });
  });
  liveBlogs.forEach((blog) => {
    if (belongsToRemovedProduct(blog.slug)) return;
    if (!blogMap.has(blog.slug)) {
      blogMap.set(blog.slug, { slug: blog.slug, title: blog.title });
    }
  });
  const blogLinks: LinkItem[] = Array.from(blogMap.values()).map((blog) => ({
    label: blog.title,
    href: `/blog/${blog.slug}`,
  }));

  // 3. Custom landing pages
  const customPageLinks: LinkItem[] = Object.values(CUSTOM_LANDING_PAGES_DATA)
    .filter((page) => !page.canonicalOverride)
    .map((page) => ({
      label: page.title.split(" | ")[0],
      href: `/${page.category}/${page.slug}`,
    }));

  // 4. Country supply pages
  const countryLinks: LinkItem[] = Object.values(COUNTRY_PAGES_DATA).map(
    (country) => ({
      label: `${country.countryName} Supply`,
      href: buildCountryPagePath(country.slug),
    })
  );

  // 5. Competitor comparisons
  const comparisonLinks: LinkItem[] = Object.values(COMPETITOR_PAGES_DATA).map(
    (comp) => ({
      label: `MEA Triazine vs ${comp.competitorBrand}`,
      href: buildComparisonPagePath(comp.slug),
    })
  );

  // 6. Applications
  const applicationLinks: LinkItem[] = Object.values(APPLICATION_PAGES_DATA).map(
    (app) => ({
      label: app.h1,
      href: buildApplicationPagePath(app.slug),
    })
  );

  // 7. Resources
  const resourceLinks: LinkItem[] = Object.values(RESOURCE_ARTICLES_DATA).map(
    (res) => ({
      label: res.title,
      href: buildResourceArticlePath(res.slug),
    })
  );

  // 8. Product connection links (flattened per product)
  const productConnectionSections = productNodes.map((product) => ({
    title: product.name,
    links: product.connections.flatMap((group) => group.pages),
  }));

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.vasudevchemopharma.com" },
          { name: "Sitemap", url: "https://www.vasudevchemopharma.com/sitemap" },
        ]}
      />
      <main className="pt-32 pb-24 min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-2xl font-semibold text-primary mb-2">Sitemap</h1>
          <p className="text-secondary mb-2">
            All pages on Vasudev Chemo Pharma, listed in one place.
          </p>
          <p className="mb-10">
            <Link
              href="/sitemap.xml"
              target="_blank"
              className="text-accent hover:underline text-sm"
            >
              View XML Sitemap (for search engines)
            </Link>
          </p>

          <LinkSection title="Main Pages" links={mainPages} />
          <LinkSection title="Products" links={productLinks} />

          {productConnectionSections.map((section) => (
            <LinkSection
              key={section.title}
              title={section.title}
              links={section.links}
            />
          ))}

          <LinkSection title="Solutions & Landing Pages" links={customPageLinks} />
          <LinkSection title="Global Supply Countries" links={countryLinks} />
          <LinkSection title="Competitor Comparisons" links={comparisonLinks} />
          <LinkSection title="Applications & Guides" links={applicationLinks} />
          <LinkSection title="Technical Resources (TDS/SDS)" links={resourceLinks} />
          <LinkSection title="Blog & Industry Insights" links={blogLinks} />
        </div>
      </main>
    </>
  );
}
