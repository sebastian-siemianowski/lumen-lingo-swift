import UIKit
import SwiftUI

// MARK: - Haptics Service

/// iOS-native haptic feedback using UIFeedbackGenerator.
/// Provides tactile feedback for card flips, selections, correct/incorrect answers.
@Observable
final class HapticsService {
    static let shared = HapticsService()

    init() {}

    /// Light tap — card flip, hover
    func light() {
        let generator = UIImpactFeedbackGenerator(style: .light)
        generator.impactOccurred()
    }

    /// Alias used by some views
    func lightImpact() { light() }

    /// Medium tap — selection, button press
    func medium() {
        let generator = UIImpactFeedbackGenerator(style: .medium)
        generator.impactOccurred()
    }

    /// Heavy tap — important action
    func heavy() {
        let generator = UIImpactFeedbackGenerator(style: .heavy)
        generator.impactOccurred()
    }

    /// Success notification — correct answer
    func success() {
        let generator = UINotificationFeedbackGenerator()
        generator.notificationOccurred(.success)
    }

    /// Error notification — wrong answer
    func error() {
        let generator = UINotificationFeedbackGenerator()
        generator.notificationOccurred(.error)
    }

    /// Warning notification — hint, time running out
    func warning() {
        let generator = UINotificationFeedbackGenerator()
        generator.notificationOccurred(.warning)
    }

    /// Selection changed — scrolling through options
    func selectionChanged() {
        let generator = UISelectionFeedbackGenerator()
        generator.selectionChanged()
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
