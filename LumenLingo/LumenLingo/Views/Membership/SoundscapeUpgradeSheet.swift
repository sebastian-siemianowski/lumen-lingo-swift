import SwiftUI

// MARK: - Soundscape Upgrade Sheet

/// Half-sheet shown when a user taps a locked soundscape.
/// Shows the soundscape artwork, name, minimum tier, and a CTA to view plans.
struct SoundscapeUpgradeSheet: View {
    let soundscape: Soundscape
    @Environment(\.dismiss) private var dismiss
    @Environment(\.colorScheme) private var colorScheme
    @State private var appeared = false
    @State private var navigateToMembership = false

    private var isDark: Bool { colorScheme == .dark }
    private var minTier: MembershipTier { soundscape.minimumTier }

    var body: some View {
        NavigationStack {
            VStack(spacing: 0) {
                // Soundscape artwork header
                artworkHeader
                    .scaleEffect(appeared ? 1.0 : 0.92)
                    .opacity(appeared ? 1.0 : 0)

                // Info & CTA
                VStack(spacing: 20) {
                    // Lock icon
                    ZStack {
                        Circle()
                            .fill(
                                LinearGradient(
                                    colors: minTier.gradientColors,
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing
                                )
                            )
                            .frame(width: 48, height: 48)
                            .shadow(color: minTier.accentColor.opacity(0.4), radius: 12)

                        Image(systemName: "lock.fill")
                            .font(.system(size: 20, weight: .semibold))
                            .foregroundStyle(.white)
                    }
                    .offset(y: -24)
                    .padding(.bottom, -16)

                    // Soundscape name
                    Text(soundscape.displayName)
                        .font(.system(size: 22, weight: .bold))
                        .foregroundStyle(isDark ? .white : .primary)

                    Text(soundscape.subtitle)
                        .font(.system(size: 15))
                        .foregroundStyle(.secondary)
                        .multilineTextAlignment(.center)

                    // Tier requirement badge
                    tierRequirementBadge

                    // CTA
                    PremiumCTAButton(
                        title: "View Plans",
                        tier: minTier,
                        action: { navigateToMembership = true },
                        icon: minTier.iconName,
                        shape: .rounded(14)
                    )
                    .padding(.horizontal, 24)
                    .padding(.top, 4)

                    // Dismiss
                    Button {
                        dismiss()
                    } label: {
                        Text("Maybe Later")
                            .font(.system(size: 15, weight: .medium))
                            .foregroundStyle(.secondary)
                    }
                    .padding(.bottom, 8)
                }
                .padding(.top, 8)
                .padding(.bottom, 24)
            }
            .background(isDark ? Color(hex: "#0f0f1e") : Color(hex: "#faf9fe"))
            .navigationDestination(isPresented: $navigateToMembership) {
                MembershipView()
            }
        }
        .presentationDetents([.medium])
        .presentationDragIndicator(.visible)
        .presentationCornerRadius(24)
        .onAppear {
            withAnimation(.spring(response: 0.5, dampingFraction: 0.75).delay(0.1)) {
                appeared = true
            }
        }
    }

    // MARK: - Artwork

    private var artworkHeader: some View {
        ZStack {
            LinearGradient(
                colors: soundscape.previewColors,
                startPoint: .topLeading,
                endPoint: .bottomTrailing
            )

            // Subtle grain overlay
            LinearGradient(
                colors: [.white.opacity(0.15), .clear, .black.opacity(0.2)],
                startPoint: .top,
                endPoint: .bottom
            )

            Image(systemName: soundscape.icon)
                .font(.system(size: 44, weight: .medium))
                .foregroundStyle(.white.opacity(0.5))
                .shadow(color: .black.opacity(0.3), radius: 8, y: 4)
        }
        .frame(height: 140)
        .clipped()
    }

    // MARK: - Tier Badge

    private var tierRequirementBadge: some View {
        HStack(spacing: 6) {
            Image(systemName: minTier.iconName)
                .font(.system(size: 12, weight: .semibold))
            Text("Available on \(minTier.displayName)")
                .font(.system(size: 14, weight: .semibold))
        }
        .foregroundStyle(
            LinearGradient(
                colors: minTier.gradientColors,
                startPoint: .leading,
                endPoint: .trailing
            )
        )
        .padding(.horizontal, 14)
        .padding(.vertical, 8)
        .background(
            Capsule()
                .fill(minTier.accentColor.opacity(0.1))
                .overlay(
                    Capsule()
                        .strokeBorder(
                            LinearGradient(
                                colors: minTier.gradientColors.map { $0.opacity(0.4) },
                                startPoint: .leading,
                                endPoint: .trailing
                            ),
                            lineWidth: 1
                        )
                )
        )
    }
}
