import SwiftUI

// MARK: - Lagoon Nebula

/// Full-quality port: JWST-inspired cosmic cliffs with gas clouds, star clusters,
/// Bok globules, and JWST diffraction spikes.
struct LagoonNebulaView: View {
    let intensity: Double
    let speed: Double

    var body: some View {
        ZStack {
            // Base darkness
            Color(red: 2/255, green: 1/255, blue: 3/255)

            // Atmospheric glows
            atmosphericGlows

            // Gas canvas (dust/ionization zones)
            gasCanvas

            // Bok globules (dark nebula patches)
            bokGlobules

            // Star field with JWST diffraction spikes
            lagoonStarField

            // Cinematic color grade
            cinematicGrade

            // Vignette
            nebularVignette
        }
    }

    private var atmosphericGlows: some View {
        ZStack {
            RadialGradient(
                colors: [Color(red: 180/255, green: 60/255, blue: 40/255).opacity(0.12), .clear],
                center: UnitPoint(x: 0.35, y: 0.55),
                startRadius: 0,
                endRadius: UIScreen.main.bounds.width * 0.5
            )
            .blur(radius: 85)

            RadialGradient(
                colors: [Color(red: 100/255, green: 220/255, blue: 255/255).opacity(0.08), .clear],
                center: UnitPoint(x: 0.65, y: 0.35),
                startRadius: 0,
                endRadius: UIScreen.main.bounds.width * 0.5
            )
            .blur(radius: 110)

            RadialGradient(
                colors: [Color(red: 255/255, green: 180/255, blue: 80/255).opacity(0.06), .clear],
                center: UnitPoint(x: 0.50, y: 0.70),
                startRadius: 0,
                endRadius: UIScreen.main.bounds.width * 0.4
            )
            .blur(radius: 65)
        }
    }

    private var gasCanvas: some View {
        TimelineView(.animation(minimumInterval: 1.0 / 20.0)) { timeline in
            Canvas { context, size in
                let elapsed = timeline.date.timeIntervalSinceReferenceDate * 0.3 * speed
                drawGasParticles(context: context, size: size, elapsed: elapsed)
            }
            .blendMode(.screen)
            .opacity(0.9)
        }
    }

    private func drawGasParticles(context: GraphicsContext, size: CGSize, elapsed: Double) {
        let particleCount = 80

        for i in 0..<particleCount {
            let rx = seededRandom(42, i * 5)
            let ry = seededRandom(42, i * 5 + 1)
            let ridgePos = rx + ry

            // Determine zone and color
            let color: Color
            let particleSize: CGFloat

            if ridgePos < 0.8 {
                // Dust zone — golden/orange/rust
                let colorChoice = seededRandom(42, i * 5 + 2)
                if colorChoice < 0.3 {
                    color = Color(red: 255/255, green: 180/255, blue: 80/255)
                } else if colorChoice < 0.6 {
                    color = Color(red: 220/255, green: 100/255, blue: 50/255)
                } else {
                    color = Color(red: 180/255, green: 60/255, blue: 40/255)
                }
                particleSize = 150 + CGFloat(seededRandom(42, i * 5 + 3)) * 300
            } else if ridgePos > 1.2 {
                // Gas zone — cyan/teal
                let colorChoice = seededRandom(42, i * 5 + 2)
                if colorChoice < 0.5 {
                    color = Color(red: 100/255, green: 220/255, blue: 255/255)
                } else {
                    color = Color(red: 20/255, green: 100/255, blue: 120/255)
                }
                particleSize = 100 + CGFloat(seededRandom(42, i * 5 + 3)) * 200
            } else {
                // Ionization front — golden
                color = Color(red: 255/255, green: 180/255, blue: 80/255)
                particleSize = 80 + CGFloat(seededRandom(42, i * 5 + 3)) * 150
            }

            // Perlin-like drift
            let driftX = sin(elapsed * 0.1 + Double(i) * 0.7) * 5
            let driftY = cos(elapsed * 0.08 + Double(i) * 0.9) * 3.5

            let x = rx * Double(size.width) + driftX
            let y = ry * Double(size.height) + driftY

            let alpha = 0.03 + seededRandom(42, i * 5 + 4) * 0.04

            let rect = CGRect(
                x: x - Double(particleSize / 2),
                y: y - Double(particleSize / 2),
                width: Double(particleSize),
                height: Double(particleSize)
            )

            context.fill(
                Circle().path(in: rect),
                with: .radialGradient(
                    Gradient(stops: [
                        .init(color: color.opacity(alpha * intensity), location: 0),
                        .init(color: color.opacity(alpha * 0.4 * intensity), location: 0.4),
                        .init(color: color.opacity(alpha * 0.1 * intensity), location: 0.7),
                        .init(color: .clear, location: 1.0),
                    ]),
                    center: CGPoint(x: x, y: y),
                    startRadius: 0,
                    endRadius: Double(particleSize / 2)
                )
            )
        }
    }

    private var bokGlobules: some View {
        ZStack {
            // 4 dark ellipse patches (absorbing dust)
            Ellipse()
                .fill(Color(red: 2/255, green: 1/255, blue: 3/255))
                .frame(width: 200, height: 120)
                .blur(radius: 40)
                .blendMode(.multiply)
                .opacity(0.7)
                .offset(x: -60, y: 80)

            Ellipse()
                .fill(Color(red: 2/255, green: 1/255, blue: 3/255))
                .frame(width: 150, height: 90)
                .blur(radius: 35)
                .blendMode(.multiply)
                .opacity(0.6)
                .offset(x: 80, y: -40)

            Ellipse()
                .fill(Color(red: 2/255, green: 1/255, blue: 3/255))
                .frame(width: 180, height: 100)
                .blur(radius: 45)
                .blendMode(.multiply)
                .opacity(0.5)
                .offset(x: -100, y: -100)

            Ellipse()
                .fill(Color(red: 2/255, green: 1/255, blue: 3/255))
                .frame(width: 120, height: 80)
                .blur(radius: 38)
                .blendMode(.multiply)
                .opacity(0.55)
                .offset(x: 120, y: 120)
        }
    }

    private var lagoonStarField: some View {
        TimelineView(.animation(minimumInterval: 1.0 / 20.0)) { timeline in
            Canvas { context, size in
                let elapsed = timeline.date.timeIntervalSinceReferenceDate * speed
                drawLagoonStars(context: context, size: size, elapsed: elapsed)
            }
            .blendMode(.screen)
        }
    }

    private func drawLagoonStars(context: GraphicsContext, size: CGSize, elapsed: Double) {
        let starCount = 700
        let goldenRatio = 1.618033988749895

        for i in 0..<starCount {
            let z = seededRandom(42, i * 7 + 6)
            let baseSize = 0.3 + pow(seededRandom(42, i * 7 + 2), 1.5) * (z > 0.5 ? 3.5 : 2.0)

            // Clustering toward diagonal band
            var rx = seededRandom(42, i * 7)
            var ry = seededRandom(42, i * 7 + 1)

            if seededRandom(42, i * 7 + 3) < 0.5 {
                let noiseVal = sin(Double(i) * 0.37) * 0.35
                rx = 0.3 + noiseVal + seededRandom(42, i * 7 + 4) * 0.4
                ry = 1.0 - rx + (seededRandom(42, i * 7 + 5) - 0.5) * 0.3
            }

            let x = rx * Double(size.width)
            let y = ry * Double(size.height)

            // Edge fade
            let edgeFade = min(
                min(x, Double(size.width) - x),
                min(y, Double(size.height) - y)
            ) / 150.0
            let fadeAlpha = min(1.0, max(0.0, edgeFade))

            let phase = seededRandom(42, i * 11) * .pi * 2
            let twinkleSpeed = 0.3 + seededRandom(42, i * 13) * 1.2
            let twinkle = sin(elapsed * twinkleSpeed * 6 + phase) * 0.5 + 0.5

            // Mystical stars (35%): color-shifting
            let isMystical = seededRandom(42, i * 17) < 0.35
            let starColor: Color

            if isMystical {
                let warmShift = sin(elapsed * 0.3 + phase * goldenRatio) * 0.5 + 0.5
                let coolShift = cos(elapsed * 0.2 + phase * 2.7) * 0.5 + 0.5
                let r = 255.0 * (0.8 + warmShift * 0.2)
                let g = 220.0 * (0.7 + warmShift * 0.15 - coolShift * 0.1)
                let b = 180.0 * (0.5 + coolShift * 0.5)
                starColor = Color(red: r/255, green: g/255, blue: b/255)
            } else {
                starColor = Color(red: 255/255, green: 248/255, blue: 240/255)
            }

            let alpha = twinkle * 0.7 + 0.3
            let finalAlpha = alpha * fadeAlpha * intensity

            // Hero stars (top 1%): 3-layer + diffraction spikes
            let isHero = i < 7

            if isHero {
                // Atmosphere
                let r = baseSize * 9
                context.fill(
                    Circle().path(in: CGRect(x: x - r, y: y - r, width: r * 2, height: r * 2)),
                    with: .radialGradient(
                        Gradient(colors: [starColor.opacity(finalAlpha * 0.08), .clear]),
                        center: CGPoint(x: x, y: y), startRadius: 0, endRadius: r
                    )
                )

                // Diffusion
                let r2 = baseSize * 5
                context.fill(
                    Circle().path(in: CGRect(x: x - r2, y: y - r2, width: r2 * 2, height: r2 * 2)),
                    with: .radialGradient(
                        Gradient(colors: [starColor.opacity(finalAlpha * 0.15), .clear]),
                        center: CGPoint(x: x, y: y), startRadius: 0, endRadius: r2
                    )
                )

                // Core
                let r3 = baseSize * 2
                context.fill(
                    Circle().path(in: CGRect(x: x - r3, y: y - r3, width: r3 * 2, height: r3 * 2)),
                    with: .radialGradient(
                        Gradient(colors: [.white.opacity(finalAlpha * 0.95), starColor.opacity(finalAlpha * 0.3), .clear]),
                        center: CGPoint(x: x, y: y), startRadius: 0, endRadius: r3
                    )
                )

                // JWST diffraction spikes (6 spikes at 60° intervals)
                for spike in 0..<6 {
                    let angle = Double(spike) * .pi / 3
                    let spikeLength = baseSize * 12
                    let endX = x + cos(angle) * spikeLength
                    let endY = y + sin(angle) * spikeLength

                    var spikePath = Path()
                    spikePath.move(to: CGPoint(x: x, y: y))
                    spikePath.addLine(to: CGPoint(x: endX, y: endY))

                    context.stroke(
                        spikePath,
                        with: .linearGradient(
                            Gradient(colors: [starColor.opacity(finalAlpha * 0.6), .clear]),
                            startPoint: CGPoint(x: x, y: y),
                            endPoint: CGPoint(x: endX, y: endY)
                        ),
                        lineWidth: 1.2
                    )
                }
            } else {
                // Standard star rendering
                let glowSize = z < 0.5 ? baseSize * 2.5 : baseSize * 2.8

                // Glow
                context.fill(
                    Circle().path(in: CGRect(x: x - glowSize, y: y - glowSize, width: glowSize * 2, height: glowSize * 2)),
                    with: .radialGradient(
                        Gradient(colors: [starColor.opacity(finalAlpha * 0.2), .clear]),
                        center: CGPoint(x: x, y: y), startRadius: 0, endRadius: glowSize
                    )
                )

                // Core
                let coreSize = baseSize * 0.8
                context.fill(
                    Circle().path(in: CGRect(x: x - coreSize, y: y - coreSize, width: coreSize * 2, height: coreSize * 2)),
                    with: .radialGradient(
                        Gradient(colors: [.white.opacity(finalAlpha * 0.85), starColor.opacity(finalAlpha * 0.2), .clear]),
                        center: CGPoint(x: x, y: y), startRadius: 0, endRadius: coreSize
                    )
                )
            }
        }
    }

    private var cinematicGrade: some View {
        LinearGradient(
            stops: [
                .init(color: Color(red: 255/255, green: 180/255, blue: 80/255).opacity(0.02), location: 0),
                .init(color: .clear, location: 0.5),
                .init(color: Color(red: 100/255, green: 220/255, blue: 255/255).opacity(0.015), location: 1.0),
            ],
            startPoint: UnitPoint(x: 0.1, y: 0),
            endPoint: UnitPoint(x: 0.9, y: 1)
        )
    }

    private var nebularVignette: some View {
        RadialGradient(
            colors: [
                .clear,
                Color(red: 2/255, green: 1/255, blue: 3/255).opacity(0.85)
            ],
            center: .center,
            startRadius: UIScreen.main.bounds.width * 0.25,
            endRadius: UIScreen.main.bounds.width * 0.85
        )
    }
}
