import SwiftUI

// MARK: - Tier Upgrade Celebration View

/// Full-screen celebration overlay shown when a user upgrades to a higher tier.
/// Uses a single Canvas with lightweight per-particle math (no drawLayer),
/// radial glow, ring burst, icon spring, tier-specific linguistic message,
/// and auto-dismiss after 4.5s.
struct TierUpgradeCelebrationView: View {
    @Environment(TierManager.self) private var tierManager
    @Environment(\.localization) private var localization

    @State private var showIcon = false
    @State private var showName = false
    @State private var showMessage = false
    @State private var dismissing = false
    @State private var particlePhase: CGFloat = 0
    @State private var glowScale: CGFloat = 0.3
    @State private var glowOpacity: Double = 0
    @State private var ringExpand: CGFloat = 0

    private var tier: MembershipTier { tierManager.upgradedToTier }
    private var L: AppStrings { localization.strings }

    /// Returns the tier-specific linguistic celebration message.
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
                // Dim backdrop
                Color.black.opacity(dismissing ? 0 : 0.65)
                    .ignoresSafeArea()

                // Expanding ring burst (lightweight SwiftUI shapes)
                ringBurst(size: geo.size)

                // Single merged particle canvas (confetti + sparkles)
                particleCanvas(size: geo.size)

                // Center content
                VStack(spacing: 18) {
                    Spacer()

                    // Glow behind icon
                    ZStack {
                        Circle()
                            .fill(
                                RadialGradient(
                                    colors: [
                                        tier.gradientColors.first?.opacity(0.35) ?? .clear,
                                        .clear
                                    ],
                                    center: .center,
                                    startRadius: 10,
                                    endRadius: 100
                                )
                            )
                            .frame(width: 200, height: 200)
                            .scaleEffect(glowScale)
                            .opacity(glowOpacity)

                        // Tier icon
                        Image(systemName: tier.iconName)
                            .font(.system(size: 72, weight: .bold))
                            .foregroundStyle(
                                LinearGradient(
                                    colors: tier.gradientColors,
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing
                                )
                            )
                            .scaleEffect(showIcon ? 1.0 : 0.01)
                            .opacity(showIcon ? 1 : 0)
                            .shadow(color: tier.gradientColors.first?.opacity(0.5) ?? .clear, radius: 24, y: 4)
                    }

                    // Tier name
                    Text(tier.displayName)
                        .font(.system(size: 34, weight: .heavy, design: .rounded))
                        .foregroundStyle(
                            LinearGradient(
                                colors: tier.gradientColors,
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                        .tracking(showName ? 2 : 14)
                        .opacity(showName ? 1 : 0)
                        .scaleEffect(showName ? 1 : 0.85)

                    // "Upgraded!" subtitle
                    Text(L.upgradedExclamation)
                        .font(.subheadline.weight(.semibold))
                        .foregroundStyle(.white.opacity(0.85))
                        .opacity(showName ? 1 : 0)
                        .offset(y: showName ? 0 : 6)

                    // Tier-specific linguistic message
                    Text(tierMessage)
                        .font(.system(size: 14, weight: .regular, design: .serif))
                        .italic()
                        .foregroundStyle(.white.opacity(0.7))
                        .multilineTextAlignment(.center)
                        .padding(.horizontal, 40)
                        .opacity(showMessage ? 1 : 0)
                        .offset(y: showMessage ? 0 : 12)

                    Spacer()
                    Spacer()
                }
            }
            .opacity(dismissing ? 0 : 1)
        }
        .ignoresSafeArea()
        .drawingGroup() // Render entire overlay in Metal-backed buffer
    }

    // MARK: - Ring Burst

    private func ringBurst(size: CGSize) -> some View {
        let maxDim = max(size.width, size.height) * 1.4
        return ZStack {
            ForEach(0..<2, id: \.self) { i in
                Circle()
                    .strokeBorder(
                        tier.gradientColors.first?.opacity(0.25 - Double(i) * 0.1) ?? .clear,
                        lineWidth: 1.5
                    )
                    .frame(width: maxDim * ringExpand, height: maxDim * ringExpand)
                    .opacity(max(0, 1.0 - Double(ringExpand) * 1.2))
                    .scaleEffect(1.0 + CGFloat(i) * 0.08)
            }
        }
        .position(x: size.width / 2, y: size.height / 2)
    }

    // MARK: - Single Merged Particle Canvas

    /// Draws both confetti and sparkle particles in a single Canvas pass.
    /// Avoids `drawLayer` — uses direct math for tumbling effect (width oscillation)
    /// and sets opacity directly before each fill.
    private func particleCanvas(size: CGSize) -> some View {
        Canvas { context, canvasSize in
            let cx = canvasSize.width / 2
            let cy = canvasSize.height / 2
            let phase = Double(particlePhase)
            let gradientColors = tier.gradientColors

            // --- Confetti (50 particles, no drawLayer) ---
            let confettiCount = 50
            for i in 0..<confettiCount {
                let seed = Double(i) * 137.508
                let color = gradientColors[i % gradientColors.count]

                // Base particle dimensions
                let baseW = CGFloat(3.5 + seed.truncatingRemainder(dividingBy: 6))
                let baseH = baseW * CGFloat(1.2 + (seed * 0.37).truncatingRemainder(dividingBy: 2.0) / 2.0)

                // Tumble: oscillate width like a card flipping in 3D
                let tumbleFreq = 2.0 + seed.truncatingRemainder(dividingBy: 3.0)
                let tumbleW = baseW * CGFloat(0.3 + 0.7 * abs(cos(phase * tumbleFreq + seed)))

                // Radial burst from center
                let burstAngle = (seed * 2.399).truncatingRemainder(dividingBy: .pi * 2)
                let burstRadius = 30.0 + seed.truncatingRemainder(dividingBy: 250.0)
                let burstT = min(phase * 2.5, 1.0) // fast initial burst

                let bx = cos(burstAngle) * burstRadius * burstT
                let by = sin(burstAngle) * burstRadius * burstT

                // Gentle sway
                let sway = sin(phase * .pi * 2.0 + seed * 0.4) * 18.0

                // Gravity drift after burst
                let gravityT = max(0, phase - 0.25)
                let gravitySpeed = 0.4 + seed.truncatingRemainder(dividingBy: 0.6)
                let gravityDrop = gravityT * gravityT * Double(canvasSize.height) * 0.7 * gravitySpeed

                let x = cx + bx + sway
                let y = cy + by + gravityDrop

                // Skip off-screen particles
                guard y < canvasSize.height + 20 && x > -20 && x < canvasSize.width + 20 else { continue }

                // Fade: quick in, hold, fade at end
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

            // --- Sparkles (16 white dots) ---
            let sparkleCount = 16
            for i in 0..<sparkleCount {
                let seed = Double(i) * 97.3
                let angle = (seed * 3.7).truncatingRemainder(dividingBy: .pi * 2)
                let dist = 50.0 + seed.truncatingRemainder(dividingBy: 160.0)

                let burstT = min(phase * 2.0, 1.0)
                let x = cx + cos(angle) * dist * burstT
                let y = cy + sin(angle) * dist * burstT

                // Twinkle
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
    }

    // MARK: - Animation Sequence

    private func startSequence() {
        // +0.1s: Ring burst
        withAnimation(.easeOut(duration: 0.7).delay(0.1)) {
            ringExpand = 1.0
        }

        // +0.12s: Glow pulse
        withAnimation(.easeOut(duration: 0.5).delay(0.12)) {
            glowScale = 1.15
            glowOpacity = 1.0
        }

        // +0.2s: Icon spring in
        withAnimation(.spring(response: 0.4, dampingFraction: 0.6).delay(0.2)) {
            showIcon = true
        }

        // +0.45s: Glow settles
        withAnimation(.easeInOut(duration: 1.0).delay(0.45)) {
            glowScale = 1.0
            glowOpacity = 0.4
        }

        // +0.6s: Name reveal
        withAnimation(.spring(response: 0.55, dampingFraction: 0.7).delay(0.6)) {
            showName = true
        }

        // +1.2s: Tier message fades in gracefully
        withAnimation(.easeOut(duration: 0.8).delay(1.2)) {
            showMessage = true
        }

        // Particle animation: single easeOut curve
        withAnimation(.easeOut(duration: 3.5)) {
            particlePhase = 1.0
        }

        // 4.5s: Auto-dismiss
        DispatchQueue.main.asyncAfter(deadline: .now() + 4.5) {
            withAnimation(.easeOut(duration: 0.5)) {
                dismissing = true
            }
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
                tierManager.showUpgradeCelebration = false
                showIcon = false
                showName = false
                showMessage = false
                dismissing = false
                particlePhase = 0
                glowScale = 0.3
                glowOpacity = 0
                ringExpand = 0
            }
        }
    }
}
