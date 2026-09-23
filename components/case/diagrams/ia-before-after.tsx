/**
 * Information architecture before and after (Upvio platform case).
 * Two stacked panels: the small scheduling tool it was, and the platform it became, shown as the product's
 * real sidebar navigation with what lives under each entry. The patient portal is a separate app.
 */

type NavItem = { label: string; holds: string };

const beforeColumns: string[][] = [
  ["Calendar", "Client list", "Settings"],
  ["Practitioner list", "Custom forms"],
];

/** The sidebar, top to bottom. Settings sits apart at the bottom, as it does in the product. */
const afterNav: NavItem[] = [
  { label: "Home", holds: "Dashboards per role" },
  { label: "Calendar", holds: "Scheduling, availability, check-in" },
  { label: "Clients", holds: "Records, notes, forms, Vitals AI" },
  { label: "Video & Chat", holds: "Telehealth, waiting room, messaging" },
  { label: "Forms", holds: "The form builder" },
  { label: "Staff", holds: "People, roles and teams" },
  { label: "Services", holds: "What the practice offers" },
  { label: "Locations", holds: "The anchor of scheduling" },
];
const afterSettings: NavItem = { label: "Settings", holds: "Practice configuration" };
const portal: NavItem = { label: "Patient portal", holds: "Appointments, booking, shared notes" };

const WIDTH = 440;
const MARGIN = 12;
const COLUMN_X = [28, 232];
const HOLDS_X = 148;
const TITLE_SIZE = 16;
const ITEM_SIZE = 13;
const ITEM_GAP = 20;
const SETTINGS_GAP = 30;

function NavRow({ item, y }: { item: NavItem; y: number }) {
  return (
    <>
      <text x={28} y={y} className="fill-foreground font-sans" fontSize={ITEM_SIZE}>
        {item.label}
      </text>
      <text x={HOLDS_X} y={y} className="fill-muted font-sans" fontSize={ITEM_SIZE}>
        {item.holds}
      </text>
    </>
  );
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
  const beforeRows = Math.max(...beforeColumns.map((column) => column.length));
  const beforeHeight = beforeItemsY + (beforeRows - 1) * ITEM_GAP + 18 - beforeTop;
  const beforeBottom = beforeTop + beforeHeight;

  const afterTop = beforeBottom + 30;
  const navTop = afterTop + 72;
  const settingsY = navTop + (afterNav.length - 1) * ITEM_GAP + SETTINGS_GAP;
  const afterBottom = settingsY + 18;

  const portalTop = afterBottom + 16;
  const portalBottom = portalTop + 88;
  const height = portalBottom + 8;

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${height}`}
      role="img"
      aria-labelledby="iaba-title iaba-desc"
      className="h-auto w-full max-w-[560px]"
    >
      <title id="iaba-title">Information architecture before and after</title>
      <desc id="iaba-desc">
        Before: Cogsworth, a scheduling tool made of a calendar, a client list, a practitioner list, custom forms and settings.
        After: Upvio, shown as its sidebar navigation. Home holds a dashboard per role; Calendar, scheduling, staff
        availability and check-in; Clients, records, notes, forms and Vitals AI; Video and Chat, telehealth, the waiting room and
        messaging; Forms, the form builder; Staff, people, roles and teams; Services, what the practice offers;
        Locations, the anchor of scheduling; and Settings, the practice configuration. Patients use a separate
        patient portal for appointments, booking and shared notes.
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
      {afterNav.map((item, i) => (
        <NavRow key={item.label} item={item} y={navTop + i * ITEM_GAP} />
      ))}
      <NavRow item={afterSettings} y={settingsY} />

      <Panel y={portalTop} height={portalBottom - portalTop} />
      <Heading y={portalTop + 26} label={portal.label} note="a separate app for patients" />
      <text x={28} y={portalTop + 72} className="fill-muted font-sans" fontSize={ITEM_SIZE}>
        {portal.holds}
      </text>
    </svg>
  );
}
