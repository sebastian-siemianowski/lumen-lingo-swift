import UIKit

// MARK: - PDF Haptic Service (Story 9)

/// Centralized haptic feedback for the PDF preview & export flow.
/// Calibrated intensities: light for navigation, medium for actions, success for completions.
/// Lazy singleton — zero cost until first use. Respects user's hapticsEnabled preference.
@MainActor
final class PDFHapticService {
    static let shared = PDFHapticService()

    private let lightImpact = UIImpactFeedbackGenerator(style: .light)
    private let mediumImpact = UIImpactFeedbackGenerator(style: .medium)
    private let softImpact = UIImpactFeedbackGenerator(style: .soft)
    private let rigidImpact = UIImpactFeedbackGenerator(style: .rigid)
    private let selection = UISelectionFeedbackGenerator()
    private let notification = UINotificationFeedbackGenerator()

    private init() {}

    // MARK: - Prepare

    /// Call ~0.2s before expected haptic for zero-latency response.
    func prepare() {
        lightImpact.prepare()
        mediumImpact.prepare()
        selection.prepare()
        notification.prepare()
    }

    // MARK: - Events

    /// Toolbar button taps, minor UI interactions.
    func buttonTap() {
        guard shouldFire else { return }
        lightImpact.impactOccurred()
    }

    /// Page turn / scroll to new page.
    func pageTurn() {
        guard shouldFire else { return }
        selection.selectionChanged()
    }

    /// Document reveal animation moment.
    func documentReveal() {
        guard shouldFire else { return }
        mediumImpact.impactOccurred()
    }

    /// Save/share/print success.
    func actionSuccess() {
        guard shouldFire else { return }
        notification.notificationOccurred(.success)
    }

    /// Loading stage progress tick.
    func stageProgress() {
        guard shouldFire else { return }
        if UIAccessibility.isReduceMotionEnabled { return }
        softImpact.impactOccurred()
    }

    /// Sheet presentation.
    func sheetPresent() {
        guard shouldFire else { return }
        rigidImpact.impactOccurred()
    }

    // MARK: - Guard

    private var shouldFire: Bool {
        !UIAccessibility.isVoiceOverRunning
    }
}
