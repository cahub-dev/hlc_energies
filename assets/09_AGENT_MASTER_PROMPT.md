# HLC Energies Website — Master Agent Prompt

Copy the prompt below into the website-building agent together with this documentation folder.

---

## Agent instruction

You are building the official institutional website for **HLC Energias Renováveis e Infraestruturas, LDA** at `hlcenergies.com`.

### Business objective

Create a premium, bilingual institutional website that explains HLC's Mozambican role, the HLC–CC1 Consortium model, approved areas of interest, CC1's separately attributed technical reference experience and HLC's commitment to Mozambique.

### Required inputs

Read these files in order before coding:

1. `00_README.md`
2. `01_WEBSITE_BRIEF.md`
3. `02_INFORMATION_ARCHITECTURE.md`
4. `03_DESIGN_DIRECTION.md`
5. `04_FUNCTIONAL_TECHNICAL_REQUIREMENTS.md`
6. `05_SEO_ACCESSIBILITY_SECURITY.md`
7. `06_ASSET_APPROVAL_REGISTER.md`
8. `07_QA_ACCEPTANCE_CRITERIA.md`
9. `08_IMPLEMENTATION_PLAN.md`
10. `COPY.md`

Treat `COPY.md` as the factual source of truth.

### Design direction

Use `https://evostel.com/` only as visual and interaction inspiration:

- full-screen industrial hero;
- floating pill navigation;
- large editorial typography;
- generous white space;
- controlled scroll reveals;
- interactive industry/capability cards;
- horizontal project presentation;
- prominent brochure block;
- minimal contact experience.

Create an original implementation. Do not copy Evostel's code, media, text, palette, exact layout or proprietary assets.

Use HLC blue, white and gold. The site must feel institutional, technical, premium and Mozambique-focused.

### Non-negotiable factual controls

- HLC and CC1 are separate entities.
- Never state or imply that HLC executed or invested in a CC1 project.
- Every CC1 project must visibly say it is a CC1 technical reference.
- Never transfer CC1's revenue, assets, ISO certifications, project count, clients or years of experience to HLC.
- Do not claim completed HLC projects in Mozambique.
- Do not invent services, partners, customers, telephone numbers, social links, offices, statistics or project facts.
- Do not add a capacity for Nghi Son 2 from outside the approved pack.
- Do not add a unit to the Dakr Tih “635 million per year” statement.
- Vinh Tan 4 may use only: Tuy Phong, Binh Thuan Province; 2014–2017; 1,200 MW; CC1 attribution.
- Portuguese is authoritative. English must be a faithful translation.
- Do not publish unapproved legal identifiers or restricted assets in production.

### Technical direction

Use TanStack Start (React + TypeScript) with server-side rendering and static prerendering of primary content.

Primary content must be server-rendered or statically prerendered so it is visible before hydration. Use progressive enhancement for motion and interactions. Avoid scroll-jacking and heavy animation frameworks.

Create:

- `/pt/` and `/en/` routes;
- accessible navigation and language switching;
- responsive hero with poster/reduced-motion fallback;
- About HLC section;
- HLC–CC1 role comparison;
- areas-of-interest tabs/cards;
- consortium-capability cards;
- separately labelled CC1 technical-capacity section;
- CC1 reference-project cards and Vinh Tan 4 page;
- commitment-to-Mozambique section;
- approved company-profile download;
- contact form and legal pages;
- SEO metadata, sitemap, robots and approved structured data.

### Content model control

Reference-project data must require:

```ts
entity: "CC1"
attribution: string
sourceLabel: string
```

The build or tests must fail when a reference project lacks CC1 attribution.

### Quality targets

- Lighthouse Performance ≥ 90
- Accessibility ≥ 95
- Best Practices ≥ 95
- SEO ≥ 95
- WCAG 2.2 AA
- LCP < 2.5 s
- CLS < 0.1
- No critical axe violations
- No broken links
- No horizontal overflow at 320 px

### Required workflow

1. Inspect all documentation and existing repository files.
2. Produce an implementation plan with exact paths before modifying code.
3. Identify missing assets/approvals and use labelled placeholders only on staging.
4. Implement in small, testable tasks.
5. Add attribution validation tests before project UI implementation.
6. Build and run the complete test suite.
7. Serve the staging build and visually inspect desktop and mobile.
8. Execute `07_QA_ACCEPTANCE_CRITERIA.md`.
9. Report actual commands, test results, Lighthouse results, unresolved blockers and artifact paths.

### Prohibited shortcuts

- Do not return only mockups or descriptions.
- Do not fabricate successful form delivery.
- Do not claim deployment without a verifiable URL and test.
- Do not replace missing assets with unlicensed downloads.
- Do not remove attribution to improve visual simplicity.
- Do not launch empty News, Partners, Customers or Careers sections.

### Definition of done

The site is complete only when it builds successfully, passes the critical acceptance criteria, displays all approved PT/EN content, keeps HLC and CC1 attribution unambiguous, and has a verified staging deployment.

---
