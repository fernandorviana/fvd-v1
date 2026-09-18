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
- **Team:** sole designer throughout. A second designer (asset creation) helped only briefly, following the visual line already set. Worked with 4 engineers (5 at several different points) and directly with stakeholders: CEO, CTO, CMO, Head of Growth, Head of Compliance & Support, and occasionally the Sales Director.
- **Emotional AI (for the AI case):** worked directly with an external engineer building the emotional AI. Did the design and gave him implementation guidelines.
- **Foundations vs. features:** built a solid design system base as fast as possible so features could ship, then grew it component by component as needed. The early phase meant heavy workload, organisation and juggling: wireframes to speed up decisions and UX study, guiding developers, satisfying the CEO and CMO visually, and shipping new features and changes to existing ones in parallel.
- **Metrics:** some numbers exist, including one enterprise client with millions of indirect users (name uncertain; possibly "Blue Rythm"). Unconfirmed, so keep as a placeholder until verified.
- **"Before" screenshots:** possibly a few; to be found.
- **Platform deep-dive feature:** undecided. Scheduling and AI integration were the strongest stories but live in their own cases.
