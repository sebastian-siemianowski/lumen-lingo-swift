# iCloud Sync — Enable Cross-Device Tier & Progress Synchronisation

## Overview

LumenLingo has **all the sync code already built** — `NSUbiquitousKeyValueStore`-based tier/trial sync in `TierManager`, a `SyncService` protocol for future full-data backup, and a complete Sync tab in Profile. What's missing is the **Apple Developer Program membership** needed to provision the `com.apple.developer.ubiquity-kvstore-identifier` entitlement.

Once developer privileges are obtained, this story re-enables iCloud Key-Value Store sync and lays the groundwork for full CloudKit-based progress backup.

---

## Story

**As a** LumenLingo user with multiple Apple devices,
**I want** my membership tier, trial status, and learning progress to sync automatically across all my devices,
**So that** I can seamlessly continue learning on any device without losing my place or re-selecting my tier.

### Acceptance Criteria

- [ ] Building the app with the iCloud KVS entitlement produces no provisioning errors
- [ ] Changing tier on Device A reflects on Device B within seconds (via `NSUbiquitousKeyValueStore`)
- [ ] Trial start date syncs correctly — earliest date wins across devices (preserves trial window)
- [ ] Conflict resolution works: highest tier rank wins when devices disagree
- [ ] The Sync tab in Profile shows real (not mock) upload/download status
- [ ] App launches and the tier state is pulled from iCloud before the main view appears
- [ ] All existing TierManager cloud sync unit tests pass with the real store enabled
- [ ] No data is lost or corrupted during sync edge cases (offline → online, simultaneous edits)

---

## Subtasks

### 1. Obtain Apple Developer Program Membership
- [ ] **1.1** Enrol in the Apple Developer Program ($99/year)
- [ ] **1.2** Accept all agreements in App Store Connect
- [ ] **1.3** Verify the Team ID is populated in Xcode → Signing & Capabilities

### 2. Provision the iCloud KVS Entitlement
- [ ] **2.1** In the Apple Developer portal, create/update the App ID `com.sebastiansiemianowski.lumenlingo` with the "iCloud" capability (Key-Value Storage enabled)
- [ ] **2.2** Regenerate the provisioning profile to include `com.apple.developer.ubiquity-kvstore-identifier`
- [ ] **2.3** In `project.yml`, uncomment `CODE_SIGN_ENTITLEMENTS: LumenLingo/LumenLingo.entitlements`
- [ ] **2.4** Set `DEVELOPMENT_TEAM` in `project.yml` to your actual Team ID
- [ ] **2.5** Run `xcodegen generate` and verify Xcode shows the iCloud capability with no warnings
- [ ] **2.6** Build & run on a physical device — confirm no provisioning profile errors

### 3. Activate NSUbiquitousKeyValueStore in Code
- [ ] **3.1** In `TierManager.swift`, change the `cloudStore` default from `InMemoryCloudKeyValueStore()` back to `NSUbiquitousKeyValueStore.default`
- [ ] **3.2** The `startCloudSync()` guard (`guard cloudStore is NSUbiquitousKeyValueStore`) will now pass — verify the observer is registered
- [ ] **3.3** Test on two devices: change tier on one, confirm the other picks it up within ~10 seconds
- [ ] **3.4** Test trial date conflict resolution: set different trial start dates on two devices, confirm earliest wins

### 4. Replace Mock SyncService with Real CloudKit Backend
- [ ] **4.1** Add the CloudKit capability to the App ID (iCloud → CloudKit container)
- [ ] **4.2** Create a CloudKit container `iCloud.com.sebastiansiemianowski.lumenlingo`
- [ ] **4.3** Define CloudKit record types: `UserProgressSnapshot` (totalXP, streakDays, level, gameRecords array)
- [ ] **4.4** Implement `CloudKitSyncService` conforming to `SyncServiceProtocol` with real `uploadData` / `downloadData`
- [ ] **4.5** Add conflict resolution for full progress data (merging XP, game records, streak)
- [ ] **4.6** Wire `CloudKitSyncService` into the Sync tab's upload/download buttons in `SyncStatusView`
- [ ] **4.7** Replace mock delay in `SyncStatusView.performUpload()` / `performDownload()` with calls to the real service

### 5. Testing & Validation
- [ ] **5.1** Verify all existing `TierManagerTests` iCloud sync tests (section 20.4) still pass
- [ ] **5.2** Add integration tests for CloudKit upload/download with `CKContainer.default()`
- [ ] **5.3** Test offline → online scenario: make changes while offline, come back online, verify sync completes
- [ ] **5.4** Test fresh install scenario: install app on new device, confirm iCloud tier + progress pull on first launch
- [ ] **5.5** Test simultaneous edits: play on both devices at the same time, confirm no data loss after sync

### 6. Polish & Error Handling
- [ ] **6.1** Add user-facing error messages in `SyncStatusView` for iCloud account not signed in, iCloud storage full, and network unavailable
- [ ] **6.2** Add a "Last synced: X minutes ago" real timestamp (currently mocked)
- [ ] **6.3** Show a subtle sync indicator in the tab bar or header when a sync is in progress
- [ ] **6.4** Handle the `NSUbiquitousKeyValueStore.didChangeExternallyNotification` reason codes (server change, initial sync, quota violation)

---

## Files to Modify

| File | Change |
|------|--------|
| `project.yml` | Uncomment `CODE_SIGN_ENTITLEMENTS`, set `DEVELOPMENT_TEAM` |
| `LumenLingo.entitlements` | Already has `ubiquity-kvstore-identifier` — no changes needed |
| `TierManager.swift` | Change `cloudStore` default to `NSUbiquitousKeyValueStore.default` |
| `SyncService.swift` | Replace `MockSyncService` with `CloudKitSyncService` |
| `SyncStatusView.swift` | Wire real service calls, add error states |
| `ContentView.swift` | No changes needed — `startCloudSync` already called at launch |

---

## Current State (Pre-Enablement)

The codebase is fully prepared for iCloud sync:
- **`TierManager`** has `pushToCloud()`, `pullFromCloud()`, `startCloudSync()` with full conflict resolution
- **`CloudKeyValueStore` protocol** abstracts `NSUbiquitousKeyValueStore` for testability
- **`InMemoryCloudKeyValueStore`** is used as a stub while the entitlement is unavailable — all cloud operations are safe no-ops
- **13+ unit tests** in `TierManagerTests` validate the cloud sync logic using mock stores
- **`SyncStatusView`** has the complete UI for upload/download with animations and status indicators
- The entitlements file (`LumenLingo.entitlements`) is ready with the correct key

**The only blocker is the Apple Developer Program membership.**
