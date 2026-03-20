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

    /// Display name from real profile for personalization.
    private var displayName: String {
        profile?.firstName.trimmingCharacters(in: .whitespacesAndNewlines) ?? ""
    }
    private var hasUserName: Bool { !displayName.isEmpty }

    private var statsConfig: TierManager.JourneyStatsConfig {
        tierManager.journeyStatsConfig()
    }

    private var badgeStyle: TierManager.MilestoneBadgeStyle {
        tierManager.milestoneBadgeStyle
    }

    // MARK: - Badge Data

    /// Number of milestones the user has unlocked.
    private var completedMilestoneCount: Int {
        let xp = profile?.totalXP ?? 0
        return milestones.filter { xp >= $0.xpRequired }.count
    }

    /// Overall accuracy across all game types (0.0–1.0).
    private var overallAccuracy: Double {
        let totalCorrect = allProgress.reduce(0) { $0 + $1.correctAnswers }
        let totalQuestions = allProgress.reduce(0) { $0 + $1.totalQuestions }
        return totalQuestions > 0 ? Double(totalCorrect) / Double(totalQuestions) : 0
    }

    /// Badge for a tier-gated section: lock icon if locked, nil if unlocked.
    private func tierBadge(for section: TierManager.JourneyStatsSection) -> CollapsibleBadge? {
        statsConfig.sections.contains(section) ? nil : .icon("lock.fill", .secondary)
    }

    /// Whether a section is tier-locked (Story 4.3.1).
    private func isSectionLocked(_ section: TierManager.JourneyStatsSection) -> Bool {
        !statsConfig.sections.contains(section)
    }

    /// The required tier for a locked section (display name + accent color).
    private func requiredTierInfo(for section: TierManager.JourneyStatsSection) -> (name: String, color: Color) {
        let tier = TierManager.minimumTierForJourneySection(section)
        return (tier.displayName, tier.accentColor)
    }

    @State private var currentQuote: WisdomQuote = WisdomQuote.allQuotes.randomElement() ?? WisdomQuote.allQuotes[0]
    @State private var shownQuoteIndices: Set<Int> = []
    @State private var quoteOpacity: Double = 1.0
    @State private var quoteScale: CGFloat = 1.0
    @State private var quoteGlowIntensity: CGFloat = 0.0
    @State private var quoteIconRotation: Double = 0
    @State private var showResetAlert = false

    // Story 6.1 — timeline animation state
    @State private var timelineFlowPhase: CGFloat = 0
    @State private var currentPositionPulse: CGFloat = 0.6
    @State private var levelRingRotation: Double = 0
    @Environment(\.accessibilityReduceMotion) private var reduceMotion

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
                CollapsibleSection(
                    title: hasUserName ? "\(displayName)'s XP" : L.totalXP,
                    theme: .xpStats,
                    isCollapsed: $isStatsCollapsed,
                    badge: .text(formattedXP(profile?.totalXP ?? 0) + " XP")
                ) {
                    overallStatsPanel
                }

                // Milestones timeline (always visible, badge style varies by tier)
                CollapsibleSection(
                    title: L.milestones,
                    theme: .milestones,
                    isCollapsed: $isMilestonesCollapsed,
                    badge: .count(completedMilestoneCount)
                ) {
                    milestonesSection
                }

                // Game type breakdown (Pro+)
                CollapsibleSection(
                    title: L.gamePerformance,
                    theme: .gamePerformance,
                    isCollapsed: $isGameBreakdownCollapsed,
                    badge: tierBadge(for: .gameBreakdown) ?? .progress(overallAccuracy),
                    isLocked: isSectionLocked(.gameBreakdown),
                    lockedTierName: requiredTierInfo(for: .gameBreakdown).name,
                    lockedTierColor: requiredTierInfo(for: .gameBreakdown).color
                ) {
                    journeySection(for: .gameBreakdown) {
                        gameTypeBreakdown
                    }
                }

                // Daily XP Chart (Pro+)
                CollapsibleSection(
                    title: L.dailyXPChart,
                    theme: .dailyXP,
                    isCollapsed: $isDailyXPCollapsed,
                    badge: tierBadge(for: .dailyXPChart),
                    isLocked: isSectionLocked(.dailyXPChart),
                    lockedTierName: requiredTierInfo(for: .dailyXPChart).name,
                    lockedTierColor: requiredTierInfo(for: .dailyXPChart).color
                ) {
                    journeySection(for: .dailyXPChart) {
                        DailyXPChartView(allProgress: allProgress)
                    }
                }

                // Weekly Trend (Elite+)
                CollapsibleSection(
                    title: L.weeklyTrend,
                    theme: .weeklyTrend,
                    isCollapsed: $isWeeklyTrendCollapsed,
                    badge: tierBadge(for: .weeklyTrend),
                    isLocked: isSectionLocked(.weeklyTrend),
                    lockedTierName: requiredTierInfo(for: .weeklyTrend).name,
                    lockedTierColor: requiredTierInfo(for: .weeklyTrend).color
                ) {
                    journeySection(for: .weeklyTrend) {
                        WeeklyTrendWidget(allProgress: allProgress)
                    }
                }

                // Accuracy Heatmap (Elite+)
                CollapsibleSection(
                    title: L.accuracyHeatmap,
                    theme: .accuracyHeatmap,
                    isCollapsed: $isAccuracyHeatmapCollapsed,
                    badge: tierBadge(for: .accuracyHeatmap),
                    isLocked: isSectionLocked(.accuracyHeatmap),
                    lockedTierName: requiredTierInfo(for: .accuracyHeatmap).name,
                    lockedTierColor: requiredTierInfo(for: .accuracyHeatmap).color
                ) {
                    journeySection(for: .accuracyHeatmap) {
                        AccuracyHeatmapView(allProgress: allProgress)
                    }
                }

                // Monthly Report (Royal)
                CollapsibleSection(
                    title: L.monthlyReport,
                    theme: .monthlyReport,
                    isCollapsed: $isMonthlyReportCollapsed,
                    badge: tierBadge(for: .monthlyReport),
                    isLocked: isSectionLocked(.monthlyReport),
                    lockedTierName: requiredTierInfo(for: .monthlyReport).name,
                    lockedTierColor: requiredTierInfo(for: .monthlyReport).color
                ) {
                    journeySection(for: .monthlyReport) {
                        MonthlyReportWidget(allProgress: allProgress, profile: profile)
                    }
                }

                // Milestone Predictions (Royal)
                CollapsibleSection(
                    title: L.milestonePredictionsTitle,
                    theme: .milestonePredictions,
                    isCollapsed: $isMilestonePredictionsCollapsed,
                    badge: tierBadge(for: .milestonePredictions),
                    isLocked: isSectionLocked(.milestonePredictions),
                    lockedTierName: requiredTierInfo(for: .milestonePredictions).name,
                    lockedTierColor: requiredTierInfo(for: .milestonePredictions).color
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
                CollapsibleSection(
                    title: L.exportData,
                    theme: .exportData,
                    isCollapsed: $isExportDataCollapsed,
                    badge: tierBadge(for: .exportData),
                    isLocked: isSectionLocked(.exportData),
                    lockedTierName: requiredTierInfo(for: .exportData).name,
                    lockedTierColor: requiredTierInfo(for: .exportData).color
                ) {
                    journeySection(for: .exportData) {
                        ExportDataWidget(allProgress: allProgress, profile: profile)
                    }
                }

                // Learning Insights (Royal)
                CollapsibleSection(
                    title: L.learningInsights,
                    theme: .learningInsights,
                    isCollapsed: $isInsightsCollapsed,
                    badge: tierBadge(for: .insights),
                    isLocked: isSectionLocked(.insights),
                    lockedTierName: requiredTierInfo(for: .insights).name,
                    lockedTierColor: requiredTierInfo(for: .insights).color
                ) {
                    journeySection(for: .insights) {
                        InsightsDashboardWidget(allProgress: allProgress)
                    }
                }

                // Streak section (always visible — part of basicStats)
                CollapsibleSection(
                    title: L.currentStreak,
                    theme: .streak,
                    isCollapsed: $isStreakCollapsed,
                    badge: .count(profile?.streakDays ?? 0)
                ) {
                    streakSection
                }

                // Wisdom quote
                CollapsibleSection(
                    title: "Wisdom",
                    theme: .wisdom,
                    isCollapsed: $isQuoteCollapsed
                ) {
                    quoteCard
                }

                // Reset progress
                CollapsibleSection(
                    title: L.resetProgress,
                    theme: .resetProgress,
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
    // Uses shared CollapsibleSection from Views/Shared/CollapsibleSection.swift

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
        VStack(spacing: 8) {
            Image(systemName: "chart.line.uptrend.xyaxis")
                .font(.system(size: 32))
                .foregroundStyle(
                    isDark
                        ? AnyShapeStyle(LinearGradient(
                            colors: [Color(hex: "#667eea"), Color(hex: "#764ba2")],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        ))
                        : AnyShapeStyle(LinearGradient.caribbeanGradientOcean)
                )
                // Light mode: tinted icon circle
                .padding(isDark ? 0 : 14)
                .background {
                    if !isDark {
                        Circle()
                            .fill(Color(hex: "0EA5E9").opacity(0.08))
                        Circle()
                            .strokeBorder(
                                LinearGradient(
                                    colors: [Color.white.opacity(0.60), Color.white.opacity(0.25)],
                                    startPoint: .top,
                                    endPoint: .bottom
                                ),
                                lineWidth: 0.5
                            )
                    }
                }

            Text(L.yourLearningJourney)
                .font(.system(size: 18, weight: .bold))
                .foregroundStyle(
                    isDark
                        ? AnyShapeStyle(LinearGradient(
                            colors: [Color(hex: "#667eea"), Color(hex: "#764ba2")],
                            startPoint: .leading,
                            endPoint: .trailing
                        ))
                        : AnyShapeStyle(LinearGradient.caribbeanGradientOcean)
                )

            Text(L.trackYourProgress)
                .font(.system(size: 12))
                .foregroundStyle(isDark ? .white.opacity(0.6) : .caribbeanPlum)
                .multilineTextAlignment(.center)
        }
        .padding(.vertical, isDark ? 0 : 16)
        .padding(.horizontal, isDark ? 0 : 20)
        .frame(maxWidth: isDark ? nil : .infinity)
        .background {
            if !isDark {
                ZStack {
                    // Frost material base
                    RoundedRectangle(cornerRadius: 20)
                        .fill(.thinMaterial)
                    // Clean white wash
                    RoundedRectangle(cornerRadius: 20)
                        .fill(Color.white.opacity(0.25))
                }
                // Glass border with diagonal luminance
                .overlay(
                    RoundedRectangle(cornerRadius: 20)
                        .strokeBorder(
                            LinearGradient(
                                colors: [
                                    Color.white.opacity(0.70),
                                    Color.white.opacity(0.40),
                                    Color.white.opacity(0.60)
                                ],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            ),
                            lineWidth: 0.75
                        )
                )
                .shadow(
                    color: Color(red: 0.55, green: 0.50, blue: 0.68).opacity(0.10),
                    radius: 6,
                    y: 3
                )
            }
        }
        .padding(.top, 10)
    }

    // MARK: - Milestones Timeline

    /// Index of the "next to unlock" milestone (upcoming).
    private var upcomingMilestoneIndex: Int? {
        let xp = profile?.totalXP ?? 0
        return milestones.firstIndex { xp < $0.xpRequired }
    }

    private var milestonesSection: some View {
        GlassPanelWrapper {
            VStack(alignment: .leading, spacing: 0) {
                ForEach(Array(milestones.enumerated()), id: \.element.title) { index, milestone in
                    milestoneRow(milestone, index: index, isLast: index == milestones.count - 1)
                        .staggeredReveal(index: index)
                }
            }
        }
        .onAppear {
            guard !reduceMotion else { return }
            // Flowing water animation for timeline connectors (Story 6.1.1)
            withAnimation(.linear(duration: 4).repeatForever(autoreverses: false)) {
                timelineFlowPhase = 1.0
            }
            // Breathing pulse for current position indicator (Story 6.1.1)
            withAnimation(.easeInOut(duration: 3).repeatForever(autoreverses: true)) {
                currentPositionPulse = 1.0
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

    private func milestoneRow(_ milestone: Milestone, index: Int, isLast: Bool) -> some View {
        let currentXP = profile?.totalXP ?? 0
        let isUnlocked = currentXP >= milestone.xpRequired
        let isUpcoming = index == upcomingMilestoneIndex
        let isCurrent = isUnlocked && (index == milestones.count - 1 || currentXP < milestones[index + 1].xpRequired)
        let journeyMilestone = JourneyMilestone(title: milestone.title, icon: milestone.icon, color: milestone.color, xpRequired: milestone.xpRequired)

        return HStack(alignment: .top, spacing: isDark ? 10 : 14) {
            // Timeline column (Story 6.1.1)
            VStack(spacing: 0) {
                // Junction dot + badge (Story 6.1.1)
                if isDark {
                    MilestoneBadgeView(
                        milestone: journeyMilestone,
                        isUnlocked: isUnlocked,
                        style: badgeStyle
                    )
                } else {
                    ZStack {
                        // Current position — glowing pulse ring
                        if isCurrent {
                            Circle()
                                .stroke(
                                    LinearGradient.caribbeanGradientOcean,
                                    lineWidth: 2
                                )
                                .frame(width: 46, height: 46)
                                .opacity(0.15 * currentPositionPulse)
                                .blur(radius: 8)

                            Circle()
                                .stroke(
                                    LinearGradient.caribbeanGradientOcean,
                                    lineWidth: 1.5
                                )
                                .frame(width: 42, height: 42)
                                .opacity(0.4 * currentPositionPulse)
                        }

                        // Upcoming — golden shimmer ring
                        if isUpcoming {
                            Circle()
                                .stroke(
                                    LinearGradient.caribbeanGradientSand,
                                    lineWidth: 1.5
                                )
                                .frame(width: 44, height: 44)
                                .opacity(0.3)
                        }

                        // Icon circle
                        ZStack {
                            Circle()
                                .fill(
                                    isUnlocked
                                        ? LinearGradient(
                                            colors: [milestone.color, milestone.color.opacity(0.7)],
                                            startPoint: .topLeading,
                                            endPoint: .bottomTrailing
                                        )
                                        : (isUpcoming
                                            ? LinearGradient(
                                                colors: [Color(hex: "F59E0B").opacity(0.12), Color(hex: "FB923C").opacity(0.08)],
                                                startPoint: .top,
                                                endPoint: .bottom
                                            )
                                            : LinearGradient(
                                                colors: [Color.caribbeanMist.opacity(0.10), Color.caribbeanMist.opacity(0.06)],
                                                startPoint: .top,
                                                endPoint: .bottom
                                            ))
                                )
                                .frame(width: 38, height: 38)

                            if !isUnlocked {
                                Circle()
                                    .strokeBorder(
                                        isUpcoming
                                            ? Color(hex: "F59E0B").opacity(0.25)
                                            : Color.caribbeanBorderSubtle,
                                        style: isUpcoming ? StrokeStyle(lineWidth: 1) : StrokeStyle(lineWidth: 1, dash: [3, 3]),
                                        antialiased: true
                                    )
                                    .frame(width: 38, height: 38)
                            }

                            Image(systemName: isUnlocked ? milestone.icon : (isUpcoming ? milestone.icon : "lock.fill"))
                                .font(.system(size: isUnlocked ? 16 : 13, weight: .medium))
                                .foregroundStyle(
                                    isUnlocked
                                        ? AnyShapeStyle(.white)
                                        : (isUpcoming
                                            ? AnyShapeStyle(Color(hex: "F59E0B"))
                                            : AnyShapeStyle(Color.caribbeanMist))
                                )
                        }
                    }
                    .frame(width: 46)
                }

                // Connector line (Story 6.1.1)
                if !isLast {
                    if isDark {
                        Rectangle()
                            .fill(isUnlocked ? milestone.color.opacity(0.3) : .gray.opacity(0.15))
                            .frame(width: 2, height: 20)
                    } else {
                        // Check if the next milestone is also unlocked for the connector
                        let nextUnlocked = (index + 1 < milestones.count) && (currentXP >= milestones[index + 1].xpRequired)
                        ZStack {
                            if isUnlocked && nextUnlocked {
                                // Fully unlocked connector — flowing gradient
                                RoundedRectangle(cornerRadius: 1.5)
                                    .fill(
                                        LinearGradient(
                                            colors: [Color(hex: "0EA5E9"), Color(hex: "06B6D4"), Color(hex: "14B8A6")],
                                            startPoint: UnitPoint(x: 0.5, y: -timelineFlowPhase),
                                            endPoint: UnitPoint(x: 0.5, y: 1 - timelineFlowPhase)
                                        )
                                    )
                                    .frame(width: 3, height: 28)
                                    // Soft turquoise glow
                                    .shadow(color: Color.caribbeanOcean.opacity(0.08), radius: 4)
                            } else if isUnlocked && !nextUnlocked {
                                // Transitional connector — gradient fade to dashed
                                VStack(spacing: 0) {
                                    RoundedRectangle(cornerRadius: 1.5)
                                        .fill(LinearGradient.caribbeanGradientOcean)
                                        .frame(width: 3, height: 14)
                                    Rectangle()
                                        .fill(Color.caribbeanMist.opacity(0.15))
                                        .frame(width: 2, height: 14)
                                        .mask(
                                            VStack(spacing: 6) {
                                                ForEach(0..<2, id: \.self) { _ in
                                                    Rectangle().frame(height: 4)
                                                }
                                            }
                                        )
                                }
                            } else {
                                // Locked connector — dashed
                                Rectangle()
                                    .fill(Color.caribbeanMist.opacity(0.15))
                                    .frame(width: 2, height: 28)
                                    .mask(
                                        VStack(spacing: 6) {
                                            ForEach(0..<3, id: \.self) { _ in
                                                Rectangle().frame(height: 4)
                                            }
                                        }
                                    )
                            }
                        }
                    }
                }
            }

            // Content card (Story 6.1.2)
            if isDark {
                // Dark mode — unchanged
                VStack(alignment: .leading, spacing: 1) {
                    Text(milestone.title)
                        .font(.system(size: 13, weight: .semibold))
                        .foregroundStyle(.white.opacity(isUnlocked ? 1 : 0.4))

                    Text(formattedXP(milestone.xpRequired) + " " + L.xpRequired)
                        .font(.system(size: 10))
                        .foregroundStyle(.white.opacity(0.4))
                }

                Spacer()

                if isUnlocked {
                    Image(systemName: "checkmark.circle.fill")
                        .font(.system(size: 14))
                        .foregroundStyle(.green)
                }
            } else {
                // Light mode — premium milestone cards
                VStack(alignment: .leading, spacing: 4) {
                    HStack {
                        Text(milestone.title)
                            .font(.system(size: 14, weight: .bold))
                            .foregroundStyle(isUnlocked ? Color.caribbeanInk : Color.caribbeanMist)

                        Spacer()

                        if isUnlocked {
                            // Achievement badge — gold ribbon capsule
                            HStack(spacing: 3) {
                                Image(systemName: "checkmark.seal.fill")
                                    .font(.system(size: 10))
                                Text(formattedXP(milestone.xpRequired) + " XP")
                                    .font(.system(size: 10, weight: .bold, design: .rounded))
                            }
                            .foregroundStyle(
                                LinearGradient(
                                    colors: [Color(hex: "F59E0B"), Color(hex: "FB923C")],
                                    startPoint: .leading,
                                    endPoint: .trailing
                                )
                            )
                            .padding(.horizontal, 8)
                            .padding(.vertical, 3)
                            .background(
                                Capsule()
                                    .fill(Color(hex: "F59E0B").opacity(0.08))
                            )
                        } else if isUpcoming {
                            // "Almost there!" pulsing badge
                            Text("Almost there!")
                                .font(.system(size: 9, weight: .bold))
                                .foregroundStyle(
                                    LinearGradient.caribbeanGradientSand
                                )
                                .padding(.horizontal, 8)
                                .padding(.vertical, 3)
                                .background(
                                    Capsule()
                                        .fill(Color(hex: "F59E0B").opacity(0.08))
                                )
                                .opacity(0.7 + 0.3 * currentPositionPulse)
                        }
                    }

                    if isUnlocked {
                        Text(formattedXP(milestone.xpRequired) + " " + L.xpRequired)
                            .font(.system(size: 11))
                            .foregroundStyle(Color.caribbeanPlum)
                    } else if isUpcoming {
                        // Progress bar toward this milestone
                        let xpNeeded = milestone.xpRequired
                        let progress = xpNeeded > 0 ? min(Double(currentXP) / Double(xpNeeded), 1.0) : 0

                        VStack(alignment: .leading, spacing: 3) {
                            GeometryReader { geo in
                                ZStack(alignment: .leading) {
                                    Capsule()
                                        .fill(Color.caribbeanRecessed)
                                        .frame(height: 5)
                                    Capsule()
                                        .fill(LinearGradient.caribbeanGradientSand)
                                        .frame(width: max(5, geo.size.width * progress), height: 5)
                                }
                            }
                            .frame(height: 5)

                            Text("\(formattedXP(currentXP)) / \(formattedXP(xpNeeded)) XP")
                                .font(.system(size: 10))
                                .foregroundStyle(Color.caribbeanPlum)
                        }
                    } else {
                        // Locked — XP required hint
                        HStack(spacing: 4) {
                            Image(systemName: "lock.fill")
                                .font(.system(size: 8))
                            Text("\(formattedXP(milestone.xpRequired)) XP to unlock")
                                .font(.system(size: 10))
                        }
                        .foregroundStyle(Color.caribbeanMist)
                    }
                }
                .padding(.vertical, 8)
                .padding(.horizontal, 10)
                .frame(maxWidth: .infinity, alignment: .leading)
                .background(
                    Group {
                        if isUpcoming {
                            // Golden shimmer card for upcoming milestone
                            RoundedRectangle(cornerRadius: 12)
                                .fill(Color(hex: "F59E0B").opacity(0.04))
                                .overlay(
                                    RoundedRectangle(cornerRadius: 12)
                                        .strokeBorder(
                                            LinearGradient(
                                                colors: [Color(hex: "F59E0B").opacity(0.20), Color(hex: "FB923C").opacity(0.12)],
                                                startPoint: .topLeading,
                                                endPoint: .bottomTrailing
                                            ),
                                            lineWidth: 1
                                        )
                                )
                        } else if isUnlocked {
                            // Warm unlocked card
                            RoundedRectangle(cornerRadius: 12)
                                .fill(milestone.color.opacity(0.04))
                                .overlay(
                                    RoundedRectangle(cornerRadius: 12)
                                        .strokeBorder(milestone.color.opacity(0.10), lineWidth: 0.5)
                                )
                        } else {
                            // Locked card — disabled surface
                            RoundedRectangle(cornerRadius: 12)
                                .fill(Color.caribbeanDisabled.opacity(0.3))
                        }
                    }
                )
            }
        }
        .padding(.vertical, isDark ? 0 : 3)
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
            // Hero: Level ring + XP bar (Story 6.1.3 — enhanced for light mode)
            HStack(spacing: 16) {
                // Circular level badge
                ZStack {
                    if !isDark {
                        // Story 6.1.3 — Ambient rotating ring (like a compass on a ship)
                        Circle()
                            .stroke(
                                LinearGradient(
                                    colors: [Color(hex: "0EA5E9"), Color(hex: "FB7185"), Color(hex: "FDE68A")],
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing
                                ),
                                lineWidth: 2
                            )
                            .frame(width: 68, height: 68)
                            .opacity(0.4)
                            .rotationEffect(.degrees(levelRingRotation))
                            .onAppear {
                                guard !reduceMotion else { return }
                                withAnimation(.linear(duration: 20).repeatForever(autoreverses: false)) {
                                    levelRingRotation = 360
                                }
                            }

                        // Progress track (faded)
                        Circle()
                            .stroke(Color.caribbeanRecessed, lineWidth: 4)
                            .frame(width: 60, height: 60)

                        // Progress fill — caribbean ocean gradient
                        Circle()
                            .trim(from: 0, to: progress)
                            .stroke(
                                LinearGradient.caribbeanGradientOcean,
                                style: StrokeStyle(lineWidth: 4, lineCap: .round)
                            )
                            .frame(width: 60, height: 60)
                            .rotationEffect(.degrees(-90))

                        // Badge circle fill
                        Circle()
                            .fill(
                                LinearGradient(
                                    colors: [Color(hex: "0EA5E9"), Color(hex: "06B6D4"), Color(hex: "14B8A6")],
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing
                                )
                            )
                            .frame(width: 48, height: 48)
                            .shadow(color: Color.caribbeanOcean.opacity(0.20), radius: 8, y: 2)

                        VStack(spacing: 0) {
                            Text("\(level)")
                                .font(.system(size: 20, weight: .bold, design: .rounded))
                                .foregroundStyle(.white)
                            Text(L.level.uppercased())
                                .font(.system(size: 7, weight: .semibold))
                                .foregroundStyle(.white.opacity(0.7))
                                .tracking(1)
                        }
                    } else {
                        // Dark mode — original treatment
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
                                .foregroundStyle(.white.opacity(0.4))
                                .tracking(1)
                        }
                    }
                }

                // XP info
                VStack(alignment: .leading, spacing: 6) {
                    Text(formattedXP(totalXP) + " XP")
                        .font(.system(size: 20, weight: .bold, design: .rounded))
                        .foregroundStyle(isDark ? .white : .caribbeanInk)

                    // Progress bar (Story 6.1.3 — ocean gradient fill in light mode)
                    GeometryReader { geo in
                        ZStack(alignment: .leading) {
                            Capsule()
                                .fill(isDark ? .white.opacity(0.08) : Color.caribbeanRecessed)
                                .frame(height: 6)

                            Capsule()
                                .fill(
                                    isDark
                                        ? AnyShapeStyle(LinearGradient(
                                            colors: [Color(hex: "#667eea"), Color(hex: "#a855f7")],
                                            startPoint: .leading,
                                            endPoint: .trailing
                                        ))
                                        : AnyShapeStyle(LinearGradient.caribbeanGradientOcean)
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
            .staggeredReveal(index: 0)

            // Divider
            Rectangle()
                .fill(isDark ? .white.opacity(0.06) : .black.opacity(0.06))
                .frame(height: 1)
                .padding(.horizontal, 4)
                .staggeredReveal(index: 1)

            // Three stat columns
            HStack(spacing: 0) {
                overviewStat(
                    icon: "bolt.fill",
                    value: formattedXP(totalXP),
                    label: hasUserName ? "\(displayName)'s XP" : L.totalXP,
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
            .staggeredReveal(index: 2)
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
            ForEach(Array(GameType.allCases.enumerated()), id: \.element) { index, type in
                gameTypeRow(type)
                    .staggeredReveal(index: index)
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

        let accentColor = colors.first ?? .purple

        return HStack(spacing: 0) {
            ZStack {
                if !isDark {
                    // Light mode: rounded-square icon with shadow
                    RoundedRectangle(cornerRadius: 10)
                        .fill(
                            LinearGradient(colors: colors, startPoint: .topLeading, endPoint: .bottomTrailing)
                        )
                        .frame(width: 36, height: 36)
                        .shadow(color: accentColor.opacity(0.20), radius: 6, y: 2)
                } else {
                    RoundedRectangle(cornerRadius: 8)
                        .fill(
                            LinearGradient(colors: colors, startPoint: .topLeading, endPoint: .bottomTrailing)
                        )
                        .frame(width: 32, height: 32)
                }

                Image(systemName: gameTypeIcon(type))
                    .font(.system(size: isDark ? 14 : 15))
                    .foregroundStyle(.white)
            }
            .padding(.trailing, isDark ? 8 : 10)

            Text(type.displayName)
                .font(.system(size: 13, weight: .semibold))
                .foregroundStyle(isDark ? .white : .caribbeanInk)
                .frame(width: 80, alignment: .leading)

            statPill(value: "\(records.count)", label: L.sessions.lowercased(), accent: accentColor)
            statPill(value: formattedXP(totalScore), label: L.xp, accent: accentColor)
            statPill(value: "\(Int(accuracy))%", label: L.accuracy.lowercased(), accent: accentColor)
        }
        .padding(isDark ? 10 : 12)
        .background {
            if isDark {
                RoundedRectangle(cornerRadius: 16)
                    .fill(.white.opacity(0.04))
                    .overlay(
                        RoundedRectangle(cornerRadius: 16)
                            .strokeBorder(.white.opacity(0.06), lineWidth: 1)
                    )
            } else {
                // Frost trough — recessed glass card with accent tint
                ZStack {
                    // Recessed frost base
                    RoundedRectangle(cornerRadius: 16)
                        .fill(Color(red: 0.94, green: 0.95, blue: 0.97))
                    // Subtle game-specific accent tint
                    RoundedRectangle(cornerRadius: 16)
                        .fill(accentColor.opacity(0.04))
                    // Inner shadow for depth
                    RoundedRectangle(cornerRadius: 16)
                        .fill(
                            LinearGradient(
                                colors: [
                                    Color(red: 0.80, green: 0.82, blue: 0.87).opacity(0.22),
                                    Color.clear,
                                    Color.white.opacity(0.15)
                                ],
                                startPoint: .top,
                                endPoint: .bottom
                            )
                        )
                    // Glass rim border
                    RoundedRectangle(cornerRadius: 16)
                        .strokeBorder(
                            LinearGradient(
                                colors: [
                                    Color.white.opacity(0.65),
                                    Color.white.opacity(0.30),
                                    Color.white.opacity(0.45)
                                ],
                                startPoint: .top,
                                endPoint: .bottom
                            ),
                            lineWidth: 0.5
                        )
                    // White surface highlight — top band
                    VStack {
                        RoundedRectangle(cornerRadius: 16)
                            .fill(
                                LinearGradient(
                                    colors: [
                                        Color.white.opacity(0.45),
                                        Color.white.opacity(0.10),
                                        Color.clear
                                    ],
                                    startPoint: .top,
                                    endPoint: .center
                                )
                            )
                            .frame(height: 18)
                        Spacer()
                    }
                    .clipShape(RoundedRectangle(cornerRadius: 16))
                }
                .shadow(
                    color: accentColor.opacity(0.06),
                    radius: 4, y: 2
                )
            }
        }
    }

    private func statPill(value: String, label: String, accent: Color = .clear) -> some View {
        VStack(spacing: 2) {
            Text(value)
                .font(.system(size: 13, weight: .bold, design: .rounded))
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
            .staggeredReveal(index: 0)

            Text(L.keepLearningEveryDay)
                .font(.system(size: 11))
                .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
                .multilineTextAlignment(.center)
                .staggeredReveal(index: 1)
        }
        .padding(14)
        .background(GlassCardBackground())
    }

    // MARK: - Reset Progress

    private var resetProgressButton: some View {
        VStack(spacing: isDark ? 10 : 12) {
            HStack(spacing: 6) {
                if !isDark {
                    // Frost warning icon circle
                    ZStack {
                        Circle()
                            .fill(Color.red.opacity(0.06))
                            .frame(width: 24, height: 24)
                        Image(systemName: "exclamationmark.triangle.fill")
                            .font(.system(size: 10, weight: .medium))
                            .foregroundStyle(
                                LinearGradient(
                                    colors: [.red.opacity(0.65), .orange.opacity(0.55)],
                                    startPoint: .top,
                                    endPoint: .bottom
                                )
                            )
                    }
                } else {
                    Image(systemName: "exclamationmark.triangle.fill")
                        .font(.system(size: 10, weight: .medium))
                        .foregroundStyle(.red.opacity(0.6))
                }
                Text(L.startFreshDescription)
                    .font(.system(size: 11))
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanMist)
                    .frame(maxWidth: .infinity, alignment: .leading)
            }

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
                                colors: isDark
                                    ? [.red.opacity(0.7), .red.opacity(0.5)]
                                    : [.red.opacity(0.65), .red.opacity(0.45)],
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                        .overlay(
                            RoundedRectangle(cornerRadius: 12)
                                .strokeBorder(
                                    isDark ? .white.opacity(0.15) : .white.opacity(0.25),
                                    lineWidth: isDark ? 1 : 0.75
                                )
                        )
                        .shadow(
                            color: isDark ? .clear : .red.opacity(0.12),
                            radius: 6, y: 2
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
// Now shared via Views/Shared/CollapsibleSection.swift
