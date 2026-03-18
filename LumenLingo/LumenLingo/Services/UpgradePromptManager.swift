import SwiftUI

// MARK: - Upgrade Prompt Manager

/// Tracks which upgrade prompts have been shown during the current session
/// and manages post-session nudge frequency. Ensures prompts are non-aggressive:
/// each feature prompt appears at most once per session.
@Observable
final class UpgradePromptManager {

    // MARK: - Session Tracking

    /// Features whose upgrade prompts have already been shown this session.
    private(set) var shownPrompts: Set<PremiumFeature> = []

    /// Whether the given feature's upgrade prompt should be shown.
    /// Returns `false` if already shown this session.
    func shouldShowPrompt(for feature: PremiumFeature) -> Bool {
        !shownPrompts.contains(feature)
    }

    /// Record that an upgrade prompt was shown for a feature.
    func markPromptShown(for feature: PremiumFeature) {
        shownPrompts.insert(feature)
    }

    /// Reset session tracking (e.g., on new app session).
    func resetSession() {
        shownPrompts.removeAll()
    }

    // MARK: - Post-Session Nudge

    private static let sessionCountKey = "upgradeNudge.sessionCount"
    private static let nudgeHiddenKey = "upgradeNudge.hiddenForever"
    private static let carouselHiddenKey = "premiumCarousel.hiddenForever"

    /// Increment completed session count and return whether to show the nudge.
    func recordCompletedSession() -> Bool {
        guard !isNudgeHiddenForever else { return false }
        let count = completedSessionCount + 1
        UserDefaults.standard.set(count, forKey: Self.sessionCountKey)
        return count % 3 == 0
    }

    /// The total number of completed sessions.
    var completedSessionCount: Int {
        UserDefaults.standard.integer(forKey: Self.sessionCountKey)
    }

    /// Rotating benefit text index based on session count.
    var nudgeBenefitIndex: Int {
        let count = max(completedSessionCount, 1)
        return (count / 3) % nudgeBenefits.count
    }

    /// Array of rotating benefit strings for the post-session nudge.
    let nudgeBenefits: [String] = [
        "Unlock ambient soundscapes to stay in the zone",
        "Practice without daily time limits",
        "Beautiful breathing orb animations while you learn",
        "Access 25+ language pairs worldwide",
        "Learn offline — anywhere, anytime"
    ]

    /// Whether the user has permanently hidden the nudge.
    var isNudgeHiddenForever: Bool {
        get { UserDefaults.standard.bool(forKey: Self.nudgeHiddenKey) }
        set { UserDefaults.standard.set(newValue, forKey: Self.nudgeHiddenKey) }
    }

    /// Whether the user has permanently hidden the carousel.
    var isCarouselHiddenForever: Bool {
        get { UserDefaults.standard.bool(forKey: Self.carouselHiddenKey) }
        set { UserDefaults.standard.set(newValue, forKey: Self.carouselHiddenKey) }
    }
}
