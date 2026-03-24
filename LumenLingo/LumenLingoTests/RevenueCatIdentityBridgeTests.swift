import XCTest
@testable import LumenLingo

/// Tests for RevenueCatIdentityBridge — Story 1.6.
/// Verifies: sign-in links identity, sign-out resets, re-sign-in restores entitlements.
@MainActor
final class RevenueCatIdentityBridgeTests: XCTestCase {

    private var sut: RevenueCatIdentityBridge!
    private var mockRC: MockRevenueCatService!
    private var subscriptionManager: SubscriptionManager!

    override func setUp() {
        super.setUp()
        sut = RevenueCatIdentityBridge()
        mockRC = MockRevenueCatService()
        subscriptionManager = SubscriptionManager()
    }

    override func tearDown() {
        sut.cancelRetry()
        sut = nil
        mockRC = nil
        subscriptionManager = nil
        super.tearDown()
    }

    // MARK: - Sign In

    func testSignInLinksIdentityToRevenueCat() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)

        // Apply Pro subscriber preset so there are entitlements
        mockRC.applyPreset(.proSubscriber)

        let user = AppUser(id: "clerk_user_123", name: "Test User", email: "test@example.com", avatarURL: nil)
        let info = await sut.handleSignIn(
            user: user,
            authProvider: .apple,
            revenueCatService: mockRC,
            subscriptionManager: subscriptionManager
        )

        XCTAssertNotNil(info)
        XCTAssertEqual(mockRC.currentAppUserID, "clerk_user_123")
        XCTAssertFalse(mockRC.isAnonymous)
    }

    func testSignInUpdatesSubscriptionState() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        mockRC.applyPreset(.proSubscriber)

        let user = AppUser(id: "clerk_user_456", name: "Pro User", email: "pro@example.com", avatarURL: nil)
        await sut.handleSignIn(
            user: user,
            authProvider: .google,
            revenueCatService: mockRC,
            subscriptionManager: subscriptionManager
        )

        XCTAssertEqual(subscriptionManager.subscriptionState, .subscribed(tier: .pro))
    }

    func testSignInWhenNotConfiguredReturnsNil() async {
        // Service is NOT configured
        let user = AppUser(id: "clerk_user_789", name: "Test", email: "", avatarURL: nil)
        let info = await sut.handleSignIn(
            user: user,
            authProvider: .email,
            revenueCatService: mockRC,
            subscriptionManager: subscriptionManager
        )

        XCTAssertNil(info)
    }

    // MARK: - Sign Out

    func testSignOutResetsToAnonymous() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        mockRC.applyPreset(.royalSubscriber)

        // First sign in
        let user = AppUser(id: "clerk_user_signout", name: "Royal User", email: "royal@example.com", avatarURL: nil)
        await sut.handleSignIn(
            user: user,
            authProvider: .apple,
            revenueCatService: mockRC,
            subscriptionManager: subscriptionManager
        )
        XCTAssertFalse(mockRC.isAnonymous)

        // Then sign out
        await sut.handleSignOut(
            revenueCatService: mockRC,
            subscriptionManager: subscriptionManager
        )

        XCTAssertTrue(mockRC.isAnonymous)
    }

    func testSignOutDoesNotRevokeSubscription() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        mockRC.applyPreset(.proSubscriber)

        let user = AppUser(id: "clerk_preserve", name: "User", email: "", avatarURL: nil)
        await sut.handleSignIn(
            user: user,
            authProvider: .phone,
            revenueCatService: mockRC,
            subscriptionManager: subscriptionManager
        )
        XCTAssertEqual(subscriptionManager.subscriptionState, .subscribed(tier: .pro))

        // Sign out — state resets but subscription is NOT revoked (it's on the server)
        await sut.handleSignOut(
            revenueCatService: mockRC,
            subscriptionManager: subscriptionManager
        )

        // After sign out, anonymous user has no entitlements
        XCTAssertTrue(mockRC.isAnonymous)
    }

    // MARK: - Re-Sign In Restores Entitlements

    func testReSignInRestoresEntitlements() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        mockRC.applyPreset(.eliteSubscriber)

        let user = AppUser(id: "clerk_restore", name: "Elite User", email: "elite@test.com", avatarURL: nil)

        // Sign in → Elite
        await sut.handleSignIn(
            user: user,
            authProvider: .apple,
            revenueCatService: mockRC,
            subscriptionManager: subscriptionManager
        )
        XCTAssertEqual(subscriptionManager.subscriptionState, .subscribed(tier: .elite))

        // Sign out → anonymous
        await sut.handleSignOut(
            revenueCatService: mockRC,
            subscriptionManager: subscriptionManager
        )
        XCTAssertTrue(mockRC.isAnonymous)

        // Re-apply preset to simulate server restoring entitlements on re-login
        mockRC.applyPreset(.eliteSubscriber)

        // Re-sign in → Elite restored
        let info = await sut.handleSignIn(
            user: user,
            authProvider: .apple,
            revenueCatService: mockRC,
            subscriptionManager: subscriptionManager
        )

        XCTAssertNotNil(info)
        XCTAssertEqual(subscriptionManager.subscriptionState, .subscribed(tier: .elite))
        XCTAssertFalse(mockRC.isAnonymous)
    }

    // MARK: - Error Handling

    func testSignInFailureSchedulesRetry() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)
        mockRC.isOffline = true

        let user = AppUser(id: "clerk_offline", name: "Offline User", email: "", avatarURL: nil)
        let info = await sut.handleSignIn(
            user: user,
            authProvider: .email,
            revenueCatService: mockRC,
            subscriptionManager: subscriptionManager
        )

        XCTAssertNil(info)
        XCTAssertNotNil(sut.lastSyncError)
        // isRetrying is set synchronously before the retry task launches
        XCTAssertTrue(sut.isRetrying)

        // Cancel retry to avoid test hangs
        sut.cancelRetry()
        XCTAssertFalse(sut.isRetrying)
    }

    // MARK: - Full Lifecycle

    func testAnonymousToSignInToSignOutToReSignInPreservesEntitlements() async {
        await mockRC.configure(apiKey: "test_key", appUserID: nil)

        // Start anonymous — no entitlements
        XCTAssertTrue(mockRC.isAnonymous)

        // Sign in with Royal preset
        mockRC.applyPreset(.royalSubscriber)
        let user = AppUser(id: "clerk_lifecycle", name: "Lifecycle User", email: "lifecycle@test.com", avatarURL: nil)

        await sut.handleSignIn(
            user: user,
            authProvider: .apple,
            revenueCatService: mockRC,
            subscriptionManager: subscriptionManager
        )
        XCTAssertEqual(subscriptionManager.subscriptionState, .subscribed(tier: .royal))
        XCTAssertFalse(mockRC.isAnonymous)

        // Sign out
        await sut.handleSignOut(
            revenueCatService: mockRC,
            subscriptionManager: subscriptionManager
        )
        XCTAssertTrue(mockRC.isAnonymous)

        // Re-sign in — reapply preset to simulate server restoration
        mockRC.applyPreset(.royalSubscriber)
        await sut.handleSignIn(
            user: user,
            authProvider: .apple,
            revenueCatService: mockRC,
            subscriptionManager: subscriptionManager
        )

        // Entitlements preserved
        XCTAssertEqual(subscriptionManager.subscriptionState, .subscribed(tier: .royal))
        XCTAssertEqual(mockRC.currentAppUserID, "clerk_lifecycle")
    }
}
