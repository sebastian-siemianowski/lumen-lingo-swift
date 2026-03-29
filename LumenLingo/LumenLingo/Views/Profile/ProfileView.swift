import SwiftUI
import SwiftData

// MARK: - Profile View (React-Parity Overhaul)

/// Full React-parity profile screen with 4 top-level tabs
/// (Appearance, Sound, Sync, Sign Out) and 4 appearance sub-tabs
/// (Dark/Light, Breathing Orbs, Quantum Flow, Nebula Drift).
struct ProfileView: View {
    @Environment(\.modelContext) private var modelContext
    @Environment(\.colorScheme) private var colorScheme
    @Environment(ThemeManager.self) private var themeManager
    @Environment(TierManager.self) private var tierManager
    @Environment(\.localization) private var localization
    @Environment(\.authService) private var authService

    private var L: AppStrings { localization.strings }

    @Query private var profiles: [UserProfile]
    @Query private var languagePrefs: [LanguagePreference]
    @Query(sort: \GameProgressRecord.createdDate, order: .reverse)
    private var allProgress: [GameProgressRecord]

    private var profile: UserProfile? { profiles.first }

    /// Display name from real profile, with graceful fallback.
    private var displayName: String {
        profile?.firstName.trimmingCharacters(in: .whitespacesAndNewlines) ?? ""
    }

    private var isDark: Bool { colorScheme == .dark }

    // Entry animation state
    @State private var headerAppeared = false
    @PersistedState("profile_myPlan_collapsed") private var isMyPlanCollapsed = false

    // Cached calendar data — avoids recomputing Set/streak on every cell
    @State private var cachedCalendarDays: [CalendarDay] = []
    @State private var cachedStreakStart: Date = .distantPast
    @State private var cachedActiveDatesSet: Set<Date> = []

    var body: some View {
        ScrollView(showsIndicators: false) {
            VStack(spacing: 0) {
                // Profile header (avatar, name, stats)
                profileHeader
                    .padding(.horizontal, 16)
                    .padding(.top, 12)
                    .opacity(headerAppeared ? 1 : 0)
                    .offset(y: headerAppeared ? 0 : 20)

                // Activity calendar — separate panel
                GlassPanelWrapper {
                    streakCalendar
                }
                    .padding(.horizontal, 16)
                    .padding(.top, 14)
                    .opacity(headerAppeared ? 1 : 0)
                    .offset(y: headerAppeared ? 0 : 15)

                // My Plan card — collapsible
                CollapsibleSection(
                    title: "My Plan",
                    theme: .myPlan(tierIcon: tierManager.tierIcon, tierGradientColors: tierManager.tierGradientColors),
                    isCollapsed: $isMyPlanCollapsed,
                    badge: .text(tierManager.tierDisplayName)
                ) {
                    MyPlanCard()
                }
                    .padding(.horizontal, 16)
                    .padding(.top, 14)
                    .opacity(headerAppeared ? 1 : 0)
                    .offset(y: headerAppeared ? 0 : 15)

                Spacer(minLength: 100)
            }
        }
        .cosmicBackground()
        .navigationBarTitleDisplayMode(.inline)
        .toolbarColorScheme(isDark ? .dark : .light, for: .navigationBar)
        .onAppear {
            rebuildCalendarCache()
            withAnimation(.easeOut(duration: 0.6).delay(0.15)) {
                headerAppeared = true
            }
        }
    }

    // MARK: - Profile Header

    /// Rotation angle for the ambient ring animation (light mode)
    @State private var ambientRingRotation: Double = 0

    private var profileHeader: some View {
        GlassPanelWrapper {
            VStack(spacing: 16) {
                // Avatar with glow rings
                ZStack {
                    if isDark {
                        // Dark mode: original ambient glow
                        Circle()
                            .fill(
                                RadialGradient(
                                    colors: [
                                        Color(hex: "#667eea").opacity(0.25),
                                        Color(hex: "#764ba2").opacity(0.10),
                                        .clear
                                    ],
                                    center: .center,
                                    startRadius: 28,
                                    endRadius: 65
                                )
                            )
                            .frame(width: 120, height: 120)
                    } else {
                        // Light mode: turquoise ocean glow
                        Circle()
                            .fill(
                                RadialGradient(
                                    colors: [
                                        Color(hex: "#0EA5E9").opacity(0.12),
                                        Color(hex: "#06B6D4").opacity(0.06),
                                        .clear
                                    ],
                                    center: .center,
                                    startRadius: 28,
                                    endRadius: 65
                                )
                            )
                            .frame(width: 120, height: 120)
                    }

                    // Rotating ambient ring (light mode only)
                    if !isDark {
                        Circle()
                            .strokeBorder(
                                LinearGradient.caribbeanGradientOcean,
                                lineWidth: 1.5
                            )
                            .opacity(0.30)
                            .frame(width: 96, height: 96)
                            .rotationEffect(.degrees(ambientRingRotation))
                            .onAppear {
                                withAnimation(.linear(duration: 30).repeatForever(autoreverses: false)) {
                                    ambientRingRotation = 360
                                }
                            }
                    }

                    if isDark {
                        // Dark mode: original gradient border ring
                        Circle()
                            .strokeBorder(
                                LinearGradient(
                                    colors: [
                                        Color(hex: "#667eea").opacity(0.6),
                                        Color(hex: "#764ba2").opacity(0.3),
                                        Color(hex: "#667eea").opacity(0.15)
                                    ],
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing
                                ),
                                lineWidth: 2.5
                            )
                            .frame(width: 86, height: 86)
                    } else {
                        // Light mode: pearl-white border ring
                        Circle()
                            .strokeBorder(
                                Color.white.opacity(0.60),
                                lineWidth: 2
                            )
                            .frame(width: 86, height: 86)
                    }

                    // Main avatar circle
                    Circle()
                        .fill(
                            isDark
                                ? AnyShapeStyle(LinearGradient(
                                    colors: [Color(hex: "#667eea"), Color(hex: "#764ba2")],
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing
                                ))
                                : AnyShapeStyle(LinearGradient.caribbeanGradientSunset)
                        )
                        .frame(width: 80, height: 80)
                        .shadow(
                            color: isDark
                                ? Color(hex: "#764ba2").opacity(0.4)
                                : Color(hex: "#0EA5E9").opacity(0.12),
                            radius: isDark ? 16 : 12,
                            y: 4
                        )

                    // User avatar, initials, or person icon
                    if let avatarURL = authService.currentUser?.avatarURL {
                        AsyncImage(url: avatarURL) { phase in
                            switch phase {
                            case .success(let image):
                                image
                                    .resizable()
                                    .scaledToFill()
                                    .frame(width: 80, height: 80)
                                    .clipShape(Circle())
                            default:
                                avatarPlaceholder
                            }
                        }
                    } else {
                        avatarPlaceholder
                    }
                }
                .shadow(
                    color: isDark
                        ? Color(hex: "#764ba2").opacity(0.3)
                        : Color(hex: "#06B6D4").opacity(0.06),
                    radius: isDark ? 12 : 4,
                    y: 2
                )
                .staggeredReveal(index: 0)

                // Name & level
                VStack(spacing: 4) {
                    Text(displayName.isEmpty ? "Learner" : displayName)
                        .font(.title2.bold())
                        .foregroundStyle(
                            isDark
                                ? AnyShapeStyle(LinearGradient(
                                    colors: [Color(hex: "#667eea"), Color(hex: "#764ba2")],
                                    startPoint: .leading,
                                    endPoint: .trailing
                                ))
                                : AnyShapeStyle(LinearGradient.caribbeanGradientSunset)
                        )
                        .shadow(
                            color: isDark ? .clear : .caribbeanPlum.opacity(0.06),
                            radius: isDark ? 0 : 4
                        )

                    // Level + tier badge inline
                    HStack(spacing: 6) {
                        Image(systemName: "star.fill")
                            .font(.caption2)
                            .foregroundStyle(.yellow)
                        Text("\(L.level) \(profile?.currentLevel ?? 1) \(L.learner)")
                            .font(.subheadline)
                            .foregroundStyle(isDark ? .white.opacity(0.6) : .caribbeanPlum)

                        NavigationLink {
                            MembershipView()
                        } label: {
                            TierBadgeView()
                        }
                        .buttonStyle(.plain)
                    }
                }
                .staggeredReveal(index: 1)

                // Quick stats row
                HStack(spacing: 0) {
                    quickStat(
                        value: "\(totalWordsLearned)",
                        label: L.words,
                        icon: "textformat.abc",
                        color: isDark ? .cyan : .caribbeanPlum
                    )
                    quickStatDivider
                    quickStat(
                        value: "\(profile?.streakDays ?? 0)",
                        label: L.streak,
                        icon: "flame.fill",
                        color: isDark ? .orange : .caribbeanPlum
                    )
                    quickStatDivider
                    quickStat(
                        value: formattedAccuracy,
                        label: L.accuracy,
                        icon: "target",
                        color: isDark ? .green : .caribbeanPlum
                    )
                }
                .padding(.top, 4)
                .staggeredReveal(index: 2)

            }
        }
    }

    /// User initials derived from displayName (for light mode avatar)
    private var userInitials: String? {
        let name = displayName
        guard !name.isEmpty else { return nil }
        let parts = name.split(separator: " ")
        if parts.count >= 2 {
            return "\(parts[0].prefix(1))\(parts[1].prefix(1))".uppercased()
        }
        return String(name.prefix(2)).uppercased()
    }

    /// Placeholder shown when no remote avatar is available (or while loading)
    @ViewBuilder
    private var avatarPlaceholder: some View {
        if !isDark, let initials = userInitials, !initials.isEmpty {
            Text(initials)
                .font(.system(size: 28, weight: .bold, design: .rounded))
                .foregroundStyle(.white)
                .frame(width: 80, height: 80)
        } else {
            Image(systemName: "person.crop.circle.fill")
                .font(.system(size: 72, weight: .thin))
                .symbolRenderingMode(.palette)
                .foregroundStyle(
                    .white,
                    isDark
                        ? AnyShapeStyle(LinearGradient(
                            colors: [Color(hex: "#667eea"), Color(hex: "#764ba2")],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        ))
                        : AnyShapeStyle(LinearGradient.caribbeanGradientSunset)
                )
                .frame(width: 80, height: 80)
                .clipShape(Circle())
        }
    }

    /// Total unique words the user has answered correctly
    private var totalWordsLearned: Int {
        allProgress.reduce(0) { $0 + $1.correctAnswers }
    }

    /// Formatted accuracy percentage from all sessions
    private var formattedAccuracy: String {
        let totalCorrect = allProgress.reduce(0) { $0 + $1.correctAnswers }
        let totalQuestions = allProgress.reduce(0) { $0 + $1.totalQuestions }
        guard totalQuestions > 0 else { return "—" }
        let pct = Int(round(Double(totalCorrect) / Double(totalQuestions) * 100))
        return "\(pct)%"
    }

    private func quickStat(value: String, label: String, icon: String, color: Color) -> some View {
        VStack(spacing: 4) {
            Image(systemName: icon)
                .font(.system(size: 12))
                .foregroundStyle(color)
            Text(value)
                .font(.system(size: 20, weight: .bold, design: .rounded))
                .foregroundStyle(isDark ? .white : .caribbeanInk)
            Text(label)
                .font(.caption2)
                .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanPlum)
        }
        .frame(maxWidth: .infinity)
    }

    private var quickStatDivider: some View {
        Rectangle()
            .fill(isDark ? .white.opacity(0.08) : Color.caribbeanBorderSubtle)
            .frame(width: 1, height: 40)
    }

    // MARK: - Streak Calendar

    /// Pulse animation for "Today" indicator
    @State private var todayPulse = false
    /// Breathing glow for streak flame
    @State private var flamePulse = false
    /// Staggered cell reveal
    @State private var calendarRevealed = false

    private var streakCalendar: some View {
        calendarContent
    }

    /// Extracted to let the compiler handle local bindings in a @ViewBuilder
    @ViewBuilder
    private var calendarContent: some View {
        let days = cachedCalendarDays
        let streakCount = profile?.streakDays ?? 0
        let activeDayCount = days.filter(\.isActive).count

        VStack(alignment: .leading, spacing: 16) {
            // ── Header row ──
            HStack(alignment: .center, spacing: 0) {
                VStack(alignment: .leading, spacing: 2) {
                    HStack(spacing: 6) {
                        Image(systemName: "calendar.badge.checkmark")
                            .font(.system(size: 14, weight: .semibold))
                            .foregroundStyle(
                                isDark
                                    ? AnyShapeStyle(Color.cyan)
                                    : AnyShapeStyle(LinearGradient.caribbeanGradientOcean)
                            )
                        Text(L.activityCalendar)
                            .font(.system(size: 16, weight: .bold, design: .rounded))
                            .foregroundStyle(isDark ? .white : .caribbeanInk)
                    }
                    Text(calendarMonthYear)
                        .font(.system(size: 11, weight: .medium))
                        .foregroundStyle(isDark ? .white.opacity(0.6) : .caribbeanPlum.opacity(0.85))
                }

                Spacer()

                // Active days mini-badge
                if activeDayCount > 0 {
                    HStack(spacing: 3) {
                        Text("\(activeDayCount)")
                            .font(.system(size: 13, weight: .bold, design: .rounded))
                        Text("days")
                            .font(.system(size: 10, weight: .medium))
                    }
                    .foregroundStyle(isDark ? .cyan : .caribbeanOcean)
                    .padding(.horizontal, 10)
                    .padding(.vertical, 5)
                    .background(
                        Capsule()
                            .fill(isDark ? Color.cyan.opacity(0.12) : Color.caribbeanOcean.opacity(0.14))
                            .overlay(
                                Capsule()
                                    .strokeBorder(isDark ? Color.cyan.opacity(0.2) : Color.caribbeanOcean.opacity(0.25), lineWidth: 0.5)
                            )
                    )
                }
            }

            // ── Day-of-week labels ──
            let dayLabels = calendarDayLabels
            HStack(spacing: 0) {
                ForEach(dayLabels, id: \.self) { label in
                    Text(label)
                        .font(.system(size: 10, weight: .semibold, design: .rounded))
                        .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanPlum.opacity(0.7))
                        .frame(maxWidth: .infinity)
                }
            }
            .padding(.bottom, -4)

            // ── Calendar grid ──
            LazyVGrid(columns: Array(repeating: GridItem(.flexible(), spacing: 5), count: 7), spacing: 5) {
                ForEach(0..<leadingSpacerCount(for: days), id: \.self) { _ in
                    Color.clear.frame(height: 36)
                }

                ForEach(Array(days.enumerated()), id: \.element.date) { index, day in
                    calendarDayCell(day, index: index)
                }
            }
            .opacity(calendarRevealed ? 1 : 0)
            .animation(.easeOut(duration: 0.4), value: calendarRevealed)
            .drawingGroup()

            // ── Streak banner ──
            if streakCount > 0 {
                HStack(spacing: 10) {
                    // Streak icon with Caribbean sunset glow
                    ZStack {
                        if isDark {
                            // Dark mode: radial glow behind icon
                            Circle()
                                .fill(
                                    RadialGradient(
                                        colors: [Color(hex: "E879F9").opacity(0.25), Color(hex: "38BDF8").opacity(0.1), .clear],
                                        center: .center,
                                        startRadius: 2,
                                        endRadius: 22
                                    )
                                )
                                .frame(width: 44, height: 44)
                        } else {
                            // Light mode: white circle backdrop
                            Circle()
                                .fill(.white)
                                .frame(width: 38, height: 38)
                                .shadow(color: Color(hex: "F472B6").opacity(0.25), radius: 6, y: 2)
                        }

                        if isDark {
                            // Soft bloom layer (dark only)
                            Image(systemName: "sparkles")
                                .font(.system(size: 22, weight: .semibold))
                                .foregroundStyle(
                                    LinearGradient(
                                        colors: [Color(hex: "38BDF8"), Color(hex: "E879F9"), Color(hex: "FBBF24")],
                                        startPoint: .bottomLeading, endPoint: .topTrailing
                                    )
                                )
                                .blur(radius: 6)
                                .opacity(0.75)
                        }

                        // Sharp icon on top
                        Image(systemName: "sparkles")
                            .font(.system(size: isDark ? 22 : 18, weight: .semibold))
                            .foregroundStyle(
                                LinearGradient(
                                    stops: isDark
                                        ? [
                                            .init(color: Color(hex: "22D3EE"), location: 0.0),
                                            .init(color: Color(hex: "A78BFA"), location: 0.35),
                                            .init(color: Color(hex: "F472B6"), location: 0.65),
                                            .init(color: Color(hex: "FBBF24"), location: 1.0)
                                          ]
                                        : [
                                            .init(color: Color(hex: "C494FC"), location: 0.0),
                                            .init(color: Color(hex: "F472B6"), location: 0.35),
                                            .init(color: Color(hex: "FB923C"), location: 0.70),
                                            .init(color: Color(hex: "FBBF24"), location: 1.0)
                                          ],
                                    startPoint: .bottomLeading, endPoint: .topTrailing
                                )
                            )
                            .shadow(color: isDark ? Color(hex: "A78BFA").opacity(0.5) : Color(hex: "F472B6").opacity(0.55), radius: isDark ? 4 : 2, y: 1)
                            .scaleEffect(flamePulse ? 1.08 : 1.0)
                    }

                    VStack(alignment: .leading, spacing: 2) {
                        Text("\(streakCount)-\(L.dayStreak)")
                            .font(.system(size: 16, weight: .heavy, design: .rounded))
                            .foregroundStyle(
                                LinearGradient(
                                    colors: isDark
                                        ? [Color(hex: "22D3EE"), Color(hex: "C084FC"), Color(hex: "FBBF24")]
                                        : [Color(hex: "C494FC"), Color(hex: "F472B6"), Color(hex: "FB923C")],
                                    startPoint: .leading, endPoint: .trailing
                                )
                            )
                        Text("Keep going!")
                            .font(.system(size: 11, weight: .semibold))
                            .foregroundStyle(isDark ? .white.opacity(0.75) : Color(hex: "F472B6"))
                    }

                    Spacer()

                    // Streak progress dots
                    HStack(spacing: 5) {
                        ForEach(0..<7, id: \.self) { i in
                            let filled = i < (streakCount % 7 == 0 ? 7 : streakCount % 7)
                            Circle()
                                .fill(
                                    filled
                                        ? (isDark
                                            ? AnyShapeStyle(LinearGradient(
                                                colors: [Color(hex: "38BDF8"), Color(hex: "E879F9")],
                                                startPoint: .bottom, endPoint: .top
                                              ))
                                            : AnyShapeStyle(LinearGradient(
                                                colors: [Color(hex: "F472B6"), Color(hex: "C494FC")],
                                                startPoint: .bottom, endPoint: .top
                                              )))
                                        : AnyShapeStyle(isDark ? Color.white.opacity(0.2) : Color.caribbeanPlum.opacity(0.2))
                                )
                                .frame(width: 8, height: 8)
                                .overlay(
                                    Circle()
                                        .strokeBorder(
                                            filled
                                                ? (isDark ? Color(hex: "A78BFA").opacity(0.6) : Color(hex: "C494FC").opacity(0.7))
                                                : (isDark ? Color.white.opacity(0.12) : Color.caribbeanPlum.opacity(0.15)),
                                            lineWidth: 0.75
                                        )
                                )
                                .shadow(
                                    color: filled
                                        ? (isDark ? Color(hex: "A78BFA").opacity(0.6) : Color(hex: "F472B6").opacity(0.5))
                                        : .clear,
                                    radius: 4
                                )
                        }
                    }
                }
                .padding(.horizontal, 14)
                .padding(.vertical, 12)
                .background(
                    RoundedRectangle(cornerRadius: 14, style: .continuous)
                        .fill(
                            isDark
                                ? AnyShapeStyle(LinearGradient(
                                    colors: [Color(hex: "7C3AED").opacity(0.12), Color(hex: "22D3EE").opacity(0.08)],
                                    startPoint: .leading, endPoint: .trailing
                                  ))
                                : AnyShapeStyle(LinearGradient(
                                    colors: [Color(hex: "C494FC").opacity(0.18), Color(hex: "F472B6").opacity(0.14), Color(hex: "FB923C").opacity(0.12)],
                                    startPoint: .leading, endPoint: .trailing
                                  ))
                        )
                        .overlay(
                            RoundedRectangle(cornerRadius: 14, style: .continuous)
                                .strokeBorder(
                                    LinearGradient(
                                        colors: isDark
                                            ? [Color(hex: "A78BFA").opacity(0.35), Color(hex: "22D3EE").opacity(0.15)]
                                            : [Color(hex: "C494FC").opacity(0.35), Color(hex: "FB923C").opacity(0.25)],
                                        startPoint: .topLeading, endPoint: .bottomTrailing
                                    ),
                                    lineWidth: 0.75
                                )
                        )
                )
                .shadow(
                    color: isDark ? Color(hex: "7C3AED").opacity(0.12) : Color(hex: "F472B6").opacity(0.18),
                    radius: 8,
                    y: 2
                )
            }
        }
        .onAppear {
            withAnimation(.easeInOut(duration: 1.8).repeatForever(autoreverses: true)) {
                todayPulse = true
            }
            withAnimation(.easeInOut(duration: 2.2).repeatForever(autoreverses: true)) {
                flamePulse = true
            }
            // Trigger staggered cell reveal
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.1) {
                calendarRevealed = true
            }
        }
    }

    /// A single day cell — rounded square with rich visual treatment
    @ViewBuilder
    private func calendarDayCell(_ day: CalendarDay, index: Int) -> some View {
        let isInStreak = day.isActive && isPartOfCurrentStreakCached(day.date)
        let dayNumber = Calendar.current.component(.day, from: day.date)

        ZStack {
            // Cell background
            RoundedRectangle(cornerRadius: 8, style: .continuous)
                .fill(calendarCellBackground(day, isInStreak: isInStreak))
                .frame(height: 36)
                .overlay(
                    RoundedRectangle(cornerRadius: 8, style: .continuous)
                        .strokeBorder(calendarCellBorder(day, isInStreak: isInStreak), lineWidth: 0.5)
                )
                // Today: static glow shadow (no animated radius for perf)
                .shadow(
                    color: day.isToday
                        ? (isDark ? Color.orange.opacity(0.35) : Color(hex: "FB923C").opacity(0.22))
                        : (day.isActive && !day.isFuture
                            ? (isDark ? Color.cyan.opacity(0.2) : Color.caribbeanOcean.opacity(0.10))
                            : .clear),
                    radius: day.isToday ? 8 : 4,
                    y: 1
                )

            // Content
            VStack(spacing: 1) {
                if day.isToday {
                    // Today: bold number + dot indicator
                    Text("\(dayNumber)")
                        .font(.system(size: 13, weight: .bold, design: .rounded))
                        .foregroundStyle(isDark ? .white : .white)

                    Circle()
                        .fill(.white.opacity(0.9))
                        .frame(width: 3, height: 3)
                        .scaleEffect(todayPulse ? 1.3 : 1.0)
                } else if day.isFuture {
                    Text("\(dayNumber)")
                        .font(.system(size: 11, weight: .regular, design: .rounded))
                        .foregroundStyle(isDark ? .white.opacity(0.22) : .caribbeanPlum.opacity(0.35))
                } else if day.isActive {
                    Text("\(dayNumber)")
                        .font(.system(size: 12, weight: .semibold, design: .rounded))
                        .foregroundStyle(.white.opacity(0.95))

                    // Tiny checkmark for active days
                    Image(systemName: "checkmark")
                        .font(.system(size: 6, weight: .bold))
                        .foregroundStyle(.white.opacity(0.7))
                } else {
                    // Inactive past day
                    Text("\(dayNumber)")
                        .font(.system(size: 11, weight: .medium, design: .rounded))
                        .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanPlum.opacity(0.55))
                }
            }
        }
    }

    /// Cell background fill based on day state
    private func calendarCellBackground(_ day: CalendarDay, isInStreak: Bool) -> AnyShapeStyle {
        if day.isFuture {
            return AnyShapeStyle(isDark ? Color.white.opacity(0.015) : Color.caribbeanRecessed.opacity(0.5))
        }
        if day.isToday {
            return isDark
                ? AnyShapeStyle(LinearGradient(
                    colors: [Color.orange, Color(hex: "F59E0B")],
                    startPoint: .topLeading, endPoint: .bottomTrailing
                ))
                : AnyShapeStyle(LinearGradient.caribbeanGradientWarm)
        }
        if day.isActive {
            // Streak days — vibrant gradient
            if isInStreak {
                return isDark
                    ? AnyShapeStyle(LinearGradient(
                        colors: [Color(hex: "06B6D4").opacity(0.85), Color(hex: "0EA5E9").opacity(0.75)],
                        startPoint: .topLeading, endPoint: .bottomTrailing
                    ))
                    : AnyShapeStyle(LinearGradient.caribbeanGradientOcean)
            }
            // Active but not in current streak — still solid
            return isDark
                ? AnyShapeStyle(LinearGradient(
                    colors: [Color.cyan.opacity(0.55), Color(hex: "06B6D4").opacity(0.45)],
                    startPoint: .topLeading, endPoint: .bottomTrailing
                  ))
                : AnyShapeStyle(LinearGradient(
                    colors: [Color.caribbeanLagoon.opacity(0.7), Color.caribbeanReef.opacity(0.6)],
                    startPoint: .topLeading, endPoint: .bottomTrailing
                ))
        }
        // Inactive past day
        return AnyShapeStyle(isDark ? Color.white.opacity(0.03) : Color.caribbeanRecessed.opacity(0.55))
    }

    /// Subtle border treatment per cell state
    private func calendarCellBorder(_ day: CalendarDay, isInStreak: Bool) -> AnyShapeStyle {
        if day.isToday {
            return AnyShapeStyle(isDark ? Color.orange.opacity(0.5) : Color(hex: "FB923C").opacity(0.3))
        }
        if day.isActive && !day.isFuture {
            return AnyShapeStyle(isDark ? Color.cyan.opacity(0.35) : Color.caribbeanOcean.opacity(0.2))
        }
        return AnyShapeStyle(isDark ? Color.white.opacity(0.04) : Color.caribbeanBorderSubtle.opacity(0.5))
    }

    // MARK: - Calendar Data

    struct CalendarDay {
        let date: Date
        let isActive: Bool
        let isToday: Bool
        let isFuture: Bool
    }

    /// Localized short day labels (M T W T F S S)
    private static let cachedDayLabels: [String] = {
        let formatter = DateFormatter()
        formatter.locale = Locale.current
        let symbols = formatter.veryShortWeekdaySymbols ?? ["S", "M", "T", "W", "T", "F", "S"]
        let first = Calendar.current.firstWeekday - 1
        return Array(symbols[first...]) + Array(symbols[..<first])
    }()

    private var calendarDayLabels: [String] { Self.cachedDayLabels }

    /// Month/year string for the header (cached formatter)
    private static let monthYearFormatter: DateFormatter = {
        let f = DateFormatter()
        f.dateFormat = "MMMM yyyy"
        return f
    }()

    private var calendarMonthYear: String {
        Self.monthYearFormatter.string(from: Date())
    }

    /// Number of empty leading cells to align the first day to its weekday column
    private func leadingSpacerCount(for days: [CalendarDay]) -> Int {
        guard let firstDate = days.first?.date else { return 0 }
        let weekday = Calendar.current.component(.weekday, from: firstDate)
        let firstWeekday = Calendar.current.firstWeekday
        return (weekday - firstWeekday + 7) % 7
    }

    /// Rebuild cached calendar data — call once on appear, not per-cell.
    private func rebuildCalendarCache() {
        let calendar = Calendar.current
        let today = calendar.startOfDay(for: Date())
        let activeDates = Set(allProgress.map { calendar.startOfDay(for: $0.createdDate) })

        // Build days array
        let days: [CalendarDay] = (0..<30).reversed().map { offset in
            let date = calendar.date(byAdding: .day, value: -offset, to: today)!
            let dayStart = calendar.startOfDay(for: date)
            return CalendarDay(
                date: dayStart,
                isActive: activeDates.contains(dayStart),
                isToday: dayStart == today,
                isFuture: dayStart > today
            )
        }

        // Walk backwards from today to find streak start
        var streakStart = today
        var checkDate = today
        while activeDates.contains(checkDate) {
            streakStart = checkDate
            guard let prev = calendar.date(byAdding: .day, value: -1, to: checkDate) else { break }
            checkDate = prev
        }

        cachedCalendarDays = days
        cachedStreakStart = streakStart
        cachedActiveDatesSet = activeDates
    }

    /// O(1) streak check using pre-computed range
    private func isPartOfCurrentStreakCached(_ date: Date) -> Bool {
        let dayStart = Calendar.current.startOfDay(for: date)
        let today = Calendar.current.startOfDay(for: Date())
        return dayStart >= cachedStreakStart && dayStart <= today
    }
}
