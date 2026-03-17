import SwiftUI
import SwiftData

// MARK: - Profile View (React-Parity Overhaul)

/// Full React-parity profile screen with 4 top-level tabs
/// (Appearance, Sound, Sync, Sign Out) and 4 appearance sub-tabs
/// (Dark/Light, Breathing Orbs, Quantum Flow, Nebula Drift).
struct ProfileView: View {
    @Environment(\.modelContext) private var modelContext
    @Environment(\.colorScheme) private var colorScheme
    @Environment(ThemeManager.self) private var themeManager
    @Environment(\.localization) private var localization
    #if DEBUG
    @Environment(TierManager.self) private var tierManager
    #endif

    private var L: AppStrings { localization.strings }

    @Query private var profiles: [UserProfile]
    @Query private var languagePrefs: [LanguagePreference]
    @Query(sort: \GameProgressRecord.createdDate, order: .reverse)
    private var allProgress: [GameProgressRecord]

    private var profile: UserProfile? { profiles.first }

    /// Display name from real profile, with graceful fallback.
    private var displayName: String {
        profile?.firstName.trimmingCharacters(in: .whitespacesAndNewlines) ?? ""
    }

    @State private var activeTab: ProfileTab = .appearance
    @State private var activeAppearanceSubTab: AppearanceSubTab = .darkLight
    @State private var activeSoundSubTab: SoundSubTab = .soundscapes
    @State private var showLanguageSelector = false

    private var isDark: Bool { colorScheme == .dark }

    private var availableAppearanceSubTabs: [AppearanceSubTab] {
        AppearanceSubTab.allCases.filter { isDark || $0 != .nebulaDrift }
    }

    // Entry animation state
    @State private var headerAppeared = false
    // Tab transition direction
    @State private var tabDirection: Int = 0
    @State private var subTabDirection: Int = 0
    @State private var soundSubTabDirection: Int = 0
    @Namespace private var tabIndicator
    @Namespace private var subTabIndicator
    @Namespace private var soundSubTabIndicator

    enum ProfileTab: String, CaseIterable {
        case appearance = "Appearance"
        case sound = "Sound"
        case sync = "Sync"
        case signOut = "Sign Out"
    }

    enum AppearanceSubTab: String, CaseIterable {
        case darkLight = "Dark/Light"
        case breathingOrbs = "Orbs"
        case quantumFlow = "Quantum"
        case nebulaDrift = "Nebula"
    }

    enum SoundSubTab: String, CaseIterable {
        case soundscapes = "Soundscapes"
        case controls = "Controls"
        case mixer = "Mixer"
    }

    var body: some View {
        ScrollView(showsIndicators: false) {
            VStack(spacing: 0) {
                // Profile header inside GlassPanelWrapper
                profileHeader
                    .padding(.horizontal, 16)
                    .padding(.top, 12)
                    .opacity(headerAppeared ? 1 : 0)
                    .offset(y: headerAppeared ? 0 : 20)

                // My Plan card
                MyPlanCard()
                    .padding(.horizontal, 16)
                    .padding(.top, 14)
                    .opacity(headerAppeared ? 1 : 0)
                    .offset(y: headerAppeared ? 0 : 15)

                // Top-level settings tabs
                settingsTabBar
                    .padding(.top, 20)
                    .opacity(headerAppeared ? 1 : 0)

                // Tab content
                settingsContent
                    .padding(.horizontal, 16)
                    .padding(.top, 16)
                    .transition(.asymmetric(
                        insertion: .opacity.combined(with: .offset(x: CGFloat(tabDirection * 30))),
                        removal: .opacity.combined(with: .offset(x: CGFloat(-tabDirection * 30)))
                    ))
                    .id(activeTab)

                // App footer
                appInfoSection
                    .padding(.top, 24)

                #if DEBUG
                debugPanelLink
                    .padding(.horizontal, 16)
                    .padding(.top, 16)
                #endif

                Spacer(minLength: 100)
            }
        }
        .cosmicBackground()
        .navigationBarTitleDisplayMode(.inline)
        .toolbarColorScheme(isDark ? .dark : .light, for: .navigationBar)
        .onAppear {
            withAnimation(.easeOut(duration: 0.6).delay(0.15)) {
                headerAppeared = true
            }
        }
        .sheet(isPresented: $showLanguageSelector) {
            LanguageSelectionView()
        }
    }

    // MARK: - Profile Header

    private var profileHeader: some View {
        GlassPanelWrapper {
            VStack(spacing: 16) {
                // Avatar with glow rings
                ZStack {
                    // Outer ambient glow
                    Circle()
                        .fill(
                            RadialGradient(
                                colors: [
                                    Color(hex: "#667eea").opacity(0.25),
                                    Color(hex: "#764ba2").opacity(0.10),
                                    .clear
                                ],
                                center: .center,
                                startRadius: 28,
                                endRadius: 65
                            )
                        )
                        .frame(width: 120, height: 120)

                    // Gradient border ring
                    Circle()
                        .strokeBorder(
                            LinearGradient(
                                colors: [
                                    Color(hex: "#667eea").opacity(0.6),
                                    Color(hex: "#764ba2").opacity(0.3),
                                    Color(hex: "#667eea").opacity(0.15)
                                ],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            ),
                            lineWidth: 2.5
                        )
                        .frame(width: 86, height: 86)

                    // Main avatar circle
                    Circle()
                        .fill(
                            LinearGradient(
                                colors: [Color(hex: "#667eea"), Color(hex: "#764ba2")],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            )
                        )
                        .frame(width: 80, height: 80)
                        .shadow(color: Color(hex: "#764ba2").opacity(0.4), radius: 16, y: 4)

                    // Person icon — clipped to circle to avoid bust rectangle
                    Image(systemName: "person.crop.circle.fill")
                        .font(.system(size: 72, weight: .thin))
                        .symbolRenderingMode(.palette)
                        .foregroundStyle(
                            .white,
                            LinearGradient(
                                colors: [Color(hex: "#667eea"), Color(hex: "#764ba2")],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            )
                        )
                        .frame(width: 80, height: 80)
                        .clipShape(Circle())
                }
                .shadow(color: Color(hex: "#764ba2").opacity(0.3), radius: 12, y: 2)

                // Name & level
                VStack(spacing: 4) {
                    Text(displayName.isEmpty ? "Learner" : displayName)
                        .font(.title2.bold())
                        .foregroundStyle(
                            LinearGradient(
                                colors: [Color(hex: "#667eea"), Color(hex: "#764ba2")],
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )

                    HStack(spacing: 6) {
                        Image(systemName: "star.fill")
                            .font(.caption2)
                            .foregroundStyle(.yellow)
                        Text("\(L.level) \(profile?.currentLevel ?? 1) \(L.learner)")
                            .font(.subheadline)
                            .foregroundStyle(isDark ? .white.opacity(0.6) : .caribbeanPlum)
                    }
                }

                // Tier badge — tapping navigates to Membership
                NavigationLink {
                    MembershipView()
                } label: {
                    TierBadgeView()
                }
                .buttonStyle(.plain)

                // Quick stats row
                HStack(spacing: 0) {
                    quickStat(value: "\(profile?.totalXP ?? 0)", label: L.xp, icon: "bolt.fill", color: .cyan)
                    quickStatDivider
                    quickStat(value: "\(profile?.streakDays ?? 0)", label: L.streak, icon: "flame.fill", color: .orange)
                    quickStatDivider
                    quickStat(value: "\(allProgress.count)", label: L.sessions, icon: "play.circle.fill", color: .green)
                }
                .padding(.top, 4)
            }
        }
    }

    private func quickStat(value: String, label: String, icon: String, color: Color) -> some View {
        VStack(spacing: 4) {
            Image(systemName: icon)
                .font(.system(size: 14))
                .foregroundStyle(color)
            Text(value)
                .font(.system(size: 16, weight: .bold, design: .rounded))
                .foregroundStyle(isDark ? .white : .caribbeanInk)
            Text(label)
                .font(.caption2)
                .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanPlum)
        }
        .frame(maxWidth: .infinity)
    }

    private var quickStatDivider: some View {
        Rectangle()
            .fill(isDark ? .white.opacity(0.08) : .black.opacity(0.06))
            .frame(width: 1, height: 40)
    }

    // MARK: - Settings Tab Bar

    private var settingsTabBar: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack(spacing: 3) {
                ForEach(ProfileTab.allCases, id: \.self) { tab in
                    Button {
                        let oldIndex = ProfileTab.allCases.firstIndex(of: activeTab) ?? 0
                        let newIndex = ProfileTab.allCases.firstIndex(of: tab) ?? 0
                        tabDirection = newIndex > oldIndex ? 1 : -1
                        AudioService.shared.playProfileTabSwitch()
                        HapticsService.shared.tabSwitch()
                        withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                            activeTab = tab
                        }
                    } label: {
                        HStack(spacing: 5) {
                            Image(systemName: tabIcon(for: tab))
                                .font(.system(size: 11))
                            Text(localizedTabName(tab))
                                .font(.system(size: 12, weight: .semibold))
                        }
                        .foregroundStyle(
                            activeTab == tab
                                ? (isDark ? .white : Color(hex: "#3730a3"))
                                : (isDark ? .white.opacity(0.45) : .caribbeanInk.opacity(0.7))
                        )
                        .padding(.horizontal, 10)
                        .padding(.vertical, 8)
                        .background {
                            if activeTab == tab {
                                Capsule()
                                    .fill(
                                        isDark
                                            ? AnyShapeStyle(LinearGradient(
                                                colors: [Color(hex: "#667eea").opacity(0.25), Color(hex: "#764ba2").opacity(0.15)],
                                                startPoint: .leading,
                                                endPoint: .trailing
                                            ))
                                            : AnyShapeStyle(Color(hex: "#4338ca").opacity(0.15))
                                    )
                                    .overlay(
                                        Capsule().strokeBorder(isDark ? .white.opacity(0.12) : Color(hex: "#4338ca").opacity(0.30), lineWidth: 1)
                                    )
                                    .matchedGeometryEffect(id: "tabIndicator", in: tabIndicator)
                            }
                        }
                    }
                    .buttonStyle(LumenPressStyle(weight: .soft))
                }
            }
            .padding(4)
            .background(
                Capsule()
                    .fill(isDark ? .white.opacity(0.06) : Color(hex: "#4338ca").opacity(0.08))
            )
        }
    }

    private func tabIcon(for tab: ProfileTab) -> String {
        switch tab {
        case .appearance: return "paintbrush.fill"
        case .sound: return "speaker.wave.2.fill"
        case .sync: return "arrow.triangle.2.circlepath"
        case .signOut: return "rectangle.portrait.and.arrow.right"
        }
    }

    private func localizedTabName(_ tab: ProfileTab) -> String {
        switch tab {
        case .appearance: return L.appearance
        case .sound: return L.sound
        case .sync: return L.sync
        case .signOut: return L.signOut
        }
    }

    // MARK: - Settings Content

    @ViewBuilder
    private var settingsContent: some View {
        switch activeTab {
        case .appearance:
            appearanceSettings
        case .sound:
            soundTab
        case .sync:
            syncTab
        case .signOut:
            signOutTab
        }
    }

    // MARK: - Appearance Tab (4 Sub-Tabs)

    private var appearanceSettings: some View {
        VStack(spacing: 16) {
            // Sub-tab bar
            appearanceSubTabBar

            // Sub-tab content in glass card
            settingsCard(tint: appearanceSubTabTint) {
                Group {
                    switch activeAppearanceSubTab {
                    case .darkLight:
                        darkLightSettings
                    case .breathingOrbs:
                        BreathingOrbsSettingsView()
                            .featureTooltip(key: TooltipKey.breathingOrbs)
                    case .quantumFlow:
                        QuantumFlowSettingsView()
                    case .nebulaDrift:
                        NebulaDriftSettingsView()
                    }
                }
                .transition(.asymmetric(
                    insertion: .opacity.combined(with: .offset(x: CGFloat(subTabDirection * 20))),
                    removal: .opacity.combined(with: .offset(x: CGFloat(-subTabDirection * 20)))
                ))
                .id(activeAppearanceSubTab)
            }
        }
    }

    private var appearanceSubTabBar: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack(spacing: 3) {
                ForEach(availableAppearanceSubTabs, id: \.self) { subTab in
                    Button {
                        let oldIndex = availableAppearanceSubTabs.firstIndex(of: activeAppearanceSubTab) ?? 0
                        let newIndex = availableAppearanceSubTabs.firstIndex(of: subTab) ?? 0
                        subTabDirection = newIndex > oldIndex ? 1 : -1
                        AudioService.shared.playTabSwitch()
                        HapticsService.shared.tabSwitch()
                        withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                            activeAppearanceSubTab = subTab
                        }
                    } label: {
                        HStack(spacing: 4) {
                            Image(systemName: subTabIcon(for: subTab))
                                .font(.system(size: 10))
                            Text(localizedSubTabName(subTab))
                                .font(.system(size: 11, weight: .medium))
                        }
                        .modifier(SubTabLockModifier(subTab: subTab))
                        .foregroundStyle(
                            activeAppearanceSubTab == subTab
                                ? (isDark ? .white : Color(hex: "#4c1d95"))
                                : (isDark ? .white.opacity(0.4) : .caribbeanInk.opacity(0.65))
                        )
                        .padding(.horizontal, 10)
                        .padding(.vertical, 6)
                        .background {
                            if activeAppearanceSubTab == subTab {
                                Capsule()
                                    .fill(
                                        isDark
                                            ? AnyShapeStyle(Color(hex: "#8b5cf6").opacity(0.15))
                                            : AnyShapeStyle(Color(hex: "#6d28d9").opacity(0.14))
                                    )
                                    .overlay(
                                        Capsule().strokeBorder(
                                            isDark ? Color(hex: "#8b5cf6").opacity(0.25) : Color(hex: "#6d28d9").opacity(0.30),
                                            lineWidth: 1
                                        )
                                    )
                                    .matchedGeometryEffect(id: "subTabIndicator", in: subTabIndicator)
                            }
                        }
                    }
                    .buttonStyle(LumenPressStyle(weight: .soft))
                }
            }
            .padding(3)
            .background(
                Capsule()
                    .fill(isDark ? .white.opacity(0.04) : Color(hex: "#6d28d9").opacity(0.07))
            )
        }
        .onChange(of: isDark) { _, newIsDark in
            if !newIsDark && activeAppearanceSubTab == .nebulaDrift {
                activeAppearanceSubTab = .darkLight
            }
        }
    }

    private func subTabIcon(for subTab: AppearanceSubTab) -> String {
        switch subTab {
        case .darkLight: return "moon.fill"
        case .breathingOrbs: return "scope"
        case .quantumFlow: return "waveform.path.ecg"
        case .nebulaDrift: return "cloud.fog.fill"
        }
    }

    private func localizedSubTabName(_ subTab: AppearanceSubTab) -> String {
        switch subTab {
        case .darkLight: return L.darkLight
        case .breathingOrbs: return L.orbs
        case .quantumFlow: return L.quantum
        case .nebulaDrift: return L.nebula
        }
    }

    /// Modifier that conditionally applies a lock indicator to premium sub-tabs.
    /// Dark/Light is always unlocked and gets no lock icon.
    private struct SubTabLockModifier: ViewModifier {
        let subTab: AppearanceSubTab

        func body(content: Content) -> some View {
            switch subTab {
            case .darkLight:
                content
            case .breathingOrbs:
                content.lockedFeatureIndicator(for: .breathingOrbs)
            case .quantumFlow:
                content.lockedFeatureIndicator(for: .quantumFlow)
            case .nebulaDrift:
                content.lockedFeatureIndicator(for: .nebulaDrift)
            }
        }
    }

    // MARK: - Dark/Light Sub-Tab

    /// Per-sub-tab accent tint for the glass panel
    private var appearanceSubTabTint: Color {
        switch activeAppearanceSubTab {
        case .darkLight: return Color(hex: "#8b5cf6")
        case .breathingOrbs: return .purple
        case .quantumFlow: return .cyan
        case .nebulaDrift: return .indigo
        }
    }

    private var darkLightSettings: some View {
        VStack(spacing: 16) {
            // Dark mode toggle
            HStack(spacing: 12) {
                Image(systemName: isDark ? "moon.fill" : "sun.max.fill")
                    .font(.system(size: 20))
                    .foregroundStyle(Color(hex: "#8b5cf6"))
                    .contentTransition(.symbolEffect(.replace))
                    .frame(width: 24, height: 24)

                VStack(alignment: .leading, spacing: 2) {
                    Text(L.darkMode)
                        .font(.system(size: 17, weight: .semibold))
                        .foregroundStyle(isDark ? .white : .caribbeanInk)
                    Text(isDark ? L.cosmicDarkTheme : L.lightModeActive)
                        .font(.system(size: 13))
                        .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanPlum)
                        .contentTransition(.numericText())
                        .lineLimit(1)
                        .minimumScaleFactor(0.8)
                }

                Spacer()

                PremiumToggle(
                    isOn: themeManager.isDarkMode,
                    enabledColor: Color(hex: "#8b5cf6"),
                    enabledIcon: "moon.fill",
                    disabledIcon: "sun.max.fill"
                ) {
                    HapticsService.shared.toggleSwitch()
                    if themeManager.isDarkMode {
                        AudioService.shared.playToggleOff()
                    } else {
                        AudioService.shared.playToggleOn()
                    }
                    themeManager.toggleDarkMode(profile: profile)
                }
            }

        }
    }

    // MARK: - Sound Tab (3 Sub-Tabs)

    private var soundTab: some View {
        VStack(spacing: 16) {
            // Sub-tab bar
            soundSubTabBar

            // Sub-tab content in glass card
            settingsCard(tint: soundSubTabTint) {
                Group {
                    switch activeSoundSubTab {
                    case .controls:
                        SoundControlsView()
                    case .soundscapes:
                        SoundscapesSettingsView()
                            .featureTooltip(key: TooltipKey.soundscapes)
                    case .mixer:
                        SoundMixerView()
                    }
                }
                .transition(.asymmetric(
                    insertion: .opacity.combined(with: .offset(x: CGFloat(soundSubTabDirection * 20))),
                    removal: .opacity.combined(with: .offset(x: CGFloat(-soundSubTabDirection * 20)))
                ))
                .id(activeSoundSubTab)
            }
        }
    }

    private var soundSubTabBar: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack(spacing: 3) {
                ForEach(SoundSubTab.allCases, id: \.self) { subTab in
                    Button {
                        let oldIndex = SoundSubTab.allCases.firstIndex(of: activeSoundSubTab) ?? 0
                        let newIndex = SoundSubTab.allCases.firstIndex(of: subTab) ?? 0
                        soundSubTabDirection = newIndex > oldIndex ? 1 : -1
                        AudioService.shared.playTabSwitch()
                        HapticsService.shared.tabSwitch()
                        withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                            activeSoundSubTab = subTab
                        }
                    } label: {
                        HStack(spacing: 4) {
                            Image(systemName: soundSubTabIcon(for: subTab))
                                .font(.system(size: 10))
                            Text(soundSubTabName(subTab))
                                .font(.system(size: 11, weight: .medium))
                        }
                        .modifier(SoundSubTabLockModifier(subTab: subTab))
                        .foregroundStyle(
                            activeSoundSubTab == subTab
                                ? (isDark ? .white : Color(hex: "#9d174d"))
                                : (isDark ? .white.opacity(0.4) : .caribbeanInk.opacity(0.65))
                        )
                        .padding(.horizontal, 10)
                        .padding(.vertical, 6)
                        .background {
                            if activeSoundSubTab == subTab {
                                Capsule()
                                    .fill(
                                        isDark
                                            ? AnyShapeStyle(Color(hex: "#ec4899").opacity(0.15))
                                            : AnyShapeStyle(Color(hex: "#be185d").opacity(0.14))
                                    )
                                    .overlay(
                                        Capsule().strokeBorder(
                                            isDark ? Color(hex: "#ec4899").opacity(0.25) : Color(hex: "#be185d").opacity(0.30),
                                            lineWidth: 1
                                        )
                                    )
                                    .matchedGeometryEffect(id: "soundSubTabIndicator", in: soundSubTabIndicator)
                            }
                        }
                    }
                    .buttonStyle(LumenPressStyle(weight: .soft))
                }
            }
            .padding(3)
            .background(
                Capsule()
                    .fill(isDark ? .white.opacity(0.04) : Color(hex: "#be185d").opacity(0.07))
            )
        }
    }

    private func soundSubTabIcon(for subTab: SoundSubTab) -> String {
        switch subTab {
        case .controls: return "speaker.wave.2.fill"
        case .soundscapes: return "headphones"
        case .mixer: return "slider.horizontal.3"
        }
    }

    private func soundSubTabName(_ subTab: SoundSubTab) -> String {
        switch subTab {
        case .controls: return "Controls"
        case .soundscapes: return "Soundscapes"
        case .mixer: return "Mixer"
        }
    }

    /// Lock indicator for sound sub-tabs. Only Soundscapes is gated.
    private struct SoundSubTabLockModifier: ViewModifier {
        let subTab: SoundSubTab

        func body(content: Content) -> some View {
            if subTab == .soundscapes {
                content.lockedFeatureIndicator(for: .soundscapes)
            } else {
                content
            }
        }
    }

    private var soundSubTabTint: Color {
        switch activeSoundSubTab {
        case .controls: return Color(hex: "#ec4899")
        case .soundscapes: return Color(hex: "#8B5CF6")
        case .mixer: return .teal
        }
    }

    // MARK: - Sync Tab (Delegated)

    private var syncTab: some View {
        VStack(spacing: 16) {
            settingsCard(tint: .teal) {
                ConnectivitySettingsView()
            }

            settingsCard(tint: .teal) {
                SyncStatusView()
            }
        }
    }

    // MARK: - Sign Out Tab (Delegated)

    private var signOutTab: some View {
        settingsCard(tint: .red.opacity(0.6)) {
            SignOutView()
        }
    }

    // MARK: - App Info Footer

    private var appInfoSection: some View {
        VStack(spacing: 6) {
            Text("LumenLingo")
                .font(.headline)
                .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
            Text(L.version)
                .font(.caption)
                .foregroundStyle(isDark ? .white.opacity(0.25) : .caribbeanMist.opacity(0.7))

            // "Made with ❤️ for language learners" — heart as SF Symbol
            // so it renders reliably (emoji can be invisible with foregroundStyle)
            madeWithLoveLabel
        }
    }

    private var madeWithLoveLabel: some View {
        let parts = L.madeWithLove.components(separatedBy: "\u{2764}\u{FE0F}")
        let tint: Color = isDark ? .white.opacity(0.25) : .caribbeanMist.opacity(0.7)

        return HStack(spacing: 0) {
            if let before = parts.first {
                Text(before)
            }
            Image(systemName: "heart.fill")
                .font(.system(size: 10))
                .foregroundStyle(.pink)
            if parts.count > 1 {
                Text(parts[1])
            }
        }
        .font(.caption)
        .foregroundStyle(tint)
    }

    // MARK: - Shared Components

    private func settingsCard<Content: View>(
        tint: Color? = nil,
        @ViewBuilder content: @escaping () -> Content
    ) -> some View {
        GlassPanelWrapper(cornerRadius: 18, tintColor: tint) {
            content()
        }
    }

    // MARK: - Debug Panel (DEBUG only)

    #if DEBUG
    private var debugPanelLink: some View {
        NavigationLink {
            TierDebugView()
        } label: {
            GlassPanelWrapper {
                HStack(spacing: 10) {
                    Image(systemName: "ladybug.fill")
                        .font(.system(size: 16))
                        .foregroundStyle(.orange)

                    Text("Tier Debug Panel")
                        .font(.system(size: 14, weight: .semibold))
                        .foregroundStyle(isDark ? .white.opacity(0.7) : .primary)

                    Spacer()

                    if tierManager.hasActiveOverrides {
                        Text("ACTIVE")
                            .font(.system(size: 8, weight: .heavy, design: .rounded))
                            .tracking(0.5)
                            .padding(.horizontal, 6)
                            .padding(.vertical, 2)
                            .background(Capsule().fill(.orange.opacity(0.2)))
                            .foregroundStyle(.orange)
                    }

                    Image(systemName: "chevron.right")
                        .font(.system(size: 12, weight: .semibold))
                        .foregroundStyle(isDark ? .white.opacity(0.3) : .secondary)
                }
            }
        }
        .buttonStyle(.plain)
    }
    #endif
}
