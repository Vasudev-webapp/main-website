import type { CollectionConfig } from "payload";
import { slugify } from "@/lib/slug";

export const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "productPriority", "category", "status"],
  },
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (!data || typeof data !== "object") return data;

        const next = { ...(data as Record<string, unknown>) };

        const sourceSlug =
          typeof next.slug === "string" && next.slug.trim().length > 0
            ? next.slug
            : typeof next.name === "string" && next.name.trim().length > 0
              ? next.name
              : "";
        if (sourceSlug) {
          next.slug = slugify(sourceSlug);
        }

        return next;
      },
    ],
  },
  fields: [
    // ─── Identity ──────────────────────────────────────────────
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "titleSize",
      type: "select",
      defaultValue: "default",
      options: [
        { label: "Default (large)", value: "default" },
        { label: "Medium (for longer names)", value: "medium" },
        { label: "Small (for very long names)", value: "small" },
      ],
      admin: {
        position: "sidebar",
        description: "Controls the product name font size on the page. Use Medium or Small if the name wraps awkwardly.",
      },
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "sku",
      type: "text",
      unique: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "formula",
      type: "text",
      admin: { description: "Chemical formula, e.g. Na₂SO₄" },
    },
    {
      name: "casNumber",
      type: "text",
      admin: { description: "CAS Registry Number, e.g. 7757-82-6" },
    },
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "Speciality Chemicals", value: "industrial" },
        { label: "API & Intermediates", value: "specialty" },
        { label: "Surfactant Chemicals", value: "surfactant" },
      ],
      admin: { position: "sidebar" },
    },
    {
      name: "productPriority",
      type: "number",
      defaultValue: 100,
      admin: {
        position: "sidebar",
        description: "Lower number appears first in product listings.",
      },
    },
    {
      name: "subcategory",
      type: "text",
    },

    // ─── SEO ───────────────────────────────────────────────────
    {
      name: "metaTitle",
      type: "text",
      admin: {
        description: "Override page <title>. Defaults to product name if blank.",
      },
    },
    {
      name: "metaDescription",
      type: "textarea",
    },

    // ─── Content ───────────────────────────────────────────────
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "appearance",
      type: "text",
      admin: { description: "e.g. White crystalline powder" },
    },
    {
      name: "molecularWeight",
      type: "text",
      admin: { description: "e.g. 142.04 g/mol" },
    },
    {
      name: "hsCode",
      type: "text",
      admin: { description: "Harmonized System code for export" },
    },

    // ─── Technical Specifications ──────────────────────────────
    {
      name: "specs",
      type: "array",
      admin: { description: "Key/value specification pairs" },
      fields: [
        { name: "key", type: "text", required: true },
        { name: "value", type: "text", required: true },
      ],
    },

    // ─── Safety & Compliance ───────────────────────────────────
    {
      name: "safetyClass",
      type: "text",
    },
    {
      name: "ghsPictograms",
      type: "json",
      admin: { description: 'JSON array of GHS codes, e.g. ["GHS07"]' },
    },
    {
      name: "signalWord",
      type: "text",
    },
    {
      name: "hazardStatements",
      type: "json",
      admin: { description: "JSON array of hazard statements" },
    },
    {
      name: "complianceDisclaimer",
      type: "textarea",
      admin: {
        description:
          "Export-control / regulatory disclaimer text (e.g. CWC Schedule, ECCN, REACH). Displayed in the Safety & Compliance section on the product page.",
      },
    },
    {
      name: "documents",
      type: "array",
      fields: [
        {
          name: "docType",
          type: "select",
          options: ["COA", "TDS", "MSDS", "SDS", "SPEC", "OTHER"],
          required: true,
        },
        { name: "fileUrl", type: "text", required: true, admin: { description: "Direct document URL" } },
        { name: "fileName", type: "text", required: true },
        {
          name: "isPrimary",
          type: "checkbox",
          defaultValue: false,
        },
        {
          name: "accessLevel",
          type: "select",
          options: ["public", "on-request", "internal"],
          defaultValue: "public",
        },
      ],
    },

    // ─── Applications & Industries ─────────────────────────────
    {
      name: "applications",
      type: "json",
      admin: { description: "JSON array of application strings" },
    },
    {
      name: "industries",
      type: "json",
      admin: { description: "JSON array of industry strings" },
    },

    // ─── Commercial ────────────────────────────────────────────
    {
      name: "price",
      type: "number",
      defaultValue: 0,
      admin: { description: "0 = Price on Request" },
    },
    {
      name: "priceUnit",
      type: "text",
      defaultValue: "/MT",
    },
    {
      name: "currency",
      type: "text",
      defaultValue: "USD",
    },
    {
      name: "unitOfMeasure",
      type: "text",
      defaultValue: "MT",
    },
    {
      name: "grades",
      type: "json",
      admin: { description: 'JSON array e.g. ["Industrial Grade", "Lab Grade"]' },
    },
    {
      name: "packaging",
      type: "json",
      admin: { description: 'JSON array e.g. ["25 kg bags", "1 MT jumbo bags"]' },
    },
    {
      name: "minOrderQuantity",
      type: "text",
    },
    {
      name: "originCountry",
      type: "text",
      defaultValue: "India",
    },

    // ─── Trust ─────────────────────────────────────────────────
    {
      name: "certifications",
      type: "json",
      admin: { description: 'JSON array e.g. ["ISO 9001:2015"]' },
    },
    {
      name: "supplier",
      type: "text",
      defaultValue: "Vasudev Chemo Pharma",
    },

    // ─── Media ─────────────────────────────────────────────────
    {
      name: "imageUrl",
      type: "text",
      admin: {
        description:
          "Primary image URL.",
      },
    },
    {
      name: "documentUrl",
      type: "text",
      admin: {
        description:
          "Primary document URL.",
      },
    },
    {
      name: "images",
      type: "array",
      admin: { description: "Additional product images (optional). Use the imageUrl field above for the primary image." },
      fields: [
        { name: "src", type: "text", required: true, admin: { description: "Direct image URL" } },
        { name: "alt", type: "text", required: true },
        { name: "width", type: "number", defaultValue: 800 },
        { name: "height", type: "number", defaultValue: 600 },
        { name: "isPrimary", type: "checkbox", defaultValue: false },
        { name: "caption", type: "text" },
      ],
    },
    // NOTE: Product videos live in src/lib/seo/product-media-overrides.ts
    // (static map). We intentionally avoid a Payload array field here so the
    // production Postgres schema does not require a migration.

    // ─── Status ────────────────────────────────────────────────
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "active",
      options: [
        { label: "Active", value: "active" },
        { label: "Inactive", value: "inactive" },
        { label: "Discontinued", value: "discontinued" },
      ],
      admin: { position: "sidebar" },
    },

    // ─── FAQ ───────────────────────────────────────────────────
    {
      name: "faqs",
      type: "array",
      fields: [
        { name: "question", type: "text", required: true },
        { name: "answer", type: "textarea", required: true },
      ],
    },

    // ═══════════════════════════════════════════════════════════
    // SEO ENGINE INPUTS (all optional — power the auto-generation
    // layer for NEW products. Existing products with hardcoded
    // overrides in src/lib/seo/* are unaffected; those overrides
    // always take priority over engine-generated output.)
    // ═══════════════════════════════════════════════════════════

    // ─── Extended Chemical Identity ────────────────────────────
    {
      name: "iupacName",
      type: "text",
      admin: { description: "Full IUPAC name. Feeds ChemicalSubstance schema." },
    },
    {
      name: "alternateNames",
      type: "json",
      admin: {
        description:
          'JSON array of synonyms, trade names, abbreviations, e.g. ["ADBAC", "Alkyl Dimethyl Benzyl Ammonium Chloride"]. Feeds schema alternateName + AEO synonyms.',
      },
    },
    {
      name: "inchiKey",
      type: "text",
      admin: { description: "InChI Key hash (optional)." },
    },
    {
      name: "smiles",
      type: "text",
      admin: { description: "SMILES notation (optional)." },
    },
    {
      name: "einecs",
      type: "text",
      admin: { description: "EINECS / EC number (optional)." },
    },
    {
      name: "unNumber",
      type: "text",
      admin: { description: "UN transport number (optional)." },
    },
    {
      name: "chemicalClass",
      type: "text",
      admin: {
        description:
          'Chemical family used as schema category, e.g. "H2S Scavenger", "Hydrotrope", "Quaternary Ammonium".',
      },
    },
    {
      name: "baseChemistry",
      type: "text",
      admin: { description: 'e.g. "Monoethanolamine + Formaldehyde condensate".' },
    },
    {
      name: "activeContent",
      type: "text",
      admin: { description: 'e.g. "78 ± 1%". Used in direct-answer + meta.' },
    },
    {
      name: "physicalForm",
      type: "select",
      options: [
        { label: "Liquid", value: "liquid" },
        { label: "Powder", value: "powder" },
        { label: "Crystal", value: "crystal" },
        { label: "Paste", value: "paste" },
        { label: "Gas", value: "gas" },
        { label: "Other", value: "other" },
      ],
      admin: { description: "Physical form. Used in direct-answer snippet." },
    },

    // ─── Export & Gulf Focus ───────────────────────────────────
    {
      name: "exportMarkets",
      type: "json",
      admin: {
        description:
          'JSON array of target countries in priority order (Gulf first), e.g. ["UAE", "Saudi Arabia", "Qatar"]. Drives country pages + geo keywords.',
      },
    },
    {
      name: "portOfLoading",
      type: "json",
      admin: { description: 'JSON array, e.g. ["Mundra", "Hazira", "Kandla"].' },
    },
    {
      name: "transitDays",
      type: "json",
      admin: {
        description:
          'JSON object of country -> transit window, e.g. {"UAE":"3-5","Saudi Arabia":"4-7"}.',
      },
    },
    {
      name: "incoterms",
      type: "json",
      admin: { description: 'JSON array, e.g. ["FOB", "CIF", "CFR"].' },
    },
    {
      name: "localBrandEquivalents",
      type: "json",
      admin: {
        description:
          'JSON object of country -> competitor brands, e.g. {"UAE":["RXSOL...","G-SCAV EA77"]}.',
      },
    },
    {
      name: "localLanguageNames",
      type: "json",
      admin: {
        description:
          'JSON object of language -> names, e.g. {"arabic":["..."],"farsi":["..."]}.',
      },
    },
    {
      name: "targetBuyers",
      type: "json",
      admin: {
        description:
          'JSON array of buyer types, e.g. ["Oilfield service companies","Detergent formulators"]. Feeds schema BusinessAudience.',
      },
    },
    {
      name: "competitorBrands",
      type: "json",
      admin: {
        description:
          'JSON array of global competitor brands, e.g. ["Lonza Bardac 2280","Stepan BTC 8358"]. Drives comparison keywords.',
      },
    },

    // ─── SEO / AEO / GEO Engine ────────────────────────────────
    {
      name: "primaryKeyword",
      type: "text",
      admin: { description: "Main ranking target keyword for this product." },
    },
    {
      name: "secondaryKeywords",
      type: "json",
      admin: { description: "JSON array of long-tail / secondary keywords." },
    },
    {
      name: "searchIntent",
      type: "select",
      options: [
        { label: "Transactional (buy now)", value: "transactional" },
        { label: "Commercial (compare/research)", value: "commercial" },
        { label: "Informational (learn)", value: "informational" },
      ],
      defaultValue: "transactional",
      admin: { description: "Primary search intent this page should serve." },
    },
    {
      name: "directAnswerSnippet",
      type: "textarea",
      admin: {
        description:
          "40-55 word AEO snippet for AI engines. If blank, the engine auto-generates one from CAS, active content, form, and applications.",
      },
    },
    {
      name: "audienceType",
      type: "textarea",
      admin: { description: "Who buys this (schema BusinessAudience audienceType)." },
    },
    {
      name: "areaServed",
      type: "json",
      admin: { description: "JSON array of countries served (schema areaServed)." },
    },
    {
      name: "manufacturingLocation",
      type: "text",
      defaultValue: "Ankleshwar, Gujarat, India",
      admin: { description: "Manufacturing location for E-E-A-T + direct answer." },
    },

    // ─── Ranking Calculator Inputs ─────────────────────────────
    {
      name: "rankingMetrics",
      type: "json",
      admin: {
        description:
          'Optional JSON object of 1-10 metric inputs, e.g. {"exportVolumePotential":8,"gulfDemandScore":9,"oilGasRelevance":10}. Drives SEO priority + content depth. Blank = engine uses neutral defaults.',
      },
    },
    {
      name: "seoScoreOverride",
      type: "number",
      min: 0,
      max: 100,
      validate: (value: number | null | undefined) => {
        if (value === undefined || value === null) return true; // may remain unset
        if (typeof value !== "number" || Number.isNaN(value)) {
          return "SEO score override must be a number.";
        }
        if (value < 0 || value > 100) {
          return "SEO score override must be between 0 and 100.";
        }
        return true;
      },
      admin: {
        position: "sidebar",
        description:
          "Optional manual 0-100 SEO priority score. Overrides the calculated ranking score when set.",
      },
    },
  ],
};
