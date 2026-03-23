import Foundation
import SwiftData

// MARK: - GDPR Data Exporter

/// Exports ALL personal data as machine-readable JSON.
/// Available to every subscription tier (GDPR Article 20 — right to data portability).
/// Separate from the premium DataExporter which provides formatted reports.
enum GDPRDataExporter {

    /// Collects all SwiftData models and returns a JSON Data blob.
    @MainActor
    static func exportAllData(context: ModelContext) -> Data {
        let profiles: [UserProfile] = (try? context.fetch(FetchDescriptor<UserProfile>())) ?? []
        let progress: [GameProgressRecord] = (try? context.fetch(
            FetchDescriptor<GameProgressRecord>(sortBy: [SortDescriptor(\.createdDate)])
        )) ?? []
        let languages: [LanguagePreference] = (try? context.fetch(FetchDescriptor<LanguagePreference>())) ?? []
        let favorites: [FavoriteCategory] = (try? context.fetch(FetchDescriptor<FavoriteCategory>())) ?? []
        let mastered: [MasteredContent] = (try? context.fetch(FetchDescriptor<MasteredContent>())) ?? []

        let iso = ISO8601DateFormatter()
        iso.formatOptions = [.withFullDate, .withTime, .withColonSeparatorInTime]

        // Build payload
        let profileDicts: [[String: Any]] = profiles.map { p in
            var dict: [String: Any] = [
                "firstName": p.firstName,
                "email": p.email,
                "totalXP": p.totalXP,
                "dailyStreak": p.dailyStreak,
                "totalActiveDays": p.totalActiveDays,
                "difficulty": p.difficulty,
                "soundEnabled": p.soundEnabled,
                "darkMode": p.darkMode,
                "selectedTierId": p.selectedTierId,
                "legalConsentVersion": p.legalConsentVersion
            ]
            if let date = p.lastActivityDate { dict["lastActivityDate"] = iso.string(from: date) }
            if let game = p.favoriteGame { dict["favoriteGame"] = game }
            if let date = p.legalConsentDate { dict["legalConsentDate"] = iso.string(from: date) }
            return dict
        }

        let progressDicts: [[String: Any]] = progress.map { r in
            [
                "gameType": r.gameType,
                "category": r.level,
                "score": r.score,
                "correctAnswers": r.correctAnswers,
                "totalQuestions": r.totalQuestions,
                "timeSpentSeconds": r.timeSpent,
                "sourceLanguage": r.sourceLanguage,
                "targetLanguage": r.targetLanguage,
                "date": iso.string(from: r.createdDate)
            ] as [String: Any]
        }

        let languageDicts: [[String: Any]] = languages.map { l in
            [
                "sourceLanguage": l.sourceLanguage,
                "targetLanguage": l.targetLanguage,
                "isActive": l.isActive
            ] as [String: Any]
        }

        let favoriteDicts: [[String: Any]] = favorites.map { f in
            [
                "gameType": f.gameType,
                "categoryKey": f.categoryKey,
                "sourceLanguage": f.sourceLanguage,
                "targetLanguage": f.targetLanguage
            ] as [String: Any]
        }

        let masteredDicts: [[String: Any]] = mastered.map { m in
            [
                "gameType": m.gameType,
                "category": m.category,
                "contentID": m.contentID,
                "masteredCount": m.masteredCount,
                "sourceLanguage": m.sourceLanguage,
                "targetLanguage": m.targetLanguage
            ] as [String: Any]
        }

        let payload: [String: Any] = [
            "exportDate": iso.string(from: .now),
            "exportType": "GDPR Article 20 — Data Portability",
            "app": "LumenLingo",
            "userProfile": profileDicts,
            "gameProgress": progressDicts,
            "languagePreferences": languageDicts,
            "favoriteCategories": favoriteDicts,
            "masteredContent": masteredDicts
        ]

        return (try? JSONSerialization.data(withJSONObject: payload, options: [.prettyPrinted, .sortedKeys])) ?? Data()
    }
}
