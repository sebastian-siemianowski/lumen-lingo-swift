import SwiftUI
import SwiftData

// MARK: - Sign Out View

/// React-parity Sign Out tab.
/// Shows network status, pending sync warning, and sign-out flow with confirmation.
struct SignOutView: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization
    @Environment(\.modelContext) private var modelContext
    @Environment(NetworkMonitor.self) private var networkMonitor
    @Environment(TierManager.self) private var tierManager

    @Query private var profiles: [UserProfile]

    private var L: AppStrings { localization.strings }
    private var profile: UserProfile? { profiles.first }

    @State private var isLoggingOut = false
    @State private var logoutStep = ""
    @State private var showConfirmation = false

    // Account deletion state
    @State private var showDeleteConfirmation = false
    @State private var isDeleting = false
    @State private var deleteStep = ""

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

            // Delete account section
            Divider()
                .overlay(isDark ? Color.white.opacity(0.06) : Color.black.opacity(0.06))
                .padding(.vertical, 4)

            deleteAccountButton

            if showDeleteConfirmation {
                deleteConfirmationOverlay
            }

            if isDeleting {
                deleteProgressView
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
            accountRow(icon: "envelope.fill", color: .cyan, title: L.email, value: profile?.email ?? "—")

            Divider()
                .overlay(isDark ? Color.white.opacity(0.06) : Color.black.opacity(0.06))

            accountRow(icon: "person.fill", color: Color(hex: "#8b5cf6"), title: L.name, value: profile?.firstName ?? "—")

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

    // MARK: - Delete Account Button

    private var deleteAccountButton: some View {
        Button {
            AudioService.shared.playSignOutWarning()
            HapticsService.shared.destructiveAction()
            withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                showDeleteConfirmation = true
            }
        } label: {
            HStack(spacing: 8) {
                Image(systemName: "trash.fill")
                    .font(.body.bold())
                Text(L.deleteAccount)
                    .font(.body.bold())
            }
            .foregroundStyle(.red)
            .frame(maxWidth: .infinity)
            .padding(.vertical, 14)
            .background(
                RoundedRectangle(cornerRadius: 16, style: .continuous)
                    .fill(.red.opacity(isDark ? 0.10 : 0.08))
                    .overlay(
                        RoundedRectangle(cornerRadius: 16, style: .continuous)
                            .strokeBorder(.red.opacity(0.2), lineWidth: 1)
                    )
            )
        }
        .disabled(isDeleting || isLoggingOut)
        .opacity(isDeleting ? 0.5 : 1.0)
        .buttonStyle(LumenCTAPressStyle(glowColor: .red))
    }

    // MARK: - Delete Confirmation

    private var deleteConfirmationOverlay: some View {
        VStack(spacing: 14) {
            HStack(spacing: 8) {
                Image(systemName: "exclamationmark.triangle.fill")
                    .foregroundStyle(.red)
                Text(L.deleteAccount)
                    .font(.system(size: 15, weight: .semibold))
                    .foregroundStyle(isDark ? .white : .caribbeanInk)
            }

            Text(L.deleteAccountWarning)
                .font(.system(size: 13))
                .foregroundStyle(isDark ? .white.opacity(0.6) : .caribbeanPlum)
                .multilineTextAlignment(.center)

            HStack(spacing: 12) {
                Button {
                    AudioService.shared.playButtonTap()
                    HapticsService.shared.buttonPress()
                    withAnimation { showDeleteConfirmation = false }
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
                    Task {
                        let result = await BiometricAuthService.authenticate(
                            reason: "Authenticate to delete your account"
                        )
                        switch result {
                        case .success:
                            executeAccountDeletion()
                        case .failed:
                            break // User cancelled or failed — stay on confirmation overlay
                        case .unavailable:
                            executeAccountDeletion() // No biometrics enrolled — proceed
                        }
                    }
                } label: {
                    Text(L.deleteAccountConfirm)
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
                        .strokeBorder(.red.opacity(0.3), lineWidth: 1)
                )
        )
        .transition(.opacity.combined(with: .scale(scale: 0.95)))
    }

    // MARK: - Delete Progress

    private var deleteProgressView: some View {
        HStack(spacing: 10) {
            ProgressView()
                .scaleEffect(0.8)
                .tint(.red)

            Text(deleteStep)
                .font(.system(size: 13))
                .foregroundStyle(isDark ? .white.opacity(0.7) : .caribbeanPlum)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 10)
        .transition(.opacity)
    }

    // MARK: - Account Deletion Logic

    private func executeAccountDeletion() {
        withAnimation { showDeleteConfirmation = false }
        isDeleting = true

        Task {
            // Step 1: Delete all SwiftData records
            await MainActor.run { deleteStep = L.clearingUserData }
            try? await Task.sleep(for: .milliseconds(300))
            await deleteAllSwiftData()

            // Step 2: Clear iCloud KVS
            await MainActor.run { deleteStep = L.deletingAccount }
            try? await Task.sleep(for: .milliseconds(200))
            await clearCloudKeyValueStore()

            // Step 3: Clear all UserDefaults
            clearAllUserDefaults()

            try? await Task.sleep(for: .milliseconds(300))

            // Step 4: Reset to clean state — triggers legal consent + onboarding
            await MainActor.run {
                isDeleting = false
                deleteStep = ""
            }
        }
    }

    @MainActor
    private func deleteAllSwiftData() {
        PrivacyAuditLogger.log(action: "account_data_deleted", detail: "all_swiftdata_models")
        // Delete all model instances from the context
        do {
            try modelContext.delete(model: GameProgressRecord.self)
            try modelContext.delete(model: FavoriteCategory.self)
            try modelContext.delete(model: MasteredContent.self)
            try modelContext.delete(model: LanguagePreference.self)
            try modelContext.delete(model: UserProfile.self)
            try modelContext.save()
        } catch {
            // Best-effort deletion — log but continue
            #if DEBUG
            print("[AccountDeletion] SwiftData error: \(error)")
            #endif
        }
    }

    private func clearCloudKeyValueStore() async {
        await MainActor.run {
            tierManager.cloudStore.removeObject(forKey: "cloud_selectedTierId")
            tierManager.cloudStore.removeObject(forKey: "cloud_trialStartDate")
            tierManager.cloudStore.synchronize()
        }
    }

    private func clearAllUserDefaults() {
        let defaults = UserDefaults.standard

        // Known static keys
        let staticKeys: [String] = [
            "grammar_continuous_mode",
            "flashcards_continuous_mode",
            "hasSeenTierOnboarding",
            "sessionEngine_roundsToday",
            "sessionEngine_roundsDate",
            "sessionEngine_lastGameTypes",
            "grammarTipsExpanded",
            // @PersistedState collapse keys
            "membership_comparison_collapsed",
            "profile_myPlan_collapsed",
            "dashboard_soundscape_collapsed",
            "dashboard_header_collapsed",
            "dashboard_exploreMore_collapsed",
            "dashboard_recentActivity_collapsed",
            "journey_stats_collapsed",
            "journey_milestones_collapsed",
            "journey_gameBreakdown_collapsed",
            "journey_dailyXP_collapsed",
            "journey_weeklyTrend_collapsed",
            "journey_accuracyHeatmap_collapsed",
            "journey_monthlyReport_collapsed",
            "journey_milestonePredictions_collapsed",
            "journey_exportData_collapsed",
            "journey_insights_collapsed",
            "journey_streak_collapsed",
            "journey_quote_collapsed",
            "journey_reset_collapsed",
            "journey_mastered_collapsed",
        ]

        for key in staticKeys {
            defaults.removeObject(forKey: key)
        }

        // Dynamic keys: practiceTime_*, *_hide_completed, featureOverride_*
        let allKeys = defaults.dictionaryRepresentation().keys
        for key in allKeys {
            if key.hasPrefix("practiceTime_")
                || key.hasSuffix("_hide_completed")
                || key.hasPrefix("featureOverride_") {
                defaults.removeObject(forKey: key)
            }
        }
    }
}
