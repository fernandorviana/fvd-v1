/**
 * One consultation with Human Insights AI, as designed (Upvio Human Insights case).
 * A swimlane for the patient, the clinician and the AI. During the consultation the AI lane is deliberately
 * quiet: it records and answers only if asked.
 */

import { Swimlane, type SwimlaneStage } from "./swimlane";

type Lane = "Patient" | "Clinician" | "AI";
/** The capability a step belongs to: the two readings and the layer above them. */
type Tag = "Vitals AI" | "Empathic AI" | "Human Insights";

const lanes: Lane[] = ["Patient", "Clinician", "AI"];

function step(lane: Lane, text: string, tag?: Tag, quiet?: boolean) {
  return { lane, text, tag, quiet };
}

const stages: SwimlaneStage<Lane>[] = [
  {
    title: "Before",
    steps: [
      step("Patient", "Takes a Vitals scan, wherever they are", "Vitals AI"),
      step("Patient", "Consents to the session being recorded", "Human Insights"),
      step("Clinician", "Starts with the readings already in hand", "Vitals AI"),
      step("AI", "Reads vital signs from camera and voice", "Vitals AI"),
      step("AI", "Recaps the last session", "Human Insights"),
    ],
  },
  {
    title: "During",
    steps: [
      step("Patient", "Nothing between them and the clinician"),
      step("Clinician", "Takes notes their own way, or none at all", "Human Insights"),
      step("Clinician", "In telehealth, sees the readings beside the call", "Vitals AI"),
      step("AI", "Records, and captures signals quietly", "Human Insights", true),
      step("AI", "Answers only if the clinician asks", "Human Insights", true),
    ],
  },
  {
    title: "After",
    steps: [
      step("Patient", "Gets a plain-language summary and treatment plan in the portal", "Human Insights"),
      step("Clinician", "Reviews, edits and signs the note", "Human Insights"),
      step("Clinician", "Jumps back to the moments that mattered", "Empathic AI"),
      step("Clinician", "Asks for suggestions, diagnosis included", "Human Insights"),
      step("AI", "Drafts the note in the clinician's template", "Human Insights"),
      step("AI", "Drafts referrals, reports and prescriptions", "Human Insights"),
      step("AI", "Marks the moments where something shifted", "Empathic AI"),
    ],
  },
  {
    title: "Between visits",
    steps: [
      step("Patient", "Repeats the scan", "Vitals AI"),
      step("Clinician", "Follows the readings from visit to visit", "Vitals AI"),
      step("Clinician", "Sees how emotional state moves across sessions", "Empathic AI"),
    ],
  },
];

export function AiConsultationDiagram() {
  return <Swimlane lanes={lanes} stages={stages} />;
}
