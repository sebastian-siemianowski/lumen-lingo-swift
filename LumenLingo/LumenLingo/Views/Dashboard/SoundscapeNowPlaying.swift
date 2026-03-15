import SwiftUI

// MARK: - Soundscape Now Playing

/// Mini player widget on the dashboard showing the currently playing soundscape.
/// Only visible for Pro+ tiers when a soundscape is active.
struct SoundscapeNowPlaying: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(TierManager.self) private var tierManager

    @State private var wavePhase: CGFloat = 0

    private var isDark: Bool { colorScheme == .dark }
    private let audio = AudioService.shared

    private var isVisible: Bool {
        tierManager.hasAccess(to: .soundscapes) && audio.activeSoundscape != nil
    }

    var body: some View {
        if isVisible, let soundscape = audio.activeSoundscape {
            HStack(spacing: 12) {
                // Soundscape icon with gradient background
                ZStack {
                    Circle()
                        .fill(
                            LinearGradient(
                                colors: tierManager.tierGradientColors,
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            ).opacity(0.2)
                        )
                        .frame(width: 40, height: 40)

                    Image(systemName: soundscape.icon)
                        .font(.system(size: 16, weight: .semibold))
                        .foregroundStyle(
                            LinearGradient(
                                colors: tierManager.tierGradientColors,
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                }

                // Title + subtitle
                VStack(alignment: .leading, spacing: 2) {
                    Text(soundscape.displayName)
                        .font(.system(size: 14, weight: .semibold))
                        .foregroundStyle(isDark ? .white : .primary)
                        .lineLimit(1)

                    // Audio wave indicator
                    HStack(spacing: 2) {
                        ForEach(0..<4, id: \.self) { i in
                            RoundedRectangle(cornerRadius: 1)
                                .fill(
                                    LinearGradient(
                                        colors: tierManager.tierGradientColors,
                                        startPoint: .bottom,
                                        endPoint: .top
                                    )
                                )
                                .frame(width: 3, height: audio.isSoundscapePlaying ? waveHeight(for: i) : 3)
                                .animation(
                                    .easeInOut(duration: 0.4 + Double(i) * 0.1)
                                        .repeatForever(autoreverses: true)
                                        .delay(Double(i) * 0.08),
                                    value: wavePhase
                                )
                        }

                        Text(audio.isSoundscapePlaying ? "Playing" : "Paused")
                            .font(.system(size: 11))
                            .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
                            .padding(.leading, 4)
                    }
                }

                Spacer()

                // Play/Pause button
                Button {
                    HapticsService.shared.buttonPress()
                    if audio.isSoundscapePlaying {
                        audio.stopAmbient()
                    } else {
                        audio.startSoundscape(soundscape)
                    }
                } label: {
                    ZStack {
                        Circle()
                            .fill(isDark ? .white.opacity(0.1) : .black.opacity(0.05))
                            .frame(width: 36, height: 36)

                        Image(systemName: audio.isSoundscapePlaying ? "pause.fill" : "play.fill")
                            .font(.system(size: 14, weight: .semibold))
                            .foregroundStyle(
                                LinearGradient(
                                    colors: tierManager.tierGradientColors,
                                    startPoint: .leading,
                                    endPoint: .trailing
                                )
                            )
                    }
                }
                .buttonStyle(.plain)
            }
            .padding(12)
            .background(GlassCardBackground())
            .transition(.asymmetric(
                insertion: .move(edge: .top).combined(with: .opacity),
                removal: .opacity
            ))
        }
    }

    private func waveHeight(for index: Int) -> CGFloat {
        let heights: [CGFloat] = [8, 14, 10, 12]
        return heights[index]
    }
}
