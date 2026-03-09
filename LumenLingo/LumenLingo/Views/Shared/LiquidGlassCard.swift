import SwiftUI

// MARK: - Liquid Glass Card Modifier

/// View modifier that applies the native iOS 26 liquid glass effect
/// with an accent colour tint to a view.
struct LiquidGlassCardModifier: ViewModifier {
    @Environment(\.colorScheme) private var colorScheme
    var cornerRadius: CGFloat = 22
    var accentColor: Color = .blue

    private var isDark: Bool { colorScheme == .dark }

    func body(content: Content) -> some View {
        content
            .glassEffect(
                .regular.tint(accentColor.opacity(isDark ? 0.12 : 0.28)),
                in: .rect(cornerRadius: cornerRadius)
            )
    }
}

extension View {
    /// Convenience: apply the liquid glass card effect.
    func liquidGlassCard(
        cornerRadius: CGFloat = 22,
        accentColor: Color = .blue
    ) -> some View {
        modifier(LiquidGlassCardModifier(
            cornerRadius: cornerRadius,
            accentColor: accentColor
        ))
    }
}

// MARK: - Liquid Glass Icon Container

/// A premium icon badge with native liquid glass effect.
struct LiquidGlassIconContainer: View {
    let systemName: String
    let gradient: [Color]
    var size: CGFloat = 48

    var body: some View {
        Image(systemName: systemName)
            .font(.system(size: size * 0.42, weight: .semibold))
            .foregroundStyle(
                LinearGradient(
                    colors: gradient,
                    startPoint: .topLeading,
                    endPoint: .bottomTrailing
                )
            )
            .frame(width: size, height: size)
            .glassEffect(
                .regular.tint(gradient[0].opacity(0.25)),
                in: .rect(cornerRadius: size * 0.29)
            )
    }
}

// MARK: - Liquid Progress Bar

/// A clean progress bar with glass-like fill and subtle shimmer.
struct LiquidProgressBar: View {
    let progress: Double // 0-100
    var height: CGFloat = 6
    var gradient: [Color] = [Color(hex: "#667eea"), Color(hex: "#06b6d4")]

    @Environment(\.colorScheme) private var colorScheme
    @State private var shimmerPhase: CGFloat = -1.0

    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        GeometryReader { geo in
            let fillWidth = max(0, geo.size.width * min(progress / 100.0, 1.0))

            ZStack(alignment: .leading) {
                // Track
                Capsule()
                    .fill(isDark ? .white.opacity(0.06) : Color(hex: "#C494FC").opacity(0.12))
                    .overlay(
                        Capsule()
                            .strokeBorder(isDark ? .white.opacity(0.04) : Color(hex: "#C494FC").opacity(0.15), lineWidth: 0.5)
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
            .scaleEffect(configuration.isPressed ? 0.96 : 1.0)
            .brightness(configuration.isPressed ? -0.03 : 0)
            .shadow(
                color: configuration.isPressed ? accentColor.opacity(0.15) : .clear,
                radius: configuration.isPressed ? 12 : 0,
                y: configuration.isPressed ? 4 : 0
            )
            .animation(.spring(response: 0.25, dampingFraction: 0.65), value: configuration.isPressed)
    }
}
