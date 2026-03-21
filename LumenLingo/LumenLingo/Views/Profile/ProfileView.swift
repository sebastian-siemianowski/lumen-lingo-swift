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

    @State private var activeTab: ProfileTab = .appearance
    @State private var activeAppearanceSubTab: AppearanceSubTab = .darkLight
    @State private var activeSoundSubTab: SoundSubTab = .soundscapes
    @State private var showLanguageSelector = false

    private var isDark: Bool { colorScheme == .dark }

    private var availableAppearanceSubTabs: [AppearanceSubTab] {
        AppearanceSubTab.allCases.filter { isDark || $0 != .nebulaDrift }
    }

    // Entry animation state
    @State private var headerAppeared = false
    @State private var isMyPlanCollapsed = false
    // Tab transition direction
    @State private var tabDirection: Int = 0
    @State private var subTabDirection: Int = 0
    @State private var soundSubTabDirection: Int = 0
    @Namespace private var tabIndicator
    @Namespace private var subTabIndicator
    @Namespace private var soundSubTabIndicator

    enum ProfileTab: String, CaseIterable {
        case appearance = "Appearance"
        case sound = "Sound"
        case sync = "Sync"
        case signOut = "Sign Out"
    }

    enum AppearanceSubTab: String, CaseIterable {
        case darkLight = "Dark/Light"
        case breathingOrbs = "Orbs"
        case quantumFlow = "Quantum"
        case nebulaDrift = "Nebula"
    }

    enum SoundSubTab: String, CaseIterable {
        case soundscapes = "Soundscapes"
        case controls = "Controls"
        case mixer = "Mixer"
    }

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

                // Top-level settings tabs
                settingsTabBar
                    .padding(.horizontal, 16)
                    .padding(.top, 20)
                    .opacity(headerAppeared ? 1 : 0)

                // Tab content
                settingsContent
                    .padding(.horizontal, 16)
                    .padding(.top, 16)
                    .transition(.asymmetric(
                        insertion: .opacity.combined(with: .offset(x: CGFloat(tabDirection * 30))),
                        removal: .opacity.combined(with: .offset(x: CGFloat(-tabDirection * 30)))
                    ))
                    .id(activeTab)

                // App footer
                appInfoSection
                    .padding(.top, 24)

                #if DEBUG
                qaPanelLink
                    .padding(.horizontal, 16)
                    .padding(.top, 16)
                #endif

                Spacer(minLength: 100)
            }
        }
        .cosmicBackground()
        .navigationBarTitleDisplayMode(.inline)
        .toolbarColorScheme(isDark ? .dark : .light, for: .navigationBar)
        .onAppear {
            withAnimation(.easeOut(duration: 0.6).delay(0.15)) {
                headerAppeared = true
            }
        }
        .sheet(isPresented: $showLanguageSelector) {
            LanguageSelectionView()
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

                    // User initials or person icon
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
        let days = calendarDays
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
                        .opacity(calendarRevealed ? 1 : 0)
                        .scaleEffect(calendarRevealed ? 1 : 0.5)
                        .animation(
                            .spring(response: 0.35, dampingFraction: 0.7)
                                .delay(Double(index) * 0.012),
                            value: calendarRevealed
                        )
                }
            }

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
                                        colors: [Color(hex: "E879F9").opacity(flamePulse ? 0.35 : 0.18), Color(hex: "38BDF8").opacity(0.1), .clear],
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
                                .opacity(flamePulse ? 0.85 : 0.65)
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
        let isInStreak = day.isActive && isPartOfCurrentStreak(day.date)
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
                // Today: breathing glow shadow
                .shadow(
                    color: day.isToday
                        ? (isDark ? Color.orange.opacity(0.4) : Color(hex: "FB923C").opacity(0.25))
                        : (day.isActive && !day.isFuture
                            ? (isDark ? Color.cyan.opacity(0.25) : Color.caribbeanOcean.opacity(0.12))
                            : .clear),
                    radius: day.isToday ? (todayPulse ? 10 : 5) : 5,
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
    private func calendarCellBackground(_ day: CalendarDay, isInStreak: Bool) -> some ShapeStyle {
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
    private func calendarCellBorder(_ day: CalendarDay, isInStreak: Bool) -> some ShapeStyle {
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
    private var calendarDayLabels: [String] {
        let formatter = DateFormatter()
        formatter.locale = Locale.current
        let symbols = formatter.veryShortWeekdaySymbols ?? ["S", "M", "T", "W", "T", "F", "S"]
        // Calendar's firstWeekday is 1-based (1=Sunday)
        let first = Calendar.current.firstWeekday - 1
        return Array(symbols[first...]) + Array(symbols[..<first])
    }

    /// Month/year string for the header
    private var calendarMonthYear: String {
        let formatter = DateFormatter()
        formatter.dateFormat = "MMMM yyyy"
        return formatter.string(from: Date())
    }

    /// Generate the last 30 days of calendar data
    private var calendarDays: [CalendarDay] {
        let calendar = Calendar.current
        let today = calendar.startOfDay(for: Date())
        let activeDates = Set(allProgress.map { calendar.startOfDay(for: $0.createdDate) })

        return (0..<30).reversed().map { offset in
            let date = calendar.date(byAdding: .day, value: -offset, to: today)!
            let dayStart = calendar.startOfDay(for: date)
            return CalendarDay(
                date: dayStart,
                isActive: activeDates.contains(dayStart),
                isToday: dayStart == today,
                isFuture: dayStart > today
            )
        }
    }

    /// Number of empty leading cells to align the first day to its weekday column
    private func leadingSpacerCount(for days: [CalendarDay]) -> Int {
        guard let firstDate = days.first?.date else { return 0 }
        let weekday = Calendar.current.component(.weekday, from: firstDate)
        let firstWeekday = Calendar.current.firstWeekday
        return (weekday - firstWeekday + 7) % 7
    }

    /// Check if a date falls within the current contiguous streak from today
    private func isPartOfCurrentStreak(_ date: Date) -> Bool {
        let calendar = Calendar.current
        let today = calendar.startOfDay(for: Date())
        let activeDates = Set(allProgress.map { calendar.startOfDay(for: $0.createdDate) })

        // Walk backwards from today to find streak start
        var streakStart = today
        var checkDate = today
        while activeDates.contains(checkDate) {
            streakStart = checkDate
            guard let prev = calendar.date(byAdding: .day, value: -1, to: checkDate) else { break }
            checkDate = prev
        }

        let dayStart = calendar.startOfDay(for: date)
        return dayStart >= streakStart && dayStart <= today
    }

    // MARK: - Settings Tab Bar

    private var settingsTabBar: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack(spacing: 3) {
                ForEach(ProfileTab.allCases, id: \.self) { tab in
                    Button {
                        let oldIndex = ProfileTab.allCases.firstIndex(of: activeTab) ?? 0
                        let newIndex = ProfileTab.allCases.firstIndex(of: tab) ?? 0
                        tabDirection = newIndex > oldIndex ? 1 : -1
                        AudioService.shared.playProfileTabSwitch()
                        HapticsService.shared.tabSwitch()
                        withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                            activeTab = tab
                        }
                    } label: {
                        HStack(spacing: 5) {
                            Image(systemName: tabIcon(for: tab))
                                .font(.system(size: 11))
                            Text(localizedTabName(tab))
                                .font(.system(size: 12, weight: activeTab == tab ? .semibold : .medium))
                        }
                        .foregroundStyle(
                            activeTab == tab
                                ? (isDark ? .white : Color.white)
                                : (isDark ? .white.opacity(0.45) : .caribbeanPlum)
                        )
                        .padding(.horizontal, 12)
                        .padding(.vertical, 8)
                        .background {
                            if activeTab == tab {
                                Capsule()
                                    .fill(
                                        isDark
                                            ? AnyShapeStyle(LinearGradient(
                                                colors: [Color(hex: "#667eea").opacity(0.25), Color(hex: "#764ba2").opacity(0.15)],
                                                startPoint: .leading,
                                                endPoint: .trailing
                                            ))
                                            : AnyShapeStyle(LinearGradient.caribbeanGradientOcean)
                                    )
                                    .overlay(
                                        Capsule().strokeBorder(
                                            isDark ? .white.opacity(0.12) : .white.opacity(0.25),
                                            lineWidth: isDark ? 1 : 0.5
                                        )
                                    )
                                    .shadow(
                                        color: isDark ? .clear : Color(hex: "#0EA5E9").opacity(0.20),
                                        radius: isDark ? 0 : 6,
                                        y: isDark ? 0 : 2
                                    )
                                    .matchedGeometryEffect(id: "tabIndicator", in: tabIndicator)
                            }
                        }
                    }
                    .buttonStyle(LumenPressStyle(weight: .soft))
                }
            }
            .padding(4)
            .background(
                Capsule()
                    .fill(isDark ? .white.opacity(0.06) : Color.caribbeanElevated)
                    .overlay(
                        isDark ? nil : Capsule().strokeBorder(Color.caribbeanBorderSubtle, lineWidth: 0.5)
                    )
            )
        }
    }

    private func tabIcon(for tab: ProfileTab) -> String {
        switch tab {
        case .appearance: return "paintbrush.fill"
        case .sound: return "speaker.wave.2.fill"
        case .sync: return "arrow.triangle.2.circlepath"
        case .signOut: return "rectangle.portrait.and.arrow.right"
        }
    }

    private func localizedTabName(_ tab: ProfileTab) -> String {
        switch tab {
        case .appearance: return L.appearance
        case .sound: return L.sound
        case .sync: return L.sync
        case .signOut: return L.signOut
        }
    }

    // MARK: - Settings Content

    @ViewBuilder
    private var settingsContent: some View {
        switch activeTab {
        case .appearance:
            appearanceSettings
        case .sound:
            soundTab
        case .sync:
            syncTab
        case .signOut:
            signOutTab
        }
    }

    // MARK: - Appearance Tab (4 Sub-Tabs)

    private var appearanceSettings: some View {
        VStack(spacing: 16) {
            // Sub-tab bar
            appearanceSubTabBar

            // Sub-tab content in glass card
            settingsCard(tint: appearanceSubTabTint) {
                Group {
                    switch activeAppearanceSubTab {
                    case .darkLight:
                        darkLightSettings
                    case .breathingOrbs:
                        BreathingOrbsSettingsView()
                            .featureTooltip(key: TooltipKey.breathingOrbs)
                    case .quantumFlow:
                        QuantumFlowSettingsView()
                    case .nebulaDrift:
                        NebulaDriftSettingsView()
                    }
                }
                .transition(.asymmetric(
                    insertion: .opacity.combined(with: .offset(x: CGFloat(subTabDirection * 20))),
                    removal: .opacity.combined(with: .offset(x: CGFloat(-subTabDirection * 20)))
                ))
                .id(activeAppearanceSubTab)
            }
        }
    }

    private var appearanceSubTabBar: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack(spacing: 3) {
                ForEach(availableAppearanceSubTabs, id: \.self) { subTab in
                    Button {
                        let oldIndex = availableAppearanceSubTabs.firstIndex(of: activeAppearanceSubTab) ?? 0
                        let newIndex = availableAppearanceSubTabs.firstIndex(of: subTab) ?? 0
                        subTabDirection = newIndex > oldIndex ? 1 : -1
                        AudioService.shared.playTabSwitch()
                        HapticsService.shared.tabSwitch()
                        withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                            activeAppearanceSubTab = subTab
                        }
                    } label: {
                        HStack(spacing: 4) {
                            Image(systemName: subTabIcon(for: subTab))
                                .font(.system(size: 10))
                            Text(localizedSubTabName(subTab))
                                .font(.system(size: 11, weight: .medium))
                        }
                        .modifier(SubTabLockModifier(subTab: subTab))
                        .foregroundStyle(
                            activeAppearanceSubTab == subTab
                                ? (isDark ? .white : Color.caribbeanInk)
                                : (isDark ? .white.opacity(0.4) : .caribbeanPlum)
                        )
                        .padding(.horizontal, 10)
                        .padding(.vertical, 6)
                        .background {
                            if activeAppearanceSubTab == subTab {
                                Capsule()
                                    .fill(
                                        isDark
                                            ? AnyShapeStyle(Color(hex: "#8b5cf6").opacity(0.15))
                                            : AnyShapeStyle(Color.caribbeanSelected)
                                    )
                                    .overlay(
                                        Capsule().strokeBorder(
                                            isDark ? Color(hex: "#8b5cf6").opacity(0.25) : Color.caribbeanBorderSubtle,
                                            lineWidth: isDark ? 1 : 0.5
                                        )
                                    )
                                    .matchedGeometryEffect(id: "subTabIndicator", in: subTabIndicator)
                            }
                        }
                    }
                    .buttonStyle(LumenPressStyle(weight: .soft))
                }
            }
            .padding(3)
            .background(
                Capsule()
                    .fill(isDark ? .white.opacity(0.04) : Color.caribbeanElevated)
                    .overlay(
                        isDark ? nil : Capsule().strokeBorder(Color.caribbeanBorderSubtle, lineWidth: 0.5)
                    )
            )
        }
        .onChange(of: isDark) { _, newIsDark in
            if !newIsDark && activeAppearanceSubTab == .nebulaDrift {
                activeAppearanceSubTab = .darkLight
            }
        }
    }

    private func subTabIcon(for subTab: AppearanceSubTab) -> String {
        switch subTab {
        case .darkLight: return "moon.fill"
        case .breathingOrbs: return "scope"
        case .quantumFlow: return "waveform.path.ecg"
        case .nebulaDrift: return "cloud.fog.fill"
        }
    }

    private func localizedSubTabName(_ subTab: AppearanceSubTab) -> String {
        switch subTab {
        case .darkLight: return L.darkLight
        case .breathingOrbs: return L.orbs
        case .quantumFlow: return L.quantum
        case .nebulaDrift: return L.nebula
        }
    }

    /// Modifier that conditionally applies a lock indicator to premium sub-tabs.
    /// Dark/Light is always unlocked and gets no lock icon.
    private struct SubTabLockModifier: ViewModifier {
        let subTab: AppearanceSubTab

        func body(content: Content) -> some View {
            switch subTab {
            case .darkLight:
                content
            case .breathingOrbs:
                content.lockedFeatureIndicator(for: .breathingOrbs)
            case .quantumFlow:
                content.lockedFeatureIndicator(for: .quantumFlow)
            case .nebulaDrift:
                content.lockedFeatureIndicator(for: .nebulaDrift)
            }
        }
    }

    // MARK: - Dark/Light Sub-Tab

    /// Per-sub-tab accent tint for the glass panel
    private var appearanceSubTabTint: Color {
        switch activeAppearanceSubTab {
        case .darkLight: return Color(hex: "#8b5cf6")
        case .breathingOrbs: return .purple
        case .quantumFlow: return .cyan
        case .nebulaDrift: return .indigo
        }
    }

    private var darkLightSettings: some View {
        VStack(spacing: 16) {
            // Dark mode toggle
            HStack(spacing: 12) {
                // Animated icon in a gradient circle
                ZStack {
                    Circle()
                        .fill(
                            isDark
                                ? AnyShapeStyle(Color(hex: "#8b5cf6").opacity(0.15))
                                : AnyShapeStyle(LinearGradient.caribbeanGradientWarm.opacity(0.15))
                        )
                        .frame(width: 36, height: 36)

                    Image(systemName: isDark ? "moon.fill" : "sun.max.fill")
                        .font(.system(size: 18))
                        .foregroundStyle(
                            isDark
                                ? AnyShapeStyle(Color(hex: "#8b5cf6"))
                                : AnyShapeStyle(LinearGradient.caribbeanGradientWarm)
                        )
                        .contentTransition(.symbolEffect(.replace))
                }

                VStack(alignment: .leading, spacing: 2) {
                    Text(L.darkMode)
                        .font(.system(size: 17, weight: .semibold))
                        .foregroundStyle(isDark ? .white : .caribbeanInk)
                    Text(isDark ? L.cosmicDarkTheme : L.lightModeActive)
                        .font(.system(size: 13))
                        .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanPlum)
                        .contentTransition(.numericText())
                        .lineLimit(1)
                        .minimumScaleFactor(0.8)
                }

                Spacer()

                PremiumToggle(
                    isOn: themeManager.isDarkMode,
                    enabledColor: isDark ? Color(hex: "#8b5cf6") : Color(hex: "#0EA5E9"),
                    enabledIcon: "moon.fill",
                    disabledIcon: "sun.max.fill"
                ) {
                    HapticsService.shared.toggleSwitch()
                    if themeManager.isDarkMode {
                        AudioService.shared.playToggleOff()
                    } else {
                        AudioService.shared.playToggleOn()
                    }
                    themeManager.toggleDarkMode(profile: profile)
                }
            }

        }
    }

    // MARK: - Sound Tab (3 Sub-Tabs)

    private var soundTab: some View {
        VStack(spacing: 16) {
            // Sub-tab bar
            soundSubTabBar

            // Sub-tab content in glass card
            settingsCard(tint: soundSubTabTint) {
                Group {
                    switch activeSoundSubTab {
                    case .controls:
                        SoundControlsView()
                    case .soundscapes:
                        SoundscapesSettingsView()
                            .featureTooltip(key: TooltipKey.soundscapes)
                    case .mixer:
                        SoundMixerView()
                    }
                }
                .transition(.asymmetric(
                    insertion: .opacity.combined(with: .offset(x: CGFloat(soundSubTabDirection * 20))),
                    removal: .opacity.combined(with: .offset(x: CGFloat(-soundSubTabDirection * 20)))
                ))
                .id(activeSoundSubTab)
            }
        }
    }

    private var soundSubTabBar: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack(spacing: 3) {
                ForEach(SoundSubTab.allCases, id: \.self) { subTab in
                    Button {
                        let oldIndex = SoundSubTab.allCases.firstIndex(of: activeSoundSubTab) ?? 0
                        let newIndex = SoundSubTab.allCases.firstIndex(of: subTab) ?? 0
                        soundSubTabDirection = newIndex > oldIndex ? 1 : -1
                        AudioService.shared.playTabSwitch()
                        HapticsService.shared.tabSwitch()
                        withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                            activeSoundSubTab = subTab
                        }
                    } label: {
                        HStack(spacing: 4) {
                            Image(systemName: soundSubTabIcon(for: subTab))
                                .font(.system(size: 10))
                            Text(soundSubTabName(subTab))
                                .font(.system(size: 11, weight: .medium))
                        }
                        .modifier(SoundSubTabLockModifier(subTab: subTab))
                        .foregroundStyle(
                            activeSoundSubTab == subTab
                                ? (isDark ? .white : Color.caribbeanInk)
                                : (isDark ? .white.opacity(0.4) : .caribbeanPlum)
                        )
                        .padding(.horizontal, 10)
                        .padding(.vertical, 6)
                        .background {
                            if activeSoundSubTab == subTab {
                                Capsule()
                                    .fill(
                                        isDark
                                            ? AnyShapeStyle(Color(hex: "#ec4899").opacity(0.15))
                                            : AnyShapeStyle(Color.caribbeanSelected)
                                    )
                                    .overlay(
                                        Capsule().strokeBorder(
                                            isDark ? Color(hex: "#ec4899").opacity(0.25) : Color.caribbeanBorderSubtle,
                                            lineWidth: isDark ? 1 : 0.5
                                        )
                                    )
                                    .matchedGeometryEffect(id: "soundSubTabIndicator", in: soundSubTabIndicator)
                            }
                        }
                    }
                    .buttonStyle(LumenPressStyle(weight: .soft))
                }
            }
            .padding(3)
            .background(
                Capsule()
                    .fill(isDark ? .white.opacity(0.04) : Color.caribbeanElevated)
                    .overlay(
                        isDark ? nil : Capsule().strokeBorder(Color.caribbeanBorderSubtle, lineWidth: 0.5)
                    )
            )
        }
    }

    private func soundSubTabIcon(for subTab: SoundSubTab) -> String {
        switch subTab {
        case .controls: return "speaker.wave.2.fill"
        case .soundscapes: return "headphones"
        case .mixer: return "slider.horizontal.3"
        }
    }

    private func soundSubTabName(_ subTab: SoundSubTab) -> String {
        switch subTab {
        case .controls: return "Controls"
        case .soundscapes: return "Soundscapes"
        case .mixer: return "Mixer"
        }
    }

    /// Lock indicator for sound sub-tabs. Only Soundscapes is gated.
    private struct SoundSubTabLockModifier: ViewModifier {
        let subTab: SoundSubTab

        func body(content: Content) -> some View {
            if subTab == .soundscapes {
                content.lockedFeatureIndicator(for: .soundscapes)
            } else {
                content
            }
        }
    }

    private var soundSubTabTint: Color {
        switch activeSoundSubTab {
        case .controls: return Color(hex: "#ec4899")
        case .soundscapes: return Color(hex: "#8B5CF6")
        case .mixer: return .teal
        }
    }

    // MARK: - Sync Tab (Delegated)

    private var syncTab: some View {
        VStack(spacing: 16) {
            settingsCard(tint: .teal) {
                ConnectivitySettingsView()
            }

            settingsCard(tint: .teal) {
                SyncStatusView()
            }
        }
    }

    // MARK: - Sign Out Tab (Delegated)

    private var signOutTab: some View {
        settingsCard(tint: .red.opacity(0.6)) {
            SignOutView()
        }
    }

    // MARK: - App Info Footer

    private var appInfoSection: some View {
        VStack(spacing: 6) {
            Text("LumenLingo")
                .font(.headline)
                .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
            Text(L.version)
                .font(.caption)
                .foregroundStyle(isDark ? .white.opacity(0.25) : .caribbeanMist.opacity(0.7))

            // "Made with ❤️ for language learners" — heart as SF Symbol
            // so it renders reliably (emoji can be invisible with foregroundStyle)
            madeWithLoveLabel
        }
    }

    private var madeWithLoveLabel: some View {
        let parts = L.madeWithLove.components(separatedBy: "\u{2764}\u{FE0F}")
        let tint: Color = isDark ? .white.opacity(0.25) : .caribbeanMist.opacity(0.7)

        return HStack(spacing: 0) {
            if let before = parts.first {
                Text(before)
            }
            Image(systemName: "heart.fill")
                .font(.system(size: 10))
                .foregroundStyle(.pink)
            if parts.count > 1 {
                Text(parts[1])
            }
        }
        .font(.caption)
        .foregroundStyle(tint)
    }

    // MARK: - Shared Components

    private func settingsCard<Content: View>(
        tint: Color? = nil,
        @ViewBuilder content: @escaping () -> Content
    ) -> some View {
        GlassPanelWrapper(cornerRadius: 18, tintColor: tint) {
            content()
        }
    }

    // MARK: - QA Panel (DEBUG only)

    #if DEBUG
    private var qaPanelLink: some View {
        NavigationLink {
            QAPanelView()
        } label: {
            GlassPanelWrapper {
                HStack(spacing: 10) {
                    Image(systemName: "ladybug.fill")
                        .font(.system(size: 16))
                        .foregroundStyle(.orange)

                    Text("QA Panel")
                        .font(.system(size: 14, weight: .semibold))
                        .foregroundStyle(isDark ? .white.opacity(0.7) : .primary)

                    Spacer()

                    if tierManager.hasActiveOverrides {
                        Text("ACTIVE")
                            .font(.system(size: 8, weight: .heavy, design: .rounded))
                            .tracking(0.5)
                            .padding(.horizontal, 6)
                            .padding(.vertical, 2)
                            .background(Capsule().fill(.orange.opacity(0.2)))
                            .foregroundStyle(.orange)
                    }

                    Image(systemName: "chevron.right")
                        .font(.system(size: 12, weight: .semibold))
                        .foregroundStyle(isDark ? .white.opacity(0.3) : .secondary)
                }
            }
        }
        .buttonStyle(.plain)
    }
    #endif
}
