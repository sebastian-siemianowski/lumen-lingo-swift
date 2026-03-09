import SwiftUI

// MARK: - Settings Slider

/// Reusable slider matching React's SettingsSlider component.
/// Shows label + icon, formatted value badge, GlassSlider, and 3 preset buttons.
struct SettingsSliderView: View {
    let label: String
    let iconName: String
    @Binding var value: Double
    let range: ClosedRange<Double>
    let step: Double
    let presets: [(value: Double, label: String, iconName: String)]
    var formatValue: ((Double) -> String)?
    var disabled: Bool = false
    var accentColor: Color = .purple

    @Environment(\.colorScheme) private var colorScheme

    private var isDark: Bool { colorScheme == .dark }

    private var formattedValue: String {
        if let format = formatValue {
            return format(value)
        }
        return "\(Int(value * 100))%"
    }

    var body: some View {
        VStack(spacing: 12) {
            // Label row: icon + label on left, value badge on right
            HStack {
                HStack(spacing: 6) {
                    Image(systemName: iconName)
                        .font(.system(size: 14))
                        .foregroundStyle(isDark ? .white.opacity(0.7) : .caribbeanMist)
                    Text(label)
                        .font(.system(size: 14, weight: .semibold))
                        .foregroundStyle(isDark ? .white : .caribbeanInk)
                }

                Spacer()

                Text(formattedValue)
                    .font(.system(size: 12, weight: .medium, design: .monospaced))
                    .foregroundStyle(isDark ? .white.opacity(0.9) : .caribbeanInk)
                    .padding(.horizontal, 10)
                    .padding(.vertical, 5)
                    .background(
                        Capsule()
                            .fill(isDark ? .purple.opacity(0.2) : .purple.opacity(0.1))
                            .overlay(
                                Capsule().strokeBorder(.purple.opacity(0.3), lineWidth: 0.5)
                            )
                    )
            }

            // Slider
            GlassSlider(value: $value, range: range, step: step, accentColor: accentColor)
                .opacity(disabled ? 0.4 : 1.0)
                .disabled(disabled)

            // Preset buttons
            if !presets.isEmpty {
                HStack(spacing: 8) {
                    ForEach(Array(presets.enumerated()), id: \.offset) { _, preset in
                        presetButton(preset)
                    }
                }
            }
        }
        .opacity(disabled ? 0.5 : 1.0)
    }

    // MARK: - Preset Button

    private func presetButton(_ preset: (value: Double, label: String, iconName: String)) -> some View {
        let isActive = abs(value - preset.value) < step * 0.5

        return Button {
            withAnimation(.spring(response: 0.3, dampingFraction: 0.7)) {
                value = preset.value
            }
        } label: {
            HStack(spacing: 4) {
                Image(systemName: preset.iconName)
                    .font(.system(size: 11))
                Text(preset.label)
                    .font(.system(size: 11, weight: .semibold))
            }
            .foregroundStyle(
                isActive
                    ? (isDark ? .white : .purple)
                    : (isDark ? .white.opacity(0.5) : .caribbeanMist)
            )
            // Neon text glow when active
            .shadow(color: isActive && isDark ? accentColor.opacity(0.6) : .clear, radius: 4)
            .shadow(color: isActive && isDark ? accentColor.opacity(0.3) : .clear, radius: 8)
            .padding(.horizontal, 12)
            .padding(.vertical, 8)
            .frame(maxWidth: .infinity)
            .background {
                ZStack {
                    // Static radiant aura (active only, dark mode)
                    if isActive && isDark {
                        RoundedRectangle(cornerRadius: 10, style: .continuous)
                            .fill(accentColor.opacity(0.19))
                            .blur(radius: 6)
                            .padding(-4)
                    }

                    // Glass background
                    RoundedRectangle(cornerRadius: 10, style: .continuous)
                        .fill(.ultraThinMaterial)

                    // Inner gradient highlight
                    RoundedRectangle(cornerRadius: 10, style: .continuous)
                        .fill(
                            LinearGradient(
                                colors: [
                                    .white.opacity(isActive ? (isDark ? 0.14 : 0.30) : (isDark ? 0.06 : 0.15)),
                                    .clear,
                                    .white.opacity(isActive ? (isDark ? 0.06 : 0.12) : (isDark ? 0.02 : 0.06))
                                ],
                                startPoint: .top,
                                endPoint: .bottom
                            )
                        )

                    // Color tint when active
                    if isActive {
                        RoundedRectangle(cornerRadius: 10, style: .continuous)
                            .fill(accentColor.opacity(isDark ? 0.10 : 0.06))
                    }

                    // Multi-layer inset shadows
                    RoundedRectangle(cornerRadius: 10, style: .continuous)
                        .strokeBorder(
                            LinearGradient(
                                colors: isActive
                                    ? [accentColor.opacity(isDark ? 0.6 : 0.4), accentColor.opacity(isDark ? 0.3 : 0.2)]
                                    : [.white.opacity(isDark ? 0.10 : 0.20), .white.opacity(isDark ? 0.04 : 0.08)],
                                startPoint: .top,
                                endPoint: .bottom
                            ),
                            lineWidth: 1
                        )
                }
            }
            .shadow(color: isActive ? accentColor.opacity(isDark ? 0.30 : 0.15) : .clear, radius: 8)
            .shadow(color: isActive ? accentColor.opacity(0.15) : .clear, radius: 4, y: 2)
        }
        .buttonStyle(LumenPressStyle(weight: .soft, accentColor: accentColor))
        .disabled(disabled)
    }
}

// MARK: - Preview

#Preview {
    VStack(spacing: 24) {
        SettingsSliderView(
            label: "Intensity",
            iconName: "gauge.medium",
            value: .constant(1.0),
            range: 0...2,
            step: 0.1,
            presets: [
                (0.5, "Subtle", "drop"),
                (1.0, "Balanced", "water.waves"),
                (1.5, "Celestial", "flame"),
            ]
        )

        SettingsSliderView(
            label: "Speed",
            iconName: "timer",
            value: .constant(0.5),
            range: 0...2,
            step: 0.1,
            presets: [
                (0.5, "Calm", "leaf"),
                (1.0, "Flowing", "wind"),
                (1.5, "Swift", "bolt"),
            ]
        )
    }
    .padding()
    .background(Color.black)
}
