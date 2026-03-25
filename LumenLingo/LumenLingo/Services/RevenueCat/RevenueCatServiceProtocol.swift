import Foundation
import SwiftUI

// MARK: - RevenueCat Service Protocol

/// Protocol abstracting all RevenueCat SDK interactions.
/// Enables mock-first development: `MockRevenueCatService` provides fully local simulation
/// while `RealRevenueCatService` delegates to `Purchases.shared`.
///
/// See ADR-4 (Mock-First RevenueCat Development) in RevenueCat.md.
protocol RevenueCatServiceProtocol: Observable, Sendable {

    // MARK: Configuration

    /// Configure the service with an API key and optional user ID.
    func configure(apiKey: String, appUserID: String?) async

    /// Whether the service has been configured and is ready.
    var isConfigured: Bool { get }

    // MARK: Identity

    /// Log in with a Clerk user ID. Returns the resolved customer info.
    func logIn(userID: String) async throws -> RCCustomerInfo

    /// Log out. Resets to anonymous user. Returns the new anonymous customer info.
    func logOut() async throws -> RCCustomerInfo

    /// The current App User ID (RevenueCat anonymous or Clerk user ID).
    var currentAppUserID: String { get }

    /// Whether the current user is anonymous (not logged in via Clerk).
    var isAnonymous: Bool { get }

    // MARK: Offerings

    /// Fetch available offerings from RevenueCat.
    func getOfferings() async throws -> RCOfferings

    /// The current (default) offering, if loaded.
    var currentOffering: RCOffering? { get }

    /// Check introductory offer eligibility for the given product identifiers.
    /// Returns a dictionary mapping product ID → `true` if eligible for intro/trial.
    func checkTrialEligibility(productIdentifiers: [String]) async -> [String: Bool]

    // MARK: Purchase

    /// Purchase a package. Returns the result including transaction info and whether user cancelled.
    func purchase(package: RCPackage) async throws -> RCPurchaseResult

    /// Purchase a package with a signed promotional offer (Story 3.4).
    func purchase(package: RCPackage, promotionalOffer: RCSignedPromoOffer) async throws -> RCPurchaseResult

    /// Get a signed promotional offer for a given offer identifier and package (Story 3.4).
    func getPromotionalOffer(offerIdentifier: String, package: RCPackage) async throws -> RCSignedPromoOffer

    /// Restore previously completed purchases.
    func restorePurchases() async throws -> RCCustomerInfo

    // MARK: Customer Info

    /// Get the latest customer info from the server (or cache).
    func getCustomerInfo() async throws -> RCCustomerInfo

    /// A stream of customer info updates for reactive observation.
    var customerInfoStream: AsyncStream<RCCustomerInfo> { get }

    /// The most recently cached customer info.
    var cachedCustomerInfo: RCCustomerInfo? { get }

    // MARK: Subscription Management

    /// Show the native App Store manage subscriptions sheet.
    func showManageSubscriptions() async throws

    /// Present the offer code redemption sheet.
    func presentCodeRedemptionSheet()

    // MARK: Attribution

    /// Set subscriber attributes (key-value pairs).
    func setAttributes(_ attributes: [String: String])

    /// Collect device identifiers for attribution.
    func collectDeviceIdentifiers()

    // MARK: Diagnostics

    /// The SDK version string.
    var sdkVersion: String { get }

    /// Whether the environment is sandbox (test) mode.
    var isSandbox: Bool { get }
}

// MARK: - Environment Key

private struct RevenueCatServiceKey: EnvironmentKey {
    // Default is MockRevenueCatService (safe fallback for previews/tests).
    // LumenLingoApp injects the correct implementation at app root:
    //   - DEBUG builds: MockRevenueCatService
    //   - RELEASE builds: RealRevenueCatService
    #if DEBUG
    static let defaultValue: any RevenueCatServiceProtocol = MockRevenueCatService()
    #else
    static let defaultValue: any RevenueCatServiceProtocol = RealRevenueCatService()
    #endif
}

extension EnvironmentValues {
    var revenueCatService: any RevenueCatServiceProtocol {
        get { self[RevenueCatServiceKey.self] }
        set { self[RevenueCatServiceKey.self] = newValue }
    }
}
