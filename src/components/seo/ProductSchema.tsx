import type { Product } from "@/lib/types";
import { CATEGORY_LABELS } from "@/lib/types";
import {
  MEA_TRIAZINE_SLUG,
  MEA_TRIAZINE_SCHEMA_ENRICHMENT,
} from "@/lib/seo/mea-triazine-schema-data";
import {
  SXS_40_SLUG,
  SXS_40_SCHEMA_ENRICHMENT,
} from "@/lib/seo/sxs-40-content";
import {
  SCS_40_SLUG,
  SCS_40_SCHEMA_ENRICHMENT,
} from "@/lib/seo/scs-40-content";


type ProductSchemaProps = {
  product: Product;
};

const SCHEMA_AVAILABILITY_MAP: Record<string, string> = {
  in_stock: "https://schema.org/InStock",
  out_of_stock: "https://schema.org/OutOfStock",
  preorder: "https://schema.org/PreOrder",
  active: "https://schema.org/InStock",
  inactive: "https://schema.org/OutOfStock",
  discontinued: "https://schema.org/Discontinued",
};

function getSchemaAvailability(product: Product): string | undefined {
  const productAvailability = product as Product & {
    availability?: unknown;
    stockStatus?: unknown;
  };
  const availabilityCandidate = [
    productAvailability.availability,
    productAvailability.stockStatus,
    product.status,
  ].find((candidate): candidate is string => typeof candidate === "string");
  const normalizedAvailability = availabilityCandidate?.toLowerCase().trim() || "";

  return SCHEMA_AVAILABILITY_MAP[normalizedAvailability];
}

export default function ProductSchema({ product }: ProductSchemaProps) {
  const availability = getSchemaAvailability(product);
  const hasPrice = typeof product.price === "number" && Number.isFinite(product.price) && product.price > 0;
  const isEnrichedSlug = product.slug === MEA_TRIAZINE_SLUG;
  const isSxs40 = product.slug === SXS_40_SLUG;
  const isScs40 = product.slug === SCS_40_SLUG;

  /* --- Base Product schema (all products) --- */
  const productSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description:
      product.description ||
      `${product.name} manufactured by Vasudev Chemo Pharma, Gujarat, India.`,
    sku: product.sku,
    image: product.imageUrl || undefined,
    url: `https://www.vasudevchemopharma.com/product/${product.slug}`,
    brand: {
      "@type": "Brand",
      name: "Vasudev Chemo Pharma",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Vasudev Chemo Pharma Chemicals",
      url: "https://www.vasudevchemopharma.com",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
    },
    category: CATEGORY_LABELS[product.category],
    offers: {
      "@type": "Offer",
      ...(availability ? { availability } : {}),
      priceCurrency: product.currency || "USD",
      ...(hasPrice
        ? {
          priceSpecification: {
            "@type": "PriceSpecification",
            price: product.price,
            priceCurrency: product.currency || "USD",
          },
        }
        : {}),
      url: `https://www.vasudevchemopharma.com/product/${product.slug}`,
      seller: {
        "@type": "Organization",
        name: "Vasudev Chemo Pharma Chemicals",
      },
    },
  };

  /* --- Slug-specific enrichment (MEA Triazine 78%) --- */
  if (isEnrichedSlug) {
    const enrichment = MEA_TRIAZINE_SCHEMA_ENRICHMENT;
    productSchema.description = enrichment.description;
    productSchema.alternateName = enrichment.alternateName.slice(0, 12);
    productSchema.additionalProperty = enrichment.additionalProperty;
    productSchema.material = enrichment.material;
    productSchema.mpn = enrichment.mpn;
    productSchema.category = enrichment.category;
    productSchema.countryOfOrigin = enrichment.countryOfOrigin;
    productSchema.audience = enrichment.audience;
    productSchema.areaServed = enrichment.areaServed;
  }

  /* --- Slug-specific enrichment (Sodium Xylene Sulfonate 40%) --- */
  if (isSxs40) {
    const sxsEnrichment = SXS_40_SCHEMA_ENRICHMENT;
    productSchema.alternateName = [...sxsEnrichment.alternateName];
    productSchema.category = sxsEnrichment.category;
    productSchema.countryOfOrigin = sxsEnrichment.countryOfOrigin;
    productSchema.mpn = "VCP-SXS-40";
    productSchema.additionalProperty = [
      ...sxsEnrichment.identifierProperties.map((p) => ({
        "@type": "PropertyValue",
        name: p.name,
        value: p.value,
      })),
      ...sxsEnrichment.additionalProperty.map((p) => ({
        "@type": "PropertyValue",
        name: p.name,
        value: p.value,
      })),
    ];
    productSchema.audience = {
      "@type": "BusinessAudience",
      audienceType:
        "Detergent manufacturers, personal care formulators, agrochemical formulators, oilfield service companies, textile mills, paint/coatings manufacturers",
    };
    productSchema.areaServed = [
      "India",
      "United Arab Emirates",
      "Saudi Arabia",
      "Qatar",
      "Oman",
      "Kuwait",
      "Iraq",
      "United States",
      "Vietnam",
      "Thailand",
      "Indonesia",
      "Brazil",
      "Egypt",
      "South Africa",
      "Türkiye",
    ];
  }

  /* --- Slug-specific enrichment (Sodium Cumene Sulfonate 40%) --- */
  if (isScs40) {
    const scsEnrichment = SCS_40_SCHEMA_ENRICHMENT;
    productSchema.alternateName = [...scsEnrichment.alternateName];
    productSchema.category = scsEnrichment.category;
    productSchema.countryOfOrigin = scsEnrichment.countryOfOrigin;
    productSchema.mpn = "VCP-SFC-0001";
    productSchema.additionalProperty = [
      ...scsEnrichment.identifierProperties.map((p) => ({
        "@type": "PropertyValue",
        name: p.name,
        value: p.value,
      })),
      ...scsEnrichment.additionalProperty.map((p) => ({
        "@type": "PropertyValue",
        name: p.name,
        value: p.value,
      })),
    ];
    productSchema.audience = {
      "@type": "BusinessAudience",
      audienceType:
        "Detergent manufacturers, dish wash & laundry formulators, personal care formulators, agrochemical formulators, oilfield service companies, metal-processing & electroplating chemical formulators",
    };
    productSchema.areaServed = [
      "India",
      "United Arab Emirates",
      "Saudi Arabia",
      "Qatar",
      "Oman",
      "Kuwait",
      "Iraq",
      "Egypt",
      "United States",
      "Vietnam",
      "Thailand",
      "Indonesia",
      "Brazil",
      "South Africa",
      "Türkiye",
    ];
  }

  /* --- H2S Scavenger / Biocide category enrichment (slug-driven) --- */
  const H2S_CATEGORY_SLUGS = [
    "mma-triazine-40",
    "triazine-h2s-scavenger-general",
    "mea-triazine-78-high-concentration",
    "mma-triazine-40-btx-free",
  ];
  const BIOCIDE_SLUGS = ["biocide-oil-gas", "metal-working-fluids"];

  if (!isEnrichedSlug && H2S_CATEGORY_SLUGS.includes(product.slug)) {
    productSchema.category = "H2S Scavenger";
    productSchema.additionalProperty = [
      ...(Array.isArray(productSchema.additionalProperty)
        ? productSchema.additionalProperty
        : []),
      {
        "@type": "PropertyValue",
        name: "Chemical Category",
        value: "H2S Scavenger (Hydrogen Sulphide Scavenger)",
      },
      {
        "@type": "PropertyValue",
        name: "Base Chemistry",
        value: "Triazine-based",
      },
      {
        "@type": "PropertyValue",
        name: "Primary Application",
        value:
          "Oil and gas, natural gas processing, biogas, refinery, pipeline",
      },
    ];
  } else if (!isEnrichedSlug && BIOCIDE_SLUGS.includes(product.slug)) {
    productSchema.category = product.slug === "metal-working-fluids"
      ? "Metal Working Fluid Biocide"
      : "Oilfield Biocide";
    productSchema.additionalProperty = [
      ...(Array.isArray(productSchema.additionalProperty)
        ? productSchema.additionalProperty
        : []),
      {
        "@type": "PropertyValue",
        name: "Chemical Category",
        value: product.slug === "metal-working-fluids"
          ? "Metal Working Fluid Biocide (Triazine-based)"
          : "Oilfield Biocide (Triazine-based)",
      },
      {
        "@type": "PropertyValue",
        name: "Base Chemistry",
        value: "Triazine-based",
      },
    ];
  }

  const chemicalSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ChemicalSubstance",
    name: product.name,
    molecularFormula: product.formula || undefined,
    identifier: product.casNumber
      ? {
        "@type": "PropertyValue",
        name: "CAS Number",
        value: product.casNumber,
      }
      : undefined,
  };

  /* --- Slug-specific ChemicalSubstance enrichment (SXS 40%) --- */
  if (isSxs40) {
    const sxsEnrichment = SXS_40_SCHEMA_ENRICHMENT;
    chemicalSchema.alternateName = [...sxsEnrichment.alternateName];
    chemicalSchema.iupacName = sxsEnrichment.iupacName;
    chemicalSchema.molecularWeight = "208.21 g/mol";
    chemicalSchema.identifier = sxsEnrichment.identifierProperties.map((p) => ({
      "@type": "PropertyValue",
      name: p.name,
      value: p.value,
    }));
    chemicalSchema.additionalProperty = [
      {
        "@type": "PropertyValue",
        name: "InChI Key",
        value: sxsEnrichment.inChIKey,
      },
      {
        "@type": "PropertyValue",
        name: "SMILES",
        value: sxsEnrichment.smiles,
      },
      ...sxsEnrichment.additionalProperty.map((p) => ({
        "@type": "PropertyValue",
        name: p.name,
        value: p.value,
      })),
    ];
  }

  /* --- Slug-specific ChemicalSubstance enrichment (SCS 40%) --- */
  if (isScs40) {
    const scsEnrichment = SCS_40_SCHEMA_ENRICHMENT;
    chemicalSchema.alternateName = [...scsEnrichment.alternateName];
    chemicalSchema.iupacName = scsEnrichment.iupacName;
    chemicalSchema.molecularWeight = "222.24 g/mol";
    chemicalSchema.identifier = scsEnrichment.identifierProperties.map((p) => ({
      "@type": "PropertyValue",
      name: p.name,
      value: p.value,
    }));
    chemicalSchema.additionalProperty = [
      {
        "@type": "PropertyValue",
        name: "InChI Key",
        value: scsEnrichment.inChIKey,
      },
      {
        "@type": "PropertyValue",
        name: "SMILES",
        value: scsEnrichment.smiles,
      },
      ...scsEnrichment.additionalProperty.map((p) => ({
        "@type": "PropertyValue",
        name: p.name,
        value: p.value,
      })),
    ];
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(chemicalSchema).replace(/</g, "\\u003c") }}
      />
    </>
  );
}

