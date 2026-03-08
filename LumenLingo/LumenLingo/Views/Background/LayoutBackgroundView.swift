import SwiftUI
import SwiftData

// MARK: - Background Active Environment Key

/// Controls whether expensive background layers (Metal, orbs, aurora) render.
/// Set to `false` for off-screen tabs to eliminate GPU/CPU waste.
private struct BackgroundActiveKey: EnvironmentKey {
    static let defaultValue: Bool = true
}

extension EnvironmentValues {
    var backgroundActive: Bool {
        get { self[BackgroundActiveKey.self] }
        set { self[BackgroundActiveKey.self] = newValue }
    }
}

// MARK: - Layout Background View

/// Orchestrates the full background stack: base color → breathing orbs →
/// quantum flow → cosmic nebula → overlays. Reads user preferences from
/// SwiftData globally, matching React's localStorage-driven approach.
struct LayoutBackgroundView: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.backgroundActive) private var isActive
    @Query private var profiles: [UserProfile]

    /// Optional overrides for preview / testing contexts
    var previewPreset: NebulaPreset?
    var previewOrbScheme: BreathingOrbScheme?
    var previewQuantumScene: QuantumFlowScene?

    private var profile: UserProfile? { profiles.first }

    private var nebulaPreset: NebulaPreset {
        previewPreset ?? profile?.nebulaPresetEnum ?? .lagoonNebula
    }
    private var orbScheme: BreathingOrbScheme {
        previewOrbScheme ?? profile?.orbScheme ?? .barcelonaNights
    }
    private var quantumScene: QuantumFlowScene {
        previewQuantumScene ?? profile?.quantumScene ?? .dubaiCelestialMirage
    }
    private var showOrbs: Bool {
        profile?.breathingOrbsEnabled ?? true
    }
    private var showQuantumFlow: Bool {
        profile?.quantumFlowEnabled ?? true
    }
    private var showCosmic: Bool {
        profile?.nebulaDriftEnabled ?? true
    }
    private var orbIntensity: Double {
        profile?.orbIntensity ?? 1.0
    }
    private var orbSpeed: Double {
        profile?.orbSpeed ?? 1.0
    }
    private var quantumIntensity: Double {
        profile?.quantumIntensity ?? 1.0
    }
    private var quantumSpeed: Double {
        profile?.quantumSpeed ?? 1.0
    }
    private var cosmicIntensity: Double {
        profile?.nebulaDriftIntensity ?? 1.0
    }
    private var cosmicSpeed: Double {
        profile?.nebulaDriftSpeed ?? 1.0
    }

    var body: some View {
        GeometryReader { geometry in
            ZStack {
                // Layer 0: Base gradient
                baseGradient

                // Layer 1: Breathing orbs (respects user toggle + active state)
                if showOrbs && isActive {
                    BreathingOrbsView(isDarkMode: colorScheme == .dark, scheme: orbScheme, intensity: orbIntensity, speed: orbSpeed)
                        .opacity(colorScheme == .dark ? 0.7 : 0.4)
                }

                // Layer 2: Quantum flow (respects user toggle + active state)
                if showQuantumFlow && isActive {
                    QuantumFlowView(scene: quantumScene, intensity: quantumIntensity, speed: quantumSpeed, isDarkMode: colorScheme == .dark)
                        .opacity(colorScheme == .dark ? 0.5 : 0.25)
                }

                // Layer 3: Cosmic nebula (respects user toggle + active state)
                if showCosmic && isActive {
                    CosmicBackgroundView(
                        preset: nebulaPreset,
                        intensity: cosmicIntensity * (colorScheme == .dark ? 1.0 : 0.5),
                        speed: cosmicSpeed
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
    /// Reads all preferences from SwiftData — no parameters needed.
    func cosmicBackground() -> some View {
        self.background {
            LayoutBackgroundView()
        }
    }

    /// Preview-only variant with explicit overrides.
    func cosmicBackground(
        preset: NebulaPreset,
        orbScheme: BreathingOrbScheme = .barcelonaNights,
        quantumScene: QuantumFlowScene = .dubaiCelestialMirage
    ) -> some View {
        self.background {
            LayoutBackgroundView(
                previewPreset: preset,
                previewOrbScheme: orbScheme,
                previewQuantumScene: quantumScene
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
