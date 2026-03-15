import Foundation
import SwiftData

// MARK: - Progress Service

/// Manages XP, levels, streaks, mastery tracking, and game session persistence.
/// Equivalent to the progress/streak logic in React's offlineSync.jsx and game hooks.
@Observable
final class ProgressService {
    private let modelContext: ModelContext

    init(modelContext: ModelContext) {
        self.modelContext = modelContext
    }

    // MARK: - User Profile

    func getOrCreateProfile() -> UserProfile {
        let descriptor = FetchDescriptor<UserProfile>()
        if let profile = try? modelContext.fetch(descriptor).first {
            return profile
        }
        let profile = UserProfile()
        modelContext.insert(profile)
        try? modelContext.save()
        return profile
    }

    // MARK: - XP & Level

    /// Add XP and update level. Returns the updated profile.
    @discardableResult
    func addXP(_ points: Int) -> UserProfile {
        let profile = getOrCreateProfile()
        profile.totalXP += points
        // Level is computed: floor(totalXP / 100) + 1
        try? modelContext.save()
        return profile
    }

    // MARK: - Daily Streak

    /// Update the daily streak based on current date.
    /// Same logic as React: same day = no-op, 1 day gap = increment, >1 day = reset to 1.
    func updateStreak() {
        let profile = getOrCreateProfile()
        let today = Calendar.current.startOfDay(for: .now)

        if let lastDate = profile.lastActivityDate {
            let lastDay = Calendar.current.startOfDay(for: lastDate)
            let daysDiff = Calendar.current.dateComponents([.day], from: lastDay, to: today).day ?? 0

            if daysDiff == 0 {
                // Same day — no change
                return
            } else if daysDiff == 1 {
                // Consecutive day — increment streak
                profile.dailyStreak += 1
            } else {
                // Gap > 1 day — reset streak
                profile.dailyStreak = 1
            }
        } else {
            // First activity ever
            profile.dailyStreak = 1
        }

        profile.lastActivityDate = today
        profile.totalActiveDays += 1
        try? modelContext.save()
    }

    // MARK: - Game Progress

    /// Record a completed game session. Updates XP, streak, and creates a progress record.
    func recordGameSession(_ result: GameSessionResult) {
        // Create progress record
        let record = GameProgressRecord(
            gameType: result.gameType,
            level: result.categoryKey,
            score: result.score,
            correctAnswers: result.correctAnswers,
            totalQuestions: result.totalQuestions,
            timeSpent: result.timeSpent,
            sourceLanguage: result.sourceLanguage,
            targetLanguage: result.targetLanguage
        )
        modelContext.insert(record)

        // Update XP
        addXP(result.score)

        // Update streak
        updateStreak()

        // Trim to max 50 records (FIFO)
        trimProgressRecords()

        try? modelContext.save()
    }

    private func trimProgressRecords() {
        var descriptor = FetchDescriptor<GameProgressRecord>(
            sortBy: [SortDescriptor(\.createdDate, order: .reverse)]
        )
        guard let allRecords = try? modelContext.fetch(descriptor),
              allRecords.count > 50 else { return }

        for record in allRecords.dropFirst(50) {
            modelContext.delete(record)
        }
    }

    // MARK: - Recent Activity

    func recentSessions(source: String, target: String, limit: Int = 5) -> [GameProgressRecord] {
        var descriptor = FetchDescriptor<GameProgressRecord>(
            predicate: #Predicate<GameProgressRecord> {
                $0.sourceLanguage == source && $0.targetLanguage == target
            },
            sortBy: [SortDescriptor(\.createdDate, order: .reverse)]
        )
        descriptor.fetchLimit = limit
        return (try? modelContext.fetch(descriptor)) ?? []
    }

    func allSessions() -> [GameProgressRecord] {
        let descriptor = FetchDescriptor<GameProgressRecord>(
            sortBy: [SortDescriptor(\.createdDate, order: .reverse)]
        )
        return (try? modelContext.fetch(descriptor)) ?? []
    }

    // MARK: - Mastery

    func markContentMastered(gameType: GameType, category: String, contentID: String, source: String, target: String) {
        let gameTypeRaw = gameType.rawValue
        let descriptor = FetchDescriptor<MasteredContent>(
            predicate: #Predicate<MasteredContent> {
                $0.gameType == gameTypeRaw &&
                $0.category == category &&
                $0.contentID == contentID &&
                $0.sourceLanguage == source &&
                $0.targetLanguage == target
            }
        )

        if let existing = try? modelContext.fetch(descriptor).first {
            existing.masteredCount += 1
        } else {
            let mastered = MasteredContent(
                gameType: gameType,
                category: category,
                contentID: contentID,
                sourceLanguage: source,
                targetLanguage: target
            )
            modelContext.insert(mastered)
        }
        try? modelContext.save()
    }

    func masteredContentIDs(gameType: GameType, category: String, source: String, target: String) -> Set<String> {
        let gameTypeRaw = gameType.rawValue
        let descriptor = FetchDescriptor<MasteredContent>(
            predicate: #Predicate<MasteredContent> {
                $0.gameType == gameTypeRaw &&
                $0.category == category &&
                $0.sourceLanguage == source &&
                $0.targetLanguage == target
            }
        )
        let results = (try? modelContext.fetch(descriptor)) ?? []
        return Set(results.map(\.contentID))
    }

    func categoryProgress(gameType: GameType, category: String, totalItems: Int, source: String, target: String) -> CategoryProgress {
        let mastered = masteredContentIDs(
            gameType: gameType,
            category: category,
            source: source,
            target: target
        )
        return CategoryProgress(total: totalItems, mastered: mastered.count)
    }

    // MARK: - Favorites

    func toggleFavorite(gameType: GameType, categoryKey: String, source: String, target: String) {
        let gameTypeRaw = gameType.rawValue
        let descriptor = FetchDescriptor<FavoriteCategory>(
            predicate: #Predicate<FavoriteCategory> {
                $0.gameType == gameTypeRaw &&
                $0.categoryKey == categoryKey &&
                $0.sourceLanguage == source &&
                $0.targetLanguage == target
            }
        )

        if let existing = try? modelContext.fetch(descriptor).first {
            modelContext.delete(existing)
        } else {
            let fav = FavoriteCategory(
                gameType: gameType,
                categoryKey: categoryKey,
                sourceLanguage: source,
                targetLanguage: target
            )
            modelContext.insert(fav)
        }
        try? modelContext.save()
    }

    func isFavorite(gameType: GameType, categoryKey: String, source: String, target: String) -> Bool {
        let gameTypeRaw = gameType.rawValue
        let descriptor = FetchDescriptor<FavoriteCategory>(
            predicate: #Predicate<FavoriteCategory> {
                $0.gameType == gameTypeRaw &&
                $0.categoryKey == categoryKey &&
                $0.sourceLanguage == source &&
                $0.targetLanguage == target
            }
        )
        return ((try? modelContext.fetch(descriptor))?.isEmpty == false)
    }

    func favoriteKeys(gameType: GameType, source: String, target: String) -> Set<String> {
        let gameTypeRaw = gameType.rawValue
        let descriptor = FetchDescriptor<FavoriteCategory>(
            predicate: #Predicate<FavoriteCategory> {
                $0.gameType == gameTypeRaw &&
                $0.sourceLanguage == source &&
                $0.targetLanguage == target
            }
        )
        let results = (try? modelContext.fetch(descriptor)) ?? []
        return Set(results.map(\.categoryKey))
    }

    // MARK: - Language Preference

    func getLanguagePreference() -> LanguagePreference {
        let descriptor = FetchDescriptor<LanguagePreference>()
        if let pref = try? modelContext.fetch(descriptor).first {
            return pref
        }
        let pref = LanguagePreference()
        modelContext.insert(pref)
        try? modelContext.save()
        return pref
    }

    func setLanguagePreference(source: SupportedLanguage, target: SupportedLanguage) {
        let pref = getLanguagePreference()
        pref.sourceLanguage = source.rawValue
        pref.targetLanguage = target.rawValue
        try? modelContext.save()
    }

    // MARK: - Reset Progress

    /// Delete all game records & mastered content, zero out profile stats.
    /// Preserves appearance / sound preferences and language selection.
    func resetAllProgress() {
        // Reset profile stats
        let profile = getOrCreateProfile()
        profile.totalXP = 0
        profile.dailyStreak = 0
        profile.totalActiveDays = 0
        profile.lastActivityDate = nil

        // Delete all game progress records
        if let records = try? modelContext.fetch(FetchDescriptor<GameProgressRecord>()) {
            for record in records { modelContext.delete(record) }
        }

        // Delete all mastered content
        if let mastered = try? modelContext.fetch(FetchDescriptor<MasteredContent>()) {
            for item in mastered { modelContext.delete(item) }
        }

        // Delete all favorite categories
        if let favorites = try? modelContext.fetch(FetchDescriptor<FavoriteCategory>()) {
            for fav in favorites { modelContext.delete(fav) }
        }

        try? modelContext.save()
    }

    // MARK: - Game Type Stats

    func gameTypeStats() -> [GameTypeStats] {
        let allSessions = allSessions()

        var statsByType: [GameType: (played: Int, totalScore: Int, bestScore: Int, totalAccuracy: Double)] = [:]

        for session in allSessions {
            guard let type = session.gameTypeEnum else { continue }
            var stats = statsByType[type] ?? (0, 0, 0, 0)
            stats.played += 1
            stats.totalScore += session.score
            stats.bestScore = max(stats.bestScore, session.score)
            stats.totalAccuracy += session.accuracy
            statsByType[type] = stats
        }

        return statsByType.map { type, stats in
            GameTypeStats(
                gameType: type,
                played: stats.played,
                totalScore: stats.totalScore,
                bestScore: stats.bestScore,
                accuracy: stats.played > 0 ? stats.totalAccuracy / Double(stats.played) : 0,
                avgScore: stats.played > 0 ? stats.totalScore / stats.played : 0
            )
        }.sorted { $0.played > $1.played }
    }
}
