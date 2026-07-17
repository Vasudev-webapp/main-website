// Product data model for Vasudev Chemo Pharma PDP

export type ProductCategory = "industrial" | "specialty" | "surfactant";
export type ProductStatus = "active" | "inactive" | "discontinued";
export type DocumentType = "COA" | "TDS" | "MSDS" | "SDS" | "SPEC" | "OTHER";
export type DocumentAccess = "public" | "on-request" | "internal";

export interface ProductDocument {
  id?: string;
  docType: DocumentType;
  fileUrl: string;
  fileName: string;
  isPrimary?: boolean;
  accessLevel: DocumentAccess;
}

export interface ProductImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  isPrimary: boolean;
  caption?: string;
}

export interface ProductVideo {
  src: string;
  title?: string;
  description?: string;
  thumbnail?: string;
  isPrimary?: boolean;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface Product {
  // Identity
  id: number;
  name: string;
  slug: string;
  titleSize?: "default" | "medium" | "small";
  productPriority?: number;
  sku: string;
  formula: string;
  casNumber: string;
  category: ProductCategory;
  subcategory: string;

  // SEO
  metaTitle: string;
  metaDescription: string;

  // Content
  description: string;
  appearance: string;
  molecularWeight: string;
  hsCode: string;

  // Technical
  specs: Record<string, string>;

  // Safety & compliance
  safetyClass: string;
  ghsPictograms: string[];
  signalWord: string;
  hazardStatements: string[];
  complianceDisclaimer?: string;
  documents: ProductDocument[];

  // Applications
  applications: string[];
  industries: string[];

  // Commercial
  price: number;
  priceUnit: string;
  currency: string;
  unitOfMeasure: string;
  grades: string[];
  packaging: string[];
  minOrderQuantity: string;
  originCountry: string;

  // Trust
  certifications: string[];
  supplier: string;

  // Media
  imageUrl?: string;
  documentUrl?: string;
  images: ProductImage[];
  videos?: ProductVideo[];

  // Status
  status: ProductStatus;

  // FAQ
  faqs: ProductFAQ[];

  // ─── SEO Engine inputs (all optional) ──────────────────────
  // Populated for NEW products to drive auto-generated SEO/AEO/GEO.
  // Existing products leave these empty and rely on hardcoded
  // overrides in src/lib/seo/*, which always take priority.
  iupacName?: string;
  alternateNames?: string[];
  inchiKey?: string;
  smiles?: string;
  einecs?: string;
  unNumber?: string;
  chemicalClass?: string;
  baseChemistry?: string;
  activeContent?: string;
  physicalForm?: PhysicalForm;

  exportMarkets?: string[];
  portOfLoading?: string[];
  transitDays?: Record<string, string>;
  incoterms?: string[];
  localBrandEquivalents?: Record<string, string[]>;
  localLanguageNames?: Record<string, string[]>;
  targetBuyers?: string[];
  competitorBrands?: string[];

  primaryKeyword?: string;
  secondaryKeywords?: string[];
  searchIntent?: SearchIntent;
  directAnswerSnippet?: string;
  audienceType?: string;
  areaServed?: string[];
  manufacturingLocation?: string;

  rankingMetrics?: Partial<ProductRankingMetrics>;
  seoScoreOverride?: number;
}

export type PhysicalForm =
  | "liquid"
  | "powder"
  | "crystal"
  | "paste"
  | "gas"
  | "other";

export type SearchIntent = "transactional" | "commercial" | "informational";

/**
 * 1-10 scored inputs that drive the SEO ranking calculator.
 * All optional; the calculator applies a neutral default (5) when absent.
 */
export interface ProductRankingMetrics {
  // Commercial value
  exportVolumePotential: number;
  pricePerMT: number;
  marginCategory: "high" | "medium" | "low";
  repeatOrderLikelihood: number;
  // Market competition
  searchVolumeEstimate: number;
  competitorDensity: number;
  brandRecognition: number;
  // Content opportunity
  technicalComplexity: number;
  faqPotential: number;
  comparisonOpportunity: number;
  educationalValue: number;
  // Gulf-specific
  gulfDemandScore: number;
  oilGasRelevance: number;
  regulatoryAdvantageSASO: boolean;
  arabicContentNeed: number;
  gccCompetitorGap: number;
}

/** Category display labels */
export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  industrial: "Speciality Chemicals",
  specialty: "API & Intermediates",
  surfactant: "Surfactant Chemicals",
};
