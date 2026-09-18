import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseBlocks } from "@/components/case/case-blocks";
import { CaseFacts } from "@/components/case/case-facts";
import { CaseHeader } from "@/components/case/case-header";
import { CaseStats } from "@/components/case/case-stats";
import { NextCase } from "@/components/case/next-case";
import { getCase } from "@/content/get-case";
import { getProject, projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const caseStudy = await getCase(slug);

  return (
    <main className="flex-1">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-28">
        <Link
          href="/#work"
          className="font-sans text-xs uppercase tracking-[0.18em] text-muted underline-offset-4 hover:underline"
        >
          ← Work
        </Link>

        <div className="mt-12">
          <CaseHeader project={project} subtitle={caseStudy?.subtitle ?? project.role} />
        </div>

        {caseStudy ? (
          <>
            <CaseFacts facts={caseStudy.facts} />
            <CaseStats stats={caseStudy.stats} />
            <div className="mt-16">
              <CaseBlocks blocks={caseStudy.blocks} />
            </div>
          </>
        ) : (
          <div className="mt-16 max-w-3xl space-y-6 border-t border-line pt-10 font-sans text-lg leading-relaxed text-muted">
            <p>
              Case study placeholder. Likely structure: context and
              constraints, what was broken, design decisions, and outcome.
            </p>
            <p>
              Space for images, before/afters, and process artifacts — to be
              defined once we settle on the format for each case.
            </p>
          </div>
        )}

        <NextCase slug={slug} />
      </div>
    </main>
  );
}
