import Foundation
import SwiftData

// MARK: - Progress ViewModel

/// Port of useProgressData.jsx — aggregates stats for the Journey page.
@Observable
final class ProgressViewModel {
    var userProfile: UserProfile?
    var gameTypeStats: [GameTypeStats] = []
    var isLoading = true

    private let progressService: ProgressService

    init(progressService: ProgressService) {
        self.progressService = progressService
    }

    var currentLevel: Int { userProfile?.currentLevel ?? 1 }
    var totalXP: Int { userProfile?.totalXP ?? 0 }
    var xpInLevel: Int { userProfile?.xpInCurrentLevel ?? 0 }
    var levelProgress: Double { userProfile?.levelProgress ?? 0 }
    var dailyStreak: Int { userProfile?.dailyStreak ?? 0 }
    var totalActiveDays: Int { userProfile?.totalActiveDays ?? 0 }
    var xpForNextLevel: Int { currentLevel * 100 }

    var totalGamesPlayed: Int {
        gameTypeStats.reduce(0) { $0 + $1.played }
    }

    var overallAccuracy: Double {
        let total = gameTypeStats.reduce(0.0) { $0 + $1.accuracy * Double($1.played) }
        let count = gameTypeStats.reduce(0) { $0 + $1.played }
        guard count > 0 else { return 0 }
        return total / Double(count)
    }

    // MARK: - Wisdom Quotes

    static let wisdomQuotes: [WisdomQuote] = [
        WisdomQuote(text: "The limits of my language mean the limits of my world.", author: "Ludwig Wittgenstein"),
        WisdomQuote(text: "One language sets you in a corridor for life. Two languages open every door along the way.", author: "Frank Smith"),
        WisdomQuote(text: "To have another language is to possess a second soul.", author: "Charlemagne"),
        WisdomQuote(text: "Language is the road map of a culture.", author: "Rita Mae Brown"),
        WisdomQuote(text: "A different language is a different vision of life.", author: "Federico Fellini"),
        WisdomQuote(text: "Learning another language is like becoming another person.", author: "Haruki Murakami"),
        WisdomQuote(text: "The more languages you know, the more you are human.", author: "Tomáš Garrigue Masaryk"),
        WisdomQuote(text: "Language is the blood of the soul into which thoughts run and out of which they grow.", author: "Oliver Wendell Holmes"),
        WisdomQuote(text: "With languages, you are at home anywhere.", author: "Edmund de Waal"),
        WisdomQuote(text: "Language is not a genetic gift, it is a social gift.", author: "Frank Smith"),
        WisdomQuote(text: "Knowledge of languages is the doorway to wisdom.", author: "Roger Bacon"),
        WisdomQuote(text: "You can never understand one language until you understand at least two.", author: "Geoffrey Willans"),
        WisdomQuote(text: "Language is the dress of thought.", author: "Samuel Johnson"),
        WisdomQuote(text: "If you talk to a man in a language he understands, that goes to his head. If you talk to him in his own language, that goes to his heart.", author: "Nelson Mandela"),
        WisdomQuote(text: "The soul would have no rainbow had the eyes no tears.", author: "John Vance Cheney"),
        WisdomQuote(text: "Change your language and you change your thoughts.", author: "Karl Albrecht"),
        WisdomQuote(text: "Those who know nothing of foreign languages know nothing of their own.", author: "Johann Wolfgang von Goethe"),
        WisdomQuote(text: "Language is the key to the heart of people.", author: "Ahmed Deedat"),
        WisdomQuote(text: "A word after a word after a word is power.", author: "Margaret Atwood"),
        WisdomQuote(text: "The beginning of wisdom is the definition of terms.", author: "Socrates"),
    ]

    func loadData() {
        isLoading = true
        userProfile = progressService.getOrCreateProfile()
        gameTypeStats = progressService.gameTypeStats()
        isLoading = false
    }
}
