# HLC Energies SEO, Accessibility, Security and Privacy Requirements

## 1. SEO objective

Make HLC discoverable for its approved identity and areas of interest in Mozambique without using unsupported leadership, ownership or performance claims.

## 2. Approved keyword themes

### Portuguese

- HLC Energias Renováveis e Infraestruturas
- energia e infra-estruturas em Moçambique
- projectos de energia em Moçambique
- centrais eléctricas EPC
- linhas de transporte e distribuição
- subestações eléctricas
- projectos solares IPP
- electrificação rural
- Consórcio HLC–CC1

### English

- HLC Renewable Energies and Infrastructures
- energy and infrastructure in Mozambique
- energy projects in Mozambique
- EPC power plants
- transmission and distribution lines
- electrical substations
- solar IPP projects
- rural electrification
- HLC–CC1 Consortium

Do not target unsupported phrases such as “leading energy company in Mozambique” or “largest EPC contractor in Africa”.

## 3. Metadata

Use the safe metadata in `COPY.md`. Each page requires:

- unique title;
- unique meta description;
- canonical URL;
- PT/EN `hreflang` pairs;
- Open Graph title, description and approved image;
- social-card metadata only when approved imagery exists.

## 4. Structured data

Recommended:

- `Organization`
- `WebSite`
- `BreadcrumbList`
- `ContactPoint` only with approved contact data

Do not use award, rating, founder, revenue or project ownership schema unless specifically approved and attributable.

## 5. Indexing controls

- Production pages indexable
- Staging protected and `noindex`
- XML sitemap per locale or combined with alternates
- `robots.txt`
- Correct 404 page
- Redirect map for any changed URLs

## 6. Accessibility standard

Target WCAG 2.2 AA.

Required:

- semantic headings in logical order;
- keyboard operation for menus, tabs, carousels and forms;
- visible focus indicators;
- skip-to-content link;
- minimum 4.5:1 body-text contrast;
- alt text for informative imagery;
- empty alt text for decorative imagery;
- captions/transcript if video communicates information;
- reduced-motion support;
- form labels, instructions and error association;
- status messages announced to assistive technology;
- touch targets at least 44 × 44 px;
- no information conveyed by colour alone;
- language attributes for PT and EN.

## 7. Security requirements

- HTTPS only
- HSTS after deployment validation
- Content Security Policy
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy`
- restrictive `Permissions-Policy`
- secure form endpoint
- server-side validation and sanitisation
- rate limiting and anti-spam controls
- no credentials in source control
- dependency and secret scanning in CI
- least-privilege deployment credentials
- company accounts with 2FA
- production access logging without storing sensitive message content

## 8. Privacy requirements

The contact form may collect:

- name;
- organization;
- email;
- optional telephone;
- subject;
- message;
- consent confirmation;
- technical anti-abuse data where legally permitted.

Controls:

- collect only necessary fields;
- state purpose and retention period in privacy notice;
- restrict mailbox access;
- do not send contact data to public AI services;
- do not include PII in analytics events;
- establish deletion/retention procedure;
- identify the approved data controller before launch.

## 9. Cookies and analytics

Preferred version 1 approach: privacy-conscious, minimal analytics.

- Essential cookies do not require a marketing banner in many regimes, subject to legal review.
- Non-essential analytics/marketing cookies require consent where applicable.
- Do not add Meta Pixel, advertising trackers or session replay without written approval.
- If analytics is approved, mask or avoid IP collection where supported and document retention.

## 10. Contact-form email security

- Use an approved company mailbox and service account.
- Enforce SPF, DKIM and DMARC for the sending domain.
- Do not expose SMTP credentials.
- Include a clear reply-to address but prevent header injection.
- Use plain-text and HTML templates with escaped user content.

## 11. Legal publication checks

Human approval is required before publishing:

- NUIT and legal-entity number;
- legal representative name;
- CC1 financial figures;
- CC1 certifications;
- CC1 logos and project imagery;
- partner/customer logos;
- privacy notice and retention terms;
- analytics and cookie configuration.
