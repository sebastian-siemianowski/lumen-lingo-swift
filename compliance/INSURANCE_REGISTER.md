# Insurance & Legal Protection — Assessment & Register

> **Company**: LumenShore Limited (Company No. 09607326)
> **Last Reviewed**: March 2026
> **Next Review**: March 2027

---

## 1. Insurance Needs Assessment (14.3.1)

### Recommended Coverage

| Type | Purpose | Priority | Status |
|------|---------|----------|--------|
| **Professional Indemnity** | Covers service errors, negligence claims, advice liability | High | To obtain |
| **Cyber Liability** | Covers data breach costs, notification, regulatory fines, legal defence | Critical | To obtain |
| **Product Liability** | May apply to digital products; covers defective product claims | Medium | Assess with insurer |
| **Directors & Officers (D&O)** | Personal liability protection for company directors | High | To obtain |

### Risk Profile

- **Data processed**: Minimal PII (email via iCloud, learning progress via SwiftData on-device)
- **Revenue model**: iOS IAP subscriptions via Apple
- **User base**: Global (UK, EU, US, Japan, China, Middle East, Brazil, Ukraine, Poland)
- **Third-party dependencies**: Apple (App Store, iCloud), Vercel (hosting), Sentry (error monitoring)
- **No server-side database**: No direct user database — Apple handles authentication and payments

---

## 2. Cyber Liability Insurance (14.3.2)

### Required Coverage Areas

1. **Data breach response costs**
   - Forensic investigation
   - User notification costs (GDPR Art. 34, CCPA §1798.150)
   - Credit monitoring (if applicable)

2. **Regulatory fines** (where insurable)
   - ICO fines (up to £17.5M or 4% global turnover)
   - CNIL, BfDI, and other EU DPA fines
   - US state AG enforcement actions

3. **Legal defence**
   - Regulatory investigations
   - Class action / collective proceedings defence
   - Individual claims

4. **Business interruption**
   - Loss of revenue during service outage
   - Third-party outage causing service disruption

### Recommended Providers (UK Market)

- Hiscox Cyber Insurance
- CFC Underwriting
- Beazley (TMB / CyberCrime)
- Aviva Cyber Protection

---

## 3. Coverage Documentation (14.3.3)

| Policy | Provider | Policy Number | Coverage Amount | Start Date | Renewal Date |
|--------|----------|---------------|-----------------|------------|--------------|
| Cyber Liability | *TBD* | *TBD* | *TBD* | *TBD* | *TBD* |
| Professional Indemnity | *TBD* | *TBD* | *TBD* | *TBD* | *TBD* |
| D&O Liability | *TBD* | *TBD* | *TBD* | *TBD* | *TBD* |

> **Action**: Complete this table when policies are purchased.

---

## 4. Annual Review Schedule (14.3.4)

### Review Checklist (Every March)

- [ ] Review coverage amounts against current revenue and user base
- [ ] Check if new features or services require additional coverage
- [ ] Review any claims made in the past year
- [ ] Assess new regulatory risks (new privacy laws, enforcement actions)
- [ ] Compare market rates and consider switching providers
- [ ] Update this document with current policy details
- [ ] Verify all premiums are paid and policies are active

### Review History

| Date | Reviewer | Findings | Actions Taken |
|------|----------|----------|---------------|
| March 2026 | Initial assessment | Needs assessment completed | Obtain quotes |

---

## Notes

- Apple handles all payment processing and refunds for iOS IAP — reduces PCI-DSS and payment fraud exposure
- On-device data storage (SwiftData) reduces cloud breach risk significantly
- Website (Vercel) collects minimal data (newsletter emails, cookies) — lower cyber risk profile
- Consider bundled policies (Cyber + PI + D&O) for cost efficiency
