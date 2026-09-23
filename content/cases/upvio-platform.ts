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
    { value: "9", label: "Product areas designed from zero or rebuilt" },
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
        "Check-in and billing",
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

    { type: "section", label: "04 — Clinician workflow", title: "Notes, records and consultations" },
    {
      type: "paragraph",
      text: "Rather than treating each feature on its own, I organised the work around the three journeys the platform had to serve. The first is the clinician's.",
    },
    { type: "subheading", text: "Clinical notes" },
    {
      type: "paragraph",
      text: "Notes are the most used tool in a practice, and the product had none. They got the most design attention of any area, so they have their own section below.",
    },
    { type: "subheading", text: "Patient records" },
    {
      type: "paragraph",
      text: "One record per patient, holding the long-term history across every practitioner who treats them. It opens on a dashboard of the patient and splits into tabs: appointments, notes, documents, forms, personal information, with custom fields per specialty so a physiotherapist and a psychologist each record what matters to them.",
    },
    {
      type: "image",
      alt: "Patient record: dashboard and tabs for appointments, notes and documents",
      caption: "Patient record: one dashboard, one tab per kind of history",
      width: "wide",
      source: "figma",
    },
    { type: "subheading", text: "Telehealth" },
    {
      type: "paragraph",
      text: "Video consultations inside the platform, designed end to end: the patient's access link and pre-payment, a waiting room the practitioner admits patients from, the call itself with the appointment's notes and record at hand, and the states a call moves through so the front desk can see who is in session. It later became the surface where Vitals and Empathic AI readings land.",
    },
    {
      type: "image",
      alt: "Telehealth: waiting room and video consultation with notes alongside",
      caption: "Telehealth: waiting room, then the consultation with notes at hand",
      width: "wide",
      source: "figma",
    },
    { type: "section", label: "05 — Deep dive", title: "Clinical notes: one note, two readers" },
    {
      type: "paragraph",
      text: "The research had made the problem concrete. Clinicians kept notes in paper notebooks and could not read back what a patient had said two years earlier. They needed to write in technical language for colleagues and in plain language for patients, and to share some of a note but never all of it. And they needed to write while keeping their attention on the person in front of them, or not write during the session at all.",
    },
    {
      type: "paragraph",
      text: "Before designing, I studied how the practice software clinicians already used handled notes, mainly Jane, SimplePractice and PowerDiary: template libraries per specialty, locked notes as permanent record, pinned entries, PDF export, privacy per file. It set the baseline a clinician would expect, and showed where nobody had solved the two-readers problem.",
    },
    {
      type: "image",
      alt: "Note editor with a block menu: formats, media, links to appointments and other notes, signature and status",
      caption: "The editor: a note is built from blocks, from sections and tables to a signature",
      width: "wide",
      source: "figma",
    },
    {
      type: "paragraph",
      text: "Two ways to write. A free-text note for the clinician who thinks as they type, and a note built on a template for the one who wants structure: the practice's own templates, per specialty, made of sections, tables, callouts and fields. Both use the same editor, built from blocks, with dictation in the tools menu for anyone who would rather speak than type.",
    },
    {
      type: "image",
      alt: "Template gallery by specialty and the template builder",
      caption: "Templates per specialty, built and shared by the practice",
      width: "text",
      source: "figma",
    },
    {
      type: "callout",
      text: "One note, two readers: every field decides whether the patient sees it.",
    },
    {
      type: "paragraph",
      text: "The decision that shaped the rest was privacy per field. Instead of writing an internal note and then a separate patient-facing one, a clinician writes once and marks, field by field, what stays with the team and what the patient can see in their portal. The same note can carry the clinical assessment and the treatment plan the patient takes home.",
    },
    {
      type: "image",
      alt: "A note with per-field privacy toggles, and the patient's view of the same note beside it",
      caption: "The same note as the clinician sees it and as the patient sees it",
      width: "wide",
      source: "figma",
    },
    {
      type: "paragraph",
      text: "A note belongs to an appointment. The system records when the consultation started and ended, and keeps the note open for a window after it, because that is when most of the writing happens. Notes sit in the patient's record in a timeline, most recent first, with the important ones pinned. Who can view, edit or share a note follows roles and teams, and any note exports to PDF for a referral or a records request.",
    },
    {
      type: "image",
      alt: "Patient record timeline of notes, with pinned notes at the top and a permissions panel",
      caption: "Notes in the record: a timeline, pinned entries and who can see what",
      width: "wide",
      source: "figma",
    },
    {
      type: "paragraph",
      text: "This structure is what made the AI documentation layer possible later. A transcript only becomes useful when there is a template to pour it into, a field that says what the patient may read, and a clinician who signs off. The Human Insights AI case picks up from here.",
    },
    { type: "link", href: "/work/upvio-human-insights", text: "Read the Human Insights AI case" },

    { type: "section", label: "06 — Patient engagement", title: "The patient's side of the platform" },
    {
      type: "paragraph",
      text: "The second journey is the patient's. Until then the product only faced the clinic.",
    },
    { type: "subheading", text: "Patient portal" },
    {
      type: "paragraph",
      text: "A place of their own where patients see what the practice shares with them: upcoming appointments, the documents and notes marked as shareable, and forms to fill in before a visit. They book new appointments from it and pay online ahead of an online consultation, which the practice I studied had introduced to cut no-shows.",
    },
    {
      type: "image",
      alt: "Patient portal: upcoming appointments, shared documents and booking",
      caption: "Patient portal: appointments, shared information and self-service booking",
      width: "wide",
      source: "figma",
    },
    { type: "subheading", text: "Custom forms" },
    {
      type: "paragraph",
      text: "Forms existed in Cogsworth as a list on their own. I rebuilt them so they connect to the rest: intake forms sent when an appointment is booked, follow-up and feedback forms tied to a consultation, and answers that land in the patient's record instead of a detached inbox.",
    },
    {
      type: "image",
      alt: "Form builder and a completed intake form inside the patient record",
      caption: "Custom forms: built by the practice, answered by the patient, filed in the record",
      width: "wide",
      source: "figma",
    },
    { type: "subheading", text: "Secure messaging" },
    {
      type: "paragraph",
      text: "Free-form messaging between staff, and with patients when the practice allows it, inside the platform instead of email or WhatsApp. Staff presence shows across the product, so a manager can see who is online or in a call and start a conversation from there.",
    },
    {
      type: "image",
      alt: "Secure messaging inbox with a staff conversation and a patient conversation",
      caption: "Secure messaging: staff and patients in one inbox",
      width: "text",
      source: "figma",
    },
    { type: "section", label: "07 — Organisation", title: "The people who run the day" },
    {
      type: "paragraph",
      text: "The third journey belongs to the people who run the day. I spent a long interview walking through one clinic's front desk, and it shaped a lot of the product. Booking there means choosing from more than fifty services organised by specialty, navigating a calendar full of practitioners through filters, and assigning an office room to every appointment while respecting each practitioner's preferences. Then checking patients in, issuing the invoice, taking the payment, and chasing the payments that arrive later by bank transfer.",
    },
    { type: "subheading", text: "Check-in and billing" },
    {
      type: "paragraph",
      text: "So an appointment had to carry more than a time and a name. It carries whether the patient turned up, whether they paid and whether an invoice exists, because that is the state the front desk works from all day. Check-in happens from the calendar: mark the patient as arrived, issue the invoice, take the payment on the spot, and see at a glance which appointments still owe something.",
    },
    {
      type: "image",
      alt: "Calendar with check-in, payment and invoice state on each appointment",
      caption: "Check-in from the calendar: attendance, payment and invoice on every appointment",
      width: "wide",
      source: "figma",
    },
    { type: "subheading", text: "Roles and teams" },
    {
      type: "paragraph",
      text: "Roles and teams for the structure of a practice, from a single clinic to a multi-location group: what each role sees and does, teams that map to locations or specialties, and permissions that reach into features, down to who can view, edit or share a note.",
    },
    {
      type: "image",
      alt: "Roles, teams and permissions settings",
      caption: "Organisation: roles, teams and permissions",
      width: "text",
      source: "figma",
    },
    { type: "subheading", text: "Dashboards" },
    {
      type: "paragraph",
      text: "One dashboard per role, each written first as responsibilities and user stories, then as content. The admin sees the month: new patients, appointments and no-shows against the previous month, overdue payments, revenue by location and service. The manager sees the clinic's day: appointments by state, staff online or in a call, patients in the waiting room, patients with repeated no-shows. The practitioner sees their own day: appointments, draft and unfinished notes, patients waiting to be admitted.",
    },
    {
      type: "image",
      alt: "Admin, manager and practitioner dashboards",
      caption: "Three dashboards, one per role",
      width: "wide",
      source: "figma",
    },
    { type: "section", label: "08 — What it made possible", title: "Two problems that needed their own story" },
    {
      type: "paragraph",
      text: "Two parts of the platform went deeper than the rest. Fixing scheduling meant going below the interface and redesigning the domain model itself: how services, locations, staff and schedules depend on each other. And the AI the company was betting on had no product around it. Each has its own case study.",
    },
    { type: "link", href: "/work/upvio-scheduling", text: "Read the Scheduling & Resource Model case" },
    { type: "link", href: "/work/upvio-human-insights", text: "Read the Human Insights AI case" },

    { type: "section", label: "09 — Process", title: "One designer, many stakeholders" },
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

    { type: "section", label: "10 — Outcomes", title: "A platform, not a set of functions" },
    {
      type: "paragraph",
      text: "Cogsworth was a calendar with lists attached. Upvio is a platform: one design language, one navigation model and the core capabilities clinics expect. The foundations were solid enough to carry what came next, a rebuilt scheduling model and a Human Insights AI layer.",
    },
    {
      type: "paragraph",
      text: "It also gave Upvio a product it could put in front of enterprise clients and investors. The scheduling case covers that part of the story.",
    },

    { type: "section", label: "11 — What I learned", title: "Lessons from building the base" },
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
