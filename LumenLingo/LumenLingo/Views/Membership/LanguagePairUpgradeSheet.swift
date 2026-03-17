import SwiftUI

struct LanguagePairUpgradeSheet: View {
    let pair: LanguagePair
    @Environment(\.dismiss) private var dismiss
    @Environment(\.colorScheme) private var colorScheme
    @State private var navigateToMembership = false

    private var isDark: Bool { colorScheme == .dark }
    private var minTier: MembershipTier { pair.minimumTier }

    var body: some View {
        NavigationStack {
            VStack(spacing: 0) {
                flagArtworkHeader

                VStack(spacing: 20) {
                    // Lock icon with tier gradient
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

                    Text(pair.displayName)
                        .font(.system(size: 22, weight: .bold))
                        .foregroundStyle(isDark ? .white : .primary)

                    Text("Unlock this language pair to expand your learning journey")
                        .font(.system(size: 15))
                        .foregroundStyle(.secondary)
                        .multilineTextAlignment(.center)
                        .padding(.horizontal, 24)

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
    }

    // MARK: - Flag Artwork Header

    private var flagArtworkHeader: some View {
        ZStack {
            LinearGradient(
                colors: minTier.gradientColors,
                startPoint: .topLeading,
                endPoint: .bottomTrailing
            )

            LinearGradient(
                colors: [.white.opacity(0.15), .clear, .black.opacity(0.2)],
                startPoint: .top,
                endPoint: .bottom
            )

            // Dual flag display with arrow
            HStack(spacing: 16) {
                CountryFlagView(countryCode: pair.source.countryCode, size: 36)
                    .shadow(color: .black.opacity(0.3), radius: 6, y: 2)

                Image(systemName: "arrow.right")
                    .font(.system(size: 20, weight: .bold))
                    .foregroundStyle(.white.opacity(0.7))

                CountryFlagView(countryCode: pair.target.countryCode, size: 36)
                    .shadow(color: .black.opacity(0.3), radius: 6, y: 2)
            }
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
