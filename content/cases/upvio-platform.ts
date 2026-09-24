import type { CaseStudy } from "../case-types";

export const upvioPlatform: CaseStudy = {
  slug: "upvio-platform",
  subtitle:
    "As Upvio's first designer, I turned a scheduling tool into a platform for running a practice. I built the design system, redesigned what already existed, and designed more than ten product areas from zero, from clinical notes and telehealth to the patient portal and onboarding, for everyone from the practitioner to the patient.",
  facts: {
    role: "Founding Designer, Head of Design",
    timeline: "Jan 2023 — Mar 2025",
    scope: "Design system, UX architecture, 0→1 features, research",
    team: "Solo designer, 3–5 engineers, direct line to C-level",
  },
  stats: [
    { value: "10+", label: "Product areas designed from zero" },
    { value: "5", label: "Personas: practitioner, front desk, manager, owner or admin, and patient" },
    { value: "[N]M", label: "End users reached through one enterprise client", placeholder: true },
    { value: "[N]", label: "Clinics or organisations on the platform", placeholder: true },
  ],
  blocks: [
    { type: "section", label: "01 — Context", title: "A capable engine nobody had designed" },
    {
      type: "paragraph",
      text: "Upvio is a B2B platform for running healthcare practices: scheduling, patient records, consultations and patient communication, with a layer of Human Insights AI on top. When I joined in January 2023 the product was called Cogsworth, and it was a scheduling tool. The rename to Upvio happened as I joined, part of the same push to become more than that.",
    },
    {
      type: "paragraph",
      text: "The engineering underneath was solid. Nobody had ever designed the product.",
    },
    {
      type: "paragraph",
      text: "What existed had problems. Scheduling was the core of the product, and it worked badly enough that practices lived on workarounds to get the bookings they needed. Around it sat custom forms, with problems of their own, lists of patients and practitioners, and settings, some of them very complex. I redesigned the UX and UI of all of it. Everything else, from the design system to clinical notes, telehealth and the patient portal, I designed from zero.",
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
      text: "Those people were five personas with different jobs: the practitioner, the front desk, the manager, the owner or admin, and the patient, who reaches the practice through the patient portal.",
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
      type: "paragraph",
      text: "Everything I designed was responsive, down to mobile, for clinicians and patients alike. No screen was finished until it worked on a phone.",
    },
    {
      type: "image",
      alt: "The same screens on desktop and on mobile",
      caption: "The same screens on desktop and on mobile",
      width: "wide",
      source: "figma",
    },
    {
      type: "diagram",
      id: "ia-before-after",
      caption: "Information architecture: from a scheduling tool to a platform",
    },

    { type: "section", label: "04 — The platform", title: "Three journeys, one appointment" },
    {
      type: "paragraph",
      text: "Rather than treating each feature on its own, I organised the work around the three journeys the platform had to serve: the clinician's, the patient's, and that of the people who run the practice. Under all three sit the design system and, later, the Human Insights AI layer.",
    },
    { type: "diagram", id: "platform-map", caption: "The platform by journey, over the layers that run under all of it" },
    {
      type: "paragraph",
      text: "Each area holds smaller features that were design problems of their own: custom fields per specialty, a builder for forms with many questions, Vitals AI readings inside the patient record, availability time slots for scheduling, and many more.",
    },
    {
      type: "paragraph",
      text: "The journeys are not separate products. They meet in the appointment: the intake form, the payment, the call and the note all hang from it, so a single online consultation crosses almost every part of the platform.",
    },
    {
      type: "diagram",
      id: "appointment-lifecycle",
      caption: "One online consultation, from booking to the note: five personas, nine areas",
    },

    { type: "section", label: "05 — Clinician workflow", title: "Notes, records and consultations" },
    {
      type: "paragraph",
      text: "The clinician's journey keeps the patient's history within reach, in the record and during the call. Clinical notes got the most design attention of any area, so they have their own section below.",
    },
    { type: "subheading", text: "Patient records" },
    {
      type: "paragraph",
      text: "The record opens on a dashboard of the patient, with a tab for each kind of history. Custom fields per specialty let a physiotherapist and a psychologist each record what matters to them.",
    },
    {
      type: "image",
      alt: "Patient record: dashboard and tabs for appointments, notes and documents",
      caption: "Patient record: one dashboard, one tab per kind of history",
      width: "wide",
      source: "figma",
    },
    { type: "subheading", text: "Telehealth and the waiting room" },
    {
      type: "paragraph",
      text: "I designed telehealth end to end, including the states a call moves through, so the front desk can see who is in session. It later became the surface where Vitals and Empathic AI readings land.",
    },
    {
      type: "image",
      alt: "Telehealth: video consultation with the notes and record alongside",
      caption: "Telehealth: the consultation with notes and record at hand",
      width: "wide",
      source: "figma",
    },
    {
      type: "paragraph",
      text: "The waiting room is an experience of its own, designed from both sides: the patient waiting, and the practitioner and front desk deciding when to let them in.",
    },
    {
      type: "image",
      alt: "Waiting room: the patient's view while waiting, and the practitioner admitting them",
      caption: "The waiting room, from both sides",
      width: "wide",
      source: "figma",
    },
    { type: "section", label: "06 — Deep dive", title: "Clinical notes: one note, two readers" },
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
      text: "Progress notes and private notes are kept apart: a progress note is the clinical record of a session, and a private note stays with the clinician who wrote it.",
    },
    {
      type: "paragraph",
      text: "There are two ways to write. A free-text note for the clinician who thinks as they type, and a note built on a template for the one who wants structure: the practice's own templates, per specialty, made of sections, tables, callouts and fields. Both use the same editor, built from blocks, with dictation in the tools menu for anyone who would rather speak than type.",
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

    { type: "section", label: "07 — Patient engagement", title: "The patient's side of the platform" },
    {
      type: "paragraph",
      text: "The patient's journey started from nothing: until then the product only faced the clinic.",
    },
    { type: "subheading", text: "Patient portal" },
    {
      type: "paragraph",
      text: "The portal shows patients only what the practice chooses to share, down to single fields of a note. Online consultations are paid in advance from it, something the practice I studied had introduced to cut no-shows.",
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
      text: "Forms existed in Cogsworth as a list on their own. I connected them to the rest: intake forms go out when an appointment is booked, follow-up and feedback forms are tied to a consultation, and every answer lands in the patient's record.",
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
      text: "Free-form messaging keeps conversations inside the platform instead of email or WhatsApp, between staff and with patients when the practice allows it. Staff presence shows across the product, so a manager can see who is online or in a call and start a conversation from there.",
    },
    {
      type: "image",
      alt: "Secure messaging inbox with a staff conversation and a patient conversation",
      caption: "Secure messaging: staff and patients in one inbox",
      width: "text",
      source: "figma",
    },
    { type: "section", label: "08 — Running the practice", title: "The people who run the day" },
    {
      type: "paragraph",
      text: "A long interview walking through one clinic's front desk shaped much of this journey. Booking there means choosing from more than fifty services, filtering a calendar full of practitioners and assigning a room to every appointment. Then checking patients in, issuing the invoice, taking the payment, and chasing the payments that arrive later by bank transfer.",
    },
    { type: "subheading", text: "Check-in, billing and invoicing" },
    {
      type: "paragraph",
      text: "So an appointment carries more than a time and a name: whether the patient turned up, whether they paid, whether an invoice exists. That is the state the front desk works from all day. Check-in happens from the calendar, invoices are issued from the appointment and payments recorded against them, with coupons for the discounts a practice offers.",
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
      text: "Roles and teams scale from a single clinic to a multi-location group, with teams that map to locations or specialties. Permissions reach into features, down to who can view, edit or share a note.",
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
      text: "I wrote every dashboard first as responsibilities and user stories, then as content. The admin sees the month: new patients, appointments and no-shows against the previous one, overdue payments, revenue by location and service. The manager sees the clinic's day: appointments by state, who is in a call, who is waiting, who keeps missing appointments. The practitioner sees their own day: appointments, unfinished notes, patients waiting to be admitted. Each person can customise theirs.",
    },
    {
      type: "image",
      alt: "Admin, manager and practitioner dashboards",
      caption: "Three dashboards, one per role",
      width: "wide",
      source: "figma",
    },
    { type: "subheading", text: "Onboarding" },
    {
      type: "paragraph",
      text: "A new practice used to land in an empty account. I designed onboarding around one goal: configure as much of the platform as possible in as few steps as possible. The practice makes the product its own from the start, down to its brand colour across the app, and a guided setup with gamification takes it through the rest, skippable at any moment.",
    },
    {
      type: "image",
      alt: "Onboarding a new practice: brand colour applied to the app, and the guided setup with its progress",
      caption: "Onboarding: the fewest steps to a practice that looks like its own",
      width: "wide",
      source: "figma",
    },
    { type: "section", label: "09 — What it made possible", title: "Two problems that needed their own story" },
    {
      type: "paragraph",
      text: "Two parts of the platform went deeper than the rest. Fixing scheduling meant going below the interface and redesigning the domain model itself: how services, locations, staff and schedules depend on each other. And the AI the company was betting on had no product around it. Each has its own case study.",
    },
    { type: "link", href: "/work/upvio-scheduling", text: "Read the Scheduling & Resource Model case" },
    { type: "link", href: "/work/upvio-human-insights", text: "Read the Human Insights AI case" },

    { type: "section", label: "10 — Process", title: "One designer, many stakeholders" },
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

    { type: "section", label: "11 — Outcomes", title: "A platform, not a set of functions" },
    {
      type: "paragraph",
      text: "Cogsworth was a calendar with lists attached. Upvio is a platform: one design language, one navigation model and the core capabilities clinics expect. The foundations were solid enough to carry what came next, a rebuilt scheduling model and a Human Insights AI layer.",
    },
    {
      type: "paragraph",
      text: "It also gave Upvio a product it could put in front of enterprise clients and investors. The scheduling case covers that part of the story.",
    },

    { type: "section", label: "12 — What I learned", title: "Lessons from building the base" },
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
