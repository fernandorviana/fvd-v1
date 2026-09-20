/**
 * Where AI belongs around a consultation (Upvio Human Insights case).
 * A vertical timeline: the middle stage is deliberately the empty one.
 */

type Stage = { title: string; items: string[]; quiet?: boolean };

const stages: Stage[] = [
  {
    title: "Before",
    items: ["Summary of the last session", "Intake and forms already filled in"],
  },
  {
    title: "During",
    items: ["Nothing between clinician and patient", "Signals captured quietly"],
    quiet: true,
  },
  {
    title: "After",
    items: [
      "Transcript turned into a note template",
      "Referrals, reports, prescriptions",
      "Expression and emotional signals, as a report",
      "Suggested follow-up",
    ],
  },
];

const LINE_X = 28;
const TEXT_X = 56;
const TITLE_SIZE = 16;
const ITEM_SIZE = 13;
const ITEM_GAP = 20;
const STAGE_GAP = 34;

/** Lay the stages out top to bottom, so adding an item never needs new coordinates. */
function layout() {
  let y = 24;
  return stages.map((stage) => {
    const titleY = y;
    const items = stage.items.map((item, i) => ({ item, y: titleY + 22 + i * ITEM_GAP }));
    y = (items.at(-1)?.y ?? titleY) + STAGE_GAP;
    return { stage, titleY, items };
  });
}

export function AiAroundTheConsultationDiagram() {
  const rows = layout();
  const lastRow = rows.at(-1);
  const height = (lastRow?.items.at(-1)?.y ?? 0) + 24;

  return (
    <svg
      viewBox={`0 0 440 ${height}`}
      role="img"
      aria-labelledby="aac-title aac-desc"
      className="h-auto w-full max-w-[560px]"
    >
      <title id="aac-title">Where AI belongs around a consultation</title>
      <desc id="aac-desc">
        Before a consultation, AI prepares a summary of the last session and collects intake forms. During the
        consultation it stays out of the way: nothing sits between clinician and patient, and signals are captured
        quietly. After the consultation it turns the transcript into a note template, drafts referrals, reports and
        prescriptions, delivers expression and emotional signals as a report, and suggests a follow-up.
      </desc>

      <line x1={LINE_X} y1={12} x2={LINE_X} y2={height - 12} className="stroke-line" strokeWidth={1} />

      {rows.map(({ stage, titleY, items }) => (
        <g key={stage.title}>
          <circle
            cx={LINE_X}
            cy={titleY - 5}
            r={5}
            className={stage.quiet ? "fill-background stroke-accent" : "fill-muted stroke-muted"}
            strokeWidth={1.5}
          />
          <text x={TEXT_X} y={titleY} className="fill-foreground font-sans" fontSize={TITLE_SIZE}>
            {stage.title}
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
