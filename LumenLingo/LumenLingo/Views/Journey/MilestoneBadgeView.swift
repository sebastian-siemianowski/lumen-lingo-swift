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
        ZStack {
            // Outer glow ring for unlocked
            if isUnlocked {
                Circle()
                    .fill(milestone.color.opacity(0.15))
                    .frame(width: 40, height: 40)
                    .blur(radius: 6)
            }

            Circle()
                .fill(
                    isUnlocked
                        ? LinearGradient(
                            colors: [milestone.color, milestone.color.opacity(0.7)],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                        : LinearGradient(
                            colors: [.white.opacity(0.06), .white.opacity(0.03)],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                )
                .frame(width: 34, height: 34)
                .overlay {
                    if !isUnlocked {
                        Circle()
                            .strokeBorder(.white.opacity(0.06), lineWidth: 0.5)
                    }
                }

            Image(systemName: isUnlocked ? milestone.icon : "lock.fill")
                .font(.system(size: isUnlocked ? 14 : 11, weight: .medium))
                .foregroundStyle(isUnlocked ? .white : .white.opacity(0.2))
        }
        .frame(width: 40)
    }

    // MARK: - Gradient (Pro)

    private var gradientBadge: some View {
        ZStack {
            // Ambient glow
            if isUnlocked {
                Circle()
                    .fill(milestone.color.opacity(0.2))
                    .frame(width: 42, height: 42)
                    .blur(radius: 8)
            }

            Circle()
                .fill(
                    isUnlocked
                        ? LinearGradient(
                            colors: [milestone.color, milestone.color.opacity(0.5)],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                        : LinearGradient(colors: [.white.opacity(0.06), .white.opacity(0.03)], startPoint: .top, endPoint: .bottom)
                )
                .frame(width: 34, height: 34)
                .overlay {
                    if isUnlocked {
                        Circle()
                            .strokeBorder(
                                LinearGradient(
                                    colors: [.white.opacity(0.3), .clear],
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing
                                ),
                                lineWidth: 0.5
                            )
                    } else {
                        Circle()
                            .strokeBorder(.white.opacity(0.06), lineWidth: 0.5)
                    }
                }

            Image(systemName: isUnlocked ? milestone.icon : "lock.fill")
                .font(.system(size: isUnlocked ? 14 : 11, weight: .medium))
                .foregroundStyle(isUnlocked ? .white : .white.opacity(0.2))
        }
        .shadow(color: isUnlocked ? milestone.color.opacity(0.3) : .clear, radius: 6)
        .frame(width: 40)
    }

    // MARK: - Sparkle (Elite)

    private var sparkleBadge: some View {
        ZStack {
            // Outer glow pulse
            if isUnlocked {
                Circle()
                    .fill(milestone.color.opacity(0.15))
                    .frame(width: 44, height: 44)
                    .blur(radius: 8)
            }

            // Core badge
            Circle()
                .fill(
                    isUnlocked
                        ? LinearGradient(
                            colors: [milestone.color, milestone.color.opacity(0.5)],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                        : LinearGradient(colors: [.white.opacity(0.06), .white.opacity(0.03)], startPoint: .top, endPoint: .bottom)
                )
                .frame(width: 34, height: 34)
                .overlay {
                    if isUnlocked {
                        Circle()
                            .strokeBorder(
                                LinearGradient(
                                    colors: [.white.opacity(0.35), .clear, .white.opacity(0.15)],
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing
                                ),
                                lineWidth: 0.5
                            )
                    } else {
                        Circle()
                            .strokeBorder(.white.opacity(0.06), lineWidth: 0.5)
                    }
                }

            Image(systemName: isUnlocked ? milestone.icon : "lock.fill")
                .font(.system(size: isUnlocked ? 14 : 11, weight: .medium))
                .foregroundStyle(isUnlocked ? .white : .white.opacity(0.2))

            if isUnlocked {
                // Orbiting sparkle particles
                ForEach(0..<6, id: \.self) { i in
                    let angle = CGFloat(i) * .pi / 3 + sparklePhase
                    let alphaOscillation = 0.5 + 0.5 * sin(sparklePhase * 2 + CGFloat(i))
                    Circle()
                        .fill(.white.opacity(0.9))
                        .frame(width: 2.5, height: 2.5)
                        .offset(x: 20 * cos(angle), y: 20 * sin(angle))
                        .opacity(alphaOscillation)
                        .blur(radius: 0.5)
                }
            }
        }
        .shadow(color: isUnlocked ? milestone.color.opacity(0.3) : .clear, radius: 6)
        .frame(width: 44)
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
            // Rainbow glow aura
            if isUnlocked {
                Circle()
                    .fill(
                        AngularGradient(
                            colors: [.red, .orange, .yellow, .green, .cyan, .blue, .purple, .red],
                            center: .center
                        )
                    )
                    .frame(width: 42, height: 42)
                    .rotationEffect(.degrees(Double(holoPhase) * 360))
                    .blur(radius: 4)
                    .opacity(0.5)
            }

            // Rainbow outer ring
            if isUnlocked {
                Circle()
                    .fill(
                        AngularGradient(
                            colors: [.red, .orange, .yellow, .green, .cyan, .blue, .purple, .red],
                            center: .center
                        )
                    )
                    .frame(width: 38, height: 38)
                    .rotationEffect(.degrees(Double(holoPhase) * 360))
                    .blur(radius: 1)
            } else {
                Circle()
                    .fill(.white.opacity(0.04))
                    .frame(width: 38, height: 38)
            }

            // Inner circle
            Circle()
                .fill(
                    isUnlocked
                        ? LinearGradient(
                            colors: [milestone.color.opacity(0.9), milestone.color.opacity(0.4)],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                        : LinearGradient(colors: [.white.opacity(0.06), .white.opacity(0.03)], startPoint: .top, endPoint: .bottom)
                )
                .frame(width: 30, height: 30)

            Image(systemName: isUnlocked ? milestone.icon : "lock.fill")
                .font(.system(size: isUnlocked ? 13 : 11, weight: .semibold))
                .foregroundStyle(isUnlocked ? .white : .white.opacity(0.2))

            // Shimmer sweep
            if isUnlocked {
                Circle()
                    .fill(
                        LinearGradient(
                            colors: [.clear, .white.opacity(0.35), .clear],
                            startPoint: UnitPoint(x: holoPhase - 0.3, y: 0),
                            endPoint: UnitPoint(x: holoPhase + 0.3, y: 1)
                        )
                    )
                    .frame(width: 34, height: 34)
                    .blendMode(.overlay)
            }

            // Orbiting confetti
            if isUnlocked && showConfetti {
                ForEach(0..<8, id: \.self) { i in
                    let angle = CGFloat(i) * .pi / 4 + holoPhase * 3
                    let alpha = 0.4 + 0.5 * sin(holoPhase * 4 + CGFloat(i))
                    Circle()
                        .fill(confettiColor(i))
                        .frame(width: 2.5, height: 2.5)
                        .offset(x: 24 * cos(angle), y: 24 * sin(angle))
                        .opacity(alpha)
                        .blur(radius: 0.3)
                }
            }
        }
        .frame(width: 46)
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
