# App Store Privacy Nutrition Labels — Internal Mapping Document

**App**: LumenLingo
**Developer**: LumenShore Ltd (Company No. 09607326)
**Document Version**: 1.0
**Date**: 2025-07-21
**Legals.md Reference**: Epic 3, Story 3.1 (Subtask 3.1.5)

---

## 1. Apple's Definition of "Collection"

Per Apple's [App Privacy Details](https://developer.apple.com/app-store/app-privacy-details/) documentation:

> **"Collection"** refers to transmitting data off the device in a way that allows you and/or your third-party partners to access it for a period longer than what is necessary to service the transmitted request in real time.

**Key implication**: Data stored exclusively on-device (SwiftData, UserDefaults) and never transmitted to a server is **NOT** considered "collected" for privacy nutrition label purposes.

---

## 2. Current Data Architecture (v1.x)

| Component | Status |
|---|---|
| Backend API | **None** — AuthService and SyncService are mock implementations |
| Network calls | **Zero** — no URLSession requests in production code |
| Third-party SDKs (iOS) | **None** — no Sentry, Firebase, Amplitude, or ad SDKs |
| Analytics | **None** — no telemetry, no crash reporting |
| iCloud KVS | **Disabled** — InMemoryCloudKeyValueStore stub in use |
| Data storage | **Device-local only** — SwiftData + UserDefaults |

---

## 3. App Store Connect Privacy Label Configuration

### Current State: ALL "Data Not Collected"

Since the app makes zero network calls, stores all data exclusively on-device, and includes no third-party SDKs, the correct App Store Connect configuration is:

**"Data Not Collected"** — None of the data types listed are transmitted off the device.

No individual data type declarations are needed when selecting "Data Not Collected."

### Data Types Stored On-Device (Not "Collected" per Apple's Definition)

These data types exist on-device but are **never transmitted off the device**:

| Apple Category | Apple Sub-category | On-Device Data | Code Location | Linked to User | Used for Tracking |
|---|---|---|---|---|---|
| Contact Info | Name | `UserProfile.firstName` (mock auth placeholder) | `Models/DataModels.swift:7` | N/A | No |
| Contact Info | Email Address | `UserProfile.email` (mock auth placeholder) | `Models/DataModels.swift:8` | N/A | No |
| Usage Data | Product Interaction | Game scores, XP, streaks, time spent, accuracy | `Models/DataModels.swift:265-329` (GameProgressRecord) | N/A | No |
| Usage Data | Other Usage Data | UI preferences, sound settings, visual settings | `Models/DataModels.swift:20-70` (UserProfile settings) | N/A | No |
| Other Data | Language preferences | Source/target language pairs, active selection | `Models/DataModels.swift:331-373` (LanguagePreference) | N/A | No |
| Other Data | Favourite categories | Bookmarked game categories | `Models/DataModels.swift:375-396` (FavoriteCategory) | N/A | No |
| Other Data | Mastered content | Content completion tracking | `Models/DataModels.swift:398+` (MasteredContent) | N/A | No |
| Other Data | Membership tier | Selected tier ID (free/pro/elite/royal) | `Models/DataModels.swift` (UserProfile.selectedTierId) | N/A | No |
| Other Data | Legal consent record | Consent version + date | `Models/DataModels.swift` (UserProfile.legalConsentVersion/Date) | N/A | No |
| Other Data | Daily practice time | Seconds per day | `Services/PracticeTimeTracker.swift:65` (UserDefaults) | N/A | No |
| Other Data | Session counts | Daily round counts | `Services/SessionEngine.swift:85-87` (UserDefaults) | N/A | No |
| Other Data | UI collapse states | Section expansion preferences | Various views via `@PersistedState` | N/A | No |

### Identifiers — NOT Collected

| Identifier Type | Status | Notes |
|---|---|---|
| Device ID (IDFV) | **Not used** | No `UIDevice.current.identifierForVendor` calls |
| Advertising ID (IDFA) | **Not used** | No `ASIdentifierManager`, no ATT prompt |
| Custom User ID | **Not used** | Mock auth only; no server-side user IDs |

### Sensitive Categories — NOT Applicable

| Category | Status |
|---|---|
| Location (Precise/Coarse) | **Not accessed** — No CoreLocation usage |
| Health & Fitness | **Not accessed** — No HealthKit usage |
| Contacts | **Not accessed** — No CNContactStore usage |
| Photos/Videos | **Not accessed** — No PHPhotoLibrary usage |
| Camera | **Not accessed** — No AVCaptureDevice usage |
| Microphone | **Not accessed** — Audio is synthesis output only (AudioService.swift) |
| Financial Info | **Not accessed** — StoreKit not yet integrated |
| Sensitive Info | **Not accessed** — No sensitive categories processed |
| Browsing History | **Not applicable** |
| Search History | **Not applicable** |
| Diagnostics | **Not transmitted** — No crash or performance reporting |

### Tracking Declaration

- **NSPrivacyTracking**: `NO`
- App does not track users across apps/websites owned by other companies
- No ATT prompt required (no IDFA, no ad networks, no cross-app tracking)

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

## 5. Future Label Updates Plan (Story 3.1.7)

When the following features go live, privacy nutrition labels **MUST** be updated in App Store Connect:

### Phase 1: Real Authentication (SIWA)
When Sign in with Apple is implemented:
- **Contact Info > Name**: "Data Linked to You" — App Functionality
- **Contact Info > Email Address**: "Data Linked to You" — App Functionality
- **Identifiers > User ID**: "Data Linked to You" — App Functionality

### Phase 2: Backend API + Cloud Sync
When server-side data storage is implemented:
- **Usage Data > Product Interaction**: "Data Linked to You" — App Functionality
- **Other Data**: "Data Linked to You" — App Functionality

### Phase 3: StoreKit In-App Purchases
When subscriptions go live:
- **Purchases**: "Data Linked to You" — App Functionality (Apple handles payment data)

### Phase 4: Crash Reporting / Analytics
If Sentry or similar is added to iOS app:
- **Diagnostics > Crash Data**: "Data Linked to You" or "Data Not Linked to You" — Analytics
- **Diagnostics > Performance Data**: "Data Not Linked to You" — Analytics

### Phase 5: iCloud KVS Activation
When iCloud Key-Value Storage goes live:
- Review whether tier sync constitutes "collection" — Apple manages iCloud data
- Apple's guidance: iCloud data managed by Apple's infrastructure is typically not considered "collected" by the developer

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
| 2025-07-21 | Initial audit and documentation created | LumenShore Engineering |
| — | Next: Update when SIWA auth goes live | — |
| — | Next: Update when backend API goes live | — |
| — | Next: Update when StoreKit goes live | — |
