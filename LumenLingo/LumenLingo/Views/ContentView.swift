import SwiftUI
import SwiftData

// MARK: - Content View (Root Navigation)

/// Root view orchestrating tab-based navigation.
/// Mirrors the React Router layout with 5 primary tabs.
struct ContentView: View {
    @Environment(\.modelContext) private var modelContext

    @State private var selectedTab: AppTab = .dashboard
    @State private var hideTabBar: Bool = false
    @State private var navigationPath = NavigationPath()

    // Services (shared across all views)
    @State private var progressService: ProgressService?
    @State private var contentLoader: ContentLoader = ContentLoader.shared
    @State private var audioService: AudioService = AudioService.shared
    @State private var hapticsService: HapticsService = HapticsService.shared

    var body: some View {
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
            .tabItem {
                Label("Home", systemImage: "house.fill")
            }
            .tag(AppTab.dashboard)

            // MARK: Journey Tab
            NavigationStack {
                JourneyView()
            }
            .tabItem {
                Label("Journey", systemImage: "chart.line.uptrend.xyaxis")
            }
            .tag(AppTab.journey)

            // MARK: Games Tab (placeholder center)
            NavigationStack {
                GamesHubView(navigationPath: $navigationPath, selectedTab: $selectedTab)
            }
            .tabItem {
                Label("Games", systemImage: "gamecontroller.fill")
            }
            .tag(AppTab.games)

            // MARK: Membership Tab
            NavigationStack {
                MembershipView()
            }
            .tabItem {
                Label("Premium", systemImage: "crown.fill")
            }
            .tag(AppTab.membership)

            // MARK: Profile Tab
            NavigationStack {
                ProfileView()
            }
            .tabItem {
                Label("Profile", systemImage: "person.fill")
            }
            .tag(AppTab.profile)
        }
        .tint(Color.cosmicAccent)
        .toolbar(hideTabBar ? .hidden : .visible, for: .tabBar)
        .onAppear {
            setupServices()
            configureTabBarAppearance()
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
            progressService = ProgressService(modelContext: modelContext)
        }
    }

    private func configureTabBarAppearance() {
        let appearance = UITabBarAppearance()
        appearance.configureWithDefaultBackground()
        appearance.backgroundColor = UIColor(Color(red: 10/255, green: 8/255, blue: 20/255).opacity(0.95))

        appearance.stackedLayoutAppearance.normal.iconColor = UIColor(white: 0.5, alpha: 1)
        appearance.stackedLayoutAppearance.normal.titleTextAttributes = [
            .foregroundColor: UIColor(white: 0.5, alpha: 1),
        ]
        appearance.stackedLayoutAppearance.selected.iconColor = UIColor(Color.cosmicAccent)
        appearance.stackedLayoutAppearance.selected.titleTextAttributes = [
            .foregroundColor: UIColor(Color.cosmicAccent),
        ]

        UITabBar.appearance().standardAppearance = appearance
        UITabBar.appearance().scrollEdgeAppearance = appearance
    }
}

// MARK: - App Tab Enum

enum AppTab: Hashable {
    case dashboard
    case journey
    case games
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

// MARK: - Games Hub View

/// Quick-access hub for the three game types.
struct GamesHubView: View {
    @Binding var navigationPath: NavigationPath
    @Binding var selectedTab: AppTab

    var body: some View {
        ScrollView {
            VStack(spacing: 20) {
                Text("Choose a Game")
                    .font(.largeTitle.bold())
                    .foregroundStyle(.white)
                    .padding(.top, 30)

                gameCard(
                    title: "Flash Cards",
                    subtitle: "Swipe to learn vocabulary",
                    icon: "rectangle.on.rectangle.angled",
                    gradient: [Color(hex: "#667eea"), Color(hex: "#764ba2")],
                    route: .flashcardsCategories
                )

                gameCard(
                    title: "Grammar",
                    subtitle: "Master sentence structure",
                    icon: "text.book.closed.fill",
                    gradient: [Color(hex: "#f093fb"), Color(hex: "#f5576c")],
                    route: .grammarCategories
                )

                gameCard(
                    title: "Word Builder",
                    subtitle: "Construct words letter by letter",
                    icon: "textformat.abc",
                    gradient: [Color(hex: "#4facfe"), Color(hex: "#00f2fe")],
                    route: .wordBuilderCategories
                )
            }
            .padding(.horizontal)
            .padding(.bottom, 100)
        }
        .cosmicBackground(
            preset: .spiralHaloGalaxy,
            orbScheme: .barcelonaNights
        )
    }

    private func gameCard(
        title: String,
        subtitle: String,
        icon: String,
        gradient: [Color],
        route: AppRoute
    ) -> some View {
        Button {
            selectedTab = .dashboard
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.1) {
                navigationPath.append(route)
            }
        } label: {
            HStack(spacing: 16) {
                Image(systemName: icon)
                    .font(.system(size: 32))
                    .foregroundStyle(.white)
                    .frame(width: 60, height: 60)
                    .background(
                        LinearGradient(colors: gradient, startPoint: .topLeading, endPoint: .bottomTrailing)
                            .opacity(0.3)
                    )
                    .clipShape(RoundedRectangle(cornerRadius: 14))

                VStack(alignment: .leading, spacing: 4) {
                    Text(title)
                        .font(.title3.bold())
                        .foregroundStyle(.white)
                    Text(subtitle)
                        .font(.subheadline)
                        .foregroundStyle(.white.opacity(0.7))
                }

                Spacer()

                Image(systemName: "chevron.right")
                    .foregroundStyle(.white.opacity(0.5))
            }
            .padding(20)
            .background(
                RoundedRectangle(cornerRadius: 20)
                    .fill(.ultraThinMaterial)
                    .overlay(
                        RoundedRectangle(cornerRadius: 20)
                            .strokeBorder(.white.opacity(0.1), lineWidth: 1)
                    )
            )
        }
        .buttonStyle(.plain)
    }
}
