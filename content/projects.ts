export type Project = {
  slug: string;
  company: string;
  title: string;
  sector: "AI" | "Fintech" | "Healthcare";
  role: string;
  years: string;
  /** Uma linha — o resultado, não a tarefa. */
  summary: string;
};

/** Placeholder: conteúdo a afinar quando fecharmos a narrativa de cada caso. */
export const projects: Project[] = [
  {
    slug: "upvio-ai",
    company: "Upvio AI",
    title: "Placeholder — título do caso de estudo",
    sector: "Healthcare",
    role: "First designer · Lead Product Designer",
    years: "2023 — presente",
    summary:
      "Uma frase sobre o problema, a decisão de design e o impacto medível.",
  },
  {
    slug: "automaise",
    company: "Automaise",
    title: "Placeholder — título do caso de estudo",
    sector: "AI",
    role: "First designer · Senior Product Designer",
    years: "2021 — 2023",
    summary:
      "Uma frase sobre o problema, a decisão de design e o impacto medível.",
  },
  {
    slug: "public-mint",
    company: "Public Mint",
    title: "Placeholder — título do caso de estudo",
    sector: "Fintech",
    role: "First designer · Product Designer",
    years: "2019 — 2021",
    summary:
      "Uma frase sobre o problema, a decisão de design e o impacto medível.",
  },
  {
    slug: "unimoney",
    company: "Unimoney",
    title: "Placeholder — título do caso de estudo",
    sector: "Fintech",
    role: "First designer · Product Designer",
    years: "2017 — 2019",
    summary:
      "Uma frase sobre o problema, a decisão de design e o impacto medível.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
