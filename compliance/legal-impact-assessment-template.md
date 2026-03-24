# Feature-Level Legal Impact Assessment Template

**Version**: 1.0  
**Created**: March 2026  
**Owner**: Lumenshore Limited

---

## Instructions

Complete this assessment **before merging** any new feature that interacts with user data, third-party services, payment flows, or content delivery. File the completed assessment in `compliance/assessments/` with the format: `LIA-YYYY-MM-feature-name.md`.

---

## Feature Details

| Field | Value |
|-------|-------|
| Feature Name | |
| Author | |
| Date | |
| Target Release | |
| PR / Branch | |

---

## Legal Impact Questions

### 1. Personal Data

- [ ] Does this feature collect new personal data?
  - If yes, describe what data and why:
- [ ] Does this feature change how existing personal data is processed?
  - If yes, describe the change:
- [ ] Does this feature store data in a new location (server, cloud, third-party)?
  - If yes, specify where:

### 2. Third-Party Services

- [ ] Does this feature share data with a new third party?
  - If yes, name the third party and describe the data shared:
- [ ] Does a new Data Processing Agreement (DPA) need to be executed?
- [ ] Is the third party located outside the UK/EEA? If so, what transfer mechanism applies?

### 3. Children & Vulnerable Users

- [ ] Does this feature specifically target or attract children (under 13 / under 16)?
- [ ] Does this feature comply with the UK Age Appropriate Design Code?
- [ ] Does this feature comply with COPPA (Children's Online Privacy Protection Act)?

### 4. Automated Decision-Making

- [ ] Does this feature involve automated decision-making or profiling?
  - If yes, describe the algorithm and its impact on users:
- [ ] Is the decision-making transparent to users?
- [ ] Can users opt out or request human review?

### 5. Subscription & Payment

- [ ] Does this feature affect subscription terms, pricing, or billing?
- [ ] Does this feature introduce new in-app purchases?
- [ ] Are App Store / auto-renewal disclosures still accurate?

### 6. Legal Document Updates Required

- [ ] Does this feature require a **Privacy Policy** update?
  - If yes, describe the change needed:
- [ ] Does this feature require a **Terms of Service** update?
  - If yes, describe the change needed:
- [ ] Does this feature require a **Cookie Policy** update?
  - If yes, describe the change needed:

### 7. Data Protection Impact Assessment (DPIA)

- [ ] Is a DPIA required? (Required when processing is likely to result in high risk to individuals)
  - Large-scale processing of sensitive data
  - Systematic monitoring of public areas
  - Automated decision-making with legal effects
  - New technology processing
- [ ] If DPIA required, has it been completed?

### 8. Content & IP

- [ ] Does this feature introduce user-generated content (UGC)?
  - If yes, DSA notice-and-action obligations apply
- [ ] Does this feature use third-party content (images, audio, text)?
  - If yes, confirm licensing is in place
- [ ] Does this feature involve AI-generated content?
  - If yes, EU AI Act transparency obligations may apply

---

## Assessment Outcome

| Outcome | Details |
|---------|---------|
| Legal docs need update? | Yes / No |
| DPIA required? | Yes / No |
| New DPA required? | Yes / No |
| Blocked until resolved? | Yes / No |
| Approved by | |
| Approval date | |

---

## Notes

<!-- Additional context, risks, or follow-up actions -->

---

*This template is part of Lumenshore's ongoing compliance programme (Epic 15, Story 15.3).*
