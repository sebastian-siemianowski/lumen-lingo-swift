import Foundation

// MARK: - Sync Result

enum SyncResult {
    case success(message: String)
    case failure(error: String)
    case noData
}

// MARK: - Sync Data Snapshot

struct SyncDataSnapshot: Codable {
    let userProfile: UserProfileSnapshot
    let gameProgress: [GameProgressSnapshot]
    let favorites: [FavoriteCategorySnapshot]
    let masteredContent: [MasteredContentSnapshot]
    let languagePreference: LanguagePreferenceSnapshot
    let timestamp: Date

    struct UserProfileSnapshot: Codable {
        let totalXP: Int
        let dailyStreak: Int
        let totalActiveDays: Int
        let lastActivityDate: Date?
        let difficulty: String
    }

    struct GameProgressSnapshot: Codable {
        let gameType: String
        let level: String
        let score: Int
        let correctAnswers: Int
        let totalQuestions: Int
        let timeSpent: Int
        let sourceLanguage: String
        let targetLanguage: String
        let createdDate: Date
    }

    struct FavoriteCategorySnapshot: Codable {
        let gameType: String
        let categoryKey: String
        let sourceLanguage: String
        let targetLanguage: String
    }

    struct MasteredContentSnapshot: Codable {
        let gameType: String
        let category: String
        let contentID: String
        let masteredCount: Int
        let sourceLanguage: String
        let targetLanguage: String
    }

    struct LanguagePreferenceSnapshot: Codable {
        let sourceLanguage: String
        let targetLanguage: String
    }
}

// MARK: - Sync Service Protocol

/// Protocol for cloud sync/backup service. Designed for easy swap from mock to
/// CloudKit, Firebase, or custom backend.
protocol SyncServiceProtocol {
    var isSyncing: Bool { get }
    var lastSyncDate: Date? { get }
    var hasPendingSync: Bool { get }

    func uploadData(_ snapshot: SyncDataSnapshot) async -> SyncResult
    func downloadData() async -> Result<SyncDataSnapshot?, Error>
    func markPendingSync()
    func clearPendingSync()
}

// MARK: - Mock Sync Service

/// Mock sync service that simulates cloud backup operations.
/// Replace with CloudKit or Firebase implementation when ready.
@Observable
final class MockSyncService: SyncServiceProtocol {
    private(set) var isSyncing = false
    private(set) var lastSyncDate: Date?
    private(set) var hasPendingSync = false

    private var cachedSnapshot: SyncDataSnapshot?

    func uploadData(_ snapshot: SyncDataSnapshot) async -> SyncResult {
        isSyncing = true
        // Simulate network delay
        try? await Task.sleep(for: .seconds(1))
        cachedSnapshot = snapshot
        lastSyncDate = .now
        hasPendingSync = false
        isSyncing = false
        return .success(message: "Data backed up successfully (mock)")
    }

    func downloadData() async -> Result<SyncDataSnapshot?, Error> {
        isSyncing = true
        try? await Task.sleep(for: .seconds(1))
        isSyncing = false

        if let snapshot = cachedSnapshot {
            return .success(snapshot)
        }
        return .success(nil)
    }

    func markPendingSync() {
        hasPendingSync = true
    }

    func clearPendingSync() {
        hasPendingSync = false
    }
}
