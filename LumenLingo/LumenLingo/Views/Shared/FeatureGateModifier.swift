import SwiftUI

// MARK: - Feature Gate Modifier

/// A view modifier that overlays a frosted glass lock when the user's tier
/// doesn't grant access to the specified feature.
/// Tapping the locked overlay presents the paywall in `.featureGate` context.
///
/// Usage: `.featureGate(.soundscapes)`
struct FeatureGateModifier: ViewModifier {
    let feature: PremiumFeature
    @Environment(TierManager.self) private var tierManager
    @State private var showPaywall = false

    private var isLocked: Bool {
        !tierManager.hasAccess(to: feature)
    }

    /// The tier icon needed to unlock — tells the user at a glance which plan they need.
    private var lockIconName: String {
        feature.minimumTier.iconName
    }

    /// Lock color matches the required tier's accent.
    private var lockColor: Color {
        feature.minimumTier.accentColor
    }

    func body(content: Content) -> some View {
        content
            .overlay {
                if isLocked {
                    lockedOverlay
                        .transition(.opacity)
                }
            }
            .animation(.easeInOut(duration: 0.3), value: isLocked)
            .sheet(isPresented: $showPaywall) {
                PaywallView(context: .featureGate(feature))
            }
    }

    // MARK: - Locked Overlay

    private var lockedOverlay: some View {
        ZStack {
            // Frosted glass — feature partially visible beneath
            Rectangle()
                .fill(.ultraThinMaterial)
                .overlay {
                    Rectangle()
                        .fill(lockColor.opacity(0.05))
                }

            // Lock icon with gentle pulse
            VStack(spacing: 8) {
                Image(systemName: lockIconName)
                    .font(.system(size: 28, weight: .semibold))
                    .foregroundStyle(
                        LinearGradient(
                            colors: feature.minimumTier.gradientColors,
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
                    .symbolEffect(.pulse.byLayer, options: .repeating.speed(0.3))

                Text(feature.minimumTier.displayName)
                    .font(.caption2)
                    .fontWeight(.semibold)
                    .foregroundStyle(lockColor.opacity(0.8))
            }
        }
        .clipShape(RoundedRectangle(cornerRadius: 12))
        .contentShape(Rectangle())
        .onTapGesture {
            showPaywall = true
        }
        .accessibilityLabel("\(feature.displayName) is locked. Requires \(feature.minimumTier.displayName) plan. Tap to view plans.")
        .accessibilityAddTraits(.isButton)
    }
}

// MARK: - View Extension

extension View {
    /// Applies a frosted glass lock overlay when the user's tier doesn't grant access.
    /// Tapping the overlay presents the paywall for the required tier.
    func featureGate(_ feature: PremiumFeature) -> some View {
        modifier(FeatureGateModifier(feature: feature))
    }
}
