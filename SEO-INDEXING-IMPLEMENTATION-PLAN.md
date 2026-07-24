# SEO Indexing Implementation Plan — Vasudev Chemo Pharma

> Purpose: fix the three Google Search Console (GSC) indexing buckets and apply the
> 22-point SEO checklist **effectively** — i.e. differently and more impactfully than
> the past approach. Grounded in the actual codebase state (audited Jul 2026).

---

## 0. The single most important finding

**You do not have a technical-tag problem anymore.** The code already ships:

| Checklist item | Already implemented in code | Where |
|---|---|---|
| Canonical tags | Yes | `product/[slug]/page.tsx` (`alternates.canonical`), `LandingPageLayout` `canonicalOverride` |
| hreflang / language alternates | Yes | `product/[slug]/page.tsx` (`languageAlternates`) |
| Schema markup | Yes (Article, FAQ, Breadcrumb, Product, Organization) | `src/components/seo/*` |
| Breadcrumbs (JSON-LD) | Yes | `BreadcrumbSchema.tsx`, used in `LandingPageLayout` |
| Clean descriptive URLs | Yes | slug-based routes throughout |
| XML sitemap w/ dedup + noindex hygiene | Yes | `src/app/sitemap.xml/route.ts` |
| robots.txt (+ AI crawlers) | Yes | `src/app/robots.ts` |
| non-www → www redirect | Yes | `vercel.json` |
| 404 → redirect cleanup (~60 rules) | Yes | `next.config.mjs` `redirects()` |
| JS content crawlable (SSR/ISR) | Yes | App Router server components |
| Cache headers / CWV plumbing | Partial | `next.config.mjs` `headers()` |

So repeating the **past playbook** (add more tags, mass-produce more programmatic
landing pages) will **not** move the needle. That playbook is what produced the
current problem.

### What the three buckets actually mean here

1. **Not found (404) — 49 pages.** Mostly legacy URLs from the old manufacturing-template
   site (`/case-study/precision-cnc-milling…`, `/blog/ai-iot-breakthroughs…`) and dropped
   pharma SKUs (`/product/pregabalin`, `…/ketoconazole`, `…/albendazole`). **~90% already
   have 301s.** This bucket is *nearly solved* — only a few gaps remain (see Phase 1).

2. **Crawled – currently not indexed — 49 pages.** Google fetched the page and **chose not
   to index it**. This is a **content-quality / duplication verdict**, not a bug. Trigger on
   this site: near-duplicate, templated programmatic pages that overlap in intent
   (`compare/*`, `supply/*/<country>`, the `mma-triazine-40-*` and `sodium-cumene-sulfonate-*`
   clusters).

3. **Discovered – currently not indexed — 104 pages.** Google knows the URL (from the
   sitemap) but **hasn't spent crawl budget** to fetch it. Classic signal of **low domain
   authority + oversized thin-page footprint + weak internal linking** (orphan-ish pages
   reachable only via the sitemap).

**Root cause (buckets 2 & 3):** the site scaled *breadth* (hundreds of thin, overlapping,
templated pages) far ahead of its *authority* and *internal-link depth*. Google throttles
crawling/indexing of low-authority sites that publish large volumes of similar pages.

---

## 1. The strategic shift: "past" vs "effective"

| Dimension | Past approach (what created the problem) | Effective approach (this plan) |
|---|---|---|
| Content | Mass-produce templated landing pages per keyword | Consolidate & deepen; one strong page per intent |
| Checklist use | Apply tags to *every* page uniformly | Apply effort *proportional to page value*; prune the rest |
| Growth metric | Total pages published | % of published pages actually indexed |
| Duplication | Many pages target the same buyer intent | One canonical page per intent cluster; variants `noindex` or merged |
| Internal links | Sitemap = discovery; few contextual links | Deep contextual linking from strong pages to targets |
| Authority | (not addressed) | Active backlink + digital-PR program |
| Indexing | Passive (wait for Google) | Active (IndexNow + GSC inspect/request + link equity) |

**North-star metric:** move from "pages published" to **indexation rate =
indexed ÷ submitted**. Target ≥ 80% within 90 days.

---

## 2. Phased implementation

### Phase 1 — Finish the 404 / redirect cleanup (Week 1, low effort, high hygiene)

Bucket: **Not found (404)**. Most is done; close the gaps.

- [ ] Add 301s for the remaining legacy URLs still 404-ing:
  - `/static/media/VCP-003-TDS.pdf` → `/resources/mea-triazine-technical-datasheet`
  - `/blog/mea-triazine-a-hydrogen-sulfide-scavenger-for-natu` (truncated old slug) → closest live blog
  - Any legacy `*/` trailing-slash variants Google still lists (Next `trailingSlash:false`
    already 308s these, but verify each in GSC URL Inspection).
- [ ] For **deleted** pages that have **no equivalent** (dropped pharma SKUs, old CNC case
  studies), prefer **410 Gone** over a soft 301-to-parent where the target isn't a true
  replacement — this tells Google to drop them faster and stops them recurring in reports.
  (Currently they 301 to `/product` or `/compare`; keep 301 only where the parent is a
  genuine next-best; otherwise 410.)
- [ ] Confirm the non-www→www redirect (`vercel.json`) is live for **every** 404 non-www URL
  in the report (spot-check 5 in GSC URL Inspection).
- [ ] **Do not** list any redirecting/410 URL in `sitemap.xml` (already handled — keep it).

**Verify:** GSC → Pages → "Not found (404)" → Validate Fix. Re-inspect 5 sample URLs; expect
"Redirect" or "Not found (intended)".

### Phase 2 — Kill keyword cannibalization & merge thin pages (Weeks 1–3, HIGH impact)

Buckets: **Crawled – not indexed** + **Discovered – not indexed**. This is the biggest lever.

- [ ] **Cluster audit.** Group all live URLs by *search intent*, not by keyword. Likely
  cannibalizing clusters to review first:
  - MEA-Triazine buyer intent: `/product/mea-triazine-78-h2s-scavenger`,
    `/mea-triazine-prices`, `/supply/mea-triazine-78`, `/mea-triazine-production-plant-cost`,
    `/solutions/*h2s-scavenger*`, `/location/*mea-triazine*` — many target
    "mea triazine supplier/price".
  - `/solutions/*` (11+ near-identical H2S-scavenger variants) — high duplication risk.
  - `/compare/mea-triazine-vs-*` — thin comparison pages.
  - `sodium-cumene-sulfonate-*` and `mma-triazine-40-*` clusters (15+ each).
- [ ] **For each cluster pick ONE canonical page.** Then for the rest:
  - **Merge** genuinely thin variants into the canonical page (redirect 301).
  - **Or** keep live but set `canonicalOverride` to the winner (the `LandingPageData` type
    already supports this — use it aggressively; it's currently under-used).
  - **Or** `noindex,follow` the weakest variants (pattern already exists via
    `isGulfSupplyPageIndexable` in `seo-engine` — extend it to other clusters).
- [ ] **Reduce the submitted-URL count.** A smaller, stronger sitemap indexes faster than a
  huge thin one. Remove `noindex`/canonicalized variants from `sitemap.xml` (dedup + filter
  logic already exists — extend the `.filter()` used for `CUSTOM_LANDING_PAGES_DATA`).

**Verify:** count live indexable URLs before/after; run `npm run build` and confirm sitemap
entry count drops to the intended set. Re-inspect 5 merged URLs in GSC → expect canonical =
winner.

### Phase 3 — Fix orphan pages & internal-link depth (Weeks 2–4, HIGH impact)

Bucket: **Discovered – not indexed** (crawl budget / discovery).

- [ ] **Orphan audit.** A page is orphaned if it's only reachable via `sitemap.xml`. Build a
  crawl of internal `<a href>` links (script) and diff against the sitemap URL set. Everything
  in the sitemap but not in the link graph is orphaned.
- [ ] Extend `src/lib/seo/internal-links.ts` so **every** kept page is linked from at least
  **3 contextually relevant** pages (hub-and-spoke). Priority link sources: homepage,
  `/product`, `/product/mea-triazine-78-h2s-scavenger`, `/hydrotropes`, `/blog` index.
- [ ] Add visible **breadcrumb UI** (not just JSON-LD) to product/landing/blog templates —
  gives Google real anchor-text links to parent hubs. `BreadcrumbSchema` exists; add the
  rendered `<nav>` alongside it.
- [ ] Add "Related products / Related guides" contextual blocks to the top clusters
  (`LandingPageLayout` already renders `relatedProductLinks` + `relatedResources` — make sure
  every high-value target appears in others' related blocks).
- [ ] Link **from strong pages to weak targets**, not the reverse — pass equity toward the
  Discovered-not-indexed URLs.

**Verify:** re-run the orphan script → 0 orphans among kept pages. In GSC, use "Validate Fix"
on the Discovered bucket after internal links deploy + a re-crawl.

### Phase 4 — Content quality / E-E-A-T / intent match (Weeks 3–6, HIGH impact)

Bucket: **Crawled – not indexed** (quality verdict).

- [ ] **Original, differentiated content** on kept pages: add real specs, lab data, dosing
  tables, CoA/TDS, application photos, FAQs answered from field experience. Anything that
  reads as a spun template gets the "crawled – not indexed" verdict.
- [ ] **E-E-A-T signals** (currently weak — `ArticleSchema` author is a generic "Technical
  Team"):
  - Create a real **author/reviewer** with credentials (e.g. "Reviewed by <name>, Chemical
    Engineer, N yrs"), an `/about` bio page, and wire `authorName`/`authorCredentials` in
    `ArticleSchema` to that entity.
  - Add `Organization` sameAs, address, certifications (ISO/REACH) to `OrganizationSchema`.
- [ ] **Search-intent match:** for each kept page, confirm the dominant SERP intent
  (informational vs transactional) and align H1 + first 100 words + CTA accordingly. Split or
  merge where a single page tries to serve two intents.
- [ ] **Heading structure:** one `<h1>`, logical `<h2>/<h3>` (LandingPageLayout is already
  correct — audit product page + blog templates).
- [ ] **Titles 50–60 chars & unique meta descriptions:** audit via a script that reads
  generated `<title>`/`<meta description>` for every route; fix outliers via the existing
  `page-meta-overrides.ts` / `product-meta-overrides.ts`.

**Verify:** run the title/description length script → 0 outliers. Manually re-request indexing
on 5 improved pages; expect indexation within 1–2 weeks.

### Phase 5 — Core Web Vitals & images (Weeks 4–5, medium impact)

Supports crawl budget + ranking; rarely the *sole* cause of non-indexing.

- [ ] **LCP:** the homepage hero uses `public/videos/herosection.mp4` (~4.9 MB). Add a poster
  image, `preload="none"`/lazy, and ensure the LCP element is a fast image, not the video.
- [ ] Serve responsive `next/image` everywhere; the sitemap already carries image captions —
  ensure every content image has a **descriptive `alt`** (audit script).
- [ ] Confirm cache headers (already in `next.config.mjs`) via Lighthouse "efficient cache
  lifetimes".

**Verify:** PageSpeed Insights (field + lab) on homepage, a product page, a landing page →
CWV all "Good".

### Phase 6 — Authority / backlinks (Weeks 2–12, off-page, HIGHEST long-term lever)

Buckets 2 & 3 ultimately gate on **domain authority**. No on-page change substitutes for this.

- [ ] Directory + trade listings (IndiaMART, TradeIndia, ChemEurope, ZoomInfo, industry bodies).
- [ ] Digital PR: technical articles / datasheets on oil-&-gas and detergent-formulation
  publications linking back to the canonical product pages.
- [ ] Supplier/partner backlinks, guest technical posts, HARO-style expert quotes.
- [ ] Prioritize links **to** the Discovered-not-indexed canonical pages.

**Verify:** track referring domains monthly (Ahrefs/GSC Links report). Correlate new backlinks
with indexation of linked pages.

### Phase 7 — Active indexing signals (ongoing)

- [ ] Use the existing `src/lib/seo/indexnow.ts` on every publish/update to ping IndexNow.
- [ ] After Phases 1–4 deploy, batch-submit the top ~30 kept pages via GSC URL Inspection →
  "Request Indexing".
- [ ] Re-submit `sitemap.xml` in GSC after the count drops.
- [ ] Use the `claude-seo/scripts/gsc_inspect.py` tooling to monitor per-URL status weekly.

---

## 3. Checklist → action mapping (all 22 items)

| # | Checklist item | Current state | Effective action (vs past) | Phase |
|---|---|---|---|---|
| 1 | fix indexing issues | in progress | Reframe as consolidation+authority, not tags | all |
| 2 | add breadcrumbs | JSON-LD only | Add **visible** breadcrumb `<nav>` | 3 |
| 3 | add canonical tags | Done | Use `canonicalOverride` to **consolidate** clusters | 2 |
| 4 | fix core web vitals | partial | Fix hero-video LCP, responsive images | 5 |
| 5 | fix orphan pages | gap | Orphan audit + 3+ contextual links each | 3 |
| 6 | add schema markup | Done | Add real author/reviewer + org credentials | 4 |
| 7 | fix heading structure | mostly done | Audit product/blog templates | 4 |
| 8 | write original content | RISK | Differentiate kept pages; kill spun text | 4 |
| 9 | avoid duplicate content | RISK | Canonicalize/merge cluster duplicates | 2 |
| 10 | high-quality backlinks | not started | Digital PR + trade listings | 6 |
| 11 | clean descriptive URLs | Done | Maintain; no change needed | — |
| 12 | fix broken links & 404s | ~90% done | Close remaining gaps; 410 true-deletes | 1 |
| 13 | JS content crawlable | Done | SSR/ISR already; verify no client-only content | — |
| 14 | fix keyword cannibalization | gap | Cluster audit → one page per intent | 2 |
| 15 | mobile friendly | Done | Verify on templates | 5 |
| 16 | author bio / E-E-A-T | weak | Real author entity + bio + org signals | 4 |
| 17 | titles 50–60 chars | needs audit | Script audit → fix via meta-overrides | 4 |
| 18 | unique meta descriptions | needs audit | Script audit → fix duplicates | 4 |
| 19 | merge thin/overlapping pages | gap | Merge/redirect/noindex weak variants | 2 |
| 20 | optimize images + alt text | partial | Alt-text audit; responsive images | 5 |
| 21 | match page to search intent | partial | Intent audit per kept page | 4 |
| 22 | high-volume low-KD keywords | extensive data exists | Target intent gaps, not more duplicates | 2/4 |
| + | internal links to key pages | partial | Hub-and-spoke from strong→weak pages | 3 |

---

## 4. Priority order (do this, in this sequence)

1. **Phase 2 (cannibalization + merge)** — biggest cause of both "not indexed" buckets.
2. **Phase 3 (orphans + internal links)** — unlocks crawl of Discovered URLs.
3. **Phase 4 (content quality + E-E-A-T)** — flips the "crawled – not indexed" verdict.
4. **Phase 1 (404 gaps)** — quick hygiene, mostly done.
5. **Phase 6 (backlinks)** — start early, compounds slowly; gates ceiling.
6. **Phase 5 (CWV)** and **Phase 7 (active indexing)** — supporting, continuous.

## 5. Success criteria (verify in GSC over 90 days)

- Not found (404): → ~0 unintended (validated).
- Discovered – not indexed: 104 → < 25.
- Crawled – not indexed: 49 → < 15.
- Indexation rate (indexed ÷ submitted): → ≥ 80%.
- Referring domains: measurable month-over-month growth.

## 6. Guardrails

- **Stop publishing new programmatic pages** until indexation rate > 70%. More thin pages now
  makes both buckets worse.
- Every new page must earn ≥ 3 internal links and unique, differentiated content before it
  enters the sitemap.
- Prefer 410 over soft-301 for genuinely dead URLs with no replacement.
