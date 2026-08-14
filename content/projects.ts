export type Project = {
  slug: string;
  company: string;
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
    slug: "upvio-ai",
    company: "Upvio AI",
    title: "Placeholder — case study title",
    sector: "Healthcare",
    role: "First designer · Lead Product Designer",
    years: "2023 — present",
    summary:
      "One line on the problem, the design decision, and the measurable impact.",
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
