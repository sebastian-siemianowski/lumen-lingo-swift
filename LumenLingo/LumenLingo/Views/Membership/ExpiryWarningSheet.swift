import SwiftUI

// MARK: - Expiry Warning Sheet (Story 5.7)

/// A warm, non-threatening sheet shown when the subscription or trial has ≤3 days remaining
/// and `willRenew == false`. Shows user achievements and features they'll lose.
/// Presented once per 24 hours, max 3 times, never during lessons.
struct ExpiryWarningSheet: View {
    @Environment(SubscriptionManager.self) private var subscriptionManager
    @Environment(TierManager.self) private var tierManager
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    @Environment(\.dismiss) private var dismiss

    let onKeepPlan: () -> Void

    private var isDark: Bool { colorScheme == .dark }
    private var tier: MembershipTier { tierManager.currentTier }
    private var daysLeft: Int { subscriptionManager.daysUntilExpiry ?? 0 }
    private var label: String { subscriptionManager.expiringLabel ?? tier.displayName }

    var body: some View {
        ScrollView {
            VStack(spacing: 24) {
                headerSection
                featuresYouLoseSection
                ctaSection
            }
            .padding(.horizontal, 24)
            .padding(.top, 32)
            .padding(.bottom, 40)
        }
        .background(isDark ? Color(red: 10/255, green: 8/255, blue: 28/255) : Color(red: 0.98, green: 0.98, blue: 1.0))
        .accessibilityElement(children: .contain)
    }

    // MARK: - Header

    private var headerSection: some View {
        VStack(spacing: 14) {
            Image(systemName: "hourglass")
                .font(.system(size: 38))
                .foregroundStyle(
                    LinearGradient(
                        colors: tier.gradientColors,
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )
                .symbolEffect(.pulse, options: reduceMotion ? .nonRepeating : .repeating.speed(0.3))

            Text("Just a heads up")
                .font(.system(size: 14, weight: .medium))
                .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
                .textCase(.uppercase)
                .tracking(1.2)

            Text("Your \(label) ends in \(daysLeft) \(daysLeft == 1 ? "day" : "days")")
                .font(.system(size: 22, weight: .bold))
                .foregroundStyle(isDark ? .white : .primary)
                .multilineTextAlignment(.center)

            Text("We wanted to let you know before anything changes.")
                .font(.system(size: 15))
                .foregroundStyle(isDark ? .white.opacity(0.65) : .secondary)
                .multilineTextAlignment(.center)
        }
    }

    // MARK: - Features You'll Lose

    private var featuresYouLoseSection: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("Features you'll miss")
                .font(.system(size: 13, weight: .semibold))
                .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
                .padding(.leading, 4)

            VStack(spacing: 0) {
                ForEach(featuresForCurrentTier, id: \.iconName) { feature in
                    featureRow(feature)
                    if feature != featuresForCurrentTier.last {
                        Divider()
                            .opacity(0.3)
                            .padding(.leading, 40)
                    }
                }
            }
            .background(
                RoundedRectangle(cornerRadius: 14, style: .continuous)
                    .fill(isDark ? .white.opacity(0.05) : .black.opacity(0.03))
            )
            .clipShape(RoundedRectangle(cornerRadius: 14, style: .continuous))
        }
    }

    private func featureRow(_ feature: PremiumFeature) -> some View {
        HStack(spacing: 12) {
            Image(systemName: feature.iconName)
                .font(.system(size: 16))
                .foregroundStyle(tier.gradientColors.first ?? .purple)
                .frame(width: 28)

            VStack(alignment: .leading, spacing: 2) {
                Text(feature.displayName)
                    .font(.system(size: 14, weight: .medium))
                    .foregroundStyle(isDark ? .white : .primary)
                Text(feature.benefitText)
                    .font(.system(size: 12))
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
                    .lineLimit(2)
            }

            Spacer()
        }
        .padding(.horizontal, 14)
        .padding(.vertical, 10)
    }

    private var featuresForCurrentTier: [PremiumFeature] {
        // Show features that the current tier grants but free tier wouldn't
        let features: [PremiumFeature] = [
            .unlimitedPractice, .languagePairs, .soundscapes, .offlineMode,
            .breathingOrbs, .quantumFlow, .nebulaDrift
        ]
        return features.filter { feature in
            tierManager.hasAccess(to: feature)
        }
    }

    // MARK: - CTAs

    private var ctaSection: some View {
        VStack(spacing: 12) {
            // Primary: Keep plan
            Button {
                dismiss()
                onKeepPlan()
            } label: {
                Text("Keep My \(label)")
                    .font(.system(size: 16, weight: .bold))
                    .foregroundStyle(.white)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 14)
                    .background(
                        Capsule()
                            .fill(
                                LinearGradient(
                                    colors: tier.gradientColors,
                                    startPoint: .leading,
                                    endPoint: .trailing
                                )
                            )
                    )
            }
            .buttonStyle(.plain)
            .accessibilityLabel("Keep my \(label) subscription")

            // Secondary: Dismiss for 24h
            Button {
                subscriptionManager.dismissExpiryWarning()
                dismiss()
            } label: {
                Text("I'll think about it")
                    .font(.system(size: 15, weight: .medium))
                    .foregroundStyle(isDark ? .white.opacity(0.7) : .secondary)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 12)
            }
            .buttonStyle(.plain)
            .accessibilityLabel("Dismiss for 24 hours")

            // Tertiary: Suppress all
            Button {
                subscriptionManager.suppressWinback()
                dismiss()
            } label: {
                Text("Don't remind me again")
                    .font(.system(size: 13))
                    .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary.opacity(0.7))
            }
            .buttonStyle(.plain)
            .accessibilityLabel("Stop all expiry reminders")
        }
    }
}
