import SwiftUI

// MARK: - Liquid Glass Card Background

/// A premium frosted-glass card with layered static reflections,
/// a soft color-tinted border, and depth shadows.
/// No jarring inner animations — just a clean, elegant glass look.
struct LiquidGlassCardBackground: View {
    var cornerRadius: CGFloat = 22
    var accentColors: [Color] = [.blue, .cyan]
    var borderOpacity: Double = 0.18
    var intensity: Double = 1.0

    var body: some View {
        ZStack {
            // Layer 1: Ultra-thin frosted base
            RoundedRectangle(cornerRadius: cornerRadius)
                .fill(.ultraThinMaterial)

            // Layer 2: Diagonal depth gradient — gives volumetric glass look
            RoundedRectangle(cornerRadius: cornerRadius)
                .fill(
                    LinearGradient(
                        colors: [
                            .white.opacity(0.10 * intensity),
                            .white.opacity(0.03 * intensity),
                            accentColors[0].opacity(0.03 * intensity),
                            .clear
                        ],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )

            // Layer 3: Subtle accent wash — colour tinting
            RoundedRectangle(cornerRadius: cornerRadius)
                .fill(
                    LinearGradient(
                        colors: [
                            accentColors[0].opacity(0.05 * intensity),
                            accentColors.last!.opacity(0.03 * intensity),
                            .clear
                        ],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )

            // Layer 4: Top specular reflection — classic glass highlight
            VStack(spacing: 0) {
                UnevenRoundedRectangle(
                    topLeadingRadius: cornerRadius,
                    bottomLeadingRadius: 0,
                    bottomTrailingRadius: 0,
                    topTrailingRadius: cornerRadius
                )
                .fill(
                    LinearGradient(
                        colors: [
                            .white.opacity(0.15 * intensity),
                            .white.opacity(0.06 * intensity),
                            .clear
                        ],
                        startPoint: .top,
                        endPoint: .bottom
                    )
                )
                .frame(height: 60)
                Spacer(minLength: 0)
            }
            .clipShape(RoundedRectangle(cornerRadius: cornerRadius))

            // Layer 5: Bottom depth — grounding shadow
            VStack(spacing: 0) {
                Spacer(minLength: 0)
                UnevenRoundedRectangle(
                    topLeadingRadius: 0,
                    bottomLeadingRadius: cornerRadius,
                    bottomTrailingRadius: cornerRadius,
                    topTrailingRadius: 0
                )
                .fill(
                    LinearGradient(
                        colors: [.clear, .black.opacity(0.05 * intensity)],
                        startPoint: .top,
                        endPoint: .bottom
                    )
                )
                .frame(height: 40)
            }
            .clipShape(RoundedRectangle(cornerRadius: cornerRadius))

            // Layer 6: Accent-tinted border
            RoundedRectangle(cornerRadius: cornerRadius)
                .strokeBorder(
                    LinearGradient(
                        colors: [
                            .white.opacity(borderOpacity),
                            accentColors[0].opacity(borderOpacity * 0.7),
                            accentColors.last!.opacity(borderOpacity * 0.5),
                            .white.opacity(borderOpacity * 0.3)
                        ],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    ),
                    lineWidth: 1.0
                )

            // Layer 7: Inner edge highlight — adds glass-edge refraction
            RoundedRectangle(cornerRadius: cornerRadius - 1)
                .strokeBorder(
                    LinearGradient(
                        colors: [
                            .white.opacity(0.12 * intensity),
                            .clear,
                            .white.opacity(0.04 * intensity)
                        ],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    ),
                    lineWidth: 0.5
                )
                .padding(1)
        }
        // Depth-creating external shadows
        .shadow(color: accentColors[0].opacity(0.06), radius: 16, y: 6)
        .shadow(color: .black.opacity(0.10), radius: 20, y: 8)
        .shadow(color: .black.opacity(0.04), radius: 4, y: 2)
    }
}

// MARK: - Liquid Glass Icon Container

/// A premium icon badge with glass reflection and soft glow.
struct LiquidGlassIconContainer: View {
    let systemName: String
    let gradient: [Color]
    var size: CGFloat = 48

    var body: some View {
        ZStack {
            // Base gradient fill
            RoundedRectangle(cornerRadius: size * 0.29)
                .fill(
                    LinearGradient(
                        colors: gradient,
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )
                .frame(width: size, height: size)

            // Inner glass reflection
            RoundedRectangle(cornerRadius: size * 0.29)
                .fill(
                    LinearGradient(
                        colors: [
                            .white.opacity(0.35),
                            .white.opacity(0.08),
                            .clear,
                            .clear
                        ],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )
                .frame(width: size, height: size)

            // Border highlight
            RoundedRectangle(cornerRadius: size * 0.29)
                .strokeBorder(
                    LinearGradient(
                        colors: [
                            .white.opacity(0.35),
                            .white.opacity(0.08),
                            .clear
                        ],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    ),
                    lineWidth: 1
                )
                .frame(width: size, height: size)

            // Icon
            Image(systemName: systemName)
                .font(.system(size: size * 0.42, weight: .semibold))
                .foregroundStyle(.white)
                .shadow(color: .white.opacity(0.4), radius: 2)
        }
        // Static soft glow
        .shadow(color: gradient[0].opacity(0.35), radius: 10, y: 2)
    }
}

// MARK: - Liquid Progress Bar

/// A clean progress bar with glass-like fill and subtle shimmer.
struct LiquidProgressBar: View {
    let progress: Double // 0-100
    var height: CGFloat = 6
    var gradient: [Color] = [Color(hex: "#667eea"), Color(hex: "#06b6d4")]

    @State private var shimmerPhase: CGFloat = -1.0

    var body: some View {
        GeometryReader { geo in
            let fillWidth = max(0, geo.size.width * min(progress / 100.0, 1.0))

            ZStack(alignment: .leading) {
                // Track
                Capsule()
                    .fill(.white.opacity(0.06))
                    .overlay(
                        Capsule()
                            .strokeBorder(.white.opacity(0.04), lineWidth: 0.5)
                    )

                // Fill bar
                Capsule()
                    .fill(
                        LinearGradient(
                            colors: gradient,
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
                    .frame(width: fillWidth)
                    .overlay(
                        // Top glass highlight
                        Capsule()
                            .fill(
                                LinearGradient(
                                    colors: [.white.opacity(0.35), .clear],
                                    startPoint: .top,
                                    endPoint: .bottom
                                )
                            )
                            .padding(.horizontal, 1)
                            .padding(.vertical, 0.5)
                    )
                    .overlay(
                        // Travelling shimmer
                        Capsule()
                            .fill(
                                LinearGradient(
                                    colors: [.clear, .white.opacity(0.3), .clear],
                                    startPoint: UnitPoint(x: shimmerPhase - 0.15, y: 0),
                                    endPoint: UnitPoint(x: shimmerPhase + 0.15, y: 1)
                                )
                            )
                    )
                    .clipShape(Capsule())
                    .shadow(color: gradient[0].opacity(0.3), radius: 6, y: 0)
            }
        }
        .frame(height: height)
        .onAppear {
            withAnimation(.linear(duration: 3.0).repeatForever(autoreverses: false)) {
                shimmerPhase = 2.0
            }
        }
    }
}

// MARK: - Premium Card Press Style

/// Button style with satisfying press feedback for premium cards.
struct LiquidCardButtonStyle: ButtonStyle {
    var accentColor: Color = .white

    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .scaleEffect(configuration.isPressed ? 0.965 : 1.0)
            .brightness(configuration.isPressed ? -0.02 : 0)
            .animation(.spring(response: 0.3, dampingFraction: 0.6), value: configuration.isPressed)
    }
}
