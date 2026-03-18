import SwiftUI

// MARK: - Feature Transition Overlay

/// Displays newly unlocked or locked features after a tier change.
/// Upgrade: features "light up" with staggered sparkle bursts and a ripple effect
/// against a cosmic gradient background with drifting particles.
/// Downgrade: features dim from color to grayscale with lock overlay
/// as the background slowly desaturates.
struct FeatureTransitionOverlay: View {
    @Environment(TierManager.self) private var tierManager

    @State private var showBackground = false
    @State private var showCard = false
    @State private var showTitle = false
    @State private var revealedIndices: Set<Int> = []
    @State private var showSummary = false
    @State private var dismissing = false
    @State private var ripplePhase: CGFloat = 0
    @State private var backgroundGlow: CGFloat = 0.2
    @State private var backgroundSaturation: CGFloat = 1.0

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
                cosmicBackground(size: geo.size)

                if isUpgrade {
                    cosmicParticles(size: geo.size)
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

    // MARK: - Cosmic Background

    private func cosmicBackground(size: CGSize) -> some View {
        let tierColors = tierManager.currentTier.gradientColors
        let primaryColor = tierColors.first ?? .purple

        return ZStack {
            // Deep space base
            Color(hex: "#06061a")

            // Radial glow from center, intensity tied to reveal progress
            RadialGradient(
                colors: [
                    primaryColor.opacity(Double(backgroundGlow)),
                    primaryColor.opacity(Double(backgroundGlow) * 0.3),
                    Color(hex: "#0a0a2e").opacity(0.8),
                    Color(hex: "#06061a")
                ],
                center: .center,
                startRadius: 30,
                endRadius: max(size.width, size.height) * 0.7
            )

            // Secondary accent glow for multi-color tiers
            if tierColors.count > 1 {
                RadialGradient(
                    colors: [
                        tierColors[1].opacity(Double(backgroundGlow) * 0.15),
                        .clear
                    ],
                    center: UnitPoint(x: 0.3, y: 0.7),
                    startRadius: 20,
                    endRadius: size.width * 0.5
                )
            }
        }
        .saturation(Double(backgroundSaturation))
        .opacity(showBackground ? 1 : 0)
        .ignoresSafeArea()
    }

    // MARK: - Cosmic Particles (Upgrade)

    private func cosmicParticles(size: CGSize) -> some View {
        let tierColors = tierManager.currentTier.gradientColors
        return TimelineView(.animation(minimumInterval: 1.0 / 30.0)) { timeline in
            Canvas { context, canvasSize in
                let t = timeline.date.timeIntervalSinceReferenceDate
                let particleCount = 24

                for i in 0..<particleCount {
                    let seed = Double(i) * 137.508
                    let color = tierColors[i % tierColors.count]

                    // Gentle float-up drift
                    let baseX = (seed * 7.13).truncatingRemainder(dividingBy: canvasSize.width)
                    let period = 6.0 + seed.truncatingRemainder(dividingBy: 8.0)
                    let yOffset = (t * (12.0 + seed.truncatingRemainder(dividingBy: 18.0)))
                        .truncatingRemainder(dividingBy: canvasSize.height + 40.0)
                    let y = canvasSize.height + 20.0 - yOffset
                    let sway = sin(t * 0.8 + seed * 0.3) * 15.0
                    let x = baseX + sway

                    // Twinkle
                    let twinkle = sin(t * 2.5 + seed) * 0.3 + 0.5
                    let dotSize = CGFloat(2.0 + seed.truncatingRemainder(dividingBy: 4.0))
                    let alpha = twinkle * Double(backgroundGlow) * 2.0

                    let rect = CGRect(
                        x: x - Double(dotSize) / 2,
                        y: y - Double(dotSize) / 2,
                        width: Double(dotSize),
                        height: Double(dotSize)
                    )
                    context.opacity = min(alpha, 0.7)
                    context.fill(
                        Circle().path(in: rect),
                        with: .color(color.opacity(0.8))
                    )
                }
            }
        }
        .opacity(showBackground ? 1 : 0)
        .allowsHitTesting(false)
        .drawingGroup()
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
        // Background fade in (0.5s smooth)
        withAnimation(.easeIn(duration: 0.5)) {
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

            // Animate background glow brighter as features reveal (upgrade)
            // or desaturate progressively (downgrade)
            DispatchQueue.main.asyncAfter(deadline: .now() + delay) {
                if isUpgrade {
                    let progress = CGFloat(index + 1) / CGFloat(max(features.count, 1))
                    withAnimation(.easeIn(duration: 0.4)) {
                        backgroundGlow = 0.2 + progress * 0.4
                    }
                } else {
                    let progress = CGFloat(index + 1) / CGFloat(max(features.count, 1))
                    withAnimation(.easeOut(duration: 0.5)) {
                        backgroundSaturation = 1.0 - progress * 0.7
                    }
                }
            }

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
        backgroundGlow = 0.2
        backgroundSaturation = 1.0
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
