import SwiftUI

// MARK: - Starburst Ring Galaxy

/// Full-quality port: Exotic Hoag's Object-style ring galaxy with an inner
/// elliptical core, dark gap, active starburst ring, and symmetrical tidal streamers.
struct StarburstRingView: View {
    let intensity: Double
    let speed: Double

    var body: some View {
        ZStack {
            // Void base
            Color(red: 2/255, green: 1/255, blue: 5/255)

            // Ring galaxy canvas
            ringGalaxyCanvas

            // Central elliptical core
            centralCore

            // Dark gap region
            darkGap

            // Active ring overlay with HII knots
            activeRingOverlay

            // Tidal streamers
            tidalStreamers

            // Vignette
            ringVignette
        }
    }

    private var ringGalaxyCanvas: some View {
        TimelineView(.animation(minimumInterval: 1.0 / 20.0)) { timeline in
            Canvas { context, size in
                let elapsed = timeline.date.timeIntervalSinceReferenceDate * 0.1 * speed
                drawRingStars(context: context, size: size, elapsed: elapsed)
            }
            .blendMode(.screen)
        }
    }

    private func drawRingStars(context: GraphicsContext, size: CGSize, elapsed: Double) {
        let cx = Double(size.width) / 2
        let cy = Double(size.height) / 2
        let ringRadius = min(size.width, size.height) * 0.32
        let ringWidth: Double = 35
        let coreRadius = min(size.width, size.height) * 0.10

        // Ring stars (800): distributed in the ring band
        for i in 0..<800 {
            let angle = seededRandom(150, i * 5) * .pi * 2
            let rNoise = (seededRandom(150, i * 5 + 1) - 0.5) * 2 * ringWidth
            let r = ringRadius + rNoise

            // Slow rotation
            let rotAngle = angle + elapsed * 0.03
            let x = cx + cos(rotAngle) * r
            let y = cy + sin(rotAngle) * r * 0.85 // slight elliptical tilt

            guard x > -5, x < Double(size.width) + 5,
                  y > -5, y < Double(size.height) + 5 else { continue }

            let starSize = 0.3 + seededRandom(150, i * 5 + 2) * 2.0
            let twinkle = sin(elapsed * (1.0 + seededRandom(150, i * 9) * 3) * 6 +
                               Double(i) * 0.2) * 0.3 + 0.7

            // Ring stars are young and blue/white with some pink
            let colorSeed = seededRandom(150, i * 5 + 3)
            let starColor: Color
            if colorSeed < 0.4 {
                starColor = Color(red: 150/255, green: 180/255, blue: 255/255) // blue
            } else if colorSeed < 0.65 {
                starColor = Color(red: 200/255, green: 220/255, blue: 255/255) // blue-white
            } else if colorSeed < 0.8 {
                starColor = Color(red: 255/255, green: 130/255, blue: 160/255) // pink HII
            } else {
                starColor = .white
            }

            let alpha = twinkle * 0.35 * intensity

            // Glow
            let glowSize = starSize * 2.5
            context.fill(
                Circle().path(in: CGRect(x: x - glowSize, y: y - glowSize, width: glowSize * 2, height: glowSize * 2)),
                with: .radialGradient(
                    Gradient(colors: [starColor.opacity(alpha * 0.15), .clear]),
                    center: CGPoint(x: x, y: y), startRadius: 0, endRadius: glowSize
                )
            )

            // Core
            let coreSize = starSize * 0.6
            context.fill(
                Circle().path(in: CGRect(x: x - coreSize, y: y - coreSize, width: coreSize * 2, height: coreSize * 2)),
                with: .radialGradient(
                    Gradient(colors: [.white.opacity(alpha * 0.85), starColor.opacity(alpha * 0.2), .clear]),
                    center: CGPoint(x: x, y: y), startRadius: 0, endRadius: coreSize
                )
            )
        }

        // Core stars (200): old red/yellow concentrated in center
        for i in 0..<200 {
            let angle = seededRandom(160, i * 4) * .pi * 2
            let r = seededRandom(160, i * 4 + 1) * coreRadius

            let x = cx + cos(angle) * r
            let y = cy + sin(angle) * r * 0.85

            let starSize = 0.3 + seededRandom(160, i * 4 + 2) * 1.0
            let twinkle = sin(elapsed * (0.5 + seededRandom(160, i * 7) * 1.5) * 6 +
                               Double(i) * 0.3) * 0.2 + 0.8
            let alpha = twinkle * 0.25 * intensity

            let colorSeed = seededRandom(160, i * 4 + 3)
            let starColor: Color = colorSeed < 0.5
                ? Color(red: 255/255, green: 220/255, blue: 160/255) // warm yellow
                : Color(red: 255/255, green: 190/255, blue: 130/255) // orange

            let coreSize = starSize * 0.5
            context.fill(
                Circle().path(in: CGRect(x: x - coreSize, y: y - coreSize, width: coreSize * 2, height: coreSize * 2)),
                with: .radialGradient(
                    Gradient(colors: [starColor.opacity(alpha * 0.7), .clear]),
                    center: CGPoint(x: x, y: y), startRadius: 0, endRadius: coreSize
                )
            )
        }

        // Background field stars (200)
        for i in 0..<200 {
            let x = seededRandom(170, i * 3) * Double(size.width)
            let y = seededRandom(170, i * 3 + 1) * Double(size.height)
            let starSize = 0.2 + seededRandom(170, i * 3 + 2) * 0.8
            let twinkle = sin(elapsed * (0.3 + seededRandom(170, i * 5) * 1.2) * 6 +
                               Double(i) * 0.5) * 0.3 + 0.7
            let alpha = twinkle * 0.15 * intensity

            let coreSize = starSize * 0.4
            context.fill(
                Circle().path(in: CGRect(x: x - coreSize, y: y - coreSize, width: coreSize * 2, height: coreSize * 2)),
                with: .radialGradient(
                    Gradient(colors: [.white.opacity(alpha * 0.6), .clear]),
                    center: CGPoint(x: x, y: y), startRadius: 0, endRadius: coreSize
                )
            )
        }
    }

    private var centralCore: some View {
        RadialGradient(
            colors: [
                Color(red: 255/255, green: 220/255, blue: 170/255).opacity(0.10),
                Color(red: 255/255, green: 190/255, blue: 130/255).opacity(0.05),
                Color(red: 200/255, green: 150/255, blue: 100/255).opacity(0.02),
                .clear
            ],
            center: .center,
            startRadius: 0,
            endRadius: min(UIScreen.main.bounds.width, UIScreen.main.bounds.height) * 0.12
        )
        .blur(radius: 10)
    }

    private var darkGap: some View {
        // Annular dark gap between core and ring
        ZStack {
            Circle()
                .strokeBorder(
                    Color(red: 2/255, green: 1/255, blue: 5/255).opacity(0.5),
                    lineWidth: 30
                )
                .frame(
                    width: min(UIScreen.main.bounds.width, UIScreen.main.bounds.height) * 0.45,
                    height: min(UIScreen.main.bounds.width, UIScreen.main.bounds.height) * 0.38
                )
                .blur(radius: 15)
                .blendMode(.multiply)
        }
    }

    private var activeRingOverlay: some View {
        TimelineView(.animation(minimumInterval: 1.0 / 15.0)) { timeline in
            Canvas { context, size in
                let elapsed = timeline.date.timeIntervalSinceReferenceDate * 0.15 * speed
                let cx = Double(size.width) / 2
                let cy = Double(size.height) / 2
                let ringR = min(size.width, size.height) * 0.32

                // 12 HII emission knots along the ring
                for k in 0..<12 {
                    let angle = Double(k) * (.pi * 2 / 12) + elapsed * 0.03
                    let x = cx + cos(angle) * ringR
                    let y = cy + sin(angle) * ringR * 0.85

                    let pulse = sin(elapsed * 0.5 + Double(k) * 0.8) * 0.3 + 0.7
                    let knotSize = 15 + seededRandom(180, k * 3) * 25
                    let alpha = 0.04 * pulse * intensity

                    let knotColor = k % 3 == 0
                        ? Color(red: 255/255, green: 100/255, blue: 140/255) // pink
                        : k % 3 == 1
                            ? Color(red: 140/255, green: 180/255, blue: 255/255) // blue
                            : Color(red: 200/255, green: 150/255, blue: 255/255) // purple

                    context.fill(
                        Circle().path(in: CGRect(x: x - knotSize, y: y - knotSize, width: knotSize * 2, height: knotSize * 2)),
                        with: .radialGradient(
                            Gradient(colors: [knotColor.opacity(alpha), .clear]),
                            center: CGPoint(x: x, y: y), startRadius: 0, endRadius: knotSize
                        )
                    )
                }
            }
            .blendMode(.screen)
        }
    }

    private var tidalStreamers: some View {
        TimelineView(.animation(minimumInterval: 1.0 / 15.0)) { timeline in
            Canvas { context, size in
                let elapsed = timeline.date.timeIntervalSinceReferenceDate * 0.1 * speed
                let cx = Double(size.width) / 2
                let cy = Double(size.height) / 2

                // 2 tidal stream tails extending outward
                for s in 0..<2 {
                    let baseAngle = Double(s) * .pi + elapsed * 0.02
                    let ringR = min(size.width, size.height) * 0.32

                    var path = Path()
                    let startX = cx + cos(baseAngle) * ringR
                    let startY = cy + sin(baseAngle) * ringR * 0.85
                    path.move(to: CGPoint(x: startX, y: startY))

                    let tailLength = min(size.width, size.height) * 0.25
                    let tailAngle = baseAngle + (s == 0 ? 0.4 : -0.4)
                    let endX = startX + cos(tailAngle) * tailLength
                    let endY = startY + sin(tailAngle) * tailLength * 0.85

                    let controlX = startX + cos(tailAngle + 0.2) * tailLength * 0.6
                    let controlY = startY + sin(tailAngle + 0.2) * tailLength * 0.6

                    path.addQuadCurve(
                        to: CGPoint(x: endX, y: endY),
                        control: CGPoint(x: controlX, y: controlY)
                    )

                    let alpha = 0.03 * intensity
                    let streamerColor = Color(red: 180/255, green: 180/255, blue: 220/255)

                    context.stroke(
                        path,
                        with: .linearGradient(
                            Gradient(colors: [streamerColor.opacity(alpha), .clear]),
                            startPoint: CGPoint(x: startX, y: startY),
                            endPoint: CGPoint(x: endX, y: endY)
                        ),
                        lineWidth: 8
                    )

                    // Scatter 20 faint stars along each tail
                    for t in 0..<20 {
                        let frac = Double(t) / 20
                        let tx = startX + (endX - startX) * frac + (seededRandom(190 + s, t * 3) - 0.5) * 15
                        let ty = startY + (endY - startY) * frac + (seededRandom(190 + s, t * 3 + 1) - 0.5) * 15
                        let tSize = 0.3 + seededRandom(190 + s, t * 3 + 2) * 0.8
                        let tAlpha = alpha * 0.5 * (1 - frac)

                        context.fill(
                            Circle().path(in: CGRect(x: tx - tSize, y: ty - tSize, width: tSize * 2, height: tSize * 2)),
                            with: .color(.white.opacity(tAlpha))
                        )
                    }
                }
            }
            .blendMode(.screen)
        }
    }

    private var ringVignette: some View {
        RadialGradient(
            colors: [
                .clear,
                Color(red: 2/255, green: 1/255, blue: 5/255).opacity(0.75)
            ],
            center: .center,
            startRadius: UIScreen.main.bounds.width * 0.3,
            endRadius: UIScreen.main.bounds.width * 0.8
        )
    }
}
