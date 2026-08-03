This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Security Configuration (Vercel Edge Protection)

The project includes middleware-level edge protections for targeted anti-fake-traffic handling:
- Route-level edge rate limiting for `/api/*`, `/admin*`, `/payload*`, and `/product/*`
- Geo/IP filtering using Vercel request headers
- Targeted challenge flow for suspicious traffic paths only

Configure these environment variables in Vercel Project Settings -> Environment Variables:

```bash
EDGE_CHALLENGE_SECRET=replace-with-long-random-secret
EDGE_BLOCK_COUNTRIES=KP,IR
EDGE_BLOCK_IPS=203.0.113.10,198.51.100.25
EDGE_ALLOWLIST_IPS=198.51.100.50
ASSET_API_KEY=replace-with-api-key
SEED_API_KEY=replace-with-seed-api-key
SEED_API_ENABLED=false
TURNSTILE_SECRET_KEY=replace-with-turnstile-secret
NEXT_PUBLIC_TURNSTILE_SITE_KEY=replace-with-turnstile-site-key
# Optional fallback if using Google instead of Turnstile
RECAPTCHA_SECRET_KEY=replace-with-recaptcha-secret
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=replace-with-recaptcha-site-key
CONTACT_BLOCKED_EMAIL_DOMAINS=spamdomain.com,disposablemail.com
CONTACT_ALLOW_FREE_EMAIL_DOMAINS=false
CONTACT_DEDUP_WINDOW_MS=600000
CONTACT_MIN_FILL_MS=4000
CORS_ALLOWED_ORIGINS=https://admin.yourdomain.com,https://partner.yourdomain.com
MAX_UPLOAD_IMAGE_WIDTH=4096
MAX_UPLOAD_IMAGE_HEIGHT=4096
PRODUCT_CACHE_TTL_MS=60000
SENTRY_DSN=replace-with-sentry-dsn
SENTRY_ENVIRONMENT=production
SENTRY_RELEASE=replace-with-commit-sha
```

Notes:
- `EDGE_CHALLENGE_SECRET` should be unique per environment and at least 32 random characters.
- `SEED_API_ENABLED` should remain `false` in production and only be enabled for controlled development seeding.
- `EDGE_BLOCK_COUNTRIES`, `EDGE_BLOCK_IPS`, and `EDGE_ALLOWLIST_IPS` are comma-separated lists.
- Keep platform-level managed WAF/bot/DDoS controls enabled in Vercel; middleware is an app-level defense layer.
- Apply provider-level rule setup from `docs/ops/WAF_BOT_RULES_CHECKLIST.md`.
- Configure either Turnstile or reCAPTCHA secret/site keys before enabling production contact form traffic.
- CSP uses per-request script nonces from middleware; do not re-enable `unsafe-inline` for script-src.
- Any third-party script integration must use nonce-bearing `<Script nonce={...} />` (or an equivalent hash-based policy) instead of broad inline allowances.
- `CORS_ALLOWED_ORIGINS` must list exact allowed origins (scheme + host + optional port), comma-separated.
- Do not hardcode any secret in code. All auth keys and challenge secrets must be provided through environment variables.

## Blog Authoring, Preview & Publishing (Payload CMS)

Articles are written in the Payload admin at `/admin/collections/blogs` and render at
`/blog/<slug>` alongside the hard-coded articles in
`src/app/(frontend)/blog/[slug]/*-data.ts`.

### Workflow

1. **Create** — Articles → Create New. Fill the `Content`, `SEO`, `Media` and
   `Links & Authorship` tabs. Each body section is a rich-text field supporting
   H3/H4 subheadings, real HTML tables, lists and links.
2. **Preview** — click **Preview** to open `/blog/<slug>` in a new tab with
   Next.js draft mode enabled. The page renders exactly as it will once live, with
   an amber "Draft preview" bar and an *Exit preview* link. Drafts are `noindex`
   and emit no structured data.
3. **Publish** — click **Publish**. The article becomes publicly visible, is added
   to `sitemap.xml`, and the publish hook revalidates `/blog/<slug>`, `/blog` and
   `/sitemap.xml` so the change is live immediately rather than after the 1-hour
   ISR window. If `INDEXNOW_KEY` is set, the URL is also submitted to IndexNow.

Draft previews are gated by the editor's Payload session cookie — there is no
shareable secret in the preview URL, so a leaked link is useless to anyone not
logged into the CMS. `/api/preview` is disallowed in `robots.txt` via the `/api/`
rule.

### Publish-time quality gates

Content rules are enforced only when publishing, so drafts can be saved freely.
Publishing is blocked until the article has a category, an intro of 80+ characters,
at least two body sections, a conclusion, an author with credentials, hero image
alt text, and a hero image. `Meta title` is capped at 70 characters and
`Meta description` at 180 so SERP snippets are not truncated.

### Entry types

- **Full article** — written and published in the CMS.
- **Image override only** — the original use of this collection: swaps the hero
  image on a hard-coded article without replacing its content. Rows that predate
  the authoring fields are migrated to this type automatically.

A CMS article takes precedence over a hard-coded article with the same slug, which
allows an existing article to be taken over and edited in the CMS.

### Database migration

The authoring fields require a schema migration. Outside production the schema is
pushed automatically (`PAYLOAD_PUSH`); for production apply it explicitly:

```bash
npx tsx src/_runmigrate.ts
```

`up()` is additive only (18 new `blogs` columns plus array/version tables) and
`down()` reverses it. To generate a new migration after changing a collection:

```bash
npx tsx src/_genmigration.ts <migration_name>
```

These `tsx` scripts exist because the `payload` CLI cannot resolve this project's
`@/*` tsconfig path aliases.

### Not enabled

Payload's iframe-based **Live Preview** is intentionally off: the site CSP sets
`frame-ancestors 'none'` in `src/middleware.ts`, so the admin panel cannot frame
the front-end. Enabling it would require relaxing that to `frame-ancestors 'self'`.

## Performance Guardrails

- Static routes and media receive edge cache headers in `next.config.mjs`.
- Non-real-time pages use ISR (`revalidate`) to avoid expensive per-request rendering.
- Upload API enforces image dimension caps via `MAX_UPLOAD_IMAGE_WIDTH` and `MAX_UPLOAD_IMAGE_HEIGHT`.
- Product queries use short-lived in-memory caching (`PRODUCT_CACHE_TTL_MS`) to reduce repeated DB reads.

## Uptime and Stability Ops

- Deployment safety runbook: `docs/ops/DEPLOYMENT_SAFETY_RUNBOOK.md`
- Observability runbook: `docs/ops/OBSERVABILITY_RUNBOOK.md`
- Data recovery runbook: `docs/ops/DATA_RECOVERY_RUNBOOK.md`
- Multi-region uptime probe template: `docs/ops/UPTIME_PROBES.example.json`
- Health endpoints:
	- `/api/health?scope=liveness`
	- `/api/health?scope=readiness`
- Pre-promotion gate command:
	- `npm run health:check -- https://<preview-url>`

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
