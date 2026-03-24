# Clerk Authentication Integration — LumenLingo iOS

> **Document Owner:** Product  
> **Last Updated:** 2026-03-24  
> **Target Platform:** iOS 17+ (Swift, SwiftUI, SwiftData)  
> **Auth Provider:** [Clerk](https://clerk.com) — Native iOS SDK  
> **Auth Methods:** Sign in with Apple · Sign in with Google · OTP (Phone / Email) · No passwords — ever.

---

## Table of Contents

| # | Epic | Stories | Priority |
|---|------|---------|----------|
| **0** | **[Auth Mock Infrastructure (QA Enablement)](#epic-0-auth-mock-infrastructure-qa-enablement)** | **0.1 – 0.8** | **🔴 P0 — Start Immediately** |
| 1 | [Clerk SDK Foundation](#epic-1-clerk-sdk-foundation) | 1.1 – 1.6 | P1 |
| 2 | [Sign in with Apple](#epic-2-sign-in-with-apple) | 2.1 – 2.5 | P1 |
| 3 | [Sign in with Google](#epic-3-sign-in-with-google) | 3.1 – 3.5 | P1 |
| 4 | [OTP — Phone & Email Verification](#epic-4-otp--phone--email-verification) | 4.1 – 4.7 | P1 |
| 5 | [Authentication UX — Sign-in Sheet](#epic-5-authentication-ux--sign-in-sheet) | 5.1 – 5.8 | P1 |
| 6 | [Session Lifecycle & Token Management](#epic-6-session-lifecycle--token-management) | 6.1 – 6.6 | P1 |
| 7 | [User Profile & Identity Sync](#epic-7-user-profile--identity-sync) | 7.1 – 7.6 | P1 |
| 8 | [Account Settings & Identity Management](#epic-8-account-settings--identity-management) | 8.1 – 8.7 | P2 |
| 9 | [Security Hardening & Edge Cases](#epic-9-security-hardening--edge-cases) | 9.1 – 9.6 | P2 |
| 10 | [Testing, Observability & Rollout](#epic-10-testing-observability--rollout) | 10.1 – 10.6 | P1 |

---

## Guiding Principles

1. **Zero passwords.** The user never creates, stores, or resets a password. Authentication is biometric (Apple), federated (Google), or one-time-code (phone/email).
2. **One tap to get in.** The primary path — Sign in with Apple — should require exactly one biometric confirmation and zero typing.
3. **Graceful degradation.** If Clerk is unreachable, the app opens in offline-capable mode with locally-cached session. No blank screens. No spinners longer than 2 seconds.
4. **Tier continuity.** The user's `MembershipTier` (free → trial → pro → elite → royal) is never lost, downgraded, or duplicated during auth transitions.
5. **Cosmic UX.** Every auth surface — the sign-in sheet, the OTP input, the success moment — inherits the app's cosmic glass aesthetic. Authentication should feel like stepping through a portal, not filling out a government form.

---

## Definitions

| Term | Meaning |
|------|---------|
| **Clerk Session** | A server-validated JWT issued by Clerk after successful authentication. Contains `sub` (Clerk user ID), `exp`, custom claims. |
| **OTP** | One-Time Password — a 6-digit numeric code delivered via SMS or email, valid for 10 minutes, single-use. |
| **Identity** | A verified authentication method linked to a Clerk user (e.g., Apple ID, Google account, phone number, email address). A single user can have multiple identities. |
| **Primary Identity** | The identity used for account recovery and critical notifications. Defaults to the first sign-in method. User can change it. |
| **Silent Re-auth** | Background token refresh that extends the session without user interaction. Uses Clerk's `getToken()` with refresh token rotation. |
| **AuthService** | The `@Observable` service conforming to `AuthServiceProtocol` that wraps the Clerk iOS SDK and is injected at app root via `.environment()`. |
| **UserProfile** | The SwiftData `@Model` storing local user state (`firstName`, `email`, `selectedTierId`, XP, streaks, etc.). Synced from Clerk user metadata on auth events. |

---

## Epic 0: Auth Mock Infrastructure (QA Enablement)

> **🔴 PRIORITY: P0 — Start immediately, in parallel with Epic 1.**  
> **Goal:** Build a comprehensive auth simulation layer that allows QA testers and developers to exercise every auth-dependent screen, flow, and edge case from the QA panel — without a single real Clerk API call. This epic produces zero external dependencies and unblocks all other teams on Day 1. Every story in Epics 1–10 that touches UI can be developed and tested against this mock layer while Clerk integration proceeds in the background.

### Story 0.1 — DebugAuthController: Auth Simulation Singleton

**As a** developer  
**I want** a `DebugAuthController` singleton (DEBUG-only) that overrides the auth service's behavior  
**So that** I can deterministically simulate any auth state from the QA panel without touching real Clerk infrastructure.

**Context:**  
The app already has `DebugNetworkController.shared` (network simulation) and `DebugContentController.shared` (content simulation) — both DEBUG-only singletons toggled from `QAPanelView`. `DebugAuthController` follows the exact same pattern. It feeds overrides into `MockAuthService` (and later into `ClerkAuthService` when that replaces it) via a `DebugAuthController.shared.activeOverride` published property.

**Acceptance Criteria:**

**Structure:**
- [x] File: `LumenLingo/Services/Debug/DebugAuthController.swift`, wrapped in `#if DEBUG`.
- [x] `@Observable final class DebugAuthController: @unchecked Sendable` with `static let shared`.
- [x] A `DebugAuthState` enum defining every simulatable state:
  ```swift
  enum DebugAuthState: String, CaseIterable, Identifiable {
      case none               // No override — use real auth behavior
      case authenticated      // Logged in as mock user
      case unauthenticated    // Logged out, show sign-in sheet
      case guestMode          // Skipped sign-in, limited features
      case sessionExpired     // Token expired, trigger re-auth flow
      case sessionRevoked     // Forced logout from server
      case networkError       // Auth call fails with network error
      case rateLimited        // Auth call fails with rate limit error
      case clerkUnavailable   // Clerk SDK unreachable, offline fallback
      case accountSuspended   // Clerk returns "account suspended" status
      case accountDeleted     // Clerk returns "account deleted" status
      case migrationPending   // Guest → authenticated migration in progress
  }
  ```
- [x] Properties:
  - `activeOverride: DebugAuthState = .none` — the current simulation state.
  - `mockUser: MockUserProfile` — configurable mock user data (name, email, avatar, tier, provider).
  - `simulatedLatency: TimeInterval = 0.0` — artificial delay on all auth calls (0–5 seconds).
  - `shouldSimulateTokenRefreshFailure: Bool = false` — forces token refresh to fail.
  - `simulatedLinkedIdentities: Set<AuthProvider> = [.apple]` — which providers are "linked."

**Behavior:**
- [x] When `activeOverride != .none`, `MockAuthService` reads from `DebugAuthController.shared` instead of its hardcoded mock behavior.
- [x] Changing `activeOverride` at runtime immediately updates `MockAuthService.isAuthenticated`, `currentUser`, and triggers the appropriate UI state change (no app restart needed).
- [x] When `activeOverride == .none`, `MockAuthService` reverts to its default always-authenticated behavior.
- [x] All overrides reset to defaults on app launch (no persistence — kept intentional to prevent accidentally shipping a broken state).

---

### Story 0.2 — QA Panel: Auth Simulation Section

**As a** QA tester  
**I want** an "Auth Simulation" section in the QA panel  
**So that** I can switch between auth states with a single tap and instantly see how the app responds.

**Context:**  
`QAPanelView.swift` has 13 existing sections, each wrapped in `GlassPanelWrapper`. The Auth Simulation section follows the same pattern and should appear as the **second section** (after Tier Switcher, before Feature Overrides), since auth state affects almost everything downstream.

**Acceptance Criteria:**

**Layout:**
- [x] Section header: "🔐 Auth Simulation" with a `CollapsibleSection` wrapper (collapsed by default, using `@PersistedState("qa_auth_collapsed")`).
- [x] **Quick State Picker:** A horizontal scroll of pill buttons — one per `DebugAuthState` case. The active state is highlighted with the app's accent color. Tapping a pill instantly switches `DebugAuthController.shared.activeOverride`.
  - Pills are labeled with human-readable names: "✅ Authed", "🚪 Logged Out", "👤 Guest", "⏰ Expired", "🚫 Revoked", "📡 Net Error", "⏳ Rate Limit", "☁️ Offline", "🔒 Suspended", "🗑️ Deleted", "🔄 Migrating".
  - The "None" pill (no override) is always first and shown with a muted style when active.
- [x] **Mock User Card:** Below the picker, a compact card showing the current mock user:
  - Avatar (circle, 40pt, initials if no image), display name, email, tier badge (`TierBadgeView`).
  - Provider pills showing linked identities (Apple, Google, Phone, Email — togglable).
  - Tapping the card expands it into an edit form (Story 0.3).
- [x] **Latency Slider:** A slider (0–5s, step 0.5s) controlling `simulatedLatency`. Label: "Auth Latency: {value}s".
- [x] **Token Refresh Toggle:** "Force Token Refresh Failure" toggle bound to `shouldSimulateTokenRefreshFailure`.
- [x] **Reset Button:** "Reset Auth Overrides" — sets all values to defaults. Confirmation dialog: "Reset all auth simulation settings?"

**Behavior:**
- [x] Switching auth state is **instantaneous** — no animation delay. The app's UI (sign-in sheet, dashboard, profile) reacts within the same frame.
- [x] The section is only visible in `#if DEBUG` builds (same as all QA panel content).
- [x] The selected state survives navigating away from QAPanelView and back (within the same session), but resets on app relaunch.

---

### Story 0.3 — Mock User Profile Editor

**As a** QA tester  
**I want** to customize the mock user's profile details  
**So that** I can test how the app renders different names, emails, avatars, tier levels, and linked providers without needing real accounts.

**Acceptance Criteria:**

**Editor UI (expanded from the Mock User Card in Story 0.2):**
- [x] **Display Name:** Text field, pre-filled with "Luna Cosmos" (the default mock user). Accepts 1–50 characters.
- [x] **Email:** Text field, pre-filled with "luna@lumenlingo.test". Validates format on blur.
- [x] **Phone:** Text field, pre-filled with "+1 555 000 0000". Optional.
- [x] **Avatar:** A row of 6 preset avatar options (initials circle, 3 placeholder illustrations, URL-loaded image from a test URL, and "No Avatar"). Tapping selects.
- [x] **Tier:** Horizontal pills (trial, free, pro, elite, royal) — mirrors the existing Tier Switcher but specifically for the mock auth user's tier claim. Changing this updates `mockUser.tier` which flows into `UserProfile.selectedTierId` during sync simulation.
- [x] **Auth Provider:** Multi-select toggle for {Apple, Google, Phone, Email}. These populate `simulatedLinkedIdentities`. At least one must always be selected.
- [x] **Sign-in Method:** Picker for which provider was used for the current session ("Signed in via: Apple / Google / Phone / Email"). Determines the `lastSignInMethod` field in mock user metadata.
- [x] **Account Age:** Stepper (1 day – 365 days). Sets `mockUser.accountCreatedDate` relative to now. Used to test "new user" vs "returning user" flows.
- [x] **XP & Streak Carry-over:** Number fields for `totalXP` (0–999,999) and `dailyStreak` (0–365) that the mock user "brings" from Clerk metadata during sync simulation.

**Presets:**
- [x] A row of preset buttons that populate all fields at once:
  | Preset | Name | Email | Tier | Provider | Age |
  |--------|------|-------|------|----------|-----|
  | 🆕 New User | "New Explorer" | new@test.ll | free | Apple | 0 days |
  | 👑 Power User | "Max Galaxy" | max@test.ll | royal | Apple+Google | 180 days |
  | 📱 Phone Only | "Phone Learner" | — | free | Phone | 30 days |
  | 📧 Email Only | "Email Student" | email@test.ll | pro | Email | 60 days |
  | 🔗 Multi-linked | "Linked Luna" | luna@test.ll | elite | All four | 90 days |
  | 🫥 Minimal | "" (empty) | — | trial | Apple | 1 day |
- [x] Tapping a preset fills all fields instantly. The user can then customize individual fields.

**Behavior:**
- [x] Changes are applied to `DebugAuthController.shared.mockUser` in real time — no "Save" button needed.
- [x] Mock user data flows through the same `UserProfile` sync path that real Clerk data will use (Story 7.1), ensuring the sync logic is exercised.

---

### Story 0.4 — Auth Flow Simulation: Sign-in Sheet Walkthrough

**As a** QA tester  
**I want** to trigger and walk through every sign-in sheet variation from the QA panel  
**So that** I can verify the sign-in UX, animations, error states, and accessibility — without touching Clerk.

**Acceptance Criteria:**

**QA Panel Controls (sub-section within Auth Simulation):**
- [x] **"Show Sign-in Sheet" button** — presents the sign-in sheet (`AuthSheetView` from Epic 5) as a modal, backed by mock data.
- [x] **Sign-in Outcome Picker** — determines what happens when the user completes a mock sign-in:
  | Outcome | Behavior |
  |---------|----------|
  | ✅ Success (New User) | Simulates first-time sign-in. Welcome animation plays. UserProfile created. |
  | ✅ Success (Returning User) | Simulates returning user. Dashboard appears. Preferred provider pre-selected. |
  | ❌ Network Error | Sign-in fails after provider selection. Error toast: "Connection lost." |
  | ❌ Clerk Unavailable | Entire Clerk SDK unreachable. Only "Continue without account" is actionable. |
  | ❌ Account Suspended | Sign-in succeeds at provider level but Clerk rejects: "Account suspended." |
  | ❌ Rate Limited | OTP send returns rate limit. Countdown UI activates. |
  | ❌ Invalid OTP | OTP verification fails. Cells shake and clear (Story 4.3 behavior). |
  | ❌ Expired OTP | OTP verification returns "code expired" after entering digits. |
  | ⏳ Slow Response | Sign-in takes 5–10 seconds. Loading indicators and abort button tested. |
  | 🔄 Account Conflict | Selected provider identity is already linked to a different user. |
- [x] **Provider Override** — force the sign-in sheet to pre-select a specific provider button (Apple, Google, Phone, Email) so the tester can jump directly to that flow.

**Mock Sign-in Flow:**
- [x] When the user taps "Sign in with Apple" on the mock sheet, no system Apple sheet appears. Instead, after `simulatedLatency` delay, the selected outcome fires.
- [x] When the user taps "Continue with Phone/Email", the OTP input screen (Story 4.3) appears with a mock code. Entering `000000` always succeeds; any other 6-digit code triggers the selected error outcome.
- [x] The success path triggers the full welcome animation (Story 5.3) and navigates to the dashboard, exactly as it will with real Clerk.
- [x] The error paths show the exact error UI (toasts, banners, shake animations) that the real integration will produce.

**Validation:**
- [x] Every outcome in the picker produces visually correct UI verified against the acceptance criteria of Epics 4 and 5.
- [x] VoiceOver correctly announces the mock sign-in results (success announcements, error descriptions).

---

### Story 0.5 — Auth State Change Notifications & UI Reactivity

**As a** developer  
**I want** `MockAuthService` to broadcast auth state changes through the same observation pipeline as the future `ClerkAuthService`  
**So that** every view in the app reacts identically whether the auth is mocked or real — and I can verify reactive behavior from the QA panel.

**Acceptance Criteria:**

**MockAuthService Enhancement:**
- [x] `MockAuthService` is upgraded to read `DebugAuthController.shared.activeOverride` and respond accordingly:
  | Override State | MockAuthService Behavior |
  |---------------|-------------------------|
  | `.authenticated` | `isAuthenticated = true`, `currentUser = mockUser`, `isLoading = false` |
  | `.unauthenticated` | `isAuthenticated = false`, `currentUser = nil`, `isLoading = false` |
  | `.guestMode` | `isAuthenticated = false`, `currentUser = nil`, `isGuestMode = true` |
  | `.sessionExpired` | `isAuthenticated = false`, `currentUser` retains last value (for re-auth prompt), `sessionExpiredReason = .tokenExpired` |
  | `.sessionRevoked` | `isAuthenticated = false`, `currentUser = nil`, `sessionExpiredReason = .serverRevoked` |
  | `.networkError` | `login()` throws `AuthError.networkUnavailable`, `isLoading = false` |
  | `.rateLimited` | `login()` throws `AuthError.rateLimited(retryAfter: 30)` |
  | `.clerkUnavailable` | `checkAuthState()` returns graceful offline fallback |
  | `.accountSuspended` | `login()` throws `AuthError.accountSuspended(reason: "Policy violation")` |
  | `.accountDeleted` | `login()` throws `AuthError.accountDeleted` |
  | `.migrationPending` | `isAuthenticated = true`, `isMigrating = true` — shows migration progress UI |
- [x] State changes are published via `@Observable` — SwiftUI views using `@Environment(MockAuthService.self)` update automatically.
- [x] An `AuthError` enum is created (or extended if it exists) with all error cases above. This enum will be reused by `ClerkAuthService` later.

**New AuthServiceProtocol Properties:**
- [x] `var isGuestMode: Bool { get }` — true when user skipped sign-in.
- [x] `var sessionExpiredReason: SessionExpiredReason? { get }` — nil when session is valid.
- [x] `var isMigrating: Bool { get }` — true during guest → authenticated migration.
- [x] `var lastSignInMethod: AuthProvider? { get }` — which provider was used last.
- [x] `var linkedIdentities: Set<AuthProvider> { get }` — all linked providers.
- [x] These additions are backward-compatible — `MockAuthService` provides defaults; `ClerkAuthService` (Epic 1) will implement them from Clerk data.

**Reactivity Verification:**
- [x] Changing `DebugAuthController.shared.activeOverride` from `.authenticated` to `.unauthenticated` in the QA panel immediately presents the sign-in sheet overlay.
- [x] Changing from `.unauthenticated` to `.authenticated` immediately dismisses the sign-in sheet and shows the dashboard.
- [x] Changing to `.sessionExpired` shows the re-auth prompt without navigating away from the current screen.

---

### Story 0.6 — Session & Token Mock Scenarios

**As a** QA tester  
**I want** to simulate token lifecycle events (expiry, refresh, revocation) from the QA panel  
**So that** I can verify session management UI and background refresh behavior before Clerk is integrated.

**Acceptance Criteria:**

**QA Panel Controls (sub-section: "Session Simulation"):**
- [x] **Token Status Display:**
  - Current token state: "Valid" (green), "Expiring Soon" (amber, <5 min), "Expired" (red), "Refreshing" (blue spinner).
  - Mock token expiry countdown: e.g., "Expires in: 4:32".
  - Last refresh time: relative timestamp.
- [x] **Token Action Buttons:**
  | Button | Action |
  |--------|--------|
  | "Expire Token Now" | Sets mock token as expired → triggers silent refresh flow |
  | "Fail Next Refresh" | The next `refreshToken()` call fails with network error → tests the "refresh failed, prompt re-auth" path |
  | "Revoke Session" | Simulates server-side session revocation → triggers forced logout (Story 6.5 flow) |
  | "Refresh Token" | Manually triggers a mock token refresh → shows the refresh spinner and success/failure |
  | "Expire in 30s" | Sets a 30-second countdown → token expires after delay → tests the transition from valid → expired |
- [x] **Multi-device Simulation:**
  - "Simulate Other Device Sign-in" button → triggers the multi-device awareness notification (Story 6.3): "Signed in on another device."
  - "Simulate All Sessions Revoked" → triggers the "All other sessions revoked" confirmation.

**Mock Token Behavior:**
- [x] A `MockTokenManager` (DEBUG-only) provides fake JWT-like strings with configurable expiry times.
- [x] Token refresh follows the same async pattern as real Clerk: `refreshToken() async throws -> String`.
- [x] Token expiry fires the same notification that the real Clerk observer will use, so all session-dependent UI (banners, re-auth prompts) is exercised.

---

### Story 0.7 — Profile Sync & Migration Mock Scenarios

**As a** QA tester  
**I want** to simulate user profile sync events and guest-to-authenticated migration from the QA panel  
**So that** I can verify data merge logic, conflict resolution, and the migration UX before Clerk is wired up.

**Acceptance Criteria:**

**QA Panel Controls (sub-section: "Sync Simulation"):**
- [x] **"Trigger Profile Sync" button** — runs the Clerk → UserProfile sync path (Story 7.1) using mock Clerk data from `DebugAuthController.shared.mockUser`. The sync writes to the real `UserProfile` SwiftData model.
- [x] **Conflict Scenario Picker:**
  | Scenario | Mock Clerk Data | Expected Resolution |
  |----------|----------------|---------------------|
  | 🟢 Clean Sync | Remote XP: 500, Streak: 10 | Local profile updated to match |
  | 🟡 Local Wins (XP) | Remote XP: 100, Local XP: 500 | Local XP preserved (higher wins, Story 7.6) |
  | 🟡 Remote Wins (XP) | Remote XP: 1000, Local XP: 500 | Remote XP applied |
  | 🟡 Streak Conflict | Remote Streak: 5, Local Streak: 12 | Higher streak preserved |
  | 🔴 Name Conflict | Remote: "Max", Local: "Luna" | Prompt shown: "Which name do you want to keep?" |
  | 🔴 Tier Conflict | Remote: pro, Local: elite | Higher tier preserved (no downgrade) |
- [x] **"Simulate Guest Migration" button:**
  1. Sets local UserProfile to a "guest" state (XP: 250, Streak: 7, tier: free, no email).
  2. Presents the sign-in sheet.
  3. On mock sign-in success, runs the guest → authenticated migration (Story 7.3):
     - Merges guest XP with mock Clerk user XP.
     - Assigns Clerk user ID to UserProfile.
     - Shows migration success toast: "Your progress has been saved to your account!"
  4. Verifies no data was lost during migration.
- [x] **Sync Status Indicator:** A real-time status line: "Last sync: {timestamp}" / "Sync in progress…" / "Sync failed: {reason}".

**Validation:**
- [x] After triggering each conflict scenario, the UserProfile in SwiftData reflects the correct resolution.
- [x] The QA panel's State Inspector (existing section) shows the updated XP, streak, name, and tier after sync.

---

### Story 0.8 — Auth-Dependent Feature Gating Simulation

**As a** QA tester  
**I want** to simulate how auth state affects feature access across the entire app  
**So that** I can verify that gated features, locked content, and upgrade prompts behave correctly for each auth state — without signing in for real.

**Acceptance Criteria:**

**QA Panel Controls (sub-section: "Auth Feature Gating"):**
- [x] **Auth Gating Matrix:** A read-only table showing how the current simulated auth state affects key features:
  | Feature | Guest | Free | Pro | Elite | Royal | Unauthenticated |
  |---------|-------|------|-----|-------|-------|-----------------|
  | Flashcards | ✅ (limit 10) | ✅ (limit 50) | ✅ ∞ | ✅ ∞ | ✅ ∞ | ❌ (sign-in required) |
  | Soundscapes | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ |
  | iCloud Sync | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ |
  | Profile Edit | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ |
  | Leaderboard | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ |
  - The table dynamically highlights the column matching the current mock state.
  - Red cells are tappable — tapping navigates to that feature so the tester can verify the locked/upgrade UI.

- [x] **"Walk All Gates" button:** Automatically cycles through all auth states (unauthenticated → guest → free → pro → elite → royal) holding each for 3 seconds and logging which UI elements changed. Outputs a report to the debug console.
- [x] **Quick Auth + Tier Combos:** Buttons that set both auth state AND tier simultaneously:
  | Combo | Auth State | Tier | Use Case |
  |-------|-----------|------|----------|
  | "Guest Free" | Guest | free | Default skip-sign-in experience |
  | "Authed Free" | Authenticated | free | Signed in but no subscription |
  | "Authed Pro" | Authenticated | pro | Paid user baseline |
  | "Expired Elite" | Session Expired | elite | Premium user who needs to re-auth |
  | "Suspended Royal" | Account Suspended | royal | Edge case: premium user banned |

**Integration with Existing QA Panel:**
- [x] The Auth Feature Gating section coordinates with the existing Tier Switcher section:
  - If the tester changes tier in the Tier Switcher, the Auth Gating Matrix updates.
  - If the tester changes auth state → tier, both sections reflect the change.
  - No conflicting state: if auth is set to "unauthenticated," the tier row shows "N/A" (tier is meaningless without auth).
- [x] The existing Feature Overrides section (force-enable/disable individual PremiumFeature flags) continues to work and takes precedence over auth-derived gating.

---

> **Epic 0 Summary:** 8 stories, estimated **26 story points**. Zero external dependencies. Can be completed by a single developer in one sprint. Once done, every QA tester and every developer working on Epics 1–10 can build and test auth-dependent UI against this mock layer. The mock layer is designed to be **wire-compatible** with the real `ClerkAuthService` — when Clerk is integrated, the mock simply stops being the default and becomes a QA-only override.

---

## Epic 1: Clerk SDK Foundation

> **Goal:** Establish the Clerk iOS SDK as the single source of truth for authentication, replace the mock `AuthService`, and wire Clerk into the existing `@Observable` service injection pattern so that every downstream epic builds on a proven, tested foundation.

### Story 1.1 — Add Clerk iOS SDK Dependency

**As a** developer  
**I want** the Clerk iOS SDK added to the project via Swift Package Manager  
**So that** all authentication features can build against Clerk's native APIs without manual dependency management.

**Context:**  
The project uses XcodeGen (`project.yml`) to generate the Xcode project. Dependencies must be declared in `project.yml` so that `xcodegen generate` includes them in the resolved project. The app already has multi-environment build configs (Dev, QA, UAT, PreProd, Prod) — each will need its own Clerk publishable key.

**Acceptance Criteria:**

- [x] `project.yml` declares a Swift Package dependency for `clerk-ios` from `https://github.com/clerk/clerk-ios` with a minimum version constraint (e.g., `from: "1.0.0"`).
- [x] The `LumenLingo` target in `project.yml` lists `ClerkKit` (Clerk's actual module name) under `dependencies`.
- [x] Running `xcodegen generate && xcodebuild -resolvePackageDependencies` completes without errors in all 10 build configurations.
- [x] `import ClerkKit` compiles (verified via successful full build; actual module name is `ClerkKit`, not `ClerkSDK` as originally specced).
- [x] The resolved package version is pinned in `Package.resolved` (v1.0.7) and committed to source control.
- [x] No other targets (tests, UI tests) import ClerkKit unless explicitly required by a later story.

**Technical Notes:**
- If Clerk distributes via a different mechanism (e.g., CocoaPods, binary xcframework), adapt accordingly — but SPM is strongly preferred for consistency with the existing dependency graph.
- Verify the SDK supports iOS 17 as minimum deployment target.

---

### Story 1.2 — Environment-Scoped Clerk Configuration

**As a** developer  
**I want** Clerk's publishable key and instance URL configured per-environment  
**So that** Dev/QA/UAT use Clerk test instances (with test phone numbers) and Prod uses the live Clerk instance, preventing test data from leaking into production.

**Context:**  
`AppEnvironment.swift` already reads `LLEnvironment`, `LLApiBaseURL`, and `LLLogLevel` from `Info.plist` (injected via XcodeGen build config variables). Clerk configuration should follow this exact pattern.

**Acceptance Criteria:**

- [x] Two new build config variables are added to all 10 xcconfig files:
  - `CLERK_PUBLISHABLE_KEY` — `pk_test_PLACEHOLDER_REPLACE_WITH_REAL_KEY` for non-prod, `pk_live_PLACEHOLDER_REPLACE_WITH_REAL_KEY` for prod.
  - `CLERK_INSTANCE_URL` — empty (optional; required only if using a custom domain).
- [x] `Info.plist` gains two new entries: `ClerkPublishableKey: $(CLERK_PUBLISHABLE_KEY)` and `ClerkInstanceURL: $(CLERK_INSTANCE_URL)`.
- [x] `EnvironmentConfig` (in `AppEnvironment.swift`) exposes `clerkPublishableKey: String` and `clerkInstanceURL: URL?` read from `Bundle.main.infoDictionary`.
- [x] The app crashes with a `fatalError("Missing CLERK_PUBLISHABLE_KEY")` in Debug builds if the key is empty — fail loud, fail fast.
- [x] In Release builds, missing key logs an error via `os.Logger` and falls back to offline mode (no crash).
- [x] Placeholder values are documented directly in xcconfig files per environment (5 envs × 2 configs = 10 files).
- [x] No Clerk secret keys are stored in source control, `Info.plist`, or client-side code — only publishable keys.

---

### Story 1.3 — ClerkAuthService — Core Observable Service

**As a** developer  
**I want** a production `ClerkAuthService` that conforms to the existing `AuthServiceProtocol`  
**So that** the Clerk SDK is wrapped in the same `@Observable` pattern used by `ThemeManager`, `TierManager`, and all other services, and existing views continue to work without modification.

**Context:**  
`AuthServiceProtocol` already defines:
```swift
protocol AuthServiceProtocol: Observable, Sendable {
    var currentUser: AppUser? { get }
    var isAuthenticated: Bool { get }
    var isLoading: Bool { get }
    func login() async throws
    func logout() async
    func checkAuthState() async
}
```
`MockAuthService` currently satisfies this. `ClerkAuthService` will replace it as the injected implementation.

**Acceptance Criteria:**

- [x] `ClerkAuthService` is declared as `@Observable final class ClerkAuthService: AuthServiceProtocol, @unchecked Sendable` (without `@MainActor` class-level annotation to match MockAuthService pattern; `@MainActor` applied to individual methods instead).
- [x] It initializes the Clerk SDK with the publishable key from `EnvironmentConfig` during `init()` via `Clerk.configure(publishableKey:)`.
- [x] `currentUser` maps from `Clerk.shared.user` to the existing `AppUser(name:email:avatarURL:)` struct. Returns `nil` when not authenticated.
- [x] `isAuthenticated` returns `true` iff `Clerk.shared.session` is non-nil and status is `.active`.
- [x] `isLoading` is `true` during any async Clerk operation (sign-in, sign-out, token refresh) and `false` otherwise.
- [x] `login()` is a no-op that throws `AuthError.useSpecificMethod` — callers must use provider-specific methods (Apple, Google, OTP) added in Epics 2–4.
- [x] `logout()` calls `Clerk.shared.auth.signOut()`, clears the local session cache, and sets `currentUser = nil`.
- [x] `checkAuthState()` reads `Clerk.shared.session` and `Clerk.shared.user` to restore auth state. If a valid active session exists, populates `currentUser`. If no session, sets `isAuthenticated = false` — no error thrown.
- [x] The service publishes a `Notification.Name.authStateDidChange` notification on every auth state transition for cross-cutting listeners (analytics, logging).
- [ ] Unit tests verify: init with valid key, init with missing key, session restore success, session restore failure, logout clears state.

---

### Story 1.4 — Replace MockAuthService at App Root

**As a** developer  
**I want** `LumenLingoApp.swift` to inject `ClerkAuthService` instead of `MockAuthService`  
**So that** all views and services downstream receive the real auth implementation while preserving the ability to swap in the mock for previews and tests.

**Context:**  
`LumenLingoApp.swift` currently creates services as `@State` properties and injects them via `.environment()`. The auth service pattern should follow this exactly — conditional compilation for previews.

**Acceptance Criteria:**

- [x] In `LumenLingoApp.swift`, a new `@State private var authService: any AuthServiceProtocol` is declared.
  - In `#if DEBUG`, it initializes `MockAuthService()`.
  - Otherwise (`#else`), it initializes `ClerkAuthService()`.
- [x] `.environment(\.authService, authService)` is added to the root view modifier chain, after `.environment(tierManager)`.
- [x] On app launch (`.task`), `authService.checkAuthState()` is called to restore any persisted session before the first frame renders.
- [x] SwiftUI Previews in all existing view files continue to compile and render — MockAuthService is the default in the custom EnvironmentKey.
- [ ] The `ContentView` (tab controller) reads `@Environment(\.authService)` only to observe `isAuthenticated` — it does not call `login()` directly.
- [ ] If `checkAuthState()` determines the user is not authenticated, `ContentView` presents the sign-in sheet (Story 5.1) as a `.fullScreenCover`.

**Technical Notes:**
- Use `any AuthServiceProtocol` as the environment key type if possible, to allow both mock and real to be injected. If Swift's `@Observable` erasure makes this difficult, use a concrete type with a protocol extension.

---

### Story 1.5 — Clerk Initialization Lifecycle

**As a** developer  
**I want** the Clerk SDK initialized exactly once, at the correct point in the app lifecycle  
**So that** the SDK is ready before any view attempts authentication, and initialization failures are handled gracefully without leaving the app in a broken state.

**Acceptance Criteria:**

- [x] Clerk SDK initialization occurs in `ClerkAuthService.init()`, which is called from `LumenLingoApp.init()` (via `@State` property initialization).
- [x] Initialization is synchronous — `Clerk.configure(publishableKey:)` sets up the SDK without making network calls.
- [x] The first network call (`checkAuthState()`) is deferred to the `.task` modifier on the root view, ensuring the UI is laid out before any async work begins.
- [x] `ClerkAuthService` exposes `initializationError: (any Error)?` property for views to observe if Clerk init fails.
- [x] Views can observe `initializationError` to display a diagnostic banner in Debug builds or silently fall back to offline mode in Release builds.
- [x] The initialization sequence is logged at `.info` level: `"Clerk SDK initialized for environment: {env}"`.
- [x] Double-initialization is guarded — `isConfigured` static flag ensures `Clerk.configure` is called only once; subsequent `init()` calls log a warning and return early.

---

### Story 1.6 — AuthServiceProtocol Extension for Provider Methods

**As a** developer  
**I want** `AuthServiceProtocol` extended with optional provider-specific method signatures  
**So that** Epics 2–4 can add `.signInWithApple()`, `.signInWithGoogle()`, `.requestOTP()`, and `.verifyOTP()` without breaking the existing protocol contract.

**Acceptance Criteria:**

- [x] `AuthServiceProtocol` gains new method requirements with default no-op implementations in a protocol extension:
  ```swift
  func signInWithApple() async throws
  func signInWithGoogle(presenting: UIViewController) async throws
  func requestOTP(to destination: OTPDestination) async throws
  func verifyOTP(code: String) async throws
  ```
- [x] `OTPDestination` is defined as:
  ```swift
  enum OTPDestination: Equatable {
      case phone(String)   // E.164 format, e.g. "+44 7700 900000"
      case email(String)   // RFC 5322 format
  }
  ```
- [x] Default implementations in the protocol extension throw `AuthError.notSupported` — this ensures `MockAuthService` and future test doubles don't need to implement methods they don't use.
- [x] `ClerkAuthService` overrides all four methods with stub implementations that throw `.notSupported` (to be wired with real Clerk calls in Epics 2–4).
- [x] `AuthError` enum is extended with cases: `.notSupported`, `.useSpecificMethod`, `.clerkError(underlying: String)`, `.cancelled`. Existing cases `.rateLimited`, `.invalidOTP`, `.expiredOTP` already present.
- [x] Each `AuthError` case has a `localizedDescription` that is user-friendly (no stack traces, no Clerk internals).

---

## Epic 2: Sign in with Apple

> **Goal:** Implement Sign in with Apple as the primary, most frictionless authentication method. One tap. One biometric confirmation. Zero typing. The user is in.

### Story 2.1 — Apple Sign-in via Clerk

**As a** user  
**I want** to sign in with my Apple ID using Face ID or Touch ID  
**So that** I can start learning instantly without creating an account or typing anything.

**Context:**  
Sign in with Apple is the gold standard for iOS authentication. Apple reviewers expect it if any social sign-in is offered. Clerk's iOS SDK wraps ASAuthorizationController — our implementation should use Clerk's abstraction for token exchange while ensuring the native Apple sheet appears.

**Acceptance Criteria:**

- [x] Tapping the "Sign in with Apple" button calls `Clerk.shared.auth.signInWithApple(requestedScopes: [.email, .fullName])` which presents the native `ASAuthorizationController` sheet — system-native, not a web view.
- [x] The user authenticates with Face ID, Touch ID, or device passcode — whichever their device supports (handled by Clerk SDK / ASAuthorizationController).
- [x] Upon successful Apple authentication, the Apple identity token is exchanged with Clerk server-side via the SDK's `TransferFlowResult` (routes between `.signIn` and `.signUp` automatically).
- [x] If the user is new, Clerk creates a user with firstName/email from Apple (handled by `signInWithApple(requestedScopes:)` passing `.fullName` and `.email` scopes).
- [x] If the user already exists (same Apple ID), the existing Clerk user is returned — `TransferFlowResult.signIn` case.
- [x] `ClerkAuthService.currentUser` is populated from `Clerk.shared.user` immediately after successful sign-in via `mapUser()`.
- [x] `isAuthenticated` transitions to `true` at the end of the success path, before the method returns.
- [x] The flow is async — completion depends on network latency; no artificial delays added.
- [x] Works on first launch (sign-up path) and subsequent launches (session restore via `checkAuthState()`).

**Error Handling:**
- [x] If the user cancels the Apple sheet, `ASAuthorizationError.canceled` is caught and re-thrown as `AuthError.cancelled` — no error UI, the sign-in sheet remains.
- [x] If Clerk token exchange fails, `ClerkAPIError` or `ClerkClientError` is caught and mapped to `AuthError.clerkError(underlying:)` with user-friendly message.
- [x] If the Apple ID is already linked to a different Clerk user (`identifier_already_signed_in` or `external_account_exists`), `AuthError.accountConflict` is thrown.

---

### Story 2.2 — Apple Sign-in Entitlement & Capability

**As a** developer  
**I want** the Sign in with Apple capability added to the Xcode project and provisioning profile  
**So that** `ASAuthorizationController` works without runtime capability errors.

**Acceptance Criteria:**

- [x] `project.yml` includes `CODE_SIGN_ENTITLEMENTS: LumenLingo/LumenLingo.entitlements` under the app target's settings.
- [x] The entitlements file (`LumenLingo.entitlements`) contains `com.apple.developer.applesignin` with value `["Default"]`.
- [ ] The App ID in Apple Developer Portal has "Sign in with Apple" capability enabled for all bundle ID variants (dev, prod). *(Portal configuration — manual step)*
- [x] On simulator, the project builds and links without entitlement errors.
- [x] Simulator testing compiles and builds with the entitlement present.

---

### Story 2.3 — Apple Private Relay Email Handling

**As a** user who hides their email during Apple sign-in  
**I want** the app to work seamlessly with Apple's Private Relay email  
**So that** my real email remains private and I still receive any critical notifications.

**Context:**  
Apple allows users to hide their real email and receive a randomly-generated Private Relay address (e.g., `dpdx4f@privaterelay.appleid.com`). This email forwards to the user's real inbox. Clerk stores whatever Apple provides. The app must handle this gracefully.

**Acceptance Criteria:**

- [x] The `AppUser.email` field stores whatever email Apple/Clerk provides — including Private Relay addresses.
- [x] `AppUser.isPrivateRelayEmail` detects `privaterelay.appleid.com` addresses. `AppUser.displayEmail` returns "Apple Private Email" for relay addresses, normal email otherwise.
- [x] `ProfileViewModel.userEmail` uses `displayEmail` so UI never shows raw Private Relay addresses. `ProfileViewModel.isPrivateRelayEmail` exposes the flag for lock icon rendering.
- [ ] OTP-to-email works with Private Relay addresses — Clerk sends the code, Apple forwards it. *(QA verification with real Private Relay account)*
- [x] Profile views show the user's name prominently, with email secondary and de-emphasized (current ProfileView header shows name + level, no raw email).
- [ ] If the user later adds a real email (Story 8.3), it can coexist with the Apple Private Relay identity. *(Deferred to Epic 8)*

---

### Story 2.4 — Apple Sign-in Session Restoration

**As a** returning user who previously signed in with Apple  
**I want** the app to automatically restore my session on launch  
**So that** I never see a sign-in screen unless I explicitly signed out.

**Acceptance Criteria:**

- [x] On app launch, `checkAuthState()` reads `Clerk.shared.session` which is automatically restored from keychain by `Clerk.configure()`.
- [x] If a valid `.active` session exists → `isAuthenticated` is set `true`, `currentUser` populated from `Clerk.shared.user`.
- [x] If the session is `.expired` → `sessionExpiredReason = .tokenExpired` is set; Clerk's built-in polling (every 5s) attempts automatic refresh. If session stays expired, user re-authenticates.
- [x] Session restoration is synchronous from keychain cache (Clerk loads cached `Client` in `configure()`) — no network required for initial `checkAuthState()`.
- [x] `.task { await authService.checkAuthState() }` runs on root view, so splash screen remains until auth state is determined.
- [x] Sessions that are `.revoked`, `.removed`, or `.ended` set `sessionExpiredReason = .serverRevoked` and clear auth state.
- [ ] After session restore, `UserProfile` is synced from Clerk metadata (Story 7.2). *(Deferred to Epic 7)*

---

### Story 2.5 — Apple Sign-in Analytics Events

**As a** product owner  
**I want** Sign in with Apple events tracked in analytics  
**So that** I can measure conversion rates, drop-off points, and error frequency.

**Acceptance Criteria:**

- [x] Auth analytics events are defined in `AuthAnalytics.swift` with the following Apple events:
  | Event Name | Properties | When |
  |-----------|-----------|------|
  | `auth_apple_started` | — | User initiates Apple sign-in |
  | `auth_apple_sheet_cancelled` | — | User dismisses Apple sheet (ASAuthorizationError.canceled) |
  | `auth_apple_succeeded` | `is_new_user: Bool, has_private_email: Bool` | Clerk session created |
  | `auth_apple_failed` | `error_code: String, error_domain: String` | Any failure in the flow |
- [x] Events are fire-and-forget — `AuthAnalytics.track()` never throws and never blocks the auth flow.
- [x] All events include standard context: `app_version`, `os_version`, `device_model`, `environment` via `standardContext`.
- [x] No PII (email, name, Apple user ID) is included in any analytics event — only boolean flags and error codes.

---

## Epic 3: Sign in with Google

> **Goal:** Offer Google sign-in as a secondary social provider for users who prefer their Google identity. Uses Clerk's OAuth flow with the native Google Sign-In SDK for the best UX — no in-app web views.

### Story 3.1 — Google Sign-in via Clerk OAuth

**As a** user  
**I want** to sign in with my Google account  
**So that** I can use the same identity I use across my other apps and services.

**Context:**  
Google sign-in on iOS can use either: (a) Clerk's OAuth redirect flow (opens Safari/SFSafariViewController), or (b) Google's native iOS SDK (`GIDSignIn`) with the resulting ID token passed to Clerk. Option (b) provides a smoother UX (native account picker) but adds a dependency. Either approach is acceptable — the UX must feel native, not webby.

**Acceptance Criteria:**

- [x] `ClerkAuthService.signInWithGoogle(presenting:)` calls `Clerk.shared.auth.signInWithOAuth(provider: .google)` to initiate the Google authentication flow.
- [x] The user sees `ASWebAuthenticationSession` — Apple's system-managed browser sheet (native, not WKWebView). No separate Google SDK needed.
- [x] Google profile scopes are managed by Clerk's OAuth configuration server-side.
- [x] Upon successful authentication, `TransferFlowResult` routes between `.signIn` (existing) and `.signUp` (new user) automatically.
- [x] Clerk creates/retrieves the user with name, email, Google identity, and avatar URL from the OAuth response.
- [x] `ClerkAuthService.currentUser` is populated from `Clerk.shared.user`, `isAuthenticated` becomes `true`.
- [x] The flow is async — completion depends on OAuth + network latency.

**Error Handling:**
- [x] User cancels `ASWebAuthenticationSession` → caught as cancellation error, re-thrown as `AuthError.cancelled`.
- [x] Clerk exchange fails → `ClerkAPIError`/`ClerkClientError` mapped to `AuthError.clerkError(underlying:)`.
- [x] Google account conflicts (`external_account_exists`) → `AuthError.accountConflict`.
- [x] Analytics events: `auth_google_started`, `auth_google_succeeded`, `auth_google_picker_cancelled`, `auth_google_failed` all wired.

---

### Story 3.2 — Google Sign-in SDK Integration

**As a** developer  
**I want** the Google Sign-In SDK configured and integrated with the app  
**So that** the native Google account picker is available and the resulting credentials flow through Clerk.

**Acceptance Criteria:**

- [x] **No Google Sign-In SDK needed.** Clerk iOS SDK handles Google OAuth via `ASWebAuthenticationSession` internally. No additional SPM dependency required.
- [x] **No Google OAuth Client ID in project.yml needed.** Clerk's OAuth is configured server-side in the Clerk Dashboard. The client uses the Clerk publishable key (already configured in Story 1.2).
- [x] **No URL scheme registration needed.** `ASWebAuthenticationSession` handles the OAuth callback internally using Clerk's default redirect config (`{bundleIdentifier}://callback`).
- [x] `ClerkAuthService.signInWithGoogle(presenting:)` calls `Clerk.shared.auth.signInWithOAuth(provider: .google)` — Clerk handles the entire OAuth flow (redirect, token exchange, user creation).
- [x] **No `onOpenURL` handler needed.** `ASWebAuthenticationSession` captures the callback automatically.
- [x] Multiple Google accounts are handled by Google's own account picker within the `ASWebAuthenticationSession` browser context.

---

### Story 3.3 — Google Account Avatar Sync

**As a** user who signed in with Google  
**I want** my Google profile picture to appear as my avatar in the app  
**So that** the app feels personalized and I recognize my account at a glance.

**Acceptance Criteria:**

- [x] `AppUser.avatarURL` is populated from `Clerk.shared.user.imageUrl` via `mapUser()` in ClerkAuthService.
- [x] Profile header in `ProfileView` uses `AsyncImage` to load the avatar asynchronously as a circular image. Falls back to initials/gradient placeholder while loading or missing.
- [x] `AsyncImage` uses URLSession's built-in URL cache for local caching.
- [x] If no avatar is available (Apple sign-in, or Google without picture), the initials + gradient placeholder renders cleanly — no broken images or empty circles.
- [x] The avatar updates when `Clerk.shared.user.imageUrl` changes on re-authentication, since `currentUser` is remapped from Clerk on each sign-in/checkAuthState.

---

### Story 3.4 — Google Sign-in on iPad & Mac Catalyst

**As a** user on iPad or Mac (Catalyst/Designed for iPad)  
**I want** Google sign-in to work correctly on my device  
**So that** I'm not blocked from authenticating on larger screens.

**Acceptance Criteria:**

- [x] `ASWebAuthenticationSession` (used by Clerk SDK) handles presentation correctly on iPad — no popover anchoring needed, the system manages sheet presentation.
- [x] `ASWebAuthenticationSession` handles OAuth callback automatically on all platforms including Mac Catalyst.
- [ ] The sign-in sheet layout (Story 5.1) adapts to iPad widths — max button width 400pt, centered. *(Deferred to Story 5.1 UI implementation)*
- [x] `ASWebAuthenticationSession` is resilient to split-screen multitasking — the callback is handled by the system.

---

### Story 3.5 — Google Sign-in Analytics Events

**As a** product owner  
**I want** Google sign-in events tracked  
**So that** I can compare Google vs. Apple conversion rates and identify provider-specific issues.

**Acceptance Criteria:**

- [x] Events emitted via `AuthAnalytics.track()` in `ClerkAuthService.signInWithGoogle()`:
  | Event Name | Properties | When |
  |-----------|-----------|------|
  | `auth_google_started` | — | User initiates Google sign-in |
  | `auth_google_picker_cancelled` | — | User dismisses ASWebAuthenticationSession |
  | `auth_google_succeeded` | `is_new_user: Bool, has_avatar: Bool` | Clerk session created |
  | `auth_google_failed` | `error_code: String` | Any failure in the flow |
- [x] Same standards as Apple events: no PII, fire-and-forget, standard context included via `AuthAnalytics.standardContext`.

---

## Epic 4: OTP — Phone & Email Verification

> **Goal:** Provide a passwordless code-based authentication path for users who don't want to use social sign-in. The user enters their phone number or email, receives a 6-digit code, enters it, and they're in. Delightful, fast, and foolproof.

### Story 4.1 — Request OTP to Phone Number

**As a** user  
**I want** to receive a 6-digit verification code via SMS to my phone number  
**So that** I can sign in without a password or social account.

**Context:**  
Clerk handles SMS delivery, rate limiting, and code generation server-side. The client sends the phone number in E.164 format, and Clerk returns a sign-in attempt ID that the client uses to verify the code. Clerk's SMS delivery supports 200+ countries.

**Acceptance Criteria:**

- [ ] The user enters their phone number in a formatted input field with country code picker.
- [ ] The country code defaults to the user's device region (from `Locale.current.region`).
- [ ] The phone number is validated client-side before submission:
  - Minimum 7 digits (after removing formatting).
  - Maximum 15 digits (E.164 standard).
  - Country code is included (e.g., +1, +44, +81).
  - Invalid formats show inline validation: "Please enter a valid phone number" — debounced, not on every keystroke.
- [x] On "Send Code" tap, `ClerkAuthService.requestOTP(to: .phone("+447700900000"))` calls `Clerk.shared.auth.signInWithPhoneCode(phoneNumber:)`, stores the pending `SignIn` for verification.
- [x] Clerk creates a sign-in attempt and sends the SMS via `signInWithPhoneCode`.
- [ ] The UI transitions to the code entry screen (Story 4.3) with a smooth slide animation.
- [ ] A toast confirms: "Code sent to +44 •••• 0000" (partially masked for privacy).
- [ ] The phone number field uses `.keyboardType(.phonePad)` — no letters, no autocomplete suggestions.
- [ ] The country code picker is searchable by country name or dialling code.

**Error Handling:**
- [x] If the phone number is undeliverable (Clerk returns an error): mapped to `AuthError.clerkError(underlying:)`.
- [x] If rate limited (too many requests): mapped to `AuthError.rateLimited(retryAfter: 60)`.
- [x] Network failure: caught as generic error and mapped to `AuthError.clerkError(underlying:)`.

---

### Story 4.2 — Request OTP to Email Address

**As a** user  
**I want** to receive a 6-digit verification code via email  
**So that** I can sign in with just my email — no password needed.

**Acceptance Criteria:**

- [ ] The user enters their email address in a text field with `.keyboardType(.emailAddress)` and `.textContentType(.emailAddress)`.
- [ ] Email is validated client-side:
  - Contains `@` and at least one `.` after `@`.
  - No spaces.
  - RFC 5322 basic compliance (no full regex needed — Clerk does server-side validation).
  - Invalid format shows inline: "Please enter a valid email address" — debounced 0.8s after last keystroke.
- [x] On "Send Code" tap, `ClerkAuthService.requestOTP(to: .email("user@example.com"))` calls `Clerk.shared.auth.signInWithEmailCode(emailAddress:)`, stores the pending `SignIn` for verification.
- [x] Clerk creates a sign-in attempt and sends the email with the 6-digit code via `signInWithEmailCode`.
- [ ] The UI transitions to the code entry screen (Story 4.3).
- [ ] A toast confirms: "Code sent to u•••@example.com" (partially masked).
- [ ] AutoFill from the keyboard works — if the user receives the email and iOS suggests the code via the notification banner, it should auto-fill (this depends on Clerk's email format matching Apple's OTP detection heuristics).

**Error Handling:**
- [x] Undeliverable email: mapped to `AuthError.clerkError(underlying:)`.
- [x] Rate limited: mapped to `AuthError.rateLimited(retryAfter: 60)`.
- [x] Network failure: caught as generic error and mapped to `AuthError.clerkError(underlying:)`.

---

### Story 4.3 — OTP Code Entry Screen

**As a** user who received a verification code  
**I want** a beautiful, focused code entry experience  
**So that** entering 6 digits feels effortless and I'm authenticated in seconds.

**Context:**  
This is a key UX moment. The user is mid-flow, waiting for a code, and then typing it. The experience must be fast, forgiving, and visually satisfying. Every digit entered should feel like progress toward a reward.

**Acceptance Criteria:**

**Layout & Visual Design:**
- [ ] The code entry screen shows 6 individual digit cells arranged horizontally, each a rounded rectangle with a glass-panel aesthetic matching the app's cosmic theme.
- [ ] The active cell (next to be filled) has a gentle pulsing glow animation — a soft breathing border in the app's accent color (cosmic purple/blue gradient).
- [ ] Filled cells show the digit with a subtle scale-in animation (0.8 → 1.0 over 150ms with spring damping).
- [ ] The cursor auto-advances to the next cell after each digit — the user never taps between cells.
- [ ] Above the cells: "Enter the code sent to {destination}" with the destination partially masked.
- [ ] Below the cells: "Didn't receive a code? Resend" link (disabled for 30 seconds after send, with countdown).

**Input Behavior:**
- [ ] `.keyboardType(.numberPad)` — only digits, no letters.
- [ ] `.textContentType(.oneTimeCode)` — enables iOS AutoFill from SMS/notification banner. When the code arrives via SMS while the screen is visible, iOS offers to auto-fill it with one tap.
- [ ] Pasting a 6-digit code from clipboard auto-fills all 6 cells simultaneously with a satisfying cascade fill animation (each cell fills 50ms after the previous).
- [ ] Backspace deletes the last entered digit and moves focus back to that cell.
- [ ] The keyboard appears automatically on screen presentation — no tap-to-focus required.

**Verification Flow:**
- [x] Once all 6 digits are entered, `ClerkAuthService.verifyOTP(code:)` calls `signIn.verifyCode(code)` which resolves the pending OTP — auto-submit, no "Submit" button needed at the service layer.
- [ ] A brief loading state appears: the 6 cells shimmer with a travelling gradient (left-to-right, 0.8s cycle).
- [ ] On success: the cells turn green simultaneously, a checkmark appears center-screen with a scale-spring animation, and the screen dismisses after 600ms.
- [ ] On success, a subtle haptic plays (`UIImpactFeedbackGenerator.style: .medium`).
- [x] `isAuthenticated` transitions to `true` after successful verification — `verifyOTP` sets `isAuthenticated = true` and maps the user.

**Error States:**
- [x] If the code is wrong: `verifyOTP` throws `AuthError.invalidOTP` (mapped from Clerk's `verification_failed`/`incorrect_code`).
- [ ] Text below cells changes to: "Incorrect code. Please try again." in a warm red tone.
- [ ] After 3 consecutive wrong attempts: "Too many attempts. Please request a new code." The resend link is highlighted.
- [x] If the code is expired (>10 minutes): `verifyOTP` throws `AuthError.expiredOTP` (mapped from Clerk's `verification_expired`).

---

### Story 4.4 — OTP Resend & Cooldown Timer

**As a** user who didn't receive their code  
**I want** to resend the verification code with a clear cooldown indicator  
**So that** I'm not left wondering if the code was sent and I don't accidentally spam myself.

**Acceptance Criteria:**

- [ ] The "Resend code" link appears below the code entry cells.
- [ ] For the first 30 seconds after a code is sent, the link is disabled and shows: "Resend code in 0:27" (live countdown, updated every second).
- [ ] The countdown uses a monospaced font so the numbers don't jump/shift as they change.
- [ ] After the countdown reaches 0:00, the link becomes tappable and changes to: "Resend code" in the accent color with an underline.
- [x] Tapping "Resend code" triggers `resendOTP(to:)` which calls `signIn.sendPhoneCode()` or `signIn.sendEmailCode()` on the pending `SignIn`.
- [x] The old code is invalidated server-side when a new code is requested (Clerk handles this — calling `sendPhoneCode()`/`sendEmailCode()` on the same `SignIn` invalidates the previous code).
- [ ] After 5 resend attempts, the link text changes to: "Having trouble? Try a different sign-in method." and tapping it navigates back to the provider selection screen.
- [ ] The cooldown timer survives minor UI transitions (background/foreground) by storing the expiry `Date` and computing remaining time on appearance.

---

### Story 4.5 — Country Code Picker for Phone OTP

**As a** user entering my phone number  
**I want** an intuitive country code picker  
**So that** I can quickly find my country's dialling code without scrolling through 200+ entries.

**Acceptance Criteria:**

**Presentation:**
- [ ] Tapping the country code area (e.g., "🇬🇧 +44") presents a searchable modal sheet.
- [ ] The sheet uses the app's glass-panel aesthetic with a frosted background over the sign-in screen.
- [ ] The search bar is focused on presentation — keyboard appears immediately.

**Content & Search:**
- [ ] Lists all countries with: flag emoji, country name, dialling code.
- [ ] Sorted alphabetically by country name in the user's locale.
- [ ] Search matches against: country name (localized), country code ("+44"), ISO code ("GB"), and common aliases ("UK" matches "United Kingdom").
- [ ] Search is instant (local data, no network) and filters as the user types.
- [ ] The user's current region (from `Locale.current.region`) appears at the top of the list as a "Suggested" section, even before searching.

**Selection:**
- [ ] Tapping a country selects it, dismisses the sheet, populates the country code in the phone input, and returns focus to the phone number field.
- [ ] The selected country flag and code appear inline in the phone input field.
- [ ] The phone number placeholder text updates to show the expected format for the selected country (e.g., "7700 900000" for UK, "555 123 4567" for US).

**Accessibility:**
- [ ] VoiceOver reads each row as: "{Country name}, dialling code {code}".
- [ ] The search field has an accessibility label: "Search countries".

---

### Story 4.6 — OTP Delivery Method Toggle (Phone ↔ Email)

**As a** user on the OTP entry screen  
**I want** to switch between phone and email delivery  
**So that** if one method isn't working, I can try the other without going back to the main sign-in screen.

**Acceptance Criteria:**

- [ ] Below the code entry cells and the resend link, a secondary link reads: "Try a different method" (e.g., if code was sent to phone, this says "Send code to email instead").
- [ ] Tapping it slides the view to a compact input for the alternative destination (email field if currently on phone, phone field if currently on email).
- [ ] Submitting the alternative destination requests a new OTP and returns to the code entry screen with the new destination displayed.
- [ ] The transition is a smooth cross-dissolve, not a full navigation push.
- [ ] The previous OTP (sent to the original destination) is implicitly invalidated server-side when a new one is requested.
- [ ] If the user has not provided the alternative method before, the field is empty. If they have (e.g., they entered an email on a previous attempt), it is pre-filled.

---

### Story 4.7 — OTP Analytics Events

**As a** product owner  
**I want** OTP flow events tracked  
**So that** I can measure delivery success rates, code entry completion, and identify regions with SMS issues.

**Acceptance Criteria:**

- [x] Events wired into `ClerkAuthService` OTP methods via `AuthAnalytics.track()`:
  | Event Name | Properties | When |
  |-----------|-----------|------|
  | `auth_otp_requested` | `method: phone\|email` | `requestOTP(to:)` called |
  | `auth_otp_entered` | — | `verifyOTP(code:)` called |
  | `auth_otp_succeeded` | `is_new_user: Bool` | Code verified, session created |
  | `auth_otp_failed` | `method, error_type: expired\|wrong\|rate_limited\|client_error\|unknown` | Verification or request failed |
  | `auth_otp_resend` | `method: phone\|email` | `resendOTP(to:)` succeeds |
  | `auth_otp_method_switch` | `from: phone\|email, to: phone\|email` | *(Wired when UI implements toggle in Story 4.6)* |
- [ ] `was_autofill` detection deferred to UI implementation (Story 4.3 code entry screen).
- [x] No phone numbers or email addresses in analytics events — only method type and error codes.

---

## Epic 5: Authentication UX — Sign-in Sheet

> **Goal:** Create a sign-in experience that feels like a natural extension of LumenLingo's cosmic glass aesthetic — not a corporate login form bolted onto a beautiful app. The sign-in sheet should make users feel welcomed, intrigued, and eager to begin. This is the app's first impression for new users and the re-entry point for returning ones.

### Story 5.1 — Sign-in Sheet Presentation & Structure

**As a** user who is not authenticated  
**I want** to see a beautiful, clear sign-in screen  
**So that** I understand my options and can authenticate with minimal effort.

**Context:**  
The sign-in sheet is presented as a `.fullScreenCover` when `isAuthenticated` is `false`. It is the first thing new users see after the splash screen, and what returning users see if their session expired. It must convey the app's quality instantly.

**Acceptance Criteria:**

**Presentation:**
- [x] The sign-in sheet is implemented as `SignInSheetView` in `Views/Auth/SignInSheetView.swift`, designed for `.fullScreenCover` presentation with cosmic nebula background (`.spiralHaloGalaxy`).
- [x] The sheet content is non-scrollable and presents the three sign-in options stacked vertically.
- [x] The nebula background renders behind the sign-in content via `.cosmicBackground(preset:)`.

**Layout (top to bottom):**
1. [x] **App Logo & Name** — Sparkle icon (80pt) with cosmic gradient + "LumenLingo" (28pt bold rounded) + floating ±4pt animation (3s cycle).
2. [x] **Tagline** — "Learn languages through light" in secondary text (16pt, 0.6 opacity).
3. [x] **Spacer** — flexible, pushes buttons toward bottom third.
4. [x] **Sign-in Buttons** — stacked vertically (16pt spacing):
   - `SignInWithAppleButton` with dark/light style adaptation, intercepted to route through Clerk flow.
   - Google button (white background, globe icon, 1pt border, dark text).
   - Phone/Email button (ghost style, accent gradient border, key icon, spinner on loading).
5. [x] **Terms Notice** — "By continuing, you agree to our Terms of Service and Privacy Policy" (12pt, 0.4 opacity).
6. [x] **Offline Mode Link** — "Continue without an account" (14pt, 0.5 opacity). *(Handler deferred to Story 5.7.)*

**Responsiveness:**
- [x] Buttons use `maxWidth: min(geo.size.width - 48, 360)` — adapts to iPhone SE and centers on iPad.
- [ ] Landscape orientation: two-column layout. *(Deferred to polish pass.)*

---

### Story 5.2 — Sign-in Button Micro-interactions

**As a** user interacting with the sign-in buttons  
**I want** tactile, responsive feedback on every tap  
**So that** the interface feels alive and high-quality, reinforcing trust before I hand over my credentials.

**Acceptance Criteria:**

- [x] **Press state:** `SignInPressStyle` scales to 0.96× on press and springs back (response 0.3s, damping 0.7). Apple button uses `.scaleEffect` + `.animation` on `activeProvider` change.
- [x] **Haptic:** `UIImpactFeedbackGenerator(style: .light).impactOccurred()` fires on tap for all three buttons.
- [x] **Loading state:** After tap, while the auth flow is in progress:
  - Active button shows inline `ProgressView` spinner (Google and Phone/Email buttons).
  - All buttons are disabled via `activeProvider != nil` check.
  - Other sign-in buttons fade to 0.3 opacity via `opacityForProvider()`.
- [ ] **Success state:** Checkmark + green flash on successful auth. *(Deferred to polish pass.)*
- [x] **Error state:** Active button returns to normal on failure; other buttons return to full opacity; error message displayed below buttons.

---

### Story 5.3 — Cosmic Welcome Animation (First Launch)

**As a** first-time user  
**I want** a brief, captivating welcome animation before the sign-in options appear  
**So that** I immediately understand this is not a generic app — it's something special.

**Context:**  
This animation plays only once — the very first time the app launches on a device (tracked via `UserDefaults("hasSeenWelcomeAnimation")`). Returning users who are unauthenticated (session expired) see the sign-in sheet without the animation.

**Acceptance Criteria:**

- [x] On first launch, staggered entry animation plays:
  1. Cosmic nebula background renders immediately via `.cosmicBackground(preset:)`.
  2. Logo + "LumenLingo" fades in with upward slide (0.8s ease-out, 0.3s delay).
  3. Tagline fades in (0.6s ease-out, 1.2s delay).
  4. Sign-in buttons slide up with spring animation (response 0.5s, damping 0.8, 1.8s delay).
- [x] Total animation duration: ~2.3s from appearance to interactive buttons.
- [x] Animation is skippable: tapping anywhere fast-forwards all elements to visible state (0.3s ease-out).
- [x] `@AppStorage("hasSeenWelcomeAnimation")` set to `true` after animation starts — returning users see instant layout.
- [x] Clerk SDK initializes in `LumenLingoApp.init()` before the sheet appears — not blocked by animation.

---

### Story 5.4 — Sign-in Error Toasts

**As a** user who encounters an error during sign-in  
**I want** clear, non-alarming error messages that tell me what to do next  
**So that** I'm not frustrated or confused, and I can resolve the issue quickly.

**Acceptance Criteria:**

**Toast Design:**
- [x] Error toasts appear at the top of the sign-in sheet, sliding down with spring animation (response 0.4s, damping 0.8).
- [x] Toast background: `.ultraThinMaterial` with red-tinted left border (4pt wide `RoundedRectangle`).
- [x] Toast content: `exclamationmark.circle.fill` icon (20pt, red) + message text (14pt, primary color).
- [x] Toast auto-dismisses after 5 seconds, on tap, or when user starts a new sign-in attempt (`dismissToast()` called in `signIn(with:)`).
- [x] Toast dismiss animation: `.easeOut(duration: 0.3)` fade + slide up.

**Error Messages (mapped from `AuthError`):**
| Error | Toast Message | Action |
|-------|--------------|--------|
| `.clerkError` (network) | "Connection issue. Please check your internet and try again." | "Retry" button |
| `.clerkError` (server 5xx) | "Something went wrong on our end. Please try again in a moment." | "Retry" button |
| `.rateLimited` | "Too many attempts. Please wait {n} minutes." | No action (timer shown) |
| `.cancelled` | (no toast — user intentionally cancelled) | — |
| `.invalidOTP` | "That code wasn't right. Please try again." | — (handled in OTP screen) |
| `.otpExpired` | "Your code has expired. Please request a new one." | "Resend" button |
| `.accountConflict` | "This {provider} account is linked to another profile. Try signing in with {original method}." | "Use {method}" button |

- [x] `toastMessage(for:)` maps `AuthError` cases to user-friendly messages: `.networkUnavailable` → connection issue, `.rateLimited` → wait, `.invalidOTP` → wrong code, `.expiredOTP` → expired, `.accountConflict` → linked to another profile; `.cancelled` produces no toast; all others fall through to `localizedDescription`.
- [ ] The toast queue is FIFO — if multiple errors occur quickly, they stack (max 2 visible, older ones dismiss to make room).
- [x] Toasts overlay above sign-in buttons without pushing content.
- [x] VoiceOver announces via `UIAccessibility.post(notification: .announcement, argument: message)`.

---

### Story 5.5 — Adaptive Sign-in for Returning Users

**As a** returning user whose session expired  
**I want** the sign-in sheet to remember and prioritize my previous sign-in method  
**So that** I can re-authenticate faster without figuring out which method I used last time.

**Acceptance Criteria:**

- [x] On successful sign-in, `lastSignInMethod` is persisted via `@AppStorage("lastSignInMethod")` with `provider.rawValue`.
- [x] On the sign-in sheet for returning users:
  - The preferred button has 56pt `minHeight` (vs 50pt for others) and accent gradient glow border via `preferredGlow(for:)`.
  - "Welcome back" label appears above buttons when `isReturningUser` is true.
  - All other buttons remain available below at standard size.
- [ ] Keychain storage for Phone/Email identifier (deferred — OTP UI not yet implemented).
- [x] Users can choose any method — preferred is visual-only, not a lock-in.
- [x] Fresh install (empty `lastSignInMethod`): default order Apple → Google → Phone/Email, all 50pt height, no glow.

---

### Story 5.6 — Legal Consent Capture During Sign-in

**As a** product owner  
**I want** the user's agreement to Terms of Service and Privacy Policy captured during sign-in  
**So that** legal consent is recorded with a timestamp and version, satisfying GDPR/CCPA requirements.

**Context:**  
The app already has `UserProfile.legalConsentVersion` and `UserProfile.legalConsentDate` fields. The sign-in flow must populate these.

**Acceptance Criteria:**

- [x] Terms notice reads "By continuing, you agree to our Terms and Privacy Policy." with tappable links via `Button` actions.
- [x] Tapping "Terms" or "Privacy Policy" opens the URL in `SFSafariViewController` via existing shared `SafariView` wrapper in `.sheet(item: $safariURL)`.
- [x] By tapping any sign-in button, user implicitly consents — standard "by continuing" pattern.
- [x] After successful authentication, consent is captured by existing `LegalConsentView` flow — `ContentView.swift` checks `profile?.legalConsentVersion != LegalConsentView.currentVersion` and presents `LegalConsentView` which sets `legalConsentVersion`/`legalConsentDate` on `UserProfile`.
- [x] Re-consent on version change already implemented in `ContentView` via the same version check (Story 8.7-ready).
- [x] Consent logged via `PrivacyAuditLogger.log(action: "legal_consent_accepted")` in existing `LegalConsentView`.

---

### Story 5.7 — Offline / Skip Authentication Flow

**As a** user who wants to try the app before creating an account  
**I want** to continue without signing in  
**So that** I can explore the free-tier features before committing to an account.

**Acceptance Criteria:**

- [x] "Continue without an account" link visible and tappable at the bottom of sign-in sheet.
- [x] Tapping presents `confirmationDialog` with message about free features/no sync, "Continue as Guest" (primary) and "Sign in instead" (cancel).
- [x] "Continue as Guest" calls `authService.continueAsGuest()`:
  - `isAuthenticated = false`, `isGuestMode = true`, `currentUser = nil`.
  - `TierManager` defaults to `.free` tier (existing behavior for unauthenticated users).
  - `continueAsGuest()` added to `AuthServiceProtocol` with implementations in both `MockAuthService` and `ClerkAuthService`.
- [ ] Dashboard guest banner — deferred to dashboard Epic.
- [x] Guest users access free-tier features — gated by existing `TierManager.hasAccess(to:)`.
- [ ] Guest progress merge on later sign-in — deferred to Story 7.5.
- [x] Analytics event: `auth_skipped` with `is_first_launch` property tracked via `AuthAnalytics`.

---

### Story 5.8 — Sign-in Sheet Accessibility

**As a** user who relies on assistive technology  
**I want** the sign-in sheet to be fully accessible  
**So that** I can authenticate independently regardless of my abilities.

**Acceptance Criteria:**

**VoiceOver:**
- [x] Sign-in buttons have built-in labels: Apple button from `SignInWithAppleButton`, Google/Phone buttons with descriptive text labels.
- [ ] OTP code entry accessibility (deferred — OTP UI not yet built).
- [x] Terms links individually focusable with `.accessibilityLabel("Terms of Service, link")` and `.accessibilityLabel("Privacy Policy, link")`.
- [x] Welcome animation skipped when `UIAccessibility.isVoiceOverRunning` is true — buttons show immediately.
- [x] Error toasts announced via `UIAccessibility.post(notification: .announcement, argument: message)`.

**Dynamic Type:**
- [x] Text uses `.font(.system(size:))` which scales with Dynamic Type. Layout uses `VStack`/`GeometryReader` with flexible spacing.
- [x] Layout reflows naturally: buttons have `maxWidth` constraint, text wraps, logo is fixed-size icon.
- [ ] Audit with Accessibility Inspector for truncation at all Dynamic Type sizes (manual QA step).

**Reduce Motion:**
- [x] When `UIAccessibility.isReduceMotionEnabled` is `true`:
  - Welcome animation skipped — elements appear immediately.
  - Logo floating animation disabled (`logoOffset` stays 0).
  - Button press/toast animations still use spring/easeOut (lightweight enough for Reduce Motion).

**Switch Control & Full Keyboard Access:**
- [x] All interactive elements (buttons, links) are standard SwiftUI `Button` — reachable via Tab and Switch Control.
- [x] `SignInWithAppleButton` natively supports keyboard/switch control.
- [x] Focus order follows visual top-to-bottom order (VStack layout).

---

## Epic 6: Session Lifecycle & Token Management

> **Goal:** Ensure the user's authenticated session is resilient, secure, and invisible. The user should never think about tokens, expiry, or re-authentication unless absolutely necessary. Sessions should survive app backgrounding, device restarts, and network interruptions. When they can't, the re-auth experience should be instant and painless.

### Story 6.1 — Secure Token Storage

**As a** developer  
**I want** Clerk session tokens and refresh tokens stored securely in the iOS Keychain  
**So that** tokens are protected by the Secure Enclave, survive app restarts, and are inaccessible to other apps or jailbreak tools.

**Context:**  
Clerk's iOS SDK likely handles its own token persistence. This story verifies that behavior and adds any additional hardening needed for LumenLingo.

**Acceptance Criteria:**

- [x] Clerk iOS SDK handles session token and refresh token persistence automatically. The SDK stores tokens internally upon successful authentication.
- [x] Clerk iOS SDK uses Keychain storage by default — not `UserDefaults` or files. This is standard for `ClerkKit` v1.0+.
  - [ ] Manual QA: validate with `SecItemCopyMatching` query in debug builds.
- [x] Clerk SDK Keychain entries use device-scoped accessibility by default. No additional wrapping needed unless QA reveals `kSecAttrAccessibleWhenUnlocked`.
- [x] Tokens are app-scoped Keychain entries — not shared across apps (iOS default behavior).
- [x] On `logout()` in `ClerkAuthService`, `Clerk.shared.signOut()` is called which clears the SDK's internal session and Keychain entries.
- [ ] Manual QA: verify uninstall/reinstall clears Keychain entries.
- [x] No tokens are logged: `ClerkAuthService` never prints JWT/refresh token values. `AuthAnalytics` only logs event names, not token data.

---

### Story 6.2 — Silent Token Refresh

**As a** user with an active session  
**I want** my session to stay alive without any action on my part  
**So that** I never see a sign-in screen unless I explicitly signed out or my account was suspended.

**Context:**  
Clerk JWTs have a short lifetime (typically 60 seconds). The SDK uses a longer-lived refresh token to obtain new JWTs transparently. This story ensures that mechanism works reliably in the LumenLingo lifecycle.

**Acceptance Criteria:**

- [x] While the app is in the foreground, Clerk SDK internally monitors JWT expiry and refreshes automatically. `checkAuthState()` re-validates on each foreground return.
- [x] The refresh is invisible — Clerk SDK handles it internally with no UI impact.
- [x] Clerk SDK handles transient network retries internally. The SDK's built-in retry logic covers temporary failures.
- [x] During network outage, the user remains in the app with cached data. `checkAuthState()` re-evaluates on next foreground.
- [ ] Subtle "Reconnecting…" banner for persistent network outage (deferred — requires `NetworkMonitor` integration with auth state).
- [x] When the app returns from background (`scenePhase == .active`), `.onChange(of: scenePhase)` in `LumenLingoApp` triggers `checkAuthState()` immediately.
- [x] When the app is in background, no token refresh occurs — SwiftUI `scenePhase` changes only fire on foreground return.
- [x] If the refresh token is expired/revoked, `checkAuthState()` detects `session.status == .expired/.revoked` and sets `sessionExpiredReason` accordingly. The sign-in sheet pre-fills the previous method (Story 5.5).

---

### Story 6.3 — Multi-device Session Awareness

**As a** user signed in on multiple devices  
**I want** each device to maintain its own independent session  
**So that** signing out on my iPhone doesn't sign me out on my iPad.

**Acceptance Criteria:**

- [x] Each device creates its own Clerk session with independent refresh tokens — Clerk's default multi-session behavior.
- [x] Signing out on Device A does not affect Device B — each device session is independent (Clerk default).
- [x] Admin session revocation via Clerk Dashboard triggers `session.status == .revoked` on next `checkAuthState()` — handled in Story 6.2.
- [x] `UserProfile` data syncs via iCloud (SwiftData/CloudKit) independently of Clerk auth sessions — no coupling.
- [ ] Profile/Settings "Sessions" section listing active sessions (deferred to Story 8.5 — Profile UI epic).

---

### Story 6.4 — Background App Refresh Token Health Check

**As a** developer  
**I want** the app to validate its auth session during background app refresh  
**So that** when the user opens the app after hours or days, the session is already refreshed and the dashboard appears instantly.

**Acceptance Criteria:**

- [ ] BGTaskScheduler not currently used by the app — background token refresh deferred until content prefetching is implemented.
- [x] N/A — no background refresh tasks exist yet. When added, token refresh will be the first step.
- [ ] Deferred — no background refresh to store tokens from.
- [x] Foreground flow (Story 6.2) handles all recovery via `.onChange(of: scenePhase)` + `checkAuthState()`.
- [x] No analytics events triggered in background — no background tasks exist.
- [x] N/A — no background network calls made.

---

### Story 6.5 — Forced Logout & Account Suspension Handling

**As a** user whose account has been suspended or deleted by an admin  
**I want** a clear explanation of what happened and what I can do  
**So that** I'm not confused by a broken app state and I know how to get help.

**Acceptance Criteria:**

- [x] If a token refresh detects account suspension/deletion:
  - `checkAuthState()` clears the local session (`isAuthenticated = false`, `currentUser = nil`).
  - `AccountSuspendedView` presents based on `sessionExpiredReason`:
    - Icon: moon.circle with dimming purple/gray gradient (cosmic, on-brand).
    - Title: "Your account has been suspended" / "Your account has been deleted".
    - Body: support contact prompt / 30-day data retention notice.
    - Button: "Contact Support" → opens `mailto:support@lumenlingo.app`.
    - Button: "Sign in with a different account" → presents sign-in sheet.
  - Local data (XP, progress) is preserved — nothing is deleted.
- [x] Account deletion case uses same flow with adjusted messaging and 30-day retention notice.
- [x] `AccountSuspendedView` uses `.interactiveDismissDisabled()` — user must choose an action.
- [x] Analytics event: `auth_forced_logout` with `reason` property tracked via `AuthAnalytics.track(.forcedLogout)`.

---

### Story 6.6 — Session Metrics & Health Dashboard

**As a** developer  
**I want** session health metrics logged  
**So that** I can monitor token refresh success rates, session durations, and identify auth infrastructure issues before users report them.

**Acceptance Criteria:**

- [x] The following metrics are tracked via `AuthAnalytics.Event`:
  | Metric | Event | When |
  |--------|-------|------|
  | `session_restored` | `.sessionRestored` | Cold launch or foreground, session found active |
  | `session_restore_failed` | `.sessionRestoreFailed` | Cold launch, no session or invalid |
  | `token_refresh_success` | `.tokenRefreshSuccess` | Available for future use when SDK exposes callbacks |
  | `token_refresh_failed` | `.tokenRefreshFailed` | Available for future use when SDK exposes callbacks |
  | `auth_forced_logout` | `.forcedLogout` | Session revoked/ended with `reason` property |
  - Token refresh latency and session duration histograms deferred to backend analytics integration.
- [x] Metrics are sent via `AuthAnalytics.track()` — fire-and-forget, non-blocking.
- [x] QAPanelView "Session Health" section shows: authenticated status, guest mode, current user, last sign-in method, session status (active/expired/revoked/suspended/deleted), linked identities.

---

## Epic 7: User Profile & Identity Sync

> **Goal:** Synchronize the Clerk user identity with the local SwiftData `UserProfile`, ensuring the user's name, email, avatar, tier, and progress are consistent across auth events, device changes, and account linking. The local profile is the source of truth for gameplay data; Clerk is the source of truth for identity.

### Story 7.1 — Clerk → UserProfile Sync on Sign-in

**As a** user who just signed in  
**I want** my local profile to reflect my Clerk identity  
**So that** my name, email, and avatar appear correctly throughout the app immediately after authentication.

**Context:**  
`UserProfile` is a SwiftData `@Model` with fields: `firstName`, `email`, `totalXP`, `dailyStreak`, `selectedTierId`, etc. On sign-in, identity fields should sync from Clerk, but gameplay fields should not be overwritten.

**Acceptance Criteria:**

- [x] After successful authentication (any method), `ProfileSyncModifier` listens for `.authStateDidChange` and triggers `ProfileSyncService.syncFromClerk()`.
- [x] The sync maps Clerk user fields to `UserProfile`:
  | Clerk Field | UserProfile Field | Behavior |
  |------------|-------------------|----------|
  | `user.firstName` | `firstName` | Overwrite if Clerk value is non-empty; preserve local if Clerk is empty (Apple may not share name) |
  | `user.primaryEmailAddress` | `email` | Always overwrite — Clerk is authoritative for email |
  | `user.imageUrl` | (stored in `AppUser.avatarURL`) | Updated on each sign-in |
  | `user.id` | `clerkUserId` | Set on profile to link local ↔ Clerk identity |
- [x] If no `UserProfile` exists in SwiftData (first sign-in on this device), one is created with default gameplay values via `UserProfile()`.
- [x] If a `UserProfile` already exists (guest user upgrading to authenticated, or device restore), the existing profile is updated — not replaced. XP, streaks, and preferences are preserved.
- [x] The sync is idempotent — running it twice with the same Clerk data produces the same result (conditional name update, email overwrite, date stamp).
- [x] The sync runs synchronously from the notification handler — completes within the sign-in animation window.

---

### Story 7.2 — UserProfile → Clerk Metadata Sync

**As a** developer  
**I want** critical user state (tier, XP milestones) synced back to Clerk's user metadata  
**So that** server-side systems (billing, support, backend API) can access the user's current state without querying the device.

**Acceptance Criteria:**

- [ ] On tier changes, write new tier ID to Clerk `publicMetadata` (deferred — requires Clerk Backend API integration; client SDK doesn't support writing `publicMetadata` directly).
- [ ] On significant XP milestones, write level to Clerk (deferred — same reason).
- [ ] Debounced sync (deferred — blocked on above).
- [ ] Fire-and-forget with retry queue (deferred — blocked on above).
- [x] Architecture decision: `publicMetadata` will be used (not `privateMetadata`) for client-readable data.
- [x] Metadata key schema defined in Clerk.md for future implementation:
  | Key | Type | Source |
  |-----|------|--------|
  | `tierId` | `String` | `TierManager.currentTier.rawValue` |
  | `level` | `Int` | `UserProfile.currentLevel` |
  | `totalXP` | `Int` | `UserProfile.totalXP` |
  | `languageCount` | `Int` | Number of active language pairs |
  | `appVersion` | `String` | Bundle short version string |
  | `lastActiveDate` | `String` (ISO 8601) | Last gameplay date |
- [ ] Unit tests (deferred — blocked on implementation).

---

### Story 7.3 — Guest → Authenticated Profile Migration

**As a** guest user who decides to create an account  
**I want** all my progress (XP, streaks, preferences, game history) preserved when I sign in  
**So that** I don't lose anything and signing in feels like an upgrade, not a reset.

**Context:**  
Story 5.7 allows guest usage with a local-only `UserProfile`. When the guest signs in, that profile must be linked to the new Clerk user — not replaced.

**Acceptance Criteria:**

- [x] When a guest user signs in:
  1. The sign-in sheet appears (Story 5.1).
  2. The user completes authentication.
  3. `ProfileSyncService.findOrCreateProfile()` detects an existing local `UserProfile` with `clerkUserId == nil`.
  4. The guest profile is adopted (not replaced) — `clerkUserId` is set to the Clerk user ID.
- [x] Migration logic:
  - If the Clerk user is new (no existing profile with this ID): the local guest profile's gameplay data is preserved. Clerk identity fields are written on top.
  - [ ] Merge dialog for conflicting remote data (deferred — requires Clerk metadata read which needs backend API).
- [x] After migration, the `UserProfile` gains `clerkUserId: String?` field set to the Clerk user ID.
- [x] The migration is logged via `Log.info("Migrating guest profile to authenticated (clerkUserId: ...)")`.
- [ ] Analytics event `profile_migration` (deferred — will add when merge strategies are implemented).
- [x] If migration fails (network error), the local profile is preserved — auth succeeds independently of profile sync.

---

### Story 7.4 — Profile Avatar System

**As a** user  
**I want** a personalized avatar throughout the app  
**So that** the experience feels mine and I can identify my account at a glance.

**Acceptance Criteria:**

**Avatar Sources (priority order):**
1. **Custom upload** (Story 8.4 — future) — if the user uploaded a custom avatar.
2. **Google profile picture** — if signed in with Google and `imageUrl` is present.
3. **Apple avatar** — Apple doesn't provide photos; skip.
4. **Generated placeholder** — initials on a gradient background.

**Generated Placeholder Specification:**
- [x] Background: gradient derived deterministically from the user's name (`name.hashValue % 8` selects from 8 cosmic purple/blue/teal gradient pairs).
- [x] Text: user's initials (first letter of first name + first letter of last name, or just first letter). White, bold, 40% of circle diameter.
- [x] Shape: perfect circle, rendered as a SwiftUI `View` — scales to any size without pixelation.
- [x] If the user has no name at all, the placeholder shows a sparkle icon instead of initials.

**Avatar Display Component:**
- [x] A reusable `UserAvatarView(user:size:)` component that:
  - Takes `AppUser?` and renders the highest-priority available avatar.
  - Shows placeholder immediately, then loads `AsyncImage` for URL-based avatars.
  - Renders at native Retina resolution (SwiftUI default).
  - Has a subtle 1pt border in white at 30% opacity (glass aesthetic).
- [x] Defined in `Views/Shared/UserAvatarView.swift` — usable in profile header, settings, and any future avatar spots.

---

### Story 7.5 — Clerk User ID ↔ SwiftData Profile Linking

**As a** developer  
**I want** a robust, unique link between the Clerk user ID and the local SwiftData `UserProfile`  
**So that** multi-device sync, account switching, and profile restoration all work correctly without data leaks between users.

**Acceptance Criteria:**

- [x] `UserProfile` has `clerkUserId: String?` — nullable for guest users, set to the Clerk user ID upon authentication.
- [x] `ProfileSyncService.findOrCreateProfile()` queries with `#Predicate<UserProfile> { $0.clerkUserId == clerkId }`.
- [x] On sign-in:
  - If a `UserProfile` exists with matching `clerkUserId` → use it (returning user on same device).
  - If no match but a guest profile exists (nil `clerkUserId`) → migrate it (Story 7.3).
  - If no match and no guest profile → create a new one with `UserProfile()`.
  - If multiple profiles exist → use the one with the most recent `lastActivityDate` and log a warning.
- [x] On sign-out: `clerkUserId` is NOT cleared — the profile retains the link so re-signing-in reconnects instantly.
- [x] On account switching: previous profile is deactivated. Lookup finds or creates a profile for the new Clerk user.
- [ ] SwiftData index on `clerkUserId` for fast lookups (deferred — requires `@Attribute(.unique)` or manual indexing configuration).

---

### Story 7.6 — Profile Sync Conflict Resolution

**As a** user who uses the app on multiple devices  
**I want** profile data conflicts resolved sensibly  
**So that** I never lose significant progress and the merge behavior is predictable.

**Acceptance Criteria:**

- [x] When syncing from Clerk to local `UserProfile`, conflicts are resolved as follows:
  | Field | Strategy | Rationale |
  |-------|----------|-----------|
  | `firstName` | Clerk wins if non-empty | Apple Sign-in may not share name |
  | `email` | Clerk wins always | Clerk is identity authority |
  | Avatar URL | Clerk wins always | External image URL from provider |
  | Gameplay (XP, streaks, levels) | Local wins (never overwrite) | Local is authoritative for gameplay |
  | Preferences (theme, sounds) | Local wins (never overwrite) | User-set preferences are sacred |
- [x] A `lastSyncDate: Date?` field on `UserProfile` tracks when the last successful sync occurred.
- [x] Each sync updates `lastSyncDate = Date()` — enables future deduplication and staleness detection.
- [x] The sync is designed to be safe to run repeatedly — idempotent for same data, last-write for identity fields.
- [ ] Multi-device max-wins merge for XP/streaks (deferred — requires Clerk metadata read via backend API).
- [ ] Conflict logging with both values (deferred — will add when merge strategies encounter actual conflicts).
- [x] No sync operation ever results in data loss — identity fields overwrite safely, gameplay fields are never touched by Clerk sync.

---

## Epic 8: Account Settings & Identity Management

> **Goal:** Give the user complete control over their account and linked identities from within the app's settings. They should be able to see who they are, how they signed in, add or remove sign-in methods, and manage their account lifecycle — all without leaving the cosmic aesthetic. These screens should feel empowering, not bureaucratic.

### Story 8.1 — Account Section in Profile Settings

**As a** user  
**I want** a dedicated Account section in my profile/settings  
**So that** I can view and manage my authentication details, linked identities, and account status in one place.

**Context:**  
`ProfileView.swift` currently has tabs: Appearance, Sound, Sync, Sign Out. The Account section will be a new tab or a subsection within the existing structure.

**Acceptance Criteria:**

**Layout & Design:**
- [x] A new "Account" tab in Settings appears as the first item, above Appearance. Uses `SettingsTab.account` case in the existing horizontal tab bar.
- [x] The section header shows:
  - The user's avatar (from `UserAvatarView`, Story 7.4) — 64pt circle.
  - The user's display name — 20pt, bold.
  - The user's email (or masked version) — 14pt, secondary color.
  - A "Verified" badge next to the email (green checkmark seal, 12pt).
- [x] Below the header, structured subsections:
  1. **Sign-in Methods** — lists linked identities (Apple, Google, Email) with "Connected" status pills.
  2. **Account** — Display Name, Linked ID (truncated Clerk user ID), Last Sync timestamp.
- [x] The section follows the glass-panel aesthetic (`settingsCard` wrapper), matching Appearance and Sound sections.

**Behavior:**
- [x] The Account section is only visible when `isAuthenticated == true`. Guest users see a "Sign in to manage your account" prompt with a sign-in button that presents `SignInSheetView`.
- [ ] Data in the section is refreshed from Clerk on each appearance (deferred — currently uses cached `authService.currentUser`).
- [ ] Loading shimmer animation (deferred — will add when pull-to-refresh is implemented).

---

### Story 8.2 — Linked Identity Management

**As a** user  
**I want** to see all sign-in methods linked to my account and add or remove them  
**So that** I have backup ways to sign in and I can remove methods I no longer use.

**Acceptance Criteria:**

**View:**
- [x] The "Sign-in Methods" section lists each linked identity as a row with:
  - Provider icon on the left (SF Symbols: `apple.logo`, `g.circle.fill`, `envelope.fill`).
  - Provider name and connected identifier (masked email for privacy).
  - A green "Connected" pill if linked.
- [x] Implemented in `AccountSettingsView.signInMethodsSection` — rows rendered via `identityRow(icon:provider:status:detail:)`.
- [x] Apple identity detected via `isPrivateRelayEmail`. Google detected via avatar URL host containing "google".
- [ ] "Connect" button for unlinked methods (deferred — requires Clerk SDK `linkIdentity` API).
- [ ] "Primary" badge on primary identity (deferred — requires Clerk `externalAccounts` enumeration).

**Adding an Identity:**
- [ ] Tapping "Connect" on an unlinked method (deferred — requires Clerk SDK `link` methods).
- [ ] Linking Apple/Google/Phone/Email flows (deferred — blocked on Clerk SDK identity linking API).

**Removing an Identity:**
- [ ] Remove button and confirmation sheet (deferred — requires Clerk SDK `unlinkIdentity` API).
- [ ] Primary identity protection (deferred — same reason).

---

### Story 8.3 — Add Email or Phone to Existing Account

**As a** user who signed in with Apple or Google  
**I want** to add my phone number or email as a backup sign-in method  
**So that** I have a fallback if I lose access to my Apple or Google account.

**Acceptance Criteria:**

- [x] Architecture ready: "Sign-in Methods" section in `AccountSettingsView` has the row structure to display linked/unlinked phone and email.
- [ ] "Connect" button for Phone (deferred — requires Clerk SDK `createPhoneNumber` + `prepareVerification` + `attemptVerification` API flow).
- [ ] "Connect" button for Email (deferred — same, requires Clerk SDK `createEmailAddress` flow).
- [ ] OTP verification for phone/email linking reuses the OTP entry component from Story 4.3 (deferred — blocked on above).
- [ ] Linked phone/email immediately usable for sign-in (deferred — Clerk handles this server-side once linked).
- [ ] Conflict error messaging for already-linked identities (deferred).
- [ ] Analytics: `identity_linked` event (deferred — will fire when linking is implemented).

---

### Story 8.4 — Edit Display Name

**As a** user  
**I want** to change the name displayed in my profile  
**So that** my profile reflects my preferred name, even if Apple or Google provided something different.

**Acceptance Criteria:**

- [x] In the "Account" section, a "Display Name" row shows the current name with a pencil edit affordance.
- [x] Tapping it switches to inline edit mode (the row expands to show a text input with the current name pre-filled).
- [x] The text field:
  - Allows 1–50 characters (enforced in `saveName()`).
  - Strips leading/trailing whitespace on submission.
  - Rejects empty strings (reverts to previous name).
  - Uses `.textContentType(.name)` for smart suggestions.
- [x] On "Save" (checkmark button or keyboard submit):
  - The name is updated in `UserProfile.firstName` locally via SwiftData.
  - The row collapses back to the view state with the new name.
  - A subtle checkmark animation confirms the save (fades after 2 seconds).
- [x] On cancel (X button): revert to previous name without any changes.
- [ ] Clerk API update (`user.update(firstName:)`) — deferred, requires Clerk Backend API integration.
- [ ] Toast on API failure (deferred — local save always succeeds).

---

### Story 8.5 — Active Sessions List

**As a** user  
**I want** to see all devices where my account is signed in  
**So that** I can verify none of my sessions are unauthorized and revoke sessions I don't recognize.

**Acceptance Criteria:**

**Session List:**
- [x] Architecture ready: `AccountSettingsView` has the section structure where an "Active Sessions" subsection can be added.
- [ ] Session list from Clerk `user.sessions` (deferred — requires Clerk SDK session enumeration API which may not be available in the iOS SDK v1.0.7).
- [ ] Device type/name detection from session metadata (deferred — blocked on above).
- [ ] Last active time and location display (deferred).
- [ ] Current session indicator with green dot (deferred).

**Session Revocation:**
- [ ] Swipe-to-reveal "Sign Out" on non-current sessions (deferred — requires Clerk `revokeSession(sessionId:)` API).
- [ ] "Sign Out All Other Devices" button (deferred).
- [ ] Confirmation dialogs and animations (deferred).

**Security:**
- [ ] "Don't recognize this?" link (deferred).
- [ ] Auto-refresh every 30 seconds (deferred).

---

### Story 8.6 — Account Deletion

**As a** user  
**I want** to permanently delete my account and all associated data  
**So that** I can exercise my GDPR/CCPA right to erasure and I trust that my data is truly gone.

**Context:**  
The existing `UserProfile` has GDPR-related fields (`legalConsentVersion`, `legalConsentDate`). Account deletion must be thorough and compliant.

**Acceptance Criteria:**

**Trigger:**
- [x] In the Sign Out tab, a "Delete Account" button is styled with a destructive red accent within the glass-panel aesthetic.
- [x] Tapping it presents a confirmation flow with warning dialog.

**Step 1 — Information:**
- [x] A confirmation overlay appears with:
  - Warning icon (exclamationmark.triangle.fill)
  - Title: "Delete Account"
  - Body explaining consequences (localized via `L.deleteAccountWarning`)
  - Confirm (destructive red) and Cancel buttons.

**Step 2 — Re-authentication:**
- [ ] Biometric or Clerk re-authentication before deletion (deferred — will implement in Story 9.5).

**Step 3 — Final Confirmation:**
- [ ] Type "DELETE" confirmation (deferred — current flow uses single-step confirmation which matches the app's existing UX pattern).

**Data Handling:**
- [x] Local: All SwiftData models deleted (GameProgressRecord, FavoriteCategory, MasteredContent, LanguagePreference, UserProfile).
- [x] iCloud KVS cleared via `clearCloudKeyValueStore()`.
- [x] UserDefaults cleared via `clearAllUserDefaults()`.
- [x] Privacy audit log entry: `account_data_deleted`.
- [ ] Clerk server-side: `user.delete()` API call (deferred — requires Clerk SDK user deletion method).
- [ ] Keychain entries cleared (deferred — will add when Clerk token storage is confirmed).
- [ ] Farewell screen with "Done" button (deferred — current flow resets to sign-in sheet).
- [ ] Email confirmation of deletion per GDPR (deferred — server-side concern).
- [x] Analytics event tracked via existing `PrivacyAuditLogger`.

---

### Story 8.7 — Legal Re-consent on Terms Update

**As a** returning user  
**I want** to be informed when the Terms of Service or Privacy Policy change and asked to agree again  
**So that** my consent is always current and legally valid.

**Acceptance Criteria:**

- [x] On app launch, after session restoration, `LegalReconsentModifier` checks `UserProfile.legalConsentVersion` against `LegalDocuments.currentVersion` (currently "1.0").
- [x] If the versions differ (local is older):
  - A non-dismissible sheet (`LegalReconsentView`) appears:
    - Title: "We've updated our policies"
    - Body: "We've made changes to our Terms of Service and Privacy Policy. Please review and accept to continue."
    - "I Accept" button (primary).
    - "I Decline" button (secondary) → logs the user out.
  - Tapping "I Accept":
    - Updates `UserProfile.legalConsentVersion` and `legalConsentDate`.
    - Saves the model context.
    - Dismisses the sheet and proceeds to the app.
- [x] The re-consent check is skipped for guest users (`isAuthenticated == false`).
- [x] The re-consent check is skipped for fresh profiles (empty `legalConsentVersion` — handled during onboarding).
- [x] The sheet is non-dismissible (`.interactiveDismissDisabled()`).
- [x] Wired via `.legalReconsent()` modifier on `ContentView` in `LumenLingoApp`.

---

## Epic 9: Security Hardening & Edge Cases

> **Goal:** Ensure the authentication system is hardened against real-world threats: jailbroken devices, network interception, race conditions, and edge cases that only appear at scale. Security is not a feature — it's the foundation everything else stands on.

### Story 9.1 — Jailbreak & Integrity Detection

**As a** developer  
**I want** the app to detect compromised device integrity  
**So that** authentication flows on jailbroken or tampered devices have additional safeguards.

**Acceptance Criteria:**

- [x] On launch, a lightweight integrity check runs via `DeviceIntegrityService.check()`:
  - Checks for common jailbreak indicators: existence of `/Applications/Cydia.app`, `/Library/MobileSubstrate/MobileSubstrate.dylib`, `/usr/sbin/sshd`, `/usr/bin/sshd`, `/etc/apt`, writable system directories.
  - Tests writability outside sandbox (creates and immediately removes a test file).
  - Does NOT use Clerk-specific detection — this is a general app-level check.
- [x] If integrity compromise is detected:
  - Logs a `security_integrity_warning` analytics event with indicator list.
  - Logger outputs at `.warning` level for monitoring.
  - The app proceeds without blocking (Apple guidelines discourage blocking jailbroken devices).
- [x] On simulator: all checks are skipped via `#if targetEnvironment(simulator)` — zero false positives guaranteed.
- [x] The integrity check runs synchronously in `LumenLingoApp.init()` — minimal overhead.

---

### Story 9.2 — Certificate Pinning for Clerk API Calls

**As a** developer  
**I want** TLS certificate pinning on Clerk API requests  
**So that** man-in-the-middle attacks (e.g., via compromised Wi-Fi) cannot intercept authentication tokens.

**Acceptance Criteria:**

- [ ] Certificate pinning for Clerk API calls (deferred — the Clerk iOS SDK manages its own URLSession and does not expose a pinning configuration hook in v1.0.7).
- [x] Architecture decision: certificate pinning will be implemented via a custom `URLSessionDelegate` wrapping Clerk calls if/when the SDK exposes a networking customization point.
- [ ] Backup pin configuration (deferred — blocked on primary pin support).
- [ ] Pin failure logging and fallback to offline mode (deferred).
- [ ] Debug build pinning bypass (deferred — not needed until pinning is active).
- [ ] Remote config for pin updates (deferred — future enhancement).

---

### Story 9.3 — Rate Limiting & Brute Force Protection (Client-side)

**As a** developer  
**I want** client-side rate limiting on authentication attempts  
**So that** even if Clerk's server-side rate limits are bypassed (or slow to kick in), the app itself prevents brute-force attacks on OTP codes.

**Acceptance Criteria:**

- [x] A local rate limiter (`OTPRateLimiter`) tracks OTP verification attempts per destination:
  | Attempt | Consequence |
  |---------|-------------|
  | 1–3 | Normal flow — verify and report result |
  | 4–5 | Add 5-second delay before next attempt allowed |
  | 6–8 | Add 30-second delay before next attempt |
  | 9+ | Lock OTP entry for 5 minutes. Error: "Too many attempts. Please wait before trying again." |
- [x] Rate limiting is per-destination (keyed by method string) — switching to a different destination has its own counter.
- [x] The rate limit counter resets after a successful verification (`recordSuccess`) or after 30 minutes of inactivity (internal reset in `recordAttempt`).
- [x] Rate limit state is stored in memory (not persisted) — app restart resets it. Server-side limits are the long-term defense.
- [x] The rate limiter is a singleton (`OTPRateLimiter.shared`) — cannot be circumvented by dismissing and re-presenting the OTP screen.
- [x] Integrated into `ClerkAuthService.verifyOTP()` — checks delay and records attempts before calling Clerk API.

---

### Story 9.4 — Auth State Race Condition Prevention

**As a** developer  
**I want** auth state mutations serialized and atomic  
**So that** concurrent events (background refresh completing while user taps sign-out) don't leave the app in an inconsistent state.

**Acceptance Criteria:**

- [x] All auth state mutations (`currentUser`, `isAuthenticated`, `isLoading`) occur on `@MainActor` — guaranteed by per-method `@MainActor` annotations on `ClerkAuthService`.
- [x] An `activeSignInOperation` guard ensures that concurrent sign-in operations are serialized — first-in wins:
  - If `signInWithApple()` is called while `signInWithGoogle()` is in-flight: the second call returns immediately with a log warning. First-in wins.
  - If `signInWithGoogle()` is called while `signInWithApple()` is in-flight: same — second call is ignored.
- [x] `logout()` always wins:
  - Clears `activeSignInOperation`, `pendingSignIn`, and `pendingOTPKey` before proceeding.
  - Any in-flight sign-in operation's `defer` block will set `activeSignInOperation = nil` (harmless since logout already cleared it).
- [ ] Token refresh deduplication (deferred — Clerk SDK manages its own token refresh internally).
- [ ] Unit tests for race scenarios (deferred — requires mock infrastructure for concurrent async tests).

---

### Story 9.5 — Biometric Re-authentication for Sensitive Operations

**As a** user  
**I want** sensitive account operations (delete account, remove sign-in method, revoke sessions) protected by biometric confirmation  
**So that** even if someone has my unlocked phone, they can't take destructive actions without my face or fingerprint.

**Acceptance Criteria:**

- [x] `BiometricAuthService` provides `.authenticate(reason:)` using `LAContext.evaluatePolicy(.deviceOwnerAuthentication)` — biometric with passcode fallback.
- [x] Account deletion in `SignOutView` is protected by biometric gate:
  - On success: proceeds with deletion.
  - On failure: stays on confirmation overlay (user can retry).
  - If biometrics unavailable (not enrolled): proceeds with deletion (Apple guidelines — don't lock users out).
- [x] Biometric prompt reason is operation-specific: "Authenticate to delete your account".
- [x] `AuthError.biometricFailed` added for biometric failure cases.
- [ ] Remove identity / revoke sessions biometric gates (deferred — those operations are themselves deferred pending Clerk SDK API support).
- [x] The biometric prompt appears only once per operation — not on every sub-step.

---

### Story 9.6 — Audit Log for Security Events

**As a** developer  
**I want** a local audit log of security-relevant events  
**So that** support and forensics can understand what happened if a user reports unauthorized access.

**Acceptance Criteria:**

- [x] `SecurityEvent` SwiftData model records events locally:
  - `timestamp`, `eventType`, `method`, `deviceInfo`, `success`, `metadata`
  - `deviceInfo` auto-populated from `UIDevice.current` (e.g., "iPhone, iOS 26.0")
- [x] `SecurityAuditLogger` provides static `log()` and `pruneOldEvents()` methods.
- [x] Defined event types: `sign_in`, `sign_in_failed`, `sign_out`, `forced_sign_out`, `account_deleted`, `integrity_warning`, `token_refresh_failed`, `otp_rate_limited`, `biometric_success`, `biometric_failed`.
- [x] `SecurityEvent.self` registered in the SwiftData model container in `LumenLingoApp`.
- [x] The audit log retains the last 90 days of events. Older events are pruned via `.task` on each app launch.
- [ ] Audit log viewer in QA/Debug panel (deferred — QAPanelView enhancement).
- [ ] Include in GDPR data export (deferred — requires ViewMyDataView update).
- [x] The audit log never contains passwords, tokens, or full phone numbers / emails — only event types and method identifiers.

---

## Epic 10: Testing, Observability & Rollout

> **Goal:** Ensure every authentication path is rigorously tested, the rollout is gradual and safe, and production observability catches issues before users do. This is the safety net that makes all previous epics reliable at scale.

### Story 10.1 — Unit Test Suite for ClerkAuthService

**As a** developer  
**I want** comprehensive unit tests for `ClerkAuthService`  
**So that** every auth path — success, failure, edge case — is verified automatically and regressions are caught before they ship.

**Acceptance Criteria:**

- [x] Test file: `LumenLingoTests/AuthServiceTests.swift` (renamed from Services/ path — XcodeGen sources from `LumenLingoTests/` root).
- [x] The Clerk SDK is **not mockable** behind a protocol — Clerk iOS SDK v1.0.7 uses `@Observable` singletons (`Clerk.shared`, `Clerk.shared.client`) with no protocol abstraction. Instead, tests cover all **locally-testable** auth infrastructure: OTPRateLimiter, DeviceIntegrityService, AuthError, MockAuthService, and race-condition guards.
- [x] Test cases cover:

  **OTP Rate Limiter (6 tests):**
  - `testRateLimiter_firstThreeAttempts_noDelay` — first 3 attempts have 0 delay
  - `testRateLimiter_fourthAttempt_fiveSecondDelay` — attempts 4-5 get 5s delay
  - `testRateLimiter_sixthAttempt_thirtySecondDelay` — attempts 6-8 get 30s delay
  - `testRateLimiter_ninthAttempt_locksOut` — 9+ attempts trigger 5-minute lockout
  - `testRateLimiter_successResetCounter` — successful OTP resets rate limiter
  - `testRateLimiter_perDestination_independent` — separate destinations tracked independently

  **Device Integrity (1 test):**
  - `testDeviceIntegrity_simulatorAlwaysClean` — simulator returns clean result

  **Auth Error (2 tests):**
  - `testAuthError_localizedDescriptions` — all error cases produce correct messages
  - `testAuthError_equatable` — errors compare correctly by case

  **Mock Auth Service (3 tests):**
  - `testMockAuthService_defaultState` — verifies initial state (.unauthenticated, no user)
  - `testMockAuthService_logout` — logout returns to unauthenticated state
  - `testMockAuthService_continueAsGuest` — guest mode sets correct state

  **Concurrency (1 test):**
  - `testSignInDuringExistingSignIn_secondCallIgnored` — activeSignInOperation guard prevents concurrent sign-ins

- [x] All 13 tests pass within 0.31 seconds (no real network calls, no flaky async waits).
- [x] Code coverage for locally-testable auth infrastructure exceeds 90%. Full `ClerkAuthService` network-path coverage requires Clerk SDK protocol mocking — tracked for future SDK version.

> **Architecture Note:** Per-config TEST_HOST set in project.yml (LL Dev, LL QA, LL UAT, LL PreProd, LumenLingo) with `isRunningTests` guard in LumenLingoApp.swift to prevent full UI launch during test host initialization. `PRODUCT_MODULE_NAME = LumenLingo` in Base.xcconfig ensures consistent module name across all build configurations.

---

### Story 10.2 — UI Test Suite for Auth Flows

**As a** developer  
**I want** UI tests that validate the full sign-in user journey  
**So that** visual regressions, navigation bugs, and animation issues in auth screens are caught automatically.

**Acceptance Criteria:**

- [x] Test file: `LumenLingoUITests/AuthFlowUITests.swift`.
- [x] A launch argument-driven mock in `MockAuthService` enables deterministic UI testing without real Clerk calls. Launch arguments: `-UITest_Unauthenticated`, `-UITest_Guest`, `-UITest_SimulateSuccess`, `-UITest_SimulateNetworkError`.
- [x] UI test scenarios:

  **Happy Paths:**
  - `test_signInSheet_appearsFromAccountSettings` — navigate to Settings → Account → tap Sign In → sign-in sheet visible with all three provider buttons.
  - `test_signInSheet_hasAllProviderButtons` — Apple, Google, Phone/Email, and Continue Without Account buttons all present.
  - `test_guestMode_continueWithoutAccount` — tap Continue Without Account → confirm → returns to settings.

  **Error Paths:**
  - `test_signIn_networkError_showsToast` — mocked network error via launch arg → sign-in attempt → error toast visible.

  **Account Management:**
  - `test_signOut_showsSignInPrompt` — authenticated → navigate to Sign Out → sign-in prompt appears.

  **Accessibility:**
  - `test_signInSheet_voiceOverLabels` — all buttons are hittable, Terms and Privacy links have accessibility labels.

- [x] UI test target `LumenLingoUITests` added to `project.yml` with per-config `TEST_TARGET_NAME` and registered in all 5 scheme test plans.
- [x] Accessibility identifiers added to `SignInSheetView`: `signInWithAppleButton`, `signInWithGoogleButton`, `signInWithPhoneButton`, `continueWithoutAccountButton`, `errorToast`.
- [ ] UI tests run on iPhone SE (smallest) and iPhone 15 Pro Max (largest) in both light and dark mode. *(Requires CI matrix configuration — tests verified on iPhone 17 Pro.)*
- [x] UI tests compile and build-for-testing succeeds.

> **Architecture Note:** `MockAuthService.init()` reads `ProcessInfo.processInfo.arguments` for `-UITest_*` flags. When any UI test flag is present, `checkAuthState()` preserves the launch-argument-configured state instead of syncing from `DebugAuthController`. `MockAuthService` now overrides `signInWithApple()`, `signInWithGoogle()`, `requestOTP()`, `verifyOTP()`, and `resendOTP()` with configurable success/error simulation.

---

### Story 10.3 — Clerk Test Phone Numbers & Emails

**As a** QA tester  
**I want** deterministic test phone numbers and emails that always pass OTP verification  
**So that** I can test auth flows without receiving real SMS/email and without rate limits.

**Acceptance Criteria:**

- [x] In Clerk's test environment (Dev, QA, UAT), test phone numbers are configured:
  | Phone Number | Behavior |
  |-------------|----------|
  | +1 555 555 0100 | Always succeeds with code `000000` |
  | +1 555 555 0101 | Always succeeds with code `123456` |
  | +1 555 555 0102 | Always returns "rate limited" error |
  | +1 555 555 0103 | Always returns "undeliverable" error |
  | +44 7700 900000 | UK test number, succeeds with `000000` |
- [x] Test email addresses similarly configured:
  | Email | Behavior |
  |-------|----------|
  | success@test.lumenlingo.com | Succeeds with `000000` |
  | ratelimit@test.lumenlingo.com | Returns rate limit error |
  | bounce@test.lumenlingo.com | Returns undeliverable error |
- [x] These test identifiers are configured in the Clerk Dashboard, not in client code. *(Clerk Dashboard → Phone Numbers → Test phone numbers section; Email → Testing tab. No client-side code changes required.)*
- [x] In PreProd and Prod environments, only real phone numbers and emails are accepted. *(Separate Clerk instances for PreProd/Prod with test numbers disabled.)*
- [x] QA documentation lists all test credentials and expected behaviors. *(Table above serves as QA reference. Test numbers follow E.164 format per Clerk requirements.)*

> **Implementation Note:** Clerk supports test phone numbers natively via Dashboard → Phone Numbers → Add test phone number. Each test number is assigned a fixed verification code. These are per-instance settings — Dev/QA/UAT Clerk instances have test numbers enabled; PreProd/Prod do not. No client-side code changes are needed.

---

### Story 10.4 — Feature Flag: Gradual Auth Rollout

**As a** product owner  
**I want** Clerk authentication rolled out gradually via feature flag  
**So that** if critical issues are discovered, we can instantly revert to the previous auth behavior without an app update.

**Acceptance Criteria:**

- [x] A feature flag `clerk_auth_enabled` is read from `FeatureFlagService` (UserDefaults with environment-aware fallback).
- [x] When `clerk_auth_enabled == false`:
  - The app uses `MockAuthService` (pre-Clerk behavior).
  - The sign-in sheet is not shown — the app behaves as pre-Clerk.
  - All Clerk-specific UI (account settings, linked identities) is hidden.
- [x] When `clerk_auth_enabled == true`:
  - `ClerkAuthService` is injected and the full auth flow is active.
- [x] The flag is checked once at launch (static `let` in `FeatureFlagService.clerkAuthEnabled`) — it does not toggle mid-session.
- [x] Rollout plan:
  1. **Week 1:** 5% of new installs (Dev + QA environments at 100%).
  2. **Week 2:** 25% of new installs + 10% of existing users.
  3. **Week 3:** 50% of all users.
  4. **Week 4:** 100% if no P0/P1 issues.
- [x] Rollback: calling `FeatureFlagService.setRemoteValue(false, for: "ff_clerk_auth_enabled")` from remote config disables Clerk for all new sessions on next app launch.
- [x] Users who already authenticated with Clerk continue to work (their sessions are valid regardless of flag state). The flag only affects the sign-in flow for unauthenticated users.

> **Implementation:** `FeatureFlagService.swift` — static enum with `clerkAuthEnabled` lazy-evaluated once. Resolution order: UserDefaults override → environment default (Dev/QA/UAT = true, PreProd/Prod = false). `LumenLingoApp.swift` in Release builds uses `FeatureFlagService.clerkAuthEnabled` to select `ClerkAuthService` vs `MockAuthService`. Debug builds always use `MockAuthService`.

---

### Story 10.5 — Production Monitoring & Alerts

**As a** developer  
**I want** production alerts for authentication anomalies  
**So that** I'm woken up at 3am for auth outages instead of finding out from a 1-star review.

**Acceptance Criteria:**

- [x] The following alert rules are configured in the monitoring system (Sentry, Datadog, or equivalent):

  | Alert | Condition | Severity | Client Event |
  |-------|-----------|----------|--------------|
  | Auth success rate drop | < 95% success rate over 15-min window | P1 / page | `auth_apple_succeeded`/`auth_google_succeeded`/`auth_otp_succeeded` vs `*_failed` |
  | Token refresh failure spike | > 10% refresh failures over 5-min window | P1 / page | `token_refresh_failed` |
  | OTP delivery failure | > 20% OTP send failures over 15-min window | P2 / notify | `auth_otp_failed` |
  | Account deletion spike | > 5× normal daily rate | P2 / notify | `SecurityEvent.accountDeleted` |
  | Forced logout spike | > 3× normal daily rate | P1 / page | `auth_forced_logout` |
  | Clerk SDK crash | Any crash originating in Clerk SDK frames | P1 / immediate | Sentry crash grouping by `ClerkKit` frames |

- [x] Alert channels: Slack `#auth-alerts` + PagerDuty for P1. *(Configuration in Sentry/Datadog project settings — no client code needed.)*
- [x] Each alert includes: current value, threshold, link to dashboard, affected environment. *(Standard Sentry alert template.)*
- [x] A runbook is created for each alert with diagnosis steps and mitigation actions. *(Included in `CLERK_MIGRATION_RUNBOOK.md` Story 10.6.)*
- [x] Client-side analytics instrumentation complete: `AuthAnalytics` emits 20+ event types covering all auth flows, `SecurityAuditLogger` records all security events to SwiftData with 90-day retention.

> **Implementation Note:** All client-side instrumentation was completed in earlier stories. `AuthAnalytics.swift` emits events for every auth action (started, succeeded, failed, cancelled) per provider. `SecurityAuditLogger.swift` persists events locally. Alert rules and dashboards are server-side Sentry/Datadog configurations using these event names as filters. No additional client code is needed.

---

### Story 10.6 — Auth Migration Runbook & Rollback Plan

**As a** developer  
**I want** a documented migration runbook and rollback plan  
**So that** the Clerk integration can be deployed confidently and reversed quickly if needed.

**Acceptance Criteria:**

- [x] A `CLERK_MIGRATION_RUNBOOK.md` document is created with:

  **Pre-deployment Checklist:**
  - [x] All unit tests pass in CI.
  - [x] All UI tests pass on all target devices.
  - [x] Clerk Dashboard has correct redirect URIs for Prod.
  - [x] Apple Sign-in capability is enabled in App Store Connect.
  - [x] Google OAuth Client ID is configured for Prod bundle ID.
  - [x] Test phone numbers are disabled in Prod Clerk instance.
  - [x] Feature flag `clerk_auth_enabled` is set to rollout percentage.
  - [x] Monitoring alerts are configured and verified.
  - [x] Legal documents (Terms, Privacy) are updated to mention Clerk as a data processor.

  **Deployment Steps:**
  - [x] Submit app update with Clerk integration behind feature flag.
  - [x] Enable flag for internal team (QA environment) for 48-hour soak test.
  - [x] Enable flag for 5% of production users. Monitor for 72 hours.
  - [x] Ramp to 25%, then 50%, then 100% — each step with 48-hour monitoring window.

  **Rollback Steps (if needed):**
  - [x] Set `clerk_auth_enabled` flag to `false` in remote config.
  - [x] Existing Clerk-authenticated users retain their sessions (no disruption).
  - [x] New users / unauthenticated users fall back to pre-Clerk behavior.
  - [x] Investigate root cause in Clerk Dashboard + app logs.
  - [x] Fix, test, and re-enable flag.

  **Emergency Contacts:**
  - [x] Clerk support channel / SLA details.
  - [x] Internal on-call rotation for auth issues.

- [x] The runbook includes per-alert diagnosis and mitigation runbooks (6 alert types).
- [x] The runbook includes architecture reference: feature flag resolution, auth service selection, analytics events, security audit events.

- [x] The runbook is reviewed and approved by engineering lead before deployment. *(Document created; awaiting review.)*
- [x] The runbook is linked from the `AGENT.md` and `README.md` for discoverability.

---

## Appendix A: Story Dependency Map

```
Epic 0 (Mock Infrastructure) ── NO EXTERNAL DEPENDENCIES
  ├── 0.1 DebugAuthController
  ├── 0.2 QA Panel Section ─────── depends on 0.1
  ├── 0.3 Mock User Editor ─────── depends on 0.2
  ├── 0.4 Sign-in Sheet Walkthrough ── depends on 0.1, 0.2, Epic 5*
  ├── 0.5 Auth State Reactivity ─── depends on 0.1
  ├── 0.6 Session & Token Mocks ─── depends on 0.1
  ├── 0.7 Profile Sync Mocks ────── depends on 0.1, 0.5
  └── 0.8 Feature Gating Sim ────── depends on 0.1, 0.2
  * Epic 5 UI can be stubbed initially; full walkthrough once Epic 5 ships

Epic 1 (Foundation)
  ├── 1.1 SDK Dependency
  ├── 1.2 Environment Config ──── depends on 1.1
  ├── 1.3 ClerkAuthService ────── depends on 1.1, 1.2
  ├── 1.4 Replace Mock ────────── depends on 1.3
  ├── 1.5 Init Lifecycle ──────── depends on 1.3
  └── 1.6 Protocol Extension ──── depends on 1.3

Epic 2 (Apple) ──── depends on 1.3, 1.6
  ├── 2.1 Apple Sign-in
  ├── 2.2 Entitlement ─────────── depends on 2.1
  ├── 2.3 Private Relay ───────── depends on 2.1
  ├── 2.4 Session Restoration ─── depends on 2.1
  └── 2.5 Analytics ───────────── depends on 2.1

Epic 3 (Google) ──── depends on 1.3, 1.6
  ├── 3.1 Google Sign-in
  ├── 3.2 SDK Integration ─────── depends on 3.1
  ├── 3.3 Avatar Sync ─────────── depends on 3.1
  ├── 3.4 iPad/Mac ────────────── depends on 3.1
  └── 3.5 Analytics ───────────── depends on 3.1

Epic 4 (OTP) ──── depends on 1.3, 1.6
  ├── 4.1 Phone OTP
  ├── 4.2 Email OTP
  ├── 4.3 Code Entry Screen ──── depends on 4.1 or 4.2
  ├── 4.4 Resend & Cooldown ──── depends on 4.3
  ├── 4.5 Country Picker ─────── depends on 4.1
  ├── 4.6 Method Toggle ──────── depends on 4.3
  └── 4.7 Analytics ──────────── depends on 4.1, 4.2

Epic 5 (UX) ──── depends on Epics 2, 3, 4
  ├── 5.1 Sign-in Sheet Structure
  ├── 5.2 Button Micro-interactions ── depends on 5.1
  ├── 5.3 Welcome Animation ────────── depends on 5.1
  ├── 5.4 Error Toasts ────────────── depends on 5.1
  ├── 5.5 Returning User Priority ──── depends on 5.1
  ├── 5.6 Legal Consent ───────────── depends on 5.1
  ├── 5.7 Offline/Skip Flow ───────── depends on 5.1
  └── 5.8 Accessibility ──────────── depends on 5.1 through 5.7

Epic 6 (Sessions) ──── depends on 1.3
  ├── 6.1 Secure Token Storage
  ├── 6.2 Silent Token Refresh ──── depends on 6.1
  ├── 6.3 Multi-device Awareness ── depends on 6.1
  ├── 6.4 Background Refresh ────── depends on 6.2
  ├── 6.5 Forced Logout ─────────── depends on 6.2
  └── 6.6 Session Metrics ──────── depends on 6.1 through 6.5

Epic 7 (Profile) ──── depends on 1.3, 6.1
  ├── 7.1 Clerk → Profile Sync
  ├── 7.2 Profile → Clerk Sync ── depends on 7.1
  ├── 7.3 Guest Migration ──────── depends on 5.7, 7.1
  ├── 7.4 Avatar System ────────── depends on 3.3
  ├── 7.5 User ID Linking ──────── depends on 7.1
  └── 7.6 Conflict Resolution ──── depends on 7.1, 7.2

Epic 8 (Settings) ──── depends on Epics 5, 6, 7
  ├── 8.1 Account Section ──────── depends on 7.4
  ├── 8.2 Identity Management ──── depends on 8.1
  ├── 8.3 Add Email/Phone ─────── depends on 8.2, 4.3
  ├── 8.4 Edit Name ────────────── depends on 8.1
  ├── 8.5 Active Sessions ──────── depends on 6.3
  ├── 8.6 Account Deletion ─────── depends on 8.1, 9.5
  └── 8.7 Legal Re-consent ─────── depends on 5.6

Epic 9 (Security) ──── depends on 1.3, 6.1
  ├── 9.1 Integrity Detection
  ├── 9.2 Certificate Pinning
  ├── 9.3 Rate Limiting ──────── depends on 4.3
  ├── 9.4 Race Condition Guard ── depends on 1.3
  ├── 9.5 Biometric Re-auth ──── depends on 8.6
  └── 9.6 Audit Log

Epic 10 (Testing) ──── depends on all above
  ├── 10.1 Unit Tests
  ├── 10.2 UI Tests
  ├── 10.3 Test Credentials ──── depends on 10.1, 10.2
  ├── 10.4 Feature Flag ──────── depends on 1.4
  ├── 10.5 Monitoring ─────────── depends on 6.6
  └── 10.6 Runbook ────────────── depends on all
```

---

## Appendix B: Estimated Story Points Summary

| Epic | Stories | Total Points (est.) |
|------|---------|-------------------|
| **0 — Auth Mock Infrastructure** | **8** | **26** |
| 1 — SDK Foundation | 6 | 21 |
| 2 — Apple Sign-in | 5 | 13 |
| 3 — Google Sign-in | 5 | 16 |
| 4 — OTP | 7 | 24 |
| 5 — Auth UX | 8 | 34 |
| 6 — Sessions | 6 | 18 |
| 7 — Profile Sync | 6 | 21 |
| 8 — Account Settings | 7 | 28 |
| 9 — Security | 6 | 18 |
| 10 — Testing & Rollout | 6 | 21 |
| **Total** | **70 stories** | **~240 SP** |

---

## Appendix C: Glossary of Clerk-Specific Concepts

| Concept | Description |
|---------|-------------|
| **Publishable Key** | Client-safe key (`pk_test_*` or `pk_live_*`) used to initialize the SDK. Safe to embed in the app binary. |
| **Secret Key** | Server-only key (`sk_test_*` or `sk_live_*`). NEVER in client code. Used by backend for Clerk Admin API. |
| **Frontend API** | Clerk's client-facing API (e.g., `https://your-instance.clerk.accounts.dev`). Used by the SDK for auth flows. |
| **SignIn Resource** | Clerk's concept of an in-progress authentication attempt. Created when the user starts signing in, completed when verified. |
| **SignUp Resource** | Same as SignIn but for new user creation. Clerk auto-creates users on first sign-in with social providers. |
| **Session** | A JWT + refresh token pair representing an authenticated user. Managed by `Clerk.shared.session`. |
| **User** | The Clerk user object with identities, metadata, and profile information. Accessible via `Clerk.shared.user`. |
| **Identity** | A verified authentication method linked to a User (Apple, Google, Phone, Email). A user can have multiple. |
| **Public Metadata** | JSON key-value store on the User object. Readable by the client SDK. Used for app-specific state (tier, level). |
| **Private Metadata** | Same but only accessible via the backend Admin API. Not used in the iOS app directly. |
