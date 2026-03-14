import SwiftUI
import SwiftData

// MARK: - Sound Mixer

/// Per-category volume sliders for game, UI, and achievement sounds.
struct SoundMixerView: View {
    @Query private var profiles: [UserProfile]
    @Environment(\.colorScheme) private var colorScheme

    private var profile: UserProfile? { profiles.first }
    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        VStack(spacing: 16) {
            HStack(spacing: 8) {
                Image(systemName: "slider.horizontal.3")
                    .font(.system(size: 15))
                    .foregroundStyle(.teal)
                Text("Volume Controls")
                    .font(.system(size: 15, weight: .semibold))
                    .foregroundStyle(isDark ? .white : .caribbeanInk)
                Spacer()
            }

            volumeSlider(
                icon: "gamecontroller.fill",
                color: .green,
                title: "Game Sounds",
                value: Binding(
                    get: { profile?.gameSoundsVolume ?? 1.0 },
                    set: { profile?.gameSoundsVolume = $0 }
                )
            )

            volumeSlider(
                icon: "hand.tap.fill",
                color: .cyan,
                title: "UI Sounds",
                value: Binding(
                    get: { profile?.uiSoundsVolume ?? 1.0 },
                    set: { profile?.uiSoundsVolume = $0 }
                )
            )

            volumeSlider(
                icon: "trophy.fill",
                color: .yellow,
                title: "Achievements",
                value: Binding(
                    get: { profile?.achievementSoundsVolume ?? 1.0 },
                    set: { profile?.achievementSoundsVolume = $0 }
                )
            )
        }
    }

    // MARK: - Volume Slider

    private func volumeSlider(
        icon: String,
        color: Color,
        title: String,
        value: Binding<Float>
    ) -> some View {
        HStack(spacing: 10) {
            Image(systemName: icon)
                .font(.system(size: 13))
                .foregroundStyle(color)
                .frame(width: 24)

            Text(title)
                .font(.system(size: 14, weight: .medium))
                .foregroundStyle(isDark ? .white.opacity(0.8) : .caribbeanInk)
                .frame(width: 90, alignment: .leading)

            Slider(value: value, in: 0...1, step: 0.05)
                .tint(color)

            Text("\(Int(value.wrappedValue * 100))%")
                .font(.system(size: 12, weight: .medium).monospacedDigit())
                .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanPlum)
                .frame(width: 36, alignment: .trailing)
        }
    }
}
