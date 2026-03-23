import SwiftUI
import SwiftData

// MARK: - Settings View

/// Dedicated settings screen accessible from the bottom tab bar.
/// Contains Appearance, Sound, Sync, and Sign Out tabs previously in ProfileView.
struct SettingsView: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(ThemeManager.self) private var themeManager
    @Environment(TierManager.self) private var tierManager
    @Environment(\.localization) private var localization

    @Query private var profiles: [UserProfile]
    private var profile: UserProfile? { profiles.first }
    private var L: AppStrings { localization.strings }

    private var isDark: Bool { colorScheme == .dark }

    @State private var activeTab: SettingsTab = .appearance
    @State private var activeAppearanceSubTab: AppearanceSubTab = .darkLight
    @State private var activeSoundSubTab: SoundSubTab = .soundscapes

    // Tab transition direction
    @State private var tabDirection: Int = 0
    @State private var subTabDirection: Int = 0
    @State private var soundSubTabDirection: Int = 0
    @Namespace private var tabIndicator
    @Namespace private var subTabIndicator
    @Namespace private var soundSubTabIndicator

    // Entry animation
    @State private var contentAppeared = false
    @State private var gearRotation: Double = 0
    @State private var glowPulse: CGFloat = 0.4

    // GDPR data export
    @Environment(\.modelContext) private var modelContext
    @State private var showGDPRExportSuccess = false

    private var availableAppearanceSubTabs: [AppearanceSubTab] {
        AppearanceSubTab.allCases.filter { isDark || $0 != .nebulaDrift }
    }

    enum SettingsTab: String, CaseIterable {
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
                // Settings hero header
                settingsHeader
                    .padding(.horizontal, 16)
                    .padding(.top, 10)
                    .opacity(contentAppeared ? 1 : 0)
                    .offset(y: contentAppeared ? 0 : 20)

                // Top-level settings tabs
                settingsTabBar
                    .padding(.horizontal, 16)
                    .padding(.top, 16)
                    .opacity(contentAppeared ? 1 : 0)

                // Tab content
                settingsContent
                    .padding(.horizontal, 16)
                    .padding(.top, 16)
                    .transition(.asymmetric(
                        insertion: .opacity.combined(with: .offset(x: CGFloat(tabDirection * 30))),
                        removal: .opacity.combined(with: .offset(x: CGFloat(-tabDirection * 30)))
                    ))
                    .id(activeTab)

                // GDPR data export (free for all tiers)
                gdprExportSection
                    .padding(.horizontal, 16)
                    .padding(.top, 16)

                // Legal links
                legalLinksSection
                    .padding(.horizontal, 16)
                    .padding(.top, 16)

                // App footer
                appInfoSection
                    .padding(.top, 24)

                #if DEBUG
                qaPanelLink
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
                contentAppeared = true
            }
            // Slow continuous gear rotation
            withAnimation(.linear(duration: 30).repeatForever(autoreverses: false)) {
                gearRotation = 360
            }
            // Pulsing glow
            withAnimation(.easeInOut(duration: 3).repeatForever(autoreverses: true)) {
                glowPulse = 0.8
            }
        }
    }

    // MARK: - Settings Header

    /// Gorgeous glassmorphic hero banner with animated gear icon,
    /// gradient typography, and tier-tinted ambient glow.
    private var settingsHeader: some View {
        let accentColors: [Color] = isDark
            ? [Color(hex: "#a78bfa"), Color(hex: "#7c3aed"), Color(hex: "#6d28d9")]
            : [Color(hex: "#7c3aed"), Color(hex: "#8b5cf6"), Color(hex: "#a78bfa")]

        return VStack(spacing: 12) {
            // Animated gear icon with concentric rings
            ZStack {
                // Outer glow ring — breathing pulse
                Circle()
                    .stroke(
                        AngularGradient(
                            colors: accentColors + [accentColors[0]],
                            center: .center
                        ),
                        lineWidth: 1.5
                    )
                    .frame(width: 72, height: 72)
                    .opacity(Double(glowPulse) * 0.35)
                    .blur(radius: 4)
                    .rotationEffect(.degrees(-gearRotation * 0.5))

                // Middle halo ring
                Circle()
                    .stroke(
                        LinearGradient(
                            colors: [
                                accentColors[0].opacity(0.25),
                                accentColors[1].opacity(0.08),
                                accentColors[2].opacity(0.20)
                            ],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        ),
                        lineWidth: 1
                    )
                    .frame(width: 60, height: 60)
                    .rotationEffect(.degrees(gearRotation * 0.3))

                // Inner tinted glass circle
                Circle()
                    .fill(
                        isDark
                            ? Color(hex: "#7c3aed").opacity(0.12)
                            : Color(hex: "#7c3aed").opacity(0.07)
                    )
                    .frame(width: 52, height: 52)
                Circle()
                    .strokeBorder(
                        LinearGradient(
                            colors: [
                                .white.opacity(isDark ? 0.20 : 0.60),
                                .white.opacity(isDark ? 0.05 : 0.18)
                            ],
                            startPoint: .top,
                            endPoint: .bottom
                        ),
                        lineWidth: 0.5
                    )
                    .frame(width: 52, height: 52)

                // Gear icon — slowly rotating
                Image(systemName: "gearshape.2.fill")
                    .font(.system(size: 24, weight: .medium))
                    .foregroundStyle(
                        LinearGradient(
                            colors: accentColors,
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
                    .rotationEffect(.degrees(gearRotation))
            }

            // Title with gradient
            Text(L.settingsHeaderTitle)
                .font(.system(size: 20, weight: .bold, design: .rounded))
                .foregroundStyle(
                    LinearGradient(
                        colors: accentColors,
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )

            // Subtitle
            Text(L.settingsHeaderSubtitle)
                .font(.system(size: 13, weight: .medium))
                .foregroundStyle(isDark ? .white.opacity(0.55) : .caribbeanPlum.opacity(0.7))
                .multilineTextAlignment(.center)

            // Tier accent bar — a thin luminous separator
            Capsule()
                .fill(
                    LinearGradient(
                        colors: accentColors.map { $0.opacity(Double(glowPulse)) },
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .frame(width: 48, height: 2.5)
                .shadow(color: accentColors[0].opacity(Double(glowPulse) * 0.4), radius: 6, y: 0)
        }
        .padding(.vertical, 20)
        .padding(.horizontal, 24)
        .frame(maxWidth: .infinity)
        .background(
            ZStack {
                GlassCardBackground(
                    cornerRadius: 24,
                    tintColor: Color(hex: "#7c3aed")
                )
                if !isDark {
                    RoundedRectangle(cornerRadius: 24)
                        .fill(Color.white.opacity(0.25))
                }

                // Ambient radial glow behind — subtle brand tint
                RoundedRectangle(cornerRadius: 24)
                    .fill(
                        RadialGradient(
                            colors: [
                                accentColors[1].opacity(isDark ? 0.06 : 0.03),
                                Color.clear
                            ],
                            center: .top,
                            startRadius: 10,
                            endRadius: 200
                        )
                    )
            }
        )
    }

    // MARK: - Settings Tab Bar

    private var settingsTabBar: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack(spacing: 3) {
                ForEach(SettingsTab.allCases, id: \.self) { tab in
                    Button {
                        let oldIndex = SettingsTab.allCases.firstIndex(of: activeTab) ?? 0
                        let newIndex = SettingsTab.allCases.firstIndex(of: tab) ?? 0
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
                                .font(.system(size: 12, weight: activeTab == tab ? .semibold : .medium))
                        }
                        .foregroundStyle(
                            activeTab == tab
                                ? (isDark ? .white : Color.white)
                                : (isDark ? .white.opacity(0.45) : .caribbeanPlum)
                        )
                        .padding(.horizontal, 12)
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
                                            : AnyShapeStyle(LinearGradient.caribbeanGradientOcean)
                                    )
                                    .overlay(
                                        Capsule().strokeBorder(
                                            isDark ? .white.opacity(0.12) : .white.opacity(0.25),
                                            lineWidth: isDark ? 1 : 0.5
                                        )
                                    )
                                    .shadow(
                                        color: isDark ? .clear : Color(hex: "#0EA5E9").opacity(0.20),
                                        radius: isDark ? 0 : 6,
                                        y: isDark ? 0 : 2
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
                    .fill(isDark ? .white.opacity(0.06) : Color.caribbeanElevated)
                    .overlay(
                        isDark ? nil : Capsule().strokeBorder(Color.caribbeanBorderSubtle, lineWidth: 0.5)
                    )
            )
        }
    }

    private func tabIcon(for tab: SettingsTab) -> String {
        switch tab {
        case .appearance: return "paintbrush.fill"
        case .sound: return "speaker.wave.2.fill"
        case .sync: return "arrow.triangle.2.circlepath"
        case .signOut: return "rectangle.portrait.and.arrow.right"
        }
    }

    private func localizedTabName(_ tab: SettingsTab) -> String {
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
            appearanceSubTabBar

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
                                ? (isDark ? .white : Color.caribbeanInk)
                                : (isDark ? .white.opacity(0.4) : .caribbeanPlum)
                        )
                        .padding(.horizontal, 10)
                        .padding(.vertical, 6)
                        .background {
                            if activeAppearanceSubTab == subTab {
                                Capsule()
                                    .fill(
                                        isDark
                                            ? AnyShapeStyle(Color(hex: "#8b5cf6").opacity(0.15))
                                            : AnyShapeStyle(Color.caribbeanSelected)
                                    )
                                    .overlay(
                                        Capsule().strokeBorder(
                                            isDark ? Color(hex: "#8b5cf6").opacity(0.25) : Color.caribbeanBorderSubtle,
                                            lineWidth: isDark ? 1 : 0.5
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
                    .fill(isDark ? .white.opacity(0.04) : Color.caribbeanElevated)
                    .overlay(
                        isDark ? nil : Capsule().strokeBorder(Color.caribbeanBorderSubtle, lineWidth: 0.5)
                    )
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

    private var appearanceSubTabTint: Color {
        switch activeAppearanceSubTab {
        case .darkLight: return Color(hex: "#8b5cf6")
        case .breathingOrbs: return .purple
        case .quantumFlow: return .cyan
        case .nebulaDrift: return .indigo
        }
    }

    // MARK: - Dark/Light Sub-Tab

    private var darkLightSettings: some View {
        VStack(spacing: 16) {
            HStack(spacing: 12) {
                ZStack {
                    Circle()
                        .fill(
                            isDark
                                ? AnyShapeStyle(Color(hex: "#8b5cf6").opacity(0.15))
                                : AnyShapeStyle(LinearGradient.caribbeanGradientWarm.opacity(0.15))
                        )
                        .frame(width: 36, height: 36)

                    Image(systemName: isDark ? "moon.fill" : "sun.max.fill")
                        .font(.system(size: 18))
                        .foregroundStyle(
                            isDark
                                ? AnyShapeStyle(Color(hex: "#8b5cf6"))
                                : AnyShapeStyle(LinearGradient.caribbeanGradientWarm)
                        )
                        .contentTransition(.symbolEffect(.replace))
                }

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
                    enabledColor: isDark ? Color(hex: "#8b5cf6") : Color(hex: "#0EA5E9"),
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
            soundSubTabBar

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
                                ? (isDark ? .white : Color.caribbeanInk)
                                : (isDark ? .white.opacity(0.4) : .caribbeanPlum)
                        )
                        .padding(.horizontal, 10)
                        .padding(.vertical, 6)
                        .background {
                            if activeSoundSubTab == subTab {
                                Capsule()
                                    .fill(
                                        isDark
                                            ? AnyShapeStyle(Color(hex: "#ec4899").opacity(0.15))
                                            : AnyShapeStyle(Color.caribbeanSelected)
                                    )
                                    .overlay(
                                        Capsule().strokeBorder(
                                            isDark ? Color(hex: "#ec4899").opacity(0.25) : Color.caribbeanBorderSubtle,
                                            lineWidth: isDark ? 1 : 0.5
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
                    .fill(isDark ? .white.opacity(0.04) : Color.caribbeanElevated)
                    .overlay(
                        isDark ? nil : Capsule().strokeBorder(Color.caribbeanBorderSubtle, lineWidth: 0.5)
                    )
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

    // MARK: - Sync Tab

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

    // MARK: - Sign Out Tab

    private var signOutTab: some View {
        settingsCard(tint: .red.opacity(0.6)) {
            SignOutView()
        }
    }

    // MARK: - GDPR Data Export

    private var gdprExportSection: some View {
        settingsCard(tint: .green.opacity(0.4)) {
            VStack(spacing: 12) {
                HStack(spacing: 12) {
                    Image(systemName: "arrow.down.doc.fill")
                        .font(.system(size: 20, weight: .semibold))
                        .foregroundStyle(.green)

                    VStack(alignment: .leading, spacing: 2) {
                        Text(L.gdprExportTitle)
                            .font(.system(size: 15, weight: .semibold))
                            .foregroundStyle(isDark ? .white : .primary)

                        Text(L.gdprExportDesc)
                            .font(.system(size: 12))
                            .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
                            .lineLimit(3)
                    }

                    Spacer()
                }
                .padding(.horizontal, 16)
                .padding(.top, 14)

                Button {
                    exportGDPRData()
                } label: {
                    HStack(spacing: 8) {
                        Image(systemName: showGDPRExportSuccess ? "checkmark.circle.fill" : "square.and.arrow.up")
                            .font(.system(size: 14, weight: .semibold))
                        Text(showGDPRExportSuccess ? L.gdprExportSuccess : L.gdprExportButton)
                            .font(.system(size: 14, weight: .semibold))
                    }
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 12)
                    .background(
                        RoundedRectangle(cornerRadius: 12)
                            .fill(showGDPRExportSuccess ? .green.opacity(0.2) : (isDark ? .white.opacity(0.08) : .black.opacity(0.05)))
                    )
                    .foregroundStyle(showGDPRExportSuccess ? .green : (isDark ? .white.opacity(0.8) : .primary))
                }
                .buttonStyle(.plain)
                .disabled(showGDPRExportSuccess)
                .padding(.horizontal, 16)
                .padding(.bottom, 14)
            }
        }
    }

    private func exportGDPRData() {
        let data = GDPRDataExporter.exportAllData(context: modelContext)
        guard !data.isEmpty else { return }

        let tempDir = FileManager.default.temporaryDirectory
        let fileURL = tempDir.appendingPathComponent("LumenLingo-PersonalData.json")

        do {
            try data.write(to: fileURL, options: .atomic)
        } catch {
            return
        }

        guard let windowScene = UIApplication.shared.connectedScenes.first as? UIWindowScene,
              let rootVC = windowScene.windows.first?.rootViewController else { return }

        var topVC = rootVC
        while let presented = topVC.presentedViewController {
            topVC = presented
        }

        let activityVC = UIActivityViewController(activityItems: [fileURL], applicationActivities: nil)
        activityVC.completionWithItemsHandler = { _, completed, _, _ in
            try? FileManager.default.removeItem(at: fileURL)
            if completed {
                withAnimation(.spring(response: 0.4, dampingFraction: 0.8)) {
                    showGDPRExportSuccess = true
                }
                DispatchQueue.main.asyncAfter(deadline: .now() + 3) {
                    withAnimation { showGDPRExportSuccess = false }
                }
            }
        }

        if let popover = activityVC.popoverPresentationController {
            popover.sourceView = topVC.view
            popover.sourceRect = CGRect(x: topVC.view.bounds.midX, y: topVC.view.bounds.midY, width: 0, height: 0)
            popover.permittedArrowDirections = []
        }

        topVC.present(activityVC, animated: true)
    }

    // MARK: - App Info Footer

    // MARK: - Legal Links

    private var legalLinksSection: some View {
        VStack(spacing: 8) {
            settingsCard {
                VStack(spacing: 0) {
                    legalLink(
                        title: L.privacyPolicyTitle,
                        icon: "lock.shield.fill",
                        color: .cyan,
                        url: "https://lumenlingo.com/en/privacy"
                    )
                    Divider().padding(.leading, 44).background(isDark ? .white.opacity(0.06) : .black.opacity(0.06))
                    legalLink(
                        title: L.termsOfServiceTitle,
                        icon: "doc.text.fill",
                        color: .purple,
                        url: "https://lumenlingo.com/en/terms"
                    )
                    Divider().padding(.leading, 44).background(isDark ? .white.opacity(0.06) : .black.opacity(0.06))
                    legalLink(
                        title: L.eulaTitle,
                        icon: "doc.badge.gearshape.fill",
                        color: .blue,
                        url: "https://lumenlingo.com/en/eula"
                    )
                }
            }

            Text(L.trademarkAttribution)
                .font(.system(size: 9))
                .foregroundStyle(isDark ? .white.opacity(0.2) : .secondary.opacity(0.5))
                .multilineTextAlignment(.center)
                .padding(.horizontal, 16)
        }
    }

    private func legalLink(title: String, icon: String, color: Color, url: String) -> some View {
        Link(destination: URL(string: url)!) {
            HStack(spacing: 12) {
                Image(systemName: icon)
                    .font(.system(size: 15, weight: .semibold))
                    .foregroundStyle(color)
                    .frame(width: 28)

                Text(title)
                    .font(.system(size: 14, weight: .medium))
                    .foregroundStyle(isDark ? .white.opacity(0.8) : .primary)

                Spacer()

                Image(systemName: "arrow.up.right")
                    .font(.system(size: 11, weight: .semibold))
                    .foregroundStyle(isDark ? .white.opacity(0.3) : .secondary)
            }
            .padding(.horizontal, 16)
            .padding(.vertical, 14)
        }
        .buttonStyle(.plain)
    }

    // MARK: - App Info

    private var appInfoSection: some View {
        VStack(spacing: 6) {
            Text("LumenLingo")
                .font(.headline)
                .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
            Text(L.version)
                .font(.caption)
                .foregroundStyle(isDark ? .white.opacity(0.25) : .caribbeanMist.opacity(0.7))

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

    // MARK: - QA Panel (DEBUG only)

    #if DEBUG
    private var qaPanelLink: some View {
        NavigationLink {
            QAPanelView()
        } label: {
            GlassPanelWrapper {
                HStack(spacing: 10) {
                    Image(systemName: "ladybug.fill")
                        .font(.system(size: 16))
                        .foregroundStyle(.orange)

                    Text("QA Panel")
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
