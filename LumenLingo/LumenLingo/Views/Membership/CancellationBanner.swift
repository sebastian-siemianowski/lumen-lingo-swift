import SwiftUI

// MARK: - Cancellation Banner (Story 5.3)

/// A one-time, non-intrusive banner shown when a user cancels their subscription.
/// Softer tone than the billing alert — acknowledges the cancellation and reminds
/// the user they still have access until the expiry date. Dismissible, does not reappear.
struct CancellationBanner: View {
    @Environment(SubscriptionManager.self) private var subscriptionManager
    @Environment(TierManager.self) private var tierManager
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.accessibilityReduceMotion) private var reduceMotion

    @State private var appeared = false
    @State private var shimmerOffset: CGFloat = -1

    private var isDark: Bool { colorScheme == .dark }
    private var tier: MembershipTier { tierManager.currentTier }

    private static let softBlue = Color(red: 0.4, green: 0.6, blue: 0.95)

    var body: some View {
        if subscriptionManager.showCancellationBanner && subscriptionManager.isCancelling {
            bannerContent
                .transition(.asymmetric(
                    insertion: .move(edge: .top).combined(with: .opacity),
                    removal: .move(edge: .top).combined(with: .opacity)
                ))
        }
    }

    // MARK: - Banner Content

    private var bannerContent: some View {
        HStack(spacing: 12) {
            Image(systemName: "calendar.badge.clock")
                .font(.system(size: 18))
                .foregroundStyle(Self.softBlue)
                .symbolEffect(.pulse, options: reduceMotion ? .nonRepeating : .repeating.speed(0.4))

            VStack(alignment: .leading, spacing: 3) {
                Text("Your \(tier.displayName) plan is ending")
                    .font(.system(size: 13, weight: .semibold))
                    .foregroundStyle(isDark ? .white : .primary)
                    .lineLimit(1)

                if let expiry = subscriptionManager.cancellationExpiryDateString {
                    Text("You'll keep full access until \(expiry)")
                        .font(.system(size: 12, weight: .regular))
                        .foregroundStyle(isDark ? .white.opacity(0.7) : .secondary)
                        .lineLimit(2)
                        .multilineTextAlignment(.leading)
                }
            }

            Spacer(minLength: 4)

            Button {
                withAnimation(.spring(response: 0.35, dampingFraction: 0.8)) {
                    subscriptionManager.dismissCancellationBanner()
                }
            } label: {
                Image(systemName: "xmark")
                    .font(.system(size: 11, weight: .bold))
                    .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)
                    .frame(width: 28, height: 28)
                    .contentShape(Circle())
            }
            .buttonStyle(.plain)
            .accessibilityLabel("Dismiss cancellation notice")
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 12)
        .background(
            RoundedRectangle(cornerRadius: 14, style: .continuous)
                .fill(
                    isDark
                        ? Color.white.opacity(0.08)
                        : Color.black.opacity(0.04)
                )
                .overlay(
                    RoundedRectangle(cornerRadius: 14, style: .continuous)
                        .strokeBorder(
                            LinearGradient(
                                colors: [
                                    Self.softBlue.opacity(0.4),
                                    Self.softBlue.opacity(0.15),
                                    Self.softBlue.opacity(0.4)
                                ],
                                startPoint: UnitPoint(x: shimmerOffset, y: 0),
                                endPoint: UnitPoint(x: shimmerOffset + 0.4, y: 1)
                            ),
                            lineWidth: 1
                        )
                )
        )
        .padding(.horizontal, 16)
        .padding(.top, 4)
        .padding(.bottom, 2)
        .opacity(appeared ? 1 : 0)
        .offset(y: appeared ? 0 : -10)
        .onAppear {
            withAnimation(.spring(response: 0.5, dampingFraction: 0.75).delay(0.15)) {
                appeared = true
            }
            guard !reduceMotion else { return }
            withAnimation(.linear(duration: 3).repeatForever(autoreverses: false)) {
                shimmerOffset = 1.2
            }
        }
        .accessibilityElement(children: .combine)
        .accessibilityLabel(accessibilityText)
        .accessibilityAddTraits(.isStaticText)
    }

    // MARK: - VoiceOver

    private var accessibilityText: String {
        var label = "Your \(tier.displayName) subscription is ending."
        if let expiry = subscriptionManager.cancellationExpiryDateString {
            label += " You have access until \(expiry)."
        }
        label += " Dismiss to close this notice."
        return label
    }
}
