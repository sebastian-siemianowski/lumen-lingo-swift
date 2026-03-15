import SwiftUI

// MARK: - Tier Manager

/// Central service for tier selection, persistence, and feature gating.
/// Follows the same `@Observable` + `.environment()` pattern as `ThemeManager`.
@Observable
final class TierManager {

    // MARK: Published State

    var currentTier: MembershipTier = .free

    /// True during the animated tier-change transition.
    private(set) var isTransitioning: Bool = false

    // MARK: - Tier Access

    /// The string tier ID for interop with MembershipView / UserProfile.
    var currentTierId: String {
        get { currentTier.rawValue }
        set { currentTier = MembershipTier(tierId: newValue) }
    }

    // MARK: - Feature Gating

    /// Check whether the current tier has access to a given feature.
    func hasAccess(to feature: PremiumFeature) -> Bool {
        allowedCount(for: feature) > 0
    }

    /// Returns how many items are allowed for a given feature on the current tier.
    /// Returns `Int.max` for unlimited. Returns `0` for no access.
    func allowedCount(for feature: PremiumFeature) -> Int {
        Self.allowedCount(for: feature, tier: currentTier)
    }

    /// Static tier→feature mapping used by both instance and unit tests.
    static func allowedCount(for feature: PremiumFeature, tier: MembershipTier) -> Int {
        switch feature {
        case .soundscapes:
            switch tier {
            case .free:  return 0
            case .pro:   return 1
            case .elite: return 8
            case .royal, .trial: return 12
            }
        case .languagePairs:
            switch tier {
            case .free:  return 3
            case .pro:   return 7
            case .elite, .royal, .trial: return 25
            }
        case .unlimitedPractice:
            switch tier {
            case .free:  return 0   // 30 min/day limit (0 = not unlimited)
            case .pro, .elite, .royal, .trial: return 1
            }
        case .breathingOrbs:
            switch tier {
            case .free:  return 0
            case .pro, .elite, .royal, .trial: return 6
            }
        case .quantumFlow:
            switch tier {
            case .free, .pro: return 0
            case .elite: return 4
            case .royal, .trial: return 6
            }
        case .nebulaDrift:
            switch tier {
            case .free, .pro: return 0
            case .elite: return 4
            case .royal, .trial: return 6
            }
        case .offlineMode:
            switch tier {
            case .free:  return 0
            case .pro, .elite, .royal, .trial: return 1
            }
        }
    }

    // MARK: - Display Helpers

    /// Localised tier display name.
    var tierDisplayName: String { currentTier.displayName }

    /// Gradient colours for the current tier.
    var tierGradientColors: [Color] { currentTier.gradientColors }

    /// SF Symbol for the current tier.
    var tierIcon: String { currentTier.iconName }

    // MARK: - Sync

    /// Sync tier from `UserProfile` on app launch / view appear.
    func syncFromProfile(_ profile: UserProfile?) {
        guard let profile else { return }
        let tier = MembershipTier(tierId: profile.selectedTierId)
        if tier != currentTier {
            currentTier = tier
        }
    }

    /// Select a new tier: persists to the user's profile and triggers re-evaluation.
    func selectTier(_ tierId: String, profile: UserProfile?) {
        let newTier = MembershipTier(tierId: tierId)
        guard newTier != currentTier else { return }

        let wasUpgrade = newTier.rank > currentTier.rank

        isTransitioning = true
        withAnimation(.spring(response: 0.35, dampingFraction: 0.75)) {
            currentTier = newTier
        }
        profile?.selectedTierId = tierId

        // Haptic
        let feedback = UIImpactFeedbackGenerator(style: wasUpgrade ? .medium : .light)
        feedback.impactOccurred()

        // Graceful feature degradation: stop features the new tier can't access
        if !hasAccess(to: .soundscapes) {
            AudioService.shared.stopAmbient()
        }

        DispatchQueue.main.asyncAfter(deadline: .now() + 0.4) { [weak self] in
            self?.isTransitioning = false
        }
    }
}
