import SwiftUI
import SwiftData

// MARK: - Breathing Orbs Settings

/// Full React-parity sub-tab for Breathing Orbs settings.
/// Enable toggle, rave mode, 6 color scheme cards, intensity/speed sliders.
struct BreathingOrbsSettingsView: View {
    @Query private var profiles: [UserProfile]
    @Environment(\.colorScheme) private var colorScheme
    @State private var previewingScheme: BreathingOrbScheme? = nil

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
                Text("Breathing Orbs")
                    .font(.system(size: 17, weight: .semibold))
                    .foregroundStyle(isDark ? .white : .primary)
                Text("Ambient background animation")
                    .font(.system(size: 13))
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
            }

            Spacer()

            PremiumToggle(
                isOn: profile?.breathingOrbsEnabled ?? true,
                onToggle: {
                    withAnimation { profile?.breathingOrbsEnabled.toggle() }
                }
            )
        }
    }

    // MARK: - Rave Mode

    private var raveModeToggle: some View {
        HStack(spacing: 12) {
            Image(systemName: "bolt.fill")
                .font(.system(size: 16))
                .foregroundStyle(.pink)

            VStack(alignment: .leading, spacing: 2) {
                Text("Rave Mode")
                    .font(.system(size: 15, weight: .medium))
                    .foregroundStyle(isDark ? .white : .primary)
                Text("Rapid color cycling through all schemes")
                    .font(.system(size: 12))
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
            }

            Spacer()

            PremiumToggle(
                isOn: profile?.orbRaveMode ?? false,
                onToggle: {
                    withAnimation { profile?.orbRaveMode.toggle() }
                }
            )
        }
        .padding(.horizontal, 4)
    }

    // MARK: - Scheme Selector

    private var schemeSelectorSection: some View {
        VStack(alignment: .leading, spacing: 10) {
            HStack(spacing: 6) {
                Image(systemName: "lightbulb.fill")
                    .font(.system(size: 14))
                    .foregroundStyle(isDark ? .white.opacity(0.7) : .secondary)
                Text("Color Scheme")
                    .font(.system(size: 14, weight: .semibold))
                    .foregroundStyle(isDark ? .white : .primary)
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
            label: "Intensity",
            iconName: "gauge.medium",
            value: Binding(
                get: { profile?.orbIntensity ?? 1.0 },
                set: { profile?.orbIntensity = $0 }
            ),
            range: 0...2,
            step: 0.1,
            presets: [
                (0.5, "Subtle", "drop"),
                (1.0, "Balanced", "water.waves"),
                (1.5, "Celestial", "flame"),
            ]
        )
    }

    private var speedSlider: some View {
        SettingsSliderView(
            label: "Speed",
            iconName: "timer",
            value: Binding(
                get: { profile?.orbSpeed ?? 1.0 },
                set: { profile?.orbSpeed = $0 }
            ),
            range: 0...2,
            step: 0.1,
            presets: [
                (0.5, "Calm", "leaf"),
                (1.0, "Flowing", "wind"),
                (1.5, "Swift", "bolt"),
            ]
        )
    }

    // MARK: - Status Description

    private var statusDescription: some View {
        let intensity = profile?.orbIntensity ?? 1.0
        let speed = profile?.orbSpeed ?? 1.0

        let (icon, text): (String, String) = {
            if intensity == 0 {
                return ("leaf", "Perfect stillness")
            } else if speed < 0.8 {
                return ("leaf", "Gentle and peaceful")
            } else if speed < 1.2 {
                return ("water.waves", "Balanced rhythm")
            } else {
                return ("bolt", "Quick and energetic")
            }
        }()

        return HStack(spacing: 8) {
            Image(systemName: icon)
                .font(.system(size: 13))
                .foregroundStyle(.purple.opacity(0.7))
            Text(text)
                .font(.system(size: 13))
                .italic()
                .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
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
    let initialScheme: BreathingOrbScheme
    let isDarkMode: Bool
    let intensity: Double
    let speed: Double
    let onDismiss: () -> Void

    @State private var currentIndex: Int = 0

    private let allSchemes = BreathingOrbScheme.allCases

    init(initialScheme: BreathingOrbScheme, isDarkMode: Bool, intensity: Double, speed: Double, onDismiss: @escaping () -> Void) {
        self.initialScheme = initialScheme
        self.isDarkMode = isDarkMode
        self.intensity = intensity
        self.speed = speed
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
                speed: speed
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
                    .buttonStyle(.plain)
                    .disabled(!canGoLeft)

                    Button { onDismiss() } label: {
                        HStack(spacing: 8) {
                            Image(systemName: "chevron.down")
                                .font(.system(size: 14, weight: .semibold))
                            Text("Exit Preview")
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
                    .buttonStyle(.plain)

                    Button {
                        withAnimation(.easeInOut(duration: 0.3)) { if canGoRight { currentIndex += 1 } }
                    } label: {
                        Image(systemName: "chevron.right")
                            .font(.system(size: 16, weight: .semibold))
                            .foregroundStyle(.white.opacity(canGoRight ? 0.9 : 0.25))
                            .frame(width: 44, height: 44)
                            .background(Circle().fill(.ultraThinMaterial).overlay(Circle().strokeBorder(.white.opacity(canGoRight ? 0.2 : 0.08), lineWidth: 0.5)))
                    }
                    .buttonStyle(.plain)
                    .disabled(!canGoRight)
                }
                .padding(.bottom, 50)
            }
        }
        .gesture(
            DragGesture(minimumDistance: 50)
                .onEnded { gesture in
                    if gesture.translation.width < -50 && canGoRight {
                        withAnimation(.easeInOut(duration: 0.3)) { currentIndex += 1 }
                    } else if gesture.translation.width > 50 && canGoLeft {
                        withAnimation(.easeInOut(duration: 0.3)) { currentIndex -= 1 }
                    }
                }
        )
    }
}