import SwiftUI
import SwiftData

// MARK: - Content View (Root Navigation)

/// Root view orchestrating tab-based navigation.
/// Matches React's 4-tab layout: Dashboard, Journey, Membership, Profile.
/// Games are accessed from Dashboard game cards (no separate Games tab).
struct ContentView: View {
    @Environment(\.modelContext) private var modelContext
    @Environment(ThemeManager.self) private var themeManager

    @Query private var profiles: [UserProfile]
    private var profile: UserProfile? { profiles.first }

    @State private var selectedTab: AppTab = .dashboard
    @State private var hideTabBar: Bool = false
    @State private var navigationPath = NavigationPath()

    // Services (shared across all views)
    @State private var progressService: ProgressService?
    @State private var contentLoader: ContentLoader = ContentLoader.shared
    @State private var audioService: AudioService = AudioService.shared
    @State private var hapticsService: HapticsService = HapticsService.shared

    var body: some View {
        VStack(spacing: 0) {
            // Branded top bar (hidden during games)
            if !hideTabBar {
                LumenLingoNavBar()
            }

            TabView(selection: $selectedTab) {
                // MARK: Dashboard Tab
                NavigationStack(path: $navigationPath) {
                    DashboardView(
                        hideTabBar: $hideTabBar,
                        navigationPath: $navigationPath
                    )
                    .navigationDestination(for: AppRoute.self) { route in
                        routeDestination(for: route)
                    }
                }
                .environment(\.backgroundActive, selectedTab == .dashboard)
                .tabItem {
                    Label("Home", systemImage: "house.fill")
                }
                .tag(AppTab.dashboard)

                // MARK: Journey Tab
                NavigationStack {
                    JourneyView()
                }
                .environment(\.backgroundActive, selectedTab == .journey)
                .tabItem {
                    Label("Stats", systemImage: "chart.line.uptrend.xyaxis")
                }
                .tag(AppTab.journey)

                // MARK: Membership Tab
                NavigationStack {
                    MembershipView()
                }
                .environment(\.backgroundActive, selectedTab == .membership)
                .tabItem {
                    Label("Premium", systemImage: "crown.fill")
                }
                .tag(AppTab.membership)

                // MARK: Profile Tab
                NavigationStack {
                    ProfileView()
                }
                .environment(\.backgroundActive, selectedTab == .profile)
                .tabItem {
                    Label("Profile", systemImage: "person.fill")
                }
                .tag(AppTab.profile)
            }
            .tint(Color.cosmicAccent)
            .toolbar(hideTabBar ? .hidden : .visible, for: .tabBar)
        }
        .background(themeManager.isDarkMode
            ? Color(red: 6/255, green: 5/255, blue: 20/255)
            : Color(red: 245/255, green: 247/255, blue: 252/255)
        )
        .onAppear {
            setupServices()
            themeManager.syncFromProfile(profile)
            if let profile { audioService.syncFromProfile(profile) }
            configureTabBarAppearance()
        }
        .onChange(of: themeManager.isDarkMode) { _, _ in
            configureTabBarAppearance()
        }
        .onChange(of: profile?.soundEnabled) { _, _ in
            if let profile { audioService.syncFromProfile(profile) }
        }
        .onChange(of: profile?.gamesSoundsEnabled) { _, _ in
            if let profile { audioService.syncFromProfile(profile) }
        }
        .onChange(of: profile?.uiSoundsEnabled) { _, _ in
            if let profile { audioService.syncFromProfile(profile) }
        }
        .onChange(of: profile?.achievementSoundsEnabled) { _, _ in
            if let profile { audioService.syncFromProfile(profile) }
        }
        .environment(audioService)
        .environment(hapticsService)
        .environment(contentLoader)
    }

    // MARK: Route Destination

    @ViewBuilder
    private func routeDestination(for route: AppRoute) -> some View {
        switch route {
        case .flashcardsCategories:
            CategoriesView(gameType: .flashCards, navigationPath: $navigationPath)
        case .grammarCategories:
            CategoriesView(gameType: .grammar, navigationPath: $navigationPath)
        case .wordBuilderCategories:
            CategoriesView(gameType: .wordBuilder, navigationPath: $navigationPath)
        case .flashcardsGame(let categoryId):
            FlashCardsView(categoryId: categoryId, hideTabBar: $hideTabBar)
        case .grammarGame(let categoryId):
            GrammarView(categoryId: categoryId, hideTabBar: $hideTabBar)
        case .wordBuilderGame(let categoryId):
            WordBuilderView(categoryId: categoryId, hideTabBar: $hideTabBar)
        case .languageSelection:
            LanguageSelectionView()
        }
    }

    // MARK: Setup

    private func setupServices() {
        if progressService == nil {
            let service = ProgressService(modelContext: modelContext)
            progressService = service
            // Ensure a UserProfile record exists in SwiftData before any
            // settings view reads @Query profiles — without this, every
            // profile?.xxx.toggle() silently no-ops on nil.
            _ = service.getOrCreateProfile()
        }
    }

    private func configureTabBarAppearance() {
        let appearance = UITabBarAppearance()
        appearance.configureWithDefaultBackground()

        if themeManager.isDarkMode {
            appearance.backgroundColor = UIColor(Color(red: 10/255, green: 8/255, blue: 20/255).opacity(0.95))
            appearance.shadowColor = UIColor(white: 1.0, alpha: 0.06)
            appearance.stackedLayoutAppearance.normal.iconColor = UIColor(white: 0.45, alpha: 1)
            appearance.stackedLayoutAppearance.normal.titleTextAttributes = [
                .foregroundColor: UIColor(white: 0.45, alpha: 1),
            ]
        } else {
            appearance.backgroundColor = UIColor(Color(red: 250/255, green: 251/255, blue: 254/255).opacity(0.95))
            appearance.shadowColor = UIColor(red: 0, green: 0, blue: 0, alpha: 0.08)
            appearance.stackedLayoutAppearance.normal.iconColor = UIColor(white: 0.5, alpha: 1)
            appearance.stackedLayoutAppearance.normal.titleTextAttributes = [
                .foregroundColor: UIColor(white: 0.5, alpha: 1),
            ]
        }

        appearance.stackedLayoutAppearance.selected.iconColor = UIColor(Color.cosmicAccent)
        appearance.stackedLayoutAppearance.selected.titleTextAttributes = [
            .foregroundColor: UIColor(Color.cosmicAccent),
        ]

        UITabBar.appearance().standardAppearance = appearance
        UITabBar.appearance().scrollEdgeAppearance = appearance
    }
}

// MARK: - Branded Navigation Bar

/// Top navigation bar with app branding, matching React's LayoutNavbar.
/// Shows cocktail/martini icon + "LumenLingo" title + subtitle.
struct LumenLingoNavBar: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(ThemeManager.self) private var themeManager

    @State private var wobble: Double = 0

    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        HStack(spacing: 12) {
            // Logo icon in gradient container
            ZStack {
                RoundedRectangle(cornerRadius: 12)
                    .fill(
                        LinearGradient(
                            colors: [
                                Color(hex: "#ec4899"),
                                Color(hex: "#d946ef"),
                                Color(hex: "#a855f7")
                            ],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
                    .frame(width: 36, height: 36)
                    .shadow(color: Color(hex: "#d946ef").opacity(0.4), radius: 8)

                Image(systemName: "wineglass.fill")
                    .font(.system(size: 16, weight: .semibold))
                    .foregroundStyle(.white)
                    .rotationEffect(.degrees(wobble))
            }
            .shimmer(isActive: true, color: .white, duration: 3.0)

            // Title + subtitle
            VStack(alignment: .leading, spacing: 1) {
                Text("LumenLingo")
                    .font(.system(size: 20, weight: .bold, design: .rounded))
                    .foregroundStyle(isDark ? .white : Color(red: 30/255, green: 25/255, blue: 60/255))

                Text("Language Mastery Engine")
                    .font(.system(size: 10, weight: .medium))
                    .foregroundStyle(isDark ? .white.opacity(0.5) : Color(red: 100/255, green: 100/255, blue: 130/255))
            }

            Spacer()
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 10)
        .background(
            isDark
                ? AnyShapeStyle(Color(red: 6/255, green: 5/255, blue: 20/255).opacity(0.9))
                : AnyShapeStyle(Color(red: 250/255, green: 251/255, blue: 254/255).opacity(0.95))
        )
        .overlay(
            Rectangle()
                .fill(isDark ? .white.opacity(0.05) : .black.opacity(0.03))
        )
        .overlay(alignment: .bottom) {
            Rectangle()
                .fill(isDark ? .white.opacity(0.06) : .black.opacity(0.06))
                .frame(height: 0.5)
        }
        .onAppear {
            withAnimation(.easeInOut(duration: 3.0).repeatForever(autoreverses: true)) {
                wobble = 5
            }
        }
    }
}

// MARK: - App Tab Enum

enum AppTab: Hashable {
    case dashboard
    case journey
    case membership
    case profile
}

// MARK: - App Route Enum

enum AppRoute: Hashable {
    case flashcardsCategories
    case grammarCategories
    case wordBuilderCategories
    case flashcardsGame(categoryId: String)
    case grammarGame(categoryId: String)
    case wordBuilderGame(categoryId: String)
    case languageSelection
}
