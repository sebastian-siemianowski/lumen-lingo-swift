import SwiftUI
import SwiftData

// MARK: - Connectivity Settings View

/// Offline mode status and connectivity info for the Sync tab.
/// Pro+ tiers: offline mode is always active — shown as a success status card.
/// Free tier: informational card with upgrade prompt — no toggle needed.
struct ConnectivitySettingsView: View {
    @Query private var profiles: [UserProfile]
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization
    @Environment(TierManager.self) private var tierManager
    @Environment(NetworkMonitor.self) private var networkMonitor
    @State private var showMembership = false
    @State private var showDowngradeToast = false
    @State private var showUpgradeToast = false

    private var L: AppStrings { localization.strings }
    private var profile: UserProfile? { profiles.first }
    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        ZStack(alignment: .bottom) {
            VStack(spacing: 20) {
                connectivityBadge

                offlineStatusCard
                    .animation(.spring(response: 0.5, dampingFraction: 0.85), value: tierManager.offlineModeAvailable)

                infoFooter
            }

            if showDowngradeToast {
                downgradeToast
                    .transition(.move(edge: .bottom).combined(with: .opacity))
                    .padding(.bottom, 16)
            }

            if showUpgradeToast {
                upgradeToast
                    .transition(.move(edge: .bottom).combined(with: .opacity))
                    .padding(.bottom, 16)
            }
        }
        .onReceive(NotificationCenter.default.publisher(for: .offlineModeAutoDisabled)) { _ in
            withAnimation(.spring(response: 0.4, dampingFraction: 0.8)) {
                showDowngradeToast = true
            }
            DispatchQueue.main.asyncAfter(deadline: .now() + 4.0) {
                withAnimation(.easeOut(duration: 0.3)) {
                    showDowngradeToast = false
                }
            }
        }
        .onReceive(NotificationCenter.default.publisher(for: .offlineModeAutoEnabled)) { _ in
            withAnimation(.spring(response: 0.4, dampingFraction: 0.8)) {
                showUpgradeToast = true
            }
            DispatchQueue.main.asyncAfter(deadline: .now() + 4.0) {
                withAnimation(.easeOut(duration: 0.3)) {
                    showUpgradeToast = false
                }
            }
        }
        .sheet(isPresented: $showMembership) {
            NavigationStack { MembershipView(isSheet: true) }
        }
    }

    // MARK: - Connectivity Badge

    private var connectivityBadge: some View {
        HStack(spacing: 8) {
            Image(systemName: networkMonitor.isConnected ? "wifi" : "wifi.slash")
                .font(.system(size: 14))
                .foregroundStyle(networkMonitor.isConnected ? .green : .red)
                .contentTransition(.symbolEffect(.replace))

            Text(networkMonitor.isConnected ? L.connected : L.offline)
                .font(.system(size: 13, weight: .medium))
                .foregroundStyle(networkMonitor.isConnected ? .green : .red)

            Spacer()

            if !networkMonitor.isConnected && !tierManager.offlineModeAvailable {
                Text(L.connectToUse)
                    .font(.system(size: 11))
                    .foregroundStyle(.red.opacity(0.8))
                    .lineLimit(1)
                    .minimumScaleFactor(0.8)
            }
        }
        .padding(12)
        .background(
            RoundedRectangle(cornerRadius: 12, style: .continuous)
                .fill((networkMonitor.isConnected ? Color.green : .red).opacity(isDark ? 0.06 : 0.04))
                .overlay(
                    RoundedRectangle(cornerRadius: 12, style: .continuous)
                        .strokeBorder((networkMonitor.isConnected ? Color.green : .red).opacity(0.15), lineWidth: 0.5)
                )
        )
    }

    // MARK: - Offline Status Card

    @ViewBuilder
    private var offlineStatusCard: some View {
        if tierManager.offlineModeAvailable {
            activeStatusCard
        } else {
            lockedStatusCard
        }
    }

    // MARK: - Active Status Card (Pro+)

    private var activeStatusCard: some View {
        HStack(spacing: 12) {
            ZStack {
                Circle()
                    .fill(.green.opacity(0.15))
                    .frame(width: 40, height: 40)

                Image(systemName: "checkmark.shield.fill")
                    .font(.system(size: 20))
                    .foregroundStyle(
                        LinearGradient(
                            colors: [.green, .mint],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
            }

            VStack(alignment: .leading, spacing: 3) {
                Text(L.offlineModeActive)
                    .font(.system(size: 17, weight: .semibold))
                    .foregroundStyle(isDark ? .white : .caribbeanInk)

                Text(L.offlineModeIncluded)
                    .font(.system(size: 13))
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanPlum)
            }

            Spacer()
        }
        .padding(16)
        .background(
            RoundedRectangle(cornerRadius: 16, style: .continuous)
                .fill(.green.opacity(isDark ? 0.06 : 0.04))
                .overlay(
                    RoundedRectangle(cornerRadius: 16, style: .continuous)
                        .strokeBorder(.green.opacity(0.2), lineWidth: 0.5)
                )
        )
    }

    // MARK: - Locked Status Card (Free)

    private var lockedStatusCard: some View {
        VStack(spacing: 14) {
            HStack(spacing: 12) {
                ZStack {
                    Circle()
                        .fill(.orange.opacity(0.12))
                        .frame(width: 40, height: 40)

                    Image(systemName: "wifi.exclamationmark")
                        .font(.system(size: 18))
                        .foregroundStyle(
                            LinearGradient(
                                colors: [.orange, .yellow],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            )
                        )
                }

                VStack(alignment: .leading, spacing: 3) {
                    Text(L.onlineOnly)
                        .font(.system(size: 17, weight: .semibold))
                        .foregroundStyle(isDark ? .white : .caribbeanInk)

                    Text(L.offlineModeLockedDescription)
                        .font(.system(size: 13))
                        .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanPlum)
                }

                Spacer()
            }

            Button {
                HapticsService.shared.buttonPress()
                AudioService.shared.playButtonTap()
                showMembership = true
            } label: {
                HStack(spacing: 6) {
                    Image(systemName: "sparkles")
                        .font(.system(size: 12, weight: .semibold))
                    Text(L.viewPlans)
                        .font(.system(size: 14, weight: .semibold))
                }
                .foregroundStyle(.white)
                .frame(maxWidth: .infinity)
                .padding(.vertical, 10)
                .background(
                    LinearGradient(
                        colors: [.teal, .cyan],
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .clipShape(RoundedRectangle(cornerRadius: 10, style: .continuous))
            }

            if !networkMonitor.isConnected {
                freeOfflineWarning
            }
        }
        .padding(16)
        .background(
            RoundedRectangle(cornerRadius: 16, style: .continuous)
                .fill(.orange.opacity(isDark ? 0.04 : 0.03))
                .overlay(
                    RoundedRectangle(cornerRadius: 16, style: .continuous)
                        .strokeBorder(.orange.opacity(0.15), lineWidth: 0.5)
                )
        )
    }

    // MARK: - Free Offline Warning

    private var freeOfflineWarning: some View {
        HStack(spacing: 8) {
            Image(systemName: "exclamationmark.triangle.fill")
                .font(.system(size: 14))
                .foregroundStyle(.orange)

            Text(L.connectivityRequired)
                .font(.system(size: 13))
                .foregroundStyle(isDark ? .white.opacity(0.7) : .caribbeanPlum)

            Spacer()
        }
        .padding(12)
        .background(
            RoundedRectangle(cornerRadius: 12, style: .continuous)
                .fill(.orange.opacity(isDark ? 0.08 : 0.05))
                .overlay(
                    RoundedRectangle(cornerRadius: 12, style: .continuous)
                        .strokeBorder(.orange.opacity(0.15), lineWidth: 0.5)
                )
        )
        .transition(.opacity.combined(with: .scale(scale: 0.95)))
    }

    // MARK: - Info Footer

    private var infoFooter: some View {
        HStack(spacing: 8) {
            Image(systemName: "info.circle")
                .font(.system(size: 13))
                .foregroundStyle(isDark ? .white.opacity(0.3) : .caribbeanMist)

            Text(L.offlineModeInfo)
                .font(.system(size: 12))
                .foregroundStyle(isDark ? .white.opacity(0.35) : .caribbeanMist.opacity(0.7))
                .lineLimit(3)
                .minimumScaleFactor(0.8)
        }
    }

    // MARK: - Downgrade Toast

    private var downgradeToast: some View {
        HStack(spacing: 10) {
            Image(systemName: "wifi.exclamationmark")
                .font(.system(size: 16, weight: .semibold))
                .foregroundStyle(.orange)

            VStack(alignment: .leading, spacing: 2) {
                Text(L.offlineModeDisabled)
                    .font(.system(size: 14, weight: .semibold))
                    .foregroundStyle(isDark ? .white : .caribbeanInk)
                Text(L.offlineModeDisabledDetail)
                    .font(.system(size: 12))
                    .foregroundStyle(isDark ? .white.opacity(0.6) : .caribbeanPlum)
            }

            Spacer()
        }
        .padding(14)
        .background(
            RoundedRectangle(cornerRadius: 16, style: .continuous)
                .fill(.ultraThinMaterial)
                .overlay(
                    RoundedRectangle(cornerRadius: 16, style: .continuous)
                        .strokeBorder(.orange.opacity(0.2), lineWidth: 0.5)
                )
        )
        .shadow(color: .black.opacity(0.15), radius: 12, y: 4)
        .padding(.horizontal)
    }

    // MARK: - Upgrade Toast

    private var upgradeToast: some View {
        HStack(spacing: 10) {
            Image(systemName: "checkmark.circle.fill")
                .font(.system(size: 16, weight: .semibold))
                .foregroundStyle(.green)

            VStack(alignment: .leading, spacing: 2) {
                Text(L.offlineModeActivated)
                    .font(.system(size: 14, weight: .semibold))
                    .foregroundStyle(isDark ? .white : .caribbeanInk)
                Text(L.offlineModeActivatedDetail)
                    .font(.system(size: 12))
                    .foregroundStyle(isDark ? .white.opacity(0.6) : .caribbeanPlum)
            }

            Spacer()
        }
        .padding(14)
        .background(
            RoundedRectangle(cornerRadius: 16, style: .continuous)
                .fill(.ultraThinMaterial)
                .overlay(
                    RoundedRectangle(cornerRadius: 16, style: .continuous)
                        .strokeBorder(.green.opacity(0.2), lineWidth: 0.5)
                )
        )
        .shadow(color: .black.opacity(0.15), radius: 12, y: 4)
        .padding(.horizontal)
    }
}
