import SwiftUI
import SwiftData

// MARK: - Grammar Game View

/// Multiple-choice grammar quiz with performance mood gradients,
/// explanation panel, and answer feedback animations.
struct GrammarView: View {
    let categoryId: String

    @Environment(\.modelContext) private var modelContext
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.dismiss) private var dismiss
    @Environment(AudioService.self) private var audioService
    @Environment(HapticsService.self) private var hapticsService
    @Environment(ContentLoader.self) private var contentLoader

    @Binding var hideTabBar: Bool

    @Query private var languagePrefs: [LanguagePreference]

    @State private var questions: [GrammarQuestion] = []
    @State private var currentIndex: Int = 0
    @State private var score: Int = 0
    @State private var correctCount: Int = 0
    @State private var wrongCount: Int = 0
    @State private var streak: Int = 0
    @State private var selectedAnswer: String? = nil
    @State private var isAnswered: Bool = false
    @State private var isGameComplete: Bool = false
    @State private var showExplanation: Bool = false
    @State private var questionTransitionId: UUID = UUID()
    @State private var isLoading: Bool = true
    @State private var categoryName: String = ""

    // Idle hint
    @State private var idleTimer: Timer? = nil
    @State private var hintGlowAnswer: String? = nil
    @State private var hintGlowOpacity: Double = 0

    private var currentQuestion: GrammarQuestion? {
        guard currentIndex < questions.count else { return nil }
        return questions[currentIndex]
    }

    private var progress: Double {
        guard !questions.isEmpty else { return 0 }
        return Double(currentIndex) / Double(questions.count)
    }

    private var performanceMood: PerformanceMood {
        let total = correctCount + wrongCount
        guard total > 0 else { return .neutral }
        let acc = Double(correctCount) / Double(total)
        if acc >= 0.7 { return .warm }
        if acc < 0.4 { return .cool }
        return .neutral
    }

    private let answerLabels = ["A", "B", "C", "D"]

    var body: some View {
        ZStack {
            if isLoading {
                loadingView
            } else if isGameComplete {
                gameCompleteView
            } else if let question = currentQuestion {
                gameplayView(question: question)
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
            Text("Loading questions...")
                .font(.headline)
                .foregroundStyle(.white.opacity(0.7))
        }
    }

    // MARK: - Gameplay

    private func gameplayView(question: GrammarQuestion) -> some View {
        ScrollView {
            VStack(spacing: 20) {
                exerciseHeader

                // Question card
                questionCard(question: question)
                    .id(questionTransitionId)
                    .transition(.asymmetric(
                        insertion: .scale(scale: 0.96).combined(with: .opacity).combined(with: .offset(y: 20)),
                        removal: .scale(scale: 0.98).combined(with: .opacity).combined(with: .offset(y: -10))
                    ))
                    .animation(.spring(response: 0.6, dampingFraction: 0.8), value: questionTransitionId)

                Spacer(minLength: 80)
            }
            .padding(.horizontal, 20)
            .padding(.top, 8)
        }
        .onAppear { resetGrammarIdleTimer() }
        .onChange(of: questionTransitionId) { resetGrammarIdleTimer() }
        .onDisappear { idleTimer?.invalidate() }
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

            // Progress bar
            AnimatedProgressBar(
                progress: progress * 100,
                height: 4,
                gradient: [Color(hex: "#f093fb"), Color(hex: "#f5576c"), Color(hex: "#e11d48")]
            )

            HStack(spacing: 16) {
                statPill(icon: "checkmark", value: "\(correctCount)", color: .green)
                statPill(icon: "xmark", value: "\(wrongCount)", color: .orange)
                if streak > 0 {
                    statPill(icon: "flame.fill", value: "\(streak)", color: .yellow)
                }
                Spacer()
                Text("\(currentIndex + 1)/\(questions.count)")
                    .font(.caption)
                    .foregroundStyle(.white.opacity(0.5))
            }
        }
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

    // MARK: - Question Card

    private func questionCard(question: GrammarQuestion) -> some View {
        VStack(spacing: 20) {
            // Question text panel
            questionTextPanel(question: question)

            // Answer options
            answerGrid(question: question)

            // Explanation (after answering)
            if isAnswered, let explanation = question.explanation, !explanation.isEmpty {
                explanationPanel(text: explanation)
                    .transition(.move(edge: .bottom).combined(with: .opacity))
            }

            // Next button (after answering)
            if isAnswered {
                nextButton
                    .transition(.scale.combined(with: .opacity))
            }
        }
        .padding(20)
        .background(
            ZStack {
                GlassCardBackground(
                    cornerRadius: 28,
                    borderColor: moodColor,
                    borderOpacity: 0.1,
                    tintColor: moodColor
                )

                // Glass curvature highlight at top
                VStack {
                    RoundedRectangle(cornerRadius: 28)
                        .fill(
                            LinearGradient(
                                colors: [.white.opacity(0.10), .clear],
                                startPoint: .top,
                                endPoint: .center
                            )
                        )
                        .frame(height: 50)
                    Spacer()
                }
                .clipShape(RoundedRectangle(cornerRadius: 28))
            }
        )
        .clipShape(RoundedRectangle(cornerRadius: 28))
        .shadow(color: moodColor.opacity(0.08), radius: 25, y: 10)
    }

    private var moodColor: Color {
        switch performanceMood {
        case .warm: Color(hex: "#f093fb")
        case .cool: Color(hex: "#818cf8")
        case .neutral: Color(hex: "#764ba2")
        }
    }

    private func questionTextPanel(question: GrammarQuestion) -> some View {
        VStack(spacing: 12) {
            if isAnswered {
                // Show question with glowing green answer filled in
                filledQuestionText(question)
            } else {
                Text(question.question)
                    .font(.title3.bold())
                    .foregroundStyle(.white)
                    .multilineTextAlignment(.center)
            }

            if let translation = question.translation, !translation.isEmpty {
                Text(translation)
                    .font(.subheadline)
                    .foregroundStyle(.white.opacity(0.55))
                    .italic()
            }
        }
        .padding(16)
        .frame(maxWidth: .infinity)
        .background(
            RoundedRectangle(cornerRadius: 20)
                .fill(
                    LinearGradient(
                        colors: isAnswered
                            ? [Color(hex: "#10b981").opacity(0.12), Color(hex: "#0d9488").opacity(0.06)]
                            : [Color(hex: "#764ba2").opacity(0.12), Color(hex: "#667eea").opacity(0.06)],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )
                .overlay(
                    RoundedRectangle(cornerRadius: 20)
                        .strokeBorder(
                            isAnswered ? Color(hex: "#10b981").opacity(0.15) : .white.opacity(0.06),
                            lineWidth: 1
                        )
                )
        )
    }

    /// Renders the question with the correct answer highlighted in glowing green
    /// instead of plain brackets. Handles multiple blanks and various separators.
    @ViewBuilder
    private func filledQuestionText(_ question: GrammarQuestion) -> some View {
        let correct = question.correctAnswer
        let text = question.question

        // Split the question on any run of underscores (3+)
        let segments = Self.splitOnBlanks(text)
        let blankCount = segments.count - 1

        if blankCount > 0 {
            // Determine answer parts for each blank
            let answerParts = Self.splitAnswer(correct, into: blankCount)

            // Build attributed text: segment0 + answer0 + segment1 + answer1 + ...
            let composed = segments.enumerated().reduce(Text("")) { result, pair in
                let (i, segment) = pair
                var built = result + Text(segment)
                    .font(.title3.bold())
                    .foregroundColor(.white)
                if i < answerParts.count {
                    built = built + Text(answerParts[i])
                        .font(.title3.bold())
                        .foregroundColor(Color(hex: "#10b981"))
                }
                return built
            }

            composed
                .multilineTextAlignment(.center)
                .shadow(color: Color(hex: "#10b981").opacity(0.4), radius: 8)
        } else {
            Text(text)
                .font(.title3.bold())
                .foregroundStyle(.white)
                .multilineTextAlignment(.center)
        }
    }

    /// Splits `text` on runs of underscores (3+).
    private static func splitOnBlanks(_ text: String) -> [String] {
        let pattern = try? NSRegularExpression(pattern: "_{3,}")
        guard let pattern else { return [text] }
        let nsText = text as NSString
        let matches = pattern.matches(in: text, range: NSRange(location: 0, length: nsText.length))
        guard !matches.isEmpty else { return [text] }

        var segments: [String] = []
        var lastEnd = 0
        for match in matches {
            let start = match.range.location
            segments.append(nsText.substring(with: NSRange(location: lastEnd, length: start - lastEnd)))
            lastEnd = start + match.range.length
        }
        segments.append(nsText.substring(from: lastEnd))
        return segments
    }

    /// Splits an answer string into parts to fill multiple blanks.
    /// Tries " / " separator, then "..." separator, then fills all blanks
    /// with the full answer.
    private static func splitAnswer(_ answer: String, into count: Int) -> [String] {
        guard count > 1 else { return [answer] }

        // Try " / " separator (e.g. "tengo / llamaré")
        let slashParts = answer.components(separatedBy: " / ")
        if slashParts.count == count { return slashParts }

        // Try "..." separator (e.g. "ne...pas")
        let dotParts = answer.components(separatedBy: "...")
        if dotParts.count == count { return dotParts }

        // Try ", " separator
        let commaParts = answer.components(separatedBy: ", ")
        if commaParts.count == count { return commaParts }

        // Fallback: put full answer in first blank, empty for rest
        return [answer] + Array(repeating: "", count: count - 1)
    }

    // MARK: - Answer Grid

    private func answerGrid(question: GrammarQuestion) -> some View {
        LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible())], spacing: 12) {
            ForEach(Array(question.options.enumerated()), id: \.offset) { index, option in
                answerButton(
                    option: option,
                    label: index < answerLabels.count ? answerLabels[index] : "",
                    isCorrect: option == question.correctAnswer,
                    question: question
                )
            }
        }
    }

    private func answerButton(
        option: String,
        label: String,
        isCorrect: Bool,
        question: GrammarQuestion
    ) -> some View {
        let isSelected = selectedAnswer == option
        let showResult = isAnswered
        let isHinted = hintGlowAnswer == option && !isAnswered

        return Button {
            guard !isAnswered else { return }
            clearGrammarIdleHint()
            selectAnswer(option, isCorrect: isCorrect)
        } label: {
            HStack(spacing: 10) {
                // Letter badge
                Text(label)
                    .font(.caption.bold())
                    .foregroundStyle(.white.opacity(0.7))
                    .frame(width: 28, height: 28)
                    .background(
                        RoundedRectangle(cornerRadius: 8)
                            .fill(.white.opacity(0.1))
                    )

                Text(option)
                    .font(.subheadline.bold())
                    .foregroundStyle(.white)
                    .lineLimit(2)
                    .minimumScaleFactor(0.7)

                Spacer()

                // Result icon
                if showResult && isSelected {
                    Image(systemName: isCorrect ? "checkmark.circle.fill" : "xmark.circle.fill")
                        .foregroundStyle(isCorrect ? .green : .orange)
                        .transition(.scale.combined(with: .opacity))
                } else if showResult && isCorrect {
                    Image(systemName: "checkmark.circle.fill")
                        .foregroundStyle(.green.opacity(0.6))
                        .transition(.scale.combined(with: .opacity))
                }
            }
            .padding(14)
            .frame(maxWidth: .infinity, alignment: .leading)
            .background(
                RoundedRectangle(cornerRadius: 16)
                    .fill(answerBackground(isSelected: isSelected, isCorrect: isCorrect, showResult: showResult))
                    .overlay(
                        RoundedRectangle(cornerRadius: 16)
                            .strokeBorder(
                                answerBorder(isSelected: isSelected, isCorrect: isCorrect, showResult: showResult),
                                lineWidth: 1
                            )
                    )
            )
            .scaleEffect(showResult && isSelected && !isCorrect ? 1.0 : (showResult && !isSelected && !isCorrect ? 0.98 : 1.0))
            .opacity(showResult && !isSelected && !isCorrect ? 0.5 : 1.0)
            .shadow(color: isHinted ? Color(hex: "#a78bfa").opacity(hintGlowOpacity * 0.4) : .clear, radius: isHinted ? 12 : 0)
            .overlay(
                RoundedRectangle(cornerRadius: 16)
                    .strokeBorder(Color(hex: "#a78bfa").opacity(isHinted ? hintGlowOpacity * 0.5 : 0), lineWidth: 2)
            )
            .animation(.spring(response: 0.3), value: isAnswered)
        }
        .buttonStyle(ScaleButtonStyle())
        .disabled(isAnswered)
    }

    private func answerBackground(isSelected: Bool, isCorrect: Bool, showResult: Bool) -> some ShapeStyle {
        if showResult && isSelected && isCorrect {
            return AnyShapeStyle(LinearGradient(colors: [.green.opacity(0.2), .green.opacity(0.1)], startPoint: .leading, endPoint: .trailing))
        } else if showResult && isSelected && !isCorrect {
            return AnyShapeStyle(LinearGradient(colors: [.orange.opacity(0.2), .orange.opacity(0.1)], startPoint: .leading, endPoint: .trailing))
        } else if showResult && isCorrect {
            return AnyShapeStyle(LinearGradient(colors: [.green.opacity(0.08), .green.opacity(0.04)], startPoint: .leading, endPoint: .trailing))
        }
        return AnyShapeStyle(.white.opacity(0.06))
    }

    private func answerBorder(isSelected: Bool, isCorrect: Bool, showResult: Bool) -> some ShapeStyle {
        if showResult && isSelected && isCorrect { return AnyShapeStyle(.green.opacity(0.4)) }
        if showResult && isSelected && !isCorrect { return AnyShapeStyle(.orange.opacity(0.4)) }
        if showResult && isCorrect { return AnyShapeStyle(.green.opacity(0.2)) }
        return AnyShapeStyle(.white.opacity(0.08))
    }

    // MARK: - Explanation

    private func explanationPanel(text: String) -> some View {
        DisclosureGroup(isExpanded: $showExplanation) {
            Text(text)
                .font(.subheadline)
                .foregroundStyle(.white.opacity(0.8))
                .padding(.top, 8)
        } label: {
            HStack(spacing: 8) {
                Image(systemName: "lightbulb.fill")
                    .foregroundStyle(.yellow)
                Text("Grammar Tip")
                    .font(.subheadline.bold())
                    .foregroundStyle(.white)
            }
        }
        .tint(.white.opacity(0.6))
        .padding(14)
        .background(
            RoundedRectangle(cornerRadius: 16)
                .fill(Color(hex: "#3b82f6").opacity(0.08))
                .overlay(
                    RoundedRectangle(cornerRadius: 16)
                        .strokeBorder(Color(hex: "#3b82f6").opacity(0.15), lineWidth: 1)
                )
        )
    }

    // MARK: - Next Button

    private var nextButton: some View {
        Button {
            advanceQuestion()
        } label: {
            HStack(spacing: 8) {
                Text("Next")
                    .font(.headline)
                Image(systemName: "arrow.right")
            }
            .foregroundStyle(.white)
            .padding(.horizontal, 32)
            .padding(.vertical, 14)
            .background(
                Capsule()
                    .fill(
                        LinearGradient(
                            colors: [Color(hex: "#a855f7"), Color(hex: "#ec4899")],
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
            )
            .shadow(color: Color(hex: "#a855f7").opacity(0.4), radius: 15)
        }
        .buttonStyle(ScaleButtonStyle())
        .frame(maxWidth: .infinity, alignment: selectedAnswer == currentQuestion?.correctAnswer ? .trailing : .center)
    }

    // MARK: - Game Complete / Empty

    private var gameCompleteView: some View {
        GameCompleteView(
            score: score,
            correctAnswers: correctCount,
            wrongAnswers: wrongCount,
            totalQuestions: questions.count,
            gameType: .grammar,
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
            Text("No questions available")
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
            let categories = await contentLoader.loadGrammarCategories(source: source, target: target)
            if let category = categories.first(where: { $0.id == categoryId }) {
                self.questions = category.items
                self.categoryName = category.name
            }
            isLoading = false
        }
    }

    private func selectAnswer(_ answer: String, isCorrect: Bool) {
        selectedAnswer = answer
        isAnswered = true
        showExplanation = true

        if isCorrect {
            correctCount += 1
            score += 10
            streak += 1
            audioService.playWarmPulse()
            hapticsService.success()
        } else {
            wrongCount += 1
            streak = 0
            audioService.playSoftNudge()
            hapticsService.warning()
        }
    }

    private func advanceQuestion() {
        withAnimation(.spring(response: 0.5)) {
            selectedAnswer = nil
            isAnswered = false
            showExplanation = false
        }

        DispatchQueue.main.asyncAfter(deadline: .now() + 0.2) {
            if currentIndex + 1 >= questions.count {
                completeGame()
            } else {
                withAnimation {
                    currentIndex += 1
                    questionTransitionId = UUID()
                }
            }
        }
    }

    private func completeGame() {
        let progressService = ProgressService(modelContext: modelContext)
        let result = GameSessionResult(
            gameType: .grammar,
            categoryId: categoryId,
            categoryName: categoryName,
            score: score,
            correctAnswers: correctCount,
            totalQuestions: questions.count,
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
        selectedAnswer = nil
        isAnswered = false
        showExplanation = false
        isGameComplete = false
        questionTransitionId = UUID()
    }

    // MARK: - Idle Hint System

    private func resetGrammarIdleTimer() {
        clearGrammarIdleHint()
        idleTimer?.invalidate()
        idleTimer = Timer.scheduledTimer(withTimeInterval: 7.0, repeats: false) { _ in
            DispatchQueue.main.async {
                showGrammarIdleHint()
            }
        }
    }

    private func showGrammarIdleHint() {
        guard !isAnswered, let question = currentQuestion else { return }
        hintGlowAnswer = question.correctAnswer
        withAnimation(.easeInOut(duration: 1.2).repeatForever(autoreverses: true)) {
            hintGlowOpacity = 0.9
        }
    }

    private func clearGrammarIdleHint() {
        hintGlowAnswer = nil
        hintGlowOpacity = 0
    }
}
