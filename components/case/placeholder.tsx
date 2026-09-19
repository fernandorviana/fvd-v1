/** Missing images, diagrams and metrics show while developing, never in production. */
export const showPlaceholders = process.env.NODE_ENV !== "production";

export function Placeholder({ kind, label }: { kind: string; label: string }) {
  return (
    <div className="flex min-h-40 items-center justify-center rounded-sm border border-dashed border-line px-6 py-10 text-center font-sans text-xs uppercase tracking-[0.18em] text-muted">
      {kind} — {label}
    </div>
  );
}
