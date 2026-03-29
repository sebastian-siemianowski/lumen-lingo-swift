import SwiftUI
import Combine

// MARK: - Notifications

extension Notification.Name {
    /// Posted when the user has 5 minutes of practice time remaining.
    static let practiceTimeFiveMinuteWarning = Notification.Name("practiceTimeFiveMinuteWarning")
    /// Posted when practice time has expired for the day.
    static let practiceTimeExpired = Notification.Name("practiceTimeExpired")
}

// MARK: - Practice Time Tracker

/// Tracks cumulative daily practice time for free-tier users.
/// Free tier: 30 minutes per day. All other tiers: unlimited.
///
/// Usage:
/// - Call `startSession()` when a game view appears.
/// - Call `pauseSession()` on app background / game exit.
/// - Call `resumeSession()` on app foreground (while still in game).
/// - Call `endSession()` when game completes or user navigates away.
///
/// Persists daily usage in UserDefaults keyed by ISO 8601 date.
@MainActor
@Observable
final class PracticeTimeTracker {

    // MARK: - Constants

    /// Daily limit in seconds (30 minutes).
    static let dailyLimitSeconds: Int = 1800
    /// Warning threshold in seconds (5 minutes remaining = 25 minutes used).
    static let warningThresholdSeconds: Int = 1500

    // MARK: - Published State

    /// Total seconds used today (includes all sessions).
    private(set) var usedSecondsToday: Int = 0

    /// Whether a game session is currently being tracked.
    private(set) var isTracking: Bool = false

    // MARK: - Private State

    /// When the current tracking segment started (nil if not tracking).
    private var segmentStartDate: Date?

    /// Seconds accumulated in the current session before the latest segment.
    private var sessionAccumulatedSeconds: Int = 0

    /// Whether the 5-minute warning has already fired this calendar day.
    private var warningFiredToday: Bool = false

    /// Whether "expired" has already been fired this calendar day.
    private var expiredFiredToday: Bool = false

    /// Task that ticks every second to update `usedSecondsToday`.
    private var tickTask: Task<Void, Never>?

    /// The date string (yyyy-MM-dd) for which `usedSecondsToday` is valid.
    private var currentDateKey: String = ""

    // MARK: - UserDefaults Key

    private static let usedSecondsKeyPrefix = "practiceTime_"

    // MARK: - Init

    init() {
        loadTodayUsage()
    }

    // MARK: - Computed Properties

    /// Whether the daily limit has been reached (for the free tier).
    var isExpired: Bool {
        usedSecondsToday >= Self.dailyLimitSeconds
    }

    /// Remaining seconds for the day. Returns nil for unlimited tiers.
    func remainingSeconds(for tier: MembershipTier) -> Int? {
        guard isLimited(for: tier) else { return nil }
        return max(0, Self.dailyLimitSeconds - usedSecondsToday)
    }

    /// Progress from 0.0 (no time used) to 1.0 (limit reached).
    var dailyProgress: Double {
        min(1.0, Double(usedSecondsToday) / Double(Self.dailyLimitSeconds))
    }

    /// Formatted remaining time string (e.g. "25 min left").
    func remainingTimeDisplay(for tier: MembershipTier) -> String {
        guard let remaining = remainingSeconds(for: tier) else { return "Unlimited" }
        if remaining <= 0 { return "Limit reached" }
        let minutes = remaining / 60
        let seconds = remaining % 60
        if minutes > 0 {
            return "\(minutes) min left"
        } else {
            return "\(seconds)s left"
        }
    }

    /// Whether this tier has a daily practice limit.
    func isLimited(for tier: MembershipTier) -> Bool {
        TierManager.allowedCount(for: .unlimitedPractice, tier: tier) == 0
    }

    /// Time until midnight (next daily reset).
    var secondsUntilReset: Int {
        let calendar = Calendar.current
        guard let midnight = calendar.nextDate(
            after: Date(),
            matching: DateComponents(hour: 0, minute: 0, second: 0),
            matchingPolicy: .nextTime
        ) else { return 0 }
        return max(0, Int(midnight.timeIntervalSinceNow))
    }

    /// Formatted countdown to midnight (e.g. "7h 23m").
    var resetCountdownDisplay: String {
        let total = secondsUntilReset
        let hours = total / 3600
        let minutes = (total % 3600) / 60
        if hours > 0 {
            return "\(hours)h \(minutes)m"
        } else {
            return "\(minutes)m"
        }
    }

    // MARK: - Session Control

    /// Start tracking practice time. Call when a game view appears.
    func startSession() {
        checkDailyReset()
        guard !isTracking else { return }
        isTracking = true
        sessionAccumulatedSeconds = 0
        segmentStartDate = Date()
        startTickTimer()
    }

    /// Pause tracking (app backgrounded while in game).
    func pauseSession() {
        guard isTracking, let start = segmentStartDate else { return }
        let elapsed = Int(Date().timeIntervalSince(start))
        sessionAccumulatedSeconds += elapsed
        segmentStartDate = nil
        stopTickTimer()
        persistUsage()
    }

    /// Resume tracking (app foregrounded while still in game).
    func resumeSession() {
        guard isTracking, segmentStartDate == nil else { return }
        checkDailyReset()
        segmentStartDate = Date()
        startTickTimer()
    }

    /// End the current session entirely. Returns the total session seconds.
    @discardableResult
    func endSession() -> Int {
        guard isTracking else { return 0 }
        var total = sessionAccumulatedSeconds
        if let start = segmentStartDate {
            total += Int(Date().timeIntervalSince(start))
        }
        segmentStartDate = nil
        sessionAccumulatedSeconds = 0
        isTracking = false
        stopTickTimer()
        persistUsage()
        return total
    }

    // MARK: - Daily Reset

    /// Check if the date has rolled over and reset if needed.
    func checkDailyReset() {
        let todayKey = Self.dateKey(for: Date())
        if todayKey != currentDateKey {
            currentDateKey = todayKey
            usedSecondsToday = loadUsage(for: todayKey)
            warningFiredToday = false
            expiredFiredToday = false
        }
    }

    // MARK: - Tick Timer

    private func startTickTimer() {
        stopTickTimer()
        tickTask = Task {
            while !Task.isCancelled {
                try? await Task.sleep(for: .seconds(1))
                tick()
            }
        }
    }

    private func stopTickTimer() {
        tickTask?.cancel()
        tickTask = nil
    }

    private func tick() {
        guard isTracking, let start = segmentStartDate else { return }
        let currentSegmentSeconds = Int(Date().timeIntervalSince(start))
        let total = loadUsage(for: currentDateKey) + sessionAccumulatedSeconds + currentSegmentSeconds
        usedSecondsToday = total

        // Five-minute warning
        if !warningFiredToday && usedSecondsToday >= Self.warningThresholdSeconds && usedSecondsToday < Self.dailyLimitSeconds {
            warningFiredToday = true
            NotificationCenter.default.post(name: .practiceTimeFiveMinuteWarning, object: nil)
        }

        // Expired
        if !expiredFiredToday && usedSecondsToday >= Self.dailyLimitSeconds {
            expiredFiredToday = true
            NotificationCenter.default.post(name: .practiceTimeExpired, object: nil)
        }
    }

    // MARK: - Persistence

    private func persistUsage() {
        var total = loadUsage(for: currentDateKey) + sessionAccumulatedSeconds
        if let start = segmentStartDate {
            total += Int(Date().timeIntervalSince(start))
        }
        usedSecondsToday = total
        UserDefaults.standard.set(total, forKey: Self.usedSecondsKeyPrefix + currentDateKey)
    }

    private func loadTodayUsage() {
        let todayKey = Self.dateKey(for: Date())
        currentDateKey = todayKey
        usedSecondsToday = loadUsage(for: todayKey)
    }

    private func loadUsage(for dateKey: String) -> Int {
        UserDefaults.standard.integer(forKey: Self.usedSecondsKeyPrefix + dateKey)
    }

    // MARK: - Date Key

    static func dateKey(for date: Date) -> String {
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyy-MM-dd"
        formatter.timeZone = .current
        return formatter.string(from: date)
    }

    // MARK: - Testing Support

    /// Reset all tracking state (for unit tests).
    func resetForTesting() {
        endSession()
        usedSecondsToday = 0
        warningFiredToday = false
        expiredFiredToday = false
        let todayKey = Self.dateKey(for: Date())
        currentDateKey = todayKey
        UserDefaults.standard.removeObject(forKey: Self.usedSecondsKeyPrefix + todayKey)
    }

    /// Simulate accumulated usage (for unit tests).
    func simulateUsage(seconds: Int) {
        let todayKey = Self.dateKey(for: Date())
        currentDateKey = todayKey
        UserDefaults.standard.set(seconds, forKey: Self.usedSecondsKeyPrefix + todayKey)
        usedSecondsToday = seconds
    }
}
