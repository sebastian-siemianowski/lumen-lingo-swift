# PECR Compliance Assessment — LumenShore Ltd

**Document**: Privacy and Electronic Communications Regulations 2003 (as amended) Assessment
**Company**: LumenShore Limited (Company No. 09607326)
**Service**: LumenLingo (iOS App + Website)
**Date**: January 2025
**Status**: ✅ Compliant

---

## 1. Regulation 6 — Storage of Information on Terminal Equipment (Cookies & Similar)

### Applicability
PECR Regulation 6 requires consent before storing or accessing information on a user's terminal equipment (device), except where strictly necessary for a service explicitly requested by the user.

### LumenLingo Implementation

| Storage Item | Type | PECR Category | Consent Required? | Implementation |
|---|---|---|---|---|
| `ll_cookie_consent` | localStorage | Strictly necessary | No (stores consent state itself) | Auto-set |
| `NEXT_LOCALE` | localStorage / Cookie | Strictly necessary | No (user-requested language preference) | Auto-set |
| `ll_utm` | sessionStorage | Non-essential (analytics) | Yes | Gated by `hasConsent('analytics')` |
| Sentry session replay | sessionStorage | Non-essential (error monitoring) | Yes | Gated by `hasConsent('sessionReplay')` |
| Service Worker cache | Cache API | Strictly necessary | No (offline functionality requested by user) | Auto-set |

### Compliance Status: ✅ Compliant
- **Consent banner** (`cookie-consent-banner.tsx`) displayed before any non-essential storage
- **Granular per-category toggles**: Analytics, Error Monitoring, Session Replay
- **No pre-ticked boxes**: All optional categories default to off
- **Consent recorded server-side** with version, timestamp, hashed identifiers (`consent-log.ts`)
- **13-month expiry** on consent preferences (aligns with ICO guidance)
- **Consent version tracking**: Re-prompts on version change
- **GPC/DNT signals**: Automatically suppress non-essential storage when active

### ICO Cookie Guidance Alignment
- ✅ Clear, plain-language information about what each category does
- ✅ Cannot be "consent or leave" — essential functionality works without consent
- ✅ Easy to withdraw consent via footer "Cookie Settings" link
- ✅ No "cookie walls" — full website access regardless of consent choices

---

## 2. Regulation 22 — Unsolicited Communications (Newsletter Marketing)

### Applicability
PECR Regulation 22 prohibits unsolicited marketing emails unless the recipient has given prior consent OR the "soft opt-in" exception (Regulation 22(3)) applies.

### 2a. Explicit Consent Route (Primary)

LumenLingo uses **explicit opt-in** for all newsletter signups:

| Requirement | Status | Evidence |
|---|---|---|
| No pre-ticked boxes | ✅ | Age checkbox unchecked by default; no marketing checkbox (explicit "Subscribe" button action = consent) |
| Clear description of content | ✅ | "Product updates, language learning tips, and occasional offers from LumenShore Ltd" |
| Sender identified | ✅ | "LumenShore Ltd" in consent text |
| Unsubscribe in every email | ✅ | `/api/newsletter/unsubscribe` endpoint; consent text states "Unsubscribe anytime via the link in every email" |
| Consent recorded | ✅ | Server-side audit trail: timestamp, hashed email, consent version, text shown (`consent-log.ts`) |
| Freely given | ✅ | Newsletter is completely optional; no content/functionality gated behind subscription |
| Granular | ✅ | Newsletter consent is separate from cookie consent and waitlist consent |

### 2b. Soft Opt-In Assessment (Regulation 22(3))

The "soft opt-in" exception allows marketing without explicit consent when ALL of these conditions are met:

1. **Contact details obtained in the course of a sale** — The subscriber must have purchased or negotiated a purchase
2. **Similar products/services** — Marketing must be for the sender's own similar products
3. **Given opportunity to opt out at point of collection** — And at every subsequent communication
4. **Not opted out** — Recipient hasn't objected

#### Current Assessment:

| Condition | LumenLingo Status |
|---|---|
| Sale/negotiation context | ⚠️ **Partially applicable** — applies only to paying subscribers (Pro/Elite/Royal tiers) who provide their email during subscription |
| Similar products | ✅ LumenLingo feature updates, new language pairs, tier upgrades = similar products |
| Opt-out at collection | ✅ Unsubscribe mechanism available |
| Not opted out | ✅ Tracked via unsubscribe endpoint |

#### Decision:
**LumenLingo does NOT rely on the soft opt-in exception.** All newsletter marketing uses explicit consent. The soft opt-in is documented for reference only. If in-app email collection is added in the future (e.g., account creation), this assessment should be revisited.

### 2c. Sender Identification (Regulation 23)

PECR Regulation 23 requires that the sender's identity is not concealed and a valid opt-out address is provided.

| Requirement | Status |
|---|---|
| Sender identity visible | ✅ LumenShore Ltd in every email |
| Valid return address | ✅ hello@lumenshore.com |
| Opt-out address | ✅ Unsubscribe link in every email |

---

## 3. Regulation 24 — Directories (N/A)

PECR Regulation 24 covers telephone directories. **Not applicable** to LumenLingo.

---

## 4. Cross-Reference with Epic 2 (Cookie Consent Implementation)

Epic 2 implemented GDPR cookie consent. This PECR assessment confirms the implementation also satisfies UK PECR Regulation 6:

- **Epic 2 (Stories 2.1–2.4)**: Cookie consent banner, per-category toggles, consent API, consent logging
- **Epic 5 (Story 5.4)**: GPC/DNT signal detection — auto-suppresses non-essential storage
- **PECR addition**: Privacy Policy now includes "Electronic Communications (UK PECR)" section explaining Regulation 6 and Regulation 22 compliance

---

## 5. Annual Review Schedule

| Item | Frequency | Next Review |
|---|---|---|
| PECR Regulation 6 (cookies/storage) | Annually | January 2026 |
| PECR Regulation 22 (marketing consent) | Annually | January 2026 |
| Soft opt-in reassessment | When email collection changes | N/A (currently not applicable) |
| ICO cookie guidance updates | Quarterly check | April 2025 |

---

## Document History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | January 2025 | LumenShore Compliance | Initial PECR assessment |
