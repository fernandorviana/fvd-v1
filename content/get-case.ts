import type { CaseStudy } from "./case-types.ts";
import { upvioPlatform } from "./cases/upvio-platform.ts";

/** Registry of written cases. Later: try Casa Digital first, fall back to these. */
const cases: Record<string, CaseStudy> = {
  [upvioPlatform.slug]: upvioPlatform,
};

export async function getCase(slug: string): Promise<CaseStudy | undefined> {
  return cases[slug];
}
