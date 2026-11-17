/**
 * Service–Location–Staff dependency graph (Upvio scheduling case).
 * Vertical layout so it stays legible from phone width up; colours come from theme tokens.
 */

import { ArrowMarker, bottom, Edge, Label, Node, top, type Box } from "./graph-parts";

const location: Box = { x: 150, y: 20, w: 140, h: 60, label: "Location", note: "aggregate root", root: true };
const service: Box = { x: 12, y: 190, w: 96, h: 52, label: "Service" };
const staff: Box = { x: 172, y: 190, w: 96, h: 52, label: "Staff" };
const schedule: Box = { x: 332, y: 190, w: 96, h: 52, label: "Schedule" };
const booking: Box = { x: 150, y: 350, w: 140, h: 60, label: "Booking", note: "every rule must hold", root: true };

/** A constraint between two resources on the same level: dashed, labelled underneath. */
function Constraint({ left, right, lines }: { left: Box; right: Box; lines: [string, string] }) {
  const x1 = left.x + left.w;
  const x2 = right.x;
  const y = left.y + left.h / 2;
  const cx = (x1 + x2) / 2;
  return (
    <g>
      <line x1={x1} y1={y} x2={x2} y2={y} className="stroke-muted" strokeWidth={1} strokeDasharray="3 3" />
      <Label x={cx} y={y + 19}>{lines[0]}</Label>
      <Label x={cx} y={y + 34}>{lines[1]}</Label>
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
        <ArrowMarker id="sls-arrow" />
      </defs>

      <Edge from={from} to={top(service)} marker="sls-arrow" />
      <Edge from={from} to={top(staff)} marker="sls-arrow" />
      <Edge from={from} to={top(schedule)} marker="sls-arrow" />
      <Label x={124} y={140} anchor="end">offers</Label>
      <Label x={228} y={140} anchor="start">employs</Label>
      <Label x={318} y={140} anchor="start">has</Label>

      <Constraint left={service} right={staff} lines={["qualified", "for"]} />
      <Constraint left={staff} right={schedule} lines={["available", "in"]} />

      <Edge from={bottom(service)} to={top(booking, -40)} marker="sls-arrow" />
      <Edge from={bottom(staff)} to={top(booking)} marker="sls-arrow" />
      <Edge from={bottom(schedule)} to={top(booking, 40)} marker="sls-arrow" />

      <Node box={location} />
      <Node box={service} />
      <Node box={staff} />
      <Node box={schedule} />
      <Node box={booking} />
    </svg>
  );
}
