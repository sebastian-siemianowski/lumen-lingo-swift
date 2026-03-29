# Privacy by Design & Default — GDPR Article 25 Documentation

**Organisation**: LumenShore Ltd (Company No. 09607326)
**Date**: 2025-01-01
**Review Frequency**: Annual or when new features/SDKs are added
**Next Review**: 2026-01-01

---

## 1. Data Protection by Design (Art. 25(1))

The following measures demonstrate that data protection is integrated into the design of LumenLingo from the outset:

### 1.1 iOS App Architecture

| Measure | Implementation | Evidence |
|---|---|---|
| **On-device data storage** | All learning data stored locally via SwiftData. No server-side database. | `DataModels.swift` — 5 SwiftData models, all @Model classes with local persistence |
| **Zero external SDKs** | No analytics, advertising, or tracking SDKs in iOS app | `project.yml` — dependency list contains only first-party Apple frameworks |
| **Zero telemetry** | No data sent from iOS app to any server (except Apple iCloud sync) | No network calls in codebase except Apple APIs |
| **No account required** | Free tier fully functional without creating an account | Mock auth in current version; no PII required for core functionality |
| **iCloud sync encryption** | Apple-managed iCloud KVS with encryption in transit | Apple platform default — no custom server sync |
| **GDPR data export** | Free JSON export of all personal data from Settings (no tier restriction) | `GDPRDataExporter.swift` — exports all 5 SwiftData models |
| **Delete Account** | Permanent erasure of all on-device data via Settings | `SettingsView.swift` — Delete Account flow removes all SwiftData records |
| **Legal consent gating** | App requires acceptance of current legal terms before use | `LegalConsentView.swift` — version-checked consent gate |

### 1.2 Website Architecture

| Measure | Implementation | Evidence |
|---|---|---|
| **No user database** | No server-side storage of user data; in-memory only | `api/newsletter/route.ts`, `api/waitlist/route.ts` — in-memory stores |
| **Input validation** | Zod schemas on all API routes | All route.ts files use `z.object()` with strict validation |
| **Rate limiting** | Per-IP rate limiting on all API endpoints | `isRateLimited()` in all API routes |
| **IP hashing** | IP addresses SHA-256 hashed before consent logging | `consent-log.ts` `hashForConsent()` |
| **Cookie-free analytics** | Vercel Analytics collects no PII, uses no cookies | `analytics.ts` — `track()` calls with consent check |
| **Consent-gated monitoring** | Sentry session replay disabled by default (0% rate) | `instrumentation-client.ts` — `replaysSessionSampleRate: replayAllowed ? 0.1 : 0` |
| **Text masking in replay** | All text masked, all media blocked in session replays | `maskAllText: true, blockAllMedia: true` in Sentry config |
| **Email input masking** | `data-sentry-mask` attribute on email fields | `newsletter-form.tsx` — email input has `data-sentry-mask` |

### 1.3 Consent Architecture

| Measure | Implementation | Evidence |
|---|---|---|
| **Granular cookie consent** | Per-category toggles (analytics, error monitoring, session replay) | `cookie-consent-banner.tsx` — individual toggles per category |
| **Consent versioning** | Version tracking with re-consent on version change | `cookie-consent.ts` — `CONSENT_VERSION` comparison |
| **Server-side consent logging** | Structured consent records with hashed identifiers | `consent-log.ts` — `recordConsent()` with audit trail |
| **Consent withdrawal** | Same-UI withdrawal for cookies; API endpoint for newsletter | `open-cookie-settings` event; `/api/newsletter/unsubscribe` |
| **13-month consent expiry** | Cookie consent auto-expires per GDPR guidance | `cookie-consent.ts` — `EXPIRY_MS = 13 * 30 * 24 * 60 * 60 * 1000` |

---

## 2. Data Protection by Default (Art. 25(2))

The following default settings ensure maximum privacy out of the box:

| Setting | Default Value | Privacy Impact |
|---|---|---|
| **Analytics tracking** | Off (requires consent) | No user behaviour tracked until explicit opt-in |
| **Sentry error monitoring** | Off (requires consent) | No error data with request context until opt-in |
| **Sentry session replay** | Off (0% rate until consent) | Zero recording until explicit opt-in |
| **Newsletter subscription** | Opt-in only | No pre-ticked boxes; requires active email entry + submit |
| **Waitlist signup** | Opt-in only | No pre-ticked boxes; requires active email entry + submit |
| **iCloud sync** | On (Apple-managed) | Syncs learning progress only; no PII; Apple E2E encryption |
| **Account requirement** | Not required (Free tier) | Full app functionality without any PII |
| **Data sharing** | None | No data shared with third parties for marketing or advertising |

---

## 3. Privacy by Design Checklist for New Features

Every new feature that touches personal data must be assessed against this checklist before merging:

### Data Minimisation
- [ ] Does the feature collect only data strictly necessary for its purpose?
- [ ] Can any collected field be removed without breaking functionality?
- [ ] Is aggregate/anonymised data sufficient instead of individual-level data?

### Purpose Limitation
- [ ] Is collected data used only for the stated purpose documented in the Privacy Policy?
- [ ] If data is reused for a new purpose, has the Privacy Policy been updated?
- [ ] Is there a lawful basis (consent, contract, legitimate interest) for the processing?

### Storage Limitation
- [ ] Is there a defined retention period for the data?
- [ ] Is the retention period documented in `DATA_RETENTION_SCHEDULE.md`?
- [ ] Is automated deletion implemented where technically feasible?

### Default Privacy Settings
- [ ] Is the most privacy-protective setting the default?
- [ ] Does the user need to opt IN (not opt out) for data collection?
- [ ] Are tracking/monitoring features disabled by default?

### Pseudonymisation & Anonymisation
- [ ] Can data be de-identified (hashed, anonymised, aggregated)?
- [ ] Are identifiers (email, IP) hashed before storage in logs?
- [ ] If a backend is added: are opaque UUIDs used as primary keys (not emails)?

### Access Control
- [ ] Who can access this data? Is access limited to the data subject?
- [ ] Is the principle of least privilege applied?
- [ ] Are admin access logs maintained?

### Encryption
- [ ] Is data encrypted at rest? (SwiftData = Apple-managed; iCloud = E2E in transit)
- [ ] Is data encrypted in transit? (HTTPS for all web traffic)
- [ ] Are API keys and secrets stored securely (environment variables, not source code)?

### Delete-ability
- [ ] Can the data be fully deleted on user request?
- [ ] Is the deletion mechanism documented and tested?
- [ ] Does deletion propagate to all copies (local, sync, sub-processors)?

### Children's Data
- [ ] If the feature may be used by under-18s, does it comply with ICO Children's Code?
- [ ] Is the feature age-appropriate? Does it avoid manipulation or dark patterns?

---

## 4. Integration into Development Workflow

1. **Pre-merge**: Any PR touching personal data must include a completed Privacy by Design Checklist (Section 3 above) as part of the PR description or as a linked compliance artefact.

2. **Feature planning**: During feature design, assess data flows against the checklist. Document decisions in the feature specification.

3. **Cross-reference**: Link to Story 15.3 (Feature-Level Legal Impact Assessment) when applicable.

4. **Store artefacts**: Completed checklists stored in the `compliance/` directory.

---

## 5. Pseudonymisation Measures

| Data | Pseudonymisation Approach | Status |
|---|---|---|
| IP addresses | SHA-256 hashed with salt prefix before consent logging | Implemented (`consent-log.ts` `hashForConsent()`) |
| Email addresses | SHA-256 hashed in consent records | Implemented (`consent-log.ts` `hashForConsent()`) |
| Newsletter rate-limit keys | Raw IP used transiently for rate limiting, then discarded | Implemented (in-memory only, 60s window) |
| Sentry error reports | IP anonymisation enabled by default | Sentry platform default |
| Sentry session replay | `maskAllText: true`, `blockAllMedia: true` | Implemented |
| Future backend user IDs | Use opaque UUIDs, not email addresses, as primary keys | Planned (no backend yet) |

---

## 6. Annual Review

- [ ] Re-assess all privacy-by-design measures when new features, SDKs, or sub-processors are added
- [ ] Update this document to reflect current state
- [ ] Cross-reference with DPIA updates (`compliance/DPIA.md`)
- [ ] Verify that default settings remain privacy-protective
- [ ] Confirm pseudonymisation measures are functioning
- [ ] Sign-off by data controller

**Next annual review due**: 2026-01-01

---

*This document is an internal compliance artefact for GDPR Article 25 accountability. Store securely and present on request to ICO / DPA auditors.*
