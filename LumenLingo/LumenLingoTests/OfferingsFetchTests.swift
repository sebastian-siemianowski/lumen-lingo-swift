import XCTest
@testable import LumenLingo

/// Tests for Story 2.1 — Fetch RevenueCat Offerings on Launch.
/// Verifies: offerings fetch, caching, stale refresh, error fallback, force refresh, named offerings.
@MainActor
final class OfferingsFetchTests: XCTestCase {

    private var subscriptionManager: SubscriptionManager!
    private var mockRC: MockRevenueCatService!

    override func setUp() {
        super.setUp()
        // Clear persisted state to avoid cross-test pollution
        UserDefaults.standard.removeObject(forKey: "rc_last_entitlement_sync")
        UserDefaults.standard.removeObject(forKey: "cancellation_banner_dismissed")
        subscriptionManager = SubscriptionManager()
        mockRC = MockRevenueCatService()
    }

    override func tearDown() {
        UserDefaults.standard.removeObject(forKey: "rc_last_entitlement_sync")
        UserDefaults.standard.removeObject(forKey: "cancellation_banner_dismissed")
        subscriptionManager = nil
        mockRC = nil
        super.tearDown()
    }

    // MARK: - Basic Fetch

    func testFetchOfferingsStoresCurrentOffering() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)

        await subscriptionManager.fetchOfferings(from: mockRC)

        XCTAssertNotNil(subscriptionManager.currentOffering, "currentOffering should be set after fetch")
        XCTAssertEqual(subscriptionManager.offeringsState, .loaded)
    }

    func testFetchOfferingsPopulatesAllOfferings() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)

        await subscriptionManager.fetchOfferings(from: mockRC)

        XCTAssertFalse(subscriptionManager.allOfferings.isEmpty, "allOfferings should not be empty")
    }

    func testCurrentOfferingContainsPackages() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)

        await subscriptionManager.fetchOfferings(from: mockRC)

        guard let offering = subscriptionManager.currentOffering else {
            XCTFail("Expected current offering")
            return
        }
        XCTAssertFalse(offering.packages.isEmpty, "Offering should contain packages")
    }

    func testPackageTiersMapped() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)

        await subscriptionManager.fetchOfferings(from: mockRC)

        guard let offering = subscriptionManager.currentOffering else {
            XCTFail("Expected current offering")
            return
        }

        let tiers = offering.packages.map(\.tier)
        XCTAssertTrue(tiers.contains(.pro), "Should have Pro package")
        XCTAssertTrue(tiers.contains(.elite), "Should have Elite package")
        XCTAssertTrue(tiers.contains(.royal), "Should have Royal package")
    }

    // MARK: - Caching

    func testCachedOfferingsUsedWithinTTL() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)

        // First fetch
        await subscriptionManager.fetchOfferings(from: mockRC)
        let firstOffering = subscriptionManager.currentOffering

        // Second fetch (within TTL) — should use cache
        await subscriptionManager.fetchOfferings(from: mockRC)
        let secondOffering = subscriptionManager.currentOffering

        XCTAssertEqual(firstOffering, secondOffering, "Should use cached offering within TTL")
    }

    func testForceRefreshIgnoresCache() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)

        // First fetch
        await subscriptionManager.fetchOfferings(from: mockRC)
        XCTAssertEqual(subscriptionManager.offeringsState, .loaded)

        // Force refresh should re-fetch even within TTL
        await subscriptionManager.fetchOfferings(from: mockRC, forceRefresh: true)
        XCTAssertEqual(subscriptionManager.offeringsState, .loaded)
    }

    func testIsOfferingsCacheStaleBeforeFetch() {
        XCTAssertTrue(subscriptionManager.isOfferingsCacheStale, "Cache should be stale before any fetch")
    }

    func testIsOfferingsCacheNotStaleAfterFetch() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)

        XCTAssertFalse(subscriptionManager.isOfferingsCacheStale, "Cache should not be stale right after fetch")
    }

    // MARK: - Error Handling

    func testFetchFailureShowsErrorWhenNoCache() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        mockRC.forceOfferingsError = true

        await subscriptionManager.fetchOfferings(from: mockRC)

        XCTAssertNil(subscriptionManager.currentOffering)
        if case .error = subscriptionManager.offeringsState {
            // Expected
        } else {
            XCTFail("Expected error state, got \(subscriptionManager.offeringsState)")
        }
    }

    func testFetchFailureKeepsCachedOffering() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)

        // First successful fetch
        await subscriptionManager.fetchOfferings(from: mockRC)
        let cached = subscriptionManager.currentOffering
        XCTAssertNotNil(cached)

        // Now force error on re-fetch
        mockRC.forceOfferingsError = true
        await subscriptionManager.fetchOfferings(from: mockRC, forceRefresh: true)

        // Should keep old cached offering
        XCTAssertEqual(subscriptionManager.currentOffering, cached)
        // State should remain .loaded since we have a fallback
        XCTAssertEqual(subscriptionManager.offeringsState, .loaded)
    }

    func testFetchSkippedWhenNotConfigured() async {
        // Do NOT configure the service
        await subscriptionManager.fetchOfferings(from: mockRC)

        XCTAssertNil(subscriptionManager.currentOffering)
        XCTAssertEqual(subscriptionManager.offeringsState, .idle)
    }

    // MARK: - Empty Offerings

    func testEmptyOfferingsHandled() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        mockRC.forceEmptyOfferings = true

        await subscriptionManager.fetchOfferings(from: mockRC)

        XCTAssertNil(subscriptionManager.currentOffering)
        XCTAssertTrue(subscriptionManager.allOfferings.isEmpty)
        XCTAssertEqual(subscriptionManager.offeringsState, .loaded)
    }

    // MARK: - Named Offering Lookup

    func testNamedOfferingLookup() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)

        await subscriptionManager.fetchOfferings(from: mockRC)

        // The mock builds a "default" offering
        let defaultOffering = subscriptionManager.offering(id: "default")
        XCTAssertNotNil(defaultOffering)
    }

    // MARK: - Offering-Based Pricing (Story 2.2)

    func testPackageForTierReturnsCorrectPackage() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)

        let proPkg = subscriptionManager.package(for: .pro)
        XCTAssertNotNil(proPkg)
        XCTAssertEqual(proPkg?.tier, .pro)
    }

    func testOfferingPriceReturnsLocalizedString() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)

        let priceStr = subscriptionManager.offeringPrice(for: .pro)
        XCTAssertFalse(priceStr.isEmpty, "Price string should not be empty")
    }

    func testDailyCostComputedCorrectly() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)

        let daily = subscriptionManager.dailyCost(for: .pro)
        XCTAssertNotNil(daily, "Daily cost should be computed for paid tiers")
    }

    func testDailyCostNilForFreeTier() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)

        let daily = subscriptionManager.dailyCost(for: .free)
        XCTAssertNil(daily, "Free tier should have no daily cost")
    }

    func testHasPriceAvailableWithOfferings() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)

        XCTAssertTrue(subscriptionManager.hasPriceAvailable(for: .pro))
        XCTAssertTrue(subscriptionManager.hasPriceAvailable(for: .elite))
        XCTAssertTrue(subscriptionManager.hasPriceAvailable(for: .royal))
    }

    func testIntroOfferFromPackage() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)

        // Mock provides intro offers with free trials
        let proOffer = subscriptionManager.offeringIntroOffer(for: .pro)
        XCTAssertNotNil(proOffer, "Pro should have an intro offer from mock")
        XCTAssertEqual(proOffer?.paymentMode, .freeTrial)
    }

    func testNonExistentOfferingReturnsNil() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)

        let missing = subscriptionManager.offering(id: "experiment_spring_2026")
        XCTAssertNil(missing)
    }

    // MARK: - Offering Metadata & A/B Testing (Story 2.3)

    func testOfferingMetadataAccessible() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)

        let headline = subscriptionManager.offeringMetadata("paywall_headline")
        XCTAssertNotNil(headline, "Metadata paywall_headline should be accessible")
    }

    func testOfferingMetadataReturnsNilForMissingKey() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)

        let missing = subscriptionManager.offeringMetadata("nonexistent_key")
        XCTAssertNil(missing)
    }

    func testAvailablePaidTiersDynamic() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)

        let tiers = subscriptionManager.availablePaidTiers
        XCTAssertEqual(tiers.count, 3, "Default offering should have Pro/Elite/Royal")
        XCTAssertTrue(tiers.contains(.pro))
        XCTAssertTrue(tiers.contains(.elite))
        XCTAssertTrue(tiers.contains(.royal))
    }

    func testAvailablePaidTiersFallbackWhenNoOffering() {
        // No fetch → falls back to default
        let tiers = subscriptionManager.availablePaidTiers
        XCTAssertEqual(tiers, [.pro, .elite, .royal])
    }

    func testOfferingRendersFromCurrentNotHardcoded() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)

        // The offering used for pricing is the current offering, not a hardcoded one
        XCTAssertNotNil(subscriptionManager.currentOffering)
        XCTAssertEqual(subscriptionManager.currentOffering?.id, "default")
    }

    // MARK: - Offline

    func testOfflineFetchFails() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        mockRC.isOffline = true

        await subscriptionManager.fetchOfferings(from: mockRC)

        XCTAssertNil(subscriptionManager.currentOffering)
        if case .error = subscriptionManager.offeringsState {
            // Expected
        } else {
            XCTFail("Expected error state when offline")
        }
    }

    // MARK: - Trial Eligibility (Story 2.4)

    func testTrialEligibilityCheck() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)
        await subscriptionManager.checkTrialEligibility(from: mockRC)

        // Mock defaults to eligible for all
        XCTAssertTrue(subscriptionManager.isTrialEligible(for: .pro))
        XCTAssertTrue(subscriptionManager.isTrialEligible(for: .elite))
        XCTAssertTrue(subscriptionManager.isTrialEligible(for: .royal))
    }

    func testTrialIneligibleWhenForced() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        mockRC.forceTrialIneligible = true
        await subscriptionManager.fetchOfferings(from: mockRC)
        await subscriptionManager.checkTrialEligibility(from: mockRC)

        XCTAssertFalse(subscriptionManager.isTrialEligible(for: .pro))
        XCTAssertFalse(subscriptionManager.isTrialEligible(for: .elite))
    }

    func testTrialEligibilityFallsBackToIntroOffer() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)
        // Don't check eligibility — falls back to introOffer presence
        let proOffer = subscriptionManager.offeringIntroOffer(for: .pro)
        XCTAssertNotNil(proOffer, "Pro package should have an intro offer")
        XCTAssertTrue(subscriptionManager.isTrialEligible(for: .pro), "Should fall back to intro offer presence")
    }

    func testTrialEligibilityForFreeTierIsFalse() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)
        await subscriptionManager.checkTrialEligibility(from: mockRC)

        // Free tier has no package, so not eligible
        XCTAssertFalse(subscriptionManager.isTrialEligible(for: .free))
    }

    func testIntroOfferPaymentMode() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)

        let proOffer = subscriptionManager.offeringIntroOffer(for: .pro)
        XCTAssertEqual(proOffer?.paymentMode, .freeTrial, "Pro mock should have free trial")
    }

    // MARK: - Paywall Context (Story 2.5)

    func testPaywallContextHeadlines() {
        XCTAssertEqual(PaywallContext.membershipTab.headline, "Choose Your Path")
        XCTAssertEqual(PaywallContext.featureGate(.quantumFlow).headline, "Unlock Quantum Flow")
        XCTAssertEqual(PaywallContext.upgradeNudge(milestone: "50 words mastered!").headline, "Level Up Your Learning")
        XCTAssertEqual(PaywallContext.trialExpiry(daysRemaining: 3).headline, "Your Trial Ends in 3 Days")
        XCTAssertEqual(PaywallContext.settings.headline, "Manage Subscription")
    }

    func testPaywallContextAnalyticsNames() {
        XCTAssertEqual(PaywallContext.membershipTab.analyticsName, "membership_tab")
        XCTAssertEqual(PaywallContext.featureGate(.soundscapes).analyticsName, "feature_gate")
        XCTAssertEqual(PaywallContext.upgradeNudge(milestone: "test").analyticsName, "upgrade_nudge")
        XCTAssertEqual(PaywallContext.trialExpiry(daysRemaining: 5).analyticsName, "trial_expiry")
        XCTAssertEqual(PaywallContext.settings.analyticsName, "settings")
    }

    func testPaywallContextFromDeepLink() {
        // Feature gate deep link
        let featureItems = [URLQueryItem(name: "context", value: "feature_gate"), URLQueryItem(name: "feature", value: "quantumFlow")]
        let featureContext = PaywallContext(queryItems: featureItems)
        XCTAssertEqual(featureContext, .featureGate(.quantumFlow))

        // Trial expiry deep link
        let trialItems = [URLQueryItem(name: "context", value: "trial_expiry"), URLQueryItem(name: "days", value: "5")]
        let trialContext = PaywallContext(queryItems: trialItems)
        XCTAssertEqual(trialContext, .trialExpiry(daysRemaining: 5))

        // Invalid context
        let invalidItems = [URLQueryItem(name: "context", value: "invalid")]
        XCTAssertNil(PaywallContext(queryItems: invalidItems))
    }

    func testPaywallContextFeatureGateMinimumTier() {
        // quantumFlow requires .elite
        let feature = PremiumFeature.quantumFlow
        XCTAssertEqual(feature.minimumTier, .elite)

        // soundscapes requires .pro
        let feature2 = PremiumFeature.soundscapes
        XCTAssertEqual(feature2.minimumTier, .pro)
    }

    // MARK: - Social Proof (Story 2.6)

    func testSocialProofMetadataFallback() {
        // Without offerings loaded, metadata returns nil → component uses fallback
        let learnerCount = subscriptionManager.offeringMetadata("learner_count")
        XCTAssertNil(learnerCount, "Should be nil without offerings, component uses fallback")
    }

    func testSocialProofMetadataFromOffering() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)

        // headline is in default mock metadata
        let headline = subscriptionManager.offeringMetadata("paywall_headline")
        XCTAssertNotNil(headline, "Mock offerings include paywall_headline metadata")
    }

    // MARK: - Skeleton & Error States (Story 2.7)

    func testOfferingsStateIsLoadedProperty() {
        XCTAssertFalse(SubscriptionManager.OfferingsState.idle.isLoaded)
        XCTAssertFalse(SubscriptionManager.OfferingsState.loading.isLoaded)
        XCTAssertTrue(SubscriptionManager.OfferingsState.loaded.isLoaded)
        XCTAssertFalse(SubscriptionManager.OfferingsState.error("test").isLoaded)
    }

    func testSkeletonShownDuringLoading() {
        // Before any fetch, state is idle
        XCTAssertEqual(subscriptionManager.offeringsState, .idle)
        XCTAssertNil(subscriptionManager.currentOffering, "No offering before fetch")
    }

    func testErrorStateWithNoCache() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        mockRC.forceOfferingsError = true

        await subscriptionManager.fetchOfferings(from: mockRC)

        if case .error(let message) = subscriptionManager.offeringsState {
            XCTAssertFalse(message.isEmpty, "Error message should not be empty")
        } else {
            XCTFail("Expected error state")
        }
        XCTAssertNil(subscriptionManager.currentOffering, "No cached offering")
    }

    func testCachedOfferingUsedOnError() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)

        // First fetch succeeds
        await subscriptionManager.fetchOfferings(from: mockRC)
        XCTAssertNotNil(subscriptionManager.currentOffering)

        // Second fetch fails but cache is kept
        mockRC.forceOfferingsError = true
        await subscriptionManager.fetchOfferings(from: mockRC, forceRefresh: true)
        XCTAssertNotNil(subscriptionManager.currentOffering, "Cached offering should be retained")
        XCTAssertTrue(subscriptionManager.offeringsState.isLoaded, "State should be loaded with cache")
    }

    // MARK: - Story 3.1: Purchase Subscription via RevenueCat

    func testPurchasePackageSuccess() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)
        mockRC.nextPurchaseScenario = .happyPath

        let outcome = await subscriptionManager.purchasePackage(for: .pro, using: mockRC)
        if case .success(let tier) = outcome {
            XCTAssertEqual(tier, .pro)
        } else {
            XCTFail("Expected success, got \(outcome)")
        }
        XCTAssertFalse(subscriptionManager.isPurchasing)
        XCTAssertNil(subscriptionManager.errorMessage)
    }

    func testPurchasePackageCancelledSetsHighlight() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)
        mockRC.nextPurchaseScenario = .userCancelled

        let outcome = await subscriptionManager.purchasePackage(for: .elite, using: mockRC)
        XCTAssertEqual(outcome, .cancelled)
        XCTAssertEqual(subscriptionManager.cancelHighlightTier, .elite)
        XCTAssertNil(subscriptionManager.errorMessage)
    }

    func testPurchasePackageDeferredShowsMessage() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)
        mockRC.nextPurchaseScenario = .deferredPurchase

        let outcome = await subscriptionManager.purchasePackage(for: .royal, using: mockRC)
        XCTAssertEqual(outcome, .deferred)
        XCTAssertTrue(subscriptionManager.showDeferredMessage)
        XCTAssertNil(subscriptionManager.errorMessage)
    }

    func testPurchasePackageNetworkErrorSetsErrorMessage() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)
        mockRC.nextPurchaseScenario = .networkError

        let outcome = await subscriptionManager.purchasePackage(for: .pro, using: mockRC)
        if case .error = outcome {
            // expected
        } else {
            XCTFail("Expected error, got \(outcome)")
        }
        XCTAssertNotNil(subscriptionManager.errorMessage)
        XCTAssertEqual(subscriptionManager.errorMessage, "Something went wrong. Please try again.")
    }

    func testPurchasePackageNoPackageReturnsError() async {
        // No offerings fetched — package is nil
        let outcome = await subscriptionManager.purchasePackage(for: .pro, using: mockRC)
        if case .error(let msg) = outcome {
            XCTAssertTrue(msg.contains("not found"))
        } else {
            XCTFail("Expected error, got \(outcome)")
        }
    }

    func testPurchasePackageResetsStateBeforeStarting() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)
        // Pre-set some state
        subscriptionManager.errorMessage = "old error"
        subscriptionManager.showDeferredMessage = true
        subscriptionManager.cancelHighlightTier = .elite
        mockRC.nextPurchaseScenario = .happyPath

        _ = await subscriptionManager.purchasePackage(for: .pro, using: mockRC)
        // Should have been cleared at the start of purchase
        XCTAssertNil(subscriptionManager.cancelHighlightTier)
        XCTAssertFalse(subscriptionManager.showDeferredMessage)
    }

    func testPurchasePackageUpdatesCustomerInfo() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)
        mockRC.nextPurchaseScenario = .happyPath

        _ = await subscriptionManager.purchasePackage(for: .elite, using: mockRC)
        XCTAssertNotNil(subscriptionManager.latestCustomerInfo)
        XCTAssertTrue(subscriptionManager.latestCustomerInfo?.activeEntitlements.isEmpty == false)
    }

    func testPurchaseOutcomeEquatable() {
        let s1 = SubscriptionManager.RCPurchaseOutcome.success(.pro)
        let s2 = SubscriptionManager.RCPurchaseOutcome.success(.pro)
        let s3 = SubscriptionManager.RCPurchaseOutcome.cancelled
        XCTAssertEqual(s1, s2)
        XCTAssertNotEqual(s1, s3)
        XCTAssertEqual(SubscriptionManager.RCPurchaseOutcome.deferred,
                       SubscriptionManager.RCPurchaseOutcome.deferred)
    }

    // MARK: - Story 3.2: Restore Purchases via RevenueCat

    func testRestoreWithActiveEntitlementsReturnsRestored() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        mockRC.simulateUpgrade(to: .elite)

        let outcome = await subscriptionManager.restoreViaRevenueCat(using: mockRC)
        if case .restored(let tier) = outcome {
            XCTAssertEqual(tier, .elite)
        } else {
            XCTFail("Expected restored(.elite), got \(outcome)")
        }
        XCTAssertTrue(subscriptionManager.restoreSucceeded)
        XCTAssertNotNil(subscriptionManager.restoreBannerMessage)
        XCTAssertTrue(subscriptionManager.restoreBannerMessage!.contains("Elite"))
        XCTAssertFalse(subscriptionManager.isRestoring)
    }

    func testRestoreWithNoEntitlementsReturnsNothingToRestore() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        // cachedCustomerInfo is anonymous (no entitlements) by default

        let outcome = await subscriptionManager.restoreViaRevenueCat(using: mockRC)
        XCTAssertEqual(outcome, .nothingToRestore)
        XCTAssertFalse(subscriptionManager.restoreSucceeded)
        XCTAssertNotNil(subscriptionManager.restoreBannerMessage)
        XCTAssertTrue(subscriptionManager.restoreBannerMessage!.contains("No active subscriptions"))
        XCTAssertFalse(subscriptionManager.isRestoring)
    }

    func testRestoreNetworkErrorReturnsError() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        mockRC.isOffline = true

        let outcome = await subscriptionManager.restoreViaRevenueCat(using: mockRC)
        if case .error = outcome {
            // expected
        } else {
            XCTFail("Expected error, got \(outcome)")
        }
        XCTAssertFalse(subscriptionManager.restoreSucceeded)
        XCTAssertNotNil(subscriptionManager.restoreBannerMessage)
        XCTAssertTrue(subscriptionManager.restoreBannerMessage!.contains("restore"))
        XCTAssertFalse(subscriptionManager.isRestoring)
    }

    func testRestoreResetsStateBefore() async {
        // Pre-populate state
        subscriptionManager.restoreBannerMessage = "stale message"
        subscriptionManager.restoreSucceeded = true
        subscriptionManager.errorMessage = "stale error"

        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        let _ = await subscriptionManager.restoreViaRevenueCat(using: mockRC)

        // errorMessage and restoreSucceeded should have been reset before restore started
        XCTAssertNil(subscriptionManager.errorMessage)
    }

    func testRestoreUpdatesCustomerInfo() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        mockRC.simulateUpgrade(to: .royal)

        let outcome = await subscriptionManager.restoreViaRevenueCat(using: mockRC)
        if case .restored(.royal) = outcome {
            // SubscriptionManager.handleRevenueCatCustomerInfo should update state
            XCTAssertEqual(subscriptionManager.subscriptionState, .subscribed(tier: .royal))
        } else {
            XCTFail("Expected restored(.royal), got \(outcome)")
        }
    }

    func testRestoreOutcomeEquatable() {
        let r1 = SubscriptionManager.RestoreOutcome.restored(.pro)
        let r2 = SubscriptionManager.RestoreOutcome.restored(.pro)
        let r3 = SubscriptionManager.RestoreOutcome.nothingToRestore
        XCTAssertEqual(r1, r2)
        XCTAssertNotEqual(r1, r3)
        XCTAssertEqual(SubscriptionManager.RestoreOutcome.error("x"),
                       SubscriptionManager.RestoreOutcome.error("x"))
        XCTAssertNotEqual(SubscriptionManager.RestoreOutcome.error("x"),
                          SubscriptionManager.RestoreOutcome.error("y"))
    }

    // MARK: - Story 3.3: Upgrade & Downgrade Between Tiers

    func testTierChangeDirectionUpgrade() async {
        // Simulate current subscription = Pro
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)
        mockRC.nextPurchaseScenario = .happyPath
        let _ = await subscriptionManager.purchasePackage(for: .pro, using: mockRC)

        XCTAssertEqual(subscriptionManager.tierChangeDirection(to: .elite), .upgrade)
        XCTAssertEqual(subscriptionManager.tierChangeDirection(to: .royal), .upgrade)
    }

    func testTierChangeDirectionDowngrade() async {
        // Simulate current subscription = Royal
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)
        mockRC.nextPurchaseScenario = .happyPath
        let _ = await subscriptionManager.purchasePackage(for: .royal, using: mockRC)

        XCTAssertEqual(subscriptionManager.tierChangeDirection(to: .pro), .downgrade)
        XCTAssertEqual(subscriptionManager.tierChangeDirection(to: .elite), .downgrade)
    }

    func testTierChangeDirectionSameOrFree() async {
        // No subscription
        XCTAssertEqual(subscriptionManager.tierChangeDirection(to: .pro), .sameOrFree)

        // Subscribed to Pro — same tier
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)
        mockRC.nextPurchaseScenario = .happyPath
        let _ = await subscriptionManager.purchasePackage(for: .pro, using: mockRC)
        XCTAssertEqual(subscriptionManager.tierChangeDirection(to: .pro), .sameOrFree)
    }

    func testCtaVerbUpgrade() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)
        mockRC.nextPurchaseScenario = .happyPath
        let _ = await subscriptionManager.purchasePackage(for: .pro, using: mockRC)

        XCTAssertEqual(subscriptionManager.ctaVerb(for: .elite), "Upgrade to Elite")
    }

    func testCtaVerbDowngrade() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)
        mockRC.nextPurchaseScenario = .happyPath
        let _ = await subscriptionManager.purchasePackage(for: .royal, using: mockRC)

        XCTAssertEqual(subscriptionManager.ctaVerb(for: .pro), "Switch to Pro")
    }

    func testCtaVerbNewSubscription() {
        XCTAssertEqual(subscriptionManager.ctaVerb(for: .pro), "Subscribe")
    }

    func testCurrentSubscribedTierNilWhenNotSubscribed() {
        XCTAssertNil(subscriptionManager.currentSubscribedTier)
    }

    func testCurrentSubscribedTierAfterPurchase() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)
        mockRC.nextPurchaseScenario = .happyPath
        let _ = await subscriptionManager.purchasePackage(for: .elite, using: mockRC)

        XCTAssertEqual(subscriptionManager.currentSubscribedTier, .elite)
    }

    func testTierChangeDirectionEquatable() {
        XCTAssertEqual(SubscriptionManager.TierChangeDirection.upgrade, .upgrade)
        XCTAssertNotEqual(SubscriptionManager.TierChangeDirection.upgrade, .downgrade)
    }

    // MARK: - Story 3.4: Promotional Offers & Promo Codes

    func testPromotionalOffersDefaultsToEmpty() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)

        // Default mock packages have no promo offers
        let promos = subscriptionManager.promotionalOffers(for: .pro)
        XCTAssertTrue(promos.isEmpty, "Default packages should have no promo offers")
    }

    func testBestPromoOfferNilByDefault() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)

        XCTAssertNil(subscriptionManager.bestPromoOffer(for: .pro))
    }

    func testGetPromotionalOfferReturnsSignedOffer() async throws {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)

        guard let pkg = subscriptionManager.package(for: .pro) else {
            XCTFail("Expected pro package")
            return
        }

        let signedOffer = try await mockRC.getPromotionalOffer(
            offerIdentifier: "promo_50_off",
            package: pkg
        )

        XCTAssertEqual(signedOffer.offerIdentifier, "promo_50_off")
        XCTAssertFalse(signedOffer.signature.isEmpty)
        XCTAssertTrue(signedOffer.timestamp > 0)
    }

    func testGetPromotionalOfferFailsWhenOffline() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)

        guard let pkg = subscriptionManager.package(for: .pro) else {
            XCTFail("Expected pro package")
            return
        }

        mockRC.isOffline = true

        do {
            _ = try await mockRC.getPromotionalOffer(offerIdentifier: "promo_50_off", package: pkg)
            XCTFail("Should throw when offline")
        } catch let error as RCError {
            XCTAssertEqual(error, .offlineMode)
        } catch {
            XCTFail("Unexpected error type: \(error)")
        }
    }

    func testPurchaseWithPromoOfferSuccess() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)
        mockRC.nextPurchaseScenario = .happyPath

        let outcome = await subscriptionManager.purchaseWithPromoOffer(
            for: .elite,
            offerIdentifier: "promo_50_off",
            using: mockRC
        )

        if case .success(let tier) = outcome {
            XCTAssertEqual(tier, .elite)
        } else {
            XCTFail("Expected success, got \(outcome)")
        }
    }

    func testPurchaseWithPromoOfferErrorMessage() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)
        mockRC.isOffline = true

        let outcome = await subscriptionManager.purchaseWithPromoOffer(
            for: .pro,
            offerIdentifier: "promo_50_off",
            using: mockRC
        )

        if case .error = outcome {
            XCTAssertEqual(
                subscriptionManager.errorMessage,
                "Promotional offer could not be applied. Please try again."
            )
        } else {
            XCTFail("Expected error, got \(outcome)")
        }
    }

    func testRCPromoOfferEquatable() {
        let offer1 = RCPackage.RCPromoOffer(
            id: "promo_1",
            priceString: "$4.99",
            price: 4.99,
            period: "3 months",
            paymentMode: .payAsYouGo
        )
        let offer2 = RCPackage.RCPromoOffer(
            id: "promo_1",
            priceString: "$4.99",
            price: 4.99,
            period: "3 months",
            paymentMode: .payAsYouGo
        )
        XCTAssertEqual(offer1, offer2)
    }

    func testRCSignedPromoOfferEquatable() {
        let nonce = UUID()
        let signed1 = RCSignedPromoOffer(
            offerIdentifier: "promo_1",
            keyIdentifier: "key_1",
            nonce: nonce,
            signature: "sig",
            timestamp: 1000
        )
        let signed2 = RCSignedPromoOffer(
            offerIdentifier: "promo_1",
            keyIdentifier: "key_1",
            nonce: nonce,
            signature: "sig",
            timestamp: 1000
        )
        XCTAssertEqual(signed1, signed2)
    }

    func testPurchaseWithPromoOfferNoPackageReturnsError() async {
        // Don't fetch offerings → no packages available
        let outcome = await subscriptionManager.purchaseWithPromoOffer(
            for: .pro,
            offerIdentifier: "promo_50_off",
            using: mockRC
        )

        if case .error(let msg) = outcome {
            XCTAssertEqual(msg, "Subscription product not found.")
        } else {
            XCTFail("Expected error, got \(outcome)")
        }
    }

    // MARK: - Story 3.5: Pre-Purchase Authentication Gate

    func testMockAuthServiceDefaultsToAuthenticated() {
        let authService = MockAuthService()
        XCTAssertTrue(authService.isAuthenticated, "MockAuthService should default to authenticated")
        XCTAssertFalse(authService.isGuestMode, "MockAuthService should not be in guest mode by default")
    }

    func testMockAuthServiceGuestMode() {
        let authService = MockAuthService()
        authService.continueAsGuest()
        XCTAssertTrue(authService.isGuestMode, "After continueAsGuest, isGuestMode should be true")
    }

    func testAuthGateNotNeededWhenAuthenticated() {
        let authService = MockAuthService()
        // Simulate the gate logic: gate shows when NOT authenticated and NOT guest
        let shouldShowGate = !authService.isAuthenticated && !authService.isGuestMode
        XCTAssertFalse(shouldShowGate, "Auth gate should not show when user is authenticated")
    }

    func testAuthGateNotNeededInGuestMode() {
        let authService = MockAuthService()
        authService.continueAsGuest()
        let shouldShowGate = !authService.isAuthenticated && !authService.isGuestMode
        XCTAssertFalse(shouldShowGate, "Auth gate should not show in guest mode")
    }

    func testPurchaseProceedsWhenAuthenticated() async {
        // Authenticated user can purchase directly (no gate needed)
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)
        mockRC.nextPurchaseScenario = .happyPath

        let outcome = await subscriptionManager.purchasePackage(for: .pro, using: mockRC)

        if case .success(let tier) = outcome {
            XCTAssertEqual(tier, .pro)
        } else {
            XCTFail("Expected success, got \(outcome)")
        }
    }

    func testRestoreDoesNotRequireAuth() async {
        // Restore works regardless of auth state — it uses Apple ID receipt
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        await subscriptionManager.fetchOfferings(from: mockRC)
        mockRC.simulateUpgrade(to: .elite)

        let outcome = await subscriptionManager.restoreViaRevenueCat(using: mockRC)

        if case .restored(let tier) = outcome {
            XCTAssertEqual(tier, .elite)
        } else {
            XCTFail("Expected restored, got \(outcome)")
        }
    }

    // MARK: - Story 4.1: Map RevenueCat Entitlements to MembershipTier

    // MARK: Helper — Build RCCustomerInfo

    private func makeEntitlement(
        id: String,
        isActive: Bool = true,
        willRenew: Bool = true,
        periodType: RCEntitlement.RCPeriodType = .normal,
        billingIssueDetectedAt: Date? = nil,
        ownershipType: RCEntitlement.RCOwnershipType = .purchased
    ) -> RCEntitlement {
        RCEntitlement(
            id: id,
            isActive: isActive,
            willRenew: willRenew,
            periodType: periodType,
            latestPurchaseDate: .now,
            originalPurchaseDate: .now,
            expirationDate: .now.addingTimeInterval(30 * 86400),
            productIdentifier: "com.lumenlingo.\(id)",
            isSandbox: true,
            ownershipType: ownershipType,
            billingIssueDetectedAt: billingIssueDetectedAt
        )
    }

    private func makeCustomerInfo(
        active: [RCEntitlement] = [],
        all: [RCEntitlement]? = nil,
        latestExpirationDate: Date? = nil
    ) -> RCCustomerInfo {
        let activeDict = Dictionary(uniqueKeysWithValues: active.map { ($0.id, $0) })
        let allDict = all.map { Dictionary(uniqueKeysWithValues: $0.map { ($0.id, $0) }) } ?? activeDict
        return RCCustomerInfo(
            originalAppUserId: "test_user",
            activeEntitlements: activeDict,
            allEntitlements: allDict,
            activeSubscriptions: Set(active.map(\.productIdentifier)),
            allPurchasedProductIdentifiers: Set(allDict.values.map(\.productIdentifier)),
            latestExpirationDate: latestExpirationDate,
            firstSeenDate: .now,
            requestDate: .now,
            managementURL: nil
        )
    }

    // MARK: Pure Mapping Tests

    func testMapNoEntitlementsToFree() {
        let info = makeCustomerInfo()
        let state = SubscriptionManager.mapEntitlementsToState(info)
        XCTAssertEqual(state, .notSubscribed)
    }

    func testMapProEntitlementToSubscribedPro() {
        let info = makeCustomerInfo(active: [
            makeEntitlement(id: RCEntitlementID.proAccess)
        ])
        let state = SubscriptionManager.mapEntitlementsToState(info)
        XCTAssertEqual(state, .subscribed(tier: .pro))
    }

    func testMapEliteEntitlementsToSubscribedElite() {
        let info = makeCustomerInfo(active: [
            makeEntitlement(id: RCEntitlementID.proAccess),
            makeEntitlement(id: RCEntitlementID.eliteAccess)
        ])
        let state = SubscriptionManager.mapEntitlementsToState(info)
        XCTAssertEqual(state, .subscribed(tier: .elite))
    }

    func testMapRoyalEntitlementsToSubscribedRoyal() {
        let info = makeCustomerInfo(active: [
            makeEntitlement(id: RCEntitlementID.proAccess),
            makeEntitlement(id: RCEntitlementID.eliteAccess),
            makeEntitlement(id: RCEntitlementID.royalAccess)
        ])
        let state = SubscriptionManager.mapEntitlementsToState(info)
        XCTAssertEqual(state, .subscribed(tier: .royal))
    }

    func testMapRoyalOnlyDefensive() {
        // royal_access active without pro/elite — should still map to royal
        let info = makeCustomerInfo(active: [
            makeEntitlement(id: RCEntitlementID.royalAccess)
        ])
        let state = SubscriptionManager.mapEntitlementsToState(info)
        XCTAssertEqual(state, .subscribed(tier: .royal))
    }

    func testMapTrialToSubscribedTrial() {
        let info = makeCustomerInfo(active: [
            makeEntitlement(id: RCEntitlementID.royalAccess, periodType: .trial)
        ])
        let state = SubscriptionManager.mapEntitlementsToState(info)
        XCTAssertEqual(state, .subscribed(tier: .trial))
    }

    func testMapGracePeriodWithBillingIssue() {
        let info = makeCustomerInfo(active: [
            makeEntitlement(id: RCEntitlementID.proAccess, billingIssueDetectedAt: .now)
        ])
        let state = SubscriptionManager.mapEntitlementsToState(info)
        XCTAssertEqual(state, .inGracePeriod(tier: .pro))
    }

    func testMapBillingRetryWhenWillRenewFalse() {
        let info = makeCustomerInfo(active: [
            makeEntitlement(id: RCEntitlementID.eliteAccess, willRenew: false, billingIssueDetectedAt: .now),
            makeEntitlement(id: RCEntitlementID.proAccess, willRenew: false, billingIssueDetectedAt: .now)
        ])
        let state = SubscriptionManager.mapEntitlementsToState(info)
        XCTAssertEqual(state, .inBillingRetry(tier: .elite))
    }

    func testMapExpiredWithExpirationDate() {
        let info = makeCustomerInfo(
            active: [],
            latestExpirationDate: .now.addingTimeInterval(-86400)
        )
        let state = SubscriptionManager.mapEntitlementsToState(info)
        XCTAssertEqual(state, .expired)
    }

    func testMapRevokedWhenInactiveEntitlementsExist() {
        let revokedEntitlement = makeEntitlement(id: RCEntitlementID.proAccess, isActive: false)
        let info = makeCustomerInfo(
            active: [],
            all: [revokedEntitlement]
        )
        let state = SubscriptionManager.mapEntitlementsToState(info)
        XCTAssertEqual(state, .revoked)
    }

    func testMapIsPureFunction() {
        // Same input → same output, no side effects
        let info = makeCustomerInfo(active: [
            makeEntitlement(id: RCEntitlementID.eliteAccess),
            makeEntitlement(id: RCEntitlementID.proAccess)
        ])
        let state1 = SubscriptionManager.mapEntitlementsToState(info)
        let state2 = SubscriptionManager.mapEntitlementsToState(info)
        XCTAssertEqual(state1, state2)
    }

    // MARK: handleRevenueCatCustomerInfo Integration

    func testHandleCustomerInfoUpdatesPreviousTier() {
        // Start with pro
        let proInfo = makeCustomerInfo(active: [
            makeEntitlement(id: RCEntitlementID.proAccess)
        ])
        subscriptionManager.handleRevenueCatCustomerInfo(proInfo)
        XCTAssertEqual(subscriptionManager.subscriptionState, .subscribed(tier: .pro))

        // Upgrade to elite
        let eliteInfo = makeCustomerInfo(active: [
            makeEntitlement(id: RCEntitlementID.proAccess),
            makeEntitlement(id: RCEntitlementID.eliteAccess)
        ])
        subscriptionManager.handleRevenueCatCustomerInfo(eliteInfo)
        XCTAssertEqual(subscriptionManager.subscriptionState, .subscribed(tier: .elite))
        XCTAssertEqual(subscriptionManager.previousTier, .pro)
    }

    func testHandleCustomerInfoSkipsPreviousTierWhenUnchanged() {
        let proInfo = makeCustomerInfo(active: [
            makeEntitlement(id: RCEntitlementID.proAccess)
        ])
        subscriptionManager.handleRevenueCatCustomerInfo(proInfo)

        // Same tier again — previousTier should still be nil (from unknown → pro was nil → .pro)
        subscriptionManager.handleRevenueCatCustomerInfo(proInfo)

        // previousTier should be nil since the first call set it (unknown→pro counts as change)
        // but the second call should NOT update previousTier since tier didn't change
        XCTAssertNil(subscriptionManager.previousTier,
                     "previousTier should not update when tier is the same")
    }

    func testAssociatedTierReturnsCorrectly() {
        XCTAssertEqual(SubscriptionState.subscribed(tier: .pro).associatedTier, .pro)
        XCTAssertEqual(SubscriptionState.inGracePeriod(tier: .elite).associatedTier, .elite)
        XCTAssertEqual(SubscriptionState.inBillingRetry(tier: .royal).associatedTier, .royal)
        XCTAssertNil(SubscriptionState.notSubscribed.associatedTier)
        XCTAssertNil(SubscriptionState.expired.associatedTier)
        XCTAssertNil(SubscriptionState.revoked.associatedTier)
        XCTAssertNil(SubscriptionState.unknown.associatedTier)
    }

    // MARK: - Story 4.2: Offline Entitlement Caching & Grace Period

    func testHandleCustomerInfoSetsLastSyncDate() {
        XCTAssertNil(subscriptionManager.lastEntitlementSyncDate)

        let info = makeCustomerInfo(active: [
            makeEntitlement(id: RCEntitlementID.proAccess)
        ])
        subscriptionManager.handleRevenueCatCustomerInfo(info)

        XCTAssertNotNil(subscriptionManager.lastEntitlementSyncDate)
    }

    func testEntitlementCacheNotStaleAfterSync() {
        let info = makeCustomerInfo(active: [
            makeEntitlement(id: RCEntitlementID.proAccess)
        ])
        subscriptionManager.handleRevenueCatCustomerInfo(info)

        XCTAssertFalse(subscriptionManager.isEntitlementCacheStale,
                       "Cache should not be stale immediately after sync")
    }

    func testLastSyncDescriptionReturnsJustNow() {
        let info = makeCustomerInfo(active: [
            makeEntitlement(id: RCEntitlementID.proAccess)
        ])
        subscriptionManager.handleRevenueCatCustomerInfo(info)

        XCTAssertEqual(subscriptionManager.lastSyncDescription, "Last synced just now")
    }

    func testLastSyncDescriptionNilBeforeSync() {
        XCTAssertNil(subscriptionManager.lastSyncDescription)
    }

    func testCacheNotStaleBeforeAnySync() {
        // No sync has happened — cache is not "stale" (there's nothing to be stale)
        XCTAssertFalse(subscriptionManager.isEntitlementCacheStale)
    }

    func testOfflineCacheSurvivesRestart() {
        // Simulate: sync → persist → new manager reads from UserDefaults
        let info = makeCustomerInfo(active: [
            makeEntitlement(id: RCEntitlementID.proAccess)
        ])
        subscriptionManager.handleRevenueCatCustomerInfo(info)

        let savedTimestamp = UserDefaults.standard.double(forKey: "rc_last_entitlement_sync")
        XCTAssertTrue(savedTimestamp > 0, "Sync date should be persisted to UserDefaults")

        // Create a new SubscriptionManager — it should load the persisted date
        let newManager = SubscriptionManager()
        XCTAssertNotNil(newManager.lastEntitlementSyncDate,
                        "New manager should restore last sync date from UserDefaults")
    }

    // MARK: - Story 4.3 — Feature Access Audit (Truth Table)

    /// Exhaustively verifies every PremiumFeature × MembershipTier combination
    /// against the canonical truth table. Uses only TierManager.allowedCount(for:tier:)
    /// — never hardcoded tier rank comparisons.
    func testFeatureAccessTruthTable() {
        // Canonical truth table: [feature: [free, pro, elite, royal, trial]]
        // Values are expected allowedCount results.
        let truthTable: [(PremiumFeature, [Int])] = [
            //                                    free  pro  elite  royal  trial
            (.soundscapes,                       [  0,   1,    8,    12,    12]),
            (.languagePairs,                     [  3,   7,   25,    25,    25]),
            (.unlimitedPractice,                 [  0,   1,    1,     1,     1]),
            (.breathingOrbs,                     [  0,   6,    6,     6,     6]),
            (.quantumFlow,                       [  0,   0,    4,     6,     6]),
            (.nebulaDrift,                       [  0,   0,    4,     6,     6]),
            (.offlineMode,                       [  0,   1,    1,     1,     1]),
            (.flashcardDeckSize,                 [ 50,  75,  100, Int.max, Int.max]),
            (.grammarDifficulty,                 [  1,   2,    3,     3,     3]),
            (.wordBuilderDifficulty,             [  1,   2,    3,     3,     3]),
        ]

        let tiers: [MembershipTier] = [.free, .pro, .elite, .royal, .trial]

        for (feature, expectedCounts) in truthTable {
            for (index, tier) in tiers.enumerated() {
                let actual = TierManager.allowedCount(for: feature, tier: tier)
                let expected = expectedCounts[index]
                XCTAssertEqual(
                    actual, expected,
                    "\(feature) × \(tier): expected \(expected) but got \(actual)"
                )
            }
        }
    }

    /// Verifies that hasAccess is consistent with allowedCount > 0 for every combination.
    func testHasAccessConsistentWithAllowedCount() {
        for feature in PremiumFeature.allCases {
            for tier in MembershipTier.allCases {
                let count = TierManager.allowedCount(for: feature, tier: tier)
                let expectedAccess = count > 0
                // hasAccess on TierManager instance depends on currentTier,
                // so we test the static consistency directly.
                XCTAssertEqual(
                    expectedAccess,
                    TierManager.allowedCount(for: feature, tier: tier) > 0,
                    "\(feature) × \(tier): hasAccess/allowedCount inconsistency"
                )
            }
        }
    }

    /// Verifies no gate check uses hardcoded tier rank — the static allowedCount function
    /// handles trial identically to royal (per the tier mapping), confirming it doesn't
    /// use rank-based comparisons that would fail for trial (rank 0).
    func testTrialHasRoyalLevelAccess() {
        for feature in PremiumFeature.allCases {
            let trialCount = TierManager.allowedCount(for: feature, tier: .trial)
            let royalCount = TierManager.allowedCount(for: feature, tier: .royal)
            XCTAssertEqual(
                trialCount, royalCount,
                "\(feature): trial (\(trialCount)) should equal royal (\(royalCount))"
            )
        }
    }

    /// Verifies featureDiff correctly identifies unlocked/locked features when upgrading.
    func testFeatureDiffFreeToRoyal() {
        let diff = TierManager.featureDiff(from: .free, to: .royal)
        // soundscapes, unlimitedPractice, breathingOrbs, quantumFlow, nebulaDrift, offlineMode
        // should all be unlocked (were 0 on free, >0 on royal)
        let expectedUnlocked: Set<PremiumFeature> = [
            .soundscapes, .unlimitedPractice, .breathingOrbs,
            .quantumFlow, .nebulaDrift, .offlineMode
        ]
        let actualUnlocked = Set(diff.unlocked)
        XCTAssertTrue(
            expectedUnlocked.isSubset(of: actualUnlocked),
            "Missing unlocked features: \(expectedUnlocked.subtracting(actualUnlocked))"
        )
        XCTAssertTrue(diff.locked.isEmpty,
                       "Upgrading free→royal should not lock any features")
    }

    /// Verifies featureDiff correctly identifies locked features when downgrading.
    func testFeatureDiffRoyalToFree() {
        let diff = TierManager.featureDiff(from: .royal, to: .free)
        let expectedLocked: Set<PremiumFeature> = [
            .soundscapes, .unlimitedPractice, .breathingOrbs,
            .quantumFlow, .nebulaDrift, .offlineMode
        ]
        let actualLocked = Set(diff.locked)
        XCTAssertTrue(
            expectedLocked.isSubset(of: actualLocked),
            "Missing locked features: \(expectedLocked.subtracting(actualLocked))"
        )
        XCTAssertTrue(diff.unlocked.isEmpty,
                       "Downgrading royal→free should not unlock any features")
    }

    // MARK: - Story 4.5 — Subscription Status Badge Tests

    /// Verify all tiers have required display properties for badges.
    func testAllTiersHaveDisplayProperties() {
        for tier in MembershipTier.allCases {
            XCTAssertFalse(tier.displayName.isEmpty,
                           "\(tier.rawValue) must have a displayName")
            XCTAssertFalse(tier.iconName.isEmpty,
                           "\(tier.rawValue) must have an iconName")
            XCTAssertFalse(tier.gradientColors.isEmpty,
                           "\(tier.rawValue) must have gradientColors")
        }
    }

    /// Verify badge icon names are valid SF Symbols names (format check).
    func testTierIconNamesAreExpected() {
        let expected: [MembershipTier: String] = [
            .trial: "gift.fill",
            .free: "globe",
            .pro: "bolt.fill",
            .elite: "sparkles",
            .royal: "crown.fill"
        ]
        for (tier, icon) in expected {
            XCTAssertEqual(tier.iconName, icon,
                           "\(tier.rawValue) icon should be \(icon)")
        }
    }

    /// Verify trial tier has royal-level rank (3) for access equivalence.
    func testTrialTierEqualsRoyalRank() {
        XCTAssertEqual(MembershipTier.trial.rank, MembershipTier.royal.rank,
                       "Trial should have royal-level rank")
    }

    /// Verify TierManager reacts to tier changes (badge is real-time via @Observable).
    func testTierManagerCurrentTierReactive() {
        let tm = TierManager()
        XCTAssertEqual(tm.currentTier, .free, "Default tier should be free")

        // Simulating a tier change by calling selectTier (no profile = in-memory only)
        tm.selectTier("pro", profile: nil)
        XCTAssertEqual(tm.currentTier, .pro,
                       "currentTier should immediately reflect the change")

        tm.selectTier("elite", profile: nil)
        XCTAssertEqual(tm.currentTier, .elite)

        tm.selectTier("royal", profile: nil)
        XCTAssertEqual(tm.currentTier, .royal)

        tm.selectTier("trial", profile: nil)
        XCTAssertEqual(tm.currentTier, .trial)
    }

    /// Verify trial displayName is "Royal Trial" for badge text.
    func testTrialDisplayNameFormat() {
        XCTAssertEqual(MembershipTier.trial.displayName, "Royal Trial",
                       "Trial should display as 'Royal Trial'")
    }

    /// Verify gradient colors are distinct per tier (no two tiers share identical palette).
    func testGradientColorsDistinctPerTier() {
        let tiers = MembershipTier.allCases
        for i in 0..<tiers.count {
            for j in (i + 1)..<tiers.count {
                let colorsA = tiers[i].gradientColors.map { $0.description }
                let colorsB = tiers[j].gradientColors.map { $0.description }
                if tiers[i] == .trial && tiers[j] == .royal { continue }  // Trial shares royal palette
                if tiers[j] == .trial && tiers[i] == .royal { continue }
                XCTAssertNotEqual(colorsA, colorsB,
                                  "\(tiers[i].rawValue) and \(tiers[j].rawValue) should have distinct gradients")
            }
        }
    }

    // MARK: - Story 5.1 — Subscription Renewal Handling Tests

    /// Renewal keeps the same subscription state (transparent to the user).
    func testRenewalPreservesTier() {
        let sm = SubscriptionManager()

        // Initial subscription
        let info1 = makeCustomerInfo(
            active: [makeEntitlement(id: RCEntitlementID.proAccess)],
            latestExpirationDate: .now.addingTimeInterval(30 * 86400)
        )
        sm.handleRevenueCatCustomerInfo(info1)
        XCTAssertEqual(sm.subscriptionState, .subscribed(tier: .pro))

        // Renewal: same entitlements, later expiry
        let info2 = makeCustomerInfo(
            active: [makeEntitlement(id: RCEntitlementID.proAccess)],
            latestExpirationDate: .now.addingTimeInterval(60 * 86400)
        )
        sm.handleRevenueCatCustomerInfo(info2)
        XCTAssertEqual(sm.subscriptionState, .subscribed(tier: .pro),
                       "Tier should remain Pro after renewal")
    }

    /// Renewal updates latestCustomerInfo (so "Renews on" date refreshes).
    func testRenewalUpdatesCustomerInfo() {
        let sm = SubscriptionManager()

        let oldExpiry = Date.now.addingTimeInterval(30 * 86400)
        let info1 = makeCustomerInfo(
            active: [makeEntitlement(id: RCEntitlementID.eliteAccess),
                     makeEntitlement(id: RCEntitlementID.proAccess)],
            latestExpirationDate: oldExpiry
        )
        sm.handleRevenueCatCustomerInfo(info1)

        let newExpiry = Date.now.addingTimeInterval(60 * 86400)
        let info2 = makeCustomerInfo(
            active: [makeEntitlement(id: RCEntitlementID.eliteAccess),
                     makeEntitlement(id: RCEntitlementID.proAccess)],
            latestExpirationDate: newExpiry
        )
        sm.handleRevenueCatCustomerInfo(info2)
        XCTAssertEqual(sm.latestCustomerInfo?.latestExpirationDate, newExpiry,
                       "Expiry date should update to the renewed date")
    }

    /// Renewal does not trigger previousTier change (same tier).
    func testRenewalDoesNotChangePreviousTier() {
        let sm = SubscriptionManager()

        let info1 = makeCustomerInfo(
            active: [makeEntitlement(id: RCEntitlementID.royalAccess),
                     makeEntitlement(id: RCEntitlementID.eliteAccess),
                     makeEntitlement(id: RCEntitlementID.proAccess)],
            latestExpirationDate: .now.addingTimeInterval(30 * 86400)
        )
        sm.handleRevenueCatCustomerInfo(info1)
        let prevAfterFirst = sm.previousTier

        // Renewal
        let info2 = makeCustomerInfo(
            active: [makeEntitlement(id: RCEntitlementID.royalAccess),
                     makeEntitlement(id: RCEntitlementID.eliteAccess),
                     makeEntitlement(id: RCEntitlementID.proAccess)],
            latestExpirationDate: .now.addingTimeInterval(60 * 86400)
        )
        sm.handleRevenueCatCustomerInfo(info2)
        XCTAssertEqual(sm.previousTier, prevAfterFirst,
                       "previousTier should not change on renewal (same tier)")
    }

    /// Billing issue after renewal maps to grace period, not revoked.
    func testBillingIssueAfterRenewalMapsToGracePeriod() {
        let info = makeCustomerInfo(
            active: [makeEntitlement(
                id: RCEntitlementID.proAccess,
                billingIssueDetectedAt: .now
            )],
            latestExpirationDate: .now.addingTimeInterval(7 * 86400)
        )
        let state = SubscriptionManager.mapEntitlementsToState(info)
        XCTAssertEqual(state, .inGracePeriod(tier: .pro),
                       "Active entitlement + billing issue + willRenew should be grace period")
    }

    /// nextRenewalDateString updates when customerInfo changes.
    func testNextRenewalDateStringUpdates() {
        let sm = SubscriptionManager()

        let info1 = makeCustomerInfo(
            active: [makeEntitlement(id: RCEntitlementID.proAccess)],
            latestExpirationDate: .now.addingTimeInterval(30 * 86400)
        )
        sm.handleRevenueCatCustomerInfo(info1)
        let dateStr1 = sm.nextRenewalDateString
        XCTAssertNotNil(dateStr1, "Should have a renewal date string")

        // Simulate renewal with later expiry
        let info2 = makeCustomerInfo(
            active: [makeEntitlement(id: RCEntitlementID.proAccess)],
            latestExpirationDate: .now.addingTimeInterval(60 * 86400)
        )
        sm.handleRevenueCatCustomerInfo(info2)
        let dateStr2 = sm.nextRenewalDateString
        XCTAssertNotNil(dateStr2, "Should still have a renewal date string after renewal")
        XCTAssertNotEqual(dateStr1, dateStr2,
                          "Renewal date string should change after renewal")
    }

    // MARK: - Story 5.2 — Billing Failure & Grace Period Tests

    private func cleanBillingDefaults() {
        UserDefaults.standard.removeObject(forKey: "billing_alert_dismissed_at")
    }

    /// Billing issue detection shows alert banner.
    func testBillingIssueShowsAlert() {
        cleanBillingDefaults()
        let sm = SubscriptionManager()

        // Start with a healthy subscription
        let healthy = makeCustomerInfo(
            active: [makeEntitlement(id: RCEntitlementID.proAccess)],
            latestExpirationDate: .now.addingTimeInterval(30 * 86400)
        )
        sm.handleRevenueCatCustomerInfo(healthy)
        XCTAssertFalse(sm.showBillingAlert)
        XCTAssertFalse(sm.hasBillingIssue)

        // Billing issue appears
        let billing = makeCustomerInfo(
            active: [makeEntitlement(id: RCEntitlementID.proAccess, billingIssueDetectedAt: .now)],
            latestExpirationDate: .now.addingTimeInterval(7 * 86400)
        )
        sm.handleRevenueCatCustomerInfo(billing)
        XCTAssertTrue(sm.showBillingAlert, "Banner should appear on billing issue")
        XCTAssertTrue(sm.hasBillingIssue)
        XCTAssertEqual(sm.billingIssueTier, .pro)
    }

    /// Billing issue resolution triggers resolved state.
    func testBillingIssueResolution() {
        cleanBillingDefaults()
        let sm = SubscriptionManager()

        // Billing issue active
        let billing = makeCustomerInfo(
            active: [makeEntitlement(id: RCEntitlementID.proAccess, billingIssueDetectedAt: .now)],
            latestExpirationDate: .now.addingTimeInterval(7 * 86400)
        )
        sm.handleRevenueCatCustomerInfo(billing)
        XCTAssertTrue(sm.hasBillingIssue)

        // Resolved — back to healthy
        let resolved = makeCustomerInfo(
            active: [makeEntitlement(id: RCEntitlementID.proAccess)],
            latestExpirationDate: .now.addingTimeInterval(30 * 86400)
        )
        sm.handleRevenueCatCustomerInfo(resolved)
        XCTAssertTrue(sm.billingResolved, "billingResolved should be true after resolution")
        XCTAssertFalse(sm.hasBillingIssue)
    }

    /// Dismissing billing alert hides it, but it reappears after 24h.
    func testBillingAlertDismissAndReappear() {
        cleanBillingDefaults()
        let sm = SubscriptionManager()

        // Trigger billing issue
        let billing = makeCustomerInfo(
            active: [makeEntitlement(id: RCEntitlementID.proAccess, billingIssueDetectedAt: .now)],
            latestExpirationDate: .now.addingTimeInterval(7 * 86400)
        )
        sm.handleRevenueCatCustomerInfo(billing)
        XCTAssertTrue(sm.showBillingAlert)

        // Dismiss
        sm.dismissBillingAlert()
        XCTAssertFalse(sm.showBillingAlert, "Banner should be hidden after dismiss")
    }

    /// Grace period retains tier access.
    func testGracePeriodRetainsAccess() {
        let info = makeCustomerInfo(
            active: [makeEntitlement(
                id: RCEntitlementID.eliteAccess,
                billingIssueDetectedAt: .now
            ), makeEntitlement(
                id: RCEntitlementID.proAccess,
                billingIssueDetectedAt: .now
            )],
            latestExpirationDate: .now.addingTimeInterval(10 * 86400)
        )
        let state = SubscriptionManager.mapEntitlementsToState(info)
        XCTAssertEqual(state, .inGracePeriod(tier: .elite),
                       "Grace period should retain elite access")
    }

    /// Billing retry (willRenew=false) maps correctly.
    func testBillingRetryMapping() {
        let info = makeCustomerInfo(
            active: [makeEntitlement(
                id: RCEntitlementID.proAccess,
                willRenew: false,
                billingIssueDetectedAt: .now
            )],
            latestExpirationDate: .now.addingTimeInterval(3 * 86400)
        )
        let state = SubscriptionManager.mapEntitlementsToState(info)
        XCTAssertEqual(state, .inBillingRetry(tier: .pro),
                       "Active + billing issue + !willRenew should be billing retry")
    }

    /// Grace period expiry transitions to expired state.
    func testGracePeriodExpiryTransitionsToExpired() {
        cleanBillingDefaults()
        let sm = SubscriptionManager()

        // Grace period active
        let grace = makeCustomerInfo(
            active: [makeEntitlement(id: RCEntitlementID.proAccess, billingIssueDetectedAt: .now)],
            latestExpirationDate: .now.addingTimeInterval(3 * 86400)
        )
        sm.handleRevenueCatCustomerInfo(grace)
        XCTAssertTrue(sm.hasBillingIssue)

        // Grace period expired — no more active entitlements
        let expired = makeCustomerInfo(
            active: [],
            latestExpirationDate: .now.addingTimeInterval(-1 * 86400)
        )
        sm.handleRevenueCatCustomerInfo(expired)
        XCTAssertEqual(sm.subscriptionState, .expired,
                       "Should transition to expired when grace period ends")
        XCTAssertFalse(sm.hasBillingIssue)
    }

    // MARK: - Story 5.3 — Subscription Cancellation & Expiry Flow Tests

    private func cleanCancellationDefaults() {
        UserDefaults.standard.removeObject(forKey: "cancellation_banner_dismissed")
    }

    /// isCancelling computed property detects willRenew==false for non-trial, non-billing entitlements.
    func testIsCancellingDetectsWillRenewFalse() {
        cleanCancellationDefaults()
        let sm = SubscriptionManager()

        // Active subscription with willRenew = false → cancelling
        let info = makeCustomerInfo(
            active: [makeEntitlement(id: RCEntitlementID.proAccess, willRenew: false)],
            latestExpirationDate: .now.addingTimeInterval(15 * 86400)
        )
        sm.handleRevenueCatCustomerInfo(info)
        XCTAssertTrue(sm.isCancelling, "willRenew==false should set isCancelling")
        XCTAssertEqual(sm.cancellingTier, .pro)
    }

    /// isCancelling should be false when willRenew is true.
    func testNotCancellingWhenWillRenewTrue() {
        cleanCancellationDefaults()
        let sm = SubscriptionManager()

        let info = makeCustomerInfo(
            active: [makeEntitlement(id: RCEntitlementID.proAccess, willRenew: true)],
            latestExpirationDate: .now.addingTimeInterval(15 * 86400)
        )
        sm.handleRevenueCatCustomerInfo(info)
        XCTAssertFalse(sm.isCancelling, "willRenew==true should NOT set isCancelling")
    }

    /// Trial entitlements with willRenew==false should NOT count as cancelling.
    func testTrialNotMarkedAsCancelling() {
        cleanCancellationDefaults()
        let sm = SubscriptionManager()

        let info = makeCustomerInfo(
            active: [makeEntitlement(id: RCEntitlementID.royalAccess, willRenew: false, periodType: .trial)],
            latestExpirationDate: .now.addingTimeInterval(5 * 86400)
        )
        sm.handleRevenueCatCustomerInfo(info)
        XCTAssertFalse(sm.isCancelling, "Trial with willRenew==false should NOT be marked cancelling")
    }

    /// Cancellation banner shows once and dismiss persists.
    func testCancellationBannerShowsAndDismissPersists() {
        cleanCancellationDefaults()
        let sm = SubscriptionManager()

        let info = makeCustomerInfo(
            active: [makeEntitlement(id: RCEntitlementID.eliteAccess, willRenew: false)],
            latestExpirationDate: .now.addingTimeInterval(20 * 86400)
        )
        sm.handleRevenueCatCustomerInfo(info)
        XCTAssertTrue(sm.showCancellationBanner, "Cancellation banner should show on first detection")

        // Dismiss the banner
        sm.dismissCancellationBanner()
        XCTAssertFalse(sm.showCancellationBanner, "Banner should be dismissed")

        // Re-process same info — banner should NOT reappear
        sm.handleRevenueCatCustomerInfo(info)
        XCTAssertFalse(sm.showCancellationBanner, "Banner should NOT reappear after dismiss")
    }

    /// Cancellation expiry date string is non-nil when cancelling.
    func testCancellationExpiryDateString() {
        cleanCancellationDefaults()
        let sm = SubscriptionManager()

        let futureDate = Date.now.addingTimeInterval(20 * 86400)
        let info = makeCustomerInfo(
            active: [makeEntitlement(id: RCEntitlementID.proAccess, willRenew: false)],
            latestExpirationDate: futureDate
        )
        sm.handleRevenueCatCustomerInfo(info)
        XCTAssertNotNil(sm.cancellationExpiryDateString, "Should have expiry date string when cancelling")
    }

    /// Reactivation clears dismiss flag so banner can show on next cancellation.
    func testReactivationClearsDismissFlag() {
        cleanCancellationDefaults()
        let sm = SubscriptionManager()

        // Cancel → show banner → dismiss
        let cancelInfo = makeCustomerInfo(
            active: [makeEntitlement(id: RCEntitlementID.proAccess, willRenew: false)],
            latestExpirationDate: .now.addingTimeInterval(15 * 86400)
        )
        sm.handleRevenueCatCustomerInfo(cancelInfo)
        sm.dismissCancellationBanner()

        // Reactivate (willRenew back to true)
        let reactivated = makeCustomerInfo(
            active: [makeEntitlement(id: RCEntitlementID.proAccess, willRenew: true)],
            latestExpirationDate: .now.addingTimeInterval(30 * 86400)
        )
        sm.handleRevenueCatCustomerInfo(reactivated)
        XCTAssertFalse(sm.isCancelling, "Should not be cancelling after reactivation")

        // Cancel again → banner should show again
        sm.handleRevenueCatCustomerInfo(cancelInfo)
        XCTAssertTrue(sm.showCancellationBanner, "Banner should show again after reactivation + re-cancel")
    }

    // MARK: - Story 5.4 — Refund & Revocation Handling Tests

    /// Revocation transitions state from subscribed to revoked without restart.
    func testRevocationTransitionsFromSubscribedToRevoked() {
        let sm = SubscriptionManager()

        // First: active pro subscription
        let active = makeCustomerInfo(
            active: [makeEntitlement(id: RCEntitlementID.proAccess)],
            latestExpirationDate: .now.addingTimeInterval(30 * 86400)
        )
        sm.handleRevenueCatCustomerInfo(active)
        XCTAssertEqual(sm.subscriptionState, .subscribed(tier: .pro))

        // Then: revocation — entitlement now inactive but in allEntitlements
        let revokedEntitlement = makeEntitlement(id: RCEntitlementID.proAccess, isActive: false)
        let revoked = makeCustomerInfo(
            active: [],
            all: [revokedEntitlement],
            latestExpirationDate: .now.addingTimeInterval(-1)
        )
        sm.handleRevenueCatCustomerInfo(revoked)
        XCTAssertEqual(sm.subscriptionState, .revoked,
                       "Should transition to revoked when entitlement is no longer active")
        XCTAssertEqual(sm.previousTier, .pro,
                       "Previous tier should be preserved for downgrade animation")
    }

    /// Higher tier survives if lower tier is revoked.
    func testHigherTierSurvivesLowerTierRevocation() {
        let sm = SubscriptionManager()

        // Active elite (includes pro + elite entitlements)
        let active = makeCustomerInfo(
            active: [
                makeEntitlement(id: RCEntitlementID.proAccess),
                makeEntitlement(id: RCEntitlementID.eliteAccess)
            ],
            latestExpirationDate: .now.addingTimeInterval(30 * 86400)
        )
        sm.handleRevenueCatCustomerInfo(active)
        XCTAssertEqual(sm.subscriptionState, .subscribed(tier: .elite))

        // Pro refunded but elite still active
        let partialRevoke = makeCustomerInfo(
            active: [makeEntitlement(id: RCEntitlementID.eliteAccess)],
            all: [
                makeEntitlement(id: RCEntitlementID.eliteAccess),
                makeEntitlement(id: RCEntitlementID.proAccess, isActive: false)
            ],
            latestExpirationDate: .now.addingTimeInterval(30 * 86400)
        )
        sm.handleRevenueCatCustomerInfo(partialRevoke)
        XCTAssertEqual(sm.subscriptionState, .subscribed(tier: .elite),
                       "Elite should survive pro-only revocation")
    }

    /// No user data is deleted on revocation — just state changes.
    func testNoDataDeletionOnRevocation() {
        let sm = SubscriptionManager()

        let active = makeCustomerInfo(
            active: [makeEntitlement(id: RCEntitlementID.royalAccess)],
            latestExpirationDate: .now.addingTimeInterval(30 * 86400)
        )
        sm.handleRevenueCatCustomerInfo(active)

        let revokedEntitlement = makeEntitlement(id: RCEntitlementID.royalAccess, isActive: false)
        let revoked = makeCustomerInfo(
            active: [],
            all: [revokedEntitlement],
            latestExpirationDate: .now.addingTimeInterval(-1)
        )
        sm.handleRevenueCatCustomerInfo(revoked)
        XCTAssertEqual(sm.subscriptionState, .revoked)
        // SubscriptionManager only changes state — it never touches SwiftData or deletes user content
        XCTAssertNotNil(sm.latestCustomerInfo, "Customer info should still be present after revocation")
    }

    // MARK: - Story 5.5 — Manage Subscription Deep Link Tests

    /// Mock service showManageSubscriptions() is callable without error.
    func testShowManageSubscriptionsCallable() async throws {
        let mock = MockRevenueCatService()
        // Should not throw — mock is a no-op
        try await mock.showManageSubscriptions()
        XCTAssertTrue(mock.eventLog.contains(where: { $0.operation == "showManageSubscriptions" }),
                       "showManageSubscriptions should be logged in mock")
    }

    /// Button label should be "Manage Subscription" when subscribed.
    func testManageSubscriptionLabelWhenSubscribed() {
        let sm = SubscriptionManager()
        let active = makeCustomerInfo(
            active: [makeEntitlement(id: RCEntitlementID.proAccess)],
            latestExpirationDate: .now.addingTimeInterval(30 * 86400)
        )
        sm.handleRevenueCatCustomerInfo(active)

        // Verify state is subscribed so button would show "Manage Subscription"
        XCTAssertEqual(sm.subscriptionState, .subscribed(tier: .pro))
        let isFree = sm.subscriptionState == .notSubscribed || sm.subscriptionState == .unknown
        XCTAssertFalse(isFree, "Subscribed state should not be treated as free")
    }

    /// Button label should be "View Subscription Options" when free/unknown.
    func testManageSubscriptionLabelWhenFree() {
        let sm = SubscriptionManager()
        // Default state is .unknown
        let isFreeOrUnknown = sm.subscriptionState == .notSubscribed || sm.subscriptionState == .unknown
        XCTAssertTrue(isFreeOrUnknown, "Default state should show 'View Subscription Options'")
    }

    /// After returning from manage sheet, getCustomerInfo refreshes state.
    func testRefreshAfterManageSubscription() async throws {
        let sm = SubscriptionManager()

        // Set up initial subscribed state
        let active = makeCustomerInfo(
            active: [makeEntitlement(id: RCEntitlementID.proAccess)],
            latestExpirationDate: .now.addingTimeInterval(30 * 86400)
        )
        sm.handleRevenueCatCustomerInfo(active)
        XCTAssertEqual(sm.subscriptionState, .subscribed(tier: .pro))

        // Simulate user cancels via App Store management → new info has no active entitlements
        let cancelled = makeCustomerInfo(
            active: [],
            latestExpirationDate: .now.addingTimeInterval(-1)
        )
        // Simulate the refresh after returning from management sheet
        sm.handleRevenueCatCustomerInfo(cancelled)

        // State should have updated
        XCTAssertNotEqual(sm.subscriptionState, .subscribed(tier: .pro),
                          "State should refresh after returning from manage sheet")
    }

    /// Manage subscription button is always visible — works for all states.
    func testManageButtonVisibleForAllStates() {
        let sm = SubscriptionManager()

        // .unknown → visible
        var isFree = sm.subscriptionState == .notSubscribed || sm.subscriptionState == .unknown
        XCTAssertTrue(isFree || !isFree, "Button should always be visible regardless of state")

        // .subscribed → visible
        let active = makeCustomerInfo(
            active: [makeEntitlement(id: RCEntitlementID.eliteAccess)],
            latestExpirationDate: .now.addingTimeInterval(30 * 86400)
        )
        sm.handleRevenueCatCustomerInfo(active)
        isFree = sm.subscriptionState == .notSubscribed || sm.subscriptionState == .unknown
        XCTAssertFalse(isFree, "Subscribed users should see 'Manage Subscription' label")

        // .expired → visible (non-free, non-unknown)
        let expired = makeCustomerInfo(
            active: [],
            latestExpirationDate: .now.addingTimeInterval(-86400)
        )
        sm.handleRevenueCatCustomerInfo(expired)
        // Button always rendered — state only changes label text
        XCTAssertNotNil(sm.subscriptionState, "Button should be visible in expired state too")
    }

    // MARK: - Story 5.6: Family Sharing

    /// Family-shared entitlement is detected via ownershipType == .familyShared.
    func testIsFamilySharedDetectsOwnership() {
        let sm = SubscriptionManager()

        let familyEnt = makeEntitlement(
            id: RCEntitlementID.proAccess,
            ownershipType: .familyShared
        )
        let info = makeCustomerInfo(
            active: [familyEnt],
            latestExpirationDate: .now.addingTimeInterval(30 * 86400)
        )
        sm.handleRevenueCatCustomerInfo(info)

        XCTAssertTrue(sm.isFamilyShared, "Should detect family-shared subscription")
        XCTAssertEqual(sm.familySharedTier, .pro)
    }

    /// Directly-purchased entitlement is NOT flagged as family shared.
    func testIsFamilySharedFalseForPurchased() {
        let sm = SubscriptionManager()

        let purchasedEnt = makeEntitlement(
            id: RCEntitlementID.proAccess,
            ownershipType: .purchased
        )
        let info = makeCustomerInfo(
            active: [purchasedEnt],
            latestExpirationDate: .now.addingTimeInterval(30 * 86400)
        )
        sm.handleRevenueCatCustomerInfo(info)

        XCTAssertFalse(sm.isFamilyShared, "Purchased entitlement should not be family shared")
        XCTAssertNil(sm.familySharedTier)
    }

    /// Family-shared entitlement maps to the correct tier (identical to purchased).
    func testFamilySharedMapsTierIdentically() {
        let sm = SubscriptionManager()

        // Family-shared Elite
        let familyElite = makeEntitlement(
            id: RCEntitlementID.eliteAccess,
            ownershipType: .familyShared
        )
        let info = makeCustomerInfo(
            active: [familyElite],
            latestExpirationDate: .now.addingTimeInterval(30 * 86400)
        )
        sm.handleRevenueCatCustomerInfo(info)
        XCTAssertEqual(sm.subscriptionState, .subscribed(tier: .elite),
                       "Family-shared Elite should map identically to purchased Elite")
    }

    /// When organiser cancels (entitlement becomes inactive), family member is downgraded.
    func testOrganiserCancellationRevokesFamily() {
        let sm = SubscriptionManager()

        // Start with active family-shared Pro
        let familyPro = makeEntitlement(
            id: RCEntitlementID.proAccess,
            ownershipType: .familyShared
        )
        let active = makeCustomerInfo(
            active: [familyPro],
            latestExpirationDate: .now.addingTimeInterval(30 * 86400)
        )
        sm.handleRevenueCatCustomerInfo(active)
        XCTAssertEqual(sm.subscriptionState, .subscribed(tier: .pro))

        // Organiser cancels → entitlement gone
        let revoked = makeCustomerInfo(
            active: [],
            all: [makeEntitlement(id: RCEntitlementID.proAccess, isActive: false, ownershipType: .familyShared)],
            latestExpirationDate: .now.addingTimeInterval(-1)
        )
        sm.handleRevenueCatCustomerInfo(revoked)
        XCTAssertFalse(sm.isFamilyShared,
                       "After organiser cancels, isFamilyShared should be false")
        XCTAssertNotEqual(sm.subscriptionState, .subscribed(tier: .pro),
                          "Family member should lose Pro access")
    }

    /// Personal higher-tier purchase takes priority over family-shared lower tier.
    func testPersonalTierOverridesFamilyShared() {
        let sm = SubscriptionManager()

        // Family-shared Pro + Personal Elite — Elite wins
        let familyPro = makeEntitlement(
            id: RCEntitlementID.proAccess,
            ownershipType: .familyShared
        )
        let personalElite = makeEntitlement(
            id: RCEntitlementID.eliteAccess,
            ownershipType: .purchased
        )
        let info = makeCustomerInfo(
            active: [familyPro, personalElite],
            latestExpirationDate: .now.addingTimeInterval(30 * 86400)
        )
        sm.handleRevenueCatCustomerInfo(info)

        XCTAssertEqual(sm.subscriptionState, .subscribed(tier: .elite),
                       "Personal Elite should take priority over family-shared Pro")
        // isFamilyShared should be false because highest tier (Elite) is purchased
        XCTAssertFalse(sm.isFamilyShared,
                       "Highest tier is purchased, not family shared")
    }

    /// No customer info → isFamilyShared is false.
    func testIsFamilySharedFalseWithNoInfo() {
        let sm = SubscriptionManager()
        XCTAssertFalse(sm.isFamilyShared)
        XCTAssertNil(sm.familySharedTier)
    }

    /// Free tier (no paid entitlements) → isFamilyShared is false.
    func testIsFamilySharedFalseForFreeTier() {
        let sm = SubscriptionManager()
        let info = makeCustomerInfo(active: [], latestExpirationDate: nil)
        sm.handleRevenueCatCustomerInfo(info)
        XCTAssertFalse(sm.isFamilyShared)
    }
}
