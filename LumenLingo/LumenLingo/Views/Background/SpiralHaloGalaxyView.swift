import SwiftUI

// MARK: - Spiral Halo Galaxy

/// Full-quality port: Top-down Milky Way view with logarithmic spiral arms,
/// globular cluster halos, dust lanes, warm core bulge, and wide star field.
struct SpiralHaloGalaxyView: View {
    let intensity: Double
    let speed: Double

    var body: some View {
        ZStack {
            // Deep space base
            Color(red: 2/255, green: 2/255, blue: 8/255)

            // Galactic core bulge
            galacticCore

            // Spiral arms canvas
            spiralArmsCanvas

            // Halo star field (globular cluster distribution)
            haloStarField

            // Dust lanes
            dustLanes

            // Central intense glow
            centralGlow

            // Outer darkness vignette
            outerVignette
        }
    }

    private var galacticCore: some View {
        ZStack {
            // Warm core emission
            RadialGradient(
                colors: [
                    Color(red: 255/255, green: 220/255, blue: 150/255).opacity(0.12),
                    Color(red: 255/255, green: 180/255, blue: 100/255).opacity(0.06),
                    Color(red: 200/255, green: 120/255, blue: 60/255).opacity(0.02),
                    .clear
                ],
                center: .center,
                startRadius: 0,
                endRadius: UIScreen.main.bounds.width * 0.18
            )
            .blur(radius: 20)

            // Supermassive center point
            RadialGradient(
                colors: [
                    .white.opacity(0.15),
                    Color(red: 255/255, green: 240/255, blue: 200/255).opacity(0.08),
                    .clear
                ],
                center: .center,
                startRadius: 0,
                endRadius: 30
            )
        }
    }

    private var spiralArmsCanvas: some View {
        TimelineView(.animation(minimumInterval: 1.0 / 20.0)) { timeline in
            Canvas { context, size in
                let elapsed = timeline.date.timeIntervalSinceReferenceDate * 0.08 * speed
                drawSpiralArms(context: context, size: size, elapsed: elapsed)
            }
            .blendMode(.screen)
        }
    }

    private func drawSpiralArms(context: GraphicsContext, size: CGSize, elapsed: Double) {
        let cx = Double(size.width) / 2
        let cy = Double(size.height) / 2
        let maxRadius = min(size.width, size.height) * 0.45

        // 2 major spiral arms + 2 secondary
        let arms: [(offset: Double, starCount: Int, brightness: Double, armColor: Color)] = [
            (0, 400, 1.0, Color(red: 180/255, green: 200/255, blue: 255/255)),
            (.pi, 400, 1.0, Color(red: 200/255, green: 180/255, blue: 255/255)),
            (.pi / 2, 200, 0.6, Color(red: 220/255, green: 200/255, blue: 255/255)),
            (3 * .pi / 2, 200, 0.6, Color(red: 200/255, green: 220/255, blue: 255/255)),
        ]

        for (armIdx, arm) in arms.enumerated() {
            for i in 0..<arm.starCount {
                let t = Double(i) / Double(arm.starCount) // 0..1 along arm
                let r = t * Double(maxRadius)

                // Logarithmic spiral: angle = a * ln(r/r0)
                let spiralTightness = 0.35
                let baseAngle = spiralTightness * log(max(1, r / 10)) + arm.offset

                // Slow rotation
                let rotation = elapsed * 0.05
                let angle = baseAngle + rotation

                // Arm width increases with radius
                let armWidth = 8 + t * 25
                let scatter = (seededRandom(100 + armIdx, i * 3) - 0.5) * armWidth

                let starX = cx + cos(angle) * (r + scatter)
                let starY = cy + sin(angle) * (r + scatter * 0.7)

                guard starX > -10, starX < Double(size.width) + 10,
                      starY > -10, starY < Double(size.height) + 10 else { continue }

                let starSize = 0.3 + seededRandom(100 + armIdx, i * 3 + 1) * 2.0
                let twinkle = sin(elapsed * (1.5 + seededRandom(100 + armIdx, i * 7) * 3) +
                                   Double(i) * 0.1) * 0.3 + 0.7
                let distFade = 1.0 - pow(t, 2) * 0.5
                let alpha = twinkle * arm.brightness * distFade * 0.4 * intensity

                // Young hot stars in arms: blue-white tint
                let colorMix = seededRandom(100 + armIdx, i * 3 + 2)
                let starColor: Color = colorMix < 0.7 ? arm.armColor : .white

                // Glow
                let glowSize = starSize * 2
                context.fill(
                    Circle().path(in: CGRect(x: starX - glowSize, y: starY - glowSize, width: glowSize * 2, height: glowSize * 2)),
                    with: .radialGradient(
                        Gradient(colors: [starColor.opacity(alpha * 0.15), .clear]),
                        center: CGPoint(x: starX, y: starY), startRadius: 0, endRadius: glowSize
                    )
                )

                // Core
                let coreSize = starSize * 0.6
                context.fill(
                    Circle().path(in: CGRect(x: starX - coreSize, y: starY - coreSize, width: coreSize * 2, height: coreSize * 2)),
                    with: .radialGradient(
                        Gradient(colors: [.white.opacity(alpha * 0.8), starColor.opacity(alpha * 0.2), .clear]),
                        center: CGPoint(x: starX, y: starY), startRadius: 0, endRadius: coreSize
                    )
                )
            }
        }
    }

    private var haloStarField: some View {
        TimelineView(.animation(minimumInterval: 1.0 / 15.0)) { timeline in
            Canvas { context, size in
                let elapsed = timeline.date.timeIntervalSinceReferenceDate * speed

                // 300 halo stars in spherical distribution
                for i in 0..<300 {
                    // Spherical halo — uniform across entire view
                    let rx = seededRandom(200, i * 3)
                    let ry = seededRandom(200, i * 3 + 1)
                    let x = rx * Double(size.width)
                    let y = ry * Double(size.height)

                    // Distance from center
                    let dx = x - Double(size.width) / 2
                    let dy = y - Double(size.height) / 2
                    let dist = sqrt(dx * dx + dy * dy)
                    let maxDist = sqrt(pow(Double(size.width) / 2, 2) + pow(Double(size.height) / 2, 2))
                    let distRatio = dist / maxDist

                    // Halo density falls off gently
                    let haloFade = max(0.2, 1.0 - distRatio * 0.8)

                    let starSize = 0.3 + seededRandom(200, i * 3 + 2) * 1.2
                    let twinkle = sin(elapsed * (0.5 + seededRandom(200, i * 7) * 2) +
                                       Double(i) * 0.3) * 0.3 + 0.7
                    let alpha = twinkle * haloFade * 0.2 * intensity

                    // Old red/yellow halo stars
                    let colorSwitch = seededRandom(200, i * 5)
                    let starColor: Color = colorSwitch < 0.4
                        ? Color(red: 255/255, green: 200/255, blue: 150/255)
                        : colorSwitch < 0.7
                            ? Color(red: 255/255, green: 180/255, blue: 120/255)
                            : Color(red: 200/255, green: 200/255, blue: 255/255)

                    let coreSize = starSize * 0.5
                    context.fill(
                        Circle().path(in: CGRect(x: x - coreSize, y: y - coreSize, width: coreSize * 2, height: coreSize * 2)),
                        with: .radialGradient(
                            Gradient(colors: [starColor.opacity(alpha * 0.7), .clear]),
                            center: CGPoint(x: x, y: y), startRadius: 0, endRadius: coreSize
                        )
                    )
                }
            }
            .blendMode(.screen)
        }
    }

    private var dustLanes: some View {
        ZStack {
            // Dark dust lane across galaxy
            Ellipse()
                .fill(Color(red: 2/255, green: 2/255, blue: 8/255))
                .frame(width: UIScreen.main.bounds.width * 0.7, height: 15)
                .blur(radius: 10)
                .blendMode(.multiply)
                .opacity(0.6)
                .rotationEffect(.degrees(12))

            Ellipse()
                .fill(Color(red: 2/255, green: 2/255, blue: 8/255))
                .frame(width: UIScreen.main.bounds.width * 0.55, height: 10)
                .blur(radius: 8)
                .blendMode(.multiply)
                .opacity(0.4)
                .rotationEffect(.degrees(-8))
                .offset(y: 20)
        }
    }

    private var centralGlow: some View {
        RadialGradient(
            colors: [
                Color(red: 255/255, green: 220/255, blue: 150/255).opacity(0.05),
                Color(red: 255/255, green: 180/255, blue: 100/255).opacity(0.02),
                .clear
            ],
            center: .center,
            startRadius: 0,
            endRadius: UIScreen.main.bounds.width * 0.12
        )
    }

    private var outerVignette: some View {
        RadialGradient(
            colors: [
                .clear,
                Color(red: 2/255, green: 2/255, blue: 8/255).opacity(0.7)
            ],
            center: .center,
            startRadius: UIScreen.main.bounds.width * 0.3,
            endRadius: UIScreen.main.bounds.width * 0.8
        )
    }
}
