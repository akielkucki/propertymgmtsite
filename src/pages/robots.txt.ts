/** Prerendered robots.txt — derives the sitemap URL from astro.config's `site`. */
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const body = ['User-agent: *', 'Allow: /', '', `Sitemap: ${new URL('sitemap-index.xml', site)}`, ''].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
};
