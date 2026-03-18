# Collapsed Panels — Premium UX Specification

> **Document Owner:** Staff Product Owner  
> **Target:** LumenLingo iOS · v1.6+  
> **Design Philosophy:** Every surface the user touches must feel like precision-crafted glass — weighted, responsive, and alive.  
> **Scope:** 20 collapsible panel instances across 6 files, 5 distinct implementation patterns → unified under one world-class system.

---

## UX Executive Review — Critical Findings & Changes

> **Reviewer:** Senior UX Product Owner · Post-spec quality pass  
> **Principle:** Users fall in love with products that anticipate their needs, respect their attention, and reward exploration. The following changes elevate this spec from "technically excellent" to "emotionally irresistible."

### Fixes Applied

| Finding | Risk | Change |
|---------|------|--------|
| **Badges vanished on expand** — Original spec removed badge info when panel opens. Users lose at-a-glance data exactly when engaging with a section. | Information loss | Badges now migrate from trailing-edge to subtitle position via `matchedGeometryEffect` (Story 2.4.6) — information preserved in both states |
| **Audio fatigue** — 13 panel sounds in rapid succession on JourneyView exploration. Even at volume 0.08, repetition creates annoyance, not delight. | User irritation | Added audio fatigue guard: suppresses after 3 sounds in 2s (Story 5.2.7). Cascade bulk actions bookmark first+last only (Story 6.9.4) |
| **Golden shimmer felt gamified** — The per-section scroll shimmer on locked panels evoked mobile game "buy gems" patterns, not luxury. | Brand damage | Replaced with static frosted veil overlay — subtle, elegant, always-on distinction without animation (Story 4.3.6) |
| **Group spacing reversed** — Original spec used 12pt spacing between groups (less than 20pt within groups), making groups indistinguishable. | Visual confusion | Fixed: 28pt between groups, standard 20pt within — creating "paragraph-like" visual rhythm (Story 4.2.4) |
| **Content reveal blank frame** — 50ms gap between height animation and content opacity created visible empty-glass-card moment. | Perceived jank | Reduced to 30ms — tight enough to avoid the empty frame while still preventing content-before-space (Story 3.5.4) |
| **Memory pressure collapse was jarring** — Silent, instant panel collapse while user is reading felt like a bug. | User confusion | Added smooth 0.3s animation + "Optimizing performance…" toast (Story 6.4.4) |

### Missing Capabilities Added

| Gap | Why It Matters | Story Added |
|-----|---------------|-------------|
| **No swipe-to-collapse** | Users with expanded long-content sections can't find the header to tap — they're trapped in content. Swipe-down is the universal "dismiss" gesture in iOS. | **6.5** — Swipe gesture with rubber-band physics, threshold haptic, and drag handle pill |
| **No Collapse/Expand All** | 13-section JourneyView with no bulk action is tedious. Power users will find it unforgivable. | **6.6** — Toolbar toggle + long-press context menu + cascading animation |
| **Overwhelming first-run** | 12 expanded panels (most empty) drown new users. First impression must feel inviting, not exhausting. | **6.7** — Smart progressive disclosure: 3 sections on first visit, auto-expand as data arrives |
| **No keyboard navigation** | iPad Magic Keyboard users are significant. Tab/Space/Enter navigation is table-stakes accessibility. | **6.8** — Full keyboard nav + ⌘⇧E/C shortcuts + VoiceOver+keyboard combo |
| **No haptic fatigue management** | Rapid interactions overwhelm touch sense. Luxury is about restraint. | **6.9** — Rolling intensity reduction + cascade bookmarking + exploration-mode detection |

### Design Philosophy Additions

- **Restraint creates luxury.** A premium haptic that fires 13 times in 3 seconds is no longer premium — it's a vibrating phone. Fatigue guards ensure each individual interaction feels intentional.
- **Information should never vanish.** Badges migrating on expand (not disappearing) is the same principle as a bookshelf where you can still read spines when a book is pulled out.
- **First impressions are irreversible.** A new user seeing 12 empty panels thinks "this app has nothing for me." Three panels with real data thinks "I'm getting started."
- **Swipe is the native language of iOS.** Any expandable surface that can't be swiped closed feels like a web view embedded in a native shell.

---

## Table of Contents

| Epic | Title | Stories | Status |
|------|-------|---------|--------|
| **E1** | [Unified Collapsible Foundation](#e1-unified-collapsible-foundation) | 1.1 – 1.5 | ✅ |
| **E2** | [Glass Hierarchy & Depth System](#e2-glass-hierarchy--depth-system) | 2.1 – 2.4 | ✅ |
| **E3** | [Micro-Interaction & Animation Polish](#e3-micro-interaction--animation-polish) | 3.1 – 3.5 | ✅ |
| **E4** | [Contextual Theming & Identity](#e4-contextual-theming--identity) | 4.1 – 4.4 | ⬜ |
| **E5** | [Haptic & Audio Choreography](#e5-haptic--audio-choreography) | 5.1 – 5.3 | ⬜ |
| **E6** | [Accessibility, Performance & Edge Cases](#e6-accessibility-performance--edge-cases) | 6.1 – 6.9 | ⬜ |

---

## Current State Audit

Before defining the future, we must understand the present. The app contains **20 collapsible panel instances** across **5 distinct patterns**:

| Pattern | Location | Count | Animation | Chevron | Background | Haptics | Sound |
|---------|----------|-------|-----------|---------|------------|---------|-------|
| `CollapsibleSection` (shared) | ProfileView, JourneyView | 15 | `.spring(0.35, 0.8)` | `chevron.right` 0→90° | `.ultraThinMaterial` + gradient stroke (collapsed only) | `toggleSwitch` | None |
| Dashboard header (bespoke) | DashboardView | 1 | `.spring(0.4)` | `chevron.up` button | `GlassCardBackground()` | `toggleSwitch` | None |
| SoundscapeNowPlaying (bespoke) | SoundscapeNowPlaying | 1 | `.spring(0.35, 0.8)` | None | Dark base + soundscape gradient | `buttonPress` | None |
| MyPlanCard (bespoke) | MyPlanCard | 1 | `.spring(0.35, 0.8)` | `chevron.down`/`up` (toggle) | Inherited from parent | None | None |
| MembershipView (bespoke) | MembershipView | 1 | `.spring(0.4)` | `chevron.down`/`up` | Capsule white 0.06 | `buttonPress` | `playPanelExpand()` |
| DisclosureGroup (native) | GrammarView | 1 | System default | System chevron | Glass card + blue glow | `toggleSwitch` | None |

### Key Inconsistencies Identified

1. **Chevron convention varies wildly**: `chevron.right` (0→90°) vs. `chevron.up` vs. `chevron.down`/`chevron.up` toggle — no unified language for "this panel opens"
2. **Spring parameters differ**: `(0.35, 0.8)` in 3 patterns vs. `(0.4, default)` in 2 — subtle but perceptible timing mismatch
3. **Haptic feedback is inconsistent**: `toggleSwitch` in some, `buttonPress` in others, nothing at all in MyPlanCard
4. **Sound effects**: Only MembershipView plays audio on expand — the rest are silent
5. **Background disappears on expand**: `CollapsibleSection` strips its background when expanded — the header floats without visual grounding
6. **Dashboard header bypasses shared component**: Entirely bespoke implementation despite following the same pattern
7. **Double-collapse anti-pattern**: MyPlanCard has its own expand/collapse nested inside a `CollapsibleSection`, creating a confusing two-level collapse
8. **No expansion affordance on SoundscapeNowPlaying**: No chevron or indicator tells the user the panel is tappable
9. **Single shadow on CollapsibleSection vs. dual shadow on GlassCardBackground**: Cards feel lighter/cheaper than the rest of the app

---

## E1: Unified Collapsible Foundation

> **Goal:** Consolidate all 5 bespoke collapse patterns into a single, configurable `CollapsibleSection` component that serves every use case in the app while maintaining pixel-perfect premium quality.

### Story 1.1 — Consolidate All Collapse Patterns into CollapsibleSection

**As a** user navigating the app,  
**I want** every collapsible panel to follow the same interaction model,  
**So that** I build reliable muscle memory and the app feels cohesive rather than assembled from parts.

**Context:** Today we have 5 different collapse implementations. The Dashboard header uses `GlassCardBackground` with a manual chevron button. SoundscapeNowPlaying has no chevron at all. MyPlanCard uses chevron-down/up toggling text buttons. MembershipView has a capsule-styled toggle. GrammarView uses native `DisclosureGroup`. This fragmentation means users learn a different interaction model in every screen.

#### Subtasks

- [x] **1.1.1** — Refactor `DashboardView` header to use `CollapsibleSection` with a new `style: .hero` variant (retaining `GlassCardBackground` visual treatment internally)
- [x] **1.1.2** — Refactor `SoundscapeNowPlaying` to use `CollapsibleSection` with a new `style: .miniPlayer` variant that preserves the soundscape-colored background and compact layout
- [x] **1.1.3** — Replace `MyPlanCard`'s bespoke expand/collapse with a `CollapsibleSection` nested content pattern — eliminate the double-collapse anti-pattern by making the feature list always visible when the parent section is expanded
- [x] **1.1.4** — Replace `MembershipView`'s feature comparison toggle with `CollapsibleSection` using `style: .inline` (capsule-free, text-link chevron)
- [x] **1.1.5** — Replace `GrammarView`'s `DisclosureGroup` with `CollapsibleSection` using `style: .tip` — preserving the lightbulb pulse animation and blue glow treatment
- [x] **1.1.6** — Verify all 20 collapse instances now route through `CollapsibleSection` — zero bespoke implementations remain
- [ ] **1.1.7** — Add snapshot tests for each style variant (`.standard`, `.hero`, `.miniPlayer`, `.inline`, `.tip`) in both collapsed and expanded states, light and dark mode

#### Acceptance Criteria

- [x] `CollapsibleSection` supports a `style` parameter with cases: `.standard` (current default), `.hero`, `.miniPlayer`, `.inline`, `.tip`
- [x] Dashboard header collapse uses `CollapsibleSection(style: .hero, ...)` and is visually identical to the current bespoke implementation
- [x] SoundscapeNowPlaying uses `CollapsibleSection(style: .miniPlayer, ...)` and retains soundscape-colored background/border
- [x] MyPlanCard no longer has its own `isExpanded` state — the feature list is always shown when the parent `CollapsibleSection` is expanded
- [x] MembershipView feature comparison uses `CollapsibleSection(style: .inline, ...)`
- [x] GrammarView tip uses `CollapsibleSection(style: .tip, ...)` with preserved lightbulb `symbolEffect(.pulse)`
- [x] Zero instances of bespoke collapse logic remain in the codebase (verified by searching for independent `isExpanded` / `isCollapsed` toggle patterns)
- [x] All 20 collapse instances compile and function identically to their pre-refactor behavior
- [ ] 10 snapshot tests pass (5 styles × 2 color schemes)

---

### Story 1.2 — Unified Chevron Language

**As a** user scanning a collapsible panel,  
**I want** a consistent visual indicator that tells me "this opens,"  
**So that** I never have to guess whether a panel is interactive.

**Context:** The current app uses `chevron.right` (rotating 0→90°), `chevron.up`, `chevron.down`, and no chevron at all — four different affordances for the same action. Premium apps commit to a single language and execute it flawlessly.

#### Subtasks

- [x] **1.2.1** — Standardize on `chevron.right` with rotation animation as the universal collapse indicator (0° = collapsed, 90° = expanded) — this is Apple's convention in Settings.app and aligns with our existing `CollapsibleSection`
- [x] **1.2.2** — For `.miniPlayer` style: add a subtle chevron indicator (8pt, low opacity) at the trailing edge of the main row to signal tappability without cluttering the compact layout
- [x] **1.2.3** — For `.inline` style: use a smaller chevron (8pt) inline with the trigger text, rotating on expand
- [x] **1.2.4** — For `.tip` style: position chevron inside the glass card header, left of the lightbulb icon area
- [x] **1.2.5** — Chevron must use the section's accent gradient as `foregroundStyle` when collapsed, and a muted `.secondary` tone when expanded (maintaining the current CollapsibleSection convention)
- [x] **1.2.6** — Verify chevron rotation animation uses consistent `.spring(response: 0.35, dampingFraction: 0.8)` across all variants

#### Acceptance Criteria

- [x] All 20 collapsible instances use `chevron.right` with rotation
- [x] Chevron size scales appropriately per style: 10pt for `.standard`, 12pt for `.hero`, 8pt for `.miniPlayer` and `.inline`, 10pt for `.tip`
- [x] Collapsed chevron uses section gradient colors; expanded chevron uses muted color
- [x] Rotation animation timing is `.spring(response: 0.35, dampingFraction: 0.8)` everywhere
- [x] VoiceOver announces "collapsed" / "expanded" state for every chevron
- [x] No instances of `chevron.up` or `chevron.down` remain in collapse contexts

---

### Story 1.3 — Collapsed-Only Glass Pill with Seamless Expansion

**As a** user expanding a collapsible section,  
**I want** the collapsed header to be a beautiful standalone glass pill, and the expanded state to let the content shine without a double-card wrapper,  
**So that** the header never looks like a separate card sitting awkwardly on top of the content.

**Context:** The original approach wrapped header + content in one unified glass card. However, content views (e.g., `overallStatsPanel`, `milestonesSection`, `gameTypeBreakdown`) already provide their own `GlassCardBackground`. Wrapping everything in a second outer glass card created a "double-glass" layered look with a visible divider line between header and content — making the header look like a separate panel sitting on top. The corrected approach: glass background lives only on the collapsed pill (where it looks premium and cohesive), and is removed when expanded so the header becomes a clean section title row that flows naturally above the content's own glass cards. No divider between header and content.

**UX Feedback Applied:** "Panels look like they have a separate header in uncollapsed mode — it looks ugly." The fix removes the outer glass wrapper and divider from the expanded state entirely.

#### Subtasks

- [x] **1.3.1** — Glass background (`.ultraThinMaterial` + Caribbean tint + frosted highlight + section accent + stroke) applies only in collapsed state — wrapping the header as a standalone glass pill
- [x] **1.3.2** — When expanded, the glass background is removed — the header row renders as a clean, unadorned section title that visually belongs to the content below
- [x] **1.3.3** — No divider between header and content — the accent divider created a "separate header" feel and is removed entirely
- [x] **1.3.4** — Header padding is consistent (`14pt` vertical) in both collapsed and expanded states — no padding jump during transitions
- [x] **1.3.5** — Dual shadows apply only to the collapsed glass pill — no shadow on expanded header (the content views provide their own shadows)
- [x] **1.3.6** — Test across all 13 JourneyView sections to ensure no double-glass-card layering or visual crowding

#### Acceptance Criteria

- [x] `CollapsibleSection` shows glass background ONLY in collapsed state (not expanded)
- [x] Expanded header is a clean title row — no glass card, no divider, no outer wrapper
- [x] No "double glass card" layering when content provides its own `GlassCardBackground`
- [x] Header padding is constant (14pt vertical) — no size jump on expand/collapse
- [x] Dual shadows only on collapsed pill — vanish smoothly on expand
- [x] JourneyView's 13 stacked sections have clean visual hierarchy — header row flows into content card below
- [x] Transition between collapsed glass pill and expanded title row is smooth — no flash or jump

---

### Story 1.4 — Dual Shadow Elevation System

**As a** user perceiving depth in the interface,  
**I want** collapsed panels to share the same dual-shadow elevation as the rest of the app's glass cards,  
**So that** they feel like they belong to the same premium material system rather than being visually cheaper.

**Context:** `GlassCardBackground` uses a dual-shadow system: a broad color-tinted lift shadow (`radius: 20, y: 8`) plus a tight grounding shadow (`radius: 6, y: 3`). This is the signature LumenLingo depth feel. `CollapsibleSection`'s collapsed glass pill should match this depth system. For `.standard` style, shadows only appear on the collapsed glass pill (expanded state has no outer glass — content provides its own shadows). For other styles (`.miniPlayer`, `.inline`, `.tip`), dual shadows apply in both states via `DualShadowModifier`.

#### Subtasks

- [x] **1.4.1** — Add dual shadow to `.standard` collapsed glass pill: primary lift shadow (`accentColor.opacity(0.10), radius: 16, y: 6`) + grounding shadow (`.black.opacity(0.04), radius: 5, y: 2`)
- [x] **1.4.2** — Shadows on `.standard` style are collapsed-only — they vanish with the glass background on expand (content views provide their own)
- [x] **1.4.3** — For `.miniPlayer` style: use soundscape accent color for the colored shadow component (via `DualShadowModifier`)
- [x] **1.4.4** — For `.hero` style (Dashboard header): match existing `GlassCardBackground` dual shadows exactly
- [x] **1.4.5** — Light mode shadows: use Caribbean lavender `#C494FC` tint for the lift shadow instead of pure black (matching `GlassCardBackground` light mode convention)
- [x] **1.4.6** — Verify shadows animate smoothly during expand/collapse transitions — no shadow pop or flicker

#### Acceptance Criteria

- [x] `.standard` style collapsed glass pill renders dual shadows: lift + grounding
- [x] `.standard` expanded state has no outer shadows (content provides its own)
- [x] Collapsed dual shadow: `accentColor.opacity(0.10), radius: 16, y: 6` + `.black.opacity(0.04), radius: 5, y: 2`
- [x] Light mode lift shadow uses `#C494FC` lavender tint
- [x] Shadow depth animates with the same spring as the expand/collapse transition
- [x] Visual parity with `GlassCardBackground` dual shadow system when viewed side-by-side on Dashboard

---

### Story 1.5 — Frosted Inner Highlight & Caribbean Tint Layer

**As a** user viewing collapsible panels,  
**I want** the collapsed glass pill to have the same frosted highlight and Caribbean color tinting as the app's other glass cards,  
**So that** the panels feel crafted from the same premium material.

**Context:** `GlassCardBackground` has three layers above its `.ultraThinMaterial` base: (1) a Caribbean tint gradient (`#C494FC` lavender → `#F472B6` pink → `#FB923C` warm orange at 0.10–0.18 opacity, light mode only), (2) a frosted inner highlight (white gradient top → clear → subtle bottom, both modes), and (3) an optional `tintColor` overlay. The collapsed glass pill replicates these layers so it matches `GlassCardBackground` visually. These layers only appear in the collapsed state — the expanded header has no glass backing.

#### Subtasks

- [x] **1.5.1** — Add frosted inner highlight layer to collapsed glass pill: `LinearGradient` from white 0.10 → clear → white 0.03 (dark mode) or white 0.20 → clear → white 0.05 (light mode), top → bottom
- [x] **1.5.2** — Add Caribbean tint layer in light mode only: `LinearGradient` from `#C494FC` at 0.12 → `#F472B6` at 0.08 → `#FB923C` at 0.06, `topLeading → bottomTrailing`
- [x] **1.5.3** — Retain the existing section-colored overlay (`colors[0].opacity(0.08)` in light mode) as an accent tint on top of the Caribbean base — this keeps each section's color identity
- [x] **1.5.4** — All glass layers appear only on the collapsed state and smoothly animate away on expand
- [x] **1.5.5** — Verify visual coherence across JourneyView's 13 sections (each has different accent colors — test that Caribbean base + section accent tints don't clash)

#### Acceptance Criteria

- [x] Frosted inner highlight renders on collapsed pill identically to `GlassCardBackground`'s highlight layer
- [x] Caribbean tint gradient appears in light mode on collapsed pill
- [x] Section accent color overlay still distinguishes sections from one another
- [x] Glass layers appear only in collapsed state — no double-stacking with content's own glass
- [x] No opacity flash or layer pop during expand/collapse animations
- [x] Visual A/B comparison between collapsed `CollapsibleSection` pill and `GlassCardBackground` shows matched material quality

---

## E2: Glass Hierarchy & Depth System

> **Goal:** Establish a clear visual hierarchy among collapsible panels so users instinctively understand which panels are primary, which are secondary, and which are nested — all through the language of glass weight, tint intensity, and elevation.

### Story 2.1 — Three-Tier Glass Weight System for Collapsible Panels

**As a** user viewing a screen with multiple collapsible sections,  
**I want** visually distinct levels of glass "weight" that communicate importance,  
**So that** I can scan the interface and immediately understand the hierarchy.

**Context:** Today, all 15 `CollapsibleSection` instances use the same `.ultraThinMaterial` weight, the same stroke opacity, the same shadow depth. A user's XP stats panel looks exactly as important as the "Reset Progress" danger section. The Dashboard's hero header (bespoke) feels heavier because of `GlassCardBackground` — but that weight isn't available within `CollapsibleSection`. We need a deliberate hierarchy: **Primary** (hero-level, heaviest glass), **Standard** (workhorse sections), and **Recessed** (nested or secondary content).

#### Subtasks

- [x] **2.1.1** — Define `GlassWeight` enum within `CollapsibleSection`: `.primary`, `.standard`, `.recessed`
- [x] **2.1.2** — `.primary` weight: material at full opacity, Caribbean tint at 1.2× standard intensity, stroke lineWidth 1.5, shadow at `GlassCardBackground` level — used for `.hero` and `.miniPlayer` styles
- [x] **2.1.3** — `.standard` weight: material at current opacity, Caribbean tint at 1.0×, stroke lineWidth 0.75, dual shadow at standard level — used for `.standard` and `.tip` styles
- [x] **2.1.4** — `.recessed` weight: material at 0.7× opacity, Caribbean tint at 0.6×, stroke lineWidth 0.5 and 0.5× opacity, shadow at 0.5× standard — used for secondary/nested panels and inline toggles
- [x] **2.1.5** — Auto-assign `GlassWeight` from `style`: `.hero`/`.miniPlayer` → `.primary`, `.standard`/`.tip` → `.standard`, `.inline` → `.recessed` — but allow manual override via optional `glassWeight` parameter
- [x] **2.1.6** — Verify the 3 weights are visually distinct on JourneyView (which has all standard weight) and ProfileView (which has primary + standard)

#### Acceptance Criteria

- [x] `CollapsibleSection` has a `glassWeight` parameter with `.primary`, `.standard`, `.recessed` options
- [x] Each weight produces visually distinct material opacity, tint intensity, stroke weight, and shadow depth
- [x] `.primary` panels feel noticeably heavier and more prominent than `.standard`
- [x] `.recessed` panels feel subtly lighter — visually subordinate without looking broken
- [x] Default weight assignment from style is correct: hero/miniPlayer → primary, standard/tip → standard, inline → recessed
- [x] Manual `glassWeight` override works: e.g. `CollapsibleSection(style: .standard, glassWeight: .primary, ...)`
- [x] All 20 panel instances render with appropriate weight for their context

---

### Story 2.2 — Gradient Stroke Intensity Tied to Importance

**As a** user perceiving the edges of glass panels,  
**I want** the gradient border to be bolder on important sections and subtler on secondary ones,  
**So that** the border itself communicates hierarchy without me needing to read the title.

**Context:** Currently `CollapsibleSection` uses a uniform `strokeBorder` with the section's accent gradient at 0.25→0.10 opacity (dark) or 0.30→0.15 (light), lineWidth 0.75/0.5. Meanwhile, `GlassPanelWrapper` uses a 4-color gradient border at full lineWidth 1.5. `TierGlassCardModifier` has an animated glow border. The border is one of the strongest visual differentiators in the current design system — we should leverage it for hierarchy.

#### Subtasks

- [x] **2.2.1** — `.primary` glass weight: 4-stop gradient border using section accent colors + white highlight, lineWidth 1.5 dark / 1.0 light, opacity 0.35→0.15 dark / 0.40→0.20 light
- [x] **2.2.2** — `.standard` glass weight: current 2-stop gradient border, lineWidth 0.75 dark / 0.5 light (unchanged from today)
- [x] **2.2.3** — `.recessed` glass weight: solid color border (not gradient) using `accentColor.opacity(0.08)`, lineWidth 0.5 — barely visible, just enough to define the edge
- [x] **2.2.4** — During expand transition: border should animate from collapsed intensity to expanded intensity (slightly reduced — 0.85× collapsed values) to subtly indicate the panel is "open" and less interactive
- [x] **2.2.5** — Verify border rendering on OLED (pure blacks) and LCD simulator — gradient borders can wash out on low-contrast displays

#### Acceptance Criteria

- [x] `.primary` sections have a 4-stop gradient border at 1.5× current intensity
- [x] `.standard` sections retain current border treatment (no visual regression)
- [x] `.recessed` sections have a barely-visible solid border
- [x] Border intensity reduces by 15% when panel is expanded
- [x] Border transitions animate with the same spring as expand/collapse
- [x] Borders render correctly on both OLED-black and lighter backgrounds

---

### Story 2.3 — Nested Panel Depth Stacking

**As a** user encountering a collapsible section inside another collapsible section,  
**I want** the inner panel to visually recede relative to the outer panel,  
**So that** the nesting is obvious and I'm never confused about which level I'm interacting with.

**Context:** Today, MyPlanCard has its own expand/collapse *inside* a `CollapsibleSection`. Story 1.1 eliminates this specific anti-pattern, but nested content is a legitimate pattern we should support deliberately. For example, JourneyView's Game Performance section could contain per-game-type sub-sections. A well-designed nesting system prevents us from ever falling back to bespoke double-collapse patterns.

#### Subtasks

- [x] **2.3.1** — Add a `depth` environment value to `CollapsibleSection`: 0 = root (default), 1 = one level nested, 2+ = deeply nested
- [x] **2.3.2** — Each depth level automatically applies: `.recessed` glass weight, reduced `cornerRadius` (18 → 14 → 12), reduced horizontal padding (16 → 12 → 10), smaller header typography (15pt → 13pt → 12pt)
- [x] **2.3.3** — Nested `CollapsibleSection` auto-increments `depth` from its parent — no manual tracking required
- [x] **2.3.4** — Maximum supported nesting depth: 2 (3 levels). At depth 3+, assert in DEBUG and clamp to depth 2 visuals
- [x] **2.3.5** — Add indent guide: a 2px vertical accent-colored line at the leading edge of nested panels, opacity scaled by depth (0.20 at depth 1, 0.12 at depth 2) — matching code-editor indent guide conventions
- [x] **2.3.6** — Test nested configuration: JourneyView Game Performance → per-game sub-sections (Flashcards / Grammar / WordBuilder breakdowns)

#### Acceptance Criteria

- [x] `CollapsibleSection` reads and propagates `depth` environment value
- [x] Depth 0: standard appearance (current visuals)
- [x] Depth 1: recessed glass, `cornerRadius: 14`, 13pt header, 12px padding
- [x] Depth 2: deeper recess, `cornerRadius: 12`, 12pt header, 10px padding
- [x] Depth increments automatically for nested sections
- [x] Indent guide renders at 2px width with section accent color at depth ≥ 1
- [x] DEBUG assertion fires at depth 3+ (no crash in RELEASE)
- [x] Nested sections are visually distinguishable at a glance — inner panels clearly recede

---

### Story 2.4 — Collapsed State Summary Badges

**As a** user scanning a long list of collapsed sections,  
**I want** lightweight at-a-glance summary information visible on the collapsed header,  
**So that** I can decide whether to expand without opening every panel.

**Context:** `CollapsibleSection` already has an optional `subtitle` parameter that shows a 12pt text string when collapsed. But this is limited to a single text string — it can't show structured data like "3 milestones reached" with a checkmark icon, or "🔥 15 day streak" with a flame. Premium apps like Things 3 and Bear show rich summary metadata on collapsed sections — counts, status indicators, mini progress bars.

#### Subtasks

- [x] **2.4.1** — Add optional `badge` parameter to `CollapsibleSection`: `CollapsibleBadge` struct with cases `.count(Int)`, `.text(String)`, `.icon(String, Color)`, `.progress(Double)` — rendered at trailing edge of header row, before the chevron
- [x] **2.4.2** — `.count` badge: renders as a pill with the number (e.g., "3") in the section's accent gradient, 11pt semibold, glass capsule background
- [x] **2.4.3** — `.text` badge: renders a short string (max 12 chars, truncated) as a subtle text label, 11pt, `.secondary` weight
- [x] **2.4.4** — `.icon` badge: renders a single SF Symbol in the specified color inside a 22×22 circle — for status indicators like ✓ (complete), ⚠ (attention), 🔒 (locked)
- [x] **2.4.5** — `.progress` badge: renders a 40×4pt mini progress bar with the section's accent gradient fill — for sections like "Daily XP: 75%"
- [x] **2.4.6** — Badge animates on state transition: when expanding, the badge morphs from its trailing-edge position to a compact subtitle position below the title text (preserving summary info while expanded); on collapse, it morphs back to the trailing badge position. Use `.matchedGeometryEffect` for a seamless migration rather than disappearing entirely — never discard useful information on expand
- [x] **2.4.7** — Wire badges to real data: JourneyView milestones → `.count(completedCount)`, streak → `.text("🔥 \(days)")`, accuracy → `.progress(avgAccuracy)`, tier-locked sections → `.icon("lock.fill", .secondary)`
- [x] **2.4.8** — For ProfileView: "My Plan" section → `.text(tierDisplayName)` badge (replacing current subtitle usage)

#### Acceptance Criteria

- [x] `CollapsibleSection` accepts an optional `badge: CollapsibleBadge?` parameter
- [x] `.count` badge renders a glass pill with number in accent gradient
- [x] `.text` badge renders a subtle trailing text, truncated at 12 chars
- [x] `.icon` badge renders a colored SF Symbol in a circle
- [x] `.progress` badge renders a 40×4pt mini gradient progress bar
- [x] Badges migrate from trailing-edge position (collapsed) to subtitle position (expanded) via `matchedGeometryEffect` — information is never lost
- [x] At least 8 of the 15 CollapsibleSection instances have meaningful badges wired to real data
- [x] Badge layout doesn't overflow or clip on small devices (iPhone SE screen width)
- [x] VoiceOver reads badge content as part of the collapsed section announcement

---

## E3: Micro-Interaction & Animation Polish

> **Goal:** Transform collapsible panels from functional toggles into delightful micro-interactions. Every expand and collapse should feel physical — weighted, springy, and alive — using the same animation philosophy that makes the game headers feel premium.

### Story 3.1 — Staggered Content Reveal on Expand

**As a** user expanding a section with multiple pieces of content,  
**I want** the inner elements to cascade into view with a subtle stagger,  
**So that** the reveal feels orchestrated and elegant rather than a single block popping in.

**Context:** Currently, expanded content appears as one atomic unit via `.opacity.combined(with: .move(edge: .top))` — a single block fades and slides in together. This is functional but feels flat. Premium apps like Apple Music, Airbnb, and Things 3 use staggered reveals where child elements animate in with 30-50ms delays between each, creating a cascade effect. Our `GameHeader` already demonstrates this thinking — stat pills animate independently. The collapsed panels should follow suit.

#### Subtasks

- [x] **3.1.1** — Add a `StaggeredRevealModifier` that wraps content children and animates them in sequentially with a configurable delay (default 40ms per item)
- [x] **3.1.2** — Each child item in the reveal should animate with: opacity 0→1, translateY 8→0, scale 0.97→1.0, using `.spring(response: 0.35, dampingFraction: 0.85)`
- [x] **3.1.3** — Maximum stagger count: 8 items. Beyond 8, remaining items appear simultaneously with the 8th item to prevent the reveal from feeling slow
- [x] **3.1.4** — Collapse animation should be instant (no reverse stagger) — the entire content disappears at once with `.opacity` to maintain snappiness on close
- [x] **3.1.5** — Apply stagger to JourneyView's overallStatsPanel (3 stat cards stagger in), milestonesSection (milestone badges stagger), and streakSection (calendar grid rows stagger)
- [x] **3.1.6** — Apply stagger to ProfileView's profileHeader content (avatar, name/XP row, action buttons stagger in)
- [x] **3.1.7** — Respect `UIAccessibility.isReduceMotionEnabled` — when enabled, all content appears simultaneously (no stagger)

#### Acceptance Criteria

- [x] `StaggeredRevealModifier` is a reusable `ViewModifier` accessible via `.staggeredReveal(delay:)`
- [x] Content children appear in sequence with configurable delay (default 40ms)
- [x] Each child animates: opacity 0→1, translateY 8→0, scale 0.97→1.0, spring-based
- [x] Maximum of 8 staggered items — additional items appear with the last group
- [x] Collapse is instant (no reverse stagger) — content disappears as one unit
- [x] At least 5 `CollapsibleSection` instances use staggered reveal
- [x] Reduce Motion setting disables stagger — content appears simultaneously
- [x] Stagger feels natural at 60fps — no frame drops during the cascade

---

### Story 3.2 — Content Height Pre-Measurement for Seamless Expansion

**As a** user expanding a collapsible section,  
**I want** the panel height to grow smoothly to its final size,  
**So that** there's no layout jump, content clipping, or jarring size recalculation.

**Context:** SwiftUI's default transition behavior can cause layout jumps when content appears — the parent `ScrollView` recalculates its content size, which may cause the scroll position to shift or the expanding panel to "jump" as its intrinsic size resolves. This is especially noticeable on JourneyView where 13 sections are stacked — expanding one near the middle of the list can cause visible scroll jitter. The solution is pre-measuring content height and animating the container's height explicitly.

#### Subtasks

- [x] **3.2.1** — Add invisible `GeometryReader` overlay on content to measure expanded height before the reveal begins
- [x] **3.2.2** — Animate container height from 0 to measured height using the shared `.spring(response: 0.35, dampingFraction: 0.8)` — content clips to the animating frame via `.clipped()`
- [x] **3.2.3** — During height animation, keep content pinned to the top of the growing frame (content doesn't "slide up from bottom")
- [x] **3.2.4** — Handle dynamic content height changes while expanded: if content height changes (e.g., a sub-view loads data), smoothly animate to new height rather than jumping
- [x] **3.2.5** — On collapse: animate height to 0 (clipped) then remove content from hierarchy to reclaim layout — ensuring the `ScrollView` doesn't hold phantom space
- [x] **3.2.6** — Test critical scenario: JourneyView, expand "Monthly Report" section (near list middle), verify the sections below slide down without any jitter or scroll position jump

#### Acceptance Criteria

- [x] Container height is pre-measured before content reveal begins
- [x] Height animates smoothly from 0 to measured value on expand
- [x] Content is clipped during height transition — no overflow visible
- [x] Content anchors to top of frame during expansion — no upward float
- [x] Dynamic content height changes while expanded animate smoothly, not jump
- [x] Collapse animates height to 0 before content removal
- [x] JourneyView scroll position remains stable when expanding sections in the middle of the list
- [x] No layout warnings or constraint conflicts in Console during expand/collapse

---

### Story 3.3 — Glassmorphic Background Breathing Effect

**As a** user looking at a collapsible panel,  
**I want** the glass surface to have a very subtle living quality — a barely perceptible shimmer or shift —  
**So that** the panels feel like real translucent material rather than static rectangles.

**Context:** The app already has a "breathing" concept in the nebula backgrounds and breathing orbs. Extending this philosophy to the glass cards creates a unified sense that the entire interface is alive. This should be extremely subtle — barely 1-2% parameter shift — noticed subconsciously rather than consciously. Think of how real frosted glass catches light differently as viewing angle changes.

#### Subtasks

- [x] **3.3.1** — Add a slow, continuous animation to the frosted inner highlight layer: the white gradient highlight position shifts vertically by ±3% over a 6-second cycle using `sin(time)` — creating a barely perceptible "light catching" effect
- [x] **3.3.2** — The stroke border gradient should slowly rotate its angle by ±5° over an 8-second cycle — creating a subtle shimmer on the edges
- [x] **3.3.3** — Both effects should be synchronized across all visible `CollapsibleSection` instances using a shared `TimelineView(.animation(minimumInterval: 1/15))` — 15fps is sufficient for such subtle effects
- [x] **3.3.4** — Effects should only run when the section is visible on screen (`.onAppear` / `.onDisappear` lifecycle)
- [x] **3.3.5** — Respect `UIAccessibility.isReduceMotionEnabled` — disable all breathing effects when enabled
- [x] **3.3.6** — Performance budget: breathing effects must add zero measurable frame time (<0.1ms per section). Use simple `sin(time)` math only — no shader involvement

#### Acceptance Criteria

- [x] Frosted highlight position shifts ±3% vertically over 6-second cycle
- [x] Stroke border gradient angle oscillates ±5° over 8-second cycle
- [x] Effects are synchronized across all visible sections (shared timeline)
- [x] Effects pause when section scrolls off-screen
- [x] Reduce Motion disables all breathing effects
- [x] CPU/GPU impact is unmeasurable: <0.1ms per section per frame
- [x] Effects are perceptible only on close inspection — not distracting at conversational viewing distance
- [x] 60fps maintained on iPhone 15 standard with 13 visible JourneyView sections

---

### Story 3.4 — Press & Release Interaction Feedback

**As a** user tapping a collapsible section header,  
**I want** the press to feel physically responsive — like pressing a real glass surface —  
**So that** every interaction reinforces the premium material metaphor.

**Context:** The current `CollapsibleHeaderButtonStyle` scales to 0.97× and reduces opacity to 0.85 on press. This is functional but generic — it doesn't leverage the glass material. A premium press effect would depress the glass slightly (reducing the shadow to simulate the card pressing "into" the surface), dim the frosted highlight, and intensify the stroke border — as if finger pressure is compressing the translucent material.

#### Subtasks

- [x] **3.4.1** — On press: scale 0.98× (slightly less squish than current 0.97 — more subtle), opacity unchanged (remove the 0.85 dim — glass doesn't lose opacity when pressed)
- [x] **3.4.2** — On press: reduce shadow elevation (lift shadow Y: 6→2, radius: 16→8; grounding shadow Y: 2→1, radius: 5→3) — the card appears to press into the surface
- [x] **3.4.3** — On press: increase stroke border opacity by 1.3× — the edges "tighten" under pressure
- [x] **3.4.4** — On press: frosted inner highlight intensity reduces by 30% — the glass "flattens" under pressure
- [x] **3.4.5** — On release: all properties spring back with `.spring(response: 0.25, dampingFraction: 0.7)` — slightly bouncier than the expand spring for a satisfying rebound
- [x] **3.4.6** — If the user holds for >300ms without releasing (`LongPressGesture`), add a very subtle pulse glow on the border (amplitude: 0.05× opacity) to indicate "still holding, will activate on release" — then cancel if drag exceeds 20pt (standard iOS cancellation)

#### Acceptance Criteria

- [x] Press scales to 0.98× (not 0.97×) — no opacity change
- [x] Shadows compress on press: lift shadow reduces to near-zero
- [x] Stroke border intensifies by 30% on press
- [x] Frosted highlight dims by 30% on press
- [x] Release springs back with `.spring(0.25, 0.7)` — visibly bouncier rebound
- [x] Long press (>300ms) triggers subtle border pulse glow
- [x] Drag >20pt cancels the interaction (standard iOS behavior)
- [x] Press effect renders at 60fps — no frame stutter on interaction start

---

### Story 3.5 — Expand/Collapse Momentum & Overshoot

**As a** user rapidly toggling sections open and closed,  
**I want** the animation to feel physical — with a slight overshoot on expand and a satisfying snap on collapse —  
**So that** the interaction feels like a precision mechanism rather than a math equation.

**Context:** The current `.spring(response: 0.35, dampingFraction: 0.8)` animation is competent but conservative — it settles quickly with minimal overshoot. Premium physical interfaces (like Apple's sheet presentations in iOS 18 or the Dynamic Island morph) use springs calibrated for a tiny overshoot that settles gracefully. This story calibrates the expand/collapse springs for maximum perceived quality.

#### Subtasks

- [x] **3.5.1** — **Expand spring**: `.spring(response: 0.40, dampingFraction: 0.72, blendDuration: 0.1)` — slightly slower response with more noticeable overshoot (panel "breathes open" past its resting size by ~2% before settling)
- [x] **3.5.2** — **Collapse spring**: `.spring(response: 0.30, dampingFraction: 0.88)` — faster, crisper, minimal overshoot — collapsing should feel decisive and snappy
- [x] **3.5.3** — **Chevron rotation**: use the expand spring for rotation-to-90° and the collapse spring for rotation-to-0° — the chevron and panel move as one physical system
- [x] **3.5.4** — **Content reveal**: offset the content opacity animation start by 30ms from the height animation (not 50ms — longer gaps create a visible "empty glass card" frame that feels broken). Height begins first, content fades in as the space opens — the 30ms offset prevents content from appearing before there's room while avoiding an empty-card flash
- [x] **3.5.5** — **Rapid toggle protection**: if user toggles twice within 200ms, debounce to the final state — don't play two overlapping animations
- [x] **3.5.6** — Define these spring constants in a shared `CollapsibleAnimationTokens` enum: `.expandSpring`, `.collapseSpring`, `.revealDelay`, `.debounceInterval` — ensuring every animation parameter is centralized

#### Acceptance Criteria

- [x] Expand animation has perceptible overshoot (~2% past resting size) before settling
- [x] Collapse animation is noticeably faster and crisper than expand — no overshoot
- [x] Chevron rotation uses expand spring when opening, collapse spring when closing
- [x] Content fade-in is offset 30ms after height animation begins
- [x] Rapid double-toggle within 200ms results in only the final state — no overlapping animations
- [x] Animation tokens are centralized in `CollapsibleAnimationTokens` enum
- [x] Expand feels "breathe open"; collapse feels "snap shut" — distinct emotional characters
- [x] All 20 panel instances use the centralized animation tokens

---

## E4: Contextual Theming & Identity

> **Goal:** Give each collapsible section a distinct visual personality that reinforces its content's meaning — without breaking the unified glass system. Just as `GameHeaderTheme` gives Flashcards/Grammar/WordBuilder distinct color identities, collapsible sections should express their context through color, iconography, and subtle visual treatments.

### Story 4.1 — Section Theme Registry

**As a** developer adding or modifying collapsible sections,  
**I want** a centralized theme registry that defines each section's visual identity,  
**So that** I never have to manually specify gradient colors, icons, and accent treatments at each call site.

**Context:** Today, every `CollapsibleSection` call site manually specifies `icon:`, `colors:`, and `subtitle:`. JourneyView has 13 instances with 13 different color pairs, all inline. This is error-prone — if we want to change the milestones section's color palette, we change it in one place; if milestones also appears on Dashboard, we need to remember to change it there too. A theme registry centralizes identity.

#### Subtasks

- **4.1.1** — Create `CollapsibleSectionTheme` struct with properties: `icon: String`, `gradientColors: [Color]`, `accentColor: Color` (derived from `gradientColors[0]`), `category: ThemeCategory` (enum: `.stats`, `.analytics`, `.engagement`, `.utility`, `.danger`)
- **4.1.2** — Create static theme definitions matching current JourneyView usage:
  - `.xpStats` → chart.bar.fill, #667eea → #764ba2
  - `.milestones` → flag.checkered, #667eea → #06b6d4
  - `.gamePerformance` → gamecontroller.fill, #a855f7 → #ec4899
  - `.dailyXP` → chart.bar.xaxis, #f59e0b → #ef4444
  - `.weeklyTrend` → chart.line.uptrend.xyaxis, #10b981 → #06b6d4
  - `.accuracyHeatmap` → square.grid.3x3.fill, #f97316 → #f59e0b
  - `.monthlyReport` → doc.text.fill, #6366f1 → #8b5cf6
  - `.milestonePredictions` → sparkle.magnifyingglass, #ec4899 → #f43f5e
  - `.exportData` → square.and.arrow.up.fill, #14b8a6 → #06b6d4
  - `.learningInsights` → lightbulb.fill, #f59e0b → #fbbf24
  - `.streak` → flame.fill, .orange → #ef4444
  - `.wisdom` → sparkles, #c084fc → #f0abfc
  - `.resetProgress` → arrow.triangle.2.circlepath, .red 0.9 → .red 0.6
  - `.profile` → person.circle.fill, (dynamic from tierManager)
  - `.myPlan` → (dynamic tierIcon), (dynamic tierGradientColors)
  - `.featureComparison` → list.bullet.rectangle.fill, #667eea → #764ba2
  - `.grammarTip` → lightbulb.max.fill, #3b82f6 → #06b6d4
  - `.soundscape` → waveform.circle.fill, (dynamic from soundscape)
- **4.1.3** — Update `CollapsibleSection` to accept `theme: CollapsibleSectionTheme` as an alternative to individual `icon:`/`colors:` parameters — similar to how `GameHeader` accepts `theme: GameHeaderTheme`
- **4.1.4** — Migrate all 20 call sites to use theme references instead of inline color/icon specifications
- **4.1.5** — For dynamic themes (profile, myPlan, soundscape): define factory methods that accept the dynamic data and return a `CollapsibleSectionTheme`

#### Acceptance Criteria

- [ ] `CollapsibleSectionTheme` struct exists with `icon`, `gradientColors`, `accentColor`, `category` properties
- [ ] 18 static theme definitions cover all current `CollapsibleSection` usage
- [ ] 3 dynamic theme factory methods handle tier-dependent and soundscape-dependent themes
- [ ] `CollapsibleSection` accepts `theme:` parameter alongside or instead of `icon:`/`colors:`
- [ ] All 20 call sites use theme references — zero inline color/icon specifications remain
- [ ] Changing a theme definition in one place updates every instance across the app

---

### Story 4.2 — Category-Based Accent Line Patterns

**As a** user scanning JourneyView's 13 collapsible sections,  
**I want** subtle visual grouping cues that help me distinguish stats sections from analytics from engagement,  
**So that** the long list feels organized rather than overwhelming.

**Context:** JourneyView is the densest collapsible section screen — 13 panels in a vertical scroll. Today, the only differentiation is the gradient color of each section's icon and stroke. Users have to read every title to find what they want. Grouping sections by category (stats, analytics, engagement, utility) and giving each category a shared visual accent pattern would create scannable visual rhythm.

#### Subtasks

- **4.2.1** — Define category accent patterns per `ThemeCategory`:
  - `.stats` (XP, Milestones, Streak): solid gradient accent line (current behavior)
  - `.analytics` (Game Performance, Daily XP, Weekly Trend, Accuracy, Monthly Report, Predictions, Insights): dashed accent line pattern (2px dash, 4px gap) — distinguishing analytical sections from primary stats
  - `.engagement` (Wisdom, Export): dotted accent line pattern (1px dot, 3px gap) — lighter feel for optional engagement content
  - `.utility` (Reset): accent line in `.red.opacity(0.5)` — clear danger signal
  - `.danger` (unused currently, reserved for future destructive actions): red gradient accent line with higher opacity
- **4.2.2** — Update the inner divider (Story 1.3.3) to use the category accent pattern — the divider between header and content reinforces the section's category
- **4.2.3** — Add very subtle category-colored left edge indicator: a vertical 2px × full-height bar at the leading edge with category accent color at 0.10 opacity — providing a visual "rail" that groups same-category sections when scanning
- **4.2.4** — Group separators in JourneyView: between groups (e.g., last `.stats` section and first `.analytics` section), use a **28pt spacer** instead of the standard 20pt — creating wider inter-group gaps while keeping standard 20pt spacing within groups. This creates visible "paragraphs" of related sections without explicit dividers
- **4.2.5** — Document category assignments in code comments and ensure new sections get categorized at creation time

#### Acceptance Criteria

- [ ] Stats sections use solid accent lines
- [ ] Analytics sections use dashed accent lines
- [ ] Engagement sections use dotted accent lines
- [ ] Utility/danger sections use red-tinted accent lines
- [ ] Left edge indicator renders at 2px × full-height with category color at 0.10 opacity
- [ ] JourneyView uses 28pt spacing between category groups and standard 20pt within groups
- [ ] Category patterns are subtle enough not to distract but visible enough to aid scanning
- [ ] All 13 JourneyView sections are correctly categorized

---

### Story 4.3 — Tier-Locked Section Visual Treatment

**As a** free-tier user viewing a section I can't access,  
**I want** the locked section to look premium and desirable but clearly gated,  
**So that** I understand what I'm missing and feel motivated to upgrade.

**Context:** Several JourneyView sections are tier-gated: Game Performance (Pro+), Daily XP Chart (Pro+), Weekly Trend (Elite+), Accuracy Heatmap (Elite+), Monthly Report (Royal), Milestone Predictions (Royal), Export Data (Elite+), Learning Insights (Royal). Today, locked sections show the same `CollapsibleSection` chrome but render a lock overlay or message inside. The section header itself gives no visual hint that the content is locked — you have to expand it to discover the gate.

#### Subtasks

- **4.3.1** — Add `isLocked: Bool` parameter to `CollapsibleSection` (default `false`), driven by `tierManager.hasAccess(to:)` at each call site
- **4.3.2** — When locked: reduce glass material opacity to 0.6× standard, apply a desaturation filter (`.saturation(0.4)`) to the gradient colors, and show a miniature lock icon (`lock.fill`, 8pt) overlaying the section icon at bottom-right
- **4.3.3** — When locked: the chevron should render as `lock.fill` instead of `chevron.right` — immediately communicating "this won't open" without the user needing to tap
- **4.3.4** — When locked and tapped: instead of expanding content, briefly flash the border with the tier color required for access (`tierManager.requiredTier(for:)`) and show a toast: "Unlock with {TierName}" — anchored to the tapped section
- **4.3.5** — When locked: the badge (Story 2.4) should show `.icon("lock.fill", tierColor)` regardless of any data badge — the lock takes priority
- **4.3.6** — Subtle "premium veil": locked sections render with a faint frosted veil overlay (white 0.03 dark / black 0.02 light) to distinguish them from unlocked sections at a glance. This is static, not animated — the desaturation + veil communicates "premium but locked" more elegantly than a shimmer animation, which risks feeling gamified rather than luxury
- **4.3.7** — When the user upgrades tier and a section unlocks, play an "unlock" animation: desaturation lifts, lock morphs into chevron, border flashes with tier gradient, glass opacity rises to full — celebrating the unlock moment

#### Acceptance Criteria

- [ ] `CollapsibleSection` accepts `isLocked: Bool` parameter
- [ ] Locked sections show desaturated glass, reduced material opacity, lock overlay on icon
- [ ] Chevron is replaced with `lock.fill` when section is locked
- [ ] Tapping a locked section shows tier-colored flash + "Unlock with {TierName}" toast
- [ ] Badge displays lock icon in tier color when section is locked
- [ ] Frosted veil overlay distinguishes locked sections from unlocked at a glance
- [ ] Unlock animation celebrates tier upgrade with morph + flash + opacity rise
- [ ] All 8 tier-gated JourneyView sections correctly reflect their lock state
- [ ] Lock treatment doesn't cause layout shift — section size is identical locked vs. unlocked

---

### Story 4.4 — Dark/Light Mode Glass Transition

**As a** user switching between dark and light mode,  
**I want** the collapsible panels to transition between their dark and light glass treatments smoothly,  
**So that** the mode change feels like a seamless material shift rather than a paint swap.

**Context:** The app supports both dark and light modes with distinct Caribbean color systems (deep aubergine/plum/orchid in light; white at varying opacities in dark). Glass panels need different material treatments in each mode: light mode uses Caribbean tints and colored borders; dark mode uses `.ultraThinMaterial` at full opacity with white/gradient strokes. Today, mode switching is instant — SwiftUI's default behavior. A deliberate crossfade creates a premium moment.

#### Subtasks

- **4.4.1** — Add `.animation(.easeInOut(duration: 0.4), value: colorScheme)` to the `CollapsibleSection` body — ensuring all glass layers (material, tint, highlight, stroke, shadow) animate during mode change
- **4.4.2** — Verify that the Caribbean tint gradient fades in when switching to light mode and fades out when switching to dark mode — not a hard swap
- **4.4.3** — Stroke border color should crossfade between dark (white-based) and light (lavender-based) palettes
- **4.4.4** — Shadow color should crossfade between dark (black-based) and light (lavender-based) tints
- **4.4.5** — Test on JourneyView with all 13 sections visible — verify that all sections transition simultaneously and uniformly (no staggered/delayed transitions between sections)
- **4.4.6** — Test with the system appearance toggle in Control Center (live transition) and via Settings → Display (app restart) — both paths should look correct

#### Acceptance Criteria

- [ ] All glass layers animate smoothly during dark↔light mode transition
- [ ] Caribbean tint fades in/out smoothly (not a hard swap)
- [ ] Stroke border crossfades between dark and light color palettes
- [ ] Shadows crossfade between dark (black) and light (lavender) tints
- [ ] All visible sections on a screen transition simultaneously — no visible desync
- [ ] Transition duration is 0.4s (matching system convention)
- [ ] Both live toggle and app-restart mode changes render correctly

---

## E5: Haptic & Audio Choreography

> **Goal:** Every collapsible panel interaction must engage touch and hearing alongside sight — creating a multi-sensory premium experience. Haptics and sound effects must be choreographed precisely with animation timing to create a single unified moment.

### Story 5.1 — Haptic Palette for Panel Interactions

**As a** user interacting with collapsible panels,  
**I want** physically appropriate haptic feedback for every interaction type,  
**So that** the panels feel like real mechanical objects — not just visual elements on a screen.

**Context:** Today, haptic usage is inconsistent: `CollapsibleSection` uses `toggleSwitch`, SoundscapeNowPlaying and MembershipView use `buttonPress`, MyPlanCard has no haptics at all. A premium haptic palette differentiates between interaction types: expand has a different feel than collapse; pressing has a different feel than long-press; locking has a different feel than unlocking.

#### Subtasks

- **5.1.1** — Define panel-specific haptic events in `HapticsService`:
  - `.panelExpand`: medium impact feedback (weight: 0.4, sharpness: 0.3) — a soft "opening" feel
  - `.panelCollapse`: light impact feedback (weight: 0.2, sharpness: 0.6) — a crisp "closing" snap
  - `.panelPress`: soft impact (weight: 0.15, sharpness: 0.2) — barely perceptible, just confirming finger contact
  - `.panelLocked`: notification feedback (type: .warning) — a clear "nope" that communicates the section is inaccessible
  - `.panelUnlock`: notification feedback (type: .success) followed 150ms later by medium impact (weight: 0.5, sharpness: 0.4) — a two-beat "celebration" pattern
- **5.1.2** — Replace current `toggleSwitch` calls in `CollapsibleSection` with directional haptics: `.panelExpand` when opening, `.panelCollapse` when closing — not the same haptic for both directions
- **5.1.3** — Add `.panelPress` haptic to the press state of `CollapsibleHeaderButtonStyle` (fires on touch-down, not touch-up)
- **5.1.4** — Add `.panelLocked` haptic when user taps a tier-locked section (Story 4.3.4)
- **5.1.5** — Add `.panelUnlock` haptic for the unlock celebration (Story 4.3.7)
- **5.1.6** — All haptics should be gated by the user's sound settings (respect `UserProfile` sound preferences — if haptics are disabled, skip all panel haptics)

#### Acceptance Criteria

- [ ] 5 distinct panel haptic events defined in `HapticsService`
- [ ] Expand and collapse have different haptic signatures (expand is softer, collapse is crisper)
- [ ] Press haptic fires on touch-down (not touch-up) — providing immediate finger-contact feedback
- [ ] Locked-panel tap produces warning notification haptic
- [ ] Unlock celebration produces two-beat success + impact haptic
- [ ] All haptics respect user's sound/haptic preferences
- [ ] Haptic timing is synchronized with animation start frames (no perceptible delay)
- [ ] All 20 panel instances use the correct directional haptic

---

### Story 5.2 — Panel Audio Signatures

**As a** user expanding premium glass panels,  
**I want** a subtle, satisfying audio signature that reinforces the glass material metaphor,  
**So that** the panels sound as premium as they look.

**Context:** Only `MembershipView` currently plays audio on expand (`playPanelExpand()`). The rest of the app's panels are silent. Given that the app has a rich sound synthesis engine (`AudioService`) with Wood/Bell/Glass waveform families, Petal/Dew/Spark textures, and chord generation — we should leverage this for panel sounds. The key constraint: panel sounds must be ultra-short (50-100ms), ultra-subtle (low volume), and never annoying. They should feel like the natural acoustic consequence of a glass surface opening/closing — not an alert or notification.

#### Subtasks

- **5.2.1** — Define panel audio events in `AudioService`:
  - `.panelExpand`: Glass waveform, Dew texture, pitch C5 (523Hz), 80ms duration, volume 0.08 — a tiny crystalline "tink" as the glass surface opens
  - `.panelCollapse`: Glass waveform, Spark texture, pitch G4 (392Hz), 60ms duration, volume 0.06 — a slightly lower, shorter "tick" as the glass closes
  - `.panelExpandHero`: Glass waveform, Petal texture, chord C4+E4 (2 notes), 120ms duration, volume 0.10 — a slightly richer sound for hero-style panels (Dashboard header, etc.)
  - `.panelLocked`: Wood waveform, Spark texture, pitch A3 (220Hz), 50ms, volume 0.05 — a muted "thunk" for locked panels
- **5.2.2** — Generate and cache all panel sounds during `AudioService.prewarmSounds()` — zero runtime generation
- **5.2.3** — Wire `.panelExpand`/`.panelCollapse` to `CollapsibleSection` expand/collapse — sound plays 10ms after haptic (haptic leads, sound follows — matching physical reality where you feel impact before hearing it)
- **5.2.4** — Wire `.panelExpandHero` to `.hero` and `.miniPlayer` style sections
- **5.2.5** — Wire `.panelLocked` to locked-section tap
- **5.2.6** — All panel sounds respect user's sound settings (mute when `isSoundEnabled == false`)
- **5.2.7** — **Audio fatigue guard**: after 3 panel sounds within 2 seconds, suppress subsequent panel sounds for 1.5 seconds. This prevents the "13 tinks in a row" scenario when a user explores JourneyView by rapidly expanding sections. The cooldown resets when no panel interaction occurs for 1.5s
- **5.2.8** — Include panel sounds in the Sound Settings preview carousel so users can audition them

#### Acceptance Criteria

- [ ] 4 panel audio events defined in `AudioService` using existing synthesis engine
- [ ] Expand sound is a crystalline 80ms C5 Glass/Dew "tink"
- [ ] Collapse sound is a shorter 60ms G4 Glass/Spark "tick"
- [ ] Hero expand sound is a 120ms C4+E4 Glass/Petal chord
- [ ] Locked sound is a muted 50ms A3 Wood/Spark "thunk"
- [ ] All sounds are pre-cached in `prewarmSounds()` — zero runtime generation
- [ ] Sound plays 10ms after haptic on every panel interaction
- [ ] All sounds respect user mute settings
- [ ] Panel sounds appear in Sound Settings preview carousel
- [ ] Audio fatigue guard suppresses sounds after 3 interactions within 2 seconds — no "machine gun tinking" when exploring
- [ ] Sounds are imperceptibly quiet (volume 0.05–0.10) — noticed subconsciously, never annoying

---

### Story 5.3 — Choreographed Multi-Sensory Timeline

**As a** user expanding a collapsible panel,  
**I want** the visual animation, haptic feedback, and audio to be precisely synchronized into one cohesive moment,  
**So that** the interaction feels like a single physical event rather than three separate system responses.

**Context:** Premium devices create magic through precise multi-sensory synchronization. Apple's keyboard haptic feedback is timed to within 3ms of the visual key press. We need the same precision: haptic → audio → visual animation → content reveal should form a scripted timeline, not independent concurrent events.

#### Subtasks

- **5.3.1** — Define the expand timeline:
  - T+0ms: Haptic fires (`.panelExpand`)
  - T+10ms: Audio plays (`.panelExpand` or `.panelExpandHero`)
  - T+0ms: Press animation releases (shadow rises, scale returns to 1.0×)
  - T+20ms: Height animation begins (container grows)
  - T+50ms: Content fade-in starts (30ms after height, per Story 3.5.4)
  - T+90ms: Staggered reveal begins for child content (40ms after fade-in start)
- **5.3.2** — Define the collapse timeline:
  - T+0ms: Haptic fires (`.panelCollapse`)
  - T+10ms: Audio plays (`.panelCollapse`)
  - T+0ms: Content fades out instantly (opacity → 0)
  - T+30ms: Height animation begins (container shrinks)
  - T+30ms: Shadow reduces to collapsed depth
  - T+30ms: Chevron rotation begins (collapse spring)
- **5.3.3** — Define the locked-tap timeline:
  - T+0ms: Haptic fires (`.panelLocked`)
  - T+10ms: Audio plays (`.panelLocked`)
  - T+0ms: Border flashes with tier color (peak at T+100ms)
  - T+100ms: "Unlock with {Tier}" toast appears
  - T+2000ms: Toast fades out
- **5.3.4** — Implement a `PanelInteractionCoordinator` that executes these timelines using `DispatchQueue.main.asyncAfter` — centralizing all timing logic rather than spreading delays across view code
- **5.3.5** — Add developer debug mode: when `#if DEBUG` and an environment flag is set, render a translucent timeline overlay on expanding panels showing T+Nms markers for each event — useful for tuning timing
- **5.3.6** — Verify timeline execution on a real device (haptic timing is unreliable on Simulator) — all events should feel like one moment, not a sequence

#### Acceptance Criteria

- [ ] Expand timeline: haptic → audio (10ms) → height (20ms) → content (50ms) → stagger (90ms)
- [ ] Collapse timeline: haptic → audio (10ms) → content fade (0ms) → height shrink (30ms)
- [ ] Locked-tap timeline: haptic → audio → border flash → toast (100ms) → toast fade (2000ms)
- [ ] `PanelInteractionCoordinator` centralizes all timeline execution
- [ ] DEBUG timeline overlay available via environment flag
- [ ] On physical device: all sensory events feel like one unified interaction moment
- [ ] Timeline precision is ≤15ms variance from specification (accounting for frame alignment)

---

## E6: Accessibility, Performance & Edge Cases

> **Goal:** A premium product is not premium if it excludes anyone or falls apart under stress. Every collapsible panel must be fully accessible, performant under load, and resilient to edge cases. This epic is the difference between "looks nice" and "built to last."

### Story 6.1 — Full VoiceOver & Dynamic Type Support

**As a** VoiceOver user navigating collapsible panels,  
**I want** every panel to be fully announced with its state, content summary, and available actions,  
**So that** the premium experience extends to all users regardless of ability.

**Context:** SwiftUI provides baseline VoiceOver support for `Button` and toggle actions, but our custom `CollapsibleSection` likely has gaps: badge content may not be announced, staggered reveal timing may confuse VoiceOver, locked state messaging may be missing, and the multi-sensory timeline (audio + haptic) needs accessibility alternatives.

#### Subtasks

- **6.1.1** — Audit current `CollapsibleSection` VoiceOver behavior: verify that section title, collapsed/expanded state, and action ("double-tap to expand/collapse") are correctly announced. Fix any gaps.
- **6.1.2** — Add `.accessibilityLabel` that includes: section title + collapsed/expanded state + badge content (if present). Example: "Milestones — 5 completed — collapsed — double-tap to expand"
- **6.1.3** — Add `.accessibilityHint` for locked sections: "This section requires {TierName} membership" — so users know before tapping
- **6.1.4** — For staggered content reveal (Story 3.1): when VoiceOver is active, disable stagger and reveal all content simultaneously — staggered timing confuses VoiceOver's focus navigation
- **6.1.5** — Add `.accessibilityValue` that reads badge content: count ("5 items"), progress ("75 percent complete"), or status ("locked")
- **6.1.6** — Support Dynamic Type: all header text, badge text, and content must scale with the user's preferred text size. Test at accessibility sizes (xxxLarge through AX5)
- **6.1.7** — At the largest Dynamic Type sizes (AX3+): convert the horizontal header layout (icon | title | badge | chevron) to a vertical stack (icon + title above, badge + chevron below) to prevent truncation
- **6.1.8** — Test with Voice Control ("show names", "tap Milestones") — verify all panels are voice-targetable by their title text

#### Acceptance Criteria

- [ ] VoiceOver announces: title, collapsed/expanded state, badge content, available action
- [ ] Locked sections announce unlock requirement in `.accessibilityHint`
- [ ] Staggered reveal is disabled when VoiceOver is active
- [ ] `.accessibilityValue` reads badge content (count, progress, status)
- [ ] All text scales with Dynamic Type up to AX5
- [ ] Header layout reflows to vertical at AX3+ text sizes — no truncation
- [ ] Voice Control can target every panel by its title
- [ ] No VoiceOver focus traps or unannounced elements in any panel state

---

### Story 6.2 — Performance Budget for 13+ Simultaneous Panels

**As a** user scrolling JourneyView with 13 collapsible sections,  
**I want** the page to maintain 60fps with butter-smooth scrolling,  
**So that** the premium visual treatments never come at the cost of responsiveness.

**Context:** JourneyView is the stress test: 13 `CollapsibleSection` instances, each with `.ultraThinMaterial` backgrounds, gradient strokes, dual shadows, breathing effects (Story 3.3), and potentially staggered content reveals. `.ultraThinMaterial` is GPU-expensive (real-time blur). 13 simultaneous blur layers during scroll is a real performance concern, especially on older devices (iPhone 12, iPhone SE 3).

#### Subtasks

- **6.2.1** — Establish performance baseline: measure frame time on iPhone 15 Standard (Simulator + real device) with all 13 JourneyView sections visible. Target: <8ms per frame (120fps capable) with all sections collapsed; <12ms per frame with 3 sections expanded (60fps guaranteed)
- **6.2.2** — Implement lazy rendering: sections more than 2 viewport-heights off-screen should use a lightweight placeholder (solid color card, no material blur) instead of full glass treatment. Swap to full glass when approaching the viewport. Use `LazyVStack` if not already used, or implement manual visibility tracking with a `GeometryReader` scroll-offset check
- **6.2.3** — When Reduce Motion is enabled: disable all continuous animations (breathing effect, shimmer, border rotation) — rendering each section as a static card, which is significantly cheaper
- **6.2.4** — Breathing effect (Story 3.3) performance guard: if the frame callback detects >16ms frame time for 3 consecutive frames, automatically disable breathing effects until the next scroll stop. Re-enable 500ms after scroll settles
- **6.2.5** — Profile expanded content: ensure staggered reveal doesn't cause compound animation load. If 3+ sections are expanded simultaneously, cap concurrent stagger animations to 2 sections — additional sections reveal without stagger
- **6.2.6** — Test on minimum supported device (iPhone 12 / A14 Bionic): all 13 sections must scroll at 60fps with up to 2 sections expanded

#### Acceptance Criteria

- [ ] Frame time <8ms with 13 collapsed sections on iPhone 15 (target: 120fps capable)
- [ ] Frame time <12ms with 3 expanded sections (target: 60fps guaranteed)
- [ ] Off-screen sections (>2 viewport-heights away) use lightweight placeholder rendering
- [ ] Reduce Motion disables all continuous animations for static card rendering
- [ ] Breathing effects auto-disable during frame drops (>16ms for 3 frames), re-enable on scroll stop
- [ ] Concurrent stagger animations capped at 2 sections — prevents animation overload
- [ ] iPhone 12 / A14 Bionic maintains 60fps with all 13 collapsed + 2 expanded sections
- [ ] No Instruments "Hitch" warnings during normal JourneyView scrolling usage

---

### Story 6.3 — State Persistence & Restoration

**As a** user returning to a screen I previously visited,  
**I want** my collapsed/expanded preferences to be remembered,  
**So that** I don't have to re-expand the same sections every time I navigate away and back.

**Context:** Today, all `CollapsibleSection` collapsed states are `@State` variables — they reset to their defaults every time the view appears. JourneyView starts with all sections expanded (`isCollapsed = false`) except Reset Progress (`true`). If a user carefully collapses sections they don't need and then navigates to a game and back, everything resets to expanded. This is a significant usability frustration for power users who curate their view.

#### Subtasks

- **6.3.1** — Persist collapsed state to `UserDefaults` (or `@AppStorage`) using a key pattern: `"collapsed_{sectionThemeId}"` — where `sectionThemeId` is derived from the theme registry (Story 4.1). Example: `"collapsed_milestones"`, `"collapsed_streak"`, `"collapsed_profileHeader"`
- **6.3.2** — Replace all `@State private var is{Section}Collapsed` declarations in JourneyView with `@AppStorage("collapsed_{id}")` bindings
- **6.3.3** — Replace all `@State private var is{Section}Collapsed` declarations in ProfileView with `@AppStorage` bindings
- **6.3.4** — First-launch defaults: all sections expanded *except* Reset Progress (collapsed), maintaining current behavior for new users
- **6.3.5** — Add a "Reset Layout" action in JourneyView's toolbar (or long-press on the page title) that restores all sections to default expanded state — clearing all persisted collapsed preferences for that screen
- **6.3.6** — State restoration should be immediate on view appear — no visible flash of expanded-then-collapsed as persisted state is read. Use `@AppStorage` initial value as the compile-time default to prevent this flash
- **6.3.7** — Test across app restart: collapse 5 sections, force-quit app, relaunch, verify collapsed state is preserved
- **6.3.8** — iCloud sync consideration: if app uses iCloud KVS (Key-Value Store) for settings, collapsed states should sync across devices. If not currently using iCloud KVS, document this as a future enhancement only (do not add iCloud dependency in this story)

#### Acceptance Criteria

- [ ] Collapsed/expanded state persists in `@AppStorage` per section
- [ ] Key pattern: `"collapsed_{sectionThemeId}"` — 15 unique keys for JourneyView + 2 for ProfileView
- [ ] First launch: all expanded except Reset Progress
- [ ] "Reset Layout" action available that restores default state
- [ ] No visible flash on view appear — persisted state loads before first render
- [ ] State survives app termination and relaunch
- [ ] iCloud sync documented as future enhancement (not implemented in this story)
- [ ] Each `@AppStorage` key is namespaced to prevent collisions with other settings

---

### Story 6.4 — Edge Cases & Defensive Resilience

**As a** user encountering unusual conditions,  
**I want** collapsible panels to degrade gracefully rather than breaking,  
**So that** the premium experience is maintained even in edge-case scenarios.

**Context:** Premium software is defined by how it handles the unhappy path. Every collapsible panel assumption could be violated: empty content, extremely long content, interrupted animations, system memory pressure, simultaneous interaction from multiple gestures. This story catalogs and defends against these edge cases.

#### Subtasks

- **6.4.1** — **Empty content**: If `CollapsibleSection`'s content closure returns zero-height content (empty data, failed load), show a graceful placeholder inside the expanded card: a centered "No data yet" message using the section's accent color, with a relevant SF Symbol. Never show an expanded card with empty white space.
- **6.4.2** — **Extremely long content**: If expanded content exceeds 3× viewport height, add a `.frame(maxHeight: UIScreen.main.bounds.height * 2)` clipped viewport with a "Show all" button that removes the cap — preventing a single section from dominating the scroll space
- **6.4.3** — **Animation interruption**: If user taps to expand then immediately taps again before the animation completes, the debounce (Story 3.5.5) should handle this. Additionally: if the user performs a navigation (back button, tab switch) during a mid-expand animation, ensure the animation completes in the background without crashing or leaving state inconsistent. Use `Task` cancellation checks if any `async` code is involved.
- **6.4.4** — **Memory pressure**: When receiving `UIApplication.didReceiveMemoryWarningNotification`, collapse all expanded sections except the topmost visible one using a smooth 0.3s animation (not instant — sudden collapse while reading feels like a bug). Show a brief translucent toast at top: "Optimizing performance…" that fades after 1.5s. Log a diagnostic message for debugging
- **6.4.5** — **Rotation / size class change**: If device rotates or enters split-screen (iPad), all expanded content should reflow smoothly. The `.hero` style header should adapt to horizontal size class (`.regular` → wider layout with side-by-side stats; `.compact` → stacked layout). Test iPad Stage Manager with multiple window sizes.
- **6.4.6** — **Right-to-Left (RTL) languages**: Verify chevron rotation direction is correct in RTL layout (still right → down-ish, matching system conventions). Verify accent line gradient direction flips. Verify badges appear at the correct trailing edge.
- **6.4.7** — **Reduced Transparency**: When `UIAccessibility.isReduceTransparencyEnabled` is true, replace `.ultraThinMaterial` with a solid opaque background (`Color(.systemBackground).opacity(0.95)` with accent tint) — ensuring readability for users who need high contrast

#### Acceptance Criteria

- [ ] Empty content shows a graceful placeholder with icon + message — never empty white space
- [ ] Content exceeding 3× viewport height is capped with a "Show all" escape hatch
- [ ] Animation interruption (rapid toggle, navigation during animation) never crashes or leaves inconsistent state
- [ ] Memory pressure collapses all but the topmost expanded section
- [ ] Rotation and size class changes reflow expanded content smoothly
- [ ] RTL layout: chevron, accent line, badges, and content all render correctly mirrored
- [ ] Reduced Transparency: opaque background replaces material blur — fully readable

---

### Story 6.5 — Swipe-to-Collapse Gesture

**As a** user with an expanded section,  
**I want** to swipe down on the expanded content to collapse the panel,  
**So that** closing feels as natural and physical as swiping down a sheet — not limited to finding and tapping the header.

**Context:** Modern iOS apps (Apple Maps, Apple Music, Reminders) let users dismiss expanded content with a swipe-down gesture. Our collapsible panels require the user to scroll back up and tap the header to close — especially painful for sections with long expanded content where the header has scrolled off-screen. A swipe-down gesture on expanded content is the single highest-impact interaction improvement missing from this spec.

#### Subtasks

- **6.5.1** — Add a `DragGesture(minimumDistance: 20)` on expanded content that tracks vertical downward movement. When the user drags down >60pt, trigger collapse. Below 60pt, rubber-band the content back to its resting position with `.spring(response: 0.25, dampingFraction: 0.85)`
- **6.5.2** — During the drag, the expanded content should translate downward following the finger, while the glass card's height compresses proportionally — creating a "pushing the panel closed" feel
- **6.5.3** — At the 60pt threshold, provide a subtle `impactOccurred(.light)` haptic as a "threshold crossed" indicator — the user feels when they've dragged far enough to commit
- **6.5.4** — If the user lifts their finger before the 60pt threshold, spring the content back to its expanded position (rubber-band). If they lift after the threshold, complete the collapse animation from the current drag position
- **6.5.5** — The swipe gesture should only activate when the expanded content's `ScrollView` (if any) is at its top — don't hijack nested scrolling. Use `UIScrollView.contentOffset.y == 0` check or `ScrollViewReader` position tracking
- **6.5.6** — Visual indicator: when expanded, show a tiny 20×3pt pill handle at the top of the content area (centered, `caribbeanMist.opacity(0.25)`) — the universal "draggable" affordance. This handle should be visible but not intrusive

#### Acceptance Criteria

- [ ] Swipe down >60pt on expanded content collapses the panel
- [ ] Swipe <60pt rubber-bands back to expanded position
- [ ] Content translates with finger during the drag — physically responsive
- [ ] Threshold haptic fires at 60pt to confirm "will collapse on release"
- [ ] Nested scroll views are not hijacked — swipe only activates at scroll top
- [ ] Drag handle pill (20×3pt) renders at top of expanded content area
- [ ] Collapse from swipe uses the same collapse spring and timeline as tap-collapse
- [ ] All 20 panel instances support swipe-to-collapse

---

### Story 6.6 — Collapse All / Expand All Bulk Actions

**As a** user navigating JourneyView with 13 collapsible sections,  
**I want** a way to collapse or expand all panels at once,  
**So that** I can quickly reset the view or survey everything without tapping 13 times.

**Context:** JourneyView is the densest collapsible-panel screen — 13 sections. A user who has expanded 6 sections to explore their stats and now wants to collapse everything must tap 6 headers individually. Power users develop muscle memory for bulk actions. Premium apps like Apple Notes (collapse all folders) and Things 3 (collapse all projects) provide this. The absence of a bulk action makes a 13-section view feel tedious rather than empowering.

#### Subtasks

- **6.6.1** — Add a toolbar button at the top-right of JourneyView (and ProfileView): a subtle icon (SF Symbol `rectangle.compress.vertical` for collapse-all, `rectangle.expand.vertical` for expand-all) that toggles between the two states based on current view state
- **6.6.2** — State logic: if >50% of sections are expanded, show "collapse all" icon; if ≤50% are expanded, show "expand all" icon — adapting to the majority state
- **6.6.3** — Collapse-all animation: sections collapse with a 30ms stagger from top to bottom — a satisfying cascading "folding" motion rather than all collapsing simultaneously (which feels abrupt)
- **6.6.4** — Expand-all animation: sections expand with a 30ms stagger from top to bottom — a "blooming" cascade
- **6.6.5** — Collapse-all should skip locked sections (don't animate sections that can't expand)
- **6.6.6** — Long-press on any section header reveals a context menu with "Collapse All" and "Expand All" options — discoverable alternative to the toolbar button
- **6.6.7** — Haptic: single `.mediumImpact` at the start of the cascade — one satisfying thud for the bulk action, not 13 individual haptics

#### Acceptance Criteria

- [ ] Toolbar button toggles between collapse-all and expand-all based on majority state
- [ ] Collapse-all cascades top-to-bottom with 30ms stagger per section
- [ ] Expand-all cascades top-to-bottom with 30ms stagger per section
- [ ] Locked sections are skipped during expand-all
- [ ] Long-press context menu offers "Collapse All" / "Expand All"
- [ ] Single haptic for bulk action (not per-section)
- [ ] Both JourneyView and ProfileView support bulk actions
- [ ] Scroll position remains stable during cascade (no jitter)

---

### Story 6.7 — Smart First-Run Progressive Disclosure

**As a** first-time user seeing JourneyView for the first time,  
**I want** only the most relevant sections expanded by default,  
**So that** I'm not overwhelmed by 13 open panels and can discover content at my own pace.

**Context:** Story 6.3's default is "all sections expanded except Reset Progress." But 12 expanded sections is a massive information dump for a new user who has no data yet. Empty panels with "No data yet" placeholders are demotivating. A smarter default: only expand sections that have meaningful content for the user's current state, and progressively reveal more as they generate data.

#### Subtasks

- **6.7.1** — Define "first-run defaults" that replace the current "all expanded" default: on first JourneyView visit (no persisted `@AppStorage` keys exist), expand only `xpStats`, `milestones`, and `streak` — the three sections that always have data even for a brand-new user (0 XP, 0 milestones, 0-day streak are valid states)
- **6.7.2** — All other sections start collapsed with their summary badges visible — users can see what's available and expand at will
- **6.7.3** — "Smart expand" trigger: when a section's data becomes non-empty for the first time (e.g., user completes their first game → Game Performance gets data), auto-expand that section on the next JourneyView visit with a brief "New!" accent pulse on its badge. This is a one-time notification per section
- **6.7.4** — The "New!" pulse: the section's badge glows with the accent color at 0.4 opacity, pulsing once over 1.2s, then settling to normal. Accompanied by a single `.lightImpact` haptic to draw attention
- **6.7.5** — Track "section has been seen expanded" per section in `@AppStorage` — the "New!" pulse only fires if the user hasn't previously expanded that section. Once seen, it never fires again
- **6.7.6** — This progressive disclosure only applies on first install. If the user has existing `@AppStorage` collapsed-state keys, respect those (Story 6.3 takes precedence)

#### Acceptance Criteria

- [ ] First visit: only xpStats, milestones, streak sections are expanded
- [ ] Other sections start collapsed with visible badges
- [ ] "Smart expand" auto-opens sections when they gain data for the first time
- [ ] "New!" accent pulse draws gentle attention to newly-relevant sections
- [ ] Pulse fires only once per section per install — never repeats for seen sections
- [ ] Existing `@AppStorage` collapsed-state keys override first-run defaults
- [ ] New users encounter 3 expanded sections, not 12 — reducing cognitive load by 75%
- [ ] The progressive disclosure creates a sense of "growing" app richness over time

---

### Story 6.8 — Keyboard Navigation (iPad)

**As an** iPad user with a connected keyboard,  
**I want** to navigate between collapsible sections with Tab and toggle them with Space/Enter,  
**So that** the premium experience extends to keyboard-driven workflows.

**Context:** iPads with Magic Keyboards are a significant segment. SwiftUI's `Button` has baseline keyboard focus support, but our custom `CollapsibleHeaderButtonStyle` and complex gesture handling (press feedback, long-press pulse) may interfere with keyboard focus ring rendering and activation. This needs explicit support.

#### Subtasks

- **6.8.1** — Ensure every `CollapsibleSection` header is in the Tab order. Verify that pressing Tab moves focus sequentially through sections in reading order
- **6.8.2** — When a section header is focused (Tab highlight visible): pressing Space or Enter toggles expand/collapse — triggering the full multi-sensory timeline (Story 5.3)
- **6.8.3** — Add keyboard shortcut for bulk actions: ⌘⇧E (Expand All), ⌘⇧C (Collapse All) — keyboard-discoverable via `.keyboardShortcut`
- **6.8.4** — Focused section header should show a subtle focus ring: a 2pt border in the section's accent color at 0.40 opacity outside the existing glass stroke — matching iOS focus ring conventions
- **6.8.5** — Arrow keys: Up/Down arrows move focus between section headers (skipping expanded content for fast navigation). This requires custom `FocusState` management
- **6.8.6** — Test with VoiceOver + keyboard (the combination mode): Tab navigation, Space activation, and VoiceOver announcements should all work together without conflict

#### Acceptance Criteria

- [ ] Tab key navigates sequentially through all section headers
- [ ] Space/Enter toggles expand/collapse on focused section
- [ ] ⌘⇧E expands all, ⌘⇧C collapses all
- [ ] Focus ring renders as accent-colored 2pt border outside glass stroke
- [ ] Arrow keys move between section headers without entering expanded content
- [ ] VoiceOver + keyboard combination works without conflict
- [ ] All keyboard interactions trigger the same haptic/audio timeline as touch

---

### Story 6.9 — Haptic & Audio Fatigue Guards

**As a** user rapidly exploring multiple sections,  
**I want** the app to intelligently reduce sensory feedback intensity during rapid interactions,  
**So that** haptics and sounds feel premium during deliberate use but never become overwhelming during exploration.

**Context:** Story 5.1 defines haptic events, Story 5.2 defines audio events, and Story 5.2.7 adds an audio cooldown. But haptic fatigue is equally important. A user opening 5 sections in quick succession gets 5 haptic pulses in 3 seconds — which starts feeling like a vibrating phone. Luxury interactions are shaped by restraint as much as by presence.

#### Subtasks

- **6.9.1** — **Haptic fatigue guard**: after 3 panel haptic events within 2 seconds, reduce haptic intensity by 50% for subsequent events. After 5 events within 3 seconds, suppress all haptics except `.panelLocked` (which is a user-education signal and should always fire). Reset to full intensity after 2 seconds of no panel interactions
- **6.9.2** — **Audio fatigue guard** (extending Story 5.2.7): during fatigue cooldown, play every other sound (skip alternating events) rather than full silence — maintains subtle audio presence without machine-gun repetition
- **6.9.3** — **Combined choreography during fatigue**: when both haptic and audio are in fatigue mode, the expand/collapse timeline (Story 5.3) should still execute the visual animation at full fidelity — only the sensory channels are dampened
- **6.9.4** — During collapse-all/expand-all cascade (Story 6.6): play only the first and last cascade event's audio/haptic — bookending the cascade rather than playing 13 events
- **6.9.5** — Track interaction velocity as a rolling window (last 5 interactions timestamps) — use this to detect "exploration mode" vs. "deliberate interaction" and adjust feedback intensity smoothly

#### Acceptance Criteria

- [ ] After 3 rapid interactions: haptic intensity drops to 50%
- [ ] After 5 rapid interactions: haptics suppressed (except `.panelLocked`)
- [ ] Audio plays every-other-event during fatigue cooldown (not full silence)
- [ ] Visual animations always play at full fidelity regardless of fatigue state
- [ ] Cascade bulk actions: only first + last event produce audio/haptic
- [ ] Fatigue resets to full intensity after 2 seconds of inactivity
- [ ] Deliberate single interactions (>2s apart) always get full sensory feedback

## Appendix A: Component Architecture

### Proposed `CollapsibleSection` API Surface

```swift
struct CollapsibleSection<Content: View>: View {
    // --- Identity ---
    let theme: CollapsibleSectionTheme      // Centralized theme (Story 4.1)
    
    // --- State ---
    @Binding var isCollapsed: Bool           // External collapse control
    var isLocked: Bool = false               // Tier-lock state (Story 4.3)
    
    // --- Style ---
    var style: CollapsibleStyle = .standard  // .standard, .hero, .miniPlayer, .inline, .tip
    var glassWeight: GlassWeight? = nil      // Override auto-assigned weight (Story 2.1)
    
    // --- Metadata ---
    var subtitle: String? = nil              // Text shown when collapsed
    var badge: CollapsibleBadge? = nil       // Rich summary — migrates position on expand (Story 2.4)
    
    // --- Gestures ---
    var swipeToCollapse: Bool = true         // Enable drag-down-to-collapse (Story 6.5)
    var showDragHandle: Bool = true          // Show 20×3pt pill handle when expanded (Story 6.5)
    
    // --- Customization ---
    var cornerRadius: CGFloat = 18           // Adjusts per style defaults
    
    // --- Content ---
    @ViewBuilder let content: () -> Content
}
```

### Supporting Types

```swift
enum CollapsibleStyle {
    case standard    // Default workhorse — JourneyView sections
    case hero        // Dashboard header — heaviest glass weight
    case miniPlayer  // SoundscapeNowPlaying — compact with audio controls
    case inline      // MembershipView comparison — minimal chrome
    case tip         // GrammarView tip — glass card with lightbulb pulse
}

enum GlassWeight {
    case primary     // Heaviest glass, boldest border, deepest shadow
    case standard    // Default glass weight
    case recessed    // Lighter glass for nested or secondary content
}

struct CollapsibleSectionTheme {
    let id: String              // Persistence key: "milestones", "streak", etc.
    let icon: String            // SF Symbol name
    let gradientColors: [Color] // At least 2 colors
    let category: ThemeCategory
    
    var accentColor: Color { gradientColors[0] }
    
    // Static registry
    static let xpStats = CollapsibleSectionTheme(...)
    static let milestones = CollapsibleSectionTheme(...)
    // ... 16 more static definitions ...
    
    // Dynamic factories
    static func profile(tier: MembershipTier) -> CollapsibleSectionTheme { ... }
    static func soundscape(_ soundscape: Soundscape) -> CollapsibleSectionTheme { ... }
}

enum ThemeCategory {
    case stats       // XP, Milestones, Streak
    case analytics   // Charts, Heatmaps, Reports, Predictions, Insights
    case engagement  // Wisdom quotes, Export
    case utility     // Reset Progress
    case danger      // Reserved for destructive actions
}

enum CollapsibleBadge {
    case count(Int)           // "5" pill badge
    case text(String)         // "Pro" text badge
    case icon(String, Color)  // SF Symbol + color
    case progress(Double)     // 0.0–1.0 mini progress bar
}

enum ProgressBarEffect {
    case flowing     // Animated gradient shift
    case heartbeat   // Pulsing dot at fill edge
    case fireTrail   // Warm glow at fill edge
}

enum CollapsibleAnimationTokens {
    static let expandSpring = Animation.spring(response: 0.40, dampingFraction: 0.72, blendDuration: 0.1)
    static let collapseSpring = Animation.spring(response: 0.30, dampingFraction: 0.88)
    static let revealDelay: TimeInterval = 0.03   // 30ms
    static let debounceInterval: TimeInterval = 0.2 // 200ms
    static let staggerDelay: TimeInterval = 0.04   // 40ms per item
    static let maxStaggerCount = 8
    static let swipeCollapseThreshold: CGFloat = 60 // pt (Story 6.5)
    static let cascadeStagger: TimeInterval = 0.03  // 30ms per section (Story 6.6)
}

/// Manages haptic/audio fatigue to prevent overwhelming rapid interactions (Story 6.9)
@Observable
class SensoryFatigueCoordinator {
    private var recentInteractions: [Date] = []
    
    var hapticIntensity: Double  // 1.0 = full, 0.5 = reduced, 0.0 = suppressed
    var shouldPlayAudio: Bool    // true = play, false = skip (alternating during fatigue)
    
    func recordInteraction() { ... }
    func reset() { ... }
}
```

---

## Appendix B: Implementation Roadmap

### Phase 1 — Foundation (E1)  
**Estimated Scope:** 5 stories, ~25 subtasks

| Priority | Story | Risk | Dependencies |
|----------|-------|------|--------------|
| P0 | 1.1 Consolidate patterns | Medium (wide refactor) | None |
| P0 | 1.2 Unified chevron | Low | Story 1.1 |
| P0 | 1.3 Persistent glass background | Low | Story 1.1 |
| P1 | 1.4 Dual shadow elevation | Low | Story 1.3 |
| P1 | 1.5 Frosted highlight & Caribbean tint | Low | Story 1.3 |

### Phase 2 — Hierarchy & Animation (E2 + E3)  
**Estimated Scope:** 9 stories, ~50 subtasks

| Priority | Story | Risk | Dependencies |
|----------|-------|------|--------------|
| P1 | 2.1 Three-tier glass weight | Low | Story 1.1 |
| P1 | 2.2 Gradient stroke intensity | Low | Story 2.1 |
| P2 | 2.3 Nested panel depth | Medium (environment values) | Story 2.1 |
| P1 | 2.4 Collapsed state badges | Low | Story 1.1 |
| P1 | 3.1 Staggered content reveal | Medium | Story 1.1 |
| P1 | 3.2 Content height pre-measurement | High (layout complexity) | Story 1.1 |
| P2 | 3.3 Glass breathing effect | Low (but performance-sensitive) | Story 1.5 |
| P1 | 3.4 Press & release feedback | Low | Story 1.4 |
| P1 | 3.5 Momentum & overshoot | Low | Story 1.1 |

### Phase 3 — Theming & Multi-Sensory (E4 + E5)  
**Estimated Scope:** 7 stories, ~35 subtasks

| Priority | Story | Risk | Dependencies |
|----------|-------|------|--------------|
| P1 | 4.1 Section theme registry | Low | Story 1.1 |
| P2 | 4.2 Category accent patterns | Low | Story 4.1 |
| P1 | 4.3 Tier-locked visual treatment | Medium (tier integration) | Stories 2.4, 4.1 |
| P2 | 4.4 Dark/light mode transition | Low | Story 1.5 |
| P1 | 5.1 Haptic palette | Low | Story 1.1 |
| P2 | 5.2 Panel audio signatures | Medium (AudioService integration) | Story 5.1 |
| P2 | 5.3 Choreographed timeline | High (timing precision) | Stories 5.1, 5.2, 3.5 |

### Phase 4 — Accessibility & Hardening (E6)  
**Estimated Scope:** 9 stories, ~60 subtasks

| Priority | Story | Risk | Dependencies |
|----------|-------|------|--------------|
| P0 | 6.1 VoiceOver & Dynamic Type | Medium | Stories 2.4, 3.1 |
| P1 | 6.2 Performance budget | High (device-specific tuning) | Stories 3.3, 3.1 |
| P1 | 6.3 State persistence | Low | Story 4.1 |
| P1 | 6.4 Edge case resilience | Medium (many scenarios) | All previous stories |
| P1 | 6.5 Swipe-to-collapse gesture | Medium (gesture conflict avoidance) | Story 1.1 |
| P1 | 6.6 Collapse/Expand all bulk actions | Low | Stories 6.3, 5.1 |
| P2 | 6.7 Smart first-run progressive disclosure | Low | Stories 6.3, 2.4 |
| P2 | 6.8 Keyboard navigation (iPad) | Medium (focus management) | Story 1.1 |
| P1 | 6.9 Haptic & audio fatigue guards | Low | Stories 5.1, 5.2 |

---

## Appendix C: Visual Reference Matrix

### Glass Treatment Comparison

| Property | Current `CollapsibleSection` | Target (after this spec) | `GlassCardBackground` (reference) |
|----------|------------------------------|--------------------------|-------------------------------------|
| Material | `.ultraThinMaterial` | `.ultraThinMaterial` | `.ultraThinMaterial` |
| Frosted highlight | ❌ None | ✅ White gradient, top→bottom | ✅ White gradient, top→bottom |
| Caribbean tint (light) | ❌ None | ✅ Lavender→Pink→Orange | ✅ Lavender→Pink→Orange |
| Section accent tint | ✅ colors[0] at 0.08 | ✅ colors[0] at 0.08 (on top of Caribbean) | ✅ Optional tintColor at 0.06 |
| Stroke border | ✅ 2-stop gradient, 0.75pt | ✅ Weight-dependent (2→4 stop, 0.5→1.5pt) | ✅ Solid white/lavender, 1pt |
| Shadow (collapsed) | ⚠️ Single: r8, y4 | ✅ Dual: r16+r5, y6+y2 | ✅ Dual: r20+r6, y8+y3 |
| Shadow (expanded) | ❌ None (bg removed) | ✅ Dual: r20+r6, y8+y3 | ✅ Dual: r20+r6, y8+y3 |
| Background in expanded | ❌ Removed | ✅ Persistent unified card | ✅ Always present |
| Press effect | ⚠️ Scale 0.97 + dim 0.85 | ✅ Scale 0.98 + shadow compress + border tighten | N/A (not interactive) |
| Breathing effect | ❌ None | ✅ Subtle highlight shift + border rotation | N/A |

### Animation Timing Reference

| Event | Current | Target |
|-------|---------|--------|
| Expand spring | `(0.35, 0.8)` everywhere | `(0.40, 0.72)` with 2% overshoot |
| Collapse spring | `(0.35, 0.8)` everywhere | `(0.30, 0.88)` — faster, crisper |
| Content reveal | Simultaneous with height | 30ms *after* height begins |
| Stagger delay | N/A (no stagger) | 40ms per child, max 8 children |
| Haptic timing | On toggle (no direction) | Directional: softer expand, crisper collapse |
| Audio timing | None (silent) | 10ms after haptic |

---

## Appendix D: Success Metrics

### Qualitative

- **The "close your eyes" test:** Close your eyes, tap a panel, and judge the quality purely by haptic + sound. The interaction should feel like manipulating a precision mechanical object.
- **The "screenshot" test:** A screenshot of JourneyView with mixed collapsed/expanded sections should look like a Dribbble portfolio piece — layered, hierarchical, and visually rich.
- **The "new user" test:** A first-time user should intuitively understand which panels expand, which are locked, and how important each section is — without reading any text.
- **The "swipe instinct" test:** Hand someone the app without instruction. Within 30 seconds, they should discover that expanded panels can be swiped closed — the handle affordance and physical feedback should make this self-evident.
- **The "rapid explore" test:** Open 6 sections in quick succession. The haptic and sound feedback should feel restrained and elegant, never overwhelming — the fatigue guards should make it feel like the app is intelligently adapting to your pace.
- **The "empty app" test:** Launch the app as a brand-new user with zero data. JourneyView should feel inviting and achievable (3 sections open), not overwhelming (12 empty panels) or barren.

### Quantitative

| Metric | Target |
|--------|--------|
| Bespoke collapse implementations remaining | 0 (all routed through `CollapsibleSection`) |
| Frame time — 13 sections, all collapsed, scroll | <8ms (120fps capable) |
| Frame time — 13 sections, 3 expanded, scroll | <12ms (60fps guaranteed) |
| VoiceOver complete navigation time (JourneyView) | <45 seconds |
| Snapshot test coverage | 10 styles × 2 modes × 3 states (collapsed/expanded/locked) = 60 tests |
| Panel interaction timeline precision | ±15ms from specification |
| Swipe-to-collapse success rate (usability test) | >80% of users discover within 60s |
| Haptic/audio fatigue events suppressed per session | >0 (guard is firing when needed) |
| Keyboard navigation coverage (iPad) | 100% of sections reachable via Tab |
| First-run expanded section count | 3 (down from 12 — 75% cognitive load reduction) |
| User-reported "jank" incidents in panel interactions | 0 per release |

---

*End of specification. Every surface the user touches must feel like precision-crafted glass.*
