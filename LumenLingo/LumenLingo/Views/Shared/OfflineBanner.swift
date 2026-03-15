import SwiftUI

// MARK: - Offline Banner

/// Non-intrusive connectivity banner for Free tier users when offline.
/// Shows a gentle warning that they need to connect to access content.
/// Pro+ users with offline mode enabled never see this.
struct OfflineBanner: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization
    @Environment(TierManager.self) private var tierManager
    @Environment(NetworkMonitor.self) private var networkMonitor
    @State private var showMembership = false

    private var L: AppStrings { localization.strings }
    private var isDark: Bool { colorScheme == .dark }

    /// Whether the banner should be visible at all.
    var isVisible: Bool {
        !networkMonitor.isConnected && !tierManager.offlineModeAvailable
    }

    var body: some View {
        if isVisible {
            bannerContent
                .transition(.move(edge: .top).combined(with: .opacity))
                .sheet(isPresented: $showMembership) {
                    NavigationStack { MembershipView() }
                }
        }
    }

    private var bannerContent: some View {
        HStack(spacing: 10) {
            Image(systemName: "wifi.slash")
                .font(.system(size: 14, weight: .semibold))
                .foregroundStyle(.orange)

            VStack(alignment: .leading, spacing: 1) {
                Text(L.offline)
                    .font(.system(size: 13, weight: .semibold))
                    .foregroundStyle(isDark ? .white : .caribbeanInk)
                Text(L.connectivityRequired)
                    .font(.system(size: 11))
                    .foregroundStyle(isDark ? .white.opacity(0.6) : .caribbeanPlum)
                    .lineLimit(1)
                    .minimumScaleFactor(0.8)
            }

            Spacer()

            Button {
                HapticsService.shared.buttonPress()
                showMembership = true
            } label: {
                PremiumFeatureBadge(tier: .pro, style: .standard)
                    .scaleEffect(0.75)
            }
        }
        .padding(.horizontal, 14)
        .padding(.vertical, 10)
        .background(
            RoundedRectangle(cornerRadius: 14, style: .continuous)
                .fill(.ultraThinMaterial)
                .overlay(
                    RoundedRectangle(cornerRadius: 14, style: .continuous)
                        .strokeBorder(.orange.opacity(0.2), lineWidth: 0.5)
                )
        )
        .padding(.horizontal)
        .padding(.top, 4)
    }
}
