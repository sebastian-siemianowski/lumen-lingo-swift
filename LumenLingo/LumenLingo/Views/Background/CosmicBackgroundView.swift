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
    private let seed = 42

    var body: some View {
        TimelineView(.animation(minimumInterval: 1.0 / 30.0)) { timeline in
            Canvas { context, size in
                let elapsed = timeline.date.timeIntervalSinceReferenceDate * speed

                for i in 0..<starCount {
                    let x = seededRandom(seed, i * 3) * Double(size.width)
                    let y = seededRandom(seed, i * 3 + 1) * Double(size.height)
                    let baseSize = 0.5 + pow(seededRandom(seed, i * 3 + 2), 1.5) * 2.5

                    let twinkleSpeed = 0.3 + seededRandom(seed, i * 7) * 1.2
                    let twinkleAmp = seededRandom(seed, i * 11) < 0.05 ? 0.05 : (0.15 + seededRandom(seed, i * 13) * 0.2)
                    let phase = seededRandom(seed, i * 17) * .pi * 2

                    // Twinkle: main + harmonic
                    let twinkle = sin(elapsed * twinkleSpeed * 6 + phase) * 0.5 + 0.5
                    let harmonic = sin(elapsed * twinkleSpeed * 6 * 1.7 + phase * 2.3) * 0.15
                    let brightness = (twinkle + harmonic) * twinkleAmp + (1 - twinkleAmp)

                    // Size pulse
                    let sizePulse = 1 + sin(elapsed * twinkleSpeed * 6 * 0.6 + phase * 1.7) * 0.08

                    // Star color based on palette
                    let colorIndex = Int(seededRandom(seed, i * 23) * 5)
                    let color = starColor(index: colorIndex)

                    let finalSize = baseSize * sizePulse
                    let alpha = brightness * intensity * 0.8

                    // 3-pass rendering: diffusion, glow, core
                    let rect = CGRect(
                        x: x - finalSize * 2.5,
                        y: y - finalSize * 2.5,
                        width: finalSize * 5,
                        height: finalSize * 5
                    )

                    // Diffusion
                    context.fill(
                        Circle().path(in: rect),
                        with: .radialGradient(
                            Gradient(colors: [
                                color.opacity(alpha * 0.06),
                                .clear
                            ]),
                            center: CGPoint(x: x, y: y),
                            startRadius: 0,
                            endRadius: finalSize * 5
                        )
                    )

                    // Glow
                    let glowRect = CGRect(
                        x: x - finalSize * 1.4,
                        y: y - finalSize * 1.4,
                        width: finalSize * 2.8,
                        height: finalSize * 2.8
                    )
                    context.fill(
                        Circle().path(in: glowRect),
                        with: .radialGradient(
                            Gradient(colors: [
                                color.opacity(alpha * 0.25),
                                color.opacity(alpha * 0.05),
                                .clear
                            ]),
                            center: CGPoint(x: x, y: y),
                            startRadius: 0,
                            endRadius: finalSize * 2.8
                        )
                    )

                    // Core (white center)
                    let coreRect = CGRect(
                        x: x - finalSize * 0.55,
                        y: y - finalSize * 0.55,
                        width: finalSize * 1.1,
                        height: finalSize * 1.1
                    )
                    context.fill(
                        Circle().path(in: coreRect),
                        with: .radialGradient(
                            Gradient(colors: [
                                .white.opacity(alpha * 0.9),
                                color.opacity(alpha * 0.3),
                                .clear
                            ]),
                            center: CGPoint(x: x, y: y),
                            startRadius: 0,
                            endRadius: finalSize * 1.1
                        )
                    )
                }
            }
            .blendMode(.plusLighter)
        }
    }

    private func starColor(index: Int) -> Color {
        let palette: [Color] = [
            Color(red: 180/255, green: 220/255, blue: 255/255), // O-type blue
            Color(red: 200/255, green: 230/255, blue: 255/255), // B-type blue-white
            Color(red: 240/255, green: 248/255, blue: 255/255), // A-type white
            Color(red: 255/255, green: 250/255, blue: 240/255), // F-type yellow-white
            Color(red: 255/255, green: 220/255, blue: 180/255), // K-type orange
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
