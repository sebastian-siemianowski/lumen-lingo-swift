import SwiftUI

// MARK: - Contextual Expiry Nudge (Story 5.7)

/// A non-intrusive inline banner shown at the bottom of a premium feature screen
/// during the final 3 days before expiry. Shown once per feature per session.
/// Tappable to open the paywall, dismissable with swipe.
struct ContextualExpiryNudge: View {
    @Environment(SubscriptionManager.self) private var subscriptionManager
    @Environment(TierManager.self) private var tierManager
    @Environment(\.colorScheme) private var colorScheme

    /// The premium feature being used (used for "Love using [Feature]?" text).
    let feature: PremiumFeature

    /// Called when the user taps the nudge to open the paywall.
    let onOpenPaywall: () -> Void

    @State private var isVisible = false
    @State private var dismissed = false

    private var isDark: Bool { colorScheme == .dark }
    private var tier: MembershipTier { tierManager.currentTier }

    var body: some View {
        if isVisible && !dismissed {
            nudgeContent
                .transition(.move(edge: .bottom).combined(with: .opacity))
                .gesture(
                    DragGesture(minimumDistance: 20)
                        .onEnded { value in
                            if value.translation.height > 30 {
                                withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                                    dismissed = true
                                }
                            }
                        }
                )
        }
    }

    private var nudgeContent: some View {
        Button {
            onOpenPaywall()
        } label: {
            HStack(spacing: 10) {
                Image(systemName: feature.iconName)
                    .font(.system(size: 15))
                    .foregroundStyle(tier.gradientColors.first ?? .purple)

                Text("Love using \(feature.displayName)? Keep it with \(tier.displayName).")
                    .font(.system(size: 13, weight: .medium))
                    .foregroundStyle(isDark ? .white : .primary)
                    .lineLimit(2)
                    .multilineTextAlignment(.leading)

                Spacer(minLength: 4)

                Image(systemName: "chevron.right")
                    .font(.system(size: 11, weight: .bold))
                    .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)
            }
            .padding(.horizontal, 14)
            .padding(.vertical, 10)
            .background(
                RoundedRectangle(cornerRadius: 12, style: .continuous)
                    .fill(isDark ? .white.opacity(0.08) : .black.opacity(0.04))
                    .overlay(
                        RoundedRectangle(cornerRadius: 12, style: .continuous)
                            .strokeBorder(
                                (tier.gradientColors.first ?? .purple).opacity(0.3),
                                lineWidth: 0.5
                            )
                    )
            )
            .padding(.horizontal, 16)
            .padding(.bottom, 8)
        }
        .buttonStyle(.plain)
        .accessibilityLabel("Keep \(feature.displayName) with \(tier.displayName). Opens subscription options.")
        .accessibilityAddTraits(.isButton)
        .onAppear {
            if subscriptionManager.shouldShowExpiryNudge(for: feature.displayName) {
                subscriptionManager.markNudgeShown(for: feature.displayName)
                withAnimation(.spring(response: 0.4, dampingFraction: 0.75)) {
                    isVisible = true
                }
            }
        }
    }
}
