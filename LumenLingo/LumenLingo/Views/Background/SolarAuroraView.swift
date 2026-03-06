import SwiftUI

// MARK: - Solar Aurora Nebula

/// Full-quality port: Vivid aurora borealis with solar wind dynamics,
/// magnetic field ribbons, solar prominences, and coronal rain particles.
struct SolarAuroraView: View {
    let intensity: Double
    let speed: Double

    var body: some View {
        ZStack {
            // Solar corona base
            Color(red: 5/255, green: 2/255, blue: 15/255)

            // Solar horizon glow
            solarHorizon

            // Aurora ribbon canvas
            auroraRibbons

            // Solar prominences
            solarProminences

            // Coronal rain particles
            coronalRain

            // Magnetic field lines
            magneticFieldLines

            // Solar wind particles
            solarWindCanvas

            // Atmospheric radiance
            atmosphericRadiance
        }
    }

    private var solarHorizon: some View {
        ZStack {
            // Warm solar glow from bottom
            LinearGradient(
                stops: [
                    .init(color: .clear, location: 0),
                    .init(color: Color(red: 255/255, green: 120/255, blue: 30/255).opacity(0.06), location: 0.6),
                    .init(color: Color(red: 255/255, green: 80/255, blue: 20/255).opacity(0.12), location: 0.85),
                    .init(color: Color(red: 200/255, green: 50/255, blue: 10/255).opacity(0.08), location: 1.0),
                ],
                startPoint: .top,
                endPoint: .bottom
            )

            // Central solar disk glow
            RadialGradient(
                colors: [
                    Color(red: 255/255, green: 200/255, blue: 100/255).opacity(0.08),
                    Color(red: 255/255, green: 150/255, blue: 50/255).opacity(0.04),
                    .clear
                ],
                center: UnitPoint(x: 0.5, y: 0.92),
                startRadius: 0,
                endRadius: UIScreen.main.bounds.width * 0.4
            )
        }
    }

    private var auroraRibbons: some View {
        TimelineView(.animation(minimumInterval: 1.0 / 20.0)) { timeline in
            Canvas { context, size in
                let elapsed = timeline.date.timeIntervalSinceReferenceDate * 0.35 * speed
                drawAuroraRibbons(context: context, size: size, elapsed: elapsed)
            }
            .blendMode(.screen)
        }
    }

    private func drawAuroraRibbons(context: GraphicsContext, size: CGSize, elapsed: Double) {
        let ribbonCount = 8

        for r in 0..<ribbonCount {
            let baseY = Double(size.height) * (0.15 + seededRandom(31, r * 7) * 0.45)
            let amplitude = 20 + seededRandom(31, r * 7 + 1) * 40
            let frequency = 0.003 + seededRandom(31, r * 7 + 2) * 0.005
            let ribbonWidth = 30 + seededRandom(31, r * 7 + 3) * 80

            let colorPhase = seededRandom(31, r * 7 + 4)
            let ribbonColor: Color
            if colorPhase < 0.3 {
                ribbonColor = Color(red: 0/255, green: 255/255, blue: 100/255) // green aurora
            } else if colorPhase < 0.55 {
                ribbonColor = Color(red: 100/255, green: 200/255, blue: 255/255) // cyan
            } else if colorPhase < 0.75 {
                ribbonColor = Color(red: 180/255, green: 80/255, blue: 255/255) // purple
            } else {
                ribbonColor = Color(red: 255/255, green: 50/255, blue: 100/255) // magenta/red
            }

            let phaseOffset = elapsed * (0.2 + seededRandom(31, r * 7 + 5) * 0.3)
            let breathe = sin(elapsed * 0.15 + Double(r) * 0.8) * 0.3 + 0.7
            let alpha = 0.04 * breathe * intensity

            // Draw ribbon as a series of vertical gradient strips
            let segmentCount = 40
            let segmentWidth = Double(size.width) / Double(segmentCount)

            for s in 0..<segmentCount {
                let x = Double(s) * segmentWidth
                let wave = sin(x * frequency * 1000 + phaseOffset) * amplitude
                let wave2 = cos(x * frequency * 700 + phaseOffset * 1.3) * amplitude * 0.4
                let y = baseY + wave + wave2

                // Vertical curtain from ribbon center
                let topY = y - ribbonWidth * 0.3
                let bottomY = y + ribbonWidth * 0.7

                let segRect = CGRect(x: x, y: topY, width: segmentWidth + 1, height: bottomY - topY)

                context.fill(
                    Rectangle().path(in: segRect),
                    with: .linearGradient(
                        Gradient(stops: [
                            .init(color: ribbonColor.opacity(alpha * 0.1), location: 0),
                            .init(color: ribbonColor.opacity(alpha * 0.5), location: 0.2),
                            .init(color: ribbonColor.opacity(alpha * 1.0), location: 0.4),
                            .init(color: ribbonColor.opacity(alpha * 0.8), location: 0.6),
                            .init(color: ribbonColor.opacity(alpha * 0.3), location: 0.8),
                            .init(color: .clear, location: 1.0),
                        ]),
                        startPoint: CGPoint(x: x, y: topY),
                        endPoint: CGPoint(x: x, y: bottomY)
                    )
                )
            }
        }
    }

    private var solarProminences: some View {
        TimelineView(.animation(minimumInterval: 1.0 / 15.0)) { timeline in
            Canvas { context, size in
                let elapsed = timeline.date.timeIntervalSinceReferenceDate * 0.25 * speed

                // 3 arcing prominences from bottom
                for p in 0..<3 {
                    let startX = Double(size.width) * (0.2 + Double(p) * 0.3)
                    let arcHeight = 100 + seededRandom(19, p * 5) * 150
                    let arcWidth = 80 + seededRandom(19, p * 5 + 1) * 120
                    let breathe = sin(elapsed * 0.2 + Double(p) * 1.1) * 0.4 + 0.6
                    let alpha = 0.06 * breathe * intensity

                    let promColor = p == 0
                        ? Color(red: 255/255, green: 100/255, blue: 30/255)
                        : p == 1
                            ? Color(red: 255/255, green: 180/255, blue: 50/255)
                            : Color(red: 255/255, green: 60/255, blue: 40/255)

                    var arcPath = Path()
                    arcPath.move(to: CGPoint(x: startX - arcWidth/2, y: Double(size.height)))
                    arcPath.addQuadCurve(
                        to: CGPoint(x: startX + arcWidth/2, y: Double(size.height)),
                        control: CGPoint(x: startX, y: Double(size.height) - arcHeight)
                    )

                    context.stroke(
                        arcPath,
                        with: .color(promColor.opacity(alpha)),
                        lineWidth: 6
                    )

                    // Glow around arc
                    context.stroke(
                        arcPath,
                        with: .color(promColor.opacity(alpha * 0.3)),
                        lineWidth: 20
                    )
                }
            }
            .blendMode(.screen)
        }
    }

    private var coronalRain: some View {
        TimelineView(.animation(minimumInterval: 1.0 / 20.0)) { timeline in
            Canvas { context, size in
                let elapsed = timeline.date.timeIntervalSinceReferenceDate * speed

                // ~40 falling particles
                for i in 0..<40 {
                    let x = seededRandom(67, i * 3) * Double(size.width)
                    let fallSpeed = 20 + seededRandom(67, i * 3 + 1) * 40
                    let startOffset = seededRandom(67, i * 3 + 2) * 100

                    let y = (elapsed * fallSpeed + startOffset)
                        .truncatingRemainder(dividingBy: Double(size.height) + 40) - 20

                    let trailLength = 15 + seededRandom(67, i * 5) * 25
                    let alpha = 0.15 * intensity

                    let rainColor = Color(red: 255/255, green: 200/255, blue: 120/255)

                    var trailPath = Path()
                    trailPath.move(to: CGPoint(x: x, y: y))
                    trailPath.addLine(to: CGPoint(x: x, y: y - trailLength))

                    context.stroke(
                        trailPath,
                        with: .linearGradient(
                            Gradient(colors: [rainColor.opacity(alpha), .clear]),
                            startPoint: CGPoint(x: x, y: y),
                            endPoint: CGPoint(x: x, y: y - trailLength)
                        ),
                        lineWidth: 1.2
                    )

                    // Bright head
                    context.fill(
                        Circle().path(in: CGRect(x: x - 1.5, y: y - 1.5, width: 3, height: 3)),
                        with: .color(.white.opacity(alpha * 0.8))
                    )
                }
            }
            .blendMode(.screen)
        }
    }

    private var magneticFieldLines: some View {
        TimelineView(.animation(minimumInterval: 1.0 / 15.0)) { timeline in
            Canvas { context, size in
                let elapsed = timeline.date.timeIntervalSinceReferenceDate * 0.2 * speed

                // 6 curved magnetic field lines
                for i in 0..<6 {
                    let startX = seededRandom(44, i * 4) * Double(size.width)
                    let startY = Double(size.height) * 0.85
                    let peakX = startX + (seededRandom(44, i * 4 + 1) - 0.5) * 200
                    let peakY = seededRandom(44, i * 4 + 2) * Double(size.height) * 0.5
                    let endX = peakX + (seededRandom(44, i * 4 + 3) - 0.5) * 150
                    let endY = Double(size.height) * 0.9

                    let drift = sin(elapsed * 0.3 + Double(i)) * 15

                    var fieldPath = Path()
                    fieldPath.move(to: CGPoint(x: startX + drift, y: startY))
                    fieldPath.addQuadCurve(
                        to: CGPoint(x: endX + drift * 0.5, y: endY),
                        control: CGPoint(x: peakX + drift, y: peakY)
                    )

                    let alpha = 0.03 * intensity
                    let fieldColor = Color(red: 100/255, green: 200/255, blue: 255/255)

                    context.stroke(
                        fieldPath,
                        with: .color(fieldColor.opacity(alpha)),
                        lineWidth: 1.5
                    )
                }
            }
            .blendMode(.screen)
        }
    }

    private var solarWindCanvas: some View {
        TimelineView(.animation(minimumInterval: 1.0 / 20.0)) { timeline in
            Canvas { context, size in
                let elapsed = timeline.date.timeIntervalSinceReferenceDate * speed

                // 30 solar wind particles streaming upward
                for i in 0..<30 {
                    let x = seededRandom(88, i * 4) * Double(size.width)
                    let riseSpeed = 15 + seededRandom(88, i * 4 + 1) * 35
                    let startPhase = seededRandom(88, i * 4 + 2) * 200
                    let windDrift = sin(elapsed * 0.2 + Double(i) * 0.7) * 10

                    let totalHeight = Double(size.height) + 40
                    let y = totalHeight - ((elapsed * riseSpeed + startPhase).truncatingRemainder(dividingBy: totalHeight))

                    let trailLength = 8 + seededRandom(88, i * 4 + 3) * 15
                    let alpha = 0.1 * intensity

                    let windColor = Color(red: 255/255, green: 220/255, blue: 150/255)

                    var trailPath = Path()
                    trailPath.move(to: CGPoint(x: x + windDrift, y: y))
                    trailPath.addLine(to: CGPoint(x: x + windDrift, y: y + trailLength))

                    context.stroke(
                        trailPath,
                        with: .linearGradient(
                            Gradient(colors: [windColor.opacity(alpha), .clear]),
                            startPoint: CGPoint(x: x + windDrift, y: y),
                            endPoint: CGPoint(x: x + windDrift, y: y + trailLength)
                        ),
                        lineWidth: 1.0
                    )
                }
            }
            .blendMode(.screen)
        }
    }

    private var atmosphericRadiance: some View {
        ZStack {
            // Green aurora tint
            RadialGradient(
                colors: [
                    Color(red: 0/255, green: 255/255, blue: 100/255).opacity(0.02),
                    .clear
                ],
                center: UnitPoint(x: 0.5, y: 0.3),
                startRadius: 0,
                endRadius: UIScreen.main.bounds.width * 0.6
            )

            // Top vignette
            LinearGradient(
                stops: [
                    .init(color: Color(red: 5/255, green: 2/255, blue: 15/255).opacity(0.5), location: 0),
                    .init(color: .clear, location: 0.3),
                ],
                startPoint: .top,
                endPoint: .bottom
            )
        }
    }
}
