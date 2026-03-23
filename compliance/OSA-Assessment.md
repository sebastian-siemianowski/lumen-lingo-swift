# Online Safety Act 2023 — Compliance Assessment

**Company**: LumenShore Ltd
**Service**: LumenLingo (lumenlingo.com + iOS application)
**Assessment Date**: 23 March 2026
**Prepared by**: LumenShore Compliance Team
**Legislation**: Online Safety Act 2023 (c.50)
**Regulator**: Ofcom (Office of Communications)

---

## 1. Scope Assessment — Does the OSA Apply to LumenLingo? (Story 6.5.1)

### OSA Regulated Service Categories

The Online Safety Act 2023 regulates two categories of service:

1. **User-to-user services** (Part 3): Services that allow users to encounter content generated, uploaded, or shared by other users. Examples: social media, forums, messaging platforms, video sharing.
2. **Search services** (Part 3): Services that include search engine functionality enabling users to search multiple websites/databases.

### LumenLingo Current State Assessment

| Feature | Present? | OSA Relevance |
|---|---|---|
| User-generated content (UGC) | ❌ No | Not a user-to-user service |
| User comments | ❌ No | No user interaction |
| Forums / community boards | ❌ No | No user-to-user communication |
| Messaging between users | ❌ No | No private communication |
| Shared decks / user profiles | ❌ No | No public user content |
| Search engine functionality | ❌ No | Not a search service |
| Blog content | ✅ Yes (publisher only) | Published by LumenShore — not user content |
| Flashcard content | ✅ Yes (publisher only) | Curated by LumenShore — not user content |
| Third-party advertising | ❌ No | No ad-supported model |

### Conclusion

**LumenLingo is currently OUT OF SCOPE** for the Online Safety Act 2023 regulated service duties.

LumenLingo is a **content-publisher service** — all content (flashcards, blog posts, legal pages) is authored and published by LumenShore Ltd. There is no mechanism for users to generate, upload, share, or encounter other users' content. It does not operate a search engine.

The OSA's Part 3 duties (illegal content duty, children's safety duty, user empowerment duty, content reporting, complaints procedures) **do not currently apply**.

---

## 2. Blog Comment Risk — Future UGC Triggers (Story 6.5.2)

### Risk: Enabling Blog Comments

If blog comments are enabled on lumenlingo.com in the future, LumenLingo would become a **user-to-user service** under OSA Sections 3–4, triggering:

| Duty | OSA Section | Requirement |
|---|---|---|
| Illegal content risk assessment | s.9 | Assess risk of illegal content appearing in comments |
| Illegal content duty | s.10 | Systems to prevent/minimise illegal content, expeditious removal |
| Children's risk assessment | s.11 | Assess risk to children from comments |
| Children's safety duty | s.12 | Age-appropriate protections if children likely access service |
| User reporting mechanisms | s.20 | Allow users to report harmful comments |
| Complaints procedure | s.21 | Internal complaints procedure for content decisions |
| Record-keeping | s.23 | Maintain records of reports and actions taken |
| Terms of service | s.17 | Clear, accessible terms covering content policies |

### Category Classification

If UGC is enabled, LumenLingo would likely qualify as a **Category 2B service** (smaller user-to-user service) based on:
- Low user numbers relative to Category 1 thresholds (set by Ofcom)
- Limited UGC surface area (comments only, not a social platform)

**Category 2B duties**: Transparency reporting, complaints procedure, terms of service duties.

### Recommendation

**Do not enable blog comments** without a prior legal impact assessment covering all OSA duties above. If comments are desired, consider read-only testimonials (curated by LumenShore, not UGC) as an alternative that avoids OSA scope.

---

## 3. Children's Safety Duties (Story 6.5.3)

### OSA Children's Provisions

The OSA imposes **enhanced duties** for services "likely to be accessed by children" (persons under 18). Under s.37, Ofcom may designate services as "likely to be accessed by children" based on the nature of the service, its audience, and design.

### LumenLingo Assessment

| Factor | Assessment |
|---|---|
| Nature of service | Language learning — educational, suitable for all ages |
| Likely child users | **Yes** — language learning apps are commonly used by school-aged children (13–17) |
| Minimum age requirement | None currently stated in Terms of Service |
| Age verification | None currently implemented |
| User interaction | ❌ None — no UGC, messaging, or user-to-user features |

### Current Risk Level: LOW

Because LumenLingo has **no user-to-user features**, the OSA children's safety duties under Part 3 **do not currently apply**. Children cannot encounter other users' content or be contacted by other users on the platform.

### Future Risk: HIGH (if social features added)

If ANY of the following are added, the children's safety duties would be triggered:
- User comments, forums, or community features
- Messaging or chat between users
- Shared decks visible to other users
- Public user profiles or leaderboards showing user content
- Any feature where one user can encounter another user's content

**Required actions if triggered**:
1. **Children's risk assessment** (s.11): Assess risks to children from user content
2. **Children's safety duty** (s.12): Age-appropriate design, content moderation, age assurance
3. **Age verification/estimation**: Ofcom codes may require age assurance mechanisms
4. **Cross-reference**: UK Children's Code (ICO Age Appropriate Design Code) — already planned in Story 19.2.4

---

## 4. Fraudulent Advertising Duty (Story 6.5.4)

### OSA Advertising Provisions

The OSA (s.71–73) requires certain regulated services to take measures against **paid-for fraudulent advertising** appearing on their platform.

### LumenLingo Assessment

| Factor | Assessment |
|---|---|
| Third-party advertising | ❌ Not present — no ad-supported model |
| Paid promotional content | ❌ Not present — LumenLingo does not sell ad space |
| Revenue model | Subscription-based (freemium + paid tiers via Apple IAP) |

### Conclusion

The fraudulent advertising duty **does not apply** to LumenLingo. The service does not host, display, or sell third-party advertising. All promotional content on the website relates exclusively to LumenLingo's own products and services.

**Future note**: If LumenLingo ever introduces third-party advertising, affiliate promotions, or sponsored content, this assessment must be revisited.

---

## 5. Compliance Posture & Trigger Document (Story 6.5.5)

### Current Compliance Posture

**Status**: OUT OF SCOPE — No OSA regulated service duties currently apply.

**Rationale**: LumenLingo is a content-publisher service with no user-generated content, no search functionality, and no third-party advertising.

### Feature Trigger Matrix

The following table documents features that, if implemented, would bring LumenLingo into scope of specific OSA duties:

| Feature | OSA Trigger | Duties Activated | Required Actions Before Launch |
|---|---|---|---|
| Blog comments | User-to-user service (s.3) | Illegal content duty, reporting, complaints, record-keeping | Risk assessment, content moderation system, complaints procedure, Terms update |
| User forums / community | User-to-user service (s.3) | Full Part 3 duties + children's safety | Full compliance programme, age assurance, moderation team |
| Messaging / chat | User-to-user service (s.3) | Full Part 3 duties + children's safety + private messaging duties | End-to-end safety assessment, reporting mechanisms, abuse prevention |
| Shared decks (public) | User-to-user service (s.3) | Content duties, reporting | Content moderation, reporting mechanism |
| Public user profiles | User-to-user service (s.3) | Content duties, children's safety | Profile moderation, age-appropriate defaults |
| Leaderboards with user content | User-to-user service (s.3) | Content duties | Profanity filtering, moderation |
| Third-party ads | Advertising duties (s.71) | Fraudulent advertising measures | Ad verification, fraud detection |
| Search engine feature | Search service (s.4) | Search duty (illegal content in results) | Content filtering, safe search |

### Process for Feature Assessment

Before launching any feature from the trigger matrix above:

1. **Legal Impact Assessment**: Review feature against this trigger document
2. **OSA Compliance Gap Analysis**: Identify which duties are activated
3. **Implementation Plan**: Build required compliance controls (moderation, reporting, age assurance)
4. **Legal Review**: External legal counsel sign-off
5. **Ofcom Check**: Verify against latest Ofcom codes of practice
6. **Cross-reference**: Story 15.3 (Feature Legal Impact Assessment Template)

---

## 6. Ofcom Codes of Practice Monitoring (Story 6.5.6)

### Ofcom's OSA Implementation Timeline

Ofcom is publishing binding codes of practice under the OSA on a rolling schedule:

| Code | Published | Status (as of March 2026) |
|---|---|---|
| Illegal Content Codes (Phase 1) | Late 2024 | Published — reviewed, N/A (LumenLingo out of scope) |
| Children's Safety Codes (Phase 2) | 2025 | Published — reviewed, N/A (no user-to-user features) |
| Transparency & Reporting (Phase 3) | 2025–2026 | Partially published — monitoring |
| Pornography & Age Verification | 2025–2026 | N/A (LumenLingo has no adult content) |

### Monitoring Plan

| Action | Frequency | Responsible |
|---|---|---|
| Check Ofcom OSA publications page | Quarterly | LumenShore Compliance Team |
| Review new/updated codes of practice | On publication | LumenShore Compliance Team |
| Re-assess LumenLingo scope if codes expand | On code publication | LumenShore Compliance Team |
| Re-assess if LumenLingo adds UGC features | Before feature launch | Development + Compliance |

### Ofcom Resources

- Ofcom OSA hub: https://www.ofcom.org.uk/online-safety/
- OSA codes of practice register: Published on Ofcom website
- Ofcom enforcement guidance: Available on Ofcom website

**Note**: If any future Ofcom code applies to LumenLingo's feature set (e.g., due to scope expansion or new UGC features), compliance stories will be created immediately in the product backlog.

---

## Document History

| Date | Version | Changes |
|---|---|---|
| 23 March 2026 | 1.0 | Initial assessment — scope, triggers, children's safety, advertising, monitoring plan |
