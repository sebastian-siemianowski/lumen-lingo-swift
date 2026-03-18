import SwiftUI

// MARK: - Tier Badge View

/// A polished capsule badge showing the user's current membership tier.
/// Displays the tier icon, name, and gradient background.
/// Animates in with scale+fade and navigates to MembershipView on tap.
struct TierBadgeView: View {
    @Environment(TierManager.self) private var tierManager
    @Environment(\.colorScheme) private var colorScheme

    /// Whether the badge should animate in on appear.
    var animated: Bool = true
    /// Compact mode for tight spaces (icon only).
    var compact: Bool = false

    @State private var appeared = false
    @State private var isPressed = false
    @State private var shimmerPhase: CGFloat = -1

    private var isDark: Bool { colorScheme == .dark }
    private var tier: MembershipTier { tierManager.currentTier }

    var body: some View {
        HStack(spacing: 5) {
            Image(systemName: tier.iconName)
                .font(.system(size: compact ? 10 : 11, weight: .bold))
                .foregroundStyle(.white)
                .contentTransition(.symbolEffect(.replace))

            if !compact {
                Text(tier.displayName)
                    .font(.system(size: 11, weight: .bold))
                    .foregroundStyle(.white)
                    .lineLimit(1)
            }
        }
        .padding(.horizontal, compact ? 8 : 10)
        .padding(.vertical, 5)
        .background(
            Capsule()
                .fill(
                    LinearGradient(
                        colors: tier.gradientColors,
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .overlay(
                    // Shimmer highlight
                    Capsule()
                        .fill(
                            LinearGradient(
                                stops: {
                                    let p = min(max(shimmerPhase, 0), 1)
                                    return [
                                        .init(color: .clear, location: max(0, p - 0.15)),
                                        .init(color: .white.opacity(0.25), location: p),
                                        .init(color: .clear, location: min(1, p + 0.15)),
                                    ]
                                }(),
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                        .allowsHitTesting(false)
                )
                .overlay(
                    Capsule()
                        .strokeBorder(.white.opacity(0.2), lineWidth: 0.5)
                )
        )
        .shadow(
            color: (tier.gradientColors.first ?? .purple).opacity(0.35),
            radius: 6, y: 2
        )
        .scaleEffect(isPressed ? 0.92 : 1.0)
        .scaleEffect(appeared ? 1.0 : 0.6)
        .opacity(appeared ? 1.0 : 0)
        .animation(.spring(response: 0.4, dampingFraction: 0.65), value: appeared)
        .animation(.spring(response: 0.2, dampingFraction: 0.6), value: isPressed)
        .onAppear {
            if animated {
                withAnimation(.spring(response: 0.5, dampingFraction: 0.65).delay(0.3)) {
                    appeared = true
                }
                // Delayed shimmer
                DispatchQueue.main.asyncAfter(deadline: .now() + 0.9) {
                    withAnimation(.easeInOut(duration: 0.8)) {
                        shimmerPhase = 1.2
                    }
                }
            } else {
                appeared = true
            }
        }
        .onLongPressGesture(minimumDuration: .infinity, pressing: { pressing in
            isPressed = pressing
        }, perform: {})
        .accessibilityLabel("\(tier.displayName) plan")
        .accessibilityHint("Double tap to view membership options")
    }
}
