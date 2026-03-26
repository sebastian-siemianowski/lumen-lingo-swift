# Legals2.md — Legal Section Placement Audit & Reorganisation

> **Objective**: Audit every section across all legal policies (Privacy Policy, Terms of Service, EULA, Cookie Policy) and ensure each section lives in the correct policy document. No content is deleted — sections are moved to where they legally and structurally belong.
>
> **Governance**: Lumenshore Limited, Company No. 09607326 (England and Wales)
> **Governing Law**: England and Wales
> **Date**: 26 March 2026

---

## Current Policy Inventory

| Policy | Route | Namespace | Sections | Version |
|--------|-------|-----------|----------|---------|
| Privacy Policy | `/privacy` | `Privacy` | ~51 | v2.0 |
| Terms of Service | `/terms` | `Terms` | ~60+ | v1.0 |
| EULA | `/eula` | `Eula` | ~18 | v1.0 |
| Cookie Policy | `/cookies` | `CookiePage` | ~11 | v1.0 |
| Accessibility Statement | `/accessibility` | `Accessibility` | ~13 | v1.0 |
| Data Request Portal | `/data-request` | `DataRequest` | ~6 | v1.0 |
| Impressum | `/impressum` | `Impressum` | ~8 | v1.0 |
| Mentions Legales | `/mentions-legales` | `MentionsLegales` | ~5 | v1.0 |

---

## Executive Summary

The Privacy Policy has grown to ~51 sections and contains material that does not relate to the processing of personal data. Specifically, **VAT/tax compliance, pricing display rules, sanctions/trade controls, and encryption export controls** are regulatory compliance disclosures that belong in the Terms of Service (commercial terms) or a dedicated Compliance/Regulatory page.

The Terms of Service is well-structured but has a **duplicate Governing Law TOC entry** (bug).

The EULA and Cookie Policy are correctly scoped.

**Trademark attribution** appears in all four policies. This is harmless duplication but could be consolidated.

---

# Epic 1: Move Tax & Commercial Compliance Sections from Privacy to Terms

> **Rationale**: VAT treatment, pricing display rules, international tax obligations, and tax records are commercial/regulatory disclosures, not data processing disclosures. They describe how prices are calculated and displayed, not how personal data is collected or used. The ICO, CNIL, and EDPB all define a Privacy Policy's scope as explaining how personal data is processed. Tax disclosures belong in Terms of Service (the commercial contract) where subscription pricing is already detailed.

## Story 1.1: Move "VAT & Tax Treatment" to Terms of Service -- COMPLETED

**As a** user reading the Privacy Policy,
**I want** the policy to focus exclusively on how my personal data is handled,
**So that** I can understand my data rights without wading through unrelated tax disclosures.

### Acceptance Criteria

- [x] The `vatCompliance` section (heading, intro, iapHeading, iapP1, iapP2, directHeading, directP1, directP2, recordsHeading, recordsP1, disclaimerAppStore) is moved from the `Privacy` namespace to the `Terms` namespace in all 9 locale files (en, pl, de, es, fr, ja, zh, ar, uk)
- [x] The section is inserted in Terms after the `subscriptions` section (contextually adjacent to billing/pricing)
- [x] The Privacy Policy page (`privacy/page.tsx`) no longer renders the `vatCompliance` section
- [x] The Terms of Service page (`terms/page.tsx`) renders the `vatCompliance` section with a TOC entry
- [x] No text content is altered — only its location changes
- [ ] The Privacy Policy version is bumped to v2.1 (deferred to Story 7.1)
- [ ] The Terms of Service version is bumped to v1.1 (deferred to Story 7.1)

### Tasks

- [x] Move `Privacy.vatCompliance.*` keys to `Terms.vatCompliance.*` in all 9 `messages/*.json` files
- [x] Remove the `vatCompliance` section render block from `privacy/page.tsx`
- [x] Remove the `vatCompliance` TOC entry from `privacy/page.tsx`
- [x] Add the `vatCompliance` section render block to `terms/page.tsx` (after Subscriptions & Billing)
- [x] Add the `vatCompliance` TOC entry to `terms/page.tsx`
- [ ] Update version strings in both policies (deferred to Story 7.1)

> **Completed**: 26 March 2026.

---

## Story 1.2: Move "EU VAT on Digital Services" to Terms of Service -- COMPLETED

**As a** EU consumer,
**I want** VAT explanations alongside the pricing and billing terms I'm agreeing to,
**So that** I understand the full commercial terms in one place.

### Acceptance Criteria

- [x] The `euVatCompliance` section (heading, intro, appleMarketplaceHeading, appleMarketplaceP1, appleMarketplaceP2, ossHeading, ossP1, ossP2, b2bHeading, b2bP1, evidenceHeading, evidenceP1) is moved from `Privacy` to `Terms` in all 9 locale files
- [x] Placed adjacent to `vatCompliance` in Terms (grouped together as a "Tax & VAT" super-section)
- [x] Privacy page no longer renders this section
- [x] Terms page renders this section with TOC entry
- [x] No text content is altered

### Tasks

- [x] Move `Privacy.euVatCompliance.*` keys to `Terms.euVatCompliance.*` in all 9 locale files
- [x] Remove section + TOC entry from `privacy/page.tsx`
- [x] Add section + TOC entry to `terms/page.tsx`

> **Completed**: 26 March 2026.

---

## Story 1.3: Move "International Tax Obligations" to Terms of Service -- COMPLETED

**As a** user in Japan, the US, Australia, or India,
**I want** to find tax information in the commercial terms document,
**So that** the Privacy Policy remains focused on data protection.

### Acceptance Criteria

- [ ] The `internationalTax` section (heading, intro, japanHeading, japanP1, usHeading, usP1, australiaHeading, australiaP1, indiaHeading, indiaP1, oecdHeading, oecdP1, corporationTaxHeading, corporationTaxP1, transferPricingHeading, transferPricingP1) is moved from `Privacy` to `Terms` in all 9 locale files
- [x] Placed after `euVatCompliance` in Terms (completing the tax grouping)
- [x] Privacy page no longer renders this section
- [x] Terms page renders this section with TOC entry
- [x] No text content is altered

### Tasks

- [x] Move `Privacy.internationalTax.*` keys to `Terms.internationalTax.*` in all 9 locale files
- [x] Remove section + TOC entry from `privacy/page.tsx`
- [x] Add section + TOC entry to `terms/page.tsx`

> **Completed**: 26 March 2026.

---

## Story 1.4: Move "Pricing Display Compliance" to Terms of Service -- COMPLETED

**As a** consumer,
**I want** pricing display rules (UK Price Marking Order, EU Omnibus Directive) in the document that governs the commercial transaction,
**So that** I can review all pricing obligations in one place.

### Acceptance Criteria

- [x] The `pricingCompliance` section (heading, intro, ukPriceMarkingHeading, ukPriceMarkingP1, euConsumerRightsHeading, euConsumerRightsP1, euOmnibusHeading, euOmnibusP1, iosAppPricingHeading, iosAppPricingP1, websitePricingHeading, websitePricingP1) is moved from `Privacy` to `Terms` in all 9 locale files
- [x] Placed after `internationalTax` in Terms
- [x] Privacy page no longer renders this section
- [x] Terms page renders this section with TOC entry
- [x] No text content is altered

### Tasks

- [x] Move `Privacy.pricingCompliance.*` keys to `Terms.pricingCompliance.*` in all 9 locale files
- [x] Remove section + TOC entry from `privacy/page.tsx`
- [x] Add section + TOC entry to `terms/page.tsx`

> **Completed**: 26 March 2026.

---

# Epic 2: Move Regulatory/Trade Compliance Sections from Privacy to Terms

> **Rationale**: Sanctions compliance and encryption export controls are trade law and regulatory disclosures. They explain which jurisdictions can access the service and what encryption technologies are used. These are service availability and licensing matters — not personal data processing disclosures. They belong with the Geographic Restrictions and Acceptable Use sections already in Terms.

## Story 2.1: Move "Sanctions & Trade Compliance" to Terms of Service -- COMPLETED

**As a** user,
**I want** sanctions and trade restrictions in the Terms of Service alongside geographic restrictions,
**So that** I understand service availability limitations as part of the agreement I'm accepting.

### Acceptance Criteria

- [x] The `sanctionsCompliance` section (heading, intro, ukHeading, ukP1, usHeading, usP1, euHeading, euP1, ukraineHeading, ukraineP1, screeningHeading, screeningP1) is moved from `Privacy` to `Terms` in all 9 locale files
- [x] Placed after the existing `geographicRestrictions` section in Terms (logically adjacent)
- [x] Privacy page no longer renders this section
- [x] Terms page renders this section with TOC entry
- [x] No text content is altered

### Tasks

- [x] Move `Privacy.sanctionsCompliance.*` keys to `Terms.sanctionsCompliance.*` in all 9 locale files
- [x] Remove section + TOC entry from `privacy/page.tsx`
- [x] Add section + TOC entry to `terms/page.tsx`

> **Completed**: 26 March 2026.

---

## Story 2.2: Move "Encryption & Export Controls" to Terms of Service -- COMPLETED

**As a** user,
**I want** encryption and export control disclosures in the Terms of Service,
**So that** they sit alongside the licensing and distribution terms they relate to.

### Acceptance Criteria

- [x] The `encryptionExport` section (heading, intro, auditHeading, auditP1, auditLi1-4, earHeading, earP1, frenchHeading, frenchP1, appStoreHeading, appStoreP1) is moved from `Privacy` to `Terms` in all 9 locale files
- [x] Placed after `sanctionsCompliance` in Terms
- [x] Privacy page no longer renders this section
- [x] Terms page renders this section with TOC entry
- [x] No text content is altered

### Tasks

- [x] Move `Privacy.encryptionExport.*` keys to `Terms.encryptionExport.*` in all 9 locale files
- [x] Remove section + TOC entry from `privacy/page.tsx`
- [x] Add section + TOC entry to `terms/page.tsx`

> **Completed**: 26 March 2026.

---

# Epic 3: Deduplicate and Consolidate Cross-Policy Sections

> **Rationale**: Several sections appear in multiple policies with identical or near-identical content. While some duplication is legally necessary (e.g., Apple terms in both Terms and EULA per Apple's guidelines), other duplication creates maintenance burden and inconsistency risk.

## Story 3.1: Consolidate "Aggregate Data" -- Keep in Privacy, Remove from Terms -- COMPLETED

**As a** product owner,
**I want** the Aggregate Data section to live in one canonical location,
**So that** updates are made once and users aren't confused by duplicated content.

### Acceptance Criteria

- [x] The Aggregate Data section remains in the **Privacy Policy** (it describes how personal data is de-identified -- this is a data processing disclosure)
- [x] The `Terms.aggregateData` section is replaced with a **cross-reference** to the Privacy Policy's Aggregate Data section (e.g., "Our practices regarding aggregated and de-identified data are described in our Privacy Policy")
- [x] The Terms TOC entry is updated to reflect the cross-reference
- [x] All 9 locale files are updated
- [x] No data processing disclosures are lost

### Tasks

- [x] Replace `Terms.aggregateData` content with cross-reference text in all 9 locale files
- [x] Update `terms/page.tsx` to render the shorter cross-reference section
- [x] Verify Privacy Policy still renders the full `aggregateData` section

> **Completed**: 26 March 2026. Terms.aggregateData replaced with localised cross-reference linking to Privacy Policy #aggregate-data. Full section retained in Privacy.

> **Completed**: 26 March 2026. Terms.aggregateData replaced with localised cross-reference linking to Privacy Policy #aggregate-data. Full section retained in Privacy.

---

## Story 3.2: Consolidate "Trademark Attribution" -- Single Source of Truth -- COMPLETED

**As a** product owner,
**I want** the Apple trademark attribution to appear once in the footer or as a shared component,
**So that** we don't maintain identical text in 4 separate policies across 9 locales (36 instances).

### Acceptance Criteria

- [x] Trademark attribution text ("Apple, the Apple logo, iPhone, iPad...") is rendered **once** at the bottom of each legal page via a shared component or footer element
- [x] The `trademarkAttribution` key is removed from `Privacy`, `Terms`, and `Eula` namespaces (CookiePage did not have one)
- [x] A single `Legal.trademarkAttribution` key is used across all legal pages
- [x] All 9 locale files are updated
- [x] The attribution remains visible on every legal page

### Tasks

- [x] Create `Legal.trademarkAttribution` key in all 9 locale files (sourced from Privacy namespace)
- [x] Update privacy/page.tsx, terms/page.tsx, eula/page.tsx to use `tLegal('trademarkAttribution')` (shared Legal namespace)
- [x] Remove `Privacy.trademarkAttribution`, `Terms.trademarkAttribution`, `Eula.trademarkAttribution` from all 9 locale files
- [x] Footer component keeps its own `Footer.trademarkAttribution` key (independent render context)

> **Completed**: 26 March 2026. Consolidated to `Legal.trademarkAttribution` across Privacy, Terms, and EULA pages. Removed 27 duplicate keys (3 namespaces x 9 locales). Footer retains its own copy as it uses a separate `Footer` namespace.

---

## Story 3.3: Fix Duplicate "Governing Law" TOC Entry in Terms -- COMPLETED

**As a** user navigating the Terms of Service,
**I want** the table of contents to have unique entries,
**So that** clicking a TOC link takes me to the correct section.

### Acceptance Criteria

- [x] The `terms/page.tsx` `tocItems` array contains only one `governing-law` entry
- [x] The duplicate entry is identified and removed or renamed
- [x] The rendered page has no duplicate heading IDs
- [x] Navigation works correctly for all TOC links

### Tasks

- [x] Audit `terms/page.tsx` for duplicate `{ id: 'governing-law' }` entries in the `tocItems` array
- [x] Remove the duplicate entry
- [x] Verify the section still renders correctly

> **Completed**: 26 March 2026. Removed the simpler duplicate governing-law TOC entry (line 84) and its rendered section (2-paragraph version). Kept the comprehensive version with law, jurisdiction, venue, enforceability, and language subsections.

---

# Epic 4: Validate Jurisdiction-Specific Privacy Sections

> **Rationale**: The Privacy Policy contains 12+ jurisdiction-specific sections (Japan APPI, China PIPL, Brazil LGPD, Germany BDSG/TTDSG, France CNIL, Poland PUODO, Ukraine, Middle East, Spain/LatAm, Canada, South Korea, Australia, India, Switzerland). These are all legitimately placed — they explain data processing obligations under each jurisdiction's laws. However, they make the Privacy Policy extremely long. This epic validates placement and considers UX improvements without moving content.

## Story 4.1: Validate All Jurisdiction Sections Belong in Privacy Policy -- COMPLETED

**As a** data protection officer,
**I want** to confirm every jurisdiction-specific section in the Privacy Policy genuinely describes data processing obligations,
**So that** we can confidently assert all sections are correctly placed.

### Acceptance Criteria

- [x] Each jurisdiction section is reviewed against the following test: "Does this section explain how personal data is collected, used, stored, shared, or protected under this jurisdiction's laws?"
- [x] Any section that fails this test is flagged for relocation (unlikely — initial audit suggests all pass)
- [x] A sign-off checklist is produced confirming each section's placement

### Validation Checklist

| Section | Namespace Key | Describes Data Processing? | Correctly Placed? |
|---------|--------------|---------------------------|-------------------|
| Japan APPI | `japanPrivacy` | Yes — purpose of use, handler obligations, cross-border transfers, rights | Yes |
| China PIPL | `chinaPrivacy` | Yes — legal bases, cross-border, sensitive data, DPO, minors | Yes |
| Brazil LGPD | `brazilPrivacy` | Yes — legal bases, rights, international transfers, DPO | Yes |
| Germany BDSG/TTDSG | `germanyPrivacy` | Yes — cookie consent (TTDSG), age, DPO, supervisory authority | Yes |
| France CNIL | `francePrivacy` | Yes — cookie consent (CNIL), age, post-mortem rights, supervisory | Yes |
| Poland PUODO | `polandPrivacy` | Yes — supervisory authority, age, language, cross-border | Yes |
| Ukraine | `ukrainePrivacy` | Yes — data protection law, consent, cross-border, rights | Yes |
| Middle East | `middleEastPrivacy` | Yes — UAE PDPL, Saudi PDPL, data localisation | Yes |
| Spain/LatAm | `spainLatamPrivacy` | Yes — LOPDGDD, AEPD, age, LatAm frameworks | Yes |
| Canada | `canadaPrivacy` | Yes — PIPEDA, CPPA, cross-border, consent | Yes |
| South Korea | `southKoreaPrivacy` | Yes — PIPA, cross-border, consent, rights | Yes |
| Australia | `australiaPrivacy` | Yes — Privacy Act, APPs, cross-border, complaint | Yes |
| India | `indiaPrivacy` | Yes — DPDP Act 2023, consent, data fiduciary, rights | Yes |
| Switzerland | `switzerlandPrivacy` | Yes — nFADP, cross-border, FDPIC, rights | Yes |

### Tasks

- [x] Review each jurisdiction section in `messages/en.json` against the validation test
- [x] Confirm no section contains purely commercial/regulatory content that should be in Terms
- [x] Document sign-off in this checklist

> **Sign-off**: Audit completed 26 March 2026. All 14 jurisdiction-specific sections validated — each genuinely describes data processing obligations under its respective jurisdiction's laws. No sections require relocation.

---

## Story 4.2: Add Collapsible Jurisdiction Sections for UX -- COMPLETED

**As a** user reading the Privacy Policy,
**I want** jurisdiction-specific sections to be collapsible/expandable,
**So that** I can quickly find my jurisdiction without scrolling through 14 others.

### Acceptance Criteria

- [x] All 14 jurisdiction sections (Japan through Switzerland) are rendered inside collapsible `<details>/<summary>` elements
- [x] Each section defaults to collapsed
- [x] The user's detected locale auto-expands the relevant jurisdiction section (ja, zh, de, fr, pl, uk, ar, es)
- [x] The TOC still links correctly to each jurisdiction section (id on `<details>` element)
- [x] Accessibility: `<details>/<summary>` is natively keyboard-navigable and screen-reader friendly
- [x] Print/PDF rendering: CSS `@media print` rule forces all collapsed content to display

### Tasks

- [x] Wrap each of the 14 jurisdiction sections in `<details className="jurisdiction-details">/<summary>` in `privacy/page.tsx`
- [x] Set `open` attribute based on locale matching (8 of 14 sections have matching locales)
- [x] Add CSS for `.jurisdiction-details` in `globals.css`: marker hiding, `+`/`-` indicator, scroll-margin-top, print override
- [x] Verify `<details>` elements are natively keyboard-navigable (Enter/Space to toggle)

> **Completed**: 26 March 2026. All 14 jurisdiction sections wrapped in `<details>/<summary>`. Auto-expand for 8 matching locales. `+`/`-` indicator via CSS `::after`. Print stylesheet forces all sections visible.

---

# Epic 5: Verify EULA and Cookie Policy Integrity

> **Rationale**: The EULA and Cookie Policy appear correctly scoped based on the audit. This epic is a verification pass to confirm no sections need moving.

## Story 5.1: Verify EULA Contains Only Licensing Terms -- COMPLETED

**As a** product owner,
**I want** to confirm the EULA is purely a software licence agreement,
**So that** it doesn't duplicate Terms content unnecessarily.

### Acceptance Criteria

- [x] The EULA contains: licence grant, feature access by tier, content ownership, restrictions, termination, warranties, liability, consumer rights (CRA 2015), assumption of risk, governing law, Apple-specific terms, changes, contact
- [x] No section duplicates Terms content beyond what Apple requires (Apple mandates certain EULA clauses that also appear in Terms)
- [x] The `consumerRights` section in EULA is verified as necessary (Apple/CRA 2015 requires it in the EULA specifically)
- [x] Sign-off that all EULA sections are correctly placed

### Tasks

- [x] Review each EULA section against the test: "Is this a software licensing term?"
- [x] Compare overlapping sections (liability, consumer rights, governing law) with Terms to confirm they're intentionally duplicated per Apple guidelines
- [x] Document sign-off

> **Sign-off**: Audit completed 26 March 2026. All 14 EULA sections verified as correctly placed. Consumer Rights (CRA 2015) and Apple Terms are intentionally duplicated per Apple App Store Review Guidelines. No sections require relocation.

---

## Story 5.2: Verify Cookie Policy Contains Only Storage/Tracking Disclosures -- COMPLETED

**As a** product owner,
**I want** to confirm the Cookie Policy covers only client-side storage and tracking technologies,
**So that** it doesn't overlap with the Privacy Policy's data collection sections.

### Acceptance Criteria

- [x] The Cookie Policy contains: localStorage keys, sessionStorage keys, Service Worker cache, first-party cookies (or lack thereof), third-party services (Vercel/Sentry), preference management, GPC/DNT, PECR compliance, updates, contact
- [x] No section duplicates Privacy Policy data collection content
- [x] The GPC section in Cookie Policy is verified as non-duplicative of the GPC section in Privacy Policy (Cookie focuses on implementation; Privacy focuses on legal obligations)
- [x] Sign-off that all Cookie Policy sections are correctly placed

### Tasks

- [x] Review each Cookie Policy section
- [x] Compare GPC sections in Cookie Policy vs Privacy Policy — confirm they serve different purposes
- [x] Document sign-off

> **Sign-off**: Audit completed 26 March 2026. All 11 Cookie Policy sections verified as correctly placed. GPC sections serve distinct purposes (Cookie: technical implementation; Privacy: legal obligation). No sections require relocation.

---

# Epic 6: Cross-References Between Policies

> **Rationale**: After moving sections, users who expected to find (e.g.) tax information in the Privacy Policy should be directed to the Terms. Cross-references prevent dead ends and confusion.

## Story 6.1: Add Cross-References in Privacy Policy for Moved Sections -- COMPLETED

**As a** user reading the Privacy Policy,
**I want** to be directed to the Terms of Service for commercial/regulatory disclosures,
**So that** I can find the information I need even if it has moved.

### Acceptance Criteria

- [x] The Privacy Policy includes a brief note after the International Transfers section stating: "For information about VAT treatment, pricing display compliance, sanctions, and encryption export controls, please see our Terms of Service."
- [x] The note includes a hyperlink to the Terms page
- [x] The note is translated in all 9 locale files
- [x] The note does not appear in the TOC (it's inline, not a section)

### Tasks

- [x] Add a `Privacy.commercialTermsReference` key to all 9 locale files with appropriate text and `<termsLink>` rich tag
- [x] Add a small inline paragraph in `privacy/page.tsx` after the international-transfers section
- [x] Style consistently as italic, muted text (`text-sm text-white/50 italic`)

> **Completed**: 26 March 2026. Inline cross-reference added after International Transfers section with localised text and link to /terms.

---

## Story 6.2: Add Cross-Reference in Terms for Data Processing Details -- COMPLETED

**As a** user reading the Terms of Service,
**I want** to be directed to the Privacy Policy for data processing details,
**So that** I understand the full picture of how my data is handled.

### Acceptance Criteria

- [x] The Terms of Service includes a note in the Aggregate Data cross-reference section (Story 3.1) that links to the Privacy Policy
- [x] Any existing cross-references between Terms and Privacy are verified as still correct after section moves
- [x] All 9 locale files are updated

### Tasks

- [x] Verify existing cross-references in `terms/page.tsx` still point to correct sections
- [x] Ensure the Aggregate Data cross-reference (from Story 3.1) includes a working link to `/privacy#aggregate-data`

> **Completed**: 26 March 2026. Cross-reference verified: Terms aggregateData.crossReference links to `/privacy#aggregate-data`, which matches `id="aggregate-data"` in privacy/page.tsx.

---

# Epic 7: Version Bumps and Changelog

> **Rationale**: Any structural change to legal policies requires a version bump. This triggers re-consent in the iOS app and signals to users that the policy has changed.

## Story 7.1: Bump Policy Versions After All Moves Complete -- COMPLETED

**As a** product owner,
**I want** policy versions to reflect the structural reorganisation,
**So that** users are informed of the change and iOS re-consent is triggered appropriately.

### Acceptance Criteria

- [x] Privacy Policy version bumped from v2.0 to v2.1
- [x] Terms of Service version bumped from v1.0 to v1.1
- [x] Version is updated in:
  - `messages/*.json` -- `Legal.version` and `Legal.termsVersion` across all 9 locales
  - `Privacy.policyUpdates.v2_1` and `Terms.changes.v1_1` changelog entries added in all 9 locales
  - `LegalConsentView.swift` -- `currentVersion` updated to "2.1"
  - All 9 `AppStrings+*.swift` locale files -- `legalVersion` updated to 2.1
- [x] The changelog entry for each policy describes the reorganisation and lists all moved sections
- [x] EULA version remains v1.0 (no changes)
- [x] Cookie Policy version remains v1.0 (no changes)

### Tasks

- [x] Update version strings (`Legal.version`, `Legal.termsVersion`, `Legal.lastUpdated`) in all 9 locale files
- [x] Add changelog entries to `Privacy.policyUpdates.v2_1` and `Terms.changes.v1_1` in all 9 locale files
- [x] Add v2.1 and v1.1 changelog `<li>` entries in `privacy/page.tsx` and `terms/page.tsx`
- [x] Update `LegalConsentView.swift` `currentVersion` from "2.0" to "2.1"
- [x] Update all 9 `AppStrings+*.swift` files `legalVersion` from 2.0 to 2.1

> **Completed**: 26 March 2026. Privacy v2.0->v2.1, Terms v1.0->v1.1. LegalConsentView.swift bumped to 2.1 (triggers re-consent for all iOS users). All 9 AppStrings Swift files and 9 JSON locale files updated. Changelog entries describe full reorganisation.

---

# Implementation Order

Execute epics in this sequence to minimise risk:

| Order | Epic | Risk | Effort |
|-------|------|------|--------|
| 1 | Epic 5 — Verify EULA & Cookie Policy | None (read-only audit) | Low |
| 2 | Epic 4 — Validate Jurisdiction Sections | None (read-only audit) | Low |
| 3 | Epic 3.3 — Fix Duplicate Governing Law TOC | Low (bug fix) | Low |
| 4 | Epic 1 — Move Tax/Commercial Sections | Medium (structural) | Medium |
| 5 | Epic 2 — Move Regulatory/Trade Sections | Medium (structural) | Medium |
| 6 | Epic 3.1 — Consolidate Aggregate Data | Low | Low |
| 7 | Epic 3.2 — Consolidate Trademark Attribution | Low | Low |
| 8 | Epic 6 — Add Cross-References | Low | Low |
| 9 | Epic 7 — Version Bumps | Low (must be last) | Low |
| 10 | Epic 4.2 — Collapsible Jurisdictions (UX) | Low (enhancement) | Medium |

---

# Appendix: Section Placement Matrix

## Sections Moving FROM Privacy TO Terms

| Section | Translation Key | Reason |
|---------|----------------|--------|
| VAT & Tax Treatment | `vatCompliance` | Commercial/pricing disclosure, not data processing |
| EU VAT on Digital Services | `euVatCompliance` | Commercial/pricing disclosure, not data processing |
| International Tax Obligations | `internationalTax` | Tax jurisdiction rules, not data processing |
| Pricing Display Compliance | `pricingCompliance` | Consumer pricing regulations, not data processing |
| Sanctions & Trade Compliance | `sanctionsCompliance` | Trade law/service availability, not data processing |
| Encryption & Export Controls | `encryptionExport` | Export regulation/licensing, not data processing |

## Sections Staying in Privacy (Confirmed Correct)

| Section | Translation Key | Reason |
|---------|----------------|--------|
| Overview | `overview` | Data processing summary |
| Website Data Collection | `websiteData` | Core data collection disclosure |
| Sentry Session Replay | `sentryReplay` | Tracking technology disclosure |
| Vercel Analytics | `vercelAnalytics` | Analytics data processing |
| Custom Events | `customEvents` | Event tracking disclosure |
| Service Worker | `serviceWorker` | Client-side caching disclosure |
| iOS App Data Collection | `appData` | App data processing |
| What We Don't Collect | `whatWeDontCollect` | Transparency disclosure |
| Legal Basis for Processing | `legalBasis` | GDPR Art. 6 requirement |
| UK Data Protection | `ukDataProtection` | UK GDPR controller disclosure |
| Electronic Communications (PECR) | `electronicComms` | PECR compliance |
| Data Flow | `dataFlow` | Data architecture transparency |
| How We Use | `howWeUse` | Purpose limitation disclosure |
| Data Storage & Security | `dataStorage` | Security measures disclosure |
| Third-Party Services | `thirdParty` | Third-party data sharing |
| Sub-Processors | `subProcessors` | GDPR Art. 28 requirement |
| International Data Transfers | `internationalTransfers` | GDPR Chapter V requirement |
| Aggregated & De-identified Data | `aggregateData` | De-identification disclosure |
| Children's Privacy | `childrensPrivacy` | COPPA/GDPR minor protections |
| Age of Digital Consent | `ageConsent` | Multi-jurisdiction age requirements |
| Enhanced Child Privacy | `enhancedChildPrivacy` | ICO Children's Code compliance |
| Data Retention & Deletion | `dataRetention` | GDPR storage limitation |
| CCPA Notice at Collection | `ccpaNotice` | CCPA/CPRA statutory requirement |
| Your Rights | `yourRights` | GDPR Art. 12-22 rights |
| GPC Signals | `gpcSignals` | Opt-out mechanism disclosure |
| Policy Updates | `policyUpdates` | Version history |
| Contact Us | `contactUs` | DPO/controller contact |
| EU Representative | `euRepresentative` | GDPR Art. 27 requirement |
| Japan APPI | `japanPrivacy` | Jurisdiction-specific data processing |
| China PIPL | `chinaPrivacy` | Jurisdiction-specific data processing |
| Brazil LGPD | `brazilPrivacy` | Jurisdiction-specific data processing |
| Germany BDSG/TTDSG | `germanyPrivacy` | Jurisdiction-specific data processing |
| France CNIL | `francePrivacy` | Jurisdiction-specific data processing |
| Poland PUODO | `polandPrivacy` | Jurisdiction-specific data processing |
| Ukraine | `ukrainePrivacy` | Jurisdiction-specific data processing |
| Middle East | `middleEastPrivacy` | Jurisdiction-specific data processing |
| Spain/LatAm | `spainLatamPrivacy` | Jurisdiction-specific data processing |
| Canada | `canadaPrivacy` | Jurisdiction-specific data processing |
| South Korea | `southKoreaPrivacy` | Jurisdiction-specific data processing |
| Australia | `australiaPrivacy` | Jurisdiction-specific data processing |
| India | `indiaPrivacy` | Jurisdiction-specific data processing |
| Switzerland | `switzerlandPrivacy` | Jurisdiction-specific data processing |

## Sections Staying in Terms (Confirmed Correct)

All existing Terms sections are correctly placed. No Terms sections need to move to Privacy or EULA.

## Sections Staying in EULA (Confirmed Correct)

All EULA sections are correctly placed. Overlap with Terms (liability, consumer rights, governing law) is intentional per Apple App Store guidelines.

## Sections Staying in Cookie Policy (Confirmed Correct)

All Cookie Policy sections are correctly placed. The GPC section in Cookie Policy covers implementation details; the GPC section in Privacy Policy covers legal obligations. Both are needed.
