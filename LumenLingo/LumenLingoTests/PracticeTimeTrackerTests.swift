import XCTest
@testable import LumenLingo

/// Tests for PracticeTimeTracker — daily limit enforcement, reset logic, and tier integration.
@MainActor
final class PracticeTimeTrackerTests: XCTestCase {

    private var tracker: PracticeTimeTracker!

    override func setUp() {
        super.setUp()
        tracker = PracticeTimeTracker()
        tracker.resetForTesting()
    }

    override func tearDown() {
        tracker.resetForTesting()
        tracker = nil
        super.tearDown()
    }

    // MARK: - Constants

    func testDailyLimitIs1800Seconds() {
        XCTAssertEqual(PracticeTimeTracker.dailyLimitSeconds, 1800)
    }

    func testWarningThresholdIs1500Seconds() {
        XCTAssertEqual(PracticeTimeTracker.warningThresholdSeconds, 1500)
    }

    // MARK: - Remaining Time

    func testRemainingTimeReturnsNilForUnlimitedTiers() {
        XCTAssertNil(tracker.remainingSeconds(for: .pro))
        XCTAssertNil(tracker.remainingSeconds(for: .elite))
        XCTAssertNil(tracker.remainingSeconds(for: .royal))
        XCTAssertNil(tracker.remainingSeconds(for: .trial))
    }

    func testRemainingTimeReturns1800ForFreshFreeUser() {
        XCTAssertEqual(tracker.remainingSeconds(for: .free), 1800)
    }

    func testRemainingTimeReturns0After1800Seconds() {
        tracker.simulateUsage(seconds: 1800)
        XCTAssertEqual(tracker.remainingSeconds(for: .free), 0)
    }

    func testRemainingTimeNeverNegative() {
        tracker.simulateUsage(seconds: 2000)
        XCTAssertEqual(tracker.remainingSeconds(for: .free), 0)
    }

    // MARK: - Is Limited

    func testFreeTierIsLimited() {
        XCTAssertTrue(tracker.isLimited(for: .free))
    }

    func testProTierIsNotLimited() {
        XCTAssertFalse(tracker.isLimited(for: .pro))
    }

    func testEliteTierIsNotLimited() {
        XCTAssertFalse(tracker.isLimited(for: .elite))
    }

    func testRoyalTierIsNotLimited() {
        XCTAssertFalse(tracker.isLimited(for: .royal))
    }

    func testTrialTierIsNotLimited() {
        XCTAssertFalse(tracker.isLimited(for: .trial))
    }

    // MARK: - Is Expired

    func testNotExpiredInitially() {
        XCTAssertFalse(tracker.isExpired)
    }

    func testExpiredAt1800Seconds() {
        tracker.simulateUsage(seconds: 1800)
        XCTAssertTrue(tracker.isExpired)
    }

    func testExpiredAbove1800Seconds() {
        tracker.simulateUsage(seconds: 2000)
        XCTAssertTrue(tracker.isExpired)
    }

    func testNotExpiredAt1799Seconds() {
        tracker.simulateUsage(seconds: 1799)
        XCTAssertFalse(tracker.isExpired)
    }

    // MARK: - Daily Progress

    func testProgressIsZeroInitially() {
        XCTAssertEqual(tracker.dailyProgress, 0.0, accuracy: 0.001)
    }

    func testProgressIsHalfAt900Seconds() {
        tracker.simulateUsage(seconds: 900)
        XCTAssertEqual(tracker.dailyProgress, 0.5, accuracy: 0.001)
    }

    func testProgressIsOneAt1800Seconds() {
        tracker.simulateUsage(seconds: 1800)
        XCTAssertEqual(tracker.dailyProgress, 1.0, accuracy: 0.001)
    }

    func testProgressCapsAtOne() {
        tracker.simulateUsage(seconds: 3600)
        XCTAssertEqual(tracker.dailyProgress, 1.0, accuracy: 0.001)
    }

    // MARK: - Display Strings

    func testRemainingTimeDisplayForUnlimited() {
        XCTAssertEqual(tracker.remainingTimeDisplay(for: .pro), "Unlimited")
    }

    func testRemainingTimeDisplayForFreshFree() {
        XCTAssertEqual(tracker.remainingTimeDisplay(for: .free), "30 min left")
    }

    func testRemainingTimeDisplayLimitReached() {
        tracker.simulateUsage(seconds: 1800)
        XCTAssertEqual(tracker.remainingTimeDisplay(for: .free), "Limit reached")
    }

    // MARK: - Session Tracking

    func testSessionStartSetsIsTracking() {
        tracker.startSession()
        XCTAssertTrue(tracker.isTracking)
        tracker.endSession()
    }

    func testSessionEndSetsNotTracking() {
        tracker.startSession()
        tracker.endSession()
        XCTAssertFalse(tracker.isTracking)
    }

    func testEndSessionReturnsElapsedSeconds() {
        tracker.startSession()
        // No real time passes in unit test, so elapsed should be ~0
        let elapsed = tracker.endSession()
        XCTAssertGreaterThanOrEqual(elapsed, 0)
    }

    func testDoubleStartIsNoOp() {
        tracker.startSession()
        tracker.startSession() // Should not crash or reset
        XCTAssertTrue(tracker.isTracking)
        tracker.endSession()
    }

    func testEndWithoutStartReturnsZero() {
        let elapsed = tracker.endSession()
        XCTAssertEqual(elapsed, 0)
    }

    // MARK: - Pause / Resume

    func testPauseSessionStopsTimer() {
        tracker.startSession()
        tracker.pauseSession()
        // Still considered tracking (paused, not ended)
        XCTAssertTrue(tracker.isTracking)
        tracker.endSession()
    }

    func testResumeAfterPause() {
        tracker.startSession()
        tracker.pauseSession()
        tracker.resumeSession()
        XCTAssertTrue(tracker.isTracking)
        tracker.endSession()
    }

    // MARK: - Daily Reset

    func testDateKeyFormat() {
        let date = Date()
        let key = PracticeTimeTracker.dateKey(for: date)
        // Should be in yyyy-MM-dd format
        let components = key.split(separator: "-")
        XCTAssertEqual(components.count, 3)
        XCTAssertEqual(components[0].count, 4) // year
        XCTAssertEqual(components[1].count, 2) // month
        XCTAssertEqual(components[2].count, 2) // day
    }

    func testSimulateUsageUpdatesUsedSeconds() {
        tracker.simulateUsage(seconds: 500)
        XCTAssertEqual(tracker.usedSecondsToday, 500)
    }

    func testResetClearsUsage() {
        tracker.simulateUsage(seconds: 1000)
        tracker.resetForTesting()
        XCTAssertEqual(tracker.usedSecondsToday, 0)
    }

    // MARK: - Seconds Until Reset

    func testSecondsUntilResetIsPositive() {
        XCTAssertGreaterThan(tracker.secondsUntilReset, 0)
    }

    func testSecondsUntilResetIsLessThan24Hours() {
        XCTAssertLessThanOrEqual(tracker.secondsUntilReset, 86400)
    }

    // MARK: - Reset Countdown Display

    func testResetCountdownDisplayNotEmpty() {
        XCTAssertFalse(tracker.resetCountdownDisplay.isEmpty)
    }

    // MARK: - Tier Manager Integration

    func testTierManagerFreeTierHasNoUnlimitedPractice() {
        XCTAssertEqual(TierManager.allowedCount(for: .unlimitedPractice, tier: .free), 0)
    }

    func testTierManagerProTierHasUnlimitedPractice() {
        XCTAssertEqual(TierManager.allowedCount(for: .unlimitedPractice, tier: .pro), 1)
    }

    func testTierManagerEliteTierHasUnlimitedPractice() {
        XCTAssertEqual(TierManager.allowedCount(for: .unlimitedPractice, tier: .elite), 1)
    }

    func testTierManagerRoyalTierHasUnlimitedPractice() {
        XCTAssertEqual(TierManager.allowedCount(for: .unlimitedPractice, tier: .royal), 1)
    }

    func testTierManagerTrialTierHasUnlimitedPractice() {
        XCTAssertEqual(TierManager.allowedCount(for: .unlimitedPractice, tier: .trial), 1)
    }

    // MARK: - Notification Names

    func testFiveMinuteWarningNotificationName() {
        XCTAssertEqual(Notification.Name.practiceTimeFiveMinuteWarning.rawValue, "practiceTimeFiveMinuteWarning")
    }

    func testPracticeExpiredNotificationName() {
        XCTAssertEqual(Notification.Name.practiceTimeExpired.rawValue, "practiceTimeExpired")
    }
}
