# BUGS.md — LumenLingo UX & Quality Defect Backlog

> **Document Owner:** Senior Product Architect  
> **Created:** 16 March 2026  
> **Priority Framework:** P0 (Critical) → P1 (High) → P2 (Medium) → P3 (Low)  
> **Estimation Units:** Story Points (Fibonacci: 1, 2, 3, 5, 8, 13)  
> **Status Legend:** 🔴 Open · 🟡 In Progress · 🟢 Done · ⚪ Blocked  
> **Target:** Every fix must pass the **"Fall-in-Love" UX bar** — users must feel delight, not mere satisfaction.

---

## Table of Contents

| # | Epic | Priority | Stories | Points |
|---|------|----------|---------|--------|
| E1 | [Personalization & Identity](#epic-1-personalization--identity) | P0 | 4 | 21 |
| E2 | [Dark Mode & Theme Polish](#epic-2-dark-mode--theme-polish) | P1 | 3 | 13 |
| E3 | [Accuracy Heatmap UX Overhaul](#epic-3-accuracy-heatmap-ux-overhaul) | P1 | 3 | 13 |
| E4 | [Premium Export Experience](#epic-4-premium-export-experience) | P1 | 4 | 21 |
| E5 | [Membership & Premium Mobile UX](#epic-5-membership--premium-mobile-ux) | P0 | 5 | 26 |
| E6 | [Offline Mode & Debug Infrastructure](#epic-6-offline-mode--debug-infrastructure) | P1 | 4 | 21 |
| E7 | [Tier Transition Animation Polish](#epic-7-tier-transition-animation-polish) | P1 | 3 | 13 |
| E8 | [Profile Page UX Refinement](#epic-8-profile-page-ux-refinement) | P2 | 3 | 13 |
| E9 | [Onboarding Mobile Optimization](#epic-9-onboarding-mobile-optimization) | P0 | 4 | 18 |
| E10 | [Game Completion Flow](#epic-10-game-completion-flow) | P1 | 4 | 18 |
| E11 | [Grammar Challenge UX Overhaul](#epic-11-grammar-challenge-ux-overhaul) | P1 | 5 | 26 |
| E12 | [Recent Activity Cross-Language Support](#epic-12-recent-activity-cross-language-support) | P1 | 3 | 13 |
| E13 | [Word Constructor Polish](#epic-13-word-constructor-polish) | P1 | 3 | 13 |
| E14 | [Royal Paywall Visual Integrity](#epic-14-royal-paywall-visual-integrity) | P0 | 3 | 13 |
| E15 | [Haptic Feedback Integration](#epic-15-haptic-feedback-integration) | P1 | 4 | 18 |
| E16 | [Game Header UX Redesign](#epic-16-game-header-ux-redesign) | P2 | 4 | 18 |
| | **TOTALS** | | **59** | **278** |

---

## Guiding Principles

1. **Identity First** — The user's name is sacred. Show it prominently, spell it correctly, make them feel recognized.
2. **Mobile-Native** — Every screen must be designed for the smallest supported iPhone first. No truncation, no overlap, no scroll-to-find-the-button.
3. **Sensory Delight** — Haptics, animations, and transitions are not decorations — they are the product's pulse. Users should *feel* the app.
4. **Premium Means Premium** — If a user pays, every pixel they interact with must justify that investment. Ugly exports, broken layouts, and invisible buttons are trust-breakers.
5. **Consistency** — Shared patterns (headers, cards, collapsible sections) must be extracted, not copy-pasted. One source of truth, everywhere.

---
---

## Epic 1: Personalization & Identity

**Priority:** P0 — Critical  
**Rationale:** The user's name is the most important word in any language. When the app greets a user during their trial — the most psychologically fragile conversion window — truncating or deprioritizing their name communicates that the app doesn't really *know* them. Additionally, the Total XP panel — the user's primary achievement summary — shows raw numbers without personal context. Both of these fail the "make users feel special" bar.

**Affected Files:**
- `LumenLingo/Views/Dashboard/DashboardView.swift` (dashboardHeader, statsRow)
- `LumenLingo/Models/AppUser.swift` (mock data pattern)
- `LumenLingo/Services/ContentLoader.swift` (profile loading)
- `LumenLingo/ViewModels/` (any dashboard view model)

**Current Behavior:**
- The greeting in `dashboardHeader` shows `"Hello, \(user.firstName)!"` where `user` resolves to `AppUser.mock` — a hardcoded value. The user sees a truncated or generic name instead of their actual profile name.
- The tier icon appears next to the name, but during trial there is no gift/present icon to celebrate the trial period.
- The Total XP stat card in `statsRow` shows a bolt icon + number with no personal attribution — just raw data.
- No celebratory phrasing or personalization elements exist around XP milestones.

---

### Story 1.1: Display Full User Name in Trial Greeting

**ID:** BUG-001  
**Priority:** P0  
**Points:** 5  
**Status:** � Done

**As a** trial user,  
**I want** to see my full name in the greeting (e.g., "Hello, Sebastian!"),  
**So that** I feel personally recognized and valued during my trial period.

#### Acceptance Criteria

- [ ] AC1: The greeting displays the user's actual first name from their profile, not from `AppUser.mock`.
- [ ] AC2: If the profile first name is empty or nil, fall back to a warm generic greeting (e.g., "Welcome back!") — never show blank or "Hello, !" with a trailing space.
- [ ] AC3: The name is never truncated — if it's long (e.g., "Bartholomew"), the layout accommodates it gracefully with `minimumScaleFactor` or multiline support.
- [ ] AC4: The greeting text uses the existing gradient text style and remains visually consistent with the current Dashboard header aesthetic.
- [ ] AC5: All unit tests covering the dashboard header pass with both real profile names and edge cases (empty, nil, very long, Unicode characters).

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 1.1.1 | Audit `dashboardHeader` in `DashboardView.swift` — trace where `user.firstName` is sourced; identify the `AppUser.mock` dependency and determine why the real profile name is not used. | 1h | `DashboardView.swift` |
| 1.1.2 | Replace `AppUser.mock.firstName` with `profile?.firstName ?? ""` (or equivalent real profile binding). Ensure the profile is injected via `@Environment` or `@Bindable` from the parent view. | 2h | `DashboardView.swift`, `ContentView.swift` |
| 1.1.3 | Implement graceful fallback: if `profile?.firstName` is nil or empty, display `L.welcomeBack` (localized). Add localization key if missing. | 1h | `DashboardView.swift`, `Localizable.strings` |
| 1.1.4 | Add `minimumScaleFactor(0.7)` to the name `Text` view and test with names of length 3, 12, 25, and 40 characters to ensure no truncation. | 1h | `DashboardView.swift` |
| 1.1.5 | Write unit tests: greeting with valid name, empty name fallback, nil profile fallback, Unicode name (e.g., "Sébastien"), very long name layout. | 2h | `DashboardTests.swift` |
| 1.1.6 | Manual QA on iPhone SE (smallest screen) and iPhone 16 Pro Max (largest). Verify no text overflow, no layout shifts, and the gradient style is preserved. | 1h | — |

---

### Story 1.2: Reposition Trial Gift Icon After Trial Badge

**ID:** BUG-002  
**Priority:** P1  
**Points:** 3  
**Status:** � Done

**As a** trial user,  
**I want** the gift/present icon to appear after my trial status badge (e.g., "14 days left in your trial 🎁"),  
**So that** the visual hierarchy emphasizes my name first, then my trial status with a celebratory icon.

#### Acceptance Criteria

- [ ] AC1: The present/gift icon (`gift.fill` or `gift.circle.fill`) renders immediately after the trial countdown text, not before or adjacent to the name.
- [ ] AC2: The icon uses the trial tier gradient colors (amber/warm tones) and has a subtle pulse animation (2s cycle, scale 1.0→1.1→1.0) to draw attention without being distracting.
- [ ] AC3: The icon is only visible when `tierManager.currentTier == .trial`. For all other tiers, the icon is hidden.
- [ ] AC4: The layout does not shift or jump when transitioning between trial and non-trial states.
- [ ] AC5: VoiceOver accessibility: the icon is labeled "Trial gift" and is grouped with the trial countdown text.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 1.2.1 | In `dashboardHeader`, locate the trial countdown text (`"\(days) days left in your trial"`) and add a `gift.fill` SF Symbol after it inside the same HStack. | 1h | `DashboardView.swift` |
| 1.2.2 | Style the gift icon: apply trial tier gradient via `.foregroundStyle()`, add `scaleEffect` with repeating spring animation (2s period, amplitude 0.1). | 1h | `DashboardView.swift` |
| 1.2.3 | Wrap icon visibility in `if tierManager.currentTier == .trial` conditional. Verify the icon disappears instantly (no orphan animation) when tier changes. | 30m | `DashboardView.swift` |
| 1.2.4 | Add `.accessibilityLabel("Trial gift")` and `.accessibilityHidden(false)` to the icon. Group with countdown text using `.accessibilityElement(children: .combine)`. | 30m | `DashboardView.swift` |
| 1.2.5 | Test on all 5 tiers (free, pro, elite, royal, trial) — icon should ONLY appear for trial. Capture screenshots for QA review. | 1h | — |

---

### Story 1.3: Personalized Total XP Panel

**ID:** BUG-003  
**Priority:** P1  
**Points:** 5  
**Status:** � Done

**As a** learner,  
**I want** the Total XP panel to include my name and a personalized message,  
**So that** I feel a sense of ownership and pride over my accumulated learning points.

#### Acceptance Criteria

- [ ] AC1: The Total XP stat card displays the user's first name (e.g., "Sebastian's XP" or "Your Total XP, Sebastian").
- [ ] AC2: The XP number uses the existing animated counter with the bolt icon.
- [ ] AC3: When XP exceeds milestone thresholds (100, 500, 1000, 5000, 10000), a subtle celebration badge appears next to the count (e.g., "🌟 Rising Star" at 500, "🔥 On Fire" at 1000, "💎 Legendary" at 10000).
- [ ] AC4: The milestone badge animates in with a spring entrance (0.5s) when the threshold is first crossed.
- [ ] AC5: The personalized name follows the same graceful fallback logic as Story 1.1 (empty/nil → generic "Your").
- [ ] AC6: Dark mode and light mode both render the panel beautifully — no contrast issues, no invisible text.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 1.3.1 | Modify the Total XP `statCard` in `dashboardHeader` to accept and display an optional `userName` parameter. Use format: `"\(name)'s XP"`. | 1h | `DashboardView.swift` |
| 1.3.2 | Define XP milestone thresholds and labels as a static dictionary: `[100: ("🌟", "Rising Star"), 500: ("🔥", "On Fire"), 1000: ("💎", "Legend"), 5000: ("👑", "Master"), 10000: ("🏆", "Immortal")]`. | 30m | `DashboardView.swift` or new `XPMilestones.swift` |
| 1.3.3 | Implement milestone badge: `Text` with the emoji + label, positioned below the XP count, entering with `.transition(.asymmetric(insertion: .scale.combined(with: .opacity), removal: .opacity))`. | 2h | `DashboardView.swift` |
| 1.3.4 | Ensure milestone badge only shows for the highest achieved milestone (not all lower ones). Use `milestones.filter { $0.key <= totalXP }.max(by: { $0.key < $1.key })`. | 30m | `DashboardView.swift` |
| 1.3.5 | Test both color schemes: verify contrast ratio ≥ 4.5:1 for all text against its background in light and dark modes. | 1h | — |
| 1.3.6 | Write tests: milestone badge appears at exact thresholds, disappears below, handles XP = 0, handles nil profile. | 2h | `DashboardTests.swift` |

---

### Story 1.4: Profile Name Source Audit & Hardcoded Mock Removal

**ID:** BUG-004  
**Priority:** P0  
**Points:** 8  
**Status:** � Done

**As a** developer,  
**I want** to eliminate all references to `AppUser.mock` in production view code,  
**So that** every screen that displays a user's name uses the real `UserProfile` from SwiftData.

#### Acceptance Criteria

- [ ] AC1: A codebase-wide search for `AppUser.mock` returns zero results outside of `#if DEBUG`, `PreviewProvider`, and test files.
- [ ] AC2: Every view that previously used `AppUser.mock.firstName` now uses `profile?.firstName` from the SwiftData `UserProfile` model.
- [ ] AC3: The `AppUser.mock` static property still exists for previews and tests but is never referenced in production view bodies.
- [ ] AC4: All views gracefully degrade when `profile` is nil (first launch before profile creation) — showing a loading state or generic greeting.
- [ ] AC5: No regressions in existing tests. All 463+ tests pass.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 1.4.1 | Run `grep -rn "AppUser.mock" --include="*.swift"` across the entire `LumenLingo/` source directory. Document every occurrence with file path and line number. | 30m | All Swift files |
| 1.4.2 | For each occurrence in a non-preview, non-test file: replace `AppUser.mock.firstName` (and any other `.mock` property accesses) with the appropriate `profile?.` access. | 3h | Multiple view files |
| 1.4.3 | Audit each replacement site to ensure `profile` is available in scope (via `@Environment`, `@Query`, or passed as a parameter). Add `@Query` or `@Environment(\.modelContext)` if missing. | 2h | Multiple view files |
| 1.4.4 | Add nil-guard UI: where `profile` is nil, show a `ContentUnavailableView("Loading your profile...", systemImage: "person.crop.circle.badge.clock")` or a shimmer placeholder. | 2h | Multiple view files |
| 1.4.5 | Run the full test suite (`xcodebuild test`). Fix any regressions caused by the mock removal. | 2h | Test files |
| 1.4.6 | Add a CI/CD lint rule or SwiftLint custom rule to flag any new usage of `AppUser.mock` outside of `#if DEBUG` blocks. | 1h | `.swiftlint.yml` |

---
---

## Epic 2: Dark Mode & Theme Polish

**Priority:** P1 — High  
**Rationale:** "Start your adventure" is the single most important call-to-action in the onboarding funnel. If it changes color in dark mode in a way that feels jarring or unfinished, it signals to the user that the app was not designed with care. The light violet background compounds the issue — it clashes with the dark theme's deep tones and creates visual dissonance. The multicolored outer border, however, is beautiful and must be preserved.

**Affected Files:**
- `LumenLingo/Views/LanguageSelection/LanguageSelectionView.swift` (lines 729-748)
- `LumenLingo/Components/Theme/` (any shared theme constants)

**Current Behavior:**
- In dark mode, the "Start your adventure" button text cycles through a Siri-rainbow gradient using `TimelineView` at 30fps with `SiriCloseButton.siriColors`.
- In light mode, the button uses a warm ivory-to-rose gradient (`Color(255,255,240)` → `.white` → `Color(255,200,220)`).
- The background behind the button uses a light violet tint that does not adapt well to dark mode.
- The multicolored outer border (confetti/Siri-style animated gradient) is visually appealing and should remain.

---

### Story 2.1: Stabilize "Start Your Adventure" Button Color in Dark Mode

**ID:** BUG-005  
**Priority:** P1  
**Points:** 5  
**Status:** � Done

**As a** new user in dark mode,  
**I want** the "Start your adventure" button to have a stable, visually stunning appearance that does not shift color unpredictably,  
**So that** I feel confident tapping it and trust the app's design quality.

#### Acceptance Criteria

- [ ] AC1: In dark mode, the button text uses a stable warm white or soft gold color (`#F5F0E8` or `.warmIvory`) — no animated rainbow gradient.
- [ ] AC2: In light mode, the button text uses a deep, readable color (e.g., `caribbeanInk` or dark charcoal) against the warm background — no washed-out pastel text.
- [ ] AC3: The animated multicolored outer border REMAINS in both modes — it provides the visual energy without making the text unreadable.
- [ ] AC4: The button background uses a glassmorphic treatment consistent with the app's design system: `.ultraThinMaterial` with a subtle gradient overlay, not a flat violet fill.
- [ ] AC5: Press feedback: button scales to 0.97x with 0.85 opacity on press (matching `CollapsibleHeaderButtonStyle` pattern).
- [ ] AC6: Tested on iPhone SE (dark), iPhone 16 Pro Max (dark), iPad Mini (dark). No visual regressions.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 2.1.1 | In `LanguageSelectionView.swift`, locate the button definition near line 729. Identify the `TimelineView` that drives the rainbow text gradient. | 30m | `LanguageSelectionView.swift` |
| 2.1.2 | Replace the dark-mode rainbow text gradient with a stable color: `Text(L.startYourAdventure).foregroundStyle(colorScheme == .dark ? Color(hex: "#F5F0E8") : Color.caribbeanInk)`. | 1h | `LanguageSelectionView.swift` |
| 2.1.3 | Preserve the animated rainbow border: ensure the outer `RoundedRectangle` stroke retains its `AngularGradient` with the Siri color cycle from the `TimelineView`. | 30m | `LanguageSelectionView.swift` |
| 2.1.4 | Add `.buttonStyle(AdventureButtonStyle())` with scale/opacity press feedback matching the app's interaction patterns. | 1h | `LanguageSelectionView.swift` |
| 2.1.5 | Capture before/after screenshots in dark mode and light mode for design review. Include iPhone SE and iPhone 16 Pro Max. | 1h | — |
| 2.1.6 | Run UI snapshot tests (if available) or manual QA pass across all supported devices. | 1h | — |

---

### Story 2.2: Fix Light Violet Background Behind CTA

**ID:** BUG-006  
**Priority:** P1  
**Points:** 5  
**Status:** � Done

**As a** user in dark mode,  
**I want** the background behind the "Start your adventure" button to use the app's dark theme palette (deep navy/cosmic tones),  
**So that** the button feels integrated with the rest of the dark mode experience, not like a misplaced light-mode element.

#### Acceptance Criteria

- [ ] AC1: In dark mode, the background behind the CTA area uses a deep gradient (e.g., `#0a0a1a` → `#0d1530`) consistent with the app's cosmic design language — no violet or light purple tints.
- [ ] AC2: In light mode, the background uses a warm, subtle gradient (e.g., very pale lavender → white → pale rose) that complements the button without overpowering it.
- [ ] AC3: The transition between the CTA area background and the surrounding view background is seamless — no hard edges, no visible seam between gradient stops.
- [ ] AC4: The background adapts using `@Environment(\.colorScheme)` — no hardcoded colors that ignore the system theme.
- [ ] AC5: The overall visual weight of the CTA section draws the eye without creating a "floating island" effect.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 2.2.1 | Identify the background modifier applied to the CTA section in `LanguageSelectionView.swift`. Trace the violet color to its source (inline hex, named color, or gradient). | 30m | `LanguageSelectionView.swift` |
| 2.2.2 | Replace with adaptive gradient: `LinearGradient(colors: colorScheme == .dark ? [Color(hex: "#0a0a1a"), Color(hex: "#0d1530")] : [Color(hex: "#FAF5FF"), .white, Color(hex: "#FFF0F5")], startPoint: .top, endPoint: .bottom)`. | 1h | `LanguageSelectionView.swift` |
| 2.2.3 | Add a 40pt vertical padding to the gradient area so it bleeds above and below the button, preventing hard edges where the gradient meets the parent view's background. | 30m | `LanguageSelectionView.swift` |
| 2.2.4 | Test gradient continuity: scroll the language selection list up to the CTA — ensure the background gradient merges smoothly with the list's trailing gradient. | 1h | — |
| 2.2.5 | Verify on all color scheme combinations: light, dark, high contrast light, high contrast dark. | 1h | — |

---

### Story 2.3: Create Theme-Adaptive CTA Button Component

**ID:** BUG-007  
**Priority:** P2  
**Points:** 3  
**Status:** � Done

**As a** developer,  
**I want** a reusable `AdventureCTAButton` component that encapsulates the theme-adaptive styling, animated border, and press feedback,  
**So that** future CTA buttons across the app are consistent and any theme fixes apply everywhere at once.

#### Acceptance Criteria

- [ ] AC1: A new `AdventureCTAButton` view is created in `Views/Shared/` (or `Components/Shared/`).
- [ ] AC2: It accepts a `title: String`, `action: () -> Void`, and optional `icon: String?` (SF Symbol name).
- [ ] AC3: It encapsulates: stable text color (theme-adaptive), animated rainbow border, glassmorphic background, press-feedback button style.
- [ ] AC4: `LanguageSelectionView` uses `AdventureCTAButton` instead of the inline button definition.
- [ ] AC5: The component is documented with a clear `/// Usage:` header comment.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 2.3.1 | Create `AdventureCTAButton.swift` in `Views/Shared/`. Define the public interface: `init(title:icon:action:)`. | 1h | `AdventureCTAButton.swift` |
| 2.3.2 | Extract the rainbow border animation from `LanguageSelectionView` into the new component. Keep the `TimelineView` + `AngularGradient` pattern. | 1h | `AdventureCTAButton.swift`, `LanguageSelectionView.swift` |
| 2.3.3 | Integrate the theme-adaptive text color and background from Stories 2.1 and 2.2 into the component. | 30m | `AdventureCTAButton.swift` |
| 2.3.4 | Replace the inline button in `LanguageSelectionView` with `AdventureCTAButton(title: L.startYourAdventure, icon: "arrow.right") { ... }`. | 30m | `LanguageSelectionView.swift` |
| 2.3.5 | Add SwiftUI Preview with both color schemes side by side. | 30m | `AdventureCTAButton.swift` |

---
---

## Epic 3: Accuracy Heatmap UX Overhaul

**Priority:** P1 — High  
**Rationale:** As users progress, more and more categories reach 100% accuracy. The current flat grid layout renders every category as an equally-sized cell, which means the heatmap grows unboundedly — eventually consuming the entire screen with a sea of green tiles that convey no new information. This is the opposite of data visualization best practice: high-performing categories should be consolidated so the user's attention is drawn to areas that need improvement. The heatmap should be a diagnostic tool, not a trophy wall.

**Affected Files:**
- `LumenLingo/Views/Journey/AccuracyHeatmapView.swift` (119 lines)
- `LumenLingo/Views/Journey/JourneyView.swift` (collapsible section integration)

**Current Behavior:**
- A 2-column `LazyVGrid` renders every category as an individual cell.
- Cells are color-coded: green (≥90%), cyan (≥75%), amber (≥60%), orange (≥40%), red (<40%).
- Sorted by accuracy descending — so all 100% categories stack at the top.
- No grouping, collapsing, or summary row for perfect-score categories.
- A color legend sits at the bottom.
- With 20+ categories at 100%, the grid dominates the scroll view.

---

### Story 3.1: Group 100% Accuracy Categories into a Collapsed Summary

**ID:** BUG-008  
**Priority:** P1  
**Points:** 5  
**Status:** 🔴 Open

**As a** learner with many mastered categories,  
**I want** all 100% accuracy categories to be grouped into a single expandable "Mastered" summary row,  
**So that** the heatmap stays compact and I can focus on categories that still need work.

#### Acceptance Criteria

- [ ] AC1: Categories with exactly 100% accuracy are NOT rendered as individual grid cells by default. Instead, a single "Mastered" summary card appears at the top of the heatmap.
- [ ] AC2: The "Mastered" card displays: a trophy icon (🏆), the count of mastered categories (e.g., "12 Categories Mastered"), and a subtle green-to-gold gradient background.
- [ ] AC3: Tapping the "Mastered" card expands it to reveal all 100% categories in a compact list (category name + session count), with a smooth spring animation (0.35s, damping 0.8).
- [ ] AC4: The expanded list uses a condensed single-column layout (not the 2-column grid) since these categories don't need the full heatmap cell treatment.
- [ ] AC5: When collapsed again, the list contracts with the same spring animation. The collapse state persists within the session but resets between app launches.
- [ ] AC6: If there are 0 mastered categories, the summary card is not shown.
- [ ] AC7: If ALL categories are 100%, the summary card is the only element — with a celebratory message: "Perfect Mastery! You've conquered every category."
- [ ] AC8: Categories with 90-99% accuracy remain as individual grid cells (they are not grouped).

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 3.1.1 | In `AccuracyHeatmapView.swift`, partition the categories into two arrays: `masteredCategories` (accuracy == 100%) and `inProgressCategories` (accuracy < 100%). | 30m | `AccuracyHeatmapView.swift` |
| 3.1.2 | Create a `MasteredSummaryCard` view: trophy icon, count text, green-to-gold gradient `RoundedRectangle` background, chevron indicator for expand/collapse state. | 2h | `AccuracyHeatmapView.swift` |
| 3.1.3 | Add `@State private var isMasteredExpanded = false` to `AccuracyHeatmapView`. Wrap the mastered list in an `if isMasteredExpanded` block with `.transition(.asymmetric(insertion: .move(edge: .top).combined(with: .opacity), removal: .opacity))`. | 1h | `AccuracyHeatmapView.swift` |
| 3.1.4 | When expanded, render mastered categories in a `VStack` with compact rows: `HStack { Text(category) Spacer() Text("\(sessions) sessions").font(.caption) }`. | 1h | `AccuracyHeatmapView.swift` |
| 3.1.5 | Add the "Perfect Mastery" celebratory state: when `inProgressCategories.isEmpty`, show the summary card with confetti-like emoji or sparkle animation. | 1h | `AccuracyHeatmapView.swift` |
| 3.1.6 | Write tests: 0 mastered → no card, 5 mastered + 5 in-progress → card + grid, all mastered → celebratory state, toggle expand/collapse. | 2h | `JourneyTests.swift` |

---

### Story 3.2: Redesign Heatmap Grid Cells for Visual Delight

**ID:** BUG-009  
**Priority:** P2  
**Points:** 5  
**Status:** 🔴 Open

**As a** learner,  
**I want** the heatmap cells to be visually rich and satisfying to look at,  
**So that** tracking my accuracy feels rewarding and motivating, not like reading a spreadsheet.

#### Acceptance Criteria

- [ ] AC1: Each cell uses a glassmorphic card treatment: `.ultraThinMaterial` background with a colored gradient overlay matching the accuracy tier (green/cyan/amber/orange/red).
- [ ] AC2: The accuracy percentage is displayed in a large, bold font (`.title3.bold()`) with a circular progress ring behind it (stroke showing fill level from 0-100%).
- [ ] AC3: The circular progress ring animates from 0% to the actual accuracy on appear with a 0.8s ease-out animation.
- [ ] AC4: The category name appears below the ring in `.caption` font with `.lineLimit(2)` and `minimumScaleFactor(0.7)` to handle long names.
- [ ] AC5: The session count appears as a small badge in the top-right corner of the cell (e.g., "×5").
- [ ] AC6: Cells have a subtle shadow that varies by accuracy tier: high accuracy = warm glow, low accuracy = no glow (drawing attention to what needs work).
- [ ] AC7: The color legend is redesigned to use the same circular ring motif.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 3.2.1 | Create a `HeatmapCell` view that replaces the current inline cell. Parameters: `categoryName: String`, `accuracy: Double`, `sessionCount: Int`, `colorScheme: ColorScheme`. | 1h | `AccuracyHeatmapView.swift` |
| 3.2.2 | Implement the circular progress ring using `Circle().trim(from: 0, to: accuracy / 100)` with a gradient stroke. Add `onAppear` animation (`.easeOut(duration: 0.8)`). | 2h | `AccuracyHeatmapView.swift` |
| 3.2.3 | Apply glassmorphic background: `.background(.ultraThinMaterial, in: RoundedRectangle(cornerRadius: 16))` with a gradient overlay at 20% opacity. | 1h | `AccuracyHeatmapView.swift` |
| 3.2.4 | Add session count badge: `Text("×\(count)")` in a small capsule positioned `.overlay(alignment: .topTrailing)`. | 30m | `AccuracyHeatmapView.swift` |
| 3.2.5 | Implement accuracy-tier shadow: `.shadow(color: tierColor.opacity(accuracy >= 90 ? 0.3 : 0), radius: 8, y: 4)`. | 30m | `AccuracyHeatmapView.swift` |
| 3.2.6 | Redesign color legend with mini circular rings. Use `HStack` with 5 `VStack { Circle().trim(...) Text(label) }` elements. | 1h | `AccuracyHeatmapView.swift` |
| 3.2.7 | Test on iPhone SE (2-column grid must not truncate text), iPad (consider 3-column on wider screens). | 1h | — |

---

### Story 3.3: Adaptive Grid Column Count

**ID:** BUG-010  
**Priority:** P2  
**Points:** 3  
**Status:** 🔴 Open

**As a** user on a larger device,  
**I want** the heatmap grid to use more columns on wider screens,  
**So that** the available space is utilized efficiently and I don't have excessive whitespace.

#### Acceptance Criteria

- [ ] AC1: On iPhone (compact width): 2 columns.
- [ ] AC2: On iPhone landscape or larger iPhone Pro Max (regular width): 3 columns.
- [ ] AC3: On iPad: 4 columns.
- [ ] AC4: Column count is determined by `GeometryReader` or `@Environment(\.horizontalSizeClass)`, not hardcoded.
- [ ] AC5: The grid adjusts smoothly on device rotation without layout jumps.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 3.3.1 | Replace the hardcoded `columns = [GridItem(.flexible()), GridItem(.flexible())]` with a computed property that reads `horizontalSizeClass` and `GeometryReader` width. | 1h | `AccuracyHeatmapView.swift` |
| 3.3.2 | Define breakpoints: `< 400pt` → 2 columns, `400-700pt` → 3 columns, `> 700pt` → 4 columns. | 30m | `AccuracyHeatmapView.swift` |
| 3.3.3 | Test on iPhone SE, iPhone 16 Pro Max, iPad Mini, iPad Pro 12.9". Verify no layout breaks at each breakpoint. | 1h | — |
| 3.3.4 | Animate column transitions on rotation using `.animation(.spring(duration: 0.3), value: columnCount)`. | 30m | `AccuracyHeatmapView.swift` |

---
---

## Epic 4: Premium Export Experience

**Priority:** P1 — High  
**Rationale:** The PDF export is a Royal/Trial-exclusive feature — meaning it's gated behind the highest tier. When a Royal-tier user generates a learning report, they expect a document that reflects the premium they paid for. The current export uses raw `UIGraphicsPDFRenderer` with basic text placement on a US Letter page — no branding, no visual hierarchy, no design system integration. It looks like a receipt from a 2005 government website, not a product a user would proudly share or save. The fix: generate PDF exports that use the same beautiful card-based design language as the tier transition celebration cards.

**Affected Files:**
- `LumenLingo/Views/Journey/ExportDataWidget.swift` (export UI)
- `LumenLingo/Services/DataExporter.swift` (PDF generation logic)
- `LumenLingo/Views/Membership/TierUpgradeCelebrationView.swift` (reference for card design)

**Current Behavior:**
- `DataExporter.swift` creates a US Letter PDF using `UIGraphicsPDFRenderer`.
- Content: plain title "LumenLingo Learning Report", summary stats (total sessions, XP, accuracy, time), game type breakdown, accuracy bar chart.
- No brand colors, no gradients, no cards, no personality.
- Exported via `UIActivityViewController`.
- The `ExportDataWidget.swift` shows format selection buttons (CSV, JSON, PDF) in a simple VStack.
- Export formats are tier-gated: Elite = CSV only; Royal/Trial = CSV + JSON + PDF.

---

### Story 4.1: Redesign PDF Report with Premium Card Layout

**ID:** BUG-011  
**Priority:** P1  
**Points:** 8  
**Status:** 🔴 Open

**As a** Royal-tier user,  
**I want** the exported PDF learning report to use beautiful, branded card layouts with gradients and visual hierarchy,  
**So that** the report feels like a premium artifact I'm proud to save or share.

#### Acceptance Criteria

- [ ] AC1: The PDF header includes the LumenLingo logo (or text logo with gradient styling), the user's name, and the report date in an elegant header card.
- [ ] AC2: Each section (Summary, Game Breakdown, Accuracy, Time Tracking) is rendered as a distinct card with rounded corners, a subtle gradient background matching the user's current tier colors, and proper spacing.
- [ ] AC3: Stats within cards use the same visual language as the app: large numbers in bold, descriptive labels in caption weight, color-coded indicators (green for good, amber for average, red for needs work).
- [ ] AC4: The accuracy section uses colored circular progress indicators (matching Story 3.2's ring design) rendered as vector paths, NOT rasterized images.
- [ ] AC5: The PDF is multi-page if needed — each page has a consistent header/footer with page numbers and the LumenLingo wordmark.
- [ ] AC6: The color scheme of the PDF matches the user's app theme preference (light or dark).
- [ ] AC7: File size remains under 2MB for a typical report (no embedded raster images).
- [ ] AC8: The PDF renders correctly in Apple Preview, Adobe Acrobat, Chrome PDF viewer, and iOS Books.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 4.1.1 | Study `TierUpgradeCelebrationView.swift` card design — extract the gradient patterns, corner radii, spacing, and font choices used in celebration cards. Document as a "PDF design spec". | 1h | `TierUpgradeCelebrationView.swift` |
| 4.1.2 | Refactor `DataExporter.swift` to use a `PDFReportBuilder` class that constructs the PDF using a card-based layout engine. Define structs for `ReportCard`, `ReportHeader`, `ReportFooter`. | 3h | `DataExporter.swift` |
| 4.1.3 | Implement `ReportHeader`: render the LumenLingo text logo, user name, date, current tier badge, and a horizontal gradient line (tier colors) across the top of the first page. Use Core Text for precise text rendering. | 2h | `DataExporter.swift` |
| 4.1.4 | Implement `SummaryCard`: a rounded rect (20pt radius) filled with a subtle gradient (tier colors at 10% opacity). Inside: 4 stat blocks in a 2×2 grid — Total XP (bolt icon approx), Sessions (gamecontroller icon approx), Accuracy (target icon approx), Time (clock icon approx). Each stat: large number + caption label. | 3h | `DataExporter.swift` |
| 4.1.5 | Implement `GameBreakdownCard`: same card frame. Inside: horizontal bar chart where each bar uses the game type's signature gradient (flashcards = blue-cyan, grammar = pink-rose, word builder = gold-orange). Bar labels with counts. | 3h | `DataExporter.swift` |
| 4.1.6 | Implement `AccuracyCard`: circular progress rings (Core Graphics arcs) for each category, colored by accuracy tier. 3 rings per row, with category name and % below each. | 3h | `DataExporter.swift` |
| 4.1.7 | Implement `ReportFooter`: page number centered, "Generated by LumenLingo" + date in small text, thin gradient line above. | 1h | `DataExporter.swift` |
| 4.1.8 | Implement multi-page logic: track Y-position cursor; when cursor exceeds safe area (page height - footer height - margin), begin a new page with header reprise. | 2h | `DataExporter.swift` |
| 4.1.9 | Add color scheme parameter to `PDFReportBuilder`: dark mode uses deep navy cards with light text; light mode uses warm white cards with dark text. | 1h | `DataExporter.swift` |
| 4.1.10 | Test PDF output: generate reports with 5, 15, and 30 categories. Verify rendering in Apple Preview, Chrome, and iOS Books. Check file size < 2MB. | 2h | — |

---

### Story 4.2: Redesign Export Widget UI with Premium Aesthetics

**ID:** BUG-012  
**Priority:** P1  
**Points:** 5  
**Status:** 🔴 Open

**As a** Royal-tier user,  
**I want** the export options panel in the Journey view to look premium and inviting,  
**So that** I feel motivated to generate and share my learning reports.

#### Acceptance Criteria

- [ ] AC1: Each export format (CSV, JSON, PDF) is presented as a distinct card (not a flat button) with: format icon (doc.text for CSV, curly braces for JSON, doc.richtext for PDF), format name, brief description ("Spreadsheet-compatible data" / "Developer-friendly format" / "Beautiful branded report").
- [ ] AC2: The PDF card is visually emphasized as the "premium" option — larger, with a gold/royal gradient border and a "✨ Premium" badge.
- [ ] AC3: Locked formats (CSV for Pro, PDF for Royal) show a lock overlay with the required tier badge, and tapping opens MembershipView.
- [ ] AC4: Export progress shows an inline loading indicator within the card (circular progress ring, not a blocking modal).
- [ ] AC5: After export completes, the card shows a checkmark animation before the share sheet opens.
- [ ] AC6: The session count from the old header is preserved as a subtitle on the widget's collapsible section header.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 4.2.1 | Redesign `ExportDataWidget.swift`: replace the VStack of buttons with a `LazyVGrid` (2 columns on iPhone, 3 on iPad) of `ExportFormatCard` views. | 2h | `ExportDataWidget.swift` |
| 4.2.2 | Create `ExportFormatCard`: glassmorphic card background, centered icon (40pt SF Symbol), format name (`.headline`), description (`.caption`), conditional lock overlay. | 2h | `ExportDataWidget.swift` |
| 4.2.3 | Add "✨ Premium" badge to the PDF card: gold capsule in top-right corner with sparkle icon + "Premium" text. Only visible for PDF format. | 30m | `ExportDataWidget.swift` |
| 4.2.4 | Implement per-card loading state: when export starts, replace the icon with a `ProgressView()` inside the same frame. When complete, replace with `checkmark.circle.fill` with a scale-up animation. | 1h | `ExportDataWidget.swift` |
| 4.2.5 | Add lock overlay for tier-gated formats: semi-transparent overlay with `lock.fill` icon and `PremiumFeatureBadge(tier: requiredTier)`. Tap opens `MembershipView` sheet. | 1h | `ExportDataWidget.swift` |
| 4.2.6 | Migrate the session count text into the collapsible section header via the `collapsibleSection` helper's subtitle support (or add subtitle support if missing). | 30m | `ExportDataWidget.swift`, `JourneyView.swift` |

---

### Story 4.3: Add Report Preview Before Export

**ID:** BUG-013  
**Priority:** P2  
**Points:** 5  
**Status:** 🔴 Open

**As a** user,  
**I want** to preview my PDF report before exporting it,  
**So that** I can verify it looks correct and feel confident sharing it.

#### Acceptance Criteria

- [ ] AC1: Tapping the PDF export card opens a full-screen modal with a rendered preview of the PDF.
- [ ] AC2: The preview uses `PDFKit.PDFView` to render the generated PDF document inline.
- [ ] AC3: The modal has a top toolbar with "Cancel" (left) and "Share" (right) buttons.
- [ ] AC4: The "Share" button opens `UIActivityViewController` with the PDF.
- [ ] AC5: The preview supports pinch-to-zoom and swipe between pages.
- [ ] AC6: Loading state: while generating the PDF, show a skeleton/shimmer placeholder with "Generating your report..." text.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 4.3.1 | Create `PDFPreviewView.swift`: a SwiftUI wrapper around `PDFKit.PDFView` using `UIViewRepresentable`. Support `PDFDocument` input. | 2h | `PDFPreviewView.swift` |
| 4.3.2 | Add `.fullScreenCover` to `ExportDataWidget` that presents `PDFPreviewView` when the PDF card is tapped. | 1h | `ExportDataWidget.swift` |
| 4.3.3 | Generate the PDF asynchronously on a background thread using `Task.detached`. Show shimmer placeholder until `pdfDocument` is non-nil. | 1h | `ExportDataWidget.swift` |
| 4.3.4 | Implement toolbar: `Cancel` dismisses the sheet, `Share` invokes `UIActivityViewController` with the PDF URL. | 1h | `PDFPreviewView.swift` |
| 4.3.5 | Test with reports of 1, 3, and 10+ pages. Verify smooth scrolling and zoom in the preview. | 1h | — |

---

### Story 4.4: Shareable Achievement Card for Social Media

**ID:** BUG-014  
**Priority:** P2  
**Points:** 3  
**Status:** 🔴 Open

**As a** learner,  
**I want** a beautiful single-card image of my top stats that I can share on social media,  
**So that** I can celebrate my progress with friends and inspire others.

#### Acceptance Criteria

- [ ] AC1: A "Share Achievement" button appears alongside export format cards (or in the game completion view).
- [ ] AC2: Tapping it generates a 1080×1080 PNG image (Instagram-friendly square) with: user name, total XP, streak count, top accuracy, current tier badge, and LumenLingo branding.
- [ ] AC3: The card uses the user's current tier gradient as the background with the cosmic design language.
- [ ] AC4: The image is rendered using `ImageRenderer` (SwiftUI) from a dedicated `SharableAchievementCard` SwiftUI view.
- [ ] AC5: After generation, the share sheet opens with the image pre-loaded.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 4.4.1 | Create `SharableAchievementCard.swift`: a fixed-size (1080×1080 logical points) SwiftUI view with tier gradient background, user name, stats, and branding. | 2h | `SharableAchievementCard.swift` |
| 4.4.2 | Use `ImageRenderer` to convert the view to a `UIImage`, then save to a temp file. | 1h | `DataExporter.swift` or new `ImageExporter.swift` |
| 4.4.3 | Add "Share Achievement" button to `ExportDataWidget` with a camera/sparkle icon. Wire to `UIActivityViewController`. | 30m | `ExportDataWidget.swift` |
| 4.4.4 | Test output image quality on retina displays (@2x and @3x). Verify text readability at 1080px. | 30m | — |

---
---

## Epic 5: Membership & Premium Mobile UX

**Priority:** P0 — Critical  
**Rationale:** The Membership view is the single most important conversion surface in the app. If tier cards overlap on mobile, if the feature comparison table overflows, and if Royal paywall buttons are invisible on transparent backgrounds — the business loses revenue. These are not cosmetic issues; they are conversion killers. Every pixel on the Membership screen must earn the user's trust and guide them toward upgrade.

**Affected Files:**
- `LumenLingo/Views/Membership/MembershipView.swift` (~500+ lines)
- `LumenLingo/Views/Membership/UpgradePromptView.swift`
- `LumenLingo/Views/Membership/TierCardView.swift` (if extracted)

**Current Behavior:**
- Tier cards are in a vertical VStack with 14pt spacing. Each card uses `GeometryReader` for parallax effect. On smaller screens (iPhone SE, iPhone Mini), cards overlap because the `GeometryReader` frame calculations don't account for dynamic content height.
- The feature comparison table uses `.frame(maxWidth: .infinity)` for all 5 columns (Feature + 4 tiers), making each column extremely narrow on iPhone. `.caption2` font is barely readable.
- Royal paywall buttons in `UpgradePromptView` and `MembershipView` CTA areas use tier gradients — but some configurations result in transparent or near-transparent backgrounds that make the button text invisible against dark or complex backgrounds.
- The comparison table data may be outdated (features don't match current tier offerings).

---

### Story 5.1: Fix Tier Card Overlap on Mobile

**ID:** BUG-015  
**Priority:** P0  
**Points:** 5  
**Status:** � Done

**As a** mobile user viewing the Membership page,  
**I want** each tier card to be fully visible without overlapping adjacent cards,  
**So that** I can clearly read each tier's benefits and make an informed upgrade decision.

#### Acceptance Criteria

- [ ] AC1: On iPhone SE (375pt width, smallest supported screen), no tier card overlaps with any other card. Each card has clear visual separation (minimum 12pt gap).
- [ ] AC2: On iPhone 16 Pro Max, cards have generous spacing (16-20pt) and utilize the wider screen with balanced margins.
- [ ] AC3: The parallax `GeometryReader` effect is either removed (if it causes layout issues) or constrained to a safe range that doesn't affect card sizing.
- [ ] AC4: Each card's height is determined by its content (`.fixedSize(horizontal: false, vertical: true)`) — not by a hardcoded frame that causes overflow.
- [ ] AC5: The VStack of tier cards scrolls smoothly with no jank, even on older devices.
- [ ] AC6: If parallax is removed, a subtler scroll effect replaces it (e.g., opacity fade-in as cards enter the viewport, or a slight scale effect).

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 5.1.1 | Reproduce the overlap on an iPhone SE simulator. Screenshot the overlap. Identify which cards overlap and by how many points. | 30m | — |
| 5.1.2 | In `MembershipView.swift`, audit the `TierCardView` `GeometryReader` usage. Determine if it's constraining the card's height or position in a way that causes overlap. | 1h | `MembershipView.swift` |
| 5.1.3 | Replace `GeometryReader`-based parallax with a `ScrollViewReader`-based approach that observes scroll offset without affecting layout. Alternatively, remove parallax and use `.onAppear` opacity animations per card. | 2h | `MembershipView.swift` |
| 5.1.4 | Set card spacing to `16pt` in the VStack. Add `.padding(.horizontal, 16)` to each card. Verify no card exceeds screen width. | 30m | `MembershipView.swift` |
| 5.1.5 | Test on iPhone SE, iPhone 16, iPhone 16 Pro Max, and iPad Mini. Capture before/after screenshots for all devices. | 1h | — |
| 5.1.6 | Performance test: scroll the membership page on iPhone SE with Instruments (Core Animation). Verify 60fps scrolling. | 1h | — |

---

### Story 5.2: Optimize Feature Comparison Table for Mobile

**ID:** BUG-016  
**Priority:** P0  
**Points:** 8  
**Status:** � Done

**As a** mobile user,  
**I want** the feature comparison table to be readable and usable on my phone screen,  
**So that** I can compare tier benefits without squinting or horizontal scrolling.

#### Acceptance Criteria

- [ ] AC1: On iPhone (compact width), the comparison table uses a **card-per-tier layout** instead of a columnar table. Each card shows: tier name, price, and a checklist of included features with checkmarks/crosses.
- [ ] AC2: On iPad (regular width), the traditional columnar table layout is preserved but with larger font (`.footnote` instead of `.caption2`), better column spacing, and alternating row backgrounds.
- [ ] AC3: The comparison data is updated to reflect the actual current feature set for each tier (audit against `TierManager.canAccess(feature:)` logic).
- [ ] AC4: Feature rows use meaningful icons (not just ✓/—) — e.g., a language flag icon for "Language Pairs", a clock for "Practice Time", a game controller for "Game Modes".
- [ ] AC5: The comparison toggle animation is smooth (spring, 0.35s) and the expanded area doesn't cause the scroll view to jump.
- [ ] AC6: Each feature row is tappable — tapping expands a brief tooltip explaining what the feature does (single-line description).
- [ ] AC7: The comparison section has a clear visual boundary (glassmorphic card or elevated panel) separating it from the tier cards.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 5.2.1 | Audit `comparisonFeatures` array against `PremiumFeature` enum and `TierManager.canAccess(feature:)`. Document any mismatches. Update the data array to be accurate. | 1h | `MembershipView.swift`, `TierManager.swift` |
| 5.2.2 | Create `MobileComparisonView`: a vertical stack of tier comparison cards. Each card: tier name + tier icon, gradient header bar, feature checklist with SF Symbols (checkmark.circle.fill / xmark.circle). | 3h | `MembershipView.swift` or new `FeatureComparisonView.swift` |
| 5.2.3 | Create `TabletComparisonView`: improved version of current table with `.footnote` font, alternating row backgrounds (subtle stripe), and column header tier icons. | 2h | `MembershipView.swift` or new `FeatureComparisonView.swift` |
| 5.2.4 | Implement responsive switch: `if horizontalSizeClass == .compact { MobileComparisonView() } else { TabletComparisonView() }`. | 30m | `MembershipView.swift` |
| 5.2.5 | Add feature description tooltips: each row has an `DisclosureGroup` or tap-to-expand with a `.caption` description (e.g., "Practice Time: Daily limit for practice sessions across all game modes."). | 1h | `FeatureComparisonView.swift` |
| 5.2.6 | Add meaningful SF Symbols to each feature row: `globe` (Language Pairs), `clock` (Practice Time), `gamecontroller` (Game Modes), `speaker.wave.3` (Soundscapes), `circle.hexagongrid` (Breathing Orbs), `waveform.path` (Quantum Flow), `sparkles` (Nebula Drift), `wifi.slash` (Offline Mode). | 30m | `FeatureComparisonView.swift` |
| 5.2.7 | Wrap the comparison section in a glassmorphic container: `.background(.ultraThinMaterial, in: RoundedRectangle(cornerRadius: 20))` with a gradient border. | 30m | `MembershipView.swift` |
| 5.2.8 | Test on iPhone SE (portrait), iPhone 16 Pro Max (portrait), iPad Mini (landscape), iPad Pro 12.9" (landscape). Verify readability, no truncation, and smooth toggle animation. | 1h | — |

---

### Story 5.3: Fix Royal Paywall Button Visibility

**ID:** BUG-017  
**Priority:** P0  
**Points:** 3  
**Status:** � Done

**As a** user viewing a Royal-tier paywall,  
**I want** the upgrade buttons to be clearly visible with a solid, opaque background,  
**So that** I can immediately see and confidently tap the call-to-action.

#### Acceptance Criteria

- [ ] AC1: All paywall CTA buttons have a fully opaque background — no transparency whatsoever. The background uses the tier's gradient colors (Royal: gold → orange → rose).
- [ ] AC2: Button text is white or very light cream with `.semibold` weight and sufficient size (`.body` minimum) for clear readability.
- [ ] AC3: The button has a visible border or shadow to provide separation from any background, regardless of what's behind it (cosmic, gradient, or flat).
- [ ] AC4: Press feedback: button depresses with scale (0.95x) and slight brightness reduction on press.
- [ ] AC5: The fix applies to buttons in: `MembershipView` tier cards, `UpgradePromptView`, any other paywall surface (audit all usages).
- [ ] AC6: Light mode and dark mode both look premium — no "washed out" appearance in either scheme.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 5.3.1 | Audit all paywall CTA buttons: search for "Ascend to Royal", "Start Free Trial", "Upgrade", and `MembershipView.TierCardView` CTA definitions. List every button's current background treatment. | 1h | `MembershipView.swift`, `UpgradePromptView.swift` |
| 5.3.2 | Replace any `.opacity()` or `.clear` background on CTA buttons with `LinearGradient(colors: tier.gradientColors, ...)` at full opacity. | 1h | Multiple files |
| 5.3.3 | Add `.shadow(color: tier.gradientColors.first?.opacity(0.4) ?? .clear, radius: 8, y: 4)` to all CTA buttons for depth and separation. | 30m | Multiple files |
| 5.3.4 | Add `PremiumCTAButtonStyle` (or update existing) that provides: opaque gradient background, white text, shadow, scale press feedback. Apply to all paywall CTAs. | 1h | `MembershipView.swift` or shared `ButtonStyles.swift` |
| 5.3.5 | Screenshot test: capture every paywall button on both dark and light mode, on 3 different background types (cosmic, gradient, flat). Verify readability in all 6 combinations. | 1h | — |

---

### Story 5.4: Add Horizontal Scroll or Carousel for Tier Cards on Small Screens

**ID:** BUG-018  
**Priority:** P1  
**Points:** 5  
**Status:** � Done

**As a** mobile user,  
**I want** tier cards to use a horizontal swipeable carousel on small screens,  
**So that** each card gets full visual real estate and I can focus on one tier at a time.

#### Acceptance Criteria

- [ ] AC1: On iPhone (compact width), tier cards are displayed in a horizontal `TabView` with `.page` style (swipeable carousel). One card visible at a time with peek edges showing the next/previous card.
- [ ] AC2: Page indicators at the bottom show which tier is currently active. Indicators use tier gradient colors.
- [ ] AC3: On iPad (regular width), the vertical VStack layout is preserved (no carousel).
- [ ] AC4: The current user's active tier card is auto-scrolled to on appear.
- [ ] AC5: Swipe gesture is smooth and snappy with paging behavior.
- [ ] AC6: The order matches the natural tier progression: Free → Pro → Elite → Royal → Trial (or Trial first if active).

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 5.4.1 | Wrap the tier cards in a `TabView(.page)` conditional on `horizontalSizeClass == .compact`. | 1h | `MembershipView.swift` |
| 5.4.2 | Set card frame to `screen width - 40pt` for nice peek edges (20pt on each side visible from adjacent cards). | 30m | `MembershipView.swift` |
| 5.4.3 | Add custom page indicator using `HStack` of circles, each colored with its tier gradient, scaled up for the active page. | 1h | `MembershipView.swift` |
| 5.4.4 | Set `selection` binding to `tierManager.currentTierId` so the active tier is shown on appear. | 30m | `MembershipView.swift` |
| 5.4.5 | Test carousel on iPhone SE, iPhone 16, iPhone 16 Pro Max. Verify smooth swiping, correct page indicators, and no layout issues at card boundaries. | 1h | — |

---

### Story 5.5: Add Tier Comparison Quick-Switch Highlights

**ID:** BUG-019  
**Priority:** P2  
**Points:** 5  
**Status:** � Done

**As a** user comparing tiers,  
**I want** the comparison view to highlight what I would gain or lose when switching between tiers,  
**So that** I can instantly see the value delta without reading every feature line.

#### Acceptance Criteria

- [ ] AC1: The comparison view highlights features the user would GAIN (green glow + "NEW" badge) if upgrading from current tier.
- [ ] AC2: If the user is considering a downgrade, features they would LOSE are highlighted (amber glow + "LOSE" badge).
- [ ] AC3: Highlights are computed dynamically based on `tierManager.currentTier` vs. the tier being viewed.
- [ ] AC4: The highlight effect uses a subtle pulsing border animation (not intrusive, 3s cycle).
- [ ] AC5: A "What changes for you" section header appears above the highlighted features.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 5.5.1 | Use `TierManager.featureDiff(from:to:)` (static method, already exists) to compute gained and lost features when comparing current tier to each other tier. | 1h | `MembershipView.swift`, `TierManager.swift` |
| 5.5.2 | In `MobileComparisonView`, add a "What changes for you" divider. Below it, list gained features (green checkmark + "NEW" capsule) and lost features (amber xmark + "LOSE" capsule). | 2h | `FeatureComparisonView.swift` |
| 5.5.3 | Add pulsing border animation to gain/loss rows: `RoundedRectangle().stroke(color).opacity(pulseAnimation ? 0.8 : 0.3)` with repeating easeInOut. | 1h | `FeatureComparisonView.swift` |
| 5.5.4 | Test with all 5 tier → tier combinations (20 transitions). Verify correct gain/loss computation for each. | 1h | Tests |

---
---

## Epic 6: Offline Mode & Debug Infrastructure

**Priority:** P1 — High  
**Rationale:** Two distinct but related issues live here. First, the offline mode toggle presents a confusing binary choice to users across all tiers — but the business logic is clear: upper tiers (Pro, Elite, Royal, Trial) should have offline mode automatically enabled with no toggle visible, while Free tier users must be online-only. Showing a disabled toggle to Free users is worse than not showing it at all — it creates "button that doesn't work" frustration. Second, the Tier Debug Panel (currently named "Tier Debug Panel") is insufficiently scoped for comprehensive QA. Renaming it to "Debug Panel" and extending it to simulate network conditions, edge cases, and error states will dramatically reduce QA cycle time and increase confidence in releases.

**Affected Files:**
- `LumenLingo/Views/Profile/ConnectivitySettingsView.swift` (offline toggle)
- `LumenLingo/Views/Profile/TierDebugView.swift` (debug panel)
- `LumenLingo/Views/Profile/ProfileView.swift` (navigation to debug)
- `LumenLingo/Services/TierManager.swift` (offline mode tier gating)

**Current Behavior:**
- **Offline toggle:** `ConnectivitySettingsView` shows a `PremiumToggle` for offline mode. For Free tier, the toggle is visible but disabled with a PRO badge. For Pro+, it's a manual toggle. Tapping the locked toggle opens `MembershipView`.
- **Debug Panel:** Named `TierDebugView`, accessed via NavigationLink in ProfileView's `#if DEBUG` block. Can simulate: tier switching (5 buttons), feature flag overrides (enable/disable/default per feature), practice time status, trial date override, reset. Cannot simulate: network conditions, error states, language pair switching, content loading failures.

---

### Story 6.1: Auto-Enable Offline Mode for Upper Tiers

**ID:** BUG-020  
**Priority:** P1  
**Points:** 5  
**Status:** 🔴 Open

**As a** Pro/Elite/Royal/Trial user,  
**I want** offline mode to be automatically enabled without requiring me to toggle it on,  
**So that** I always have offline access as part of my subscription benefits without extra configuration.

#### Acceptance Criteria

- [ ] AC1: For tiers Pro, Elite, Royal, and Trial: offline mode is always ON. No toggle is displayed — instead, a status indicator shows "Offline mode: Active" with a green checkmark.
- [ ] AC2: For Free tier: offline mode is always OFF. No toggle is displayed — instead, an informational card explains "Offline mode requires a Pro subscription or higher" with a "View Plans" button linking to MembershipView.
- [ ] AC3: The toggle-less design uses a clean, informational layout: connectivity status badge (online/offline indicator), offline mode status ("Active" / "Pro required"), and a brief explanation of what offline mode provides.
- [ ] AC4: When a user downgrades from Pro+ to Free: offline mode is automatically disabled, cached content is preserved but inaccessible, a notification toast appears ("Offline mode deactivated — upgrade to re-enable").
- [ ] AC5: When a user upgrades from Free to Pro+: offline mode is automatically enabled, any previously cached content becomes accessible, a success toast appears ("Offline mode is now active!").
- [ ] AC6: The `.offlineModeAutoDisabled` notification handler still works correctly with the new toggle-less design.
- [ ] AC7: The `PremiumToggle` component is removed from `ConnectivitySettingsView` entirely.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 6.1.1 | In `TierManager.swift`, modify `offlineModeAvailable` to auto-set `profile.offlineModeEnabled = true` whenever the user's tier includes offline mode, rather than relying on a manual toggle. | 1h | `TierManager.swift` |
| 6.1.2 | Redesign `ConnectivitySettingsView`: remove the `PremiumToggle`. Replace with a status card: VStack { wifi status badge, offline mode status text, explanation text }. | 2h | `ConnectivitySettingsView.swift` |
| 6.1.3 | For Free tier: replace the disabled toggle with an informational panel: glassmorphic card with `wifi.exclamationmark` icon, "Online Only" headine, brief explainer, and "View Plans" CTA button. | 1h | `ConnectivitySettingsView.swift` |
| 6.1.4 | For Pro+ tiers: show a success-themed status card with `checkmark.circle.fill` (green), "Offline Mode Active" headline, "Your subscription includes offline access" subtitle. | 1h | `ConnectivitySettingsView.swift` |
| 6.1.5 | Add auto-enable logic: in `TierManager`'s tier-change observer (`didSet` on `currentTierId`), if new tier grants offline access and `profile.offlineModeEnabled == false`, set it to `true` and post a success notification. | 1h | `TierManager.swift` |
| 6.1.6 | Add auto-disable logic: in the same observer, if new tier revokes offline access and `profile.offlineModeEnabled == true`, set it to `false` and post `.offlineModeAutoDisabled`. | 30m | `TierManager.swift` |
| 6.1.7 | Write tests: Free → Pro upgrade enables offline, Pro → Free downgrade disables offline, Royal user always has offline, Free user never has offline. | 2h | `TierManagerTests.swift` |
| 6.1.8 | Manual QA: walk through tier switch flow on device. Verify no toggle appears, status cards show correct state, toasts fire on transitions. | 1h | — |

---

### Story 6.2: Rename "Tier Debug Panel" to "Debug Panel"

**ID:** BUG-021  
**Priority:** P2  
**Points:** 2  
**Status:** 🔴 Open

**As a** QA engineer or developer,  
**I want** the debug panel to be called "Debug Panel" (not "Tier Debug Panel"),  
**So that** its expanded scope (beyond just tier features) is reflected in its name.

#### Acceptance Criteria

- [ ] AC1: The NavigationLink label in ProfileView reads "Debug Panel" instead of "Tier Debug Panel" or "Feature Flag Inspector".
- [ ] AC2: The view's navigation title reads "Debug Panel".
- [ ] AC3: The file is renamed from `TierDebugView.swift` to `DebugPanelView.swift`.
- [ ] AC4: The struct is renamed from `TierDebugView` to `DebugPanelView`.
- [ ] AC5: All internal references to the old name are updated (search for `TierDebugView` across the codebase).

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 6.2.1 | Rename `TierDebugView.swift` to `DebugPanelView.swift`. Rename the struct from `TierDebugView` to `DebugPanelView`. | 30m | `TierDebugView.swift` → `DebugPanelView.swift` |
| 6.2.2 | Update the NavigationLink in `ProfileView.swift` from `TierDebugView()` to `DebugPanelView()` and update the label text. | 15m | `ProfileView.swift` |
| 6.2.3 | Update the `.navigationTitle` from "Feature Flag Inspector" to "Debug Panel". | 5m | `DebugPanelView.swift` |
| 6.2.4 | Run `grep -rn "TierDebugView" --include="*.swift"` and fix any remaining references. | 15m | All Swift files |
| 6.2.5 | Run `xcodegen generate && xcodebuild build` to verify no compile errors after rename. | 10m | — |

---

### Story 6.3: Extend Debug Panel with Network Simulation

**ID:** BUG-022  
**Priority:** P1  
**Points:** 8  
**Status:** 🔴 Open

**As a** QA engineer,  
**I want** the Debug Panel to simulate network conditions (offline, slow connection, intermittent connectivity),  
**So that** I can test the app's behavior under degraded network conditions without manipulating device settings.

#### Acceptance Criteria

- [ ] AC1: A new "Network Simulation" section appears in the Debug Panel with controls: Normal, Offline, Slow (2G), Intermittent (random drops).
- [ ] AC2: When "Offline" is selected, all network calls in the app fail with a `URLError.notConnectedToInternet` error — as if the device had no connectivity.
- [ ] AC3: When "Slow" is selected, all network calls have a 3-5 second artificial delay injected before the response.
- [ ] AC4: When "Intermittent" is selected, approximately 40% of network calls fail randomly.
- [ ] AC5: The simulation is implemented via a `DebugNetworkProxy` (or `URLProtocol` subclass) that intercepts all requests — no production code changes required outside the debug proxy.
- [ ] AC6: A status badge appears in the Debug Panel section header showing the current simulation mode (e.g., "🔴 Offline" or "🟡 Slow").
- [ ] AC7: The simulation mode resets to "Normal" on app relaunch — it is NOT persisted.
- [ ] AC8: A "SIMULATING: OFFLINE" banner appears at the top of the app (similar to the "OVERRIDES ON" badge) when any simulation is active, so testers don't forget it's on.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 6.3.1 | Create `DebugNetworkController.swift` (DEBUG-only): an `@Observable` class with `simulationMode: NetworkSimulationMode` enum (.normal, .offline, .slow, .intermittent). | 1h | new `DebugNetworkController.swift` |
| 6.3.2 | Create `DebugURLProtocol.swift`: a `URLProtocol` subclass that intercepts requests and applies the current simulation mode (fail for offline, delay for slow, random fail for intermittent). | 3h | new `DebugURLProtocol.swift` |
| 6.3.3 | Register `DebugURLProtocol` in the app delegate / app init only when `#if DEBUG`. Use `URLProtocol.registerClass()`. | 30m | `LumenLingoApp.swift` |
| 6.3.4 | Add "Network Simulation" section to `DebugPanelView`: segmented control with 4 modes, status badge showing current mode. | 1h | `DebugPanelView.swift` |
| 6.3.5 | Implement the global "SIMULATING" banner: a fixed `VStack` at the top of `ContentView` that appears when `DebugNetworkController.shared.simulationMode != .normal`. | 1h | `ContentView.swift` |
| 6.3.6 | Test all 3 simulation modes: verify offline mode shows appropriate error UI, slow mode shows loading indicators, intermittent mode shows retry prompts. | 2h | — |
| 6.3.7 | Verify the simulation does NOT affect Xcode previews or unit tests (guard with `ProcessInfo` check). | 30m | `DebugURLProtocol.swift` |

---

### Story 6.4: Extend Debug Panel with Additional QA Tools

**ID:** BUG-023  
**Priority:** P2  
**Points:** 5  
**Status:** 🔴 Open

**As a** QA engineer,  
**I want** the Debug Panel to include additional simulation tools (content loading failures, language pair switching, state inspection, performance metrics),  
**So that** I can comprehensively test edge cases without writing custom test code.

#### Acceptance Criteria

- [ ] AC1: "Content Simulation" section: toggle to force content loading failures (ContentLoader returns empty arrays), toggle to force slow content loading (3s delay).
- [ ] AC2: "Language Pair Simulation" section: quick-switch buttons for all available language pairs, bypassing the normal selection flow.
- [ ] AC3: "State Inspector" section: read-only display of key app state — current tier, XP, streak, practice time remaining, active feature flags, offline mode status, content cache size.
- [ ] AC4: "Performance" section: real-time FPS counter display, memory usage, content load times for the last 5 operations.
- [ ] AC5: "Reset" section (existing) is extended with: "Clear All Progress" (with confirmation), "Reset Onboarding" (re-trigger onboarding flow), "Generate Sample Data" (creates mock progress records for testing Journey/Stats views).
- [ ] AC6: All simulation features are gated behind `#if DEBUG` and cannot reach production builds.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 6.4.1 | Add "Content Simulation" section to `DebugPanelView`: two toggles (force empty content, force slow load). Wire to `DebugContentController` observable. | 1h | `DebugPanelView.swift`, new `DebugContentController.swift` |
| 6.4.2 | In `ContentLoader.swift`, add `#if DEBUG` hooks: if `DebugContentController.shared.forceEmpty`, return empty arrays; if `forceSlowLoad`, add `try await Task.sleep(for: .seconds(3))`. | 1h | `ContentLoader.swift` |
| 6.4.3 | Add "Language Pair" section: buttons for each language pair from the content manifest. Each button sets the active language pair in the app's state. | 1h | `DebugPanelView.swift` |
| 6.4.4 | Add "State Inspector" section: read-only labels displaying `tierManager.currentTier`, `profile?.totalXP`, `profile?.currentStreak`, `practiceTimeTracker.remainingSeconds`, etc. Use `.monospaced()` font for alignment. | 1h | `DebugPanelView.swift` |
| 6.4.5 | Add "Performance" section: use `CADisplayLink` to show real-time FPS. Show `ProcessInfo.processInfo.physicalMemory` usage. Record last 5 `ContentLoader` operation durations. | 2h | `DebugPanelView.swift`, new `PerformanceMonitor.swift` |
| 6.4.6 | Extend "Reset" section: add "Clear All Progress" (with `.confirmationDialog`), "Reset Onboarding" (clears `hasCompletedOnboarding` flag), "Generate Sample Data" (inserts 50 mock `GameProgressRecord` entries). | 2h | `DebugPanelView.swift` |
| 6.4.7 | Verify all debug sections are wrapped in `#if DEBUG`. Run a release build and confirm no debug code leaks. | 30m | All debug files |

---
---

## Epic 7: Tier Transition Animation Polish

**Priority:** P1 — High  
**Rationale:** Tier transitions are emotionally charged moments — a user upgrading to Royal, or nervously starting a trial, or being downgraded. The current `FeatureTransitionOverlay` uses a black 65% opacity overlay as its background, which makes the feature cards appear to float in a void. The celebration cards (like `TierUpgradeCelebrationView`) have beautiful visual treatments, but they're lost without a compelling background. Additionally, when switching between any membership tiers (including Free Trial), the special animation cards MUST always appear — they are the emotional payoff of the transition. Currently, without a vibrant background, the cards are invisible or underwhelming.

**Affected Files:**
- `LumenLingo/Views/Membership/FeatureTransitionOverlay.swift`
- `LumenLingo/Views/Membership/TierUpgradeCelebrationView.swift`
- `LumenLingo/Views/Membership/MembershipView.swift` (tier switch triggers)

**Current Behavior:**
- `FeatureTransitionOverlay` uses `Color.black.opacity(0.65)` as a full-screen background.
- Feature cards appear in a VStack with staggered reveals (upgrades) or dimming (downgrades).
- `TierUpgradeCelebrationView` exists but its integration with tier switches may be inconsistent.
- Tier switches from the Debug Panel or Membership page may not always trigger the celebration/transition flow.

---

### Story 7.1: Add Cosmic Background to Tier Transition Overlay

**ID:** BUG-024  
**Priority:** P1  
**Points:** 5  
**Status:** 🔴 Open

**As a** user transitioning between membership tiers,  
**I want** the transition animation to have a rich, cosmic background that matches the app's design language,  
**So that** the moment feels special, immersive, and worth celebrating.

#### Acceptance Criteria

- [ ] AC1: The `FeatureTransitionOverlay` background is replaced from flat black opacity to a dynamic cosmic gradient that uses the DESTINATION tier's signature colors.
- [ ] AC2: The background includes a radial gradient emanating from the center (where the celebration card sits), with the tier's primary color at center fading to deep navy at edges.
- [ ] AC3: Subtle animated particles (sparkles or stars) drift across the background for upgrades; a gentle dimming wave effect for downgrades.
- [ ] AC4: The background transition between the previous screen and the overlay is a smooth 0.5s fade-in (not an abrupt cut).
- [ ] AC5: For upgrades: the background glows brighter as more features are revealed, reaching maximum brilliance when all features are shown.
- [ ] AC6: For downgrades: the background slowly desaturates as features dim, ending in a muted version of the new (lower) tier's colors.
- [ ] AC7: The cosmic background does not significantly impact scroll performance or redraw rate (target: 60fps on iPhone SE).

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 7.1.1 | Replace `Color.black.opacity(0.65)` in `FeatureTransitionOverlay` with a `RadialGradient(colors: [destinationTier.primaryColor.opacity(0.4), Color(hex: "#0a0a1a")], center: .center, startRadius: 50, endRadius: 500)`. | 1h | `FeatureTransitionOverlay.swift` |
| 7.1.2 | Add animated opacity progression: bind the radial gradient's center opacity to the animation progress (0.2 at start → 0.6 at full reveal). Use `withAnimation(.easeIn(duration: 1.5))`. | 1h | `FeatureTransitionOverlay.swift` |
| 7.1.3 | Create particle overlay for upgrades: `TimelineView(.animation)` rendering 20-30 small circles with random positions, sizes (2-6pt), and float-up animations. Use tier gradient colors. | 2h | `FeatureTransitionOverlay.swift` |
| 7.1.4 | Create desaturation effect for downgrades: apply `.saturation()` modifier to the background, animated from 1.0 → 0.3 over the transition duration. | 1h | `FeatureTransitionOverlay.swift` |
| 7.1.5 | Add fade-in transition: wrap the overlay in `.transition(.opacity)` and trigger with `withAnimation(.easeIn(duration: 0.5))`. | 30m | `FeatureTransitionOverlay.swift` |
| 7.1.6 | Performance test on iPhone SE: profile the overlay animation with Instruments. Verify ≥ 55fps sustained. | 1h | — |

---

### Story 7.2: Ensure Celebration Cards Appear for All Tier Switches

**ID:** BUG-025  
**Priority:** P1  
**Points:** 5  
**Status:** 🔴 Open

**As a** user switching between any membership tier (including Free Trial activation),  
**I want** the special celebration/transition card animation to ALWAYS appear,  
**So that** every tier change feels like a significant, celebrated event — not just a settings change.

#### Acceptance Criteria

- [ ] AC1: The following tier transitions ALL trigger the celebration/transition overlay:
  - Free → Trial (celebrating trial start)
  - Free → Pro/Elite/Royal (celebrating upgrade)
  - Pro → Elite/Royal (celebrating upgrade)
  - Elite → Royal (celebrating upgrade)
  - Any → lower tier (graceful downgrade transition)
  - Trial → Free (trial expiry)
- [ ] AC2: Upgrades show `TierUpgradeCelebrationView` with the new tier's card, confetti, and feature unlock list.
- [ ] AC3: Downgrades show `FeatureTransitionOverlay` with feature dimming and the "Requires upgrade" messaging.
- [ ] AC4: The Debug Panel tier switch buttons also trigger the celebration/transition flow (same path as production).
- [ ] AC5: The transition cannot be interrupted or dismissed until the full animation completes (minimum 2s).
- [ ] AC6: After the transition completes, the user is returned to the screen they were on (not reset to the dashboard).
- [ ] AC7: Sound effects (if `SoundService` is enabled) play tier-appropriate audio during the transition.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 7.2.1 | Audit all code paths that change `tierManager.currentTierId`. Document which ones trigger the celebration overlay and which don't. | 1h | `TierManager.swift`, `MembershipView.swift`, `TierDebugView.swift` |
| 7.2.2 | Create a unified `TierTransitionCoordinator` (or extend `TierManager`) that publishes a `tierTransitionEvent` whenever the tier changes. Include `fromTier`, `toTier`, and `isUpgrade` properties. | 2h | `TierManager.swift` or new `TierTransitionCoordinator.swift` |
| 7.2.3 | In `ContentView.swift` (or the root view), add an `.onChange(of: tierManager.currentTierId)` handler that presents the appropriate overlay: `TierUpgradeCelebrationView` for upgrades, `FeatureTransitionOverlay` for downgrades. | 1h | `ContentView.swift` |
| 7.2.4 | Ensure the Debug Panel's tier switch buttons use the same `tierManager` mutation path — so they trigger the `.onChange` handler and the celebration flow. | 30m | `DebugPanelView.swift` |
| 7.2.5 | Add a non-interactive delay: disable the root view's dismiss gesture / back navigation for the first 2s of the transition animation. Use `.interactiveDismissDisabled()`. | 30m | `ContentView.swift` |
| 7.2.6 | Test all 15 possible tier transitions (5×5 matrix minus identity). Verify correct animation plays for each. Capture video for QA review. | 2h | — |

---

### Story 7.3: Tier-Specific Celebration Card Designs

**ID:** BUG-026  
**Priority:** P2  
**Points:** 3  
**Status:** 🔴 Open

**As a** user upgrading to a specific tier,  
**I want** the celebration card to have a unique design that reflects that tier's personality,  
**So that** each upgrade feels distinct and the tier's identity is reinforced.

#### Acceptance Criteria

- [ ] AC1: **Free → Pro:** Card theme is "Ascent". Background: blue-to-cyan gradient. Icon: rocket launching. Tagline: "Your journey accelerates!"
- [ ] AC2: **→ Elite:** Card theme is "Mastery". Background: purple-to-pink gradient. Icon: diamond or crown. Tagline: "You've joined the elite!"
- [ ] AC3: **→ Royal:** Card theme is "Coronation". Background: gold-to-rose gradient. Icon: crown with sparkles. Tagline: "The kingdom awaits!"
- [ ] AC4: **→ Trial:** Card theme is "First Step". Background: amber warmth gradient. Icon: gift box opening. Tagline: "14 days of everything — enjoy!"
- [ ] AC5: Each card has a unique particle effect matching its theme (rockets emit fire particles, crowns emit gold sparkles, gifts emit confetti).
- [ ] AC6: Cards animate in with a spring entrance: scale 0.3→1.0, opacity 0→1, rotation -5°→0° over 0.6s.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 7.3.1 | Define `TierCelebrationTheme` struct: `gradient: [Color]`, `icon: String`, `tagline: String`, `particleEffect: ParticleType`. Create one for each tier. | 1h | `TierUpgradeCelebrationView.swift` |
| 7.3.2 | Update `TierUpgradeCelebrationView` to accept a `theme: TierCelebrationTheme` and render the card accordingly. | 1h | `TierUpgradeCelebrationView.swift` |
| 7.3.3 | Implement tier-specific particle effects: configure existing `SparkleUnlockEffect` with different colors and patterns per theme. | 1h | `TierUpgradeCelebrationView.swift` |
| 7.3.4 | Add the spring entrance animation: `.transition(.scale(scale: 0.3).combined(with: .opacity).combined(with: .rotation3DEffect(...)))` with spring timing. | 30m | `TierUpgradeCelebrationView.swift` |
| 7.3.5 | Test all 4 celebration themes. Verify each has correct gradient, icon, tagline, and particles. | 30m | — |

---
---

## Epic 8: Profile Page UX Refinement

**Priority:** P2 — Medium  
**Rationale:** The Profile page is a density-challenged screen — it contains the user header, My Plan card, appearance settings (4 sub-tabs), sound settings, beta settings, sync settings, and sign-out. On smaller screens, users must scroll extensively to reach lower sections. Making the top panel (header) and My Plan card collapsible addresses this — but the collapsible UX must match the glassmorphic standard established in JourneyView's collapsible sections. Inconsistency between collapsible patterns would feel unpolished.

**Affected Files:**
- `LumenLingo/Views/Profile/ProfileView.swift` (profileHeader, My Plan integration)
- `LumenLingo/Views/Profile/MyPlanCard.swift` (already partially collapsible)

**Current Behavior:**
- `profileHeader` (avatar, name, level, tier badge, quick stats) is always visible — not collapsible. It occupies significant vertical space.
- `MyPlanCard` has internal expand/collapse for its feature list (`isExpanded` state) but the card itself is always present — there's no way to collapse the entire card including its header.
- Neither uses the `collapsibleSection` glassmorphic pattern from JourneyView.

---

### Story 8.1: Make Profile Header Collapsible

**ID:** BUG-027  
**Priority:** P2  
**Points:** 5  
**Status:** 🔴 Open

**As a** user on the Profile page,  
**I want** to collapse the profile header (avatar, name, level, stats) into a compact bar,  
**So that** I can quickly access settings below without scrolling past information I've already seen.

#### Acceptance Criteria

- [ ] AC1: The profile header is wrapped in a collapsible section using the same `collapsibleSection` pattern from JourneyView (glassmorphic collapsed pill, gradient icon circle, animated chevron).
- [ ] AC2: When collapsed: shows a compact pill with the user's avatar (small, 32pt), name, and tier badge in a single horizontal line. Level and stats are hidden.
- [ ] AC3: When expanded: shows the full profile header as it currently appears (avatar, name, level, tier badge, quick stats row).
- [ ] AC4: The collapse animation uses the established spring timing (0.35s, damping 0.8).
- [ ] AC5: The collapse state defaults to EXPANDED on first visit. State persists within the session but resets on app relaunch.
- [ ] AC6: The collapsed pill has the same interaction feedback as JourneyView's collapsible headers (0.97x scale + 0.85 opacity on press).

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 8.1.1 | Import or replicate the `collapsibleSection` helper and `CollapsibleHeaderButtonStyle` from JourneyView into a shared location (e.g., `Views/Shared/CollapsibleSection.swift`) so both Profile and Journey can use it. | 1h | new `CollapsibleSection.swift`, `JourneyView.swift` |
| 8.1.2 | Add `@State private var isHeaderCollapsed = false` to `ProfileView`. Wrap `profileHeader` in the shared `collapsibleSection(title: userName, icon: "person.circle.fill", colors: tierGradient, isCollapsed: $isHeaderCollapsed)`. | 1h | `ProfileView.swift` |
| 8.1.3 | Design the collapsed state content: `HStack { smallAvatar(32pt) Text(userName).font(.headline) tierBadge Spacer() }`. Ensure it fits comfortably in the collapsible pill. | 1h | `ProfileView.swift` |
| 8.1.4 | Test on iPhone SE (collapsed should show full name without truncation), iPhone 16 Pro Max (generous spacing), and iPad. | 1h | — |
| 8.1.5 | Verify that collapsing the header does not break the NavigationLink to MembershipView from the tier badge. | 30m | `ProfileView.swift` |

---

### Story 8.2: Make My Plan Card Collapsible

**ID:** BUG-028  
**Priority:** P2  
**Points:** 3  
**Status:** 🔴 Open

**As a** user who knows their current plan,  
**I want** to collapse the entire "My Plan" card on the Profile page,  
**So that** I can focus on settings without seeing plan details I already know.

#### Acceptance Criteria

- [ ] AC1: The My Plan card is wrapped in a collapsible section using the shared `collapsibleSection` helper.
- [ ] AC2: When collapsed: shows a compact pill with the tier icon, "My Plan", and the tier name (e.g., "Royal").
- [ ] AC3: When expanded: shows the full `MyPlanCard` as it currently appears (tier info, features, upgrade link).
- [ ] AC4: The internal expand/collapse within MyPlanCard (feature list toggle) still works independently when the card is expanded.
- [ ] AC5: Collapse animation matches the Profile Header (Story 8.1) and JourneyView patterns.
- [ ] AC6: Default state: expanded.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 8.2.1 | Add `@State private var isMyPlanCollapsed = false` to `ProfileView`. | 5m | `ProfileView.swift` |
| 8.2.2 | Wrap the `MyPlanCard()` usage in `collapsibleSection(title: "My Plan", icon: tierManager.tierIcon, colors: tierManager.tierGradientColors, isCollapsed: $isMyPlanCollapsed) { MyPlanCard() }`. | 30m | `ProfileView.swift` |
| 8.2.3 | Add the tier name as a trailing text in the collapsed pill: `Text(tierManager.currentTier.displayName).font(.caption).foregroundStyle(.secondary)`. | 15m | `ProfileView.swift` |
| 8.2.4 | Test the two-level collapse: outer collapsible (hides entire card) and inner expand/collapse (feature list within the card). Verify no state conflicts. | 30m | — |

---

### Story 8.3: Extract Shared CollapsibleSection Component

**ID:** BUG-029  
**Priority:** P1  
**Points:** 5  
**Status:** 🔴 Open

**As a** developer,  
**I want** the `collapsibleSection` helper and `CollapsibleHeaderButtonStyle` to be extracted into a shared, reusable component,  
**So that** all collapsible sections across the app (Journey, Profile, future screens) use exactly the same UX pattern.

#### Acceptance Criteria

- [ ] AC1: A new file `Views/Shared/CollapsibleSection.swift` contains the `collapsibleSection` view builder function and `CollapsibleHeaderButtonStyle`.
- [ ] AC2: `JourneyView.swift` imports and uses the shared component, removing its local copy.
- [ ] AC3: `ProfileView.swift` imports and uses the same shared component for header and My Plan collapsibles.
- [ ] AC4: The component supports an optional `subtitle` parameter (e.g., for showing session count or tier name in the collapsed pill).
- [ ] AC5: The component's visual parameters (corner radius, gradient intensity, shadow) are configurable with sensible defaults matching the current JourneyView implementation.
- [ ] AC6: No visual regressions in JourneyView's collapsible sections after extraction.
- [ ] AC7: All existing tests pass.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 8.3.1 | Create `Views/Shared/CollapsibleSection.swift`. Move `collapsibleSection(title:icon:colors:isCollapsed:content:)` and `CollapsibleHeaderButtonStyle` from `JourneyView.swift`. | 1h | new `CollapsibleSection.swift`, `JourneyView.swift` |
| 8.3.2 | Add an optional `subtitle: String? = nil` parameter. When present, display it as `.caption` text next to the title in the collapsed pill. | 30m | `CollapsibleSection.swift` |
| 8.3.3 | Add optional customization parameters: `cornerRadius: CGFloat = 16`, `shadowRadius: CGFloat = 8`. | 15m | `CollapsibleSection.swift` |
| 8.3.4 | Update `JourneyView.swift`: remove local `collapsibleSection` and `CollapsibleHeaderButtonStyle`, import from shared. Verify all 13 sections still work. | 1h | `JourneyView.swift` |
| 8.3.5 | Use the shared component in `ProfileView.swift` for Stories 8.1 and 8.2. | 30m | `ProfileView.swift` |
| 8.3.6 | Run full test suite. Capture screenshots of JourneyView and ProfileView before and after — diff for visual regressions. | 1h | — |

---
---

## Epic 9: Onboarding Mobile Optimization

**Priority:** P0 — Critical  
**Rationale:** The onboarding flow (`TierOnboardingFlow`) is the user's first impression of the app. If panels have cut-off sections on mobile — text truncated, buttons pushed below the safe area, illustrations cropped — the user's immediate reaction is "this app wasn't built for my phone." First impressions are irreversible. The 4-screen TabView (Learn for Free → Pro → Elite → Royal Trial) must feel like a polished keynote presentation on every screen size, from iPhone SE to iPad Pro.

**Affected Files:**
- `LumenLingo/Views/Membership/TierOnboardingFlow.swift`
- `LumenLingo/Views/LanguageSelection/LanguageSelectionView.swift` (if onboarding triggers from here)

**Current Behavior:**
- `TierOnboardingFlow` is a 4-screen `TabView` with `.page` style.
- Each page has: animated icon with radial glow (can be large), title, subtitle, feature bullets, and CTA button.
- Layout is a vertical `VStack` with `Spacer`s for centering.
- On smaller screens (iPhone SE, iPhone Mini), the icon + title + bullets + button stack can exceed the safe area height, pushing the CTA button below the visible area or cropping feature bullets.
- The animated icon with radial glow can consume 200pt+ of vertical space.
- No `ScrollView` wrapper — so content that doesn't fit is simply cut off.
- Page indicators sit at the bottom, potentially overlapping with cut-off content.

---

### Story 9.1: Make Onboarding Pages Scroll-Safe

**ID:** BUG-030  
**Priority:** P0  
**Points:** 5  
**Status:** � Done

**As a** new user on a smaller phone,  
**I want** each onboarding page to be fully visible without any content being cut off,  
**So that** I can read all feature descriptions and confidently tap the CTA button.

#### Acceptance Criteria

- [x] AC1: Each onboarding page is wrapped in a `ScrollView(.vertical, showsIndicators: false)` so that all content is accessible via scroll on any screen size.
- [x] AC2: On devices where all content fits (iPhone 16 Pro Max and larger), no scroll is needed — the content is vertically centered as before.
- [x] AC3: On iPhone SE (375×667pt, smallest screen): all text, icons, feature bullets, and the CTA button are visible either within the viewport or via a short scroll. No content is clipped.
- [x] AC4: The page indicators remain pinned to the bottom of the screen (outside the ScrollView) so they're always accessible.
- [x] AC5: The "Skip" button remains pinned to the top-right corner (outside the ScrollView) so it's always accessible.
- [x] AC6: The ScrollView does NOT interfere with the horizontal swipe gesture for page changes — vertical scroll and horizontal page swipe coexist without conflict.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 9.1.1 | Reproduce the cut-off issue on an iPhone SE simulator. Screenshot each of the 4 onboarding pages. Document which elements are clipped and by how many points. | 30m | — |
| 9.1.2 | Wrap each page's content `VStack` in `ScrollView(.vertical, showsIndicators: false)`. Test that horizontal TabView paging still works correctly. | 1h | `TierOnboardingFlow.swift` |
| 9.1.3 | Pin the Skip button: move it outside the per-page ScrollView into a `ZStack` overlay at `.topTrailing`. | 30m | `TierOnboardingFlow.swift` |
| 9.1.4 | Pin the page indicators: use `.tabViewStyle(.page(indexDisplayMode: .always))` or a custom bottom-pinned indicator. | 30m | `TierOnboardingFlow.swift` |
| 9.1.5 | Add `ViewThatFits` as an alternative (iOS 16+): first try the non-scrollable layout; if it doesn't fit, fall back to the scrollable version. This avoids unnecessary scroll on larger devices. | 1h | `TierOnboardingFlow.swift` |
| 9.1.6 | Test on iPhone SE, iPhone 16, iPhone 16 Pro Max, iPad Mini. Verify no content clipping on any device, smooth page transitions, and no scroll/swipe conflicts. | 1h | — |

---

### Story 9.2: Responsive Icon Sizing for Onboarding

**ID:** BUG-031  
**Priority:** P1  
**Points:** 3  
**Status:** � Done

**As a** user on a smaller phone,  
**I want** the onboarding icons and their glow effects to scale proportionally to my screen size,  
**So that** the icons don't dominate the screen and leave room for the feature descriptions I need to read.

#### Acceptance Criteria

- [x] AC1: The animated icon area uses a maximum height of 25% of the screen height (via `GeometryReader`), not a fixed point value.
- [x] AC2: On iPhone SE: icon area ≈ 167pt. On iPhone 16 Pro Max: icon area ≈ 215pt. On iPad: icon area ≈ 250pt.
- [x] AC3: The radial glow effect scales proportionally with the icon — it never extends beyond the icon area's bounds.
- [x] AC4: The pulse animation amplitude scales proportionally (smaller screen = subtler pulse) to avoid visual "overflow" on tight layouts.
- [x] AC5: Icon rendering quality is crisp at all sizes (SF Symbols auto-scale; custom assets need @2x/@3x variants).

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 9.2.1 | Wrap each page's icon section in a `GeometryReader` or use `containerRelativeFrame(.vertical, count: 4, span: 1, spacing: 0)` to cap icon height at 25% of the container. | 1h | `TierOnboardingFlow.swift` |
| 9.2.2 | Bind the radial glow radius to the icon area's bounds: `RadialGradient(..., startRadius: iconHeight * 0.1, endRadius: iconHeight * 0.5)`. | 30m | `TierOnboardingFlow.swift` |
| 9.2.3 | Scale pulse animation: `scaleEffect(1.0 + 0.05 * (iconHeight / 200))` — smaller screen = subtler pulse. | 30m | `TierOnboardingFlow.swift` |
| 9.2.4 | Test on all 4 device sizes. Verify proportional icon sizing and no visual overflow. | 1h | — |

---

### Story 9.3: Polish Feature Bullet Layout for Narrow Screens

**ID:** BUG-032  
**Priority:** P1  
**Points:** 5  
**Status:** � Done

**As a** user on a narrow screen,  
**I want** the feature bullet points on each onboarding page to be readable without truncation,  
**So that** I understand what each tier offers before making a decision.

#### Acceptance Criteria

- [x] AC1: Feature bullets use `.body` font on larger screens and `.callout` on compact screens (adaptive via `@ScaledMetric` or `horizontalSizeClass`).
- [x] AC2: Bullet text supports multiline wrapping — `.lineLimit(nil)` with `.fixedSize(horizontal: false, vertical: true)`.
- [x] AC3: Each bullet has consistent horizontal padding (16pt) so text doesn't collide with screen edges.
- [x] AC4: The icon-to-text spacing within each bullet is consistent (8pt).
- [x] AC5: On iPhone SE with Dynamic Type set to "Largest" accessibility size: all bullets are still fully readable (may require scroll, but no truncation).
- [x] AC6: The CTA button remains visible below the last bullet with at least 20pt spacing.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 9.3.1 | Audit the `featureBullet` helper in `TierOnboardingFlow.swift`. Check current font, padding, line limit, and spacing values. | 30m | `TierOnboardingFlow.swift` |
| 9.3.2 | Update `featureBullet` to use adaptive font: `@Environment(\.horizontalSizeClass) var sizeClass` then `.font(sizeClass == .compact ? .callout : .body)`. | 30m | `TierOnboardingFlow.swift` |
| 9.3.3 | Set `.lineLimit(nil)` and `.fixedSize(horizontal: false, vertical: true)` on bullet text. Remove any hardcoded `.frame(height:)` on bullet rows. | 30m | `TierOnboardingFlow.swift` |
| 9.3.4 | Set consistent padding: `.padding(.horizontal, 16)` on the bullet container, `.padding(.leading, 8)` on text relative to icon. | 15m | `TierOnboardingFlow.swift` |
| 9.3.5 | Test with Dynamic Type accessibility sizes (Small through AX5). Verify no truncation at any size. | 1h | — |
| 9.3.6 | Add a minimum spacing of 20pt between the last bullet and the CTA button: `Spacer(minLength: 20)`. | 15m | `TierOnboardingFlow.swift` |

---

### Story 9.4: Onboarding Page Entrance Animations

**ID:** BUG-033  
**Priority:** P2  
**Points:** 5  
**Status:** � Done

**As a** new user,  
**I want** each onboarding page to have a polished entrance animation when I swipe to it,  
**So that** the onboarding feels premium and intentional, not like static slides.

#### Acceptance Criteria

- [x] AC1: When swiping to a new page, the content elements enter with staggered timing: icon (0s delay), title (0.1s), subtitle (0.15s), bullets (0.2s per bullet), CTA (0.3s after last bullet).
- [x] AC2: Entrance animations use `opacity(0→1)` combined with `offset(y: 20→0)` and `spring(duration: 0.5, bounce: 0.2)`.
- [x] AC3: The exit animation (swiping away) is a simple fade-out — no stagger on exit.
- [x] AC4: Animations only trigger when the page ENTERS the viewport for the first time; re-visiting a page does not re-trigger (use `@State var hasAppeared`).
- [x] AC5: The animations do not interfere with the TabView's paging gesture response time — they run concurrently with the page transition.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 9.4.1 | Add `@State private var hasAppeared: [Bool]` (4-element array, initialized to `[false, false, false, false]`) to track per-page animation state. | 15m | `TierOnboardingFlow.swift` |
| 9.4.2 | Add `@State private var showIcon = false`, `showTitle = false`, `showBullets = [false, false, false]`, `showCTA = false` per page (or use a single `animationPhase: Int` that triggers each element at a threshold). | 30m | `TierOnboardingFlow.swift` |
| 9.4.3 | Apply modifiers: `.opacity(showTitle ? 1 : 0)` `.offset(y: showTitle ? 0 : 20)` `.animation(.spring(duration: 0.5, bounce: 0.2).delay(0.1), value: showTitle)`. | 1h | `TierOnboardingFlow.swift` |
| 9.4.4 | Trigger animations on `.onAppear` of each page: set `hasAppeared[pageIndex] = true`, then trigger each `show*` state with `DispatchQueue.main.asyncAfter` or `Task.sleep` at the staggered delays. | 1h | `TierOnboardingFlow.swift` |
| 9.4.5 | Test all 4 pages: swipe forward and backward. Verify first-page animation triggers on launch, subsequent pages trigger on first swipe, re-visiting doesn't re-trigger. | 1h | — |

---
---

## Epic 10: Game Completion Flow

**Priority:** P1 — High  
**Rationale:** The game completion screen is the payoff — the moment the user sees their score, feels the accomplishment, and decides what to do next. Currently, the action buttons (Share, Next Category, Play Again, Back to Categories) are buried below a substantial amount of content: a 240pt hero icon, score animation, stats row, XP breakdown, tier-specific sections, and performance graphs. On most iOS phones, the user must scroll to find these buttons. This is a cardinal UX sin — the most important actions should be immediately accessible. The user should see their score AND their options in the same viewport.

**Affected Files:**
- `LumenLingo/Views/Games/FlashCardsView.swift` (contains shared `GameCompleteView`)
- Possibly: `LumenLingo/Views/Games/GrammarView.swift`, `LumenLingo/Views/Games/WordBuilderView.swift` (if they define their own complete views)

**Current Behavior:**
- `GameCompleteView` is a `ScrollView` with content in this order:
  1. Hero icon with orbital ring + radial glow (~240pt tall)
  2. Title + subtitle (performance tier)
  3. Score highlight (animated counter)
  4. Stats row (accuracy, correct, to review) — glassmorphic bar
  5. XP breakdown (multiplier section, conditional)
  6. Tier-specific sections (time/streak for Pro+, comparisons, performance graph for Elite+, shareable card for Royal)
  7. Action buttons (Next Category, Play Again, Back to Categories) — VStack
  8. PostSessionNudge (Free users)
  9. Spacer(minLength: 80)
- On iPhone SE, the buttons are well below the fold.

---

### Story 10.1: Lift Action Buttons Above the Fold

**ID:** BUG-034  
**Priority:** P1  
**Points:** 5  
**Status:** 🔴 Open

**As a** user who just completed a game,  
**I want** to see the action buttons (Next Category, Play Again, Back to Categories, Share) immediately without scrolling,  
**So that** I can quickly decide my next action and stay in the flow.

#### Acceptance Criteria

- [ ] AC1: Action buttons are pinned to the bottom of the screen, outside the ScrollView, in a fixed-position bar (similar to a toolbar or bottom sheet).
- [ ] AC2: The pinned button bar has a glassmorphic background (`.ultraThinMaterial`) with a gradient top border that fades into the scroll content above it.
- [ ] AC3: The button bar contains: primary CTA ("Next Category" or "Play Again" — whichever is most relevant), secondary CTA (the other one), tertiary "Back to Categories" as a text-only button, and a share icon button.
- [ ] AC4: The `ScrollView` content padding at the bottom accounts for the pinned button bar height (so the last content item doesn't hide behind the bar).
- [ ] AC5: On iPad (where space is abundant), the buttons remain in the scroll content at the bottom (no pinned bar needed).
- [ ] AC6: The pinned bar slides up with a spring animation (0.4s) when the completion view appears.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 10.1.1 | In `GameCompleteView`, split the action buttons out of the `ScrollView` and into a separate bottom bar using `VStack { ScrollView { ... } BottomActionBar() }` instead of everything inside a single `ScrollView`. | 2h | `FlashCardsView.swift` |
| 10.1.2 | Create `BottomActionBar`: `VStack(spacing: 8) { primaryButton, secondaryButton, tertiaryButton }` with `.background(.ultraThinMaterial)` and a gradient top border (thin line, tier colors). | 1h | `FlashCardsView.swift` |
| 10.1.3 | Add share button: `Button { ... } label: { Image(systemName: "square.and.arrow.up") }` positioned in the trailing corner of the bar using an `HStack`. | 30m | `FlashCardsView.swift` |
| 10.1.4 | Add bottom padding to the ScrollView: `.padding(.bottom, bottomBarHeight + 16)` where `bottomBarHeight` is calculated from the bar's frame. | 30m | `FlashCardsView.swift` |
| 10.1.5 | Add entrance animation: `.offset(y: showBar ? 0 : 200)` with `.animation(.spring(duration: 0.4, bounce: 0.15), value: showBar)`. Trigger `showBar = true` with a 0.5s delay after the view appears. | 30m | `FlashCardsView.swift` |
| 10.1.6 | Add `horizontalSizeClass` check: on regular width (iPad), don't use pinned bar — keep buttons in the scroll content. | 30m | `FlashCardsView.swift` |
| 10.1.7 | Test on iPhone SE, iPhone 16, iPhone 16 Pro Max, iPad Min. Verify buttons are visible without scroll on all phones, and scroll content doesn't hide behind the bar. | 1h | — |

---

### Story 10.2: Compact Hero Section for Mobile

**ID:** BUG-035  
**Priority:** P1  
**Points:** 5  
**Status:** 🔴 Open

**As a** user on a smaller phone,  
**I want** the game completion hero section (icon, score, stats) to be more compact,  
**So that** more content and options are visible in the initial viewport.

#### Acceptance Criteria

- [ ] AC1: The hero icon area is reduced from ~240pt to ~140pt on compact screens (35% reduction). The icon scales to fit within the smaller frame.
- [ ] AC2: The score and title are horizontally arranged (icon left, score + title right) on compact screens, instead of stacked vertically. This saves ~80pt of vertical space.
- [ ] AC3: On iPad/larger screens, the existing vertical layout is preserved.
- [ ] AC4: The orbital ring animation scales proportionally with the reduced icon size.
- [ ] AC5: The radial glow effect is reduced in radius (not overflowing the compact frame).
- [ ] AC6: The animated counter for the score still plays its full animation — the compaction doesn't skip any visual feedback.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 10.2.1 | Use `@Environment(\.horizontalSizeClass)` to detect compact vs. regular width. Create a `compactHeroLayout` and `regularHeroLayout` branch. | 1h | `FlashCardsView.swift` |
| 10.2.2 | `compactHeroLayout`: `HStack(alignment: .center, spacing: 16) { iconView(maxHeight: 140) VStack { titleText, scoreCounter, subtitleText } }`. | 2h | `FlashCardsView.swift` |
| 10.2.3 | Scale the orbital ring: bind its radius and stroke width to the icon container's height (e.g., `ringRadius = containerHeight * 0.45`). | 30m | `FlashCardsView.swift` |
| 10.2.4 | Cap the radial glow: `RadialGradient(..., startRadius: containerHeight * 0.2, endRadius: containerHeight * 0.6)`. | 30m | `FlashCardsView.swift` |
| 10.2.5 | Test compacted layout on iPhone SE. Verify the score, title, and icon are all visible with correct proportions. No visual clipping. | 1h | — |

---

### Story 10.3: Game Completion Share Card

**ID:** BUG-036  
**Priority:** P2  
**Points:** 5  
**Status:** 🔴 Open

**As a** learner who just completed a game,  
**I want** to share a beautifully designed result card on social media,  
**So that** I can celebrate my achievement and motivate others to learn.

#### Acceptance Criteria

- [ ] AC1: The "Share Result" action generates a 1080×1080 PNG card with: game type icon, category name, score, accuracy %, correct/total, streak count, user's tier badge, and LumenLingo branding.
- [ ] AC2: The card background uses the performance tier's gradient (Perfect = gold, Great = green, Good = blue, Needs Work = amber).
- [ ] AC3: The card is rendered from a dedicated `GameResultShareCard` SwiftUI view using `ImageRenderer`.
- [ ] AC4: The share sheet (`UIActivityViewController`) opens with the image and a pre-filled text: "I just scored X on [Category] in LumenLingo! 🎯"
- [ ] AC5: The share feature is available on all tiers (not tier-gated).
- [ ] AC6: A "Share" button with `.share` SF Symbol appears in the pinned bottom bar (Story 10.1).

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 10.3.1 | Create `GameResultShareCard.swift`: a fixed-size SwiftUI view with performance-tier gradient background, stats layout, and branding footer. | 2h | new `GameResultShareCard.swift` |
| 10.3.2 | Integrate `ImageRenderer` to convert the view to `UIImage`. Handle @2x/@3x scale factors for crisp output. | 1h | `FlashCardsView.swift` or `GameResultShareCard.swift` |
| 10.3.3 | Wire the share button: generate image → save to temp file → present `UIActivityViewController` with image + suggested text. | 1h | `FlashCardsView.swift` |
| 10.3.4 | Test share output in Messages, Photos, Instagram, Twitter/X. Verify image quality and text pre-fill. | 1h | — |

---

### Story 10.4: Smooth Transition from Game to Completion

**ID:** BUG-037  
**Priority:** P2  
**Points:** 3  
**Status:** 🔴 Open

**As a** user finishing a game,  
**I want** the transition from the last question to the completion screen to feel smooth and celebratory,  
**So that** the moment of completion feels like an achievement, not an abrupt screen swap.

#### Acceptance Criteria

- [ ] AC1: The last question card fades out (0.3s) while the completion hero icon fades in with a scale-up effect (0.5→1.0, 0.5s spring).
- [ ] AC2: The score counter starts its animation immediately as the hero section appears — no delay between screen transition and score reveal.
- [ ] AC3: A subtle haptic pattern plays at the moment of transition: `UINotificationFeedbackGenerator.notificationOccurred(.success)` for pass, `.warning` for fail.
- [ ] AC4: The stats row slides up from below (offset 40→0, 0.6s spring) with a 0.3s delay after the score appears.
- [ ] AC5: If the user achieved a perfect score, an additional confetti/sparkle effect bursts from the hero icon (using existing `SparkleUnlockEffect` or equivalent).

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 10.4.1 | Add `.matchedGeometryEffect` or `.transition` modifiers to manage the question→completion transition. Use `withAnimation(.spring(duration: 0.5, bounce: 0.2))` when setting `gameState = .completed`. | 1h | `FlashCardsView.swift` |
| 10.4.2 | Trigger the score counter animation on `.onAppear` of the hero section — ensure no `DispatchQueue.main.asyncAfter` delay before starting the count. | 30m | `FlashCardsView.swift` |
| 10.4.3 | Add haptic feedback: call `hapticsService.perfectScore()` for 100%, `hapticsService.correctAnswer()` for pass, `hapticsService.wrongAnswer()` for fail at the transition moment. | 30m | `FlashCardsView.swift` |
| 10.4.4 | Add staggered stats entry: delay stats row appearance by 0.3s using `.animation(.spring(...).delay(0.3), value: showStats)`. | 30m | `FlashCardsView.swift` |
| 10.4.5 | Add perfect score confetti: if accuracy == 100%, trigger `SparkleUnlockEffect` or equivalent particle burst from the hero icon center. | 1h | `FlashCardsView.swift` |

---
---

## Epic 11: Grammar Challenge UX Overhaul

**Priority:** P1 — High  
**Rationale:** The Grammar Challenge is described as "especially ugly" — a damning assessment from the product owner. The game has structural layout issues on mobile (answer options in a 2-column grid with word truncation), UX state management problems (grammar tips collapse state doesn't persist between sessions), and an overall visual treatment that lags behind the Flashcard and Word Builder games. The answer option grid is the most critical issue: a 2-column `LazyVGrid` with `.caption2` text truncates words, making it impossible to read longer answers. This is a functional defect masquerading as a cosmetic one.

**Affected Files:**
- `LumenLingo/Views/Games/GrammarView.swift` (entire game view)
- `LumenLingo/Services/` (persistence for tip collapse state)
- `LumenLingo/Models/` (if grammar data models need extension)

**Current Behavior:**
- Exercise header: back button, category name, score badge, progress bar, stats pills.
- Question card: glassmorphic card with purple gradient background for question text, answer options in 2-column `LazyVGrid` (letter badges A/B/C/D, option text, result icons).
- Grammar tip: uses `DisclosureGroup` — collapsible with lightbulb icon, "Grammar Tip" label, blue background. Starts expanded after answering (`showExplanation = true`). Collapse state is NOT persisted between sessions.
- Answer option text truncation: long answers (common in grammar: "They have been running since morning") get clipped in the narrow grid cells.
- The next button is a capsule with purple-pink gradient.
- The idle hint system glows the correct answer if user waits too long.

---

### Story 11.1: Fix Answer Option Text Truncation

**ID:** BUG-038  
**Priority:** P0  
**Points:** 5  
**Status:** 🔴 Open

**As a** user playing the Grammar Challenge,  
**I want** every answer option to be fully readable without any text being cut off,  
**So that** I can make an informed choice among the options.

#### Acceptance Criteria

- [ ] AC1: On iPhone (compact width): answer options use a **single-column layout** (full-width cards) instead of a 2-column grid. Each option occupies the full width of the card.
- [ ] AC2: On iPad (regular width): answer options use a 2-column layout with enough width per column for even the longest answer options.
- [ ] AC3: Option text uses `.body` font (not `.caption2` or `.footnote`) with `.lineLimit(nil)` — text wraps to as many lines as needed.
- [ ] AC4: Each option card has minimum height of 48pt (tappable area) but grows vertically to accommodate wrapped text.
- [ ] AC5: The letter badge (A/B/C/D) remains fixed-size and aligned to the top-left of its option card, even when text wraps.
- [ ] AC6: Option cards maintain 8pt spacing between them.
- [ ] AC7: All languages (including those with longer word structures like German compounds or Japanese phrases) display without truncation. Test with the longest known answer option in the content.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 11.1.1 | In `GrammarView.swift`, locate the `LazyVGrid` for answer options. Identify the column definition and cell content view. | 30m | `GrammarView.swift` |
| 11.1.2 | Replace the `LazyVGrid` with a conditional layout: `if horizontalSizeClass == .compact { VStack(spacing: 8) { ForEach(options) { OptionCard(option:) } } } else { LazyVGrid(columns: [.flexible(), .flexible()], spacing: 8) { ... } }`. | 1h | `GrammarView.swift` |
| 11.1.3 | Create `GrammarOptionCard` view: `HStack(alignment: .top, spacing: 12) { letterBadge(A/B/C/D, 32pt circle) VStack(alignment: .leading) { Text(option.text).font(.body).lineLimit(nil) } Spacer() resultIcon }`. Minimum card height: 48pt. | 2h | `GrammarView.swift` |
| 11.1.4 | Apply glassmorphic card background to each option: `.ultraThinMaterial` in a `RoundedRectangle(cornerRadius: 12)` with a colored border when selected (green for correct, red for wrong, neutral for unselected). | 1h | `GrammarView.swift` |
| 11.1.5 | Test with the longest answer option in the content files. Also test with German (compound words like "Donaudampfschifffahrtsgesellschaftskapitän") and Japanese. | 1h | — |
| 11.1.6 | Verify the idle hint glow still works correctly on the single-column layout. | 30m | `GrammarView.swift` |

---

### Story 11.2: Persist Grammar Tip Collapse State Between Sessions

**ID:** BUG-039  
**Priority:** P1  
**Points:** 3  
**Status:** 🔴 Open

**As a** user who prefers grammar tips collapsed,  
**I want** my collapse preference to be remembered between app sessions,  
**So that** I don't have to re-collapse the tips panel every time I play.

#### Acceptance Criteria

- [ ] AC1: The grammar tip collapse/expand state is persisted using `@AppStorage("grammarTipsCollapsed")`.
- [ ] AC2: On first launch (no persisted value), the default is EXPANDED (showing tips).
- [ ] AC3: When the user collapses the tip, the preference is saved immediately.
- [ ] AC4: On app relaunch, the tip starts in the user's last-chosen state.
- [ ] AC5: The tip can still be manually expanded/collapsed at any time during gameplay — the toggling is not disabled by the persisted default.
- [ ] AC6: If the user answers a question and the tip auto-reveals: it respects the persisted preference. If the user prefers collapsed, the tip does NOT auto-expand on answer. The correct/wrong indicator still shows, but the detailed explanation stays collapsed.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 11.2.1 | Replace `@State private var showExplanation = false` with `@AppStorage("grammarTipsCollapsed") private var tipsCollapsed = false`. | 15m | `GrammarView.swift` |
| 11.2.2 | Update the `DisclosureGroup` binding: `isExpanded: Binding(get: { !tipsCollapsed }, set: { tipsCollapsed = !$0 })`. | 30m | `GrammarView.swift` |
| 11.2.3 | Modify the auto-reveal after answering: `if !tipsCollapsed { withAnimation { showExplanation = true } }` — only auto-expand if the user hasn't set collapsed preference. | 30m | `GrammarView.swift` |
| 11.2.4 | Add a subtle indicator when tips are collapsed: a small lightbulb badge on the question card saying "Tip available" that pulses once, reminding the user they can expand. | 30m | `GrammarView.swift` |
| 11.2.5 | Test persistence: collapse tips → force-quit app → relaunch → start grammar game → verify tips start collapsed. Also test the reverse (expand → quit → relaunch → expanded). | 30m | — |

---

### Story 11.3: Redesign Grammar Question Card

**ID:** BUG-040  
**Priority:** P1  
**Points:** 5  
**Status:** 🔴 Open

**As a** user,  
**I want** the grammar question card to be visually polished and engaging,  
**So that** the Grammar Challenge feels as premium as the Flashcard and Word Builder games.

#### Acceptance Criteria

- [ ] AC1: The question text panel uses a deeper, richer gradient (dark purple → indigo → deep blue) with subtle noise texture overlay for visual depth.
- [ ] AC2: The question text is `.title3.bold()` with `.foregroundColor(.white)` and `.shadow(radius: 1)` for crisp visibility against the gradient.
- [ ] AC3: When the user answers correctly: the question panel transitions to a celebratory state with a green-to-emerald gradient and the correct answer highlighted with a glow effect.
- [ ] AC4: When the user answers incorrectly: the panel shows the correct answer in green and the selected wrong answer in red, with a brief shake animation on the wrong answer.
- [ ] AC5: The sentence context (the full sentence with the answer blank) is always visible — the blank is indicated by an underlined space or a glowing placeholder that the answer will fill.
- [ ] AC6: The card has a generous inner padding (20pt) and a visible border using the game's signature gradient (pink-rose).

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 11.3.1 | Update the question panel gradient: `LinearGradient(colors: [Color(hex: "#2E1065"), Color(hex: "#312E81"), Color(hex: "#1E3A5F")], startPoint: .topLeading, endPoint: .bottomTrailing)`. | 30m | `GrammarView.swift` |
| 11.3.2 | Add noise texture overlay: `Image("noise")` or generated noise using `Canvas` at 3% opacity over the gradient. | 30m | `GrammarView.swift` |
| 11.3.3 | Implement correct-answer state: animate gradient transition to green-emerald using `withAnimation(.easeInOut(duration: 0.4))` when the answer is revealed. | 1h | `GrammarView.swift` |
| 11.3.4 | Implement wrong-answer shake: `.modifier(ShakeEffect(shakes: 3, offset: 6))` on the selected wrong answer card, triggered on incorrect selection. | 1h | `GrammarView.swift` |
| 11.3.5 | Style the answer blank in the sentence: underlined space with a subtle pulse glow animation, filled with the answer text (green for correct, red for wrong) after selection. | 1h | `GrammarView.swift` |
| 11.3.6 | Add gradient border to the overall question card: `RoundedRectangle(cornerRadius: 20).stroke(LinearGradient(colors: [.pink, .rose, .purple], ...), lineWidth: 1.5)`. | 30m | `GrammarView.swift` |
| 11.3.7 | Test the full question→answer→reveal→next flow. Verify animations are smooth, colors transition correctly, and the shake effect doesn't feel janky. | 1h | — |

---

### Story 11.4: Redesign Grammar Next Button & Flow

**ID:** BUG-041  
**Priority:** P2  
**Points:** 3  
**Status:** 🔴 Open

**As a** user,  
**I want** the "Next" button in the Grammar Challenge to be prominent and satisfying to press,  
**So that** progressing through questions feels fluid and enjoyable.

#### Acceptance Criteria

- [ ] AC1: The "Next" button is full-width (matching the question card width) with generous height (52pt).
- [ ] AC2: The button uses the grammar game's signature gradient (pink → rose → purple) as its background.
- [ ] AC3: The button has an arrow-right icon after the "Next" text: `Label("Next", systemImage: "arrow.right")`.
- [ ] AC4: Press feedback: scale (0.97x) + brightness reduction (0.9x) + haptic (`hapticsService.buttonPress()`).
- [ ] AC5: The button only appears after the user has answered — it slides up (offset 40→0) with a spring animation (0.3s).
- [ ] AC6: After the last question, the button text changes to "See Results" with a `checkmark.circle` icon.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 11.4.1 | Resize the next button: `.frame(maxWidth: .infinity, minHeight: 52)` with `.clipShape(RoundedRectangle(cornerRadius: 16))`. | 30m | `GrammarView.swift` |
| 11.4.2 | Add the arrow icon: change label to `Label(isLastQuestion ? "See Results" : "Next", systemImage: isLastQuestion ? "checkmark.circle" : "arrow.right")`. | 30m | `GrammarView.swift` |
| 11.4.3 | Add slide-up entrance: `.offset(y: showNextButton ? 0 : 40)` with `.animation(.spring(duration: 0.3), value: showNextButton)`. Set `showNextButton = true` when the answer is selected. | 30m | `GrammarView.swift` |
| 11.4.4 | Add press feedback via `ButtonStyle`: `configuration.label.scaleEffect(configuration.isPressed ? 0.97 : 1.0).brightness(configuration.isPressed ? -0.1 : 0)` with haptic call. | 30m | `GrammarView.swift` |

---

### Story 11.5: Mobile-Optimized Grammar Game Layout

**ID:** BUG-042  
**Priority:** P1  
**Points:** 5  
**Status:** 🔴 Open

**As a** mobile user,  
**I want** the Grammar Challenge to be optimized for phone screens,  
**So that** every element is properly sized, spaced, and accessible without cropping.

#### Acceptance Criteria

- [ ] AC1: The exercise header uses the same responsive pattern as the other games — adapts padding, font sizes, and stats pill layout for compact width.
- [ ] AC2: The question card, answer options, grammar tip, and next button are all wrapped in a `ScrollView` so nothing is ever cropped, even with Dynamic Type enabled.
- [ ] AC3: Horizontal padding is consistent at 16pt on both sides for all elements.
- [ ] AC4: The answer option cards have a minimum tap target of 44×44pt (Apple HIG).
- [ ] AC5: The grammar tip `DisclosureGroup` has sufficient padding and does not collide with the answer options above or the next button below.
- [ ] AC6: The Stats pills (correct, wrong, streak) use adaptive sizing — `.caption` on small screens, `.footnote` on larger screens.
- [ ] AC7: No element has hardcoded `frame(width:)` or `frame(height:)` values that cause cropping on smaller screens. All use `.frame(maxWidth: .infinity)` or flexible sizing.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 11.5.1 | Audit all hardcoded `frame(width:)` and `frame(height:)` in `GrammarView.swift`. Replace with flexible equivalents (`.frame(maxWidth: .infinity)`, `.fixedSize(horizontal: false, vertical: true)`). | 1h | `GrammarView.swift` |
| 11.5.2 | Ensure the entire game content (below the header) is in a `ScrollView` with `.scrollDismissesKeyboard(.interactively)`. | 30m | `GrammarView.swift` |
| 11.5.3 | Set consistent padding: `.padding(.horizontal, 16)` on the main content stack. Remove any per-element horizontal padding that creates asymmetry. | 30m | `GrammarView.swift` |
| 11.5.4 | Add minimum tap targets: `.frame(minHeight: 44)` on all interactive elements (answer cards, next button, tip disclosure). | 30m | `GrammarView.swift` |
| 11.5.5 | Make stats pills adaptive: `@Environment(\.horizontalSizeClass)` → compact uses `.caption2`, regular uses `.caption`. | 30m | `GrammarView.swift` |
| 11.5.6 | Test with Dynamic Type at AX3 (large accessibility size) on iPhone SE. Verify all text wraps, no cropping, scroll works. | 1h | — |
| 11.5.7 | Test with all available language pairs — ensure grammar options in every language render without truncation. | 1h | — |

---
---

## Epic 12: Recent Activity Cross-Language Support

**Priority:** P1 — High  
**Rationale:** Users who study multiple language pairs expect to see their history regardless of which pair is currently selected. The current implementation queries ALL `GameProgressRecord` entries via `@Query` without filtering by language pair — but the display context implies the records belong to the active pair. When the user switches to a different language pair, the activity section shows "no content" instead of showing records from that pair. This creates a confusing experience: the user knows they studied that language, but the app acts as if they never did.

**Affected Files:**
- `LumenLingo/Views/Dashboard/DashboardView.swift` (`recentActivitySection`, lines ~528-620)
- `LumenLingo/Models/GameProgressRecord.swift` (data model, language pair field)
- `LumenLingo/Services/ContentLoader.swift` (active language pair)

**Current Behavior:**
- `recentActivitySection` fetches the last 5 `GameProgressRecord` entries sorted by `createdDate` descending.
- The query is unfiltered — it pulls ALL records regardless of language pair.
- Each row shows: game type icon, game type + category name, XP, correct/total, time ago.
- When a different language pair is selected, the section may show records from other pairs or show "no content" — the behavior is inconsistent because the query doesn't filter.
- Tapping a record navigates to the game — but if the record is from a different language pair than the active one, the navigation may fail or show wrong content.

---

### Story 12.1: Filter Recent Activity by Active Language Pair

**ID:** BUG-043  
**Priority:** P1  
**Points:** 5  
**Status:** 🔴 Open

**As a** user with activity across multiple language pairs,  
**I want** the Recent Activity section to show records from my currently active language pair,  
**So that** I see relevant, contextual activity that matches what I'm currently studying.

#### Acceptance Criteria

- [ ] AC1: The Recent Activity query filters `GameProgressRecord` by the currently active language pair (e.g., `sourceLanguage == "english" && targetLanguage == "spanish"`).
- [ ] AC2: If `GameProgressRecord` doesn't have language pair fields, those fields are added to the model with a migration plan for existing data.
- [ ] AC3: When switching language pairs, the activity section updates immediately to show records from the new pair.
- [ ] AC4: If the active language pair has no activity records, show a friendly empty state: "No activity yet for [Language] → [Language]. Start a game to see your progress here!" with a play button CTA.
- [ ] AC5: The query still limits to the most recent 5 records after filtering.
- [ ] AC6: No existing records are lost during the migration — records without language pair data are treated as belonging to the previous default pair (English → Spanish).

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 12.1.1 | Audit `GameProgressRecord` model: check if `sourceLanguage` and `targetLanguage` fields exist. If not, add them with `@Attribute` annotations and default values. | 1h | `GameProgressRecord.swift` |
| 12.1.2 | Create a SwiftData migration (if adding fields): default existing records to `sourceLanguage: "english"`, `targetLanguage: "spanish"` (the app's original default pair). | 1h | `GameProgressRecord.swift`, migration plan |
| 12.1.3 | Update all code paths that CREATE `GameProgressRecord` to populate `sourceLanguage` and `targetLanguage` from the active language pair at the time of the game. | 1h | `FlashCardsView.swift`, `GrammarView.swift`, `WordBuilderView.swift` |
| 12.1.4 | Update the `@Query` in `recentActivitySection` to filter by active language pair: `#Predicate<GameProgressRecord> { $0.sourceLanguage == activeSource && $0.targetLanguage == activeTarget }`. | 1h | `DashboardView.swift` |
| 12.1.5 | Create the empty state view: `ContentUnavailableView` with flag icons, encouraging text, and a "Start Playing" CTA button that navigates to the game selection screen. | 30m | `DashboardView.swift` |
| 12.1.6 | Test: play games in English→Spanish, switch to English→French, verify activity shows "no activity" (not English→Spanish records). Play French games, verify they appear. Switch back to English→Spanish, verify original records still show. | 1h | — |

---

### Story 12.2: Cross-Language Activity Tab

**ID:** BUG-044  
**Priority:** P2  
**Points:** 5  
**Status:** 🔴 Open

**As a** multilingual learner,  
**I want** an option to view Recent Activity across ALL language pairs at once,  
**So that** I can see my total learning history regardless of the active pair.

#### Acceptance Criteria

- [ ] AC1: A segmented control or toggle appears above the Recent Activity section: "This Language" (default) | "All Languages".
- [ ] AC2: "This Language" shows filtered results (Story 12.1 behavior).
- [ ] AC3: "All Languages" shows the most recent 10 records across all language pairs, with a language pair badge on each row (e.g., "EN→ES" or flag icons).
- [ ] AC4: The toggle state persists within the session but resets to "This Language" on app relaunch.
- [ ] AC5: The language pair badge uses the same flag/label convention as the language selection view.
- [ ] AC6: Tapping a record from a different language pair shows a confirmation: "This game was in [Language Pair]. Switch to it and play?" — with options to switch or cancel.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 12.2.1 | Add `@State private var showAllLanguages = false` to the recent activity section. Create a `Picker("", selection: $showAllLanguages) { ... }.pickerStyle(.segmented)` above the activity list. | 30m | `DashboardView.swift` |
| 12.2.2 | When `showAllLanguages == true`, use an unfiltered `@Query` (current behavior) with limit increased to 10. | 30m | `DashboardView.swift` |
| 12.2.3 | Add language pair badge to each row when showing all languages: `Text(record.languagePairLabel).font(.caption2).padding(.horizontal, 6).padding(.vertical, 2).background(Capsule().fill(.ultraThinMaterial))`. | 30m | `DashboardView.swift` |
| 12.2.4 | When tapping a cross-language record: show `.confirmationDialog` with switch and cancel options. If switch, update active language pair and navigate. | 1h | `DashboardView.swift` |
| 12.2.5 | Test: play in 3 language pairs, switch to "All Languages", verify all records appear with correct badges and chronological order. | 1h | — |

---

### Story 12.3: Language Pair Badge Component

**ID:** BUG-045  
**Priority:** P2  
**Points:** 3  
**Status:** 🔴 Open

**As a** developer,  
**I want** a reusable `LanguagePairBadge` component,  
**So that** language pair displays are consistent across Recent Activity, Game Completion, Journey Stats, and any future multi-language features.

#### Acceptance Criteria

- [ ] AC1: A `LanguagePairBadge` view accepts `sourceLanguage: String` and `targetLanguage: String`.
- [ ] AC2: It displays either flag emojis (🇬🇧→🇪🇸) or short codes ("EN→ES") based on a preference/space constraint.
- [ ] AC3: It uses a compact capsule layout with `.ultraThinMaterial` background and tier-colored border.
- [ ] AC4: It has a `.compact` and `.full` display mode: compact shows "EN→ES", full shows "English → Spanish".
- [ ] AC5: The badge is accessible: VoiceOver reads "English to Spanish" regardless of display mode.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 12.3.1 | Create `LanguagePairBadge.swift` in `Views/Shared/`. Define `init(source:target:displayMode:)` with `.compact` and `.full` enum options. | 1h | new `LanguagePairBadge.swift` |
| 12.3.2 | Create a language-to-flag mapping dictionary: `["english": "🇬🇧", "spanish": "🇪🇸", "french": "🇫🇷", ...]`. | 30m | `LanguagePairBadge.swift` |
| 12.3.3 | Style the badge: capsule background with `.ultraThinMaterial`, 6pt horizontal padding, 2pt vertical padding. | 30m | `LanguagePairBadge.swift` |
| 12.3.4 | Add `.accessibilityLabel("\(source) to \(target)")` for VoiceOver support. | 15m | `LanguagePairBadge.swift` |
| 12.3.5 | Use the badge in `recentActivitySection` for "All Languages" mode (Story 12.2). | 15m | `DashboardView.swift` |

---
---

## Epic 13: Word Constructor Polish

**Priority:** P1 — High  
**Rationale:** The Word Constructor (Word Builder) has two specific defects: (1) The "BUILD THE WORD" label text appears unnecessarily alongside the `textformat.abc` icon — the user reports seeing "ABS Build the word" which may be the icon's alt text rendering or a encoding issue, and it should be cleaned up or removed. (2) Button text (particularly the "Check" button) is partially cut off on some devices and languages, making it impossible for users to understand what the button does. In a language learning app, cut-off text is particularly ironic and unacceptable.

**Affected Files:**
- `LumenLingo/Views/Games/WordBuilderView.swift` (clue section, check button, all buttons)
- Localization files (if button text lengths vary by language)

**Current Behavior:**
- The clue section shows a `textformat.abc` SF Symbol icon with a pulse animation, followed by `L.buildTheWord` text in `.caption.bold()` uppercase with letter spacing, then the hint text in `.title2.bold()`.
- The user reports seeing "ABS Build the word" — the "ABS" may be the `textformat.abc` icon rendering as text, or a localization artifact.
- Button text uses `.lineLimit(1)` or no `minimumScaleFactor`, causing truncation on smaller screens or with longer localized strings.
- The "Check" button is a capsule with the game's gradient — but if the label text is long (e.g., "Überprüfen" in German, "Vérifier" in French), it clips.

---

### Story 13.1: Remove "ABS" / "BUILD THE WORD" Clue Label

**ID:** BUG-046  
**Priority:** P1  
**Points:** 2  
**Status:** 🔴 Open

**As a** user playing Word Constructor,  
**I want** the "BUILD THE WORD" label and any spurious "ABS" text to be removed from the clue section,  
**So that** the interface is clean and the focus is on the hint and the letter tiles.

#### Acceptance Criteria

- [ ] AC1: The `textformat.abc` icon is removed from the clue section entirely.
- [ ] AC2: The `L.buildTheWord` ("BUILD THE WORD") text label is removed.
- [ ] AC3: The clue section shows ONLY: the hint text (the word definition or clue) in `.title3.bold()` font with the warm gold gradient, centered.
- [ ] AC4: The hint text has sufficient padding (16pt horizontal) and proper line wrapping for long hints.
- [ ] AC5: No residual "ABS" text appears anywhere in the Word Builder game.
- [ ] AC6: The visual hierarchy is clear: hint text is the primary element in the clue section, styled as a featured card.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 13.1.1 | In `WordBuilderView.swift`, locate the clue section (around line 340-380). Identify the `Image(systemName: "textformat.abc")` and `Text(L.buildTheWord)` elements. | 15m | `WordBuilderView.swift` |
| 13.1.2 | Remove the `Image(systemName: "textformat.abc")` view and its pulse animation modifiers. | 15m | `WordBuilderView.swift` |
| 13.1.3 | Remove the `Text(L.buildTheWord)` view and its styling (`.caption.bold()`, uppercase, letter spacing). | 15m | `WordBuilderView.swift` |
| 13.1.4 | Verify the hint text (`Text(currentWord.hint)` or equivalent) remains as the sole content of the clue section. Ensure it's centered with proper padding. | 15m | `WordBuilderView.swift` |
| 13.1.5 | Run `grep -rn "textformat.abc\|buildTheWord\|BUILD THE WORD" --include="*.swift"` to ensure no other references remain. | 10m | All Swift files |

---

### Story 13.2: Fix Button Text Truncation Across All Languages

**ID:** BUG-047  
**Priority:** P0  
**Points:** 5  
**Status:** 🔴 Open

**As a** user in any language,  
**I want** all button labels in the Word Constructor to be fully visible without text being cut off,  
**So that** I know what each button does.

#### Acceptance Criteria

- [ ] AC1: The "Check" button label is fully visible in all supported languages (English, Spanish, German, French, Japanese, etc.). Test with the longest known translation.
- [ ] AC2: All buttons use `minimumScaleFactor(0.7)` to scale text down on narrow screens rather than truncating.
- [ ] AC3: Buttons use `.lineLimit(1)` WITH `minimumScaleFactor` — allowing text to shrink but never wrap or truncate.
- [ ] AC4: The minimum recommended tap target size (44×44pt per Apple HIG) is maintained for all buttons, even after text scaling.
- [ ] AC5: This fix applies to ALL interactive buttons in the Word Constructor: Check, Hint, Clear, Shuffle, Skip, and any other game-state buttons.
- [ ] AC6: Button text remains centered and visually balanced at all scale factors.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 13.2.1 | Audit all buttons in `WordBuilderView.swift`: list each button's label text, current font size, lineLimit, and frame constraints. | 30m | `WordBuilderView.swift` |
| 13.2.2 | For each button, add `.minimumScaleFactor(0.7)` if not present. Ensure `.lineLimit(1)` is set. | 30m | `WordBuilderView.swift` |
| 13.2.3 | For buttons with fixed `frame(width:)`: replace with `frame(minWidth: 80, maxWidth: .infinity)` or remove the fixed width entirely, using padding-based sizing instead. | 1h | `WordBuilderView.swift` |
| 13.2.4 | Verify minimum tap target: add `.frame(minHeight: 44)` if any button is shorter than 44pt. | 15m | `WordBuilderView.swift` |
| 13.2.5 | Test with all available languages. For each: set the app language, play Word Constructor, check every button label for truncation. Document results in a test matrix. | 2h | — |
| 13.2.6 | If any language's translations consistently exceed button width even at 70% scale, file a follow-up to abbreviate those specific translations. | 15m | Localization files |

---

### Story 13.3: Word Constructor Clue Card Redesign

**ID:** BUG-048  
**Priority:** P2  
**Points:** 3  
**Status:** 🔴 Open

**As a** user,  
**I want** the clue/hint card in Word Constructor to be visually polished,  
**So that** reading the clue feels like part of a premium learning experience.

#### Acceptance Criteria

- [ ] AC1: The clue text is presented inside a glassmorphic card with a warm gradient border (gold → orange, matching the game's color scheme).
- [ ] AC2: The card has inner padding of 20pt and uses `.ultraThinMaterial` background.
- [ ] AC3: The hint text uses `.title3.bold()` with the warm gold `foregroundStyle` gradient.
- [ ] AC4: A subtle "lightbulb.fill" icon appears in the top-right corner of the card (small, 12pt, at 50% opacity) as a hint indicator.
- [ ] AC5: The card enters with a fade-in animation when a new word is presented.
- [ ] AC6: On both light and dark mode, the card is readable and beautiful.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 13.3.1 | Wrap the clue text in a glassmorphic card: `RoundedRectangle(cornerRadius: 16).fill(.ultraThinMaterial)` with `.overlay(RoundedRectangle(cornerRadius: 16).stroke(goldGradient, lineWidth: 1))`. | 30m | `WordBuilderView.swift` |
| 13.3.2 | Add lightbulb indicator: `.overlay(alignment: .topTrailing) { Image(systemName: "lightbulb.fill").font(.caption2).foregroundStyle(.secondary.opacity(0.5)).padding(8) }`. | 15m | `WordBuilderView.swift` |
| 13.3.3 | Add fade-in animation on word change: `.transition(.opacity)` with `.id(currentWord.id)` to force view replacement on word change. | 30m | `WordBuilderView.swift` |
| 13.3.4 | Test in light and dark mode. Verify card aesthetics and text readability. | 30m | — |

---
---

## Epic 14: Royal Paywall Visual Integrity

**Priority:** P0 — Critical  
**Rationale:** See Story 5.3 for the full context. This Epic is carved out separately because the Royal paywall visibility issue affects multiple surfaces beyond just the Membership view. Every paywall — `UpgradePromptView` (shown when a locked feature is tapped), inline tier badges, and the Royal card in MembershipView — must have opaque, visually striking CTA buttons. A transparent button on a complex background is effectively an invisible button. Invisible buttons on a paywall equals zero conversions.

**Affected Files:**
- `LumenLingo/Views/Membership/UpgradePromptView.swift`
- `LumenLingo/Views/Membership/MembershipView.swift`
- Any view using `PremiumFeatureBadge` as a CTA
- Shared button style files

**Note:** Story 5.3 covers the direct fix. This Epic extends the fix to all paywall surfaces and establishes a shared component to prevent regression.

---

### Story 14.1: Audit All Paywall CTA Buttons

**ID:** BUG-049  
**Priority:** P0  
**Points:** 3  
**Status:** � Done

**As a** developer,  
**I want** a complete inventory of every paywall CTA button in the app,  
**So that** I can verify each one has an opaque background and sufficient contrast.

#### Acceptance Criteria

- [x] AC1: A documented inventory lists every paywall CTA button with: location (file + line), current background treatment (gradient/solid/transparent), text color, and contrast ratio assessment (pass/fail at 4.5:1 WCAG AA).
- [x] AC2: The inventory covers: MembershipView tier cards, UpgradePromptView CTAs, PremiumFeatureBadge tappable instances, any inline "Upgrade" buttons in game views, PostSessionNudge buttons, onboarding CTAs.
- [x] AC3: Every button is categorized as PASS (opaque, readable) or FAIL (transparent, low contrast, invisible on some backgrounds).

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 14.1.1 | Search the codebase for all paywall-related buttons: `grep -rn "Upgrade\|Ascend\|Start Free Trial\|Start Trial\|Go Premium\|Unlock\|upgrade.*Button\|ctaButton" --include="*.swift"`. | 30m | All Swift files |
| 14.1.2 | For each found button, read the file and document: background modifier, text color, font, frame, and any opacity modifiers. | 1h | Multiple files |
| 14.1.3 | Calculate contrast ratios using the WCAG formula for each button text/background combination in both light and dark mode. | 1h | — |
| 14.1.4 | Create the inventory table in this document or a separate `PAYWALL_AUDIT.md`. Label each as PASS or FAIL. | 30m | — |

---

### Story 14.2: Create Shared PremiumCTAButton Component

**ID:** BUG-050  
**Priority:** P1  
**Points:** 5  
**Status:** � Done

**As a** developer,  
**I want** a single `PremiumCTAButton` component that all paywall surfaces use,  
**So that** every paywall button is guaranteed to be opaque, readable, and premium-looking — with one source of truth.

#### Acceptance Criteria

- [x] AC1: `PremiumCTAButton` is a reusable SwiftUI view in `Views/Shared/`.
- [x] AC2: It accepts: `title: String`, `tier: MembershipTier`, `action: () -> Void`, optional `icon: String?` (SF Symbol).
- [x] AC3: Background: always opaque `LinearGradient` using the tier's gradient colors. No `.opacity()` modifiers.
- [x] AC4: Text: `.white` with `.semibold` weight, `.body` font size minimum. Never truncated (`.minimumScaleFactor(0.8)`).
- [x] AC5: Shadow: `shadow(color: tier.gradientColors.first.opacity(0.4), radius: 10, y: 4)` for depth.
- [x] AC6: Press feedback: scale 0.95x + brightness -0.05 via `ButtonStyle`.
- [x] AC7: Haptic: `hapticsService.buttonPress()` on tap.
- [x] AC8: Full-width by default (`.frame(maxWidth: .infinity, minHeight: 50)`) with 16pt corner radius.
- [x] AC9: All existing paywall CTAs in `UpgradePromptView`, `MembershipView`, `PostSessionNudge`, and onboarding are migrated to use this component.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 14.2.1 | Create `PremiumCTAButton.swift` in `Views/Shared/`. Implement the view with gradient background, text, shadow, and `PremiumCTAButtonStyle`. | 1h | new `PremiumCTAButton.swift` |
| 14.2.2 | Create `PremiumCTAButtonStyle`: `makeBody(configuration:)` with `scaleEffect(isPressed ? 0.95 : 1.0)` and `brightness(isPressed ? -0.05 : 0)`. | 30m | `PremiumCTAButton.swift` |
| 14.2.3 | Migrate `MembershipView` tier card CTAs to use `PremiumCTAButton(title: tier.ctaText, tier: tier) { ... }`. | 1h | `MembershipView.swift` |
| 14.2.4 | Migrate `UpgradePromptView` CTA to use `PremiumCTAButton`. | 30m | `UpgradePromptView.swift` |
| 14.2.5 | Migrate `PostSessionNudge` and any other upgrade prompts to use `PremiumCTAButton`. | 30m | Multiple files |
| 14.2.6 | Migrate onboarding CTAs in `TierOnboardingFlow` to use `PremiumCTAButton`. | 30m | `TierOnboardingFlow.swift` |
| 14.2.7 | Test all migrated buttons in light and dark mode. Screenshot every paywall surface at each tier transition. | 1h | — |

---

### Story 14.3: Visual Regression Test for Paywall Buttons

**ID:** BUG-051  
**Priority:** P2  
**Points:** 5  
**Status:** � Done

**As a** developer,  
**I want** automated visual tests that verify paywall button visibility,  
**So that** future changes cannot accidentally make buttons transparent or unreadable.

#### Acceptance Criteria

- [x] AC1: Snapshot tests capture the rendered appearance of every paywall CTA button.
- [x] AC2: Tests run in both light and dark color schemes.
- [x] AC3: Tests cover all 5 tiers (Free, Pro, Elite, Royal, Trial) to verify tier-specific gradients render correctly.
- [x] AC4: A test verifies that the button background alpha channel is ≥ 0.95 at every sampled pixel (no transparency).
- [ ] AC5: Tests fail loudly with visual diff images when a regression is detected.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 14.3.1 | Add snapshot test infrastructure: integrate `swift-snapshot-testing` or use `ImageRenderer` to capture button renders as UIImages. | 1h | Package.swift or SPM config |
| 14.3.2 | Write snapshot tests for `PremiumCTAButton` in all 5 tier variants × 2 color schemes = 10 snapshots. | 1h | Tests |
| 14.3.3 | Write an alpha-channel test: render `PremiumCTAButton` to an image, sample center pixel, assert alpha ≥ 0.95. | 1h | Tests |
| 14.3.4 | Add the visual tests to the CI/CD pipeline (triggered on every PR that modifies paywall files). | 1h | CI config |
| 14.3.5 | Baseline: run all snapshot tests and commit reference images. | 30m | Tests |

---
---

## Epic 15: Haptic Feedback Integration

**Priority:** P1 — High  
**Rationale:** The app has a sophisticated haptics system (`HapticsService` with pre-warmed generators, anti-spam cooldowns, tier-aware `TierHapticsService`, and semantic methods for every game interaction). Yet the user reports "literally no feel, no vibrations, no tactile responses" on mobile. This means either: (A) the haptics are not wired to the UI interactions the user expects, (B) the `hapticsEnabled` flag is defaulting to `false`, (C) the cooldown system is too aggressive, or (D) the haptic calls are present but not executing on the main thread. This is an investigation-first Epic — the fix depends on the root cause.

**Affected Files:**
- `LumenLingo/Services/HapticsService.swift` (core haptics)
- `LumenLingo/Services/TierHapticsService.swift` (tier-aware haptics)
- `LumenLingo/Models/UserProfile.swift` (hapticsEnabled flag)
- All game views and interactive views (where haptics should fire)

**Current Behavior:**
- `HapticsService` is an `@Observable` singleton with methods: `cardFlip()`, `tilePick()`, `tileSnap()`, `correctAnswer()`, `wrongAnswer()`, `streakBuilding()`, `celebrate()`, `perfectScore()`, `gameStart()`, `buttonPress()`, `tabSwitch()`, `toggleSwitch()`.
- Each method checks `isEnabled` (from `UserProfile.hapticsEnabled`) and `canFire(action:)` (anti-spam cooldown).
- `TierHapticsService` adds tier-gated complexity (basic/enhanced/rich/premium haptic patterns).
- The service is reportedly used in FlashCardsView, GrammarView, WordBuilderView, ProfileView, DashboardView, MembershipView, FeatureTransitionOverlay.
- The master toggle `isEnabled` is synced from `UserProfile.hapticsEnabled`.

---

### Story 15.1: Diagnose Haptic Feedback Failure

**ID:** BUG-052  
**Priority:** P0  
**Points:** 3  
**Status:** 🔴 Open

**As a** developer,  
**I want** to identify the root cause of why haptic feedback is not felt on device,  
**So that** I can apply the correct fix without guessing.

#### Acceptance Criteria

- [ ] AC1: A diagnostic checklist is completed:
  - [ ] Is `UserProfile.hapticsEnabled` defaulting to `true`? (Check the model's default value)
  - [ ] Is `HapticsService.isEnabled` being set correctly from the profile on launch?
  - [ ] Are haptic calls happening on the main thread? (UIFeedbackGenerators require main thread)
  - [ ] Is `canFire(action:)` blocking too many calls? (Check cooldown intervals)
  - [ ] Are the `UIImpactFeedbackGenerator`s being prepared (`prepare()`) before firing?
  - [ ] Is the simulator filtering haptics? (Haptics don't work on simulator — must test on device)
  - [ ] Does `CHHapticEngine.capabilitiesForHardware().supportsHaptics` return true on the test device?
- [ ] AC2: Debug logging is added to `HapticsService`: each haptic method logs `[Haptics] buttonPress: enabled=\(isEnabled), canFire=\(canFire("buttonPress"))` to console.
- [ ] AC3: A quick verification button is added to the Debug Panel: "Test Haptics" that fires `hapticsService.correctAnswer()` directly — if the user feels it, the service works; if not, it's a hardware/configuration issue.
- [ ] AC4: Root cause is identified and documented.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 15.1.1 | Read `UserProfile.swift` and check the default value of `hapticsEnabled`. If it's `false` by default, change it to `true`. | 15m | `UserProfile.swift` |
| 15.1.2 | Read `HapticsService.swift` initialization flow. Verify `isEnabled` is set from the profile on `init` or `configure(profile:)`. | 30m | `HapticsService.swift` |
| 15.1.3 | Add `print("[Haptics] \(action): enabled=\(isEnabled), canFire=\(canFire(action))")` to the beginning of each haptic method (gated behind `#if DEBUG`). | 30m | `HapticsService.swift` |
| 15.1.4 | Verify all haptic calls are dispatched on the main thread. Search for `.task { ... haptics... }` or `Task { ... haptics... }` — if haptics are called from async contexts, they may not be on MainActor. Wrap in `await MainActor.run { }` if needed. | 1h | Multiple files |
| 15.1.5 | Add "Test Haptics" section to Debug Panel: a button that calls `hapticsService.correctAnswer()` and `hapticsService.celebrate()` directly. | 30m | `DebugPanelView.swift` |
| 15.1.6 | Test on a physical device (not simulator). Document whether haptics fire from the Debug Panel test button. | 30m | — |

---

### Story 15.2: Wire Haptics to All Interactive Elements

**ID:** BUG-053  
**Priority:** P1  
**Points:** 5  
**Status:** 🔴 Open

**As a** user,  
**I want** to feel haptic feedback on every meaningful interaction in the app,  
**So that** the app feels alive, responsive, and premium.

#### Acceptance Criteria

- [ ] AC1: The following interactions produce haptic feedback:
  - Tab bar switches → `tabSwitch()` (light selection feedback)
  - Button presses (all CTA buttons, game buttons) → `buttonPress()` (medium impact)
  - Toggle switches → `toggleSwitch()` (selection feedback)
  - Card flips (flashcards) → `cardFlip()` (medium impact)
  - Correct answer → `correctAnswer()` (success notification)
  - Wrong answer → `wrongAnswer()` (error notification)
  - Streak milestone (every 5) → `streakBuilding()` (rigid impact)
  - Game start → `gameStart()` (heavy impact)
  - Game completion → `celebrate()` or `perfectScore()` (success notification + impacts)
  - Tier transition → `celebrate()` (success notification)
  - Pull-to-refresh → `buttonPress()` (light impact)
  - Collapsible section toggle → `toggleSwitch()` (selection feedback)
  - Word builder tile pick → `tilePick()` (soft impact)
  - Word builder tile snap → `tileSnap()` (rigid impact)
- [ ] AC2: Each haptic call is wrapped in `@MainActor` context to ensure it executes on the main thread.
- [ ] AC3: No duplicate haptics fire for a single interaction (the anti-spam cooldown handles this, but verify).
- [ ] AC4: The haptic intensity is appropriate: subtle for frequent actions (tab switches), stronger for achievements (correct answer), strongest for celebrations (perfect score).

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 15.2.1 | Audit every interactive element across all views: list each interaction and whether it currently calls a `HapticsService` method. Create a coverage matrix. | 1h | All view files |
| 15.2.2 | For each missing haptic call, add the appropriate `hapticsService.method()` call at the point of interaction (button action closure, tap gesture handler, toggle binding). | 3h | Multiple files |
| 15.2.3 | Verify MainActor context: for any haptic call inside a `Task { }` or async closure, wrap in `await MainActor.run { hapticsService.method() }`. | 1h | Multiple files |
| 15.2.4 | Test each interaction on a physical device. Walk through: launch → tab switch → start game → answer correct → answer wrong → streak → complete → share → profile → toggle → switch tier. Document each haptic felt. | 1h | — |

---

### Story 15.3: Reduce Anti-Spam Cooldown Aggressiveness

**ID:** BUG-054  
**Priority:** P1  
**Points:** 3  
**Status:** 🔴 Open

**As a** user,  
**I want** haptic feedback to fire every time I perform an action (not silently blocked by cooldowns),  
**So that** the app always feels responsive to my touches.

#### Acceptance Criteria

- [ ] AC1: The default cooldown interval for all haptic actions is ≤ 100ms (10 per second). Currently, if cooldowns are longer (e.g., 500ms), they would suppress rapid interactions like fast tile picks in Word Builder.
- [ ] AC2: Exception: `celebrate()` and `perfectScore()` can have longer cooldowns (500ms) since they're one-time events.
- [ ] AC3: Cooldown values are configurable per action (not a single global value).
- [ ] AC4: The `canFire(action:)` method is reviewed and verified to use the correct cooldown per action.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 15.3.1 | Read `HapticsService.swift` `canFire(action:)` implementation. Document current cooldown values for each action. | 30m | `HapticsService.swift` |
| 15.3.2 | Adjust cooldowns: `buttonPress: 80ms`, `tabSwitch: 150ms`, `tilePick: 50ms`, `tileSnap: 50ms`, `cardFlip: 100ms`, `correctAnswer: 200ms`, `wrongAnswer: 200ms`, `celebrate: 500ms`, `perfectScore: 500ms`. | 30m | `HapticsService.swift` |
| 15.3.3 | Test rapid interactions: tap a game answer option 5 times in 1 second — all 5 should produce haptic feedback (not just the first). | 30m | — |
| 15.3.4 | Test Word Builder rapid tile picks: drag 5 tiles in quick succession — each pick should produce a haptic. | 30m | — |

---

### Story 15.4: Add Haptics Toggle Visibility in Profile

**ID:** BUG-055  
**Priority:** P2  
**Points:** 2  
**Status:** 🔴 Open

**As a** user,  
**I want** the haptics setting to be easily discoverable in the Profile/Settings page,  
**So that** I can enable or disable haptic feedback based on my preference.

#### Acceptance Criteria

- [ ] AC1: A "Haptic Feedback" toggle is visible in the Sound settings section of the Profile page (it logically groups with sensory settings).
- [ ] AC2: The toggle label includes a brief description: "Feel vibrations when interacting with the app".
- [ ] AC3: Toggling the switch produces an immediate haptic sample (if enabling) so the user confirms it works.
- [ ] AC4: If the device doesn't support haptics (`CHHapticEngine.capabilitiesForHardware().supportsHaptics == false`), the toggle is hidden and a note reads "Haptic feedback is not available on this device."
- [ ] AC5: The toggle state is persisted via `UserProfile.hapticsEnabled`.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 15.4.1 | Verify where the haptics toggle currently lives in the Profile view hierarchy. If it's already in SoundSettingsView, ensure it's visible and labeled. | 15m | `SoundSettingsView.swift` or `ProfileView.swift` |
| 15.4.2 | Add the description label: `Text("Feel vibrations when interacting with the app").font(.caption).foregroundStyle(.secondary)` below the toggle. | 15m | `SoundSettingsView.swift` |
| 15.4.3 | Add device capability check: `if CHHapticEngine.capabilitiesForHardware().supportsHaptics { ... } else { Text("Not available on this device") }`. | 30m | `SoundSettingsView.swift` |
| 15.4.4 | Add immediate feedback on enable: `Toggle(isOn: $hapticsEnabled) { ... }.onChange(of: hapticsEnabled) { if hapticsEnabled { hapticsService.buttonPress() } }`. | 15m | `SoundSettingsView.swift` |
| 15.4.5 | Test on a physical device: toggle on → feel haptic → toggle off → no haptic. Test on simulator: toggle should be hidden. | 15m | — |

---
---

## Epic 16: Game Header UX Redesign

**Priority:** P2 — Medium  
**Rationale:** All three games (Flashcards, Grammar, Word Builder) have independently defined exercise headers that share the same structure but differ in implementation details. The headers work functionally but lack the visual polish and unified design language that would make users "fall in love" with the game experience. The header is the constant anchor point during gameplay — it should feel premium, informative, and non-intrusive. Currently, it's a functional toolbar with mismatched styling across games (e.g., Flashcards uses `.glassEffect` while Grammar uses `.background(Capsule().fill(...))`).

**Affected Files:**
- `LumenLingo/Views/Games/FlashCardsView.swift` (exerciseHeader, ~lines 292-370)
- `LumenLingo/Views/Games/GrammarView.swift` (exerciseHeader, ~lines 218-290)
- `LumenLingo/Views/Games/WordBuilderView.swift` (exerciseHeader, ~lines 235-310)
- New shared component file

**Current Behavior:**
- Each game has its own `exerciseHeader` computed property with the same structure:
  1. Top row: Back button (chevron.left + "Back"), category name (centered), score badge (bolt.fill + score)
  2. Progress bar: `AnimatedProgressBar` with game-specific gradient colors
  3. Stats row: correct (green pill), wrong (orange pill), streak (flame pill when > 0), question counter
- Flashcards uses `.glassEffect` (iOS 26 API) for stat pills
- Grammar and Word Builder use `.background(Capsule().fill(color.opacity(0.15)))` for stat pills
- Gradient colors are different per game but structurally identical
- The header is not extracted — it's copy-pasted across 3 files

---

### Story 16.1: Extract Shared GameHeader Component

**ID:** BUG-056  
**Priority:** P1  
**Points:** 5  
**Status:** 🔴 Open

**As a** developer,  
**I want** a single, shared `GameHeader` component used by all 3 games,  
**So that** any styling improvement applies to all games simultaneously and the pattern is DRY.

#### Acceptance Criteria

- [ ] AC1: A `GameHeader.swift` file is created in `Views/Games/Shared/` (or `Views/Shared/`).
- [ ] AC2: The component accepts: `categoryName: String`, `score: Int`, `correctCount: Int`, `wrongCount: Int`, `streakCount: Int`, `currentQuestion: Int`, `totalQuestions: Int`, `progressFraction: Double`, `gradientColors: [Color]`, `onBack: () -> Void`.
- [ ] AC3: All three games (`FlashCardsView`, `GrammarView`, `WordBuilderView`) use `GameHeader(...)` instead of their local `exerciseHeader`.
- [ ] AC4: Stat pills use a consistent treatment across all games — either all `.glassEffect` (if iOS 26+ only) or all `.ultraThinMaterial` with colored tint.
- [ ] AC5: No visual regressions in any game after the extraction.
- [ ] AC6: Each game still passes its unique gradient colors to maintain game identity (blue for flashcards, pink for grammar, gold for word builder).

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 16.1.1 | Read all 3 `exerciseHeader` implementations side by side. Identify all shared elements and game-specific differences. Document the delta matrix. | 30m | 3 game views |
| 16.1.2 | Create `GameHeader.swift`. Define the struct with all parameters. Implement the top row (back, category, score), progress bar, and stats row. | 2h | new `GameHeader.swift` |
| 16.1.3 | Normalize stat pill styling: use `.background(.ultraThinMaterial.opacity(0.8), in: Capsule())` with a colored overlay for consistency across iOS versions. | 30m | `GameHeader.swift` |
| 16.1.4 | Replace `exerciseHeader` in `FlashCardsView.swift` with `GameHeader(...)`. | 30m | `FlashCardsView.swift` |
| 16.1.5 | Replace `exerciseHeader` in `GrammarView.swift` with `GameHeader(...)`. | 30m | `GrammarView.swift` |
| 16.1.6 | Replace `exerciseHeader` in `WordBuilderView.swift` with `GameHeader(...)`. | 30m | `WordBuilderView.swift` |
| 16.1.7 | Run all games on iPhone SE and iPhone 16 Pro Max. Verify headers match the original visuals (compare before/after screenshots). | 1h | — |

---

### Story 16.2: Redesign Game Header Visual Treatment

**ID:** BUG-057  
**Priority:** P2  
**Points:** 5  
**Status:** 🔴 Open

**As a** user playing any game,  
**I want** the header to be visually stunning — a premium bar that feels like part of the game's identity,  
**So that** the game feels immersive and polished from the first second.

#### Acceptance Criteria

- [ ] AC1: The header uses a glassmorphic background: `RoundedRectangle(cornerRadius: 20).fill(.ultraThinMaterial)` with a subtle gradient border using the game's colors.
- [ ] AC2: The back button is a compact icon-only button (chevron.left in a circle) — no "Back" text, to save horizontal space.
- [ ] AC3: The category name uses `.headline` font with the game's gradient as foreground style.
- [ ] AC4: The score badge uses a larger, more prominent treatment: the score number in `.title3.bold()` with the bolt icon in the game's accent color, inside a glassmorphic capsule.
- [ ] AC5: The progress bar has a glow effect — a subtle shadow behind the filled portion that uses the game's gradient color at 40% opacity.
- [ ] AC6: Stat pills have icons before their text: `checkmark.circle.fill` for correct, `xmark.circle.fill` for wrong, `flame.fill` for streak, `number.circle.fill` for question count.
- [ ] AC7: The header float above the content with a subtle shadow (`y: 2, radius: 4, opacity: 0.15`), not flush against the content below.
- [ ] AC8: The header is responsive: on iPhone SE, it uses `.caption` fonts and tighter spacing; on larger screens, `.footnote` or `.body`.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 16.2.1 | Apply glassmorphic background to `GameHeader`: `.background(.ultraThinMaterial, in: RoundedRectangle(cornerRadius: 20))` with `.overlay(RoundedRectangle(cornerRadius: 20).stroke(gameGradient, lineWidth: 0.5))`. | 30m | `GameHeader.swift` |
| 16.2.2 | Redesign back button: `Button { onBack() } label: { Image(systemName: "chevron.left").font(.body.bold()).foregroundStyle(gameGradient).frame(width: 36, height: 36).background(.ultraThinMaterial, in: Circle()) }`. | 30m | `GameHeader.swift` |
| 16.2.3 | Redesign score badge: `HStack(spacing: 4) { Image(systemName: "bolt.fill").foregroundStyle(gameAccentColor) Text("\(score)").font(.title3.bold()) }` in a capsule with `.ultraThinMaterial`. | 30m | `GameHeader.swift` |
| 16.2.4 | Add progress bar glow: `.shadow(color: gameGradient.first?.opacity(0.4) ?? .clear, radius: 6, y: 0)` on the filled portion of `AnimatedProgressBar`. | 30m | `GameHeader.swift` or `AnimatedProgressBar.swift` |
| 16.2.5 | Add icons to stat pills: prefix each stat text with its SF Symbol icon (12pt, matching pill color). | 30m | `GameHeader.swift` |
| 16.2.6 | Add floating shadow to header container: `.shadow(color: .black.opacity(0.15), radius: 4, y: 2)`. Add 8pt bottom padding. | 15m | `GameHeader.swift` |
| 16.2.7 | Add responsive font sizing: `@Environment(\.horizontalSizeClass)` → compact uses `.caption` / `.footnote`, regular uses `.footnote` / `.body`. | 30m | `GameHeader.swift` |
| 16.2.8 | Test on iPhone SE, iPhone 16 Pro Max, iPad Mini. Verify header looks premium on all sizes with no truncation or overflow. | 1h | — |

---

### Story 16.3: Animate Header Stats in Real-Time

**ID:** BUG-058  
**Priority:** P2  
**Points:** 5  
**Status:** 🔴 Open

**As a** user playing a game,  
**I want** the header stats (correct, wrong, streak, score) to animate when they change,  
**So that** the header feels alive and responsive to my actions.

#### Acceptance Criteria

- [ ] AC1: When the correct count increments: the correct pill briefly scales up (1.2x) and glows green for 0.3s.
- [ ] AC2: When the wrong count increments: the wrong pill briefly shakes (3 times, 2pt amplitude) and glows orange for 0.3s.
- [ ] AC3: When the streak count increments: the flame icon gets a brief "fire" animation (scale 1.3x + color intensity increase) for 0.4s.
- [ ] AC4: When the score changes: the number uses a rolling counter animation (digits spin), similar to the game completion score counter.
- [ ] AC5: The progress bar fills smoothly (0.5s ease-out animation) when advancing to the next question — not a discrete jump.
- [ ] AC6: Animations don't interfere with each other — multiple stats can animate simultaneously (e.g., correct count + streak + score all update at once).

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 16.3.1 | Add `@State private var correctPulse = false` and similar for each stat. Trigger pulse when the count changes using `.onChange(of: correctCount)`. | 30m | `GameHeader.swift` |
| 16.3.2 | Apply scale animation to correct pill: `.scaleEffect(correctPulse ? 1.2 : 1.0).animation(.spring(duration: 0.3), value: correctPulse)`. Reset after 0.3s with `Task.sleep`. | 30m | `GameHeader.swift` |
| 16.3.3 | Apply shake animation to wrong pill using `ShakeEffect` modifier (or `offset` with spring). | 30m | `GameHeader.swift` |
| 16.3.4 | Apply fire animation to streak flame: `.scaleEffect(streakPulse ? 1.3 : 1.0)` + `.foregroundStyle(streakPulse ? .orange : .red)`. | 30m | `GameHeader.swift` |
| 16.3.5 | Apply rolling counter to score: use `Text("\(score)").contentTransition(.numericText(countsDown: false))` (iOS 17+ API). | 30m | `GameHeader.swift` |
| 16.3.6 | Ensure `AnimatedProgressBar` uses `.animation(.easeOut(duration: 0.5), value: progressFraction)` for smooth fill. | 15m | `GameHeader.swift` or `AnimatedProgressBar.swift` |
| 16.3.7 | Test rapid stat changes: answer 5 questions quickly. Verify all animations play correctly and overlap without visual glitches. | 30m | — |

---

### Story 16.4: Game-Specific Header Themes

**ID:** BUG-059  
**Priority:** P3  
**Points:** 3  
**Status:** 🔴 Open

**As a** user,  
**I want** each game to have a distinct visual identity in its header,  
**So that** I can immediately recognize which game I'm playing and the experience feels curated.

#### Acceptance Criteria

- [ ] AC1: **Flashcards:** Header gradient is blue → cyan → teal. Score badge has a `bolt.circle.fill` icon. Progress bar has a "flowing water" effect (animated gradient position).
- [ ] AC2: **Grammar:** Header gradient is pink → rose → crimson. Score badge has a `brain.fill` icon. Progress bar has a "heartbeat" effect (subtle pulse at the fill edge).
- [ ] AC3: **Word Builder:** Header gradient is gold → orange → amber. Score badge has a `star.circle.fill` icon. Progress bar has a "fire trail" effect (warm glow at the fill edge).
- [ ] AC4: Each game's `GameHeader` call passes a `theme: GameHeaderTheme` that encapsulates colors, icons, and the progress bar effect.
- [ ] AC5: The themes are defined as static properties on `GameHeaderTheme` for easy reference: `.flashcards`, `.grammar`, `.wordBuilder`.

#### Subtasks

| # | Subtask | Est. | File(s) |
|---|---------|------|---------|
| 16.4.1 | Define `GameHeaderTheme` struct: `gradientColors: [Color]`, `scoreIcon: String`, `progressBarEffect: ProgressBarEffect` (enum: `.flowing`, `.heartbeat`, `.fireTrail`). | 30m | `GameHeader.swift` |
| 16.4.2 | Create 3 static theme instances: `.flashcards`, `.grammar`, `.wordBuilder` with the color, icon, and effect configurations from the acceptance criteria. | 30m | `GameHeader.swift` |
| 16.4.3 | Implement progress bar effects: `.flowing` uses an animated gradient offset, `.heartbeat` uses a pulsing opacity at the edge, `.fireTrail` uses a warm glow shadow. | 1h | `GameHeader.swift` or `AnimatedProgressBar.swift` |
| 16.4.4 | Update each game's `GameHeader` call to pass its theme: `GameHeader(theme: .flashcards, ...)`. | 15m | 3 game views |
| 16.4.5 | Test each game to verify the correct theme is applied. | 30m | — |

---
---
---

# Appendices

## Appendix A: Bug-to-Story Cross-Reference Index

Maps the 19 original user-reported bugs to their corresponding Epics and Stories.

| User Bug # | Title | Epic | Stories | Priority |
|------------|-------|------|---------|----------|
| Bug 1 | Trial greeting shows truncated name, want full name + gift icon | E1: Personalization & Identity | BUG-001, BUG-002, BUG-004 | P0 |
| Bug 2 | Dark mode "Start your adventure" button color — violet bg bad, keep multicolor border | E2: Dark Mode & Theme Polish | BUG-005, BUG-006, BUG-007 | P1 |
| Bug 3 | Accuracy heatmap — 100% items need grouping, will take too much space | E3: Accuracy Heatmap UX Overhaul | BUG-008, BUG-009, BUG-010 | P1 |
| Bug 4 | Export to PDF ugly — wants beautiful cards like tier transition cards | E4: Premium Export Experience | BUG-011, BUG-012, BUG-013, BUG-014 | P1 |
| Bug 5 | Total XP panel needs name, make person feel special | E1: Personalization & Identity | BUG-003 | P0 |
| Bug 6 | Mobile premium tab — memberships overlap | E5: Membership & Premium Mobile UX | BUG-015, BUG-016, BUG-019 | P0 |
| Bug 7 | Feature comparison not updated, not mobile-optimized | E5: Membership & Premium Mobile UX | BUG-016, BUG-017 | P0 |
| Bug 8 | Offline mode auto-enable for upper tiers, off for free | E6: Offline Mode & Debug Infrastructure | BUG-020 | P1 |
| Bug 9 | Rename "Tier Debug Panel" to "Debug Panel", extend with network simulation | E6: Offline Mode & Debug Infrastructure | BUG-021, BUG-022, BUG-023 | P1 |
| Bug 10 | Tier switch animations should always show special cards with background | E7: Tier Transition Animation Polish | BUG-024, BUG-025, BUG-026 | P1 |
| Bug 11 | Profile page — top panel and my plan should be collapsible | E8: Profile Page UX Refinement | BUG-027, BUG-028, BUG-029 | P2 |
| Bug 12 | Onboarding panels cut off on mobile | E9: Onboarding Mobile Optimization | BUG-030, BUG-031, BUG-032, BUG-033 | P0 |
| Bug 13 | Game completion — actions should be on same page without scrolling | E10: Game Completion Flow | BUG-034, BUG-035, BUG-036, BUG-037 | P1 |
| Bug 14 | Grammar Challenge ugly — better UI, persistent tip collapse, mobile optimization | E11: Grammar Challenge UX Overhaul | BUG-038, BUG-039, BUG-040, BUG-041, BUG-042 | P1 |
| Bug 15 | Recent Activity — show activity from different language pairs | E12: Recent Activity Cross-Language Support | BUG-043, BUG-044, BUG-045 | P1 |
| Bug 16 | Word Constructor — remove "ABS Build the word", fix button text truncation | E13: Word Constructor Polish | BUG-046, BUG-047, BUG-048 | P1 |
| Bug 17 | Royal paywall buttons can't have transparent background | E14: Royal Paywall Visual Integrity | BUG-049, BUG-050, BUG-051 | P0 |
| Bug 18 | No haptic feedback on mobile | E15: Haptic Feedback Integration | BUG-052, BUG-053, BUG-054, BUG-055 | P1 |
| Bug 19 | Game headers need better UX | E16: Game Header UX Redesign | BUG-056, BUG-057, BUG-058, BUG-059 | P2 |

---

## Appendix B: Priority Matrix

### P0 — Critical (Must Fix Before Next Release)

| Epic | Scope | Story Points | Rationale |
|------|-------|-------------|-----------|
| E1: Personalization & Identity | 4 Stories | 16 | User personalization is table-stakes for engagement; broken greeting erodes trust |
| E5: Membership & Premium Mobile UX | 5 Stories | 23 | Revenue-impacting: overlapping cards, unreadable comparison = lost conversions |
| E9: Onboarding Mobile Optimization | 4 Stories | 14 | First impression is everything; cut-off panels = immediate uninstall |
| E14: Royal Paywall Visual Integrity | 3 Stories | 13 | Invisible buttons on paywall = zero revenue from highest tier |

**P0 Total: 16 Stories, 66 Points**

### P1 — High (Plan for Current Sprint)

| Epic | Scope | Story Points | Rationale |
|------|-------|-------------|-----------|
| E2: Dark Mode & Theme Polish | 3 Stories | 10 | ~50% of users use dark mode; broken button colors erode polish perception |
| E3: Accuracy Heatmap UX Overhaul | 3 Stories | 10 | Analytics must be scannable; overwhelming data = feature abandoned |
| E4: Premium Export Experience | 4 Stories | 18 | Export is a premium feature; ugly output undermines perceived value |
| E6: Offline Mode & Debug Infrastructure | 4 Stories | 17 | Offline is a premium value prop; debug tooling accelerates all future work |
| E7: Tier Transition Animation Polish | 3 Stories | 12 | Tier transitions are celebration moments; underwhelming = missed delight |
| E10: Game Completion Flow | 4 Stories | 16 | Game completion is the reward moment; scrolling kills the high |
| E11: Grammar Challenge UX Overhaul | 5 Stories | 20 | Ugliest game view; mobile UX broken; discourages grammar practice |
| E12: Recent Activity Cross-Language | 3 Stories | 12 | Multi-language learners need cross-pair visibility |
| E13: Word Constructor Polish | 3 Stories | 9 | "ABS" label is confusing; truncated buttons are broken UI |
| E15: Haptic Feedback Integration | 4 Stories | 13 | Touch feedback is expected on mobile; absence feels dead |

**P1 Total: 36 Stories, 137 Points**

### P2 — Medium (Next Sprint)

| Epic | Scope | Story Points | Rationale |
|------|-------|-------------|-----------|
| E8: Profile Page UX Refinement | 3 Stories | 10 | Profile is functional but cluttered; collapsibility is a nice-to-have |
| E16: Game Header UX Redesign | 4 Stories | 18 | Headers work functionally; visual polish is enhancement territory |

**P2 Total: 7 Stories, 28 Points**

---

## Appendix C: Dependency Graph

```
E9 (Onboarding) ──► E5 (Membership) ──► E14 (Royal Paywall)
                                         │
                                         ▼
E1 (Personalization) ──────────────────► E4 (Export)
                                         │
                                         ▼
E2 (Dark Mode) ──────────────────────► E7 (Tier Transitions)
      │
      ▼
E3 (Heatmap)     E6 (Offline/Debug) ──► E15 (Haptics)
                                         │
                                         ▼
E11 (Grammar) ──► E10 (Game Completion) ──► E16 (Game Headers)
      │
      ▼
E13 (Word Const) ──► E12 (Recent Activity)
      │
      ▼
E8 (Profile)
```

**Key Dependencies:**

1. **E5 → E14:** Membership card fix must land before paywall button fix, since `PremiumCTAButton` is defined in E14 but must fit the card layout from E5.
2. **E2 → E7:** Theme polish must stabilize colors before tier transition cards reference them.
3. **E6 → E15:** Debug panel must have the "Test Haptics" button (E15.1) added after the panel is renamed and extended (E6).
4. **E11 → E10 → E16:** Grammar, then Game Completion, then shared Headers — each builds on layout patterns from the previous.
5. **E1 → E4:** Personalization data (full name) must be available before the export card can include the user's name.

---

## Appendix D: Recommended Implementation Order

Based on priority, dependencies, and risk:

| Phase | Sprint | Epics | Points | Outcome |
|-------|--------|-------|--------|---------|
| **Phase 1** | Sprint N | E1 (Personalization), E9 (Onboarding) | 30 | First impressions & identity fixed |
| **Phase 2** | Sprint N | E5 (Membership), E14 (Paywall) | 36 | Revenue blockers resolved |
| **Phase 3** | Sprint N+1 | E2 (Dark Mode), E6 (Offline/Debug) | 27 | Theme stability & dev tooling |
| **Phase 4** | Sprint N+1 | E3 (Heatmap), E7 (Transitions) | 22 | Analytics & delight polish |
| **Phase 5** | Sprint N+2 | E11 (Grammar), E10 (Completion) | 36 | Game UX overhaul |
| **Phase 6** | Sprint N+2 | E4 (Export), E13 (Word Constructor) | 27 | Premium features & game polish |
| **Phase 7** | Sprint N+3 | E12 (Recent Activity), E15 (Haptics) | 25 | Multi-language & tactile feedback |
| **Phase 8** | Sprint N+3 | E8 (Profile), E16 (Headers) | 28 | Final polish & shared components |

**Total: 59 Stories across 16 Epics — 278 Story Points**

---

## Appendix E: Glossary

| Term | Definition |
|------|------------|
| **CTA** | Call-to-Action — a button designed to drive the user toward a specific action (upgrade, start trial, etc.) |
| **Glassmorphic** | A design style using frosted glass effects (blur, transparency, overlay) to create depth |
| **WCAG AA** | Web Content Accessibility Guidelines level AA — requires minimum 4.5:1 contrast ratio for normal text |
| **P0** | Priority 0 — critical; blocks revenue, retention, or onboarding. Fix before next release. |
| **P1** | Priority 1 — high; degrades UX meaningfully. Plan for current sprint. |
| **P2** | Priority 2 — medium; improvement over functional-but-unpolished state. Schedule in next sprint. |
| **P3** | Priority 3 — low; nice-to-have enhancement. Backlog for future consideration. |
| **DRY** | Don't Repeat Yourself — a principle of reducing code duplication |
| **Tier** | Membership level: Trial → Free → Pro → Elite → Royal |
| **Haptic** | Tactile vibration feedback from the device's Taptic Engine |
| **SF Symbol** | Apple's built-in icon library (e.g., `bolt.fill`, `flame.fill`) |
| **SwiftUI** | Apple's declarative UI framework used throughout LumenLingo |
| **XcodeGen** | Tool that generates Xcode project files from `project.yml` spec |

---

*Document generated for LumenLingo iOS — Comprehensive Defect Backlog*  
*59 Stories · 16 Epics · 278 Story Points · 19 User-Reported Issues*  
*Written with the care and detail of a principal product architect who has shipped 50+ apps.*

---
<!-- END OF BUGS.MD -->
