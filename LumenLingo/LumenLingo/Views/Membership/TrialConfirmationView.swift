import SwiftUI

// MARK: - Trial Confirmation View

/// Celebration screen presented as a full-screen cover after the user starts
/// the 14-day Royal Trial. Features particle confetti, a feature showcase,
/// and a warm welcome.
struct TrialConfirmationView: View {
    @Environment(\.dismiss) private var dismiss
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization

    @State private var showContent = false
    @State private var confettiPhase: CGFloat = 0
    @State private var glowPulse = false

    private var L: AppStrings { localization.strings }
    private var isDark: Bool { colorScheme == .dark }

    private let trialGradient: [Color] = [
        Color(hex: "#fbbf24"),
        Color(hex: "#a855f7"),
        Color(hex: "#ec4899")
    ]

    private let features: [(icon: String, text: String)] = [
        ("music.note.list", "All 12 Soundscapes"),
        ("globe", "25+ Language Pairs"),
        ("infinity", "Unlimited Practice"),
        ("paintpalette.fill", "All Visual Themes"),
        ("arrow.down.circle.fill", "Offline Mode"),
        ("waveform.path", "6 Quantum Flow Scenes")
    ]

    var body: some View {
        ZStack {
            // Background
            backgroundGradient

            // Confetti particles
            confettiOverlay

            // Main content
            ScrollView(showsIndicators: false) {
                VStack(spacing: 28) {
                    Spacer(minLength: 50)

                    // Crown hero
                    crownHero

                    // Title
                    titleSection

                    // Feature list
                    featureList

                    // Duration info
                    durationCard

                    // Dismiss CTA
                    dismissButton

                    Spacer(minLength: 40)
                }
                .padding(.horizontal, 24)
            }
        }
        .onAppear {
            triggerHaptic()
            withAnimation(.spring(response: 0.6, dampingFraction: 0.7).delay(0.2)) {
                showContent = true
            }
            withAnimation(.linear(duration: 20).repeatForever(autoreverses: false)) {
                confettiPhase = 1
            }
            withAnimation(.easeInOut(duration: 2).repeatForever()) {
                glowPulse = true
            }
        }
    }

    // MARK: - Background

    private var backgroundGradient: some View {
        LinearGradient(
            colors: isDark
                ? [Color(hex: "#0a0a1a"), Color(hex: "#1a0a2e"), Color(hex: "#0a0a1a")]
                : [Color(hex: "#fef3c7"), Color(hex: "#fce7f3"), Color(hex: "#f5f3ff")],
            startPoint: .top,
            endPoint: .bottom
        )
        .ignoresSafeArea()
    }

    // MARK: - Confetti

    private var confettiOverlay: some View {
        GeometryReader { geo in
            ForEach(0..<30, id: \.self) { i in
                ConfettiParticle(
                    index: i,
                    phase: confettiPhase,
                    bounds: geo.size,
                    colors: trialGradient + [.cyan, .green, .orange]
                )
            }
        }
        .ignoresSafeArea()
        .allowsHitTesting(false)
    }

    // MARK: - Crown Hero

    private var crownHero: some View {
        ZStack {
            // Glow ring
            Circle()
                .fill(
                    RadialGradient(
                        colors: [trialGradient[1].opacity(0.3), .clear],
                        center: .center,
                        startRadius: 30,
                        endRadius: 80
                    )
                )
                .frame(width: 160, height: 160)
                .scaleEffect(glowPulse ? 1.15 : 1.0)

            // Gradient circle
            Circle()
                .fill(
                    LinearGradient(
                        colors: trialGradient,
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )
                .frame(width: 100, height: 100)
                .shadow(color: trialGradient[0].opacity(0.4), radius: 20, y: 6)

            // Crown icon
            Image(systemName: "crown.fill")
                .font(.system(size: 44))
                .foregroundStyle(.white)
                .shadow(color: .black.opacity(0.2), radius: 4, y: 2)
        }
        .scaleEffect(showContent ? 1.0 : 0.3)
        .opacity(showContent ? 1.0 : 0)
    }

    // MARK: - Title

    private var titleSection: some View {
        VStack(spacing: 10) {
            Text(L.trialActivated)
                .font(.system(size: 32, weight: .black))
                .foregroundStyle(
                    LinearGradient(
                        colors: trialGradient,
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )

            Text(L.trialWelcomeMessage)
                .font(.subheadline)
                .foregroundStyle(isDark ? .white.opacity(0.65) : .secondary)
                .multilineTextAlignment(.center)
        }
        .offset(y: showContent ? 0 : 20)
        .opacity(showContent ? 1 : 0)
    }

    // MARK: - Features

    private var featureList: some View {
        VStack(spacing: 0) {
            ForEach(Array(features.enumerated()), id: \.offset) { index, feature in
                HStack(spacing: 14) {
                    Image(systemName: feature.icon)
                        .font(.title3)
                        .foregroundStyle(
                            LinearGradient(
                                colors: trialGradient,
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            )
                        )
                        .frame(width: 32)

                    Text(feature.text)
                        .font(.subheadline.weight(.medium))
                        .foregroundStyle(isDark ? .white.opacity(0.85) : .primary)

                    Spacer()

                    Image(systemName: "checkmark.circle.fill")
                        .font(.caption)
                        .foregroundStyle(.green.opacity(0.8))
                }
                .padding(.vertical, 12)
                .padding(.horizontal, 16)

                if index < features.count - 1 {
                    Divider()
                        .overlay(isDark ? Color.white.opacity(0.05) : Color.clear)
                        .padding(.leading, 62)
                }
            }
        }
        .background(
            RoundedRectangle(cornerRadius: 18)
                .fill(.ultraThinMaterial)
                .overlay(
                    RoundedRectangle(cornerRadius: 18)
                        .strokeBorder(.white.opacity(0.08), lineWidth: 1)
                )
        )
        .offset(y: showContent ? 0 : 30)
        .opacity(showContent ? 1 : 0)
    }

    // MARK: - Duration Card

    private var durationCard: some View {
        HStack(spacing: 12) {
            Image(systemName: "calendar.badge.clock")
                .font(.title2)
                .foregroundStyle(trialGradient[0])

            VStack(alignment: .leading, spacing: 2) {
                Text(L.trialDuration)
                    .font(.subheadline.bold())
                    .foregroundStyle(isDark ? .white : .primary)

                Text(L.trialAfterExpiry)
                    .font(.caption)
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
            }

            Spacer()
        }
        .padding(16)
        .background(
            RoundedRectangle(cornerRadius: 14)
                .fill(trialGradient[0].opacity(isDark ? 0.08 : 0.12))
                .overlay(
                    RoundedRectangle(cornerRadius: 14)
                        .strokeBorder(trialGradient[0].opacity(0.2), lineWidth: 1)
                )
        )
        .offset(y: showContent ? 0 : 20)
        .opacity(showContent ? 1 : 0)
    }

    // MARK: - Dismiss

    private var dismissButton: some View {
        Button {
            AudioService.shared.playTierSelect()
            HapticsService.shared.buttonPress()
            dismiss()
        } label: {
            Text(L.trialStartExploring)
                .font(.headline)
                .foregroundStyle(.white)
                .frame(maxWidth: .infinity)
                .padding(.vertical, 16)
                .background(
                    Capsule()
                        .fill(
                            LinearGradient(
                                colors: trialGradient,
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                        .shadow(color: trialGradient[1].opacity(0.4), radius: 16, y: 6)
                )
        }
        .scaleEffect(showContent ? 1.0 : 0.9)
        .opacity(showContent ? 1 : 0)
    }

    // MARK: - Haptic

    private func triggerHaptic() {
        HapticsService.shared.celebrate()
    }
}

// MARK: - Confetti Particle

private struct ConfettiParticle: View {
    let index: Int
    let phase: CGFloat
    let bounds: CGSize
    let colors: [Color]

    private var seed: Double { Double(index) * 137.5 }
    private var color: Color { colors[index % colors.count] }
    private var size: CGFloat { CGFloat(4 + (seed.truncatingRemainder(dividingBy: 6))) }

    var body: some View {
        let heightMultiplier = CGFloat(1.0 + seed.truncatingRemainder(dividingBy: 3.0) / 3.0)
        RoundedRectangle(cornerRadius: size > 7 ? 2 : size / 2)
            .fill(color)
            .frame(width: size, height: size * heightMultiplier)
            .rotationEffect(.degrees(Double(phase) * 360.0 * (index.isMultiple(of: 2) ? 1.0 : -1.0)))
            .position(
                x: xPosition,
                y: yPosition
            )
            .opacity(opacityValue)
    }

    private var xPosition: CGFloat {
        let base = CGFloat(seed.truncatingRemainder(dividingBy: Double(bounds.width)))
        let sway = CGFloat(sin(Double(phase) * .pi * 4.0 + seed) * 30.0)
        return base + sway
    }

    private var yPosition: CGFloat {
        let start: CGFloat = -20.0
        let end = bounds.height + 20.0
        let progress = (phase + CGFloat(seed.truncatingRemainder(dividingBy: 1.0))).truncatingRemainder(dividingBy: 1.0)
        return start + (end - start) * progress
    }

    private var opacityValue: Double {
        let progress = (phase + CGFloat(seed.truncatingRemainder(dividingBy: 1.0))).truncatingRemainder(dividingBy: 1.0)
        // Fade in at the top, fade out at the bottom
        if progress < 0.1 { return Double(progress / 0.1) * 0.7 }
        if progress > 0.85 { return Double(1 - (progress - 0.85) / 0.15) * 0.7 }
        return 0.7
    }
}
