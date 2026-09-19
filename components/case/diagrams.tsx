import type { ComponentType } from "react";
import type { DiagramId } from "@/content/case-types";
import { ServiceLocationStaffDiagram } from "./diagrams/service-location-staff";

/** SVG diagrams built in code. A missing entry renders as a placeholder. */
export const diagrams: Partial<Record<DiagramId, ComponentType>> = {
  "service-location-staff": ServiceLocationStaffDiagram,
};
