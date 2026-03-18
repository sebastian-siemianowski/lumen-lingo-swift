import SwiftUI
import SwiftData

// MARK: - Soundscape Now Playing

/// Premium mini-player widget on the dashboard.
/// Professional animated waveform, skip controls, persistent on pause.
struct SoundscapeNowPlaying: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(TierManager.self) private var tierManager
    @Query private var profiles: [UserProfile]

    @State private var isCollapsed = true
    @State private var barOffsets: [CGFloat] = Array(repeating: 0, count: 9)
    @State private var playPausePressed = false

    private var profile: UserProfile? { profiles.first }
    private var isDark: Bool { colorScheme == .dark }
    private let audio = AudioService.shared

    private var isVisible: Bool {
        tierManager.hasAccess(to: .soundscapes) && audio.activeSoundscape != nil
    }

    private var isPlaying: Bool { audio.isSoundscapePlaying }

    /// Ordered unlocked soundscapes for skip navigation
    private var unlockedSoundscapes: [Soundscape] {
        SoundscapeCategory.allCases
            .flatMap { $0.soundscapes }
            .filter { tierManager.isSoundscapeUnlocked($0) }
    }

    var body: some View {
        if isVisible, let soundscape = audio.activeSoundscape {
            CollapsibleSection(
                style: .miniPlayer,
                colors: Array(soundscape.previewColors.prefix(2)),
                isCollapsed: $isCollapsed,
                cornerRadius: 18,
                header: {
                    mainRow(soundscape)
                },
                content: {
                    expandedControls(soundscape)
                        .transition(.opacity.combined(with: .move(edge: .top)))
                }
            )
            .background(playerBackground(soundscape))
            .clipShape(RoundedRectangle(cornerRadius: 18, style: .continuous))
            .overlay(
                RoundedRectangle(cornerRadius: 18, style: .continuous)
                    .strokeBorder(
                        LinearGradient(
                            colors: soundscape.previewColors.map { $0.opacity(isDark ? 0.35 : 0.25) },
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        ),
                        lineWidth: 0.5
                    )
            )
            .shadow(color: soundscape.previewColors[0].opacity(isDark ? 0.25 : 0.12), radius: 16, y: 6)
            .animation(.easeInOut(duration: 0.55), value: soundscape)
            .transition(.asymmetric(
                insertion: .move(edge: .top).combined(with: .opacity),
                removal: .opacity
            ))
        }
    }

    // MARK: - Main Row

    private func mainRow(_ soundscape: Soundscape) -> some View {
        HStack(spacing: 12) {
            // Artwork + waveform overlay
            artworkWithWaveform(soundscape)

            // Title + subtitle
            VStack(alignment: .leading, spacing: 3) {
                Text(soundscape.displayName)
                    .font(.system(size: 15, weight: .semibold))
                    .foregroundStyle(isDark ? .white : .primary)
                    .lineLimit(1)
                    .contentTransition(.interpolate)

                Text(statusText(soundscape))
                    .font(.system(size: 11, weight: .medium))
                    .foregroundStyle(isDark ? .white.opacity(0.45) : .secondary)
                    .lineLimit(1)
                    .contentTransition(.interpolate)
            }

            Spacer(minLength: 4)

            // Transport controls
            transportControls(soundscape)
        }
        .padding(.horizontal, 14)
        .padding(.vertical, 12)
        .contentShape(Rectangle())
    }

    // MARK: - Artwork with Waveform Overlay

    private func artworkWithWaveform(_ soundscape: Soundscape) -> some View {
        ZStack {
            RoundedRectangle(cornerRadius: 12, style: .continuous)
                .fill(
                    LinearGradient(
                        colors: soundscape.previewColors,
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )
                .frame(width: 46, height: 46)
                .overlay(
                    RoundedRectangle(cornerRadius: 12, style: .continuous)
                        .fill(
                            LinearGradient(
                                colors: [.white.opacity(0.2), .clear, .black.opacity(0.1)],
                                startPoint: .top,
                                endPoint: .bottom
                            )
                        )
                )

            if isPlaying {
                // Animated waveform bars inside artwork
                liveWaveform()
            } else {
                // Static icon when paused
                Image(systemName: soundscape.icon)
                    .font(.system(size: 18, weight: .medium))
                    .foregroundStyle(.white)
                    .shadow(color: .black.opacity(0.25), radius: 3, y: 1)
            }
        }
    }

    // MARK: - Live Waveform (Professional Animated Bars)

    private func liveWaveform() -> some View {
        TimelineView(.animation(minimumInterval: 1.0 / 20.0)) { timeline in
            let t = timeline.date.timeIntervalSinceReferenceDate
            HStack(spacing: 2) {
                ForEach(0..<9, id: \.self) { i in
                    let fi = CGFloat(i)
                    // Each bar has its own frequency and phase for organic movement
                    let freq1 = 2.4 + fi * 0.35
                    let freq2 = 1.6 + fi * 0.22
                    let phase1 = fi * 0.7
                    let phase2 = fi * 1.1

                    let wave1 = sin(t * freq1 + phase1)
                    let wave2 = sin(t * freq2 + phase2)
                    let combined = (wave1 * 0.6 + wave2 * 0.4)

                    // Map to height: center bars taller, edges shorter (bell curve)
                    let bellCurve = 1.0 - abs(fi - 4.0) / 5.5
                    let minH: CGFloat = 3
                    let maxH: CGFloat = 18 * bellCurve + 6
                    let height = minH + (maxH - minH) * (CGFloat(combined) * 0.5 + 0.5)

                    RoundedRectangle(cornerRadius: 1.5)
                        .fill(.white.opacity(0.9))
                        .frame(width: 2.5, height: height)
                }
            }
            .frame(height: 24, alignment: .center)
        }
    }

    // MARK: - Transport Controls (Skip + Play/Pause)

    private func transportControls(_ soundscape: Soundscape) -> some View {
        HStack(spacing: 4) {
            // Previous
            skipButton(
                icon: "backward.fill",
                action: { skipToPrevious(from: soundscape) }
            )

            // Play/Pause — larger, gradient, delightful press animation
            Button {
                HapticsService.shared.buttonPress()
                withAnimation(.spring(response: 0.35, dampingFraction: 0.6)) {
                    playPausePressed = true
                }
                if isPlaying {
                    audio.pauseAmbient()
                } else {
                    audio.resumeAmbient()
                }
                DispatchQueue.main.asyncAfter(deadline: .now() + 0.2) {
                    withAnimation(.spring(response: 0.3, dampingFraction: 0.5)) {
                        playPausePressed = false
                    }
                }
            } label: {
                ZStack {
                    Circle()
                        .fill(
                            LinearGradient(
                                colors: soundscape.previewColors.prefix(2).map { $0 },
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            )
                        )
                        .frame(width: 40, height: 40)
                        .shadow(color: soundscape.previewColors[0].opacity(isPlaying ? 0.35 : 0.15), radius: isPlaying ? 6 : 3, y: 2)

                    Image(systemName: isPlaying ? "pause.fill" : "play.fill")
                        .font(.system(size: 15, weight: .bold))
                        .foregroundStyle(.white)
                        .offset(x: isPlaying ? 0 : 1)
                        .contentTransition(.symbolEffect(.replace))
                }
                .scaleEffect(playPausePressed ? 0.85 : 1.0)
            }
            .buttonStyle(.plain)
            .animation(.easeInOut(duration: 0.2), value: isPlaying)

            // Next
            skipButton(
                icon: "forward.fill",
                action: { skipToNext(from: soundscape) }
            )
        }
    }

    private func skipButton(icon: String, action: @escaping () -> Void) -> some View {
        Button {
            HapticsService.shared.buttonPress()
            action()
        } label: {
            Image(systemName: icon)
                .font(.system(size: 13, weight: .semibold))
                .foregroundStyle(isDark ? .white.opacity(0.7) : .primary.opacity(0.55))
                .frame(width: 34, height: 34)
                .contentShape(Circle())
        }
        .buttonStyle(.plain)
    }

    // MARK: - Expanded Controls

    private func expandedControls(_ soundscape: Soundscape) -> some View {
        VStack(spacing: 8) {
            // Volume slider
            HStack(spacing: 10) {
                Image(systemName: "speaker.fill")
                    .font(.system(size: 11))
                    .foregroundStyle(soundscape.previewColors[0].opacity(0.7))
                    .frame(width: 16)

                Slider(
                    value: Binding(
                        get: { profile?.ambientVolume ?? 0.3 },
                        set: { newValue in
                            profile?.ambientVolume = newValue
                            audio.ambientVolume = newValue
                        }
                    ),
                    in: 0...1,
                    step: 0.05
                )
                .tint(soundscape.previewColors[0])

                Image(systemName: "speaker.wave.3.fill")
                    .font(.system(size: 11))
                    .foregroundStyle(soundscape.previewColors[0].opacity(0.7))
                    .frame(width: 16)

                Text("\(Int((profile?.ambientVolume ?? 0.3) * 100))%")
                    .font(.system(size: 11, weight: .medium).monospacedDigit())
                    .foregroundStyle(isDark ? .white.opacity(0.45) : .secondary)
                    .frame(width: 32, alignment: .trailing)
            }

            // Stop & dismiss button
            Button {
                HapticsService.shared.buttonPress()
                withAnimation(.easeOut(duration: 0.25)) {
                    isCollapsed = true
                }
                audio.stopAmbient()
            } label: {
                HStack(spacing: 5) {
                    Image(systemName: "stop.fill")
                        .font(.system(size: 10, weight: .bold))
                    Text("Stop Soundscape")
                        .font(.system(size: 12, weight: .semibold))
                }
                .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
                .frame(maxWidth: .infinity)
                .padding(.vertical, 6)
                .background(
                    RoundedRectangle(cornerRadius: 8, style: .continuous)
                        .fill((isDark ? Color.white : Color.black).opacity(0.06))
                )
            }
            .buttonStyle(.plain)
        }
        .padding(.horizontal, 16)
        .padding(.bottom, 12)
        .padding(.top, 2)
    }

    // MARK: - Background

    private func playerBackground(_ soundscape: Soundscape) -> some View {
        ZStack {
            if isDark {
                Color(red: 20/255, green: 16/255, blue: 38/255).opacity(0.85)
            } else {
                Color(red: 248/255, green: 246/255, blue: 252/255).opacity(0.92)
            }

            LinearGradient(
                colors: soundscape.previewColors.map { $0.opacity(isDark ? 0.08 : 0.06) },
                startPoint: .leading,
                endPoint: .trailing
            )
        }
    }

    // MARK: - Skip Logic

    private func skipToNext(from current: Soundscape) {
        audio.skipToNextSoundscape()
        // Persist whatever AudioService landed on
        if let s = audio.activeSoundscape {
            profile?.soundscapeEnum = s
            profile?.soundscapeVariantIndex = audio.activeVariantIndex
        }
    }

    private func skipToPrevious(from current: Soundscape) {
        audio.skipToPreviousSoundscape()
        if let s = audio.activeSoundscape {
            profile?.soundscapeEnum = s
            profile?.soundscapeVariantIndex = audio.activeVariantIndex
        }
    }

    // MARK: - Helpers

    private func statusText(_ soundscape: Soundscape) -> String {
        guard isPlaying else { return "Paused" }
        let idx = audio.activeVariantIndex
        let variant = soundscape.variants[min(idx, soundscape.variants.count - 1)]
        return soundscape.hasMultipleVariants ? variant.label : soundscape.subtitle
    }
}
