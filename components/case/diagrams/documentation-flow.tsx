/**
 * From consultation to signed note (Upvio Human Insights case).
 * A vertical sequence of steps, each tagged with who acts: the clinician's steps carry the accent,
 * because they are where control sits.
 */

type Actor = "Patient" | "Clinician" | "AI";
type Step = { title: string; actor: Actor; items: string[] };

const steps: Step[] = [
  { title: "Consent", actor: "Patient", items: ["Agrees to the session being recorded"] },
  {
    title: "Recording",
    actor: "Clinician",
    items: ["Their own notes alongside, if they want them:", "typed, dictated or in a template"],
  },
  { title: "Transcript", actor: "AI", items: ["Generated after the appointment, not during it"] },
  { title: "Draft note", actor: "AI", items: ["Transcript and notes, in the template", "the clinician chose"] },
  {
    title: "Review and sign-off",
    actor: "Clinician",
    items: ["Edits and accepts the draft", "Nothing reaches the record without it"],
  },
  {
    title: "Patient summary",
    actor: "AI",
    items: ["Plain-language summary and treatment plan,", "shared in the portal or as a PDF"],
  },
];

const WIDTH = 440;
const LINE_X = 28;
const TEXT_X = 56;
const TAG_X = WIDTH - 16;
const TITLE_SIZE = 16;
const ITEM_SIZE = 13;
const TAG_SIZE = 11;
const ITEM_GAP = 20;
const STEP_GAP = 34;

const markerClass: Record<Actor, string> = {
  Clinician: "fill-accent stroke-accent",
  AI: "fill-background stroke-muted",
  Patient: "fill-muted stroke-muted",
};

/** Lay the steps out top to bottom, so adding a line never needs new coordinates. */
function layout() {
  let y = 24;
  return steps.map((step) => {
    const titleY = y;
    const items = step.items.map((item, i) => ({ item, y: titleY + 22 + i * ITEM_GAP }));
    y = (items.at(-1)?.y ?? titleY) + STEP_GAP;
    return { step, titleY, items };
  });
}

export function DocumentationFlowDiagram() {
  const rows = layout();
  const height = (rows.at(-1)?.items.at(-1)?.y ?? 0) + 24;
  const firstY = rows[0].titleY - 5;
  const lastY = (rows.at(-1)?.titleY ?? 0) - 5;

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${height}`}
      role="img"
      aria-labelledby="docf-title docf-desc"
      className="h-auto w-full max-w-[560px]"
    >
      <title id="docf-title">From consultation to signed note</title>
      <desc id="docf-desc">
        Six steps. The patient consents to the session being recorded. The clinician records, taking their own
        notes alongside if they want to, typed, dictated or in a template. After the appointment, AI generates a
        transcript and drafts the note in the template the clinician chose. The clinician edits and accepts the
        draft; nothing reaches the record without that sign-off. AI then prepares a plain-language summary and
        treatment plan, shared with the patient in the portal or as a PDF.
      </desc>

      <line x1={LINE_X} y1={firstY} x2={LINE_X} y2={lastY} className="stroke-line" strokeWidth={1} />

      {rows.map(({ step, titleY, items }) => (
        <g key={step.title}>
          <circle cx={LINE_X} cy={titleY - 5} r={5} className={markerClass[step.actor]} strokeWidth={1.5} />
          <text x={TEXT_X} y={titleY} className="fill-foreground font-sans" fontSize={TITLE_SIZE}>
            {step.title}
          </text>
          <text
            x={TAG_X}
            y={titleY}
            textAnchor="end"
            letterSpacing="0.12em"
            className={step.actor === "Clinician" ? "fill-accent font-sans" : "fill-muted font-sans"}
            fontSize={TAG_SIZE}
          >
            {step.actor.toUpperCase()}
          </text>
          {items.map(({ item, y }) => (
            <text key={item} x={TEXT_X} y={y} className="fill-muted font-sans" fontSize={ITEM_SIZE}>
              {item}
            </text>
          ))}
        </g>
      ))}
    </svg>
  );
}
