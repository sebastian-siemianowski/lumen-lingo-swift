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
    @Environment(TierManager.self) private var tierManager
    @Environment(PracticeTimeTracker.self) private var practiceTracker
    @Environment(\.localization) private var localization

    private var L: AppStrings { localization.strings }

    @Binding var hideTabBar: Bool
    @Binding var navigationPath: NavigationPath

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
                navigationPath.append(AppRoute.wordBuilderGame(categoryId: nextId))
            }
        }
    }

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

    private var currentWord: WordBuilderWord? {
        guard currentIndex < words.count else { return nil }
        return words[currentIndex]
    }

    private var isDark: Bool { colorScheme == .dark }

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
            gameType: .wordBuilder,
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
                .tint(isDark ? .white : .caribbeanInk)
            Text(L.loadingWords)
                .font(.headline)
                .foregroundStyle(isDark ? .white.opacity(0.7) : .caribbeanPlum)
        }
    }

    // MARK: - Gameplay

    private func gameplayView(word: WordBuilderWord) -> some View {
        VStack(spacing: 0) {
            GameHeader(
                categoryName: categoryName,
                score: score,
                correctCount: correctCount,
                wrongCount: wrongCount,
                streakCount: streak,
                currentQuestion: currentIndex + 1,
                totalQuestions: words.count,
                progressFraction: progress,
                theme: .wordBuilder,
                onBack: { dismiss() }
            )

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

    // MARK: - Exercise Header (now uses shared GameHeader component)

    // MARK: - Clue Section

    private func clueSection(word: WordBuilderWord) -> some View {
        ZStack(alignment: .topTrailing) {
            Text(word.hint)
                .font(.title3.bold())
                .foregroundStyle(
                    LinearGradient(
                        colors: [Color(hex: "#fbbf24"), .white, Color(hex: "#fb923c")],
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .multilineTextAlignment(.center)
                .shadow(color: Color(hex: "#f59e0b").opacity(0.4), radius: 12)
                .frame(maxWidth: .infinity)
                .padding(.horizontal, 16)
                .padding(.vertical, 20)

            Image(systemName: "lightbulb.fill")
                .font(.caption2)
                .foregroundStyle(.secondary.opacity(0.5))
                .padding(10)
        }
        .background(
            ZStack {
                GlassCardBackground(
                    cornerRadius: 20,
                    borderColor: Color(hex: "#fb923c"),
                    borderOpacity: 0.15,
                    tintColor: Color(hex: "#fb923c")
                )

                // Warm gradient border accent
                RoundedRectangle(cornerRadius: 20)
                    .strokeBorder(
                        LinearGradient(
                            colors: [Color(hex: "#fbbf24").opacity(0.25), Color(hex: "#fb923c").opacity(0.15)],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        ),
                        lineWidth: 1
                    )

                // Top reflection band
                VStack {
                    RoundedRectangle(cornerRadius: 20)
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
                .clipShape(RoundedRectangle(cornerRadius: 20))
            }
        )
        .clipShape(RoundedRectangle(cornerRadius: 20))
        .transition(.opacity)
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
                        .foregroundStyle(isDark ? .white : .caribbeanInk)
                        .transition(.scale.combined(with: .opacity))
                }
            }
            .frame(height: 50)
            .shadow(
                color: isActive ? Color(hex: "#52bdff").opacity(0.3) : .clear,
                radius: isActive ? 8 : 0
            )
        }
        .buttonStyle(LumenPressStyle(weight: .medium, accentColor: Color(hex: "#52bdff")))
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
            Text(L.availableLetters)
                .font(.caption)
                .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)

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
                    .foregroundStyle(isDark ? .white : .caribbeanInk)
                    .shadow(color: isDark ? .white.opacity(0.15) : .clear, radius: 2)
            }
            .frame(height: 50)
            .shadow(
                color: isHinted ? Color(hex: "#fbbf24").opacity(hintGlowOpacity * 0.5) : Color(hex: "#fb923c").opacity(0.15),
                radius: isHinted ? 12 : 6
            )
        }
        .buttonStyle(LumenPressStyle(weight: .medium, accentColor: Color(hex: "#fb923c")))
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

    // MARK: - Hint

    private var hasAvailableLetters: Bool {
        scrambledLetters.contains { !$0.isPlaced }
    }

    private func useHint() {
        guard let word = currentWord else { return }
        let wordChars = Array(word.word)
        guard let slotIndex = placedLetters.firstIndex(where: { $0 == nil }),
              slotIndex < wordChars.count else { return }

        let correctChar = wordChars[slotIndex]
        guard let letterToPlace = scrambledLetters.first(where: {
            !$0.isPlaced && $0.character == correctChar
        }) else { return }

        placeLetter(letterToPlace)
        audioService.playHintSparkle()
        HapticsService.shared.hintReveal()
    }

    // MARK: - Action Buttons

    private var actionButtons: some View {
        HStack(spacing: 8) {
            // Undo button
            Button {
                undoLastLetter()
            } label: {
                HStack(spacing: 4) {
                    Image(systemName: "arrow.uturn.backward")
                    Text(L.undo)
                }
                .font(.system(size: 13, weight: .semibold))
                .lineLimit(1)
                .minimumScaleFactor(0.7)
                .foregroundStyle(isDark ? .white.opacity(0.7) : .caribbeanPlum)
                .padding(.horizontal, 10)
                .frame(minHeight: 44)
                .background(
                    GlassCardBackground(
                        cornerRadius: 14,
                        borderColor: .cyan,
                        borderOpacity: 0.15,
                        tintColor: .cyan
                    )
                )
                .clipShape(RoundedRectangle(cornerRadius: 14))
            }
            .buttonStyle(LumenPressStyle(weight: .soft, accentColor: .cyan))
            .disabled(undoStack.isEmpty || isChecking)
            .opacity(undoStack.isEmpty ? 0.4 : 1.0)

            // Clear button
            Button {
                clearAllLetters()
            } label: {
                HStack(spacing: 4) {
                    Image(systemName: "trash")
                    Text(L.clear)
                }
                .font(.system(size: 13, weight: .semibold))
                .lineLimit(1)
                .minimumScaleFactor(0.7)
                .foregroundStyle(isDark ? .white.opacity(0.7) : .caribbeanPlum)
                .padding(.horizontal, 10)
                .frame(minHeight: 44)
                .background(
                    GlassCardBackground(
                        cornerRadius: 14,
                        borderColor: .red,
                        borderOpacity: 0.15,
                        tintColor: .red
                    )
                )
                .clipShape(RoundedRectangle(cornerRadius: 14))
            }
            .buttonStyle(LumenPressStyle(weight: .soft, accentColor: .red))
            .disabled(placedLetters.allSatisfy { $0 == nil })

            // Hint button
            Button {
                useHint()
            } label: {
                HStack(spacing: 4) {
                    Image(systemName: "lightbulb.fill")
                    Text(L.hint)
                }
                .font(.system(size: 13, weight: .semibold))
                .lineLimit(1)
                .minimumScaleFactor(0.7)
                .foregroundStyle(isDark ? .white.opacity(0.85) : .caribbeanPlum)
                .padding(.horizontal, 10)
                .frame(minHeight: 44)
                .background(
                    GlassCardBackground(
                        cornerRadius: 14,
                        borderColor: .purple,
                        borderOpacity: 0.2,
                        tintColor: .purple
                    )
                )
                .clipShape(RoundedRectangle(cornerRadius: 14))
            }
            .buttonStyle(LumenPressStyle(weight: .soft, accentColor: .purple))
            .disabled(!hasAvailableLetters || isChecking || isCorrect != nil)
            .opacity(!hasAvailableLetters ? 0.4 : 1.0)

            // Check button
            Button {
                checkAnswer()
            } label: {
                HStack(spacing: 4) {
                    Image(systemName: "checkmark")
                    Text(L.check)
                }
                .font(.system(size: 13, weight: .semibold))
                .lineLimit(1)
                .minimumScaleFactor(0.7)
                .foregroundStyle(.white)
                .padding(.horizontal, 14)
                .frame(minHeight: 44)
                .background(
                    RoundedRectangle(cornerRadius: 14)
                        .fill(
                            allSlotsFilled
                                ? AnyShapeStyle(LinearGradient(
                                    colors: [Color(hex: "#10b981"), Color(hex: "#059669")],
                                    startPoint: .leading, endPoint: .trailing
                                ))
                                : AnyShapeStyle(.white.opacity(0.08))
                        )
                        .overlay(
                            RoundedRectangle(cornerRadius: 14)
                                .strokeBorder(
                                    allSlotsFilled ? Color(hex: "#10b981").opacity(0.3) : .white.opacity(0.06),
                                    lineWidth: 1
                                )
                        )
                )
                .shadow(color: allSlotsFilled ? Color(hex: "#10b981").opacity(0.35) : .clear, radius: 12)
            }
            .buttonStyle(LumenCTAPressStyle(glowColor: Color(hex: "#10b981")))
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
            xpMultiplier: tierManager.xpMultiplier,
            timeSpent: lastTimeSpent,
            onPlayAgain: { resetGame() },
            onNextCategory: nextCategoryAction,
            nextCategoryName: nextUnplayedCategoryName,
            onDismiss: { dismiss() }
        )
    }

    private var emptyStateView: some View {
        VStack(spacing: 16) {
            Image(systemName: "tray")
                .font(.system(size: 48))
                .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
            Text(L.noWordsAvailable)
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

        audioService.playTilePlace()
        HapticsService.shared.tileSnap()
    }

    private func removeLetter(at index: Int, letter: ScrambledLetter) {
        withAnimation(.spring(response: 0.3)) {
            placedLetters[index] = nil
            if let idx = scrambledLetters.firstIndex(where: { $0.id == letter.id }) {
                scrambledLetters[idx].isPlaced = false
            }
        }
        undoStack.removeAll { $0 == index }
        HapticsService.shared.tileReturn()
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
        audioService.playLetterClear()
        HapticsService.shared.tileReturn()
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

            if streak >= 3 {
                audioService.playStreakBonus()
                TierHapticsService.shared.streakMilestone(level: tierManager.hapticLevel, count: streak)
            } else {
                audioService.playWordCorrect()
            }
            TierHapticsService.shared.correctAnswer(level: tierManager.hapticLevel)

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
            audioService.playLetterWrong()
            TierHapticsService.shared.wrongAnswer(level: tierManager.hapticLevel)

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
        let timeSpent = practiceTracker.endSession()
        lastTimeSpent = timeSpent
        let progressService = ProgressService(modelContext: modelContext)
        let langPref = languagePrefs.first
        let result = GameSessionResult(
            gameType: .wordBuilder,
            categoryId: categoryId,
            categoryName: categoryName,
            score: score,
            correctAnswers: correctCount,
            totalQuestions: words.count,
            timeSpent: timeSpent,
            sourceLanguage: langPref?.sourceLanguage ?? SupportedLanguage.english.rawValue,
            targetLanguage: langPref?.targetLanguage ?? SupportedLanguage.spanish.rawValue,
            xpMultiplier: tierManager.xpMultiplier
        )
        progressService.recordGameSession(result)
        audioService.playCelebration()
        HapticsService.shared.celebrate()

        // Find next unplayed category
        findNextUnplayedCategory(progressService: progressService)

        withAnimation(.spring(response: 0.6)) {
            isGameComplete = true
        }
    }

    private func findNextUnplayedCategory(progressService: ProgressService) {
        let langPref = languagePrefs.first
        let source = langPref?.sourceLanguage ?? SupportedLanguage.english.rawValue
        let target = langPref?.targetLanguage ?? SupportedLanguage.spanish.rawValue

        Task {
            let categories = await contentLoader.loadWordBuilderCategories(source: source, target: target)
            guard let currentIdx = categories.firstIndex(where: { $0.id == categoryId }) else { return }

            let ordered = Array(categories[(currentIdx + 1)...]) + Array(categories[..<currentIdx])
            for cat in ordered {
                let progress = progressService.categoryProgress(
                    gameType: .wordBuilder,
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
