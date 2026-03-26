# Sub-Processor DPA Register

**Controller**: LumenShore Limited, Company #09607326, Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, England, LE4 9HA

**DPO Contact**: privacy@lumenshore.com

**Last Updated**: 2025-03-23

---

## 1. Active Sub-Processor Inventory

| # | Sub-Processor | Service | Data Processed | Processing Location | DPA Status | DPA Version / Date | Review Date |
|---|--------------|---------|---------------|---------------------|------------|-------------------|-------------|
| 1 | **Vercel Inc.** | Website hosting, Edge Network, Speed Insights | Anonymous page views, error data, server logs (IP addresses in transit) | US (primary), EU edge nodes | Standard DPA accepted | [vercel.com/legal/dpa](https://vercel.com/legal/dpa) — accept on dashboard | 2026-03-23 |
| 2 | **Sentry (Functional Software Inc.)** | Error monitoring, performance monitoring | Error stack traces, device metadata, browser info, anonymised session data | US (primary), EU available | Standard DPA accepted | [sentry.io/legal/dpa](https://sentry.io/legal/dpa) — accept on dashboard | 2026-03-23 |
| 3 | **Apple Inc.** | App Store, iCloud KVS sync, CloudKit | Purchase data (Apple-managed), iCloud key-value pairs, Apple ID (hashed) | US, Ireland, global CDN | Apple DPLA provisions | Apple Developer Program License Agreement (DPLA) §3.3.42+ | 2026-03-23 |

### Notes on Apple's Dual Role

Apple operates in two capacities:

1. **Data Processor** — For iCloud/CloudKit data: Apple processes data on LumenShore's behalf under the DPLA. Data is encrypted at rest and in transit. Apple does not access user content stored in iCloud KVS/CloudKit.

2. **Independent Data Controller** — For App Store purchase data: Apple collects and processes purchase data, Apple ID, and payment information under its own privacy policy ([apple.com/legal/privacy](https://www.apple.com/legal/privacy/)). Apple does not execute custom DPAs for this data — they act as an independent controller.

Apple's standard agreements contain GDPR-equivalent data protection provisions including:
- Data minimisation and purpose limitation
- Security measures (encryption, access controls)
- Data subject rights cooperation
- Sub-processor restrictions
- International transfer mechanisms (SCCs incorporated by reference)

---

## 2. DPA Execution Checklist

For each sub-processor, verify the following before or upon DPA execution:

- [ ] DPA covers all categories of personal data processed
- [ ] Data processing locations are documented
- [ ] Sub-processor list is available and includes change notification mechanism
- [ ] Security measures are documented (encryption, access controls, certifications)
- [ ] Data retention and deletion obligations are clear
- [ ] Standard Contractual Clauses (SCCs) or UK International Data Transfer Addendum are included for international transfers
- [ ] Data subject rights cooperation procedures are defined
- [ ] Breach notification timeframes are specified (should be ≤ 48 hours)
- [ ] Audit rights are included (even if limited to certification reports)
- [ ] Executed copy stored internally

---

## 3. Sub-Processor Change Management Process

When a sub-processor notifies LumenShore of changes (new sub-sub-processors, processing location changes, material terms updates):

### 3.1 Assessment

1. **Review notification** — Read the change notice within 5 business days
2. **Impact assessment** — Determine if the change affects:
   - Categories of data processed
   - Geographic location of processing
   - Security posture
   - Data subject rights
3. **ROPA update** — Update Record of Processing Activities if data flows change
4. **Privacy Policy update** — Update sub-processor table in the Privacy Policy if user-facing changes

### 3.2 Objection Window

Most DPAs (Vercel, Sentry) provide a 30-day objection window. If a change is unacceptable:

1. Document the objection in writing to the sub-processor
2. Explore alternative configurations (e.g., EU-only processing)
3. If unresolvable, plan migration to alternative provider within the notice period

### 3.3 Documentation

All change assessments are logged in Section 5 (Change Log) below.

---

## 4. Future Vendor Onboarding Checklist

Before engaging any new service that processes personal data:

- [ ] **DPA execution** — Execute DPA BEFORE sharing any personal data
- [ ] **GDPR compliance** — Verify the vendor claims GDPR compliance
- [ ] **Security certifications** — Check for SOC 2 Type II, ISO 27001, or equivalent
- [ ] **Processing locations** — Confirm data processing locations and transfer mechanisms
- [ ] **Data minimisation** — Confirm only necessary data categories are processed
- [ ] **Breach notification** — Confirm ≤ 48-hour breach notification to LumenShore
- [ ] **Sub-processor transparency** — Confirm sub-processor list is published and change notification is provided
- [ ] **Exit plan** — Confirm data return/deletion procedures on contract termination
- [ ] **Add to this register** — Update the inventory table above
- [ ] **Update Privacy Policy** — Add to the sub-processor disclosure

### Planned Future Sub-Processors

| Sub-Processor | Service | Status | DPA Required Before |
|--------------|---------|--------|-------------------|
| ESP (e.g., Resend, SendGrid) | Email delivery | Not yet engaged | First marketing email send |
| Payment processor (if non-IAP) | Payment processing | Not yet engaged | First non-IAP transaction |

---

## 5. Change Log

| Date | Sub-Processor | Change Description | Assessment | Action Taken |
|------|--------------|-------------------|------------|-------------|
| 2025-03-23 | — | Initial DPA register created | — | Register established |

---

## 6. Annual Review Schedule

| Sub-Processor | Next Review | Reviewer |
|--------------|-------------|----------|
| Vercel | 2026-03-23 | DPO / Legal |
| Sentry | 2026-03-23 | DPO / Legal |
| Apple | 2026-03-23 | DPO / Legal |

Annual review should verify:
1. DPA terms have not changed materially
2. Sub-processor lists are current
3. Processing locations remain accurate
4. Security certifications remain valid
5. No new data categories have been added without DPA coverage
