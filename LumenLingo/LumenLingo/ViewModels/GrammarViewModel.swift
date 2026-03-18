import Foundation
import SwiftData

// MARK: - Grammar ViewModel

/// Port of useGrammarGame.jsx — manages grammar quiz state, scoring, performance mood.
@MainActor
@Observable
final class GrammarViewModel {
    // Game state
    var currentQuestion: Int = 0
    var score: Int = 0
    var correct: Int = 0
    var wrong: Int = 0
    var currentStreak: Int = 0
    var hasAnswered: Bool = false
    var isAnswerCorrect: Bool = false
    var selectedAnswer: String? = nil
    var showComplete: Bool = false
    var questions: [GrammarQuestion] = []
    var contentAvailable: Bool = true
    var isLoading: Bool = true
    var continuousMode: Bool = false
    var masteredQuestions: Set<String> = []
    var performanceMood: PerformanceMood = .neutral

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
        self.continuousMode = UserDefaults.standard.bool(forKey: "grammar_continuous_mode")
    }

    var currentGrammarQuestion: GrammarQuestion? {
        questions[safe: currentQuestion]
    }

    var progress: Double {
        guard !questions.isEmpty else { return 0 }
        return Double(currentQuestion) / Double(questions.count)
    }

    var totalQuestions: Int { questions.count }

    var accuracy: Double {
        let total = correct + wrong
        guard total > 0 else { return 0 }
        return Double(correct) / Double(total) * 100
    }

    // MARK: - Load Content

    func loadContent() async {
        isLoading = true
        let categories = await ContentLoader.shared.loadGrammarCategories(
            source: sourceLanguage,
            target: targetLanguage
        )

        allCategoryKeys = categories.map(\.key)
        currentCategoryIndex = allCategoryKeys.firstIndex(of: categoryKey) ?? 0

        if let category = categories.first(where: { $0.key == categoryKey }) {
            questions = category.items
            contentAvailable = !questions.isEmpty

            masteredQuestions = progressService.masteredContentIDs(
                gameType: .grammar,
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

    /// Phase 1: User selects an answer (immediate visual feedback)
    func selectAnswer(_ answer: String) {
        guard !hasAnswered, let question = currentGrammarQuestion else { return }

        selectedAnswer = answer
        hasAnswered = true
        isAnswerCorrect = (answer == question.correct)

        if isAnswerCorrect {
            correct += 1
            currentStreak += 1
            score += GameType.grammar.scorePerCorrect

            // Mark as mastered
            masteredQuestions.insert(question.id)
            progressService.markContentMastered(
                gameType: .grammar,
                category: categoryKey,
                contentID: question.id,
                source: sourceLanguage,
                target: targetLanguage
            )

            audioService.playGrammarCorrect(consecutiveCount: currentStreak)
            HapticsService.shared.correctAnswer()
        } else {
            wrong += 1
            currentStreak = 0
            audioService.playGrammarWrong()
            HapticsService.shared.wrongAnswer()
        }

        // Update performance mood
        updatePerformanceMood()
    }

    /// Phase 2: User confirms and advances to next question
    func nextQuestion() {
        hasAnswered = false
        isAnswerCorrect = false
        selectedAnswer = nil

        if currentQuestion + 1 < questions.count {
            currentQuestion += 1
        } else {
            completeGame()
        }
    }

    private func updatePerformanceMood() {
        let total = correct + wrong
        guard total >= 2 else { return }
        let acc = Double(correct) / Double(total)

        if acc >= 0.7 {
            performanceMood = .warm
        } else if acc < 0.4 {
            performanceMood = .cool
        } else {
            performanceMood = .neutral
        }
    }

    func completeGame() {
        showComplete = true
        let timeSpent = Int(Date().timeIntervalSince(startTime))

        let result = GameSessionResult(
            gameType: .grammar,
            categoryKey: categoryKey,
            score: score,
            correctAnswers: correct,
            totalQuestions: questions.count,
            timeSpent: timeSpent,
            sourceLanguage: sourceLanguage,
            targetLanguage: targetLanguage
        )
        progressService.recordGameSession(result)
        audioService.playCelebration()
    }

    func resetGame() {
        currentQuestion = 0
        score = 0
        correct = 0
        wrong = 0
        currentStreak = 0
        hasAnswered = false
        isAnswerCorrect = false
        selectedAnswer = nil
        showComplete = false
        performanceMood = .neutral
    }

    func toggleContinuousMode() {
        continuousMode.toggle()
        UserDefaults.standard.set(continuousMode, forKey: "grammar_continuous_mode")
    }

    var nextCategoryKey: String? {
        let nextIndex = currentCategoryIndex + 1
        guard nextIndex < allCategoryKeys.count else { return nil }
        return allCategoryKeys[nextIndex]
    }
}
