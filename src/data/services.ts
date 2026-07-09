/**
 * Single source of truth for the six core services.
 * Feeds the front-page service rows, the /services/[slug] pages,
 * the contact form's service selector, and per-service JSON-LD.
 *
 * Positioning: management and concierge. Every service is framed as
 * oversight, coordination, and stewardship — not hands-on trade work.
 */
import type { ImageMetadata } from 'astro';
import library from '../assets/library.jpg';
import drive from '../assets/drive.jpg';
import hale from '../assets/hale.webp';
import countryside from '../assets/countryside.jpg';
import pool from '../assets/pool.webp';
import landscaping from '../assets/landscaping.webp';

export interface Service {
  slug: string;
  number: string;
  title: string;
  /** Keyword-rich page title; Layout appends the business name. */
  seoTitle: string;
  metaDescription: string;
  /** Front-page service-row copy. */
  summary: string;
  /** Italic line under the page heading. */
  tagline: string;
  intro: string[];
  included: { title: string; description: string }[];
  image: ImageMetadata;
  imageAlt: string;
}

export const SERVICES: Service[] = [
  {
    slug: 'estate-management',
    number: 'I',
    title: 'Estate Management',
    seoTitle: 'Private Estate & Property Management in Plainfield, NH',
    metaDescription:
      'Full-service private estate and property management in Plainfield, NH and the Upper Valley. One trusted point of contact for oversight, vendors, budgets, and the quiet running of the home.',
    summary:
      'The whole property, held as a single responsibility. Oversight, vendors, budgets, and the quiet running of the home — managed by one accountable steward.',
    tagline: 'The whole property, managed as a single responsibility.',
    intro: [
      'A fine property deserves more than a list of contractors; it deserves a steward. Estate management is the discipline of holding the whole — house, grounds, systems, vendors, budgets — as one responsibility, so the owner holds none of it. Decisions are made with a long-term mindset, in the best interest of both the property and the family it represents.',
      'For homeowners in Plainfield and the surrounding Upper Valley, I serve as that single, discreet point of contact: present on the property, ahead of its needs, and accountable for everything that happens on it.',
    ],
    included: [
      {
        title: 'Complete property oversight',
        description: 'House, grounds, outbuildings, and systems held to one standard, on one calendar, under one responsible eye.',
      },
      {
        title: 'Vendor & contractor management',
        description: 'The right people selected, scheduled, supervised, and held to the estate’s standard — you never chase a trade again.',
      },
      {
        title: 'Budgets & reporting',
        description: 'Costs planned, tracked, and reported in plain language, so ownership always knows where the property stands.',
      },
      {
        title: 'Household & grounds coordination',
        description: 'Housekeeping, landscape, and seasonal services woven into one schedule that respects how the home is lived in.',
      },
      {
        title: 'Discretion as standard',
        description: 'Quiet, professional, and confidential. The property runs seamlessly, and privately, behind the scenes.',
      },
    ],
    image: hale,
    imageAlt: 'A refined New England home under thoughtful, long-term management',
  },
  {
    slug: 'concierge',
    number: 'II',
    title: 'Concierge Services',
    seoTitle: 'Estate Concierge Services in the Upper Valley, NH',
    metaDescription:
      'Private concierge support for homeowners in Plainfield, NH and the Upper Valley: arrival preparation, house stocking, deliveries, vendor access, and trusted on-call local representation.',
    summary:
      'The residence opened, warmed, and provisioned before you arrive. Deliveries received, vendors met, and every practical detail handled while you are away.',
    tagline: 'The house is ready, and nothing has been left to chance.',
    intro: [
      'For seasonal residents and owners away from home, the measure of good service is simple: you arrive, and everything is already done. The house is open and set to temperature, the pantry is stocked, the drive is clear, and the quiet logistics of ownership — deliveries, mail, trades at the door — have been handled without a single call.',
      'I provide that standing presence in the Upper Valley. Whatever the household needs before, during, or between your stays is anticipated, arranged, and seen through personally.',
    ],
    included: [
      {
        title: 'Home preparation & arrivals',
        description: 'The residence opened, aired, warmed, and standing ready before you arrive; secured and set properly when you leave.',
      },
      {
        title: 'House stocking',
        description: 'Groceries, essentials, and household supplies placed before arrival, to your standing list or the season’s request.',
      },
      {
        title: 'Vendor access & coordination',
        description: 'Trades and deliveries met, supervised, and seen out. You are never the keyholder of last resort.',
      },
      {
        title: 'Deliveries & mail',
        description: 'Packages received, logged, and placed securely; mail collected and forwarded. Nothing left on a step, nothing unaccounted for.',
      },
      {
        title: 'Emergency & on-call support',
        description: 'A trusted local contact when weather, systems, or circumstance demand immediate attention.',
      },
    ],
    image: drive,
    imageAlt: 'A gated drive leading to a private New England property',
  },
  {
    slug: 'daily-stewardship',
    number: 'III',
    title: 'Daily Stewardship',
    seoTitle: 'Property Caretaking & Home Watch in Plainfield, NH',
    metaDescription:
      'Ongoing property caretaking and home watch in Plainfield, NH and the Upper Valley. Regular inspection, maintenance oversight, and quiet daily discipline that keeps private homes and estates thriving.',
    summary:
      'The small things watched well, every day. Inspection. Oversight. Adjustment. The quiet discipline that keeps a property thriving.',
    tagline: 'The quiet discipline that keeps a property thriving.',
    intro: [
      'A property is not maintained by events; it is maintained by habits. Walking the grounds after a storm. Noticing the sound a pump shouldn’t make. Catching the ice dam while it is still a shadow on the eave. Daily stewardship is that habit, practiced on your behalf.',
      'For owners who are away — a second home, a seasonal residence, an estate between visits — this is caretaking in the full sense: regular inspections, standing maintenance kept on schedule, and a trusted local presence in the Upper Valley who treats the property as if it were his own. You arrive to a house that has been lived toward, not just locked up.',
    ],
    included: [
      {
        title: 'Regular inspections',
        description: 'Interior and exterior walk-throughs on a set rhythm, with photos and a plain-spoken report after each visit.',
      },
      {
        title: 'Home watch for absent owners',
        description: 'Heat, water, power, and security confirmed while you are away — and the first call when weather moves through.',
      },
      {
        title: 'Standing maintenance oversight',
        description: 'Filters, softeners, generators, gutters, and the seasonal checklist scheduled and verified — on calendar, not on failure.',
      },
      {
        title: 'Arrival & departure readiness',
        description: 'The house opened, warmed, provisioned, and ready before you arrive; secured and set properly when you leave.',
      },
      {
        title: 'One point of contact',
        description: 'Deliveries, alarms, contractors, and neighbors all have a responsible local party to call — me.',
      },
    ],
    image: countryside,
    imageAlt: 'Rolling New England countryside surrounding a private estate',
  },
  {
    slug: 'infrastructure',
    number: 'IV',
    title: 'Infrastructure',
    seoTitle: 'Estate Infrastructure & Systems Management, NH',
    metaDescription:
      'Management of estate infrastructure in New Hampshire: water systems, solar, generators, pumps, drainage, and equipment — the unseen systems behind a property, kept quietly functioning.',
    summary:
      'Behind every beautiful property is a quiet network of systems. Pumps, solar, power, drainage, equipment — the unseen pieces that keep everything functioning.',
    tagline: 'The unseen pieces that keep everything functioning.',
    intro: [
      'What makes a property feel effortless is everything you never see: the well that holds pressure, the generator that starts in the first second of an outage, the drainage that moves spring melt away from the foundation without anyone thinking about it. That network of systems is infrastructure, and it rewards the owner who manages it deliberately.',
      'I understand these systems from the mechanical side up — water, solar, power, septic, drainage, machinery — and I manage them as a whole: monitored, serviced on calendar rather than on breakdown, and documented so the property’s knowledge doesn’t live only in one person’s memory.',
    ],
    included: [
      {
        title: 'Water systems',
        description: 'Wells, pumps, filtration, softeners, and irrigation — pressure, quality, and winterization managed year-round.',
      },
      {
        title: 'Power & solar',
        description: 'Generators exercised and serviced, solar arrays monitored, transfer systems tested before the storm, not during it.',
      },
      {
        title: 'Drainage & site water',
        description: 'Culverts, swales, gutters, and grading kept doing their quiet work of moving water away from what matters.',
      },
      {
        title: 'Equipment & machinery',
        description: 'Tractors, mowers, compressors, and tools serviced, stored, and ready — protected assets instead of deferred problems.',
      },
      {
        title: 'Documentation',
        description: 'A living record of every system: what it is, when it was serviced, who services it, and what it will need next.',
      },
    ],
    image: pool,
    imageAlt: 'A private pool and its supporting systems on a managed estate',
  },
  {
    slug: 'problem-prevention',
    number: 'V',
    title: 'Problem Prevention',
    seoTitle: 'Preventive Property Management & Inspections, NH',
    metaDescription:
      'Preventive property management in Plainfield, NH and the Upper Valley. Careful inspections and early intervention that solve problems before they appear — protecting both property and investment.',
    summary:
      'Good management often means solving problems before they appear. A careful eye today prevents a larger repair tomorrow.',
    tagline: 'A careful eye today prevents a larger repair tomorrow.',
    intro: [
      'Almost every expensive repair was once a cheap one. The roof leak was a lifted shingle; the rotten sill was a clogged gutter; the burst pipe was a thermostat nobody checked. The most valuable work I do is often the work that means nothing dramatic ever happens.',
      'Prevention is a practice: knowing the property well enough to notice change, keeping a maintenance calendar that respects New England’s seasons, and acting early, when intervention is small. It is the least visible service I offer and, over the years, the one that protects an owner’s investment most.',
    ],
    included: [
      {
        title: 'Seasonal inspections',
        description: 'Roof to foundation, before winter and after it — the two moments when small problems declare themselves.',
      },
      {
        title: 'A maintenance calendar',
        description: 'Every system and structure on a schedule tuned to the property, so nothing depends on being remembered.',
      },
      {
        title: 'Early intervention',
        description: 'The lifted shingle, the damp corner, the hairline crack — caught early and resolved while the fix is still small.',
      },
      {
        title: 'Weather response',
        description: 'The property checked after storms, heavy snow, and hard freezes, when damage is freshest and cheapest to fix.',
      },
      {
        title: 'Honest reporting',
        description: 'What I found, what was done, what can wait, and what shouldn’t — in plain language, with photographs.',
      },
    ],
    image: landscaping,
    imageAlt: 'Carefully maintained grounds and landscaping on a private property',
  },
  {
    slug: 'project-coordination',
    number: 'VI',
    title: 'Project Coordination',
    seoTitle: 'Estate Project & Vendor Coordination in New Hampshire',
    metaDescription:
      'Owner’s representation for estate projects in New Hampshire: renovations, restorations, and improvements planned, budgeted, and supervised from first sketch to final walkthrough.',
    summary:
      'Renovations, restorations, and improvements carried from first sketch to final walkthrough — architects, trades, budgets, and timelines managed on your behalf.',
    tagline: 'Your interests represented in every meeting, every decision, every phase.',
    intro: [
      'Every property eventually asks for more than maintenance: a renovation, a restoration, a new structure, a piece of land brought into shape. Projects like these succeed or fail on management — on someone who attends every meeting, questions every estimate, and walks the site when no one expects it.',
      'I serve as the owner’s representative for that work across New Hampshire’s Upper Valley. Having carried projects from raw land to finished homes, I know what good work looks like at every phase — so architects, engineers, and trades are chosen well, supervised closely, and held to the standard of the property.',
    ],
    included: [
      {
        title: 'Owner’s representation',
        description: 'Your interests carried into every meeting with architects, engineers, inspectors, and trades — so you don’t have to be there.',
      },
      {
        title: 'Planning & budgeting',
        description: 'Scope defined, estimates challenged, and budgets set honestly before the first contract is signed.',
      },
      {
        title: 'Trade selection & supervision',
        description: 'The right specialists brought in, scheduled, and watched closely — quality checked while it can still be corrected.',
      },
      {
        title: 'Restoration oversight',
        description: 'Older homes, barns, and outbuildings restored with materials and methods sympathetic to the original — character kept, structure secured.',
      },
      {
        title: 'Documentation & closeout',
        description: 'Decisions, changes, warranties, and as-built records kept in order, so the project’s knowledge stays with the property.',
      },
    ],
    image: library,
    imageAlt: 'Finely finished interior of a thoughtfully managed private home',
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
