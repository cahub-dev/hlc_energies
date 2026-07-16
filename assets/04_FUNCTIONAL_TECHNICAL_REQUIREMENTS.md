# HLC Energies Functional and Technical Requirements

## 1. Recommended architecture

Use a server-rendered, static-first architecture with bilingual routes and minimal server functionality.

Recommended stack:

- **TanStack Start** (React + Vite/Nitro) with server-side rendering and static prerendering of primary content — chosen for performance, typed routing and a first-class server-function layer for the contact endpoint.

Do not introduce a database or headless CMS in version 1 unless a named content owner and update workflow are approved.

## 2. Core functional requirements

### Bilingual routing

- Portuguese and English pages
- Visible language switcher
- Equivalent-page switching where translations exist
- Localized navigation, metadata and forms
- Correct `lang` attributes and `hreflang`

### Navigation

- Floating desktop navigation inspired by Evostel
- Accessible mobile menu
- Skip-to-content link
- Current-page state
- Keyboard and screen-reader support

### Company-profile download

- Approved PDF hosted on the company-controlled domain
- File name, language and type visible
- Download event may be measured only after analytics approval

### Reference projects

- Data-driven project cards
- Explicit `owner/experienceEntity: CC1` field in content model
- No project can render without attribution
- Optional detail pages

Suggested project schema:

```ts
type ReferenceProject = {
  slug: string;
  locale: "pt" | "en";
  name: string;
  entity: "CC1";
  attribution: string;
  location?: string;
  executionPeriod?: string;
  capacity?: string;
  technology?: string;
  sourceLabel: string;
  sourceUrl?: string;
  image?: ApprovedAsset;
};
```

### Contact form

- Server-side validation
- Email delivery to an approved company mailbox
- No credentials in client code
- Honeypot plus rate limiting
- Optional CAPTCHA only if abuse requires it
- Clear success and failure messages
- Consent checkbox linked to privacy notice
- Do not log full message bodies in analytics

### Legal pages

- Privacy notice
- Terms of use
- Cookie notice only if non-essential cookies are used

## 3. Content requirements

- Source content from `COPY.md`
- Store PT and EN content separately or in typed locale files
- Prevent build if required attribution fields are missing
- No placeholder lorem ipsum in staging approval build
- No empty public sections

## 4. Performance requirements

Targets measured on production-like mobile conditions:

- Lighthouse Performance: at least 90
- Lighthouse Accessibility: at least 95
- Lighthouse Best Practices: at least 95
- Lighthouse SEO: at least 95
- Largest Contentful Paint: under 2.5 seconds
- Cumulative Layout Shift: below 0.1
- Interaction to Next Paint: below 200 ms where measurable

Implementation controls:

- Server-rendered / statically prerendered HTML for primary content
- Responsive AVIF/WebP images with fallback
- Lazy-load below-the-fold media
- Self-host or carefully preload only required fonts
- Hero-video poster image
- Avoid large animation libraries where CSS/native APIs suffice
- Bundle analysis before release

## 5. Hero-video requirements

- Muted, looped and plays inline
- No audio track
- Poster image always available
- Respect reduced-motion preference
- Do not autoplay on data-saving/reduced-motion contexts
- Desktop and mobile crops
- Keep compressed file sizes appropriate for mobile delivery

## 6. Hosting and deployment

Preferred:

- Company-controlled repository
- Staging and production environments
- Protected production branch
- Automated build and deployment
- HTTPS and automatic certificate renewal
- CDN caching
- Rollback capability

Acceptable hosts include a company-approved static host or controlled VPS deployment. Domain, DNS, repository, analytics and form-service accounts must use company ownership, 2FA and role-based access.

## 7. Environment variables

Examples:

```text
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=
VITE_SITE_URL=https://hlcenergies.com
ANALYTICS_ID=
```

Commit only `.env.example`, never real credentials.

## 8. Testing requirements

### Automated

- Unit tests for locale helpers and project attribution validation
- Component tests for navigation, tabs and forms
- End-to-end tests for PT/EN routing, form submission and downloads
- Link checker
- HTML validation
- Accessibility scan using axe or equivalent
- Lighthouse CI

### Manual

- iOS Safari
- Android Chrome
- Desktop Chrome, Safari, Firefox and Edge
- Keyboard-only navigation
- Screen-reader smoke test
- Slow network and JavaScript-failure check

## 9. Content validation rules

Build should fail when:

- a CC1 project lacks attribution;
- a project uses `HLC` as executing entity without explicit approval;
- a locale page lacks its counterpart without being marked intentionally untranslated;
- a public asset lacks alt text or decorative status;
- contact details differ from the approved content source.

## 10. Version 1 exclusions

- Database
- User authentication
- Chatbot
- Payment processing
- Customer portal
- Tender upload portal
- Complex CMS
- Social-feed integrations
- Third-party trackers not explicitly approved

## 11. Delivery artifacts

The implementation team must provide:

- source repository;
- README and setup instructions;
- `.env.example`;
- design tokens;
- content files;
- automated tests;
- staging URL;
- production deployment instructions;
- DNS requirements;
- backup and rollback procedure;
- final asset licence register.
