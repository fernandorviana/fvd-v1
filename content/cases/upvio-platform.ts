import type { CaseStudy } from "../case-types";

export const upvioPlatform: CaseStudy = {
  slug: "upvio-platform",
  subtitle:
    "As Upvio's first designer, I built the design foundations and led the redesign of the platform's core (clinical notes, records, telehealth, the patient portal and more) for multi-clinic, multi-staff organisations.",
  facts: {
    role: "Founding Designer, Head of Design",
    timeline: "Jan 2023 — Mar 2025",
    scope: "Design system, UX architecture, 0→1 features, research",
    team: "Solo designer, 3–5 engineers, direct line to C-level",
  },
  stats: [
    { value: "8", label: "Product areas designed from zero or rebuilt" },
    { value: "3", label: "Role-based dashboards: admin, manager and practitioner" },
    { value: "[N]M", label: "End users reached through one enterprise client", placeholder: true },
    { value: "[N]", label: "Clinics or organisations on the platform", placeholder: true },
  ],
  blocks: [
    { type: "section", label: "01 — Context", title: "A capable engine nobody had designed" },
    {
      type: "paragraph",
      text: "Upvio is a B2B platform for running healthcare practices: scheduling, patient records, consultations and patient communication, with a layer of Human Insights AI on top. When I joined in January 2023 the product was called Cogsworth, and it was a scheduling tool: a basic calendar, a list of clients, a list of practitioners, customisable forms, and not much else. The rename to Upvio happened as I joined, part of the same push to become more than a scheduling tool.",
    },
    {
      type: "paragraph",
      text: "The engineering underneath was solid. Nobody had ever designed the product.",
    },
    { type: "paragraph", text: "Many of the capabilities clinics expected were missing or rudimentary:" },
    {
      type: "list",
      items: [
        "Clinical notes",
        "Complex patient records",
        "Telehealth",
        "Patient portal",
        "Secure messaging",
        "Roles and teams",
        "Robust custom forms",
        "Advanced scheduling",
      ],
    },
    {
      type: "image",
      alt: "Cogsworth, before the redesign",
      caption: "Cogsworth, before the redesign",
      width: "wide",
      source: "screenshot",
    },

    { type: "section", label: "02 — Challenge", title: "Foundations and features, at the same time" },
    {
      type: "paragraph",
      text: "The job was to turn a capable but under-designed tool into a coherent platform, one that could support organisations with multiple locations, services and practitioners without overwhelming the people using it every day.",
    },
    {
      type: "paragraph",
      text: "And there was no pause button. Clinics were using the product, the business needed new features, and there was no design foundation to build them on.",
    },
    {
      type: "callout",
      text: "I shipped a lean design system as fast as possible, then grew it component by component as features demanded, using quick wireframes to unblock decisions.",
    },

    { type: "section", label: "03 — Foundations", title: "One system, one structure" },
    {
      type: "paragraph",
      text: "I created the design system, Australis, from scratch: typography, colour tokens and spacing, then a component library for inputs, tables, cards, navigation and layouts. It started deliberately lean and grew with every feature. The same system later carried the scheduling rebuild and the AI surfaces.",
    },
    {
      type: "image",
      alt: "Upvio design system: tokens and core components",
      caption: "Design system: tokens and core components",
      width: "wide",
      source: "figma",
    },
    {
      type: "paragraph",
      text: "In parallel I redesigned the product's structure: navigation, dashboards, the primary flows for scheduling, consultations, documentation and patients, and the mental model underneath them.",
    },
    {
      type: "diagram",
      id: "ia-before-after",
      caption: "Information architecture: from a scheduling tool to a platform",
    },

    { type: "section", label: "04 — Building the platform", title: "Designed around three journeys" },
    {
      type: "paragraph",
      text: "Rather than treating each feature on its own, I organised the work around the three journeys the platform had to serve.",
    },
    {
      type: "paragraph",
      text: "The first is the clinician's: structured clinical notes for documenting consultations; patient records built for long-term histories, multiple practitioners and custom fields per specialty; and telehealth for remote consultations inside the platform.",
    },
    {
      type: "image",
      alt: "Clinical notes, patient record and telehealth screens",
      caption: "Clinician workflow: notes, records and telehealth",
      width: "wide",
      source: "figma",
    },
    {
      type: "paragraph",
      text: "The second is the patient's: a portal for appointments, documents and self-service; custom forms for intake, follow-up and feedback, connected to records and workflows; and secure messaging between staff and, when appropriate, patients.",
    },
    {
      type: "image",
      alt: "Patient portal, custom forms and secure messaging screens",
      caption: "Patient engagement: portal, forms and messaging",
      width: "wide",
      source: "figma",
    },
    {
      type: "paragraph",
      text: "The third belongs to the people who run the day. I spent a long interview walking through one clinic's front desk, and it shaped a lot of the product. Booking there means choosing from more than fifty services organised by specialty, navigating a calendar full of practitioners through filters, and assigning an office room to every appointment while respecting each practitioner's preferences. Then checking patients in, issuing the invoice, taking the payment, and chasing the payments that arrive later by bank transfer.",
    },
    {
      type: "paragraph",
      text: "So an appointment had to carry more than a time and a name. It carries whether the patient turned up, whether they paid and whether an invoice exists, because that is the state the front desk works from all day.",
    },
    {
      type: "paragraph",
      text: "Around the front desk sits the organisation: roles, teams and permissions for the different people and structures inside a practice, from a single clinic to a multi-location group. I designed a dashboard for each role (admin, manager and practitioner), starting from what that role is responsible for and writing user stories before choosing content: alerts, today's appointments, week-on-week comparisons, outstanding payments, revenue by location and service.",
    },
    {
      type: "image",
      alt: "Roles, teams and permissions settings",
      caption: "Organisation: roles, teams and permissions",
      width: "text",
      source: "figma",
    },

    { type: "section", label: "05 — What it made possible", title: "Two problems that needed their own story" },
    {
      type: "paragraph",
      text: "Two parts of the platform went deeper than the rest. Fixing scheduling meant going below the interface and redesigning the domain model itself: how services, locations, staff and schedules depend on each other. And the AI the company was betting on had no product around it. Each has its own case study.",
    },
    { type: "link", href: "/work/upvio-scheduling", text: "Read the Scheduling & Resource Model case" },
    { type: "link", href: "/work/upvio-human-insights", text: "Read the Human Insights AI case" },

    { type: "section", label: "06 — Process", title: "One designer, many stakeholders" },
    {
      type: "paragraph",
      text: "Half of the job was how the company worked. The way it was organised was the bottleneck, so I pushed for a team that worked collaboratively and in shorter cycles, and introduced design-thinking practices adapted to the size and pace we had. I ended up acting as another stakeholder more than as a service to the others: someone arguing for a product with a real presence in the market.",
    },
    {
      type: "paragraph",
      text: "I also ran design QA on what got built. Every finding was categorised as UI/UX debt, a bug or an improvement and ranked by criticality from P1 to P5, which turned a pile of complaints into a backlog engineering could work through.",
    },
    {
      type: "paragraph",
      text: "The rest was juggling: quick wireframes to unblock decisions and test UX directions, guiding developers through implementation, and meeting the CEO's and CMO's expectations for how the product looked, all while shipping new features and reworking existing ones. The same design language extended to the marketing website and the story of the product.",
    },
    {
      type: "paragraph",
      text: "I was the only designer, working with three engineers at the start, four for most of the time and five at the peak, and directly with the CEO, CTO, CMO, Head of Growth, Head of Compliance & Support and, at times, the Sales Director. For a short period a second designer helped produce assets within the visual language I had set.",
    },
    {
      type: "paragraph",
      text: "Research ran alongside delivery: interviews at a clinic, guided sessions with clinicians and usage surveys. The Human Insights AI case covers it in detail.",
    },

    { type: "section", label: "07 — Outcomes", title: "A platform, not a set of functions" },
    {
      type: "paragraph",
      text: "Cogsworth was a calendar with lists attached. Upvio is a platform: one design language, one navigation model and the core capabilities clinics expect. The foundations were solid enough to carry what came next, a rebuilt scheduling model and a Human Insights AI layer.",
    },
    {
      type: "paragraph",
      text: "It also gave Upvio a product it could put in front of enterprise clients and investors. The scheduling case covers that part of the story.",
    },

    { type: "section", label: "08 — What I learned", title: "Lessons from building the base" },
    {
      type: "list",
      items: [
        "Design for modularity earlier. One vertically integrated product gave clinics a single coherent place to work, and made the product expensive to maintain. After I left, Upvio split it into APIs. The capabilities held up; I would now draw clearer boundaries between product areas, and build a design system that works as building blocks outside a single app.",
        "Ship lean foundations, then let features grow them. A small system delivered fast did more than a complete one delivered late, because every feature after it had something to stand on.",
        "The organisation is part of the design problem. Shorter cycles and a shared way of working changed the product more than any single screen did.",
      ],
    },
  ],
};
