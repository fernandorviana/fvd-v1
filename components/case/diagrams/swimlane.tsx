/**
 * A swimlane shared by the case diagrams: stages run top to bottom, one lane per persona, and a step can carry
 * a tag naming the product area it happens in. On small screens the lanes collapse into a list under each
 * stage, named by persona.
 */

export type SwimlaneStep<Lane extends string> = {
  lane: Lane;
  text: string;
  tag?: string;
  /** Set back visually: work that happens without asking for attention. */
  quiet?: boolean;
};
export type SwimlaneStage<Lane extends string> = { title: string; steps: SwimlaneStep<Lane>[] };

/** Static class names per lane count, so Tailwind can see them. */
const gridByLanes: Record<number, string> = {
  3: "md:grid md:grid-cols-[6.5rem_repeat(3,minmax(0,1fr))] md:gap-x-5",
  4: "md:grid md:grid-cols-[6.5rem_repeat(4,minmax(0,1fr))] md:gap-x-5",
};
/** Each lane keeps its column on wide screens even when the lanes before it are empty in a stage. */
const laneColumn = ["md:col-start-2", "md:col-start-3", "md:col-start-4", "md:col-start-5"];

function StepItem<Lane extends string>({ step }: { step: SwimlaneStep<Lane> }) {
  return (
    <li>
      <span className={`block text-sm ${step.quiet ? "text-muted" : "text-foreground"}`}>{step.text}</span>
      {step.tag && (
        <span className="mt-1 block text-[11px] uppercase tracking-[0.12em] text-accent">{step.tag}</span>
      )}
    </li>
  );
}

export function Swimlane<Lane extends string>({ lanes, stages }: { lanes: Lane[]; stages: SwimlaneStage<Lane>[] }) {
  const grid = gridByLanes[lanes.length];

  return (
    <div className="font-sans">
      <div aria-hidden="true" className={`hidden pb-3 ${grid}`}>
        <span />
        {lanes.map((lane) => (
          <span key={lane} className="text-xs uppercase tracking-[0.12em] text-muted">
            {lane}
          </span>
        ))}
      </div>

      <ol>
        {stages.map((stage) => (
          <li key={stage.title} className={`space-y-4 border-t border-line py-5 md:space-y-0 ${grid}`}>
            <h3 className="font-serif text-lg">{stage.title}</h3>
            {lanes.map((lane, i) => {
              const steps = stage.steps.filter((step) => step.lane === lane);
              if (!steps.length) return null;
              return (
                <div key={lane} className={laneColumn[i]}>
                  <p className="mb-1 text-[11px] uppercase tracking-[0.12em] text-muted md:sr-only">{lane}</p>
                  <ul className="space-y-4">
                    {steps.map((step) => (
                      <StepItem key={step.text} step={step} />
                    ))}
                  </ul>
                </div>
              );
            })}
          </li>
        ))}
      </ol>
    </div>
  );
}
