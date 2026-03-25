import SwiftUI

// MARK: - Paywall View (Story 2.5)

/// Context-aware paywall presentation wrapper.
/// Adapts header, highlighted tier, and analytics context based on how the paywall was triggered.
struct PaywallView: View {
    let context: PaywallContext
    @Environment(\.dismiss) private var dismiss
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.horizontalSizeClass) private var sizeClass
    @Environment(TierManager.self) private var tierManager
    @Environment(SubscriptionManager.self) private var subscriptionManager
    @State private var appeared = false

    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        NavigationStack {
            VStack(spacing: 0) {
                contextHeader
                MembershipView(isSheet: true, paywallContext: context)
            }
            .toolbar {
                ToolbarItem(placement: .cancellationAction) {
                    Button("Not now") {
                        dismiss()
                    }
                    .foregroundStyle(isDark ? .white.opacity(0.6) : .secondary)
                }
            }
            .onAppear {
                withAnimation(.easeOut(duration: 0.3)) {
                    appeared = true
                }
            }
        }
        .presentationDragIndicator(.visible)
        .presentationDetents(sizeClass == .regular ? [.large] : [.large, .medium])
    }

    // MARK: - Context Header

    @ViewBuilder
    private var contextHeader: some View {
        switch context {
        case .featureGate(let feature):
            featureGateHeader(feature)
        case .trialExpiry(let days):
            trialExpiryHeader(days)
        case .upgradeNudge(let milestone):
            upgradeNudgeHeader(milestone)
        default:
            EmptyView()
        }
    }

    private func featureGateHeader(_ feature: PremiumFeature) -> some View {
        VStack(spacing: 8) {
            Image(systemName: feature.iconName)
                .font(.system(size: 40))
                .foregroundStyle(
                    LinearGradient(
                        colors: [.purple, .cyan],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )
                .symbolEffect(.pulse, options: .repeating)

            Text(context.headline)
                .font(.title2.bold())
                .multilineTextAlignment(.center)

            Text(feature.benefitText)
                .font(.subheadline)
                .foregroundStyle(.secondary)
                .multilineTextAlignment(.center)
        }
        .padding(.horizontal, 24)
        .padding(.vertical, 16)
        .opacity(appeared ? 1 : 0)
        .offset(y: appeared ? 0 : 10)
    }

    private func trialExpiryHeader(_ days: Int) -> some View {
        VStack(spacing: 12) {
            // Countdown ring
            ZStack {
                Circle()
                    .stroke(isDark ? Color.white.opacity(0.1) : Color.gray.opacity(0.15), lineWidth: 4)
                    .frame(width: 60, height: 60)
                Circle()
                    .trim(from: 0, to: CGFloat(days) / 7.0)
                    .stroke(
                        days <= 3
                            ? LinearGradient(colors: [.orange, .red], startPoint: .top, endPoint: .bottom)
                            : LinearGradient(colors: [.cyan, .purple], startPoint: .top, endPoint: .bottom),
                        style: StrokeStyle(lineWidth: 4, lineCap: .round)
                    )
                    .frame(width: 60, height: 60)
                    .rotationEffect(.degrees(-90))

                Text("\(days)")
                    .font(.title2.bold().monospacedDigit())
            }

            Text(context.headline)
                .font(.title3.bold())

            Text("Don't lose access to your premium features")
                .font(.subheadline)
                .foregroundStyle(.secondary)
                .multilineTextAlignment(.center)
        }
        .padding(.horizontal, 24)
        .padding(.vertical, 16)
        .opacity(appeared ? 1 : 0)
    }

    private func upgradeNudgeHeader(_ milestone: String) -> some View {
        VStack(spacing: 8) {
            Text("🎉")
                .font(.system(size: 44))

            Text(milestone)
                .font(.headline)
                .foregroundStyle(.secondary)

            Text(context.headline)
                .font(.title2.bold())
        }
        .padding(.horizontal, 24)
        .padding(.vertical, 16)
        .opacity(appeared ? 1 : 0)
        .offset(y: appeared ? 0 : 10)
    }
}

// MARK: - URL Scheme Support

extension PaywallContext {
    /// Parse from a deep link URL query.
    /// e.g. `lumenlingo://paywall?context=feature_gate&feature=quantumFlow`
    init?(queryItems: [URLQueryItem]) {
        guard let contextValue = queryItems.first(where: { $0.name == "context" })?.value else {
            return nil
        }
        switch contextValue {
        case "membership_tab": self = .membershipTab
        case "feature_gate":
            guard let featureName = queryItems.first(where: { $0.name == "feature" })?.value,
                  let feature = PremiumFeature.allCases.first(where: { $0.overrideKey == featureName }) else {
                return nil
            }
            self = .featureGate(feature)
        case "upgrade_nudge":
            let milestone = queryItems.first(where: { $0.name == "milestone" })?.value ?? "Great progress!"
            self = .upgradeNudge(milestone: milestone)
        case "trial_expiry":
            guard let daysStr = queryItems.first(where: { $0.name == "days" })?.value,
                  let days = Int(daysStr) else {
                return nil
            }
            self = .trialExpiry(daysRemaining: days)
        case "settings": self = .settings
        default: return nil
        }
    }
}
