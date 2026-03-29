import Foundation
import os.log

#if DEBUG

// MARK: - Mock Scenario

/// Programmable scenarios for the mock RevenueCat service.
enum MockRCScenario: String, CaseIterable, Identifiable, Sendable {
    case happyPath
    case userCancelled
    case networkError
    case paymentDeclined
    case deferredPurchase
    case alreadySubscribed
    case billingFailure
    case subscriptionExpired
    case refundGranted
    case trialActive
    case familyShared
    case offlineMode
    case slowNetwork

    var id: String { rawValue }

    var displayName: String {
        switch self {
        case .happyPath: "Happy Path"
        case .userCancelled: "User Cancelled"
        case .networkError: "Network Error"
        case .paymentDeclined: "Payment Declined"
        case .deferredPurchase: "Deferred (Ask to Buy)"
        case .alreadySubscribed: "Already Subscribed"
        case .billingFailure: "Billing Failure"
        case .subscriptionExpired: "Subscription Expired"
        case .refundGranted: "Refund Granted"
        case .trialActive: "Trial Active"
        case .familyShared: "Family Shared"
        case .offlineMode: "Offline Mode"
        case .slowNetwork: "Slow Network"
        }
    }

    var description: String {
        switch self {
        case .happyPath: "Purchase succeeds after configurable delay"
        case .userCancelled: "User cancels on the App Store sheet"
        case .networkError: "Purchase fails with a network error"
        case .paymentDeclined: "Purchase fails with a payment error"
        case .deferredPurchase: "Purchase enters Ask to Buy / deferred state"
        case .alreadySubscribed: "User already has the selected entitlement"
        case .billingFailure: "Subscription enters billing retry / grace period"
        case .subscriptionExpired: "Subscription has expired (entitlements removed)"
        case .refundGranted: "Entitlement is revoked (refund simulation)"
        case .trialActive: "Royal trial with configurable days remaining"
        case .familyShared: "Entitlement via Family Sharing"
        case .offlineMode: "All network calls throw; returns cached data only"
        case .slowNetwork: "All operations take 3–5 seconds"
        }
    }

    var iconName: String {
        switch self {
        case .happyPath: "checkmark.circle.fill"
        case .userCancelled: "xmark.circle"
        case .networkError: "wifi.slash"
        case .paymentDeclined: "creditcard.trianglebadge.exclamationmark"
        case .deferredPurchase: "hourglass"
        case .alreadySubscribed: "person.crop.circle.badge.checkmark"
        case .billingFailure: "exclamationmark.triangle"
        case .subscriptionExpired: "clock.badge.exclamationmark"
        case .refundGranted: "arrow.uturn.backward.circle"
        case .trialActive: "star.circle"
        case .familyShared: "person.2.circle"
        case .offlineMode: "airplane"
        case .slowNetwork: "tortoise"
        }
    }
}

// MARK: - Event Log Entry

/// A single operation logged by the mock service.
struct MockRCEventLogEntry: Identifiable, Sendable {
    let id: UUID
    let timestamp: Date
    let operation: String
    let result: String
    let details: String

    init(operation: String, result: String, details: String = "") {
        self.id = UUID()
        self.timestamp = .now
        self.operation = operation
        self.result = result
        self.details = details
    }

    var isSuccess: Bool { result.contains("success") || result.contains("ok") }
    var isError: Bool { result.contains("error") || result.contains("fail") || result.contains("declined") }
    var isCancelled: Bool { result.contains("cancel") }
}

// MARK: - Quick State Presets

enum MockRCPreset: String, CaseIterable, Identifiable, Sendable {
    case freshFreeUser
    case proSubscriber
    case eliteSubscriber
    case royalSubscriber
    case trialDay1
    case trialExpiring
    case trialExpired
    case gracePeriod
    case billingRetry
    case expiredLapsed
    case refunded
    case familySharedPro

    var id: String { rawValue }

    var displayName: String {
        switch self {
        case .freshFreeUser: "Fresh Free User"
        case .proSubscriber: "Pro Subscriber"
        case .eliteSubscriber: "Elite Subscriber"
        case .royalSubscriber: "Royal Subscriber"
        case .trialDay1: "Trial User (Day 1)"
        case .trialExpiring: "Trial User (Expiring)"
        case .trialExpired: "Trial Expired"
        case .gracePeriod: "Grace Period"
        case .billingRetry: "Billing Retry"
        case .expiredLapsed: "Expired (Lapsed)"
        case .refunded: "Refunded"
        case .familySharedPro: "Family Shared (Pro)"
        }
    }

    var tier: MembershipTier {
        switch self {
        case .freshFreeUser, .trialExpired, .expiredLapsed, .refunded: .free
        case .proSubscriber, .gracePeriod, .billingRetry, .familySharedPro: .pro
        case .eliteSubscriber: .elite
        case .royalSubscriber: .royal
        case .trialDay1, .trialExpiring: .trial
        }
    }

    var iconName: String {
        switch self {
        case .freshFreeUser: "person.circle"
        case .proSubscriber: "star.fill"
        case .eliteSubscriber: "star.circle.fill"
        case .royalSubscriber: "crown.fill"
        case .trialDay1: "clock.fill"
        case .trialExpiring: "clock.badge.exclamationmark.fill"
        case .trialExpired: "clock.badge.xmark"
        case .gracePeriod: "exclamationmark.shield.fill"
        case .billingRetry: "creditcard.trianglebadge.exclamationmark.fill"
        case .expiredLapsed: "xmark.circle.fill"
        case .refunded: "arrow.uturn.backward.circle.fill"
        case .familySharedPro: "person.2.fill"
        }
    }
}

// MARK: - Mock RevenueCat Service

/// Fully-featured mock RevenueCat service for development and QA testing.
/// Simulates all purchase flows, entitlement changes, billing failures, and lifecycle events
/// without any network calls or RevenueCat SDK dependency.
///
/// Follows the same pattern as `MockAuthService` in `AuthService.swift`.
@Observable
final class MockRevenueCatService: RevenueCatServiceProtocol, @unchecked Sendable {

    private let logger = Logger(subsystem: "com.lumenlingo", category: "MockRevenueCat")

    // MARK: - Configuration State

    private(set) var isConfigured: Bool = false

    // MARK: - Identity State

    private(set) var currentAppUserID: String = "$RCAnonymousID:mock_\(UUID().uuidString.prefix(8))"
    private(set) var isAnonymous: Bool = true

    // MARK: - Offerings

    private(set) var currentOffering: RCOffering?
    private var offerings: RCOfferings = .empty

    // MARK: - Customer Info

    private(set) var cachedCustomerInfo: RCCustomerInfo?

    // MARK: - Customer Info Stream

    private var customerInfoContinuation: AsyncStream<RCCustomerInfo>.Continuation?
    private(set) var customerInfoStream: AsyncStream<RCCustomerInfo> = AsyncStream { _ in }

    // MARK: - Diagnostics

    let sdkVersion: String = "5.0.0-mock"
    let isSandbox: Bool = true

    // MARK: - Mock Controls (QA Panel)

    /// The scenario to apply on the NEXT purchase call.
    var nextPurchaseScenario: MockRCScenario = .happyPath

    /// Simulated delay for purchase operations (seconds).
    var purchaseDelay: TimeInterval = 0.0

    /// Simulated delay for all operations (seconds).
    var globalLatency: TimeInterval = 0.0

    /// Whether "RevenueCat offline" mode is active.
    var isOffline: Bool = false

    /// Whether to force empty offerings.
    var forceEmptyOfferings: Bool = false

    /// Whether to force offering fetch error.
    var forceOfferingsError: Bool = false

    /// Whether to force trial ineligibility.
    var forceTrialIneligible: Bool = false

    /// The current offering ID.
    var currentOfferingID: String = "default"

    /// Trial days remaining (for trial presets).
    var trialDaysRemaining: Int = 14

    /// In-memory subscriber attributes.
    private(set) var subscriberAttributes: [String: String] = [:]

    /// Event log for debugging.
    private(set) var eventLog: [MockRCEventLogEntry] = []

    /// Maximum event log entries.
    private let maxLogEntries = 50

    // MARK: - Init

    init() {
        let (stream, continuation) = AsyncStream<RCCustomerInfo>.makeStream()
        self.customerInfoStream = stream
        self.customerInfoContinuation = continuation
        offerings = Self.buildDefaultOfferings()
        currentOffering = offerings.current
        cachedCustomerInfo = .anonymous(userID: currentAppUserID)
    }

    // MARK: - RevenueCatServiceProtocol Implementation

    func configure(apiKey: String, appUserID: String?) async {
        await simulateLatency()
        isConfigured = true
        if let userID = appUserID {
            currentAppUserID = userID
            isAnonymous = false
        }
        log(operation: "configure", result: "success", details: "apiKey=\(String(apiKey.prefix(10)))..., userID=\(appUserID ?? "nil")")
        logger.info("MockRevenueCat configured (apiKey: \(String(apiKey.prefix(10)))...)")
    }

    func logIn(userID: String) async throws -> RCCustomerInfo {
        try throwIfOffline()
        await simulateLatency()

        currentAppUserID = userID
        isAnonymous = false

        // Keep existing entitlements on login
        let info = cachedCustomerInfo.map {
            RCCustomerInfo(
                originalAppUserId: userID,
                activeEntitlements: $0.activeEntitlements,
                allEntitlements: $0.allEntitlements,
                activeSubscriptions: $0.activeSubscriptions,
                allPurchasedProductIdentifiers: $0.allPurchasedProductIdentifiers,
                latestExpirationDate: $0.latestExpirationDate,
                firstSeenDate: $0.firstSeenDate,
                requestDate: .now,
                managementURL: $0.managementURL
            )
        } ?? .anonymous(userID: userID)

        updateCustomerInfo(info)
        log(operation: "logIn(\(userID))", result: "success")
        return info
    }

    func logOut() async throws -> RCCustomerInfo {
        try throwIfOffline()
        await simulateLatency()

        let newAnonID = "$RCAnonymousID:mock_\(UUID().uuidString.prefix(8))"
        currentAppUserID = newAnonID
        isAnonymous = true
        subscriberAttributes.removeAll()

        let info = RCCustomerInfo.anonymous(userID: newAnonID)
        updateCustomerInfo(info)
        log(operation: "logOut", result: "success", details: "newAnonID=\(newAnonID)")
        return info
    }

    func getOfferings() async throws -> RCOfferings {
        try throwIfOffline()
        await simulateLatency()

        if forceOfferingsError {
            log(operation: "getOfferings", result: "error", details: "forced error")
            throw RCError.storeProblem
        }

        if forceEmptyOfferings {
            log(operation: "getOfferings", result: "success", details: "empty (forced)")
            return .empty
        }

        offerings = Self.buildDefaultOfferings(offeringID: currentOfferingID)
        currentOffering = offerings.current
        log(operation: "getOfferings", result: "success", details: "\(offerings.current?.packages.count ?? 0) packages")
        return offerings
    }

    func checkTrialEligibility(productIdentifiers: [String]) async -> [String: Bool] {
        var result: [String: Bool] = [:]
        for id in productIdentifiers {
            result[id] = !forceTrialIneligible
        }
        log(operation: "checkTrialEligibility", result: "success", details: "\(productIdentifiers.count) products, eligible=\(!forceTrialIneligible)")
        return result
    }

    func purchase(package: RCPackage) async throws -> RCPurchaseResult {
        try throwIfOffline()

        // Apply scenario-specific delay
        let delay = nextPurchaseScenario == .slowNetwork
            ? TimeInterval.random(in: 3...5)
            : purchaseDelay
        if delay > 0 {
            try await Task.sleep(for: .seconds(delay))
        }

        let scenario = nextPurchaseScenario

        switch scenario {
        case .happyPath:
            let info = buildCustomerInfo(for: package.tier, periodType: .normal)
            updateCustomerInfo(info)
            log(operation: "purchase(\(package.tier))", result: "success")
            return RCPurchaseResult(
                customerInfo: info,
                userCancelled: false,
                transactionIdentifier: "mock_txn_\(UUID().uuidString.prefix(8))"
            )

        case .userCancelled:
            log(operation: "purchase(\(package.tier))", result: "cancelled")
            return RCPurchaseResult(
                customerInfo: cachedCustomerInfo ?? .anonymous(userID: currentAppUserID),
                userCancelled: true,
                transactionIdentifier: nil
            )

        case .networkError:
            log(operation: "purchase(\(package.tier))", result: "error: network")
            throw RCError.networkError

        case .paymentDeclined:
            log(operation: "purchase(\(package.tier))", result: "error: payment declined")
            throw RCError.paymentDeclined

        case .deferredPurchase:
            log(operation: "purchase(\(package.tier))", result: "deferred")
            throw RCError.deferredPurchase

        case .alreadySubscribed:
            let info = cachedCustomerInfo ?? .anonymous(userID: currentAppUserID)
            log(operation: "purchase(\(package.tier))", result: "already subscribed")
            return RCPurchaseResult(
                customerInfo: info,
                userCancelled: false,
                transactionIdentifier: nil
            )

        case .billingFailure:
            let info = buildCustomerInfo(for: package.tier, periodType: .normal, billingIssue: true)
            updateCustomerInfo(info)
            log(operation: "purchase(\(package.tier))", result: "success (billing issue pending)")
            return RCPurchaseResult(
                customerInfo: info,
                userCancelled: false,
                transactionIdentifier: "mock_txn_\(UUID().uuidString.prefix(8))"
            )

        case .subscriptionExpired:
            let info = buildExpiredCustomerInfo()
            updateCustomerInfo(info)
            log(operation: "purchase(\(package.tier))", result: "expired")
            return RCPurchaseResult(customerInfo: info, userCancelled: false, transactionIdentifier: nil)

        case .refundGranted:
            let info = buildExpiredCustomerInfo()
            updateCustomerInfo(info)
            log(operation: "purchase(\(package.tier))", result: "refunded")
            return RCPurchaseResult(customerInfo: info, userCancelled: false, transactionIdentifier: nil)

        case .trialActive:
            let info = buildCustomerInfo(for: .royal, periodType: .trial, trialDays: trialDaysRemaining)
            updateCustomerInfo(info)
            log(operation: "purchase(\(package.tier))", result: "success (trial)")
            return RCPurchaseResult(
                customerInfo: info,
                userCancelled: false,
                transactionIdentifier: "mock_txn_\(UUID().uuidString.prefix(8))"
            )

        case .familyShared:
            let info = buildCustomerInfo(for: package.tier, periodType: .normal, ownershipType: .familyShared)
            updateCustomerInfo(info)
            log(operation: "purchase(\(package.tier))", result: "success (family shared)")
            return RCPurchaseResult(
                customerInfo: info,
                userCancelled: false,
                transactionIdentifier: "mock_txn_\(UUID().uuidString.prefix(8))"
            )

        case .offlineMode:
            log(operation: "purchase(\(package.tier))", result: "error: offline")
            throw RCError.offlineMode

        case .slowNetwork:
            // Delay already applied above
            let info = buildCustomerInfo(for: package.tier, periodType: .normal)
            updateCustomerInfo(info)
            log(operation: "purchase(\(package.tier))", result: "success (slow)")
            return RCPurchaseResult(
                customerInfo: info,
                userCancelled: false,
                transactionIdentifier: "mock_txn_\(UUID().uuidString.prefix(8))"
            )
        }
    }

    func purchase(package: RCPackage, promotionalOffer: RCSignedPromoOffer) async throws -> RCPurchaseResult {
        // In mock, purchase with promo follows the same flow as a normal purchase
        log(operation: "purchaseWithPromo(\(package.tier), offer=\(promotionalOffer.offerIdentifier))", result: "routing to purchase")
        return try await purchase(package: package)
    }

    func getPromotionalOffer(offerIdentifier: String, package: RCPackage) async throws -> RCSignedPromoOffer {
        try throwIfOffline()
        await simulateLatency()
        let offer = RCSignedPromoOffer(
            offerIdentifier: offerIdentifier,
            keyIdentifier: "mock_key_id",
            nonce: UUID(),
            signature: "mock_signature_\(offerIdentifier)",
            timestamp: Int(Date.now.timeIntervalSince1970)
        )
        log(operation: "getPromotionalOffer(\(offerIdentifier))", result: "success")
        return offer
    }

    func restorePurchases() async throws -> RCCustomerInfo {
        try throwIfOffline()
        await simulateLatency()

        let info = cachedCustomerInfo ?? .anonymous(userID: currentAppUserID)
        log(operation: "restorePurchases", result: "success", details: "entitlements=\(info.activeEntitlements.count)")
        return info
    }

    func getCustomerInfo() async throws -> RCCustomerInfo {
        try throwIfOffline()
        await simulateLatency()

        let info = cachedCustomerInfo ?? .anonymous(userID: currentAppUserID)
        log(operation: "getCustomerInfo", result: "success")
        return info
    }

    func syncPurchases() async throws -> RCCustomerInfo {
        try throwIfOffline()
        await simulateLatency()

        let info = cachedCustomerInfo ?? .anonymous(userID: currentAppUserID)
        log(operation: "syncPurchases", result: "success")
        return info
    }

    func showManageSubscriptions() async throws {
        log(operation: "showManageSubscriptions", result: "ok (no-op in mock)")
    }

    func presentCodeRedemptionSheet() {
        log(operation: "presentCodeRedemptionSheet", result: "ok (no-op in mock)")
    }

    func setAttributes(_ attributes: [String: String]) {
        subscriberAttributes.merge(attributes) { _, new in new }
        log(operation: "setAttributes", result: "success", details: attributes.map { "\($0.key)=\($0.value)" }.joined(separator: ", "))
    }

    func collectDeviceIdentifiers() {
        log(operation: "collectDeviceIdentifiers", result: "ok (no-op in mock)")
    }

    func enableAdServicesAttributionTokenCollection() {
        log(operation: "enableAdServicesAttributionTokenCollection", result: "ok (no-op in mock)")
    }

    // MARK: - Mock Controls (called by QA Panel)

    /// Apply a quick state preset.
    func applyPreset(_ preset: MockRCPreset) {
        let info: RCCustomerInfo

        switch preset {
        case .freshFreeUser:
            info = .anonymous(userID: currentAppUserID)

        case .proSubscriber:
            info = buildCustomerInfo(for: .pro, periodType: .normal, renewsInDays: 25)

        case .eliteSubscriber:
            info = buildCustomerInfo(for: .elite, periodType: .normal, renewsInDays: 15)

        case .royalSubscriber:
            info = buildCustomerInfo(for: .royal, periodType: .normal, renewsInDays: 20)

        case .trialDay1:
            info = buildCustomerInfo(for: .royal, periodType: .trial, trialDays: 13)

        case .trialExpiring:
            info = buildCustomerInfo(for: .royal, periodType: .trial, trialDays: 1)

        case .trialExpired:
            info = buildExpiredCustomerInfo()

        case .gracePeriod:
            info = buildCustomerInfo(for: .pro, periodType: .normal, billingIssue: true, billingIssueDaysAgo: 2)

        case .billingRetry:
            info = buildCustomerInfo(for: .pro, periodType: .normal, billingIssue: true, billingIssueDaysAgo: 10)

        case .expiredLapsed:
            info = buildExpiredCustomerInfo()

        case .refunded:
            info = buildExpiredCustomerInfo()

        case .familySharedPro:
            info = buildCustomerInfo(for: .pro, periodType: .normal, ownershipType: .familyShared)
        }

        updateCustomerInfo(info)
        log(operation: "applyPreset", result: "success", details: preset.displayName)
        logger.info("Applied preset: \(preset.displayName)")
    }

    /// Simulate a subscription renewal.
    func simulateRenewal() {
        guard let current = cachedCustomerInfo else { return }
        let tier = current.highestActiveTier
        guard tier != .free else { return }

        let info = buildCustomerInfo(for: tier, periodType: .normal, renewsInDays: 30)
        updateCustomerInfo(info)
        log(operation: "simulateRenewal", result: "success", details: "tier=\(tier)")
    }

    /// Simulate a billing failure.
    func simulateBillingFailure() {
        guard let current = cachedCustomerInfo else { return }
        let tier = current.highestActiveTier
        guard tier != .free else { return }

        let info = buildCustomerInfo(for: tier, periodType: .normal, billingIssue: true)
        updateCustomerInfo(info)
        log(operation: "simulateBillingFailure", result: "success", details: "tier=\(tier)")
    }

    /// Simulate subscription expiry.
    func simulateExpiry() {
        let info = buildExpiredCustomerInfo()
        updateCustomerInfo(info)
        log(operation: "simulateExpiry", result: "success")
    }

    /// Simulate a refund.
    func simulateRefund() {
        let info = buildExpiredCustomerInfo()
        updateCustomerInfo(info)
        log(operation: "simulateRefund", result: "success")
    }

    /// Simulate an upgrade to a specific tier.
    func simulateUpgrade(to tier: MembershipTier) {
        let info = buildCustomerInfo(for: tier, periodType: .normal)
        updateCustomerInfo(info)
        log(operation: "simulateUpgrade", result: "success", details: "tier=\(tier)")
    }

    /// Simulate a downgrade (takes effect at "renewal").
    func simulateDowngrade(to tier: MembershipTier) {
        // For the mock, we apply it immediately
        let info = buildCustomerInfo(for: tier, periodType: .normal)
        updateCustomerInfo(info)
        log(operation: "simulateDowngrade", result: "success", details: "tier=\(tier)")
    }

    /// Clear the event log.
    func clearEventLog() {
        eventLog.removeAll()
    }

    /// Get a formatted event log string for clipboard.
    func formattedEventLog() -> String {
        let formatter = DateFormatter()
        formatter.dateFormat = "HH:mm:ss.SSS"
        return eventLog.map { entry in
            "[\(formatter.string(from: entry.timestamp))] \(entry.operation) → \(entry.result)" +
            (entry.details.isEmpty ? "" : " (\(entry.details))")
        }.joined(separator: "\n")
    }

    // MARK: - Internal Helpers

    private func updateCustomerInfo(_ info: RCCustomerInfo) {
        cachedCustomerInfo = info
        customerInfoContinuation?.yield(info)
    }

    private func simulateLatency() async {
        guard globalLatency > 0 else { return }
        try? await Task.sleep(for: .seconds(globalLatency))
    }

    private func throwIfOffline() throws {
        if isOffline {
            throw RCError.offlineMode
        }
    }

    private func log(operation: String, result: String, details: String = "") {
        let entry = MockRCEventLogEntry(operation: operation, result: result, details: details)
        eventLog.insert(entry, at: 0)
        if eventLog.count > maxLogEntries {
            eventLog.removeLast(eventLog.count - maxLogEntries)
        }
        logger.debug("[\(operation)] → \(result)\(details.isEmpty ? "" : " (\(details))")")
    }

    // MARK: - Customer Info Builders

    private func buildCustomerInfo(
        for tier: MembershipTier,
        periodType: RCEntitlement.RCPeriodType,
        renewsInDays: Int = 30,
        trialDays: Int = 14,
        billingIssue: Bool = false,
        billingIssueDaysAgo: Int = 0,
        ownershipType: RCEntitlement.RCOwnershipType = .purchased
    ) -> RCCustomerInfo {
        let entitlementIDs = RCEntitlementID.entitlements(for: tier)
        let now = Date.now

        let expirationDate: Date
        if periodType == .trial {
            expirationDate = now.addingTimeInterval(TimeInterval(trialDays * 86400))
        } else {
            expirationDate = now.addingTimeInterval(TimeInterval(renewsInDays * 86400))
        }

        let billingIssueDate: Date? = billingIssue
            ? now.addingTimeInterval(-TimeInterval(billingIssueDaysAgo * 86400))
            : nil

        var activeEntitlements: [String: RCEntitlement] = [:]
        var activeSubscriptions: Set<String> = []

        for entitlementID in entitlementIDs {
            let productID: String
            switch entitlementID {
            case RCEntitlementID.proAccess:
                productID = SubscriptionProductID.proMonthly
            case RCEntitlementID.eliteAccess:
                productID = SubscriptionProductID.eliteMonthly
            case RCEntitlementID.royalAccess:
                productID = SubscriptionProductID.royalMonthly
            default:
                continue
            }

            activeEntitlements[entitlementID] = RCEntitlement(
                id: entitlementID,
                isActive: true,
                willRenew: !billingIssue && periodType != .trial,
                periodType: periodType,
                latestPurchaseDate: now.addingTimeInterval(-86400),
                originalPurchaseDate: now.addingTimeInterval(-86400 * 30),
                expirationDate: expirationDate,
                productIdentifier: productID,
                isSandbox: true,
                ownershipType: ownershipType,
                billingIssueDetectedAt: billingIssueDate
            )
            activeSubscriptions.insert(productID)
        }

        return RCCustomerInfo(
            originalAppUserId: currentAppUserID,
            activeEntitlements: activeEntitlements,
            allEntitlements: activeEntitlements,
            activeSubscriptions: activeSubscriptions,
            allPurchasedProductIdentifiers: activeSubscriptions,
            latestExpirationDate: expirationDate,
            firstSeenDate: now.addingTimeInterval(-86400 * 30),
            requestDate: now,
            managementURL: URL(string: "https://apps.apple.com/account/subscriptions")
        )
    }

    private func buildExpiredCustomerInfo() -> RCCustomerInfo {
        RCCustomerInfo(
            originalAppUserId: currentAppUserID,
            activeEntitlements: [:],
            allEntitlements: [:],
            activeSubscriptions: [],
            allPurchasedProductIdentifiers: [],
            latestExpirationDate: Date.now.addingTimeInterval(-86400 * 7),
            firstSeenDate: Date.now.addingTimeInterval(-86400 * 60),
            requestDate: .now,
            managementURL: URL(string: "https://apps.apple.com/account/subscriptions")
        )
    }

    // MARK: - Default Offerings Builder

    static func buildDefaultOfferings(offeringID: String = "default") -> RCOfferings {
        let proPackage = RCPackage(
            id: "$rc_monthly",
            productIdentifier: SubscriptionProductID.proMonthly,
            localizedPriceString: "£9.99",
            localizedTitle: "Pro Monthly",
            localizedDescription: "Unlock Pro features — expanded language pairs, soundscapes, and unlimited practice.",
            price: 9.99,
            currencyCode: "GBP",
            tier: .pro,
            packageType: .monthly,
            introOffer: RCPackage.RCIntroOffer(
                priceString: "Free",
                period: "7 days",
                periodUnit: .day,
                periodValue: 7,
                paymentMode: .freeTrial
            )
        )

        let elitePackage = RCPackage(
            id: "$rc_monthly_elite",
            productIdentifier: SubscriptionProductID.eliteMonthly,
            localizedPriceString: "£19.99",
            localizedTitle: "Elite Monthly",
            localizedDescription: "Everything in Pro plus breathing orbs, quantum flow, and nebula drift.",
            price: 19.99,
            currencyCode: "GBP",
            tier: .elite,
            packageType: .monthly,
            introOffer: nil
        )

        let royalPackage = RCPackage(
            id: "$rc_monthly_royal",
            productIdentifier: SubscriptionProductID.royalMonthly,
            localizedPriceString: "£99.99",
            localizedTitle: "Royal Monthly",
            localizedDescription: "The ultimate LumenLingo experience — everything unlocked, offline mode included.",
            price: 99.99,
            currencyCode: "GBP",
            tier: .royal,
            packageType: .monthly,
            introOffer: RCPackage.RCIntroOffer(
                priceString: "Free",
                period: "14 days",
                periodUnit: .day,
                periodValue: 14,
                paymentMode: .freeTrial
            )
        )

        let offering = RCOffering(
            id: offeringID,
            displayName: "Default Offering",
            packages: [proPackage, elitePackage, royalPackage],
            metadata: [
                "paywall_headline": "Invest in Your Language Mastery",
                "paywall_subtitle": "Join thousands mastering new languages"
            ]
        )

        return RCOfferings(
            current: offering,
            all: [offeringID: offering]
        )
    }
}

#endif
