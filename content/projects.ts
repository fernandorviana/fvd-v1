export type Project = {
  slug: string;
  company: string;
  /** Distinguishes several cases from the same company, e.g. "Platform & Foundations". */
  track?: string;
  title: string;
  sector: "AI" | "Fintech" | "Healthcare";
  role: string;
  years: string;
  /** One line — the outcome, not the task. */
  summary: string;
  /** No case written yet: listed while developing, never in production. */
  placeholder?: boolean;
};

/** Placeholder: content to refine once each case's narrative is locked in. */
export const projects: Project[] = [
  {
    slug: "upvio-platform",
    company: "Upvio AI",
    track: "Platform & Foundations",
    title: "Turning a capable engine into a coherent clinical platform",
    sector: "Healthcare",
    role: "Founding Designer · Head of Design",
    years: "Jan 2023 — Mar 2025",
    summary:
      "A scheduling tool turned into a clinical platform: one design system and eight product areas, designed solo.",
  },
  {
    slug: "upvio-scheduling",
    company: "Upvio AI",
    track: "Scheduling & Resource Model",
    title: "A scheduling model that makes invalid bookings impossible",
    sector: "Healthcare",
    role: "Founding Designer · Head of Design",
    years: "Jan 2023 — Mar 2025",
    summary:
      "A domain model for services, locations, staff and schedules that brought configuration errors close to zero.",
  },
  {
    slug: "upvio-human-insights",
    company: "Upvio AI",
    track: "Human Insights AI",
    title: "Vitals at a distance, paperwork off the desk",
    sector: "Healthcare",
    role: "Founding Designer · Head of Design",
    years: "Jan 2023 — Mar 2025",
    summary:
      "Multimodal AI with no product around it, turned into a remote check-up and an AI layer built around what clinicians wanted help with.",
  },
  {
    slug: "automaise",
    company: "Automaise",
    title: "Placeholder — case study title",
    sector: "AI",
    role: "First designer · Senior Product Designer",
    years: "2018 — 2019",
    summary:
      "One line on the problem, the design decision, and the measurable impact.",
    placeholder: true,
  },
  {
    slug: "public-mint",
    company: "Public Mint",
    title: "Placeholder — case study title",
    sector: "Fintech",
    role: "First designer · Senior Product Designer",
    years: "2019 — 2022",
    summary:
      "One line on the problem, the design decision, and the measurable impact.",
    placeholder: true,
  },
  {
    slug: "unimoney",
    company: "Unimoney",
    title: "Placeholder — case study title",
    sector: "Fintech",
    role: "First designer · Lead Product Designer",
    years: "2021 — 2022",
    summary:
      "One line on the problem, the design decision, and the measurable impact.",
    placeholder: true,
  },
];

/** What the site lists and serves: placeholders drop out in production. */
export const visibleProjects = projects.filter(
  (project) => !project.placeholder || process.env.NODE_ENV !== "production",
);

export function getProject(slug: string) {
  return visibleProjects.find((project) => project.slug === slug);
}
