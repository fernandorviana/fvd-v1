# Upvio Platform Case Study Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the placeholder `/work/[slug]` page with a reusable, block-based case study format and ship the Upvio Platform & Foundations case as its first user.

**Architecture:** Case content lives in typed data files (`content/cases/<slug>.ts`) behind a single async accessor (`getCase`). A small set of server components renders the blocks. Placeholders (missing images, metrics, diagrams) render in development only. The project index (`content/projects.ts`) keeps feeding the Work list and the page header.

**Tech Stack:** Next.js 16.3 (App Router, `PageProps` global type), React 19, Tailwind CSS v4 (`@theme` tokens in `app/globals.css`), TypeScript, Node 26 built-in test runner (`node --test` with native TS type stripping).

**Spec:** `docs/superpowers/specs/2026-09-18-upvio-platform-case-study-design.md`

## Global Constraints

- Site copy is English. No invented numbers: any number without a source is `placeholder: true`.
- Upvio role/years on all three entries: `Founding Designer · Head of Design` / `Jan 2023 — Mar 2025`.
- Placeholders are rendered only when `process.env.NODE_ENV !== "production"`.
- Styling uses only existing tokens: `text-muted`, `border-line`, `text-accent`, `font-serif`, `font-sans`, `text-display`, `text-title`; label style is `font-sans text-xs uppercase tracking-[0.18em] text-muted`.
- Section grid matches `components/section.tsx`: `md:grid md:grid-cols-[10rem_1fr] md:gap-12`, container `mx-auto w-full max-w-5xl px-6`.
- No new runtime dependencies.
- Read `node_modules/next/dist/docs/` before using any Next API not already used in this repo (AGENTS.md).

## Deviations from spec (small, deliberate)

- A `link` block type is added, because section 05 must link to `/work/upvio-scheduling` and paragraphs are plain text.
- `Project` gets an optional `track` field so the three Upvio rows in the Work list are distinguishable (`Upvio AI — Platform & Foundations`). `components/featured-work.tsx` renders it.
- An image is a placeholder when it has no `src` (instead of a separate `placeholder` flag on images), so there is only one way to mark it as missing.
- Section grouping is a pure function (`content/group-sections.ts`) so it can be unit-tested.

## File map

| File | Responsibility |
|---|---|
| `content/case-types.ts` | Types: `CaseBlock`, `Stat`, `CaseStudy`, `DiagramId` |
| `content/group-sections.ts` | `groupSections(blocks)` → sections with their child blocks |
| `content/cases/upvio-platform.ts` | The case content |
| `content/get-case.ts` | `getCase(slug)`, the only data entry point |
| `content/projects.ts` | Index: 3 Upvio entries + `track` field |
| `components/featured-work.tsx` | Renders `track` in the Work list |
| `components/case/placeholder.tsx` | `showPlaceholders` flag + dashed `Placeholder` box |
| `components/case/case-header.tsx` | Meta line, title, subtitle |
| `components/case/case-facts.tsx` | Role · Timeline · Scope · Team |
| `components/case/case-stats.tsx` | Outcomes strip |
| `components/case/image-slot.tsx` | Image or placeholder |
| `components/case/diagrams.tsx` | `DiagramId` → SVG component registry (empty for now) |
| `components/case/case-blocks.tsx` | Renders grouped sections and all block types |
| `components/case/next-case.tsx` | Link to the next project |
| `app/work/[slug]/page.tsx` | Case page, or the existing placeholder when no case exists |
| `tests/content.test.ts` | Content integrity + `groupSections` tests |

---

### Task 1: Types, section grouping, and test harness

**Files:**
- Create: `content/case-types.ts`
- Create: `content/group-sections.ts`
- Create: `tests/content.test.ts`
- Modify: `package.json` (add `test` script)
- Modify: `tsconfig.json` (add `allowImportingTsExtensions`)

**Interfaces:**
- Produces: `CaseBlock`, `Stat`, `CaseStudy`, `DiagramId` from `content/case-types.ts`; `groupSections(blocks: CaseBlock[]): CaseSection[]` and `CaseSection = { label: string; title: string; blocks: CaseBlock[] }` from `content/group-sections.ts`.

- [ ] **Step 1: Enable `.ts` imports for the Node test runner**

In `tsconfig.json`, add to `compilerOptions` (valid because `noEmit` is already `true`):

```json
    "allowImportingTsExtensions": true,
```

In `package.json` `scripts`, add:

```json
    "test": "node --test \"tests/**/*.test.ts\"",
```

- [ ] **Step 2: Write the types**

`content/case-types.ts`:

```ts
/** Ids of SVG diagrams built as components in components/case/diagrams.tsx. */
export type DiagramId = "ia-before-after";

export type CaseBlock =
  /** Starts a numbered section. Every other block belongs to the section above it. */
  | { type: "section"; label: string; title: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  /** A key design decision, set large. */
  | { type: "callout"; text: string }
  | { type: "link"; href: string; text: string }
  | {
      type: "image";
      /** Missing src means the image is still to be produced. */
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
```

- [ ] **Step 3: Write the failing test for `groupSections`**

`tests/content.test.ts`:

```ts
import { test } from "node:test";
import assert from "node:assert/strict";
import { groupSections } from "../content/group-sections.ts";

test("groupSections nests blocks under the section above them", () => {
  const sections = groupSections([
    { type: "section", label: "01 — Context", title: "Context" },
    { type: "paragraph", text: "a" },
    { type: "section", label: "02 — Challenge", title: "Challenge" },
    { type: "paragraph", text: "b" },
    { type: "callout", text: "c" },
  ]);

  assert.equal(sections.length, 2);
  assert.equal(sections[0].label, "01 — Context");
  assert.deepEqual(sections[0].blocks, [{ type: "paragraph", text: "a" }]);
  assert.equal(sections[1].blocks.length, 2);
});

test("groupSections rejects content before the first section", () => {
  assert.throws(() => groupSections([{ type: "paragraph", text: "orphan" }]));
});
```

- [ ] **Step 4: Run the test to verify it fails**

Run: `npm test`
Expected: FAIL. Cannot find module `content/group-sections.ts`.

- [ ] **Step 5: Implement `groupSections`**

`content/group-sections.ts`:

```ts
import type { CaseBlock } from "./case-types";

export type CaseSection = { label: string; title: string; blocks: CaseBlock[] };

export function groupSections(blocks: CaseBlock[]): CaseSection[] {
  const sections: CaseSection[] = [];

  for (const block of blocks) {
    if (block.type === "section") {
      sections.push({ label: block.label, title: block.title, blocks: [] });
      continue;
    }
    const current = sections.at(-1);
    if (!current) {
      throw new Error(`Block "${block.type}" appears before the first section.`);
    }
    current.blocks.push(block);
  }

  return sections;
}
```

- [ ] **Step 6: Run the tests to verify they pass**

Run: `npm test`
Expected: PASS, 2 tests.

- [ ] **Step 7: Commit**

```bash
git add content/case-types.ts content/group-sections.ts tests/content.test.ts package.json tsconfig.json
git commit -m "Add case study content types and section grouping"
```

---

### Task 2: Project index — three Upvio entries

**Files:**
- Modify: `content/projects.ts`
- Modify: `components/featured-work.tsx`
- Modify: `tests/content.test.ts`

**Interfaces:**
- Produces: `Project` with new optional `track?: string`; `projects` in display order; `getProject(slug)` unchanged.

- [ ] **Step 1: Write the failing test**

Append to `tests/content.test.ts`:

```ts
import { projects } from "../content/projects.ts";

test("projects list the three Upvio cases first, with the confirmed role", () => {
  const upvio = projects.filter((p) => p.company === "Upvio AI");
  assert.deepEqual(
    upvio.map((p) => p.slug),
    ["upvio-platform", "upvio-scheduling", "upvio-human-insights"],
  );
  for (const p of upvio) {
    assert.equal(p.role, "Founding Designer · Head of Design");
    assert.equal(p.years, "Jan 2023 — Mar 2025");
  }
});

test("project slugs are unique", () => {
  const slugs = projects.map((p) => p.slug);
  assert.equal(new Set(slugs).size, slugs.length);
});
```

- [ ] **Step 2: Run the tests to verify they fail**

Run: `npm test`
Expected: FAIL. `upvio` is `["upvio-ai"]`.

- [ ] **Step 3: Update `content/projects.ts`**

Add `track` to the type, below `company`:

```ts
  /** Distinguishes several cases from the same company, e.g. "Platform & Foundations". */
  track?: string;
```

Replace the `upvio-ai` object with these three (keep Automaise, Public Mint and Unimoney unchanged, after them):

```ts
  {
    slug: "upvio-platform",
    company: "Upvio AI",
    track: "Platform & Foundations",
    title: "Turning a capable engine into a coherent clinical platform",
    sector: "Healthcare",
    role: "Founding Designer · Head of Design",
    years: "Jan 2023 — Mar 2025",
    summary:
      "As the first designer, I built Upvio's design foundations and redesigned the core of a multi-clinic healthcare platform.",
  },
  {
    slug: "upvio-scheduling",
    company: "Upvio AI",
    track: "Scheduling & Resource Model",
    title: "A scheduling model that makes invalid bookings impossible",
    sector: "Healthcare",
    role: "Founding Designer · Head of Design",
    years: "Jan 2023 — Mar 2025",
    summary:
      "I redesigned how services, locations, staff and schedules depend on each other, bringing configuration errors close to zero.",
  },
  {
    slug: "upvio-human-insights",
    company: "Upvio AI",
    track: "Human Insights AI",
    title: "Turning multimodal AI research into tools clinicians trust",
    sector: "Healthcare",
    role: "Founding Designer · Head of Design",
    years: "Jan 2023 — Mar 2025",
    summary:
      "I turned Vitals AI and Empathic AI from technology without a product into transparent tools inside clinical workflows.",
  },
```

- [ ] **Step 4: Render `track` in the Work list**

In `components/featured-work.tsx`, replace:

```tsx
                <h3 className="font-serif text-title">{project.company}</h3>
```

with:

```tsx
                <h3 className="font-serif text-title">
                  {project.company}
                  {project.track && (
                    <span className="text-muted"> — {project.track}</span>
                  )}
                </h3>
```

- [ ] **Step 5: Run the tests to verify they pass**

Run: `npm test`
Expected: PASS, 4 tests.

- [ ] **Step 6: Commit**

```bash
git add content/projects.ts components/featured-work.tsx tests/content.test.ts
git commit -m "Split Upvio into three case study entries"
```

---

### Task 3: Case components and page

**Files:**
- Create: `components/case/placeholder.tsx`, `case-header.tsx`, `case-facts.tsx`, `case-stats.tsx`, `image-slot.tsx`, `diagrams.tsx`, `case-blocks.tsx`, `next-case.tsx`
- Create: `content/get-case.ts`
- Modify: `app/work/[slug]/page.tsx`

**Interfaces:**
- Consumes: `CaseStudy`, `CaseBlock`, `Stat`, `DiagramId` (Task 1); `groupSections` (Task 1); `Project`, `projects`, `getProject` (Task 2).
- Produces: `getCase(slug: string): Promise<CaseStudy | undefined>`. Cases are registered in the `cases` map inside `content/get-case.ts`.

This task is presentational and has no unit test; it is verified by `lint`, `build` and the browser in Task 5. `getCase` returns `undefined` for every slug until Task 4 registers a case, so after this task every page must still show the old placeholder body.

- [ ] **Step 1: Data accessor**

`content/get-case.ts`:

```ts
import type { CaseStudy } from "./case-types";

/** Registry of written cases. Later: try Casa Digital first, fall back to these. */
const cases: Record<string, CaseStudy> = {};

export async function getCase(slug: string): Promise<CaseStudy | undefined> {
  return cases[slug];
}
```

- [ ] **Step 2: Placeholder**

`components/case/placeholder.tsx`:

```tsx
/** Missing images, diagrams and metrics show while developing, never in production. */
export const showPlaceholders = process.env.NODE_ENV !== "production";

export function Placeholder({ kind, label }: { kind: string; label: string }) {
  return (
    <div className="flex min-h-40 items-center justify-center rounded-sm border border-dashed border-line px-6 py-10 text-center font-sans text-xs uppercase tracking-[0.18em] text-muted">
      {kind} — {label}
    </div>
  );
}
```

- [ ] **Step 3: Header, facts and stats**

`components/case/case-header.tsx`:

```tsx
import type { Project } from "@/content/projects";

export function CaseHeader({ project, subtitle }: { project: Project; subtitle: string }) {
  return (
    <header className="max-w-3xl">
      <p className="font-sans text-xs uppercase tracking-[0.18em] text-muted">
        {project.company} · {project.sector} · {project.years}
      </p>
      <h1 className="mt-6 font-serif text-display tracking-[-0.01em]">{project.title}</h1>
      <p className="mt-6 font-sans text-lg leading-relaxed text-muted sm:text-xl">{subtitle}</p>
    </header>
  );
}
```

`components/case/case-facts.tsx`:

```tsx
import type { CaseStudy } from "@/content/case-types";

const labels = { role: "Role", timeline: "Timeline", scope: "Scope", team: "Team" } as const;

export function CaseFacts({ facts }: { facts: CaseStudy["facts"] }) {
  return (
    <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 md:grid-cols-4">
      {(Object.keys(labels) as (keyof typeof labels)[]).map((key) => (
        <div key={key}>
          <dt className="font-sans text-xs uppercase tracking-[0.18em] text-muted">{labels[key]}</dt>
          <dd className="mt-2 font-sans text-sm leading-relaxed">{facts[key]}</dd>
        </div>
      ))}
    </dl>
  );
}
```

`components/case/case-stats.tsx`:

```tsx
import type { Stat } from "@/content/case-types";
import { showPlaceholders } from "./placeholder";

export function CaseStats({ stats }: { stats: Stat[] }) {
  const visible = stats.filter((stat) => showPlaceholders || !stat.placeholder);
  if (visible.length === 0) return null;

  return (
    <ul className="mt-12 grid gap-8 border-t border-line pt-8 sm:grid-cols-3">
      {visible.map((stat) => (
        <li
          key={stat.label}
          className={stat.placeholder ? "rounded-sm border border-dashed border-line p-4" : undefined}
        >
          <p className="font-serif text-title">{stat.value}</p>
          <p className="mt-2 font-sans text-sm leading-relaxed text-muted">
            {stat.placeholder && "PLACEHOLDER — "}
            {stat.label}
          </p>
        </li>
      ))}
    </ul>
  );
}
```

- [ ] **Step 4: Image slot and diagram registry**

`components/case/diagrams.tsx`:

```tsx
import type { ComponentType } from "react";
import type { DiagramId } from "@/content/case-types";

/** SVG diagrams built in code. A missing entry renders as a placeholder. */
export const diagrams: Partial<Record<DiagramId, ComponentType>> = {};
```

`components/case/image-slot.tsx`:

```tsx
import Image from "next/image";
import type { CaseBlock } from "@/content/case-types";
import { Placeholder, showPlaceholders } from "./placeholder";

type ImageBlock = Extract<CaseBlock, { type: "image" }>;

export function ImageSlot({ block }: { block: ImageBlock }) {
  if (!block.src && !showPlaceholders) return null;

  return (
    <figure className={block.width === "text" ? "max-w-[65ch]" : undefined}>
      {block.src ? (
        <Image
          src={block.src}
          alt={block.alt}
          width={1600}
          height={1000}
          sizes="(min-width: 1024px) 800px, 100vw"
          className="h-auto w-full rounded-sm border border-line"
        />
      ) : (
        <Placeholder kind={block.source} label={block.caption} />
      )}
      <figcaption className="mt-3 font-sans text-sm text-muted">{block.caption}</figcaption>
    </figure>
  );
}
```

- [ ] **Step 5: Blocks renderer**

`components/case/case-blocks.tsx`:

```tsx
import Link from "next/link";
import type { CaseBlock } from "@/content/case-types";
import { groupSections } from "@/content/group-sections";
import { diagrams } from "./diagrams";
import { ImageSlot } from "./image-slot";
import { Placeholder, showPlaceholders } from "./placeholder";

const prose = "max-w-[65ch] font-sans text-lg leading-relaxed text-muted";

function Block({ block }: { block: CaseBlock }) {
  switch (block.type) {
    case "section":
      return null;
    case "paragraph":
      return <p className={prose}>{block.text}</p>;
    case "list":
      return (
        <ul className={`${prose} list-disc space-y-1 pl-5 marker:text-line`}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <blockquote className="max-w-[40ch] border-l-2 border-accent pl-6 font-serif text-title">
          {block.text}
        </blockquote>
      );
    case "link":
      return (
        <p>
          <Link href={block.href} className="font-sans text-sm text-accent underline-offset-4 hover:underline">
            {block.text} →
          </Link>
        </p>
      );
    case "image":
      return <ImageSlot block={block} />;
    case "diagram": {
      const Diagram = diagrams[block.id];
      if (!Diagram && !showPlaceholders) return null;
      return (
        <figure>
          {Diagram ? <Diagram /> : <Placeholder kind="diagram" label={block.caption} />}
          <figcaption className="mt-3 font-sans text-sm text-muted">{block.caption}</figcaption>
        </figure>
      );
    }
  }
}

export function CaseBlocks({ blocks }: { blocks: CaseBlock[] }) {
  return groupSections(blocks).map((section) => (
    <section
      key={section.label}
      className="border-t border-line py-16 sm:py-20 md:grid md:grid-cols-[10rem_1fr] md:gap-12"
    >
      <p className="mb-6 font-sans text-xs uppercase tracking-[0.18em] text-muted md:mb-0">
        {section.label}
      </p>
      <div className="space-y-8">
        <h2 className="font-serif text-title">{section.title}</h2>
        {section.blocks.map((block, index) => (
          <Block key={index} block={block} />
        ))}
      </div>
    </section>
  ));
}
```

- [ ] **Step 6: Next case**

`components/case/next-case.tsx`:

```tsx
import Link from "next/link";
import { projects } from "@/content/projects";

export function NextCase({ slug }: { slug: string }) {
  const index = projects.findIndex((project) => project.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <Link href={`/work/${next.slug}`} className="group block border-t border-line py-12">
      <p className="font-sans text-xs uppercase tracking-[0.18em] text-muted">Next case</p>
      <p className="mt-4 font-serif text-title group-hover:underline underline-offset-4">
        {next.company}
        {next.track && ` — ${next.track}`} →
      </p>
    </Link>
  );
}
```

- [ ] **Step 7: Page**

Replace `app/work/[slug]/page.tsx` with:

```tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseBlocks } from "@/components/case/case-blocks";
import { CaseFacts } from "@/components/case/case-facts";
import { CaseHeader } from "@/components/case/case-header";
import { CaseStats } from "@/components/case/case-stats";
import { NextCase } from "@/components/case/next-case";
import { getCase } from "@/content/get-case";
import { getProject, projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const caseStudy = await getCase(slug);

  return (
    <main className="flex-1">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-28">
        <Link
          href="/#work"
          className="font-sans text-xs uppercase tracking-[0.18em] text-muted underline-offset-4 hover:underline"
        >
          ← Work
        </Link>

        <div className="mt-12">
          <CaseHeader project={project} subtitle={caseStudy?.subtitle ?? project.role} />
        </div>

        {caseStudy ? (
          <>
            <CaseFacts facts={caseStudy.facts} />
            <CaseStats stats={caseStudy.stats} />
            <div className="mt-16">
              <CaseBlocks blocks={caseStudy.blocks} />
            </div>
          </>
        ) : (
          <div className="mt-16 max-w-3xl space-y-6 border-t border-line pt-10 font-sans text-lg leading-relaxed text-muted">
            <p>
              Case study placeholder. Likely structure: context and
              constraints, what was broken, design decisions, and outcome.
            </p>
            <p>
              Space for images, before/afters, and process artifacts — to be
              defined once we settle on the format for each case.
            </p>
          </div>
        )}

        <NextCase slug={slug} />
      </div>
    </main>
  );
}
```

- [ ] **Step 8: Lint and typecheck**

Run: `npm run lint && npx tsc --noEmit && npm test`
Expected: no errors; 4 tests pass.

- [ ] **Step 9: Commit**

```bash
git add components/case content/get-case.ts "app/work/[slug]/page.tsx"
git commit -m "Add block-based case study page"
```

---

### Task 4: Upvio Platform content

**Files:**
- Create: `content/cases/upvio-platform.ts`
- Modify: `content/get-case.ts` (register the case)
- Modify: `tests/content.test.ts`

**Interfaces:**
- Consumes: `CaseStudy` (Task 1), `getCase` registry (Task 3), `projects` (Task 2).
- Produces: `upvioPlatform: CaseStudy`.

- [ ] **Step 1: Write the failing integrity tests**

Append to `tests/content.test.ts`. They load every file in `content/cases/`, so they also guard future cases:

```ts
import { readdirSync } from "node:fs";
import type { CaseStudy } from "../content/case-types.ts";

const caseDir = new URL("../content/cases/", import.meta.url);

async function loadCases(): Promise<CaseStudy[]> {
  const files = readdirSync(caseDir).filter((file) => file.endsWith(".ts"));
  const modules = await Promise.all(files.map((file) => import(new URL(file, caseDir).href)));
  return modules.flatMap((mod) => Object.values(mod) as CaseStudy[]);
}

test("the Upvio Platform case exists", async () => {
  const cases = await loadCases();
  assert.ok(cases.some((c) => c.slug === "upvio-platform"));
});

test("every case matches a project and has well-formed sections", async () => {
  for (const c of await loadCases()) {
    assert.ok(projects.some((p) => p.slug === c.slug), `${c.slug} has no project entry`);

    const sections = groupSections(c.blocks);
    sections.forEach((section, i) => {
      const expected = String(i + 1).padStart(2, "0") + " — ";
      assert.ok(section.label.startsWith(expected), `${c.slug}: "${section.label}" should start with "${expected}"`);
    });
  }
});

test("internal links point to existing projects", async () => {
  for (const c of await loadCases()) {
    for (const block of c.blocks) {
      if (block.type !== "link" || !block.href.startsWith("/work/")) continue;
      const slug = block.href.replace("/work/", "");
      assert.ok(projects.some((p) => p.slug === slug), `${c.slug}: broken link ${block.href}`);
    }
  }
});
```

- [ ] **Step 2: Run the tests to verify they fail**

Run: `npm test`
Expected: FAIL. `content/cases/` does not exist (ENOENT), or "the Upvio Platform case exists" fails.

- [ ] **Step 3: Write the content**

`content/cases/upvio-platform.ts` (only type imports, so the Node test runner can load it):

```ts
import type { CaseStudy } from "../case-types";

export const upvioPlatform: CaseStudy = {
  slug: "upvio-platform",
  subtitle:
    "As Upvio's first designer, I built the design foundations and led the redesign of the platform's core (clinical notes, records, telehealth, the patient portal and more) for multi-clinic, multi-staff organisations.",
  facts: {
    role: "Founding Designer, Head of Design",
    timeline: "Jan 2023 — Mar 2025",
    scope: "Design system, UX architecture, 0→1 features, research",
    team: "Solo designer, 3 engineers, direct line to C-level",
  },
  stats: [
    { value: "8", label: "Product areas designed from zero or rebuilt" },
    { value: "[N]M", label: "End users reached through one enterprise client", placeholder: true },
    { value: "[N]", label: "Clinics or organisations on the platform", placeholder: true },
  ],
  blocks: [
    { type: "section", label: "01 — Context", title: "A capable engine nobody had designed" },
    {
      type: "paragraph",
      text: "Upvio is a B2B platform for running healthcare practices: scheduling, patient records, consultations and patient communication, with a layer of Human Insights AI on top. When I joined in January 2023, the engineering was solid, but nobody had ever designed the product.",
    },
    { type: "paragraph", text: "Many of the capabilities clinics expected were missing or rudimentary:" },
    {
      type: "list",
      items: [
        "Clinical notes",
        "Complex patient records",
        "Telehealth",
        "Patient portal",
        "Secure messaging",
        "Roles and teams",
        "Robust custom forms",
        "Advanced scheduling",
      ],
    },
    {
      type: "image",
      alt: "Upvio before the redesign",
      caption: "The product before the redesign",
      width: "wide",
      source: "screenshot",
    },

    { type: "section", label: "02 — Challenge", title: "Foundations and features, at the same time" },
    {
      type: "paragraph",
      text: "The job was to turn a capable but under-designed tool into a coherent platform, one that could support organisations with multiple locations, services and professionals without overwhelming the people using it every day.",
    },
    {
      type: "paragraph",
      text: "And there was no pause button. Clinics were using the product, the business needed new features, and there was no design foundation to build them on.",
    },
    {
      type: "callout",
      text: "I shipped a lean design system as fast as possible, then grew it component by component as features demanded, using quick wireframes to unblock decisions.",
    },

    { type: "section", label: "03 — Foundations", title: "One system, one structure" },
    {
      type: "paragraph",
      text: "I created the design system from scratch: typography, colour tokens and spacing, then a component library for inputs, tables, cards, navigation and layouts. It started deliberately lean and grew with every feature. The same system later carried the scheduling rebuild and the AI surfaces.",
    },
    {
      type: "image",
      alt: "Upvio design system: tokens and core components",
      caption: "Design system: tokens and core components",
      width: "wide",
      source: "figma",
    },
    {
      type: "paragraph",
      text: "In parallel I redesigned the product's structure: navigation, dashboards, the primary flows for scheduling, consultations, documentation and patients, and the mental model underneath them.",
    },
    { type: "diagram", id: "ia-before-after", caption: "Information architecture, before and after" },

    { type: "section", label: "04 — Building the platform", title: "Designed around three journeys" },
    {
      type: "paragraph",
      text: "Rather than treating each feature on its own, I organised the work around the three journeys the platform had to serve.",
    },
    {
      type: "paragraph",
      text: "Clinician workflow: structured clinical notes for documenting consultations; patient records built for long-term histories, multiple professionals and custom fields per specialty; and telehealth for remote consultations inside the platform.",
    },
    {
      type: "image",
      alt: "Clinical notes, patient record and telehealth screens",
      caption: "Clinician workflow: notes, records and telehealth",
      width: "wide",
      source: "figma",
    },
    {
      type: "paragraph",
      text: "Patient engagement: a patient portal for appointments, documents and self-service; custom forms for intake, follow-up and feedback, connected to records and workflows; and secure messaging between staff and, when appropriate, patients.",
    },
    {
      type: "image",
      alt: "Patient portal, custom forms and secure messaging screens",
      caption: "Patient engagement: portal, forms and messaging",
      width: "wide",
      source: "figma",
    },
    {
      type: "paragraph",
      text: "Organisation: roles, teams and permissions for the different people and structures inside a practice, from a single clinic to a multi-location group.",
    },
    {
      type: "image",
      alt: "Roles, teams and permissions settings",
      caption: "Organisation: roles, teams and permissions",
      width: "text",
      source: "figma",
    },

    { type: "section", label: "05 — Scheduling", title: "The problem below the interface" },
    {
      type: "paragraph",
      text: "Scheduling was different. Fixing it meant going below the interface and redesigning the domain model itself: how services, locations, staff and schedules depend on each other. That story has its own case study.",
    },
    { type: "link", href: "/work/upvio-scheduling", text: "Read the Scheduling & Resource Model case" },

    { type: "section", label: "06 — Process", title: "One designer, many stakeholders" },
    {
      type: "paragraph",
      text: "I was the only designer, working with three engineers and directly with the CEO, CTO, CMO, Head of Growth, Head of Compliance & Support and, at times, the Sales Director. For a short period a second designer helped produce assets within the visual language I had set.",
    },
    {
      type: "paragraph",
      text: "Much of the job was juggling: quick wireframes to unblock decisions and test UX directions, guiding developers through implementation, and meeting the CEO's and CMO's expectations for how the product looked, all while shipping new features and reworking existing ones.",
    },
    {
      type: "paragraph",
      text: "Research ran alongside delivery through interviews and forms, and the same design language extended to the marketing website and the story of the product.",
    },

    { type: "section", label: "07 — Outcomes", title: "A platform, not a set of functions" },
    {
      type: "paragraph",
      text: "Upvio went from a set of disconnected functions to a coherent platform with one design language, one navigation model and the core capabilities clinics expected. The foundations were solid enough to carry what came next: a rebuilt scheduling model and a Human Insights AI layer.",
    },
    {
      type: "paragraph",
      text: "The platform helped Upvio win enterprise clients, including one serving millions of end users, and attract new investors.",
    },

    { type: "section", label: "08 — Reflection", title: "What I'd do differently" },
    {
      type: "paragraph",
      text: "Putting scheduling, records, telehealth, messaging and AI in one vertically integrated product gave clinics a single coherent place to work. It also made the product expensive to maintain. After I left, Upvio split it into APIs such as Vitals AI and Empathic AI for others to build on.",
    },
    {
      type: "paragraph",
      text: "Looking back, I would design for that modularity earlier: clearer boundaries between product areas, and a design system that works as building blocks outside a single app. The capabilities held up. The packaging was what needed to change.",
    },
  ],
};
```

- [ ] **Step 4: Register the case**

In `content/get-case.ts`, add the import and the registry entry:

```ts
import type { CaseStudy } from "./case-types";
import { upvioPlatform } from "./cases/upvio-platform";

/** Registry of written cases. Later: try Casa Digital first, fall back to these. */
const cases: Record<string, CaseStudy> = {
  [upvioPlatform.slug]: upvioPlatform,
};
```

- [ ] **Step 5: Run everything**

Run: `npm test && npm run lint && npx tsc --noEmit`
Expected: 7 tests pass; no lint or type errors.

- [ ] **Step 6: Commit**

```bash
git add content/cases/upvio-platform.ts content/get-case.ts tests/content.test.ts
git commit -m "Add Upvio Platform case study content"
```

---

### Task 5: Build and browser verification

**Files:** none (verification only; fix issues in the files above if any are found).

- [ ] **Step 1: Production build**

Run: `npm run build`
Expected: success; `/work/[slug]` prerendered for all 6 slugs.

- [ ] **Step 2: Dev preview**

Start the dev server with the `preview_start` tool (the config is in `.claude/launch.json`), then check:
- `/`: the Work list shows 3 Upvio rows with their tracks, followed by Automaise, Public Mint and Unimoney.
- `/work/upvio-platform`: header, facts, 3 stats (2 dashed placeholders), 8 numbered sections, dashed image and diagram placeholders, the link to scheduling, and a Next case of "Upvio AI — Scheduling & Resource Model".
- `/work/automaise`: the old placeholder body and a Next case link.
- The console has no errors.

- [ ] **Step 3: Mobile**

Resize to 375px (`resize_window` preset `mobile`) and check `/work/upvio-platform`: facts render 2×2, stats stack, section labels sit above the content, and `document.documentElement.scrollWidth <= 375`.

- [ ] **Step 4: Production hides placeholders**

After `npm run build`, inspect the prerendered HTML. The captions of unfilled slots and the placeholder stat labels must be absent (React may insert `<!-- -->` between text nodes, so grep for whole caption strings rather than the `kind — label` pattern):

```bash
grep -c "The product before the redesign\|Information architecture, before and after\|Clinics or organisations on the platform" .next/server/app/work/upvio-platform.html
```

Expected: `0`. As a control, `grep -c "A capable engine nobody had designed" .next/server/app/work/upvio-platform.html` should be `1` or more.

- [ ] **Step 5: Screenshot for the user**

Take desktop and mobile screenshots of `/work/upvio-platform` as proof.
