import SwiftUI
import CryptoKit

// MARK: - Subscription Diagnostics View (Story 6.3)

/// Hidden diagnostics screen for support — accessible via 7-tap Easter egg on version label.
/// Displays subscription state, entitlements, and RevenueCat diagnostics in a cosmic sci-fi theme.
struct SubscriptionDiagnosticsView: View {
    @Environment(SubscriptionManager.self) private var subscriptionManager
    @Environment(TierManager.self) private var tierManager
    @Environment(NetworkMonitor.self) private var networkMonitor
    @Environment(\.revenueCatService) private var revenueCatService
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.dismiss) private var dismiss

    @State private var isRefreshing = false
    @State private var isSyncing = false
    @State private var copiedToClipboard = false
    @State private var revealedFields: Set<String> = []

    private let dateFormatter: DateFormatter = {
        let f = DateFormatter()
        f.dateStyle = .medium
        f.timeStyle = .medium
        return f
    }()

    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(spacing: 16) {
                    identitySection
                    entitlementsSection
                    subscriptionStateSection
                    sdkSection
                    actionButtons
                }
                .padding()
            }
            .background(Color.black)
            .navigationTitle("Diagnostics")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .topBarTrailing) {
                    Button("Done") { dismiss() }
                        .foregroundStyle(.cyan)
                }
            }
            .toolbarColorScheme(.dark, for: .navigationBar)
        }
        .preferredColorScheme(.dark)
    }

    // MARK: - Identity Section

    private var identitySection: some View {
        DiagnosticCard(title: "Identity") {
            DiagnosticRow(
                label: "RC App User ID",
                value: maskedValue(revenueCatService.currentAppUserID, field: "rcUserId"),
                status: .neutral,
                onTap: { toggleReveal("rcUserId") },
                onCopy: { copy(revenueCatService.currentAppUserID) }
            )
            DiagnosticRow(
                label: "Anonymous",
                value: revenueCatService.isAnonymous ? "Yes" : "No",
                status: revenueCatService.isAnonymous ? .warning : .healthy
            )
            DiagnosticRow(
                label: "Auth Provider",
                value: authProvider,
                status: .neutral
            )
        }
    }

    // MARK: - Entitlements Section

    private var entitlementsSection: some View {
        DiagnosticCard(title: "Entitlements") {
            if let info = subscriptionManager.latestCustomerInfo {
                if info.activeEntitlements.isEmpty {
                    DiagnosticRow(label: "Active", value: "None", status: .warning)
                } else {
                    ForEach(Array(info.activeEntitlements.values), id: \.id) { ent in
                        VStack(alignment: .leading, spacing: 4) {
                            DiagnosticRow(
                                label: ent.id,
                                value: ent.isActive ? "Active" : "Inactive",
                                status: ent.isActive ? .healthy : .warning
                            )
                            if let expiry = ent.expirationDate {
                                DiagnosticRow(
                                    label: "  Expires",
                                    value: dateFormatter.string(from: expiry),
                                    status: expiry < Date.now ? .warning : .healthy
                                )
                            }
                            if let original = ent.originalPurchaseDate {
                                DiagnosticRow(
                                    label: "  Original Purchase",
                                    value: dateFormatter.string(from: original),
                                    status: .neutral
                                )
                            }
                            DiagnosticRow(
                                label: "  Will Renew",
                                value: ent.willRenew ? "Yes" : "No",
                                status: ent.willRenew ? .healthy : .warning
                            )
                            DiagnosticRow(
                                label: "  Period",
                                value: ent.periodType.rawValue.capitalized,
                                status: .neutral
                            )
                        }
                    }
                }
            } else {
                DiagnosticRow(label: "Status", value: "No data", status: .warning)
            }
        }
    }

    // MARK: - Subscription State Section

    private var subscriptionStateSection: some View {
        DiagnosticCard(title: "Subscription State") {
            DiagnosticRow(
                label: "State",
                value: subscriptionStateLabel,
                status: subscriptionStateStatus
            )
            DiagnosticRow(
                label: "Current Tier",
                value: tierManager.currentTier.displayName,
                status: tierManager.currentTier == .free ? .neutral : .healthy
            )
            DiagnosticRow(
                label: "Billing Issue",
                value: subscriptionManager.hasBillingIssue ? "Yes" : "No",
                status: subscriptionManager.hasBillingIssue ? .warning : .healthy
            )
            DiagnosticRow(
                label: "Grace Period",
                value: isInGracePeriod ? "Yes" : "No",
                status: isInGracePeriod ? .warning : .healthy
            )
            if let sync = subscriptionManager.lastEntitlementSyncDate {
                DiagnosticRow(
                    label: "Last Sync",
                    value: dateFormatter.string(from: sync),
                    status: .neutral
                )
            }
        }
    }

    // MARK: - SDK Section

    private var sdkSection: some View {
        DiagnosticCard(title: "SDK & Environment") {
            DiagnosticRow(
                label: "RC SDK Version",
                value: revenueCatService.sdkVersion,
                status: .neutral
            )
            DiagnosticRow(
                label: "StoreKit Env",
                value: revenueCatService.isSandbox ? "Sandbox" : "Production",
                status: .neutral
            )
            DiagnosticRow(
                label: "Offering ID",
                value: subscriptionManager.currentOffering?.id ?? "—",
                status: subscriptionManager.currentOffering != nil ? .neutral : .warning
            )
            DiagnosticRow(
                label: "Network",
                value: networkMonitor.isConnected ? "Online" : "Offline",
                status: networkMonitor.isConnected ? .healthy : .warning
            )
        }
    }

    // MARK: - Action Buttons

    private var actionButtons: some View {
        VStack(spacing: 12) {
            Button {
                copyDiagnostics()
            } label: {
                HStack {
                    Image(systemName: copiedToClipboard ? "checkmark.circle.fill" : "doc.on.doc")
                        .contentTransition(.symbolEffect(.replace))
                    Text(copiedToClipboard ? "Copied!" : "Copy Diagnostics")
                }
                .frame(maxWidth: .infinity)
                .padding(.vertical, 12)
                .background(.cyan.opacity(0.15))
                .foregroundStyle(.cyan)
                .clipShape(RoundedRectangle(cornerRadius: 10))
                .overlay(
                    RoundedRectangle(cornerRadius: 10)
                        .strokeBorder(.cyan.opacity(0.3), lineWidth: 1)
                )
            }

            HStack(spacing: 12) {
                Button {
                    Task { await refreshCustomerInfo() }
                } label: {
                    HStack {
                        if isRefreshing {
                            ProgressView()
                                .tint(.cyan)
                        }
                        Text("Refresh")
                    }
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 12)
                    .background(.white.opacity(0.05))
                    .foregroundStyle(.white.opacity(0.7))
                    .clipShape(RoundedRectangle(cornerRadius: 10))
                    .overlay(
                        RoundedRectangle(cornerRadius: 10)
                            .strokeBorder(.white.opacity(0.15), lineWidth: 1)
                    )
                }
                .disabled(isRefreshing)

                Button {
                    Task { await forceSync() }
                } label: {
                    HStack {
                        if isSyncing {
                            ProgressView()
                                .tint(.orange)
                        }
                        Text("Force Sync")
                    }
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 12)
                    .background(.orange.opacity(0.1))
                    .foregroundStyle(.orange.opacity(0.8))
                    .clipShape(RoundedRectangle(cornerRadius: 10))
                    .overlay(
                        RoundedRectangle(cornerRadius: 10)
                            .strokeBorder(.orange.opacity(0.2), lineWidth: 1)
                    )
                }
                .disabled(isSyncing)
            }
        }
        .padding(.top, 8)
    }

    // MARK: - Helpers

    private var subscriptionStateLabel: String {
        switch subscriptionManager.subscriptionState {
        case .unknown: "Unknown"
        case .notSubscribed: "Not Subscribed"
        case .subscribed(let tier): "Subscribed (\(tier.displayName))"
        case .inGracePeriod(let tier): "Grace Period (\(tier.displayName))"
        case .inBillingRetry(let tier): "Billing Retry (\(tier.displayName))"
        case .revoked: "Revoked"
        case .expired: "Expired"
        }
    }

    private var subscriptionStateStatus: DiagnosticStatus {
        switch subscriptionManager.subscriptionState {
        case .subscribed: .healthy
        case .notSubscribed, .unknown: .neutral
        default: .warning
        }
    }

    private var isInGracePeriod: Bool {
        if case .inGracePeriod = subscriptionManager.subscriptionState { return true }
        return false
    }

    private var authProvider: String {
        if revenueCatService.isAnonymous { return "Anonymous" }
        return "Authenticated"
    }

    private func maskedValue(_ value: String, field: String) -> String {
        if revealedFields.contains(field) { return value }
        guard value.count > 4 else { return "••••" }
        return "••••" + String(value.suffix(4))
    }

    private func toggleReveal(_ field: String) {
        if revealedFields.contains(field) {
            revealedFields.remove(field)
        } else {
            revealedFields.insert(field)
        }
    }

    private func copy(_ text: String) {
        UIPasteboard.general.string = text
    }

    private func supportReferenceHash() -> String {
        let input = revenueCatService.currentAppUserID + ISO8601DateFormatter().string(from: Date())
        let hash = SHA256.hash(data: Data(input.utf8))
        return String(hash.map { String(format: "%02x", $0) }.joined().prefix(8))
    }

    private func copyDiagnostics() {
        var lines: [String] = []
        lines.append("=== LumenLingo Subscription Diagnostics ===")
        lines.append("Support Ref: \(supportReferenceHash())")
        lines.append("")
        lines.append("RC User ID: \(revenueCatService.currentAppUserID)")
        lines.append("Anonymous: \(revenueCatService.isAnonymous)")
        lines.append("State: \(subscriptionStateLabel)")
        lines.append("Tier: \(tierManager.currentTier.displayName)")
        lines.append("Billing Issue: \(subscriptionManager.hasBillingIssue)")
        lines.append("Grace Period: \(isInGracePeriod)")

        if let info = subscriptionManager.latestCustomerInfo {
            lines.append("")
            lines.append("Active Entitlements:")
            for ent in info.activeEntitlements.values {
                lines.append("  - \(ent.id): willRenew=\(ent.willRenew), period=\(ent.periodType.rawValue)")
                if let exp = ent.expirationDate {
                    lines.append("    expires: \(dateFormatter.string(from: exp))")
                }
            }
        }

        lines.append("")
        lines.append("RC SDK: \(revenueCatService.sdkVersion)")
        lines.append("Env: \(revenueCatService.isSandbox ? "Sandbox" : "Production")")
        lines.append("Offering: \(subscriptionManager.currentOffering?.id ?? "none")")
        lines.append("Network: \(networkMonitor.isConnected ? "Online" : "Offline")")

        if let sync = subscriptionManager.lastEntitlementSyncDate {
            lines.append("Last Sync: \(dateFormatter.string(from: sync))")
        }

        UIPasteboard.general.string = lines.joined(separator: "\n")
        withAnimation { copiedToClipboard = true }
        DispatchQueue.main.asyncAfter(deadline: .now() + 2) {
            withAnimation { copiedToClipboard = false }
        }
    }

    private func refreshCustomerInfo() async {
        isRefreshing = true
        defer { isRefreshing = false }
        do {
            let info = try await revenueCatService.getCustomerInfo()
            subscriptionManager.handleRevenueCatCustomerInfo(info)
        } catch {
            // Silently fail — diagnostics is read-only
        }
    }

    private func forceSync() async {
        isSyncing = true
        defer { isSyncing = false }
        do {
            let info = try await revenueCatService.syncPurchases()
            subscriptionManager.handleRevenueCatCustomerInfo(info)
        } catch {
            // Silently fail — diagnostics is read-only
        }
    }
}

// MARK: - Diagnostic Status

enum DiagnosticStatus {
    case healthy, warning, neutral

    var color: Color {
        switch self {
        case .healthy: .green
        case .warning: .orange
        case .neutral: .white.opacity(0.6)
        }
    }
}

// MARK: - Diagnostic Card

private struct DiagnosticCard<Content: View>: View {
    let title: String
    @ViewBuilder let content: Content

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text(title.uppercased())
                .font(.system(.caption, design: .monospaced))
                .foregroundStyle(.cyan.opacity(0.7))
                .tracking(2)

            VStack(spacing: 6) {
                content
            }
            .padding(12)
            .background(.white.opacity(0.04))
            .clipShape(RoundedRectangle(cornerRadius: 10))
            .overlay(
                RoundedRectangle(cornerRadius: 10)
                    .strokeBorder(.cyan.opacity(0.12), lineWidth: 1)
            )
        }
    }
}

// MARK: - Diagnostic Row

private struct DiagnosticRow: View {
    let label: String
    let value: String
    var status: DiagnosticStatus = .neutral
    var onTap: (() -> Void)? = nil
    var onCopy: (() -> Void)? = nil

    var body: some View {
        HStack {
            Text(label)
                .font(.system(.caption, design: .monospaced))
                .foregroundStyle(.white.opacity(0.5))

            Spacer()

            Text(value)
                .font(.system(.caption, design: .monospaced))
                .foregroundStyle(status.color)
                .shadow(color: status == .healthy ? .green.opacity(0.4) : status == .warning ? .orange.opacity(0.4) : .clear, radius: 4)
                .onTapGesture {
                    onTap?()
                }

            if onCopy != nil {
                Button {
                    onCopy?()
                } label: {
                    Image(systemName: "doc.on.doc")
                        .font(.system(size: 10))
                        .foregroundStyle(.cyan.opacity(0.5))
                }
                .buttonStyle(.plain)
            }
        }
    }
}
