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
          href="/#trabalho"
          className="font-sans text-xs uppercase tracking-[0.18em] text-muted underline-offset-4 hover:underline"
        >
          ← Trabalho
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
            Placeholder do caso de estudo. Estrutura provável: contexto e
            constrangimentos, o que estava partido, decisões de design, e
            resultado.
          </p>
          <p>
            Espaço para imagens, antes/depois e artefactos de processo — a
            definir quando escolhermos o formato de cada caso.
          </p>
        </div>
      </div>
    </main>
  );
}
