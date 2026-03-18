import SwiftUI

// MARK: - My Plan Card

/// A "My Plan" summary card for the Profile page showing the user's
/// current tier, top features, and an expandable full feature list.
struct MyPlanCard: View {
    @Environment(TierManager.self) private var tierManager
    @Environment(\.colorScheme) private var colorScheme

    @State private var appeared = false

    private var isDark: Bool { colorScheme == .dark }
    private var tier: MembershipTier { tierManager.currentTier }

    var body: some View {
        VStack(spacing: 0) {
            // Header row
            headerRow
                .padding(.bottom, 14)

            // Full feature list (always visible — parent CollapsibleSection manages expand/collapse)
            allFeaturesSection

            // Upgrade link (only if not Royal)
            if tier != .royal && tier != .trial {
                upgradeLink
                    .padding(.top, 14)
            }
        }
        .padding(16)
        .background(cardBackground)
        .opacity(appeared ? 1 : 0)
        .offset(y: appeared ? 0 : 10)
        .onAppear {
            withAnimation(.easeOut(duration: 0.4).delay(0.1)) {
                appeared = true
            }
        }
    }

    // MARK: - Header

    private var headerRow: some View {
        HStack(spacing: 12) {
            // Tier icon with gradient glow
            ZStack {
                Circle()
                    .fill(
                        RadialGradient(
                            colors: [
                                tier.gradientColors.first?.opacity(0.3) ?? .purple.opacity(0.3),
                                .clear
                            ],
                            center: .center,
                            startRadius: 5,
                            endRadius: 22
                        )
                    )
                    .frame(width: 44, height: 44)

                Image(systemName: tier.iconName)
                    .font(.system(size: 18, weight: .bold))
                    .foregroundStyle(
                        LinearGradient(
                            colors: tier.gradientColors,
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
            }

            VStack(alignment: .leading, spacing: 2) {
                Text("My Plan")
                    .font(.system(size: 12, weight: .medium))
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)

                Text(tier.displayName)
                    .font(.system(size: 17, weight: .bold))
                    .foregroundStyle(
                        LinearGradient(
                            colors: tier.gradientColors,
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
            }

            Spacer()

            // Trial countdown badge if applicable
            if tier == .trial {
                trialBadge
            }
        }
    }

    private var trialBadge: some View {
        HStack(spacing: 4) {
            Image(systemName: "clock.fill")
                .font(.system(size: 9))
            Text("TRIAL")
                .font(.system(size: 9, weight: .heavy, design: .rounded))
                .tracking(0.5)
        }
        .foregroundStyle(.orange)
        .padding(.horizontal, 8)
        .padding(.vertical, 4)
        .background(
            Capsule()
                .fill(.orange.opacity(0.12))
                .overlay(
                    Capsule()
                        .strokeBorder(.orange.opacity(0.25), lineWidth: 0.5)
                )
        )
    }

    // MARK: - Full Feature List

    private var allFeaturesSection: some View {
        let features = tierManager.allFeatures()

        return VStack(spacing: 6) {
            GlassDivider()
                .padding(.bottom, 6)

            ForEach(features, id: \.feature) { item in
                featureRow(
                    icon: item.feature.iconName,
                    name: item.feature.displayName,
                    enabled: item.enabled,
                    count: item.enabled ? tierManager.allowedCount(for: item.feature) : 0
                )
            }
        }
        .transition(.asymmetric(
            insertion: .opacity.combined(with: .move(edge: .top)),
            removal: .opacity
        ))
    }

    // MARK: - Feature Row

    private func featureRow(icon: String, name: String, enabled: Bool, count: Int) -> some View {
        HStack(spacing: 10) {
            Image(systemName: icon)
                .font(.system(size: 12, weight: .semibold))
                .foregroundStyle(enabled ? tier.accentColor : .gray.opacity(0.5))
                .frame(width: 20)

            Text(name)
                .font(.system(size: 13, weight: .medium))
                .foregroundStyle(
                    enabled
                        ? (isDark ? .white.opacity(0.85) : .primary)
                        : (isDark ? .white.opacity(0.3) : .secondary.opacity(0.6))
                )

            Spacer()

            if enabled {
                Image(systemName: "checkmark.circle.fill")
                    .font(.system(size: 14))
                    .foregroundStyle(.green)
            } else {
                Image(systemName: "lock.fill")
                    .font(.system(size: 11))
                    .foregroundStyle(.gray.opacity(0.5))
            }
        }
        .padding(.vertical, 4)
    }

    // MARK: - Upgrade Link

    private var upgradeLink: some View {
        NavigationLink {
            MembershipView()
        } label: {
            HStack(spacing: 6) {
                Image(systemName: "arrow.up.circle.fill")
                    .font(.system(size: 13))
                Text("Upgrade")
                    .font(.system(size: 13, weight: .medium))
            }
            .foregroundStyle(
                LinearGradient(
                    colors: [Color(hex: "#a855f7"), Color(hex: "#ec4899")],
                    startPoint: .leading,
                    endPoint: .trailing
                )
            )
        }
        .buttonStyle(.plain)
    }

    // MARK: - Card Background

    private var cardBackground: some View {
        RoundedRectangle(cornerRadius: 16)
            .fill(
                LinearGradient(
                    colors: tier.gradientColors.map { $0.opacity(0.08) },
                    startPoint: .topLeading,
                    endPoint: .bottomTrailing
                )
            )
            .overlay(
                RoundedRectangle(cornerRadius: 16)
                    .strokeBorder(
                        tier.gradientColors.first?.opacity(isDark ? 0.15 : 0.20) ?? .clear,
                        lineWidth: 0.5
                    )
            )
    }
}
