/**
 * Single source of truth for the six core services.
 * Feeds the front-page service rows, the /services/[slug] pages,
 * the contact form's service selector, and per-service JSON-LD.
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
  /** Front-page service-row copy — kept verbatim from the original section. */
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
    slug: 'craftsmanship',
    number: 'I',
    title: 'Craftsmanship',
    seoTitle: 'Estate Craftsmanship & Fine Carpentry in Plainfield, NH',
    metaDescription:
      'Fine carpentry and estate craftsmanship in Plainfield, NH and the Upper Valley. Small projects, built and finished properly — measured, aligned, repaired, rebuilt.',
    summary:
      'There is satisfaction in doing something properly. Measured, aligned, repaired, rebuilt. Small projects are often where care shows the most.',
    tagline: 'Small projects are often where care shows the most.',
    intro: [
      'Fine homes are built from a thousand small decisions made well. A shelf that sits true, a joint that closes without a shadow, a finish that will still look right in ten years. I bring a craftsman’s hand to the projects an estate accumulates — the built-ins, the trim work, the outbuildings, the pieces that deserve better than a rushed job.',
      'Working across New Hampshire’s Upper Valley, I take on the work at the scale it actually is: some projects are an afternoon, some are a season. Either way they are measured twice, built once, and finished properly.',
    ],
    included: [
      {
        title: 'Finish carpentry & trim',
        description: 'Interior woodwork, built-ins, doors, and trim — fitted, aligned, and finished to the standard of the home.',
      },
      {
        title: 'Small-project construction',
        description: 'Garden structures, storage, shelving, gates, and the useful pieces a property asks for over time.',
      },
      {
        title: 'Rebuilds done right',
        description: 'When something has been patched one time too many, it gets taken apart and rebuilt so it stops being a problem.',
      },
      {
        title: 'Material & finish selection',
        description: 'Wood, hardware, and finishes chosen for the climate and the character of the property — not just what’s on the shelf.',
      },
      {
        title: 'Coordination with the trades',
        description: 'Where a project touches plumbing, electrical, or masonry, I bring in and supervise the right people.',
      },
    ],
    image: library,
    imageAlt: 'Finely crafted interior woodwork and shelving in a private home',
  },
  {
    slug: 'small-repair',
    number: 'II',
    title: 'Small Repair',
    seoTitle: 'Home & Estate Repair Services in the Upper Valley, NH',
    metaDescription:
      'Careful home and estate repair in Plainfield, NH and the Upper Valley. Hinges, latches, gates, fixtures — small repairs done properly, restoring how a property lives day to day.',
    summary:
      'A hinge, a latch, a gate that no longer swings true. Small details quietly shape how a property lives and functions. A careful repair restores not just the object, but the rhythm of daily use.',
    tagline: 'A careful repair restores not just the object, but the rhythm of daily use.',
    intro: [
      'Every property keeps a quiet list: the door that sticks in July, the latch that needs a certain touch, the step that moves a little more each spring. None of it is an emergency, and that is exactly why it tends to wait. I work through that list — properly, not provisionally — so the house works the way it was meant to.',
      'For homeowners in Plainfield and the surrounding Upper Valley, this is the difference between a property that is maintained and one that is merely occupied. Small repairs, handled well and on time, are the cheapest insurance an estate can buy.',
    ],
    included: [
      {
        title: 'Doors, windows & hardware',
        description: 'Hinges, latches, locks, and sashes adjusted or replaced so everything opens, closes, and seals as it should.',
      },
      {
        title: 'Gates, fences & railings',
        description: 'Swing corrected, posts reset, rot cut out and replaced — the boundaries of the property kept true.',
      },
      {
        title: 'Fixtures & fittings',
        description: 'The dripping faucet, the loose handle, the light that flickers. Diagnosed and repaired, not worked around.',
      },
      {
        title: 'Seasonal wear',
        description: 'What New England weather loosens each year — caulk, glazing, weatherstripping, thresholds — put right.',
      },
      {
        title: 'The running list',
        description: 'I keep the property’s repair list so you don’t have to, and work it down on a schedule that suits the household.',
      },
    ],
    image: drive,
    imageAlt: 'A gated drive leading to a private New England property',
  },
  {
    slug: 'restoration',
    number: 'III',
    title: 'Restoration',
    seoTitle: 'Property & Estate Restoration in New Hampshire',
    metaDescription:
      'Thoughtful restoration of homes, barns, and estate structures in New Hampshire. Repairs that preserve the integrity and character of a place while preparing it for the years ahead.',
    summary:
      'Time leaves its mark on every structure. Thoughtful repair preserves the integrity of a place while preparing it for the years ahead.',
    tagline: 'Preserving the integrity of a place while preparing it for the years ahead.',
    intro: [
      'Older homes and their outbuildings carry something worth keeping. The proportions, the materials, the evidence of hands that knew what they were doing. Restoration is the discipline of repairing what time has worn without erasing what makes the place itself.',
      'I approach restoration projects in New Hampshire the way they deserve: understand the structure first, stabilize what needs stabilizing, then repair with materials and methods sympathetic to the original. The goal is a building that is sound for the next fifty years and still honest about its first hundred.',
    ],
    included: [
      {
        title: 'Assessment before action',
        description: 'A careful read of the structure — what is original, what has been altered, what is failing and why — before any work begins.',
      },
      {
        title: 'Structural repair',
        description: 'Sills, framing, and foundations addressed at the cause, so the repair holds and the building settles no further.',
      },
      {
        title: 'Sympathetic materials',
        description: 'Species, profiles, and finishes matched to the original work, sourced with the same care they were first chosen with.',
      },
      {
        title: 'Barns & outbuildings',
        description: 'The structures that give a New England property its character, kept standing and kept useful.',
      },
      {
        title: 'Phased, managed work',
        description: 'Larger restorations broken into sensible phases, with specialists brought in and supervised where the work demands it.',
      },
    ],
    image: hale,
    imageAlt: 'A restored home showing preserved original character',
  },
  {
    slug: 'daily-stewardship',
    number: 'IV',
    title: 'Daily Stewardship',
    seoTitle: 'Property Caretaking & Home Watch in Plainfield, NH',
    metaDescription:
      'Ongoing property caretaking and home watch in Plainfield, NH and the Upper Valley. Regular inspection, maintenance, and quiet daily discipline that keeps private homes and estates thriving.',
    summary:
      'The small things done well, every day. Inspection. Maintenance. Adjustment. The quiet discipline that keeps a property thriving.',
    tagline: 'The quiet discipline that keeps a property thriving.',
    intro: [
      'A property is not maintained by events; it is maintained by habits. Walking the grounds after a storm. Noticing the sound a pump shouldn’t make. Catching the ice dam while it is still a shadow on the eave. Daily stewardship is that habit, practiced on your behalf.',
      'For owners who are away — a second home, a seasonal residence, an estate between visits — this is caretaking in the full sense: regular inspections, standing maintenance, and a trusted local presence in the Upper Valley who treats the property as if it were his own. You arrive to a house that has been lived toward, not just locked up.',
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
        title: 'Standing maintenance',
        description: 'Filters, softeners, generators, gutters, and the seasonal checklist handled on schedule, not on failure.',
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
    number: 'V',
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
    number: 'VI',
    title: 'Problem Prevention',
    seoTitle: 'Preventive Property Maintenance & Inspections, NH',
    metaDescription:
      'Preventive property maintenance in Plainfield, NH and the Upper Valley. Careful inspections and early intervention that solve problems before they appear — protecting both property and investment.',
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
        description: 'The lifted shingle, the damp corner, the hairline crack — addressed while they are still an afternoon’s work.',
      },
      {
        title: 'Weather response',
        description: 'The property checked after storms, heavy snow, and hard freezes, when damage is freshest and cheapest to fix.',
      },
      {
        title: 'Honest reporting',
        description: 'What I found, what I did, what can wait, and what shouldn’t — in plain language, with photographs.',
      },
    ],
    image: landscaping,
    imageAlt: 'Carefully maintained grounds and landscaping on a private property',
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
