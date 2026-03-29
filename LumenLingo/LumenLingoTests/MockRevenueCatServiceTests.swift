import XCTest
@testable import LumenLingo

/// Tests for MockRevenueCatService — verifies all 13 scenarios, state management,
/// event logging, presets, and lifecycle operations.
@MainActor
final class MockRevenueCatServiceTests: XCTestCase {

    private var sut: MockRevenueCatService!

    override func setUp() {
        super.setUp()
        sut = MockRevenueCatService()
    }

    override func tearDown() {
        sut = nil
        super.tearDown()
    }

    // MARK: - Configuration

    func testConfigureSetsIsConfigured() async {
        XCTAssertFalse(sut.isConfigured)
        await sut.configure(apiKey: "test_key", appUserID: nil)
        XCTAssertTrue(sut.isConfigured)
    }

    func testConfigureWithUserIDSetsIdentity() async {
        await sut.configure(apiKey: "test_key", appUserID: "clerk_user_123")
        XCTAssertEqual(sut.currentAppUserID, "clerk_user_123")
        XCTAssertFalse(sut.isAnonymous)
    }

    func testConfigureWithoutUserIDKeepsAnonymous() async {
        await sut.configure(apiKey: "test_key", appUserID: nil)
        XCTAssertTrue(sut.isAnonymous)
        XCTAssertTrue(sut.currentAppUserID.hasPrefix("$RCAnonymousID:"))
    }

    // MARK: - Identity

    func testLogInChangesUserID() async throws {
        let info = try await sut.logIn(userID: "clerk_user_456")
        XCTAssertEqual(sut.currentAppUserID, "clerk_user_456")
        XCTAssertFalse(sut.isAnonymous)
        XCTAssertEqual(info.originalAppUserId, "clerk_user_456")
    }

    func testLogOutResetsToAnonymous() async throws {
        _ = try await sut.logIn(userID: "clerk_user_789")
        let info = try await sut.logOut()
        XCTAssertTrue(sut.isAnonymous)
        XCTAssertTrue(sut.currentAppUserID.hasPrefix("$RCAnonymousID:"))
        XCTAssertTrue(info.activeEntitlements.isEmpty)
    }

    // MARK: - Offerings

    func testGetOfferingsReturnsThreePackages() async throws {
        let offerings = try await sut.getOfferings()
        XCTAssertNotNil(offerings.current)
        XCTAssertEqual(offerings.current?.packages.count, 3)

        let tiers = Set(offerings.current!.packages.map(\.tier))
        XCTAssertTrue(tiers.contains(.pro))
        XCTAssertTrue(tiers.contains(.elite))
        XCTAssertTrue(tiers.contains(.royal))
    }

    func testGetOfferingsWhenForcedEmptyReturnsNil() async throws {
        sut.forceEmptyOfferings = true
        let offerings = try await sut.getOfferings()
        XCTAssertNil(offerings.current)
    }

    func testGetOfferingsWhenForcedErrorThrows() async {
        sut.forceOfferingsError = true
        do {
            _ = try await sut.getOfferings()
            XCTFail("Expected error")
        } catch {
            XCTAssertEqual(error as? RCError, .storeProblem)
        }
    }

    // MARK: - Purchase: Happy Path

    func testPurchaseHappyPathSucceeds() async throws {
        sut.nextPurchaseScenario = .happyPath
        sut.purchaseDelay = 0.01

        let offerings = try await sut.getOfferings()
        let proPackage = offerings.current!.packages.first { $0.tier == .pro }!

        let result = try await sut.purchase(package: proPackage)
        XCTAssertFalse(result.userCancelled)
        XCTAssertNotNil(result.transactionIdentifier)
        XCTAssertTrue(result.customerInfo.hasActiveEntitlement(RCEntitlementID.proAccess))
        XCTAssertEqual(sut.cachedCustomerInfo?.highestActiveTier, .pro)
    }

    // MARK: - Purchase: User Cancelled

    func testPurchaseUserCancelledReturnsCancelFlag() async throws {
        sut.nextPurchaseScenario = .userCancelled
        sut.purchaseDelay = 0.01

        let offerings = try await sut.getOfferings()
        let proPackage = offerings.current!.packages.first { $0.tier == .pro }!

        let result = try await sut.purchase(package: proPackage)
        XCTAssertTrue(result.userCancelled)
        XCTAssertNil(result.transactionIdentifier)
    }

    // MARK: - Purchase: Network Error

    func testPurchaseNetworkErrorThrows() async throws {
        sut.nextPurchaseScenario = .networkError
        sut.purchaseDelay = 0.01

        let offerings = try await sut.getOfferings()
        let proPackage = offerings.current!.packages.first { $0.tier == .pro }!

        do {
            _ = try await sut.purchase(package: proPackage)
            XCTFail("Expected RCError.networkError")
        } catch {
            XCTAssertEqual(error as? RCError, .networkError)
        }
    }

    // MARK: - Purchase: Payment Declined

    func testPurchasePaymentDeclinedThrows() async throws {
        sut.nextPurchaseScenario = .paymentDeclined
        sut.purchaseDelay = 0.01

        let offerings = try await sut.getOfferings()
        let proPackage = offerings.current!.packages.first { $0.tier == .pro }!

        do {
            _ = try await sut.purchase(package: proPackage)
            XCTFail("Expected RCError.paymentDeclined")
        } catch {
            XCTAssertEqual(error as? RCError, .paymentDeclined)
        }
    }

    // MARK: - Purchase: Deferred

    func testPurchaseDeferredThrows() async throws {
        sut.nextPurchaseScenario = .deferredPurchase
        sut.purchaseDelay = 0.01

        let offerings = try await sut.getOfferings()
        let proPackage = offerings.current!.packages.first { $0.tier == .pro }!

        do {
            _ = try await sut.purchase(package: proPackage)
            XCTFail("Expected RCError.deferredPurchase")
        } catch {
            XCTAssertEqual(error as? RCError, .deferredPurchase)
        }
    }

    // MARK: - Purchase: Billing Failure

    func testPurchaseBillingFailureSetsBillingIssue() async throws {
        sut.nextPurchaseScenario = .billingFailure
        sut.purchaseDelay = 0.01

        let offerings = try await sut.getOfferings()
        let proPackage = offerings.current!.packages.first { $0.tier == .pro }!

        let result = try await sut.purchase(package: proPackage)
        XCTAssertTrue(result.customerInfo.hasBillingIssue)
        XCTAssertNotNil(result.customerInfo.billingIssueDate)
    }

    // MARK: - Purchase: Trial Active

    func testPurchaseTrialActiveSetsTrialPeriod() async throws {
        sut.nextPurchaseScenario = .trialActive
        sut.trialDaysRemaining = 10
        sut.purchaseDelay = 0.01

        let offerings = try await sut.getOfferings()
        let royalPackage = offerings.current!.packages.first { $0.tier == .royal }!

        let result = try await sut.purchase(package: royalPackage)
        XCTAssertTrue(result.customerInfo.isTrialActive)
        XCTAssertTrue(result.customerInfo.hasActiveEntitlement(RCEntitlementID.royalAccess))
    }

    // MARK: - Purchase: Family Shared

    func testPurchaseFamilySharedSetsOwnership() async throws {
        sut.nextPurchaseScenario = .familyShared
        sut.purchaseDelay = 0.01

        let offerings = try await sut.getOfferings()
        let proPackage = offerings.current!.packages.first { $0.tier == .pro }!

        let result = try await sut.purchase(package: proPackage)
        let entitlement = result.customerInfo.activeEntitlements[RCEntitlementID.proAccess]
        XCTAssertEqual(entitlement?.ownershipType, .familyShared)
    }

    // MARK: - Purchase: Offline Mode

    func testPurchaseOfflineModeThrows() async throws {
        sut.nextPurchaseScenario = .offlineMode
        sut.purchaseDelay = 0.01

        let offerings = try await sut.getOfferings()
        let proPackage = offerings.current!.packages.first { $0.tier == .pro }!

        do {
            _ = try await sut.purchase(package: proPackage)
            XCTFail("Expected RCError.offlineMode")
        } catch {
            XCTAssertEqual(error as? RCError, .offlineMode)
        }
    }

    // MARK: - Offline Mode

    func testOfflineModeBlocksAllNetworkCalls() async {
        sut.isOffline = true

        do {
            _ = try await sut.logIn(userID: "test")
            XCTFail("Expected offline error")
        } catch {
            XCTAssertEqual(error as? RCError, .offlineMode)
        }

        do {
            _ = try await sut.getOfferings()
            XCTFail("Expected offline error")
        } catch {
            XCTAssertEqual(error as? RCError, .offlineMode)
        }

        do {
            _ = try await sut.getCustomerInfo()
            XCTFail("Expected offline error")
        } catch {
            XCTAssertEqual(error as? RCError, .offlineMode)
        }
    }

    // MARK: - Restore Purchases

    func testRestorePurchasesReturnsCachedInfo() async throws {
        // First purchase Pro
        sut.nextPurchaseScenario = .happyPath
        sut.purchaseDelay = 0.01
        let offerings = try await sut.getOfferings()
        let proPackage = offerings.current!.packages.first { $0.tier == .pro }!
        _ = try await sut.purchase(package: proPackage)

        // Now restore
        let restored = try await sut.restorePurchases()
        XCTAssertTrue(restored.hasActiveEntitlement(RCEntitlementID.proAccess))
    }

    // MARK: - Tier Mapping

    func testHighestActiveTierMappingFree() {
        let info = RCCustomerInfo.anonymous()
        XCTAssertEqual(info.highestActiveTier, .free)
    }

    func testHighestActiveTierMappingRoyal() async throws {
        sut.nextPurchaseScenario = .happyPath
        sut.purchaseDelay = 0.01
        let offerings = try await sut.getOfferings()
        let royalPackage = offerings.current!.packages.first { $0.tier == .royal }!
        let result = try await sut.purchase(package: royalPackage)
        XCTAssertEqual(result.customerInfo.highestActiveTier, .royal)
    }

    // MARK: - Presets

    func testApplyPresetFreshFreeUser() {
        sut.applyPreset(.freshFreeUser)
        XCTAssertEqual(sut.cachedCustomerInfo?.highestActiveTier, .free)
        XCTAssertTrue(sut.cachedCustomerInfo?.activeEntitlements.isEmpty ?? false)
    }

    func testApplyPresetProSubscriber() {
        sut.applyPreset(.proSubscriber)
        XCTAssertEqual(sut.cachedCustomerInfo?.highestActiveTier, .pro)
        XCTAssertTrue(sut.cachedCustomerInfo?.hasActiveEntitlement(RCEntitlementID.proAccess) ?? false)
    }

    func testApplyPresetRoyalSubscriber() {
        sut.applyPreset(.royalSubscriber)
        XCTAssertEqual(sut.cachedCustomerInfo?.highestActiveTier, .royal)
        XCTAssertTrue(sut.cachedCustomerInfo?.hasActiveEntitlement(RCEntitlementID.royalAccess) ?? false)
    }

    func testApplyPresetTrialDay1() {
        sut.applyPreset(.trialDay1)
        XCTAssertTrue(sut.cachedCustomerInfo?.isTrialActive ?? false)
    }

    func testApplyPresetGracePeriod() {
        sut.applyPreset(.gracePeriod)
        XCTAssertTrue(sut.cachedCustomerInfo?.hasBillingIssue ?? false)
    }

    func testApplyPresetRefunded() {
        sut.applyPreset(.refunded)
        XCTAssertEqual(sut.cachedCustomerInfo?.highestActiveTier, .free)
        XCTAssertTrue(sut.cachedCustomerInfo?.activeEntitlements.isEmpty ?? false)
    }

    func testApplyPresetFamilySharedPro() {
        sut.applyPreset(.familySharedPro)
        let entitlement = sut.cachedCustomerInfo?.activeEntitlements[RCEntitlementID.proAccess]
        XCTAssertEqual(entitlement?.ownershipType, .familyShared)
    }

    // MARK: - Event Log

    func testEventLogRecordsOperations() async throws {
        sut.clearEventLog()
        XCTAssertTrue(sut.eventLog.isEmpty)

        await sut.configure(apiKey: "test", appUserID: nil)
        XCTAssertEqual(sut.eventLog.count, 1)
        XCTAssertEqual(sut.eventLog.first?.operation, "configure")
    }

    func testEventLogLimitsEntries() async {
        sut.clearEventLog()
        for i in 0..<60 {
            await sut.configure(apiKey: "key_\(i)", appUserID: nil)
        }
        XCTAssertLessThanOrEqual(sut.eventLog.count, 50)
    }

    func testFormattedEventLogReturnsString() async {
        await sut.configure(apiKey: "test", appUserID: nil)
        let formatted = sut.formattedEventLog()
        XCTAssertTrue(formatted.contains("configure"))
    }

    // MARK: - Subscriber Attributes

    func testSetAttributesStoresInMemory() {
        sut.setAttributes(["$email": "test@example.com", "$displayName": "Test User"])
        XCTAssertEqual(sut.subscriberAttributes["$email"], "test@example.com")
        XCTAssertEqual(sut.subscriberAttributes["$displayName"], "Test User")
    }

    func testLogOutClearsAttributes() async throws {
        sut.setAttributes(["$email": "test@example.com"])
        _ = try await sut.logOut()
        XCTAssertTrue(sut.subscriberAttributes.isEmpty)
    }

    // MARK: - Simulate Lifecycle

    func testSimulateExpiry() async throws {
        // First subscribe
        sut.applyPreset(.proSubscriber)
        XCTAssertEqual(sut.cachedCustomerInfo?.highestActiveTier, .pro)

        // Then expire
        sut.simulateExpiry()
        XCTAssertEqual(sut.cachedCustomerInfo?.highestActiveTier, .free)
    }

    func testSimulateRenewal() {
        sut.applyPreset(.proSubscriber)
        sut.simulateRenewal()
        XCTAssertEqual(sut.cachedCustomerInfo?.highestActiveTier, .pro)
        // Expiration date should be in the future
        XCTAssertNotNil(sut.cachedCustomerInfo?.latestExpirationDate)
        XCTAssertGreaterThan(sut.cachedCustomerInfo!.latestExpirationDate!, Date.now)
    }

    func testSimulateBillingFailure() {
        sut.applyPreset(.proSubscriber)
        sut.simulateBillingFailure()
        XCTAssertTrue(sut.cachedCustomerInfo?.hasBillingIssue ?? false)
    }

    func testSimulateUpgrade() {
        sut.applyPreset(.proSubscriber)
        sut.simulateUpgrade(to: .royal)
        XCTAssertEqual(sut.cachedCustomerInfo?.highestActiveTier, .royal)
    }

    // MARK: - RCCustomerInfo Helpers

    func testAnonymousCustomerInfoHasNoEntitlements() {
        let info = RCCustomerInfo.anonymous()
        XCTAssertTrue(info.activeEntitlements.isEmpty)
        XCTAssertEqual(info.highestActiveTier, .free)
        XCTAssertFalse(info.isTrialActive)
        XCTAssertFalse(info.hasBillingIssue)
    }

    func testEntitlementIDsForTier() {
        XCTAssertTrue(RCEntitlementID.entitlements(for: .free).isEmpty)
        XCTAssertEqual(RCEntitlementID.entitlements(for: .pro), [RCEntitlementID.proAccess])
        XCTAssertEqual(RCEntitlementID.entitlements(for: .elite), [RCEntitlementID.proAccess, RCEntitlementID.eliteAccess])
        XCTAssertEqual(RCEntitlementID.entitlements(for: .royal), [RCEntitlementID.proAccess, RCEntitlementID.eliteAccess, RCEntitlementID.royalAccess])
    }
}
