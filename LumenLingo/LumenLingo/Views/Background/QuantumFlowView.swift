import SwiftUI

// MARK: - Quantum Flow (Aurora Curtains)

/// Full-quality port of React's QuantumFlow.jsx.
/// Canvas 2D aurora borealis animation with 12 curtains, vertical gradients,
/// additive blending, and atmospheric vignette.
struct QuantumFlowView: View {
    let scene: QuantumFlowScene
    let intensity: Double
    let speed: Double
    let isDarkMode: Bool

    var body: some View {
        TimelineView(.animation(minimumInterval: 1.0 / 30.0)) { timeline in
            Canvas { context, size in
                let elapsed = timeline.date.timeIntervalSinceReferenceDate * 0.006 * speed
                drawAurora(context: context, size: size, elapsed: elapsed)
            }
            .blur(radius: isDarkMode ? 2 : 3)
            .blendMode(isDarkMode ? .plusLighter : .normal)
        }
        .allowsHitTesting(false)
    }

    // MARK: - Aurora Drawing

    private func drawAurora(context: GraphicsContext, size: CGSize, elapsed: Double) {
        let colors = sceneColors(for: scene)
        let curtainCount = colors.count * 3 // 4 colors × 3 layers = 12

        for i in 0..<curtainCount {
            let colorIndex = i / 3
            let layerIndex = i % 3
            let color = colors[colorIndex]

            // Curtain parameters
            let yBase = 0.3 + Double(i) * (0.44 / Double(curtainCount))
            let height = 380.0 + Double(layerIndex) * 67.0
            let frequency = 0.0008 + Double(layerIndex) * 0.0001
            let phase = Double(i) * 1.618 * .pi

            // Base alpha calculation
            let baseAlpha: Double
            if isDarkMode {
                let base = pow(intensity, 0.85) * 0.75
                baseAlpha = base * (intensity > 1.0 ? 1.35 : 1.0)
            } else {
                baseAlpha = intensity * 0.55
            }

            let curtainAlpha = baseAlpha * (0.3 + Double(2 - layerIndex) * 0.25)

            drawCurtain(
                context: context,
                size: size,
                yBase: yBase,
                height: height,
                frequency: frequency,
                phase: phase,
                elapsed: elapsed,
                color: color,
                alpha: curtainAlpha
            )
        }
    }

    private func drawCurtain(
        context: GraphicsContext,
        size: CGSize,
        yBase: Double,
        height: Double,
        frequency: Double,
        phase: Double,
        elapsed: Double,
        color: Color,
        alpha: Double
    ) {
        guard alpha > 0.01 else { return }

        let step: CGFloat = 14
        var path = Path()

        // Calculate wave points
        let bottomY = size.height * yBase + height
        path.move(to: CGPoint(x: 0, y: bottomY))

        var x: CGFloat = 0
        while x <= size.width {
            // Primary wave + two harmonics
            let primary = sin(Double(x) * frequency * 2 * .pi + elapsed + phase) * height * 0.4
            let harmonic1 = sin(Double(x) * frequency * 0.3 * 2 * .pi + elapsed * 0.7 + phase * 1.3) * height * 0.2
            let harmonic2 = sin(Double(x) * frequency * 1.7 * 2 * .pi + elapsed * 1.3 + phase * 0.7) * height * 0.1

            let waveY = size.height * yBase + primary + harmonic1 + harmonic2
            path.addLine(to: CGPoint(x: x, y: waveY))
            x += step
        }

        // Close path
        path.addLine(to: CGPoint(x: size.width, y: bottomY))
        path.closeSubpath()

        // Create gradient fill with 9 stops matching React
        let gradientStops: [Gradient.Stop] = [
            .init(color: color.opacity(0), location: 0),
            .init(color: color.opacity(alpha * 0.12), location: 0.08),
            .init(color: color.opacity(alpha * 0.28), location: 0.15),
            .init(color: color.opacity(alpha * 0.52), location: 0.25),
            .init(color: color.opacity(alpha * 0.72), location: 0.35),
            .init(color: color.opacity(alpha * 0.56), location: 0.50),
            .init(color: color.opacity(alpha * 0.32), location: 0.65),
            .init(color: color.opacity(alpha * 0.14), location: 0.80),
            .init(color: color.opacity(0), location: 1.0),
        ]

        let gradient = Gradient(stops: gradientStops)
        let waveTop = size.height * yBase - height * 0.4
        let shading = GraphicsContext.Shading.linearGradient(
            gradient,
            startPoint: CGPoint(x: size.width / 2, y: bottomY),
            endPoint: CGPoint(x: size.width / 2, y: waveTop)
        )

        context.fill(path, with: shading)

        // Shadow glow for high intensity
        if intensity > 0.6 {
            var glowContext = context
            glowContext.addFilter(.blur(radius: isDarkMode ? 25 : 22))
            glowContext.opacity = 0.3
            glowContext.fill(path, with: .color(color.opacity(alpha * 0.3)))
        }
    }

    // MARK: - Scene Colors

    private func sceneColors(for scene: QuantumFlowScene) -> [Color] {
        scene.colors
    }
}

// MARK: - Atmospheric Vignette

struct AtmosphericVignetteView: View {
    let isDarkMode: Bool

    var body: some View {
        if isDarkMode {
            VStack {
                Spacer()
                RadialGradient(
                    colors: [
                        Color(red: 6/255, green: 5/255, blue: 20/255).opacity(0.6),
                        .clear
                    ],
                    center: .bottom,
                    startRadius: 0,
                    endRadius: UIScreen.main.bounds.height * 0.35
                )
                .frame(height: UIScreen.main.bounds.height * 0.4)
            }
        }
    }
}
