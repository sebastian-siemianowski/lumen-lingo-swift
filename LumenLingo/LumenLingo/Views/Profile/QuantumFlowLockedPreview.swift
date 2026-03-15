import SwiftUI

// MARK: - Quantum Flow Locked Preview

/// Shown in Settings → Appearance → Quantum Flow for Free/Pro tier users.
/// Renders a live single-scene quantum flow animation behind a frosted glass overlay
/// with an "ELITE" badge, description, and upgrade CTA.
struct QuantumFlowLockedPreview: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization
    @State private var appeared = false
    @State private var showMembership = false
    @State private var kenBurnsScale: CGFloat = 1.0

    private var L: AppStrings { localization.strings }
    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        ZStack {
            // Live quantum flow animation (demo: default scene, gentle)
            MetalQuantumFlowView(
                scene: .dubaiCelestialMirage,
                intensity: 0.5,
                speed: 0.6,
                isDarkMode: isDark,
                raveMode: false
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
                // Animated quantum icon
                ZStack {
                    Circle()
                        .fill(
                            RadialGradient(
                                colors: [.cyan.opacity(0.6), .blue.opacity(0.3), .clear],
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

                    Image(systemName: "waveform.path.ecg")
                        .font(.system(size: 32, weight: .medium))
                        .foregroundStyle(
                            LinearGradient(
                                colors: [.cyan, .blue],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            )
                        )
                        .shadow(color: .cyan.opacity(0.5), radius: 8)
                }
                .scaleEffect(appeared ? 1.0 : 0.7)
                .opacity(appeared ? 1.0 : 0)

                // Title
                Text(L.quantumFlow)
                    .font(.system(size: 22, weight: .bold))
                    .foregroundStyle(isDark ? .white : .primary)
                    .opacity(appeared ? 1.0 : 0)

                // Description
                Text("Dynamic aurora curtains that dance across your screen. Six stunning city-inspired scenes to set the mood.")
                    .font(.system(size: 14))
                    .foregroundStyle(.secondary)
                    .multilineTextAlignment(.center)
                    .padding(.horizontal, 24)
                    .opacity(appeared ? 1.0 : 0)

                // ELITE badge
                PremiumFeatureBadge(tier: .elite, style: .outlined)
                    .scaleEffect(appeared ? 1.0 : 0.85)
                    .opacity(appeared ? 1.0 : 0)

                // Scene preview dots
                sceneDots
                    .opacity(appeared ? 1.0 : 0)

                // CTA button
                Button {
                    HapticsService.shared.buttonPress()
                    showMembership = true
                } label: {
                    HStack(spacing: 8) {
                        Image(systemName: "lock.open.fill")
                            .font(.system(size: 14, weight: .semibold))
                        Text("Unlock with Elite")
                            .font(.system(size: 16, weight: .bold))
                    }
                    .foregroundStyle(.white)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 14)
                    .background(
                        LinearGradient(
                            colors: MembershipTier.elite.gradientColors,
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
                    .clipShape(RoundedRectangle(cornerRadius: 14, style: .continuous))
                    .shadow(color: MembershipTier.elite.accentColor.opacity(0.3), radius: 8, y: 4)
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
            // Ken Burns slow zoom loop
            withAnimation(.easeInOut(duration: 8).repeatForever(autoreverses: true)) {
                kenBurnsScale = 1.08
            }
        }
    }

    // MARK: - Scene Preview Dots

    /// Shows tiny color dots representing the 6 available scenes
    private var sceneDots: some View {
        HStack(spacing: 8) {
            ForEach(QuantumFlowScene.allCases) { scene in
                Circle()
                    .fill(
                        LinearGradient(
                            colors: scene.previewColors.prefix(2).map { $0 },
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
                    .shadow(color: scene.previewColors.first?.opacity(0.4) ?? .clear, radius: 4)
            }
        }
    }
}
