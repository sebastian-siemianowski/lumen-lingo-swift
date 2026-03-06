import Foundation
import SwiftData

// MARK: - Category ViewModel

/// Shared category selection logic for all 3 game types.
/// Port of useCategoryData.jsx.
@Observable
final class CategoryViewModel {
    var categories: [CategoryDisplayItem] = []
    var isLoading: Bool = true
    var hideCompleted: Bool = false
    var searchText: String = ""

    let gameType: GameType
    private let progressService: ProgressService
    private var source: String
    private var target: String

    init(gameType: GameType, source: String, target: String, progressService: ProgressService) {
        self.gameType = gameType
        self.source = source
        self.target = target
        self.progressService = progressService
        self.hideCompleted = UserDefaults.standard.bool(forKey: "\(gameType.rawValue)_hide_completed")
    }

    var filteredCategories: [CategoryDisplayItem] {
        var result = categories

        if hideCompleted {
            result = result.filter { !$0.progress.isComplete }
        }

        if !searchText.isEmpty {
            result = result.filter {
                $0.name.localizedCaseInsensitiveContains(searchText) ||
                $0.description.localizedCaseInsensitiveContains(searchText)
            }
        }

        // Sort: favorites first
        result.sort { ($0.isFavorite ? 0 : 1) < ($1.isFavorite ? 0 : 1) }

        return result
    }

    var completedCount: Int {
        categories.filter { $0.progress.isComplete }.count
    }

    var totalCount: Int {
        categories.count
    }

    // MARK: - Load Content

    func loadContent() async {
        isLoading = true
        let favoriteKeys = progressService.favoriteKeys(gameType: gameType, source: source, target: target)

        switch gameType {
        case .flashCards:
            let cats = await ContentLoader.shared.loadFlashcardCategories(source: source, target: target)
            categories = cats.enumerated().map { index, cat in
                let progress = progressService.categoryProgress(
                    gameType: .flashCards,
                    category: cat.key,
                    totalItems: cat.items.count,
                    source: source,
                    target: target
                )
                return CategoryDisplayItem(
                    id: cat.key,
                    name: cat.name,
                    description: cat.description,
                    icon: cat.sfSymbolName,
                    difficulty: cat.difficulty,
                    itemCount: cat.items.count,
                    progress: progress,
                    order: index,
                    isFavorite: favoriteKeys.contains(cat.key),
                    color: cat.color
                )
            }
        case .grammar:
            let cats = await ContentLoader.shared.loadGrammarCategories(source: source, target: target)
            categories = cats.enumerated().map { index, cat in
                let progress = progressService.categoryProgress(
                    gameType: .grammar,
                    category: cat.key,
                    totalItems: cat.items.count,
                    source: source,
                    target: target
                )
                return CategoryDisplayItem(
                    id: cat.key,
                    name: cat.name,
                    description: cat.description,
                    icon: cat.sfSymbolName,
                    difficulty: cat.difficulty,
                    itemCount: cat.items.count,
                    progress: progress,
                    order: index,
                    isFavorite: favoriteKeys.contains(cat.key),
                    color: cat.color
                )
            }
        case .wordBuilder:
            let cats = await ContentLoader.shared.loadWordBuilderCategories(source: source, target: target)
            categories = cats.enumerated().map { index, cat in
                let progress = progressService.categoryProgress(
                    gameType: .wordBuilder,
                    category: cat.key,
                    totalItems: cat.items.count,
                    source: source,
                    target: target
                )
                return CategoryDisplayItem(
                    id: cat.key,
                    name: cat.name,
                    description: cat.description,
                    icon: cat.sfSymbolName,
                    difficulty: cat.difficulty,
                    itemCount: cat.items.count,
                    progress: progress,
                    order: index,
                    isFavorite: favoriteKeys.contains(cat.key),
                    color: cat.color
                )
            }
        }
        isLoading = false
    }

    // MARK: - Actions

    func toggleFavorite(_ categoryKey: String) {
        progressService.toggleFavorite(
            gameType: gameType,
            categoryKey: categoryKey,
            source: source,
            target: target
        )
        if let index = categories.firstIndex(where: { $0.key == categoryKey }) {
            categories[index].isFavorite.toggle()
        }
        HapticsService.shared.medium()
    }

    func toggleHideCompleted() {
        hideCompleted.toggle()
        UserDefaults.standard.set(hideCompleted, forKey: "\(gameType.rawValue)_hide_completed")
    }
}
