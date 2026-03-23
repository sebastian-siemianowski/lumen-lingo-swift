# App Tracking Transparency (ATT) — Compliance Notes

> **Status**: Not Required — LumenLingo does not use IDFA, cross-app tracking, or advertising SDKs.

## Current State

- No IDFA usage
- No third-party analytics that tracks across apps
- No advertising SDKs
- Apple will **reject** apps that include the ATT prompt without actually tracking

## When ATT Becomes Required

ATT is required under **any** of these conditions:

1. **IDFA access** — calling `ASIdentifierManager.shared().advertisingIdentifier`
2. **Third-party analytics SDK** that performs cross-app tracking (e.g., Firebase Analytics with Google Ads linking, Facebook SDK)
3. **Advertising SDK** (e.g., AdMob, Meta Audience Network, Unity Ads)

### If ATT Is Needed — Implementation Checklist

1. Add `NSUserTrackingUsageDescription` to Info.plist:
   > "LumenLingo would like permission to track your activity across other apps and websites to improve your experience and provide personalized content."

2. Import `AppTrackingTransparency`

3. Request permission **before** accessing IDFA:
   ```swift
   ATTrackingManager.requestTrackingAuthorization { status in
       switch status {
       case .authorized: // proceed with tracking
       case .denied, .restricted: // respect user choice, no tracking
       case .notDetermined: break
       @unknown default: break
       }
   }
   ```

4. Handle `.denied` gracefully — app must function fully without tracking

## Privacy-First Analytics Strategy

If analytics are needed in the future, prefer options that do **not** require ATT:

| Provider | ATT Required? | Notes |
|----------|--------------|-------|
| **TelemetryDeck** | No | Privacy-first, no personal data, EU-hosted |
| **Plausible** | No | Cookieless, no personal data |
| **PostHog** (self-hosted) | No | Self-hosted = no cross-app tracking |
| **Apple App Analytics** | No | Built into App Store Connect |
| Firebase Analytics | **Yes** (if linked to Google Ads) | No if purely on-device |

**Recommendation**: Use TelemetryDeck or Apple App Analytics — both are privacy-respecting and don't require ATT.
