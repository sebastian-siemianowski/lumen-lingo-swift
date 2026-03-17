import SwiftUI

// MARK: - Feature Transition Overlay

/// Displays newly unlocked or locked features after a tier change.
/// Upgrade: features "light up" with staggered sparkle bursts and a ripple effect.
/// Downgrade: features dim from color to grayscale with lock overlay.
struct FeatureTransitionOverlay: View {
    @Environment(TierManager.self) private var tierManager

    @State private var showBackground = false
    @State private var showCard = false
    @State private var showTitle = false
    @State private var revealedIndices: Set<Int> = []
    @State private var showSummary = false
    @State private var dismissing = false
    @State private var ripplePhase: CGFloat = 0
    @State private var sparkleStates: [Int: Bool] = [:]

    private var isUpgrade: Bool { tierManager.isTierUpgrade }
    private var features: [PremiumFeature] {
        let diff = isUpgrade ? tierManager.newlyUnlockedFeatures : tierManager.newlyLockedFeatures
        if diff.isEmpty && isUpgrade {
            // No binary diff (e.g. Elite→Royal) — show all features the new tier has
            return PremiumFeature.allCases.filter {
                TierManager.allowedCount(for: $0, tier: tierManager.currentTier) > 0
            }
        }
        return diff
    }
    private var isShowingAllFeatures: Bool {
        let diff = isUpgrade ? tierManager.newlyUnlockedFeatures : tierManager.newlyLockedFeatures
        return diff.isEmpty && isUpgrade
    }

    var body: some View {
        if tierManager.showFeatureTransition && !features.isEmpty {
            transitionContent
                .transition(.opacity)
                .onAppear { startSequence() }
        }
    }

    // MARK: - Content

    private var transitionContent: some View {
        GeometryReader { geo in
            ZStack {
                Color.black.opacity(showBackground ? 0.65 : 0)
                    .ignoresSafeArea()

                if isUpgrade {
                    rippleRing(size: geo.size)
                }

                VStack(spacing: 0) {
                    ornamentalDivider
                        .opacity(showTitle ? 1 : 0)
                        .padding(.top, 24)
                        .padding(.bottom, 12)

                    titleView

                    ornamentalDivider
                        .opacity(showTitle ? 1 : 0)
                        .padding(.vertical, 14)

                    featureList
                        .padding(.horizontal, 24)

                    if showSummary {
                        ornamentalDivider
                            .padding(.top, 14)
                            .padding(.bottom, 8)

                        summaryView
                    }

                    Spacer().frame(height: 24)
                }
                .padding(.vertical, 4)
                .frame(maxWidth: 320)
                .tierGlassCard(colors: tierManager.currentTier.gradientColors)
                .scaleEffect(showCard ? 1.0 : 0.85)
                .opacity(showCard ? 1 : 0)
                .frame(maxWidth: .infinity, maxHeight: .infinity)
            }
            .opacity(dismissing ? 0 : 1)
        }
        .ignoresSafeArea()
    }

    // MARK: - Title

    private var titleView: some View {
        VStack(spacing: 6) {
            Image(systemName: isUpgrade ? "arrow.up.circle.fill" : "arrow.down.circle.fill")
                .font(.system(size: 36))
                .foregroundStyle(
                    isUpgrade
                        ? LinearGradient(
                            colors: tierManager.currentTier.gradientColors,
                            startPoint: .topLeading, endPoint: .bottomTrailing
                          )
                        : LinearGradient(
                            colors: [.gray, .white.opacity(0.4)],
                            startPoint: .top, endPoint: .bottom
                          )
                )
                .symbolEffect(.bounce, value: showTitle)

            Text(isUpgrade
                 ? (isShowingAllFeatures ? "Your Features" : "Features Unlocked")
                 : "Plan Adjusted")
                .font(.title2.bold())
                .foregroundStyle(.white)

            Text(isUpgrade
                 ? (isShowingAllFeatures
                    ? "Everything included in \(tierManager.currentTier.displayName)"
                    : "\(features.count) feature\(features.count == 1 ? "" : "s") now available")
                 : "\(features.count) feature\(features.count == 1 ? "" : "s") adjusted")
                .font(.subheadline)
                .foregroundStyle(.white.opacity(0.6))
        }
        .scaleEffect(showTitle ? 1.0 : 0.8)
        .opacity(showTitle ? 1 : 0)
    }

    // MARK: - Feature List

    private var featureList: some View {
        VStack(spacing: 10) {
            ForEach(Array(features.enumerated()), id: \.element) { index, feature in
                featureRow(feature: feature, index: index)
            }
        }
    }

    private func featureRow(feature: PremiumFeature, index: Int) -> some View {
        let isRevealed = revealedIndices.contains(index)
        let hasSparkle = sparkleStates[index] == true

        return HStack(spacing: 14) {
            ZStack {
                // Icon
                Image(systemName: feature.iconName)
                    .font(.title3)
                    .foregroundStyle(
                        isUpgrade
                            ? (isRevealed
                                ? AnyShapeStyle(LinearGradient(
                                    colors: tierManager.currentTier.gradientColors,
                                    startPoint: .topLeading, endPoint: .bottomTrailing))
                                : AnyShapeStyle(.white.opacity(0.2)))
                            : (isRevealed
                                ? AnyShapeStyle(.gray)
                                : AnyShapeStyle(LinearGradient(
                                    colors: tierManager.currentTier.gradientColors,
                                    startPoint: .topLeading, endPoint: .bottomTrailing)))
                    )
                    .saturation(isUpgrade ? (isRevealed ? 1.0 : 0.0) : (isRevealed ? 0.2 : 1.0))

                // Sparkle burst (upgrade only)
                if isUpgrade && hasSparkle {
                    SparkleUnlockEffect()
                        .transition(.opacity)
                }

                // Lock overlay (downgrade only)
                if !isUpgrade && isRevealed {
                    Image(systemName: "lock.fill")
                        .font(.caption2)
                        .foregroundStyle(.white.opacity(0.8))
                        .offset(x: 10, y: 10)
                        .transition(.scale.combined(with: .opacity))
                }
            }
            .frame(width: 36, height: 36)

            VStack(alignment: .leading, spacing: 2) {
                Text(feature.displayName)
                    .font(.subheadline.bold())
                    .foregroundStyle(
                        isUpgrade
                            ? (isRevealed ? .white : .white.opacity(0.3))
                            : (isRevealed ? .white.opacity(0.4) : .white)
                    )

                Text(isUpgrade
                     ? (isShowingAllFeatures ? "Included" : "Now available")
                     : "Requires upgrade")
                    .font(.caption)
                    .foregroundStyle(
                        isUpgrade
                            ? (isRevealed ? .green.opacity(0.8) : .clear)
                            : (isRevealed ? .orange.opacity(0.6) : .clear)
                    )
            }

            Spacer()

            if isRevealed {
                Image(systemName: isUpgrade ? "checkmark.circle.fill" : "xmark.circle.fill")
                    .foregroundStyle(isUpgrade ? .green : .orange.opacity(0.6))
                    .transition(.scale.combined(with: .opacity))
            }
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 12)
        .background(
            RoundedRectangle(cornerRadius: 14)
                .fill(.ultraThinMaterial)
                .opacity(isRevealed ? 1.0 : 0.3)
        )
        .scaleEffect(isRevealed ? 1.0 : 0.95)
    }

    // MARK: - Summary

    private var summaryView: some View {
        Text(isUpgrade
             ? "Enjoy your \(tierManager.currentTier.displayName) features!"
             : "\(features.count) feature\(features.count == 1 ? "" : "s") adjusted to match your \(tierManager.currentTier.displayName) plan")
            .font(.footnote)
            .foregroundStyle(.white.opacity(0.5))
            .multilineTextAlignment(.center)
            .transition(.move(edge: .bottom).combined(with: .opacity))
    }

    // MARK: - Ripple Ring (Upgrade only)

    private func rippleRing(size: CGSize) -> some View {
        let maxDim = max(size.width, size.height) * 1.2
        return Circle()
            .strokeBorder(
                tierManager.currentTier.gradientColors.first?.opacity(0.2) ?? .clear,
                lineWidth: 2
            )
            .frame(width: maxDim * ripplePhase, height: maxDim * ripplePhase)
            .opacity(max(0, 1.0 - Double(ripplePhase) * 1.3))
            .position(x: size.width / 2, y: size.height * 0.35)
    }

    // MARK: - Animation Sequence

    private func startSequence() {
        // Background fade in
        withAnimation(.easeOut(duration: 0.3)) {
            showBackground = true
        }

        // Card appears
        withAnimation(.spring(response: 0.5, dampingFraction: 0.75).delay(0.05)) {
            showCard = true
        }

        // Title
        withAnimation(.spring(response: 0.4, dampingFraction: 0.7).delay(0.15)) {
            showTitle = true
        }

        // Ripple ring (upgrade only)
        if isUpgrade {
            withAnimation(.easeOut(duration: 2.0).delay(0.3)) {
                ripplePhase = 1.0
            }
        }

        // Stagger feature reveals
        let staggerDelay: Double = isUpgrade ? 0.25 : 0.15
        for index in features.indices {
            let delay = 0.5 + Double(index) * staggerDelay

            // Reveal the row
            DispatchQueue.main.asyncAfter(deadline: .now() + delay) {
                withAnimation(.spring(response: 0.35, dampingFraction: 0.65)) {
                    revealedIndices.insert(index)
                }

                // Haptic per feature on upgrade, single at end on downgrade
                if isUpgrade {
                    let feedback = UIImpactFeedbackGenerator(style: .light)
                    feedback.impactOccurred()
                }

                // Sparkle burst (upgrade only)
                if isUpgrade {
                    withAnimation(.easeOut(duration: 0.4)) {
                        sparkleStates[index] = true
                    }
                    DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
                        sparkleStates[index] = false
                    }
                }
            }
        }

        // Summary + auto-dismiss
        let totalRevealTime = 0.5 + Double(features.count) * staggerDelay + 0.5
        DispatchQueue.main.asyncAfter(deadline: .now() + totalRevealTime) {
            // One gentle haptic at end for downgrade
            if !isUpgrade {
                let feedback = UIImpactFeedbackGenerator(style: .light)
                feedback.impactOccurred()
            }
            withAnimation(.easeOut(duration: 0.5)) {
                showSummary = true
            }
        }

        // Auto-dismiss after showing everything
        let dismissTime = totalRevealTime + 2.0
        DispatchQueue.main.asyncAfter(deadline: .now() + dismissTime) {
            withAnimation(.easeOut(duration: 0.5)) {
                dismissing = true
            }
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
                tierManager.showFeatureTransition = false
                resetState()
            }
        }
    }

    private func resetState() {
        showBackground = false
        showCard = false
        showTitle = false
        revealedIndices = []
        showSummary = false
        dismissing = false
        ripplePhase = 0
        sparkleStates = [:]
    }

    // MARK: - Ornamental Divider

    private var ornamentalDivider: some View {
        let colors = tierManager.currentTier.gradientColors
        return HStack(spacing: 8) {
            Rectangle()
                .fill(
                    LinearGradient(
                        colors: [.clear, colors.first?.opacity(0.4) ?? .clear],
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .frame(height: 0.5)

            Image(systemName: "diamond.fill")
                .font(.system(size: 5))
                .foregroundStyle(colors.first?.opacity(0.5) ?? .clear)

            Rectangle()
                .fill(
                    LinearGradient(
                        colors: [colors.last?.opacity(0.4) ?? .clear, .clear],
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .frame(height: 0.5)
        }
        .padding(.horizontal, 32)
    }
}

// MARK: - Sparkle Unlock Effect

/// 12-particle burst that emanates outward and fades over 0.5s.
struct SparkleUnlockEffect: View {
    @State private var phase: CGFloat = 0

    var body: some View {
        Canvas { context, size in
            let center = CGPoint(x: size.width / 2, y: size.height / 2)
            let particleCount = 12

            for i in 0..<particleCount {
                let angle = (Double(i) / Double(particleCount)) * .pi * 2
                let distance: CGFloat = 6 + phase * 18
                let x = center.x + cos(angle) * distance
                let y = center.y + sin(angle) * distance
                let opacity = max(0, 1.0 - phase * 1.5)
                let radius: CGFloat = 1.5 * (1.0 - phase * 0.6)

                context.opacity = opacity
                let rect = CGRect(
                    x: x - radius, y: y - radius,
                    width: radius * 2, height: radius * 2
                )
                context.fill(
                    Path(ellipseIn: rect),
                    with: .color(.white)
                )
            }
        }
        .frame(width: 44, height: 44)
        .onAppear {
            withAnimation(.easeOut(duration: 0.5)) {
                phase = 1.0
            }
        }
    }
}
