import SwiftUI
import SwiftData

// MARK: - Content View (Root Navigation)

/// Root view orchestrating tab-based navigation.
/// Matches React's 4-tab layout: Dashboard, Journey, Membership, Profile.
/// Games are accessed from Dashboard game cards (no separate Games tab).
struct ContentView: View {
    @Environment(\.modelContext) private var modelContext
    @Environment(ThemeManager.self) private var themeManager
    @Environment(\.localization) private var localization

    @Query private var profiles: [UserProfile]
    @Query private var languagePrefs: [LanguagePreference]
    private var profile: UserProfile? { profiles.first }
    private var L: AppStrings { localization.strings }

    @State private var selectedTab: AppTab = .dashboard
    @State private var hideTabBar: Bool = false
    @State private var navigationPath = NavigationPath()

    // Services (shared across all views)
    @State private var progressService: ProgressService?
    @State private var contentLoader: ContentLoader = ContentLoader.shared
    @State private var audioService: AudioService = AudioService.shared
    @State private var hapticsService: HapticsService = HapticsService.shared

    /// Background color for the root VStack. Clear on Dashboard so the cosmic
    /// background shows through the transparent tab bar. Solid on other tabs.
    private var vstackBackground: Color {
        if selectedTab == .dashboard {
            return Color.clear
        } else if themeManager.isDarkMode {
            return Color(red: 6/255, green: 5/255, blue: 20/255)
        } else {
            return Color(red: 248/255, green: 245/255, blue: 253/255)
        }
    }

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
                    Label(L.tabHome, systemImage: "house.fill")
                }
                .tag(AppTab.dashboard)

                // MARK: Journey Tab
                NavigationStack {
                    JourneyView()
                }
                .environment(\.backgroundActive, selectedTab == .journey)
                .tabItem {
                    Label(L.tabStats, systemImage: "chart.line.uptrend.xyaxis")
                }
                .tag(AppTab.journey)

                // MARK: Membership Tab
                NavigationStack {
                    MembershipView()
                }
                .environment(\.backgroundActive, selectedTab == .membership)
                .tabItem {
                    Label(L.tabPremium, systemImage: "crown.fill")
                }
                .tag(AppTab.membership)

                // MARK: Profile Tab
                NavigationStack {
                    ProfileView()
                }
                .environment(\.backgroundActive, selectedTab == .profile)
                .tabItem {
                    Label(L.tabProfile, systemImage: "person.fill")
                }
                .tag(AppTab.profile)
            }
            .tint(Color(hex: themeManager.isDarkMode ? "#a855f7" : "#7c3aed"))
            .toolbar(hideTabBar ? .hidden : .visible, for: .tabBar)
            .toolbarBackground(.visible, for: .tabBar)
            .toolbarBackground(
                themeManager.isDarkMode
                    ? Color(red: 10/255, green: 8/255, blue: 20/255).opacity(0.95)
                    : Color(red: 248/255, green: 245/255, blue: 253/255),
                for: .tabBar
            )
            .toolbarColorScheme(themeManager.isDarkMode ? .dark : .light, for: .tabBar)
        }
        .background(vstackBackground)
        .onAppear {
            setupServices()
            localization.update(from: languagePrefs)
            themeManager.syncFromProfile(profile)
            if let profile { audioService.syncFromProfile(profile) }
            // Delay to ensure UITabBar exists in the hierarchy
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.1) {
                let wantTransparent = selectedTab == .dashboard && themeManager.isDarkMode
                applyTabBarAppearance(transparent: wantTransparent)
            }
        }
        .onChange(of: selectedTab) { _, newTab in
            let wantTransparent = newTab == .dashboard && themeManager.isDarkMode
            applyTabBarAppearance(transparent: wantTransparent)
        }
        .onChange(of: themeManager.isDarkMode) { _, _ in
            let wantTransparent = selectedTab == .dashboard && themeManager.isDarkMode
            applyTabBarAppearance(transparent: wantTransparent)
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
        .onChange(of: languagePrefs.first?.sourceLanguage) { _, _ in
            localization.update(from: languagePrefs)
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

    // MARK: - Tab Bar Appearance (Direct Instance)

    /// Directly finds the actual UITabBar in the window hierarchy and
    /// sets its appearance. Bypasses UITabBar.appearance() proxy which
    /// doesn't reliably interact with SwiftUI's TabView.
    private func applyTabBarAppearance(transparent: Bool) {
        let appearance = UITabBarAppearance()

        if transparent {
            appearance.configureWithTransparentBackground()
            appearance.backgroundColor = .clear
            appearance.shadowColor = .clear
            appearance.backgroundEffect = nil
            appearance.backgroundImage = nil
        } else {
            appearance.configureWithDefaultBackground()
            if themeManager.isDarkMode {
                appearance.backgroundColor = UIColor(Color(red: 10/255, green: 8/255, blue: 20/255).opacity(0.95))
                appearance.shadowColor = UIColor(white: 1.0, alpha: 0.06)
            } else {
                // Light mode: lavender-frost white — harmonises with Caribbean gradient,
                // fully opaque so no warm bleed-through that reads as "brownish"
                appearance.backgroundColor = UIColor(Color(red: 248/255, green: 245/255, blue: 253/255))
                appearance.shadowColor = UIColor(red: 0.45, green: 0.22, blue: 0.62, alpha: 0.08)
            }
        }

        // Icon / text colors (shared)
        let normalColor: UIColor
        let selectedColor: UIColor

        if themeManager.isDarkMode {
            normalColor = UIColor(white: 0.45, alpha: 1)
            selectedColor = UIColor(Color(hex: "#a855f7"))
        } else {
            // Light mode: rich purple for selected tab
            normalColor = UIColor(white: 0.0, alpha: 0.45)
            selectedColor = UIColor(Color(hex: "#7c3aed"))
        }

        appearance.stackedLayoutAppearance.normal.iconColor = normalColor
        appearance.stackedLayoutAppearance.normal.titleTextAttributes = [
            .foregroundColor: normalColor,
        ]
        appearance.stackedLayoutAppearance.selected.iconColor = selectedColor
        appearance.stackedLayoutAppearance.selected.titleTextAttributes = [
            .foregroundColor: selectedColor,
        ]
        // Mirror for all layout variants so rotation / compact modes match
        appearance.inlineLayoutAppearance.normal.iconColor = normalColor
        appearance.inlineLayoutAppearance.normal.titleTextAttributes = [.foregroundColor: normalColor]
        appearance.inlineLayoutAppearance.selected.iconColor = selectedColor
        appearance.inlineLayoutAppearance.selected.titleTextAttributes = [.foregroundColor: selectedColor]
        appearance.compactInlineLayoutAppearance.normal.iconColor = normalColor
        appearance.compactInlineLayoutAppearance.normal.titleTextAttributes = [.foregroundColor: normalColor]
        appearance.compactInlineLayoutAppearance.selected.iconColor = selectedColor
        appearance.compactInlineLayoutAppearance.selected.titleTextAttributes = [.foregroundColor: selectedColor]

        // Apply to the actual UITabBar instance (not the proxy)
        if let tabBar = Self.findTabBar() {
            tabBar.standardAppearance = appearance
            tabBar.scrollEdgeAppearance = appearance
            // Force unselected/selected tint directly on the instance
            tabBar.unselectedItemTintColor = normalColor
            tabBar.tintColor = selectedColor

            if transparent {
                // Nuclear option: directly clear any UIKit background layers
                tabBar.backgroundImage = UIImage()
                tabBar.shadowImage = UIImage()
                tabBar.backgroundColor = .clear
                tabBar.isTranslucent = true
                tabBar.barTintColor = .clear

                // Remove the _UIBarBackground view that UIKit injects
                for subview in tabBar.subviews {
                    if String(describing: type(of: subview)).contains("Background") {
                        subview.isHidden = true
                    }
                }
            } else {
                // Restore background subviews
                for subview in tabBar.subviews {
                    if String(describing: type(of: subview)).contains("Background") {
                        subview.isHidden = false
                    }
                }
            }
        } else {
            // Fallback to proxy if the instance isn't found yet
            UITabBar.appearance().standardAppearance = appearance
            UITabBar.appearance().scrollEdgeAppearance = appearance
        }

        // Always set the proxy too — covers edge cases where UIKit
        // re-creates the tab bar or applies defaults after our instance set
        UITabBar.appearance().standardAppearance = appearance
        UITabBar.appearance().scrollEdgeAppearance = appearance
        UITabBar.appearance().unselectedItemTintColor = normalColor
        UITabBar.appearance().tintColor = selectedColor
    }

    /// Traverses the view hierarchy to find the actual UITabBar instance.
    private static func findTabBar() -> UITabBar? {
        guard let windowScene = UIApplication.shared.connectedScenes.first as? UIWindowScene,
              let window = windowScene.windows.first else { return nil }
        return findTabBar(in: window)
    }

    private static func findTabBar(in view: UIView) -> UITabBar? {
        if let tabBar = view as? UITabBar { return tabBar }
        for subview in view.subviews {
            if let found = findTabBar(in: subview) { return found }
        }
        return nil
    }
}

// MARK: - Branded Navigation Bar

/// Top navigation bar with app branding, matching React's LayoutNavbar.
/// Shows cocktail/martini icon + "LumenLingo" title + subtitle.
struct LumenLingoNavBar: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(ThemeManager.self) private var themeManager
    @Environment(\.localization) private var localization

    private var L: AppStrings { localization.strings }

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
                    .foregroundStyle(
                        LinearGradient(
                            colors: [Color(hex: "#ec4899"), Color(hex: "#d946ef"), Color(hex: "#a855f7")],
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )

                Text(L.languageMasteryEngine)
                    .font(.system(size: 10, weight: .medium))
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanPlum)
            }

            Spacer()
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 10)
        .background(
            isDark
                ? AnyShapeStyle(Color(red: 6/255, green: 5/255, blue: 20/255).opacity(0.9))
                : AnyShapeStyle(Color(red: 248/255, green: 245/255, blue: 253/255))
        )
        .overlay(
            Rectangle()
                .fill(isDark ? .white.opacity(0.05) : Color(red: 0.45, green: 0.22, blue: 0.62).opacity(0.02))
        )
        .overlay(alignment: .bottom) {
            Rectangle()
                .fill(isDark ? .white.opacity(0.06) : Color(red: 0.45, green: 0.22, blue: 0.62).opacity(0.06))
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
