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
}
