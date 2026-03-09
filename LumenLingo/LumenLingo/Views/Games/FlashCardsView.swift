import SwiftUI
import SwiftData
import Foundation

// MARK: - FlashCards Game View

/// Interactive flashcard game with 3D card flip animation,
/// "Got It" / "Still Learning" self-assessment, and glassmorphic design.
struct FlashCardsView: View {
    let categoryId: String

    @Environment(\.modelContext) private var modelContext
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.dismiss) private var dismiss
    @Environment(AudioService.self) private var audioService
    @Environment(HapticsService.self) private var hapticsService
    @Environment(ContentLoader.self) private var contentLoader
    @Environment(\.localization) private var localization

    private var L: AppStrings { localization.strings }

    @Binding var hideTabBar: Bool

    @Query private var profiles: [UserProfile]
    @Query private var languagePrefs: [LanguagePreference]

    @State private var words: [FlashcardWord] = []
    @State private var currentIndex: Int = 0
    @State private var isFlipped: Bool = false
    @State private var score: Int = 0
    @State private var correctCount: Int = 0
    @State private var wrongCount: Int = 0
    @State private var streak: Int = 0
    @State private var isGameComplete: Bool = false
    @State private var showButtons: Bool = false
    @State private var cardTransitionId: UUID = UUID()
    @State private var isLoading: Bool = true
    @State private var categoryName: String = ""
    @State private var isProcessingAnswer: Bool = false
    @State private var successAura: Bool = false
    @State private var wrongFlash: Bool = false
    @State private var answerGlow: Color = .clear
    @State private var answerGlowOpacity: Double = 0

    // Dopamine particles
    @State private var luminousMotes: [LuminousMote] = []
    @State private var streakPulse: CGFloat = 1.0
    @State private var borderBreathPhase: CGFloat = 0
    @State private var displayedScore: Int = 0

    // Animated floating icon states
    @State private var frontGlowPhase: CGFloat = 0
    @State private var frontGlowPhase2: CGFloat = 0
    @State private var sparkleRotation: Double = 0
    @State private var sparkleScale: CGFloat = 1.0
    @State private var sparkleOpacity: Double = 0.55
    @State private var bulbScale: CGFloat = 1.0
    @State private var bulbOpacity: Double = 0.5
    @State private var cloudOffset: CGFloat = 0
    @State private var cloudOpacity: Double = 0.4
    @State private var moonOffset: CGFloat = 0
    @State private var moonOpacity: Double = 0.45
    @State private var moonRotation: Double = 0
    @State private var windOffset: CGFloat = 0
    @State private var windOpacity: Double = 0.35
    // Back side animated states
    @State private var backGlowPhase: CGFloat = 0
    @State private var backGlowPhase2: CGFloat = 0
    @State private var starRotation: Double = 0
    @State private var starScale: CGFloat = 1.0
    @State private var starOpacity: Double = 0.6
    @State private var heartScale: CGFloat = 1.0
    @State private var heartOpacity: Double = 0.55
    @State private var flowerRotation: Double = 0
    @State private var flowerScale: CGFloat = 1.0
    @State private var flowerOffset: CGFloat = 0
    @State private var flowerOpacity: Double = 0.6
    @State private var backSparkleRotation: Double = 0
    @State private var backSparkleScale: CGFloat = 1.0
    @State private var backSparkleOffset: CGFloat = 0
    @State private var backSparkleOpacity: Double = 0.55
    @State private var boltScale: CGFloat = 1.0
    @State private var boltRotation: Double = 0
    @State private var boltOpacity: Double = 0.55

    private var currentWord: FlashcardWord? {
        guard currentIndex < words.count else { return nil }
        return words[currentIndex]
    }

    private var isDark: Bool { colorScheme == .dark }

    private var progress: Double {
        guard !words.isEmpty else { return 0 }
        return Double(currentIndex) / Double(words.count)
    }

    var body: some View {
        ZStack {
            if isLoading {
                loadingView
            } else if isGameComplete {
                gameCompleteView
            } else if let word = currentWord {
                gameplayView(word: word)
            } else {
                emptyStateView
            }
        }
        .cosmicBackground()
        .navigationBarBackButtonHidden()
        .toolbar(.hidden, for: .navigationBar)
        .onAppear {
            hideTabBar = true
            loadContent()
        }
        .onDisappear {
            hideTabBar = false
        }
    }

    // MARK: - Loading

    private var loadingView: some View {
        VStack(spacing: 20) {
            ProgressView()
                .scaleEffect(1.5)
                .tint(.white)
            Text(L.loadingCards)
                .font(.headline)
                .foregroundStyle(isDark ? .white.opacity(0.7) : .caribbeanPlum)
        }
    }

    // MARK: - Gameplay

    private func gameplayView(word: FlashcardWord) -> some View {
        ZStack {
            VStack(spacing: 0) {
                // Exercise header
                exerciseHeader

                Spacer()

                // Flashcard
                flashcard(word: word)
                    .id(cardTransitionId)
                    .transition(.asymmetric(
                        insertion: .scale(scale: 0.9).combined(with: .opacity),
                        removal: .scale(scale: 0.95).combined(with: .opacity)
                    ))
                    .animation(.spring(response: 0.5, dampingFraction: 0.8), value: cardTransitionId)

                // Action buttons (appear after flip)
                actionButtons
                    .opacity(showButtons ? 1 : 0)
                    .allowsHitTesting(showButtons)
                    .animation(.easeInOut(duration: 0.35), value: showButtons)

                Spacer()
            }
            .padding(.horizontal, 20)

            // Answer feedback glow — hugs the card area
            RoundedRectangle(cornerRadius: 32)
                .fill(
                    RadialGradient(
                        colors: [answerGlow.opacity(0.35), answerGlow.opacity(0.08), .clear],
                        center: .center,
                        startRadius: 20,
                        endRadius: 220
                    )
                )
                .frame(width: 380, height: 420)
                .blur(radius: 30)
                .opacity(answerGlowOpacity)
                .allowsHitTesting(false)
                .animation(.easeOut(duration: 0.35), value: answerGlowOpacity)

            // Luminous motes — drift upward on correct answers
            ForEach(luminousMotes) { mote in
                Circle()
                    .fill(
                        RadialGradient(
                            colors: [mote.color.opacity(0.8), mote.color.opacity(0.2), .clear],
                            center: .center,
                            startRadius: 0,
                            endRadius: mote.size
                        )
                    )
                    .frame(width: mote.size * 2, height: mote.size * 2)
                    .position(x: mote.x, y: mote.y)
                    .opacity(mote.opacity)
                    .blur(radius: mote.size * 0.3)
                    .allowsHitTesting(false)
            }
        }
    }

    // (Success/wrong overlays removed — replaced with card-centric glow)

    // MARK: - Exercise Header

    private var exerciseHeader: some View {
        VStack(spacing: 12) {
            HStack {
                Button {
                    dismiss()
                } label: {
                    HStack(spacing: 6) {
                        Image(systemName: "chevron.left")
                        Text(L.back)
                    }
                    .font(.subheadline)
                    .foregroundStyle(isDark ? .white.opacity(0.7) : .caribbeanPlum)
                }

                Spacer()

                Text(categoryName)
                    .font(.subheadline.bold())
                    .foregroundStyle(isDark ? .white : .caribbeanInk)

                Spacer()

                // Score badge
                HStack(spacing: 4) {
                    Image(systemName: "bolt.fill")
                        .foregroundStyle(.yellow)
                    Text("\(displayedScore)")
                        .font(.subheadline.bold())
                        .foregroundStyle(isDark ? .white : .caribbeanInk)
                        .contentTransition(.numericText())
                }
                .padding(.horizontal, 10)
                .padding(.vertical, 5)
                .glassEffect(.regular.tint(.yellow.opacity(0.1)), in: .capsule)
            }

            // Progress bar
            AnimatedProgressBar(
                progress: progress * 100,
                height: 4,
                gradient: [Color(hex: "#667eea"), Color(hex: "#06b6d4"), Color(hex: "#0d9488")]
            )

            // Stats badges
            HStack(spacing: 16) {
                statPill(icon: "checkmark", value: "\(correctCount)", color: .green)
                statPill(icon: "xmark", value: "\(wrongCount)", color: .orange)
                if streak > 0 {
                    HStack(spacing: 3) {
                        Image(systemName: "flame.fill")
                            .font(.system(size: 10, weight: .bold))
                            .foregroundStyle(
                                streak >= 5 ? .red :
                                streak >= 3 ? .orange : .yellow
                            )
                        Text("\(streak)")
                            .font(.caption2.bold())
                            .foregroundStyle(isDark ? .white.opacity(0.8) : .caribbeanInk)
                    }
                    .padding(.horizontal, 8)
                    .padding(.vertical, 3)
                    .glassEffect(
                        .regular.tint(
                            (streak >= 5 ? Color.red : streak >= 3 ? .orange : .yellow).opacity(0.2)
                        ),
                        in: .capsule
                    )
                    .scaleEffect(streakPulse)
                }
                Spacer()
                Text("\(currentIndex + 1)/\(words.count)")
                    .font(.caption)
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanMist)
            }
        }
        .padding(.top, 8)
    }

    private func statPill(icon: String, value: String, color: Color) -> some View {
        HStack(spacing: 3) {
            Image(systemName: icon)
                .font(.system(size: 10, weight: .bold))
                .foregroundStyle(color)
            Text(value)
                .font(.caption2.bold())
                .foregroundStyle(isDark ? .white.opacity(0.8) : .caribbeanInk)
        }
        .padding(.horizontal, 8)
        .padding(.vertical, 3)
        .glassEffect(.regular.tint(color.opacity(0.2)), in: .capsule)
    }

    // MARK: - Flashcard

    @State private var floatPhase: CGFloat = 0
    @State private var rippleScale: CGFloat = 0
    @State private var showRipple: Bool = false
    @State private var cardWidth: CGFloat = 400

    // Tranquil micro-feedback
    @State private var microScale: CGFloat = 1.0
    @State private var borderGlowColor: Color = .clear
    @State private var borderGlowOpacity: Double = 0

    private func flashcard(word: FlashcardWord) -> some View {
        ZStack {
            // Ripple effect on flip — always present, driven by opacity
            Circle()
                .fill(
                    RadialGradient(
                        colors: [
                            Color(hex: "#c084fc").opacity(0.4),
                            Color(hex: "#8b5cf6").opacity(0.2),
                            .clear
                        ],
                        center: .center,
                        startRadius: 0,
                        endRadius: 175
                    )
                )
                .scaleEffect(rippleScale)
                .opacity(showRipple ? (1 - rippleScale) : 0)
                .blur(radius: 35 * max(0, 1 - rippleScale))
                .allowsHitTesting(false)

            // Single glass card — one transparent layer throughout the flip.
            liquidGlassCard {
                ZStack {
                    // Front content
                    frontContent(word: word)
                        .opacity(isFlipped ? 0 : 1)
                        .animation(.easeInOut(duration: 0.01).delay(0.28), value: isFlipped)

                    // Back content — counter-rotated so text reads correctly when card is flipped
                    backContent(word: word)
                        .rotation3DEffect(.degrees(180), axis: (x: 0, y: 1, z: 0))
                        .opacity(isFlipped ? 1 : 0)
                        .animation(.easeInOut(duration: 0.01).delay(0.28), value: isFlipped)
                }
            }
            .rotation3DEffect(
                .degrees(isFlipped ? 180 : 0),
                axis: (x: 0, y: 1, z: 0),
                perspective: 0.4
            )
            .animation(.easeInOut(duration: 0.55), value: isFlipped)

            // Soft border glow on answer — hugs card edges
            RoundedRectangle(cornerRadius: 32)
                .strokeBorder(borderGlowColor, lineWidth: 2)
                .opacity(borderGlowOpacity)
                .blur(radius: 6)
                .allowsHitTesting(false)

            RoundedRectangle(cornerRadius: 32)
                .strokeBorder(borderGlowColor, lineWidth: 1)
                .opacity(borderGlowOpacity * 0.6)
                .allowsHitTesting(false)
        }
        .frame(maxWidth: 500)
        .frame(height: 360)
        .contentShape(Rectangle())
        .background(
            GeometryReader { geo in
                Color.clear.onAppear { cardWidth = geo.size.width }
            }
        )
        // Tranquil scale breathe
        .scaleEffect(microScale)
        .offset(y: Foundation.sin(Double(floatPhase)) * 3)
        .gesture(
            SpatialTapGesture()
                .onEnded { value in
                    if !isFlipped {
                        flipCard()
                    } else if showButtons {
                        let tapX = value.location.x
                        let mid = cardWidth / 2
                        if tapX > mid {
                            triggerMicroFeedback(color: .green)
                            handleAnswer(correct: true)
                        } else {
                            triggerMicroFeedback(color: .orange)
                            handleAnswer(correct: false)
                        }
                    }
                }
        )
        .onAppear {
            withAnimation(.easeInOut(duration: 4).repeatForever(autoreverses: true)) {
                floatPhase = .pi * 2
            }
            withAnimation(.easeInOut(duration: 3).repeatForever(autoreverses: true)) {
                borderBreathPhase = .pi * 2
            }
        }
    }

    // MARK: - Card Front Content (text only, no glass)

    private func frontContent(word: FlashcardWord) -> some View {
        VStack(spacing: 0) {
            Spacer()

            Text(word.front)
                .font(.system(size: dynamicFontSize(for: word.front), weight: .bold))
                .foregroundStyle(
                    LinearGradient(
                        colors: isDark
                            ? [Color(hex: "#60a5fa"), Color(hex: "#a78bfa"), Color(hex: "#c084fc")]
                            : [Color(hex: "#6366f1"), Color(hex: "#a855f7"), Color(hex: "#ec4899")],
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .shadow(color: isDark ? .black.opacity(0.6) : Color(hex: "#a855f7").opacity(0.15), radius: 4, x: 0, y: 2)
                .shadow(color: isDark ? .black.opacity(0.3) : .clear, radius: 12, x: 0, y: 4)
                .multilineTextAlignment(.center)
                .padding(.horizontal, 32)

            if let example = word.exampleTranslation, !example.isEmpty {
                Text(example)
                    .font(.subheadline.weight(.medium))
                    .foregroundStyle(isDark ? .white.opacity(0.70) : .caribbeanPlum)
                    .shadow(color: isDark ? .black.opacity(0.5) : .clear, radius: 3, x: 0, y: 1)
                    .italic()
                    .multilineTextAlignment(.center)
                    .padding(.horizontal, 32)
                    .padding(.top, 14)
            }

            Spacer()

            HStack(spacing: 6) {
                Image(systemName: "arrow.counterclockwise")
                Text(L.tapToReveal)
            }
            .font(.caption.weight(.medium))
            .foregroundStyle(isDark ? .white.opacity(0.55) : .caribbeanMist)
            .shadow(color: isDark ? .black.opacity(0.4) : .clear, radius: 3, x: 0, y: 1)
            .padding(.bottom, 28)
        }
        .onAppear { startFrontAnimations() }
    }

    // MARK: - Card Back Content (text only, no glass)

    private func backContent(word: FlashcardWord) -> some View {
        VStack(spacing: 0) {
            Spacer()

            Text(word.back)
                .font(.system(size: dynamicFontSize(for: word.back), weight: .bold))
                .foregroundStyle(
                    LinearGradient(
                        colors: isDark
                            ? [Color(hex: "#34d399"), Color(hex: "#22d3ee"), Color(hex: "#60a5fa")]
                            : [Color(hex: "#059669"), Color(hex: "#0891b2"), Color(hex: "#7c3aed")],
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .shadow(color: isDark ? .black.opacity(0.6) : Color(hex: "#0891b2").opacity(0.15), radius: 4, x: 0, y: 2)
                .shadow(color: isDark ? .black.opacity(0.3) : .clear, radius: 12, x: 0, y: 4)
                .multilineTextAlignment(.center)
                .padding(.horizontal, 32)

            // Thin glowing divider
            Capsule()
                .fill(
                    LinearGradient(
                        colors: [.clear, .white.opacity(0.45), .clear],
                        startPoint: .leading, endPoint: .trailing
                    )
                )
                .frame(width: 80, height: 1)
                .shadow(color: .white.opacity(0.3), radius: 4)
                .padding(.top, 18)

            if let example = word.example, !example.isEmpty {
                Text("\"\(example)\"")
                    .font(.subheadline.weight(.medium))
                    .foregroundStyle(isDark ? .white.opacity(0.80) : .caribbeanPlum)
                    .shadow(color: isDark ? .black.opacity(0.5) : .clear, radius: 3, x: 0, y: 1)
                    .italic()
                    .multilineTextAlignment(.center)
                    .padding(.horizontal, 32)
                    .padding(.top, 14)
            }

            if let translation = word.exampleTranslation, !translation.isEmpty {
                Text(translation)
                    .font(.caption.weight(.medium))
                    .foregroundStyle(isDark ? .white.opacity(0.55) : .caribbeanMist)
                    .shadow(color: isDark ? .black.opacity(0.4) : .clear, radius: 3, x: 0, y: 1)
                    .multilineTextAlignment(.center)
                    .padding(.horizontal, 32)
                    .padding(.top, 6)
            }

            Spacer()

            // Word pair footer pill
            HStack(spacing: 6) {
                Text(word.front)
                    .foregroundStyle(isDark ? .white.opacity(0.65) : .caribbeanPlum)
                Image(systemName: "arrow.right")
                    .foregroundStyle(isDark ? .white.opacity(0.40) : .caribbeanMist)
                Text(word.back)
                    .foregroundStyle(isDark ? .white.opacity(0.90) : .caribbeanInk)
            }
            .font(.caption.weight(.medium))
            .shadow(color: isDark ? .black.opacity(0.4) : .clear, radius: 3, x: 0, y: 1)
            .padding(.horizontal, 14)
            .padding(.vertical, 7)
            .background(Capsule().fill(.white.opacity(0.12)))
            .overlay(Capsule().strokeBorder(.white.opacity(0.20), lineWidth: 0.5))
            .padding(.bottom, 24)
        }
        .onAppear { startBackAnimations() }
    }

    // MARK: - Transparent Glass Card

    private func liquidGlassCard<Content: View>(@ViewBuilder content: () -> Content) -> some View {
        content()
            .frame(maxWidth: .infinity)
            .frame(height: 360)
            .background {
                ZStack {
                    // Crystal-clear frosted glass — cosmic background shines through
                    RoundedRectangle(cornerRadius: 32)
                        .fill(.ultraThinMaterial)
                        .opacity(0.18)

                    // Inner light refraction — soft prismatic glow
                    RoundedRectangle(cornerRadius: 32)
                        .fill(
                            LinearGradient(
                                colors: [
                                    Color.white.opacity(0.06),
                                    Color.clear,
                                    Color.white.opacity(0.03),
                                ],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            )
                        )

                    // Iridescent border — breathes gently
                    RoundedRectangle(cornerRadius: 32)
                        .strokeBorder(
                            AngularGradient(
                                stops: [
                                    .init(color: Color.white.opacity(0.55), location: 0.00),
                                    .init(color: Color(hex: "#a5f3fc").opacity(0.45), location: 0.12),
                                    .init(color: Color(hex: "#818cf8").opacity(0.50), location: 0.28),
                                    .init(color: Color(hex: "#f9a8d4").opacity(0.40), location: 0.42),
                                    .init(color: Color.white.opacity(0.60), location: 0.55),
                                    .init(color: Color(hex: "#fde68a").opacity(0.40), location: 0.68),
                                    .init(color: Color(hex: "#6ee7b7").opacity(0.45), location: 0.82),
                                    .init(color: Color.white.opacity(0.55), location: 1.00),
                                ],
                                center: .center
                            ),
                            lineWidth: 1.0 + 0.3 * Foundation.sin(Double(borderBreathPhase))
                        )
                        .opacity(0.7 + 0.3 * Foundation.sin(Double(borderBreathPhase)))

                    // Secondary inner border for depth
                    RoundedRectangle(cornerRadius: 31)
                        .strokeBorder(
                            Color.white.opacity(0.08),
                            lineWidth: 0.5
                        )
                        .padding(1)

                    // Top rim specular highlight
                    VStack {
                        Capsule()
                            .fill(
                                LinearGradient(
                                    colors: [.clear, .white.opacity(0.55), .white.opacity(0.55), .clear],
                                    startPoint: .leading,
                                    endPoint: .trailing
                                )
                            )
                            .frame(height: 1)
                            .padding(.horizontal, 32)
                        Spacer()
                    }

                    // Bottom edge subtle highlight
                    VStack {
                        Spacer()
                        Capsule()
                            .fill(
                                LinearGradient(
                                    colors: [.clear, .white.opacity(0.12), .clear],
                                    startPoint: .leading,
                                    endPoint: .trailing
                                )
                            )
                            .frame(height: 0.5)
                            .padding(.horizontal, 48)
                    }
                }
            }
            .clipShape(RoundedRectangle(cornerRadius: 32))
            .shadow(color: .black.opacity(0.25), radius: 35, x: 0, y: 16)
            .shadow(color: Color(hex: "#818cf8").opacity(0.12), radius: 30, x: 0, y: 8)
            .shadow(color: Color.white.opacity(0.04), radius: 1, x: 0, y: -1)
    }

    // MARK: - Action Buttons

    private var actionButtons: some View {
        HStack(spacing: 14) {
            // Still Learning
            Button {
                handleAnswer(correct: false)
            } label: {
                HStack(spacing: 10) {
                    Image(systemName: "arrow.counterclockwise")
                        .font(.system(size: 14, weight: .bold))
                        .foregroundStyle(.white)
                        .frame(width: 32, height: 32)
                        .background(
                            Circle()
                                .fill(.white.opacity(0.20))
                                .overlay(
                                    Circle()
                                        .strokeBorder(.white.opacity(0.30), lineWidth: 0.75)
                                )
                        )

                    Text(L.stillLearning)
                        .font(.subheadline.bold())
                        .foregroundStyle(.white)
                }
                .padding(.horizontal, 20)
                .padding(.vertical, 14)
                .frame(maxWidth: .infinity)
                .background(
                    RoundedRectangle(cornerRadius: 28)
                        .fill(
                            LinearGradient(
                                colors: [Color(hex: "#f59e0b"), Color(hex: "#f43f5e")],
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                        .overlay(
                            RoundedRectangle(cornerRadius: 28)
                                .fill(
                                    LinearGradient(
                                        colors: [.white.opacity(0.25), .clear],
                                        startPoint: .top,
                                        endPoint: .bottom
                                    )
                                )
                        )
                        .overlay(
                            RoundedRectangle(cornerRadius: 28)
                                .strokeBorder(.white.opacity(0.25), lineWidth: 0.75)
                        )
                )
                .shadow(color: Color(hex: "#f43f5e").opacity(0.35), radius: 12, x: 0, y: 4)
            }
            .buttonStyle(LumenPressStyle(weight: .medium, accentColor: Color(hex: "#f43f5e")))

            // Got It
            Button {
                handleAnswer(correct: true)
            } label: {
                HStack(spacing: 10) {
                    Image(systemName: "checkmark")
                        .font(.system(size: 14, weight: .bold))
                        .foregroundStyle(.white)
                        .frame(width: 32, height: 32)
                        .background(
                            Circle()
                                .fill(.white.opacity(0.20))
                                .overlay(
                                    Circle()
                                        .strokeBorder(.white.opacity(0.30), lineWidth: 0.75)
                                )
                        )

                    Text(L.gotIt)
                        .font(.subheadline.bold())
                        .foregroundStyle(.white)
                }
                .padding(.horizontal, 20)
                .padding(.vertical, 14)
                .frame(maxWidth: .infinity)
                .background(
                    RoundedRectangle(cornerRadius: 28)
                        .fill(
                            LinearGradient(
                                colors: [Color(hex: "#10b981"), Color(hex: "#06b6d4")],
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                        .overlay(
                            RoundedRectangle(cornerRadius: 28)
                                .fill(
                                    LinearGradient(
                                        colors: [.white.opacity(0.25), .clear],
                                        startPoint: .top,
                                        endPoint: .bottom
                                    )
                                )
                        )
                        .overlay(
                            RoundedRectangle(cornerRadius: 28)
                                .strokeBorder(.white.opacity(0.25), lineWidth: 0.75)
                        )
                )
                .shadow(color: Color(hex: "#10b981").opacity(0.35), radius: 12, x: 0, y: 4)
            }
            .buttonStyle(LumenPressStyle(weight: .medium, accentColor: Color(hex: "#10b981")))
        }
        .padding(.top, 20)
    }

    // MARK: - Game Complete

    private var gameCompleteView: some View {
        GameCompleteView(
            score: score,
            correctAnswers: correctCount,
            wrongAnswers: wrongCount,
            totalQuestions: words.count,
            gameType: .flashCards,
            categoryName: categoryName,
            onPlayAgain: { resetGame() },
            onDismiss: { dismiss() }
        )
    }

    // MARK: - Empty State

    private var emptyStateView: some View {
        VStack(spacing: 16) {
            Image(systemName: "tray")
                .font(.system(size: 48))
                .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
            Text(L.noCardsAvailable)
                .font(.headline)
                .foregroundStyle(isDark ? .white.opacity(0.7) : .caribbeanPlum)
            Button(L.goBack) { dismiss() }
                .buttonStyle(.bordered)
                .tint(isDark ? .white : .caribbeanInk)
        }
    }

    // MARK: - Logic

    private func loadContent() {
        let langPref = languagePrefs.first
        let source = langPref?.sourceLanguage ?? SupportedLanguage.english.rawValue
        let target = langPref?.targetLanguage ?? SupportedLanguage.spanish.rawValue

        Task {
            let categories = await contentLoader.loadFlashcardCategories(source: source, target: target)
            if let category = categories.first(where: { $0.id == categoryId }) {
                self.words = category.items
                self.categoryName = category.name
            }
            isLoading = false
        }
    }

    private func flipCard() {
        guard !isFlipped else { return }

        audioService.playPlink()
        hapticsService.lightImpact()

        // Gentle press-in
        withAnimation(.easeOut(duration: 0.1)) {
            microScale = 0.985
        }
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.1) {
            withAnimation(.easeOut(duration: 0.5)) {
                microScale = 1.0
            }
        }

        // Single animation drives both rotation + content swap
        isFlipped = true

        // Trigger ripple
        showRipple = true
        withAnimation(.easeOut(duration: 0.45)) {
            rippleScale = 1.0
        }
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
            showRipple = false
            rippleScale = 0
        }

        DispatchQueue.main.asyncAfter(deadline: .now() + 0.35) {
            withAnimation(.easeOut(duration: 0.35)) {
                showButtons = true
            }
        }
    }

    private func triggerMicroFeedback(color: Color) {
        // Soft press
        withAnimation(.easeOut(duration: 0.1)) {
            microScale = 0.99
        }
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.1) {
            withAnimation(.easeOut(duration: 0.6)) {
                microScale = 1.0
            }
        }

        // Soft border glow pulse
        borderGlowColor = color
        withAnimation(.easeOut(duration: 0.15)) {
            borderGlowOpacity = 1.0
        }
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.4) {
            withAnimation(.easeOut(duration: 0.5)) {
                borderGlowOpacity = 0
            }
        }
    }

    private func handleAnswer(correct: Bool) {
        guard !isProcessingAnswer else { return }
        isProcessingAnswer = true

        if correct {
            correctCount += 1
            score += 10
            streak += 1
            audioService.playWarmPulse()

            // Varied haptics based on streak
            if streak >= 5 && streak % 5 == 0 {
                hapticsService.success()
            } else {
                hapticsService.lightImpact()
            }

            // Animate score counter
            animateScoreUp(by: 10)

            // Streak pulse — gentle glow on milestones
            if streak >= 3 {
                withAnimation(.easeOut(duration: 0.2)) {
                    streakPulse = 1.15
                }
                DispatchQueue.main.asyncAfter(deadline: .now() + 0.2) {
                    withAnimation(.easeOut(duration: 0.6)) {
                        streakPulse = 1.0
                    }
                }
            }

            // Green glow around the card
            answerGlow = .green
            answerGlowOpacity = 1.0
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.7) {
                withAnimation(.easeOut(duration: 0.4)) {
                    answerGlowOpacity = 0
                }
            }

            // Spawn luminous motes
            spawnMotes(count: streak >= 5 ? 6 : streak >= 3 ? 4 : 3, color: .green)

            // Mark mastered
            if let word = currentWord {
                let progressService = ProgressService(modelContext: modelContext)
                let langPref = languagePrefs.first
                progressService.markContentMastered(
                    gameType: .flashCards,
                    category: categoryId,
                    contentID: word.id,
                    source: langPref?.sourceLanguage ?? "english",
                    target: langPref?.targetLanguage ?? "spanish"
                )
            }
        } else {
            wrongCount += 1
            streak = 0
            audioService.playSoftNudge()
            hapticsService.lightImpact()

            // Orange glow around the card
            answerGlow = .orange
            answerGlowOpacity = 1.0
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
                withAnimation(.easeOut(duration: 0.3)) {
                    answerGlowOpacity = 0
                }
            }
        }

        // Advance after brief pause
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.9) {
            advanceCard()
        }
    }

    private func advanceCard() {
        withAnimation(.easeInOut(duration: 0.45)) {
            showButtons = false
            isFlipped = false
        }

        DispatchQueue.main.asyncAfter(deadline: .now() + 0.35) {
            if currentIndex + 1 >= words.count {
                completeGame()
            } else {
                withAnimation(.easeInOut(duration: 0.3)) {
                    currentIndex += 1
                    cardTransitionId = UUID()
                }
            }
            isProcessingAnswer = false
        }
    }

    // MARK: - Dopamine Helpers

    private func spawnMotes(count: Int, color: Color) {
        let screenWidth = UIScreen.main.bounds.width
        let centerY = UIScreen.main.bounds.height * 0.45

        for i in 0..<count {
            let delay = Double(i) * 0.08
            let moteColor: Color = [
                color,
                color.opacity(0.8),
                .white
            ].randomElement() ?? color

            var mote = LuminousMote(
                x: screenWidth * CGFloat.random(in: 0.2...0.8),
                y: centerY + CGFloat.random(in: -40...40),
                size: CGFloat.random(in: 3...7),
                opacity: 0,
                color: moteColor
            )

            DispatchQueue.main.asyncAfter(deadline: .now() + delay) {
                luminousMotes.append(mote)
                let moteId = mote.id

                // Fade in
                withAnimation(.easeOut(duration: 0.3)) {
                    if let idx = luminousMotes.firstIndex(where: { $0.id == moteId }) {
                        luminousMotes[idx].opacity = Double.random(in: 0.4...0.8)
                    }
                }

                // Drift upward and fade out
                withAnimation(.easeOut(duration: Double.random(in: 1.5...2.5))) {
                    if let idx = luminousMotes.firstIndex(where: { $0.id == moteId }) {
                        luminousMotes[idx].y -= CGFloat.random(in: 120...220)
                        luminousMotes[idx].x += CGFloat.random(in: -30...30)
                        luminousMotes[idx].opacity = 0
                        luminousMotes[idx].size *= 0.3
                    }
                }

                // Clean up
                DispatchQueue.main.asyncAfter(deadline: .now() + 3.0) {
                    luminousMotes.removeAll { $0.id == moteId }
                }
            }
        }
    }

    private func animateScoreUp(by amount: Int) {
        let target = score
        let start = target - amount
        let steps = 8
        for i in 1...steps {
            DispatchQueue.main.asyncAfter(deadline: .now() + Double(i) * 0.04) {
                displayedScore = start + (amount * i / steps)
            }
        }
    }

    private func completeGame() {
        // Save progress
        let progressService = ProgressService(modelContext: modelContext)
        let result = GameSessionResult(
            gameType: .flashCards,
            categoryId: categoryId,
            categoryName: categoryName,
            score: score,
            correctAnswers: correctCount,
            totalQuestions: words.count,
            timeSpent: 0
        )
        progressService.recordGameSession(result)

        audioService.playCelebration()
        hapticsService.success()

        withAnimation(.spring(response: 0.6)) {
            isGameComplete = true
        }
    }

    private func resetGame() {
        currentIndex = 0
        score = 0
        correctCount = 0
        wrongCount = 0
        streak = 0
        isFlipped = false
        showButtons = false
        isGameComplete = false
        cardTransitionId = UUID()
    }

    private func dynamicFontSize(for text: String) -> CGFloat {
        let length = text.count
        if length <= 3 { return 56 }
        if length <= 6 { return 44 }
        if length <= 10 { return 36 }
        if length <= 15 { return 30 }
        if length <= 20 { return 26 }
        return 22
    }

    // MARK: - Floating Icon Animations

    private func startFrontAnimations() {
        // Breathing radial glow — top-left (7s cycle)
        withAnimation(.easeInOut(duration: 7).repeatForever(autoreverses: true)) {
            frontGlowPhase = 1.0
        }
        // Breathing radial glow — bottom-right (8s cycle, delayed)
        DispatchQueue.main.asyncAfter(deadline: .now() + 2) {
            withAnimation(.easeInOut(duration: 8).repeatForever(autoreverses: true)) {
                frontGlowPhase2 = 1.0
            }
        }
        // Sparkles: continuous rotation (20s)
        withAnimation(.linear(duration: 20).repeatForever(autoreverses: false)) {
            sparkleRotation = 360
        }
        // Sparkles: pulsing scale + opacity (12s)
        withAnimation(.easeInOut(duration: 12).repeatForever(autoreverses: true)) {
            sparkleScale = 1.08
            sparkleOpacity = 0.75
        }
        // Lightbulb: breathing scale + opacity (10s)
        withAnimation(.easeInOut(duration: 10).repeatForever(autoreverses: true)) {
            bulbScale = 1.08
            bulbOpacity = 0.75
        }
        // Cloud: floating y (15s)
        withAnimation(.easeInOut(duration: 15).repeatForever(autoreverses: true)) {
            cloudOffset = -6
            cloudOpacity = 0.6
        }
        // Moon: floating y + gentle rotation (18s)
        DispatchQueue.main.asyncAfter(deadline: .now() + 1) {
            withAnimation(.easeInOut(duration: 18).repeatForever(autoreverses: true)) {
                moonOffset = -4
                moonOpacity = 0.65
                moonRotation = 5
            }
        }
        // Wind: floating x (16s)
        DispatchQueue.main.asyncAfter(deadline: .now() + 2) {
            withAnimation(.easeInOut(duration: 16).repeatForever(autoreverses: true)) {
                windOffset = 8
                windOpacity = 0.55
            }
        }
    }

    private func startBackAnimations() {
        // Breathing radial glow — top-left emerald (6s)
        withAnimation(.easeInOut(duration: 6).repeatForever(autoreverses: true)) {
            backGlowPhase = 1.0
        }
        // Breathing radial glow — bottom-right amber (7s, delayed)
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.5) {
            withAnimation(.easeInOut(duration: 7).repeatForever(autoreverses: true)) {
                backGlowPhase2 = 1.0
            }
        }
        // Star: continuous rotation (8s) + pulsing scale (3s)
        withAnimation(.linear(duration: 8).repeatForever(autoreverses: false)) {
            starRotation = 360
        }
        withAnimation(.easeInOut(duration: 3).repeatForever(autoreverses: true)) {
            starScale = 1.2
            starOpacity = 0.85
        }
        // Heart: breathing scale (2.5s)
        withAnimation(.easeInOut(duration: 2.5).repeatForever(autoreverses: true)) {
            heartScale = 1.25
            heartOpacity = 0.8
        }
        // Flower/Leaf: rotating + floating (5s)
        withAnimation(.easeInOut(duration: 5).repeatForever(autoreverses: true)) {
            flowerRotation = 15
            flowerScale = 1.15
            flowerOffset = -6
            flowerOpacity = 0.85
        }
        // Back sparkles: rotating + floating (4.5s, delayed)
        DispatchQueue.main.asyncAfter(deadline: .now() + 1) {
            withAnimation(.easeInOut(duration: 4.5).repeatForever(autoreverses: true)) {
                backSparkleRotation = -18
                backSparkleScale = 1.2
                backSparkleOffset = -5
                backSparkleOpacity = 0.8
            }
        }
        // Bolt: pulsing scale + rotation (4s)
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
            withAnimation(.easeInOut(duration: 4).repeatForever(autoreverses: true)) {
                boltScale = 1.15
                boltRotation = 12
                boltOpacity = 0.8
            }
        }
    }
}

// MARK: - Game Complete View (Shared)

/// Shared completion screen used by all three game types.
/// Shows performance tier, animated stats, and action buttons.
struct GameCompleteView: View {
    let score: Int
    let correctAnswers: Int
    let wrongAnswers: Int
    let totalQuestions: Int
    let gameType: GameType
    let categoryName: String
    let onPlayAgain: () -> Void
    let onDismiss: () -> Void

    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization

    private var L: AppStrings { localization.strings }

    // Entrance animations
    @State private var showIcon = false
    @State private var showTitle = false
    @State private var showStats = false
    @State private var showButtons = false
    @State private var glowBreath: CGFloat = 0
    @State private var ringRotation: Double = 0
    @State private var displayedScore: Int = 0
    @State private var displayedAccuracy: Int = 0

    private var isDark: Bool { colorScheme == .dark }

    private var accuracy: Double {
        guard totalQuestions > 0 else { return 0 }
        return Double(correctAnswers) / Double(totalQuestions) * 100
    }

    private var performanceTier: PerformanceTier {
        if accuracy >= 90 { return .excellent }
        if accuracy >= 75 { return .great }
        if accuracy >= 60 { return .good }
        return .keepGoing
    }

    var body: some View {
        ScrollView(showsIndicators: false) {
            VStack(spacing: 0) {
                Spacer(minLength: 60)

                // MARK: — Hero Icon
                ZStack {
                    // Soft radial aura
                    Circle()
                        .fill(
                            RadialGradient(
                                colors: [
                                    performanceTier.color.opacity(0.15),
                                    performanceTier.color.opacity(0.04),
                                    .clear
                                ],
                                center: .center,
                                startRadius: 30,
                                endRadius: 120
                            )
                        )
                        .frame(width: 240, height: 240)
                        .blur(radius: 20)
                        .opacity(0.6 + 0.4 * Foundation.sin(Double(glowBreath)))

                    // Orbital ring
                    Circle()
                        .strokeBorder(
                            AngularGradient(
                                colors: [
                                    performanceTier.color.opacity(0.4),
                                    .clear,
                                    performanceTier.color.opacity(0.2),
                                    .clear,
                                    performanceTier.color.opacity(0.3),
                                    .clear,
                                ],
                                center: .center
                            ),
                            lineWidth: 1
                        )
                        .frame(width: 130, height: 130)
                        .rotationEffect(.degrees(ringRotation))

                    // Glass icon container
                    Circle()
                        .fill(.ultraThinMaterial)
                        .opacity(0.2)
                        .frame(width: 100, height: 100)
                        .overlay(
                            Circle()
                                .strokeBorder(
                                    LinearGradient(
                                        colors: [
                                            .white.opacity(0.35),
                                            performanceTier.color.opacity(0.25),
                                            .white.opacity(0.15)
                                        ],
                                        startPoint: .topLeading,
                                        endPoint: .bottomTrailing
                                    ),
                                    lineWidth: 1
                                )
                        )

                    Image(systemName: performanceTier.icon)
                        .font(.system(size: 40, weight: .light))
                        .foregroundStyle(
                            LinearGradient(
                                colors: [performanceTier.color, performanceTier.color.opacity(0.7)],
                                startPoint: .top,
                                endPoint: .bottom
                            )
                        )
                        .shadow(color: performanceTier.color.opacity(0.4), radius: 12)
                }
                .scaleEffect(showIcon ? 1 : 0.6)
                .opacity(showIcon ? 1 : 0)
                .padding(.bottom, 32)

                // MARK: — Title & Subtitle
                VStack(spacing: 10) {
                    Text(performanceTier.title(L))
                        .font(.system(size: 32, weight: .bold, design: .rounded))
                        .foregroundStyle(
                            LinearGradient(
                                colors: [performanceTier.color, performanceTier.color.opacity(0.7)],
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                        .shadow(color: isDark ? .black.opacity(0.3) : .clear, radius: 4, y: 2)

                    Text(performanceTier.subtitle(L))
                        .font(.subheadline)
                        .foregroundStyle(isDark ? .white.opacity(0.55) : .caribbeanPlum)
                        .multilineTextAlignment(.center)
                        .padding(.horizontal, 40)
                }
                .scaleEffect(showTitle ? 1 : 0.95)
                .opacity(showTitle ? 1 : 0)
                .padding(.bottom, 36)

                // MARK: — Score Highlight
                VStack(spacing: 6) {
                    Text("\(displayedScore)")
                        .font(.system(size: 56, weight: .bold, design: .rounded))
                        .foregroundStyle(
                            LinearGradient(
                                colors: [performanceTier.color, performanceTier.color.opacity(0.6)],
                                startPoint: .top,
                                endPoint: .bottom
                            )
                        )
                        .contentTransition(.numericText())
                        .shadow(color: performanceTier.color.opacity(0.3), radius: 16)

                    Text(L.points)
                        .font(.caption.weight(.medium))
                        .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
                        .textCase(.uppercase)
                        .tracking(2)
                }
                .opacity(showStats ? 1 : 0)
                .padding(.bottom, 28)

                // MARK: — Stats Row
                HStack(spacing: 0) {
                    statColumn(
                        value: "\(displayedAccuracy)%",
                        label: L.accuracy,
                        color: performanceTier.color
                    )

                    // Divider
                    Capsule()
                        .fill(.white.opacity(0.1))
                        .frame(width: 1, height: 36)

                    statColumn(
                        value: "\(correctAnswers)",
                        label: L.correct,
                        color: .green
                    )

                    Capsule()
                        .fill(.white.opacity(0.1))
                        .frame(width: 1, height: 36)

                    statColumn(
                        value: "\(wrongAnswers)",
                        label: L.toReview,
                        color: .orange
                    )
                }
                .padding(.vertical, 20)
                .padding(.horizontal, 8)
                .background {
                    RoundedRectangle(cornerRadius: 24)
                        .fill(.ultraThinMaterial)
                        .opacity(0.15)
                        .overlay(
                            RoundedRectangle(cornerRadius: 24)
                                .strokeBorder(
                                    LinearGradient(
                                        colors: [.white.opacity(0.2), .white.opacity(0.05)],
                                        startPoint: .topLeading,
                                        endPoint: .bottomTrailing
                                    ),
                                    lineWidth: 0.5
                                )
                        )
                }
                .padding(.horizontal, 28)
                .opacity(showStats ? 1 : 0)
                .offset(y: showStats ? 0 : 12)
                .padding(.bottom, 40)

                // MARK: — Action Buttons
                VStack(spacing: 14) {
                    Button {
                        onPlayAgain()
                    } label: {
                        HStack(spacing: 10) {
                            Image(systemName: "arrow.counterclockwise")
                                .font(.system(size: 15, weight: .semibold))
                            Text(L.playAgain)
                                .font(.system(size: 16, weight: .semibold))
                        }
                        .foregroundStyle(.white)
                        .frame(maxWidth: .infinity)
                        .padding(.vertical, 18)
                        .background {
                            RoundedRectangle(cornerRadius: 22)
                                .fill(
                                    LinearGradient(
                                        colors: [
                                            Color(hex: "#667eea").opacity(0.4),
                                            Color(hex: "#764ba2").opacity(0.25)
                                        ],
                                        startPoint: .topLeading,
                                        endPoint: .bottomTrailing
                                    )
                                )
                                .overlay(
                                    RoundedRectangle(cornerRadius: 22)
                                        .strokeBorder(
                                            LinearGradient(
                                                colors: [.white.opacity(0.3), .white.opacity(0.08)],
                                                startPoint: .topLeading,
                                                endPoint: .bottomTrailing
                                            ),
                                            lineWidth: 0.5
                                        )
                                )
                        }
                        .shadow(color: Color(hex: "#667eea").opacity(0.2), radius: 20, y: 8)
                    }
                    .buttonStyle(LumenCTAPressStyle(glowColor: Color(hex: "#667eea")))

                    Button {
                        onDismiss()
                    } label: {
                        HStack(spacing: 8) {
                            Image(systemName: "chevron.left")
                                .font(.system(size: 13, weight: .medium))
                            Text(L.backToCategories)
                                .font(.system(size: 15, weight: .medium))
                        }
                        .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanPlum)
                        .frame(maxWidth: .infinity)
                        .padding(.vertical, 16)
                    }
                    .buttonStyle(LumenPressStyle(weight: .medium))
                }
                .padding(.horizontal, 28)
                .opacity(showButtons ? 1 : 0)
                .offset(y: showButtons ? 0 : 10)

                Spacer(minLength: 80)
            }
        }
        .onAppear { startEntranceSequence() }
    }

    // MARK: — Stats Column

    private func statColumn(value: String, label: String, color: Color) -> some View {
        VStack(spacing: 6) {
            Text(value)
                .font(.system(size: 22, weight: .bold, design: .rounded))
                .foregroundStyle(isDark ? .white : .caribbeanInk)
                .contentTransition(.numericText())

            Text(label)
                .font(.system(size: 11, weight: .medium))
                .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
                .textCase(.uppercase)
                .tracking(1)
        }
        .frame(maxWidth: .infinity)
    }

    // MARK: — Entrance Sequence

    private func startEntranceSequence() {
        // Staggered reveals
        withAnimation(.easeOut(duration: 0.8)) {
            showIcon = true
        }

        DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) {
            withAnimation(.easeOut(duration: 0.7)) {
                showTitle = true
            }
        }

        DispatchQueue.main.asyncAfter(deadline: .now() + 0.6) {
            withAnimation(.easeOut(duration: 0.7)) {
                showStats = true
            }
        }

        DispatchQueue.main.asyncAfter(deadline: .now() + 0.9) {
            withAnimation(.easeOut(duration: 0.6)) {
                showButtons = true
            }
        }

        // Animate score counting up
        let scoreTarget = score
        let accuracyTarget = Int(accuracy)
        let steps = 20
        for i in 1...steps {
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.6 + Double(i) * 0.04) {
                displayedScore = scoreTarget * i / steps
                displayedAccuracy = accuracyTarget * i / steps
            }
        }

        // Start ambient animations
        withAnimation(.easeInOut(duration: 3).repeatForever(autoreverses: true)) {
            glowBreath = .pi * 2
        }
        withAnimation(.linear(duration: 20).repeatForever(autoreverses: false)) {
            ringRotation = 360
        }
    }
}

// MARK: - Performance Tier

private enum PerformanceTier {
    case excellent, great, good, keepGoing

    func title(_ L: AppStrings) -> String {
        switch self {
        case .excellent: L.excellent
        case .great: L.greatJob
        case .good: L.goodWork
        case .keepGoing: L.keepGoing
        }
    }

    func subtitle(_ L: AppStrings) -> String {
        switch self {
        case .excellent: L.excellentSubtitle
        case .great: L.greatJobSubtitle
        case .good: L.goodWorkSubtitle
        case .keepGoing: L.keepGoingSubtitle
        }
    }

    var icon: String {
        switch self {
        case .excellent: "trophy.fill"
        case .great: "star.fill"
        case .good: "hand.thumbsup.fill"
        case .keepGoing: "heart.fill"
        }
    }

    var color: Color {
        switch self {
        case .excellent: .yellow
        case .great: .green
        case .good: .cyan
        case .keepGoing: .orange
        }
    }
}

// MARK: - Luminous Mote

struct LuminousMote: Identifiable {
    let id = UUID()
    var x: CGFloat
    var y: CGFloat
    var size: CGFloat
    var opacity: Double
    var color: Color
}
