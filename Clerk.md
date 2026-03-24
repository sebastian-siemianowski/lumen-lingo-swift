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

- [ ] `project.yml` declares a Swift Package dependency for `clerk-ios` from `https://github.com/clerk/clerk-ios` with a minimum version constraint (e.g., `from: "1.0.0"`).
- [ ] The `LumenLingo` target in `project.yml` lists `ClerkSDK` (or Clerk's module name) under `dependencies`.
- [ ] Running `xcodegen generate && xcodebuild -resolvePackageDependencies` completes without errors in all 10 build configurations.
- [ ] `import ClerkSDK` compiles in a new empty Swift file within the target.
- [ ] The resolved package version is pinned in `Package.resolved` and committed to source control.
- [ ] No other targets (tests, UI tests) import ClerkSDK unless explicitly required by a later story.

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

- [ ] Two new build config variables are added to `project.yml` for each environment:
  - `CLERK_PUBLISHABLE_KEY` — the Clerk publishable key (e.g., `pk_test_...` for non-prod, `pk_live_...` for prod).
  - `CLERK_INSTANCE_URL` — the Clerk Frontend API URL (optional; required only if using a custom domain).
- [ ] `Info.plist` gains two new entries: `ClerkPublishableKey: $(CLERK_PUBLISHABLE_KEY)` and `ClerkInstanceURL: $(CLERK_INSTANCE_URL)`.
- [ ] `EnvironmentConfig` (in `AppEnvironment.swift`) exposes `clerkPublishableKey: String` and `clerkInstanceURL: URL?` read from `Bundle.main.infoDictionary`.
- [ ] The app crashes with a `fatalError("Missing CLERK_PUBLISHABLE_KEY")` in Debug builds if the key is empty — fail loud, fail fast.
- [ ] In Release builds, missing key logs an error to the crash reporter and falls back to offline mode (no crash).
- [ ] `.env.example` or equivalent documentation lists placeholder values for all five environments.
- [ ] No Clerk secret keys are stored in source control, `Info.plist`, or client-side code — ever.

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

- [ ] `ClerkAuthService` is declared as `@MainActor @Observable final class ClerkAuthService: AuthServiceProtocol, @unchecked Sendable`.
- [ ] It initializes the Clerk SDK with the publishable key from `EnvironmentConfig` during `init()`.
- [ ] `currentUser` maps from `Clerk.shared.user` to the existing `AppUser(name:email:avatarURL:)` struct. Returns `nil` when not authenticated.
- [ ] `isAuthenticated` returns `true` iff `Clerk.shared.session` is non-nil and not expired.
- [ ] `isLoading` is `true` during any async Clerk operation (sign-in, sign-out, token refresh) and `false` otherwise.
- [ ] `login()` is a no-op that throws `AuthError.useSpecificMethod` — callers must use provider-specific methods (Apple, Google, OTP) added in Epics 2–4. This prevents accidental use of the generic method.
- [ ] `logout()` calls `Clerk.shared.signOut()`, clears the local session cache, and sets `currentUser = nil`.
- [ ] `checkAuthState()` calls `Clerk.shared.client` to restore the session from Clerk's secure token storage. If a valid session exists, populates `currentUser`. If expired, attempts silent refresh. If refresh fails, sets `isAuthenticated = false` — no error thrown.
- [ ] The service publishes a `Notification.Name.authStateDidChange` notification on every auth state transition for cross-cutting listeners (analytics, logging).
- [ ] Unit tests verify: init with valid key, init with missing key, session restore success, session restore failure, logout clears state.

---

### Story 1.4 — Replace MockAuthService at App Root

**As a** developer  
**I want** `LumenLingoApp.swift` to inject `ClerkAuthService` instead of `MockAuthService`  
**So that** all views and services downstream receive the real auth implementation while preserving the ability to swap in the mock for previews and tests.

**Context:**  
`LumenLingoApp.swift` currently creates services as `@State` properties and injects them via `.environment()`. The auth service pattern should follow this exactly — conditional compilation for previews.

**Acceptance Criteria:**

- [ ] In `LumenLingoApp.swift`, a new `@State private var authService` is declared.
  - In `#if DEBUG && targetEnvironment(simulator)` + a compile flag `USE_MOCK_AUTH`, it initializes `MockAuthService()`.
  - Otherwise, it initializes `ClerkAuthService()`.
- [ ] `.environment(authService)` is added to the root view modifier chain, after `.environment(tierManager)`.
- [ ] On app launch (`.onAppear` or `.task`), `authService.checkAuthState()` is called to restore any persisted session before the first frame renders.
- [ ] SwiftUI Previews in all existing view files continue to compile and render — they use `MockAuthService` injected via preview providers.
- [ ] The `ContentView` (tab controller) reads `@Environment(ClerkAuthService.self)` only to observe `isAuthenticated` — it does not call `login()` directly.
- [ ] If `checkAuthState()` determines the user is not authenticated, `ContentView` presents the sign-in sheet (Story 5.1) as a `.fullScreenCover`.

**Technical Notes:**
- Use `any AuthServiceProtocol` as the environment key type if possible, to allow both mock and real to be injected. If Swift's `@Observable` erasure makes this difficult, use a concrete type with a protocol extension.

---

### Story 1.5 — Clerk Initialization Lifecycle

**As a** developer  
**I want** the Clerk SDK initialized exactly once, at the correct point in the app lifecycle  
**So that** the SDK is ready before any view attempts authentication, and initialization failures are handled gracefully without leaving the app in a broken state.

**Acceptance Criteria:**

- [ ] Clerk SDK initialization occurs in `ClerkAuthService.init()`, which is called from `LumenLingoApp.init()` (via `@State` property initialization).
- [ ] Initialization is synchronous — it configures the SDK with the publishable key but does not make network calls.
- [ ] The first network call (`checkAuthState()`) is deferred to the `.task` modifier on the root view, ensuring the UI is laid out before any async work begins.
- [ ] If the Clerk SDK throws during initialization (e.g., invalid key format), `ClerkAuthService` captures the error in an `initializationError: ClerkError?` property.
- [ ] Views can observe `initializationError` to display a diagnostic banner in Debug builds ("Clerk init failed: {error}") or silently fall back to offline mode in Release builds.
- [ ] The initialization sequence is logged at `.info` level: `"Clerk SDK initialized for environment: {env}"`.
- [ ] Double-initialization is guarded — calling `init()` a second time is a no-op with a warning log.

---

### Story 1.6 — AuthServiceProtocol Extension for Provider Methods

**As a** developer  
**I want** `AuthServiceProtocol` extended with optional provider-specific method signatures  
**So that** Epics 2–4 can add `.signInWithApple()`, `.signInWithGoogle()`, `.requestOTP()`, and `.verifyOTP()` without breaking the existing protocol contract.

**Acceptance Criteria:**

- [ ] `AuthServiceProtocol` gains new method requirements with default no-op implementations in a protocol extension:
  ```swift
  func signInWithApple() async throws
  func signInWithGoogle(presenting: UIViewController) async throws
  func requestOTP(to destination: OTPDestination) async throws
  func verifyOTP(code: String) async throws
  ```
- [ ] `OTPDestination` is defined as:
  ```swift
  enum OTPDestination: Equatable {
      case phone(String)   // E.164 format, e.g. "+44 7700 900000"
      case email(String)   // RFC 5322 format
  }
  ```
- [ ] Default implementations in the protocol extension throw `AuthError.notSupported` — this ensures `MockAuthService` and future test doubles don't need to implement methods they don't use.
- [ ] `ClerkAuthService` overrides all four methods with real implementations (wired in Epics 2–4).
- [ ] `AuthError` enum is extended with cases: `.notSupported`, `.useSpecificMethod`, `.clerkError(underlying: Error)`, `.rateLimited(retryAfter: TimeInterval)`, `.cancelled`, `.invalidOTP`, `.otpExpired`.
- [ ] Each `AuthError` case has a `localizedDescription` that is user-friendly (no stack traces, no Clerk internals).

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

- [ ] Tapping the "Sign in with Apple" button presents the native `ASAuthorizationController` sheet — this is not a web view, not a Clerk-hosted page, it is the system-native Apple sign-in sheet.
- [ ] The user authenticates with Face ID, Touch ID, or device passcode — whichever their device supports.
- [ ] Upon successful Apple authentication, the Apple identity token is exchanged with Clerk server-side to create or retrieve a Clerk user.
- [ ] If the user is new, a Clerk user is created with:
  - `firstName` from Apple (if shared — Apple lets users hide it)
  - `email` from Apple (may be the Private Relay email)
  - Apple identity linked to the Clerk user
- [ ] If the user already exists (same Apple ID), the existing Clerk user is returned — no duplicate accounts.
- [ ] `ClerkAuthService.currentUser` is populated immediately after successful sign-in.
- [ ] `isAuthenticated` transitions to `true` before the sign-in sheet dismisses.
- [ ] The entire flow — from button tap to authenticated state — completes in under 3 seconds on a typical network connection.
- [ ] The process works on first app launch (no prior session) and on subsequent launches (session restore).

**Error Handling:**
- [ ] If the user cancels the Apple sheet, no error is shown — the sign-in sheet remains visible with no state change.
- [ ] If Apple authentication succeeds but Clerk token exchange fails (network error), a toast appears: "Connection issue. Please try again." with a retry affordance.
- [ ] If the Apple ID is already linked to a different Clerk user (account conflict), the error is surfaced clearly: "This Apple ID is already linked to another account. Please sign in with your original method."

---

### Story 2.2 — Apple Sign-in Entitlement & Capability

**As a** developer  
**I want** the Sign in with Apple capability added to the Xcode project and provisioning profile  
**So that** `ASAuthorizationController` works without runtime capability errors.

**Acceptance Criteria:**

- [ ] `project.yml` includes the `Sign in with Apple` entitlement under the app target's capabilities.
- [ ] The entitlements file (`LumenLingo.entitlements`) contains `com.apple.developer.applesignin` with value `["Default"]`.
- [ ] The App ID in Apple Developer Portal has "Sign in with Apple" capability enabled for all bundle ID variants (dev, prod).
- [ ] Running on a physical device, the Apple sign-in sheet appears without crashing or showing "Sign in with Apple is not available" errors.
- [ ] Simulator testing works with the simulated Apple ID flow.

---

### Story 2.3 — Apple Private Relay Email Handling

**As a** user who hides their email during Apple sign-in  
**I want** the app to work seamlessly with Apple's Private Relay email  
**So that** my real email remains private and I still receive any critical notifications.

**Context:**  
Apple allows users to hide their real email and receive a randomly-generated Private Relay address (e.g., `dpdx4f@privaterelay.appleid.com`). This email forwards to the user's real inbox. Clerk stores whatever Apple provides. The app must handle this gracefully.

**Acceptance Criteria:**

- [ ] The `UserProfile.email` field stores whatever email Apple/Clerk provides — including Private Relay addresses.
- [ ] The app never displays the raw Private Relay email in user-facing UI. Instead, email display follows this logic:
  - If the email contains `privaterelay.appleid.com` → display "Apple Private Email" with a lock icon.
  - Otherwise → display the email normally.
- [ ] OTP-to-email works with Private Relay addresses — Clerk sends the code, Apple forwards it. (Verified in QA with a real Private Relay account.)
- [ ] Profile views show the user's name (from Apple or manually entered) prominently, with email secondary and de-emphasized.
- [ ] If the user later adds a real email (Story 8.3), it can coexist with the Apple Private Relay identity.

---

### Story 2.4 — Apple Sign-in Session Restoration

**As a** returning user who previously signed in with Apple  
**I want** the app to automatically restore my session on launch  
**So that** I never see a sign-in screen unless I explicitly signed out.

**Acceptance Criteria:**

- [ ] On app launch, `checkAuthState()` attempts to restore the Clerk session from secure storage.
- [ ] If a valid, non-expired session exists → `isAuthenticated` is `true` before the first frame of `ContentView` renders. The user sees their dashboard immediately.
- [ ] If the session is expired but a refresh token exists → silent refresh is attempted. If successful, the user sees the dashboard. If failed (e.g., token revoked), the sign-in sheet appears.
- [ ] Session restoration completes within 500ms from cold launch for locally-cached tokens (no network required for initial check).
- [ ] The splash screen (launch storyboard) remains visible until auth state is determined — no flash of sign-in sheet followed by dashboard.
- [ ] After session restore, `UserProfile` is synced from Clerk metadata (Story 7.2) to ensure local data reflects any server-side changes.

---

### Story 2.5 — Apple Sign-in Analytics Events

**As a** product owner  
**I want** Sign in with Apple events tracked in analytics  
**So that** I can measure conversion rates, drop-off points, and error frequency.

**Acceptance Criteria:**

- [ ] The following events are emitted via the existing analytics pipeline:
  | Event Name | Properties | When |
  |-----------|-----------|------|
  | `auth_apple_started` | `is_new_user: Bool` | User taps Apple sign-in button |
  | `auth_apple_sheet_presented` | — | System Apple sheet appears |
  | `auth_apple_sheet_cancelled` | — | User dismisses Apple sheet |
  | `auth_apple_succeeded` | `is_new_user: Bool, has_private_email: Bool` | Clerk session created |
  | `auth_apple_failed` | `error_code: String, error_domain: String` | Any failure after Apple succeeds but Clerk fails |
- [ ] Events are fire-and-forget — analytics failures never block or delay the auth flow.
- [ ] All events include standard context: `app_version`, `os_version`, `device_model`, `environment`.
- [ ] No PII (email, name, Apple user ID) is included in any analytics event.

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

- [ ] Tapping the "Sign in with Google" button initiates the Google authentication flow.
- [ ] The user sees a native-feeling account picker — either Google's SDK sheet or a well-styled `SFSafariViewController` with Clerk's OAuth. No `WKWebView`.
- [ ] The user selects their Google account and consents to basic profile scopes (`email`, `profile`).
- [ ] Upon successful Google authentication, the Google credential (ID token or OAuth code) is exchanged with Clerk to create or retrieve a Clerk user.
- [ ] If the user is new, a Clerk user is created with:
  - `firstName` from Google profile
  - `email` from Google (verified by Google)
  - Google identity linked to the Clerk user
  - `avatarURL` from Google profile picture (if available)
- [ ] If the user already exists (same Google account / email), the existing Clerk user is returned.
- [ ] `ClerkAuthService.currentUser` is populated, `isAuthenticated` becomes `true`.
- [ ] The flow completes in under 5 seconds on a typical connection (Google's OAuth is slightly slower than Apple's native sheet).

**Error Handling:**
- [ ] User cancels → no error, sign-in sheet remains.
- [ ] Google auth succeeds but Clerk exchange fails → toast: "Connection issue. Please try again."
- [ ] Google account email matches an existing Clerk user with a different provider → Clerk's account linking policy applies. If auto-linking is enabled, accounts merge. If not, a clear error explains the conflict.
- [ ] Network timeout (>10 seconds) → the flow cancels gracefully with a toast and the user can retry.

---

### Story 3.2 — Google Sign-in SDK Integration

**As a** developer  
**I want** the Google Sign-In SDK configured and integrated with the app  
**So that** the native Google account picker is available and the resulting credentials flow through Clerk.

**Acceptance Criteria:**

- [ ] Google Sign-In SDK is added via SPM (or CocoaPods if SPM is not supported) in `project.yml`.
- [ ] The Google OAuth Client ID is configured per-environment in `project.yml` build config variables (`GOOGLE_CLIENT_ID`).
- [ ] `Info.plist` includes the reversed client ID as a URL scheme for OAuth callback (e.g., `com.googleusercontent.apps.{CLIENT_ID}`).
- [ ] `project.yml` registers the URL scheme under `CFBundleURLTypes`.
- [ ] `ClerkAuthService.signInWithGoogle(presenting:)` uses the Google SDK to obtain an ID token, then passes it to Clerk's `signIn.create(strategy: .oauth_google, token:)` or equivalent API.
- [ ] The `SceneDelegate` or SwiftUI `onOpenURL` handler routes the Google OAuth callback URL to the Google SDK.
- [ ] Works correctly when the user has zero, one, or multiple Google accounts signed into their device.

---

### Story 3.3 — Google Account Avatar Sync

**As a** user who signed in with Google  
**I want** my Google profile picture to appear as my avatar in the app  
**So that** the app feels personalized and I recognize my account at a glance.

**Acceptance Criteria:**

- [ ] Upon sign-in, the `avatarURL` from Google (via Clerk user metadata) is stored in `AppUser.avatarURL`.
- [ ] The avatar is displayed as a circular image in:
  - The profile tab header
  - The settings/account section
  - Any future user-facing avatar locations
- [ ] Avatar is loaded asynchronously with `AsyncImage` or equivalent, with a gradient placeholder showing the user's initials while loading.
- [ ] The avatar is cached locally (URL cache or disk cache) so it appears instantly on subsequent launches.
- [ ] If the user has no avatar (Apple sign-in, or Google without profile picture), the placeholder with initials + gradient remains — no broken image icons, no empty circles.
- [ ] The avatar updates if the user changes their Google profile picture and re-authenticates.

---

### Story 3.4 — Google Sign-in on iPad & Mac Catalyst

**As a** user on iPad or Mac (Catalyst/Designed for iPad)  
**I want** Google sign-in to work correctly on my device  
**So that** I'm not blocked from authenticating on larger screens.

**Acceptance Criteria:**

- [ ] The Google OAuth flow or SDK sheet presents correctly on iPad (not anchored to top-left corner — uses `popoverPresentationController` sourceView if needed).
- [ ] On Mac Catalyst (if supported), the OAuth callback URL scheme is registered and the flow completes without hanging.
- [ ] The sign-in sheet layout (Story 5.1) adapts to iPad widths — buttons don't stretch to full width on a 12.9" display. Max button width is 400pt, centered.
- [ ] Split-screen multitasking on iPad does not break the OAuth callback.

---

### Story 3.5 — Google Sign-in Analytics Events

**As a** product owner  
**I want** Google sign-in events tracked  
**So that** I can compare Google vs. Apple conversion rates and identify provider-specific issues.

**Acceptance Criteria:**

- [ ] Events emitted:
  | Event Name | Properties | When |
  |-----------|-----------|------|
  | `auth_google_started` | `is_new_user: Bool` | User taps Google button |
  | `auth_google_picker_presented` | — | Google account picker appears |
  | `auth_google_picker_cancelled` | — | User dismisses picker |
  | `auth_google_succeeded` | `is_new_user: Bool, has_avatar: Bool` | Clerk session created |
  | `auth_google_failed` | `error_code: String` | Any failure in the flow |
- [ ] Same standards as Apple events: no PII, fire-and-forget, standard context included.

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
- [ ] On "Send Code" tap, `ClerkAuthService.requestOTP(to: .phone("+447700900000"))` is called.
- [ ] Clerk creates a sign-in attempt and sends the SMS.
- [ ] The UI transitions to the code entry screen (Story 4.3) with a smooth slide animation.
- [ ] A toast confirms: "Code sent to +44 •••• 0000" (partially masked for privacy).
- [ ] The phone number field uses `.keyboardType(.phonePad)` — no letters, no autocomplete suggestions.
- [ ] The country code picker is searchable by country name or dialling code.

**Error Handling:**
- [ ] If the phone number is undeliverable (Clerk returns an error): "We couldn't send a code to this number. Please check and try again."
- [ ] If rate limited (too many requests): "Too many codes requested. Please wait {n} minutes." The "Send Code" button is disabled with a countdown timer.
- [ ] Network failure: "No connection. Please check your internet and try again."

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
- [ ] On "Send Code" tap, `ClerkAuthService.requestOTP(to: .email("user@example.com"))` is called.
- [ ] Clerk creates a sign-in attempt and sends the email with the 6-digit code.
- [ ] The UI transitions to the code entry screen (Story 4.3).
- [ ] A toast confirms: "Code sent to u•••@example.com" (partially masked).
- [ ] AutoFill from the keyboard works — if the user receives the email and iOS suggests the code via the notification banner, it should auto-fill (this depends on Clerk's email format matching Apple's OTP detection heuristics).

**Error Handling:**
- [ ] Undeliverable email: "We couldn't send a code to this email. Please check the address."
- [ ] Rate limited: same countdown UX as phone.
- [ ] Network failure: same messaging as phone.

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
- [ ] Once all 6 digits are entered, verification begins automatically — no "Submit" button needed.
- [ ] A brief loading state appears: the 6 cells shimmer with a travelling gradient (left-to-right, 0.8s cycle).
- [ ] On success: the cells turn green simultaneously, a checkmark appears center-screen with a scale-spring animation, and the screen dismisses after 600ms.
- [ ] On success, a subtle haptic plays (`UIImpactFeedbackGenerator.style: .medium`).
- [ ] `isAuthenticated` transitions to `true` during the success animation — by the time the sheet dismisses, the dashboard is ready underneath.

**Error States:**
- [ ] If the code is wrong: all 6 cells shake horizontally (±10pt, 3 cycles, 300ms) and turn red briefly (500ms), then clear and refocus on cell 1. A haptic plays (`.notificationOccurred(.error)`).
- [ ] Text below cells changes to: "Incorrect code. Please try again." in a warm red tone.
- [ ] After 3 consecutive wrong attempts: "Too many attempts. Please request a new code." The resend link is highlighted.
- [ ] If the code is expired (>10 minutes): "This code has expired. Please request a new one." Resend link is highlighted.

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
- [ ] Tapping "Resend code" triggers a new `requestOTP()` call to Clerk, resets the countdown to 60 seconds (longer on each subsequent resend: 30s → 60s → 120s), and shows a toast: "New code sent."
- [ ] The old code is invalidated server-side when a new code is requested.
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

- [ ] Events emitted:
  | Event Name | Properties | When |
  |-----------|-----------|------|
  | `auth_otp_requested` | `method: phone\|email, country_code: String?` | Code request sent to Clerk |
  | `auth_otp_delivered` | `method, delivery_time_ms: Int` | (If Clerk provides delivery callback — otherwise skip) |
  | `auth_otp_entered` | `method, attempt_number: Int, was_autofill: Bool` | User submits 6 digits |
  | `auth_otp_succeeded` | `method, is_new_user: Bool, total_attempts: Int` | Code verified, session created |
  | `auth_otp_failed` | `method, error_type: expired\|wrong\|rate_limited` | Verification failed |
  | `auth_otp_resend` | `method, resend_count: Int` | User taps resend |
  | `auth_otp_method_switch` | `from: phone\|email, to: phone\|email` | User switches delivery method |
- [ ] `was_autofill` is detected by comparing code entry time: if all 6 digits arrive within 100ms of each other, it was auto-filled.
- [ ] `country_code` is included only for phone OTP (no PII — just the country code, not the full number).
- [ ] No phone numbers or email addresses in analytics events — ever.

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
- [ ] The sign-in sheet appears as a `.fullScreenCover` with a custom transition: the cosmic nebula background fades in over 800ms while the content slides up from the bottom with a spring animation.
- [ ] The sheet is non-dismissible (no swipe-to-dismiss) — the user must authenticate or explicitly cancel to a limited offline mode.
- [ ] The nebula background renders behind the sign-in content (same `MetalCosmicRenderer` as the main app, but at a lower frame rate — 15fps to save GPU during auth).

**Layout (top to bottom):**
1. **App Logo & Name** — The LumenLingo logo (cosmic orb or equivalent brand mark) centered, 80pt, with a subtle floating animation (±4pt vertical, 3s cycle). Below it, "LumenLingo" in the app's display font, 28pt.
2. **Tagline** — "Learn languages through light" or equivalent — 16pt, secondary text color, 8pt below the app name.
3. **Spacer** — flexible, pushes buttons toward bottom third of screen.
4. **Sign-in Buttons** — stacked vertically, 16pt spacing between them:
   - "Sign in with Apple" — system `SignInWithAppleButton` (dark style in dark mode, light in light mode), full-width (max 360pt), 50pt height, 12pt corner radius.
   - "Sign in with Google" — custom button matching Apple's dimensions, with Google "G" logo, "Sign in with Google" label, white background with 1pt border, dark text.
   - "Sign in with Phone or Email" — custom button, ghost style (transparent background, accent-colored border), matching dimensions. Icon: a key or magic wand.
5. **Terms Notice** — "By continuing, you agree to our [Terms of Service] and [Privacy Policy]" — 12pt, tertiary text color, links open in-app browser. 16pt below last button.
6. **Offline Mode Link** — "Continue without an account" — 14pt, tertiary text, 24pt below terms. Available only if `TierManager` allows free-tier features without auth.

**Responsiveness:**
- [ ] On iPhone SE (smallest supported): all buttons visible without scrolling, logo may shrink to 60pt.
- [ ] On iPad: buttons centered with max-width 400pt, generous vertical spacing.
- [ ] Landscape orientation: logo and tagline move to a leading column, buttons to trailing column (side-by-side layout).

---

### Story 5.2 — Sign-in Button Micro-interactions

**As a** user interacting with the sign-in buttons  
**I want** tactile, responsive feedback on every tap  
**So that** the interface feels alive and high-quality, reinforcing trust before I hand over my credentials.

**Acceptance Criteria:**

- [ ] **Press state:** On touch-down, the button scales to 0.96× with a 100ms ease-in. On release, it springs back to 1.0× (spring damping 0.7, response 0.3s).
- [ ] **Haptic:** A light haptic fires on touch-down (`UIImpactFeedbackGenerator.style: .light`).
- [ ] **Loading state:** After tap, while the auth flow is in progress:
  - The button text fades to 50% opacity over 200ms.
  - A small spinner (16pt, accent color) appears inline to the left of the text.
  - The button is disabled (not tappable, reduced opacity on other buttons too — prevent dual sign-in attempts).
  - Other sign-in buttons fade to 30% opacity to visually indicate "this one is in progress."
- [ ] **Success state:** On successful auth (before the sheet dismisses):
  - The active button's spinner is replaced by a checkmark (16pt, green).
  - The button background briefly flashes with a soft green tint (200ms fade-in, 400ms hold).
  - All other buttons remain dimmed.
- [ ] **Error state:** If the flow fails (but is retriable):
  - The active button returns to its normal state over 300ms.
  - Other buttons return to full opacity.
  - The error toast appears above the buttons (Story 5.4).

---

### Story 5.3 — Cosmic Welcome Animation (First Launch)

**As a** first-time user  
**I want** a brief, captivating welcome animation before the sign-in options appear  
**So that** I immediately understand this is not a generic app — it's something special.

**Context:**  
This animation plays only once — the very first time the app launches on a device (tracked via `UserDefaults("hasSeenWelcomeAnimation")`). Returning users who are unauthenticated (session expired) see the sign-in sheet without the animation.

**Acceptance Criteria:**

- [ ] On first launch, after the splash screen:
  1. The cosmic nebula background fades in over 1.2 seconds.
  2. The LumenLingo logo materializes from particles: hundreds of tiny dots (1-3pt, accent-colored) converge from random positions to form the logo shape over 1.5 seconds, with a subtle gravitational ease-in.
  3. "LumenLingo" types in letter-by-letter below the logo (80ms per character, monospaced during typing, transitions to display font after complete).
  4. The tagline fades in over 600ms.
  5. The sign-in buttons slide up from below the screen edge with staggered timing (200ms between each button, spring animation).
- [ ] Total animation duration: ~4 seconds from splash screen to fully interactive buttons.
- [ ] The animation is skippable: tapping anywhere during the animation fast-forwards to the final state (all elements in place, buttons interactive) over 300ms.
- [ ] The animation runs at 60fps on iPhone 12 and later. On older devices (detected via `ProcessInfo.processInfo.thermalState` or device model), a simplified version plays (no particles, just fade-ins).
- [ ] `UserDefaults("hasSeenWelcomeAnimation")` is set to `true` after the animation completes or is skipped.
- [ ] The animation does not block Clerk SDK initialization — the SDK initializes in the background during the animation.

---

### Story 5.4 — Sign-in Error Toasts

**As a** user who encounters an error during sign-in  
**I want** clear, non-alarming error messages that tell me what to do next  
**So that** I'm not frustrated or confused, and I can resolve the issue quickly.

**Acceptance Criteria:**

**Toast Design:**
- [ ] Error toasts appear at the top of the sign-in sheet, sliding down from behind the status bar with a spring animation.
- [ ] Toast background: dark frosted glass (same style as app's `GlassPanelWrapper`) with a subtle red-tinted left border (4pt wide).
- [ ] Toast content: an icon (exclamation circle, 20pt, warm red) + message text (14pt, primary text color) + optional action button (e.g., "Retry").
- [ ] Toast auto-dismisses after 5 seconds, or on tap, or when the user starts a new sign-in attempt.
- [ ] Toast dismiss animation: slide up + fade out over 300ms.

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

- [ ] The toast queue is FIFO — if multiple errors occur quickly, they stack (max 2 visible, older ones dismiss to make room).
- [ ] Toasts do not overlap the sign-in buttons — they push content down if needed.
- [ ] VoiceOver announces the toast message as a `.announcement` notification when it appears.

---

### Story 5.5 — Adaptive Sign-in for Returning Users

**As a** returning user whose session expired  
**I want** the sign-in sheet to remember and prioritize my previous sign-in method  
**So that** I can re-authenticate faster without figuring out which method I used last time.

**Acceptance Criteria:**

- [ ] When the user previously signed in successfully, the sign-in method (`apple`, `google`, `phone`, `email`) is persisted in `UserDefaults("lastSignInMethod")`.
- [ ] On the sign-in sheet for returning users:
  - The previously-used method's button is promoted to the top position, larger (56pt height vs. 50pt for others), with a subtle glow border in the accent color.
  - A label above it reads: "Welcome back" (not "Sign in" — the tone shifts for returning users).
  - The other buttons remain available below, at standard size.
- [ ] If the last method was Phone or Email, the previously-used identifier (phone number or email) is pre-filled in the input field (stored securely in Keychain, not UserDefaults).
- [ ] The user can still choose a different method — the prioritization is a convenience, not a lock-in.
- [ ] If this is a fresh install (no `lastSignInMethod`), the default order is: Apple → Google → Phone/Email (Apple first because it's the fastest path).

---

### Story 5.6 — Legal Consent Capture During Sign-in

**As a** product owner  
**I want** the user's agreement to Terms of Service and Privacy Policy captured during sign-in  
**So that** legal consent is recorded with a timestamp and version, satisfying GDPR/CCPA requirements.

**Context:**  
The app already has `UserProfile.legalConsentVersion` and `UserProfile.legalConsentDate` fields. The sign-in flow must populate these.

**Acceptance Criteria:**

- [ ] The terms notice at the bottom of the sign-in sheet reads: "By continuing, you agree to our [Terms of Service](link) and [Privacy Policy](link)."
- [ ] Tapping "Terms of Service" or "Privacy Policy" opens the respective page in `SFSafariViewController` (in-app, not external Safari). The sign-in sheet remains underneath.
- [ ] By tapping any sign-in button, the user implicitly consents to the current legal version. This is standard practice for "by continuing" patterns.
- [ ] After successful authentication:
  - `UserProfile.legalConsentVersion` is set to the current legal document version (e.g., `"2026.03.24"`).
  - `UserProfile.legalConsentDate` is set to `Date.now`.
- [ ] If the legal version changes after the user signed up, a re-consent prompt is shown on next launch (Story 8.7).
- [ ] The consent event is logged: `legal_consent_captured` with properties: `version`, `method` (apple/google/otp), `timestamp`.

---

### Story 5.7 — Offline / Skip Authentication Flow

**As a** user who wants to try the app before creating an account  
**I want** to continue without signing in  
**So that** I can explore the free-tier features before committing to an account.

**Acceptance Criteria:**

- [ ] The "Continue without an account" link at the bottom of the sign-in sheet is visible and tappable.
- [ ] Tapping it presents a brief confirmation sheet explaining the tradeoffs:
  - "You'll have access to free features, but your progress won't sync across devices."
  - "You can sign in anytime from Settings to unlock sync and more features."
  - Two buttons: "Continue as Guest" (primary) and "Sign in instead" (secondary).
- [ ] Tapping "Continue as Guest":
  - Creates a local-only `UserProfile` with no Clerk user linked.
  - Sets `isAuthenticated = false` but allows the app to proceed to the dashboard.
  - `TierManager` is set to `.free` tier.
  - A persistent banner at the top of the dashboard reads: "Sign in to save your progress" with a "Sign in" button. This banner is dismissible (once per session) but returns on next launch.
- [ ] Guest users can use all free-tier features: limited language pairs, basic games, no soundscapes.
- [ ] Guest progress (XP, streaks) is stored locally and can be merged with a Clerk account if they sign in later (Story 7.5).
- [ ] Analytics event: `auth_skipped` with `is_first_launch: Bool`.

---

### Story 5.8 — Sign-in Sheet Accessibility

**As a** user who relies on assistive technology  
**I want** the sign-in sheet to be fully accessible  
**So that** I can authenticate independently regardless of my abilities.

**Acceptance Criteria:**

**VoiceOver:**
- [ ] All sign-in buttons have descriptive labels: "Sign in with Apple", "Sign in with Google", "Sign in with phone or email".
- [ ] The OTP code entry cells are grouped as a single accessible element with label: "Verification code, {n} of 6 digits entered" that updates as digits are typed.
- [ ] The terms notice links are individually focusable and announce as "Terms of Service, link" and "Privacy Policy, link".
- [ ] The welcome animation (Story 5.3) is skipped entirely when VoiceOver is active — the sign-in sheet appears immediately with buttons ready.
- [ ] Error toasts are announced via `UIAccessibility.post(notification: .announcement)`.

**Dynamic Type:**
- [ ] All text on the sign-in sheet scales with Dynamic Type from `xSmall` to `xxxLarge`.
- [ ] At the largest text sizes, the layout gracefully reflows: buttons stack with increased height, the logo shrinks, and the terms text wraps.
- [ ] No text is truncated at any Dynamic Type size — verified with accessibility inspector.

**Reduce Motion:**
- [ ] When `UIAccessibility.isReduceMotionEnabled` is `true`:
  - The welcome animation is replaced with a simple fade-in.
  - Button press animations are reduced to opacity changes only (no scale).
  - The OTP cell glow becomes a static highlight instead of a pulse.
  - Toast transitions are instant appear/disappear (no slide).

**Switch Control & Full Keyboard Access:**
- [ ] All interactive elements are reachable via Tab key and Switch Control scanning.
- [ ] The sign-in buttons respond to the Return/Enter key when focused.
- [ ] Focus order follows visual order: top to bottom, left to right.

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

- [ ] After successful authentication, the Clerk session token (JWT) and refresh token are persisted by the Clerk SDK.
- [ ] Verification: tokens are stored in the iOS Keychain, not `UserDefaults`, not files on disk, not in-memory only.
  - Validated by inspecting Keychain entries in debug: `SecItemCopyMatching` query returns Clerk-related entries with `kSecAttrAccessible: kSecAttrAccessibleAfterFirstUnlockThisDeviceOnly`.
- [ ] If Clerk SDK uses `kSecAttrAccessibleWhenUnlocked` (less secure), override or wrap with `kSecAttrAccessibleAfterFirstUnlockThisDeviceOnly` to allow background token refresh while the device is locked.
- [ ] Tokens are scoped to the app's Keychain access group — not shared with other apps or extensions (unless explicitly needed later for App Groups/widgets).
- [ ] On `logout()`, all Keychain entries related to the Clerk session are explicitly deleted — not just cleared from memory.
- [ ] On app uninstall + reinstall, tokens are gone (default Keychain behavior on iOS — but verify this in QA).
- [ ] No tokens are ever logged, printed to console, or included in crash reports.

---

### Story 6.2 — Silent Token Refresh

**As a** user with an active session  
**I want** my session to stay alive without any action on my part  
**So that** I never see a sign-in screen unless I explicitly signed out or my account was suspended.

**Context:**  
Clerk JWTs have a short lifetime (typically 60 seconds). The SDK uses a longer-lived refresh token to obtain new JWTs transparently. This story ensures that mechanism works reliably in the LumenLingo lifecycle.

**Acceptance Criteria:**

- [ ] While the app is in the foreground, `ClerkAuthService` monitors the JWT expiry and triggers a refresh at least 10 seconds before expiration.
- [ ] The refresh is completely invisible to the user — no loading indicators, no interruptions, no flickers.
- [ ] If the refresh fails due to a transient network error, it retries with exponential backoff (1s → 2s → 4s → 8s → max 30s) for up to 5 minutes.
- [ ] During the retry window, the user remains authenticated using the (possibly expired) cached token for local operations. API calls that require a fresh token are queued and replayed after refresh succeeds.
- [ ] If refresh ultimately fails after 5 minutes (persistent network outage), the user remains in the app with cached data but a subtle banner appears: "Reconnecting…" with an animated dot pulse. No sign-in screen. No data loss.
- [ ] When the app returns from background (`scenePhase == .active`), an immediate token check + refresh is triggered.
- [ ] When the app is in background, no token refresh occurs (battery preservation). On next foreground, the refresh happens immediately.
- [ ] If the refresh token itself is expired or revoked (e.g., user changed password on another device, admin revoked session), the user is signed out gracefully:
  - A sheet appears: "Your session has ended. Please sign in again."
  - The sign-in sheet pre-fills their previous method (Story 5.5).
  - Local data is preserved — nothing is deleted.

---

### Story 6.3 — Multi-device Session Awareness

**As a** user signed in on multiple devices  
**I want** each device to maintain its own independent session  
**So that** signing out on my iPhone doesn't sign me out on my iPad.

**Acceptance Criteria:**

- [ ] Each device maintains its own Clerk session with its own refresh token.
- [ ] Signing out on Device A does not affect the session on Device B (default Clerk behavior — verify this).
- [ ] If an admin revokes all sessions for a user (via Clerk Dashboard), all devices are signed out on their next token refresh.
- [ ] `UserProfile` data synced via iCloud (existing CloudKit sync) is independent of auth sessions — if the user signs in on a new device, their profile data is available via iCloud before Clerk-specific metadata syncs.
- [ ] The Profile/Settings view shows a "Sessions" section listing active sessions (Story 8.5).

---

### Story 6.4 — Background App Refresh Token Health Check

**As a** developer  
**I want** the app to validate its auth session during background app refresh  
**So that** when the user opens the app after hours or days, the session is already refreshed and the dashboard appears instantly.

**Acceptance Criteria:**

- [ ] If the app uses `BGTaskScheduler` for background tasks (e.g., content prefetching), the token refresh is included as the first step of any background task.
- [ ] The background refresh does not awaken the full Clerk SDK — it makes a minimal network call to validate or refresh the token.
- [ ] If the refresh succeeds, the new token is stored in Keychain. The next foreground launch uses it directly — no network call needed.
- [ ] If the refresh fails (network unavailable during background), it is a no-op — the foreground flow (Story 6.2) handles it.
- [ ] Background token refresh does not trigger any analytics events or notifications.
- [ ] Battery impact is negligible: the network call is a single lightweight HTTPS request (<1KB payload).

---

### Story 6.5 — Forced Logout & Account Suspension Handling

**As a** user whose account has been suspended or deleted by an admin  
**I want** a clear explanation of what happened and what I can do  
**So that** I'm not confused by a broken app state and I know how to get help.

**Acceptance Criteria:**

- [ ] If a token refresh returns an account-suspended error from Clerk:
  - The app immediately clears the local session.
  - A dedicated "Account Suspended" view appears (not the sign-in sheet):
    - Icon: a cosmic orb dimming (on-brand, not scary).
    - Title: "Your account has been suspended."
    - Body: "If you believe this is a mistake, please contact our support team."
    - Button: "Contact Support" → opens `mailto:` or in-app support channel.
    - Button: "Sign in with a different account" → navigates to sign-in sheet.
  - Local data (XP, progress) is preserved — not deleted. If the suspension is lifted, the data should still be there.
- [ ] If the account is permanently deleted (Clerk returns user-not-found):
  - Same flow, but the message is: "Your account has been deleted."
  - Local data is preserved for 30 days (in case of accidental deletion), then cleaned up.
- [ ] The user cannot dismiss the suspension view without choosing an action — prevent them from entering a broken state.
- [ ] Analytics event: `auth_forced_logout` with `reason: suspended|deleted|revoked`.

---

### Story 6.6 — Session Metrics & Health Dashboard

**As a** developer  
**I want** session health metrics logged  
**So that** I can monitor token refresh success rates, session durations, and identify auth infrastructure issues before users report them.

**Acceptance Criteria:**

- [ ] The following metrics are tracked:
  | Metric | Type | When |
  |--------|------|------|
  | `session_restored` | counter | Cold launch, session found in Keychain |
  | `session_restore_failed` | counter | Cold launch, no session or invalid |
  | `token_refresh_success` | counter | Silent refresh succeeded |
  | `token_refresh_failed` | counter + `error_code` | Silent refresh failed (per attempt) |
  | `token_refresh_latency_ms` | histogram | Time from refresh request to new token |
  | `session_duration_hours` | histogram | Duration from sign-in to sign-out (on sign-out) |
  | `forced_logout` | counter + `reason` | Account suspended/deleted/revoked |
- [ ] Metrics are sent via the existing analytics pipeline, batched, and non-blocking.
- [ ] A debug panel (QAPanelView) shows current session status: token expiry time, last refresh time, refresh count this session.

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

- [ ] After successful authentication (any method), `ClerkAuthService` triggers a profile sync.
- [ ] The sync maps Clerk user fields to `UserProfile`:
  | Clerk Field | UserProfile Field | Behavior |
  |------------|-------------------|----------|
  | `user.firstName` | `firstName` | Overwrite if Clerk value is non-empty; preserve local if Clerk is empty (Apple may not share name) |
  | `user.primaryEmailAddress` | `email` | Always overwrite — Clerk is authoritative for email |
  | `user.imageUrl` | (stored in `AppUser.avatarURL`) | Updated on each sign-in |
  | `user.publicMetadata["tierId"]` | `selectedTierId` | Only if Clerk value is non-empty — server-side tier is authoritative |
  | `user.publicMetadata["totalXP"]` | — | NOT synced from Clerk to local (local is authoritative for gameplay) |
- [ ] If no `UserProfile` exists in SwiftData (first sign-in on this device), one is created with Clerk identity fields + default gameplay values.
- [ ] If a `UserProfile` already exists (guest user upgrading to authenticated, or device restore), the existing profile is updated — not replaced. XP, streaks, and preferences are preserved.
- [ ] The sync is idempotent — running it twice with the same Clerk data produces the same result.
- [ ] The sync completes within the sign-in success animation window (Story 4.3) — the user never sees stale profile data on the dashboard.

---

### Story 7.2 — UserProfile → Clerk Metadata Sync

**As a** developer  
**I want** critical user state (tier, XP milestones) synced back to Clerk's user metadata  
**So that** server-side systems (billing, support, backend API) can access the user's current state without querying the device.

**Acceptance Criteria:**

- [ ] On tier changes (`TierManager.currentTier` transitions), the new tier ID is written to Clerk's `user.publicMetadata["tierId"]`.
- [ ] On significant XP milestones (level-up events), the new level is written to `user.publicMetadata["level"]`.
- [ ] Sync is debounced: metadata updates are batched and sent at most once per 60 seconds to avoid hammering Clerk's API.
- [ ] Sync is fire-and-forget: if the network call fails, the update is queued and retried on the next successful API call.
- [ ] `publicMetadata` is used (not `privateMetadata`) because this data is read by the client and is not sensitive.
- [ ] The following keys are managed in `publicMetadata`:
  | Key | Type | Source |
  |-----|------|--------|
  | `tierId` | `String` | `TierManager.currentTier.rawValue` |
  | `level` | `Int` | `UserProfile.currentLevel` |
  | `totalXP` | `Int` | `UserProfile.totalXP` |
  | `languageCount` | `Int` | Number of active language pairs |
  | `appVersion` | `String` | Bundle short version string |
  | `lastActiveDate` | `String` (ISO 8601) | Last gameplay date |
- [ ] Unit tests verify: metadata is written on tier change, debouncing works, failures are queued.

---

### Story 7.3 — Guest → Authenticated Profile Migration

**As a** guest user who decides to create an account  
**I want** all my progress (XP, streaks, preferences, game history) preserved when I sign in  
**So that** I don't lose anything and signing in feels like an upgrade, not a reset.

**Context:**  
Story 5.7 allows guest usage with a local-only `UserProfile`. When the guest signs in, that profile must be linked to the new Clerk user — not replaced.

**Acceptance Criteria:**

- [ ] When a guest user taps "Sign in" (from the dashboard banner or Settings):
  1. The sign-in sheet appears.
  2. The user completes authentication (any method).
  3. `ClerkAuthService` detects an existing local `UserProfile` without a Clerk user ID.
  4. The migration flow begins.
- [ ] Migration logic:
  - If the Clerk user is new (no existing metadata): the local profile's gameplay data is adopted as authoritative. Clerk metadata is populated from local.
  - If the Clerk user already exists (signed in on another device): a merge dialog appears:
    - "We found an existing account. Would you like to:"
    - "Keep this device's progress ({localXP} XP, Level {localLevel})" → local data wins
    - "Use your account's progress ({remoteXP} XP, Level {remoteLevel})" → Clerk data wins
    - "Keep the higher values" → max of each field wins ← this is the default/recommended option, highlighted.
- [ ] After migration, the `UserProfile` gains a `clerkUserId: String?` field (set to the Clerk user ID), marking it as authenticated.
- [ ] The dashboard banner ("Sign in to save your progress") disappears immediately after migration.
- [ ] The migration is logged: `profile_migration` with `strategy: local_wins|remote_wins|merge`, `local_xp`, `remote_xp`.
- [ ] If migration fails (network error during metadata sync), the local profile is preserved, auth succeeds, and metadata sync is retried later.

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
- [ ] Background: a gradient derived deterministically from the user's name (hash the name to select from 8 predefined gradient pairs — cosmic purples, blues, teals, consistent with the app's palette).
- [ ] Text: the user's initials (first letter of first name + first letter of last name, or just first letter if only first name). White, bold, 40% of the circle diameter.
- [ ] Shape: perfect circle, rendered as a SwiftUI `View` — not an image. This ensures it scales to any size without pixelation.
- [ ] If the user has no name at all (e.g., Apple sign-in with no name shared), the placeholder shows a subtle cosmic orb icon instead of initials.

**Avatar Display Component:**
- [ ] A reusable `UserAvatarView(size: CGFloat)` component that:
  - Takes the `AppUser` and renders the highest-priority available avatar.
  - Shows the placeholder immediately, then crossfades to the loaded image (if URL-based) over 200ms.
  - Renders at 2× resolution for Retina displays.
  - Has a subtle 1pt border in white at 30% opacity (glass aesthetic).
- [ ] Used in: profile header, settings, any future user-facing avatar spots.

---

### Story 7.5 — Clerk User ID ↔ SwiftData Profile Linking

**As a** developer  
**I want** a robust, unique link between the Clerk user ID and the local SwiftData `UserProfile`  
**So that** multi-device sync, account switching, and profile restoration all work correctly without data leaks between users.

**Acceptance Criteria:**

- [ ] `UserProfile` gains a new persisted field: `clerkUserId: String?` — nullable for guest users, set to the Clerk user ID string upon authentication.
- [ ] A SwiftData query predicate can find the profile for a given Clerk user: `#Predicate<UserProfile> { $0.clerkUserId == clerkId }`.
- [ ] On sign-in:
  - If a `UserProfile` exists with matching `clerkUserId` → use it (returning user on same device).
  - If no match but a guest profile exists (nil `clerkUserId`) → migrate it (Story 7.3).
  - If no match and no guest profile → create a new one.
  - If multiple profiles somehow exist for the same `clerkUserId` → use the one with the most recent `lastActivityDate` and log a warning.
- [ ] On sign-out:
  - `clerkUserId` is NOT cleared — the profile retains the link so re-signing-in reconnects instantly.
  - The "active" profile is deselected and the app shows the sign-in sheet.
- [ ] On account switching (future — different Clerk user signs in):
  - The previous profile is deactivated (but not deleted).
  - Lookup finds or creates a profile for the new Clerk user.
  - Switching back to the original account finds the original profile intact.
- [ ] The `clerkUserId` field is indexed in SwiftData for fast lookups.

---

### Story 7.6 — Profile Sync Conflict Resolution

**As a** user who uses the app on multiple devices  
**I want** profile data conflicts resolved sensibly  
**So that** I never lose significant progress and the merge behavior is predictable.

**Acceptance Criteria:**

- [ ] When syncing from Clerk metadata to local `UserProfile`, conflicts are resolved as follows:
  | Field | Strategy | Rationale |
  |-------|----------|-----------|
  | `firstName` | Latest non-empty wins | Name changes are intentional |
  | `email` | Clerk wins always | Clerk is identity authority |
  | `totalXP` | Maximum wins | XP should never decrease |
  | `dailyStreak` | Maximum wins | Streak should never decrease |
  | `totalActiveDays` | Maximum wins | Same rationale |
  | `selectedTierId` | Clerk wins (server authority) | Server controls billing tier |
  | `difficulty` | Latest wins (by timestamp) | User's last preference should stick |
  | Preferences (theme, sounds) | Latest wins (by timestamp) | Same |
  | Game progress | Local wins (then syncs up) | Prevent overwriting active session |
- [ ] A `lastSyncDate: Date?` field on `UserProfile` tracks when the last successful sync occurred.
- [ ] If the local profile is ahead (more XP, higher streak), the surplus is synced up to Clerk metadata — not pulled down.
- [ ] Conflicts are logged at `.warning` level with both values: `"XP conflict: local={x}, remote={y}, resolved={z}"`.
- [ ] No sync operation ever results in data loss. In the absolute worst case, the higher value wins.

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
- [ ] A new "Account" tab (or collapsible section in Profile) appears as the first item, above Appearance.
- [ ] The section header shows:
  - The user's avatar (from `UserAvatarView`, Story 7.4) — 64pt circle.
  - The user's display name — 20pt, bold.
  - The user's email (or "Apple Private Email" if applicable) — 14pt, secondary color.
  - A "Verified" badge next to the email if it's verified in Clerk (green checkmark, 12pt).
- [ ] Below the header, collapsible subsections using the app's `CollapsibleSection` pattern:
  1. **Sign-in Methods** — lists linked identities (Apple, Google, Phone, Email).
  2. **Account Actions** — Change name, add email/phone, export data.
  3. **Danger Zone** — Sign out, delete account.
- [ ] The section follows the glass-panel aesthetic (`GlassPanelWrapper`), matching Appearance and Sound sections.

**Behavior:**
- [ ] The Account section is only visible when `isAuthenticated == true`. Guest users see a "Sign in to manage your account" prompt with a sign-in button.
- [ ] Data in the section is refreshed from Clerk on each appearance (pull-to-refresh is also supported).
- [ ] Loading state: glass panels show a subtle shimmer animation while Clerk data loads (max 2 seconds, then show cached data).

---

### Story 8.2 — Linked Identity Management

**As a** user  
**I want** to see all sign-in methods linked to my account and add or remove them  
**So that** I have backup ways to sign in and I can remove methods I no longer use.

**Acceptance Criteria:**

**View:**
- [ ] The "Sign-in Methods" section lists each linked identity as a row:
  | Icon | Label | Status | Action |
  |------|-------|--------|--------|
  | Apple logo | "Apple" | "Connected" + partial email | "Remove" (if >1 method linked) |
  | Google logo | "Google" | "Connected" + email | "Remove" (if >1 method linked) |
  | Phone icon | "Phone" | "+44 •••• 0000" | "Remove" (if >1 method linked) |
  | Email icon | "Email" | "u•••@example.com" | "Remove" (if >1 method linked) |
- [ ] Each row has:
  - A provider icon on the left (SF Symbols for phone/email, brand logos for Apple/Google).
  - The provider name and connected identifier.
  - A green "Connected" pill if linked, or a "Connect" button if not.
  - A "Primary" badge on the primary identity.

**Adding an Identity:**
- [ ] Tapping "Connect" on an unlinked method presents the relevant auth flow:
  - Apple → system Apple sign-in sheet; links the Apple ID to the existing Clerk user.
  - Google → Google OAuth flow; links the Google account.
  - Phone/Email → OTP flow (using the code entry screen from Story 4.3) to verify and link.
- [ ] After successful linking, the row updates to "Connected" with a smooth transition.
- [ ] If the Apple/Google identity is already linked to a different Clerk user: "This {provider} account is already linked to another profile. Please use a different account."

**Removing an Identity:**
- [ ] Tapping "Remove" shows a confirmation sheet: "Remove {provider} sign-in? You'll no longer be able to sign in with this method."
  - If this is the only linked identity (shouldn't happen — see guard), the button is disabled with a tooltip: "You must have at least one sign-in method."
  - Confirm → calls Clerk's unlink API → row transitions to "Connect" state.
- [ ] The primary identity cannot be removed until another identity is set as primary.

---

### Story 8.3 — Add Email or Phone to Existing Account

**As a** user who signed in with Apple or Google  
**I want** to add my phone number or email as a backup sign-in method  
**So that** I have a fallback if I lose access to my Apple or Google account.

**Acceptance Criteria:**

- [ ] In the "Sign-in Methods" section, unlinked Phone and Email rows show a "+" or "Connect" button.
- [ ] Tapping "Connect" for Phone:
  1. Presents the phone number input (reusing the component from Story 4.1, including country picker).
  2. On "Send Code," Clerk sends a verification OTP to the number.
  3. The code entry screen appears (reusing Story 4.3 component).
  4. On successful verification, the phone number is linked to the Clerk user.
  5. The row updates to show the linked phone number.
- [ ] Tapping "Connect" for Email:
  1. Presents the email input field.
  2. On "Send Code," Clerk sends a verification OTP.
  3. Code entry screen appears.
  4. On success, email is linked.
- [ ] The linked phone/email can immediately be used for sign-in on this or any other device.
- [ ] If the phone/email is already linked to a different Clerk user: clear error message with guidance.
- [ ] Analytics: `identity_linked` with `provider: phone|email`, `existing_methods: [apple, google]`.

---

### Story 8.4 — Edit Display Name

**As a** user  
**I want** to change the name displayed in my profile  
**So that** my profile reflects my preferred name, even if Apple or Google provided something different.

**Acceptance Criteria:**

- [ ] In the "Account Actions" section, a "Display Name" row shows the current name with a "Edit" affordance.
- [ ] Tapping it presents an inline edit field (the row expands to show a text input with the current name pre-filled).
- [ ] The text field:
  - Allows 1–50 characters.
  - Strips leading/trailing whitespace on submission.
  - Rejects empty strings: "Name cannot be empty."
  - Uses `.textContentType(.name)` for smart suggestions.
- [ ] On "Save":
  - The name is updated in `UserProfile.firstName` locally.
  - The name is updated in Clerk's `user.firstName` via API.
  - The row collapses back to the view state with the new name.
  - A subtle checkmark animation confirms the save.
- [ ] On cancel (tapping away or pressing Escape on keyboard): revert to previous name without API call.
- [ ] If the API call fails: the local name reverts, and a toast shows "Couldn't update name. Please try again."

---

### Story 8.5 — Active Sessions List

**As a** user  
**I want** to see all devices where my account is signed in  
**So that** I can verify none of my sessions are unauthorized and revoke sessions I don't recognize.

**Acceptance Criteria:**

**Session List:**
- [ ] In the "Account Actions" section (or a dedicated sub-page), "Active Sessions" shows a list of all active Clerk sessions for the user.
- [ ] Each session row displays:
  - Device type icon (iPhone, iPad, Mac — derived from `userAgent` or Clerk session metadata).
  - Device name (e.g., "iPhone 15 Pro", "iPad Air" — from Clerk's session `device` data).
  - Last active time: "Active now" or relative timestamp ("2 hours ago", "Yesterday").
  - Location (if available from Clerk): "London, UK" — derived from IP, not GPS.
  - A green dot indicator for the current session.
  - A "This device" label on the current session.

**Session Revocation:**
- [ ] Non-current sessions have a "Sign Out" button on swipe-left (or tap to reveal).
- [ ] Tapping "Sign Out" shows a confirmation: "Sign out this device? They'll need to sign in again."
- [ ] On confirm, Clerk's `revokeSession(sessionId:)` API is called. The row is removed with a slide-out animation.
- [ ] A "Sign Out All Other Devices" button appears at the bottom of the list (only if >1 session).
  - Confirmation: "Sign out all other devices? Only this device will stay signed in."
  - On confirm, all sessions except the current one are revoked.
  - A toast confirms: "All other devices have been signed out."

**Security:**
- [ ] If the user sees a session they don't recognize, a "Don't recognize this?" link opens a support flow or suggests changing their sign-in methods.
- [ ] Session list refreshes on pull-down and auto-refreshes every 30 seconds while visible.

---

### Story 8.6 — Account Deletion

**As a** user  
**I want** to permanently delete my account and all associated data  
**So that** I can exercise my GDPR/CCPA right to erasure and I trust that my data is truly gone.

**Context:**  
The existing `UserProfile` has GDPR-related fields (`legalConsentVersion`, `legalConsentDate`). Account deletion must be thorough and compliant.

**Acceptance Criteria:**

**Trigger:**
- [ ] In the "Danger Zone" section, a "Delete Account" row is styled with a destructive red accent (but still within the glass-panel aesthetic — not a jarring red box).
- [ ] Tapping it presents a multi-step deletion confirmation flow:

**Step 1 — Information:**
- [ ] A sheet appears with:
  - Title: "Delete Your Account"
  - Body explaining consequences:
    - "Your profile, learning progress, and all data will be permanently deleted."
    - "Your linked sign-in methods (Apple, Google, Phone, Email) will be unlinked."
    - "If you have an active subscription, it will be cancelled (you may need to cancel it in the App Store separately)."
    - "This action cannot be undone."
  - "Continue" button (destructive style) and "Cancel" button.

**Step 2 — Re-authentication:**
- [ ] To prevent accidental deletion, the user must re-authenticate using any of their linked methods.
- [ ] Present the sign-in flow inline (e.g., Face ID for Apple users, OTP for phone users).
- [ ] This re-authentication confirms the user's identity before the irreversible action.

**Step 3 — Final Confirmation:**
- [ ] After re-auth, a final confirmation asks the user to type "DELETE" (in English) or the localized equivalent into a text field.
- [ ] The "Delete My Account" button is disabled until the text matches exactly.
- [ ] Tapping the button:
  1. Calls Clerk's `user.delete()` API.
  2. Deletes the local `UserProfile` from SwiftData.
  3. Clears Keychain entries.
  4. Clears `UserDefaults` auth-related keys.
  5. Shows a farewell screen: "Your account has been deleted. We're sorry to see you go." with a "Done" button.
  6. "Done" navigates to the sign-in sheet with a clean state.

**Data Handling:**
- [ ] Clerk server-side: user and all identities deleted permanently.
- [ ] Local: SwiftData model deleted, all cached data purged.
- [ ] iCloud: sync propagates the deletion to other devices (they see the sign-in sheet on next launch).
- [ ] Analytics: `account_deleted` event (no PII — just the event, tier, and account age in days).
- [ ] An email confirmation of deletion is sent (if email is linked) per GDPR requirements.

---

### Story 8.7 — Legal Re-consent on Terms Update

**As a** returning user  
**I want** to be informed when the Terms of Service or Privacy Policy change and asked to agree again  
**So that** my consent is always current and legally valid.

**Acceptance Criteria:**

- [ ] On app launch, after session restoration, the app checks `UserProfile.legalConsentVersion` against the current legal document version (defined as a constant in the app, e.g., `LegalDocuments.currentVersion`).
- [ ] If the versions differ (local is older):
  - A modal sheet appears (non-dismissible):
    - Title: "We've updated our policies"
    - Body: "We've made changes to our [Terms of Service](link) and [Privacy Policy](link). Please review and accept to continue."
    - Links open in `SFSafariViewController`.
    - "I Accept" button (primary).
    - "I Decline" button (secondary) → shows a warning: "Declining will sign you out and you won't be able to use the app until you accept." → confirm → sign out.
  - Tapping "I Accept":
    - Updates `UserProfile.legalConsentVersion` and `legalConsentDate`.
    - Logs: `legal_reconsent` with `old_version`, `new_version`, `accepted: true`.
    - Dismisses the sheet and proceeds to the app.
- [ ] The re-consent check is skipped for guest users (they accepted during initial consent or will accept on sign-in).
- [ ] The sheet does not appear on every launch — only when the version changes.

---

## Epic 9: Security Hardening & Edge Cases

> **Goal:** Ensure the authentication system is hardened against real-world threats: jailbroken devices, network interception, race conditions, and edge cases that only appear at scale. Security is not a feature — it's the foundation everything else stands on.

### Story 9.1 — Jailbreak & Integrity Detection

**As a** developer  
**I want** the app to detect compromised device integrity  
**So that** authentication flows on jailbroken or tampered devices have additional safeguards.

**Acceptance Criteria:**

- [ ] On launch, a lightweight integrity check runs:
  - Checks for common jailbreak indicators: existence of `/Applications/Cydia.app`, `/usr/sbin/sshd`, writable system directories.
  - Checks if the app binary has been tampered with (CodeSign validation).
  - Does NOT use Clerk-specific detection — this is a general app-level check.
- [ ] If integrity compromise is detected:
  - In Debug builds: a warning banner appears but the app proceeds (for simulator testing).
  - In Release builds: the app logs a `security_integrity_warning` event (no block — Apple guidelines discourage blocking jailbroken devices, and it creates bad UX).
  - Keychain operations use `kSecAttrAccessibleWhenPasscodeSetThisDeviceOnly` instead of the default — if the device has no passcode (common on jailbroken devices), tokens are still protected.
- [ ] The integrity check completes within 50ms and does not delay app launch.
- [ ] False positive rate is zero on non-jailbroken devices including simulator.

---

### Story 9.2 — Certificate Pinning for Clerk API Calls

**As a** developer  
**I want** TLS certificate pinning on Clerk API requests  
**So that** man-in-the-middle attacks (e.g., via compromised Wi-Fi) cannot intercept authentication tokens.

**Acceptance Criteria:**

- [ ] If the Clerk iOS SDK supports certificate pinning configuration, it is enabled with Clerk's certificate fingerprints.
- [ ] If the SDK does not support pinning, a custom `URLSessionDelegate` wraps Clerk's network calls and validates the server certificate against expected pins (SHA-256 of the Subject Public Key Info, not the leaf certificate, to survive cert rotation).
- [ ] At least two pins are configured: the primary and a backup (in case Clerk rotates certificates).
- [ ] If pinning validation fails:
  - The network request is rejected.
  - A `security_pin_failure` event is logged with `host`, `expected_pin`, `actual_pin`.
  - The user sees a generic network error: "Secure connection could not be established." — no technical details exposed.
  - The app falls back to offline mode with cached session.
- [ ] Pinning is disabled in Debug builds when connecting to local/proxy environments (e.g., Charles Proxy for debugging — controlled by a compile flag, not a runtime toggle).
- [ ] The pin list is updatable via a remote config mechanism (future) to handle emergency cert rotations without an app update.

---

### Story 9.3 — Rate Limiting & Brute Force Protection (Client-side)

**As a** developer  
**I want** client-side rate limiting on authentication attempts  
**So that** even if Clerk's server-side rate limits are bypassed (or slow to kick in), the app itself prevents brute-force attacks on OTP codes.

**Acceptance Criteria:**

- [ ] A local rate limiter tracks OTP verification attempts per session:
  | Attempt | Consequence |
  |---------|-------------|
  | 1–3 | Normal flow — verify and report result |
  | 4–5 | Add 5-second delay before next attempt allowed (button disabled with countdown) |
  | 6–8 | Add 30-second delay before next attempt |
  | 9+ | Lock OTP entry for 5 minutes. Message: "Too many attempts. Please wait 5 minutes or try a different sign-in method." |
- [ ] Rate limiting is per-destination (phone or email) — switching to a different destination resets the counter for the new destination.
- [ ] The rate limit counter resets after a successful verification or after 30 minutes of inactivity.
- [ ] Rate limit state is stored in memory (not persisted) — app restart resets it. Server-side limits are the long-term defense.
- [ ] The rate limiter cannot be circumvented by dismissing and re-presenting the OTP screen.

---

### Story 9.4 — Auth State Race Condition Prevention

**As a** developer  
**I want** auth state mutations serialized and atomic  
**So that** concurrent events (background refresh completing while user taps sign-out) don't leave the app in an inconsistent state.

**Acceptance Criteria:**

- [ ] All auth state mutations (`currentUser`, `isAuthenticated`, `isLoading`) occur on `@MainActor` — guaranteed by the `@MainActor` class annotation on `ClerkAuthService`.
- [ ] A serial `AsyncStream` or actor-based queue ensures that concurrent auth operations (e.g., `checkAuthState()` completing while `logout()` is called) are processed in order, not interleaved.
- [ ] Specifically:
  - If `logout()` is called while `checkAuthState()` is in-flight: `checkAuthState()` is cancelled or its result is discarded. Logout wins.
  - If `signInWithApple()` is called while another `signInWithGoogle()` is in-flight: the second call is ignored with a log. First-in wins.
  - If `refreshToken()` is called twice concurrently: only one network request is made. The second call reuses the first call's result.
- [ ] Unit tests verify all three race scenarios above with controlled concurrency (using `Task.yield()` to interleave).
- [ ] A debug assertion catches any auth state mutation that occurs off `@MainActor`: `assert(Thread.isMainThread)`.

---

### Story 9.5 — Biometric Re-authentication for Sensitive Operations

**As a** user  
**I want** sensitive account operations (delete account, remove sign-in method, revoke sessions) protected by biometric confirmation  
**So that** even if someone has my unlocked phone, they can't take destructive actions without my face or fingerprint.

**Acceptance Criteria:**

- [ ] Before executing any of the following operations, the app requests biometric authentication via `LAContext.evaluatePolicy(.deviceOwnerAuthenticationWithBiometrics)`:
  - Account deletion (Story 8.6)
  - Removing a linked identity (Story 8.2)
  - Revoking other sessions (Story 8.5)
  - Changing primary identity
- [ ] Biometric prompt reason is operation-specific:
  - "Authenticate to delete your account"
  - "Authenticate to remove this sign-in method"
  - "Authenticate to sign out other devices"
- [ ] If biometrics fail (wrong face/finger): "Authentication failed. Please try again." with a retry option.
- [ ] If biometrics are unavailable (not enrolled, device capability): fall back to device passcode (`.deviceOwnerAuthentication` policy).
- [ ] If the user has no passcode set (rare, jailbroken devices): skip biometric gate but require the Clerk re-authentication flow instead (sign in again with any linked method).
- [ ] The biometric prompt appears only once per operation — not on every sub-step.

---

### Story 9.6 — Audit Log for Security Events

**As a** developer  
**I want** a local audit log of security-relevant events  
**So that** support and forensics can understand what happened if a user reports unauthorized access.

**Acceptance Criteria:**

- [ ] A `SecurityAuditLog` records events locally in a dedicated SwiftData model:
  ```swift
  @Model final class SecurityEvent {
      var timestamp: Date
      var eventType: String     // e.g., "sign_in", "sign_out", "session_revoked"
      var method: String?       // e.g., "apple", "google", "phone_otp"
      var ipAddress: String?    // from Clerk session metadata, if available
      var deviceInfo: String    // e.g., "iPhone 15 Pro, iOS 18.2"
      var success: Bool
      var metadata: String?     // JSON string for additional context
  }
  ```
- [ ] Events logged:
  | Event Type | When |
  |-----------|------|
  | `sign_in` | Successful authentication (any method) |
  | `sign_in_failed` | Failed authentication attempt |
  | `sign_out` | User-initiated sign-out |
  | `forced_sign_out` | Session revoked or account suspended |
  | `session_revoked` | User revoked another session |
  | `identity_linked` | New sign-in method added |
  | `identity_removed` | Sign-in method removed |
  | `account_deleted` | Account deletion initiated |
  | `token_refresh` | Token refreshed (logged only on failure for volume control) |
  | `integrity_warning` | Jailbreak/tamper detected |
- [ ] The audit log retains the last 90 days of events. Older events are pruned on each app launch.
- [ ] The audit log is viewable in the QA/Debug panel (`QAPanelView`) as a chronological list.
- [ ] The audit log is included in GDPR data export (Story 8.6 / existing `ViewMyDataView`).
- [ ] The audit log never contains passwords, tokens, or full phone numbers / emails — only masked versions.

---

## Epic 10: Testing, Observability & Rollout

> **Goal:** Ensure every authentication path is rigorously tested, the rollout is gradual and safe, and production observability catches issues before users do. This is the safety net that makes all previous epics reliable at scale.

### Story 10.1 — Unit Test Suite for ClerkAuthService

**As a** developer  
**I want** comprehensive unit tests for `ClerkAuthService`  
**So that** every auth path — success, failure, edge case — is verified automatically and regressions are caught before they ship.

**Acceptance Criteria:**

- [ ] Test file: `LumenLingoTests/Services/ClerkAuthServiceTests.swift`.
- [ ] The Clerk SDK is mocked behind a protocol (`ClerkClientProtocol`) so unit tests don't make real network calls.
- [ ] Test cases cover:

  **Session Management:**
  - `test_checkAuthState_withValidSession_setsAuthenticated`
  - `test_checkAuthState_withExpiredSession_attemptsSilentRefresh`
  - `test_checkAuthState_withNoSession_setsUnauthenticated`
  - `test_checkAuthState_withNetworkError_setsUnauthenticatedGracefully`
  - `test_logout_clearsSessionAndUser`
  - `test_logout_whileAlreadyLoggedOut_isNoOp`

  **Apple Sign-in:**
  - `test_signInWithApple_success_createsNewUser`
  - `test_signInWithApple_success_returnsExistingUser`
  - `test_signInWithApple_cancelled_doesNotThrow`
  - `test_signInWithApple_networkError_throwsClerkError`
  - `test_signInWithApple_privateRelayEmail_handled`

  **Google Sign-in:**
  - `test_signInWithGoogle_success_createsUser`
  - `test_signInWithGoogle_cancelled_doesNotThrow`
  - `test_signInWithGoogle_accountConflict_throwsAppropriateError`

  **OTP:**
  - `test_requestOTP_phone_sendsCode`
  - `test_requestOTP_email_sendsCode`
  - `test_requestOTP_invalidPhone_throwsValidationError`
  - `test_requestOTP_rateLimited_throwsRateLimitedWithRetryAfter`
  - `test_verifyOTP_correctCode_authenticates`
  - `test_verifyOTP_wrongCode_throwsInvalidOTP`
  - `test_verifyOTP_expiredCode_throwsOTPExpired`

  **Concurrency:**
  - `test_concurrentLoginAndLogout_logoutWins`
  - `test_concurrentRefreshRequests_deduplicatedToSingleNetworkCall`
  - `test_signInDuringExistingSignIn_secondCallIgnored`

  **Profile Sync:**
  - `test_signIn_syncsClerkUserToUserProfile`
  - `test_signIn_guestMigration_preservesLocalData`
  - `test_signIn_conflictResolution_maxXPWins`

- [ ] All tests pass in CI within 10 seconds (no real network calls, no flaky async waits).
- [ ] Code coverage for `ClerkAuthService` exceeds 90%.

---

### Story 10.2 — UI Test Suite for Auth Flows

**As a** developer  
**I want** UI tests that validate the full sign-in user journey  
**So that** visual regressions, navigation bugs, and animation issues in auth screens are caught automatically.

**Acceptance Criteria:**

- [ ] Test file: `LumenLingoUITests/AuthFlowUITests.swift`.
- [ ] A mock Clerk backend (embedded HTTP server or launch argument-driven mock in `ClerkAuthService`) enables deterministic UI testing without real Clerk calls.
- [ ] UI test scenarios:

  **Happy Paths:**
  - `test_signInSheet_appearsOnFirstLaunch` — sign-in sheet is visible, all three provider buttons exist.
  - `test_signInWithApple_completesAndShowsDashboard` — mocked Apple flow → dashboard visible.
  - `test_signInWithOTP_phone_codeEntryAndSuccess` — enter phone → send code → enter 6 digits → dashboard.
  - `test_signInWithOTP_email_codeEntryAndSuccess` — same flow for email.
  - `test_guestMode_continueWithoutAccount` — tap skip → dashboard with banner visible.

  **Error Paths:**
  - `test_signInWithOTP_wrongCode_shakesAndClears` — wrong code → cells shake → cells clear.
  - `test_signIn_networkError_showsToast` — mocked network error → error toast visible.

  **Account Management:**
  - `test_accountSection_showsLinkedMethods` — profile → account → linked identities visible.
  - `test_signOut_returnsToSignInSheet` — settings → sign out → sign-in sheet appears.

  **Accessibility:**
  - `test_signInSheet_voiceOverLabels` — all buttons and fields have accessibility labels.
  - `test_otpEntry_voiceOverAnnouncement` — VoiceOver announces code status.

- [ ] UI tests run on iPhone SE (smallest) and iPhone 15 Pro Max (largest) in both light and dark mode.
- [ ] UI tests complete within 60 seconds total in CI.

---

### Story 10.3 — Clerk Test Phone Numbers & Emails

**As a** QA tester  
**I want** deterministic test phone numbers and emails that always pass OTP verification  
**So that** I can test auth flows without receiving real SMS/email and without rate limits.

**Acceptance Criteria:**

- [ ] In Clerk's test environment (Dev, QA, UAT), test phone numbers are configured:
  | Phone Number | Behavior |
  |-------------|----------|
  | +1 555 555 0100 | Always succeeds with code `000000` |
  | +1 555 555 0101 | Always succeeds with code `123456` |
  | +1 555 555 0102 | Always returns "rate limited" error |
  | +1 555 555 0103 | Always returns "undeliverable" error |
  | +44 7700 900000 | UK test number, succeeds with `000000` |
- [ ] Test email addresses similarly configured:
  | Email | Behavior |
  |-------|----------|
  | success@test.lumenlingo.com | Succeeds with `000000` |
  | ratelimit@test.lumenlingo.com | Returns rate limit error |
  | bounce@test.lumenlingo.com | Returns undeliverable error |
- [ ] These test identifiers are configured in the Clerk Dashboard, not in client code.
- [ ] In PreProd and Prod environments, only real phone numbers and emails are accepted.
- [ ] QA documentation lists all test credentials and expected behaviors.

---

### Story 10.4 — Feature Flag: Gradual Auth Rollout

**As a** product owner  
**I want** Clerk authentication rolled out gradually via feature flag  
**So that** if critical issues are discovered, we can instantly revert to the previous auth behavior without an app update.

**Acceptance Criteria:**

- [ ] A feature flag `clerk_auth_enabled` is read from remote config (or a fallback hardcoded value).
- [ ] When `clerk_auth_enabled == false`:
  - The app uses `MockAuthService` (or the previous auth implementation).
  - The sign-in sheet is not shown — the app behaves as pre-Clerk.
  - All Clerk-specific UI (account settings, linked identities) is hidden.
- [ ] When `clerk_auth_enabled == true`:
  - `ClerkAuthService` is injected and the full auth flow is active.
- [ ] The flag is checked once at launch (stored in `AppEnvironment.clerkEnabled`) — it does not toggle mid-session.
- [ ] Rollout plan:
  1. **Week 1:** 5% of new installs (Dev + QA environments at 100%).
  2. **Week 2:** 25% of new installs + 10% of existing users.
  3. **Week 3:** 50% of all users.
  4. **Week 4:** 100% if no P0/P1 issues.
- [ ] Rollback: flipping the flag to `false` in remote config disables Clerk for all new sessions within 1 hour (next app launch).
- [ ] Users who already authenticated with Clerk continue to work (their sessions are valid regardless of flag state). The flag only affects the sign-in flow for unauthenticated users.

---

### Story 10.5 — Production Monitoring & Alerts

**As a** developer  
**I want** production alerts for authentication anomalies  
**So that** I'm woken up at 3am for auth outages instead of finding out from a 1-star review.

**Acceptance Criteria:**

- [ ] The following alert rules are configured in the monitoring system (Sentry, Datadog, or equivalent):

  | Alert | Condition | Severity |
  |-------|-----------|----------|
  | Auth success rate drop | < 95% success rate over 15-min window | P1 / page |
  | Token refresh failure spike | > 10% refresh failures over 5-min window | P1 / page |
  | OTP delivery failure | > 20% OTP send failures over 15-min window | P2 / notify |
  | Account deletion spike | > 5× normal daily rate | P2 / notify |
  | Forced logout spike | > 3× normal daily rate | P1 / page |
  | Clerk SDK crash | Any crash originating in Clerk SDK frames | P1 / immediate |

- [ ] Alert channels: Slack `#auth-alerts` + PagerDuty for P1.
- [ ] Each alert includes: current value, threshold, link to dashboard, affected environment.
- [ ] A runbook is created for each alert with diagnosis steps and mitigation actions.
- [ ] A Grafana (or equivalent) dashboard shows real-time auth metrics: sign-in rate by provider, session count, token refresh latency, error breakdown by type.

---

### Story 10.6 — Auth Migration Runbook & Rollback Plan

**As a** developer  
**I want** a documented migration runbook and rollback plan  
**So that** the Clerk integration can be deployed confidently and reversed quickly if needed.

**Acceptance Criteria:**

- [ ] A `CLERK_MIGRATION_RUNBOOK.md` document is created with:

  **Pre-deployment Checklist:**
  - [ ] All unit tests pass in CI.
  - [ ] All UI tests pass on all target devices.
  - [ ] Clerk Dashboard has correct redirect URIs for Prod.
  - [ ] Apple Sign-in capability is enabled in App Store Connect.
  - [ ] Google OAuth Client ID is configured for Prod bundle ID.
  - [ ] Test phone numbers are disabled in Prod Clerk instance.
  - [ ] Feature flag `clerk_auth_enabled` is set to rollout percentage.
  - [ ] Monitoring alerts are configured and verified.
  - [ ] Legal documents (Terms, Privacy) are updated to mention Clerk as a data processor.

  **Deployment Steps:**
  - [ ] Submit app update with Clerk integration behind feature flag.
  - [ ] Enable flag for internal team (QA environment) for 48-hour soak test.
  - [ ] Enable flag for 5% of production users. Monitor for 72 hours.
  - [ ] Ramp to 25%, then 50%, then 100% — each step with 48-hour monitoring window.

  **Rollback Steps (if needed):**
  - [ ] Set `clerk_auth_enabled` flag to `false` in remote config.
  - [ ] Existing Clerk-authenticated users retain their sessions (no disruption).
  - [ ] New users / unauthenticated users fall back to pre-Clerk behavior.
  - [ ] Investigate root cause in Clerk Dashboard + app logs.
  - [ ] Fix, test, and re-enable flag.

  **Emergency Contacts:**
  - [ ] Clerk support channel / SLA details.
  - [ ] Internal on-call rotation for auth issues.

- [ ] The runbook is reviewed and approved by engineering lead before deployment.
- [ ] The runbook is linked from the `AGENT.md` and `README.md` for discoverability.

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
