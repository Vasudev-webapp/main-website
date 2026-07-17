# Automated SEO/AEO/GEO Engine for Chemical Product Export

## Complete System Plan — Vasudev Chemo Pharma

**Date:** July 2026
**Business:** Chemical Manufacturing & Export (India → Gulf Countries)
**Tech Stack:** Next.js 15 + Payload CMS + PostgreSQL + Vercel

---

## Table of Contents

1. [Problem Statement](#problem-statement)
2. [Solution Architecture](#solution-architecture)
3. [Phase 1: Expanded Product Data Model](#phase-1-expanded-product-data-model)
4. [Phase 2: Ranking Calculator System](#phase-2-ranking-calculator-system)
5. [Phase 3: Auto-Generation Engines](#phase-3-auto-generation-engines)
6. [Phase 4: Keyword Clustering Engine](#phase-4-keyword-clustering-engine)
7. [Phase 5: Implementation Steps](#phase-5-implementation-steps)
8. [Google Ranking Rules](#google-ranking-rules)
9. [SEO Rules (Search Engine Optimization)](#seo-rules)
10. [AEO Rules (Answer Engine Optimization)](#aeo-rules)
11. [GEO Rules (Generative Engine Optimization)](#geo-rules)
12. [Product Page Ranking Rules](#product-page-ranking-rules)
13. [Website Ranking Rules](#website-ranking-rules)
14. [Page Creation Rules](#page-creation-rules)
15. [Page Indexing Rules](#page-indexing-rules)
16. [Internal Linking Rules](#internal-linking-rules)
17. [Gulf Export SEO Specifics](#gulf-export-seo-specifics)

---


## Problem Statement

### Current System Issues

The existing website has **per-product hardcoded SEO logic**:

- `ProductSchema.tsx` has `if (isSxs40)...`, `if (isBkc50)...` branches for every product
- Each product needs a dedicated `*-keywords.ts`, `*-content.ts` file in `src/lib/seo/`
- FAQs, synonyms, direct answers, meta overrides are all keyed by slug in static maps
- Adding a new product means creating 3-5 new files and modifying 2-3 existing ones
- No automated way to handle Gulf-country-specific content

### Goal

Build a system where:
1. You add a product with maximum details in Payload CMS
2. ALL SEO, AEO, GEO artifacts are auto-generated from that data
3. Zero code changes needed per new product
4. Gulf export markets are prioritized by default
5. Rankings are calculated automatically to determine content depth

---


## Solution Architecture

```
+---------------------------------------------------------------+
|                    PAYLOAD CMS (Admin Panel)                    |
|                                                                |
|  Product Entry Form (expanded with SEO/AEO/GEO fields)         |
|  +-----------------------------------------------------------+ |
|  | Identity | Chemistry | Commercial | Export | SEO Engine    | |
|  +-----------------------------------------------------------+ |
+-------------------------------+-------------------------------+
                                |
                                v
+---------------------------------------------------------------+
|              SEO ENGINE (Backend Logic Layer)                   |
|                                                                |
|  +----------+  +----------+  +----------+  +------------+     |
|  | Schema   |  | Meta     |  | Content  |  | Ranking    |     |
|  | Generator|  | Generator|  | Generator|  | Calculator |     |
|  +----------+  +----------+  +----------+  +------------+     |
|  +----------+  +----------+  +----------+  +------------+     |
|  | FAQ      |  | Keyword  |  | Direct   |  | Export/    |     |
|  | Generator|  | Clusterer|  | Answer   |  | Gulf Focus |     |
|  +----------+  +----------+  +----------+  +------------+     |
+-------------------------------+-------------------------------+
                                |
                                v
+---------------------------------------------------------------+
|              OUTPUT (Auto-generated per product)                |
|                                                                |
|  - JSON-LD (Product + ChemicalSubstance)                       |
|  - Meta tags (title, description, OG, Twitter)                 |
|  - FAQ schema                                                  |
|  - Direct answer snippet (for AI engines)                      |
|  - Keyword clusters                                            |
|  - Sitemap entries with priority scoring                       |
|  - Gulf country landing page variants                          |
|  - Arabic/multi-language synonyms                              |
|  - Competitor comparison content                               |
+---------------------------------------------------------------+
```

---


## Phase 1: Expanded Product Data Model

New fields to add to the Products collection (Payload CMS):

### 1A. Chemical Identity (Enhanced)

| Field | Type | Purpose |
|-------|------|---------|
| `iupacName` | text | Full IUPAC chemical name |
| `alternateNames` | JSON array | All synonyms, trade names, abbreviations |
| `molecularFormula` | text | Already exists as `formula` |
| `inchiKey` | text | International Chemical Identifier hash |
| `smiles` | text | Simplified molecular notation |
| `einecs` | text | EU chemical registry number |
| `unNumber` | text | UN transport classification |
| `chemicalClass` | text | e.g. "Triazine", "Quaternary Ammonium", "Hydrotrope" |
| `baseChemistry` | text | e.g. "Monoethanolamine + Formaldehyde condensate" |
| `activeContent` | text | e.g. "78 +/- 1%" |
| `physicalForm` | select | liquid / powder / crystal / paste |

### 1B. Export & Gulf Focus

| Field | Type | Purpose |
|-------|------|---------|
| `exportMarkets` | JSON array | Target countries with priority (Gulf first) |
| `portOfLoading` | JSON array | e.g. ["Mundra", "Hazira", "Kandla"] |
| `transitDays` | JSON object | `{ "UAE": "3-5", "Saudi Arabia": "4-7", ... }` |
| `incoterms` | JSON array | e.g. ["FOB", "CIF", "CFR"] |
| `localBrandEquivalents` | JSON object | `{ "UAE": [...], "Saudi Arabia": [...] }` |
| `localLanguageNames` | JSON object | `{ "arabic": [...], "farsi": [...] }` |
| `regulatoryCompliance` | JSON object | `{ "UAE_EHS": true, "SASO": true, ... }` |
| `customsHsCode` | text | (already exists as `hsCode`) |
| `targetBuyers` | JSON array | e.g. ["Oilfield service companies", "Detergent formulators"] |
| `competitorBrands` | JSON array | e.g. ["Lonza Bardac 2280", "Stepan BTC 8358"] |

### 1C. SEO/AEO/GEO Engine Inputs

| Field | Type | Purpose |
|-------|------|---------|
| `primaryKeyword` | text | Main ranking target keyword |
| `secondaryKeywords` | JSON array | Long-tail keywords |
| `searchIntent` | select | transactional / informational / commercial |
| `directAnswerSnippet` | textarea | 40-55 word AI-engine snippet |
| `productUseCases` | JSON array | Structured use cases with industry + application |
| `audienceType` | textarea | Who buys this (for schema.org BusinessAudience) |
| `areaServed` | JSON array | Countries served (used in schema) |
| `countryOfOrigin` | text | Default: "India" |
| `manufacturingLocation` | text | e.g. "Ankleshwar, Gujarat, India" |

---


## Phase 2: Ranking Calculator System

A scoring system that determines SEO priority, sitemap weight, and content depth per product.

### Ranking Metrics

```typescript
interface ProductRankingMetrics {
  // Commercial Value (40% weight)
  exportVolumePotential: 1-10;     // How much demand exists in Gulf
  pricePerMT: number;              // Higher value = more investment in SEO
  marginCategory: 'high' | 'medium' | 'low';
  repeatOrderLikelihood: 1-10;     // Chemicals with recurring demand

  // Market Competition (25% weight)
  searchVolumeEstimate: 1-10;      // Keyword search volume
  competitorDensity: 1-10;         // How many competitors rank for this
  brandRecognition: 1-10;          // How well-known is the product name
  alternativeSupplierCount: number; // Competitors in Gulf region

  // Content Opportunity (20% weight)
  technicalComplexity: 1-10;       // More complex = more content opportunity
  faqPotential: 1-10;             // Number of meaningful questions possible
  comparisonOpportunity: 1-10;    // vs. competitor products/brands
  educationalValue: 1-10;          // Can we teach buyers something

  // Gulf-Specific Factors (15% weight)
  gulfDemandScore: 1-10;          // Direct demand from UAE/SA/Qatar/etc.
  oilGasRelevance: 1-10;          // Oil & gas sector relevance
  regulatoryAdvantageSASO: boolean; // Do we have SASO compliance
  arabicContentNeed: 1-10;        // Need for Arabic content
  gccCompetitorGap: 1-10;         // Gap in local supply we can fill
}
```

### Ranking Output Actions

| Score Range | SEO Actions |
|------------|-------------|
| 90-100 | Full country pages for all 6 Gulf countries, comparison pages, Arabic content, video SEO, featured snippets optimization |
| 70-89 | Country pages for top 3 Gulf markets, comparison with 2-3 competitors, FAQ expansion |
| 50-69 | Standard product page with full schema, 1-2 country pages, core FAQs |
| Below 50 | Basic product page, minimal but complete schema, standard FAQs |

---


## Phase 3: Auto-Generation Engines

### 3A. Schema Generator (replaces hardcoded ProductSchema.tsx)

```typescript
// Instead of: if (isSxs40) { ... } if (isBkc50) { ... }
// Logic becomes purely data-driven:

function generateProductSchema(product: EnrichedProduct) {
  return {
    "@type": "Product",
    name: product.name,
    alternateName: product.alternateNames,
    category: product.chemicalClass,
    countryOfOrigin: product.countryOfOrigin,
    additionalProperty: buildProperties(product),
    audience: { "@type": "BusinessAudience", audienceType: product.audienceType },
    areaServed: product.areaServed,
    // All derived from data, zero slug checks
  };
}

function generateChemicalSchema(product: EnrichedProduct) {
  return {
    "@type": "ChemicalSubstance",
    name: product.name,
    alternateName: product.alternateNames,
    iupacName: product.iupacName,
    molecularFormula: product.formula,
    molecularWeight: product.molecularWeight,
    identifier: [
      { "@type": "PropertyValue", name: "CAS Number", value: product.casNumber },
      product.inchiKey && { "@type": "PropertyValue", name: "InChI Key", value: product.inchiKey },
      product.smiles && { "@type": "PropertyValue", name: "SMILES", value: product.smiles },
      product.einecs && { "@type": "PropertyValue", name: "EINECS", value: product.einecs },
    ].filter(Boolean),
  };
}
```

### 3B. Meta Tag Generator

```typescript
function generateMeta(product: EnrichedProduct) {
  const title = product.metaTitle ||
    `${product.name} Manufacturer India | ${product.primaryKeyword} | Export to ${topMarkets(product)}`;

  const description = product.metaDescription ||
    `Buy ${product.name} (CAS ${product.casNumber}) from Vasudev Chemo Pharma. ` +
    `${product.activeContent} active. ` +
    `Export to ${product.exportMarkets.slice(0, 4).join(', ')}. ` +
    `COA, SDS, TDS available. ISO 9001:2015.`;

  return { title, description, keywords: product.secondaryKeywords };
}
```

### 3C. Direct Answer Generator (AEO)

```typescript
function generateDirectAnswer(product: EnrichedProduct): string {
  if (product.directAnswerSnippet) return product.directAnswerSnippet;

  return buildDirectAnswer({
    name: product.name,
    cas: product.casNumber,
    activeContent: product.activeContent,
    form: product.physicalForm,
    primaryApplication: product.applications[0],
    chemicalClass: product.chemicalClass,
    manufacturer: "Vasudev Chemo Pharma",
    location: "Gujarat, India",
    topMarkets: product.exportMarkets.slice(0, 3),
  });
}
```

### 3D. FAQ Generator

```typescript
function generateFAQs(product: EnrichedProduct): FAQ[] {
  if (product.faqs?.length >= 5) return product.faqs;

  return [
    whatIsProductFAQ(product),
    casNumberFAQ(product),
    concentrationsFAQ(product),
    moqFAQ(product),
    exportCountriesFAQ(product),
    packagingFAQ(product),
    documentsFAQ(product),
    ...gulfCountryFAQs(product),
    ...competitorComparisonFAQs(product),
  ].slice(0, 15);
}
```

### 3E. Gulf Country Page Generator (GEO)

```typescript
function generateGulfCountryContent(product: EnrichedProduct, country: GulfCountry) {
  return {
    slug: `supply/${product.slug}/${country.slug}`,
    title: `${product.name} Supplier ${country.name} | CIF ${country.mainPort}`,
    meta: `Buy ${product.name} in ${country.name}. CIF ${country.mainPort}, ${country.transitDays} days.`,
    content: {
      transitTime: product.transitDays[country.code],
      port: country.mainPort,
      localBrands: product.localBrandEquivalents[country.code] || [],
      localNames: product.localLanguageNames[country.language] || [],
      regulations: country.regulatoryBody,
      arabicName: product.localLanguageNames.arabic?.[0],
      importDocs: country.importDocuments,
    }
  };
}
```

---


## Phase 4: Keyword Clustering Engine

### 4.1 What Is Keyword Clustering?

Keyword clustering groups related search queries into topical clusters so that ONE page targets a
family of keywords rather than a single keyword. Google rewards topical depth — clustered content
drives ~30% more organic traffic and holds rankings 2.5x longer than standalone pages.

### 4.2 Clustering Methodology for Chemical Products

#### Layer 1: Product Identity Cluster (Core)

```
Primary Keyword: "MEA Triazine 78% manufacturer"

Cluster Members:
- MEA Triazine 78% supplier India
- MEA Triazine 78% price
- MEA Triazine 78% bulk
- buy MEA Triazine 78%
- hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine manufacturer
- CAS 4719-04-4 supplier
- H2S scavenger manufacturer India
```

#### Layer 2: Geographic Cluster (Per Country)

```
Primary: "MEA Triazine supplier UAE"

Cluster Members:
- MEA Triazine 78% Dubai
- H2S scavenger Jebel Ali
- triazine supplier Abu Dhabi
- chemical supplier UAE oil gas
- MEA Triazine CIF UAE
- [Arabic] كاسح كبريتيد الهيدروجين الإمارات
```

#### Layer 3: Application Cluster (Per Industry)

```
Primary: "H2S scavenger oil and gas"

Cluster Members:
- hydrogen sulfide removal natural gas
- sour gas treatment chemical
- pipeline H2S removal
- offshore H2S scavenger
- triazine H2S mechanism
```

#### Layer 4: Comparison Cluster (vs. Competitors)

```
Primary: "MEA Triazine vs MMA Triazine"

Cluster Members:
- MEA vs MMA triazine difference
- BTX-free H2S scavenger alternative
- Grotan BK equivalent
- Protectol HT alternative supplier
```

#### Layer 5: Commercial Intent Cluster

```
Primary: "MEA Triazine price per ton"

Cluster Members:
- H2S scavenger price 2026
- bulk triazine price India
- MEA Triazine MOQ
- triazine sample request
- H2S scavenger COA TDS
```

### 4.3 Auto-Generation Logic

```typescript
function generateKeywordClusters(product: EnrichedProduct): KeywordClusterSet {
  return {
    identity: {
      primary: `${product.name} manufacturer India`,
      members: [
        `${product.name} supplier India`,
        `${product.name} price`,
        `${product.name} bulk`,
        `buy ${product.name}`,
        product.iupacName ? `${product.iupacName} manufacturer` : null,
        product.casNumber ? `CAS ${product.casNumber} supplier` : null,
        ...product.alternateNames.slice(0, 5).map(n => `${n} manufacturer`),
      ].filter(Boolean),
    },

    geographic: product.exportMarkets.map(country => ({
      primary: `${product.name} supplier ${country}`,
      members: [
        `${product.name} ${country}`,
        `${product.primaryKeyword} ${country}`,
        `chemical supplier ${country}`,
        `${product.name} CIF ${country}`,
        ...(product.localLanguageNames[country.toLowerCase()] || []),
      ],
    })),

    application: product.applications.map(app => ({
      primary: `${product.name} for ${app}`,
      members: [
        `${app} chemical supplier`,
        `${product.chemicalClass} for ${app}`,
        `best ${app} chemical`,
      ],
    })),

    comparison: product.competitorBrands.map(brand => ({
      primary: `${product.name} vs ${brand}`,
      members: [
        `${brand} alternative`,
        `${brand} equivalent supplier India`,
        `${brand} replacement`,
      ],
    })),

    commercial: {
      primary: `${product.name} price per ton`,
      members: [
        `${product.name} MOQ`,
        `${product.name} sample`,
        `${product.name} COA TDS SDS`,
        `${product.name} packaging options`,
        `${product.name} export documentation`,
      ],
    },
  };
}
```

### 4.4 Search Volume Estimation (Without Paid Tools)

For a B2B chemical manufacturer, you can estimate search volume using:

| Method | How to Use | Accuracy |
|--------|-----------|----------|
| Google Keyword Planner | Free with Google Ads account, shows monthly ranges | Medium |
| Google Search Console | Real impressions for queries you already rank for | High (own data) |
| Google Trends | Compare relative volume between products/regions | Directional |
| Google Autocomplete | If Google suggests it, it has meaningful volume | Qualitative |
| People Also Ask | Shows related questions with real search demand | Qualitative |
| Competitor SERP analysis | If top 3 results have high DA, keyword is competitive | Indirect |
| Industry-specific proxies | Import/export data, IndiaMart inquiries, trade show attendance | Business signal |

#### Chemical Industry Volume Estimation Framework

```
Volume Score 1-10:

10 = Broad category term (e.g., "H2S scavenger") — 5,000+ monthly
 8 = Product name generic (e.g., "MEA Triazine") — 1,000-5,000 monthly
 6 = Product + intent (e.g., "MEA Triazine supplier") — 200-1,000 monthly
 4 = Product + geo (e.g., "MEA Triazine UAE") — 50-200 monthly
 2 = Long-tail specific (e.g., "MEA Triazine 78% CIF Jebel Ali") — 10-50 monthly
 1 = Ultra-niche (e.g., "CAS 4719-04-4 supplier Oman") — <10 monthly

Note: In B2B chemicals, even 10 searches/month at $5,000/MT value
means each search could be worth $50,000+ in revenue.
Low volume ≠ low value in this industry.
```

### 4.5 Competitor Gap Analysis

#### Step 1: Identify Your Competitors

```
Direct Competitors (same products):
- Jay Dinesh Chemicals (India)
- IRO Group (China)
- Dongying Dayong (China)
- Saudi Multichem (KSA)
- Tasfyeh Group (Iran)

Marketplace Competitors (ranking for your keywords):
- IndiaMart listings
- Alibaba.com product pages
- Made-in-China.com listings
- TradeIndia listings

Knowledge Competitors (ranking for informational queries):
- PubChem (CAS number pages)
- Sigma-Aldrich product pages
- ChemicalBook.com
- Wikipedia chemical articles
```

#### Step 2: Gap Analysis Framework

```typescript
interface CompetitorGap {
  keyword: string;
  ourRanking: number | null;    // null = not ranking
  competitorRanking: number;
  competitorDomain: string;
  gapType: 'missing' | 'weak' | 'opportunity';
  actionRequired: string;
}

// Gap Types:
// 'missing' = We have no page for this keyword at all
// 'weak' = We rank but below position 10
// 'opportunity' = Competitor content is thin, we can beat them
```

#### Step 3: Automated Gap Detection

```typescript
function detectContentGaps(product: EnrichedProduct): ContentGap[] {
  const expectedPages = [
    { type: 'product', path: `/product/${product.slug}` },
    ...product.exportMarkets.map(c => ({
      type: 'country',
      path: `/supply/${product.slug}/${slugify(c)}`
    })),
    ...product.competitorBrands.map(b => ({
      type: 'comparison',
      path: `/compare/${product.slug}-vs-${slugify(b)}`
    })),
    ...product.applications.map(a => ({
      type: 'application',
      path: `/applications/${slugify(a)}`
    })),
  ];

  // Check which pages exist vs. which should exist
  return expectedPages.filter(page => !pageExists(page.path));
}
```

### 4.6 Topic Cluster Architecture for Chemicals

```
PILLAR PAGE: /product/mea-triazine-78-h2s-scavenger
    |
    +-- CLUSTER: /supply/mea-triazine-78/uae
    +-- CLUSTER: /supply/mea-triazine-78/saudi-arabia
    +-- CLUSTER: /supply/mea-triazine-78/qatar
    +-- CLUSTER: /supply/mea-triazine-78/oman
    +-- CLUSTER: /supply/mea-triazine-78/kuwait
    +-- CLUSTER: /supply/mea-triazine-78/iraq
    +-- CLUSTER: /compare/mea-triazine-vs-mma-triazine
    +-- CLUSTER: /compare/mea-triazine-vs-triasorb
    +-- CLUSTER: /applications/h2s-scavenger-oil-gas
    +-- CLUSTER: /applications/biogas-h2s-removal
    +-- CLUSTER: /blog/how-h2s-scavengers-work
    +-- CLUSTER: /resources/mea-triazine-dosage-calculator
    +-- CLUSTER: /industries/oil-gas-h2s-scavenger

All cluster pages link back to the pillar (product page).
The pillar links out to all clusters.
This builds TOPICAL AUTHORITY in Google's eyes.
```

---


## Phase 5: Implementation Steps

### Step 1: Expand Payload CMS Product Collection
- Add all new fields from Phase 1 to `src/collections/Products.ts`
- Create field groups for admin UX (Chemical Identity, Export, SEO Engine)
- Run migration on PostgreSQL

### Step 2: Build the Ranking Calculator
- Create `src/lib/seo-engine/ranking-calculator.ts`
- Input: Product data -> Output: Numeric score + action recommendations
- Configurable weights per metric category

### Step 3: Build Schema Generator
- Create `src/lib/seo-engine/schema-generator.ts`
- Replace all `if (slug === ...)` logic in ProductSchema.tsx
- One function that handles ANY product from data alone

### Step 4: Build Meta/Content Generators
- Create `src/lib/seo-engine/meta-generator.ts`
- Create `src/lib/seo-engine/faq-generator.ts`
- Create `src/lib/seo-engine/direct-answer-generator.ts`
- Create `src/lib/seo-engine/keyword-generator.ts`

### Step 5: Build Gulf Country Page Engine
- Create `src/lib/seo-engine/gulf-page-generator.ts`
- Define Gulf country configs (ports, regulations, languages, transit times)
- Auto-generate country-specific content per product

### Step 6: Build the Unified Product SEO API
- Create `src/app/api/seo-engine/route.ts`
- Endpoint that returns all SEO artifacts for a product
- Used by frontend components to render schema, meta, content

### Step 7: Migrate Existing Data
- Backfill new CMS fields for existing 17+ products
- Verify output matches current hardcoded content
- Gradually remove old `src/lib/seo/*.ts` per-product files

---


## Google Ranking Rules

### The Core Ranking Factors (2025-2026)

Based on research from [HubSpot](https://blog.hubspot.com/marketing/google-ranking-algorithm-infographic), [Search Engine Journal](https://www.searchenginejournal.com/), and [Google's own documentation](https://developers.google.com/search):

| Priority | Factor | Weight | What It Means for You |
|----------|--------|--------|----------------------|
| 1 | Content Quality & Depth | Very High | Each product page must thoroughly cover the chemical, its applications, specs, safety, and buyer questions |
| 2 | Backlinks (Quality > Quantity) | Very High | Links from industry directories, trade publications, chemical databases |
| 3 | Search Intent Match | High | Understand if searcher wants to BUY, COMPARE, or LEARN — serve the right page |
| 4 | Topical Authority | High | Cover every aspect of your chemical categories (H2S scavengers, hydrotropes, biocides) deeply |
| 5 | Internal Linking | High | Product pages link to related blogs, comparisons, country pages, and back |
| 6 | Keyword Optimization | Medium-High | Use primary keyword in title, H1, first paragraph, URL — naturally |
| 7 | Page Experience (Core Web Vitals) | Medium | LCP < 2.5s, INP < 200ms, CLS < 0.1 |
| 8 | Page Freshness | Medium | Update product pages regularly (new FAQs, updated prices, new certifications) |
| 9 | E-E-A-T Signals | Medium | Show Experience, Expertise, Authoritativeness, Trustworthiness |
| 10 | Domain Authority | Medium | Builds over time with consistent quality content and backlinks |
| 11 | HTTPS / Security | Baseline | Already implemented |
| 12 | Mobile Optimization | Baseline | Already responsive |

### E-E-A-T for Chemical Manufacturers

E-E-A-T stands for **Experience, Expertise, Authoritativeness, Trustworthiness**:

```
EXPERIENCE:
- Show real manufacturing facility photos
- Display actual COA samples (redacted batch numbers)
- Customer testimonials with company names
- Case studies with real field results
- "Manufactured at our Ankleshwar, Gujarat facility since [year]"

EXPERTISE:
- Technical content written with chemical precision
- Correct IUPAC names, CAS numbers, molecular formulas
- Detailed specifications tables
- Application dosage guides
- Safety data and GHS compliance

AUTHORITATIVENESS:
- ISO 9001:2015 certification badge
- Industry association memberships
- Published in trade journals
- Cited by other industry websites
- Listed in chemical databases (PubChem, ChemicalBook)

TRUSTWORTHINESS:
- HTTPS (done)
- Clear contact information (done)
- Physical address with map (done)
- Transparent pricing or "request quote" process
- Free samples offered
- Real customer reviews/testimonials
- Privacy policy and terms (done)
```

---


## SEO Rules

### Rule 1: One Primary Keyword Per Page

Every page targets ONE primary keyword. Do not cannibalize keywords across pages.

```
CORRECT:
/product/mea-triazine-78-h2s-scavenger -> "MEA Triazine 78% manufacturer"
/supply/mea-triazine-78/uae -> "MEA Triazine supplier UAE"
/compare/mea-triazine-vs-mma-triazine -> "MEA Triazine vs MMA Triazine"

WRONG:
/product/mea-triazine-78 -> targets "MEA Triazine UAE" (cannibalizes country page)
/blog/about-triazine -> targets "MEA Triazine manufacturer" (cannibalizes product page)
```

### Rule 2: Title Tag Formula

```
Product Pages: [Product Name] [Differentiator] | [Primary Benefit] | [Brand]
Example: "MEA Triazine 78% H2S Scavenger | Manufacturer India | Vasudev Chemo Pharma"

Country Pages: [Product] Supplier [Country] | CIF [Port] | [Brand]
Example: "MEA Triazine Supplier UAE | CIF Jebel Ali | Vasudev Chemo Pharma"

Comparison Pages: [Product A] vs [Product B] | [Key Difference]
Example: "MEA Triazine vs MMA Triazine | Which H2S Scavenger for Your Operation"

Title Length: 50-60 characters (Google truncates at ~60)
```

### Rule 3: URL Structure

```
RULES:
- Use lowercase, hyphens only
- Include primary keyword in URL
- Keep URLs short and descriptive
- Never change URLs once indexed (use 301 redirects if you must)

STRUCTURE:
/product/[slug]                        -> Product detail
/supply/[product-slug]/[country-slug]  -> Country supply page
/compare/[product-a]-vs-[product-b]    -> Comparison
/applications/[application-slug]       -> Application page
/industries/[industry-slug]            -> Industry page
/blog/[article-slug]                   -> Blog/resource
```

### Rule 4: Heading Hierarchy

```
H1: One per page, contains primary keyword
    (Product name for product pages)

H2: Section headings (Specifications, Applications, Safety, FAQ)
    Include secondary keywords naturally

H3: Sub-sections within H2s
    (Individual applications, specific specs)

NEVER skip heading levels (H1 -> H3 without H2)
NEVER use more than one H1
```

### Rule 5: Content Depth Requirements

```
Product Pages: Minimum 2,000 words
- Description (200+ words)
- Technical specifications (table)
- Applications & industries (300+ words)
- Safety & compliance (200+ words)
- Packaging & logistics (150+ words)
- FAQs (10+ questions, 500+ words)
- Direct answer snippet (40-55 words)
- Synonyms/alternate names section

Country Pages: Minimum 1,000 words
- Transit details
- Local brand equivalents
- Import documentation
- Local regulations
- FAQs specific to that country
- Arabic/local language keywords

Blog/Resource Pages: Minimum 1,500 words
- Educational, not promotional
- Include data, tables, comparisons
- Link to product pages naturally
```

### Rule 6: Image Optimization

```
RULES:
- Every product image: descriptive alt text with keyword
  alt="MEA Triazine 78% H2S Scavenger - clear liquid in HDPE drum"
- WebP/AVIF format for speed
- Dimensions declared (width, height) to prevent CLS
- Lazy loading for below-fold images
- fetchpriority="high" for hero/LCP image
- Image sitemap inclusion (already done in your sitemap.xml)
```

### Rule 7: Schema Markup (Structured Data)

```
EVERY product page MUST have:
1. Product schema (Schema.org/Product)
2. ChemicalSubstance schema (Schema.org/ChemicalSubstance)
3. FAQPage schema (Schema.org/FAQPage)
4. BreadcrumbList schema
5. Organization schema (global)

OPTIONAL based on ranking score:
6. HowTo schema (for usage guides)
7. Review/Rating schema (when customer reviews exist)
8. VideoObject schema (when product videos exist)
```

### Rule 8: Page Speed (Core Web Vitals)

```
THRESHOLDS (must pass all 3 at 75th percentile):
- LCP (Largest Contentful Paint): < 2.5 seconds
- INP (Interaction to Next Paint): < 200 milliseconds
- CLS (Cumulative Layout Shift): < 0.1

HOW TO ACHIEVE:
- Preload LCP image with fetchpriority="high"
- Convert images to WebP/AVIF
- Defer non-critical JavaScript
- Use Next.js Image component (already doing)
- Minimize third-party scripts
- Use font-display: swap for web fonts
- Server-side render critical content
```

### Rule 9: Freshness Signals

```
RULES:
- Update product pages at least quarterly (new FAQ, price update, new certification)
- Publish 2-4 blog posts per month related to your products
- Update sitemap lastmod dates when content changes
- Add "Last updated: [date]" to product pages
- Announce new products/certifications via blog posts
```

### Rule 10: Canonical Tags & Duplicate Prevention

```
RULES:
- Every page must have a canonical tag pointing to itself
- If same product appears under multiple URLs, canonical to the primary
- Use robots noindex for admin, API, and draft pages
- Never have two pages targeting the exact same keyword
- Country pages are NOT duplicates (they have unique content)
```

---


## AEO Rules

### What is AEO (Answer Engine Optimization)?

AEO is the practice of structuring content so that AI-powered search platforms
(Google AI Overviews, ChatGPT, Perplexity, Gemini, Copilot) select your content
as the cited source when generating answers.

AI-referred sessions to websites grew **527% year-over-year** through mid-2025.
ChatGPT handles over **2 billion queries daily**.

### AEO Rule 1: Direct Answer Snippet (Above the Fold)

```
RULE: Every product page MUST have a 40-55 word direct answer snippet
rendered above the fold that AI engines can extract verbatim.

FORMULA:
"[Product Name] (CAS [number]) is a [form] [chemical class] with [active content].
It is used for [primary application] in [primary industry]. Manufactured by
[company] in [location], with [key certifications] and export to [top markets]."

EXAMPLE:
"MEA Triazine 78% is a high-concentration monoethanolamine-based H2S scavenger
(CAS 4719-04-4) used to remove hydrogen sulfide from natural gas, crude oil,
and biogas. It reacts irreversibly with H2S to form stable thiadiazine byproducts,
preventing equipment corrosion. Manufactured by Vasudev Chemo Pharma, Gujarat, India."
```

### AEO Rule 2: Lead with the Claim, Stack Proof

```
STRUCTURE:
1. CLAIM (first sentence): State the answer directly
2. EVIDENCE (next 2-3 sentences): Data, specs, mechanisms
3. TRUST SIGNAL (final sentence): Manufacturer credentials, certifications

DO NOT:
- Start with "In this article..." or "Let's explore..."
- Bury the answer below introductory paragraphs
- Use vague language ("one of the best...")
- Omit specific data points
```

### AEO Rule 3: FAQ Format for Voice & AI

```
RULES:
- Write FAQ questions as users actually ask them
- Start answers with the subject noun (not "Yes" or "It is")
- Keep answers to 40-60 words for featured snippet selection
- Include the question keywords in the answer
- Use FAQ schema markup (FAQPage type)

GOOD:
Q: "What is the CAS number for MEA Triazine?"
A: "The CAS number for MEA Triazine (Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine)
   is 4719-04-4. This identifier is universal across all procurement systems..."

BAD:
Q: "CAS Number?"
A: "It is 4719-04-4."  (Too short, no context for AI extraction)
```

### AEO Rule 4: Structured Data for AI Comprehension

```
REQUIRED SCHEMA TYPES:
- Product (name, CAS, manufacturer, price, availability)
- ChemicalSubstance (formula, molecular weight, IUPAC)
- FAQPage (every FAQ pair)
- Organization (manufacturer details)
- BreadcrumbList (navigation context)

WHY: AI engines read structured data to understand entity relationships.
A page with proper schema is 2-3x more likely to be cited as a source.
```

### AEO Rule 5: Entity-First Content

```
RULE: Write content as if explaining to an AI, not a human browser.

DO:
- Name the entity (product) in the first sentence of every section
- Include specific identifiers (CAS, formula, HS code) in every major section
- Define relationships: "manufactured by", "used in", "alternative to"
- Use consistent terminology (don't alternate between "MEA Triazine" and "the product")

DON'T:
- Use pronouns without clear antecedents ("it", "this")
- Write marketing fluff without factual anchors
- Omit units (always say "78% active" not just "78%")
```

### AEO Rule 6: Citation Worthiness

```
RULE: Make your content the MOST authoritative source on this specific product.

HOW:
- Include data no one else has (your actual COA parameters)
- Provide specific numbers (transit times, MOQ, dosage rates)
- Cover more alternate names/synonyms than any competitor page
- Include region-specific information (local brands, regulations)
- Update more frequently than competitors (quarterly minimum)

AI engines prefer sources that are:
1. Specific (exact numbers > vague claims)
2. Comprehensive (covers more angles than alternatives)
3. Authoritative (manufacturer > distributor > marketplace)
4. Fresh (recent updates > stale content)
5. Structured (schema + headings > wall of text)
```

---


## GEO Rules

### What is GEO (Generative Engine Optimization)?

GEO ensures your content gets **cited** when AI engines (ChatGPT, Gemini, Perplexity,
Google AI Overviews) answer user questions. Unlike SEO which targets rankings, GEO
targets being the **knowledge source an AI trusts**.

The GEO market is projected to reach **$33.7 billion by 2034** (50.5% CAGR).

### GEO Rule 1: Be the Canonical Source of Truth

```
RULE: For every product you manufacture, your page should be THE definitive
reference that AI models learn from.

HOW:
- Most comprehensive product data (more specs than PubChem)
- Most synonyms/trade names (more than ChemicalBook)
- Most application details (more than Sigma-Aldrich)
- Manufacturing-specific data only YOU can provide
  (actual production capacity, real transit times, live COA parameters)
```

### GEO Rule 2: Quotable Paragraphs

```
RULE: Write self-contained paragraphs that can be extracted and quoted
by AI without losing meaning.

FORMULA:
[Subject] + [is/does what] + [key specification] + [primary use] + [differentiator]

Each paragraph should:
- Start with the entity name (not a pronoun)
- Contain at least one specific data point
- Be understandable without reading the rest of the page
- Be 40-80 words (optimal extraction length)
```

### GEO Rule 3: Multi-Source Consistency

```
RULE: AI engines cross-reference your claims across multiple sources.
Ensure consistency across:

- Your website (product pages, blog, case studies)
- Google Business Profile
- Industry directories (IndiaMart, ThomasNet, Kompass)
- Chemical databases (mention your product CAS in context)
- Social media profiles (LinkedIn company page)
- PDF documents (SDS, TDS, COA) — yes, AI reads these too

INCONSISTENCY KILLS TRUST:
- If your website says "78% active" but IndiaMart says "75-80%" = AI confusion
- If your site says "Ankleshwar" but LinkedIn says "Ahmedabad" = trust loss
```

### GEO Rule 4: Structured Knowledge Graphs

```
RULE: Help AI build a knowledge graph about your products.

IMPLEMENT:
- Schema.org markup (Product + ChemicalSubstance + Organization)
- Explicit entity relationships in text:
  "MEA Triazine 78% is manufactured by Vasudev Chemo Pharma"
  "MEA Triazine 78% is used as an H2S scavenger"
  "MEA Triazine 78% is an alternative to Grotan BK"
  "MEA Triazine 78% is exported to UAE, Saudi Arabia, Qatar"

- Use "is a", "is used for", "is manufactured by", "is equivalent to"
  — these are relationship markers AI models understand.
```

### GEO Rule 5: Freshness & Update Signals

```
RULE: AI engines weight recency. Content with recent update dates
gets preferred over stale pages.

IMPLEMENT:
- Add "Last updated: [date]" to every product page (visible)
- Add dateModified in structured data
- Publish monthly market updates (price trends, new certifications)
- Update FAQs quarterly with new questions from real inquiries
- Blog about industry changes that affect your products
```

### GEO Rule 6: Authority Through Breadth

```
RULE: AI engines determine source authority by how much of a topic you cover.

FOR EACH PRODUCT, AIM TO HAVE:
- 1 product detail page (2,000+ words)
- 6 country supply pages (Gulf countries)
- 2-3 comparison pages (vs. competitors)
- 2-3 application pages (per industry)
- 5-10 blog posts referencing the product
- FAQ section with 10-15 questions
- Case study (if possible)

TOTAL: 15-25 pages per product in your cluster
This signals to AI: "This site is THE authority on [product]"
```

### GEO Rule 7: Avoid AI-Blocking Patterns

```
DO NOT:
- Block AI crawlers in robots.txt (you currently allow them — good!)
- Use JavaScript-only rendering for critical content
- Put key information inside images without alt text
- Hide content behind login walls or paywalls
- Use aggressive popups that block content access
- Produce thin/duplicate pages that dilute authority

DO:
- Allow GPTBot, ChatGPT-User, Claude-Web, PerplexityBot (done in robots.txt)
- Server-side render all product content (Next.js SSR — done)
- Provide clean HTML with semantic headings
- Make PDF documents (SDS, TDS) crawlable
- Keep content publicly accessible
```

---


## Product Page Ranking Rules

### The 15 Essential Rules for Ranking Chemical Product Pages

#### Rule 1: Unique, Comprehensive Content

```
RULE: Each product page must have AT LEAST 2,000 words of unique content.
No two product pages should share more than 20% similar text.

SECTIONS REQUIRED:
1. Direct answer snippet (40-55 words, above the fold)
2. Product overview (200+ words)
3. Chemical identity (name, CAS, formula, IUPAC, synonyms)
4. Technical specifications (table format)
5. Applications and industries (300+ words with specifics)
6. Safety and compliance (GHS, hazard statements, handling)
7. Packaging and logistics (drums, IBCs, MOQ)
8. Export information (ports, transit times, documentation)
9. Quality and certifications (ISO, COA, SDS, TDS)
10. FAQs (10-15 questions, 800+ words)
11. Related products / alternatives
12. Call to action (enquiry form, WhatsApp)
```

#### Rule 2: Primary Keyword in Critical Positions

```
MUST APPEAR IN:
- Page title (first 30 characters if possible)
- URL slug
- H1 heading
- First paragraph (first 100 words)
- At least one H2 heading
- Image alt text (primary image)
- Meta description

KEYWORD DENSITY:
- Primary keyword: 1-2% (natural usage)
- Secondary keywords: 0.5-1% each
- Never keyword stuff — Google penalizes this
```

#### Rule 3: Search Intent Alignment

```
PRODUCT PAGE INTENT: Transactional/Commercial

The user searching "MEA Triazine 78% supplier" WANTS TO BUY.
Your page must serve this intent:

MUST HAVE:
- Clear "Request Quote" / "Enquire Now" CTA
- Pricing information or "Price on Request"
- MOQ, packaging, delivery terms
- How to order process
- Contact methods (form, WhatsApp, email)

DO NOT:
- Write only educational content without commercial signals
- Hide the enquiry process
- Force registration before showing product details
```

#### Rule 4: Product Structured Data (Complete)

```json
{
  "@type": "Product",
  "name": "MEA Triazine 78% H2S Scavenger",
  "sku": "VCP-MEA-78",
  "description": "...",
  "image": "...",
  "brand": { "@type": "Brand", "name": "Vasudev Chemo Pharma" },
  "manufacturer": { "@type": "Organization", "name": "..." },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "USD",
    "seller": { "@type": "Organization", "name": "..." }
  },
  "category": "H2S Scavenger",
  "countryOfOrigin": "India",
  "alternateName": ["...", "..."],
  "additionalProperty": [
    { "@type": "PropertyValue", "name": "CAS Number", "value": "4719-04-4" },
    { "@type": "PropertyValue", "name": "Active Content", "value": "78%" }
  ]
}
```

#### Rule 5: Visual Content Requirements

```
EVERY PRODUCT PAGE MUST HAVE:
- Primary product image (above the fold)
- Specifications table (structured data in HTML table)
- At least one infographic or diagram (process flow, comparison chart)
- Document download links (SDS, TDS, COA sample)
- Video preferred (manufacturing process, product demo)

IMAGE RULES:
- WebP format, fallback to JPEG
- Descriptive file names: mea-triazine-78-h2s-scavenger-drum.webp
- Alt text with keyword: "MEA Triazine 78% H2S Scavenger in 200L HDPE Drum"
- Explicit width/height to prevent layout shift
```

#### Rule 6: Mobile-First Design

```
RULES:
- Product pages must score 90+ on Google PageSpeed (mobile)
- Touch targets minimum 48x48px
- Text readable without zooming (16px minimum body text)
- Tables scrollable on mobile (not overflowing)
- CTAs visible without scrolling on mobile
- Specification tables in responsive format
```

#### Rule 7: Trust Signals on Every Product Page

```
DISPLAY:
- ISO 9001:2015 certification badge
- "Manufactured in India" with facility details
- "Free sample available" messaging
- Customer count or export country count
- "Exported to 30+ countries"
- Document availability (COA, SDS, TDS)
- Response time guarantee ("Reply within 24 hours")
- WhatsApp direct contact button
```

#### Rule 8: Related Product Cross-Linking

```
RULE: Every product page links to 3-5 related products.

EXAMPLE (on MEA Triazine 78% page):
- MMA Triazine 40% (alternative chemistry)
- MEA Triazine High Concentration (same family)
- Biocide Oil & Gas (same industry)
- EDDM Non-Triazine H2S Scavenger (different approach)

This distributes link equity and keeps users on-site.
```

#### Rule 9: Breadcrumb Navigation

```
FORMAT:
Home > Products > [Category] > [Product Name]
Home > Products > Speciality Chemicals > MEA Triazine 78% H2S Scavenger

RULES:
- Always present on product pages
- Include BreadcrumbList schema
- Each level links to a real, indexed page
- Category page must exist and list products
```

#### Rule 10: Page Load Speed

```
TARGET: < 3 seconds on 3G connection, < 1.5 seconds on broadband

PRODUCT PAGE SPECIFICS:
- Hero image: preloaded, fetchpriority="high"
- Specification table: in initial HTML (not lazy loaded)
- Schema JSON-LD: in <head> or immediately after body open
- Below-fold content: can be lazy loaded
- Third-party scripts: deferred
- Fonts: preloaded, font-display: swap
```

#### Rule 11: Regular Content Updates

```
SCHEDULE:
- Monthly: Add new FAQ from real customer questions
- Quarterly: Update pricing signals, add new certifications
- When relevant: New application discovered, new market entered
- Always: Update "Last modified" date when changing content

WHY: Google uses "query freshness" signals.
Product pages updated in last 90 days rank better than stale ones.
```

#### Rule 12: User Engagement Signals

```
OPTIMIZE FOR:
- Low bounce rate (user stays on page)
  -> Provide immediate value above the fold
  -> Use anchor links to sections (table of contents)

- High time on page
  -> Detailed content, expandable FAQs
  -> Videos and interactive elements

- CTR from SERP
  -> Compelling meta title and description
  -> Use numbers, brackets, year in title
  -> "MEA Triazine 78% Manufacturer India [2026] | Free Sample"
```

#### Rule 13: Avoid Thin Content / Duplicate Issues

```
RULES:
- If two products are very similar (BKC 50% vs BKC 80%), make EACH page unique:
  - Different FAQs
  - Different primary applications highlighted
  - Different buyer personas addressed
  - Unique 500+ words differentiating content
  - Cross-link between them with clear "which to choose" guidance

- NEVER copy-paste descriptions between products
- Each page must pass Copyscape/plagiarism check
```

#### Rule 14: Local SEO Signals for Export Markets

```
FOR EACH GULF COUNTRY:
- Include country name in content naturally
- Mention specific ports (Jebel Ali, King Abdulaziz Port Dammam)
- Reference local industry/fields (Shah field UAE, Ghawar Saudi)
- Include Arabic keywords in a "Known As" section
- List local competitor brands you're equivalent to
- Specify transit time from India
```

#### Rule 15: Conversion-Optimized Layout

```
ABOVE THE FOLD:
- Product name (H1)
- Key specs summary (CAS, formula, active %)
- Direct answer snippet
- Primary image
- "Get Quote" button

MID-PAGE:
- Detailed specs table
- Applications list
- Safety & compliance
- Packaging & logistics

BOTTOM:
- FAQs (expandable accordion)
- Related products
- Final CTA (enquiry form)
- Trust badges
```

---


## Website Ranking Rules

### Domain-Level Rules That Affect ALL Pages

#### Rule 1: Topical Authority (Most Important in 2025-2026)

```
WHAT: Google rewards sites that cover a subject thoroughly, consistently, and credibly.
Clustered content drives ~30% more traffic and holds rankings 2.5x longer.

FOR VASUDEV CHEMO PHARMA:
You need DEEP coverage across your chemical categories:

Category: H2S Scavengers
- Pillar: /product/mea-triazine-78-h2s-scavenger
- /product/mma-triazine-40
- /product/mea-triazine-78-high-concentration
- /product/mma-triazine-40-btx-free
- /product/eddm-non-triazine-h2s-scavenger
- /how-h2s-scavengers-work
- /mea-triazine-vs-mma-triazine
- /h2s-scavenger-oil-gas
- /industries/oil-gas-h2s-scavenger
- /industries/biogas
- 6 country supply pages per product
- Blog posts about H2S removal

Category: Hydrotropes
- Pillar: /hydrotropes
- /product/sodium-xylene-sulfonate-40
- /product/sodium-xylene-sulfonate-90
- /product/sodium-cumene-sulfonate-40
- /product/sodium-cumene-sulfonate-90
- /hydrotropes-global-export
- /applications/liquid-detergent-hydrotrope
- Blog posts about surfactant formulation

This coverage tells Google: "This site is THE expert on industrial chemicals for export"
```

#### Rule 2: Site Architecture (3-Click Rule)

```
RULE: Every important page must be reachable within 3 clicks from homepage.

ARCHITECTURE:
Homepage (1 click)
  -> /product (2 clicks - product listing)
    -> /product/[slug] (3 clicks - product detail)

Homepage (1 click)
  -> Category link in navigation (2 clicks)
    -> /product/[slug] (3 clicks)

FLAT IS BETTER:
- Maximum folder depth: 3 levels (/supply/product/country)
- No orphan pages (every page has at least 2 internal links pointing to it)
- Sitemap covers 100% of indexable pages
```

#### Rule 3: Crawl Budget Optimization

```
WHAT: Crawl budget is how many pages Googlebot will crawl in a given time window.
If your site has pages Google doesn't think are valuable, it wastes crawl budget.

RULES:
- Block crawling of low-value pages (admin, API, drafts) — already done in robots.txt
- Keep XML sitemap updated with only canonical, indexable URLs
- Remove or noindex pages with thin/duplicate content
- Fast server response times (< 200ms TTFB)
- No broken links (404s waste crawl budget)
- No redirect chains (301 -> 301 -> 301 = budget waste)
- Use IndexNow to push new/updated pages proactively

YOUR SITE:
- ~50 product pages + ~100 cluster pages = ~150 important URLs
- Well within Google's crawl appetite for a site of your authority
- Focus on quality of each page, not crawl budget constraints
```

#### Rule 4: Domain Trust Signals

```
ACCUMULATE:
- Domain age (cannot speed up — you have what you have)
- Consistent publishing schedule (at least 2-4 posts/month)
- Backlinks from trusted industry sites:
  - Chemical industry directories
  - Trade association websites
  - B2B marketplaces (IndiaMart, ThomasNet)
  - Industry news publications
  - University/research citations
  - Government export/trade sites (DGFT)
- Brand mentions even without links (unlinked brand mentions build entity trust)
- Consistent NAP (Name, Address, Phone) across all directories
```

#### Rule 5: Technical SEO Baseline

```
NON-NEGOTIABLE REQUIREMENTS:
[x] HTTPS everywhere
[x] XML sitemap (auto-generated, includes all products)
[x] robots.txt (properly configured)
[x] Mobile responsive
[x] Server-side rendering (Next.js SSR)
[x] Clean URL structure
[x] Canonical tags on all pages
[x] Proper 404 handling
[x] Structured data (JSON-LD)
[ ] Hreflang tags (if you add Arabic pages in future)
[ ] IndexNow integration (partially done, enhance)
[ ] Core Web Vitals all green
[ ] No mixed content warnings
[ ] Proper redirect handling (no chains)
```

#### Rule 6: Content Consistency & Publishing Velocity

```
RULE: Google observes your publishing pattern. Consistent output builds trust.

RECOMMENDED SCHEDULE:
- Week 1: New product page or major product update
- Week 2: Blog post (educational, ties to product cluster)
- Week 3: Country supply page or comparison page
- Week 4: FAQ expansion, case study, or industry page update

MINIMUM: 4 new/updated pages per month
IDEAL: 8-12 new/updated pages per month

Each new page MUST link to existing content (builds internal authority)
```

#### Rule 7: Brand Search Optimization

```
RULE: When someone searches your brand name, your site must dominate the SERP.

FOR "Vasudev Chemo Pharma":
- Position 1: Homepage
- Position 2-3: About page, product listing
- Position 4-5: Google Business Profile, LinkedIn
- Also appearing: IndiaMart listing, ThomasNet, TradeIndia

ACTION:
- Claim and optimize Google Business Profile
- Consistent branding on all platforms
- Respond to all reviews/inquiries publicly
- Publish press releases for major milestones
```

---


## Page Creation Rules

### When to Create a New Page

```
CREATE A PAGE WHEN:
1. There is a distinct search query with commercial intent that no existing page targets
2. The topic is different enough from existing pages to avoid cannibalization
3. You can write at least 1,000 unique words about the topic
4. The page will earn at least 2-3 internal links from existing content
5. The page serves a real user need (not just keyword stuffing)

DO NOT CREATE A PAGE WHEN:
- An existing page already ranks for that keyword (update instead)
- The content would be 90% similar to another page (merge instead)
- You cannot provide unique value beyond what competitors offer
- The keyword has zero commercial value for your business
```

### Page Creation Checklist

```
BEFORE PUBLISHING:
[ ] Primary keyword identified and not used elsewhere
[ ] Title tag: 50-60 characters, keyword near front
[ ] Meta description: 150-160 characters, compelling with keyword
[ ] URL: short, lowercase, hyphenated, keyword-inclusive
[ ] H1: contains primary keyword, unique across site
[ ] Content: minimum word count met for page type
[ ] Images: optimized, alt text, dimensions declared
[ ] Schema markup: appropriate type for page content
[ ] Internal links: 3-5 outgoing to related pages
[ ] Internal links: 2-3 incoming from existing pages (update those pages)
[ ] Canonical tag: self-referencing
[ ] Mobile preview: checked, readable, functional
[ ] Page speed: tested, LCP < 2.5s
[ ] Direct answer snippet: present if product/info page
[ ] FAQ section: present if product page
[ ] CTA: present and visible

AFTER PUBLISHING:
[ ] Added to XML sitemap (auto in your setup)
[ ] Submitted via IndexNow API
[ ] Submitted via Google Search Console URL inspection
[ ] Internal links verified (pointing correctly)
[ ] Social share (LinkedIn, to generate initial signals)
[ ] Check indexing after 24-48 hours
```

### Page Types and Their Requirements

| Page Type | Min Words | Schema Required | Internal Links (incoming) | Update Frequency |
|-----------|-----------|-----------------|---------------------------|------------------|
| Product Detail | 2,000 | Product + Chemical + FAQ + Breadcrumb | 5+ | Quarterly |
| Country Supply | 1,000 | Product + FAQ + Breadcrumb | 3+ | Semi-annually |
| Comparison | 1,500 | Product (x2) + FAQ | 3+ | Semi-annually |
| Application | 1,200 | Article + FAQ | 3+ | Semi-annually |
| Industry | 1,500 | Article + FAQ | 3+ | Semi-annually |
| Blog Post | 1,500 | Article + FAQ (optional) | 2+ | Once (evergreen) |
| Case Study | 1,000 | Article | 2+ | Once |
| Resource/Guide | 2,000 | Article + HowTo (optional) | 3+ | Annually |

### URL Patterns (Enforce Consistently)

```
Product:      /product/{product-slug}
Country:      /supply/{product-slug}/{country-slug}
Comparison:   /compare/{product-a}-vs-{product-b}
Application:  /applications/{application-slug}
Industry:     /industries/{industry-slug}
Blog:         /blog/{article-slug}
Case Study:   /case-study/{case-slug}
Service:      /service/{service-slug}
Resource:     /resources/{resource-slug}
Landing:      /{category-slug}/{topic-slug}
```

---


## Page Indexing Rules

### How Google Decides Whether to Index Your Page

```
Google's indexing is NOT automatic. It is a DECISION based on:

1. DISCOVERY: Can Googlebot find the page?
   - Is it in the sitemap?
   - Is it linked from other pages?
   - Was it submitted via Search Console or IndexNow?

2. CRAWL: Will Googlebot allocate resources to crawl it?
   - Is the server responsive (fast TTFB)?
   - Is the page not blocked by robots.txt?
   - Is the site's crawl demand high enough?

3. INDEX DECISION: Is it worth indexing?
   - Is the content unique and valuable?
   - Does it duplicate another indexed page?
   - Does the site have sufficient authority for this content volume?
   - Is the content quality above Google's quality threshold?

4. RANKING: If indexed, where does it rank?
   - Based on all the ranking factors above
```

### Indexing Rules You MUST Follow

#### Rule 1: Ensure Discovery

```
METHODS (use ALL):
1. XML Sitemap
   - Include ONLY canonical, indexable pages
   - Update lastmod when content changes
   - Submit sitemap URL in Search Console
   - Your current setup: /sitemap.xml/route.ts — GOOD

2. IndexNow Protocol
   - Push new/updated URLs to Bing/Yandex instantly
   - Your current setup: /src/lib/seo/indexnow.ts — ENHANCE
   - Trigger on: product create, product update, blog publish

3. Google Search Console URL Inspection
   - Manually request indexing for high-priority new pages
   - Use after publishing critical product pages

4. Internal Links
   - Every new page must receive 2-3 links from existing indexed pages
   - Google discovers pages by following links from already-indexed pages
```

#### Rule 2: Help Google Crawl Efficiently

```
RULES:
- Server TTFB < 200ms (Vercel handles this well)
- No redirect chains (A -> B is fine; A -> B -> C is bad)
- Respond with proper HTTP status codes:
  - 200 for live pages
  - 301 for permanent redirects
  - 404 for deleted pages (not soft 404s)
  - 410 for permanently removed pages
- robots.txt allows important paths, blocks admin/API
- No crawl traps (infinite pagination, calendar URLs, faceted filters)
- Flat site architecture (3 levels maximum)
```

#### Rule 3: Make the Indexing Decision Easy

```
GOOGLE WILL INDEX YOUR PAGE IF:
- Content is unique (not duplicated elsewhere on your site or web)
- Content has sufficient depth (not a thin page with 100 words)
- Page has clear purpose and satisfies user intent
- Site has earned authority for this topic area
- Page is not blocked by noindex/canonical to another page

GOOGLE WILL NOT INDEX YOUR PAGE IF:
- Content is too similar to another page on your site
- Page has thin content (< 200 words of unique text)
- Page has no incoming links (orphan page)
- Site doesn't have authority to sustain this content volume
- Page has noindex tag or canonical pointing elsewhere
- Content is pure duplicate from manufacturer database
```

#### Rule 4: Monitor Indexing Health

```
CHECK WEEKLY IN GOOGLE SEARCH CONSOLE:
- Coverage report: How many pages indexed vs. submitted
- "Excluded" reasons: Fix any fixable issues
- "Discovered but not indexed": Content quality issue
- "Crawled but not indexed": Google doesn't find it valuable enough

HEALTHY METRICS:
- Index rate > 90% of submitted pages
- No increase in "excluded" pages over time
- New pages indexed within 48-72 hours of submission
- Zero "noindex" on pages you want indexed
```

#### Rule 5: IndexNow Integration (Speed Up Discovery)

```typescript
// Trigger IndexNow when product is created/updated in Payload CMS
async function notifyIndexNow(urls: string[]) {
  const payload = {
    host: "www.vasudevchemopharma.com",
    key: process.env.INDEXNOW_KEY,
    urlList: urls,
  };

  await fetch("https://api.indexnow.org/IndexNow", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}

// Call after:
// - New product published
// - Product updated (specs, price, FAQ)
// - New blog post published
// - New country page created
// - Any page content significantly changed
```

#### Rule 6: Avoid Index Bloat

```
DO NOT INDEX:
- Admin/Payload CMS pages (/admin/*)
- API routes (/api/*)
- Tag pages with very few products
- Paginated pages beyond page 2 (use rel="next/prev" or noindex)
- URL parameter variants (?sort=, ?filter=)
- Internal search results pages
- Draft/preview pages

USE:
- robots.txt Disallow for admin/API paths
- <meta name="robots" content="noindex"> for specific pages
- Canonical tags to consolidate duplicate content
- 301 redirects for old/moved pages (never leave them as 404 if linked)
```

#### Rule 7: Structured Sitemap Strategy

```
SITEMAP PRIORITY ALLOCATION:

Priority 1.0:  Homepage only
Priority 0.95: Hero product pages (ranking score 90-100)
Priority 0.9:  All active product pages
Priority 0.85: Country supply pages, key industry pages
Priority 0.8:  Comparison pages, application pages
Priority 0.7:  Blog posts, service pages
Priority 0.6:  Case studies, resource articles
Priority 0.5:  Legal pages, about page

CHANGE FREQUENCY:
- Products: monthly (you update them)
- Country pages: weekly (signals freshness)
- Blog: monthly (after initial publish)
- Static pages: yearly
```

---


## Internal Linking Rules

### Why Internal Links Are Critical

Internal links are the LARGEST on-page SEO lever most sites leave on the table.
~25% of pages on large sites receive zero internal links. Pages with more internal
links pointing to them get indexed faster and rank higher.

### Rule 1: Link Hierarchy (Authority Flow)

```
AUTHORITY FLOWS DOWNHILL:

Homepage (highest authority)
  |
  +-> Product listing page
  |     |
  |     +-> Individual product pages
  |           |
  |           +-> Country supply pages
  |           +-> Comparison pages
  |
  +-> Blog listing
  |     |
  |     +-> Individual blog posts
  |
  +-> Industries listing
        |
        +-> Individual industry pages

RULE: Higher-authority pages should link to lower pages to pass authority.
Lower pages should link BACK UP to reinforce the cluster connection.
```

### Rule 2: Contextual Internal Links

```
RULE: Internal links should be contextual (within body text), not just
navigational (header/footer/sidebar).

GOOD (contextual):
"Our MEA Triazine 78% [link] is the most popular grade for Gulf oilfield
operations. For buyers in the UAE, see our [dedicated UAE supply page] [link]
with Jebel Ali delivery details."

BAD (only navigational):
Footer link to product page (no contextual relevance signal)
```

### Rule 3: Anchor Text Rules

```
RULES:
- Use descriptive anchor text containing the target page's primary keyword
- Vary anchor text slightly across different linking pages (avoid over-optimization)
- Never use "click here" or "read more" as anchor text
- Include the product name or key term in the anchor

GOOD ANCHORS:
- "MEA Triazine 78% H2S Scavenger"
- "our MEA Triazine product"
- "H2S scavenger for oil and gas"
- "supply MEA Triazine to UAE"

BAD ANCHORS:
- "click here"
- "this product"
- "learn more"
- "link"
```

### Rule 4: Link Count Guidelines

```
PER PAGE:
- Outgoing internal links: 5-15 per page (natural distribution)
- Incoming internal links per product page: minimum 5
- Incoming internal links per cluster page: minimum 3

HIGH-PRIORITY PRODUCTS:
- Should receive 10+ internal links from various pages
- Every blog post in the same topic cluster should link to the product
- Every country page should link back to the product
- Every comparison page should link to both products
```

### Rule 5: Hub-and-Spoke Model

```
FOR EACH PRODUCT CLUSTER:

         [Blog: How H2S Scavengers Work]
                     |
                     v
[UAE Supply] <-- [PRODUCT PAGE (Hub)] --> [Saudi Supply]
                     ^
                     |
         [Comparison: MEA vs MMA] --> [MMA Product Page]
                     |
                     v
         [Industry: Oil & Gas]

EVERY SPOKE links to the HUB.
The HUB links to EVERY SPOKE.
SPOKES can link to each other when relevant.
```

### Rule 6: Automated Internal Link Suggestions

```typescript
// The SEO engine should auto-suggest internal links when new content is created

function suggestInternalLinks(newPage: Page, allPages: Page[]): LinkSuggestion[] {
  return allPages
    .filter(page => page.slug !== newPage.slug)
    .filter(page => hasTopicOverlap(newPage, page))
    .map(page => ({
      targetPage: page,
      suggestedAnchor: page.primaryKeyword || page.name,
      relevanceScore: calculateRelevance(newPage, page),
    }))
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, 10);
}
```

### Rule 7: Avoid Common Internal Linking Mistakes

```
DO NOT:
- Link to the same page multiple times with the same anchor text on one page
- Create orphan pages (no internal links pointing to them)
- Use nofollow on internal links (wastes PageRank)
- Link from every page to every other page (dilutes authority)
- Hide internal links in JavaScript that Google can't parse
- Over-link from low-quality pages to high-priority pages (link equity is proportional to source quality)

DO:
- Audit for orphan pages monthly (pages with 0 incoming links)
- Update old blog posts to link to new product pages
- Use breadcrumbs (adds structured internal links)
- Link from new content to older high-authority content
- Remove links to deleted/redirected pages
```

---


## Gulf Export SEO Specifics

### Gulf Country Configuration (Pre-Loaded in System)

| Country | Main Port | Transit from India | Regulatory Body | Language | Key Industries |
|---------|-----------|-------------------|-----------------|----------|---------------|
| UAE | Jebel Ali, Khalifa Port | 3-5 days | UAE EHS, ESMA | Arabic + English | Oil & Gas, Chemicals, Construction |
| Saudi Arabia | King Abdulaziz (Dammam), Jeddah | 4-7 days | SASO, SFDA | Arabic | Oil & Gas (Aramco), Petrochemicals |
| Qatar | Hamad Port | 3-5 days | Qatar Standards, MoE | Arabic | LNG (QatarEnergy), Petrochemicals |
| Oman | Sohar Port | 2-4 days | OPAL, MoCI | Arabic | Oil & Gas (PDO), Industrial |
| Kuwait | Shuwaikh, Shuaiba | 4-6 days | KEPA, KFSD | Arabic | Oil & Gas (KOC, KNPC) |
| Iraq | Umm Qasr (Basra) | 8-12 days | Ministry of Oil | Arabic | Oil & Gas (Rumaila, West Qurna) |

### Gulf-Specific SEO Strategy

```
FOR EACH PRODUCT x COUNTRY COMBINATION:

1. DEDICATED SUPPLY PAGE: /supply/{product}/{country}
   Content includes:
   - "Buy [product] in [country]" messaging
   - Port and transit details
   - Local brand equivalents
   - Import documentation requirements
   - Local regulations and compliance
   - Arabic keyword section
   - FAQ specific to importing into that country
   - Local field/operation references

2. ARABIC KEYWORDS (integrated into main pages):
   - Arabic product name
   - Arabic application terms
   - Arabic industry terms
   - Arabic supplier/manufacturer terms

3. COMPETITOR DISPLACEMENT:
   - List every competitor brand in that country
   - Show "equivalent to [Brand X]" messaging
   - Provide specific technical comparison data
   - Target "[competitor brand] alternative [country]" keywords

4. LOCAL INDUSTRY REFERENCES:
   UAE: Shah field, Habshan, Ghasha, ADNOC operations
   Saudi: Ghawar, Wasit, Fadhili, Jafurah, Saudi Aramco
   Qatar: North Field, Ras Laffan, Pearl GTL, Dolphin pipeline
   Oman: Yibal, Lekhwair, Birba, PDO operations, Oman LNG
   Kuwait: Burgan field, Ratqa, KOC/KNPC refineries
   Iraq: Rumaila, West Qurna, Zubair, Halfaya, Basra Gas
```

### Gulf Ranking Priority Formula

```
Gulf Product Priority = 
  (Oil & Gas Relevance × 0.30) +
  (Active Gulf Demand × 0.25) +
  (Price/MT × 0.15) +
  (Competitor Gap × 0.15) +
  (Regulatory Readiness × 0.10) +
  (Arabic Content Opportunity × 0.05)

Products scoring highest:
1. MEA Triazine 78% (score ~95) — direct oilfield application
2. MMA Triazine 40% BTX-Free (score ~85) — environmental compliance
3. Biocide Oil & Gas (score ~80) — direct oilfield application
4. EDDM Non-Triazine (score ~75) — alternative H2S scavenger
5. BKC 50%/80% (score ~70) — water treatment in oil operations
```

---


## Summary: The Complete Rules Checklist

### Google Presence Checklist (Do ALL of These)

```
FOUNDATION (Do First):
[x] HTTPS site
[x] XML sitemap submitted to Google Search Console
[x] robots.txt configured correctly
[x] Structured data (JSON-LD) on all product pages
[x] Mobile-responsive design
[x] Server-side rendering
[ ] Google Business Profile claimed and optimized
[ ] IndexNow API integrated for instant push
[ ] Core Web Vitals all passing (LCP < 2.5s, INP < 200ms, CLS < 0.1)

CONTENT (Ongoing):
[ ] Every product page: 2,000+ unique words
[ ] Every product page: Direct answer snippet (40-55 words)
[ ] Every product page: 10-15 FAQs with schema
[ ] Every product page: Updated within last 90 days
[ ] 4+ new/updated pages per month minimum
[ ] Keyword clustering: no page targeting same keyword as another
[ ] Topic clusters: every product has 10-20 supporting pages

TECHNICAL:
[ ] No orphan pages (every page has 2+ internal links)
[ ] No broken links (404s)
[ ] No redirect chains
[ ] Page speed < 3 seconds on mobile
[ ] All images optimized (WebP, alt text, dimensions)
[ ] Schema validation (test with Google Rich Results Test)

AUTHORITY:
[ ] 3+ new backlinks per month from quality sources
[ ] Listed on industry directories (IndiaMart, ThomasNet, Kompass)
[ ] Chemical databases reference your products
[ ] Consistent NAP across all platforms
[ ] Monthly press/trade publication mentions

AI VISIBILITY (AEO + GEO):
[ ] Direct answer snippets on every product page
[ ] Subject-first sentence structure throughout
[ ] Self-contained quotable paragraphs
[ ] Multi-source consistency (website = directories = databases)
[ ] Allow all AI crawlers (GPTBot, Claude-Web, etc.)
[ ] Entity relationships explicit in text ("manufactured by", "used for")
[ ] Freshness signals (dateModified, "Last updated")
```

### Priority Order for Implementation

```
PHASE 1 (Weeks 1-2): Foundation
- Expand Payload CMS product schema
- Build ranking calculator
- Build schema generator (replaces hardcoded logic)

PHASE 2 (Weeks 3-4): Core Engines
- Build meta generator
- Build FAQ generator
- Build direct answer generator
- Build keyword cluster generator

PHASE 3 (Weeks 5-6): Gulf Expansion
- Build Gulf country page generator
- Create country configurations
- Auto-generate country pages for top products

PHASE 4 (Weeks 7-8): Optimization
- Internal link suggestion engine
- Content gap detector
- Competitor tracking framework
- IndexNow automation on CMS events

PHASE 5 (Ongoing): Content Velocity
- Fill CMS fields for all existing products
- Publish 4-8 new pages per week
- Monthly ranking review and adjustments
- Quarterly strategy reassessment
```

---

## Sources & References

- Google's Ranking Factors: [HubSpot](https://blog.hubspot.com/marketing/google-ranking-algorithm-infographic)
- Topic Clusters: [Search Engine Land](https://searchengineland.com/guide/topic-clusters)
- Core Web Vitals: [PageSpeedMatters](https://www.pagespeedmatters.com/resources/guides/complete-core-web-vitals-guide)
- AEO Guide: [Frase.io](https://frase.io/blog/what-is-answer-engine-optimization/)
- GEO Guide: [Frase.io](https://www.frase.io/blog/what-is-generative-engine-optimization-geo)
- Chemical SEO: [12grids](https://www.12grids.com/articles/international-seo-guide-chemical-manufacturers)
- Crawl Budget: [Google Developers](https://developers.google.com/search/blog/2017/01/what-crawl-budget-means-for-googlebot)
- Internal Linking: [Ahrefs](https://ahrefs.com/blog/internal-links-for-seo)
- E-E-A-T: [Search Engine Journal](https://www.searchenginejournal.com/google-e-e-a-t-how-to-demonstrate-first-hand-experience/474446/)
- Product Page SEO: [Sitebulb](https://sitebulb.com/resources/guides/how-to-rank-product-pages-in-google-s-new-product-serps/)
- IndexNow: [IndexNow.org](https://www.indexnow.org/)

*Content was rephrased for compliance with licensing restrictions.*

---

**Document Version:** 1.0
**Created:** July 2026
**Next Review:** August 2026
