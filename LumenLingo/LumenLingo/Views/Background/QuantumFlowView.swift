import SwiftUI

// MARK: - Quantum Flow (Aurora Curtains)

/// Full-quality port of React's QuantumFlow.jsx.
/// Canvas 2D aurora borealis animation with 12 curtains, seed-based parameter
/// diversity, turbulence, vertical gradients, additive blending, and atmospheric vignette.
struct QuantumFlowView: View {
    let scene: QuantumFlowScene
    let intensity: Double
    let speed: Double
    let isDarkMode: Bool

    var body: some View {
        TimelineView(.animation(minimumInterval: 1.0 / 30.0)) { timeline in
            Canvas { context, size in
                // React accumulates 0.006/frame at ~60fps = 0.36/sec
                let elapsed = timeline.date.timeIntervalSinceReferenceDate * 0.36 * speed
                drawAurora(context: context, size: size, elapsed: elapsed)
            }
            .blur(radius: isDarkMode ? 2 : 3)
            .contrast(isDarkMode ? (1.18 + intensity * 0.06) : (1.15 + intensity * 0.04))
            .saturation(isDarkMode ? (1.15 + intensity * 0.1) : (1.18 + intensity * 0.08))
            .brightness(isDarkMode ? (0.05 + intensity * 0.05) : -0.02)
            .blendMode(isDarkMode ? .plusLighter : .normal)
        }
        .allowsHitTesting(false)
    }

    // MARK: - Intensity Curve (matches React getIntensityCurve)

    private func intensityCurve(_ rawIntensity: Double) -> Double {
        if isDarkMode {
            if rawIntensity <= 0.7 {
                return rawIntensity * 0.9 * 1.15
            } else if rawIntensity <= 1.0 {
                return (0.63 + (rawIntensity - 0.7) * 1.0) * 1.15
            } else {
                let bloom = rawIntensity - 1.0
                return (0.93 + (bloom * 0.45 * (1 - bloom * 0.12))) * 1.15
            }
        } else {
            if rawIntensity <= 0.7 {
                return rawIntensity * 1.12
            } else if rawIntensity <= 1.0 {
                return 0.784 + (rawIntensity - 0.7) * 0.55
            } else {
                let bloom = rawIntensity - 1.0
                return 0.949 + (bloom * 0.22 * (1 - bloom * 0.35))
            }
        }
    }

    // MARK: - Aurora Drawing

    private func drawAurora(context: GraphicsContext, size: CGSize, elapsed: Double) {
        let colors = sceneColors(for: scene)
        let blendFactor = isDarkMode ? scene.blendFactor.dark : scene.blendFactor.light
        let scaledIntensity = intensityCurve(intensity)

        // 4 colors × 3 layers = 12 curtains, matching React
        for colorIndex in 0..<colors.count {
            for layer in 0..<3 {
                let seed = colorIndex * 3 + layer
                let color = colors[colorIndex]
                let isBase = layer == 0

                // Seed-based parameter diversity (matching React exactly)
                let yBase = 0.3 + Double(colorIndex) * 0.14 + Double(layer) * 0.04
                let curtainHeight = 380.0 + Double((seed * 42) % 200)
                let frequency = 0.0008 + Double(seed) * 0.0003
                let phase = Double(seed) * 1.618.truncatingRemainder(dividingBy: .pi * 2)
                let curtainSpeed = 0.4 + Double((seed * 15) % 60) / 100.0

                // Harmonics (2 per curtain, unique params from seed)
                let h1Freq = 0.008 + Double((seed * 2) % 12) / 1000.0
                let h1Amp  = 38.0 + Double((seed * 5) % 22)
                let h1Speed = 1.2 + Double((seed * 2) % 6) / 10.0
                let h1Phase = Double(seed) * 2.718.truncatingRemainder(dividingBy: .pi * 2)

                let h2Freq = 0.022 + Double((seed * 5) % 18) / 1000.0
                let h2Amp  = 20.0 + Double((seed * 3) % 14)
                let h2Speed = 2.2 + Double((seed * 3) % 8) / 10.0
                let h2Phase = Double(seed) * 1.414.truncatingRemainder(dividingBy: .pi * 2)

                // Turbulence for organic feel
                let turbScale = 0.002 + Double((seed * 5) % 30) / 10000.0
                let turbStrength = 12.0 + Double((seed * 3) % 10)
                let turbSpeed = 0.8 + Double((seed * 2) % 5) / 10.0

                // Opacity factor: base=1.0, layer1=0.6, layer2=0.4
                let opacityFactor = isBase ? 1.0 : (0.8 - Double(layer) * 0.2)

                // Alpha calculation matching React
                let baseAlpha = isDarkMode ? 0.21 : 0.32
                let alpha = min(baseAlpha * scaledIntensity * opacityFactor * blendFactor,
                                isDarkMode ? 0.88 : 0.85)

                guard alpha > 0.008 else { continue }

                drawCurtain(
                    context: context,
                    size: size,
                    yBase: yBase,
                    height: curtainHeight,
                    frequency: frequency,
                    phase: phase,
                    curtainSpeed: curtainSpeed,
                    elapsed: elapsed,
                    color: color,
                    alpha: alpha,
                    scaledIntensity: scaledIntensity,
                    h1: (h1Freq, h1Amp, h1Speed, h1Phase),
                    h2: (h2Freq, h2Amp, h2Speed, h2Phase),
                    turb: (turbScale, turbStrength, turbSpeed)
                )
            }
        }
    }

    private func drawCurtain(
        context: GraphicsContext,
        size: CGSize,
        yBase: Double,
        height: Double,
        frequency: Double,
        phase: Double,
        curtainSpeed: Double,
        elapsed: Double,
        color: Color,
        alpha: Double,
        scaledIntensity: Double,
        h1: (freq: Double, amp: Double, speed: Double, phase: Double),
        h2: (freq: Double, amp: Double, speed: Double, phase: Double),
        turb: (scale: Double, strength: Double, speed: Double)
    ) {
        let step: CGFloat = 14
        var path = Path()

        // Collect wave sample points
        var wavePoints: [CGPoint] = []
        var x: CGFloat = 0
        while x <= size.width {
            let xd = Double(x)

            // Primary wave — smooth and flowing
            var y = size.height * yBase
                + Foundation.sin(xd * frequency + elapsed * curtainSpeed + phase) * 55.0

            // Two harmonics for beautiful interference
            y += Foundation.sin(xd * h1.freq + elapsed * h1.speed * speed + h1.phase)
                * h1.amp * (0.8 + scaledIntensity * 0.2)
            y += Foundation.sin(xd * h2.freq + elapsed * h2.speed * speed + h2.phase)
                * h2.amp * (0.8 + scaledIntensity * 0.2)

            // Turbulence for organic, natural feel
            y += Foundation.sin(xd * turb.scale + elapsed * turb.speed) * turb.strength
                * Foundation.cos(xd * turb.scale * 1.7 - elapsed * turb.speed * 0.8)

            wavePoints.append(CGPoint(x: x, y: y))
            x += step
        }

        guard !wavePoints.isEmpty else { return }

        // Build path: start at bottom-left, trace wave, then close upward (aurora rises)
        // React path: moveTo(0, height) → wave → lineTo(width, lastY) → lineTo(width, -400) → lineTo(0, -400) → close
        path.move(to: CGPoint(x: 0, y: size.height))
        path.addLine(to: wavePoints[0])

        // Smooth bezier curves through wave points (matching React quadraticCurveTo)
        for i in 1..<wavePoints.count {
            let prev = wavePoints[i - 1]
            let curr = wavePoints[i]
            let midX = (prev.x + curr.x) / 2
            let midY = (prev.y + curr.y) / 2
            path.addQuadCurve(to: CGPoint(x: midX, y: midY), control: prev)
            if i == wavePoints.count - 1 {
                path.addQuadCurve(to: curr, control: CGPoint(x: midX, y: midY))
            }
        }

        // Close path upward — aurora curtains fill from wave upward to top of screen
        path.addLine(to: CGPoint(x: size.width, y: wavePoints.last!.y))
        path.addLine(to: CGPoint(x: size.width, y: -400))
        path.addLine(to: CGPoint(x: 0, y: -400))
        path.closeSubpath()

        // Gradient fill: from wave base downward (gradientStart) to above (gradientEnd)
        // matching React: startPoint at avgY+60, endPoint at avgY - height*(0.9 + scaled*0.25)
        let avgY = size.height * yBase
        let gradientStart = avgY + 60
        let gradientEnd = avgY - height * (0.9 + scaledIntensity * 0.25)

        let intensityBoost: Double
        let stops: [Gradient.Stop]

        if isDarkMode {
            intensityBoost = min(1.0 + scaledIntensity * 0.2, 1.3)
            stops = [
                .init(color: color.opacity(0), location: 0),
                .init(color: color.opacity(alpha * 0.3 * intensityBoost), location: 0.03),
                .init(color: color.opacity(alpha * 0.85 * intensityBoost), location: 0.08),
                .init(color: color.opacity(alpha * 0.92 * intensityBoost), location: 0.18),
                .init(color: color.opacity(alpha * 0.75), location: 0.35),
                .init(color: color.opacity(alpha * 0.45), location: 0.55),
                .init(color: color.opacity(alpha * 0.22), location: 0.75),
                .init(color: color.opacity(alpha * 0.08), location: 0.9),
                .init(color: color.opacity(0), location: 1.0),
            ]
        } else {
            intensityBoost = min(1.0 + scaledIntensity * 0.18, 1.22)
            stops = [
                .init(color: color.opacity(0), location: 0),
                .init(color: color.opacity(alpha * 0.45 * intensityBoost), location: 0.02),
                .init(color: color.opacity(alpha * 0.92 * intensityBoost), location: 0.06),
                .init(color: color.opacity(alpha * 1.0 * intensityBoost), location: 0.14),
                .init(color: color.opacity(alpha * 0.88), location: 0.28),
                .init(color: color.opacity(alpha * 0.62), location: 0.48),
                .init(color: color.opacity(alpha * 0.34), location: 0.68),
                .init(color: color.opacity(alpha * 0.14), location: 0.85),
                .init(color: color.opacity(0), location: 1.0),
            ]
        }

        let gradient = Gradient(stops: stops)
        let shading = GraphicsContext.Shading.linearGradient(
            gradient,
            startPoint: CGPoint(x: size.width / 2, y: gradientStart),
            endPoint: CGPoint(x: size.width / 2, y: gradientEnd)
        )

        context.fill(path, with: shading)

        // Glow for high intensity (matching React shadowBlur)
        if scaledIntensity > 0.6 {
            var glowCtx = context
            let blurRadius = isDarkMode ? 25.0 * scaledIntensity : 22.0 * scaledIntensity
            let glowAlpha = isDarkMode
                ? min(alpha * 0.8, 0.5)
                : min(alpha * 0.58, 0.42)

            glowCtx.addFilter(.blur(radius: blurRadius))
            glowCtx.opacity = glowAlpha
            glowCtx.fill(path, with: .color(color))
        }
    }

    // MARK: - Scene Colors

    private func sceneColors(for scene: QuantumFlowScene) -> [Color] {
        isDarkMode ? scene.colors : scene.lightColors
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
