/**
 * Service–Location–Staff dependency graph (Upvio scheduling case).
 * Vertical layout so it stays legible from phone width up; colours come from theme tokens.
 */

type Box = { x: number; y: number; w: number; h: number; label: string; note?: string; root?: boolean };

const location: Box = { x: 150, y: 20, w: 140, h: 60, label: "Location", note: "aggregate root", root: true };
const service: Box = { x: 12, y: 190, w: 96, h: 52, label: "Service" };
const staff: Box = { x: 172, y: 190, w: 96, h: 52, label: "Staff" };
const schedule: Box = { x: 332, y: 190, w: 96, h: 52, label: "Schedule" };
const booking: Box = { x: 150, y: 350, w: 140, h: 60, label: "Booking", note: "every rule must hold", root: true };

const top = (b: Box, dx = 0) => ({ x: b.x + b.w / 2 + dx, y: b.y });
const bottom = (b: Box) => ({ x: b.x + b.w / 2, y: b.y + b.h });

function Node({ box }: { box: Box }) {
  const cx = box.x + box.w / 2;
  return (
    <g>
      <rect
        x={box.x}
        y={box.y}
        width={box.w}
        height={box.h}
        rx={4}
        className={box.root ? "fill-background stroke-accent" : "fill-background stroke-muted"}
        strokeWidth={box.root ? 1.5 : 1}
      />
      <text
        x={cx}
        y={box.note ? box.y + box.h / 2 - 3 : box.y + box.h / 2 + 5}
        textAnchor="middle"
        className="fill-foreground font-sans"
        fontSize={16}
      >
        {box.label}
      </text>
      {box.note && (
        <text x={cx} y={box.y + box.h / 2 + 15} textAnchor="middle" className="fill-muted font-sans" fontSize={13}>
          {box.note}
        </text>
      )}
    </g>
  );
}

function Edge({ from, to }: { from: { x: number; y: number }; to: { x: number; y: number } }) {
  return (
    <line
      x1={from.x}
      y1={from.y}
      x2={to.x}
      y2={to.y - 4}
      className="stroke-muted"
      strokeWidth={1}
      markerEnd="url(#sls-arrow)"
    />
  );
}

function EdgeLabel({ x, y, anchor, children }: { x: number; y: number; anchor: "start" | "middle" | "end"; children: string }) {
  return (
    <text x={x} y={y} textAnchor={anchor} className="fill-muted font-sans" fontSize={13}>
      {children}
    </text>
  );
}

/** A constraint between two resources on the same level: dashed, labelled underneath. */
function Constraint({ left, right, lines }: { left: Box; right: Box; lines: [string, string] }) {
  const x1 = left.x + left.w;
  const x2 = right.x;
  const y = left.y + left.h / 2;
  const cx = (x1 + x2) / 2;
  return (
    <g>
      <line x1={x1} y1={y} x2={x2} y2={y} className="stroke-muted" strokeWidth={1} strokeDasharray="3 3" />
      <EdgeLabel x={cx} y={y + 19} anchor="middle">{lines[0]}</EdgeLabel>
      <EdgeLabel x={cx} y={y + 34} anchor="middle">{lines[1]}</EdgeLabel>
    </g>
  );
}

export function ServiceLocationStaffDiagram() {
  const from = bottom(location);
  return (
    <svg
      viewBox="0 0 440 430"
      role="img"
      aria-labelledby="sls-title sls-desc"
      className="h-auto w-full max-w-[560px]"
    >
      <title id="sls-title">Service–Location–Staff dependency graph</title>
      <desc id="sls-desc">
        Location is the aggregate root. It offers services, employs staff and has schedules. Staff must be qualified
        for a service and available in a schedule. A booking combines a service, a staff member and a schedule, and is
        valid only when every one of these relationships holds.
      </desc>

      <defs>
        <marker id="sls-arrow" viewBox="0 0 8 8" refX={7} refY={4} markerWidth={8} markerHeight={8} orient="auto-start-reverse">
          <path d="M0,0 L8,4 L0,8 z" className="fill-muted" />
        </marker>
      </defs>

      <Edge from={from} to={top(service)} />
      <Edge from={from} to={top(staff)} />
      <Edge from={from} to={top(schedule)} />
      <EdgeLabel x={124} y={140} anchor="end">offers</EdgeLabel>
      <EdgeLabel x={228} y={140} anchor="start">employs</EdgeLabel>
      <EdgeLabel x={318} y={140} anchor="start">has</EdgeLabel>

      <Constraint left={service} right={staff} lines={["qualified", "for"]} />
      <Constraint left={staff} right={schedule} lines={["available", "in"]} />

      <Edge from={bottom(service)} to={top(booking, -40)} />
      <Edge from={bottom(staff)} to={top(booking)} />
      <Edge from={bottom(schedule)} to={top(booking, 40)} />

      <Node box={location} />
      <Node box={service} />
      <Node box={staff} />
      <Node box={schedule} />
      <Node box={booking} />
    </svg>
  );
}
