import Foundation
import os.log

// MARK: - Paywall Analytics (Story 6.4)

/// Fire-and-forget analytics events for paywall conversion funnel tracking.
/// Uses the existing `PaywallContext` enum for context — snake_case, domain-prefixed naming.
enum PaywallAnalytics {

    // MARK: - Event Types

    enum Event: String {
        case paywallViewed = "paywall_viewed"
        case paywallTierSelected = "paywall_tier_selected"
        case paywallPurchaseInitiated = "paywall_purchase_initiated"
        case paywallPurchaseCompleted = "paywall_purchase_completed"
        case paywallPurchaseCancelled = "paywall_purchase_cancelled"
        case paywallPurchaseFailed = "paywall_purchase_failed"
        case paywallDismissed = "paywall_dismissed"
        case paywallRestoreTapped = "paywall_restore_tapped"
        // Story 7.3: Onboarding funnel
        case onboardingStarted = "onboarding_started"
        case onboardingScreenViewed = "onboarding_screen_viewed"
        case onboardingCompleted = "onboarding_completed"
        case onboardingSkipped = "onboarding_skipped"
    }

    private static let log = Logger(subsystem: "com.lumenlingo", category: "PaywallAnalytics")

    // MARK: - Track

    /// Fire-and-forget event tracking. Never blocks the UI or purchase flow.
    static func track(_ event: Event, properties: [String: String] = [:]) {
        #if DEBUG
        log.info("[\(event.rawValue, privacy: .public)] \(properties.map { "\($0.key)=\($0.value)" }.joined(separator: ", "), privacy: .public)")
        #endif
        // TODO: Wire to PostHog or other analytics backend when available
    }

    // MARK: - Convenience Methods

    /// Track paywall viewed event.
    static func trackViewed(context: PaywallContext, offeringId: String?, currentTier: String) {
        var props: [String: String] = [
            "context": context.analyticsName,
            "current_tier": currentTier,
        ]
        if let id = offeringId { props["offering_id"] = id }
        if case .featureGate(let feature) = context {
            props["locked_feature"] = String(describing: feature)
        }
        track(.paywallViewed, properties: props)
    }

    /// Track tier selection on paywall.
    static func trackTierSelected(context: PaywallContext, selectedTier: String, currentTier: String) {
        track(.paywallTierSelected, properties: [
            "context": context.analyticsName,
            "selected_tier": selectedTier,
            "current_tier": currentTier,
        ])
    }

    /// Track purchase initiated.
    static func trackPurchaseInitiated(context: PaywallContext, tier: String, isTrial: Bool, offeringId: String?) {
        var props: [String: String] = [
            "context": context.analyticsName,
            "tier": tier,
            "is_trial": String(isTrial),
        ]
        if let id = offeringId { props["offering_id"] = id }
        track(.paywallPurchaseInitiated, properties: props)
    }

    /// Track purchase completed.
    static func trackPurchaseCompleted(context: PaywallContext, tier: String, isUpgrade: Bool) {
        track(.paywallPurchaseCompleted, properties: [
            "context": context.analyticsName,
            "tier": tier,
            "is_upgrade": String(isUpgrade),
        ])
    }

    /// Track purchase cancelled by user.
    static func trackPurchaseCancelled(context: PaywallContext, tier: String) {
        track(.paywallPurchaseCancelled, properties: [
            "context": context.analyticsName,
            "tier": tier,
        ])
    }

    /// Track purchase failed with error.
    static func trackPurchaseFailed(context: PaywallContext, tier: String, errorCode: String) {
        track(.paywallPurchaseFailed, properties: [
            "context": context.analyticsName,
            "tier": tier,
            "error_code": errorCode,
        ])
    }

    /// Track paywall dismissed without purchase.
    static func trackDismissed(context: PaywallContext, timeSpentMs: Int) {
        track(.paywallDismissed, properties: [
            "context": context.analyticsName,
            "time_spent_ms": String(timeSpentMs),
        ])
    }

    /// Track restore button tapped.
    static func trackRestoreTapped(context: PaywallContext, result: String) {
        track(.paywallRestoreTapped, properties: [
            "context": context.analyticsName,
            "result": result,
        ])
    }

    // MARK: - Onboarding Analytics (Story 7.3)

    /// Track onboarding flow started.
    static func trackOnboardingStarted(tier: String, screenCount: Int) {
        track(.onboardingStarted, properties: [
            "tier": tier,
            "screen_count": String(screenCount),
        ])
    }

    /// Track individual onboarding screen viewed.
    static func trackOnboardingScreenViewed(tier: String, screen: String, index: Int) {
        track(.onboardingScreenViewed, properties: [
            "tier": tier,
            "screen": screen,
            "screen_index": String(index),
        ])
    }

    /// Track onboarding completed (all screens viewed).
    static func trackOnboardingCompleted(tier: String) {
        track(.onboardingCompleted, properties: [
            "tier": tier,
        ])
    }

    /// Track onboarding skipped.
    static func trackOnboardingSkipped(tier: String, lastScreen: String) {
        track(.onboardingSkipped, properties: [
            "tier": tier,
            "last_screen": lastScreen,
        ])
    }
}
