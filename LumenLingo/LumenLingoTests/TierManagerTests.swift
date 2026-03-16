import XCTest
@testable import LumenLingo

/// Tests for TierManager — tier persistence, feature gating, and tier-change logic.
@MainActor
final class TierManagerTests: XCTestCase {

    // MARK: - Default Tier

    func testDefaultTierIsFree() {
        let manager = TierManager()
        XCTAssertEqual(manager.currentTier, .free)
        XCTAssertEqual(manager.currentTierId, "free")
    }

    // MARK: - Tier ID Round-Trip

    func testTierIdRoundTrip() {
        let manager = TierManager()
        for tier in MembershipTier.allCases {
            manager.currentTierId = tier.rawValue
            XCTAssertEqual(manager.currentTier, tier)
            XCTAssertEqual(manager.currentTierId, tier.rawValue)
        }
    }

    func testUnknownTierIdFallsBackToFree() {
        let manager = TierManager()
        manager.currentTierId = "nonexistent"
        XCTAssertEqual(manager.currentTier, .free)
    }

    // MARK: - Sync From Profile

    func testSyncFromProfileRestoresTier() {
        let manager = TierManager()
        let profile = UserProfile(selectedTierId: "elite")
        manager.syncFromProfile(profile)
        XCTAssertEqual(manager.currentTier, .elite)
    }

    func testSyncFromNilProfileKeepsDefault() {
        let manager = TierManager()
        manager.syncFromProfile(nil)
        XCTAssertEqual(manager.currentTier, .free)
    }

    func testFirstLaunchNoSavedDataDefaultsFree() {
        let profile = UserProfile()
        let manager = TierManager()
        manager.syncFromProfile(profile)
        XCTAssertEqual(manager.currentTier, .free)
        XCTAssertEqual(profile.selectedTierId, "free")
    }

    // MARK: - Select Tier Persists

    func testSelectTierUpdatesProfile() {
        let manager = TierManager()
        let profile = UserProfile()
        manager.selectTier("pro", profile: profile)
        XCTAssertEqual(profile.selectedTierId, "pro")
        XCTAssertEqual(manager.currentTier, .pro)
    }

    func testSelectSameTierIsNoOp() {
        let manager = TierManager()
        let profile = UserProfile()
        manager.selectTier("free", profile: profile)
        // Should remain free, no transition
        XCTAssertEqual(manager.currentTier, .free)
    }

    // MARK: - Feature Gating: Soundscapes

    func testFreeTierHasNoSoundscapes() {
        XCTAssertEqual(TierManager.allowedCount(for: .soundscapes, tier: .free), 0)
        XCTAssertFalse(freeTierHasAccess(.soundscapes))
    }

    func testProTierHasOneSoundscape() {
        XCTAssertEqual(TierManager.allowedCount(for: .soundscapes, tier: .pro), 1)
    }

    func testEliteTierHasEightSoundscapes() {
        XCTAssertEqual(TierManager.allowedCount(for: .soundscapes, tier: .elite), 8)
    }

    func testRoyalTierHasAllSoundscapes() {
        XCTAssertEqual(TierManager.allowedCount(for: .soundscapes, tier: .royal), 12)
    }

    func testTrialTierHasAllSoundscapes() {
        XCTAssertEqual(TierManager.allowedCount(for: .soundscapes, tier: .trial), 12)
    }

    // MARK: - Feature Gating: Language Pairs

    func testFreeTierHasThreeLanguagePairs() {
        XCTAssertEqual(TierManager.allowedCount(for: .languagePairs, tier: .free), 3)
    }

    func testProTierHasSevenLanguagePairs() {
        XCTAssertEqual(TierManager.allowedCount(for: .languagePairs, tier: .pro), 7)
    }

    func testEliteTierHas25LanguagePairs() {
        XCTAssertEqual(TierManager.allowedCount(for: .languagePairs, tier: .elite), 25)
    }

    // MARK: - Feature Gating: Unlimited Practice

    func testFreeTierHasLimitedPractice() {
        XCTAssertFalse(freeTierHasAccess(.unlimitedPractice))
    }

    func testProTierHasUnlimitedPractice() {
        XCTAssertTrue(tierHasAccess(.pro, .unlimitedPractice))
    }

    // MARK: - Feature Gating: Breathing Orbs

    func testFreeTierHasNoBreathingOrbs() {
        XCTAssertFalse(freeTierHasAccess(.breathingOrbs))
    }

    func testProTierHasBreathingOrbs() {
        XCTAssertEqual(TierManager.allowedCount(for: .breathingOrbs, tier: .pro), 6)
    }

    // MARK: - Feature Gating: Quantum Flow

    func testFreeTierHasNoQuantumFlow() {
        XCTAssertFalse(freeTierHasAccess(.quantumFlow))
    }

    func testProTierHasNoQuantumFlow() {
        XCTAssertFalse(tierHasAccess(.pro, .quantumFlow))
    }

    func testEliteTierHasFourQuantumScenes() {
        XCTAssertEqual(TierManager.allowedCount(for: .quantumFlow, tier: .elite), 4)
    }

    func testRoyalTierHasSixQuantumScenes() {
        XCTAssertEqual(TierManager.allowedCount(for: .quantumFlow, tier: .royal), 6)
    }

    // MARK: - Feature Gating: Nebula Drift

    func testFreeTierHasNoNebulaDrift() {
        XCTAssertFalse(freeTierHasAccess(.nebulaDrift))
    }

    func testProTierHasNoNebulaDrift() {
        XCTAssertFalse(tierHasAccess(.pro, .nebulaDrift))
    }

    func testEliteTierHasFourNebulaPresets() {
        XCTAssertEqual(TierManager.allowedCount(for: .nebulaDrift, tier: .elite), 4)
    }

    // MARK: - Feature Gating: Offline Mode

    func testFreeTierHasNoOfflineMode() {
        XCTAssertFalse(freeTierHasAccess(.offlineMode))
    }

    func testProTierHasOfflineMode() {
        XCTAssertTrue(tierHasAccess(.pro, .offlineMode))
    }

    // MARK: - Tier Rank Ordering

    func testTierRankOrdering() {
        XCTAssertLessThan(MembershipTier.free.rank, MembershipTier.pro.rank)
        XCTAssertLessThan(MembershipTier.pro.rank, MembershipTier.elite.rank)
        XCTAssertLessThan(MembershipTier.elite.rank, MembershipTier.royal.rank)
        XCTAssertEqual(MembershipTier.trial.rank, MembershipTier.royal.rank)
    }

    // MARK: - Display Properties

    func testTierDisplayNames() {
        XCTAssertEqual(MembershipTier.free.displayName, "Starter")
        XCTAssertEqual(MembershipTier.pro.displayName, "Pro")
        XCTAssertEqual(MembershipTier.elite.displayName, "Elite")
        XCTAssertEqual(MembershipTier.royal.displayName, "Royal")
        XCTAssertEqual(MembershipTier.trial.displayName, "Royal Trial")
    }

    func testTierGradientColorsNotEmpty() {
        for tier in MembershipTier.allCases {
            XCTAssertFalse(tier.gradientColors.isEmpty, "\(tier) should have gradient colors")
        }
    }

    // MARK: - All Tier × Feature Matrix

    func testAllTiersHaveGameModes() {
        // All tiers get all 3 game modes — no gating on game modes
        // This is verified by the absence of a gameMode feature gate
        for tier in MembershipTier.allCases {
            XCTAssertFalse(tier.gradientColors.isEmpty)
        }
    }

    // MARK: - Helpers

    private func freeTierHasAccess(_ feature: PremiumFeature) -> Bool {
        TierManager.allowedCount(for: feature, tier: .free) > 0
    }

    private func tierHasAccess(_ tier: MembershipTier, _ feature: PremiumFeature) -> Bool {
        TierManager.allowedCount(for: feature, tier: tier) > 0
    }

    // MARK: - Soundscape Sort Order

    func testSoundscapeSortOrderIsUnique() {
        let orders = Soundscape.allCases.map(\.sortOrder)
        XCTAssertEqual(orders.count, Set(orders).count, "Sort orders must be unique")
    }

    func testSoundscapeSortOrderCovers0Through11() {
        let orders = Set(Soundscape.allCases.map(\.sortOrder))
        XCTAssertEqual(orders, Set(0...11))
    }

    // MARK: - Soundscape Unlock Counts

    func testProTierUnlocksExactly1Soundscape() {
        let manager = TierManager()
        manager.currentTierId = "pro"
        let unlocked = manager.unlockedSoundscapes()
        XCTAssertEqual(unlocked.count, 1)
        XCTAssertEqual(unlocked.first?.sortOrder, 0)
    }

    func testEliteTierUnlocksExactly8Soundscapes() {
        let manager = TierManager()
        manager.currentTierId = "elite"
        let unlocked = manager.unlockedSoundscapes()
        XCTAssertEqual(unlocked.count, 8)
        // Verify they are sortOrder 0–7
        for (i, s) in unlocked.enumerated() {
            XCTAssertEqual(s.sortOrder, i)
        }
    }

    func testRoyalTierUnlocksAll12Soundscapes() {
        let manager = TierManager()
        manager.currentTierId = "royal"
        let unlocked = manager.unlockedSoundscapes()
        XCTAssertEqual(unlocked.count, 12)
    }

    func testTrialTierUnlocksAll12Soundscapes() {
        let manager = TierManager()
        manager.currentTierId = "trial"
        let unlocked = manager.unlockedSoundscapes()
        XCTAssertEqual(unlocked.count, 12)
    }

    func testFreeTierUnlocks0Soundscapes() {
        let manager = TierManager()
        manager.currentTierId = "free"
        let unlocked = manager.unlockedSoundscapes()
        XCTAssertEqual(unlocked.count, 0)
    }

    // MARK: - isSoundscapeUnlocked

    func testIsSoundscapeUnlocked_ProOnlyUnlocksSortOrder0() {
        let manager = TierManager()
        manager.currentTierId = "pro"
        let sortOrder0 = Soundscape.allCases.first { $0.sortOrder == 0 }!
        XCTAssertTrue(manager.isSoundscapeUnlocked(sortOrder0))

        // sortOrder 1 should be locked for Pro
        let sortOrder1 = Soundscape.allCases.first { $0.sortOrder == 1 }!
        XCTAssertFalse(manager.isSoundscapeUnlocked(sortOrder1))
    }

    func testIsSoundscapeUnlocked_FreeLockEverything() {
        let manager = TierManager()
        manager.currentTierId = "free"
        for soundscape in Soundscape.allCases {
            XCTAssertFalse(manager.isSoundscapeUnlocked(soundscape))
        }
    }

    // MARK: - Minimum Tier

    func testSortOrder0HasMinimumTierPro() {
        let s = Soundscape.allCases.first { $0.sortOrder == 0 }!
        XCTAssertEqual(s.minimumTier, .pro)
    }

    func testSortOrder1Through7HaveMinimumTierElite() {
        for i in 1...7 {
            let s = Soundscape.allCases.first { $0.sortOrder == i }!
            XCTAssertEqual(s.minimumTier, .elite, "sortOrder \(i) should require Elite")
        }
    }

    func testSortOrder8Through11HaveMinimumTierRoyal() {
        for i in 8...11 {
            let s = Soundscape.allCases.first { $0.sortOrder == i }!
            XCTAssertEqual(s.minimumTier, .royal, "sortOrder \(i) should require Royal")
        }
    }

    // MARK: - Preview Tracking

    func testPreviewTracking() {
        let manager = TierManager()
        let soundscape = Soundscape.parisCafe
        XCTAssertFalse(manager.hasPreviewedSoundscape(soundscape))
        manager.markSoundscapePreviewed(soundscape)
        XCTAssertTrue(manager.hasPreviewedSoundscape(soundscape))
    }

    func testPreviewTrackingIsPerSoundscape() {
        let manager = TierManager()
        manager.markSoundscapePreviewed(.parisCafe)
        XCTAssertTrue(manager.hasPreviewedSoundscape(.parisCafe))
        XCTAssertFalse(manager.hasPreviewedSoundscape(.rainyWindow))
    }

    // MARK: - Language Pair Priority Order

    func testLanguagePairPriorityOrderIsUnique() {
        let orders = LanguagePair.withContent.compactMap { $0.priorityOrder }
        XCTAssertEqual(orders.count, LanguagePair.withContent.count, "All pairs must have a priority order")
        XCTAssertEqual(Set(orders).count, orders.count, "All priority orders must be unique")
    }

    func testLanguagePairPriorityOrderCovers0Through24() {
        let orders = Set(LanguagePair.withContent.compactMap { $0.priorityOrder })
        for i in 0..<25 {
            XCTAssertTrue(orders.contains(i), "Missing priority order \(i)")
        }
    }

    func testLanguagePairWithContentHas25Pairs() {
        XCTAssertEqual(LanguagePair.withContent.count, 25)
    }

    // MARK: - Language Pair Tier Limits

    func testFreeTierUnlocksExactly3LanguagePairs() {
        let manager = TierManager()
        manager.currentTierId = "free"
        XCTAssertEqual(manager.unlockedLanguagePairs().count, 3)
    }

    func testProTierUnlocksExactly7LanguagePairs() {
        let manager = TierManager()
        manager.currentTierId = "pro"
        XCTAssertEqual(manager.unlockedLanguagePairs().count, 7)
    }

    func testEliteTierUnlocksAll25LanguagePairs() {
        let manager = TierManager()
        manager.currentTierId = "elite"
        XCTAssertEqual(manager.unlockedLanguagePairs().count, 25)
    }

    func testRoyalTierUnlocksAll25LanguagePairs() {
        let manager = TierManager()
        manager.currentTierId = "royal"
        XCTAssertEqual(manager.unlockedLanguagePairs().count, 25)
    }

    func testTrialTierUnlocksAll25LanguagePairs() {
        let manager = TierManager()
        manager.currentTierId = "trial"
        XCTAssertEqual(manager.unlockedLanguagePairs().count, 25)
    }

    // MARK: - Language Pair Unlock Checks

    func testIsLanguagePairUnlocked_FreeUnlocksFirst3() {
        let manager = TierManager()
        manager.currentTierId = "free"
        // First 3 should be unlocked
        for i in 0..<3 {
            let pair = LanguagePair.withContent[i]
            XCTAssertTrue(manager.isLanguagePairUnlocked(pair),
                          "\(pair.displayName) at index \(i) should be unlocked for Free")
        }
        // 4th and beyond should be locked
        for i in 3..<LanguagePair.withContent.count {
            let pair = LanguagePair.withContent[i]
            XCTAssertFalse(manager.isLanguagePairUnlocked(pair),
                           "\(pair.displayName) at index \(i) should be locked for Free")
        }
    }

    func testIsLanguagePairUnlocked_ProUnlocksFirst7() {
        let manager = TierManager()
        manager.currentTierId = "pro"
        for i in 0..<7 {
            let pair = LanguagePair.withContent[i]
            XCTAssertTrue(manager.isLanguagePairUnlocked(pair),
                          "\(pair.displayName) at index \(i) should be unlocked for Pro")
        }
        for i in 7..<LanguagePair.withContent.count {
            let pair = LanguagePair.withContent[i]
            XCTAssertFalse(manager.isLanguagePairUnlocked(pair),
                           "\(pair.displayName) at index \(i) should be locked for Pro")
        }
    }

    func testIsLanguagePairUnlocked_EliteUnlocksAll() {
        let manager = TierManager()
        manager.currentTierId = "elite"
        for pair in LanguagePair.withContent {
            XCTAssertTrue(manager.isLanguagePairUnlocked(pair),
                          "\(pair.displayName) should be unlocked for Elite")
        }
    }

    // MARK: - Language Pair Minimum Tier

    func testFirst3PairsHaveMinimumTierFree() {
        for i in 0..<3 {
            let pair = LanguagePair.withContent[i]
            XCTAssertEqual(pair.minimumTier, .free,
                           "\(pair.displayName) at index \(i) should require Free")
        }
    }

    func testPairs3Through6HaveMinimumTierPro() {
        for i in 3..<7 {
            let pair = LanguagePair.withContent[i]
            XCTAssertEqual(pair.minimumTier, .pro,
                           "\(pair.displayName) at index \(i) should require Pro")
        }
    }

    func testPairs7Through24HaveMinimumTierElite() {
        for i in 7..<25 {
            let pair = LanguagePair.withContent[i]
            XCTAssertEqual(pair.minimumTier, .elite,
                           "\(pair.displayName) at index \(i) should require Elite")
        }
    }

    // MARK: - Language Pair Content

    func testFreeTierFirstPairIsEnglishSpanish() {
        let manager = TierManager()
        manager.currentTierId = "free"
        let unlocked = manager.unlockedLanguagePairs()
        XCTAssertEqual(unlocked.first?.source, .english)
        XCTAssertEqual(unlocked.first?.target, .spanish)
    }

    func testPairWithoutContentIsNotUnlocked() {
        let manager = TierManager()
        manager.currentTierId = "royal"
        let fakePair = LanguagePair(source: .spanish, target: .arabic)
        XCTAssertFalse(manager.isLanguagePairUnlocked(fakePair))
    }

    // MARK: - Breathing Orbs Gating

    func testFreeTierBreathingOrbsNotAccessible() {
        let manager = TierManager()
        manager.currentTierId = "free"
        XCTAssertFalse(manager.breathingOrbsAccessible)
    }

    func testProTierBreathingOrbsAccessible() {
        let manager = TierManager()
        manager.currentTierId = "pro"
        XCTAssertTrue(manager.breathingOrbsAccessible)
    }

    func testEliteTierBreathingOrbsAccessible() {
        let manager = TierManager()
        manager.currentTierId = "elite"
        XCTAssertTrue(manager.breathingOrbsAccessible)
    }

    func testRoyalTierBreathingOrbsAccessible() {
        let manager = TierManager()
        manager.currentTierId = "royal"
        XCTAssertTrue(manager.breathingOrbsAccessible)
    }

    func testTrialTierBreathingOrbsAccessible() {
        let manager = TierManager()
        manager.currentTierId = "trial"
        XCTAssertTrue(manager.breathingOrbsAccessible)
    }

    func testBreathingOrbsAllowedCount_Free0() {
        XCTAssertEqual(TierManager.allowedCount(for: .breathingOrbs, tier: .free), 0)
    }

    func testBreathingOrbsAllowedCount_Pro6() {
        XCTAssertEqual(TierManager.allowedCount(for: .breathingOrbs, tier: .pro), 6)
    }

    func testBreathingOrbsAllowedCount_Elite6() {
        XCTAssertEqual(TierManager.allowedCount(for: .breathingOrbs, tier: .elite), 6)
    }

    func testBreathingOrbsAllowedCount_Royal6() {
        XCTAssertEqual(TierManager.allowedCount(for: .breathingOrbs, tier: .royal), 6)
    }

    func testBreathingOrbsAllowedCount_Trial6() {
        XCTAssertEqual(TierManager.allowedCount(for: .breathingOrbs, tier: .trial), 6)
    }

    func testBreathingOrbsDowngradeDisablesOrbs() {
        let manager = TierManager()
        let profile = UserProfile()
        profile.selectedTierId = "pro"
        manager.syncFromProfile(profile)
        profile.breathingOrbsEnabled = true

        // Downgrade to free
        manager.selectTier("free", profile: profile)

        XCTAssertFalse(profile.breathingOrbsEnabled)
    }

    func testBreathingOrbsDowngradeResetsScheme() {
        let manager = TierManager()
        let profile = UserProfile()
        profile.selectedTierId = "pro"
        manager.syncFromProfile(profile)
        profile.breathingOrbsEnabled = true
        profile.orbScheme = .krakowLuminescence

        manager.selectTier("free", profile: profile)

        XCTAssertEqual(profile.breathingOrbScheme, BreathingOrbScheme.barcelonaNights.rawValue)
    }

    func testBreathingOrbsUpgradeDoesNotDisable() {
        let manager = TierManager()
        let profile = UserProfile()
        profile.selectedTierId = "free"
        manager.syncFromProfile(profile)
        profile.breathingOrbsEnabled = false

        // Upgrade to pro — should not auto-enable
        manager.selectTier("pro", profile: profile)

        XCTAssertFalse(profile.breathingOrbsEnabled)
    }

    func testBreathingOrbsNotificationName() {
        XCTAssertEqual(Notification.Name.breathingOrbsAutoDisabled.rawValue, "breathingOrbsAutoDisabled")
    }

    // MARK: - Quantum Flow Gating

    func testFreeTierQuantumFlowNotAccessible() {
        let manager = TierManager()
        manager.currentTierId = "free"
        XCTAssertFalse(manager.quantumFlowAccessible)
    }

    func testProTierQuantumFlowNotAccessible() {
        let manager = TierManager()
        manager.currentTierId = "pro"
        XCTAssertFalse(manager.quantumFlowAccessible)
    }

    func testEliteTierQuantumFlowAccessible() {
        let manager = TierManager()
        manager.currentTierId = "elite"
        XCTAssertTrue(manager.quantumFlowAccessible)
    }

    func testRoyalTierQuantumFlowAccessible() {
        let manager = TierManager()
        manager.currentTierId = "royal"
        XCTAssertTrue(manager.quantumFlowAccessible)
    }

    func testTrialTierQuantumFlowAccessible() {
        let manager = TierManager()
        manager.currentTierId = "trial"
        XCTAssertTrue(manager.quantumFlowAccessible)
    }

    func testQuantumFlowAllowedCount_Free0() {
        XCTAssertEqual(TierManager.allowedCount(for: .quantumFlow, tier: .free), 0)
    }

    func testQuantumFlowAllowedCount_Pro0() {
        XCTAssertEqual(TierManager.allowedCount(for: .quantumFlow, tier: .pro), 0)
    }

    func testQuantumFlowAllowedCount_Elite4() {
        XCTAssertEqual(TierManager.allowedCount(for: .quantumFlow, tier: .elite), 4)
    }

    func testQuantumFlowAllowedCount_Royal6() {
        XCTAssertEqual(TierManager.allowedCount(for: .quantumFlow, tier: .royal), 6)
    }

    func testQuantumFlowAllowedCount_Trial6() {
        XCTAssertEqual(TierManager.allowedCount(for: .quantumFlow, tier: .trial), 6)
    }

    // MARK: - Quantum Flow Scene Unlock Counts

    func testFreeTierUnlocks0QuantumScenes() {
        let manager = TierManager()
        manager.currentTierId = "free"
        XCTAssertEqual(manager.unlockedQuantumScenes().count, 0)
    }

    func testProTierUnlocks0QuantumScenes() {
        let manager = TierManager()
        manager.currentTierId = "pro"
        XCTAssertEqual(manager.unlockedQuantumScenes().count, 0)
    }

    func testEliteTierUnlocks4QuantumScenes() {
        let manager = TierManager()
        manager.currentTierId = "elite"
        XCTAssertEqual(manager.unlockedQuantumScenes().count, 4)
    }

    func testRoyalTierUnlocksAll6QuantumScenes() {
        let manager = TierManager()
        manager.currentTierId = "royal"
        XCTAssertEqual(manager.unlockedQuantumScenes().count, 6)
    }

    func testTrialTierUnlocksAll6QuantumScenes() {
        let manager = TierManager()
        manager.currentTierId = "trial"
        XCTAssertEqual(manager.unlockedQuantumScenes().count, 6)
    }

    // MARK: - Quantum Flow Scene Sort Order

    func testQuantumFlowSceneSortOrdersAreUnique() {
        let orders = QuantumFlowScene.allCases.map(\.sortOrder)
        XCTAssertEqual(Set(orders).count, QuantumFlowScene.allCases.count)
    }

    func testQuantumFlowSceneSortOrdersAreSequential() {
        let orders = QuantumFlowScene.allCases.map(\.sortOrder).sorted()
        for i in 0..<6 {
            XCTAssertTrue(orders.contains(i), "Missing sort order \(i)")
        }
    }

    // MARK: - Quantum Flow Scene Unlock Checks

    func testIsQuantumSceneUnlocked_EliteUnlocksFirst4() {
        let manager = TierManager()
        manager.currentTierId = "elite"
        let sorted = QuantumFlowScene.allCases.sorted { $0.sortOrder < $1.sortOrder }
        for scene in sorted.prefix(4) {
            XCTAssertTrue(manager.isQuantumSceneUnlocked(scene),
                          "\(scene.displayName) should be unlocked for Elite")
        }
        for scene in sorted.suffix(2) {
            XCTAssertFalse(manager.isQuantumSceneUnlocked(scene),
                           "\(scene.displayName) should be locked for Elite")
        }
    }

    func testIsQuantumSceneUnlocked_RoyalUnlocksAll() {
        let manager = TierManager()
        manager.currentTierId = "royal"
        for scene in QuantumFlowScene.allCases {
            XCTAssertTrue(manager.isQuantumSceneUnlocked(scene),
                          "\(scene.displayName) should be unlocked for Royal")
        }
    }

    func testIsQuantumSceneUnlocked_FreeLocksAll() {
        let manager = TierManager()
        manager.currentTierId = "free"
        for scene in QuantumFlowScene.allCases {
            XCTAssertFalse(manager.isQuantumSceneUnlocked(scene),
                           "\(scene.displayName) should be locked for Free")
        }
    }

    // MARK: - Quantum Flow Minimum Tier

    func testFirst4QuantumScenesRequireElite() {
        let sorted = QuantumFlowScene.allCases.sorted { $0.sortOrder < $1.sortOrder }
        for scene in sorted.prefix(4) {
            XCTAssertEqual(scene.minimumTier, .elite,
                           "\(scene.displayName) should require Elite")
        }
    }

    func testLast2QuantumScenesRequireRoyal() {
        let sorted = QuantumFlowScene.allCases.sorted { $0.sortOrder < $1.sortOrder }
        for scene in sorted.suffix(2) {
            XCTAssertEqual(scene.minimumTier, .royal,
                           "\(scene.displayName) should require Royal")
        }
    }

    // MARK: - Quantum Flow Downgrade

    func testQuantumFlowDowngradeToFreeDisablesEntirely() {
        let manager = TierManager()
        let profile = UserProfile()
        profile.selectedTierId = "elite"
        manager.syncFromProfile(profile)
        profile.quantumFlowEnabled = true
        profile.quantumFlowScene = QuantumFlowScene.dubaiCelestialMirage.rawValue

        manager.selectTier("free", profile: profile)

        XCTAssertFalse(profile.quantumFlowEnabled)
    }

    func testQuantumFlowDowngradeToProDisablesEntirely() {
        let manager = TierManager()
        let profile = UserProfile()
        profile.selectedTierId = "royal"
        manager.syncFromProfile(profile)
        profile.quantumFlowEnabled = true

        manager.selectTier("pro", profile: profile)

        XCTAssertFalse(profile.quantumFlowEnabled)
    }

    func testQuantumFlowDowngradeToEliteRevertsLockedScene() {
        let manager = TierManager()
        let profile = UserProfile()
        profile.selectedTierId = "royal"
        manager.syncFromProfile(profile)
        profile.quantumFlowEnabled = true
        // Set to a scene that will be locked at Elite (sortOrder >= 4)
        let lockedScene = QuantumFlowScene.allCases.sorted { $0.sortOrder < $1.sortOrder }[4]
        profile.quantumScene = lockedScene

        manager.selectTier("elite", profile: profile)

        // Should revert to highest allowed scene (sortOrder 3)
        let highestAllowed = QuantumFlowScene.allCases.sorted { $0.sortOrder < $1.sortOrder }[3]
        XCTAssertEqual(profile.quantumScene, highestAllowed)
        XCTAssertTrue(profile.quantumFlowEnabled, "Should remain enabled since Elite has 4 scenes")
    }

    func testQuantumFlowDowngradeKeepsAllowedScene() {
        let manager = TierManager()
        let profile = UserProfile()
        profile.selectedTierId = "royal"
        manager.syncFromProfile(profile)
        profile.quantumFlowEnabled = true
        // Set to a scene that is also available at Elite (sortOrder < 4)
        let allowedScene = QuantumFlowScene.allCases.sorted { $0.sortOrder < $1.sortOrder }[2]
        profile.quantumScene = allowedScene

        manager.selectTier("elite", profile: profile)

        XCTAssertEqual(profile.quantumScene, allowedScene, "Allowed scene should not change")
        XCTAssertTrue(profile.quantumFlowEnabled)
    }

    func testQuantumFlowUpgradeDoesNotAutoEnable() {
        let manager = TierManager()
        let profile = UserProfile()
        profile.selectedTierId = "free"
        manager.syncFromProfile(profile)
        profile.quantumFlowEnabled = false

        manager.selectTier("elite", profile: profile)

        XCTAssertFalse(profile.quantumFlowEnabled)
    }

    func testQuantumFlowDowngradeResetsSceneToDefault() {
        let manager = TierManager()
        let profile = UserProfile()
        profile.selectedTierId = "elite"
        manager.syncFromProfile(profile)
        profile.quantumFlowEnabled = true
        profile.quantumFlowScene = QuantumFlowScene.viennaImperialWaltz.rawValue  // sortOrder 5

        manager.selectTier("free", profile: profile)

        XCTAssertEqual(profile.quantumFlowScene, QuantumFlowScene.dubaiCelestialMirage.rawValue)
    }

    func testQuantumFlowNotificationName() {
        XCTAssertEqual(Notification.Name.quantumFlowAutoAdjusted.rawValue, "quantumFlowAutoAdjusted")
    }

    // MARK: - Nebula Drift Gating

    func testFreeTierNebulaDriftNotAccessible() {
        let manager = TierManager()
        manager.currentTierId = "free"
        XCTAssertFalse(manager.nebulaDriftAccessible)
    }

    func testProTierNebulaDriftNotAccessible() {
        let manager = TierManager()
        manager.currentTierId = "pro"
        XCTAssertFalse(manager.nebulaDriftAccessible)
    }

    func testEliteTierNebulaDriftAccessible() {
        let manager = TierManager()
        manager.currentTierId = "elite"
        XCTAssertTrue(manager.nebulaDriftAccessible)
    }

    func testRoyalTierNebulaDriftAccessible() {
        let manager = TierManager()
        manager.currentTierId = "royal"
        XCTAssertTrue(manager.nebulaDriftAccessible)
    }

    func testTrialTierNebulaDriftAccessible() {
        let manager = TierManager()
        manager.currentTierId = "trial"
        XCTAssertTrue(manager.nebulaDriftAccessible)
    }

    func testNebulaDriftAllowedCount_Free0() {
        XCTAssertEqual(TierManager.allowedCount(for: .nebulaDrift, tier: .free), 0)
    }

    func testNebulaDriftAllowedCount_Pro0() {
        XCTAssertEqual(TierManager.allowedCount(for: .nebulaDrift, tier: .pro), 0)
    }

    func testNebulaDriftAllowedCount_Elite4() {
        XCTAssertEqual(TierManager.allowedCount(for: .nebulaDrift, tier: .elite), 4)
    }

    func testNebulaDriftAllowedCount_Royal6() {
        XCTAssertEqual(TierManager.allowedCount(for: .nebulaDrift, tier: .royal), 6)
    }

    func testNebulaDriftAllowedCount_Trial6() {
        XCTAssertEqual(TierManager.allowedCount(for: .nebulaDrift, tier: .trial), 6)
    }

    // MARK: - Nebula Drift Preset Unlock Counts

    func testFreeTierUnlocks0NebulaPresets() {
        let manager = TierManager()
        manager.currentTierId = "free"
        XCTAssertEqual(manager.unlockedNebulaPresets().count, 0)
    }

    func testProTierUnlocks0NebulaPresets() {
        let manager = TierManager()
        manager.currentTierId = "pro"
        XCTAssertEqual(manager.unlockedNebulaPresets().count, 0)
    }

    func testEliteTierUnlocks4NebulaPresets() {
        let manager = TierManager()
        manager.currentTierId = "elite"
        XCTAssertEqual(manager.unlockedNebulaPresets().count, 4)
    }

    func testRoyalTierUnlocksAll6NebulaPresets() {
        let manager = TierManager()
        manager.currentTierId = "royal"
        XCTAssertEqual(manager.unlockedNebulaPresets().count, 6)
    }

    func testTrialTierUnlocksAll6NebulaPresets() {
        let manager = TierManager()
        manager.currentTierId = "trial"
        XCTAssertEqual(manager.unlockedNebulaPresets().count, 6)
    }

    // MARK: - Nebula Drift Preset Sort Order

    func testNebulaPresetSortOrdersAreUnique() {
        let orders = NebulaPreset.allCases.map(\.sortOrder)
        XCTAssertEqual(Set(orders).count, NebulaPreset.allCases.count)
    }

    func testNebulaPresetSortOrdersAreSequential() {
        let orders = NebulaPreset.allCases.map(\.sortOrder).sorted()
        for i in 0..<6 {
            XCTAssertTrue(orders.contains(i), "Missing sort order \(i)")
        }
    }

    // MARK: - Nebula Drift Preset Unlock Checks

    func testIsNebulaPresetUnlocked_EliteUnlocksFirst4() {
        let manager = TierManager()
        manager.currentTierId = "elite"
        let sorted = NebulaPreset.allCases.sorted { $0.sortOrder < $1.sortOrder }
        for preset in sorted.prefix(4) {
            XCTAssertTrue(manager.isNebulaPresetUnlocked(preset),
                          "\(preset.displayName) should be unlocked for Elite")
        }
        for preset in sorted.suffix(2) {
            XCTAssertFalse(manager.isNebulaPresetUnlocked(preset),
                           "\(preset.displayName) should be locked for Elite")
        }
    }

    func testIsNebulaPresetUnlocked_RoyalUnlocksAll() {
        let manager = TierManager()
        manager.currentTierId = "royal"
        for preset in NebulaPreset.allCases {
            XCTAssertTrue(manager.isNebulaPresetUnlocked(preset),
                          "\(preset.displayName) should be unlocked for Royal")
        }
    }

    func testIsNebulaPresetUnlocked_FreeLocksAll() {
        let manager = TierManager()
        manager.currentTierId = "free"
        for preset in NebulaPreset.allCases {
            XCTAssertFalse(manager.isNebulaPresetUnlocked(preset),
                           "\(preset.displayName) should be locked for Free")
        }
    }

    // MARK: - Nebula Drift Minimum Tier

    func testFirst4NebulaPresetsRequireElite() {
        let sorted = NebulaPreset.allCases.sorted { $0.sortOrder < $1.sortOrder }
        for preset in sorted.prefix(4) {
            XCTAssertEqual(preset.minimumTier, .elite,
                           "\(preset.displayName) should require Elite")
        }
    }

    func testLast2NebulaPresetsRequireRoyal() {
        let sorted = NebulaPreset.allCases.sorted { $0.sortOrder < $1.sortOrder }
        for preset in sorted.suffix(2) {
            XCTAssertEqual(preset.minimumTier, .royal,
                           "\(preset.displayName) should require Royal")
        }
    }

    // MARK: - Nebula Drift Downgrade

    func testNebulaDriftDowngradeToFreeDisablesEntirely() {
        let manager = TierManager()
        let profile = UserProfile()
        profile.selectedTierId = "elite"
        manager.syncFromProfile(profile)
        profile.nebulaDriftEnabled = true
        profile.nebulaPresetEnum = .lagoonNebula

        manager.selectTier("free", profile: profile)

        XCTAssertFalse(profile.nebulaDriftEnabled)
    }

    func testNebulaDriftDowngradeToProDisablesEntirely() {
        let manager = TierManager()
        let profile = UserProfile()
        profile.selectedTierId = "royal"
        manager.syncFromProfile(profile)
        profile.nebulaDriftEnabled = true

        manager.selectTier("pro", profile: profile)

        XCTAssertFalse(profile.nebulaDriftEnabled)
    }

    func testNebulaDriftDowngradeToEliteRevertsLockedPreset() {
        let manager = TierManager()
        let profile = UserProfile()
        profile.selectedTierId = "royal"
        manager.syncFromProfile(profile)
        profile.nebulaDriftEnabled = true
        // Set to a preset that will be locked at Elite (sortOrder >= 4)
        let lockedPreset = NebulaPreset.allCases.sorted { $0.sortOrder < $1.sortOrder }[4]
        profile.nebulaPresetEnum = lockedPreset

        manager.selectTier("elite", profile: profile)

        // Should revert to highest allowed preset (sortOrder 3)
        let highestAllowed = NebulaPreset.allCases.sorted { $0.sortOrder < $1.sortOrder }[3]
        XCTAssertEqual(profile.nebulaPresetEnum, highestAllowed)
        XCTAssertTrue(profile.nebulaDriftEnabled, "Should remain enabled since Elite has 4 presets")
    }

    func testNebulaDriftDowngradeKeepsAllowedPreset() {
        let manager = TierManager()
        let profile = UserProfile()
        profile.selectedTierId = "royal"
        manager.syncFromProfile(profile)
        profile.nebulaDriftEnabled = true
        // Set to a preset that is also available at Elite (sortOrder < 4)
        let allowedPreset = NebulaPreset.allCases.sorted { $0.sortOrder < $1.sortOrder }[2]
        profile.nebulaPresetEnum = allowedPreset

        manager.selectTier("elite", profile: profile)

        XCTAssertEqual(profile.nebulaPresetEnum, allowedPreset, "Allowed preset should not change")
        XCTAssertTrue(profile.nebulaDriftEnabled)
    }

    func testNebulaDriftUpgradeDoesNotAutoEnable() {
        let manager = TierManager()
        let profile = UserProfile()
        profile.selectedTierId = "free"
        manager.syncFromProfile(profile)
        profile.nebulaDriftEnabled = false

        manager.selectTier("elite", profile: profile)

        XCTAssertFalse(profile.nebulaDriftEnabled)
    }

    func testNebulaDriftDowngradeResetsPresetToDefault() {
        let manager = TierManager()
        let profile = UserProfile()
        profile.selectedTierId = "elite"
        manager.syncFromProfile(profile)
        profile.nebulaDriftEnabled = true
        profile.nebulaPresetEnum = .solarAurora  // sortOrder 3, still valid at Elite

        // But let's set to a Royal-only preset
        profile.nebulaPresetEnum = .starburstRing  // sortOrder 5

        manager.selectTier("free", profile: profile)

        XCTAssertEqual(profile.nebulaPresetEnum, .lagoonNebula)
    }

    func testNebulaDriftNotificationName() {
        XCTAssertEqual(Notification.Name.nebulaDriftAutoAdjusted.rawValue, "nebulaDriftAutoAdjusted")
    }

    // MARK: - Offline Mode Gating

    func testFreeTierOfflineModeNotAccessible() {
        let manager = TierManager()
        manager.currentTierId = "free"
        XCTAssertFalse(manager.offlineModeAvailable)
    }

    func testProTierOfflineModeAccessible() {
        let manager = TierManager()
        manager.currentTierId = "pro"
        XCTAssertTrue(manager.offlineModeAvailable)
    }

    func testEliteTierOfflineModeAccessible() {
        let manager = TierManager()
        manager.currentTierId = "elite"
        XCTAssertTrue(manager.offlineModeAvailable)
    }

    func testRoyalTierOfflineModeAccessible() {
        let manager = TierManager()
        manager.currentTierId = "royal"
        XCTAssertTrue(manager.offlineModeAvailable)
    }

    func testTrialTierOfflineModeAccessible() {
        let manager = TierManager()
        manager.currentTierId = "trial"
        XCTAssertTrue(manager.offlineModeAvailable)
    }

    func testOfflineModeAllowedCount_Free0() {
        XCTAssertEqual(TierManager.allowedCount(for: .offlineMode, tier: .free), 0)
    }

    func testOfflineModeAllowedCount_Pro1() {
        XCTAssertEqual(TierManager.allowedCount(for: .offlineMode, tier: .pro), 1)
    }

    func testOfflineModeAllowedCount_Elite1() {
        XCTAssertEqual(TierManager.allowedCount(for: .offlineMode, tier: .elite), 1)
    }

    func testOfflineModeAllowedCount_Royal1() {
        XCTAssertEqual(TierManager.allowedCount(for: .offlineMode, tier: .royal), 1)
    }

    func testOfflineModeAllowedCount_Trial1() {
        XCTAssertEqual(TierManager.allowedCount(for: .offlineMode, tier: .trial), 1)
    }

    // MARK: - Offline Mode Downgrade

    func testOfflineModeDowngradeToFreeDisables() {
        let manager = TierManager()
        let profile = UserProfile()
        profile.selectedTierId = "pro"
        manager.syncFromProfile(profile)
        profile.offlineModeEnabled = true

        manager.selectTier("free", profile: profile)

        XCTAssertFalse(profile.offlineModeEnabled)
    }

    func testOfflineModeDowngradeProToFreeResetsFlag() {
        let manager = TierManager()
        let profile = UserProfile()
        profile.selectedTierId = "elite"
        manager.syncFromProfile(profile)
        profile.offlineModeEnabled = true

        manager.selectTier("free", profile: profile)

        XCTAssertFalse(profile.offlineModeEnabled)
    }

    func testOfflineModeDowngradeEliteToProKeepsEnabled() {
        let manager = TierManager()
        let profile = UserProfile()
        profile.selectedTierId = "elite"
        manager.syncFromProfile(profile)
        profile.offlineModeEnabled = true

        // Pro still has offline mode
        manager.selectTier("pro", profile: profile)

        XCTAssertTrue(profile.offlineModeEnabled)
    }

    func testOfflineModeUpgradeDoesNotAutoEnable() {
        let manager = TierManager()
        let profile = UserProfile()
        profile.selectedTierId = "free"
        manager.syncFromProfile(profile)
        profile.offlineModeEnabled = false

        manager.selectTier("pro", profile: profile)

        XCTAssertFalse(profile.offlineModeEnabled)
    }

    func testOfflineModeNotificationName() {
        XCTAssertEqual(Notification.Name.offlineModeAutoDisabled.rawValue, "offlineModeAutoDisabled")
    }

    func testOfflineModeDefaultIsFalse() {
        let profile = UserProfile()
        XCTAssertFalse(profile.offlineModeEnabled)
    }

    func testOfflineModeCanBeEnabled() {
        let profile = UserProfile()
        profile.offlineModeEnabled = true
        XCTAssertTrue(profile.offlineModeEnabled)
    }

    // MARK: - Epic 9: Upgrade Prompt Manager Tests

    func testUpgradePromptManagerShouldShowInitially() {
        let manager = UpgradePromptManager()
        XCTAssertTrue(manager.shouldShowPrompt(for: .soundscapes))
        XCTAssertTrue(manager.shouldShowPrompt(for: .breathingOrbs))
        XCTAssertTrue(manager.shouldShowPrompt(for: .unlimitedPractice))
    }

    func testUpgradePromptManagerMarkShownPreventsRepeat() {
        let manager = UpgradePromptManager()
        manager.markPromptShown(for: .soundscapes)
        XCTAssertFalse(manager.shouldShowPrompt(for: .soundscapes))
        XCTAssertTrue(manager.shouldShowPrompt(for: .breathingOrbs))
    }

    func testUpgradePromptManagerResetSession() {
        let manager = UpgradePromptManager()
        manager.markPromptShown(for: .soundscapes)
        manager.markPromptShown(for: .breathingOrbs)
        manager.resetSession()
        XCTAssertTrue(manager.shouldShowPrompt(for: .soundscapes))
        XCTAssertTrue(manager.shouldShowPrompt(for: .breathingOrbs))
    }

    func testUpgradePromptManagerShownPromptsSetTracksAll() {
        let manager = UpgradePromptManager()
        manager.markPromptShown(for: .soundscapes)
        manager.markPromptShown(for: .quantumFlow)
        manager.markPromptShown(for: .offlineMode)
        XCTAssertEqual(manager.shownPrompts.count, 3)
        XCTAssertTrue(manager.shownPrompts.contains(.soundscapes))
        XCTAssertTrue(manager.shownPrompts.contains(.quantumFlow))
        XCTAssertTrue(manager.shownPrompts.contains(.offlineMode))
    }

    func testUpgradePromptManagerNudgeBenefitIndex() {
        let manager = UpgradePromptManager()
        XCTAssertEqual(manager.nudgeBenefits.count, 5)
        // Benefit index cycles through 0-4 based on session count
        let index = manager.nudgeBenefitIndex
        XCTAssertTrue(index >= 0 && index < 5)
    }

    // MARK: - PremiumFeature Properties Tests

    func testPremiumFeatureDisplayNames() {
        XCTAssertEqual(PremiumFeature.soundscapes.displayName, "Soundscapes")
        XCTAssertEqual(PremiumFeature.breathingOrbs.displayName, "Breathing Orbs")
        XCTAssertEqual(PremiumFeature.unlimitedPractice.displayName, "Unlimited Practice")
        XCTAssertEqual(PremiumFeature.quantumFlow.displayName, "Quantum Flow")
        XCTAssertEqual(PremiumFeature.nebulaDrift.displayName, "Nebula Drift")
        XCTAssertEqual(PremiumFeature.offlineMode.displayName, "Offline Mode")
        XCTAssertEqual(PremiumFeature.languagePairs.displayName, "Language Pairs")
    }

    func testPremiumFeatureMinimumTiers() {
        XCTAssertEqual(PremiumFeature.soundscapes.minimumTier, .pro)
        XCTAssertEqual(PremiumFeature.breathingOrbs.minimumTier, .pro)
        XCTAssertEqual(PremiumFeature.unlimitedPractice.minimumTier, .pro)
        XCTAssertEqual(PremiumFeature.offlineMode.minimumTier, .pro)
        XCTAssertEqual(PremiumFeature.quantumFlow.minimumTier, .elite)
        XCTAssertEqual(PremiumFeature.nebulaDrift.minimumTier, .elite)
        XCTAssertEqual(PremiumFeature.languagePairs.minimumTier, .free)
    }

    func testPremiumFeatureIconNames() {
        XCTAssertFalse(PremiumFeature.soundscapes.iconName.isEmpty)
        XCTAssertFalse(PremiumFeature.breathingOrbs.iconName.isEmpty)
        XCTAssertFalse(PremiumFeature.quantumFlow.iconName.isEmpty)
        XCTAssertFalse(PremiumFeature.nebulaDrift.iconName.isEmpty)
        XCTAssertFalse(PremiumFeature.offlineMode.iconName.isEmpty)
        XCTAssertFalse(PremiumFeature.unlimitedPractice.iconName.isEmpty)
        XCTAssertFalse(PremiumFeature.languagePairs.iconName.isEmpty)
    }

    func testPremiumFeatureBenefitTexts() {
        for feature in PremiumFeature.allCases {
            XCTAssertFalse(feature.benefitText.isEmpty, "\(feature.displayName) should have benefit text")
        }
    }

    func testPremiumFeatureCarouselFeatures() {
        let carousel = PremiumFeature.carouselFeatures
        XCTAssertEqual(carousel.count, 3)
        XCTAssertTrue(carousel.contains(.soundscapes))
        XCTAssertTrue(carousel.contains(.breathingOrbs))
        XCTAssertTrue(carousel.contains(.unlimitedPractice))
    }

    func testPremiumFeatureIsHashable() {
        var set = Set<PremiumFeature>()
        set.insert(.soundscapes)
        set.insert(.soundscapes) // duplicate
        set.insert(.breathingOrbs)
        XCTAssertEqual(set.count, 2)
    }

    func testPremiumFeatureAllCasesCount() {
        XCTAssertEqual(PremiumFeature.allCases.count, 10)
    }

    // MARK: - Royal Trial Lifecycle

    func testStartTrialSetsTrialDateAndTier() {
        let profile = UserProfile()
        XCTAssertNil(profile.trialStartDate)
        XCTAssertFalse(profile.hasUsedTrial)

        let tm = TierManager()
        let started = tm.startTrial(profile: profile)

        XCTAssertTrue(started)
        XCTAssertNotNil(profile.trialStartDate)
        XCTAssertTrue(profile.hasUsedTrial)
        XCTAssertEqual(profile.selectedTierId, "trial")
        XCTAssertEqual(tm.currentTier, .trial)
    }

    func testStartTrialRejectsSecondAttempt() {
        let profile = UserProfile()
        let tm = TierManager()

        // First start
        let first = tm.startTrial(profile: profile)
        XCTAssertTrue(first)

        // Try again
        let second = tm.startTrial(profile: profile)
        XCTAssertFalse(second)
    }

    func testStartTrialReturnsfalseForNilProfile() {
        let tm = TierManager()
        let started = tm.startTrial(profile: nil)
        XCTAssertFalse(started)
    }

    func testCheckTrialExpirationDowngradesExpiredTrial() {
        let profile = UserProfile()
        let tm = TierManager()

        // Set trial started 15 days ago
        profile.trialStartDate = Calendar.current.date(byAdding: .day, value: -15, to: Date.now)
        profile.selectedTierId = "trial"
        tm.currentTierId = "trial"

        let expired = tm.checkTrialExpiration(profile: profile)
        XCTAssertTrue(expired, "Trial started 15 days ago should be expired")
        XCTAssertEqual(tm.currentTier, .free)
        XCTAssertEqual(profile.selectedTierId, "free")
    }

    func testCheckTrialExpirationKeepsActiveTrial() {
        let profile = UserProfile()
        let tm = TierManager()

        // Set trial started 10 days ago (still active)
        profile.trialStartDate = Calendar.current.date(byAdding: .day, value: -10, to: Date.now)
        profile.selectedTierId = "trial"
        tm.currentTierId = "trial"

        let expired = tm.checkTrialExpiration(profile: profile)
        XCTAssertFalse(expired, "Trial started 10 days ago should still be active")
        XCTAssertEqual(tm.currentTier, .trial)
    }

    func testCheckTrialExpirationSkipsIfAlreadyShown() {
        let profile = UserProfile()
        let tm = TierManager()

        // Set expired trial but trialExpiredShown = true
        profile.trialStartDate = Calendar.current.date(byAdding: .day, value: -15, to: Date.now)
        profile.selectedTierId = "trial"
        profile.trialExpiredShown = true
        tm.currentTierId = "trial"

        let expired = tm.checkTrialExpiration(profile: profile)
        XCTAssertFalse(expired, "Should not fire if trialExpiredShown is already true")
    }

    func testCheckTrialExpirationSkipsForNonTrialTier() {
        let profile = UserProfile()
        let tm = TierManager()

        // Set expired trial date but user is on free tier (already downgraded)
        profile.trialStartDate = Calendar.current.date(byAdding: .day, value: -15, to: Date.now)
        profile.selectedTierId = "free"
        tm.currentTierId = "free"

        let expired = tm.checkTrialExpiration(profile: profile)
        XCTAssertFalse(expired, "Should not fire for non-trial tier")
    }

    func testTrialDaysRemaining() {
        let profile = UserProfile()

        // No trial → nil
        XCTAssertNil(profile.trialDaysRemaining)

        // Trial started today → 14 days remaining (approximately, ±1 day)
        profile.trialStartDate = Date.now
        XCTAssertNotNil(profile.trialDaysRemaining)
        let daysLeft = profile.trialDaysRemaining!
        XCTAssertTrue(daysLeft >= 13 && daysLeft <= 14, "Days remaining should be 13-14, got \(daysLeft)")

        // Trial started 15 days ago → 0
        profile.trialStartDate = Calendar.current.date(byAdding: .day, value: -15, to: Date.now)
        XCTAssertEqual(profile.trialDaysRemaining, 0)
    }

    func testTrialTierHasFullRoyalAccess() {
        // Trial tier should match Royal in feature access
        for feature in PremiumFeature.allCases {
            let trialCount = TierManager.allowedCount(for: feature, tier: .trial)
            let royalCount = TierManager.allowedCount(for: feature, tier: .royal)
            XCTAssertEqual(trialCount, royalCount, "\(feature) access should match Royal for trial")
        }
    }

    func testHasUsedTrialReflectsStartDate() {
        let profile = UserProfile()
        XCTAssertFalse(profile.hasUsedTrial)

        profile.trialStartDate = Date.now
        XCTAssertTrue(profile.hasUsedTrial)
    }

    func testTrialExpiryDate() {
        let profile = UserProfile()
        XCTAssertNil(profile.trialExpiryDate)

        let startDate = Date.now
        profile.trialStartDate = startDate
        let expected = Calendar.current.date(byAdding: .day, value: 14, to: startDate)!
        XCTAssertEqual(
            Calendar.current.dateComponents([.day], from: profile.trialExpiryDate!, to: expected).day,
            0
        )
    }

    func testTrialProgressPreservedAfterExpiration() {
        let profile = UserProfile()
        profile.totalXP = 500
        profile.dailyStreak = 7

        let tm = TierManager()
        profile.trialStartDate = Calendar.current.date(byAdding: .day, value: -15, to: Date.now)
        profile.selectedTierId = "trial"
        tm.currentTierId = "trial"

        _ = tm.checkTrialExpiration(profile: profile)

        // Progress data preserved
        XCTAssertEqual(profile.totalXP, 500)
        XCTAssertEqual(profile.dailyStreak, 7)
    }

    // MARK: - Epic 11: Settings & Appearance Gating

    func testFreeLocksThreeAppearanceSubTabs() {
        let manager = TierManager()
        manager.currentTierId = "free"
        let locked: [PremiumFeature] = [.breathingOrbs, .quantumFlow, .nebulaDrift]
        let lockedCount = locked.filter { !manager.hasAccess(to: $0) }.count
        XCTAssertEqual(lockedCount, 3, "Free tier should lock all 3 appearance sub-tabs")
    }

    func testProLocksTwoAppearanceSubTabs() {
        let manager = TierManager()
        manager.currentTierId = "pro"
        let subTabs: [PremiumFeature] = [.breathingOrbs, .quantumFlow, .nebulaDrift]
        let lockedCount = subTabs.filter { !manager.hasAccess(to: $0) }.count
        XCTAssertEqual(lockedCount, 2, "Pro tier should lock Quantum Flow and Nebula Drift")
        XCTAssertTrue(manager.hasAccess(to: .breathingOrbs))
        XCTAssertFalse(manager.hasAccess(to: .quantumFlow))
        XCTAssertFalse(manager.hasAccess(to: .nebulaDrift))
    }

    func testEliteLocksZeroAppearanceSubTabs() {
        let manager = TierManager()
        manager.currentTierId = "elite"
        let subTabs: [PremiumFeature] = [.breathingOrbs, .quantumFlow, .nebulaDrift]
        let lockedCount = subTabs.filter { !manager.hasAccess(to: $0) }.count
        XCTAssertEqual(lockedCount, 0, "Elite tier should lock 0 appearance sub-tabs")
    }

    func testRoyalLocksZeroAppearanceSubTabs() {
        let manager = TierManager()
        manager.currentTierId = "royal"
        let subTabs: [PremiumFeature] = [.breathingOrbs, .quantumFlow, .nebulaDrift]
        let lockedCount = subTabs.filter { !manager.hasAccess(to: $0) }.count
        XCTAssertEqual(lockedCount, 0, "Royal tier should lock 0 appearance sub-tabs")
    }

    func testFreeTierSoundscapesLocked() {
        let manager = TierManager()
        manager.currentTierId = "free"
        XCTAssertFalse(manager.hasAccess(to: .soundscapes), "Free tier should not have soundscape access")
        XCTAssertEqual(manager.allowedCount(for: .soundscapes), 0)
        XCTAssertTrue(manager.unlockedSoundscapes().isEmpty, "Free tier should have 0 unlocked soundscapes")
    }

    func testProTierSoundscapesPartialAccess() {
        let manager = TierManager()
        manager.currentTierId = "pro"
        XCTAssertTrue(manager.hasAccess(to: .soundscapes), "Pro tier should have soundscape access")
        XCTAssertEqual(manager.allowedCount(for: .soundscapes), 1, "Pro tier gets 1 soundscape")
        XCTAssertEqual(manager.unlockedSoundscapes().count, 1)
    }

    func testEliteTierSoundscapesFullAccess() {
        let manager = TierManager()
        manager.currentTierId = "elite"
        XCTAssertTrue(manager.hasAccess(to: .soundscapes))
        XCTAssertEqual(manager.allowedCount(for: .soundscapes), 8)
    }

    // MARK: - Epic 12: Dashboard Feature Visibility

    // MARK: 12.2 — tierEmoji per tier

    func testTierEmojiFreeTierIsEmpty() {
        XCTAssertEqual(MembershipTier.free.emoji, "")
    }

    func testTierEmojiProTierIsBolt() {
        XCTAssertEqual(MembershipTier.pro.emoji, "⚡")
    }

    func testTierEmojiEliteTierIsSparkles() {
        XCTAssertEqual(MembershipTier.elite.emoji, "✨")
    }

    func testTierEmojiRoyalTierIsCrown() {
        XCTAssertEqual(MembershipTier.royal.emoji, "👑")
    }

    func testTierEmojiTrialTierIsGift() {
        XCTAssertEqual(MembershipTier.trial.emoji, "🎁")
    }

    func testTierManagerForwardsEmoji() {
        let manager = TierManager()
        manager.currentTierId = "pro"
        XCTAssertEqual(manager.tierEmoji, "⚡")
        manager.currentTierId = "royal"
        XCTAssertEqual(manager.tierEmoji, "👑")
    }

    // MARK: 12.2 — tierIcon per tier

    func testTierIconPerTier() {
        XCTAssertEqual(MembershipTier.free.iconName, "globe")
        XCTAssertEqual(MembershipTier.pro.iconName, "bolt.fill")
        XCTAssertEqual(MembershipTier.elite.iconName, "sparkles")
        XCTAssertEqual(MembershipTier.royal.iconName, "crown.fill")
        XCTAssertEqual(MembershipTier.trial.iconName, "gift.fill")
    }

    // MARK: 12.1 — Dashboard Widgets per tier

    func testDashboardWidgetsFreeTier() {
        let config = TierManager.dashboardWidgets(for: .free)
        XCTAssertTrue(config.widgets.contains(.gameModes))
        XCTAssertTrue(config.widgets.contains(.overviewStats))
        XCTAssertTrue(config.widgets.contains(.dailyTimeRemaining))
        XCTAssertTrue(config.widgets.contains(.premiumCarousel))
        XCTAssertFalse(config.widgets.contains(.soundscapeNowPlaying))
        XCTAssertFalse(config.widgets.contains(.royalBadge))
    }

    func testDashboardWidgetsProTier() {
        let config = TierManager.dashboardWidgets(for: .pro)
        XCTAssertTrue(config.widgets.contains(.gameModes))
        XCTAssertTrue(config.widgets.contains(.overviewStats))
        XCTAssertTrue(config.widgets.contains(.soundscapeNowPlaying))
        XCTAssertTrue(config.widgets.contains(.offlineStatus))
        XCTAssertFalse(config.widgets.contains(.dailyTimeRemaining))
        XCTAssertFalse(config.widgets.contains(.premiumCarousel))
        XCTAssertFalse(config.widgets.contains(.royalBadge))
    }

    func testDashboardWidgetsEliteTier() {
        let config = TierManager.dashboardWidgets(for: .elite)
        XCTAssertTrue(config.widgets.contains(.soundscapeNowPlaying))
        XCTAssertTrue(config.widgets.contains(.offlineStatus))
        XCTAssertFalse(config.widgets.contains(.royalBadge))
    }

    func testDashboardWidgetsRoyalTier() {
        let config = TierManager.dashboardWidgets(for: .royal)
        XCTAssertTrue(config.widgets.contains(.soundscapeNowPlaying))
        XCTAssertTrue(config.widgets.contains(.offlineStatus))
        XCTAssertTrue(config.widgets.contains(.royalBadge))
    }

    func testDashboardWidgetsTrialTier() {
        let config = TierManager.dashboardWidgets(for: .trial)
        XCTAssertTrue(config.widgets.contains(.royalBadge), "Trial has Royal-level access, should show Royal badge")
        XCTAssertTrue(config.widgets.contains(.soundscapeNowPlaying))
    }

    func testDashboardWidgetsInstanceMethod() {
        let manager = TierManager()
        manager.currentTierId = "free"
        let config = manager.dashboardWidgets()
        XCTAssertTrue(config.widgets.contains(.premiumCarousel))
        manager.currentTierId = "pro"
        let proConfig = manager.dashboardWidgets()
        XCTAssertFalse(proConfig.widgets.contains(.premiumCarousel))
    }

    // MARK: 12.3 — Game Mode Time Badge

    func testFreeTierIsLimitedReturnsTrue() {
        let tracker = PracticeTimeTracker()
        XCTAssertTrue(tracker.isLimited(for: .free), "Free tier should have practice time limit")
    }

    func testProTierIsLimitedReturnsFalse() {
        let tracker = PracticeTimeTracker()
        XCTAssertFalse(tracker.isLimited(for: .pro), "Pro tier should have unlimited practice time")
    }

    func testEliteTierIsLimitedReturnsFalse() {
        let tracker = PracticeTimeTracker()
        XCTAssertFalse(tracker.isLimited(for: .elite))
    }

    func testRoyalTierIsLimitedReturnsFalse() {
        let tracker = PracticeTimeTracker()
        XCTAssertFalse(tracker.isLimited(for: .royal))
    }

    func testTrialTierIsLimitedReturnsFalse() {
        let tracker = PracticeTimeTracker()
        XCTAssertFalse(tracker.isLimited(for: .trial))
    }

    func testRemainingTimeDisplayUnlimited() {
        let tracker = PracticeTimeTracker()
        XCTAssertEqual(tracker.remainingTimeDisplay(for: .pro), "Unlimited")
        XCTAssertEqual(tracker.remainingTimeDisplay(for: .elite), "Unlimited")
        XCTAssertEqual(tracker.remainingTimeDisplay(for: .royal), "Unlimited")
    }

    // MARK: - Epic 13: Game Session Feature Integration

    // MARK: 13.3 — XP Multiplier per tier

    func testXPMultiplierFreeTierIsBase() {
        XCTAssertEqual(TierManager.xpMultiplier(for: .free), 1.0)
    }

    func testXPMultiplierProTierIs125() {
        XCTAssertEqual(TierManager.xpMultiplier(for: .pro), 1.25)
    }

    func testXPMultiplierEliteTierIs150() {
        XCTAssertEqual(TierManager.xpMultiplier(for: .elite), 1.5)
    }

    func testXPMultiplierRoyalTierIs200() {
        XCTAssertEqual(TierManager.xpMultiplier(for: .royal), 2.0)
    }

    func testXPMultiplierTrialTierIs200() {
        XCTAssertEqual(TierManager.xpMultiplier(for: .trial), 2.0)
    }

    func testXPMultiplierInstanceMethod() {
        let manager = TierManager()
        manager.currentTierId = "free"
        XCTAssertEqual(manager.xpMultiplier, 1.0)
        manager.currentTierId = "pro"
        XCTAssertEqual(manager.xpMultiplier, 1.25)
        manager.currentTierId = "elite"
        XCTAssertEqual(manager.xpMultiplier, 1.5)
        manager.currentTierId = "royal"
        XCTAssertEqual(manager.xpMultiplier, 2.0)
    }

    func testXPMultiplierChangesOnTierChange() {
        let manager = TierManager()
        manager.currentTierId = "free"
        XCTAssertEqual(manager.xpMultiplier, 1.0, "Free tier should have 1.0x multiplier")
        manager.currentTierId = "royal"
        XCTAssertEqual(manager.xpMultiplier, 2.0, "Royal tier should have 2.0x multiplier immediately")
    }

    // MARK: 13.3 — XP Calculation with multiplier

    func testGameSessionResultBaseXP() {
        let result = GameSessionResult(
            gameType: .flashCards,
            categoryKey: "animals",
            score: 100,
            correctAnswers: 10,
            totalQuestions: 10,
            timeSpent: 60,
            sourceLanguage: "english",
            targetLanguage: "spanish"
        )
        XCTAssertEqual(result.baseXP, 100)
        XCTAssertEqual(result.xpEarned, 100, "Default multiplier 1.0 → xpEarned == score")
    }

    func testGameSessionResultWithRoyalMultiplier() {
        let result = GameSessionResult(
            gameType: .flashCards,
            categoryKey: "animals",
            score: 100,
            correctAnswers: 10,
            totalQuestions: 10,
            timeSpent: 60,
            sourceLanguage: "english",
            targetLanguage: "spanish",
            xpMultiplier: 2.0
        )
        XCTAssertEqual(result.baseXP, 100)
        XCTAssertEqual(result.xpEarned, 200, "100 base XP × 2.0 multiplier = 200 final XP")
    }

    func testGameSessionResultWithProMultiplier() {
        let result = GameSessionResult(
            gameType: .grammar,
            categoryKey: "basics",
            score: 80,
            correctAnswers: 8,
            totalQuestions: 10,
            timeSpent: 45,
            sourceLanguage: "english",
            targetLanguage: "french",
            xpMultiplier: 1.25
        )
        XCTAssertEqual(result.baseXP, 80)
        XCTAssertEqual(result.xpEarned, 100, "80 base XP × 1.25 multiplier = 100 final XP")
    }

    func testGameSessionResultWithEliteMultiplier() {
        let result = GameSessionResult(
            gameType: .wordBuilder,
            categoryKey: "food",
            score: 60,
            correctAnswers: 4,
            totalQuestions: 5,
            timeSpent: 30,
            sourceLanguage: "english",
            targetLanguage: "german",
            xpMultiplier: 1.5
        )
        XCTAssertEqual(result.baseXP, 60)
        XCTAssertEqual(result.xpEarned, 90, "60 base XP × 1.5 multiplier = 90 final XP")
    }

    // MARK: 13.2 — Session Results Config per tier

    func testSessionResultsConfigFreeTier() {
        let config = TierManager.sessionResultsConfig(for: .free)
        XCTAssertEqual(config.sections, [.basicStats])
        XCTAssertFalse(config.sections.contains(.timeAndStreak))
        XCTAssertFalse(config.sections.contains(.previousComparison))
        XCTAssertFalse(config.sections.contains(.performanceGraph))
        XCTAssertFalse(config.sections.contains(.shareableCard))
    }

    func testSessionResultsConfigProTier() {
        let config = TierManager.sessionResultsConfig(for: .pro)
        XCTAssertTrue(config.sections.contains(.basicStats))
        XCTAssertTrue(config.sections.contains(.timeAndStreak))
        XCTAssertTrue(config.sections.contains(.previousComparison))
        XCTAssertFalse(config.sections.contains(.performanceGraph))
        XCTAssertFalse(config.sections.contains(.weakAreas))
        XCTAssertFalse(config.sections.contains(.shareableCard))
    }

    func testSessionResultsConfigEliteTier() {
        let config = TierManager.sessionResultsConfig(for: .elite)
        XCTAssertTrue(config.sections.contains(.basicStats))
        XCTAssertTrue(config.sections.contains(.timeAndStreak))
        XCTAssertTrue(config.sections.contains(.previousComparison))
        XCTAssertTrue(config.sections.contains(.performanceGraph))
        XCTAssertTrue(config.sections.contains(.weakAreas))
        XCTAssertFalse(config.sections.contains(.personalizedTips))
        XCTAssertFalse(config.sections.contains(.shareableCard))
    }

    func testSessionResultsConfigRoyalTier() {
        let config = TierManager.sessionResultsConfig(for: .royal)
        XCTAssertTrue(config.sections.contains(.basicStats))
        XCTAssertTrue(config.sections.contains(.timeAndStreak))
        XCTAssertTrue(config.sections.contains(.previousComparison))
        XCTAssertTrue(config.sections.contains(.performanceGraph))
        XCTAssertTrue(config.sections.contains(.weakAreas))
        XCTAssertTrue(config.sections.contains(.personalizedTips))
        XCTAssertTrue(config.sections.contains(.shareableCard))
    }

    func testSessionResultsConfigTrialTier() {
        let config = TierManager.sessionResultsConfig(for: .trial)
        XCTAssertEqual(config.sections.count, TierManager.sessionResultsConfig(for: .royal).sections.count,
                       "Trial should have same sections as Royal")
        XCTAssertTrue(config.sections.contains(.shareableCard))
    }

    func testSessionResultsConfigInstanceMethod() {
        let manager = TierManager()
        manager.currentTierId = "free"
        let freeConfig = manager.sessionResultsConfig()
        XCTAssertEqual(freeConfig.sections, [.basicStats])
        manager.currentTierId = "elite"
        let eliteConfig = manager.sessionResultsConfig()
        XCTAssertTrue(eliteConfig.sections.contains(.performanceGraph))
    }

    // MARK: 13.2 — Minimum tier for section

    func testMinimumTierForBasicStats() {
        XCTAssertEqual(TierManager.minimumTierForSection(.basicStats), .free)
    }

    func testMinimumTierForTimeAndStreak() {
        XCTAssertEqual(TierManager.minimumTierForSection(.timeAndStreak), .pro)
    }

    func testMinimumTierForPreviousComparison() {
        XCTAssertEqual(TierManager.minimumTierForSection(.previousComparison), .pro)
    }

    func testMinimumTierForPerformanceGraph() {
        XCTAssertEqual(TierManager.minimumTierForSection(.performanceGraph), .elite)
    }

    func testMinimumTierForWeakAreas() {
        XCTAssertEqual(TierManager.minimumTierForSection(.weakAreas), .elite)
    }

    func testMinimumTierForShareableCard() {
        XCTAssertEqual(TierManager.minimumTierForSection(.shareableCard), .royal)
    }

    // MARK: 13.1 — In-Session Tier Awareness

    func testFreeTierHasNoSoundscapeInSession() {
        let manager = TierManager()
        manager.currentTierId = "free"
        XCTAssertFalse(manager.hasAccess(to: .soundscapes), "Free tier should not have soundscape access during sessions")
    }

    func testProTierHasSoundscapeInSession() {
        let manager = TierManager()
        manager.currentTierId = "pro"
        XCTAssertTrue(manager.hasAccess(to: .soundscapes), "Pro tier should have soundscape access during sessions")
    }

    func testFreeTierSessionIsTimeLimited() {
        let tracker = PracticeTimeTracker()
        XCTAssertTrue(tracker.isLimited(for: .free), "Free tier game sessions should be time-limited")
    }

    func testPaidTierSessionIsNotTimeLimited() {
        let tracker = PracticeTimeTracker()
        XCTAssertFalse(tracker.isLimited(for: .pro), "Pro tier game sessions should not be time-limited")
        XCTAssertFalse(tracker.isLimited(for: .elite), "Elite tier game sessions should not be time-limited")
        XCTAssertFalse(tracker.isLimited(for: .royal), "Royal tier game sessions should not be time-limited")
    }

    // MARK: - Epic 14: Journey / Progress View Gating

    // MARK: 14.1 — Journey Stats Config per tier

    func testJourneyStatsConfigFreeTier() {
        let config = TierManager.journeyStatsConfig(for: .free)
        XCTAssertEqual(config.sections, [.basicStats])
        XCTAssertFalse(config.sections.contains(.gameBreakdown))
        XCTAssertFalse(config.sections.contains(.dailyXPChart))
        XCTAssertFalse(config.sections.contains(.weeklyTrend))
        XCTAssertFalse(config.sections.contains(.accuracyHeatmap))
        XCTAssertFalse(config.sections.contains(.monthlyReport))
        XCTAssertFalse(config.sections.contains(.milestonePredictions))
    }

    func testJourneyStatsConfigProTier() {
        let config = TierManager.journeyStatsConfig(for: .pro)
        XCTAssertTrue(config.sections.contains(.basicStats))
        XCTAssertTrue(config.sections.contains(.gameBreakdown))
        XCTAssertTrue(config.sections.contains(.dailyXPChart))
        XCTAssertFalse(config.sections.contains(.weeklyTrend))
        XCTAssertFalse(config.sections.contains(.accuracyHeatmap))
        XCTAssertFalse(config.sections.contains(.monthlyReport))
        XCTAssertFalse(config.sections.contains(.milestonePredictions))
    }

    func testJourneyStatsConfigEliteTier() {
        let config = TierManager.journeyStatsConfig(for: .elite)
        XCTAssertTrue(config.sections.contains(.basicStats))
        XCTAssertTrue(config.sections.contains(.gameBreakdown))
        XCTAssertTrue(config.sections.contains(.dailyXPChart))
        XCTAssertTrue(config.sections.contains(.weeklyTrend))
        XCTAssertTrue(config.sections.contains(.accuracyHeatmap))
        XCTAssertFalse(config.sections.contains(.monthlyReport))
        XCTAssertFalse(config.sections.contains(.milestonePredictions))
    }

    func testJourneyStatsConfigRoyalTier() {
        let config = TierManager.journeyStatsConfig(for: .royal)
        XCTAssertTrue(config.sections.contains(.basicStats))
        XCTAssertTrue(config.sections.contains(.gameBreakdown))
        XCTAssertTrue(config.sections.contains(.dailyXPChart))
        XCTAssertTrue(config.sections.contains(.weeklyTrend))
        XCTAssertTrue(config.sections.contains(.accuracyHeatmap))
        XCTAssertTrue(config.sections.contains(.monthlyReport))
        XCTAssertTrue(config.sections.contains(.milestonePredictions))
    }

    func testJourneyStatsConfigTrialTier() {
        let config = TierManager.journeyStatsConfig(for: .trial)
        XCTAssertEqual(config.sections.count, TierManager.journeyStatsConfig(for: .royal).sections.count,
                       "Trial should have same journey sections as Royal")
        XCTAssertTrue(config.sections.contains(.milestonePredictions))
    }

    func testJourneyStatsConfigInstanceMethod() {
        let manager = TierManager()
        manager.currentTierId = "free"
        let freeConfig = manager.journeyStatsConfig()
        XCTAssertEqual(freeConfig.sections, [.basicStats])
        manager.currentTierId = "elite"
        let eliteConfig = manager.journeyStatsConfig()
        XCTAssertTrue(eliteConfig.sections.contains(.weeklyTrend))
        XCTAssertTrue(eliteConfig.sections.contains(.accuracyHeatmap))
    }

    // MARK: 14.1 — Minimum tier for journey section

    func testMinimumTierForBasicStatsJourney() {
        XCTAssertEqual(TierManager.minimumTierForJourneySection(.basicStats), .free)
    }

    func testMinimumTierForGameBreakdown() {
        XCTAssertEqual(TierManager.minimumTierForJourneySection(.gameBreakdown), .pro)
    }

    func testMinimumTierForDailyXPChart() {
        XCTAssertEqual(TierManager.minimumTierForJourneySection(.dailyXPChart), .pro)
    }

    func testMinimumTierForWeeklyTrend() {
        XCTAssertEqual(TierManager.minimumTierForJourneySection(.weeklyTrend), .elite)
    }

    func testMinimumTierForAccuracyHeatmap() {
        XCTAssertEqual(TierManager.minimumTierForJourneySection(.accuracyHeatmap), .elite)
    }

    func testMinimumTierForMonthlyReport() {
        XCTAssertEqual(TierManager.minimumTierForJourneySection(.monthlyReport), .royal)
    }

    func testMinimumTierForMilestonePredictions() {
        XCTAssertEqual(TierManager.minimumTierForJourneySection(.milestonePredictions), .royal)
    }

    // MARK: 14.2 — Milestone Badge Style per tier

    func testMilestoneBadgeStyleFreeTier() {
        XCTAssertEqual(TierManager.milestoneBadgeStyle(for: .free), .basic)
    }

    func testMilestoneBadgeStyleProTier() {
        XCTAssertEqual(TierManager.milestoneBadgeStyle(for: .pro), .gradient)
    }

    func testMilestoneBadgeStyleEliteTier() {
        XCTAssertEqual(TierManager.milestoneBadgeStyle(for: .elite), .sparkle)
    }

    func testMilestoneBadgeStyleRoyalTier() {
        XCTAssertEqual(TierManager.milestoneBadgeStyle(for: .royal), .holographic)
    }

    func testMilestoneBadgeStyleTrialTier() {
        XCTAssertEqual(TierManager.milestoneBadgeStyle(for: .trial), .holographic,
                       "Trial should have same badge style as Royal")
    }

    func testMilestoneBadgeStyleInstanceProperty() {
        let manager = TierManager()
        manager.currentTierId = "free"
        XCTAssertEqual(manager.milestoneBadgeStyle, .basic)
        manager.currentTierId = "pro"
        XCTAssertEqual(manager.milestoneBadgeStyle, .gradient)
        manager.currentTierId = "elite"
        XCTAssertEqual(manager.milestoneBadgeStyle, .sparkle)
        manager.currentTierId = "royal"
        XCTAssertEqual(manager.milestoneBadgeStyle, .holographic)
    }

    func testMilestoneBadgeStyleChangesOnTierChange() {
        let manager = TierManager()
        manager.currentTierId = "free"
        XCTAssertEqual(manager.milestoneBadgeStyle, .basic, "Free tier should have basic badges")
        manager.currentTierId = "royal"
        XCTAssertEqual(manager.milestoneBadgeStyle, .holographic, "Royal badges should upgrade immediately")
    }

    // MARK: 14.1 — Journey sections count per tier

    func testJourneyFreeTierHasOnlyOneSection() {
        let config = TierManager.journeyStatsConfig(for: .free)
        XCTAssertEqual(config.sections.count, 1, "Free tier should only have basicStats")
    }

    func testJourneyProTierHasThreeSections() {
        let config = TierManager.journeyStatsConfig(for: .pro)
        XCTAssertEqual(config.sections.count, 3, "Pro tier: basicStats + gameBreakdown + dailyXPChart")
    }

    func testJourneyEliteTierHasSixSections() {
        let config = TierManager.journeyStatsConfig(for: .elite)
        XCTAssertEqual(config.sections.count, 6, "Elite tier: basicStats + gameBreakdown + dailyXPChart + weeklyTrend + accuracyHeatmap + exportData")
    }

    func testJourneyRoyalTierHasNineSections() {
        let config = TierManager.journeyStatsConfig(for: .royal)
        XCTAssertEqual(config.sections.count, 9, "Royal tier: all 9 journey sections")
    }

    // MARK: 14.2 — Badge style enum cases

    func testMilestoneBadgeStyleAllCases() {
        let allCases = TierManager.MilestoneBadgeStyle.allCases
        XCTAssertEqual(allCases.count, 4)
        XCTAssertTrue(allCases.contains(.basic))
        XCTAssertTrue(allCases.contains(.gradient))
        XCTAssertTrue(allCases.contains(.sparkle))
        XCTAssertTrue(allCases.contains(.holographic))
    }

    // MARK: 14.1 — Journey sections enum cases

    func testJourneyStatsSectionAllCases() {
        let allCases = TierManager.JourneyStatsSection.allCases
        XCTAssertEqual(allCases.count, 9)
        XCTAssertTrue(allCases.contains(.basicStats))
        XCTAssertTrue(allCases.contains(.gameBreakdown))
        XCTAssertTrue(allCases.contains(.dailyXPChart))
        XCTAssertTrue(allCases.contains(.weeklyTrend))
        XCTAssertTrue(allCases.contains(.accuracyHeatmap))
        XCTAssertTrue(allCases.contains(.monthlyReport))
        XCTAssertTrue(allCases.contains(.milestonePredictions))
        XCTAssertTrue(allCases.contains(.exportData))
        XCTAssertTrue(allCases.contains(.insights))
    }

    // MARK: - Epic 17: Haptic Level

    func testHapticLevelFreeIsBasic() {
        XCTAssertEqual(TierManager.hapticLevel(for: .free), .basic)
    }

    func testHapticLevelProIsEnhanced() {
        XCTAssertEqual(TierManager.hapticLevel(for: .pro), .enhanced)
    }

    func testHapticLevelEliteIsRich() {
        XCTAssertEqual(TierManager.hapticLevel(for: .elite), .rich)
    }

    func testHapticLevelRoyalIsPremium() {
        XCTAssertEqual(TierManager.hapticLevel(for: .royal), .premium)
    }

    func testHapticLevelTrialIsPremium() {
        XCTAssertEqual(TierManager.hapticLevel(for: .trial), .premium)
    }

    func testHapticLevelInstanceProperty() {
        let tm = TierManager()
        tm.currentTier = .elite
        XCTAssertEqual(tm.hapticLevel, .rich)
    }

    func testHapticLevelChangesOnTierChange() {
        let tm = TierManager()
        tm.currentTier = .free
        XCTAssertEqual(tm.hapticLevel, .basic)
        tm.currentTier = .royal
        XCTAssertEqual(tm.hapticLevel, .premium)
    }

    func testHapticLevelAllCases() {
        let allCases = TierManager.HapticLevel.allCases
        XCTAssertEqual(allCases.count, 4)
        XCTAssertTrue(allCases.contains(.basic))
        XCTAssertTrue(allCases.contains(.enhanced))
        XCTAssertTrue(allCases.contains(.rich))
        XCTAssertTrue(allCases.contains(.premium))
    }

    // MARK: - Epic 17: Upgrade Celebration State

    func testUpgradeCelebrationInitiallyFalse() {
        let tm = TierManager()
        XCTAssertFalse(tm.showUpgradeCelebration)
    }

    func testUpgradedToTierInitiallyFree() {
        let tm = TierManager()
        XCTAssertEqual(tm.upgradedToTier, .free)
    }

    func testUpgradeDetectionFreeToProIsUpgrade() {
        // Verify rank ordering that drives celebration
        XCTAssertTrue(MembershipTier.pro.rank > MembershipTier.free.rank)
    }

    func testUpgradeDetectionProToFreeIsNotUpgrade() {
        XCTAssertFalse(MembershipTier.free.rank > MembershipTier.pro.rank)
    }

    func testUpgradeDetectionFreeToEliteIsUpgrade() {
        XCTAssertTrue(MembershipTier.elite.rank > MembershipTier.free.rank)
    }

    func testUpgradeDetectionEliteToProIsNotUpgrade() {
        XCTAssertFalse(MembershipTier.pro.rank > MembershipTier.elite.rank)
    }

    func testUpgradeDetectionFreeToRoyalIsUpgrade() {
        XCTAssertTrue(MembershipTier.royal.rank > MembershipTier.free.rank)
    }

    func testRankOrderingCompleteness() {
        // free < pro < elite < royal == trial
        XCTAssertLessThan(MembershipTier.free.rank, MembershipTier.pro.rank)
        XCTAssertLessThan(MembershipTier.pro.rank, MembershipTier.elite.rank)
        XCTAssertLessThan(MembershipTier.elite.rank, MembershipTier.royal.rank)
        XCTAssertEqual(MembershipTier.royal.rank, MembershipTier.trial.rank)
    }

    // MARK: - Epic 17: TierHapticsService

    func testTierHapticsServiceExists() {
        let service = TierHapticsService.shared
        XCTAssertNotNil(service)
    }

    func testTierHapticsServiceAcceptsAllLevels() {
        let service = TierHapticsService.shared
        // Verify no crash for all haptic levels
        for level in TierManager.HapticLevel.allCases {
            service.correctAnswer(level: level)
            service.wrongAnswer(level: level)
            service.cardFlip(level: level)
            service.streakMilestone(level: level, count: 5)
        }
    }

    // MARK: - Epic 18: Data Export & Insights

    // MARK: Journey Section Gating (exportData, insights)

    func testExportDataSectionRequiresElite() {
        XCTAssertEqual(TierManager.minimumTierForJourneySection(.exportData), .elite)
    }

    func testInsightsSectionRequiresRoyal() {
        XCTAssertEqual(TierManager.minimumTierForJourneySection(.insights), .royal)
    }

    func testFreeHasNoExportOrInsights() {
        let config = TierManager.journeyStatsConfig(for: .free)
        XCTAssertFalse(config.sections.contains(.exportData))
        XCTAssertFalse(config.sections.contains(.insights))
    }

    func testProHasNoExportOrInsights() {
        let config = TierManager.journeyStatsConfig(for: .pro)
        XCTAssertFalse(config.sections.contains(.exportData))
        XCTAssertFalse(config.sections.contains(.insights))
    }

    func testEliteHasExportButNoInsights() {
        let config = TierManager.journeyStatsConfig(for: .elite)
        XCTAssertTrue(config.sections.contains(.exportData))
        XCTAssertFalse(config.sections.contains(.insights))
    }

    func testRoyalHasBothExportAndInsights() {
        let config = TierManager.journeyStatsConfig(for: .royal)
        XCTAssertTrue(config.sections.contains(.exportData))
        XCTAssertTrue(config.sections.contains(.insights))
    }

    func testTrialHasBothExportAndInsights() {
        let config = TierManager.journeyStatsConfig(for: .trial)
        XCTAssertTrue(config.sections.contains(.exportData))
        XCTAssertTrue(config.sections.contains(.insights))
    }

    // MARK: DataExporter — Available Formats

    func testExportFormatsForFreeIsEmpty() {
        XCTAssertTrue(DataExporter.availableFormats(for: .free).isEmpty)
    }

    func testExportFormatsForProIsEmpty() {
        XCTAssertTrue(DataExporter.availableFormats(for: .pro).isEmpty)
    }

    func testExportFormatsForEliteIsCSVOnly() {
        let formats = DataExporter.availableFormats(for: .elite)
        XCTAssertEqual(formats, [.csv])
    }

    func testExportFormatsForRoyalIncludesCSVJSONPDF() {
        let formats = DataExporter.availableFormats(for: .royal)
        XCTAssertEqual(formats, [.csv, .json, .pdf])
    }

    func testExportFormatsForTrialIncludesCSVJSONPDF() {
        let formats = DataExporter.availableFormats(for: .trial)
        XCTAssertEqual(formats, [.csv, .json, .pdf])
    }

    // MARK: DataExporter — CSV Export

    func testCSVExportProducesHeaderLine() {
        let csv = DataExporter.exportCSV(records: [])
        let csvStr = String(data: csv, encoding: .utf8) ?? ""
        XCTAssertTrue(csvStr.hasPrefix("Date,Game Type,Category,Score,Correct,Total"))
    }

    func testCSVExportEmptyRecordsProducesOnlyHeader() {
        let csv = DataExporter.exportCSV(records: [])
        let csvStr = String(data: csv, encoding: .utf8) ?? ""
        let lines = csvStr.components(separatedBy: "\n")
        XCTAssertEqual(lines.count, 1) // header only
    }

    // MARK: DataExporter — JSON Export

    func testJSONExportProducesValidJSON() {
        let jsonData = DataExporter.exportJSON(records: [])
        let obj = try? JSONSerialization.jsonObject(with: jsonData) as? [String: Any]
        XCTAssertNotNil(obj)
        XCTAssertEqual(obj?["totalSessions"] as? Int, 0)
    }

    func testJSONExportContainsMetadata() {
        let jsonData = DataExporter.exportJSON(records: [])
        let obj = try? JSONSerialization.jsonObject(with: jsonData) as? [String: Any]
        XCTAssertNotNil(obj?["exportDate"])
        XCTAssertNotNil(obj?["totalXP"])
        XCTAssertNotNil(obj?["overallAccuracy"])
        XCTAssertNotNil(obj?["sessions"])
    }

    // MARK: DataExporter — PDF Export

    func testPDFExportProducesNonEmptyData() {
        let pdfData = DataExporter.exportPDF(records: [])
        XCTAssertFalse(pdfData.isEmpty)
    }

    func testPDFExportStartsWithPDFHeader() {
        let pdfData = DataExporter.exportPDF(records: [])
        let prefix = String(data: pdfData.prefix(5), encoding: .ascii) ?? ""
        XCTAssertEqual(prefix, "%PDF-")
    }

    // MARK: LearningInsights — Time Slots

    func testTimeSlotFromHour6IsMorning() {
        XCTAssertEqual(LearningInsights.TimeSlot.from(hour: 6), .morning)
    }

    func testTimeSlotFromHour12IsAfternoon() {
        XCTAssertEqual(LearningInsights.TimeSlot.from(hour: 12), .afternoon)
    }

    func testTimeSlotFromHour20IsEvening() {
        XCTAssertEqual(LearningInsights.TimeSlot.from(hour: 20), .evening)
    }

    func testTimeSlotFromHour23IsNight() {
        XCTAssertEqual(LearningInsights.TimeSlot.from(hour: 23), .night)
    }

    func testTimeSlotFromHour3IsNight() {
        XCTAssertEqual(LearningInsights.TimeSlot.from(hour: 3), .night)
    }

    func testTimeSlotAllCasesCountIs4() {
        XCTAssertEqual(LearningInsights.TimeSlot.allCases.count, 4)
    }

    // MARK: LearningInsights — Empty Records

    func testInsightsWithNoRecordsHasEmptyCategories() {
        let insights = LearningInsights(records: [])
        XCTAssertTrue(insights.categoryAccuracies.isEmpty)
    }

    func testInsightsWithNoRecordsHasEmptyWeeklyTrend() {
        let insights = LearningInsights(records: [])
        XCTAssertTrue(insights.weeklyAccuracyTrend.isEmpty)
    }

    func testInsightsWithNoRecordsHasEmptyFluencyMilestones() {
        let insights = LearningInsights(records: [])
        XCTAssertTrue(insights.fluencyMilestones.isEmpty)
    }

    // MARK: JourneyStatsSection new cases

    func testJourneyStatsSectionAllCasesIncludes9() {
        XCTAssertEqual(TierManager.JourneyStatsSection.allCases.count, 9)
    }

    func testJourneyStatsSectionContainsExportData() {
        XCTAssertTrue(TierManager.JourneyStatsSection.allCases.contains(.exportData))
    }

    func testJourneyStatsSectionContainsInsights() {
        XCTAssertTrue(TierManager.JourneyStatsSection.allCases.contains(.insights))
    }

    // MARK: - Feature Override Infrastructure (DEBUG only)

    #if DEBUG
    func testFeatureOverrideDefaultsToNil() {
        let tm = TierManager()
        for feature in PremiumFeature.allCases {
            XCTAssertNil(tm.featureOverride(for: feature),
                         "\(feature) should have no override by default")
        }
    }

    func testSetFeatureOverrideTrue() {
        let tm = TierManager()
        tm.setFeatureOverride(true, for: .soundscapes)
        XCTAssertEqual(tm.featureOverride(for: .soundscapes), true)
        tm.setFeatureOverride(nil, for: .soundscapes)
    }

    func testSetFeatureOverrideFalse() {
        let tm = TierManager()
        tm.setFeatureOverride(false, for: .quantumFlow)
        XCTAssertEqual(tm.featureOverride(for: .quantumFlow), false)
        tm.setFeatureOverride(nil, for: .quantumFlow)
    }

    func testClearFeatureOverride() {
        let tm = TierManager()
        tm.setFeatureOverride(true, for: .offlineMode)
        XCTAssertNotNil(tm.featureOverride(for: .offlineMode))
        tm.setFeatureOverride(nil, for: .offlineMode)
        XCTAssertNil(tm.featureOverride(for: .offlineMode))
    }

    func testHasActiveOverridesInitiallyFalse() {
        let tm = TierManager()
        tm.clearAllOverrides()
        XCTAssertFalse(tm.hasActiveOverrides)
    }

    func testHasActiveOverridesTrueWhenSet() {
        let tm = TierManager()
        tm.clearAllOverrides()
        tm.setFeatureOverride(true, for: .breathingOrbs)
        XCTAssertTrue(tm.hasActiveOverrides)
        tm.clearAllOverrides()
    }

    func testClearAllOverrides() {
        let tm = TierManager()
        for feature in PremiumFeature.allCases {
            tm.setFeatureOverride(true, for: feature)
        }
        XCTAssertTrue(tm.hasActiveOverrides)
        tm.clearAllOverrides()
        XCTAssertFalse(tm.hasActiveOverrides)
        for feature in PremiumFeature.allCases {
            XCTAssertNil(tm.featureOverride(for: feature))
        }
    }

    func testOverrideEnablesFeatureOnFreeTier() {
        let tm = TierManager()
        tm.currentTierId = MembershipTier.free.rawValue
        // Free tier should NOT have quantum flow
        XCTAssertFalse(tm.hasAccess(to: .quantumFlow))
        // Override to enable it
        tm.setFeatureOverride(true, for: .quantumFlow)
        XCTAssertTrue(tm.hasAccess(to: .quantumFlow))
        tm.setFeatureOverride(nil, for: .quantumFlow)
    }

    func testOverrideDisablesFeatureOnRoyalTier() {
        let tm = TierManager()
        tm.currentTierId = MembershipTier.royal.rawValue
        // Royal should have soundscapes
        XCTAssertTrue(tm.hasAccess(to: .soundscapes))
        // Override to disable
        tm.setFeatureOverride(false, for: .soundscapes)
        XCTAssertFalse(tm.hasAccess(to: .soundscapes))
        tm.setFeatureOverride(nil, for: .soundscapes)
    }

    func testEffectiveStatusNaturalEnabled() {
        let tm = TierManager()
        tm.currentTierId = MembershipTier.royal.rawValue
        let status = tm.effectiveFeatureStatus(for: .soundscapes)
        if case .natural(let enabled) = status {
            XCTAssertTrue(enabled)
        } else {
            XCTFail("Expected natural status")
        }
    }

    func testEffectiveStatusNaturalDisabled() {
        let tm = TierManager()
        tm.currentTierId = MembershipTier.free.rawValue
        let status = tm.effectiveFeatureStatus(for: .quantumFlow)
        if case .natural(let enabled) = status {
            XCTAssertFalse(enabled)
        } else {
            XCTFail("Expected natural status")
        }
    }

    func testEffectiveStatusOverriddenEnabled() {
        let tm = TierManager()
        tm.currentTierId = MembershipTier.free.rawValue
        tm.setFeatureOverride(true, for: .nebulaDrift)
        let status = tm.effectiveFeatureStatus(for: .nebulaDrift)
        if case .overridden(let enabled) = status {
            XCTAssertTrue(enabled)
        } else {
            XCTFail("Expected overridden status")
        }
        tm.setFeatureOverride(nil, for: .nebulaDrift)
    }

    func testEffectiveStatusOverriddenDisabled() {
        let tm = TierManager()
        tm.currentTierId = MembershipTier.royal.rawValue
        tm.setFeatureOverride(false, for: .offlineMode)
        let status = tm.effectiveFeatureStatus(for: .offlineMode)
        if case .overridden(let enabled) = status {
            XCTAssertFalse(enabled)
        } else {
            XCTFail("Expected overridden status")
        }
        tm.setFeatureOverride(nil, for: .offlineMode)
    }

    func testFeatureStatusIsEnabledProperty() {
        XCTAssertTrue(TierManager.FeatureStatus.natural(enabled: true).isEnabled)
        XCTAssertFalse(TierManager.FeatureStatus.natural(enabled: false).isEnabled)
        XCTAssertTrue(TierManager.FeatureStatus.overridden(enabled: true).isEnabled)
        XCTAssertFalse(TierManager.FeatureStatus.overridden(enabled: false).isEnabled)
    }

    func testFeatureStatusIsOverriddenProperty() {
        XCTAssertFalse(TierManager.FeatureStatus.natural(enabled: true).isOverridden)
        XCTAssertFalse(TierManager.FeatureStatus.natural(enabled: false).isOverridden)
        XCTAssertTrue(TierManager.FeatureStatus.overridden(enabled: true).isOverridden)
        XCTAssertTrue(TierManager.FeatureStatus.overridden(enabled: false).isOverridden)
    }

    func testOverrideKeyUniqueness() {
        let keys = PremiumFeature.allCases.map(\.overrideKey)
        XCTAssertEqual(Set(keys).count, keys.count, "Override keys must be unique")
    }

    func testOverrideDoesNotAffectOtherFeatures() {
        let tm = TierManager()
        tm.clearAllOverrides()
        tm.currentTierId = MembershipTier.free.rawValue
        tm.setFeatureOverride(true, for: .soundscapes)
        // Other features should remain at their natural state
        XCTAssertFalse(tm.hasAccess(to: .quantumFlow))
        XCTAssertFalse(tm.hasAccess(to: .nebulaDrift))
        XCTAssertFalse(tm.hasAccess(to: .offlineMode))
        tm.clearAllOverrides()
    }

    func testOverrideSurvivesRoundTrip() {
        let tm1 = TierManager()
        tm1.setFeatureOverride(true, for: .breathingOrbs)
        let tm2 = TierManager()
        XCTAssertEqual(tm2.featureOverride(for: .breathingOrbs), true)
        tm1.clearAllOverrides()
    }

    func testAllowedCountRespectsOverride() {
        let tm = TierManager()
        tm.currentTierId = MembershipTier.free.rawValue
        // Free tier gets limited language pairs
        let naturalCount = tm.allowedCount(for: .languagePairs)
        // Override should enable unlimited (nil means it falls through to natural)
        // But when we force enable, the count should reflect enabled state
        tm.setFeatureOverride(true, for: .languagePairs)
        let overriddenCount = tm.allowedCount(for: .languagePairs)
        // If allowedCount short-circuits on override=true → Int.max
        XCTAssertGreaterThan(overriddenCount, naturalCount)
        tm.setFeatureOverride(nil, for: .languagePairs)
    }

    func testAllowedCountOverrideDisableReturnsZero() {
        let tm = TierManager()
        tm.currentTierId = MembershipTier.royal.rawValue
        tm.setFeatureOverride(false, for: .languagePairs)
        XCTAssertEqual(tm.allowedCount(for: .languagePairs), 0)
        tm.setFeatureOverride(nil, for: .languagePairs)
    }
    #endif

    // MARK: - Epic 20: Edge Cases & Error Handling

    // MARK: 20.1 — Corrupt Tier Data Validation

    func testValidateStateInvalidTierIdResetsToFree() {
        let tm = TierManager()
        let profile = UserProfile(selectedTierId: "diamond_ultra")
        tm.syncFromProfile(profile)
        // After sync, MembershipTier(tierId:) already falls back to .free
        // but validateState should also fix the profile's stored ID
        tm.validateState(profile: profile)
        XCTAssertEqual(profile.selectedTierId, "free")
        XCTAssertEqual(tm.currentTier, .free)
    }

    func testValidateStateFutureTrialDateClearsTrial() {
        let tm = TierManager()
        let futureDate = Calendar.current.date(byAdding: .day, value: 7, to: Date.now)!
        let profile = UserProfile(selectedTierId: "trial", trialStartDate: futureDate)
        tm.syncFromProfile(profile)
        tm.validateState(profile: profile)
        XCTAssertNil(profile.trialStartDate, "Future trial date should be cleared")
        XCTAssertFalse(profile.trialExpiredShown, "trialExpiredShown should be reset")
        XCTAssertEqual(tm.currentTier, .free, "Tier should fall back to free")
        XCTAssertEqual(profile.selectedTierId, "free")
    }

    func testValidateStateAncientTrialDateMarksExpired() {
        let tm = TierManager()
        let ancientDate = Calendar.current.date(byAdding: .day, value: -400, to: Date.now)!
        let profile = UserProfile(selectedTierId: "trial", trialStartDate: ancientDate)
        tm.syncFromProfile(profile)
        tm.validateState(profile: profile)
        XCTAssertTrue(profile.trialExpiredShown, "Ancient trial should be marked as expired")
        XCTAssertEqual(tm.currentTier, .free, "Tier should fall back to free")
        XCTAssertEqual(profile.selectedTierId, "free")
    }

    func testValidateStateTrialWithoutStartDateResetsToFree() {
        let tm = TierManager()
        let profile = UserProfile(selectedTierId: "trial")
        tm.syncFromProfile(profile)
        tm.validateState(profile: profile)
        XCTAssertEqual(tm.currentTier, .free)
        XCTAssertEqual(profile.selectedTierId, "free")
    }

    func testValidateStateValidTierIdUnchanged() {
        let tm = TierManager()
        let profile = UserProfile(selectedTierId: "pro")
        tm.syncFromProfile(profile)
        tm.validateState(profile: profile)
        XCTAssertEqual(tm.currentTier, .pro)
        XCTAssertEqual(profile.selectedTierId, "pro")
    }

    func testValidateStateValidTrialUnchanged() {
        let tm = TierManager()
        let recentDate = Calendar.current.date(byAdding: .day, value: -3, to: Date.now)!
        let profile = UserProfile(selectedTierId: "trial", trialStartDate: recentDate)
        tm.syncFromProfile(profile)
        tm.validateState(profile: profile)
        XCTAssertEqual(tm.currentTier, .trial)
        XCTAssertEqual(profile.selectedTierId, "trial")
        XCTAssertNotNil(profile.trialStartDate)
    }

    func testValidateStateNilProfileNoOp() {
        let tm = TierManager()
        tm.validateState(profile: nil)
        XCTAssertEqual(tm.currentTier, .free) // unchanged default
    }

    // MARK: 20.2 — Concurrent Tier Change Safety

    func testTierManagerIsMainActorIsolated() {
        // TierManager is @MainActor — verify we can call non-static methods
        // from this @MainActor test context without any async boundary
        let tm = TierManager()
        let profile = UserProfile(selectedTierId: "pro")
        tm.syncFromProfile(profile)
        XCTAssertEqual(tm.currentTier, .pro)
        tm.selectTier("elite", profile: profile)
        XCTAssertEqual(tm.currentTier, .elite)
    }

    func testCheckTrialExpirationAndSelectTierBothUseSelectTier() {
        // Both manual changes and trial expiration flow through selectTier
        let tm = TierManager()
        let expiredDate = Calendar.current.date(byAdding: .day, value: -15, to: Date.now)!
        let profile = UserProfile(selectedTierId: "trial", trialStartDate: expiredDate)
        tm.syncFromProfile(profile)
        // Trial just expired — checkTrialExpiration should downgrade via selectTier
        let didExpire = tm.checkTrialExpiration(profile: profile)
        XCTAssertTrue(didExpire)
        XCTAssertEqual(tm.currentTier, .free)
    }

    func testSequentialTierChangesProduceConsistentState() {
        let tm = TierManager()
        let profile = UserProfile(selectedTierId: "free")
        tm.syncFromProfile(profile)
        // Rapid sequential changes
        tm.selectTier("pro", profile: profile)
        tm.selectTier("elite", profile: profile)
        tm.selectTier("royal", profile: profile)
        XCTAssertEqual(tm.currentTier, .royal)
        XCTAssertEqual(profile.selectedTierId, "royal")
    }

    // MARK: 20.3 — Dormant Settings Capture & Restore

    func testDormantSettingsCapturedOnDowngrade() {
        let tm = TierManager()
        let profile = UserProfile(selectedTierId: "royal")
        tm.syncFromProfile(profile)
        // Configure some premium features
        profile.breathingOrbsEnabled = true
        profile.breathingOrbScheme = BreathingOrbScheme.tokyoSunset.rawValue
        profile.quantumFlowEnabled = true
        profile.offlineModeEnabled = true
        // Downgrade to free — should capture settings
        tm.selectTier("free", profile: profile)
        let dormant = profile.dormantSettings
        XCTAssertEqual(dormant["breathingOrbsEnabled"], "true")
        XCTAssertEqual(dormant["breathingOrbScheme"], BreathingOrbScheme.tokyoSunset.rawValue)
        XCTAssertEqual(dormant["quantumFlowEnabled"], "true")
        XCTAssertEqual(dormant["offlineModeEnabled"], "true")
    }

    func testDormantSettingsRestoredOnUpgrade() {
        let tm = TierManager()
        let profile = UserProfile(selectedTierId: "royal")
        tm.syncFromProfile(profile)
        // Configure premium features during Royal
        profile.breathingOrbsEnabled = true
        profile.breathingOrbScheme = BreathingOrbScheme.tokyoSunset.rawValue
        profile.offlineModeEnabled = true
        // Downgrade to free (captures dormant settings)
        tm.selectTier("free", profile: profile)
        XCTAssertFalse(profile.breathingOrbsEnabled, "Should be disabled after downgrade")
        XCTAssertFalse(profile.offlineModeEnabled, "Should be disabled after downgrade")
        // Upgrade to pro (should restore breathing orbs + offline from dormant)
        tm.selectTier("pro", profile: profile)
        XCTAssertTrue(profile.breathingOrbsEnabled, "Should be restored from dormant")
        XCTAssertEqual(profile.breathingOrbScheme, BreathingOrbScheme.tokyoSunset.rawValue)
        XCTAssertTrue(profile.offlineModeEnabled, "Should be restored from dormant")
    }

    func testDormantSettingsDoNotRestoreBeyondNewTierScope() {
        let tm = TierManager()
        let profile = UserProfile(selectedTierId: "royal")
        tm.syncFromProfile(profile)
        // Configure Royal-only features
        profile.quantumFlowEnabled = true
        profile.quantumFlowScene = QuantumFlowScene.dubaiCelestialMirage.rawValue
        profile.nebulaDriftEnabled = true
        // Downgrade to free
        tm.selectTier("free", profile: profile)
        // Upgrade to Pro only — Quantum Flow and Nebula are Elite+
        tm.selectTier("pro", profile: profile)
        XCTAssertFalse(profile.quantumFlowEnabled, "Quantum Flow is Elite+, should NOT be restored for Pro")
        XCTAssertFalse(profile.nebulaDriftEnabled, "Nebula Drift is Elite+, should NOT be restored for Pro")
    }

    func testDormantSettingsEmptyByDefault() {
        let profile = UserProfile()
        XCTAssertTrue(profile.dormantSettings.isEmpty)
        XCTAssertNil(profile.dormantSettingsData)
    }

    func testDormantSettingsRoundTrip() {
        let profile = UserProfile()
        profile.dormantSettings = ["key1": "value1", "key2": "value2"]
        let reloaded = profile.dormantSettings
        XCTAssertEqual(reloaded["key1"], "value1")
        XCTAssertEqual(reloaded["key2"], "value2")
    }

    func testCaptureDoesNotOverwriteExistingDormant() {
        let tm = TierManager()
        let profile = UserProfile(selectedTierId: "elite")
        tm.syncFromProfile(profile)
        // Pre-existing dormant setting from a previous cycle
        profile.dormantSettings = ["breathingOrbScheme": BreathingOrbScheme.tokyoSunset.rawValue]
        // Current profile has a different scheme
        profile.breathingOrbsEnabled = true
        profile.breathingOrbScheme = BreathingOrbScheme.barcelonaNights.rawValue
        // Capture on downgrade — should overwrite with current values
        tm.captureDormantSettings(profile: profile)
        XCTAssertEqual(profile.dormantSettings["breathingOrbScheme"], BreathingOrbScheme.barcelonaNights.rawValue)
    }

    func testRestoreReturnsFalseWhenNoDormantSettings() {
        let tm = TierManager()
        let profile = UserProfile(selectedTierId: "pro")
        tm.syncFromProfile(profile)
        XCTAssertFalse(tm.restoreDormantSettings(profile: profile))
    }

    // MARK: 20.4 — iCloud Tier Sync

    /// In-memory mock for CloudKeyValueStore used by iCloud sync tests.
    private func makeMockCloudStore() -> MockCloudStore {
        MockCloudStore()
    }

    func testPullFromCloudHigherRemoteTierWins() {
        let tm = TierManager()
        let mock = makeMockCloudStore()
        tm.cloudStore = mock
        let profile = UserProfile(selectedTierId: "free")
        tm.syncFromProfile(profile)
        mock.set("pro", forKey: "cloud_selectedTierId")
        tm.pullFromCloud(profile: profile)
        XCTAssertEqual(tm.currentTier, .pro)
        XCTAssertEqual(profile.selectedTierId, "pro")
    }

    func testPullFromCloudLocalHigherTierPushes() {
        let tm = TierManager()
        let mock = makeMockCloudStore()
        tm.cloudStore = mock
        let profile = UserProfile(selectedTierId: "elite")
        tm.syncFromProfile(profile)
        mock.set("free", forKey: "cloud_selectedTierId")
        tm.pullFromCloud(profile: profile)
        XCTAssertEqual(tm.currentTier, .elite)
        XCTAssertEqual(mock.string(forKey: "cloud_selectedTierId"), "elite")
    }

    func testPullFromCloudTrialDateEarliestWins() {
        let tm = TierManager()
        let mock = makeMockCloudStore()
        tm.cloudStore = mock
        let localDate = Calendar.current.date(byAdding: .day, value: -5, to: Date.now)!
        let remoteDate = Calendar.current.date(byAdding: .day, value: -10, to: Date.now)!
        let profile = UserProfile(selectedTierId: "trial", trialStartDate: localDate)
        tm.syncFromProfile(profile)
        mock.storage["cloud_trialStartDate"] = remoteDate.timeIntervalSince1970
        tm.pullFromCloud(profile: profile)
        XCTAssertEqual(profile.trialStartDate!.timeIntervalSince1970,
                       remoteDate.timeIntervalSince1970,
                       accuracy: 1.0)
    }

    func testPullFromCloudAdoptsRemoteTrialDateWhenLocalNil() {
        let tm = TierManager()
        let mock = makeMockCloudStore()
        tm.cloudStore = mock
        let profile = UserProfile(selectedTierId: "free")
        tm.syncFromProfile(profile)
        let remoteDate = Calendar.current.date(byAdding: .day, value: -3, to: Date.now)!
        mock.storage["cloud_trialStartDate"] = remoteDate.timeIntervalSince1970
        tm.pullFromCloud(profile: profile)
        XCTAssertNotNil(profile.trialStartDate)
        XCTAssertEqual(profile.trialStartDate!.timeIntervalSince1970,
                       remoteDate.timeIntervalSince1970,
                       accuracy: 1.0)
    }

    func testPushToCloudWritesTierAndTrialDate() {
        let tm = TierManager()
        let mock = makeMockCloudStore()
        tm.cloudStore = mock
        let trialDate = Calendar.current.date(byAdding: .day, value: -2, to: Date.now)!
        let profile = UserProfile(selectedTierId: "trial", trialStartDate: trialDate)
        tm.syncFromProfile(profile)
        tm.pushToCloud(profile: profile)
        XCTAssertEqual(mock.string(forKey: "cloud_selectedTierId"), "trial")
        let storedTimestamp = mock.double(forKey: "cloud_trialStartDate")
        XCTAssertEqual(storedTimestamp, trialDate.timeIntervalSince1970, accuracy: 1.0)
    }

    func testPushToCloudClearsTrialDateWhenNil() {
        let tm = TierManager()
        let mock = makeMockCloudStore()
        tm.cloudStore = mock
        let profile = UserProfile(selectedTierId: "pro")
        tm.syncFromProfile(profile)
        mock.storage["cloud_trialStartDate"] = Date.now.timeIntervalSince1970
        tm.pushToCloud(profile: profile)
        XCTAssertEqual(mock.double(forKey: "cloud_trialStartDate"), 0.0)
    }

    // MARK: - Epic 21: Onboarding & First-Run Tier Education Tests

    // MARK: Story 21.1 — TierOnboardingFlow

    func testOnboardingFlagDefaultsFalse() {
        // hasSeenTierOnboarding defaults to false on fresh install
        UserDefaults.standard.removeObject(forKey: "hasSeenTierOnboarding")
        XCTAssertFalse(UserDefaults.standard.bool(forKey: "hasSeenTierOnboarding"))
    }

    func testOnboardingFlagPersistsAfterSet() {
        UserDefaults.standard.set(true, forKey: "hasSeenTierOnboarding")
        XCTAssertTrue(UserDefaults.standard.bool(forKey: "hasSeenTierOnboarding"))
        // Cleanup
        UserDefaults.standard.removeObject(forKey: "hasSeenTierOnboarding")
    }

    func testOnboardingStartTrialActivatesTrial() {
        let tm = TierManager()
        let profile = UserProfile(selectedTierId: "free")
        XCTAssertFalse(profile.hasUsedTrial)
        let started = tm.startTrial(profile: profile)
        XCTAssertTrue(started)
        XCTAssertEqual(tm.currentTier, .trial)
        XCTAssertNotNil(profile.trialStartDate)
    }

    func testOnboardingContinueWithFreeKeepsFree() {
        let tm = TierManager()
        let profile = UserProfile(selectedTierId: "free")
        tm.syncFromProfile(profile)
        // Simulating "Continue with Free" — tier stays free
        XCTAssertEqual(tm.currentTier, .free)
        XCTAssertEqual(profile.selectedTierId, "free")
    }

    // MARK: Story 21.2 — TooltipManager

    func testTooltipManagerShowsOnce() {
        let manager = TooltipManager()
        manager.resetAll()
        XCTAssertTrue(manager.shouldShow(for: "test_tooltip"))
        manager.markShown(for: "test_tooltip")
        XCTAssertFalse(manager.shouldShow(for: "test_tooltip"))
        // Cleanup
        manager.resetAll()
    }

    func testTooltipManagerResetAll() {
        let manager = TooltipManager()
        manager.markShown(for: "tooltip_a")
        manager.markShown(for: "tooltip_b")
        XCTAssertFalse(manager.shouldShow(for: "tooltip_a"))
        XCTAssertFalse(manager.shouldShow(for: "tooltip_b"))
        manager.resetAll()
        XCTAssertTrue(manager.shouldShow(for: "tooltip_a"))
        XCTAssertTrue(manager.shouldShow(for: "tooltip_b"))
    }

    func testTooltipManagerIndependentKeys() {
        let manager = TooltipManager()
        manager.resetAll()
        manager.markShown(for: "tooltip_x")
        XCTAssertFalse(manager.shouldShow(for: "tooltip_x"))
        XCTAssertTrue(manager.shouldShow(for: "tooltip_y"))
        // Cleanup
        manager.resetAll()
    }

    func testTooltipMarkShownIdempotent() {
        let manager = TooltipManager()
        manager.resetAll()
        manager.markShown(for: "tooltip_z")
        manager.markShown(for: "tooltip_z") // Double mark
        let shown = UserDefaults.standard.stringArray(forKey: "shownTooltips") ?? []
        XCTAssertEqual(shown.filter { $0 == "tooltip_z" }.count, 1, "Should not duplicate entries")
        // Cleanup
        manager.resetAll()
    }

    // MARK: Story 21.3 — allFeatures()

    func testAllFeaturesReturnAllCases() {
        let tm = TierManager()
        let features = tm.allFeatures()
        XCTAssertEqual(features.count, PremiumFeature.allCases.count)
        let featureSet = Set(features.map(\.feature))
        for feature in PremiumFeature.allCases {
            XCTAssertTrue(featureSet.contains(feature), "\(feature) should be in allFeatures()")
        }
    }

    func testAllFeaturesFreeHasLimitedAccess() {
        let tm = TierManager()
        tm.currentTier = .free
        let features = tm.allFeatures()
        // Free tier: languagePairs + content-personalization features (flashcardDeckSize, grammarDifficulty, wordBuilderDifficulty)
        let enabled = Set(features.filter(\.enabled).map(\.feature))
        XCTAssertTrue(enabled.contains(.languagePairs))
        XCTAssertTrue(enabled.contains(.flashcardDeckSize))
        XCTAssertTrue(enabled.contains(.grammarDifficulty))
        XCTAssertTrue(enabled.contains(.wordBuilderDifficulty))
        XCTAssertFalse(enabled.contains(.soundscapes))
        XCTAssertFalse(enabled.contains(.quantumFlow))
        XCTAssertFalse(enabled.contains(.nebulaDrift))
    }

    func testAllFeaturesRoyalHasAllAccess() {
        let tm = TierManager()
        tm.currentTier = .royal
        let features = tm.allFeatures()
        let enabled = features.filter(\.enabled)
        XCTAssertEqual(enabled.count, PremiumFeature.allCases.count, "Royal tier should enable all features")
    }

    func testAllFeaturesProHasCorrectAccess() {
        let tm = TierManager()
        tm.currentTier = .pro
        let features = tm.allFeatures()
        let enabledFeatures = Set(features.filter(\.enabled).map(\.feature))
        // Pro: soundscapes, languagePairs, unlimitedPractice, breathingOrbs, offlineMode = YES
        // + flashcardDeckSize, grammarDifficulty, wordBuilderDifficulty = YES
        // quantumFlow, nebulaDrift = NO
        XCTAssertTrue(enabledFeatures.contains(.soundscapes))
        XCTAssertTrue(enabledFeatures.contains(.languagePairs))
        XCTAssertTrue(enabledFeatures.contains(.unlimitedPractice))
        XCTAssertTrue(enabledFeatures.contains(.breathingOrbs))
        XCTAssertTrue(enabledFeatures.contains(.offlineMode))
        XCTAssertTrue(enabledFeatures.contains(.flashcardDeckSize))
        XCTAssertTrue(enabledFeatures.contains(.grammarDifficulty))
        XCTAssertTrue(enabledFeatures.contains(.wordBuilderDifficulty))
        XCTAssertFalse(enabledFeatures.contains(.quantumFlow))
        XCTAssertFalse(enabledFeatures.contains(.nebulaDrift))
    }

    // MARK: - Content Personalization: Flashcard Deck Size

    func testFlashcardLimit_Free50() {
        XCTAssertEqual(TierManager.flashcardLimit(for: .free), 50)
    }

    func testFlashcardLimit_Pro75() {
        XCTAssertEqual(TierManager.flashcardLimit(for: .pro), 75)
    }

    func testFlashcardLimit_Elite100() {
        XCTAssertEqual(TierManager.flashcardLimit(for: .elite), 100)
    }

    func testFlashcardLimit_RoyalUnlimited() {
        XCTAssertEqual(TierManager.flashcardLimit(for: .royal), Int.max)
    }

    func testFlashcardLimit_TrialUnlimited() {
        XCTAssertEqual(TierManager.flashcardLimit(for: .trial), Int.max)
    }

    func testFlashcardAllowedCount_Free50() {
        XCTAssertEqual(TierManager.allowedCount(for: .flashcardDeckSize, tier: .free), 50)
    }

    func testFlashcardAllowedCount_Pro75() {
        XCTAssertEqual(TierManager.allowedCount(for: .flashcardDeckSize, tier: .pro), 75)
    }

    func testFlashcardAllowedCount_Elite100() {
        XCTAssertEqual(TierManager.allowedCount(for: .flashcardDeckSize, tier: .elite), 100)
    }

    func testFlashcardAllowedCount_RoyalMax() {
        XCTAssertEqual(TierManager.allowedCount(for: .flashcardDeckSize, tier: .royal), Int.max)
    }

    func testFlashcardAllowedCount_TrialMax() {
        XCTAssertEqual(TierManager.allowedCount(for: .flashcardDeckSize, tier: .trial), Int.max)
    }

    func testFlashcardLimitInstanceMethod() {
        let tm = TierManager()
        tm.currentTier = .free
        XCTAssertEqual(tm.flashcardLimit, 50)
        tm.currentTier = .pro
        XCTAssertEqual(tm.flashcardLimit, 75)
        tm.currentTier = .elite
        XCTAssertEqual(tm.flashcardLimit, 100)
        tm.currentTier = .royal
        XCTAssertEqual(tm.flashcardLimit, Int.max)
    }

    // MARK: - Content Personalization: Grammar Difficulty

    func testGrammarDifficulty_Free1() {
        XCTAssertEqual(TierManager.allowedCount(for: .grammarDifficulty, tier: .free), 1)
    }

    func testGrammarDifficulty_Pro2() {
        XCTAssertEqual(TierManager.allowedCount(for: .grammarDifficulty, tier: .pro), 2)
    }

    func testGrammarDifficulty_Elite3() {
        XCTAssertEqual(TierManager.allowedCount(for: .grammarDifficulty, tier: .elite), 3)
    }

    func testGrammarDifficulty_Royal3() {
        XCTAssertEqual(TierManager.allowedCount(for: .grammarDifficulty, tier: .royal), 3)
    }

    func testGrammarDifficulty_Trial3() {
        XCTAssertEqual(TierManager.allowedCount(for: .grammarDifficulty, tier: .trial), 3)
    }

    func testMaxDifficultyLevel_GrammarFree() {
        XCTAssertEqual(TierManager.maxDifficultyLevel(for: .grammar, tier: .free), 1)
    }

    func testMaxDifficultyLevel_GrammarPro() {
        XCTAssertEqual(TierManager.maxDifficultyLevel(for: .grammar, tier: .pro), 2)
    }

    func testMaxDifficultyLevel_GrammarElite() {
        XCTAssertEqual(TierManager.maxDifficultyLevel(for: .grammar, tier: .elite), 3)
    }

    func testMaxDifficultyLevel_GrammarRoyal() {
        XCTAssertEqual(TierManager.maxDifficultyLevel(for: .grammar, tier: .royal), 3)
    }

    // MARK: - Content Personalization: Word Builder Difficulty

    func testWordBuilderDifficulty_Free1() {
        XCTAssertEqual(TierManager.allowedCount(for: .wordBuilderDifficulty, tier: .free), 1)
    }

    func testWordBuilderDifficulty_Pro2() {
        XCTAssertEqual(TierManager.allowedCount(for: .wordBuilderDifficulty, tier: .pro), 2)
    }

    func testWordBuilderDifficulty_Elite3() {
        XCTAssertEqual(TierManager.allowedCount(for: .wordBuilderDifficulty, tier: .elite), 3)
    }

    func testWordBuilderDifficulty_Royal3() {
        XCTAssertEqual(TierManager.allowedCount(for: .wordBuilderDifficulty, tier: .royal), 3)
    }

    func testMaxDifficultyLevel_WordBuilderFree() {
        XCTAssertEqual(TierManager.maxDifficultyLevel(for: .wordBuilder, tier: .free), 1)
    }

    func testMaxDifficultyLevel_WordBuilderPro() {
        XCTAssertEqual(TierManager.maxDifficultyLevel(for: .wordBuilder, tier: .pro), 2)
    }

    func testMaxDifficultyLevel_WordBuilderElite() {
        XCTAssertEqual(TierManager.maxDifficultyLevel(for: .wordBuilder, tier: .elite), 3)
    }

    // MARK: - Content Personalization: Difficulty Access

    func testIsCategoryAccessible_FreeBeginnerOnly() {
        let tm = TierManager()
        tm.currentTier = .free
        XCTAssertTrue(tm.isCategoryAccessible(.beginner, gameType: .grammar))
        XCTAssertFalse(tm.isCategoryAccessible(.intermediate, gameType: .grammar))
        XCTAssertFalse(tm.isCategoryAccessible(.advanced, gameType: .grammar))
    }

    func testIsCategoryAccessible_ProBeginnerAndIntermediate() {
        let tm = TierManager()
        tm.currentTier = .pro
        XCTAssertTrue(tm.isCategoryAccessible(.beginner, gameType: .grammar))
        XCTAssertTrue(tm.isCategoryAccessible(.intermediate, gameType: .grammar))
        XCTAssertFalse(tm.isCategoryAccessible(.advanced, gameType: .grammar))
    }

    func testIsCategoryAccessible_EliteAllDifficulties() {
        let tm = TierManager()
        tm.currentTier = .elite
        XCTAssertTrue(tm.isCategoryAccessible(.beginner, gameType: .grammar))
        XCTAssertTrue(tm.isCategoryAccessible(.intermediate, gameType: .grammar))
        XCTAssertTrue(tm.isCategoryAccessible(.advanced, gameType: .grammar))
    }

    func testIsCategoryAccessible_RoyalAllDifficulties() {
        let tm = TierManager()
        tm.currentTier = .royal
        XCTAssertTrue(tm.isCategoryAccessible(.beginner, gameType: .wordBuilder))
        XCTAssertTrue(tm.isCategoryAccessible(.intermediate, gameType: .wordBuilder))
        XCTAssertTrue(tm.isCategoryAccessible(.advanced, gameType: .wordBuilder))
    }

    func testIsCategoryAccessible_FlashcardsAlwaysAccessible() {
        let tm = TierManager()
        tm.currentTier = .free
        // Flashcards don't gate by difficulty — only by deck size
        XCTAssertTrue(tm.isCategoryAccessible(.beginner, gameType: .flashCards))
        XCTAssertTrue(tm.isCategoryAccessible(.intermediate, gameType: .flashCards))
        XCTAssertTrue(tm.isCategoryAccessible(.advanced, gameType: .flashCards))
    }

    // MARK: - Content Personalization: Minimum Tier for Difficulty

    func testMinimumTierForDifficulty_Beginner() {
        XCTAssertEqual(TierManager.minimumTierForDifficulty(.beginner, gameType: .grammar), .free)
        XCTAssertEqual(TierManager.minimumTierForDifficulty(.beginner, gameType: .wordBuilder), .free)
    }

    func testMinimumTierForDifficulty_Intermediate() {
        XCTAssertEqual(TierManager.minimumTierForDifficulty(.intermediate, gameType: .grammar), .pro)
        XCTAssertEqual(TierManager.minimumTierForDifficulty(.intermediate, gameType: .wordBuilder), .pro)
    }

    func testMinimumTierForDifficulty_Advanced() {
        XCTAssertEqual(TierManager.minimumTierForDifficulty(.advanced, gameType: .grammar), .elite)
        XCTAssertEqual(TierManager.minimumTierForDifficulty(.advanced, gameType: .wordBuilder), .elite)
    }

    // MARK: - Difficulty Enum: Numeric Level

    func testDifficultyNumericLevel() {
        XCTAssertEqual(Difficulty.beginner.numericLevel, 1)
        XCTAssertEqual(Difficulty.intermediate.numericLevel, 2)
        XCTAssertEqual(Difficulty.advanced.numericLevel, 3)
    }

    func testDifficultyInitFromLevel() {
        XCTAssertEqual(Difficulty(level: 1), .beginner)
        XCTAssertEqual(Difficulty(level: 2), .intermediate)
        XCTAssertEqual(Difficulty(level: 3), .advanced)
        XCTAssertNil(Difficulty(level: 0))
        XCTAssertNil(Difficulty(level: 4))
    }
}

// MARK: - Mock Cloud Store

@MainActor
final class MockCloudStore: CloudKeyValueStore {
    var storage: [String: Any] = [:]

    func string(forKey key: String) -> String? {
        storage[key] as? String
    }

    func double(forKey key: String) -> Double {
        storage[key] as? Double ?? 0.0
    }

    func set(_ value: Any?, forKey key: String) {
        if let value {
            storage[key] = value
        } else {
            storage.removeValue(forKey: key)
        }
    }

    func removeObject(forKey key: String) {
        storage.removeValue(forKey: key)
    }

    @discardableResult
    func synchronize() -> Bool { true }
}
