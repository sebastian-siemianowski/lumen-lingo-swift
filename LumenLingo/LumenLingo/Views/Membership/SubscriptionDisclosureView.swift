import SwiftUI

// MARK: - Subscription Disclosure View

/// Apple-required subscription disclosure (Guideline 3.1.2).
/// Displays auto-renewal terms, payment info, cancellation instructions,
/// trial disclosure, links to Terms & Privacy, and a Restore Purchases button.
/// Reusable across all paywall surfaces.
struct SubscriptionDisclosureView: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization

    /// Callback when "Restore Purchases" is tapped.
    var onRestorePurchases: () -> Void = {}

    private var L: AppStrings { localization.strings }
    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        VStack(spacing: 16) {
            // Subscription terms
            disclosureText

            // Legal links + Restore button
            legalLinks

            // Restore Purchases
            restoreButton
        }
        .padding(.horizontal, 20)
        .padding(.vertical, 18)
        .background(
            RoundedRectangle(cornerRadius: 16, style: .continuous)
                .fill(isDark ? Color.white.opacity(0.04) : Color.black.opacity(0.03))
                .overlay(
                    RoundedRectangle(cornerRadius: 16, style: .continuous)
                        .strokeBorder(isDark ? Color.white.opacity(0.06) : Color.black.opacity(0.06), lineWidth: 0.5)
                )
        )
    }

    // MARK: - Disclosure Text

    private var disclosureText: some View {
        VStack(alignment: .leading, spacing: 8) {
            // Pricing line
            Text("Pro £9.99/mo · Elite £19.99/mo · Royal £99.99/mo")
                .font(.system(size: 11, weight: .semibold))
                .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)

            // Auto-renewal
            Text(L.subscriptionAutoRenew)
                .font(.system(size: 11))
                .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)

            // Payment notice
            Text(L.subscriptionPaymentNotice)
                .font(.system(size: 11))
                .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)

            // Cancellation
            Text(L.subscriptionManageCancel)
                .font(.system(size: 11))
                .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)

            // Trial disclosure
            Text(L.subscriptionTrialNotice)
                .font(.system(size: 11))
                .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
    }

    // MARK: - Legal Links

    private var legalLinks: some View {
        HStack(spacing: 4) {
            Text(L.subscriptionLegalPrefix)
                .font(.system(size: 11))
                .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)

            Link(L.termsOfServiceTitle, destination: URL(string: "https://lumenlingo.com/en/terms")!)
                .font(.system(size: 11, weight: .medium))
                .foregroundStyle(.purple)

            Text(L.subscriptionLegalAnd)
                .font(.system(size: 11))
                .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)

            Link(L.privacyPolicyTitle, destination: URL(string: "https://lumenlingo.com/en/privacy")!)
                .font(.system(size: 11, weight: .medium))
                .foregroundStyle(.purple)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
    }

    // MARK: - Restore Purchases

    private var restoreButton: some View {
        Button {
            HapticsService.shared.buttonPress()
            onRestorePurchases()
        } label: {
            HStack(spacing: 6) {
                Image(systemName: "arrow.clockwise")
                    .font(.system(size: 12, weight: .medium))
                Text(L.restorePurchases)
                    .font(.system(size: 13, weight: .medium))
            }
            .foregroundStyle(isDark ? .white.opacity(0.6) : .secondary)
            .frame(maxWidth: .infinity)
            .padding(.vertical, 10)
            .background(
                Capsule()
                    .fill(isDark ? Color.white.opacity(0.06) : Color.black.opacity(0.05))
                    .overlay(
                        Capsule()
                            .strokeBorder(isDark ? Color.white.opacity(0.08) : Color.black.opacity(0.08), lineWidth: 0.5)
                    )
            )
        }
        .buttonStyle(.plain)
        .accessibilityLabel(L.restorePurchases)
    }
}
