import SwiftUI

// MARK: - Layout Background View

/// Orchestrates the full background stack: base color → breathing orbs →
/// quantum flow → cosmic nebula → overlays. Mirrors the React LayoutBackground
/// component with all layers composited.
struct LayoutBackgroundView: View {
    @Environment(\.colorScheme) private var colorScheme

    var nebulaPreset: NebulaPreset = .lagoonNebula
    var orbScheme: BreathingOrbScheme = .barcelonaNights
    var quantumScene: QuantumFlowScene = .auroraBorealis
    var showQuantumFlow: Bool = true
    var showCosmic: Bool = true
    var cosmicIntensity: Double = 1.0
    var speed: Double = 1.0

    var body: some View {
        GeometryReader { geometry in
            ZStack {
                // Layer 0: Base gradient
                baseGradient

                // Layer 1: Breathing orbs (always present)
                BreathingOrbsView(isDarkMode: colorScheme == .dark, scheme: orbScheme, intensity: 1.0, speed: speed)
                    .opacity(colorScheme == .dark ? 0.7 : 0.4)

                // Layer 2: Quantum flow (optional — aurora curtains)
                if showQuantumFlow {
                    QuantumFlowView(scene: quantumScene, intensity: 1.0, speed: speed, isDarkMode: colorScheme == .dark)
                        .opacity(colorScheme == .dark ? 0.5 : 0.25)
                }

                // Layer 3: Cosmic nebula/galaxy scene (optional)
                if showCosmic {
                    CosmicBackgroundView(
                        preset: nebulaPreset,
                        intensity: cosmicIntensity * (colorScheme == .dark ? 1.0 : 0.5),
                        speed: speed
                    )
                    .opacity(colorScheme == .dark ? 0.8 : 0.35)
                }

                // Layer 4: Top-level fog/overlay
                topOverlay
            }
            .ignoresSafeArea()
        }
    }

    private var baseGradient: some View {
        LinearGradient(
            stops: colorScheme == .dark
                ? [
                    .init(color: Color(red: 3/255, green: 2/255, blue: 8/255), location: 0),
                    .init(color: Color(red: 8/255, green: 5/255, blue: 15/255), location: 0.3),
                    .init(color: Color(red: 5/255, green: 3/255, blue: 12/255), location: 0.7),
                    .init(color: Color(red: 2/255, green: 1/255, blue: 6/255), location: 1.0),
                ]
                : [
                    .init(color: Color(red: 240/255, green: 245/255, blue: 255/255), location: 0),
                    .init(color: Color(red: 230/255, green: 238/255, blue: 250/255), location: 0.3),
                    .init(color: Color(red: 225/255, green: 235/255, blue: 248/255), location: 0.7),
                    .init(color: Color(red: 220/255, green: 230/255, blue: 245/255), location: 1.0),
                ],
            startPoint: .top,
            endPoint: .bottom
        )
    }

    private var topOverlay: some View {
        ZStack {
            // Subtle grain/texture effect (noise approximation)
            if colorScheme == .dark {
                Color.black.opacity(0.05)
                    .blendMode(.overlay)

                // Bottom safe area fade
                LinearGradient(
                    stops: [
                        .init(color: .clear, location: 0.85),
                        .init(color: Color(red: 2/255, green: 1/255, blue: 6/255).opacity(0.3), location: 1.0),
                    ],
                    startPoint: .top,
                    endPoint: .bottom
                )
            }
        }
    }
}

// MARK: - View Extension

extension View {
    /// Applies the cosmic layout background behind any content.
    func cosmicBackground(
        preset: NebulaPreset = .lagoonNebula,
        orbScheme: BreathingOrbScheme = .barcelonaNights,
        quantumScene: QuantumFlowScene = .auroraBorealis,
        showQuantumFlow: Bool = true,
        showCosmic: Bool = true,
        cosmicIntensity: Double = 1.0,
        speed: Double = 1.0
    ) -> some View {
        self.background {
            LayoutBackgroundView(
                nebulaPreset: preset,
                orbScheme: orbScheme,
                quantumScene: quantumScene,
                showQuantumFlow: showQuantumFlow,
                showCosmic: showCosmic,
                cosmicIntensity: cosmicIntensity,
                speed: speed
            )
        }
    }
}

// MARK: - Preview

#Preview("Lagoon Nebula") {
    Color.clear
        .cosmicBackground(preset: .lagoonNebula)
}

#Preview("Spiral Halo Galaxy") {
    Color.clear
        .cosmicBackground(preset: .spiralHaloGalaxy)
}
