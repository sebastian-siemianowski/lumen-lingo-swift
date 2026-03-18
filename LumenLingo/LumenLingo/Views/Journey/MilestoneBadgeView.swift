import SwiftUI

// MARK: - Milestone Badge View

/// Renders a milestone badge with visual quality that varies by tier.
/// Styles: basic (Free), gradient (Pro), sparkle (Elite), holographic (Royal).
struct MilestoneBadgeView: View {
    let milestone: JourneyMilestone
    let isUnlocked: Bool
    let style: TierManager.MilestoneBadgeStyle

    @Environment(\.colorScheme) private var colorScheme
    @State private var sparklePhase: CGFloat = 0
    @State private var holoPhase: CGFloat = 0
    @State private var showConfetti = false

    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        ZStack {
            switch style {
            case .basic:
                basicBadge
            case .gradient:
                gradientBadge
            case .sparkle:
                sparkleBadge
            case .holographic:
                holographicBadge
            }
        }
    }

    // MARK: - Basic (Free)

    private var basicBadge: some View {
        Circle()
            .fill(isUnlocked ? milestone.color : .gray.opacity(0.3))
            .frame(width: 32, height: 32)
            .overlay {
                Image(systemName: milestone.icon)
                    .font(.system(size: 13))
                    .foregroundStyle(isUnlocked ? .white : .gray)
            }
    }

    // MARK: - Gradient (Pro)

    private var gradientBadge: some View {
        Circle()
            .fill(
                isUnlocked
                    ? LinearGradient(
                        colors: [milestone.color, milestone.color.opacity(0.6)],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                    : LinearGradient(colors: [.gray.opacity(0.3), .gray.opacity(0.2)], startPoint: .top, endPoint: .bottom)
            )
            .frame(width: 32, height: 32)
            .overlay {
                Image(systemName: milestone.icon)
                    .font(.system(size: 13))
                    .foregroundStyle(isUnlocked ? .white : .gray)
            }
            .shadow(color: isUnlocked ? milestone.color.opacity(0.3) : .clear, radius: 4)
    }

    // MARK: - Sparkle (Elite)

    private var sparkleBadge: some View {
        ZStack {
            gradientBadge

            if isUnlocked {
                // Particle sparkle ring
                ForEach(0..<6, id: \.self) { i in
                    let angle = CGFloat(i) * .pi / 3 + sparklePhase
                    let alphaOscillation = 0.4 + 0.6 * sin(sparklePhase * 2 + CGFloat(i))
                    Circle()
                        .fill(.white.opacity(0.8))
                        .frame(width: 3, height: 3)
                        .offset(x: 18 * cos(angle), y: 18 * sin(angle))
                        .opacity(alphaOscillation)
                }
            }
        }
        .onAppear {
            if isUnlocked {
                withAnimation(.linear(duration: 4).repeatForever(autoreverses: false)) {
                    sparklePhase = .pi * 2
                }
            }
        }
    }

    // MARK: - Holographic (Royal)

    private var holographicBadge: some View {
        ZStack {
            // Rainbow gradient sweep
            if isUnlocked {
                Circle()
                    .fill(
                        AngularGradient(
                            colors: [.red, .orange, .yellow, .green, .cyan, .blue, .purple, .red],
                            center: .center
                        )
                    )
                    .frame(width: 34, height: 34)
                    .rotationEffect(.degrees(Double(holoPhase) * 360))
                    .blur(radius: 1)
            } else {
                Circle()
                    .fill(Color.gray.opacity(0.3))
                    .frame(width: 34, height: 34)
            }

            // Inner circle
            Circle()
                .fill(
                    isUnlocked
                        ? LinearGradient(
                            colors: [milestone.color.opacity(0.9), milestone.color.opacity(0.5)],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                        : LinearGradient(colors: [.gray.opacity(0.3), .gray.opacity(0.2)], startPoint: .top, endPoint: .bottom)
                )
                .frame(width: 28, height: 28)

            Image(systemName: milestone.icon)
                .font(.system(size: 12, weight: .semibold))
                .foregroundStyle(isUnlocked ? .white : .gray)

            // Shimmer overlay
            if isUnlocked {
                Circle()
                    .fill(
                        LinearGradient(
                            colors: [.clear, .white.opacity(0.3), .clear],
                            startPoint: UnitPoint(x: holoPhase - 0.3, y: 0),
                            endPoint: UnitPoint(x: holoPhase + 0.3, y: 1)
                        )
                    )
                    .frame(width: 32, height: 32)
                    .blendMode(.overlay)
            }

            // Mini confetti particles
            if isUnlocked && showConfetti {
                ForEach(0..<8, id: \.self) { i in
                    let angle = CGFloat(i) * .pi / 4 + holoPhase * 3
                    let alpha = 0.3 + 0.5 * sin(holoPhase * 4 + CGFloat(i))
                    Circle()
                        .fill(confettiColor(i))
                        .frame(width: 2.5, height: 2.5)
                        .offset(x: 22 * cos(angle), y: 22 * sin(angle))
                        .opacity(alpha)
                }
            }
        }
        .onAppear {
            if isUnlocked {
                withAnimation(.linear(duration: 6).repeatForever(autoreverses: false)) {
                    holoPhase = 1
                }
                showConfetti = true
            }
        }
    }

    private func confettiColor(_ index: Int) -> Color {
        let colors: [Color] = [.red, .orange, .yellow, .green, .cyan, .blue, .purple, .pink]
        return colors[index % colors.count]
    }
}
