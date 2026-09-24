/**
 * The platform at a glance (Upvio platform case).
 * Product areas grouped by the journey they serve, over the two layers that run under all of them.
 * A filled marker means designed from zero; an open one, redesigned from what Cogsworth had.
 */

import Link from "next/link";
import { areas, journeys, layers, type AreaId } from "./platform-areas";

function Marker({ redesigned }: { redesigned?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`mt-[0.5em] size-2 shrink-0 rounded-full border-[1.5px] ${
        redesigned ? "border-muted bg-background" : "border-accent bg-accent"
      }`}
    />
  );
}

function AreaText({ id }: { id: AreaId }) {
  const area = areas[id];
  return (
    <div>
      <p className="text-base text-foreground">
        {area.name}
        {area.redesigned && <span className="sr-only"> (redesigned)</span>}
      </p>
      <p className="text-sm text-muted">{area.does}</p>
      {area.href && (
        <Link href={area.href} className="text-sm text-accent underline-offset-4 hover:underline">
          Its own case <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  );
}

function AreaItem({ id }: { id: AreaId }) {
  const area = areas[id];
  return (
    <li className="flex gap-3">
      <Marker redesigned={area.redesigned} />
      <AreaText id={id} />
    </li>
  );
}

export function PlatformMapDiagram() {
  return (
    <div className="font-sans">
      <p className="flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.12em] text-muted">
        <span className="flex items-center gap-2">
          <Marker /> Designed from zero
        </span>
        <span className="flex items-center gap-2">
          <Marker redesigned /> Redesigned
        </span>
      </p>

      <div className="mt-6 grid gap-10 md:grid-cols-3 md:gap-8">
        {journeys.map((journey) => (
          <section key={journey.title} className="border-t border-line pt-4">
            <h3 className="font-serif text-xl">{journey.title}</h3>
            <p className="mt-1 text-sm text-muted md:min-h-[2lh]">{journey.who}</p>
            <ul className="mt-5 space-y-4">
              {journey.areas.map((id) => (
                <AreaItem key={id} id={id} />
              ))}
            </ul>
          </section>
        ))}
      </div>

      <ul className="mt-10 space-y-3">
        {layers.map((id) => (
          <li key={id} className="flex gap-3 rounded-sm border border-line px-5 py-4">
            <Marker />
            <AreaText id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
}
