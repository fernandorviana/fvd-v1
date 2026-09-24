/**
 * One online consultation, end to end (Upvio platform case).
 * A swimlane: stages run top to bottom, one lane per persona, and every step is tagged with the product area
 * it happens in. On small screens the lanes collapse into a list under each stage, named by persona.
 */

import { areas, type AreaId } from "./platform-areas";

type Lane = "Patient" | "Front desk" | "Practitioner" | "Manager, admin";
type Step = { lane: Lane; text: string; area: AreaId };
type Stage = { title: string; steps: Step[] };

const lanes: Lane[] = ["Patient", "Front desk", "Practitioner", "Manager, admin"];

const stages: Stage[] = [
  {
    title: "Booking",
    steps: [
      { lane: "Patient", text: "Books the consultation in the portal", area: "portal" },
      { lane: "Front desk", text: "Or books it for them in the calendar", area: "scheduling" },
      { lane: "Practitioner", text: "Their availability sets which times can be booked", area: "scheduling" },
    ],
  },
  {
    title: "Before",
    steps: [
      { lane: "Patient", text: "Pays in advance and gets the access link", area: "billing" },
      { lane: "Patient", text: "Fills in the intake form", area: "forms" },
      { lane: "Front desk", text: "Sees payment and invoice state on the appointment", area: "billing" },
      { lane: "Practitioner", text: "Finds the intake answers in the patient's record", area: "records" },
    ],
  },
  {
    title: "Consultation",
    steps: [
      { lane: "Patient", text: "Waits in the waiting room", area: "waitingRoom" },
      { lane: "Patient", text: "Joins the video call", area: "telehealth" },
      { lane: "Front desk", text: "Sees who is waiting", area: "waitingRoom" },
      { lane: "Practitioner", text: "Admits the patient", area: "waitingRoom" },
      { lane: "Practitioner", text: "Consults with the notes and record at hand", area: "telehealth" },
      { lane: "Manager, admin", text: "Sees who is in a call and who is waiting", area: "dashboards" },
    ],
  },
  {
    title: "After",
    steps: [
      { lane: "Patient", text: "Reads what the note shares with them, in the portal", area: "portal" },
      { lane: "Practitioner", text: "Writes the note, choosing what the patient sees", area: "notes" },
      { lane: "Manager, admin", text: "Sees revenue, no-shows and overdue payments", area: "dashboards" },
    ],
  },
];

const grid = "md:grid md:grid-cols-[6.5rem_repeat(4,minmax(0,1fr))] md:gap-x-5";
/** Each lane keeps its column on wide screens even when the lanes before it are empty in a stage. */
const laneColumn = ["md:col-start-2", "md:col-start-3", "md:col-start-4", "md:col-start-5"];

function StepItem({ step }: { step: Step }) {
  const area = areas[step.area];
  return (
    <li>
      <span className="block text-sm text-foreground">{step.text}</span>
      <span className="mt-1 block text-[11px] uppercase tracking-[0.12em] text-accent">
        {area.short ?? area.name}
      </span>
    </li>
  );
}

export function AppointmentLifecycleDiagram() {
  return (
    <div className="font-sans">
      <div aria-hidden="true" className={`hidden pb-3 ${grid}`}>
        <span />
        {lanes.map((lane) => (
          <span key={lane} className="text-xs uppercase tracking-[0.12em] text-muted">
            {lane}
          </span>
        ))}
      </div>

      <ol>
        {stages.map((stage) => (
          <li key={stage.title} className={`space-y-4 border-t border-line py-5 md:space-y-0 ${grid}`}>
            <h3 className="font-serif text-lg">{stage.title}</h3>
            {lanes.map((lane, i) => {
              const steps = stage.steps.filter((step) => step.lane === lane);
              if (!steps.length) return null;
              return (
                <div key={lane} className={laneColumn[i]}>
                  <p className="mb-1 text-[11px] uppercase tracking-[0.12em] text-muted md:sr-only">{lane}</p>
                  <ul className="space-y-4">
                    {steps.map((step) => (
                      <StepItem key={step.text} step={step} />
                    ))}
                  </ul>
                </div>
              );
            })}
          </li>
        ))}
      </ol>
    </div>
  );
}
