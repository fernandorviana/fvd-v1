/**
 * Telehealth in two layers (Upvio scheduling case).
 * In the interface it is an option of the service; in the model it is a location like any other,
 * except that its time zone comes from the practitioner.
 */

import { ArrowMarker, bottom, Edge, Eyebrow, Label, Node, top, type Box } from "./graph-parts";

const MARKER = "tl-arrow";
const ACCENT_MARKER = "tl-arrow-accent";

const form = { x: 12, y: 32, w: 416, h: 76 };
const FORM_X = form.x + 16;
const CHECK = { x: 277, y: form.y + 41, size: 14 };
/** Baseline of the form's second row, level with the checkbox. */
const ROW_Y = CHECK.y + CHECK.size - 2;
const DIVIDER_Y = 132;

const service: Box = { x: 160, y: 176, w: 120, h: 44, label: "Service" };
const physical: Box[] = [
  { x: 12, y: 268, w: 112, h: 44, label: "Braga" },
  { x: 140, y: 268, w: 112, h: 44, label: "Porto" },
];
const telehealth: Box = { x: 268, y: 268, w: 160, h: 44, label: "Telehealth", root: true };
/** The option's arrow drops from the checkbox, clear of the Service box, onto the Service–Telehealth link. */
const LINK_X = CHECK.x + CHECK.size / 2;
const linkFrom = bottom(service);
const linkTo = top(telehealth);
const LINK_Y = linkFrom.y + ((LINK_X - linkFrom.x) / (linkTo.x - linkFrom.x)) * (linkTo.y - linkFrom.y);

export function TelehealthLayersDiagram() {
  return (
    <svg viewBox="0 0 440 372" role="img" aria-labelledby="tl-title tl-desc" className="h-auto w-full max-w-[560px]">
      <title id="tl-title">Telehealth in the interface and in the model</title>
      <desc id="tl-desc">
        In the interface, telehealth is an option of the service: when creating a service, the user picks its locations
        and ticks Available online. In the model, that option links the service to the telehealth location, which works
        like any other location. The one difference is the time zone: a physical location uses its own, telehealth uses
        the practitioner&apos;s.
      </desc>

      <defs>
        <ArrowMarker id={MARKER} />
        <ArrowMarker id={ACCENT_MARKER} accent />
      </defs>

      <Eyebrow x={12} y={20}>What the user sees</Eyebrow>
      <rect x={form.x} y={form.y} width={form.w} height={form.h} rx={4} className="fill-background stroke-muted" />
      <text x={FORM_X} y={form.y + 26} className="fill-foreground font-sans" fontSize={16}>
        New service
      </text>
      <Label x={FORM_X} y={ROW_Y} anchor="start">Locations</Label>
      <Label x={FORM_X + 72} y={ROW_Y} anchor="start" strong>Braga, Porto</Label>
      <rect
        x={CHECK.x}
        y={CHECK.y}
        width={CHECK.size}
        height={CHECK.size}
        rx={2}
        className="fill-accent stroke-accent"
      />
      <path
        d={`M${CHECK.x + 3},${CHECK.y + 7} l3,3 l5,-6`}
        className="stroke-background"
        strokeWidth={1.5}
        fill="none"
      />
      <Label x={CHECK.x + 22} y={ROW_Y} anchor="start" strong>Available online</Label>

      <line x1={12} y1={DIVIDER_Y} x2={428} y2={DIVIDER_Y} className="stroke-line" strokeDasharray="4 3" />
      <Eyebrow x={12} y={DIVIDER_Y + 24}>What the model holds</Eyebrow>

      <Edge
        from={{ x: LINK_X, y: CHECK.y + CHECK.size + 4 }}
        to={{ x: LINK_X, y: LINK_Y }}
        gap={0}
        marker={ACCENT_MARKER}
        accent
        dashed
      />
      <Label x={LINK_X + 10} y={190} anchor="start">the option</Label>
      <Label x={LINK_X + 10} y={206} anchor="start">creates this link</Label>

      {physical.map((box) => (
        <Edge key={box.label} from={bottom(service)} to={top(box)} marker={MARKER} />
      ))}
      <Edge from={bottom(service)} to={top(telehealth)} marker={ACCENT_MARKER} accent />

      <Node box={service} />
      {physical.map((box) => (
        <Node key={box.label} box={box} />
      ))}
      <Node box={telehealth} />

      <Label x={132} y={338}>time zone of</Label>
      <Label x={132} y={354} strong>the location</Label>
      <Label x={348} y={338}>time zone of</Label>
      <Label x={348} y={354} strong>the practitioner</Label>
    </svg>
  );
}
