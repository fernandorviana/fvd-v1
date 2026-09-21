import Link from "next/link";
import { Section } from "@/components/section";
import { visibleProjects } from "@/content/projects";

export function FeaturedWork() {
  return (
    <Section id="work" label="01 — Work">
      <ul className="divide-y divide-line border-y border-line">
        {visibleProjects.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/work/${project.slug}`}
              className="group block py-8 transition-colors hover:bg-black/[0.02]"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <p className="font-sans text-xs uppercase tracking-[0.18em] text-muted">
                  {project.company}
                  {project.track && ` · ${project.track}`}
                </p>
                <p className="font-sans text-xs uppercase tracking-[0.18em] text-muted">
                  {project.sector} · {project.years}
                </p>
              </div>

              <h3 className="mt-3 font-serif text-title">{project.title}</h3>

              <p className="mt-3 max-w-2xl font-sans text-base leading-relaxed text-muted">
                {project.summary}
              </p>

              <p className="mt-4 font-sans text-sm text-accent underline-offset-4 group-hover:underline">
                Read the case
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
