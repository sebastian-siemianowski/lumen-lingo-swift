import SwiftUI

// MARK: - Breathing Orbs

/// Full-quality port of React's BreathingOrbs.jsx.
/// Large blurred radial gradient orbs with keyframe scale/opacity/translation animations.
struct BreathingOrbsView: View {
    let isDarkMode: Bool
    let scheme: BreathingOrbScheme
    let intensity: Double
    let speed: Double

    @State private var animationPhase: Double = 0

    private var orbConfigs: [OrbConfig] {
        let colors = colorScheme(for: scheme, isDark: isDarkMode)
        return [
            OrbConfig(
                size: 600, blur: isDarkMode ? 50 : 42,
                position: CGPoint(x: -0.06, y: -0.08),
                scaleKeyframes: [0.96, 1.12, 0.98, 1.08, 0.96],
                duration: 14 / speed, delay: 0,
                colors: colors[0], baseOpacity: 0.62 * intensity
            ),
            OrbConfig(
                size: 580, blur: isDarkMode ? 45 : 40,
                position: CGPoint(x: 0.60, y: -0.05),
                scaleKeyframes: [0.96, 1.08, 0.98, 1.12, 0.96],
                duration: 16 / speed, delay: 1.5,
                colors: colors[1], baseOpacity: 0.62 * intensity
            ),
            OrbConfig(
                size: 620, blur: isDarkMode ? 55 : 45,
                position: CGPoint(x: 0.55, y: 0.50),
                scaleKeyframes: [0.96, 1.16, 0.98, 1.05, 0.96],
                duration: 13 / speed, delay: 0.8,
                colors: colors[2], baseOpacity: 0.62 * intensity
            ),
            OrbConfig(
                size: 550, blur: isDarkMode ? 40 : 40,
                position: CGPoint(x: -0.08, y: 0.55),
                scaleKeyframes: [0.96, 1.10, 0.98, 1.08, 0.96],
                duration: 15 / speed, delay: 2.2,
                colors: colors[3], baseOpacity: 0.62 * intensity
            ),
            OrbConfig(
                size: 650, blur: isDarkMode ? 48 : 43,
                position: CGPoint(x: 0.25, y: 0.25),
                scaleKeyframes: [0.96, 1.14, 0.98, 1.06, 0.96],
                duration: 12 / speed, delay: 3.2,
                colors: colors[4 % colors.count], baseOpacity: 0.62 * intensity
            ),
        ]
    }

    var body: some View {
        GeometryReader { geometry in
            ZStack {
                ForEach(Array(orbConfigs.enumerated()), id: \.offset) { index, config in
                    BreathingOrb(config: config, phase: animationPhase)
                        .position(
                            x: geometry.size.width * config.position.x + config.size / 2,
                            y: geometry.size.height * config.position.y + config.size / 2
                        )
                }
            }
        }
        .onAppear {
            withAnimation(.linear(duration: 1).repeatForever(autoreverses: false)) {
                animationPhase = 1
            }
        }
        .allowsHitTesting(false)
    }

    // MARK: - Color Schemes

    private func colorScheme(for scheme: BreathingOrbScheme, isDark: Bool) -> [[Color]] {
        isDark ? scheme.darkColors : scheme.lightColors
    }
}

// MARK: - Single Breathing Orb

private struct BreathingOrb: View {
    let config: OrbConfig
    let phase: Double

    var body: some View {
        TimelineView(.animation(minimumInterval: 1.0 / 30.0)) { timeline in
            let elapsed = timeline.date.timeIntervalSinceReferenceDate
            let t = elapsed / config.duration
            let keyframeT = t.truncatingRemainder(dividingBy: 1.0)

            // Interpolate scale from keyframes
            let scale = interpolateKeyframes(config.scaleKeyframes, at: keyframeT)
            let opacity = config.baseOpacity + sin(t * .pi * 2) * 0.04

            // Subtle translation
            let tx = sin(t * .pi * 2 * 0.7 + Double(config.delay)) * 15
            let ty = cos(t * .pi * 2 * 0.5 + Double(config.delay) * 1.3) * 12
            let rotation = sin(t * .pi * 2 * 0.3) * 2

            let color = config.colors.first ?? .purple

            Circle()
                .fill(
                    RadialGradient(
                        colors: [
                            color.opacity(opacity),
                            color.opacity(opacity * 0.6),
                            color.opacity(opacity * 0.2),
                            color.opacity(0)
                        ],
                        center: .center,
                        startRadius: 0,
                        endRadius: config.size / 2
                    )
                )
                .frame(width: config.size, height: config.size)
                .scaleEffect(scale)
                .offset(x: tx, y: ty)
                .rotationEffect(.degrees(rotation))
                .blur(radius: config.blur)
        }
    }

    private func interpolateKeyframes(_ keyframes: [Double], at t: Double) -> Double {
        guard keyframes.count > 1 else { return keyframes.first ?? 1.0 }
        let segments = keyframes.count - 1
        let segmentT = t * Double(segments)
        let index = Int(segmentT)
        let frac = segmentT - Double(index)

        let safeIndex = min(index, segments - 1)
        let a = keyframes[safeIndex]
        let b = keyframes[min(safeIndex + 1, segments)]

        // Smooth interpolation (ease-in-out)
        let smooth = frac * frac * (3 - 2 * frac)
        return a + (b - a) * smooth
    }
}

// MARK: - OrbConfig

struct OrbConfig {
    let size: CGFloat
    let blur: CGFloat
    let position: CGPoint
    let scaleKeyframes: [Double]
    let duration: Double
    let delay: Double
    let colors: [Color]
    let baseOpacity: Double
}
