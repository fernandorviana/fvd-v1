/**
 * Where the scheduling rules live (Upvio scheduling case).
 * Every way in passes through the same domain rules, so invalid data is refused before it is saved.
 */

import { ArrowMarker, bottom, Edge, Eyebrow, Label, Node, Panel, top, type Box } from "./graph-parts";

const MARKER = "dr-arrow";

const entries: Box[] = [
  { x: 24, y: 34, w: 112, h: 40, label: "Interface" },
  { x: 164, y: 34, w: 112, h: 40, label: "API" },
  { x: 304, y: 34, w: 112, h: 40, label: "Integrations" },
];

const rules: Box = { x: 24, y: 120, w: 392, h: 132, label: "Domain rules" };
const checks = [
  "Service: offered here, qualified staff, fits a free slot",
  "Staff: works here, qualified, not blocked or booked",
  "Schedule: staff hours inside the location's",
];

const saved: Box = { x: 24, y: 300, w: 184, h: 52, label: "Saved", note: "valid by construction", root: true };
const refused: Box = { x: 232, y: 300, w: 184, h: 52, label: "Refused", note: "never reaches the data", dashed: true };

export function DomainRulesDiagram() {
  return (
    <svg viewBox="0 0 440 360" role="img" aria-labelledby="dr-title dr-desc" className="h-auto w-full max-w-[560px]">
      <title id="dr-title">Where the scheduling rules live</title>
      <desc id="dr-desc">
        The interface, the API and integrations all pass through the same domain rules. A service must be offered at
        the location, with qualified staff, and there must be enough free time for its time block. A staff member must
        work at the location, be qualified for the service, and be free: not blocked and not already booked. A staff
        member&apos;s schedule must sit inside the location&apos;s schedule. Data that passes is saved; anything else is
        refused and never reaches the data.
      </desc>

      <defs>
        <ArrowMarker id={MARKER} />
      </defs>

      <Eyebrow x={24} y={22}>Every way in</Eyebrow>
      {entries.map((box) => (
        <Edge key={box.label} from={bottom(box)} to={top(rules, (box.x + box.w / 2 - 220) * 0.5)} marker={MARKER} />
      ))}
      {entries.map((box) => (
        <Node key={box.label} box={box} />
      ))}

      <Panel {...rules} accent />
      <text x={rules.x + rules.w / 2} y={rules.y + 30} textAnchor="middle" className="fill-foreground font-sans" fontSize={16}>
        {rules.label}
      </text>
      {checks.map((check, i) => (
        <Label key={check} x={44} y={rules.y + 62 + i * 24} anchor="start">
          {check}
        </Label>
      ))}

      <Edge from={{ x: top(saved).x, y: rules.y + rules.h }} to={top(saved)} marker={MARKER} />
      <Edge from={{ x: top(refused).x, y: rules.y + rules.h }} to={top(refused)} marker={MARKER} dashed />
      <Node box={saved} />
      <Node box={refused} />
    </svg>
  );
}
