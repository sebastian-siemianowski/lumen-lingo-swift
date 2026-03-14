import SwiftUI
import SwiftData

// MARK: - Breathing Orbs Settings

/// Full React-parity sub-tab for Breathing Orbs settings.
/// Enable toggle, rave mode, 6 color scheme cards, intensity/speed sliders.
struct BreathingOrbsSettingsView: View {
    @Query private var profiles: [UserProfile]
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization
    @State private var previewingScheme: BreathingOrbScheme? = nil

    private var L: AppStrings { localization.strings }
    private var profile: UserProfile? { profiles.first }
    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        VStack(spacing: 20) {
            // Header with toggle
            headerRow

            // Controls always visible (React: <Collapse isOpen={true} noAnimation={true}>)
            // The toggle only controls whether LayoutBackgroundView renders the orb layer.

            // Rave mode toggle
            raveModeToggle

            // Color scheme selector
            schemeSelectorSection

            // Intensity slider
            intensitySlider

            // Speed slider
            speedSlider

            // Status description
            statusDescription
        }
        .animation(.easeInOut(duration: 0.3), value: profile?.breathingOrbsEnabled)
        .fullScreenCover(item: $previewingScheme) { scheme in
            FullscreenOrbsPreview(
                initialScheme: scheme,
                isDarkMode: isDark,
                intensity: profile?.orbIntensity ?? 1.0,
                speed: profile?.orbSpeed ?? 1.0,
                raveMode: profile?.orbRaveMode ?? false,
                onDismiss: { previewingScheme = nil }
            )
        }
    }

    // MARK: - Header

    private var headerRow: some View {
        HStack(spacing: 12) {
            // Animated icon
            Image(systemName: "scope")
                .font(.system(size: 20))
                .foregroundStyle(.purple)
                .scaleEffect(profile?.breathingOrbsEnabled == true ? 1.0 : 0.85)
                .opacity(profile?.breathingOrbsEnabled == true ? 1.0 : 0.5)
                .animation(.easeInOut(duration: 2).repeatForever(autoreverses: true), value: profile?.breathingOrbsEnabled)

            VStack(alignment: .leading, spacing: 2) {
                Text(L.breathingOrbs)
                    .font(.system(size: 17, weight: .semibold))
                    .foregroundStyle(isDark ? .white : .caribbeanInk)
                Text(L.ambientBackgroundAnimation)
                    .font(.system(size: 13))
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanPlum)
            }

            Spacer()

            PremiumToggle(
                isOn: profile?.breathingOrbsEnabled ?? true,
                onToggle: {
                    withAnimation {
                        profile?.breathingOrbsEnabled.toggle()
                        if profile?.breathingOrbsEnabled == true {
                            profile?.quantumFlowEnabled = false
                            profile?.nebulaDriftEnabled = false
                        }
                    }
                }
            )
        }
    }

    // MARK: - Rave Mode

    private var raveModeToggle: some View {
        HStack(spacing: 12) {
            Image(systemName: "bolt.fill")
                .font(.system(size: 20))
                .foregroundStyle(.pink)

            VStack(alignment: .leading, spacing: 2) {
                Text(L.raveMode)
                    .font(.system(size: 17, weight: .semibold))
                    .foregroundStyle(isDark ? .white : .caribbeanInk)
                Text("Vivid colour cycling across orbs")
                    .font(.system(size: 13))
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanPlum)
            }

            Spacer()

            PremiumToggle(
                isOn: profile?.orbRaveMode ?? false,
                onToggle: {
                    withAnimation { profile?.orbRaveMode.toggle() }
                }
            )
        }
    }

    // MARK: - Scheme Selector

    private var schemeSelectorSection: some View {
        VStack(alignment: .leading, spacing: 10) {
            HStack(spacing: 6) {
                Image(systemName: "lightbulb.fill")
                    .font(.system(size: 14))
                    .foregroundStyle(isDark ? .white.opacity(0.7) : .caribbeanMist)
                Text(L.colorScheme)
                    .font(.system(size: 14, weight: .semibold))
                    .foregroundStyle(isDark ? .white : .caribbeanInk)
            }

            LazyVGrid(columns: [
                GridItem(.flexible(), spacing: 10),
                GridItem(.flexible(), spacing: 10),
            ], spacing: 10) {
                ForEach(BreathingOrbScheme.allCases) { scheme in
                    SchemeCardView(
                        name: scheme.displayName,
                        description: scheme.description,
                        previewColors: scheme.previewColors,
                        isSelected: profile?.orbScheme == scheme,
                        previewHeight: 70
                    ) {
                        withAnimation(.spring(response: 0.3, dampingFraction: 0.7)) {
                            profile?.orbScheme = scheme
                        }
                    } onFullscreen: {
                        previewingScheme = scheme
                    }
                }
            }
        }
    }

    // MARK: - Sliders

    private var intensitySlider: some View {
        SettingsSliderView(
            label: L.intensity,
            iconName: "gauge.medium",
            value: Binding(
                get: { profile?.orbIntensity ?? 1.0 },
                set: { profile?.orbIntensity = $0 }
            ),
            range: 0...2,
            step: 0.1,
            presets: [
                (0.5, L.subtle, "drop"),
                (1.0, L.balanced, "water.waves"),
                (1.5, L.celestial, "flame"),
            ]
        )
    }

    private var speedSlider: some View {
        SettingsSliderView(
            label: L.speed,
            iconName: "timer",
            value: Binding(
                get: { profile?.orbSpeed ?? 1.0 },
                set: { profile?.orbSpeed = $0 }
            ),
            range: 0...2,
            step: 0.1,
            presets: [
                (0.5, L.calm, "leaf"),
                (1.0, L.flowing, "wind"),
                (1.5, L.swift_, "bolt"),
            ]
        )
    }

    // MARK: - Status Description

    private var statusDescription: some View {
        let intensity = profile?.orbIntensity ?? 1.0
        let speed = profile?.orbSpeed ?? 1.0

        let (icon, text): (String, String) = {
            if intensity == 0 {
                return ("leaf", L.perfectStillness)
            } else if speed < 0.8 {
                return ("leaf", L.gentleAndPeaceful)
            } else if speed < 1.2 {
                return ("water.waves", L.balancedRhythm)
            } else {
                return ("bolt", L.quickAndEnergetic)
            }
        }()

        return HStack(spacing: 8) {
            Image(systemName: icon)
                .font(.system(size: 13))
                .foregroundStyle(.purple.opacity(0.7))
            Text(text)
                .font(.system(size: 13))
                .italic()
                .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanPlum)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 10)
        .background(
            RoundedRectangle(cornerRadius: 12, style: .continuous)
                .fill(isDark ? .white.opacity(0.04) : .white.opacity(0.2))
                .overlay(
                    RoundedRectangle(cornerRadius: 12, style: .continuous)
                        .strokeBorder(.white.opacity(isDark ? 0.06 : 0.12), lineWidth: 0.5)
                )
        )
    }
}

// MARK: - Fullscreen Orbs Preview

struct FullscreenOrbsPreview: View {
    @Environment(\.localization) private var localization
    private var L: AppStrings { localization.strings }

    let initialScheme: BreathingOrbScheme
    let isDarkMode: Bool
    let intensity: Double
    let speed: Double
    var raveMode: Bool = false
    let onDismiss: () -> Void

    @State private var currentIndex: Int = 0

    private let allSchemes = BreathingOrbScheme.allCases

    init(initialScheme: BreathingOrbScheme, isDarkMode: Bool, intensity: Double, speed: Double, raveMode: Bool = false, onDismiss: @escaping () -> Void) {
        self.initialScheme = initialScheme
        self.isDarkMode = isDarkMode
        self.intensity = intensity
        self.speed = speed
        self.raveMode = raveMode
        self.onDismiss = onDismiss
        _currentIndex = State(initialValue: BreathingOrbScheme.allCases.firstIndex(of: initialScheme) ?? 0)
    }

    private var currentScheme: BreathingOrbScheme { allSchemes[currentIndex] }
    private var canGoLeft: Bool { currentIndex > 0 }
    private var canGoRight: Bool { currentIndex < allSchemes.count - 1 }

    var body: some View {
        ZStack {
            Color(red: 6/255, green: 5/255, blue: 20/255)
                .ignoresSafeArea()

            BreathingOrbsView(
                isDarkMode: isDarkMode,
                scheme: currentScheme,
                intensity: intensity,
                speed: speed,
                raveMode: raveMode
            )
            .ignoresSafeArea()

            // Navigation overlay
            VStack {
                HStack {
                    Spacer()
                    VStack(spacing: 4) {
                        Text(currentScheme.displayName)
                            .font(.system(size: 15, weight: .semibold))
                            .foregroundStyle(.white.opacity(0.85))
                        Text("\(currentIndex + 1) / \(allSchemes.count)")
                            .font(.system(size: 12, weight: .medium).monospacedDigit())
                            .foregroundStyle(.white.opacity(0.45))
                    }
                    .padding(.horizontal, 20)
                    .padding(.vertical, 10)
                    .background(
                        Capsule()
                            .fill(.ultraThinMaterial)
                            .overlay(Capsule().strokeBorder(.white.opacity(0.15), lineWidth: 0.5))
                    )
                    Spacer()
                }
                .padding(.top, 60)

                Spacer()

                HStack(spacing: 16) {
                    Button {
                        withAnimation(.easeInOut(duration: 0.3)) { if canGoLeft { currentIndex -= 1 } }
                    } label: {
                        Image(systemName: "chevron.left")
                            .font(.system(size: 16, weight: .semibold))
                            .foregroundStyle(.white.opacity(canGoLeft ? 0.9 : 0.25))
                            .frame(width: 44, height: 44)
                            .background(Circle().fill(.ultraThinMaterial).overlay(Circle().strokeBorder(.white.opacity(canGoLeft ? 0.2 : 0.08), lineWidth: 0.5)))
                    }
                    .buttonStyle(LumenPressStyle(weight: .soft))
                    .disabled(!canGoLeft)

                    Button { onDismiss() } label: {
                        HStack(spacing: 8) {
                            Image(systemName: "chevron.down")
                                .font(.system(size: 14, weight: .semibold))
                            Text(L.exitPreview)
                                .font(.system(size: 15, weight: .semibold))
                        }
                        .foregroundStyle(.white)
                        .padding(.horizontal, 24)
                        .padding(.vertical, 12)
                        .background(
                            Capsule()
                                .fill(.ultraThinMaterial)
                                .overlay(Capsule().strokeBorder(LinearGradient(colors: [.white.opacity(0.25), .white.opacity(0.10)], startPoint: .top, endPoint: .bottom), lineWidth: 1))
                                .shadow(color: .purple.opacity(0.3), radius: 12)
                                .shadow(color: .black.opacity(0.4), radius: 20, y: 8)
                        )
                    }
                    .buttonStyle(LumenPressStyle(weight: .medium, accentColor: .purple))

                    Button {
                        withAnimation(.easeInOut(duration: 0.3)) { if canGoRight { currentIndex += 1 } }
                    } label: {
                        Image(systemName: "chevron.right")
                            .font(.system(size: 16, weight: .semibold))
                            .foregroundStyle(.white.opacity(canGoRight ? 0.9 : 0.25))
                            .frame(width: 44, height: 44)
                            .background(Circle().fill(.ultraThinMaterial).overlay(Circle().strokeBorder(.white.opacity(canGoRight ? 0.2 : 0.08), lineWidth: 0.5)))
                    }
                    .buttonStyle(LumenPressStyle(weight: .soft))
                    .disabled(!canGoRight)
                }
                .padding(.bottom, 50)
            }
        }
        .simultaneousGesture(
            DragGesture(minimumDistance: 50)
                .onEnded { gesture in
                    let horizontal = abs(gesture.translation.width)
                    let vertical = abs(gesture.translation.height)
                    guard horizontal > vertical else { return }
                    if gesture.translation.width < -50 && canGoRight {
                        withAnimation(.easeInOut(duration: 0.3)) { currentIndex += 1 }
                    } else if gesture.translation.width > 50 && canGoLeft {
                        withAnimation(.easeInOut(duration: 0.3)) { currentIndex -= 1 }
                    }
                }
        )
    }
}