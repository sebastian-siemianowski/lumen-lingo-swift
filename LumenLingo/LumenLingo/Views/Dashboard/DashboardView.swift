import SwiftUI
import SwiftData

// MARK: - Dashboard View

/// Main landing screen with greeting, stats, game cards, and recent activity.
/// Faithfully ports the React DashboardHeader + GamesSection + RecentActivity
/// with full glassmorphic design, per-game color schemes, animated icons,
/// gradient top bars, and rich typography.
struct DashboardView: View {
    @Environment(\.modelContext) private var modelContext
    @Environment(\.colorScheme) private var colorScheme

    @Query private var profiles: [UserProfile]
    @Query private var languagePrefs: [LanguagePreference]
    @Query(sort: \GameProgressRecord.createdDate, order: .reverse)
    private var recentProgress: [GameProgressRecord]

    @Binding var hideTabBar: Bool
    @Binding var navigationPath: NavigationPath

    @State private var isHeaderCollapsed = false
    @State private var showLanguageSheet = false
    @State private var fogBreath: CGFloat = 0
    @State private var adventureIconPulse: CGFloat = 0

    private var profile: UserProfile? { profiles.first }
    private var user: AppUser { .mock }
    private var isDark: Bool { colorScheme == .dark }

    private var currentLanguagePair: String {
        guard let pref = languagePrefs.first else { return "English → Spanish" }
        let srcLang = SupportedLanguage(rawValue: pref.sourceLanguage)
        let tgtLang = SupportedLanguage(rawValue: pref.targetLanguage)
        let src = srcLang?.displayName ?? pref.sourceLanguage.capitalized
        let tgt = srcLang.flatMap { s in tgtLang.map { $0.name(in: s) } } ?? pref.targetLanguage.capitalized
        return "\(src) → \(tgt)"
    }

    var body: some View {
        ZStack(alignment: .bottom) {
            ScrollView {
                VStack(spacing: 20) {
                    // Language selector pill
                    languageSelector

                    // Header: Avatar + Greeting + Stats
                    dashboardHeader

                    // Divider
                    GlassDivider(color: .white, opacity: 0.08)
                        .padding(.horizontal, 4)

                    // Games Section
                    gamesSection

                    // Divider
                    GlassDivider(color: .white, opacity: 0.08)
                        .padding(.horizontal, 4)

                    // Recent Activity
                    recentActivitySection

                    Spacer(minLength: 120)
                }
                .padding(.horizontal, 16)
                .padding(.top, 8)
            }

            // Bottom fog overlay
            fogOverlay
        }
        .cosmicBackground()
        .navigationBarTitleDisplayMode(.inline)
        .toolbar(.hidden, for: .navigationBar)
        .sheet(isPresented: $showLanguageSheet) {
            LanguageSelectionView()
        }
    }

    // MARK: - Language Selector

    private var languageSelector: some View {
        Button {
            showLanguageSheet = true
        } label: {
            HStack(spacing: 8) {
                Image(systemName: "globe")
                    .font(.system(size: 14))
                    .foregroundStyle(Color(hex: "#667eea"))

                Text(currentLanguagePair)
                    .font(.system(size: 13, weight: .semibold))
                    .foregroundStyle(.white.opacity(0.85))

                Image(systemName: "chevron.down")
                    .font(.system(size: 10, weight: .bold))
                    .foregroundStyle(.white.opacity(0.4))
            }
            .padding(.horizontal, 14)
            .padding(.vertical, 8)
            .background(
                Capsule()
                    .fill(.ultraThinMaterial)
                    .overlay(
                        Capsule()
                            .strokeBorder(.white.opacity(0.1), lineWidth: 1)
                    )
            )
        }
        .buttonStyle(ScaleButtonStyle())
        .frame(maxWidth: .infinity, alignment: .leading)
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
                compactStatBadges
                    .transition(.opacity)
            }
        }
        .padding(20)
        .background(GlassCardBackground())
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
                    .shadow(color: iconColor.opacity(0.5), radius: 4)
                Text(value)
                    .font(.title3.bold())
                    .foregroundStyle(.white)
            }

            Text(title)
                .font(.caption)
                .foregroundStyle(.white.opacity(0.6))

            if let progress {
                AnimatedProgressBar(
                    progress: progress * 100,
                    height: 4,
                    gradient: gradient,
                    showGlow: false
                )
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
            // Section header with premium icon
            HStack(spacing: 14) {
                ZStack {
                    // Pulsing glow background orbs
                    Circle()
                        .fill(Color(hex: "#d946ef").opacity(0.15))
                        .frame(width: 56, height: 56)
                        .scaleEffect(1.0 + adventureIconPulse * 0.15)
                        .blur(radius: 8)

                    Circle()
                        .fill(Color(hex: "#8b5cf6").opacity(0.1))
                        .frame(width: 48, height: 48)
                        .scaleEffect(1.0 + adventureIconPulse * 0.1)
                        .blur(radius: 6)
                        .offset(x: 4, y: 4)

                    // Icon container
                    RoundedRectangle(cornerRadius: 14)
                        .fill(
                            LinearGradient(
                                colors: [
                                    Color(hex: "#8b5cf6"),
                                    Color(hex: "#d946ef"),
                                    Color(hex: "#7c3aed")
                                ],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            )
                        )
                        .frame(width: 48, height: 48)
                        .overlay(
                            // Inner glow highlight
                            RoundedRectangle(cornerRadius: 14)
                                .fill(
                                    LinearGradient(
                                        colors: [.white.opacity(0.25), .clear],
                                        startPoint: .top,
                                        endPoint: .center
                                    )
                                )
                        )
                        .overlay(
                            RoundedRectangle(cornerRadius: 14)
                                .strokeBorder(.white.opacity(0.2), lineWidth: 1)
                        )
                        .shadow(color: Color(hex: "#d946ef").opacity(0.4 + adventureIconPulse * 0.2), radius: 12)

                    // Icon symbol
                    Image(systemName: "wand.and.stars")
                        .font(.system(size: 22, weight: .medium))
                        .foregroundStyle(.white)
                        .shadow(color: .white.opacity(0.3), radius: 2)
                }
                .onAppear {
                    withAnimation(.easeInOut(duration: 2.5).repeatForever(autoreverses: true)) {
                        adventureIconPulse = 1
                    }
                }

                VStack(alignment: .leading, spacing: 2) {
                    Text("Choose Your Adventure")
                        .font(.system(size: 19, weight: .bold))
                        .foregroundStyle(.white)

                    Text("Start a game to boost your skills")
                        .font(.system(size: 13))
                        .foregroundStyle(.white.opacity(0.6))
                }

                Spacer()
            }
            .padding(.bottom, 4)

            // Game cards — full-width glassmorphic standalone cards
            VStack(spacing: 16) {
                DashboardGameCard(
                    title: "Flash Cards",
                    description: "Master new vocabulary with interactive flip cards and spaced repetition",
                    icon: "rectangle.on.rectangle.angled",
                    cta: "Master New Words",
                    colorScheme: .flashCards,
                    route: .flashcardsCategories,
                    navigationPath: $navigationPath
                )

                DashboardGameCard(
                    title: "Grammar Challenge",
                    description: "Test your knowledge with challenging questions and grammar rules",
                    icon: "text.book.closed.fill",
                    cta: "Test Your Skills",
                    colorScheme: .grammar,
                    route: .grammarCategories,
                    navigationPath: $navigationPath
                )

                DashboardGameCard(
                    title: "Word Constructor",
                    description: "Construct words letter by letter from scrambled clues and hints",
                    icon: "textformat.abc",
                    cta: "Craft & Discover",
                    colorScheme: .wordBuilder,
                    route: .wordBuilderCategories,
                    navigationPath: $navigationPath
                )
            }
        }
    }

    // MARK: - Recent Activity

    private var recentActivitySection: some View {
        let activities = Array(recentProgress.prefix(5))

        return Group {
            if !activities.isEmpty {
                VStack(spacing: 12) {
                    HStack {
                        Text("Recent Activity")
                            .font(.system(size: 19, weight: .bold))
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
                    .background(GlassCardBackground())
                }
            }
        }
    }

    private func activityRow(_ record: GameProgressRecord) -> some View {
        let type = record.gameTypeEnum ?? .flashCards
        let colors = GameCardColorScheme.forType(type)

        return HStack(spacing: 12) {
            // Game type icon
            ZStack {
                Circle()
                    .fill(
                        LinearGradient(
                            colors: [colors.primary.opacity(0.3), colors.secondary.opacity(0.2)],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
                    .frame(width: 40, height: 40)

                Image(systemName: gameTypeIcon(type))
                    .font(.system(size: 16))
                    .foregroundStyle(colors.primary)
            }

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

    // MARK: - Fog Overlay

    private var fogOverlay: some View {
        VStack {
            // Top fog overlay (radial glow from header)
            if isDark {
                ZStack {
                    RadialGradient(
                        colors: [
                            Color(hex: "#667eea").opacity(0.08 + 0.04 * Double(fogBreath)),
                            Color(hex: "#764ba2").opacity(0.04),
                            .clear
                        ],
                        center: .top,
                        startRadius: 0,
                        endRadius: 250
                    )
                    .frame(height: 120)
                    .allowsHitTesting(false)
                }
            }

            Spacer()
        }
        .onAppear {
            withAnimation(.easeInOut(duration: 4.0).repeatForever(autoreverses: true)) {
                fogBreath = 1.0
            }
        }
    }

    // MARK: - Helpers

    private func gameTypeIcon(_ type: GameType) -> String {
        switch type {
        case .flashCards: "rectangle.on.rectangle.angled"
        case .grammar: "text.book.closed.fill"
        case .wordBuilder: "textformat.abc"
        }
    }
}

// MARK: - Game Card Color Scheme

struct GameCardColorScheme {
    let primary: Color
    let secondary: Color
    let tertiary: Color
    let gradient: [Color]
    let tintColor: Color
    let topBarGradient: [Color]

    static let flashCards = GameCardColorScheme(
        primary: Color(hex: "#22d3ee"),     // cyan-400
        secondary: Color(hex: "#3b82f6"),   // blue-500
        tertiary: Color(hex: "#0d9488"),    // teal-600
        gradient: [Color(hex: "#3b82f6"), Color(hex: "#06b6d4"), Color(hex: "#14b8a6")],
        tintColor: Color(hex: "#22d3ee"),
        topBarGradient: [Color(hex: "#3b82f6"), Color(hex: "#06b6d4"), Color(hex: "#14b8a6")]
    )

    static let grammar = GameCardColorScheme(
        primary: Color(hex: "#d946ef"),     // fuchsia-500
        secondary: Color(hex: "#ec4899"),   // pink-500
        tertiary: Color(hex: "#f43f5e"),    // rose-500
        gradient: [Color(hex: "#a855f7"), Color(hex: "#ec4899"), Color(hex: "#f43f5e")],
        tintColor: Color(hex: "#ec4899"),
        topBarGradient: [Color(hex: "#a855f7"), Color(hex: "#ec4899"), Color(hex: "#f43f5e")]
    )

    static let wordBuilder = GameCardColorScheme(
        primary: Color(hex: "#fb923c"),     // orange-400
        secondary: Color(hex: "#f59e0b"),   // amber-500
        tertiary: Color(hex: "#ef4444"),    // red-500
        gradient: [Color(hex: "#f59e0b"), Color(hex: "#f97316"), Color(hex: "#ef4444")],
        tintColor: Color(hex: "#fb923c"),
        topBarGradient: [Color(hex: "#fbbf24"), Color(hex: "#f97316"), Color(hex: "#ef4444")]
    )

    static func forType(_ type: GameType) -> GameCardColorScheme {
        switch type {
        case .flashCards: .flashCards
        case .grammar: .grammar
        case .wordBuilder: .wordBuilder
        }
    }
}

// MARK: - Dashboard Game Card

/// Full-width standalone glassmorphic game card matching React's GameCard.jsx.
/// Features: top highlight bar, gradient icon with pulsing glow, rich description,
/// CTA with arrow, color tint overlay, entry animation, tap spring.
struct DashboardGameCard: View {
    let title: String
    let description: String
    let icon: String
    let cta: String
    let colorScheme: GameCardColorScheme
    let route: AppRoute
    @Binding var navigationPath: NavigationPath

    @Environment(\.self) private var env
    @State private var appeared = false
    @State private var isPressed = false
    @State private var iconPulse: CGFloat = 0

    var body: some View {
        Button {
            HapticsService.light()
            navigationPath.append(route)
        } label: {
            ZStack(alignment: .top) {
                // Top highlight bar — 5pt gradient at top
                topHighlightBar

                // Card content
                VStack(alignment: .leading, spacing: 0) {
                    // Icon + Title + Description
                    HStack(alignment: .top, spacing: 14) {
                        // Gradient icon container with pulsing glow
                        iconView

                        // Title + Description
                        VStack(alignment: .leading, spacing: 6) {
                            Text(title)
                                .font(.system(size: 19, weight: .bold))
                                .foregroundStyle(.white)

                            Text(description)
                                .font(.system(size: 14, weight: .medium))
                                .foregroundStyle(.white.opacity(0.7))
                                .lineLimit(3)
                                .fixedSize(horizontal: false, vertical: true)
                        }
                    }
                    .padding(.top, 24)
                    .padding(.horizontal, 20)

                    // CTA row
                    HStack {
                        Spacer()
                        HStack(spacing: 6) {
                            Text(cta)
                                .font(.system(size: 13, weight: .bold))
                            Image(systemName: "arrow.right")
                                .font(.system(size: 12, weight: .bold))
                        }
                        .foregroundStyle(colorScheme.primary)
                    }
                    .padding(.top, 14)
                    .padding(.trailing, 20)
                    .padding(.bottom, 20)
                }
            }
            .background(
                // Glass card with color tint
                GlassCardBackground(
                    cornerRadius: 22,
                    borderColor: colorScheme.primary,
                    borderOpacity: 0.15,
                    tintColor: colorScheme.tintColor
                )
            )
            .clipShape(RoundedRectangle(cornerRadius: 22))
        }
        .buttonStyle(GameCardButtonStyle())
        .opacity(appeared ? 1 : 0)
        .offset(y: appeared ? 0 : 20)
        .onAppear {
            withAnimation(.spring(response: 0.5, dampingFraction: 0.8).delay(0.1)) {
                appeared = true
            }
            withAnimation(.easeInOut(duration: 2.5).repeatForever(autoreverses: true)) {
                iconPulse = 1
            }
        }
    }

    private var topHighlightBar: some View {
        RoundedRectangle(cornerRadius: 3)
            .fill(
                LinearGradient(
                    colors: colorScheme.topBarGradient,
                    startPoint: .leading,
                    endPoint: .trailing
                )
            )
            .frame(height: 5)
            .padding(.horizontal, 24)
            .shadow(color: colorScheme.primary.opacity(0.5), radius: 8, y: 2)
            .blur(radius: 1.5)
            .opacity(0.85)
    }

    private var iconView: some View {
        ZStack {
            // Pulsing glow background orbs
            Circle()
                .fill(colorScheme.primary.opacity(0.15))
                .frame(width: 56, height: 56)
                .scaleEffect(1.0 + iconPulse * 0.15)
                .blur(radius: 8)

            Circle()
                .fill(colorScheme.secondary.opacity(0.1))
                .frame(width: 48, height: 48)
                .scaleEffect(1.0 + iconPulse * 0.1)
                .blur(radius: 6)
                .offset(x: 4, y: 4)

            // Icon container
            RoundedRectangle(cornerRadius: 14)
                .fill(
                    LinearGradient(
                        colors: colorScheme.gradient,
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )
                .frame(width: 48, height: 48)
                .overlay(
                    // Inner glow highlight
                    RoundedRectangle(cornerRadius: 14)
                        .fill(
                            LinearGradient(
                                colors: [.white.opacity(0.25), .clear],
                                startPoint: .top,
                                endPoint: .center
                            )
                        )
                )
                .overlay(
                    RoundedRectangle(cornerRadius: 14)
                        .strokeBorder(.white.opacity(0.2), lineWidth: 1)
                )
                .shadow(color: colorScheme.primary.opacity(0.4 + iconPulse * 0.2), radius: 12)

            // Icon symbol
            Image(systemName: icon)
                .font(.system(size: 22, weight: .medium))
                .foregroundStyle(.white)
                .shadow(color: .white.opacity(0.3), radius: 2)
        }
    }
}

/// Button style for game cards — scale + spring on press.
struct GameCardButtonStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .scaleEffect(configuration.isPressed ? 0.97 : 1.0)
            .animation(.spring(response: 0.25, dampingFraction: 0.6), value: configuration.isPressed)
    }
}

