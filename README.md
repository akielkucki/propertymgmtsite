# Mark Stephens Estate & Property Management — Website

A marketing site for a private estate and property management company. Old-luxury country-estate
aesthetic combined with modern Swiss design: strict 12-column grids, editorial serif/grotesque typography
(Fraunces + Archivo, self-hosted), a navy/gold palette, and slow, restrained scroll animations.
The homepage is joined by six SEO-focused service pages under `/services/*` and a server-side
contact endpoint.

## Stack

- **[Astro](https://astro.build)** — mostly-prerendered, with one server route (`/api/contact`)
- **[@astrojs/cloudflare](https://docs.astro.build/en/guides/integrations-guide/cloudflare/)** — Cloudflare Workers adapter (v14, Vite-plugin based)
- **[Tailwind CSS v4](https://tailwindcss.com)** — styling, wired through `@tailwindcss/vite` (design tokens live in `src/styles/global.css` under `@theme`; there is no `tailwind.config.js`)
- **[Motion](https://motion.dev)** — scroll reveals (`inView`, `animate`, `stagger`), gated on `prefers-reduced-motion`
- **[Resend](https://resend.com)** — transactional email for the inquiry form (plain `fetch`, no SDK)

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
```

Production build and local worker preview:

```bash
npm run build        # prerenders pages + bundles the worker into dist/
npx wrangler dev     # serves the built site + /api/contact locally
```

## Contact form (Resend)

`/api/contact` (`src/pages/api/contact.ts`) validates the inquiry (honeypot included) and forwards it
to the business email through Resend. Configuration:

```bash
cp .dev.vars.example .dev.vars          # local dev — add a real Resend API key
npx wrangler secret put RESEND_API_KEY  # production — required before the form can send
```

Optional env vars: `CONTACT_TO` (recipient, defaults to the email in `src/site.ts`) and `CONTACT_FROM`
(sender, defaults to `onboarding@resend.dev`). **Until a domain is verified in Resend, the default
sender only delivers to the Resend account owner's own inbox** — verify a domain and set
`CONTACT_FROM` before go-live. If sending fails or the key is missing, the form degrades gracefully
and offers the direct `mailto:` address.

## SEO

- `astro.config.mjs` `site` is the canonical origin (update when the custom domain lands) — it feeds
  the sitemap (`@astrojs/sitemap`), canonical/OG tags, `robots.txt`, and JSON-LD absolute URLs.
- `Layout.astro` emits canonical, Open Graph/Twitter tags, and sitewide `HomeAndConstructionBusiness`
  JSON-LD; service pages add `Service` + `BreadcrumbList` blocks.
- Service copy lives in `src/data/services.ts` — one place for the front-page rows, the
  `/services/[slug]` pages, footer links, and the contact form's service selector.

## Deploy

```bash
npm run build && npx wrangler deploy
```

(The adapter writes the worker config into `dist/`; `wrangler deploy` picks it up via
`.wrangler/deploy/config.json`. Do not add `main`/`assets` to `wrangler.jsonc` — v14 generates them.)

## Project structure

```
src/
  site.ts                 # business name, email, nav — single source of truth
  data/services.ts        # the six services: front-page copy + service-page longform + SEO metadata
  env.d.ts                # typing for the Worker env bindings (RESEND_API_KEY, …)
  assets/                 # estate photography (optimized at build by astro:assets)
  styles/global.css       # Tailwind import, @theme design tokens, base + component styles
  scripts/reveal.ts       # Motion scroll-reveal system (data-reveal attributes)
  layouts/Layout.astro    # SEO head (canonical/OG/JSON-LD), fonts, skip link, header/footer shell
  components/
    Header.astro          # fixed nav; transparent over hero, porcelain after scroll; mobile menu
    Footer.astro          # brand + services + navigate + correspondence columns
    Button.astro          # variants: dark / light / gold / outline-light / outline-dark
    Section.astro         # section wrapper with the shared max-width grid container
    SectionHeading.astro  # numbered Swiss section title (eyebrow + oversized serif)
    ServiceRow.astro      # wide editorial service row; links to the service page when given href
    ServiceCard.astro     # hairline grid-cell service card
    sections/             # Hero, Positioning, CoreServices, Projects, Statement, About, Contact
                          # (Concierge, AdditionalSupport, Process exist but are unused)
  pages/
    index.astro           # composes the homepage
    404.astro             # branded not-found page
    robots.txt.ts         # prerendered robots.txt (sitemap URL derived from config)
    services/[slug].astro # one page per service, prerendered from src/data/services.ts
    api/contact.ts        # server-rendered POST endpoint → Resend
```

## Notes

- **Business name** is defined once in `src/site.ts` as "Mark Stephens Estate & Property Management",
  matching the brand logo. Service-area towns (`SERVICE_AREAS`) live in the same file.
- **Contact form** posts to `/api/contact` (Resend). It shows sending/sent/error states inline and falls
  back to offering the direct `mailto:` address if delivery fails.
- **Animations** only run when the visitor has not requested reduced motion; content is never hidden for
  no-JS visitors.
- **Photography** is free-license Unsplash imagery in `src/assets/`; replace with the client's own estate
  photos (same filenames) whenever available.
