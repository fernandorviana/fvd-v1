/**
 * Scheduling before and after the model (Upvio scheduling case).
 * Before: four entities configured on their own, and bookings that needed none of them.
 * After: the same entities hanging from the location, and a booking only when every rule holds.
 */

import { ArrowMarker, bottom, Edge, Eyebrow, Label, Node, Panel, top, type Box } from "./graph-parts";

const MARKER = "sba-arrow";
const WIDTH = 440;
const MARGIN = 12;
const PANEL_W = WIDTH - MARGIN * 2;

const row = (y: number, labels: string[]): Box[] =>
  labels.map((label, i) => ({ x: 28 + i * 100, y, w: 84, h: 40, label }));

const BEFORE_TOP = 8;
const before = row(BEFORE_TOP + 52, ["Service", "Location", "Staff", "Schedule"]);
const looseBookings: Box[] = [
  { x: 28, y: BEFORE_TOP + 132, w: 184, h: 52, label: "Booking", note: "a time and a practitioner", dashed: true },
  { x: 228, y: BEFORE_TOP + 132, w: 184, h: 52, label: "Booking", note: "only a patient", dashed: true },
];
const BEFORE_BOTTOM = BEFORE_TOP + 228;

const AFTER_TOP = BEFORE_BOTTOM + 36;
const location: Box = { x: 160, y: AFTER_TOP + 48, w: 120, h: 40, label: "Location", root: true };
const resources: Box[] = [
  { x: 24, y: AFTER_TOP + 132, w: 112, h: 40, label: "Service" },
  { x: 164, y: AFTER_TOP + 132, w: 112, h: 40, label: "Staff" },
  { x: 304, y: AFTER_TOP + 132, w: 112, h: 40, label: "Schedule" },
];
const booking: Box = { x: 140, y: AFTER_TOP + 216, w: 160, h: 52, label: "Booking", note: "every rule holds", root: true };
const AFTER_BOTTOM = booking.y + booking.h + 16;

export function SchedulingBeforeAfterDiagram() {
  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${AFTER_BOTTOM + 8}`}
      role="img"
      aria-labelledby="sba-title sba-desc"
      className="h-auto w-full max-w-[560px]"
    >
      <title id="sba-title">Scheduling before and after the model</title>
      <desc id="sba-desc">
        Before: services, locations, staff and schedules were configured on their own, with nothing connecting them. A
        booking could be made with just a time and a practitioner, or with just a patient. After: the location is the
        anchor. Services, staff and schedules hang from it, and a booking exists only when every relationship holds.
      </desc>

      <defs>
        <ArrowMarker id={MARKER} />
      </defs>

      <Panel x={MARGIN} y={BEFORE_TOP} w={PANEL_W} h={BEFORE_BOTTOM - BEFORE_TOP} />
      <Eyebrow x={24} y={BEFORE_TOP + 30}>Before</Eyebrow>
      <Label x={416} y={BEFORE_TOP + 30} anchor="end">each configured on its own</Label>
      {before.map((box) => (
        <Node key={box.label} box={box} />
      ))}
      {looseBookings.map((box) => (
        <Node key={box.note} box={box} />
      ))}
      <Label x={WIDTH / 2} y={BEFORE_TOP + 212}>Nothing checked that they fitted together</Label>

      <Edge from={{ x: WIDTH / 2, y: BEFORE_BOTTOM + 6 }} to={{ x: WIDTH / 2, y: AFTER_TOP }} marker={MARKER} />

      <Panel x={MARGIN} y={AFTER_TOP} w={PANEL_W} h={AFTER_BOTTOM - AFTER_TOP} accent />
      <Eyebrow x={24} y={AFTER_TOP + 30}>After</Eyebrow>
      <Label x={416} y={AFTER_TOP + 30} anchor="end">everything hangs from the location</Label>
      {resources.map((box) => (
        <Edge key={box.label} from={bottom(location)} to={top(box)} marker={MARKER} />
      ))}
      {resources.map((box, i) => (
        <Edge key={box.label} from={bottom(box)} to={top(booking, (i - 1) * 48)} marker={MARKER} />
      ))}
      <Node box={location} />
      {resources.map((box) => (
        <Node key={box.label} box={box} />
      ))}
      <Node box={booking} />
    </svg>
  );
}
