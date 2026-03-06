import SwiftUI

// MARK: - Celestial Lagoon Nebula

/// Full-quality port: Ethereal bioluminescent deep-sea-meets-space environment
/// with luminous coral zones, teal abyssal backdrop, bioluminescent particles,
/// and luminous jellyfish entities.
struct CelestialLagoonView: View {
    let intensity: Double
    let speed: Double

    var body: some View {
        ZStack {
            // Base deep ocean/space darkness
            Color(red: 3/255, green: 8/255, blue: 20/255)

            // Teal abyssal backdrop
            RadialGradient(
                colors: [
                    Color(red: 10/255, green: 80/255, blue: 100/255).opacity(0.15),
                    Color(red: 3/255, green: 30/255, blue: 50/255).opacity(0.10),
                    .clear
                ],
                center: UnitPoint(x: 0.5, y: 0.45),
                startRadius: 0,
                endRadius: UIScreen.main.bounds.width * 0.65
            )
            .blur(radius: 60)

            // Coral luminescence zones
            coralZones

            // Main particle canvas (bioluminescent + cauliflower coral + jellyfish)
            bioluminescentCanvas

            // Depth fog
            depthFog

            // Chromatic aberration (subtle color fringing)
            chromaticAberration
        }
    }

    private var coralZones: some View {
        ZStack {
            // Warm coral glow (lower-left)
            RadialGradient(
                colors: [
                    Color(red: 255/255, green: 100/255, blue: 120/255).opacity(0.08),
                    Color(red: 255/255, green: 60/255, blue: 100/255).opacity(0.04),
                    .clear
                ],
                center: UnitPoint(x: 0.25, y: 0.70),
                startRadius: 0,
                endRadius: UIScreen.main.bounds.width * 0.35
            )
            .blur(radius: 50)

            // Magenta coral zone (center-right)
            RadialGradient(
                colors: [
                    Color(red: 200/255, green: 80/255, blue: 180/255).opacity(0.06),
                    Color(red: 150/255, green: 40/255, blue: 130/255).opacity(0.03),
                    .clear
                ],
                center: UnitPoint(x: 0.72, y: 0.55),
                startRadius: 0,
                endRadius: UIScreen.main.bounds.width * 0.30
            )
            .blur(radius: 40)

            // Cyan luminescence (top)
            RadialGradient(
                colors: [
                    Color(red: 0/255, green: 220/255, blue: 255/255).opacity(0.05),
                    .clear
                ],
                center: UnitPoint(x: 0.45, y: 0.20),
                startRadius: 0,
                endRadius: UIScreen.main.bounds.width * 0.25
            )
            .blur(radius: 45)
        }
    }

    private var bioluminescentCanvas: some View {
        TimelineView(.animation(minimumInterval: 1.0 / 20.0)) { timeline in
            Canvas { context, size in
                let elapsed = timeline.date.timeIntervalSinceReferenceDate * 0.4 * speed
                drawBioluminescence(context: context, size: size, elapsed: elapsed)
                drawCoralStructures(context: context, size: size, elapsed: elapsed)
                drawJellyfish(context: context, size: size, elapsed: elapsed)
            }
            .blendMode(.screen)
        }
    }

    private func drawBioluminescence(context: GraphicsContext, size: CGSize, elapsed: Double) {
        let particleCount = 120

        for i in 0..<particleCount {
            let rx = seededRandom(99, i * 4)
            let ry = seededRandom(99, i * 4 + 1)
            let sz = 3.0 + seededRandom(99, i * 4 + 2) * 12

            // Color: cyan/teal/blue/warm-pink mix
            let colorSwitch = seededRandom(99, i * 4 + 3)
            let color: Color
            if colorSwitch < 0.35 {
                color = Color(red: 0/255, green: 220/255, blue: 255/255) // cyan
            } else if colorSwitch < 0.55 {
                color = Color(red: 20/255, green: 180/255, blue: 200/255) // teal
            } else if colorSwitch < 0.75 {
                color = Color(red: 100/255, green: 150/255, blue: 255/255) // blue
            } else {
                color = Color(red: 255/255, green: 100/255, blue: 150/255) // warm coral pink
            }

            // Drift animation (slow current-like)
            let driftX = sin(elapsed * 0.15 + Double(i) * 0.3) * 8
            let driftY = cos(elapsed * 0.12 + Double(i) * 0.4) * 6
            let x = rx * Double(size.width) + driftX
            let y = ry * Double(size.height) + driftY

            // Pulsing glow
            let phase = seededRandom(99, i * 11) * .pi * 2
            let pulse = sin(elapsed * 0.8 + phase) * 0.5 + 0.5
            let alpha = (0.15 + pulse * 0.25) * intensity

            // Particle with halo
            let haloSize = sz * 3
            context.fill(
                Circle().path(in: CGRect(x: x - haloSize, y: y - haloSize, width: haloSize * 2, height: haloSize * 2)),
                with: .radialGradient(
                    Gradient(colors: [color.opacity(alpha * 0.2), .clear]),
                    center: CGPoint(x: x, y: y), startRadius: 0, endRadius: haloSize
                )
            )

            let coreSize = sz * 0.5
            context.fill(
                Circle().path(in: CGRect(x: x - coreSize, y: y - coreSize, width: coreSize * 2, height: coreSize * 2)),
                with: .radialGradient(
                    Gradient(colors: [.white.opacity(alpha * 0.7), color.opacity(alpha * 0.3), .clear]),
                    center: CGPoint(x: x, y: y), startRadius: 0, endRadius: coreSize
                )
            )
        }
    }

    private func drawCoralStructures(context: GraphicsContext, size: CGSize, elapsed: Double) {
        // 5 cauliflower coral formations near the bottom
        for i in 0..<5 {
            let baseX = (0.1 + seededRandom(77, i * 3) * 0.8) * Double(size.width)
            let baseY = Double(size.height) * (0.75 + seededRandom(77, i * 3 + 1) * 0.2)

            let branchCount = 6 + Int(seededRandom(77, i * 3 + 2) * 4)

            for j in 0..<branchCount {
                let angle = -(.pi / 2) + (seededRandom(77, i * 20 + j) - 0.5) * 1.3
                let length = 30 + seededRandom(77, i * 20 + j + 10) * 60
                let sx = baseX + cos(angle) * length
                let sy = baseY + sin(angle) * length

                let coralSz = 15 + seededRandom(77, i * 20 + j + 5) * 25
                let pulse = sin(elapsed * 0.5 + Double(i + j) * 0.8) * 0.3 + 0.7
                let alpha = 0.06 * pulse * intensity

                let coralColor: Color = i % 2 == 0
                    ? Color(red: 255/255, green: 100/255, blue: 120/255)
                    : Color(red: 200/255, green: 80/255, blue: 180/255)

                context.fill(
                    Circle().path(in: CGRect(x: sx - coralSz/2, y: sy - coralSz/2, width: coralSz, height: coralSz)),
                    with: .radialGradient(
                        Gradient(colors: [coralColor.opacity(alpha), .clear]),
                        center: CGPoint(x: sx, y: sy), startRadius: 0, endRadius: coralSz / 2
                    )
                )
            }
        }
    }

    private func drawJellyfish(context: GraphicsContext, size: CGSize, elapsed: Double) {
        // 3 luminous jellyfish entities
        for i in 0..<3 {
            let baseX = (0.2 + Double(i) * 0.3) * Double(size.width)
            let driftY = sin(elapsed * 0.1 + Double(i) * 2) * 30
            let baseY = (0.25 + seededRandom(55, i * 10) * 0.4) * Double(size.height) + driftY
            let driftX = cos(elapsed * 0.08 + Double(i) * 1.5) * 15
            let x = baseX + driftX

            let bellSize = 40 + seededRandom(55, i * 10 + 1) * 30
            let pulse = sin(elapsed * 0.6 + Double(i) * 1.2) * 0.3 + 0.7
            let alpha = 0.08 * pulse * intensity

            // Bell
            let bellColor: Color = i == 0
                ? Color(red: 180/255, green: 100/255, blue: 255/255) // purple
                : i == 1
                    ? Color(red: 0/255, green: 220/255, blue: 255/255) // cyan
                    : Color(red: 255/255, green: 150/255, blue: 200/255) // pink

            context.fill(
                Ellipse().path(in: CGRect(x: x - bellSize/2, y: baseY - bellSize * 0.35,
                                          width: bellSize, height: bellSize * 0.7)),
                with: .radialGradient(
                    Gradient(colors: [bellColor.opacity(alpha * 1.5), bellColor.opacity(alpha * 0.3), .clear]),
                    center: CGPoint(x: x, y: baseY),
                    startRadius: 0, endRadius: bellSize * 0.5
                )
            )

            // Tentacles (4-6 wispy lines)
            let tentacleCount = 4 + Int(seededRandom(55, i * 10 + 2) * 3)
            for t in 0..<tentacleCount {
                let tx = x + (Double(t) - Double(tentacleCount) / 2) * (bellSize / Double(tentacleCount))
                let lengthFactor = 40 + seededRandom(55, i * 20 + t) * 60
                let swayX = sin(elapsed * 0.3 + Double(t) * 0.5 + Double(i)) * 8

                var tentaclePath = Path()
                tentaclePath.move(to: CGPoint(x: tx, y: baseY + bellSize * 0.2))
                tentaclePath.addQuadCurve(
                    to: CGPoint(x: tx + swayX, y: baseY + bellSize * 0.2 + lengthFactor),
                    control: CGPoint(x: tx + swayX * 0.5, y: baseY + bellSize * 0.2 + lengthFactor * 0.5)
                )

                context.stroke(
                    tentaclePath,
                    with: .linearGradient(
                        Gradient(colors: [bellColor.opacity(alpha), .clear]),
                        startPoint: CGPoint(x: tx, y: baseY + bellSize * 0.2),
                        endPoint: CGPoint(x: tx + swayX, y: baseY + bellSize * 0.2 + lengthFactor)
                    ),
                    lineWidth: 1.5
                )
            }
        }
    }

    private var depthFog: some View {
        LinearGradient(
            stops: [
                .init(color: .clear, location: 0),
                .init(color: Color(red: 3/255, green: 15/255, blue: 30/255).opacity(0.35), location: 0.7),
                .init(color: Color(red: 3/255, green: 8/255, blue: 20/255).opacity(0.5), location: 1.0),
            ],
            startPoint: .top,
            endPoint: .bottom
        )
    }

    private var chromaticAberration: some View {
        ZStack {
            RadialGradient(
                colors: [.clear, Color(red: 0/255, green: 150/255, blue: 255/255).opacity(0.015)],
                center: .center,
                startRadius: UIScreen.main.bounds.width * 0.2,
                endRadius: UIScreen.main.bounds.width * 0.7
            )
            RadialGradient(
                colors: [.clear, Color(red: 255/255, green: 50/255, blue: 80/255).opacity(0.01)],
                center: UnitPoint(x: 0.52, y: 0.48),
                startRadius: UIScreen.main.bounds.width * 0.2,
                endRadius: UIScreen.main.bounds.width * 0.75
            )
        }
    }
}
