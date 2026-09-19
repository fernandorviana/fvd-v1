import type { Project } from "@/content/projects";

export function CaseHeader({ project, subtitle }: { project: Project; subtitle: string }) {
  return (
    <header className="max-w-3xl">
      <p className="font-sans text-xs uppercase tracking-[0.18em] text-muted">
        {project.company} · {project.sector} · {project.years}
      </p>
      <h1 className="mt-6 font-serif text-display tracking-[-0.01em]">{project.title}</h1>
      <p className="mt-6 font-sans text-lg leading-relaxed text-muted sm:text-xl">{subtitle}</p>
    </header>
  );
}
