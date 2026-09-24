import type { ComponentType } from "react";
import type { DiagramId } from "@/content/case-types";
import { AiAroundTheConsultationDiagram } from "./diagrams/ai-around-the-consultation";
import { AppointmentLifecycleDiagram } from "./diagrams/appointment-lifecycle";
import { DocumentationFlowDiagram } from "./diagrams/documentation-flow";
import { IaBeforeAfterDiagram } from "./diagrams/ia-before-after";
import { PlatformMapDiagram } from "./diagrams/platform-map";
import { ServiceLocationStaffDiagram } from "./diagrams/service-location-staff";

/** Diagrams built in code, in SVG or HTML. A missing entry renders as a placeholder. */
export const diagrams: Partial<Record<DiagramId, ComponentType>> = {
  "service-location-staff": ServiceLocationStaffDiagram,
  "ai-around-the-consultation": AiAroundTheConsultationDiagram,
  "ia-before-after": IaBeforeAfterDiagram,
  "platform-map": PlatformMapDiagram,
  "appointment-lifecycle": AppointmentLifecycleDiagram,
  "documentation-flow": DocumentationFlowDiagram,
};
