import SwiftUI
import SwiftData

// MARK: - Connectivity Settings View

/// Offline mode toggle and connectivity status for the Sync tab.
/// Free tier: toggle visible but disabled with PRO badge + upgrade prompt.
/// Pro+: toggle enabled to mark the app for offline use.
struct ConnectivitySettingsView: View {
    @Query private var profiles: [UserProfile]
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization
    @Environment(TierManager.self) private var tierManager
    @Environment(NetworkMonitor.self) private var networkMonitor
    @State private var showMembership = false
    @State private var showDowngradeToast = false

    private var L: AppStrings { localization.strings }
    private var profile: UserProfile? { profiles.first }
    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        ZStack(alignment: .bottom) {
            VStack(spacing: 20) {
                // Connectivity status
                connectivityBadge

                // Offline mode toggle
                offlineModeSection

                // Info footer
                infoFooter
            }

            if showDowngradeToast {
                downgradeToast
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
        .sheet(isPresented: $showMembership) {
            NavigationStack { MembershipView() }
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

    // MARK: - Offline Mode Section

    private var offlineModeSection: some View {
        VStack(spacing: 16) {
            HStack(spacing: 12) {
                Image(systemName: "arrow.down.circle.fill")
                    .font(.system(size: 20))
                    .foregroundStyle(
                        LinearGradient(
                            colors: [.teal, .cyan],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
                    .frame(width: 24, height: 24)

                VStack(alignment: .leading, spacing: 2) {
                    HStack(spacing: 6) {
                        Text(L.offlineMode)
                            .font(.system(size: 17, weight: .semibold))
                            .foregroundStyle(isDark ? .white : .caribbeanInk)

                        if !tierManager.offlineModeAvailable {
                            PremiumFeatureBadge(tier: .pro, style: .outlined)
                                .scaleEffect(0.75)
                        }
                    }

                    Text(tierManager.offlineModeAvailable
                         ? L.offlineModeDescription
                         : L.offlineModeLockedDescription)
                        .font(.system(size: 13))
                        .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanPlum)
                        .lineLimit(2)
                        .minimumScaleFactor(0.8)
                }

                Spacer()

                if tierManager.offlineModeAvailable {
                    PremiumToggle(
                        isOn: profile?.offlineModeEnabled ?? false,
                        enabledColor: .teal,
                        enabledIcon: "checkmark",
                        disabledIcon: "xmark"
                    ) {
                        guard let profile else { return }
                        HapticsService.shared.toggleSwitch()
                        if profile.offlineModeEnabled {
                            AudioService.shared.playToggleOff()
                        } else {
                            AudioService.shared.playToggleOn()
                        }
                        withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                            profile.offlineModeEnabled.toggle()
                        }
                    }
                } else {
                    // Locked toggle — tapping opens upgrade prompt
                    Button {
                        HapticsService.shared.buttonPress()
                        AudioService.shared.playButtonTap()
                        showMembership = true
                    } label: {
                        PremiumToggle(
                            isOn: false,
                            enabledColor: .teal,
                            disabledIcon: "lock.fill"
                        ) { }
                    }
                    .disabled(true)
                    .opacity(0.5)
                    .overlay {
                        // Invisible hit area to intercept taps
                        Color.clear
                            .contentShape(Rectangle())
                            .onTapGesture {
                                HapticsService.shared.buttonPress()
                                AudioService.shared.playButtonTap()
                                showMembership = true
                            }
                    }
                }
            }

            // Free tier hint
            if !tierManager.offlineModeAvailable && !networkMonitor.isConnected {
                freeOfflineWarning
            }
        }
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
}
