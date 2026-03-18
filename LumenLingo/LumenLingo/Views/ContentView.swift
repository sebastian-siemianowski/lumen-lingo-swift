import SwiftUI
import SwiftData

// MARK: - Content View (Root Navigation)

/// Root view orchestrating tab-based navigation.
/// Matches React's 4-tab layout: Dashboard, Journey, Membership, Profile.
/// Games are accessed from Dashboard game cards (no separate Games tab).
struct ContentView: View {
    @Environment(\.modelContext) private var modelContext
    @Environment(ThemeManager.self) private var themeManager
    @Environment(TierManager.self) private var tierManager
    @Environment(PracticeTimeTracker.self) private var practiceTimeTracker
    @Environment(\.localization) private var localization

    @Query private var profiles: [UserProfile]
    @Query private var languagePrefs: [LanguagePreference]
    private var profile: UserProfile? { profiles.first }
    private var L: AppStrings { localization.strings }

    @State private var selectedTab: AppTab = .dashboard
    @State private var hideTabBar: Bool = false
    @State private var navigationPath = NavigationPath()
    @State private var showTrialEnded = false
    @State private var showTierOnboarding = false

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
            return .caribbeanCanvas
        }
    }

    var body: some View {
        VStack(spacing: 0) {
            // Branded top bar (hidden during games)
            if !hideTabBar {
                LumenLingoNavBar()
            }

            networkSimulationBanner

            TabView(selection: $selectedTab) {
                // MARK: Dashboard Tab
                NavigationStack(path: $navigationPath) {
                    VStack(spacing: 0) {
                        OfflineBanner()

                        DashboardView(
                            hideTabBar: $hideTabBar,
                            navigationPath: $navigationPath
                        )
                    }
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
            .toolbar(
                (hideTabBar || !themeManager.isDarkMode) ? .hidden : .visible,
                for: .tabBar
            )
            .toolbarBackground(.visible, for: .tabBar)
            .toolbarBackground(
                themeManager.isDarkMode
                    ? Color(red: 10/255, green: 8/255, blue: 20/255).opacity(0.95)
                    : Color(red: 248/255, green: 245/255, blue: 253/255),
                for: .tabBar
            )
            .toolbarColorScheme(themeManager.isDarkMode ? .dark : .light, for: .tabBar)

            // Premium Caribbean tab bar (light mode only)
            if !hideTabBar && !themeManager.isDarkMode {
                CaribbeanTabBar(selectedTab: $selectedTab)
            }
        }
        .background(vstackBackground)
        .onAppear {
            setupServices()
            localization.update(from: languagePrefs)
            themeManager.syncFromProfile(profile)
            tierManager.syncFromProfile(profile)
            tierManager.validateState(profile: profile)
            tierManager.pullFromCloud(profile: profile)
            tierManager.startCloudSync(profile: profile)
            // Check for trial expiration on app launch
            if tierManager.checkTrialExpiration(profile: profile) {
                showTrialEnded = true
            }
            // Show tier onboarding on first launch
            if !UserDefaults.standard.bool(forKey: "hasSeenTierOnboarding") {
                showTierOnboarding = true
            }
            if let profile {
                audioService.syncFromProfile(profile)
                hapticsService.syncFromProfile(profile)
            }
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.1) {
                let wantTransparent = selectedTab == .dashboard && themeManager.isDarkMode
                applyTabBarAppearance(transparent: wantTransparent)
            }
        }
        .onChange(of: selectedTab) { _, newTab in
            AudioService.shared.playTabSwitch()
            HapticsService.shared.tabSwitch()
            let wantTransparent = newTab == .dashboard && themeManager.isDarkMode
            applyTabBarAppearance(transparent: wantTransparent)
        }
        .onChange(of: themeManager.isDarkMode) { _, _ in
            let wantTransparent = selectedTab == .dashboard && themeManager.isDarkMode
            UIView.animate(withDuration: 0.55, delay: 0, options: .curveEaseInOut) {
                applyTabBarAppearance(transparent: wantTransparent)
            }
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
        .onChange(of: tierManager.currentTier) { _, _ in
            validateActiveLanguagePair()
        }
        .environment(audioService)
        .environment(hapticsService)
        .environment(contentLoader)
        .environment(practiceTimeTracker)
        .fullScreenCover(isPresented: $showTrialEnded) {
            TrialEndedView()
        }
        .fullScreenCover(isPresented: $showTierOnboarding) {
            TierOnboardingFlow()
        }
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
            FlashCardsView(categoryId: categoryId, hideTabBar: $hideTabBar, navigationPath: $navigationPath)
        case .grammarGame(let categoryId):
            GrammarView(categoryId: categoryId, hideTabBar: $hideTabBar, navigationPath: $navigationPath)
        case .wordBuilderGame(let categoryId):
            WordBuilderView(categoryId: categoryId, hideTabBar: $hideTabBar, navigationPath: $navigationPath)
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

    // MARK: - Language Pair Validation

    /// When the tier changes (downgrade), validate that the active language pair
    /// is still unlocked. If not, switch to the first unlocked pair.
    private func validateActiveLanguagePair() {
        guard let pref = languagePrefs.first else { return }
        let currentPair = LanguagePair(
            source: pref.sourceLanguageEnum,
            target: pref.targetLanguageEnum
        )
        guard !tierManager.isLanguagePairUnlocked(currentPair) else { return }

        // Switch to the first unlocked pair
        if let fallback = tierManager.unlockedLanguagePairs().first {
            pref.sourceLanguage = fallback.source.rawValue
            pref.targetLanguage = fallback.target.rawValue
            NotificationCenter.default.post(
                name: .languagePairAutoSwitched,
                object: nil,
                userInfo: [
                    "oldPair": currentPair.displayName,
                    "newPair": fallback.displayName,
                    "requiredTier": currentPair.minimumTier.displayName,
                ]
            )
        }
    }

    // MARK: - Network Simulation Banner

    @ViewBuilder
    private var networkSimulationBanner: some View {
        #if DEBUG
        if DebugNetworkController.shared.isSimulating {
            HStack(spacing: 6) {
                Image(systemName: "antenna.radiowaves.left.and.right.slash")
                    .font(.system(size: 10, weight: .bold))
                Text(DebugNetworkController.shared.simulationMode.bannerLabel)
                    .font(.system(size: 10, weight: .heavy, design: .monospaced))
                    .tracking(0.5)
            }
            .foregroundStyle(.white)
            .frame(maxWidth: .infinity)
            .padding(.vertical, 4)
            .background(.red.opacity(0.85))
        }
        #endif
    }
}

// MARK: - Caribbean Tab Bar (Light Mode)

/// Premium custom tab bar for light mode with Caribbean ocean styling.
/// Features gradient icons, underline glow capsule with matchedGeometryEffect,
/// and warm turquoise aesthetics — frosted glass shelf the icons sit on.
struct CaribbeanTabBar: View {
    @Binding var selectedTab: AppTab
    @Namespace private var tabNamespace
    @Environment(\.localization) private var localization

    private var L: AppStrings { localization.strings }

    private var tabs: [(tab: AppTab, icon: String, label: String)] {
        [
            (.dashboard, "house.fill", L.tabHome),
            (.journey, "chart.line.uptrend.xyaxis", L.tabStats),
            (.membership, "crown.fill", L.tabPremium),
            (.profile, "person.fill", L.tabProfile),
        ]
    }

    var body: some View {
        VStack(spacing: 0) {
            // Layer 2: Top-edge luminance line — crisp light catch simulating glass edge
            Rectangle()
                .fill(Color.white.opacity(0.45))
                .frame(height: 0.5)

            // Layer 3: Inner top glow — soft light bleeding down from the edge
            Rectangle()
                .fill(
                    LinearGradient(
                        colors: [Color.white.opacity(0.15), Color.clear],
                        startPoint: .top,
                        endPoint: .bottom
                    )
                )
                .frame(height: 8)

            // Tab buttons row
            HStack(spacing: 0) {
                ForEach(tabs, id: \.tab) { item in
                    caribbeanTabButton(tab: item.tab, icon: item.icon, label: item.label)
                }
            }
            .padding(.top, 2)
            .padding(.bottom, 6)
        }
        .padding(.bottom, bottomSafeArea)
        .background {
            ZStack {
                // Layer 0: Warm sand-white base (nav/tab bar surface)
                Color.caribbeanSurface

                // Layer 1: Caribbean ocean tint — subtle turquoise undertone
                LinearGradient(
                    stops: [
                        .init(color: Color(hex: "0EA5E9").opacity(0.04), location: 0),
                        .init(color: Color(hex: "06B6D4").opacity(0.03), location: 0.5),
                        .init(color: Color(hex: "14B8A6").opacity(0.04), location: 1),
                    ],
                    startPoint: .leading,
                    endPoint: .trailing
                )
            }
        }
        // Shadow goes UP — bar is bottom-anchored
        .shadow(color: Color(hex: "0EA5E9").opacity(0.08), radius: 12, y: -4)
        .shadow(color: Color(hex: "06B6D4").opacity(0.03), radius: 4, y: -2)
        .animation(.spring(response: 0.35, dampingFraction: 0.7), value: selectedTab)
    }

    @ViewBuilder
    private func caribbeanTabButton(tab: AppTab, icon: String, label: String) -> some View {
        let isSelected = selectedTab == tab

        Button {
            selectedTab = tab
        } label: {
            VStack(spacing: 3) {
                // Icon with ocean shimmer glow
                ZStack {
                    if isSelected {
                        Circle()
                            .fill(LinearGradient.caribbeanGradientOcean)
                            .opacity(0.12)
                            .blur(radius: 4)
                            .frame(width: 32, height: 32)
                    }

                    Image(systemName: icon)
                        .font(.system(size: 20, weight: isSelected ? .semibold : .regular))
                        .foregroundStyle(
                            isSelected
                                ? AnyShapeStyle(LinearGradient.caribbeanGradientOcean)
                                : AnyShapeStyle(Color.caribbeanMist)
                        )
                }
                .frame(height: 28)

                // Label
                Text(label)
                    .font(.system(size: 10, weight: isSelected ? .medium : .regular))
                    .tracking(isSelected ? 0.3 : 0)
                    .foregroundStyle(isSelected ? Color.caribbeanInk : Color.caribbeanMist)

                // Underline glow capsule — slides between tabs
                if isSelected {
                    Capsule()
                        .fill(LinearGradient.caribbeanGradientOcean)
                        .frame(width: 28, height: 3)
                        .shadow(color: Color(hex: "0EA5E9").opacity(0.35), radius: 6, y: 1)
                        .matchedGeometryEffect(id: "caribbeanActiveTab", in: tabNamespace)
                } else {
                    Color.clear
                        .frame(width: 28, height: 3)
                }
            }
            .frame(maxWidth: .infinity)
            .contentShape(Rectangle())
        }
        .buttonStyle(.plain)
        .accessibilityLabel(label)
        .accessibilityAddTraits(isSelected ? .isSelected : [])
    }

    private var bottomSafeArea: CGFloat {
        guard let windowScene = UIApplication.shared.connectedScenes
            .first as? UIWindowScene,
            let window = windowScene.windows.first else { return 0 }
        return window.safeAreaInsets.bottom
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
                    .shadow(
                        color: isDark ? .clear : Color.caribbeanPlum.opacity(0.10),
                        radius: 8
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
                : AnyShapeStyle(Color.caribbeanSurface)
        )
        .overlay(
            isDark
                ? AnyView(
                    Rectangle()
                        .fill(.white.opacity(0.05))
                )
                : AnyView(
                    // Caribbean ocean tint — subtle turquoise wash
                    LinearGradient(
                        stops: [
                            .init(color: Color(hex: "0EA5E9").opacity(0.03), location: 0),
                            .init(color: Color(hex: "06B6D4").opacity(0.02), location: 1),
                        ],
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
        )
        .overlay(alignment: .bottom) {
            if isDark {
                Rectangle()
                    .fill(.white.opacity(0.06))
                    .frame(height: 0.5)
            } else {
                // Turquoise gradient horizon line + glow
                VStack(spacing: 0) {
                    Rectangle()
                        .fill(LinearGradient.caribbeanGradientOcean.opacity(0.15))
                        .frame(height: 1)
                    Rectangle()
                        .fill(LinearGradient.caribbeanGradientOcean.opacity(0.06))
                        .frame(height: 4)
                        .blur(radius: 4)
                }
            }
        }
        .animation(.smooth(duration: 0.65), value: isDark)
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
