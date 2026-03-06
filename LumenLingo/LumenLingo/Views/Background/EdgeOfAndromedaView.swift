import SwiftUI

// MARK: - Edge of Andromeda Galaxy

/// Full-quality port: Side-on galaxy view with bright galactic plane,
/// dark dust band, HII region pockets, and wide field star distribution.
struct EdgeOfAndromedaView: View {
    let intensity: Double
    let speed: Double

    var body: some View {
        ZStack {
            // Deep intergalactic void
            Color(red: 3/255, green: 2/255, blue: 6/255)

            // Galactic plane emission
            galacticPlane

            // HII regions (pink/rose nebulae within plane)
            hiiRegions

            // Central bulge glow
            centralBulge

            // Dust band
            darkDustBand

            // Star field canvas
            andromedaStarField

            // Warm scattered light
            scatteredLight

            // Edge vignette
            edgeVignette
        }
    }

    private var galacticPlane: some View {
        ZStack {
            // Wide diffuse band across horizontal center
            LinearGradient(
                stops: [
                    .init(color: .clear, location: 0),
                    .init(color: Color(red: 30/255, green: 25/255, blue: 50/255).opacity(0.05), location: 0.30),
                    .init(color: Color(red: 80/255, green: 60/255, blue: 100/255).opacity(0.10), location: 0.42),
                    .init(color: Color(red: 200/255, green: 180/255, blue: 220/255).opacity(0.12), location: 0.48),
                    .init(color: Color(red: 255/255, green: 240/255, blue: 220/255).opacity(0.08), location: 0.50),
                    .init(color: Color(red: 200/255, green: 180/255, blue: 220/255).opacity(0.12), location: 0.52),
                    .init(color: Color(red: 80/255, green: 60/255, blue: 100/255).opacity(0.10), location: 0.58),
                    .init(color: Color(red: 30/255, green: 25/255, blue: 50/255).opacity(0.05), location: 0.70),
                    .init(color: .clear, location: 1.0),
                ],
                startPoint: .top,
                endPoint: .bottom
            )
            .blur(radius: 15)

            // Additional warmth in center
            Ellipse()
                .fill(
                    RadialGradient(
                        colors: [
                            Color(red: 255/255, green: 220/255, blue: 180/255).opacity(0.06),
                            Color(red: 200/255, green: 180/255, blue: 220/255).opacity(0.03),
                            .clear
                        ],
                        center: .center,
                        startRadius: 0,
                        endRadius: UIScreen.main.bounds.width * 0.5
                    )
                )
                .frame(width: UIScreen.main.bounds.width * 1.2, height: 100)
                .blur(radius: 30)
        }
    }

    private var hiiRegions: some View {
        ZStack {
            // 5 pink/rose emission nebula pockets along galactic plane
            ForEach(0..<5, id: \.self) { i in
                let x = 0.1 + seededRandom(22, i * 4) * 0.8
                let yOffset = (seededRandom(22, i * 4 + 1) - 0.5) * 0.06
                let sz = 30 + seededRandom(22, i * 4 + 2) * 60
                let alpha = 0.04 + seededRandom(22, i * 4 + 3) * 0.04

                Circle()
                    .fill(
                        RadialGradient(
                            colors: [
                                Color(red: 255/255, green: 100/255, blue: 130/255).opacity(alpha * intensity),
                                Color(red: 200/255, green: 60/255, blue: 100/255).opacity(alpha * 0.3 * intensity),
                                .clear
                            ],
                            center: .center,
                            startRadius: 0,
                            endRadius: sz
                        )
                    )
                    .frame(width: sz * 2, height: sz * 2)
                    .position(
                        x: UIScreen.main.bounds.width * x,
                        y: UIScreen.main.bounds.height * (0.50 + yOffset)
                    )
                    .blur(radius: 12)
            }
        }
    }

    private var centralBulge: some View {
        RadialGradient(
            colors: [
                Color(red: 255/255, green: 230/255, blue: 180/255).opacity(0.1),
                Color(red: 255/255, green: 200/255, blue: 140/255).opacity(0.05),
                .clear
            ],
            center: UnitPoint(x: 0.5, y: 0.5),
            startRadius: 0,
            endRadius: UIScreen.main.bounds.width * 0.15
        )
    }

    private var darkDustBand: some View {
        Rectangle()
            .fill(Color(red: 3/255, green: 2/255, blue: 6/255))
            .frame(height: 6)
            .blur(radius: 3)
            .blendMode(.multiply)
            .opacity(0.6)
            .offset(y: -3)
    }

    private var andromedaStarField: some View {
        TimelineView(.animation(minimumInterval: 1.0 / 20.0)) { timeline in
            Canvas { context, size in
                let elapsed = timeline.date.timeIntervalSinceReferenceDate * speed
                drawAndromedaStars(context: context, size: size, elapsed: elapsed)
            }
            .blendMode(.screen)
        }
    }

    private func drawAndromedaStars(context: GraphicsContext, size: CGSize, elapsed: Double) {
        // 1600 stars — densely packed in galactic plane, sparse in halo
        let starCount = 1600

        for i in 0..<starCount {
            var rx = seededRandom(50, i * 4)
            var ry = seededRandom(50, i * 4 + 1)

            // 60% of stars concentrated in galactic plane band
            if seededRandom(50, i * 4 + 2) < 0.6 {
                ry = 0.42 + seededRandom(50, i * 4 + 3) * 0.16
                // Slight concentration toward center horizontally
                let centerBias = seededRandom(50, i * 7)
                if centerBias < 0.3 {
                    rx = 0.35 + seededRandom(50, i * 7 + 1) * 0.3
                }
            }

            let x = rx * Double(size.width)
            let y = ry * Double(size.height)

            // Distance from galactic plane (y=0.5)
            let planeDist = abs(ry - 0.5)
            let planeDensity = exp(-planeDist * planeDist * 30) * 0.5 + 0.5

            let starSize = 0.2 + seededRandom(50, i * 5) * (planeDist < 0.1 ? 1.8 : 1.2)
            let twinkle = sin(elapsed * (0.8 + seededRandom(50, i * 11) * 2) +
                               Double(i) * 0.15) * 0.25 + 0.75
            let alpha = twinkle * planeDensity * 0.35 * intensity

            // Color distribution: warm yellows near core, blue-white in arms, red in HII regions
            let colorSeed = seededRandom(50, i * 6)
            let distFromCenter = abs(rx - 0.5)
            let starColor: Color

            if distFromCenter < 0.1 && planeDist < 0.06 {
                // Core region — warm yellow/gold
                starColor = colorSeed < 0.6
                    ? Color(red: 255/255, green: 220/255, blue: 160/255)
                    : Color(red: 255/255, green: 200/255, blue: 130/255)
            } else if colorSeed < 0.15 {
                // HII pink
                starColor = Color(red: 255/255, green: 150/255, blue: 170/255)
            } else if colorSeed < 0.5 {
                // Blue-white young stars
                starColor = Color(red: 200/255, green: 210/255, blue: 255/255)
            } else {
                // White
                starColor = Color(red: 255/255, green: 250/255, blue: 245/255)
            }

            // Render star
            let glowSize = starSize * 2.2
            context.fill(
                Circle().path(in: CGRect(x: x - glowSize, y: y - glowSize, width: glowSize * 2, height: glowSize * 2)),
                with: .radialGradient(
                    Gradient(colors: [starColor.opacity(alpha * 0.15), .clear]),
                    center: CGPoint(x: x, y: y), startRadius: 0, endRadius: glowSize
                )
            )

            let coreSize = starSize * 0.5
            context.fill(
                Circle().path(in: CGRect(x: x - coreSize, y: y - coreSize, width: coreSize * 2, height: coreSize * 2)),
                with: .radialGradient(
                    Gradient(colors: [.white.opacity(alpha * 0.8), starColor.opacity(alpha * 0.2), .clear]),
                    center: CGPoint(x: x, y: y), startRadius: 0, endRadius: coreSize
                )
            )
        }
    }

    private var scatteredLight: some View {
        LinearGradient(
            stops: [
                .init(color: .clear, location: 0),
                .init(color: Color(red: 255/255, green: 200/255, blue: 140/255).opacity(0.015), location: 0.45),
                .init(color: Color(red: 200/255, green: 180/255, blue: 220/255).opacity(0.02), location: 0.50),
                .init(color: Color(red: 255/255, green: 200/255, blue: 140/255).opacity(0.015), location: 0.55),
                .init(color: .clear, location: 1.0),
            ],
            startPoint: .top,
            endPoint: .bottom
        )
    }

    private var edgeVignette: some View {
        RadialGradient(
            colors: [
                .clear,
                Color(red: 3/255, green: 2/255, blue: 6/255).opacity(0.8)
            ],
            center: .center,
            startRadius: UIScreen.main.bounds.width * 0.25,
            endRadius: UIScreen.main.bounds.width * 0.85
        )
    }
}
