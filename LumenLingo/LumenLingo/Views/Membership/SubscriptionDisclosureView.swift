import SwiftUI

// MARK: - Subscription Disclosure View

/// Apple-required subscription disclosure (Guideline 3.1.2).
/// Displays auto-renewal terms, payment info, cancellation instructions,
/// trial disclosure, links to Terms & Privacy, and a Restore Purchases button.
/// Reusable across all paywall surfaces.
struct SubscriptionDisclosureView: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization
    @Environment(SubscriptionManager.self) private var subscriptionManager

    /// Callback when "Restore Purchases" is tapped.
    var onRestorePurchases: () -> Void = {}

    /// Callback when "Redeem Code" is tapped (Story 3.4).
    var onRedeemCode: () -> Void = {}

    private var L: AppStrings { localization.strings }
    private var isDark: Bool { colorScheme == .dark }

    /// Dynamic pricing string from StoreKit, with fallback to hardcoded values.
    private var pricingSummary: String {
        let pro = subscriptionManager.displayPrice(for: .pro)
        let elite = subscriptionManager.displayPrice(for: .elite)
        let royal = subscriptionManager.displayPrice(for: .royal)
        return "Pro \(pro)/mo · Elite \(elite)/mo · Royal \(royal)/mo"
    }

    var body: some View {
        VStack(spacing: 16) {
            // Subscription terms
            disclosureText

            // Legal links + Restore button
            legalLinks

            // Action buttons
            HStack(spacing: 12) {
                restoreButton
                redeemCodeButton
            }
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
            Text(pricingSummary)
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

            // Contract duration (CCR 2013 / CRD)
            Text(L.subscriptionContractDuration)
                .font(.system(size: 11))
                .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)

            // Cooling-off waiver (CCR 2013)
            Text(L.subscriptionCoolingOff)
                .font(.system(size: 11))
                .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)

            // Refund process
            Text(L.subscriptionRefundNotice)
                .font(.system(size: 11))
                .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)

            // Trader identity (CCR 2013 Schedule 2)
            Text(L.subscriptionTraderInfo)
                .font(.system(size: 10))
                .foregroundStyle(isDark ? .white.opacity(0.3) : .secondary.opacity(0.7))

            // EU Consumer Rights Directive (2011/83/EU)
            Text(L.subscriptionEUConsumerRights)
                .font(.system(size: 10))
                .foregroundStyle(isDark ? .white.opacity(0.3) : .secondary.opacity(0.7))

            // Step-by-step cancellation instructions
            Text(L.subscriptionCancelSteps)
                .font(.system(size: 10))
                .foregroundStyle(isDark ? .white.opacity(0.3) : .secondary.opacity(0.7))

            // VAT / tax compliance notice
            Text(L.subscriptionVATNotice)
                .font(.system(size: 10))
                .foregroundStyle(isDark ? .white.opacity(0.3) : .secondary.opacity(0.7))
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
            guard !subscriptionManager.isRestoring else { return }
            HapticsService.shared.buttonPress()
            onRestorePurchases()
        } label: {
            HStack(spacing: 6) {
                if subscriptionManager.isRestoring {
                    ProgressView()
                        .scaleEffect(0.7)
                        .tint(isDark ? .white.opacity(0.6) : .secondary)
                    Text("Restoring\u{2026}")
                        .font(.system(size: 13, weight: .medium))
                } else {
                    Image(systemName: "arrow.clockwise")
                        .font(.system(size: 12, weight: .medium))
                    Text(L.restorePurchases)
                        .font(.system(size: 13, weight: .medium))
                }
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
            .animation(.easeInOut(duration: 0.2), value: subscriptionManager.isRestoring)
        }
        .buttonStyle(.plain)
        .disabled(subscriptionManager.isRestoring)
        .accessibilityLabel(subscriptionManager.isRestoring ? "Restoring purchases" : L.restorePurchases)
    }

    // MARK: - Redeem Code (Story 3.4)

    private var redeemCodeButton: some View {
        Button {
            HapticsService.shared.buttonPress()
            onRedeemCode()
        } label: {
            HStack(spacing: 6) {
                Image(systemName: "giftcard")
                    .font(.system(size: 12, weight: .medium))
                Text("Redeem Code")
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
        .disabled(subscriptionManager.isPurchasing)
        .accessibilityLabel("Redeem promotional code")
        .accessibilityHint("Opens the App Store code redemption sheet")
    }
}
