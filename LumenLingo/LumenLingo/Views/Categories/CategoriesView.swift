import SwiftUI
import SwiftData

// MARK: - Categories View

/// Generic category browser for all three game types with favorites,
/// progress tracking, search, and glassmorphic card grid.
struct CategoriesView: View {
    let gameType: GameType

    @Environment(\.modelContext) private var modelContext
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.dismiss) private var dismiss
    @Environment(ContentLoader.self) private var contentLoader

    @Binding var navigationPath: NavigationPath

    @Query private var languagePrefs: [LanguagePreference]
    @Query private var favorites: [FavoriteCategory]
    @Query private var masteredContent: [MasteredContent]

    @State private var categories: [CategoryDisplayItem] = []
    @State private var isLoading: Bool = true
    @State private var searchText: String = ""
    @State private var showCompletedFilter: Bool = false
    @State private var isGridView: Bool = true

    private var filteredCategories: [CategoryDisplayItem] {
        var items = categories

        // Search filter
        if !searchText.isEmpty {
            items = items.filter {
                $0.name.localizedCaseInsensitiveContains(searchText) ||
                $0.description.localizedCaseInsensitiveContains(searchText)
            }
        }

        // Hide completed filter
        if showCompletedFilter {
            items = items.filter { $0.progress.percentage < 100.0 }
        }

        // Sort: favorites first, then by order
        items.sort { a, b in
            let aFav = isFavorite(a.id)
            let bFav = isFavorite(b.id)
            if aFav != bFav { return aFav }
            return a.order < b.order
        }

        return items
    }

    var body: some View {
        VStack(spacing: 0) {
            // Header
            categoryHeader

            if isLoading {
                Spacer()
                ProgressView()
                    .scaleEffect(1.5)
                    .tint(.white)
                Spacer()
            } else if filteredCategories.isEmpty {
                Spacer()
                emptyState
                Spacer()
            } else {
                ScrollView {
                    categoryGrid
                        .padding(.horizontal, 16)
                        .padding(.top, 12)
                        .padding(.bottom, 100)
                }
            }
        }
        .cosmicBackground(
            preset: backgroundPreset,
            orbScheme: orbScheme
        )
        .navigationBarBackButtonHidden()
        .toolbar(.hidden, for: .navigationBar)
        .onAppear { loadCategories() }
    }

    // MARK: - Header

    private var categoryHeader: some View {
        VStack(spacing: 12) {
            HStack {
                Button { dismiss() } label: {
                    HStack(spacing: 6) {
                        Image(systemName: "chevron.left")
                        Text("Back")
                    }
                    .font(.subheadline)
                    .foregroundStyle(.white.opacity(0.7))
                }

                Spacer()

                Text(gameType.displayName)
                    .font(.title3.bold())
                    .foregroundStyle(.white)

                Spacer()

                // Grid/List toggle
                Button {
                    withAnimation(.spring(response: 0.3)) {
                        isGridView.toggle()
                    }
                } label: {
                    Image(systemName: isGridView ? "square.grid.2x2.fill" : "list.bullet")
                        .font(.body)
                        .foregroundStyle(.white.opacity(0.6))
                }
            }

            // Search bar
            HStack(spacing: 10) {
                Image(systemName: "magnifyingglass")
                    .foregroundStyle(.white.opacity(0.4))

                TextField("Search categories", text: $searchText)
                    .font(.subheadline)
                    .foregroundStyle(.white)
                    .autocorrectionDisabled()

                if !searchText.isEmpty {
                    Button {
                        searchText = ""
                    } label: {
                        Image(systemName: "xmark.circle.fill")
                            .foregroundStyle(.white.opacity(0.4))
                    }
                }

                // Filter completed toggle
                Button {
                    withAnimation { showCompletedFilter.toggle() }
                } label: {
                    Image(systemName: showCompletedFilter ? "eye.slash.fill" : "eye.fill")
                        .font(.subheadline)
                        .foregroundStyle(showCompletedFilter ? .yellow : .white.opacity(0.4))
                }
            }
            .padding(12)
            .background(
                RoundedRectangle(cornerRadius: 14)
                    .fill(.white.opacity(0.06))
                    .overlay(
                        RoundedRectangle(cornerRadius: 14)
                            .strokeBorder(.white.opacity(0.06), lineWidth: 1)
                    )
            )
        }
        .padding(.horizontal, 16)
        .padding(.top, 8)
        .padding(.bottom, 4)
    }

    // MARK: - Category Grid

    private var categoryGrid: some View {
        let columns = isGridView
            ? [GridItem(.flexible(), spacing: 14), GridItem(.flexible(), spacing: 14)]
            : [GridItem(.flexible())]

        return LazyVGrid(columns: columns, spacing: 14) {
            ForEach(filteredCategories, id: \.id) { category in
                categoryCard(category)
            }
        }
    }

    private func categoryCard(_ item: CategoryDisplayItem) -> some View {
        Button {
            navigateToGame(categoryId: item.id)
        } label: {
            VStack(alignment: .leading, spacing: 10) {
                // Top row: icon + favorite
                HStack {
                    // Icon
                    ZStack {
                        RoundedRectangle(cornerRadius: 12)
                            .fill(
                                LinearGradient(
                                    colors: categoryGradient(item),
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing
                                )
                            )
                            .frame(width: 44, height: 44)

                        Image(systemName: categoryIcon(item))
                            .font(.system(size: 18))
                            .foregroundStyle(.white)
                    }

                    Spacer()

                    // Favorite button
                    Button {
                        toggleFavorite(item.id)
                    } label: {
                        Image(systemName: isFavorite(item.id) ? "heart.fill" : "heart")
                            .font(.body)
                            .foregroundStyle(isFavorite(item.id) ? .pink : .white.opacity(0.4))
                    }
                    .buttonStyle(.plain)
                }

                // Name
                Text(item.name)
                    .font(.subheadline.bold())
                    .foregroundStyle(.white)
                    .lineLimit(2)

                // Description
                Text(item.description)
                    .font(.caption)
                    .foregroundStyle(.white.opacity(0.5))
                    .lineLimit(2)

                // Difficulty badge
                difficultyBadge(item.difficulty)

                // Progress bar
                VStack(alignment: .leading, spacing: 4) {
                    GeometryReader { geo in
                        ZStack(alignment: .leading) {
                            Capsule()
                                .fill(.white.opacity(0.08))
                            Capsule()
                                .fill(
                                    LinearGradient(
                                        colors: [Color(hex: "#fbbf24"), Color(hex: "#f59e0b"), Color(hex: "#ea580c")],
                                        startPoint: .leading,
                                        endPoint: .trailing
                                    )
                                )
                                .frame(width: geo.size.width * (item.progress.percentage / 100.0))
                        }
                    }
                    .frame(height: 5)

                    HStack {
                        Text("\(item.progress.mastered)/\(item.progress.total) mastered")
                            .font(.caption2)
                            .foregroundStyle(.white.opacity(0.4))
                        Spacer()
                        Text("\(Int(item.progress.percentage))%")
                            .font(.caption2.bold())
                            .foregroundStyle(.white.opacity(0.5))
                    }
                }

                // Completed badge
                if item.progress.percentage >= 100.0 {
                    HStack(spacing: 4) {
                        Image(systemName: "checkmark.circle.fill")
                            .font(.caption2)
                        Text("Completed")
                            .font(.caption2.bold())
                    }
                    .foregroundStyle(.green)
                    .padding(.horizontal, 8)
                    .padding(.vertical, 3)
                    .background(Capsule().fill(.green.opacity(0.1)))
                }
            }
            .padding(14)
            .background(
                RoundedRectangle(cornerRadius: 20)
                    .fill(.ultraThinMaterial)
                    .overlay(
                        RoundedRectangle(cornerRadius: 20)
                            .strokeBorder(.white.opacity(colorScheme == .dark ? 0.08 : 0.15), lineWidth: 1)
                    )
            )
            .shadow(color: .black.opacity(0.1), radius: 15, y: 5)
        }
        .buttonStyle(.plain)
    }

    private func difficultyBadge(_ difficulty: Difficulty) -> some View {
        HStack(spacing: 4) {
            Image(systemName: difficulty.icon)
                .font(.system(size: 10))
            Text(difficulty.rawValue.capitalized)
                .font(.caption2.bold())
            ForEach(0..<difficulty.starCount, id: \.self) { _ in
                Image(systemName: "star.fill")
                    .font(.system(size: 7))
            }
        }
        .foregroundStyle(difficulty.color)
        .padding(.horizontal, 8)
        .padding(.vertical, 3)
        .background(Capsule().fill(difficulty.color.opacity(0.1)))
    }

    // MARK: - Empty State

    private var emptyState: some View {
        VStack(spacing: 16) {
            Image(systemName: "tray")
                .font(.system(size: 48))
                .foregroundStyle(.white.opacity(0.3))
            Text("No categories found")
                .font(.headline)
                .foregroundStyle(.white.opacity(0.6))
            if !searchText.isEmpty {
                Text("Try a different search term")
                    .font(.subheadline)
                    .foregroundStyle(.white.opacity(0.4))
            }
        }
    }

    // MARK: - Logic

    private func loadCategories() {
        let langPref = languagePrefs.first
        let source = langPref?.sourceLanguage ?? SupportedLanguage.english.rawValue
        let target = langPref?.targetLanguage ?? SupportedLanguage.spanish.rawValue
        let progressService = ProgressService(modelContext: modelContext)

        Task {
            switch gameType {
            case .flashCards:
                let cats = await contentLoader.loadFlashcardCategories(source: source, target: target)
                categories = cats.enumerated().map { index, cat in
                    let progress = progressService.categoryProgress(
                        gameType: .flashCards, category: cat.id, totalItems: cat.items.count, source: source, target: target
                    )
                    return CategoryDisplayItem(
                        id: cat.id,
                        name: cat.name,
                        description: cat.description,
                        icon: cat.icon,
                        difficulty: cat.difficulty,
                        itemCount: cat.items.count,
                        progress: progress,
                        order: index
                    )
                }
            case .grammar:
                let cats = await contentLoader.loadGrammarCategories(source: source, target: target)
                categories = cats.enumerated().map { index, cat in
                    let progress = progressService.categoryProgress(
                        gameType: .grammar, category: cat.id, totalItems: cat.items.count, source: source, target: target
                    )
                    return CategoryDisplayItem(
                        id: cat.id,
                        name: cat.name,
                        description: cat.description,
                        icon: cat.icon,
                        difficulty: cat.difficulty,
                        itemCount: cat.items.count,
                        progress: progress,
                        order: index
                    )
                }
            case .wordBuilder:
                let cats = await contentLoader.loadWordBuilderCategories(source: source, target: target)
                categories = cats.enumerated().map { index, cat in
                    let progress = progressService.categoryProgress(
                        gameType: .wordBuilder, category: cat.id, totalItems: cat.items.count, source: source, target: target
                    )
                    return CategoryDisplayItem(
                        id: cat.id,
                        name: cat.name,
                        description: cat.description,
                        icon: cat.icon,
                        difficulty: cat.difficulty,
                        itemCount: cat.items.count,
                        progress: progress,
                        order: index
                    )
                }
            }
            isLoading = false
        }
    }

    private func navigateToGame(categoryId: String) {
        switch gameType {
        case .flashCards:
            navigationPath.append(AppRoute.flashcardsGame(categoryId: categoryId))
        case .grammar:
            navigationPath.append(AppRoute.grammarGame(categoryId: categoryId))
        case .wordBuilder:
            navigationPath.append(AppRoute.wordBuilderGame(categoryId: categoryId))
        }
    }

    private func isFavorite(_ categoryId: String) -> Bool {
        let gameTypeRaw = gameType.rawValue
        return favorites.contains { $0.categoryKey == categoryId && $0.gameType == gameTypeRaw }
    }

    private func toggleFavorite(_ categoryId: String) {
        let progressService = ProgressService(modelContext: modelContext)
        let langPref = languagePrefs.first
        progressService.toggleFavorite(
            gameType: gameType,
            categoryKey: categoryId,
            source: langPref?.sourceLanguage ?? "english",
            target: langPref?.targetLanguage ?? "spanish"
        )
    }

    private func categoryGradient(_ item: CategoryDisplayItem) -> [Color] {
        switch gameType {
        case .flashCards: [Color(hex: "#667eea"), Color(hex: "#06b6d4")]
        case .grammar: [Color(hex: "#f093fb"), Color(hex: "#f5576c")]
        case .wordBuilder: [Color(hex: "#fbbf24"), Color(hex: "#f97316")]
        }
    }

    private func categoryIcon(_ item: CategoryDisplayItem) -> String {
        SFSymbolMapping.icon(for: item.icon)
    }

    private var backgroundPreset: NebulaPreset {
        switch gameType {
        case .flashCards: .celestialLagoon
        case .grammar: .solarAurora
        case .wordBuilder: .starburstRing
        }
    }

    private var orbScheme: BreathingOrbScheme {
        switch gameType {
        case .flashCards: .madridSunrise
        case .grammar: .warsawTwilight
        case .wordBuilder: .lisboaGoldenHour
        }
    }
}

// MARK: - Difficulty Helpers

extension Difficulty {
    var icon: String {
        switch self {
        case .beginner: "leaf.fill"
        case .intermediate: "flame.fill"
        case .advanced: "medal.fill"
        }
    }

    var starCount: Int {
        switch self {
        case .beginner: 1
        case .intermediate: 2
        case .advanced: 3
        }
    }
}
