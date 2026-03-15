#if DEBUG
import SwiftUI

// MARK: - Tier Debug Panel

/// Debug-only panel for switching tiers, toggling feature overrides,
/// and inspecting practice time state. Accessible from Settings.
struct TierDebugView: View {
    @Environment(TierManager.self) private var tierManager
    @Environment(PracticeTimeTracker.self) private var practiceTracker
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.dismiss) private var dismiss

    @State private var trialDateOverride: Date = .now
    @State private var showResetConfirmation = false
    @State private var refreshToggle = false

    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        ScrollView(showsIndicators: false) {
            VStack(spacing: 20) {
                debugHeader

                tierSwitcher

                featureOverrides

                practiceTimeStatus

                trialOverride

                resetSection

                Spacer(minLength: 40)
            }
            .padding(.horizontal, 16)
            .padding(.top, 12)
        }
        .cosmicBackground()
        .navigationTitle("Tier Debug")
        .navigationBarTitleDisplayMode(.inline)
    }

    // MARK: - Header

    private var debugHeader: some View {
        GlassPanelWrapper {
            HStack(spacing: 12) {
                Image(systemName: "ladybug.fill")
                    .font(.system(size: 24))
                    .foregroundStyle(
                        LinearGradient(
                            colors: [.orange, .red],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )

                VStack(alignment: .leading, spacing: 2) {
                    Text("Feature Flag Inspector")
                        .font(.system(size: 16, weight: .bold, design: .rounded))
                        .foregroundStyle(isDark ? .white : .primary)

                    Text("Override features and switch tiers for testing")
                        .font(.system(size: 11))
                        .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
                }

                Spacer()

                if tierManager.hasActiveOverrides {
                    overrideActiveBadge
                }
            }
        }
    }

    private var overrideActiveBadge: some View {
        Text("OVERRIDES ON")
            .font(.system(size: 8, weight: .heavy, design: .rounded))
            .tracking(0.5)
            .padding(.horizontal, 6)
            .padding(.vertical, 3)
            .background(
                Capsule().fill(.orange.opacity(0.2))
            )
            .overlay(
                Capsule().strokeBorder(.orange.opacity(0.4), lineWidth: 1)
            )
            .foregroundStyle(.orange)
    }

    // MARK: - Tier Switcher

    private var tierSwitcher: some View {
        GlassPanelWrapper {
            VStack(alignment: .leading, spacing: 14) {
                sectionHeader(icon: "crown.fill", title: "Active Tier", color: .yellow)

                // Current tier display
                HStack(spacing: 10) {
                    Image(systemName: tierManager.tierIcon)
                        .font(.system(size: 20, weight: .bold))
                        .foregroundStyle(
                            LinearGradient(
                                colors: tierManager.tierGradientColors,
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            )
                        )

                    Text(tierManager.tierDisplayName)
                        .font(.system(size: 18, weight: .bold, design: .rounded))
                        .foregroundStyle(
                            LinearGradient(
                                colors: tierManager.tierGradientColors,
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )

                    Spacer()

                    Text("×\(String(format: "%.2f", tierManager.xpMultiplier)) XP")
                        .font(.system(size: 12, weight: .bold, design: .monospaced))
                        .foregroundStyle(.cyan.opacity(0.8))
                }

                // Tier buttons
                LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible()), GridItem(.flexible())], spacing: 8) {
                    ForEach(MembershipTier.allCases) { tier in
                        tierButton(tier)
                    }
                }
            }
        }
    }

    private func tierButton(_ tier: MembershipTier) -> some View {
        let isSelected = tierManager.currentTier == tier

        return Button {
            withAnimation(.spring(response: 0.3, dampingFraction: 0.7)) {
                tierManager.currentTierId = tier.rawValue
                refreshToggle.toggle()
            }
        } label: {
            VStack(spacing: 4) {
                Image(systemName: tier.iconName)
                    .font(.system(size: 16, weight: .bold))

                Text(tier.displayName)
                    .font(.system(size: 10, weight: .semibold, design: .rounded))
                    .lineLimit(1)

                if isSelected {
                    Image(systemName: "checkmark.circle.fill")
                        .font(.system(size: 10))
                        .foregroundStyle(.green)
                }
            }
            .frame(maxWidth: .infinity)
            .padding(.vertical, 8)
            .padding(.horizontal, 4)
            .foregroundStyle(
                isSelected
                ? AnyShapeStyle(LinearGradient(colors: tier.gradientColors, startPoint: .topLeading, endPoint: .bottomTrailing))
                : AnyShapeStyle(isDark ? .white.opacity(0.6) : .primary.opacity(0.6))
            )
            .background(
                RoundedRectangle(cornerRadius: 12)
                    .fill(isSelected
                          ? tier.gradientColors.first?.opacity(0.15) ?? .clear
                          : (isDark ? .white.opacity(0.04) : .black.opacity(0.03))
                    )
            )
            .overlay(
                RoundedRectangle(cornerRadius: 12)
                    .strokeBorder(
                        isSelected
                        ? tier.gradientColors.first?.opacity(0.4) ?? .clear
                        : .clear,
                        lineWidth: 1
                    )
            )
        }
        .buttonStyle(.plain)
    }

    // MARK: - Feature Overrides

    private var featureOverrides: some View {
        GlassPanelWrapper {
            VStack(alignment: .leading, spacing: 12) {
                sectionHeader(icon: "slider.horizontal.3", title: "Feature Flags", color: .purple)

                Text("Override individual features independent of tier")
                    .font(.system(size: 11))
                    .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)

                ForEach(PremiumFeature.allCases, id: \.self) { feature in
                    featureRow(feature)
                }
            }
            .id(refreshToggle)
        }
    }

    private func featureRow(_ feature: PremiumFeature) -> some View {
        let status = tierManager.effectiveFeatureStatus(for: feature)

        return HStack(spacing: 10) {
            // Status indicator
            Circle()
                .fill(statusColor(status))
                .frame(width: 8, height: 8)

            // Feature icon
            Image(systemName: feature.iconName)
                .font(.system(size: 14))
                .foregroundStyle(status.isEnabled ? .white : .white.opacity(0.3))
                .frame(width: 20)

            // Feature name
            VStack(alignment: .leading, spacing: 1) {
                Text(feature.displayName)
                    .font(.system(size: 13, weight: .medium))
                    .foregroundStyle(isDark ? .white.opacity(status.isEnabled ? 0.9 : 0.4) : .primary.opacity(status.isEnabled ? 1.0 : 0.4))

                Text(statusLabel(status))
                    .font(.system(size: 9, weight: .medium, design: .monospaced))
                    .foregroundStyle(statusColor(status).opacity(0.8))
            }

            Spacer()

            // Min tier badge
            Text(feature.minimumTier.displayName)
                .font(.system(size: 9, weight: .bold, design: .rounded))
                .padding(.horizontal, 6)
                .padding(.vertical, 2)
                .background(
                    Capsule().fill(feature.minimumTier.gradientColors.first?.opacity(0.15) ?? .clear)
                )
                .foregroundStyle(feature.minimumTier.gradientColors.first ?? .gray)

            // Override toggle
            Menu {
                Button {
                    tierManager.setFeatureOverride(nil, for: feature)
                    refreshToggle.toggle()
                } label: {
                    Label("Use Tier Default", systemImage: "arrow.uturn.backward")
                }

                Button {
                    tierManager.setFeatureOverride(true, for: feature)
                    refreshToggle.toggle()
                } label: {
                    Label("Force Enable", systemImage: "checkmark.circle")
                }

                Button {
                    tierManager.setFeatureOverride(false, for: feature)
                    refreshToggle.toggle()
                } label: {
                    Label("Force Disable", systemImage: "xmark.circle")
                }
            } label: {
                Image(systemName: status.isOverridden ? "gearshape.fill" : "gearshape")
                    .font(.system(size: 14))
                    .foregroundStyle(status.isOverridden ? .orange : (isDark ? .white.opacity(0.3) : .secondary))
            }
        }
        .padding(.vertical, 4)
    }

    private func statusColor(_ status: TierManager.FeatureStatus) -> Color {
        switch status {
        case .natural(let enabled):    return enabled ? .green : .red
        case .overridden(let enabled): return enabled ? .orange : .red
        }
    }

    private func statusLabel(_ status: TierManager.FeatureStatus) -> String {
        switch status {
        case .natural(let enabled):    return enabled ? "ENABLED" : "DISABLED"
        case .overridden(let enabled): return enabled ? "OVERRIDE: ON" : "OVERRIDE: OFF"
        }
    }

    // MARK: - Practice Time Status

    private var practiceTimeStatus: some View {
        GlassPanelWrapper {
            VStack(alignment: .leading, spacing: 12) {
                sectionHeader(icon: "timer", title: "Practice Time", color: .cyan)

                let isLimited = practiceTracker.isLimited(for: tierManager.currentTier)

                HStack(spacing: 16) {
                    practiceMetric(
                        label: "Used",
                        value: formatTime(practiceTracker.usedSecondsToday),
                        color: .blue
                    )

                    practiceMetric(
                        label: "Remaining",
                        value: isLimited
                            ? formatTime(max(0, PracticeTimeTracker.dailyLimitSeconds - practiceTracker.usedSecondsToday))
                            : "∞",
                        color: .green
                    )

                    practiceMetric(
                        label: "Status",
                        value: statusText(isLimited: isLimited),
                        color: statusTextColor(isLimited: isLimited)
                    )
                }

                if isLimited {
                    // Progress bar
                    GeometryReader { geo in
                        ZStack(alignment: .leading) {
                            RoundedRectangle(cornerRadius: 4)
                                .fill(isDark ? .white.opacity(0.08) : .black.opacity(0.06))

                            RoundedRectangle(cornerRadius: 4)
                                .fill(progressColor)
                                .frame(width: geo.size.width * practiceTracker.dailyProgress)
                        }
                    }
                    .frame(height: 6)

                    HStack {
                        Text("Reset in: \(practiceTracker.resetCountdownDisplay)")
                            .font(.system(size: 10, design: .monospaced))
                            .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)

                        Spacer()

                        Text("\(Int(practiceTracker.dailyProgress * 100))%")
                            .font(.system(size: 10, weight: .bold, design: .monospaced))
                            .foregroundStyle(progressColor)
                    }
                } else {
                    Text("Unlimited practice — no time tracking")
                        .font(.system(size: 11))
                        .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)
                }
            }
        }
    }

    private var progressColor: Color {
        if practiceTracker.isExpired { return .red }
        if practiceTracker.dailyProgress > 0.83 { return .orange }
        return .cyan
    }

    private func formatTime(_ seconds: Int) -> String {
        let m = seconds / 60
        let s = seconds % 60
        return String(format: "%02d:%02d", m, s)
    }

    private func statusText(isLimited: Bool) -> String {
        if !isLimited { return "Unlimited" }
        if practiceTracker.isExpired { return "Expired" }
        if practiceTracker.isTracking { return "Active" }
        return "Idle"
    }

    private func statusTextColor(isLimited: Bool) -> Color {
        if !isLimited { return .green }
        if practiceTracker.isExpired { return .red }
        if practiceTracker.isTracking { return .cyan }
        return .gray
    }

    private func practiceMetric(label: String, value: String, color: Color) -> some View {
        VStack(spacing: 4) {
            Text(value)
                .font(.system(size: 16, weight: .bold, design: .monospaced))
                .foregroundStyle(color)

            Text(label)
                .font(.system(size: 9, weight: .medium))
                .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)
        }
        .frame(maxWidth: .infinity)
    }

    // MARK: - Trial Override

    private var trialOverride: some View {
        GlassPanelWrapper {
            VStack(alignment: .leading, spacing: 12) {
                sectionHeader(icon: "calendar.badge.clock", title: "Trial Date Override", color: .orange)

                Text("Set a custom trial start date to test expiry scenarios")
                    .font(.system(size: 11))
                    .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)

                DatePicker(
                    "Trial Start",
                    selection: $trialDateOverride,
                    displayedComponents: [.date]
                )
                .datePickerStyle(.compact)
                .tint(.orange)
                .font(.system(size: 13))

                HStack(spacing: 10) {
                    Button {
                        // Set trial to 13 days ago (1 day left)
                        trialDateOverride = Calendar.current.date(byAdding: .day, value: -13, to: .now)!
                    } label: {
                        debugActionButton(label: "1 Day Left", color: .orange)
                    }

                    Button {
                        // Set trial to 14 days ago (expired)
                        trialDateOverride = Calendar.current.date(byAdding: .day, value: -14, to: .now)!
                    } label: {
                        debugActionButton(label: "Expired", color: .red)
                    }

                    Button {
                        // Set trial to today (fresh)
                        trialDateOverride = .now
                    } label: {
                        debugActionButton(label: "Fresh", color: .green)
                    }
                }

                Text("Note: Apply via UserProfile.trialStartDate in code")
                    .font(.system(size: 9))
                    .foregroundStyle(isDark ? .white.opacity(0.3) : .secondary)
            }
        }
    }

    // MARK: - Reset Section

    private var resetSection: some View {
        GlassPanelWrapper {
            VStack(spacing: 12) {
                sectionHeader(icon: "arrow.counterclockwise", title: "Reset", color: .red)

                Button {
                    showResetConfirmation = true
                } label: {
                    HStack(spacing: 8) {
                        Image(systemName: "trash.fill")
                            .font(.system(size: 13))
                        Text("Clear All Overrides")
                            .font(.system(size: 14, weight: .semibold))
                    }
                    .foregroundStyle(.red)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 12)
                    .background(
                        RoundedRectangle(cornerRadius: 12)
                            .fill(.red.opacity(isDark ? 0.1 : 0.06))
                            .overlay(
                                RoundedRectangle(cornerRadius: 12)
                                    .strokeBorder(.red.opacity(0.2), lineWidth: 1)
                            )
                    )
                }
                .buttonStyle(.plain)
                .alert("Clear All Overrides?", isPresented: $showResetConfirmation) {
                    Button("Cancel", role: .cancel) {}
                    Button("Clear All", role: .destructive) {
                        tierManager.clearAllOverrides()
                        refreshToggle.toggle()
                    }
                } message: {
                    Text("All feature overrides will be removed and features will revert to tier defaults.")
                }
            }
        }
    }

    // MARK: - Helpers

    private func sectionHeader(icon: String, title: String, color: Color) -> some View {
        HStack(spacing: 8) {
            Image(systemName: icon)
                .font(.system(size: 14, weight: .semibold))
                .foregroundStyle(color)

            Text(title)
                .font(.system(size: 15, weight: .semibold))
                .foregroundStyle(isDark ? .white : .primary)
        }
    }

    private func debugActionButton(label: String, color: Color) -> some View {
        Text(label)
            .font(.system(size: 11, weight: .semibold, design: .rounded))
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
}
#endif
