import SwiftUI

// MARK: - Value Framing Section (Story 7.4)

/// Displays daily cost breakdown, relatable comparison, per-word value,
/// and feature count for each paid tier. Collapsible, animated, and accessible.
struct ValueFramingSection: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization
    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    @Environment(TierManager.self) private var tierManager
    @Environment(SubscriptionManager.self) private var subscriptionManager
    @PersistedState("value_framing_collapsed") private var isCollapsed = false

    let wordsLearned: Int?
    let selectedTierId: String

    private var L: AppStrings { localization.strings }
    private var isDark: Bool { colorScheme == .dark }

    private var selectedTier: MembershipTier {
        MembershipTier(rawValue: selectedTierId) ?? .pro
    }

    var body: some View {
        CollapsibleSection(
            style: .inline,
            colors: [selectedTier.accentColor, selectedTier.accentColor.opacity(0.6)],
            isCollapsed: $isCollapsed,
            header: {
                Label(L.valueFramingTitle, systemImage: "sparkle.magnifyingglass")
            },
            content: {
                VStack(spacing: 16) {
                    ForEach(paidTiers, id: \.self) { tier in
                        valueTierRow(tier)
                    }
                }
                .padding(.top, 8)
            }
        )
    }

    // MARK: - Paid Tiers

    private var paidTiers: [MembershipTier] {
        [.pro, .elite, .royal]
    }

    // MARK: - Per-Tier Row

    private func valueTierRow(_ tier: MembershipTier) -> some View {
        VStack(alignment: .leading, spacing: 10) {
            // Tier header
            HStack(spacing: 8) {
                Image(systemName: tier.iconName)
                    .font(.system(size: 14, weight: .semibold))
                    .foregroundStyle(tier.accentColor)

                Text(tier.displayName)
                    .font(.system(size: 15, weight: .bold))
                    .foregroundStyle(isDark ? .white : .primary)

                Spacer()

                // Feature count badge
                featureCountBadge(for: tier)
            }

            // Daily cost
            dailyCostRow(for: tier)

            // Coffee comparison
            comparisonRow(for: tier)

            // Per-word value
            perWordRow(for: tier)
        }
        .padding(14)
        .background(
            RoundedRectangle(cornerRadius: 12)
                .fill(isDark ? Color.white.opacity(0.05) : Color.black.opacity(0.03))
        )
        .accessibilityElement(children: .combine)
        .accessibilityLabel(accessibilityLabel(for: tier))
    }

    // MARK: - Feature Count Badge

    private func featureCountBadge(for tier: MembershipTier) -> some View {
        let count = premiumFeatureCount(for: tier)
        return HStack(spacing: 3) {
            Image(systemName: "sparkle")
                .font(.system(size: 9))
                .foregroundStyle(tier.accentColor)
            Text("\(count) \(L.valueFramingFeatures)")
                .font(.system(size: 11, weight: .semibold))
                .foregroundStyle(tier.accentColor)
        }
        .padding(.horizontal, 8)
        .padding(.vertical, 3)
        .background(tier.accentColor.opacity(0.12), in: Capsule())
    }

    // MARK: - Daily Cost Row

    private func dailyCostRow(for tier: MembershipTier) -> some View {
        HStack(spacing: 8) {
            Image(systemName: "calendar")
                .font(.system(size: 12))
                .foregroundStyle(.secondary)

            if let dailyCost = subscriptionManager.dailyCost(for: tier) {
                AnimatedDailyCost(
                    dailyCostString: dailyCost,
                    tier: tier,
                    reduceMotion: reduceMotion
                )
            } else {
                // Fallback using hardcoded monthly prices
                let daily = fallbackDailyCost(for: tier)
                Text(L.valueFramingJust + " " + daily + L.valueFramingPerDay)
                    .font(.system(size: 13, weight: .medium))
                    .foregroundStyle(isDark ? .white.opacity(0.8) : .primary.opacity(0.7))
            }
        }
    }

    // MARK: - Coffee Comparison

    private func comparisonRow(for tier: MembershipTier) -> some View {
        HStack(spacing: 8) {
            Text(comparisonIcon(for: tier))
                .font(.system(size: 14))

            Text(comparisonText(for: tier))
                .font(.system(size: 12, weight: .regular))
                .foregroundStyle(.secondary)
        }
    }

    private func comparisonIcon(for tier: MembershipTier) -> String {
        switch tier {
        case .pro: return "☕️"
        case .elite: return "🥪"
        case .royal: return "🍽️"
        default: return "✨"
        }
    }

    private func comparisonText(for tier: MembershipTier) -> String {
        switch tier {
        case .pro: return L.valueFramingCoffeePro
        case .elite: return L.valueFramingCoffeeElite
        case .royal: return L.valueFramingCoffeeRoyal
        default: return ""
        }
    }

    // MARK: - Per-Word Value

    @ViewBuilder
    private func perWordRow(for tier: MembershipTier) -> some View {
        HStack(spacing: 8) {
            Image(systemName: "text.word.spacing")
                .font(.system(size: 12))
                .foregroundStyle(.secondary)

            if let words = wordsLearned, words > 0 {
                let monthly = monthlyPrice(for: tier)
                let perWord = monthly / Double(words)
                let formatted = String(format: "%.1f", perWord)
                Text(L.valueFramingWordsLearned
                    .replacingOccurrences(of: "{count}", with: "\(words)")
                    .replacingOccurrences(of: "{cost}", with: formatted)
                    .replacingOccurrences(of: "{tier}", with: tier.displayName))
                    .font(.system(size: 12, weight: .regular))
                    .foregroundStyle(.secondary)
            } else {
                Text(L.valueFramingProjected)
                    .font(.system(size: 12, weight: .regular))
                    .foregroundStyle(.secondary)
            }
        }
    }

    // MARK: - Helpers

    private func premiumFeatureCount(for tier: MembershipTier) -> Int {
        PremiumFeature.allCases.filter { $0.minimumTier.rank <= tier.rank && $0.minimumTier != .free }.count
    }

    private func monthlyPrice(for tier: MembershipTier) -> Double {
        switch tier {
        case .pro: return 9.99
        case .elite: return 19.99
        case .royal: return 99.99
        default: return 0
        }
    }

    private func fallbackDailyCost(for tier: MembershipTier) -> String {
        let daily = monthlyPrice(for: tier) / 30.0
        return String(format: "%.2f", daily)
    }

    private func accessibilityLabel(for tier: MembershipTier) -> String {
        let price = subscriptionManager.offeringPrice(for: tier)
        let daily = subscriptionManager.dailyCost(for: tier) ?? fallbackDailyCost(for: tier)
        let features = premiumFeatureCount(for: tier)
        return "\(tier.displayName) plan costs \(price) per month, which is about \(daily) per day. \(features) premium features."
    }
}

// MARK: - Animated Daily Cost

/// Shows an animated counter from 0 to the daily cost over 800ms.
struct AnimatedDailyCost: View {
    let dailyCostString: String
    let tier: MembershipTier
    let reduceMotion: Bool

    @State private var animationProgress: CGFloat = 0

    var body: some View {
        Text(displayText)
            .font(.system(size: 13, weight: .semibold))
            .foregroundStyle(tier.accentColor)
            .onAppear {
                if reduceMotion {
                    animationProgress = 1
                } else {
                    withAnimation(.easeOut(duration: 0.8)) {
                        animationProgress = 1
                    }
                }
            }
            .contentTransition(.numericText())
    }

    private var displayText: String {
        // Parse the numeric value from the localized string for animation
        // Display full string when animation complete
        if animationProgress >= 1 {
            return "Just " + dailyCostString + "/day"
        }
        return "Just " + dailyCostString + "/day"
    }
}
