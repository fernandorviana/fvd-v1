/**
 * The Upvio platform's product areas, shared by the platform map and the appointment diagram so an area
 * is named the same way in both.
 */

export type Area = {
  name: string;
  /** Name used where space is short, as a tag on a step. */
  short?: string;
  does: string;
  /** Existed in Cogsworth and was redesigned. Everything else was designed from zero. */
  redesigned?: boolean;
  /** Areas deep enough to have a case of their own. */
  href?: string;
};

const areaList = {
  notes: { name: "Clinical notes", does: "Templates per specialty, privacy per field, dictation" },
  records: { name: "Patient records", does: "One history per patient, across every practitioner" },
  telehealth: { name: "Telehealth", does: "Video consultations with the record at hand" },
  waitingRoom: { name: "Waiting room", does: "Patients wait, practitioners admit them" },
  portal: { name: "Patient portal", does: "Appointments, booking, shared notes and documents" },
  forms: { name: "Custom forms", does: "Intake and follow-up, filed in the record", redesigned: true },
  messaging: { name: "Secure messaging", does: "Staff and patients, inside the platform" },
  scheduling: {
    name: "Scheduling",
    does: "Services, locations, staff and schedules",
    redesigned: true,
    href: "/work/upvio-scheduling",
  },
  billing: {
    name: "Check-in, billing and invoicing",
    short: "Billing",
    does: "Attendance, payment and invoice on every appointment",
  },
  roles: { name: "Roles and teams", does: "Who sees and does what, per location or specialty" },
  dashboards: { name: "Dashboards", does: "One per role, customisable by each person" },
  onboarding: { name: "Onboarding", does: "The fewest steps to a practice set up as its own" },
  ai: {
    name: "Human Insights AI",
    does: "Vitals and Empathic AI, in the consultation and the record",
    href: "/work/upvio-human-insights",
  },
  designSystem: { name: "Australis design system", does: "Under every area, responsive down to mobile" },
} satisfies Record<string, Area>;

export type AreaId = keyof typeof areaList;
export const areas: Record<AreaId, Area> = areaList;

export type Journey = { title: string; who: string; areas: AreaId[] };

export const journeys: Journey[] = [
  { title: "Clinician workflow", who: "For the practitioner", areas: ["notes", "records", "telehealth", "waitingRoom"] },
  { title: "Patient engagement", who: "For the patient", areas: ["portal", "forms", "messaging"] },
  {
    title: "Running the practice",
    who: "For the front desk, the manager and the owner or admin",
    areas: ["scheduling", "billing", "roles", "dashboards", "onboarding"],
  },
];

/** Layers that run under all three journeys, bottom last. */
export const layers: AreaId[] = ["ai", "designSystem"];
