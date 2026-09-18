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
