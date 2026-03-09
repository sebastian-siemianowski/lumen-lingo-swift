import SwiftUI
import SwiftData

// MARK: - Nebula Drift Settings

/// Full React-parity sub-tab for Nebula Drift settings.
/// Enable toggle, dark-mode-only badge, 6 nebula preset cards, intensity/speed sliders.
struct NebulaDriftSettingsView: View {
    @Query private var profiles: [UserProfile]
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization
    @State private var previewingPreset: NebulaPreset? = nil

    private var L: AppStrings { localization.strings }
    private var profile: UserProfile? { profiles.first }
    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        VStack(spacing: 20) {
            // Header with toggle
            headerRow

            if !isDark {
                darkModeOnlyBadge
            }

            // Controls always visible (React: <Collapse isOpen={true}>)
            // The toggle only controls whether LayoutBackgroundView renders the nebula layer.
            // In light mode, controls are dimmed + non-interactive (matching React behavior).
            VStack(spacing: 20) {
                // Preset selector
                presetSelectorSection

                // Intensity slider
                intensitySlider

                // Drift speed slider
                driftSpeedSlider

                // Status description
                statusDescription
            }
            .opacity(!isDark ? 0.5 : 1.0)
            .allowsHitTesting(isDark)
        }
        .animation(.easeInOut(duration: 0.3), value: profile?.nebulaDriftEnabled)
        .fullScreenCover(item: $previewingPreset) { preset in
            nebulaFullscreenPreview(preset: preset)
        }
    }

    // MARK: - Header

    private var headerRow: some View {
        HStack(spacing: 12) {
            Image(systemName: "cloud.fog.fill")
                .font(.system(size: 20))
                .foregroundStyle(
                    LinearGradient(
                        colors: [.purple, .blue],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )
                .scaleEffect(profile?.nebulaDriftEnabled == true ? 1.0 : 0.85)
                .opacity(profile?.nebulaDriftEnabled == true ? 1.0 : 0.5)

            VStack(alignment: .leading, spacing: 2) {
                Text(L.nebulaDrift)
                    .font(.system(size: 17, weight: .semibold))
                    .foregroundStyle(isDark ? .white : .caribbeanInk)
                Text(L.cosmicNebulaBackground)
                    .font(.system(size: 13))
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanPlum)
            }

            Spacer()

            PremiumToggle(
                isOn: profile?.nebulaDriftEnabled ?? false,
                onToggle: {
                    withAnimation { profile?.nebulaDriftEnabled.toggle() }
                }
            )
        }
    }

    // MARK: - Dark Mode Badge

    private var darkModeOnlyBadge: some View {
        HStack(spacing: 8) {
            Image(systemName: "moon.fill")
                .font(.system(size: 14))
                .foregroundStyle(.indigo)

            Text(L.nebulaOptimizedDarkMode)
                .font(.system(size: 13, weight: .medium))
                .foregroundStyle(.indigo)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 10)
        .background(
            RoundedRectangle(cornerRadius: 12, style: .continuous)
                .fill(.indigo.opacity(0.1))
                .overlay(
                    RoundedRectangle(cornerRadius: 12, style: .continuous)
                        .strokeBorder(.indigo.opacity(0.3), lineWidth: 0.5)
                )
        )
    }

    // MARK: - Preset Selector

    private var presetSelectorSection: some View {
        VStack(alignment: .leading, spacing: 10) {
            HStack(spacing: 6) {
                Image(systemName: "sparkles")
                    .font(.system(size: 14))
                    .foregroundStyle(isDark ? .white.opacity(0.7) : .caribbeanMist)
                Text(L.nebulaPreset)
                    .font(.system(size: 14, weight: .semibold))
                    .foregroundStyle(isDark ? .white : .caribbeanInk)
            }

            LazyVGrid(columns: [
                GridItem(.flexible(), spacing: 10),
                GridItem(.flexible(), spacing: 10),
            ], spacing: 10) {
                ForEach(NebulaPreset.allCases) { preset in
                    SchemeCardView(
                        name: preset.displayName,
                        description: preset.description,
                        previewColors: preset.previewColors,
                        isSelected: profile?.nebulaPresetEnum == preset,
                        previewHeight: 70
                    ) {
                        withAnimation(.spring(response: 0.3, dampingFraction: 0.7)) {
                            profile?.nebulaPresetEnum = preset
                        }
                    } onFullscreen: {
                        previewingPreset = preset
                    }
                }
            }
        }
    }

    // MARK: - Sliders

    private var intensitySlider: some View {
        SettingsSliderView(
            label: L.nebulaIntensity,
            iconName: "aqi.medium",
            value: Binding(
                get: { profile?.nebulaDriftIntensity ?? 1.0 },
                set: { profile?.nebulaDriftIntensity = $0 }
            ),
            range: 0.3...1.5,
            step: 0.1,
            presets: [
                (0.4, L.subtle, "smoke"),
                (0.8, L.balanced, "cloud"),
                (1.3, L.vivid, "cloud.bolt"),
            ]
        )
    }

    private var driftSpeedSlider: some View {
        SettingsSliderView(
            label: L.driftSpeed,
            iconName: "wind",
            value: Binding(
                get: { profile?.nebulaDriftSpeed ?? 1.0 },
                set: { profile?.nebulaDriftSpeed = $0 }
            ),
            range: 0...2,
            step: 0.1,
            presets: [
                (0.0, L.frozen, "snowflake"),
                (0.8, L.flowing, "wind"),
                (1.6, L.swift_, "tornado"),
            ]
        )
    }

    // MARK: - Fullscreen Preview

    private func nebulaFullscreenPreview(preset: NebulaPreset) -> some View {
        FullscreenNebulaPreview(
            initialPreset: preset,
            intensity: profile?.nebulaDriftIntensity ?? 1.0,
            speed: profile?.nebulaDriftSpeed ?? 1.0,
            onDismiss: { previewingPreset = nil }
        )
    }

    // MARK: - Status

    private var statusDescription: some View {
        let preset = profile?.nebulaPresetEnum ?? .lagoonNebula
        let speed = profile?.nebulaDriftSpeed ?? 1.0

        let (icon, text): (String, String) = {
            if speed == 0 {
                return ("snowflake", "\(preset.displayName) stands frozen in time")
            } else if speed < 0.8 {
                return ("leaf", "\(preset.displayName) drifts with gentle motion")
            } else if speed < 1.4 {
                return ("wind", "\(preset.displayName) flows at a natural pace")
            } else {
                return ("tornado", "\(preset.displayName) swirls with cosmic energy")
            }
        }()

        return HStack(spacing: 8) {
            Image(systemName: icon)
                .font(.system(size: 13))
                .foregroundStyle(.indigo.opacity(0.7))
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

// MARK: - Fullscreen Nebula Preview (with L/R Navigation)

/// Fullscreen preview with left/right chevron buttons and swipe gesture
/// to cycle through all nebula presets. iOS enhancement beyond React.
struct FullscreenNebulaPreview: View {
    @Environment(\.localization) private var localization
    private var L: AppStrings { localization.strings }

    let initialPreset: NebulaPreset
    let intensity: Double
    let speed: Double
    let onDismiss: () -> Void

    @State private var currentIndex: Int = 0

    private let allPresets = NebulaPreset.allCases

    init(initialPreset: NebulaPreset, intensity: Double, speed: Double, onDismiss: @escaping () -> Void) {
        self.initialPreset = initialPreset
        self.intensity = intensity
        self.speed = speed
        self.onDismiss = onDismiss
        _currentIndex = State(initialValue: NebulaPreset.allCases.firstIndex(of: initialPreset) ?? 0)
    }

    private var currentPreset: NebulaPreset {
        allPresets[currentIndex]
    }

    private var canGoLeft: Bool { currentIndex > 0 }
    private var canGoRight: Bool { currentIndex < allPresets.count - 1 }

    var body: some View {
        ZStack {
            // Deep void base
            Color(red: 6/255, green: 5/255, blue: 20/255)
                .ignoresSafeArea()

            // Live cosmic background — updateUIView handles preset changes
            CosmicBackgroundView(
                preset: currentPreset,
                intensity: intensity,
                speed: speed
            )
            .ignoresSafeArea()

            // Navigation overlay
            VStack {
                // Preset name + counter at top
                HStack {
                    Spacer()
                    VStack(spacing: 4) {
                        Text(currentPreset.displayName)
                            .font(.system(size: 15, weight: .semibold))
                            .foregroundStyle(.white.opacity(0.85))

                        Text("\(currentIndex + 1) / \(allPresets.count)")
                            .font(.system(size: 12, weight: .medium).monospacedDigit())
                            .foregroundStyle(.white.opacity(0.45))
                    }
                    .padding(.horizontal, 20)
                    .padding(.vertical, 10)
                    .background(
                        Capsule()
                            .fill(.ultraThinMaterial)
                            .overlay(
                                Capsule()
                                    .strokeBorder(.white.opacity(0.15), lineWidth: 0.5)
                            )
                    )
                    Spacer()
                }
                .padding(.top, 60)

                Spacer()

                // Bottom controls: left chevron, exit, right chevron
                HStack(spacing: 16) {
                    // Left chevron
                    Button {
                        withAnimation(.easeInOut(duration: 0.3)) {
                            if canGoLeft { currentIndex -= 1 }
                        }
                    } label: {
                        Image(systemName: "chevron.left")
                            .font(.system(size: 16, weight: .semibold))
                            .foregroundStyle(.white.opacity(canGoLeft ? 0.9 : 0.25))
                            .frame(width: 44, height: 44)
                            .background(
                                Circle()
                                    .fill(.ultraThinMaterial)
                                    .overlay(
                                        Circle()
                                            .strokeBorder(.white.opacity(canGoLeft ? 0.2 : 0.08), lineWidth: 0.5)
                                    )
                            )
                    }
                    .buttonStyle(LumenPressStyle(weight: .soft))
                    .disabled(!canGoLeft)

                    // Exit button
                    Button {
                        onDismiss()
                    } label: {
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
                                .overlay(
                                    Capsule()
                                        .strokeBorder(
                                            LinearGradient(
                                                colors: [
                                                    .white.opacity(0.25),
                                                    .white.opacity(0.10)
                                                ],
                                                startPoint: .top,
                                                endPoint: .bottom
                                            ),
                                            lineWidth: 1
                                        )
                                )
                                .shadow(color: .purple.opacity(0.3), radius: 12)
                                .shadow(color: .black.opacity(0.4), radius: 20, y: 8)
                        )
                    }
                    .buttonStyle(LumenPressStyle(weight: .medium, accentColor: .purple))

                    // Right chevron
                    Button {
                        withAnimation(.easeInOut(duration: 0.3)) {
                            if canGoRight { currentIndex += 1 }
                        }
                    } label: {
                        Image(systemName: "chevron.right")
                            .font(.system(size: 16, weight: .semibold))
                            .foregroundStyle(.white.opacity(canGoRight ? 0.9 : 0.25))
                            .frame(width: 44, height: 44)
                            .background(
                                Circle()
                                    .fill(.ultraThinMaterial)
                                    .overlay(
                                        Circle()
                                            .strokeBorder(.white.opacity(canGoRight ? 0.2 : 0.08), lineWidth: 0.5)
                                    )
                            )
                    }
                    .buttonStyle(LumenPressStyle(weight: .soft))
                    .disabled(!canGoRight)
                }
                .padding(.bottom, 50)
            }
        }
        .gesture(
            DragGesture(minimumDistance: 50)
                .onEnded { gesture in
                    let horizontal = gesture.translation.width
                    if horizontal < -50 && canGoRight {
                        withAnimation(.easeInOut(duration: 0.3)) { currentIndex += 1 }
                    } else if horizontal > 50 && canGoLeft {
                        withAnimation(.easeInOut(duration: 0.3)) { currentIndex -= 1 }
                    }
                }
        )
    }
}
