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
        subscriptionManager = SubscriptionManager()
        mockRC = MockRevenueCatService()
    }

    override func tearDown() {
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
}
