# Upvio Platform case study — design

Date: 2026-09-18
Status: approved in conversation (page + outline); pending review of this written spec.

## Goal

Replace the placeholder `/work/[slug]` page with a real case study format, and ship the first case, **Upvio Platform & Foundations**, as its first user. The format must be reusable for every other case (the other two Upvio cases, Automaise, Public Mint, Unimoney).

Source material: [docs/upvio-portfolio-notes.md](../../upvio-portfolio-notes.md), including section 8 (confirmed facts).

## Decisions

- Upvio becomes **3 independent entries** in the Work list: `upvio-platform`, `upvio-scheduling`, `upvio-human-insights`. The existing `upvio-ai` entry is removed.
- Upvio role/dates on all three: **Founding Designer, Head of Design · Jan 2023 — Mar 2025**.
- Content is stored as **typed blocks** (approach A). Casa Digital is the intended future source (see "Data source"), with the local file as a fallback.
- Visuals: real screens will come from **Figma** later. Conceptual **diagrams** are built as inline SVG React components. Figma-made flows and wireframes are exported as images.
- Site copy is **English**.

## Page structure (`/work/[slug]`)

1. Back link `← Work`.
2. Meta line: `COMPANY · SECTOR · YEARS`.
3. Title (serif, display size) + subtitle (1–2 sentences).
4. **Facts row**: Role · Timeline · Scope · Team (4 columns on desktop, 2×2 on mobile).
5. **Outcomes strip**: 2–3 `stat` blocks, placed above the body.
6. **Body**: numbered sections using the homepage's left-label grid (`10rem` label column + content). Text column is capped at about 65ch. `wide` images span the full content width (`max-w-5xl`).
7. **Next case** link at the bottom (order follows `projects`).

Projects without case content keep the current placeholder body, so no page breaks.

## Content model

`content/case-types.ts`:

```ts
type CaseBlock =
  | { type: "section"; label: string; title: string }      // label e.g. "01 — Context"
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; text: string }                       // a key design decision
  | { type: "link"; href: string; text: string }
  | { type: "image"; src?: string; alt: string; caption: string;
      width: "text" | "wide"; source: "figma" | "screenshot" }
  | { type: "diagram"; id: DiagramId; caption: string };    // DiagramId maps to an SVG component

type Stat = { value: string; label: string; placeholder?: boolean };

type CaseStudy = {
  slug: string;
  subtitle: string;
  facts: { role: string; timeline: string; scope: string; team: string };
  stats: Stat[];
  blocks: CaseBlock[];
};
```

`content/projects.ts` stays the index (company, title, sector, role, years, summary) that feeds the Work list and the page header.

### Placeholders

- An `image` block has no `placeholder` field: a missing `src` is itself the placeholder marker. Such a block renders in **development** as a dashed box labelled with its source and caption (e.g. `FIGMA — Guided service setup flow`).
- A `stat` marked `placeholder: true` renders the same way — visible in development, labelled `PLACEHOLDER —`.
- In **production** these placeholders are **not rendered**, so a partially filled case can ship safely.
- A diagram whose component doesn't exist yet counts as a placeholder.

## Data source

- `content/get-case.ts` exports `getCase(slug): Promise<CaseStudy | undefined>`. It is the only entry point the page uses.
- Now: it reads `content/cases/<slug>.ts`.
- Later (out of scope here): it tries the Casa Digital projects API first (`GET /api/v1/projects`, site key `fernando-viana`) with revalidation, and falls back to the local file. That work is blocked until a sample project exists in Casa Digital, so the response shape can be read.

## Files

- `content/case-types.ts`: new.
- `content/cases/upvio-platform.ts`: new, the case content below.
- `content/get-case.ts`: new.
- `content/projects.ts`: replace `upvio-ai` with the 3 Upvio entries.
- `components/case/`: new: `case-header.tsx`, `case-facts.tsx`, `case-stats.tsx`, `case-blocks.tsx`, `image-slot.tsx`, `callout.tsx`, `next-case.tsx`.
- `app/work/[slug]/page.tsx`: render the case when present, otherwise the current placeholder.

No diagram components are built in this iteration; the diagram slots render as placeholders.

## Case content: Upvio Platform & Foundations

**Title:** Turning a capable engine into a coherent clinical platform
**Summary (Work list):** As the first designer, I built Upvio's design foundations and redesigned the core of a multi-clinic healthcare platform.
**Subtitle:** As Upvio's first designer, I built the design foundations and led the redesign of the platform's core (clinical notes, records, telehealth, the patient portal and more) for multi-clinic, multi-staff organisations.

**Facts**
- Role: Founding Designer, Head of Design
- Timeline: Jan 2023 — Mar 2025
- Scope: Design system, UX architecture, 0→1 features, research
- Team: Solo designer, 3 engineers, direct line to C-level

**Stats**
- `8`: product areas designed from zero or rebuilt (to be confirmed by Fernando)
- placeholder: enterprise client with millions of indirect users (name and number unconfirmed)
- placeholder: an adoption or scale metric (clinics, portal, forms)

**Sections**
1. **01 — Context**: Upvio as B2B clinical-management SaaS; technically capable, never had a designer; the missing capabilities at the start. Image slot: `screenshot`, the product before (placeholder).
2. **02 — Challenge**: turn an under-designed tool into a coherent, scalable platform; support multi-location, multi-service, multi-staff setups without overwhelming users; build foundations while shipping. Callout: *"I shipped a lean design system as fast as possible, then grew it component by component as features demanded, using quick wireframes to unblock decisions."*
3. **03 — Foundations**: design system (tokens, component library, used everywhere, including later AI surfaces); new navigation and mental model. Image slot: `figma`, design system overview, `wide`. Diagram slot: IA before → after.
4. **04 — Building the platform**: features grouped by journey. Clinician workflow (notes, records, telehealth); patient engagement (portal, forms, messaging); organisation (roles, teams, permissions). One `figma` image slot per journey. The deep-dive feature is still undecided; the section is written so one journey can later be expanded.
5. **05 — The scheduling problem**: short bridge paragraph, linking to `/work/upvio-scheduling`.
6. **06 — Process & collaboration**: working solo with 3 engineers and C-level stakeholders (CEO, CTO, CMO, Growth, Compliance & Support, Sales); wireframes to speed decisions; guiding developers; balancing visual expectations from the CEO and CMO with feature delivery; research (interviews, forms); website and product story. A brief mention of the short-term asset designer.
7. **07 — Outcomes**: a coherent platform instead of isolated functions; foundations that later carried the AI layer; enterprise clients and investors. Metric placeholders.
8. **08 — Reflection**: the cost of a large vertically integrated platform (the company later split it into APIs), told from a design perspective. Draft copy, to be reviewed by Fernando.

All copy is a first draft for Fernando to edit. No invented numbers: every number without a source is a placeholder.

## Out of scope

- Content for `upvio-scheduling` and `upvio-human-insights` (entries and summaries only; pages show the placeholder).
- The Casa Digital adapter.
- Diagram SVG components, and Figma wireframes and flows.
- Fixing `SITE_API_KEY` in `.env.local` (flagged separately: it returned 401 on the projects endpoint).

## Verification

- `npm run lint` and `npm run build` pass.
- In the browser preview: the Work list shows 3 Upvio entries; `/work/upvio-platform` renders all sections on desktop and at 375px with no horizontal scroll; placeholders are visible in dev; other cases still show the placeholder page; the next-case link works.
