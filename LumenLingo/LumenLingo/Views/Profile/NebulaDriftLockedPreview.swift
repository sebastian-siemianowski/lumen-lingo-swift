import SwiftUI

// MARK: - Nebula Drift Locked Preview

/// Shown in Settings → Appearance → Nebula Drift for Free/Pro tier users.
/// Renders a live nebula animation behind a frosted glass overlay
/// with an "ELITE" badge, description, and upgrade CTA.
struct NebulaDriftLockedPreview: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization
    @State private var showMembership = false
    @State private var kenBurnsScale: CGFloat = 1.0

    private var L: AppStrings { localization.strings }
    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        ZStack {
            // Live nebula animation (demo: default preset, gentle)
            CosmicBackgroundView(
                preset: .lagoonNebula,
                intensity: 0.5,
                speed: 0.4
            )
            .frame(height: 320)
            .clipShape(RoundedRectangle(cornerRadius: 20, style: .continuous))
            .scaleEffect(kenBurnsScale)
            .blur(radius: 1)

            // Frosted glass overlay
            RoundedRectangle(cornerRadius: 20, style: .continuous)
                .fill(.ultraThinMaterial)
                .opacity(0.85)

            // Content overlay
            VStack(spacing: 18) {
                // Animated nebula icon
                ZStack {
                    Circle()
                        .fill(
                            RadialGradient(
                                colors: [.purple.opacity(0.6), .indigo.opacity(0.3), .clear],
                                center: .center,
                                startRadius: 0,
                                endRadius: 40
                            )
                        )
                        .frame(width: 80, height: 80)
                        .blur(radius: 12)

                    Image(systemName: "cloud.fog.fill")
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
                Text(L.nebulaDrift)
                    .font(.system(size: 22, weight: .bold))
                    .foregroundStyle(isDark ? .white : .primary)

                // Description
                Text("Immersive cosmic nebula backgrounds that drift across your screen. Six stunning presets inspired by the wonders of deep space.")
                    .font(.system(size: 14))
                    .foregroundStyle(.secondary)
                    .multilineTextAlignment(.center)
                    .padding(.horizontal, 24)

                // ELITE badge
                PremiumFeatureBadge(tier: .elite, style: .outlined)

                // Preset preview dots
                presetDots

                // CTA button
                PremiumCTAButton(
                    title: "Unlock with Elite",
                    tier: .elite,
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
        .onAppear {
            // Ken Burns slow zoom loop
            withAnimation(.easeInOut(duration: 8).repeatForever(autoreverses: true)) {
                kenBurnsScale = 1.08
            }
        }
    }

    // MARK: - Preset Preview Dots

    /// Shows tiny color dots representing the 6 available presets
    private var presetDots: some View {
        HStack(spacing: 8) {
            ForEach(NebulaPreset.allCases) { preset in
                Circle()
                    .fill(
                        LinearGradient(
                            colors: preset.previewColors.prefix(2).map { $0 },
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
                    .shadow(color: preset.previewColors.first?.opacity(0.4) ?? .clear, radius: 4)
            }
        }
    }
}
