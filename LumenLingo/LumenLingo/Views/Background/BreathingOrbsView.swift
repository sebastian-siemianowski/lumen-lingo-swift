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
        switch scheme {
        case .barcelonaNights:
            return isDark ? [
                [Color(red: 99/255, green: 102/255, blue: 241/255)],   // Indigo
                [Color(red: 236/255, green: 72/255, blue: 153/255)],   // Pink
                [Color(red: 251/255, green: 191/255, blue: 36/255)],   // Amber
                [Color(red: 20/255, green: 184/255, blue: 166/255)],   // Teal
                [Color(red: 168/255, green: 85/255, blue: 247/255)],   // Purple
            ] : [
                [Color(red: 129/255, green: 140/255, blue: 248/255)],
                [Color(red: 244/255, green: 114/255, blue: 182/255)],
                [Color(red: 252/255, green: 211/255, blue: 77/255)],
                [Color(red: 45/255, green: 212/255, blue: 191/255)],
                [Color(red: 192/255, green: 132/255, blue: 252/255)],
            ]
        case .madridSunrise:
            return isDark ? [
                [Color(red: 239/255, green: 68/255, blue: 68/255)],
                [Color(red: 245/255, green: 158/255, blue: 11/255)],
                [Color(red: 234/255, green: 179/255, blue: 8/255)],
                [Color(red: 249/255, green: 115/255, blue: 22/255)],
                [Color(red: 220/255, green: 38/255, blue: 38/255)],
            ] : [
                [Color(red: 252/255, green: 165/255, blue: 165/255)],
                [Color(red: 253/255, green: 230/255, blue: 138/255)],
                [Color(red: 254/255, green: 240/255, blue: 138/255)],
                [Color(red: 253/255, green: 186/255, blue: 116/255)],
                [Color(red: 252/255, green: 165/255, blue: 165/255)],
            ]
        case .lisboaGoldenHour:
            return isDark ? [
                [Color(red: 236/255, green: 72/255, blue: 153/255)],
                [Color(red: 168/255, green: 85/255, blue: 247/255)],
                [Color(red: 139/255, green: 92/255, blue: 246/255)],
                [Color(red: 244/255, green: 63/255, blue: 94/255)],
                [Color(red: 192/255, green: 38/255, blue: 211/255)],
            ] : [
                [Color(red: 244/255, green: 114/255, blue: 182/255)],
                [Color(red: 192/255, green: 132/255, blue: 252/255)],
                [Color(red: 167/255, green: 139/255, blue: 250/255)],
                [Color(red: 251/255, green: 113/255, blue: 133/255)],
                [Color(red: 232/255, green: 121/255, blue: 249/255)],
            ]
        case .warsawTwilight:
            return isDark ? [
                [Color(red: 34/255, green: 197/255, blue: 94/255)],
                [Color(red: 16/255, green: 185/255, blue: 129/255)],
                [Color(red: 52/255, green: 211/255, blue: 153/255)],
                [Color(red: 5/255, green: 150/255, blue: 105/255)],
                [Color(red: 74/255, green: 222/255, blue: 128/255)],
            ] : [
                [Color(red: 134/255, green: 239/255, blue: 172/255)],
                [Color(red: 110/255, green: 231/255, blue: 183/255)],
                [Color(red: 167/255, green: 243/255, blue: 208/255)],
                [Color(red: 52/255, green: 211/255, blue: 153/255)],
                [Color(red: 134/255, green: 239/255, blue: 172/255)],
            ]
        case .prahaAmethyst:
            return isDark ? [
                [Color(red: 99/255, green: 102/255, blue: 241/255)],
                [Color(red: 79/255, green: 70/255, blue: 229/255)],
                [Color(red: 129/255, green: 140/255, blue: 248/255)],
                [Color(red: 67/255, green: 56/255, blue: 202/255)],
                [Color(red: 139/255, green: 92/255, blue: 246/255)],
            ] : [
                [Color(red: 165/255, green: 180/255, blue: 252/255)],
                [Color(red: 129/255, green: 140/255, blue: 248/255)],
                [Color(red: 199/255, green: 210/255, blue: 254/255)],
                [Color(red: 129/255, green: 140/255, blue: 248/255)],
                [Color(red: 196/255, green: 181/255, blue: 253/255)],
            ]
        case .krakowLuminescence:
            return isDark ? [
                [Color(red: 6/255, green: 182/255, blue: 212/255)],
                [Color(red: 139/255, green: 92/255, blue: 246/255)],
                [Color(red: 14/255, green: 165/255, blue: 233/255)],
                [Color(red: 168/255, green: 85/255, blue: 247/255)],
                [Color(red: 56/255, green: 189/255, blue: 248/255)],
            ] : [
                [Color(red: 103/255, green: 232/255, blue: 249/255)],
                [Color(red: 196/255, green: 181/255, blue: 253/255)],
                [Color(red: 125/255, green: 211/255, blue: 252/255)],
                [Color(red: 216/255, green: 180/255, blue: 254/255)],
                [Color(red: 186/255, green: 230/255, blue: 253/255)],
            ]
        }
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
