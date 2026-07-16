/**
 * Single source of truth for business identity.
 */
export const SITE = {
  name: "Mark Stephens Estate & Property Management",
  shortName: "Mark Stephens Estate Management",
  wordmark: "Mark Stephens",
  wordmarkSub: "Estate & Property Management",
  email: "Stephenestateservices@gmail.com",
  phone: "(808) 250-3599",
  phoneHref: "tel:+18082503599",
  address: ["300 Croydon Turnpike", "Plainfield, NH 03781"],
  tagline: "Your Key to Peace of Mind",
  title: "Mark Stephens Estate & Property Management | Your Key to Peace of Mind",
  description:
    "Oversight and care of private homes and estates: day-to-day property needs, maintenance and project coordination, and trusted vendor relationships, managed with discretion and thoughtful stewardship.",
} as const;

// Individual towns served, grouped by state. Rendered in Contact/Footer and
// mirrored in the schema.org areaServed data for local SEO consistency.
export const SERVICE_AREAS = [
  {
    state: "New Hampshire",
    abbr: "NH",
    towns: [
      "Plainfield",
      "Meriden",
      "Cornish",
      "Lebanon",
      "Hanover",
      "Enfield",
      "Grantham",
      "New London",
      "Claremont",
    ],
  },
  {
    state: "Vermont",
    abbr: "VT",
    towns: ["Norwich", "Hartford", "White River Junction", "Quechee", "Woodstock", "Windsor", "Hartland"],
  },
] as const;

// Schema-ready areaServed, shared by Layout.astro and services/[slug].astro.
export const AREA_SERVED = SERVICE_AREAS.flatMap((region) =>
  region.towns.map((town) => ({ "@type": "Place", name: `${town}, ${region.abbr}` })),
);

// Root-relative so navigation works from /services/* pages as well as the home page.
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Concierge", href: "/#concierge" },
  { label: "Story", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
] as const;
