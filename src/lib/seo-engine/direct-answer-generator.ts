import type { Product } from "@/lib/types";

const BRAND = "Vasudev Chemo Pharma";

function formLabel(product: Product): string {
  switch (product.physicalForm) {
    case "liquid":
      return "liquid";
    case "powder":
      return "powder";
    case "crystal":
      return "crystalline";
    case "paste":
      return "paste";
    case "gas":
      return "gaseous";
    default:
      return "";
  }
}

function casClause(product: Product): string {
  return product.casNumber ? ` (CAS ${product.casNumber})` : "";
}

/**
 * Verified document types available for the product, normalised to the
 * three labels used in copy (COA, SDS, TDS). Derived only from the CMS
 * documents list so we never assert documents that are not on record.
 */
function availableDocLabels(product: Product): string[] {
  const docs = Array.isArray(product.documents) ? product.documents : [];
  const types = new Set(docs.map((d) => (d?.docType || "").toUpperCase()));
  const labels: string[] = [];
  if (types.has("COA")) labels.push("COA");
  if (types.has("SDS") || types.has("MSDS")) labels.push("SDS");
  if (types.has("TDS")) labels.push("TDS");
  return labels;
}

/**
 * Generate a 40-55 word AEO direct-answer snippet from product data.
 * Subject-first so AI engines can extract it verbatim.
 *
 * IMPORTANT: This is a FALLBACK. Callers must prefer, in order:
 *   1. product.directAnswerSnippet (CMS-authored)
 *   2. hardcoded PRODUCT_DIRECT_ANSWERS[slug]
 *   3. this generated snippet
 */
export function generateDirectAnswer(product: Product): string {
  const form = formLabel(product);
  const chemClass = product.chemicalClass || CATEGORY_FALLBACK[product.category];
  const active = product.activeContent ? ` with ${product.activeContent} active content` : "";

  const applications = Array.isArray(product.applications) ? product.applications : [];
  const primaryApp = applications[0];
  const secondaryApps = applications.slice(1, 3);

  const location = product.manufacturingLocation || "Gujarat, India";
  const markets = (product.exportMarkets ?? []).slice(0, 3);

  const sentences: string[] = [];

  // Sentence 1: identity claim (subject-first)
  const formPhrase = form ? `${form} ` : "";
  sentences.push(
    `${product.name}${casClause(product)} is a ${formPhrase}${chemClass}${active}.`
  );

  // Sentence 2: primary use
  if (primaryApp) {
    const more = secondaryApps.length > 0 ? `, ${secondaryApps.join(", ")}` : "";
    sentences.push(`It is used for ${primaryApp}${more}.`);
  }

  // Sentence 3: manufacturer/supplier + trust + markets (verified fields only)
  const marketClause = markets.length > 0 ? `, with export to ${markets.join(", ")}` : "";
  const supplier = product.supplier?.trim();
  if (supplier === BRAND) {
    sentences.push(`Manufactured by ${BRAND} in ${location}${marketClause}.`);
  } else if (supplier) {
    sentences.push(`Supplied by ${supplier}${marketClause}.`);
  } else if (markets.length > 0) {
    sentences.push(`Exported to ${markets.join(", ")}.`);
  }

  // Sentence 4: only claim documents that are on record in the CMS.
  const docLabels = availableDocLabels(product);
  if (docLabels.length > 0) {
    sentences.push(`${docLabels.join(", ")} available.`);
  }

  return sentences.join(" ");
}

const CATEGORY_FALLBACK: Record<Product["category"], string> = {
  industrial: "speciality chemical",
  specialty: "API & intermediate",
  surfactant: "surfactant chemical",
};
