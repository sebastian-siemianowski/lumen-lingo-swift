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
    @Environment(TierManager.self) private var tierManager
    @Environment(PracticeTimeTracker.self) private var practiceTracker
    @Environment(\.localization) private var localization
    @Environment(\.accessibilityReduceMotion) private var reduceMotion

    private var L: AppStrings { localization.strings }

    @Binding var hideTabBar: Bool
    @Binding var navigationPath: NavigationPath

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

    // Best streak in current round (Story 6.3.1)
    @State private var maxStreak: Int = 0

    // Category completion & milestone celebration (Story 6.3)
    @State private var showCategoryCelebration: Bool = false
    @State private var categoryCelebrationProgress: CategoryProgress = .zero
    @State private var showMilestoneCelebration: Bool = false
    @State private var celebrationMilestoneName: String = ""
    @State private var celebrationMilestoneIcon: String = ""
    @State private var celebrationMilestoneColor: Color = .yellow

    // Next category navigation
    @State private var nextUnplayedCategoryId: String?
    @State private var nextUnplayedCategoryName: String?

    // Practice time gating
    @State private var showTimeBanner: Bool = false
    @State private var showTimeExpired: Bool = false
    @State private var bannerDismissed: Bool = false
    @State private var showMembershipFromExpired: Bool = false
    @State private var lastTimeSpent: Int = 0

    private var nextCategoryAction: (() -> Void)? {
        guard let nextId = nextUnplayedCategoryId else { return nil }
        return {
            navigationPath.removeLast(navigationPath.count)
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.05) {
                navigationPath.append(AppRoute.flashcardsGame(categoryId: nextId))
            }
        }
    }

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
            if showTimeExpired {
                PracticeExpiredView(
                    score: score,
                    correctAnswers: correctCount,
                    totalAnswered: correctCount + wrongCount,
                    onUpgradeTap: { showMembershipFromExpired = true },
                    onDismiss: {
                        navigationPath.removeLast(navigationPath.count)
                    }
                )
            } else if isLoading {
                loadingView
            } else if isGameComplete {
                gameCompleteView
            } else if let word = currentWord {
                ZStack(alignment: .top) {
                    gameplayView(word: word)

                    // Practice time warning banner
                    if showTimeBanner && !bannerDismissed {
                        PracticeTimeBanner(
                            remainingSeconds: practiceTracker.remainingSeconds(for: tierManager.currentTier) ?? 0,
                            onUpgradeTap: { showMembershipFromExpired = true },
                            onDismiss: { bannerDismissed = true }
                        )
                        .padding(.top, 8)
                        .zIndex(10)
                    }
                }
            } else {
                emptyStateView
            }
        }
        .cosmicBackground()
        // Story 6.3.1 — Category completion celebration overlay
        .overlay {
            if showCategoryCelebration {
                CategoryCompletionCelebrationView(
                    categoryName: categoryName,
                    masteredCount: categoryCelebrationProgress.mastered,
                    totalCount: categoryCelebrationProgress.total,
                    accuracy: Double(correctCount) / Double(max(words.count, 1)) * 100,
                    bestStreak: maxStreak,
                    xpEarned: Int(Double(score) * tierManager.xpMultiplier),
                    onDismiss: {
                        showCategoryCelebration = false
                        // Show milestone celebration next if also earned
                        if !celebrationMilestoneName.isEmpty {
                            DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) {
                                showMilestoneCelebration = true
                            }
                        }
                    }
                )
                .transition(.opacity)
            }
        }
        // Story 6.3.2 — Milestone achievement celebration overlay
        .overlay {
            if showMilestoneCelebration {
                MilestoneAchievementCelebrationView(
                    milestoneName: celebrationMilestoneName,
                    milestoneIcon: celebrationMilestoneIcon,
                    milestoneColor: celebrationMilestoneColor,
                    motivationalMessage: MilestoneMessages.message(for: celebrationMilestoneName),
                    onDismiss: { showMilestoneCelebration = false },
                    onShare: { showMilestoneCelebration = false }
                )
                .transition(.opacity)
            }
        }
        .navigationBarBackButtonHidden()
        .toolbar(.hidden, for: .navigationBar)
        .onAppear {
            hideTabBar = true
            loadContent()
            practiceTracker.startSession()
            HapticsService.shared.gameStart()
            HapticsService.shared.gameStart()
            HapticsService.shared.gameStart()
        }
        .onDisappear {
            hideTabBar = false
            practiceTracker.endSession()
        }
        .onReceive(NotificationCenter.default.publisher(for: .practiceTimeFiveMinuteWarning)) { _ in
            guard practiceTracker.isLimited(for: tierManager.currentTier) else { return }
            HapticsService.shared.warning()
            withAnimation(.spring(response: 0.4)) {
                showTimeBanner = true
            }
        }
        .onReceive(NotificationCenter.default.publisher(for: .practiceTimeExpired)) { _ in
            guard practiceTracker.isLimited(for: tierManager.currentTier) else { return }
            // Save progress before showing expired screen
            saveProgressBeforeExpiry()
            withAnimation(.spring(response: 0.5)) {
                showTimeExpired = true
            }
        }
        .sheet(isPresented: $showMembershipFromExpired) {
            NavigationStack { MembershipView(isSheet: true) }
        }
    }

    /// Save current game progress when time expires mid-session.
    private func saveProgressBeforeExpiry() {
        let timeSpent = practiceTracker.endSession()
        guard correctCount + wrongCount > 0 else { return }
        let progressService = ProgressService(modelContext: modelContext)
        let langPref = languagePrefs.first
        let result = GameSessionResult(
            gameType: .flashCards,
            categoryId: categoryId,
            categoryName: categoryName,
            score: score,
            correctAnswers: correctCount,
            totalQuestions: correctCount + wrongCount,
            timeSpent: timeSpent,
            sourceLanguage: langPref?.sourceLanguage ?? SupportedLanguage.english.rawValue,
            targetLanguage: langPref?.targetLanguage ?? SupportedLanguage.spanish.rawValue,
            xpMultiplier: tierManager.xpMultiplier
        )
        progressService.recordGameSession(result)
    }

    // MARK: - Loading

    private var loadingView: some View {
        VStack(spacing: 20) {
            ProgressView()
                .scaleEffect(1.5)
                .tint(isDark ? .white : .caribbeanPlum)
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
                GameHeader(
                    categoryName: categoryName,
                    score: displayedScore,
                    correctCount: correctCount,
                    wrongCount: wrongCount,
                    streakCount: streak,
                    currentQuestion: currentIndex + 1,
                    totalQuestions: words.count,
                    progressFraction: progress,
                    theme: .flashcards,
                    onBack: { dismiss() }
                )

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

    // MARK: - Exercise Header (now uses shared GameHeader component)

    // MARK: - Flashcard

    @State private var floatPhase: CGFloat = 0
    @State private var rippleScale: CGFloat = 0
    @State private var showRipple: Bool = false
    @State private var cardWidth: CGFloat = 400

    // Tranquil micro-feedback
    @State private var microScale: CGFloat = 1.0
    @State private var borderGlowColor: Color = .clear
    @State private var borderGlowOpacity: Double = 0
    @State private var flipEdgeGlowOpacity: Double = 0
    @State private var frostLuminanceSpike: CGFloat = 0
    @State private var frostDiffusionColor: Color = .clear
    @State private var frostDiffusionOpacity: Double = 0
    @State private var frostEdgeFeedbackOpacity: Double = 0
    @State private var flipShadowExpansion: CGFloat = 1.0

    // MARK: - Frost Breathing (Story 5)
    // Derived from existing floatPhase (4s) and borderBreathPhase (3s)
    // Different multipliers create organic polyrhythm — no new animation drivers needed.

    private var frostLuminanceBreath: Double {
        guard !isDark, !reduceMotion else { return 1.0 }
        // borderBreathPhase: 0→2π over 3s, reverse 2π→0 over 3s = 6s full cycle.
        // Normalizing the phase gives a smooth 0→1→0 triangle wave (easeInOut-shaped)
        // instead of sin() which would oscillate multiple times within one phase sweep.
        let breath = Double(borderBreathPhase) / (.pi * 2.0)
        return min(1.0, 0.92 + breath * 0.08 + Double(frostLuminanceSpike))
    }

    private var frostBloomCenter: UnitPoint {
        guard !isDark, !reduceMotion else { return .center }
        // Lissajous drift: X uses floatPhase (8s full cycle), Y uses borderBreathPhase (6s full cycle).
        // Different periods create an organic, never-exactly-repeating drift pattern.
        let nx = Double(floatPhase) / (.pi * 2.0)            // 0→1→0 over 8s
        let ny = Double(borderBreathPhase) / (.pi * 2.0)      // 0→1→0 over 6s
        let x = 0.50 + (nx * 2.0 - 1.0) * 0.04               // ±4% horizontal
        let y = 0.50 + (ny * 2.0 - 1.0) * 0.03               // ±3% vertical
        return UnitPoint(x: x, y: y)
    }

    private var frostShimmerOpacity: Double {
        guard !isDark, !reduceMotion else { return 0.55 }
        // floatPhase: 0→2π over 4s, reverse over 4s = 8s full cycle.
        // Out of phase with luminance breathing (6s) → organic polyrhythm.
        let shimmer = Double(floatPhase) / (.pi * 2.0)
        return 0.50 + shimmer * 0.10
    }

    private func flashcard(word: FlashcardWord) -> some View {
        ZStack {
            // Ripple effect on flip — frost-appropriate in light mode
            Circle()
                .fill(
                    RadialGradient(
                        colors: isDark
                            ? [
                                Color(hex: "#c084fc").opacity(0.4),
                                Color(hex: "#8b5cf6").opacity(0.2),
                                .clear
                            ]
                            : [
                                Color.white.opacity(0.30),
                                Color(red: 0.75, green: 0.72, blue: 0.80).opacity(0.12),
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

            // Flip edge glow — pure white light catch during rotation
            if !isDark {
                RoundedRectangle(cornerRadius: 32)
                    .strokeBorder(Color.white.opacity(0.65), lineWidth: 1.0)
                    .opacity(flipEdgeGlowOpacity)
                    .blur(radius: 2)
                    .allowsHitTesting(false)
            }
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
                            triggerMicroFeedback(color: isDark ? .green : Self.frostGreenGlow)
                            handleAnswer(correct: true)
                        } else {
                            triggerMicroFeedback(color: isDark ? .orange : Self.frostAmberGlow)
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

    // Typography Color Constants (Light Mode)
    // Front — Caribbean Sunset gradient (magenta → hot pink → golden orange)
    private static let frostSunsetGradient = LinearGradient(
        colors: [
            Color(red: 0.60, green: 0.10, blue: 0.92),  // electric purple (#9A1AEB)
            Color(red: 0.96, green: 0.16, blue: 0.46),  // hot pink       (#F52975)
            Color(red: 0.98, green: 0.55, blue: 0.05)   // golden orange   (#FA8C0D)
        ],
        startPoint: .leading, endPoint: .trailing
    )
    private static let frostSunsetShadow = Color(red: 0.96, green: 0.16, blue: 0.46) // hot pink for shadow

    // Back — Caribbean Ocean gradient (electric blue → bright cyan → emerald)
    private static let frostOceanGradient = LinearGradient(
        colors: [
            Color(red: 0.04, green: 0.46, blue: 0.96),  // electric blue  (#0B75F5)
            Color(red: 0.00, green: 0.72, blue: 0.84),  // bright cyan    (#00B8D6)
            Color(red: 0.04, green: 0.78, blue: 0.52)   // caribbean jade (#0AC785)
        ],
        startPoint: .leading, endPoint: .trailing
    )
    private static let frostOceanShadow = Color(red: 0.00, green: 0.72, blue: 0.84) // cyan for shadow
    private static let frostOceanAccent = Color(red: 0.04, green: 0.50, blue: 0.90) // electric blue for small text

    private static let frostPlumGrey = Color(red: 0.25, green: 0.25, blue: 0.27) // Neutral dark grey for secondary text
    private static let frostWhisper = Color(red: 0.45, green: 0.45, blue: 0.47) // Medium grey for tertiary text
    private static let frostDivider = Color(red: 0.75, green: 0.72, blue: 0.80) // Neutral lavender-grey for divider
    private static let frostPillBorder = Color(red: 0.75, green: 0.78, blue: 0.82) // Footer pill border

    private func frontContent(word: FlashcardWord) -> some View {
        VStack(spacing: 0) {
            Spacer()

            Text(word.front)
                .font(.system(size: dynamicFontSize(for: word.front), weight: .bold))
                .foregroundStyle(
                    isDark
                        ? AnyShapeStyle(LinearGradient(
                            colors: [Color(hex: "#60a5fa"), Color(hex: "#a78bfa"), Color(hex: "#c084fc")],
                            startPoint: .leading,
                            endPoint: .trailing
                        ))
                        : AnyShapeStyle(Self.frostSunsetGradient)
                )
                .shadow(color: isDark ? .black.opacity(0.6) : Self.frostSunsetShadow.opacity(0.06), radius: isDark ? 4 : 8, x: 0, y: isDark ? 2 : 3)
                .shadow(color: isDark ? .black.opacity(0.3) : .clear, radius: 12, x: 0, y: 4)
                .multilineTextAlignment(.center)
                .padding(.horizontal, 32)

            if let example = word.exampleTranslation, !example.isEmpty {
                Text(example)
                    .font(.subheadline.weight(.medium))
                    .foregroundStyle(isDark ? .white.opacity(0.70) : Self.frostPlumGrey)
                    .shadow(color: isDark ? .black.opacity(0.5) : Self.frostPlumGrey.opacity(0.04), radius: isDark ? 3 : 6, x: 0, y: 1)
                    .italic()
                    .multilineTextAlignment(.center)
                    .padding(.horizontal, isDark ? 32 : 24)
                    .padding(.vertical, isDark ? 0 : 4)
                    .padding(.top, isDark ? 14 : 10)
                    .overlay(alignment: .bottom) {
                        if !isDark {
                            // Frosted glow underline (dashboard style)
                            ZStack {
                                Capsule()
                                    .fill(
                                        LinearGradient(
                                            colors: [
                                                .clear,
                                                Color.white.opacity(0.5),
                                                Color.white.opacity(0.7),
                                                Color.white.opacity(0.5),
                                                .clear
                                            ],
                                            startPoint: .leading,
                                            endPoint: .trailing
                                        )
                                    )
                                    .frame(height: 4)
                                    .blur(radius: 3)
                                Capsule()
                                    .fill(
                                        LinearGradient(
                                            colors: [
                                                .clear,
                                                Color.white.opacity(0.6),
                                                Color.white.opacity(0.9),
                                                Color.white.opacity(0.6),
                                                .clear
                                            ],
                                            startPoint: .leading,
                                            endPoint: .trailing
                                        )
                                    )
                                    .frame(height: 1)
                            }
                            .frame(height: 4)
                            .padding(.horizontal, 8)
                        }
                    }
                    .padding(.horizontal, isDark ? 0 : 16)
                    .padding(.top, 14)
            }

            Spacer()

            HStack(spacing: 6) {
                Image(systemName: "hand.tap")
                    .symbolEffect(.pulse.byLayer, options: isDark ? .default : .repeating)
                Text(L.tapToReveal)
            }
            .font(.caption.weight(.medium))
            .foregroundStyle(isDark ? .white.opacity(0.55) : Self.frostWhisper.opacity(0.70))
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
                    isDark
                        ? AnyShapeStyle(LinearGradient(
                            colors: [Color(hex: "#34d399"), Color(hex: "#22d3ee"), Color(hex: "#60a5fa")],
                            startPoint: .leading,
                            endPoint: .trailing
                        ))
                        : AnyShapeStyle(Self.frostOceanGradient)
                )
                .shadow(color: isDark ? .black.opacity(0.6) : Self.frostOceanShadow.opacity(0.06), radius: isDark ? 4 : 8, x: 0, y: isDark ? 2 : 3)
                .shadow(color: isDark ? .black.opacity(0.3) : .clear, radius: 12, x: 0, y: 4)
                .multilineTextAlignment(.center)
                .padding(.horizontal, 32)

            // Glowing divider (matches dashboard style)
            ZStack {
                if isDark {
                    Capsule()
                        .fill(
                            LinearGradient(
                                colors: [.clear, .white.opacity(0.45), .clear],
                                startPoint: .leading, endPoint: .trailing
                            )
                        )
                        .frame(width: 80, height: 1)
                        .shadow(color: .white.opacity(0.3), radius: 4)
                } else {
                    // Warm glow halo
                    Capsule()
                        .fill(
                            LinearGradient(
                                colors: [
                                    .clear,
                                    Color.white.opacity(0.5),
                                    Color.white.opacity(0.7),
                                    Color.white.opacity(0.5),
                                    .clear
                                ],
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                        .frame(width: 120, height: 4)
                        .blur(radius: 3)

                    // Core white line
                    Capsule()
                        .fill(
                            LinearGradient(
                                colors: [
                                    .clear,
                                    Color.white.opacity(0.6),
                                    Color.white.opacity(0.9),
                                    Color.white.opacity(0.9),
                                    Color.white.opacity(0.6),
                                    .clear
                                ],
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                        .frame(width: 120, height: 1)
                }
            }
            .frame(height: 4)
            .padding(.top, 18)

            if let example = word.example, !example.isEmpty {
                Text("\"\(example)\"")
                    .font(.subheadline.weight(.medium))
                    .foregroundStyle(isDark ? .white.opacity(0.80) : Self.frostPlumGrey)
                    .shadow(color: isDark ? .black.opacity(0.5) : Self.frostPlumGrey.opacity(0.04), radius: isDark ? 3 : 6, x: 0, y: 1)
                    .italic()
                    .multilineTextAlignment(.center)
                    .padding(.horizontal, isDark ? 32 : 24)
                    .padding(.vertical, isDark ? 0 : 4)
                    .padding(.top, isDark ? 14 : 10)
                    .overlay(alignment: .bottom) {
                        if !isDark {
                            // Frosted glow underline (dashboard style)
                            ZStack {
                                Capsule()
                                    .fill(
                                        LinearGradient(
                                            colors: [
                                                .clear,
                                                Color.white.opacity(0.5),
                                                Color.white.opacity(0.7),
                                                Color.white.opacity(0.5),
                                                .clear
                                            ],
                                            startPoint: .leading,
                                            endPoint: .trailing
                                        )
                                    )
                                    .frame(height: 4)
                                    .blur(radius: 3)
                                Capsule()
                                    .fill(
                                        LinearGradient(
                                            colors: [
                                                .clear,
                                                Color.white.opacity(0.6),
                                                Color.white.opacity(0.9),
                                                Color.white.opacity(0.6),
                                                .clear
                                            ],
                                            startPoint: .leading,
                                            endPoint: .trailing
                                        )
                                    )
                                    .frame(height: 1)
                            }
                            .frame(height: 4)
                            .padding(.horizontal, 8)
                        }
                    }
                    .padding(.horizontal, isDark ? 0 : 16)
                    .padding(.top, 14)
            }

            if let translation = word.exampleTranslation, !translation.isEmpty {
                Text(translation)
                    .font(.caption.weight(.medium))
                    .foregroundStyle(isDark ? .white.opacity(0.55) : Self.frostWhisper)
                    .shadow(color: isDark ? .black.opacity(0.4) : .clear, radius: 3, x: 0, y: 1)
                    .multilineTextAlignment(.center)
                    .padding(.horizontal, 32)
                    .padding(.top, 6)
            }

            Spacer()

            // Word pair footer pill
            HStack(spacing: 6) {
                Text(word.front)
                    .foregroundStyle(isDark ? .white.opacity(0.65) : Self.frostPlumGrey)
                Image(systemName: "arrow.right")
                    .foregroundStyle(isDark ? .white.opacity(0.40) : Self.frostWhisper.opacity(0.40))
                Text(word.back)
                    .foregroundStyle(isDark ? .white.opacity(0.90) : Self.frostOceanAccent)
            }
            .font(.caption.weight(.medium))
            .shadow(color: isDark ? .black.opacity(0.4) : Self.frostPlumGrey.opacity(0.04), radius: isDark ? 3 : 6, x: 0, y: 1)
            .padding(.horizontal, 14)
            .padding(.vertical, 7)
            .background(
                Capsule().fill(isDark ? .white.opacity(0.12) : Color.white.opacity(0.65))
            )
            .overlay(
                Capsule().strokeBorder(
                    isDark ? .white.opacity(0.20) : Self.frostPillBorder.opacity(0.15),
                    lineWidth: 0.5
                )
            )
            .padding(.bottom, 24)
        }
        .onAppear { startBackAnimations() }
    }

    // MARK: - Frost Color Constants (Light Mode)

    // Frost Foundation — translucent, not opaque
    private static let frostWarmth = Color(red: 1.0, green: 0.98, blue: 0.94) // 4200K warm ivory
    private static let frostCoolEdge = Color(red: 0.70, green: 0.75, blue: 0.85) // cool blue for edge refraction
    private static let frostOuterEdge = Color(red: 0.68, green: 0.72, blue: 0.80) // cool blue-grey boundary
    // Frost Shadows
    private static let frostShadowColor = Color(red: 0.55, green: 0.50, blue: 0.68) // lavender-grey

    // Frost Feedback (Story 6)
    private static let frostGreenGlow = Color(red: 0.30, green: 0.85, blue: 0.55) // correct — mint green
    private static let frostAmberGlow = Color(red: 0.95, green: 0.65, blue: 0.25) // wrong — warm amber

    // Frost Button Accents (Story 7)
    private static let frostAmberAccent = Color(red: 0.92, green: 0.58, blue: 0.12)
    private static let frostAmberText = Color(red: 0.75, green: 0.42, blue: 0.08)
    private static let frostTealAccent = Color(red: 0.06, green: 0.70, blue: 0.50)
    private static let frostTealText = Color(red: 0.03, green: 0.52, blue: 0.38)

    // MARK: - Transparent Glass Card

    private func liquidGlassCard<Content: View>(@ViewBuilder content: () -> Content) -> some View {
        content()
            .frame(maxWidth: .infinity)
            .frame(height: 360)
            .background {
                ZStack {
                    if isDark {
                        // ── Dark Mode: Cosmic glass (unchanged) ──

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
                            .strokeBorder(Color.white.opacity(0.08), lineWidth: 0.5)
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
                    } else {
                        // ── Light Mode: Frosted Glass Architecture ──
                        // The key to frosted glass: backdrop blur IS the material.
                        // White overlays tint it — they don't replace it.

                        // Layer 0 — Glass Foundation: .thinMaterial provides the real
                        // backdrop blur that makes frosted glass feel like frosted glass.
                        // Background colors/images bleed through beautifully blurred.
                        RoundedRectangle(cornerRadius: 32)
                            .fill(.thinMaterial)

                        // Layer 1 — Frost Film: Semi-transparent white overlay adds
                        // the characteristic "frosted" whiteness while preserving
                        // the blur underneath. Low enough to see blurred color through.
                        RoundedRectangle(cornerRadius: 32)
                            .fill(Color.white.opacity(0.35))

                        // Layer 2 — Warmth Bloom: Warm ivory pooling in the center,
                        // mimics warm ambient light refracting through frosted glass.
                        // Center drifts slowly (Lissajous curve) for living-material feel.
                        RoundedRectangle(cornerRadius: 32)
                            .fill(
                                RadialGradient(
                                    colors: [
                                        Self.frostWarmth.opacity(0.45),
                                        Self.frostWarmth.opacity(0.12),
                                        Color.clear
                                    ],
                                    center: frostBloomCenter,
                                    startRadius: 0,
                                    endRadius: 250
                                )
                            )

                        // Frost Diffusion Feedback — answer glow materializes
                        // within the frost material itself, not around it.
                        RoundedRectangle(cornerRadius: 32)
                            .fill(
                                RadialGradient(
                                    colors: [
                                        frostDiffusionColor,
                                        frostDiffusionColor.opacity(0.4),
                                        Color.clear
                                    ],
                                    center: .center,
                                    startRadius: 0,
                                    endRadius: 220
                                )
                            )
                            .opacity(frostDiffusionOpacity)

                        // Layer 3 — Cool-to-Warm Refraction: Real frosted glass
                        // shows subtle color shift — cooler at edges (blue scatter),
                        // warmer at center (transmitted light). This is what makes
                        // it look like glass, not plastic.
                        RoundedRectangle(cornerRadius: 32)
                            .fill(
                                LinearGradient(
                                    colors: [
                                        Self.frostCoolEdge.opacity(0.08),
                                        Color.clear,
                                        Color.clear,
                                        Self.frostCoolEdge.opacity(0.06)
                                    ],
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing
                                )
                            )

                        // Layer 4 — Frost Grain: Ultra-subtle dithered texture.
                        // Two opposed diagonal gradients create micro-grain feel.
                        RoundedRectangle(cornerRadius: 32)
                            .fill(
                                LinearGradient(
                                    colors: [Color.white.opacity(0.06), Color.clear, Color.white.opacity(0.06)],
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing
                                )
                            )
                        RoundedRectangle(cornerRadius: 32)
                            .fill(
                                LinearGradient(
                                    colors: [Color.clear, Color.white.opacity(0.05), Color.clear],
                                    startPoint: .topTrailing,
                                    endPoint: .bottomLeading
                                )
                            )

                        // Layer 5 — Inner Luminance: Light catching the top surface.
                        // Breathes on a ~6s cycle (0.84–1.0 opacity) for living frost.
                        // Spikes briefly on tap for tactile light feedback.
                        VStack(spacing: 0) {
                            RoundedRectangle(cornerRadius: 32)
                                .fill(
                                    LinearGradient(
                                        colors: [
                                            Color.white.opacity(0.55),
                                            Color.white.opacity(0.18),
                                            Color.clear
                                        ],
                                        startPoint: .top,
                                        endPoint: .bottom
                                    )
                                )
                                .frame(height: 140) // ~39% of card — concentrated highlight
                            Spacer(minLength: 0)
                        }
                        .opacity(frostLuminanceBreath)

                        // Layer 6 — Edge Refraction Glow: Frosted glass catches light
                        // along its edges. This subtle blue-white border gives the
                        // card a luminous, crystalline edge quality.
                        RoundedRectangle(cornerRadius: 32)
                            .strokeBorder(
                                LinearGradient(
                                    colors: [
                                        Color.white.opacity(0.70),
                                        Self.frostCoolEdge.opacity(0.25),
                                        Color.white.opacity(0.50),
                                        Self.frostCoolEdge.opacity(0.20),
                                        Color.white.opacity(0.65)
                                    ],
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing
                                ),
                                lineWidth: 1.0
                            )

                        // Layer 7 — Inner Refraction Line: Shimmers on a ~7s cycle
                        // (0.45–0.55 opacity), out of phase with luminance breathing
                        // for organic polyrhythm.
                        RoundedRectangle(cornerRadius: 31)
                            .strokeBorder(Color.white.opacity(frostShimmerOpacity), lineWidth: 0.5)
                            .padding(1)

                        // Edge Feedback — refraction line glows with diffusion color
                        RoundedRectangle(cornerRadius: 31)
                            .strokeBorder(frostDiffusionColor, lineWidth: 0.75)
                            .padding(1)
                            .opacity(frostEdgeFeedbackOpacity)

                        // Top Specular Rim — directional light hitting the top edge
                        VStack {
                            Capsule()
                                .fill(
                                    LinearGradient(
                                        colors: [.clear, .white.opacity(0.80), .white.opacity(0.80), .clear],
                                        startPoint: .leading,
                                        endPoint: .trailing
                                    )
                                )
                                .frame(height: 1.5)
                                .padding(.horizontal, 36)
                            Spacer()
                        }

                        // Bottom Specular Rim — ambient bounce light
                        VStack {
                            Spacer()
                            Capsule()
                                .fill(
                                    LinearGradient(
                                        colors: [.clear, .white.opacity(0.20), .clear],
                                        startPoint: .leading,
                                        endPoint: .trailing
                                    )
                                )
                                .frame(height: 0.5)
                                .padding(.horizontal, 44)
                        }
                    }
                }
            }
            .clipShape(RoundedRectangle(cornerRadius: 32))
            // Story 4 — Depth & Shadow Architecture
            .shadow(
                color: isDark
                    ? .black.opacity(0.25)
                    : Self.frostShadowColor.opacity(0.08), // Shadow 1 — Ambient Fog
                radius: isDark ? 35 : 40 * flipShadowExpansion,
                x: 0,
                y: isDark ? 16 : CGFloat(20.0 * Double(flipShadowExpansion) * (1.0 + Foundation.sin(Double(floatPhase)) * 0.08))
            )
            .shadow(
                color: isDark
                    ? Color(hex: "#818cf8").opacity(0.12)
                    : Self.frostShadowColor.opacity(0.12), // Shadow 2 — Contact Shadow
                radius: isDark ? 30 : 16 * flipShadowExpansion,
                x: 0,
                y: isDark ? 8 : CGFloat(8.0 * Double(flipShadowExpansion) * (1.0 + Foundation.sin(Double(floatPhase)) * 0.08))
            )
            .shadow(
                color: isDark
                    ? Color.white.opacity(0.04)
                    : Self.frostShadowColor.opacity(0.04), // Shadow 3 — Edge Crispness
                radius: isDark ? 1 : 4 * flipShadowExpansion,
                x: 0,
                y: isDark ? -1 : CGFloat(2.0 * Double(flipShadowExpansion) * (1.0 + Foundation.sin(Double(floatPhase)) * 0.08))
            )
    }

    // MARK: - Action Buttons

    private var actionButtons: some View {
        HStack(spacing: 12) {
            // Still Learning
            Button {
                handleAnswer(correct: false)
            } label: {
                HStack(spacing: 8) {
                    Image(systemName: "arrow.counterclockwise")
                        .font(.system(size: 12, weight: .bold))
                        .foregroundStyle(isDark ? .white : Self.frostAmberAccent)
                        .frame(width: 28, height: 28)
                        .background(
                            Circle()
                                .fill(
                                    isDark
                                        ? .white.opacity(0.20)
                                        : Self.frostAmberAccent.opacity(0.15)
                                )
                                .overlay(
                                    Circle()
                                        .strokeBorder(
                                            isDark
                                                ? .white.opacity(0.30)
                                                : Self.frostAmberAccent.opacity(0.25),
                                            lineWidth: 0.75
                                        )
                                )
                        )

                    Text(L.stillLearning)
                        .font(.system(size: 13, weight: .bold))
                        .foregroundStyle(isDark ? .white : Self.frostAmberText)
                        .lineLimit(1)
                        .minimumScaleFactor(0.6)
                }
                .padding(.horizontal, 12)
                .padding(.vertical, 12)
                .frame(maxWidth: .infinity, minHeight: 48)
                .background {
                    ZStack {
                        if isDark {
                            RoundedRectangle(cornerRadius: 28)
                                .fill(
                                    LinearGradient(
                                        colors: [Color(hex: "#f59e0b"), Color(hex: "#f43f5e")],
                                        startPoint: .leading,
                                        endPoint: .trailing
                                    )
                                )
                        } else {
                            // Frost glass button base
                            RoundedRectangle(cornerRadius: 28)
                                .fill(.ultraThinMaterial)
                                .opacity(0.30)
                            RoundedRectangle(cornerRadius: 28)
                                .fill(Color.white.opacity(0.80))
                        }
                        // Inner highlight (shared)
                        RoundedRectangle(cornerRadius: 28)
                            .fill(
                                LinearGradient(
                                    colors: [.white.opacity(0.25), .clear],
                                    startPoint: .top,
                                    endPoint: .bottom
                                )
                            )
                        // Border
                        RoundedRectangle(cornerRadius: 28)
                            .strokeBorder(
                                isDark
                                    ? .white.opacity(0.25)
                                    : Self.frostAmberAccent.opacity(0.20),
                                lineWidth: isDark ? 0.75 : 0.5
                            )
                    }
                }
                .shadow(
                    color: isDark
                        ? Color(hex: "#f43f5e").opacity(0.35)
                        : Color(red: 0.72, green: 0.52, blue: 0.50).opacity(0.10),
                    radius: 12, x: 0, y: 4
                )
            }
            .buttonStyle(LumenPressStyle(weight: .medium, accentColor: isDark ? Color(hex: "#f43f5e") : Self.frostAmberAccent))

            // Got It
            Button {
                handleAnswer(correct: true)
            } label: {
                HStack(spacing: 8) {
                    Image(systemName: "checkmark")
                        .font(.system(size: 12, weight: .bold))
                        .foregroundStyle(isDark ? .white : Self.frostTealAccent)
                        .frame(width: 28, height: 28)
                        .background(
                            Circle()
                                .fill(
                                    isDark
                                        ? .white.opacity(0.20)
                                        : Self.frostTealAccent.opacity(0.15)
                                )
                                .overlay(
                                    Circle()
                                        .strokeBorder(
                                            isDark
                                                ? .white.opacity(0.30)
                                                : Self.frostTealAccent.opacity(0.25),
                                            lineWidth: 0.75
                                        )
                                )
                        )

                    Text(L.gotIt)
                        .font(.system(size: 13, weight: .bold))
                        .foregroundStyle(isDark ? .white : Self.frostTealText)
                        .lineLimit(1)
                        .minimumScaleFactor(0.6)
                }
                .padding(.horizontal, 12)
                .padding(.vertical, 12)
                .frame(maxWidth: .infinity, minHeight: 48)
                .background {
                    ZStack {
                        if isDark {
                            RoundedRectangle(cornerRadius: 28)
                                .fill(
                                    LinearGradient(
                                        colors: [Color(hex: "#10b981"), Color(hex: "#06b6d4")],
                                        startPoint: .leading,
                                        endPoint: .trailing
                                    )
                                )
                        } else {
                            // Frost glass button base
                            RoundedRectangle(cornerRadius: 28)
                                .fill(.ultraThinMaterial)
                                .opacity(0.30)
                            RoundedRectangle(cornerRadius: 28)
                                .fill(Color.white.opacity(0.80))
                        }
                        // Inner highlight (shared)
                        RoundedRectangle(cornerRadius: 28)
                            .fill(
                                LinearGradient(
                                    colors: [.white.opacity(0.25), .clear],
                                    startPoint: .top,
                                    endPoint: .bottom
                                )
                            )
                        // Border
                        RoundedRectangle(cornerRadius: 28)
                            .strokeBorder(
                                isDark
                                    ? .white.opacity(0.25)
                                    : Self.frostTealAccent.opacity(0.20),
                                lineWidth: isDark ? 0.75 : 0.5
                            )
                    }
                }
                .shadow(
                    color: isDark
                        ? Color(hex: "#10b981").opacity(0.35)
                        : Color(red: 0.40, green: 0.55, blue: 0.62).opacity(0.10),
                    radius: 12, x: 0, y: 4
                )
            }
            .buttonStyle(LumenPressStyle(weight: .medium, accentColor: isDark ? Color(hex: "#10b981") : Self.frostTealAccent))
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
            xpMultiplier: tierManager.xpMultiplier,
            timeSpent: lastTimeSpent,
            onPlayAgain: { resetGame() },
            onNextCategory: nextCategoryAction,
            nextCategoryName: nextUnplayedCategoryName,
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
            Button(L.goBack) { HapticsService.shared.navTransition(); dismiss() }
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
                let limit = tierManager.flashcardLimit
                let sorted = category.items.sorted { a, b in
                    a.difficultyLevel.numericLevel < b.difficultyLevel.numericLevel
                }
                self.words = Array(sorted.prefix(limit))
                self.categoryName = category.name
            }
            isLoading = false
        }
    }

    private func flipCard() {
        guard !isFlipped else { return }

        audioService.playCardFlipEnhanced()
        TierHapticsService.shared.cardFlip(level: tierManager.hapticLevel)

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

        // Light-mode frost luminance spike — pressing the card pushes it into light
        if !isDark && !reduceMotion {
            frostLuminanceSpike = 0.15
            withAnimation(.easeOut(duration: 0.25)) { frostLuminanceSpike = 0 }
        }

        // Light-mode flip edge glow
        if !isDark {
            withAnimation(.easeIn(duration: 0.15)) { flipEdgeGlowOpacity = 1.0 }
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.35) {
                withAnimation(.easeOut(duration: 0.25)) { flipEdgeGlowOpacity = 0 }
            }

            // Shadow expands during mid-flip — card lifts away from surface
            withAnimation(.easeIn(duration: 0.15)) { flipShadowExpansion = 1.30 }
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.15) {
                withAnimation(.easeOut(duration: 0.40)) { flipShadowExpansion = 1.0 }
            }
        }

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
            maxStreak = max(maxStreak, streak)
            audioService.playSwipeRight()
            TierHapticsService.shared.correctAnswer(level: tierManager.hapticLevel)

            // Streak haptics on milestones
            if streak >= 3 {
                TierHapticsService.shared.streakMilestone(level: tierManager.hapticLevel, count: streak)
            }

            // Animate score counter
            animateScoreUp(by: 10)

            // Green glow around the card
            answerGlow = isDark ? .green : Self.frostGreenGlow
            answerGlowOpacity = 1.0
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.7) {
                withAnimation(.easeOut(duration: 0.4)) {
                    answerGlowOpacity = 0
                }
            }

            // Frost diffusion — mint green glow from within the material
            if !isDark {
                frostDiffusionColor = Self.frostGreenGlow
                withAnimation(.easeIn(duration: 0.4)) { frostDiffusionOpacity = 0.20 }
                DispatchQueue.main.asyncAfter(deadline: .now() + 0.4) {
                    withAnimation(.easeOut(duration: 0.6)) { frostDiffusionOpacity = 0 }
                }
                withAnimation(.easeIn(duration: 0.15)) { frostEdgeFeedbackOpacity = 0.50 }
                DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) {
                    withAnimation(.easeOut(duration: 0.3)) { frostEdgeFeedbackOpacity = 0 }
                }
            }

            // Spawn luminous motes
            spawnMotes(count: streak >= 5 ? 6 : streak >= 3 ? 4 : 3, color: isDark ? .green : Self.frostGreenGlow)

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
            audioService.playSwipeLeft()
            TierHapticsService.shared.wrongAnswer(level: tierManager.hapticLevel)

            // Amber glow around the card
            answerGlow = isDark ? .orange : Self.frostAmberGlow
            answerGlowOpacity = 1.0
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
                withAnimation(.easeOut(duration: 0.3)) {
                    answerGlowOpacity = 0
                }
            }

            // Frost diffusion — warm amber absorbed into frost (shorter, no outer glow)
            if !isDark {
                frostDiffusionColor = Self.frostAmberGlow
                withAnimation(.easeIn(duration: 0.3)) { frostDiffusionOpacity = 0.18 }
                DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) {
                    withAnimation(.easeOut(duration: 0.4)) { frostDiffusionOpacity = 0 }
                }
                withAnimation(.easeIn(duration: 0.15)) { frostEdgeFeedbackOpacity = 0.45 }
                DispatchQueue.main.asyncAfter(deadline: .now() + 0.25) {
                    withAnimation(.easeOut(duration: 0.25)) { frostEdgeFeedbackOpacity = 0 }
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
        // Stop practice time tracking
        let timeSpent = practiceTracker.endSession()
        lastTimeSpent = timeSpent

        // Save progress
        let progressService = ProgressService(modelContext: modelContext)
        let langPref = languagePrefs.first
        let source = langPref?.sourceLanguage ?? SupportedLanguage.english.rawValue
        let target = langPref?.targetLanguage ?? SupportedLanguage.spanish.rawValue

        // Capture XP before recording for milestone detection (Story 6.3.2)
        let xpBefore = progressService.getOrCreateProfile().totalXP

        let result = GameSessionResult(
            gameType: .flashCards,
            categoryId: categoryId,
            categoryName: categoryName,
            score: score,
            correctAnswers: correctCount,
            totalQuestions: words.count,
            timeSpent: timeSpent,
            sourceLanguage: source,
            targetLanguage: target,
            xpMultiplier: tierManager.xpMultiplier
        )
        progressService.recordGameSession(result)

        audioService.playCelebration()
        HapticsService.shared.celebrate()

        // Story 6.3.1 — Check if category is now fully complete
        let catProgress = progressService.categoryProgress(
            gameType: .flashCards,
            category: categoryId,
            totalItems: words.count,
            source: source,
            target: target
        )
        if catProgress.isComplete {
            categoryCelebrationProgress = catProgress
        }

        // Story 6.3.2 — Check if XP crossed a milestone threshold
        let xpAfter = progressService.getOrCreateProfile().totalXP
        let milestoneData: [(name: String, icon: String, color: Color, xp: Int)] = [
            ("Getting Started", "star.fill", .cyan, 100),
            ("Dedicated Learner", "book.fill", Color(hex: "#667eea"), 500),
            ("Rising Star", "sparkles", Color(hex: "#f59e0b"), 1_500),
            ("Word Warrior", "shield.fill", Color(hex: "#8b5cf6"), 3_000),
            ("Knowledge Seeker", "magnifyingglass", Color(hex: "#06b6d4"), 5_000),
            ("Sentence Crafter", "text.quote", Color(hex: "#10b981"), 8_000),
            ("Grammar Guardian", "shield.checkerboard", Color(hex: "#6366f1"), 12_000),
            ("Vocabulary Virtuoso", "character.book.closed.fill", Color(hex: "#f97316"), 18_000),
            ("Language Master", "crown.fill", .yellow, 25_000),
            ("Fluency Pioneer", "flag.fill", Color(hex: "#14b8a6"), 35_000),
            ("Polyglot Legend", "globe", Color(hex: "#ec4899"), 50_000),
        ]
        // Find the highest milestone just crossed
        for milestone in milestoneData.reversed() {
            if xpBefore < milestone.xp && xpAfter >= milestone.xp {
                celebrationMilestoneName = milestone.name
                celebrationMilestoneIcon = milestone.icon
                celebrationMilestoneColor = milestone.color
                break
            }
        }

        // Find next unplayed category
        findNextUnplayedCategory(progressService: progressService)

        withAnimation(.spring(response: 0.6)) {
            isGameComplete = true
        }

        // Show celebrations with a delay so GameCompleteView appears first
        if catProgress.isComplete {
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.8) {
                showCategoryCelebration = true
            }
        } else if !celebrationMilestoneName.isEmpty {
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.8) {
                showMilestoneCelebration = true
            }
        }
    }

    private func findNextUnplayedCategory(progressService: ProgressService) {
        let langPref = languagePrefs.first
        let source = langPref?.sourceLanguage ?? SupportedLanguage.english.rawValue
        let target = langPref?.targetLanguage ?? SupportedLanguage.spanish.rawValue

        Task {
            let categories = await contentLoader.loadFlashcardCategories(source: source, target: target)
            guard let currentIdx = categories.firstIndex(where: { $0.id == categoryId }) else { return }

            // Search forward from current, then wrap around
            let ordered = Array(categories[(currentIdx + 1)...]) + Array(categories[..<currentIdx])
            for cat in ordered {
                let progress = progressService.categoryProgress(
                    gameType: .flashCards,
                    category: cat.id,
                    totalItems: cat.items.count,
                    source: source,
                    target: target
                )
                if !progress.isComplete {
                    nextUnplayedCategoryId = cat.id
                    nextUnplayedCategoryName = cat.name
                    return
                }
            }
        }
    }

    private func resetGame() {
        currentIndex = 0
        score = 0
        correctCount = 0
        wrongCount = 0
        streak = 0
        maxStreak = 0
        isFlipped = false
        showButtons = false
        isGameComplete = false
        showCategoryCelebration = false
        showMilestoneCelebration = false
        celebrationMilestoneName = ""
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
/// On compact screens, action buttons are pinned to a bottom bar.
struct GameCompleteView: View {
    let score: Int
    let correctAnswers: Int
    let wrongAnswers: Int
    let totalQuestions: Int
    let gameType: GameType
    let categoryName: String
    let xpMultiplier: Double
    let timeSpent: Int
    let onPlayAgain: () -> Void
    let onNextCategory: (() -> Void)?
    let nextCategoryName: String?
    let onDismiss: () -> Void

    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization
    @Environment(TierManager.self) private var tierManager
    @Environment(\.horizontalSizeClass) private var horizontalSizeClass

    private var L: AppStrings { localization.strings }

    // Entrance animations
    @State private var showIcon = false
    @State private var showTitle = false
    @State private var showStats = false
    @State private var showExtras = false
    @State private var showButtons = false
    @State private var showBar = false
    @State private var showBarBg = false
    @State private var showBarPrimary = false
    @State private var showBarShare = false
    @State private var showBarSecondary = false
    @State private var shareBreath: CGFloat = 0
    @State private var shareCompleted = false
    @State private var showConfetti = false
    @State private var glowBreath: CGFloat = 0
    @State private var ringRotation: Double = 0
    @State private var displayedScore: Int = 0
    @State private var displayedAccuracy: Int = 0
    @State private var confettiParticles: [GameCompleteConfettiParticle] = []

    private var isDark: Bool { colorScheme == .dark }
    private var isCompact: Bool { horizontalSizeClass == .compact }

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
        VStack(spacing: 0) {
            ScrollView(showsIndicators: false) {
                VStack(spacing: 0) {
                    Spacer(minLength: isCompact ? 28 : 60)

                    // MARK: — Hero Section
                    if isCompact {
                        compactHeroSection
                    } else {
                        regularHeroSection
                    }

                    // MARK: — Stats Row
                    statsRow
                        .padding(.horizontal, 28)
                        .opacity(showStats ? 1 : 0)
                        .offset(y: showStats ? 0 : 40)

                    // MARK: — XP Breakdown (multiplier > 1.0)
                    if xpMultiplier > 1.0 {
                        xpBreakdownSection
                            .padding(.horizontal, 28)
                            .padding(.bottom, 28)
                            .opacity(showExtras ? 1 : 0)
                            .offset(y: showExtras ? 0 : 12)
                    }

                    // MARK: — Tier-Specific Result Sections
                    tierSpecificSections
                        .padding(.horizontal, 28)
                        .padding(.bottom, 20)
                        .opacity(showExtras ? 1 : 0)
                        .offset(y: showExtras ? 0 : 12)

                    // On iPad: keep action buttons inside scroll content
                    if !isCompact {
                        actionButtonsStack
                            .padding(.horizontal, 28)
                            .opacity(showButtons ? 1 : 0)
                            .offset(y: showButtons ? 0 : 10)
                    }

                    // Post-session upgrade nudge (Free users, every 3rd session)
                    PostSessionNudge()

                    Spacer(minLength: isCompact ? 200 : 80)
                }
            }

            // On compact (phones): pinned bottom action bar
            if isCompact {
                pinnedBottomBar
            }
        }
        .overlay {
            if showConfetti {
                confettiOverlay
            }
        }
        .onAppear { startEntranceSequence() }
    }

    // MARK: — Compact Hero (Story 10.2)

    private var compactHeroSection: some View {
        HStack(alignment: .center, spacing: 20) {
            // Compact icon
            ZStack {
                Circle()
                    .fill(
                        RadialGradient(
                            colors: [
                                performanceTier.color.opacity(0.15),
                                performanceTier.color.opacity(0.04),
                                .clear
                            ],
                            center: .center,
                            startRadius: 15,
                            endRadius: 60
                        )
                    )
                    .frame(width: 120, height: 120)
                    .blur(radius: 12)
                    .opacity(0.6 + 0.4 * Foundation.sin(Double(glowBreath)))

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
                        lineWidth: 0.8
                    )
                    .frame(width: 72, height: 72)
                    .rotationEffect(.degrees(ringRotation))

                Circle()
                    .fill(.ultraThinMaterial)
                    .opacity(0.2)
                    .frame(width: 56, height: 56)
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
                                lineWidth: 0.8
                            )
                    )

                Image(systemName: performanceTier.icon)
                    .font(.system(size: 24, weight: .light))
                    .foregroundStyle(
                        LinearGradient(
                            colors: [performanceTier.color, performanceTier.color.opacity(0.7)],
                            startPoint: .top,
                            endPoint: .bottom
                        )
                    )
                    .shadow(color: performanceTier.color.opacity(0.4), radius: 8)
            }
            .frame(width: 120, height: 120)
            .scaleEffect(showIcon ? 1 : 0.5)
            .opacity(showIcon ? 1 : 0)

            // Score + title on the right
            VStack(alignment: .leading, spacing: 6) {
                Text(performanceTier.title(L))
                    .font(.system(size: 24, weight: .bold, design: .rounded))
                    .foregroundStyle(
                        LinearGradient(
                            colors: [performanceTier.color, performanceTier.color.opacity(0.7)],
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
                    .shadow(color: isDark ? .black.opacity(0.3) : .clear, radius: 4, y: 2)

                HStack(alignment: .firstTextBaseline, spacing: 6) {
                    Text("\(displayedScore)")
                        .font(.system(size: 44, weight: .bold, design: .rounded))
                        .foregroundStyle(
                            LinearGradient(
                                colors: [performanceTier.color, performanceTier.color.opacity(0.6)],
                                startPoint: .top,
                                endPoint: .bottom
                            )
                        )
                        .contentTransition(.numericText())
                        .shadow(color: performanceTier.color.opacity(0.3), radius: 12)

                    Text(L.points)
                        .font(.caption.weight(.medium))
                        .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
                        .textCase(.uppercase)
                        .tracking(2)
                }

                Text(performanceTier.subtitle(L))
                    .font(.system(size: 13))
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanPlum)
                    .lineLimit(2)
            }
            .scaleEffect(showTitle ? 1 : 0.95)
            .opacity(showTitle ? 1 : 0)

            Spacer(minLength: 0)
        }
        .padding(.horizontal, 24)
        .padding(.bottom, 24)
    }

    // MARK: — Regular Hero (iPad)

    private var regularHeroSection: some View {
        VStack(spacing: 0) {
            // Hero Icon
            ZStack {
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

                Circle()
                    .fill(.ultraThinMaterial)
                    .opacity(0.2)
                    .frame(width: 100, height: 100)
                    .overlay(
                        Circle()
                            .strokeBorder(
                                LinearGradient(
                                    colors: isDark
                                        ? [
                                            .white.opacity(0.35),
                                            performanceTier.color.opacity(0.25),
                                            .white.opacity(0.15)
                                        ]
                                        : [
                                            Color.caribbeanBorder,
                                            performanceTier.color.opacity(0.30),
                                            Color.caribbeanBorderSubtle
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

            // Title & Subtitle
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

            // Score Highlight
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
        }
    }

    // MARK: — Stats Row

    private var statsRow: some View {
        HStack(spacing: 0) {
            statColumn(
                value: "\(displayedAccuracy)%",
                label: L.accuracy,
                color: performanceTier.color
            )

            ZStack {
                if isDark {
                    Capsule()
                        .fill(.white.opacity(0.1))
                        .frame(width: 1, height: 36)
                } else {
                    Capsule()
                        .fill(
                            LinearGradient(
                                colors: [.clear, Color.white.opacity(0.7), .clear],
                                startPoint: .top, endPoint: .bottom
                            )
                        )
                        .frame(width: 4, height: 36)
                        .blur(radius: 2)
                    Capsule()
                        .fill(
                            LinearGradient(
                                colors: [.clear, Color.white.opacity(0.9), .clear],
                                startPoint: .top, endPoint: .bottom
                            )
                        )
                        .frame(width: 1, height: 36)
                }
            }

            statColumn(
                value: "\(correctAnswers)",
                label: L.correct,
                color: .green
            )

            ZStack {
                if isDark {
                    Capsule()
                        .fill(.white.opacity(0.1))
                        .frame(width: 1, height: 36)
                } else {
                    Capsule()
                        .fill(
                            LinearGradient(
                                colors: [.clear, Color.white.opacity(0.7), .clear],
                                startPoint: .top, endPoint: .bottom
                            )
                        )
                        .frame(width: 4, height: 36)
                        .blur(radius: 2)
                    Capsule()
                        .fill(
                            LinearGradient(
                                colors: [.clear, Color.white.opacity(0.9), .clear],
                                startPoint: .top, endPoint: .bottom
                            )
                        )
                        .frame(width: 1, height: 36)
                }
            }

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
                                colors: isDark
                                    ? [.white.opacity(0.2), .white.opacity(0.05)]
                                    : [Color.caribbeanBorder, Color.caribbeanBorderSubtle],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            ),
                            lineWidth: 0.5
                        )
                )
        }
        .padding(.bottom, 28)
    }

    // MARK: — Pinned Bottom Bar (Story 10.1)

    private var pinnedBottomBar: some View {
        VStack(spacing: 0) {
            // S6: 48px atmospheric fade with 5-stop gradient + performance-tier tint
            ZStack {
                LinearGradient(
                    stops: [
                        .init(color: .clear, location: 0.0),
                        .init(color: (isDark ? Color.black : Color.white).opacity(0.03), location: 0.2),
                        .init(color: (isDark ? Color.black : Color.white).opacity(0.15), location: 0.5),
                        .init(color: (isDark ? Color.black : Color.white).opacity(0.40), location: 0.8),
                        .init(color: (isDark ? Color.black : Color.white).opacity(0.65), location: 1.0)
                    ],
                    startPoint: .top,
                    endPoint: .bottom
                )

                // S6.2: Performance-tier tinted fade
                LinearGradient(
                    stops: [
                        .init(color: .clear, location: 0.0),
                        .init(color: performanceTier.color.opacity(0.03), location: 0.5),
                        .init(color: .clear, location: 1.0)
                    ],
                    startPoint: .top,
                    endPoint: .bottom
                )
            }
            .frame(height: 48)

            VStack(spacing: 14) {
                // Primary CTA + Share row
                HStack(spacing: 12) {
                    // S3: Hero Button — Primary CTA
                    if let onNext = onNextCategory, let nextName = nextCategoryName {
                        Button {
                            onNext()
                        } label: {
                            HStack(spacing: 10) {
                                Image(systemName: "arrow.right.circle.fill")
                                    .font(.system(size: 16, weight: .semibold))
                                VStack(alignment: .leading, spacing: 1) {
                                    Text(L.nextCategory)
                                        .font(.system(size: 15, weight: .bold, design: .rounded))
                                    Text(nextName)
                                        .font(.system(size: 11, weight: .medium))
                                        .opacity(0.6)
                                }
                            }
                            .foregroundStyle(.white)
                            .frame(maxWidth: .infinity)
                            .padding(.vertical, 17)
                            .background {
                                ZStack {
                                    // S3.2: Ambient glow pulse behind button
                                    RoundedRectangle(cornerRadius: 24)
                                        .fill(Color(hex: "#10b981"))
                                        .opacity(0.06 + 0.10 * Foundation.sin(Double(glowBreath) * 0.5))
                                        .blur(radius: 2)
                                        .padding(-4)

                                    // Base gradient — rich 3-stop
                                    RoundedRectangle(cornerRadius: 22)
                                        .fill(
                                            LinearGradient(
                                                colors: [
                                                    Color(hex: "#10b981"),
                                                    Color(hex: "#059669"),
                                                    Color(hex: "#047857")
                                                ],
                                                startPoint: .topLeading,
                                                endPoint: .bottomTrailing
                                            )
                                        )

                                    // S3.1: Inner light highlight (top 50%)
                                    RoundedRectangle(cornerRadius: 22)
                                        .fill(
                                            LinearGradient(
                                                colors: [.white.opacity(0.18), .clear],
                                                startPoint: .top,
                                                endPoint: .center
                                            )
                                        )

                                    // S3.1: Edge specular — stronger contrast
                                    RoundedRectangle(cornerRadius: 22)
                                        .strokeBorder(
                                            LinearGradient(
                                                colors: [.white.opacity(0.45), .white.opacity(0.03)],
                                                startPoint: .topLeading,
                                                endPoint: .bottomTrailing
                                            ),
                                            lineWidth: 0.5
                                        )
                                }
                            }
                            // S3.1: Dual shadow — far + near
                            .shadow(color: Color(hex: "#10b981").opacity(0.3), radius: 24, y: 10)
                            .shadow(color: Color(hex: "#10b981").opacity(0.25), radius: 6, y: 2)
                        }
                        .buttonStyle(LumenCTAPressStyle(glowColor: Color(hex: "#10b981")))
                        .opacity(showBarPrimary ? 1 : 0)
                        .offset(y: showBarPrimary ? 0 : 30)
                    } else {
                        // S3.3: Play Again as primary — performance-adaptive color
                        Button {
                            onPlayAgain()
                        } label: {
                            HStack(spacing: 10) {
                                Image(systemName: "arrow.counterclockwise")
                                    .font(.system(size: 16, weight: .semibold))
                                Text(L.playAgain)
                                    .font(.system(size: 15, weight: .bold, design: .rounded))
                            }
                            .foregroundStyle(.white)
                            .frame(maxWidth: .infinity)
                            .padding(.vertical, 17)
                            .background {
                                ZStack {
                                    // S3.2: Ambient glow pulse
                                    RoundedRectangle(cornerRadius: 24)
                                        .fill(Color(hex: "#667eea"))
                                        .opacity(0.06 + 0.10 * Foundation.sin(Double(glowBreath) * 0.5))
                                        .blur(radius: 2)
                                        .padding(-4)

                                    RoundedRectangle(cornerRadius: 22)
                                        .fill(
                                            LinearGradient(
                                                colors: [
                                                    Color(hex: "#667eea"),
                                                    Color(hex: "#764ba2")
                                                ],
                                                startPoint: .topLeading,
                                                endPoint: .bottomTrailing
                                            )
                                        )

                                    // S3.3: Performance-adaptive color accent
                                    RoundedRectangle(cornerRadius: 22)
                                        .fill(
                                            RadialGradient(
                                                colors: [
                                                    performanceTier.color.opacity(0.12),
                                                    .clear
                                                ],
                                                center: .topTrailing,
                                                startRadius: 0,
                                                endRadius: 140
                                            )
                                        )

                                    RoundedRectangle(cornerRadius: 22)
                                        .fill(
                                            LinearGradient(
                                                colors: [.white.opacity(0.18), .clear],
                                                startPoint: .top,
                                                endPoint: .center
                                            )
                                        )

                                    RoundedRectangle(cornerRadius: 22)
                                        .strokeBorder(
                                            LinearGradient(
                                                colors: [.white.opacity(0.45), .white.opacity(0.03)],
                                                startPoint: .topLeading,
                                                endPoint: .bottomTrailing
                                            ),
                                            lineWidth: 0.5
                                        )
                                }
                            }
                            .shadow(color: Color(hex: "#667eea").opacity(0.3), radius: 24, y: 10)
                            .shadow(color: Color(hex: "#667eea").opacity(0.25), radius: 6, y: 2)
                        }
                        .buttonStyle(LumenCTAPressStyle(glowColor: Color(hex: "#667eea")))
                        .opacity(showBarPrimary ? 1 : 0)
                        .offset(y: showBarPrimary ? 0 : 30)
                    }

                    // S4: Share button — capsule pill with tier shimmer
                    Button {
                        shareResult()
                        withAnimation(.spring(duration: 0.3)) {
                            shareCompleted = true
                        }
                        DispatchQueue.main.asyncAfter(deadline: .now() + 1.5) {
                            withAnimation(.spring(duration: 0.3)) {
                                shareCompleted = false
                            }
                        }
                    } label: {
                        HStack(spacing: 6) {
                            Image(systemName: shareCompleted ? "checkmark.circle.fill" : "square.and.arrow.up")
                                .font(.system(size: 15, weight: .semibold))
                                .contentTransition(.symbolEffect(.replace))
                            Text(L.shareResult)
                                .font(.system(size: 11, weight: .semibold))
                        }
                        .foregroundStyle(
                            LinearGradient(
                                colors: tierManager.tierGradientColors.isEmpty
                                    ? [.white.opacity(0.75), .white.opacity(0.55)]
                                    : tierManager.tierGradientColors.map { $0.opacity(0.9) },
                                startPoint: .top,
                                endPoint: .bottom
                            )
                        )
                        .frame(minWidth: 68)
                        .padding(.horizontal, 14)
                        .padding(.vertical, 17)
                        .background {
                            ZStack {
                                Capsule()
                                    .fill(.white.opacity(isDark ? 0.06 : 0.1))

                                // S4.2: Tier-gradient shimmer — jewelry-like glint
                                Capsule()
                                    .strokeBorder(
                                        AngularGradient(
                                            gradient: Gradient(stops: [
                                                .init(color: (tierManager.tierGradientColors.first ?? .white).opacity(0.12), location: 0.0),
                                                .init(color: (tierManager.tierGradientColors.last ?? .white).opacity(0.22), location: 0.25),
                                                .init(color: .white.opacity(0.35), location: 0.33),
                                                .init(color: (tierManager.tierGradientColors.first ?? .white).opacity(0.12), location: 0.45),
                                                .init(color: (tierManager.tierGradientColors.last ?? .white).opacity(0.06), location: 0.75),
                                                .init(color: (tierManager.tierGradientColors.first ?? .white).opacity(0.12), location: 1.0),
                                            ]),
                                            center: .center,
                                            angle: .degrees(ringRotation)
                                        ),
                                        lineWidth: 0.8
                                    )
                            }
                        }
                        // S4.3: Subtle attention pulse — one gentle pulse per 4s
                        .scaleEffect(1.0 + 0.02 * Foundation.sin(Double(shareBreath) * 0.25))
                    }
                    .buttonStyle(LumenPressStyle(weight: .medium))
                    .opacity(showBarShare ? 1 : 0)
                }

                // S5: Secondary row — clear hierarchy
                HStack(spacing: 10) {
                    if onNextCategory != nil {
                        // S5.1: Play Again as distinct secondary
                        Button {
                            onPlayAgain()
                        } label: {
                            HStack(spacing: 6) {
                                Image(systemName: "arrow.counterclockwise")
                                    .font(.system(size: 12, weight: .semibold))
                                Text(L.playAgain)
                                    .font(.system(size: 13, weight: .semibold))
                            }
                            .foregroundStyle(isDark ? .white.opacity(0.6) : .caribbeanPlum.opacity(0.8))
                            .frame(maxWidth: .infinity)
                            .padding(.vertical, 13)
                            .background {
                                RoundedRectangle(cornerRadius: 16)
                                    .fill(.white.opacity(isDark ? 0.06 : 0.1))
                                    .overlay(
                                        RoundedRectangle(cornerRadius: 16)
                                            .strokeBorder(isDark ? .white.opacity(0.12) : Color.caribbeanBorderSubtle, lineWidth: 0.5)
                                    )
                            }
                        }
                        .buttonStyle(LumenPressStyle(weight: .medium))
                    }

                    // S5.2: Back to Categories as tertiary
                    Button {
                        onDismiss()
                    } label: {
                        HStack(spacing: 6) {
                            Image(systemName: "chevron.left")
                                .font(.system(size: 11, weight: .medium))
                            Text(L.backToCategories)
                                .font(.system(size: 13, weight: .medium))
                        }
                        .foregroundStyle(isDark ? .white.opacity(0.45) : .caribbeanPlum.opacity(0.55))
                        .frame(maxWidth: .infinity)
                        .padding(.vertical, 13)
                    }
                    .buttonStyle(LumenPressStyle(weight: .medium))
                }
                .opacity(showBarSecondary ? 1 : 0)
            }
            .padding(.horizontal, 20)
            .padding(.top, 16)
            .padding(.bottom, 12)
            .background {
                ZStack {
                    // S1.1 Layer 1: Base material glass — reduced opacity for bleed-through
                    Rectangle()
                        .fill(.ultraThinMaterial)
                        .opacity(isDark ? 0.7 : 0.75)

                    // S1.2: Performance-tier color wash — radial from top-center
                    RadialGradient(
                        colors: [
                            performanceTier.color.opacity(isDark ? 0.06 : 0.04),
                            performanceTier.color.opacity(isDark ? 0.02 : 0.01),
                            .clear
                        ],
                        center: UnitPoint(x: 0.5, y: 0),
                        startRadius: 20,
                        endRadius: 300
                    )

                    // S1.1 Layer 3: Surface reflection — simulates top curvature
                    LinearGradient(
                        colors: [
                            .white.opacity(isDark ? 0.04 : 0.06),
                            .clear
                        ],
                        startPoint: .top,
                        endPoint: .center
                    )

                    // S1.3: Edge lighting — sharp 1px line + 24px soft bloom
                    VStack(spacing: 0) {
                        VStack(spacing: 0) {
                            LinearGradient(
                                colors: tierManager.tierGradientColors.map { $0.opacity(0.35) },
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                            .frame(height: 1)

                            LinearGradient(
                                colors: tierManager.tierGradientColors.map { $0.opacity(0.12) },
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                            .frame(height: 24)
                            .blur(radius: 12)
                        }
                        // Edge breathes subtly — the surface feels alive
                        .opacity(0.85 + 0.15 * Foundation.sin(Double(glowBreath) * 0.5))

                        Spacer()

                        // S1.3: Bottom inner shadow for depth
                        LinearGradient(
                            colors: [.clear, .black.opacity(0.03)],
                            startPoint: .top,
                            endPoint: .bottom
                        )
                        .frame(height: 8)
                    }
                }
                .opacity(showBarBg ? 1 : 0)
                .ignoresSafeArea(.container, edges: .bottom)
            }
        }
        .offset(y: showBar ? 0 : 200)
        .animation(.spring(duration: 0.4, bounce: 0.15), value: showBar)
    }

    // MARK: — Action Buttons Stack (iPad / Regular)

    private var actionButtonsStack: some View {
        VStack(spacing: 14) {
            if let onNext = onNextCategory, let nextName = nextCategoryName {
                Button {
                    onNext()
                } label: {
                    HStack(spacing: 10) {
                        Image(systemName: "arrow.right.circle.fill")
                            .font(.system(size: 15, weight: .semibold))
                        VStack(spacing: 2) {
                            Text(L.nextCategory)
                                .font(.system(size: 16, weight: .bold, design: .rounded))
                            Text(nextName)
                                .font(.system(size: 12, weight: .medium))
                                .opacity(0.6)
                        }
                    }
                    .foregroundStyle(.white)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 18)
                    .background {
                        ZStack {
                            RoundedRectangle(cornerRadius: 22)
                                .fill(
                                    LinearGradient(
                                        colors: [
                                            Color(hex: "#10b981"),
                                            Color(hex: "#059669"),
                                            Color(hex: "#047857")
                                        ],
                                        startPoint: .topLeading,
                                        endPoint: .bottomTrailing
                                    )
                                )
                            RoundedRectangle(cornerRadius: 22)
                                .fill(
                                    LinearGradient(
                                        colors: [.white.opacity(0.18), .clear],
                                        startPoint: .top,
                                        endPoint: .center
                                    )
                                )
                            RoundedRectangle(cornerRadius: 22)
                                .strokeBorder(
                                    LinearGradient(
                                        colors: [.white.opacity(0.45), .white.opacity(0.03)],
                                        startPoint: .topLeading,
                                        endPoint: .bottomTrailing
                                    ),
                                    lineWidth: 0.5
                                )
                        }
                    }
                    .shadow(color: Color(hex: "#10b981").opacity(0.3), radius: 24, y: 10)
                    .shadow(color: Color(hex: "#10b981").opacity(0.25), radius: 6, y: 2)
                }
                .buttonStyle(LumenCTAPressStyle(glowColor: Color(hex: "#10b981")))
            }

            Button {
                onPlayAgain()
            } label: {
                HStack(spacing: 10) {
                    Image(systemName: "arrow.counterclockwise")
                        .font(.system(size: 15, weight: .semibold))
                    Text(L.playAgain)
                        .font(.system(size: 16, weight: .bold, design: .rounded))
                }
                .foregroundStyle(.white)
                .frame(maxWidth: .infinity)
                .padding(.vertical, 18)
                .background {
                    ZStack {
                        RoundedRectangle(cornerRadius: 22)
                            .fill(
                                LinearGradient(
                                    colors: [
                                        Color(hex: "#667eea"),
                                        Color(hex: "#764ba2")
                                    ],
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing
                                )
                            )
                        RoundedRectangle(cornerRadius: 22)
                            .fill(
                                LinearGradient(
                                    colors: [.white.opacity(0.18), .clear],
                                    startPoint: .top,
                                    endPoint: .center
                                )
                            )
                        RoundedRectangle(cornerRadius: 22)
                            .strokeBorder(
                                LinearGradient(
                                    colors: [.white.opacity(0.45), .white.opacity(0.03)],
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing
                                ),
                                lineWidth: 0.5
                            )
                    }
                }
                .shadow(color: Color(hex: "#667eea").opacity(0.3), radius: 24, y: 10)
                .shadow(color: Color(hex: "#667eea").opacity(0.25), radius: 6, y: 2)
            }
            .buttonStyle(LumenCTAPressStyle(glowColor: Color(hex: "#667eea")))

            // Share button (iPad) — with tier shimmer border
            Button {
                shareResult()
                withAnimation(.spring(duration: 0.3)) {
                    shareCompleted = true
                }
                DispatchQueue.main.asyncAfter(deadline: .now() + 1.5) {
                    withAnimation(.spring(duration: 0.3)) {
                        shareCompleted = false
                    }
                }
            } label: {
                HStack(spacing: 10) {
                    Image(systemName: shareCompleted ? "checkmark.circle.fill" : "square.and.arrow.up")
                        .font(.system(size: 14, weight: .semibold))
                        .contentTransition(.symbolEffect(.replace))
                    Text(L.shareResult)
                        .font(.system(size: 15, weight: .semibold))
                }
                .foregroundStyle(
                    LinearGradient(
                        colors: tierManager.tierGradientColors.isEmpty
                            ? [.white.opacity(0.75), .white.opacity(0.55)]
                            : tierManager.tierGradientColors.map { $0.opacity(0.9) },
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .frame(maxWidth: .infinity)
                .padding(.vertical, 14)
                .background {
                    ZStack {
                        glassCard
                        RoundedRectangle(cornerRadius: 18)
                            .strokeBorder(
                                AngularGradient(
                                    gradient: Gradient(stops: [
                                        .init(color: (tierManager.tierGradientColors.first ?? .white).opacity(0.12), location: 0.0),
                                        .init(color: (tierManager.tierGradientColors.last ?? .white).opacity(0.22), location: 0.25),
                                        .init(color: .white.opacity(0.35), location: 0.33),
                                        .init(color: (tierManager.tierGradientColors.first ?? .white).opacity(0.12), location: 0.45),
                                        .init(color: (tierManager.tierGradientColors.last ?? .white).opacity(0.06), location: 0.75),
                                        .init(color: (tierManager.tierGradientColors.first ?? .white).opacity(0.12), location: 1.0),
                                    ]),
                                    center: .center,
                                    angle: .degrees(ringRotation)
                                ),
                                lineWidth: 0.8
                            )
                    }
                }
            }
            .buttonStyle(.plain)

            Button {
                onDismiss()
            } label: {
                HStack(spacing: 8) {
                    Image(systemName: "chevron.left")
                        .font(.system(size: 13, weight: .medium))
                    Text(L.backToCategories)
                        .font(.system(size: 15, weight: .medium))
                }
                .foregroundStyle(isDark ? .white.opacity(0.45) : .caribbeanPlum.opacity(0.55))
                .frame(maxWidth: .infinity)
                .padding(.vertical, 16)
            }
            .buttonStyle(LumenPressStyle(weight: .medium))
        }
    }

    // MARK: — Share (Story 10.3)

    private func shareResult() {
        let cardData = ShareableCardRenderer.CardData(
            score: score,
            correctAnswers: correctAnswers,
            totalQuestions: totalQuestions,
            accuracy: accuracy,
            gameType: gameType,
            categoryName: categoryName,
            tier: tierManager.currentTier,
            timeSpent: timeSpent,
            xpMultiplier: xpMultiplier
        )
        ShareableCardRenderer.shareCard(data: cardData)
    }

    // MARK: — Confetti Overlay (Story 10.4)

    private var confettiOverlay: some View {
        GeometryReader { geo in
            ZStack {
                ForEach(confettiParticles) { particle in
                    Circle()
                        .fill(particle.color)
                        .frame(width: particle.size, height: particle.size)
                        .position(x: particle.x, y: particle.y)
                        .opacity(particle.opacity)
                        .blur(radius: particle.size > 6 ? 0.5 : 0)
                }
            }
            .allowsHitTesting(false)
            .onAppear {
                launchConfetti(in: geo.size)
            }
        }
        .ignoresSafeArea()
    }

    private func launchConfetti(in size: CGSize) {
        let colors: [Color] = [.yellow, .orange, .green, .cyan, .pink, .purple, .mint]
        let centerX = size.width / 2
        let centerY = isCompact ? size.height * 0.2 : size.height * 0.25

        // Create particles at hero center
        var particles: [GameCompleteConfettiParticle] = []
        for i in 0..<40 {
            let angle = Double(i) / 40.0 * .pi * 2 + Double.random(in: -0.2...0.2)
            particles.append(GameCompleteConfettiParticle(
                x: centerX,
                y: centerY,
                size: CGFloat.random(in: 3...8),
                opacity: 1.0,
                color: colors[i % colors.count],
                targetX: centerX + cos(angle) * CGFloat.random(in: 60...180),
                targetY: centerY + sin(angle) * CGFloat.random(in: 60...200) - CGFloat.random(in: 20...80)
            ))
        }
        confettiParticles = particles

        // Burst outward
        withAnimation(.spring(duration: 0.6, bounce: 0.3)) {
            for i in confettiParticles.indices {
                confettiParticles[i].x = confettiParticles[i].targetX
                confettiParticles[i].y = confettiParticles[i].targetY
            }
        }

        // Fade and fall
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.8) {
            withAnimation(.easeIn(duration: 1.0)) {
                for i in confettiParticles.indices {
                    confettiParticles[i].opacity = 0
                    confettiParticles[i].y += CGFloat.random(in: 40...120)
                }
            }
        }

        // Clean up
        DispatchQueue.main.asyncAfter(deadline: .now() + 2.0) {
            showConfetti = false
            confettiParticles = []
        }
    }

    // MARK: — XP Breakdown

    private var finalXP: Int { Int(Double(score) * xpMultiplier) }

    private var xpBreakdownSection: some View {
        VStack(spacing: 10) {
            HStack(spacing: 6) {
                Image(systemName: "bolt.fill")
                    .font(.system(size: 14, weight: .semibold))
                    .foregroundStyle(tierManager.tierGradientColors.first ?? .purple)
                Text(L.xpBonus)
                    .font(.system(size: 14, weight: .semibold))
                    .foregroundStyle(isDark ? .white.opacity(0.7) : .caribbeanPlum)
            }

            HStack(spacing: 8) {
                Text("\(score)")
                    .font(.system(size: 18, weight: .bold, design: .rounded))
                    .foregroundStyle(isDark ? .white.opacity(0.6) : .caribbeanPlum.opacity(0.7))

                Image(systemName: "xmark")
                    .font(.system(size: 12, weight: .bold))
                    .foregroundStyle(isDark ? .white.opacity(0.35) : .caribbeanMist)

                XPMultiplierBadge(multiplier: xpMultiplier, tier: tierManager.currentTier)

                Image(systemName: "equal")
                    .font(.system(size: 12, weight: .bold))
                    .foregroundStyle(isDark ? .white.opacity(0.35) : .caribbeanMist)

                Text("\(finalXP)")
                    .font(.system(size: 22, weight: .bold, design: .rounded))
                    .foregroundStyle(
                        LinearGradient(
                            colors: tierManager.tierGradientColors,
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )

                Text("XP")
                    .font(.system(size: 12, weight: .semibold))
                    .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
            }
        }
        .padding(.vertical, 16)
        .padding(.horizontal, 20)
        .background {
            RoundedRectangle(cornerRadius: 20)
                .fill(.ultraThinMaterial)
                .opacity(0.15)
                .overlay(
                    RoundedRectangle(cornerRadius: 20)
                        .strokeBorder(
                            LinearGradient(
                                colors: tierManager.tierGradientColors.map { $0.opacity(0.3) },
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            ),
                            lineWidth: 0.5
                        )
                )
        }
    }

    // MARK: — Tier-Specific Sections

    private var resultsConfig: TierManager.SessionResultsConfig {
        tierManager.sessionResultsConfig()
    }

    @ViewBuilder
    private var tierSpecificSections: some View {
        let config = resultsConfig

        // Time & Streak (Pro+)
        if config.sections.contains(.timeAndStreak) {
            timeAndStreakSection
        } else if tierManager.currentTier == .free {
            lockedSectionHint(for: .timeAndStreak)
        }

        // Previous session comparison (Pro+)
        if config.sections.contains(.previousComparison) {
            previousComparisonSection
        }

        // Performance graph placeholder (Elite+)
        if config.sections.contains(.performanceGraph) {
            performanceGraphSection
        } else if tierManager.currentTier == .pro {
            lockedSectionHint(for: .performanceGraph)
        }

        // Weak areas placeholder (Elite+)
        if config.sections.contains(.weakAreas) {
            weakAreasSection
        }
    }

    // MARK: Time & Streak Section

    private var timeAndStreakSection: some View {
        HStack(spacing: 0) {
            VStack(spacing: 4) {
                Image(systemName: "clock.fill")
                    .font(.system(size: 14))
                    .foregroundStyle(.cyan.opacity(0.7))
                Text(formatTime(timeSpent))
                    .font(.system(size: 16, weight: .bold, design: .rounded))
                    .foregroundStyle(isDark ? .white : .caribbeanInk)
                Text(L.timeSpentLabel)
                    .font(.system(size: 10, weight: .medium))
                    .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
                    .textCase(.uppercase)
                    .tracking(0.5)
            }
            .frame(maxWidth: .infinity)

            ZStack {
                if isDark {
                    Capsule()
                        .fill(.white.opacity(0.1))
                        .frame(width: 1, height: 30)
                } else {
                    Capsule()
                        .fill(
                            LinearGradient(
                                colors: [.clear, Color.white.opacity(0.7), .clear],
                                startPoint: .top, endPoint: .bottom
                            )
                        )
                        .frame(width: 4, height: 30)
                        .blur(radius: 2)
                    Capsule()
                        .fill(
                            LinearGradient(
                                colors: [.clear, Color.white.opacity(0.9), .clear],
                                startPoint: .top, endPoint: .bottom
                            )
                        )
                        .frame(width: 1, height: 30)
                }
            }

            VStack(spacing: 4) {
                Image(systemName: "flame.fill")
                    .font(.system(size: 14))
                    .foregroundStyle(.orange.opacity(0.7))
                Text(L.streakActive)
                    .font(.system(size: 16, weight: .bold, design: .rounded))
                    .foregroundStyle(isDark ? .white : .caribbeanInk)
                Text(L.streakLabel)
                    .font(.system(size: 10, weight: .medium))
                    .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
                    .textCase(.uppercase)
                    .tracking(0.5)
            }
            .frame(maxWidth: .infinity)
        }
        .padding(.vertical, 16)
        .background {
            glassCard
        }
        .padding(.bottom, 10)
    }

    // MARK: Previous Comparison Section

    private var previousComparisonSection: some View {
        HStack(spacing: 12) {
            Image(systemName: "chart.line.uptrend.xyaxis")
                .font(.system(size: 20))
                .foregroundStyle(.green.opacity(0.7))

            VStack(alignment: .leading, spacing: 2) {
                Text(L.vsPreviousSession)
                    .font(.system(size: 13, weight: .semibold))
                    .foregroundStyle(isDark ? .white.opacity(0.7) : .caribbeanPlum)
                Text(L.keepImproving)
                    .font(.system(size: 11))
                    .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
            }

            Spacer()

            Image(systemName: "arrow.up.right")
                .font(.system(size: 14, weight: .semibold))
                .foregroundStyle(.green)
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 14)
        .background {
            glassCard
        }
        .padding(.bottom, 10)
    }

    // MARK: Performance Graph Section

    private var performanceGraphSection: some View {
        VStack(spacing: 10) {
            HStack {
                Image(systemName: "chart.xyaxis.line")
                    .font(.system(size: 14))
                    .foregroundStyle(.purple.opacity(0.7))
                Text(L.recentPerformance)
                    .font(.system(size: 13, weight: .semibold))
                    .foregroundStyle(isDark ? .white.opacity(0.7) : .caribbeanPlum)
                Spacer()
                Text(L.last7Sessions)
                    .font(.system(size: 11))
                    .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
            }

            // Mini bar chart placeholder
            HStack(alignment: .bottom, spacing: 6) {
                ForEach(0..<7, id: \.self) { i in
                    let height = CGFloat([0.4, 0.6, 0.5, 0.7, 0.65, 0.8, accuracy / 100.0][i])
                    RoundedRectangle(cornerRadius: 4)
                        .fill(
                            LinearGradient(
                                colors: i == 6
                                    ? [performanceTier.color, performanceTier.color.opacity(0.5)]
                                    : isDark
                                        ? [.white.opacity(0.15), .white.opacity(0.08)]
                                        : [Color.caribbeanOcean.opacity(0.20), Color.caribbeanOcean.opacity(0.10)],
                                startPoint: .top,
                                endPoint: .bottom
                            )
                        )
                        .frame(height: max(8, height * 50))
                }
            }
            .frame(height: 55)
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 14)
        .background {
            glassCard
        }
        .padding(.bottom, 10)
    }

    // MARK: Weak Areas Section

    private var weakAreasSection: some View {
        VStack(spacing: 8) {
            HStack {
                Image(systemName: "exclamationmark.triangle.fill")
                    .font(.system(size: 14))
                    .foregroundStyle(.orange.opacity(0.7))
                Text(L.areasToImprove)
                    .font(.system(size: 13, weight: .semibold))
                    .foregroundStyle(isDark ? .white.opacity(0.7) : .caribbeanPlum)
                Spacer()
            }

            if wrongAnswers > 0 {
                HStack(spacing: 8) {
                    Circle()
                        .fill(.orange.opacity(0.3))
                        .frame(width: 6, height: 6)
                    Text(L.reviewIncorrect(wrongAnswers))
                        .font(.system(size: 12))
                        .foregroundStyle(isDark ? .white.opacity(0.6) : .caribbeanPlum.opacity(0.8))
                    Spacer()
                }
            }
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 14)
        .background {
            glassCard
        }
        .padding(.bottom, 10)
    }

    // MARK: Locked Section Hint

    private func lockedSectionHint(for section: TierManager.SessionResultsSection) -> some View {
        let tier = TierManager.minimumTierForSection(section)
        return HStack(spacing: 8) {
            Image(systemName: "lock.fill")
                .font(.system(size: 12))
                .foregroundStyle(isDark ? .white.opacity(0.3) : .caribbeanMist)
            Text(L.availableOn(tier.displayName))
                .font(.system(size: 12))
                .foregroundStyle(isDark ? .white.opacity(0.35) : .caribbeanMist)
            Spacer()
            Image(systemName: tier.iconName)
                .font(.system(size: 12))
                .foregroundStyle(tier.gradientColors.first ?? .purple)
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 10)
        .background {
            RoundedRectangle(cornerRadius: 14)
                .fill(.ultraThinMaterial)
                .opacity(0.08)
        }
        .padding(.bottom, 8)
    }

    // MARK: Glass Card Background

    private var glassCard: some View {
        RoundedRectangle(cornerRadius: 18)
            .fill(.ultraThinMaterial)
            .opacity(isDark ? 0.12 : 0.20)
            .overlay(
                RoundedRectangle(cornerRadius: 18)
                    .strokeBorder(
                        LinearGradient(
                            colors: isDark
                                ? [.white.opacity(0.15), .white.opacity(0.04)]
                                : [Color.caribbeanBorder, Color.caribbeanBorderSubtle],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        ),
                        lineWidth: 0.5
                    )
            )
    }

    private func formatTime(_ seconds: Int) -> String {
        let mins = seconds / 60
        let secs = seconds % 60
        if mins > 0 {
            return "\(mins)m \(secs)s"
        }
        return "\(secs)s"
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

    // MARK: — Entrance Sequence (Story 10.4)

    private func startEntranceSequence() {
        // Haptic at transition moment
        if accuracy >= 90 {
            HapticsService.shared.perfectScore()
        } else if accuracy >= 60 {
            HapticsService.shared.celebrate()
        } else {
            HapticsService.shared.wrongAnswer()
        }

        // Hero icon scales from 0.5→1.0 with spring
        withAnimation(.spring(duration: 0.5, bounce: 0.2)) {
            showIcon = true
        }

        // Title appears quickly after icon
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.2) {
            withAnimation(.spring(duration: 0.5, bounce: 0.15)) {
                showTitle = true
            }
        }

        // Score counter starts immediately with hero
        let scoreTarget = score
        let accuracyTarget = Int(accuracy)
        let steps = 20
        for i in 1...steps {
            DispatchQueue.main.asyncAfter(deadline: .now() + Double(i) * 0.04) {
                withAnimation(.default) {
                    displayedScore = scoreTarget * i / steps
                    displayedAccuracy = accuracyTarget * i / steps
                }
            }
        }

        // Stats row slides up from offset 40→0 with 0.3s delay
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) {
            withAnimation(.spring(duration: 0.6, bounce: 0.15)) {
                showStats = true
            }
        }

        // Extras appear with slight delay
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.6) {
            withAnimation(.easeOut(duration: 0.5)) {
                showExtras = true
            }
        }

        // Buttons (for iPad) and bottom bar (for phones)
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.8) {
            withAnimation(.easeOut(duration: 0.5)) {
                showButtons = true
            }
        }

        // S2: Staggered bottom bar entrance
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
            showBar = true
        }
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.55) {
            withAnimation(.easeOut(duration: 0.3)) {
                showBarBg = true
            }
        }
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.65) {
            withAnimation(.spring(duration: 0.35, bounce: 0.12)) {
                showBarPrimary = true
            }
        }
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.7) {
            withAnimation(.easeOut(duration: 0.3)) {
                showBarShare = true
            }
        }
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.8) {
            withAnimation(.easeOut(duration: 0.3)) {
                showBarSecondary = true
            }
        }
        // S4.3: Share attention pulse starts 2s after bar appears
        DispatchQueue.main.asyncAfter(deadline: .now() + 2.0) {
            withAnimation(.easeInOut(duration: 2).repeatForever(autoreverses: true)) {
                shareBreath = .pi * 2
            }
        }

        // Perfect score confetti burst
        if accuracy >= 100 {
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.4) {
                showConfetti = true
            }
        }

        // Ambient animations
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

// MARK: - Game Complete Confetti Particle

struct GameCompleteConfettiParticle: Identifiable {
    let id = UUID()
    var x: CGFloat
    var y: CGFloat
    var size: CGFloat
    var opacity: Double
    var color: Color
    var targetX: CGFloat
    var targetY: CGFloat
}
