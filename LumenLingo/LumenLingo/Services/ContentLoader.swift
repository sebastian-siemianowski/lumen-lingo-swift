import Foundation

// MARK: - Content Loader

/// Loads game content from bundled JSON files, with in-memory caching.
/// Equivalent to React's contentLoader.jsx.
@Observable
final class ContentLoader {
    static let shared = ContentLoader()

    private let cache = NSCache<NSString, AnyObject>()

    private init() {
        cache.countLimit = 50
    }

    // MARK: - Public API

    func loadFlashcardCategories(source: String, target: String) async -> [ContentCategory<FlashcardWord>] {
        let cacheKey = "flashcards_\(source)_\(target)" as NSString
        if let cached = cache.object(forKey: cacheKey) as? [ContentCategory<FlashcardWord>] {
            return cached
        }

        let categories: [ContentCategory<FlashcardWord>] = loadFromBundle(
            languagePair: "\(source)_\(target)",
            fileName: "flashcards"
        )
        cache.setObject(categories as AnyObject, forKey: cacheKey)
        return categories
    }

    func loadGrammarCategories(source: String, target: String) async -> [ContentCategory<GrammarQuestion>] {
        let cacheKey = "grammar_\(source)_\(target)" as NSString
        if let cached = cache.object(forKey: cacheKey) as? [ContentCategory<GrammarQuestion>] {
            return cached
        }

        let categories: [ContentCategory<GrammarQuestion>] = loadFromBundle(
            languagePair: "\(source)_\(target)",
            fileName: "grammar"
        )
        cache.setObject(categories as AnyObject, forKey: cacheKey)
        return categories
    }

    func loadWordBuilderCategories(source: String, target: String) async -> [ContentCategory<WordBuilderWord>] {
        let cacheKey = "word_builder_\(source)_\(target)" as NSString
        if let cached = cache.object(forKey: cacheKey) as? [ContentCategory<WordBuilderWord>] {
            return cached
        }

        let categories: [ContentCategory<WordBuilderWord>] = loadFromBundle(
            languagePair: "\(source)_\(target)",
            fileName: "wordbuilder"
        )
        cache.setObject(categories as AnyObject, forKey: cacheKey)
        return categories
    }

    func clearCache() {
        cache.removeAllObjects()
    }

    // MARK: - Private

    private func loadFromBundle<T: Codable>(languagePair: String, fileName: String) -> [ContentCategory<T>] {
        guard let url = Bundle.main.url(
            forResource: fileName,
            withExtension: "json",
            subdirectory: "Content/\(languagePair)"
        ) else {
            print("⚠️ Content file not found: Content/\(languagePair)/\(fileName).json")
            return []
        }

        do {
            let data = try Data(contentsOf: url)
            let decoder = JSONDecoder()
            let categories = try decoder.decode([ContentCategory<T>].self, from: data)
            return categories
        } catch {
            print("⚠️ Failed to decode \(fileName).json for \(languagePair): \(error)")
            return []
        }
    }
}
