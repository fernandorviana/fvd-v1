import type { CaseStudy } from "@/content/case-types";

const labels = { role: "Role", timeline: "Timeline", scope: "Scope", team: "Team" } as const;

export function CaseFacts({ facts }: { facts: CaseStudy["facts"] }) {
  return (
    <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 md:grid-cols-4">
      {(Object.keys(labels) as (keyof typeof labels)[]).map((key) => (
        <div key={key}>
          <dt className="font-sans text-xs uppercase tracking-[0.18em] text-muted">{labels[key]}</dt>
          <dd className="mt-2 font-sans text-sm leading-relaxed">{facts[key]}</dd>
        </div>
      ))}
    </dl>
  );
}
