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

    private var randomQuote: WisdomQuote {
        WisdomQuote.allQuotes.randomElement() ?? WisdomQuote.allQuotes[0]
    }

    var body: some View {
        ScrollView {
            VStack(spacing: 24) {
                // Header
                journeyHeader

                // Overall stats
                overallStats

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
        .cosmicBackground(
            preset: .spiralHaloGalaxy,
            orbScheme: .prahaAmethyst,
            quantumScene: .deepOcean
        )
        .navigationTitle("Journey")
        .navigationBarTitleDisplayMode(.large)
        .toolbarColorScheme(.dark, for: .navigationBar)
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
                .foregroundStyle(.white)

            Text("Track your progress and celebrate achievements")
                .font(.subheadline)
                .foregroundStyle(.white.opacity(0.6))
                .multilineTextAlignment(.center)
        }
        .padding(.top, 10)
    }

    // MARK: - Overall Stats

    private var overallStats: some View {
        VStack(spacing: 14) {
            Text("Overview")
                .font(.headline)
                .foregroundStyle(.white)
                .frame(maxWidth: .infinity, alignment: .leading)

            LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible())], spacing: 12) {
                journeyStat(title: "Level", value: "\(profile?.currentLevel ?? 1)", icon: "star.fill", color: .yellow)
                journeyStat(title: "Total XP", value: "\(profile?.totalXP ?? 0)", icon: "bolt.fill", color: .cyan)
                journeyStat(title: "Sessions", value: "\(allProgress.count)", icon: "play.circle.fill", color: .green)
                journeyStat(title: "Streak", value: "\(profile?.streakDays ?? 0) days", icon: "flame.fill", color: .orange)
            }
        }
        .padding(18)
        .background(glassCard)
    }

    private func journeyStat(title: String, value: String, icon: String, color: Color) -> some View {
        VStack(spacing: 8) {
            Image(systemName: icon)
                .font(.title2)
                .foregroundStyle(color)
                .shadow(color: color.opacity(0.4), radius: 8)

            Text(value)
                .font(.title3.bold())
                .foregroundStyle(.white)

            Text(title)
                .font(.caption)
                .foregroundStyle(.white.opacity(0.5))
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
                .foregroundStyle(.white)
                .frame(maxWidth: .infinity, alignment: .leading)

            ForEach(GameType.allCases, id: \.self) { type in
                gameTypeRow(type)
            }
        }
        .padding(18)
        .background(glassCard)
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
                    .foregroundStyle(.white)

                HStack(spacing: 8) {
                    Text("\(records.count) sessions")
                    Text("·")
                    Text("\(totalScore) XP")
                    Text("·")
                    Text("\(Int(accuracy))% accuracy")
                }
                .font(.caption)
                .foregroundStyle(.white.opacity(0.5))
            }

            Spacer()
        }
        .padding(12)
        .background(
            RoundedRectangle(cornerRadius: 16)
                .fill(.white.opacity(0.04))
                .overlay(
                    RoundedRectangle(cornerRadius: 16)
                        .strokeBorder(.white.opacity(0.06), lineWidth: 1)
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
                    .foregroundStyle(.white)
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
                    .foregroundStyle(.white.opacity(0.6))
                    .padding(.top, 16)
            }

            Text("Keep learning every day to maintain your streak!")
                .font(.caption)
                .foregroundStyle(.white.opacity(0.4))
                .multilineTextAlignment(.center)
        }
        .padding(18)
        .background(glassCard)
    }

    // MARK: - Wisdom Quote

    private var quoteCard: some View {
        VStack(spacing: 12) {
            Image(systemName: "quote.opening")
                .font(.title2)
                .foregroundStyle(.white.opacity(0.3))

            Text(randomQuote.text)
                .font(.subheadline)
                .foregroundStyle(.white.opacity(0.8))
                .italic()
                .multilineTextAlignment(.center)

            Text("— \(randomQuote.author)")
                .font(.caption)
                .foregroundStyle(.white.opacity(0.5))
        }
        .padding(20)
        .background(glassCard)
    }

    // MARK: - Helpers

    private var glassCard: some View {
        RoundedRectangle(cornerRadius: 22)
            .fill(.ultraThinMaterial)
            .overlay(
                RoundedRectangle(cornerRadius: 22)
                    .strokeBorder(.white.opacity(colorScheme == .dark ? 0.08 : 0.15), lineWidth: 1)
            )
            .shadow(color: .black.opacity(0.1), radius: 15, y: 5)
    }

    private func gameTypeIcon(_ type: GameType) -> String {
        switch type {
        case .flashCards: "rectangle.on.rectangle.angled"
        case .grammar: "text.book.closed.fill"
        case .wordBuilder: "textformat.abc"
        }
    }
}
