import SwiftUI

// MARK: - Breathing Orbs Locked Preview

/// Shown in Settings → Appearance → Breathing Orbs for free-tier users.
/// Renders a live single-scheme orb animation behind a frosted glass overlay
/// with a "PRO" badge, description, and upgrade CTA.
struct BreathingOrbsLockedPreview: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization
    @State private var appeared = false
    @State private var showMembership = false
    @State private var shimmerPhase: CGFloat = -1

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
                        .scaleEffect(appeared ? 1.1 : 0.9)
                        .animation(
                            .easeInOut(duration: 3).repeatForever(autoreverses: true),
                            value: appeared
                        )

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
                .scaleEffect(appeared ? 1.0 : 0.7)
                .opacity(appeared ? 1.0 : 0)

                // Title
                Text(L.breathingOrbs)
                    .font(.system(size: 22, weight: .bold))
                    .foregroundStyle(isDark ? .white : .primary)
                    .opacity(appeared ? 1.0 : 0)

                // Description
                Text("Mesmerising ambient orbs that breathe with gentle colour cycles. Six stunning colour schemes to match your mood.")
                    .font(.system(size: 14))
                    .foregroundStyle(.secondary)
                    .multilineTextAlignment(.center)
                    .padding(.horizontal, 24)
                    .opacity(appeared ? 1.0 : 0)

                // PRO badge
                PremiumFeatureBadge(tier: .pro, style: .outlined)
                    .scaleEffect(appeared ? 1.0 : 0.85)
                    .opacity(appeared ? 1.0 : 0)

                // Scheme preview dots
                schemeDots
                    .opacity(appeared ? 1.0 : 0)

                // CTA button
                Button {
                    HapticsService.shared.buttonPress()
                    showMembership = true
                } label: {
                    HStack(spacing: 8) {
                        Image(systemName: "lock.open.fill")
                            .font(.system(size: 14, weight: .semibold))
                        Text("Unlock with Pro")
                            .font(.system(size: 16, weight: .bold))
                    }
                    .foregroundStyle(.white)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 14)
                    .background(
                        LinearGradient(
                            colors: MembershipTier.pro.gradientColors,
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
                    .clipShape(RoundedRectangle(cornerRadius: 14, style: .continuous))
                    .shadow(color: MembershipTier.pro.accentColor.opacity(0.3), radius: 8, y: 4)
                }
                .padding(.horizontal, 24)
                .scaleEffect(appeared ? 1.0 : 0.9)
                .opacity(appeared ? 1.0 : 0)
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
        .onAppear {
            withAnimation(.spring(response: 0.7, dampingFraction: 0.75).delay(0.15)) {
                appeared = true
            }
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
