import SwiftUI
import SwiftData

// MARK: - Soundscapes Settings View

/// Immersive ambient soundscapes picker — replaces the old simple ambient toggle.
/// Shows categorized soundscape cards in horizontal scrolling rows with
/// a master enable toggle and volume slider.
struct SoundscapesSettingsView: View {
    @Query private var profiles: [UserProfile]
    @Environment(\.colorScheme) private var colorScheme

    private var profile: UserProfile? { profiles.first }
    private var isDark: Bool { colorScheme == .dark }
    private var isEnabled: Bool { profile?.ambientSoundsEnabled ?? false }

    var body: some View {
        VStack(spacing: 16) {
            // Header with toggle
            soundscapeToggle

            if isEnabled {
                // Category sections
                ForEach(SoundscapeCategory.allCases) { category in
                    categorySection(category)
                }

                // Volume slider
                volumeRow
            }
        }
        .animation(.easeInOut(duration: 0.35), value: isEnabled)
        .animation(.spring(response: 0.35, dampingFraction: 0.8), value: profile?.selectedSoundscape)
    }

    // MARK: - Header Toggle

    private var soundscapeToggle: some View {
        HStack(spacing: 12) {
            ZStack {
                Circle()
                    .fill(
                        LinearGradient(
                            colors: [Color(hex: "#6366F1").opacity(0.2), Color(hex: "#8B5CF6").opacity(0.1)],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
                    .frame(width: 36, height: 36)

                Image(systemName: isEnabled ? "headphones" : "headphones")
                    .font(.system(size: 17))
                    .foregroundStyle(
                        LinearGradient(
                            colors: [Color(hex: "#8B5CF6"), Color(hex: "#6366F1")],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
                    .symbolEffect(.pulse, options: .repeating, isActive: isEnabled && AudioService.shared.isSoundscapePlaying)
            }

            VStack(alignment: .leading, spacing: 2) {
                Text("Soundscapes")
                    .font(.system(size: 17, weight: .semibold))
                    .foregroundStyle(isDark ? .white : .caribbeanInk)
                Text(isEnabled ? (currentSoundscapeName ?? "Choose your ambiance") : "Immersive ambient audio")
                    .font(.system(size: 13))
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanPlum)
            }

            Spacer()

            PremiumToggle(
                isOn: isEnabled,
                enabledColor: Color(hex: "#8B5CF6"),
                enabledIcon: "headphones",
                disabledIcon: "headphones"
            ) {
                HapticsService.shared.toggleSwitch()
                if isEnabled {
                    AudioService.shared.playToggleOff()
                } else {
                    AudioService.shared.playToggleOn()
                }
                withAnimation {
                    profile?.ambientSoundsEnabled.toggle()
                    // Start/stop soundscape based on toggle
                    if profile?.ambientSoundsEnabled == true {
                        if let soundscape = profile?.soundscapeEnum {
                            AudioService.shared.startSoundscape(soundscape)
                        }
                    } else {
                        AudioService.shared.stopAmbient()
                    }
                }
            }
        }
    }

    // MARK: - Category Section

    private func categorySection(_ category: SoundscapeCategory) -> some View {
        VStack(alignment: .leading, spacing: 8) {
            // Category header
            HStack(spacing: 6) {
                Image(systemName: category.icon)
                    .font(.system(size: 12))
                    .foregroundStyle(categoryColor(category))
                Text(category.displayName)
                    .font(.system(size: 14, weight: .semibold))
                    .foregroundStyle(isDark ? .white.opacity(0.7) : .caribbeanMist)
            }
            .padding(.leading, 4)

            // Horizontal scroll of soundscape cards
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: 10) {
                    ForEach(category.soundscapes) { soundscape in
                        soundscapeCard(soundscape)
                    }
                }
                .padding(.horizontal, 2)
            }
        }
    }

    // MARK: - Soundscape Card

    private func soundscapeCard(_ soundscape: Soundscape) -> some View {
        let isSelected = profile?.soundscapeEnum == soundscape
        let isPlaying = isSelected && AudioService.shared.isSoundscapePlaying

        return Button {
            handleSoundscapeTap(soundscape)
        } label: {
            VStack(spacing: 0) {
                // Gradient preview with icon
                ZStack {
                    LinearGradient(
                        colors: soundscape.previewColors,
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                    .frame(height: 52)
                    .overlay(
                        LinearGradient(
                            colors: [.white.opacity(0.12), .clear],
                            startPoint: .top,
                            endPoint: .center
                        )
                    )

                    // Icon + playing indicator
                    HStack {
                        Spacer()

                        if isSelected {
                            ZStack {
                                Circle()
                                    .fill(.white.opacity(0.25))
                                    .frame(width: 24, height: 24)

                                Image(systemName: isPlaying ? "waveform" : "checkmark")
                                    .font(.system(size: 10, weight: .bold))
                                    .foregroundStyle(.white)
                                    .symbolEffect(.variableColor.iterative, options: .repeating, isActive: isPlaying)
                            }
                            .transition(.scale.combined(with: .opacity))
                            .padding(6)
                        }
                    }
                    .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .topTrailing)

                    Image(systemName: soundscape.icon)
                        .font(.system(size: 20))
                        .foregroundStyle(.white.opacity(isSelected ? 1.0 : 0.7))
                        .shadow(color: .black.opacity(0.3), radius: 4, y: 2)
                }

                // Info section
                VStack(spacing: 2) {
                    Text(soundscape.displayName)
                        .font(.system(size: 11, weight: .bold))
                        .foregroundStyle(
                            isSelected
                                ? (isDark ? .white : .caribbeanInk)
                                : (isDark ? .white.opacity(0.65) : .caribbeanMist)
                        )
                        .lineLimit(1)
                        .minimumScaleFactor(0.8)

                    Text(soundscape.subtitle)
                        .font(.system(size: 9))
                        .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist.opacity(0.8))
                        .lineLimit(2)
                        .multilineTextAlignment(.center)
                        .minimumScaleFactor(0.8)
                }
                .padding(.horizontal, 6)
                .padding(.vertical, 8)
                .frame(maxWidth: .infinity)
                .background(
                    isDark
                        ? Color(red: 25/255, green: 20/255, blue: 45/255).opacity(isSelected ? 0.95 : 0.85)
                        : Color(red: 240/255, green: 238/255, blue: 248/255).opacity(isSelected ? 0.95 : 0.90)
                )
            }
            .frame(width: 130)
            .clipShape(RoundedRectangle(cornerRadius: 14, style: .continuous))
            .overlay(
                RoundedRectangle(cornerRadius: 14, style: .continuous)
                    .strokeBorder(
                        isSelected
                            ? LinearGradient(
                                colors: [
                                    .purple.opacity(0.9),
                                    .indigo.opacity(0.6),
                                    .purple.opacity(0.4)
                                ],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                              )
                            : LinearGradient(
                                colors: [
                                    Color.white.opacity(isDark ? 0.10 : 0.25),
                                    Color.white.opacity(isDark ? 0.04 : 0.12)
                                ],
                                startPoint: .top,
                                endPoint: .bottom
                              ),
                        lineWidth: isSelected ? 2 : 0.5
                    )
            )
            .shadow(
                color: isSelected ? .purple.opacity(isDark ? 0.4 : 0.2) : .black.opacity(0.05),
                radius: isSelected ? 10 : 4,
                y: isSelected ? 3 : 2
            )
            .scaleEffect(isSelected ? 1.03 : 1.0)
        }
        .buttonStyle(LumenPressStyle(weight: .soft))
    }

    // MARK: - Volume Row

    private var volumeRow: some View {
        HStack(spacing: 10) {
            Image(systemName: "speaker.wave.1.fill")
                .font(.system(size: 12))
                .foregroundStyle(Color(hex: "#8B5CF6").opacity(0.7))
                .frame(width: 20)

            Slider(
                value: Binding(
                    get: { profile?.ambientVolume ?? 0.3 },
                    set: { profile?.ambientVolume = $0 }
                ),
                in: 0...1,
                step: 0.05
            )
            .tint(Color(hex: "#8B5CF6"))

            Image(systemName: "speaker.wave.3.fill")
                .font(.system(size: 12))
                .foregroundStyle(Color(hex: "#8B5CF6").opacity(0.7))
                .frame(width: 20)

            Text("\(Int((profile?.ambientVolume ?? 0.3) * 100))%")
                .font(.system(size: 12, weight: .medium).monospacedDigit())
                .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanPlum)
                .frame(width: 36, alignment: .trailing)
        }
        .padding(.top, 4)
    }

    // MARK: - Helpers

    private var currentSoundscapeName: String? {
        profile?.soundscapeEnum?.displayName
    }

    private func handleSoundscapeTap(_ soundscape: Soundscape) {
        HapticsService.shared.toggleSwitch()

        let wasSelected = profile?.soundscapeEnum == soundscape

        withAnimation(.spring(response: 0.35, dampingFraction: 0.8)) {
            if wasSelected {
                // Deselect — stop ambient
                profile?.soundscapeEnum = nil
                AudioService.shared.stopAmbient()
                AudioService.shared.playToggleOff()
            } else {
                let hadPrevious = profile?.soundscapeEnum != nil
                profile?.soundscapeEnum = soundscape
                AudioService.shared.playToggleOn()

                if hadPrevious {
                    AudioService.shared.crossfadeSoundscape(to: soundscape)
                } else {
                    AudioService.shared.startSoundscape(soundscape)
                }
            }
        }
    }

    private func categoryColor(_ category: SoundscapeCategory) -> Color {
        switch category {
        case .cozy: return .orange
        case .nature: return .green
        case .atmospheric: return .indigo
        case .travel: return .cyan
        }
    }
}
