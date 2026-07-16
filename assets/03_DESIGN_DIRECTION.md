# HLC Energies Design Direction

## 1. Reference

Primary reference: `https://evostel.com/`.

The implementation must be inspired by Evostel's visual language without reproducing its copyrighted assets, code, exact layout, copy, palette or brand identity.

## 2. Design objective

Create a premium industrial-energy experience that communicates:

- Mozambican legal and operational presence;
- serious engineering and infrastructure intent;
- local execution through HLC;
- international technical capacity through CC1;
- long-term commitment to Mozambique.

## 3. Visual principles

- Full-bleed industrial media
- Large, concise typography
- High contrast
- Generous white space
- Rounded navigation and buttons
- Controlled blue/gold identity
- Minimal decorative graphics
- Clear source and attribution labels
- Strong mobile composition

## 4. Proposed design tokens

These values are implementation proposals derived from the approved profile's visual direction. Confirm against official brand files when available.

```css
:root {
  --hlc-blue-900: #123f63;
  --hlc-blue-700: #20557f;
  --hlc-blue-500: #3478a8;
  --hlc-gold-500: #c9a23a;
  --hlc-ink: #182630;
  --hlc-grey-700: #56636d;
  --hlc-grey-200: #e7edf1;
  --hlc-grey-100: #f5f7f8;
  --hlc-white: #ffffff;
  --radius-pill: 999px;
  --radius-card: 18px;
  --shadow-nav: 0 12px 34px rgba(18, 63, 99, 0.14);
}
```

Do not use Evostel's turquoise/purple palette as HLC's brand.

## 5. Typography

Preferred direction: neutral geometric sans-serif with strong multilingual support.

Recommended stack:

```css
font-family: "Inter", "Helvetica Neue", Arial, sans-serif;
```

Alternative: Manrope for display headings and Inter for body text.

Requirements:

- Portuguese diacritics must render correctly.
- Heading weight: 500–650, not excessively bold.
- Body text: 16–18 px desktop, at least 16 px mobile.
- Maximum readable line length: approximately 70 characters.
- Avoid all-caps paragraphs.

## 6. Component direction

### Floating navigation

- White or translucent surface over hero
- Rounded pill shape
- Active item in HLC blue
- Visible focus ring
- Collapses to accessible mobile menu
- Language selector remains visible

### Hero

- 85–100 viewport-height section
- Video or high-resolution still
- Dark overlay for text contrast
- HLC logo top-left
- One headline, one short approved description, two CTAs
- No unlabelled statistics

### Section labels

Small bullet plus short label, following Evostel's editorial sections. Example: `• Sobre a HLC`.

### Capability tabs

- Horizontal desktop tabs
- Accordion or swipe-safe cards on mobile
- Keyboard operable
- Visible selected state
- No content hidden from search engines or no-JavaScript users

### Consortium comparison

Two-column desktop, stacked mobile. HLC and CC1 must have distinct labels and equal visual clarity.

### Project cards

Each card includes:

- approved image or neutral placeholder;
- project name;
- location;
- capacity and period only when sourced;
- technology tag;
- prominent CC1 attribution;
- link to project detail where available.

### Brochure block

Use Evostel's split-panel approach:

- blue copy panel;
- approved profile cover/project image;
- clear download action;
- no automatic download.

### Contact form

Minimal fields, large controls, inline validation and clear success/error state.

## 7. Motion system

Allowed:

- subtle fade/translate reveals;
- text-line reveal;
- restrained card transitions;
- slow hero-video movement;
- progress indicator for horizontal project carousel.

Not allowed:

- scroll-jacking;
- content that remains invisible until animation runs;
- long page-lock transitions;
- autoplay audio;
- flashing effects;
- parallax that harms readability;
- animation required to understand content.

Respect `prefers-reduced-motion` and provide no-motion fallbacks.

## 8. Media direction

Preferred imagery:

- power plants;
- transmission and distribution infrastructure;
- substations;
- solar, wind and hydropower;
- engineers and site teams;
- Mozambican infrastructure context where approved.

Controls:

- Do not use CC1 project photographs without permission.
- Do not use photographs that imply HLC executed an unapproved project.
- Avoid generic stock images with incorrect geography or unsafe engineering practices.
- Add accurate alt text and source/credit metadata.

## 9. Responsive behaviour

Breakpoints should be content-driven. Minimum validation widths:

- 320 px
- 375 px
- 768 px
- 1024 px
- 1440 px

On mobile:

- hero text must remain readable;
- no horizontal overflow;
- carousels must also expose accessible next/previous controls;
- tap targets at least 44 × 44 px;
- floating navigation must not cover content.

## 10. Design risks and controls

| Risk | Control |
|---|---|
| Evostel-like blank sections while scripts load | Render content server-side/static and animate progressively |
| CC1 statistics look like HLC statistics | Separate section, labels and mandatory attribution |
| Heavy video harms Mozambique mobile users | Compressed formats, poster image, reduced-motion and data-saving fallbacks |
| Premium design becomes vague | Use factual copy from `COPY.md` and visible section headings |
| Copyright risk | Use Evostel only as inspiration; create original components and assets |
