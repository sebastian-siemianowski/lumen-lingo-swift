import SwiftUI
import SwiftData

// MARK: - Journey / Progress View

/// Shows learning statistics, progress charts, streaks, and
/// inspirational wisdom quotes. Mirrors the React ProgressContainer.
struct JourneyView: View {
    @Environment(\.modelContext) private var modelContext
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization
    @Environment(TierManager.self) private var tierManager

    private var L: AppStrings { localization.strings }

    @Query private var profiles: [UserProfile]
    @Query(sort: \GameProgressRecord.createdDate, order: .reverse)
    private var allProgress: [GameProgressRecord]

    private var profile: UserProfile? { profiles.first }
    private var isDark: Bool { colorScheme == .dark }

    private var statsConfig: TierManager.JourneyStatsConfig {
        tierManager.journeyStatsConfig()
    }

    private var badgeStyle: TierManager.MilestoneBadgeStyle {
        tierManager.milestoneBadgeStyle
    }

    @State private var currentQuote: WisdomQuote = WisdomQuote.allQuotes.randomElement() ?? WisdomQuote.allQuotes[0]
    @State private var shownQuoteIndices: Set<Int> = []
    @State private var quoteOpacity: Double = 1.0
    @State private var quoteScale: CGFloat = 1.0
    @State private var quoteGlowIntensity: CGFloat = 0.0
    @State private var quoteIconRotation: Double = 0
    @State private var showResetAlert = false

    // Collapsible section state
    @State private var isStatsCollapsed = false
    @State private var isMilestonesCollapsed = false
    @State private var isGameBreakdownCollapsed = false
    @State private var isDailyXPCollapsed = false
    @State private var isWeeklyTrendCollapsed = false
    @State private var isAccuracyHeatmapCollapsed = false
    @State private var isMonthlyReportCollapsed = false
    @State private var isMilestonePredictionsCollapsed = false
    @State private var isExportDataCollapsed = false
    @State private var isInsightsCollapsed = false
    @State private var isStreakCollapsed = false
    @State private var isQuoteCollapsed = false
    @State private var isResetCollapsed = true

    var body: some View {
        ScrollView(showsIndicators: false) {
            VStack(spacing: 20) {
                // Header
                journeyHeader

                // Overall stats (always visible — basicStats)
                collapsibleSection(
                    title: L.totalXP,
                    icon: "chart.bar.fill",
                    colors: [Color(hex: "#667eea"), Color(hex: "#764ba2")],
                    isCollapsed: $isStatsCollapsed
                ) {
                    overallStatsPanel
                }

                // Milestones timeline (always visible, badge style varies by tier)
                collapsibleSection(
                    title: L.milestones,
                    icon: "flag.checkered",
                    colors: [Color(hex: "#667eea"), Color(hex: "#06b6d4")],
                    isCollapsed: $isMilestonesCollapsed
                ) {
                    milestonesSection
                }

                // Game type breakdown (Pro+)
                collapsibleSection(
                    title: L.gamePerformance,
                    icon: "gamecontroller.fill",
                    colors: [Color(hex: "#a855f7"), Color(hex: "#ec4899")],
                    isCollapsed: $isGameBreakdownCollapsed
                ) {
                    journeySection(for: .gameBreakdown) {
                        gameTypeBreakdown
                    }
                }

                // Daily XP Chart (Pro+)
                collapsibleSection(
                    title: L.dailyXPChart,
                    icon: "chart.bar.xaxis",
                    colors: [Color(hex: "#f59e0b"), Color(hex: "#ef4444")],
                    isCollapsed: $isDailyXPCollapsed
                ) {
                    journeySection(for: .dailyXPChart) {
                        DailyXPChartView(allProgress: allProgress)
                    }
                }

                // Weekly Trend (Elite+)
                collapsibleSection(
                    title: L.weeklyTrend,
                    icon: "chart.line.uptrend.xyaxis",
                    colors: [Color(hex: "#10b981"), Color(hex: "#06b6d4")],
                    isCollapsed: $isWeeklyTrendCollapsed
                ) {
                    journeySection(for: .weeklyTrend) {
                        WeeklyTrendWidget(allProgress: allProgress)
                    }
                }

                // Accuracy Heatmap (Elite+)
                collapsibleSection(
                    title: L.accuracyHeatmap,
                    icon: "square.grid.3x3.fill",
                    colors: [Color(hex: "#f97316"), Color(hex: "#f59e0b")],
                    isCollapsed: $isAccuracyHeatmapCollapsed
                ) {
                    journeySection(for: .accuracyHeatmap) {
                        AccuracyHeatmapView(allProgress: allProgress)
                    }
                }

                // Monthly Report (Royal)
                collapsibleSection(
                    title: L.monthlyReport,
                    icon: "doc.text.fill",
                    colors: [Color(hex: "#6366f1"), Color(hex: "#8b5cf6")],
                    isCollapsed: $isMonthlyReportCollapsed
                ) {
                    journeySection(for: .monthlyReport) {
                        MonthlyReportWidget(allProgress: allProgress, profile: profile)
                    }
                }

                // Milestone Predictions (Royal)
                collapsibleSection(
                    title: L.milestonePredictionsTitle,
                    icon: "sparkle.magnifyingglass",
                    colors: [Color(hex: "#ec4899"), Color(hex: "#f43f5e")],
                    isCollapsed: $isMilestonePredictionsCollapsed
                ) {
                    journeySection(for: .milestonePredictions) {
                        MilestonePredictionWidget(
                            allProgress: allProgress,
                            profile: profile,
                            milestones: milestones.map { JourneyMilestone(title: $0.title, icon: $0.icon, color: $0.color, xpRequired: $0.xpRequired) }
                        )
                    }
                }

                // Export Data (Elite+)
                collapsibleSection(
                    title: L.exportData,
                    icon: "square.and.arrow.up.fill",
                    colors: [Color(hex: "#14b8a6"), Color(hex: "#06b6d4")],
                    isCollapsed: $isExportDataCollapsed
                ) {
                    journeySection(for: .exportData) {
                        ExportDataWidget(allProgress: allProgress)
                    }
                }

                // Learning Insights (Royal)
                collapsibleSection(
                    title: L.learningInsights,
                    icon: "lightbulb.fill",
                    colors: [Color(hex: "#f59e0b"), Color(hex: "#fbbf24")],
                    isCollapsed: $isInsightsCollapsed
                ) {
                    journeySection(for: .insights) {
                        InsightsDashboardWidget(allProgress: allProgress)
                    }
                }

                // Streak section (always visible — part of basicStats)
                collapsibleSection(
                    title: L.currentStreak,
                    icon: "flame.fill",
                    colors: [.orange, Color(hex: "#ef4444")],
                    isCollapsed: $isStreakCollapsed
                ) {
                    streakSection
                }

                // Wisdom quote
                collapsibleSection(
                    title: "Wisdom",
                    icon: "sparkles",
                    colors: [Color(hex: "#c084fc"), Color(hex: "#f0abfc")],
                    isCollapsed: $isQuoteCollapsed
                ) {
                    quoteCard
                }

                // Reset progress
                collapsibleSection(
                    title: L.resetProgress,
                    icon: "arrow.triangle.2.circlepath",
                    colors: [.red.opacity(0.9), .red.opacity(0.6)],
                    isCollapsed: $isResetCollapsed
                ) {
                    resetProgressButton
                }

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

    // MARK: - Tier-Gated Section Helper

    /// Shows the content if the section is unlocked, or a blurred locked overlay if not.
    @ViewBuilder
    private func journeySection<Content: View>(
        for section: TierManager.JourneyStatsSection,
        @ViewBuilder content: () -> Content
    ) -> some View {
        if statsConfig.sections.contains(section) {
            content()
        } else {
            LockedJourneySectionOverlay(
                requiredTier: TierManager.minimumTierForJourneySection(section),
                featureTitle: sectionTitle(for: section),
                featureDescription: sectionDescription(for: section),
                content: content
            )
        }
    }

    // MARK: - Collapsible Section Wrapper

    @ViewBuilder
    private func collapsibleSection<Content: View>(
        title: String,
        icon: String,
        colors: [Color],
        isCollapsed: Binding<Bool>,
        @ViewBuilder content: () -> Content
    ) -> some View {
        let collapsed = isCollapsed.wrappedValue

        VStack(spacing: 0) {
            Button {
                withAnimation(.spring(response: 0.35, dampingFraction: 0.8)) {
                    isCollapsed.wrappedValue.toggle()
                }
            } label: {
                HStack(spacing: 10) {
                    // Gradient icon circle
                    ZStack {
                        Circle()
                            .fill(
                                LinearGradient(
                                    colors: colors.map { $0.opacity(isDark ? 0.2 : 0.15) },
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing
                                )
                            )
                            .frame(width: 30, height: 30)

                        Image(systemName: icon)
                            .font(.system(size: 13, weight: .medium))
                            .foregroundStyle(
                                LinearGradient(
                                    colors: colors,
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing
                                )
                            )
                    }

                    Text(title)
                        .font(.system(size: 15, weight: .semibold))
                        .foregroundStyle(isDark ? .white.opacity(0.9) : .caribbeanInk)

                    Spacer()

                    // Pill chevron
                    ZStack {
                        Capsule()
                            .fill(isDark ? .white.opacity(0.06) : .black.opacity(0.04))
                            .frame(width: 28, height: 20)

                        Image(systemName: "chevron.right")
                            .font(.system(size: 10, weight: .bold))
                            .foregroundStyle(
                                collapsed
                                    ? AnyShapeStyle(LinearGradient(colors: colors, startPoint: .leading, endPoint: .trailing))
                                    : AnyShapeStyle(isDark ? Color.white.opacity(0.3) : Color.caribbeanMist)
                            )
                            .rotationEffect(.degrees(collapsed ? 0 : 90))
                    }
                }
                .padding(.horizontal, 14)
                .padding(.vertical, collapsed ? 14 : 10)
                .background {
                    if collapsed {
                        // Glass card for collapsed state
                        RoundedRectangle(cornerRadius: 18)
                            .fill(.ultraThinMaterial)
                            .opacity(isDark ? 1.0 : 0.55)
                            .overlay(
                                Group {
                                    if !isDark {
                                        RoundedRectangle(cornerRadius: 18)
                                            .fill(
                                                LinearGradient(
                                                    colors: [
                                                        colors[0].opacity(0.08),
                                                        colors.last!.opacity(0.05)
                                                    ],
                                                    startPoint: .leading,
                                                    endPoint: .trailing
                                                )
                                            )
                                    }
                                }
                            )
                            .overlay(
                                RoundedRectangle(cornerRadius: 18)
                                    .strokeBorder(
                                        LinearGradient(
                                            colors: isDark
                                                ? [colors[0].opacity(0.25), colors.last!.opacity(0.1)]
                                                : [colors[0].opacity(0.3), colors.last!.opacity(0.15)],
                                            startPoint: .leading,
                                            endPoint: .trailing
                                        ),
                                        lineWidth: isDark ? 0.75 : 0.5
                                    )
                            )
                            .shadow(
                                color: colors[0].opacity(isDark ? 0.12 : 0.08),
                                radius: 8, y: 4
                            )
                    }
                }
            }
            .buttonStyle(CollapsibleHeaderButtonStyle())

            if !collapsed {
                // Gradient accent line connecting header to content
                Rectangle()
                    .fill(
                        LinearGradient(
                            colors: [.clear, colors[0].opacity(0.3), colors.last!.opacity(0.2), .clear],
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
                    .frame(height: 1)
                    .padding(.horizontal, 24)
                    .padding(.top, 2)
                    .padding(.bottom, 6)

                content()
                    .transition(.opacity.combined(with: .move(edge: .top)))
            }
        }
    }

    private func sectionTitle(for section: TierManager.JourneyStatsSection) -> String {
        switch section {
        case .basicStats:           return L.yourLearningJourney
        case .gameBreakdown:        return L.gamePerformance
        case .dailyXPChart:         return L.dailyXPChart
        case .weeklyTrend:          return L.weeklyTrend
        case .accuracyHeatmap:      return L.accuracyHeatmap
        case .monthlyReport:        return L.monthlyReport
        case .milestonePredictions: return L.milestonePredictionsTitle
        case .exportData:           return L.exportData
        case .insights:             return L.learningInsights
        }
    }

    private func sectionDescription(for section: TierManager.JourneyStatsSection) -> String {
        switch section {
        case .basicStats:           return ""
        case .gameBreakdown:        return L.gameBreakdownDesc
        case .dailyXPChart:         return L.dailyXPChartDesc
        case .weeklyTrend:          return L.weeklyTrendDesc
        case .accuracyHeatmap:      return L.accuracyHeatmapDesc
        case .monthlyReport:        return L.monthlyReportDesc
        case .milestonePredictions: return L.milestonePredictionsDesc
        case .exportData:           return L.exportDataDesc
        case .insights:             return L.insightsDesc
        }
    }

    // MARK: - Header

    private var journeyHeader: some View {
        VStack(spacing: 6) {
            Image(systemName: "chart.line.uptrend.xyaxis")
                .font(.system(size: 32))
                .foregroundStyle(
                    LinearGradient(
                        colors: [Color(hex: "#667eea"), Color(hex: "#764ba2")],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )

            Text(L.yourLearningJourney)
                .font(.system(size: 18, weight: .bold))
                .foregroundStyle(
                    LinearGradient(
                        colors: [Color(hex: "#667eea"), Color(hex: "#764ba2")],
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )

            Text(L.trackYourProgress)
                .font(.system(size: 12))
                .foregroundStyle(isDark ? .white.opacity(0.6) : .caribbeanPlum)
                .multilineTextAlignment(.center)
        }
        .padding(.top, 10)
    }

    // MARK: - Milestones Timeline

    private var milestonesSection: some View {
        GlassPanelWrapper {
            VStack(alignment: .leading, spacing: 0) {
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
            Milestone(title: L.firstSteps,         icon: "shoe.fill",          color: .green,                xpRequired: 0),
            Milestone(title: L.gettingStarted,     icon: "star.fill",          color: .cyan,                 xpRequired: 100),
            Milestone(title: L.dedicatedLearner,   icon: "book.fill",          color: Color(hex: "#667eea"), xpRequired: 500),
            Milestone(title: L.risingStar,          icon: "sparkles",           color: Color(hex: "#f59e0b"), xpRequired: 1_500),
            Milestone(title: L.wordWarrior,        icon: "shield.fill",        color: Color(hex: "#8b5cf6"), xpRequired: 3_000),
            Milestone(title: L.knowledgeSeeker,    icon: "magnifyingglass",    color: Color(hex: "#06b6d4"), xpRequired: 5_000),
            Milestone(title: L.sentenceCrafter,    icon: "text.quote",         color: Color(hex: "#10b981"), xpRequired: 8_000),
            Milestone(title: L.grammarGuardian,    icon: "shield.checkerboard", color: Color(hex: "#6366f1"), xpRequired: 12_000),
            Milestone(title: L.vocabularyVirtuoso, icon: "character.book.closed.fill", color: Color(hex: "#f97316"), xpRequired: 18_000),
            Milestone(title: L.languageMaster,     icon: "crown.fill",         color: .yellow,               xpRequired: 25_000),
            Milestone(title: L.fluencyPioneer,     icon: "flag.fill",          color: Color(hex: "#14b8a6"), xpRequired: 35_000),
            Milestone(title: L.polyglotLegend,     icon: "globe",              color: Color(hex: "#ec4899"), xpRequired: 50_000),
        ]
    }

    private func milestoneRow(_ milestone: Milestone, isLast: Bool) -> some View {
        let currentXP = profile?.totalXP ?? 0
        let isUnlocked = currentXP >= milestone.xpRequired
        let journeyMilestone = JourneyMilestone(title: milestone.title, icon: milestone.icon, color: milestone.color, xpRequired: milestone.xpRequired)

        return HStack(spacing: 10) {
            // Timeline column
            VStack(spacing: 0) {
                MilestoneBadgeView(
                    milestone: journeyMilestone,
                    isUnlocked: isUnlocked,
                    style: badgeStyle
                )

                if !isLast {
                    Rectangle()
                        .fill(isUnlocked ? milestone.color.opacity(0.3) : .gray.opacity(0.15))
                        .frame(width: 2, height: 20)
                }
            }

            // Content
            VStack(alignment: .leading, spacing: 1) {
                Text(milestone.title)
                    .font(.system(size: 13, weight: .semibold))
                    .foregroundStyle(isDark ? .white.opacity(isUnlocked ? 1 : 0.4) : (isUnlocked ? .caribbeanInk : .caribbeanMist))

                Text(formattedXP(milestone.xpRequired) + " " + L.xpRequired)
                    .font(.system(size: 10))
                    .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
            }

            Spacer()

            if isUnlocked {
                Image(systemName: "checkmark.circle.fill")
                    .font(.system(size: 14))
                    .foregroundStyle(.green)
            }
        }
    }

    private func formattedXP(_ xp: Int) -> String {
        if xp >= 1_000 {
            let thousands = Double(xp) / 1_000.0
            if xp % 1_000 == 0 {
                return "\(Int(thousands))K"
            }
            return String(format: "%.1fK", thousands)
        }
        return "\(xp)"
    }

    // MARK: - Overall Stats

    private var overallStatsPanel: some View {
        let level = profile?.currentLevel ?? 1
        let totalXP = profile?.totalXP ?? 0
        let progress = profile?.levelProgress ?? 0
        let xpInLevel = profile?.xpInCurrentLevel ?? 0
        let xpNeeded = profile?.xpForNextLevel ?? 100

        return VStack(spacing: 16) {
            // Hero: Level ring + XP bar
            HStack(spacing: 16) {
                // Circular level badge
                ZStack {
                    Circle()
                        .stroke(
                            LinearGradient(
                                colors: [Color(hex: "#667eea").opacity(0.15), Color(hex: "#764ba2").opacity(0.15)],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            ),
                            lineWidth: 4
                        )
                        .frame(width: 64, height: 64)

                    Circle()
                        .trim(from: 0, to: progress)
                        .stroke(
                            LinearGradient(
                                colors: [Color(hex: "#667eea"), Color(hex: "#764ba2")],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            ),
                            style: StrokeStyle(lineWidth: 4, lineCap: .round)
                        )
                        .frame(width: 64, height: 64)
                        .rotationEffect(.degrees(-90))

                    VStack(spacing: 0) {
                        Text("\(level)")
                            .font(.system(size: 22, weight: .bold, design: .rounded))
                            .foregroundStyle(
                                LinearGradient(
                                    colors: [Color(hex: "#667eea"), Color(hex: "#764ba2")],
                                    startPoint: .top,
                                    endPoint: .bottom
                                )
                            )
                        Text(L.level.uppercased())
                            .font(.system(size: 8, weight: .semibold))
                            .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanPlum)
                            .tracking(1)
                    }
                }

                // XP info
                VStack(alignment: .leading, spacing: 6) {
                    Text(formattedXP(totalXP) + " XP")
                        .font(.system(size: 20, weight: .bold, design: .rounded))
                        .foregroundStyle(isDark ? .white : .caribbeanInk)

                    // Progress bar
                    GeometryReader { geo in
                        ZStack(alignment: .leading) {
                            Capsule()
                                .fill(isDark ? .white.opacity(0.08) : .black.opacity(0.06))
                                .frame(height: 6)

                            Capsule()
                                .fill(
                                    LinearGradient(
                                        colors: [Color(hex: "#667eea"), Color(hex: "#a855f7")],
                                        startPoint: .leading,
                                        endPoint: .trailing
                                    )
                                )
                                .frame(width: max(6, geo.size.width * progress), height: 6)
                        }
                    }
                    .frame(height: 6)

                    Text("\(formattedXP(xpInLevel)) / \(formattedXP(xpNeeded)) " + L.xp.lowercased())
                        .font(.system(size: 10))
                        .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanPlum)
                }
            }

            // Divider
            Rectangle()
                .fill(isDark ? .white.opacity(0.06) : .black.opacity(0.06))
                .frame(height: 1)
                .padding(.horizontal, 4)

            // Three stat columns
            HStack(spacing: 0) {
                overviewStat(
                    icon: "bolt.fill",
                    value: formattedXP(totalXP),
                    label: L.totalXP,
                    color: .cyan
                )

                Rectangle()
                    .fill(isDark ? .white.opacity(0.06) : .black.opacity(0.06))
                    .frame(width: 1, height: 32)

                overviewStat(
                    icon: "play.circle.fill",
                    value: "\(allProgress.count)",
                    label: L.sessions,
                    color: .green
                )

                Rectangle()
                    .fill(isDark ? .white.opacity(0.06) : .black.opacity(0.06))
                    .frame(width: 1, height: 32)

                overviewStat(
                    icon: "flame.fill",
                    value: "\(profile?.streakDays ?? 0)",
                    label: L.streak,
                    color: .orange
                )
            }
        }
        .padding(16)
        .background(GlassCardBackground())
    }

    private func overviewStat(icon: String, value: String, label: String, color: Color) -> some View {
        HStack(spacing: 6) {
            Image(systemName: icon)
                .font(.system(size: 14))
                .foregroundStyle(color)

            VStack(alignment: .leading, spacing: 1) {
                Text(value)
                    .font(.system(size: 14, weight: .bold, design: .rounded))
                    .foregroundStyle(isDark ? .white : .caribbeanInk)
                Text(label)
                    .font(.system(size: 9))
                    .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanPlum)
            }
        }
        .frame(maxWidth: .infinity)
    }

    // MARK: - Game Type Breakdown

    private var gameTypeBreakdown: some View {
        VStack(spacing: 10) {
            ForEach(GameType.allCases, id: \.self) { type in
                gameTypeRow(type)
            }
        }
        .padding(14)
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

        return HStack(spacing: 0) {
            ZStack {
                RoundedRectangle(cornerRadius: 8)
                    .fill(
                        LinearGradient(colors: colors, startPoint: .topLeading, endPoint: .bottomTrailing)
                    )
                    .frame(width: 32, height: 32)

                Image(systemName: gameTypeIcon(type))
                    .font(.system(size: 14))
                    .foregroundStyle(.white)
            }
            .padding(.trailing, 8)

            Text(type.displayName)
                .font(.system(size: 13, weight: .semibold))
                .foregroundStyle(isDark ? .white : .caribbeanInk)
                .frame(width: 80, alignment: .leading)

            statPill(value: "\(records.count)", label: L.sessions.lowercased())
            statPill(value: formattedXP(totalScore), label: L.xp)
            statPill(value: "\(Int(accuracy))%", label: L.accuracy.lowercased())
        }
        .padding(10)
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
        VStack(spacing: 10) {
            HStack(spacing: 4) {
                Text("\(profile?.streakDays ?? 0)")
                    .font(.system(size: 42, weight: .bold, design: .rounded))
                    .foregroundStyle(
                        LinearGradient(
                            colors: [.orange, .yellow],
                            startPoint: .top,
                            endPoint: .bottom
                        )
                    )
                Text(L.days)
                    .font(.system(size: 15, weight: .medium))
                    .foregroundStyle(isDark ? .white.opacity(0.6) : .caribbeanPlum)
                    .padding(.top, 10)
            }

            Text(L.keepLearningEveryDay)
                .font(.system(size: 11))
                .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
                .multilineTextAlignment(.center)
        }
        .padding(14)
        .background(GlassCardBackground())
    }

    // MARK: - Reset Progress

    private var resetProgressButton: some View {
        VStack(spacing: 10) {
            Text(L.startFreshDescription)
                .font(.system(size: 11))
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
        .padding(14)
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
        .frame(height: 180)
        .padding(.horizontal, 20)
        .padding(.vertical, 20)
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

        // Haptic + sound — soft impact for that satisfying feel
        HapticsService.shared.tabSwitch()
        AudioService.shared.playQuoteShuffle()

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

// MARK: - Collapsible Header Button Style

/// Provides press feedback — subtle scale + opacity shift — for section headers.
private struct CollapsibleHeaderButtonStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .scaleEffect(configuration.isPressed ? 0.97 : 1.0)
            .opacity(configuration.isPressed ? 0.85 : 1.0)
            .animation(.easeOut(duration: 0.15), value: configuration.isPressed)
    }
}
