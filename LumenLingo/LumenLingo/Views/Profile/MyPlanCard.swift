import SwiftUI

// MARK: - My Plan Card

/// A "My Plan" summary card for the Profile page showing the user's
/// current tier, top features, and an expandable full feature list.
/// Rendered inside a parent CollapsibleSection that provides the header.
struct MyPlanCard: View {
    @Environment(TierManager.self) private var tierManager
    @Environment(\.colorScheme) private var colorScheme

    @State private var appeared = false

    private var isDark: Bool { colorScheme == .dark }
    private var tier: MembershipTier { tierManager.currentTier }

    var body: some View {
        VStack(spacing: 0) {
            // Tier hero badge — compact, elegant
            tierHeroBadge
                .padding(.bottom, 16)

            // Feature grid
            featureGrid

            // Upgrade CTA (only if not Royal / Trial)
            if tier != .royal && tier != .trial {
                upgradeBanner
                    .padding(.top, 16)
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

    // MARK: - Tier Hero Badge

    private var tierHeroBadge: some View {
        HStack(spacing: 14) {
            // Glowing tier icon
            ZStack {
                // Outer glow ring
                Circle()
                    .fill(
                        RadialGradient(
                            colors: [
                                tier.gradientColors.first?.opacity(0.25) ?? .clear,
                                .clear
                            ],
                            center: .center,
                            startRadius: 8,
                            endRadius: 28
                        )
                    )
                    .frame(width: 52, height: 52)

                // Glass circle
                Circle()
                    .fill(
                        isDark
                            ? AnyShapeStyle(Color.white.opacity(0.06))
                            : AnyShapeStyle(LinearGradient(
                                colors: tier.gradientColors.map { $0.opacity(0.08) },
                                startPoint: .topLeading, endPoint: .bottomTrailing
                            ))
                    )
                    .frame(width: 42, height: 42)
                    .overlay(
                        Circle()
                            .strokeBorder(
                                LinearGradient(
                                    colors: tier.gradientColors.map { $0.opacity(isDark ? 0.3 : 0.25) },
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing
                                ),
                                lineWidth: 1
                            )
                    )

                Image(systemName: tier.iconName)
                    .font(.system(size: 17, weight: .bold))
                    .foregroundStyle(
                        LinearGradient(
                            colors: tier.gradientColors,
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
            }

            VStack(alignment: .leading, spacing: 3) {
                Text(tier.displayName)
                    .font(.system(size: 18, weight: .bold, design: .rounded))
                    .foregroundStyle(
                        LinearGradient(
                            colors: tier.gradientColors,
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )

                // Feature count summary
                let features = tierManager.allFeatures()
                let enabledCount = features.filter(\.enabled).count
                let totalCount = features.count
                Text("\(enabledCount) of \(totalCount) features unlocked")
                    .font(.system(size: 11, weight: .medium))
                    .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)
            }

            Spacer()

            // Trial badge
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

    // MARK: - Feature Grid

    private var featureGrid: some View {
        let features = tierManager.allFeatures()

        return VStack(spacing: 0) {
            // Subtle divider
            Rectangle()
                .fill(
                    LinearGradient(
                        colors: [
                            .clear,
                            tier.gradientColors.first?.opacity(isDark ? 0.2 : 0.15) ?? .clear,
                            .clear
                        ],
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .frame(height: 0.5)
                .padding(.bottom, 12)

            ForEach(Array(features.enumerated()), id: \.element.feature) { index, item in
                featureRow(
                    icon: item.feature.iconName,
                    name: item.feature.displayName,
                    subtitle: item.feature.benefitText,
                    enabled: item.enabled,
                    index: index
                )

                if index < features.count - 1 {
                    Rectangle()
                        .fill(isDark ? Color.white.opacity(0.03) : Color.black.opacity(0.03))
                        .frame(height: 0.5)
                        .padding(.leading, 42)
                }
            }
        }
    }

    // MARK: - Feature Row

    private func featureRow(icon: String, name: String, subtitle: String, enabled: Bool, index: Int) -> some View {
        HStack(spacing: 12) {
            // Icon in a tinted circle
            ZStack {
                RoundedRectangle(cornerRadius: 8, style: .continuous)
                    .fill(
                        enabled
                            ? (isDark
                                ? AnyShapeStyle(tier.accentColor.opacity(0.12))
                                : AnyShapeStyle(LinearGradient(
                                    colors: tier.gradientColors.map { $0.opacity(0.08) },
                                    startPoint: .topLeading, endPoint: .bottomTrailing
                                )))
                            : AnyShapeStyle(isDark ? Color.white.opacity(0.04) : Color.black.opacity(0.03))
                    )
                    .frame(width: 30, height: 30)

                Image(systemName: icon)
                    .font(.system(size: 12, weight: .semibold))
                    .foregroundStyle(
                        enabled
                            ? (isDark ? AnyShapeStyle(tier.accentColor) : AnyShapeStyle(LinearGradient(
                                colors: tier.gradientColors,
                                startPoint: .topLeading, endPoint: .bottomTrailing
                            )))
                            : AnyShapeStyle(isDark ? Color.white.opacity(0.2) : Color.gray.opacity(0.4))
                    )
            }

            VStack(alignment: .leading, spacing: 1) {
                Text(name)
                    .font(.system(size: 13, weight: .semibold, design: .rounded))
                    .foregroundStyle(
                        enabled
                            ? (isDark ? .white.opacity(0.9) : .primary)
                            : (isDark ? .white.opacity(0.3) : .secondary.opacity(0.5))
                    )

                Text(subtitle)
                    .font(.system(size: 10, weight: .regular))
                    .foregroundStyle(isDark ? .white.opacity(0.25) : .secondary.opacity(0.5))
                    .lineLimit(1)
            }

            Spacer(minLength: 4)

            // Status indicator
            if enabled {
                Image(systemName: "checkmark.circle.fill")
                    .font(.system(size: 16))
                    .foregroundStyle(
                        LinearGradient(
                            colors: isDark
                                ? [Color.green.opacity(0.9), Color.green.opacity(0.7)]
                                : [Color(hex: "10B981"), Color(hex: "06B6D4")],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
            } else {
                Image(systemName: "lock.circle.fill")
                    .font(.system(size: 16))
                    .foregroundStyle(isDark ? Color.white.opacity(0.12) : Color.gray.opacity(0.25))
            }
        }
        .padding(.vertical, 8)
    }

    // MARK: - Upgrade Banner

    private var upgradeBanner: some View {
        NavigationLink {
            MembershipView()
        } label: {
            HStack(spacing: 8) {
                Image(systemName: "sparkles")
                    .font(.system(size: 13, weight: .semibold))

                Text("Unlock More Features")
                    .font(.system(size: 13, weight: .semibold, design: .rounded))

                Spacer()

                Image(systemName: "chevron.right")
                    .font(.system(size: 10, weight: .bold))
                    .foregroundStyle(.white.opacity(0.7))
            }
            .foregroundStyle(.white)
            .padding(.horizontal, 16)
            .padding(.vertical, 12)
            .background(
                RoundedRectangle(cornerRadius: 12, style: .continuous)
                    .fill(
                        LinearGradient(
                            colors: [Color(hex: "#a855f7"), Color(hex: "#ec4899")],
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
                    .shadow(
                        color: Color(hex: "#a855f7").opacity(isDark ? 0.3 : 0.15),
                        radius: 8,
                        y: 4
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
                    colors: tier.gradientColors.map { $0.opacity(isDark ? 0.06 : 0.04) },
                    startPoint: .topLeading,
                    endPoint: .bottomTrailing
                )
            )
            .overlay(
                RoundedRectangle(cornerRadius: 16)
                    .strokeBorder(
                        LinearGradient(
                            colors: tier.gradientColors.map { $0.opacity(isDark ? 0.12 : 0.10) },
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        ),
                        lineWidth: 0.5
                    )
            )
    }
}
