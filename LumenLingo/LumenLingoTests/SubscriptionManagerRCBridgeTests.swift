import XCTest
@testable import LumenLingo

/// Tests for SubscriptionManager's RevenueCat CustomerInfo → SubscriptionState mapping.
/// Story 1.4: verifies entitlement → tier mapping for all 5 tier states and edge cases.
@MainActor
final class SubscriptionManagerRCBridgeTests: XCTestCase {

    private var sut: SubscriptionManager!

    override func setUp() {
        super.setUp()
        sut = SubscriptionManager()
    }

    override func tearDown() {
        sut = nil
        super.tearDown()
    }

    // MARK: - Helpers

    private func makeEntitlement(
        id: String,
        isActive: Bool = true,
        periodType: RCEntitlement.RCPeriodType = .normal,
        billingIssueDetectedAt: Date? = nil,
        expirationDate: Date? = Date.distantFuture,
        productIdentifier: String = "com.test.product"
    ) -> RCEntitlement {
        RCEntitlement(
            id: id,
            isActive: isActive,
            willRenew: true,
            periodType: periodType,
            latestPurchaseDate: .now,
            originalPurchaseDate: .now,
            expirationDate: expirationDate,
            productIdentifier: productIdentifier,
            isSandbox: true,
            ownershipType: .purchased,
            billingIssueDetectedAt: billingIssueDetectedAt
        )
    }

    private func makeCustomerInfo(
        entitlements: [String: RCEntitlement] = [:],
        latestExpirationDate: Date? = nil,
        activeSubscriptions: Set<String> = []
    ) -> RCCustomerInfo {
        RCCustomerInfo(
            originalAppUserId: "test_user",
            activeEntitlements: entitlements,
            allEntitlements: entitlements,
            activeSubscriptions: activeSubscriptions,
            allPurchasedProductIdentifiers: activeSubscriptions,
            latestExpirationDate: latestExpirationDate,
            firstSeenDate: .now,
            requestDate: .now,
            managementURL: nil
        )
    }

    // MARK: - No Entitlements

    func testNoEntitlementsNeverSubscribedIsNotSubscribed() {
        let info = makeCustomerInfo()
        sut.handleRevenueCatCustomerInfo(info)
        XCTAssertEqual(sut.subscriptionState, .notSubscribed)
    }

    func testNoEntitlementsWithExpiredSubscriptionIsExpired() {
        let info = makeCustomerInfo(latestExpirationDate: Date.distantPast)
        sut.handleRevenueCatCustomerInfo(info)
        XCTAssertEqual(sut.subscriptionState, .expired)
    }

    // MARK: - Pro Tier

    func testProEntitlementMapsToSubscribedPro() {
        let entitlements = [RCEntitlementID.proAccess: makeEntitlement(id: RCEntitlementID.proAccess)]
        let info = makeCustomerInfo(entitlements: entitlements)
        sut.handleRevenueCatCustomerInfo(info)
        XCTAssertEqual(sut.subscriptionState, .subscribed(tier: .pro))
    }

    // MARK: - Elite Tier

    func testEliteEntitlementMapsToSubscribedElite() {
        let entitlements = [
            RCEntitlementID.proAccess: makeEntitlement(id: RCEntitlementID.proAccess),
            RCEntitlementID.eliteAccess: makeEntitlement(id: RCEntitlementID.eliteAccess),
        ]
        let info = makeCustomerInfo(entitlements: entitlements)
        sut.handleRevenueCatCustomerInfo(info)
        XCTAssertEqual(sut.subscriptionState, .subscribed(tier: .elite))
    }

    // MARK: - Royal Tier

    func testRoyalEntitlementMapsToSubscribedRoyal() {
        let entitlements = [
            RCEntitlementID.proAccess: makeEntitlement(id: RCEntitlementID.proAccess),
            RCEntitlementID.eliteAccess: makeEntitlement(id: RCEntitlementID.eliteAccess),
            RCEntitlementID.royalAccess: makeEntitlement(id: RCEntitlementID.royalAccess),
        ]
        let info = makeCustomerInfo(entitlements: entitlements)
        sut.handleRevenueCatCustomerInfo(info)
        XCTAssertEqual(sut.subscriptionState, .subscribed(tier: .royal))
    }

    // MARK: - Trial

    func testTrialEntitlementMapsToSubscribedTrial() {
        let entitlements = [
            RCEntitlementID.royalAccess: makeEntitlement(
                id: RCEntitlementID.royalAccess,
                periodType: .trial
            ),
        ]
        let info = makeCustomerInfo(entitlements: entitlements)
        sut.handleRevenueCatCustomerInfo(info)
        XCTAssertEqual(sut.subscriptionState, .subscribed(tier: .trial))
    }

    // MARK: - Free Tier (via no entitlements)

    func testFreeUserHasNotSubscribedState() {
        let info = makeCustomerInfo()
        sut.handleRevenueCatCustomerInfo(info)
        XCTAssertEqual(sut.subscriptionState, .notSubscribed)
        XCTAssertNil(sut.currentSubscribedTier)
    }

    // MARK: - Multiple Entitlements → Highest Wins

    func testMultipleEntitlementsHighestTierWins() {
        // Pro + Royal → Royal wins
        let entitlements = [
            RCEntitlementID.proAccess: makeEntitlement(id: RCEntitlementID.proAccess),
            RCEntitlementID.royalAccess: makeEntitlement(id: RCEntitlementID.royalAccess),
        ]
        let info = makeCustomerInfo(entitlements: entitlements)
        sut.handleRevenueCatCustomerInfo(info)
        XCTAssertEqual(sut.subscriptionState, .subscribed(tier: .royal))
    }

    // MARK: - Billing Issue → Grace Period

    func testBillingIssueMapsToGracePeriod() {
        let entitlements = [
            RCEntitlementID.proAccess: makeEntitlement(
                id: RCEntitlementID.proAccess,
                billingIssueDetectedAt: .now
            ),
        ]
        let info = makeCustomerInfo(entitlements: entitlements)
        sut.handleRevenueCatCustomerInfo(info)
        XCTAssertEqual(sut.subscriptionState, .inGracePeriod(tier: .pro))
    }

    func testBillingIssueOnRoyalMapsToGracePeriodRoyal() {
        let entitlements = [
            RCEntitlementID.proAccess: makeEntitlement(id: RCEntitlementID.proAccess),
            RCEntitlementID.eliteAccess: makeEntitlement(id: RCEntitlementID.eliteAccess),
            RCEntitlementID.royalAccess: makeEntitlement(
                id: RCEntitlementID.royalAccess,
                billingIssueDetectedAt: .now
            ),
        ]
        let info = makeCustomerInfo(entitlements: entitlements)
        sut.handleRevenueCatCustomerInfo(info)
        XCTAssertEqual(sut.subscriptionState, .inGracePeriod(tier: .royal))
    }

    // MARK: - CustomerInfo Caching

    func testHandleCustomerInfoCachesLatestInfo() {
        XCTAssertNil(sut.latestCustomerInfo)
        let info = makeCustomerInfo()
        sut.handleRevenueCatCustomerInfo(info)
        XCTAssertNotNil(sut.latestCustomerInfo)
        XCTAssertEqual(sut.latestCustomerInfo?.originalAppUserId, "test_user")
    }

    // MARK: - State Transitions

    func testTransitionFromSubscribedToExpired() {
        // First: subscribed
        let proEntitlements = [RCEntitlementID.proAccess: makeEntitlement(id: RCEntitlementID.proAccess)]
        sut.handleRevenueCatCustomerInfo(makeCustomerInfo(entitlements: proEntitlements))
        XCTAssertEqual(sut.subscriptionState, .subscribed(tier: .pro))

        // Then: expired (no active entitlements, has expiration date)
        sut.handleRevenueCatCustomerInfo(makeCustomerInfo(latestExpirationDate: Date.distantPast))
        XCTAssertEqual(sut.subscriptionState, .expired)
    }

    func testTransitionFromExpiredToSubscribed() {
        // First: expired
        sut.handleRevenueCatCustomerInfo(makeCustomerInfo(latestExpirationDate: Date.distantPast))
        XCTAssertEqual(sut.subscriptionState, .expired)

        // Then: resubscribed
        let eliteEntitlements = [
            RCEntitlementID.proAccess: makeEntitlement(id: RCEntitlementID.proAccess),
            RCEntitlementID.eliteAccess: makeEntitlement(id: RCEntitlementID.eliteAccess),
        ]
        sut.handleRevenueCatCustomerInfo(makeCustomerInfo(entitlements: eliteEntitlements))
        XCTAssertEqual(sut.subscriptionState, .subscribed(tier: .elite))
    }

    func testUpgradeTransition() {
        // Start at Pro
        let proEntitlements = [RCEntitlementID.proAccess: makeEntitlement(id: RCEntitlementID.proAccess)]
        sut.handleRevenueCatCustomerInfo(makeCustomerInfo(entitlements: proEntitlements))
        XCTAssertEqual(sut.subscriptionState, .subscribed(tier: .pro))

        // Upgrade to Royal
        let royalEntitlements = [
            RCEntitlementID.proAccess: makeEntitlement(id: RCEntitlementID.proAccess),
            RCEntitlementID.eliteAccess: makeEntitlement(id: RCEntitlementID.eliteAccess),
            RCEntitlementID.royalAccess: makeEntitlement(id: RCEntitlementID.royalAccess),
        ]
        sut.handleRevenueCatCustomerInfo(makeCustomerInfo(entitlements: royalEntitlements))
        XCTAssertEqual(sut.subscriptionState, .subscribed(tier: .royal))
    }
}
