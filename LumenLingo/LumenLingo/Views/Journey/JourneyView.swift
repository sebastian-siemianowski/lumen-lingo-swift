import SwiftUI
import SwiftData

// MARK: - Journey / Progress View

/// Shows learning statistics, progress charts, streaks, and
/// inspirational wisdom quotes. Mirrors the React ProgressContainer.
struct JourneyView: View {
    @Environment(\.modelContext) private var modelContext
    @Environment(\.colorScheme) private var colorScheme

    @Query private var profiles: [UserProfile]
    @Query(sort: \GameProgressRecord.createdDate, order: .reverse)
    private var allProgress: [GameProgressRecord]

    private var profile: UserProfile? { profiles.first }
    private var isDark: Bool { colorScheme == .dark }

    private var randomQuote: WisdomQuote {
        WisdomQuote.allQuotes.randomElement() ?? WisdomQuote.allQuotes[0]
    }

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

                Spacer(minLength: 80)
            }
            .padding(.horizontal, 16)
            .padding(.top, 12)
        }
        .cosmicBackground()
        .navigationBarTitleDisplayMode(.inline)
        .toolbarColorScheme(isDark ? .dark : .light, for: .navigationBar)
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
                .symbolEffect(.bounce, options: .repeating.speed(0.15))

            Text("Your Learning Journey")
                .font(.title2.bold())
                .foregroundStyle(isDark ? .white : Color(red: 30/255, green: 25/255, blue: 60/255))

            Text("Track your progress and celebrate achievements")
                .font(.subheadline)
                .foregroundStyle(isDark ? .white.opacity(0.6) : .secondary)
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
                    Text("Milestones")
                        .font(.headline)
                        .foregroundStyle(isDark ? .white : .primary)
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
            Milestone(title: "First Steps", icon: "shoe.fill", color: .green, xpRequired: 0),
            Milestone(title: "Getting Started", icon: "star.fill", color: .cyan, xpRequired: 50),
            Milestone(title: "Dedicated Learner", icon: "book.fill", color: Color(hex: "#667eea"), xpRequired: 200),
            Milestone(title: "Word Warrior", icon: "shield.fill", color: Color(hex: "#8b5cf6"), xpRequired: 500),
            Milestone(title: "Language Master", icon: "crown.fill", color: .yellow, xpRequired: 1000),
            Milestone(title: "Polyglot Legend", icon: "globe", color: Color(hex: "#ec4899"), xpRequired: 2500),
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
                    .foregroundStyle(isDark ? .white.opacity(isUnlocked ? 1 : 0.4) : (isUnlocked ? .primary : .secondary))

                Text("\(milestone.xpRequired) XP required")
                    .font(.caption)
                    .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)
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
            Text("Overview")
                .font(.headline)
                .foregroundStyle(isDark ? .white : .primary)
                .frame(maxWidth: .infinity, alignment: .leading)

            LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible())], spacing: 12) {
                journeyStat(title: "Level", value: "\(profile?.currentLevel ?? 1)", icon: "star.fill", color: .yellow)
                journeyStat(title: "Total XP", value: "\(profile?.totalXP ?? 0)", icon: "bolt.fill", color: .cyan)
                journeyStat(title: "Sessions", value: "\(allProgress.count)", icon: "play.circle.fill", color: .green)
                journeyStat(title: "Streak", value: "\(profile?.streakDays ?? 0) days", icon: "flame.fill", color: .orange)
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
                .foregroundStyle(isDark ? .white : .primary)

            Text(title)
                .font(.caption)
                .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
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
            Text("Game Performance")
                .font(.headline)
                .foregroundStyle(isDark ? .white : .primary)
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

        return HStack(spacing: 14) {
            ZStack {
                RoundedRectangle(cornerRadius: 12)
                    .fill(
                        LinearGradient(colors: colors, startPoint: .topLeading, endPoint: .bottomTrailing)
                    )
                    .frame(width: 44, height: 44)

                Image(systemName: gameTypeIcon(type))
                    .font(.system(size: 18))
                    .foregroundStyle(.white)
            }

            VStack(alignment: .leading, spacing: 4) {
                Text(type.displayName)
                    .font(.subheadline.bold())
                    .foregroundStyle(isDark ? .white : .primary)

                HStack(spacing: 8) {
                    Text("\(records.count) sessions")
                    Text("·")
                    Text("\(totalScore) XP")
                    Text("·")
                    Text("\(Int(accuracy))% accuracy")
                }
                .font(.caption)
                .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
            }

            Spacer()
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

    // MARK: - Streak Section

    private var streakSection: some View {
        VStack(spacing: 14) {
            HStack(spacing: 8) {
                Image(systemName: "flame.fill")
                    .foregroundStyle(.orange)
                    .symbolEffect(.pulse, options: .repeating.speed(0.3))
                Text("Current Streak")
                    .font(.headline)
                    .foregroundStyle(isDark ? .white : .primary)
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
                Text("days")
                    .font(.title3)
                    .foregroundStyle(isDark ? .white.opacity(0.6) : .secondary)
                    .padding(.top, 16)
            }

            Text("Keep learning every day to maintain your streak!")
                .font(.caption)
                .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)
                .multilineTextAlignment(.center)
        }
        .padding(18)
        .background(GlassCardBackground())
    }

    // MARK: - Wisdom Quote

    private var quoteCard: some View {
        VStack(spacing: 12) {
            Image(systemName: "quote.opening")
                .font(.title2)
                .foregroundStyle(isDark ? .white.opacity(0.3) : .secondary)

            Text(randomQuote.text)
                .font(.subheadline)
                .foregroundStyle(isDark ? .white.opacity(0.8) : .primary)
                .italic()
                .multilineTextAlignment(.center)

            Text("— \(randomQuote.author)")
                .font(.caption)
                .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
        }
        .padding(20)
        .background(GlassCardBackground())
    }

    private func gameTypeIcon(_ type: GameType) -> String {
        switch type {
        case .flashCards: "rectangle.on.rectangle.angled"
        case .grammar: "text.book.closed.fill"
        case .wordBuilder: "textformat.abc"
        }
    }
}
