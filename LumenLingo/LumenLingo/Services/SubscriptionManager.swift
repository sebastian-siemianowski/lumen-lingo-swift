import StoreKit
import os.log

// MARK: - Logging

private let storeLog = Logger(subsystem: "com.lumenlingo", category: "SubscriptionManager")

// MARK: - Subscription Product IDs

enum SubscriptionProductID {
    static let proMonthly = "com.lumenshore.lumenlingo.pro.monthly"
    static let eliteMonthly = "com.lumenshore.lumenlingo.elite.monthly"
    static let royalMonthly = "com.lumenshore.lumenlingo.royal.monthly"

    static let all: Set<String> = [proMonthly, eliteMonthly, royalMonthly]

    /// Map a product ID to the corresponding MembershipTier.
    static func tier(for productID: String) -> MembershipTier? {
        switch productID {
        case proMonthly: return .pro
        case eliteMonthly: return .elite
        case royalMonthly: return .royal
        default: return nil
        }
    }

    /// Map a MembershipTier to its product ID.
    static func productID(for tier: MembershipTier) -> String? {
        switch tier {
        case .pro: return proMonthly
        case .elite: return eliteMonthly
        case .royal: return royalMonthly
        case .free, .trial: return nil
        }
    }
}

// MARK: - Subscription State

enum SubscriptionState: Equatable {
    case unknown
    case notSubscribed
    case subscribed(tier: MembershipTier)
    case inGracePeriod(tier: MembershipTier)
    case inBillingRetry(tier: MembershipTier)
    case revoked
    case expired
}

// MARK: - Purchase Error

enum PurchaseError: LocalizedError {
    case productNotFound
    case purchaseCancelled
    case purchasePending
    case verificationFailed
    case unknown(Error)

    var errorDescription: String? {
        switch self {
        case .productNotFound: return "Subscription product not found."
        case .purchaseCancelled: return "Purchase was cancelled."
        case .purchasePending: return "Purchase is pending approval."
        case .verificationFailed: return "Purchase verification failed."
        case .unknown(let error): return error.localizedDescription
        }
    }
}

// MARK: - Subscription Manager

/// Manages StoreKit 2 subscriptions.
/// Handles product loading, purchases, transaction observation, and state sync.
@MainActor
@Observable
final class SubscriptionManager {

    // MARK: Published State

    /// All loaded subscription products, sorted by price.
    private(set) var products: [Product] = []

    /// Current subscription state.
    private(set) var subscriptionState: SubscriptionState = .unknown

    /// Whether a purchase is currently in progress.
    var isPurchasing: Bool = false

    /// Whether a restore is in progress.
    var isRestoring: Bool = false

    /// Error message to display to the user.
    var errorMessage: String?

    // MARK: Internal

    // MARK: Lifecycle

    // Note: Transaction observation is now handled by RevenueCat SDK (Story 1.4/1.5).
    // The customerInfoStream → handleRevenueCatCustomerInfo() bridge in LumenLingoApp
    // updates subscriptionState reactively. Direct StoreKit 2 listeners are removed.

    // MARK: - Product Loading

    /// Load subscription products from the App Store.
    func loadProducts() async {
        do {
            let storeProducts = try await Product.products(for: SubscriptionProductID.all)
            // Sort by price ascending: Pro → Elite → Royal
            products = storeProducts.sorted { $0.price < $1.price }
            storeLog.info("Loaded \(storeProducts.count) subscription products")
        } catch {
            storeLog.error("Failed to load products: \(error.localizedDescription)")
        }
    }

    /// Get the Product for a specific tier.
    func product(for tier: MembershipTier) -> Product? {
        guard let id = SubscriptionProductID.productID(for: tier) else { return nil }
        return products.first { $0.id == id }
    }

    // MARK: - Purchase

    /// Purchase a subscription for the given tier.
    /// Returns the tier on success.
    @discardableResult
    func purchase(_ tier: MembershipTier) async throws -> MembershipTier {
        guard let product = product(for: tier) else {
            throw PurchaseError.productNotFound
        }
        return try await purchase(product)
    }

    /// Purchase a specific product.
    @discardableResult
    func purchase(_ product: Product) async throws -> MembershipTier {
        isPurchasing = true
        errorMessage = nil
        defer { isPurchasing = false }

        do {
            let result = try await product.purchase()

            switch result {
            case .success(let verification):
                let transaction = try checkVerification(verification)
                await transaction.finish()
                storeLog.info("Purchase successful: \(product.id)")
                // State update is handled by RevenueCat customerInfoStream → handleRevenueCatCustomerInfo()
                guard let tier = SubscriptionProductID.tier(for: product.id) else {
                    throw PurchaseError.productNotFound
                }
                return tier

            case .userCancelled:
                storeLog.info("Purchase cancelled by user")
                throw PurchaseError.purchaseCancelled

            case .pending:
                storeLog.info("Purchase pending (Ask to Buy or SCA)")
                throw PurchaseError.purchasePending

            @unknown default:
                storeLog.warning("Unknown purchase result")
                throw PurchaseError.purchaseCancelled
            }
        } catch let error as PurchaseError {
            throw error
        } catch {
            storeLog.error("Purchase failed: \(error.localizedDescription)")
            throw PurchaseError.unknown(error)
        }
    }

    // MARK: - Restore Purchases

    /// Restore purchases — syncs with App Store and updates state.
    /// State update is handled by RevenueCat customerInfoStream after sync.
    func restorePurchases() async {
        isRestoring = true
        errorMessage = nil
        defer { isRestoring = false }

        do {
            try await AppStore.sync()
            // State update handled by RevenueCat customerInfoStream → handleRevenueCatCustomerInfo()
            storeLog.info("Restore purchases completed")
        } catch {
            storeLog.error("Restore failed: \(error.localizedDescription)")
            errorMessage = error.localizedDescription
        }
    }

    /// The currently subscribed tier, if any.
    var currentSubscribedTier: MembershipTier? {
        switch subscriptionState {
        case .subscribed(let tier), .inGracePeriod(let tier), .inBillingRetry(let tier):
            return tier
        default:
            return nil
        }
    }

    /// Whether the user has an active paid subscription.
    var isSubscribed: Bool {
        currentSubscribedTier != nil
    }

    // MARK: - Verification

    /// Verify a StoreKit transaction.
    private func checkVerification<T>(_ result: VerificationResult<T>) throws -> T {
        switch result {
        case .unverified(_, let error):
            storeLog.error("Verification failed: \(error.localizedDescription)")
            throw PurchaseError.verificationFailed
        case .verified(let safe):
            return safe
        }
    }

    // MARK: - RevenueCat CustomerInfo Bridge

    /// The latest customer info received from RevenueCat.
    private(set) var latestCustomerInfo: RCCustomerInfo?

    /// Handle a CustomerInfo update from RevenueCat.
    /// Maps entitlements → `SubscriptionState` and publishes to SwiftUI observers.
    func handleRevenueCatCustomerInfo(_ info: RCCustomerInfo) {
        latestCustomerInfo = info
        let tier = info.highestActiveTier

        if tier == .free {
            if info.latestExpirationDate != nil {
                // Had subscriptions before that have now expired
                subscriptionState = .expired
            } else {
                subscriptionState = .notSubscribed
            }
        } else if info.isTrialActive {
            subscriptionState = .subscribed(tier: .trial)
        } else if info.hasBillingIssue {
            subscriptionState = .inGracePeriod(tier: tier)
        } else {
            subscriptionState = .subscribed(tier: tier)
        }

        #if DEBUG
        let entitlementKeys = info.activeEntitlements.keys.sorted().joined(separator: ", ")
        storeLog.debug("RC CustomerInfo: tier=\(tier.rawValue), state=\(String(describing: self.subscriptionState)), entitlements=[\(entitlementKeys)]")
        #endif
    }

    /// Start observing RevenueCat customer info updates.
    /// Consumes the `customerInfoStream` and maps each update to internal state.
    func startObservingRevenueCat(_ service: any RevenueCatServiceProtocol) -> Task<Void, Never> {
        Task { [weak self] in
            for await info in service.customerInfoStream {
                await self?.handleRevenueCatCustomerInfo(info)
            }
        }
    }

    // MARK: - Display Price Helpers

    /// Get the display price string from StoreKit (localized by App Store).
    /// Falls back to the enum's hardcoded price if products haven't loaded.
    func displayPrice(for tier: MembershipTier) -> String {
        if let product = product(for: tier) {
            return product.displayPrice
        }
        // Fallback to hardcoded prices
        return tier.monthlyPrice > 0 ? "£\(tier.monthlyPrice)/mo" : "Free"
    }

    /// Get the introductory offer description for a product (e.g., "2 weeks free").
    func introductoryOfferDescription(for tier: MembershipTier) -> String? {
        guard let product = product(for: tier),
              let subscription = product.subscription,
              let introOffer = subscription.introductoryOffer else { return nil }
        switch introOffer.paymentMode {
        case .freeTrial:
            return "\(introOffer.period.debugDescription) free trial"
        case .payUpFront:
            return "\(introOffer.displayPrice) for \(introOffer.period.debugDescription)"
        case .payAsYouGo:
            return "\(introOffer.displayPrice)/\(introOffer.period.debugDescription)"
        default:
            return nil
        }
    }

    /// Whether the user is eligible for the introductory offer on a given tier.
    func isEligibleForIntroOffer(for tier: MembershipTier) async -> Bool {
        guard let product = product(for: tier),
              let subscription = product.subscription else { return false }
        return await subscription.isEligibleForIntroOffer
    }
}
