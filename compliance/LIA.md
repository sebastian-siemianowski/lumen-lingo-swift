# Legitimate Interest Assessments (LIA)

**Controller**: LumenShore Ltd, Company No. 09607326
**Registered Address**: Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, LE4 9HA, United Kingdom
**Contact**: support@lumenlingo.com
**Document Version**: 1.0
**Date Created**: 2025-06-26
**Next Review**: 2026-06-26 (annual)
**Legal Framework**: GDPR Article 6(1)(f) / UK GDPR Article 6(1)(f)

---

## LIA-001: Vercel Web Analytics

### 1. Purpose Test — Identify the Legitimate Interest

**What is the processing?**
Collection of anonymous, cookie-free page-view analytics and custom event tracking (e.g. app store clicks, pricing views, blog reads, demo interactions) via Vercel Analytics on lumenlingo.com.

**What is the legitimate interest being pursued?**
Understanding website usage patterns to:
- Improve user experience and site navigation
- Identify which content and features are most valued
- Prioritise product development based on actual usage data
- Measure the effectiveness of marketing campaigns (via UTM attribution)
- Detect and resolve performance issues (Core Web Vitals)

**Who benefits?**
- **LumenShore Ltd**: data-driven product decisions, efficient resource allocation
- **Users**: improved website experience, faster page loads, more relevant content

**Is the interest legitimate?**
Yes. Website analytics for service improvement is a well-established legitimate interest recognised by data protection authorities, including the ICO. No sensitive data is involved. The processing is proportionate to the business need.

### 2. Necessity Test — Is the Processing Necessary?

**Could the purpose be achieved without this processing?**
No — without analytics, LumenShore would have no visibility into which pages users visit, where they drop off, or which features generate interest. Development decisions would be uninformed guesswork.

**Is the processing proportionate?**
Yes. Vercel Analytics is specifically designed for privacy:
- Cookie-free — no client-side identifiers or tracking cookies
- No IP address storage by Vercel
- No cross-site tracking
- Data is aggregated and anonymised by Vercel before presentation
- No individual user profiles are created

**Alternatives considered:**
| Alternative | Assessment |
|---|---|
| No analytics at all | Unacceptable — cannot improve product without usage data |
| Google Analytics | More invasive (cookies, user profiling) — rejected |
| Self-hosted analytics (Plausible/Umami) | Viable but adds infrastructure cost; Vercel Analytics is already cookie-free and privacy-preserving |
| Consent-based analytics only | Implemented — analytics events require `analytics` cookie category consent |

### 3. Balancing Test — Rights vs. Interests

**Impact on individuals:**
- **Data collected**: Aggregated page views and custom events only. No names, emails, IP addresses, or device fingerprints
- **Identifiability**: Individuals cannot be identified from Vercel Analytics data
- **Expectation**: Users reasonably expect a commercial website to track anonymous page views for improvement purposes
- **Vulnerability**: No vulnerable groups specifically affected
- **Risk of harm**: Negligible — no PII processed, no profiling, no automated decisions

**Safeguards in place:**
- Cookie-free analytics (no client-side tracking)
- Consent-gating: analytics events only fire after `analytics` cookie category consent
- No cross-site tracking or user profiling
- Privacy Policy discloses use of Vercel Analytics
- Users can withdraw analytics consent via "Cookie Settings" link

**Balancing conclusion:**
The legitimate interest of LumenShore in understanding anonymous website usage **outweighs** any impact on individuals, given that:
1. No personal data (as defined by GDPR) is processed — data is anonymous and aggregated
2. Cookie-free implementation eliminates tracking concerns
3. Additional consent-gating provides users with control beyond what is legally required
4. The processing is transparent and disclosed in the Privacy Policy

**Decision**: Legitimate interest is the appropriate lawful basis for Vercel Analytics.

---

## LIA-002: Sentry Error Monitoring

### 1. Purpose Test — Identify the Legitimate Interest

**What is the processing?**
Automated collection of error reports (stack traces, error messages, browser breadcrumbs) when software errors occur on lumenlingo.com, sent to Sentry for diagnosis and resolution.

**What is the legitimate interest being pursued?**
Maintaining the reliability, security, and quality of the web service by:
- Detecting software errors in real time
- Diagnosing the root cause of user-facing bugs
- Prioritising fixes based on error frequency and severity
- Monitoring performance regressions after deployments
- Ensuring service availability and stability

**Who benefits?**
- **LumenShore Ltd**: faster bug detection and resolution, reduced downtime, higher service quality
- **Users**: more reliable and stable learning experience, fewer errors disrupting study sessions

**Is the interest legitimate?**
Yes. Error monitoring for service reliability is a well-established legitimate interest. The ICO and European Data Protection Board (EDPB) recognise IT security and service reliability as legitimate interests. The UK GDPR Recital 49 specifically notes that processing for network and information security constitutes a legitimate interest.

### 2. Necessity Test — Is the Processing Necessary?

**Could the purpose be achieved without this processing?**
Not effectively. Without error monitoring:
- Errors would go undetected until users report them (most users don't report)
- Diagnosis would be extremely difficult without stack traces and context
- Response time to critical bugs would be unacceptably slow
- No performance baseline or regression detection

**Is the processing proportionate?**
Yes. The data collected is strictly limited to technical error information:
- Stack traces (code execution paths — no user content)
- Error messages (technical descriptions)
- Browser breadcrumbs (page navigation sequence only)
- No usernames, email addresses, form inputs, or direct identifiers
- Production sample rate: 10% of transactions (tracesSampleRate: 0.1)

**Alternatives considered:**
| Alternative | Assessment |
|---|---|
| No error monitoring | Unacceptable — cannot maintain service quality |
| Server-side logging only | Insufficient — misses client-side JavaScript errors entirely |
| Self-hosted error monitoring (GlitchTip) | Viable but adds infrastructure burden; Sentry is industry-standard and SOC 2 certified |
| Consent-based error monitoring only | Disproportionate — would leave most errors undetected, degrading experience for all users. Error monitoring is a core operational necessity |

### 3. Balancing Test — Rights vs. Interests

**Impact on individuals:**
- **Data collected**: Technical error data only. No PII (names, emails, addresses) is included in error payloads
- **Identifiability**: Individuals are not identifiable from error data (no user IDs, no session IDs linked to identity)
- **Expectation**: Users reasonably expect a professional web service to monitor for and fix errors
- **Vulnerability**: No vulnerable groups specifically affected
- **Risk of harm**: Negligible — technical error data has no impact on individual privacy, reputation, or autonomy

**Safeguards in place:**
- No PII in error payloads (no user identifiers, no form data)
- Production sampling at 10% (not all requests)
- 90-day automatic data deletion by Sentry
- Data processed by Sentry under Standard Contractual Clauses (EU-US transfer)
- Sentry is SOC 2 Type II certified
- Server-side error monitoring runs independently of user actions
- Privacy Policy discloses use of Sentry for error monitoring
- Session replay (which captures user behaviour) is treated separately under Consent basis — not covered by this LIA

**Balancing conclusion:**
The legitimate interest of LumenShore in monitoring and resolving errors **outweighs** any impact on individuals, given that:
1. Only technical error data is processed — no personal data in the GDPR sense
2. Individuals cannot be identified from the data
3. The processing is necessary for basic service reliability
4. Strong safeguards are in place (sampling, auto-deletion, SOC 2, SCCs)
5. Users reasonably expect error monitoring as standard practice

**Decision**: Legitimate interest is the appropriate lawful basis for Sentry error monitoring.

**Note**: Sentry Session Replay is processed under a **separate lawful basis (Consent)** because it captures user interaction patterns. This LIA covers error monitoring only.

---

## LIA-003: UTM Parameter Capture

### 1. Purpose Test — Identify the Legitimate Interest

**What is the processing?**
Capture of UTM marketing parameters (source, medium, campaign, term, content) from inbound URLs, stored in browser sessionStorage and forwarded to the first analytics event.

**What is the legitimate interest being pursued?**
Measuring marketing campaign effectiveness to allocate marketing spend efficiently.

### 2. Necessity Test

**Is the processing proportionate?**
Yes. UTM parameters describe the marketing campaign, not the individual user. They are not personal data in most interpretations (they describe where traffic came from, not who the visitor is).

**Safeguards:**
- sessionStorage only (cleared when browser tab closes)
- No persistent storage
- No server-side logging of UTM parameters
- Parameters describe campaigns, not individuals

### 3. Balancing Test

**Impact on individuals**: None. UTM parameters contain no personal data.

**Decision**: Legitimate interest is the appropriate basis. The processing has negligible privacy impact.

---

*This document is an internal compliance artefact. It is not published externally but must be available for ICO or supervisory authority inspection upon request.*
