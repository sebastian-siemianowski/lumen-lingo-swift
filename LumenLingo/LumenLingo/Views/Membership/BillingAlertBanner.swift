import SwiftUI
import StoreKit

// MARK: - Billing Alert Banner (Story 5.2)

/// Non-intrusive amber banner shown when a billing issue is detected during
/// the Apple grace period. Guides the user to fix payment without alarming language.
/// Resolves with a green checkmark animation when the issue is cleared.
struct BillingAlertBanner: View {
    @Environment(SubscriptionManager.self) private var subscriptionManager
    @Environment(TierManager.self) private var tierManager
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.accessibilityReduceMotion) private var reduceMotion

    @State private var arrowBounce: CGFloat = 0
    @State private var borderPhase: CGFloat = 0
    @State private var resolvedCheckmark: Bool = false

    private var isDark: Bool { colorScheme == .dark }
    private var tier: MembershipTier { tierManager.currentTier }

    private static let amber = Color(red: 0.95, green: 0.70, blue: 0.15)

    var body: some View {
        if subscriptionManager.billingResolved {
            resolvedBanner
                .transition(.move(edge: .top).combined(with: .opacity))
        } else if subscriptionManager.showBillingAlert {
            alertBanner
                .transition(.move(edge: .top).combined(with: .opacity))
        }
    }

    // MARK: - Alert Banner

    private var alertBanner: some View {
        Button {
            openSubscriptionManagement()
        } label: {
            HStack(spacing: 12) {
                Image(systemName: "exclamationmark.triangle.fill")
                    .font(.system(size: 16))
                    .foregroundStyle(Self.amber)

                VStack(alignment: .leading, spacing: 2) {
                    Text("There's a problem with your subscription payment.")
                        .font(.system(size: 13, weight: .medium))
                        .foregroundStyle(isDark ? .white : .primary)
                        .lineLimit(2)
                        .multilineTextAlignment(.leading)

                    HStack(spacing: 4) {
                        Text("Tap to fix it")
                            .font(.system(size: 12, weight: .semibold))
                            .foregroundStyle(Self.amber)

                        Image(systemName: "arrow.right")
                            .font(.system(size: 10, weight: .bold))
                            .foregroundStyle(Self.amber)
                            .offset(x: arrowBounce)
                    }
                }

                Spacer()

                // Dismiss X
                Button {
                    withAnimation(.spring(response: 0.3, dampingFraction: 0.7)) {
                        subscriptionManager.dismissBillingAlert()
                    }
                } label: {
                    Image(systemName: "xmark")
                        .font(.system(size: 11, weight: .bold))
                        .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)
                        .frame(width: 28, height: 28)
                        .contentShape(Rectangle())
                }
                .buttonStyle(.plain)
            }
            .padding(.horizontal, 16)
            .padding(.vertical, 12)
            .background(
                RoundedRectangle(cornerRadius: 14)
                    .fill(isDark
                        ? Color.orange.opacity(0.08)
                        : Color.orange.opacity(0.06))
                    .overlay(
                        RoundedRectangle(cornerRadius: 14)
                            .strokeBorder(animatedBorderGradient, lineWidth: 1.5)
                    )
            )
            .padding(.horizontal, 16)
            .padding(.vertical, 4)
        }
        .buttonStyle(.plain)
        .onAppear(perform: startAnimations)
        .accessibilityLabel("Billing issue. There's a problem with your subscription payment. Tap to fix it.")
        .accessibilityHint("Opens subscription management in the App Store")
        .accessibilityAddTraits(.isButton)
    }

    // MARK: - Resolved Banner

    private var resolvedBanner: some View {
        HStack(spacing: 10) {
            Image(systemName: "checkmark.circle.fill")
                .font(.system(size: 18))
                .foregroundStyle(.green)
                .scaleEffect(resolvedCheckmark ? 1.0 : 0.3)
                .opacity(resolvedCheckmark ? 1.0 : 0)

            Text("Payment updated")
                .font(.system(size: 13, weight: .semibold))
                .foregroundStyle(isDark ? .white : .primary)
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 10)
        .background(
            RoundedRectangle(cornerRadius: 14)
                .fill(Color.green.opacity(isDark ? 0.12 : 0.08))
                .overlay(
                    RoundedRectangle(cornerRadius: 14)
                        .strokeBorder(Color.green.opacity(0.3), lineWidth: 1)
                )
        )
        .padding(.horizontal, 16)
        .padding(.vertical, 4)
        .onAppear {
            withAnimation(.spring(response: 0.4, dampingFraction: 0.6)) {
                resolvedCheckmark = true
            }
        }
        .accessibilityLabel("Payment updated successfully")
    }

    // MARK: - Animated Border

    /// Gradient that slowly shifts between amber and the tier's accent colour.
    private var animatedBorderGradient: LinearGradient {
        let tierColor = tier.gradientColors.first ?? .orange
        let amberFade = Color.orange.opacity(0.5 + 0.3 * sin(Double(borderPhase)))
        let tierFade = tierColor.opacity(0.3 + 0.3 * cos(Double(borderPhase)))
        return LinearGradient(
            colors: [amberFade, tierFade, amberFade],
            startPoint: .leading,
            endPoint: .trailing
        )
    }

    // MARK: - Animations

    private func startAnimations() {
        guard !reduceMotion else { return }
        // Arrow bounce
        withAnimation(.easeInOut(duration: 1.2).repeatForever(autoreverses: true)) {
            arrowBounce = 4
        }
        // Border colour shift
        withAnimation(.linear(duration: 4.0).repeatForever(autoreverses: false)) {
            borderPhase = .pi * 2
        }
    }

    // MARK: - Actions

    private func openSubscriptionManagement() {
        Task {
            do {
                try await AppStore.showManageSubscriptions(in: windowScene)
            } catch {
                // Fallback: open Settings URL for older iOS
                if let url = URL(string: "https://apps.apple.com/account/subscriptions") {
                    await UIApplication.shared.open(url)
                }
            }
        }
    }

    private var windowScene: UIWindowScene {
        UIApplication.shared.connectedScenes
            .compactMap { $0 as? UIWindowScene }
            .first!
    }
}
