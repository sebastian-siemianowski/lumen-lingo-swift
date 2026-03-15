import Foundation
import SwiftData

// MARK: - Flashcards ViewModel

/// Port of useFlashcardsGame.jsx — manages flashcard game state, scoring, mastery.
@Observable
final class FlashcardsViewModel {
    // Game state
    var currentCard: Int = 0
    var score: Int = 0
    var correctAnswers: Int = 0
    var wrongAnswers: Int = 0
    var currentStreak: Int = 0
    var showParticles: Bool = false
    var gameComplete: Bool = false
    var isFlipped: Bool = false
    var flashcards: [FlashcardWord] = []
    var contentAvailable: Bool = true
    var isLoading: Bool = true
    var continuousMode: Bool = false
    var masteredWords: Set<String> = []

    // Category navigation
    var categoryKey: String
    var allCategoryKeys: [String] = []
    var currentCategoryIndex: Int = 0

    private let progressService: ProgressService
    private let audioService = AudioService.shared
    private let startTime = Date()
    private var sourceLanguage: String
    private var targetLanguage: String

    init(categoryKey: String, sourceLanguage: String, targetLanguage: String, progressService: ProgressService) {
        self.categoryKey = categoryKey
        self.sourceLanguage = sourceLanguage
        self.targetLanguage = targetLanguage
        self.progressService = progressService
        self.continuousMode = UserDefaults.standard.bool(forKey: "flashcards_continuous_mode")
    }

    var currentFlashcard: FlashcardWord? {
        flashcards[safe: currentCard]
    }

    var progress: Double {
        guard !flashcards.isEmpty else { return 0 }
        return Double(currentCard) / Double(flashcards.count)
    }

    var totalCards: Int { flashcards.count }

    // MARK: - Load Content

    func loadContent() async {
        isLoading = true
        let categories = await ContentLoader.shared.loadFlashcardCategories(
            source: sourceLanguage,
            target: targetLanguage
        )

        allCategoryKeys = categories.map(\.key)
        currentCategoryIndex = allCategoryKeys.firstIndex(of: categoryKey) ?? 0

        if let category = categories.first(where: { $0.key == categoryKey }) {
            flashcards = category.items
            contentAvailable = !flashcards.isEmpty

            // Load mastered words
            masteredWords = progressService.masteredContentIDs(
                gameType: .flashCards,
                category: categoryKey,
                source: sourceLanguage,
                target: targetLanguage
            )
        } else {
            contentAvailable = false
        }
        isLoading = false
    }

    // MARK: - Game Actions

    func flipCard() {
        isFlipped.toggle()
        audioService.playCardFlipEnhanced()
        HapticsService.shared.cardFlip()
    }

    func handleAnswer(correct: Bool) {
        if correct {
            score += GameType.flashCards.scorePerCorrect
            correctAnswers += 1
            currentStreak += 1

            // Mark as mastered
            if let card = currentFlashcard {
                masteredWords.insert(card.id)
                progressService.markContentMastered(
                    gameType: .flashCards,
                    category: categoryKey,
                    contentID: card.id,
                    source: sourceLanguage,
                    target: targetLanguage
                )
            }

            audioService.playSwipeRight()
            HapticsService.shared.correctAnswer()

            if currentStreak >= 3 {
                showParticles = true
                audioService.playStreakBonus()
                HapticsService.shared.streakBuilding(count: currentStreak)
                Task { @MainActor in
                    try? await Task.sleep(for: .seconds(1))
                    showParticles = false
                }
            }
        } else {
            wrongAnswers += 1
            currentStreak = 0
            audioService.playSwipeLeft()
            HapticsService.shared.wrongAnswer()
        }

        // Advance to next card
        advanceCard()
    }

    private func advanceCard() {
        if currentCard + 1 < flashcards.count {
            currentCard += 1
            isFlipped = false
        } else {
            completeGame()
        }
    }

    func completeGame() {
        gameComplete = true
        let timeSpent = Int(Date().timeIntervalSince(startTime))

        let result = GameSessionResult(
            gameType: .flashCards,
            categoryKey: categoryKey,
            score: score,
            correctAnswers: correctAnswers,
            totalQuestions: flashcards.count,
            timeSpent: timeSpent,
            sourceLanguage: sourceLanguage,
            targetLanguage: targetLanguage
        )
        progressService.recordGameSession(result)
        audioService.playCelebration()
    }

    func resetGame() {
        currentCard = 0
        score = 0
        correctAnswers = 0
        wrongAnswers = 0
        currentStreak = 0
        gameComplete = false
        isFlipped = false
        showParticles = false
    }

    func toggleContinuousMode() {
        continuousMode.toggle()
        UserDefaults.standard.set(continuousMode, forKey: "flashcards_continuous_mode")
    }

    /// Navigate to next category (continuous mode)
    var nextCategoryKey: String? {
        let nextIndex = currentCategoryIndex + 1
        guard nextIndex < allCategoryKeys.count else { return nil }
        return allCategoryKeys[nextIndex]
    }
}
