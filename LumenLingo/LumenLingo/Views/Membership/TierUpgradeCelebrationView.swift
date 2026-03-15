import SwiftUI

// MARK: - Tier Upgrade Celebration View

/// Full-screen celebration overlay shown when a user upgrades to a higher tier.
/// Includes confetti burst in tier gradient colors, icon spring animation,
/// tier name fade-in, and multi-step haptic pattern. Auto-dismisses at 2.5s.
struct TierUpgradeCelebrationView: View {
    @Environment(TierManager.self) private var tierManager

    @State private var showIcon = false
    @State private var showName = false
    @State private var dismissing = false
    @State private var confettiPhase: CGFloat = 0

    private var tier: MembershipTier { tierManager.upgradedToTier }

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
                Color.black.opacity(dismissing ? 0 : 0.6)
                    .ignoresSafeArea()

                // Confetti
                confettiLayer(bounds: geo.size)

                // Center content
                VStack(spacing: 24) {
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
                        .shadow(color: tier.gradientColors.first?.opacity(0.5) ?? .clear, radius: 20, y: 4)

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
                        .tracking(showName ? 2 : 12)
                        .opacity(showName ? 1 : 0)

                    // Subtitle
                    Text("Upgraded!")
                        .font(.subheadline.weight(.medium))
                        .foregroundStyle(.white.opacity(0.7))
                        .opacity(showName ? 1 : 0)
                }
            }
            .opacity(dismissing ? 0 : 1)
        }
        .ignoresSafeArea()
    }

    // MARK: - Confetti

    private func confettiLayer(bounds: CGSize) -> some View {
        Canvas { context, size in
            let particles = 80
            for i in 0..<particles {
                let seed = Double(i) * 137.5
                let colorIndex = i % tier.gradientColors.count
                let color = tier.gradientColors[colorIndex]

                let w = CGFloat(4 + seed.truncatingRemainder(dividingBy: 5))
                let h = w * CGFloat(1.0 + seed.truncatingRemainder(dividingBy: 3.0) / 3.0)

                let progress = (confettiPhase + CGFloat(seed.truncatingRemainder(dividingBy: 1.0)))
                    .truncatingRemainder(dividingBy: 1.0)

                let x = CGFloat(seed.truncatingRemainder(dividingBy: Double(size.width)))
                    + CGFloat(sin(Double(confettiPhase) * .pi * 4.0 + seed) * 30.0)
                let yStart: CGFloat = -20
                let yEnd = size.height + 20
                let y = yStart + (yEnd - yStart) * progress

                var opacity: Double = 0.7
                if progress < 0.1 { opacity = Double(progress / 0.1) * 0.7 }
                if progress > 0.85 { opacity = Double(1 - (progress - 0.85) / 0.15) * 0.7 }

                let angle = Angle.degrees(Double(confettiPhase) * 360.0 * (i.isMultiple(of: 2) ? 1.0 : -1.0))
                let rect = CGRect(x: x - w / 2, y: y - h / 2, width: w, height: h)

                context.opacity = opacity
                context.rotate(by: angle)
                context.fill(
                    RoundedRectangle(cornerRadius: w > 7 ? 2 : w / 2).path(in: rect),
                    with: .color(color)
                )
                context.rotate(by: -angle)
            }
        }
        .allowsHitTesting(false)
    }

    // MARK: - Animation Sequence

    private func startSequence() {
        // +0.3s: Icon spring in
        withAnimation(.spring(response: 0.5, dampingFraction: 0.6).delay(0.3)) {
            showIcon = true
        }

        // +0.8s: Name fade-in with tracking
        withAnimation(.easeOut(duration: 0.6).delay(0.8)) {
            showName = true
        }

        // Confetti fall
        withAnimation(.linear(duration: 2.5)) {
            confettiPhase = 1.0
        }

        // 2.5s: Auto-dismiss
        DispatchQueue.main.asyncAfter(deadline: .now() + 2.5) {
            withAnimation(.easeOut(duration: 0.4)) {
                dismissing = true
            }
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.4) {
                tierManager.showUpgradeCelebration = false
                // Reset state for next time
                showIcon = false
                showName = false
                dismissing = false
                confettiPhase = 0
            }
        }
    }
}
