import SwiftUI

// MARK: - Cosmic Background Tier Shift

/// Story 7.2: A subtle colour overlay that shifts the cosmic nebula background
/// toward the user's tier palette for 12 hours after an upgrade.
/// Applies as a transparent overlay that gradually fades from full intensity to zero.
struct CosmicTierShift: ViewModifier {
    @Environment(TierManager.self) private var tierManager
    @Environment(\.accessibilityReduceMotion) private var reduceMotion

    @State private var shiftOpacity: Double = 0

    func body(content: Content) -> some View {
        content
            .overlay {
                if tierManager.isWithinUpgradeAfterglowWindow && !reduceMotion {
                    tierColorOverlay
                        .opacity(shiftOpacity)
                        .allowsHitTesting(false)
                        .onAppear { calculateOpacity() }
                }
            }
    }

    private var tierColorOverlay: some View {
        LinearGradient(
            colors: tierShiftColors,
            startPoint: .topLeading,
            endPoint: .bottomTrailing
        )
        .blendMode(.softLight)
    }

    /// Calculate opacity based on how far into the 12-hour window we are.
    /// Strongest at the start, fading to zero at 12 hours.
    private func calculateOpacity() {
        guard let ts = tierManager.tierUpgradeTimestamp else { return }
        let elapsed = Date().timeIntervalSince(ts)
        let window: TimeInterval = 12 * 3600
        let remaining = max(0, 1.0 - elapsed / window)
        // Max overlay opacity is 0.08 — very subtle
        withAnimation(.easeIn(duration: 1.0)) {
            shiftOpacity = remaining * 0.08
        }
    }

    private var tierShiftColors: [Color] {
        switch tierManager.currentTier {
        case .pro:    return [.blue.opacity(0.3), .cyan.opacity(0.2)]
        case .elite:  return [.purple.opacity(0.3), .indigo.opacity(0.2)]
        case .royal, .trial: return [.yellow.opacity(0.2), .orange.opacity(0.15)]
        case .free:   return [.clear, .clear]
        }
    }
}

extension View {
    /// Story 7.2: Applies a subtle tier-coloured cosmic shift overlay for 12 hours after upgrade.
    func cosmicTierShift() -> some View {
        modifier(CosmicTierShift())
    }
}
