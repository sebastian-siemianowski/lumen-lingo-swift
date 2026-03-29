# Performance Baseline — LumenLingo Frontend

> Established: 25 March 2026 | Epic 20, Story 20.3
> Update this document after each significant release or infrastructure change.

---

## Lighthouse Score Targets

| Page | Desktop Target | Mobile Target |
| ---- | -------------- | ------------- |
| Homepage | ≥ 92 | ≥ 85 |
| Features | ≥ 90 | ≥ 82 |
| Pricing | ≥ 93 | ≥ 87 |
| Blog Index | ≥ 90 | ≥ 82 |
| Blog Post | ≥ 88 | ≥ 80 |
| Demo | ≥ 90 | ≥ 85 |
| Download | ≥ 95 | ≥ 90 |
| Legal Pages | ≥ 95 | ≥ 90 |
| About | ≥ 92 | ≥ 85 |
| Contact | ≥ 93 | ≥ 87 |
| Early Access | ≥ 93 | ≥ 87 |

---

## Core Web Vitals Targets

| Metric | Target | Description |
| ------ | ------ | ----------- |
| LCP | < 2.5s | Largest Contentful Paint — all pages |
| INP | < 200ms | Interaction to Next Paint — all pages |
| CLS | < 0.1 | Cumulative Layout Shift — all pages |

---

## Bundle Size Budgets

| Asset | Budget | Notes |
| ----- | ------ | ----- |
| First-party JS (gzipped) | < 150 KB | Excludes third-party scripts (analytics, Sentry) |
| CSS (gzipped) | < 50 KB | Tailwind v4 with purging enabled |

---

## CI Enforcement

Lighthouse CI runs on every PR targeting `main`, testing the 3 most critical pages:
- **Homepage** (`/en`)
- **Pricing** (`/en/pricing`)
- **Blog Index** (`/en/blog`)

See `.github/workflows/lighthouse.yml` for configuration.

Thresholds configured in `lighthouserc.json` at the frontend root.

---

## Optimisation History

| Date | Change | Impact |
| ---- | ------ | ------ |
| 2026-03-25 | Glass-card blur reduced 20px→12px (8px mobile) | Reduced composite layer cost |
| 2026-03-25 | Image quality default set to 80 | ~15-25% smaller image payloads |
| 2026-03-25 | Mobile menu backdrop-blur reduced 2xl→xl | Smoother mobile menu animation |
