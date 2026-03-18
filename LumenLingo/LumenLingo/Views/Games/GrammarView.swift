import SwiftUI
import SwiftData

// MARK: - Grammar Game View

/// Multiple-choice grammar quiz with performance mood gradients,
/// explanation panel, and answer feedback animations.
struct GrammarView: View {
    let categoryId: String

    @Environment(\.modelContext) private var modelContext
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.horizontalSizeClass) private var sizeClass
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
    @AppStorage("grammarTipsExpanded") private var tipsExpanded: Bool = true
    @State private var tipAvailablePulse: Bool = false
    @State private var wrongShakeAmount: CGFloat = 0
    @State private var questionTransitionId: UUID = UUID()
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
                navigationPath.append(AppRoute.grammarGame(categoryId: nextId))
            }
        }
    }

    // Idle hint
    @State private var idleTimer: Timer? = nil
    @State private var hintGlowAnswer: String? = nil
    @State private var hintGlowOpacity: Double = 0

    private var currentQuestion: GrammarQuestion? {
        guard currentIndex < questions.count else { return nil }
        return questions[currentIndex]
    }

    private var isDark: Bool { colorScheme == .dark }

    private var isLastQuestion: Bool { currentIndex + 1 >= questions.count }

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
            } else if let question = currentQuestion {
                ZStack(alignment: .top) {
                    gameplayView(question: question)

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
        }
        .onDisappear {
            hideTabBar = false
            practiceTracker.endSession()
        }
        .onReceive(NotificationCenter.default.publisher(for: .practiceTimeFiveMinuteWarning)) { _ in
            guard practiceTracker.isLimited(for: tierManager.currentTier) else { return }
            let feedback = UINotificationFeedbackGenerator()
            feedback.notificationOccurred(.warning)
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
        let result = GameSessionResult(
            gameType: .grammar,
            categoryId: categoryId,
            categoryName: categoryName,
            score: score,
            correctAnswers: correctCount,
            totalQuestions: correctCount + wrongCount,
            timeSpent: timeSpent,
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
            Text(L.loadingQuestions)
                .font(.headline)
                .foregroundStyle(isDark ? .white.opacity(0.7) : .caribbeanPlum)
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
        .scrollDismissesKeyboard(.interactively)
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

                HStack(spacing: 4) {
                    Image(systemName: "bolt.fill")
                        .foregroundStyle(.yellow)
                    Text("\(score)")
                        .font(.subheadline.bold())
                        .foregroundStyle(isDark ? .white : .caribbeanInk)
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
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanMist)
            }
        }
    }

    private func statPill(icon: String, value: String, color: Color) -> some View {
        HStack(spacing: 3) {
            Image(systemName: icon)
                .font(.system(size: sizeClass == .compact ? 10 : 12, weight: .bold))
                .foregroundStyle(color)
            Text(value)
                .font(sizeClass == .compact ? .caption2.bold() : .caption.bold())
                .foregroundStyle(isDark ? .white.opacity(0.8) : .caribbeanInk)
        }
        .padding(.horizontal, sizeClass == .compact ? 8 : 10)
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
                    .transition(.asymmetric(
                        insertion: .offset(y: 40).combined(with: .opacity),
                        removal: .opacity
                    ))
                    .animation(.spring(duration: 0.3), value: isAnswered)
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
        .overlay(
            RoundedRectangle(cornerRadius: 28)
                .strokeBorder(
                    LinearGradient(
                        colors: [Color(hex: "#f093fb").opacity(0.4), Color(hex: "#f5576c").opacity(0.3), Color(hex: "#a855f7").opacity(0.4)],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    ),
                    lineWidth: 1.5
                )
        )
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
        let isCorrectAnswer = isAnswered && selectedAnswer == question.correctAnswer

        return VStack(spacing: 12) {
            if isAnswered {
                filledQuestionText(question)
            } else {
                blankQuestionText(question)
            }

            if let translation = question.translation, !translation.isEmpty {
                Text(translation)
                    .font(.subheadline)
                    .foregroundStyle(.white.opacity(0.65))
                    .italic()
            }
        }
        .padding(20)
        .frame(maxWidth: .infinity)
        .background(
            ZStack {
                // Semi-transparent gradient that integrates with the glass card
                RoundedRectangle(cornerRadius: 20)
                    .fill(
                        LinearGradient(
                            colors: isCorrectAnswer
                                ? [Color(hex: "#065f46").opacity(0.65), Color(hex: "#047857").opacity(0.45)]
                                : [Color(hex: "#2E1065").opacity(0.55), Color(hex: "#1E3A5F").opacity(0.35)],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )

                // Top gloss highlight for depth
                VStack {
                    RoundedRectangle(cornerRadius: 20)
                        .fill(
                            LinearGradient(
                                colors: [.white.opacity(0.10), .clear],
                                startPoint: .top,
                                endPoint: .center
                            )
                        )
                        .frame(height: 30)
                    Spacer()
                }
                .clipShape(RoundedRectangle(cornerRadius: 20))
            }
            .overlay(
                RoundedRectangle(cornerRadius: 20)
                    .strokeBorder(
                        LinearGradient(
                            colors: isCorrectAnswer
                                ? [Color(hex: "#34d399").opacity(0.4), Color(hex: "#059669").opacity(0.25)]
                                : [Color(hex: "#f093fb").opacity(0.2), Color(hex: "#a855f7").opacity(0.2)],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        ),
                        lineWidth: 1
                    )
            )
        )
        .animation(.easeInOut(duration: 0.4), value: isAnswered)
    }

    /// Renders the question with styled underlined blank placeholders before answering.
    @ViewBuilder
    private func blankQuestionText(_ question: GrammarQuestion) -> some View {
        let text = question.question
        let segments = Self.splitOnBlanks(text)
        let blankCount = segments.count - 1

        if blankCount > 0 {
            let composed = segments.enumerated().reduce(Text("")) { result, pair in
                let (i, segment) = pair
                var built = result + Text(segment)
                    .font(.title3.bold())
                    .foregroundColor(.white)
                if i < blankCount {
                    built = built + Text("  ____  ")
                        .font(.title3.bold())
                        .foregroundColor(Color(hex: "#c4b5fd"))
                        .underline(color: Color(hex: "#c4b5fd").opacity(0.4))
                }
                return built
            }

            composed
                .multilineTextAlignment(.center)
                .shadow(color: .black.opacity(0.3), radius: 1)
        } else {
            Text(text)
                .font(.title3.bold())
                .foregroundColor(.white)
                .multilineTextAlignment(.center)
                .shadow(color: .black.opacity(0.3), radius: 1)
        }
    }

    /// Renders the question with the answer filled in after selection.
    /// Correct answer: green glow. Wrong answer: red strikethrough + green correction.
    @ViewBuilder
    private func filledQuestionText(_ question: GrammarQuestion) -> some View {
        let correct = question.correctAnswer
        let text = question.question
        let isCorrectAnswer = selectedAnswer == correct
        let displayAnswer = selectedAnswer ?? correct

        let segments = Self.splitOnBlanks(text)
        let blankCount = segments.count - 1

        if blankCount > 0 {
            let displayParts = Self.splitAnswer(displayAnswer, into: blankCount)
            let correctParts = Self.splitAnswer(correct, into: blankCount)

            let composed = segments.enumerated().reduce(Text("")) { result, pair in
                let (i, segment) = pair
                var built = result + Text(segment)
                    .font(.title3.bold())
                    .foregroundColor(.white)
                if i < displayParts.count {
                    if isCorrectAnswer {
                        built = built + Text(displayParts[i])
                            .font(.title3.bold())
                            .foregroundColor(Color(hex: "#34d399"))
                    } else {
                        built = built + Text(displayParts[i])
                            .font(.title3.bold())
                            .foregroundColor(Color(hex: "#fb7185"))
                            .strikethrough(color: Color(hex: "#fb7185").opacity(0.4))
                        + Text("  ")
                        + Text(correctParts[i])
                            .font(.title3.bold())
                            .foregroundColor(Color(hex: "#34d399"))
                            .underline(color: Color(hex: "#34d399").opacity(0.3))
                    }
                }
                return built
            }

            composed
                .multilineTextAlignment(.center)
                .shadow(color: isCorrectAnswer ? Color(hex: "#34d399").opacity(0.4) : Color(hex: "#fb7185").opacity(0.2), radius: 8)
        } else {
            Text(text)
                .font(.title3.bold())
                .foregroundColor(.white)
                .multilineTextAlignment(.center)
                .shadow(color: .black.opacity(0.3), radius: 1)
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
        let options = Array(question.options.enumerated())
        return Group {
            if sizeClass == .compact {
                // Single-column for phones — full-width cards, no truncation
                VStack(spacing: 8) {
                    ForEach(options, id: \.offset) { index, option in
                        answerButton(
                            option: option,
                            label: index < answerLabels.count ? answerLabels[index] : "",
                            isCorrect: option == question.correctAnswer,
                            question: question
                        )
                    }
                }
            } else {
                // 2-column grid for iPad — enough width per column
                LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible())], spacing: 12) {
                    ForEach(options, id: \.offset) { index, option in
                        answerButton(
                            option: option,
                            label: index < answerLabels.count ? answerLabels[index] : "",
                            isCorrect: option == question.correctAnswer,
                            question: question
                        )
                    }
                }
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
            HStack(alignment: .top, spacing: 12) {
                // Letter badge — glass circle, top-aligned
                Text(label)
                    .font(.caption.bold())
                    .foregroundStyle(.white.opacity(0.85))
                    .frame(width: 30, height: 30)
                    .background(
                        Circle()
                            .fill(.white.opacity(0.12))
                            .overlay(Circle().strokeBorder(.white.opacity(0.20), lineWidth: 0.75))
                    )

                Text(option)
                    .font(.body.bold())
                    .foregroundStyle(isDark ? .white : .caribbeanInk)
                    .lineLimit(nil)
                    .fixedSize(horizontal: false, vertical: true)
                    .multilineTextAlignment(.leading)

                Spacer(minLength: 4)

                // Result icon
                if showResult && isSelected {
                    Image(systemName: isCorrect ? "checkmark.circle.fill" : "xmark.circle.fill")
                        .font(.system(size: 20, weight: .semibold))
                        .foregroundStyle(isCorrect ? Color(hex: "#34d399") : Color(hex: "#fb7185"))
                        .transition(.scale.combined(with: .opacity))
                } else if showResult && isCorrect {
                    Image(systemName: "checkmark.circle.fill")
                        .font(.system(size: 20, weight: .semibold))
                        .foregroundStyle(Color(hex: "#34d399").opacity(0.6))
                        .transition(.scale.combined(with: .opacity))
                }
            }
            .padding(14)
            .frame(maxWidth: .infinity, minHeight: 48, alignment: .leading)
            .background(
                ZStack {
                    RoundedRectangle(cornerRadius: 16)
                        .fill(answerBackground(isSelected: isSelected, isCorrect: isCorrect, showResult: showResult))

                    // Top gloss highlight
                    VStack {
                        RoundedRectangle(cornerRadius: 16)
                            .fill(
                                LinearGradient(
                                    colors: [.white.opacity(0.08), .clear],
                                    startPoint: .top,
                                    endPoint: .center
                                )
                            )
                            .frame(height: 22)
                        Spacer()
                    }
                    .clipShape(RoundedRectangle(cornerRadius: 16))

                    RoundedRectangle(cornerRadius: 16)
                        .strokeBorder(
                            answerBorder(isSelected: isSelected, isCorrect: isCorrect, showResult: showResult),
                            lineWidth: showResult && (isSelected || isCorrect) ? 1.5 : 1
                        )
                }
            )
            .shadow(
                color: showResult && isSelected && isCorrect
                    ? Color(hex: "#34d399").opacity(0.3)
                    : (showResult && isCorrect ? Color(hex: "#34d399").opacity(0.15) : .clear),
                radius: showResult && isCorrect ? 10 : 0
            )
            .scaleEffect(showResult && isSelected && !isCorrect ? 1.0 : (showResult && !isSelected && !isCorrect ? 0.97 : 1.0))
            .opacity(showResult && !isSelected && !isCorrect ? 0.55 : 1.0)
            .shadow(color: isHinted ? Color(hex: "#a78bfa").opacity(hintGlowOpacity * 0.4) : .clear, radius: isHinted ? 12 : 0)
            .overlay(
                RoundedRectangle(cornerRadius: 16)
                    .strokeBorder(Color(hex: "#a78bfa").opacity(isHinted ? hintGlowOpacity * 0.5 : 0), lineWidth: 2)
            )
            .modifier(ShakeEffect(animatableData: (showResult && isSelected && !isCorrect) ? wrongShakeAmount : 0))
            .animation(.spring(response: 0.3, dampingFraction: 0.7), value: isAnswered)
        }
        .buttonStyle(LumenPressStyle(weight: .medium, accentColor: Color(hex: "#a78bfa")))
        .disabled(isAnswered)
    }

    private func answerBackground(isSelected: Bool, isCorrect: Bool, showResult: Bool) -> some ShapeStyle {
        if showResult && isSelected && isCorrect {
            return AnyShapeStyle(LinearGradient(colors: [Color(hex: "#10b981").opacity(0.20), Color(hex: "#059669").opacity(0.10)], startPoint: .leading, endPoint: .trailing))
        } else if showResult && isSelected && !isCorrect {
            return AnyShapeStyle(LinearGradient(colors: [Color(hex: "#fb7185").opacity(0.18), Color(hex: "#f43f5e").opacity(0.08)], startPoint: .leading, endPoint: .trailing))
        } else if showResult && isCorrect {
            return AnyShapeStyle(LinearGradient(colors: [Color(hex: "#10b981").opacity(0.10), Color(hex: "#059669").opacity(0.05)], startPoint: .leading, endPoint: .trailing))
        }
        return AnyShapeStyle(.white.opacity(0.06))
    }

    private func answerBorder(isSelected: Bool, isCorrect: Bool, showResult: Bool) -> some ShapeStyle {
        if showResult && isSelected && isCorrect { return AnyShapeStyle(Color(hex: "#10b981").opacity(0.5)) }
        if showResult && isSelected && !isCorrect { return AnyShapeStyle(Color(hex: "#fb7185").opacity(0.5)) }
        if showResult && isCorrect { return AnyShapeStyle(Color(hex: "#10b981").opacity(0.25)) }
        return AnyShapeStyle(.white.opacity(0.15))
    }

    // MARK: - Explanation

    private func explanationPanel(text: String) -> some View {
        DisclosureGroup(isExpanded: Binding(
            get: { showExplanation },
            set: { newValue in
                showExplanation = newValue
                // Persist the user's expand/collapse preference
                tipsExpanded = newValue
                tipAvailablePulse = false
            }
        )) {
            Text(text)
                .font(.subheadline)
                .foregroundStyle(isDark ? .white.opacity(0.8) : .caribbeanPlum)
                .padding(.top, 8)
        } label: {
            HStack(spacing: 8) {
                Image(systemName: "lightbulb.fill")
                    .foregroundStyle(.yellow)
                    .symbolEffect(.pulse, options: .repeating.speed(0.6), value: tipAvailablePulse && !showExplanation)
                Text(L.grammarTip)
                    .font(.subheadline.bold())
                    .foregroundStyle(isDark ? .white : .caribbeanInk)

                if !showExplanation && tipAvailablePulse {
                    Text("Tap to read")
                        .font(.caption2)
                        .foregroundStyle(Color(hex: "#3b82f6").opacity(0.7))
                        .transition(.opacity.combined(with: .scale(scale: 0.8)))
                }
            }
        }
        .tint(isDark ? .white.opacity(0.6) : .caribbeanMist)
        .padding(14)
        .background(
            ZStack {
                RoundedRectangle(cornerRadius: 16)
                    .fill(.white.opacity(0.04))

                // Top gloss highlight
                VStack {
                    RoundedRectangle(cornerRadius: 16)
                        .fill(
                            LinearGradient(
                                colors: [.white.opacity(0.06), .clear],
                                startPoint: .top,
                                endPoint: .center
                            )
                        )
                        .frame(height: 20)
                    Spacer()
                }
                .clipShape(RoundedRectangle(cornerRadius: 16))
            }
            .overlay(
                RoundedRectangle(cornerRadius: 16)
                    .strokeBorder(
                        (tipAvailablePulse && !showExplanation)
                            ? Color(hex: "#3b82f6").opacity(0.35)
                            : .white.opacity(0.12),
                        lineWidth: (tipAvailablePulse && !showExplanation) ? 1.5 : 1
                    )
            )
        )
        .animation(.easeInOut(duration: 0.3), value: showExplanation)
        .animation(.easeInOut(duration: 0.5), value: tipAvailablePulse)
    }

    // MARK: - Next Button

    private var nextButton: some View {
        Button {
            hapticsService.buttonPress()
            advanceQuestion()
        } label: {
            HStack(spacing: 8) {
                Text(isLastQuestion ? "See Results" : L.next)
                    .font(.headline)
                Image(systemName: isLastQuestion ? "checkmark.circle" : "arrow.right")
            }
            .foregroundStyle(.white)
            .frame(maxWidth: .infinity, minHeight: 52)
            .background(
                RoundedRectangle(cornerRadius: 16)
                    .fill(
                        LinearGradient(
                            colors: [Color(hex: "#ec4899"), Color(hex: "#f5576c"), Color(hex: "#a855f7")],
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
                    .overlay(
                        RoundedRectangle(cornerRadius: 16)
                            .fill(
                                LinearGradient(
                                    colors: [.white.opacity(0.25), .clear],
                                    startPoint: .top,
                                    endPoint: .bottom
                                )
                            )
                    )
                    .overlay(
                        RoundedRectangle(cornerRadius: 16)
                            .strokeBorder(.white.opacity(0.25), lineWidth: 0.75)
                    )
            )
            .clipShape(RoundedRectangle(cornerRadius: 16))
            .shadow(color: Color(hex: "#a855f7").opacity(0.35), radius: 12, y: 4)
        }
        .buttonStyle(LumenCTAPressStyle(glowColor: Color(hex: "#a855f7")))
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
            Text(L.noQuestionsAvailable)
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
        // Respect the user's persisted preference for tip expand/collapse
        showExplanation = tipsExpanded
        // If tips are collapsed, pulse the "Tip available" indicator once
        if !tipsExpanded {
            tipAvailablePulse = false
            withAnimation(.easeInOut(duration: 0.6).delay(0.3)) {
                tipAvailablePulse = true
            }
        }

        if isCorrect {
            correctCount += 1
            score += 10
            streak += 1
            audioService.playGrammarCorrect(consecutiveCount: streak)
            TierHapticsService.shared.correctAnswer(level: tierManager.hapticLevel)
            if streak >= 3 {
                TierHapticsService.shared.streakMilestone(level: tierManager.hapticLevel, count: streak)
            }
        } else {
            wrongCount += 1
            streak = 0
            audioService.playGrammarWrong()
            TierHapticsService.shared.wrongAnswer(level: tierManager.hapticLevel)
            // Trigger shake animation on wrong answer
            wrongShakeAmount = 0
            withAnimation(.easeOut(duration: 0.5)) {
                wrongShakeAmount = 1
            }
        }
    }

    private func advanceQuestion() {
        wrongShakeAmount = 0
        withAnimation(.spring(response: 0.5)) {
            selectedAnswer = nil
            isAnswered = false
            showExplanation = false
            tipAvailablePulse = false
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
        let timeSpent = practiceTracker.endSession()
        lastTimeSpent = timeSpent
        let progressService = ProgressService(modelContext: modelContext)
        let result = GameSessionResult(
            gameType: .grammar,
            categoryId: categoryId,
            categoryName: categoryName,
            score: score,
            correctAnswers: correctCount,
            totalQuestions: questions.count,
            timeSpent: timeSpent,
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
            let categories = await contentLoader.loadGrammarCategories(source: source, target: target)
            guard let currentIdx = categories.firstIndex(where: { $0.id == categoryId }) else { return }

            let ordered = Array(categories[(currentIdx + 1)...]) + Array(categories[..<currentIdx])
            for cat in ordered {
                let progress = progressService.categoryProgress(
                    gameType: .grammar,
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
        selectedAnswer = nil
        isAnswered = false
        showExplanation = false
        tipAvailablePulse = false
        wrongShakeAmount = 0
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

// MARK: - Shake Effect

struct ShakeEffect: GeometryEffect {
    var amount: CGFloat = 6
    var shakes: Int = 3
    var animatableData: CGFloat

    func effectValue(size: CGSize) -> ProjectionTransform {
        // Decaying amplitude for natural deceleration
        let decay = max(0, 1.0 - animatableData * 0.6)
        let translation = amount * sin(animatableData * .pi * CGFloat(shakes) * 2) * decay
        return ProjectionTransform(
            CGAffineTransform(translationX: translation, y: 0)
        )
    }
}
