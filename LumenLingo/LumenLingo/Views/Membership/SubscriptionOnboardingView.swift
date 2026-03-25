import SwiftUI

// MARK: - Subscription Onboarding Flow (Story 7.3)

/// A tier-specific carousel that highlights newly unlocked premium features
/// after an upgrade. Shows interactive previews, "Try It" CTAs, and a summary card.
struct SubscriptionOnboardingView: View {
    @Environment(TierManager.self) private var tierManager
    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization

    @State private var currentPage = 0
    @State private var appeared = false
    @State private var dismissing = false

    private var strings: AppStrings { localization.strings }
    private var tier: MembershipTier { tierManager.currentTier }
    private var features: [PremiumFeature] { tierManager.onboardingFeatures(for: tier) }
    private var totalPages: Int { features.count + 1 } // features + summary

    var body: some View {
        ZStack {
            // Dimmed background
            Color.black.opacity(appeared ? 0.85 : 0)
                .ignoresSafeArea()
                .onTapGesture { } // absorb taps

            VStack(spacing: 0) {
                // Skip button at top-right
                skipButton
                    .padding(.top, 12)
                    .padding(.trailing, 20)

                // Page indicator dots
                pageIndicator
                    .padding(.top, 8)

                // Carousel content
                TabView(selection: $currentPage) {
                    ForEach(Array(features.enumerated()), id: \.offset) { index, feature in
                        featureScreen(feature: feature, index: index)
                            .tag(index)
                    }
                    summaryScreen
                        .tag(features.count)
                }
                .tabViewStyle(.page(indexDisplayMode: .never))
                .animation(.spring(response: 0.4, dampingFraction: 0.8), value: currentPage)

                // Bottom navigation
                bottomBar
                    .padding(.bottom, 20)
            }
            .opacity(appeared ? 1 : 0)
            .scaleEffect(appeared ? 1 : 0.9)
            .opacity(dismissing ? 0 : 1)
        }
        .onAppear(perform: handleAppear)
        .onChange(of: currentPage) { _, newPage in
            trackScreenViewed(at: newPage)
        }
        .accessibilityAddTraits(.isModal)
    }

    // MARK: - Skip Button

    private var skipButton: some View {
        HStack {
            Spacer()
            Button(action: skip) {
                Text(strings.onboardingSkip)
                    .font(.system(size: 13, weight: .medium))
                    .foregroundStyle(.white.opacity(0.6))
            }
            .accessibilityLabel(strings.onboardingSkip)
        }
    }

    // MARK: - Page Indicator

    private var pageIndicator: some View {
        HStack(spacing: 6) {
            ForEach(0..<totalPages, id: \.self) { i in
                Circle()
                    .fill(i == currentPage ? tier.accentColor : .white.opacity(0.3))
                    .frame(width: i == currentPage ? 8 : 6,
                           height: i == currentPage ? 8 : 6)
                    .animation(.spring(response: 0.3), value: currentPage)
            }
        }
    }

    // MARK: - Feature Screen

    private func featureScreen(feature: PremiumFeature, index: Int) -> some View {
        VStack(spacing: 24) {
            Spacer()

            // Feature icon with tier glow
            ZStack {
                Circle()
                    .fill(tier.accentColor.opacity(0.15))
                    .frame(width: 100, height: 100)

                Image(systemName: feature.iconName)
                    .font(.system(size: 40, weight: .light))
                    .foregroundStyle(tier.accentColor)
                    .symbolEffect(.pulse, options: .repeating, isActive: appeared)
            }

            // Feature name
            Text(feature.displayName)
                .font(.system(size: 24, weight: .bold))
                .foregroundStyle(.white)

            // Brief description (2 lines max)
            Text(feature.benefitText)
                .font(.system(size: 15, weight: .regular))
                .foregroundStyle(.white.opacity(0.7))
                .multilineTextAlignment(.center)
                .lineLimit(2)
                .padding(.horizontal, 40)

            // Live interactive preview placeholder
            featurePreview(for: feature)
                .frame(height: 120)
                .padding(.horizontal, 24)

            Spacer()
        }
        .accessibilityElement(children: .combine)
        .accessibilityLabel("\(feature.displayName): \(feature.benefitText)")
    }

    // MARK: - Feature Previews

    @ViewBuilder
    private func featurePreview(for feature: PremiumFeature) -> some View {
        switch feature {
        case .soundscapes:
            // Mini waveform visualization
            soundscapePreview
        case .breathingOrbs:
            // Pulsing orb
            breathingOrbPreview
        case .offlineMode:
            // Download icon
            offlineModePreview
        default:
            // Generic feature card
            genericFeaturePreview(for: feature)
        }
    }

    private var soundscapePreview: some View {
        HStack(spacing: 3) {
            ForEach(0..<20, id: \.self) { i in
                RoundedRectangle(cornerRadius: 2)
                    .fill(tier.accentColor.opacity(0.6))
                    .frame(width: 4, height: CGFloat.random(in: 15...60))
                    .animation(
                        .easeInOut(duration: Double.random(in: 0.5...1.5))
                        .repeatForever(autoreverses: true)
                        .delay(Double(i) * 0.05),
                        value: appeared
                    )
            }
        }
        .frame(height: 70)
        .accessibilityLabel("Soundscape waveform preview")
    }

    private var breathingOrbPreview: some View {
        Circle()
            .fill(
                RadialGradient(
                    colors: [tier.accentColor, tier.accentColor.opacity(0.2)],
                    center: .center,
                    startRadius: 5,
                    endRadius: 40
                )
            )
            .frame(width: 80, height: 80)
            .scaleEffect(appeared ? 1.2 : 0.8)
            .opacity(appeared ? 0.8 : 0.5)
            .animation(
                .easeInOut(duration: 3.0).repeatForever(autoreverses: true),
                value: appeared
            )
            .accessibilityLabel("Breathing orb preview")
    }

    private var offlineModePreview: some View {
        VStack(spacing: 8) {
            Image(systemName: "arrow.down.circle.fill")
                .font(.system(size: 36))
                .foregroundStyle(tier.accentColor)
                .symbolEffect(.bounce, options: .repeating.speed(0.5), isActive: appeared)

            Text("Learn Anywhere")
                .font(.system(size: 14, weight: .medium))
                .foregroundStyle(.white.opacity(0.6))
        }
        .accessibilityLabel("Offline mode: download lessons to learn anywhere")
    }

    private func genericFeaturePreview(for feature: PremiumFeature) -> some View {
        RoundedRectangle(cornerRadius: 16)
            .fill(.ultraThinMaterial)
            .overlay {
                VStack(spacing: 8) {
                    Image(systemName: feature.iconName)
                        .font(.system(size: 28))
                        .foregroundStyle(tier.accentColor)
                    Text(feature.displayName)
                        .font(.system(size: 13, weight: .medium))
                        .foregroundStyle(.white.opacity(0.7))
                }
            }
            .frame(height: 100)
            .accessibilityHidden(true)
    }

    // MARK: - Summary Screen

    private var summaryScreen: some View {
        VStack(spacing: 24) {
            Spacer()

            // Feature count badge
            Text("\(features.count)")
                .font(.system(size: 56, weight: .bold, design: .rounded))
                .foregroundStyle(tier.accentColor)

            Text("\(strings.onboardingSummaryTitle) \(features.count) \(strings.onboardingSummaryFeatures)")
                .font(.system(size: 20, weight: .semibold))
                .foregroundStyle(.white)
                .multilineTextAlignment(.center)

            // Feature list
            VStack(alignment: .leading, spacing: 12) {
                ForEach(features, id: \.self) { feature in
                    HStack(spacing: 10) {
                        Image(systemName: "checkmark.circle.fill")
                            .foregroundStyle(tier.accentColor)
                            .font(.system(size: 16))
                        Text(feature.displayName)
                            .font(.system(size: 15, weight: .medium))
                            .foregroundStyle(.white.opacity(0.9))
                    }
                }
            }
            .padding(.horizontal, 40)

            Spacer()

            // Done button
            Button(action: complete) {
                Text(strings.onboardingDone)
                    .font(.system(size: 17, weight: .bold))
                    .foregroundStyle(.white)
                    .frame(maxWidth: .infinity)
                    .frame(height: 50)
                    .background(tier.accentColor, in: Capsule())
            }
            .padding(.horizontal, 40)
            .accessibilityLabel(strings.onboardingDone)

            Spacer()
                .frame(height: 20)
        }
        .accessibilityElement(children: .combine)
        .accessibilityLabel("Summary: \(features.count) features unlocked")
    }

    // MARK: - Bottom Bar

    private var bottomBar: some View {
        HStack {
            if currentPage < features.count {
                // Next button
                Button(action: nextPage) {
                    Text(strings.onboardingNext)
                        .font(.system(size: 16, weight: .semibold))
                        .foregroundStyle(.white)
                        .frame(maxWidth: .infinity)
                        .frame(height: 48)
                        .background(tier.accentColor, in: Capsule())
                }
                .accessibilityLabel(strings.onboardingNext)
            }
        }
        .padding(.horizontal, 40)
    }

    // MARK: - Actions

    private func handleAppear() {
        withAnimation(.spring(response: 0.5, dampingFraction: 0.8)) {
            appeared = true
        }
        PaywallAnalytics.trackOnboardingStarted(
            tier: tier.rawValue,
            screenCount: totalPages
        )
        if !features.isEmpty {
            trackScreenViewed(at: 0)
        }
    }

    private func nextPage() {
        withAnimation(.spring(response: 0.35, dampingFraction: 0.8)) {
            currentPage = min(currentPage + 1, totalPages - 1)
        }
    }

    private func skip() {
        let lastScreen = currentPage < features.count
            ? String(describing: features[currentPage])
            : "summary"
        PaywallAnalytics.trackOnboardingSkipped(
            tier: tier.rawValue,
            lastScreen: lastScreen
        )
        dismiss()
    }

    private func complete() {
        tierManager.markOnboardingCompleted(for: tier)
        PaywallAnalytics.trackOnboardingCompleted(tier: tier.rawValue)
        dismiss()
    }

    private func dismiss() {
        withAnimation(.easeOut(duration: 0.4)) {
            dismissing = true
        }
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.4) {
            tierManager.showSubscriptionOnboarding = false
        }
    }

    private func trackScreenViewed(at index: Int) {
        let screenName: String
        if index < features.count {
            screenName = String(describing: features[index])
        } else {
            screenName = "summary"
        }
        PaywallAnalytics.trackOnboardingScreenViewed(
            tier: tier.rawValue,
            screen: screenName,
            index: index
        )
    }
}
