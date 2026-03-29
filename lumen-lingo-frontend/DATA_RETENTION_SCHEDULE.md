# LumenShore Ltd — Data Retention Schedule

**Document Owner**: LumenShore Ltd (Company No. 09607326)
**Last Updated**: 2025-01-01
**Review Frequency**: Annual (next review: 2026-01-01)
**Legal Basis**: GDPR Article 5(1)(e) — Storage Limitation

---

## 1. Website Data

| Data Category | Retention Period | Deletion Method | Legal Basis |
|---|---|---|---|
| Newsletter emails | Until unsubscribe + 30 days | Automated via ESP | Consent (Art. 6(1)(a)) |
| Waitlist emails | 1 year from signup or product launch + 30 days | Automated purge (in-memory) / manual DB purge when backend added | Consent (Art. 6(1)(a)) |
| Sentry error logs | 90 days (Sentry default) | Automated by Sentry | Legitimate interest (Art. 6(1)(f)) |
| Sentry session replays | 90 days (Sentry default) | Automated by Sentry | Consent (Art. 6(1)(a)) |
| Vercel Analytics | Per Vercel retention policy | Automated by Vercel | Legitimate interest (Art. 6(1)(f)) |
| Cookie consent records | 3 years after last interaction | Manual review / automated when DB added | Accountability (Art. 5(2)) |
| Newsletter consent records | 3 years after last interaction | Manual review / automated when DB added | Accountability (Art. 5(2)) |
| Waitlist consent records | 3 years after last interaction | Manual review / automated when DB added | Accountability (Art. 5(2)) |
| DSAR request logs | 3 years after completion | Manual review | Accountability (Art. 5(2)) |

## 2. iOS App Data

| Data Category | Retention Period | Deletion Method | Legal Basis |
|---|---|---|---|
| Learning progress (SwiftData) | Until user deletes account or uninstalls app | In-app "Delete Account" / app uninstall | Contract (Art. 6(1)(b)) |
| User preferences (SwiftData) | Until user deletes account or uninstalls app | In-app "Delete Account" / app uninstall | Contract (Art. 6(1)(b)) |
| Game progress records | Until user deletes account or uninstalls app | In-app "Delete Account" / app uninstall | Contract (Art. 6(1)(b)) |
| Favourite categories | Until user deletes account or uninstalls app | In-app "Delete Account" / app uninstall | Contract (Art. 6(1)(b)) |
| Mastered content | Until user deletes account or uninstalls app | In-app "Delete Account" / app uninstall | Contract (Art. 6(1)(b)) |
| iCloud sync data (KVS) | Until user deletes from iCloud or deletes account | Apple iCloud settings / in-app "Delete Account" | Contract (Art. 6(1)(b)) |

## 3. Legal Consent Records (iOS)

| Data Category | Retention Period | Deletion Method | Legal Basis |
|---|---|---|---|
| Legal consent version (UserProfile) | Until user deletes account | In-app "Delete Account" | Accountability (Art. 5(2)) |

## 4. Third-Party Sub-Processors

| Sub-Processor | Data Processed | Their Retention | Our Responsibility |
|---|---|---|---|
| Sentry (Functional Software Inc.) | Error logs, session replays | 90 days | Configured via Sentry dashboard |
| Vercel Inc. | Aggregated analytics (no PII) | Per Vercel policy | No PII — minimal risk |
| Apple (iCloud) | Sync data (encrypted) | Until user deletes | Apple-managed E2E encryption |

## 5. Automated Deletion Mechanisms

- **Waitlist purge**: In-memory store automatically purges entries older than 365 days (implemented in `api/waitlist/route.ts`)
- **Newsletter rate-limit buckets**: Cleaned every 5 minutes (implemented in `api/newsletter/route.ts`)
- **Cookie consent expiry**: Client-side localStorage auto-expires after 13 months (implemented in `lib/cookie-consent.ts`)
- **Sentry retention**: Configured at 90 days via Sentry project settings

## 6. Annual Review Checklist

- [ ] Review all retention periods for continued necessity
- [ ] Verify automated deletion mechanisms are functioning
- [ ] Check sub-processor retention policies for changes
- [ ] Update this document with any new data categories
- [ ] Cross-reference DPIA (Story 4.6) for new processing activities
- [ ] Sign-off by data controller

---

*This document is an internal compliance artefact and should be stored securely. Not for public distribution.*
