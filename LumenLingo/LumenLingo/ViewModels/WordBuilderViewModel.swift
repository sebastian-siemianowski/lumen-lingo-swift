import Foundation
import SwiftData

// MARK: - Word Builder ViewModel

/// Port of useWordBuilderGame.jsx — manages word building game state.
@MainActor
@Observable
final class WordBuilderViewModel {
    // Game state
    var currentWordIndex: Int = 0
    var score: Int = 0
    var correctAnswers: Int = 0
    var wrongAnswers: Int = 0
    var currentStreak: Int = 0
    var showParticles: Bool = false
    var gameComplete: Bool = false
    var words: [WordBuilderWord] = []
    var contentAvailable: Bool = true
    var isLoading: Bool = true
    var masteredWords: Set<String> = []

    // Letter management
    var scrambledLetters: [ScrambledLetter] = []
    var placedLetters: [ScrambledLetter?] = []
    var isChecking: Bool = false
    var isCorrect: Bool? = nil

    struct ScrambledLetter: Identifiable, Equatable {
        let id = UUID()
        let character: Character
        var isPlaced: Bool = false
    }

    var categoryKey: String
    private let progressService: ProgressService
    private let audioService = AudioService.shared
    private var startTime = Date()
    private var sourceLanguage: String
    private var targetLanguage: String

    init(categoryKey: String, sourceLanguage: String, targetLanguage: String, progressService: ProgressService) {
        self.categoryKey = categoryKey
        self.sourceLanguage = sourceLanguage
        self.targetLanguage = targetLanguage
        self.progressService = progressService
    }

    var currentWord: WordBuilderWord? {
        words[safe: currentWordIndex]
    }

    var progress: Double {
        guard !words.isEmpty else { return 0 }
        return Double(currentWordIndex) / Double(words.count)
    }

    var totalWords: Int { words.count }

    var currentAnswer: String {
        String(placedLetters.compactMap { $0?.character })
    }

    var isAnswerComplete: Bool {
        guard let word = currentWord else { return false }
        return placedLetters.compactMap({ $0 }).count == word.word.count
    }

    // MARK: - Load Content

    func loadContent() async {
        isLoading = true
        let categories = await ContentLoader.shared.loadWordBuilderCategories(
            source: sourceLanguage,
            target: targetLanguage
        )

        if let category = categories.first(where: { $0.key == categoryKey }) {
            words = category.items
            contentAvailable = !words.isEmpty

            masteredWords = progressService.masteredContentIDs(
                gameType: .wordBuilder,
                category: categoryKey,
                source: sourceLanguage,
                target: targetLanguage
            )

            if !words.isEmpty {
                setupWord()
            }
        } else {
            contentAvailable = false
        }
        isLoading = false
    }

    // MARK: - Letter Management

    private func setupWord() {
        guard let word = currentWord else { return }
        let letters = Array(word.word).shuffled()
        scrambledLetters = letters.map { ScrambledLetter(character: $0) }
        placedLetters = Array(repeating: nil, count: word.word.count)
        isCorrect = nil
        isChecking = false
    }

    func placeLetter(_ letter: ScrambledLetter) {
        guard let emptyIndex = placedLetters.firstIndex(where: { $0 == nil }) else { return }
        guard let scrambledIndex = scrambledLetters.firstIndex(where: { $0.id == letter.id && !$0.isPlaced }) else { return }

        placedLetters[emptyIndex] = letter
        scrambledLetters[scrambledIndex].isPlaced = true

        audioService.playTilePlace()
        HapticsService.shared.tileSnap()
    }

    func removePlacedLetter(at index: Int) {
        guard let letter = placedLetters[index] else { return }
        placedLetters[index] = nil

        if let scrambledIndex = scrambledLetters.firstIndex(where: { $0.id == letter.id }) {
            scrambledLetters[scrambledIndex].isPlaced = false
        }

        audioService.playTilePick()
        HapticsService.shared.tileReturn()
    }

    func checkAnswer() {
        guard let word = currentWord, isAnswerComplete else { return }
        isChecking = true

        let answer = currentAnswer.lowercased()
        let correct = word.word.lowercased()

        if answer == correct {
            handleCorrectAnswer()
        } else {
            handleIncorrectAnswer()
        }
    }

    private func handleCorrectAnswer() {
        isCorrect = true
        score += GameType.wordBuilder.scorePerCorrect
        correctAnswers += 1
        currentStreak += 1
        showParticles = true

        if let word = currentWord {
            masteredWords.insert(word.id)
            progressService.markContentMastered(
                gameType: .wordBuilder,
                category: categoryKey,
                contentID: word.id,
                source: sourceLanguage,
                target: targetLanguage
            )
        }

        audioService.playWordCorrect()
        HapticsService.shared.correctAnswer()

        if currentStreak >= 3 {
            audioService.playStreakBonus()
            HapticsService.shared.streakBuilding(count: currentStreak)
        }

        // Auto-advance after delay
        Task { @MainActor in
            try? await Task.sleep(for: .seconds(2))
            showParticles = false
            advanceWord()
        }
    }

    private func handleIncorrectAnswer() {
        isCorrect = false
        wrongAnswers += 1
        currentStreak = 0

        audioService.playLetterWrong()
        HapticsService.shared.wrongAnswer()
    }

    func skipWord() {
        wrongAnswers += 1
        currentStreak = 0
        advanceWord()
    }

    private func advanceWord() {
        if currentWordIndex + 1 < words.count {
            currentWordIndex += 1
            setupWord()
        } else {
            completeGame()
        }
    }

    func completeGame() {
        gameComplete = true
        let timeSpent = Int(Date().timeIntervalSince(startTime))

        let result = GameSessionResult(
            gameType: .wordBuilder,
            categoryKey: categoryKey,
            score: score,
            correctAnswers: correctAnswers,
            totalQuestions: words.count,
            timeSpent: timeSpent,
            sourceLanguage: sourceLanguage,
            targetLanguage: targetLanguage
        )
        progressService.recordGameSession(result)
        audioService.playCelebration()
    }

    func resetGame() {
        currentWordIndex = 0
        score = 0
        correctAnswers = 0
        wrongAnswers = 0
        currentStreak = 0
        gameComplete = false
        showParticles = false
        startTime = Date()
        if !words.isEmpty {
            setupWord()
        }
    }

    func clearAnswer() {
        for i in placedLetters.indices {
            if let letter = placedLetters[i] {
                if let sIdx = scrambledLetters.firstIndex(where: { $0.id == letter.id }) {
                    scrambledLetters[sIdx].isPlaced = false
                }
                placedLetters[i] = nil
            }
        }
        isCorrect = nil
        isChecking = false
    }
}
