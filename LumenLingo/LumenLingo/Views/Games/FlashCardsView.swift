import SwiftUI
import SwiftData

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

    private var currentWord: FlashcardWord? {
        guard currentIndex < words.count else { return nil }
        return words[currentIndex]
    }

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
        .cosmicBackground(preset: .celestialLagoon, orbScheme: .madridSunrise)
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
            Text("Loading cards...")
                .font(.headline)
                .foregroundStyle(.white.opacity(0.7))
        }
    }

    // MARK: - Gameplay

    private func gameplayView(word: FlashcardWord) -> some View {
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
            if showButtons {
                actionButtons
                    .transition(.move(edge: .bottom).combined(with: .opacity))
            }

            Spacer()
        }
        .padding(.horizontal, 20)
    }

    // MARK: - Exercise Header

    private var exerciseHeader: some View {
        VStack(spacing: 12) {
            HStack {
                Button {
                    dismiss()
                } label: {
                    HStack(spacing: 6) {
                        Image(systemName: "chevron.left")
                        Text("Back")
                    }
                    .font(.subheadline)
                    .foregroundStyle(.white.opacity(0.7))
                }

                Spacer()

                Text(categoryName)
                    .font(.subheadline.bold())
                    .foregroundStyle(.white)

                Spacer()

                // Score badge
                HStack(spacing: 4) {
                    Image(systemName: "bolt.fill")
                        .foregroundStyle(.yellow)
                    Text("\(score)")
                        .font(.subheadline.bold())
                        .foregroundStyle(.white)
                }
                .padding(.horizontal, 10)
                .padding(.vertical, 5)
                .background(Capsule().fill(.white.opacity(0.1)))
            }

            // Progress bar
            GeometryReader { geo in
                ZStack(alignment: .leading) {
                    Capsule()
                        .fill(.white.opacity(0.1))
                    Capsule()
                        .fill(
                            LinearGradient(
                                colors: [Color(hex: "#667eea"), Color(hex: "#06b6d4")],
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                        .frame(width: geo.size.width * progress)
                        .animation(.spring(response: 0.4), value: progress)
                }
            }
            .frame(height: 4)

            // Stats badges
            HStack(spacing: 16) {
                statPill(icon: "checkmark", value: "\(correctCount)", color: .green)
                statPill(icon: "xmark", value: "\(wrongCount)", color: .orange)
                if streak > 0 {
                    statPill(icon: "flame.fill", value: "\(streak)", color: .yellow)
                }
                Spacer()
                Text("\(currentIndex + 1)/\(words.count)")
                    .font(.caption)
                    .foregroundStyle(.white.opacity(0.5))
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
                .foregroundStyle(.white.opacity(0.8))
        }
        .padding(.horizontal, 8)
        .padding(.vertical, 3)
        .background(Capsule().fill(color.opacity(0.15)))
    }

    // MARK: - Flashcard

    private func flashcard(word: FlashcardWord) -> some View {
        ZStack {
            if !isFlipped {
                cardFront(word: word)
                    .rotation3DEffect(.degrees(0), axis: (x: 0, y: 1, z: 0))
            } else {
                cardBack(word: word)
                    .rotation3DEffect(.degrees(0), axis: (x: 0, y: 1, z: 0))
            }
        }
        .frame(maxWidth: 500, minHeight: 340)
        .onTapGesture {
            flipCard()
        }
        .rotation3DEffect(
            .degrees(isFlipped ? 180 : 0),
            axis: (x: 0, y: 1, z: 0),
            perspective: 0.4
        )
        .animation(.spring(response: 0.7, dampingFraction: 0.75), value: isFlipped)
    }

    private func cardFront(word: FlashcardWord) -> some View {
        VStack(spacing: 20) {
            Spacer()

            // Decorative icon
            Image(systemName: "sparkles")
                .font(.title3)
                .foregroundStyle(.white.opacity(0.3))
                .symbolEffect(.pulse, options: .repeating.speed(0.3))

            // Main word
            Text(word.front)
                .font(.system(size: dynamicFontSize(for: word.front), weight: .bold))
                .foregroundStyle(.white)
                .multilineTextAlignment(.center)
                .shadow(color: Color(hex: "#667eea").opacity(0.3), radius: 10)

            // Example
            if let example = word.exampleTranslation, !example.isEmpty {
                Text(example)
                    .font(.subheadline)
                    .foregroundStyle(.white.opacity(0.5))
                    .italic()
                    .multilineTextAlignment(.center)
                    .padding(.horizontal, 20)
            }

            Spacer()

            // Tap prompt
            HStack(spacing: 6) {
                Image(systemName: "hand.tap.fill")
                    .symbolEffect(.pulse, options: .repeating.speed(0.4))
                Text("Tap to see meaning")
            }
            .font(.caption)
            .foregroundStyle(.white.opacity(0.4))
            .padding(.bottom, 16)
        }
        .padding(24)
        .frame(maxWidth: .infinity, minHeight: 340)
        .background(
            RoundedRectangle(cornerRadius: 32)
                .fill(.ultraThinMaterial)
                .overlay(
                    RoundedRectangle(cornerRadius: 32)
                        .fill(
                            LinearGradient(
                                colors: colorScheme == .dark
                                    ? [Color(hex: "#667eea").opacity(0.1), Color(hex: "#764ba2").opacity(0.05)]
                                    : [.white.opacity(0.3), Color(hex: "#667eea").opacity(0.05)],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            )
                        )
                )
                .overlay(
                    RoundedRectangle(cornerRadius: 32)
                        .strokeBorder(.white.opacity(0.12), lineWidth: 1)
                )
        )
        .shadow(color: Color(hex: "#667eea").opacity(0.15), radius: 30, y: 10)
    }

    private func cardBack(word: FlashcardWord) -> some View {
        VStack(spacing: 16) {
            Spacer()

            // Star decoration
            Image(systemName: "star.fill")
                .font(.title3)
                .foregroundStyle(.yellow.opacity(0.5))

            // Target word (answer)
            Text(word.back)
                .font(.system(size: dynamicFontSize(for: word.back), weight: .bold))
                .foregroundStyle(.white)
                .multilineTextAlignment(.center)
                .shadow(color: Color(hex: "#10b981").opacity(0.3), radius: 10)

            // Divider
            Rectangle()
                .fill(.white.opacity(0.1))
                .frame(width: 60, height: 1)

            // Example sentence
            if let example = word.example, !example.isEmpty {
                Text(example)
                    .font(.subheadline)
                    .foregroundStyle(.white.opacity(0.7))
                    .italic()
                    .multilineTextAlignment(.center)
                    .padding(.horizontal, 20)
            }

            // Translation
            if let translation = word.exampleTranslation, !translation.isEmpty {
                Text(translation)
                    .font(.caption)
                    .foregroundStyle(.white.opacity(0.4))
                    .multilineTextAlignment(.center)
                    .padding(.horizontal, 20)
            }

            Spacer()

            // Word pair footer
            HStack {
                Text(word.front)
                    .font(.caption)
                    .foregroundStyle(.white.opacity(0.4))
                Image(systemName: "arrow.right")
                    .font(.caption2)
                    .foregroundStyle(.white.opacity(0.3))
                Text(word.back)
                    .font(.caption.bold())
                    .foregroundStyle(.white.opacity(0.6))
            }
            .padding(.bottom, 12)
        }
        .padding(24)
        .frame(maxWidth: .infinity, minHeight: 340)
        .background(
            RoundedRectangle(cornerRadius: 32)
                .fill(.ultraThinMaterial)
                .overlay(
                    RoundedRectangle(cornerRadius: 32)
                        .fill(
                            LinearGradient(
                                colors: colorScheme == .dark
                                    ? [Color(hex: "#10b981").opacity(0.1), Color(hex: "#0d9488").opacity(0.05)]
                                    : [.white.opacity(0.3), Color(hex: "#10b981").opacity(0.08)],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            )
                        )
                )
                .overlay(
                    RoundedRectangle(cornerRadius: 32)
                        .strokeBorder(.white.opacity(0.12), lineWidth: 1)
                )
        )
        .shadow(color: Color(hex: "#10b981").opacity(0.15), radius: 30, y: 10)
        .rotation3DEffect(.degrees(180), axis: (x: 0, y: 1, z: 0))
    }

    // MARK: - Action Buttons

    private var actionButtons: some View {
        HStack(spacing: 16) {
            // Still Learning
            Button {
                handleAnswer(correct: false)
            } label: {
                HStack(spacing: 10) {
                    Image(systemName: "arrow.counterclockwise")
                        .font(.system(size: 16, weight: .semibold))
                        .foregroundStyle(.orange)
                        .frame(width: 36, height: 36)
                        .background(Circle().fill(.orange.opacity(0.15)))

                    Text("Still Learning")
                        .font(.subheadline.bold())
                        .foregroundStyle(.white)
                }
                .padding(.horizontal, 20)
                .padding(.vertical, 14)
                .frame(maxWidth: .infinity)
                .background(
                    RoundedRectangle(cornerRadius: 28)
                        .fill(.ultraThinMaterial)
                        .overlay(
                            RoundedRectangle(cornerRadius: 28)
                                .strokeBorder(.orange.opacity(0.2), lineWidth: 1)
                        )
                )
            }
            .buttonStyle(.plain)

            // Got It
            Button {
                handleAnswer(correct: true)
            } label: {
                HStack(spacing: 10) {
                    Image(systemName: "checkmark")
                        .font(.system(size: 16, weight: .semibold))
                        .foregroundStyle(.green)
                        .frame(width: 36, height: 36)
                        .background(Circle().fill(.green.opacity(0.15)))

                    Text("Got It")
                        .font(.subheadline.bold())
                        .foregroundStyle(.white)
                }
                .padding(.horizontal, 20)
                .padding(.vertical, 14)
                .frame(maxWidth: .infinity)
                .background(
                    RoundedRectangle(cornerRadius: 28)
                        .fill(.ultraThinMaterial)
                        .overlay(
                            RoundedRectangle(cornerRadius: 28)
                                .strokeBorder(.green.opacity(0.2), lineWidth: 1)
                        )
                )
            }
            .buttonStyle(.plain)
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
                .foregroundStyle(.white.opacity(0.4))
            Text("No cards available")
                .font(.headline)
                .foregroundStyle(.white.opacity(0.7))
            Button("Go Back") { dismiss() }
                .buttonStyle(.bordered)
                .tint(.white)
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
        withAnimation {
            isFlipped = true
        }
        audioService.playPlink()
        hapticsService.lightImpact()

        DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) {
            withAnimation(.spring(response: 0.4)) {
                showButtons = true
            }
        }
    }

    private func handleAnswer(correct: Bool) {
        if correct {
            correctCount += 1
            score += 10
            streak += 1
            audioService.playWarmPulse()
            hapticsService.success()

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
            hapticsService.warning()
        }

        // Advance after delay
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.1) {
            advanceCard()
        }
    }

    private func advanceCard() {
        withAnimation(.spring(response: 0.5)) {
            showButtons = false
            isFlipped = false
        }

        DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) {
            if currentIndex + 1 >= words.count {
                completeGame()
            } else {
                withAnimation {
                    currentIndex += 1
                    cardTransitionId = UUID()
                }
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
        ScrollView {
            VStack(spacing: 28) {
                Spacer(minLength: 40)

                // Trophy / performance icon
                ZStack {
                    Circle()
                        .fill(performanceTier.color.opacity(0.15))
                        .frame(width: 100, height: 100)
                        .shadow(color: performanceTier.color.opacity(0.3), radius: 30)

                    Image(systemName: performanceTier.icon)
                        .font(.system(size: 44))
                        .foregroundStyle(performanceTier.color)
                        .symbolEffect(.bounce, options: .repeating.speed(0.2))
                }

                // Title
                Text(performanceTier.title)
                    .font(.largeTitle.bold())
                    .foregroundStyle(.white)

                Text(performanceTier.subtitle)
                    .font(.subheadline)
                    .foregroundStyle(.white.opacity(0.7))
                    .multilineTextAlignment(.center)

                // Stats grid
                LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible())], spacing: 16) {
                    completeStat(title: "Score", value: "\(score)", icon: "bolt.fill", color: .yellow)
                    completeStat(title: "Accuracy", value: "\(Int(accuracy))%", icon: "target", color: performanceTier.color)
                    completeStat(title: "Correct", value: "\(correctAnswers)", icon: "checkmark.circle.fill", color: .green)
                    completeStat(title: "Wrong", value: "\(wrongAnswers)", icon: "xmark.circle.fill", color: .orange)
                }
                .padding(.horizontal, 20)

                // Action buttons
                VStack(spacing: 12) {
                    Button {
                        onPlayAgain()
                    } label: {
                        HStack {
                            Image(systemName: "arrow.counterclockwise")
                            Text("Play Again")
                        }
                        .font(.headline)
                        .foregroundStyle(.white)
                        .frame(maxWidth: .infinity)
                        .padding(.vertical, 16)
                        .background(
                            RoundedRectangle(cornerRadius: 20)
                                .fill(
                                    LinearGradient(
                                        colors: [Color(hex: "#667eea"), Color(hex: "#764ba2")],
                                        startPoint: .leading,
                                        endPoint: .trailing
                                    )
                                )
                        )
                    }
                    .buttonStyle(.plain)

                    Button {
                        onDismiss()
                    } label: {
                        HStack {
                            Image(systemName: "house.fill")
                            Text("Dashboard")
                        }
                        .font(.headline)
                        .foregroundStyle(.white.opacity(0.7))
                        .frame(maxWidth: .infinity)
                        .padding(.vertical, 16)
                        .background(
                            RoundedRectangle(cornerRadius: 20)
                                .fill(.ultraThinMaterial)
                                .overlay(
                                    RoundedRectangle(cornerRadius: 20)
                                        .strokeBorder(.white.opacity(0.1), lineWidth: 1)
                                )
                        )
                    }
                    .buttonStyle(.plain)
                }
                .padding(.horizontal, 20)

                Spacer(minLength: 60)
            }
        }
    }

    private func completeStat(title: String, value: String, icon: String, color: Color) -> some View {
        VStack(spacing: 8) {
            Image(systemName: icon)
                .font(.title2)
                .foregroundStyle(color)

            Text(value)
                .font(.title.bold())
                .foregroundStyle(.white)

            Text(title)
                .font(.caption)
                .foregroundStyle(.white.opacity(0.6))
        }
        .frame(maxWidth: .infinity)
        .padding(16)
        .background(
            RoundedRectangle(cornerRadius: 18)
                .fill(.ultraThinMaterial)
                .overlay(
                    RoundedRectangle(cornerRadius: 18)
                        .strokeBorder(color.opacity(0.15), lineWidth: 1)
                )
        )
    }
}

// MARK: - Performance Tier

private enum PerformanceTier {
    case excellent, great, good, keepGoing

    var title: String {
        switch self {
        case .excellent: "Excellent!"
        case .great: "Great Job!"
        case .good: "Good Work!"
        case .keepGoing: "Keep Going!"
        }
    }

    var subtitle: String {
        switch self {
        case .excellent: "Outstanding performance! You're a natural!"
        case .great: "Impressive work! Keep up the momentum!"
        case .good: "Solid effort! Practice makes perfect!"
        case .keepGoing: "Every session makes you better. Don't give up!"
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
