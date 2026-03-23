# Data Protection Impact Assessment (DPIA)

**Organisation**: LumenShore Ltd (Company No. 09607326)
**Document Owner**: Data Controller
**Date Completed**: 2025-01-01
**Review Frequency**: Annual or when processing changes significantly
**Next Review**: 2026-01-01
**Legal Basis**: GDPR Article 35

---

## 1. DPIA Necessity Assessment

**Is a DPIA required?**

Under GDPR Article 35(3) and ICO guidance, a DPIA is required when processing is likely to result in a high risk to individuals' rights and freedoms. The following factors apply:

| Factor | Applicable? | Details |
|---|---|---|
| Systematic monitoring | Yes | Sentry session replay captures user behaviour on-site |
| Large-scale processing of special categories | No | No health, biometric, or special category data processed |
| Automated decision-making with legal effects | No | No automated decisions — app is a language learning tool |
| Processing of children's data | Potentially | App is 4+ on App Store; users aged 13–17 may access |
| New technologies | Partially | Session replay is a relatively new monitoring technology |
| Evaluation or scoring | No | No profiling or scoring of individuals |

**Conclusion**: DPIA is recommended due to session replay monitoring and potential processing of children's data (13–17 age group).

---

## 2. DPIA for Sentry Session Replay

### 2.1 Description of Processing

| Aspect | Detail |
|---|---|
| **Processing Operation** | Sentry session replay captures user interactions (clicks, navigation, page views) for debugging purposes |
| **Data Subjects** | Website visitors who explicitly consent to session replay |
| **Data Collected** | DOM snapshots (text masked), click coordinates, scroll events, navigation paths, page URLs, browser metadata |
| **Data NOT Collected** | Actual text content (all masked via `maskAllText: true`), media (blocked via `blockAllMedia: true`), form inputs (masked), IP addresses (anonymised by Sentry) |
| **Purpose** | Identify and reproduce bugs to improve user experience |
| **Legal Basis** | Consent — GDPR Article 6(1)(a) |
| **Retention** | 90 days (Sentry default), then automatically deleted |
| **Sub-Processor** | Functional Software Inc. (Sentry), US-based with EU data processing |

### 2.2 Necessity and Proportionality

- **Necessity**: Session replay is necessary for effective debugging of complex UI interactions that cannot be reproduced from error logs alone. Text-only error logs miss visual layout bugs, animation glitches, and interaction flow issues.
- **Proportionality**: Processing is minimised through:
  - Consent-gated: 0% sample rate until user explicitly consents (default is off)
  - `maskAllText: true` — all text content replaced with asterisks
  - `blockAllMedia: true` — all images and media blocked from capture
  - `data-sentry-mask` attribute on email inputs for additional protection
  - 10% session sample rate (not all sessions recorded even with consent)
  - 100% error session rate (captures sessions only when errors occur)
  - 90-day automatic deletion

### 2.3 Risk Assessment

| Risk | Likelihood | Severity | Overall | Mitigation |
|---|---|---|---|---|
| Unintended capture of personal data | Low | Medium | Low | `maskAllText` + `blockAllMedia` strip PII from captures |
| Re-identification from navigation patterns | Very Low | Low | Very Low | No account system on website; no PII linkage |
| Data breach at Sentry | Low | Medium | Low | Sentry SOC 2 compliant; data encrypted at rest and in transit |
| User unaware of recording | Very Low | Medium | Low | Explicit opt-in via cookie consent banner with dedicated toggle |
| Consent fatigue (users accept without reading) | Medium | Low | Low | Clear category descriptions; reject-all prominent; preferences manageable |

### 2.4 Mitigation Measures

1. **Consent before collection**: Session replay rate = 0% until explicit consent via cookie banner
2. **Data minimisation**: `maskAllText: true`, `blockAllMedia: true` applied by default
3. **Dynamic consent**: Consent withdrawal immediately sets replay rate to 0% and removes integration
4. **Retention limit**: 90 days automatic deletion by Sentry
5. **Cookie Settings**: Footer "Cookie Settings" button allows withdrawal at any time (GDPR Art. 7(3))
6. **Transparency**: Privacy Policy describes replay processing, retention, and purpose
7. **Sub-processor DPA**: Sentry DPA covers GDPR obligations for EU data

### 2.5 Residual Risk

After mitigation: **LOW**. Processing is consent-gated, text-masked, time-limited, and deletable. No special category data is involved.

---

## 3. DPIA for Children's Data (Ages 13–17)

### 3.1 Description of Processing

| Aspect | Detail |
|---|---|
| **Processing Operation** | iOS app: on-device language learning with SwiftData. Website: optional newsletter/waitlist signup. |
| **Data Subjects** | Users aged 13–17 who download the app (App Store rating 4+) |
| **Data Collected (iOS)** | Learning progress, game scores, language preferences — stored entirely on-device |
| **Data Collected (Website)** | Email address (newsletter/waitlist only, with consent) |
| **Data NOT Collected** | Age, date of birth, school, parent details, location, photographs |
| **Purpose** | Language learning service delivery |
| **Legal Basis** | Contract (Art. 6(1)(b)) for app; Consent (Art. 6(1)(a)) for newsletter/waitlist |

### 3.2 Necessity and Proportionality

- **Necessity**: Learning progress data is strictly necessary for the core function (spaced repetition, game scoring, flashcard tracking). No more data is collected than required.
- **Proportionality**: The app collects zero PII — no name, age, email, or location. All data is device-local via SwiftData. The app has no account system, no server-side database, no telemetry, and no ad networks.

### 3.3 Risk Assessment

| Risk | Likelihood | Severity | Overall | Mitigation |
|---|---|---|---|---|
| Collection of PII from minors | Very Low | High | Low | No PII collected in app; email optional on website only |
| Tracking/profiling of minors | None | High | None | Zero analytics in app; no ad networks; no SDKs |
| Parental consent not obtained (website) | Low | Medium | Low | Newsletter requires email entry (active opt-in); no pre-checked boxes |
| Data breach exposing minor's data | Very Low | High | Very Low | All data on-device; no server-side storage of app data |
| Inappropriate content exposure | None | High | None | Educational language learning content only |

### 3.4 Mitigation Measures

1. **Data minimisation**: iOS app collects zero PII. No accounts, no server database.
2. **On-device processing**: All learning data stored locally via SwiftData (Apple-managed)
3. **iCloud sync**: Apple-managed with encryption in transit; sync data = learning progress only
4. **No third-party SDKs**: App has zero external SDKs, analytics, or ad networks
5. **Age-appropriate design**: Educational content only; no social features, messaging, or user-generated content
6. **Parental controls**: iOS parental controls (Screen Time) can restrict app access
7. **Delete Account**: In-app "Delete Account" permanently erases all data

### 3.5 Residual Risk

After mitigation: **VERY LOW**. The app collects no PII and stores all data on-device. The website collects email only with explicit consent. The ICO Children's Code principles are substantially met through data minimisation and on-device processing.

---

## 4. DPIA for Analytics (Vercel Analytics)

### 4.1 Description

Vercel Analytics collects aggregated, cookie-free page view data. No PII is collected. No individual-level tracking is possible. Data is aggregated before storage.

### 4.2 Risk Assessment

**DPIA Outcome**: Not required. Vercel Analytics is privacy-preserving by design (no cookies, no PII, aggregate-only data). No high risk to data subjects.

---

## 5. DPIA for Error Monitoring (Sentry Error Reporting)

### 5.1 Description

Sentry error reporting captures JavaScript errors, stack traces, browser metadata, and anonymised request data. IP addresses are anonymised. No user-identifiable data is included in error reports.

### 5.2 Risk Assessment

**DPIA Outcome**: Low risk. Error data contains no PII (IP anonymised, text masked). Consent-gated via cookie banner (errorMonitoring category). 90-day retention. Standard debugging practice.

---

## 6. Summary & Sign-Off

| Processing Activity | DPIA Required? | Risk Level (Post-Mitigation) |
|---|---|---|
| Sentry Session Replay | Yes | Low |
| Children's Data (iOS) | Yes (precautionary) | Very Low |
| Vercel Analytics | No | Negligible |
| Sentry Error Reporting | No (low risk) | Low |

**Overall Assessment**: LumenShore's processing activities present a **low risk** to data subjects after documented mitigation measures. The most significant processing (session replay) is consent-gated with comprehensive data minimisation controls.

**Action Items**:
- [ ] Configure Sentry retention to 90 days (verify via Sentry dashboard)
- [ ] Monitor ICO Children's Code updates for any changes affecting language learning apps
- [ ] Review this DPIA annually or when adding new processing activities

---

*This document is an internal compliance artefact. Store securely and update when processing changes significantly.*
