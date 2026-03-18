import SwiftUI

// MARK: - Tier Celebration Theme

/// Per-tier visual theme for the celebration card.
struct TierCelebrationTheme {
    let gradient: [Color]
    let iconName: String
    let tagline: String
    let particleColors: [Color]

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
/// Uses a single Canvas with lightweight per-particle math (no drawLayer),
/// a frosted glass card with tier-gradient ornamental border, icon spring,
/// tier-specific linguistic message in serif italic, and auto-dismiss after 5s.
struct TierUpgradeCelebrationView: View {
    @Environment(TierManager.self) private var tierManager
    @Environment(\.localization) private var localization

    @State private var showCard = false
    @State private var showIcon = false
    @State private var showName = false
    @State private var showMessage = false
    @State private var showDividers = false
    @State private var dismissing = false
    @State private var particlePhase: CGFloat = 0
    @State private var glowPulse: CGFloat = 0
    @State private var ringExpand: CGFloat = 0
    @State private var borderGlow: Double = 0

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

    var body: some View {
        if tierManager.showUpgradeCelebration {
            celebrationContent
                .transition(.opacity)
                .onAppear { startSequence() }
        }
    }

    // MARK: - Content

    private var celebrationContent: some View {
        GeometryReader { geo in
            ZStack {
                Color.black.opacity(dismissing ? 0 : 0.7)
                    .ignoresSafeArea()

                ringBurst(size: geo.size)

                particleCanvas(size: geo.size)

                // --- Celebration Card ---
                cardView
                    .frame(maxWidth: 320)
                    .scaleEffect(showCard ? 1.0 : 0.3)
                    .opacity(showCard ? 1 : 0)
                    .rotationEffect(.degrees(showCard ? 0 : -5))
                    .frame(maxWidth: .infinity, maxHeight: .infinity)
            }
            .opacity(dismissing ? 0 : 1)
        }
        .ignoresSafeArea()
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

            // Tier name
            Text(tier.displayName)
                .font(.system(size: 32, weight: .heavy, design: .rounded))
                .foregroundStyle(
                    LinearGradient(
                        colors: theme.gradient,
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .tracking(showName ? 3 : 16)
                .opacity(showName ? 1 : 0)
                .scaleEffect(showName ? 1 : 0.85)
                .padding(.top, 2)

            // Badge text — "Upgraded!" or "Welcome!" depending on direction
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

    // MARK: - Particle Canvas

    private func particleCanvas(size: CGSize) -> some View {
        Canvas { context, canvasSize in
            let cx = canvasSize.width / 2
            let cy = canvasSize.height / 2
            let phase = Double(particlePhase)
            let pColors = theme.particleColors

            let confettiCount = 50
            for i in 0..<confettiCount {
                let seed = Double(i) * 137.508
                let color = pColors[i % pColors.count]

                let baseW = CGFloat(3.5 + seed.truncatingRemainder(dividingBy: 6))
                let baseH = baseW * CGFloat(1.2 + (seed * 0.37).truncatingRemainder(dividingBy: 2.0) / 2.0)

                let tumbleFreq = 2.0 + seed.truncatingRemainder(dividingBy: 3.0)
                let tumbleW = baseW * CGFloat(0.3 + 0.7 * abs(cos(phase * tumbleFreq + seed)))

                let burstAngle = (seed * 2.399).truncatingRemainder(dividingBy: .pi * 2)
                let burstRadius = 30.0 + seed.truncatingRemainder(dividingBy: 250.0)
                let burstT = min(phase * 2.5, 1.0)

                let bx = cos(burstAngle) * burstRadius * burstT
                let by = sin(burstAngle) * burstRadius * burstT
                let sway = sin(phase * .pi * 2.0 + seed * 0.4) * 18.0

                let gravityT = max(0, phase - 0.25)
                let gravitySpeed = 0.4 + seed.truncatingRemainder(dividingBy: 0.6)
                let gravityDrop = gravityT * gravityT * Double(canvasSize.height) * 0.7 * gravitySpeed

                let x = cx + bx + sway
                let y = cy + by + gravityDrop

                guard y < canvasSize.height + 20 && x > -20 && x < canvasSize.width + 20 else { continue }

                var alpha: Double = 0.8
                if phase < 0.06 { alpha = (phase / 0.06) * 0.8 }
                if phase > 0.7 { alpha = (1.0 - (phase - 0.7) / 0.3) * 0.8 }

                let rect = CGRect(x: x - Double(tumbleW) / 2, y: y - Double(baseH) / 2,
                                  width: Double(tumbleW), height: Double(baseH))
                context.opacity = alpha
                context.fill(
                    RoundedRectangle(cornerRadius: min(tumbleW, baseH) * 0.25).path(in: rect),
                    with: .color(color)
                )
            }

            let sparkleCount = 16
            for i in 0..<sparkleCount {
                let seed = Double(i) * 97.3
                let angle = (seed * 3.7).truncatingRemainder(dividingBy: .pi * 2)
                let dist = 50.0 + seed.truncatingRemainder(dividingBy: 160.0)

                let burstT = min(phase * 2.0, 1.0)
                let x = cx + cos(angle) * dist * burstT
                let y = cy + sin(angle) * dist * burstT

                let twinkle = sin(phase * .pi * 3.5 + seed) * 0.5 + 0.5
                var alpha = twinkle * 0.85
                if phase < 0.1 { alpha *= phase / 0.1 }
                if phase > 0.65 { alpha *= (1.0 - (phase - 0.65) / 0.35) }

                let dotSize = CGFloat(2 + seed.truncatingRemainder(dividingBy: 2.5))
                let rect = CGRect(x: x - Double(dotSize) / 2, y: y - Double(dotSize) / 2,
                                  width: Double(dotSize), height: Double(dotSize))
                context.opacity = alpha
                context.fill(Circle().path(in: rect), with: .color(.white))
            }
        }
        .allowsHitTesting(false)
        .drawingGroup()
    }

    // MARK: - Animation Sequence

    private func startSequence() {
        // +0.05s: Card appears with spring entrance (scale 0.3→1, rotation -5°→0°)
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

        // Particles
        withAnimation(.easeOut(duration: 3.5)) {
            particlePhase = 1.0
        }

        // 5.0s: Auto-dismiss
        DispatchQueue.main.asyncAfter(deadline: .now() + 5.0) {
            withAnimation(.easeOut(duration: 0.6)) {
                dismissing = true
            }
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.6) {
                tierManager.showUpgradeCelebration = false
                // Trigger feature overlay: shows diff if available, or all features for the new tier
                if tierManager.isTierUpgrade || !tierManager.newlyLockedFeatures.isEmpty {
                    tierManager.showFeatureTransition = true
                }
                showCard = false
                showIcon = false
                showName = false
                showMessage = false
                showDividers = false
                dismissing = false
                particlePhase = 0
                glowPulse = 0
                ringExpand = 0
                borderGlow = 0
            }
        }
    }
}
