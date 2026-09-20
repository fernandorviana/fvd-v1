import type { CaseStudy } from "../case-types";

export const upvioHumanInsights: CaseStudy = {
  slug: "upvio-human-insights",
  subtitle:
    "Upvio had multimodal AI that could read vital signs from a camera, and no product around it. I turned it into two things: a check-up that works wherever the patient is, and an AI layer that takes documentation off the clinician's desk without getting in the way of the session.",
  facts: {
    role: "Founding Designer, Head of Design",
    timeline: "Jan 2023 — Mar 2025",
    scope: "AI product strategy, research, clinical workflows",
    team: "Solo designer, 3–5 engineers, an external emotional-AI engineer, C-level",
  },
  stats: [
    { value: "2", label: "AI capabilities shipped to production: Vitals and Empathic" },
    { value: "[N]", label: "Interviews with clinicians, clinic owners and front-desk staff", placeholder: true },
    { value: "[N]", label: "Clinics using the AI features", placeholder: true },
  ],
  blocks: [
    { type: "section", label: "01 — Context", title: "Technology without a product" },
    {
      type: "paragraph",
      text: "Upvio had built multimodal AI that could read vital signs from a camera and voice during a consultation. What it didn't have was a product: no use cases, no place for the technology to live in the platform, and no answer to the question a clinician would actually ask, which is what this is for.",
    },
    {
      type: "paragraph",
      text: "My job was to turn that technology into something clinicians would use and trust, and to define what AI should do across the rest of the platform.",
    },

    { type: "section", label: "02 — Research", title: "What clinicians actually want help with" },
    {
      type: "paragraph",
      text: "I wrote an interview guide for the three roles that run a practice — practitioner, manager and front desk — and ran interviews at a multidisciplinary clinic with 20 employees and around 80 practitioners. In parallel I studied how other products in the space handled clinical documentation and AI: Jane, Carepatron, PowerDiary and Autonotes.",
    },
    { type: "paragraph", text: "The findings pointed somewhere other than where the technology was pointing:" },
    {
      type: "list",
      items: [
        "Notes lived in paper notebooks. Reading back what a patient said two years ago was close to impossible.",
        "Typing during a session breaks the silence that therapy depends on. In-person consultations were deliberately technology-free.",
        "The painful part of the job isn't the consultation, it's everything around it: progress notes, referrals, reports and insurance paperwork.",
        "Expression analysis was welcome, but as a report after the session. During the session it would be a distraction.",
        "Clinic owners were stitching together numbers from several tools by hand to understand how the business was doing.",
      ],
    },
    {
      type: "image",
      alt: "Research artefacts: interview guide, synthesis and competitor analysis",
      caption: "Interview guide, synthesis and competitor analysis",
      width: "wide",
      source: "figma",
    },

    { type: "section", label: "03 — Two problems", title: "A measurement, and a workload" },
    {
      type: "paragraph",
      text: "The research and the technology pointed at two different problems, and I designed for both rather than folding one into the other.",
    },
    {
      type: "paragraph",
      text: "The first is a measurement. Before a consultation, a clinician takes your pulse, your breathing, your blood pressure. Reading those signs from a camera and a voice moves that check anywhere the patient happens to be: into a telehealth appointment, into the minutes before one, into follow-up between visits. Nothing about it is specific to mental health, which is why we planned it for general practice and triage as much as for therapy, and why it could stand on its own as a capability another product might buy.",
    },
    {
      type: "paragraph",
      text: "The second is a workload. Clinicians don't want help with listening to a patient; they want their paperwork back.",
    },
    {
      type: "callout",
      text: "AI takes the paperwork. During the consultation, it gets out of the way.",
    },
    {
      type: "paragraph",
      text: "So AI would do what clinicians like least, the protocol documentation: notes, referrals, prescriptions, exam requests and reports. On top of that it would offer observations and suggestions drawn from the session, which is support for a clinical decision rather than clerical work. Both arrive after the session by default, and during one the AI only speaks when the clinician asks. What matters in the room is the person in it.",
    },
    { type: "diagram", id: "ai-around-the-consultation", caption: "Where AI belongs: before, during and after the consultation" },
    { type: "paragraph", text: "Four principles held both halves together:" },
    {
      type: "list",
      items: [
        "The clinician is always in control: AI proposes, the clinician reviews, edits and accepts. Nothing reaches a record on its own.",
        "Estimated is not measured: AI-derived values are never presented as equivalent to a real measurement.",
        "Show the quality of the reading, so a clinician knows when to trust a signal and when not to.",
        "Consent and privacy come first, since the input is a patient's face, voice and words.",
      ],
    },

    { type: "section", label: "04 — Vitals AI", title: "A check-up that travels" },
    {
      type: "paragraph",
      text: "I designed the product layer around the existing technology: where a scan happens, how the readings appear during a remote consultation, how they land in the patient record, and how they are reviewed afterwards. The readings carry their own uncertainty, and they sit beside the rest of the record rather than in a separate AI widget.",
    },
    {
      type: "paragraph",
      text: "Because the scan needs nothing but a camera and a moment, it fits wherever a check-up is useful: taken by the patient before an appointment so the clinician starts with numbers already in hand, taken during a telehealth consultation, or repeated between visits to follow someone over time. That is also what made it portable beyond our own platform.",
    },
    {
      type: "image",
      alt: "Vitals AI: scan, readings during a consultation and in the patient record",
      caption: "Vitals AI inside the consultation and the record",
      width: "wide",
      source: "figma",
    },

    { type: "section", label: "05 — Documentation", title: "The paperwork layer" },
    {
      type: "paragraph",
      text: "This is where the research pointed, so this is where most of the design went: a transcript turned into a chosen template, structured progress notes, referrals and reports generated from what was discussed, markers for the moments a therapist wants to find again, and a summary that brings back the last session before the next one starts.",
    },
    {
      type: "paragraph",
      text: "The wider layer — assisted diagnosis, AI woven through the rest of the platform, automation of administrative work — was researched and designed in full and implemented in part. Building it all was a large investment, and the company was weighing that decision when my time there ended.",
    },
    {
      type: "image",
      alt: "Transcript turned into a note template, with markers and a session summary",
      caption: "From transcript to a structured note",
      width: "wide",
      source: "figma",
    },

    { type: "section", label: "06 — Demo data", title: "Showing clinical AI without using real patients" },
    {
      type: "paragraph",
      text: "Demonstrating this kind of AI is a problem in itself: you cannot show a real consultation. I wrote a client and a practitioner profile and scripted three consecutive sessions between them, with the emotional beats a therapist would actually work with. Recorded, they became demo material that shows what the AI produces without exposing anyone's data.",
    },

    { type: "section", label: "07 — Empathic AI", title: "A second set of eyes on the session" },
    {
      type: "paragraph",
      text: "Empathic AI came out of product strategy work: the same multimodal reading, aimed at emotional signals and at mental health practice. It was never only a faster route to notes. Reading tone, expression and emotional shifts is clinical information, and I designed it as support for the clinician's judgement.",
    },
    {
      type: "paragraph",
      text: "No therapist can hold perfect attention on every cue for an hour, several times a day. The design marks the moments that matter in a session and lets the clinician jump straight back to them, follows how someone's emotional state moves across sessions rather than within one, and surfaces signals that contradict what was said out loud. Over a long treatment, that is the material a clinician uses to decide whether an approach is working.",
    },
    {
      type: "paragraph",
      text: "It stays support, never a verdict. It offers observations, not diagnoses, and the clinician decides what they mean. By default it waits until the session is over, and during a session it only speaks when asked.",
    },
    {
      type: "paragraph",
      text: "It was built by an external engineer. I did the design and gave him the implementation guidelines directly, which meant writing down what the technology had to produce in order to be useful in a consultation.",
    },
    {
      type: "image",
      alt: "Empathic AI surface in the platform",
      caption: "Where Empathic AI lives in the platform",
      width: "wide",
      source: "figma",
    },

    { type: "section", label: "08 — Outcomes", title: "In production, and then in pieces" },
    {
      type: "paragraph",
      text: "Vitals AI shipped to production, and Empathic AI followed. By the time I left, the University of Florida was evaluating and researching Vitals AI, with Empathic AI next in line, while we were still designing and implementing the wider layer.",
    },
    {
      type: "paragraph",
      text: "Upvio later split the platform up and sold these capabilities as APIs for other products to build on. That the capability could stand on its own was the point of designing it that way, though I would rather it had done both: a product of our own and a building block for others. The Human Insights work now lives as the building block.",
    },

    { type: "section", label: "09 — What I learned", title: "Design ahead of delivery" },
    {
      type: "list",
      items: [
        "Point the technology at the right problem. The AI could read a face; what clinicians wanted was their paperwork back. Research is what turned an impressive capability into a useful product.",
        "Trust is a design material. Showing uncertainty, separating estimated from measured, and leaving the clinician the last word did more for adoption than any amount of accuracy claims.",
        "Restraint is a feature. Deciding where AI should not appear, which was during the consultation itself, shaped the product as much as deciding where it should.",
        "Design can run too far ahead of delivery. I had a large body of designed and researched work waiting on an engineering team that was behind, and some of it was never built the way it was designed. Now I pace design to what a team can actually absorb, and I keep the finished work organised enough for whoever picks it up next.",
      ],
    },
  ],
};
