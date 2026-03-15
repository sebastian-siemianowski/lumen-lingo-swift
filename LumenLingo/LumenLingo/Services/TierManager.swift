import SwiftUI

// MARK: - Notifications

extension Notification.Name {
    static let soundscapeAutoStopped = Notification.Name("soundscapeAutoStopped")
    static let languagePairAutoSwitched = Notification.Name("languagePairAutoSwitched")
    static let breathingOrbsAutoDisabled = Notification.Name("breathingOrbsAutoDisabled")
    static let quantumFlowAutoAdjusted = Notification.Name("quantumFlowAutoAdjusted")
    static let nebulaDriftAutoAdjusted = Notification.Name("nebulaDriftAutoAdjusted")
    static let offlineModeAutoDisabled = Notification.Name("offlineModeAutoDisabled")
}

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

    /// Emoji string for the current tier.
    var tierEmoji: String { currentTier.emoji }

    // MARK: - Dashboard Widget Configuration

    /// Widgets available on the dashboard, varying by tier.
    enum DashboardWidget: String, CaseIterable, Equatable {
        case gameModes
        case overviewStats
        case dailyTimeRemaining
        case premiumCarousel
        case soundscapeNowPlaying
        case offlineStatus
        case royalBadge
    }

    /// Configuration listing which widgets a tier's dashboard should display.
    struct DashboardWidgetConfig: Equatable {
        let widgets: [DashboardWidget]
    }

    /// Returns the dashboard widget configuration for the current tier.
    func dashboardWidgets() -> DashboardWidgetConfig {
        Self.dashboardWidgets(for: currentTier)
    }

    /// Static tier→widget mapping for unit testing.
    static func dashboardWidgets(for tier: MembershipTier) -> DashboardWidgetConfig {
        var widgets: [DashboardWidget] = [.gameModes, .overviewStats]
        switch tier {
        case .free:
            widgets.append(contentsOf: [.dailyTimeRemaining, .premiumCarousel])
        case .pro:
            widgets.append(contentsOf: [.soundscapeNowPlaying, .offlineStatus])
        case .elite:
            widgets.append(contentsOf: [.soundscapeNowPlaying, .offlineStatus])
        case .royal, .trial:
            widgets.append(contentsOf: [.soundscapeNowPlaying, .offlineStatus, .royalBadge])
        }
        return DashboardWidgetConfig(widgets: widgets)
    }

    // MARK: - Soundscape Gating

    /// IDs of soundscapes unlocked for a given session (previewed once per session).
    private(set) var previewedSoundscapeIds: Set<String> = []

    /// Returns all soundscapes sorted by unlock priority, limited by tier.
    func unlockedSoundscapes() -> [Soundscape] {
        let limit = allowedCount(for: .soundscapes)
        return Soundscape.allCases
            .sorted { $0.sortOrder < $1.sortOrder }
            .prefix(limit)
            .map { $0 }
    }

    /// Check whether a specific soundscape is unlocked for the current tier.
    func isSoundscapeUnlocked(_ soundscape: Soundscape) -> Bool {
        soundscape.sortOrder < allowedCount(for: .soundscapes)
    }

    /// True if this soundscape has already been previewed this session.
    func hasPreviewedSoundscape(_ soundscape: Soundscape) -> Bool {
        previewedSoundscapeIds.contains(soundscape.id)
    }

    /// Mark a soundscape as previewed (once per session).
    func markSoundscapePreviewed(_ soundscape: Soundscape) {
        previewedSoundscapeIds.insert(soundscape.id)
    }

    // MARK: - Language Pair Gating

    /// Returns all language pairs sorted by priority, limited by the current tier.
    func unlockedLanguagePairs() -> [LanguagePair] {
        let limit = allowedCount(for: .languagePairs)
        return Array(LanguagePair.withContent.prefix(limit))
    }

    /// Check whether a specific language pair is unlocked for the current tier.
    func isLanguagePairUnlocked(_ pair: LanguagePair) -> Bool {
        guard let order = pair.priorityOrder else { return false }
        return order < allowedCount(for: .languagePairs)
    }

    /// Returns the minimum tier required to unlock a given language pair.
    func minimumTierForPair(_ pair: LanguagePair) -> MembershipTier {
        pair.minimumTier
    }

    // MARK: - Breathing Orbs Gating

    /// Whether the current tier can access breathing orb schemes.
    var breathingOrbsAccessible: Bool {
        hasAccess(to: .breathingOrbs)
    }

    // MARK: - Quantum Flow Gating

    /// Whether the current tier can access any quantum flow scene.
    var quantumFlowAccessible: Bool {
        hasAccess(to: .quantumFlow)
    }

    /// Returns all quantum flow scenes sorted by unlock priority, limited by tier.
    func unlockedQuantumScenes() -> [QuantumFlowScene] {
        let limit = allowedCount(for: .quantumFlow)
        return QuantumFlowScene.allCases
            .sorted { $0.sortOrder < $1.sortOrder }
            .prefix(limit)
            .map { $0 }
    }

    /// Check whether a specific quantum flow scene is unlocked for the current tier.
    func isQuantumSceneUnlocked(_ scene: QuantumFlowScene) -> Bool {
        scene.sortOrder < allowedCount(for: .quantumFlow)
    }

    // MARK: - Nebula Drift Gating

    /// Whether the current tier can access any nebula drift preset.
    var nebulaDriftAccessible: Bool {
        hasAccess(to: .nebulaDrift)
    }

    /// Returns all nebula drift presets sorted by unlock priority, limited by tier.
    func unlockedNebulaPresets() -> [NebulaPreset] {
        let limit = allowedCount(for: .nebulaDrift)
        return NebulaPreset.allCases
            .sorted { $0.sortOrder < $1.sortOrder }
            .prefix(limit)
            .map { $0 }
    }

    /// Check whether a specific nebula drift preset is unlocked for the current tier.
    func isNebulaPresetUnlocked(_ preset: NebulaPreset) -> Bool {
        preset.sortOrder < allowedCount(for: .nebulaDrift)
    }

    // MARK: - Offline Mode Gating

    /// Whether the current tier can use offline mode (Pro+).
    var offlineModeAvailable: Bool {
        hasAccess(to: .offlineMode)
    }

    // MARK: - Sync

    /// Sync tier from `UserProfile` on app launch / view appear.
    func syncFromProfile(_ profile: UserProfile?) {
        guard let profile else { return }
        let tier = MembershipTier(tierId: profile.selectedTierId)
        if tier != currentTier {
            currentTier = tier
        }

        // Clear saved soundscape if it exceeds the tier's limit
        if let soundscape = profile.soundscapeEnum, !isSoundscapeUnlocked(soundscape) {
            profile.soundscapeEnum = nil
            profile.soundscapeVariantIndex = 0
        }
    }

    // MARK: - Royal Trial Lifecycle

    /// Start the 14-day Royal Trial. Can only be started once per user.
    /// Returns `true` if the trial was started, `false` if already used.
    @discardableResult
    func startTrial(profile: UserProfile?) -> Bool {
        guard let profile, !profile.hasUsedTrial else { return false }
        profile.trialStartDate = Date.now
        selectTier("trial", profile: profile)
        return true
    }

    /// Check if the trial has expired and auto-downgrade to Free.
    /// Returns `true` if the trial just expired (caller should show TrialEndedView).
    func checkTrialExpiration(profile: UserProfile?) -> Bool {
        guard let profile,
              currentTier == .trial,
              profile.isTrialExpired,
              !profile.trialExpiredShown else { return false }
        selectTier("free", profile: profile)
        return true
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

        // Graceful feature degradation on downgrade
        if !wasUpgrade {
            let audio = AudioService.shared
            if let active = audio.activeSoundscape {
                if !isSoundscapeUnlocked(active) {
                    // Active soundscape now exceeds tier limit — fade out
                    audio.stopAmbient(fadeDuration: 2.0)
                    // Post notification for toast display
                    NotificationCenter.default.post(name: .soundscapeAutoStopped, object: nil)
                }
            } else if !hasAccess(to: .soundscapes) {
                audio.stopAmbient()
            }

            // Breathing orbs: disable on downgrade to free
            if !breathingOrbsAccessible, profile?.breathingOrbsEnabled == true {
                profile?.breathingOrbsEnabled = false
                profile?.breathingOrbScheme = BreathingOrbScheme.barcelonaNights.rawValue
                NotificationCenter.default.post(name: .breathingOrbsAutoDisabled, object: nil)
            }

            // Quantum flow: adjust or disable on downgrade
            if let profile {
                let qfLimit = allowedCount(for: .quantumFlow)
                if qfLimit == 0 && profile.quantumFlowEnabled {
                    // No access at all — disable entirely
                    profile.quantumFlowEnabled = false
                    profile.quantumFlowScene = QuantumFlowScene.dubaiCelestialMirage.rawValue
                    NotificationCenter.default.post(name: .quantumFlowAutoAdjusted, object: nil)
                } else if qfLimit > 0 {
                    let activeScene = profile.quantumScene
                    if !isQuantumSceneUnlocked(activeScene) {
                        // Active scene exceeds new limit — switch to highest allowed
                        let highest = unlockedQuantumScenes().last ?? .dubaiCelestialMirage
                        profile.quantumScene = highest
                        NotificationCenter.default.post(name: .quantumFlowAutoAdjusted, object: nil)
                    }
                }
            }

            // Nebula drift: adjust or disable on downgrade
            if let profile {
                let ndLimit = allowedCount(for: .nebulaDrift)
                if ndLimit == 0 && profile.nebulaDriftEnabled {
                    // No access at all — disable entirely
                    profile.nebulaDriftEnabled = false
                    profile.nebulaPresetEnum = .lagoonNebula
                    NotificationCenter.default.post(name: .nebulaDriftAutoAdjusted, object: nil)
                } else if ndLimit > 0 {
                    let activePreset = profile.nebulaPresetEnum
                    if !isNebulaPresetUnlocked(activePreset) {
                        // Active preset exceeds new limit — switch to highest allowed
                        let highest = unlockedNebulaPresets().last ?? .lagoonNebula
                        profile.nebulaPresetEnum = highest
                        NotificationCenter.default.post(name: .nebulaDriftAutoAdjusted, object: nil)
                    }
                }
            }

            // Offline mode: disable on downgrade to free
            if !offlineModeAvailable, profile?.offlineModeEnabled == true {
                profile?.offlineModeEnabled = false
                NotificationCenter.default.post(name: .offlineModeAutoDisabled, object: nil)
            }
        }

        DispatchQueue.main.asyncAfter(deadline: .now() + 0.4) { [weak self] in
            self?.isTransitioning = false
        }
    }
}
