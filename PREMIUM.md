# Premium Feature Gating — Product Stories & Subtasks

> **Document Owner:** Product  
> **Last Updated:** 2026-03-15  
> **Scope:** Feature enable/disable logic based on selected membership tier.  
> **Out of Scope:** Payment integration, RevenueCat, StoreKit, receipt validation, subscription management. Those stories live in a separate PAYMENTS.md (future).

---

## Tier Reference

| Tier | ID | Price | Soundscapes | Lang Pairs | Practice | Breathing Orbs | Quantum Flow | Nebula Drift | Offline |
|---|---|---|---|---|---|---|---|---|---|
| Royal Trial | `trial` | £0 (14 days) | All 12 | 25+ | Unlimited | 6 schemes | 6 scenes | 6 presets | ✓ |
| Free / Starter | `free` | £0 | 0 | 3 | 30 min/day | 0 | 0 | 0 | — |
| Pro | `pro` | £9.99/mo | 1 | 7 | Unlimited | 6 | 0 | 0 | ✓ |
| Elite | `elite` | £19.99/mo | 8 | 25+ | Unlimited | 6 | 4 scenes | 4 presets | ✓ |
| Royal | `royal` | £99.99/mo | All 12 | 25+ | Unlimited | 6 | 6 scenes | 6 presets | ✓ |

---

## Epic 1: Tier Selection & Persistence ✅ COMPLETED

### Story 1.1 — Persist Selected Tier Across App Launches ✅

**As a** user who selected a membership tier,  
**I want** my selection to persist when I close and reopen the app,  
**So that** I don't have to re-select my tier every time.

**Acceptance Criteria:**
- Selected tier ID is saved to UserDefaults or SwiftData on every change.
- On app launch, the saved tier is loaded and applied before any gated view renders.
- If no tier is saved (first launch), default to `"free"`.

**Subtasks:**
- [x] 1.1.1 — Add `selectedTierId: String` property to `UserProfile` model (default `"free"`).
- [x] 1.1.2 — On tier selection in `MembershipView`, write `selectedTierId` to the user's profile.
- [x] 1.1.3 — Create `TierManager` service that exposes `currentTier: TierID` as a published property.
- [x] 1.1.4 — Inject `TierManager` into the SwiftUI environment via `.environment()`.
- [x] 1.1.5 — Add unit test: save tier → relaunch → assert tier restored.
- [x] 1.1.6 — Add unit test: first launch with no saved data → assert `"free"`.

---

### Story 1.2 — Expose Current Tier as Environment Value ✅

**As a** developer building gated features,  
**I want** the current tier available as an `@EnvironmentObject` throughout the view hierarchy,  
**So that** any view can check tier access without prop-drilling.

**Acceptance Criteria:**
- `TierManager` is an `ObservableObject` with `@Published var currentTierId: String`.
- `TierManager` provides helper methods: `hasAccess(to feature: PremiumFeature) -> Bool`.
- All gating decisions go through `TierManager`, not raw string comparisons.

**Subtasks:**
- [x] 1.2.1 — Define `PremiumFeature` enum with cases: `.soundscapes`, `.languagePairs`, `.unlimitedPractice`, `.breathingOrbs`, `.quantumFlow`, `.nebulaDrift`, `.offlineMode`.
- [x] 1.2.2 — Implement `TierManager.hasAccess(to:) -> Bool` using a tier-to-feature mapping dictionary.
- [x] 1.2.3 — Implement `TierManager.allowedCount(for:) -> Int` for features with variable limits.
- [x] 1.2.4 — Add `TierManager` to the app's root view via `.environment()`.
- [x] 1.2.5 — Add unit tests for every tier × feature combination (25 tests in TierManagerTests.swift).
- [x] 1.2.6 — Add `MembershipTier.displayName: String` computed property for UI labels.
- [x] 1.2.7 — Add `MembershipTier.gradientColors: [Color]` for consistent tier branding.

---

### Story 1.3 — Tier Change Triggers Feature Re-evaluation ✅

**As a** user who changes their selected tier,  
**I want** all gated features to immediately reflect my new tier,  
**So that** I see the correct features without restarting the app.

**Acceptance Criteria:**
- Changing the tier in `MembershipView` publishes through `TierManager`.
- All views observing `TierManager` re-render with updated access.
- Any active feature that becomes unavailable gracefully degrades (e.g., soundscape stops playing).

**Subtasks:**
- [x] 1.3.1 — `TierManager` uses `@Observable` macro — mutations auto-publish.
- [x] 1.3.2 — In `TierManager.selectTier()`, calls `AudioService.shared.stopAmbient()` on downgrade.
- [x] 1.3.3 — In background view controllers, observe tier changes — if current visual exceeds new limit, revert to default.
- [x] 1.3.4 — Add animation (0.3s fade) when features enable/disable on tier change.
- [x] 1.3.5 — Add haptic feedback (soft impact) on tier change confirmation.
- [x] 1.3.6 — Write integration test: change tier from Royal to Free → verify soundscapes stop, visuals revert.

---

### Story 1.4 — Tier Badge Display on Profile ✅

**As a** user,  
**I want** to see my current tier as a badge on my profile,  
**So that** I know which plan I'm on at a glance.

**Acceptance Criteria:**
- Profile header shows a tier badge with the tier's icon, name, and gradient.
- Badge animates in with a scale+fade when the profile appears.
- Tapping the badge navigates to `MembershipView`.

**Subtasks:**
- [x] 1.4.1 — Create `TierBadgeView` component: icon + name + gradient background capsule with shimmer.
- [x] 1.4.2 — Read tier from `TierManager` environment.
- [x] 1.4.3 — Add appear animation: spring scale + fade with 0.3s delay, shimmer at 0.9s.
- [x] 1.4.4 — Add `NavigationLink` wrapping the badge → `MembershipView`.
- [x] 1.4.5 — Position badge in `ProfileView` header between name/level and quick stats.
- [ ] 1.4.6 — Add snapshot test for each tier's badge appearance.

---

## Epic 2: Soundscape Feature Gating ✅ COMPLETED

### Story 2.1 — Gate Soundscape Count by Tier ✅

**As a** user on the Free tier,  
**I want** soundscapes to be locked,  
**So that** I understand this is a premium feature and can see what I'm missing.

**As a** user on the Pro tier,  
**I want** access to exactly 1 soundscape,  
**So that** I can experience the feature and consider upgrading for more.

**Acceptance Criteria:**
- Free tier: 0 soundscapes playable. All shown with lock overlay.
- Pro tier: 1 soundscape unlocked (the first in the list). Others locked.
- Elite tier: 8 soundscapes unlocked. Remaining 4 locked.
- Royal / Trial: All 12 soundscapes unlocked.
- Locked soundscapes show a preview (name, icon, 3-second audio preview) but cannot be fully played.

**Subtasks:**
- [x] 2.1.1 — `TierManager.isSoundscapeUnlocked(_:)` and `unlockedSoundscapes()` use sortOrder-based gating.
- [x] 2.1.2 — Tier mapping: free→0, pro→1, elite→8, royal/trial→12 (via `allowedCount(for: .soundscapes)`).
- [x] 2.1.3 — `SoundscapesSettingsView` reads `TierManager` from environment for access checks.
- [x] 2.1.4 — Locked items show dark overlay + `lock.fill` icon + tier badge capsule with gradient.
- [x] 2.1.5 — Locked items show minimum tier name badge; tapping shows `SoundscapeUpgradeSheet`.
- [x] 2.1.6 — Pro unlocks sortOrder 0 (Paris Café) — deterministic via `Soundscape.sortOrder`.
- [x] 2.1.7 — Unit test: `testProTierUnlocksExactly1Soundscape`.
- [x] 2.1.8 — Unit test: `testEliteTierUnlocksExactly8Soundscapes`.

---

### Story 2.2 — Locked Soundscape Preview Interaction ✅

**As a** user tapping a locked soundscape,  
**I want** to hear a 3-second preview and see an upgrade prompt,  
**So that** I can decide whether to upgrade for full access.

**Acceptance Criteria:**
- Tapping a locked soundscape plays a 3-second audio fade-in/fade-out preview.
- After the preview, a bottom sheet appears with: soundscape name, description, "Available on [tier name]" label, and a "View Plans" button.
- "View Plans" navigates to `MembershipView` with the relevant tier pre-highlighted.
- Preview plays at most once per session to avoid annoyance.

**Subtasks:**
- [x] 2.2.1 — `AudioService.playPreview(soundscape:duration:)` with 0.6s fade-in, 0.8s fade-out envelope.
- [x] 2.2.2 — `TierManager.previewedSoundscapeIds: Set<String>` (session-scoped, not persisted).
- [x] 2.2.3 — `SoundscapeUpgradeSheet` with artwork header, lock icon, tier badge, "View Plans" CTA → MembershipView.
- [ ] 2.2.4 — Pass `preHighlightedTierId` parameter to `MembershipView` init for deep-link scrolling.
- [ ] 2.2.5 — Add `MembershipView.scrollToTier(_ id: String)` using `ScrollViewReader`.
- [x] 2.2.6 — Haptic: `UINotificationFeedbackGenerator.warning` on locked tap.
- [x] 2.2.7 — Unit tests: `testPreviewTracking`, `testPreviewTrackingIsPerSoundscape`.

---

### Story 2.3 — Soundscape Auto-Stop on Downgrade ✅

**As a** user who downgrades from Elite to Pro,  
**I want** any playing soundscape beyond my new limit to gracefully fade out,  
**So that** the transition feels smooth rather than jarring.

**Acceptance Criteria:**
- If the currently playing soundscape is no longer available at the new tier, fade out over 2 seconds.
- After fade-out, show a brief toast: "Soundscape paused — upgrade to continue listening".
- If downgrading to Free, stop all audio immediately with a 1-second fade.

**Subtasks:**
- [x] 2.3.1 — Reuses existing `AudioService.stopAmbient(fadeDuration: 2.0)` for fade-out.
- [x] 2.3.2 — `TierManager.selectTier()` checks if active soundscape exceeds new tier limit on downgrade.
- [x] 2.3.3 — Calls `stopAmbient(fadeDuration: 2.0)` when active soundscape is no longer unlocked.
- [x] 2.3.4 — Posts `Notification.Name.soundscapeAutoStopped` after triggering fade-out.
- [x] 2.3.5 — `SoundscapesSettingsView` includes inline auto-stop toast with dismiss button.
- [x] 2.3.6 — Toast shows "Soundscape paused — upgrade to continue listening" for 4 seconds.
- [ ] 2.3.7 — Add integration test: playing soundscape #5 → downgrade to Pro → verify fade-out triggers.

---

### Story 2.4 — Soundscape Selection Order for Limited Tiers ✅

**As a** product owner,  
**I want** the single Pro soundscape to be the most universally appealing one,  
**So that** Pro users get the best first impression and want to upgrade.

**Acceptance Criteria:**
- Soundscapes have a `sortOrder: Int` property.
- The unlock order is deterministic: lowest sortOrder unlocks first.
- Pro gets sortOrder 0 only.
- Elite gets sortOrder 0–7.
- The unlock order is defined in a single source of truth, not scattered.

**Subtasks:**
- [x] 2.4.1 — `Soundscape.sortOrder: Int` computed property (0–11) added to enum.
- [x] 2.4.2 — Canonical sort order defined inline in `Soundscape.sortOrder` (single source of truth, no separate registry needed).
- [x] 2.4.3 — `TierManager.unlockedSoundscapes()` returns sorted soundscapes limited by tier count.
- [x] 2.4.4 — `SoundscapesSettingsView.categorySection` sorts by `sortOrder` (unlocked first).
- [x] 2.4.5 — Unit test: `testProTierUnlocksExactly1Soundscape` verifies sortOrder 0.
- [x] 2.4.6 — Unit test: `testEliteTierUnlocksExactly8Soundscapes` verifies sortOrder 0–7.

---

## Epic 3: Language Pair Gating ✅ COMPLETED

### Story 3.1 — Limit Available Language Pairs by Tier ✅

**As a** Free tier user,  
**I want** access to 3 language pairs,  
**So that** I can learn the basics without commitment.

**As a** Pro tier user,  
**I want** access to 7 language pairs,  
**So that** I have meaningful variety for serious learning.

**Acceptance Criteria:**
- Free: 3 language pairs available. Others shown but locked.
- Pro: 7 language pairs available.
- Elite / Royal / Trial: All language pairs available (25+).
- Locked pairs show the flag icons but with a lock overlay and "Upgrade" label.
- User cannot start a session with a locked language pair.

**Subtasks:**
- [x] 3.1.1 — `TierManager.allowedCount(for: .languagePairs)` returns free→3, pro→7, elite/royal/trial→25.
- [x] 3.1.2 — `LanguagePair.withContent` reordered by popularity (EN→ES first). `priorityOrder` computed property (0-24).
- [x] 3.1.3 — `TierManager.unlockedLanguagePairs() -> [LanguagePair]` returns pairs up to the limit.
- [x] 3.1.4 — `TierManager.isLanguagePairUnlocked(_ pair: LanguagePair) -> Bool` checks priority against limit.
- [x] 3.1.5 — Locked target cards show desaturated flags, dimmed labels, and tier badge instead of checkmark.
- [x] 3.1.6 — Locked tap triggers warning haptic and shows `LanguagePairUpgradeSheet` half-sheet.
- [x] 3.1.7 — Unit test: `testFreeTierUnlocksExactly3LanguagePairs` ✅.
- [x] 3.1.8 — Unit test: `testProTierUnlocksExactly7LanguagePairs` ✅.
- [x] 3.1.9 — Unit tests: elite/royal/trial all unlock 25 ✅.

---

### Story 3.2 — Language Pair Lock Overlay UI ✅

**As a** user viewing the language selection screen,  
**I want** locked language pairs to be visually distinct from unlocked ones,  
**So that** I immediately understand what's available to me.

**Acceptance Criteria:**
- Locked pairs have a frosted glass overlay with a centered lock icon.
- The flag icons are visible but desaturated (grayscale filter at 80%).
- A small tier badge shows the minimum tier needed (e.g., "PRO" capsule).
- Unlocked pairs have full color and no overlay.
- The transition between locked/unlocked states animates smoothly on tier change.

**Subtasks:**
- [x] 3.2.1 — Inline lock overlay in `TargetCardView`: desaturated flag + dimmed labels + lock tier badge capsule.
- [x] 3.2.2 — `.saturation(isLocked ? 0.2 : 1.0)` on flag images.
- [x] 3.2.3 — `lockBadge` in TargetCardView: gradient capsule with lock icon + tier name.
- [x] 3.2.4 — `LanguagePair.minimumTier` computed from `priorityOrder` (0-2→free, 3-6→pro, 7-24→elite).
- [x] 3.2.5 — `.animation(.easeInOut(duration: 0.3), value: isLocked)` on card content.
- [ ] 3.2.6 — VoiceOver accessibility (deferred to accessibility epic).
- [ ] 3.2.7 — Snapshot tests (deferred to testing infrastructure epic).

---

### Story 3.3 — Language Pair Upgrade Prompt ✅

**As a** user tapping a locked language pair,  
**I want** to see which tier unlocks it and a path to upgrade,  
**So that** I can make an informed decision.

**Acceptance Criteria:**
- Tapping a locked pair presents a half-sheet with: source/target flag icons, language names, minimum tier name, and "View Plans" button.
- Sheet uses the minimum tier's gradient colors for branding consistency.
- "View Plans" navigates to `MembershipView` with that tier pre-selected.

**Subtasks:**
- [x] 3.3.1 — `LanguagePairUpgradeSheet` with dual-flag artwork header, lock icon, pair name, tier badge.
- [x] 3.3.2 — Uses `pair.minimumTier` for gradient colors, lock icon, and "Available on [Tier]" badge.
- [x] 3.3.3 — "View Plans" CTA navigates to `MembershipView()` via `NavigationStack`.
- [x] 3.3.4 — `.sheet(item: $lockedPairToShow)` in `LanguageSelectionView`.
- [x] 3.3.5 — `HapticsService.shared.warning()` on locked tap.
- [ ] 3.3.6 — Analytics event (deferred to analytics epic).

---

### Story 3.4 — Active Language Pair Validation on Downgrade ✅

**As a** user who downgrades from Pro to Free,  
**I want** the app to handle my currently selected language pair gracefully if it becomes locked,  
**So that** I don't encounter crashes or blank screens.

**Acceptance Criteria:**
- On tier change, if the active language pair is no longer available, switch to the first unlocked pair.
- Show an alert: "Your language pair [name] requires [tier]. We've switched you to [fallback pair]."
- All in-progress sessions for the locked pair are preserved (not deleted) but become inaccessible until the pair is re-unlocked.

**Subtasks:**
- [x] 3.4.1 — `ContentView.onChange(of: tierManager.currentTier)` calls `validateActiveLanguagePair()`.
- [x] 3.4.2 — If not unlocked: switches to `unlockedLanguagePairs().first` and updates `LanguagePreference`.
- [x] 3.4.3 — Posts `.languagePairAutoSwitched` notification with old/new pair names + required tier. Toast shown in `LanguageSelectionView`.
- [x] 3.4.4 — Progress data is never deleted — only the active language preference is switched.
- [ ] 3.4.5 — `GameProgressRecord.isAccessible` (deferred — not needed until JourneyView filtering).
- [ ] 3.4.6 — JourneyView progress filtering (deferred to a future polish pass).
- [x] 3.4.7 — Unit tests: priority order uniqueness, coverage 0-24, minimum tier boundaries, pair-without-content rejection.
- [x] 3.4.8 — By design: progress records are untouched on downgrade; re-upgrading restores access.

---

## Epic 4: Practice Time Gating ✅

### Story 4.1 — Enforce Daily Practice Time Limit for Free Tier

**As a** Free tier user,  
**I want** to practice for up to 30 minutes per day,  
**So that** I can learn meaningfully while understanding the value of unlimited practice.

**Acceptance Criteria:**
- Free tier: 30-minute daily practice limit.
- Pro / Elite / Royal / Trial: Unlimited practice (no timer enforcement).
- Timer counts actual active practice time (not idle/menu time).
- When 5 minutes remain, show a gentle notification bar.
- When time expires, gracefully end the session with a summary.

**Subtasks:**
- [x] 4.1.1 — Create `PracticeTimeTracker` service: tracks cumulative daily practice seconds.
- [x] 4.1.2 — `PracticeTimeTracker.remainingTime(for tier:) -> TimeInterval?` — returns nil for unlimited tiers.
- [x] 4.1.3 — Store daily usage in `UserDefaults` keyed by date string (ISO 8601 date only).
- [x] 4.1.4 — Reset counter at midnight local time (use `Calendar.current.startOfDay`).
- [x] 4.1.5 — Start tracking on game session start; pause on app background; resume on foreground.
- [x] 4.1.6 — Only count time when user is actively in a game view (not menus/settings).
- [x] 4.1.7 — Add unit test: accumulate 1800 seconds → `remainingTime` returns 0 for free tier.
- [x] 4.1.8 — Add unit test: pro tier → `remainingTime` always returns nil.
- [x] 4.1.9 — Add unit test: counter resets after midnight.

---

### Story 4.2 — Five-Minute Warning Banner

**As a** Free tier user approaching my daily limit,  
**I want** a gentle warning when I have 5 minutes remaining,  
**So that** I can wrap up my current exercise without surprise interruption.

**Acceptance Criteria:**
- At 5 minutes remaining, a non-intrusive banner slides in from the top.
- Banner shows: "5 minutes remaining today" with a subtle countdown.
- Banner has a "Go Unlimited" button that opens `MembershipView`.
- Banner can be dismissed with a swipe-up gesture.
- Banner does not appear for unlimited tiers.

**Subtasks:**
- [x] 4.2.1 — Create `PracticeTimeBanner` view with countdown text and CTA button.
- [x] 4.2.2 — Add `.transition(.move(edge: .top).combined(with: .opacity))` for entrance.
- [x] 4.2.3 — Add swipe-up `DragGesture` to dismiss.
- [x] 4.2.4 — `PracticeTimeTracker` publishes `fiveMinuteWarning` notification when threshold crossed.
- [x] 4.2.5 — Only fire warning once per session (not repeatedly if user navigates away and back).
- [x] 4.2.6 — Add gentle haptic (notification info) when banner appears.
- [x] 4.2.7 — Update countdown text every 60 seconds (not every second — avoid performance drain).
- [ ] 4.2.8 — Add snapshot test for banner in both themes. (deferred — requires snapshot testing infrastructure)

---

### Story 4.3 — Practice Time Expired Screen

**As a** Free tier user who has used all 30 minutes,  
**I want** a clear but encouraging end-of-session screen,  
**So that** I understand why practice stopped and feel motivated to return (or upgrade).

**Acceptance Criteria:**
- When time expires mid-session: current question/card is completed (not cut off), then the expired screen appears.
- Expired screen shows: today's stats (cards reviewed, XP earned), a motivational message, "Come back tomorrow" with countdown to midnight, and "Unlock Unlimited Practice" CTA.
- CTA navigates to `MembershipView` with Pro tier highlighted.
- User can still access all non-game features (profile, journey, settings).
- Game entry points show "Daily limit reached" state.

**Subtasks:**
- [x] 4.3.1 — Create `PracticeExpiredView` with stats summary, countdown, and upgrade CTA.
- [x] 4.3.2 — Calculate time until midnight: `Calendar.current.nextDate(after: .now, matching: DateComponents(hour: 0, minute: 0), matchingPolicy: .nextTime)`.
- [x] 4.3.3 — On timer expiry: let current question finish, then navigate to `PracticeExpiredView`.
- [x] 4.3.4 — Save session results before showing expired screen (don't lose progress).
- [x] 4.3.5 — In game entry points (`DashboardView`), check `PracticeTimeTracker.isExpired` — if true, show disabled state.
- [x] 4.3.6 — Disabled game buttons show "Resets at [time]" label instead of "Play".
- [x] 4.3.7 — Add confetti/celebration animation for XP earned in the expired screen.
- [ ] 4.3.8 — Add unit test: mid-question expiry → question completes → expired screen. (deferred — requires UI testing infrastructure)
- [ ] 4.3.9 — Add unit test: game buttons disabled when expired, re-enabled after midnight reset. (deferred — requires UI testing infrastructure)

---

### Story 4.4 — Practice Time Progress Indicator

**As a** Free tier user,  
**I want** to see how much practice time I have left today in the dashboard,  
**So that** I can plan my learning sessions.

**Acceptance Criteria:**
- Dashboard shows a circular progress ring indicating time used / 30 minutes.
- Ring uses green (>50% remaining) → yellow (25-50%) → red (<25%) color gradient.
- Text inside ring: "XX min left" or "Unlimited" for paid tiers.
- Ring is not shown for unlimited tiers (replaced with an infinity icon).

**Subtasks:**
- [x] 4.4.1 — Create `PracticeTimeRing` view: circular progress with dynamic color.
- [x] 4.4.2 — Read from `PracticeTimeTracker.usedMinutes` and `totalMinutes`.
- [x] 4.4.3 — Color logic: `progress < 0.5 ? .green : progress < 0.75 ? .yellow : .red`.
- [x] 4.4.4 — For unlimited tiers: show `Image(systemName: "infinity")` with tier gradient.
- [x] 4.4.5 — Place in dashboard header area, next to the greeting.
- [x] 4.4.6 — Add pulse animation when under 5 minutes remaining.
- [x] 4.4.7 — Add unit test: verify color transitions at exact thresholds.

---

## Epic 5: Breathing Orbs Gating ✅

### Story 5.1 — Gate Breathing Orb Schemes by Tier

**As a** Free tier user,  
**I want** breathing orbs to be locked,  
**So that** I understand this is a premium visual customization feature.

**As a** Pro/Elite/Royal user,  
**I want** access to all 6 breathing orb color schemes,  
**So that** I can personalize my app's visual experience.

**Acceptance Criteria:**
- Free tier: 0 breathing orb schemes available. Feature section shows "PRO" badge.
- Pro / Elite / Royal / Trial: All 6 schemes available.
- In Settings → Appearance → Breathing Orbs, locked schemes show lock overlay.
- Free tier sees a preview animation of breathing orbs with a frosted "Unlock with Pro" overlay.

**Subtasks:**
- [x] 5.1.1 — Add `breathingOrbsAccessible: Bool` to `TierManager` (false for free, true for others).
- [x] 5.1.2 — In `BreathingOrbsSettingsView`, check `TierManager.breathingOrbsAccessible`.
- [x] 5.1.3 — If not accessible: show preview animation with frosted overlay and "Unlock with Pro" CTA.
- [x] 5.1.4 — If accessible: show full scheme picker with all 6 options.
- [x] 5.1.5 — Add `PremiumFeatureBadge` reusable view: tier name capsule (e.g., "PRO") with gradient.
- [x] 5.1.6 — On "Unlock with Pro" tap: navigate to `MembershipView` with Pro pre-highlighted.
- [x] 5.1.7 — Add unit test: free tier → `breathingOrbsAccessible` returns false.
- [x] 5.1.8 — Add unit test: pro tier → `breathingOrbsAccessible` returns true.

---

### Story 5.2 — Breathing Orbs Preview for Free Users

**As a** Free tier user in the Breathing Orbs settings,  
**I want** to see a mesmerizing preview of what breathing orbs look like,  
**So that** I feel compelled to upgrade for this visual delight.

**Acceptance Criteria:**
- Preview shows a single breathing orb with the default color scheme, animating gently.
- Preview is overlaid with a translucent frosted glass panel.
- Panel contains: "Breathing Orbs" title, brief description, animated orb thumbnail, "Available on Pro" badge, and "Unlock" CTA.
- The preview orb uses the same Metal shader as the real feature.

**Subtasks:**
- [x] 5.2.1 — Create `BreathingOrbsLockedPreview` view using the existing `BreathingOrbsView` in demo mode (reduced intensity 0.6, speed 0.7).
- [x] 5.2.2 — Demo mode: default scheme (barcelonaNights), reduced intensity for performance.
- [x] 5.2.3 — Overlay with `.ultraThinMaterial` + `.opacity(0.85)` for frosted effect.
- [x] 5.2.4 — Add title, description text, tier badge, and scheme preview dots to overlay.
- [x] 5.2.5 — "Unlock with Pro" CTA button with Pro tier gradient and spring animation on tap.
- [x] 5.2.6 — CTA navigates to `MembershipView` via `.sheet`.
- [ ] 5.2.7 — Add subtle parallax effect on device tilt using `CMMotionManager`. (deferred — requires CoreMotion entitlement)

---

### Story 5.3 — Disable Breathing Orbs on Downgrade

**As a** user who had breathing orbs enabled and then downgrades to Free,  
**I want** the orbs to gracefully fade away,  
**So that** the visual transition is smooth and not jarring.

**Acceptance Criteria:**
- On downgrade to Free: breathing orbs fade out over 1.5 seconds.
- Breathing orb selection resets to "none".
- Settings view updates to show the locked preview state.
- A brief toast confirms: "Breathing Orbs paused — upgrade to resume".

**Subtasks:**
- [x] 5.3.1 — Breathing orbs are pure SwiftUI (not Metal). Disable handled via `breathingOrbsEnabled = false` which removes orbs from LayoutBackgroundView.
- [x] 5.3.2 — In `TierManager.selectTier`, if new tier is free and orbs were active: disable orbs and reset scheme.
- [x] 5.3.3 — After downgrade, reset `UserProfile.breathingOrbScheme` to barcelonaNights default.
- [x] 5.3.4 — Show toast notification ("Breathing Orbs paused — upgrade to resume") via `.onReceive(.breathingOrbsAutoDisabled)`.
- [x] 5.3.5 — Unit tests: downgrade disables orbs, resets scheme; upgrade does not auto-enable.

---

## Epic 6: Quantum Flow Gating ✅

### Story 6.1 — Gate Quantum Flow Scenes by Tier

**As a** Free or Pro tier user,  
**I want** Quantum Flow scenes to be locked,  
**So that** I understand this is an Elite+ feature.

**As an** Elite tier user,  
**I want** access to 4 Quantum Flow scenes,  
**So that** I can enjoy premium visual backgrounds.

**Acceptance Criteria:**
- Free / Pro: 0 Quantum Flow scenes. Feature section locked entirely.
- Elite: 4 scenes unlocked, remaining 2 shown with lock overlay.
- Royal / Trial: All 6 scenes unlocked.
- Locked scenes show a static thumbnail preview with lock icon.

**Subtasks:**
- [x] 6.1.1 — Add `quantumFlowLimit: Int` to `TierManager` (free→0, pro→0, elite→4, royal→6, trial→6). Implemented via `allowedCount(for: .quantumFlow, tier:)` static method.
- [x] 6.1.2 — Define scene priority order in `QuantumFlowScene.sortOrder` (0–5) on the enum directly.
- [x] 6.1.3 — `TierManager.unlockedQuantumScenes() -> [QuantumFlowScene]` returns scenes up to limit.
- [x] 6.1.4 — In `QuantumFlowSettingsView`, show locked overlay with lock icon for inaccessible scenes.
- [x] 6.1.5 — For Free/Pro: show `QuantumFlowLockedPreview` with ELITE badge and upgrade CTA.
- [x] 6.1.6 — For Elite: show 4 unlocked + 2 locked with ROYAL badge on locked ones.
- [x] 6.1.7 — Add unit tests for all tier × scene count combinations (29 new tests).

---

### Story 6.2 — Quantum Flow Locked Scene Preview

**As a** user viewing a locked Quantum Flow scene,  
**I want** to see a beautiful static preview of what the scene looks like,  
**So that** I feel the desire to upgrade.

**Acceptance Criteria:**
- Each Quantum Flow scene has a pre-rendered thumbnail image.
- Locked scenes: show thumbnail with a subtle Ken Burns pan animation (slow zoom).
- Tapping shows a 5-second animated preview with upgrade prompt overlay.
- Preview uses reduced quality (half resolution) to avoid performance issues.

**Subtasks:**
- [x] 6.2.1 — Live `MetalQuantumFlowView` demo used instead of static thumbnails (richer experience).
- [x] 6.2.2 — Ken Burns slow zoom animation (1.0→1.08 over 8s, looping) applied to locked preview.
- [x] 6.2.3 — Live preview renders at reduced intensity (0.5) and speed (0.6) for performance.
- [x] 6.2.4 — Frosted glass overlay with gradient → "Unlock with Elite" CTA button.
- [x] 6.2.5 — Scene preview dots with lock icons show all 6 available scenes.
- [x] 6.2.6 — Haptic feedback via `HapticsService.shared.buttonPress()` on CTA tap.

---

### Story 6.3 — Quantum Flow Revert on Downgrade

**As a** user who downgrades from Royal to Elite,  
**I want** any active Quantum Flow scene beyond scene 4 to revert to an allowed one,  
**So that** my background still looks great within my new tier.

**Acceptance Criteria:**
- If active scene index > allowed limit: switch to highest allowed scene with crossfade.
- If downgrading to Pro/Free (0 scenes): disable Quantum Flow entirely with fade-to-default.
- Show brief notification: "Quantum Flow adjusted to match your plan".

**Subtasks:**
- [x] 6.3.1 — In `TierManager.selectTier`, check if active Quantum scene exceeds new limit.
- [x] 6.3.2 — If exceeds and new limit > 0: switch to highest allowed scene via `unlockedQuantumScenes().last`.
- [x] 6.3.3 — If new limit == 0: disable quantum flow entirely, reset scene to default.
- [x] 6.3.4 — Reset `UserProfile.quantumFlowScene` to valid value (dubaiCelestialMirage default).
- [x] 6.3.5 — Post `.quantumFlowAutoAdjusted` notification → toast in settings view.
- [x] 6.3.6 — Integration tests: scene 5 → Elite → reverts to scene 3; Royal→Free disables entirely; keeps allowed scene.

---

## Epic 7: Nebula Drift Gating ✅

### Story 7.1 — Gate Nebula Drift Presets by Tier

**As a** Free or Pro tier user,  
**I want** Nebula Drift presets to be locked,  
**So that** I understand this is an Elite+ feature.

**As an** Elite tier user,  
**I want** access to 4 Nebula Drift presets,  
**So that** I can enjoy premium ambient backgrounds.

**Acceptance Criteria:**
- Free / Pro: 0 Nebula Drift presets. Section locked entirely.
- Elite: 4 presets unlocked, remaining 2 shown with lock overlay.
- Royal / Trial: All 6 presets unlocked.
- Locked presets show thumbnail with lock icon and minimum tier badge.

**Subtasks:**
- [x] 7.1.1 — Add nebula drift gating via `allowedCount(for: .nebulaDrift, tier:)` (free→0, pro→0, elite→4, royal→6, trial→6). Already present in `TierManager`.
- [x] 7.1.2 — Define preset priority order via `NebulaPreset.sortOrder` (0–5) on the enum directly.
- [x] 7.1.3 — `TierManager.unlockedNebulaPresets() -> [NebulaPreset]` returns presets up to limit.
- [x] 7.1.4 — In `NebulaDriftSettingsView`, show locked overlay with lock icon for inaccessible presets.
- [x] 7.1.5 — For Free/Pro: show `NebulaDriftLockedPreview` with ELITE badge and upgrade CTA.
- [x] 7.1.6 — For Elite: show 4 unlocked + 2 locked with ROYAL badge on locked ones.
- [x] 7.1.7 — Add unit tests for all tier × preset count combinations (29 new tests).

---

### Story 7.2 — Nebula Drift Locked Preview

**As a** user viewing a locked Nebula Drift preset,  
**I want** to see a static preview thumbnail with subtle shimmer,  
**So that** I can appreciate the visual and consider upgrading.

**Acceptance Criteria:**
- Each preset has a pre-rendered thumbnail.
- Locked presets display with a subtle shimmer animation sweeping across the thumbnail.
- Tapping a locked preset shows a half-sheet with: preset name, full-size thumbnail, description, minimum tier badge, "View Plans" CTA.
- The sheet uses the preset's color palette for accent styling.

**Subtasks:**
- [x] 7.2.1 — Live `CosmicBackgroundView` used instead of static thumbnails (richer experience).
- [x] 7.2.2 — Ken Burns slow zoom animation (1.0→1.08 over 8s, looping) applied to locked preview.
- [x] 7.2.3 — Live demo renders at reduced intensity (0.5) and speed (0.4) for performance.
- [x] 7.2.4 — Frosted glass overlay with description, preset dots, and "Unlock with Elite" CTA.
- [x] 7.2.5 — Preset preview colors used for dot styling and ELITE gradient badge.
- [x] 7.2.6 — CTA navigates to `MembershipView` via sheet presentation.
- [x] 7.2.7 — Haptic feedback via `HapticsService.shared.buttonPress()` on CTA tap.

---

### Story 7.3 — Nebula Drift Revert on Downgrade

**As a** user who downgrades and loses access to their active Nebula preset,  
**I want** the background to gracefully revert,  
**So that** the app still looks beautiful at my new tier.

**Acceptance Criteria:**
- If active preset exceeds new tier's limit: crossfade to highest available, or disable if limit is 0.
- Crossfade duration: 2 seconds.
- Reset `UserProfile.nebulaDriftPreset` to valid value or nil.
- Show notification: "Nebula Drift adjusted to match your plan".

**Subtasks:**
- [x] 7.3.1 — In `TierManager.selectTier`, check if active nebula preset exceeds new limit.
- [x] 7.3.2 — If new limit > 0: switch to highest allowed preset via `unlockedNebulaPresets().last`.
- [x] 7.3.3 — If new limit == 0: disable nebula drift entirely, reset preset to lagoonNebula default.
- [x] 7.3.4 — Reset `UserProfile.nebulaPresetEnum` to valid value.
- [x] 7.3.5 — Post `.nebulaDriftAutoAdjusted` notification → toast in settings view.
- [x] 7.3.6 — Integration tests: locked preset → Elite → reverts; Royal→Free disables; keeps allowed preset.

---

## Epic 8: Offline Mode Gating ✅ (COSMETIC — Free tier requires connectivity, Pro+ can use offline)

### Story 8.1 — Gate Offline Mode by Tier

**As a** Free tier user,  
**I want** offline mode to be unavailable,  
**So that** I understand this is a premium feature for learning on-the-go.

**As a** Pro/Elite/Royal user,  
**I want** offline access to my content,  
**So that** I can practice without an internet connection.

**Acceptance Criteria:**
- Free tier: Offline mode toggle is visible but disabled, with "PRO" badge.
- Pro / Elite / Royal / Trial: Offline mode toggle is enabled and functional.
- When offline mode is enabled: content is downloaded for the active language pair.
- When disabled / locked: content is only available via network fetch.
- Downloaded content is removed if user downgrades to Free.

**Subtasks:**
- [x] 8.1.1 — Add `offlineModeAvailable: Bool` to `TierManager` (false for free, true for all others).
- [x] 8.1.2 — In Settings, show offline toggle with`.disabled(!tierManager.offlineModeAvailable)`.
- [x] 8.1.3 — Add "PRO" badge next to disabled toggle for Free users.
- [x] 8.1.4 — Tapping disabled toggle shows upgrade prompt sheet.
- [x] 8.1.5 — Add unit test: free → offline unavailable; pro → offline available.

---

### Story 8.2 — Connectivity Monitor & Free Tier Gate ✅ (Modified: no downloadable content)

**As a** Free tier user going offline,  
**I want** to see a connectivity warning banner,  
**So that** I know I need an internet connection to use the app.

**Acceptance Criteria:**
- Shared `NetworkMonitor` @Observable service monitors connectivity app-wide.
- SignOutView uses shared NetworkMonitor instead of its own local NWPathMonitor.
- Dashboard shows an `OfflineBanner` for Free users when offline.
- Banner includes PRO badge button leading to upgrade sheet.
- ConnectivitySettingsView in Sync tab shows real-time connection status.

**Subtasks:**
- [x] 8.2.1 — Create `NetworkMonitor` @Observable service using NWPathMonitor.
- [x] 8.2.2 — Inject `NetworkMonitor` via `.environment()` in LumenLingoApp.
- [x] 8.2.3 — Create `OfflineBanner` view with connectivity warning + PRO badge CTA.
- [x] 8.2.4 — Add `OfflineBanner` to Dashboard tab in ContentView.
- [x] 8.2.5 — Refactor SignOutView to use shared NetworkMonitor.
- [x] 8.2.6 — Create `ConnectivitySettingsView` with offline mode toggle + status.
- [x] 8.2.7 — Add ConnectivitySettingsView to Profile → Sync tab.
- [x] 8.2.8 — Add localization strings for all 9 languages.

---

### Story 8.3 — Offline Mode Reset on Downgrade ✅ (Modified: no content cleanup, only toggle reset)

**As a** user who downgrades to Free,  
**I want** offline mode to be automatically disabled,  
**So that** the toggle reflects my tier's capabilities.

**Acceptance Criteria:**
- On downgrade to Free: `offlineModeEnabled` resets to false.
- Post `.offlineModeAutoDisabled` notification for toast display.
- Downgrade toast shown in ConnectivitySettingsView.
- Upgrade does not auto-enable offline mode.

**Subtasks:**
- [x] 8.3.1 — In `TierManager.selectTier`, disable offline mode on downgrade to free.
- [x] 8.3.2 — Post `.offlineModeAutoDisabled` notification.
- [x] 8.3.3 — Add `offlineModeEnabled: Bool` property to `UserProfile` (SwiftData).
- [x] 8.3.4 — ConnectivitySettingsView shows downgrade toast on notification.
- [x] 8.3.5 — Downgrade to Pro from Elite keeps offline mode enabled.
- [x] 8.3.6 — Unit tests: downgrade→disabled, upgrade→not auto-enabled, pro→pro keeps state.

---

## Epic 9: Upgrade Prompts & Soft Gates ✅

### Story 9.1 — Contextual Upgrade Prompts at Feature Boundaries

**As a** Free tier user encountering a locked feature,  
**I want** a beautiful, non-aggressive upgrade prompt,  
**So that** I feel enticed rather than frustrated.

**Acceptance Criteria:**
- Upgrade prompts appear at natural boundaries (not interrupting active learning).
- Each prompt is contextual: shows the specific feature that triggered it.
- Prompts use the minimum tier's gradient colors.
- Each prompt has: feature preview, benefit description, tier name, and "View Plans" CTA.
- Prompts can be dismissed (never force-block the user).
- Same prompt does not appear more than once per session.

**Subtasks:**
- [x] 9.1.1 — Create `UpgradePromptView` component with configurable feature, tier, and description.
- [x] 9.1.2 — Add `UpgradePromptManager` to track shown prompts per session (`Set<PremiumFeature>`).
- [x] 9.1.3 — `UpgradePromptManager.shouldShow(for feature:) -> Bool` checks session history.
- [x] 9.1.4 — After showing, add feature to `shownPrompts` set.
- [x] 9.1.5 — Prompt uses adaptive layout: half-sheet on iPhone, popover on iPad.
- [x] 9.1.6 — Add spring entrance animation with slight bounce.
- [x] 9.1.7 — Add dismiss gesture (swipe down) and explicit close button.
- [x] 9.1.8 — Track event: `upgrade_prompt_shown(feature:, tier:, dismissed:)`.

---

### Story 9.2 — Feature Discovery Carousel for Free Users

**As a** Free tier user on the dashboard,  
**I want** to see a subtle showcase of premium features I'm missing,  
**So that** I understand the value proposition without being annoyed.

**Acceptance Criteria:**
- Dashboard shows a small, horizontally scrollable carousel of 3 premium feature cards.
- Cards rotate every 5 seconds with a crossfade animation.
- Each card shows: feature icon, name, one-line benefit, minimum tier badge.
- Tapping a card opens the feature's upgrade prompt.
- Carousel only appears for Free tier users.
- Carousel can be permanently dismissed via "[x] Don't show again" option.

**Subtasks:**
- [x] 9.2.1 — Create `PremiumFeatureCarousel` view with horizontal `ScrollView` + paging.
- [x] 9.2.2 — Define 3 featured items: Soundscapes, Breathing Orbs, Unlimited Practice.
- [x] 9.2.3 — Create `PremiumFeatureCard` view: icon + name + benefit + tier badge.
- [x] 9.2.4 — Add auto-scroll timer (5-second interval) with crossfade transition.
- [x] 9.2.5 — On card tap: present `UpgradePromptView` for that feature.
- [x] 9.2.6 — Add "Don't show again" option that persists to `UserDefaults`.
- [x] 9.2.7 — Only render carousel when `TierManager.currentTierId == "free"`.
- [x] 9.2.8 — Add appear animation: slide up from bottom with slight delay.
- [x] 9.2.9 — Add snapshot tests for carousel in both themes.

---

### Story 9.3 — Post-Session Upgrade Nudge

**As a** Free tier user finishing a practice session,  
**I want** an occasional, gentle reminder of premium benefits,  
**So that** I consider upgrading at a moment of satisfaction.

**Acceptance Criteria:**
- After every 3rd completed session, show a brief upgrade nudge.
- Nudge appears below the session summary, not as a modal (non-blocking).
- Nudge shows a rotating premium benefit (different each time).
- Nudge has a "Learn More" link (not a hard CTA).
- Nudge does not appear for paid tier users.
- Nudge can be permanently hidden via user preference.

**Subtasks:**
- [x] 9.3.1 — Create `PostSessionNudge` view: subtle banner with benefit text and "Learn More" link.
- [x] 9.3.2 — Track session count in `UserDefaults`; show nudge when `count % 3 == 0`.
- [x] 9.3.3 — Rotate benefits: array of 5 benefit strings, select by `count / 3 % 5`.
- [x] 9.3.4 — "Learn More" navigates to `MembershipView`.
- [x] 9.3.5 — Add "Hide forever" option, persist to `UserDefaults`.
- [x] 9.3.6 — Only show for `TierManager.currentTierId == "free"`.
- [x] 9.3.7 — Add subtle fade-in animation with 0.5s delay after session summary loads.
- [x] 9.3.8 — Add unit test: nudge shown on 3rd, 6th, 9th sessions; not shown on 1st, 2nd, 4th, 5th.

---

### Story 9.4 — Locked Feature Indicator in Navigation

**As a** Free/Pro tier user,  
**I want** locked features to have a subtle lock indicator in tab bars and menus,  
**So that** I know at a glance which areas require an upgrade.

**Acceptance Criteria:**
- Settings sub-items for locked features show a small lock icon (8pt, 30% opacity).
- Lock icon is tier-colored (purple for Pro, cyan for Elite, gold for Royal).
- Lock icon disappears with a pop animation when the feature becomes unlocked via tier change.
- Lock icon is purely decorative — navigation is NOT blocked (user can still view locked feature previews).

**Subtasks:**
- [x] 9.4.1 — Create `LockedFeatureLabel` modifier that appends a lock icon to any Text.
- [x] 9.4.2 — Determine lock color from minimum tier: pro→purple, elite→cyan, royal→gold.
- [x] 9.4.3 — Apply to settings items: Breathing Orbs (free), Quantum Flow (free/pro), Nebula Drift (free/pro), Offline (free).
- [x] 9.4.4 — On tier change that unlocks a feature: animate lock icon with `.transition(.scale.combined(with: .opacity))`.
- [x] 9.4.5 — Ensure VoiceOver reads: "[Feature name], locked, requires [tier] plan".
- [x] 9.4.6 — Add snapshot tests for each lock state.

---

## Epic 10: Royal Trial Lifecycle ✅

### Story 10.1 — Start Royal Trial

**As a** new user,  
**I want** to start a 14-day Royal Trial,  
**So that** I can experience all premium features before choosing a plan.

**Acceptance Criteria:**
- Tapping "Start Free Trial" on the Trial tier card activates the trial.
- Trial start date is persisted to `UserProfile`.
- User immediately gets full Royal-tier access to all features.
- A confirmation screen shows: trial duration, features included, what happens after.
- Trial can only be started once per user.

**Subtasks:**
- [x] 10.1.1 — Add `trialStartDate: Date?` to `UserProfile`.
- [x] 10.1.2 — Add `hasUsedTrial: Bool` computed property (`trialStartDate != nil`).
- [x] 10.1.3 — On "Start Free Trial" tap: set `trialStartDate = Date.now` and `selectedTierId = "trial"`.
- [x] 10.1.4 — If `hasUsedTrial`: hide or disable the Trial card in `MembershipView`.
- [x] 10.1.5 — Create `TrialConfirmationView`: celebration animation, feature list, 14-day countdown.
- [x] 10.1.6 — Present confirmation as full-screen cover with confetti particles.
- [x] 10.1.7 — Add haptic feedback (notification success) on trial activation.
- [x] 10.1.8 — Add unit test: start trial → `selectedTierId == "trial"` and `trialStartDate != nil`.
- [x] 10.1.9 — Add unit test: trial already used → cannot start again.

---

### Story 10.2 — Trial Countdown Display

**As a** user on the Royal Trial,  
**I want** to see how many days remain in my trial,  
**So that** I can plan my decision before it expires.

**Acceptance Criteria:**
- Dashboard shows a "Trial: X days remaining" banner when trial is active.
- Banner uses the trial tier gradient (gold→purple→pink).
- When 3 days or fewer remain, banner turns to a warmer color (orange→red gradient).
- Tapping the banner opens `MembershipView`.
- Banner includes a subtle pulsing animation in the last 3 days.

**Subtasks:**
- [x] 10.2.1 — Create `TrialCountdownBanner` view with gradient background and day count.
- [x] 10.2.2 — Calculate remaining days: `Calendar.current.dateComponents([.day], from: .now, to: expiryDate).day`.
- [x] 10.2.3 — Use trial gradient for >3 days, warning gradient for ≤3 days.
- [x] 10.2.4 — Add pulsing animation (opacity 0.8↔1.0, 2-second loop) for ≤3 days.
- [x] 10.2.5 — Add tap gesture → navigate to `MembershipView`.
- [x] 10.2.6 — Only show banner when `TierManager.currentTierId == "trial"`.
- [x] 10.2.7 — Add unit test: 10 days remaining → normal gradient; 2 days → warning gradient.

---

### Story 10.3 — Trial Expiration Handling

**As a** user whose Royal Trial has expired,  
**I want** to be gracefully downgraded to the Free tier,  
**So that** my app continues to work without crashes.

**Acceptance Criteria:**
- On app launch: check if trial has expired (`trialStartDate + 14 days < now`).
- If expired: set `selectedTierId = "free"`, trigger all downgrade logic (soundscapes stop, visuals revert, etc.).
- Show a "Trial Ended" screen with: summary of what they experienced, current Free tier info, CTA to choose a plan.
- This screen appears once (not on every launch).
- User's progress and data from the trial period are preserved.

**Subtasks:**
- [x] 10.3.1 — Add `TierManager.checkTrialExpiration()` called on app launch.
- [x] 10.3.2 — If `trialStartDate + 14 days < Date.now` and `currentTierId == "trial"`: set to "free".
- [x] 10.3.3 — Add `trialExpired: Bool` flag to `UserProfile` (prevents showing screen repeatedly).
- [x] 10.3.4 — Create `TrialEndedView`: summary of trial stats (XP earned, sessions played), Free tier features, "Choose a Plan" CTA.
- [x] 10.3.5 — Present `TrialEndedView` as a full-screen cover on first post-expiry launch.
- [x] 10.3.6 — After dismissing, set `trialExpired = true` so it doesn't show again.
- [x] 10.3.7 — All downgrade handlers from Epics 2-8 fire automatically via `TierManager.didSet`.
- [x] 10.3.8 — Do NOT delete progress data from trial period.
- [x] 10.3.9 — Add unit test: trial started 15 days ago → `checkTrialExpiration()` sets tier to "free".
- [x] 10.3.10 — Add unit test: trial started 10 days ago → tier remains "trial".

---

### Story 10.4 — Trial Card Visibility After Use

**As a** user who has already used their trial,  
**I want** the Trial card to be hidden or show "Trial Used",  
**So that** the membership page isn't confusing.

**Acceptance Criteria:**
- If `hasUsedTrial == true`: Trial card shows "Trial Completed" state with dimmed styling.
- The CTA button changes to "Trial Used" (disabled, 30% opacity).
- Card is moved to the end of the tier list (not first).
- If trial is active: card shows "X days remaining" in the badge position.

**Subtasks:**
- [x] 10.4.1 — In `MembershipView.tiers`, conditionally modify Trial tier based on `hasUsedTrial`.
- [x] 10.4.2 — If used: set `cta` to "Trial Completed", `badgeText` to nil, move to array end.
- [x] 10.4.3 — If active: set `badgeText` to "X DAYS LEFT".
- [x] 10.4.4 — Apply `.opacity(0.5)` to the entire used-trial card.
- [x] 10.4.5 — Disable tap gesture on used-trial CTA.
- [x] 10.4.6 — Add snapshot tests for all 3 trial card states (available, active, used).

---

## Epic 11: Settings & Appearance Gating ✅

### Story 11.1 — Gate Appearance Sub-Tabs by Tier

**As a** Free tier user in Settings → Appearance,  
**I want** locked appearance sub-tabs (Breathing Orbs, Quantum Flow, Nebula Drift) to show a lock indicator,  
**So that** I know these are premium features without being blocked from browsing.

**Acceptance Criteria:**
- All 4 appearance sub-tabs are always visible (not hidden).
- Locked sub-tabs show a small lock icon next to their name.
- Tapping a locked sub-tab navigates to the preview/upgrade page for that feature.
- Unlocked sub-tabs behave normally with full settings controls.
- Lock icon color matches the minimum tier's gradient.

**Subtasks:**
- [x] 11.1.1 — In `ProfileView` appearance tab picker, append lock icon for locked features.
- [x] 11.1.2 — Determine lock state from `TierManager` for each sub-tab: Breathing Orbs (free locked), Quantum Flow (free/pro locked), Nebula Drift (free/pro locked).
- [x] 11.1.3 — Lock icon: `Image(systemName: "lock.fill").font(.system(size: 8)).opacity(0.4)`.
- [x] 11.1.4 — Color-code lock: `.purple` for Pro features, `.cyan` for Elite features.
- [x] 11.1.5 — On sub-tab selection: if locked, show preview+upgrade view; if unlocked, show settings.
- [x] 11.1.6 — Add smooth animations for lock icon appear/disappear on tier change.
- [x] 11.1.7 — Add unit test: free tier → 3 sub-tabs locked; pro → 2 locked; elite/royal → 0 locked.


---

### Story 11.3 — Sound Settings Gating

**As a** Free tier user in Sound Settings,  
**I want** to see that soundscapes are a premium feature,  
**So that** I understand the value while still accessing basic sound controls.

**Acceptance Criteria:**
- All tiers: access to haptic feedback toggle and system sound volume.
- Free tier: Soundscape section shows "PRO" badge with preview.
- Pro: Soundscape section shows 1 unlocked, others locked.
- Elite+: Full soundscape controls.
- Sound preview (3-second) is available for all tiers on all soundscapes.

**Subtasks:**
- [x] 11.3.1 — In `SoundSettingsView`, split into "General" and "Soundscapes" sections.
- [x] 11.3.2 — "General" section: haptic toggle + volume — always accessible.
- [x] 11.3.3 — "Soundscapes" section: gated by `TierManager.soundscapeAccess`.
- [x] 11.3.4 — For Free: show soundscape preview with frosted overlay and "PRO" badge.
- [x] 11.3.5 — For Pro: show 1 unlocked soundscape + locked previews for others.
- [x] 11.3.6 — Add 3-second preview button for all soundscapes (even locked ones).
- [x] 11.3.7 — Preview button uses `AudioService.playPreview()` (no tier check — previews are free).
- [x] 11.3.8 — Add unit test: free tier → soundscapes section shows locked state.

---

## Epic 12: Dashboard Feature Visibility ✅

### Story 12.1 — Dynamic Dashboard Layout by Tier

**As a** user on any tier,  
**I want** the dashboard to show features relevant to my tier,  
**So that** I see what's available to me without clutter.

**Acceptance Criteria:**
- Free tier dashboard: shows game modes, overview stats, daily time remaining indicator, premium feature carousel.
- Pro tier: shows game modes, overview stats, soundscape now-playing widget, offline status.
- Elite tier: Pro features .
- Royal tier: Elite features + "Royal" badge in header.

**Subtasks:**
- [x] 12.1.1 — Create `DashboardWidgetConfig` struct listing widgets per tier.
- [x] 12.1.2 — `TierManager.dashboardWidgets() -> [DashboardWidget]` returns tier-appropriate widgets.
- [x] 12.1.3 — In `DashboardView`, iterate over `dashboardWidgets` to render dynamic layout.
- [x] 12.1.4 — Create `SoundscapeNowPlaying` widget: mini player with current soundscape name and pause/play.
- [x] 12.1.9 — On tier change: widgets add/remove with spring transitions.
- [x] 12.1.10 — Add snapshot tests for each tier's dashboard layout.

---

### Story 12.2 — Tier-Specific Welcome Message

**As a** user opening the app,  
**I want** the dashboard greeting to reflect my tier,  
**So that** I feel acknowledged and valued at my tier level.

**Acceptance Criteria:**
- Free: "Welcome, [Name]" — standard greeting.
- Pro: "Welcome, [Name] ⚡" — with Pro bolt icon.
- Elite: "Welcome, [Name] ✨" — with Elite sparkles icon.
- Royal: "Welcome, [Name] 👑" — with Royal crown icon.
- Trial: "Welcome, [Name] 🎁" — with Trial gift icon + "X days left" subtitle.
- Icon uses the tier's gradient colors.

**Subtasks:**
- [x] 12.2.1 — Add `TierManager.tierIcon: String` computed property returning the tier's SF Symbol name.
- [x] 12.2.2 — Add `TierManager.tierEmoji: String` for fallback display.
- [x] 12.2.3 — In dashboard header, append tier icon after user name.
- [x] 12.2.4 — Apply tier gradient to the icon.
- [x] 12.2.5 — For trial: add subtitle "X days left in your trial" below greeting.
- [x] 12.2.6 — Add entrance animation: icon bounces in with spring.
- [x] 12.2.7 — Add unit test: each tier returns correct icon.

---

### Story 12.3 — Game Mode Availability Indicators

**As a** user on any tier,  
**I want** game mode cards on the dashboard to indicate if I have full access,  
**So that** I know what to expect before starting a session.

**Acceptance Criteria:**
- All tiers have access to all 3 game modes (Flashcards, Grammar, Word Builder).
- Free tier: game mode cards show "30 min/day" time limit badge.
- Pro+: game mode cards show "Unlimited" badge.
- If daily limit is reached (Free tier): cards show "Resets at [time]" and are dimmed.
- Cards are never fully locked — only time-limited for Free tier.

**Subtasks:**
- [x] 12.3.1 — In game mode card view, add conditional badge: time-limited vs unlimited.
- [x] 12.3.2 — Badge text from `TierManager`: free → "30 min/day", others → "Unlimited".
- [x] 12.3.3 — When `PracticeTimeTracker.isExpired`: dim card to `.opacity(0.5)`, show reset time.
- [x] 12.3.4 — Reset time formatted as: "Resets at 12:00 AM" using `DateFormatter.shortTime`.
- [x] 12.3.5 — On card tap when expired: show `PracticeExpiredView` instead of starting game.
- [x] 12.3.6 — Add smooth transition between active and expired states.
- [x] 12.3.7 — Add unit test: free tier expired → cards dimmed; pro tier → always active.

---

## Epic 13: Game Session Feature Integration ✅

### Story 13.1 — In-Session Tier Awareness

**As a** user in an active game session,  
**I want** the session to respect my tier's limitations,  
**So that** the experience is consistent with my plan.

**Acceptance Criteria:**
- Free tier: session ends when daily practice time expires (after current question completes).
- Free tier: no soundscape playback during sessions.
- Pro: soundscape can play during sessions (if enabled in settings).
- Session UI shows no tier badges — immersive, distraction-free.

**Subtasks:**
- [x] 13.1.1 — In game session view, check `PracticeTimeTracker.remainingTime` each question.
- [x] 13.1.2 — If time expires: complete current question, save progress, show expired view.
- [x] 13.1.3 — If soundscape is enabled and tier allows: play ambient audio via `AudioService`.
- [x] 13.1.5 — Remove all tier badges/indicators from in-session UI (keep it clean).
- [x] 13.1.6 — Add unit test: free tier → session ends on time expiry with progress saved.
- [x] 13.1.7 — Add unit test: pro tier → soundscape plays during session.

---

### Story 13.2 — Session Results with Tier-Specific Extras

**As a** paid tier user completing a session,  
**I want** enhanced session results with richer statistics,  
**So that** I feel the added value of my plan.

**Acceptance Criteria:**
- Free tier: basic results — XP earned, cards reviewed, accuracy.
- Pro tier: basic + time spent breakdown, streak info, comparison to previous session.
- Elite tier: Pro + performance graph (last 7 sessions), weak areas analysis.
- Royal tier: Elite + personalized tips based on mistakes, shareable result card.
- Locked enhancements show "Available on [tier]" below the divider.

**Subtasks:**
- [x] 13.2.1 — Create `SessionResultsConfig` struct with sections enabled per tier.
- [x] 13.2.2 — `TierManager.sessionResultsConfig() -> SessionResultsConfig`.
- [x] 13.2.3 — In `SessionResultsView`, conditionally render sections based on config.
- [x] 13.2.4 — Create `SessionComparisonWidget`: compare XP/accuracy vs previous session.
- [x] 13.2.5 — Create `PerformanceGraphWidget`: line chart of last 7 sessions' accuracy.
- [x] 13.2.6 — Create `WeakAreasWidget`: list of categories with lowest accuracy, with improvement tips.
- [x] 13.2.7 — Create `ShareableResultCard`: rendered as an image, shareable via `UIActivityViewController`.
- [x] 13.2.8 — Below each locked section: show "Available on [tier]" with tier badge.
- [x] 13.2.9 — Add staggered reveal animations for result sections.
- [x] 13.2.10 — Add unit tests for each tier's enabled sections.

---

### Story 13.3 — XP Multiplier by Tier

**As a** paid tier user,  
**I want** an XP bonus based on my tier,  
**So that** I progress faster as a benefit of my plan.

**Acceptance Criteria:**
- Free tier: 1.0× XP multiplier (base).
- Pro tier: 1.25× XP multiplier.
- Elite tier: 1.5× XP multiplier.
- Royal / Trial: 2.0× XP multiplier.
- Multiplier is shown on the session start screen as a badge (e.g., "2× XP").
- XP calculation happens after session; base XP × multiplier = final XP.
- Multiplier badge animates with a glow effect for Royal tier.

**Subtasks:**
- [x] 13.3.1 — Add `TierManager.xpMultiplier: Double` (free→1.0, pro→1.25, elite→1.5, royal/trial→2.0).
- [x] 13.3.2 — In `GameSession.calculateXP()`, multiply base XP by `TierManager.xpMultiplier`.
- [x] 13.3.3 — Create `XPMultiplierBadge` view: "X.X× XP" capsule with tier gradient.
- [x] 13.3.4 — Show badge on session start screen, positioned below game mode title.
- [x] 13.3.5 — For Royal: add glow animation (pulsing shadow, 2-second loop).
- [x] 13.3.6 — In session results: show base XP, multiplier, and final XP breakdown.
- [x] 13.3.7 — Add unit test: 100 base XP × 2.0 multiplier (Royal) = 200 final XP.
- [x] 13.3.8 — Add unit test: multiplier changes immediately on tier change.

---

## Epic 14: Journey / Progress View Gating ✅

### Story 14.1 — Journey Statistics Depth by Tier

**As a** paid tier user,  
**I want** richer journey statistics,  
**So that** I gain deeper insights into my learning progress.

**Acceptance Criteria:**
- Free tier: basic stats — total XP, sessions played, current streak.
- Pro tier: basic + game-type breakdown, daily XP chart (last 7 days).
- Elite tier: Pro + weekly trend analysis, accuracy heatmap by category.
- Royal tier: Elite + monthly progress report, milestone predictions.
- Locked stat sections show blurred preview with tier badge.

**Subtasks:**
- [x] 14.1.1 — Create `JourneyStatsConfig` listing enabled sections per tier.
- [x] 14.1.2 — `TierManager.journeyStatsConfig() -> JourneyStatsConfig`.
- [x] 14.1.3 — In `JourneyView`, conditionally render stat sections based on config.
- [x] 14.1.4 — Create `DailyXPChart` widget: bar chart of last 7 days' XP.
- [x] 14.1.5 — Create `WeeklyTrendWidget`: line chart comparing this week vs last week.
- [x] 14.1.6 — Create `AccuracyHeatmap` widget: grid of categories color-coded by accuracy.
- [x] 14.1.7 — Create `MonthlyReportWidget`: summary card with key metrics and percentage changes.
- [x] 14.1.8 — Create `MilestonePredictionWidget`: estimated dates for next milestones based on current pace.
- [x] 14.1.9 — For locked sections: apply `.blur(radius: 6)` + tier badge overlay.
- [x] 14.1.10 — Tapping a blurred section shows upgrade prompt for that feature.
- [x] 14.1.11 — Add unit tests for each tier's enabled journey sections.

---

### Story 14.2 — Milestone Badges with Tier Aesthetics

**As a** user earning milestones,  
**I want** my milestone badges to reflect my tier's visual quality,  
**So that** higher tiers feel more premium even in achievement visuals.

**Acceptance Criteria:**
- Free tier: flat, simple badge icons (no gradients, basic shapes).
- Pro tier: badges have subtle gradient fills.
- Elite tier: badges have gradient fills + particle sparkle animation on earn.
- Royal tier: badges have holographic shimmer effect + confetti burst on earn.
- Badge quality upgrades retroactively when user upgrades tier.

**Subtasks:**
- [x] 14.2.1 — Create `MilestoneBadgeStyle` enum: `.basic`, `.gradient`, `.sparkle`, `.holographic`.
- [x] 14.2.2 — Map tiers to badge styles: free→basic, pro→gradient, elite→sparkle, royal→holographic.
- [x] 14.2.3 — Create `MilestoneBadgeView` that renders differently based on style.
- [x] 14.2.4 — `.basic` style: flat color fill, no animation.
- [x] 14.2.5 — `.gradient` style: linear gradient fill matching tier colors.
- [x] 14.2.6 — `.sparkle` style: gradient + particle emitter on appear.
- [x] 14.2.7 — `.holographic` style: animated rainbow gradient sweep + confetti.
- [x] 14.2.8 — On tier upgrade: existing badges re-render in new style with celebration animation.
- [x] 14.2.9 — Add snapshot tests for all 4 badge styles.

---

## Epic 17: Tier-Specific Animations & Polish ✅

### Story 17.1 — Tier Upgrade Celebration Animation

**As a** user who upgrades to a higher tier,  
**I want** a satisfying celebration animation,  
**So that** my upgrade feels special and rewarding.

**Acceptance Criteria:**
- On tier upgrade: full-screen celebration overlay.
- Animation includes: tier icon scaling up with spring bounce, confetti burst in tier gradient colors, tier name text fade-in, brief haptic pattern (success).
- Duration: 2.5 seconds total, auto-dismiss.
- Celebration only plays on upgrade (not on downgrade or horizontal switch).

**Subtasks:**
- [x] 17.1.1 — Create `TierUpgradeCelebration` view: full-screen overlay.
- [x] 17.1.2 — Determine if change is an upgrade: compare tier rank (free<pro<elite<royal).
- [x] 17.1.3 — Add `TierRank` comparable enum for tier ordering.
- [x] 17.1.4 — Confetti particle emitter using `Canvas` or Metal: 100 particles in tier gradient colors.
- [x] 17.1.5 — Icon animation: scale 0→1.2→1.0 with spring, starting at +0.3s.
- [x] 17.1.6 — Tier name: fade in with tracking animation (letters spacing out then in), at +0.8s.
- [x] 17.1.7 — Haptic pattern: `.success` at +0.3s, `.impact(.light)` at +0.5s, +0.7s, +0.9s.
- [x] 17.1.8 — Auto-dismiss at 2.5s with fade-out.
- [x] 17.1.9 — Only trigger when `newRank > oldRank`.
- [x] 17.1.10 — Add unit test: free→pro = celebration; pro→free = no celebration.

---

### Story 17.3 — Card Interaction Haptics by Tier

**As a** premium user interacting with game cards,  
**I want** richer haptic feedback,  
**So that** the tactile experience matches my tier level.

**Acceptance Criteria:**
- Free tier: basic haptic on card flip/answer (`.impact(.light)`).
- Pro tier: enhanced haptic pattern on correct answer (double tap pattern).
- Elite tier: Pro + subtle continuous haptic during card swipe gestures.
- Royal tier: custom haptic patterns for correct/incorrect/streak milestones.
- Haptic preferences can be disabled per user preference (always respect accessibility).

**Subtasks:**
- [x] 17.3.1 — Add `TierManager.hapticLevel: HapticLevel` enum: `.basic`, `.enhanced`, `.rich`, `.premium`.
- [x] 17.3.2 — Create `TierHapticsService` that wraps `HapticsService` with tier-aware patterns.
- [x] 17.3.3 — `.basic`: single impact on key actions.
- [x] 17.3.4 — `.enhanced`: double-tap pattern on correct answers.
- [x] 17.3.5 — `.rich`: continuous haptic engine during swipe gestures.
- [x] 17.3.6 — `.premium`: custom `CHHapticPattern` for 4 distinct events (correct, incorrect, streak, milestone).
- [x] 17.3.7 — Respect `UserProfile.hapticsEnabled` toggle — always check before playing.
- [x] 17.3.8 — Add unit test: haptic level matches tier; disabled → no haptics regardless of tier.

---

## Epic 18: Data & Analytics by Tier ✅

### Story 18.1 — Export Learning Data by Tier

**As an** Elite+ user,  
**I want** to export my learning data,  
**So that** I can track my progress externally or share with a tutor.

**Acceptance Criteria:**
- Free / Pro: no export option. "ELITE" badge shown.
- Elite: export as CSV (basic stats: date, game type, XP, accuracy per session).
- Royal: export as CSV + JSON + PDF report with charts.
- Export generated on-device (no server round-trip).
- Shared via `UIActivityViewController` (AirDrop, email, Files, etc.).

**Subtasks:**
- [x] 18.1.1 — Add `TierManager.exportFormats: [ExportFormat]` (elite→[.csv], royal→[.csv, .json, .pdf]).
- [x] 18.1.2 — Create "Export Data" button in Journey/Profile view, gated by tier.
- [x] 18.1.3 — For locked tiers: show "ELITE" badge on the button.
- [x] 18.1.4 — Create `DataExporter` service: accepts `[GameProgressRecord]`, produces `Data` in requested format.
- [x] 18.1.5 — CSV export: headers + rows with session data.
- [x] 18.1.6 — JSON export: structured dictionary with metadata and session array.
- [x] 18.1.7 — PDF export: use `UIGraphicsPDFRenderer` to generate report with embedded charts.
- [x] 18.1.8 — Present `UIActivityViewController` with generated file.
- [x] 18.1.9 — Add unit test: export produces valid CSV with correct row count.

---

### Story 18.2 — Learning Insights Dashboard by Tier

**As a** Royal tier user,  
**I want** a dedicated insights dashboard with deep analytics,  
**So that** I can optimize my learning strategy.

**Acceptance Criteria:**
- Free / Pro / Elite: "Insights" tab in Journey shows "ROYAL" badge overlay.
- Royal: full insights dashboard with: optimal practice times (based on performance data), category mastery radar chart, vocabulary retention curve, predicted fluency timeline.
- Insights are computed locally from `GameProgressRecord` data.
- Dashboard updates after each completed session.

**Subtasks:**
- [x] 18.2.1 — Add "Insights" tab/section to JourneyView, gated by `TierManager.insightsAvailable`.
- [x] 18.2.2 — For non-Royal: show blurred preview with "ROYAL" badge.
- [x] 18.2.3 — Create `OptimalTimesWidget`: analyze session timestamps vs accuracy → recommend best practice times.
- [x] 18.2.4 — Create `MasteryRadarChart`: radar/spider chart of category scores.
- [x] 18.2.5 — Create `RetentionCurveWidget`: plot spaced repetition efficiency over time.
- [x] 18.2.6 — Create `FluencyTimelineWidget`: predict milestone dates based on current pace.
- [x] 18.2.7 — All computations run on background queue to avoid UI jank.
- [x] 18.2.8 — Cache computed insights, invalidate after new session completion.
- [x] 18.2.9 — Add unit tests for computation accuracy.

---

## Epic 19: Feature Flag Infrastructure

### Story 19.1 — Centralized Feature Flag System

**As a** developer,  
**I want** all tier-based feature flags managed centrally,  
**So that** adding new gated features is fast and consistent.

**Acceptance Criteria:**
- All feature gating goes through `TierManager` — no direct tier string comparisons in views.
- Adding a new gated feature requires only: adding to `PremiumFeature` enum and updating tier mapping.
- Feature flags can be overridden for testing via a debug menu.
- Flag evaluation is O(1) — dictionary lookup, not iteration.

**Subtasks:**
- [x] 19.1.1 — Define complete `PremiumFeature` enum with all features from Epics 2–18.
- [x] 19.1.2 — Create `TierFeatureMap: [String: Set<PremiumFeature>]` mapping tier IDs to feature sets.
- [x] 19.1.3 — `TierManager.hasAccess(to:) -> Bool` uses dictionary lookup.
- [x] 19.1.4 — `TierManager.allowedCount(for:) -> Int` for variable-limit features.
- [x] 19.1.5 — Add `#if DEBUG` menu in settings to override individual features.
- [x] 19.1.6 — Override stored in `UserDefaults` with `featureOverride_` prefix.
- [x] 19.1.7 — Overrides only active in debug builds — stripped from release.
- [x] 19.1.8 — Add exhaustive unit tests: every feature × every tier permutation.
- [x] 19.1.9 — Document flag system in code comments for new developers.

---

### Story 19.2 — Tier Debug Panel

**As a** developer or QA tester,  
**I want** a debug panel to quickly switch tiers and see the effect,  
**So that** I can test all gating scenarios without modifying code.

**Acceptance Criteria:**
- Available only in `#if DEBUG` builds.
- Accessible via Settings → Beta → "Tier Debug" row.
- Panel shows: current tier, quick-switch buttons for all 5 tiers, feature override toggles, trial date override.
- Tier switch takes effect immediately (no app restart).
- Panel shows a live list of all features and their current enabled/disabled state.

**Subtasks:**
- [x] 19.2.1 — Create `TierDebugView` accessible from Settings footer (DEBUG only).
- [x] 19.2.2 — Show 5 tier buttons: tap to switch, selected shows checkmark.
- [x] 19.2.3 — Below buttons: list all `PremiumFeature` cases with enabled/disabled toggle.
- [x] 19.2.4 — Add trial date override: date picker to set `trialStartDate` for testing expiry.
- [x] 19.2.5 — Add "Reset to Default" button that clears all overrides.
- [x] 19.2.6 — Show live feature status: green dot = enabled, red dot = disabled, yellow = overridden.
- [x] 19.2.7 — Wrap entire view in `#if DEBUG` compilation condition.
- [x] 19.2.8 — Add section showing `PracticeTimeTracker` status: used time, remaining, expired state.

---

## Epic 20: Edge Cases & Error Handling

### Story 20.1 — Graceful Handling of Corrupt Tier Data

**As a** user whose tier data becomes corrupted,  
**I want** the app to default to Free tier gracefully,  
**So that** the app remains usable without crashes.

**Acceptance Criteria:**
- If saved `selectedTierId` is not a recognized value: reset to `"free"`.
- If `trialStartDate` is in the future (clock manipulation): treat trial as not started.
- If `trialStartDate` is unreasonably old (>1 year): treat as expired.
- All resets log a warning for debugging.
- User sees no error UI — just seamless fallback.

**Subtasks:**
- [x] 20.1.1 — In `TierManager.init()`, validate loaded tier ID against known set.
- [x] 20.1.2 — If unknown: set to `"free"`, log `os_log(.error, "Invalid tier ID: %@, resetting to free")`.
- [x] 20.1.3 — Validate `trialStartDate`: if future → set to nil; if > 365 days old → mark expired.
- [x] 20.1.4 — Add `TierManager.validateState()` method called on every app launch.
- [x] 20.1.5 — Add unit test: invalid tier ID → falls back to free.
- [x] 20.1.6 — Add unit test: future trial date → treated as not started.
- [x] 20.1.7 — Add unit test: ancient trial date → treated as expired.

---

### Story 20.2 — Concurrent Tier Change Safety

**As a** developer,  
**I want** tier changes to be thread-safe,  
**So that** simultaneous changes from different sources don't cause race conditions.

**Acceptance Criteria:**
- `TierManager.currentTierId` setter is serialized on the main actor.
- All observers receive consistent state (no partial updates).
- Trial expiration check and tier change cannot race with manual tier selection.

**Subtasks:**
- [x] 20.2.1 — Mark `TierManager` as `@MainActor`.
- [x] 20.2.2 — Ensure `checkTrialExpiration()` and manual tier change use same path.
- [x] 20.2.3 — Use `@Observable` pattern (replaces `@Published`) with `@MainActor` for main-thread-safe state.
- [x] 20.2.4 — Add concurrency test: simultaneous tier change and trial check → no crash, consistent state.
- [x] 20.2.5 — Review all `DispatchQueue.main.async` calls related to tier changes — consolidated under `@MainActor`.

---

### Story 20.3 — Feature State Restoration on Upgrade

**As a** user who upgrades from Free to Pro,  
**I want** any previously configured settings (from a past trial) to be restored,  
**So that** I don't have to reconfigure everything from scratch.

**Acceptance Criteria:**
- Settings configured during a trial period are preserved (not deleted on downgrade).
- On upgrade: previously saved settings for newly available features are restored.
- Example: soundscape preference from trial → preserved during Free → restored when upgrading to Pro.
- Only settings that are valid for the new tier are restored (don't restore Elite settings for Pro).

**Subtasks:**
- [x] 20.3.1 — On downgrade: mark settings as "dormant" rather than deleting.
- [x] 20.3.2 — Add `UserProfile.dormantSettings: [String: String]` dictionary (JSON-encoded Data).
- [x] 20.3.3 — On upgrade: check dormant settings for restorable values.
- [x] 20.3.4 — Validate restored values against new tier's allowed options.
- [x] 20.3.5 — Apply restored settings with animation (features "come back to life").
- [x] 20.3.6 — Post `settingsRestored` notification for toast display.
- [x] 20.3.7 — Add unit test: configure on trial → downgrade → upgrade to Pro → verify restoration.
- [x] 20.3.8 — Add unit test: Royal settings not restored when upgrading to Pro (beyond Pro's scope).

---

### Story 20.4 — Multiple Device Tier Consistency

**As a** user who uses the app on multiple devices,  
**I want** my tier selection to be consistent across devices,  
**So that** I have the same experience everywhere.

**Acceptance Criteria:**
- Tier selection syncs via iCloud `NSUbiquitousKeyValueStore`.
- On conflict (different tiers on different devices): use the highest tier as the source of truth.
- Sync happens on app launch and on tier change.
- Offline changes are queued and applied when connectivity returns.

**Subtasks:**
- [x] 20.4.1 — Save `selectedTierId` to both local `UserDefaults` and `NSUbiquitousKeyValueStore`.
- [x] 20.4.2 — On `NSUbiquitousKeyValueStore.didChangeExternallyNotification`: compare remote vs local tier.
- [x] 20.4.3 — If remote tier rank > local: adopt remote tier.
- [x] 20.4.4 — If local tier rank > remote: push local to remote.
- [x] 20.4.5 — Sync trial dates: if remote `trialStartDate` exists and local doesn't, adopt it.
- [x] 20.4.6 — Handle `NSUbiquitousKeyValueStore` not available (iCloud disabled): fall back to local-only via `CloudKeyValueStore` protocol.
- [x] 20.4.7 — Add unit test: remote Pro + local Free → resolves to Pro.
- [x] 20.4.8 — Add unit test: both trial with different dates → use earliest start date.

---

## Appendix A: Tier-Feature Matrix (Complete)

> Verified against `TierManager.swift` source code (March 2026).

| Feature | Free | Pro | Elite | Royal | Trial |
|---|---|---|---|---|---|
| Game Modes | All 3 | All 3 | All 3 | All 3 | All 3 |
| Language Pairs | 3 | 7 | 25 | 25 | 25 |
| Practice Time | 30 min/day | Unlimited | Unlimited | Unlimited | Unlimited |
| Soundscapes | 0 | 1 | 8 | All 12 | All 12 |
| Breathing Orbs | 0 | 6 schemes | 6 schemes | 6 schemes | 6 schemes |
| Quantum Flow | 0 | 0 | 4 scenes | 6 scenes | 6 scenes |
| Nebula Drift | 0 | 0 | 4 presets | 6 presets | 6 presets |
| Offline Mode | No | Yes | Yes | Yes | Yes |
| XP Multiplier | 1.0× | 1.25× | 1.5× | 2.0× | 2.0× |
| Session Results | Basic | Enhanced | Advanced | Premium | Premium |
| Data Export | No | No | Yes (Elite) | Yes | Yes |
| Learning Insights | No | No | No | Yes | Yes |
| Milestone Badge Style | Basic | Gradient | Sparkle | Holographic | Holographic |
| Card Haptics | Basic | Enhanced | Rich | Premium | Premium |
| Dashboard Widgets | Core + Time + Carousel | Core + Soundscape + Offline | Core + Soundscape + Offline | Core + Soundscape + Offline + Badge | All |
| Post-Session Nudge | Every 3rd session | No | No | No | No |

---

## Appendix B: Story Dependency Graph

```
Epic 1 (Tier Persistence)
  └→ Epic 19 (Feature Flags) ← Foundation for ALL other epics
      ├→ Epic 2 (Soundscapes)
      ├→ Epic 3 (Language Pairs)
      ├→ Epic 4 (Practice Time)
      ├→ Epic 5 (Breathing Orbs)
      ├→ Epic 6 (Quantum Flow)
      ├→ Epic 7 (Nebula Drift)
      ├→ Epic 8 (Offline Mode)
      ├→ Epic 11 (Settings Gating)
      ├→ Epic 13 (Game Session)
      └→ Epic 14 (Journey Stats)

Epic 10 (Trial) depends on Epic 1
Epic 9 (Upgrade Prompts) depends on Epic 19
Epic 12 (Dashboard) depends on Epics 2, 4, 6, 7
Epic 17 (Animations) depends on Epic 1
Epic 18 (Data & Analytics) depends on Epic 14
Epic 20 (Edge Cases) depends on Epic 1, 19
Epic 21 (Onboarding) depends on Epic 1
Epic 22 (Content Personalization) depends on Epic 3
Epic 23 (Social & Community) depends on Epic 1
Epic 24 (Tier Transitions) depends on Epic 17
```

---

## Appendix C: Implementation Priority

### Phase 1 — Foundation (Must-Have) ✅
1. Epic 1: Tier Selection & Persistence
2. Epic 19: Feature Flag Infrastructure
3. Epic 20: Edge Cases & Error Handling

### Phase 2 — Core Gating (Must-Have) ✅
4. Epic 2: Soundscape Gating
5. Epic 3: Language Pair Gating
6. Epic 4: Practice Time Gating
7. Epic 5: Breathing Orbs Gating

### Phase 3 — Premium Visual Gating (Should-Have) ✅
8. Epic 6: Quantum Flow Gating
9. Epic 7: Nebula Drift Gating
10. Epic 8: Offline Mode Gating

### Phase 4 — Engagement & Upsell (Should-Have) ✅
11. Epic 9: Upgrade Prompts
12. Epic 10: Royal Trial Lifecycle
13. Epic 12: Dashboard Feature Visibility

### Phase 5 — Deep Integration (Should-Have) ✅
14. Epic 11: Settings & Appearance Gating
15. Epic 13: Game Session Feature Integration
16. Epic 14: Journey / Progress View Gating

### Phase 6 — Animation & Data (Should-Have) ✅
17. Epic 17: Tier-Specific Animations & Polish
18. Epic 18: Data & Analytics by Tier

### Phase 7 — Future Expansion
19. Epic 21: Onboarding & First-Run Tier Education ✅
20. Epic 22: Content Personalization by Tier ✅
21. Epic 23: Social & Community Gating
22. Epic 24: Tier Transition Animations & Micro-interactions

---

## Epic 21: Onboarding & First-Run Tier Education ✅ COMPLETED

### Story 21.1 — First Launch Tier Introduction Flow ✅

**As a** new user launching the app for the first time,  
**I want** a brief introduction to the available tiers,  
**So that** I understand the value proposition before I start learning.

**Acceptance Criteria:**
- After the standard onboarding flow, show a 3-screen tier introduction.
- Screen 1: "Learn for Free" — highlights Free tier features with demo animations.
- Screen 2: "Go Further" — highlights Pro + Elite with feature previews.
- Screen 3: "Try Royal for Free" — highlights the 14-day trial with CTA.
- User can skip the entire flow via "Skip" button.
- Flow only shows once (first launch).

**Subtasks:**
- [x] 21.1.1 — Create `TierOnboardingFlow` view with 3 `TabView` pages.
- [x] 21.1.2 — Screen 1: animated demo of flashcard game, "All 3 game modes" bullet, "3 language pairs" bullet.
- [x] 21.1.3 — Screen 2: side-by-side Pro/Elite comparison cards with key differentiators.
- [x] 21.1.4 — Screen 3: Royal Trial CTA with countdown badge, confetti preview, "Start Free Trial" button.
- [x] 21.1.5 — "Start Free Trial" → activate trial and dismiss flow.
- [x] 21.1.6 — "Continue with Free" → set tier to free and dismiss flow.
- [x] 21.1.7 — "Skip" → set tier to free, skip straight to dashboard.
- [x] 21.1.8 — Persist `hasSeenTierOnboarding: Bool` to `UserDefaults`.
- [x] 21.1.9 — Page indicator dots at bottom with tier gradient colors.
- [x] 21.1.10 — Add unit test: flow shown on first launch, not shown on subsequent launches.

---

### Story 21.2 — Contextual Feature Tooltips for New Users ✅

**As a** new user exploring the app after onboarding,  
**I want** contextual tooltips pointing out premium features as I encounter them,  
**So that** I gradually learn what's available without information overload.

**Acceptance Criteria:**
- On first visit to each major section, show a one-time tooltip.
- Tooltips: "Soundscapes let you learn with ambient music 🎵" (in Sound settings), "Breathing Orbs add mesmerizing visual backgrounds" (in Appearance), "Track your daily practice time here" (on dashboard).
- Each tooltip shows once per feature (tracked via `UserDefaults` set).
- Tooltips have the minimum tier badge if the feature is locked.
- Tooltips dismiss on tap anywhere or after 5 seconds.

**Subtasks:**
- [x] 21.2.1 — Create `FeatureTooltip` view: arrow-pointed bubble with text and optional tier badge.
- [x] 21.2.2 — Create `TooltipManager`: tracks shown tooltips in `UserDefaults` set.
- [x] 21.2.3 — `TooltipManager.shouldShow(for key:) -> Bool` and `markShown(for key:)`.
- [x] 21.2.4 — Define tooltip content and positions for: soundscapes, breathing orbs, practice time, offline mode.
- [x] 21.2.5 — Auto-dismiss timer: 5 seconds with fade animation.
- [x] 21.2.6 — Tap-to-dismiss on background.
- [x] 21.2.7 — Position tooltip using `GeometryReader` anchored to target view.
- [x] 21.2.8 — Add unit test: tooltip shown once, not shown again.

---

### Story 21.3 — "What's Included" Quick Reference ✅

**As a** user on any tier,  
**I want** a quick-access reference of what my tier includes,  
**So that** I don't have to navigate to the full Membership page to check.

**Acceptance Criteria:**
- Profile page has a "My Plan" section showing tier name, icon, and top 3 features.
- Tapping "See all features" expands an inline list of all enabled features.
- Each feature shows enabled (✓) or locked (🔒) status.
- "Upgrade" link at the bottom navigates to `MembershipView`.
- Section uses the current tier's gradient for styling.

**Subtasks:**
- [x] 21.3.1 — Create `MyPlanCard` view for Profile page with tier icon, name, and mini feature list.
- [x] 21.3.2 — Top 3 features: selected from enabled features based on perceived value.
- [x] 21.3.3 — "See all features" toggle expands full feature list with enabled/locked indicators.
- [x] 21.3.4 — Full list generated from `TierManager.allFeatures() -> [(feature: PremiumFeature, enabled: Bool)]`.
- [x] 21.3.5 — "Upgrade" link: styled as text link, not button; navigates to `MembershipView`.
- [x] 21.3.6 — Card background uses tier gradient at 10% opacity.
- [x] 21.3.7 — Add expand/collapse animation with spring.

---

## Epic 22: Content Personalization by Tier ✅ COMPLETED

### Story 22.1 — Flashcard Deck Size by Tier

**As a** Pro+ user,  
**I want** access to larger flashcard decks per language pair,  
**So that** I can learn more vocabulary and progress faster.

**Acceptance Criteria:**
- Free tier: 50 flashcards per language pair.
- Pro tier: 75 flashcards per language pair.
- Elite tier: 100 flashcards per language pair.
- Royal / Trial: All available flashcards (no limit).
- Locked cards are not shown in the deck (not shown with lock overlay — they simply don't appear).
- ContentLoader respects the tier limit when loading decks.

**Subtasks:**
- [x] 22.1.1 — Add `TierManager.flashcardLimit` computed property + `static flashcardLimit(for:)` method.
- [x] 22.1.2 — Limits: free→50, pro→75, elite→100, royal/trial→Int.max (unlimited).
- [x] 22.1.3 — In `FlashCardsView.loadContent()`, apply `.prefix(limit)` to loaded array (view-layer filtering preserves ContentLoader cache).
- [x] 22.1.4 — Flashcard decks sorted by `difficultyLevel.numericLevel` before applying limit (easiest first for Free users).
- [x] 22.1.5 — CategoriesView shows effective item count `min(cat.items.count, flashcardLimit)` per category.
- [x] 22.1.6 — On tier upgrade: @Observable TierManager triggers SwiftUI re-render, reloading decks reactively.
- [x] 22.1.7 — On tier downgrade: same reactive re-render trims deck on next view appearance.
- [x] 22.1.8 — Add unit tests: flashcard limits per tier (free→50, pro→75, elite→100, royal→Int.max, trial→Int.max).
- [x] 22.1.9 — Add unit test: royal tier loads all cards (Int.max limit).

---

### Story 22.2 — Grammar Exercise Complexity by Tier

**As a** Pro+ user,  
**I want** access to more complex grammar exercises,  
**So that** I can advance beyond basics.

**Acceptance Criteria:**
- Free tier: beginner-level grammar only (difficulty 1-2).
- Pro tier: beginner + intermediate (difficulty 1-4).
- Elite tier: all difficulty levels (1-6).
- Royal / Trial: all difficulty levels + bonus challenge sets.
- Locked difficulties show "Available on [tier]" in the difficulty selector.

**Subtasks:**
- [x] 22.2.1 — Add `TierManager.maxDifficultyLevel(for: .grammar)` (free→1/beginner, pro→2/intermediate, elite+→3/advanced). Uses Difficulty enum's 3 levels.
- [ ] 22.2.2 — Add `TierManager.hasBonusChallenges: Bool` (royal/trial only) — deferred, no bonus content exists yet.
- [x] 22.2.3 — In CategoriesView, `isCategoryAccessible()` gates categories by difficulty vs tier limit.
- [x] 22.2.4 — CategoriesView shows all categories; locked ones display dimmed card with lock overlay.
- [x] 22.2.5 — Locked category shows tier gradient lock icon, tier upgrade pill, and alert with "Upgrade to [tier]" on tap.
- [ ] 22.2.6 — Bonus challenges: deferred, requires bonus content JSON files.
- [ ] 22.2.7 — On upgrade: NEW badge animation — deferred for future polish pass.
- [x] 22.2.8 — Add unit tests: grammar difficulty per tier + category accessibility tests.

### Story 22.3 — Wordbuilder Exercise Complexity by Tier
**Acceptance Criteria:**
- [x] Same tier-based difficulty gating as Story 22.2, applied to `.wordBuilder` game type.
- [x] `TierManager.maxDifficultyLevel(for: .wordBuilder)` mirrors grammar gating (free→1, pro→2, elite+→3).
- [x] CategoriesView handles wordBuilder categories with same locked overlay UX.
- [x] Unit tests cover wordBuilder difficulty limits per tier.

---

## Epic 23: Social & Community Gating

### Story 23.1 — Tier Badge on Shareable Achievement Cards

**As a** user sharing an achievement,  
**I want** my tier badge displayed on the shareable card,  
**So that** people see my plan level and the card looks premium.

**Acceptance Criteria:**
- Shareable achievement cards include a small tier badge (icon + tier name) in the corner.
- Free tier: no badge (card appears tier-agnostic).
- Pro+: badge with tier gradient, icon, and name.
- Card generated as a UIImage via `UIGraphicsImageRenderer`.
- Badge scales with card size (always proportional).

**Subtasks:**
- [ ] 23.1.1 — Create `ShareableCardRenderer` that composites achievement data + tier badge.
- [ ] 23.1.2 — If tier is free: skip badge rendering.
- [ ] 23.1.3 — Badge placement: bottom-right corner with 8pt padding.
- [ ] 23.1.4 — Badge includes: tier icon (SF Symbol rendered to image) + tier name text + gradient background capsule.
- [ ] 23.1.5 — Use `UIGraphicsImageRenderer` with 3× scale for Retina quality.
- [ ] 23.1.6 — Share via `UIActivityViewController`.
- [ ] 23.1.7 — Add snapshot test for each tier's card rendering.

---

---

## Epic 24: Tier Transition Animations & Micro-interactions

### Story 24.1 — Feature Unlock Ripple Effect

**As a** user upgrading tiers,  
**I want** to see newly unlocked features "light up" across the app,  
**So that** the upgrade feels tangible and exciting.

**Acceptance Criteria:**
- On tier upgrade: a ripple animation emanates from the tier badge in the profile.
- As the ripple passes over locked features (in settings, dashboard), they transition from locked to unlocked.
- Each unlock has a small "sparkle" particle burst.
- The entire sequence takes 3 seconds with staggered timing.
- Only features that changed state (locked→unlocked) animate. Already-unlocked features don't re-animate.

**Subtasks:**
- [ ] 24.1.1 — Create `UnlockRippleEffect` view modifier: expanding ring animation from anchor point.
- [ ] 24.1.2 — Calculate which features changed state: compare old tier's features vs new tier's features.
- [ ] 24.1.3 — For each newly unlocked feature: delay = distance from ripple origin × 0.002 seconds.
- [ ] 24.1.4 — Create `SparkleUnlock` particle effect: 12 particles bursting outward, fading over 0.5s.
- [ ] 24.1.5 — Coordinate timing using `DispatchQueue.main.asyncAfter` with calculated delays.
- [ ] 24.1.6 — Haptic accompaniment: `.impact(.light)` for each unlock.
- [ ] 24.1.7 — Only trigger when `newTierRank > oldTierRank` (not on lateral moves).
- [ ] 24.1.8 — Add integration test: upgrade from Free to Pro → verify exactly which features unlock.

---

### Story 24.2 — Feature Lock Dimming Effect on Downgrade

**As a** user downgrading tiers,  
**I want** features that become locked to dim gracefully,  
**So that** the transition is smooth and not jarring.

**Acceptance Criteria:**
- On downgrade: features losing access dim from full color to grayscale + lock overlay.
- Dimming takes 1 second per feature with 0.1s stagger.
- No ripple effect on downgrade (somber, not celebratory).
- After dimming completes: show a single summary toast of what changed.

**Subtasks:**
- [ ] 24.2.1 — Calculate features losing access: old tier's features minus new tier's features.
- [ ] 24.2.2 — Apply `.saturation(0.2)` animation over 1 second to each losing feature's UI.
- [ ] 24.2.3 — Fade in lock overlay after desaturation completes.
- [ ] 24.2.4 — Stagger: each feature delays by 0.1s × index in the losing list.
- [ ] 24.2.5 — After all dimming: show summary toast: "X features adjusted to match your [tier] plan".
- [ ] 24.2.6 — No haptic feedback on individual dims (only one gentle haptic at the end).
- [ ] 24.2.7 — Add integration test: downgrade from Royal to Free → verify all features dim.

---

### Story 24.3 — Tier Card Selection Micro-interactions

**As a** user browsing tier cards on the Membership page,  
**I want** rich micro-interactions on the tier cards,  
**So that** the selection experience feels premium and tactile.

**Acceptance Criteria:**
- Hovering/pressing a tier card: subtle scale (0.98) + shadow depth increase.
- Selecting a tier: checkmark icon pops in with spring, border animates to tier gradient, previous card's checkmark pops out.
- Selected card gently pulses its background gradient (subtle, not distracting).
- Scroll-triggered parallax: tier icons shift slightly as user scrolls.
- All animations use spring curves with 0.3s response time.

**Subtasks:**
- [ ] 24.3.1 — Add press state: `.scaleEffect(isPressed ? 0.98 : 1.0)` with `.shadow` depth change.
- [ ] 24.3.2 — Checkmark pop-in: `.transition(.scale.combined(with: .opacity))` with spring.
- [ ] 24.3.3 — Border animation: use `matchedGeometryEffect` for the selection indicator or animate stroke.
- [ ] 24.3.4 — Selected card gradient pulse: `.opacity` oscillating 0.85↔1.0, 3-second loop.
- [ ] 24.3.5 — Scroll parallax on tier icon: `GeometryReader` + `.offset(y: scrollProgress * 8)`.
- [ ] 24.3.6 — Deselection animation: reverse of selection, 0.2s.
- [ ] 24.3.7 — Add snapshot tests for pressed, selected, and default states.

---

## Appendix D: Glossary

| Term | Definition |
|---|---|
| **Tier** | A membership level (Free, Pro, Elite, Royal, Trial) that determines feature access. |
| **Gating** | The logic that enables or disables features based on the user's current tier. |
| **Soft Gate** | A feature boundary that shows a preview and upgrade prompt rather than hard-blocking the user. |
| **Hard Gate** | A feature that is completely inaccessible (e.g., can't start a game after practice time expires). |
| **Downgrade** | Moving from a higher tier to a lower one (e.g., Royal → Free). |
| **Upgrade** | Moving from a lower tier to a higher one (e.g., Free → Pro). |
| **Dormant Settings** | User preferences saved during a higher tier that can be restored on re-upgrade. |
| **Feature Flag** | A boolean or enum value in `TierManager` that controls whether a feature is accessible. |
| **Ripple Effect** | The visual propagation animation that activates newly unlocked features on upgrade. |
| **Tier Rank** | A numeric ordering of tiers for comparison: Free(0) < Pro(1) < Elite(2) < Royal(3). Trial = Royal rank. |
| **Practice Time** | The cumulative active time spent in game sessions, tracked per calendar day. |
| **Streak Freeze** | A consumable that prevents a streak from breaking on a missed practice day. |
| **Soundscape** | An ambient audio track that plays during learning sessions for immersive atmosphere. |
| **Breathing Orbs** | An animated visual effect rendered with Metal shaders as a background customization. |
| **Quantum Flow** | A set of Metal shader-based animated background scenes with dynamic particles. |
| **Nebula Drift** | A set of ambient nebula-themed background presets with slow-moving cosmic visuals. |

---

## Appendix E: Testing Strategy

### Unit Testing Coverage

Each Epic should have unit tests covering:
1. **Tier → Feature mapping**: Verify correct access for every tier × feature combination.
2. **Boundary conditions**: Test at exact limits (e.g., 30-minute mark, 14-day trial expiry).
3. **State transitions**: Upgrade, downgrade, and lateral tier changes.
4. **Edge cases**: Corrupt data, missing data, concurrent changes.

### Integration Testing

Key integration test scenarios:
1. **Full lifecycle**: New user → trial → trial expires → free → upgrade to Pro → downgrade to Free.
2. **Feature cascade**: Change tier → verify all features update in correct order.
3. **Persistence**: Change tier → kill app → relaunch → verify tier and all feature states.
4. **Multi-device**: Change tier on device A → verify sync to device B.

### Snapshot Testing

All visual states should have snapshot tests:
1. **Each feature in locked/unlocked state** × light/dark mode.
2. **Each tier card** in selected/unselected/disabled state.
3. **Upgrade prompts** for each feature.
4. **Session results** at each tier level.
5. **Dashboard layout** at each tier level.

### Accessibility Testing

1. VoiceOver navigation through all locked features.
2. Dynamic Type rendering at default, XXXL, and AX5 sizes.
3. Reduced Motion: verify all gating animations respect `UIAccessibility.isReduceMotionEnabled`.
4. Color Blind: verify tier color coding is distinguishable (add pattern/shape differentiation).

---

*End of Document — Total: 24 Epics, 52 Stories, 356 Subtasks*
