import type { ComponentType } from "react";
import type { DiagramId } from "@/content/case-types";
import { AiAroundTheConsultationDiagram } from "./diagrams/ai-around-the-consultation";
import { DocumentationFlowDiagram } from "./diagrams/documentation-flow";
import { IaBeforeAfterDiagram } from "./diagrams/ia-before-after";
import { ServiceLocationStaffDiagram } from "./diagrams/service-location-staff";

/** SVG diagrams built in code. A missing entry renders as a placeholder. */
export const diagrams: Partial<Record<DiagramId, ComponentType>> = {
  "service-location-staff": ServiceLocationStaffDiagram,
  "ai-around-the-consultation": AiAroundTheConsultationDiagram,
  "ia-before-after": IaBeforeAfterDiagram,
  "documentation-flow": DocumentationFlowDiagram,
};
