import Foundation
import RevenueCat
import os.log

// MARK: - Real RevenueCat Service

/// Production implementation of `RevenueCatServiceProtocol`.
/// Delegates all calls to `Purchases.shared`.
@Observable
final class RealRevenueCatService: RevenueCatServiceProtocol, @unchecked Sendable {

    private let logger = Logger(subsystem: "com.lumenlingo", category: "RevenueCat")

    // MARK: - State

    private(set) var isConfigured: Bool = false
    private(set) var currentAppUserID: String = ""
    private(set) var isAnonymous: Bool = true
    private(set) var currentOffering: RCOffering?
    private(set) var cachedCustomerInfo: RCCustomerInfo?

    let sdkVersion: String = Purchases.frameworkVersion
    var isSandbox: Bool { Purchases.shared.isSandbox }

    // MARK: - Customer Info Stream

    private var customerInfoContinuation: AsyncStream<RCCustomerInfo>.Continuation?
    private(set) var customerInfoStream: AsyncStream<RCCustomerInfo> = AsyncStream { _ in }

    // MARK: - Init

    init() {
        let (stream, continuation) = AsyncStream<RCCustomerInfo>.makeStream()
        self.customerInfoStream = stream
        self.customerInfoContinuation = continuation
    }

    // MARK: - Configuration

    func configure(apiKey: String, appUserID: String?) async {
        guard !apiKey.isEmpty else {
            logger.error("RevenueCat API key is empty — skipping configuration. App continues in free tier mode.")
            return
        }

        // Set log level: .debug for Dev/QA, .warn for Prod
        let env = EnvironmentConfig.current.environment
        Purchases.logLevel = (env == .dev || env == .qa) ? .debug : .warn

        // Configure with the builder API (StoreKit 2 is the default for iOS 15+)
        Purchases.configure(
            with: .builder(withAPIKey: apiKey)
                .with(appUserID: appUserID)
                .build()
        )

        isConfigured = true
        currentAppUserID = Purchases.shared.appUserID
        isAnonymous = Purchases.shared.isAnonymous

        // Start listening for customer info updates
        Task { [weak self] in
            for try await info in Purchases.shared.customerInfoStream {
                await self?.handleCustomerInfoUpdate(info)
            }
        }

        logger.info("RevenueCat configured (env: \(env.rawValue), userID: \(Purchases.shared.appUserID), anonymous: \(Purchases.shared.isAnonymous))")
    }

    // MARK: - Identity

    func logIn(userID: String) async throws -> RCCustomerInfo {
        let (info, _) = try await Purchases.shared.logIn(userID)
        currentAppUserID = Purchases.shared.appUserID
        isAnonymous = Purchases.shared.isAnonymous
        let mapped = Self.mapCustomerInfo(info)
        updateCustomerInfo(mapped)
        return mapped
    }

    func logOut() async throws -> RCCustomerInfo {
        let info = try await Purchases.shared.logOut()
        currentAppUserID = Purchases.shared.appUserID
        isAnonymous = Purchases.shared.isAnonymous
        let mapped = Self.mapCustomerInfo(info)
        updateCustomerInfo(mapped)
        return mapped
    }

    // MARK: - Offerings

    func getOfferings() async throws -> RCOfferings {
        let offerings = try await Purchases.shared.offerings()
        let mapped = Self.mapOfferings(offerings)
        currentOffering = mapped.current
        return mapped
    }

    func checkTrialEligibility(productIdentifiers: [String]) async -> [String: Bool] {
        let eligibility = await Purchases.shared.checkTrialOrIntroDiscountEligibility(productIdentifiers: productIdentifiers)
        var result: [String: Bool] = [:]
        for (productID, status) in eligibility {
            result[productID] = status.status == .eligible
        }
        return result
    }

    // MARK: - Purchase

    func purchase(package: RCPackage) async throws -> RCPurchaseResult {
        // Find the real Package in the current offerings
        guard let offerings = try? await Purchases.shared.offerings(),
              let realPackage = findRealPackage(package, in: offerings) else {
            throw RCError.productNotFound
        }

        do {
            let (_, info, userCancelled) = try await Purchases.shared.purchase(package: realPackage)
            let mapped = Self.mapCustomerInfo(info)
            updateCustomerInfo(mapped)
            return RCPurchaseResult(
                customerInfo: mapped,
                userCancelled: userCancelled,
                transactionIdentifier: nil
            )
        } catch let error as RevenueCat.ErrorCode {
            throw Self.mapError(error)
        }
    }

    func restorePurchases() async throws -> RCCustomerInfo {
        let info = try await Purchases.shared.restorePurchases()
        let mapped = Self.mapCustomerInfo(info)
        updateCustomerInfo(mapped)
        return mapped
    }

    func purchase(package: RCPackage, promotionalOffer: RCSignedPromoOffer) async throws -> RCPurchaseResult {
        guard let offerings = try? await Purchases.shared.offerings(),
              let realPackage = findRealPackage(package, in: offerings) else {
            throw RCError.productNotFound
        }

        // Find the matching StoreProductDiscount by offerIdentifier
        guard let discount = realPackage.storeProduct.discounts.first(where: {
            $0.offerIdentifier == promotionalOffer.offerIdentifier
        }) else {
            throw RCError.productNotFound
        }

        do {
            let promoOffer = try await Purchases.shared.promotionalOffer(
                forProductDiscount: discount,
                product: realPackage.storeProduct
            )
            let (_, info, userCancelled) = try await Purchases.shared.purchase(
                package: realPackage,
                promotionalOffer: promoOffer
            )
            let mapped = Self.mapCustomerInfo(info)
            updateCustomerInfo(mapped)
            return RCPurchaseResult(
                customerInfo: mapped,
                userCancelled: userCancelled,
                transactionIdentifier: nil
            )
        } catch let error as RevenueCat.ErrorCode {
            throw Self.mapError(error)
        }
    }

    func getPromotionalOffer(offerIdentifier: String, package: RCPackage) async throws -> RCSignedPromoOffer {
        guard let offerings = try? await Purchases.shared.offerings(),
              let realPackage = findRealPackage(package, in: offerings) else {
            throw RCError.productNotFound
        }

        guard let discount = realPackage.storeProduct.discounts.first(where: {
            $0.offerIdentifier == offerIdentifier
        }) else {
            throw RCError.productNotFound
        }

        let promoOffer = try await Purchases.shared.promotionalOffer(
            forProductDiscount: discount,
            product: realPackage.storeProduct
        )
        return RCSignedPromoOffer(
            offerIdentifier: offerIdentifier,
            keyIdentifier: promoOffer.discount.offerIdentifier ?? "",
            nonce: UUID(),
            signature: "server_signed",
            timestamp: Int(Date.now.timeIntervalSince1970)
        )
    }

    // MARK: - Customer Info

    func getCustomerInfo() async throws -> RCCustomerInfo {
        let info = try await Purchases.shared.customerInfo()
        let mapped = Self.mapCustomerInfo(info)
        updateCustomerInfo(mapped)
        return mapped
    }

    func syncPurchases() async throws -> RCCustomerInfo {
        let info = try await Purchases.shared.syncPurchases()
        let mapped = Self.mapCustomerInfo(info)
        updateCustomerInfo(mapped)
        return mapped
    }

    // MARK: - Subscription Management

    func showManageSubscriptions() async throws {
        try await Purchases.shared.showManageSubscriptions()
    }

    func presentCodeRedemptionSheet() {
        Purchases.shared.presentCodeRedemptionSheet()
    }

    // MARK: - Attribution

    func setAttributes(_ attributes: [String: String]) {
        let subscriber = Purchases.shared.attribution
        for (key, value) in attributes {
            subscriber.setAttributes([key: value])
        }
    }

    func collectDeviceIdentifiers() {
        Purchases.shared.attribution.collectDeviceIdentifiers()
    }

    func enableAdServicesAttributionTokenCollection() {
        Purchases.shared.attribution.enableAdServicesAttributionTokenCollection()
    }

    // MARK: - Private Helpers

    private func updateCustomerInfo(_ info: RCCustomerInfo) {
        cachedCustomerInfo = info
        customerInfoContinuation?.yield(info)
    }

    private func handleCustomerInfoUpdate(_ info: RevenueCat.CustomerInfo) async {
        let mapped = Self.mapCustomerInfo(info)
        updateCustomerInfo(mapped)
    }

    private func findRealPackage(_ mockPackage: RCPackage, in offerings: RevenueCat.Offerings) -> RevenueCat.Package? {
        for (_, offering) in offerings.all {
            for package in offering.availablePackages {
                if package.storeProduct.productIdentifier == mockPackage.productIdentifier {
                    return package
                }
            }
        }
        return nil
    }

    // MARK: - Type Mapping

    static func mapCustomerInfo(_ info: RevenueCat.CustomerInfo) -> RCCustomerInfo {
        var activeEntitlements: [String: RCEntitlement] = [:]
        var allEntitlements: [String: RCEntitlement] = [:]

        for (id, entitlement) in info.entitlements.active {
            activeEntitlements[id] = mapEntitlement(entitlement)
        }
        for (id, entitlement) in info.entitlements.all {
            allEntitlements[id] = mapEntitlement(entitlement)
        }

        return RCCustomerInfo(
            originalAppUserId: info.originalAppUserId,
            activeEntitlements: activeEntitlements,
            allEntitlements: allEntitlements,
            activeSubscriptions: info.activeSubscriptions,
            allPurchasedProductIdentifiers: info.allPurchasedProductIdentifiers,
            latestExpirationDate: info.latestExpirationDate,
            firstSeenDate: info.firstSeen,
            requestDate: info.requestDate,
            managementURL: info.managementURL
        )
    }

    static func mapEntitlement(_ entitlement: RevenueCat.EntitlementInfo) -> RCEntitlement {
        RCEntitlement(
            id: entitlement.identifier,
            isActive: entitlement.isActive,
            willRenew: entitlement.willRenew,
            periodType: mapPeriodType(entitlement.periodType),
            latestPurchaseDate: entitlement.latestPurchaseDate,
            originalPurchaseDate: entitlement.originalPurchaseDate,
            expirationDate: entitlement.expirationDate,
            productIdentifier: entitlement.productIdentifier,
            isSandbox: entitlement.isSandbox,
            ownershipType: mapOwnershipType(entitlement.ownershipType),
            billingIssueDetectedAt: entitlement.billingIssueDetectedAt
        )
    }

    static func mapPeriodType(_ type: RevenueCat.PeriodType) -> RCEntitlement.RCPeriodType {
        switch type {
        case .normal: .normal
        case .intro: .intro
        case .trial: .trial
        @unknown default: .normal
        }
    }

    static func mapOwnershipType(_ type: RevenueCat.PurchaseOwnershipType) -> RCEntitlement.RCOwnershipType {
        switch type {
        case .purchased: .purchased
        case .familyShared: .familyShared
        case .unknown: .unknown
        @unknown default: .unknown
        }
    }

    static func mapOfferings(_ offerings: RevenueCat.Offerings) -> RCOfferings {
        var all: [String: RCOffering] = [:]
        for (id, offering) in offerings.all {
            all[id] = mapOffering(offering)
        }
        return RCOfferings(
            current: offerings.current.map { mapOffering($0) },
            all: all
        )
    }

    static func mapOffering(_ offering: RevenueCat.Offering) -> RCOffering {
        // Map metadata (RevenueCat SDK returns [String: Any], we store [String: String])
        var stringMetadata: [String: String] = [:]
        for (key, value) in offering.metadata {
            if let str = value as? String {
                stringMetadata[key] = str
            }
        }
        return RCOffering(
            id: offering.identifier,
            displayName: offering.serverDescription,
            packages: offering.availablePackages.map { mapPackage($0) },
            metadata: stringMetadata
        )
    }

    static func mapPackage(_ package: RevenueCat.Package) -> RCPackage {
        let product = package.storeProduct
        let tier = SubscriptionProductID.tier(for: product.productIdentifier) ?? .free

        let promoOffers: [RCPackage.RCPromoOffer] = product.discounts.compactMap { discount -> RCPackage.RCPromoOffer? in
            guard let offerId = discount.offerIdentifier else { return nil }
            let period = Self.mapPromoOfferPeriod(discount)
            let paymentMode = Self.mapPromoPaymentMode(discount)
            return RCPackage.RCPromoOffer(
                id: offerId,
                priceString: discount.localizedPriceString,
                price: discount.price,
                period: period,
                paymentMode: paymentMode
            )
        }

        return RCPackage(
            id: package.identifier,
            productIdentifier: product.productIdentifier,
            localizedPriceString: product.localizedPriceString,
            localizedTitle: product.localizedTitle,
            localizedDescription: product.localizedDescription,
            price: product.price,
            currencyCode: product.currencyCode ?? "USD",
            tier: tier,
            packageType: mapPackageType(package.packageType),
            introOffer: product.introductoryDiscount.map { mapIntroOffer($0) },
            promotionalOffers: promoOffers
        )
    }

    static func mapPromoOfferPeriod(_ discount: RevenueCat.StoreProductDiscount) -> String {
        let value = discount.subscriptionPeriod.value
        let unitLabel: String
        switch discount.subscriptionPeriod.unit {
        case .day: unitLabel = value == 1 ? "day" : "days"
        case .week: unitLabel = value == 1 ? "week" : "weeks"
        case .month: unitLabel = value == 1 ? "month" : "months"
        case .year: unitLabel = value == 1 ? "year" : "years"
        @unknown default: unitLabel = "day(s)"
        }
        return "\(value) \(unitLabel)"
    }

    static func mapPromoPaymentMode(_ discount: RevenueCat.StoreProductDiscount) -> RCPackage.RCIntroOffer.PaymentMode {
        switch discount.paymentMode {
        case .freeTrial: .freeTrial
        case .payAsYouGo: .payAsYouGo
        case .payUpFront: .payUpFront
        @unknown default: .payAsYouGo
        }
    }

    static func mapPackageType(_ type: RevenueCat.PackageType) -> RCPackage.RCPackageType {
        switch type {
        case .monthly: .monthly
        case .annual: .annual
        case .lifetime: .lifetime
        default: .custom
        }
    }

    static func mapIntroOffer(_ discount: RevenueCat.StoreProductDiscount) -> RCPackage.RCIntroOffer {
        let periodUnit: RCPackage.RCIntroOffer.PeriodUnit
        switch discount.subscriptionPeriod.unit {
        case .day: periodUnit = .day
        case .week: periodUnit = .week
        case .month: periodUnit = .month
        case .year: periodUnit = .year
        @unknown default: periodUnit = .day
        }

        let paymentMode: RCPackage.RCIntroOffer.PaymentMode
        switch discount.paymentMode {
        case .freeTrial: paymentMode = .freeTrial
        case .payAsYouGo: paymentMode = .payAsYouGo
        case .payUpFront: paymentMode = .payUpFront
        @unknown default: paymentMode = .freeTrial
        }

        return RCPackage.RCIntroOffer(
            priceString: discount.localizedPriceString,
            period: "\(discount.subscriptionPeriod.value) \(periodUnit.rawValue)(s)",
            periodUnit: periodUnit,
            periodValue: discount.subscriptionPeriod.value,
            paymentMode: paymentMode
        )
    }

    static func mapError(_ error: RevenueCat.ErrorCode) -> RCError {
        switch error {
        case .purchaseCancelledError:
            return .purchaseCancelled
        case .networkError:
            return .networkError
        case .paymentPendingError:
            return .deferredPurchase
        case .productNotAvailableForPurchaseError:
            return .productNotFound
        case .configurationError:
            return .configurationError
        default:
            return .unknown(error.localizedDescription)
        }
    }
}
