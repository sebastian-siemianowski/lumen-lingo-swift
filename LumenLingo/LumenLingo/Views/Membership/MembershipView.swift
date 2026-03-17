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
    @Query private var profiles: [UserProfile]
    private var profile: UserProfile? { profiles.first }
    @State private var showComparison = false
    @State private var selectedTierId: String = "free"

    /// When true, shows a close button in the toolbar (for sheet presentations).
    var isSheet: Bool = false

    private var L: AppStrings { localization.strings }
    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        ScrollView(showsIndicators: false) {
            VStack(spacing: 32) {
                heroSection
                tiersSection

                comparisonToggle
                if showComparison { comparisonTable }

                Spacer(minLength: 80)
            }
            .padding(.horizontal, 16)
            .padding(.top, 12)
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
                    LinearGradient(
                        colors: [Color(hex: "#C494FC"), Color(hex: "#F472B6"), Color(hex: "#FB923C")],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
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
        }
    }

    // MARK: - Hero

    private var heroSection: some View {
        VStack(spacing: 12) {
            Text(L.plansAndPricing)
                .font(.caption.bold())
                .tracking(1.5)
                .textCase(.uppercase)
                .foregroundStyle(.purple.opacity(0.8))
                .padding(.horizontal, 12)
                .padding(.vertical, 6)
                .background(
                    Capsule()
                        .fill(.purple.opacity(0.12))
                        .overlay(Capsule().strokeBorder(.purple.opacity(0.25), lineWidth: 1))
                )

            VStack(spacing: 4) {
                Text(L.investInYour)
                    .font(.system(size: 36, weight: .black))
                    .foregroundStyle(
                        LinearGradient(
                            colors: [.purple, .pink],
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
                Text(L.languageMastery)
                    .font(.system(size: 36, weight: .black))
                    .foregroundStyle(
                        LinearGradient(
                            colors: [.purple, .pink, .orange],
                            startPoint: .leading, endPoint: .trailing
                        )
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
                            selectedTierId: $selectedTierId
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
                        selectedTierId: $selectedTierId
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

    // MARK: - Comparison Toggle

    private var comparisonToggle: some View {
        Button {
            AudioService.shared.playPanelExpand()
            HapticsService.shared.buttonPress()
            withAnimation(.spring(response: 0.4)) { showComparison.toggle() }
        } label: {
            HStack {
                Text(L.featureComparison)
                    .font(.subheadline.bold())
                    .foregroundStyle(isDark ? .white.opacity(0.7) : .caribbeanInk)
                Image(systemName: showComparison ? "chevron.up" : "chevron.down")
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanMist)
            }
            .padding(.vertical, 10)
            .padding(.horizontal, 20)
            .background(
                Capsule().fill(.white.opacity(0.06))
                    .overlay(Capsule().strokeBorder(.white.opacity(0.06), lineWidth: 1))
            )
        }
        .buttonStyle(LumenPressStyle(weight: .medium))
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
                                            colors: [.white.opacity(0.08)],
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

            Divider().background(.white.opacity(0.08))

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
                        .strokeBorder(.white.opacity(0.06), lineWidth: 1)
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
    @Query private var profiles: [UserProfile]
    private var profile: UserProfile? { profiles.first }
    private var L: AppStrings { localization.strings }
    private var isDark: Bool { colorScheme == .dark }

    let tier: MembershipView.TierData
    let index: Int
    @Binding var selectedTierId: String

    @State private var isHovered = false
    @State private var showTrialConfirmation = false
    @State private var isCardPressed = false


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
                    Text(tier.tagline)
                        .font(.caption)
                        .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanPlum)
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

            // Price
            HStack(alignment: .firstTextBaseline, spacing: 4) {
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
                } else {
                    Text("£\(String(format: "%.2f", price))")
                        .font(.system(size: 28, weight: .black))
                        .foregroundStyle(
                            LinearGradient(
                                colors: tier.gradientColors,
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                    Text(L.perMonth)
                        .font(.subheadline)
                        .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
                }
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

            // CTA button
            Button {
                guard !isActuallyCurrent, !tier.isDisabled else { return }
                AudioService.shared.playTierSelect()
                if tier.id == "trial" {
                    if tierManager.startTrial(profile: profile) {
                        selectedTierId = "trial"
                        showTrialConfirmation = true
                    }
                } else {
                    withAnimation(.spring(response: 0.30, dampingFraction: 0.50)) {
                        selectedTierId = tier.id
                    }
                    tierManager.selectTier(tier.id, profile: profile)
                }
            } label: {
                HStack(spacing: 6) {
                    if isActuallyCurrent {
                        Image(systemName: "checkmark.circle.fill")
                            .font(.caption)
                            .transition(.scale.combined(with: .opacity))
                    }
                    Text(isActuallyCurrent ? L.currentPlan : tier.cta)
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
                )
            }
            .buttonStyle(PremiumCTAButtonStyle(glowColor: tier.gradientColors.first ?? .purple))
            .disabled(isActuallyCurrent || tier.isDisabled)
            .opacity(isActuallyCurrent ? 0.8 : (tier.isDisabled ? 0.3 : 1.0))
        }
        .padding(18)
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
                                    : LinearGradient(colors: [.white.opacity(0.06)], startPoint: .top, endPoint: .bottom),
                                lineWidth: (tier.isHighlighted || isActuallyCurrent || isRoyal) ? 1.5 : 1
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

        .fullScreenCover(isPresented: $showTrialConfirmation) {
            TrialConfirmationView()
        }
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
        case "inherit": .white.opacity(0.4)
        case "ultimate": .orange
        default: .white.opacity(0.5)
        }
    }
}
