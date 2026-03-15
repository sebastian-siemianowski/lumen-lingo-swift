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
                .padding(.horizontal, 4)
                .padding(.vertical, 4)
            }
        }
    }

    // MARK: - Soundscape Card

    private func soundscapeCard(_ soundscape: Soundscape) -> some View {
        let isSelected = profile?.soundscapeEnum == soundscape

        return Button {
            handleSoundscapeTap(soundscape)
        } label: {
            soundscapeCardContent(soundscape, isSelected: isSelected)
        }
        .buttonStyle(LumenPressStyle(weight: .soft))
    }

    private func soundscapeCardContent(_ soundscape: Soundscape, isSelected: Bool) -> some View {
        let isPlaying = isSelected && AudioService.shared.isSoundscapePlaying
        let anySelected = profile?.soundscapeEnum != nil

        return VStack(spacing: 0) {
            soundscapePreview(soundscape, isSelected: isSelected, isPlaying: isPlaying)
            soundscapeInfo(soundscape, isSelected: isSelected)
        }
        .frame(width: 130)
        .clipShape(RoundedRectangle(cornerRadius: 14, style: .continuous))
        .overlay(soundscapeBorder(isSelected: isSelected))
        .opacity(anySelected && !isSelected ? 0.55 : 1.0)
    }

    private func soundscapePreview(_ soundscape: Soundscape, isSelected: Bool, isPlaying: Bool) -> some View {
        ZStack {
            LinearGradient(
                colors: soundscape.previewColors,
                startPoint: .topLeading,
                endPoint: .bottomTrailing
            )
            .overlay(
                LinearGradient(
                    colors: [.white.opacity(0.18), .clear, .black.opacity(0.08)],
                    startPoint: .top,
                    endPoint: .bottom
                )
            )

            // Checkmark badge top-right
            if isSelected {
                VStack {
                    HStack {
                        Spacer()
                        ZStack {
                            Circle()
                                .fill(.white)
                                .frame(width: 22, height: 22)

                            Image(systemName: isPlaying ? "waveform" : "checkmark")
                                .font(.system(size: 10, weight: .bold))
                                .foregroundStyle(.purple)
                                .symbolEffect(.variableColor.iterative, options: .repeating, isActive: isPlaying)
                        }
                        .shadow(color: .purple.opacity(0.5), radius: 4)
                        .transition(.scale.combined(with: .opacity))
                        .padding(6)
                    }
                    Spacer()
                }
            }

            Image(systemName: soundscape.icon)
                .font(.system(size: 22, weight: .medium))
                .foregroundStyle(.white.opacity(0.8))
                .shadow(color: .black.opacity(0.3), radius: 4, y: 2)
        }
        .frame(height: 60)
        .clipped()
    }

    private func soundscapeInfo(_ soundscape: Soundscape, isSelected: Bool) -> some View {
        VStack(spacing: 3) {
            Text(soundscape.displayName)
                .font(.system(size: 12, weight: .bold))
                .foregroundStyle(isDark ? .white.opacity(0.85) : .caribbeanInk)
                .lineLimit(1)
                .minimumScaleFactor(0.8)

            Text(soundscape.subtitle)
                .font(.system(size: 9))
                .foregroundStyle(isDark ? .white.opacity(0.45) : .caribbeanMist)
                .lineLimit(2)
                .multilineTextAlignment(.center)
        }
        .padding(.horizontal, 6)
        .padding(.vertical, 8)
        .frame(maxWidth: .infinity, minHeight: 50, alignment: .top)
        .background(
            isDark
                ? Color(red: 25/255, green: 20/255, blue: 45/255).opacity(0.9)
                : Color(red: 240/255, green: 238/255, blue: 248/255).opacity(0.92)
        )
    }

    private func soundscapeBorder(isSelected: Bool) -> some View {
        RoundedRectangle(cornerRadius: 14, style: .continuous)
            .strokeBorder(
                isSelected
                    ? LinearGradient(
                        colors: [.purple, .indigo, .purple.opacity(0.8)],
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
                lineWidth: isSelected ? 1.5 : 0.5
            )
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
