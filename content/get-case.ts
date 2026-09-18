import type { CaseStudy } from "./case-types";

/** Registry of written cases. Later: try Casa Digital first, fall back to these. */
const cases: Record<string, CaseStudy> = {};

export async function getCase(slug: string): Promise<CaseStudy | undefined> {
  return cases[slug];
}
