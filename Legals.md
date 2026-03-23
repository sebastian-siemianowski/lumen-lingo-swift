# LEGALS.md — Legal Compliance Epics & Stories

> **Product**: LumenLingo (iOS App) + LumenLingo Website (lumen-lingo-frontend)
> **Company**: Lumenshore Limited (trading as LumenShore)
> **Company Number**: 09607326 (England and Wales)
> **Registered Office**: Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, England, LE4 9HA
> **Incorporated**: 26 May 2015
> **VAT Number**: GB 270411929
> **Contact**: hello@lumenshore.com
> **Governing Law**: England and Wales
> **Last Updated**: 23 March 2026
>
> **App Languages**: 9 languages, 25 language pairs (English, Spanish, French, German, Japanese, Chinese, Arabic, Polish, Ukrainian)
> **Website Locales**: 10 (en, es, fr, de, ja, zh, ar, pl, uk, pt)
> **Target Markets**: UK, EU (all member states), US, Japan, China, Middle East, Brazil/Portugal, Ukraine, Poland, Australia, Canada

---

## Current Compliance Audit Summary

### What EXISTS:
- ✅ Privacy Policy page (`/privacy`) — iOS-app focused, GDPR + CCPA sections
- ✅ Terms of Service page (`/terms`) — subscription disclosures, liability, governing law
- ✅ Accessibility Statement page (`/accessibility`) — WCAG 2.1 AA partial conformance
- ✅ Footer links to Privacy & Terms
- ✅ Newsletter form has GDPR consent notice
- ✅ API rate limiting on newsletter/waitlist endpoints
- ✅ Input validation (Zod) on all API routes
- ✅ PDF download for Privacy Policy and Terms

### Critical GAPS:
- ❌ Privacy Policy covers iOS app only — does NOT cover website email collection (newsletter + waitlist)
- ❌ No cookie consent banner (Sentry session replay captures user interactions)
- ❌ No separate Cookie/Tracking Policy
- ❌ Sentry session replay active without explicit user consent
- ❌ No App Store Privacy Nutrition Label documentation
- ❌ No in-app account deletion flow (Apple requirement when auth goes live)
- ❌ No EULA (End-User License Agreement) for App Store
- ❌ Data export gated behind paid tiers (GDPR right to portability should be free)
- ❌ Legal pages not translated (10 locales supported, legal pages English-only)
- ❌ No DSAR (Data Subject Access Request) formal process
- ❌ No DPA (Data Processing Agreement) documentation for sub-processors
- ❌ No age verification gate (Terms say 13+ but no enforcement)
- ❌ Company number/registered address not displayed on website (UK Companies Act 2006 requirement)
- ❌ VAT number not displayed on website (VAT Act 1994 requirement for VAT-registered businesses)
- ❌ No compliance with Japan APPI (app has Japanese language pairs, ja locale)
- ❌ No compliance with China PIPL (app has Chinese language pairs, zh locale)
- ❌ No compliance with Brazil LGPD (website has pt locale)
- ❌ No compliance with Germany TTDSG / BDSG (app has German pairs, de locale)
- ❌ No compliance with France CNIL guidelines (app has French pairs, fr locale)
- ❌ No compliance with Poland PUODO requirements (8 Polish language pairs, pl locale)
- ❌ No compliance with Ukraine data protection law (app has Ukrainian pairs, uk locale)
- ❌ No compliance with Middle East data protection laws (app has Arabic pairs, ar locale)
- ❌ No EU VAT OSS registration assessment for digital services B2C
- ❌ No age of digital consent mapping per jurisdiction (varies: 13 US, 16 Germany/Netherlands, 14 Spain/Italy, 15 France, 13 UK)
- ❌ Privacy Policy falsely claims "no email addresses" collected — website collects emails

---

## Tech Stack Reference (for policy alignment)

### iOS App
| Component | Technology | Data Impact |
|---|---|---|
| UI | SwiftUI (iOS 17+) | None |
| Persistence | SwiftData (on-device) | Learning progress, preferences, XP, streaks |
| Cloud Sync | iCloud KVS + SwiftData/CloudKit | Tier selection, dormant settings, learning data |
| Auth | Mock (protocol-ready for SIWA/Firebase) | Hardcoded placeholder — no real PII yet |
| Payments | None (mock TierManager) | No real transactions yet |
| Analytics | None | Zero telemetry |
| External SDKs | Zero | Fully native |

### Website (lumen-lingo-frontend)
| Component | Technology | Data Impact |
|---|---|---|
| Framework | Next.js 16, React 19 | None |
| Analytics | @vercel/analytics (cookie-free) | Anonymous page views |
| Performance | @vercel/speed-insights | Anonymous metrics |
| Error Monitoring | @sentry/nextjs (session replay 0.1%, 100% on error) | User interaction capture |
| i18n | next-intl (10 locales) | Locale from URL |
| Email Collection | Newsletter + Waitlist API routes | Email addresses, language preferences |
| Caching | Service Worker (PWA) | Static assets on device |

---

## Epic 1: Website Privacy Policy Overhaul

**Priority**: P0 — Critical
**Scope**: lumen-lingo-frontend
**Rationale**: Current privacy policy only covers the iOS app. Website collects emails via newsletter/waitlist and uses Sentry session replay — none of this is disclosed. GDPR violation risk.

### Story 1.1: Unified Privacy Policy Covering Both App and Website

**As a** user visiting the LumenLingo website or using the iOS app
**I want** a single comprehensive privacy policy that covers both platforms
**So that** I understand exactly what data is collected across all touchpoints

#### Subtasks:
- [ ] 1.1.1 — Restructure `/privacy` page with two clear sections: "Website" and "iOS App"
- [ ] 1.1.2 — Add Website Data Collection section covering:
  - Email addresses (newsletter signup, waitlist signup)
  - Language preferences (waitlist form)
  - UTM parameters (sessionStorage, campaign attribution)
  - Anonymous page views (Vercel Analytics)
  - Anonymous performance metrics (Vercel Speed Insights)
  - Error data and session replays (Sentry)
  - IP addresses (rate limiting on API routes)
- [ ] 1.1.3 — Add explicit Sentry session replay disclosure: what is captured, sampling rates (0.1% normal, 100% on error), what data is sent to Sentry servers
- [ ] 1.1.4 — Add Vercel Analytics disclosure (cookie-free, anonymous, what is tracked)
- [ ] 1.1.5 — Add Service Worker / offline caching disclosure (what is cached locally)
- [ ] 1.1.6 — List all custom analytics events tracked via Vercel `track()`: `app_store_click`, `pricing_view`, `pricing_cta_click`, `blog_post_read`, `feature_section_view`, `newsletter_signup`, `demo_started`, `demo_completed`, `demo_cta_click`, `page_not_found`, `error_page_view`
- [ ] 1.1.7 — Update "Data We Do Not Collect" section to remove false claim about "no email addresses" (website does collect them)
- [ ] 1.1.8 — Add legal basis for processing under GDPR for each data type (consent, legitimate interest, contractual necessity)
- [ ] 1.1.9 — Add data flow diagram or plain-English explanation of where data goes (Vercel servers, Sentry servers, user device)
- [ ] 1.1.10 — Update "Last Updated" date and add version history

**Acceptance Criteria**:
- Privacy policy covers 100% of data collected by both website and iOS app
- Every third-party service is named with link to their privacy policy
- Legal basis for processing stated per data category
- No false claims about data not collected

### Story 1.2: Sub-Processor Disclosure

**As a** user concerned about who has access to my data
**I want** to see a clear list of all third-party services that process my data
**So that** I can make informed decisions about using LumenLingo

#### Subtasks:
- [ ] 1.2.1 — Create sub-processor table in Privacy Policy with: service name, purpose, data processed, location, privacy policy link
- [ ] 1.2.2 — Include: Apple (iCloud, App Store), Vercel (hosting, analytics, speed insights), Sentry (error monitoring), any future ESP (email service provider)
- [ ] 1.2.3 — Add statement about DPA (Data Processing Agreement) status with each sub-processor
- [ ] 1.2.4 — Add notification mechanism for sub-processor changes (email or changelog)

**Acceptance Criteria**:
- All sub-processors listed with data they access
- DPA status documented
- User can identify every entity that touches their data

### Story 1.3: International Data Transfer Disclosure

**As a** EU/UK user
**I want** to know if my data is transferred outside the EEA/UK
**So that** I understand the safeguards in place

#### Subtasks:
- [ ] 1.3.1 — Document where each sub-processor stores data (Vercel: US edge + EU regions, Sentry: US, Apple: global)
- [ ] 1.3.2 — State transfer mechanisms used (Standard Contractual Clauses, EU-US Data Privacy Framework, adequacy decisions)
- [ ] 1.3.3 — Add section to privacy policy: "International Data Transfers"
- [ ] 1.3.4 — Reference Vercel's GDPR DPA and Sentry's SCCs

**Acceptance Criteria**:
- Every cross-border data transfer documented
- Legal mechanism for each transfer stated
- Compliant with UK GDPR Chapter V and EU GDPR Chapter V

---

## Epic 2: Cookie & Tracking Consent System

**Priority**: P0 — Critical
**Scope**: lumen-lingo-frontend
**Rationale**: Sentry session replay captures user interactions without consent. ePrivacy Directive (EU) and UK PECR require consent for non-essential tracking. GDPR requires consent for session replay.

### Story 2.1: Cookie Consent Banner Implementation

**As a** website visitor
**I want** to be informed about tracking and give or withhold consent
**So that** my privacy choices are respected

#### Subtasks:
- [ ] 2.1.1 — Design cookie consent banner matching LumenLingo dark/glass UI aesthetic
- [ ] 2.1.2 — Implement consent categories: Essential (always on), Analytics (Vercel), Error Monitoring (Sentry), Session Replay (Sentry replay)
- [ ] 2.1.3 — Store consent preferences in `localStorage` with expiry (13 months per GDPR guidance)
- [ ] 2.1.4 — Do NOT load Sentry session replay until user consents to "Session Replay" category
- [ ] 2.1.5 — Do NOT fire Vercel analytics `track()` events until user consents to "Analytics" category (note: basic Vercel Analytics is cookie-free and may not require consent — document decision)
- [ ] 2.1.6 — Show banner on first visit; allow re-access from footer "Cookie Settings" link
- [ ] 2.1.7 — Implement "Accept All", "Reject All", and "Manage Preferences" buttons
- [ ] 2.1.8 — Ensure banner is accessible (keyboard navigable, screen reader compatible, WCAG 2.1 AA)
- [ ] 2.1.9 — Ensure banner renders correctly in all 10 supported locales
- [ ] 2.1.10 — Ensure consent state is checked before initializing Sentry in `sentry.client.config.ts`

**Acceptance Criteria**:
- Banner appears on first visit
- No non-essential tracking fires before consent
- Consent persists across sessions (localStorage)
- User can change preferences at any time
- Works in all 10 locales

### Story 2.2: Cookie Policy Page

**As a** user
**I want** a dedicated cookie policy page
**So that** I understand exactly what cookies and storage mechanisms are used

#### Subtasks:
- [ ] 2.2.1 — Create `/cookies` route in `src/app/[locale]/cookies/page.tsx`
- [ ] 2.2.2 — Document all cookies, localStorage keys, sessionStorage keys, and Service Worker caching
- [ ] 2.2.3 — For each: name, purpose, duration, type (essential/analytics/functional), first-party vs third-party
- [ ] 2.2.4 — Include Sentry cookies/storage if any
- [ ] 2.2.5 — Include Service Worker cache details (what URLs are cached, cache duration)
- [ ] 2.2.6 — Include sessionStorage UTM parameter tracking
- [ ] 2.2.7 — Add link to Cookie Policy from cookie consent banner and from footer
- [ ] 2.2.8 — Add "Download PDF" button matching existing Privacy/Terms pattern
- [ ] 2.2.9 — Add to sitemap

**Acceptance Criteria**:
- Every storage mechanism documented
- Categorized by purpose (essential, analytics, error monitoring)
- Accessible from banner and footer
- PDF downloadable

### Story 2.3: Sentry Session Replay Consent Gate

**As a** privacy-conscious user
**I want** session replays to only record my interactions if I explicitly opt in
**So that** my browsing behavior is not captured without my knowledge

#### Subtasks:
- [ ] 2.3.1 — Audit current Sentry config in `sentry.client.config.ts` for replay settings
- [ ] 2.3.2 — Modify Sentry initialization to conditionally enable `replaysSessionSampleRate` and `replaysOnErrorSampleRate` based on consent
- [ ] 2.3.3 — If consent not given: set both replay rates to 0
- [ ] 2.3.4 — If consent given: restore 0.1% session / 100% error rates
- [ ] 2.3.5 — Configure Sentry replay to mask all text inputs and personal data (`maskAllText: true`, `blockAllMedia: true` as defaults)
- [ ] 2.3.6 — Add data-sentry-mask attributes to any forms collecting PII (newsletter, waitlist, contact)
- [ ] 2.3.7 — Test that no replay data is sent before consent

**Acceptance Criteria**:
- Zero session replay data sent without explicit consent
- PII masking active even with consent
- Consent revocation stops future replays immediately

---

## Epic 3: App Store Compliance (iOS)

**Priority**: P0 — Critical
**Scope**: LumenLingo iOS App + App Store Connect
**Rationale**: Apple has strict requirements for app submission. Missing any of these results in rejection.

### Story 3.1: App Store Privacy Nutrition Labels

**As a** developer submitting to the App Store
**I want** accurate privacy nutrition labels configured in App Store Connect
**So that** the app passes review and users see truthful privacy information

#### Subtasks:
- [ ] 3.1.1 — Document all data types collected by the iOS app per Apple's categories:
  - **Contact Info**: None (auth is mock; when SIWA goes live: name, email via Apple)
  - **Identifiers**: None (no device ID, no advertising ID)
  - **Usage Data**: Product Interaction (game sessions, scores, XP, streaks) — linked to user
  - **Diagnostics**: None (no crash reporting, no performance data sent)
  - **Other Data**: User preferences (sound, visual, tier selection) — linked to user
- [ ] 3.1.2 — Determine data linkage: "Data Linked to You" for all SwiftData user profile fields
- [ ] 3.1.3 — Determine tracking: "Data NOT Used to Track You" (no ad networks, no cross-app tracking)
- [ ] 3.1.4 — Configure App Store Connect privacy labels matching above analysis
- [ ] 3.1.5 — Write internal documentation mapping each nutrition label to code location
- [ ] 3.1.6 — Review Apple's "App Privacy Details" guidelines to ensure nothing is missed
- [ ] 3.1.7 — Plan label updates for when real auth (SIWA) and real payments (StoreKit) go live

**Acceptance Criteria**:
- All privacy labels accurately reflect current app behavior
- Internal mapping document connects each label to source code
- Plan exists for updating labels when auth/payments are implemented

### Story 3.2: Apple EULA (End-User License Agreement)

**As a** developer publishing on the App Store
**I want** a proper EULA either using Apple's standard or a custom one
**So that** the app has appropriate license terms for users

#### Subtasks:
- [ ] 3.2.1 — Decide: use Apple Standard EULA or custom EULA (recommendation: custom, to cover tier-specific features and content licensing)
- [ ] 3.2.2 — If custom: draft EULA covering:
  - License grant (non-exclusive, non-transferable, revocable)
  - Scope of use (personal, non-commercial language learning)
  - Tier-specific feature access (Free/Pro/Elite/Royal)
  - Content ownership (LumenShore owns all content; user owns their progress data)
  - Restrictions (no reverse engineering, no redistribution, no scraping)
  - Termination conditions
  - Warranty disclaimer
  - Limitation of liability
  - Governing law (England and Wales)
- [ ] 3.2.3 — Upload custom EULA to App Store Connect (per-app or per-territory)
- [ ] 3.2.4 — Add EULA link to app settings screen
- [ ] 3.2.5 — Host EULA on website at `/eula` for reference

**Acceptance Criteria**:
- EULA uploaded to App Store Connect
- EULA accessible from within the app
- EULA hosted on website
- Covers all tier-specific licensing terms

### Story 3.3: In-App Subscription Disclosure (Pre-Implementation)

**As a** user considering a subscription
**I want** clear subscription terms visible before purchase
**So that** I understand what I'm agreeing to

#### Subtasks:
- [ ] 3.3.1 — Prepare subscription disclosure text for paywall screen:
  - Price per period (£9.99/mo Pro, £19.99/mo Elite, £99.99/mo Royal)
  - Billing frequency (monthly)
  - Auto-renewal disclosure: "Subscription automatically renews unless canceled at least 24 hours before the end of the current period"
  - Cancellation: "Manage subscriptions in iOS Settings > Apple ID > Subscriptions"
  - Free trial: "14-day Royal trial. No charge during trial. Downgrades to Free tier after trial."
  - Payment: "Payment will be charged to your Apple ID account at confirmation of purchase"
- [ ] 3.3.2 — Place disclosure text below the purchase button on paywall (Apple guideline 3.1.2)
- [ ] 3.3.3 — Link to Terms of Service and Privacy Policy from paywall screen
- [ ] 3.3.4 — Ensure "Restore Purchases" button is visible on paywall (Apple requirement)
- [ ] 3.3.5 — Add subscription terms to Terms of Service if not already present (verify current /terms page covers this)
- [ ] 3.3.6 — Create `SubscriptionDisclosureView.swift` component for reuse across all paywall surfaces

**Acceptance Criteria**:
- All Apple-required subscription text present on paywall
- Restore Purchases button visible
- Links to Terms and Privacy Policy functional
- Disclosure text matches App Store Connect subscription metadata

### Story 3.4: Account Deletion Capability

**As a** user with an account
**I want** to delete my account and all associated data from within the app
**So that** I can exercise my right to be forgotten (Apple requirement + GDPR Article 17)

#### Subtasks:
- [ ] 3.4.1 — Implement account deletion flow in Settings:
  - Confirmation dialog with clear warning about data loss
  - Two-step confirmation (tap "Delete Account" → confirm in alert)
  - Progress indicator during deletion
- [ ] 3.4.2 — Delete all local SwiftData records: UserProfile, GameProgressRecord, LanguagePreference, FavoriteCategory, MasteredContent
- [ ] 3.4.3 — Clear iCloud KVS data (tier selection, dormant settings)
- [ ] 3.4.4 — Clear all UserDefaults / @PersistedState values
- [ ] 3.4.5 — If using CloudKit sync: trigger remote data deletion
- [ ] 3.4.6 — If using real auth (SIWA): revoke Apple Sign In token and delete server-side account
- [ ] 3.4.7 — Navigate user to onboarding/welcome screen after deletion
- [ ] 3.4.8 — Add account deletion option to Privacy Policy as a user right
- [ ] 3.4.9 — Test full deletion flow and verify no data remnants via Xcode data inspector

**Acceptance Criteria**:
- All user data deleted from device, iCloud, and any server
- App returns to clean first-launch state
- Meets Apple guideline 5.1.1(v) — account deletion
- Meets GDPR Article 17 — right to erasure

### Story 3.5: App Store Review Guidelines Pre-Submission Checklist

**As a** developer preparing for App Store submission
**I want** a verified checklist of all Apple review requirements
**So that** the app is not rejected

#### Subtasks:
- [ ] 3.5.1 — Verify guideline 1.2: Safety — no objectionable content in flashcards
- [ ] 3.5.2 — Verify guideline 2.1: Performance — app must be complete and functional (no mock data in prod)
- [ ] 3.5.3 — Verify guideline 2.3.1: Accurate metadata — screenshots match actual app
- [ ] 3.5.4 — Verify guideline 3.1.1: In-App Purchase — all digital content/subscriptions use Apple IAP
- [ ] 3.5.5 — Verify guideline 3.1.2: Subscription disclosure text on paywall
- [ ] 3.5.6 — Verify guideline 4.0: Design — app follows HIG, no misleading UI
- [ ] 3.5.7 — Verify guideline 5.1.1(i): Privacy policy URL in App Store Connect
- [ ] 3.5.8 — Verify guideline 5.1.1(v): Account deletion available if accounts exist
- [ ] 3.5.9 — Verify guideline 5.1.2: App privacy nutrition labels accurate
- [ ] 3.5.10 — Verify guideline 5.1.3: No use of IDFA without ATT prompt (currently N/A — no ad SDKs)
- [ ] 3.5.11 — Verify support URL in App Store Connect points to functional page
- [ ] 3.5.12 — Verify marketing URL works
- [ ] 3.5.13 — Prepare App Review notes explaining any demo/test content
- [ ] 3.5.14 — Ensure prod build has no debug UI, no mock auth (switch to real auth or remove mock data)

**Acceptance Criteria**:
- Checklist completed with pass/fail for each item
- All failures resolved before submission
- App Review notes prepared

---

## Epic 4: GDPR Full Compliance

**Priority**: P0 — Critical
**Scope**: lumen-lingo-frontend + LumenLingo iOS App
**Rationale**: LumenShore Ltd is a UK company. UK GDPR and EU GDPR apply. Non-compliance carries fines up to £17.5M / €20M or 4% global turnover.

### Story 4.1: Lawful Basis Documentation

**As a** data controller (LumenShore Ltd)
**I want** documented lawful basis for every category of personal data processing
**So that** we comply with GDPR Article 6 and can demonstrate accountability

#### Subtasks:
- [ ] 4.1.1 — Create internal "Record of Processing Activities" (ROPA) document per GDPR Article 30:
  - Processing activity name
  - Purpose of processing
  - Categories of data subjects
  - Categories of personal data
  - Recipients / sub-processors
  - Transfers to third countries
  - Retention periods
  - Technical and organizational security measures
- [ ] 4.1.2 — Map lawful basis for each processing activity:
  - Newsletter signup → Consent (GDPR Art. 6(1)(a))
  - Waitlist signup → Consent (GDPR Art. 6(1)(a))
  - Vercel Analytics → Legitimate Interest (GDPR Art. 6(1)(f)) — cookie-free, anonymous
  - Sentry error monitoring → Legitimate Interest (GDPR Art. 6(1)(f)) — service reliability
  - Sentry session replay → Consent (GDPR Art. 6(1)(a)) — captures user behavior
  - iOS app learning data → Contract performance (GDPR Art. 6(1)(b)) — necessary to deliver service
  - iCloud sync → Contract performance (GDPR Art. 6(1)(b))
  - Subscription management → Contract performance (GDPR Art. 6(1)(b))
- [ ] 4.1.3 — Document legitimate interest assessments (LIA) for Vercel Analytics and Sentry error monitoring
- [ ] 4.1.4 — Store ROPA and LIA documents in internal compliance folder (not public-facing)

**Acceptance Criteria**:
- ROPA covers all processing activities across website and iOS app
- Lawful basis documented and defensible for each
- LIA completed for legitimate interest claims
- Available for ICO (UK) or DPA inspection

### Story 4.2: Data Subject Access Request (DSAR) Process

**As a** user
**I want** to request access to, correction of, or deletion of my personal data
**So that** I can exercise my rights under GDPR Articles 15-22

#### Subtasks:
- [ ] 4.2.1 — Create DSAR request mechanism:
  - Email: hello@lumenshore.com (already listed)
  - Optional: dedicated `/dsar` or `/data-request` page with structured form
- [ ] 4.2.2 — Define internal DSAR handling procedure:
  - Acknowledge within 72 hours
  - Complete within 30 days (extendable to 90 for complex requests)
  - Identity verification before disclosure
  - Free of charge (unless manifestly excessive)
- [ ] 4.2.3 — Implement DSAR response templates for:
  - Right of Access (Art. 15) — provide copy of all data
  - Right to Rectification (Art. 16) — correct inaccurate data
  - Right to Erasure (Art. 17) — delete all data
  - Right to Data Portability (Art. 20) — export in machine-readable format
  - Right to Restrict Processing (Art. 18) — stop processing but retain data
  - Right to Object (Art. 21) — object to legitimate interest processing
- [ ] 4.2.4 — Document which data can be provided for each right:
  - Website: emails from newsletter/waitlist, Sentry logs (request from Sentry), Vercel logs (limited)
  - iOS app: all SwiftData on device (user has direct access), iCloud data (via Apple)
- [ ] 4.2.5 — Add DSAR process description to Privacy Policy
- [ ] 4.2.6 — Create internal log for tracking DSARs (date received, type, status, completion date)

**Acceptance Criteria**:
- Users can submit DSARs via email or web form
- Internal process documented with timelines
- Response templates ready for each right
- DSAR log maintained for accountability

### Story 4.3: Data Portability (Free Access)

**As a** user
**I want** to export my learning data in a machine-readable format for free
**So that** I can exercise my GDPR Article 20 right to data portability

#### Subtasks:
- [ ] 4.3.1 — Audit current DataExporter service — currently tier-gated (requires Pro+ for CSV/JSON/PDF export)
- [ ] 4.3.2 — **Legal requirement**: GDPR data portability must be FREE regardless of subscription tier
- [ ] 4.3.3 — Separate "premium export features" (formatted PDF reports, analytics insights) from "GDPR data export" (raw data dump)
- [ ] 4.3.4 — Implement free data export option in Settings accessible to all tiers:
  - Export all personal data as JSON
  - Include: UserProfile, GameProgressRecord, LanguagePreference, FavoriteCategory, MasteredContent
  - Format: machine-readable (JSON)
- [ ] 4.3.5 — Keep premium DataExporter features (formatted PDFs, CSV with analytics) gated to paid tiers
- [ ] 4.3.6 — Add data export instructions to Privacy Policy under "Your Rights" section

**Acceptance Criteria**:
- All users (including Free tier) can export their personal data as JSON
- Export is free and accessible from Settings
- Premium export features remain tier-gated as a value-add (not a GDPR obligation)
- Data portability right documented in Privacy Policy

### Story 4.4: Consent Management & Records

**As a** data controller
**I want** to record and manage all user consents
**So that** I can demonstrate GDPR compliance and respond to audits

#### Subtasks:
- [ ] 4.4.1 — Record newsletter consent: timestamp, email, IP address (hashed), consent text shown, version
- [ ] 4.4.2 — Record waitlist consent: same fields as above plus language preference
- [ ] 4.4.3 — Record cookie consent: timestamp, categories accepted/rejected, consent banner version
- [ ] 4.4.4 — Store consent records securely (when backend is implemented)
- [ ] 4.4.5 — Implement consent withdrawal mechanism:
  - Newsletter: unsubscribe link in every email
  - Waitlist: email to request removal
  - Cookies: "Cookie Settings" link in footer to revoke/change
- [ ] 4.4.6 — Ensure consent withdrawal is as easy as giving consent (GDPR Art. 7(3))
- [ ] 4.4.7 — Add consent version tracking — when consent text changes, re-consent may be required

**Acceptance Criteria**:
- All consents recorded with timestamp and version
- Withdrawal mechanism exists for each consent type
- Consent records available for audit
- Consent text versioned

### Story 4.5: Data Retention Policy

**As a** data controller
**I want** defined retention periods for all categories of personal data
**So that** we don't hold data longer than necessary (GDPR Art. 5(1)(e))

#### Subtasks:
- [ ] 4.5.1 — Define retention periods:
  - Newsletter emails: until unsubscribe + 30 days to process
  - Waitlist emails: until product launch + 30 days, or until request removal
  - Sentry error logs: per Sentry's retention policy (default 90 days)
  - Sentry session replays: per Sentry's retention policy (default 90 days)
  - Vercel Analytics: per Vercel's retention policy
  - iOS app data: until user deletes app or resets progress
  - iCloud data: until user deletes from iCloud or deletes account
  - Consent records: 3 years after last interaction (for accountability)
  - DSAR logs: 3 years after completion
- [ ] 4.5.2 — Document retention periods in Privacy Policy
- [ ] 4.5.3 — Implement automated data deletion where possible:
  - Purge old waitlist entries after defined period
  - Configure Sentry retention settings
- [ ] 4.5.4 — Create internal data retention schedule document
- [ ] 4.5.5 — Annual review trigger for retention policy

**Acceptance Criteria**:
- Retention period defined for every data category
- Documented in Privacy Policy
- Automated deletion where technically feasible
- Annual review scheduled

### Story 4.6: Data Protection Impact Assessment (DPIA)

**As a** data controller
**I want** a DPIA for processing activities that pose high risk to individuals
**So that** we comply with GDPR Article 35

#### Subtasks:
- [ ] 4.6.1 — Assess whether DPIA is required (likely yes due to: session replay monitoring, processing of children's data 13+, systematic monitoring via analytics)
- [ ] 4.6.2 — Complete DPIA covering:
  - Description of processing operations
  - Purpose and necessity assessment
  - Risk assessment to data subjects
  - Mitigation measures
  - Consultation with DPO (if applicable — small company may not need DPO)
- [ ] 4.6.3 — Document DPIA for Sentry session replay specifically (high risk: captures user behavior)
- [ ] 4.6.4 — Document DPIA for children's data processing (users aged 13-17)
- [ ] 4.6.5 — Store DPIA internally, update when processing changes significantly

**Acceptance Criteria**:
- DPIA completed for all high-risk processing
- Risk mitigation measures documented
- DPIA stored internally and reviewed annually

---

## Epic 5: CCPA / US State Privacy Laws Compliance

**Priority**: P1 — High
**Scope**: lumen-lingo-frontend + LumenLingo iOS App
**Rationale**: California (CCPA/CPRA), Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA), and other US states have consumer privacy laws. If the app has US users, compliance is needed.

### Story 5.1: CCPA Notice at Collection

**As a** California resident
**I want** to know what personal information is collected and why before or at the point of collection
**So that** I can exercise my rights under the CCPA

#### Subtasks:
- [ ] 5.1.1 — Add "Notice at Collection" section to Privacy Policy covering:
  - Categories of personal information collected
  - Purposes for each category
  - Whether information is sold or shared (NO — LumenLingo does not sell data)
  - Retention period for each category
- [ ] 5.1.2 — Map CCPA categories to actual data collected:
  - Identifiers: email address (newsletter/waitlist)
  - Internet activity: page views, app usage analytics, error logs
  - Geolocation: not collected
  - Audio/visual: not collected
  - Professional: not collected
  - Education: language learning progress (arguably educational)
  - Inferences: not drawn
- [ ] 5.1.3 — Add "Do Not Sell or Share My Personal Information" link (even if not selling — CCPA requires the link if applicable)
- [ ] 5.1.4 — Verify: does LumenLingo meet CCPA thresholds? (>$25M revenue, or >50K consumers, or >50% revenue from selling data) — likely NOT yet, but prepare anyway for growth

**Acceptance Criteria**:
- Notice at Collection present in Privacy Policy
- All CCPA categories mapped
- "Do Not Sell" statement present
- Threshold assessment documented

### Story 5.2: Consumer Rights Implementation (US)

**As a** US consumer
**I want** to exercise my privacy rights
**So that** I can control my personal information

#### Subtasks:
- [ ] 5.2.1 — Implement (or prepare) for CCPA consumer rights:
  - Right to Know: what data collected (covered by DSAR process)
  - Right to Delete: delete personal data (covered by account deletion)
  - Right to Opt-Out of Sale: N/A (no data selling) — but add statement
  - Right to Non-Discrimination: cannot charge more for exercising rights
  - Right to Correct: correct inaccurate data
- [ ] 5.2.2 — Add CCPA-specific rights section to Privacy Policy (verify current /privacy page coverage — partially exists)
- [ ] 5.2.3 — Ensure verification process for consumer requests (reasonable security measures)
- [ ] 5.2.4 — Document response timeframes (CCPA: 45 days, extendable to 90)
- [ ] 5.2.5 — Add Virginia VCDPA, Colorado CPA, Connecticut CTDPA rights language (similar rights, slightly different frameworks)
- [ ] 5.2.6 — Add "Your California Privacy Rights" section with toll-free number or email

**Acceptance Criteria**:
- All CCPA consumer rights addressable
- Multi-state privacy rights documented
- Response process and timelines defined
- No discrimination against users exercising rights

### Story 5.3: Children's Privacy (COPPA Compliance)

**As a** parent of a child under 13
**I want** assurance that my child's data is protected
**So that** I can trust LumenLingo with my family

#### Subtasks:
- [ ] 5.3.1 — Clarify age policy: Terms state 13+ but no enforcement mechanism
- [ ] 5.3.2 — Implement age gate at app onboarding / website signup:
  - Ask date of birth or age range
  - If under 13: block account creation, show message directing to parent
  - If 13-17: note parental consent may be required in some jurisdictions
- [ ] 5.3.3 — COPPA requirements if allowing under-13 users:
  - Verifiable parental consent before collecting data
  - Privacy policy specifically addressing children's data
  - Right of parent to review, delete, and refuse further collection
  - Data minimization for children
  - **Recommendation**: do NOT allow under-13 users — simplest compliance path
- [ ] 5.3.4 — Add children's privacy section to Privacy Policy (verify current coverage — partially exists)
- [ ] 5.3.5 — If targeting education market: consider FERPA implications (Family Educational Rights and Privacy Act) for school use
- [ ] 5.3.6 — Apple App Store: set age rating appropriately in App Store Connect (likely 4+ content, but 13+ for account)

**Acceptance Criteria**:
- Clear age policy enforced (13+ minimum)
- Age gate implemented at registration point
- Children's privacy addressed in Privacy Policy
- App Store age rating set accurately

---

## Epic 6: UK-Specific Legal Compliance

**Priority**: P1 — High
**Scope**: All platforms
**Rationale**: LumenShore Ltd is incorporated in the UK. UK-specific regulations apply in addition to GDPR.

### Story 6.1: UK GDPR & Data Protection Act 2018 Compliance

**As a** UK data controller
**I want** to comply with the UK GDPR and DPA 2018
**So that** LumenShore avoids ICO enforcement action

#### Subtasks:
- [ ] 6.1.1 — Register with ICO (Information Commissioner's Office):
  - Data protection fee registration (£40/year for micro-organizations, £60/year for small organizations)
  - Lumenshore Limited (Company No. 09607326) → limited company, likely needs to register
  - Registered address for ICO: Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, LE4 9HA
  - Check if already registered and renewal date
- [ ] 6.1.2 — Appoint a data protection lead (even if not legally required to have a DPO):
  - Document who is responsible for data protection
  - Add contact to Privacy Policy
- [ ] 6.1.3 — Ensure UK GDPR adequacy decision references are current:
  - UK recognizes EU adequacy (until June 2025 bridge expires — check current status)
  - EU-US Data Privacy Framework recognition
- [ ] 6.1.4 — Review DPA 2018 special category data provisions (likely N/A — no health, biometric, or sensitive data)
- [ ] 6.1.5 — Add ICO complaint right to Privacy Policy:
  - "You have the right to lodge a complaint with the Information Commissioner's Office (ICO)"
  - ICO contact: https://ico.org.uk/make-a-complaint/

**Acceptance Criteria**:
- ICO registration completed (or exemption documented)
- Data protection lead appointed and documented
- ICO complaint right in Privacy Policy
- UK-specific legal framework referenced correctly

### Story 6.2: PECR (Privacy and Electronic Communications Regulations) Compliance

**As a** UK business sending marketing communications
**I want** to comply with PECR
**So that** email marketing is legally compliant

#### Subtasks:
- [ ] 6.2.1 — Newsletter signup compliance:
  - Require explicit opt-in (no pre-ticked boxes)
  - Clear description of what emails they'll receive
  - Unsubscribe mechanism in every email
  - Identify sender (LumenShore Ltd) in every email
- [ ] 6.2.2 — Soft opt-in assessment: if user is an existing customer (subscriber), PECR allows marketing for similar products without explicit consent — document this
- [ ] 6.2.3 — Cookie consent under PECR:
  - PECR requires consent for non-essential cookies/storage (stricter than GDPR in some ways)
  - Applies to: Sentry tracking, session replay, any non-essential localStorage
  - Does NOT apply to: strictly necessary cookies (session management, security)
- [ ] 6.2.4 — Document PECR compliance alongside GDPR cookie consent implementation (Epic 2)

**Acceptance Criteria**:
- Newsletter compliant with PECR
- Cookie consent meets PECR requirements
- Soft opt-in documented where applicable

### Story 6.3: UK Consumer Rights Act 2015 — Digital Content

**As a** UK consumer purchasing a subscription
**I want** the digital content to be of satisfactory quality
**So that** my consumer rights are protected

#### Subtasks:
- [ ] 6.3.1 — Document compliance with Consumer Rights Act 2015 (digital content provisions):
  - Digital content must be of satisfactory quality
  - Digital content must be fit for purpose
  - Digital content must match its description
- [ ] 6.3.2 — Add consumer rights section to Terms of Service:
  - Right to repair or replacement if digital content is faulty
  - Right to price reduction if repair/replacement not possible
  - 14-day cooling-off period for online purchases (Consumer Contracts Regulations 2013)
- [ ] 6.3.3 — Note conflict with Apple's refund policy: Apple handles all refunds for IAP — document that users should contact Apple for refunds but LumenShore supports the process
- [ ] 6.3.4 — Add statutory rights statement: "Nothing in these Terms affects your statutory rights as a consumer"

**Acceptance Criteria**:
- Consumer Rights Act 2015 provisions addressed in Terms
- Statutory rights preserved
- Refund process documented (via Apple)
- 14-day cooling-off period addressed

### Story 6.4: UK Accessibility Regulations

**As a** user with disabilities
**I want** the app and website to meet UK accessibility requirements
**So that** I can use LumenLingo effectively

#### Subtasks:
- [ ] 6.4.1 — Verify Equality Act 2010 compliance for digital services:
  - Reasonable adjustments for disabled users
  - Website meets WCAG 2.1 AA (already partially claimed on /accessibility page)
- [ ] 6.4.2 — Public Sector Bodies Accessibility Regulations 2018 — likely N/A (private company) but good practice
- [ ] 6.4.3 — Verify iOS app accessibility:
  - VoiceOver support for all interactive elements
  - Dynamic Type support
  - Sufficient color contrast
  - All images have accessibility labels
- [ ] 6.4.4 — Update Accessibility Statement with:
  - Known limitations and timeline for fixes
  - How to report accessibility issues
  - Alternative ways to access content if needed
- [ ] 6.4.5 — Schedule regular accessibility audit (quarterly)

**Acceptance Criteria**:
- Website WCAG 2.1 AA compliance verified
- iOS app VoiceOver compatibility verified
- Accessibility Statement accurate and current
- Regular audit schedule established

---

## Epic 7: EU Digital Services Act (DSA) & Digital Markets Act (DMA) Compliance

**Priority**: P2 — Medium
**Scope**: lumen-lingo-frontend + LumenLingo iOS App
**Rationale**: The DSA applies to all digital services offered in the EU. While primarily targeting large platforms, smaller services must still comply with transparency and content obligations.

### Story 7.1: DSA Transparency Requirements

**As a** digital service provider operating in the EU
**I want** to meet DSA transparency obligations
**So that** LumenLingo complies with EU Regulation 2022/2065

#### Subtasks:
- [ ] 7.1.1 — Add point-of-contact for EU authorities and users on website:
  - Publish email/contact form for legal inquiries (hello@lumenshore.com or dedicated legal@lumenshore.com)
  - Designate a legal representative in the EU (if LumenShore Ltd has no EU establishment)
- [ ] 7.1.2 — Add Terms of Service transparency per DSA Art. 14:
  - Content moderation policies (for user-generated content, if any — currently N/A)
  - Any algorithmic decision-making used (learning path recommendations, if applicable)
  - Clear complaint-handling mechanism
- [ ] 7.1.3 — Assess whether LumenLingo qualifies as "intermediary service" under DSA:
  - Blog content: hosted by LumenShore (publisher, not intermediary)
  - User content: none currently (no comments, no forums)
  - If user-generated content is added in the future → full DSA notice-and-action obligations apply
- [ ] 7.1.4 — Add DSA compliance statement to Terms of Service if applicable

**Acceptance Criteria**:
- EU contact point published
- DSA obligations assessed and documented
- Terms updated if required

### Story 7.2: EU Representative Appointment (if required)

**As a** UK company offering services to EU residents
**I want** to appoint an EU representative if required by GDPR Art. 27 and/or DSA
**So that** EU authorities have a local contact

#### Subtasks:
- [ ] 7.2.1 — Assess GDPR Art. 27 obligation:
  - Controller not established in EU but processing EU resident data → must appoint EU representative
  - LumenShore Ltd (UK) processes EU data via website and app
  - Unless processing is "occasional" and does not include large-scale special categories
- [ ] 7.2.2 — If required: appoint EU representative (can be a service like DataRep, European Data Protection Office, etc.)
- [ ] 7.2.3 — Publish EU representative details in Privacy Policy
- [ ] 7.2.4 — Inform supervisory authority of EU representative appointment

**Acceptance Criteria**:
- Assessment completed
- EU representative appointed if required
- Details published in Privacy Policy

---

## Epic 8: Intellectual Property & Content Protection

**Priority**: P1 — High
**Scope**: All platforms
**Rationale**: LumenLingo contains proprietary language learning content (flashcards, grammar points, phrases, audio). IP protection is essential for the business.

### Story 8.1: Copyright & Content Ownership Documentation

**As a** content creator and business owner
**I want** clear copyright assertions on all content
**So that** LumenLingo's intellectual property is protected

#### Subtasks:
- [ ] 8.1.1 — Add copyright notice to website footer: "© 2015-2026 Lumenshore Limited. All rights reserved."
- [ ] 8.1.2 — Add copyright notice to iOS app Settings/About screen
- [ ] 8.1.3 — Verify Terms of Service IP section covers:
  - All content (flashcards, grammar rules, phrases, example sentences, audio recordings) is owned by LumenShore Ltd
  - User license: non-exclusive, non-transferable, personal use only
  - Prohibitions: no copying, redistribution, commercial use, scraping, derivative works
  - User-generated content (if any in future): user retains ownership, grants LumenShore license to display
- [ ] 8.1.4 — Add DMCA / copyright infringement notice process:
  - Designated agent for DMCA takedown notices
  - Email: legal@lumenshore.com or hello@lumenshore.com
  - Process for responding to valid takedown requests
- [ ] 8.1.5 — Document content sources and licenses for any third-party content used (dictionaries, word lists, translations)
- [ ] 8.1.6 — Consider trademark registration for "LumenLingo" and "LumenShore" in key jurisdictions (UK, EU, US)

**Acceptance Criteria**:
- Copyright notice on all platforms
- IP terms comprehensive in Terms of Service
- DMCA process documented
- Third-party content licenses verified

### Story 8.2: Open Source License Compliance

**As a** developer using open-source dependencies
**I want** to comply with all open-source licenses
**So that** LumenLingo doesn't face licensing claims

#### Subtasks:
- [ ] 8.2.1 — Audit iOS app dependencies:
  - Currently zero external dependencies (fully native) → no OSS compliance needed for iOS
  - When dependencies are added: track licenses and comply with attribution requirements
- [ ] 8.2.2 — Audit website (lumen-lingo-frontend) dependencies:
  - next.js: MIT License ✓
  - react: MIT License ✓
  - framer-motion: MIT License ✓
  - tailwindcss: MIT License ✓
  - @sentry/nextjs: MIT License ✓
  - @vercel/analytics: MIT License ✓
  - next-intl: MIT License ✓
  - zod: MIT License ✓
  - All others: verify license compatibility
- [ ] 8.2.3 — Create `/licenses` or `/open-source` page listing all open-source packages and their licenses
- [ ] 8.2.4 — Add acknowledgments section in iOS app Settings for any future OSS dependencies
- [ ] 8.2.5 — Implement automated license checker in CI/CD pipeline (e.g., `license-checker` npm package)

**Acceptance Criteria**:
- All dependencies audited for license compatibility
- No copyleft (GPL) dependencies in proprietary iOS app
- Acknowledgments/licenses page available
- CI/CD license check in place

### Story 8.3: User Content & Community Guidelines (Future-Proofing)

**As a** platform preparing for user-generated content features
**I want** community guidelines and content moderation policies ready
**So that** we're prepared when social features launch

#### Subtasks:
- [ ] 8.3.1 — Draft Community Guidelines covering:
  - Acceptable use (language learning, constructive discussion)
  - Prohibited content (hate speech, harassment, spam, illegal content)
  - Content moderation approach (automated + manual review)
  - Reporting mechanism for users
  - Appeal process
- [ ] 8.3.2 — Draft content moderation policy per DSA requirements
- [ ] 8.3.3 — Prepare Terms of Service addendum for user-generated content:
  - License grant from user to LumenShore (display, modify, distribute)
  - User retains ownership of their content
  - Right to remove content that violates guidelines
  - Indemnification by user for their content
- [ ] 8.3.4 — Add `/community-guidelines` page (deploy when social features launch)

**Acceptance Criteria**:
- Community Guidelines drafted and reviewed
- Content moderation policy ready
- ToS addendum prepared
- Ready to deploy when UGC features launch

---

## Epic 9: Subscription & Payment Compliance

**Priority**: P0 — Critical (when IAP goes live)
**Scope**: LumenLingo iOS App + Website
**Rationale**: Apple IAP rules, UK Consumer Contracts Regulations, EU CRD, and auto-renewal laws require specific disclosures.

### Story 9.1: Apple In-App Purchase Implementation Compliance

**As a** developer implementing StoreKit subscriptions
**I want** full compliance with Apple's IAP guidelines
**So that** the app passes App Review and users are properly informed

#### Subtasks:
- [ ] 9.1.1 — Use StoreKit 2 for all subscription management
- [ ] 9.1.2 — Ensure ALL digital purchases go through Apple IAP (no external payment links per App Store guideline 3.1.1)
- [ ] 9.1.3 — Display subscription price fetched from StoreKit (not hardcoded) — prices vary by region
- [ ] 9.1.4 — Implement "Restore Purchases" button prominently on paywall and in Settings
- [ ] 9.1.5 — Handle all subscription states: active, expired, billing retry, grace period, revoked
- [ ] 9.1.6 — Display auto-renewal disclosure per Apple guideline 3.1.2:
  - Subscription name and duration
  - Price
  - "Subscription automatically renews unless canceled at least 24 hours before the end of the current period"
  - "Payment will be charged to your Apple ID account at confirmation of purchase"
  - "Your account will be charged for renewal within 24 hours prior to the end of the current period"
  - "You can manage and cancel your subscriptions by going to your account settings on the App Store after purchase"
  - Links to Terms and Privacy Policy
- [ ] 9.1.7 — Handle free trial to paid transition:
  - "14-day free trial of Royal tier" — clear start/end
  - "After trial ends, subscription auto-renews at [price]/month unless canceled"
  - Display trial end date prominently in app

**Acceptance Criteria**:
- All IAP through StoreKit 2
- Restore Purchases functional
- All Apple-required disclosure text present
- Free trial terms clearly communicated
- Dynamic pricing (not hardcoded)

### Story 9.2: UK Consumer Contracts Regulations 2013 — Distance Selling

**As a** UK consumer purchasing a subscription remotely
**I want** my distance selling rights protected
**So that** I have proper cooling-off and cancellation rights

#### Subtasks:
- [ ] 9.2.1 — Implement 14-day cooling-off period disclosure:
  - Consumer Contracts Regulations 2013 give 14-day right to cancel distance contracts
  - For digital content: right to cancel may be waived if consumer consents to immediate performance AND acknowledges loss of cancellation right
  - Apple IAP: Apple's terms handle this — but LumenShore must acknowledge consumer rights
- [ ] 9.2.2 — Add pre-purchase information per CCR 2013 Schedule 2:
  - Main characteristics of digital content
  - Identity of trader (LumenShore Ltd)
  - Business address (registered address)
  - Price including all taxes
  - Payment arrangements
  - Duration of contract
  - Cancellation rights and how to exercise them
- [ ] 9.2.3 — Provide order confirmation (handled by Apple receipt)
- [ ] 9.2.4 — Add distance selling rights summary to Terms of Service
- [ ] 9.2.5 — Document that Apple processes all refunds — include link to Apple's refund page (reportaproblem.apple.com)

**Acceptance Criteria**:
- All CCR 2013 pre-purchase information provided
- Cooling-off period addressed
- Refund process documented
- Consumer rights preserved

### Story 9.3: EU Consumer Rights Directive (CRD) Compliance

**As a** EU consumer
**I want** my consumer rights respected when subscribing
**So that** I have proper protection under EU law

#### Subtasks:
- [ ] 9.3.1 — Ensure compliance with EU Consumer Rights Directive (2011/83/EU):
  - Pre-contractual information requirements (similar to UK CCR)
  - Right of withdrawal (14 days) with explicit waiver for digital content
  - Prohibition of hidden charges
  - Clear pricing in local currency
- [ ] 9.3.2 — Implement "button with obligation to pay" requirement:
  - Purchase button must clearly indicate financial obligation
  - e.g. "Subscribe — £9.99/month" not just "Continue"
- [ ] 9.3.3 — Support automatic subscription cancellation per EU regulation:
  - Easy cancellation mechanism (at least as easy as subscribing)
  - Note: Apple handles this via Settings, but add clear instructions in-app
- [ ] 9.3.4 — Add EU-specific consumer rights section to Terms of Service

**Acceptance Criteria**:
- EU CRD pre-contractual information provided
- Button text indicates payment obligation
- Cancellation as easy as subscription
- EU consumer rights documented

### Story 9.4: Pricing Transparency & Tax Compliance

**As a** user in any jurisdiction
**I want** clear pricing with applicable taxes
**So that** I know exactly what I'll pay

#### Subtasks:
- [ ] 9.4.1 — Website pricing page:
  - Display prices inclusive of VAT/tax (UK and EU require this for B2C)
  - Note that Apple handles actual billing and tax collection for iOS app
  - Add "Prices may vary by region" disclaimer
- [ ] 9.4.2 — iOS app paywall:
  - Use StoreKit-provided localized prices (automatically includes local tax)
  - Never hardcode prices — they differ by country and change with tax rates
- [ ] 9.4.3 — Add pricing disclaimer to website:
  - "Prices shown in GBP include UK VAT. Actual price charged may vary based on your location and local taxes. All purchases are processed by Apple."
- [ ] 9.4.4 — VAT compliance (Lumenshore Limited IS VAT-registered: GB 270411929):
  - **VAT on digital services to UK consumers**: 20% VAT must be charged
  - **Apple's role**: Apple acts as agent/merchant of record for iOS IAP — Apple remits VAT to HMRC for UK iOS transactions
  - **Website direct sales** (if any future non-IAP revenue): must charge and remit VAT
  - **EU VAT OSS (One Stop Shop)**: for B2C digital services to EU consumers, register for EU VAT OSS to simplify multi-country VAT returns (instead of registering in each EU member state)
  - **EU VAT rates by country**: vary from 17% (Luxembourg) to 27% (Hungary) for digital services
  - **Apple handles EU VAT** for IAP — but if selling directly on website to EU consumers, must register for OSS or use Apple's marketplace regime
  - **Display VAT number on website**: required by VAT Act 1994 and EU VAT Directive
  - **VAT invoicing**: ensure VAT invoices available if requested (B2B customers)
  - **Japan Consumption Tax (JCT)**: 10% on digital services — Apple handles for IAP; assess if direct sales to Japan require JCT registration
  - **US sales tax**: varies by state; Apple handles for IAP; no direct website sales currently
  - **Annual VAT return and Making Tax Digital (MTD)** compliance with HMRC

**Acceptance Criteria**:
- Prices displayed with tax/VAT included (B2C)
- StoreKit dynamic pricing in app
- VAT obligations assessed and documented
- Apple's tax handling role documented

---

## Epic 10: Legal Page Internationalization

**Priority**: P1 — High
**Scope**: lumen-lingo-frontend
**Rationale**: Website supports 10 locales but legal pages are English-only. Some jurisdictions require legal documents in the local language. EU Consumer Rights Directive requires pre-contractual information in the language of the consumer.

### Story 10.1: Privacy Policy Translation

**As a** non-English speaking user
**I want** the Privacy Policy in my language
**So that** I can understand how my data is processed

#### Subtasks:
- [ ] 10.1.1 — Extract all Privacy Policy text into translation keys in message files
- [ ] 10.1.2 — Translate Privacy Policy into all 10 supported locales:
  - en (English) — source ✓
  - es (Spanish)
  - fr (French)
  - de (German)
  - pt (Portuguese)
  - ja (Japanese)
  - pl (Polish)
  - ar (Arabic)
  - zh (Chinese)
  - uk (Ukrainian)
- [ ] 10.1.3 — Use professional/legal translation service (not machine translation alone — legal language requires precision)
- [ ] 10.1.4 — Add "This policy is available in [languages]. In case of conflict, the English version prevails." disclaimer
- [ ] 10.1.5 — Ensure RTL layout works for Arabic translation
- [ ] 10.1.6 — Update all locale JSON files in `messages/` directory

**Acceptance Criteria**:
- Privacy Policy available in all 10 locales
- Professional translations verified
- English version stated as authoritative
- RTL support functional

### Story 10.2: Terms of Service Translation

**As a** non-English speaking user
**I want** the Terms of Service in my language
**So that** I can understand the agreement I'm entering

#### Subtasks:
- [ ] 10.2.1 — Extract Terms of Service text into translation keys
- [ ] 10.2.2 — Translate into all 10 supported locales (same list as 10.1.2)
- [ ] 10.2.3 — Professional/legal translation review
- [ ] 10.2.4 — Add governing law notice: "These Terms are governed by the laws of England and Wales regardless of language version"
- [ ] 10.2.5 — Ensure subscription terms are accurately translated (pricing, auto-renewal, cancellation)

**Acceptance Criteria**:
- Terms available in all 10 locales
- Legal accuracy verified per locale
- Governing law clearly stated

### Story 10.3: Cookie Policy & EULA Translation

**As a** non-English speaking user
**I want** all legal documents in my language
**So that** I have full understanding of all policies

#### Subtasks:
- [ ] 10.3.1 — Translate Cookie Policy into all 10 locales
- [ ] 10.3.2 — Translate EULA into all 10 locales
- [ ] 10.3.3 — Translate cookie consent banner into all 10 locales
- [ ] 10.3.4 — Translate Accessibility Statement into all 10 locales
- [ ] 10.3.5 — Ensure PDF download generates correct locale version

**Acceptance Criteria**:
- All legal documents available in all supported locales
- Cookie banner localized
- PDF export works per locale

---

## Epic 11: iOS App In-App Legal Compliance

**Priority**: P0 — Critical
**Scope**: LumenLingo iOS App
**Rationale**: Apple requires legal documents accessible from within the app, not just the website. Users must be able to access Privacy Policy, Terms, and subscription info without leaving the app.

### Story 11.1: In-App Legal Document Access

**As a** user of the iOS app
**I want** to access all legal documents from within the app
**So that** I don't need to visit the website to read policies

#### Subtasks:
- [ ] 11.1.1 — Add "Legal" section to Settings screen with links to:
  - Privacy Policy
  - Terms of Service
  - EULA
  - Cookie Policy (for completeness, though primarily website-relevant)
  - Open Source Licenses (when dependencies are added)
- [ ] 11.1.2 — Implement in-app WebView or native text rendering for legal documents:
  - Option A: `SFSafariViewController` linking to website pages (simpler, always up-to-date)
  - Option B: Native SwiftUI text views with bundled content (works offline)
  - Recommendation: Option A for primary, with Option B fallback for offline
- [ ] 11.1.3 — Add legal agreement acknowledgment during first launch / onboarding:
  - "By using LumenLingo, you agree to our Terms of Service and Privacy Policy"
  - Tappable links to both documents
  - Not a blocking gate (Apple discourages blocking onboarding) but clear acknowledgment
- [ ] 11.1.4 — Add Privacy Policy and Terms links to paywall/subscription screen
- [ ] 11.1.5 — Add version number and "Last Updated" date next to each legal document link

**Acceptance Criteria**:
- All legal documents accessible from Settings
- Links functional (online and offline)
- Onboarding acknowledgment present
- Paywall includes legal links

### Story 11.2: In-App Privacy Controls

**As a** user
**I want** to manage my privacy preferences within the app
**So that** I can control my data without leaving the app

#### Subtasks:
- [ ] 11.2.1 — Add "Privacy" section to Settings:
  - iCloud sync toggle (enable/disable cloud sync)
  - Analytics opt-out (when analytics are added)
  - Data export button (JSON export per GDPR — Epic 4 Story 4.3)
  - Delete all data button (progress reset + account deletion)
  - View my data (show summary of stored data)
- [ ] 11.2.2 — Implement "View My Data" screen showing:
  - Profile information stored
  - Number of game progress records
  - Number of mastered items
  - Number of favorites
  - iCloud sync status
  - Data size estimate
- [ ] 11.2.3 — Add confirmation dialogs for destructive privacy actions (delete, disable sync)
- [ ] 11.2.4 — Log privacy preference changes for audit trail

**Acceptance Criteria**:
- Privacy controls accessible from Settings
- Users can view, export, and delete their data in-app
- Destructive actions require confirmation
- Changes logged

### Story 11.3: App Tracking Transparency (ATT) Preparation

**As a** developer adding analytics or advertising in the future
**I want** ATT framework compliance prepared
**So that** we're ready when tracking is added

#### Subtasks:
- [ ] 11.3.1 — Currently N/A: no IDFA usage, no cross-app tracking, no ad SDKs
- [ ] 11.3.2 — Document ATT requirements for future reference:
  - If IDFA is ever used → must show ATT prompt before accessing
  - If third-party analytics SDK tracks across apps → requires ATT
  - If advertising SDK is added → requires ATT
- [ ] 11.3.3 — Prepare ATT prompt string (NSUserTrackingUsageDescription):
  - "LumenLingo would like permission to track your activity across other apps and websites to improve your experience and provide personalized content."
- [ ] 11.3.4 — Add Info.plist entry preparation (do NOT add until actually needed — Apple rejects apps with ATT prompt that don't actually track)
- [ ] 11.3.5 — Plan: if adding analytics, prefer privacy-respecting options (TelemetryDeck, privacy-first analytics) that don't require ATT

**Acceptance Criteria**:
- ATT requirements documented for future implementation
- No unnecessary ATT prompt in current build
- Privacy-first analytics strategy documented

---

## Epic 12: Security & Data Breach Preparedness

**Priority**: P1 — High
**Scope**: All platforms
**Rationale**: GDPR requires data breach notification within 72 hours. UK DPA 2018 and CCPA also have breach notification requirements. Proactive security posture reduces liability.

### Story 12.1: Data Breach Response Plan

**As a** data controller
**I want** a documented data breach response plan
**So that** we can respond within legal timeframes and minimize harm

#### Subtasks:
- [ ] 12.1.1 — Create Data Breach Response Plan covering:
  - Definition of a personal data breach (GDPR Art. 4(12))
  - Detection and identification procedures
  - Initial containment steps
  - Risk assessment framework (likelihood and severity)
  - Notification decision tree: when to notify ICO, data subjects, or neither
- [ ] 12.1.2 — ICO notification requirements:
  - Notify within 72 hours of becoming aware (GDPR Art. 33)
  - Include: nature of breach, categories/numbers affected, DPO contact, consequences, mitigation measures
  - Use ICO's personal data breach notification form
- [ ] 12.1.3 — Data subject notification requirements:
  - If breach is "likely to result in high risk to the rights and freedoms of individuals" (GDPR Art. 34)
  - Clear, plain language communication
  - Include: nature of breach, DPO contact, consequences, mitigation measures
- [ ] 12.1.4 — CCPA breach notification:
  - Notify California residents "in the most expedient time possible and without unreasonable delay"
  - If >500 California residents affected: notify California AG
- [ ] 12.1.5 — Create internal breach log (GDPR Art. 33(5)):
  - All breaches documented, even those not reported to ICO
  - Facts, effects, remedial actions
- [ ] 12.1.6 — Assign breach response roles: who detects, who assesses, who notifies, who communicates
- [ ] 12.1.7 — Annual breach response simulation/drill

**Acceptance Criteria**:
- Breach response plan documented and approved
- Notification templates ready for ICO and data subjects
- Breach log template created
- Roles assigned
- Plan reviewed annually

### Story 12.2: Security Policy Documentation

**As a** business
**I want** a documented security policy
**So that** we can demonstrate "appropriate technical and organizational measures" (GDPR Art. 32)

#### Subtasks:
- [ ] 12.2.1 — Document technical security measures:
  - iOS app: all data on-device (SwiftData encryption at rest via iOS), iCloud encryption in transit and at rest
  - Website: HTTPS everywhere (Vercel), API rate limiting, input validation (Zod), no SQL (no database)
  - Authentication: mock currently → plan for SIWA (Apple-managed credentials)
  - No sensitive data stored server-side (website is stateless)
- [ ] 12.2.2 — Document organizational security measures:
  - Access control (who can access production systems)
  - Code review process
  - Dependency update policy
  - Secret management (environment variables, no hardcoded keys)
- [ ] 12.2.3 — API security review:
  - `/api/newsletter` — rate limited, validated, no auth required (public endpoint)
  - `/api/waitlist` — rate limited, validated, no auth required (public endpoint)
  - Review for injection, CSRF, SSRF vulnerabilities
- [ ] 12.2.4 — Dependency vulnerability scanning:
  - Run `npm audit` on lumen-lingo-frontend regularly
  - Set up automated alerts for critical vulnerabilities (Dependabot/Snyk)
- [ ] 12.2.5 — Penetration testing plan (annual or before major releases)

**Acceptance Criteria**:
- Security policy documented
- Technical and organizational measures listed
- API security reviewed
- Vulnerability scanning active
- Pen test scheduled

### Story 12.3: Responsible Disclosure Policy

**As a** security researcher
**I want** a way to report vulnerabilities responsibly
**So that** security issues can be fixed before exploitation

#### Subtasks:
- [ ] 12.3.1 — Create `/.well-known/security.txt` file on website per RFC 9116:
  - Contact: security@lumenshore.com (or hello@lumenshore.com)
  - Preferred languages: English
  - Policy URL
  - Encryption: optional PGP key
- [ ] 12.3.2 — Create `/security` page on website with:
  - How to report vulnerabilities
  - Scope (website, iOS app, API endpoints)
  - What qualifies (XSS, injection, auth bypass, etc.)
  - What doesn't qualify (social engineering, DoS)
  - Response timeline commitment (acknowledge within 48 hours)
  - No legal threat for good-faith research
- [ ] 12.3.3 — Add security.txt to `public/` directory in lumen-lingo-frontend
- [ ] 12.3.4 — Monitor security@lumenshore.com inbox

**Acceptance Criteria**:
- security.txt published
- Security page accessible
- Reporting process clear
- Monitoring in place

---

## Epic 13: Email Marketing & Communications Compliance

**Priority**: P1 — High
**Scope**: lumen-lingo-frontend (newsletter, waitlist, transactional emails)
**Rationale**: UK PECR, EU ePrivacy Directive, US CAN-SPAM Act, and GDPR all regulate electronic marketing communications.

### Story 13.1: CAN-SPAM Act Compliance (US)

**As a** business sending emails to US recipients
**I want** to comply with the CAN-SPAM Act
**So that** we avoid fines ($51,744 per violation)

#### Subtasks:
- [ ] 13.1.1 — Ensure all marketing emails include:
  - Clear "From" identification (LumenShore Ltd / LumenLingo)
  - Accurate subject lines (not misleading)
  - Physical postal address of sender (LumenShore Ltd registered address)
  - Conspicuous unsubscribe mechanism (one-click)
  - Clear identification as advertisement (if applicable)
- [ ] 13.1.2 — Process unsubscribe requests within 10 business days
- [ ] 13.1.3 — Never sell or transfer email addresses to third parties for their marketing
- [ ] 13.1.4 — Monitor all email sending (newsletter, waitlist notifications, transactional emails)
- [ ] 13.1.5 — Distinguish transactional emails (account-related, required) from marketing emails (newsletters, promotions)

**Acceptance Criteria**:
- All marketing emails CAN-SPAM compliant
- Unsubscribe processed within 10 days
- Physical address included
- Transactional vs marketing emails distinguished

### Story 13.2: Anti-Spam Law Compliance (Canada CASL, Australia Spam Act)

**As a** global business
**I want** to comply with anti-spam laws in key markets
**So that** email marketing is legal worldwide

#### Subtasks:
- [ ] 13.2.1 — Canada's CASL (Canada's Anti-Spam Legislation):
  - Requires express consent (opt-in) before sending commercial electronic messages
  - Must identify sender, include contact info, and provide unsubscribe
  - Implied consent for existing business relationships (limited duration)
  - Consent records must be kept
- [ ] 13.2.2 — Australia Spam Act 2003:
  - Consent required for commercial messages
  - Must identify sender
  - Must include functional unsubscribe
  - Unsubscribe within 5 business days
- [ ] 13.2.3 — General approach: treat all email marketing as requiring explicit opt-in (covers most jurisdictions)
- [ ] 13.2.4 — Document compliance approach for each major market

**Acceptance Criteria**:
- Email practices compliant with CASL, Australian Spam Act
- Explicit opt-in used globally
- Compliance documented per market

### Story 13.3: Email Service Provider (ESP) Compliance

**As a** business wiring up a real email service
**I want** the ESP integration to be legally compliant
**So that** data handling is GDPR-safe end-to-end

#### Subtasks:
- [ ] 13.3.1 — When selecting ESP (Resend, SendGrid, Mailchimp, etc.):
  - Verify GDPR compliance and DPA availability
  - Check data processing location (EU/US/other)
  - Review their sub-processors
  - Ensure data portability (can export subscriber list)
- [ ] 13.3.2 — Execute DPA with chosen ESP
- [ ] 13.3.3 — Add ESP to sub-processor list in Privacy Policy
- [ ] 13.3.4 — Configure double opt-in for newsletter:
  - Step 1: user submits email
  - Step 2: confirmation email sent
  - Step 3: user clicks confirmation link
  - Only then added to mailing list
- [ ] 13.3.5 — Implement preference center:
  - Choose which topics to receive
  - Frequency preferences
  - Easy unsubscribe from all
- [ ] 13.3.6 — Store consent proof: timestamp, IP, consent text version, opt-in method

**Acceptance Criteria**:
- ESP selected with GDPR-compliant DPA
- Double opt-in implemented
- Preference center available
- Consent proof stored

---

## Epic 14: Dispute Resolution & Liability Protection

**Priority**: P1 — High
**Scope**: All platforms
**Rationale**: Proper dispute resolution and liability limitation clauses protect LumenShore from legal claims.

### Story 14.1: Dispute Resolution Clause Enhancement

**As a** business owner
**I want** robust dispute resolution procedures in Terms of Service
**So that** disputes are handled efficiently without costly litigation

#### Subtasks:
- [ ] 14.1.1 — Review and enhance dispute resolution clause in Terms:
  - Step 1: Informal resolution (email to hello@lumenshore.com, 30-day good faith period)
  - Step 2: Mediation (optional, via agreed mediator)
  - Step 3: Court proceedings (England and Wales jurisdiction)
- [ ] 14.1.2 — Add EU Online Dispute Resolution (ODR) link per EU Regulation 524/2013:
  - Required for EU B2C e-commerce
  - Link to EC ODR platform: https://ec.europa.eu/consumers/odr/
  - Note: this is being phased out but still required until fully replaced
- [ ] 14.1.3 — Consider adding arbitration clause for US users (optional but common):
  - Individual arbitration (not class action)
  - Opt-out period (30 days from first use)
  - Small claims court exception
- [ ] 14.1.4 — Add class action waiver (if permissible in jurisdiction)
- [ ] 14.1.5 — Review enforceability of dispute resolution clauses per jurisdiction

**Acceptance Criteria**:
- Multi-step dispute resolution process documented
- EU ODR link published
- US arbitration clause considered
- Enforceability reviewed

### Story 14.2: Limitation of Liability & Disclaimers

**As a** business
**I want** appropriate liability limitations in Terms of Service
**So that** LumenShore is protected from disproportionate claims

#### Subtasks:
- [ ] 14.2.1 — Review current limitation of liability clause in Terms (verify coverage):
  - Disclaimer of warranties (AS IS, AS AVAILABLE)
  - Limitation of consequential/indirect damages
  - Cap on aggregate liability (fees paid in trailing 12 months or £100, whichever greater)
  - Exclusions: cannot exclude liability for death/personal injury (UK law), fraud, statutory rights
  - Reference Lumenshore Limited (Company No. 09607326) as the contracting entity
- [ ] 14.2.2 — Add educational content disclaimer:
  - "LumenLingo is a language learning aid, not a certified educational institution"
  - "We do not guarantee fluency or any specific level of proficiency"
  - "Content is for general learning purposes and should not be relied upon for professional translation"
- [ ] 14.2.3 — Add force majeure clause:
  - Excuses non-performance due to events beyond reasonable control
  - Natural disasters, government actions, internet failures, pandemic
- [ ] 14.2.4 — Add indemnification clause:
  - User indemnifies LumenShore for: misuse, violation of Terms, infringement claims
- [ ] 14.2.5 — Ensure statutory consumer rights are preserved (UK Consumer Rights Act 2015):
  - "Nothing in these Terms excludes or limits our liability for: death or personal injury caused by our negligence; fraud or fraudulent misrepresentation; any other liability that cannot be excluded by law"

**Acceptance Criteria**:
- Liability limitations comprehensive but fair
- Statutory exceptions properly carved out
- Educational disclaimer present
- Force majeure and indemnification clauses present

### Story 14.3: Insurance & Legal Protection

**As a** business owner
**I want** appropriate insurance coverage
**So that** LumenShore is protected against claims

#### Subtasks:
- [ ] 14.3.1 — Assess insurance needs:
  - Professional indemnity insurance (covers service errors, negligence claims)
  - Cyber liability insurance (covers data breach costs, notification, legal defense)
  - Product liability insurance (may apply to digital products)
  - Directors & officers liability insurance
- [ ] 14.3.2 — Obtain cyber liability insurance:
  - Coverage for data breach response costs
  - Coverage for regulatory fines (where insurable)
  - Coverage for legal defense
  - Coverage for business interruption
- [ ] 14.3.3 — Document insurance coverage and renewal dates
- [ ] 14.3.4 — Annual insurance review aligned with business growth

**Acceptance Criteria**:
- Insurance needs assessed
- Cyber liability insurance obtained
- Coverage documented
- Annual review scheduled

---

## Epic 15: Ongoing Compliance & Governance

**Priority**: P2 — Medium (Critical for ongoing operations)
**Scope**: All platforms
**Rationale**: Legal compliance is not a one-time task. Laws change, features change, and ongoing monitoring is essential.

### Story 15.1: Legal Document Version Control & Changelog

**As a** business
**I want** versioned legal documents with changelogs
**So that** changes are transparent and auditable

#### Subtasks:
- [ ] 15.1.1 — Implement version numbering for all legal documents:
  - Privacy Policy v1.0, v1.1, v2.0, etc.
  - Terms of Service v1.0, v1.1, etc.
  - Cookie Policy v1.0, etc.
- [ ] 15.1.2 — Create changelog section at bottom of each legal page:
  - Date of change
  - Summary of what changed
  - Version number
- [ ] 15.1.3 — Implement "What's Changed" notification:
  - Banner or modal when legal documents are updated
  - "We've updated our Privacy Policy. [View changes]"
- [ ] 15.1.4 — Store historical versions (in Git or on website as `/privacy/v1`, `/privacy/v2`)
- [ ] 15.1.5 — Notify existing users of material changes (email if newsletter active, in-app notification)
- [ ] 15.1.6 — Re-consent mechanism for material privacy policy changes (GDPR best practice)

**Acceptance Criteria**:
- All legal docs versioned
- Changelog maintained
- Users notified of changes
- Historical versions accessible

### Story 15.2: Annual Legal Audit Process

**As a** business
**I want** a scheduled annual legal audit
**So that** compliance is maintained as laws and features evolve

#### Subtasks:
- [ ] 15.2.1 — Create annual audit checklist:
  - Privacy Policy accuracy (does it still match actual data collection?)
  - Terms of Service accuracy (do they match current features?)
  - Cookie Policy accuracy (any new cookies/tracking?)
  - App Store compliance (any new Apple guidelines?)
  - GDPR compliance (any regulatory changes?)
  - CCPA/state law compliance (any new state laws?)
  - UK law compliance (any post-Brexit regulatory changes?)
  - Insurance coverage adequacy
  - ICO registration renewal
- [ ] 15.2.2 — Schedule annual audit date (e.g., January each year)
- [ ] 15.2.3 — Assign audit responsibility
- [ ] 15.2.4 — Document audit findings and remediation actions
- [ ] 15.2.5 — Track new laws:
  - EU AI Act (if AI features added)
  - EU Data Act
  - New US state privacy laws (currently 15+ states with laws)
  - UK Data Reform Bill updates
  - India DPDPA (Digital Personal Data Protection Act) — if targeting India

**Acceptance Criteria**:
- Annual audit checklist created
- Audit scheduled and assigned
- Regulatory monitoring in place
- Remediation process defined

### Story 15.3: Feature-Level Legal Impact Assessment

**As a** product owner
**I want** a legal impact assessment for every new feature
**So that** new features don't introduce compliance gaps

#### Subtasks:
- [ ] 15.3.1 — Create "Legal Impact Assessment" template for new features:
  - Does this feature collect new personal data?
  - Does this feature share data with a new third party?
  - Does this feature affect children?
  - Does this feature involve automated decision-making?
  - Does this feature affect subscription terms?
  - Does this feature need a Privacy Policy update?
  - Does this feature need a Terms of Service update?
  - Does this feature need a DPIA?
- [ ] 15.3.2 — Integrate legal impact assessment into feature development workflow
- [ ] 15.3.3 — Require assessment completion before feature merge
- [ ] 15.3.4 — Document completed assessments

**Acceptance Criteria**:
- Template created
- Integrated into development workflow
- Mandatory for all new features
- Assessments documented

### Story 15.4: Regulatory Compliance Monitoring

**As a** business
**I want** to monitor regulatory changes that affect LumenLingo
**So that** we can adapt proactively

#### Subtasks:
- [ ] 15.4.1 — Monitor Apple developer news and guideline changes:
  - Subscribe to Apple Developer Newsletter
  - Review WWDC policy sessions annually
  - Check App Store Review Guidelines before each submission
- [ ] 15.4.2 — Monitor ICO / EU DPA guidance updates:
  - Subscribe to ICO newsletter
  - Follow EDPB (European Data Protection Board) opinions
- [ ] 15.4.3 — Monitor US state privacy law developments:
  - IAPP (International Association of Privacy Professionals) tracker
  - California AG CPRA enforcement updates
- [ ] 15.4.4 — Monitor EU digital regulation:
  - DSA enforcement
  - DMA changes (if app store rules change)
  - EU AI Act (if AI features planned)
- [ ] 15.4.5 — Create quarterly legal compliance review cadence
- [ ] 15.4.6 — Budget for annual legal counsel review of all documents

**Acceptance Criteria**:
- Monitoring channels established
- Quarterly review scheduled
- Budget allocated for legal review

---

## Epic 16: Website Legal Infrastructure

**Priority**: P1 — High
**Scope**: lumen-lingo-frontend
**Rationale**: Several website infrastructure elements are required for full legal compliance.

### Story 16.1: Support Page Enhancement

**As a** user needing help
**I want** a comprehensive support page
**So that** I can get help easily (Apple requires functional support URL)

#### Subtasks:
- [ ] 16.1.1 — Verify `/contact` page meets Apple's support URL requirements:
  - Functional contact form or email address
  - FAQ or help content
  - Response time commitment
- [ ] 16.1.2 — Add dedicated support email: support@lumenshore.com (separate from hello@)
- [ ] 16.1.3 — Add FAQ covering common legal questions:
  - "How do I delete my account?"
  - "How do I cancel my subscription?"
  - "How do I export my data?"
  - "What data do you collect?"
  - "How do I contact you about a privacy concern?"
- [ ] 16.1.4 — Add response time SLA: "We aim to respond within 48 hours"
- [ ] 16.1.5 — Ensure support URL in App Store Connect is correct and functional

**Acceptance Criteria**:
- Support page meets Apple requirements
- FAQ covers legal topics
- Response time commitment stated
- App Store Connect URL verified

### Story 16.2: Legal Page SEO & Discoverability

**As a** user searching for LumenLingo's legal documents
**I want** legal pages to be discoverable via search
**So that** I can find policies without navigating the full site

#### Subtasks:
- [ ] 16.2.1 — Add legal pages to sitemap.xml:
  - /privacy
  - /terms
  - /cookies (when created)
  - /accessibility
  - /eula (when created)
  - /security (when created)
- [ ] 16.2.2 — Add proper meta tags to legal pages:
  - `<title>Privacy Policy — LumenLingo by LumenShore</title>`
  - `<meta name="description" ...>`
  - OpenGraph tags for sharing
- [ ] 16.2.3 — Add structured data (JSON-LD) for legal pages where applicable
- [ ] 16.2.4 — Ensure legal pages are NOT behind locale prefix for default language (English /privacy works without /en/privacy)

**Acceptance Criteria**:
- All legal pages in sitemap
- Proper meta tags set
- Legal pages discoverable via search
- Direct URLs work

### Story 16.3: Website Footer Legal Links

**As a** website visitor
**I want** all legal documents easily accessible from every page
**So that** I can always find the policies

#### Subtasks:
- [ ] 16.3.1 — Verify footer includes links to:
  - Privacy Policy ✓ (exists)
  - Terms of Service ✓ (exists)
  - Cookie Policy (add when created)
  - Accessibility Statement (add link)
  - Cookie Settings (add when consent banner created — allows re-opening preferences)
- [ ] 16.3.2 — Add company legal disclosures to footer (UK Companies Act 2006 s.82 + Business Names requirements):
  - "Lumenshore Limited"
  - "Company No. 09607326"
  - "Registered in England and Wales"
  - "Registered Office: Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, England, LE4 9HA"
  - "VAT No. GB 270411929"
- [ ] 16.3.3 — Add copyright notice to footer: "© 2015–2026 Lumenshore Limited. All rights reserved."
- [ ] 16.3.4 — Verify footer renders correctly in all 10 locales including RTL (Arabic)

**Acceptance Criteria**:
- All legal links in footer
- Copyright notice present
- RTL layout correct
- All locales verified

---

## Epic 17: UK Companies Act & Business Disclosure Requirements

**Priority**: P0 — Critical
**Scope**: lumen-lingo-frontend + iOS app + all business communications
**Rationale**: UK Companies Act 2006 (s.82), Company, Limited Liability Partnership and Business (Names and Trading Disclosures) Regulations 2015, and VAT Act 1994 require specific information to be displayed on websites, emails, and business documents of registered companies. Non-compliance is a criminal offence carrying fines.

### Story 17.1: Website Statutory Disclosures

**As a** UK limited company operating a commercial website
**I want** all legally required business information displayed on the website
**So that** Lumenshore Limited complies with Companies Act 2006 s.82 and avoids criminal penalties

#### Subtasks:
- [ ] 17.1.1 — Display on every page (footer recommended):
  - Full company name: "Lumenshore Limited"
  - Company registration number: 09607326
  - Place of registration: England and Wales
  - Registered office address: Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, England, LE4 9HA
  - VAT registration number: GB 270411929
- [ ] 17.1.2 — Add to all electronic business communications (emails):
  - Company name, registration number, place of registration, registered office
  - VAT number on all invoices and correspondence about supplies
- [ ] 17.1.3 — Ensure all email templates (newsletter, waitlist confirmation, transactional) include company legal details in footer
- [ ] 17.1.4 — If using a trading name different from registered name ("LumenShore" vs "Lumenshore Limited"), display registered name alongside
- [ ] 17.1.5 — Add company information to iOS app About/Settings screen:
  - "Made by Lumenshore Limited"
  - Company number and registered address accessible from Settings > Legal

**Acceptance Criteria**:
- All Companies Act 2006 s.82 requirements met on website and emails
- VAT number displayed where legally required
- All email templates include company footer
- iOS app shows company information

### Story 17.2: Business Letters and Order Documentation

**As a** VAT-registered UK limited company
**I want** all business documents to include required legal information
**So that** Lumenshore Limited meets Companies Act and VAT Act requirements

#### Subtasks:
- [ ] 17.2.1 — Create standard business document template including:
  - Company name, number, registered office
  - VAT number
  - Directors' names (if any shown on correspondence — note: not required unless ALL directors are named)
- [ ] 17.2.2 — Ensure all invoices (if issuing directly) include:
  - VAT number (GB 270411929)
  - Invoice date, sequential invoice number
  - Description of supply, taxable amount, VAT rate, VAT amount, total
  - Company name and address
- [ ] 17.2.3 — Configure email service provider templates with mandatory footer
- [ ] 17.2.4 — App Store / Apple invoicing: document that Apple handles consumer invoicing for IAP; Lumenshore receives agency settlement statements from Apple

**Acceptance Criteria**:
- All business documents compliant
- Invoice template ready for direct sales
- Apple's invoicing role documented
- Email templates verified

---

## Epic 18: Country-Specific Privacy Law Compliance

**Priority**: P0 — Critical
**Scope**: All platforms
**Rationale**: LumenLingo has 25 language pairs targeting speakers of 9 languages, plus a Portuguese website locale. Each target market has its own data protection legislation. As a UK company actively marketing to these jurisdictions (via localized content and translated website), Lumenshore Limited must comply with local privacy laws.

### Story 18.1: Japan — Act on the Protection of Personal Information (APPI)

**As a** service targeting Japanese users (ja locale, EN↔JP + PL→JP language pairs)
**I want** compliance with Japan's APPI
**So that** Japanese users' data rights are respected and Lumenshore avoids penalties

#### Subtasks:
- [ ] 18.1.1 — Assess APPI applicability:
  - APPI applies if handling personal information of Japanese residents
  - Japanese website locale + Japanese language pairs = deliberate targeting
  - Threshold: any business handling personal data of Japanese individuals
- [ ] 18.1.2 — APPI privacy policy requirements:
  - Specify purpose of use for all personal data ("utilization purpose")
  - Name/business name of the handler (Lumenshore Limited)
  - Procedures for data access, correction, deletion, and cessation of use
  - Contact point for inquiries and complaints
  - If transferring to third party: specify the third party, data types, and means of transfer
- [ ] 18.1.3 — Cross-border transfer rules (APPI Art. 28):
  - Japan requires informed consent OR equivalent data protection in recipient country for cross-border transfers
  - UK has Japan adequacy (both recognized under mutual arrangements)
  - Vercel (US) and Sentry (US) — must disclose US data transfer with safeguards
  - Add Japan-specific cross-border transfer disclosure to privacy policy
- [ ] 18.1.4 — APPI rights for data subjects:
  - Right to request disclosure of retained personal data
  - Right to correction/addition/deletion
  - Right to cessation/erasure of use
  - Right to request cessation of provision to third parties
  - Response required "without delay"
- [ ] 18.1.5 — Add Japanese-language privacy policy section covering APPI-specific disclosures
- [ ] 18.1.6 — Appoint authorized representative in Japan (optional but recommended for complaint handling)
- [ ] 18.1.7 — Monitor PPC (Personal Information Protection Commission) guidance updates

**Acceptance Criteria**:
- Privacy policy includes APPI-compliant disclosures
- Cross-border transfer justified and disclosed
- Japanese users can exercise APPI rights
- Japanese-language privacy content available (ja locale)

### Story 18.2: China — Personal Information Protection Law (PIPL)

**As a** service targeting Chinese users (zh locale, EN↔CN + PL→CN language pairs)
**I want** compliance with China's PIPL
**So that** Lumenshore avoids severe penalties (up to 5% annual revenue) and service disruption

#### Subtasks:
- [ ] 18.2.1 — Assess PIPL applicability:
  - PIPL applies to processing personal information of individuals in China, even by overseas entities
  - Chinese website locale + Chinese language pairs = deliberate targeting of Chinese users
  - CRITICAL: PIPL is one of the world's strictest data protection laws
- [ ] 18.2.2 — PIPL consent requirements:
  - Separate consent required for: sensitive personal information, cross-border transfers, providing data to third parties
  - Consent must be informed, voluntary, and explicit
  - Separate consent for each purpose (not bundled)
- [ ] 18.2.3 — Cross-border transfer compliance (PIPL Art. 38-39):
  - Options: (a) Pass security assessment by CAC, (b) Obtain certification by recognized body, (c) Enter into standard contracts with overseas recipients, (d) Comply with other CAC provisions
  - For small-scale processing: Standard Contract route most practical
  - Must conduct Personal Information Protection Impact Assessment (PIPIA) before cross-border transfer
  - Inform individuals and obtain separate consent for cross-border transfer
- [ ] 18.2.4 — Appoint PIPL representative in China (PIPL Art. 53):
  - Required for overseas entities processing Chinese residents' data
  - Representative handles compliance matters
  - Report representative details to competent authority
- [ ] 18.2.5 — PIPL data subject rights:
  - Right to know, right to decide, right to restrict/refuse processing
  - Right to access and copy personal information
  - Right to portability, correction, deletion
  - Right to request explanation of processing rules
  - Right of deceased person's next of kin to exercise rights
- [ ] 18.2.6 — Data localization assessment:
  - PIPL may require data localization for certain data types/volumes
  - Assess whether current data volumes trigger localization requirements
  - Document decision and rationale
- [ ] 18.2.7 — Add Chinese-language privacy disclosures meeting PIPL requirements to zh locale
- [ ] 18.2.8 — **Risk assessment**: Consider whether to limit Chinese user data processing until full PIPL compliance is achieved

**Acceptance Criteria**:
- PIPL applicability assessed and documented
- Cross-border transfer mechanism chosen and implemented
- Chinese representative appointed or exemption documented
- Chinese-language PIPL-compliant privacy disclosures available
- PIPIA completed for cross-border transfers

### Story 18.3: Brazil — Lei Geral de Proteção de Dados (LGPD)

**As a** service with Portuguese locale (pt) targeting Brazilian/Portuguese users
**I want** compliance with Brazil's LGPD
**So that** Brazilian users' data rights are respected

#### Subtasks:
- [ ] 18.3.1 — Assess LGPD applicability:
  - LGPD applies if: processing data of individuals in Brazil, OR processing performed in Brazil, OR data collected in Brazil
  - Portuguese website locale = targeting Portuguese-speaking users (Brazil is largest pt market)
  - Newsletter/waitlist signups from Brazil = collecting data of Brazilian individuals
- [ ] 18.3.2 — LGPD legal bases (similar to GDPR but with 10 bases):
  - Consent, legitimate interest, contractual necessity, regulatory compliance, research, exercise of rights, health protection, life protection, credit protection, public policy
  - Map each processing activity to appropriate LGPD basis
- [ ] 18.3.3 — LGPD privacy policy requirements:
  - Purpose of processing
  - Duration and form of processing
  - Controller identity and contact (Lumenshore Limited)
  - Information on shared use of data
  - Responsibilities of processing agents
  - Rights of data subjects
- [ ] 18.3.4 — LGPD data subject rights:
  - Confirmation of processing existence
  - Access to data
  - Correction of incomplete/inaccurate data
  - Anonymization, blocking, or deletion of unnecessary data
  - Data portability
  - Deletion of data processed with consent
  - Information about shared data with public/private entities
  - Information about possibility and consequences of denying consent
  - Revocation of consent
- [ ] 18.3.5 — Appoint Data Protection Officer for LGPD purposes (can be same person as UK DPO/lead)
- [ ] 18.3.6 — International data transfer compliance:
  - LGPD requires adequate protection in recipient country or standard contractual clauses
  - ANPD (National Data Protection Authority) adequacy determinations
  - Document transfer mechanism (UK-Brazil)
- [ ] 18.3.7 — Add Portuguese-language LGPD-specific privacy disclosures to pt locale
- [ ] 18.3.8 — Monitor ANPD enforcement and guidance (LGPD enforcement is maturing rapidly)

**Acceptance Criteria**:
- LGPD applicability documented
- Privacy policy includes LGPD-specific disclosures in Portuguese
- Data subject rights process covers LGPD requirements
- Cross-border transfer mechanism documented

### Story 18.4: Germany — Bundesdatenschutzgesetz (BDSG) & Telekommunikation-Telemedien-Datenschutz-Gesetz (TTDSG)

**As a** service targeting German-speaking users (de locale, EN↔DE + PL→DE + DE→ES + DE→PL pairs)
**I want** compliance with Germany's strict data protection implementation
**So that** Lumenshore meets Germany's rigorous standards

#### Subtasks:
- [ ] 18.4.1 — TTDSG cookie/tracking compliance (Germany's implementation of ePrivacy):
  - TTDSG §25 requires consent for storing/accessing information on end-user devices (stricter than GDPR alone)
  - Explicit consent before Sentry tracking, session replay, non-essential storage
  - German courts interpret "consent" very strictly (no nudging, no dark patterns, no cookie walls)
- [ ] 18.4.2 — Impressum (Imprint) requirement:
  - **MANDATORY**: German Telemediengesetz (TMG) §5 requires "Impressum" (legal imprint) on ALL commercial websites accessible in Germany
  - Must include: full company name, registered address, contact (email + phone/fax), company registration details, VAT ID
  - Add `/impressum` or `/imprint` page to website
  - Must be accessible within 2 clicks from any page
  - Failure to display = regulatory fine + competitive unfair advertising claims
- [ ] 18.4.3 — German-language privacy policy requirements:
  - German DPAs expect privacy policies to be available in German if targeting German users
  - Must meet GDPR standards plus BDSG-specific provisions
  - Clear, precise language (German courts scrutinize wording heavily)
- [ ] 18.4.4 — BDSG §26 — Employee data protection (relevant if German contractors/employees)
- [ ] 18.4.5 — Data Protection Officer assessment:
  - BDSG §38: DPO required if 20+ persons regularly processing personal data
  - Currently likely below threshold, but document assessment
- [ ] 18.4.6 — German age of digital consent: 16 years (GDPR Art. 8 — Germany chose maximum)
  - Current 13+ age gate insufficient for Germany
  - Must require parental consent for users aged 13-15 if processing based on consent

**Acceptance Criteria**:
- Impressum page created and accessible
- TTDSG-compliant consent mechanism
- German-language privacy policy available
- Age of consent (16) handled for German users
- BDSG requirements assessed

### Story 18.5: France — CNIL Guidelines & French Law

**As a** service targeting French-speaking users (fr locale, EN↔FR + PL→FR language pairs)
**I want** compliance with France's CNIL guidance and local data protection law
**So that** French users are properly protected

#### Subtasks:
- [ ] 18.5.1 — CNIL cookie consent guidelines:
  - France has the strictest cookie consent enforcement in the EU (CNIL fined Google €150M, Facebook €60M)
  - "Continue browsing" does NOT count as consent
  - Must offer equal prominence to "Accept All" and "Refuse All" buttons
  - No cookie walls (cannot condition access on accepting cookies)
  - Consent must be specific per purpose (not bundled)
  - Consent records must be kept for proof
- [ ] 18.5.2 — Mentions Légales (Legal Notices) requirement:
  - French LCEN (Loi pour la Confiance dans l'Économie Numérique) Article 6:
  - Must display: company name, registered address, company number, VAT number, publication director, hosting provider name/address
  - Add `/mentions-legales` page or include in `/imprint`
- [ ] 18.5.3 — French language requirements:
  - Loi Toubon (1994): consumer information must be available in French for products/services offered in France
  - Privacy policy, terms of service, cookie policy must be available in French
  - App Store listing in French if specifically targeting France
- [ ] 18.5.4 — French age of digital consent: 15 years
  - For consent-based processing of minors: verify age 15+ or obtain parental consent
- [ ] 18.5.5 — CNIL-specific rights:
  - Right to define post-mortem instructions for personal data (unique to French law)
  - Include in French privacy policy
- [ ] 18.5.6 — French consumer protection:
  - Code de la consommation Arts. L221-1 to L221-18: pre-contractual information requirements
  - 14-day withdrawal right for distance contracts

**Acceptance Criteria**:
- CNIL cookie guidelines implemented
- Mentions Légales page created
- French-language legal documents available
- Post-mortem data instructions addressed
- Age of consent (15) handled for French users

### Story 18.6: Poland — PUODO & Polish Regulatory Requirements

**As a** service with strong Polish user focus (8 Polish language pairs, pl locale)
**I want** compliance with Polish data protection and consumer law
**So that** Polish users are properly protected

#### Subtasks:
- [ ] 18.6.1 — PUODO (Polish DPA) compliance:
  - Poland applies GDPR via national implementing legislation
  - PUODO is an active enforcer — issued significant fines
  - Ensure ROPA covers Polish users explicitly
- [ ] 18.6.2 — Polish language requirements:
  - Polish Consumer Rights Act (Ustawa o prawach konsumenta): pre-contractual information must be in Polish
  - Privacy policy, terms, cookie policy must be available in Polish
  - Subscription disclosures must be in Polish for Polish consumers
- [ ] 18.6.3 — Polish age of digital consent: 16 years
  - Same as Germany — parental consent needed for 13-15 year olds
- [ ] 18.6.4 — Polish e-commerce requirements:
  - Ustawa o świadczeniu usług drogą elektroniczną (Act on Providing Services by Electronic Means)
  - Must provide clear service provider identification
  - Must allow complaints via electronic means
  - Must have complaint handling procedure
- [ ] 18.6.5 — Polish telecommunications law:
  - Prawo telekomunikacyjne Art. 173: consent required for storing data on end-user devices (similar to ePrivacy/PECR)
- [ ] 18.6.6 — UOKiK (Polish Office of Competition and Consumer Protection):
  - Monitors unfair contract terms and misleading practices
  - Subscription auto-renewal and cancellation terms must be clear and fair in Polish

**Acceptance Criteria**:
- Polish-language legal documents available
- PUODO compliance verified
- Polish consumer protection requirements met
- Age of consent (16) handled for Polish users

### Story 18.7: Ukraine — Law on Protection of Personal Data

**As a** service targeting Ukrainian users (uk locale, UA↔EN + UA↔PL + PL→UA language pairs)
**I want** compliance with Ukrainian data protection law
**So that** Ukrainian users' rights are respected

#### Subtasks:
- [ ] 18.7.1 — Assess applicability of Ukrainian Law on Protection of Personal Data (Law No. 2297-VI):
  - Applies to processing personal data of Ukrainian citizens
  - Ukrainian language pairs + uk locale = deliberate targeting
- [ ] 18.7.2 — Ukrainian data protection requirements:
  - Must notify the Ukrainian Commissioner for Human Rights (Ombudsman) about personal data processing databases
  - Consent required for processing (similar to GDPR but with local nuances)
  - Data subjects have right to access, correction, and destruction of personal data
- [ ] 18.7.3 — Cross-border data transfer from Ukraine:
  - Transfers allowed to countries with adequate protection
  - UK may or may not be on Ukraine's adequacy list — verify current status
  - If not adequate: consent of data subject required
- [ ] 18.7.4 — Ukrainian language privacy policy:
  - Add Ukrainian-language privacy disclosures to uk locale
- [ ] 18.7.5 — **Sanctions considerations**:
  - Verify no issues with UK/EU sanctions affecting service provision to Ukraine (currently no restrictions on consumer services to Ukraine)
  - Ensure payment processing works for Ukrainian users (Apple handles IAP)
- [ ] 18.7.6 — Monitor Ukrainian regulatory developments (Ukraine is aligning data protection law with GDPR as part of EU accession process)

**Acceptance Criteria**:
- Ukrainian data protection law compliance assessed
- Cross-border transfer mechanism documented
- Ukrainian-language privacy disclosures available
- Sanctions compliance verified

### Story 18.8: Middle East — UAE & Saudi Arabia Data Protection

**As a** service targeting Arabic-speaking users (ar locale, EN↔AR + PL→AR language pairs)
**I want** compliance with Middle Eastern data protection laws
**So that** Arabic-speaking users in the UAE and Saudi Arabia are properly protected

#### Subtasks:
- [ ] 18.8.1 — UAE Federal Decree-Law No. 45 of 2021 (Personal Data Protection Law):
  - Effective since January 2022 (regulations issued 2023)
  - Applies to processing personal data of UAE residents
  - Requirements: consent, purpose limitation, data minimization, transparency
  - Cross-border transfers: allowed to countries with adequate protection or with appropriate safeguards
  - Data subject rights: access, rectification, erasure, restriction, portability, objection
  - Must have privacy policy disclosing processing details
- [ ] 18.8.2 — Saudi Arabia Personal Data Protection Law (PDPL):
  - Effective since September 2023
  - Applies to processing personal data of Saudi residents
  - Explicit consent required for processing (limited exceptions)
  - Cross-border transfers: only to countries on approved list or with adequate safeguards
  - Mandatory appointment of representative in Saudi Arabia for overseas processors
  - Data localization: certain categories may need to remain in Saudi Arabia
- [ ] 18.8.3 — Bahrain — Personal Data Protection Law (PDPL, Law No. 30 of 2018):
  - Applies if Bahraini users access the service
  - Similar GDPR-like framework
- [ ] 18.8.4 — Arabic-language privacy policy:
  - Must be available in Arabic for ar locale users
  - RTL layout verification for legal content
- [ ] 18.8.5 — Content sensitivity review:
  - Ensure flashcard/learning content is culturally appropriate for Middle Eastern users
  - No content that could be considered offensive under local laws
  - Review example sentences and cultural references
- [ ] 18.8.6 — Document compliance approach per country:
  - Tier 1: UAE and Saudi Arabia (largest Arabic-speaking markets)
  - Tier 2: Bahrain, Qatar, Kuwait, Oman, Jordan, Egypt (monitor)

**Acceptance Criteria**:
- UAE PDPL compliance assessed and documented
- Saudi Arabia PDPL compliance assessed
- Arabic-language privacy policy available
- Content cultural review completed
- Cross-border transfer mechanisms documented

### Story 18.9: Spain & Latin America — LOPDGDD & Regional Laws

**As a** service targeting Spanish-speaking users (es locale, EN↔ES + PL→ES + DE→ES pairs)
**I want** compliance with Spanish and Latin American data protection laws
**So that** Spanish-speaking users across multiple jurisdictions are protected

#### Subtasks:
- [ ] 18.9.1 — Spain LOPDGDD (Ley Orgánica de Protección de Datos y Garantía de Derechos Digitales):
  - Spain's GDPR implementation with additional digital rights
  - Right to digital disconnect for employees
  - Right to digital education
  - Right to rectification on the internet
  - Digital testament — right to manage deceased person's digital presence
  - Spanish age of digital consent: 14 years
- [ ] 18.9.2 — Argentina — Ley de Protección de Datos Personales (25.326):
  - Argentina has EU adequacy decision
  - Similar framework to GDPR
  - If significant Argentine user base develops, assess compliance
- [ ] 18.9.3 — Mexico — Ley Federal de Protección de Datos Personales:
  - Requires privacy notice (Aviso de Privacidad) before collecting personal data
  - Must include: controller identity, purposes, data transfers, rights mechanisms
  - If targeting Mexican market specifically
- [ ] 18.9.4 — Colombia — Ley 1581 de 2012:
  - Prior authorization (consent) required for data processing
  - Registry of databases with SIC (Superintendencia de Industria y Comercio)
- [ ] 18.9.5 — Spanish-language privacy policy:
  - Must cover LOPDGDD-specific rights if targeting Spain
  - Include AEPD (Agencia Española de Protección de Datos) complaint information
- [ ] 18.9.6 — Document compliance hierarchy:
  - Tier 1: Spain (EU/GDPR + LOPDGDD)
  - Tier 2: Mexico, Argentina (if significant user base)
  - Tier 3: Other LatAm countries (monitor)

**Acceptance Criteria**:
- Spain LOPDGDD-specific requirements addressed
- Spanish-language privacy policy includes digital rights
- LatAm data protection landscape assessed
- Compliance tiers documented

---

## Epic 19: Age of Digital Consent — Multi-Jurisdiction Compliance

**Priority**: P0 — Critical
**Scope**: lumen-lingo-frontend + LumenLingo iOS App
**Rationale**: The age at which a minor can give valid consent for data processing varies significantly by country. An educational/language learning app is likely to attract users under 18. Current blanket "13+" policy is insufficient for Germany (16), Netherlands (16), France (15), Italy (14), Spain (14), Poland (16), and many other jurisdictions.

### Story 19.1: Age of Consent Mapping & Implementation

**As a** service operating across multiple jurisdictions
**I want** age verification that respects each country's digital consent age
**So that** minor users' data is processed lawfully

#### Subtasks:
- [ ] 19.1.1 — Create age of digital consent mapping table:

  | Country | Age | Regulation |
  |---|---|---|
  | UK | 13 | UK GDPR / ICO guidance |
  | USA | 13 | COPPA |
  | Spain | 14 | LOPDGDD |
  | Italy | 14 | D.Lgs 101/2018 |
  | France | 15 | Loi Informatique et Libertés |
  | Japan | 16* | APPI (parental consent for under-18 in practice) |
  | Germany | 16 | BDSG |
  | Netherlands | 16 | UAVG |
  | Poland | 16 | GDPR national implementation |
  | Ireland | 16 | Data Protection Act 2018 |
  | China | 14 | PIPL Art. 31 (under-14 classified as sensitive data) |
  | Brazil | 12/18† | LGPD Art. 14 (children under 12: parental consent; 12-17: best interest) |
  | UAE | 18 | UAE PDPL (minors need guardian consent) |
  | Saudi Arabia | 18 | PDPL (minors need guardian consent) |
  | Australia | No specific age | Privacy Act 1988 (capacity-based approach) |

  *Japan: no fixed digital consent age; APPI uses case-by-case assessment for minors
  †Brazil: "children" are under 12 (ECA), "adolescents" are 12-17

- [ ] 19.1.2 — Implement locale-aware age verification:
  - Detect user's locale/region from app locale or website locale setting
  - Apply the correct minimum age for that jurisdiction
  - For unclear cases, default to 16 (highest common EU age)
- [ ] 19.1.3 — Implement parental consent flow for underage users:
  - For users between the youngest threshold (13) and their jurisdiction's consent age:
  - Display age-appropriate notice explaining data collection
  - Request verifiable parental consent (email to parent, parent account linkage, etc.)
  - Block consent-based processing until parental consent obtained
  - Essential processing (contract performance for app functionality) may proceed without parental consent
- [ ] 19.1.4 — Add age verification to website newsletter/waitlist signup:
  - Cannot collect email from underage user without parental consent
  - Add age gate or declaration before form submission
- [ ] 19.1.5 — Document minimum viable approach:
  - **Recommended**: Set minimum age to 16 globally (simplest compliance)
  - **Alternative**: Locale-based dynamic age gating (more complex, better UX for younger users in lower-threshold countries)
- [ ] 19.1.6 — CHINA SPECIAL: PIPL classifies under-14 data as "sensitive personal information":
  - Requires separate consent from parent/guardian
  - Must conduct Personal Information Protection Impact Assessment
  - Stricter than most other jurisdictions

**Acceptance Criteria**:
- Age consent mapping documented for all target jurisdictions
- Age verification mechanism implemented (locale-aware or global minimum)
- Parental consent flow designed for underage users
- Under-14 processing treated as sensitive data for Chinese users
- Website forms gated appropriately

### Story 19.2: Children's Privacy Enhanced Protections

**As a** service likely used by minors for language learning
**I want** enhanced privacy protections for young users
**So that** Lumenshore demonstrates best-practice child safety

#### Subtasks:
- [ ] 19.2.1 — Data minimization for minors:
  - Collect only data strictly necessary for service delivery
  - No marketing communications to verified minors
  - No session replay for verified minor users
  - No analytics tracking beyond essential error monitoring
- [ ] 19.2.2 — Parental controls:
  - If parent/guardian consent provided: give parent ability to review child's data
  - Allow parent to revoke consent at any time
  - Delete minor's data upon parental request
- [ ] 19.2.3 — Age-appropriate privacy notices:
  - Simplified privacy explanation for young users (13-17)
  - Visual/accessible format rather than dense legal text
- [ ] 19.2.4 — UK Children's Code (Age Appropriate Design Code) compliance:
  - ICO's Age Appropriate Design Code applies to online services likely to be accessed by children
  - 15 standards including: best interest, data minimization, default settings (high privacy), transparency, nudge techniques prohibited
  - Language learning app = likely accessed by children under 18
  - **Critical**: default settings must be high-privacy for all users to comply
- [ ] 19.2.5 — Apple App Store age rating:
  - Set appropriate age rating in App Store Connect
  - Content rating: 4+ (educational content)
  - Account requirements: 13+ (or jurisdiction-appropriate with parental consent)

**Acceptance Criteria**:
- Data minimization for minors implemented
- Parental controls designed
- Age-appropriate privacy notices created
- UK Children's Code assessed and compliance planned
- App Store age rating accurate

---

## Epic 20: VAT, Tax & Financial Compliance

**Priority**: P0 — Critical
**Scope**: All platforms + business operations
**Rationale**: Lumenshore Limited is VAT-registered (GB 270411929). Digital services supplied B2C (business-to-consumer) to EU/UK consumers have specific VAT obligations. Apple handles IAP VAT as merchant of record, but website-based revenue, if any, requires direct VAT compliance. Tax compliance failures result in HMRC penalties plus interest.

### Story 20.1: UK VAT Compliance

**As a** UK VAT-registered business
**I want** full UK VAT compliance
**So that** Lumenshore meets HMRC requirements and avoids penalties

#### Subtasks:
- [ ] 20.1.1 — Ensure VAT number displayed:
  - Website footer: "VAT No. GB 270411929"
  - All invoices and business correspondence
  - App Store Connect developer information (if required)
- [ ] 20.1.2 — VAT on direct sales (website, if any):
  - Any digital service sold directly to UK consumers: 20% standard rate VAT
  - Any digital service sold directly to UK businesses: 20% VAT (unless reverse charge applies for overseas B2B)
  - Ensure pricing pages show VAT-inclusive prices for B2C (Price Marking Order 2004)
- [ ] 20.1.3 — Apple IAP VAT handling:
  - Apple collects and remits VAT for iOS in-app purchases as "marketplace operator"
  - Since UK Finance Act 2021: Apple is deemed the supplier for VAT purposes
  - Lumenshore receives net payment (minus Apple commission and VAT)
  - Keep Apple settlement statements as VAT records
  - Ensure proper accounting treatment: revenue is net amount received from Apple
- [ ] 20.1.4 — Making Tax Digital (MTD) for VAT:
  - Mandatory for all VAT-registered businesses
  - Must keep digital records
  - Must file VAT returns via MTD-compatible software (Xero, QuickBooks, FreeAgent, etc.)
  - Quarterly VAT returns
- [ ] 20.1.5 — VAT records retention:
  - Retain all VAT records for 6 years (HMRC requirement)
  - Include: sales invoices, purchase invoices, Apple settlement reports, VAT returns
- [ ] 20.1.6 — Annual accounting scheme assessment:
  - If turnover under £1.35M: may use annual accounting scheme (one annual return + interim payments)
  - Or standard quarterly returns
  - Choose appropriate scheme for current business size

**Acceptance Criteria**:
- VAT number displayed per legal requirements
- Apple IAP VAT treatment correctly documented and accounted for
- MTD compliance in place
- Records retention policy established
- Pricing pages show VAT-inclusive prices

### Story 20.2: EU VAT on Digital Services (OSS)

**As a** UK business supplying digital services to EU consumers
**I want** correct EU VAT treatment
**So that** Lumenshore complies with EU VAT obligations for cross-border digital services

#### Subtasks:
- [ ] 20.2.1 — EU VAT for digital services — the rules:
  - B2C digital services to EU consumers are taxed in the consumer's country
  - This means VAT at the rate of the consumer's EU member state (not UK rate)
  - Examples: Germany 19%, France 20%, Spain 21%, Poland 23%, Ireland 23%, Italy 22%
- [ ] 20.2.2 — Apple as marketplace operator (EU):
  - Under EU DAC7 and marketplace rules: Apple is deemed the supplier for VAT purposes
  - Apple collects and remits EU VAT for all iOS IAP
  - Lumenshore's obligation limited to proper revenue recognition of net amounts
  - Document this arrangement formally
- [ ] 20.2.3 — Non-IAP EU revenue (website direct sales, if any):
  - If Lumenshore sells digital services directly to EU consumers (not through Apple):
  - Must register for UK VAT OSS (One Stop Shop) with HMRC — this is the post-Brexit Non-Union OSS
  - OR register for VAT in each EU member state individually (impractical)
  - OSS allows single quarterly return covering all EU member states
  - Apply each member state's VAT rate to sales in that country
- [ ] 20.2.4 — EU OSS registration (if needed):
  - Register via HMRC's Non-Union OSS portal
  - File quarterly OSS returns (by end of month following each quarter)
  - Pay EU VAT collected to HMRC, who distributes to EU member states
  - Keep detailed records of supplies to each EU member state for 10 years
- [ ] 20.2.5 — B2B digital services to EU businesses:
  - Reverse charge mechanism applies — Lumenshore does not charge VAT
  - Customer self-accounts for VAT in their country
  - Verify customer's EU VAT number via VIES system
  - Zero-rate the invoice
- [ ] 20.2.6 — Evidence of customer location (EU two-piece-of-evidence rule):
  - Must have two pieces of non-contradictory evidence of customer location: IP address, billing address, bank details, SIM card country, etc.
  - Apple provides this for IAP (handled automatically)
  - For website direct sales: use IP geolocation + billing address

**Acceptance Criteria**:
- Apple's EU VAT role documented and accounted for
- OSS registration assessed and completed if required
- B2B reverse charge process documented
- Customer location evidence process in place
- EU VAT rates correctly applied to any direct sales

### Story 20.3: International Tax Obligations

**As a** global service provider
**I want** awareness of international tax obligations
**So that** Lumenshore doesn't inadvertently create tax liabilities abroad

#### Subtasks:
- [ ] 20.3.1 — Japan Consumption Tax (JCT):
  - JCT rate: 10% on digital services
  - Apple handles JCT for IAP as registered foreign business
  - If direct sales to Japanese consumers: may need JCT registration (threshold: ¥10M annual revenue from Japan)
  - Document Apple's JCT handling
- [ ] 20.3.2 — US Sales Tax:
  - No federal digital services tax
  - State-level sales tax varies (not all states tax digital services)
  - Apple handles sales tax collection for IAP in all US states
  - If direct website sales to US: assess economic nexus thresholds per state
- [ ] 20.3.3 — Australian GST on digital services:
  - 10% GST on supplies of digital products to Australian consumers
  - Apple handles GST for IAP
  - If direct sales > AUD 75,000 annually: must register for GST
- [ ] 20.3.4 — India GST on digital services:
  - 18% GST on online information and database access services
  - Apple handles for IAP
  - Non-resident providers may need GST registration for direct sales
- [ ] 20.3.5 — OECD BEPS Pillar One / Pillar Two:
  - Global minimum tax (15%) — currently applies to large MNEs (€750M+ revenue)
  - Not currently applicable to Lumenshore but monitor for threshold changes
- [ ] 20.3.6 — Corporation Tax:
  - Lumenshore pays UK Corporation Tax on worldwide profits (currently 25% for profits over £250K, 19% small profits rate)
  - Assess eligibility for R&D Tax Credits (software development qualifying)
  - Assess Creative Industry Tax Relief (video games tax relief — possible application for educational software)
- [ ] 20.3.7 — Transfer pricing:
  - If any intercompany transactions (unlikely as sole company, but document for future)

**Acceptance Criteria**:
- International tax exposure mapped per jurisdiction
- Apple's tax handling role documented for each market
- UK Corporation Tax obligations current
- R&D tax credit eligibility assessed
- No unintended permanent establishments abroad

### Story 20.4: Pricing Display Compliance

**As a** consumer in any jurisdiction
**I want** clear, honest pricing
**So that** I know exactly what I'll pay

#### Subtasks:
- [ ] 20.4.1 — UK Price Marking Order 2004:
  - All prices displayed to UK consumers must include VAT
  - Must show total price (no hidden charges)
  - If display is "from £X" — must be the lowest available price
- [ ] 20.4.2 — EU Consumer Rights Directive pricing:
  - Prices must be displayed in a clear and comprehensible manner
  - Total price including all taxes and charges
  - If price cannot be calculated in advance: how price is calculated
  - Additional delivery/postal charges disclosed before purchase
- [ ] 20.4.3 — EU Omnibus Directive (Price Indication Directive 98/6/EC as amended):
  - If showing "reduced price" / "sale price": must show previous lowest price in last 30 days
  - Applies to any discount displays on pricing page
- [ ] 20.4.4 — iOS App pricing:
  - Use StoreKit-provided localized prices (includes local tax automatically)
  - Never show prices different from what Apple will charge
  - Regional pricing must match App Store Connect tier configuration
- [ ] 20.4.5 — Website pricing page compliance:
  - Add currency selector or locale-based pricing
  - Show "Prices include VAT" for UK/EU visitors
  - Add "Price charged via Apple's App Store. Final price may vary by location."
  - No misleading discount claims

**Acceptance Criteria**:
- UK pricing rules followed (VAT-inclusive)
- EU pricing transparency requirements met
- No misleading price displays
- StoreKit dynamic pricing in app
- Pricing disclaimers present on website

---

## Epic 21: Export Controls, Sanctions & Trade Compliance

**Priority**: P1 — High
**Scope**: All platforms
**Rationale**: Software distribution across jurisdictions requires awareness of export control regulations and sanctions compliance. Lumenshore distributes an app globally and has language pairs involving sanctioned or restricted regions.

### Story 21.1: Sanctions Compliance

**As a** UK company distributing software globally
**I want** compliance with UK, EU, and US sanctions regimes
**So that** Lumenshore doesn't violate any trade sanctions

#### Subtasks:
- [ ] 21.1.1 — UK sanctions compliance (Sanctions and Anti-Money Laundering Act 2018):
  - Review OFSI (Office of Financial Sanctions Implementation) sanctions lists
  - Ensure no services provided to sanctioned individuals or entities
  - Consumer language learning app = generally exempt from most sanctions as non-strategic software
  - But must still screen for sanctioned persons if implementing real payments/accounts
- [ ] 21.1.2 — US OFAC sanctions (relevant because Apple App Store distributes from US):
  - Apple already restricts App Store access in sanctioned countries (Cuba, Iran, North Korea, Syria, Crimea/DNR/LNR)
  - Lumenshore should not independently distribute to sanctioned territories
  - Terms of Service should describe geographic restrictions
- [ ] 21.1.3 — EU sanctions:
  - Similar framework — Apple handles distribution restrictions
  - Monitor EU sanctions lists for changes affecting Arabic-speaking or Ukrainian regions
- [ ] 21.1.4 — Ukraine considerations:
  - Ukraine is NOT sanctioned — services to Ukraine are legal and encouraged
  - However: Crimea, Donetsk, Luhansk regions have restricted status
  - Apple restricts App Store in these regions already
  - Document compliance approach
- [ ] 21.1.5 — Terms of Service geographic restrictions clause:
  - Add: "The Service is not available in jurisdictions where prohibited by law"
  - Note: do not provide services to sanctioned countries
  - Apple's App Store Terms already handle this for iOS

**Acceptance Criteria**:
- Sanctions compliance reviewed for UK, EU, US
- Geographic restrictions documented in Terms
- Screening process in place for account-bearing users
- Ukraine/Arabic region compliance documented

### Story 21.2: Encryption Export Controls

**As a** developer distributing software containing encryption
**I want** compliance with encryption export regulations
**So that** Lumenshore's app distribution is lawful

#### Subtasks:
- [ ] 21.2.1 — US Export Administration Regulations (EAR) — encryption:
  - iOS apps distributed via US App Store must comply with EAR
  - App uses HTTPS (TLS), iCloud encryption, SwiftData encryption at rest
  - These are standard encryption — generally exempt under EAR License Exception ENC
  - Self-classify encryption use in App Store Connect's export compliance section
- [ ] 21.2.2 — App Store Connect export compliance:
  - Answer Apple's export compliance questions accurately:
  - "Does your app use encryption?" → YES (HTTPS, iCloud)
  - "Does your app qualify for any exemptions?" → YES (standard HTTPS/TLS)
  - If using only system-provided encryption (iOS encryption, HTTPS): typically exempt
- [ ] 21.2.3 — French import controls (historically strict on encryption):
  - France requires declaration for import of encryption software
  - Apps using standard HTTPS generally exempt
  - Document assessment
- [ ] 21.2.4 — Document encryption audit:
  - List all encryption used: HTTPS/TLS, iCloud encryption, SwiftData file protection, Keychain
  - All Apple-system-provided → standard exemptions apply

**Acceptance Criteria**:
- Encryption use documented
- App Store Connect export compliance answered correctly
- EAR exemption justified
- French declaration assessed

---

## Epic 22: Accessibility Compliance — Multi-Jurisdiction

**Priority**: P1 — High
**Scope**: lumen-lingo-frontend + LumenLingo iOS App
**Rationale**: Multiple jurisdictions now have enforceable digital accessibility laws. The European Accessibility Act (EAA) comes into full force in June 2025, applying to digital services offered in the EU. Failure to meet accessibility standards creates both legal liability and excludes users with disabilities.

### Story 22.1: European Accessibility Act (EAA) Compliance

**As a** service offered to EU consumers
**I want** compliance with the European Accessibility Act (Directive 2019/882)
**So that** EU consumers with disabilities can use LumenLingo

#### Subtasks:
- [ ] 22.1.1 — EAA scope assessment:
  - EAA applies to e-commerce services and associated websites/apps from 28 June 2025
  - LumenLingo sells digital subscriptions to EU consumers = in scope
  - Must meet EN 301 549 standard (which references WCAG 2.1 AA)
- [ ] 22.1.2 — Website WCAG 2.1 AA audit:
  - Full audit of all pages including: homepage, pricing, blog, legal pages, newsletter form
  - Test with screen readers (NVDA, VoiceOver, JAWS)
  - Keyboard navigation for all interactive elements
  - Color contrast ratios (4.5:1 minimum for normal text)
  - Focus indicators visible
  - Form labels and error messages accessible
  - RTL layout accessibility (Arabic locale)
- [ ] 22.1.3 — iOS app accessibility audit against EN 301 549 / WCAG:
  - VoiceOver support for all views
  - Dynamic Type support
  - Reduced Motion support
  - Color contrast compliance
  - Accessibility labels for all game elements (flashcards, tiles, buttons)
  - Haptic feedback as accessibility enhancement
- [ ] 22.1.4 — Accessibility statement per EAA:
  - Must declare conformity level
  - Must list known non-conformities with timeline for correction
  - Must provide feedback mechanism for accessibility issues
  - Must be updated annually
- [ ] 22.1.5 — Disproportionate burden assessment:
  - EAA allows exemption where compliance would cause "disproportionate burden" on micro-enterprises
  - Assess: is Lumenshore Limited a micro-enterprise? (< 10 employees, < €2M turnover)
  - If yes: document assessment but still comply with reasonable measures

**Acceptance Criteria**:
- EAA scope confirmed
- Website and app accessibility audited
- EN 301 549 / WCAG 2.1 AA conformance targeted
- Accessibility statement compliant
- Disproportionate burden assessed if applicable

### Story 22.2: US ADA & Section 508 Digital Accessibility

**As a** service accessible to US users
**I want** awareness of US digital accessibility requirements
**So that** Lumenshore avoids ADA litigation risk

#### Subtasks:
- [ ] 22.2.1 — ADA Title III applicability:
  - US courts increasingly apply ADA to websites/apps
  - No formal web accessibility standard mandated by ADA, but WCAG 2.1 AA is the de facto standard
  - Focus on: alt text, keyboard navigation, form labels, color contrast
- [ ] 22.2.2 — Section 508 (if applicable):
  - Applies to federal agencies and their contractors — likely N/A for Lumenshore
  - But sets precedent for WCAG 2.0 AA compliance
- [ ] 22.2.3 — ADA demand letter preparedness:
  - ADA web accessibility lawsuits are common in the US (10,000+ per year)
  - Have VPAT (Voluntary Product Accessibility Template) ready documenting conformance
  - Respond promptly to any accessibility complaints
- [ ] 22.2.4 — Create VPAT (Voluntary Product Accessibility Template):
  - Document WCAG 2.1 conformance level for both website and iOS app
  - Publish on website or provide on request

**Acceptance Criteria**:
- ADA applicability assessed
- VPAT created and available
- WCAG 2.1 AA compliance targeted
- Demand letter response process in place

---

## Epic 23: AI & Algorithmic Transparency (Future-Proofing)

**Priority**: P2 — Medium
**Scope**: All platforms
**Rationale**: If LumenLingo implements AI-driven features (spaced repetition algorithms, personalized learning paths, AI-generated content), multiple regulations apply: EU AI Act, UK AI framework, GDPR automated decision-making rules.

### Story 23.1: EU AI Act Preparedness

**As a** service that may implement AI features
**I want** awareness of EU AI Act requirements
**So that** future AI features comply from inception

#### Subtasks:
- [ ] 23.1.1 — EU AI Act classification:
  - Educational AI tools: generally "limited risk" or "minimal risk" category
  - Spaced repetition algorithm: likely "minimal risk" (no human rights impact)
  - Learning path personalization: likely "limited risk" (transparency obligation)
  - AI-generated content: transparency obligation (must disclose AI-generated content)
- [ ] 23.1.2 — Transparency obligations (even for minimal/limited risk):
  - Must inform users when they are interacting with an AI system
  - Must inform users of AI-generated content
  - Must provide information about the AI system's capabilities and limitations
- [ ] 23.1.3 — GDPR Article 22 — Automated decision-making:
  - If algorithms make decisions with legal or significant effects on users → right to human intervention
  - Subscription tier recommendations, content difficulty adjustment = likely below threshold
  - But document assessment for each AI feature
- [ ] 23.1.4 — UK AI framework:
  - UK follows principles-based approach (not the EU's risk-based approach)
  - Pro-innovation Regulation of AI White Paper principles: safety, transparency, fairness, accountability, contestability
  - Document how each AI feature meets these principles
- [ ] 23.1.5 — Create AI feature legal checklist:
  - Does the feature make automated decisions about users?
  - Does it use personal data for training?
  - Does it generate content users might mistake for human-created?
  - Does it profile users?

**Acceptance Criteria**:
- EU AI Act risk classification documented for planned features
- Transparency obligations identified
- GDPR Art. 22 assessment template ready
- UK AI framework principles documented
- AI legal checklist created for development workflow

---

## Epic 24: Insurance, Corporate Governance & Director Duties

**Priority**: P1 — High
**Scope**: Business operations
**Rationale**: As a UK limited company (Lumenshore Limited, incorporated 26 May 2015, Company No. 09607326), ongoing corporate governance duties apply under the Companies Act 2006. Director duties, filing obligations, and insurance protect the company and its officers.

### Story 24.1: Companies Act 2006 Ongoing Obligations

**As a** director of Lumenshore Limited
**I want** to meet all Companies Act filing and governance obligations
**So that** the company remains in good standing and avoids penalties

#### Subtasks:
- [ ] 24.1.1 — Annual filing obligations:
  - Confirmation Statement (previously Annual Return) filed with Companies House annually
  - Annual Accounts filed with Companies House within required deadline
  - Corporation Tax return filed with HMRC (12 months after accounting period end)
- [ ] 24.1.2 — Director duties (Companies Act 2006 ss.171-177):
  - Duty to act within powers
  - Duty to promote the success of the company
  - Duty to exercise independent judgment
  - Duty to exercise reasonable care, skill and diligence
  - Duty to avoid conflicts of interest
  - Duty not to accept benefits from third parties
  - Duty to declare interest in proposed transactions
- [ ] 24.1.3 — Registered office maintenance:
  - Ensure registered office address (Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, LE4 9HA) is kept current with Companies House
  - Maintain statutory register at registered office or single alternative inspection location (SAIL)
- [ ] 24.1.4 — PSC register (Persons with Significant Control):
  - Maintain accurate PSC register
  - File changes with Companies House within 14 days
  - Confirm via Confirmation Statement annually
- [ ] 24.1.5 — Statutory books and registers:
  - Register of members, register of directors, register of secretary (if any), register of charges
  - Can be maintained at Companies House using Central Registry option

**Acceptance Criteria**:
- All filing obligations current and calendar-tracked
- Director duties documented and understood
- Registered office details current
- PSC register maintained
- Statutory registers in order

### Story 24.2: Insurance Coverage

**As a** company and its directors
**I want** appropriate insurance coverage
**So that** Lumenshore and its officers are protected

#### Subtasks:
- [ ] 24.2.1 — Cyber liability insurance:
  - Coverage for data breach response costs (IT forensics, legal fees, notification costs)
  - Coverage for regulatory investigations and fines (where insurable — ICO fines may not be insurable)
  - Coverage for business interruption from cyber incidents
  - Coverage for third-party claims arising from data breaches
  - Target coverage: minimum £500K (review based on risk assessment)
- [ ] 24.2.2 — Professional indemnity insurance:
  - Coverage for claims of negligence or inadequate service
  - Relevant if users claim app gave incorrect translations or educational content was wrong
  - Target coverage: minimum £250K
- [ ] 24.2.3 — Directors & Officers (D&O) liability insurance:
  - Protects directors from personal liability for company decisions
  - Covers legal defense costs
  - Particularly important for data protection compliance (directors can be personally liable)
- [ ] 24.2.4 — Product liability insurance:
  - May apply to digital products in some jurisdictions
  - EU Product Liability Directive revision may include digital products
  - Assess need based on risk profile
- [ ] 24.2.5 — Employers' liability insurance:
  - Compulsory in UK if employing staff (Employers' Liability (Compulsory Insurance) Act 1969)
  - Not required for directors with no employment contract, but needed for any employees
- [ ] 24.2.6 — Annual insurance review:
  - Review coverage annually aligned with business growth
  - Increase limits as user base and revenue grow
  - Document coverage and renewal dates

**Acceptance Criteria**:
- All necessary insurance categories assessed
- Key policies obtained (cyber liability, PI, D&O)
- Coverage amounts appropriate for current risk profile
- Annual review scheduled

---

## Implementation Priority Matrix

| Priority | Epic | Status | Effort |
|---|---|---|---|
| **P0** | Epic 1: Website Privacy Policy Overhaul | Not Started | Medium |
| **P0** | Epic 2: Cookie & Tracking Consent | Not Started | Medium |
| **P0** | Epic 3: App Store Compliance | Not Started | Large |
| **P0** | Epic 4: GDPR Full Compliance | Not Started | Large |
| **P0** | Epic 9: Subscription Compliance | Not Started (blocked by IAP impl) | Medium |
| **P0** | Epic 11: iOS In-App Legal | Not Started | Medium |
| **P0** | Epic 17: UK Companies Act Disclosures | Not Started | Small |
| **P0** | Epic 18: Country-Specific Privacy Laws | Not Started | XL |
| **P0** | Epic 19: Age of Digital Consent | Not Started | Large |
| **P0** | Epic 20: VAT, Tax & Financial Compliance | Not Started | Large |
| **P1** | Epic 5: CCPA / US Privacy Laws | Not Started | Medium |
| **P1** | Epic 6: UK-Specific Compliance | Not Started | Medium |
| **P1** | Epic 8: IP & Content Protection | Not Started | Small |
| **P1** | Epic 10: Legal Page Internationalization | Not Started | Large |
| **P1** | Epic 13: Email Marketing Compliance | Not Started (blocked by ESP) | Small |
| **P1** | Epic 14: Dispute Resolution & Liability | Not Started | Medium |
| **P1** | Epic 16: Website Legal Infrastructure | Not Started | Small |
| **P1** | Epic 21: Export Controls & Sanctions | Not Started | Small |
| **P1** | Epic 22: Accessibility Multi-Jurisdiction | Not Started | Large |
| **P1** | Epic 24: Insurance & Corporate Governance | Not Started | Medium |
| **P2** | Epic 7: EU DSA/DMA Compliance | Not Started | Small |
| **P2** | Epic 12: Security & Breach Preparedness | Not Started | Medium |
| **P2** | Epic 15: Ongoing Compliance & Governance | Not Started | Medium |
| **P2** | Epic 23: AI & Algorithmic Transparency | Not Started | Small |

| Priority | Epic | Status | Effort |
|---|---|---|---|
| **P0** | Epic 1: Website Privacy Policy Overhaul | Not Started | Medium |
| **P0** | Epic 2: Cookie & Tracking Consent | Not Started | Medium |
| **P0** | Epic 3: App Store Compliance | Not Started | Large |
| **P0** | Epic 4: GDPR Full Compliance | Not Started | Large |
| **P0** | Epic 9: Subscription Compliance | Not Started (blocked by IAP impl) | Medium |
| **P0** | Epic 11: iOS In-App Legal | Not Started | Medium |
| **P1** | Epic 5: CCPA / US Privacy Laws | Not Started | Medium |
| **P1** | Epic 6: UK-Specific Compliance | Not Started | Medium |
| **P1** | Epic 8: IP & Content Protection | Not Started | Small |
| **P1** | Epic 10: Legal Page Internationalization | Not Started | Large |
| **P1** | Epic 13: Email Marketing Compliance | Not Started (blocked by ESP) | Small |
| **P1** | Epic 14: Dispute Resolution & Liability | Not Started | Medium |
| **P1** | Epic 16: Website Legal Infrastructure | Not Started | Small |
| **P2** | Epic 7: EU DSA/DMA Compliance | Not Started | Small |
| **P2** | Epic 12: Security & Breach Preparedness | Not Started | Medium |
| **P2** | Epic 15: Ongoing Compliance & Governance | Not Started | Medium |

---

## Summary Statistics

| Metric | Count |
|---|---|
| **Epics** | 16 |
| **Stories** | 49 |
| **Subtasks** | ~250 |
| **P0 (Critical)** | 6 epics |
| **P1 (High)** | 7 epics |
| **P2 (Medium)** | 3 epics |

---

## Key Jurisdictions Covered

| Jurisdiction | Regulation | Covered In |
|---|---|---|
| **EU** | GDPR | Epics 1, 4, 7 |
| **EU** | ePrivacy Directive | Epic 2 |
| **EU** | Consumer Rights Directive | Epic 9 |
| **EU** | Digital Services Act | Epic 7 |
| **UK** | UK GDPR / DPA 2018 | Epics 4, 6 |
| **UK** | PECR | Epics 2, 6, 13 |
| **UK** | Consumer Rights Act 2015 | Epic 6 |
| **UK** | Consumer Contracts Regs 2013 | Epic 9 |
| **UK** | Equality Act 2010 | Epic 6 |
| **US** | CCPA / CPRA (California) | Epic 5 |
| **US** | COPPA (Children) | Epic 5 |
| **US** | CAN-SPAM Act | Epic 13 |
| **US** | State privacy laws (VA, CO, CT+) | Epic 5 |
| **Canada** | CASL | Epic 13 |
| **Australia** | Spam Act 2003 | Epic 13 |
| **Apple** | App Store Review Guidelines | Epics 3, 9, 11 |
| **Apple** | HIG / Accessibility | Epic 6 |
| **Global** | WCAG 2.1 AA | Epic 6 |
| **Global** | DMCA / Copyright | Epic 8 |
