import SwiftUI

// MARK: - Welcome Back Sheet (Story 5.7)

/// A warm, nostalgic sheet shown once to lapsed users 7+ days after their subscription expired.
/// Leads with the user's preserved progress and gently offers resubscription.
/// Respects user agency: dismisses for 30 days, never nags.
struct WelcomeBackSheet: View {
    @Environment(SubscriptionManager.self) private var subscriptionManager
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    @Environment(\.dismiss) private var dismiss

    let onResubscribe: () -> Void

    private var isDark: Bool { colorScheme == .dark }
    private let warmGradient: [Color] = [
        Color(red: 1.0, green: 0.75, blue: 0.3),
        Color(red: 0.95, green: 0.5, blue: 0.4),
        Color(red: 0.75, green: 0.35, blue: 0.85)
    ]

    var body: some View {
        ScrollView {
            VStack(spacing: 28) {
                headerSection
                progressSection
                ctaSection
            }
            .padding(.horizontal, 24)
            .padding(.top, 36)
            .padding(.bottom, 44)
        }
        .background(isDark ? Color(red: 10/255, green: 8/255, blue: 28/255) : Color(red: 0.98, green: 0.97, blue: 1.0))
        .accessibilityElement(children: .contain)
    }

    // MARK: - Header

    private var headerSection: some View {
        VStack(spacing: 14) {
            Image(systemName: "hand.wave.fill")
                .font(.system(size: 42))
                .foregroundStyle(
                    LinearGradient(
                        colors: warmGradient,
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )
                .symbolEffect(.bounce, options: reduceMotion ? .nonRepeating : .default)

            Text("Welcome back")
                .font(.system(size: 24, weight: .bold))
                .foregroundStyle(isDark ? .white : .primary)

            Text("We've been keeping your progress safe.\nReady to pick up where you left off?")
                .font(.system(size: 15))
                .foregroundStyle(isDark ? .white.opacity(0.65) : .secondary)
                .multilineTextAlignment(.center)
                .lineSpacing(2)
        }
    }

    // MARK: - Progress

    private var progressSection: some View {
        VStack(spacing: 0) {
            progressRow(icon: "book.closed.fill", label: "Your journey", value: "Still waiting for you", color: .blue)
            Divider().opacity(0.3).padding(.leading, 48)
            progressRow(icon: "flame.fill", label: "Your streak data", value: "Preserved", color: .orange)
            Divider().opacity(0.3).padding(.leading, 48)
            progressRow(icon: "star.fill", label: "Your achievements", value: "Safe and sound", color: .yellow)
        }
        .background(
            RoundedRectangle(cornerRadius: 14, style: .continuous)
                .fill(isDark ? .white.opacity(0.05) : .black.opacity(0.03))
        )
        .clipShape(RoundedRectangle(cornerRadius: 14, style: .continuous))
    }

    private func progressRow(icon: String, label: String, value: String, color: Color) -> some View {
        HStack(spacing: 12) {
            Image(systemName: icon)
                .font(.system(size: 16))
                .foregroundStyle(color)
                .frame(width: 28)

            VStack(alignment: .leading, spacing: 2) {
                Text(label)
                    .font(.system(size: 14, weight: .medium))
                    .foregroundStyle(isDark ? .white : .primary)
                Text(value)
                    .font(.system(size: 12))
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
            }

            Spacer()

            Image(systemName: "checkmark.circle.fill")
                .font(.system(size: 16))
                .foregroundStyle(.green.opacity(0.8))
        }
        .padding(.horizontal, 14)
        .padding(.vertical, 11)
    }

    // MARK: - CTAs

    private var ctaSection: some View {
        VStack(spacing: 12) {
            Button {
                dismiss()
                onResubscribe()
            } label: {
                Text("Resubscribe")
                    .font(.system(size: 16, weight: .bold))
                    .foregroundStyle(.white)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 14)
                    .background(
                        Capsule()
                            .fill(
                                LinearGradient(
                                    colors: warmGradient,
                                    startPoint: .leading,
                                    endPoint: .trailing
                                )
                            )
                    )
            }
            .buttonStyle(.plain)
            .accessibilityLabel("Resubscribe to continue learning")

            Button {
                subscriptionManager.dismissWelcomeBack()
                dismiss()
            } label: {
                Text("Not yet")
                    .font(.system(size: 15, weight: .medium))
                    .foregroundStyle(isDark ? .white.opacity(0.7) : .secondary)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 12)
            }
            .buttonStyle(.plain)
            .accessibilityLabel("Dismiss for 30 days")
        }
    }
}
