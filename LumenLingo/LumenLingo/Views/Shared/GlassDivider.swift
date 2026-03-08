import SwiftUI
import Foundation

// MARK: - Glass Divider

/// A subtle glassmorphic divider matching the React GlassDivider component.
/// Renders as a thin gradient line with soft glow for visual section separation.
struct GlassDivider: View {
    var color: Color = .white
    var opacity: Double = 0.12
    var height: CGFloat = 1
    var glowRadius: CGFloat = 4

    var body: some View {
        Rectangle()
            .fill(
                LinearGradient(
                    colors: [
                        color.opacity(0),
                        color.opacity(opacity),
                        color.opacity(opacity * 1.5),
                        color.opacity(opacity),
                        color.opacity(0)
                    ],
                    startPoint: .leading,
                    endPoint: .trailing
                )
            )
            .frame(height: height)
            .shadow(color: color.opacity(opacity * 0.5), radius: glowRadius, y: 0)
    }
}

// MARK: - Animated Progress Bar

/// Premium glass progress bar with golden gradient fill, inner glow, and breathing animation.
/// Matches the React AnimatedProgressBar component.
struct AnimatedProgressBar: View {
    let progress: Double // 0-100
    var height: CGFloat = 5
    var gradient: [Color] = [Color(hex: "#fbbf24"), Color(hex: "#f59e0b"), Color(hex: "#ea580c")]
    var showGlow: Bool = true

    @State private var breathePhase: CGFloat = 0

    var body: some View {
        GeometryReader { geo in
            ZStack(alignment: .leading) {
                // Track
                Capsule()
                    .fill(.white.opacity(0.08))

                // Fill
                Capsule()
                    .fill(
                        LinearGradient(
                            colors: gradient,
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
                    .frame(width: max(0, geo.size.width * min(progress / 100.0, 1.0)))
                    .shadow(
                        color: gradient[0].opacity(showGlow ? 0.3 + 0.15 * Foundation.sin(Double(breathePhase)) : 0),
                        radius: showGlow ? 6 : 0,
                        y: 0
                    )
                    .overlay(
                        // Inner glow highlight
                        Capsule()
                            .fill(
                                LinearGradient(
                                    colors: [.white.opacity(0.3), .clear],
                                    startPoint: .top,
                                    endPoint: .bottom
                                )
                            )
                            .frame(height: height * 0.4)
                            .offset(y: -height * 0.15)
                            .frame(width: max(0, geo.size.width * min(progress / 100.0, 1.0)))
                            .clipShape(Capsule())
                    )
            }
        }
        .frame(height: height)
        .onAppear {
            withAnimation(.easeInOut(duration: 2.5).repeatForever(autoreverses: true)) {
                breathePhase = .pi * 2
            }
        }
    }
}

// MARK: - Gradient Button

/// Reusable gradient-filled button with glow shadow and press animation.
/// Matches the React GradientButton component.
struct GradientButton: View {
    let title: String
    var icon: String? = nil
    var gradient: [Color] = [Color(hex: "#667eea"), Color(hex: "#764ba2")]
    var cornerRadius: CGFloat = 16
    var fullWidth: Bool = true
    let action: () -> Void

    @State private var isPressed = false

    var body: some View {
        Button(action: action) {
            HStack(spacing: 8) {
                if let icon {
                    Image(systemName: icon)
                        .font(.body.bold())
                }
                Text(title)
                    .font(.body.bold())
            }
            .foregroundStyle(.white)
            .frame(maxWidth: fullWidth ? .infinity : nil)
            .padding(.vertical, 14)
            .padding(.horizontal, fullWidth ? 0 : 24)
            .background(
                RoundedRectangle(cornerRadius: cornerRadius)
                    .fill(
                        LinearGradient(
                            colors: gradient,
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
                    .shadow(color: gradient[0].opacity(0.4), radius: 12, y: 4)
            )
            .overlay(
                // Top highlight
                RoundedRectangle(cornerRadius: cornerRadius)
                    .fill(
                        LinearGradient(
                            colors: [.white.opacity(0.2), .clear],
                            startPoint: .top,
                            endPoint: .center
                        )
                    )
            )
        }
        .buttonStyle(ScaleButtonStyle())
    }
}

/// Button style that scales down on press
struct ScaleButtonStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .scaleEffect(configuration.isPressed ? 0.97 : 1.0)
            .animation(.spring(response: 0.2, dampingFraction: 0.7), value: configuration.isPressed)
    }
}

// MARK: - Particle Effect

/// Lightweight particle system for celebratory effects (correct answers, achievements).
/// Uses Canvas + TimelineView for efficient rendering.
struct ParticleEffect: View {
    var color: Color = .yellow
    var particleCount: Int = 12
    var isActive: Bool = true

    @State private var particles: [Particle] = []

    struct Particle: Identifiable {
        let id = UUID()
        var x: CGFloat
        var y: CGFloat
        var size: CGFloat
        var opacity: Double
        var velocity: CGPoint
        var rotation: Double
        var symbol: String
    }

    private let symbols = ["star.fill", "sparkle", "heart.fill", "moon.stars.fill"]

    var body: some View {
        TimelineView(.animation(minimumInterval: 1.0 / 30.0)) { timeline in
            Canvas { context, size in
                for particle in particles {
                    var ctx = context
                    ctx.opacity = particle.opacity

                    let point = CGPoint(x: particle.x, y: particle.y)
                    ctx.draw(
                        Text(Image(systemName: particle.symbol))
                            .font(.system(size: particle.size))
                            .foregroundStyle(color),
                        at: point
                    )
                }
            }
            .onChange(of: timeline.date) { _, _ in
                updateParticles()
            }
        }
        .allowsHitTesting(false)
        .onAppear {
            if isActive { spawnParticles() }
        }
        .onChange(of: isActive) { _, active in
            if active { spawnParticles() }
        }
    }

    private func spawnParticles() {
        particles = (0..<particleCount).map { _ in
            Particle(
                x: CGFloat.random(in: 0...UIScreen.main.bounds.width),
                y: CGFloat.random(in: 0...UIScreen.main.bounds.height * 0.5),
                size: CGFloat.random(in: 6...14),
                opacity: Double.random(in: 0.4...0.9),
                velocity: CGPoint(
                    x: CGFloat.random(in: -1.5...1.5),
                    y: CGFloat.random(in: -3.0 ... -0.5)
                ),
                rotation: Double.random(in: 0...360),
                symbol: symbols.randomElement() ?? "star.fill"
            )
        }
    }

    private func updateParticles() {
        particles = particles.compactMap { p in
            var updated = p
            updated.x += p.velocity.x
            updated.y += p.velocity.y
            updated.opacity -= 0.015
            if updated.opacity <= 0 { return nil }
            return updated
        }
    }
}

// MARK: - Shimmer Effect Modifier

/// Diagonal shimmer sweep effect matching React's hover shimmer.
struct ShimmerModifier: ViewModifier {
    @State private var phase: CGFloat = -1

    var isActive: Bool = true
    var color: Color = .white
    var duration: Double = 2.0

    func body(content: Content) -> some View {
        content
            .overlay(
                GeometryReader { geo in
                    if isActive {
                        LinearGradient(
                            colors: [
                                .clear,
                                color.opacity(0.15),
                                color.opacity(0.3),
                                color.opacity(0.15),
                                .clear
                            ],
                            startPoint: UnitPoint(x: phase - 0.3, y: phase - 0.3),
                            endPoint: UnitPoint(x: phase + 0.3, y: phase + 0.3)
                        )
                        .onAppear {
                            withAnimation(.linear(duration: duration).repeatForever(autoreverses: false)) {
                                phase = 2
                            }
                        }
                    }
                }
                .allowsHitTesting(false)
            )
            .clipShape(RoundedRectangle(cornerRadius: 12))
    }
}

extension View {
    func shimmer(isActive: Bool = true, color: Color = .white, duration: Double = 2.0) -> some View {
        modifier(ShimmerModifier(isActive: isActive, color: color, duration: duration))
    }
}

// MARK: - Pulsing Glow Modifier

struct PulsingGlowModifier: ViewModifier {
    var color: Color
    var radius: CGFloat = 12
    var speed: Double = 2.0

    @State private var glowPhase: CGFloat = 0

    func body(content: Content) -> some View {
        content
            .shadow(color: color.opacity(0.4 + 0.2 * Foundation.sin(Double(glowPhase))), radius: radius)
            .shadow(color: color.opacity(0.2 + 0.1 * Foundation.sin(Double(glowPhase) * 1.3)), radius: radius * 1.5)
            .onAppear {
                withAnimation(.easeInOut(duration: speed).repeatForever(autoreverses: true)) {
                    glowPhase = .pi * 2
                }
            }
    }
}

extension View {
    func pulsingGlow(color: Color, radius: CGFloat = 12, speed: Double = 2.0) -> some View {
        modifier(PulsingGlowModifier(color: color, radius: radius, speed: speed))
    }
}

// MARK: - Glass Card Background

/// Reusable glassmorphic card background matching the React frosted-glass design.
/// `rgba(255,255,255,0.18)` background + `blur(34px)` + multi-layer shadows.
struct GlassCardBackground: View {
    @Environment(\.colorScheme) private var colorScheme
    var cornerRadius: CGFloat = 22
    var borderColor: Color = .white
    var borderOpacity: Double? = nil
    var tintColor: Color? = nil

    var body: some View {
        RoundedRectangle(cornerRadius: cornerRadius)
            .fill(.ultraThinMaterial)
            .overlay(
                // Frosted glass inner highlight
                RoundedRectangle(cornerRadius: cornerRadius)
                    .fill(
                        LinearGradient(
                            colors: [.white.opacity(0.12), .clear, .white.opacity(0.04)],
                            startPoint: .top,
                            endPoint: .bottom
                        )
                    )
            )
            .overlay(
                // Color tint if provided
                Group {
                    if let tintColor {
                        RoundedRectangle(cornerRadius: cornerRadius)
                            .fill(tintColor.opacity(0.06))
                    }
                }
            )
            .overlay(
                // Border
                RoundedRectangle(cornerRadius: cornerRadius)
                    .strokeBorder(
                        borderColor.opacity(borderOpacity ?? (colorScheme == .dark ? 0.1 : 0.18)),
                        lineWidth: 1
                    )
            )
            .shadow(color: .black.opacity(0.08), radius: 20, y: 8)
            .shadow(color: .black.opacity(0.04), radius: 6, y: 3)
    }
}

// MARK: - Glass Panel Wrapper

/// Premium 7-layer glassmorphic panel matching React's GlassPanelWrapper.
/// Builds a foggy, glowing, frosted container with multiple radial gradients,
/// winter mist overlays, and crisp edge highlights.
struct GlassPanelWrapper<Content: View>: View {
    @Environment(\.colorScheme) private var colorScheme
    var cornerRadius: CGFloat = 24
    var tintColor: Color? = nil
    @ViewBuilder var content: () -> Content

    private var isDark: Bool { colorScheme == .dark }

    // Resolved tint: use provided color or default purple
    private var resolvedTint: Color {
        tintColor ?? Color(red: 140/255, green: 100/255, blue: 220/255)
    }

    var body: some View {
        ZStack {
            if isDark {
                // LAYER 1: Outermost foggy aura
                RoundedRectangle(cornerRadius: cornerRadius + 20)
                    .fill(
                        .radialGradient(
                            colors: [Color(red: 70/255, green: 200/255, blue: 220/255).opacity(0.18), .clear],
                            center: .top,
                            startRadius: 0,
                            endRadius: 200
                        )
                    )
                    .blur(radius: 16)
                    .padding(-20)

                // LAYER 2: Mid foggy glow (tint-aware)
                RoundedRectangle(cornerRadius: cornerRadius + 14)
                    .fill(
                        .radialGradient(
                            colors: [resolvedTint.opacity(0.28), .clear],
                            center: .top,
                            startRadius: 0,
                            endRadius: 180
                        )
                    )
                    .blur(radius: 12)
                    .padding(-14)

                // LAYER 3: Inner luminous edge glow
                RoundedRectangle(cornerRadius: cornerRadius + 8)
                    .fill(
                        .radialGradient(
                            colors: [
                                Color(red: 90/255, green: 190/255, blue: 230/255).opacity(0.30),
                                Color(red: 140/255, green: 110/255, blue: 210/255).opacity(0.18),
                                .clear
                            ],
                            center: .top,
                            startRadius: 0,
                            endRadius: 160
                        )
                    )
                    .blur(radius: 10)
                    .padding(-6)

                // LAYER 4: Crisp edge highlight (border glow)
                RoundedRectangle(cornerRadius: cornerRadius + 1)
                    .strokeBorder(
                        LinearGradient(
                            colors: [
                                Color(red: 100/255, green: 200/255, blue: 240/255).opacity(0.45),
                                Color(red: 140/255, green: 120/255, blue: 220/255).opacity(0.25),
                                Color(red: 100/255, green: 80/255, blue: 180/255).opacity(0.12),
                                Color(red: 140/255, green: 120/255, blue: 220/255).opacity(0.20),
                                Color(red: 80/255, green: 180/255, blue: 220/255).opacity(0.30)
                            ],
                            startPoint: .top,
                            endPoint: .bottom
                        ),
                        lineWidth: 1.5
                    )
                    .padding(-1)

                // Winter mist overlays
                winterMistOverlay
            }

            // BASE: Frosted glass material — reduced opacity so cosmic background bleeds through
            // React uses rgba(20, 14, 38, 0.7) + backdrop-filter: blur(24px)
            RoundedRectangle(cornerRadius: cornerRadius)
                .fill(.ultraThinMaterial)
                .opacity(isDark ? 0.55 : 1.0)

            // Semi-transparent dark tint matching React's rgba(20, 14, 38, 0.7)
            if isDark {
                RoundedRectangle(cornerRadius: cornerRadius)
                    .fill(Color(red: 20/255, green: 14/255, blue: 38/255).opacity(0.45))
            }

            if isDark {
                // Subtle color tint (tint-aware)
                RoundedRectangle(cornerRadius: cornerRadius)
                    .fill(
                        LinearGradient(
                            colors: [
                                resolvedTint.opacity(0.10),
                                resolvedTint.opacity(0.06)
                            ],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )

                // Inner top luminance
                VStack {
                    RoundedRectangle(cornerRadius: cornerRadius)
                        .fill(
                            .radialGradient(
                                colors: [
                                    Color(red: 80/255, green: 170/255, blue: 210/255).opacity(0.05),
                                    .clear
                                ],
                                center: .top,
                                startRadius: 0,
                                endRadius: 120
                            )
                        )
                        .frame(height: 100)
                    Spacer()
                }
                .clipShape(RoundedRectangle(cornerRadius: cornerRadius))
            }

            // Inner shadow simulation
            RoundedRectangle(cornerRadius: cornerRadius)
                .fill(
                    LinearGradient(
                        colors: [
                            .white.opacity(isDark ? 0.15 : 0.10),
                            .clear,
                            .white.opacity(isDark ? 0.06 : 0.08)
                        ],
                        startPoint: .top,
                        endPoint: .bottom
                    )
                )

            // Border
            RoundedRectangle(cornerRadius: cornerRadius)
                .strokeBorder(
                    isDark
                        ? .white.opacity(0.10)
                        : .white.opacity(0.18),
                    lineWidth: 1
                )

            if !isDark {
                // Light mode: top wash
                VStack {
                    LinearGradient(
                        colors: [.white.opacity(0.10), .clear],
                        startPoint: .top,
                        endPoint: .bottom
                    )
                    .frame(height: 50)
                    Spacer()
                }
                .clipShape(RoundedRectangle(cornerRadius: cornerRadius))
            }

            // Content
            content()
                .padding(20)
        }
        .shadow(color: .black.opacity(isDark ? 0.06 : 0.08), radius: 20, y: 8)
        .shadow(color: .black.opacity(0.04), radius: 6, y: 3)
    }

    // MARK: - Winter Mist

    @ViewBuilder
    private var winterMistOverlay: some View {
        // Outer cold aura
        ZStack {
            // Top frost
            Ellipse()
                .fill(Color(red: 96/255, green: 165/255, blue: 250/255).opacity(0.16))
                .frame(width: 300, height: 120)
                .blur(radius: 16)
                .offset(y: -60)

            // Left cold edge
            Ellipse()
                .fill(Color(red: 59/255, green: 130/255, blue: 246/255).opacity(0.12))
                .frame(width: 100, height: 200)
                .blur(radius: 14)
                .offset(x: -120)

            // Right cold edge
            Ellipse()
                .fill(Color(red: 56/255, green: 189/255, blue: 248/255).opacity(0.12))
                .frame(width: 100, height: 200)
                .blur(radius: 14)
                .offset(x: 120)

            // Bottom blue haze
            Ellipse()
                .fill(Color(red: 56/255, green: 189/255, blue: 248/255).opacity(0.10))
                .frame(width: 250, height: 80)
                .blur(radius: 14)
                .offset(y: 80)

            // Corner crystalline tints
            Circle()
                .fill(Color(red: 147/255, green: 197/255, blue: 253/255).opacity(0.10))
                .frame(width: 100)
                .blur(radius: 12)
                .offset(x: -100, y: -60)

            Circle()
                .fill(Color(red: 96/255, green: 165/255, blue: 250/255).opacity(0.10))
                .frame(width: 110)
                .blur(radius: 12)
                .offset(x: 100, y: 60)
        }
        .allowsHitTesting(false)
    }
}

// MARK: - Premium Toggle (AppToggle)

/// Premium toggle switch matching React's AppToggle component.
/// Features breathing glow halo, icon rotation transition, ripple pulse, and smooth sliding thumb.
struct PremiumToggle: View {
    @Environment(\.colorScheme) private var colorScheme
    let isOn: Bool
    var enabledColor: Color = Color(hex: "#a855f7")
    var enabledIcon: String? = nil
    var disabledIcon: String? = nil
    let onToggle: () -> Void

    private var isDark: Bool { colorScheme == .dark }
    @State private var breathePhase: CGFloat = 0
    @State private var rippleScale: CGFloat = 1
    @State private var rippleOpacity: CGFloat = 0

    var body: some View {
        Button {
            // Ripple pulse on tap
            rippleScale = 0.8
            rippleOpacity = 0.5
            withAnimation(.easeOut(duration: 0.4)) {
                rippleScale = 1.6
                rippleOpacity = 0
            }
            onToggle()
        } label: {
            ZStack {
                // Breathing glow halo (layer 1)
                if isOn {
                    Capsule()
                        .fill(enabledColor.opacity(
                            (isDark ? 0.30 : 0.18) + 0.08 * Foundation.sin(Double(breathePhase))
                        ))
                        .blur(radius: 8 + 2 * Foundation.sin(Double(breathePhase) * 1.3))
                        .padding(-4)
                }

                // Ripple effect (layer 2)
                Capsule()
                    .fill(enabledColor.opacity(rippleOpacity))
                    .scaleEffect(rippleScale)
                    .blur(radius: 4)

                // Track gradient (layer 3)
                Capsule()
                    .fill(
                        isOn
                            ? LinearGradient(
                                colors: [
                                    enabledColor.opacity(0.75),
                                    enabledColor,
                                    enabledColor.opacity(0.85)
                                ],
                                startPoint: .leading,
                                endPoint: .trailing
                              )
                            : LinearGradient(
                                colors: [
                                    isDark ? Color.white.opacity(0.12) : Color.black.opacity(0.10),
                                    isDark ? Color.white.opacity(0.08) : Color.black.opacity(0.06)
                                ],
                                startPoint: .leading,
                                endPoint: .trailing
                              )
                    )
                    .frame(width: 52, height: 30)

                // Track inner highlight (layer 4)
                if isOn {
                    Capsule()
                        .fill(
                            LinearGradient(
                                colors: [.white.opacity(0.25), .clear, .white.opacity(0.08)],
                                startPoint: .top,
                                endPoint: .bottom
                            )
                        )
                        .frame(width: 52, height: 30)
                }

                // Thumb with shadow stack (layer 5)
                Circle()
                    .fill(.white)
                    .shadow(color: enabledColor.opacity(isOn ? 0.3 : 0), radius: 6, y: 0)
                    .shadow(color: .black.opacity(0.12), radius: 3, y: 1)
                    .frame(width: 24, height: 24)
                    .overlay {
                        if let icon = isOn ? enabledIcon : disabledIcon {
                            Image(systemName: icon)
                                .font(.system(size: 11, weight: .semibold))
                                .foregroundStyle(isOn ? enabledColor : .gray)
                                .rotationEffect(.degrees(isOn ? 0 : -30))
                                .animation(.spring(response: 0.35, dampingFraction: 0.65), value: isOn)
                        }
                    }
                    .offset(x: isOn ? 11 : -11)
                    .animation(.spring(response: 0.28, dampingFraction: 0.72), value: isOn)
            }
            .frame(width: 52, height: 30)
        }
        .buttonStyle(.plain)
        .onAppear {
            withAnimation(.easeInOut(duration: 2.0).repeatForever(autoreverses: true)) {
                breathePhase = .pi * 2
            }
        }
    }
}

// MARK: - Glass Slider

/// Slider that uses the native iOS 26 liquid glass rendering when available,
/// falling back to a custom glassmorphic implementation on older OS versions.
struct GlassSlider: View {
    @Environment(\.colorScheme) private var colorScheme
    @Binding var value: Double
    var range: ClosedRange<Double> = 0...1
    var step: Double = 0.1
    var accentColor: Color = .orange
    var label: String? = nil

    var body: some View {
        if #available(iOS 26.0, *) {
            Slider(value: $value, in: range, step: step)
                .tint(accentColor)
                .frame(height: 36)
        } else {
            LegacyGlassSlider(value: $value, range: range, step: step, accentColor: accentColor)
        }
    }
}

/// Custom glassmorphic slider for iOS < 26.
private struct LegacyGlassSlider: View {
    @Environment(\.colorScheme) private var colorScheme
    @Binding var value: Double
    var range: ClosedRange<Double> = 0...1
    var step: Double = 0.1
    var accentColor: Color = .orange

    private var isDark: Bool { colorScheme == .dark }
    @State private var breathePhase: CGFloat = 0
    @State private var isDragging = false

    private var fraction: Double {
        (value - range.lowerBound) / (range.upperBound - range.lowerBound)
    }

    var body: some View {
        GeometryReader { geo in
            let trackWidth = geo.size.width
            let thumbX = trackWidth * fraction

            ZStack(alignment: .leading) {
                // 3D Track background (liquid glass inset)
                Capsule()
                    .fill(isDark ? .white.opacity(0.06) : .black.opacity(0.04))
                    .frame(height: 10)
                    .overlay(
                        // Top inset shadow for 3D depth
                        Capsule()
                            .fill(
                                LinearGradient(
                                    colors: [
                                        .black.opacity(isDark ? 0.20 : 0.10),
                                        .clear,
                                        .white.opacity(isDark ? 0.08 : 0.12)
                                    ],
                                    startPoint: .top,
                                    endPoint: .bottom
                                )
                            )
                    )
                    .overlay(
                        // Inner edge highlight
                        Capsule()
                            .strokeBorder(
                                LinearGradient(
                                    colors: [
                                        .black.opacity(isDark ? 0.15 : 0.06),
                                        .white.opacity(isDark ? 0.06 : 0.10),
                                        .white.opacity(isDark ? 0.10 : 0.18)
                                    ],
                                    startPoint: .top,
                                    endPoint: .bottom
                                ),
                                lineWidth: 1
                            )
                    )

                // Fill gradient with inner glass highlight
                Capsule()
                    .fill(
                        LinearGradient(
                            colors: [accentColor.opacity(0.5), accentColor, accentColor.opacity(0.75)],
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
                    .frame(width: max(10, thumbX), height: 10)
                    .overlay(
                        // Liquid glass highlight on fill
                        Capsule()
                            .fill(
                                LinearGradient(
                                    colors: [.white.opacity(0.35), .clear, .white.opacity(0.10)],
                                    startPoint: .top,
                                    endPoint: .bottom
                                )
                            )
                    )
                    .shadow(color: accentColor.opacity(isDark ? 0.4 : 0.25), radius: 8, y: 0)

                // Bloom halo behind thumb (breathing)
                Circle()
                    .fill(
                        RadialGradient(
                            colors: [
                                accentColor.opacity(
                                    (isDark ? 0.25 : 0.15) + 0.08 * Foundation.sin(Double(breathePhase))
                                ),
                                accentColor.opacity(0.05),
                                .clear
                            ],
                            center: .center,
                            startRadius: 0,
                            endRadius: isDragging ? 24 : 18
                        )
                    )
                    .frame(width: isDragging ? 48 : 36, height: isDragging ? 48 : 36)
                    .blur(radius: 4)
                    .offset(x: thumbX - (isDragging ? 24 : 18))
                    .animation(.spring(response: 0.3, dampingFraction: 0.7), value: isDragging)

                // Capsule pill thumb
                ZStack {
                    // Glass pill body
                    RoundedRectangle(cornerRadius: 8, style: .continuous)
                        .fill(.ultraThinMaterial)
                        .frame(width: 22, height: 28)
                        .overlay(
                            // Top specular highlight
                            RoundedRectangle(cornerRadius: 8, style: .continuous)
                                .fill(
                                    LinearGradient(
                                        colors: [
                                            .white.opacity(isDark ? 0.45 : 0.60),
                                            .clear,
                                            .white.opacity(isDark ? 0.08 : 0.15)
                                        ],
                                        startPoint: .top,
                                        endPoint: .bottom
                                    )
                                )
                        )
                        .overlay(
                            // Thin border
                            RoundedRectangle(cornerRadius: 8, style: .continuous)
                                .strokeBorder(
                                    LinearGradient(
                                        colors: [
                                            .white.opacity(isDark ? 0.35 : 0.50),
                                            .white.opacity(isDark ? 0.10 : 0.20)
                                        ],
                                        startPoint: .top,
                                        endPoint: .bottom
                                    ),
                                    lineWidth: 0.75
                                )
                        )
                        .shadow(color: accentColor.opacity(isDark ? 0.35 : 0.20), radius: 8, y: 0)
                        .shadow(color: .black.opacity(0.12), radius: 3, y: 2)

                    // Inner grip line (subtle indent)
                    RoundedRectangle(cornerRadius: 1, style: .continuous)
                        .fill(.white.opacity(isDark ? 0.15 : 0.25))
                        .frame(width: 8, height: 2)
                }
                .offset(x: thumbX - 11)
                .scaleEffect(isDragging ? 1.08 : 1.0)
                .animation(.spring(response: 0.25, dampingFraction: 0.65), value: isDragging)
                .gesture(
                    DragGesture(minimumDistance: 0)
                        .onChanged { drag in
                            isDragging = true
                            let newFraction = max(0, min(1, drag.location.x / trackWidth))
                            let raw = range.lowerBound + newFraction * (range.upperBound - range.lowerBound)
                            let stepped = (raw / step).rounded() * step
                            value = max(range.lowerBound, min(range.upperBound, stepped))
                        }
                        .onEnded { _ in
                            isDragging = false
                        }
                )
            }
        }
        .frame(height: 36)
        .onAppear {
            withAnimation(.easeInOut(duration: 2.5).repeatForever(autoreverses: true)) {
                breathePhase = .pi * 2
            }
        }
    }
}
