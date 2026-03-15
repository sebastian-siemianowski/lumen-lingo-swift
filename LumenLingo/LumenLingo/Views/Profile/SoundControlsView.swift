import SwiftUI
import SwiftData

// MARK: - Sound Controls

/// Toggles for master sound, game categories, UI, achievements, haptics, and adaptive audio.
struct SoundControlsView: View {
    @Query private var profiles: [UserProfile]
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization

    private var L: AppStrings { localization.strings }
    private var profile: UserProfile? { profiles.first }
    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        VStack(spacing: 16) {
            masterToggle

            gamesSoundSection

            divider

            standaloneSoundToggle(
                icon: "hand.tap.fill",
                color: .cyan,
                title: L.uiInteractions,
                subtitle: L.buttonTapsNavigation,
                isOn: profile?.uiSoundsEnabled ?? true
            ) {
                profile?.uiSoundsEnabled.toggle()
            }

            standaloneSoundToggle(
                icon: "trophy.fill",
                color: .yellow,
                title: L.achievements,
                subtitle: L.levelUpFanfares,
                isOn: profile?.achievementSoundsEnabled ?? true
            ) {
                profile?.achievementSoundsEnabled.toggle()
            }

            divider

            standaloneSoundToggle(
                icon: "iphone.radiowaves.left.and.right",
                color: .pink,
                title: "Haptic Feedback",
                subtitle: "Vibrations & tactile response",
                isOn: profile?.hapticsEnabled ?? true
            ) {
                profile?.hapticsEnabled.toggle()
                HapticsService.shared.syncFromProfile(profile!)
            }

            standaloneSoundToggle(
                icon: "brain.head.profile",
                color: .teal,
                title: "Adaptive Audio",
                subtitle: "Auto-adjusts volume with usage",
                isOn: profile?.adaptiveAudioEnabled ?? true
            ) {
                profile?.adaptiveAudioEnabled.toggle()
            }
        }
        .animation(.easeInOut(duration: 0.3), value: profile?.soundEnabled)
    }

    // MARK: - Helpers

    private var divider: some View {
        Divider()
            .overlay(isDark ? Color.white.opacity(0.06) : Color.black.opacity(0.06))
            .padding(.horizontal, 8)
    }

    // MARK: - Master Toggle

    private var masterToggle: some View {
        HStack(spacing: 12) {
            Image(systemName: profile?.soundEnabled == true ? "speaker.wave.3.fill" : "speaker.slash.fill")
                .font(.system(size: 20))
                .foregroundStyle(
                    LinearGradient(
                        colors: [Color(hex: "#8b5cf6"), Color(hex: "#667eea")],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )
                .contentTransition(.symbolEffect(.replace))

            VStack(alignment: .leading, spacing: 2) {
                Text(L.masterSound)
                    .font(.system(size: 17, weight: .semibold))
                    .foregroundStyle(isDark ? .white : .caribbeanInk)
                Text(profile?.soundEnabled == true ? L.allSoundsEnabled : L.allSoundsMuted)
                    .font(.system(size: 13))
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanPlum)
            }

            Spacer()

            PremiumToggle(
                isOn: profile?.soundEnabled ?? true,
                enabledColor: Color(hex: "#8b5cf6"),
                enabledIcon: "speaker.wave.2.fill",
                disabledIcon: "speaker.slash.fill"
            ) {
                HapticsService.shared.toggleSwitch()
                if profile?.soundEnabled == true {
                    AudioService.shared.playToggleOff()
                } else {
                    AudioService.shared.playToggleOn()
                }
                handleMasterToggle()
            }
        }
    }

    private func handleMasterToggle() {
        guard let p = profile else { return }
        let newState = !p.soundEnabled
        withAnimation {
            p.soundEnabled = newState
            if !newState {
                p.gamesSoundsEnabled = false
                p.flashcardsSoundsEnabled = false
                p.grammarSoundsEnabled = false
                p.wordBuilderSoundsEnabled = false
                p.uiSoundsEnabled = false
                p.achievementSoundsEnabled = false
                p.ambientSoundsEnabled = false
                AudioService.shared.stopAmbient()
            } else {
                p.gamesSoundsEnabled = true
                p.flashcardsSoundsEnabled = true
                p.grammarSoundsEnabled = true
                p.wordBuilderSoundsEnabled = true
                p.uiSoundsEnabled = true
                p.achievementSoundsEnabled = true
            }
        }
    }

    // MARK: - Games Section

    private var gamesSoundSection: some View {
        VStack(spacing: 10) {
            HStack(spacing: 12) {
                Image(systemName: "gamecontroller.fill")
                    .font(.system(size: 16))
                    .foregroundStyle(.green)

                VStack(alignment: .leading, spacing: 2) {
                    Text(L.allGames)
                        .font(.system(size: 15, weight: .semibold))
                        .foregroundStyle(isDark ? .white : .caribbeanInk)
                    Text(L.toggleAllGameSounds)
                        .font(.system(size: 12))
                        .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanPlum)
                }

                Spacer()

                PremiumToggle(
                    isOn: profile?.gamesSoundsEnabled ?? true,
                    enabledColor: .green
                ) {
                    HapticsService.shared.toggleSwitch()
                    if profile?.gamesSoundsEnabled == true {
                        AudioService.shared.playToggleOff()
                    } else {
                        AudioService.shared.playToggleOn()
                    }
                    handleGamesParentToggle()
                }
            }

            VStack(spacing: 6) {
                childSoundToggle(
                    icon: "rectangle.portrait.on.rectangle.portrait.fill",
                    color: .cyan,
                    title: L.flashcardsSound,
                    isOn: profile?.flashcardsSoundsEnabled ?? true
                ) {
                    profile?.flashcardsSoundsEnabled.toggle()
                    syncGamesParent()
                }

                childSoundToggle(
                    icon: "text.book.closed.fill",
                    color: .orange,
                    title: L.grammarSound,
                    isOn: profile?.grammarSoundsEnabled ?? true
                ) {
                    profile?.grammarSoundsEnabled.toggle()
                    syncGamesParent()
                }

                childSoundToggle(
                    icon: "character.textbox",
                    color: .purple,
                    title: L.wordBuilderSound,
                    isOn: profile?.wordBuilderSoundsEnabled ?? true
                ) {
                    profile?.wordBuilderSoundsEnabled.toggle()
                    syncGamesParent()
                }
            }
            .padding(.leading, 20)
        }
    }

    private func handleGamesParentToggle() {
        guard let p = profile else { return }
        let newState = !p.gamesSoundsEnabled
        withAnimation {
            p.gamesSoundsEnabled = newState
            p.flashcardsSoundsEnabled = newState
            p.grammarSoundsEnabled = newState
            p.wordBuilderSoundsEnabled = newState
        }
    }

    private func syncGamesParent() {
        guard let p = profile else { return }
        let allOn = p.flashcardsSoundsEnabled && p.grammarSoundsEnabled && p.wordBuilderSoundsEnabled
        if p.gamesSoundsEnabled != allOn {
            withAnimation { p.gamesSoundsEnabled = allOn }
        }
    }

    // MARK: - Toggle Helpers

    private func childSoundToggle(
        icon: String,
        color: Color,
        title: String,
        isOn: Bool,
        action: @escaping () -> Void
    ) -> some View {
        HStack(spacing: 10) {
            Image(systemName: icon)
                .font(.system(size: 13))
                .foregroundStyle(color.opacity(isOn ? 1.0 : 0.4))
                .frame(width: 24)

            Text(title)
                .font(.system(size: 14, weight: .medium))
                .foregroundStyle(isDark ? .white.opacity(isOn ? 0.9 : 0.4) : (isOn ? .caribbeanInk : .caribbeanMist))

            Spacer()

            PremiumToggle(isOn: isOn, enabledColor: color) {
                HapticsService.shared.toggleSwitch()
                if isOn {
                    AudioService.shared.playToggleOff()
                } else {
                    AudioService.shared.playToggleOn()
                }
                withAnimation { action() }
            }
        }
        .padding(.vertical, 4)
    }

    private func standaloneSoundToggle(
        icon: String,
        color: Color,
        title: String,
        subtitle: String,
        isOn: Bool,
        action: @escaping () -> Void
    ) -> some View {
        HStack(spacing: 12) {
            Image(systemName: icon)
                .font(.system(size: 16))
                .foregroundStyle(color.opacity(isOn ? 1.0 : 0.4))

            VStack(alignment: .leading, spacing: 2) {
                Text(title)
                    .font(.system(size: 15, weight: .medium))
                    .foregroundStyle(isDark ? .white.opacity(isOn ? 1.0 : 0.5) : (isOn ? .caribbeanInk : .caribbeanMist))
                Text(subtitle)
                    .font(.system(size: 12))
                    .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
            }

            Spacer()

            PremiumToggle(isOn: isOn, enabledColor: color) {
                HapticsService.shared.toggleSwitch()
                if isOn {
                    AudioService.shared.playToggleOff()
                } else {
                    AudioService.shared.playToggleOn()
                }
                withAnimation { action() }
            }
        }
    }
}
