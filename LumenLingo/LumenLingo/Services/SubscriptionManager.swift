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

    /// The tier whose purchase was cancelled (highlighted briefly).
    var cancelHighlightTier: MembershipTier?

    /// Whether a deferred (Ask to Buy) purchase is pending.
    var showDeferredMessage: Bool = false

    /// Whether the golden flash should fire (post-purchase success).
    var showGoldenFlash: Bool = false

    /// Whether this is the user's first-ever subscription (extended celebration).
    var isFirstSubscription: Bool = false

    // MARK: - RevenueCat Offerings (Story 2.1)

    /// Current offering from RevenueCat (the default offering for the paywall).
    private(set) var currentOffering: RCOffering?

    /// All available offerings keyed by identifier.
    private(set) var allOfferings: [String: RCOffering] = [:]

    /// The state of the offerings fetch.
    private(set) var offeringsState: OfferingsState = .idle

    /// Timestamp of the last successful offerings fetch.
    private var lastOfferingsFetchDate: Date?

    /// How long cached offerings stay fresh before a background refresh (5 minutes).
    private let offeringsCacheTTL: TimeInterval = 5 * 60

    /// Offerings loading/error state.
    enum OfferingsState: Equatable {
        case idle
        case loading
        case loaded
        case error(String)

        var isLoaded: Bool {
            if case .loaded = self { return true }
            return false
        }
    }

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

    // MARK: - RevenueCat Offerings (Story 2.1)

    /// Fetch offerings from RevenueCat and cache them.
    /// Uses the cached offering if fresh (< 5 minutes), unless `forceRefresh` is true.
    func fetchOfferings(from service: any RevenueCatServiceProtocol, forceRefresh: Bool = false) async {
        // Use cache if still fresh
        if !forceRefresh, let lastFetch = lastOfferingsFetchDate,
           Date().timeIntervalSince(lastFetch) < offeringsCacheTTL,
           currentOffering != nil {
            storeLog.debug("Using cached offerings (age: \(Int(Date().timeIntervalSince(lastFetch)))s)")
            return
        }

        guard service.isConfigured else {
            storeLog.warning("RevenueCat not configured — skipping offerings fetch")
            return
        }

        offeringsState = .loading

        #if DEBUG
        let fetchStart = CFAbsoluteTimeGetCurrent()
        #endif

        do {
            let offerings = try await service.getOfferings()
            currentOffering = offerings.current
            allOfferings = offerings.all
            offeringsState = .loaded
            lastOfferingsFetchDate = Date()

            #if DEBUG
            let elapsed = (CFAbsoluteTimeGetCurrent() - fetchStart) * 1000
            storeLog.debug("Offerings fetched in \(Int(elapsed))ms — \(offerings.all.count) offering(s), current: \(offerings.current?.id ?? "none")")
            #endif
        } catch {
            storeLog.error("Failed to fetch offerings: \(error.localizedDescription)")
            // Only show error if we have no cached offering to fall back to
            if currentOffering == nil {
                offeringsState = .error(error.localizedDescription)
            } else {
                // Keep the old cached offering and restore loaded state
                offeringsState = .loaded
            }
        }
    }

    /// Fetch a specific named offering by ID (e.g., "experiment_spring_2026").
    func offering(id: String) -> RCOffering? {
        allOfferings[id]
    }

    /// Whether cached offerings are stale and should be refreshed.
    var isOfferingsCacheStale: Bool {
        guard let lastFetch = lastOfferingsFetchDate else { return true }
        return Date().timeIntervalSince(lastFetch) >= offeringsCacheTTL
    }

    // MARK: - Offering Metadata (Story 2.3)

    /// Metadata value from the current offering (e.g., "paywall_headline").
    func offeringMetadata(_ key: String) -> String? {
        currentOffering?.metadata[key]
    }

    /// Tiers available in the current offering (drives dynamic card count).
    var availablePaidTiers: [MembershipTier] {
        currentOffering?.availableTiers ?? [.pro, .elite, .royal]
    }

    // MARK: - Offering-Based Pricing (Story 2.2)

    /// Get the RevenueCat package for a specific tier from the current offering.
    func package(for tier: MembershipTier) -> RCPackage? {
        currentOffering?.package(for: tier)
    }

    /// Localized price string from RevenueCat (e.g., "£9.99", "$12.99", "¥1,480").
    /// Falls back to StoreKit Product, then to hardcoded enum price.
    func offeringPrice(for tier: MembershipTier) -> String {
        if let pkg = package(for: tier) {
            return pkg.localizedPriceString
        }
        return displayPrice(for: tier)
    }

    /// Daily cost string computed from the package price (price ÷ 30).
    func dailyCost(for tier: MembershipTier) -> String? {
        guard let pkg = package(for: tier), pkg.price > 0 else { return nil }
        let daily = pkg.price / 30
        // Use the same currency formatting as the package
        let formatter = NumberFormatter()
        formatter.numberStyle = .currency
        formatter.currencyCode = pkg.currencyCode ?? "USD"
        formatter.maximumFractionDigits = 2
        return formatter.string(from: daily as NSDecimalNumber)
    }

    /// Introductory offer from the RevenueCat package (if available).
    func offeringIntroOffer(for tier: MembershipTier) -> RCPackage.RCIntroOffer? {
        package(for: tier)?.introOffer
    }

    /// Promotional offers available for the given tier (Story 3.4).
    func promotionalOffers(for tier: MembershipTier) -> [RCPackage.RCPromoOffer] {
        package(for: tier)?.promotionalOffers ?? []
    }

    /// The best (first) promotional offer for a tier, if any (Story 3.4).
    func bestPromoOffer(for tier: MembershipTier) -> RCPackage.RCPromoOffer? {
        promotionalOffers(for: tier).first
    }

    /// Whether a price is available for the given tier (from offerings or StoreKit).
    func hasPriceAvailable(for tier: MembershipTier) -> Bool {
        package(for: tier) != nil || product(for: tier) != nil
    }

    // MARK: - Trial Eligibility (Story 2.4)

    /// Cached eligibility results: product ID → eligible.
    private(set) var trialEligibility: [String: Bool] = [:]

    /// Check trial/intro eligibility for all packages in the current offering.
    func checkTrialEligibility(from service: any RevenueCatServiceProtocol) async {
        guard let offering = currentOffering else { return }
        let productIDs = offering.packages.map(\.productIdentifier)
        guard !productIDs.isEmpty else { return }
        trialEligibility = await service.checkTrialEligibility(productIdentifiers: productIDs)
    }

    /// Whether the given tier is eligible for an introductory offer.
    func isTrialEligible(for tier: MembershipTier) -> Bool {
        guard let pkg = package(for: tier) else { return false }
        return trialEligibility[pkg.productIdentifier] ?? (pkg.introOffer != nil)
    }

    // MARK: - RevenueCat Purchase (Story 3.1)

    /// Result of a RevenueCat package purchase.
    enum RCPurchaseOutcome: Equatable {
        case success(MembershipTier)
        case cancelled
        case deferred
        case error(String)
    }

    /// Purchase a subscription via RevenueCat's `purchase(package:)`.
    /// Handles all outcomes: success, cancel, deferred, failure.
    func purchasePackage(for tier: MembershipTier, using service: any RevenueCatServiceProtocol) async -> RCPurchaseOutcome {
        guard let pkg = package(for: tier) else {
            storeLog.error("No RC package for tier \(tier.rawValue)")
            return .error("Subscription product not found.")
        }

        isPurchasing = true
        errorMessage = nil
        cancelHighlightTier = nil
        showDeferredMessage = false
        defer { isPurchasing = false }

        // Track if this is the user's first subscription (no prior entitlements)
        let hadPriorSubscription = latestCustomerInfo?.activeEntitlements.isEmpty == false

        do {
            let result = try await service.purchase(package: pkg)

            if result.userCancelled {
                storeLog.info("Purchase cancelled for \(tier.rawValue)")
                cancelHighlightTier = tier
                HapticsService.shared.selectionChanged()
                // Clear highlight after 2 seconds
                Task { @MainActor in
                    try? await Task.sleep(for: .seconds(2))
                    if self.cancelHighlightTier == tier {
                        self.cancelHighlightTier = nil
                    }
                }
                return .cancelled
            }

            // Success
            let purchasedTier = result.customerInfo.highestActiveTier
            handleRevenueCatCustomerInfo(result.customerInfo)
            isFirstSubscription = !hadPriorSubscription
            storeLog.info("Purchase successful: \(purchasedTier.rawValue), txn=\(result.transactionIdentifier ?? "nil")")
            return .success(purchasedTier)
        } catch let error as RCError {
            switch error {
            case .deferredPurchase:
                storeLog.info("Purchase deferred (Ask to Buy) for \(tier.rawValue)")
                showDeferredMessage = true
                return .deferred
            case .purchaseCancelled:
                storeLog.info("Purchase cancelled for \(tier.rawValue)")
                cancelHighlightTier = tier
                HapticsService.shared.selectionChanged()
                Task { @MainActor in
                    try? await Task.sleep(for: .seconds(2))
                    if self.cancelHighlightTier == tier {
                        self.cancelHighlightTier = nil
                    }
                }
                return .cancelled
            default:
                storeLog.error("Purchase error for \(tier.rawValue): \(error.localizedDescription)")
                errorMessage = "Something went wrong. Please try again."
                return .error(error.localizedDescription)
            }
        } catch {
            storeLog.error("Purchase unknown error for \(tier.rawValue): \(error.localizedDescription)")
            errorMessage = "Something went wrong. Please try again."
            return .error(error.localizedDescription)
        }
    }

    // MARK: - RevenueCat Promotional Offer Purchase (Story 3.4)

    /// Purchase a package with a promotional offer.
    func purchaseWithPromoOffer(
        for tier: MembershipTier,
        offerIdentifier: String,
        using service: any RevenueCatServiceProtocol
    ) async -> RCPurchaseOutcome {
        guard let pkg = package(for: tier) else {
            storeLog.error("No RC package for tier \(tier.rawValue)")
            return .error("Subscription product not found.")
        }

        isPurchasing = true
        errorMessage = nil
        cancelHighlightTier = nil
        showDeferredMessage = false
        defer { isPurchasing = false }

        let hadPriorSubscription = latestCustomerInfo?.activeEntitlements.isEmpty == false

        do {
            let signedOffer = try await service.getPromotionalOffer(
                offerIdentifier: offerIdentifier,
                package: pkg
            )
            let result = try await service.purchase(package: pkg, promotionalOffer: signedOffer)

            if result.userCancelled {
                cancelHighlightTier = tier
                HapticsService.shared.selectionChanged()
                Task { @MainActor in
                    try? await Task.sleep(for: .seconds(2))
                    if self.cancelHighlightTier == tier { self.cancelHighlightTier = nil }
                }
                return .cancelled
            }

            let purchasedTier = result.customerInfo.highestActiveTier
            handleRevenueCatCustomerInfo(result.customerInfo)
            isFirstSubscription = !hadPriorSubscription
            storeLog.info("Promo purchase successful: \(purchasedTier.rawValue), offer=\(offerIdentifier)")
            return .success(purchasedTier)
        } catch let error as RCError {
            switch error {
            case .deferredPurchase:
                showDeferredMessage = true
                return .deferred
            case .purchaseCancelled:
                cancelHighlightTier = tier
                HapticsService.shared.selectionChanged()
                Task { @MainActor in
                    try? await Task.sleep(for: .seconds(2))
                    if self.cancelHighlightTier == tier { self.cancelHighlightTier = nil }
                }
                return .cancelled
            default:
                storeLog.error("Promo purchase error: \(error.localizedDescription)")
                errorMessage = "Promotional offer could not be applied. Please try again."
                return .error(error.localizedDescription)
            }
        } catch {
            storeLog.error("Promo purchase unknown error: \(error.localizedDescription)")
            errorMessage = "Promotional offer could not be applied. Please try again."
            return .error(error.localizedDescription)
        }
    }

    // MARK: - RevenueCat Restore (Story 3.2)

    /// Result of a restore purchases operation.
    enum RestoreOutcome: Equatable {
        case restored(MembershipTier)
        case nothingToRestore
        case error(String)
    }

    /// Banner message shown after a restore (success, nothing found, or error).
    var restoreBannerMessage: String?

    /// Whether restore succeeded with active entitlements.
    var restoreSucceeded: Bool = false

    /// Restore purchases via RevenueCat's `restorePurchases()`.
    func restoreViaRevenueCat(using service: any RevenueCatServiceProtocol) async -> RestoreOutcome {
        isRestoring = true
        errorMessage = nil
        restoreBannerMessage = nil
        restoreSucceeded = false
        defer { isRestoring = false }

        do {
            let customerInfo = try await service.restorePurchases()
            handleRevenueCatCustomerInfo(customerInfo)

            let restoredTier = customerInfo.highestActiveTier
            if restoredTier != .free {
                restoreSucceeded = true
                restoreBannerMessage = "Welcome back! Your \(restoredTier.displayName) subscription has been restored."
                HapticsService.shared.success()
                storeLog.info("Restore success: tier=\(restoredTier.rawValue)")
                return .restored(restoredTier)
            } else {
                restoreBannerMessage = "No active subscriptions found for this Apple ID. If you believe this is an error, contact us."
                storeLog.info("Restore: no active entitlements")
                return .nothingToRestore
            }
        } catch {
            let msg = "Couldn't restore. Check your connection and try again."
            restoreBannerMessage = msg
            storeLog.error("Restore failed: \(error.localizedDescription)")
            return .error(error.localizedDescription)
        }
    }

    // MARK: - Upgrade / Downgrade Context (Story 3.3)

    /// Describes the context of a tier change relative to the user's current subscription.
    enum TierChangeDirection: Equatable {
        case upgrade
        case downgrade
        case sameOrFree
    }

    /// Determines whether changing to `target` is an upgrade, downgrade, or neutral.
    func tierChangeDirection(to target: MembershipTier) -> TierChangeDirection {
        guard let current = currentSubscribedTier else { return .sameOrFree }
        if target.rank > current.rank { return .upgrade }
        if target.rank < current.rank { return .downgrade }
        return .sameOrFree
    }

    /// Contextual label for the CTA button based on the tier change direction.
    func ctaVerb(for target: MembershipTier) -> String {
        switch tierChangeDirection(to: target) {
        case .upgrade: return "Upgrade to \(target.displayName)"
        case .downgrade: return "Switch to \(target.displayName)"
        case .sameOrFree: return "Subscribe"
        }
    }

    /// The next renewal date (from latest customer info), if available.
    var nextRenewalDateString: String? {
        guard let date = latestCustomerInfo?.latestExpirationDate, date > .now else { return nil }
        let formatter = DateFormatter()
        formatter.dateStyle = .medium
        formatter.timeStyle = .none
        return formatter.string(from: date)
    }

    // MARK: - StoreKit Purchase (Legacy)

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
