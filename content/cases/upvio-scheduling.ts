import type { CaseStudy } from "../case-types";

export const upvioScheduling: CaseStudy = {
  slug: "upvio-scheduling",
  subtitle:
    "Scheduling at Upvio kept breaking because the data model didn't match how clinics work. I designed a new domain model and took it to engineering. The guided configuration built on top of it brought configuration errors close to zero.",
  facts: {
    role: "Founding Designer, Head of Design",
    timeline: "Jan 2023 — Mar 2025",
    scope: "Domain modelling, configuration UX, booking flow",
    team: "Solo designer, 3–5 engineers, CTO",
  },
  stats: [
    { value: "≈0", label: "Configuration errors after the new model shipped" },
    { value: "[X]%", label: "Faster setup of a new service", placeholder: true },
    { value: "[X]%", label: "Less support time spent on configuration", placeholder: true },
  ],
  blocks: [
    { type: "section", label: "01 — Context", title: "Scheduling without a model" },
    {
      type: "paragraph",
      text: "Scheduling sits at the heart of a clinic: which service, at which location, with which practitioner, at what time. When I joined Upvio, scheduling was rudimentary, and practices lived on workarounds to get the bookings they needed. I added features and improved the UX, but underneath there was no model at all. You could create a booking with just a time and a practitioner, or with just a client.",
    },
    {
      type: "paragraph",
      text: "Services, locations, staff and schedules were each configured on their own, with nothing checking that they fitted together.",
    },

    { type: "section", label: "02 — Problem", title: "Every entity on its own" },
    { type: "paragraph", text: "The result was a steady stream of broken setups:" },
    {
      type: "list",
      items: [
        "Services with no location, which existed in the system but could never be booked",
        "Staff assigned to services at locations where they didn't work",
        "Schedules with no qualified staff available, time slots that could never be filled",
        "Bookings that failed at the last moment, frustrating patients and the support team",
      ],
    },
    {
      type: "paragraph",
      text: "How much a clinic depends on this became clear at the front desk of the practice I studied. A booking there is a combination of resources that all have to line up: one of fifty-odd services, a practitioner who is qualified and available, an office room. The product had no idea those relationships existed.",
    },
    {
      type: "paragraph",
      text: "The root cause sat under every screen: the data model didn't reflect the real rules of the business, so the whole burden of keeping things consistent fell on the people configuring the product, and on support when they couldn't.",
    },

    { type: "section", label: "03 — The decision", title: "The fix was below the interface" },
    {
      type: "paragraph",
      text: "The team's instinct was to fix scheduling settings with more UI, and I tried every version of that too. None of it made a real difference, because the problem was relational: the product had no model of how services, locations, staff and schedules depend on each other.",
    },
    {
      type: "callout",
      text: "No layout can fix a relational problem. The fix was a model that makes invalid combinations impossible to express.",
    },
    {
      type: "paragraph",
      text: "I conceived that model and made the case for it to the CTO and the engineers. Convincing them that another round of screens wouldn't solve it was the hardest part of the work. Along the way I benchmarked clinical practice software such as Jane, SimplePractice, Carepatron and PowerDiary, to see how others structured the same entities.",
    },

    { type: "section", label: "04 — The model", title: "Location as the anchor" },
    {
      type: "paragraph",
      text: "I designed a hierarchical multi-resource scheduling model. Location is the aggregate root, the one entity everything else hangs from: every service, staff member and schedule is configured in the context of a location, which gives the system one clear boundary for consistency.",
    },
    {
      type: "diagram",
      id: "service-location-staff",
      caption: "The Service–Location–Staff dependency graph: a booking is valid only when every relationship holds",
    },
    {
      type: "paragraph",
      text: "Services exist only at specific locations, staff work only at specific locations, and schedules belong to a location and can be narrowed by each person's own availability.",
    },

    { type: "section", label: "05 — Invariants", title: "What the system refuses" },
    {
      type: "paragraph",
      text: "The rules live in the domain, not only in the interface. That means invalid data can't be saved at all, whether it comes through the UI, the API or an integration. Three checks do the work:",
    },
    {
      type: "list",
      items: [
        "A service can be booked at a location only if it's offered there, has qualified staff there, and has a schedule long enough for it",
        "A staff member can be assigned to a booking only if they work at that location, are qualified for that service, and are available at that time",
        "A schedule is valid only if it belongs to an existing location and doesn't overlap existing bookings",
      ],
    },

    { type: "section", label: "06 — Guided configuration", title: "Only valid options" },
    {
      type: "paragraph",
      text: "With the model in place, the interface could guide instead of warn. Each part of the configuration follows the order of the model, starting from the location, and every choice narrows the next. The rules are checked before anything is saved.",
    },
    { type: "subheading", text: "Locations" },
    {
      type: "paragraph",
      text: "Setup starts where the model does. A location holds its own schedule, the services it offers and the people who work there, so a clinic with several sites configures each one in its own context instead of in lists that never meet.",
    },
    {
      type: "image",
      alt: "Location settings: its schedule, the services it offers and the staff who work there",
      caption: "A location, with everything that depends on it",
      width: "wide",
      source: "figma",
    },
    { type: "subheading", text: "Services" },
    {
      type: "paragraph",
      text: "When someone creates a service and picks its locations, the system filters the staff who work there and suggests schedules. The user confirms or adjusts. A service with no location, or with nobody qualified to deliver it, can no longer be created.",
    },
    {
      type: "image",
      alt: "Creating a service: locations, then filtered staff and suggested schedules",
      caption: "Creating a service: each choice narrows the next",
      width: "wide",
      source: "figma",
    },
    { type: "subheading", text: "Staff and availability" },
    {
      type: "paragraph",
      text: "A staff member is tied to the locations they work at and the services they are qualified for. Their own availability, set as time slots, narrows the location's schedule rather than living beside it, which matters in a practice where external practitioners update their availability every month.",
    },
    {
      type: "image",
      alt: "Staff member's locations, services and availability over the location schedule",
      caption: "Staff availability, set inside the location's schedule",
      width: "text",
      source: "figma",
    },
    { type: "subheading", text: "Booking" },
    {
      type: "paragraph",
      text: "Booking works the same way. Pick a service, and only the locations that offer it appear. Pick a location, and only its available schedules and qualified staff remain. A staff member is then assigned automatically, or chosen from the valid ones. Showing only valid options did more for configuration errors than any validation message could.",
    },
    {
      type: "image",
      alt: "Booking flow: service, location, time, staff",
      caption: "Booking: service → location → time → staff",
      width: "wide",
      source: "figma",
    },

    { type: "section", label: "07 — Outcomes", title: "Bookings that are always valid" },
    {
      type: "paragraph",
      text: "Configuration errors dropped close to zero, and the time support spent untangling setups fell substantially. Setting up a new service became faster, and users could trust that a booking, once created, was valid.",
    },
    {
      type: "paragraph",
      text: "The model also made Upvio credible for larger organisations. It helped attract enterprise clients, including one serving millions of end users, as well as new investors.",
    },

    { type: "section", label: "08 — What I learned", title: "Lessons from going below the UI" },
    {
      type: "list",
      items: [
        "Some UX problems live below the interface. Settings kept getting redesigned while the real issue was the domain. Recognising that, and bringing the team with me when their instinct was more UI, mattered as much as the model itself.",
        "Model first, then design screens. With a model in place, the screens had rules to express instead of rules to invent.",
        "Invariants belong in the domain, not only the UI. Once the rules lived in the model, neither the API nor integrations could create broken data.",
        "Document the model for whoever comes next. Engineers joined and left as the team grew, and a written model meant each new person could build on the rules instead of rediscovering them.",
      ],
    },
  ],
};
