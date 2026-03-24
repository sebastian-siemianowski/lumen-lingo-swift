#if DEBUG
import SwiftUI
import SwiftData

// MARK: - QA Panel

/// Debug-only panel for switching tiers, toggling feature overrides,
/// and inspecting practice time state. Accessible from Settings.
struct QAPanelView: View {
    @Environment(TierManager.self) private var tierManager
    @Environment(PracticeTimeTracker.self) private var practiceTracker
    @Environment(SessionEngine.self) private var sessionEngine
    @Environment(\.authService) private var authService
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.modelContext) private var modelContext
    @Environment(\.dismiss) private var dismiss

    @Query private var profiles: [UserProfile]
    @Query private var languagePrefs: [LanguagePreference]

    @State private var trialDateOverride: Date = .now
    @State private var showResetConfirmation = false
    @State private var showClearProgressConfirmation = false
    @State private var showResetAuthConfirmation = false
    @State private var showMockUserEditor = false
    @State private var showMockSignInSheet = false
    @State private var showGuestMigrationSheet = false
    @State private var syncResultMessage: String? = nil
    @State private var isWalkingGates = false
    @State private var walkingGateLabel: String? = nil
    @State private var refreshToggle = false

    private var profile: UserProfile? { profiles.first }
    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        ScrollView(showsIndicators: false) {
            VStack(spacing: 20) {
                debugHeader

                tierSwitcher

                revenueCatSimulation

                authSimulation

                featureOverrides

                networkSimulation

                contentSimulation

                languagePairSection

                stateInspector

                sessionHealthSection

                performanceSection

                practiceTimeStatus

                onboardingToggle

                trialOverride

                hapticsTest

                resetSection

                Spacer(minLength: 40)
            }
            .padding(.horizontal, 16)
            .padding(.top, 12)
        }
        .cosmicBackground()
        .navigationTitle("QA Panel")
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
                    Text("QA Panel")
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

    private var revenueCatSimulation: some View {
        QARevenueCatSection()
    }

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

    // MARK: - Network Simulation

    private var networkSimulation: some View {
        GlassPanelWrapper {
            VStack(alignment: .leading, spacing: 12) {
                HStack {
                    sectionHeader(icon: "wifi.exclamationmark", title: "Network Simulation", color: .red)

                    Spacer()

                    if DebugNetworkController.shared.isSimulating {
                        Text(DebugNetworkController.shared.simulationMode.statusLabel)
                            .font(.system(size: 9, weight: .heavy, design: .rounded))
                            .padding(.horizontal, 6)
                            .padding(.vertical, 3)
                            .background(Capsule().fill(.red.opacity(0.2)))
                            .overlay(Capsule().strokeBorder(.red.opacity(0.4), lineWidth: 1))
                            .foregroundStyle(.red)
                    }
                }

                LazyVGrid(columns: [
                    GridItem(.flexible()),
                    GridItem(.flexible()),
                ], spacing: 8) {
                    ForEach(NetworkSimulationMode.allCases, id: \.self) { mode in
                        Button {
                            withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                                DebugNetworkController.shared.simulationMode = mode
                            }
                        } label: {
                            Text(mode.rawValue)
                                .font(.system(size: 12, weight: .semibold, design: .rounded))
                                .foregroundStyle(DebugNetworkController.shared.simulationMode == mode
                                    ? .white
                                    : (isDark ? .white.opacity(0.6) : .primary))
                                .frame(maxWidth: .infinity)
                                .padding(.vertical, 8)
                                .background(
                                    RoundedRectangle(cornerRadius: 8, style: .continuous)
                                        .fill(DebugNetworkController.shared.simulationMode == mode
                                            ? modeColor(mode).opacity(0.7)
                                            : (isDark ? .white.opacity(0.06) : .black.opacity(0.04)))
                                )
                                .overlay(
                                    RoundedRectangle(cornerRadius: 8, style: .continuous)
                                        .strokeBorder(DebugNetworkController.shared.simulationMode == mode
                                            ? modeColor(mode).opacity(0.5)
                                            : .clear, lineWidth: 1)
                                )
                        }
                    }
                }

                Text("Affects all network calls. Resets on relaunch.")
                    .font(.system(size: 10))
                    .foregroundStyle(isDark ? .white.opacity(0.3) : .secondary)
            }
        }
    }

    private func modeColor(_ mode: NetworkSimulationMode) -> Color {
        switch mode {
        case .normal: return .green
        case .offline: return .red
        case .slow: return .yellow
        case .intermittent: return .orange
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

    // MARK: - Onboarding Toggle

    private var onboardingToggle: some View {
        GlassPanelWrapper {
            VStack(alignment: .leading, spacing: 12) {
                sectionHeader(icon: "hand.wave.fill", title: "Onboarding", color: .mint)

                let hasSeen = UserDefaults.standard.bool(forKey: "hasSeenTierOnboarding")

                HStack(spacing: 10) {
                    Circle()
                        .fill(hasSeen ? .green : .orange)
                        .frame(width: 8, height: 8)

                    Text(hasSeen ? "Onboarding completed" : "Onboarding will show on next launch")
                        .font(.system(size: 13, weight: .medium))
                        .foregroundStyle(isDark ? .white.opacity(0.8) : .primary)

                    Spacer()

                    Toggle("", isOn: Binding(
                        get: { UserDefaults.standard.bool(forKey: "hasSeenTierOnboarding") },
                        set: { newValue in
                            UserDefaults.standard.set(newValue, forKey: "hasSeenTierOnboarding")
                            refreshToggle.toggle()
                        }
                    ))
                    .labelsHidden()
                    .tint(.mint)
                }

                Text(hasSeen
                     ? "Turn off to re-show tier onboarding on next launch"
                     : "Turn on to skip onboarding on next launch")
                    .font(.system(size: 11))
                    .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)
            }
            .id(refreshToggle)
        }
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

    // MARK: - Haptics Test

    private var hapticsTest: some View {
        GlassPanelWrapper {
            VStack(spacing: 12) {
                sectionHeader(icon: "iphone.radiowaves.left.and.right", title: "Haptics Test", color: .pink)

                let haptics = HapticsService.shared
                Text("enabled: \(haptics.isEnabled ? "YES" : "NO")")
                    .font(.system(size: 11, design: .monospaced))
                    .foregroundStyle(haptics.isEnabled ? .green : .red)
                    .frame(maxWidth: .infinity, alignment: .leading)

                HStack(spacing: 8) {
                    Button {
                        haptics.correctAnswer()
                    } label: {
                        debugActionButton(icon: "checkmark.circle.fill", label: "Correct", color: .green)
                    }

                    Button {
                        haptics.wrongAnswer()
                    } label: {
                        debugActionButton(icon: "xmark.circle.fill", label: "Wrong", color: .red)
                    }

                    Button {
                        haptics.celebrate()
                    } label: {
                        debugActionButton(icon: "party.popper.fill", label: "Celebrate", color: .purple)
                    }
                }

                HStack(spacing: 8) {
                    Button {
                        haptics.buttonPress()
                    } label: {
                        debugActionButton(icon: "hand.tap.fill", label: "Button", color: .cyan)
                    }

                    Button {
                        haptics.tilePick()
                    } label: {
                        debugActionButton(icon: "square.grid.2x2.fill", label: "Tile", color: .orange)
                    }

                    Button {
                        haptics.perfectScore()
                    } label: {
                        debugActionButton(icon: "star.fill", label: "Perfect", color: .yellow)
                    }
                }
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

                Button {
                    showClearProgressConfirmation = true
                } label: {
                    debugActionButton(label: "Clear All Progress", color: .red)
                }
                .buttonStyle(.plain)
                .confirmationDialog("Clear All Progress?", isPresented: $showClearProgressConfirmation, titleVisibility: .visible) {
                    Button("Delete All Records", role: .destructive) {
                        clearAllProgress()
                    }
                    Button("Cancel", role: .cancel) {}
                } message: {
                    Text("This will delete all game progress records. This action cannot be undone.")
                }

                Button {
                    resetOnboarding()
                } label: {
                    debugActionButton(label: "Reset Onboarding", color: .orange)
                }
                .buttonStyle(.plain)

                Button {
                    generateSampleData()
                } label: {
                    debugActionButton(label: "Generate Sample Data", color: .blue)
                }
                .buttonStyle(.plain)

                Button {
                    sessionEngine.resetDailyGoal()
                    refreshToggle.toggle()
                } label: {
                    debugActionButton(label: "Reset Daily Goal (\(sessionEngine.roundsCompletedToday)/\(sessionEngine.dailyGoal))", color: .mint)
                }
                .buttonStyle(.plain)
            }
        }
    }

    private func clearAllProgress() {
        do {
            try modelContext.delete(model: GameProgressRecord.self)
            if let profile {
                profile.totalXP = 0
                profile.dailyStreak = 0
                profile.totalActiveDays = 0
                profile.lastActivityDate = nil
            }
        } catch {
            print("Debug: Failed to clear progress: \(error)")
        }
    }

    private func resetOnboarding() {
        UserDefaults.standard.set(false, forKey: "hasSeenTierOnboarding")
    }

    private func generateSampleData() {
        let gameTypes: [GameType] = [.flashCards, .grammar, .wordBuilder]
        let categories = [
            "greetings_basics", "family_members", "food_and_drinks",
            "colors_and_shapes", "daily_routines", "travel_essentials"
        ]
        let sourceLang = languagePrefs.first?.sourceLanguage ?? "english"
        let targetLang = languagePrefs.first?.targetLanguage ?? "spanish"

        for i in 0..<50 {
            let record = GameProgressRecord(
                gameType: gameTypes[i % gameTypes.count],
                level: categories[i % categories.count],
                score: Int.random(in: 400...1000),
                correctAnswers: Int.random(in: 5...10),
                totalQuestions: 10,
                timeSpent: Int.random(in: 60...300),
                sourceLanguage: sourceLang,
                targetLanguage: targetLang,
                createdDate: Date.now.addingTimeInterval(-Double(i) * 86400 * 0.5)
            )
            modelContext.insert(record)
        }

        if let profile {
            profile.totalXP += 5000
            profile.totalActiveDays += 25
            profile.dailyStreak = 7
            profile.lastActivityDate = Date.now
        }
    }

    // MARK: - Content Simulation

    private var contentSimulation: some View {
        GlassPanelWrapper {
            VStack(alignment: .leading, spacing: 12) {
                HStack {
                    sectionHeader(icon: "doc.text.magnifyingglass", title: "Content Simulation", color: .purple)

                    Spacer()

                    if DebugContentController.shared.isSimulating {
                        Text("ACTIVE")
                            .font(.system(size: 8, weight: .heavy, design: .rounded))
                            .tracking(0.5)
                            .padding(.horizontal, 6)
                            .padding(.vertical, 3)
                            .background(Capsule().fill(.purple.opacity(0.2)))
                            .overlay(Capsule().strokeBorder(.purple.opacity(0.4), lineWidth: 1))
                            .foregroundStyle(.purple)
                    }
                }

                Toggle(isOn: Bindable(DebugContentController.shared).forceEmpty) {
                    VStack(alignment: .leading, spacing: 1) {
                        Text("Force Empty Content")
                            .font(.system(size: 13, weight: .medium))
                            .foregroundStyle(isDark ? .white : .primary)
                        Text("ContentLoader returns empty arrays")
                            .font(.system(size: 10))
                            .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)
                    }
                }
                .tint(.purple)

                Toggle(isOn: Bindable(DebugContentController.shared).forceSlowLoad) {
                    VStack(alignment: .leading, spacing: 1) {
                        Text("Force Slow Load")
                            .font(.system(size: 13, weight: .medium))
                            .foregroundStyle(isDark ? .white : .primary)
                        Text("3s delay on every content load")
                            .font(.system(size: 10))
                            .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)
                    }
                }
                .tint(.purple)
            }
        }
    }

    // MARK: - Language Pair Section

    private var languagePairSection: some View {
        GlassPanelWrapper {
            VStack(alignment: .leading, spacing: 12) {
                sectionHeader(icon: "globe", title: "Language Pair", color: .blue)

                if let pref = languagePrefs.first {
                    Text("\(pref.sourceLanguage) → \(pref.targetLanguage)")
                        .font(.system(size: 12, weight: .medium, design: .monospaced))
                        .foregroundStyle(isDark ? .white.opacity(0.6) : .secondary)
                }

                let targets = SupportedLanguage.allCases.filter { $0 != .english }

                LazyVGrid(columns: [
                    GridItem(.flexible()),
                    GridItem(.flexible()),
                    GridItem(.flexible()),
                    GridItem(.flexible()),
                ], spacing: 8) {
                    ForEach(targets) { lang in
                        let isActive = languagePrefs.first?.targetLanguage == lang.rawValue
                        Button {
                            switchLanguagePair(to: lang)
                        } label: {
                            VStack(spacing: 2) {
                                CountryFlagView(countryCode: lang.countryCode, size: 16)
                                Text(lang.rawValue.prefix(3).uppercased())
                                    .font(.system(size: 8, weight: .bold, design: .monospaced))
                                    .foregroundStyle(isActive ? .white : (isDark ? .white.opacity(0.5) : .secondary))
                            }
                            .frame(maxWidth: .infinity)
                            .padding(.vertical, 6)
                            .background(
                                RoundedRectangle(cornerRadius: 8, style: .continuous)
                                    .fill(isActive ? .blue.opacity(0.6) : (isDark ? .white.opacity(0.06) : .black.opacity(0.04)))
                            )
                            .overlay(
                                RoundedRectangle(cornerRadius: 8, style: .continuous)
                                    .strokeBorder(isActive ? .blue.opacity(0.5) : .clear, lineWidth: 1)
                            )
                        }
                    }
                }
            }
        }
    }

    private func switchLanguagePair(to target: SupportedLanguage) {
        if let pref = languagePrefs.first {
            pref.sourceLanguage = SupportedLanguage.english.rawValue
            pref.targetLanguage = target.rawValue
        } else {
            let pref = LanguagePreference()
            pref.sourceLanguage = SupportedLanguage.english.rawValue
            pref.targetLanguage = target.rawValue
            modelContext.insert(pref)
        }
        ContentLoader.shared.clearCache()
    }

    // MARK: - State Inspector

    private var stateInspector: some View {
        GlassPanelWrapper {
            VStack(alignment: .leading, spacing: 12) {
                sectionHeader(icon: "magnifyingglass", title: "State Inspector", color: .teal)

                VStack(spacing: 6) {
                    stateRow("Tier", value: tierManager.currentTier.displayName)
                    stateRow("XP", value: "\(profile?.totalXP ?? 0)")
                    stateRow("Streak", value: "\(profile?.dailyStreak ?? 0) days")
                    stateRow("Active Days", value: "\(profile?.totalActiveDays ?? 0)")
                    stateRow("Practice Used", value: formatTime(practiceTracker.usedSecondsToday))
                    stateRow("Practice Remaining", value: practiceTracker.isLimited(for: tierManager.currentTier)
                        ? formatTime(max(0, PracticeTimeTracker.dailyLimitSeconds - practiceTracker.usedSecondsToday))
                        : "Unlimited")
                    stateRow("Offline Mode", value: profile?.offlineModeEnabled == true ? "Enabled" : "Disabled")
                    stateRow("Breathing Orbs", value: profile?.breathingOrbsEnabled == true ? "On" : "Off")
                    stateRow("Quantum Flow", value: profile?.quantumFlowEnabled == true ? "On" : "Off")
                    stateRow("Nebula Drift", value: profile?.nebulaDriftEnabled == true ? "On" : "Off")
                }
            }
        }
    }

    private func stateRow(_ label: String, value: String) -> some View {
        HStack {
            Text(label)
                .font(.system(size: 12, weight: .medium))
                .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
            Spacer()
            Text(value)
                .font(.system(size: 12, weight: .semibold, design: .monospaced))
                .foregroundStyle(isDark ? .white.opacity(0.8) : .primary)
        }
    }

    // MARK: - Session Health

    private var sessionHealthSection: some View {
        GlassPanelWrapper {
            VStack(alignment: .leading, spacing: 12) {
                sectionHeader(icon: "lock.shield", title: "Session Health", color: .cyan)

                VStack(spacing: 6) {
                    stateRow("Authenticated", value: authService.isAuthenticated ? "Yes" : "No")
                    stateRow("Guest Mode", value: authService.isGuestMode ? "Yes" : "No")
                    stateRow("User", value: authService.currentUser?.name ?? "—")
                    stateRow("Last Method", value: authService.lastSignInMethod?.displayName ?? "—")
                    stateRow("Session Status", value: authService.sessionExpiredReason?.rawValue ?? "active")
                    stateRow("Linked IDs", value: authService.linkedIdentities.map(\.displayName).sorted().joined(separator: ", "))
                }
            }
        }
    }

    // MARK: - Performance

    private var performanceSection: some View {
        GlassPanelWrapper {
            VStack(alignment: .leading, spacing: 12) {
                sectionHeader(icon: "gauge.with.dots.needle.33percent", title: "Performance", color: .green)

                HStack(spacing: 20) {
                    VStack(spacing: 4) {
                        Text("\(PerformanceMonitor.shared.fps)")
                            .font(.system(size: 28, weight: .bold, design: .monospaced))
                            .foregroundStyle(fpsColor)
                        Text("FPS")
                            .font(.system(size: 10, weight: .medium))
                            .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)
                    }
                    .frame(maxWidth: .infinity)

                    VStack(spacing: 4) {
                        Text(String(format: "%.0f", PerformanceMonitor.shared.memoryMB))
                            .font(.system(size: 28, weight: .bold, design: .monospaced))
                            .foregroundStyle(isDark ? .white : .primary)
                        Text("MB RAM")
                            .font(.system(size: 10, weight: .medium))
                            .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)
                    }
                    .frame(maxWidth: .infinity)
                }
            }
        }
        .onAppear { PerformanceMonitor.shared.start() }
        .onDisappear { PerformanceMonitor.shared.stop() }
    }

    private var fpsColor: Color {
        let fps = PerformanceMonitor.shared.fps
        if fps >= 55 { return .green }
        if fps >= 30 { return .yellow }
        return .red
    }

    // MARK: - Auth Simulation

    private var authSimulation: some View {
        GlassPanelWrapper {
            VStack(alignment: .leading, spacing: 14) {
                // Header with active-state badge
                HStack {
                    sectionHeader(icon: "lock.shield.fill", title: "Auth Simulation", color: .cyan)

                    Spacer()

                    if DebugAuthController.shared.isSimulating {
                        Text(DebugAuthController.shared.activeOverride.label)
                            .font(.system(size: 9, weight: .heavy, design: .rounded))
                            .padding(.horizontal, 6)
                            .padding(.vertical, 3)
                            .background(Capsule().fill(.cyan.opacity(0.2)))
                            .overlay(Capsule().strokeBorder(.cyan.opacity(0.4), lineWidth: 1))
                            .foregroundStyle(.cyan)
                    }
                }

                // Quick State Picker — horizontal scroll of pill buttons
                ScrollView(.horizontal, showsIndicators: false) {
                    HStack(spacing: 6) {
                        ForEach(DebugAuthState.allCases) { state in
                            authStatePill(state)
                        }
                    }
                    .padding(.vertical, 2)
                }

                // Mock User Card
                mockUserCard

                // Expandable Mock User Editor (Story 0.3)
                if showMockUserEditor {
                    mockUserEditorForm
                }

                // Linked identity provider pills
                linkedIdentityPills

                // Latency Slider
                VStack(alignment: .leading, spacing: 4) {
                    Text("Auth Latency: \(String(format: "%.1f", DebugAuthController.shared.simulatedLatency))s")
                        .font(.system(size: 11, weight: .medium, design: .rounded))
                        .foregroundStyle(isDark ? .white.opacity(0.7) : .secondary)

                    Slider(
                        value: Binding(
                            get: { DebugAuthController.shared.simulatedLatency },
                            set: { DebugAuthController.shared.simulatedLatency = $0 }
                        ),
                        in: 0...5,
                        step: 0.5
                    )
                    .tint(.cyan)
                }

                // Token Refresh Failure Toggle
                Toggle(isOn: Binding(
                    get: { DebugAuthController.shared.shouldSimulateTokenRefreshFailure },
                    set: { DebugAuthController.shared.shouldSimulateTokenRefreshFailure = $0 }
                )) {
                    Text("Force Token Refresh Failure")
                        .font(.system(size: 12, weight: .medium, design: .rounded))
                        .foregroundStyle(isDark ? .white.opacity(0.8) : .primary)
                }
                .tint(.red)

                // Sign-in Flow Simulation (Story 0.4)
                signInFlowSimulation

                // Session & Token Simulation (Story 0.6)
                sessionSimulation

                // Profile Sync Simulation (Story 0.7)
                syncSimulation

                // Auth Feature Gating (Story 0.8)
                authFeatureGating

                // Reset Button
                Button {
                    showResetAuthConfirmation = true
                } label: {
                    debugActionButton(icon: "arrow.counterclockwise", label: "Reset Auth Overrides", color: .orange)
                }
                .buttonStyle(.plain)
                .alert("Reset Auth Overrides?", isPresented: $showResetAuthConfirmation) {
                    Button("Reset", role: .destructive) {
                        withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                            DebugAuthController.shared.resetAllOverrides()
                        }
                    }
                    Button("Cancel", role: .cancel) {}
                } message: {
                    Text("Reset all auth simulation settings to defaults?")
                }
            }
        }
    }

    private func authStatePill(_ state: DebugAuthState) -> some View {
        let isSelected = DebugAuthController.shared.activeOverride == state
        let isNone = state == .none

        return Button {
            withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                DebugAuthController.shared.activeOverride = state
            }
        } label: {
            Text(state.label)
                .font(.system(size: 11, weight: .semibold, design: .rounded))
                .lineLimit(1)
                .padding(.horizontal, 10)
                .padding(.vertical, 6)
                .foregroundStyle(
                    isSelected
                    ? .white
                    : (isNone
                       ? (isDark ? .white.opacity(0.4) : .secondary)
                       : (isDark ? .white.opacity(0.7) : .primary))
                )
                .background(
                    Capsule()
                        .fill(isSelected
                              ? .cyan.opacity(0.7)
                              : (isNone
                                 ? (isDark ? .white.opacity(0.04) : .black.opacity(0.03))
                                 : (isDark ? .white.opacity(0.06) : .black.opacity(0.04))))
                )
                .overlay(
                    Capsule()
                        .strokeBorder(
                            isSelected ? .cyan.opacity(0.5) : .clear,
                            lineWidth: 1
                        )
                )
        }
        .buttonStyle(.plain)
    }

    private var mockUserCard: some View {
        Button {
            withAnimation(.spring(response: 0.35, dampingFraction: 0.8)) {
                showMockUserEditor.toggle()
            }
        } label: {
            HStack(spacing: 10) {
                // Avatar circle
                ZStack {
                    Circle()
                        .fill(
                            LinearGradient(
                                colors: [.cyan.opacity(0.3), .purple.opacity(0.3)],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            )
                        )
                        .frame(width: 40, height: 40)

                    if DebugAuthController.shared.mockUser.displayName.isEmpty {
                        Image(systemName: "person.fill")
                            .font(.system(size: 16, weight: .medium))
                            .foregroundStyle(.white.opacity(0.5))
                    } else {
                        Text(String(DebugAuthController.shared.mockUser.displayName.prefix(2)).uppercased())
                            .font(.system(size: 14, weight: .bold, design: .rounded))
                            .foregroundStyle(.white)
                    }
                }

                VStack(alignment: .leading, spacing: 2) {
                    Text(DebugAuthController.shared.mockUser.displayName.isEmpty
                         ? "(No Name)"
                         : DebugAuthController.shared.mockUser.displayName)
                        .font(.system(size: 13, weight: .semibold, design: .rounded))
                        .foregroundStyle(isDark ? .white : .primary)

                    Text(DebugAuthController.shared.mockUser.email.isEmpty
                         ? "(No Email)"
                         : DebugAuthController.shared.mockUser.email)
                        .font(.system(size: 11, weight: .regular, design: .rounded))
                        .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
                }

                Spacer()

                // Tier Badge
                HStack(spacing: 3) {
                    Image(systemName: DebugAuthController.shared.mockUser.tier.iconName)
                        .font(.system(size: 10, weight: .bold))
                    Text(DebugAuthController.shared.mockUser.tier.displayName)
                        .font(.system(size: 10, weight: .bold, design: .rounded))
                }
                .foregroundStyle(
                    LinearGradient(
                        colors: DebugAuthController.shared.mockUser.tier.gradientColors,
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .padding(.horizontal, 6)
                .padding(.vertical, 3)
                .background(
                    Capsule()
                        .fill(DebugAuthController.shared.mockUser.tier.gradientColors.first?.opacity(0.15) ?? .clear)
                )
                .overlay(
                    Capsule()
                        .strokeBorder(DebugAuthController.shared.mockUser.tier.gradientColors.first?.opacity(0.3) ?? .clear, lineWidth: 1)
                )

                Image(systemName: showMockUserEditor ? "chevron.up" : "chevron.down")
                    .font(.system(size: 10, weight: .bold))
                    .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)
            }
            .padding(10)
            .background(
                RoundedRectangle(cornerRadius: 12, style: .continuous)
                    .fill(isDark ? .white.opacity(0.04) : .black.opacity(0.03))
            )
            .overlay(
                RoundedRectangle(cornerRadius: 12, style: .continuous)
                    .strokeBorder(isDark ? .white.opacity(0.08) : .black.opacity(0.06), lineWidth: 1)
            )
        }
        .buttonStyle(.plain)
    }

    // MARK: - Auth Feature Gating (Story 0.8)

    private var authFeatureGating: some View {
        VStack(alignment: .leading, spacing: 10) {
            HStack(spacing: 6) {
                Image(systemName: "lock.shield.fill")
                    .font(.system(size: 11, weight: .semibold))
                    .foregroundStyle(.purple)
                Text("Auth Feature Gating")
                    .font(.system(size: 12, weight: .semibold, design: .rounded))
                    .foregroundStyle(isDark ? .white.opacity(0.8) : .primary)
            }

            // Gating Matrix
            gatingMatrix

            // Quick Auth + Tier Combos
            VStack(alignment: .leading, spacing: 4) {
                Text("Quick Combos")
                    .font(.system(size: 10, weight: .semibold, design: .rounded))
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)

                LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible())], spacing: 6) {
                    comboButton(label: "Guest Free", authState: .guestMode, tier: .free, color: .gray)
                    comboButton(label: "Authed Free", authState: .authenticated, tier: .free, color: .green)
                    comboButton(label: "Authed Pro", authState: .authenticated, tier: .pro, color: .blue)
                    comboButton(label: "Expired Elite", authState: .sessionExpired, tier: .elite, color: .orange)
                    comboButton(label: "Suspended Royal", authState: .accountSuspended, tier: .royal, color: .red)
                }
            }

            // Walk All Gates
            sessionButton(label: isWalkingGates ? "Walking…" : "Walk All Gates", icon: "figure.walk.motion", color: .purple) {
                guard !isWalkingGates else { return }
                walkAllGates()
            }
            .opacity(isWalkingGates ? 0.6 : 1)

            if let gateLabel = walkingGateLabel {
                Text(gateLabel)
                    .font(.system(size: 10, weight: .medium, design: .rounded))
                    .foregroundStyle(.purple.opacity(0.8))
                    .transition(.opacity)
            }
        }
        .padding(10)
        .background(
            RoundedRectangle(cornerRadius: 12, style: .continuous)
                .fill(isDark ? .white.opacity(0.03) : .black.opacity(0.02))
        )
        .overlay(
            RoundedRectangle(cornerRadius: 12, style: .continuous)
                .strokeBorder(.purple.opacity(0.15), lineWidth: 1)
        )
    }

    private struct GatedFeature {
        let name: String
        let icon: String
        let accessByTier: [MembershipTier: String] // tier -> access description
        let requiresAuth: Bool
    }

    private var gatedFeatures: [GatedFeature] {
        [
            GatedFeature(name: "Flashcards", icon: "rectangle.stack.fill",
                         accessByTier: [.free: "50", .pro: "∞", .elite: "∞", .royal: "∞", .trial: "∞"],
                         requiresAuth: false),
            GatedFeature(name: "Soundscapes", icon: "headphones",
                         accessByTier: [.pro: "✓", .elite: "✓", .royal: "✓", .trial: "✓"],
                         requiresAuth: true),
            GatedFeature(name: "iCloud Sync", icon: "icloud",
                         accessByTier: [.free: "✓", .pro: "✓", .elite: "✓", .royal: "✓", .trial: "✓"],
                         requiresAuth: true),
            GatedFeature(name: "Profile Edit", icon: "person.crop.circle",
                         accessByTier: [.free: "✓", .pro: "✓", .elite: "✓", .royal: "✓", .trial: "✓"],
                         requiresAuth: true),
            GatedFeature(name: "Leaderboard", icon: "chart.bar.fill",
                         accessByTier: [.free: "✓", .pro: "✓", .elite: "✓", .royal: "✓", .trial: "✓"],
                         requiresAuth: true),
        ]
    }

    private var gatingMatrix: some View {
        let currentAuth = DebugAuthController.shared.activeOverride
        let isUnauthed = currentAuth == .unauthenticated
        let isGuest = currentAuth == .guestMode
        let tiers: [MembershipTier] = [.free, .pro, .elite, .royal]

        return VStack(spacing: 0) {
            // Header row
            HStack(spacing: 0) {
                Text("Feature")
                    .frame(width: 70, alignment: .leading)
                if isGuest || (!isUnauthed && !isGuest) {
                    Text("Guest")
                        .frame(maxWidth: .infinity)
                }
                ForEach(tiers) { tier in
                    Text(tier.displayName)
                        .frame(maxWidth: .infinity)
                }
            }
            .font(.system(size: 8, weight: .bold, design: .rounded))
            .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
            .padding(.vertical, 4)

            Divider().opacity(0.3)

            // Feature rows
            ForEach(gatedFeatures, id: \.name) { feature in
                HStack(spacing: 0) {
                    HStack(spacing: 2) {
                        Image(systemName: feature.icon)
                            .font(.system(size: 7))
                        Text(feature.name)
                            .lineLimit(1)
                    }
                    .frame(width: 70, alignment: .leading)

                    if isGuest || (!isUnauthed && !isGuest) {
                        // Guest column
                        gatingCell(
                            access: feature.requiresAuth ? nil : (feature.accessByTier[.free].map { "✓(\($0))" } ?? nil),
                            isHighlighted: isGuest
                        )
                        .frame(maxWidth: .infinity)
                    }

                    ForEach(tiers) { tier in
                        let access = isUnauthed ? nil : feature.accessByTier[tier]
                        gatingCell(
                            access: access,
                            isHighlighted: !isUnauthed && !isGuest && tierManager.currentTier == tier
                        )
                        .frame(maxWidth: .infinity)
                    }
                }
                .font(.system(size: 8, weight: .medium, design: .rounded))
                .foregroundStyle(isDark ? .white.opacity(0.7) : .primary.opacity(0.7))
                .padding(.vertical, 3)
            }
        }
        .padding(6)
        .background(
            RoundedRectangle(cornerRadius: 8, style: .continuous)
                .fill(isDark ? .white.opacity(0.02) : .black.opacity(0.01))
        )
    }

    private func gatingCell(access: String?, isHighlighted: Bool) -> some View {
        Group {
            if let access {
                Text(access)
                    .foregroundStyle(.green)
            } else {
                Image(systemName: "xmark")
                    .font(.system(size: 7))
                    .foregroundStyle(.red.opacity(0.6))
            }
        }
        .padding(.vertical, 2)
        .padding(.horizontal, 4)
        .background(
            RoundedRectangle(cornerRadius: 4)
                .fill(isHighlighted ? .purple.opacity(0.15) : .clear)
        )
    }

    private func comboButton(label: String, authState: DebugAuthState, tier: MembershipTier, color: Color) -> some View {
        Button {
            withAnimation(.spring(response: 0.25, dampingFraction: 0.8)) {
                DebugAuthController.shared.activeOverride = authState
                tierManager.currentTierId = tier.rawValue
            }
        } label: {
            Text(label)
                .font(.system(size: 10, weight: .semibold, design: .rounded))
                .lineLimit(1)
                .frame(maxWidth: .infinity)
                .padding(.vertical, 6)
                .foregroundStyle(isDark ? .white.opacity(0.7) : .primary.opacity(0.7))
                .background(
                    RoundedRectangle(cornerRadius: 8)
                        .fill(color.opacity(isDark ? 0.15 : 0.08))
                )
                .overlay(
                    RoundedRectangle(cornerRadius: 8)
                        .strokeBorder(color.opacity(0.3), lineWidth: 1)
                )
        }
        .buttonStyle(.plain)
    }

    private func walkAllGates() {
        isWalkingGates = true
        walkingGateLabel = nil

        let steps: [(DebugAuthState, MembershipTier, String)] = [
            (.unauthenticated, .free, "Unauthenticated"),
            (.guestMode, .free, "Guest → Free"),
            (.authenticated, .free, "Authed → Free"),
            (.authenticated, .pro, "Authed → Pro"),
            (.authenticated, .elite, "Authed → Elite"),
            (.authenticated, .royal, "Authed → Royal"),
        ]

        Task {
            for (auth, tier, label) in steps {
                await MainActor.run {
                    withAnimation(.spring(response: 0.25, dampingFraction: 0.8)) {
                        DebugAuthController.shared.activeOverride = auth
                        tierManager.currentTierId = tier.rawValue
                        walkingGateLabel = "Testing: \(label)"
                    }
                }
                print("[WalkGates] \(label) — auth: \(auth), tier: \(tier)")
                try? await Task.sleep(for: .seconds(3))
            }

            await MainActor.run {
                withAnimation {
                    isWalkingGates = false
                    walkingGateLabel = "Walk complete ✓ (check console)"
                }
            }
        }
    }

    // MARK: - Sync Simulation (Story 0.7)

    private var syncSimulation: some View {
        VStack(alignment: .leading, spacing: 10) {
            // Sub-header
            HStack(spacing: 6) {
                Image(systemName: "arrow.triangle.2.circlepath.circle.fill")
                    .font(.system(size: 11, weight: .semibold))
                    .foregroundStyle(.green)
                Text("Profile Sync")
                    .font(.system(size: 12, weight: .semibold, design: .rounded))
                    .foregroundStyle(isDark ? .white.opacity(0.8) : .primary)
            }

            // Sync Status
            syncStatusIndicator

            // Conflict Scenario Picker
            VStack(alignment: .leading, spacing: 4) {
                Text("Conflict Scenario")
                    .font(.system(size: 10, weight: .semibold, design: .rounded))
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)

                LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible())], spacing: 6) {
                    ForEach(DebugAuthController.SyncScenario.allCases) { scenario in
                        let isSelected = DebugAuthController.shared.syncScenario == scenario
                        Button {
                            withAnimation(.spring(response: 0.25, dampingFraction: 0.8)) {
                                DebugAuthController.shared.syncScenario = scenario
                            }
                        } label: {
                            Text(scenario.label)
                                .font(.system(size: 10, weight: .semibold, design: .rounded))
                                .lineLimit(1)
                                .frame(maxWidth: .infinity)
                                .padding(.vertical, 6)
                                .foregroundStyle(isSelected ? .white : (isDark ? .white.opacity(0.6) : .primary.opacity(0.6)))
                                .background(
                                    RoundedRectangle(cornerRadius: 8)
                                        .fill(isSelected ? .green.opacity(0.6) : (isDark ? .white.opacity(0.04) : .black.opacity(0.03)))
                                )
                                .overlay(
                                    RoundedRectangle(cornerRadius: 8)
                                        .strokeBorder(isSelected ? .green.opacity(0.4) : .clear, lineWidth: 1)
                                )
                        }
                        .buttonStyle(.plain)
                    }
                }
            }

            // Action Buttons
            VStack(spacing: 6) {
                sessionButton(label: "Trigger Profile Sync", icon: "arrow.triangle.2.circlepath", color: .green) {
                    simulateProfileSync()
                }

                sessionButton(label: "Simulate Guest Migration", icon: "person.badge.plus", color: .cyan) {
                    showGuestMigrationSheet = true
                }
                .sheet(isPresented: $showGuestMigrationSheet) {
                    MockSignInSheetView()
                }
            }

            // Sync Result Message
            if let message = syncResultMessage {
                HStack(spacing: 6) {
                    Image(systemName: "checkmark.circle.fill")
                        .font(.system(size: 10))
                        .foregroundStyle(.green)
                    Text(message)
                        .font(.system(size: 10, weight: .medium, design: .rounded))
                        .foregroundStyle(isDark ? .white.opacity(0.7) : .primary.opacity(0.7))
                }
                .transition(.opacity.combined(with: .scale(scale: 0.95)))
            }
        }
        .padding(10)
        .background(
            RoundedRectangle(cornerRadius: 12, style: .continuous)
                .fill(isDark ? .white.opacity(0.03) : .black.opacity(0.02))
        )
        .overlay(
            RoundedRectangle(cornerRadius: 12, style: .continuous)
                .strokeBorder(.green.opacity(0.15), lineWidth: 1)
        )
    }

    private var syncStatusIndicator: some View {
        HStack(spacing: 6) {
            if DebugAuthController.shared.isSyncing {
                ProgressView()
                    .scaleEffect(0.6)
                    .tint(.green)
                Text("Sync in progress…")
                    .font(.system(size: 11, weight: .medium, design: .rounded))
                    .foregroundStyle(.green)
            } else if let lastSync = DebugAuthController.shared.lastSyncDate {
                Image(systemName: "checkmark.circle.fill")
                    .font(.system(size: 10))
                    .foregroundStyle(.green)
                Text("Last sync: \(lastSync, style: .relative) ago")
                    .font(.system(size: 11, weight: .medium, design: .rounded))
                    .foregroundStyle(isDark ? .white.opacity(0.6) : .secondary)
            } else {
                Image(systemName: "circle.dashed")
                    .font(.system(size: 10))
                    .foregroundStyle(.secondary)
                Text("No sync yet")
                    .font(.system(size: 11, weight: .medium, design: .rounded))
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
            }
            Spacer()
        }
    }

    private func simulateProfileSync() {
        let controller = DebugAuthController.shared
        controller.isSyncing = true
        syncResultMessage = nil

        Task {
            try? await Task.sleep(for: .seconds(max(controller.simulatedLatency, 0.5)))

            await MainActor.run {
                let scenario = controller.syncScenario
                var result: String

                switch scenario {
                case .cleanSync:
                    result = "Clean sync complete. Profile updated."
                case .localWinsXP:
                    result = "Conflict resolved: Local XP preserved (higher)."
                case .remoteWinsXP:
                    result = "Conflict resolved: Remote XP applied (higher)."
                case .streakConflict:
                    result = "Conflict resolved: Higher streak preserved."
                case .nameConflict:
                    result = "Name conflict detected. Kept: \(controller.mockUser.displayName)"
                case .tierConflict:
                    result = "Tier conflict resolved: Higher tier preserved (no downgrade)."
                }

                withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                    controller.isSyncing = false
                    controller.lastSyncDate = Date.now
                    syncResultMessage = result
                }
            }
        }
    }

    // MARK: - Session Simulation (Story 0.6)

    private var sessionSimulation: some View {
        VStack(alignment: .leading, spacing: 10) {
            // Sub-header
            HStack(spacing: 6) {
                Image(systemName: "key.fill")
                    .font(.system(size: 11, weight: .semibold))
                    .foregroundStyle(.orange)
                Text("Session & Token")
                    .font(.system(size: 12, weight: .semibold, design: .rounded))
                    .foregroundStyle(isDark ? .white.opacity(0.8) : .primary)
            }

            // Token Status
            tokenStatusDisplay

            // Token Action Buttons
            tokenActionButtons

            // Multi-device Simulation
            multiDeviceButtons
        }
        .padding(10)
        .background(
            RoundedRectangle(cornerRadius: 12, style: .continuous)
                .fill(isDark ? .white.opacity(0.03) : .black.opacity(0.02))
        )
        .overlay(
            RoundedRectangle(cornerRadius: 12, style: .continuous)
                .strokeBorder(.orange.opacity(0.15), lineWidth: 1)
        )
    }

    private var tokenStatusDisplay: some View {
        VStack(alignment: .leading, spacing: 6) {
            // Token State Badge
            HStack(spacing: 8) {
                let state = DebugAuthController.shared.tokenState
                Circle()
                    .fill(state.color)
                    .frame(width: 8, height: 8)

                Text(state.label)
                    .font(.system(size: 12, weight: .semibold, design: .rounded))
                    .foregroundStyle(state.color)

                Spacer()

                if MockTokenManager.shared.isRefreshing {
                    ProgressView()
                        .scaleEffect(0.6)
                        .tint(.blue)
                }
            }

            // Expiry Countdown
            if let expiry = DebugAuthController.shared.mockTokenExpiry {
                let remaining = expiry.timeIntervalSinceNow
                HStack(spacing: 4) {
                    Image(systemName: "clock.fill")
                        .font(.system(size: 9))
                        .foregroundStyle(.secondary)
                    Text(remaining > 0
                         ? "Expires in: \(formatCountdown(remaining))"
                         : "Expired")
                        .font(.system(size: 10, weight: .medium, design: .monospaced))
                        .foregroundStyle(remaining > 0 ? (isDark ? .white.opacity(0.6) : .secondary) : .red)
                }
            }

            // Last Refresh
            if let lastRefresh = MockTokenManager.shared.lastRefreshDate {
                HStack(spacing: 4) {
                    Image(systemName: "arrow.clockwise")
                        .font(.system(size: 9))
                        .foregroundStyle(.secondary)
                    Text("Last refresh: \(lastRefresh, style: .relative) ago")
                        .font(.system(size: 10, weight: .medium, design: .rounded))
                        .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
                }
            }

            // Last Error
            if let error = MockTokenManager.shared.lastRefreshError {
                HStack(spacing: 4) {
                    Image(systemName: "exclamationmark.triangle.fill")
                        .font(.system(size: 9))
                        .foregroundStyle(.red)
                    Text(error)
                        .font(.system(size: 10, weight: .medium, design: .rounded))
                        .foregroundStyle(.red.opacity(0.8))
                }
            }
        }
    }

    private var tokenActionButtons: some View {
        VStack(spacing: 6) {
            HStack(spacing: 6) {
                sessionButton(label: "Expire Now", icon: "clock.badge.xmark.fill", color: .red) {
                    Task { await MockTokenManager.shared.expireAndRefresh() }
                }
                sessionButton(label: "Fail Refresh", icon: "xmark.icloud.fill", color: .orange) {
                    DebugAuthController.shared.failNextTokenRefresh = true
                    Task { await MockTokenManager.shared.expireAndRefresh() }
                }
            }
            HStack(spacing: 6) {
                sessionButton(label: "Revoke Session", icon: "hand.raised.slash.fill", color: .red) {
                    MockTokenManager.shared.revokeSession()
                }
                sessionButton(label: "Refresh Token", icon: "arrow.clockwise.circle.fill", color: .blue) {
                    Task { try? await MockTokenManager.shared.refreshToken() }
                }
            }
            sessionButton(label: "Expire in 30s", icon: "timer", color: .orange) {
                MockTokenManager.shared.startExpiryCountdown(seconds: 30)
            }
        }
    }

    private var multiDeviceButtons: some View {
        VStack(alignment: .leading, spacing: 6) {
            Text("Multi-device")
                .font(.system(size: 10, weight: .semibold, design: .rounded))
                .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)

            HStack(spacing: 6) {
                sessionButton(label: "Other Device Sign-in", icon: "iphone.and.arrow.forward", color: .purple) {
                    MockTokenManager.shared.simulateOtherDeviceSignIn()
                }
                sessionButton(label: "Revoke All Sessions", icon: "xmark.shield.fill", color: .red) {
                    MockTokenManager.shared.simulateAllSessionsRevoked()
                }
            }
        }
    }

    private func sessionButton(label: String, icon: String, color: Color, action: @escaping () -> Void) -> some View {
        Button(action: action) {
            HStack(spacing: 4) {
                Image(systemName: icon)
                    .font(.system(size: 10, weight: .semibold))
                Text(label)
                    .font(.system(size: 10, weight: .semibold, design: .rounded))
                    .lineLimit(1)
            }
            .foregroundStyle(color)
            .frame(maxWidth: .infinity)
            .padding(.vertical, 7)
            .background(
                RoundedRectangle(cornerRadius: 8, style: .continuous)
                    .fill(color.opacity(isDark ? 0.12 : 0.08))
            )
            .overlay(
                RoundedRectangle(cornerRadius: 8, style: .continuous)
                    .strokeBorder(color.opacity(0.2), lineWidth: 1)
            )
        }
        .buttonStyle(.plain)
    }

    private func formatCountdown(_ interval: TimeInterval) -> String {
        let minutes = Int(interval) / 60
        let seconds = Int(interval) % 60
        return String(format: "%d:%02d", minutes, seconds)
    }

    // MARK: - Sign-in Flow Simulation (Story 0.4)

    private var signInFlowSimulation: some View {
        VStack(alignment: .leading, spacing: 10) {
            // Sub-header
            HStack(spacing: 6) {
                Image(systemName: "person.badge.key.fill")
                    .font(.system(size: 11, weight: .semibold))
                    .foregroundStyle(.purple)
                Text("Sign-in Flow")
                    .font(.system(size: 12, weight: .semibold, design: .rounded))
                    .foregroundStyle(isDark ? .white.opacity(0.8) : .primary)
            }

            // Sign-in Outcome Picker
            VStack(alignment: .leading, spacing: 4) {
                Text("Sign-in Outcome")
                    .font(.system(size: 10, weight: .semibold, design: .rounded))
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)

                LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible())], spacing: 6) {
                    ForEach(DebugAuthController.SignInOutcome.allCases) { outcome in
                        let isSelected = DebugAuthController.shared.signInOutcome == outcome
                        Button {
                            withAnimation(.spring(response: 0.25, dampingFraction: 0.8)) {
                                DebugAuthController.shared.signInOutcome = outcome
                            }
                        } label: {
                            Text(outcome.label)
                                .font(.system(size: 10, weight: .semibold, design: .rounded))
                                .lineLimit(1)
                                .frame(maxWidth: .infinity)
                                .padding(.vertical, 6)
                                .foregroundStyle(isSelected ? .white : (isDark ? .white.opacity(0.6) : .primary.opacity(0.6)))
                                .background(
                                    RoundedRectangle(cornerRadius: 8)
                                        .fill(isSelected ? .purple.opacity(0.6) : (isDark ? .white.opacity(0.04) : .black.opacity(0.03)))
                                )
                                .overlay(
                                    RoundedRectangle(cornerRadius: 8)
                                        .strokeBorder(isSelected ? .purple.opacity(0.4) : .clear, lineWidth: 1)
                                )
                        }
                        .buttonStyle(.plain)
                    }
                }
            }

            // Provider Override
            VStack(alignment: .leading, spacing: 4) {
                Text("Provider Override")
                    .font(.system(size: 10, weight: .semibold, design: .rounded))
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)

                HStack(spacing: 6) {
                    // "None" option
                    Button {
                        withAnimation(.spring(response: 0.25, dampingFraction: 0.8)) {
                            DebugAuthController.shared.signInProviderOverride = nil
                        }
                    } label: {
                        Text("Auto")
                            .font(.system(size: 10, weight: .semibold, design: .rounded))
                            .padding(.horizontal, 8)
                            .padding(.vertical, 5)
                            .foregroundStyle(
                                DebugAuthController.shared.signInProviderOverride == nil
                                ? .white : (isDark ? .white.opacity(0.5) : .secondary)
                            )
                            .background(
                                Capsule()
                                    .fill(DebugAuthController.shared.signInProviderOverride == nil
                                          ? .purple.opacity(0.5)
                                          : (isDark ? .white.opacity(0.06) : .black.opacity(0.04)))
                            )
                    }
                    .buttonStyle(.plain)

                    ForEach(AuthProvider.allCases) { provider in
                        let isSelected = DebugAuthController.shared.signInProviderOverride == provider
                        Button {
                            withAnimation(.spring(response: 0.25, dampingFraction: 0.8)) {
                                DebugAuthController.shared.signInProviderOverride = provider
                            }
                        } label: {
                            HStack(spacing: 2) {
                                Image(systemName: provider.iconName)
                                    .font(.system(size: 9))
                                Text(provider.displayName)
                                    .font(.system(size: 9, weight: .semibold, design: .rounded))
                            }
                            .padding(.horizontal, 6)
                            .padding(.vertical, 5)
                            .foregroundStyle(isSelected ? .white : (isDark ? .white.opacity(0.5) : .secondary))
                            .background(
                                Capsule()
                                    .fill(isSelected ? .purple.opacity(0.6) : (isDark ? .white.opacity(0.06) : .black.opacity(0.04)))
                            )
                            .overlay(
                                Capsule()
                                    .strokeBorder(isSelected ? .purple.opacity(0.4) : .clear, lineWidth: 1)
                            )
                        }
                        .buttonStyle(.plain)
                    }
                }
            }

            // Show Sign-in Sheet Button
            Button {
                showMockSignInSheet = true
            } label: {
                HStack(spacing: 6) {
                    Image(systemName: "rectangle.portrait.and.arrow.forward.fill")
                        .font(.system(size: 12, weight: .semibold))
                    Text("Show Sign-in Sheet")
                        .font(.system(size: 12, weight: .semibold, design: .rounded))
                }
                .foregroundStyle(.white)
                .frame(maxWidth: .infinity)
                .padding(.vertical, 10)
                .background(
                    RoundedRectangle(cornerRadius: 10, style: .continuous)
                        .fill(
                            LinearGradient(
                                colors: [.purple.opacity(0.7), .cyan.opacity(0.7)],
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                )
                .overlay(
                    RoundedRectangle(cornerRadius: 10, style: .continuous)
                        .strokeBorder(.white.opacity(0.15), lineWidth: 1)
                )
            }
            .buttonStyle(.plain)
            .sheet(isPresented: $showMockSignInSheet) {
                MockSignInSheetView()
            }
        }
        .padding(10)
        .background(
            RoundedRectangle(cornerRadius: 12, style: .continuous)
                .fill(isDark ? .white.opacity(0.03) : .black.opacity(0.02))
        )
        .overlay(
            RoundedRectangle(cornerRadius: 12, style: .continuous)
                .strokeBorder(.purple.opacity(0.15), lineWidth: 1)
        )
    }

    // MARK: - Linked Identity Pills

    private var linkedIdentityPills: some View {
        HStack(spacing: 6) {
            ForEach(AuthProvider.allCases) { provider in
                let isLinked = DebugAuthController.shared.mockUser.linkedProviders.contains(provider)
                Button {
                    withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                        if isLinked && DebugAuthController.shared.mockUser.linkedProviders.count > 1 {
                            DebugAuthController.shared.mockUser.linkedProviders.remove(provider)
                        } else {
                            DebugAuthController.shared.mockUser.linkedProviders.insert(provider)
                        }
                    }
                } label: {
                    HStack(spacing: 3) {
                        Image(systemName: provider.iconName)
                            .font(.system(size: 9, weight: .semibold))
                        Text(provider.displayName)
                            .font(.system(size: 9, weight: .semibold, design: .rounded))
                    }
                    .padding(.horizontal, 8)
                    .padding(.vertical, 4)
                    .foregroundStyle(isLinked ? .white : (isDark ? .white.opacity(0.5) : .secondary))
                    .background(
                        Capsule()
                            .fill(isLinked ? .cyan.opacity(0.6) : (isDark ? .white.opacity(0.06) : .black.opacity(0.04)))
                    )
                    .overlay(
                        Capsule()
                            .strokeBorder(isLinked ? .cyan.opacity(0.4) : .clear, lineWidth: 1)
                    )
                }
                .buttonStyle(.plain)
            }
        }
    }

    // MARK: - Mock User Editor Form (Story 0.3)

    private var mockUserEditorForm: some View {
        VStack(alignment: .leading, spacing: 12) {
            // Presets row
            mockUserPresets

            // Display Name
            editorField(
                label: "Display Name",
                icon: "person.fill",
                text: Binding(
                    get: { DebugAuthController.shared.mockUser.displayName },
                    set: { DebugAuthController.shared.mockUser.displayName = String($0.prefix(50)) }
                ),
                placeholder: "Luna Cosmos"
            )

            // Email
            editorField(
                label: "Email",
                icon: "envelope.fill",
                text: Binding(
                    get: { DebugAuthController.shared.mockUser.email },
                    set: { DebugAuthController.shared.mockUser.email = $0 }
                ),
                placeholder: "luna@lumenlingo.test"
            )

            // Phone
            editorField(
                label: "Phone",
                icon: "phone.fill",
                text: Binding(
                    get: { DebugAuthController.shared.mockUser.phone },
                    set: { DebugAuthController.shared.mockUser.phone = $0 }
                ),
                placeholder: "+1 555 000 0000"
            )

            // Avatar Options
            VStack(alignment: .leading, spacing: 4) {
                Text("Avatar")
                    .font(.system(size: 10, weight: .semibold, design: .rounded))
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)

                LazyVGrid(columns: Array(repeating: GridItem(.flexible()), count: 3), spacing: 6) {
                    ForEach(MockAvatarOption.allCases) { option in
                        let isSelected = DebugAuthController.shared.mockUser.avatarOption == option
                        Button {
                            withAnimation(.spring(response: 0.25, dampingFraction: 0.8)) {
                                DebugAuthController.shared.mockUser.avatarOption = option
                            }
                        } label: {
                            VStack(spacing: 2) {
                                Image(systemName: option.iconName)
                                    .font(.system(size: 12, weight: .medium))
                                Text(option.displayName)
                                    .font(.system(size: 8, weight: .medium, design: .rounded))
                                    .lineLimit(1)
                            }
                            .frame(maxWidth: .infinity)
                            .padding(.vertical, 6)
                            .foregroundStyle(isSelected ? .white : (isDark ? .white.opacity(0.6) : .primary.opacity(0.6)))
                            .background(
                                RoundedRectangle(cornerRadius: 8)
                                    .fill(isSelected ? .cyan.opacity(0.6) : (isDark ? .white.opacity(0.04) : .black.opacity(0.03)))
                            )
                            .overlay(
                                RoundedRectangle(cornerRadius: 8)
                                    .strokeBorder(isSelected ? .cyan.opacity(0.4) : .clear, lineWidth: 1)
                            )
                        }
                        .buttonStyle(.plain)
                    }
                }
            }

            // Tier Picker
            VStack(alignment: .leading, spacing: 4) {
                Text("Mock User Tier")
                    .font(.system(size: 10, weight: .semibold, design: .rounded))
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)

                LazyVGrid(columns: Array(repeating: GridItem(.flexible()), count: 5), spacing: 6) {
                    ForEach(MembershipTier.allCases) { tier in
                        let isSelected = DebugAuthController.shared.mockUser.tier == tier
                        Button {
                            withAnimation(.spring(response: 0.25, dampingFraction: 0.8)) {
                                DebugAuthController.shared.mockUser.tier = tier
                            }
                        } label: {
                            VStack(spacing: 2) {
                                Image(systemName: tier.iconName)
                                    .font(.system(size: 11, weight: .bold))
                                Text(tier.displayName)
                                    .font(.system(size: 8, weight: .semibold, design: .rounded))
                                    .lineLimit(1)
                            }
                            .frame(maxWidth: .infinity)
                            .padding(.vertical, 6)
                            .foregroundStyle(
                                isSelected
                                ? AnyShapeStyle(LinearGradient(colors: tier.gradientColors, startPoint: .topLeading, endPoint: .bottomTrailing))
                                : AnyShapeStyle(isDark ? .white.opacity(0.5) : .primary.opacity(0.5))
                            )
                            .background(
                                RoundedRectangle(cornerRadius: 8)
                                    .fill(isSelected ? tier.gradientColors.first?.opacity(0.15) ?? .clear : (isDark ? .white.opacity(0.04) : .black.opacity(0.03)))
                            )
                            .overlay(
                                RoundedRectangle(cornerRadius: 8)
                                    .strokeBorder(isSelected ? tier.gradientColors.first?.opacity(0.4) ?? .clear : .clear, lineWidth: 1)
                            )
                        }
                        .buttonStyle(.plain)
                    }
                }
            }

            // Sign-in Method
            VStack(alignment: .leading, spacing: 4) {
                Text("Signed in via")
                    .font(.system(size: 10, weight: .semibold, design: .rounded))
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)

                HStack(spacing: 6) {
                    ForEach(AuthProvider.allCases) { provider in
                        let isSelected = DebugAuthController.shared.mockUser.signInMethod == provider
                        Button {
                            withAnimation(.spring(response: 0.25, dampingFraction: 0.8)) {
                                DebugAuthController.shared.mockUser.signInMethod = provider
                            }
                        } label: {
                            HStack(spacing: 3) {
                                Image(systemName: provider.iconName)
                                    .font(.system(size: 9, weight: .semibold))
                                Text(provider.displayName)
                                    .font(.system(size: 9, weight: .semibold, design: .rounded))
                            }
                            .padding(.horizontal, 8)
                            .padding(.vertical, 5)
                            .foregroundStyle(isSelected ? .white : (isDark ? .white.opacity(0.5) : .secondary))
                            .background(
                                Capsule()
                                    .fill(isSelected ? .purple.opacity(0.6) : (isDark ? .white.opacity(0.06) : .black.opacity(0.04)))
                            )
                            .overlay(
                                Capsule()
                                    .strokeBorder(isSelected ? .purple.opacity(0.4) : .clear, lineWidth: 1)
                            )
                        }
                        .buttonStyle(.plain)
                    }
                }
            }

            // Account Age & XP/Streak
            HStack(spacing: 12) {
                VStack(alignment: .leading, spacing: 4) {
                    Text("Account Age")
                        .font(.system(size: 10, weight: .semibold, design: .rounded))
                        .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)

                    Stepper(
                        "\(DebugAuthController.shared.mockUser.accountAgeDays)d",
                        value: Binding(
                            get: { DebugAuthController.shared.mockUser.accountAgeDays },
                            set: { DebugAuthController.shared.mockUser.accountAgeDays = $0 }
                        ),
                        in: 0...365
                    )
                    .font(.system(size: 11, weight: .medium, design: .monospaced))
                }

                Divider().frame(height: 30)

                VStack(alignment: .leading, spacing: 4) {
                    Text("XP")
                        .font(.system(size: 10, weight: .semibold, design: .rounded))
                        .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)

                    TextField("0", value: Binding(
                        get: { DebugAuthController.shared.mockUser.totalXP },
                        set: { DebugAuthController.shared.mockUser.totalXP = max(0, min(999_999, $0)) }
                    ), format: .number)
                    .font(.system(size: 11, weight: .medium, design: .monospaced))
                    .textFieldStyle(.roundedBorder)
                    .frame(width: 80)
                }

                VStack(alignment: .leading, spacing: 4) {
                    Text("Streak")
                        .font(.system(size: 10, weight: .semibold, design: .rounded))
                        .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)

                    TextField("0", value: Binding(
                        get: { DebugAuthController.shared.mockUser.dailyStreak },
                        set: { DebugAuthController.shared.mockUser.dailyStreak = max(0, min(365, $0)) }
                    ), format: .number)
                    .font(.system(size: 11, weight: .medium, design: .monospaced))
                    .textFieldStyle(.roundedBorder)
                    .frame(width: 60)
                }
            }
        }
        .padding(10)
        .background(
            RoundedRectangle(cornerRadius: 12, style: .continuous)
                .fill(isDark ? .white.opacity(0.03) : .black.opacity(0.02))
        )
        .overlay(
            RoundedRectangle(cornerRadius: 12, style: .continuous)
                .strokeBorder(isDark ? .white.opacity(0.06) : .black.opacity(0.04), lineWidth: 1)
        )
        .transition(.asymmetric(
            insertion: .opacity.combined(with: .scale(scale: 0.95, anchor: .top)),
            removal: .opacity.combined(with: .scale(scale: 0.95, anchor: .top))
        ))
    }

    private func editorField(label: String, icon: String, text: Binding<String>, placeholder: String) -> some View {
        VStack(alignment: .leading, spacing: 4) {
            Text(label)
                .font(.system(size: 10, weight: .semibold, design: .rounded))
                .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)

            HStack(spacing: 6) {
                Image(systemName: icon)
                    .font(.system(size: 11, weight: .medium))
                    .foregroundStyle(.cyan.opacity(0.7))
                    .frame(width: 16)

                TextField(placeholder, text: text)
                    .font(.system(size: 12, weight: .regular, design: .rounded))
                    .textFieldStyle(.roundedBorder)
            }
        }
    }

    // MARK: - Mock User Presets

    private var mockUserPresets: some View {
        VStack(alignment: .leading, spacing: 4) {
            Text("Presets")
                .font(.system(size: 10, weight: .semibold, design: .rounded))
                .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)

            LazyVGrid(columns: Array(repeating: GridItem(.flexible()), count: 3), spacing: 6) {
                ForEach(MockUserProfile.presets, id: \.label) { preset in
                    Button {
                        withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                            DebugAuthController.shared.applyPreset(preset.profile)
                        }
                    } label: {
                        Text(preset.label)
                            .font(.system(size: 10, weight: .semibold, design: .rounded))
                            .lineLimit(1)
                            .frame(maxWidth: .infinity)
                            .padding(.vertical, 6)
                            .foregroundStyle(isDark ? .white.opacity(0.7) : .primary.opacity(0.7))
                            .background(
                                RoundedRectangle(cornerRadius: 8)
                                    .fill(isDark ? .white.opacity(0.06) : .black.opacity(0.04))
                            )
                            .overlay(
                                RoundedRectangle(cornerRadius: 8)
                                    .strokeBorder(isDark ? .white.opacity(0.1) : .black.opacity(0.06), lineWidth: 1)
                            )
                    }
                    .buttonStyle(.plain)
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

    private func debugActionButton(icon: String? = nil, label: String, color: Color) -> some View {
        VStack(spacing: icon != nil ? 2 : 0) {
            if let icon {
                Image(systemName: icon)
                    .font(.system(size: 13, weight: .semibold))
            }
            Text(label)
                .font(.system(size: icon != nil ? 10 : 11, weight: .semibold, design: .rounded))
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
}
#endif
