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
    @Environment(TierManager.self) private var tierManager
    @Environment(PracticeTimeTracker.self) private var practiceTracker

    @Query private var profiles: [UserProfile]
    @Query private var languagePrefs: [LanguagePreference]
    @Query(sort: \GameProgressRecord.createdDate, order: .reverse)
    private var recentProgress: [GameProgressRecord]

    @Binding var hideTabBar: Bool
    @Binding var navigationPath: NavigationPath

    @State private var isHeaderCollapsed = false
    @State private var showLanguageSheet = false
    @State private var showMembershipSheet = false
    @State private var fogBreath: CGFloat = 0
    @State private var adventureIconPulse: CGFloat = 0
    @State private var tierIconAppeared = false
    @State private var showExpiredSheet = false

    private var profile: UserProfile? { profiles.first }
    private var user: AppUser { .mock }
    private var isDark: Bool { colorScheme == .dark }

    private var currentLanguagePair: String {
        guard let pref = languagePrefs.first else { return "English → Spanish" }
        let src = SupportedLanguage(rawValue: pref.sourceLanguage)?.displayName ?? pref.sourceLanguage.capitalized
        let tgt = SupportedLanguage(rawValue: pref.targetLanguage)?.displayName ?? pref.targetLanguage.capitalized
        return "\(src) → \(tgt)"
    }

    private var currentSourceCode: String {
        languagePrefs.first.flatMap { SupportedLanguage(rawValue: $0.sourceLanguage) }?.countryCode ?? "GB"
    }

    private var currentTargetCode: String {
        languagePrefs.first.flatMap { SupportedLanguage(rawValue: $0.targetLanguage) }?.countryCode ?? "ES"
    }

    var body: some View {
        ZStack(alignment: .bottom) {
            ScrollView {
                VStack(spacing: 20) {
                    // Language selector pill
                    languageSelector

                    // Trial countdown banner (active trial only)
                    TrialCountdownBanner()

                    // Header: Avatar + Greeting + Stats
                    dashboardHeader

                    // Soundscape now-playing widget (Pro+ with active soundscape)
                    SoundscapeNowPlaying()

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

                    // Premium feature carousel (Free users only)
                    PremiumFeatureCarousel()

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
        .sheet(isPresented: $showMembershipSheet) {
            NavigationStack { MembershipView(isSheet: true) }
        }
        .sheet(isPresented: $showExpiredSheet) {
            PracticeExpiredView(
                score: 0,
                correctAnswers: 0,
                totalAnswered: 0,
                onUpgradeTap: { showMembershipSheet = true },
                onDismiss: { showExpiredSheet = false }
            )
        }
    }

    /// Whether practice time has expired and games should show a disabled state.
    private var isPracticeExpired: Bool {
        practiceTracker.isLimited(for: tierManager.currentTier) && practiceTracker.isExpired
    }

    /// Time badge text for game cards: "30 min/day" for free, "Unlimited" for paid, nil for trial/royal.
    private var gameTimeBadge: String? {
        if practiceTracker.isLimited(for: tierManager.currentTier) {
            return "30 min/day"
        } else {
            return "Unlimited"
        }
    }

    /// Formatted reset time string when practice time has expired.
    private var practiceResetTime: String? {
        guard isPracticeExpired else { return nil }
        let total = practiceTracker.secondsUntilReset
        let hours = total / 3600
        let minutes = (total % 3600) / 60
        if hours > 0 {
            return "Resets in \(hours)h \(minutes)m"
        } else {
            return "Resets in \(minutes)m"
        }
    }

    // MARK: - Language Selector

    private var languageSelector: some View {
        Button {
            AudioService.shared.playLanguageHover()
            HapticsService.shared.buttonPress()
            showLanguageSheet = true
        } label: {
            HStack(spacing: 8) {
                ZStack {
                    CountryFlagView(countryCode: currentTargetCode, size: 14)
                        .offset(x: 4, y: 3)

                    CountryFlagView(countryCode: currentSourceCode, size: 14)
                        .shadow(color: .black.opacity(0.15), radius: 1, y: 1)
                }
                .frame(width: 26, height: 20)

                Text(currentLanguagePair)
                    .font(.subheadline.weight(.medium))
                    .foregroundStyle(isDark ? .white.opacity(0.9) : .primary)

                Image(systemName: "chevron.down")
                    .font(.system(size: 10, weight: .semibold))
                    .foregroundStyle(isDark ? .white.opacity(0.35) : .secondary)
            }
            .padding(.horizontal, 12)
            .padding(.vertical, 7)
            .background(
                Capsule()
                    .fill(.ultraThinMaterial)
                    .shadow(color: .black.opacity(isDark ? 0.15 : 0.08), radius: 6, y: 2)
            )
        }
        .buttonStyle(LumenPressStyle(weight: .medium))
        .frame(maxWidth: .infinity, alignment: .leading)
    }

    // MARK: - Dashboard Header

    private var dashboardHeader: some View {
        VStack(spacing: 16) {
            // Avatar + Greeting row
            HStack(spacing: 10) {
                // Gradient avatar
                ZStack {
                    RoundedRectangle(cornerRadius: 14)
                        .fill(
                            LinearGradient(
                                colors: [Color(hex: "#667eea"), Color(hex: "#764ba2")],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            )
                        )
                        .frame(width: 44, height: 44)
                        .shadow(color: Color(hex: "#764ba2").opacity(0.4), radius: 12)

                    Image(systemName: "person.fill")
                        .font(.system(size: 18))
                        .foregroundStyle(.white)
                }

                VStack(alignment: .leading, spacing: 2) {
                    HStack(spacing: 4) {
                        Text("Hello, \(user.firstName)!")
                            .font(.system(size: 18, weight: .bold))
                            .foregroundStyle(
                                LinearGradient(
                                    colors: tierManager.currentTier == .free
                                        ? [Color(hex: "#667eea"), Color(hex: "#764ba2"), Color(hex: "#d946ef")]
                                        : tierManager.tierGradientColors,
                                    startPoint: .leading,
                                    endPoint: .trailing
                                )
                            )
                            .lineLimit(1)
                            .minimumScaleFactor(0.8)

                        if tierManager.currentTier != .free {
                            Image(systemName: tierManager.tierIcon)
                                .font(.system(size: 14, weight: .semibold))
                                .foregroundStyle(
                                    LinearGradient(
                                        colors: tierManager.tierGradientColors,
                                        startPoint: .topLeading,
                                        endPoint: .bottomTrailing
                                    )
                                )
                                .scaleEffect(tierIconAppeared ? 1 : 0)
                                .opacity(tierIconAppeared ? 1 : 0)
                        }
                    }

                    if tierManager.currentTier == .trial,
                       let days = profile?.trialDaysRemaining, days > 0 {
                        Text("\(days) days left in your trial")
                            .font(.system(size: 11, weight: .medium))
                            .foregroundStyle(
                                LinearGradient(
                                    colors: tierManager.tierGradientColors,
                                    startPoint: .leading,
                                    endPoint: .trailing
                                )
                            )
                    } else {
                        Text("Ready for a new adventure?")
                            .font(.system(size: 13))
                            .foregroundStyle(isDark ? .white.opacity(0.7) : .caribbeanPlum)
                    }
                }

                Spacer()

                // Practice time ring
                PracticeTimeRing()

                if !isHeaderCollapsed {
                    Button {
                        withAnimation(.spring(response: 0.4)) {
                            isHeaderCollapsed.toggle()
                        }
                    } label: {
                        Image(systemName: "chevron.up")
                            .font(.caption.bold())
                            .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanMist)
                            .padding(8)
                            .background(Circle().fill(isDark ? .white.opacity(0.1) : Color.caribbeanMist.opacity(0.12)))
                    }
                    .buttonStyle(LumenPressStyle(weight: .soft))
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
        .padding(16)
        .background(GlassCardBackground())
        .onAppear {
            withAnimation(.spring(response: 0.5, dampingFraction: 0.6).delay(0.3)) {
                tierIconAppeared = true
            }
        }
        .onTapGesture {
            if isHeaderCollapsed {
                withAnimation(.spring(response: 0.4)) {
                    isHeaderCollapsed = false
                }
            }
        }
    }

    private var statsRow: some View {
        HStack(spacing: 8) {
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
                title: "Days",
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
        VStack(spacing: 6) {
            HStack(spacing: 4) {
                Image(systemName: icon)
                    .font(.system(size: 12))
                    .foregroundStyle(iconColor)
                    .shadow(color: iconColor.opacity(0.5), radius: 4)
                Text(value)
                    .font(.system(size: 16, weight: .bold))
                    .foregroundStyle(isDark ? .white : .caribbeanInk)
                    .lineLimit(1)
                    .minimumScaleFactor(0.7)
            }

            Text(title)
                .font(.system(size: 10))
                .foregroundStyle(isDark ? .white.opacity(0.6) : .caribbeanPlum)

            if let progress {
                AnimatedProgressBar(
                    progress: progress * 100,
                    height: 4,
                    gradient: gradient,
                    showGlow: false
                )
            } else {
                // Invisible spacer matching progress bar height for alignment
                Color.clear.frame(height: 4)
            }
        }
        .frame(maxWidth: .infinity)
        .padding(8)
        .background(
            RoundedRectangle(cornerRadius: 12)
                .fill(isDark ? .white.opacity(0.06) : .white.opacity(0.45))
                .overlay(
                    RoundedRectangle(cornerRadius: 12)
                        .strokeBorder(isDark ? .white.opacity(0.08) : Color.caribbeanMist.opacity(0.15), lineWidth: 1)
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
                .foregroundStyle(isDark ? .white.opacity(0.8) : .caribbeanInk)
        }
        .padding(.horizontal, 8)
        .padding(.vertical, 4)
        .background(Capsule().fill(isDark ? .white.opacity(0.08) : Color.caribbeanMist.opacity(0.1)))
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
                        .foregroundStyle(
                            LinearGradient(
                                colors: [Color(hex: "#8b5cf6"), Color(hex: "#d946ef")],
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )

                    Text("Start a game to boost your skills")
                        .font(.system(size: 13))
                        .foregroundStyle(isDark ? .white.opacity(0.6) : .caribbeanPlum)
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
                    timeBadge: gameTimeBadge,
                    isExpired: isPracticeExpired,
                    resetTime: practiceResetTime,
                    onExpiredTap: { showExpiredSheet = true },
                    navigationPath: $navigationPath
                )

                DashboardGameCard(
                    title: "Grammar Challenge",
                    description: "Test your knowledge with challenging questions and grammar rules",
                    icon: "text.book.closed.fill",
                    cta: "Test Your Skills",
                    colorScheme: .grammar,
                    route: .grammarCategories,
                    timeBadge: gameTimeBadge,
                    isExpired: isPracticeExpired,
                    resetTime: practiceResetTime,
                    onExpiredTap: { showExpiredSheet = true },
                    navigationPath: $navigationPath
                )

                DashboardGameCard(
                    title: "Word Constructor",
                    description: "Construct words letter by letter from scrambled clues and hints",
                    icon: "textformat.abc",
                    cta: "Craft & Discover",
                    colorScheme: .wordBuilder,
                    route: .wordBuilderCategories,
                    timeBadge: gameTimeBadge,
                    isExpired: isPracticeExpired,
                    resetTime: practiceResetTime,
                    onExpiredTap: { showExpiredSheet = true },
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
                            .font(.system(size: 16, weight: .bold))
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
                                .contentShape(Rectangle())
                                .dashboardPress(
                                    accentColor: GameCardColorScheme.forType(activity.gameTypeEnum ?? .flashCards).primary,
                                    scale: 0.965
                                ) {
                                    navigateToGame(for: activity)
                                }
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

        return HStack(spacing: 10) {
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
                    .frame(width: 34, height: 34)

                Image(systemName: gameTypeIcon(type))
                    .font(.system(size: 14))
                    .foregroundStyle(colors.primary)
            }

            VStack(alignment: .leading, spacing: 2) {
                Text("\(type.displayName) · \(record.categoryName)")
                    .font(.system(size: 13, weight: .semibold))
                    .foregroundStyle(isDark ? .white : .caribbeanInk)
                    .lineLimit(1)

                HStack(spacing: 4) {
                    Text("+\(record.score) XP")
                    Text("·")
                    Text("\(record.correctAnswers)/\(record.totalQuestions)")
                    Text("·")
                    Text(record.completedAt.timeAgoDisplay)
                }
                .font(.system(size: 11))
                .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanPlum)
                .lineLimit(1)
                .minimumScaleFactor(0.8)
            }

            Spacer(minLength: 0)

            Image(systemName: "chevron.right")
                .font(.system(size: 10))
                .foregroundStyle(isDark ? .white.opacity(0.3) : .caribbeanMist)
        }
        .padding(.vertical, 5)
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

            // Bottom fog overlay (animated breathing)
            ZStack {
                if isDark {
                    LinearGradient(
                        colors: [
                            Color(red: 6/255, green: 5/255, blue: 20/255).opacity(0),
                            Color(red: 6/255, green: 5/255, blue: 20/255).opacity(0.5 + 0.15 * Double(fogBreath)),
                            Color(red: 6/255, green: 5/255, blue: 20/255).opacity(0.9 + 0.05 * Double(fogBreath))
                        ],
                        startPoint: .top,
                        endPoint: .bottom
                    )
                    .frame(height: 90)
                }

                // Subtle fog wisps
                if isDark {
                    Ellipse()
                        .fill(Color(hex: "#667eea").opacity(0.04 + 0.02 * Double(fogBreath)))
                        .frame(width: 200, height: 40)
                        .blur(radius: 20)
                        .offset(x: -40, y: -20)
                }
            }
            .allowsHitTesting(false)
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

    private func navigateToGame(for record: GameProgressRecord) {
        let type = record.gameTypeEnum ?? .flashCards
        let categoryId = record.categoryKey
        switch type {
        case .flashCards:
            navigationPath.append(AppRoute.flashcardsGame(categoryId: categoryId))
        case .grammar:
            navigationPath.append(AppRoute.grammarGame(categoryId: categoryId))
        case .wordBuilder:
            navigationPath.append(AppRoute.wordBuilderGame(categoryId: categoryId))
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
        primary: Color(hex: "#3b82f6"),     // blue-500
        secondary: Color(hex: "#6366f1"),   // indigo-500
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
        primary: Color(hex: "#f97316"),     // orange-500
        secondary: Color(hex: "#ef4444"),   // red-500
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
    var timeBadge: String? = nil
    var isExpired: Bool = false
    var resetTime: String? = nil
    var onExpiredTap: (() -> Void)? = nil
    @Binding var navigationPath: NavigationPath

    @Environment(\.self) private var env
    @Environment(\.colorScheme) private var sysColorScheme
    @State private var appeared = false
    @State private var iconPulse: CGFloat = 0

    private var isDark: Bool { sysColorScheme == .dark }

    var body: some View {
        ZStack(alignment: .top) {
            // Top highlight bar — 5pt gradient at top
            topHighlightBar

            // Card content
            VStack(alignment: .leading, spacing: 0) {
                // Icon + Title + Description
                HStack(alignment: .top, spacing: 14) {
                    // Gradient icon container with pulsing glow
                    iconView

                    // Title + Description + Time Badge
                    VStack(alignment: .leading, spacing: 4) {
                        HStack(spacing: 6) {
                            Text(title)
                                .font(.system(size: 16, weight: .bold))
                                .foregroundStyle(
                                    LinearGradient(
                                        colors: [colorScheme.primary, colorScheme.secondary],
                                        startPoint: .leading,
                                        endPoint: .trailing
                                    )
                                )

                            if let badge = isExpired ? resetTime : timeBadge {
                                Text(badge)
                                    .font(.system(size: 10, weight: .bold))
                                    .foregroundStyle(isExpired ? .orange : colorScheme.primary)
                                    .padding(.horizontal, 7)
                                    .padding(.vertical, 3)
                                    .background(
                                        Capsule()
                                            .fill(
                                                isExpired
                                                    ? Color.orange.opacity(isDark ? 0.15 : 0.1)
                                                    : colorScheme.primary.opacity(isDark ? 0.15 : 0.1)
                                            )
                                    )
                            }
                        }

                        Text(description)
                            .font(.system(size: 12, weight: .medium))
                            .foregroundStyle(isDark ? .white.opacity(0.7) : .caribbeanPlum)
                            .lineLimit(2)
                            .fixedSize(horizontal: false, vertical: true)
                    }
                }
                .padding(.top, 20)
                .padding(.horizontal, 16)

                // CTA row — premium gradient capsule
                HStack {
                    Spacer()
                    HStack(spacing: 6) {
                        Text(cta)
                            .font(.system(size: 12, weight: .bold))
                        Image(systemName: "arrow.right")
                            .font(.system(size: 10, weight: .bold))
                    }
                    .foregroundStyle(.white)
                    .padding(.horizontal, 16)
                    .padding(.vertical, 9)
                    .background(
                        Capsule()
                            .fill(
                                LinearGradient(
                                    colors: colorScheme.gradient,
                                    startPoint: .leading,
                                    endPoint: .trailing
                                )
                            )
                            .overlay(
                                Capsule()
                                    .fill(
                                        LinearGradient(
                                            colors: [.white.opacity(0.25), .clear],
                                            startPoint: .top,
                                            endPoint: .bottom
                                        )
                                    )
                            )
                            .overlay(
                                Capsule()
                                    .strokeBorder(.white.opacity(0.25), lineWidth: 1)
                            )
                    )
                    .shadow(color: colorScheme.primary.opacity(0.35), radius: 10, y: 3)
                }
                .padding(.top, 10)
                .padding(.trailing, 16)
                .padding(.bottom, 16)
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
        .contentShape(RoundedRectangle(cornerRadius: 22))
        .dashboardPress(accentColor: colorScheme.primary, scale: 0.955) {
            if isExpired {
                onExpiredTap?()
            } else {
                navigationPath.append(route)
            }
        }
        .opacity(isExpired ? 0.5 : (appeared ? 1 : 0))
        .offset(y: appeared ? 0 : 20)
        .animation(.easeInOut(duration: 0.3), value: isExpired)
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
                .frame(width: 48, height: 48)
                .scaleEffect(1.0 + iconPulse * 0.15)
                .blur(radius: 8)

            Circle()
                .fill(colorScheme.secondary.opacity(0.1))
                .frame(width: 40, height: 40)
                .scaleEffect(1.0 + iconPulse * 0.1)
                .blur(radius: 6)
                .offset(x: 4, y: 4)

            // Icon container
            RoundedRectangle(cornerRadius: 12)
                .fill(
                    LinearGradient(
                        colors: colorScheme.gradient,
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )
                .frame(width: 40, height: 40)
                .overlay(
                    // Inner glow highlight
                    RoundedRectangle(cornerRadius: 12)
                        .fill(
                            LinearGradient(
                                colors: [.white.opacity(0.25), .clear],
                                startPoint: .top,
                                endPoint: .center
                            )
                        )
                )
                .overlay(
                    RoundedRectangle(cornerRadius: 12)
                        .strokeBorder(.white.opacity(0.2), lineWidth: 1)
                )
                .shadow(color: colorScheme.primary.opacity(0.4 + iconPulse * 0.2), radius: 12)

            // Icon symbol
            Image(systemName: icon)
                .font(.system(size: 18, weight: .medium))
                .foregroundStyle(.white)
                .shadow(color: .white.opacity(0.3), radius: 2)
        }
    }
}

// MARK: - Dashboard Press (uses shared LumenNavigationPressModifier)

extension View {
    /// Dashboard convenience alias for lumenNavigationPress.
    func dashboardPress(accentColor: Color = .white, scale: CGFloat = 0.955, action: @escaping () -> Void) -> some View {
        lumenNavigationPress(accentColor: accentColor, scale: scale, action: action)
    }
}

