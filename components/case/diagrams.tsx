import type { ComponentType } from "react";
import type { DiagramId } from "@/content/case-types";
import { AiConsultationDiagram } from "./diagrams/ai-consultation";
import { AppointmentLifecycleDiagram } from "./diagrams/appointment-lifecycle";
import { DocumentationFlowDiagram } from "./diagrams/documentation-flow";
import { DomainRulesDiagram } from "./diagrams/domain-rules";
import { IaBeforeAfterDiagram } from "./diagrams/ia-before-after";
import { PlatformMapDiagram } from "./diagrams/platform-map";
import { SchedulingBeforeAfterDiagram } from "./diagrams/scheduling-before-after";
import { ServiceLocationStaffDiagram } from "./diagrams/service-location-staff";
import { TelehealthLayersDiagram } from "./diagrams/telehealth-layers";

/** Diagrams built in code, in SVG or HTML. A missing entry renders as a placeholder. */
export const diagrams: Partial<Record<DiagramId, ComponentType>> = {
  "service-location-staff": ServiceLocationStaffDiagram,
  "scheduling-before-after": SchedulingBeforeAfterDiagram,
  "domain-rules": DomainRulesDiagram,
  "telehealth-layers": TelehealthLayersDiagram,
  "ai-consultation": AiConsultationDiagram,
  "ia-before-after": IaBeforeAfterDiagram,
  "platform-map": PlatformMapDiagram,
  "appointment-lifecycle": AppointmentLifecycleDiagram,
  "documentation-flow": DocumentationFlowDiagram,
};
