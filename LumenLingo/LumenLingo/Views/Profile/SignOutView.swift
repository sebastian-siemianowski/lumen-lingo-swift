import SwiftUI

// MARK: - Sign Out View

/// React-parity Sign Out tab.
/// Shows network status, pending sync warning, and sign-out flow with confirmation.
struct SignOutView: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization
    @Environment(NetworkMonitor.self) private var networkMonitor

    private var L: AppStrings { localization.strings }

    @State private var isLoggingOut = false
    @State private var logoutStep = ""
    @State private var showConfirmation = false

    private var isDark: Bool { colorScheme == .dark }
    private var isOnline: Bool { networkMonitor.isConnected }

    var body: some View {
        VStack(spacing: 20) {
            // Network status
            networkStatusBadge

            // Account info
            accountInfoSection

            // Sign out button
            signOutButton

            // Confirmation dialog
            if showConfirmation {
                confirmationOverlay
            }

            // Logout progress
            if isLoggingOut {
                logoutProgressView
            }
        }
    }

    // MARK: - Network Status

    private var networkStatusBadge: some View {
        HStack(spacing: 8) {
            Image(systemName: isOnline ? "wifi" : "wifi.slash")
                .font(.system(size: 14))
                .foregroundStyle(isOnline ? .green : .red)

            Text(isOnline ? L.connected : L.offline)
                .font(.system(size: 13, weight: .medium))
                .foregroundStyle(isOnline ? .green : .red)

            Spacer()

            if !isOnline {
                Text(L.signOutRequiresInternet)
                    .font(.system(size: 11))
                    .foregroundStyle(.red.opacity(0.8))
            }
        }
        .padding(12)
        .background(
            RoundedRectangle(cornerRadius: 12, style: .continuous)
                .fill((isOnline ? Color.green : .red).opacity(isDark ? 0.06 : 0.04))
                .overlay(
                    RoundedRectangle(cornerRadius: 12, style: .continuous)
                        .strokeBorder((isOnline ? Color.green : .red).opacity(0.15), lineWidth: 0.5)
                )
        )
    }

    // MARK: - Account Info

    private var accountInfoSection: some View {
        VStack(spacing: 12) {
            accountRow(icon: "envelope.fill", color: .cyan, title: L.email, value: AppUser.mock.email)

            Divider()
                .overlay(isDark ? Color.white.opacity(0.06) : Color.black.opacity(0.06))

            accountRow(icon: "person.fill", color: Color(hex: "#8b5cf6"), title: L.name, value: AppUser.mock.name)

            Divider()
                .overlay(isDark ? Color.white.opacity(0.06) : Color.black.opacity(0.06))

            accountRow(icon: "crown.fill", color: .yellow, title: L.membership, value: L.freeTier)
        }
    }

    private func accountRow(icon: String, color: Color, title: String, value: String) -> some View {
        HStack(spacing: 12) {
            Image(systemName: icon)
                .font(.system(size: 14, weight: .semibold))
                .foregroundStyle(color)
                .frame(width: 32, height: 32)
                .background(
                    RoundedRectangle(cornerRadius: 10)
                        .fill(color.opacity(isDark ? 0.12 : 0.10))
                )

            VStack(alignment: .leading, spacing: 2) {
                Text(title)
                    .font(.caption)
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanMist)
                Text(value)
                    .font(.subheadline)
                    .foregroundStyle(isDark ? .white : .caribbeanInk)
            }

            Spacer()
        }
    }

    // MARK: - Sign Out Button

    private var signOutButton: some View {
        Button {
            AudioService.shared.playSignOutWarning()
            HapticsService.shared.destructiveAction()
            withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                showConfirmation = true
            }
        } label: {
            HStack(spacing: 8) {
                Image(systemName: "rectangle.portrait.and.arrow.right")
                    .font(.body.bold())
                Text(L.signOut)
                    .font(.body.bold())
            }
            .foregroundStyle(.red.opacity(0.85))
            .frame(maxWidth: .infinity)
            .padding(.vertical, 14)
            .background(
                RoundedRectangle(cornerRadius: 16, style: .continuous)
                    .fill(.red.opacity(isDark ? 0.08 : 0.06))
                    .overlay(
                        RoundedRectangle(cornerRadius: 16, style: .continuous)
                            .strokeBorder(.red.opacity(0.15), lineWidth: 1)
                    )
            )
        }
        .disabled(!isOnline || isLoggingOut)
        .opacity(isOnline ? 1.0 : 0.5)
        .buttonStyle(LumenCTAPressStyle(glowColor: .red))
    }

    // MARK: - Confirmation

    private var confirmationOverlay: some View {
        VStack(spacing: 14) {
            HStack(spacing: 8) {
                Image(systemName: "exclamationmark.triangle.fill")
                    .foregroundStyle(.orange)
                Text(L.areYouSure)
                    .font(.system(size: 15, weight: .semibold))
                    .foregroundStyle(isDark ? .white : .caribbeanInk)
            }

            Text(L.progressWillBeSaved)
                .font(.system(size: 13))
                .foregroundStyle(isDark ? .white.opacity(0.6) : .caribbeanPlum)
                .multilineTextAlignment(.center)

            HStack(spacing: 12) {
                Button {
                    AudioService.shared.playButtonTap()
                    HapticsService.shared.buttonPress()
                    withAnimation { showConfirmation = false }
                } label: {
                    Text(L.cancel)
                        .font(.system(size: 14, weight: .semibold))
                        .foregroundStyle(isDark ? .white : .caribbeanInk)
                        .frame(maxWidth: .infinity)
                        .padding(.vertical, 10)
                        .background(
                            RoundedRectangle(cornerRadius: 12, style: .continuous)
                                .fill(isDark ? .white.opacity(0.06) : .black.opacity(0.04))
                        )
                }
                .buttonStyle(LumenPressStyle(weight: .medium))

                Button {
                    AudioService.shared.playSignOutConfirmed()
                    HapticsService.shared.destructiveAction()
                    executeSignOut()
                } label: {
                    Text(L.signOut)
                        .font(.system(size: 14, weight: .semibold))
                        .foregroundStyle(.white)
                        .frame(maxWidth: .infinity)
                        .padding(.vertical, 10)
                        .background(
                            RoundedRectangle(cornerRadius: 12, style: .continuous)
                                .fill(.red)
                        )
                }
                .buttonStyle(LumenPressStyle(weight: .prominent, accentColor: .red))
            }
        }
        .padding(16)
        .background(
            RoundedRectangle(cornerRadius: 18, style: .continuous)
                .fill(isDark ? Color(white: 0.1).opacity(0.9) : .white.opacity(0.95))
                .overlay(
                    RoundedRectangle(cornerRadius: 18, style: .continuous)
                        .strokeBorder(.red.opacity(0.2), lineWidth: 1)
                )
        )
        .transition(.opacity.combined(with: .scale(scale: 0.95)))
    }

    // MARK: - Logout Progress

    private var logoutProgressView: some View {
        HStack(spacing: 10) {
            ProgressView()
                .scaleEffect(0.8)
                .tint(isDark ? .white : .caribbeanInk)

            Text(logoutStep)
                .font(.system(size: 13))
                .foregroundStyle(isDark ? .white.opacity(0.7) : .caribbeanPlum)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 10)
        .transition(.opacity)
    }

    // MARK: - Actions

    private func executeSignOut() {
        withAnimation { showConfirmation = false }
        isLoggingOut = true

        Task {
            logoutStep = L.savingProgress
            try? await Task.sleep(for: .milliseconds(800))

            await MainActor.run { logoutStep = L.clearingLocalData }
            try? await Task.sleep(for: .milliseconds(500))

            await MainActor.run { logoutStep = L.signingOut }
            try? await Task.sleep(for: .milliseconds(400))

            await MainActor.run {
                isLoggingOut = false
                logoutStep = ""
                // In a real app, this would trigger navigation to login screen
                // via the AuthService. For mock, we simply reset.
            }
        }
    }
}
