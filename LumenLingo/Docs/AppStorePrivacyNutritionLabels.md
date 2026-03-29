# App Store Privacy Nutrition Labels — Internal Mapping Document

**App**: LumenLingo
**Developer**: LumenShore Ltd (Company No. 09607326)
**Document Version**: 2.0
**Date**: 2026-03-29
**Legals.md Reference**: Epic 3, Story 3.1 (Subtask 3.1.5)

---

## 1. Apple's Definition of "Collection"

Per Apple's [App Privacy Details](https://developer.apple.com/app-store/app-privacy-details/) documentation:

> **"Collection"** refers to transmitting data off the device in a way that allows you and/or your third-party partners to access it for a period longer than what is necessary to service the transmitted request in real time.

**Key implication**: Data stored exclusively on-device (SwiftData, UserDefaults) and never transmitted to a server is **NOT** considered "collected" for privacy nutrition label purposes.

---

## 2. Current Data Architecture (v2.x — Clerk Auth + RevenueCat)

| Component | Status |
|---|---|
| Backend API | **Third-party hosted** — Clerk for authentication/session management; RevenueCat for subscriptions and purchase validation |
| Network calls | **Yes** — outbound requests via Clerk and RevenueCat SDKs for auth, entitlement checks, and subscription status |
| Third-party SDKs (iOS) | **Present** — Clerk (auth), RevenueCat (subscriptions). No Sentry, Firebase, Amplitude, ad networks, or third-party ad SDKs. |
| Analytics | **Limited** — subscription and entitlement analytics via RevenueCat; no advertising/behavioral profiling or third-party crash reporting |
| iCloud KVS | **Disabled** — InMemoryCloudKeyValueStore stub in use |
| Data storage | **Primarily device-local** — SwiftData + UserDefaults, with auth/session and purchase state also synced via Clerk/RevenueCat services |

---

## 3. App Store Connect Privacy Label Configuration

### Current State: Data Collected via Clerk and RevenueCat

Because the app now uses Clerk (authentication) and RevenueCat (subscriptions), some data is transmitted off the device and is therefore considered **"collected"** under Apple's definition. The App Store Connect configuration must no longer use "Data Not Collected."

At a minimum, the following must be declared:

- **Contact Info > Email Address** (provided by the user for account creation or sign-in via Clerk), marked as **linked to the user**, used for **App Functionality** only.
- **Contact Info > Name** (provided by the user for account/profile display via Clerk), marked as **linked to the user**, used for **App Functionality** only.
- **Identifiers > User ID** as used by Clerk/RevenueCat SDKs to manage sessions and entitlements, marked as **linked to the user**, used for **App Functionality**.
- **Purchases > Purchase History** for in-app purchases and subscriptions managed via RevenueCat, marked as **linked to the user**, used for **App Functionality**.

No tracking for advertising or cross-app profiling is performed, and no data is used for "Tracking" as defined by Apple.

### Data Types Collected Off-Device (Transmitted via Clerk / RevenueCat)

| Apple Category | Apple Sub-category | Collected Data | Third Party | Linked to User | Used for Tracking |
|---|---|---|---|---|---|
| Contact Info | Email Address | User email for account creation/sign-in | Clerk | Yes | No |
| Contact Info | Name | First name for account/profile display | Clerk | Yes | No |
| Identifiers | User ID | User and session IDs for auth and entitlement management | Clerk, RevenueCat | Yes | No |
| Purchases | Purchase History | Subscription and entitlement state | RevenueCat | Yes | No |

### Data Types Primarily Stored On-Device (Not Transmitted Off-Device)

The following data types are persisted locally in SwiftData/UserDefaults. Some fields (e.g., name, email, purchase/entitlement state) are also synced via Clerk/RevenueCat as described above.

| Apple Category | Apple Sub-category | On-Device Data | Code Location | Linked to User | Used for Tracking |
|---|---|---|---|---|---|
| Contact Info | Name | `UserProfile.firstName` (used for account/profile display and may be sent to Clerk) | `Models/DataModels.swift:7` | Yes | No |
| Contact Info | Email Address | `UserProfile.email` (used for account/profile display and may be sent to Clerk) | `Models/DataModels.swift:8` | Yes | No |
| Usage Data | Product Interaction | Game scores, XP, streaks, time spent, accuracy | `Models/DataModels.swift:265-329` (GameProgressRecord) | Yes | No |
| Usage Data | Other Usage Data | UI preferences, sound settings, visual settings | `Models/DataModels.swift:20-70` (UserProfile settings) | Yes | No |
| Other Data | Language preferences | Source/target language pairs, active selection | `Models/DataModels.swift:331-373` (LanguagePreference) | Yes | No |
| Other Data | Favourite categories | Bookmarked game categories | `Models/DataModels.swift:375-396` (FavoriteCategory) | Yes | No |
| Other Data | Mastered content | Content completion tracking | `Models/DataModels.swift:398+` (MasteredContent) | Yes | No |
| Other Data | Membership tier | Selected tier ID (free/pro/elite/royal) | `Models/DataModels.swift` (UserProfile.selectedTierId) | Yes | No |
| Other Data | Legal consent record | Consent version + date | `Models/DataModels.swift` (UserProfile.legalConsentVersion/Date) | Yes | No |
| Other Data | Daily practice time | Seconds per day | `Services/PracticeTimeTracker.swift:65` (UserDefaults) | Yes | No |
| Other Data | Session counts | Daily round counts | `Services/SessionEngine.swift:85-87` (UserDefaults) | Yes | No |
| Other Data | UI collapse states | Section expansion preferences | Various views via `@PersistedState` | Yes | No |

### Identifiers

| Identifier Type | Status | Notes |
|---|---|---|
| Device ID (IDFV) | **Not used** | No `UIDevice.current.identifierForVendor` calls |
| Advertising ID (IDFA) | **Not used** | No `ASIdentifierManager`, no ATT prompt |
| Custom User ID | **Collected** — linked to user, app functionality | Clerk user ID and RevenueCat customer ID used for session/entitlement management |

### Sensitive Categories

| Category | Status |
|---|---|
| Location (Precise/Coarse) | **Not accessed** — No CoreLocation usage |
| Health & Fitness | **Not accessed** — No HealthKit usage |
| Contacts | **Not accessed** — No CNContactStore usage |
| Photos/Videos | **Not accessed** — No PHPhotoLibrary usage |
| Camera | **Not accessed** — No AVCaptureDevice usage |
| Microphone | **Not accessed** — Audio is synthesis output only (AudioService.swift) |
| Financial Info | **Collected via RevenueCat** — subscription and purchase history linked to user, app functionality only; Apple handles raw payment data |
| Sensitive Info | **Not accessed** — No sensitive categories processed |
| Browsing History | **Not applicable** |
| Search History | **Not applicable** |
| Diagnostics | **Not transmitted** — No crash or performance reporting |

### Tracking Declaration

- **NSPrivacyTracking**: `NO`
- App does not track users across apps/websites owned by other companies
- No ATT prompt required (no IDFA, no ad networks, no cross-app tracking)
- Clerk and RevenueCat network requests are for app functionality only, not for tracking

---

## 4. Required Reason APIs (for PrivacyInfo.xcprivacy)

These APIs are used by the app and require declaration in the Privacy Manifest:

| API Category | API Used | Reason Code | Justification |
|---|---|---|---|
| UserDefaults | `UserDefaults.standard` | `CA92.1` | Access info from same app group — UI state, preferences, session tracking |

No other Required Reason APIs identified:
- **File timestamp APIs**: Not used
- **System boot time**: Not used
- **Active keyboard APIs**: Not used
- **Disk space API**: Not used

---

## 5. Future Label Updates Plan

When the following features go live, privacy nutrition labels **MUST** be updated in App Store Connect:

### Phase 1: iCloud KVS Activation
When iCloud Key-Value Storage goes live:
- Review whether tier sync constitutes "collection" — Apple manages iCloud data
- Apple's guidance: iCloud data managed by Apple's infrastructure is typically not considered "collected" by the developer

### Phase 2: Crash Reporting / Analytics
If Sentry or similar is added to iOS app:
- **Diagnostics > Crash Data**: "Data Linked to You" or "Data Not Linked to You" — Analytics
- **Diagnostics > Performance Data**: "Data Not Linked to You" — Analytics

---

## 6. Apple Guidelines Reviewed (Story 3.1.6)

- [App Privacy Details on the App Store](https://developer.apple.com/app-store/app-privacy-details/) — ✅ Reviewed
- [Apple's Required Reason APIs](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_use_of_required_reason_api) — ✅ Reviewed
- [App Store Review Guidelines §5.1](https://developer.apple.com/app-store/review/guidelines/#privacy) — ✅ Reviewed
- [Privacy Manifest Files](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files) — ✅ Reviewed

---

## 7. Audit Trail

| Date | Action | By |
|---|---|---|
| 2025-07-21 | Initial audit and documentation created (v1.x — no network calls) | LumenShore Engineering |
| 2026-03-29 | Updated for v2.x — Clerk auth + RevenueCat subscriptions now live; declared collected data types | LumenShore Engineering |
