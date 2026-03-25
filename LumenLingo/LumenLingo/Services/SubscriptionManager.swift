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

    /// The tier associated with this state, if any.
    var associatedTier: MembershipTier? {
        switch self {
        case .subscribed(let tier), .inGracePeriod(let tier), .inBillingRetry(let tier):
            return tier
        case .unknown, .notSubscribed, .revoked, .expired:
            return nil
        }
    }
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

    /// The tier before the most recent entitlement update (for analytics and animations).
    private(set) var previousTier: MembershipTier?

    // MARK: - Billing Alert State (Story 5.2)

    /// Whether the billing alert banner is currently visible.
    var showBillingAlert: Bool = false

    /// Whether the billing issue was just resolved (drives green checkmark animation).
    var billingResolved: Bool = false

    /// The date the user last dismissed the billing alert (reappears after 24h).
    private var billingAlertDismissedAt: Date? {
        didSet {
            if let date = billingAlertDismissedAt {
                UserDefaults.standard.set(date.timeIntervalSince1970, forKey: "billing_alert_dismissed_at")
            }
        }
    }

    /// Whether the subscription has a billing issue (grace period or billing retry).
    var hasBillingIssue: Bool {
        switch subscriptionState {
        case .inGracePeriod, .inBillingRetry: return true
        default: return false
        }
    }

    /// The tier affected by the billing issue, if any.
    var billingIssueTier: MembershipTier? {
        switch subscriptionState {
        case .inGracePeriod(let tier), .inBillingRetry(let tier): return tier
        default: return nil
        }
    }

    /// Dismiss the billing alert. It will reappear after 24 hours if unresolved.
    func dismissBillingAlert() {
        showBillingAlert = false
        billingAlertDismissedAt = .now
    }

    // MARK: - Cancellation State (Story 5.3)

    /// Whether a one-time cancellation banner should appear.
    var showCancellationBanner: Bool = false

    /// Whether the user is on an active subscription that won't renew (cancelled by user).
    var isCancelling: Bool {
        guard let info = latestCustomerInfo else { return false }
        guard !info.hasBillingIssue else { return false }
        let highest = info.highestActiveTier
        guard highest != .free else { return false }
        // Check if the highest active entitlement won't renew
        let entitlementId: String? = {
            if info.hasActiveEntitlement(RCEntitlementID.royalAccess) { return RCEntitlementID.royalAccess }
            if info.hasActiveEntitlement(RCEntitlementID.eliteAccess) { return RCEntitlementID.eliteAccess }
            if info.hasActiveEntitlement(RCEntitlementID.proAccess) { return RCEntitlementID.proAccess }
            return nil
        }()
        guard let eid = entitlementId, let ent = info.entitlement(eid) else { return false }
        return !ent.willRenew && ent.periodType != .trial
    }

    /// The tier whose subscription is cancelling (won't renew).
    var cancellingTier: MembershipTier? {
        guard isCancelling else { return nil }
        return latestCustomerInfo?.highestActiveTier
    }

    /// Formatted expiry date for the cancelling subscription.
    var cancellationExpiryDateString: String? {
        guard isCancelling,
              let date = latestCustomerInfo?.latestExpirationDate,
              date > .now else { return nil }
        let formatter = DateFormatter()
        formatter.dateStyle = .long
        formatter.timeStyle = .none
        return formatter.string(from: date)
    }

    /// Dismiss the cancellation banner permanently (for this cancellation cycle).
    func dismissCancellationBanner() {
        showCancellationBanner = false
        UserDefaults.standard.set(true, forKey: "cancellation_banner_dismissed")
    }

    // MARK: - Family Sharing (Story 5.6)

    /// Whether the current subscription is via Family Sharing.
    var isFamilyShared: Bool {
        guard let info = latestCustomerInfo else { return false }
        let highest = info.highestActiveTier
        guard highest != .free else { return false }
        // Check if the highest active entitlement has familyShared ownership
        let entitlementId: String? = {
            if info.hasActiveEntitlement(RCEntitlementID.royalAccess) { return RCEntitlementID.royalAccess }
            if info.hasActiveEntitlement(RCEntitlementID.eliteAccess) { return RCEntitlementID.eliteAccess }
            if info.hasActiveEntitlement(RCEntitlementID.proAccess) { return RCEntitlementID.proAccess }
            return nil
        }()
        guard let eid = entitlementId, let ent = info.entitlement(eid) else { return false }
        return ent.ownershipType == .familyShared
    }

    /// The tier shared via Family Sharing, if any.
    var familySharedTier: MembershipTier? {
        guard isFamilyShared else { return nil }
        return latestCustomerInfo?.highestActiveTier
    }

    // MARK: - Expiry Warning & Win-Back (Story 5.7)

    /// Whether the pre-expiry warning sheet should be presented.
    var showExpiryWarning: Bool = false

    /// Whether the post-expiry welcome-back sheet should be presented.
    var showWelcomeBack: Bool = false

    /// Number of days remaining until subscription/trial expires. Nil if not approaching expiry.
    var daysUntilExpiry: Int? {
        guard let info = latestCustomerInfo,
              let expiry = info.latestExpirationDate,
              expiry > .now else { return nil }
        let interval = expiry.timeIntervalSince(.now)
        return max(0, Int(ceil(interval / 86400)))
    }

    /// The tier/label for the expiring subscription (e.g., "Pro" or "Trial").
    var expiringLabel: String? {
        guard let info = latestCustomerInfo else { return nil }
        // Check trial first
        for (_, ent) in info.activeEntitlements where ent.periodType == .trial && !ent.willRenew {
            return "Trial"
        }
        guard isCancelling else { return nil }
        return cancellingTier?.displayName
    }

    /// Whether the subscription is in the pre-expiry warning window (≤3 days, willRenew == false).
    var isInExpiryWarningWindow: Bool {
        guard let days = daysUntilExpiry, days <= 3 else { return false }
        guard let info = latestCustomerInfo else { return false }
        // Check trial not renewing
        for (_, ent) in info.activeEntitlements where ent.periodType == .trial && !ent.willRenew {
            return true
        }
        // Check cancelled subscription
        return isCancelling
    }

    /// Whether the user has lapsed (expired 7+ days ago) and is eligible for welcome-back.
    var isEligibleForWelcomeBack: Bool {
        guard let info = latestCustomerInfo,
              let expiry = info.latestExpirationDate,
              expiry < .now else { return false }
        let daysSinceExpiry = Int(Date.now.timeIntervalSince(expiry) / 86400)
        return daysSinceExpiry >= 7 && info.activeEntitlements.isEmpty
    }

    // MARK: Expiry Warning Frequency Caps

    /// Number of times the expiry warning sheet has been shown this expiry cycle.
    private var expiryWarningShownCount: Int {
        get { UserDefaults.standard.integer(forKey: "expiry_warning_shown_count") }
        set { UserDefaults.standard.set(newValue, forKey: "expiry_warning_shown_count") }
    }

    /// Last time the expiry warning sheet was shown.
    private var expiryWarningLastShownAt: Date? {
        get {
            let ts = UserDefaults.standard.double(forKey: "expiry_warning_last_shown")
            return ts > 0 ? Date(timeIntervalSince1970: ts) : nil
        }
        set {
            if let date = newValue {
                UserDefaults.standard.set(date.timeIntervalSince1970, forKey: "expiry_warning_last_shown")
            }
        }
    }

    /// Whether the user suppressed all win-back prompts for this expiry cycle.
    private var winbackSuppressed: Bool {
        get { UserDefaults.standard.bool(forKey: "winback_suppressed") }
        set { UserDefaults.standard.set(newValue, forKey: "winback_suppressed") }
    }

    /// Last time the welcome-back sheet was shown.
    private var welcomeBackLastShownAt: Date? {
        get {
            let ts = UserDefaults.standard.double(forKey: "welcome_back_last_shown")
            return ts > 0 ? Date(timeIntervalSince1970: ts) : nil
        }
        set {
            if let date = newValue {
                UserDefaults.standard.set(date.timeIntervalSince1970, forKey: "welcome_back_last_shown")
            }
        }
    }

    /// Features already nudged this session (cleared on app launch).
    var nudgedFeaturesThisSession: Set<String> = []

    /// Check and present the expiry warning if conditions are met.
    func evaluateExpiryWarning() {
        guard isInExpiryWarningWindow else { return }
        guard !winbackSuppressed else { return }
        guard expiryWarningShownCount < 3 else { return }

        // Max 1 per 24 hours
        if let lastShown = expiryWarningLastShownAt,
           Date.now.timeIntervalSince(lastShown) < 24 * 60 * 60 {
            return
        }

        showExpiryWarning = true
        expiryWarningShownCount += 1
        expiryWarningLastShownAt = .now
    }

    /// Dismiss the expiry warning for 24 hours ("I'll think about it").
    func dismissExpiryWarning() {
        showExpiryWarning = false
    }

    /// Suppress all win-back prompts for this expiry cycle.
    func suppressWinback() {
        showExpiryWarning = false
        winbackSuppressed = true
    }

    /// Check and present the welcome-back sheet if conditions are met.
    func evaluateWelcomeBack() {
        guard isEligibleForWelcomeBack else { return }
        guard !winbackSuppressed else { return }

        // Show once per 30 days
        if let lastShown = welcomeBackLastShownAt,
           Date.now.timeIntervalSince(lastShown) < 30 * 86400 {
            return
        }

        showWelcomeBack = true
        welcomeBackLastShownAt = .now
    }

    /// Dismiss the welcome-back sheet.
    func dismissWelcomeBack() {
        showWelcomeBack = false
    }

    /// Whether a contextual nudge should be shown for a given feature.
    func shouldShowExpiryNudge(for featureId: String) -> Bool {
        guard isInExpiryWarningWindow else { return false }
        guard !winbackSuppressed else { return false }
        return !nudgedFeaturesThisSession.contains(featureId)
    }

    /// Mark a feature nudge as shown for this session.
    func markNudgeShown(for featureId: String) {
        nudgedFeaturesThisSession.insert(featureId)
    }

    /// Reset expiry warning state (called when subscription renews or changes).
    func resetExpiryWarningState() {
        expiryWarningShownCount = 0
        expiryWarningLastShownAt = nil
        winbackSuppressed = false
        welcomeBackLastShownAt = nil
        showExpiryWarning = false
        showWelcomeBack = false
        UserDefaults.standard.removeObject(forKey: "expiry_warning_shown_count")
        UserDefaults.standard.removeObject(forKey: "expiry_warning_last_shown")
        UserDefaults.standard.removeObject(forKey: "winback_suppressed")
        UserDefaults.standard.removeObject(forKey: "welcome_back_last_shown")
    }

    // MARK: - Offline Entitlement Cache (Story 4.2)

    /// Timestamp of the last successful RevenueCat customer info sync.
    private(set) var lastEntitlementSyncDate: Date? {
        didSet {
            if let date = lastEntitlementSyncDate {
                UserDefaults.standard.set(date.timeIntervalSince1970, forKey: "rc_last_entitlement_sync")
            }
        }
    }

    /// How long the cached entitlement is trusted without a server sync (72 hours).
    private let entitlementCacheGracePeriod: TimeInterval = 72 * 60 * 60

    /// Whether the entitlement cache is stale (no sync for > 72 hours).
    var isEntitlementCacheStale: Bool {
        guard let lastSync = lastEntitlementSyncDate else { return false }
        return Date.now.timeIntervalSince(lastSync) > entitlementCacheGracePeriod
    }

    /// Human-readable description of when entitlements were last synced.
    var lastSyncDescription: String? {
        guard let lastSync = lastEntitlementSyncDate else { return nil }
        let age = Date.now.timeIntervalSince(lastSync)
        if age < 60 { return "Last synced just now" }
        if age < 3600 { return "Last synced \(Int(age / 60)) minutes ago" }
        return "Last synced \(Int(age / 3600)) hours ago"
    }

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

    init() {
        // Restore persisted entitlement sync date
        let timestamp = UserDefaults.standard.double(forKey: "rc_last_entitlement_sync")
        if timestamp > 0 {
            lastEntitlementSyncDate = Date(timeIntervalSince1970: timestamp)
        }
        // Restore billing alert dismiss date
        let dismissTimestamp = UserDefaults.standard.double(forKey: "billing_alert_dismissed_at")
        if dismissTimestamp > 0 {
            billingAlertDismissedAt = Date(timeIntervalSince1970: dismissTimestamp)
        }
    }

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
    /// Pure function: maps RevenueCat customer info to a SubscriptionState.
    /// Handles all subscription states: active, trial, grace period, billing retry, expired, revoked.
    static func mapEntitlementsToState(_ info: RCCustomerInfo) -> SubscriptionState {
        let tier = info.highestActiveTier

        if tier == .free {
            // Check for revocation: had entitlements that are no longer active
            let hasRevokedEntitlement = info.allEntitlements.values.contains {
                !$0.isActive && $0.ownershipType == .purchased
            }
            if hasRevokedEntitlement {
                return .revoked
            }
            if info.latestExpirationDate != nil {
                return .expired
            }
            return .notSubscribed
        }

        if info.isTrialActive {
            return .subscribed(tier: .trial)
        }

        if info.hasBillingIssue {
            // Distinguish grace period from billing retry:
            // Grace period: entitlement active + billing issue + willRenew
            // Billing retry: entitlement active + billing issue + !willRenew
            let isInRetry = info.activeEntitlements.values.contains {
                $0.billingIssueDetectedAt != nil && !$0.willRenew
            }
            return isInRetry ? .inBillingRetry(tier: tier) : .inGracePeriod(tier: tier)
        }

        return .subscribed(tier: tier)
    }

    func handleRevenueCatCustomerInfo(_ info: RCCustomerInfo) {
        let previousInfo = latestCustomerInfo
        latestCustomerInfo = info
        lastEntitlementSyncDate = .now

        let newState = Self.mapEntitlementsToState(info)
        let oldState = subscriptionState
        let oldTier = oldState.associatedTier
        let newTier = newState.associatedTier

        if oldTier != newTier {
            previousTier = oldTier
        }

        subscriptionState = newState

        // Story 5.1: Detect renewals — same tier, updated expiry date
        #if DEBUG
        if let oldExpiry = previousInfo?.latestExpirationDate,
           let newExpiry = info.latestExpirationDate,
           newExpiry > oldExpiry,
           oldTier == newTier,
           newTier != nil {
            let productIds = info.activeSubscriptions.sorted().joined(separator: ", ")
            let formatter = DateFormatter()
            formatter.dateStyle = .medium
            formatter.timeStyle = .short
            storeLog.info("Subscription renewed: tier=\(newTier!.rawValue), products=[\(productIds)], newExpiry=\(formatter.string(from: newExpiry))")
        }
        #endif

        // Story 5.2: Billing alert state management
        updateBillingAlertState(oldState: oldState, newState: newState)

        // Story 5.3: Cancellation detection — show one-time banner
        updateCancellationBannerState(info: info)

        // Story 5.4: Revocation detection — log for analytics
        if case .revoked = newState, oldState != .revoked {
            let revokedTier = oldTier ?? .free
            storeLog.info("Entitlement revoked: tier=\(revokedTier.rawValue), previousState=\(String(describing: oldState))")
        }

        // Story 5.7: Expiry warning & win-back evaluation
        // Reset state when subscription renews or upgrades
        if let oldT = oldTier, let newT = newTier, newT.rank >= oldT.rank,
           case .subscribed = newState {
            if previousInfo?.latestExpirationDate != info.latestExpirationDate {
                resetExpiryWarningState()
            }
        }
        // Note: evaluateExpiryWarning() and evaluateWelcomeBack() are called from
        // ContentView to respect the "never during lessons" constraint.

        if isEntitlementCacheStale {
            storeLog.warning("Entitlement cache is stale — last sync was \(self.lastSyncDescription ?? "unknown")")
        }

        #if DEBUG
        let entitlementKeys = info.activeEntitlements.keys.sorted().joined(separator: ", ")
        storeLog.debug("RC CustomerInfo: tier=\(newTier?.rawValue ?? "nil"), state=\(String(describing: self.subscriptionState)), entitlements=[\(entitlementKeys)]")
        #endif
    }

    /// Story 5.2: Update billing alert visibility based on subscription state transitions.
    private func updateBillingAlertState(oldState: SubscriptionState, newState: SubscriptionState) {
        let wasBillingIssue: Bool = {
            switch oldState {
            case .inGracePeriod, .inBillingRetry: return true
            default: return false
            }
        }()
        let isBillingIssue: Bool = {
            switch newState {
            case .inGracePeriod, .inBillingRetry: return true
            default: return false
            }
        }()

        if isBillingIssue && !wasBillingIssue {
            // Billing issue just detected — show banner (unless recently dismissed)
            let shouldShow = billingAlertDismissedAt.map {
                Date.now.timeIntervalSince($0) > 24 * 60 * 60
            } ?? true
            if shouldShow {
                showBillingAlert = true
            }
            storeLog.info("Billing issue detected: \(String(describing: newState))")
        } else if !isBillingIssue && wasBillingIssue {
            // Billing issue resolved
            billingResolved = true
            billingAlertDismissedAt = nil
            storeLog.info("Billing issue resolved")
            // Auto-clear resolved state after the confirmation animation
            DispatchQueue.main.asyncAfter(deadline: .now() + 2.5) { [weak self] in
                self?.billingResolved = false
                self?.showBillingAlert = false
            }
        } else if isBillingIssue {
            // Still in billing issue — re-check 24h dismiss window
            let shouldShow = billingAlertDismissedAt.map {
                Date.now.timeIntervalSince($0) > 24 * 60 * 60
            } ?? true
            if shouldShow { showBillingAlert = true }
        }
    }

    /// Story 5.3: Show one-time cancellation banner when willRenew becomes false.
    private func updateCancellationBannerState(info: RCCustomerInfo) {
        let wasCancelling = UserDefaults.standard.bool(forKey: "cancellation_banner_dismissed")
        guard isCancelling else {
            // No longer cancelling — reset the dismiss flag for next cancellation
            if wasCancelling {
                UserDefaults.standard.removeObject(forKey: "cancellation_banner_dismissed")
            }
            showCancellationBanner = false
            return
        }
        // Show banner once (not if already dismissed for this cycle)
        if !wasCancelling {
            showCancellationBanner = true
            storeLog.info("Subscription cancellation detected: tier=\(self.cancellingTier?.rawValue ?? "unknown"), expiry=\(self.cancellationExpiryDateString ?? "unknown")")
        }
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

    /// Re-sync entitlements when connectivity resumes after an offline period.
    /// Observes NetworkMonitor and triggers a CustomerInfo refresh within 30 seconds.
    func startConnectivityResync(_ service: any RevenueCatServiceProtocol, networkMonitor: NetworkMonitor) -> Task<Void, Never> {
        Task { [weak self] in
            var wasOffline = false
            while !Task.isCancelled {
                try? await Task.sleep(for: .seconds(5))
                guard let self else { break }

                if !networkMonitor.isConnected {
                    wasOffline = true
                    continue
                }

                if wasOffline {
                    wasOffline = false
                    storeLog.info("Connectivity restored — re-syncing entitlements")
                    if let info = try? await service.getCustomerInfo() {
                        await self.handleRevenueCatCustomerInfo(info)
                    }
                }
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
