/**
 * Contact-form endpoint — the only server-rendered route in the site.
 * Validates the inquiry and forwards it to SITE.email through Resend.
 */
import type { APIRoute } from 'astro';
import { env as workerEnv } from 'cloudflare:workers';
import { SITE } from '../../site';

const env = workerEnv as CloudflareEnv;

export const prerender = false;

const MAX_FIELD = 500;
const MAX_MESSAGE = 5000;

const json = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export const POST: APIRoute = async ({ request }) => {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return json(400, { ok: false, error: 'Invalid request body.' });
  }

  const field = (key: string, max = MAX_FIELD) =>
    String(data[key] ?? '')
      .trim()
      .slice(0, max);

  // Honeypot: bots fill the hidden "company" field. Pretend success, send nothing.
  if (field('company')) return json(200, { ok: true });

  const name = field('name');
  const email = field('email');
  const phone = field('phone');
  const location = field('location');
  const service = field('service');
  const message = field('message', MAX_MESSAGE);

  if (!name || !email) return json(400, { ok: false, error: 'Please provide your name and email.' });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json(400, { ok: false, error: 'Please provide a valid email address.' });
  }

  if (!env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured');
    return json(500, { ok: false, error: 'The inquiry service is not available right now.' });
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || '-'}`,
    `Property location: ${location || '-'}`,
    `Service interest: ${service || '-'}`,
    '',
    message || '(No message provided.)',
  ].join('\n');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM ?? `${SITE.shortName} <onboarding@resend.dev>`,
      to: [env.CONTACT_TO ?? SITE.email],
      reply_to: email,
      subject: `Private Inquiry: ${service || 'General'} — ${name}`,
      text,
    }),
  });

  if (!res.ok) {
    console.error('Resend error', res.status, await res.text());
    return json(502, { ok: false, error: 'The inquiry could not be sent.' });
  }

  return json(200, { ok: true });
};
