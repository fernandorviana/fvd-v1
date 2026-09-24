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
    { value: "10+", label: "Research sessions: clinic interviews across three roles, and guided sessions with clinicians" },
    { value: "[N]", label: "Clinics using the AI features", placeholder: true },
  ],
  blocks: [
    { type: "section", label: "01 — Context", title: "Technology without a product" },
    {
      type: "paragraph",
      text: "When I joined, Upvio already had its eye on a multimodal AI that could read vital signs from camera and voice. The technology was still in development, and the company had a stake in it, so it was on the table from the start. What didn't exist was a product: no use cases, no place for it to live in the platform, and no answer to the first question a clinician would ask: what is this for?",
    },
    {
      type: "paragraph",
      text: "My job was to make it a product, and to make it part of ours: to find where it belonged in a consultation, in the platform and in the workflows around both, and then to define what AI should do across the rest of the product.",
    },

    { type: "section", label: "02 — Research", title: "What clinicians want help with" },
    {
      type: "paragraph",
      text: "I wrote an interview guide for the three roles that run a practice (practitioner, manager and front desk) and ran five interviews at a multidisciplinary clinic with 20 employees and around 80 practitioners. Its founder is also a clinician, so I interviewed her several times and kept a line open to her for the questions that came up later, which turned a study into continuous access to a real practice. The clinic was young, well organised and large enough that I could reach people in very different roles.",
    },
    {
      type: "paragraph",
      text: "I also ran around six guided sessions with freelance clinicians, watching them work through the app, the designs and the prototypes, and surveyed users about how they were using the product. In parallel I studied how other products handled clinical documentation and AI: practice software like Jane, SimplePractice, Carepatron and PowerDiary, AI scribes like Heidi Health, Autonotes, Autoscribe and Nabla Copilot, and general-purpose transcription like Otter, to see what changes when a tool is built for a consultation rather than a meeting.",
    },
    { type: "paragraph", text: "The findings pointed somewhere other than where the technology was pointing:" },
    {
      type: "list",
      items: [
        "Notes lived in paper notebooks. Reading back what a patient said two years ago was close to impossible.",
        "Typing during a session breaks the silence that therapy depends on. In-person consultations were deliberately technology-free.",
        "The painful part of the job is everything around the consultation: progress notes, referrals, reports and insurance paperwork.",
        "Expression analysis was welcome, but as a report after the session. During the session it would be a distraction.",
        "Clinic owners were stitching together numbers from several tools by hand to understand how the business was doing.",
        "The front desk had its own paperwork: payments reconciled by hand against bank statements, the most time-consuming task in the practice, and patients matched to practitioners over the phone. That is where the administrative automation in the wider layer came from.",
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
      text: "The first is a measurement. Before a consultation, a clinician checks pulse, breathing and blood pressure. Reading those signs from camera and voice moves that check anywhere the patient happens to be: into a telehealth appointment, into the minutes before one, into follow-up between visits. Nothing about it is specific to mental health. The technology was being built as a capability in its own right, which is what made it fit general practice and triage as much as therapy. What I owned was where it lived: how a reading reaches a clinician, how it sits in a consultation and in the record, and how it feeds the Human Insights layer.",
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
      text: "So AI would do what clinicians like least, the protocol documentation: notes, referrals, prescriptions, exam requests and reports. On top of that it would offer observations and suggestions drawn from the session, which is support for a clinical decision rather than clerical work. It never volunteers any of it: during a consultation it answers only if the clinician asks, and in therapy its reading of the session waits until the session is over. What matters in that hour is the person in the room.",
    },
    {
      type: "diagram",
      id: "ai-consultation",
      caption: "Where AI belongs around a consultation, as designed: what the patient, the clinician and the AI each do",
    },
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

    { type: "section", label: "04 — Strategy", title: "One layer, two audiences" },
    {
      type: "paragraph",
      text: "Vitals AI and Empathic AI point at different practices: vitals at general medicine, emotional signals at mental health. Human Insights AI was the layer above them, living inside the platform and fed mostly by what those two could read.",
    },
    {
      type: "paragraph",
      text: "That layer was meant to do more than notes and templates. Reading a consultation well enough produces structure, and structure is what lets software help a clinician think, including about a diagnosis, under the same rule as everything else: only when asked.",
    },
    {
      type: "paragraph",
      text: "Which raised the strategic question I spent much of this work on: aim the platform at mental health, where most of our customers were, or keep it general enough for every kind of practice. The choice reached everything, from the language in the interface to which signals were worth surfacing at all. Underneath it we kept a cheaper option open, which was selling the two capabilities as standalone APIs. That is the path the company eventually took.",
    },

    { type: "section", label: "05 — Vitals AI", title: "A check-up that travels" },
    {
      type: "paragraph",
      text: "I designed the product layer around the existing technology: where a scan happens, how the readings appear during a remote consultation, how they land in the patient record, and how they are reviewed afterwards. The readings carry their own uncertainty, and they sit beside the rest of the record rather than in a separate AI widget.",
    },
    { type: "subheading", text: "The scan" },
    {
      type: "paragraph",
      text: "The scan needs nothing but a camera and a moment, so it fits wherever a check-up is useful: taken by the patient before an appointment so the clinician starts with numbers already in hand, or repeated between visits to follow someone over time. That is also what made it portable beyond our own platform.",
    },
    {
      type: "image",
      alt: "Vitals AI scan: the patient in front of the camera, with guidance and a progress indicator",
      caption: "The scan: a camera, a moment, and guidance while it reads",
      width: "text",
      source: "figma",
    },
    { type: "subheading", text: "During a consultation" },
    {
      type: "paragraph",
      text: "In a telehealth appointment the readings appear beside the call, next to the notes and the record the clinician already has open. Each value shows how good the reading was, and none of them is presented as if it came from a cuff or an oximeter.",
    },
    {
      type: "image",
      alt: "Telehealth call with Vitals AI readings and their quality beside the video",
      caption: "Readings beside the call, each with the quality of the signal behind it",
      width: "wide",
      source: "figma",
    },
    { type: "subheading", text: "In the record" },
    {
      type: "paragraph",
      text: "After the consultation, the readings land in the patient record with the rest of the history, where the clinician reviews them and follows them from one visit to the next.",
    },
    {
      type: "image",
      alt: "Patient record with Vitals AI readings over time",
      caption: "Vitals in the record, followed across visits",
      width: "wide",
      source: "figma",
    },

    { type: "section", label: "06 — Deep dive", title: "Documentation: from consultation to signed note" },
    {
      type: "paragraph",
      text: "This is where the research pointed, so this is where most of the design went. It builds on the clinical notes I had designed for the platform: templates per specialty, privacy per field, a note tied to its appointment. The AI fills that structure in.",
    },
    { type: "link", href: "/work/upvio-platform", text: "Read the clinical notes deep dive in the Platform case" },
    {
      type: "paragraph",
      text: "Before designing it, I studied the AI scribes clinicians were starting to try (Heidi Health, Autonotes, Autoscribe and Nabla Copilot) next to general transcription like Otter. They showed what a clinician already expects, a note in a known format a few minutes after the session, and where they stopped: at the edge of the note, outside the record and the rest of the practice.",
    },
    { type: "diagram", id: "documentation-flow", caption: "From consultation to signed note: who acts at each step" },
    { type: "subheading", text: "Consent and recording" },
    {
      type: "paragraph",
      text: "Every session starts with the patient's consent, because the input is their face, voice and words. Then recording starts, and the clinician works as they always have: taking their own notes as free text, dictating, or filling in a template, or not writing at all.",
    },
    {
      type: "image",
      alt: "Consent request before a session, then the consultation with recording on",
      caption: "Consent first, then a recording that stays out of the way",
      width: "wide",
      source: "figma",
    },
    { type: "subheading", text: "From transcript to draft" },
    {
      type: "paragraph",
      text: "After the appointment the recording becomes a transcript, and the transcript, together with whatever the clinician wrote, becomes a draft in the template they chose. The AI places what was said in the fields where it belongs, so the draft reads like the clinician's own note in their own format.",
    },
    {
      type: "image",
      alt: "Transcript on one side and the draft note in the chosen template on the other",
      caption: "The transcript and the draft it became, side by side",
      width: "wide",
      source: "figma",
    },
    {
      type: "callout",
      text: "The AI writes the draft. The clinician signs the note.",
    },
    { type: "subheading", text: "Review and sign-off" },
    {
      type: "paragraph",
      text: "The clinician reads the draft, edits it and accepts it. Nothing reaches the record on its own, and the note keeps the privacy of each field, so what the patient can see is still the clinician's decision.",
    },
    {
      type: "image",
      alt: "Draft note under review, with edits and a sign-off action",
      caption: "Review and sign-off: the note is the clinician's",
      width: "text",
      source: "figma",
    },
    { type: "subheading", text: "What else comes out of a session" },
    {
      type: "paragraph",
      text: "From the same material come referrals and reports, markers for the moments a therapist wants to find again, a plain-language summary and treatment plan for the patient, shared in the portal or as a PDF, and a recap that brings back the last session before the next one starts.",
    },
    {
      type: "image",
      alt: "Patient-facing summary and treatment plan, and a recap of the last session",
      caption: "A summary for the patient, and a recap for the next session",
      width: "wide",
      source: "figma",
    },
    {
      type: "paragraph",
      text: "The wider layer (assisted diagnosis, AI woven through the rest of the platform, automation of administrative work) was researched and designed in full and implemented in part. Building it all was a large investment, and the company was weighing that decision when my time there ended.",
    },

    { type: "section", label: "07 — Empathic AI", title: "A second set of eyes on the session" },
    {
      type: "paragraph",
      text: "Empathic AI came out of product strategy work: the same multimodal reading, aimed at emotional signals and at mental health practice. Reading tone, expression and emotional shifts is clinical information, and I designed it as support for the clinician's judgement. No therapist can hold perfect attention on every cue for an hour, several times a day.",
    },
    {
      type: "paragraph",
      text: "It offers observations, not diagnoses, and the clinician decides what they mean. And it waits until the session is over, because a signal shown mid-session would pull the therapist away from the person in front of them.",
    },
    { type: "subheading", text: "Moments that matter" },
    {
      type: "paragraph",
      text: "After a session, the report marks the moments where something shifted and lets the clinician jump straight back to them in the recording and the transcript, instead of reconstructing the hour from memory.",
    },
    {
      type: "image",
      alt: "Session report with marked moments on a timeline, linked to the transcript",
      caption: "Marked moments: back to the minute something shifted",
      width: "wide",
      source: "figma",
    },
    { type: "subheading", text: "Across sessions" },
    {
      type: "paragraph",
      text: "It follows how someone's emotional state moves across sessions rather than within one. Over a long treatment, that is the material a clinician uses to decide whether an approach is working.",
    },
    {
      type: "image",
      alt: "Emotional state tracked across a series of sessions",
      caption: "Emotional shifts across sessions, not only within one",
      width: "wide",
      source: "figma",
    },
    { type: "subheading", text: "What was said and what was shown" },
    {
      type: "paragraph",
      text: "It surfaces signals that contradict what was said out loud: a patient who says they are fine while their expression says otherwise. It points at the moment and leaves the reading of it to the clinician.",
    },
    {
      type: "image",
      alt: "A transcript passage flagged where expression and words disagree",
      caption: "Where the words and the expression disagree",
      width: "text",
      source: "figma",
    },
    {
      type: "paragraph",
      text: "It was built by an external engineer. I did the design and gave him the implementation guidelines directly, which meant writing down what the technology had to produce in order to be useful in a consultation.",
    },

    { type: "section", label: "08 — Demo data", title: "Showing clinical AI without using real patients" },
    {
      type: "paragraph",
      text: "Demonstrating this kind of AI is a problem in itself: you cannot show a real consultation. I wrote a patient and a practitioner profile and scripted three consecutive sessions between them, with the emotional beats a therapist would work with. Recorded, they became demo material that shows what the AI produces without exposing anyone's data.",
    },

    { type: "section", label: "09 — Outcomes", title: "In production, and then in pieces" },
    {
      type: "paragraph",
      text: "Vitals AI shipped to production, and Empathic AI followed. By the time I left, the University of Florida was evaluating and researching Vitals AI, with Empathic AI next in line, while we were still designing and implementing the wider layer.",
    },
    {
      type: "paragraph",
      text: "Upvio later split the platform up and sold these capabilities as APIs for other products to build on. I designed the capabilities to stand on their own, and they do. I would rather they had been both: a product of our own and a building block for others.",
    },

    { type: "section", label: "10 — What I learned", title: "Design ahead of delivery" },
    {
      type: "list",
      items: [
        "Point the technology at the right problem. The AI could read a face; what clinicians wanted was their paperwork back. Research is what turned an impressive capability into a useful product.",
        "Trust is a design material. Showing uncertainty, separating estimated from measured, and leaving the clinician the last word did more for adoption than any amount of accuracy claims.",
        "Restraint is a feature. Deciding where AI should not appear, which was during the consultation itself, shaped the product as much as deciding where it should.",
        "Design can run too far ahead of delivery. I had a large body of designed and researched work waiting on an engineering team that was behind, and some of it was never built the way it was designed. Now I pace design to what a team can absorb, and I keep the finished work organised enough for whoever picks it up next.",
      ],
    },
  ],
};
