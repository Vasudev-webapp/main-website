# SEO / AEO / GEO Rules for Chemical-Product Articles

> Reference ruleset for every article/blog on the Vasudev Chemo site (Next.js `manufact-clone`).
> Keyword sets will be supplied per-article; apply this whole process to each one.

## 1. Pre-Writing
- Build a keyword **cluster** around one core topic, not one term. Group by intent: informational, commercial, transactional, technical/spec.
- Pull variants from Google autocomplete, People Also Ask, Search Console impressions, competitor content, industry glossaries/MSDS terminology.
- Map searcher persona per keyword (procurement engineer / plant operator / distributor / researcher). Classify each keyword **primary / secondary / supporting**.
- Review top 5–10 ranking pages for the primary keyword; note length, structure, technical depth, and gaps. Pick a content gap to own (dosage table, mechanism diagram, comparison to alternatives, region-specific notes).

## 2. On-Page Optimization
- **Title tag**: primary keyword near front, 55–60 chars, one clear value angle.
- **H1**: matches title intent, slightly more natural/readable.
- **H2/H3**: each secondary keyword becomes a heading where it fits naturally.
- **Meta description**: 150–160 chars, includes primary keyword, specific value, soft CTA.
- **URL**: short, keyword-based, no stop-word bloat (`/triazine-h2s-scavenger`).
- **Internal linking**: product pages, sibling spoke articles, pillar/hub pages. Descriptive anchors, never "click here."
- **Schema**: Article/TechArticle for the post; Product on product pages; FAQPage for genuine FAQ; BreadcrumbList for nav.
- **Keyword placement**: primary in title, H1, first 100 words, one H2, meta, URL, one image alt, conclusion.
- **Density**: natural, ~0.5–1.5% primary + close variants. If awkward read-aloud, it's too dense.
- **LSI / semantic terms**: real SME vocabulary — hydrogen sulfide removal, sulfide scavenging mechanism, ppm H2S, sour gas treatment, MEA-triazine, non-regenerative scavenger, NACE, produced water treatment.

## 3. Content Strategy
- Structure: intro (problem + coverage) → what it is / mechanism → how it works → applications/industries → dosage/handling → comparison to alternatives → safety/handling → FAQ → conclusion/CTA.
- Depth: match/exceed the best competitor on buyer-critical sections (dosage, compatibility, safety). Genuine technical detail, no padding.
- Technical accuracy: verify chemistry/dosage/hazard claims against peer-reviewed literature, SDS/MSDS, NACE/API. Never guess mechanisms, dosage ranges, or hazard classes.
- Readability: Grade 9–11 for explanatory sections; define jargon on first use.
- Visual aids: reaction/mechanism diagram, dosage/comparison table, process-flow figure.

## 4. Multimedia & Accessibility
- Alt text: descriptive, keyword only where natural, not stuffed.
- Captions under diagrams/tables (indexed, adds context).
- Real HTML tables (not images); text alternatives for diagrams; sufficient color contrast.

## 5. Technical SEO & Indexing
- Crawlable: not blocked in robots.txt, in XML sitemap, no accidental noindex.
- Canonical: self-referencing; if product page + blog overlap, pick one canonical and cross-link.
- Validate schema in Rich Results Test; schema must match visible content.
- Request indexing via Search Console post-publish; watch duplicate-content flags; keep Core Web Vitals healthy.

## 6. Multi-Keyword Hygiene
- Secondary keywords = subheadings, each with a full self-contained answer.
- No paragraph repeats a keyword phrase more than once in 3 sentences. Vary phrasing (scavenger, treatment chemical, sulfide remover) with one canonical anchor term.
- One primary keyword per URL. Deep-dive keywords get their own linked article.
- Topic clusters: pillar page + spoke articles, linked both directions and sideways.
- Log overflow keywords for future spoke articles.

## 7. Quality & Review
- Fact-check every chemistry/dosage/safety claim vs SDS/TDS/peer-reviewed/standards before publishing.
- Cite authoritative sources (regulators, standards orgs, peer-reviewed), never competitor blogs as authority.
- Second-pass review: accuracy, keyword placement (no stuffing), internal links resolve, schema validates, readability, no unsupported superlatives.

---

## Added Requirements (per client instruction)

### AEO — Answer Engine Optimization
- Lead each section with a concise 40–60 word direct answer, then expand.
- Question-form H2/H3s that mirror People Also Ask and voice queries.
- Genuine FAQ with FAQPage schema; concise standalone answers.
- Structured formats (tables, numbered steps, definition lists) answer engines can lift.
- Front-load the key fact/number in each section (dosage ranges, ppm, conditions).

### GEO — Generative Engine Optimization
- Make content citable by LLMs: clear claims with cited authoritative sources, quotable stats, self-contained factual sentences.
- Entity-rich, unambiguous phrasing (full compound names, standards, units) for correct attribution.
- E-E-A-T credibility signals: author, credentials, reviewed-by, last-updated date, sources list.
- Each section stands alone as an extractable passage.

### Indexability — Google + AI Crawlers
- Indexable by Google AND crawlable by AI bots (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.) unless the client chooses to block them.
- Server-rendered/static HTML so content exists without JS execution.
- Valid JSON-LD structured data (Article/TechArticle, FAQPage, Breadcrumb, Product).
- In sitemap; correct canonicals; fast load / good Core Web Vitals.

---

## Reusable Article Outline Template
```
H1: [Primary Keyword] — [Value Angle]

Intro (100–150 words): reader's problem in their words + what the article covers + why credible.

H2: What Is [Primary Keyword]?           -> plain-language definition + one close variant
H2: How [Primary Keyword] Works          -> mechanism in accessible terms + [mechanism diagram]
H2: Applications and Use Cases           -> H3 per industry; secondary keyword #1 lives here
H2: Dosage / Handling / Technical Specs  -> [dosage/compatibility table]; secondary keyword #2 here
H2: [Primary Keyword] vs. Alternatives   -> comparison table, honest trade-offs
H2: Safety and Handling Considerations   -> cite SDS/regulatory; supporting keywords here
H2: FAQ                                  -> 3–5 real PAA/sales questions (+ FAQPage schema)
Conclusion                               -> recap + soft CTA (product page / quote request)

Internal links: [pillar] [sibling spoke 1] [sibling spoke 2] [product page]
Schema: [Article/TechArticle] [FAQPage if used] [Breadcrumb]
```
