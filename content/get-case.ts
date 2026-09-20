import type { CaseStudy } from "./case-types.ts";
import { upvioHumanInsights } from "./cases/upvio-human-insights.ts";
import { upvioPlatform } from "./cases/upvio-platform.ts";
import { upvioScheduling } from "./cases/upvio-scheduling.ts";

/** Registry of written cases. Later: try Casa Digital first, fall back to these. */
const cases: Record<string, CaseStudy> = {
  [upvioPlatform.slug]: upvioPlatform,
  [upvioScheduling.slug]: upvioScheduling,
  [upvioHumanInsights.slug]: upvioHumanInsights,
};

export async function getCase(slug: string): Promise<CaseStudy | undefined> {
  return cases[slug];
}
