#!/usr/bin/env python3
"""
Add Accessibility namespace to en.json with all text from the accessibility page.
"""
import json
import os

BASE = os.path.join(os.path.dirname(os.path.dirname(__file__)),
                    "lumen-lingo-frontend", "messages")

accessibility = {
    "meta": {
        "title": "Accessibility Statement — LumenLingo",
        "description": "LumenLingo accessibility statement per the European Accessibility Act (EAA) and WCAG 2.1 AA. Conformance status, EN 301 549, known limitations, remediation timelines, and how to report issues.",
        "ogTitle": "Accessibility Statement — LumenLingo",
        "ogDescription": "Our commitment to making language learning accessible to everyone, with EAA conformance details and remediation timelines."
    },
    "breadcrumb": "Accessibility Statement",
    "hero": {
        "heading": "Accessibility Statement",
        "subtitle": "Language learning should be for everyone. We're committed to making LumenLingo accessible to all users, regardless of ability.",
        "lastUpdated": "Last updated: 24 March 2026"
    },
    "commitment": {
        "heading": "Our Commitment",
        "p1": "LumenShore Ltd is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply the relevant accessibility standards to both our website and the LumenLingo iOS application."
    },
    "eaaScope": {
        "heading": "European Accessibility Act (EAA) Scope",
        "p1": "The <eaaLink>European Accessibility Act (Directive 2019/882)</eaaLink> came into force on 28 June 2025, requiring digital services offered to EU consumers to meet accessibility standards.",
        "p2": "LumenLingo sells digital language-learning subscriptions to consumers in EU member states. As an e-commerce service with associated website and mobile application, LumenLingo falls within the scope of the EAA. Compliance requires meeting the <enLink>EN 301 549</enLink> harmonised European standard, which references WCAG 2.1 Level AA for web content and provides additional requirements for mobile applications."
    },
    "usAccessibility": {
        "heading": "US Accessibility (ADA & Section 508)",
        "p1": "US courts increasingly interpret <adaLink>Title III of the Americans with Disabilities Act (ADA)</adaLink> as applying to websites and mobile applications. While no formal web accessibility standard is mandated by the ADA, WCAG 2.1 Level AA is the de facto industry standard referenced by the Department of Justice.",
        "p2": "LumenLingo targets WCAG 2.1 Level AA for both our website and iOS app, satisfying the ADA's requirement for equal access to digital services. Our conformance status, known limitations, and remediation timelines are documented on this page and in our <vpatLink>Voluntary Product Accessibility Template (VPAT)</vpatLink>.",
        "p3": "<b>Section 508</b> applies to US federal agencies and their contractors. LumenShore Ltd does not currently contract with US federal agencies, so Section 508 is not directly applicable. However, our WCAG 2.1 AA compliance target meets the equivalent Section 508 technical standard (which references WCAG 2.0 Level AA)."
    },
    "conformance": {
        "heading": "Conformance Status",
        "p1": "The <wcagLink>Web Content Accessibility Guidelines (WCAG)</wcagLink> define requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.",
        "p2": "<b>lumenlingo.com</b> is partially conformant with WCAG 2.1 Level AA and EN 301 549 v3.2.1. \"Partially conformant\" means that some parts of the content do not fully conform to the accessibility standard. Known non-conformities are listed below with remediation timelines. We are actively working toward full conformance.",
        "p3": "<b>LumenLingo iOS app</b> is partially conformant with EN 301 549 requirements for non-web software (Clause 11). The app targets WCAG 2.1 Level AA where applicable and implements platform accessibility APIs (VoiceOver, Reduce Motion) for key interactions."
    },
    "measures": {
        "heading": "Measures We Take",
        "intro": "LumenShore takes the following measures to ensure the accessibility of lumenlingo.com:",
        "li1": "Include accessibility as part of our design and development process",
        "li2": "Use semantic HTML elements and ARIA landmarks for page structure",
        "li3": "Maintain colour contrast ratios that meet or exceed WCAG 2.1 AA standards (4.5:1 for normal text, 3:1 for large text)",
        "li4": "Provide visible focus indicators on all interactive elements",
        "li5": "Ensure all content is navigable via keyboard alone",
        "li6": "Respect the <code>prefers-reduced-motion</code> system preference — all animations are disabled when this preference is set",
        "li7": "Provide meaningful alternative text for images and decorative elements",
        "li8": "Include a skip-to-content link for keyboard users",
        "li9": "Test with screen readers including VoiceOver on macOS and iOS"
    },
    "technologies": {
        "heading": "Technologies",
        "intro": "Accessibility of lumenlingo.com relies on the following technologies:",
        "li1": "HTML",
        "li2": "WAI-ARIA",
        "li3": "CSS",
        "li4": "JavaScript",
        "outro": "These technologies are relied upon for conformance with the accessibility standards used."
    },
    "assistiveTech": {
        "heading": "Assistive Technology Compatibility",
        "intro": "lumenlingo.com is designed to be compatible with the following assistive technologies:",
        "li1": "VoiceOver on macOS and iOS",
        "li2": "Keyboard-only navigation across all major browsers (Safari, Chrome, Firefox, Edge)",
        "li3": "Browser zoom up to 200% without loss of content",
        "li4": "High contrast and inverted colour modes"
    },
    "knownLimitations": {
        "heading": "Known Limitations & Remediation",
        "intro": "Despite our best efforts, some areas have limitations we are actively working to address. In accordance with the EAA, we list known non-conformities below with planned remediation timelines.",
        "websiteHeading": "Website (lumenlingo.com)",
        "websiteLi1": "<b>Screenshot carousel:</b> Drag-to-swipe interaction requires touch or mouse input. Keyboard navigation via arrow keys is provided as an alternative.",
        "websiteLi1Status": "Status: Alternative provided. No further action needed.",
        "websiteLi2": "<b>Glass morphism effects:</b> The backdrop-blur visual effects may not render on all browsers. Content remains fully readable regardless.",
        "websiteLi2Status": "Status: Gracefully degrades. No further action needed.",
        "iosHeading": "iOS Application",
        "iosLi1": "<b>VoiceOver labels (WCAG 4.1.2 — Name, Role, Value):</b> Key interactive elements (categories, flashcards, membership badges, PDF export toolbar, collapsible sections) include VoiceOver labels and hints. Approximately 15% of views have explicit accessibility labels; the remainder rely on SwiftUI's built-in accessibility for standard controls (buttons, toggles, text). Custom decorative views (glass cards, parallax effects) lack explicit descriptions.",
        "iosLi1Target": "Target: Q3 2026 — Add explicit VoiceOver labels to all custom views and game elements.",
        "iosLi2": "<b>Dynamic Type (WCAG 1.4.4 — Resize Text):</b> The iOS app does not yet fully support Dynamic Type. Approximately 87% of text uses fixed sizes optimised for the glass-morphism design. Users who rely on larger text sizes may not see all text scale. A migration to scalable text styles is planned.",
        "iosLi2Target": "Target: Q4 2026 — Migrate to @ScaledMetric and semantic font styles across all views.",
        "iosLi3": "<b>Reduce Motion (WCAG 2.3.3 — Animation from Interactions):</b> All major animation-heavy views (flashcard flips, parallax effects, particle celebrations, expand/collapse sections, PDF export animations) respect the system Reduce Motion preference. Background nebula renderers continue to animate as purely decorative content.",
        "iosLi3Status": "Status: Compliant for interactive animations. Decorative animations excluded per WCAG exception.",
        "iosLi4": "<b>Target Size (WCAG 2.5.8 — Target Size Minimum):</b> Most interactive targets meet the 44×44pt minimum. Some smaller icon buttons in secondary views may fall below this threshold.",
        "iosLi4Target": "Target: Q3 2026 — Audit all touch targets and ensure 44pt minimum.",
        "outro": "We are actively working to identify and resolve accessibility gaps. Our roadmap includes quarterly accessibility audits (see below)."
    },
    "alternatives": {
        "heading": "Alternative Ways to Access Content",
        "intro": "If you have difficulty using any part of LumenLingo, the following alternatives are available:",
        "li1": "<b>Email support:</b> Contact us at <emailLink>accessibility@lumenshore.com</emailLink> and we will provide the content you need in an accessible format (plain text, audio description, or alternative layout).",
        "li2": "<b>Keyboard navigation:</b> All website content and interactions can be accessed using keyboard alone (Tab, Shift+Tab, Enter, Escape, arrow keys).",
        "li3": "<b>Screen reader:</b> The website is tested with VoiceOver. If you encounter issues with any assistive technology, please let us know.",
        "li4": "<b>Browser adjustments:</b> The website supports zoom up to 200%, high-contrast mode, and inverted colours."
    },
    "auditSchedule": {
        "heading": "Accessibility Audit Schedule",
        "intro": "We conduct regular accessibility audits to maintain and improve compliance:",
        "li1": "<b>Q1 (January–March):</b> Website WCAG 2.1 AA full audit (automated and manual testing)",
        "li2": "<b>Q2 (April–June):</b> iOS app VoiceOver and Dynamic Type audit",
        "li3": "<b>Q3 (July–September):</b> Cross-platform screen reader testing",
        "li4": "<b>Q4 (October–December):</b> Annual comprehensive review and remediation planning",
        "outro": "Findings from each audit are published in an updated version of this statement."
    },
    "feedback": {
        "heading": "Feedback",
        "intro": "We welcome your feedback on the accessibility of lumenlingo.com. If you encounter accessibility barriers or have suggestions for improvement, please contact us:",
        "li1Email": "<b>Email:</b> <emailLink>accessibility@lumenshore.com</emailLink>",
        "li2Contact": "<b>General contact:</b> <contactLink>Contact page</contactLink>",
        "li3Vpat": "<b>VPAT:</b> <vpatLink>View our Voluntary Product Accessibility Template</vpatLink>",
        "response": "We aim to respond to accessibility feedback within 5 business days. If you submit an accessibility complaint, we will acknowledge receipt within 2 business days and provide a substantive response — including a remediation plan for any confirmed barrier — within 15 business days."
    },
    "disproportionateBurden": {
        "heading": "Disproportionate Burden Assessment",
        "p1": "Article 14 of the European Accessibility Act allows micro-enterprises (fewer than 10 employees and annual turnover below €2 million) to claim an exemption where compliance would impose a \"disproportionate burden.\"",
        "p2": "LumenShore Limited (Company No. 09607326, England & Wales) currently qualifies as a micro-enterprise. However, we do not rely on this exemption as a blanket defence. Instead, we take reasonable measures to comply with EN 301 549 and WCAG 2.1 AA, prioritising the highest-impact accessibility improvements within our resources:",
        "li1": "Keyboard and screen-reader access for all core workflows",
        "li2": "Colour-contrast compliance across light and dark themes",
        "li3": "Reduced-motion support for all interactive animations",
        "li4": "Quarterly audit schedule with documented remediation plan",
        "p3": "Where full conformance is not yet achieved (e.g. complete Dynamic Type support in the iOS app), we document the non-conformity above with a remediation timeline. This assessment is reviewed annually alongside the accessibility audit."
    },
    "enforcement": {
        "heading": "Enforcement Procedure",
        "ukHeading": "United Kingdom",
        "ukP1": "If you are not satisfied with our response to your accessibility concern, you may escalate by contacting the <ehrcLink>Equality and Human Rights Commission (EHRC)</ehrcLink>.",
        "euHeading": "European Union",
        "euP1": "EU residents may contact the national enforcement authority in their EU member state responsible for the European Accessibility Act. A list of designated market surveillance authorities is maintained by each member state under Article 19 of the EAA.",
        "usHeading": "United States",
        "usP1": "US residents with accessibility concerns may file a complaint under Title III of the Americans with Disabilities Act. We encourage you to contact us first at <emailLink>accessibility@lumenshore.com</emailLink> so we can resolve the issue directly. Our <vpatLink>VPAT</vpatLink> documents our current conformance level."
    }
}

filepath = os.path.join(BASE, "en.json")
with open(filepath, "r") as f:
    data = json.load(f)

data["Accessibility"] = accessibility

with open(filepath, "w") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
    f.write("\n")

print("Added Accessibility namespace to en.json")
print(f"Keys: {len(json.dumps(accessibility))} chars")
