# HLC Energies QA and Acceptance Criteria

## 1. Release rule

The website may move from staging to production only when all critical checks pass and all publication blockers have named owners and approvals.

## 2. Content accuracy

- [ ] Company name matches `COPY.md` exactly.
- [ ] NUIT, legal number, address, representative and email match the source.
- [ ] No telephone number is invented.
- [ ] HLC is not described as having completed projects in Mozambique.
- [ ] HLC areas are presented as approved areas of interest/capability.
- [ ] Every CC1 project is visibly attributed to CC1.
- [ ] CC1 indicators and certifications are not attributed to HLC.
- [ ] Vinh Tan 4 displays only sourced facts: Tuy Phong, Binh Thuan; 2014–2017; 1,200 MW.
- [ ] The Dakr Tih output does not receive an inferred unit.
- [ ] Nghi Son 2 does not receive an unsourced capacity.
- [ ] PT and EN pages communicate equivalent facts.
- [ ] No lorem ipsum or draft placeholder is public.

## 3. Design fidelity

- [ ] Premium, industrial, Evostel-inspired direction is evident.
- [ ] HLC blue/gold identity replaces Evostel colours.
- [ ] Floating navigation works across breakpoints.
- [ ] Hero is readable with video, poster and reduced-motion modes.
- [ ] White space is intentional and does not resemble unloaded content.
- [ ] Project cards show attribution without requiring hover.
- [ ] HLC and CC1 roles remain visually distinct.
- [ ] No Evostel code, images or text has been copied.

## 4. Functional checks

- [ ] PT and EN routes load correctly.
- [ ] Language switch preserves equivalent page context.
- [ ] Mobile menu opens, traps focus appropriately and closes.
- [ ] Tabs and carousels work by mouse, touch and keyboard.
- [ ] Company-profile download works.
- [ ] Contact form validates required fields.
- [ ] Contact form delivers a test message to the approved mailbox.
- [ ] Success and error messages are visible and announced.
- [ ] Spam controls reject automated submissions without blocking normal users.
- [ ] 404 and error states are branded and helpful.

## 5. Responsive checks

Validate at:

- [ ] 320 px
- [ ] 375 px
- [ ] 768 px
- [ ] 1024 px
- [ ] 1440 px

At each size:

- [ ] no horizontal overflow;
- [ ] navigation does not obscure content;
- [ ] headings do not clip;
- [ ] project cards remain readable;
- [ ] forms are usable;
- [ ] buttons/tap targets are at least 44 × 44 px.

## 6. Accessibility checks

- [ ] WCAG 2.2 AA automated scan has no critical violations.
- [ ] Keyboard-only completion is possible.
- [ ] Focus state is clearly visible.
- [ ] Skip link works.
- [ ] Heading hierarchy is logical.
- [ ] Images have appropriate alt text.
- [ ] Colour contrast passes.
- [ ] Reduced-motion mode works.
- [ ] Screen-reader smoke test completed for navigation, project cards and contact form.
- [ ] Form errors are programmatically associated.

## 7. Performance checks

Production-like mobile Lighthouse targets:

- [ ] Performance ≥ 90
- [ ] Accessibility ≥ 95
- [ ] Best Practices ≥ 95
- [ ] SEO ≥ 95
- [ ] LCP < 2.5 s
- [ ] CLS < 0.1
- [ ] INP < 200 ms where measurable

Also verify:

- [ ] hero video has poster and compressed variants;
- [ ] below-fold images lazy-load;
- [ ] no unnecessary animation framework;
- [ ] no excessive third-party scripts;
- [ ] pages remain meaningful when JavaScript fails.

## 8. SEO checks

- [ ] Unique titles and descriptions
- [ ] Canonical URLs
- [ ] PT/EN `hreflang`
- [ ] Sitemap and robots file
- [ ] Staging is `noindex`
- [ ] Open Graph data
- [ ] Organization schema uses only approved facts
- [ ] No unsupported “leading/largest/best” keywords
- [ ] Broken-link scan passes

## 9. Security and privacy checks

- [ ] HTTPS works and HTTP redirects.
- [ ] Security headers are present.
- [ ] No secrets in repository or browser bundle.
- [ ] Dependencies scanned.
- [ ] Contact endpoint validates and rate-limits.
- [ ] User content is escaped in emails and logs.
- [ ] Privacy notice is linked from form and footer.
- [ ] Analytics/cookies match approved consent design.
- [ ] Company accounts use 2FA and least privilege.

## 10. Browser/device matrix

- [ ] Safari on current macOS
- [ ] Chrome on current macOS/Windows
- [ ] Firefox current
- [ ] Edge current
- [ ] Safari on iPhone
- [ ] Chrome on Android
- [ ] Slow mobile network profile

## 11. Production handover

- [ ] Repository transferred to company ownership.
- [ ] Domain and DNS controlled by company account.
- [ ] Staging and production URLs documented.
- [ ] Deployment and rollback tested.
- [ ] Backup procedure documented.
- [ ] Environment-variable owners documented.
- [ ] Asset permissions archived.
- [ ] Final human content approval recorded.
