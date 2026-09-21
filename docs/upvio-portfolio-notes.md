# Upvio & Portfolio – Working Notes

These notes compile information for building a strong case study for Upvio (platform + Human Insights AI) and for shaping your overall portfolio.

---

## 1. Upvio – High-level context

- Company: Upvio AI – B2B healthcare management SaaS platform with integrated Human Insights AI tools for clinicians.[cite:1]
- Your role: First Designer & Head of Design.
  - Founding designer: product had never had a designer before.[cite:1][cite:5]
  - Ownership over: product design, UX, UI, design system, product strategy, UX research, AI integration, team/process alignment.[cite:1][cite:6]
- Product scope (current/mature state):
  - Telehealth.
  - Scheduling (multi-location, multi-staff, multi-service).[cite:1][file:7]
  - Custom forms.
  - Patient portal.
  - Complex patient records (multi-professional, long-term history, custom fields).[cite:1]
  - Teams and multiple roles.
  - Secure messaging.
  - Clinical notes.
  - Human Insights AI: AI Vitals, Empathic/Emotional AI, multimodal signals (camera, voice, video, facial expression, transcription/language) generating vitals, emotional signals, reports, and consultation notes.[cite:3][cite:4][cite:6]

### When you joined

- The platform did **not yet include**:
  - Notes.
  - Patient portal.
  - Complex patient records.
  - Telehealth.
  - Secure messaging.
  - Multiple roles/teams.
  - Robust custom forms.
  - Advanced scheduling.
- These capabilities were either missing or very rudimentary.
- You created or deeply redefined many of these capabilities end-to-end, while building the design foundations.[cite:1]

---

## 2. Major contributions – Platform (non-AI)

### 2.1 Design foundations

- Created the **entire UI design system** from scratch:
  - Typography, color tokens, spacing.
  - Component library for inputs, tables, cards, navigation, layouts.
  - Used consistently across scheduling, records, portal, messaging, telehealth, and later AI surfaces.[cite:1][cite:2]
- Redesigned the **UX end-to-end**:
  - Navigation.
  - Dashboards.
  - Primary flows (scheduling, consultation, documentation, patient-facing).
  - Mental model of the product.[cite:1][cite:2]

### 2.2 Major features you defined and designed

You either created from scratch or fundamentally redesigned:

- **Clinical notes** – structured flows and UI for documenting consultations.[cite:1]
- **Patient portal** – patient-facing surface for appointments, documents, selected record data and self-service interactions.[cite:1]
- **Complex patient records** – robust record structure supporting:
  - Long-term histories.
  - Multiple professionals.
  - Custom fields per specialty.
- **Telehealth** – experience for remote consultations within the platform.[cite:1]
- **Secure messaging** – safe communication between staff and, when appropriate, patients.[cite:1]
- **Roles & teams** – permissions and access models for different user types and organizational structures.[cite:1]
- **Custom forms** – flexible forms for intake, follow-up, feedback, etc., connected to records and workflows.[cite:1]
- **Improved scheduling** – moving from rudimentary scheduling to a guided, multi-resource model.[file:7]
- **Website assets & product story** – design and content assets to reformulate the marketing website and align it with the new product and Human Insights AI vision.[cite:1]

### 2.3 Resource & scheduling domain model

This is a key “product architecture” contribution.

- You designed and led adoption of a **Hierarchical Multi-Resource Scheduling Model**:[file:7]
  - Location as **aggregate root** (bounded context and consistency boundary).
  - Service, Location, Staff, Schedule with explicit dependency rules:
    - Services exist only in specific locations.
    - Services require qualified staff.
    - Staff works only in specific locations.
    - Schedules belong to locations and can be overlaid by staff-specific availability.
  - This creates a **Service–Location–Staff Dependency Graph** where each booking is a consistent combination of these entities.[file:7]
- You enforced **domain invariants**:
  - Invalid combinations cannot be persisted, even via APIs or integrations.
  - Examples:
    - No service without a valid location.
    - No staff assigned to services/locations where they don’t work.
    - No schedules without qualified staff or correct location.[file:7]
- You designed **guided and filtered configuration**:
  - As users select a service, the system automatically:
    - Filters valid locations.
    - Filters valid schedules.
    - Filters qualified and available staff.
    - Suggests or auto-assigns resources when appropriate.[file:7]
- Impact on UX:
  - Reduced cognitive load when configuring services, locations, schedules and staff.
  - Reduced configuration errors.
  - Faster setup of new services.
  - Higher confidence that bookings are always valid.[file:7]

### 2.4 Outcomes of the resource model

- The new domain model and UX:
  - **Reduced configuration support time** substantially.
  - Brought configuration errors **close to zero**.
  - Helped **attract more enterprise clients** with millions of end users and new investors.[cite:9][file:7]

---

## 3. Major contributions – Human Insights AI

### 3.1 Context

- Upvio AI includes advanced multimodal AI tools:
  - **AI Vitals** – AI scans using camera, voice, video, facial expressions and language/transcription to detect vital signs.[cite:3]
  - **Empathic/Emotional AI** – AI focused on emotional signals, especially relevant for mental health.[cite:6]
- When you joined, **Vitals AI existed only as technology under development** – there was no product, platform or concrete use cases around it.[cite:3]

### 3.2 Turning Vitals AI into product

- You designed the **product layer** for Vitals AI from scratch:
  - Dashboards to visualize vitals and signals.
  - Workflows for clinicians to use AI insights during and after consultations.
  - Integration points within the existing platform (consultation view, follow-up, records).[cite:3][cite:4]
- You defined how Vitals AI appears in the clinician’s experience:
  - During sessions – real-time vitals and signals.
  - After sessions – AI-generated summaries, consultation notes and reports.[cite:3]
- You ensured **transparency and control**:
  - Clinicians can review, edit and accept AI suggestions.
  - AI acts as an assistant, not an opaque authority.[cite:4]

### 3.3 Empathic AI and mental health

- **Empathic AI** emerged from product strategy work in collaboration with you:
  - Concept: a version of signal reading oriented to mental health contexts.
  - Focus on emotional tone, patterns, and signals relevant to mental health professionals.[cite:6]
- You designed:
  - A platform surface to **anchor the technology** – where Empathic AI lives and is accessed.
  - Features where both Vitals AI and Empathic AI, plus simpler AI use cases, become truly useful inside the platform.[cite:6]
- This work led to an integrated **Human Insights AI layer**:
  - AI is embedded in consultations, documentation and follow-up.
  - Clinicians see vitals and emotional signals in context, not as detached widgets.[cite:3][cite:4]

### 3.4 Outcomes & business shift

- Your work on platform + AI made Upvio a compelling Human Insights AI product for clinics and research partners (e.g. a University of Florida research partnership).[cite:1][cite:6]
- After you left, the business eventually shifted:
  - Maintaining such a large, vertically integrated platform was difficult.
  - The product was broken down and sold as APIs (e.g. Vitals AI, Empathic AI) for others to integrate in their projects.
  - The Human Insights capabilities you designed now live as building blocks rather than a single monolithic app.[cite:1]

---

## 4. Case study structure – Upvio Platform (non-AI)

Suggested sections for the platform case study:

1. **Context & role**
   - Upvio as healthcare practice management SaaS.
   - Your role as first designer & Head of Design.
   - Starting point: no design foundations, missing/rudimentary major features.

2. **Challenge (product + UX)**
   - Need to transform a technically mature but under-designed tool into a coherent, scalable platform.
   - Need to support multi-clinic, multi-service, multi-staff scenarios without overwhelming users.

3. **Design foundations**
   - UI design system.
   - New navigation and mental model.

4. **Major features**
   - Notes, portal, records, telehealth, messaging, roles, forms, scheduling.
   - Focus on clinical workflows and patient engagement.

5. **Domain & resource model**
   - Hierarchical Multi-Resource Scheduling Model.
   - Service–Location–Staff Dependency Graph.
   - Guided configuration, domain invariants.

6. **Process & collaboration**
   - Research (interviews, forms).
   - Prioritization and production pipelines.

7. **Outcomes**
   - Reduced configuration errors/support.
   - Improved onboarding/configuration speed.
   - Attraction of enterprise clients and investors.

---

## 5. Case study structure – Upvio Human Insights AI

Suggested sections for the AI case study:

1. **Context & role**
   - Upvio aiming to differentiate through AI.
   - Vitals AI existing only as technology when you joined.
   - Your role: productizing AI, integrating it into clinical workflows, defining Human Insights AI vision.

2. **Challenge**
   - Turn raw multimodal models into trustworthy tools for clinicians.
   - Balance innovation with clinical safety and transparency.

3. **Designing Vitals AI as product**
   - Dashboards and flows.
   - Integration in consultation, follow-up and records.

4. **Empathic AI for mental health**
   - Strategic rationale.
   - Platform surfaces and feature design.

5. **Human Insights AI layer**
   - How AI shows up across the platform.
   - Control, transparency, editing.

6. **Process & experimentation**
   - Research, prototyping, iteration.

7. **Outcomes & business evolution**
   - Partnerships, attractiveness as a Human Insights platform.
   - Later shift to API-based model.

---

## 6. Portfolio – high-level guidance

### 6.1 Structure of a strong senior portfolio PDF

- Capa & posicionamento.
- "Sobre" (who you are, what you solve, how you work).
- 3–4 case studies:
  - Upvio Platform (foundations + major features + domain model).
  - Upvio Human Insights AI (Vitals + Empathic AI).
  - Automaise (design system + foundations for AI automation).
  - Unimoney or another project for consumer/fintech/mobile amplitude.
- Página de "Trabalho selecionado" com galeria de projetos adicionais (Public Mint, Yastá, Capitalise, etc.).
- Informação prática: disponibilidade, experiência resumida, links.

### 6.2 What hiring managers look for (2026)

- Ability to connect design to business outcomes.
- Ownership of complex products (not just screens).
- Comfort with ambiguity and 0→1 work.
- Systems thinking (design systems, domain models).
- Experience with AI-assisted workflows and products.

---

## 7. Outcomes & impact – summary bullets for Upvio

Platform & domain model:

- Built design foundations and redesigned UX for a complex healthcare SaaS with multi-clinic, multi-service, multi-staff scenarios.[cite:1][file:7]
- Implemented a Hierarchical Multi-Resource Scheduling Model with Location as aggregate root and explicit Service–Location–Staff–Schedule dependencies, enforcing domain invariants and guided configuration.[file:7]
- Reduced configuration errors and support time significantly; helped attract enterprise clients with millions of end users and investors.[cite:9][file:7]

Human Insights AI:

- Turned raw multimodal AI models (Vitals AI) into usable product surfaces (dashboards, flows, reports) integrated in clinical workflows.[cite:3][cite:4]
- Co-defined and designed Empathic AI for mental health, anchoring it in the platform and integrating it alongside Vitals AI and other AI features.[cite:6]
- Helped shape Upvio's direction as a Human Insights AI platform and contributed to partnerships like the University of Florida research collaboration.[cite:1][cite:6]

---

*These notes are intended as a working document you can pass to Claude or other tools to generate case study pages, visual outlines, or refined portfolio copy.*

---

## 8. Confirmed facts (from working sessions)

- **Title & dates:** Founding Designer, Head of Design · Jan 2023 — Mar 2025.
- **Upvio is split into 3 case studies**, listed as independent entries: Platform & Foundations (`upvio-platform`), Scheduling & Resource Model (`upvio-scheduling`), Human Insights AI (`upvio-human-insights`, Vitals + Empathic together).
- **Team:** sole designer throughout. A second designer (asset creation) helped only briefly, following the visual line already set. Engineering team changed over time: 3 engineers at the start, 4 for most of the period, 5 at peak, with people joining and leaving. Worked directly with stakeholders: CEO, CTO, CMO, Head of Growth, Head of Compliance & Support, and occasionally the Sales Director.
- **Emotional AI (for the AI case):** worked directly with an external engineer building the emotional AI. Did the design and gave him implementation guidelines.
- **Foundations vs. features:** built a solid design system base as fast as possible so features could ship, then grew it component by component as needed. The early phase meant heavy workload, organisation and juggling: wireframes to speed up decisions and UX study, guiding developers, satisfying the CEO and CMO visually, and shipping new features and changes to existing ones in parallel.
- **Metrics:** the enterprise client with millions of indirect users is **ReachOut** (confirmed; on the CV as millions of parents and young people reached and 2M+ mental-health-related interactions). It is one of the clients there is data for; there were many more clients, so never present it as the only one. Phrase it as a client the product served, not as reach the design caused.
- **"Before" screenshots:** possibly a few; to be found.
- **Platform deep-dive feature:** undecided. Scheduling and AI integration were the strongest stories but live in their own cases.

### Platform case (confirmed)

- **Before:** the product was **Cogsworth**, a scheduling tool — basic calendar, client list, practitioner list, customisable forms, little else. The rename/transition to Upvio happened at the moment Fernando joined, with his arrival as part of the momentum. The name may be used publicly.
- **Role beyond design:** the company's organisation was the bottleneck. He pushed for a collaborative, shorter-cycle way of working and introduced design-thinking practices adapted to the context, acting as another stakeholder and a force for building something with market presence.
- **Design QA:** ran QA on implementation, categorising findings as UI/UX debt, bug or improvement and ranking them by criticality (P1–P5), producing a backlog engineering could work through.
- **Front desk (from the interview at the clinic):** booking across 50+ services organised by specialty; heavy reliance on calendar filters (service, practitioner, time of day); an office room assigned to every appointment, respecting practitioner preferences; check-in with invoice and payment on the spot for in-person, emailed access link plus pre-payment for online (introduced to cut no-shows); each appointment records attendance, payment and invoice state; manual invoice/receipt generation and manual debt settlement against bank statements — the most time-consuming task; patient–practitioner matching done on the phone from the reason for the appointment; external practitioners update availability monthly; improvement ideas: automate debt settlement, richer reminders, capture preferred language.
- **Dashboards:** designed per role (Admin, Manager, Practitioner) from each role's responsibilities, with user stories and defined content (alerts, today's appointments, week-on-week comparisons, outstanding payments, revenue by location and service).
- **"After" IA (draft, in the `ia-before-after` diagram):** clinical work (schedule, patient records, clinical notes, telehealth), patient-facing (portal, custom forms, secure messaging), organisation (locations & services, teams & roles, dashboards), Human Insights AI. **Not yet confirmed** — Fernando has the real navigation in the Figma design files and will correct it.

### Scheduling case (confirmed)

- **Sources:** Perplexity-generated docs (`upvio-resource-scheduling-domain-model.md`, `upvio-case-study-final.md`, `upvio-scheduling-domain-diagram.md`). Their "inspired by Microsoft Bookings / Dynamics 365" and generic lessons were **not** confirmed and are not used.
- **Authorship:** Fernando conceived the domain model himself and took it to the CTO and engineers, who implemented it.
- **Before:** scheduling was poor. He added features and improved the UX, but there was no model at all: a booking could be made with just a time and a doctor, or with just a client.
- **Key insight / hardest part:** the team kept trying to fix scheduling settings with UI. He tried every UI route too, and none brought significant improvement. The real fix was UX plus the relational domain. Communicating this to the team and convincing them was hard.
- **Benchmark (confirmed):** clinical practice software — Jane, SimplePractice, Carepatron and PowerDiary. These may be named in the copy. For clinical notes and AI scribes (AI case): Nabla Copilot, Heidi Health and others.
- **Documentation:** the written model helped engineers who joined later (the team changed over time).
- **Metrics:** "configuration errors close to zero" is confirmed (qualitative). Setup time and support time numbers exist but haven't been provided yet, so they are placeholders.

### Human Insights AI case (confirmed)

- **Research methods and numbers:** 5 interviews at the clinic (the founder — herself a clinician — several times, two other clinicians, and the front desk), plus an open line to her for follow-up questions throughout; around 6 guided, monitored sessions with freelance clinicians using the app, designs and prototypes; surveys on product usage; and the competitor study. The clinic was young, well organised, modern in its practices and large enough to reach very different roles.
- **Research authorship:** Fernando did all of it — the research, the interview guide, the interviews, the synthesis and the competitor analysis. Never frame any of this work as shared or assisted, in the case studies or in these notes.
- **Source material:** Notion export (interview guide for practitioner/manager/front desk; three interviews at a multidisciplinary clinic — 20 employees, ~80 practitioners, kept anonymous on the site; research notes with personas, jobs, pains and proposed AI solution; competitor analysis of practice software (Jane, Carepatron, PowerDiary), AI scribes (Heidi, Autonotes, Autoscribe/Mutuo Health, Nabla Copilot) and general transcription (Otter); the documented notes flow: consent, recording, clinician's own notes, transcript after the appointment, draft in the chosen template, clinician review and sign-off, patient-facing summary; "Video Call AI: demos" with scripted personas and three consultations for demo data; dashboards; proposal KPIs; design QA backlog).
- **Design system name:** Australis (now named in the Platform case).
- **Vitals AI attribution:** the technology was still in development when he joined and was already on the team's radar — the CEO was a shareholder in it (kept out of the public case study; the site only says the company had a stake). Fernando's contribution was framing it in the platform and in the Human Insights layer, not defining its clinical scope. Empathic AI is different: its scope came out of the mental-health product strategy he worked on.
- **Product architecture:** Vitals AI is oriented to general practice, Empathic AI to mental health. Human Insights AI is the AI layer inside the platform, fed mostly by those two (especially in the most innovative parts). It goes beyond notes and templates: extracting enough structure from a consultation to assist the clinician's thinking, including diagnosis — always assistance, only on request, never the protagonist, during the consultation included.
- **Strategic challenge:** whether to orient the platform to mental health (where most customers were) or serve all practices, while always keeping the two APIs as a standalone, cheaper option. The company eventually took the API path.
- **Two problems, not one:** (1) Vitals AI is a measurement capability — the pre-consultation check-up taken remotely, planned from the start for general practice, triage and follow-up, not only mental health, and portable enough to be sold as a capability; (2) inside the session, AI takes the protocol documentation clinicians dislike (notes, referrals, prescriptions, exam requests, reports) and gets out of the way during the consultation. Diagnostic suggestions come after the session. The clinician always has control.
- **Key research findings:** paper notebooks and unreadable old notes; typing breaks therapeutic silence; expression analysis wanted as a post-session report, not live; clinic owners aggregating numbers by hand.
- **Status:** Vitals AI shipped to production, Empathic AI followed. Documentation, assisted diagnosis and the wider AI integration were fully researched and designed but only partly implemented; the company was weighing the investment when the collaboration ended.
- **University of Florida:** was evaluating and researching Vitals AI when he left, with Empathic AI next.
- **Empathic AI:** clinical decision support, not just faster notes — marking the moments that matter in a session and jumping back to them, tracking emotional shifts across sessions, surfacing signals that contradict what was said. Support for the clinician's judgement, never a diagnosis. Out of the way by default during a session, available on request. Built by an external engineer; Fernando did the design and gave implementation guidelines directly.
- **Lesson:** design ran far ahead of delivery capacity; some designed work was never built as designed.
