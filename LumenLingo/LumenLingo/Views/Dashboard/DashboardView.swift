import SwiftUI
import SwiftData

// MARK: - Dashboard View

/// Main landing screen with greeting, stats, game cards, and recent activity.
/// Faithfully mirrors the React DashboardHeader + GamesSection + RecentActivity.
struct DashboardView: View {
    @Environment(\.modelContext) private var modelContext
    @Environment(\.colorScheme) private var colorScheme

    @Query private var profiles: [UserProfile]
    @Query(sort: \GameProgressRecord.createdDate, order: .reverse)
    private var recentProgress: [GameProgressRecord]

    @Binding var hideTabBar: Bool
    @Binding var navigationPath: NavigationPath

    @State private var isHeaderCollapsed = false
    @State private var scrollOffset: CGFloat = 0

    private var profile: UserProfile? { profiles.first }
    private var user: AppUser { .mock }

    var body: some View {
        ScrollView {
            VStack(spacing: 24) {
                // Header: Avatar + Greeting + Stats
                dashboardHeader

                // Games Section
                gamesSection

                // Recent Activity
                recentActivitySection

                Spacer(minLength: 100)
            }
            .padding(.horizontal, 16)
            .padding(.top, 8)
        }
        .cosmicBackground(
            preset: .lagoonNebula,
            orbScheme: .barcelonaNights,
            quantumScene: .auroraBorealis
        )
        .navigationBarTitleDisplayMode(.inline)
        .toolbar(.hidden, for: .navigationBar)
    }

    // MARK: - Dashboard Header

    private var dashboardHeader: some View {
        VStack(spacing: 16) {
            // Avatar + Greeting row
            HStack(spacing: 14) {
                // Gradient avatar
                ZStack {
                    RoundedRectangle(cornerRadius: 18)
                        .fill(
                            LinearGradient(
                                colors: [Color(hex: "#667eea"), Color(hex: "#764ba2")],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            )
                        )
                        .frame(width: 56, height: 56)
                        .shadow(color: Color(hex: "#764ba2").opacity(0.4), radius: 12)

                    Image(systemName: "person.fill")
                        .font(.system(size: 24))
                        .foregroundStyle(.white)
                }

                VStack(alignment: .leading, spacing: 4) {
                    Text("Hello, \(user.firstName)!")
                        .font(.title2.bold())
                        .foregroundStyle(.white)

                    Text("Ready for a new adventure?")
                        .font(.subheadline)
                        .foregroundStyle(.white.opacity(0.7))
                }

                Spacer()

                if !isHeaderCollapsed {
                    Button {
                        withAnimation(.spring(response: 0.4)) {
                            isHeaderCollapsed.toggle()
                        }
                    } label: {
                        Image(systemName: "chevron.up")
                            .font(.caption.bold())
                            .foregroundStyle(.white.opacity(0.5))
                            .padding(8)
                            .background(Circle().fill(.white.opacity(0.1)))
                    }
                }
            }

            // Stats row (collapsible)
            if !isHeaderCollapsed {
                statsRow
                    .transition(.move(edge: .top).combined(with: .opacity))
            } else {
                // Compact stat badges
                compactStatBadges
                    .transition(.opacity)
            }
        }
        .padding(20)
        .background(
            glassCard
        )
        .onTapGesture {
            if isHeaderCollapsed {
                withAnimation(.spring(response: 0.4)) {
                    isHeaderCollapsed = false
                }
            }
        }
    }

    private var statsRow: some View {
        HStack(spacing: 12) {
            statCard(
                title: "Level",
                value: "\(profile?.currentLevel ?? 1)",
                icon: "star.fill",
                iconColor: .yellow,
                gradient: [Color(hex: "#f59e0b"), Color(hex: "#d97706")],
                progress: profile?.levelProgress
            )

            statCard(
                title: "Total XP",
                value: "\(profile?.totalXP ?? 0)",
                icon: "bolt.fill",
                iconColor: .cyan,
                gradient: [Color(hex: "#06b6d4"), Color(hex: "#0891b2")]
            )

            statCard(
                title: "Active Days",
                value: "\(profile?.streakDays ?? 0)",
                icon: "trophy.fill",
                iconColor: .orange,
                gradient: [Color(hex: "#f97316"), Color(hex: "#ea580c")]
            )
        }
    }

    private func statCard(
        title: String,
        value: String,
        icon: String,
        iconColor: Color,
        gradient: [Color],
        progress: Double? = nil
    ) -> some View {
        VStack(spacing: 8) {
            HStack(spacing: 6) {
                Image(systemName: icon)
                    .font(.system(size: 14))
                    .foregroundStyle(iconColor)
                Text(value)
                    .font(.title3.bold())
                    .foregroundStyle(.white)
            }

            Text(title)
                .font(.caption)
                .foregroundStyle(.white.opacity(0.6))

            if let progress {
                GeometryReader { geo in
                    ZStack(alignment: .leading) {
                        Capsule()
                            .fill(.white.opacity(0.1))
                            .frame(height: 4)

                        Capsule()
                            .fill(
                                LinearGradient(
                                    colors: gradient,
                                    startPoint: .leading,
                                    endPoint: .trailing
                                )
                            )
                            .frame(width: geo.size.width * progress, height: 4)
                    }
                }
                .frame(height: 4)
            }
        }
        .frame(maxWidth: .infinity)
        .padding(12)
        .background(
            RoundedRectangle(cornerRadius: 14)
                .fill(.white.opacity(colorScheme == .dark ? 0.06 : 0.12))
                .overlay(
                    RoundedRectangle(cornerRadius: 14)
                        .strokeBorder(.white.opacity(0.08), lineWidth: 1)
                )
        )
    }

    private var compactStatBadges: some View {
        HStack(spacing: 16) {
            statBadge(icon: "star.fill", value: "\(profile?.currentLevel ?? 1)", color: .yellow)
            statBadge(icon: "bolt.fill", value: "\(profile?.totalXP ?? 0)", color: .cyan)
            statBadge(icon: "trophy.fill", value: "\(profile?.streakDays ?? 0)", color: .orange)
        }
    }

    private func statBadge(icon: String, value: String, color: Color) -> some View {
        HStack(spacing: 4) {
            Image(systemName: icon)
                .font(.system(size: 11))
                .foregroundStyle(color)
            Text(value)
                .font(.caption.bold())
                .foregroundStyle(.white.opacity(0.8))
        }
        .padding(.horizontal, 8)
        .padding(.vertical, 4)
        .background(Capsule().fill(.white.opacity(0.08)))
    }

    // MARK: - Games Section

    private var gamesSection: some View {
        VStack(spacing: 16) {
            HStack {
                Image(systemName: "safari.fill")
                    .font(.title3)
                    .foregroundStyle(
                        LinearGradient(
                            colors: [Color(hex: "#667eea"), Color(hex: "#764ba2")],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
                    .symbolEffect(.pulse, options: .repeating.speed(0.3))

                Text("Choose Your Adventure")
                    .font(.title3.bold())
                    .foregroundStyle(.white)

                Spacer()
            }

            VStack(spacing: 14) {
                gameCard(
                    title: "Flash Cards",
                    description: "Master new vocabulary with interactive flip cards",
                    icon: "rectangle.on.rectangle.angled",
                    gradient: [Color(hex: "#667eea"), Color(hex: "#06b6d4"), Color(hex: "#0d9488")],
                    cta: "Master New Words",
                    route: .flashcardsCategories
                )

                gameCard(
                    title: "Grammar",
                    description: "Test your knowledge with challenging questions",
                    icon: "text.book.closed.fill",
                    gradient: [Color(hex: "#f093fb"), Color(hex: "#f5576c"), Color(hex: "#e11d48")],
                    cta: "Test Your Skills",
                    route: .grammarCategories
                )

                gameCard(
                    title: "Word Builder",
                    description: "Construct words letter by letter from scrambled clues",
                    icon: "textformat.abc",
                    gradient: [Color(hex: "#fbbf24"), Color(hex: "#f97316"), Color(hex: "#ef4444")],
                    cta: "Craft & Discover",
                    route: .wordBuilderCategories
                )
            }
        }
    }

    private func gameCard(
        title: String,
        description: String,
        icon: String,
        gradient: [Color],
        cta: String,
        route: AppRoute
    ) -> some View {
        Button {
            navigationPath.append(route)
        } label: {
            HStack(spacing: 16) {
                // Gradient icon container
                ZStack {
                    RoundedRectangle(cornerRadius: 16)
                        .fill(
                            LinearGradient(
                                colors: gradient,
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            )
                        )
                        .frame(width: 56, height: 56)
                        .shadow(color: gradient[0].opacity(0.3), radius: 10)

                    Image(systemName: icon)
                        .font(.system(size: 24))
                        .foregroundStyle(.white)
                }

                VStack(alignment: .leading, spacing: 4) {
                    Text(title)
                        .font(.headline)
                        .foregroundStyle(.white)

                    Text(description)
                        .font(.caption)
                        .foregroundStyle(.white.opacity(0.6))
                        .lineLimit(2)
                }

                Spacer()

                HStack(spacing: 4) {
                    Text(cta)
                        .font(.caption2.bold())
                        .foregroundStyle(gradient[0])

                    Image(systemName: "arrow.right")
                        .font(.caption2)
                        .foregroundStyle(gradient[0])
                }
            }
            .padding(16)
            .background(glassCard)
        }
        .buttonStyle(.plain)
    }

    // MARK: - Recent Activity

    private var recentActivitySection: some View {
        let activities = Array(recentProgress.prefix(5))

        return Group {
            if !activities.isEmpty {
                VStack(spacing: 12) {
                    HStack {
                        Text("Recent Activity")
                            .font(.title3.bold())
                            .foregroundStyle(
                                LinearGradient(
                                    colors: [Color(hex: "#667eea"), Color(hex: "#764ba2")],
                                    startPoint: .leading,
                                    endPoint: .trailing
                                )
                            )
                        Spacer()
                    }

                    VStack(spacing: 8) {
                        ForEach(activities) { activity in
                            activityRow(activity)
                        }
                    }
                    .padding(16)
                    .background(glassCard)
                }
            }
        }
    }

    private func activityRow(_ record: GameProgressRecord) -> some View {
        let type = record.gameTypeEnum ?? .flashCards
        return HStack(spacing: 12) {
            // Game type icon
            Circle()
                .fill(gameTypeGradient(type).opacity(0.2))
                .frame(width: 40, height: 40)
                .overlay(
                    Image(systemName: gameTypeIcon(type))
                        .font(.system(size: 16))
                        .foregroundStyle(gameTypeColor(type))
                )

            VStack(alignment: .leading, spacing: 2) {
                Text("\(type.displayName) · \(record.categoryName)")
                    .font(.subheadline.bold())
                    .foregroundStyle(.white)
                    .lineLimit(1)

                Text("+\(record.score) XP · \(record.correctAnswers)/\(record.totalQuestions) correct · \(record.completedAt.timeAgoDisplay)")
                    .font(.caption)
                    .foregroundStyle(.white.opacity(0.5))
            }

            Spacer()

            Image(systemName: "chevron.right")
                .font(.caption)
                .foregroundStyle(.white.opacity(0.3))
        }
        .padding(.vertical, 6)
    }

    // MARK: - Helpers

    private var glassCard: some View {
        RoundedRectangle(cornerRadius: 22)
            .fill(.ultraThinMaterial)
            .overlay(
                RoundedRectangle(cornerRadius: 22)
                    .strokeBorder(.white.opacity(colorScheme == .dark ? 0.08 : 0.15), lineWidth: 1)
            )
            .shadow(color: .black.opacity(0.15), radius: 20, y: 8)
    }

    private func gameTypeIcon(_ type: GameType) -> String {
        switch type {
        case .flashCards: "rectangle.on.rectangle.angled"
        case .grammar: "text.book.closed.fill"
        case .wordBuilder: "textformat.abc"
        }
    }

    private func gameTypeColor(_ type: GameType) -> Color {
        switch type {
        case .flashCards: Color(hex: "#06b6d4")
        case .grammar: Color(hex: "#f093fb")
        case .wordBuilder: Color(hex: "#f97316")
        }
    }

    private func gameTypeGradient(_ type: GameType) -> Color {
        gameTypeColor(type)
    }
}
