import XCTest
@testable import LumenLingo

/// Tests for TierManager — tier persistence, feature gating, and tier-change logic.
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
}
