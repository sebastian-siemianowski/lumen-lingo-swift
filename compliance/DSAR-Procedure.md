# Data Subject Access Request (DSAR) Procedure

**Controller**: LumenShore Ltd, Company No. 09607326
**Contact**: hello@lumenshore.com
**Document Version**: 1.0
**Date Created**: 2025-06-26
**Next Review**: 2026-06-26 (annual)
**Legal Framework**: GDPR Articles 15-22 / UK GDPR Articles 15-22

---

## 1. Request Channels

Data subjects may submit requests via:

1. **Email**: hello@lumenshore.com (primary channel)
2. **Web form**: lumenlingo.com/data-request (structured form with request type selection)

All requests, regardless of channel, are logged in the DSAR Log (see `compliance/DSAR-Log.md`).

---

## 2. Acknowledgement

- Acknowledge receipt within **72 hours** (3 business days)
- Provide request reference number (format: `DSAR-YYYY-NNN`)
- Confirm expected completion timeline
- Use acknowledgement template (see Section 6.1)

---

## 3. Identity Verification

Before processing any DSAR, verify the requestor's identity:

### Website Data (Newsletter/Waitlist)
- Verify request comes from the same email address on file
- If different email: request proof of identity (government-issued ID with email redacted — name match only)

### iOS App Data
- iOS app data is stored entirely on-device — the user already has direct access
- For iCloud data: direct user to Apple's data management (Settings > Apple ID > iCloud > Manage Storage)
- If requesting data LumenShore cannot access: inform the data subject that the data is solely on their device

### Verification Standards
- Must be proportionate — do not request excessive documentation
- Accept: screenshot of newsletter subscription confirmation, email from the registered address
- Reject: unverifiable third-party requests without authorisation

---

## 4. Response Timelines

| Stage | Deadline | Notes |
|---|---|---|
| Acknowledgement | 72 hours | From date of receipt |
| Identity verification | 5 business days | Request additional info if needed |
| Standard completion | **30 calendar days** | From date of valid request |
| Extended completion | **90 calendar days** | Only for complex requests; must notify data subject of extension within 30 days with reasons |
| Charge | Free | Unless manifestly unfounded or excessive (GDPR Art. 12(5)) |

---

## 5. Rights and Handling Procedures

### 5.1 Right of Access (Art. 15)

**Scope**: Provide a copy of all personal data being processed.

**Website data to provide:**
- Newsletter: email address, signup date, consent record
- Waitlist: email address, language preference, referral code, signup date
- Sentry: request error logs associated with the data subject (if identifiable — unlikely)
- Vercel Analytics: no identifiable data to provide (anonymous, aggregated)
- Cookie consent: consent record (categories, timestamp, version)

**iOS app data:**
- Inform data subject that all app data is stored on their device (SwiftData)
- User can access all data directly through the app
- Data export feature available in Settings (see Story 4.3)
- iCloud data: managed by Apple — direct to Apple's data access tools

**Response**: Use Access Response Template (Section 6.2)

### 5.2 Right to Rectification (Art. 16)

**Scope**: Correct inaccurate personal data without undue delay.

**Website data:**
- Newsletter email: unsubscribe old address, subscribe new address
- Waitlist: update email or language preference in database

**iOS app data:**
- User can edit profile directly in the app (Settings > Profile)
- No server-side data to rectify

**Response**: Use Rectification Response Template (Section 6.3)

### 5.3 Right to Erasure (Art. 17)

**Scope**: Delete personal data without undue delay.

**Grounds for erasure:**
- Data no longer necessary for original purpose
- Consent withdrawn
- Data subject objects and no overriding legitimate interest
- Data unlawfully processed

**Website data to delete:**
- Newsletter: remove email from subscriber list
- Waitlist: remove email and associated data
- Sentry: request deletion from Sentry (90-day auto-deletion applies)
- Cookie consent records: delete (but note: may retain for accountability if needed)

**iOS app data:**
- Inform user: delete the app to remove all on-device data
- Or: use in-app "Reset Progress" / "Delete Account" feature
- iCloud: direct user to Apple's iCloud data management

**Exceptions (Art. 17(3)):**
- May retain consent records for compliance accountability
- May retain DSAR log entries for accountability

**Response**: Use Erasure Response Template (Section 6.4)

### 5.4 Right to Data Portability (Art. 20)

**Scope**: Provide personal data in a structured, commonly used, machine-readable format.

**Website data:**
- Export newsletter/waitlist data as JSON

**iOS app data:**
- Free JSON data export available in Settings (see Story 4.3)
- Includes: UserProfile, GameProgressRecord, LanguagePreference, FavoriteCategory, MasteredContent

**Response**: Use Portability Response Template (Section 6.5)

### 5.5 Right to Restrict Processing (Art. 18)

**Scope**: Mark data so it is stored but not actively processed.

**When applicable:**
- Accuracy contested (restrict until verified)
- Processing is unlawful but data subject prefers restriction over erasure
- Data no longer needed but data subject requires it for legal claims
- Data subject has objected (pending verification of legitimate grounds)

**Implementation:**
- Newsletter: pause email delivery without deleting the record
- Waitlist: flag record as restricted
- Analytics: already anonymous — restriction has no practical effect

**Response**: Use Restriction Response Template (Section 6.6)

### 5.6 Right to Object (Art. 21)

**Scope**: Object to processing based on legitimate interest.

**Applicable processing:**
- Vercel Analytics (legitimate interest — LIA-001)
- Sentry error monitoring (legitimate interest — LIA-002)
- UTM parameter capture (legitimate interest — LIA-003)

**Handling:**
- Assess whether compelling legitimate grounds override the objection
- For analytics: honour objection — suppress tracking for the data subject
- For error monitoring: assess case-by-case (error data is typically non-identifiable)
- Document assessment and decision

**Response**: Use Objection Response Template (Section 6.7)

---

## 6. Response Templates

### 6.1 Acknowledgement Template

> Subject: DSAR Acknowledgement — [DSAR-YYYY-NNN]
>
> Dear [Name],
>
> Thank you for your data request received on [DATE]. Your request has been assigned reference number **[DSAR-YYYY-NNN]**.
>
> We are processing your request under [GDPR Article X / UK GDPR Article X]. We aim to respond within 30 calendar days of receiving your verified request.
>
> [If identity verification needed:]
> To protect your privacy, we need to verify your identity before proceeding. Please reply to this email from the address associated with your account, or provide [specific verification needed].
>
> If you have any questions, please reply to this email.
>
> Kind regards,
> LumenShore Ltd
> hello@lumenshore.com

### 6.2 Access Response Template

> Subject: Your Data Access Request — [DSAR-YYYY-NNN]
>
> Dear [Name],
>
> Further to your data access request dated [DATE], please find below/attached the personal data we hold about you:
>
> **Website Data:**
> - Email address: [email]
> - Newsletter subscriber since: [date]
> - Consent record: [consent version, date, categories]
>
> **iOS App Data:**
> Your app data (learning progress, preferences, game history) is stored entirely on your device via Apple's SwiftData framework. You have direct access to all this data through the LumenLingo app. You can also export your data as JSON from Settings > Export Data.
>
> For iCloud-synced data, please visit Settings > Apple ID > iCloud > Manage Storage on your device.
>
> **Processing Details:**
> For information about how we process your data, including purposes and lawful bases, please see our Privacy Policy at lumenlingo.com/privacy.
>
> If you believe any data is inaccurate or wish to exercise further rights, please let us know.
>
> Kind regards,
> LumenShore Ltd

### 6.3 Rectification Response Template

> Subject: Data Rectification Completed — [DSAR-YYYY-NNN]
>
> Dear [Name],
>
> Further to your rectification request dated [DATE], we have updated the following data:
>
> - [Field]: changed from [old value] to [new value]
>
> The correction has been applied to all our systems where the data was stored.
>
> Kind regards,
> LumenShore Ltd

### 6.4 Erasure Response Template

> Subject: Data Erasure Completed — [DSAR-YYYY-NNN]
>
> Dear [Name],
>
> Further to your erasure request dated [DATE], we confirm that the following data has been deleted:
>
> - [List of data categories deleted]
>
> Please note:
> - Sentry error logs containing any associated data will be automatically purged within 90 days.
> - iOS app data is stored on your device — please delete the LumenLingo app to remove all local data.
> - We retain a record of this DSAR request for accountability purposes (GDPR Art. 5(2)).
>
> Kind regards,
> LumenShore Ltd

### 6.5 Portability Response Template

> Subject: Your Data Export — [DSAR-YYYY-NNN]
>
> Dear [Name],
>
> Further to your data portability request dated [DATE], please find attached your personal data in JSON format.
>
> **Attached:** [name]-data-export-[date].json
>
> For iOS app data, you can export directly from the app: Settings > Export Data. This provides all your learning data in machine-readable JSON format at no cost.
>
> Kind regards,
> LumenShore Ltd

### 6.6 Restriction Response Template

> Subject: Processing Restriction Applied — [DSAR-YYYY-NNN]
>
> Dear [Name],
>
> Further to your restriction request dated [DATE], we have restricted the processing of your data as follows:
>
> - [Description of restriction applied]
>
> Your data will be stored but not actively processed until the restriction is lifted. We will notify you before lifting the restriction.
>
> Kind regards,
> LumenShore Ltd

### 6.7 Objection Response Template

> Subject: Your Objection to Processing — [DSAR-YYYY-NNN]
>
> Dear [Name],
>
> Further to your objection to processing dated [DATE], we have assessed your request:
>
> [OPTION A — Objection upheld:]
> We have ceased the processing you objected to. Specifically:
> - [Description of processing stopped]
>
> [OPTION B — Objection not upheld:]
> After careful assessment, we have determined that our compelling legitimate grounds for this processing override the impact on your rights. Our reasons are:
> - [Justification with reference to LIA]
>
> You have the right to lodge a complaint with the ICO (ico.org.uk) if you disagree with this decision.
>
> Kind regards,
> LumenShore Ltd

### 6.8 Extension Notice Template

> Subject: Update on Your Data Request — [DSAR-YYYY-NNN]
>
> Dear [Name],
>
> We are writing to update you on your data request dated [DATE].
>
> Due to the complexity of your request, we require additional time to respond fully. Under GDPR Article 12(3), we are extending the response period by [X] days. We now expect to complete your request by [NEW DATE].
>
> The reason for the extension is: [brief explanation].
>
> We apologise for the delay and will respond as soon as possible.
>
> Kind regards,
> LumenShore Ltd

### 6.9 Refusal Template

> Subject: Regarding Your Data Request — [DSAR-YYYY-NNN]
>
> Dear [Name],
>
> We have reviewed your data request dated [DATE]. Unfortunately, we are unable to fulfil this request for the following reason:
>
> - [Reason: e.g., unable to verify identity / request is manifestly unfounded or excessive / exemption applies under Art. 17(3)]
>
> You have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk/make-a-complaint if you disagree with this decision.
>
> Kind regards,
> LumenShore Ltd

---

## 7. Record-Keeping

All DSARs are logged in `compliance/DSAR-Log.md` with the following fields:
- Reference number
- Date received
- Requestor (name/email — redacted after completion + retention period)
- Request type (access, rectification, erasure, portability, restriction, objection)
- Channel (email / web form)
- Identity verified (yes/no/date)
- Date acknowledged
- Date completed
- Outcome (fulfilled / partially fulfilled / refused / extended)
- Notes

DSAR logs are retained for **3 years** after completion for accountability purposes.

---

*This document is an internal compliance artefact. It is not published externally but must be available for ICO or supervisory authority inspection upon request.*
