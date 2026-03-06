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

    // Undo stack
    @State private var undoStack: [Int] = []  // indices of placed slots in order

    // Idle hint
    @State private var idleTimer: Timer? = nil
    @State private var hintGlowIndex: Int? = nil
    @State private var hintGlowOpacity: Double = 0

    // Lumen Bar confidence
    @State private var lumenSegments: Int = 4  // starts at middle (0-7)

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
            Text("Loading words...")
                .font(.headline)
                .foregroundStyle(.white.opacity(0.7))
        }
    }

    // MARK: - Gameplay

    private func gameplayView(word: WordBuilderWord) -> some View {
        VStack(spacing: 0) {
            exerciseHeader

            // Lumen Bar
            lumenBar

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

                    // Letter bank with idle hint
                    letterBank

                    // Action buttons
                    actionButtons

                    Spacer(minLength: 80)
                }
                .padding(.horizontal, 20)
                .padding(.top, 16)
            }
        }
        .onAppear { resetIdleTimer() }
        .onChange(of: placedLetters.compactMap({ $0?.id })) {
            resetIdleTimer()
        }
        .onDisappear { idleTimer?.invalidate() }
    }

    // MARK: - Lumen Bar (7-segment confidence meter)

    private var lumenBar: some View {
        HStack(spacing: 3) {
            ForEach(0..<7, id: \.self) { seg in
                RoundedRectangle(cornerRadius: 3)
                    .fill(seg < lumenSegments ? lumenColor(for: seg) : .white.opacity(0.08))
                    .frame(height: 6)
                    .overlay(
                        RoundedRectangle(cornerRadius: 3)
                            .fill(seg < lumenSegments ? lumenColor(for: seg).opacity(0.5) : .clear)
                            .blur(radius: 4)
                    )
            }
        }
        .padding(.horizontal, 20)
        .padding(.vertical, 8)
        .animation(.spring(response: 0.4), value: lumenSegments)
    }

    private func lumenColor(for segment: Int) -> Color {
        switch segment {
        case 0, 1: return .red
        case 2, 3: return .orange
        case 4: return .yellow
        case 5: return Color(hex: "#22c55e")
        case 6: return .cyan
        default: return .gray
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

            AnimatedProgressBar(
                progress: progress * 100,
                height: 4,
                gradient: [Color(hex: "#fbbf24"), Color(hex: "#f97316"), Color(hex: "#ef4444")]
            )

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
        VStack(spacing: 10) {
            // Decorative top icon
            Image(systemName: "textformat.abc")
                .font(.system(size: 16))
                .foregroundStyle(
                    LinearGradient(
                        colors: [Color(hex: "#fb923c"), Color(hex: "#f59e0b")],
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .symbolEffect(.pulse, options: .repeating.speed(0.3))

            Text("Build the word")
                .font(.caption.bold())
                .foregroundStyle(.white.opacity(0.5))
                .textCase(.uppercase)
                .tracking(1.5)

            Text(word.hint)
                .font(.title2.bold())
                .foregroundStyle(
                    LinearGradient(
                        colors: [Color(hex: "#fbbf24"), .white, Color(hex: "#fb923c")],
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .multilineTextAlignment(.center)
                .shadow(color: Color(hex: "#f59e0b").opacity(0.4), radius: 12)
        }
        .padding(20)
        .frame(maxWidth: .infinity)
        .background(
            ZStack {
                GlassCardBackground(
                    cornerRadius: 24,
                    borderColor: Color(hex: "#fb923c"),
                    borderOpacity: 0.12,
                    tintColor: Color(hex: "#fb923c")
                )

                // Top reflection band
                VStack {
                    RoundedRectangle(cornerRadius: 24)
                        .fill(
                            LinearGradient(
                                colors: [.white.opacity(0.10), .clear],
                                startPoint: .top,
                                endPoint: .center
                            )
                        )
                        .frame(height: 40)
                    Spacer()
                }
                .clipShape(RoundedRectangle(cornerRadius: 24))
            }
        )
        .clipShape(RoundedRectangle(cornerRadius: 24))
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
        let isHinted = hintGlowIndex != nil && letter.originalIndex == nextCorrectLetterOriginalIndex

        return Button {
            placeLetter(letter)
        } label: {
            ZStack {
                RoundedRectangle(cornerRadius: 12)
                    .fill(.ultraThinMaterial)
                    .overlay(
                        // Inner glow highlight
                        RoundedRectangle(cornerRadius: 12)
                            .fill(
                                LinearGradient(
                                    colors: [.white.opacity(0.12), .clear],
                                    startPoint: .top,
                                    endPoint: .center
                                )
                            )
                    )
                    .overlay(
                        RoundedRectangle(cornerRadius: 12)
                            .strokeBorder(
                                isHinted ? Color(hex: "#fbbf24").opacity(hintGlowOpacity) : .white.opacity(0.15),
                                lineWidth: isHinted ? 2 : 1
                            )
                    )

                Text(String(letter.character).uppercased())
                    .font(.system(size: 22, weight: .bold, design: .rounded))
                    .foregroundStyle(.white)
                    .shadow(color: .white.opacity(0.15), radius: 2)
            }
            .frame(height: 50)
            .shadow(
                color: isHinted ? Color(hex: "#fbbf24").opacity(hintGlowOpacity * 0.5) : Color(hex: "#fb923c").opacity(0.15),
                radius: isHinted ? 12 : 6
            )
        }
        .buttonStyle(ScaleButtonStyle())
        .transition(.scale)
        .disabled(isChecking)
    }

    /// The original index of the next letter that should be placed
    private var nextCorrectLetterOriginalIndex: Int? {
        guard let word = currentWord else { return nil }
        let wordChars = Array(word.word)
        let slotIndex = placedLetters.firstIndex(where: { $0 == nil }) ?? placedLetters.count
        guard slotIndex < wordChars.count else { return nil }
        // Find the original index matching this position
        return slotIndex
    }

    // MARK: - Action Buttons

    private var actionButtons: some View {
        HStack(spacing: 12) {
            // Undo button
            Button {
                undoLastLetter()
            } label: {
                HStack(spacing: 6) {
                    Image(systemName: "arrow.uturn.backward")
                    Text("Undo")
                }
                .font(.subheadline.bold())
                .foregroundStyle(.white.opacity(0.7))
                .padding(.horizontal, 16)
                .padding(.vertical, 12)
                .background(
                    GlassCardBackground(
                        cornerRadius: 16,
                        borderColor: .cyan,
                        borderOpacity: 0.15,
                        tintColor: .cyan
                    )
                )
                .clipShape(RoundedRectangle(cornerRadius: 16))
            }
            .buttonStyle(ScaleButtonStyle())
            .disabled(undoStack.isEmpty || isChecking)
            .opacity(undoStack.isEmpty ? 0.4 : 1.0)

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
                .padding(.horizontal, 16)
                .padding(.vertical, 12)
                .background(
                    GlassCardBackground(
                        cornerRadius: 16,
                        borderColor: .red,
                        borderOpacity: 0.15,
                        tintColor: .red
                    )
                )
                .clipShape(RoundedRectangle(cornerRadius: 16))
            }
            .buttonStyle(ScaleButtonStyle())
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
                        .overlay(
                            RoundedRectangle(cornerRadius: 16)
                                .strokeBorder(
                                    allSlotsFilled ? Color(hex: "#10b981").opacity(0.3) : .white.opacity(0.06),
                                    lineWidth: 1
                                )
                        )
                )
                .shadow(color: allSlotsFilled ? Color(hex: "#10b981").opacity(0.35) : .clear, radius: 12)
            }
            .buttonStyle(ScaleButtonStyle())
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
        undoStack.removeAll()
        clearIdleHint()
    }

    private func placeLetter(_ letter: ScrambledLetter) {
        guard let slotIndex = placedLetters.firstIndex(where: { $0 == nil }) else { return }

        withAnimation(.spring(response: 0.3, dampingFraction: 0.7)) {
            placedLetters[slotIndex] = letter
            if let idx = scrambledLetters.firstIndex(where: { $0.id == letter.id }) {
                scrambledLetters[idx].isPlaced = true
            }
        }
        undoStack.append(slotIndex)
        clearIdleHint()

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
        undoStack.removeAll { $0 == index }
        hapticsService.lightImpact()
    }

    private func undoLastLetter() {
        guard let lastSlot = undoStack.popLast(),
              let letter = placedLetters[lastSlot] else { return }
        removeLetter(at: lastSlot, letter: letter)
    }

    private func clearAllLetters() {
        withAnimation(.spring(response: 0.3)) {
            placedLetters = Array(repeating: nil, count: placedLetters.count)
            for i in scrambledLetters.indices {
                scrambledLetters[i].isPlaced = false
            }
            isCorrect = nil
        }
        undoStack.removeAll()
        hapticsService.lightImpact()
    }

    // MARK: - Idle Hint System

    private func resetIdleTimer() {
        clearIdleHint()
        idleTimer?.invalidate()
        idleTimer = Timer.scheduledTimer(withTimeInterval: 7.0, repeats: false) { _ in
            DispatchQueue.main.async {
                showIdleHint()
            }
        }
    }

    private func showIdleHint() {
        guard let idx = nextCorrectLetterOriginalIndex else { return }
        hintGlowIndex = idx
        withAnimation(.easeInOut(duration: 1.0).repeatForever(autoreverses: true)) {
            hintGlowOpacity = 0.8
        }
    }

    private func clearIdleHint() {
        hintGlowIndex = nil
        hintGlowOpacity = 0
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
            lumenSegments = min(7, lumenSegments + 1)

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
            lumenSegments = max(0, lumenSegments - 1)
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
