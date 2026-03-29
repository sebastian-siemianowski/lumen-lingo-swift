# Data Protection Impact Assessment (DPIA)

**Organisation**: LumenShore Ltd (Company No. 09607326)
**Document Owner**: Data Controller
**Document Version**: 2.2
**Date Completed**: 2025-01-01
**Date Last Updated**: 2026-03-27
**Review Frequency**: Annual or when processing changes significantly
**Next Review**: 2026-07-10
**Legal Basis**: UK GDPR Article 35; ICO DPIA Guidance (2018)

---

## 1. DPIA Necessity Assessment

**Is a DPIA required?**

Under UK GDPR Article 35(3) and ICO guidance, a DPIA is required when processing is likely to result in a high risk to individuals' rights and freedoms. The following screening factors apply to LumenShore's processing activities:

| Factor | Applicable? | Details |
|---|---|---|
| Systematic monitoring | Yes | Sentry session replay captures user behaviour on-site |
| Large-scale processing of special categories | No | No health, biometric, or special category data processed |
| Automated decision-making with legal effects | No | No automated decisions — app is a language learning tool |
| Processing of children's data | Potentially | App is 4+ on App Store; users aged 13-17 may access |
| New technologies | Partially | Session replay is a relatively new monitoring technology |
| Evaluation or scoring | No | No profiling or scoring of individuals |
| Cross-border transfers | Yes | Data transferred UK to US via Sentry, Vercel, Clerk, RevenueCat |
| Processing on a large scale | No | SME with limited user base; no mass-market data harvesting |

**Conclusion**: DPIA is required due to (a) session replay monitoring, (b) potential processing of children's data (13-17 age group), and (c) systematic international data transfers to US-based sub-processors. Even where not strictly mandated, this DPIA is conducted as a matter of best practice for all processing activities.

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
| **Legal Basis** | Consent -- UK GDPR Article 6(1)(a) |
| **Retention** | 90 days (Sentry default), then automatically deleted |
| **Sub-Processor** | Functional Software Inc. (Sentry), US-based with EU/UK data processing |
| **Transfer Safeguard** | Sentry DPA with Standard Contractual Clauses (SCCs) |

### 2.2 Necessity and Proportionality

- **Necessity**: Session replay is necessary for effective debugging of complex UI interactions that cannot be reproduced from error logs alone. Text-only error logs miss visual layout bugs, animation glitches, and interaction flow issues.
- **Proportionality**: Processing is minimised through:
  - Consent-gated: 0% sample rate until user explicitly consents (default is off)
  - `maskAllText: true` -- all text content replaced with asterisks
  - `blockAllMedia: true` -- all images and media blocked from capture
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
5. **Cookie Settings**: Footer "Cookie Settings" button allows withdrawal at any time (UK GDPR Art. 7(3))
6. **Transparency**: Privacy Policy describes replay processing, retention, and purpose
7. **Sub-processor DPA**: Sentry DPA covers UK GDPR obligations with SCCs for UK-US transfers

### 2.5 Residual Risk

After mitigation: **LOW**. Processing is consent-gated, text-masked, time-limited, and deletable. No special category data is involved.

---

## 3. DPIA for Children's Data (Ages 13-17)

### 3.1 Description of Processing

| Aspect | Detail |
|---|---|
| **Processing Operation** | iOS app: on-device language learning with SwiftData. Website: optional newsletter/waitlist signup. |
| **Data Subjects** | Users aged 13-17 who download the app (App Store rating 4+) |
| **Data Collected (iOS)** | Learning progress, game scores, language preferences -- stored entirely on-device |
| **Data Collected (Website)** | Email address (newsletter/waitlist only, with consent) |
| **Data NOT Collected** | Age, date of birth, school, parent details, location, photographs |
| **Purpose** | Language learning service delivery |
| **Legal Basis** | Contract (Art. 6(1)(b)) for app; Consent (Art. 6(1)(a)) for newsletter/waitlist |
| **Retention** | On-device: until user deletes. Email: until unsubscribe. |
| **Age Consent Thresholds** | UK: 13, US: 13, France/Germany: 16, Spain: 14, Netherlands: 16, Ireland: 16, Japan/UAE: none specified |

### 3.2 Necessity and Proportionality

- **Necessity**: Learning progress data is strictly necessary for the core function (spaced repetition, game scoring, flashcard tracking). No more data is collected than required.
- **Proportionality**: The app collects zero PII -- no name, age, email, or location. All data is device-local via SwiftData. The app has no account system, no server-side database, no telemetry, and no ad networks.

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
8. **ICO Children's Code compliance**: Data minimisation by default, high privacy settings, no nudge techniques, no geolocation, no profiling, transparency appropriate to age, parental controls supported, online safety embedded by design

### 3.5 Residual Risk

After mitigation: **VERY LOW**. The app collects no PII and stores all data on-device. The website collects email only with explicit consent. The ICO Children's Code principles are substantially met through data minimisation and on-device processing.

---

## 4. DPIA for Vercel Analytics

### 4.1 Description of Processing

| Aspect | Detail |
|---|---|
| **Processing Operation** | Vercel Analytics collects aggregated, cookie-free page view and performance data |
| **Data Subjects** | All website visitors |
| **Data Collected** | Aggregated page views, performance metrics (Web Vitals), country-level geography |
| **Data NOT Collected** | IP addresses, cookies, device fingerprints, individual-level browsing history |
| **Purpose** | Understand website usage patterns and optimise performance |
| **Legal Basis** | Legitimate interest -- UK GDPR Article 6(1)(f) (aggregate-only, cookie-free analytics) |
| **Retention** | Aggregated data; no individual records retained |
| **Sub-Processor** | Vercel Inc., US-based with global edge network |
| **Transfer Safeguard** | Vercel DPA with SCCs; EU-US Data Privacy Framework |

### 4.2 Necessity and Proportionality

- **Necessity**: Understanding page view patterns is necessary to optimise website content and performance for users.
- **Proportionality**: Vercel Analytics is privacy-preserving by design -- no cookies, no PII, aggregate-only data. No individual-level tracking is possible. Data is aggregated before storage.

### 4.3 Risk Assessment

| Risk | Likelihood | Severity | Overall | Mitigation |
|---|---|---|---|---|
| Re-identification from aggregate data | None | Low | None | Data is aggregated before storage; no individual records exist |
| Over-collection of browsing habits | None | Medium | None | No cookies, no fingerprinting, no individual tracking |
| Data breach at Vercel | Very Low | Low | Very Low | Only aggregate data; no PII to expose |

### 4.4 Residual Risk

**DPIA Outcome**: LOW risk. Vercel Analytics is privacy-preserving by design (no cookies, no PII, aggregate-only data). No high risk to data subjects. No consent required under PECR (no cookies set).

---

## 5. DPIA for Custom Analytics Events

### 5.1 Description of Processing

| Aspect | Detail |
|---|---|
| **Processing Operation** | Custom event tracking via Vercel Analytics for specific user interactions |
| **Data Subjects** | Website visitors |
| **Events Tracked** | `app_store_click`, `pricing_view`, `pricing_cta_click`, `blog_post_read`, `feature_section_view`, `newsletter_signup`, `demo_started`, `demo_completed`, `demo_cta_click`, `page_not_found`, `error_page_view` |
| **Data Collected** | Event name, page location, tier/slug metadata -- no PII, no email, no IP |
| **Data NOT Collected** | Email addresses, user identifiers, IP addresses, device fingerprints |
| **Purpose** | Understand feature engagement to improve product experience |
| **Legal Basis** | Legitimate interest -- UK GDPR Article 6(1)(f) (anonymised event data) |
| **Retention** | Aggregated by Vercel; no individual-level records |
| **Sub-Processor** | Vercel Inc. (same DPA as Vercel Analytics) |

### 5.2 Necessity and Proportionality

- **Necessity**: Event tracking identifies which features visitors engage with, enabling evidence-based product decisions.
- **Proportionality**: Events are strictly anonymised. The `newsletter_signup` event records page location only, not the email address. `demo_completed` records scores, not user identity. No cookies are set.

### 5.3 Risk Assessment

| Risk | Likelihood | Severity | Overall | Mitigation |
|---|---|---|---|---|
| Re-identification from event patterns | Very Low | Low | Very Low | No user identifiers attached to events; aggregate only |
| Inadvertent PII in event metadata | Very Low | Medium | Very Low | Event definitions reviewed to exclude PII; email explicitly excluded from `newsletter_signup` |
| Scope creep (adding PII-linked events) | Low | Medium | Low | Privacy Policy documents exact event list; changes require DPIA review |

### 5.4 Mitigation Measures

1. **Event audit**: Each custom event is documented in the Privacy Policy with its exact data payload
2. **PII exclusion**: Engineering practice explicitly excludes PII from event metadata
3. **GPC/DNT suppression**: All custom events suppressed when GPC or DNT signals are detected
4. **No cookies**: Events transmitted via cookie-free Vercel Analytics infrastructure

### 5.5 Residual Risk

After mitigation: **VERY LOW**. Events are anonymised, aggregated, and cookie-free. GPC/DNT signals suppress all tracking.

---

## 6. DPIA for Sentry Error Monitoring

### 6.1 Description of Processing

| Aspect | Detail |
|---|---|
| **Processing Operation** | Sentry captures JavaScript errors, stack traces, browser metadata, and anonymised request data |
| **Data Subjects** | Website visitors who consent to error monitoring |
| **Data Collected** | Error messages, stack traces, browser type/version, OS, page URL |
| **Data NOT Collected** | IP addresses (anonymised by Sentry), user-identifiable data, form input values |
| **Purpose** | Identify, diagnose, and resolve software defects |
| **Legal Basis** | Consent -- UK GDPR Article 6(1)(a) (consent-gated via cookie banner, errorMonitoring category) |
| **Retention** | 90 days (Sentry default), then automatically deleted |
| **Sub-Processor** | Functional Software Inc. (Sentry), US-based |
| **Transfer Safeguard** | Sentry DPA with Standard Contractual Clauses |

### 6.2 Necessity and Proportionality

- **Necessity**: Error monitoring is essential for maintaining a reliable website. Without it, bugs affecting users go undetected.
- **Proportionality**: IP anonymisation, text masking, and 90-day retention limit data exposure. Consent-gated, not enabled by default.

### 6.3 Risk Assessment

| Risk | Likelihood | Severity | Overall | Mitigation |
|---|---|---|---|---|
| PII leakage in error data | Very Low | Medium | Very Low | IP anonymised; text masked; no form data captured |
| Data breach at Sentry | Low | Medium | Low | Sentry SOC 2; encryption at rest and in transit |
| Retention beyond necessity | Very Low | Low | Very Low | 90-day auto-deletion policy |

### 6.4 Residual Risk

After mitigation: **LOW**. Error data contains no PII (IP anonymised, text masked). Consent-gated via cookie banner. 90-day retention. Standard debugging practice.

---

## 7. DPIA for Service Worker Caching

### 7.1 Description of Processing

| Aspect | Detail |
|---|---|
| **Processing Operation** | Service Worker caches static assets (HTML, CSS, JS, images, fonts) on the user's device for offline access |
| **Data Subjects** | Website visitors |
| **Data Stored** | Static assets only -- HTML pages, CSS stylesheets, JavaScript bundles, images, fonts |
| **Data NOT Stored** | Personal data, form inputs, user preferences, analytics data |
| **Purpose** | Enable offline access and improve page load performance |
| **Legal Basis** | Legitimate interest -- UK GDPR Article 6(1)(f); strictly necessary under PECR Regulation 6 |
| **Retention** | Until user clears browser cache or unregisters the Service Worker |
| **Sub-Processor** | None -- all processing is client-side |

### 7.2 Risk Assessment

| Risk | Likelihood | Severity | Overall | Mitigation |
|---|---|---|---|---|
| Personal data in cache | None | Low | None | Cache contains only static assets; no PII |
| Stale content served | Low | Low | Very Low | Service Worker uses cache-then-network strategy with version invalidation |
| Unauthorised cache access | Very Low | Low | Very Low | Browser sandbox model protects Service Worker storage |

### 7.3 Residual Risk

**DPIA Outcome**: NEGLIGIBLE risk. No personal data is cached. Service Worker operates entirely within the browser sandbox.

---

## 8. DPIA for Website Data Collection (Cookies & Local Storage)

### 8.1 Description of Processing

| Aspect | Detail |
|---|---|
| **Processing Operation** | Website stores cookie consent preferences and essential session data in browser storage |
| **Data Subjects** | Website visitors |
| **Data Stored** | Cookie consent choices (localStorage key), locale preference |
| **Data NOT Stored** | Tracking cookies, advertising identifiers, cross-site identifiers |
| **Purpose** | Remember user's cookie consent choice and language preference |
| **Legal Basis** | Strictly necessary under PECR Regulation 6 (consent storage); Legitimate interest Art. 6(1)(f) (locale) |
| **Retention** | localStorage: persistent until cleared. Session: until browser closed. |
| **Sub-Processor** | None -- client-side storage only |

### 8.2 Risk Assessment

| Risk | Likelihood | Severity | Overall | Mitigation |
|---|---|---|---|---|
| PII in localStorage | None | Low | None | Only consent boolean and locale string stored |
| Cross-site tracking | None | Medium | None | No third-party cookies; no advertising identifiers |
| Consent not recorded | Very Low | Medium | Very Low | Consent banner presented on first visit; choice persisted client-side |

### 8.3 Residual Risk

**DPIA Outcome**: NEGLIGIBLE risk. Only strictly necessary data (consent choices, locale) is stored client-side. No PII involved.

---

## 9. DPIA for Clerk Authentication

### 9.1 Description of Processing

| Aspect | Detail |
|---|---|
| **Processing Operation** | Clerk provides user authentication and identity management for the web application |
| **Data Subjects** | Registered users of the LumenLingo website |
| **Data Collected** | Email address, user identifier, authentication tokens |
| **Data NOT Collected** | Password (hashed by Clerk), payment data, learning progress |
| **Purpose** | User authentication, account management, access control |
| **Legal Basis** | Contract -- UK GDPR Article 6(1)(b) (necessary for account-based service) |
| **Retention** | Until account deletion or service termination |
| **Sub-Processor** | Clerk, Inc., United States |
| **Transfer Safeguard** | Clerk DPA with Standard Contractual Clauses; EU-US Data Privacy Framework certification |

### 9.2 Necessity and Proportionality

- **Necessity**: Authentication is strictly necessary for personalised features requiring user accounts.
- **Proportionality**: Only email and user ID are processed. Passwords are hashed by Clerk and never accessible to LumenShore. No unnecessary profile data collected.

### 9.3 Risk Assessment

| Risk | Likelihood | Severity | Overall | Mitigation |
|---|---|---|---|---|
| Email address exposure in breach | Low | Medium | Low | Clerk SOC 2 certified; encryption at rest and in transit |
| Account takeover | Low | High | Medium | Clerk handles MFA, rate limiting, bot detection |
| Clerk service compromise | Very Low | High | Low | DPA in place; breach notification obligations contractually agreed |
| Unauthorised data access by Clerk staff | Very Low | Medium | Very Low | Clerk's DPA restricts processing to documented instructions only |

### 9.4 Mitigation Measures

1. **DPA in place**: Clerk DPA with SCCs for UK-US transfers
2. **Minimal data**: Only email and user ID shared; no learning data transmitted to Clerk
3. **MFA available**: Clerk supports multi-factor authentication for enhanced account security
4. **Encryption**: Data encrypted in transit (TLS) and at rest by Clerk
5. **Account deletion**: Users can delete their account, triggering data removal from Clerk
6. **Breach notification**: Clerk contractually obligated to notify LumenShore of breaches

### 9.5 Residual Risk

After mitigation: **LOW**. Email is the only PII shared. Clerk is SOC 2 certified with DPA and SCCs in place.

---

## 10. DPIA for RevenueCat Subscription Management

### 10.1 Description of Processing

| Aspect | Detail |
|---|---|
| **Processing Operation** | RevenueCat manages subscription entitlements and purchase receipt validation |
| **Data Subjects** | iOS app users who purchase subscriptions |
| **Data Collected** | App user ID (anonymous), subscription status, Apple purchase receipts |
| **Data NOT Collected** | Raw payment card data (Apple is merchant of record), email, name, learning data |
| **Purpose** | Verify subscription status, manage entitlements, prevent fraud |
| **Legal Basis** | Contract -- UK GDPR Article 6(1)(b) (necessary for subscription fulfilment) |
| **Retention** | Until subscription expires plus 90 days for refund window |
| **Sub-Processor** | RevenueCat, Inc., United States |
| **Transfer Safeguard** | RevenueCat DPA with Standard Contractual Clauses |

### 10.2 Necessity and Proportionality

- **Necessity**: Receipt validation is required to verify subscription status and unlock premium features. Without it, entitlement management would depend entirely on Apple's server-to-server notifications with no fallback.
- **Proportionality**: RevenueCat receives only anonymous app user IDs and Apple purchase receipts. No name, email, or payment card data is shared. Apple remains the merchant of record.

### 10.3 Risk Assessment

| Risk | Likelihood | Severity | Overall | Mitigation |
|---|---|---|---|---|
| Purchase receipt exposure | Very Low | Medium | Very Low | Receipts contain no payment card data; anonymous user IDs only |
| Subscription status leakage | Very Low | Low | Very Low | Status is "active/expired" only; no personal context |
| RevenueCat service compromise | Very Low | Medium | Very Low | DPA in place; anonymous user IDs reduce impact |
| Re-identification via app user ID | Very Low | Low | Very Low | App user ID is a random UUID with no PII linkage |

### 10.4 Mitigation Measures

1. **Anonymous IDs**: App user ID is a randomly generated UUID, not linked to email or name
2. **Apple as merchant of record**: RevenueCat never receives payment card details
3. **DPA in place**: RevenueCat Data Processing Addendum with SCCs
4. **Retention limit**: Data retained only for subscription lifetime plus refund window

### 10.5 Residual Risk

After mitigation: **VERY LOW**. Only anonymous subscription status data is shared. No PII is transmitted to RevenueCat.

---

## 11. DPIA for iCloud Data Synchronisation

### 11.1 Description of Processing

| Aspect | Detail |
|---|---|
| **Processing Operation** | Apple iCloud syncs learning progress data between user's devices |
| **Data Subjects** | iOS app users who enable iCloud sync |
| **Data Synced** | Learning progress (flashcard state, game scores, language preferences) |
| **Data NOT Synced** | Analytics data, subscription data via this channel, personal profile data |
| **Purpose** | Enable users to continue learning across multiple Apple devices |
| **Legal Basis** | Contract -- UK GDPR Article 6(1)(b) (feature user opted into) |
| **Retention** | Until user deletes app data or disables iCloud sync |
| **Sub-Processor** | Apple Inc. (iCloud), global data centres |
| **Transfer Safeguard** | Apple DPA with Standard Contractual Clauses for international transfers |

### 11.2 Necessity and Proportionality

- **Necessity**: Cross-device sync is a core user expectation for mobile apps. Without it, users lose progress when switching devices.
- **Proportionality**: Only learning progress data is synced -- no PII, no analytics, no personal profile. Sync is opt-in (user must enable iCloud for the app). Apple manages all encryption.

### 11.3 Risk Assessment

| Risk | Likelihood | Severity | Overall | Mitigation |
|---|---|---|---|---|
| Learning data exposure | Very Low | Low | Very Low | End-to-end encryption by Apple; data is flashcard progress, not PII |
| Apple iCloud breach | Very Low | Medium | Very Low | Apple manages security; LumenShore has no access to iCloud infrastructure |
| Data retained after account deletion | Low | Low | Low | In-app "Delete Account" erases local data; user can separately manage iCloud storage |

### 11.4 Residual Risk

After mitigation: **VERY LOW**. Sync data contains no PII (learning progress only). Apple manages all encryption and infrastructure security.

---

## 12. DPIA for International Data Transfers

### 12.1 Description of Processing

| Aspect | Detail |
|---|---|
| **Data Exporter** | LumenShore Limited, United Kingdom |
| **Data Importers** | Sentry (US), Vercel (US + global edge), Clerk (US), RevenueCat (US), Apple (US + global) |
| **Data Transferred** | Error logs, session replays (consent), aggregate analytics, email/auth tokens, subscription IDs, iCloud sync data |
| **Transfer Mechanism** | Standard Contractual Clauses (SCCs), UK International Data Transfer Agreement (IDTA), EU-US Data Privacy Framework adequacy |

### 12.2 Transfer Impact Assessment

| Sub-Processor | Destination | Safeguard | Additional Measure | Risk Level |
|---|---|---|---|---|
| **Sentry** | United States | SCCs + DPA | IP anonymisation, text masking, 90-day retention, consent-gated | Low |
| **Vercel** | United States + global edge | SCCs + DPA + DPF certification | Aggregate-only data; no PII transferred | Very Low |
| **Clerk** | United States | SCCs + DPA + DPF certification | Email + user ID only; MFA available; encryption at rest | Low |
| **RevenueCat** | United States | SCCs + DPA | Anonymous app user IDs only; no payment data | Very Low |
| **Apple** | Global (Apple data centres) | SCCs + Apple DPA | End-to-end encryption; learning progress only | Very Low |

### 12.3 Assessment of US Legal Regime

Following the EU-US Data Privacy Framework adequacy decision (July 2023) and the UK Extension to the DPF (October 2023), the risk of US government access to transferred data is materially reduced for DPF-certified recipients. For non-DPF-certified recipients, SCCs with supplementary measures (encryption, data minimisation, anonymisation) provide adequate protection per the ICO's risk-based approach.

LumenShore's assessment: the data transferred is predominantly (a) anonymised analytics with no PII, (b) masked error data with no PII, (c) encrypted learning progress with no PII, or (d) limited email/user ID with contractual protections. The surveillance risk to data subjects is **very low** given the non-sensitive nature of the data and the contractual safeguards in place.

### 12.4 Residual Risk

After mitigation: **LOW**. All transfers covered by SCCs, DPAs, and/or DPF certification. Data minimisation ensures most transferred data contains no PII. Supplementary technical measures (anonymisation, masking, encryption) further reduce risk.

---

## 13. DPIA for GPC / DNT Signal Processing

### 13.1 Description of Processing

| Aspect | Detail |
|---|---|
| **Processing Operation** | LumenShore detects and honours Global Privacy Control (GPC) and Do Not Track (DNT) browser signals |
| **Data Subjects** | Website visitors with GPC or DNT enabled |
| **Processing Logic** | When GPC/DNT detected: suppress all non-essential tracking (Vercel Analytics custom events, Sentry session replay, Sentry error monitoring) |
| **Data Collected** | None -- GPC/DNT signals result in suppression, not collection |
| **Legal Basis** | CPRA compliance (GPC = valid opt-out of sale/sharing); voluntary commitment (DNT) |

### 13.2 Risk Assessment

**DPIA Outcome**: NEGLIGIBLE risk. GPC/DNT processing is a privacy-enhancing mechanism that suppresses data collection. No personal data is collected as a result of this processing. The signal detection itself does not store or transmit the signal value.

---

## 14. Summary & Sign-Off

### 14.1 Comprehensive Risk Register

| # | Processing Activity | DPIA Required? | Risk Level (Post-Mitigation) |
|---|---|---|---|
| 1 | Sentry Session Replay | Yes | Low |
| 2 | Children's Data (iOS App) | Yes (precautionary) | Very Low |
| 3 | Vercel Analytics | No (aggregate-only) | Very Low |
| 4 | Custom Analytics Events | No (anonymised) | Very Low |
| 5 | Sentry Error Monitoring | No (low risk) | Low |
| 6 | Service Worker Caching | No (no personal data) | Negligible |
| 7 | Website Data (Cookies/localStorage) | No (strictly necessary only) | Negligible |
| 8 | Clerk Authentication | Yes (PII processing + international transfer) | Low |
| 9 | RevenueCat Subscriptions | No (anonymous IDs only) | Very Low |
| 10 | iCloud Data Sync | No (Apple-managed, no PII) | Very Low |
| 11 | International Data Transfers | Yes (systematic UK-US transfers) | Low |
| 12 | GPC/DNT Signal Processing | No (privacy-enhancing) | Negligible |

### 14.2 Overall Assessment

LumenShore's processing activities present a **low overall risk** to data subjects after documented mitigation measures. The highest-risk activities (session replay, Clerk authentication, international transfers) are mitigated through consent mechanisms, data minimisation, contractual safeguards (DPAs with SCCs), and technical measures (anonymisation, masking, encryption).

No processing activity reaches a **high** residual risk level. The controller is satisfied that the benefits of processing outweigh the residual risks to data subjects, and that appropriate safeguards are in place.

### 14.3 Action Items

- [ ] Verify Sentry retention is configured to 90 days via Sentry dashboard
- [ ] Monitor ICO Children's Code updates for any changes affecting language learning apps
- [ ] Monitor EU-US Data Privacy Framework adequacy decisions for changes
- [ ] Review Clerk, RevenueCat, and Sentry DPAs annually for updates
- [ ] Review this DPIA annually or when adding new processing activities
- [ ] Re-assess if any new sub-processor is added or processing purpose changes

### 14.4 Version History

| Version | Date | Changes |
|---|---|---|
| 1.0 | 2025-01-01 | Initial DPIA covering Sentry Replay, Children's Data, Vercel Analytics, Sentry Error Monitoring |
| 2.2 | 2025-07-10 | Comprehensive update: added Custom Events, Service Worker, Website Data, Clerk, RevenueCat, iCloud, International Transfers, GPC/DNT assessments. Updated necessity assessment. Added Transfer Impact Assessment. Version-aligned with Privacy Policy v2.2. |

---

*This document is an internal compliance artefact. Store securely and update when processing changes significantly.*
