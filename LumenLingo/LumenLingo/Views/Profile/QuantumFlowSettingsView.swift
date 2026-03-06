import SwiftUI
import SwiftData

// MARK: - Quantum Flow Settings

/// Full React-parity sub-tab for Quantum Flow settings.
/// Enable toggle, 6 scene cards (2-col grid), intensity/speed sliders.
struct QuantumFlowSettingsView: View {
    @Query private var profiles: [UserProfile]
    @Environment(\.colorScheme) private var colorScheme

    private var profile: UserProfile? { profiles.first }
    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        VStack(spacing: 20) {
            // Header with toggle
            headerRow

            if profile?.quantumFlowEnabled == true {
                // Scene selector
                sceneSelectorSection

                // Intensity slider
                intensitySlider

                // Speed slider
                speedSlider

                // Info message
                infoMessage
            }
        }
        .animation(.easeInOut(duration: 0.3), value: profile?.quantumFlowEnabled)
    }

    // MARK: - Header

    private var headerRow: some View {
        HStack(spacing: 12) {
            Image(systemName: "waveform.path.ecg")
                .font(.system(size: 20))
                .foregroundStyle(.cyan)
                .scaleEffect(profile?.quantumFlowEnabled == true ? 1.0 : 0.85)
                .opacity(profile?.quantumFlowEnabled == true ? 1.0 : 0.5)
                .animation(.easeInOut(duration: 1.5).repeatForever(autoreverses: true), value: profile?.quantumFlowEnabled)

            VStack(alignment: .leading, spacing: 2) {
                Text("Quantum Flow")
                    .font(.system(size: 17, weight: .semibold))
                    .foregroundStyle(isDark ? .white : .primary)
                Text("Dynamic particle animation layer")
                    .font(.system(size: 13))
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
            }

            Spacer()

            PremiumToggle(
                isOn: profile?.quantumFlowEnabled ?? true,
                onToggle: {
                    withAnimation { profile?.quantumFlowEnabled.toggle() }
                }
            )
        }
    }

    // MARK: - Scene Selector

    private var sceneSelectorSection: some View {
        VStack(alignment: .leading, spacing: 10) {
            HStack(spacing: 6) {
                Image(systemName: "sparkles")
                    .font(.system(size: 14))
                    .foregroundStyle(isDark ? .white.opacity(0.7) : .secondary)
                Text("Scene")
                    .font(.system(size: 14, weight: .semibold))
                    .foregroundStyle(isDark ? .white : .primary)
            }

            LazyVGrid(columns: [
                GridItem(.flexible(), spacing: 10),
                GridItem(.flexible(), spacing: 10),
            ], spacing: 10) {
                ForEach(QuantumFlowScene.allCases) { scene in
                    SchemeCardView(
                        name: scene.displayName,
                        description: scene.description,
                        previewColors: scene.previewColors,
                        isSelected: profile?.quantumScene == scene,
                        previewHeight: 70
                    ) {
                        withAnimation(.spring(response: 0.3, dampingFraction: 0.7)) {
                            profile?.quantumScene = scene
                        }
                    }
                }
            }
        }
    }

    // MARK: - Sliders

    private var intensitySlider: some View {
        SettingsSliderView(
            label: "Particle Density",
            iconName: "circle.grid.3x3",
            value: Binding(
                get: { profile?.quantumIntensity ?? 1.0 },
                set: { profile?.quantumIntensity = $0 }
            ),
            range: 0.1...1.5,
            step: 0.1,
            presets: [
                (0.3, "Sparse", "circle.dotted"),
                (0.7, "Balanced", "circle.grid.2x2"),
                (1.2, "Dense", "circle.grid.3x3.fill"),
            ]
        )
    }

    private var speedSlider: some View {
        SettingsSliderView(
            label: "Flow Speed",
            iconName: "gauge.with.needle",
            value: Binding(
                get: { profile?.quantumSpeed ?? 1.0 },
                set: { profile?.quantumSpeed = $0 }
            ),
            range: 0.3...1.5,
            step: 0.1,
            presets: [
                (0.4, "Serene", "tortoise"),
                (0.8, "Rhythmic", "metronome"),
                (1.3, "Energetic", "hare"),
            ]
        )
    }

    // MARK: - Info Message

    private var infoMessage: some View {
        let scene = profile?.quantumScene ?? .dubaiCelestialMirage
        let speed = profile?.quantumSpeed ?? 1.0

        let (icon, text): (String, String) = {
            if speed < 0.6 {
                return ("sparkle", "\(scene.displayName) drifts in serene stillness")
            } else if speed < 1.0 {
                return ("waveform.circle", "\(scene.displayName) flows with balanced rhythm")
            } else {
                return ("bolt.circle", "\(scene.displayName) pulses with vibrant energy")
            }
        }()

        return HStack(spacing: 8) {
            Image(systemName: icon)
                .font(.system(size: 13))
                .foregroundStyle(.cyan.opacity(0.7))
            Text(text)
                .font(.system(size: 13))
                .italic()
                .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 10)
        .background(
            RoundedRectangle(cornerRadius: 12, style: .continuous)
                .fill(isDark ? .white.opacity(0.04) : .white.opacity(0.2))
                .overlay(
                    RoundedRectangle(cornerRadius: 12, style: .continuous)
                        .strokeBorder(.white.opacity(isDark ? 0.06 : 0.12), lineWidth: 0.5)
                )
        )
    }
}
