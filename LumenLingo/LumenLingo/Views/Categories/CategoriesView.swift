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
    @State private var showFavoritesOnly: Bool = false
    @State private var isGridView: Bool = true
    @State private var currentPage: Int = 0

    /// Pre-computed set of favorite category IDs for O(1) lookups.
    private var favoriteIds: Set<String> {
        let gameTypeRaw = gameType.rawValue
        return Set(favorites.filter { $0.gameType == gameTypeRaw }.map { $0.categoryKey })
    }

    private var filteredCategories: [CategoryDisplayItem] {
        let favIds = favoriteIds
        var items = categories

        // Favorites-only filter
        if showFavoritesOnly {
            items = items.filter { favIds.contains($0.id) }
        }

        // Search filter
        if !searchText.isEmpty {
            let query = searchText.lowercased()
            items = items.filter {
                $0.name.lowercased().contains(query) ||
                $0.description.lowercased().contains(query)
            }
        }

        // Hide completed filter
        if showCompletedFilter {
            items = items.filter { $0.progress.percentage < 100.0 }
        }

        // Sort: favorites first, then by order
        items.sort { a, b in
            let aFav = favIds.contains(a.id)
            let bFav = favIds.contains(b.id)
            if aFav != bFav { return aFav }
            return a.order < b.order
        }

        return items
    }

    /// Items per page: 6 for grid (2 columns × 3 rows), 4 for list.
    private var itemsPerPage: Int { isGridView ? 6 : 4 }

    private var totalPages: Int {
        max(1, Int(ceil(Double(filteredCategories.count) / Double(itemsPerPage))))
    }

    private var paginatedCategories: [CategoryDisplayItem] {
        let start = currentPage * itemsPerPage
        guard start < filteredCategories.count else { return [] }
        let end = min(start + itemsPerPage, filteredCategories.count)
        return Array(filteredCategories[start..<end])
    }

    private var paginationAccentColors: [Color] {
        switch gameType {
        case .flashCards: [Color(hex: "#667eea"), Color(hex: "#06b6d4")]
        case .grammar: [Color(hex: "#f093fb"), Color(hex: "#f5576c")]
        case .wordBuilder: [Color(hex: "#fbbf24"), Color(hex: "#f97316")]
        }
    }

    var body: some View {
        ZStack(alignment: .bottom) {
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
                            .padding(.bottom, 130)
                    }
                }
            }

            // Floating liquid glass pagination panel
            LiquidGlassPagination(
                currentPage: currentPage,
                totalPages: totalPages,
                accentColors: paginationAccentColors
            ) { newPage in
                withAnimation(.spring(response: 0.35, dampingFraction: 0.8)) {
                    currentPage = newPage
                }
            }
            .padding(.bottom, 16)
        }
        .cosmicBackground()
        .navigationBarBackButtonHidden()
        .toolbar(.hidden, for: .navigationBar)
        .toolbar(.hidden, for: .tabBar)
        .onAppear { loadCategories() }
        .onChange(of: searchText) { _, _ in
            withAnimation { currentPage = 0 }
        }
        .onChange(of: showCompletedFilter) { _, _ in
            withAnimation(.smooth(duration: 0.3)) { currentPage = 0 }
        }
        .onChange(of: showFavoritesOnly) { _, _ in
            withAnimation(.smooth(duration: 0.3)) { currentPage = 0 }
        }
        .onChange(of: isGridView) { _, _ in
            withAnimation(.smooth(duration: 0.3)) { currentPage = 0 }
        }
        .simultaneousGesture(
            DragGesture(minimumDistance: 40, coordinateSpace: .local)
                .onEnded { value in
                    let horizontal = value.translation.width
                    let vertical = abs(value.translation.height)
                    // Only paginate on predominantly horizontal swipes
                    guard abs(horizontal) > vertical * 1.5 else { return }
                    if horizontal < -40, currentPage < totalPages - 1 {
                        withAnimation(.spring(response: 0.35, dampingFraction: 0.8)) {
                            currentPage += 1
                        }
                        HapticsService.light()
                    } else if horizontal > 40, currentPage > 0 {
                        withAnimation(.spring(response: 0.35, dampingFraction: 0.8)) {
                            currentPage -= 1
                        }
                        HapticsService.light()
                    }
                }
        )
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

                // Filter: favorites only
                Button {
                    withAnimation(.smooth(duration: 0.35)) {
                        showFavoritesOnly.toggle()
                    }
                } label: {
                    Image(systemName: showFavoritesOnly ? "heart.fill" : "heart")
                        .font(.subheadline)
                        .foregroundStyle(showFavoritesOnly ? .pink : .white.opacity(0.4))
                        .contentTransition(.symbolEffect(.replace))
                }

                // Filter completed toggle
                Button {
                    withAnimation(.smooth(duration: 0.35)) {
                        showCompletedFilter.toggle()
                    }
                } label: {
                    Image(systemName: showCompletedFilter ? "eye.slash.fill" : "eye.fill")
                        .font(.subheadline)
                        .foregroundStyle(showCompletedFilter ? .yellow : .white.opacity(0.4))
                        .contentTransition(.symbolEffect(.replace))
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

    /// Stable identity for tracking which items are visible, driving add/remove animation.
    private var filteredIds: [String] { paginatedCategories.map { $0.id } }

    private var categoryGrid: some View {
        let columns = isGridView
            ? [GridItem(.flexible(), spacing: 14), GridItem(.flexible(), spacing: 14)]
            : [GridItem(.flexible())]

        return LazyVGrid(columns: columns, spacing: 14) {
            ForEach(Array(paginatedCategories.enumerated()), id: \.element.id) { index, category in
                categoryCard(category)
                    .transition(
                        .asymmetric(
                            insertion: .opacity.combined(with: .scale(scale: 0.92)).combined(with: .offset(y: 12)),
                            removal: .opacity.combined(with: .scale(scale: 0.94))
                        )
                    )
            }
        }
        .animation(.smooth(duration: 0.4), value: filteredIds)
        .animation(
            .spring(response: 0.4, dampingFraction: 0.78),
            value: currentPage
        )
    }

    private func categoryCard(_ item: CategoryDisplayItem) -> some View {
        let colors = categoryGradient(item)
        let fav = isFavorite(item.id)
        let pct = item.progress.percentage
        let completed = pct >= 100.0

        return Button {
            HapticsService.light()
            navigateToGame(categoryId: item.id)
        } label: {
            VStack(alignment: .leading, spacing: isGridView ? 8 : 10) {
                // Top row: icon + item count + favorite
                HStack(alignment: .top, spacing: 8) {
                    LiquidGlassIconContainer(
                        systemName: categoryIcon(item),
                        gradient: colors,
                        size: isGridView ? 40 : 48
                    )

                    // Item count pill
                    Text("\(item.itemCount) items")
                        .font(.system(size: 10, weight: .semibold, design: .rounded))
                        .foregroundStyle(.white.opacity(0.55))
                        .padding(.horizontal, 7)
                        .padding(.vertical, 3)
                        .background(Capsule().fill(.white.opacity(0.08)))

                    Spacer()

                    // Favorite button
                    Button {
                        withAnimation(.spring(response: 0.35, dampingFraction: 0.5)) {
                            HapticsService.light()
                            toggleFavorite(item.id)
                        }
                    } label: {
                        Image(systemName: fav ? "heart.fill" : "heart")
                            .font(.system(size: 15, weight: .medium))
                            .foregroundStyle(fav ? .pink : .white.opacity(0.35))
                            .scaleEffect(fav ? 1.15 : 1.0)
                            .frame(width: 32, height: 32)
                            .contentShape(Circle())
                    }
                    .buttonStyle(.plain)
                }

                // Category name
                Text(item.name)
                    .font(isGridView ? .subheadline.bold() : .headline.bold())
                    .foregroundStyle(.white)
                    .lineLimit(isGridView ? 1 : 2)

                // Description
                Text(item.description)
                    .font(isGridView ? .caption : .subheadline)
                    .foregroundStyle(.white.opacity(0.55))
                    .lineLimit(isGridView ? 2 : 3)
                    .frame(maxHeight: .infinity, alignment: .top)

                // Bottom row: difficulty + progress
                HStack(alignment: .center, spacing: 8) {
                    difficultyBadge(item.difficulty)

                    Spacer()

                    if isGridView {
                        // Compact circular progress ring for grid
                        circularProgress(pct: pct, completed: completed, colors: colors)
                    } else {
                        // Full linear progress for list
                        VStack(alignment: .trailing, spacing: 3) {
                            LiquidProgressBar(
                                progress: pct,
                                height: 5,
                                gradient: progressGradient
                            )
                            .frame(width: 120)

                            progressLabel(pct: pct, mastered: item.progress.mastered, total: item.progress.total, completed: completed)
                        }
                    }
                }
            }
            .padding(isGridView ? 14 : 16)
            .frame(minHeight: isGridView ? 200 : 0)
            .liquidGlassCard(
                cornerRadius: 22,
                accentColor: colors.first ?? .blue
            )
        }
        .buttonStyle(LiquidCardButtonStyle(accentColor: colors.first ?? .white))
        .accessibilityLabel("\(item.name), \(item.difficulty.rawValue), \(Int(pct))% complete")
        .accessibilityHint("Double tap to start")
    }

    // MARK: - Circular Progress (Grid Cards)

    private func circularProgress(pct: Double, completed: Bool, colors: [Color]) -> some View {
        ZStack {
            // Track
            Circle()
                .stroke(.white.opacity(0.08), lineWidth: 3)

            // Fill arc
            Circle()
                .trim(from: 0, to: min(pct / 100.0, 1.0))
                .stroke(
                    completed
                        ? AnyShapeStyle(.green)
                        : AnyShapeStyle(LinearGradient(colors: colors, startPoint: .topLeading, endPoint: .bottomTrailing)),
                    style: StrokeStyle(lineWidth: 3, lineCap: .round)
                )
                .rotationEffect(.degrees(-90))

            // Centre label
            if completed {
                Image(systemName: "checkmark")
                    .font(.system(size: 10, weight: .bold))
                    .foregroundStyle(.green)
            } else {
                Text("\(Int(pct))")
                    .font(.system(size: 9, weight: .bold, design: .rounded))
                    .foregroundStyle(.white.opacity(0.7))
            }
        }
        .frame(width: 34, height: 34)
    }

    // MARK: - Progress Label (List Cards)

    private func progressLabel(pct: Double, mastered: Int, total: Int, completed: Bool) -> some View {
        HStack(spacing: 4) {
            if completed {
                Image(systemName: "checkmark.seal.fill")
                    .font(.system(size: 9))
                Text("Complete")
                    .font(.caption2.bold())
            } else {
                Text("\(mastered)/\(total)")
                    .font(.caption2)
                    .foregroundStyle(.white.opacity(0.4))
                Text("·")
                    .foregroundStyle(.white.opacity(0.25))
                Text("\(Int(pct))%")
                    .font(.caption2.bold())
            }
        }
        .foregroundStyle(completed ? .green : .white.opacity(0.6))
    }

    private func difficultyBadge(_ difficulty: Difficulty) -> some View {
        HStack(spacing: 3) {
            ForEach(0..<difficulty.starCount, id: \.self) { _ in
                Image(systemName: "star.fill")
                    .font(.system(size: 7))
            }
            Text(difficulty.rawValue.capitalized)
                .font(.system(size: 10, weight: .semibold, design: .rounded))
        }
        .foregroundStyle(difficulty.color)
        .padding(.horizontal, 8)
        .padding(.vertical, 4)
        .background(
            Capsule()
                .fill(difficulty.color.opacity(0.12))
                .overlay(Capsule().strokeBorder(difficulty.color.opacity(0.15), lineWidth: 0.5))
        )
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
        favoriteIds.contains(categoryId)
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
