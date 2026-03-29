# Accessibility Compliance Assessment

**Company**: LumenShore Ltd
**Service**: LumenLingo (lumenlingo.com + iOS application)
**Assessment Date**: 23 March 2026
**Prepared by**: LumenShore Compliance Team

---

## 1. Equality Act 2010 — Digital Services (Story 6.4.1)

### Applicable Requirements

The Equality Act 2010, Section 29, requires service providers to make **reasonable adjustments** to avoid placing disabled persons at a substantial disadvantage. For digital services, this is interpreted through WCAG 2.1 conformance as the practical standard.

### Website Assessment (lumenlingo.com)

| Criterion | Status | Notes |
|---|---|---|
| WCAG 2.1 Level AA Conformance | **Partially Conformant** | Conformance claimed on /accessibility page |
| Semantic HTML & ARIA landmarks | ✅ Implemented | Next.js pages use semantic elements, ARIA roles, landmark regions |
| Colour contrast (4.5:1 text, 3:1 large) | ✅ Verified | Light mode audit completed (LightMode.md); dark mode glass-morphism reviewed |
| Keyboard navigation | ✅ Implemented | All interactive elements focusable; skip-to-content link present |
| Focus indicators | ✅ Implemented | Visible focus rings on all interactive elements |
| `prefers-reduced-motion` respect | ✅ Implemented | All CSS animations and Framer Motion transitions disabled when set |
| Alternative text for images | ✅ Implemented | `aria-hidden` on decorative elements; meaningful alt text on informational images |
| Screen reader testing (VoiceOver) | ✅ Tested | macOS and iOS VoiceOver tested |
| Browser zoom 200% | ✅ Supported | Layout remains usable at 200% zoom |

**Known Gaps**:
- Screenshot carousel requires touch/mouse for drag interaction (keyboard arrow keys provided as alternative)
- Glass-morphism `backdrop-blur` may not render in all browsers (content remains readable)
- Accessibility page is not internationalised (English only) — planned for future

### Reasonable Adjustments Provided

- Alternative keyboard navigation for all touch interactions
- Dedicated accessibility feedback channel (accessibility@lumenshore.com) with 5-business-day SLA
- Enforcement pathway via EHRC documented on accessibility page
- Contact page available for general accessibility queries

### Conclusion

The website meets the Equality Act 2010 reasonable adjustment standard for digital services. The "partially conformant" WCAG 2.1 AA claim is honest and accurate. Ongoing improvements are tracked.

---

## 2. Public Sector Bodies Accessibility Regulations 2018 (Story 6.4.2)

### Applicability Assessment

The Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018 (SI 2018/952) transpose EU Directive 2016/2102 into UK law.

**Scope**: These regulations apply to **public sector bodies** — government departments, local authorities, NHS bodies, publicly-funded organisations, and bodies governed by public law.

**LumenShore Ltd Assessment**:
- LumenShore Ltd is a **private limited company** (Companies House registration)
- LumenLingo is a **commercial product** (language learning app with paid subscriptions)
- LumenShore receives **no public funding** and is not governed by public law
- LumenShore is **not** a public sector body under Regulation 3

**Conclusion**: The Public Sector Bodies Accessibility Regulations 2018 **do not apply** to LumenShore Ltd or LumenLingo.

**Good Practice Note**: Despite non-applicability, LumenShore voluntarily follows WCAG 2.1 AA as a best practice standard and maintains an accessibility statement modelled on the public sector format. This demonstrates commitment to accessibility beyond legal minimums.

---

## 3. iOS Application Accessibility Verification (Story 6.4.3)

### VoiceOver Support

| Metric | Value | Assessment |
|---|---|---|
| Files with `.accessibilityLabel` | 14 / 134 (10.4%) | Partial coverage |
| Files with `.accessibilityHint` | 4 / 134 (3.0%) | Low coverage |
| Files with `.accessibilityValue` | 1 / 134 (0.7%) | Minimal |
| Files with `.accessibilityElement` | 3 / 134 (2.2%) | Minimal |

**Well-labelled views**: CategoriesView (rich labels with name, difficulty, progress/locked state); CollapsibleSection (combine/contain children, expanded/collapsed state); LockedFeatureIndicator (lock state + tier); TierBadgeView (label + hint); ExportDataWidget (full toolbar labels).

**Gap**: ~90% of views lack explicit VoiceOver labels. Many may inherit reasonable labels from SwiftUI's standard controls (Button, Text, Toggle), but custom views and decorative elements need explicit annotation.

**Remediation Plan**: Tracked in Epic 22 (Premium — Accessibility & Internationalisation). Story 22.1.3 covers iOS accessibility audit against EN 301 549 / WCAG.

### Dynamic Type Support

| Font Usage | Count | Scalable? |
|---|---|---|
| `.font(.system(size: ...))` fixed sizes | ~863 instances | ❌ No |
| Dynamic text styles (`.body`, `.caption`, etc.) | ~124 instances | ✅ Yes |
| `@ScaledMetric` | 0 instances | N/A |

**Assessment**: ~87.5% of font declarations use fixed pixel sizes. Users who enable Dynamic Type will see most text remain at default size. This is a significant accessibility gap for low-vision users.

**Remediation Plan**: Migration to Dynamic Type text styles is tracked as a future improvement. The fixed-size fonts are a conscious design choice for the current glass-morphism UI (where precise layout sizing is critical) rather than an oversight.

### Reduce Motion Support

| Feature | Coverage | Assessment |
|---|---|---|
| `accessibilityReduceMotion` checks | 10 / 134 files (7.5%) | Targeted coverage |

**Covered areas**: CategoriesView (parallax), FlashCardsView (card flip), CollapsibleSection (expand/collapse), DashboardView (parallax scroll), JourneyView (animations), ExportDataWidget (reveal), PDFGeneratingView (shimmer), PDFSuccessOverlayView (state transitions), ProgressCelebrationView (particles), PDFHapticService (haptics suppressed).

**Assessment**: Reduce motion is implemented in all animation-heavy views. This is good targeted coverage — the most impactful motion effects are all respectable of user preferences.

### Colour Contrast

- WCAG 2.1 AA colour contrast verified for light mode surface tokens (documented in LightMode.md)
- Paywall CTA contrast audited (BUGS.md)
- No runtime adaptation for `accessibilityReduceTransparency` or `accessibilityDifferentiateWithoutColor`
- Glass-morphism blur effects may reduce contrast for some users, but text remains readable

### Image Accessibility Labels

Accessibility labels present on key interactive images and icons (toolbar buttons, badges, feature indicators). Decorative background elements (nebula renderer, particle effects) are not labelled (correct — they carry no informational content).

### Overall iOS Assessment

The iOS app has **partial** accessibility support:
- ✅ Strong: Reduce motion respect in animation-heavy views
- ✅ Good: Key interactive elements labelled for VoiceOver
- ⚠️ Gap: Most views lack explicit VoiceOver labels (relying on SwiftUI defaults)
- ❌ Major: Dynamic Type not supported (87.5% fixed fonts)
- ⚠️ Gap: No runtime colour accessibility adaptations

These gaps are acknowledged in the accessibility statement and tracked for remediation in the product roadmap.

---

## 4. Quarterly Accessibility Audit Schedule (Story 6.4.5)

### Audit Cadence

| Quarter | Period | Focus Area |
|---|---|---|
| Q1 | January–March | Website WCAG 2.1 AA full audit (automated + manual) |
| Q2 | April–June | iOS app VoiceOver + Dynamic Type audit |
| Q3 | July–September | Cross-platform screen reader testing (VoiceOver macOS/iOS) |
| Q4 | October–December | Annual comprehensive review + remediation planning |

### Audit Process

1. **Automated testing**: Run axe-core or Lighthouse accessibility audit on all website pages
2. **Manual testing**: Navigate all pages/views with keyboard-only and VoiceOver
3. **User feedback review**: Compile and assess any accessibility feedback received during the quarter
4. **Remediation**: Log findings, prioritise by impact, and schedule fixes
5. **Documentation**: Update this assessment and the public accessibility statement

### Responsible Party

- **Primary**: LumenShore Development Team
- **Review**: LumenShore Compliance Team
- **Escalation**: accessibility@lumenshore.com

### Next Audit

**Q2 2026 (April–June)**: iOS app VoiceOver + Dynamic Type audit

---

## Document History

| Date | Version | Changes |
|---|---|---|
| 23 March 2026 | 1.0 | Initial assessment — Equality Act 2010, PSBAR 2018, iOS verification, audit schedule |
