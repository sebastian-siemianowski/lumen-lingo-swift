import SwiftUI

// MARK: - Locked Journey Section Overlay

/// Blurs a journey section and overlays a tier badge with upgrade prompt.
/// Tapping shows an upgrade sheet.
struct LockedJourneySectionOverlay<Content: View>: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization

    let requiredTier: MembershipTier
    let featureTitle: String
    let featureDescription: String
    let content: Content

    @State private var showUpgradePrompt = false

    private var L: AppStrings { localization.strings }
    private var isDark: Bool { colorScheme == .dark }

    init(requiredTier: MembershipTier, featureTitle: String, featureDescription: String, @ViewBuilder content: () -> Content) {
        self.requiredTier = requiredTier
        self.featureTitle = featureTitle
        self.featureDescription = featureDescription
        self.content = content()
    }

    var body: some View {
        content
            .blur(radius: 6)
            .allowsHitTesting(false)
            .overlay {
                ZStack {
                    // Frosted backdrop
                    RoundedRectangle(cornerRadius: 22)
                        .fill(
                            (isDark ? Color.black : Color.white).opacity(0.3)
                        )

                    VStack(spacing: 8) {
                        // Feature name
                        Text(featureTitle)
                            .font(.system(size: 16, weight: .bold))
                            .foregroundStyle(isDark ? .white.opacity(0.9) : .caribbeanPlum)

                        // Compelling description
                        Text(featureDescription)
                            .font(.system(size: 12, weight: .medium))
                            .foregroundStyle(isDark ? .white.opacity(0.6) : .caribbeanPlum.opacity(0.8))
                            .multilineTextAlignment(.center)
                            .lineLimit(3)
                            .padding(.horizontal, 20)

                        // Unlock button-style badge
                        HStack(spacing: 5) {
                            Image(systemName: "lock.open.fill")
                                .font(.system(size: 10, weight: .semibold))
                            Text(L.unlockFeature)
                                .font(.system(size: 12, weight: .bold))
                        }
                        .foregroundStyle(.white)
                        .padding(.horizontal, 16)
                        .padding(.vertical, 8)
                        .background(
                            Capsule()
                                .fill(
                                    LinearGradient(
                                        colors: requiredTier.gradientColors,
                                        startPoint: .leading,
                                        endPoint: .trailing
                                    )
                                )
                        )
                        .padding(.top, 2)

                        // Tier name hint
                        HStack(spacing: 3) {
                            Image(systemName: requiredTier.iconName)
                                .font(.system(size: 9))
                            Text(requiredTier.displayName)
                                .font(.system(size: 10, weight: .semibold))
                        }
                        .foregroundStyle(isDark ? .white.opacity(0.35) : .caribbeanMist)
                    }
                    .padding(.vertical, 4)
                }
            }
            .contentShape(Rectangle())
            .onTapGesture {
                HapticsService.shared.tabSwitch()
                showUpgradePrompt = true
            }
            .sheet(isPresented: $showUpgradePrompt) {
                MembershipView()
            }
    }
}
