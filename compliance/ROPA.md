# Record of Processing Activities (ROPA)

**Controller**: LumenShore Ltd, Company No. 09607326
**Registered Address**: Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, LE4 9HA, United Kingdom
**Contact**: hello@lumenshore.com | legal@lumenlingo.com
**Document Version**: 2.2
**Date Created**: 2025-06-26
**Date Last Updated**: 2026-03-27
**Next Review**: 2026-07-10
**Legal Basis**: UK GDPR Article 30

---

## 1. Newsletter Signup

| Field | Details |
|---|---|
| **Processing Activity** | Newsletter email collection and distribution |
| **Purpose** | Send product updates, language learning tips, and company news to subscribers who opt in |
| **Lawful Basis** | Consent — GDPR Art. 6(1)(a) |
| **Categories of Data Subjects** | Website visitors who voluntarily subscribe |
| **Categories of Personal Data** | Email address, signup source (page location) |
| **Recipients / Sub-processors** | Email service provider (to be configured — Resend, SendGrid, or similar); currently console-logged only |
| **Transfers to Third Countries** | Dependent on email provider selection; will ensure adequacy decision or SCCs are in place |
| **Retention Period** | Until unsubscribe + 30 days to process removal |
| **Technical & Organisational Measures** | Server-side rate limiting (5 req/IP/60s), Zod input validation, no IP address storage, HTTPS in transit |

---

## 2. Waitlist / Early Access Signup

| Field | Details |
|---|---|
| **Processing Activity** | Waitlist registration for early access to new features or language pairs |
| **Purpose** | Notify users when requested features or language pairs become available |
| **Lawful Basis** | Consent — GDPR Art. 6(1)(a) |
| **Categories of Data Subjects** | Website visitors who voluntarily register interest |
| **Categories of Personal Data** | Email address, language preference, referral code (system-generated), referrer info (if applicable), timestamp |
| **Recipients / Sub-processors** | None currently (in-memory storage); database provider when backend is implemented |
| **Transfers to Third Countries** | None currently; will assess when backend is implemented |
| **Retention Period** | Until product launch + 30 days, or until removal requested |
| **Technical & Organisational Measures** | Server-side rate limiting (5 req/IP/60s), Zod input validation, HTTPS in transit |

---

## 3. Vercel Web Analytics

| Field | Details |
|---|---|
| **Processing Activity** | Anonymous page-view analytics and custom event tracking on lumenlingo.com |
| **Purpose** | Understand website usage patterns to improve user experience and prioritise feature development |
| **Lawful Basis** | Legitimate Interest — GDPR Art. 6(1)(f) (see LIA-001) |
| **Categories of Data Subjects** | All website visitors |
| **Categories of Personal Data** | Aggregated page views, Core Web Vitals, custom events (app store clicks, pricing views, blog reads, demo interactions). Cookie-free — no user identifiers, no IP storage by Vercel |
| **Recipients / Sub-processors** | Vercel Inc. (San Francisco, CA, USA) |
| **Transfers to Third Countries** | USA — Vercel processes under EU-US Data Privacy Framework |
| **Retention Period** | Per Vercel's data retention policy (aggregated, anonymised) |
| **Technical & Organisational Measures** | Cookie-free analytics (no client-side identifiers), consent-gated via `analytics` cookie category, no PII collected |
| **Consent Gating** | Requires `analytics` category consent from cookie banner before `trackEvent()` fires |

---

## 4. Sentry Error Monitoring

| Field | Details |
|---|---|
| **Processing Activity** | Automated error and performance monitoring on lumenlingo.com |
| **Purpose** | Detect, diagnose, and resolve software errors to maintain service reliability and quality |
| **Lawful Basis** | Legitimate Interest — GDPR Art. 6(1)(f) (see LIA-002) |
| **Categories of Data Subjects** | Website visitors who encounter errors |
| **Categories of Personal Data** | Stack traces, error messages, browser breadcrumbs (page navigation sequences), request metadata. No usernames, emails, or direct identifiers collected |
| **Recipients / Sub-processors** | Functional Software Inc. (Sentry), San Francisco, CA, USA |
| **Transfers to Third Countries** | USA — Sentry processes under Standard Contractual Clauses |
| **Retention Period** | 90 days (Sentry default auto-deletion) |
| **Technical & Organisational Measures** | Server-side: tracesSampleRate 0.1 (production); no PII in error payloads; HTTPS in transit; Sentry SOC 2 Type II certified |

---

## 5. Sentry Session Replay

| Field | Details |
|---|---|
| **Processing Activity** | Visual session replay recordings for debugging user-facing errors on lumenlingo.com |
| **Purpose** | Reproduce and diagnose user-facing bugs by replaying the UI session in which errors occurred |
| **Lawful Basis** | Consent — GDPR Art. 6(1)(a) |
| **Categories of Data Subjects** | Website visitors who consent to session replay via cookie banner |
| **Categories of Personal Data** | DOM snapshots of user interactions (with all text masked and all media blocked), mouse movements, page navigation. No form input content, no email text, no media content captured |
| **Recipients / Sub-processors** | Functional Software Inc. (Sentry), San Francisco, CA, USA |
| **Transfers to Third Countries** | USA — Sentry processes under Standard Contractual Clauses |
| **Retention Period** | 90 days (Sentry default auto-deletion) |
| **Technical & Organisational Measures** | `maskAllText: true` (all text masked in replays), `blockAllMedia: true` (all media blocked), consent-gated (0% sample rate until consent), 10% session sample rate / 100% error session rate when consented, dynamic integration add/remove on consent change, HTTPS in transit |

---

## 6. iOS App — Learning Data (On-Device)

| Field | Details |
|---|---|
| **Processing Activity** | Storage of user learning progress, preferences, and game performance data on the user's device |
| **Purpose** | Deliver the core language-learning service — track progress, adapt difficulty, maintain streaks, store preferences |
| **Lawful Basis** | Contract Performance — GDPR Art. 6(1)(b) (necessary to deliver the service the user signed up for) |
| **Categories of Data Subjects** | App users |
| **Categories of Personal Data** | First name, email (user-entered profile), learning progress (XP, streaks, levels), game scores and accuracy, language preferences, audio/visual settings, accessibility preferences, subscription tier, legal consent version and date |
| **Recipients / Sub-processors** | None — all data stored locally on the user's device via SwiftData |
| **Transfers to Third Countries** | None — data does not leave the device (except via iCloud, see entry 7) |
| **Retention Period** | Until app deletion or user-initiated progress reset |
| **Technical & Organisational Measures** | On-device storage only (SwiftData), iOS hardware encryption at rest, no server-side database, no external SDKs, no telemetry, no ad networks, zero third-party data sharing |

**SwiftData Models Stored:**
- **UserProfile**: firstName, email, totalXP, dailyStreak, totalActiveDays, lastActivityDate, difficulty, favoriteGame, sound/visual/accessibility preferences, selectedTierId, legalConsentVersion, legalConsentDate, trialStartDate, trialExpiredShown, dormantSettingsData
- **GameProgressRecord**: gameType, category, score, correctAnswers, totalQuestions, timeSpent, sourceLanguage, targetLanguage, createdDate
- **LanguagePreference**: sourceLanguage, targetLanguage, isActive
- **FavoriteCategory**: gameType, categoryKey, sourceLanguage, targetLanguage
- **MasteredContent**: gameType, category, contentID, masteredCount, sourceLanguage, targetLanguage

---

## 7. iCloud Sync

| Field | Details |
|---|---|
| **Processing Activity** | Synchronisation of learning data across user's Apple devices via iCloud |
| **Purpose** | Enable users to continue their learning progress seamlessly across iPhone and iPad |
| **Lawful Basis** | Contract Performance — GDPR Art. 6(1)(b) |
| **Categories of Data Subjects** | App users with iCloud enabled |
| **Categories of Personal Data** | Same as entry 6 (all SwiftData models synced via iCloud Key-Value Store) |
| **Recipients / Sub-processors** | Apple Inc. (Cupertino, CA, USA) — Apple acts as data processor for iCloud |
| **Transfers to Third Countries** | USA — Apple processes under Standard Contractual Clauses; data encrypted end-to-end in transit and at rest |
| **Retention Period** | Until user deletes from iCloud, deletes Apple account, or removes app data |
| **Technical & Organisational Measures** | Apple-managed end-to-end encryption (in transit and at rest), user-controlled via iOS Settings > iCloud, no LumenShore access to iCloud data |

---

## 8. Subscription Management (In-App Purchases)

| Field | Details |
|---|---|
| **Processing Activity** | Processing of subscription purchases and tier management via Apple's StoreKit |
| **Purpose** | Manage paid subscription tiers (Pro, Elite, Royal) and deliver corresponding premium features |
| **Lawful Basis** | Contract Performance — GDPR Art. 6(1)(b) |
| **Categories of Data Subjects** | App users who purchase subscriptions |
| **Categories of Personal Data** | Selected tier ID, trial start date, trial expiry status. Note: all payment data (card details, billing address, transaction IDs) is processed exclusively by Apple — LumenShore has no access to payment information |
| **Recipients / Sub-processors** | Apple Inc. — payment processor and subscription manager |
| **Transfers to Third Countries** | USA — Apple processes under their own privacy framework and SCCs |
| **Retention Period** | Tier selection stored locally until app deletion; Apple retains transaction records per their policy |
| **Technical & Organisational Measures** | StoreKit 2 framework (Apple-managed), no payment data touches LumenShore servers, tier stored locally as string identifier only |

---

## 9. UTM Parameter Capture

| Field | Details |
|---|---|
| **Processing Activity** | Capture of marketing attribution parameters from inbound URLs |
| **Purpose** | Measure marketing campaign effectiveness and attribute conversions to traffic sources |
| **Lawful Basis** | Legitimate Interest — GDPR Art. 6(1)(f) (standard marketing attribution) |
| **Categories of Data Subjects** | Website visitors arriving via marketing links |
| **Categories of Personal Data** | UTM parameters: source, medium, campaign, term, content. No direct identifiers — parameters describe the campaign, not the user |
| **Recipients / Sub-processors** | None — stored in session-scoped browser storage only |
| **Transfers to Third Countries** | None — client-side sessionStorage only; forwarded to first analytics event (Vercel) |
| **Retention Period** | Browser session only (cleared when tab closes) |
| **Technical & Organisational Measures** | sessionStorage (not persistent), no server-side storage, no PII |

---

## 10. Legal Consent Records (iOS App)

| Field | Details |
|---|---|
| **Processing Activity** | Recording user acceptance of Terms of Service, Privacy Policy, and EULA within the iOS app |
| **Purpose** | Demonstrate that users consented to legal terms before using the service (accountability obligation) |
| **Lawful Basis** | Legal Obligation — GDPR Art. 6(1)(c) (record-keeping for accountability under GDPR Art. 5(2)) |
| **Categories of Data Subjects** | All app users |
| **Categories of Personal Data** | Consent version string (e.g. "2.0"), consent date |
| **Recipients / Sub-processors** | None — stored locally on device |
| **Transfers to Third Countries** | None (synced via iCloud — see entry 7) |
| **Retention Period** | Retained alongside user profile until app deletion |
| **Technical & Organisational Measures** | Stored as part of UserProfile SwiftData model, versioned consent strings to track re-consent |

---

## 11. Clerk Authentication

| Field | Details |
|---|---|
| **Processing Activity** | User authentication and identity management for the web application |
| **Purpose** | Enable user account creation, sign-in, and access control for personalised features |
| **Lawful Basis** | Contract Performance -- UK GDPR Art. 6(1)(b) (necessary for account-based service) |
| **Categories of Data Subjects** | Registered website users |
| **Categories of Personal Data** | Email address, user identifier (Clerk-assigned), authentication tokens, session metadata |
| **Recipients / Sub-processors** | Clerk, Inc. (San Francisco, CA, USA) |
| **Transfers to Third Countries** | USA -- Clerk DPA with Standard Contractual Clauses; EU-US Data Privacy Framework certification |
| **Retention Period** | Until account deletion or service termination |
| **Technical & Organisational Measures** | Passwords hashed by Clerk (never accessible to LumenShore), MFA support, rate limiting, bot detection, encryption at rest and in transit, Clerk SOC 2 certified |

---

## 12. RevenueCat Subscription Management

| Field | Details |
|---|---|
| **Processing Activity** | Server-side subscription entitlement verification and purchase receipt validation |
| **Purpose** | Verify subscription status, manage premium feature entitlements, prevent fraud |
| **Lawful Basis** | Contract Performance -- UK GDPR Art. 6(1)(b) (necessary for subscription fulfilment) |
| **Categories of Data Subjects** | iOS app users who purchase subscriptions |
| **Categories of Personal Data** | Anonymous app user ID (random UUID), subscription status (active/expired), Apple purchase receipts |
| **Data NOT Collected** | Payment card data (Apple is merchant of record), email, name, learning data |
| **Recipients / Sub-processors** | RevenueCat, Inc. (San Francisco, CA, USA) |
| **Transfers to Third Countries** | USA -- RevenueCat DPA with Standard Contractual Clauses |
| **Retention Period** | Subscription lifetime plus 90 days (refund window) |
| **Technical & Organisational Measures** | Anonymous app user IDs (random UUID, no PII linkage), Apple is merchant of record for all payments, RevenueCat never receives payment card data |

---

## 13. Cookie Consent Preferences (Website)

| Field | Details |
|---|---|
| **Processing Activity** | Storage of user's cookie consent choices in browser localStorage |
| **Purpose** | Remember the user's consent decisions across website visits as required by PECR |
| **Lawful Basis** | Legal Obligation -- UK GDPR Art. 6(1)(c) (PECR Regulation 6 requires recording consent) |
| **Categories of Data Subjects** | All website visitors who interact with the cookie consent banner |
| **Categories of Personal Data** | Consent boolean values (analytics: yes/no, errorMonitoring: yes/no, sessionReplay: yes/no), locale preference |
| **Recipients / Sub-processors** | None -- client-side localStorage only |
| **Transfers to Third Countries** | None -- data never leaves the user's browser |
| **Retention Period** | Persistent in localStorage until user clears browser data or modifies via "Cookie Settings" |
| **Technical & Organisational Measures** | Client-side only, no server transmission, "Cookie Settings" footer button for modification at any time, reject-all prominently displayed |

---

## 14. Service Worker Offline Cache (Website)

| Field | Details |
|---|---|
| **Processing Activity** | Caching static website assets (HTML, CSS, JS, images, fonts) on the user's device |
| **Purpose** | Enable offline access to previously visited pages and improve page load performance |
| **Lawful Basis** | Legitimate Interest -- UK GDPR Art. 6(1)(f); strictly necessary under PECR Regulation 6 |
| **Categories of Data Subjects** | All website visitors |
| **Categories of Personal Data** | None -- cache contains only static, non-personal assets |
| **Recipients / Sub-processors** | None -- entirely client-side |
| **Transfers to Third Countries** | None -- data never leaves the user's browser |
| **Retention Period** | Until user clears browser cache, unregisters the Service Worker, or cache is invalidated by a new deployment |
| **Technical & Organisational Measures** | Browser sandbox model, cache-then-network strategy with version invalidation, no personal data cached |

---

## Summary of Lawful Bases

| # | Processing Activity | Lawful Basis | Reference |
|---|---|---|---|
| 1 | Newsletter signup | Consent | Art. 6(1)(a) |
| 2 | Waitlist signup | Consent | Art. 6(1)(a) |
| 3 | Vercel Analytics | Legitimate Interest | Art. 6(1)(f) -- LIA-001 |
| 4 | Sentry error monitoring | Legitimate Interest | Art. 6(1)(f) -- LIA-002 |
| 5 | Sentry session replay | Consent | Art. 6(1)(a) |
| 6 | iOS learning data | Contract Performance | Art. 6(1)(b) |
| 7 | iCloud sync | Contract Performance | Art. 6(1)(b) |
| 8 | Subscription management (Apple) | Contract Performance | Art. 6(1)(b) |
| 9 | UTM parameter capture | Legitimate Interest | Art. 6(1)(f) |
| 10 | Legal consent records | Legal Obligation | Art. 6(1)(c) |
| 11 | Clerk authentication | Contract Performance | Art. 6(1)(b) |
| 12 | RevenueCat subscriptions | Contract Performance | Art. 6(1)(b) |
| 13 | Cookie consent preferences | Legal Obligation | Art. 6(1)(c) |
| 14 | Service Worker cache | Legitimate Interest | Art. 6(1)(f) |

---

## Sub-Processor Register

| Sub-Processor | Processing Activity | Location | Transfer Safeguard | DPA Status |
|---|---|---|---|---|
| Apple Inc. | iCloud sync, App Store subscriptions | USA + global | Apple DPA with SCCs | Active |
| Vercel Inc. | Web analytics, hosting, speed insights | USA + global edge | Vercel DPA with SCCs; DPF certified | Active |
| Functional Software Inc. (Sentry) | Error monitoring, session replay | USA | Sentry DPA with SCCs | Active |
| Clerk, Inc. | Authentication, identity management | USA | Clerk DPA with SCCs; DPF certified | Active |
| RevenueCat, Inc. | Subscription entitlement management | USA | RevenueCat DPA with SCCs | Active |

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0 | 2025-06-26 | Initial ROPA: 10 processing activities |
| 2.2 | 2025-07-10 | Added Clerk Authentication (s11), RevenueCat Subscriptions (s12), Cookie Consent Preferences (s13), Service Worker Cache (s14). Added Sub-Processor Register. Updated summary table to 14 activities. Version-aligned with Privacy Policy v2.2. |

---

*This document is an internal compliance artefact. It is not published externally but must be available for ICO or supervisory authority inspection upon request.*
