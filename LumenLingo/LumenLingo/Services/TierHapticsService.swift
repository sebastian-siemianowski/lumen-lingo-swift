import Foundation

// MARK: - Tier-Aware Haptics Service

/// Wraps `HapticsService` to provide tier-scaled haptic feedback.
/// Free gets basic impacts; Pro gets double-tap; Elite gets richer patterns;
/// Royal/Trial gets full custom patterns for every event.
@Observable
final class TierHapticsService {

    static let shared = TierHapticsService()

    private init() {}

    // MARK: - Tier-Aware Actions

    /// Correct answer haptic, scaled by tier.
    func correctAnswer(level: TierManager.HapticLevel) {
        let haptics = HapticsService.shared
        guard haptics.isEnabled else { return }

        switch level {
        case .basic:
            haptics.correctAnswer()
        case .enhanced:
            haptics.doubleTap()
        case .rich:
            haptics.enhancedDoubleTap()
        case .premium:
            haptics.enhancedDoubleTap()
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.15) {
                haptics.success()
            }
        }
    }

    /// Wrong answer haptic, scaled by tier.
    func wrongAnswer(level: TierManager.HapticLevel) {
        let haptics = HapticsService.shared
        guard haptics.isEnabled else { return }

        switch level {
        case .basic:
            haptics.wrongAnswer()
        case .enhanced:
            haptics.wrongAnswer()
        case .rich, .premium:
            haptics.error()
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.1) {
                haptics.wrongAnswer()
            }
        }
    }

    /// Card flip haptic, scaled by tier.
    func cardFlip(level: TierManager.HapticLevel) {
        let haptics = HapticsService.shared
        guard haptics.isEnabled else { return }

        switch level {
        case .basic:
            haptics.cardFlip()
        case .enhanced, .rich:
            haptics.cardFlip()
        case .premium:
            haptics.light()
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.05) {
                haptics.cardFlip()
            }
        }
    }

    /// Streak milestone haptic, scaled by tier.
    func streakMilestone(level: TierManager.HapticLevel, count: Int) {
        let haptics = HapticsService.shared
        guard haptics.isEnabled else { return }

        switch level {
        case .basic:
            haptics.streakBuilding(count: count)
        case .enhanced:
            haptics.streakBuilding(count: count)
        case .rich, .premium:
            haptics.streakMilestone()
        }
    }
}
