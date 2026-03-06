import SwiftUI
import SwiftData

// MARK: - Nebula Drift Settings

/// Full React-parity sub-tab for Nebula Drift settings.
/// Enable toggle, dark-mode-only badge, 6 nebula preset cards, intensity/speed sliders.
struct NebulaDriftSettingsView: View {
    @Query private var profiles: [UserProfile]
    @Environment(\.colorScheme) private var colorScheme

    private var profile: UserProfile? { profiles.first }
    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        VStack(spacing: 20) {
            // Header with toggle
            headerRow

            if !isDark {
                darkModeOnlyBadge
            }

            if profile?.nebulaDriftEnabled == true {
                // Preset selector
                presetSelectorSection

                // Intensity slider
                intensitySlider

                // Drift speed slider
                driftSpeedSlider

                // Status description
                statusDescription
            }
        }
        .animation(.easeInOut(duration: 0.3), value: profile?.nebulaDriftEnabled)
    }

    // MARK: - Header

    private var headerRow: some View {
        HStack(spacing: 12) {
            Image(systemName: "cloud.fog.fill")
                .font(.system(size: 20))
                .foregroundStyle(
                    LinearGradient(
                        colors: [.purple, .blue],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )
                .scaleEffect(profile?.nebulaDriftEnabled == true ? 1.0 : 0.85)
                .opacity(profile?.nebulaDriftEnabled == true ? 1.0 : 0.5)

            VStack(alignment: .leading, spacing: 2) {
                Text("Nebula Drift")
                    .font(.system(size: 17, weight: .semibold))
                    .foregroundStyle(isDark ? .white : .primary)
                Text("Cosmic nebula background layer")
                    .font(.system(size: 13))
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
            }

            Spacer()

            PremiumToggle(
                isOn: profile?.nebulaDriftEnabled ?? false,
                onToggle: {
                    withAnimation { profile?.nebulaDriftEnabled.toggle() }
                }
            )
        }
    }

    // MARK: - Dark Mode Badge

    private var darkModeOnlyBadge: some View {
        HStack(spacing: 8) {
            Image(systemName: "moon.fill")
                .font(.system(size: 14))
                .foregroundStyle(.indigo)

            Text("Nebula Drift is optimized for Dark Mode")
                .font(.system(size: 13, weight: .medium))
                .foregroundStyle(.indigo)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 10)
        .background(
            RoundedRectangle(cornerRadius: 12, style: .continuous)
                .fill(.indigo.opacity(0.1))
                .overlay(
                    RoundedRectangle(cornerRadius: 12, style: .continuous)
                        .strokeBorder(.indigo.opacity(0.3), lineWidth: 0.5)
                )
        )
    }

    // MARK: - Preset Selector

    private var presetSelectorSection: some View {
        VStack(alignment: .leading, spacing: 10) {
            HStack(spacing: 6) {
                Image(systemName: "sparkles")
                    .font(.system(size: 14))
                    .foregroundStyle(isDark ? .white.opacity(0.7) : .secondary)
                Text("Nebula Preset")
                    .font(.system(size: 14, weight: .semibold))
                    .foregroundStyle(isDark ? .white : .primary)
            }

            LazyVGrid(columns: [
                GridItem(.flexible(), spacing: 10),
                GridItem(.flexible(), spacing: 10),
            ], spacing: 10) {
                ForEach(NebulaPreset.allCases) { preset in
                    SchemeCardView(
                        name: preset.displayName,
                        description: preset.description,
                        previewColors: preset.previewColors,
                        isSelected: profile?.nebulaPresetEnum == preset,
                        previewHeight: 70
                    ) {
                        withAnimation(.spring(response: 0.3, dampingFraction: 0.7)) {
                            profile?.nebulaPresetEnum = preset
                        }
                    }
                }
            }
        }
    }

    // MARK: - Sliders

    private var intensitySlider: some View {
        SettingsSliderView(
            label: "Nebula Intensity",
            iconName: "aqi.medium",
            value: Binding(
                get: { profile?.nebulaDriftIntensity ?? 1.0 },
                set: { profile?.nebulaDriftIntensity = $0 }
            ),
            range: 0.3...1.5,
            step: 0.1,
            presets: [
                (0.4, "Subtle", "smoke"),
                (0.8, "Balanced", "cloud"),
                (1.3, "Vivid", "cloud.bolt"),
            ]
        )
    }

    private var driftSpeedSlider: some View {
        SettingsSliderView(
            label: "Drift Speed",
            iconName: "wind",
            value: Binding(
                get: { profile?.nebulaDriftSpeed ?? 1.0 },
                set: { profile?.nebulaDriftSpeed = $0 }
            ),
            range: 0...2,
            step: 0.1,
            presets: [
                (0.0, "Frozen", "snowflake"),
                (0.8, "Flowing", "wind"),
                (1.6, "Swift", "tornado"),
            ]
        )
    }

    // MARK: - Status

    private var statusDescription: some View {
        let preset = profile?.nebulaPresetEnum ?? .celestialLagoon
        let speed = profile?.nebulaDriftSpeed ?? 1.0

        let (icon, text): (String, String) = {
            if speed == 0 {
                return ("snowflake", "\(preset.displayName) stands frozen in time")
            } else if speed < 0.8 {
                return ("leaf", "\(preset.displayName) drifts with gentle motion")
            } else if speed < 1.4 {
                return ("wind", "\(preset.displayName) flows at a natural pace")
            } else {
                return ("tornado", "\(preset.displayName) swirls with cosmic energy")
            }
        }()

        return HStack(spacing: 8) {
            Image(systemName: icon)
                .font(.system(size: 13))
                .foregroundStyle(.indigo.opacity(0.7))
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
