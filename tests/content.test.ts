import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync } from "node:fs";
import type { CaseStudy } from "../content/case-types.ts";
import { groupSections } from "../content/group-sections.ts";
import { getCase } from "../content/get-case.ts";
import { projects } from "../content/projects.ts";

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

const caseDir = new URL("../content/cases/", import.meta.url);

type CaseFile = { file: string; case: CaseStudy };

/** Loads every case, keeping the filename it came from so slug/filename can be cross-checked. */
async function loadCaseFiles(): Promise<CaseFile[]> {
  const files = readdirSync(caseDir).filter((file) => file.endsWith(".ts"));
  const perFile = await Promise.all(
    files.map(async (file) => {
      const mod = await import(new URL(file, caseDir).href);
      return (Object.values(mod) as CaseStudy[]).map((c) => ({ file, case: c }));
    }),
  );
  return perFile.flat();
}

async function loadCases(): Promise<CaseStudy[]> {
  return (await loadCaseFiles()).map((entry) => entry.case);
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

test("every case file is registered in get-case.ts", async () => {
  for (const c of await loadCases()) {
    assert.equal(await getCase(c.slug), c, `${c.slug} is not registered in content/get-case.ts`);
  }
});

test("each case file's slug matches its filename", async () => {
  for (const { file, case: c } of await loadCaseFiles()) {
    const expectedSlug = file.replace(/\.ts$/, "");
    assert.equal(c.slug, expectedSlug, `${file} exports a case with slug "${c.slug}"`);
  }
});
