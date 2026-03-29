# PostHog Analytics Integration — LumenLingo iOS

> **Document Owner:** Product  
> **Last Updated:** 2026-03-25  
> **Status:** Draft — Ready for Engineering Refinement  
> **Priority Framework:** MoSCoW (Must / Should / Could / Won't)  
> **Estimation Unit:** Story Points (Fibonacci: 1, 2, 3, 5, 8, 13)  

---

## Table of Contents

1. [Vision & Goals](#vision--goals)  
2. [Epic 1 — SDK Foundation & Core Infrastructure](#epic-1--sdk-foundation--core-infrastructure)  
3. [Epic 2 — Session & Screen Analytics](#epic-2--session--screen-analytics)  
4. [Epic 3 — Learning & Game Event Taxonomy](#epic-3--learning--game-event-taxonomy)  
5. [Epic 4 — Subscription & Revenue Analytics](#epic-4--subscription--revenue-analytics)  
6. [Epic 5 — Feature Flag Migration to PostHog](#epic-5--feature-flag-migration-to-posthog)  
7. [Epic 6 — User Identification & Profile Enrichment](#epic-6--user-identification--profile-enrichment)  
8. [Epic 7 — Funnel & Retention Instrumentation](#epic-7--funnel--retention-instrumentation)  
9. [Epic 8 — Performance & Error Telemetry](#epic-8--performance--error-telemetry)  
10. [Epic 9 — Privacy, Consent & Compliance](#epic-9--privacy-consent--compliance)  
11. [Epic 10 — A/B Testing & Experimentation Framework](#epic-10--ab-testing--experimentation-framework)  
12. [Epic 11 — Dashboards, Alerts & Operational Readiness](#epic-11--dashboards-alerts--operational-readiness)  
13. [Appendix A — Event Naming Conventions](#appendix-a--event-naming-conventions)  
14. [Appendix B — Property Taxonomy](#appendix-b--property-taxonomy)  

---

## Vision & Goals

LumenLingo is a premium language-learning iOS app with tier-gated features (Free → Pro → Elite → Royal), three game modes (Flash Cards, Grammar, Word Builder), ambient soundscapes, and cosmic visual themes. We currently lack a unified analytics backbone — events are scattered across `Log.info()` calls, `AuthAnalytics` fire-and-forget stubs, and RevenueCat attribution.

**PostHog will become the single source of truth for:**

- User behaviour across all screens and game modes  
- Subscription funnel health (trial → free → paid conversion)  
- Feature flag management replacing the lightweight `FeatureFlagService`  
- A/B experimentation on onboarding, paywall, and learning flows  
- Performance telemetry (frame drops, load times, audio latency)  
- Privacy-first analytics with ATT-aware consent gating  

**Success Metrics (90-day targets):**

| Metric | Current | Target |
|--------|---------|--------|
| Events tracked per session | ~0 (stub only) | 25–40 meaningful events |
| Funnel visibility (onboarding → first game) | None | Full 5-step funnel |
| Trial → Paid conversion tracking | RevenueCat only | PostHog + RevenueCat correlated |
| Feature flag evaluation latency | N/A | < 50 ms p99 |
| Time to first dashboard insight | ∞ | < 5 minutes after deploy |

---

## Epic 1 — SDK Foundation & Core Infrastructure

> **Goal:** Establish PostHog iOS SDK as a first-class dependency, wire it into the app lifecycle, and create the shared analytics service layer that all subsequent epics depend on.  
> **Priority:** Must Have  
> **Epic Points:** 21  

---

### Story 1.1 — Add PostHog iOS SDK via Swift Package Manager

**As a** developer,  
**I want** PostHog iOS SDK added as an SPM dependency in `project.yml`,  
**So that** all targets can import PostHog and the dependency resolves cleanly across all 10 build configurations.

**Priority:** Must Have  
**Points:** 3  

**Acceptance Criteria:**

- [ ] `project.yml` includes a new package entry: `posthog-ios` pointing to `github.com/PostHog/posthog-ios` with minimum version `≥ 3.0.0`
- [ ] The `PostHogSDK` product is listed under the main app target's dependencies
- [ ] Running `xcodegen generate` produces an `.xcodeproj` that resolves all SPM packages without error
- [ ] `xcodebuild build` succeeds for all 10 configurations (Dev-Debug through Prod-Release) with `CODE_SIGNING_ALLOWED=NO`
- [ ] `import PostHog` compiles without error in a new empty Swift file added to the main target
- [ ] The SDK is NOT linked to the test targets (`LumenLingoTests`, `LumenLingoUITests`) — tests will use the mock layer (Story 1.4)
- [ ] No existing SPM dependencies (RevenueCat, ClerkKit) are broken by the addition
- [ ] The PostHog SDK minimum deployment target is compatible with the app's iOS minimum (verify in `project.yml` `deploymentTarget`)

**Technical Notes:**

```yaml
# project.yml addition
packages:
  posthog-ios:
    url: https://github.com/PostHog/posthog-ios
    from: "3.0.0"

targets:
  LumenLingo:
    dependencies:
      - package: posthog-ios
        product: PostHogSDK
```

**Definition of Done:** `xcodebuild build` green on CI for Dev-Debug + Prod-Release configurations.

---

### Story 1.2 — Create AnalyticsServiceProtocol Abstraction

**As a** developer,  
**I want** a protocol-based analytics abstraction layer,  
**So that** all event tracking flows through a single seam that can be mocked in tests, swapped for other providers, and extended without touching call sites.

**Priority:** Must Have  
**Points:** 5  

**Acceptance Criteria:**

- [ ] A new file `Services/AnalyticsServiceProtocol.swift` defines:
  ```swift
  protocol AnalyticsServiceProtocol: Sendable {
      func capture(event: String, properties: [String: Any]?)
      func screen(name: String, properties: [String: Any]?)
      func identify(distinctId: String, properties: [String: Any]?)
      func alias(alias: String, distinctId: String)
      func reset()
      func flush()
      func register(superProperties: [String: Any])
      func unregister(superProperty: String)
      func isFeatureEnabled(_ key: String) -> Bool
      func getFeatureFlag(_ key: String) -> Any?
      func reloadFeatureFlags()
      func optIn()
      func optOut()
      var isOptedOut: Bool { get }
  }
  ```
- [ ] The protocol is `Sendable`-conforming to support Swift 6 concurrency
- [ ] Every method has a clear doc comment explaining its contract and when to use it
- [ ] A convenience extension provides a default `capture(event:)` overload where `properties` defaults to `nil`
- [ ] A convenience extension provides `capture(event:, properties:)` that accepts a typed `AnalyticsEvent` enum (Story 1.3) instead of raw strings
- [ ] The protocol does NOT import PostHog — it is provider-agnostic
- [ ] The file compiles without warnings under strict concurrency checking

**Definition of Done:** Protocol file exists, compiles, and has zero dependencies on any analytics SDK.

---

### Story 1.3 — Define AnalyticsEvent Taxonomy Enum

**As a** developer,  
**I want** a strongly-typed enum of all analytics events,  
**So that** event names are compile-time safe, discoverable via autocomplete, and impossible to typo.

**Priority:** Must Have  
**Points:** 5  

**Acceptance Criteria:**

- [ ] A new file `Models/AnalyticsEvent.swift` defines an `AnalyticsEvent` enum with `String` raw values
- [ ] Event names follow the convention `object_action` in `snake_case` (e.g., `game_started`, `paywall_viewed`, `card_flipped`)
- [ ] The enum is organised into nested namespaces via static properties or extensions grouped by domain:
  - **App Lifecycle:** `app_opened`, `app_backgrounded`, `app_foregrounded`, `app_terminated`
  - **Auth:** `auth_started`, `auth_succeeded`, `auth_failed`, `auth_skipped`, `auth_signed_out`
  - **Onboarding:** `onboarding_started`, `onboarding_step_completed`, `onboarding_completed`, `onboarding_skipped`
  - **Navigation:** `tab_switched`, `screen_viewed`
  - **Games:** `game_started`, `game_completed`, `game_abandoned`, `card_flipped`, `card_answered`, `grammar_answered`, `word_submitted`
  - **Practice:** `practice_session_started`, `practice_session_ended`, `practice_limit_warning`, `practice_limit_reached`
  - **Subscription:** `paywall_viewed`, `paywall_dismissed`, `purchase_started`, `purchase_completed`, `purchase_failed`, `purchase_restored`, `trial_started`, `trial_expired`, `subscription_cancelled`
  - **Feature Flags:** `feature_flag_evaluated`, `feature_flag_reload`
  - **Settings:** `setting_changed`, `theme_toggled`, `soundscape_selected`, `language_pair_changed`
  - **Performance:** `frame_drop_detected`, `audio_latency_spike`, `content_load_slow`
  - **Error:** `error_occurred`, `crash_detected`
- [ ] Each event case has a computed `eventName: String` property returning the snake_case raw value
- [ ] Each event case has a computed `requiredProperties: Set<String>` that documents which properties MUST accompany the event (enforced at debug-time only — see Story 1.5)
- [ ] The enum compiles without warnings and is exhaustive — a `// MARK:` comment separates each domain group
- [ ] A unit test asserts that no two enum cases share the same raw value (uniqueness guarantee)

**Definition of Done:** Enum exists, compiles, uniqueness test passes.

---

### Story 1.4 — Implement MockAnalyticsService for Testing

**As a** developer,  
**I want** a mock implementation of `AnalyticsServiceProtocol`,  
**So that** unit tests can assert on captured events without requiring a network connection or PostHog API key.

**Priority:** Must Have  
**Points:** 3  

**Acceptance Criteria:**

- [ ] A new file `Services/Mocks/MockAnalyticsService.swift` implements `AnalyticsServiceProtocol`
- [ ] The mock stores all captured events in a `capturedEvents: [(event: String, properties: [String: Any]?)]` array
- [ ] The mock stores all screen calls in a `capturedScreens: [(name: String, properties: [String: Any]?)]` array
- [ ] The mock stores the last `identify` call's `distinctId` and `properties`
- [ ] `isFeatureEnabled(_:)` returns values from an injectable `featureFlagOverrides: [String: Bool]` dictionary, defaulting to `false`
- [ ] `getFeatureFlag(_:)` returns values from an injectable `featureFlagValues: [String: Any]` dictionary
- [ ] `isOptedOut` is a settable `var` for consent-flow testing
- [ ] A convenience method `reset()` clears all captured data for test isolation
- [ ] A convenience method `lastEvent(named:) -> (event: String, properties: [String: Any]?)?` returns the most recent event matching a given name
- [ ] A convenience method `eventCount(named:) -> Int` returns how many times a specific event was captured
- [ ] The mock is `@unchecked Sendable` with internal serial-queue synchronisation for thread-safe test assertions
- [ ] The mock is NOT included in the main app target — only in `LumenLingoTests`

**Definition of Done:** Mock compiles in test target; a trivial test capturing one event and asserting passes.

---

### Story 1.5 — Implement PostHogAnalyticsService (Production)

**As a** developer,  
**I want** a production implementation of `AnalyticsServiceProtocol` backed by the PostHog iOS SDK,  
**So that** all analytics events flow to our PostHog instance in production builds.

**Priority:** Must Have  
**Points:** 5  

**Acceptance Criteria:**

- [ ] A new file `Services/PostHogAnalyticsService.swift` implements `AnalyticsServiceProtocol`
- [ ] The service is an `@Observable` class following the same injection pattern as `TierManager` and `ThemeManager`
- [ ] Initialisation requires an `apiKey: String` and `host: String` — both sourced from build-configuration-specific `Config/` files (not hardcoded)
- [ ] PostHog SDK is configured with:
  - `flushAt: 20` (batch events)
  - `flushIntervalSeconds: 30`
  - `captureApplicationLifecycleEvents: true`
  - `captureScreenViews: false` (we handle screen tracking manually for richer context — Story 2.2)
  - `sendFeatureFlagEvent: true`
  - `preloadFeatureFlags: true`
- [ ] `capture(event:properties:)` delegates to `PostHogSDK.shared.capture(event, properties:)` after merging any registered super-properties
- [ ] `screen(name:properties:)` delegates to `PostHogSDK.shared.screen(name, properties:)`
- [ ] `identify(distinctId:properties:)` delegates to `PostHogSDK.shared.identify(distinctId, userProperties:)`
- [ ] `reset()` calls `PostHogSDK.shared.reset()` (used on sign-out)
- [ ] `flush()` calls `PostHogSDK.shared.flush()`
- [ ] `isFeatureEnabled(_:)` delegates to `PostHogSDK.shared.isFeatureEnabled(_:)`
- [ ] `getFeatureFlag(_:)` delegates to `PostHogSDK.shared.getFeatureFlag(_:)`
- [ ] `optIn()` / `optOut()` / `isOptedOut` delegate to PostHog's opt-in/opt-out API
- [ ] In **DEBUG** builds only: a runtime assertion fires if a captured event's properties are missing any keys listed in `AnalyticsEvent.requiredProperties` — this catches instrumentation bugs during development without crashing production
- [ ] The service gracefully handles the case where PostHog SDK initialisation fails (logs error, all methods become no-ops)
- [ ] No API key or host string appears in source control — values are injected from `xcconfig` or environment at build time

**Technical Notes:**

```swift
// Config/Dev.xcconfig
POSTHOG_API_KEY = phc_dev_XXXX
POSTHOG_HOST = https://us.i.posthog.com

// Config/Prod.xcconfig  
POSTHOG_API_KEY = phc_prod_XXXX
POSTHOG_HOST = https://us.i.posthog.com
```

**Definition of Done:** PostHog events appear in the PostHog project dashboard when running a Dev-Debug build on simulator.

---

### Story 1.6 — Wire AnalyticsService into App Root & Environment

**As a** developer,  
**I want** the analytics service injected at the app root via SwiftUI environment,  
**So that** every view and child service can access analytics without manual dependency threading.

**Priority:** Must Have  
**Points:** 3  

**Acceptance Criteria:**

- [ ] `LumenLingoApp.swift` creates either `PostHogAnalyticsService` (production) or `MockAnalyticsService` (when `LL_MOCK_ANALYTICS=1` environment variable is set)
- [ ] The chosen service is injected via `.environment(analyticsService)` at the root `WindowGroup`, following the identical pattern used by `TierManager` and `ThemeManager`
- [ ] A new `EnvironmentKey` conformance is added so views access the service via `@Environment(AnalyticsServiceProtocol.self)`
- [ ] The PostHog API key is read from `Bundle.main.infoDictionary` (populated from xcconfig via Info.plist) — never hardcoded
- [ ] On app launch, the service calls `PostHogSDK.shared.capture("app_opened")` with properties: `app_version`, `os_version`, `device_model`, `build_configuration`, `locale`
- [ ] On `scenePhase` change to `.background`, the service calls `flush()` to ensure events are dispatched before suspension
- [ ] On `scenePhase` change to `.active`, the service calls `reloadFeatureFlags()` to pick up server-side changes
- [ ] The injection order in `LumenLingoApp` body is: ThemeManager → TierManager → AnalyticsService (analytics may reference tier for super-properties)
- [ ] A `#if DEBUG` block prints "Analytics: PostHog initialised (host: X)" or "Analytics: Mock mode" to console on launch

**Definition of Done:** `@Environment(AnalyticsServiceProtocol.self)` resolves in any child view; events flow to PostHog from simulator.

---

### Story 1.7 — Register Super-Properties (Global Context)

**As a** product analyst,  
**I want** every analytics event to automatically carry a set of standard properties,  
**So that** I can segment any report by tier, language pair, theme, or device without requiring each call site to pass context manually.

**Priority:** Must Have  
**Points:** 3  

**Acceptance Criteria:**

- [ ] On initialisation and on every relevant state change, the analytics service registers these super-properties:
  | Property | Source | Example |
  |----------|--------|---------|
  | `membership_tier` | `TierManager.currentTier.rawValue` | `"pro"` |
  | `active_language_pair` | Current `LanguagePair.id` | `"en_es"` |
  | `theme_mode` | `ThemeManager.isDarkMode` | `true` |
  | `is_trial_active` | `TierManager.isTrial` | `false` |
  | `days_since_install` | Computed from first-launch date in UserDefaults | `14` |
  | `total_xp` | `UserProfile.xp` | `2450` |
  | `current_streak` | `UserProfile.currentStreak` | `7` |
  | `app_version` | `Bundle.main` short version | `"1.2.0"` |
  | `build_number` | `Bundle.main` build | `"45"` |
  | `os_version` | `ProcessInfo.processInfo.operatingSystemVersionString` | `"18.4"` |
  | `device_model` | `UIDevice` model identifier | `"iPhone17,2"` |
  | `locale` | `Locale.current.identifier` | `"en_GB"` |
  | `is_offline` | `NetworkMonitor.isConnected` inverted | `false` |
- [ ] When `TierManager.currentTier` changes (observed via `@Observable`), the `membership_tier` and `is_trial_active` super-properties are updated within the same run-loop tick
- [ ] When the active language pair changes, the `active_language_pair` super-property is updated
- [ ] Super-properties are merged into every `capture()` and `screen()` call — they do NOT override explicitly-passed properties (explicit wins)
- [ ] A unit test using `MockAnalyticsService` verifies that super-properties appear on captured events

**Definition of Done:** Every event in PostHog's event explorer shows tier, language pair, and device context without manual enrichment.

---

## Epic 2 — Session & Screen Analytics

> **Goal:** Instrument automatic screen tracking, session lifecycle, and navigation patterns so we can build funnels, understand user journeys, and identify drop-off points.  
> **Priority:** Must Have  
> **Epic Points:** 16  

---

### Story 2.1 — App Lifecycle Event Tracking

**As a** product analyst,  
**I want** to know exactly when users open, background, foreground, and terminate the app,  
**So that** I can calculate true session duration, DAU/WAU/MAU, and session frequency.

**Priority:** Must Have  
**Points:** 2  

**Acceptance Criteria:**

- [ ] The following events fire automatically (no manual triggers needed by developers):
  | Event | Trigger | Key Properties |
  |-------|---------|---------------|
  | `app_opened` | `scenePhase` → `.active` (cold start) | `is_cold_start: true`, `launch_duration_ms` |
  | `app_foregrounded` | `scenePhase` → `.active` (warm return) | `is_cold_start: false`, `background_duration_s` |
  | `app_backgrounded` | `scenePhase` → `.background` | `foreground_duration_s`, `events_in_session` |
  | `app_terminated` | `applicationWillTerminate` notification | `total_session_duration_s` |
- [ ] `launch_duration_ms` measures time from `ProcessInfo.processInfo.systemUptime` at static init to first `app_opened` event
- [ ] `background_duration_s` measures elapsed time between the last `app_backgrounded` and current `app_foregrounded`
- [ ] `foreground_duration_s` measures elapsed time the app was in the active state before backgrounding
- [ ] `events_in_session` counts how many analytics events were captured during this foreground period
- [ ] `flush()` is called immediately after `app_backgrounded` to avoid event loss
- [ ] These events are wired once in the root `LumenLingoApp` using `onChange(of: scenePhase)` — no per-view wiring needed

**Definition of Done:** PostHog shows session-start and session-end events with accurate duration metrics for 3 consecutive app open/close cycles in simulator.

---

### Story 2.2 — Automatic Screen View Tracking

**As a** product analyst,  
**I want** every screen transition automatically captured with rich context,  
**So that** I can see user navigation paths, time-on-screen, and screen-level engagement without engineers remembering to add tracking calls.

**Priority:** Must Have  
**Points:** 5  

**Acceptance Criteria:**

- [ ] A new `AnalyticsScreenModifier` ViewModifier is created that fires a `screen_viewed` event on `.onAppear`
- [ ] The modifier captures:
  | Property | Description | Example |
  |----------|-------------|---------|
  | `screen_name` | The canonical screen identifier | `"dashboard"` |
  | `screen_class` | The SwiftUI view type name | `"DashboardView"` |
  | `previous_screen` | The last screen that was visible | `"journey"` |
  | `tab_name` | Which tab this screen belongs to | `"dashboard"` |
  | `is_modal` | Whether the screen is presented modally | `false` |
  | `navigation_depth` | How deep in the navigation stack | `0` |
- [ ] A convenience View extension `.analyticsScreen(_ name: String, tab: String? = nil, isModal: Bool = false)` wraps the modifier
- [ ] The modifier is applied to ALL top-level screens:
  - `DashboardView` → `"dashboard"`
  - `JourneyView` → `"journey"`
  - `MembershipView` → `"membership"`
  - `ProfileView` → `"profile"`
  - `SettingsView` → `"settings"`
  - `FlashCardsView` → `"flash_cards_game"`
  - `GrammarView` → `"grammar_game"`
  - `WordBuilderView` → `"word_builder_game"`
  - `SignInSheetView` → `"sign_in"` (modal)
  - `PaywallView` → `"paywall"` (modal, with `PaywallContext` as property)
- [ ] `previous_screen` is maintained in a shared `@Observable` `NavigationTracker` service — it updates atomically before each `screen_viewed` event
- [ ] Duplicate `screen_viewed` events for the same screen within 0.5 seconds are debounced (prevents SwiftUI re-render noise)
- [ ] Time-on-screen is NOT calculated on capture — it will be computed server-side as the delta between consecutive `screen_viewed` events

**UX Acceptance Criteria (for the NavigationTracker's debugging overlay — DEBUG builds only):**

- [ ] In DEBUG builds, a semi-transparent pill at the bottom of the screen shows the current `screen_name` and event count — developers should fall in love with this functionality and drool at how effortless debugging screen tracking becomes

**Definition of Done:** All 10+ screens fire `screen_viewed` on navigation; PostHog's "User Paths" visualisation shows a coherent navigation graph.

---

### Story 2.3 — Tab Switch Event Tracking

**As a** product analyst,  
**I want** to know how users navigate between the four main tabs,  
**So that** I can understand engagement patterns and which tabs are underutilised.

**Priority:** Should Have  
**Points:** 2  

**Acceptance Criteria:**

- [ ] A `tab_switched` event fires whenever the user taps a different tab in the bottom navigation
- [ ] Properties include:
  | Property | Example |
  |----------|---------|
  | `from_tab` | `"dashboard"` |
  | `to_tab` | `"membership"` |
  | `time_on_previous_tab_s` | `42.5` |
  | `switch_count_in_session` | `7` |
- [ ] The event does NOT fire on initial tab load (only on user-initiated switches)
- [ ] `time_on_previous_tab_s` is computed as wall-clock time since the previous `tab_switched` or `app_opened` event
- [ ] `switch_count_in_session` resets to 0 on each new foreground session
- [ ] The event is wired in the root `TabView`'s `onChange(of: selectedTab)` — not in individual tab views

**Definition of Done:** PostHog shows tab transition patterns; a bar chart of `to_tab` distribution renders correctly.

---

### Story 2.4 — Deep Link & External Entry Tracking

**As a** product analyst,  
**I want** to track how users arrive at the app via deep links, push notifications, or universal links,  
**So that** I can attribute re-engagement campaigns and measure notification effectiveness.

**Priority:** Should Have  
**Points:** 3  

**Acceptance Criteria:**

- [ ] An `app_opened_from_link` event fires when the app opens via a URL scheme or universal link
- [ ] Properties include:
  | Property | Example |
  |----------|---------|
  | `link_source` | `"push_notification"`, `"universal_link"`, `"url_scheme"` |
  | `link_path` | `"/game/flashcards"` |
  | `campaign_id` | UTM parameter if present | 
  | `utm_source` | `"email"` |
  | `utm_medium` | `"retention_d7"` |
  | `utm_campaign` | `"win_back_lapsed"` |
- [ ] UTM parameters are parsed from the URL query string and forwarded as event properties
- [ ] The event is wired in `LumenLingoApp`'s `onOpenURL` handler
- [ ] If deep link targets a specific game, the subsequent `game_started` event includes `entry_source: "deep_link"`
- [ ] Unknown or malformed deep links fire `app_opened_from_link` with `link_path: "unknown"` and `is_valid: false` — they do NOT crash the app

**Definition of Done:** Opening the app via a test universal link produces a correctly-attributed `app_opened_from_link` event in PostHog.

---

### Story 2.5 — Session Recording Opt-In (Premium Debugging)

**As a** developer,  
**I want** the ability to enable PostHog session replay for specific builds,  
**So that** we can visually debug user issues and understand interaction patterns on real devices.

**Priority:** Could Have  
**Points:** 4  

**Acceptance Criteria:**

- [ ] PostHog session recording is **disabled by default** in all build configurations
- [ ] Session recording can be enabled via a PostHog feature flag `session_recording_enabled` — allowing server-side activation for specific user cohorts
- [ ] When enabled, session recording respects the user's consent status — recording ONLY activates if the user has opted in to analytics (Story 9.2)
- [ ] Sensitive views are automatically masked:
  - `SignInSheetView` (credentials)
  - Payment/subscription details in `MembershipView`
  - Any `TextField` or `SecureField`
  - User profile data (name, email) in `ProfileView`
- [ ] A redaction modifier `.analyticsRedact()` is available for developers to mark additional views as sensitive
- [ ] Session recordings are limited to 5 minutes maximum per session to control data volume
- [ ] The QAPanelView (developer debug panel) shows a "Recording" indicator when session recording is active

**UX Acceptance Criteria:**

- [ ] When session recording activates, a subtle, non-intrusive pulsing dot appears in the status bar area (DEBUG builds only) — users should fall in love with this functionality and drool at how clearly the recording state is communicated without disrupting the cosmic UI aesthetic

**Definition of Done:** A 30-second session recording from a simulator test appears in PostHog's Session Recording tab with sensitive data properly masked.

---

## Epic 3 — Learning & Game Event Taxonomy

> **Goal:** Capture granular learning behaviour across all three game modes (Flash Cards, Grammar, Word Builder) to power learning analytics, difficulty optimisation, and content effectiveness measurement.  
> **Priority:** Must Have  
> **Epic Points:** 26  

---

### Story 3.1 — Flash Cards Game Event Instrumentation

**As a** product analyst,  
**I want** every meaningful interaction in the Flash Cards game captured,  
**So that** I can measure card difficulty, vocabulary retention, and session engagement.

**Priority:** Must Have  
**Points:** 5  

**Acceptance Criteria:**

- [ ] The following events fire at the appropriate moments in `FlashCardsView`:
  | Event | Trigger | Key Properties |
  |-------|---------|---------------|
  | `game_started` | View appears, deck loaded | `game_type: "flash_cards"`, `difficulty`, `language_pair`, `deck_size`, `entry_source` |
  | `card_viewed` | Card becomes visible to user | `card_index`, `word_native`, `word_target`, `category`, `is_new_word` |
  | `card_flipped` | User taps/swipes to reveal answer | `card_index`, `time_to_flip_ms`, `flip_direction` |
  | `card_answered` | User indicates correct/incorrect | `card_index`, `is_correct`, `response_time_ms`, `word_native`, `word_target` |
  | `card_skipped` | User swipes past without answering | `card_index`, `time_on_card_ms` |
  | `game_completed` | All cards in deck exhausted | `cards_total`, `cards_correct`, `cards_incorrect`, `cards_skipped`, `accuracy_pct`, `total_duration_s`, `xp_earned`, `avg_response_time_ms` |
  | `game_abandoned` | User navigates away before completion | `cards_viewed`, `cards_total`, `progress_pct`, `time_in_game_s`, `last_card_index` |
- [ ] `response_time_ms` is measured from card flip to answer submission — NOT from card appearance
- [ ] `time_to_flip_ms` is measured from card appearance to user-initiated flip
- [ ] `is_new_word` is `true` if this is the first time the user has seen this vocabulary item in any session
- [ ] `entry_source` distinguishes: `"dashboard"`, `"deep_link"`, `"session_recommendation"`, `"journey_retry"`
- [ ] `accuracy_pct` is computed as `(cards_correct / (cards_correct + cards_incorrect)) * 100`, excluding skipped cards
- [ ] Events DO NOT fire during the card flip animation — only after the animation completes (prevents duplicate triggers from SwiftUI re-renders)
- [ ] All time measurements use `ContinuousClock` for monotonic accuracy

**Definition of Done:** A complete Flash Cards session produces the full event sequence in PostHog; `game_completed` shows accurate aggregated metrics.

---

### Story 3.2 — Grammar Game Event Instrumentation

**As a** product analyst,  
**I want** every Grammar game interaction captured with performance-mood context,  
**So that** I can correlate difficulty adaptation with user engagement and measure grammar mastery curves.

**Priority:** Must Have  
**Points:** 5  

**Acceptance Criteria:**

- [ ] The following events fire at the appropriate moments in `GrammarView`:
  | Event | Trigger | Key Properties |
  |-------|---------|---------------|
  | `game_started` | View appears, questions loaded | `game_type: "grammar"`, `difficulty`, `language_pair`, `question_count`, `entry_source` |
  | `grammar_question_viewed` | Question presented to user | `question_index`, `question_type`, `grammar_topic`, `options_count` |
  | `grammar_answered` | User selects an answer | `question_index`, `is_correct`, `selected_option`, `correct_option`, `response_time_ms`, `grammar_topic` |
  | `grammar_hint_used` | User requests a hint (if available) | `question_index`, `hints_remaining`, `grammar_topic` |
  | `performance_mood_changed` | Adaptive difficulty adjusts mood | `previous_mood`, `new_mood`, `trigger_accuracy_pct`, `questions_in_window` |
  | `game_completed` | All questions answered | `questions_total`, `questions_correct`, `accuracy_pct`, `total_duration_s`, `xp_earned`, `final_mood`, `hardest_topic` |
  | `game_abandoned` | User exits early | `questions_answered`, `questions_total`, `progress_pct`, `time_in_game_s`, `current_mood` |
- [ ] `performance_mood` values align with the existing mood system: `"warm"`, `"cool"`, `"neutral"`
- [ ] `grammar_topic` captures the specific grammar category being tested (e.g., `"past_tense"`, `"articles"`, `"conjugation"`)
- [ ] `hardest_topic` in `game_completed` is the grammar topic with the lowest accuracy across the session
- [ ] `response_time_ms` starts when answer options become interactable (after any entrance animation) and ends on tap
- [ ] If the Grammar game uses adaptive difficulty, `performance_mood_changed` fires BEFORE the next question loads — capturing the exact moment the system adjusts

**Definition of Done:** A full Grammar session's event stream reconstructs the adaptive difficulty journey; `performance_mood_changed` events correlate with accuracy trends.

---

### Story 3.3 — Word Builder Game Event Instrumentation

**As a** product analyst,  
**I want** every Word Builder interaction captured with letter-level granularity,  
**So that** I can understand building strategies, identify confusing words, and measure construction speed.

**Priority:** Must Have  
**Points:** 5  

**Acceptance Criteria:**

- [ ] The following events fire at the appropriate moments in `WordBuilderView`:
  | Event | Trigger | Key Properties |
  |-------|---------|---------------|
  | `game_started` | View appears, puzzle loaded | `game_type: "word_builder"`, `difficulty`, `language_pair`, `word_count`, `entry_source` |
  | `word_puzzle_presented` | New word puzzle appears | `puzzle_index`, `target_word`, `word_length`, `available_letters`, `category` |
  | `letter_placed` | User places a letter tile | `puzzle_index`, `letter`, `position`, `is_correct_position`, `letters_placed_so_far` |
  | `letter_removed` | User removes a placed letter | `puzzle_index`, `letter`, `position`, `letters_placed_after` |
  | `word_submitted` | User submits their built word | `puzzle_index`, `submitted_word`, `target_word`, `is_correct`, `attempt_number`, `build_time_ms`, `letter_moves_count` |
  | `word_hint_used` | User requests a hint | `puzzle_index`, `hint_type`, `letters_revealed`, `target_word` |
  | `game_completed` | All words built | `words_total`, `words_correct_first_try`, `words_correct_with_retry`, `total_attempts`, `accuracy_pct`, `total_duration_s`, `xp_earned`, `avg_build_time_ms` |
  | `game_abandoned` | User exits early | `puzzles_completed`, `puzzles_total`, `progress_pct`, `time_in_game_s` |
- [ ] `build_time_ms` is measured from `word_puzzle_presented` to successful `word_submitted` for a given puzzle
- [ ] `letter_moves_count` captures total letter placements + removals for a single word attempt (measures "fidgeting")
- [ ] `attempt_number` increments per puzzle — tracking retry behaviour on difficult words
- [ ] `words_correct_first_try` vs `words_correct_with_retry` distinguishes mastery from eventual success
- [ ] `available_letters` is captured as a sorted string (e.g., `"AEHLNOT"`) for anagram analysis
- [ ] Events are debounced at the letter level — rapid consecutive `letter_placed` events within 50ms are batched

**Definition of Done:** A Word Builder session reconstructs the complete building journey per word; analytics can identify which words have the highest `attempt_number` averages.

---

### Story 3.4 — XP & Achievement Event Tracking

**As a** product analyst,  
**I want** every XP award and achievement unlock tracked,  
**So that** I can model the XP economy, identify engagement cliffs, and measure milestone impact on retention.

**Priority:** Must Have  
**Points:** 3  

**Acceptance Criteria:**

- [ ] The following events fire at the appropriate moments:
  | Event | Trigger | Key Properties |
  |-------|---------|---------------|
  | `xp_earned` | XP awarded after any correct answer | `amount`, `source_game`, `source_action`, `multiplier`, `total_xp_after` |
  | `xp_milestone_reached` | User crosses an XP threshold | `milestone_xp`, `previous_milestone`, `time_since_last_milestone_days`, `games_played_since_last` |
  | `streak_updated` | Daily streak value changes | `new_streak`, `previous_streak`, `is_streak_broken`, `longest_streak_ever` |
  | `streak_broken` | User misses a day, streak resets | `broken_streak_length`, `previous_longest`, `days_since_last_activity` |
  | `achievement_unlocked` | Badge or achievement earned | `achievement_id`, `achievement_name`, `achievement_category`, `total_achievements` |
- [ ] `multiplier` captures any active XP bonus multipliers (e.g., streak bonus, tier bonus)
- [ ] `xp_milestone_reached` fires at thresholds: 100, 500, 1000, 2500, 5000, 10000, 25000, 50000, 100000 XP
- [ ] `streak_broken` fires exactly once per break — not on every subsequent day
- [ ] `is_streak_broken` in `streak_updated` is `true` when the new streak is less than the previous
- [ ] The `xp_earned` event uses `source_action` to distinguish: `"correct_answer"`, `"game_completion_bonus"`, `"streak_bonus"`, `"first_game_of_day"`

**Definition of Done:** PostHog can generate an XP distribution histogram and a streak survival curve from captured events.

---

### Story 3.5 — Practice Time Tracking Events

**As a** product analyst,  
**I want** practice time events that mirror the `PracticeTimeTracker` service's state transitions,  
**So that** I can understand how Free users interact with the time limit and whether it drives upgrades.

**Priority:** Must Have  
**Points:** 3  

**Acceptance Criteria:**

- [ ] The following events fire at the appropriate moments:
  | Event | Trigger | Key Properties |
  |-------|---------|---------------|
  | `practice_session_started` | User begins active practice (any game) | `tier`, `daily_time_remaining_s`, `session_number_today` |
  | `practice_session_ended` | User stops active practice | `session_duration_s`, `tier`, `daily_time_used_s`, `reason` |
  | `practice_limit_warning` | 5-minute warning fires for Free users | `time_remaining_s`, `daily_time_used_s`, `games_played_today` |
  | `practice_limit_reached` | Free user hits 30-min daily cap | `daily_time_used_s`, `games_played_today`, `games_completed_today` |
  | `practice_limit_dismissed` | User dismisses limit notification | `action_taken` |
- [ ] `reason` for `practice_session_ended` distinguishes: `"game_completed"`, `"user_navigated_away"`, `"app_backgrounded"`, `"time_limit_reached"`, `"error"`
- [ ] `action_taken` for `practice_limit_dismissed` captures: `"upgrade_tapped"`, `"dismissed"`, `"closed_app"`
- [ ] Events correlate with the existing `PracticeTimeTracker` notification system — they fire alongside (not instead of) the notification posts
- [ ] For premium users (Pro+), `practice_limit_warning` and `practice_limit_reached` never fire
- [ ] `session_number_today` increments each time a user starts a practice session on a given calendar day

**Definition of Done:** A free-tier test user hitting the 30-minute limit produces the complete event sequence; PostHog can calculate "% of Free users who hit daily limit."

---

## Epic 4 — Subscription & Revenue Analytics

> **Goal:** Instrument the complete subscription lifecycle — from paywall impression through purchase, renewal, cancellation, and win-back — correlated with PostHog's user journey data and RevenueCat's transaction records.  
> **Priority:** Must Have  
> **Epic Points:** 21  

---

### Story 4.1 — Paywall View & Interaction Tracking

**As a** product analyst,  
**I want** every paywall impression and interaction captured with full contextual attribution,  
**So that** I can measure paywall conversion rates by trigger context and optimise presentation timing.

**Priority:** Must Have  
**Points:** 5  

**Acceptance Criteria:**

- [ ] The following events fire at the appropriate moments in `MembershipView` and any paywall presentation:
  | Event | Trigger | Key Properties |
  |-------|---------|---------------|
  | `paywall_viewed` | Paywall becomes visible | `context`, `trigger_feature`, `current_tier`, `offerings_loaded`, `plans_shown`, `time_since_last_paywall_s` |
  | `paywall_plan_selected` | User taps a subscription plan | `plan_id`, `plan_price`, `plan_period`, `plan_tier`, `context` |
  | `paywall_plan_deselected` | User changes plan selection | `from_plan_id`, `to_plan_id`, `time_on_previous_plan_s` |
  | `paywall_scrolled` | User scrolls the paywall content | `scroll_depth_pct`, `features_visible`, `context` |
  | `paywall_social_proof_viewed` | Social proof section enters viewport | `proof_type`, `proof_content`, `context` |
  | `paywall_dismissed` | User closes paywall without purchasing | `context`, `time_on_paywall_s`, `plans_viewed`, `furthest_scroll_pct`, `dismiss_method` |
  | `paywall_terms_tapped` | User taps subscription terms/legal link | `link_type`, `context` |
- [ ] `context` maps to `PaywallContext` enum cases:
  - `"membership_tab"` — Browsing membership
  - `"feature_gate_soundscapes"` — Locked feature trigger (specific feature in `trigger_feature`)
  - `"upgrade_nudge_5th_lesson"` — Milestone nudge
  - `"trial_expiry_3_days"` — Trial expiration warning
  - `"settings"` — Settings subscription management
- [ ] `offerings_loaded` is `true/false` indicating whether RevenueCat offerings resolved before paywall render (critical for debugging blank paywalls)
- [ ] `plans_shown` is an array of plan IDs actually displayed (e.g., `["pro_monthly", "elite_monthly", "royal_monthly"]`)
- [ ] `dismiss_method` distinguishes: `"back_button"`, `"swipe_down"`, `"tap_outside"`, `"system_back"`
- [ ] `time_since_last_paywall_s` is `null` if this is the user's first-ever paywall view
- [ ] Paywall events respect the same debounce (0.5s) as screen events — SwiftUI sheet presentation can trigger multiple `onAppear` calls

**Definition of Done:** PostHog funnel from `paywall_viewed` → `paywall_plan_selected` → `purchase_started` → `purchase_completed` renders with conversion rates per context.

---

### Story 4.2 — Purchase Lifecycle Event Tracking

**As a** product analyst,  
**I want** the complete purchase flow instrumented — from tap-to-buy through Apple's StoreKit confirmation to RevenueCat's entitlement grant,  
**So that** I can measure purchase success rates, identify failure modes, and correlate revenue with user behaviour.

**Priority:** Must Have  
**Points:** 5  

**Acceptance Criteria:**

- [ ] The following events fire at the appropriate moments in `SubscriptionManager`:
  | Event | Trigger | Key Properties |
  |-------|---------|---------------|
  | `purchase_started` | User initiates purchase (before StoreKit sheet) | `plan_id`, `plan_price`, `plan_currency`, `plan_tier`, `paywall_context`, `current_tier` |
  | `purchase_completed` | RevenueCat confirms successful transaction | `plan_id`, `plan_price`, `plan_currency`, `plan_tier`, `transaction_id`, `is_upgrade`, `is_crossgrade`, `previous_tier`, `purchase_duration_ms` |
  | `purchase_failed` | Purchase fails at any stage | `plan_id`, `error_code`, `error_message`, `failure_stage`, `plan_tier` |
  | `purchase_cancelled` | User cancels the StoreKit payment sheet | `plan_id`, `plan_tier`, `time_on_payment_sheet_s` |
  | `purchase_restored` | User restores previous purchases | `restored_plan_id`, `restored_tier`, `original_purchase_date`, `restore_source` |
  | `purchase_deferred` | Purchase requires Ask to Buy approval | `plan_id`, `plan_tier` |
- [ ] `failure_stage` distinguishes: `"storekit_error"`, `"network_error"`, `"revenuecat_error"`, `"entitlement_not_granted"`, `"receipt_validation_failed"`
- [ ] `purchase_duration_ms` measures elapsed time from `purchase_started` to `purchase_completed`
- [ ] `is_upgrade` is `true` when `previous_tier.rank < plan_tier.rank`  
- [ ] `is_crossgrade` is `true` when tiers are at the same rank but different products (future-proofing for annual vs monthly)
- [ ] `purchase_completed` also updates the PostHog user's properties: `$set: { paid_tier, first_purchase_date, lifetime_revenue }` via an `identify` call
- [ ] `purchase_failed` includes enough context to diagnose the issue without accessing StoreKit logs
- [ ] Revenue values are ALWAYS in the user's local currency with an `plan_currency` property — never converted

**Definition of Done:** A complete purchase flow (start → StoreKit → success) produces 2 events (`purchase_started`, `purchase_completed`) with matching `plan_id`; a cancelled purchase produces `purchase_started` + `purchase_cancelled`.

---

### Story 4.3 — Trial Lifecycle Event Tracking

**As a** product analyst,  
**I want** the full trial lifecycle tracked — from activation through engagement to expiry or conversion,  
**So that** I can optimise trial length, identify at-risk trial users, and measure trial-to-paid conversion.

**Priority:** Must Have  
**Points:** 3  

**Acceptance Criteria:**

- [ ] The following events fire at the appropriate moments:
  | Event | Trigger | Key Properties |
  |-------|---------|---------------|
  | `trial_started` | User activates 14-day trial | `trial_duration_days`, `entry_source`, `previous_tier` |
  | `trial_milestone` | Trial reaches key day thresholds | `trial_day`, `days_remaining`, `games_played`, `total_xp`, `features_used` |
  | `trial_expiry_warning` | Warning shown N days before expiry | `days_remaining`, `games_played`, `features_used_count`, `has_seen_paywall` |
  | `trial_expired` | Trial period ends without conversion | `trial_duration_days`, `games_played_during_trial`, `total_xp_during_trial`, `features_explored`, `paywalls_viewed`, `signup_method` |
  | `trial_converted` | User purchases during or immediately after trial | `trial_day_of_conversion`, `converted_to_tier`, `plan_id`, `features_used_during_trial` |
- [ ] `trial_milestone` fires on days: 1, 3, 5, 7, 10, 13 (capturing engagement trajectory)
- [ ] `features_used` is an array of `PremiumFeature` raw values the user actually engaged with during trial (e.g., `["soundscapes", "nebulaDrift", "quantumFlow"]`)
- [ ] `has_seen_paywall` in `trial_expiry_warning` indicates whether the user has ever voluntarily opened the membership tab
- [ ] `trial_converted` fires INSTEAD of `trial_expired` when the user converts — they are mutually exclusive outcomes
- [ ] `trial_day_of_conversion` is 0-indexed (day 0 = activation day)
- [ ] If a trial user uninstalls and reinstalls, the trial state is preserved via RevenueCat — `trial_started` does NOT re-fire

**Definition of Done:** PostHog can generate a "Trial Engagement Curve" showing features_used_count by trial_day, with conversion/expiry outcomes as the terminal event.

---

### Story 4.4 — Subscription Renewal & Churn Tracking

**As a** product analyst,  
**I want** renewal successes and failures tracked alongside voluntary cancellations,  
**So that** I can measure involuntary churn, billing failure rates, and cancellation reasons.

**Priority:** Should Have  
**Points:** 5  

**Acceptance Criteria:**

- [ ] The following events fire based on RevenueCat webhook data forwarded to PostHog (server-side) or `CustomerInfo` listener updates (client-side):
  | Event | Trigger | Key Properties |
  |-------|---------|---------------|
  | `subscription_renewed` | Successful auto-renewal | `plan_id`, `plan_tier`, `renewal_count`, `subscription_age_days`, `plan_price` |
  | `subscription_renewal_failed` | Billing failure | `plan_id`, `plan_tier`, `failure_reason`, `retry_number`, `grace_period_remaining_days` |
  | `subscription_cancelled` | User initiates cancellation | `plan_id`, `plan_tier`, `cancellation_reason`, `subscription_age_days`, `remaining_access_days` |
  | `subscription_expired` | Access actually expires (end of billing period after cancel) | `plan_id`, `plan_tier`, `total_subscription_duration_days`, `total_revenue`, `revert_to_tier` |
  | `subscription_reactivated` | Previously cancelled user re-subscribes | `plan_id`, `plan_tier`, `days_since_cancellation`, `previous_plan_id`, `reactivation_source` |
- [ ] `renewal_count` tracks how many consecutive successful renewals this subscription has had
- [ ] `cancellation_reason` is populated from RevenueCat's cancellation reason if available: `"price"`, `"not_useful"`, `"technical"`, `"other"`, `"unknown"`
- [ ] `grace_period_remaining_days` indicates Apple's billing grace period for retry (typically 16 days)
- [ ] `revert_to_tier` in `subscription_expired` shows which tier the user falls back to (always `"free"` currently)
- [ ] `reactivation_source` distinguishes: `"win_back_push"`, `"paywall_return"`, `"app_store_offer"`, `"organic"`
- [ ] These events are tagged with `$set` to update the user's current tier property in PostHog whenever tier transitions occur

**Definition of Done:** PostHog can calculate Monthly Recurring Revenue (MRR) churn rate by correlating `subscription_cancelled` with `subscription_expired` events; a cohort of "billing failure" users is identifiable.

---

### Story 4.5 — Revenue Attribution & LTV Enrichment

**As a** product analyst,  
**I want** PostHog user profiles enriched with lifetime revenue data and acquisition source,  
**So that** I can segment users by LTV and correlate marketing spend with revenue outcomes.

**Priority:** Should Have  
**Points:** 3  

**Acceptance Criteria:**

- [ ] On every `purchase_completed` or `subscription_renewed`, the following user properties are updated via `identify`:
  | User Property | Description | Example |
  |---------------|-------------|---------|
  | `lifetime_revenue` | Cumulative revenue in user's currency | `59.94` |
  | `lifetime_revenue_currency` | ISO 4217 currency code | `"GBP"` |
  | `first_purchase_date` | ISO 8601 timestamp of first transaction | `"2026-03-15T10:30:00Z"` |
  | `current_plan_id` | Active subscription SKU | `"com.lumenshore.lumenlingo.pro.monthly"` |
  | `current_plan_tier` | Active tier | `"pro"` |
  | `subscription_start_date` | Current billing period start | `"2026-03-15T10:30:00Z"` |
  | `total_transactions` | Count of all successful purchases | `6` |
  | `acquisition_source` | How the user first discovered the app | `"organic"`, `"utm_email"` |
- [ ] `lifetime_revenue` accumulates across all transactions, NOT per subscription period
- [ ] `acquisition_source` is set once on first app open and never overwritten — it uses the UTM source from the first `app_opened_from_link` or defaults to `"organic"`
- [ ] `$set_once` is used for immutable properties (`first_purchase_date`, `acquisition_source`) — PostHog will not overwrite these on subsequent calls
- [ ] `$set` is used for mutable properties (`lifetime_revenue`, `current_plan_tier`, etc.)
- [ ] Revenue data is NEVER sent as a super-property (it changes too frequently and would bloat every event)

**Definition of Done:** PostHog user profiles show LTV data; a cohort query for "users with lifetime_revenue > 50" returns expected results.

---

## Epic 5 — Feature Flag Migration to PostHog

> **Goal:** Replace the lightweight `FeatureFlagService` with PostHog's server-side feature flag system, enabling gradual rollouts, user targeting, and kill switches without app releases.  
> **Priority:** Must Have  
> **Epic Points:** 16  

---

### Story 5.1 — PostHog Feature Flag Bootstrap Configuration

**As a** developer,  
**I want** PostHog feature flags to load on app launch with sensible defaults,  
**So that** feature gating decisions are available immediately — even before the network request completes.

**Priority:** Must Have  
**Points:** 3  

**Acceptance Criteria:**

- [ ] PostHog SDK is configured with `preloadFeatureFlags: true` at initialisation (already in Story 1.5)
- [ ] A local JSON file `Config/feature_flag_defaults.json` provides fallback values for all known flags — these are used when:
  - The app is launched for the first time (no cached flags)
  - The device is offline
  - PostHog's API is unreachable
- [ ] Default flag values match the current `FeatureFlagService` environment-aware logic:
  - Dev/QA/UAT: flags default to `true` (permissive for testing)
  - PreProd/Prod: flags default to `false` (conservative for safety)
- [ ] Flags are reloaded on: app foreground, user identification, and manual trigger from QAPanelView
- [ ] A `feature_flags_loaded` event fires after each successful flag reload with:
  | Property | Description |
  |----------|-------------|
  | `flags_count` | Number of flags received |
  | `load_duration_ms` | Time to fetch from server |
  | `source` | `"preload"`, `"foreground"`, `"identify"`, `"manual"` |
  | `flags_changed` | Array of flag keys whose values changed since last load |
- [ ] If flag loading fails, the app continues with cached or default values — it NEVER blocks the UI

**Definition of Done:** Feature flags resolve within 50ms on warm launch (cached); cold launch uses defaults until network completes.

---

### Story 5.2 — Migrate FeatureFlagService to PostHog Backend

**As a** developer,  
**I want** the existing `FeatureFlagService` to delegate all evaluation to PostHog,  
**So that** we have a single feature flag system with server-side targeting and no client-side flag logic duplication.

**Priority:** Must Have  
**Points:** 5  

**Acceptance Criteria:**

- [ ] `FeatureFlagService` retains its existing public API (`isEnabled(_ flag:) -> Bool`) for backward compatibility
- [ ] Internally, `isEnabled` now calls `analyticsService.isFeatureEnabled(flag.rawValue)` instead of reading from UserDefaults
- [ ] The existing `clerkAuthEnabled` flag is migrated to a PostHog feature flag named `clerk_auth_enabled`
- [ ] New flags are created in PostHog's dashboard for the migration:
  | Flag Key | Description | Default (Prod) |
  |----------|-------------|----------------|
  | `clerk_auth_enabled` | Enable Clerk authentication | `false` |
  | `session_recording_enabled` | Enable PostHog session replay | `false` |
  | `new_onboarding_flow` | A/B test new onboarding | `false` |
  | `paywall_v2_enabled` | Test redesigned paywall | `false` |
  | `word_builder_hints` | Enable hint feature in Word Builder | `true` |
- [ ] A `feature_flag_evaluated` event fires on EVERY flag check with:
  | Property | Description |
  |----------|-------------|
  | `flag_key` | The flag being checked |
  | `flag_value` | The resolved value |
  | `evaluation_source` | `"server"`, `"cache"`, `"default"` |
- [ ] `evaluation_source` is `"server"` if flags were fetched in this session, `"cache"` if using persisted values, `"default"` if using the JSON fallback
- [ ] The migration is backward-compatible — existing code calling `featureFlagService.isEnabled(.clerkAuth)` continues to work without changes
- [ ] UserDefaults flag storage is cleaned up after 30 days of PostHog flag usage (tracked via a migration version counter)

**Definition of Done:** `clerkAuthEnabled` flag value can be toggled in PostHog's dashboard and takes effect in the app within 30 seconds (on next foreground).

---

### Story 5.3 — Feature Flag Debugging in QAPanelView

**As a** developer or QA tester,  
**I want** to see and override all feature flags from the in-app QA panel,  
**So that** I can test any flag combination without server-side changes or rebuilding.

**Priority:** Should Have  
**Points:** 5  

**Acceptance Criteria:**

- [ ] The existing `QAPanelView` gains a new "Feature Flags" section (collapsible, using `CollapsibleSection`)
- [ ] The section lists every known feature flag with:
  - Flag name (human-readable)
  - Current resolved value (green badge for `true`, red for `false`, amber for non-boolean)
  - Source indicator: "Server" / "Cache" / "Default" / "Override"
  - A toggle to override the flag locally
- [ ] Local overrides persist in UserDefaults under `qa_flag_overrides` — they take priority over PostHog's evaluation
- [ ] A "Clear All Overrides" button resets to server values
- [ ] A "Refresh from Server" button triggers `reloadFeatureFlags()` and updates the display
- [ ] Overridden flags show a warning banner: "⚠️ Local override active — server value ignored"
- [ ] Flag override changes take effect immediately without requiring navigation or restart
- [ ] The Feature Flags section is ONLY visible in Dev and QA build configurations — hidden in UAT, PreProd, Prod

**UX Acceptance Criteria:**

- [ ] The flag list has a buttery-smooth expanding toggle animation using `CollapsibleSection` with `MeasuredContentReveal` springs — testers should fall in love with this functionality and drool at how satisfying the flag toggles feel, with instant visual feedback and a subtle haptic pulse on each toggle change
- [ ] Each flag row uses the app's glass card aesthetic with the same cosmic-themed colours as the rest of the QA panel

**Definition of Done:** A QA tester can override `clerk_auth_enabled` in the QA panel, see the auth flow change immediately, clear the override, and see it revert to the server value.

---

### Story 5.4 — Feature Flag Payload Support for Remote Config

**As a** developer,  
**I want** PostHog feature flags to deliver JSON payloads alongside boolean values,  
**So that** we can remotely configure values (copy, thresholds, colours) without app releases.

**Priority:** Could Have  
**Points:** 3  

**Acceptance Criteria:**

- [ ] `getFeatureFlag(_:)` in `AnalyticsServiceProtocol` returns `Any?` to support JSON payloads
- [ ] A convenience method `getFeatureFlagPayload<T: Decodable>(_: String, as: T.Type) -> T?` provides type-safe decoding
- [ ] Use cases planned for payload flags:
  | Flag Key | Payload Type | Example Payload |
  |----------|--------------|-----------------|
  | `practice_time_limit_config` | `PracticeTimeConfig` | `{ "free_limit_minutes": 30, "warning_minutes": 5 }` |
  | `xp_multiplier_config` | `XPConfig` | `{ "streak_bonus_pct": 10, "first_game_bonus": 50 }` |
  | `paywall_copy_variant` | `PaywallCopy` | `{ "headline": "Unlock Your Full Potential", "cta": "Start Pro" }` |
- [ ] If the payload fails to decode, the system falls back to a hardcoded default and fires an `error_occurred` event with `error_type: "flag_payload_decode_failure"`
- [ ] Payloads are cached alongside flag values — they survive app restarts

**Definition of Done:** A flag with a JSON payload can be fetched, decoded into a Swift struct, and used in the UI without a code change.

---

## Epic 6 — User Identification & Profile Enrichment

> **Goal:** Ensure PostHog accurately identifies users across sessions, devices, and authentication states — merging anonymous and authenticated profiles seamlessly.  
> **Priority:** Must Have  
> **Epic Points:** 13  

---

### Story 6.1 — Anonymous-to-Authenticated Identity Merge

**As a** product analyst,  
**I want** pre-login anonymous activity merged with the authenticated profile,  
**So that** I can see the complete user journey from first app open through sign-in and beyond — with zero data loss.

**Priority:** Must Have  
**Points:** 5  

**Acceptance Criteria:**

- [ ] On first app launch (before authentication), PostHog assigns an anonymous `distinct_id` automatically
- [ ] All events captured before sign-in are attributed to this anonymous ID
- [ ] On successful authentication (any provider: Apple, Google, Phone, Guest), the analytics service calls:
  ```swift
  analyticsService.identify(
      distinctId: user.authProviderUID,
      properties: [
          "email": user.email,
          "first_name": user.firstName,
          "auth_provider": "apple",
          "signup_date": ISO8601DateFormatter().string(from: Date()),
          "initial_tier": "free"
      ]
  )
  ```
- [ ] PostHog merges the anonymous profile into the authenticated profile — all pre-login events now appear in the authenticated user's timeline
- [ ] If a returning user signs in on a new device, their existing PostHog profile is unified (not duplicated)
- [ ] For "Continue without account" (guest) users, the anonymous `distinct_id` persists — no `identify` call is made until they later sign in
- [ ] On sign-out, `analyticsService.reset()` is called — generating a new anonymous `distinct_id` for the next sign-in (prevents identity leakage between accounts on shared devices)
- [ ] The `auth_succeeded` event (from `AuthAnalytics`) fires AFTER the `identify` call — ensuring it's attributed to the authenticated profile
- [ ] Identity merge is idempotent — calling `identify` with the same `distinctId` multiple times does not create duplicates

**Definition of Done:** A test user's anonymous events (pre sign-in) appear in their authenticated PostHog profile; signing out and signing in as a different user shows clean separation.

---

### Story 6.2 — User Property Enrichment on Profile Changes

**As a** product analyst,  
**I want** PostHog user profiles updated whenever the user changes their profile, preferences, or tier,  
**So that** cohort analysis and targeting use current user attributes.

**Priority:** Must Have  
**Points:** 3  

**Acceptance Criteria:**

- [ ] The following user properties are updated via `$set` whenever they change:
  | Property | Update Trigger | Source |
  |----------|---------------|--------|
  | `membership_tier` | Tier change (purchase, expiry, cancel) | `TierManager.currentTier` |
  | `dark_mode` | Theme toggle | `ThemeManager.isDarkMode` |
  | `active_language_pair` | Language pair changed | Current `LanguagePair.id` |
  | `soundscape_active` | Soundscape selection | `AudioService.activeSoundscape` |
  | `breathing_orbs_enabled` | Setting toggle | Appearance settings |
  | `quantum_flow_enabled` | Setting toggle | Appearance settings |
  | `nebula_drift_enabled` | Setting toggle | Appearance settings |
  | `practice_time_limit` | Only for Free tier | `"30_minutes"` or `"unlimited"` |
  | `icloud_sync_enabled` | Sync toggle | Sync settings |
  | `total_games_played` | After each game completion | Aggregated count |
  | `preferred_difficulty` | Most-played difficulty | Computed from history |
- [ ] The following properties use `$set_once` (immutable after first set):
  | Property | Set When |
  |----------|----------|
  | `first_seen_date` | First `app_opened` event |
  | `first_game_date` | First `game_started` event |
  | `signup_method` | `auth_succeeded` event |
  | `initial_language_pair` | First language pair selection |
  | `acquisition_source` | First `app_opened_from_link` UTM or `"organic"` |
  | `device_model_at_signup` | First `identify` call |
- [ ] Property updates are batched — if a user changes multiple settings in rapid succession, only one `identify` call fires (debounced 2 seconds)
- [ ] PII properties (`email`, `first_name`) are only set if the user has consented to analytics (Story 9.2)

**Definition of Done:** Changing dark mode in settings updates the PostHog user profile within 5 seconds; creating a cohort of "dark_mode = true" users returns expected results.

---

### Story 6.3 — Group Analytics for Household & Language Cohorts

**As a** product analyst,  
**I want** users grouped by language pair and device family,  
**So that** I can compare engagement metrics across language cohorts and identify device-specific issues.

**Priority:** Could Have  
**Points:** 5  

**Acceptance Criteria:**

- [ ] PostHog Group Analytics is configured with two group types:
  | Group Type | Group Key | Properties |
  |------------|-----------|------------|
  | `language_pair` | `LanguagePair.id` (e.g., `"en_es"`) | `source_language`, `target_language`, `total_users`, `avg_accuracy` |
  | `device_family` | Device family identifier (e.g., `"iphone_17"`) | `os_version`, `screen_size`, `total_users` |
- [ ] When a user starts a game, the event is associated with their active `language_pair` group
- [ ] Group properties are updated periodically (not per-event) to avoid excessive API calls
- [ ] Language pair groups enable queries like "average accuracy for EN→JA vs EN→ES"
- [ ] Device family groups enable queries like "average frame drop rate on iPhone 15 vs iPhone 17"
- [ ] Group association is updated when the user changes their active language pair

**Definition of Done:** PostHog's Group Analytics dashboard shows language pair cohorts with distinct engagement metrics.

---

## Epic 7 — Funnel & Retention Instrumentation

> **Goal:** Instrument the critical funnels and retention checkpoints that drive business outcomes — onboarding completion, first-game-to-habit, and trial-to-paid conversion — so we can identify and fix drop-off points with surgical precision.  
> **Priority:** Must Have  
> **Epic Points:** 18  

---

### Story 7.1 — Onboarding Funnel Instrumentation

**As a** product analyst,  
**I want** every step of the first-time user onboarding captured as a discrete event,  
**So that** I can build a step-by-step funnel, identify exactly where new users drop off, and run experiments to improve completion rate.

**Priority:** Must Have  
**Points:** 5  

**Acceptance Criteria:**

- [ ] The onboarding funnel is modelled as a sequence of events with a shared `onboarding_session_id` (UUID generated at `app_opened` for first-time users):
  | Step | Event | Key Properties |
  |------|-------|---------------|
  | 1 | `onboarding_started` | `onboarding_session_id`, `device_model`, `os_version`, `locale`, `referral_source` |
  | 2 | `onboarding_auth_presented` | `onboarding_session_id`, `auth_options_shown`, `time_since_start_s` |
  | 3 | `onboarding_auth_completed` | `onboarding_session_id`, `auth_method`, `is_new_user`, `time_on_auth_s` |
  | 4 | `onboarding_language_selected` | `onboarding_session_id`, `language_pair`, `selection_time_s`, `pairs_browsed` |
  | 5 | `onboarding_first_game_started` | `onboarding_session_id`, `game_type`, `time_since_auth_s` |
  | 6 | `onboarding_first_game_completed` | `onboarding_session_id`, `game_type`, `accuracy_pct`, `xp_earned`, `game_duration_s` |
  | 7 | `onboarding_completed` | `onboarding_session_id`, `total_onboarding_duration_s`, `steps_completed`, `auth_method`, `language_pair` |
- [ ] `onboarding_started` fires ONLY for users whose `UserProfile` does not yet exist in SwiftData (truly new users)
- [ ] If the user skips authentication ("Continue without account"), step 3 fires with `auth_method: "guest"` and `is_new_user: true`
- [ ] If the user abandons at any step, an `onboarding_abandoned` event fires when the app backgrounds or after 5 minutes of inactivity:
  | Property | Description |
  |----------|-------------|
  | `last_completed_step` | Step number (1-7) |
  | `last_event_name` | Name of the last onboarding event |
  | `time_since_last_step_s` | Seconds since the last step completed |
  | `abandon_reason` | `"app_backgrounded"`, `"inactivity_timeout"`, `"force_quit"` |
- [ ] `pairs_browsed` in step 4 counts how many language pair options the user scrolled through before selecting
- [ ] The `onboarding_session_id` is stored in UserDefaults so that if the user returns after abandoning, the funnel continues (same session ID) rather than starting a new funnel
- [ ] A `$set_once` user property `onboarding_completed: true/false` is set at the terminal event

**Definition of Done:** PostHog's Funnel visualisation shows 7-step onboarding with per-step conversion rates and median time-between-steps.

---

### Story 7.2 — First-Week Retention Checkpoint Events

**As a** product analyst,  
**I want** specific retention checkpoint events on Days 1, 2, 3, 5, and 7,  
**So that** I can build a retention curve, identify the "aha moment," and measure early engagement quality.

**Priority:** Must Have  
**Points:** 5  

**Acceptance Criteria:**

- [ ] A `retention_checkpoint` event fires on the user's first app open of each target day (relative to `first_seen_date`):
  | Property | Description | Example |
  |----------|-------------|---------|
  | `checkpoint_day` | Days since first seen | `1`, `2`, `3`, `5`, `7` |
  | `sessions_to_date` | Total app sessions so far | `4` |
  | `total_xp` | Cumulative XP | `350` |
  | `games_played` | Total games completed | `6` |
  | `unique_game_types_played` | Number of distinct game types tried | `2` |
  | `current_streak` | Active streak length | `3` |
  | `tier` | Current membership tier | `"trial"` |
  | `features_discovered` | Array of premium features the user has seen/tried | `["soundscapes", "nebulaDrift"]` |
  | `has_completed_onboarding` | Whether full onboarding was completed | `true` |
  | `accuracy_trend` | `"improving"`, `"stable"`, `"declining"` | `"improving"` |
- [ ] The checkpoint fires EXACTLY once per day threshold — if a user skips Day 2 and opens on Day 3, both `checkpoint_day: 2` (computed retroactively) and `checkpoint_day: 3` fire
- [ ] `accuracy_trend` is computed by comparing the user's average accuracy in their last 5 games vs their first 5 games
- [ ] The checkpoint is computed in `LumenLingoApp`'s `onChange(of: scenePhase)` when transitioning to `.active` — it checks the current day against the last-fired checkpoint stored in UserDefaults
- [ ] A `$set` user property `last_retention_checkpoint` is updated to the latest checkpoint day
- [ ] After Day 7, weekly checkpoints fire at Days 14, 21, 28, 30, 60, 90 with the same property schema
- [ ] Checkpoint events do NOT fire for users who installed more than 90 days ago (prevents retroactive noise)

**Definition of Done:** PostHog retention table shows Day 1/3/7/14/30 retention rates; the "aha moment" (feature correlation with D7 retention) is identifiable via property filtering.

---

### Story 7.3 — Learning Habit Formation Funnel

**As a** product analyst,  
**I want** to track the journey from first game to "habit formed" (defined as 3 games on 5 of 7 consecutive days),  
**So that** I can measure the efficiency of our engagement loops and identify when users form a sticky habit.

**Priority:** Should Have  
**Points:** 5  

**Acceptance Criteria:**

- [ ] The following milestone events fire as the user progresses toward habit formation:
  | Event | Trigger | Key Properties |
  |-------|---------|---------------|
  | `habit_milestone_first_game` | User completes their very first game | `game_type`, `accuracy_pct`, `time_to_first_game_minutes` |
  | `habit_milestone_second_day` | User plays on a second distinct calendar day | `days_since_first_game`, `games_on_day_2` |
  | `habit_milestone_third_game_type` | User tries all 3 game types | `order_of_discovery`, `favorite_so_far` |
  | `habit_milestone_3_day_streak` | 3 consecutive days of play | `avg_daily_games`, `avg_daily_xp`, `total_xp` |
  | `habit_milestone_5_day_streak` | 5 consecutive days of play | `avg_daily_games`, `avg_daily_xp`, `preferred_game_type` |
  | `habit_formed` | 3+ games on 5 of last 7 days | `days_to_habit`, `total_games`, `total_xp`, `preferred_game_type`, `preferred_difficulty`, `preferred_language_pair` |
- [ ] Each milestone fires EXACTLY once per user (tracked via `$set_once` user properties)
- [ ] `time_to_first_game_minutes` measures from `first_seen_date` to first `game_completed` event — capturing onboarding friction
- [ ] `order_of_discovery` is an array showing which game types the user tried in order (e.g., `["flash_cards", "grammar", "word_builder"]`)
- [ ] `days_to_habit` is the number of calendar days from first app open to `habit_formed` event
- [ ] `preferred_game_type` is the game type with the most completions
- [ ] If a user never reaches `habit_formed` within 30 days, a `habit_not_formed` event fires with:
  | Property | Description |
  |----------|-------------|
  | `max_streak_achieved` | Longest consecutive-day streak |
  | `total_games_in_30_days` | Games played total |
  | `last_active_day` | Days since install when last played |
  | `barrier_hypothesis` | Computed: `"low_engagement"` (< 5 games), `"no_variety"` (1 game type), `"streak_broken"` (streak < 3) |
- [ ] `barrier_hypothesis` is an automated heuristic — it does NOT require manual tagging

**Definition of Done:** PostHog can generate a "Time to Habit" distribution chart showing the median days_to_habit and what percentage of users reach `habit_formed` within 7, 14, and 30 days.

---

### Story 7.4 — Upgrade Prompt Effectiveness Tracking

**As a** product analyst,  
**I want** every upgrade prompt (soft gate, nudge, trial expiry) tracked with its outcome,  
**So that** I can measure prompt fatigue, optimal timing, and conversion lift per prompt type.

**Priority:** Should Have  
**Points:** 3  

**Acceptance Criteria:**

- [ ] The following events fire for every upgrade prompt interaction:
  | Event | Trigger | Key Properties |
  |-------|---------|---------------|
  | `upgrade_prompt_shown` | Any upgrade/upsell UI appears | `prompt_type`, `trigger_context`, `prompts_shown_today`, `prompts_shown_total`, `days_on_free` |
  | `upgrade_prompt_action` | User acts on the prompt | `prompt_type`, `action`, `time_on_prompt_s` |
- [ ] `prompt_type` values: `"feature_gate_lock"`, `"practice_limit"`, `"milestone_nudge"`, `"trial_expiry_banner"`, `"settings_upgrade_card"`, `"membership_tab_browse"`
- [ ] `action` values: `"tapped_upgrade"`, `"dismissed"`, `"tapped_learn_more"`, `"ignored"` (prompt disappeared without interaction)
- [ ] `prompts_shown_today` and `prompts_shown_total` enable prompt-fatigue analysis
- [ ] `days_on_free` is the number of days since the user's tier became `"free"` (or since trial expiry)
- [ ] A computed PostHog insight: "Prompt → Paywall → Purchase" funnel grouped by `prompt_type` shows which prompt types have the highest conversion lift
- [ ] Prompts shown within 30 seconds of each other are grouped as a single prompt impression (prevents over-counting during rapid navigation near locked features)

**Definition of Done:** A PostHog dashboard shows prompt effectiveness: impressions, tap-through rate, and ultimate conversion rate for each `prompt_type`.

---

## Epic 8 — Performance & Error Telemetry

> **Goal:** Capture app performance metrics (frame rate, load times, audio latency) and runtime errors so engineering can proactively identify and fix issues before they impact retention.  
> **Priority:** Should Have  
> **Epic Points:** 13  

---

### Story 8.1 — Frame Rate & Rendering Performance Events

**As a** developer,  
**I want** frame drops and rendering stalls captured as analytics events,  
**So that** I can correlate performance issues with device models, nebula presets, and user engagement drop-off.

**Priority:** Should Have  
**Points:** 5  

**Acceptance Criteria:**

- [ ] The existing `PerformanceMonitor` (CADisplayLink-based) is extended to fire a `frame_drop_detected` event when:
  - FPS drops below 24 for more than 500ms continuously
  - A single frame takes longer than 100ms (stall)
- [ ] Event properties:
  | Property | Description | Example |
  |----------|-------------|---------|
  | `min_fps` | Lowest FPS during the drop | `12` |
  | `avg_fps` | Average FPS during the drop period | `18` |
  | `drop_duration_ms` | How long the drop lasted | `1200` |
  | `active_screen` | Which screen was visible | `"dashboard"` |
  | `nebula_preset` | Active nebula background preset (if any) | `"EdgeOfAndromeda"` |
  | `breathing_orbs_active` | Whether breathing orbs animation was running | `true` |
  | `quantum_flow_active` | Whether quantum flow particles were active | `false` |
  | `device_thermal_state` | `ProcessInfo.processInfo.thermalState` | `"serious"` |
  | `available_memory_mb` | `os_proc_available_memory()` converted to MB | `512` |
- [ ] Frame drop events are rate-limited to maximum 5 per session (prevents event storms during prolonged low-performance states)
- [ ] A `performance_summary` event fires on each `app_backgrounded` with session-wide metrics:
  | Property | Description |
  |----------|-------------|
  | `avg_fps` | Session-wide average FPS |
  | `min_fps` | Absolute minimum FPS in session |
  | `frame_drops_count` | Number of frame drop events |
  | `total_stall_duration_ms` | Cumulative stall time |
- [ ] Events are only captured when the user has opted in to analytics and `$device_type` is not "simulator" (no simulator noise)

**Definition of Done:** PostHog can show a "Frame Drop Rate by Device Model" chart; devices with `thermal_state: "critical"` are identifiable.

---

### Story 8.2 — Content Loading & Network Performance Events

**As a** developer,  
**I want** slow content loads and network failures tracked,  
**So that** I can identify which language pairs have oversized content, which CDN endpoints are slow, and where offline mode should be prioritised.

**Priority:** Should Have  
**Points:** 3  

**Acceptance Criteria:**

- [ ] A `content_load_completed` event fires when `ContentLoader` finishes loading game content:
  | Property | Description | Example |
  |----------|-------------|---------|
  | `language_pair` | Which pair was loaded | `"en_ja"` |
  | `game_type` | Which game's content | `"flash_cards"` |
  | `load_duration_ms` | Time to load from bundle/cache | `45` |
  | `content_size_kb` | Size of the JSON payload | `128` |
  | `source` | `"bundle"`, `"cache"`, `"network"` | `"cache"` |
  | `items_count` | Number of content items loaded | `200` |
- [ ] A `content_load_slow` event fires ONLY when `load_duration_ms > 500` (indicating performance concern)
- [ ] A `network_error` event fires on any failed network request:
  | Property | Description |
  |----------|-------------|
  | `endpoint` | Sanitised endpoint path (no PII) |
  | `error_code` | HTTP status or NSURLError code |
  | `error_domain` | Error domain (`NSURLErrorDomain`, etc.) |
  | `retry_count` | How many retries were attempted |
  | `is_offline` | `NetworkMonitor` connectivity state |
- [ ] Network error events DO NOT include request bodies, tokens, or user identifiers — only the sanitised endpoint path
- [ ] Content load events enable "average load time by language pair" analysis

**Definition of Done:** PostHog shows average content load times per language pair; `content_load_slow` events are filterable by device model.

---

### Story 8.3 — Audio Latency & Synthesis Performance Events

**As a** developer,  
**I want** audio synthesis performance tracked,  
**So that** I can identify when the WAV generation engine or playback path introduces perceivable latency.

**Priority:** Could Have  
**Points:** 2  

**Acceptance Criteria:**

- [ ] An `audio_latency_spike` event fires when any sound's total latency (generation + playback start) exceeds 100ms:
  | Property | Description | Example |
  |----------|-------------|---------|
  | `sound_name` | Which sound was playing | `"cardFlip"` |
  | `generation_duration_ms` | WAV synthesis time | `85` |
  | `playback_start_ms` | Time from buffer ready to audible output | `30` |
  | `total_latency_ms` | Sum of generation + playback start | `115` |
  | `is_prewarmed` | Whether the sound was in the prewarm cache | `false` |
  | `active_sounds_count` | Number of concurrent audio players | `3` |
- [ ] Events are rate-limited to maximum 3 per session
- [ ] A `prewarm_completed` event fires after `AudioService.prewarmSounds()`:
  | Property | Description |
  |----------|-------------|
  | `sounds_prewarmed` | Count of sounds cached |
  | `prewarm_duration_ms` | Total prewarm time |
  | `memory_used_mb` | Estimated memory for cached WAV buffers |
- [ ] Events are NOT captured for muted users (if all volumes are 0, skip)

**Definition of Done:** PostHog can identify which sounds most frequently cause latency spikes.

---

### Story 8.4 — Error & Crash Reporting Events

**As a** developer,  
**I want** runtime errors captured as PostHog events with full context,  
**So that** I can correlate errors with user actions, device conditions, and feature flags — without relying solely on a separate crash reporter.

**Priority:** Should Have  
**Points:** 3  

**Acceptance Criteria:**

- [ ] An `error_occurred` event fires for any caught error that impacts user experience:
  | Property | Description | Example |
  |----------|-------------|---------|
  | `error_type` | Category of error | `"storekit"`, `"auth"`, `"content_load"`, `"audio"`, `"sync"`, `"decode"` |
  | `error_code` | Machine-readable code | `"SKErrorPaymentCancelled"` |
  | `error_message` | Human-readable description (NO PII) | `"Payment sheet dismissed by user"` |
  | `error_severity` | `"warning"`, `"error"`, `"critical"` | `"error"` |
  | `screen_context` | Which screen the user was on | `"membership"` |
  | `recovery_action` | What the app did to recover | `"showed_retry_button"`, `"fell_back_to_default"`, `"none"` |
  | `user_impact` | Description of user-facing impact | `"Purchase flow interrupted"` |
- [ ] `error_message` is sanitised — it NEVER contains email addresses, tokens, file paths with usernames, or other PII
- [ ] `error_severity` levels:
  - `"warning"`: Non-blocking, automatically recovered
  - `"error"`: Blocking, user sees error state but can retry
  - `"critical"`: App functionality significantly degraded
- [ ] A maximum of 20 `error_occurred` events fire per session (prevents storms from retry loops)
- [ ] The `SecurityAuditLogger`'s integrity warnings are also forwarded as `error_occurred` events with `error_type: "security"` and `error_severity: "critical"`
- [ ] The event captures the active feature flags at the time of error (helps identify if a flag rollout caused the issue)

**Definition of Done:** PostHog can show "Top Errors by Type" with device and feature flag correlation; security events appear in the error stream.

---

## Epic 9 — Privacy, Consent & Compliance

> **Goal:** Ensure PostHog integration fully complies with GDPR, ATT (App Tracking Transparency), Apple's App Store privacy requirements, and the app's existing consent framework — analytics must never compromise user trust.  
> **Priority:** Must Have  
> **Epic Points:** 16  

---

### Story 9.1 — App Tracking Transparency (ATT) Integration

**As a** user,  
**I want** to be asked for tracking permission via Apple's ATT prompt before any cross-app tracking occurs,  
**So that** my privacy choices are respected and the app complies with Apple's App Store requirements.

**Priority:** Must Have  
**Points:** 3  

**Acceptance Criteria:**

- [ ] On first launch (after onboarding auth step), the app requests ATT permission via `ATTrackingManager.requestTrackingAuthorization()`
- [ ] PostHog's behaviour adapts based on ATT status:
  | ATT Status | PostHog Behaviour |
  |------------|-------------------|
  | `.authorized` | Full analytics with IDFA, cross-app attribution |
  | `.denied` | Analytics without IDFA; `$device_id` uses PostHog's anonymous ID only |
  | `.notDetermined` | No events fired until user responds (defer initialisation) |
  | `.restricted` | Same as `.denied` |
- [ ] The ATT prompt is NOT shown on every launch — only once, on first install
- [ ] If the user denies ATT, analytics still function for first-party analytics (screen views, game events) — only cross-app tracking identifiers are suppressed
- [ ] An `att_status_changed` event fires after the user responds:
  | Property | Description |
  |----------|-------------|
  | `status` | `"authorized"`, `"denied"`, `"restricted"`, `"not_determined"` |
  | `time_to_respond_s` | How long the prompt was visible |
  | `is_first_prompt` | `true` for initial prompt, `false` for settings re-check |
- [ ] The ATT prompt uses the `NSUserTrackingUsageDescription` key in Info.plist with copy that clearly explains the value: "LumenLingo uses this to measure which features help you learn best and to personalise your experience."
- [ ] The prompt is presented AFTER the user has seen value (post-first game) — NOT on cold launch before any context

**UX Acceptance Criteria:**

- [ ] The ATT prompt is preceded by a custom "pre-prompt" screen explaining WHY analytics help improve their learning experience, with a cosmic-themed illustration and a clear "Continue" button — users should fall in love with this functionality and drool at how the pre-prompt seamlessly blends into the app's visual language, making the tracking request feel like a natural part of the onboarding rather than an interruption

**Definition of Done:** ATT prompt appears after first game completion; `.denied` status results in no IDFA in PostHog events; `.authorized` status enables full tracking.

---

### Story 9.2 — GDPR-Compliant Consent Management

**As a** user in the EU/EEA,  
**I want** to explicitly consent to analytics before any data is collected,  
**So that** my GDPR rights are respected and I have full control over my data.

**Priority:** Must Have  
**Points:** 5  

**Acceptance Criteria:**

- [ ] A consent check runs on app launch BEFORE PostHog is initialised:
  - If consent status is unknown → show consent banner
  - If consent is granted → initialise PostHog normally
  - If consent is denied → PostHog initialises in opt-out mode (no events sent)
- [ ] The consent banner presents two clear options:
  | Option | Result |
  |--------|--------|
  | "Accept Analytics" | Full analytics activated |
  | "Decline" | PostHog opt-out mode; only essential, non-tracking functionality preserved |
- [ ] A "Manage Preferences" link in Settings → Account allows the user to change their consent at any time
- [ ] Consent state is persisted in UserDefaults under `analytics_consent_status` with values: `"granted"`, `"denied"`, `"unknown"`
- [ ] When consent is revoked (changed from granted → denied):
  - `analyticsService.optOut()` is called immediately
  - A final `consent_revoked` event fires BEFORE opt-out takes effect
  - `analyticsService.reset()` clears the local PostHog queue and cached user data
- [ ] When consent is granted (changed from denied/unknown → granted):
  - `analyticsService.optIn()` is called
  - `analyticsService.identify()` is called to re-associate the user
  - A `consent_granted` event fires with `previous_status` and `days_since_install`
- [ ] The consent banner does NOT appear for users outside the EU/EEA — detection uses `Locale.current.region` to check for EEA country codes
- [ ] The consent mechanism is independent of ATT — a user can grant GDPR consent but deny ATT (first-party analytics only)
- [ ] The consent banner's copy is available in all 10 supported locales (translated in `messages/` JSON files)

**UX Acceptance Criteria:**

- [ ] The consent banner slides up from the bottom with a spring animation matching the app's cosmic glass-card aesthetic — it uses the same `TierGlassCardModifier` visual treatment as membership cards — users should fall in love with this functionality and drool at how even a legal consent mechanism feels premium and on-brand rather than like a jarring cookie popup

**Definition of Done:** A test user in a simulated EU locale sees the consent banner; declining prevents any PostHog events from firing; granting consent mid-session immediately activates tracking.

---

### Story 9.3 — Data Deletion & Export via PostHog API

**As a** user exercising my GDPR Right to Erasure,  
**I want** my PostHog analytics data deleted when I request data deletion through the app,  
**So that** my right to be forgotten is fully honoured across all data processors.

**Priority:** Must Have  
**Points:** 5  

**Acceptance Criteria:**

- [ ] The existing GDPR data export flow (`GDPRDataExporter`) is extended to include PostHog data deletion
- [ ] When the user requests "Delete My Data" in Settings → Sync:
  1. A confirmation dialog explains that analytics data will be permanently deleted from PostHog
  2. On confirmation, the app calls PostHog's `reset()` to clear local data
  3. A server-side webhook (or manual process documented in DSAR-Procedure) triggers PostHog's Persons API to delete the user's profile
  4. The user receives confirmation that their data deletion request has been submitted
- [ ] The data deletion request is logged in the `DSAR-Log.md` compliance register (existing DSAR process)
- [ ] PostHog's data retention is configured to automatically delete events older than 365 days (documented in `DATA_RETENTION_SCHEDULE.md`)
- [ ] The deletion flow handles the case where PostHog API is unreachable — it queues the request and retries on next app launch
- [ ] A `data_deletion_requested` event fires BEFORE the deletion (for audit trail) with `request_source: "in_app"` and `data_types_requested: ["analytics", "profile"]`
- [ ] After deletion, the user is assigned a new anonymous PostHog `distinct_id` — their future activity is not linkable to their previous profile

**Definition of Done:** A test user requesting deletion has their PostHog profile removed within 30 days (PostHog's deletion SLA); local PostHog storage is cleared immediately.

---

### Story 9.4 — Privacy Manifest & App Store Compliance

**As a** developer,  
**I want** the PostHog SDK's data collection accurately declared in Apple's Privacy Manifest,  
**So that** the app passes App Store review and the privacy nutrition label is accurate.

**Priority:** Must Have  
**Points:** 3  

**Acceptance Criteria:**

- [ ] The `PrivacyInfo.xcprivacy` file (or the app's existing privacy manifest) is updated to declare PostHog's data collection:
  | Data Type | Purpose | Linked to Identity | Tracking |
  |-----------|---------|-------------------|----------|
  | Device ID | Analytics | No (when ATT denied) / Yes (when ATT authorized) | Conditional |
  | Product Interaction | Analytics, App Functionality | Yes | No |
  | Other Usage Data | Analytics | No | No |
- [ ] The manifest declares PostHog's required reason APIs:
  - `NSPrivacyAccessedAPICategoryUserDefaults` — reason: `"CA92.1"` (app functionality)
  - `NSPrivacyAccessedAPICategorySystemBootTime` — reason: `"35F9.1"` (measure time on device) — if PostHog SDK accesses it
- [ ] The privacy manifest is validated using Xcode's built-in privacy report generator (`xcodebuild -exportPrivacyReport`)
- [ ] The App Store Connect privacy questionnaire answers are documented in this story for the team to reference during submission

**Definition of Done:** `xcodebuild -exportPrivacyReport` produces a clean report with PostHog's data types declared; no App Store review rejections related to privacy manifest.

---

## Epic 10 — A/B Testing & Experimentation Framework

> **Goal:** Leverage PostHog's experimentation platform to run controlled A/B tests on key conversion and engagement flows — starting with paywall optimisation and onboarding variants.  
> **Priority:** Should Have  
> **Epic Points:** 18  

---

### Story 10.1 — Experimentation Infrastructure Setup

**As a** developer,  
**I want** a reusable experiment evaluation pattern,  
**So that** any view can check its experiment variant and track exposure without boilerplate.

**Priority:** Should Have  
**Points:** 5  

**Acceptance Criteria:**

- [ ] A new `ExperimentManager` service wraps PostHog's feature flags for A/B test-specific logic
- [ ] The manager provides:
  ```swift
  func variant(for experiment: String) -> String  // "control", "test", "variant_a", etc.
  func trackExposure(experiment: String, variant: String)
  ```
- [ ] `trackExposure` calls `analyticsService.capture("$feature_flag_called")` with PostHog's expected properties for automatic experiment analysis
- [ ] A SwiftUI ViewModifier `.experiment(_ key: String, onVariant: (String) -> some View)` enables declarative variant rendering:
  ```swift
  SomeView()
      .experiment("paywall_redesign") { variant in
          switch variant {
          case "control": PaywallV1()
          case "test": PaywallV2()
          default: PaywallV1()
          }
      }
  ```
- [ ] Experiment assignments are sticky — once a user receives a variant, they see the same variant for the experiment's duration (PostHog handles this via `distinct_id`)
- [ ] Exposure tracking fires ONCE per session per experiment (not on every re-render)
- [ ] `ExperimentManager` is injected via environment, following the same `@Observable` pattern as other services

**Definition of Done:** A test experiment with two variants renders different views for different users; PostHog's Experimentation tab shows variant distribution.

---

### Story 10.2 — Paywall A/B Test Instrumentation

**As a** product manager,  
**I want** to A/B test different paywall designs, copy, and pricing presentation,  
**So that** I can data-drive paywall optimisation and increase trial-to-paid conversion.

**Priority:** Should Have  
**Points:** 5  

**Acceptance Criteria:**

- [ ] Experiment: `paywall_redesign_v1` with variants:
  | Variant | Description | Key Differences |
  |---------|-------------|-----------------|
  | `control` | Current paywall (MembershipView) | Existing layout, tier cards, social proof |
  | `test_social_proof` | Enhanced social proof | Animated user count, review quotes, trust badges |
  | `test_feature_focus` | Feature comparison emphasis | Side-by-side tier comparison table, checkmark grid |
- [ ] All existing paywall events (Story 4.1) include an `experiment_variant` property so conversion can be segmented by variant
- [ ] `paywall_viewed` includes `experiment_variant`, `paywall_version` (for long-term versioning)
- [ ] The experiment can be activated/deactivated from PostHog's dashboard without an app release
- [ ] Each variant renders from the same `MembershipView` using conditional layout driven by `ExperimentManager.variant(for: "paywall_redesign_v1")`
- [ ] The primary metric is `purchase_completed` rate per paywall impression
- [ ] Secondary metrics: `paywall_scrolled` depth, `time_on_paywall_s`, `plans_viewed_count`
- [ ] Statistical significance is monitored in PostHog's built-in experiment results — no manual calculation needed

**UX Acceptance Criteria:**

- [ ] The `test_social_proof` variant includes an animated counter showing "12,847 learners this month" with a subtle counting-up animation on appear — users should fall in love with this functionality and drool at the micro-animation that makes the social proof feel alive and trustworthy rather than static and ignorable
- [ ] The `test_feature_focus` variant presents a horizontally-scrollable comparison card with tier columns and animated checkmarks that spring into place on scroll — each tier column uses its branded gradient colours from `MembershipTier.gradientColors`

**Definition of Done:** Both test variants render correctly; PostHog's experiment dashboard shows variant-specific conversion rates with statistical significance indicators.

---

### Story 10.3 — Onboarding Flow A/B Test

**As a** product manager,  
**I want** to test an accelerated onboarding flow that gets users into their first game faster,  
**So that** I can determine if reducing onboarding friction improves Day-7 retention.

**Priority:** Could Have  
**Points:** 5  

**Acceptance Criteria:**

- [ ] Experiment: `onboarding_speed_v1` with variants:
  | Variant | Description | Steps |
  |---------|-------------|-------|
  | `control` | Current flow | Auth → Language Select → Dashboard → First Game |
  | `test_fast` | Accelerated | Skip auth (guest) → Auto-select EN→ES → Straight to Flash Cards |
- [ ] The `test_fast` variant:
  - Bypasses the SignInSheetView entirely (auto-creates guest profile)
  - Defaults to EN→ES language pair (can be changed later in settings)
  - Immediately opens FlashCardsView with a tutorial overlay for the first 3 cards
  - Shows auth prompt AFTER the first game completion (lower friction first-value)
- [ ] All onboarding funnel events (Story 7.1) include `experiment_variant` property
- [ ] Primary metric: Day-7 retention (tracked via `retention_checkpoint` events)
- [ ] Secondary metrics: time-to-first-game, onboarding completion rate, first-game accuracy
- [ ] Guard rail metric: trial-start rate (ensure fast path doesn't skip trial activation — if user never sees paywall naturally, show it after 3rd game)

**UX Acceptance Criteria:**

- [ ] The `test_fast` variant's tutorial overlay on the first 3 flash cards uses gentle pulse animations on the swipe target area — users should fall in love with this functionality and drool at how the tutorial teaches interaction through beautiful animated hints rather than intrusive text instructions, making the first moments with the app feel guided yet effortless

**Definition of Done:** Both variants complete the onboarding sequence; PostHog tracks the full funnel for each variant; Day-7 retention is measurable per variant.

---

### Story 10.4 — Difficulty Adaptation A/B Test

**As a** product manager,  
**I want** to test whether more aggressive difficulty adaptation improves learning velocity without hurting engagement,  
**So that** I can optimise the balance between challenge and satisfaction.

**Priority:** Could Have  
**Points:** 3  

**Acceptance Criteria:**

- [ ] Experiment: `difficulty_adaptation_v1` with variants:
  | Variant | Description | Adaptation Speed |
  |---------|-------------|-----------------|
  | `control` | Current heuristic | Standard `SessionEngine` adaptation |
  | `test_aggressive` | Faster adaptation | Difficulty increases after 3 correct (vs 5), decreases after 2 incorrect (vs 3) |
  | `test_gentle` | Slower adaptation | Difficulty increases after 8 correct, decreases after 4 incorrect |
- [ ] Adaptation parameters are delivered via PostHog feature flag payloads (Story 5.4):
  ```json
  { "correct_threshold": 3, "incorrect_threshold": 2, "window_size": 10 }
  ```
- [ ] All game events include `difficulty_variant` property
- [ ] Primary metric: Average session accuracy (aiming for 70-85% — the "flow zone")
- [ ] Secondary metrics: games per session, session duration, game abandonment rate
- [ ] Guard rail: If accuracy drops below 50% for any variant, the experiment auto-stops (monitored via PostHog alert)

**Definition of Done:** Three difficulty variants produce measurably different accuracy distributions; PostHog experiment results show impact on session duration.

---

## Epic 11 — Dashboards, Alerts & Operational Readiness

> **Goal:** Create PostHog dashboards and alerts that give product, engineering, and leadership real-time visibility into app health, user engagement, and revenue metrics — making PostHog the team's daily command centre.  
> **Priority:** Should Have  
> **Epic Points:** 10  

---

### Story 11.1 — Product Health Dashboard

**As a** product manager,  
**I want** a single PostHog dashboard showing daily engagement, conversion, and retention KPIs,  
**So that** I can monitor product health at a glance every morning.

**Priority:** Should Have  
**Points:** 3  

**Acceptance Criteria:**

- [ ] A PostHog dashboard named "LumenLingo — Product Health" is created with these panels:
  | Panel | Visualisation | Data Source |
  |-------|--------------|-------------|
  | DAU / WAU / MAU | Trend line | Unique users per `app_opened` |
  | Session Duration Distribution | Histogram | `app_backgrounded.foreground_duration_s` |
  | Games Played (by type) | Stacked bar | `game_completed.game_type` |
  | Average Accuracy (by game) | Trend line | `game_completed.accuracy_pct` grouped by `game_type` |
  | Onboarding Funnel | Funnel | Steps from `onboarding_started` → `onboarding_completed` |
  | Trial → Paid Conversion | Funnel | `trial_started` → `purchase_completed` |
  | Practice Limit Hit Rate | Percentage | `practice_limit_reached` / unique free users |
  | Feature Usage Heatmap | Table | Count of events per `PremiumFeature` |
  | Top Language Pairs | Bar chart | `game_started.language_pair` distribution |
  | D1/D7/D30 Retention | Retention table | `retention_checkpoint` events |
- [ ] The dashboard uses PostHog's date filter defaulting to "Last 7 days"
- [ ] Each panel has a comparison toggle showing week-over-week change
- [ ] The dashboard is shared with the team and bookmarked as the PostHog project's default dashboard

**Definition of Done:** Dashboard loads in < 3 seconds; all 10 panels render with real data from at least one full day of analytics.

---

### Story 11.2 — Revenue & Subscription Dashboard

**As a** product manager,  
**I want** a dedicated revenue dashboard showing MRR, conversion rates, and churn metrics,  
**So that** I can track revenue health and identify subscription issues immediately.

**Priority:** Should Have  
**Points:** 3  

**Acceptance Criteria:**

- [ ] A PostHog dashboard named "LumenLingo — Revenue" is created with these panels:
  | Panel | Visualisation | Data Source |
  |-------|--------------|-------------|
  | Total Purchases (by tier) | Stacked bar | `purchase_completed.plan_tier` |
  | Purchase Conversion Funnel | Funnel | `paywall_viewed` → `purchase_started` → `purchase_completed` |
  | Trial Conversion Rate | Trend | `trial_converted` / (`trial_converted` + `trial_expired`) |
  | Paywall Conversion by Context | Bar | `purchase_completed` rate grouped by `paywall_context` |
  | Upgrade Prompt Effectiveness | Table | `upgrade_prompt_action.action = "tapped_upgrade"` / `upgrade_prompt_shown` |
  | Subscription Churn Rate | Trend | `subscription_expired` / total active subscribers |
  | Revenue by Plan | Pie chart | `purchase_completed.plan_price` grouped by `plan_tier` |
  | Billing Failure Rate | Trend | `subscription_renewal_failed` / `subscription_renewed` |
- [ ] Revenue panels use currency-aware formatting
- [ ] The dashboard includes a "Revenue Alerts" text panel documenting active alert conditions

**Definition of Done:** Revenue dashboard shows conversion funnels with real purchase data; paywall context segmentation works.

---

### Story 11.3 — Engineering Alerts & Anomaly Detection

**As a** developer,  
**I want** automated PostHog alerts for critical anomalies,  
**So that** I'm notified immediately when errors spike, frame drops increase, or conversion drops unexpectedly.

**Priority:** Should Have  
**Points:** 2  

**Acceptance Criteria:**

- [ ] The following PostHog alerts are configured:
  | Alert Name | Condition | Threshold | Channel |
  |------------|-----------|-----------|---------|
  | Error Spike | `error_occurred` count in 1 hour | > 50 | Slack #lumen-alerts |
  | Critical Error | `error_occurred` with `severity: "critical"` | > 1 | Slack #lumen-alerts + PagerDuty |
  | Frame Drop Surge | `frame_drop_detected` unique users in 1 day | > 10% of DAU | Slack #lumen-engineering |
  | Purchase Failure Spike | `purchase_failed` in 1 hour | > 5 | Slack #lumen-revenue |
  | Conversion Drop | `purchase_completed` daily count drops | > 30% WoW | Slack #lumen-revenue |
  | Onboarding Drop-Off | `onboarding_completed` daily rate | < 40% | Slack #lumen-product |
  | Content Load Failures | `content_load_slow` in 1 hour | > 20 | Slack #lumen-engineering |
- [ ] Each alert includes a link to the relevant PostHog dashboard for immediate investigation
- [ ] Alerts use PostHog's built-in anomaly detection where available (not just static thresholds)
- [ ] Alert thresholds are documented and reviewed quarterly

**Definition of Done:** A simulated error spike triggers the Slack alert within 5 minutes.

---

### Story 11.4 — Analytics Health Monitoring & Self-Diagnostics

**As a** developer,  
**I want** to know if analytics instrumentation itself is healthy — events are flowing, no silent failures,  
**So that** I can trust the data and quickly identify instrumentation regressions.

**Priority:** Should Have  
**Points:** 2  

**Acceptance Criteria:**

- [ ] A `diagnostics_heartbeat` event fires once per app session (on first `app_opened`) with:
  | Property | Description |
  |----------|-------------|
  | `sdk_version` | PostHog iOS SDK version |
  | `events_in_queue` | Number of unsent events in PostHog's local queue |
  | `last_flush_success` | Whether the last flush succeeded |
  | `flags_loaded` | Whether feature flags are loaded |
  | `consent_status` | Current consent state |
  | `opt_out_status` | Whether the user has opted out |
- [ ] A PostHog alert fires if `diagnostics_heartbeat` events drop below 80% of expected DAU (indicates SDK initialisation failures)
- [ ] The QAPanelView shows an "Analytics Health" section displaying:
  - SDK version
  - Events captured this session
  - Last flush time
  - Feature flags loaded count
  - Consent status
- [ ] If the PostHog SDK fails to initialise, a local log entry (via `os.Logger`) captures the failure reason — this is NOT sent to PostHog (since it's not available)

**Definition of Done:** `diagnostics_heartbeat` appears in PostHog for every active user; QAPanelView shows health status.

---

## Appendix A — Event Naming Conventions

All events follow these rules:

| Rule | Convention | Example |
|------|-----------|---------|
| Format | `object_action` | `game_started` |
| Case | `snake_case` | `card_flipped` |
| Tense | Past tense for completed actions | `purchase_completed` |
| Prefix | No prefix for app events; `$` prefix reserved for PostHog system events | `screen_viewed` (not `$screen`) |
| Max length | 50 characters | — |
| Uniqueness | Every event name is unique across the entire taxonomy | Enforced by unit test |

**Event Categories:**

| Prefix | Domain | Examples |
|--------|--------|---------|
| `app_` | App lifecycle | `app_opened`, `app_backgrounded` |
| `auth_` | Authentication | `auth_started`, `auth_succeeded` |
| `onboarding_` | First-time user flow | `onboarding_started`, `onboarding_completed` |
| `game_` | Game session lifecycle | `game_started`, `game_completed` |
| `card_` | Flash Cards specifics | `card_flipped`, `card_answered` |
| `grammar_` | Grammar game specifics | `grammar_answered` |
| `word_` | Word Builder specifics | `word_submitted` |
| `practice_` | Practice time | `practice_limit_reached` |
| `paywall_` | Paywall interactions | `paywall_viewed`, `paywall_dismissed` |
| `purchase_` | Purchase flow | `purchase_started`, `purchase_completed` |
| `trial_` | Trial lifecycle | `trial_started`, `trial_expired` |
| `subscription_` | Subscription management | `subscription_renewed`, `subscription_cancelled` |
| `feature_flag_` | Feature flag operations | `feature_flag_evaluated` |
| `setting_` | Settings changes | `setting_changed` |
| `retention_` | Retention checkpoints | `retention_checkpoint` |
| `habit_` | Habit formation milestones | `habit_formed` |
| `upgrade_prompt_` | Upsell interactions | `upgrade_prompt_shown` |
| `error_` | Runtime errors | `error_occurred` |
| `frame_drop_` | Performance | `frame_drop_detected` |
| `content_load_` | Content loading | `content_load_slow` |
| `audio_` | Audio performance | `audio_latency_spike` |
| `diagnostics_` | System health | `diagnostics_heartbeat` |
| `consent_` | Privacy consent | `consent_granted`, `consent_revoked` |
| `att_` | App Tracking Transparency | `att_status_changed` |
| `data_deletion_` | GDPR deletion | `data_deletion_requested` |

---

## Appendix B — Property Taxonomy

### Standard Properties (on every event via super-properties)

| Property | Type | Description |
|----------|------|-------------|
| `membership_tier` | `String` | Current tier: `"free"`, `"trial"`, `"pro"`, `"elite"`, `"royal"` |
| `active_language_pair` | `String` | Active pair: `"en_es"`, `"en_ja"`, etc. |
| `theme_mode` | `Boolean` | `true` = dark mode |
| `is_trial_active` | `Boolean` | Whether trial period is active |
| `days_since_install` | `Int` | Calendar days since first launch |
| `total_xp` | `Int` | Cumulative XP |
| `current_streak` | `Int` | Active daily streak |
| `app_version` | `String` | Short version string |
| `build_number` | `String` | Build number |
| `os_version` | `String` | iOS version |
| `device_model` | `String` | Hardware model identifier |
| `locale` | `String` | System locale |
| `is_offline` | `Boolean` | Whether device is offline |

### Game Event Properties (common across all game types)

| Property | Type | Required On |
|----------|------|-------------|
| `game_type` | `String` | All `game_*` events |
| `difficulty` | `String` | All `game_*` events |
| `language_pair` | `String` | All `game_*` events |
| `entry_source` | `String` | `game_started` |
| `accuracy_pct` | `Float` | `game_completed` |
| `total_duration_s` | `Float` | `game_completed` |
| `xp_earned` | `Int` | `game_completed` |
| `progress_pct` | `Float` | `game_abandoned` |

### Subscription Event Properties

| Property | Type | Required On |
|----------|------|-------------|
| `plan_id` | `String` | All `purchase_*`, `subscription_*` events |
| `plan_tier` | `String` | All `purchase_*`, `subscription_*` events |
| `plan_price` | `Float` | `purchase_started`, `purchase_completed` |
| `plan_currency` | `String` | `purchase_started`, `purchase_completed` |
| `paywall_context` | `String` | `paywall_*`, `purchase_started` |
| `transaction_id` | `String` | `purchase_completed` |

### User Properties (set via `identify`)

| Property | Type | Set Method | Updates When |
|----------|------|------------|-------------|
| `email` | `String` | `$set` | Auth, profile change |
| `first_name` | `String` | `$set` | Auth, profile change |
| `membership_tier` | `String` | `$set` | Tier change |
| `lifetime_revenue` | `Float` | `$set` | Purchase, renewal |
| `total_games_played` | `Int` | `$set` | Game completion |
| `first_seen_date` | `DateTime` | `$set_once` | First app open |
| `signup_method` | `String` | `$set_once` | First auth |
| `acquisition_source` | `String` | `$set_once` | First attributed open |
| `onboarding_completed` | `Boolean` | `$set_once` | Onboarding terminal event |
| `habit_formed_date` | `DateTime` | `$set_once` | Habit milestone |

---

**End of Document**

> **Next Steps:**
> 1. Engineering review and point estimation refinement
> 2. Create PostHog project and API keys for Dev/QA/Prod environments
> 3. Begin Epic 1 implementation (SDK Foundation)
> 4. Define PostHog dashboard structure in parallel with instrumentation
> 5. Schedule privacy review with compliance team (Epic 9 must be complete before Prod launch)
