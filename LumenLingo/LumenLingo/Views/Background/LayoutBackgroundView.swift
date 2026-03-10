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
    private var orbRaveMode: Bool {
        profile?.orbRaveMode ?? false
    }
    private var quantumRaveMode: Bool {
        profile?.quantumRaveMode ?? false
    }

    var body: some View {
        let isDark = colorScheme == .dark
        GeometryReader { geometry in
            ZStack {
                // Layer 0: Base gradient
                baseGradient

                // Layer 0b: Accent overlay — purple/orange corners (light only)
                if !isDark {
                    LinearGradient(
                        stops: [
                            .init(color: Color(red: 168/255, green: 85/255, blue: 247/255).opacity(0.2), location: 0),
                            .init(color: .clear, location: 0.5),
                            .init(color: Color(red: 251/255, green: 146/255, blue: 60/255).opacity(0.2), location: 1),
                        ],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                }

                // Layer 0c: Dynamic shimmer — sunlight on water (light only)
                if !isDark {
                    LinearGradient(
                        stops: [
                            .init(color: Color.white.opacity(0.12), location: 0),
                            .init(color: .clear, location: 0.5),
                            .init(color: Color(red: 251/255, green: 146/255, blue: 60/255).opacity(0.08), location: 1),
                        ],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                    .opacity(0.6)
                }

                // Layer 1: Breathing orbs (respects user toggle + active state)
                if showOrbs && isActive {
                    BreathingOrbsView(isDarkMode: isDark, scheme: orbScheme, intensity: orbIntensity, speed: orbSpeed, raveMode: orbRaveMode)
                        .opacity(isDark ? 0.7 : 0.7)
                }

                // Layer 2: Quantum flow — Metal GPU aurora (respects user toggle + active state)
                if showQuantumFlow && isActive {
                    MetalQuantumFlowView(scene: quantumScene, intensity: quantumIntensity, speed: quantumSpeed, isDarkMode: isDark, raveMode: quantumRaveMode)
                        .opacity(isDark ? 0.85 : 0.7)
                }

                // Layer 3: Cosmic nebula (respects user toggle + active state)
                if showCosmic && isActive {
                    CosmicBackgroundView(
                        preset: nebulaPreset,
                        intensity: cosmicIntensity * (isDark ? 1.0 : 0.5),
                        speed: cosmicSpeed
                    )
                    .opacity(isDark ? 0.8 : 0.25)
                }

                // Layer 4: Center depth vignette (light only — subtle 5% black at edges)
                if !isDark {
                    RadialGradient(
                        colors: [
                            .clear,
                            Color.black.opacity(0.05)
                        ],
                        center: .center,
                        startRadius: 0,
                        endRadius: max(geometry.size.width, geometry.size.height) * 0.7
                    )
                }

                // Layer 5: Atmospheric haze — Caribbean humidity (light only)
                if !isDark {
                    Color.white.opacity(0.04)
                        .blendMode(.softLight)
                        .blur(radius: 0.5)
                }

                // Layer 6: Vertical depth — brighter sky, grounded bottom (light only)
                if !isDark {
                    LinearGradient(
                        stops: [
                            .init(color: Color.white.opacity(0.08), location: 0),
                            .init(color: .clear, location: 0.35),
                            .init(color: .clear, location: 0.65),
                            .init(color: Color.black.opacity(0.03), location: 1.0),
                        ],
                        startPoint: .top,
                        endPoint: .bottom
                    )
                }

                // Layer 7: Top-level fog/overlay (dark only)
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
                    // Caribbean sunset: lavender → hot pink → warm orange
                    .init(color: Color(red: 196/255, green: 148/255, blue: 252/255), location: 0),
                    .init(color: Color(red: 220/255, green: 131/255, blue: 217/255), location: 0.35),
                    .init(color: Color(red: 244/255, green: 114/255, blue: 182/255), location: 0.6),
                    .init(color: Color(red: 251/255, green: 146/255, blue: 60/255), location: 1.0),
                ],
            startPoint: colorScheme == .dark ? .top : .topLeading,
            endPoint: colorScheme == .dark ? .bottom : .bottomTrailing
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
