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
      "As the first designer, I built Upvio's design foundations and redesigned the core of a multi-clinic healthcare platform.",
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
      "I redesigned how services, locations, staff and schedules depend on each other, bringing configuration errors close to zero.",
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
      "I turned multimodal AI without a product into a remote check-up and an AI layer built around what clinicians wanted help with.",
  },
  {
    slug: "automaise",
    company: "Automaise",
    title: "Placeholder — case study title",
    sector: "AI",
    role: "First designer · Senior Product Designer",
    years: "2021 — 2023",
    summary:
      "One line on the problem, the design decision, and the measurable impact.",
  },
  {
    slug: "public-mint",
    company: "Public Mint",
    title: "Placeholder — case study title",
    sector: "Fintech",
    role: "First designer · Product Designer",
    years: "2019 — 2021",
    summary:
      "One line on the problem, the design decision, and the measurable impact.",
  },
  {
    slug: "unimoney",
    company: "Unimoney",
    title: "Placeholder — case study title",
    sector: "Fintech",
    role: "First designer · Product Designer",
    years: "2017 — 2019",
    summary:
      "One line on the problem, the design decision, and the measurable impact.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
