import SwiftUI
import SwiftData

// MARK: - Soundscape Now Playing

/// Premium mini-player widget on the dashboard.
/// Professional animated waveform, skip controls, persistent on pause.
struct SoundscapeNowPlaying: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(TierManager.self) private var tierManager
    @Query private var profiles: [UserProfile]

    @PersistedState("dashboard_soundscape_collapsed") private var isCollapsed = true
    @State private var barOffsets: [CGFloat] = Array(repeating: 0, count: 9)
    @State private var playPausePressed = false

    // Skip animation state — dreamscape choreography
    @State private var isSkipping = false
    @State private var skipDirection: CGFloat = 0
    @State private var artworkFloat: CGFloat = 0
    @State private var artworkTilt: Double = 0
    @State private var artworkGlow: CGFloat = 0
    @State private var artworkScale: CGFloat = 1.0
    @State private var cardBreath: CGFloat = 1.0
    @State private var cardRock: Double = 0
    @State private var auroraOffset: CGFloat = -0.3
    @State private var aurora2Offset: CGFloat = -0.3
    @State private var auroraOpacity: CGFloat = 0
    @State private var prevBtnScale: CGFloat = 1.0
    @State private var nextBtnScale: CGFloat = 1.0
    @State private var skipRingExpand: CGFloat = 0.3
    @State private var skipRingFade: CGFloat = 0
    @State private var bloomScale: CGFloat = 0.6
    @State private var bloomOpacity: CGFloat = 0
    @State private var textSlide: CGFloat = 0
    @State private var textBlur: CGFloat = 0
    @State private var playBtnResonance: CGFloat = 1.0

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
                colors: CollapsibleSectionTheme.soundscape(previewColors: soundscape.previewColors).gradientColors,
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
                            colors: soundscape.previewColors.map { $0.opacity(isDark ? 0.35 : 0.30) },
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        ),
                        lineWidth: isDark ? 0.5 : 1.0
                    )
            )
            .shadow(color: soundscape.previewColors[0].opacity(isDark ? 0.25 : 0.18), radius: isDark ? 16 : 12, y: isDark ? 6 : 4)
            .background(skipBloomHalo(soundscape))
            .overlay(skipAuroraOverlay(soundscape))
            .scaleEffect(cardBreath)
            .rotationEffect(.degrees(cardRock))
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

            // Title + subtitle — dreamy drift during skip
            VStack(alignment: .leading, spacing: 3) {
                Text(soundscape.displayName)
                    .font(.system(size: 15, weight: .semibold))
                    .foregroundStyle(isDark ? .white : .caribbeanInk)
                    .lineLimit(1)
                    .contentTransition(.interpolate)

                Text(statusText(soundscape))
                    .font(.system(size: 11, weight: .medium))
                    .foregroundStyle(isDark ? .white.opacity(0.45) : .caribbeanPlum)
                    .lineLimit(1)
                    .contentTransition(.interpolate)
            }
            .offset(x: textSlide)
            .blur(radius: textBlur)

            Spacer(minLength: 4)

            // Transport controls
            transportControls(soundscape)

            // Subtle collapse/expand chevron
            Image(systemName: "chevron.right")
                .font(.system(size: 8, weight: .bold))
                .foregroundStyle(
                    isCollapsed
                        ? AnyShapeStyle(LinearGradient(colors: Array(soundscape.previewColors.prefix(2)), startPoint: .top, endPoint: .bottom))
                        : AnyShapeStyle(Color.white.opacity(0.2))
                )
                .rotationEffect(.degrees(isCollapsed ? 0 : 90))
                .animation(.spring(response: 0.35, dampingFraction: 0.8), value: isCollapsed)
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
        // Dreamscape float & luminous tilt during skip
        .shadow(color: soundscape.previewColors[0].opacity(artworkGlow * 0.8), radius: 14, y: 0)
        .shadow(color: (soundscape.previewColors.count > 1 ? soundscape.previewColors[1] : soundscape.previewColors[0]).opacity(artworkGlow * 0.35), radius: 28, y: 0)
        .scaleEffect(artworkScale)
        .offset(y: artworkFloat)
        .rotation3DEffect(.degrees(artworkTilt), axis: (x: 0.15, y: 1, z: 0.05), perspective: 0.35)
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
            skipControlButton(
                icon: "backward.fill",
                direction: -1,
                soundscape: soundscape
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
                .scaleEffect((playPausePressed ? 0.85 : 1.0) * playBtnResonance)
            }
            .buttonStyle(.plain)
            .animation(.easeInOut(duration: 0.2), value: isPlaying)

            // Next
            skipControlButton(
                icon: "forward.fill",
                direction: 1,
                soundscape: soundscape
            )
        }
    }

    private func skipControlButton(icon: String, direction: CGFloat, soundscape: Soundscape) -> some View {
        let isNext = direction > 0
        let btnScale = isNext ? nextBtnScale : prevBtnScale
        let isActiveDir = (isNext && skipDirection > 0) || (!isNext && skipDirection < 0)

        return Button {
            performSkip(direction: direction, from: soundscape)
        } label: {
            ZStack {
                // Expanding glow ring on skip
                Circle()
                    .fill(
                        RadialGradient(
                            colors: [
                                soundscape.previewColors[0].opacity(0.5),
                                soundscape.previewColors[0].opacity(0.1),
                                .clear
                            ],
                            center: .center,
                            startRadius: 0,
                            endRadius: 22
                        )
                    )
                    .frame(width: 48, height: 48)
                    .scaleEffect(isActiveDir ? skipRingExpand : 0.3)
                    .opacity(isActiveDir ? skipRingFade : 0)

                Image(systemName: icon)
                    .font(.system(size: 13, weight: .semibold))
                    .foregroundStyle(isDark ? .white.opacity(0.7) : .caribbeanInk.opacity(0.6))
                    .frame(width: 34, height: 34)
            }
            .scaleEffect(btnScale)
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
                    .foregroundStyle(isDark ? .white.opacity(0.45) : .caribbeanPlum)
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
                .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanPlum)
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
                Color.white
            }

            LinearGradient(
                colors: soundscape.previewColors.map { $0.opacity(isDark ? 0.08 : 0.12) },
                startPoint: .leading,
                endPoint: .trailing
            )
        }
    }

    // MARK: - Aurora Shimmer Overlay (Dual-Band Bioluminescence)

    private func skipAuroraOverlay(_ soundscape: Soundscape) -> some View {
        let c1 = soundscape.previewColors[0]
        let c2 = soundscape.previewColors.count > 1 ? soundscape.previewColors[1] : c1

        return ZStack {
            // Primary aurora band — warm luminous sweep
            RoundedRectangle(cornerRadius: 18, style: .continuous)
                .fill(
                    LinearGradient(
                        stops: [
                            .init(color: .clear, location: max(0, min(1, auroraOffset - 0.28))),
                            .init(color: c1.opacity(0.06), location: max(0, min(1, auroraOffset - 0.12))),
                            .init(color: c2.opacity(0.22), location: max(0, min(1, auroraOffset))),
                            .init(color: c1.opacity(0.06), location: max(0, min(1, auroraOffset + 0.12))),
                            .init(color: .clear, location: max(0, min(1, auroraOffset + 0.28)))
                        ],
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )

            // Secondary aurora band — cooler ethereal layer
            RoundedRectangle(cornerRadius: 18, style: .continuous)
                .fill(
                    LinearGradient(
                        stops: [
                            .init(color: .clear, location: max(0, min(1, aurora2Offset - 0.2))),
                            .init(color: c2.opacity(0.04), location: max(0, min(1, aurora2Offset - 0.08))),
                            .init(color: c1.opacity(0.14), location: max(0, min(1, aurora2Offset))),
                            .init(color: c2.opacity(0.04), location: max(0, min(1, aurora2Offset + 0.08))),
                            .init(color: .clear, location: max(0, min(1, aurora2Offset + 0.2)))
                        ],
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .blendMode(.plusLighter)
        }
        .clipShape(RoundedRectangle(cornerRadius: 18, style: .continuous))
        .opacity(auroraOpacity)
        .allowsHitTesting(false)
    }

    // MARK: - Bloom Halo (Radiant Pulse Behind Card)

    private func skipBloomHalo(_ soundscape: Soundscape) -> some View {
        let c1 = soundscape.previewColors[0]
        let c2 = soundscape.previewColors.count > 1 ? soundscape.previewColors[1] : c1

        return Ellipse()
            .fill(
                RadialGradient(
                    colors: [
                        c1.opacity(0.35),
                        c2.opacity(0.15),
                        .clear
                    ],
                    center: .center,
                    startRadius: 5,
                    endRadius: 140
                )
            )
            .frame(width: 280, height: 80)
            .scaleEffect(bloomScale)
            .opacity(bloomOpacity)
            .blur(radius: 18)
    }

    // MARK: - Skip Choreography

    private func performSkip(direction: CGFloat, from soundscape: Soundscape) {
        guard !isSkipping else { return }
        isSkipping = true
        skipDirection = direction
        let isNext = direction > 0

        // ── 1. Ethereal haptic ──
        HapticsService.shared.buttonPress()

        // ── 2. Button melts down with weight ──
        withAnimation(.easeOut(duration: 0.15)) {
            if isNext { nextBtnScale = 0.65 } else { prevBtnScale = 0.65 }
        }

        // ── 3. Glow ring blooms outward ──
        skipRingExpand = 0.3
        skipRingFade = 0.9
        withAnimation(.easeOut(duration: 0.8)) {
            skipRingExpand = 2.8
            skipRingFade = 0
        }

        // ── 4. Card inhales — gentle levitation ──
        withAnimation(.easeInOut(duration: 0.5)) {
            cardBreath = 1.025
        }

        // ── 5. Card rocks gently — like resting on water ──
        withAnimation(.easeInOut(duration: 0.35)) {
            cardRock = direction * 0.8
        }

        // ── 6. Artwork levitates & sweeps toward horizon ──
        withAnimation(.spring(response: 0.4, dampingFraction: 0.7)) {
            artworkFloat = -7
            artworkTilt = direction * 28
            artworkGlow = 0.75
            artworkScale = 1.08
        }

        // ── 7. Bloom halo radiates behind card ──
        bloomScale = 0.6
        withAnimation(.easeOut(duration: 0.7)) {
            bloomScale = 1.4
            bloomOpacity = 1.0
        }

        // ── 8. Text drifts in skip direction with dreamy blur ──
        withAnimation(.easeOut(duration: 0.2)) {
            textSlide = direction * 6
            textBlur = 1.5
        }

        // ── 9. Primary aurora sweep — warm band ──
        auroraOffset = direction > 0 ? -0.3 : 1.3
        auroraOpacity = 1.0
        withAnimation(.easeInOut(duration: 0.85)) {
            auroraOffset = direction > 0 ? 1.3 : -0.3
        }

        // ── 10. Secondary aurora — staggered cooler wave ──
        aurora2Offset = direction > 0 ? -0.25 : 1.25
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.1) {
            withAnimation(.easeInOut(duration: 0.7)) {
                self.aurora2Offset = direction > 0 ? 1.25 : -0.25
            }
        }

        // ── 11. Play button sympathetic resonance ──
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.08) {
            withAnimation(.easeInOut(duration: 0.2)) {
                self.playBtnResonance = 0.92
            }
        }

        // ── 12. Fire the soundscape change ──
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.15) {
            if isNext {
                self.skipToNext(from: soundscape)
            } else {
                self.skipToPrevious(from: soundscape)
            }
        }

        // ── 13. Text clears — new title drifts in ──
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.2) {
            withAnimation(.spring(response: 0.6, dampingFraction: 0.75)) {
                self.textSlide = 0
                self.textBlur = 0
            }
        }

        // ── 14. Artwork floats home — dreamy settling ──
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.35) {
            withAnimation(.spring(response: 0.9, dampingFraction: 0.6)) {
                self.artworkFloat = 0
                self.artworkTilt = 0
                self.artworkScale = 1.0
            }
            withAnimation(.easeOut(duration: 0.6)) {
                self.artworkGlow = 0
            }
        }

        // ── 15. Play button settles ──
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.25) {
            withAnimation(.spring(response: 0.5, dampingFraction: 0.6)) {
                self.playBtnResonance = 1.0
            }
        }

        // ── 16. Skip button rebounds ──
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.22) {
            withAnimation(.spring(response: 0.55, dampingFraction: 0.5)) {
                if isNext { self.nextBtnScale = 1.0 } else { self.prevBtnScale = 1.0 }
            }
        }

        // ── 17. Card rocks back through center — pendulum on water ──
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.35) {
            withAnimation(.spring(response: 0.8, dampingFraction: 0.55)) {
                self.cardRock = -direction * 0.3
            }
        }

        // ── 18. Card exhales — comes to rest ──
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.6) {
            withAnimation(.easeInOut(duration: 0.6)) {
                self.cardBreath = 1.0
            }
            withAnimation(.spring(response: 0.7, dampingFraction: 0.7)) {
                self.cardRock = 0
            }
        }

        // ── 19. Bloom halo dissolves ──
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
            withAnimation(.easeOut(duration: 0.5)) {
                self.bloomOpacity = 0
            }
        }

        // ── 20. Aurora dissolves like morning mist ──
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.75) {
            withAnimation(.easeOut(duration: 0.4)) {
                self.auroraOpacity = 0
            }
        }

        // ── 21. Reset — ready for next journey ──
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.2) {
            self.isSkipping = false
            self.skipDirection = 0
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
