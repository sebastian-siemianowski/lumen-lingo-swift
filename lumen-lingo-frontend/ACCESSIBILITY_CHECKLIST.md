# Accessibility Checklist — LumenLingo Frontend

> Audit date: 25 March 2026 | Epic 20, Story 20.4
> Standard: WCAG 2.1 Level AA

---

## Automated Testing

| Tool | Scope | Status |
| ---- | ----- | ------ |
| axe-core (Playwright) | All 15 pages | ✅ Configured — `e2e/accessibility.spec.ts` |
| Lighthouse Accessibility | Homepage, Pricing, Blog | ✅ CI enforced — target ≥ 90 |
| HTML Validator | All pages | ✅ Valid semantic HTML |

---

## Keyboard Navigation

| Feature | Method | Status |
| ------- | ------ | ------ |
| Skip-to-content link | Tab from page top | ✅ Present on all pages |
| Navigation menu (desktop) | Tab + Enter | ✅ All links focusable |
| Mobile menu | Tab + Enter/Escape | ✅ Focus trap, Escape closes |
| Cookie consent banner | Tab + Enter/Space | ✅ Focus management, Escape closes |
| FAQ accordion (pricing, contact) | Tab + Enter/Space + Arrow keys | ✅ ARIA expanded, keyboard navigation |
| Blog category filter | Tab + Enter | ✅ focusable chips |
| Data request form | Tab through fields | ✅ Label associations, error announcements |
| Newsletter form | Tab + Enter | ✅ aria-label, aria-describedby for errors |
| Waitlist form | Tab through fields | ✅ Visible labels, focus management |
| Back-to-top button | Tab + Enter | ✅ Visible on focus |
| Legal page TOC | Tab + Enter | ✅ Anchor links focusable |
| Pricing toggle (monthly/yearly) | Tab + Space | ✅ ARIA pressed state |

---

## Screen Reader Compatibility

| Page | Reader | Status | Notes |
| ---- | ------ | ------ | ----- |
| Homepage | VoiceOver (macOS) | ✅ | Logical heading hierarchy, landmarks present |
| Pricing | VoiceOver (macOS) | ✅ | Tier cards announced with headings, toggle state announced |
| Blog | VoiceOver (macOS) | ✅ | Article cards have heading + metadata |
| Legal pages | VoiceOver (macOS) | ✅ | TOC links, prose sections with headings |

---

## Colour Contrast

| Surface | Foreground | Contrast Ratio | Pass? |
| ------- | ---------- | -------------- | ----- |
| Background (#0a0a0f) | Foreground (#f4f4f5) | 18.3:1 | ✅ AAA |
| Background (#0a0a0f) | Secondary (#a1a1aa) | 7.5:1 | ✅ AAA |
| Background (#0a0a0f) | Muted (#8b8b94) | 5.0:1 | ✅ AA |
| Glass card (~#1a1a24) | Foreground (#f4f4f5) | 14.1:1 | ✅ AAA |
| Glass card (~#1a1a24) | Secondary (#a1a1aa) | 5.8:1 | ✅ AA |
| Violet (#8b5cf6) | White (#ffffff) | 3.9:1 | ✅ AA Large |
| Cyan (#06b6d4) | Black (#000000) | 8.6:1 | ✅ AAA |
| Amber (#f59e0b) | Black (#000000) | 10.2:1 | ✅ AAA |

---

## Motion & Animation

| Requirement | Status | Implementation |
| ----------- | ------ | -------------- |
| `prefers-reduced-motion` CSS | ✅ | Global media query disables all animations |
| `useReducedMotion` hook | ✅ | 40+ components check preference |
| Real-time preference changes | ✅ | `matchMedia` change listener |
| No autoplay video | ✅ | No video elements on site |
| Parallax disabled when reduced | ✅ | `parallax-layer.tsx` checks hook |

---

## Forms & Inputs

| Requirement | Status | Notes |
| ----------- | ------ | ----- |
| All inputs have visible labels | ✅ | `<Label>` component used consistently |
| Required fields marked `aria-required` | ✅ | Data request, newsletter, waitlist forms |
| Error states use `role="alert"` | ✅ | `<ErrorText>` component includes `role="alert"` |
| `aria-invalid` on error | ✅ | Newsletter + waitlist forms |
| No placeholder-only labels | ✅ | All inputs have proper labels |

---

## High Contrast & Forced Colours

| Requirement | Status | Notes |
| ----------- | ------ | ----- |
| Layout integrity in High Contrast | ✅ | Borders use `border-color` (respects forced colours) |
| Text remains visible | ✅ | Text uses `color` property (maps to system colours) |
| Focus indicators visible | ✅ | `ring-2 ring-violet` maps to `Highlight` in forced colours |
| Glass effects degrade gracefully | ✅ | Fallback `bg-surface-card` provides solid background |

---

## ARIA Usage

| Pattern | Status | Notes |
| ------- | ------ | ----- |
| Landmarks (`main`, `nav`, `footer`) | ✅ | Semantic HTML elements used |
| `aria-expanded` on accordions | ✅ | FAQ accordion, mobile TOC |
| `aria-controls` pairing | ✅ | Accordion trigger → panel |
| `aria-live` regions | ✅ | Cookie consent banner, form error messages |
| Decorative images `aria-hidden` | ✅ | SVG icons, background elements |
| `aria-label` on icon-only buttons | ✅ | Theme toggle, close buttons |

---

## Automated CI Pipeline

- **axe-core**: Runs on every PR via Playwright e2e tests (`e2e/accessibility.spec.ts`)
- **Lighthouse**: Accessibility score threshold ≥ 90 enforced in `lighthouserc.json`

---

*This checklist is a living document. Update after each accessibility-relevant change.*
