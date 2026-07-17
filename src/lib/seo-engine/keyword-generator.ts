import type { Product } from "@/lib/types";
import type { KeywordCluster, KeywordClusterSet } from "./types";
import { GULF_COUNTRY_BY_CODE } from "./gulf-config";

function clean(values: (string | null | undefined)[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const v of values) {
    if (typeof v !== "string") continue;
    const t = v.trim();
    if (!t || seen.has(t.toLowerCase())) continue;
    seen.add(t.toLowerCase());
    out.push(t);
  }
  return out;
}

function identityCluster(product: Product): KeywordCluster {
  const name = product.name;
  return {
    primary: product.primaryKeyword || `${name} manufacturer India`,
    members: clean([
      `${name} supplier India`,
      `${name} price`,
      `${name} bulk`,
      `buy ${name}`,
      product.iupacName ? `${product.iupacName} manufacturer` : null,
      product.casNumber ? `CAS ${product.casNumber} supplier` : null,
      ...(product.alternateNames ?? []).slice(0, 5).map((n) => `${n} manufacturer`),
    ]),
  };
}

function geographicClusters(product: Product): KeywordCluster[] {
  const markets = product.exportMarkets ?? [];
  return markets.map((market) => {
    const country = GULF_COUNTRY_BY_CODE[market];
    const localNames = country
      ? product.localLanguageNames?.[country.language] ?? []
      : [];
    return {
      primary: `${product.name} supplier ${market}`,
      members: clean([
        `${product.name} ${market}`,
        product.primaryKeyword ? `${product.primaryKeyword} ${market}` : null,
        `chemical supplier ${market}`,
        `${product.name} CIF ${market}`,
        country ? `${product.name} ${country.mainPort}` : null,
        ...localNames.slice(0, 3),
      ]),
    };
  });
}

function applicationClusters(product: Product): KeywordCluster[] {
  const apps = product.applications ?? [];
  const cls = product.chemicalClass;
  return apps.slice(0, 6).map((app) => ({
    primary: `${product.name} for ${app}`,
    members: clean([
      `${app} chemical supplier`,
      cls ? `${cls} for ${app}` : null,
      `best ${app} chemical`,
    ]),
  }));
}

function comparisonClusters(product: Product): KeywordCluster[] {
  const brands = product.competitorBrands ?? [];
  return brands.slice(0, 6).map((brand) => ({
    primary: `${product.name} vs ${brand}`,
    members: clean([
      `${brand} alternative`,
      `${brand} equivalent supplier India`,
      `${brand} replacement`,
    ]),
  }));
}

function commercialCluster(product: Product): KeywordCluster {
  const name = product.name;
  return {
    primary: `${name} price per ton`,
    members: clean([
      `${name} MOQ`,
      `${name} sample`,
      `${name} COA TDS SDS`,
      `${name} packaging options`,
      `${name} export documentation`,
    ]),
  };
}

/**
 * Build the full keyword cluster set for a product from its CMS data.
 * Pure and deterministic. Used for content planning, internal-link
 * suggestions, and gap analysis — not rendered directly.
 */
export function generateKeywordClusters(product: Product): KeywordClusterSet {
  return {
    identity: identityCluster(product),
    geographic: geographicClusters(product),
    application: applicationClusters(product),
    comparison: comparisonClusters(product),
    commercial: commercialCluster(product),
  };
}

/** Flatten all clusters into a single de-duplicated keyword list. */
export function flattenKeywords(set: KeywordClusterSet): string[] {
  const all: string[] = [];
  const push = (c: KeywordCluster) => {
    all.push(c.primary, ...c.members);
  };
  push(set.identity);
  set.geographic.forEach(push);
  set.application.forEach(push);
  set.comparison.forEach(push);
  push(set.commercial);
  return clean(all);
}
