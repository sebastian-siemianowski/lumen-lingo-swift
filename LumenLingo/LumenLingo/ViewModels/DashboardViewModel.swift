import Foundation
import SwiftData

// MARK: - Dashboard ViewModel

@Observable
final class DashboardViewModel {
    var userProfile: UserProfile?
    var recentSessions: [GameProgressRecord] = []
    var isLoading = true

    private let progressService: ProgressService
    private let translationService = TranslationService.shared

    init(progressService: ProgressService) {
        self.progressService = progressService
    }

    var greeting: String {
        let hour = Calendar.current.component(.hour, from: .now)
        let timeGreeting: String
        switch hour {
        case 5..<12: timeGreeting = "Good morning"
        case 12..<17: timeGreeting = "Good afternoon"
        case 17..<22: timeGreeting = "Good evening"
        default: timeGreeting = "Good night"
        }
        return "\(timeGreeting), Sebastian!"
    }

    var levelProgress: Double {
        userProfile?.levelProgress ?? 0
    }

    var currentLevel: Int {
        userProfile?.currentLevel ?? 1
    }

    var totalXP: Int {
        userProfile?.totalXP ?? 0
    }

    var dailyStreak: Int {
        userProfile?.dailyStreak ?? 0
    }

    var totalActiveDays: Int {
        userProfile?.totalActiveDays ?? 0
    }

    func loadData(source: String, target: String) {
        isLoading = true
        userProfile = progressService.getOrCreateProfile()
        recentSessions = progressService.recentSessions(source: source, target: target)
        isLoading = false
    }
}
