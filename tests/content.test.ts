import { test } from "node:test";
import assert from "node:assert/strict";
import { groupSections } from "../content/group-sections.ts";
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
