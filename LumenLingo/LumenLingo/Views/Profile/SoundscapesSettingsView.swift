import SwiftUI
import SwiftData

// MARK: - Soundscapes Settings View

/// Immersive ambient soundscapes picker — replaces the old simple ambient toggle.
/// Shows categorized soundscape cards in horizontal scrolling rows with
/// a master enable toggle and volume slider.
struct SoundscapesSettingsView: View {
    @Query private var profiles: [UserProfile]
    @Environment(\.colorScheme) private var colorScheme
    @Environment(TierManager.self) private var tierManager

    @State private var lockedSoundscapeToShow: Soundscape?
    @State private var showAutoStopToast = false

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
        .animation(.spring(response: 0.3, dampingFraction: 0.85), value: profile?.soundscapeVariantIndex)
        .sheet(item: $lockedSoundscapeToShow) { soundscape in
            SoundscapeUpgradeSheet(soundscape: soundscape)
        }
        .overlay(alignment: .bottom) {
            if showAutoStopToast {
                autoStopToast
                    .transition(.move(edge: .bottom).combined(with: .opacity))
                    .padding(.bottom, 16)
            }
        }
        .onReceive(NotificationCenter.default.publisher(for: .soundscapeAutoStopped)) { _ in
            withAnimation(.spring(response: 0.4, dampingFraction: 0.8)) {
                showAutoStopToast = true
            }
            DispatchQueue.main.asyncAfter(deadline: .now() + 4.0) {
                withAnimation(.easeOut(duration: 0.3)) {
                    showAutoStopToast = false
                }
            }
        }
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
                        if let soundscape = profile?.soundscapeEnum,
                           tierManager.isSoundscapeUnlocked(soundscape) {
                            AudioService.shared.startSoundscape(soundscape, variantIndex: profile?.soundscapeVariantIndex ?? 0)
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
        let selectedInCategory = category.soundscapes.first { $0 == profile?.soundscapeEnum }
        let sorted = category.soundscapes.sorted { $0.sortOrder < $1.sortOrder }

        return VStack(alignment: .leading, spacing: 8) {
            // Category header
            HStack(spacing: 6) {
                Image(systemName: category.icon)
                    .font(.system(size: 12))
                    .foregroundStyle(categoryColor(category))
                Text(category.displayName)
                    .font(.system(size: 14, weight: .semibold))
                    .foregroundStyle(isDark ? .white.opacity(0.7) : .caribbeanInk.opacity(0.8))
            }
            .padding(.leading, 4)

            // Horizontal scroll of soundscape cards (sorted: unlocked first)
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: 10) {
                    ForEach(sorted) { soundscape in
                        soundscapeCard(soundscape)
                    }
                }
                .padding(.horizontal, 4)
                .padding(.vertical, 4)
            }

            // Variant picker — appears below the scroll when a multi-variant soundscape in this category is selected
            if let selected = selectedInCategory, selected.hasMultipleVariants {
                variantPicker(for: selected)
                    .transition(.opacity.combined(with: .move(edge: .top)))
            }
        }
    }

    // MARK: - Soundscape Card

    private func soundscapeCard(_ soundscape: Soundscape) -> some View {
        let isSelected = profile?.soundscapeEnum == soundscape
        let isLocked = !tierManager.isSoundscapeUnlocked(soundscape)

        return Button {
            if isLocked {
                handleLockedSoundscapeTap(soundscape)
            } else {
                handleSoundscapeTap(soundscape)
            }
        } label: {
            soundscapeCardContent(soundscape, isSelected: isSelected, isLocked: isLocked)
        }
        .buttonStyle(LumenPressStyle(weight: .soft))
    }

    private func soundscapeCardContent(_ soundscape: Soundscape, isSelected: Bool, isLocked: Bool) -> some View {
        let isPlaying = isSelected && AudioService.shared.isSoundscapePlaying
        let anySelected = profile?.soundscapeEnum != nil

        return VStack(spacing: 0) {
            soundscapePreview(soundscape, isSelected: isSelected, isPlaying: isPlaying, isLocked: isLocked)
            soundscapeInfo(soundscape, isSelected: isSelected, isLocked: isLocked)
        }
        .frame(width: 130)
        .clipShape(RoundedRectangle(cornerRadius: 14, style: .continuous))
        .overlay(soundscapeBorder(isSelected: isSelected))
        .opacity(isLocked ? (isDark ? 0.72 : 0.82) : (anySelected && !isSelected ? (isDark ? 0.55 : 0.78) : 1.0))
    }

    private func soundscapePreview(_ soundscape: Soundscape, isSelected: Bool, isPlaying: Bool, isLocked: Bool) -> some View {
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
            .saturation(isLocked ? 0.25 : 1.0)

            // Checkmark badge top-right (unlocked & selected)
            if isSelected && !isLocked {
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
                .foregroundStyle(.white.opacity(isLocked ? 0.4 : 0.8))
                .shadow(color: .black.opacity(0.3), radius: 4, y: 2)

            // Lock overlay for gated soundscapes
            if isLocked {
                Color.black.opacity(0.35)

                VStack(spacing: 4) {
                    Image(systemName: "lock.fill")
                        .font(.system(size: 16, weight: .semibold))
                        .foregroundStyle(.white.opacity(0.9))
                        .shadow(color: .black.opacity(0.5), radius: 4)

                    // Minimum tier badge
                    Text(soundscape.minimumTier.displayName.uppercased())
                        .font(.system(size: 8, weight: .heavy))
                        .tracking(0.5)
                        .foregroundStyle(.white)
                        .padding(.horizontal, 6)
                        .padding(.vertical, 2)
                        .background(
                            Capsule()
                                .fill(
                                    LinearGradient(
                                        colors: soundscape.minimumTier.gradientColors,
                                        startPoint: .leading,
                                        endPoint: .trailing
                                    )
                                )
                        )
                }
            }
        }
        .frame(height: 60)
        .clipped()
    }

    private func soundscapeInfo(_ soundscape: Soundscape, isSelected: Bool, isLocked: Bool) -> some View {
        VStack(spacing: 3) {
            Text(soundscape.displayName)
                .font(.system(size: 12, weight: .bold))
                .foregroundStyle(isDark ? .white.opacity(0.85) : .caribbeanInk)
                .lineLimit(1)
                .minimumScaleFactor(0.8)

            Text(soundscape.subtitle)
                .font(.system(size: 9))
                .foregroundStyle(isDark ? .white.opacity(0.45) : .caribbeanPlum)
                .lineLimit(2)
                .multilineTextAlignment(.center)
        }
        .padding(.horizontal, 6)
        .padding(.vertical, 8)
        .frame(maxWidth: .infinity, minHeight: 50, alignment: .top)
        .background(
            isDark
                ? Color(red: 25/255, green: 20/255, blue: 45/255).opacity(0.9)
                : Color.white
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
                        colors: isDark
                            ? [
                                Color.white.opacity(0.10),
                                Color.white.opacity(0.04)
                              ]
                            : [
                                Color(hex: "#8B5CF6").opacity(0.18),
                                Color(hex: "#C4B5FD").opacity(0.12)
                              ],
                        startPoint: .top,
                        endPoint: .bottom
                      ),
                lineWidth: isSelected ? 1.5 : (isDark ? 0.5 : 1.0)
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
        guard let soundscape = profile?.soundscapeEnum else { return nil }
        if soundscape.hasMultipleVariants {
            let idx = profile?.soundscapeVariantIndex ?? 0
            let variant = soundscape.variants[min(idx, soundscape.variants.count - 1)]
            return "\(soundscape.displayName) — \(variant.label)"
        }
        return soundscape.displayName
    }

    private func handleSoundscapeTap(_ soundscape: Soundscape) {
        HapticsService.shared.toggleSwitch()

        let wasSelected = profile?.soundscapeEnum == soundscape

        withAnimation(.spring(response: 0.35, dampingFraction: 0.8)) {
            if wasSelected {
                // Deselect — stop ambient
                profile?.soundscapeEnum = nil
                profile?.soundscapeVariantIndex = 0
                AudioService.shared.stopAmbient()
                AudioService.shared.playToggleOff()
            } else {
                let hadPrevious = profile?.soundscapeEnum != nil
                profile?.soundscapeEnum = soundscape
                profile?.soundscapeVariantIndex = 0
                AudioService.shared.playToggleOn()

                if hadPrevious {
                    AudioService.shared.crossfadeSoundscape(to: soundscape, variantIndex: 0)
                } else {
                    AudioService.shared.startSoundscape(soundscape, variantIndex: 0)
                }
            }
        }
    }

    private func handleLockedSoundscapeTap(_ soundscape: Soundscape) {
        HapticsService.shared.warning()

        // Play 3-second preview if not already previewed this session
        if !tierManager.hasPreviewedSoundscape(soundscape) {
            tierManager.markSoundscapePreviewed(soundscape)
            AudioService.shared.playPreview(soundscape: soundscape, duration: 3.0)
        }

        // Show upgrade sheet
        lockedSoundscapeToShow = soundscape
    }

    // MARK: - Auto-Stop Toast

    private var autoStopToast: some View {
        HStack(spacing: 10) {
            Image(systemName: "speaker.slash.fill")
                .font(.system(size: 14, weight: .semibold))
                .foregroundStyle(.white.opacity(0.9))

            VStack(alignment: .leading, spacing: 2) {
                Text("Soundscape paused")
                    .font(.system(size: 13, weight: .semibold))
                    .foregroundStyle(.white)
                Text("Upgrade to continue listening")
                    .font(.system(size: 11))
                    .foregroundStyle(.white.opacity(0.7))
            }

            Spacer()

            Button {
                withAnimation {
                    showAutoStopToast = false
                }
            } label: {
                Image(systemName: "xmark")
                    .font(.system(size: 11, weight: .bold))
                    .foregroundStyle(.white.opacity(0.6))
                    .padding(6)
            }
        }
        .padding(.horizontal, 14)
        .padding(.vertical, 10)
        .background(
            RoundedRectangle(cornerRadius: 12, style: .continuous)
                .fill(.ultraThinMaterial)
                .overlay(
                    RoundedRectangle(cornerRadius: 12, style: .continuous)
                        .fill(
                            LinearGradient(
                                colors: [Color(hex: "#6366F1").opacity(0.7), Color(hex: "#8B5CF6").opacity(0.5)],
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                )
        )
        .padding(.horizontal, 16)
    }

    // MARK: - Variant Picker

    private func variantPicker(for soundscape: Soundscape) -> some View {
        HStack(spacing: 8) {
            Image(systemName: "music.note.list")
                .font(.system(size: 11))
                .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)

            ForEach(soundscape.variants) { variant in
                variantPill(variant, soundscape: soundscape)
            }

            Spacer()
        }
        .padding(.horizontal, 8)
        .padding(.vertical, 6)
    }

    private func variantPill(_ variant: Soundscape.Variant, soundscape: Soundscape) -> some View {
        let isActive = (profile?.soundscapeVariantIndex ?? 0) == variant.id

        return Button {
            handleVariantTap(soundscape: soundscape, variant: variant)
        } label: {
            HStack(spacing: 4) {
                if isActive && AudioService.shared.isSoundscapePlaying {
                    Image(systemName: "waveform")
                        .font(.system(size: 9, weight: .semibold))
                        .symbolEffect(.variableColor.iterative, options: .repeating, isActive: true)
                }
                Text(variant.label)
                    .font(.system(size: 11, weight: isActive ? .semibold : .medium))
            }
            .foregroundStyle(
                isActive
                    ? .white
                    : (isDark ? .white.opacity(0.6) : .caribbeanInk.opacity(0.7))
            )
            .padding(.horizontal, 10)
            .padding(.vertical, 5)
            .background(
                Capsule()
                    .fill(
                        isActive
                            ? LinearGradient(colors: [.purple, .indigo], startPoint: .leading, endPoint: .trailing)
                            : LinearGradient(colors: [
                                isDark ? Color.white.opacity(0.08) : Color.black.opacity(0.05),
                                isDark ? Color.white.opacity(0.04) : Color.black.opacity(0.02)
                              ], startPoint: .leading, endPoint: .trailing)
                    )
            )
            .overlay(
                Capsule()
                    .strokeBorder(
                        isActive
                            ? Color.clear
                            : (isDark ? Color.white.opacity(0.1) : Color.black.opacity(0.08)),
                        lineWidth: 0.5
                    )
            )
        }
        .buttonStyle(.plain)
    }

    private func handleVariantTap(soundscape: Soundscape, variant: Soundscape.Variant) {
        let currentVariant = profile?.soundscapeVariantIndex ?? 0
        guard currentVariant != variant.id else { return }

        HapticsService.shared.toggleSwitch()
        withAnimation(.spring(response: 0.3, dampingFraction: 0.85)) {
            profile?.soundscapeVariantIndex = variant.id
        }
        AudioService.shared.crossfadeSoundscape(to: soundscape, variantIndex: variant.id)
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
