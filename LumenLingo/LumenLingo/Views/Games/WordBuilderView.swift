import SwiftUI
import SwiftData

// MARK: - Word Builder Game View

/// Letter-by-letter word construction game with scrambled tiles,
/// answer slots, hint system, and celebration feedback.
struct WordBuilderView: View {
    let categoryId: String

    @Environment(\.modelContext) private var modelContext
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.dismiss) private var dismiss
    @Environment(AudioService.self) private var audioService
    @Environment(HapticsService.self) private var hapticsService
    @Environment(ContentLoader.self) private var contentLoader

    @Binding var hideTabBar: Bool

    @Query private var languagePrefs: [LanguagePreference]

    @State private var words: [WordBuilderWord] = []
    @State private var currentIndex: Int = 0
    @State private var score: Int = 0
    @State private var correctCount: Int = 0
    @State private var wrongCount: Int = 0
    @State private var streak: Int = 0
    @State private var isGameComplete: Bool = false
    @State private var wordTransitionId: UUID = UUID()
    @State private var isLoading: Bool = true
    @State private var categoryName: String = ""

    // Letter placement state
    @State private var scrambledLetters: [ScrambledLetter] = []
    @State private var placedLetters: [ScrambledLetter?] = []
    @State private var isChecking: Bool = false
    @State private var isCorrect: Bool? = nil
    @State private var shakeOffset: CGFloat = 0

    private var currentWord: WordBuilderWord? {
        guard currentIndex < words.count else { return nil }
        return words[currentIndex]
    }

    private var progress: Double {
        guard !words.isEmpty else { return 0 }
        return Double(currentIndex) / Double(words.count)
    }

    private var allSlotsFilled: Bool {
        placedLetters.allSatisfy { $0 != nil }
    }

    private var activeSlotIndex: Int {
        placedLetters.firstIndex(where: { $0 == nil }) ?? placedLetters.count
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
        .cosmicBackground(preset: .starburstRing, orbScheme: .lisboaGoldenHour)
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
            Text("Loading words...")
                .font(.headline)
                .foregroundStyle(.white.opacity(0.7))
        }
    }

    // MARK: - Gameplay

    private func gameplayView(word: WordBuilderWord) -> some View {
        VStack(spacing: 0) {
            exerciseHeader

            ScrollView {
                VStack(spacing: 24) {
                    // Hint / Clue
                    clueSection(word: word)
                        .id(wordTransitionId)
                        .transition(.asymmetric(
                            insertion: .scale(scale: 0.96).combined(with: .opacity),
                            removal: .scale(scale: 0.98).combined(with: .opacity)
                        ))

                    // Answer slots
                    answerSlots(word: word)
                        .offset(x: shakeOffset)

                    // Letter bank
                    letterBank

                    // Action buttons
                    actionButtons

                    Spacer(minLength: 80)
                }
                .padding(.horizontal, 20)
                .padding(.top, 16)
            }
        }
    }

    // MARK: - Exercise Header

    private var exerciseHeader: some View {
        VStack(spacing: 12) {
            HStack {
                Button { dismiss() } label: {
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

            GeometryReader { geo in
                ZStack(alignment: .leading) {
                    Capsule().fill(.white.opacity(0.1))
                    Capsule()
                        .fill(
                            LinearGradient(
                                colors: [Color(hex: "#fbbf24"), Color(hex: "#f97316")],
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                        .frame(width: geo.size.width * progress)
                        .animation(.spring(response: 0.4), value: progress)
                }
            }
            .frame(height: 4)

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
        .padding(.horizontal, 20)
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

    // MARK: - Clue Section

    private func clueSection(word: WordBuilderWord) -> some View {
        VStack(spacing: 8) {
            Text("Build the word")
                .font(.caption)
                .foregroundStyle(.white.opacity(0.5))

            Text(word.hint)
                .font(.title2.bold())
                .foregroundStyle(
                    LinearGradient(
                        colors: [Color(hex: "#10b981"), .white, Color(hex: "#a855f6")],
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .multilineTextAlignment(.center)
                .shadow(color: Color(hex: "#10b981").opacity(0.3), radius: 10)
        }
        .padding(20)
        .frame(maxWidth: .infinity)
        .background(
            RoundedRectangle(cornerRadius: 24)
                .fill(.ultraThinMaterial)
                .overlay(
                    RoundedRectangle(cornerRadius: 24)
                        .strokeBorder(.white.opacity(0.08), lineWidth: 1)
                )
        )
    }

    // MARK: - Answer Slots

    private func answerSlots(word: WordBuilderWord) -> some View {
        let columns = Array(
            repeating: GridItem(.flexible(), spacing: 8),
            count: min(word.word.count, 8)
        )

        return LazyVGrid(columns: columns, spacing: 8) {
            ForEach(0..<word.word.count, id: \.self) { index in
                slotTile(index: index)
            }
        }
        .padding(16)
        .background(
            RoundedRectangle(cornerRadius: 20)
                .fill(
                    isCorrect == true
                        ? .green.opacity(0.08)
                        : isCorrect == false
                            ? .orange.opacity(0.08)
                            : .white.opacity(0.04)
                )
                .overlay(
                    RoundedRectangle(cornerRadius: 20)
                        .strokeBorder(
                            isCorrect == true
                                ? .green.opacity(0.2)
                                : isCorrect == false
                                    ? .orange.opacity(0.2)
                                    : .white.opacity(0.06),
                            lineWidth: 1
                        )
                )
        )
        .animation(.spring(response: 0.3), value: isCorrect)
    }

    private func slotTile(index: Int) -> some View {
        let letter = index < placedLetters.count ? placedLetters[index] : nil
        let isActive = index == activeSlotIndex && !allSlotsFilled

        return Button {
            if let placed = letter {
                removeLetter(at: index, letter: placed)
            }
        } label: {
            ZStack {
                RoundedRectangle(cornerRadius: 12)
                    .fill(
                        letter != nil
                            ? AnyShapeStyle(LinearGradient(
                                colors: [Color(hex: "#06b6d4").opacity(0.15), Color(hex: "#0891b2").opacity(0.1)],
                                startPoint: .top, endPoint: .bottom
                            ))
                            : AnyShapeStyle(.white.opacity(0.06))
                    )
                    .overlay(
                        RoundedRectangle(cornerRadius: 12)
                            .strokeBorder(
                                isActive
                                    ? Color(hex: "#52bdff").opacity(0.5)
                                    : .white.opacity(letter != nil ? 0.15 : 0.08),
                                lineWidth: isActive ? 2 : 1
                            )
                    )

                if let letter {
                    Text(String(letter.character).uppercased())
                        .font(.system(size: 22, weight: .bold, design: .rounded))
                        .foregroundStyle(.white)
                        .transition(.scale.combined(with: .opacity))
                }
            }
            .frame(height: 50)
            .shadow(
                color: isActive ? Color(hex: "#52bdff").opacity(0.3) : .clear,
                radius: isActive ? 8 : 0
            )
        }
        .buttonStyle(.plain)
        .disabled(letter == nil)
    }

    // MARK: - Letter Bank

    private var letterBank: some View {
        let availableLetters = scrambledLetters.filter { !$0.isPlaced }
        let columns = Array(
            repeating: GridItem(.flexible(), spacing: 8),
            count: min(max(scrambledLetters.count, 4), 8)
        )

        return VStack(spacing: 8) {
            Text("Available Letters")
                .font(.caption)
                .foregroundStyle(.white.opacity(0.4))

            LazyVGrid(columns: columns, spacing: 8) {
                ForEach(scrambledLetters) { letter in
                    if letter.isPlaced {
                        // Placeholder for placed letters
                        RoundedRectangle(cornerRadius: 12)
                            .fill(.white.opacity(0.03))
                            .frame(height: 50)
                            .overlay(
                                RoundedRectangle(cornerRadius: 12)
                                    .strokeBorder(.white.opacity(0.04), lineWidth: 1)
                            )
                    } else {
                        letterTile(letter)
                    }
                }
            }
        }
        .padding(16)
        .background(
            RoundedRectangle(cornerRadius: 20)
                .fill(.white.opacity(0.04))
                .overlay(
                    RoundedRectangle(cornerRadius: 20)
                        .strokeBorder(.white.opacity(0.06), lineWidth: 1)
                )
        )
    }

    private func letterTile(_ letter: ScrambledLetter) -> some View {
        Button {
            placeLetter(letter)
        } label: {
            ZStack {
                RoundedRectangle(cornerRadius: 12)
                    .fill(.ultraThinMaterial)
                    .overlay(
                        RoundedRectangle(cornerRadius: 12)
                            .strokeBorder(.white.opacity(0.12), lineWidth: 1)
                    )

                Text(String(letter.character).uppercased())
                    .font(.system(size: 22, weight: .bold, design: .rounded))
                    .foregroundStyle(.white)
            }
            .frame(height: 50)
        }
        .buttonStyle(.plain)
        .transition(.scale)
        .disabled(isChecking)
    }

    // MARK: - Action Buttons

    private var actionButtons: some View {
        HStack(spacing: 12) {
            // Clear button
            Button {
                clearAllLetters()
            } label: {
                HStack(spacing: 6) {
                    Image(systemName: "trash")
                    Text("Clear")
                }
                .font(.subheadline.bold())
                .foregroundStyle(.white.opacity(0.7))
                .padding(.horizontal, 20)
                .padding(.vertical, 12)
                .background(
                    RoundedRectangle(cornerRadius: 16)
                        .fill(.red.opacity(0.1))
                        .overlay(
                            RoundedRectangle(cornerRadius: 16)
                                .strokeBorder(.red.opacity(0.15), lineWidth: 1)
                        )
                )
            }
            .buttonStyle(.plain)
            .disabled(placedLetters.allSatisfy { $0 == nil })

            Spacer()

            // Check button
            Button {
                checkAnswer()
            } label: {
                HStack(spacing: 6) {
                    Image(systemName: "checkmark")
                    Text("Check")
                }
                .font(.subheadline.bold())
                .foregroundStyle(.white)
                .padding(.horizontal, 24)
                .padding(.vertical, 12)
                .background(
                    RoundedRectangle(cornerRadius: 16)
                        .fill(
                            allSlotsFilled
                                ? AnyShapeStyle(LinearGradient(
                                    colors: [Color(hex: "#10b981"), Color(hex: "#059669")],
                                    startPoint: .leading, endPoint: .trailing
                                ))
                                : AnyShapeStyle(.white.opacity(0.08))
                        )
                )
                .shadow(color: allSlotsFilled ? Color(hex: "#10b981").opacity(0.3) : .clear, radius: 10)
            }
            .buttonStyle(.plain)
            .disabled(!allSlotsFilled || isChecking)
        }
    }

    // MARK: - Game Complete / Empty

    private var gameCompleteView: some View {
        GameCompleteView(
            score: score,
            correctAnswers: correctCount,
            wrongAnswers: wrongCount,
            totalQuestions: words.count,
            gameType: .wordBuilder,
            categoryName: categoryName,
            onPlayAgain: { resetGame() },
            onDismiss: { dismiss() }
        )
    }

    private var emptyStateView: some View {
        VStack(spacing: 16) {
            Image(systemName: "tray")
                .font(.system(size: 48))
                .foregroundStyle(.white.opacity(0.4))
            Text("No words available")
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
            let categories = await contentLoader.loadWordBuilderCategories(source: source, target: target)
            if let category = categories.first(where: { $0.id == categoryId }) {
                self.words = category.items
                self.categoryName = category.name
            }
            isLoading = false
            if let word = currentWord {
                setupWord(word)
            }
        }
    }

    private func setupWord(_ word: WordBuilderWord) {
        let letters = Array(word.word).enumerated().map { index, char in
            ScrambledLetter(id: UUID(), character: char, originalIndex: index)
        }
        scrambledLetters = letters.shuffled()
        placedLetters = Array(repeating: nil, count: word.word.count)
        isCorrect = nil
        isChecking = false
    }

    private func placeLetter(_ letter: ScrambledLetter) {
        guard let slotIndex = placedLetters.firstIndex(where: { $0 == nil }) else { return }

        withAnimation(.spring(response: 0.3, dampingFraction: 0.7)) {
            placedLetters[slotIndex] = letter
            if let idx = scrambledLetters.firstIndex(where: { $0.id == letter.id }) {
                scrambledLetters[idx].isPlaced = true
            }
        }

        audioService.playPlink()
        hapticsService.lightImpact()
    }

    private func removeLetter(at index: Int, letter: ScrambledLetter) {
        withAnimation(.spring(response: 0.3)) {
            placedLetters[index] = nil
            if let idx = scrambledLetters.firstIndex(where: { $0.id == letter.id }) {
                scrambledLetters[idx].isPlaced = false
            }
        }
        hapticsService.lightImpact()
    }

    private func clearAllLetters() {
        withAnimation(.spring(response: 0.3)) {
            placedLetters = Array(repeating: nil, count: placedLetters.count)
            for i in scrambledLetters.indices {
                scrambledLetters[i].isPlaced = false
            }
            isCorrect = nil
        }
        hapticsService.lightImpact()
    }

    private func checkAnswer() {
        guard allSlotsFilled, let word = currentWord else { return }
        isChecking = true

        let answer = placedLetters.compactMap { $0 }.map { String($0.character) }.joined()
        let correct = answer.lowercased() == word.word.lowercased()

        withAnimation(.spring(response: 0.3)) {
            isCorrect = correct
        }

        if correct {
            correctCount += 1
            score += 15
            streak += 1

            if streak >= 3 {
                audioService.playStreakBonus()
            } else {
                audioService.playWordCorrect()
            }
            hapticsService.success()

            // Mark mastered
            let progressService = ProgressService(modelContext: modelContext)
            let langPref = languagePrefs.first
            progressService.markContentMastered(
                gameType: .wordBuilder,
                category: categoryId,
                contentID: word.word,
                source: langPref?.sourceLanguage ?? "english",
                target: langPref?.targetLanguage ?? "spanish"
            )

            // Auto-advance after 2s
            DispatchQueue.main.asyncAfter(deadline: .now() + 2.0) {
                advanceWord()
            }
        } else {
            wrongCount += 1
            streak = 0
            audioService.playSoftNudge()
            hapticsService.error()

            // Shake animation
            withAnimation(.spring(response: 0.1, dampingFraction: 0.2)) {
                shakeOffset = -4
            }
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.1) {
                withAnimation(.spring(response: 0.1, dampingFraction: 0.2)) {
                    shakeOffset = 4
                }
            }
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.2) {
                withAnimation(.spring(response: 0.1, dampingFraction: 0.3)) {
                    shakeOffset = -3
                }
            }
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) {
                withAnimation(.spring(response: 0.15)) {
                    shakeOffset = 0
                }
            }

            // Clear after 1.5s for retry
            DispatchQueue.main.asyncAfter(deadline: .now() + 1.5) {
                clearAllLetters()
                isChecking = false
            }
        }
    }

    private func advanceWord() {
        if currentIndex + 1 >= words.count {
            completeGame()
        } else {
            withAnimation {
                currentIndex += 1
                wordTransitionId = UUID()
            }
            if let word = currentWord {
                setupWord(word)
            }
        }
    }

    private func completeGame() {
        let progressService = ProgressService(modelContext: modelContext)
        let result = GameSessionResult(
            gameType: .wordBuilder,
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
        isGameComplete = false
        wordTransitionId = UUID()
        if let word = currentWord {
            setupWord(word)
        }
    }
}

// MARK: - Scrambled Letter Model

struct ScrambledLetter: Identifiable, Equatable {
    let id: UUID
    let character: Character
    let originalIndex: Int
    var isPlaced: Bool = false
}
