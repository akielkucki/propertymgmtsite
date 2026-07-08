// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Canonical origin — update when the custom domain lands. Feeds the
  // sitemap, canonical tags, robots.txt, and JSON-LD absolute URLs.
  site: 'https://stephens-property-services.alex-kielkucki.workers.dev',
  adapter: cloudflare({
    // All pages are prerendered; only /api/* runs in the Worker, so
    // images can be optimized at build time with the default pipeline.
    imageService: 'compile',
  }),
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
