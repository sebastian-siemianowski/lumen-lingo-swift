import Foundation

// MARK: - RevenueCat Mirror Types
//
// Lightweight value types that mirror RevenueCat SDK types.
// Used in `RevenueCatServiceProtocol` so the mock doesn't depend on the SDK.
// `RealRevenueCatService` maps between these and the real RevenueCat types.

// MARK: - Entitlement

/// Mirrors `RevenueCat.EntitlementInfo`.
struct RCEntitlement: Identifiable, Equatable, Sendable {
    let id: String               // e.g. "pro_access"
    let isActive: Bool
    let willRenew: Bool
    let periodType: RCPeriodType
    let latestPurchaseDate: Date?
    let originalPurchaseDate: Date?
    let expirationDate: Date?
    let productIdentifier: String
    let isSandbox: Bool
    let ownershipType: RCOwnershipType
    let billingIssueDetectedAt: Date?

    enum RCPeriodType: String, Sendable {
        case normal
        case intro
        case trial
    }

    enum RCOwnershipType: String, Sendable {
        case purchased
        case familyShared
        case unknown
    }
}

// MARK: - Customer Info

/// Mirrors `RevenueCat.CustomerInfo`.
struct RCCustomerInfo: Equatable, Sendable {
    let originalAppUserId: String
    let activeEntitlements: [String: RCEntitlement]
    let allEntitlements: [String: RCEntitlement]
    let activeSubscriptions: Set<String>
    let allPurchasedProductIdentifiers: Set<String>
    let latestExpirationDate: Date?
    let firstSeenDate: Date
    let requestDate: Date
    let managementURL: URL?

    /// Convenience: get active entitlement by ID.
    func entitlement(_ id: String) -> RCEntitlement? {
        activeEntitlements[id]
    }

    /// Whether the user has a specific active entitlement.
    func hasActiveEntitlement(_ id: String) -> Bool {
        activeEntitlements[id]?.isActive == true
    }

    /// The highest active tier based on entitlements.
    var highestActiveTier: MembershipTier {
        if hasActiveEntitlement(RCEntitlementID.royalAccess) { return .royal }
        if hasActiveEntitlement(RCEntitlementID.eliteAccess) { return .elite }
        if hasActiveEntitlement(RCEntitlementID.proAccess) { return .pro }
        return .free
    }

    /// Whether the user is on a trial period.
    var isTrialActive: Bool {
        activeEntitlements.values.contains { $0.periodType == .trial }
    }

    /// Whether there's a billing issue on any entitlement.
    var hasBillingIssue: Bool {
        activeEntitlements.values.contains { $0.billingIssueDetectedAt != nil }
    }

    /// The billing issue date, if any.
    var billingIssueDate: Date? {
        activeEntitlements.values.compactMap(\.billingIssueDetectedAt).min()
    }

    /// Empty customer info (anonymous free user).
    static func anonymous(userID: String = "$RCAnonymousID:mock_\(UUID().uuidString.prefix(8))") -> RCCustomerInfo {
        RCCustomerInfo(
            originalAppUserId: userID,
            activeEntitlements: [:],
            allEntitlements: [:],
            activeSubscriptions: [],
            allPurchasedProductIdentifiers: [],
            latestExpirationDate: nil,
            firstSeenDate: .now,
            requestDate: .now,
            managementURL: nil
        )
    }
}

// MARK: - Entitlement IDs

/// The canonical RevenueCat entitlement identifiers for LumenLingo tiers.
enum RCEntitlementID {
    static let proAccess = "pro_access"
    static let eliteAccess = "elite_access"
    static let royalAccess = "royal_access"

    /// All entitlements included in a given tier.
    static func entitlements(for tier: MembershipTier) -> [String] {
        switch tier {
        case .free: return []
        case .trial: return [royalAccess]   // Trial = Royal access
        case .pro: return [proAccess]
        case .elite: return [proAccess, eliteAccess]
        case .royal: return [proAccess, eliteAccess, royalAccess]
        }
    }
}

// MARK: - Offerings

/// Mirrors `RevenueCat.Offerings`.
struct RCOfferings: Equatable, Sendable {
    let current: RCOffering?
    let all: [String: RCOffering]

    static let empty = RCOfferings(current: nil, all: [:])
}

/// Mirrors `RevenueCat.Offering`.
struct RCOffering: Identifiable, Equatable, Sendable {
    let id: String               // e.g. "default"
    let displayName: String
    let packages: [RCPackage]
    let metadata: [String: String]  // Dashboard-configured metadata (Story 2.3)

    /// Get a package by tier.
    func package(for tier: MembershipTier) -> RCPackage? {
        packages.first { $0.tier == tier }
    }

    /// Available tiers in this offering (for dynamic card count).
    var availableTiers: [MembershipTier] {
        packages.map(\.tier).sorted { $0.rank < $1.rank }
    }
}

/// Mirrors `RevenueCat.Package`.
struct RCPackage: Identifiable, Equatable, Sendable {
    let id: String              // e.g. "$rc_monthly"
    let productIdentifier: String
    let localizedPriceString: String
    let localizedTitle: String
    let localizedDescription: String
    let price: Decimal
    let currencyCode: String
    let tier: MembershipTier
    let packageType: RCPackageType

    /// Introductory offer (e.g. free trial)
    let introOffer: RCIntroOffer?

    /// Subscription promotional offers for existing/lapsed subscribers (Story 3.4).
    let promotionalOffers: [RCPromoOffer]

    init(
        id: String,
        productIdentifier: String,
        localizedPriceString: String,
        localizedTitle: String,
        localizedDescription: String,
        price: Decimal,
        currencyCode: String,
        tier: MembershipTier,
        packageType: RCPackageType,
        introOffer: RCIntroOffer?,
        promotionalOffers: [RCPromoOffer] = []
    ) {
        self.id = id
        self.productIdentifier = productIdentifier
        self.localizedPriceString = localizedPriceString
        self.localizedTitle = localizedTitle
        self.localizedDescription = localizedDescription
        self.price = price
        self.currencyCode = currencyCode
        self.tier = tier
        self.packageType = packageType
        self.introOffer = introOffer
        self.promotionalOffers = promotionalOffers
    }

    enum RCPackageType: String, Sendable {
        case monthly
        case annual
        case lifetime
        case custom
    }

    struct RCIntroOffer: Equatable, Sendable {
        let priceString: String
        let period: String          // e.g. "14 days"
        let periodUnit: PeriodUnit
        let periodValue: Int
        let paymentMode: PaymentMode

        enum PeriodUnit: String, Sendable {
            case day, week, month, year
        }

        enum PaymentMode: String, Sendable {
            case freeTrial, payAsYouGo, payUpFront
        }
    }

    /// A promotional offer (App Store subscription offer for existing/lapsed subscribers).
    struct RCPromoOffer: Equatable, Sendable, Identifiable {
        let id: String                      // offerIdentifier
        let priceString: String             // e.g. "$4.99"
        let price: Decimal
        let period: String                  // e.g. "3 months"
        let paymentMode: RCIntroOffer.PaymentMode
    }
}

// MARK: - Purchase Result

/// Mirrors the result from a RevenueCat purchase call.
struct RCPurchaseResult: Equatable, Sendable {
    let customerInfo: RCCustomerInfo
    let userCancelled: Bool
    let transactionIdentifier: String?
}

// MARK: - Signed Promotional Offer (Story 3.4)

/// A server-signed promotional offer ready to pass to `purchase(package:promotionalOffer:)`.
struct RCSignedPromoOffer: Equatable, Sendable {
    let offerIdentifier: String
    let keyIdentifier: String
    let nonce: UUID
    let signature: String
    let timestamp: Int
}

// MARK: - RevenueCat Errors

enum RCError: Error, Equatable, LocalizedError {
    case networkError
    case paymentDeclined
    case storeProblem
    case purchaseCancelled
    case deferredPurchase
    case productNotFound
    case configurationError
    case offlineMode
    case unknown(String)

    var errorDescription: String? {
        switch self {
        case .networkError: "Network connection unavailable. Please check your internet and try again."
        case .paymentDeclined: "Your payment was declined. Please update your payment method."
        case .storeProblem: "There was a problem with the App Store. Please try again later."
        case .purchaseCancelled: "Purchase was cancelled."
        case .deferredPurchase: "Purchase is pending approval (Ask to Buy)."
        case .productNotFound: "Subscription product not found."
        case .configurationError: "RevenueCat configuration error."
        case .offlineMode: "Operating in offline mode. Subscription changes require an internet connection."
        case .unknown(let msg): msg
        }
    }
}
