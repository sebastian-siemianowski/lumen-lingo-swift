import SwiftUI
import os.log

// MARK: - Logging

private let tierLog = Logger(subsystem: "com.lumenlingo", category: "TierManager")

// MARK: - Cloud Key-Value Store Protocol

/// Abstraction over NSUbiquitousKeyValueStore for testability.
protocol CloudKeyValueStore: AnyObject {
    func string(forKey key: String) -> String?
    func double(forKey key: String) -> Double
    func set(_ value: Any?, forKey key: String)
    func removeObject(forKey key: String)
    @discardableResult func synchronize() -> Bool
}

extension NSUbiquitousKeyValueStore: CloudKeyValueStore {}

/// Stub store used when iCloud KVS entitlement is not provisioned.
/// All reads return nil/0; writes are no-ops.
final class InMemoryCloudKeyValueStore: CloudKeyValueStore {
    private var store: [String: Any] = [:]
    func string(forKey key: String) -> String? { store[key] as? String }
    func double(forKey key: String) -> Double { store[key] as? Double ?? 0 }
    func set(_ value: Any?, forKey key: String) { store[key] = value }
    func removeObject(forKey key: String) { store[key] = nil }
    @discardableResult func synchronize() -> Bool { true }
}

// MARK: - Notifications

extension Notification.Name {
    static let soundscapeAutoStopped = Notification.Name("soundscapeAutoStopped")
    static let languagePairAutoSwitched = Notification.Name("languagePairAutoSwitched")
    static let breathingOrbsAutoDisabled = Notification.Name("breathingOrbsAutoDisabled")
    static let quantumFlowAutoAdjusted = Notification.Name("quantumFlowAutoAdjusted")
    static let nebulaDriftAutoAdjusted = Notification.Name("nebulaDriftAutoAdjusted")
    static let offlineModeAutoDisabled = Notification.Name("offlineModeAutoDisabled")
    static let offlineModeAutoEnabled = Notification.Name("offlineModeAutoEnabled")
    static let settingsRestored = Notification.Name("settingsRestored")
}

// MARK: - Tier Manager

/// Central service for tier selection, persistence, and feature gating.
/// Follows the same `@Observable` + `.environment()` pattern as `ThemeManager`.
/// All state mutations are serialized on the main actor for thread safety.
@MainActor
@Observable
final class TierManager {

    // MARK: Published State

    var currentTier: MembershipTier = .free

    /// The tier the user held before the most recent tier change.
    /// Used by transition animations to calculate feature diffs.
    private(set) var previousTier: MembershipTier?

    /// True during the animated tier-change transition.
    private(set) var isTransitioning: Bool = false

    /// Set when the user changes tier — drives the celebration overlay.
    var showUpgradeCelebration: Bool = false
    var upgradedToTier: MembershipTier = .free
    var isTierUpgrade: Bool = true

    /// Controls the feature transition overlay (unlock ripple / lock dimming).
    var showFeatureTransition: Bool = false

    /// Features that changed access state during the last tier transition.
    /// Positive = newly unlocked, reported on upgrade.
    private(set) var newlyUnlockedFeatures: [PremiumFeature] = []
    /// Features that lost access during the last tier transition (downgrade).
    private(set) var newlyLockedFeatures: [PremiumFeature] = []

    // MARK: - Tier Access

    /// The string tier ID for interop with MembershipView / UserProfile.
    var currentTierId: String {
        get { currentTier.rawValue }
        set { currentTier = MembershipTier(tierId: newValue) }
    }

    // MARK: - Feature Gating

    /// Check whether the current tier has access to a given feature.
    /// In DEBUG builds, checks for feature overrides first.
    func hasAccess(to feature: PremiumFeature) -> Bool {
        #if DEBUG
        if let override = featureOverride(for: feature) {
            return override
        }
        #endif
        return allowedCount(for: feature) > 0
    }

    /// Returns how many items are allowed for a given feature on the current tier.
    /// Returns `Int.max` for unlimited. Returns `0` for no access.
    /// In DEBUG builds, checks for feature overrides first.
    func allowedCount(for feature: PremiumFeature) -> Int {
        #if DEBUG
        if let override = featureOverride(for: feature) {
            return override ? Self.allowedCount(for: feature, tier: .royal) : 0
        }
        #endif
        return Self.allowedCount(for: feature, tier: currentTier)
    }

    /// Returns all premium features with their enabled/disabled status for the current tier.
    /// Ordered by perceived value (most impactful first).
    func allFeatures() -> [(feature: PremiumFeature, enabled: Bool)] {
        PremiumFeature.allCases.map { feature in
            (feature: feature, enabled: hasAccess(to: feature))
        }
    }

    /// Computes which features changed access between two tiers.
    /// - Returns: (unlocked: features gaining access, locked: features losing access)
    nonisolated static func featureDiff(
        from oldTier: MembershipTier,
        to newTier: MembershipTier
    ) -> (unlocked: [PremiumFeature], locked: [PremiumFeature]) {
        var unlocked: [PremiumFeature] = []
        var locked: [PremiumFeature] = []
        for feature in PremiumFeature.allCases {
            let oldAccess = allowedCount(for: feature, tier: oldTier) > 0
            let newAccess = allowedCount(for: feature, tier: newTier) > 0
            if !oldAccess && newAccess {
                unlocked.append(feature)
            } else if oldAccess && !newAccess {
                locked.append(feature)
            }
        }
        return (unlocked, locked)
    }

    /// Static tier→feature mapping used by both instance and unit tests.
    /// Not affected by debug overrides — always returns the canonical mapping.
    /// `nonisolated` because this is a pure function with no state access.
    nonisolated static func allowedCount(for feature: PremiumFeature, tier: MembershipTier) -> Int {
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
        case .flashcardDeckSize:
            switch tier {
            case .free:          return 50
            case .pro:           return 75
            case .elite:         return 100
            case .royal, .trial: return Int.max
            }
        case .grammarDifficulty:
            switch tier {
            case .free:          return 1   // beginner only
            case .pro:           return 2   // beginner + intermediate
            case .elite, .royal, .trial: return 3  // all difficulties
            }
        case .wordBuilderDifficulty:
            switch tier {
            case .free:          return 1   // beginner only
            case .pro:           return 2   // beginner + intermediate
            case .elite, .royal, .trial: return 3  // all difficulties
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

    // MARK: - XP Multiplier

    /// XP multiplier for the current tier.
    var xpMultiplier: Double {
        Self.xpMultiplier(for: currentTier)
    }

    /// Static tier→multiplier mapping for unit testing.
    static func xpMultiplier(for tier: MembershipTier) -> Double {
        switch tier {
        case .free:          return 1.0
        case .pro:           return 1.25
        case .elite:         return 1.5
        case .royal, .trial: return 2.0
        }
    }

    // MARK: - Session Results Configuration

    /// Sections available in the session results screen, gated by tier.
    enum SessionResultsSection: String, CaseIterable, Equatable {
        case basicStats           // XP, accuracy, cards reviewed
        case timeAndStreak        // time spent breakdown, streak info
        case previousComparison   // comparison to previous session
        case performanceGraph     // last 7 sessions accuracy graph
        case weakAreas            // categories with lowest accuracy
        case personalizedTips     // tips based on mistakes
        case shareableCard        // shareable result image
    }

    /// Configuration listing which result sections a tier should display.
    struct SessionResultsConfig: Equatable {
        let sections: [SessionResultsSection]
    }

    /// Returns the session results configuration for the current tier.
    func sessionResultsConfig() -> SessionResultsConfig {
        Self.sessionResultsConfig(for: currentTier)
    }

    /// Static tier→results mapping for unit testing.
    static func sessionResultsConfig(for tier: MembershipTier) -> SessionResultsConfig {
        var sections: [SessionResultsSection] = [.basicStats]
        switch tier {
        case .free:
            break
        case .pro:
            sections.append(contentsOf: [.timeAndStreak, .previousComparison])
        case .elite:
            sections.append(contentsOf: [.timeAndStreak, .previousComparison, .performanceGraph, .weakAreas])
        case .royal, .trial:
            sections.append(contentsOf: [.timeAndStreak, .previousComparison, .performanceGraph, .weakAreas, .personalizedTips, .shareableCard])
        }
        return SessionResultsConfig(sections: sections)
    }

    /// Returns the minimum tier required for a given results section.
    static func minimumTierForSection(_ section: SessionResultsSection) -> MembershipTier {
        switch section {
        case .basicStats:         return .free
        case .timeAndStreak:      return .pro
        case .previousComparison: return .pro
        case .performanceGraph:   return .elite
        case .weakAreas:          return .elite
        case .personalizedTips:   return .royal
        case .shareableCard:      return .royal
        }
    }

    // MARK: - Journey Stats Configuration

    /// Sections available in the Journey / Progress view, gated by tier.
    enum JourneyStatsSection: String, CaseIterable, Equatable {
        case basicStats           // total XP, sessions, current streak
        case gameBreakdown        // per-game-type stats table
        case dailyXPChart         // bar chart of last 7 days
        case weeklyTrend          // line chart this week vs last week
        case accuracyHeatmap      // category grid colour-coded by accuracy
        case monthlyReport        // summary card with key metrics
        case milestonePredictions // estimated dates for next milestones
        case exportData           // export learning data (Elite+)
        case insights             // deep analytics dashboard (Royal)
    }

    /// Configuration listing which journey sections a tier should display.
    struct JourneyStatsConfig: Equatable {
        let sections: [JourneyStatsSection]
    }

    /// Returns the journey stats configuration for the current tier.
    func journeyStatsConfig() -> JourneyStatsConfig {
        Self.journeyStatsConfig(for: currentTier)
    }

    /// Static tier→journey mapping for unit testing.
    static func journeyStatsConfig(for tier: MembershipTier) -> JourneyStatsConfig {
        var sections: [JourneyStatsSection] = [.basicStats]
        switch tier {
        case .free:
            break
        case .pro:
            sections.append(contentsOf: [.gameBreakdown, .dailyXPChart])
        case .elite:
            sections.append(contentsOf: [.gameBreakdown, .dailyXPChart, .weeklyTrend, .accuracyHeatmap, .exportData])
        case .royal, .trial:
            sections.append(contentsOf: [.gameBreakdown, .dailyXPChart, .weeklyTrend, .accuracyHeatmap, .monthlyReport, .milestonePredictions, .exportData, .insights])
        }
        return JourneyStatsConfig(sections: sections)
    }

    /// Returns the minimum tier required for a given journey section.
    static func minimumTierForJourneySection(_ section: JourneyStatsSection) -> MembershipTier {
        switch section {
        case .basicStats:           return .free
        case .gameBreakdown:        return .pro
        case .dailyXPChart:         return .pro
        case .weeklyTrend:          return .elite
        case .accuracyHeatmap:      return .elite
        case .monthlyReport:        return .royal
        case .milestonePredictions: return .royal
        case .exportData:           return .elite
        case .insights:             return .royal
        }
    }

    // MARK: - Haptic Level

    /// Haptic complexity level, gated by tier.
    enum HapticLevel: String, CaseIterable, Equatable {
        case basic    // Free — single impact on key actions
        case enhanced // Pro — double-tap on correct answers
        case rich     // Elite — enhanced + continuous during swipes
        case premium  // Royal — custom patterns for 4 distinct events
    }

    /// Returns the haptic level for the current tier.
    var hapticLevel: HapticLevel {
        Self.hapticLevel(for: currentTier)
    }

    /// Static tier→haptic level mapping for unit testing.
    static func hapticLevel(for tier: MembershipTier) -> HapticLevel {
        switch tier {
        case .free:          return .basic
        case .pro:           return .enhanced
        case .elite:         return .rich
        case .royal, .trial: return .premium
        }
    }

    // MARK: - Milestone Badge Styles

    /// Visual style for milestone badges, varying by tier.
    enum MilestoneBadgeStyle: String, CaseIterable, Equatable {
        case basic        // flat color, no animation
        case gradient     // linear gradient fill
        case sparkle      // gradient + particle sparkle on appear
        case holographic  // animated rainbow gradient sweep + confetti
    }

    /// Returns the milestone badge style for the current tier.
    var milestoneBadgeStyle: MilestoneBadgeStyle {
        Self.milestoneBadgeStyle(for: currentTier)
    }

    /// Static tier→badge style mapping for unit testing.
    static func milestoneBadgeStyle(for tier: MembershipTier) -> MilestoneBadgeStyle {
        switch tier {
        case .free:          return .basic
        case .pro:           return .gradient
        case .elite:         return .sparkle
        case .royal, .trial: return .holographic
        }
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

    // MARK: - Content Personalization Gating

    /// Maximum number of flashcard items per category for the current tier.
    /// Returns `Int.max` for unlimited (Royal/Trial).
    var flashcardLimit: Int {
        allowedCount(for: .flashcardDeckSize)
    }

    /// Static version for unit testing.
    nonisolated static func flashcardLimit(for tier: MembershipTier) -> Int {
        allowedCount(for: .flashcardDeckSize, tier: tier)
    }

    /// Maximum difficulty level allowed for grammar/wordbuilder categories.
    /// Returns the highest `Difficulty.numericLevel` the current tier can access.
    func maxDifficultyLevel(for gameType: GameType) -> Int {
        switch gameType {
        case .grammar:     return allowedCount(for: .grammarDifficulty)
        case .wordBuilder: return allowedCount(for: .wordBuilderDifficulty)
        case .flashCards:  return Difficulty.advanced.numericLevel // no difficulty gating for flashcards
        }
    }

    /// Static version for unit testing.
    nonisolated static func maxDifficultyLevel(for gameType: GameType, tier: MembershipTier) -> Int {
        switch gameType {
        case .grammar:     return allowedCount(for: .grammarDifficulty, tier: tier)
        case .wordBuilder: return allowedCount(for: .wordBuilderDifficulty, tier: tier)
        case .flashCards:  return Difficulty.advanced.numericLevel
        }
    }

    /// Whether a category's difficulty is accessible for the current tier.
    func isCategoryAccessible(_ difficulty: Difficulty, gameType: GameType) -> Bool {
        difficulty.numericLevel <= maxDifficultyLevel(for: gameType)
    }

    /// The minimum tier required to unlock a given difficulty level for a game type.
    nonisolated static func minimumTierForDifficulty(_ difficulty: Difficulty, gameType: GameType) -> MembershipTier {
        for tier in [MembershipTier.free, .pro, .elite, .royal] {
            if difficulty.numericLevel <= maxDifficultyLevel(for: gameType, tier: tier) {
                return tier
            }
        }
        return .royal
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

    // MARK: - Dormant Settings

    /// Keys used in the dormant settings dictionary.
    private enum DormantKey {
        static let soundscape = "soundscape"
        static let soundscapeVariant = "soundscapeVariant"
        static let breathingOrbsEnabled = "breathingOrbsEnabled"
        static let breathingOrbScheme = "breathingOrbScheme"
        static let quantumFlowEnabled = "quantumFlowEnabled"
        static let quantumFlowScene = "quantumFlowScene"
        static let nebulaDriftEnabled = "nebulaDriftEnabled"
        static let nebulaPreset = "nebulaPreset"
        static let offlineModeEnabled = "offlineModeEnabled"
    }

    /// Capture tier-sensitive settings before they are reset on downgrade.
    func captureDormantSettings(profile: UserProfile) {
        var settings = profile.dormantSettings

        // Only capture settings that are actually configured (non-default)
        if !profile.selectedSoundscape.isEmpty {
            settings[DormantKey.soundscape] = profile.selectedSoundscape
            settings[DormantKey.soundscapeVariant] = String(profile.soundscapeVariantIndex)
        }
        if profile.breathingOrbsEnabled {
            settings[DormantKey.breathingOrbsEnabled] = "true"
            settings[DormantKey.breathingOrbScheme] = profile.breathingOrbScheme
        }
        if profile.quantumFlowEnabled {
            settings[DormantKey.quantumFlowEnabled] = "true"
            settings[DormantKey.quantumFlowScene] = profile.quantumFlowScene
        }
        if profile.nebulaDriftEnabled {
            settings[DormantKey.nebulaDriftEnabled] = "true"
            settings[DormantKey.nebulaPreset] = profile.nebulaPreset
        }
        if profile.offlineModeEnabled {
            settings[DormantKey.offlineModeEnabled] = "true"
        }

        profile.dormantSettings = settings
    }

    /// Restore dormant settings that are valid for the new (higher) tier.
    /// Returns true if any settings were restored.
    @discardableResult
    func restoreDormantSettings(profile: UserProfile) -> Bool {
        let settings = profile.dormantSettings
        guard !settings.isEmpty else { return false }

        var restored = false

        // Soundscape — only restore if new tier has access
        if hasAccess(to: .soundscapes),
           let savedSoundscape = settings[DormantKey.soundscape],
           let soundscape = Soundscape(rawValue: savedSoundscape),
           isSoundscapeUnlocked(soundscape) {
            profile.selectedSoundscape = savedSoundscape
            if let variant = settings[DormantKey.soundscapeVariant], let idx = Int(variant) {
                profile.soundscapeVariantIndex = idx
            }
            restored = true
        }

        // Breathing orbs — Pro+
        if hasAccess(to: .breathingOrbs),
           settings[DormantKey.breathingOrbsEnabled] == "true" {
            profile.breathingOrbsEnabled = true
            if let scheme = settings[DormantKey.breathingOrbScheme],
               BreathingOrbScheme(rawValue: scheme) != nil {
                profile.breathingOrbScheme = scheme
            }
            restored = true
        }

        // Quantum flow — Elite+
        if hasAccess(to: .quantumFlow),
           settings[DormantKey.quantumFlowEnabled] == "true" {
            profile.quantumFlowEnabled = true
            if let scene = settings[DormantKey.quantumFlowScene],
               let qfScene = QuantumFlowScene(rawValue: scene),
               isQuantumSceneUnlocked(qfScene) {
                profile.quantumFlowScene = scene
            }
            restored = true
        }

        // Nebula drift — Elite+
        if hasAccess(to: .nebulaDrift),
           settings[DormantKey.nebulaDriftEnabled] == "true" {
            profile.nebulaDriftEnabled = true
            if let preset = settings[DormantKey.nebulaPreset],
               let ndPreset = NebulaPreset(rawValue: preset),
               isNebulaPresetUnlocked(ndPreset) {
                profile.nebulaPreset = preset
            }
            restored = true
        }

        // Offline mode — Pro+
        if hasAccess(to: .offlineMode),
           settings[DormantKey.offlineModeEnabled] == "true" {
            profile.offlineModeEnabled = true
            restored = true
        }

        if restored {
            tierLog.info("Restored dormant settings after upgrade to \(self.currentTier.displayName, privacy: .public)")
            NotificationCenter.default.post(name: .settingsRestored, object: nil)
        }

        return restored
    }

    // MARK: - State Validation

    /// Validates tier and trial state on app launch, recovering gracefully from corrupt data.
    /// Call this once after `syncFromProfile` on every launch.
    func validateState(profile: UserProfile?) {
        guard let profile else { return }

        // 1. Validate tier ID — unknown values reset to "free"
        let knownTierIds = Set(MembershipTier.allCases.map(\.rawValue))
        if !knownTierIds.contains(profile.selectedTierId) {
            tierLog.error("Invalid tier ID: \(profile.selectedTierId, privacy: .public), resetting to free")
            profile.selectedTierId = "free"
            currentTier = .free
        }

        // 2. Validate trial start date
        if let trialStart = profile.trialStartDate {
            // Future trial date (clock manipulation) — treat trial as not started
            if trialStart > Date.now {
                tierLog.error("Trial start date is in the future (\(trialStart, privacy: .public)), clearing trial")
                profile.trialStartDate = nil
                profile.trialExpiredShown = false
                if currentTier == .trial {
                    profile.selectedTierId = "free"
                    currentTier = .free
                }
            }
            // Unreasonably old trial (>365 days) — treat as expired
            else if let daysAgo = Calendar.current.dateComponents([.day], from: trialStart, to: Date.now).day,
                    daysAgo > 365 {
                tierLog.error("Trial start date is over 1 year old (\(daysAgo) days), marking expired")
                profile.trialExpiredShown = true
                if currentTier == .trial {
                    profile.selectedTierId = "free"
                    currentTier = .free
                }
            }
        }

        // 3. Trial tier without a start date — shouldn't happen, reset to free
        if currentTier == .trial && profile.trialStartDate == nil {
            tierLog.error("Tier is trial but no trialStartDate exists, resetting to free")
            profile.selectedTierId = "free"
            currentTier = .free
        }
    }

    // MARK: - QA Users

    /// Emails that bypass trial restrictions for testing.
    private static let qaEmails: Set<String> = [
        "rudph2@test.com"
    ]

    /// Whether the given profile belongs to a QA tester.
    static func isQAUser(profile: UserProfile?) -> Bool {
        guard let email = profile?.email, !email.isEmpty else { return false }
        return qaEmails.contains(email.lowercased())
    }

    // MARK: - Royal Trial Lifecycle

    /// Start the 14-day Royal Trial. Can only be started once per user.
    /// QA users can restart the trial even if previously used.
    /// Returns `true` if the trial was started, `false` if already used.
    @discardableResult
    func startTrial(profile: UserProfile?) -> Bool {
        guard let profile else { return false }
        if profile.hasUsedTrial && !Self.isQAUser(profile: profile) { return false }
        profile.trialStartDate = Date.now
        profile.trialExpiredShown = false
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

        let oldTier = currentTier
        let wasUpgrade = newTier.rank > currentTier.rank

        // Calculate feature diffs before changing tier
        let diff = Self.featureDiff(from: oldTier, to: newTier)
        previousTier = oldTier
        newlyUnlockedFeatures = diff.unlocked
        newlyLockedFeatures = diff.locked

        isTransitioning = true
        withAnimation(.spring(response: 0.35, dampingFraction: 0.75)) {
            currentTier = newTier
        }
        profile?.selectedTierId = tierId

        // Celebration on any non-free tier change
        if newTier != .free {
            upgradedToTier = newTier
            isTierUpgrade = wasUpgrade
            if wasUpgrade {
                HapticsService.shared.tierUpgrade()
            } else {
                let feedback = UIImpactFeedbackGenerator(style: .medium)
                feedback.impactOccurred()
            }
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.15) { [weak self] in
                self?.showUpgradeCelebration = true
            }
        } else {
            let feedback = UIImpactFeedbackGenerator(style: .light)
            feedback.impactOccurred()
            // Downgrade to free — show lock dimming directly (no celebration)
            if !newlyLockedFeatures.isEmpty {
                DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) { [weak self] in
                    self?.showFeatureTransition = true
                }
            }
        }

        // Restore dormant settings on upgrade
        if wasUpgrade, let profile {
            restoreDormantSettings(profile: profile)

            // Auto-enable offline mode for tiers that include it
            if offlineModeAvailable, !profile.offlineModeEnabled {
                profile.offlineModeEnabled = true
                NotificationCenter.default.post(name: .offlineModeAutoEnabled, object: nil)
            }
        }

        // Graceful feature degradation on downgrade
        if !wasUpgrade {
            // Capture current settings as dormant before resetting
            if let profile {
                captureDormantSettings(profile: profile)
            }

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

        // Sync tier change to iCloud
        pushToCloud(profile: profile)

        DispatchQueue.main.asyncAfter(deadline: .now() + 0.4) { [weak self] in
            self?.isTransitioning = false
        }
    }

    // MARK: - iCloud Tier Sync

    /// NSUbiquitousKeyValueStore keys for cross-device sync.
    private enum CloudKey {
        static let tierId = "cloud_selectedTierId"
        static let trialStartDate = "cloud_trialStartDate"
    }

    /// Injectable cloud store.
    /// Defaults to in-memory stub until iCloud KVS entitlement is provisioned.
    /// Once enabled, set to `NSUbiquitousKeyValueStore.default` (see ICloud-sync.md).
    var cloudStore: CloudKeyValueStore = InMemoryCloudKeyValueStore()

    /// Push the current tier and trial date to iCloud KVS.
    func pushToCloud(profile: UserProfile?) {
        guard let profile else { return }
        cloudStore.set(profile.selectedTierId, forKey: CloudKey.tierId)
        if let trialStart = profile.trialStartDate {
            cloudStore.set(trialStart.timeIntervalSince1970, forKey: CloudKey.trialStartDate)
        } else {
            cloudStore.removeObject(forKey: CloudKey.trialStartDate)
        }
        cloudStore.synchronize()
        tierLog.info("Pushed tier to iCloud: \(profile.selectedTierId, privacy: .public)")
    }

    /// Pull tier and trial date from iCloud KVS and resolve conflicts.
    /// Higher tier wins; for trial dates, earliest start wins.
    func pullFromCloud(profile: UserProfile?) {
        guard let profile else { return }

        // Resolve tier: highest rank wins
        if let remoteTierId = cloudStore.string(forKey: CloudKey.tierId) {
            let remoteTier = MembershipTier(tierId: remoteTierId)
            let localTier = MembershipTier(tierId: profile.selectedTierId)

            if remoteTier.rank > localTier.rank {
                tierLog.info("iCloud tier (\(remoteTierId, privacy: .public)) outranks local (\(profile.selectedTierId, privacy: .public)), adopting remote")
                selectTier(remoteTierId, profile: profile)
            } else if localTier.rank > remoteTier.rank {
                // Local is higher — push to remote
                cloudStore.set(profile.selectedTierId, forKey: CloudKey.tierId)
                cloudStore.synchronize()
            }
        }

        // Resolve trial date: earliest start wins (preserves trial history)
        let remoteTimestamp = cloudStore.double(forKey: CloudKey.trialStartDate)
        if remoteTimestamp > 0 {
            let remoteDate = Date(timeIntervalSince1970: remoteTimestamp)
            if let localDate = profile.trialStartDate {
                if remoteDate < localDate {
                    profile.trialStartDate = remoteDate
                }
            } else {
                // No local trial date — adopt remote
                profile.trialStartDate = remoteDate
            }
        }
    }

    /// Register for iCloud KVS external change notifications.
    /// Only activates when cloudStore is a real NSUbiquitousKeyValueStore
    /// (requires iCloud KVS entitlement — see ICloud-sync.md).
    func startCloudSync(profile: UserProfile?) {
        guard cloudStore is NSUbiquitousKeyValueStore else {
            tierLog.info("iCloud KVS not available — cloud sync disabled")
            return
        }
        NotificationCenter.default.addObserver(
            forName: NSUbiquitousKeyValueStore.didChangeExternallyNotification,
            object: NSUbiquitousKeyValueStore.default,
            queue: .main
        ) { [weak self] _ in
            self?.pullFromCloud(profile: profile)
        }
        NSUbiquitousKeyValueStore.default.synchronize()
    }

    // MARK: - Feature Flag Overrides (Debug Only)

    #if DEBUG
    /// UserDefaults key prefix for per-feature overrides.
    /// Each feature stores a tri-state: nil = no override, true = force-on, false = force-off.
    private static let overridePrefix = "featureOverride_"

    /// Returns the feature override state, or nil if no override is set.
    func featureOverride(for feature: PremiumFeature) -> Bool? {
        let key = Self.overridePrefix + feature.overrideKey
        guard UserDefaults.standard.object(forKey: key) != nil else { return nil }
        return UserDefaults.standard.bool(forKey: key)
    }

    /// Set a feature override. Pass nil to clear the override.
    func setFeatureOverride(_ value: Bool?, for feature: PremiumFeature) {
        let key = Self.overridePrefix + feature.overrideKey
        if let value {
            UserDefaults.standard.set(value, forKey: key)
        } else {
            UserDefaults.standard.removeObject(forKey: key)
        }
    }

    /// Returns true if any feature override is currently active.
    var hasActiveOverrides: Bool {
        PremiumFeature.allCases.contains { featureOverride(for: $0) != nil }
    }

    /// Clear all feature overrides.
    func clearAllOverrides() {
        for feature in PremiumFeature.allCases {
            let key = Self.overridePrefix + feature.overrideKey
            UserDefaults.standard.removeObject(forKey: key)
        }
    }

    /// Effective access status for a feature — includes override info.
    func effectiveFeatureStatus(for feature: PremiumFeature) -> FeatureStatus {
        if let override = featureOverride(for: feature) {
            return .overridden(enabled: override)
        }
        let enabled = Self.allowedCount(for: feature, tier: currentTier) > 0
        return .natural(enabled: enabled)
    }

    /// Status of a feature flag — natural (from tier) or overridden.
    enum FeatureStatus {
        case natural(enabled: Bool)
        case overridden(enabled: Bool)

        var isEnabled: Bool {
            switch self {
            case .natural(let enabled), .overridden(let enabled): return enabled
            }
        }

        var isOverridden: Bool {
            if case .overridden = self { return true }
            return false
        }
    }
    #endif
}
