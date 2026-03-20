import SwiftUI

// MARK: - Theme

enum ProgressBarEffect {
    case flowing    // Animated gradient position shift (Flashcards)
    case heartbeat  // Subtle pulse at fill edge (Grammar)
    case fireTrail  // Warm glow at fill edge (Word Builder)
}

struct GameHeaderTheme {
    let gradientColors: [Color]
    let scoreIcon: String
    let progressEffect: ProgressBarEffect

    static let flashcards = GameHeaderTheme(
        gradientColors: [Color(hex: "#667eea"), Color(hex: "#06b6d4"), Color(hex: "#0d9488")],
        scoreIcon: "bolt.circle.fill",
        progressEffect: .flowing
    )

    static let grammar = GameHeaderTheme(
        gradientColors: [Color(hex: "#f093fb"), Color(hex: "#f5576c"), Color(hex: "#e11d48")],
        scoreIcon: "brain.fill",
        progressEffect: .heartbeat
    )

    static let wordBuilder = GameHeaderTheme(
        gradientColors: [Color(hex: "#fbbf24"), Color(hex: "#f97316"), Color(hex: "#ef4444")],
        scoreIcon: "star.circle.fill",
        progressEffect: .fireTrail
    )
}

// MARK: - GameHeader

struct GameHeader: View {
    let categoryName: String
    let score: Int
    let correctCount: Int
    let wrongCount: Int
    let streakCount: Int
    let currentQuestion: Int
    let totalQuestions: Int
    let progressFraction: Double
    let theme: GameHeaderTheme
    let onBack: () -> Void

    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization
    @Environment(\.horizontalSizeClass) private var sizeClass

    // Animation state
    @State private var correctScale: CGFloat = 1.0
    @State private var correctGlow: Bool = false
    @State private var wrongShake: CGFloat = 0
    @State private var wrongGlow: Bool = false
    @State private var streakScale: CGFloat = 1.0
    @State private var streakIntensity: Bool = false
    @State private var effectPhase: CGFloat = 0

    private var isDark: Bool { colorScheme == .dark }
    private var L: AppStrings { localization.strings }
    private var isCompact: Bool { sizeClass == .compact }

    private var gameGradient: LinearGradient {
        LinearGradient(colors: theme.gradientColors, startPoint: .leading, endPoint: .trailing)
    }

    var body: some View {
        VStack(spacing: 10) {
            // Top row: back – category – score
            HStack {
                Button {
                    HapticsService.shared.navTransition()
                    onBack()
                } label: {
                    Image(systemName: "chevron.left")
                        .font(.body.bold())
                        .foregroundStyle(gameGradient)
                        .frame(width: 36, height: 36)
                        .background(.ultraThinMaterial, in: Circle())
                }

                Spacer()

                Text(categoryName)
                    .font(.headline)
                    .foregroundStyle(gameGradient)

                Spacer()

                // Score badge with game-specific icon
                HStack(spacing: 4) {
                    Image(systemName: theme.scoreIcon)
                        .foregroundStyle(theme.gradientColors.first ?? .yellow)
                    Text("\(score)")
                        .font(.title3.bold())
                        .foregroundStyle(isDark ? .white : .caribbeanInk)
                        .contentTransition(.numericText())
                        .animation(.spring(duration: 0.4), value: score)
                }
                .padding(.horizontal, 12)
                .padding(.vertical, 6)
                .background(.ultraThinMaterial, in: Capsule())
                .overlay(
                    Capsule()
                        .stroke(gameGradient, lineWidth: 0.5)
                )
            }

            // Progress bar with themed effect
            themedProgressBar
                .animation(.easeOut(duration: 0.5), value: progressFraction)

            // Stats row
            HStack(spacing: isCompact ? 12 : 16) {
                statPill(icon: "checkmark.circle.fill", value: "\(correctCount)", color: .green)
                    .scaleEffect(correctScale)
                    .shadow(color: correctGlow ? .green.opacity(0.6) : .clear, radius: correctGlow ? 8 : 0)

                statPill(icon: "xmark.circle.fill", value: "\(wrongCount)", color: .orange)
                    .offset(x: wrongShake)
                    .shadow(color: wrongGlow ? .orange.opacity(0.6) : .clear, radius: wrongGlow ? 8 : 0)

                if streakCount > 0 {
                    let streakColor: Color = streakCount >= 5 ? .red : streakCount >= 3 ? .orange : .yellow
                    HStack(spacing: 3) {
                        Image(systemName: "flame.fill")
                            .font(.system(size: isCompact ? 10 : 12, weight: .bold))
                            .foregroundStyle(streakIntensity ? .red : streakColor)
                        Text("\(streakCount)")
                            .font(isCompact ? .caption2.bold() : .caption.bold())
                            .foregroundStyle(isDark ? .white.opacity(0.8) : .caribbeanInk)
                    }
                    .padding(.horizontal, isCompact ? 8 : 10)
                    .padding(.vertical, 3)
                    .glassEffect(
                        .regular.tint(streakColor.opacity(0.2)),
                        in: .capsule
                    )
                    .scaleEffect(streakScale)
                    .transition(.scale.combined(with: .opacity))
                }

                Spacer()

                HStack(spacing: 3) {
                    Image(systemName: "number.circle.fill")
                        .font(.system(size: isCompact ? 10 : 12, weight: .bold))
                        .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanMist)
                    Text("\(currentQuestion)/\(totalQuestions)")
                        .font(isCompact ? .caption : .footnote)
                        .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanMist)
                }
            }
            .animation(.spring(duration: 0.3), value: streakCount)
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 12)
        .background {
            if isDark {
                RoundedRectangle(cornerRadius: 20)
                    .fill(.ultraThinMaterial)
            } else {
                ZStack {
                    RoundedRectangle(cornerRadius: 20)
                        .fill(.thinMaterial)
                    RoundedRectangle(cornerRadius: 20)
                        .fill(Color.white.opacity(0.25))
                }
            }
        }
        .overlay {
            if isDark {
                RoundedRectangle(cornerRadius: 20)
                    .stroke(gameGradient, lineWidth: 0.5)
            } else {
                RoundedRectangle(cornerRadius: 20)
                    .strokeBorder(
                        LinearGradient(
                            colors: [
                                Color.white.opacity(0.70),
                                Color.white.opacity(0.40),
                                Color.white.opacity(0.60)
                            ],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        ),
                        lineWidth: 0.75
                    )
            }
        }
        .shadow(
            color: isDark
                ? .black.opacity(0.15)
                : Color(red: 0.55, green: 0.50, blue: 0.68).opacity(0.10),
            radius: isDark ? 4 : 6,
            y: isDark ? 2 : 3
        )
        .padding(.horizontal, 4)
        .padding(.bottom, 8)
        .onAppear {
            withAnimation(.linear(duration: 2.0).repeatForever(autoreverses: false)) {
                effectPhase = 1.0
            }
        }
        .onChange(of: correctCount) {
            withAnimation(.spring(duration: 0.3)) {
                correctScale = 1.2
                correctGlow = true
            }
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) {
                withAnimation(.spring(duration: 0.2)) {
                    correctScale = 1.0
                    correctGlow = false
                }
            }
        }
        .onChange(of: wrongCount) {
            wrongGlow = true
            withAnimation(.linear(duration: 0.05)) { wrongShake = 2 }
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.05) {
                withAnimation(.linear(duration: 0.05)) { wrongShake = -2 }
            }
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.10) {
                withAnimation(.linear(duration: 0.05)) { wrongShake = 2 }
            }
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.15) {
                withAnimation(.linear(duration: 0.05)) { wrongShake = -2 }
            }
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.20) {
                withAnimation(.linear(duration: 0.05)) { wrongShake = 2 }
            }
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.25) {
                withAnimation(.linear(duration: 0.05)) { wrongShake = 0 }
            }
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) {
                wrongGlow = false
            }
        }
        .onChange(of: streakCount) {
            guard streakCount > 0 else { return }
            withAnimation(.spring(duration: 0.2)) {
                streakScale = 1.3
                streakIntensity = true
            }
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.4) {
                withAnimation(.spring(duration: 0.2)) {
                    streakScale = 1.0
                    streakIntensity = false
                }
            }
        }
    }

    // MARK: - Themed Progress Bar

    @ViewBuilder
    private var themedProgressBar: some View {
        let barHeight: CGFloat = isDark ? 5 : 6
        GeometryReader { geo in
            let fillWidth = max(0, geo.size.width * min(progressFraction, 1.0))
            ZStack(alignment: .leading) {
                // Track
                if isDark {
                    Capsule()
                        .fill(.white.opacity(0.08))
                } else {
                    // Frost trough — recessed glass channel with inner shadow depth
                    ZStack {
                        Capsule()
                            .fill(Color(red: 0.88, green: 0.91, blue: 0.94))
                        // Inner shadow — top-dark to bottom-light for carved depth
                        Capsule()
                            .fill(
                                LinearGradient(
                                    colors: [
                                        Color.black.opacity(0.05),
                                        Color.clear,
                                        Color.white.opacity(0.25)
                                    ],
                                    startPoint: .top,
                                    endPoint: .bottom
                                )
                            )
                        // Glass rim — catches light at the trough edge
                        Capsule()
                            .strokeBorder(Color.white.opacity(0.65), lineWidth: 0.5)
                    }
                }

                // Fill
                Capsule()
                    .fill(progressFill(width: fillWidth))
                    .frame(width: fillWidth)
                    .overlay {
                        // Frost highlight — light catching the liquid surface
                        if !isDark {
                            VStack(spacing: 0) {
                                Capsule()
                                    .fill(
                                        LinearGradient(
                                            colors: [Color.white.opacity(0.50), Color.white.opacity(0.05)],
                                            startPoint: .top,
                                            endPoint: .bottom
                                        )
                                    )
                                    .frame(height: barHeight * 0.38)
                                    .padding(.horizontal, 1.5)
                                    .padding(.top, 0.5)
                                Spacer(minLength: 0)
                            }
                        }
                    }
                    .overlay(progressEffectOverlay(fillWidth: fillWidth, totalWidth: geo.size.width))
                    .clipShape(Capsule())
                    .shadow(
                        color: isDark
                            ? .clear
                            : (theme.gradientColors.first ?? .blue).opacity(0.30),
                        radius: 4, x: 0, y: 1.5
                    )
            }
        }
        .frame(height: barHeight)
    }

    private func progressFill(width: CGFloat) -> some ShapeStyle {
        switch theme.progressEffect {
        case .flowing:
            // Animated gradient position for flowing water effect
            return AnyShapeStyle(
                LinearGradient(
                    colors: theme.gradientColors + [theme.gradientColors.first ?? .blue],
                    startPoint: UnitPoint(x: -0.5 + Double(effectPhase), y: 0),
                    endPoint: UnitPoint(x: 0.5 + Double(effectPhase), y: 0)
                )
            )
        case .heartbeat, .fireTrail:
            return AnyShapeStyle(
                LinearGradient(
                    colors: theme.gradientColors,
                    startPoint: .leading,
                    endPoint: .trailing
                )
            )
        }
    }

    @ViewBuilder
    private func progressEffectOverlay(fillWidth: CGFloat, totalWidth: CGFloat) -> some View {
        switch theme.progressEffect {
        case .flowing:
            // Inner highlight shimmer
            Capsule()
                .fill(
                    LinearGradient(
                        colors: isDark
                            ? [.clear, .white.opacity(0.3), .clear]
                            : [.clear, (theme.gradientColors.first ?? .blue).opacity(0.15), .clear],
                        startPoint: UnitPoint(x: -0.3 + Double(effectPhase) * 1.3, y: 0),
                        endPoint: UnitPoint(x: 0.0 + Double(effectPhase) * 1.3, y: 0)
                    )
                )
                .frame(height: 2)

        case .heartbeat:
            // Subtle pulse at fill edge
            if fillWidth > 4 {
                HStack {
                    Spacer()
                    Circle()
                        .fill(theme.gradientColors.last ?? .pink)
                        .frame(width: 6, height: 6)
                        .scaleEffect(0.8 + 0.4 * Foundation.sin(Double(effectPhase) * .pi * 2))
                        .opacity(0.6 + 0.4 * Foundation.sin(Double(effectPhase) * .pi * 2))
                        .shadow(
                            color: (theme.gradientColors.last ?? .pink).opacity(0.5),
                            radius: 3 + 2 * Foundation.sin(Double(effectPhase) * .pi * 2)
                        )
                }
                .frame(width: fillWidth)
            }

        case .fireTrail:
            // Warm glow at fill edge
            if fillWidth > 4 {
                HStack {
                    Spacer()
                    Circle()
                        .fill(
                            RadialGradient(
                                colors: [
                                    isDark ? .white.opacity(0.6) : (theme.gradientColors.first ?? .orange).opacity(0.5),
                                    (theme.gradientColors.first ?? .orange).opacity(0.3),
                                    .clear
                                ],
                                center: .center,
                                startRadius: 0,
                                endRadius: 8
                            )
                        )
                        .frame(width: 10, height: 10)
                        .shadow(color: (theme.gradientColors.first ?? .orange).opacity(0.6), radius: 4)
                }
                .frame(width: fillWidth)
            }
        }
    }

    // MARK: - Stat Pill

    private func statPill(icon: String, value: String, color: Color) -> some View {
        HStack(spacing: 3) {
            Image(systemName: icon)
                .font(.system(size: isCompact ? 10 : 12, weight: .bold))
                .foregroundStyle(color)
            Text(value)
                .font(isCompact ? .caption2.bold() : .caption.bold())
                .foregroundStyle(isDark ? .white.opacity(0.8) : .caribbeanInk)
        }
        .padding(.horizontal, isCompact ? 8 : 10)
        .padding(.vertical, 3)
        .glassEffect(.regular.tint(color.opacity(0.2)), in: .capsule)
    }
}
