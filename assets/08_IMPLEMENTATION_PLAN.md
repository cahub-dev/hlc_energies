# HLC Energies Website Implementation Plan

> **For Hermes:** Use the subagent-driven-development skill to implement this plan task-by-task after a repository and stack are approved.

**Goal:** Build and deploy a fast, bilingual, Evostel-inspired institutional website for `hlcenergies.com` using the controlled HLC copy pack.

**Architecture:** Static-first bilingual site with typed content, progressive enhancement and a minimal secure server endpoint for the contact form. Primary content is server-rendered or statically prerendered so it is visible before hydration; interactions use progressive enhancement. CC1 project data must require explicit attribution fields.

**Preferred stack:** TanStack Start, TypeScript, CSS custom properties, Playwright, axe, Lighthouse CI, approved email/API service.

---

## Phase 0 — Decisions and access

### Task 1: Confirm build inputs

- Confirm official logo and brand assets.
- Confirm hero/project image rights.
- Confirm publication of legal details and CC1 indicators.
- Confirm company-profile download.
- Confirm contact-form destination mailbox.
- Confirm repository, hosting, DNS and analytics ownership.

**Acceptance:** No production-critical asset or approval owner is unknown.

### Task 2: Create company-controlled repository

- Initialize repository.
- Protect production branch.
- Add maintainers and 2FA requirements.
- Add issue templates for content, design and defects.

**Acceptance:** Repository is accessible through company accounts and production branch is protected.

## Phase 1 — Foundation

### Task 3: Scaffold the project

Suggested files:

```text
src/
  components/
  content/
    pt/
    en/
  layouts/
  routes/
    pt/
    en/
  styles/
public/
  assets/
tests/
```

- Configure TypeScript strict mode.
- Configure formatting/linting.
- Add `.env.example`.
- Add build, test and preview commands.

**Verification:** Clean install, build and test commands succeed.

### Task 4: Implement design tokens and base layout

- Add HLC colours, typography, spacing, radii and shadows.
- Add global focus, reduced-motion and responsive rules.
- Add semantic page shell, skip link and footer.

**Verification:** Base page passes initial accessibility scan.

### Task 5: Implement bilingual routing

- Add `/pt/` and `/en/` routes.
- Add locale-aware navigation and language switch.
- Add document language, canonical and `hreflang` helpers.

**Verification:** Automated tests confirm equivalent-route switching.

## Phase 2 — Content model and controls

### Task 6: Import approved copy

- Convert `COPY.md` sections into controlled locale content files.
- Preserve Portuguese as authoritative.
- Add source comments/metadata.

**Verification:** No content claim exists without a source field.

### Task 7: Create CC1 reference-project schema

- Require entity `CC1`.
- Require attribution and source label.
- Make optional facts truly optional.
- Reject an HLC executing-entity value in version 1.

**Verification:** Unit test fails on missing or incorrect attribution, then passes with valid data.

## Phase 3 — Components

### Task 8: Build floating navigation

- Desktop pill navigation.
- Mobile menu.
- Language switch.
- Current-page state.
- Keyboard/focus behavior.

### Task 9: Build hero

- Responsive media and poster.
- Approved copy and CTAs.
- Reduced-motion/data-saving fallback.
- No unlabelled statistics.

### Task 10: Build About and section-label system

- Large editorial text.
- Progressive reveal that never hides fallback content.
- Reusable section label.

### Task 11: Build Consortium comparison

- HLC and CC1 columns.
- Correct role lists.
- Mandatory agreement statement.

### Task 12: Build Areas of Interest

- Accessible tabs on desktop.
- Accordion/cards on mobile.
- Six approved areas.

### Task 13: Build capability and project carousels

- Touch, mouse and keyboard controls.
- Visible progress and buttons.
- No auto-advance required.
- Attribution always visible on project cards.

### Task 14: Build commitment and brochure sections

- National-commitment pillars.
- Capacity-transfer statements.
- Approved profile download.

### Task 15: Build contact and legal pages

- Accessible form.
- Privacy consent.
- Approved contact details.
- Terms/privacy templates pending legal approval.

## Phase 4 — Integration

### Task 16: Implement secure contact endpoint

- Server validation and sanitisation.
- Rate limiting and honeypot.
- Approved mail service credentials via environment variables.
- Success/failure monitoring without PII analytics.

**Verification:** Valid staging submission reaches the approved mailbox; malicious/invalid payloads are rejected.

### Task 17: Add SEO and structured data

- Titles, descriptions, canonicals and `hreflang`.
- Sitemap, robots, Open Graph.
- Approved Organization schema.

### Task 18: Optimize media and performance

- Responsive AVIF/WebP.
- Hero-video variants and poster.
- Font strategy.
- JavaScript/bundle review.

## Phase 5 — Quality gates

### Task 19: Automated test suite

- Unit tests
- Component tests
- Playwright PT/EN flows
- Link checker
- axe scan
- Lighthouse CI
- Attribution validation

### Task 20: Manual QA

Execute every item in `07_QA_ACCEPTANCE_CRITERIA.md` and record evidence.

### Task 21: Content/legal approval

Provide staging to named approvers. Resolve all factual, translation, attribution, asset and legal comments.

## Phase 6 — Deployment

### Task 22: Production deployment

- Configure DNS and HTTPS.
- Configure security headers.
- Remove staging `noindex` only on production.
- Run post-deploy smoke tests.

### Task 23: Handover

- Deliver repository, accounts, deployment procedure, rollback, asset register and maintenance instructions.
- Confirm company ownership and 2FA.

## Definition of done

- All critical QA checks pass.
- All public claims are grounded in `COPY.md`.
- CC1 references are unambiguous.
- PT and EN are complete.
- Contact delivery is verified.
- Production ownership rests with company-controlled accounts.
