import Foundation
import SwiftUI

// MARK: - Recommendation Reason

enum RecommendationReason: String {
    case continueProgress = "Continue"
    case reviewWeak = "Review"
    case newContent = "New"
    case spacedReview = "Refresh"
    case firstSession = "Begin"

    var icon: String {
        switch self {
        case .continueProgress: return "arrow.right.circle.fill"
        case .reviewWeak: return "arrow.counterclockwise.circle.fill"
        case .newContent: return "sparkles"
        case .spacedReview: return "clock.arrow.circlepath"
        case .firstSession: return "star.fill"
        }
    }

    var motivationalPrefix: String {
        switch self {
        case .continueProgress: return "Keep going"
        case .reviewWeak: return "Strengthen"
        case .newContent: return "Discover"
        case .spacedReview: return "Revisit"
        case .firstSession: return "Begin"
        }
    }

    var accentColors: [Color] {
        switch self {
        case .continueProgress: return [Color(hex: "#3b82f6"), Color(hex: "#06b6d4")]
        case .reviewWeak: return [Color(hex: "#f59e0b"), Color(hex: "#f97316")]
        case .newContent: return [Color(hex: "#8b5cf6"), Color(hex: "#d946ef")]
        case .spacedReview: return [Color(hex: "#10b981"), Color(hex: "#34d399")]
        case .firstSession: return [Color(hex: "#ec4899"), Color(hex: "#f43f5e")]
        }
    }
}

// MARK: - Session Recommendation

struct SessionRecommendation: Equatable {
    let gameType: GameType
    let categoryKey: String
    let categoryName: String
    let categoryIcon: String
    let difficulty: Difficulty
    let reason: RecommendationReason
    let progress: CategoryProgress
    let motivationalText: String

    static func == (lhs: SessionRecommendation, rhs: SessionRecommendation) -> Bool {
        lhs.gameType == rhs.gameType && lhs.categoryKey == rhs.categoryKey && lhs.reason == rhs.reason
    }
}

// MARK: - Session Engine

/// Computes smart "next session" recommendations using local heuristics.
/// Tracks daily rounds completed toward a daily goal.
@Observable
final class SessionEngine {

    // MARK: - Daily Rounds

    private(set) var roundsCompletedToday: Int = 0
    let dailyGoal: Int = 5

    /// The current recommendation (recomputed after each session)
    private(set) var currentRecommendation: SessionRecommendation?

    /// Whether the engine has loaded its first recommendation
    private(set) var isLoaded: Bool = false

    // MARK: - Private

    private static let roundsKey = "sessionEngine_roundsToday"
    private static let roundsDateKey = "sessionEngine_roundsDate"
    private static let lastGameTypeKey = "sessionEngine_lastGameTypes"

    init() {
        loadDailyState()
    }

    // MARK: - Public API

    var dailyProgress: Double {
        min(1.0, Double(roundsCompletedToday) / Double(dailyGoal))
    }

    var isDailyGoalComplete: Bool {
        roundsCompletedToday >= dailyGoal
    }

    /// Record that the user finished a round, then refresh the recommendation.
    func recordRoundCompleted() {
        ensureTodayState()
        roundsCompletedToday += 1
        saveDailyState()
    }

    /// Reset the daily goal counter back to zero (for QA/debug).
    func resetDailyGoal() {
        roundsCompletedToday = 0
        saveDailyState()
    }

    /// Compute the next recommendation. Call from main actor context.
    @MainActor
    func refreshRecommendation(
        source: String,
        target: String,
        progressService: ProgressService,
        tierManager: TierManager
    ) async {
        ensureTodayState()

        let currentTier = tierManager.currentTier
        // Gather all available categories across game types
        var candidates: [CandidateCategory] = []

        let flashcardCats = await ContentLoader.shared.loadFlashcardCategories(source: source, target: target)
        for cat in flashcardCats {
            let progress = progressService.categoryProgress(
                gameType: .flashCards, category: cat.key, totalItems: cat.items.count,
                source: source, target: target
            )
            candidates.append(CandidateCategory(
                gameType: .flashCards, key: cat.key, name: cat.name, icon: cat.sfSymbolName,
                difficulty: cat.difficulty, itemCount: cat.items.count, progress: progress
            ))
        }

        let grammarCats = await ContentLoader.shared.loadGrammarCategories(source: source, target: target)
        for cat in grammarCats {
            let progress = progressService.categoryProgress(
                gameType: .grammar, category: cat.key, totalItems: cat.items.count,
                source: source, target: target
            )
            candidates.append(CandidateCategory(
                gameType: .grammar, key: cat.key, name: cat.name, icon: cat.sfSymbolName,
                difficulty: cat.difficulty, itemCount: cat.items.count, progress: progress
            ))
        }

        let wbCats = await ContentLoader.shared.loadWordBuilderCategories(source: source, target: target)
        for cat in wbCats {
            let progress = progressService.categoryProgress(
                gameType: .wordBuilder, category: cat.key, totalItems: cat.items.count,
                source: source, target: target
            )
            candidates.append(CandidateCategory(
                gameType: .wordBuilder, key: cat.key, name: cat.name, icon: cat.sfSymbolName,
                difficulty: cat.difficulty, itemCount: cat.items.count, progress: progress
            ))
        }

        // Filter out tier-locked categories
        candidates = candidates.filter { cat in
            TierManager.allowedDifficulty(for: cat.gameType, tier: currentTier) >= cat.difficulty.numericLevel
        }

        guard !candidates.isEmpty else {
            currentRecommendation = nil
            isLoaded = true
            return
        }

        // Get recent sessions for accuracy analysis
        let recentSessions = progressService.recentSessions(source: source, target: target, limit: 30)
        let recentGameTypes = loadRecentGameTypes()

        // Apply heuristic ranking
        let recommendation = rankCandidates(
            candidates: candidates,
            recentSessions: recentSessions,
            recentGameTypes: recentGameTypes,
            streakDays: progressService.getOrCreateProfile().dailyStreak
        )

        currentRecommendation = recommendation
        isLoaded = true
    }

    // MARK: - Heuristic Ranking

    private func rankCandidates(
        candidates: [CandidateCategory],
        recentSessions: [GameProgressRecord],
        recentGameTypes: [String],
        streakDays: Int
    ) -> SessionRecommendation? {
        // Build session lookup: categoryKey → most recent session
        var sessionsByCategory: [String: GameProgressRecord] = [:]
        for session in recentSessions {
            let key = "\(session.gameType)_\(session.level)"
            if sessionsByCategory[key] == nil {
                sessionsByCategory[key] = session
            }
        }

        // Score each candidate
        var scored: [(CandidateCategory, Double, RecommendationReason)] = []

        for cat in candidates {
            let sessionKey = "\(cat.gameType.rawValue)_\(cat.key)"
            let lastSession = sessionsByCategory[sessionKey]
            let hasStarted = cat.progress.mastered > 0
            let isComplete = cat.progress.isComplete

            // 1. Continue Incomplete (highest priority)
            if hasStarted && !isComplete {
                var score = 100.0
                // Prefer most recently played
                if let session = lastSession {
                    let hoursSince = Date().timeIntervalSince(session.createdDate) / 3600
                    score += max(0, 50 - hoursSince) // Bonus for recency
                }
                // Bonus for near-completion
                score += cat.progress.percentage * 0.3
                scored.append((cat, score, .continueProgress))
                continue
            }

            // 2. Review Weak (recently completed but low accuracy)
            if let session = lastSession, isComplete {
                let daysSince = Date().timeIntervalSince(session.createdDate) / 86400
                if daysSince < 7 && session.accuracy < 70 {
                    let score = 80.0 + (70 - session.accuracy) // Lower accuracy = higher priority
                    scored.append((cat, score, .reviewWeak))
                    continue
                }
            }

            // 3. New Content (never started)
            if !hasStarted {
                var score = 60.0
                // Prefer beginner first
                switch cat.difficulty {
                case .beginner: score += 15
                case .intermediate: score += 5
                case .advanced: score += 0
                }
                // Penalize if same game type was played recently (variety bonus)
                let typeCount = recentGameTypes.prefix(3).filter { $0 == cat.gameType.rawValue }.count
                score -= Double(typeCount) * 10
                scored.append((cat, score, .newContent))
                continue
            }

            // 4. Spaced Review (complete, not played recently)
            if isComplete {
                if let session = lastSession {
                    let daysSince = Date().timeIntervalSince(session.createdDate) / 86400
                    if daysSince > 7 {
                        let score = 40.0 + min(daysSince, 30) // Older = higher priority, capped
                        scored.append((cat, score, .spacedReview))
                        continue
                    }
                } else {
                    // Complete but no session record, treat as spaced review
                    scored.append((cat, 40.0, .spacedReview))
                }
            }
        }

        // Sort by score descending
        scored.sort { $0.1 > $1.1 }

        guard let (winner, _, reason) = scored.first else {
            // Fallback: pick first available new category
            if let first = candidates.first(where: { $0.progress.mastered == 0 }) {
                return makeRecommendation(from: first, reason: .firstSession, streakDays: streakDays)
            }
            return candidates.first.map { makeRecommendation(from: $0, reason: .spacedReview, streakDays: streakDays) }
        }

        // Track this game type for variety
        saveRecentGameType(winner.gameType.rawValue)

        return makeRecommendation(from: winner, reason: reason, streakDays: streakDays)
    }

    private func makeRecommendation(
        from cat: CandidateCategory,
        reason: RecommendationReason,
        streakDays: Int
    ) -> SessionRecommendation {
        let motivational = buildMotivationalText(cat: cat, reason: reason, streakDays: streakDays)
        return SessionRecommendation(
            gameType: cat.gameType,
            categoryKey: cat.key,
            categoryName: cat.name,
            categoryIcon: cat.icon,
            difficulty: cat.difficulty,
            reason: reason,
            progress: cat.progress,
            motivationalText: motivational
        )
    }

    private func buildMotivationalText(
        cat: CandidateCategory,
        reason: RecommendationReason,
        streakDays: Int
    ) -> String {
        let streakPrefix: String? = if streakDays >= 7 {
            "Day \(streakDays) streak! "
        } else if streakDays >= 2 {
            "\(streakDays)-day streak — "
        } else {
            nil
        }

        let core: String
        switch reason {
        case .continueProgress:
            let remaining = cat.itemCount - cat.progress.mastered
            if remaining <= 3 {
                core = "Just \(remaining) more to master this!"
            } else {
                core = "You're \(Int(cat.progress.percentage))% through — keep pushing!"
            }
        case .reviewWeak:
            core = "Sharpen your skills on this one"
        case .newContent:
            core = "Something fresh to explore"
        case .spacedReview:
            core = "Time to refresh your memory"
        case .firstSession:
            core = "Your journey starts here"
        }

        if let prefix = streakPrefix {
            return prefix + core
        }
        return core
    }

    // MARK: - Daily State Persistence (UserDefaults)

    private func loadDailyState() {
        let savedDate = UserDefaults.standard.string(forKey: Self.roundsDateKey) ?? ""
        if savedDate == todayKey {
            roundsCompletedToday = UserDefaults.standard.integer(forKey: Self.roundsKey)
        } else {
            roundsCompletedToday = 0
        }
    }

    private func ensureTodayState() {
        let savedDate = UserDefaults.standard.string(forKey: Self.roundsDateKey) ?? ""
        if savedDate != todayKey {
            roundsCompletedToday = 0
            saveDailyState()
        }
    }

    private func saveDailyState() {
        UserDefaults.standard.set(roundsCompletedToday, forKey: Self.roundsKey)
        UserDefaults.standard.set(todayKey, forKey: Self.roundsDateKey)
    }

    private var todayKey: String {
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyy-MM-dd"
        return formatter.string(from: Date())
    }

    // MARK: - Game Type Variety Tracking

    private func loadRecentGameTypes() -> [String] {
        UserDefaults.standard.stringArray(forKey: Self.lastGameTypeKey) ?? []
    }

    private func saveRecentGameType(_ type: String) {
        var types = loadRecentGameTypes()
        types.insert(type, at: 0)
        if types.count > 6 { types = Array(types.prefix(6)) }
        UserDefaults.standard.set(types, forKey: Self.lastGameTypeKey)
    }
}

// MARK: - Candidate Category (Internal)

private struct CandidateCategory {
    let gameType: GameType
    let key: String
    let name: String
    let icon: String
    let difficulty: Difficulty
    let itemCount: Int
    let progress: CategoryProgress
}

// MARK: - TierManager Difficulty Helper

extension TierManager {
    /// Returns the maximum allowed difficulty level for a game type on the given tier.
    static func allowedDifficulty(for gameType: GameType, tier: MembershipTier) -> Int {
        switch tier {
        case .free, .trial: return 1  // beginner only
        case .pro: return 2           // beginner + intermediate
        case .elite, .royal: return 3 // all
        }
    }
}
