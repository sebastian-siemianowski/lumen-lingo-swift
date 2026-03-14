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
        .buttonStyle(LumenCTAPressStyle())
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

// MARK: - Lumen Press Styles

/// Apple-quality micro-expression button press with layered feedback:
/// haptic pulse, depth scale, luminance shift, shadow recession, elastic spring release.
/// Three tiers: `.soft` for list rows, `.medium` for standard buttons, `.prominent` for CTAs.
struct LumenPressStyle: ButtonStyle {
    enum Weight {
        case soft       // List rows, secondary actions — whisper touch
        case medium     // Standard buttons — confident tap
        case prominent  // CTAs, primary actions — assertive press
    }

    var weight: Weight = .medium
    var accentColor: Color = .white

    // Per-weight tuning
    private var scalePressed: CGFloat {
        switch weight {
        case .soft:       0.985
        case .medium:     0.965
        case .prominent:  0.945
        }
    }

    private var brightnessShift: Double {
        switch weight {
        case .soft:       -0.015
        case .medium:     -0.035
        case .prominent:  -0.05
        }
    }

    private var shadowRadius: CGFloat {
        switch weight {
        case .soft:       4
        case .medium:     10
        case .prominent:  16
        }
    }

    private var spring: Animation {
        switch weight {
        case .soft:
            .spring(response: 0.22, dampingFraction: 0.82, blendDuration: 0)
        case .medium:
            .spring(response: 0.28, dampingFraction: 0.68, blendDuration: 0)
        case .prominent:
            .spring(response: 0.32, dampingFraction: 0.58, blendDuration: 0)
        }
    }

    private var hapticStyle: UIImpactFeedbackGenerator.FeedbackStyle {
        switch weight {
        case .soft:       .soft
        case .medium:     .light
        case .prominent:  .medium
        }
    }

    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            // 1. Depth scale — simulate physical depression
            .scaleEffect(configuration.isPressed ? scalePressed : 1.0)

            // 2. Luminance shift — pressed surface absorbs light
            .brightness(configuration.isPressed ? brightnessShift : 0)

            // 3. Shadow recession — depth illusion, shadow shrinks when pressed "into" surface
            .shadow(
                color: accentColor.opacity(configuration.isPressed ? 0.20 : 0),
                radius: configuration.isPressed ? shadowRadius : 0,
                y: configuration.isPressed ? 2 : 0
            )

            // 4. Subtle saturation boost on press — colors feel richer during interaction
            .saturation(configuration.isPressed ? 1.08 : 1.0)

            // 5. Physics-accurate spring with overshoot on release
            .animation(spring, value: configuration.isPressed)

            // 6. Haptic punctuation — immediate tactile acknowledgment
            .onChange(of: configuration.isPressed) { _, isPressed in
                if isPressed {
                    let generator = UIImpactFeedbackGenerator(style: hapticStyle)
                    generator.impactOccurred()
                }
            }
    }
}

/// Premium card press — multi-layered depth illusion for glass/card surfaces.
/// Combines inward scale, inner glow bloom, shadow depth recession, and specular shift.
struct LumenCardPressStyle: ButtonStyle {
    var accentColor: Color = .white

    func makeBody(configuration: Configuration) -> some View {
        let pressed = configuration.isPressed

        configuration.label
            // Smooth inward scale — card depresses into surface
            .scaleEffect(pressed ? 0.965 : 1.0)

            // Brightness dims slightly — simulates shadow on pressed surface
            .brightness(pressed ? -0.04 : 0)

            // Inner accent glow blooms on press — like light refracting through pressed glass
            .shadow(
                color: accentColor.opacity(pressed ? 0.25 : 0),
                radius: pressed ? 14 : 0,
                y: pressed ? 3 : 0
            )

            // Outer depth shadow recedes — card moves closer to the surface
            .shadow(
                color: .black.opacity(pressed ? 0.08 : 0.15),
                radius: pressed ? 4 : 12,
                y: pressed ? 1 : 6
            )

            // Saturation micro-boost — colors feel alive during interaction
            .saturation(pressed ? 1.06 : 1.0)

            // Elastic spring with pleasant overshoot on release
            .animation(
                .spring(response: 0.30, dampingFraction: 0.62, blendDuration: 0),
                value: pressed
            )

            // Soft haptic on touch-down
            .onChange(of: pressed) { _, isDown in
                if isDown {
                    let g = UIImpactFeedbackGenerator(style: .soft)
                    g.impactOccurred(intensity: 0.6)
                }
            }
    }
}

/// CTA / Primary action press — bold, assertive feedback with glow pulse.
/// Feels like pressing a lit button on premium hardware.
struct LumenCTAPressStyle: ButtonStyle {
    var glowColor: Color = Color(hex: "#667eea")

    func makeBody(configuration: Configuration) -> some View {
        let pressed = configuration.isPressed

        configuration.label
            // Deeper scale for assertive feel
            .scaleEffect(pressed ? 0.94 : 1.0)

            // Brightness dip — pressed into surface
            .brightness(pressed ? -0.06 : 0)

            // Glow bloom — accent light pulses outward on press
            .shadow(
                color: glowColor.opacity(pressed ? 0.45 : 0.15),
                radius: pressed ? 20 : 8,
                y: pressed ? 2 : 4
            )

            // Saturation punch on press
            .saturation(pressed ? 1.12 : 1.0)

            // Bouncy spring — playful, confident release
            .animation(
                .spring(response: 0.35, dampingFraction: 0.55, blendDuration: 0),
                value: pressed
            )

            // Medium haptic — assertive acknowledgment
            .onChange(of: pressed) { _, isDown in
                if isDown {
                    let g = UIImpactFeedbackGenerator(style: .medium)
                    g.impactOccurred()
                }
            }
    }
}

// MARK: - Category Card Press Style

/// Premium ButtonStyle for category cards combining system `isPressed` (instant
/// touch-down feedback) with an external `@State`-driven animation (controlled
/// bouncy release). The external state takes over seamlessly when the finger
/// lifts, preventing any visual gap between system press → manual animation
/// → satisfying springy return.
///
/// Touch-down: instant scale + dim + accent glow ring + dual shadows.
/// Release: held 140ms → bouncy spring overshoot → settle → navigate.
struct LumenCategoryCardStyle: ButtonStyle {
    let accentColor: Color
    let isExternallyPressed: Bool

    func makeBody(configuration: Configuration) -> some View {
        // Either system press OR manual animation keeps the pressed visual
        let active = configuration.isPressed || isExternallyPressed

        configuration.label
            .scaleEffect(active ? 0.96 : 1.0)
            .brightness(active ? -0.03 : 0)
            // Layer 1: accent color glow
            .shadow(
                color: accentColor.opacity(active ? 0.4 : 0),
                radius: active ? 20 : 0,
                y: active ? 4 : 0
            )
            // Layer 2: depth shadow shift
            .shadow(
                color: .black.opacity(active ? 0.06 : 0.10),
                radius: active ? 3 : 8,
                y: active ? 1 : 4
            )
            .saturation(active ? 1.08 : 1.0)
            // Accent glow ring on press
            .overlay(
                RoundedRectangle(cornerRadius: 22)
                    .strokeBorder(
                        LinearGradient(
                            colors: [accentColor.opacity(0.5), accentColor.opacity(0.15)],
                            startPoint: .top,
                            endPoint: .bottom
                        ),
                        lineWidth: 1.5
                    )
                    .opacity(active ? 1 : 0)
            )
            .animation(.spring(response: 0.25, dampingFraction: 0.65), value: active)
    }
}

// MARK: - Navigation Press Modifier

/// A press-and-navigate modifier using `onTapGesture` — guaranteed to coexist with
/// ScrollView drag. On tap, shows a visible press-in → bouncy spring-back → navigate
/// pulse that takes ~380ms. Drag/scroll is never blocked.
///
/// Lifecycle: tap → instant press-in + haptic → 100ms hold → bouncy spring-back → navigate
struct LumenNavigationPressModifier: ViewModifier {
    let accentColor: Color
    let scaleAmount: CGFloat
    let action: () -> Void

    @State private var isPressed = false

    func body(content: Content) -> some View {
        content
            .scaleEffect(isPressed ? scaleAmount : 1.0)
            .brightness(isPressed ? -0.05 : 0)
            .shadow(
                color: accentColor.opacity(isPressed ? 0.35 : 0),
                radius: isPressed ? 18 : 0,
                y: isPressed ? 3 : 0
            )
            .shadow(
                color: .black.opacity(isPressed ? 0.06 : 0.12),
                radius: isPressed ? 3 : 10,
                y: isPressed ? 1 : 5
            )
            .saturation(isPressed ? 1.10 : 1.0)
            .animation(.spring(response: 0.25, dampingFraction: 0.65), value: isPressed)
            .contentShape(Rectangle())
            .onTapGesture {
                // 1) Instant press-in
                withAnimation(.spring(response: 0.08, dampingFraction: 0.80)) {
                    isPressed = true
                }
                let g = UIImpactFeedbackGenerator(style: .soft)
                g.impactOccurred(intensity: 0.7)

                // 2) Bouncy spring-back after brief hold
                DispatchQueue.main.asyncAfter(deadline: .now() + 0.10) {
                    withAnimation(.spring(response: 0.30, dampingFraction: 0.50)) {
                        isPressed = false
                    }
                }

                // 3) Navigate after full pulse animation
                DispatchQueue.main.asyncAfter(deadline: .now() + 0.38) {
                    action()
                }
            }
    }
}

extension View {
    /// Adds a delightful press-to-navigate interaction with scroll-safe tap pulse.
    func lumenNavigationPress(accentColor: Color = .white, scale: CGFloat = 0.955, action: @escaping () -> Void) -> some View {
        modifier(LumenNavigationPressModifier(accentColor: accentColor, scaleAmount: scale, action: action))
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

    func body(content: Content) -> some View {
        content
            .shadow(color: color.opacity(0.5), radius: radius)
            .shadow(color: color.opacity(0.25), radius: radius * 1.5)
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

    private var isDark: Bool { colorScheme == .dark }

    // Caribbean warm tint for light mode panels
    private let caribbeanWarm = Color(red: 140/255, green: 80/255, blue: 180/255) // warm purple

    var body: some View {
        RoundedRectangle(cornerRadius: cornerRadius)
            .fill(.ultraThinMaterial)
            .opacity(isDark ? 1.0 : 0.55)
            .overlay(
                // Light mode: warm Caribbean tint to reduce harshness
                Group {
                    if !isDark {
                        RoundedRectangle(cornerRadius: cornerRadius)
                            .fill(
                                LinearGradient(
                                    colors: [
                                        Color(hex: "#C494FC").opacity(0.18), // lavender
                                        Color(hex: "#F472B6").opacity(0.12), // pink
                                        Color(hex: "#FB923C").opacity(0.10)  // warm orange
                                    ],
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing
                                )
                            )
                    }
                }
            )
            .overlay(
                // Frosted glass inner highlight — subtler in light mode
                RoundedRectangle(cornerRadius: cornerRadius)
                    .fill(
                        LinearGradient(
                            colors: isDark
                                ? [.white.opacity(0.12), .clear, .white.opacity(0.04)]
                                : [.white.opacity(0.25), .clear, .white.opacity(0.06)],
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
                            .fill(tintColor.opacity(isDark ? 0.06 : 0.10))
                    }
                }
            )
            .overlay(
                // Border — warm-tinted in light mode
                RoundedRectangle(cornerRadius: cornerRadius)
                    .strokeBorder(
                        isDark
                            ? borderColor.opacity(borderOpacity ?? 0.1)
                            : Color(hex: "#C494FC").opacity(borderOpacity ?? 0.25),
                        lineWidth: isDark ? 1 : 0.5
                    )
            )
            .shadow(color: isDark ? .black.opacity(0.08) : Color(hex: "#C494FC").opacity(0.12), radius: 20, y: 8)
            .shadow(color: isDark ? .black.opacity(0.04) : Color(hex: "#F472B6").opacity(0.06), radius: 6, y: 3)
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
            // Combined foggy aura (dark mode only, cross-fade)
            RoundedRectangle(cornerRadius: cornerRadius + 14)
                .fill(
                    .radialGradient(
                        colors: [
                            resolvedTint.opacity(0.28),
                            Color(red: 70/255, green: 200/255, blue: 220/255).opacity(0.14),
                            .clear
                        ],
                        center: .top,
                        startRadius: 0,
                        endRadius: 190
                    )
                )
                .blur(radius: 14)
                .padding(-16)
                .opacity(isDark ? 1 : 0)

            // Crisp edge highlight (border glow, dark mode)
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
                .opacity(isDark ? 1 : 0)

            // Winter mist overlays (dark mode)
            winterMistOverlay
                .opacity(isDark ? 1 : 0)

            // BASE: Frosted glass material
            RoundedRectangle(cornerRadius: cornerRadius)
                .fill(.ultraThinMaterial)
                .opacity(isDark ? 0.55 : 1.0)

            // Semi-transparent dark tint (cross-fade)
            RoundedRectangle(cornerRadius: cornerRadius)
                .fill(Color(red: 20/255, green: 14/255, blue: 38/255).opacity(0.45))
                .opacity(isDark ? 1 : 0)

            // Combined color tint + inner shadow (cross-fade)
            RoundedRectangle(cornerRadius: cornerRadius)
                .fill(
                    LinearGradient(
                        colors: [
                            resolvedTint.opacity(0.10),
                            .clear,
                            resolvedTint.opacity(0.06)
                        ],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )
                .opacity(isDark ? 1 : 0)

            // Inner highlight
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
                    .white.opacity(isDark ? 0.10 : 0.18),
                    lineWidth: 1
                )

            // Light mode: top wash (cross-fade)
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
            .opacity(isDark ? 0 : 1)

            // Content
            content()
                .padding(20)
        }
        .shadow(color: .black.opacity(isDark ? 0.06 : 0.08), radius: 20, y: 8)
        .shadow(color: .black.opacity(0.04), radius: 6, y: 3)
        .animation(.easeInOut(duration: 0.45), value: isDark)
    }

    // MARK: - Winter Mist

    @ViewBuilder
    private var winterMistOverlay: some View {
        // Simplified cold aura (consolidated from 6 shapes to 2)
        ZStack {
            // Top-center frost
            Ellipse()
                .fill(Color(red: 86/255, green: 165/255, blue: 248/255).opacity(0.14))
                .frame(width: 300, height: 140)
                .blur(radius: 16)
                .offset(y: -50)

            // Bottom blue haze
            Ellipse()
                .fill(Color(red: 56/255, green: 170/255, blue: 248/255).opacity(0.10))
                .frame(width: 260, height: 100)
                .blur(radius: 14)
                .offset(y: 70)
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
        .clipShape(RoundedRectangle(cornerRadius: cornerRadius))
        .drawingGroup()
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

    var body: some View {
        Button {
            onToggle()
        } label: {
            ZStack {
                // Static glow halo (layer 1) — always present for stable layout
                Capsule()
                    .fill(enabledColor.opacity(isDark ? 0.34 : 0.22))
                    .padding(-4)
                    .opacity(isOn ? 1 : 0)

                // Track gradient (layer 2)
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

                // Track inner highlight (layer 3) — always present for stable layout
                Capsule()
                    .fill(
                        LinearGradient(
                            colors: [.white.opacity(0.25), .clear, .white.opacity(0.08)],
                            startPoint: .top,
                            endPoint: .bottom
                        )
                    )
                    .frame(width: 52, height: 30)
                    .opacity(isOn ? 1 : 0)

                // Thumb with shadow stack (layer 4)
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
        .buttonStyle(LumenPressStyle(weight: .soft))
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

                // Static bloom halo behind thumb
                Circle()
                    .fill(
                        RadialGradient(
                            colors: [
                                accentColor.opacity(isDark ? 0.29 : 0.19),
                                accentColor.opacity(0.05),
                                .clear
                            ],
                            center: .center,
                            startRadius: 0,
                            endRadius: isDragging ? 24 : 18
                        )
                    )
                    .frame(width: isDragging ? 48 : 36, height: isDragging ? 48 : 36)
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
    }
}
