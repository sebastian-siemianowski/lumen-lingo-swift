#if DEBUG
import SwiftUI

// MARK: - QA RevenueCat Simulation Section

/// Dedicated "RevenueCat Simulation" section for the QA Panel.
/// Provides full control over the MockRevenueCatService for testing
/// subscription flows, entitlement states, and purchase scenarios.
struct QARevenueCatSection: View {
    @Environment(\.revenueCatService) private var rcService
    @Environment(\.colorScheme) private var colorScheme

    @State private var showToggleConfirmation = false
    @State private var presetFlashColor: Color? = nil
    @State private var selectedEventEntry: MockRCEventLogEntry? = nil
    @State private var showUpgradePicker = false
    @State private var showDowngradePicker = false
    @State private var upgradeTier: MembershipTier = .elite
    @State private var downgradeTier: MembershipTier = .pro

    private var isDark: Bool { colorScheme == .dark }

    /// Whether the current service is the mock.
    private var isMock: Bool { rcService is MockRevenueCatService }

    /// Safely cast to MockRevenueCatService.
    private var mock: MockRevenueCatService? { rcService as? MockRevenueCatService }

    var body: some View {
        VStack(spacing: 16) {
            masterControlSection
            if isMock, let mock {
                quickStatePresets(mock: mock)
                purchaseOutcomeControl(mock: mock)
                lifecycleSimulation(mock: mock)
                offeringControls(mock: mock)
                rcNetworkSimulation(mock: mock)
                eventHistory(mock: mock)
                rcStateInspector(mock: mock)
            }
        }
    }

    // MARK: - Master Control Section

    private var masterControlSection: some View {
        GlassPanelWrapper(tintColor: .orange) {
            VStack(alignment: .leading, spacing: 12) {
                HStack(spacing: 8) {
                    Image(systemName: "cart.fill")
                        .font(.system(size: 14, weight: .semibold))
                        .foregroundStyle(.orange)
                    Text("RevenueCat Simulation")
                        .font(.system(size: 15, weight: .semibold))
                        .foregroundStyle(isDark ? .white : .primary)
                    Spacer()
                    if isMock {
                        Text("MOCK")
                            .font(.system(size: 8, weight: .heavy, design: .rounded))
                            .tracking(0.5)
                            .padding(.horizontal, 6)
                            .padding(.vertical, 3)
                            .background(Capsule().fill(.green.opacity(0.2)))
                            .overlay(Capsule().strokeBorder(.green.opacity(0.4), lineWidth: 1))
                            .foregroundStyle(.green)
                    } else {
                        Text("REAL SDK")
                            .font(.system(size: 8, weight: .heavy, design: .rounded))
                            .tracking(0.5)
                            .padding(.horizontal, 6)
                            .padding(.vertical, 3)
                            .background(Capsule().fill(.blue.opacity(0.2)))
                            .overlay(Capsule().strokeBorder(.blue.opacity(0.4), lineWidth: 1))
                            .foregroundStyle(.blue)
                    }
                }

                if !isMock {
                    Text("Real RevenueCat SDK is active. Simulation controls require Mock mode.")
                        .font(.system(size: 11))
                        .foregroundStyle(.secondary)
                }
            }
        }
    }

    // MARK: - Quick State Presets

    private func quickStatePresets(mock: MockRevenueCatService) -> some View {
        GlassPanelWrapper {
            VStack(alignment: .leading, spacing: 12) {
                HStack(spacing: 8) {
                    Image(systemName: "squares.leading.rectangle")
                        .font(.system(size: 14, weight: .semibold))
                        .foregroundStyle(.cyan)
                    Text("Quick State Presets")
                        .font(.system(size: 15, weight: .semibold))
                        .foregroundStyle(isDark ? .white : .primary)
                }

                LazyVGrid(columns: [
                    GridItem(.flexible(), spacing: 8),
                    GridItem(.flexible(), spacing: 8),
                    GridItem(.flexible(), spacing: 8)
                ], spacing: 8) {
                    ForEach(MockRCPreset.allCases) { preset in
                        presetCard(preset, mock: mock)
                    }
                }
            }
        }
        .overlay(
            // Flash overlay for preset activation feedback
            RoundedRectangle(cornerRadius: 24)
                .fill(presetFlashColor?.opacity(0.15) ?? .clear)
                .allowsHitTesting(false)
                .animation(.easeOut(duration: 0.4), value: presetFlashColor == nil)
        )
    }

    private func presetCard(_ preset: MockRCPreset, mock: MockRevenueCatService) -> some View {
        let tierColors = preset.tier.gradientColors
        let accentColor = tierColors.first ?? .white

        return Button {
            withAnimation(.spring(response: 0.3, dampingFraction: 0.7)) {
                mock.applyPreset(preset)
                presetFlashColor = accentColor
            }
            // Clear flash after delay
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
                presetFlashColor = nil
            }
        } label: {
            VStack(spacing: 4) {
                Image(systemName: preset.iconName)
                    .font(.system(size: 16, weight: .semibold))
                    .foregroundStyle(
                        LinearGradient(
                            colors: tierColors,
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )

                Text(preset.displayName)
                    .font(.system(size: 9, weight: .semibold, design: .rounded))
                    .multilineTextAlignment(.center)
                    .lineLimit(2)
                    .foregroundStyle(isDark ? .white.opacity(0.7) : .primary.opacity(0.7))
            }
            .frame(maxWidth: .infinity)
            .padding(.vertical, 10)
            .padding(.horizontal, 4)
            .background(
                RoundedRectangle(cornerRadius: 12)
                    .fill(accentColor.opacity(isDark ? 0.08 : 0.05))
            )
            .overlay(
                RoundedRectangle(cornerRadius: 12)
                    .strokeBorder(accentColor.opacity(0.2), lineWidth: 1)
            )
        }
        .buttonStyle(.plain)
        .accessibilityLabel("Apply \(preset.displayName) preset")
    }

    // MARK: - Purchase Outcome Control

    private func purchaseOutcomeControl(mock: MockRevenueCatService) -> some View {
        GlassPanelWrapper {
            VStack(alignment: .leading, spacing: 12) {
                HStack(spacing: 8) {
                    Image(systemName: "creditcard.fill")
                        .font(.system(size: 14, weight: .semibold))
                        .foregroundStyle(.purple)
                    Text("Purchase Outcome")
                        .font(.system(size: 15, weight: .semibold))
                        .foregroundStyle(isDark ? .white : .primary)
                }

                // Scenario picker
                VStack(alignment: .leading, spacing: 6) {
                    Text("Next Purchase Scenario")
                        .font(.system(size: 11, weight: .medium))
                        .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)

                    // Show as a 2-column grid of selectable scenarios
                    LazyVGrid(columns: [
                        GridItem(.flexible()),
                        GridItem(.flexible())
                    ], spacing: 6) {
                        ForEach(MockRCScenario.allCases) { scenario in
                            scenarioButton(scenario, mock: mock)
                        }
                    }
                }

                // Purchase delay slider
                VStack(alignment: .leading, spacing: 4) {
                    HStack {
                        Text("Purchase Delay")
                            .font(.system(size: 11, weight: .medium))
                            .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
                        Spacer()
                        Text(String(format: "%.1fs", mock.purchaseDelay))
                            .font(.system(size: 11, weight: .bold, design: .monospaced))
                            .foregroundStyle(.purple)
                    }

                    Slider(
                        value: Bindable(mock).purchaseDelay,
                        in: 0...5,
                        step: 0.5
                    )
                    .tint(.purple)
                    .accessibilityLabel("Purchase delay: \(String(format: "%.1f", mock.purchaseDelay)) seconds")
                }
            }
        }
    }

    private func scenarioButton(_ scenario: MockRCScenario, mock: MockRevenueCatService) -> some View {
        let isSelected = mock.nextPurchaseScenario == scenario
        let color = scenarioColor(scenario)

        return Button {
            withAnimation(.spring(response: 0.25, dampingFraction: 0.8)) {
                mock.nextPurchaseScenario = scenario
            }
        } label: {
            HStack(spacing: 4) {
                Image(systemName: scenario.iconName)
                    .font(.system(size: 10, weight: .semibold))
                Text(scenario.displayName)
                    .font(.system(size: 9, weight: .semibold, design: .rounded))
                    .lineLimit(1)
            }
            .frame(maxWidth: .infinity)
            .padding(.vertical, 7)
            .padding(.horizontal, 4)
            .foregroundStyle(isSelected ? .white : (isDark ? .white.opacity(0.6) : .primary.opacity(0.6)))
            .background(
                RoundedRectangle(cornerRadius: 8)
                    .fill(isSelected ? color.opacity(0.7) : (isDark ? .white.opacity(0.06) : .black.opacity(0.04)))
            )
            .overlay(
                RoundedRectangle(cornerRadius: 8)
                    .strokeBorder(isSelected ? color.opacity(0.5) : .clear, lineWidth: 1)
            )
        }
        .buttonStyle(.plain)
        .accessibilityLabel("Set next purchase scenario to \(scenario.displayName)")
    }

    // MARK: - Lifecycle Simulation

    private func lifecycleSimulation(mock: MockRevenueCatService) -> some View {
        GlassPanelWrapper {
            VStack(alignment: .leading, spacing: 12) {
                HStack(spacing: 8) {
                    Image(systemName: "arrow.triangle.2.circlepath")
                        .font(.system(size: 14, weight: .semibold))
                        .foregroundStyle(.green)
                    Text("Lifecycle Simulation")
                        .font(.system(size: 15, weight: .semibold))
                        .foregroundStyle(isDark ? .white : .primary)
                }

                LazyVGrid(columns: [
                    GridItem(.flexible()),
                    GridItem(.flexible())
                ], spacing: 8) {
                    lifecycleButton(icon: "arrow.clockwise", label: "Renewal", color: .green) {
                        mock.simulateRenewal()
                    }
                    lifecycleButton(icon: "exclamationmark.triangle", label: "Billing Fail", color: .orange) {
                        mock.simulateBillingFailure()
                    }
                    lifecycleButton(icon: "clock.badge.xmark", label: "Expiry", color: .red) {
                        mock.simulateExpiry()
                    }
                    lifecycleButton(icon: "arrow.uturn.backward", label: "Refund", color: .red) {
                        mock.simulateRefund()
                    }
                }

                // Upgrade / Downgrade with tier picker
                HStack(spacing: 8) {
                    Menu {
                        ForEach([MembershipTier.pro, .elite, .royal], id: \.self) { tier in
                            Button(tier.displayName) {
                                mock.simulateUpgrade(to: tier)
                            }
                        }
                    } label: {
                        lifecycleButtonLabel(icon: "arrow.up.circle", label: "Upgrade", color: .cyan)
                    }
                    .accessibilityLabel("Simulate upgrade")

                    Menu {
                        ForEach([MembershipTier.free, .pro, .elite], id: \.self) { tier in
                            Button(tier.displayName) {
                                mock.simulateDowngrade(to: tier)
                            }
                        }
                    } label: {
                        lifecycleButtonLabel(icon: "arrow.down.circle", label: "Downgrade", color: .yellow)
                    }
                    .accessibilityLabel("Simulate downgrade")
                }
            }
        }
    }

    private func lifecycleButton(icon: String, label: String, color: Color, action: @escaping () -> Void) -> some View {
        Button(action: action) {
            lifecycleButtonLabel(icon: icon, label: label, color: color)
        }
        .buttonStyle(.plain)
        .accessibilityLabel("Simulate \(label)")
    }

    private func lifecycleButtonLabel(icon: String, label: String, color: Color) -> some View {
        VStack(spacing: 2) {
            Image(systemName: icon)
                .font(.system(size: 13, weight: .semibold))
            Text(label)
                .font(.system(size: 10, weight: .semibold, design: .rounded))
        }
        .foregroundStyle(color)
        .frame(maxWidth: .infinity)
        .padding(.vertical, 8)
        .background(
            RoundedRectangle(cornerRadius: 8)
                .fill(color.opacity(isDark ? 0.1 : 0.06))
                .overlay(
                    RoundedRectangle(cornerRadius: 8)
                        .strokeBorder(color.opacity(0.2), lineWidth: 1)
                )
        )
    }

    // MARK: - Offering Controls

    private func offeringControls(mock: MockRevenueCatService) -> some View {
        GlassPanelWrapper {
            VStack(alignment: .leading, spacing: 12) {
                HStack(spacing: 8) {
                    Image(systemName: "tag.fill")
                        .font(.system(size: 14, weight: .semibold))
                        .foregroundStyle(.blue)
                    Text("Offering Controls")
                        .font(.system(size: 15, weight: .semibold))
                        .foregroundStyle(isDark ? .white : .primary)
                }

                // Current offering ID
                HStack {
                    Text("Offering ID")
                        .font(.system(size: 12, weight: .medium))
                        .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
                    Spacer()
                    TextField("default", text: Bindable(mock).currentOfferingID)
                        .font(.system(size: 12, weight: .medium, design: .monospaced))
                        .multilineTextAlignment(.trailing)
                        .textFieldStyle(.plain)
                        .frame(width: 120)
                        .accessibilityLabel("Current offering ID")
                }

                Toggle(isOn: Bindable(mock).forceEmptyOfferings) {
                    VStack(alignment: .leading, spacing: 1) {
                        Text("Force Empty Offerings")
                            .font(.system(size: 13, weight: .medium))
                            .foregroundStyle(isDark ? .white : .primary)
                        Text("getOfferings() returns empty (tests skeleton states)")
                            .font(.system(size: 10))
                            .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)
                    }
                }
                .tint(.blue)
                .accessibilityLabel("Force empty offerings")

                Toggle(isOn: Bindable(mock).forceOfferingsError) {
                    VStack(alignment: .leading, spacing: 1) {
                        Text("Force Offerings Error")
                            .font(.system(size: 13, weight: .medium))
                            .foregroundStyle(isDark ? .white : .primary)
                        Text("getOfferings() throws (tests error banner)")
                            .font(.system(size: 10))
                            .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)
                    }
                }
                .tint(.blue)
                .accessibilityLabel("Force offerings error")

                Button {
                    mock.currentOfferingID = "default"
                    mock.forceEmptyOfferings = false
                    mock.forceOfferingsError = false
                } label: {
                    HStack(spacing: 4) {
                        Image(systemName: "arrow.counterclockwise")
                            .font(.system(size: 11, weight: .semibold))
                        Text("Reset to Default Offerings")
                            .font(.system(size: 11, weight: .semibold, design: .rounded))
                    }
                    .foregroundStyle(.blue)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 8)
                    .background(
                        RoundedRectangle(cornerRadius: 8)
                            .fill(.blue.opacity(isDark ? 0.1 : 0.06))
                            .overlay(
                                RoundedRectangle(cornerRadius: 8)
                                    .strokeBorder(.blue.opacity(0.2), lineWidth: 1)
                            )
                    )
                }
                .buttonStyle(.plain)
                .accessibilityLabel("Reset offerings to default")
            }
        }
    }

    // MARK: - RC Network Simulation

    private func rcNetworkSimulation(mock: MockRevenueCatService) -> some View {
        GlassPanelWrapper {
            VStack(alignment: .leading, spacing: 12) {
                HStack(spacing: 8) {
                    Image(systemName: "antenna.radiowaves.left.and.right.slash")
                        .font(.system(size: 14, weight: .semibold))
                        .foregroundStyle(.red)
                    Text("RC Network Simulation")
                        .font(.system(size: 15, weight: .semibold))
                        .foregroundStyle(isDark ? .white : .primary)

                    Spacer()

                    if mock.isOffline {
                        Text("OFFLINE")
                            .font(.system(size: 8, weight: .heavy, design: .rounded))
                            .tracking(0.5)
                            .padding(.horizontal, 6)
                            .padding(.vertical, 3)
                            .background(Capsule().fill(.red.opacity(0.2)))
                            .overlay(Capsule().strokeBorder(.red.opacity(0.4), lineWidth: 1))
                            .foregroundStyle(.red)
                    }
                }

                Toggle(isOn: Bindable(mock).isOffline) {
                    VStack(alignment: .leading, spacing: 1) {
                        Text("RevenueCat Offline")
                            .font(.system(size: 13, weight: .medium))
                            .foregroundStyle(isDark ? .white : .primary)
                        Text("All RC calls fail with network error")
                            .font(.system(size: 10))
                            .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)
                    }
                }
                .tint(.red)
                .accessibilityLabel("RevenueCat offline mode")

                VStack(alignment: .leading, spacing: 4) {
                    HStack {
                        Text("RC Latency")
                            .font(.system(size: 11, weight: .medium))
                            .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
                        Spacer()
                        Text(String(format: "%.1fs", mock.globalLatency))
                            .font(.system(size: 11, weight: .bold, design: .monospaced))
                            .foregroundStyle(.red)
                    }

                    Slider(
                        value: Bindable(mock).globalLatency,
                        in: 0...10,
                        step: 0.5
                    )
                    .tint(.red)
                    .accessibilityLabel("RevenueCat latency: \(String(format: "%.1f", mock.globalLatency)) seconds")
                }
            }
        }
    }

    // MARK: - Event History

    private func eventHistory(mock: MockRevenueCatService) -> some View {
        GlassPanelWrapper {
            VStack(alignment: .leading, spacing: 12) {
                HStack(spacing: 8) {
                    Image(systemName: "list.bullet.rectangle")
                        .font(.system(size: 14, weight: .semibold))
                        .foregroundStyle(.mint)
                    Text("Event History")
                        .font(.system(size: 15, weight: .semibold))
                        .foregroundStyle(isDark ? .white : .primary)

                    Spacer()

                    Text("\(mock.eventLog.count)")
                        .font(.system(size: 10, weight: .bold, design: .monospaced))
                        .foregroundStyle(.mint.opacity(0.7))
                }

                if mock.eventLog.isEmpty {
                    Text("No events recorded yet")
                        .font(.system(size: 11, design: .monospaced))
                        .foregroundStyle(isDark ? .white.opacity(0.3) : .secondary)
                        .frame(maxWidth: .infinity, alignment: .center)
                        .padding(.vertical, 8)
                } else {
                    // Scrollable log
                    ScrollView {
                        LazyVStack(alignment: .leading, spacing: 4) {
                            ForEach(mock.eventLog.reversed()) { entry in
                                eventLogRow(entry)
                            }
                        }
                    }
                    .frame(maxHeight: 200)
                }

                // Action buttons
                HStack(spacing: 8) {
                    Button {
                        mock.clearEventLog()
                    } label: {
                        HStack(spacing: 4) {
                            Image(systemName: "trash")
                                .font(.system(size: 10))
                            Text("Clear")
                                .font(.system(size: 10, weight: .semibold, design: .rounded))
                        }
                        .foregroundStyle(.red)
                        .frame(maxWidth: .infinity)
                        .padding(.vertical, 6)
                        .background(
                            RoundedRectangle(cornerRadius: 6)
                                .fill(.red.opacity(isDark ? 0.1 : 0.06))
                                .overlay(
                                    RoundedRectangle(cornerRadius: 6)
                                        .strokeBorder(.red.opacity(0.2), lineWidth: 1)
                                )
                        )
                    }
                    .buttonStyle(.plain)
                    .accessibilityLabel("Clear event log")

                    Button {
                        UIPasteboard.general.string = mock.formattedEventLog()
                    } label: {
                        HStack(spacing: 4) {
                            Image(systemName: "doc.on.doc")
                                .font(.system(size: 10))
                            Text("Copy")
                                .font(.system(size: 10, weight: .semibold, design: .rounded))
                        }
                        .foregroundStyle(.mint)
                        .frame(maxWidth: .infinity)
                        .padding(.vertical, 6)
                        .background(
                            RoundedRectangle(cornerRadius: 6)
                                .fill(.mint.opacity(isDark ? 0.1 : 0.06))
                                .overlay(
                                    RoundedRectangle(cornerRadius: 6)
                                        .strokeBorder(.mint.opacity(0.2), lineWidth: 1)
                                )
                        )
                    }
                    .buttonStyle(.plain)
                    .accessibilityLabel("Copy event log to clipboard")
                }
            }
        }
    }

    private func eventLogRow(_ entry: MockRCEventLogEntry) -> some View {
        let color: Color = entry.isError ? .red :
            entry.isCancelled ? .orange :
            entry.isSuccess ? .green : .cyan

        let formatter = Self.timeFormatter

        return VStack(alignment: .leading, spacing: 2) {
            HStack(spacing: 4) {
                Text(formatter.string(from: entry.timestamp))
                    .font(.system(size: 9, weight: .medium, design: .monospaced))
                    .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)

                Text(entry.operation)
                    .font(.system(size: 10, weight: .semibold, design: .monospaced))
                    .foregroundStyle(isDark ? .white.opacity(0.8) : .primary)

                Text("→")
                    .font(.system(size: 9, design: .monospaced))
                    .foregroundStyle(isDark ? .white.opacity(0.3) : .secondary)

                Text(entry.result)
                    .font(.system(size: 10, weight: .semibold, design: .monospaced))
                    .foregroundStyle(color)
            }

            if !entry.details.isEmpty {
                Text(entry.details)
                    .font(.system(size: 9, design: .monospaced))
                    .foregroundStyle(isDark ? .white.opacity(0.3) : .secondary)
            }
        }
        .padding(.vertical, 2)
        .padding(.horizontal, 4)
        .frame(maxWidth: .infinity, alignment: .leading)
        .accessibilityElement(children: .combine)
        .accessibilityLabel("\(entry.operation), result: \(entry.result)")
    }

    private static let timeFormatter: DateFormatter = {
        let f = DateFormatter()
        f.dateFormat = "HH:mm:ss"
        return f
    }()

    // MARK: - State Inspector

    private func rcStateInspector(mock: MockRevenueCatService) -> some View {
        GlassPanelWrapper {
            VStack(alignment: .leading, spacing: 12) {
                HStack(spacing: 8) {
                    Image(systemName: "magnifyingglass")
                        .font(.system(size: 14, weight: .semibold))
                        .foregroundStyle(.teal)
                    Text("RC State Inspector")
                        .font(.system(size: 15, weight: .semibold))
                        .foregroundStyle(isDark ? .white : .primary)
                }

                VStack(spacing: 6) {
                    rcStateRow("Service Type", value: "Mock")
                    rcStateRow("Configured", value: mock.isConfigured ? "Yes" : "No")
                    rcStateRow("App User ID", value: String(mock.currentAppUserID.suffix(16)))
                    rcStateRow("Anonymous", value: mock.isAnonymous ? "Yes" : "No")

                    if let info = mock.cachedCustomerInfo {
                        rcStateRow("Active Tier", value: info.highestActiveTier.displayName)
                        rcStateRow("Entitlements", value: info.activeEntitlements.isEmpty
                            ? "None"
                            : info.activeEntitlements.keys.sorted().joined(separator: ", "))
                        rcStateRow("Trial Active", value: info.isTrialActive ? "Yes" : "No")
                        rcStateRow("Billing Issue", value: info.hasBillingIssue ? "Yes" : "No")
                        rcStateRow("Will Renew", value: info.latestExpirationDate.map { $0 > Date.now ? "Yes" : "No" } ?? "—")
                        if let expiry = info.latestExpirationDate {
                            rcStateRow("Expires", value: Self.expiryFormatter.string(from: expiry))
                        }
                    } else {
                        rcStateRow("Customer Info", value: "None")
                    }

                    rcStateRow("SDK Version", value: mock.sdkVersion)
                    rcStateRow("Sandbox", value: mock.isSandbox ? "Yes" : "No")

                    // Subscriber attributes
                    if !mock.subscriberAttributes.isEmpty {
                        Divider().opacity(0.3)
                        Text("Subscriber Attributes")
                            .font(.system(size: 10, weight: .semibold))
                            .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)

                        ForEach(mock.subscriberAttributes.sorted(by: { $0.key < $1.key }), id: \.key) { key, value in
                            rcStateRow(key, value: value)
                        }
                    }
                }
            }
        }
    }

    private func rcStateRow(_ label: String, value: String) -> some View {
        HStack {
            Text(label)
                .font(.system(size: 12, weight: .medium))
                .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
            Spacer()
            Text(value)
                .font(.system(size: 12, weight: .semibold, design: .monospaced))
                .foregroundStyle(isDark ? .white.opacity(0.8) : .primary)
                .lineLimit(1)
        }
    }

    private static let expiryFormatter: DateFormatter = {
        let f = DateFormatter()
        f.dateStyle = .short
        f.timeStyle = .short
        return f
    }()

    // MARK: - Helpers

    private func scenarioColor(_ scenario: MockRCScenario) -> Color {
        switch scenario {
        case .happyPath: .green
        case .userCancelled: .orange
        case .networkError, .offlineMode: .red
        case .paymentDeclined: .red
        case .deferredPurchase: .yellow
        case .alreadySubscribed: .blue
        case .billingFailure: .orange
        case .subscriptionExpired: .gray
        case .refundGranted: .red
        case .trialActive: .cyan
        case .familyShared: .purple
        case .slowNetwork: .yellow
        }
    }
}

#endif
