import SwiftUI

// MARK: - Tier Celebration Theme

/// Per-tier visual theme for the celebration card.
struct TierCelebrationTheme {
    let gradient: [Color]
    let iconName: String
    let tagline: String
    let particleColors: [Color]

    /// Tier-specific celebration duration in seconds.
    var animationDuration: TimeInterval {
        switch iconName {
        case "flame.fill":   return 2.5  // Pro
        case "diamond.fill": return 3.0  // Elite
        case "crown.fill":   return 3.5  // Royal
        case "gift.fill":    return 3.5  // Trial (Royal@70%)
        default:             return 2.0  // Free/downgrade
        }
    }

    static func theme(for tier: MembershipTier, isUpgrade: Bool) -> TierCelebrationTheme {
        if !isUpgrade {
            return TierCelebrationTheme(
                gradient: tier.gradientColors,
                iconName: tier.iconName,
                tagline: "Your plan has been adjusted",
                particleColors: [.gray.opacity(0.5), .white.opacity(0.3)]
            )
        }
        switch tier {
        case .pro:
            return TierCelebrationTheme(
                gradient: [Color(hex: "#6366f1"), Color(hex: "#06b6d4")],
                iconName: "flame.fill",
                tagline: "Your journey accelerates!",
                particleColors: [Color(hex: "#6366f1"), Color(hex: "#06b6d4"), .white]
            )
        case .elite:
            return TierCelebrationTheme(
                gradient: [Color(hex: "#a855f7"), Color(hex: "#ec4899")],
                iconName: "diamond.fill",
                tagline: "You've joined the elite!",
                particleColors: [Color(hex: "#a855f7"), Color(hex: "#ec4899"), .white]
            )
        case .royal:
            return TierCelebrationTheme(
                gradient: [Color(hex: "#fbbf24"), Color(hex: "#f43f5e")],
                iconName: "crown.fill",
                tagline: "The kingdom awaits!",
                particleColors: [Color(hex: "#fbbf24"), Color(hex: "#f97316"), .white]
            )
        case .trial:
            return TierCelebrationTheme(
                gradient: [Color(hex: "#fbbf24"), Color(hex: "#a855f7")],
                iconName: "gift.fill",
                tagline: "14 days of everything — enjoy!",
                particleColors: [Color(hex: "#fbbf24"), Color(hex: "#a855f7"), Color(hex: "#ec4899")]
            )
        case .free:
            return TierCelebrationTheme(
                gradient: [Color(hex: "#94a3b8"), Color(hex: "#64748b")],
                iconName: "globe",
                tagline: "Welcome back to Starter",
                particleColors: [.gray.opacity(0.5), .white.opacity(0.3)]
            )
        }
    }
}

// MARK: - Tier Upgrade Celebration View

/// Full-screen celebration overlay shown when a user upgrades to a higher tier.
/// Story 7.1: Tier-specific particle animations, haptic choreography, tier sounds,
/// "Continue" button (replaces auto-dismiss), Reduce Motion support, skippable,
/// VoiceOver announcement, first-ever subscription extended sequence.
struct TierUpgradeCelebrationView: View {
    @Environment(TierManager.self) private var tierManager
    @Environment(\.localization) private var localization
    @Environment(\.accessibilityReduceMotion) private var reduceMotion

    // Animation states
    @State private var showCard = false
    @State private var showIcon = false
    @State private var showName = false
    @State private var showMessage = false
    @State private var showDividers = false
    @State private var showContinueButton = false
    @State private var showFirstSubMessage = false
    @State private var dismissing = false
    @State private var particlePhase: CGFloat = 0
    @State private var glowPulse: CGFloat = 0
    @State private var ringExpand: CGFloat = 0
    @State private var borderGlow: Double = 0
    @State private var skipped = false

    private var tier: MembershipTier { tierManager.upgradedToTier }
    private var theme: TierCelebrationTheme {
        TierCelebrationTheme.theme(for: tier, isUpgrade: tierManager.isTierUpgrade)
    }
    private var L: AppStrings { localization.strings }

    private var tierMessage: String {
        switch tier {
        case .pro:   return L.upgradeMessagePro
        case .elite: return L.upgradeMessageElite
        case .royal: return L.upgradeMessageRoyal
        case .trial: return L.upgradeMessageTrial
        case .free:  return L.upgradedExclamation
        }
    }

    /// "Welcome to [Tier]" vs "Welcome back to [Tier]"
    private var welcomeText: String {
        let prefix = tierManager.isResubscriber ? L.celebrationWelcomeBackTo : L.celebrationWelcomeTo
        return "\(prefix) \(tier.displayName)"
    }

    var body: some View {
        if tierManager.showUpgradeCelebration {
            if reduceMotion {
                reduceMotionContent
                    .transition(.opacity)
                    .onAppear { onAppearReduceMotion() }
            } else {
                celebrationContent
                    .transition(.opacity)
                    .onAppear { startSequence() }
            }
        }
    }

    // MARK: - Reduce Motion Content

    /// Simple card with tier icon, welcome message, and Continue button — no particles, no movement.
    private var reduceMotionContent: some View {
        GeometryReader { _ in
            ZStack {
                Color.black.opacity(0.8)
                    .ignoresSafeArea()

                VStack(spacing: 20) {
                    Image(systemName: theme.iconName)
                        .font(.system(size: 56, weight: .bold))
                        .foregroundStyle(
                            LinearGradient(colors: theme.gradient,
                                           startPoint: .topLeading, endPoint: .bottomTrailing)
                        )

                    Text(welcomeText)
                        .font(.system(size: 24, weight: .heavy, design: .rounded))
                        .foregroundStyle(
                            LinearGradient(colors: theme.gradient,
                                           startPoint: .leading, endPoint: .trailing)
                        )

                    Text(theme.tagline)
                        .font(.system(size: 16, weight: .semibold, design: .rounded))
                        .foregroundStyle(.white.opacity(0.85))
                        .multilineTextAlignment(.center)

                    if tierManager.isFirstEverSubscription && !tierManager.celebrationUserName.isEmpty {
                        Text("\(tierManager.celebrationUserName), \(L.celebrationFirstSubscription.lowercased())")
                            .font(.system(size: 15, weight: .regular, design: .serif))
                            .italic()
                            .foregroundStyle(.white.opacity(0.8))
                    }

                    continueButton
                        .padding(.top, 12)
                }
                .frame(maxWidth: 320)
                .tierGlassCard(colors: theme.gradient, borderGlow: 0.5)
            }
            .accessibilityElement(children: .combine)
            .accessibilityLabel(voiceOverAnnouncement)
        }
        .ignoresSafeArea()
    }

    // MARK: - Full Celebration Content

    private var celebrationContent: some View {
        GeometryReader { geo in
            ZStack {
                // 80% dimming, nebula still subtly visible
                Color.black.opacity(dismissing ? 0 : 0.8)
                    .ignoresSafeArea()

                ringBurst(size: geo.size)

                particleCanvas(size: geo.size)

                // --- Celebration Card ---
                VStack(spacing: 0) {
                    cardView

                    // First-ever subscription extended sequence
                    if tierManager.isFirstEverSubscription && showFirstSubMessage
                        && !tierManager.celebrationUserName.isEmpty {
                        Text("\(tierManager.celebrationUserName), \(L.celebrationFirstSubscription.lowercased())")
                            .font(.system(size: 17, weight: .medium, design: .serif))
                            .italic()
                            .foregroundStyle(
                                LinearGradient(colors: theme.gradient,
                                               startPoint: .leading, endPoint: .trailing)
                            )
                            .opacity(showFirstSubMessage ? 1 : 0)
                            .offset(y: showFirstSubMessage ? 0 : 10)
                            .padding(.top, 16)
                    }

                    // Continue button
                    if showContinueButton {
                        continueButton
                            .padding(.top, 20)
                            .transition(.opacity.combined(with: .move(edge: .bottom)))
                    }
                }
                .frame(maxWidth: 320)
                .scaleEffect(showCard ? 1.0 : 0.3)
                .opacity(showCard ? 1 : 0)
                .rotationEffect(.degrees(showCard ? 0 : -5))
                .frame(maxWidth: .infinity, maxHeight: .infinity)
            }
            .opacity(dismissing ? 0 : 1)
            .contentShape(Rectangle())
            .onTapGesture { skipToEnd() }
            .accessibilityElement(children: .combine)
            .accessibilityLabel(voiceOverAnnouncement)
            .accessibilityAddTraits(.isButton)
        }
        .ignoresSafeArea()
    }

    // MARK: - Continue Button

    private var continueButton: some View {
        Button(action: dismiss) {
            Text(L.celebrationContinue)
                .font(.system(size: 16, weight: .semibold, design: .rounded))
                .foregroundStyle(.white)
                .padding(.horizontal, 40)
                .padding(.vertical, 12)
                .background(
                    Capsule()
                        .fill(
                            LinearGradient(colors: theme.gradient,
                                           startPoint: .leading, endPoint: .trailing)
                        )
                )
        }
        .accessibilityLabel(L.celebrationContinue)
    }

    // MARK: - Card

    private var cardView: some View {
        VStack(spacing: 0) {
            // Top ornamental divider
            ornamentalDivider
                .opacity(showDividers ? 1 : 0)
                .padding(.top, 28)
                .padding(.bottom, 8)

            // Icon with radial glow
            ZStack {
                // Pulsing radial glow behind icon
                Circle()
                    .fill(
                        RadialGradient(
                            colors: [
                                theme.gradient.first?.opacity(0.35) ?? .clear,
                                theme.gradient.first?.opacity(0.08) ?? .clear,
                                .clear
                            ],
                            center: .center,
                            startRadius: 5,
                            endRadius: 80
                        )
                    )
                    .frame(width: 160, height: 160)
                    .scaleEffect(0.9 + glowPulse * 0.15)
                    .opacity(showIcon ? 0.9 : 0)

                Image(systemName: theme.iconName)
                    .font(.system(size: 64, weight: .bold))
                    .foregroundStyle(
                        LinearGradient(
                            colors: theme.gradient,
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
                    .scaleEffect(showIcon ? 1.0 : 0.01)
                    .opacity(showIcon ? 1 : 0)
                    .shadow(color: theme.gradient.first?.opacity(0.6) ?? .clear, radius: 20, y: 2)
            }
            .padding(.vertical, 4)

            // Welcome text ("Welcome to / Welcome back to [Tier]")
            Text(welcomeText)
                .font(.system(size: 24, weight: .heavy, design: .rounded))
                .foregroundStyle(
                    LinearGradient(
                        colors: theme.gradient,
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .tracking(showName ? 1 : 8)
                .opacity(showName ? 1 : 0)
                .scaleEffect(showName ? 1 : 0.85)
                .multilineTextAlignment(.center)
                .padding(.top, 2)
                .padding(.horizontal, 20)

            // Badge text — "Upgraded!" or "Welcome!"
            Text(tierManager.isTierUpgrade ? L.upgradedExclamation : L.tierChangedExclamation)
                .font(.system(size: 13, weight: .bold, design: .rounded))
                .tracking(1.5)
                .textCase(.uppercase)
                .foregroundStyle(theme.gradient.first?.opacity(0.8) ?? .white)
                .opacity(showName ? 1 : 0)
                .padding(.top, 4)

            // Middle ornamental divider
            ornamentalDivider
                .opacity(showDividers ? 1 : 0)
                .padding(.vertical, 14)

            // Tier-specific theme tagline
            Text(theme.tagline)
                .font(.system(size: 16, weight: .semibold, design: .rounded))
                .foregroundStyle(
                    LinearGradient(
                        colors: theme.gradient,
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .multilineTextAlignment(.center)
                .opacity(showMessage ? 1 : 0)
                .offset(y: showMessage ? 0 : 6)
                .padding(.horizontal, 28)
                .padding(.bottom, 6)

            // Tier-specific linguistic message
            Text(tierMessage)
                .font(.system(size: 15, weight: .regular, design: .serif))
                .italic()
                .foregroundStyle(.white.opacity(0.85))
                .multilineTextAlignment(.center)
                .lineSpacing(4)
                .padding(.horizontal, 28)
                .opacity(showMessage ? 1 : 0)
                .offset(y: showMessage ? 0 : 8)

            // Bottom ornamental divider
            ornamentalDivider
                .opacity(showDividers ? 1 : 0)
                .padding(.top, 16)
                .padding(.bottom, 28)
        }
        .tierGlassCard(colors: theme.gradient, borderGlow: borderGlow)
    }



    // MARK: - Ornamental Divider

    /// A decorative line with a small diamond in the center, theme-colored.
    private var ornamentalDivider: some View {
        HStack(spacing: 8) {
            // Left line with fade
            theme.gradient.first.map { color in
                Rectangle()
                    .fill(
                        LinearGradient(
                            colors: [.clear, color.opacity(0.4)],
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
                    .frame(height: 0.5)
            }

            // Center diamond
            Image(systemName: "diamond.fill")
                .font(.system(size: 5))
                .foregroundStyle(theme.gradient.first?.opacity(0.5) ?? .clear)

            // Right line with fade
            theme.gradient.last.map { color in
                Rectangle()
                    .fill(
                        LinearGradient(
                            colors: [color.opacity(0.4), .clear],
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
                    .frame(height: 0.5)
            }
        }
        .padding(.horizontal, 32)
    }

    // MARK: - Ring Burst

    private func ringBurst(size: CGSize) -> some View {
        let maxDim = max(size.width, size.height) * 1.4
        return ZStack {
            ForEach(0..<2, id: \.self) { i in
                Circle()
                    .strokeBorder(
                        theme.gradient.first?.opacity(0.25 - Double(i) * 0.1) ?? .clear,
                        lineWidth: 1.5
                    )
                    .frame(width: maxDim * ringExpand, height: maxDim * ringExpand)
                    .opacity(max(0, 1.0 - Double(ringExpand) * 1.2))
                    .scaleEffect(1.0 + CGFloat(i) * 0.08)
            }
        }
        .position(x: size.width / 2, y: size.height / 2)
    }

    // MARK: - Tier-Specific Particle Canvas

    private func particleCanvas(size: CGSize) -> some View {
        Canvas { context, canvasSize in
            let cx = canvasSize.width / 2
            let cy = canvasSize.height / 2
            let phase = Double(particlePhase)

            var ctx = context
            switch tier {
            case .pro:
                drawProParticles(context: &ctx, cx: cx, cy: cy,
                                 size: canvasSize, phase: phase)
            case .elite:
                drawEliteParticles(context: &ctx, cx: cx, cy: cy,
                                   size: canvasSize, phase: phase)
            case .royal:
                drawRoyalParticles(context: &ctx, cx: cx, cy: cy,
                                   size: canvasSize, phase: phase)
            case .trial:
                drawTrialParticles(context: &ctx, cx: cx, cy: cy,
                                   size: canvasSize, phase: phase)
            case .free:
                drawGenericParticles(context: &ctx, cx: cx, cy: cy,
                                     size: canvasSize, phase: phase)
            }
        }
        .allowsHitTesting(false)
        .drawingGroup()
    }

    // MARK: Pro Particles — Stars converge from edges into central starburst

    private func drawProParticles(context: inout GraphicsContext, cx: Double, cy: Double,
                                  size: CGSize, phase: Double) {
        let pColors = theme.particleColors
        let convergeT = min(phase / 0.6, 1.0)  // Stars converge in first 60% of phase
        let burstT = max(0, (phase - 0.6) / 0.4)  // Starburst in last 40%

        // 40 converging stars from edges
        for i in 0..<40 {
            let seed = Double(i) * 137.508
            let color = pColors[i % pColors.count]

            // Start position: random edge point
            let edgeAngle = (seed * 2.399).truncatingRemainder(dividingBy: .pi * 2)
            let edgeDist = max(size.width, size.height) * 0.6
            let startX = cx + cos(edgeAngle) * edgeDist
            let startY = cy + sin(edgeAngle) * edgeDist

            // Ease-in converge with deceleration near center (physical feel)
            let eased = convergeT * convergeT * (3 - 2 * convergeT) // smoothstep
            let x = startX + (cx - startX) * eased
            let y = startY + (cy - startY) * eased

            // Star size grows as it approaches center
            let starSize = CGFloat(2 + 3 * eased + seed.truncatingRemainder(dividingBy: 2))

            var alpha = min(phase * 5, 1.0) * 0.85
            if phase > 0.85 { alpha *= (1.0 - (phase - 0.85) / 0.15) }

            let rect = CGRect(x: x - Double(starSize) / 2, y: y - Double(starSize) / 2,
                              width: Double(starSize), height: Double(starSize))
            context.opacity = alpha
            // 4-point star shape via rotated diamonds
            context.fill(Circle().path(in: rect), with: .color(color))
        }

        // Starburst rays emanating from center after convergence
        if burstT > 0 {
            for i in 0..<12 {
                let angle = Double(i) * (.pi * 2 / 12)
                let rayLen = burstT * Double(min(size.width, size.height)) * 0.4
                let rayX = cx + cos(angle) * rayLen
                let rayY = cy + sin(angle) * rayLen
                let dotSize = CGFloat(2.5 * (1.0 - burstT * 0.6))

                let rect = CGRect(x: rayX - Double(dotSize) / 2, y: rayY - Double(dotSize) / 2,
                                  width: Double(dotSize), height: Double(dotSize))
                context.opacity = (1.0 - burstT) * 0.7
                context.fill(Circle().path(in: rect), with: .color(.white))
            }
        }
    }

    // MARK: Elite Particles — Crystal shards spiral inward

    private func drawEliteParticles(context: inout GraphicsContext, cx: Double, cy: Double,
                                    size: CGSize, phase: Double) {
        let pColors = theme.particleColors
        let spiralT = min(phase / 0.7, 1.0)
        let ringT = max(0, (phase - 0.7) / 0.3)

        // 30 crystal shards spiraling inward
        for i in 0..<30 {
            let seed = Double(i) * 97.3
            let color = pColors[i % pColors.count]

            let startAngle = (seed * 2.399).truncatingRemainder(dividingBy: .pi * 2)
            let startDist = 180.0 + seed.truncatingRemainder(dividingBy: 120.0)

            let eased = spiralT * spiralT
            let spiralAngle = startAngle + spiralT * .pi * 1.5 // 1.5 rotations
            let dist = startDist * (1.0 - eased)

            let x = cx + cos(spiralAngle) * dist
            let y = cy + sin(spiralAngle) * dist

            // Shard: elongated rectangle that rotates (prismatic reflection)
            let shardW = CGFloat(3 + seed.truncatingRemainder(dividingBy: 4))
            let shardH = shardW * CGFloat(2.0 + seed.truncatingRemainder(dividingBy: 1.5))
            let rotation = spiralAngle + phase * .pi * 2

            var alpha = min(phase * 4, 1.0) * 0.8
            // Prismatic shimmer
            let shimmer = sin(phase * .pi * 6 + seed) * 0.3 + 0.7
            alpha *= shimmer
            if phase > 0.8 { alpha *= (1.0 - (phase - 0.8) / 0.2) }

            context.opacity = alpha
            var transform = CGAffineTransform.identity
                .translatedBy(x: x, y: y)
                .rotated(by: rotation)
            let rect = CGRect(x: -Double(shardW) / 2, y: -Double(shardH) / 2,
                              width: Double(shardW), height: Double(shardH))
            let path = RoundedRectangle(cornerRadius: 1).path(in: rect)
            context.fill(path.applying(transform), with: .color(color))
        }

        // Purple energy ring after crystal forms
        if ringT > 0 {
            let ringRadius = ringT * Double(min(size.width, size.height)) * 0.35
            for i in 0..<20 {
                let angle = Double(i) * (.pi * 2 / 20) + ringT * .pi
                let x = cx + cos(angle) * ringRadius
                let y = cy + sin(angle) * ringRadius
                let dotSize: CGFloat = 3.0 * CGFloat(1.0 - ringT * 0.5)
                let rect = CGRect(x: x - Double(dotSize) / 2, y: y - Double(dotSize) / 2,
                                  width: Double(dotSize), height: Double(dotSize))
                context.opacity = (1.0 - ringT) * 0.6
                context.fill(Circle().path(in: rect), with: .color(pColors[0]))
            }
        }
    }

    // MARK: Royal Particles — Crown descends from above, golden particles solidify

    private func drawRoyalParticles(context: inout GraphicsContext, cx: Double, cy: Double,
                                    size: CGSize, phase: Double) {
        let pColors = theme.particleColors
        let descentT = min(phase / 0.5, 1.0)
        let solidifyT = min(max(0, (phase - 0.3)) / 0.4, 1.0)
        let shockwaveT = max(0, (phase - 0.7) / 0.3)

        // Golden particles descending and converging to form crown shape
        for i in 0..<45 {
            let seed = Double(i) * 137.508
            let color = pColors[i % pColors.count]

            // Start scattered above center
            let startX = cx + sin(seed * 3.7) * Double(size.width) * 0.4
            let startY = -50.0 - seed.truncatingRemainder(dividingBy: 200.0)

            // Target: crown arc shape
            let crownAngle = (Double(i) / 45.0) * .pi - .pi / 2
            let crownRadius = 80.0
            let targetX = cx + cos(crownAngle) * crownRadius * 0.8
            let targetY = cy - 30 + sin(crownAngle) * crownRadius * 0.3

            let eased = descentT * descentT * (3 - 2 * descentT)
            let x = startX + (targetX - startX) * eased
            let y = startY + (targetY - startY) * eased

            let particleSize = CGFloat(2.5 + solidifyT * 2 + seed.truncatingRemainder(dividingBy: 2))

            var alpha = min(phase * 3, 1.0) * 0.85
            if phase > 0.85 { alpha *= (1.0 - (phase - 0.85) / 0.15) }

            let rect = CGRect(x: x - Double(particleSize) / 2, y: y - Double(particleSize) / 2,
                              width: Double(particleSize), height: Double(particleSize))
            context.opacity = alpha
            context.fill(Circle().path(in: rect), with: .color(color))
        }

        // Gem ignition sequence (blue, purple, gold)
        if solidifyT > 0.3 {
            let gemColors: [Color] = [Color(hex: "#6366f1"), Color(hex: "#a855f7"), Color(hex: "#fbbf24")]
            for (idx, gemColor) in gemColors.enumerated() {
                let gemT = max(0, (solidifyT - 0.3 - Double(idx) * 0.15) / 0.25)
                if gemT > 0 {
                    let gemAngle = (.pi * 0.6) + Double(idx) * (.pi * 0.4 / 2)
                    let gx = cx + cos(gemAngle - .pi / 2) * 50
                    let gy = cy - 35 + sin(gemAngle - .pi / 2) * 15
                    let gemSize = CGFloat(6 * min(gemT, 1.0))
                    let rect = CGRect(x: gx - Double(gemSize) / 2, y: gy - Double(gemSize) / 2,
                                      width: Double(gemSize), height: Double(gemSize))
                    context.opacity = min(gemT, 1.0) * 0.9
                    context.fill(Circle().path(in: rect), with: .color(gemColor))
                }
            }
        }

        // Golden shockwave
        if shockwaveT > 0 {
            let swRadius = shockwaveT * Double(min(size.width, size.height)) * 0.5
            for i in 0..<16 {
                let angle = Double(i) * (.pi * 2 / 16)
                let x = cx + cos(angle) * swRadius
                let y = cy + sin(angle) * swRadius
                let dotSize: CGFloat = 3.5 * CGFloat(1.0 - shockwaveT * 0.5)
                let rect = CGRect(x: x - Double(dotSize) / 2, y: y - Double(dotSize) / 2,
                                  width: Double(dotSize), height: Double(dotSize))
                context.opacity = (1.0 - shockwaveT) * 0.65
                context.fill(Circle().path(in: rect), with: .color(Color(hex: "#fbbf24")))
            }
        }
    }

    // MARK: Trial Particles — Royal at 70% intensity

    private func drawTrialParticles(context: inout GraphicsContext, cx: Double, cy: Double,
                                    size: CGSize, phase: Double) {
        let pColors = theme.particleColors
        let descentT = min(phase / 0.5, 1.0)
        let solidifyT = min(max(0, (phase - 0.3)) / 0.4, 1.0)

        // 30 particles (70% of Royal's 45)
        for i in 0..<30 {
            let seed = Double(i) * 137.508
            let color = pColors[i % pColors.count]

            let startX = cx + sin(seed * 3.7) * Double(size.width) * 0.35
            let startY = -40.0 - seed.truncatingRemainder(dividingBy: 150.0)

            let crownAngle = (Double(i) / 30.0) * .pi - .pi / 2
            let crownRadius = 60.0
            let targetX = cx + cos(crownAngle) * crownRadius * 0.8
            let targetY = cy - 25 + sin(crownAngle) * crownRadius * 0.3

            let eased = descentT * descentT * (3 - 2 * descentT)
            let x = startX + (targetX - startX) * eased
            let y = startY + (targetY - startY) * eased

            let particleSize = CGFloat(2 + solidifyT * 1.5 + seed.truncatingRemainder(dividingBy: 1.5))

            // 70% opacity ceiling
            var alpha = min(phase * 3, 1.0) * 0.6
            if phase > 0.85 { alpha *= (1.0 - (phase - 0.85) / 0.15) }

            let rect = CGRect(x: x - Double(particleSize) / 2, y: y - Double(particleSize) / 2,
                              width: Double(particleSize), height: Double(particleSize))
            context.opacity = alpha
            context.fill(Circle().path(in: rect), with: .color(color))
        }
    }

    // MARK: Generic Particles — fallback confetti

    private func drawGenericParticles(context: inout GraphicsContext, cx: Double, cy: Double,
                                      size: CGSize, phase: Double) {
        let pColors = theme.particleColors
        for i in 0..<25 {
            let seed = Double(i) * 137.508
            let color = pColors[i % pColors.count]

            let burstAngle = (seed * 2.399).truncatingRemainder(dividingBy: .pi * 2)
            let burstRadius = 30.0 + seed.truncatingRemainder(dividingBy: 150.0)
            let burstT = min(phase * 2.5, 1.0)

            let x = cx + cos(burstAngle) * burstRadius * burstT
            let y = cy + sin(burstAngle) * burstRadius * burstT
                + max(0, phase - 0.3) * max(0, phase - 0.3) * Double(size.height) * 0.5

            guard y < Double(size.height) + 20 else { continue }

            var alpha = 0.6
            if phase < 0.06 { alpha = (phase / 0.06) * 0.6 }
            if phase > 0.7 { alpha = (1.0 - (phase - 0.7) / 0.3) * 0.6 }

            let dotSize = CGFloat(3 + seed.truncatingRemainder(dividingBy: 3))
            let rect = CGRect(x: x - Double(dotSize) / 2, y: y - Double(dotSize) / 2,
                              width: Double(dotSize), height: Double(dotSize))
            context.opacity = alpha
            context.fill(Circle().path(in: rect), with: .color(color))
        }
    }

    // MARK: - VoiceOver

    private var voiceOverAnnouncement: String {
        "Congratulations! You are now a \(tier.displayName) member."
    }

    // MARK: - Animation Sequence

    private func startSequence() {
        let duration = theme.animationDuration

        // Play tier-specific sound
        playTierSound()

        // Play tier-specific haptic choreography
        HapticsService.shared.celebrationChoreography(for: tier)

        // +0.05s: Card appears with spring entrance
        withAnimation(.spring(response: 0.6, dampingFraction: 0.7).delay(0.05)) {
            showCard = true
        }

        // +0.1s: Ring burst
        withAnimation(.easeOut(duration: 0.7).delay(0.1)) {
            ringExpand = 1.0
        }

        // +0.25s: Icon spring in
        withAnimation(.spring(response: 0.4, dampingFraction: 0.6).delay(0.25)) {
            showIcon = true
        }

        // +0.3s: Glow pulse starts (repeating)
        withAnimation(.easeInOut(duration: 1.8).repeatForever(autoreverses: true).delay(0.3)) {
            glowPulse = 1.0
        }

        // +0.4s: Dividers fade in
        withAnimation(.easeOut(duration: 0.6).delay(0.4)) {
            showDividers = true
        }

        // +0.5s: Border glow breathes
        withAnimation(.easeInOut(duration: 2.0).repeatForever(autoreverses: true).delay(0.5)) {
            borderGlow = 1.0
        }

        // +0.6s: Name reveal
        withAnimation(.spring(response: 0.55, dampingFraction: 0.7).delay(0.6)) {
            showName = true
        }

        // +1.3s: Tier message fades in
        withAnimation(.easeOut(duration: 0.9).delay(1.3)) {
            showMessage = true
        }

        // Tier-specific particle duration
        withAnimation(.easeOut(duration: duration)) {
            particlePhase = 1.0
        }

        var continueDelay = duration + 0.5

        // First-ever subscription: extended by 2s with name message
        if tierManager.isFirstEverSubscription && !tierManager.celebrationUserName.isEmpty {
            let firstSubDelay = duration + 0.3
            DispatchQueue.main.asyncAfter(deadline: .now() + firstSubDelay) {
                guard !skipped else { return }
                withAnimation(.easeOut(duration: 1.0)) {
                    showFirstSubMessage = true
                }
            }
            continueDelay = duration + 2.5
        }

        // Show Continue button after animation completes
        DispatchQueue.main.asyncAfter(deadline: .now() + continueDelay) {
            guard !skipped else { return }
            withAnimation(.easeOut(duration: 0.5)) {
                showContinueButton = true
            }
        }
    }

    // MARK: - Skip to End

    private func skipToEnd() {
        guard !showContinueButton else { return } // Already showing button, don't skip
        skipped = true
        withAnimation(.easeOut(duration: 0.3)) {
            showCard = true
            showIcon = true
            showName = true
            showMessage = true
            showDividers = true
            particlePhase = 1.0
            glowPulse = 1.0
            borderGlow = 1.0
            ringExpand = 1.0
            if tierManager.isFirstEverSubscription && !tierManager.celebrationUserName.isEmpty {
                showFirstSubMessage = true
            }
            showContinueButton = true
        }
    }

    // MARK: - Reduce Motion onAppear

    private func onAppearReduceMotion() {
        playTierSound()
        HapticsService.shared.celebrationChoreography(for: tier)
    }

    // MARK: - Tier Sound

    private func playTierSound() {
        switch tier {
        case .pro:   AudioService.shared.playProCelebration()
        case .elite: AudioService.shared.playEliteCelebration()
        case .royal: AudioService.shared.playRoyalCelebration()
        case .trial: AudioService.shared.playTrialCelebration()
        case .free:  break
        }
    }

    // MARK: - Dismiss

    private func dismiss() {
        withAnimation(.easeOut(duration: 0.6)) {
            dismissing = true
        }
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.6) {
            tierManager.showUpgradeCelebration = false
            // Trigger feature overlay: shows diff if available, or all features for the new tier
            if tierManager.isTierUpgrade || !tierManager.newlyLockedFeatures.isEmpty {
                tierManager.showFeatureTransition = true
            }
            resetState()
        }
    }

    private func resetState() {
        showCard = false
        showIcon = false
        showName = false
        showMessage = false
        showDividers = false
        showContinueButton = false
        showFirstSubMessage = false
        dismissing = false
        skipped = false
        particlePhase = 0
        glowPulse = 0
        ringExpand = 0
        borderGlow = 0
    }
}
