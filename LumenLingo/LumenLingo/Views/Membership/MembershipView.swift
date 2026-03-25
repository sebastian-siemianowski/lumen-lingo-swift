import SwiftUI
import SwiftData

// MARK: - Membership View

/// Pricing / subscription page with 4 tiers, billing toggle, comparison table, and FAQ.
/// This is a mock UI — no actual IAP. Matches the React component's layout and visual richness.
struct MembershipView: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization
    @Environment(\.dismiss) private var dismiss
    @Environment(\.horizontalSizeClass) private var sizeClass
    @Environment(TierManager.self) private var tierManager
    @Environment(SubscriptionManager.self) private var subscriptionManager
    @Environment(\.revenueCatService) private var revenueCatService
    @Query private var profiles: [UserProfile]
    private var profile: UserProfile? { profiles.first }
    @PersistedState("membership_comparison_collapsed") private var isComparisonCollapsed = true
    @State private var selectedTierId: String = "free"
    @State private var paywallOpenDate: Date?

    /// When true, shows a close button in the toolbar (for sheet presentations).
    var isSheet: Bool = false

    /// The context driving this paywall's presentation (Story 2.5).
    var paywallContext: PaywallContext = .membershipTab

    private var L: AppStrings { localization.strings }
    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        ScrollView(showsIndicators: false) {
            VStack(spacing: 32) {
                // Story 2.7: Show skeleton/error/content based on offerings state
                switch subscriptionManager.offeringsState {
                case .loading where subscriptionManager.currentOffering == nil:
                    PaywallSkeletonView()
                        .transition(.opacity)
                case .error(let message) where subscriptionManager.currentOffering == nil:
                    PaywallErrorView(
                        message: message,
                        isOffline: message.localizedCaseInsensitiveContains("offline") || message.localizedCaseInsensitiveContains("network"),
                        onRetry: {
                            Task { await subscriptionManager.fetchOfferings(from: revenueCatService, forceRefresh: true) }
                        }
                    )
                    .transition(.opacity)
                default:
                    heroSection
                    tiersSection

                    // Story 2.6: Social proof & trust signals
                    SocialProofSection()

                    // Apple-required subscription disclosure (Guideline 3.1.2)
                    SubscriptionDisclosureView(
                        onRestorePurchases: {
                            Task {
                                // Story 6.4: paywall_restore_tapped
                                PaywallAnalytics.track(.paywallRestoreTapped, properties: [
                                    "context": paywallContext.analyticsName
                                ])
                                let outcome = await subscriptionManager.restoreViaRevenueCat(using: revenueCatService)
                                switch outcome {
                                case .restored(let tier):
                                    PaywallAnalytics.trackRestoreTapped(context: paywallContext, result: "restored")
                                    withAnimation(.spring(response: 0.30, dampingFraction: 0.50)) {
                                        selectedTierId = tier.rawValue
                                    }
                                    tierManager.selectTier(tier.rawValue, profile: profile)
                                    if isSheet {
                                        try? await Task.sleep(for: .seconds(2))
                                        dismiss()
                                    }
                                case .nothingToRestore:
                                    PaywallAnalytics.trackRestoreTapped(context: paywallContext, result: "nothing_to_restore")
                                case .error(let msg):
                                    PaywallAnalytics.trackRestoreTapped(context: paywallContext, result: "error_\(msg)")
                                }
                            }
                        },
                        onRedeemCode: {
                            revenueCatService.presentCodeRedemptionSheet()
                        },
                        onManageSubscription: {
                            Task {
                                do {
                                    try await revenueCatService.showManageSubscriptions()
                                } catch {
                                    // Fallback: open App Store subscriptions URL
                                    if let url = URL(string: "https://apps.apple.com/account/subscriptions") {
                                        await UIApplication.shared.open(url)
                                    }
                                }
                                // Refresh state after returning from management sheet
                                if let info = try? await revenueCatService.getCustomerInfo() {
                                    subscriptionManager.handleRevenueCatCustomerInfo(info)
                                }
                            }
                        }
                    )

                    comparisonSection

                    Spacer(minLength: 80)
                }
            }
            .padding(.horizontal, 16)
            .padding(.top, 12)
            .animation(.easeInOut(duration: 0.3), value: subscriptionManager.offeringsState.isLoaded)
        }
        .background(
            Group {
                if isDark {
                    LinearGradient(
                        colors: [Color(hex: "#0a0a1a"), Color(hex: "#0d1530"), Color(hex: "#0a0a1a")],
                        startPoint: .top,
                        endPoint: .bottom
                    )
                } else {
                    if let img = UIImage(named: "LightModeBackground") {
                        Image(uiImage: img)
                            .resizable()
                            .aspectRatio(contentMode: .fill)
                    } else {
                        LinearGradient(
                            colors: [Color(hex: "#E8D5F5"), Color(hex: "#F5D0E0"), Color(hex: "#FCE4C8")],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    }
                }
            }
            .ignoresSafeArea()
        )
        .navigationBarTitleDisplayMode(.inline)
        .toolbarColorScheme(isDark ? .dark : .light, for: .navigationBar)
        .toolbar {
            if isSheet {
                ToolbarItem(placement: .topBarTrailing) {
                    Button {
                        HapticsService.shared.navTransition()
                        dismiss()
                    } label: {
                        Image(systemName: "xmark.circle.fill")
                            .font(.system(size: 22))
                            .symbolRenderingMode(.hierarchical)
                            .foregroundStyle(isDark ? .white.opacity(0.6) : .primary.opacity(0.5))
                    }
                    .accessibilityLabel("Close")
                }
            }
        }
        .onAppear {
            selectedTierId = tierManager.currentTierId
            // Story 6.4: paywall_viewed
            PaywallAnalytics.trackViewed(
                context: paywallContext,
                offeringId: subscriptionManager.currentOffering?.id,
                currentTier: tierManager.currentTierId
            )
            paywallOpenDate = Date()
        }
        .task {
            await subscriptionManager.loadProducts()
            // Refresh offerings if stale (Story 2.2)
            if subscriptionManager.isOfferingsCacheStale {
                await subscriptionManager.fetchOfferings(from: revenueCatService)
            }
        }
        .onDisappear {
            // Story 6.4: paywall_dismissed (only for sheet presentations without a purchase)
            if isSheet, let opened = paywallOpenDate {
                let timeSpentMs = Int(Date().timeIntervalSince(opened) * 1000)
                PaywallAnalytics.trackDismissed(context: paywallContext, timeSpentMs: timeSpentMs)
            }
        }
        .refreshable {
            // Pull-to-refresh: force refresh offerings (Story 2.1 / 2.2)
            await subscriptionManager.fetchOfferings(from: revenueCatService, forceRefresh: true)
        }
        // Story 3.1: Golden flash on successful purchase
        .overlay {
            if subscriptionManager.showGoldenFlash {
                Color(hex: "#fbbf24").opacity(0.25)
                    .ignoresSafeArea()
                    .transition(.opacity)
                    .allowsHitTesting(false)
            }
        }
        .animation(.easeOut(duration: 0.2), value: subscriptionManager.showGoldenFlash)
        // Story 3.1: Error banner
        .overlay(alignment: .top) {
            if let errorMsg = subscriptionManager.errorMessage {
                PurchaseErrorBanner(message: errorMsg) {
                    subscriptionManager.errorMessage = nil
                }
                .transition(.move(edge: .top).combined(with: .opacity))
                .padding(.top, 8)
                .zIndex(100)
            }
        }
        .animation(.spring(response: 0.35, dampingFraction: 0.7), value: subscriptionManager.errorMessage)
        // Story 3.1: Deferred purchase message
        .overlay(alignment: .center) {
            if subscriptionManager.showDeferredMessage {
                DeferredPurchaseMessage {
                    subscriptionManager.showDeferredMessage = false
                }
                .transition(.scale.combined(with: .opacity))
                .zIndex(101)
            }
        }
        .animation(.spring(response: 0.35, dampingFraction: 0.75), value: subscriptionManager.showDeferredMessage)
        // Story 3.2: Restore banner
        .overlay(alignment: .top) {
            if let restoreMsg = subscriptionManager.restoreBannerMessage {
                RestoreBanner(
                    message: restoreMsg,
                    isSuccess: subscriptionManager.restoreSucceeded,
                    onDismiss: { subscriptionManager.restoreBannerMessage = nil }
                )
                .transition(.move(edge: .top).combined(with: .opacity))
                .padding(.top, 8)
                .zIndex(102)
            }
        }
        .animation(.spring(response: 0.35, dampingFraction: 0.7), value: subscriptionManager.restoreBannerMessage)
    }

    // MARK: - Hero

    private var heroSection: some View {
        VStack(spacing: 12) {
            // Crown icon with glow
            ZStack {
                if !isDark {
                    Circle()
                        .fill(LinearGradient.caribbeanGradientWarm)
                        .frame(width: 70, height: 70)
                        .blur(radius: 20)
                        .opacity(0.4)
                }
                Image(systemName: "crown.fill")
                    .font(.system(size: 40))
                    .foregroundStyle(
                        isDark
                            ? AnyShapeStyle(LinearGradient(colors: [.purple, .pink], startPoint: .leading, endPoint: .trailing))
                            : AnyShapeStyle(LinearGradient.caribbeanGradientWarm)
                    )
            }
            .padding(.bottom, 4)

            // Current tier badge — prominent
            TierBadgeView(prominent: true)

            Text(L.plansAndPricing)
                .font(.caption.bold())
                .tracking(1.5)
                .textCase(.uppercase)
                .foregroundStyle(isDark ? .purple.opacity(0.8) : .caribbeanPlum)
                .padding(.horizontal, 12)
                .padding(.vertical, 6)
                .background(
                    Capsule()
                        .fill(isDark ? .purple.opacity(0.12) : Color.caribbeanSelected)
                        .overlay(Capsule().strokeBorder(isDark ? .purple.opacity(0.25) : Color.caribbeanBorderSubtle, lineWidth: isDark ? 1 : 0.5))
                )

            VStack(spacing: 4) {
                Text(L.investInYour)
                    .font(.system(size: 36, weight: .black))
                    .foregroundStyle(
                        isDark
                            ? AnyShapeStyle(LinearGradient(colors: [.purple, .pink], startPoint: .leading, endPoint: .trailing))
                            : AnyShapeStyle(LinearGradient.caribbeanGradientSunset)
                    )
                Text(L.languageMastery)
                    .font(.system(size: 36, weight: .black))
                    .foregroundStyle(
                        isDark
                            ? AnyShapeStyle(LinearGradient(colors: [.purple, .pink, .orange], startPoint: .leading, endPoint: .trailing))
                            : AnyShapeStyle(LinearGradient.caribbeanGradientWarm)
                    )
            }

            Text(L.membershipSubtitle)
                .multilineTextAlignment(.center)
                .font(.subheadline)
                .foregroundStyle(isDark ? .white.opacity(0.65) : .caribbeanPlum)
                .padding(.top, 4)
        }
    }

    // MARK: - Tiers

    private var tiersSection: some View {
        Group {
            if sizeClass == .compact {
                tierCarousel
            } else {
                VStack(spacing: 14) {
                    ForEach(Array(tiers.enumerated()), id: \.element.id) { index, tier in
                        TierCardView(
                            tier: tier,
                            index: index,
                            selectedTierId: $selectedTierId,
                            paywallContext: paywallContext
                        )
                    }
                }
            }
        }
    }

    // MARK: - Tier Carousel (Compact)

    private var tierCarousel: some View {
        VStack(spacing: 14) {
            TabView(selection: $selectedTierId) {
                ForEach(Array(tiers.enumerated()), id: \.element.id) { index, tier in
                    TierCardView(
                        tier: tier,
                        index: index,
                        selectedTierId: $selectedTierId,
                        paywallContext: paywallContext
                    )
                    .padding(.horizontal, 4)
                    .tag(tier.id)
                }
            }
            .tabViewStyle(.page(indexDisplayMode: .never))
            .frame(height: 480)

            // Custom page indicators with tier colors
            HStack(spacing: 8) {
                ForEach(tiers) { tier in
                    Circle()
                        .fill(
                            selectedTierId == tier.id
                                ? AnyShapeStyle(LinearGradient(
                                    colors: tier.gradientColors,
                                    startPoint: .leading,
                                    endPoint: .trailing
                                  ))
                                : AnyShapeStyle(isDark ? Color.white.opacity(0.25) : Color.black.opacity(0.15))
                        )
                        .frame(
                            width: selectedTierId == tier.id ? 10 : 6,
                            height: selectedTierId == tier.id ? 10 : 6
                        )
                        .shadow(
                            color: selectedTierId == tier.id
                                ? (tier.gradientColors.first ?? .purple).opacity(0.5)
                                : .clear,
                            radius: 4
                        )
                }
            }
            .animation(.spring(response: 0.3, dampingFraction: 0.7), value: selectedTierId)
        }
    }

    // MARK: - Comparison Section

    private var comparisonSection: some View {
        CollapsibleSection(
            style: .inline,
            colors: CollapsibleSectionTheme.featureComparison.gradientColors,
            isCollapsed: $isComparisonCollapsed,
            header: {
                HStack {
                    Text(L.featureComparison)
                        .font(.subheadline.bold())
                        .foregroundStyle(isDark ? .white.opacity(0.7) : .caribbeanInk)
                    Image(systemName: "chevron.right")
                        .font(.system(size: 8, weight: .bold))
                        .foregroundStyle(
                            isComparisonCollapsed
                                ? AnyShapeStyle(LinearGradient(colors: [Color(hex: "#a855f7"), Color(hex: "#ec4899")], startPoint: .leading, endPoint: .trailing))
                                : AnyShapeStyle(isDark ? Color.white.opacity(0.3) : Color.caribbeanMist)
                        )
                        .rotationEffect(.degrees(isComparisonCollapsed ? 0 : 90))
                        .animation(.spring(response: 0.35, dampingFraction: 0.8), value: isComparisonCollapsed)
                }
                .padding(.vertical, 10)
                .padding(.horizontal, 20)
                .background(
                    Capsule().fill(isDark ? .white.opacity(0.06) : Color.caribbeanElevated)
                        .overlay(Capsule().strokeBorder(isDark ? .white.opacity(0.06) : Color.caribbeanBorderSubtle, lineWidth: isDark ? 1 : 0.5))
                )
                .caribbeanShadow(isDark ? .subtle : .medium)
            },
            content: {
                comparisonTable
            }
        )
        .onChange(of: isComparisonCollapsed) { _, newValue in
            if !newValue {
                AudioService.shared.playPanelExpand()
            }
        }
    }

    // MARK: - Comparison Table

    private var comparisonTable: some View {
        Group {
            if sizeClass == .compact {
                mobileComparisonCards
            } else {
                tabletComparisonTable
            }
        }
        .transition(.opacity.combined(with: .move(edge: .top)))
    }

    // MARK: - Mobile Comparison (Card per Tier)

    private var mobileComparisonCards: some View {
        let comparisonTiers: [(tier: MembershipTier, name: String, gradientColors: [Color])] = [
            (.free,  L.starter, MembershipTier.free.gradientColors),
            (.pro,   L.pro,     MembershipTier.pro.gradientColors),
            (.elite, L.elite,   MembershipTier.elite.gradientColors),
            (.royal, L.royal,   MembershipTier.royal.gradientColors),
        ]

        return VStack(spacing: 12) {
            ForEach(comparisonTiers, id: \.tier) { item in
                let isCurrent = tierManager.currentTier == item.tier
                    || (tierManager.currentTier == .trial && item.tier == .royal)
                let diff = TierManager.featureDiff(from: tierManager.currentTier, to: item.tier)

                VStack(alignment: .leading, spacing: 10) {
                    // Tier header
                    HStack {
                        Image(systemName: item.tier.iconName)
                            .font(.system(size: 14, weight: .semibold))
                        Text(item.name)
                            .font(.subheadline.bold())
                        Spacer()
                        if isCurrent {
                            Text("CURRENT")
                                .font(.system(size: 9, weight: .heavy))
                                .tracking(0.8)
                                .foregroundStyle(.white)
                                .padding(.horizontal, 8)
                                .padding(.vertical, 3)
                                .background(
                                    Capsule().fill(
                                        LinearGradient(
                                            colors: item.gradientColors,
                                            startPoint: .leading,
                                            endPoint: .trailing
                                        )
                                    )
                                )
                        }
                    }
                    .foregroundStyle(
                        LinearGradient(
                            colors: item.gradientColors,
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )

                    // Feature rows
                    ForEach(Self.comparisonFeatures) { feature in
                        let tierIndex = Self.tierColumnIndex(for: item.tier)
                        let value = feature.values[tierIndex]
                        let isAvailable = value != "—"
                        let isGained = diff.unlocked.contains(where: { $0.iconName == feature.icon })
                        let isLost = diff.locked.contains(where: { $0.iconName == feature.icon })

                        HStack(spacing: 8) {
                            Image(systemName: feature.icon)
                                .font(.system(size: 11))
                                .foregroundStyle(isAvailable
                                    ? (isDark ? .white.opacity(0.6) : .caribbeanPlum)
                                    : (isDark ? .white.opacity(0.2) : .caribbeanMist.opacity(0.4)))
                                .frame(width: 18)

                            Text(feature.name)
                                .font(.caption)
                                .foregroundStyle(isAvailable
                                    ? (isDark ? .white.opacity(0.8) : .caribbeanInk)
                                    : (isDark ? .white.opacity(0.3) : .caribbeanMist.opacity(0.5)))

                            Spacer()

                            // Gain/Loss badges (Story 5.5)
                            if !isCurrent {
                                if isGained {
                                    Text("NEW")
                                        .font(.system(size: 8, weight: .heavy))
                                        .tracking(0.5)
                                        .foregroundStyle(.white)
                                        .padding(.horizontal, 5)
                                        .padding(.vertical, 2)
                                        .background(Capsule().fill(.green.opacity(0.8)))
                                } else if isLost {
                                    Text("LOSE")
                                        .font(.system(size: 8, weight: .heavy))
                                        .tracking(0.5)
                                        .foregroundStyle(.white)
                                        .padding(.horizontal, 5)
                                        .padding(.vertical, 2)
                                        .background(Capsule().fill(.orange.opacity(0.8)))
                                }
                            }

                            // Value
                            if value == "✓" {
                                Image(systemName: "checkmark.circle.fill")
                                    .font(.system(size: 13))
                                    .foregroundStyle(.green)
                            } else if value == "—" {
                                Image(systemName: "xmark.circle")
                                    .font(.system(size: 13))
                                    .foregroundStyle(isDark ? .white.opacity(0.15) : .caribbeanMist.opacity(0.3))
                            } else {
                                Text(value)
                                    .font(.caption.bold())
                                    .foregroundStyle(isDark ? .white.opacity(0.7) : .caribbeanPlum)
                            }
                        }
                        .padding(.vertical, 2)
                    }
                }
                .padding(14)
                .background(
                    RoundedRectangle(cornerRadius: 16)
                        .fill(.ultraThinMaterial)
                        .overlay(
                            RoundedRectangle(cornerRadius: 16)
                                .strokeBorder(
                                    isCurrent
                                        ? LinearGradient(
                                            colors: item.gradientColors,
                                            startPoint: .topLeading,
                                            endPoint: .bottomTrailing
                                          )
                                        : LinearGradient(
                                            colors: [isDark ? .white.opacity(0.08) : Color.caribbeanBorderSubtle.opacity(0.5)],
                                            startPoint: .top,
                                            endPoint: .bottom
                                          ),
                                    lineWidth: isCurrent ? 1.5 : 1
                                )
                        )
                )
                .shadow(
                    color: isCurrent ? (item.gradientColors.first ?? .purple).opacity(0.15) : .clear,
                    radius: 12, y: 4
                )
            }
        }
    }

    // MARK: - Tablet Comparison (Traditional Table)

    private var tabletComparisonTable: some View {
        VStack(spacing: 0) {
            // Header row
            HStack(spacing: 0) {
                Text(L.feature)
                    .font(.footnote.bold())
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanMist)
                    .frame(maxWidth: .infinity, alignment: .leading)
                ForEach([L.free, L.pro, L.elite, L.royal], id: \.self) { name in
                    Text(name)
                        .font(.footnote.bold())
                        .foregroundStyle(isDark ? .white.opacity(0.6) : .caribbeanPlum)
                        .frame(maxWidth: .infinity)
                }
            }
            .padding(.horizontal, 14)
            .padding(.vertical, 12)

            Divider().background(isDark ? .white.opacity(0.08) : Color.caribbeanBorderSubtle)

            ForEach(Array(Self.comparisonFeatures.enumerated()), id: \.offset) { idx, feature in
                HStack(spacing: 0) {
                    HStack(spacing: 6) {
                        Image(systemName: feature.icon)
                            .font(.system(size: 11))
                            .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanMist)
                        Text(feature.name)
                            .font(.footnote)
                            .foregroundStyle(isDark ? .white.opacity(0.7) : .caribbeanInk)
                    }
                    .frame(maxWidth: .infinity, alignment: .leading)

                    ForEach(Array(feature.values.enumerated()), id: \.offset) { _, val in
                        Group {
                            if val == "✓" {
                                Image(systemName: "checkmark.circle.fill")
                                    .font(.footnote)
                                    .foregroundStyle(.green)
                            } else if val == "—" {
                                Image(systemName: "xmark.circle")
                                    .font(.footnote)
                                    .foregroundStyle(isDark ? .white.opacity(0.15) : .caribbeanMist.opacity(0.3))
                            } else {
                                Text(val)
                                    .font(.footnote)
                                    .foregroundStyle(isDark ? .white.opacity(0.6) : .caribbeanPlum)
                            }
                        }
                        .frame(maxWidth: .infinity)
                    }
                }
                .padding(.horizontal, 14)
                .padding(.vertical, 10)
                .background(idx.isMultiple(of: 2)
                    ? (isDark ? .white.opacity(0.03) : Color.caribbeanMist.opacity(0.04))
                    : .clear)
            }
        }
        .background(
            RoundedRectangle(cornerRadius: 18)
                .fill(.ultraThinMaterial)
                .overlay(
                    RoundedRectangle(cornerRadius: 18)
                        .strokeBorder(isDark ? .white.opacity(0.06) : Color.caribbeanBorderSubtle, lineWidth: isDark ? 1 : 0.5)
                )
        )
    }

    /// Maps a MembershipTier to the column index in comparisonFeatures.values
    private static func tierColumnIndex(for tier: MembershipTier) -> Int {
        switch tier {
        case .free:  return 0
        case .pro:   return 1
        case .elite: return 2
        case .royal, .trial: return 3
        }
    }

    // MARK: - Data

    struct TierData: Identifiable {
        let id: String
        let name: String
        let icon: String
        let gradientColors: [Color]
        let priceMonthly: Double
        let tagline: String
        let benefits: [(text: String, impact: String)]
        let cta: String
        let isCurrent: Bool
        let isHighlighted: Bool
        var badgeText: String? = nil
        var isDisabled: Bool = false
    }

    private var trialCard: TierData {
        let hasUsed = profile?.hasUsedTrial ?? false
        let isActive = tierManager.currentTier == .trial
        let daysLeft = profile?.trialDaysRemaining ?? 0
        let isQA = TierManager.isQAUser(profile: profile)

        if hasUsed && !isActive && !isQA {
            // Trial used and expired — show dimmed "Trial Completed" card
            return TierData(
                id: "trial", name: "Royal Trial", icon: "gift.fill",
                gradientColors: [Color(hex: "#94a3b8"), Color(hex: "#64748b")],
                priceMonthly: 0,
                tagline: L.trialCompletedTagline,
                benefits: [
                    ("Everything in Royal", "ultimate"),
                    ("All 12 Soundscapes", "ultimate"),
                    ("All visual themes", "ultimate"),
                    ("Reverts to Free after 14 days", "limited")
                ],
                cta: L.trialCompleted, isCurrent: false, isHighlighted: false,
                badgeText: nil,
                isDisabled: true
            )
        } else if isActive {
            // Trial currently active — show days remaining badge
            let badge = daysLeft == 1 ? "1 DAY LEFT" : "\(daysLeft) DAYS LEFT"
            return TierData(
                id: "trial", name: "Royal Trial", icon: "gift.fill",
                gradientColors: [Color(hex: "#fbbf24"), Color(hex: "#a855f7"), Color(hex: "#ec4899")],
                priceMonthly: 0,
                tagline: "2 weeks of Royal, on us",
                benefits: [
                    ("Everything in Royal", "ultimate"),
                    ("All 12 Soundscapes", "ultimate"),
                    ("All visual themes", "ultimate"),
                    ("Reverts to Free after 14 days", "limited")
                ],
                cta: L.currentPlan, isCurrent: true, isHighlighted: false,
                badgeText: badge
            )
        } else {
            // Trial not yet used — available to start
            return TierData(
                id: "trial", name: "Royal Trial", icon: "gift.fill",
                gradientColors: [Color(hex: "#fbbf24"), Color(hex: "#a855f7"), Color(hex: "#ec4899")],
                priceMonthly: 0,
                tagline: "2 weeks of Royal, on us",
                benefits: [
                    ("Everything in Royal", "ultimate"),
                    ("All 12 Soundscapes", "ultimate"),
                    ("All visual themes", "ultimate"),
                    ("Reverts to Free after 14 days", "limited")
                ],
                cta: L.trialStartFree, isCurrent: false, isHighlighted: false,
                badgeText: "2 WEEKS FREE"
            )
        }
    }

    private var tiers: [TierData] {
        let trial = trialCard
        // If trial is used and expired, move it to the end
        let trialUsedAndInactive = (profile?.hasUsedTrial ?? false) && tierManager.currentTier != .trial && !TierManager.isQAUser(profile: profile)
        var list: [TierData] = trialUsedAndInactive ? [] : [trial]
        list.append(contentsOf: [
            TierData(
                id: "free", name: L.starter, icon: "globe",
                gradientColors: [Color(hex: "#94a3b8"), Color(hex: "#64748b")],
                priceMonthly: 0,
                tagline: L.beginYourJourney,
                benefits: [
                    ("3 language pairs", "core"),
                    ("All game modes", "core"),
                    ("30 min/day practice", "limited")
                ],
                cta: L.getStarted, isCurrent: tierManager.currentTierId == "free", isHighlighted: false
            ),
            TierData(
                id: "pro", name: L.pro, icon: "bolt.fill",
                gradientColors: [Color(hex: "#a855f7"), Color(hex: "#d946ef"), Color(hex: "#ec4899")],
                priceMonthly: 9.99,
                tagline: L.masterLanguagesFaster,
                benefits: [
                    ("12 language pairs", "premium"),
                    ("Unlimited practice", "premium"),
                    ("1 Soundscape", "delight"),
                    ("6 Breathing Orbs", "delight"),
                    ("Offline access", "premium")
                ],
                cta: L.startPro, isCurrent: tierManager.currentTierId == "pro", isHighlighted: false
            ),
            TierData(
                id: "elite", name: L.elite, icon: "sparkles",
                gradientColors: [Color(hex: "#7c3aed"), Color(hex: "#9333ea"), Color(hex: "#a21caf")],
                priceMonthly: 19.99,
                tagline: L.unlockFullPotential,
                benefits: [
                    ("Everything in Pro", "inherit"),
                    ("25+ language pairs", "exclusive"),
                    ("8 Soundscapes", "exclusive"),
                    ("4 Quantum scenes", "exclusive"),
                    ("4 Nebula presets", "exclusive")
                ],
                cta: L.upgradeToElite, isCurrent: tierManager.currentTierId == "elite", isHighlighted: true
            ),
            TierData(
                id: "royal", name: L.royal, icon: "crown.fill",
                gradientColors: [Color(hex: "#fbbf24"), Color(hex: "#f97316"), Color(hex: "#f43f5e")],
                priceMonthly: 99.99,
                tagline: L.ultimateExperience,
                benefits: [
                    ("Everything in Elite", "inherit"),
                    ("All 12 Soundscapes", "ultimate"),
                    ("6 Quantum scenes", "ultimate"),
                    ("6 Nebula presets", "ultimate"),
                    ("Priority support", "ultimate")
                ],
                cta: L.ascendToRoyal, isCurrent: tierManager.currentTierId == "royal", isHighlighted: false
            )
        ])
        if trialUsedAndInactive {
            list.append(trial)
        }
        return list
    }

    struct ComparisonFeature: Identifiable {
        let name: String
        let icon: String
        let values: [String]
        var id: String { name }
    }

    static let comparisonFeatures: [ComparisonFeature] = [
        .init(name: "Language Pairs",  icon: "globe",               values: ["3 pairs", "12 pairs", "25 pairs", "25 pairs"]),
        .init(name: "Practice Time",   icon: "infinity",            values: ["30 min/day", "Unlimited", "Unlimited", "Unlimited"]),
        .init(name: "Game Modes",      icon: "gamecontroller",      values: ["All 3", "All 3", "All 3", "All 3"]),
        .init(name: "Soundscapes",     icon: "headphones",          values: ["—", "1", "8", "All 12"]),
        .init(name: "Breathing Orbs",  icon: "scope",               values: ["—", "6 schemes", "6 schemes", "6 schemes"]),
        .init(name: "Quantum Flow",    icon: "waveform.path.ecg",   values: ["—", "—", "4 scenes", "6 scenes"]),
        .init(name: "Nebula Drift",    icon: "cloud.fog.fill",      values: ["—", "—", "4 presets", "6 presets"]),
        .init(name: "Offline Mode",    icon: "wifi.slash",          values: ["—", "✓", "✓", "✓"]),
    ]
}

// MARK: - Tier Card

struct TierCardView: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization
    @Environment(TierManager.self) private var tierManager
    @Environment(SubscriptionManager.self) private var subscriptionManager
    @Environment(\.revenueCatService) private var revenueCatService
    @Environment(\.authService) private var authService
    @Query private var profiles: [UserProfile]
    private var profile: UserProfile? { profiles.first }
    private var L: AppStrings { localization.strings }
    private var isDark: Bool { colorScheme == .dark }

    let tier: MembershipView.TierData
    let index: Int
    @Binding var selectedTierId: String
    var paywallContext: PaywallContext = .membershipTab

    @State private var isHovered = false
    @State private var showTrialConfirmation = false
    @State private var isCardPressed = false
    @State private var priceRevealed = false
    @State private var dailCostRevealed = false
    @State private var taglineCharCount = 0
    @State private var gradientPhase: CGFloat = 0
    @State private var buttonCompressed = false
    @State private var buttonShimmerPhase: CGFloat = 0
    @State private var currentBadgePulse = false
    @State private var showAuthGate = false
    @State private var pendingPurchaseTier: MembershipTier?

    /// Whether this card is the unlocking tier for a feature gate context.
    private var isFeatureGateTarget: Bool {
        guard case .featureGate(let feature) = paywallContext else { return false }
        return membershipTier == feature.minimumTier
    }

    /// Whether this card should be dimmed (feature gate, but not the target).
    private var isFeatureGateDimmed: Bool {
        guard case .featureGate = paywallContext else { return false }
        return !isFeatureGateTarget
    }

    private var price: Double {
        tier.priceMonthly
    }

    private var isSelected: Bool {
        selectedTierId == tier.id
    }

    /// Whether this card is the user's actual active tier (not just browsed).
    private var isActuallyCurrent: Bool {
        tier.isCurrent
    }

    private var isRoyal: Bool {
        tier.id == "royal"
    }

    /// During a purchase, dim all cards except the one being purchased.
    private var purchaseDimmingOpacity: Double {
        guard subscriptionManager.isPurchasing else { return 1.0 }
        return 0.6
    }

    // MARK: Story 3.3 — Upgrade / Downgrade context

    private var changeDirection: SubscriptionManager.TierChangeDirection {
        subscriptionManager.tierChangeDirection(to: membershipTier)
    }

    private var tierChangeAccessibilityHint: String {
        switch changeDirection {
        case .upgrade: return "Double-tap to upgrade to \(membershipTier.displayName)"
        case .downgrade: return "Double-tap to switch to \(membershipTier.displayName)"
        case .sameOrFree: return "Double-tap to subscribe"
        }
    }

    @ViewBuilder
    private var featureComparisonView: some View {
        let diff = TierManager.featureDiff(
            from: subscriptionManager.currentSubscribedTier ?? .free,
            to: membershipTier
        )
        if !diff.unlocked.isEmpty || !diff.locked.isEmpty {
            VStack(alignment: .leading, spacing: 6) {
                ForEach(diff.unlocked, id: \.self) { feature in
                    HStack(spacing: 6) {
                        Image(systemName: "plus.circle.fill")
                            .font(.caption2)
                            .foregroundStyle(.green)
                        Text(feature.displayName)
                            .font(.caption)
                            .foregroundStyle(isDark ? .white.opacity(0.75) : .caribbeanInk.opacity(0.8))
                    }
                }
                ForEach(diff.locked, id: \.self) { feature in
                    HStack(spacing: 6) {
                        Image(systemName: "minus.circle.fill")
                            .font(.caption2)
                            .foregroundStyle(.orange.opacity(0.8))
                        Text(feature.displayName)
                            .font(.caption)
                            .foregroundStyle(isDark ? .white.opacity(0.55) : .caribbeanInk.opacity(0.55))
                    }
                }
            }
            .padding(.vertical, 4)
        }
    }

    var body: some View {
        cardContent
    }

    private var cardContent: some View {
        VStack(alignment: .leading, spacing: 14) {
            // Royal exclusive banner
            if isRoyal {
                HStack(spacing: 4) {
                    Image(systemName: "diamond.fill")
                        .font(.system(size: 8))
                    Text("MOST EXCLUSIVE")
                        .font(.system(size: 9, weight: .heavy))
                        .tracking(1.5)
                    Image(systemName: "diamond.fill")
                        .font(.system(size: 8))
                }
                .foregroundStyle(
                    LinearGradient(
                        colors: [Color(hex: "#fbbf24"), .white, Color(hex: "#fbbf24")],
                        startPoint: .leading, endPoint: .trailing
                    )
                )
                .frame(maxWidth: .infinity)
                .padding(.vertical, 6)
                .background(
                    Capsule().fill(
                        LinearGradient(
                            colors: [Color(hex: "#fbbf24").opacity(0.15), Color(hex: "#f97316").opacity(0.1)],
                            startPoint: .leading, endPoint: .trailing
                        )
                    )
                    .overlay(
                        Capsule().strokeBorder(
                            LinearGradient(
                                colors: [Color(hex: "#fbbf24").opacity(0.4), Color(hex: "#f97316").opacity(0.3)],
                                startPoint: .leading, endPoint: .trailing
                            ),
                            lineWidth: 0.5
                        )
                    )
                )
            }

            // Header
            HStack {
                Image(systemName: tier.icon)
                    .font(isRoyal ? .title2 : .title3)
                    .foregroundStyle(
                        LinearGradient(
                            colors: tier.gradientColors,
                            startPoint: .topLeading, endPoint: .bottomTrailing
                        )
                    )
                    .shadow(color: isRoyal ? Color(hex: "#fbbf24").opacity(0.5) : .clear, radius: 6)
                VStack(alignment: .leading, spacing: 2) {
                    Text(tier.name)
                        .font(isRoyal ? .headline.weight(.heavy) : .headline)
                        .foregroundStyle(
                            LinearGradient(
                                colors: tier.gradientColors,
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                    // Story 2.2: Typewriter character reveal for tagline
                    Text(String(tier.tagline.prefix(taglineCharCount)))
                        .font(.caption)
                        .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanPlum)
                        .frame(height: 16, alignment: .leading)
                }

                Spacer()

                if let badge = tier.badgeText {
                    Text(badge)
                        .font(.system(size: 9, weight: .heavy))
                        .tracking(1)
                        .foregroundStyle(.white)
                        .padding(.horizontal, 8)
                        .padding(.vertical, 4)
                        .background(
                            Capsule()
                                .fill(
                                    LinearGradient(
                                        colors: tier.gradientColors,
                                        startPoint: .leading, endPoint: .trailing
                                    )
                                )
                        )
                } else if isActuallyCurrent {
                    Text("CURRENT")
                        .font(.system(size: 9, weight: .heavy))
                        .tracking(1)
                        .foregroundStyle(.white)
                        .padding(.horizontal, 8)
                        .padding(.vertical, 4)
                        .background(
                            Capsule()
                                .fill(
                                    LinearGradient(
                                        colors: tier.gradientColors,
                                        startPoint: .leading, endPoint: .trailing
                                    )
                                )
                        )
                        .scaleEffect(currentBadgePulse ? 1.06 : 1.0)
                        .opacity(currentBadgePulse ? 1.0 : 0.85)
                        .onAppear {
                            withAnimation(.easeInOut(duration: 1.8).repeatForever(autoreverses: true)) {
                                currentBadgePulse = true
                            }
                        }
                } else if tier.isHighlighted {
                    Text(L.popular)
                        .font(.system(size: 9, weight: .heavy))
                        .tracking(1)
                        .foregroundStyle(.white)
                        .padding(.horizontal, 8)
                        .padding(.vertical, 4)
                        .background(
                            Capsule()
                                .fill(
                                    LinearGradient(
                                        colors: tier.gradientColors,
                                        startPoint: .leading, endPoint: .trailing
                                    )
                                )
                        )
                }
            }

            // Price (Story 2.2 — RC offerings with animations)
            pricingSection

            // Story 5.1 / 5.3: Renewal or expiry date for active subscription
            if isActuallyCurrent, let renewalDate = subscriptionManager.nextRenewalDateString {
                if subscriptionManager.isCancelling {
                    Text("Access until \(renewalDate)")
                        .font(.caption2)
                        .foregroundStyle(Color(red: 0.4, green: 0.6, blue: 0.95).opacity(0.85))
                        .contentTransition(.numericText())
                } else {
                    Text("Renews on \(renewalDate)")
                        .font(.caption2)
                        .foregroundStyle(isDark ? .white.opacity(0.45) : .secondary)
                        .contentTransition(.numericText())
                }
            }

            // Story 5.6: Family Sharing indicator
            if isActuallyCurrent, subscriptionManager.isFamilyShared {
                HStack(spacing: 4) {
                    Image(systemName: "person.2.circle")
                        .font(.caption2)
                    Text("Shared with you via Family Sharing")
                        .font(.caption2)
                }
                .foregroundStyle(.purple.opacity(0.8))
                .accessibilityElement(children: .combine)
                .accessibilityLabel("Shared with you via Family Sharing")
            }

            // Benefits
            VStack(alignment: .leading, spacing: 6) {
                ForEach(Array(tier.benefits.enumerated()), id: \.offset) { _, benefit in
                    HStack(spacing: 8) {
                        Image(systemName: benefitIcon(benefit.impact))
                            .font(.caption2)
                            .foregroundStyle(benefitColor(benefit.impact))
                        Text(benefit.text)
                            .font(.subheadline)
                            .foregroundStyle(isDark ? .white.opacity(0.8) : .caribbeanInk)
                    }
                }
            }

            // Story 3.3: Feature comparison for upgrade/downgrade
            if !isActuallyCurrent, !tier.isDisabled {
                featureComparisonView
            }

            // CTA button (Story 3.1: RevenueCat purchase flow)
            Button {
                guard !isActuallyCurrent, !tier.isDisabled else { return }
                HapticsService.shared.buttonPress()
                AudioService.shared.playTierSelect()
                // Story 6.4: paywall_tier_selected
                PaywallAnalytics.trackTierSelected(
                    context: paywallContext,
                    selectedTier: tier.id,
                    currentTier: tierManager.currentTierId
                )
                if tier.id == "trial" {
                    if tierManager.startTrial(profile: profile) {
                        selectedTierId = "trial"
                        showTrialConfirmation = true
                    }
                } else if tier.id == "free" {
                    withAnimation(.spring(response: 0.30, dampingFraction: 0.50)) {
                        selectedTierId = tier.id
                    }
                    tierManager.selectTier(tier.id, profile: profile)
                } else {
                    // Paid tier — Story 3.5: Auth gate for anonymous users
                    let mt = membershipTier
                    if !authService.isAuthenticated && !authService.isGuestMode {
                        pendingPurchaseTier = mt
                        showAuthGate = true
                        return
                    }
                    startPurchaseFlow(for: mt)
                }
            } label: {
                HStack(spacing: 6) {
                    if isActuallyCurrent {
                        Image(systemName: "checkmark.circle.fill")
                            .font(.caption)
                            .transition(.scale.combined(with: .opacity))
                    }
                    if isActuallyCurrent && subscriptionManager.isFamilyShared {
                        // Story 5.6: Family sharing label
                        Text("Your plan: \(tier.name) via Family Sharing")
                    } else if isActuallyCurrent {
                        Text(L.currentPlan)
                    } else if price > 0 {
                        // EU CRD Art.8(2): button must indicate obligation to pay
                        // Story 2.4: CTA adapts to offer type
                        VStack(spacing: 2) {
                            Text(ctaLabel)
                            Text(ctaPriceSubtext)
                                .font(.caption2)
                                .opacity(0.8)
                        }
                    } else {
                        Text(tier.cta)
                    }
                }
                .font(.subheadline.bold())
                .foregroundStyle(.white)
                .frame(maxWidth: .infinity)
                .padding(.vertical, 12)
                .background(
                    Capsule()
                        .fill(
                            isActuallyCurrent
                                ? AnyShapeStyle(
                                    LinearGradient(
                                        colors: tier.gradientColors.map { $0.opacity(0.35) },
                                        startPoint: .leading, endPoint: .trailing
                                    )
                                )
                                : AnyShapeStyle(
                                    LinearGradient(
                                        colors: tier.gradientColors,
                                        startPoint: .leading, endPoint: .trailing
                                    )
                                )
                        )
                        .overlay(
                            Capsule()
                                .strokeBorder(
                                    LinearGradient(
                                        colors: tier.gradientColors,
                                        startPoint: .leading, endPoint: .trailing
                                    ),
                                    lineWidth: isActuallyCurrent ? 1.5 : 0
                                )
                        )
                        // Story 3.1: Shimmer sweep overlay
                        .overlay(
                            GeometryReader { geo in
                                Capsule()
                                    .fill(
                                        LinearGradient(
                                            colors: [.clear, .white.opacity(0.3), .clear],
                                            startPoint: .leading, endPoint: .trailing
                                        )
                                    )
                                    .frame(width: geo.size.width * 0.3)
                                    .offset(x: geo.size.width * (buttonShimmerPhase - 0.15))
                                    .opacity(buttonShimmerPhase > 0 ? 1 : 0)
                            }
                            .clipShape(Capsule())
                        )
                )
                // Story 3.1: Button compression micro-transition
                .scaleEffect(buttonCompressed ? 0.96 : 1.0)
                .animation(.spring(response: 0.15, dampingFraction: 0.6), value: buttonCompressed)
            }
            .buttonStyle(PremiumCTAButtonStyle(glowColor: tier.gradientColors.first ?? .purple))
            .disabled(isActuallyCurrent || tier.isDisabled || subscriptionManager.isPurchasing)
            .opacity(isActuallyCurrent ? 0.8 : (tier.isDisabled ? 0.3 : 1.0))

            // Story 2.4: "No commitment" reassurance + renewal price
            if !isActuallyCurrent && !tier.isDisabled && price > 0 {
                if let introOffer = subscriptionManager.offeringIntroOffer(for: membershipTier) {
                    VStack(spacing: 2) {
                        Text("No commitment. Cancel anytime.")
                            .font(.caption2)
                            .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
                        if introOffer.paymentMode == .freeTrial {
                            Text("Free for \(introOffer.period), then \(subscriptionManager.offeringPrice(for: membershipTier))/month")
                                .font(.caption2)
                                .foregroundStyle(isDark ? .white.opacity(0.35) : .caribbeanMist.opacity(0.8))
                        }
                    }
                    .frame(maxWidth: .infinity)
                } else {
                    Text("No commitment. Cancel anytime.")
                        .font(.caption2)
                        .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
                }
            }

            // Story 3.3: Upgrade/downgrade context message
            if !isActuallyCurrent, !tier.isDisabled, price > 0 {
                switch changeDirection {
                case .upgrade:
                    Text("Apple will immediately upgrade your plan and prorate the remaining balance.")
                        .font(.caption2)
                        .foregroundStyle(isDark ? .green.opacity(0.6) : .green.opacity(0.7))
                        .multilineTextAlignment(.center)
                        .frame(maxWidth: .infinity)
                case .downgrade:
                    if let renewalDate = subscriptionManager.nextRenewalDateString {
                        Text("Your current access continues until \(renewalDate), then you\u{2019}ll switch.")
                            .font(.caption2)
                            .foregroundStyle(isDark ? .orange.opacity(0.6) : .orange.opacity(0.7))
                            .multilineTextAlignment(.center)
                            .frame(maxWidth: .infinity)
                    }
                case .sameOrFree:
                    EmptyView()
                }
            }
        }
        .padding(18)
        .overlay(alignment: .topTrailing) {
            // Story 2.5: "Unlocks [Feature]" badge for feature gate context
            if isFeatureGateTarget, case .featureGate(let feature) = paywallContext {
                Text("Unlocks \(feature.displayName)")
                    .font(.system(size: 10, weight: .bold))
                    .foregroundStyle(.white)
                    .padding(.horizontal, 8)
                    .padding(.vertical, 4)
                    .background(
                        Capsule().fill(
                            LinearGradient(
                                colors: tier.gradientColors,
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                    )
                    .padding(12)
            }
        }
        .opacity(isFeatureGateDimmed ? 0.7 : 1.0)
        // Story 3.1: Dimming during purchase (other cards fade to 60%)
        .opacity(purchaseDimmingOpacity)
        // Story 3.1: Cancel highlight — gentle glow on the card user was considering
        .overlay(
            RoundedRectangle(cornerRadius: 22)
                .strokeBorder(
                    LinearGradient(colors: tier.gradientColors, startPoint: .topLeading, endPoint: .bottomTrailing),
                    lineWidth: 2
                )
                .opacity(subscriptionManager.cancelHighlightTier == membershipTier ? 1 : 0)
                .animation(.easeInOut(duration: 0.3), value: subscriptionManager.cancelHighlightTier)
        )
        .background(
            ZStack {
                // Royal inner golden glow
                if isRoyal {
                    RoundedRectangle(cornerRadius: 22)
                        .fill(
                            RadialGradient(
                                colors: [Color(hex: "#fbbf24").opacity(0.08), .clear],
                                center: .topTrailing,
                                startRadius: 0,
                                endRadius: 200
                            )
                        )
                }
                RoundedRectangle(cornerRadius: 22)
                    .fill(.ultraThinMaterial)
                    .opacity(isActuallyCurrent ? 0.85 : 1.0)
                    .overlay(
                        RoundedRectangle(cornerRadius: 22)
                            .strokeBorder(
                                (tier.isHighlighted || isActuallyCurrent || isRoyal)
                                    ? LinearGradient(colors: tier.gradientColors, startPoint: .topLeading, endPoint: .bottomTrailing)
                                    : LinearGradient(colors: [isDark ? .white.opacity(0.06) : Color.caribbeanBorderSubtle], startPoint: .top, endPoint: .bottom),
                                lineWidth: (tier.isHighlighted || isActuallyCurrent || isRoyal) ? 1.5 : (isDark ? 1 : 0.5)
                            )
                    )
            }
            .shadow(
                color: (tier.isHighlighted || isActuallyCurrent || isRoyal) ? tier.gradientColors.first!.opacity(isRoyal ? 0.3 : 0.2) : .clear,
                radius: isCardPressed ? 28 : 20, y: isCardPressed ? 3 : 8
            )
        )
        .overlay(alignment: .top) {
            // Royal crown shimmer accent
            if isRoyal {
                RoundedRectangle(cornerRadius: 22)
                    .strokeBorder(
                        AngularGradient(
                            stops: [
                                .init(color: Color(hex: "#fbbf24").opacity(0.0), location: 0.0),
                                .init(color: Color(hex: "#fbbf24").opacity(0.5), location: 0.15),
                                .init(color: Color(hex: "#f97316").opacity(0.3), location: 0.3),
                                .init(color: Color(hex: "#fbbf24").opacity(0.0), location: 0.5),
                                .init(color: Color(hex: "#f43f5e").opacity(0.3), location: 0.7),
                                .init(color: Color(hex: "#fbbf24").opacity(0.5), location: 0.85),
                                .init(color: Color(hex: "#fbbf24").opacity(0.0), location: 1.0),
                            ],
                            center: .center
                        ),
                        lineWidth: 2
                    )
                    .allowsHitTesting(false)
            }
        }
        .scaleEffect(isCardPressed ? 0.98 : 1.0)
        .animation(.spring(response: 0.3, dampingFraction: 0.65), value: isCardPressed)
        .animation(.spring(response: 0.3, dampingFraction: 0.65), value: isActuallyCurrent)
        .onLongPressGesture(minimumDuration: .infinity, pressing: { pressing in
            isCardPressed = pressing
        }, perform: {})
        .opacity(tier.isDisabled ? 0.5 : 1.0)
        .accessibilityHint(isActuallyCurrent ? "This is your current plan" : tierChangeAccessibilityHint)
        // Story 2.2: Staggered reveal animations
        .onAppear {
            animatePriceReveal()
            animateTypewriter()
        }

        .fullScreenCover(isPresented: $showTrialConfirmation) {
            TrialConfirmationView()
        }
        // Story 3.5: Pre-purchase auth gate for anonymous users
        .sheet(isPresented: $showAuthGate) {
            PrePurchaseAuthGateView(
                onAuthenticated: {
                    showAuthGate = false
                    if let tier = pendingPurchaseTier {
                        // Seamless resume — purchase flow starts after auth
                        Task {
                            // Brief crossfade delay (300ms)
                            try? await Task.sleep(for: .milliseconds(300))
                            startPurchaseFlow(for: tier)
                            pendingPurchaseTier = nil
                        }
                    }
                },
                onContinueWithoutAccount: {
                    showAuthGate = false
                    if let tier = pendingPurchaseTier {
                        startPurchaseFlow(for: tier)
                        pendingPurchaseTier = nil
                    }
                },
                onDismiss: {
                    showAuthGate = false
                    pendingPurchaseTier = nil
                }
            )
            .presentationDetents([.medium, .large])
            .presentationDragIndicator(.visible)
        }
    }

    // MARK: - CTA (Story 2.4)

    private var ctaLabel: String {
        // Story 3.3: Contextual verb for subscribed users
        switch changeDirection {
        case .upgrade:
            return "Upgrade to \(membershipTier.displayName)"
        case .downgrade:
            return "Switch to \(membershipTier.displayName)"
        case .sameOrFree:
            break
        }
        if let introOffer = subscriptionManager.offeringIntroOffer(for: membershipTier) {
            switch introOffer.paymentMode {
            case .freeTrial:
                return "Start Free Trial"
            case .payAsYouGo:
                return "Try for \(introOffer.priceString)"
            case .payUpFront:
                return tier.cta
            }
        }
        return tier.cta
    }

    private var ctaPriceSubtext: String {
        if let introOffer = subscriptionManager.offeringIntroOffer(for: membershipTier) {
            switch introOffer.paymentMode {
            case .freeTrial:
                return "\(introOffer.period) free, then \(subscriptionManager.offeringPrice(for: membershipTier))/mo"
            case .payAsYouGo:
                return "\(introOffer.priceString) for \(introOffer.period), then \(subscriptionManager.offeringPrice(for: membershipTier))/mo"
            case .payUpFront:
                return subscriptionManager.offeringPrice(for: membershipTier) + L.perMonth
            }
        }
        if let promo = subscriptionManager.bestPromoOffer(for: membershipTier) {
            return "\(promo.priceString) for \(promo.period), then \(subscriptionManager.offeringPrice(for: membershipTier))/mo"
        }
        return subscriptionManager.offeringPrice(for: membershipTier) + L.perMonth
    }

    // MARK: - Purchase Flow (Story 3.5)

    private func startPurchaseFlow(for mt: MembershipTier) {
        // Button compression micro-transition
        withAnimation(.spring(response: 0.15, dampingFraction: 0.6)) {
            buttonCompressed = true
        }
        HapticsService.shared.medium()
        // Shimmer sweep then purchase
        withAnimation(.easeInOut(duration: 0.35)) {
            buttonShimmerPhase = 1.0
        }
        // Story 6.4: paywall_purchase_initiated
        let hasTrial = subscriptionManager.offeringIntroOffer(for: mt)?.paymentMode == .freeTrial
        PaywallAnalytics.trackPurchaseInitiated(
            context: paywallContext,
            tier: mt.rawValue,
            isTrial: hasTrial,
            offeringId: subscriptionManager.currentOffering?.id
        )
        let previousTier = tierManager.currentTierId
        Task {
            try? await Task.sleep(for: .milliseconds(250))
            buttonCompressed = false
            buttonShimmerPhase = 0
            let outcome = await subscriptionManager.purchasePackage(for: mt, using: revenueCatService)
            switch outcome {
            case .success(let purchasedTier):
                // Story 6.4: paywall_purchase_completed
                PaywallAnalytics.trackPurchaseCompleted(
                    context: paywallContext,
                    tier: purchasedTier.rawValue,
                    isUpgrade: purchasedTier.rawValue != previousTier
                )
                withAnimation(.easeOut(duration: 0.2)) {
                    subscriptionManager.showGoldenFlash = true
                }
                try? await Task.sleep(for: .milliseconds(200))
                subscriptionManager.showGoldenFlash = false
                withAnimation(.spring(response: 0.30, dampingFraction: 0.50)) {
                    selectedTierId = purchasedTier.rawValue
                }
                tierManager.selectTier(purchasedTier.rawValue, profile: profile)
            case .cancelled:
                // Story 6.4: paywall_purchase_cancelled
                PaywallAnalytics.trackPurchaseCancelled(context: paywallContext, tier: mt.rawValue)
            case .deferred:
                break
            case .error(let message):
                // Story 6.4: paywall_purchase_failed
                PaywallAnalytics.trackPurchaseFailed(context: paywallContext, tier: mt.rawValue, errorCode: message)
            }
        }
    }

    // MARK: - Animation (Story 2.2)

    private func animatePriceReveal() {
        // Price scales in over 600ms
        withAnimation(.spring(response: 0.6, dampingFraction: 0.75).delay(0.15)) {
            priceRevealed = true
        }
        // Daily cost slides up 300ms after price
        withAnimation(.spring(response: 0.5, dampingFraction: 0.7).delay(0.45)) {
            dailCostRevealed = true
        }
    }

    private func animateTypewriter() {
        let charCount = tier.tagline.count
        guard charCount > 0 else { return }
        // 20ms per character, starting at 100ms delay
        for i in 1...charCount {
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.1 + Double(i) * 0.02) {
                taglineCharCount = i
            }
        }
    }

    // MARK: - Pricing Section (Story 2.2)

    private var membershipTier: MembershipTier {
        MembershipTier(tierId: tier.id)
    }

    @ViewBuilder
    private var pricingSection: some View {
        let tierEnum = membershipTier
        VStack(alignment: .leading, spacing: 4) {
            if price == 0 {
                Text(L.free)
                    .font(.system(size: 28, weight: .black))
                    .foregroundStyle(
                        LinearGradient(
                            colors: tier.gradientColors,
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
            } else if !subscriptionManager.hasPriceAvailable(for: tierEnum)
                        && subscriptionManager.offeringsState != .loading {
                // Price unavailable fallback
                VStack(spacing: 8) {
                    Text("Price unavailable")
                        .font(.subheadline)
                        .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanMist)
                    Button {
                        Task {
                            await subscriptionManager.fetchOfferings(from: revenueCatService, forceRefresh: true)
                        }
                    } label: {
                        Label("Retry", systemImage: "arrow.clockwise")
                            .font(.caption.bold())
                    }
                    .buttonStyle(.bordered)
                    .tint(tier.gradientColors.first ?? .purple)
                }
            } else {
                // Main price with intro offer support
                HStack(alignment: .firstTextBaseline, spacing: 4) {
                    if let introOffer = subscriptionManager.offeringIntroOffer(for: tierEnum) {
                        // Strikethrough original price
                        Text(subscriptionManager.offeringPrice(for: tierEnum))
                            .font(.system(size: 18, weight: .bold))
                            .strikethrough(true, color: isDark ? .white.opacity(0.5) : .caribbeanMist)
                            .foregroundStyle(isDark ? .white.opacity(0.35) : .caribbeanMist)

                        Text(introOffer.priceString)
                            .font(.system(size: 28, weight: .black))
                            .foregroundStyle(
                                LinearGradient(
                                    colors: tier.gradientColors,
                                    startPoint: .leading,
                                    endPoint: .trailing
                                )
                            )
                            .opacity(priceRevealed ? 1 : 0)
                            .scaleEffect(priceRevealed ? 1.0 : 0.8)
                    } else if let promoOffer = subscriptionManager.bestPromoOffer(for: tierEnum) {
                        // Strikethrough original price with promotional offer (Story 3.4)
                        Text(subscriptionManager.offeringPrice(for: tierEnum))
                            .font(.system(size: 18, weight: .bold))
                            .strikethrough(true, color: isDark ? .white.opacity(0.5) : .caribbeanMist)
                            .foregroundStyle(isDark ? .white.opacity(0.35) : .caribbeanMist)

                        Text(promoOffer.priceString)
                            .font(.system(size: 28, weight: .black))
                            .foregroundStyle(
                                LinearGradient(
                                    colors: tier.gradientColors,
                                    startPoint: .leading,
                                    endPoint: .trailing
                                )
                            )
                            .opacity(priceRevealed ? 1 : 0)
                            .scaleEffect(priceRevealed ? 1.0 : 0.8)
                    } else {
                        Text(subscriptionManager.offeringPrice(for: tierEnum))
                            .font(.system(size: 28, weight: .black))
                            .foregroundStyle(
                                LinearGradient(
                                    colors: tier.gradientColors,
                                    startPoint: .leading,
                                    endPoint: .trailing
                                )
                            )
                            .opacity(priceRevealed ? 1 : 0)
                            .scaleEffect(priceRevealed ? 1.0 : 0.8)
                    }

                    Text(introOfferPeriodLabel ?? L.perMonth)
                        .font(.subheadline)
                        .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
                }

                // Daily cost line (appears 300ms after price)
                if let daily = subscriptionManager.dailyCost(for: tierEnum) {
                    Text("That's just \(daily)/day")
                        .font(.caption)
                        .foregroundStyle(isDark ? .white.opacity(0.45) : .caribbeanPlum.opacity(0.7))
                        .offset(y: dailCostRevealed ? 0 : 8)
                        .opacity(dailCostRevealed ? 1 : 0)
                }
            }
        }
        .accessibilityElement(children: .combine)
        .accessibilityLabel(priceAccessibilityLabel)
    }

    private var introOfferPeriodLabel: String? {
        if let offer = subscriptionManager.offeringIntroOffer(for: membershipTier) {
            switch offer.paymentMode {
            case .freeTrial:
                return "/ first \(offer.period)"
            default:
                return "/ first \(offer.period)"
            }
        }
        if let promo = subscriptionManager.bestPromoOffer(for: membershipTier) {
            return "/ \(promo.period)"
        }
        return nil
    }

    private var priceAccessibilityLabel: String {
        let tierName = tier.name
        let priceStr = price == 0 ? "Free" : subscriptionManager.offeringPrice(for: membershipTier) + " per month"
        return "\(tierName). \(priceStr). \(tier.tagline)"
    }

    private func benefitIcon(_ impact: String) -> String {
        switch impact {
        case "core": "checkmark.circle.fill"
        case "limited": "minus.circle.fill"
        case "premium": "star.fill"
        case "delight": "paintpalette.fill"
        case "exclusive": "sparkle"
        case "inherit": "arrow.right.circle.fill"
        case "ultimate": "crown.fill"
        default: "checkmark"
        }
    }

    private func benefitColor(_ impact: String) -> Color {
        switch impact {
        case "core": .green
        case "limited": .yellow.opacity(0.7)
        case "premium": .purple
        case "delight": .pink
        case "exclusive": .cyan
        case "inherit": isDark ? .white.opacity(0.4) : .caribbeanMist
        case "ultimate": .orange
        default: isDark ? .white.opacity(0.5) : .caribbeanPlum
        }
    }
}

// MARK: - Purchase Error Banner (Story 3.1)

/// A banner that slides in from the top on purchase failure
/// and auto-dismisses after 5 seconds or on tap.
private struct PurchaseErrorBanner: View {
    let message: String
    let onDismiss: () -> Void

    var body: some View {
        HStack(spacing: 10) {
            Image(systemName: "exclamationmark.triangle.fill")
                .font(.subheadline)
                .foregroundStyle(.yellow)
            Text(message)
                .font(.subheadline)
                .foregroundStyle(.white)
            Spacer()
            Button {
                onDismiss()
            } label: {
                Image(systemName: "xmark")
                    .font(.caption.bold())
                    .foregroundStyle(.white.opacity(0.6))
            }
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 12)
        .background(
            RoundedRectangle(cornerRadius: 14)
                .fill(.ultraThinMaterial)
                .overlay(
                    RoundedRectangle(cornerRadius: 14)
                        .strokeBorder(.red.opacity(0.3), lineWidth: 1)
                )
        )
        .padding(.horizontal, 16)
        .onTapGesture { onDismiss() }
        .task {
            try? await Task.sleep(for: .seconds(5))
            onDismiss()
        }
        .accessibilityLabel("Purchase error: \(message). Tap to dismiss.")
    }
}

// MARK: - Deferred Purchase Message (Story 3.1)

/// Friendly overlay shown when a purchase requires approval (Ask to Buy).
private struct DeferredPurchaseMessage: View {
    let onDismiss: () -> Void

    var body: some View {
        VStack(spacing: 16) {
            Image(systemName: "clock.badge.checkmark")
                .font(.system(size: 36))
                .foregroundStyle(.cyan)

            Text("Purchase Pending")
                .font(.headline)
                .foregroundStyle(.white)

            Text("Ask the account holder to approve in Screen Time.")
                .font(.subheadline)
                .foregroundStyle(.white.opacity(0.7))
                .multilineTextAlignment(.center)

            Button("OK") { onDismiss() }
                .font(.subheadline.bold())
                .foregroundStyle(.white)
                .padding(.horizontal, 32)
                .padding(.vertical, 10)
                .background(Capsule().fill(.ultraThinMaterial))
        }
        .padding(28)
        .background(
            RoundedRectangle(cornerRadius: 22)
                .fill(.ultraThinMaterial)
                .overlay(
                    RoundedRectangle(cornerRadius: 22)
                        .strokeBorder(.cyan.opacity(0.3), lineWidth: 1)
                )
        )
        .padding(.horizontal, 40)
        .accessibilityElement(children: .combine)
        .accessibilityLabel("Purchase pending. Ask the account holder to approve in Screen Time.")
    }
}

// MARK: - Restore Banner (Story 3.2)

/// A banner that slides from the top showing restore results.
/// Auto-dismisses after 5 seconds for success, stays for errors.
private struct RestoreBanner: View {
    let message: String
    let isSuccess: Bool
    let onDismiss: () -> Void

    var body: some View {
        HStack(spacing: 10) {
            Image(systemName: isSuccess ? "checkmark.circle.fill" : "info.circle.fill")
                .font(.subheadline)
                .foregroundStyle(isSuccess ? .green : .yellow)
            Text(message)
                .font(.subheadline)
                .foregroundStyle(.white)
                .lineLimit(3)
            Spacer()
            Button { onDismiss() } label: {
                Image(systemName: "xmark")
                    .font(.caption.bold())
                    .foregroundStyle(.white.opacity(0.6))
            }
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 12)
        .background(
            RoundedRectangle(cornerRadius: 14)
                .fill(.ultraThinMaterial)
                .overlay(
                    RoundedRectangle(cornerRadius: 14)
                        .strokeBorder(isSuccess ? .green.opacity(0.3) : .orange.opacity(0.3), lineWidth: 1)
                )
        )
        .padding(.horizontal, 16)
        .onTapGesture { onDismiss() }
        .task {
            try? await Task.sleep(for: .seconds(isSuccess ? 3 : 8))
            onDismiss()
        }
        .accessibilityLabel("Restore result: \(message). Tap to dismiss.")
    }
}

// MARK: - Pre-Purchase Auth Gate (Story 3.5)

/// Sheet presented to anonymous users before purchase, encouraging sign-in for subscription protection.
private struct PrePurchaseAuthGateView: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.authService) private var authService

    var onAuthenticated: () -> Void
    var onContinueWithoutAccount: () -> Void
    var onDismiss: () -> Void

    @State private var isAuthenticating = false
    @State private var authError: String?

    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        VStack(spacing: 24) {
            // Header
            VStack(spacing: 12) {
                Image(systemName: "lock.shield.fill")
                    .font(.system(size: 44))
                    .foregroundStyle(
                        LinearGradient(
                            colors: [.purple, .blue],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )

                Text("Let's save your subscription")
                    .font(.title2.bold())
                    .multilineTextAlignment(.center)

                Text("Signing in lets you restore your subscription on any device")
                    .font(.subheadline)
                    .foregroundStyle(.secondary)
                    .multilineTextAlignment(.center)
            }
            .padding(.top, 24)

            // Auth buttons
            VStack(spacing: 12) {
                // Sign in with Apple
                Button {
                    Task {
                        isAuthenticating = true
                        authError = nil
                        do {
                            try await authService.signInWithApple()
                            onAuthenticated()
                        } catch {
                            authError = "Sign-in failed. Please try again."
                        }
                        isAuthenticating = false
                    }
                } label: {
                    HStack(spacing: 8) {
                        Image(systemName: "apple.logo")
                        Text("Sign in with Apple")
                    }
                    .font(.body.bold())
                    .foregroundStyle(.white)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 14)
                    .background(
                        RoundedRectangle(cornerRadius: 12, style: .continuous)
                            .fill(.black)
                    )
                }
                .disabled(isAuthenticating)
            }
            .padding(.horizontal, 24)

            if let authError {
                Text(authError)
                    .font(.caption)
                    .foregroundStyle(.red)
            }

            Spacer()

            // Continue without account (secondary, text link style)
            VStack(spacing: 8) {
                Button {
                    authService.continueAsGuest()
                    onContinueWithoutAccount()
                } label: {
                    Text("Continue without account")
                        .font(.subheadline)
                        .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
                        .underline()
                }

                Text("You may not be able to restore this subscription on another device")
                    .font(.caption2)
                    .foregroundStyle(isDark ? .white.opacity(0.3) : .secondary.opacity(0.6))
                    .multilineTextAlignment(.center)
            }
            .padding(.horizontal, 24)
            .padding(.bottom, 16)
        }
        .accessibilityElement(children: .contain)
        .accessibilityLabel("Sign in to protect your subscription. You can also continue without an account.")
    }
}
