import SwiftUI

// MARK: - Breathing Orbs Locked Preview

/// Shown in Settings → Appearance → Breathing Orbs for free-tier users.
/// Renders a live single-scheme orb animation behind a frosted glass overlay
/// with a "PRO" badge, description, and upgrade CTA.
struct BreathingOrbsLockedPreview: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization
    @State private var showMembership = false

    private var L: AppStrings { localization.strings }
    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        ZStack {
            // Live breathing orb animation (demo: default scheme, gentle)
            BreathingOrbsView(
                isDarkMode: isDark,
                scheme: .barcelonaNights,
                intensity: 0.6,
                speed: 0.7,
                raveMode: false
            )
            .frame(height: 320)
            .clipShape(RoundedRectangle(cornerRadius: 20, style: .continuous))
            .blur(radius: 1)

            // Frosted glass overlay
            RoundedRectangle(cornerRadius: 20, style: .continuous)
                .fill(.ultraThinMaterial)
                .opacity(0.85)

            // Content overlay
            VStack(spacing: 18) {
                // Animated orb icon
                ZStack {
                    Circle()
                        .fill(
                            RadialGradient(
                                colors: [.purple.opacity(0.6), .blue.opacity(0.3), .clear],
                                center: .center,
                                startRadius: 0,
                                endRadius: 40
                            )
                        )
                        .frame(width: 80, height: 80)
                        .blur(radius: 12)

                    Image(systemName: "scope")
                        .font(.system(size: 32, weight: .medium))
                        .foregroundStyle(
                            LinearGradient(
                                colors: [.purple, .blue],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            )
                        )
                        .shadow(color: .purple.opacity(0.5), radius: 8)
                }
                // Title
                Text(L.breathingOrbs)
                    .font(.system(size: 22, weight: .bold))
                    .foregroundStyle(isDark ? .white : .primary)

                // Description
                Text("Mesmerising ambient orbs that breathe with gentle colour cycles. Six stunning colour schemes to match your mood.")
                    .font(.system(size: 14))
                    .foregroundStyle(.secondary)
                    .multilineTextAlignment(.center)
                    .padding(.horizontal, 24)

                // PRO badge
                PremiumFeatureBadge(tier: .pro, style: .outlined)

                // Scheme preview dots
                schemeDots

                // CTA button
                PremiumCTAButton(
                    title: "Unlock with Pro",
                    tier: .pro,
                    action: { showMembership = true },
                    icon: "lock.open.fill",
                    shape: .rounded(14),
                    size: .compact
                )
                .padding(.horizontal, 24)
            }
            .padding(.vertical, 28)
        }
        .frame(height: 320)
        .clipShape(RoundedRectangle(cornerRadius: 20, style: .continuous))
        .overlay(
            RoundedRectangle(cornerRadius: 20, style: .continuous)
                .strokeBorder(.white.opacity(isDark ? 0.08 : 0.15), lineWidth: 0.5)
        )
        .sheet(isPresented: $showMembership) {
            NavigationStack { MembershipView(isSheet: true) }
        }
    }

    // MARK: - Scheme Preview Dots

    /// Shows tiny color dots representing the 6 available schemes
    private var schemeDots: some View {
        HStack(spacing: 8) {
            ForEach(BreathingOrbScheme.allCases) { scheme in
                Circle()
                    .fill(
                        LinearGradient(
                            colors: scheme.previewColors.prefix(2).map { $0 },
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
                    .frame(width: 18, height: 18)
                    .overlay(
                        Circle()
                            .strokeBorder(.white.opacity(0.3), lineWidth: 0.5)
                    )
                    .overlay(
                        Image(systemName: "lock.fill")
                            .font(.system(size: 7, weight: .bold))
                            .foregroundStyle(.white.opacity(0.8))
                    )
                    .shadow(color: scheme.previewColors.first?.opacity(0.4) ?? .clear, radius: 4)
            }
        }
    }
}
