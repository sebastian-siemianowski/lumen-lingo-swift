import SwiftUI

// MARK: - Sync Status View

/// React-parity Sync status tab.
/// Shows last sync time, pending changes indicator, upload/download buttons.
/// Uses MockSyncService until a real cloud backend is wired.
struct SyncStatusView: View {
    @Environment(\.colorScheme) private var colorScheme

    // In a real app these would be injected via @Environment.
    // For now we use local state matching the mock service behavior.
    @State private var isSyncing = false
    @State private var lastSyncDate: Date? = nil
    @State private var syncStatus: SyncStatusMessage? = nil
    @State private var hasPendingChanges = false

    private var isDark: Bool { colorScheme == .dark }

    enum SyncStatusMessage {
        case success(String)
        case error(String)
    }

    var body: some View {
        VStack(spacing: 20) {
            // Header
            headerSection

            // Sync status indicator
            syncIndicator

            // Last synced
            lastSyncInfo

            // Action buttons
            syncButtons

            // Info footer
            syncInfoFooter
        }
    }

    // MARK: - Header

    private var headerSection: some View {
        HStack(spacing: 12) {
            Image(systemName: "arrow.triangle.2.circlepath")
                .font(.system(size: 20))
                .foregroundStyle(
                    LinearGradient(
                        colors: [.teal, .green],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )
                .rotationEffect(.degrees(isSyncing ? 360 : 0))
                .animation(isSyncing ? .linear(duration: 1.5).repeatForever(autoreverses: false) : .default, value: isSyncing)

            VStack(alignment: .leading, spacing: 2) {
                Text("Cloud Sync")
                    .font(.system(size: 17, weight: .semibold))
                    .foregroundStyle(isDark ? .white : .primary)
                Text("Backup & restore your progress")
                    .font(.system(size: 13))
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
            }

            Spacer()

            // Status dot
            Circle()
                .fill(hasPendingChanges ? .orange : .green)
                .frame(width: 8, height: 8)
                .shadow(color: (hasPendingChanges ? Color.orange : .green).opacity(0.5), radius: 4)
        }
    }

    // MARK: - Sync Indicator

    private var syncIndicator: some View {
        Group {
            if let status = syncStatus {
                HStack(spacing: 8) {
                    switch status {
                    case .success(let msg):
                        Image(systemName: "checkmark.circle.fill")
                            .foregroundStyle(.green)
                        Text(msg)
                            .font(.system(size: 13))
                            .foregroundStyle(.green)
                    case .error(let msg):
                        Image(systemName: "exclamationmark.triangle.fill")
                            .foregroundStyle(.red)
                        Text(msg)
                            .font(.system(size: 13))
                            .foregroundStyle(.red)
                    }
                }
                .frame(maxWidth: .infinity)
                .padding(.vertical, 10)
                .background(
                    RoundedRectangle(cornerRadius: 12, style: .continuous)
                        .fill({
                            switch status {
                            case .success: return Color.green.opacity(isDark ? 0.08 : 0.06)
                            case .error: return Color.red.opacity(isDark ? 0.08 : 0.06)
                            }
                        }())
                )
                .transition(.opacity.combined(with: .scale(scale: 0.95)))
            }
        }
        .animation(.easeInOut(duration: 0.3), value: syncStatus != nil)
    }

    // MARK: - Last Sync

    private var lastSyncInfo: some View {
        HStack(spacing: 8) {
            Image(systemName: "clock")
                .font(.system(size: 14))
                .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)

            Text("Last synced: \(formatLastSync(lastSyncDate))")
                .font(.system(size: 13))
                .foregroundStyle(isDark ? .white.opacity(0.6) : .secondary)

            Spacer()

            if hasPendingChanges {
                Text("Changes pending")
                    .font(.system(size: 11, weight: .medium))
                    .foregroundStyle(.orange)
                    .padding(.horizontal, 8)
                    .padding(.vertical, 3)
                    .background(
                        Capsule()
                            .fill(.orange.opacity(isDark ? 0.12 : 0.08))
                    )
            }
        }
    }

    // MARK: - Buttons

    private var syncButtons: some View {
        HStack(spacing: 12) {
            // Upload
            Button {
                performUpload()
            } label: {
                HStack(spacing: 6) {
                    if isSyncing {
                        ProgressView()
                            .scaleEffect(0.7)
                            .tint(.white)
                    } else {
                        Image(systemName: "icloud.and.arrow.up")
                    }
                    Text("Upload")
                        .font(.system(size: 14, weight: .semibold))
                }
                .foregroundStyle(.white)
                .frame(maxWidth: .infinity)
                .padding(.vertical, 12)
                .background(
                    RoundedRectangle(cornerRadius: 14, style: .continuous)
                        .fill(
                            LinearGradient(
                                colors: [.teal, .green],
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                )
            }
            .disabled(isSyncing)
            .buttonStyle(.plain)

            // Download
            Button {
                performDownload()
            } label: {
                HStack(spacing: 6) {
                    if isSyncing {
                        ProgressView()
                            .scaleEffect(0.7)
                            .tint(isDark ? .white : .teal)
                    } else {
                        Image(systemName: "icloud.and.arrow.down")
                    }
                    Text("Download")
                        .font(.system(size: 14, weight: .semibold))
                }
                .foregroundStyle(isDark ? .white : .teal)
                .frame(maxWidth: .infinity)
                .padding(.vertical, 12)
                .background(
                    RoundedRectangle(cornerRadius: 14, style: .continuous)
                        .fill(isDark ? .white.opacity(0.06) : .teal.opacity(0.08))
                        .overlay(
                            RoundedRectangle(cornerRadius: 14, style: .continuous)
                                .strokeBorder(.teal.opacity(0.3), lineWidth: 1)
                        )
                )
            }
            .disabled(isSyncing)
            .buttonStyle(.plain)
        }
    }

    // MARK: - Info Footer

    private var syncInfoFooter: some View {
        HStack(spacing: 8) {
            Image(systemName: "info.circle")
                .font(.system(size: 13))
                .foregroundStyle(isDark ? .white.opacity(0.35) : .secondary)
            Text("Your data is stored securely. Sync requires an internet connection.")
                .font(.system(size: 12))
                .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
    }

    // MARK: - Helpers

    private func formatLastSync(_ date: Date?) -> String {
        guard let date else { return "Never" }
        let diff = Date.now.timeIntervalSince(date)
        if diff < 60 { return "Just now" }
        if diff < 3600 { return "\(Int(diff / 60)) min ago" }
        if diff < 86400 { return "\(Int(diff / 3600)) hours ago" }
        return "\(Int(diff / 86400)) days ago"
    }

    private func performUpload() {
        isSyncing = true
        syncStatus = nil
        Task {
            // Simulate network delay (mock)
            try? await Task.sleep(for: .seconds(1.2))
            await MainActor.run {
                isSyncing = false
                lastSyncDate = .now
                hasPendingChanges = false
                syncStatus = .success("Data uploaded successfully")
            }
            // Clear status after 3s
            try? await Task.sleep(for: .seconds(3))
            await MainActor.run { syncStatus = nil }
        }
    }

    private func performDownload() {
        isSyncing = true
        syncStatus = nil
        Task {
            try? await Task.sleep(for: .seconds(1.2))
            await MainActor.run {
                isSyncing = false
                lastSyncDate = .now
                syncStatus = .success("Data downloaded successfully")
            }
            try? await Task.sleep(for: .seconds(3))
            await MainActor.run { syncStatus = nil }
        }
    }
}
