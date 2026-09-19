import type { CaseBlock } from "./case-types.ts";

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
