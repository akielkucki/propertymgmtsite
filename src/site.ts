/**
 * Single source of truth for business identity.
 * If the intended spelling is "Stephans", change `name` and `wordmark` here only.
 */
export const SITE = {
  name: "Stephen's Property & Estate Services LLC",
  shortName: "Stephen's Property Services",
  wordmark: "Stephen's",
  wordmarkSub: "Property & Estate Services",
  email: "Stephenestateservices@gmail.com",
  phone: "(808) 250-3599",
  phoneHref: "tel:+18082503599",
  address: ["300 Croydon Turnpike", "Plainfield, NH 03781"],
  tagline: "Your Key to Peace of Mind",
  title: "Stephen's Property & Estate Services LLC | Your Key to Peace of Mind",
  description:
    "Oversight and care of private homes and estates: day-to-day property needs, maintenance and project coordination, and trusted vendor relationships, managed with discretion and thoughtful stewardship.",
} as const;

// Root-relative so navigation works from /services/* pages as well as the home page.
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Story", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;
