# Sandbox Purchase Round-Trip Verification

> **Story 1.7** — Verifies the full RevenueCat pipeline: SDK → purchase → dashboard → entitlements → tier mapping → renewal → expiry.

## Prerequisites

- [ ] Xcode installed with **LumenLingo-Dev** scheme
- [ ] iPhone or iPad running iOS 17+ (physical device recommended; simulator works for StoreKit sandbox)
- [ ] Sandbox Apple ID configured in **Settings → App Store → Sandbox Account**
- [ ] RevenueCat dashboard access at https://app.revenuecat.com
- [ ] RevenueCat project configured with Products + Entitlements + Offerings (see below)
- [ ] `REVENUECAT_API_KEY` set to a valid sandbox/development API key in `Config/Dev-Debug.xcconfig`

## RevenueCat Dashboard Setup Verification

Before testing, confirm these exist in the RevenueCat dashboard:

| Entity | Identifier | Notes |
|--------|-----------|-------|
| Product | `com.lumenshore.lumenlingo.pro.monthly` | Pro monthly |
| Product | `com.lumenshore.lumenlingo.elite.monthly` | Elite monthly |
| Product | `com.lumenshore.lumenlingo.royal.monthly` | Royal monthly |
| Entitlement | `pro_access` | Grants Pro tier |
| Entitlement | `elite_access` | Grants Elite tier |
| Entitlement | `royal_access` | Grants Royal tier |
| Offering | `default` | Contains all 3 packages |

## Sandbox Timing Reference

Apple Sandbox accelerated renewals:

| Subscription Duration | Sandbox Renewal Interval |
|-----------------------|--------------------------|
| 1 week | 3 minutes |
| 1 month | 5 minutes |
| 2 months | 10 minutes |
| 3 months | 15 minutes |
| 6 months | 30 minutes |
| 1 year | 1 hour |

Auto-renewal repeats up to **6 times** in sandbox, then expires.

---

## Test 1: Pro Monthly Purchase Round-Trip

### 1.1 — Purchase

- [ ] Launch app on device signed into Sandbox Apple ID
- [ ] Navigate to Membership view
- [ ] Tap "Subscribe to Pro" (or trigger `revenueCatService.purchase(package:)` via QA panel)
- [ ] Complete the sandbox payment sheet
- [ ] **Expected:** Purchase succeeds without errors

### 1.2 — RevenueCat Dashboard Verification

- [ ] Open RevenueCat dashboard → Customers → search for the Sandbox Apple ID or RC app user ID
- [ ] **Expected:** Transaction appears within 60 seconds
- [ ] **Expected:** Product ID is `com.lumenshore.lumenlingo.pro.monthly`
- [ ] **Expected:** Entitlement `pro_access` shows as **Active**

### 1.3 — App State Verification

- [ ] **Expected:** `CustomerInfo` delegate callback fires (check Xcode console for `[RCBridge]` log)
- [ ] **Expected:** `entitlements["pro_access"]?.isActive == true`
- [ ] **Expected:** `TierManager.currentTier` updates to `.pro`
- [ ] **Expected:** Membership view reflects Pro tier badge and features

### 1.4 — Sandbox Renewal

- [ ] Wait ~5 minutes for sandbox auto-renewal
- [ ] **Expected:** A delegate callback fires with renewed `CustomerInfo`
- [ ] **Expected:** `pro_access` entitlement remains active
- [ ] **Expected:** Console log: `[RCBridge] CustomerInfo updated`

### 1.5 — Cancellation & Expiry

- [ ] Open **Settings → App Store → Sandbox Account → Manage Subscriptions**
- [ ] Cancel the Pro subscription
- [ ] Wait for the current period to expire (~5 minutes)
- [ ] **Expected:** `CustomerInfo` callback fires with expired entitlement
- [ ] **Expected:** `TierManager.currentTier` reverts to `.free`
- [ ] **Expected:** Membership view reflects Free tier

---

## Test 2: Elite Monthly Purchase Round-Trip

### 2.1 — Purchase

- [ ] Trigger Elite subscription purchase
- [ ] Complete sandbox payment sheet
- [ ] **Expected:** Purchase succeeds

### 2.2 — Dashboard Verification

- [ ] **Expected:** Transaction with `com.lumenshore.lumenlingo.elite.monthly` appears
- [ ] **Expected:** Entitlement `elite_access` shows as **Active**

### 2.3 — App State Verification

- [ ] **Expected:** `TierManager.currentTier` updates to `.elite`
- [ ] **Expected:** Elite-gated features are unlocked

### 2.4 — Cancellation & Expiry

- [ ] Cancel via Settings → Sandbox
- [ ] **Expected:** After expiry, `TierManager.currentTier` reverts to `.free`

---

## Test 3: Royal Monthly Purchase Round-Trip

### 3.1 — Purchase

- [ ] Trigger Royal subscription purchase
- [ ] Complete sandbox payment sheet
- [ ] **Expected:** Purchase succeeds

### 3.2 — Dashboard Verification

- [ ] **Expected:** Transaction with `com.lumenshore.lumenlingo.royal.monthly` appears
- [ ] **Expected:** Entitlement `royal_access` shows as **Active**

### 3.3 — App State Verification

- [ ] **Expected:** `TierManager.currentTier` updates to `.royal`
- [ ] **Expected:** All premium features are unlocked

### 3.4 — Cancellation & Expiry

- [ ] Cancel via Settings → Sandbox
- [ ] **Expected:** After expiry, `TierManager.currentTier` reverts to `.free`

---

## Test 4: Identity Bridge Round-Trip

### 4.1 — Anonymous → Sign In

- [ ] Start with a fresh install (or sign out)
- [ ] **Expected:** App is in anonymous RevenueCat state
- [ ] Sign in via Clerk (Apple/Google/email)
- [ ] **Expected:** Console log: `[RCIdentityBridge] logIn succeeded for user clerk_xxx`
- [ ] **Expected:** RevenueCat dashboard shows the Clerk user ID as the app user ID
- [ ] **Expected:** Subscriber attributes set: `$displayName`, `$email`, `auth_provider`

### 4.2 — Purchase While Signed In

- [ ] Purchase a Pro subscription while signed in
- [ ] **Expected:** Entitlement is linked to the Clerk user ID (visible in RC dashboard)

### 4.3 — Sign Out → Sign In Restores Entitlements

- [ ] Sign out via Clerk
- [ ] **Expected:** App reverts to anonymous RC state
- [ ] Sign back in with the same Clerk account
- [ ] **Expected:** `pro_access` entitlement is automatically restored
- [ ] **Expected:** `TierManager.currentTier` is `.pro` again

---

## Test 5: Restore Purchases

- [ ] Delete and reinstall the app (or use a different device)
- [ ] Sign in with the same Clerk account that has an active subscription
- [ ] **Expected:** Entitlements are automatically restored via `logIn`
- [ ] Alternatively, tap "Restore Purchases"
- [ ] **Expected:** `CustomerInfo` reflects the active subscription

---

## Dashboard Entitlement Summary

After all tests, confirm in the RevenueCat dashboard:

- [ ] `pro_access` entitlement has been granted and shows transaction history
- [ ] `elite_access` entitlement has been granted and shows transaction history
- [ ] `royal_access` entitlement has been granted and shows transaction history

---

## Test Results

| Test | Status | Tester | Date | Notes |
|------|--------|--------|------|-------|
| 1 — Pro Round-Trip | | | | |
| 2 — Elite Round-Trip | | | | |
| 3 — Royal Round-Trip | | | | |
| 4 — Identity Bridge | | | | |
| 5 — Restore Purchases | | | | |
