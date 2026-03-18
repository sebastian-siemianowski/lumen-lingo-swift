import SwiftUI

// MARK: - Locked Feature Indicator

/// A small lock icon modifier for settings sub-tab labels.
/// Shows a tier-colored lock (8pt, 30% opacity) when the feature is locked.
/// Disappears with a pop animation when unlocked via tier change.
struct LockedFeatureIndicator: ViewModifier {
    let feature: PremiumFeature
    @Environment(TierManager.self) private var tierManager

    private var isLocked: Bool {
        !tierManager.hasAccess(to: feature)
    }

    /// Lock color based on the minimum tier required.
    private var lockColor: Color {
        switch feature.minimumTier {
        case .pro:   return .purple
        case .elite: return .cyan
        case .royal: return .yellow
        default:     return .gray
        }
    }

    func body(content: Content) -> some View {
        HStack(spacing: 3) {
            content
            if isLocked {
                Image(systemName: "lock.fill")
                    .font(.system(size: 8, weight: .bold))
                    .foregroundStyle(lockColor.opacity(0.45))
                    .transition(.scale.combined(with: .opacity))
            }
        }
        .animation(.spring(response: 0.3, dampingFraction: 0.6), value: isLocked)
        .accessibilityElement(children: .combine)
        .accessibilityLabel(isLocked
            ? "\(feature.displayName), locked, requires \(feature.minimumTier.displayName) plan"
            : feature.displayName
        )
    }
}

extension View {
    /// Appends a small lock icon when the given feature is locked for the current tier.
    func lockedFeatureIndicator(for feature: PremiumFeature) -> some View {
        modifier(LockedFeatureIndicator(feature: feature))
    }
}
