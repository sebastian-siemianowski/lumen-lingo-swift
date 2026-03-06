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
        .cosmicBackground()
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
            HapticsService.light()
            navigateToGame(categoryId: item.id)
        } label: {
            ZStack {
                // Glass curvature highlight — top reflection band (React: h-[22%] bg-white/10)
                VStack {
                    RoundedRectangle(cornerRadius: 20)
                        .fill(
                            LinearGradient(
                                colors: [.white.opacity(0.12), .white.opacity(0.04), .clear],
                                startPoint: .top,
                                endPoint: .center
                            )
                        )
                        .frame(height: 60)
                    Spacer()
                }
                .clipShape(RoundedRectangle(cornerRadius: 20))

                // Grounding shadow — bottom fade (React: h-[18%] bg-black/5)
                VStack {
                    Spacer()
                    RoundedRectangle(cornerRadius: 20)
                        .fill(
                            LinearGradient(
                                colors: [.clear, .black.opacity(0.05)],
                                startPoint: .top,
                                endPoint: .bottom
                            )
                        )
                        .frame(height: 50)
                }
                .clipShape(RoundedRectangle(cornerRadius: 20))

                // Card content
                VStack(alignment: .leading, spacing: 10) {
                    // Top row: icon + favorite
                    HStack(alignment: .top) {
                        // Icon with shimmer sweep
                        ZStack {
                            RoundedRectangle(cornerRadius: 14)
                                .fill(
                                    LinearGradient(
                                        colors: categoryGradient(item),
                                        startPoint: .topLeading,
                                        endPoint: .bottomTrailing
                                    )
                                )
                                .frame(width: isGridView ? 48 : 56, height: isGridView ? 48 : 56)
                                .shadow(color: categoryGradient(item).first?.opacity(0.35) ?? .clear, radius: 10)
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

                            Image(systemName: categoryIcon(item))
                                .font(.system(size: isGridView ? 20 : 24))
                                .foregroundStyle(.white)
                                .shadow(color: .white.opacity(0.3), radius: 2)
                        }
                        .shimmer(isActive: true, duration: 4.0)

                        Spacer()

                        // Favorite button
                        Button {
                            HapticsService.light()
                            toggleFavorite(item.id)
                        } label: {
                            Image(systemName: isFavorite(item.id) ? "heart.fill" : "heart")
                                .font(.body)
                                .foregroundStyle(isFavorite(item.id) ? .pink : .white.opacity(0.4))
                                .shadow(color: isFavorite(item.id) ? .pink.opacity(0.4) : .clear, radius: 6)
                        }
                        .buttonStyle(.plain)
                    }

                    // Name
                    Text(item.name)
                        .font(isGridView ? .subheadline.bold() : .headline.bold())
                        .foregroundStyle(.white)
                        .lineLimit(2)

                    // Description — opacity 0.7 (was 0.5)
                    Text(item.description)
                        .font(isGridView ? .caption : .subheadline)
                        .foregroundStyle(.white.opacity(0.7))
                        .lineLimit(isGridView ? 2 : 3)

                    // Difficulty badge
                    difficultyBadge(item.difficulty)

                    // Premium glass progress bar (AnimatedProgressBar)
                    VStack(alignment: .leading, spacing: 4) {
                        AnimatedProgressBar(
                            progress: item.progress.percentage,
                            height: isGridView ? 5 : 6,
                            gradient: progressGradient
                        )

                        HStack {
                            Text("\(item.progress.mastered)/\(item.progress.total) mastered")
                                .font(.caption2)
                                .foregroundStyle(.white.opacity(0.5))
                            Spacer()
                            Text("\(Int(item.progress.percentage))%")
                                .font(.caption2.bold())
                                .foregroundStyle(.white.opacity(0.7))
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
                        .background(
                            Capsule()
                                .fill(.green.opacity(0.15))
                                .overlay(
                                    Capsule()
                                        .strokeBorder(.green.opacity(0.3), lineWidth: 1)
                                )
                        )
                    }
                }
                .padding(isGridView ? 14 : 16)
            }
            .background(
                GlassCardBackground(
                    cornerRadius: 20,
                    borderColor: categoryGradient(item).first ?? .white,
                    borderOpacity: 0.12,
                    tintColor: categoryGradient(item).first ?? .white
                )
            )
            .clipShape(RoundedRectangle(cornerRadius: 20))
        }
        .buttonStyle(GameCardButtonStyle())
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

    private var progressGradient: [Color] {
        switch gameType {
        case .flashCards: [Color(hex: "#667eea"), Color(hex: "#06b6d4"), Color(hex: "#0d9488")]
        case .grammar: [Color(hex: "#f093fb"), Color(hex: "#f5576c"), Color(hex: "#e11d48")]
        case .wordBuilder: [Color(hex: "#fbbf24"), Color(hex: "#f59e0b"), Color(hex: "#ea580c")]
        }
    }

    private func categoryIcon(_ item: CategoryDisplayItem) -> String {
        SFSymbolMapping.icon(for: item.icon)
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
