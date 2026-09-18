import Link from "next/link";
import { projects } from "@/content/projects";

export function NextCase({ slug }: { slug: string }) {
  const index = projects.findIndex((project) => project.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <Link href={`/work/${next.slug}`} className="group block border-t border-line py-12">
      <p className="font-sans text-xs uppercase tracking-[0.18em] text-muted">Next case</p>
      <p className="mt-4 font-serif text-title group-hover:underline underline-offset-4">
        {next.company}
        {next.track && ` — ${next.track}`} <span aria-hidden="true">→</span>
      </p>
    </Link>
  );
}
