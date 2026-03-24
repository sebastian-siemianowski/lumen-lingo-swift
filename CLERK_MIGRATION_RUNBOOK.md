# Clerk Authentication — Migration Runbook & Rollback Plan

> **Last updated:** 2025-01-XX  
> **Owner:** Engineering Lead  
> **Status:** Pre-deployment

---

## Table of Contents

1. [Pre-deployment Checklist](#pre-deployment-checklist)
2. [Deployment Steps](#deployment-steps)
3. [Rollback Steps](#rollback-steps)
4. [Alert Runbooks](#alert-runbooks)
5. [Emergency Contacts](#emergency-contacts)

---

## Pre-deployment Checklist

Before submitting the app update with Clerk authentication:

- [ ] All unit tests pass in CI (`LumenLingoTests/AuthServiceTests.swift` — 13 tests)
- [ ] All UI tests pass on target devices (`LumenLingoUITests/AuthFlowUITests.swift`)
- [ ] Clerk Dashboard has correct redirect URIs for Prod environment
- [ ] Apple Sign-in capability is enabled in App Store Connect
- [ ] Google OAuth Client ID is configured for Prod bundle ID (`com.lumenlingo.app`)
- [ ] Test phone numbers are **disabled** in Prod Clerk instance
- [ ] Feature flag `ff_clerk_auth_enabled` defaults to `false` for Prod (verified in `FeatureFlagService.swift`)
- [ ] Monitoring alerts are configured in Sentry/Datadog (see [Alert Runbooks](#alert-runbooks))
- [ ] Legal documents (Terms, Privacy) are updated to mention Clerk as a data processor
- [ ] DPA (Data Processing Agreement) signed with Clerk — see `DPA_REGISTER.md`
- [ ] ROPA updated with Clerk data flows — see `compliance/ROPA.md`

---

## Deployment Steps

### Phase 1: Internal Testing (Week 0)

1. Submit app update to App Store with Clerk behind feature flag
2. `ff_clerk_auth_enabled` = `true` for Dev/QA/UAT environments (default)
3. `ff_clerk_auth_enabled` = `false` for PreProd/Prod (default)
4. Internal team tests all auth flows for 48 hours in QA environment
5. **Gate:** Zero P0/P1 issues before proceeding

### Phase 2: Limited Rollout (Week 1)

1. Set `ff_clerk_auth_enabled` = `true` via remote config for 5% of Prod users
   ```
   FeatureFlagService.setRemoteValue(true, for: "ff_clerk_auth_enabled")
   ```
2. Monitor for 72 hours:
   - Auth success rate ≥ 95%
   - Token refresh failure rate < 5%
   - No Clerk SDK crashes
   - No forced logout spikes
3. **Gate:** All metrics green for 72 hours before proceeding

### Phase 3: Gradual Ramp (Weeks 2-3)

1. Ramp to 25% of users. Monitor 48 hours.
2. Ramp to 50% of users. Monitor 48 hours.
3. **Gate:** Each ramp requires all metrics green for the monitoring window

### Phase 4: Full Rollout (Week 4)

1. Ramp to 100% of users
2. Monitor for 1 week at full traffic
3. Remove feature flag code in next release (hardcode `ClerkAuthService`)

---

## Rollback Steps

### When to Rollback

- Auth success rate drops below 90% for > 15 minutes
- Token refresh failures exceed 10% for > 5 minutes
- Any Clerk SDK crash affecting > 0.1% of sessions
- Forced logouts spike to 3× normal rate
- Clerk status page reports outage

### Immediate Rollback (< 5 minutes)

1. **Disable the feature flag:**
   ```
   FeatureFlagService.setRemoteValue(false, for: "ff_clerk_auth_enabled")
   ```
   This takes effect on next app launch for each user.

2. **Impact assessment:**
   - Users with active Clerk sessions continue to work (sessions are valid)
   - Only new sign-in attempts are affected (fall back to `MockAuthService`)
   - No data loss — local SwiftData is independent of auth provider

3. **Monitor recovery:**
   - Watch auth success rate return to baseline
   - Confirm no new error spikes

### Full Revert (if persistent issues)

1. Submit hotfix build removing `ClerkAuthService` from Release builds
2. Revert `LumenLingoApp.swift` to always use `MockAuthService`
3. Keep `FeatureFlagService` infrastructure for future re-attempt

### What NOT to do

- Do **not** delete Clerk user accounts — they may be needed for re-enablement
- Do **not** clear UserDefaults feature flag overrides for users who opted in
- Do **not** force-logout existing Clerk sessions — let them expire naturally

---

## Alert Runbooks

### Auth Success Rate Drop (P1)

**Trigger:** < 95% auth success rate over 15-minute window  
**Events:** `auth_apple_succeeded`, `auth_google_succeeded`, `auth_otp_succeeded` vs `*_failed`

**Diagnosis:**
1. Check Clerk status page: https://status.clerk.com
2. Check if failure is provider-specific (Apple? Google? OTP?) or universal
3. Check `SecurityAuditLogger` events for error patterns
4. Check device/OS version distribution of failures

**Mitigation:**
- If Clerk outage → rollback via feature flag
- If provider-specific → check provider status (Apple Developer, Google Cloud)
- If OTP-specific → check Clerk SMS/email delivery dashboard

---

### Token Refresh Failure Spike (P1)

**Trigger:** > 10% refresh failures over 5-minute window  
**Events:** `token_refresh_failed`

**Diagnosis:**
1. Check `ClerkAuthService` token refresh logs
2. Verify Clerk API is responding (check Clerk Dashboard → Logs)
3. Check if failures correlate with specific JWT expiry window

**Mitigation:**
- If Clerk API down → feature flag rollback
- If token format issue → hotfix `ClerkAuthService.checkAuthState()`
- Users naturally retry on next app foreground

---

### OTP Delivery Failure (P2)

**Trigger:** > 20% OTP send failures over 15-minute window  
**Events:** `auth_otp_failed`

**Diagnosis:**
1. Check Clerk Dashboard → SMS/Email delivery logs
2. Check if failure is phone-specific or email-specific
3. Check for carrier/region-specific blocks

**Mitigation:**
- Notify users via in-app banner to try alternate sign-in method
- Contact Clerk support for SMS delivery issues
- Consider fallback to email OTP if SMS is blocked

---

### Account Deletion Spike (P2)

**Trigger:** > 5× normal daily deletion rate  
**Events:** `SecurityEvent.accountDeleted`

**Diagnosis:**
1. Check if deletions correlate with a specific app version or region
2. Check if users are reporting auth issues leading to account deletion
3. Check `SecurityAuditLogger` for forced-logout events preceding deletions

**Mitigation:**
- Investigate root cause (UX issue? auth loop?)
- Consider adding "are you sure?" friction if spike is due to confusion

---

### Forced Logout Spike (P1)

**Trigger:** > 3× normal daily rate  
**Events:** `auth_forced_logout`

**Diagnosis:**
1. Check Clerk Dashboard → Active sessions for mass revocations
2. Check if Clerk rotated signing keys (would invalidate all JWTs)
3. Check `SecurityAuditLogger` for `sessionRevoked` reasons

**Mitigation:**
- If key rotation → users will re-authenticate on next launch
- If Clerk bug → rollback via feature flag
- Communicate to affected users via push notification

---

### Clerk SDK Crash (P1)

**Trigger:** Any crash originating in `ClerkKit` frames  
**Events:** Sentry crash grouping

**Diagnosis:**
1. Check Sentry crash stack trace — is it in `ClerkKit` code or our wrapper?
2. Check Clerk iOS SDK changelog for known issues
3. Check if crash correlates with specific iOS version

**Mitigation:**
- If ClerkKit crash → pin SDK version, file Clerk support ticket
- If our wrapper → hotfix `ClerkAuthService`
- If widespread → feature flag rollback

---

## Emergency Contacts

| Role | Contact | Availability |
|------|---------|-------------|
| Engineering Lead | TBD | 24/7 on-call |
| Clerk Support | support@clerk.com | Business hours (check SLA) |
| Apple Developer Support | https://developer.apple.com/contact/ | Business hours |
| Google Cloud Support | https://cloud.google.com/support | Per plan SLA |

---

## Appendix: Client-Side Architecture Reference

### Feature Flag Resolution
```
FeatureFlagService.clerkAuthEnabled
  → UserDefaults["ff_clerk_auth_enabled"] (if set)
  → Environment default (Dev/QA/UAT=true, PreProd/Prod=false)
  → Cached once at launch (static let)
```

### Auth Service Selection (Release builds)
```swift
// LumenLingoApp.swift
@State private var authService: any AuthServiceProtocol = {
    if FeatureFlagService.clerkAuthEnabled {
        return ClerkAuthService()
    } else {
        return MockAuthService()
    }
}()
```

### Analytics Events for Monitoring
- `auth_apple_started/succeeded/failed/cancelled`
- `auth_google_started/succeeded/failed/cancelled`
- `auth_otp_requested/succeeded/failed`
- `auth_forced_logout`
- `session_restored/restore_failed`
- `token_refresh_success/failed`
- `security_integrity_warning`

### Security Audit Events (SwiftData)
- `SecurityEvent.signIn/signInFailed/signOut/forcedSignOut`
- `SecurityEvent.accountDeleted/integrityWarning`
- `SecurityEvent.otpRateLimited/biometricSuccess/biometricFailed`
- 90-day retention with automatic pruning
