import SwiftUI
import SwiftData

// MARK: - Journey / Progress View

/// Shows learning statistics, progress charts, streaks, and
/// inspirational wisdom quotes. Mirrors the React ProgressContainer.
struct JourneyView: View {
    @Environment(\.modelContext) private var modelContext
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization

    private var L: AppStrings { localization.strings }

    @Query private var profiles: [UserProfile]
    @Query(sort: \GameProgressRecord.createdDate, order: .reverse)
    private var allProgress: [GameProgressRecord]

    private var profile: UserProfile? { profiles.first }
    private var isDark: Bool { colorScheme == .dark }

    @State private var currentQuote: WisdomQuote = WisdomQuote.allQuotes.randomElement() ?? WisdomQuote.allQuotes[0]
    @State private var shownQuoteIndices: Set<Int> = []
    @State private var quoteOpacity: Double = 1.0
    @State private var quoteScale: CGFloat = 1.0
    @State private var quoteGlowIntensity: CGFloat = 0.0
    @State private var quoteIconRotation: Double = 0
    @State private var showResetAlert = false

    var body: some View {
        ScrollView(showsIndicators: false) {
            VStack(spacing: 24) {
                // Header
                journeyHeader

                // Milestones timeline
                milestonesSection

                // Overall stats inside GlassPanelWrapper
                overallStatsPanel

                // Game type breakdown
                gameTypeBreakdown

                // Streak section
                streakSection

                // Wisdom quote
                quoteCard

                // Reset progress
                resetProgressButton

                Spacer(minLength: 80)
            }
            .padding(.horizontal, 16)
            .padding(.top, 12)
        }
        .cosmicBackground()
        .navigationBarTitleDisplayMode(.inline)
        .toolbarColorScheme(isDark ? .dark : .light, for: .navigationBar)
        .alert(L.areYouSure, isPresented: $showResetAlert) {
            Button(L.cancel, role: .cancel) {}
            Button(L.resetProgress, role: .destructive) {
                let service = ProgressService(modelContext: modelContext)
                service.resetAllProgress()
            }
        } message: {
            Text(L.resetProgressMessage)
        }
    }

    // MARK: - Header

    private var journeyHeader: some View {
        VStack(spacing: 8) {
            Image(systemName: "chart.line.uptrend.xyaxis")
                .font(.system(size: 40))
                .foregroundStyle(
                    LinearGradient(
                        colors: [Color(hex: "#667eea"), Color(hex: "#764ba2")],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )

            Text(L.yourLearningJourney)
                .font(.title2.bold())
                .foregroundStyle(
                    LinearGradient(
                        colors: [Color(hex: "#667eea"), Color(hex: "#764ba2")],
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )

            Text(L.trackYourProgress)
                .font(.subheadline)
                .foregroundStyle(isDark ? .white.opacity(0.6) : .caribbeanPlum)
                .multilineTextAlignment(.center)
        }
        .padding(.top, 10)
    }

    // MARK: - Milestones Timeline

    private var milestonesSection: some View {
        GlassPanelWrapper {
            VStack(alignment: .leading, spacing: 0) {
                HStack(spacing: 8) {
                    Image(systemName: "flag.checkered")
                        .foregroundStyle(Color(hex: "#667eea"))
                    Text(L.milestones)
                        .font(.headline)
                        .foregroundStyle(
                            LinearGradient(
                                colors: [Color(hex: "#667eea"), Color(hex: "#06b6d4")],
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                }
                .padding(.bottom, 16)

                ForEach(Array(milestones.enumerated()), id: \.element.title) { index, milestone in
                    milestoneRow(milestone, isLast: index == milestones.count - 1)
                }
            }
        }
    }

    private struct Milestone {
        let title: String
        let icon: String
        let color: Color
        let xpRequired: Int
    }

    private var milestones: [Milestone] {
        [
            Milestone(title: L.firstSteps, icon: "shoe.fill", color: .green, xpRequired: 0),
            Milestone(title: L.gettingStarted, icon: "star.fill", color: .cyan, xpRequired: 50),
            Milestone(title: L.dedicatedLearner, icon: "book.fill", color: Color(hex: "#667eea"), xpRequired: 200),
            Milestone(title: L.wordWarrior, icon: "shield.fill", color: Color(hex: "#8b5cf6"), xpRequired: 500),
            Milestone(title: L.languageMaster, icon: "crown.fill", color: .yellow, xpRequired: 1000),
            Milestone(title: L.polyglotLegend, icon: "globe", color: Color(hex: "#ec4899"), xpRequired: 2500),
        ]
    }

    private func milestoneRow(_ milestone: Milestone, isLast: Bool) -> some View {
        let currentXP = profile?.totalXP ?? 0
        let isUnlocked = currentXP >= milestone.xpRequired

        return HStack(spacing: 14) {
            // Timeline column
            VStack(spacing: 0) {
                Circle()
                    .fill(isUnlocked ? milestone.color : .gray.opacity(0.3))
                    .frame(width: 32, height: 32)
                    .overlay {
                        Image(systemName: milestone.icon)
                            .font(.system(size: 13))
                            .foregroundStyle(isUnlocked ? .white : .gray)
                    }
                    .shadow(color: isUnlocked ? milestone.color.opacity(0.4) : .clear, radius: 6)

                if !isLast {
                    Rectangle()
                        .fill(isUnlocked ? milestone.color.opacity(0.3) : .gray.opacity(0.15))
                        .frame(width: 2, height: 30)
                }
            }

            // Content
            VStack(alignment: .leading, spacing: 2) {
                Text(milestone.title)
                    .font(.subheadline.bold())
                    .foregroundStyle(isDark ? .white.opacity(isUnlocked ? 1 : 0.4) : (isUnlocked ? .caribbeanInk : .caribbeanMist))

                Text("\(milestone.xpRequired) \(L.xpRequired)")
                    .font(.caption)
                    .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
            }

            Spacer()

            if isUnlocked {
                Image(systemName: "checkmark.circle.fill")
                    .foregroundStyle(.green)
            }
        }
    }

    // MARK: - Overall Stats

    private var overallStatsPanel: some View {
        VStack(spacing: 14) {
            Text(L.overview)
                .font(.headline)
                .foregroundStyle(
                    LinearGradient(
                        colors: [Color(hex: "#667eea"), Color(hex: "#764ba2")],
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .frame(maxWidth: .infinity, alignment: .leading)

            LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible())], spacing: 12) {
                journeyStat(title: L.level, value: "\(profile?.currentLevel ?? 1)", icon: "star.fill", color: .yellow)
                journeyStat(title: L.totalXP, value: "\(profile?.totalXP ?? 0)", icon: "bolt.fill", color: .cyan)
                journeyStat(title: L.sessions, value: "\(allProgress.count)", icon: "play.circle.fill", color: .green)
                journeyStat(title: L.streak, value: "\(profile?.streakDays ?? 0) \(L.days)", icon: "flame.fill", color: .orange)
            }
        }
        .padding(18)
        .background(GlassCardBackground())
    }

    private func journeyStat(title: String, value: String, icon: String, color: Color) -> some View {
        VStack(spacing: 8) {
            Image(systemName: icon)
                .font(.title2)
                .foregroundStyle(color)
                .shadow(color: color.opacity(0.4), radius: 8)

            Text(value)
                .font(.title3.bold())
                .foregroundStyle(isDark ? .white : .caribbeanInk)

            Text(title)
                .font(.caption)
                .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanPlum)
        }
        .frame(maxWidth: .infinity)
        .padding(12)
        .background(
            RoundedRectangle(cornerRadius: 16)
                .fill(color.opacity(0.06))
                .overlay(
                    RoundedRectangle(cornerRadius: 16)
                        .strokeBorder(color.opacity(0.1), lineWidth: 1)
                )
        )
    }

    // MARK: - Game Type Breakdown

    private var gameTypeBreakdown: some View {
        VStack(spacing: 14) {
            Text(L.gamePerformance)
                .font(.headline)
                .foregroundStyle(
                    LinearGradient(
                        colors: [Color(hex: "#a855f7"), Color(hex: "#ec4899")],
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .frame(maxWidth: .infinity, alignment: .leading)

            ForEach(GameType.allCases, id: \.self) { type in
                gameTypeRow(type)
            }
        }
        .padding(18)
        .background(GlassCardBackground())
    }

    private func gameTypeRow(_ type: GameType) -> some View {
        let records = allProgress.filter { $0.gameType == type.rawValue }
        let totalScore = records.reduce(0) { $0 + $1.score }
        let totalCorrect = records.reduce(0) { $0 + $1.correctAnswers }
        let totalQuestions = records.reduce(0) { $0 + $1.totalQuestions }
        let accuracy = totalQuestions > 0 ? Double(totalCorrect) / Double(totalQuestions) * 100 : 0

        let colors: [Color] = {
            switch type {
            case .flashCards: return [Color(hex: "#667eea"), Color(hex: "#06b6d4")]
            case .grammar: return [Color(hex: "#f093fb"), Color(hex: "#f5576c")]
            case .wordBuilder: return [Color(hex: "#fbbf24"), Color(hex: "#f97316")]
            }
        }()

        return HStack(spacing: 10) {
            ZStack {
                RoundedRectangle(cornerRadius: 10)
                    .fill(
                        LinearGradient(colors: colors, startPoint: .topLeading, endPoint: .bottomTrailing)
                    )
                    .frame(width: 38, height: 38)

                Image(systemName: gameTypeIcon(type))
                    .font(.system(size: 16))
                    .foregroundStyle(.white)
            }

            VStack(alignment: .leading, spacing: 6) {
                Text(type.displayName)
                    .font(.subheadline.bold())
                    .foregroundStyle(isDark ? .white : .caribbeanInk)

                HStack(spacing: 0) {
                    statPill(value: "\(records.count)", label: L.sessions.lowercased())
                    Spacer(minLength: 4)
                    statPill(value: "\(totalScore)", label: L.xp)
                    Spacer(minLength: 4)
                    statPill(value: "\(Int(accuracy))%", label: L.accuracy.lowercased())
                }
            }

            Spacer(minLength: 0)
        }
        .padding(12)
        .background(
            RoundedRectangle(cornerRadius: 16)
                .fill(isDark ? .white.opacity(0.04) : .black.opacity(0.03))
                .overlay(
                    RoundedRectangle(cornerRadius: 16)
                        .strokeBorder(isDark ? .white.opacity(0.06) : .black.opacity(0.06), lineWidth: 1)
                )
        )
    }

    private func statPill(value: String, label: String) -> some View {
        VStack(spacing: 1) {
            Text(value)
                .font(.system(size: 13, weight: .bold))
                .foregroundStyle(isDark ? .white.opacity(0.8) : .caribbeanInk)
            Text(label)
                .font(.system(size: 9))
                .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanPlum)
        }
        .frame(maxWidth: .infinity)
    }

    // MARK: - Streak Section

    private var streakSection: some View {
        VStack(spacing: 14) {
            HStack(spacing: 8) {
                Image(systemName: "flame.fill")
                    .foregroundStyle(.orange)
                    .symbolEffect(.pulse, options: .repeating.speed(0.3))
                Text(L.currentStreak)
                    .font(.headline)
                    .foregroundStyle(
                        LinearGradient(
                            colors: [.orange, Color(hex: "#ef4444")],
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
            }
            .frame(maxWidth: .infinity, alignment: .leading)

            HStack(spacing: 4) {
                Text("\(profile?.streakDays ?? 0)")
                    .font(.system(size: 56, weight: .bold, design: .rounded))
                    .foregroundStyle(
                        LinearGradient(
                            colors: [.orange, .yellow],
                            startPoint: .top,
                            endPoint: .bottom
                        )
                    )
                Text(L.days)
                    .font(.title3)
                    .foregroundStyle(isDark ? .white.opacity(0.6) : .caribbeanPlum)
                    .padding(.top, 16)
            }

            Text(L.keepLearningEveryDay)
                .font(.caption)
                .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
                .multilineTextAlignment(.center)
        }
        .padding(18)
        .background(GlassCardBackground())
    }

    // MARK: - Reset Progress

    private var resetProgressButton: some View {
        VStack(spacing: 14) {
            // Section header
            HStack(spacing: 8) {
                Image(systemName: "arrow.triangle.2.circlepath")
                    .foregroundStyle(.red.opacity(0.8))
                Text(L.resetProgress)
                    .font(.headline)
                    .foregroundStyle(
                        LinearGradient(
                            colors: [.red.opacity(0.9), .red.opacity(0.6)],
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
            }
            .frame(maxWidth: .infinity, alignment: .leading)

            Text(L.startFreshDescription)
                .font(.caption)
                .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanMist)
                .frame(maxWidth: .infinity, alignment: .leading)

            Button {
                showResetAlert = true
            } label: {
                HStack(spacing: 8) {
                    Image(systemName: "arrow.counterclockwise")
                        .font(.system(size: 14, weight: .semibold))
                    Text(L.resetProgress)
                        .font(.system(size: 14, weight: .semibold))
                }
                .foregroundStyle(.white)
                .frame(maxWidth: .infinity)
                .padding(.vertical, 12)
                .background(
                    RoundedRectangle(cornerRadius: 12)
                        .fill(
                            LinearGradient(
                                colors: [.red.opacity(0.7), .red.opacity(0.5)],
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                        .overlay(
                            RoundedRectangle(cornerRadius: 12)
                                .strokeBorder(.white.opacity(0.15), lineWidth: 1)
                        )
                )
            }
            .buttonStyle(LumenPressStyle(weight: .soft))
        }
        .padding(18)
        .background(GlassCardBackground())
    }

    // MARK: - Wisdom Quote

    private var quoteCard: some View {
        VStack(spacing: 16) {
            // Quote icon with rotation on tap
            Image(systemName: "sparkles")
                .font(.system(size: 22, weight: .medium))
                .foregroundStyle(
                    LinearGradient(
                        colors: isDark
                            ? [Color(hex: "#e0c3fc"), Color(hex: "#fbc2eb")]
                            : [Color(hex: "#8b5cf6"), Color(hex: "#d946ef")],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )
                .rotationEffect(.degrees(quoteIconRotation))
                .shadow(color: Color(hex: "#c084fc").opacity(quoteGlowIntensity * 0.6), radius: 12)

            // Quote text — warm luminous gradient
            Text(currentQuote.text)
                .font(.system(size: 15, weight: .regular, design: .rounded))
                .foregroundStyle(
                    LinearGradient(
                        colors: isDark
                            ? [Color(hex: "#e9d5ff"), Color(hex: "#fbcfe8"), Color(hex: "#bae6fd")]
                            : [Color(hex: "#581c87"), Color(hex: "#9d174d"), Color(hex: "#1e40af")],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )
                .multilineTextAlignment(.center)
                .lineSpacing(5)
                .fixedSize(horizontal: false, vertical: true)

            // Thin luminous divider
            Capsule()
                .fill(
                    LinearGradient(
                        colors: isDark
                            ? [.clear, Color(hex: "#c084fc").opacity(0.4), Color(hex: "#f0abfc").opacity(0.3), .clear]
                            : [.clear, Color(hex: "#a855f7").opacity(0.35), Color(hex: "#ec4899").opacity(0.25), .clear],
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .frame(width: 60, height: 1.5)

            // Author — refined gradient
            Text("— \(currentQuote.author)")
                .font(.system(size: 13, weight: .semibold, design: .rounded))
                .foregroundStyle(
                    LinearGradient(
                        colors: isDark
                            ? [Color(hex: "#c4b5fd"), Color(hex: "#f0abfc")]
                            : [Color(hex: "#6d28d9"), Color(hex: "#a21caf")],
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .tracking(1.0)

            // Subtle hint
            HStack(spacing: 4) {
                Image(systemName: "hand.tap")
                    .font(.system(size: 9))
                Text("tap for wisdom")
                    .font(.system(size: 9, weight: .medium, design: .rounded))
                    .tracking(0.5)
            }
            .foregroundStyle(isDark ? .white.opacity(0.18) : .caribbeanMist.opacity(0.45))
            .padding(.top, 4)
        }
        .opacity(quoteOpacity)
        .scaleEffect(quoteScale)
        .frame(maxWidth: .infinity)
        .frame(height: 220)
        .padding(.horizontal, 26)
        .padding(.vertical, 26)
        .background(
            ZStack {
                GlassCardBackground()

                // Glow pulse on tap
                RoundedRectangle(cornerRadius: 22)
                    .fill(
                        RadialGradient(
                            colors: [
                                Color(hex: "#c084fc").opacity(quoteGlowIntensity * 0.15),
                                Color(hex: "#f0abfc").opacity(quoteGlowIntensity * 0.06),
                                .clear
                            ],
                            center: .center,
                            startRadius: 0,
                            endRadius: 200
                        )
                    )
            }
        )
        .onTapGesture { cycleQuote() }
    }

    private func cycleQuote() {
        let allQuotes = WisdomQuote.allQuotes
        guard allQuotes.count > 1 else { return }

        // Mark current quote index as shown
        if let currentIdx = allQuotes.firstIndex(where: { $0.text == currentQuote.text }) {
            shownQuoteIndices.insert(currentIdx)
        }

        // If all shown, reset the cycle
        if shownQuoteIndices.count >= allQuotes.count {
            shownQuoteIndices.removeAll()
            if let currentIdx = allQuotes.firstIndex(where: { $0.text == currentQuote.text }) {
                shownQuoteIndices.insert(currentIdx)
            }
        }

        // Pick a random unseen quote
        let available = allQuotes.indices.filter { !shownQuoteIndices.contains($0) }
        guard let nextIdx = available.randomElement() else { return }

        // Haptic — soft impact for that satisfying feel
        HapticsService.light()

        // Phase 1: Press in + glow burst + fade out
        withAnimation(.spring(response: 0.18, dampingFraction: 0.6)) {
            quoteScale = 0.94
            quoteGlowIntensity = 1.0
        }
        withAnimation(.easeOut(duration: 0.15)) {
            quoteOpacity = 0
            quoteIconRotation += 180
        }

        // Phase 2: Swap content + spring back in
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.18) {
            currentQuote = allQuotes[nextIdx]

            withAnimation(.spring(response: 0.45, dampingFraction: 0.65)) {
                quoteOpacity = 1
                quoteScale = 1.0
            }
            withAnimation(.easeOut(duration: 0.6)) {
                quoteGlowIntensity = 0
            }
        }
    }

    private func gameTypeIcon(_ type: GameType) -> String {
        switch type {
        case .flashCards: "rectangle.on.rectangle.angled"
        case .grammar: "text.book.closed.fill"
        case .wordBuilder: "textformat.abc"
        }
    }
}
