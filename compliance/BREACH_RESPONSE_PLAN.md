# Data Breach Response Plan

**Lumenshore Limited — Company No. 09607326**
**Document Owner**: Data Protection Lead
**Last Reviewed**: 23 March 2026
**Review Frequency**: Annual (or after any breach)

---

## 1. Purpose

This plan ensures Lumenshore Limited can detect, contain, assess, and report personal data breaches in compliance with:

- **GDPR Article 33 & 34** — 72-hour notification to ICO, data subject notification when high risk
- **UK Data Protection Act 2018** — Section 67–68
- **California Consumer Privacy Act (CCPA)** — Cal. Civ. Code § 1798.82

---

## 2. What Constitutes a Personal Data Breach

GDPR Article 4(12) defines a personal data breach as:

> A breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, personal data transmitted, stored or otherwise processed.

### Examples relevant to LumenLingo

| Category | Example |
|---|---|
| **Confidentiality** | Email addresses from newsletter sign-ups exposed via API misconfiguration |
| **Integrity** | User learning progress corrupted by a syncing bug |
| **Availability** | iCloud data permanently lost due to a code error |

### What Is NOT a Breach

- Anonymous analytics data (Vercel pageviews) — not personal data
- Users voluntarily deleting their own data
- Planned downtime or maintenance

---

## 3. Detection & Identification

### 3.1 Detection Sources

| Source | Monitoring |
|---|---|
| **Sentry** | Error spikes, unusual HTTP 4xx/5xx patterns, unexpected data in payloads |
| **Vercel** | Deployment anomalies, build failures, edge function errors |
| **Apple** | App Store review feedback, iCloud incident notifications |
| **User Reports** | Via support@lumenshore.com or App Store reviews |
| **Security Researchers** | Via security.txt / /security page (see Story 12.3) |
| **npm audit** | Dependency vulnerability alerts, Dependabot notifications |

### 3.2 Who Can Detect

Any team member who becomes aware of a potential breach must report it immediately to the Data Protection Lead.

---

## 4. Initial Containment

Upon suspicion of a breach:

1. **Record the time** you became aware (the 72-hour clock starts now)
2. **Contain immediately** — revoke compromised credentials, disable affected endpoints, roll back deployments
3. **Preserve evidence** — do not delete logs, screenshots, or error data
4. **Escalate** — notify the Data Protection Lead and relevant technical staff

---

## 5. Risk Assessment Framework

Assess every breach using the following matrix:

### 5.1 Severity (Impact on Individuals)

| Level | Description | Example |
|---|---|---|
| **Low** | Negligible impact, no sensitive data | Exposed display preferences |
| **Medium** | Minor inconvenience, non-sensitive data | Email addresses exposed |
| **High** | Significant impact, sensitive or financial data | Payment data, health data, large-scale email breach |
| **Critical** | Identity theft risk, large scale | Combined PII: name + email + payment + location |

### 5.2 Likelihood of Harm

| Level | Description |
|---|---|
| **Unlikely** | Data was encrypted, breach was contained instantly, or data was not accessed |
| **Possible** | Data may have been accessed but no evidence of misuse |
| **Probable** | Evidence of access or exfiltration |

### 5.3 LumenLingo Risk Context

LumenLingo's data exposure is minimal:
- **iOS app**: All learning data is on-device + iCloud (Apple-managed encryption). Lumenshore has no access.
- **Website**: Newsletter email addresses and waitlist entries are the only personal data processed server-side.
- **No passwords**: No user accounts exist (iCloud sync uses Apple ID, managed by Apple).
- **No payment data**: All billing is via Apple IAP (Apple is the merchant of record).

---

## 6. Notification Decision Tree

```
Breach detected
    │
    ▼
Is personal data involved?
    │
    ├── No → Log in breach register only. No notification required.
    │
    └── Yes → Assess risk (Section 5)
              │
              ├── Low risk, unlikely harm → Log in breach register. No ICO notification.
              │
              ├── Medium risk or above → NOTIFY ICO within 72 hours (Section 7)
              │       │
              │       ├── High risk to individuals → ALSO notify affected individuals (Section 8)
              │       │
              │       └── Not high risk to individuals → ICO only
              │
              └── >500 California residents affected → ALSO notify California AG (Section 9)
```

---

## 7. ICO Notification (GDPR Art. 33)

### 7.1 Timeline

- **Within 72 hours** of becoming aware of the breach
- If not possible within 72 hours, notify as soon as practicable with reasons for delay

### 7.2 What to Include

1. Nature of the breach (categories and approximate numbers of individuals and records)
2. Name and contact details of the Data Protection Officer / contact point
3. Likely consequences of the breach
4. Measures taken or proposed to address the breach and mitigate effects

### 7.3 How to Notify

- **ICO online form**: https://ico.org.uk/for-organisations/report-a-breach/
- **Phone** (for urgent breaches): 0303 123 1113

### 7.4 Notification Template

```
TO: Information Commissioner's Office
FROM: Lumenshore Limited, Company No. 09607326

DATA BREACH NOTIFICATION - [Date]

1. NATURE OF BREACH:
   [Description — e.g., "Unauthorised access to newsletter subscriber email addresses"]

2. CATEGORIES OF DATA SUBJECTS:
   [e.g., "Newsletter subscribers" — approximate number]

3. CATEGORIES OF PERSONAL DATA:
   [e.g., "Email addresses, subscription date"]

4. LIKELY CONSEQUENCES:
   [e.g., "Potential receipt of unsolicited emails"]

5. MEASURES TAKEN:
   [e.g., "API endpoint secured, affected users notified, audit log reviewed"]

6. DATA PROTECTION CONTACT:
   Email: support@lumenshore.com
   Company: Lumenshore Limited
   Address: Windsor House, Troon Way Business Centre, Humberstone Lane,
            Leicester, England, LE4 9HA
```

---

## 8. Data Subject Notification (GDPR Art. 34)

Required only when the breach "is likely to result in a **high risk** to the rights and freedoms of natural persons."

### 8.1 Notification Template

```
Subject: Important Security Notice from LumenLingo

Dear [User],

We are writing to inform you of a security incident affecting your data.

WHAT HAPPENED:
[Clear, plain-language description]

WHAT DATA WAS INVOLVED:
[Specific categories — e.g., "your email address"]

WHAT WE ARE DOING:
[Steps taken to contain and remediate]

WHAT YOU CAN DO:
[Practical advice — e.g., "Be cautious of unexpected emails"]

CONTACT US:
If you have questions, email support@lumenshore.com.
We aim to respond within 48 hours.

Sincerely,
The LumenLingo Team
Lumenshore Limited
```

---

## 9. CCPA Breach Notification (California)

If the breach involves unencrypted personal information of California residents:

- **Notify affected individuals** in the most expedient time possible and without unreasonable delay
- If **500+ California residents** are affected, also notify the California Attorney General: https://oag.ca.gov/privacy/databreach/reporting
- Notification must include: what happened, what data, what we're doing, what they can do, contact info

---

## 10. Breach Log (GDPR Art. 33(5))

**All breaches must be logged**, including those not reported to the ICO.

### Breach Register Template

| # | Date Detected | Date Aware | Description | Data Categories | Individuals Affected | Risk Level | ICO Notified? | Subjects Notified? | Remediation | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | — | — | — | — | — | — | — | — | — | — |

The breach register is maintained internally and reviewed during annual compliance audits.

---

## 11. Roles & Responsibilities

| Role | Responsibility | Assigned To |
|---|---|---|
| **Data Protection Lead** | Owns the breach response, makes notification decisions, contacts ICO | CEO / Founder |
| **Technical Lead** | Identifies root cause, implements containment, preserves evidence | CTO / Lead Developer |
| **Communications** | Drafts data subject notifications, manages external communications | CEO / designated |
| **Legal Advisor** | Advises on notification obligations, regulatory exposure | External counsel |

---

## 12. Post-Incident Review

After every breach (including near-misses):

1. **Root cause analysis** — what failed and why
2. **Process improvement** — update this plan if gaps found
3. **Technical remediation** — patch, upgrade, or redesign as needed
4. **Documentation** — update breach register with final status and lessons learned
5. **Communication** — share relevant lessons with the team

---

## 13. Annual Review & Simulation

- This plan is reviewed **annually** (January) or after any breach
- An annual **tabletop exercise** simulates a breach scenario to test the team's readiness
- Findings from the exercise are documented and fed back into this plan

---

## Revision History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 23 March 2026 | LumenShore | Initial version |
