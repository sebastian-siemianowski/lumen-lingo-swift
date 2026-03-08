import SwiftUI
import SwiftData

// MARK: - Profile View (React-Parity Overhaul)

/// Full React-parity profile screen with 5 top-level tabs
/// (Appearance, Sound, Beta, Sync, Sign Out) and 4 appearance sub-tabs
/// (Dark/Light, Breathing Orbs, Quantum Flow, Nebula Drift).
struct ProfileView: View {
    @Environment(\.modelContext) private var modelContext
    @Environment(\.colorScheme) private var colorScheme
    @Environment(ThemeManager.self) private var themeManager

    @Query private var profiles: [UserProfile]
    @Query private var languagePrefs: [LanguagePreference]
    @Query(sort: \GameProgressRecord.createdDate, order: .reverse)
    private var allProgress: [GameProgressRecord]

    private var profile: UserProfile? { profiles.first }
    private var user: AppUser { .mock }

    @State private var activeTab: ProfileTab = .appearance
    @State private var activeAppearanceSubTab: AppearanceSubTab = .darkLight
    @State private var showLanguageSelector = false

    private var isDark: Bool { colorScheme == .dark }

    // Entry animation state
    @State private var headerAppeared = false
    // Tab transition direction
    @State private var tabDirection: Int = 0
    @State private var subTabDirection: Int = 0
    @Namespace private var tabIndicator
    @Namespace private var subTabIndicator

    enum ProfileTab: String, CaseIterable {
        case appearance = "Appearance"
        case sound = "Sound"
        case beta = "Beta"
        case sync = "Sync"
        case signOut = "Sign Out"
    }

    enum AppearanceSubTab: String, CaseIterable {
        case darkLight = "Dark/Light"
        case breathingOrbs = "Orbs"
        case quantumFlow = "Quantum"
        case nebulaDrift = "Nebula"
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
                    // Outer glow rings (combined halo + ring into one layer)
                    Circle()
                        .fill(
                            RadialGradient(
                                colors: [
                                    Color(hex: "#667eea").opacity(0.3),
                                    Color(hex: "#764ba2").opacity(0.12),
                                    .clear
                                ],
                                center: .center,
                                startRadius: 30,
                                endRadius: 70
                            )
                        )
                        .frame(width: 120, height: 120)

                    Circle()
                        .fill(
                            LinearGradient(
                                colors: [Color(hex: "#667eea"), Color(hex: "#764ba2")],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            )
                        )
                        .frame(width: 80, height: 80)
                        .shadow(color: Color(hex: "#764ba2").opacity(0.5), radius: 20)

                    Image(systemName: "person.fill")
                        .font(.system(size: 32, weight: .medium))
                        .foregroundStyle(.white)
                }
                .drawingGroup()
                .pulsingGlow(color: Color(hex: "#764ba2"), radius: 8, speed: 3.0)

                // Name & level
                VStack(spacing: 4) {
                    Text(user.name)
                        .font(.title2.bold())
                        .foregroundStyle(isDark ? .white : Color(red: 30/255, green: 25/255, blue: 60/255))

                    HStack(spacing: 6) {
                        Image(systemName: "star.fill")
                            .font(.caption2)
                            .foregroundStyle(.yellow)
                        Text("Level \(profile?.currentLevel ?? 1) Learner")
                            .font(.subheadline)
                            .foregroundStyle(isDark ? .white.opacity(0.6) : .secondary)
                    }
                }

                // Quick stats row
                HStack(spacing: 0) {
                    quickStat(value: "\(profile?.totalXP ?? 0)", label: "XP", icon: "bolt.fill", color: .cyan)
                    quickStatDivider
                    quickStat(value: "\(profile?.streakDays ?? 0)", label: "Streak", icon: "flame.fill", color: .orange)
                    quickStatDivider
                    quickStat(value: "\(allProgress.count)", label: "Sessions", icon: "play.circle.fill", color: .green)
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
                .foregroundStyle(isDark ? .white : .primary)
            Text(label)
                .font(.caption2)
                .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
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
                        withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                            activeTab = tab
                        }
                    } label: {
                        HStack(spacing: 5) {
                            Image(systemName: tabIcon(for: tab))
                                .font(.system(size: 11))
                            Text(tab.rawValue)
                                .font(.system(size: 12, weight: .semibold))
                        }
                        .foregroundStyle(
                            activeTab == tab
                                ? (isDark ? .white : Color(hex: "#667eea"))
                                : (isDark ? .white.opacity(0.45) : .secondary)
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
                                            : AnyShapeStyle(Color(hex: "#667eea").opacity(0.10))
                                    )
                                    .overlay(
                                        Capsule().strokeBorder(isDark ? .white.opacity(0.12) : Color(hex: "#667eea").opacity(0.20), lineWidth: 1)
                                    )
                                    .matchedGeometryEffect(id: "tabIndicator", in: tabIndicator)
                            }
                        }
                    }
                    .buttonStyle(.plain)
                }
            }
            .padding(4)
            .background(
                Capsule()
                    .fill(isDark ? .white.opacity(0.06) : .black.opacity(0.04))
            )
        }
    }

    private func tabIcon(for tab: ProfileTab) -> String {
        switch tab {
        case .appearance: return "paintbrush.fill"
        case .sound: return "speaker.wave.2.fill"
        case .beta: return "flask.fill"
        case .sync: return "arrow.triangle.2.circlepath"
        case .signOut: return "rectangle.portrait.and.arrow.right"
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
        case .beta:
            betaTab
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
                ForEach(AppearanceSubTab.allCases, id: \.self) { subTab in
                    Button {
                        let oldIndex = AppearanceSubTab.allCases.firstIndex(of: activeAppearanceSubTab) ?? 0
                        let newIndex = AppearanceSubTab.allCases.firstIndex(of: subTab) ?? 0
                        subTabDirection = newIndex > oldIndex ? 1 : -1
                        withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                            activeAppearanceSubTab = subTab
                        }
                    } label: {
                        HStack(spacing: 4) {
                            Image(systemName: subTabIcon(for: subTab))
                                .font(.system(size: 10))
                            Text(subTab.rawValue)
                                .font(.system(size: 11, weight: .medium))
                        }
                        .foregroundStyle(
                            activeAppearanceSubTab == subTab
                                ? (isDark ? .white : Color(hex: "#8b5cf6"))
                                : (isDark ? .white.opacity(0.4) : .secondary)
                        )
                        .padding(.horizontal, 10)
                        .padding(.vertical, 6)
                        .background {
                            if activeAppearanceSubTab == subTab {
                                Capsule()
                                    .fill(
                                        isDark
                                            ? AnyShapeStyle(Color(hex: "#8b5cf6").opacity(0.15))
                                            : AnyShapeStyle(Color(hex: "#8b5cf6").opacity(0.08))
                                    )
                                    .overlay(
                                        Capsule().strokeBorder(
                                            isDark ? Color(hex: "#8b5cf6").opacity(0.25) : Color(hex: "#8b5cf6").opacity(0.15),
                                            lineWidth: 1
                                        )
                                    )
                                    .matchedGeometryEffect(id: "subTabIndicator", in: subTabIndicator)
                            }
                        }
                    }
                    .buttonStyle(.plain)
                }
            }
            .padding(3)
            .background(
                Capsule()
                    .fill(isDark ? .white.opacity(0.04) : .black.opacity(0.03))
            )
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

                VStack(alignment: .leading, spacing: 2) {
                    Text("Dark Mode")
                        .font(.system(size: 17, weight: .semibold))
                        .foregroundStyle(isDark ? .white : .primary)
                    Text(isDark ? "Cosmic dark theme active" : "Light mode active")
                        .font(.system(size: 13))
                        .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
                }

                Spacer()

                PremiumToggle(
                    isOn: themeManager.isDarkMode,
                    enabledColor: Color(hex: "#8b5cf6"),
                    enabledIcon: "moon.fill",
                    disabledIcon: "sun.max.fill"
                ) {
                    themeManager.toggleDarkMode(profile: profile)
                }
            }

            Divider()
                .overlay(isDark ? Color.white.opacity(0.06) : Color.black.opacity(0.06))

            // Animation speed slider
            SettingsSliderView(
                label: "Animation Speed",
                iconName: "gauge.with.dots.needle.67percent",
                value: Binding(
                    get: { profile?.animationSpeed ?? 1.0 },
                    set: { profile?.animationSpeed = $0 }
                ),
                range: 0.2...2.0,
                step: 0.1,
                presets: [
                    (0.5, "Slow", "tortoise"),
                    (1.0, "Normal", "gauge.medium"),
                    (1.5, "Fast", "hare"),
                ]
            )

            // Language pair quick-change
            HStack(spacing: 12) {
                Image(systemName: "globe")
                    .font(.system(size: 16))
                    .foregroundStyle(.cyan)

                let langPref = languagePrefs.first
                VStack(alignment: .leading, spacing: 2) {
                    Text("Language Pair")
                        .font(.system(size: 15, weight: .medium))
                        .foregroundStyle(isDark ? .white : .primary)
                    Text("\(langPref?.sourceLanguageEnum.displayName ?? "English") → \(langPref?.targetLanguageEnum.displayName ?? "Spanish")")
                        .font(.system(size: 12))
                        .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
                }

                Spacer()

                Button {
                    showLanguageSelector = true
                } label: {
                    Image(systemName: "chevron.right")
                        .font(.system(size: 12, weight: .bold))
                        .foregroundStyle(isDark ? .white.opacity(0.3) : .secondary)
                }
                .buttonStyle(.plain)
            }
            .contentShape(Rectangle())
            .onTapGesture { showLanguageSelector = true }
        }
    }

    // MARK: - Sound Tab (Delegated)

    private var soundTab: some View {
        settingsCard(tint: Color(hex: "#ec4899")) {
            SoundSettingsView()
        }
    }

    // MARK: - Beta Tab (Delegated)

    private var betaTab: some View {
        settingsCard(tint: .cyan) {
            BetaLanguagesView()
        }
    }

    // MARK: - Sync Tab (Delegated)

    private var syncTab: some View {
        settingsCard(tint: .teal) {
            SyncStatusView()
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
                .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)
            Text("Version 1.0.0")
                .font(.caption)
                .foregroundStyle(isDark ? .white.opacity(0.25) : .gray.opacity(0.5))
            Text("Made with ❤️ for language learners")
                .font(.caption)
                .foregroundStyle(isDark ? .white.opacity(0.25) : .gray.opacity(0.5))
        }
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
}
