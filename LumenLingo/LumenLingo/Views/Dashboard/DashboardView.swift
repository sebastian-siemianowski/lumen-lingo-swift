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

    @Environment(SessionEngine.self) private var sessionEngine

    @State private var isHeaderCollapsed = false
    @State private var showLanguageSheet = false
    @State private var showMembershipSheet = false
    @State private var tierIconAppeared = false
    @State private var showExpiredSheet = false
    @State private var showAllLanguages = false
    @State private var crossLanguageRecord: GameProgressRecord?
    @State private var statsAppeared = false
    @State private var scrollOffset: CGFloat = 0
    @AppStorage("dashboard_exploreMore_collapsed") private var exploreMoreCollapsed = true
    @State private var progressCountBeforeGame: Int?

    private var profile: UserProfile? { profiles.first }
    private var isDark: Bool { colorScheme == .dark }

    /// User's display name with graceful fallback for empty/nil profiles.
    private var displayName: String {
        let name = profile?.firstName.trimmingCharacters(in: .whitespacesAndNewlines) ?? ""
        return name
    }

    /// Whether we have a real user name to personalize greetings.
    private var hasUserName: Bool { !displayName.isEmpty }

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

    private var currentSourceRaw: String {
        languagePrefs.first?.sourceLanguage ?? "english"
    }

    private var currentTargetRaw: String {
        languagePrefs.first?.targetLanguage ?? "spanish"
    }

    // MARK: - Time of Day

    private enum TimeOfDay {
        case morning, afternoon, evening, night

        var greeting: String {
            switch self {
            case .morning: "Good morning"
            case .afternoon: "Good afternoon"
            case .evening: "Good evening"
            case .night: "Good evening"
            }
        }

        /// Subtle ambient radial accent behind the greeting — barely perceptible warmth
        var ambientColors: [Color] {
            switch self {
            case .morning:
                [Color(hex: "0EA5E9").opacity(0.06), Color(hex: "06B6D4").opacity(0.02), .clear]
            case .afternoon:
                [Color(hex: "FDE68A").opacity(0.05), Color(hex: "F59E0B").opacity(0.02), .clear]
            case .evening:
                [Color(hex: "FB923C").opacity(0.07), Color(hex: "FB7185").opacity(0.03), .clear]
            case .night:
                [Color(hex: "0EA5E9").opacity(0.04), Color(hex: "06B6D4").opacity(0.015), .clear]
            }
        }

        var ambientCenter: UnitPoint {
            switch self {
            case .morning: .top
            case .afternoon: .topTrailing
            case .evening: .bottomTrailing
            case .night: .center
            }
        }

        var ambientRadius: CGFloat {
            switch self {
            case .morning: 100
            case .afternoon: 100
            case .evening: 120
            case .night: 90
            }
        }
    }

    private var currentTimeOfDay: TimeOfDay {
        let hour = Calendar.current.component(.hour, from: Date())
        switch hour {
        case 5..<12: return .morning
        case 12..<17: return .afternoon
        case 17..<21: return .evening
        default: return .night
        }
    }

    var body: some View {
        ZStack(alignment: .bottom) {
            // Parallax ambient glow layer (light mode only)
            if !isDark {
                let reduceMotion = UIAccessibility.isReduceMotionEnabled
                RadialGradient(
                    colors: currentTimeOfDay.ambientColors,
                    center: .top,
                    startRadius: 0,
                    endRadius: 300
                )
                .offset(y: reduceMotion ? 0 : scrollOffset * 0.3)
                .ignoresSafeArea()
                .allowsHitTesting(false)
            }

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
                    dashboardDivider
                        .padding(.horizontal, 4)

                    // Smart Session Hero Card
                    todaySessionCardSection

                    // Divider
                    dashboardDivider
                        .padding(.horizontal, 4)

                    // Explore More (collapsible game cards)
                    exploreMoreSection

                    // Divider
                    dashboardDivider
                        .padding(.horizontal, 4)

                    // Recent Activity
                    recentActivitySection

                    // Premium feature carousel (Free users only)
                    PremiumFeatureCarousel()

                    Spacer(minLength: 120)
                }
                .padding(.horizontal, 16)
                .padding(.top, 8)
                .background(
                    GeometryReader { proxy in
                        Color.clear.preference(
                            key: ScrollOffsetPreferenceKey.self,
                            value: proxy.frame(in: .named("dashboardScroll")).minY
                        )
                    }
                )
            }
            .coordinateSpace(name: "dashboardScroll")
            .onPreferenceChange(ScrollOffsetPreferenceKey.self) { value in
                scrollOffset = value
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
            Task.detached(priority: .utility) { await AudioService.shared.playLanguageHover() }
            HapticsService.shared.buttonPress()
            showLanguageSheet = true
        } label: {
            HStack(spacing: 10) {
                // Stacked flag icons in a glowing circle
                ZStack {
                    // Ambient glow behind flags
                    Circle()
                        .fill(
                            RadialGradient(
                                colors: isDark
                                    ? [Color(hex: "#667eea").opacity(0.35), .clear]
                                    : [Color.caribbeanOcean.opacity(0.20), .clear],
                                center: .center,
                                startRadius: 0,
                                endRadius: 18
                            )
                        )
                        .frame(width: 36, height: 36)

                    // Glass circle behind flags
                    Circle()
                        .fill(isDark ? .white.opacity(0.08) : .white.opacity(0.65))
                        .frame(width: 30, height: 30)
                        .overlay(
                            Circle()
                                .strokeBorder(
                                    isDark
                                        ? .white.opacity(0.15)
                                        : Color.caribbeanOcean.opacity(0.20),
                                    lineWidth: 0.5
                                )
                        )

                    CountryFlagView(countryCode: currentTargetCode, size: 15)
                        .offset(x: 5, y: 4)
                        .opacity(0.85)

                    CountryFlagView(countryCode: currentSourceCode, size: 15)
                        .shadow(color: .black.opacity(0.2), radius: 2, y: 1)
                }
                .frame(width: 30, height: 30)

                // Language pair text
                Text(currentLanguagePair)
                    .font(.system(size: 14, weight: .semibold, design: .rounded))
                    .foregroundStyle(
                        isDark
                            ? .white.opacity(0.92)
                            : Color.caribbeanInk
                    )

                Spacer(minLength: 0)

                // Chevron in a small circle
                ZStack {
                    Circle()
                        .fill(isDark ? .white.opacity(0.06) : Color.caribbeanOcean.opacity(0.08))
                        .frame(width: 22, height: 22)

                    Image(systemName: "chevron.down")
                        .font(.system(size: 9, weight: .bold))
                        .foregroundStyle(
                            isDark
                                ? .white.opacity(0.45)
                                : Color.caribbeanOcean.opacity(0.65)
                        )
                }
            }
            .padding(.leading, 8)
            .padding(.trailing, 10)
            .padding(.vertical, 8)
            .background {
                ZStack {
                    // Base glass fill
                    Capsule()
                        .fill(isDark ? .ultraThinMaterial : .thinMaterial)

                    // Light mode: warm white wash for Caribbean sea-glass look
                    if !isDark {
                        Capsule()
                            .fill(Color.white.opacity(0.55))
                    }

                    // Subtle top-edge luminance band
                    Capsule()
                        .fill(
                            LinearGradient(
                                colors: [
                                    .white.opacity(isDark ? 0.10 : 0.50),
                                    .clear
                                ],
                                startPoint: .top,
                                endPoint: .center
                            )
                        )

                    // Inner highlight border
                    Capsule()
                        .strokeBorder(
                            LinearGradient(
                                colors: isDark
                                    ? [.white.opacity(0.18), .white.opacity(0.05)]
                                    : [.white.opacity(0.80), Color.caribbeanOcean.opacity(0.10)],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            ),
                            lineWidth: 0.5
                        )

                    // Outer accent border
                    Capsule()
                        .strokeBorder(
                            LinearGradient(
                                colors: isDark
                                    ? [Color(hex: "#667eea").opacity(0.20), Color(hex: "#764ba2").opacity(0.12)]
                                    : [Color.caribbeanOcean.opacity(0.15), Color.caribbeanLagoon.opacity(0.08)],
                                startPoint: .leading,
                                endPoint: .trailing
                            ),
                            lineWidth: 1
                        )
                        .padding(0.5)
                }
            }
            .shadow(color: isDark ? Color(hex: "#667eea").opacity(0.12) : Color.caribbeanOcean.opacity(0.10), radius: 8, y: 3)
            .shadow(color: .black.opacity(isDark ? 0.10 : 0.04), radius: 3, y: 1)
        }
        .buttonStyle(LumenPressStyle(weight: .medium))
        .frame(maxWidth: .infinity, alignment: .leading)
    }

    // MARK: - Dashboard Header

    private var dashboardHeader: some View {
        CollapsibleSection(
            style: .hero,
            colors: CollapsibleSectionTheme.xpStats.gradientColors,
            isCollapsed: $isHeaderCollapsed,
            header: {
                dashboardHeaderContent
            },
            content: {
                statsRow
                    .padding(.horizontal, 16)
                    .padding(.bottom, 16)
            }
        )
        .onAppear {
            withAnimation(.spring(response: 0.5, dampingFraction: 0.6).delay(0.3)) {
                tierIconAppeared = true
            }
        }
    }

    private var dashboardHeaderContent: some View {
        VStack(spacing: 16) {
            // Avatar + Greeting row
            HStack(spacing: 12) {
                // Gradient avatar — turquoise ocean in light, purple in dark
                ZStack {
                    RoundedRectangle(cornerRadius: 14)
                        .fill(
                            LinearGradient(
                                colors: isDark
                                    ? [Color(hex: "#667eea"), Color(hex: "#764ba2")]
                                    : [Color(hex: "#0EA5E9"), Color(hex: "#06B6D4")],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            )
                        )
                        .frame(width: 46, height: 46)
                        .shadow(color: isDark
                            ? Color(hex: "#764ba2").opacity(0.4)
                            : Color(hex: "#0EA5E9").opacity(0.25),
                            radius: 12)

                    Image(systemName: "person.fill")
                        .font(.system(size: 18))
                        .foregroundStyle(.white)
                }

                VStack(alignment: .leading, spacing: 4) {
                    // Time-of-day greeting — calm and warm
                    if !isDark {
                        Text(currentTimeOfDay.greeting)
                            .font(.system(size: 14, weight: .medium))
                            .foregroundStyle(Color.caribbeanPlum)
                            .tracking(0.3)
                    }

                    // User name — hero text with gradient
                    HStack(spacing: 4) {
                        Text(hasUserName ? (isDark ? "Hello, \(displayName)!" : displayName) : "Welcome back!")
                            .font(.system(size: isDark ? 18 : 22, weight: .bold))
                            .foregroundStyle(
                                isDark
                                    ? AnyShapeStyle(LinearGradient(
                                        colors: tierManager.currentTier == .free
                                            ? [Color(hex: "#667eea"), Color(hex: "#764ba2"), Color(hex: "#d946ef")]
                                            : tierManager.tierGradientColors,
                                        startPoint: .leading,
                                        endPoint: .trailing
                                    ))
                                    : AnyShapeStyle(LinearGradient.caribbeanGradientSunset)
                            )
                            .lineLimit(1)
                            .minimumScaleFactor(0.7)
                            .shadow(color: isDark ? .clear : Color.caribbeanPlum.opacity(0.08), radius: 4)

                        if tierManager.currentTier != .free {
                            Image(systemName: tierManager.tierIcon)
                                .font(.system(size: isDark ? 14 : 16, weight: .semibold))
                                .foregroundStyle(
                                    isDark
                                        ? AnyShapeStyle(LinearGradient(
                                            colors: tierManager.tierGradientColors,
                                            startPoint: .topLeading,
                                            endPoint: .bottomTrailing
                                        ))
                                        : AnyShapeStyle(LinearGradient.caribbeanGradientOcean)
                                )
                                .scaleEffect(tierIconAppeared ? 1 : 0)
                                .opacity(tierIconAppeared ? 1 : 0)
                        }
                    }

                    // Subtitle — trial info or motivational
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
                            .font(.system(size: 13, weight: isDark ? .regular : .regular))
                            .italic(!isDark)
                            .foregroundStyle(isDark ? .white.opacity(0.7) : Color.caribbeanPlum)
                    }
                }

                Spacer()

                // Practice time ring
                PracticeTimeRing()

                Button {
                    withAnimation(.spring(response: 0.35, dampingFraction: 0.8)) {
                        isHeaderCollapsed.toggle()
                    }
                    HapticsService.shared.toggleSwitch()
                } label: {
                    Image(systemName: "chevron.right")
                        .font(.system(size: 12, weight: .bold))
                        .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanMist)
                        .rotationEffect(.degrees(isHeaderCollapsed ? 0 : 90))
                        .animation(.spring(response: 0.35, dampingFraction: 0.8), value: isHeaderCollapsed)
                        .padding(8)
                        .background(Circle().fill(isDark ? .white.opacity(0.1) : Color.caribbeanMist.opacity(0.12)))
                }
                .buttonStyle(LumenPressStyle(weight: .soft))
                .accessibilityLabel(isHeaderCollapsed ? "Expand dashboard" : "Collapse dashboard")
            }

            // Compact stat badges when collapsed
            if isHeaderCollapsed {
                compactStatBadges
                    .transition(.opacity)
            }
        }
        .padding(16)
    }

    private var statsRow: some View {
        HStack(spacing: 8) {
            statCard(
                title: "Level",
                value: "\(profile?.currentLevel ?? 1)",
                icon: "star.fill",
                iconColor: .yellow,
                gradient: [Color(hex: "#f59e0b"), Color(hex: "#d97706")],
                progress: profile?.levelProgress,
                accentTint: Color(hex: "#FDE68A"),
                index: 0
            )

            statCard(
                title: hasUserName ? "\(displayName)'s XP" : "Total XP",
                value: "\(profile?.totalXP ?? 0)",
                icon: "bolt.fill",
                iconColor: .cyan,
                gradient: [Color(hex: "#06b6d4"), Color(hex: "#0891b2")],
                milestone: currentXPMilestone,
                accentTint: Color(hex: "#0EA5E9"),
                index: 1
            )

            statCard(
                title: "Days",
                value: "\(profile?.streakDays ?? 0)",
                icon: "trophy.fill",
                iconColor: .orange,
                gradient: [Color(hex: "#f97316"), Color(hex: "#ea580c")],
                accentTint: Color(hex: "#FB7185"),
                index: 2
            )
        }
        .onAppear {
            withAnimation(.spring(response: 0.5, dampingFraction: 0.75).delay(0.15)) {
                statsAppeared = true
            }
        }
    }

    // MARK: - XP Milestones

    private static let xpMilestones: [(threshold: Int, icon: String, label: String)] = [
        (100,   "star.fill", "Rising Star"),
        (500,   "flame.fill", "On Fire"),
        (1000,  "diamond.fill", "Legend"),
        (5000,  "crown.fill", "Master"),
        (10000, "trophy.fill", "Immortal"),
    ]

    private var currentXPMilestone: (icon: String, label: String)? {
        let xp = profile?.totalXP ?? 0
        return Self.xpMilestones
            .last { xp >= $0.threshold }
            .map { ($0.icon, $0.label) }
    }

    private func statCard(
        title: String,
        value: String,
        icon: String,
        iconColor: Color,
        gradient: [Color],
        progress: Double? = nil,
        milestone: (icon: String, label: String)? = nil,
        accentTint: Color = .clear,
        index: Int = 0
    ) -> some View {
        let staggerDelay = Double(index) * 0.08
        return VStack(spacing: 4) {
            Spacer(minLength: 0)

            // Icon — in light mode sits in a tinted circle
            if isDark {
                Image(systemName: icon)
                    .font(.system(size: 14))
                    .foregroundStyle(iconColor)
                    .shadow(color: iconColor.opacity(0.5), radius: 4)
            } else {
                ZStack {
                    Circle()
                        .fill(accentTint.opacity(0.12))
                        .frame(width: 28, height: 28)
                    Image(systemName: icon)
                        .font(.system(size: 13))
                        .foregroundStyle(
                            LinearGradient(
                                colors: gradient,
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            )
                        )
                }
            }

            Text(value)
                .font(.system(size: 18, weight: .bold))
                .foregroundStyle(isDark ? .white : Color.caribbeanInk)
                .lineLimit(1)
                .minimumScaleFactor(0.7)

            Text(title)
                .font(.system(size: 9))
                .foregroundStyle(isDark ? .white.opacity(0.6) : Color.caribbeanPlum)
                .lineLimit(1)
                .minimumScaleFactor(0.7)

            if let milestone {
                HStack(spacing: 2) {
                    Image(systemName: milestone.icon)
                        .font(.system(size: 7))
                    Text(milestone.label)
                        .font(.system(size: 8, weight: .semibold))
                }
                .foregroundStyle(
                    LinearGradient(
                        colors: gradient,
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .transition(.asymmetric(
                    insertion: .scale.combined(with: .opacity),
                    removal: .opacity
                ))
            }

            if let progress {
                AnimatedProgressBar(
                    progress: progress * 100,
                    height: 4,
                    gradient: gradient,
                    showGlow: false
                )
            }

            Spacer(minLength: 0)
        }
        .frame(maxWidth: .infinity, minHeight: 80)
        .padding(8)
        .background(
            RoundedRectangle(cornerRadius: 20)
                .fill(isDark ? .white.opacity(0.06) : .white.opacity(0.72))
                .overlay(
                    Group {
                        if !isDark {
                            // Subtle per-card accent — the "gem" tint
                            RoundedRectangle(cornerRadius: 20)
                                .fill(accentTint.opacity(0.05))
                        }
                    }
                )
                .overlay(
                    Group {
                        if !isDark {
                            // Top-edge light catch — premium "caught the sun" highlight
                            VStack(spacing: 0) {
                                Rectangle()
                                    .fill(
                                        LinearGradient(
                                            colors: [.white.opacity(0.5), .clear],
                                            startPoint: .top,
                                            endPoint: .bottom
                                        )
                                    )
                                    .frame(height: 3)
                                Spacer()
                            }
                            .clipShape(RoundedRectangle(cornerRadius: 20))
                        }
                    }
                )
                .overlay(
                    RoundedRectangle(cornerRadius: 20)
                        .strokeBorder(
                            isDark ? .white.opacity(0.08) : accentTint.opacity(0.18),
                            lineWidth: 0.5
                        )
                )
        )
        .shadow(
            color: isDark ? .clear : accentTint.opacity(0.08),
            radius: 8, y: 3
        )
        .scaleEffect(statsAppeared ? 1 : 0.92)
        .opacity(statsAppeared ? 1 : 0)
        .animation(
            .spring(response: 0.45, dampingFraction: 0.75).delay(staggerDelay),
            value: statsAppeared
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
                .foregroundStyle(isDark ? color : color)
            Text(value)
                .font(.caption.bold())
                .foregroundStyle(isDark ? .white.opacity(0.8) : Color.caribbeanInk)
        }
        .padding(.horizontal, 8)
        .padding(.vertical, 4)
        .background(
            Capsule()
                .fill(isDark ? .white.opacity(0.08) : .white.opacity(0.72))
                .overlay(
                    Capsule()
                        .strokeBorder(isDark ? .clear : color.opacity(0.15), lineWidth: 0.5)
                )
        )
        .shadow(color: isDark ? .clear : color.opacity(0.04), radius: 3, y: 1)
    }

    // MARK: - Dashboard Divider

    private var dashboardDivider: some View {
        Group {
            if isDark {
                GlassDivider(color: .white, opacity: 0.08)
            } else {
                // Frosted white divider with soft glow
                ZStack {
                    // Warm glow halo
                    Capsule()
                        .fill(
                            LinearGradient(
                                colors: [
                                    .clear,
                                    Color.white.opacity(0.5),
                                    Color.white.opacity(0.7),
                                    Color.white.opacity(0.5),
                                    .clear
                                ],
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                        .frame(height: 4)
                        .blur(radius: 3)

                    // Core white line
                    Capsule()
                        .fill(
                            LinearGradient(
                                colors: [
                                    .clear,
                                    Color.white.opacity(0.6),
                                    Color.white.opacity(0.9),
                                    Color.white.opacity(0.9),
                                    Color.white.opacity(0.6),
                                    .clear
                                ],
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                        .frame(height: 1)
                }
                .frame(height: 4)
            }
        }
    }

    // MARK: - Today Session Card Section

    private var todaySessionCardSection: some View {
        TodaySessionCard(
            recommendation: sessionEngine.currentRecommendation,
            roundsCompleted: sessionEngine.roundsCompletedToday,
            dailyGoal: sessionEngine.dailyGoal,
            dailyProgress: sessionEngine.dailyProgress,
            isDailyGoalComplete: sessionEngine.isDailyGoalComplete,
            isPracticeExpired: isPracticeExpired,
            resetTime: practiceResetTime,
            onStart: {
                guard let rec = sessionEngine.currentRecommendation else { return }
                progressCountBeforeGame = recentProgress.count
                let route: AppRoute = switch rec.gameType {
                case .flashCards: .flashcardsGame(categoryId: rec.categoryKey)
                case .grammar: .grammarGame(categoryId: rec.categoryKey)
                case .wordBuilder: .wordBuilderGame(categoryId: rec.categoryKey)
                }
                navigationPath.append(route)
            },
            onExpiredTap: { showExpiredSheet = true }
        )
        .task(id: "\(currentSourceRaw)_\(currentTargetRaw)_\(recentProgress.count)") {
            // Record a round only when coming back from a game that added a new session
            if let before = progressCountBeforeGame, recentProgress.count > before {
                sessionEngine.recordRoundCompleted()
                progressCountBeforeGame = nil
            }
            let progressService = ProgressService(modelContext: modelContext)
            await sessionEngine.refreshRecommendation(
                source: currentSourceRaw,
                target: currentTargetRaw,
                progressService: progressService,
                tierManager: tierManager
            )
        }
    }

    // MARK: - Explore More Section (Collapsible)

    private var exploreMoreSection: some View {
        VStack(spacing: 16) {
            // Section header with toggle
            Button {
                withAnimation(.spring(response: 0.35, dampingFraction: 0.85)) {
                    exploreMoreCollapsed.toggle()
                }
            } label: {
                HStack(spacing: 14) {
                    AnimatedSectionIcon(
                        isDark: isDark,
                        systemName: "square.grid.2x2.fill",
                        iconSize: 20,
                        containerSize: 48,
                        containerRadius: 14,
                        darkGradient: [Color(hex: "#6366f1"), Color(hex: "#8b5cf6"), Color(hex: "#a78bfa")],
                        lightGradient: nil,
                        glowColor1: Color(hex: "#8b5cf6"),
                        glowColor2: Color(hex: "#6366f1"),
                        glowSize1: 56,
                        glowSize2: 48,
                        shadowColor: isDark ? Color(hex: "#8b5cf6") : Color.caribbeanOcean,
                        shadowBaseOpacity: isDark ? 0.3 : 0.2
                    )

                    VStack(alignment: .leading, spacing: 3) {
                        Text("Explore More")
                            .font(.system(size: 19, weight: .bold))
                            .tracking(isDark ? 0 : 0.2)
                            .foregroundStyle(
                                isDark
                                    ? AnyShapeStyle(LinearGradient(
                                        colors: [Color(hex: "#6366f1"), Color(hex: "#a78bfa")],
                                        startPoint: .leading,
                                        endPoint: .trailing
                                    ))
                                    : AnyShapeStyle(Color.caribbeanInk)
                            )

                        Text("Pick a specific game to play")
                            .font(.system(size: 13))
                            .foregroundStyle(isDark ? .white.opacity(0.6) : Color.caribbeanPlum)
                    }

                    Spacer()

                    Image(systemName: "chevron.right")
                        .font(.system(size: 13, weight: .bold))
                        .foregroundStyle(isDark ? .white.opacity(0.3) : Color.caribbeanPlum.opacity(0.4))
                        .rotationEffect(.degrees(exploreMoreCollapsed ? 0 : 90))
                        .animation(.spring(response: 0.3, dampingFraction: 0.8), value: exploreMoreCollapsed)
                }
                .padding(.bottom, 4)
            }
            .buttonStyle(.plain)

            if !exploreMoreCollapsed {
                gameCardsContent
                    .transition(.opacity.combined(with: .move(edge: .top)))
            }
        }
    }

    /// The three game cards, extracted so they can be shown inside the collapsible section.
    private var gameCardsContent: some View {
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

    // MARK: - Games Section (Legacy — replaced by exploreMoreSection)

    private var gamesSection: some View {
        VStack(spacing: 16) {
            // Section header
            HStack(spacing: 14) {
                AnimatedSectionIcon(
                    isDark: isDark,
                    systemName: "wand.and.stars",
                    iconSize: 22,
                    containerSize: 48,
                    containerRadius: 14,
                    darkGradient: [Color(hex: "#8b5cf6"), Color(hex: "#d946ef"), Color(hex: "#7c3aed")],
                    lightGradient: nil,
                    glowColor1: Color(hex: "#d946ef"),
                    glowColor2: Color(hex: "#8b5cf6"),
                    glowSize1: 56,
                    glowSize2: 48,
                    shadowColor: isDark ? Color(hex: "#d946ef") : Color.caribbeanOcean,
                    shadowBaseOpacity: isDark ? 0.4 : 0.25
                )

                VStack(alignment: .leading, spacing: 3) {
                    Text("Choose Your Adventure")
                        .font(.system(size: 19, weight: .bold))
                        .tracking(isDark ? 0 : 0.2)
                        .foregroundStyle(
                            isDark
                                ? AnyShapeStyle(LinearGradient(
                                    colors: [Color(hex: "#8b5cf6"), Color(hex: "#d946ef")],
                                    startPoint: .leading,
                                    endPoint: .trailing
                                ))
                                : AnyShapeStyle(Color.caribbeanInk)
                        )

                    Text("Start a game to boost your skills")
                        .font(.system(size: 13))
                        .foregroundStyle(isDark ? .white.opacity(0.6) : Color.caribbeanPlum)
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
        let filtered: [GameProgressRecord] = if showAllLanguages {
            Array(recentProgress.prefix(10))
        } else {
            Array(recentProgress.filter {
                $0.sourceLanguage == currentSourceRaw && $0.targetLanguage == currentTargetRaw
            }.prefix(5))
        }

        return VStack(spacing: 12) {
            HStack(spacing: 14) {
                AnimatedSectionIcon(
                    isDark: isDark,
                    systemName: "clock.arrow.trianglehead.counterclockwise.rotate.90",
                    iconSize: 18,
                    containerSize: 40,
                    containerRadius: 12,
                    darkGradient: [Color(hex: "#667eea"), Color(hex: "#764ba2"), Color(hex: "#5b4fcf")],
                    lightGradient: nil,
                    glowColor1: Color(hex: "#667eea"),
                    glowColor2: Color(hex: "#764ba2"),
                    glowSize1: 48,
                    glowSize2: 40,
                    shadowColor: isDark ? Color(hex: "#667eea") : Color.caribbeanOcean,
                    shadowBaseOpacity: isDark ? 0.35 : 0.2
                )

                VStack(alignment: .leading, spacing: 3) {
                    Text("Recent Activity")
                        .font(.system(size: 16, weight: .bold))
                        .tracking(isDark ? 0 : 0.2)
                        .foregroundStyle(
                            isDark
                                ? AnyShapeStyle(LinearGradient(
                                    colors: [Color(hex: "#667eea"), Color(hex: "#764ba2")],
                                    startPoint: .leading,
                                    endPoint: .trailing
                                ))
                                : AnyShapeStyle(Color.caribbeanInk)
                        )

                    Text("Your learning journey")
                        .font(.system(size: 13))
                        .foregroundStyle(isDark ? .white.opacity(0.6) : Color.caribbeanPlum)
                }

                Spacer()
            }

            Picker("", selection: $showAllLanguages) {
                Text("This Language").tag(false)
                Text("All Languages").tag(true)
            }
            .pickerStyle(.segmented)

            if filtered.isEmpty {
                recentActivityEmptyState
            } else {
                VStack(spacing: 8) {
                    ForEach(filtered) { activity in
                        activityRow(activity, showBadge: showAllLanguages)
                            .contentShape(Rectangle())
                            .dashboardPress(
                                accentColor: GameCardColorScheme.forType(activity.gameTypeEnum ?? .flashCards).primary,
                                scale: 0.965
                            ) {
                                if showAllLanguages && isCrossLanguage(activity) {
                                    crossLanguageRecord = activity
                                } else {
                                    navigateToGame(for: activity)
                                }
                            }
                    }
                }
                .padding(16)
                .background(GlassCardBackground())
            }
        }
        .confirmationDialog(
            crossLanguageDialogTitle,
            isPresented: .init(
                get: { crossLanguageRecord != nil },
                set: { if !$0 { crossLanguageRecord = nil } }
            ),
            titleVisibility: .visible
        ) {
            if let record = crossLanguageRecord {
                Button("Switch & Play") {
                    switchLanguageAndNavigate(record)
                }
                Button("Cancel", role: .cancel) {
                    crossLanguageRecord = nil
                }
            }
        }
    }

    private var crossLanguageDialogTitle: String {
        guard let record = crossLanguageRecord,
              let src = SupportedLanguage(rawValue: record.sourceLanguage),
              let tgt = SupportedLanguage(rawValue: record.targetLanguage) else {
            return "Switch language pair?"
        }
        return "This game was in \(src.englishName) → \(tgt.englishName). Switch to it and play?"
    }

    private func isCrossLanguage(_ record: GameProgressRecord) -> Bool {
        record.sourceLanguage != currentSourceRaw || record.targetLanguage != currentTargetRaw
    }

    private func switchLanguageAndNavigate(_ record: GameProgressRecord) {
        if let pref = languagePrefs.first {
            pref.sourceLanguage = record.sourceLanguage
            pref.targetLanguage = record.targetLanguage
        }
        crossLanguageRecord = nil
        navigateToGame(for: record)
    }

    private var recentActivityEmptyState: some View {
        VStack(spacing: 16) {
            if isDark {
                // Dark mode — original flag pair
                HStack(spacing: 6) {
                    CountryFlagView(countryCode: currentSourceCode, size: 20)
                    Image(systemName: "arrow.right")
                        .font(.system(size: 11, weight: .medium))
                        .foregroundStyle(.white.opacity(0.4))
                    CountryFlagView(countryCode: currentTargetCode, size: 20)
                }
                .padding(.top, 4)
            } else {
                // Light mode — sparkles icon with warm gradient and gentle pulse
                AnimatedEmptyStateSparkle()
            }

            VStack(spacing: 6) {
                Text(isDark ? "No activity yet" : "Your Journey Begins Here")
                    .font(.system(size: isDark ? 14 : 17, weight: isDark ? .semibold : .bold))
                    .foregroundStyle(isDark ? .white.opacity(0.7) : Color.caribbeanInk)

                Text(isDark
                    ? "Start a game in \(currentLanguagePair) to see your progress here!"
                    : "Start a practice session and watch your progress unfold")
                    .font(.system(size: isDark ? 12 : 13))
                    .foregroundStyle(isDark ? .white.opacity(0.45) : Color.caribbeanPlum)
                    .multilineTextAlignment(.center)
                    .lineLimit(2)
            }
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 24)
        .padding(.horizontal, 16)
        .background(GlassCardBackground())
    }

    private func activityRow(_ record: GameProgressRecord, showBadge: Bool = false) -> some View {
        let type = record.gameTypeEnum ?? .flashCards
        let colors = GameCardColorScheme.forType(type)

        return HStack(spacing: 10) {
            // Game type icon — light mode gets a warm tinted circle
            ZStack {
                Circle()
                    .fill(
                        isDark
                            ? LinearGradient(
                                colors: [colors.primary.opacity(0.3), colors.secondary.opacity(0.2)],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            )
                            : LinearGradient(
                                colors: [colors.caribbeanTint.first?.opacity(0.12) ?? colors.primary.opacity(0.12),
                                         colors.caribbeanTint.last?.opacity(0.08) ?? colors.secondary.opacity(0.08)],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            )
                    )
                    .frame(width: 34, height: 34)

                Image(systemName: gameTypeIcon(type))
                    .font(.system(size: 14))
                    .foregroundStyle(isDark ? colors.primary : colors.caribbeanTint.first ?? colors.primary)
            }

            VStack(alignment: .leading, spacing: 2) {
                HStack(spacing: 4) {
                    Text("\(type.displayName) · \(record.categoryName)")
                        .font(.system(size: 13, weight: .semibold))
                        .foregroundStyle(isDark ? .white : Color.caribbeanInk)
                        .lineLimit(1)

                    if showBadge {
                        LanguagePairBadge(
                            sourceLanguage: record.sourceLanguage,
                            targetLanguage: record.targetLanguage
                        )
                    }
                }

                HStack(spacing: 4) {
                    Text("+\(record.score) XP")
                    Text("·")
                    Text("\(record.correctAnswers)/\(record.totalQuestions)")
                    Text("·")
                    Text(record.completedAt.timeAgoDisplay)
                }
                .font(.system(size: 11))
                .foregroundStyle(isDark ? .white.opacity(0.5) : Color.caribbeanPlum)
                .lineLimit(1)
                .minimumScaleFactor(0.8)
            }

            Spacer(minLength: 0)

            Image(systemName: "chevron.right")
                .font(.system(size: 10))
                .foregroundStyle(isDark ? .white.opacity(0.3) : Color.caribbeanMist)
        }
        .padding(.vertical, 5)
    }

    // MARK: - Fog Overlay (isolated to prevent parent re-renders)

    private var fogOverlay: some View {
        AnimatedFogOverlay(isDark: isDark)
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
    /// Caribbean island-themed tint colors for light mode
    let caribbeanTint: [Color]

    static let flashCards = GameCardColorScheme(
        primary: Color(hex: "#3b82f6"),
        secondary: Color(hex: "#6366f1"),
        tertiary: Color(hex: "#0d9488"),
        gradient: [Color(hex: "#3b82f6"), Color(hex: "#06b6d4"), Color(hex: "#14b8a6")],
        tintColor: Color(hex: "#22d3ee"),
        topBarGradient: [Color(hex: "#3b82f6"), Color(hex: "#06b6d4"), Color(hex: "#14b8a6")],
        caribbeanTint: [Color(hex: "#0EA5E9"), Color(hex: "#06B6D4")]
    )

    static let grammar = GameCardColorScheme(
        primary: Color(hex: "#d946ef"),
        secondary: Color(hex: "#ec4899"),
        tertiary: Color(hex: "#f43f5e"),
        gradient: [Color(hex: "#a855f7"), Color(hex: "#ec4899"), Color(hex: "#f43f5e")],
        tintColor: Color(hex: "#ec4899"),
        topBarGradient: [Color(hex: "#a855f7"), Color(hex: "#ec4899"), Color(hex: "#f43f5e")],
        caribbeanTint: [Color(hex: "#34D399"), Color(hex: "#10B981")]
    )

    static let wordBuilder = GameCardColorScheme(
        primary: Color(hex: "#f97316"),
        secondary: Color(hex: "#ef4444"),
        tertiary: Color(hex: "#ef4444"),
        gradient: [Color(hex: "#f59e0b"), Color(hex: "#f97316"), Color(hex: "#ef4444")],
        tintColor: Color(hex: "#fb923c"),
        topBarGradient: [Color(hex: "#fbbf24"), Color(hex: "#f97316"), Color(hex: "#ef4444")],
        caribbeanTint: [Color(hex: "#FB7185"), Color(hex: "#FDE68A")]
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

    private var isDark: Bool { sysColorScheme == .dark }

    var body: some View {
        ZStack(alignment: .top) {
            // Top highlight bar
            topHighlightBar

            // Card content
            VStack(alignment: .leading, spacing: 0) {
                // Icon + Title + Description
                HStack(alignment: .top, spacing: 14) {
                    AnimatedGameCardIcon(isDark: isDark, colorScheme: colorScheme, icon: icon)

                    VStack(alignment: .leading, spacing: 4) {
                        HStack(spacing: 6) {
                            Text(title)
                                .font(.system(size: 16, weight: .bold))
                                .foregroundStyle(
                                    isDark
                                        ? AnyShapeStyle(LinearGradient(
                                            colors: [colorScheme.primary, colorScheme.secondary],
                                            startPoint: .leading,
                                            endPoint: .trailing
                                        ))
                                        : AnyShapeStyle(Color.caribbeanInk)
                                )

                            if let badge = isExpired ? resetTime : timeBadge {
                                Text(badge)
                                    .font(.system(size: 10, weight: .bold))
                                    .foregroundStyle(isExpired ? .orange : (isDark ? colorScheme.primary : colorScheme.caribbeanTint.first ?? colorScheme.primary))
                                    .padding(.horizontal, 7)
                                    .padding(.vertical, 3)
                                    .background(
                                        Capsule()
                                            .fill(
                                                isExpired
                                                    ? Color.orange.opacity(isDark ? 0.15 : 0.1)
                                                    : (isDark ? colorScheme.primary : colorScheme.caribbeanTint.first ?? colorScheme.primary).opacity(isDark ? 0.15 : 0.08)
                                            )
                                    )
                            }
                        }

                        Text(description)
                            .font(.system(size: 12, weight: .medium))
                            .foregroundStyle(isDark ? .white.opacity(0.7) : Color.caribbeanPlum)
                            .lineLimit(2)
                            .fixedSize(horizontal: false, vertical: true)
                    }
                }
                .padding(.top, 20)
                .padding(.horizontal, 16)

                // CTA row
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
                                isDark
                                    ? LinearGradient(
                                        colors: colorScheme.gradient,
                                        startPoint: .leading,
                                        endPoint: .trailing
                                    )
                                    : LinearGradient(
                                        colors: colorScheme.caribbeanTint,
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
                    .shadow(color: isDark
                        ? colorScheme.primary.opacity(0.35)
                        : (colorScheme.caribbeanTint.first ?? colorScheme.primary).opacity(0.25),
                        radius: 10, y: 3)
                }
                .padding(.top, 10)
                .padding(.trailing, 16)
                .padding(.bottom, 16)
            }
        }
        .background(
            isDark
                ? AnyView(GlassCardBackground(
                    cornerRadius: 22,
                    borderColor: colorScheme.primary,
                    borderOpacity: 0.15,
                    tintColor: colorScheme.tintColor
                ))
                : AnyView(GlassCardBackground(
                    cornerRadius: 22,
                    borderColor: colorScheme.caribbeanTint.first ?? colorScheme.primary,
                    borderOpacity: 0.12,
                    tintColor: colorScheme.caribbeanTint.first ?? colorScheme.tintColor
                ))
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
        }
    }

    private var topHighlightBar: some View {
        RoundedRectangle(cornerRadius: 3)
            .fill(
                LinearGradient(
                    colors: isDark ? colorScheme.topBarGradient : colorScheme.caribbeanTint,
                    startPoint: .leading,
                    endPoint: .trailing
                )
            )
            .frame(height: isDark ? 5 : 3)
            .padding(.horizontal, 24)
            .shadow(color: isDark
                ? colorScheme.primary.opacity(0.5)
                : (colorScheme.caribbeanTint.first ?? colorScheme.primary).opacity(0.2),
                radius: isDark ? 8 : 4, y: 2)
            .blur(radius: isDark ? 1.5 : 0.5)
            .opacity(isDark ? 0.85 : 0.7)
    }

}

// MARK: - Scroll Offset Tracking

private struct ScrollOffsetPreferenceKey: PreferenceKey {
    static var defaultValue: CGFloat = 0
    static func reduce(value: inout CGFloat, nextValue: () -> CGFloat) {
        value = nextValue()
    }
}

// MARK: - Dashboard Press (uses shared LumenNavigationPressModifier)

extension View {
    /// Dashboard convenience alias for lumenNavigationPress.
    func dashboardPress(accentColor: Color = .white, scale: CGFloat = 0.955, action: @escaping () -> Void) -> some View {
        lumenNavigationPress(accentColor: accentColor, scale: scale, action: action)
    }
}

// MARK: - Isolated Animation Subviews (prevent parent re-renders)

/// Fog overlay with its own breathing animation state — prevents
/// the forever-looping fogBreath from dirtying the entire DashboardView body.
private struct AnimatedFogOverlay: View {
    let isDark: Bool
    @State private var fogBreath: CGFloat = 0

    var body: some View {
        VStack {
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
            guard isDark else { return }
            withAnimation(.easeInOut(duration: 4.0).repeatForever(autoreverses: true)) {
                fogBreath = 1.0
            }
        }
    }
}

/// Pulsing section header icon — owns its own pulse @State
/// so the forever animation only re-renders this tiny leaf view.
private struct AnimatedSectionIcon: View {
    let isDark: Bool
    let systemName: String
    var iconSize: CGFloat = 18
    var containerSize: CGFloat = 40
    var containerRadius: CGFloat = 12
    var darkGradient: [Color]
    var lightGradient: [Color]?
    var glowColor1: Color
    var glowColor2: Color
    var glowSize1: CGFloat = 48
    var glowSize2: CGFloat = 40
    var shadowColor: Color
    var shadowBaseOpacity: Double = 0.35

    @State private var pulse: CGFloat = 0

    var body: some View {
        ZStack {
            if isDark {
                Circle()
                    .fill(glowColor1.opacity(0.15))
                    .frame(width: glowSize1, height: glowSize1)
                    .scaleEffect(1.0 + pulse * 0.15)
                    .blur(radius: 8)

                Circle()
                    .fill(glowColor2.opacity(0.1))
                    .frame(width: glowSize2, height: glowSize2)
                    .scaleEffect(1.0 + pulse * 0.1)
                    .blur(radius: 6)
                    .offset(x: 4, y: 4)
            }

            RoundedRectangle(cornerRadius: containerRadius)
                .fill(
                    isDark
                        ? LinearGradient(colors: darkGradient, startPoint: .topLeading, endPoint: .bottomTrailing)
                        : (lightGradient.map { LinearGradient(colors: $0, startPoint: .topLeading, endPoint: .bottomTrailing) } ?? LinearGradient.caribbeanGradientOcean)
                )
                .frame(width: containerSize, height: containerSize)
                .overlay(
                    RoundedRectangle(cornerRadius: containerRadius)
                        .fill(LinearGradient(colors: [.white.opacity(0.25), .clear], startPoint: .top, endPoint: .center))
                )
                .overlay(
                    RoundedRectangle(cornerRadius: containerRadius)
                        .strokeBorder(.white.opacity(0.2), lineWidth: 1)
                )
                .shadow(
                    color: shadowColor.opacity(isDark ? shadowBaseOpacity + pulse * 0.2 : shadowBaseOpacity),
                    radius: isDark ? 12 : 10
                )

            Image(systemName: systemName)
                .font(.system(size: iconSize, weight: .medium))
                .foregroundStyle(.white)
                .shadow(color: .white.opacity(0.3), radius: 2)
        }
        .onAppear {
            guard isDark else { return }
            withAnimation(.easeInOut(duration: 2.5).repeatForever(autoreverses: true)) {
                pulse = 1
            }
        }
    }
}

/// Sparkle icon with gentle pulse for the empty-state — isolated animation.
private struct AnimatedEmptyStateSparkle: View {
    @State private var pulse: CGFloat = 0

    var body: some View {
        Image(systemName: "sparkles")
            .font(.system(size: 42, weight: .thin))
            .foregroundStyle(LinearGradient.caribbeanGradientSunset)
            .scaleEffect(1.0 + pulse * 0.06)
            .opacity(0.8 + pulse * 0.2)
            .padding(.top, 8)
            .onAppear {
                withAnimation(.easeInOut(duration: 3.0).repeatForever(autoreverses: true)) {
                    pulse = 1.0
                }
            }
    }
}

/// Game card icon with pulsing glow — isolated so the forever animation
/// doesn't cause the entire DashboardGameCard body to re-evaluate.
private struct AnimatedGameCardIcon: View {
    let isDark: Bool
    let colorScheme: GameCardColorScheme
    let icon: String

    @State private var iconPulse: CGFloat = 0

    var body: some View {
        ZStack {
            if isDark {
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
            }

            RoundedRectangle(cornerRadius: 12)
                .fill(
                    LinearGradient(
                        colors: isDark ? colorScheme.gradient : colorScheme.caribbeanTint,
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )
                .frame(width: 40, height: 40)
                .overlay(
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
                .shadow(color: isDark
                    ? colorScheme.primary.opacity(0.4 + iconPulse * 0.2)
                    : (colorScheme.caribbeanTint.first ?? colorScheme.primary).opacity(0.2),
                    radius: isDark ? 12 : 8)

            Image(systemName: icon)
                .font(.system(size: 18, weight: .medium))
                .foregroundStyle(.white)
                .shadow(color: .white.opacity(0.3), radius: 2)
        }
        .onAppear {
            guard isDark else { return }
            withAnimation(.easeInOut(duration: 2.5).repeatForever(autoreverses: true)) {
                iconPulse = 1
            }
        }
    }
}

