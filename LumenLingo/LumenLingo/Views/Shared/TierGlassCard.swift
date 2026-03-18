import SwiftUI

// MARK: - Tier Glass Card Modifier

/// Reusable ViewModifier that applies the "beautiful card" design used across
/// all membership views: frosted dark material base + tier-colored gradient tint
/// + vignette inner glow + gradient strokeBorder + dual shadows.
///
/// Usage:
///     .tierGlassCard(colors: tier.gradientColors)
///     .tierGlassCard(colors: tier.gradientColors, cornerRadius: 22, borderGlow: pulse)
struct TierGlassCardModifier: ViewModifier {
    let colors: [Color]
    var cornerRadius: CGFloat = 24
    var borderGlow: Double = 0
    var hasShadow: Bool = true
    var hasBorder: Bool = true

    func body(content: Content) -> some View {
        content
            .background(background)
            .clipShape(RoundedRectangle(cornerRadius: cornerRadius))
            .overlay(hasBorder ? border : nil)
            .shadow(color: hasShadow ? (colors.first?.opacity(0.3) ?? .clear) : .clear, radius: hasShadow ? 30 : 0, y: hasShadow ? 8 : 0)
            .shadow(color: hasShadow ? .black.opacity(0.4) : .clear, radius: hasShadow ? 20 : 0, y: hasShadow ? 10 : 0)
    }

    // 3-layer frosted glass background
    private var background: some View {
        ZStack {
            // Layer 1: Deep frosted dark base
            RoundedRectangle(cornerRadius: cornerRadius)
                .fill(.ultraThinMaterial)
                .environment(\.colorScheme, .dark)

            // Layer 2: Subtle tier-colored tint
            RoundedRectangle(cornerRadius: cornerRadius)
                .fill(
                    LinearGradient(
                        colors: [
                            colors.first?.opacity(0.08) ?? .clear,
                            .clear,
                            colors.last?.opacity(0.05) ?? .clear
                        ],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )

            // Layer 3: Vignette inner glow at top
            RoundedRectangle(cornerRadius: cornerRadius)
                .fill(
                    LinearGradient(
                        colors: [
                            .white.opacity(0.04),
                            .clear,
                            .clear,
                            .black.opacity(0.15)
                        ],
                        startPoint: .top,
                        endPoint: .bottom
                    )
                )
        }
    }

    // Gradient stroke border with optional glow animation
    private var border: some View {
        RoundedRectangle(cornerRadius: cornerRadius)
            .strokeBorder(
                LinearGradient(
                    colors: [
                        colors.first?.opacity(0.5 + borderGlow * 0.3) ?? .clear,
                        colors.last?.opacity(0.2 + borderGlow * 0.15) ?? .clear,
                        .white.opacity(0.08),
                        colors.first?.opacity(0.3 + borderGlow * 0.2) ?? .clear
                    ],
                    startPoint: .topLeading,
                    endPoint: .bottomTrailing
                ),
                lineWidth: 1.5
            )
    }
}

// MARK: - View Extension

extension View {
    /// Apply the shared "beautiful card" glass style used across all membership views.
    ///
    /// - Parameters:
    ///   - colors: Tier gradient colors (e.g. `tier.gradientColors`)
    ///   - cornerRadius: Card corner radius (default 24)
    ///   - borderGlow: Animated glow intensity 0…1 (default 0, static)
    ///   - hasShadow: Whether to add dual tier+black shadows (default true)
    ///   - hasBorder: Whether to add gradient strokeBorder (default true)
    func tierGlassCard(
        colors: [Color],
        cornerRadius: CGFloat = 24,
        borderGlow: Double = 0,
        hasShadow: Bool = true,
        hasBorder: Bool = true
    ) -> some View {
        modifier(TierGlassCardModifier(
            colors: colors,
            cornerRadius: cornerRadius,
            borderGlow: borderGlow,
            hasShadow: hasShadow,
            hasBorder: hasBorder
        ))
    }
}
