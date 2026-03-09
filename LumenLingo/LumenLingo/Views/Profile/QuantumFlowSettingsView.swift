import SwiftUI
import SwiftData

// MARK: - Quantum Flow Settings

/// Full React-parity sub-tab for Quantum Flow settings.
/// Enable toggle, 6 scene cards (2-col grid), intensity/speed sliders.
struct QuantumFlowSettingsView: View {
    @Query private var profiles: [UserProfile]
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization
    @State private var previewingScene: QuantumFlowScene? = nil

    private var L: AppStrings { localization.strings }
    private var profile: UserProfile? { profiles.first }
    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        VStack(spacing: 20) {
            // Header with toggle
            headerRow

            // Controls always visible (React: <Collapse isOpen={true}>)
            // The toggle only controls whether LayoutBackgroundView renders the quantum layer.

            // Scene selector
            sceneSelectorSection

            // Intensity slider
            intensitySlider

            // Speed slider
            speedSlider

            // Info message
            infoMessage
        }
        .animation(.easeInOut(duration: 0.3), value: profile?.quantumFlowEnabled)
        .fullScreenCover(item: $previewingScene) { scene in
            FullscreenQuantumFlowPreview(
                initialScene: scene,
                intensity: profile?.quantumIntensity ?? 1.0,
                speed: profile?.quantumSpeed ?? 1.0,
                isDarkMode: isDark,
                onDismiss: { previewingScene = nil }
            )
        }
    }

    // MARK: - Header

    private var headerRow: some View {
        HStack(spacing: 12) {
            Image(systemName: "waveform.path.ecg")
                .font(.system(size: 20))
                .foregroundStyle(.cyan)
                .scaleEffect(profile?.quantumFlowEnabled == true ? 1.0 : 0.85)
                .opacity(profile?.quantumFlowEnabled == true ? 1.0 : 0.5)
                .animation(.easeInOut(duration: 1.5).repeatForever(autoreverses: true), value: profile?.quantumFlowEnabled)

            VStack(alignment: .leading, spacing: 2) {
                Text(L.quantumFlow)
                    .font(.system(size: 17, weight: .semibold))
                    .foregroundStyle(isDark ? .white : .caribbeanInk)
                Text(L.dynamicParticleAnimation)
                    .font(.system(size: 13))
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanPlum)
            }

            Spacer()

            PremiumToggle(
                isOn: profile?.quantumFlowEnabled ?? true,
                onToggle: {
                    withAnimation { profile?.quantumFlowEnabled.toggle() }
                }
            )
        }
    }

    // MARK: - Scene Selector

    private var sceneSelectorSection: some View {
        VStack(alignment: .leading, spacing: 10) {
            HStack(spacing: 6) {
                Image(systemName: "sparkles")
                    .font(.system(size: 14))
                    .foregroundStyle(isDark ? .white.opacity(0.7) : .caribbeanMist)
                Text(L.scene)
                    .font(.system(size: 14, weight: .semibold))
                    .foregroundStyle(isDark ? .white : .caribbeanInk)
            }

            LazyVGrid(columns: [
                GridItem(.flexible(), spacing: 10),
                GridItem(.flexible(), spacing: 10),
            ], spacing: 10) {
                ForEach(QuantumFlowScene.allCases) { scene in
                    SchemeCardView(
                        name: scene.displayName,
                        description: scene.description,
                        previewColors: scene.previewColors,
                        isSelected: profile?.quantumScene == scene,
                        previewHeight: 70
                    ) {
                        withAnimation(.spring(response: 0.3, dampingFraction: 0.7)) {
                            profile?.quantumScene = scene
                        }
                    } onFullscreen: {
                        previewingScene = scene
                    }
                }
            }
        }
    }

    // MARK: - Sliders

    private var intensitySlider: some View {
        SettingsSliderView(
            label: L.particleDensity,
            iconName: "circle.grid.3x3",
            value: Binding(
                get: { profile?.quantumIntensity ?? 1.0 },
                set: { profile?.quantumIntensity = $0 }
            ),
            range: 0.1...1.5,
            step: 0.1,
            presets: [
                (0.3, L.sparse, "circle.dotted"),
                (0.7, L.balanced, "circle.grid.2x2"),
                (1.2, L.dense, "circle.grid.3x3.fill"),
            ]
        )
    }

    private var speedSlider: some View {
        SettingsSliderView(
            label: L.flowSpeed,
            iconName: "gauge.with.needle",
            value: Binding(
                get: { profile?.quantumSpeed ?? 1.0 },
                set: { profile?.quantumSpeed = $0 }
            ),
            range: 0.3...1.5,
            step: 0.1,
            presets: [
                (0.4, L.serene, "tortoise"),
                (0.8, L.rhythmic, "metronome"),
                (1.3, L.energetic, "hare"),
            ]
        )
    }

    // MARK: - Info Message

    private var infoMessage: some View {
        let scene = profile?.quantumScene ?? .dubaiCelestialMirage
        let speed = profile?.quantumSpeed ?? 1.0

        let (icon, text): (String, String) = {
            if speed < 0.6 {
                return ("sparkle", "\(scene.displayName) drifts in serene stillness")
            } else if speed < 1.0 {
                return ("waveform.circle", "\(scene.displayName) flows with balanced rhythm")
            } else {
                return ("bolt.circle", "\(scene.displayName) pulses with vibrant energy")
            }
        }()

        return HStack(spacing: 8) {
            Image(systemName: icon)
                .font(.system(size: 13))
                .foregroundStyle(.cyan.opacity(0.7))
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

// MARK: - Fullscreen Quantum Flow Preview

struct FullscreenQuantumFlowPreview: View {
    @Environment(\.localization) private var localization
    private var L: AppStrings { localization.strings }

    let initialScene: QuantumFlowScene
    let intensity: Double
    let speed: Double
    let isDarkMode: Bool
    let onDismiss: () -> Void

    @State private var currentIndex: Int = 0

    private let allScenes = QuantumFlowScene.allCases

    init(initialScene: QuantumFlowScene, intensity: Double, speed: Double, isDarkMode: Bool, onDismiss: @escaping () -> Void) {
        self.initialScene = initialScene
        self.intensity = intensity
        self.speed = speed
        self.isDarkMode = isDarkMode
        self.onDismiss = onDismiss
        _currentIndex = State(initialValue: QuantumFlowScene.allCases.firstIndex(of: initialScene) ?? 0)
    }

    private var currentScene: QuantumFlowScene { allScenes[currentIndex] }
    private var canGoLeft: Bool { currentIndex > 0 }
    private var canGoRight: Bool { currentIndex < allScenes.count - 1 }

    var body: some View {
        ZStack {
            Color(red: 6/255, green: 5/255, blue: 20/255)
                .ignoresSafeArea()

            MetalQuantumFlowView(
                scene: currentScene,
                intensity: intensity,
                speed: speed,
                isDarkMode: isDarkMode
            )
            .ignoresSafeArea()

            // Navigation overlay
            VStack {
                HStack {
                    Spacer()
                    VStack(spacing: 4) {
                        Text(currentScene.displayName)
                            .font(.system(size: 15, weight: .semibold))
                            .foregroundStyle(.white.opacity(0.85))
                        Text("\(currentIndex + 1) / \(allScenes.count)")
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
                                .shadow(color: .cyan.opacity(0.3), radius: 12)
                                .shadow(color: .black.opacity(0.4), radius: 20, y: 8)
                        )
                    }
                    .buttonStyle(LumenPressStyle(weight: .medium, accentColor: .cyan))

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