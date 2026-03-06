import SwiftUI

// MARK: - Cosmic Background Host

/// Full-quality port of React's CosmicBackground.jsx.
/// Routes to 6 custom nebula/galaxy renderers with shared microstar system.
struct CosmicBackgroundView: View {
    let preset: NebulaPreset
    let intensity: Double
    let speed: Double

    var body: some View {
        ZStack {
            // Gradient layers from presets
            cosmicGradientLayers

            // Microstar field (shared across all presets)
            MicrostarFieldView(preset: preset, intensity: intensity, speed: speed)

            // Preset-specific renderer
            presetRenderer

            // Cosmic effects overlays
            CosmicEffectsOverlay(preset: preset)
        }
        .allowsHitTesting(false)
    }

    @ViewBuilder
    private var presetRenderer: some View {
        switch preset {
        case .lagoonNebula:
            LagoonNebulaView(intensity: intensity, speed: speed)
        case .celestialLagoon:
            CelestialLagoonView(intensity: intensity, speed: speed)
        case .solarAurora:
            SolarAuroraView(intensity: intensity, speed: speed)
        case .spiralHaloGalaxy:
            SpiralHaloGalaxyView(intensity: intensity, speed: speed)
        case .edgeOfAndromeda:
            EdgeOfAndromedaView(intensity: intensity, speed: speed)
        case .starburstRing:
            StarburstRingView(intensity: intensity, speed: speed)
        }
    }

    private var cosmicGradientLayers: some View {
        ZStack {
            // Foundation: deep void
            Color(red: 2/255, green: 1/255, blue: 5/255)

            // Nebula gradients
            RadialGradient(
                colors: [Color(red: 88/255, green: 28/255, blue: 135/255).opacity(0.25), .clear],
                center: UnitPoint(x: 0.15, y: 0.20),
                startRadius: 0,
                endRadius: UIScreen.main.bounds.width * 0.6
            )

            RadialGradient(
                colors: [Color(red: 76/255, green: 29/255, blue: 149/255).opacity(0.20), .clear],
                center: UnitPoint(x: 0.80, y: 0.70),
                startRadius: 0,
                endRadius: UIScreen.main.bounds.width * 0.5
            )

            RadialGradient(
                colors: [Color(red: 30/255, green: 10/255, blue: 60/255).opacity(0.30), .clear],
                center: .center,
                startRadius: 0,
                endRadius: UIScreen.main.bounds.width * 0.45
            )
        }
    }
}

// MARK: - Microstar Field

struct MicrostarFieldView: View {
    let preset: NebulaPreset
    let intensity: Double
    let speed: Double

    private let starCount = 500
    private let heroStarCount = 5
    private let seed = 42

    var body: some View {
        TimelineView(.animation(minimumInterval: 1.0 / 30.0)) { timeline in
            Canvas { context, size in
                let elapsed = timeline.date.timeIntervalSinceReferenceDate * speed
                drawStars(context: context, size: size, elapsed: elapsed)
                drawHeroStars(context: context, size: size, elapsed: elapsed)
            }
            .blendMode(.plusLighter)
        }
    }

    // MARK: - Star Drawing

    private func drawStars(context: GraphicsContext, size: CGSize, elapsed: Double) {
        let w = Double(size.width)
        let h = Double(size.height)

        for i in 0..<starCount {
            let rawX = seededRandom(seed, i * 3) * w
            let rawY = seededRandom(seed, i * 3 + 1) * h

            // Perlin-like displacement for organic clustering
            let ns: Double = 0.003
            let cs: Double = 40
            let nx = sin(rawX * ns * 7.3 + rawY * ns * 3.1 + 1.7) * cs
                + sin(rawX * ns * 13.7 + rawY * ns * 5.9 + 4.2) * cs * 0.5
            let ny = sin(rawX * ns * 5.7 + rawY * ns * 9.3 + 2.9) * cs
                + cos(rawX * ns * 11.3 + rawY * ns * 7.7 + 3.1) * cs * 0.5

            let x = (rawX + nx).truncatingRemainder(dividingBy: w)
            let y = (rawY + ny).truncatingRemainder(dividingBy: h)

            let baseSize: Double = 0.5 + pow(seededRandom(seed, i * 3 + 2), 1.5) * 2.5
            let twinkleSpeed: Double = 0.3 + seededRandom(seed, i * 7) * 1.2
            let twinkleAmp: Double = seededRandom(seed, i * 11) < 0.05 ? 0.05 : (0.15 + seededRandom(seed, i * 13) * 0.2)
            let phase: Double = seededRandom(seed, i * 17) * .pi * 2

            let twinkle: Double = sin(elapsed * twinkleSpeed * 6 + phase) * 0.5 + 0.5
            let harmonic: Double = sin(elapsed * twinkleSpeed * 6 * 1.7 + phase * 2.3) * 0.15
            let brightness: Double = (twinkle + harmonic) * twinkleAmp + (1 - twinkleAmp)
            let sizePulse: Double = 1 + sin(elapsed * twinkleSpeed * 6 * 0.6 + phase * 1.7) * 0.08

            let colorIndex = Int(seededRandom(seed, i * 23) * 7)
            let color = starColor(index: colorIndex)
            let finalSize: Double = baseSize * sizePulse
            let alpha: Double = brightness * intensity * 0.8

            drawSingleStar(context: context, x: x, y: y, size: finalSize, alpha: alpha, color: color)
        }
    }

    private func drawSingleStar(context: GraphicsContext, x: Double, y: Double, size s: Double, alpha: Double, color: Color) {
        // Diffusion pass
        let diffR = s * 5
        context.fill(
            Circle().path(in: CGRect(x: x - s * 2.5, y: y - s * 2.5, width: diffR, height: diffR)),
            with: .radialGradient(
                Gradient(colors: [color.opacity(alpha * 0.06), .clear]),
                center: CGPoint(x: x, y: y), startRadius: 0, endRadius: diffR
            )
        )

        // Glow pass
        let glowR = s * 2.8
        context.fill(
            Circle().path(in: CGRect(x: x - s * 1.4, y: y - s * 1.4, width: glowR, height: glowR)),
            with: .radialGradient(
                Gradient(colors: [color.opacity(alpha * 0.25), color.opacity(alpha * 0.05), .clear]),
                center: CGPoint(x: x, y: y), startRadius: 0, endRadius: glowR
            )
        )

        // Core pass
        let coreR = s * 1.1
        context.fill(
            Circle().path(in: CGRect(x: x - s * 0.55, y: y - s * 0.55, width: coreR, height: coreR)),
            with: .radialGradient(
                Gradient(colors: [.white.opacity(alpha * 0.9), color.opacity(alpha * 0.3), .clear]),
                center: CGPoint(x: x, y: y), startRadius: 0, endRadius: coreR
            )
        )
    }

    // MARK: - Hero Stars

    private func drawHeroStars(context: GraphicsContext, size: CGSize, elapsed: Double) {
        let w = Double(size.width)
        let h = Double(size.height)

        for hi in 0..<heroStarCount {
            let hx: Double = seededRandom(seed + 99, hi * 5) * w
            let hy: Double = seededRandom(seed + 99, hi * 5 + 1) * h
            let heroSize: Double = 2.5 + seededRandom(seed + 99, hi * 5 + 2) * 2.0
            let heroPhase: Double = seededRandom(seed + 99, hi * 5 + 3) * .pi * 2
            let heroBright: Double = sin(elapsed * 0.5 + heroPhase) * 0.15 + 0.85
            let heroAlpha: Double = heroBright * intensity * 0.7
            let heroColorIdx = Int(seededRandom(seed + 99, hi * 5 + 4) * 3)
            let heroColor = starColor(index: heroColorIdx)

            // Airy disk
            let airySize: Double = heroSize * 4
            context.fill(
                Circle().path(in: CGRect(x: hx - airySize, y: hy - airySize, width: airySize * 2, height: airySize * 2)),
                with: .radialGradient(
                    Gradient(colors: [.white.opacity(heroAlpha * 0.6), heroColor.opacity(heroAlpha * 0.2), .clear]),
                    center: CGPoint(x: hx, y: hy), startRadius: 0, endRadius: airySize
                )
            )

            // 6-point diffraction spikes
            let spikeLen: Double = heroSize * 12
            for s in 0..<6 {
                let angle: Double = Double(s) * (.pi / 3)
                let endX: Double = hx + cos(angle) * spikeLen
                let endY: Double = hy + sin(angle) * spikeLen

                var spikePath = Path()
                spikePath.move(to: CGPoint(x: hx, y: hy))
                spikePath.addLine(to: CGPoint(x: endX, y: endY))

                context.stroke(
                    spikePath,
                    with: .linearGradient(
                        Gradient(colors: [.white.opacity(heroAlpha * 0.5), heroColor.opacity(heroAlpha * 0.15), .clear]),
                        startPoint: CGPoint(x: hx, y: hy),
                        endPoint: CGPoint(x: endX, y: endY)
                    ),
                    lineWidth: 1.2
                )
            }

            // Bright core
            let coreSize: Double = heroSize * 0.8
            context.fill(
                Circle().path(in: CGRect(x: hx - coreSize, y: hy - coreSize, width: coreSize * 2, height: coreSize * 2)),
                with: .radialGradient(
                    Gradient(colors: [.white.opacity(heroAlpha), heroColor.opacity(heroAlpha * 0.4), .clear]),
                    center: CGPoint(x: hx, y: hy), startRadius: 0, endRadius: coreSize
                )
            )
        }
    }

    private func starColor(index: Int) -> Color {
        let palette: [Color] = [
            Color(red: 155/255, green: 176/255, blue: 255/255), // O-type blue
            Color(red: 180/255, green: 220/255, blue: 255/255), // B-type blue-white
            Color(red: 200/255, green: 230/255, blue: 255/255), // A-type white-blue
            Color(red: 240/255, green: 248/255, blue: 255/255), // F-type white
            Color(red: 255/255, green: 244/255, blue: 228/255), // G-type yellow-white (Sun)
            Color(red: 255/255, green: 220/255, blue: 180/255), // K-type orange
            Color(red: 255/255, green: 185/255, blue: 140/255), // M-type red
        ]
        return palette[index % palette.count]
    }
}

// MARK: - Cosmic Effects Overlay

struct CosmicEffectsOverlay: View {
    let preset: NebulaPreset

    var body: some View {
        ZStack {
            // Foundation Void vignette
            RadialGradient(
                colors: [
                    Color(red: 12/255, green: 8/255, blue: 28/255).opacity(0),
                    Color(red: 2/255, green: 1/255, blue: 6/255)
                ],
                center: UnitPoint(x: 0.5, y: 0.48),
                startRadius: UIScreen.main.bounds.width * 0.3,
                endRadius: UIScreen.main.bounds.width * 0.85
            )
            .opacity(0.6)

            // Edge Vignette
            RadialGradient(
                colors: [
                    .clear,
                    Color(red: 8/255, green: 5/255, blue: 18/255).opacity(0.7),
                    Color(red: 2/255, green: 1/255, blue: 5/255).opacity(0.5)
                ],
                center: .center,
                startRadius: UIScreen.main.bounds.width * 0.3,
                endRadius: UIScreen.main.bounds.width * 0.7
            )
            .opacity(0.5)

            // Central Clarity
            RadialGradient(
                colors: [
                    Color(red: 255/255, green: 245/255, blue: 255/255).opacity(0.015),
                    .clear
                ],
                center: .center,
                startRadius: 0,
                endRadius: UIScreen.main.bounds.width * 0.35
            )
            .blendMode(.screen)

            // HDR Bloom
            RadialGradient(
                colors: [
                    Color(red: 180/255, green: 140/255, blue: 255/255).opacity(0.05),
                    .clear
                ],
                center: UnitPoint(x: 0.4, y: 0.45),
                startRadius: 0,
                endRadius: UIScreen.main.bounds.width * 0.4
            )
            .blur(radius: 60)
            .blendMode(.screen)
            .opacity(0.7)
        }
    }
}
