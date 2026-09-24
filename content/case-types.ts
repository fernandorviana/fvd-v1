/** Ids of diagrams built as components in components/case/diagrams.tsx. */
export type DiagramId =
  | "ia-before-after"
  | "platform-map"
  | "appointment-lifecycle"
  | "service-location-staff"
  | "ai-consultation"
  | "documentation-flow";

export type CaseBlock =
  /** Starts a numbered section. Every other block belongs to the section above it. */
  | { type: "section"; label: string; title: string }
  | { type: "paragraph"; text: string }
  /** Names a feature or topic inside a section. */
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] }
  /** A key design decision, set large. */
  | { type: "callout"; text: string }
  | { type: "link"; href: string; text: string }
  | {
      type: "image";
      /** Missing src means the image is still to be produced: a placeholder holds its place. */
      src?: string;
      alt: string;
      caption: string;
      width: "text" | "wide";
      source: "figma" | "screenshot";
    }
  | { type: "diagram"; id: DiagramId; caption: string };

export type Stat = {
  value: string;
  label: string;
  /** Unconfirmed number: shown in development only. */
  placeholder?: boolean;
};

export type CaseStudy = {
  slug: string;
  subtitle: string;
  facts: { role: string; timeline: string; scope: string; team: string };
  stats: Stat[];
  blocks: CaseBlock[];
};
