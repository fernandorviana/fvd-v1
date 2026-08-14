import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <main className="flex-1">
      <div className="mx-auto w-full max-w-3xl px-6 py-20 sm:py-28">
        <Link
          href="/#work"
          className="font-sans text-xs uppercase tracking-[0.18em] text-muted underline-offset-4 hover:underline"
        >
          ← Work
        </Link>

        <p className="mt-12 font-sans text-xs uppercase tracking-[0.18em] text-muted">
          {project.company} · {project.sector} · {project.years}
        </p>

        <h1 className="mt-6 font-serif text-display tracking-[-0.01em]">
          {project.title}
        </h1>

        <p className="mt-6 font-sans text-lg leading-relaxed text-muted">
          {project.role}
        </p>

        <div className="mt-16 space-y-6 border-t border-line pt-10 font-sans text-lg leading-relaxed text-muted">
          <p>
            Case study placeholder. Likely structure: context and
            constraints, what was broken, design decisions, and outcome.
          </p>
          <p>
            Space for images, before/afters, and process artifacts — to be
            defined once we settle on the format for each case.
          </p>
        </div>
      </div>
    </main>
  );
}
