import UIKit
import SwiftUI

// MARK: - Haptics Service

/// Production-grade haptic feedback for LumenLingo.
///
/// Architecture:
/// - **Enable/Disable**: Master toggle via `isEnabled`, synced from UserProfile
/// - **Pre-warmed Generators**: Reused feedback generators for instant response
/// - **Semantic Methods**: Game-specific haptics (cardFlip, tileSnap, streakPulse, etc.)
/// - **Compound Patterns**: Multi-step haptic sequences for celebrations and milestones
/// - **Anti-Spam**: Cooldown-based throttling for rapid interactions
@Observable
final class HapticsService {
    static let shared = HapticsService()

    var isEnabled: Bool = true

    // Pre-warmed generators
    private let lightGenerator = UIImpactFeedbackGenerator(style: .light)
    private let mediumGenerator = UIImpactFeedbackGenerator(style: .medium)
    private let heavyGenerator = UIImpactFeedbackGenerator(style: .heavy)
    private let softGenerator = UIImpactFeedbackGenerator(style: .soft)
    private let rigidGenerator = UIImpactFeedbackGenerator(style: .rigid)
    private let notificationGenerator = UINotificationFeedbackGenerator()
    private let selectionGenerator = UISelectionFeedbackGenerator()

    // Anti-spam
    private var lastHapticTimes: [String: TimeInterval] = [:]

    init() {
        prepareGenerators()
    }

    func syncFromProfile(_ profile: UserProfile) {
        isEnabled = profile.hapticsEnabled
    }

    private func prepareGenerators() {
        lightGenerator.prepare()
        mediumGenerator.prepare()
        heavyGenerator.prepare()
        softGenerator.prepare()
        rigidGenerator.prepare()
        notificationGenerator.prepare()
        selectionGenerator.prepare()
    }

    // MARK: - Core Haptics

    /// Light tap — card flip, hover
    func light() {
        guard isEnabled else { return }
        lightGenerator.impactOccurred()
    }

    /// Alias used by some views
    func lightImpact() { light() }

    /// Soft tap — subtle feedback
    func soft() {
        guard isEnabled else { return }
        softGenerator.impactOccurred()
    }

    /// Medium tap — selection, button press
    func medium() {
        guard isEnabled else { return }
        mediumGenerator.impactOccurred()
    }

    /// Heavy tap — important action
    func heavy() {
        guard isEnabled else { return }
        heavyGenerator.impactOccurred()
    }

    /// Rigid tap — tile snap, definitive actions
    func rigid() {
        guard isEnabled else { return }
        rigidGenerator.impactOccurred()
    }

    /// Success notification — correct answer
    func success() {
        guard isEnabled else { return }
        notificationGenerator.notificationOccurred(.success)
    }

    /// Error notification — wrong answer
    func error() {
        guard isEnabled else { return }
        notificationGenerator.notificationOccurred(.error)
    }

    /// Warning notification — hint, time running out
    func warning() {
        guard isEnabled else { return }
        notificationGenerator.notificationOccurred(.warning)
    }

    /// Selection changed — scrolling through options
    func selectionChanged() {
        guard isEnabled else { return }
        selectionGenerator.selectionChanged()
    }

    // MARK: - Game-Specific Haptics (Epic 2)

    /// Card flip — light with medium follow-through
    func cardFlip() {
        guard isEnabled, canFire("cardFlip", cooldown: 0.08) else { return }
        lightGenerator.impactOccurred()
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.06) { [weak self] in
            self?.mediumGenerator.impactOccurred(intensity: 0.4)
        }
    }

    /// Tile picked up — soft lift
    func tilePick() {
        guard isEnabled, canFire("tilePick", cooldown: 0.04) else { return }
        softGenerator.impactOccurred(intensity: 0.6)
    }

    /// Tile snapped into place — rigid lock
    func tileSnap() {
        guard isEnabled, canFire("tileSnap", cooldown: 0.04) else { return }
        rigidGenerator.impactOccurred(intensity: 0.7)
    }

    /// Tile returned to bank — light bounce
    func tileReturn() {
        guard isEnabled, canFire("tileReturn", cooldown: 0.04) else { return }
        lightGenerator.impactOccurred(intensity: 0.5)
    }

    /// Double tap pattern
    func doubleTap() {
        guard isEnabled, canFire("doubleTap", cooldown: 0.15) else { return }
        lightGenerator.impactOccurred()
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.08) { [weak self] in
            self?.lightGenerator.impactOccurred()
        }
    }

    /// Streak building — intensity increases with count
    func streakBuilding(count: Int) {
        guard isEnabled, canFire("streakBuild", cooldown: 0.2) else { return }
        let intensity = min(1.0, 0.3 + Float(count) * 0.1)
        mediumGenerator.impactOccurred(intensity: CGFloat(intensity))
    }

    /// Streak lost — error with heavy follow-up
    func streakLost() {
        guard isEnabled, canFire("streakLost", cooldown: 0.3) else { return }
        notificationGenerator.notificationOccurred(.error)
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.1) { [weak self] in
            self?.heavyGenerator.impactOccurred(intensity: 0.5)
        }
    }

    /// Correct answer — success with light sparkle
    func correctAnswer() {
        guard isEnabled, canFire("correct", cooldown: 0.1) else { return }
        notificationGenerator.notificationOccurred(.success)
    }

    /// Wrong answer — error buzz
    func wrongAnswer() {
        guard isEnabled, canFire("wrong", cooldown: 0.1) else { return }
        notificationGenerator.notificationOccurred(.error)
    }

    /// Game start — anticipation sequence
    func gameStart() {
        guard isEnabled, canFire("gameStart", cooldown: 1.0) else { return }
        softGenerator.impactOccurred(intensity: 0.4)
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.1) { [weak self] in
            self?.mediumGenerator.impactOccurred(intensity: 0.6)
        }
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.2) { [weak self] in
            self?.rigidGenerator.impactOccurred(intensity: 0.8)
        }
    }

    /// Perfect score celebration
    func perfectScore() {
        guard isEnabled, canFire("perfectScore", cooldown: 1.0) else { return }
        for i in 0..<4 {
            let delay = TimeInterval(i) * 0.1
            let intensity = CGFloat(0.4 + Double(i) * 0.2)
            DispatchQueue.main.asyncAfter(deadline: .now() + delay) { [weak self] in
                self?.mediumGenerator.impactOccurred(intensity: min(intensity, 1.0))
            }
        }
    }

    /// Celebration sequence — compound haptic for completion
    func celebrate() {
        guard isEnabled, canFire("celebrate", cooldown: 0.5) else { return }
        notificationGenerator.notificationOccurred(.success)
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.15) { [weak self] in
            self?.mediumGenerator.impactOccurred(intensity: 0.7)
        }
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.30) { [weak self] in
            self?.lightGenerator.impactOccurred(intensity: 0.5)
        }
    }

    /// Level up — crescendo haptic
    func levelUp() {
        guard isEnabled, canFire("levelUp", cooldown: 1.0) else { return }
        for i in 0..<5 {
            let delay = TimeInterval(i) * 0.08
            let intensity = CGFloat(0.3 + Double(i) * 0.15)
            DispatchQueue.main.asyncAfter(deadline: .now() + delay) { [weak self] in
                self?.rigidGenerator.impactOccurred(intensity: min(intensity, 1.0))
            }
        }
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) { [weak self] in
            self?.notificationGenerator.notificationOccurred(.success)
        }
    }

    /// Category complete
    func categoryComplete() {
        guard isEnabled, canFire("catComplete", cooldown: 0.5) else { return }
        notificationGenerator.notificationOccurred(.success)
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.2) { [weak self] in
            self?.heavyGenerator.impactOccurred(intensity: 0.6)
        }
    }

    /// Favorite toggled
    func favoriteToggle() {
        guard isEnabled, canFire("favToggle", cooldown: 0.15) else { return }
        mediumGenerator.impactOccurred(intensity: 0.6)
    }

    /// Navigation transition
    func navTransition() {
        guard isEnabled, canFire("navTransition", cooldown: 0.12) else { return }
        softGenerator.impactOccurred(intensity: 0.3)
    }

    /// Tab switch
    func tabSwitch() {
        guard isEnabled, canFire("tabSwitch", cooldown: 0.12) else { return }
        selectionGenerator.selectionChanged()
    }

    /// Toggle switch
    func toggleSwitch() {
        guard isEnabled, canFire("toggleSwitch", cooldown: 0.1) else { return }
        lightGenerator.impactOccurred(intensity: 0.5)
    }

    /// Button press — standard
    func buttonPress() {
        guard isEnabled, canFire("buttonPress", cooldown: 0.08) else { return }
        lightGenerator.impactOccurred(intensity: 0.6)
    }

    /// Destructive action confirmation
    func destructiveAction() {
        guard isEnabled, canFire("destructive", cooldown: 0.5) else { return }
        heavyGenerator.impactOccurred()
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.12) { [weak self] in
            self?.notificationGenerator.notificationOccurred(.warning)
        }
    }

    /// Timer tick
    func timerTick() {
        guard isEnabled, canFire("timerTick", cooldown: 0.8) else { return }
        lightGenerator.impactOccurred(intensity: 0.3)
    }

    /// Timer expired
    func timerExpired() {
        guard isEnabled, canFire("timerExpired", cooldown: 0.5) else { return }
        notificationGenerator.notificationOccurred(.warning)
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.15) { [weak self] in
            self?.heavyGenerator.impactOccurred(intensity: 0.8)
        }
    }

    /// Purchase success
    func purchaseSuccess() {
        guard isEnabled, canFire("purchaseSuccess", cooldown: 1.0) else { return }
        for i in 0..<5 {
            let delay = TimeInterval(i) * 0.1
            DispatchQueue.main.asyncAfter(deadline: .now() + delay) { [weak self] in
                self?.mediumGenerator.impactOccurred(intensity: CGFloat(0.5 + Double(i) * 0.1))
            }
        }
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.6) { [weak self] in
            self?.notificationGenerator.notificationOccurred(.success)
        }
    }

    /// Hint revealed
    func hintReveal() {
        guard isEnabled, canFire("hintReveal", cooldown: 0.1) else { return }
        softGenerator.impactOccurred(intensity: 0.5)
    }

    /// Tier upgrade celebration — multi-step haptic pattern
    func tierUpgrade() {
        guard isEnabled, canFire("tierUpgrade", cooldown: 2.0) else { return }
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) { [weak self] in
            self?.notificationGenerator.notificationOccurred(.success)
        }
        for offset in [0.5, 0.7, 0.9] {
            DispatchQueue.main.asyncAfter(deadline: .now() + offset) { [weak self] in
                self?.lightGenerator.impactOccurred(intensity: 0.6)
            }
        }
    }

    /// Enhanced double-tap pattern for higher tier haptic levels
    func enhancedDoubleTap() {
        guard isEnabled, canFire("enhancedDoubleTap", cooldown: 0.2) else { return }
        lightGenerator.impactOccurred(intensity: 0.6)
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.08) { [weak self] in
            self?.lightGenerator.impactOccurred(intensity: 0.8)
        }
    }

    /// Rich tier streak milestone burst
    func streakMilestone() {
        guard isEnabled, canFire("streakMilestone", cooldown: 1.0) else { return }
        notificationGenerator.notificationOccurred(.success)
        for i in 0..<3 {
            let delay = 0.15 + TimeInterval(i) * 0.12
            DispatchQueue.main.asyncAfter(deadline: .now() + delay) { [weak self] in
                self?.mediumGenerator.impactOccurred(intensity: CGFloat(0.6 + Double(i) * 0.15))
            }
        }
    }

    // MARK: - Anti-Spam

    private func canFire(_ id: String, cooldown: TimeInterval) -> Bool {
        let now = ProcessInfo.processInfo.systemUptime
        if let last = lastHapticTimes[id], now - last < cooldown {
            return false
        }
        lastHapticTimes[id] = now
        return true
    }

    // MARK: - Static Convenience (used by ViewModels)

    static func light() { shared.light() }
    static func medium() { shared.medium() }
    static func heavy() { shared.heavy() }
    static func success() { shared.success() }
    static func error() { shared.error() }
    static func warning() { shared.warning() }
    static func selectionChanged() { Self.shared.selectionChanged() }
}
