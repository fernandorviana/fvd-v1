import type { Stat } from "@/content/case-types";
import { showPlaceholders } from "./placeholder";

export function CaseStats({ stats }: { stats: Stat[] }) {
  const visible = stats.filter((stat) => showPlaceholders || !stat.placeholder);
  if (visible.length === 0) return null;

  return (
    <ul className="mt-12 grid gap-8 border-t border-line pt-8 sm:grid-cols-3">
      {visible.map((stat) => (
        <li
          key={stat.label}
          className={stat.placeholder ? "rounded-sm border border-dashed border-line p-4" : undefined}
        >
          <p className="font-serif text-title">{stat.value}</p>
          <p className="mt-2 font-sans text-sm leading-relaxed text-muted">
            {stat.placeholder && "PLACEHOLDER — "}
            {stat.label}
          </p>
        </li>
      ))}
    </ul>
  );
}
