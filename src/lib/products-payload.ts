import { getPayload } from "./payload";
import type { Product } from "./types";
import { isRemovedProductSlug } from "./removed-products";

type ProductCacheEntry<T> = {
  value: T;
  expiresAt: number;
};

const PRODUCT_CACHE_TTL_MS = Number(process.env.PRODUCT_CACHE_TTL_MS || 60 * 1000);
const PRODUCT_CACHE_KEY = '__Vasudev_products_cache__';
const PRODUCT_IN_FLIGHT_KEY = "__Vasudev_products_in_flight__";
const PRODUCT_SELECT_FIELDS = {
  id: true,
  name: true,
  titleSize: true,
  slug: true,
  sku: true,
  formula: true,
  casNumber: true,
  category: true,
  productPriority: true,
  subcategory: true,
  metaTitle: true,
  metaDescription: true,
  description: true,
  appearance: true,
  molecularWeight: true,
  hsCode: true,
  specs: true,
  safetyClass: true,
  ghsPictograms: true,
  signalWord: true,
  hazardStatements: true,
  complianceDisclaimer: true,
  documents: true,
  applications: true,
  industries: true,
  price: true,
  priceUnit: true,
  currency: true,
  unitOfMeasure: true,
  grades: true,
  packaging: true,
  minOrderQuantity: true,
  originCountry: true,
  certifications: true,
  supplier: true,
  imageUrl: true,
  documentUrl: true,
  images: true,
  status: true,
  faqs: true,

  // ─── SEO engine inputs (must be selected or toProduct maps them to undefined) ───
  iupacName: true,
  alternateNames: true,
  inchiKey: true,
  smiles: true,
  einecs: true,
  unNumber: true,
  chemicalClass: true,
  baseChemistry: true,
  activeContent: true,
  physicalForm: true,
  exportMarkets: true,
  portOfLoading: true,
  transitDays: true,
  incoterms: true,
  localBrandEquivalents: true,
  localLanguageNames: true,
  targetBuyers: true,
  competitorBrands: true,
  primaryKeyword: true,
  secondaryKeywords: true,
  searchIntent: true,
  directAnswerSnippet: true,
  audienceType: true,
  areaServed: true,
  manufacturingLocation: true,
  rankingMetrics: true,
  seoScoreOverride: true,
} as const;

function getProductCacheStore(): Map<string, ProductCacheEntry<unknown>> {
  const globalScope = globalThis as typeof globalThis & {
    [PRODUCT_CACHE_KEY]?: Map<string, ProductCacheEntry<unknown>>;
  };

  if (!globalScope[PRODUCT_CACHE_KEY]) {
    globalScope[PRODUCT_CACHE_KEY] = new Map<string, ProductCacheEntry<unknown>>();
  }

  return globalScope[PRODUCT_CACHE_KEY];
}

function getProductInFlightStore(): Map<string, Promise<unknown>> {
  const globalScope = globalThis as typeof globalThis & {
    [PRODUCT_IN_FLIGHT_KEY]?: Map<string, Promise<unknown>>;
  };

  if (!globalScope[PRODUCT_IN_FLIGHT_KEY]) {
    globalScope[PRODUCT_IN_FLIGHT_KEY] = new Map<string, Promise<unknown>>();
  }

  return globalScope[PRODUCT_IN_FLIGHT_KEY];
}

/**
 * Clear the in-process product cache (and any in-flight request dedup) so the
 * next read fetches fresh data from the DB. Called by the Products collection's
 * afterChange / afterDelete hooks so CMS edits (e.g. setting a product to
 * "inactive") take effect in real time within the same server process instead
 * of lingering for up to PRODUCT_CACHE_TTL_MS.
 */
export function clearProductCache(): void {
  getProductCacheStore().clear();
  getProductInFlightStore().clear();
}

function getCachedEntry<T>(key: string): ProductCacheEntry<T> | null {
  const store = getProductCacheStore();
  const entry = store.get(key);
  if (!entry) {
    return null;
  }

  if (entry.expiresAt <= Date.now()) {
    store.delete(key);
    return null;
  }

  return entry as ProductCacheEntry<T>;
}

function setCached<T>(key: string, value: T): void {
  const store = getProductCacheStore();
  store.set(key, {
    value,
    expiresAt: Date.now() + PRODUCT_CACHE_TTL_MS,
  });
}

async function loadWithCache<T>(key: string, loader: () => Promise<T>): Promise<T> {
  const cachedEntry = getCachedEntry<T>(key);
  if (cachedEntry) {
    return cachedEntry.value;
  }

  const inFlightStore = getProductInFlightStore();
  const inFlight = inFlightStore.get(key);
  if (inFlight) {
    return inFlight as Promise<T>;
  }

  const pending = loader()
    .then((value) => {
      setCached(key, value);
      return value;
    })
    .finally(() => {
      inFlightStore.delete(key);
    });

  inFlightStore.set(key, pending);
  return pending;
}

function dedupeByUrl<T extends { src?: string; fileUrl?: string }>(items: T[]): T[] {
  const seen = new Set<string>();
  return items.filter((item) => {
    const key = (item.src || item.fileUrl || "").trim();
    if (!key) return false;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function sortByPriorityThenName(a: Product, b: Product): number {
  const aPriority = typeof a.productPriority === "number" ? a.productPriority : 100;
  const bPriority = typeof b.productPriority === "number" ? b.productPriority : 100;
  if (aPriority !== bPriority) return aPriority - bPriority;
  return a.name.localeCompare(b.name);
}

/**
 * Map a Payload CMS product document to the frontend Product type.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toProduct(doc: any): Product {
  const specs: Record<string, string> = {};
  if (Array.isArray(doc.specs)) {
    for (const s of doc.specs) {
      if (s.key && s.value) specs[s.key] = s.value;
    }
  }

  const mappedImages: Product["images"] = dedupeByUrl(
    Array.isArray(doc.images) ? doc.images : []
  );

  const mappedDocuments: Product["documents"] = dedupeByUrl(
    Array.isArray(doc.documents) ? doc.documents : []
  );

  return {
    id: doc.id,
    name: doc.name,
    slug: doc.slug,
    titleSize: doc.titleSize ?? "default",
    productPriority:
      typeof doc.productPriority === "number" ? doc.productPriority : undefined,
    sku: doc.sku ?? "",
    formula: doc.formula ?? "",
    casNumber: doc.casNumber ?? "",
    category: doc.category,
    subcategory: doc.subcategory ?? "",
    metaTitle: doc.metaTitle ?? "",
    metaDescription: doc.metaDescription ?? "",
    description: doc.description ?? "",
    appearance: doc.appearance ?? "",
    molecularWeight: doc.molecularWeight ?? "",
    hsCode: doc.hsCode ?? "",
    specs,
    safetyClass: doc.safetyClass ?? "",
    ghsPictograms: doc.ghsPictograms ?? [],
    signalWord: doc.signalWord ?? "",
    hazardStatements: doc.hazardStatements ?? [],
    complianceDisclaimer: doc.complianceDisclaimer ?? "",
    documents: mappedDocuments,
    applications: doc.applications ?? [],
    industries: doc.industries ?? [],
    price: doc.price ?? 0,
    priceUnit: doc.priceUnit ?? "/MT",
    currency: doc.currency ?? "USD",
    unitOfMeasure: doc.unitOfMeasure ?? "MT",
    grades: doc.grades ?? [],
    packaging: doc.packaging ?? [],
    minOrderQuantity: doc.minOrderQuantity ?? "",
    originCountry: doc.originCountry ?? "India",
    certifications: doc.certifications ?? [],
    supplier: doc.supplier ?? "Vasudev Chemo Pharma",
    imageUrl: doc.imageUrl ?? "",
    documentUrl: doc.documentUrl ?? "",
    images: mappedImages,
    status: doc.status ?? "active",
    faqs: doc.faqs ?? [],

    // ─── SEO engine inputs (optional; undefined when unset) ────
    iupacName: doc.iupacName ?? undefined,
    alternateNames: Array.isArray(doc.alternateNames) ? doc.alternateNames : undefined,
    inchiKey: doc.inchiKey ?? undefined,
    smiles: doc.smiles ?? undefined,
    einecs: doc.einecs ?? undefined,
    unNumber: doc.unNumber ?? undefined,
    chemicalClass: doc.chemicalClass ?? undefined,
    baseChemistry: doc.baseChemistry ?? undefined,
    activeContent: doc.activeContent ?? undefined,
    physicalForm: doc.physicalForm ?? undefined,

    exportMarkets: Array.isArray(doc.exportMarkets) ? doc.exportMarkets : undefined,
    portOfLoading: Array.isArray(doc.portOfLoading) ? doc.portOfLoading : undefined,
    transitDays:
      doc.transitDays && typeof doc.transitDays === "object" ? doc.transitDays : undefined,
    incoterms: Array.isArray(doc.incoterms) ? doc.incoterms : undefined,
    localBrandEquivalents:
      doc.localBrandEquivalents && typeof doc.localBrandEquivalents === "object"
        ? doc.localBrandEquivalents
        : undefined,
    localLanguageNames:
      doc.localLanguageNames && typeof doc.localLanguageNames === "object"
        ? doc.localLanguageNames
        : undefined,
    targetBuyers: Array.isArray(doc.targetBuyers) ? doc.targetBuyers : undefined,
    competitorBrands: Array.isArray(doc.competitorBrands) ? doc.competitorBrands : undefined,

    primaryKeyword: doc.primaryKeyword ?? undefined,
    secondaryKeywords: Array.isArray(doc.secondaryKeywords)
      ? doc.secondaryKeywords
      : undefined,
    searchIntent: doc.searchIntent ?? undefined,
    directAnswerSnippet: doc.directAnswerSnippet ?? undefined,
    audienceType: doc.audienceType ?? undefined,
    areaServed: Array.isArray(doc.areaServed) ? doc.areaServed : undefined,
    manufacturingLocation: doc.manufacturingLocation ?? undefined,

    rankingMetrics:
      doc.rankingMetrics && typeof doc.rankingMetrics === "object"
        ? doc.rankingMetrics
        : undefined,
    seoScoreOverride:
      typeof doc.seoScoreOverride === "number" ? doc.seoScoreOverride : undefined,
  };
}

/** Fetch all active products */
export async function getAllProducts(): Promise<Product[]> {
  return loadWithCache("all-products", async () => {
    const payload = await getPayload();
    const result = await payload.find({
      collection: "products",
      where: { status: { equals: "active" } },
      select: PRODUCT_SELECT_FIELDS,
      limit: 200,
      sort: "name",
    });

    return result.docs
      .map(toProduct)
      .filter((product) => !isRemovedProductSlug(product.slug))
      .sort(sortByPriorityThenName);
  });
}

/** Find a product by slug */
export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  if (isRemovedProductSlug(slug)) return undefined;

  const cacheKey = `product:${slug}`;

  return loadWithCache(cacheKey, async () => {
    const payload = await getPayload();
    const result = await payload.find({
      collection: "products",
      where: {
        and: [
          { slug: { equals: slug } },
          { status: { equals: "active" } },
        ],
      },
      select: PRODUCT_SELECT_FIELDS,
      limit: 1,
    });

    return result.docs.length > 0 ? toProduct(result.docs[0]) : undefined;
  });
}

/** Get all active product slugs for static generation */
export async function getAllProductSlugs(): Promise<string[]> {
  return loadWithCache("all-product-slugs", async () => {
    const payload = await getPayload();
    const result = await payload.find({
      collection: "products",
      where: { status: { equals: "active" } },
      select: { slug: true },
      limit: 200,
    });

    return result.docs
      .map((doc) => doc.slug)
      .filter(
        (slug): slug is string =>
          typeof slug === "string" && !isRemovedProductSlug(slug)
      );
  });
}

/** Get related products (same category, excluding current) */
export async function getRelatedProducts(
  currentSlug: string,
  category: string,
  limit = 3
): Promise<Product[]> {
  const cacheKey = `related:${category}:${currentSlug}:${limit}`;

  return loadWithCache(cacheKey, async () => {
    const payload = await getPayload();
    const result = await payload.find({
      collection: "products",
      where: {
        and: [
          { category: { equals: category } },
          { slug: { not_equals: currentSlug } },
          { status: { equals: "active" } },
        ],
      },
      select: PRODUCT_SELECT_FIELDS,
      limit: 100,
      sort: "name",
    });

    return result.docs
      .map(toProduct)
      .filter((product) => !isRemovedProductSlug(product.slug))
      .sort(sortByPriorityThenName)
      .slice(0, limit);
  });
}
