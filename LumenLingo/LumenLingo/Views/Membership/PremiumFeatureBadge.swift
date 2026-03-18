import SwiftUI

// MARK: - Premium Feature Badge

/// Reusable tier-name capsule badge (e.g. "PRO", "ELITE") with the tier's gradient.
/// Used across gating overlays and settings sections to indicate the minimum
/// tier that unlocks a premium feature.
struct PremiumFeatureBadge: View {
    let tier: MembershipTier
    var style: BadgeStyle = .standard

    enum BadgeStyle {
        case standard   // Capsule with gradient fill
        case outlined   // Capsule with gradient stroke + tinted fill
    }

    var body: some View {
        HStack(spacing: 5) {
            Image(systemName: tier.iconName)
                .font(.system(size: 11, weight: .bold))
            Text(tier.displayName.uppercased())
                .font(.system(size: 12, weight: .heavy, design: .rounded))
                .tracking(0.8)
        }
        .foregroundStyle(foregroundGradient)
        .padding(.horizontal, 12)
        .padding(.vertical, 6)
        .background(background)
    }

    private var foregroundGradient: some ShapeStyle {
        LinearGradient(
            colors: style == .standard ? [.white] : tier.gradientColors,
            startPoint: .leading,
            endPoint: .trailing
        )
    }

    @ViewBuilder
    private var background: some View {
        switch style {
        case .standard:
            Capsule()
                .fill(
                    LinearGradient(
                        colors: tier.gradientColors,
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .shadow(color: tier.accentColor.opacity(0.35), radius: 6, y: 2)
        case .outlined:
            Capsule()
                .fill(tier.accentColor.opacity(0.1))
                .overlay(
                    Capsule()
                        .strokeBorder(
                            LinearGradient(
                                colors: tier.gradientColors.map { $0.opacity(0.5) },
                                startPoint: .leading,
                                endPoint: .trailing
                            ),
                            lineWidth: 1
                        )
                )
        }
    }
}
