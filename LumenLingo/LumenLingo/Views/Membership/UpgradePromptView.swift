import SwiftUI

// MARK: - Upgrade Prompt View

/// A beautiful, non-aggressive upgrade prompt shown when a Free user encounters
/// a locked feature. Uses the minimum tier's gradient, shows feature preview,
/// benefit description, and a "View Plans" CTA. Dismissible via swipe or button.
struct UpgradePromptView: View {
    let feature: PremiumFeature
    @Environment(\.dismiss) private var dismiss
    @Environment(\.colorScheme) private var colorScheme

    @State private var navigateToMembership = false

    private var isDark: Bool { colorScheme == .dark }
    private var minTier: MembershipTier { feature.minimumTier }

    var body: some View {
        NavigationStack {
            VStack(spacing: 0) {
                // Feature icon hero
                featureHero


                // Content
                VStack(spacing: 20) {
                    // Lock badge
                    lockBadge
                        .offset(y: -24)
                        .padding(.bottom, -16)

                    // Feature name
                    Text(feature.displayName)
                        .font(.system(size: 22, weight: .bold))
                        .foregroundStyle(isDark ? .white : .primary)

                    // Benefit description
                    Text(feature.benefitText)
                        .font(.system(size: 15))
                        .foregroundStyle(.secondary)
                        .multilineTextAlignment(.center)
                        .padding(.horizontal, 24)

                    // Tier requirement
                    tierRequirementBadge

                    // CTA
                    PremiumCTAButton(
                        title: "View Plans",
                        tier: minTier,
                        action: { navigateToMembership = true },
                        icon: minTier.iconName,
                        shape: .rounded(14)
                    )
                    .padding(.horizontal, 24)
                    .padding(.top, 4)

                    // Dismiss
                    Button {
                        dismiss()
                    } label: {
                        Text("Maybe Later")
                            .font(.system(size: 15, weight: .medium))
                            .foregroundStyle(.secondary)
                    }
                    .padding(.bottom, 8)
                }
                .padding(.top, 8)
                .padding(.bottom, 24)
            }
            .background(isDark ? Color(hex: "#0f0f1e") : Color(hex: "#faf9fe"))
            .navigationDestination(isPresented: $navigateToMembership) {
                MembershipView()
            }

        }
        .presentationDetents([.medium])
        .presentationDragIndicator(.visible)
        .presentationCornerRadius(24)
    }

    // MARK: - Feature Hero

    private var featureHero: some View {
        ZStack {
            // Ambient glow
            RadialGradient(
                colors: [
                    minTier.accentColor.opacity(0.2),
                    minTier.gradientColors.first?.opacity(0.08) ?? .clear,
                    .clear
                ],
                center: .center,
                startRadius: 20,
                endRadius: 120
            )
            .frame(height: 180)

            // Large feature icon
            ZStack {
                // Outer glow ring
                Circle()
                    .fill(
                        RadialGradient(
                            colors: [
                                minTier.accentColor.opacity(0.15),
                                .clear
                            ],
                            center: .center,
                            startRadius: 30,
                            endRadius: 70
                        )
                    )
                    .frame(width: 140, height: 140)

                // Gradient circle
                Circle()
                    .fill(
                        LinearGradient(
                            colors: minTier.gradientColors,
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
                    .frame(width: 80, height: 80)
                    .shadow(color: minTier.accentColor.opacity(0.4), radius: 20)

                // Icon
                Image(systemName: feature.iconName)
                    .font(.system(size: 32, weight: .semibold))
                    .foregroundStyle(.white)
            }
        }
    }

    // MARK: - Lock Badge

    private var lockBadge: some View {
        ZStack {
            Circle()
                .fill(
                    LinearGradient(
                        colors: minTier.gradientColors,
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )
                .frame(width: 44, height: 44)
                .shadow(color: minTier.accentColor.opacity(0.4), radius: 10)

            Image(systemName: "lock.fill")
                .font(.system(size: 18, weight: .semibold))
                .foregroundStyle(.white)
        }
    }

    // MARK: - Tier Badge

    private var tierRequirementBadge: some View {
        HStack(spacing: 6) {
            Image(systemName: minTier.iconName)
                .font(.system(size: 12, weight: .semibold))
            Text("Requires \(minTier.displayName)")
                .font(.system(size: 13, weight: .semibold))
        }
        .foregroundStyle(minTier.accentColor)
        .padding(.horizontal, 14)
        .padding(.vertical, 7)
        .background(
            Capsule()
                .fill(minTier.accentColor.opacity(0.12))
                .overlay(
                    Capsule()
                        .strokeBorder(minTier.accentColor.opacity(0.25), lineWidth: 1)
                )
        )
    }
}
