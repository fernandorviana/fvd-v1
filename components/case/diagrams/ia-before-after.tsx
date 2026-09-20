/**
 * Information architecture before and after (Upvio platform case).
 * Two stacked panels: the small scheduling tool it was, the platform it became.
 * Groups are laid out in two columns so the "after" panel stays short enough to read on a phone.
 */

type Group = { title: string; items: string[] };

const beforeColumns: string[][] = [
  ["Calendar", "Client list"],
  ["Practitioner list", "Custom forms"],
];

const afterColumns: Group[][] = [
  [
    { title: "Clinical work", items: ["Schedule", "Patient records", "Clinical notes", "Telehealth"] },
    { title: "Organisation", items: ["Locations & services", "Teams & roles", "Dashboards"] },
  ],
  [
    { title: "Patient-facing", items: ["Patient portal", "Custom forms", "Secure messaging"] },
    { title: "Intelligence", items: ["Human Insights AI"] },
  ],
];

const WIDTH = 440;
const MARGIN = 12;
const COLUMN_X = [28, 232];
const TITLE_SIZE = 16;
const ITEM_SIZE = 13;
const ITEM_GAP = 20;
const GROUP_GAP = 30;

/** Stack a column of groups from a starting baseline; returns the rows and the lowest baseline used. */
function stack(groups: Group[], startY: number) {
  let y = startY;
  const rows = groups.map((group) => {
    const titleY = y;
    const items = group.items.map((item, i) => ({ item, y: titleY + ITEM_GAP + i * ITEM_GAP }));
    y = (items.at(-1)?.y ?? titleY) + GROUP_GAP;
    return { group, titleY, items };
  });
  return { rows, bottom: y - GROUP_GAP };
}

function Panel({ y, height, accent }: { y: number; height: number; accent?: boolean }) {
  return (
    <rect
      x={MARGIN}
      y={y}
      width={WIDTH - MARGIN * 2}
      height={height}
      rx={4}
      className={accent ? "fill-background stroke-accent" : "fill-background stroke-muted"}
      strokeWidth={accent ? 1.5 : 1}
    />
  );
}

function Heading({ y, label, note }: { y: number; label: string; note: string }) {
  return (
    <>
      <text x={28} y={y} className="fill-foreground font-sans" fontSize={TITLE_SIZE}>
        {label}
      </text>
      <text x={28} y={y + 18} className="fill-muted font-sans" fontSize={ITEM_SIZE}>
        {note}
      </text>
    </>
  );
}

export function IaBeforeAfterDiagram() {
  const beforeTop = 8;
  const beforeItemsY = beforeTop + 72;
  const beforeHeight = beforeItemsY + ITEM_GAP + 18 - beforeTop;
  const beforeBottom = beforeTop + beforeHeight;

  const afterTop = beforeBottom + 30;
  const groupsTop = afterTop + 70;
  const columns = afterColumns.map((groups) => stack(groups, groupsTop));
  const afterBottom = Math.max(...columns.map((column) => column.bottom)) + 18;
  const height = afterBottom + 8;

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${height}`}
      role="img"
      aria-labelledby="iaba-title iaba-desc"
      className="h-auto w-full max-w-[560px]"
    >
      <title id="iaba-title">Information architecture before and after</title>
      <desc id="iaba-desc">
        Before: Cogsworth, a scheduling tool made of a calendar, a client list, a practitioner list and custom forms.
        After: Upvio, a practice platform grouped into clinical work (schedule, patient records, clinical notes,
        telehealth), patient-facing surfaces (patient portal, custom forms, secure messaging), organisation (locations
        and services, teams and roles, dashboards) and a Human Insights AI layer.
      </desc>

      <defs>
        <marker
          id="iaba-arrow"
          viewBox="0 0 8 8"
          refX={7}
          refY={4}
          markerWidth={8}
          markerHeight={8}
          orient="auto-start-reverse"
        >
          <path d="M0,0 L8,4 L0,8 z" className="fill-muted" />
        </marker>
      </defs>

      <Panel y={beforeTop} height={beforeHeight} />
      <Heading y={beforeTop + 26} label="Cogsworth" note="a scheduling tool" />
      {beforeColumns.map((column, i) =>
        column.map((item, j) => (
          <text
            key={item}
            x={COLUMN_X[i]}
            y={beforeItemsY + j * ITEM_GAP}
            className="fill-muted font-sans"
            fontSize={ITEM_SIZE}
          >
            {item}
          </text>
        )),
      )}

      <line
        x1={WIDTH / 2}
        y1={beforeBottom + 6}
        x2={WIDTH / 2}
        y2={afterTop - 6}
        className="stroke-muted"
        strokeWidth={1}
        markerEnd="url(#iaba-arrow)"
      />

      <Panel y={afterTop} height={afterBottom - afterTop} accent />
      <Heading y={afterTop + 26} label="Upvio" note="a platform for running a practice" />
      {columns.map((column, i) => (
        <g key={COLUMN_X[i]}>
          {column.rows.map(({ group, titleY, items }) => (
            <g key={group.title}>
              <text x={COLUMN_X[i]} y={titleY} className="fill-foreground font-sans" fontSize={ITEM_SIZE}>
                {group.title}
              </text>
              {items.map(({ item, y }) => (
                <text key={item} x={COLUMN_X[i]} y={y} className="fill-muted font-sans" fontSize={ITEM_SIZE}>
                  {item}
                </text>
              ))}
            </g>
          ))}
        </g>
      ))}
    </svg>
  );
}
