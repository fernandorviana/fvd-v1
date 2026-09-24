/**
 * One online consultation, end to end (Upvio platform case).
 * A swimlane of the personas it passes through, each step tagged with the product area it happens in.
 */

import { areas, type AreaId } from "./platform-areas";
import { Swimlane, type SwimlaneStage } from "./swimlane";

type Lane = "Patient" | "Front desk" | "Practitioner" | "Manager, admin";

const lanes: Lane[] = ["Patient", "Front desk", "Practitioner", "Manager, admin"];

function step(lane: Lane, text: string, area: AreaId) {
  return { lane, text, tag: areas[area].short ?? areas[area].name };
}

const stages: SwimlaneStage<Lane>[] = [
  {
    title: "Booking",
    steps: [
      step("Patient", "Books the consultation in the portal", "portal"),
      step("Front desk", "Or books it for them in the calendar", "scheduling"),
      step("Practitioner", "Their availability sets which times can be booked", "scheduling"),
    ],
  },
  {
    title: "Before",
    steps: [
      step("Patient", "Pays in advance and gets the access link", "billing"),
      step("Patient", "Fills in the intake form", "forms"),
      step("Front desk", "Sees payment and invoice state on the appointment", "billing"),
      step("Practitioner", "Finds the intake answers in the patient's record", "records"),
    ],
  },
  {
    title: "Consultation",
    steps: [
      step("Patient", "Waits in the waiting room", "waitingRoom"),
      step("Patient", "Joins the video call", "telehealth"),
      step("Front desk", "Sees who is waiting", "waitingRoom"),
      step("Practitioner", "Admits the patient", "waitingRoom"),
      step("Practitioner", "Consults with the notes and record at hand", "telehealth"),
      step("Manager, admin", "Sees who is in a call and who is waiting", "dashboards"),
    ],
  },
  {
    title: "After",
    steps: [
      step("Patient", "Reads what the note shares with them, in the portal", "portal"),
      step("Practitioner", "Writes the note, choosing what the patient sees", "notes"),
      step("Manager, admin", "Sees revenue, no-shows and overdue payments", "dashboards"),
    ],
  },
];

export function AppointmentLifecycleDiagram() {
  return <Swimlane lanes={lanes} stages={stages} />;
}
