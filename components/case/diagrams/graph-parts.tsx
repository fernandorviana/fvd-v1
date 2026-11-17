/**
 * SVG parts shared by the box-and-arrow diagrams. Sizes match a 440-wide viewBox;
 * colours come from theme tokens.
 */

export type Box = {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  note?: string;
  /** Drawn in the accent colour: the entity the diagram is about. */
  root?: boolean;
  /** Dashed outline: something incomplete or refused. */
  dashed?: boolean;
};

export type Point = { x: number; y: number };

export const top = (b: Box, dx = 0): Point => ({ x: b.x + b.w / 2 + dx, y: b.y });
export const bottom = (b: Box, dx = 0): Point => ({ x: b.x + b.w / 2 + dx, y: b.y + b.h });

export function ArrowMarker({ id, accent }: { id: string; accent?: boolean }) {
  return (
    <marker id={id} viewBox="0 0 8 8" refX={7} refY={4} markerWidth={8} markerHeight={8} orient="auto-start-reverse">
      <path d="M0,0 L8,4 L0,8 z" className={accent ? "fill-accent" : "fill-muted"} />
    </marker>
  );
}

export function Node({ box }: { box: Box }) {
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
        strokeDasharray={box.dashed ? "4 3" : undefined}
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

/** A framed area that groups part of a diagram; the accent marks the one the diagram is about. */
export function Panel({ x, y, w, h, accent }: { x: number; y: number; w: number; h: number; accent?: boolean }) {
  return (
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx={4}
      className={accent ? "fill-background stroke-accent" : "fill-background stroke-line"}
      strokeWidth={accent ? 1.5 : 1}
    />
  );
}

/**
 * An arrow from one point to another. The line stops `gap` short of `to`, along its own direction,
 * so the head meets a box's edge; pass gap={0} when the target is a line rather than a box.
 */
export function Edge({
  from,
  to,
  marker,
  gap = 4,
  accent,
  dashed,
}: {
  from: Point;
  to: Point;
  marker: string;
  gap?: number;
  accent?: boolean;
  dashed?: boolean;
}) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const shorten = gap / (Math.hypot(dx, dy) || 1);
  return (
    <line
      x1={from.x}
      y1={from.y}
      x2={to.x - dx * shorten}
      y2={to.y - dy * shorten}
      className={accent ? "stroke-accent" : "stroke-muted"}
      strokeWidth={accent ? 1.5 : 1}
      strokeDasharray={dashed ? "4 3" : undefined}
      markerEnd={`url(#${marker})`}
    />
  );
}

export function Label({
  x,
  y,
  anchor = "middle",
  strong,
  children,
}: {
  x: number;
  y: number;
  anchor?: "start" | "middle" | "end";
  strong?: boolean;
  children: string;
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      className={strong ? "fill-foreground font-sans" : "fill-muted font-sans"}
      fontSize={13}
    >
      {children}
    </text>
  );
}

/** A small uppercase heading that names a part of the diagram. */
export function Eyebrow({ x, y, children }: { x: number; y: number; children: string }) {
  return (
    <text x={x} y={y} className="fill-muted font-sans" fontSize={11} letterSpacing="0.12em">
      {children.toUpperCase()}
    </text>
  );
}
