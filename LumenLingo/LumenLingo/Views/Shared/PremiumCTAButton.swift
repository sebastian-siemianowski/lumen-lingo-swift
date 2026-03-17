import SwiftUI

// MARK: - Premium CTA Button

/// A unified paywall CTA button used across all upgrade, unlock, and membership surfaces.
/// Guarantees: opaque tier gradient background, white text, press feedback with glow bloom,
/// haptic acknowledgment, and shadow depth. One source of truth for every paywall button.
struct PremiumCTAButton: View {
    let title: String
    let tier: MembershipTier
    let action: () -> Void
    var icon: String? = nil
    var shape: CTAShape = .capsule
    var size: CTASize = .regular

    enum CTAShape {
        case capsule
        case rounded(CGFloat = 16)
    }

    enum CTASize {
        case regular
        case compact
    }

    var body: some View {
        Button(action: action) {
            HStack(spacing: 8) {
                if let icon {
                    Image(systemName: icon)
                        .font(.system(size: iconFontSize, weight: .semibold))
                }
                Text(title)
                    .font(.system(size: titleFontSize, weight: .bold))
                    .minimumScaleFactor(0.8)
            }
            .foregroundStyle(.white)
            .frame(maxWidth: .infinity, minHeight: minHeight)
            .background(gradient)
            .modifier(CTAClipModifier(shape: shape))
            .shadow(color: shadowColor, radius: 10, y: 4)
        }
        .buttonStyle(PremiumCTAButtonStyle(glowColor: glowColor))
    }

    // MARK: - Computed Helpers

    private var gradient: LinearGradient {
        LinearGradient(
            colors: tier.gradientColors,
            startPoint: .leading,
            endPoint: .trailing
        )
    }

    private var glowColor: Color {
        tier.gradientColors.first ?? .purple
    }

    private var shadowColor: Color {
        glowColor.opacity(0.35)
    }

    private var minHeight: CGFloat {
        size == .compact ? 44 : 50
    }

    private var titleFontSize: CGFloat {
        size == .compact ? 15 : 17
    }

    private var iconFontSize: CGFloat {
        size == .compact ? 13 : 15
    }
}

// MARK: - Clip Shape Modifier

private struct CTAClipModifier: ViewModifier {
    let shape: PremiumCTAButton.CTAShape

    func body(content: Content) -> some View {
        switch shape {
        case .capsule:
            content.clipShape(Capsule())
        case .rounded(let radius):
            content.clipShape(RoundedRectangle(cornerRadius: radius, style: .continuous))
        }
    }
}

// MARK: - Premium CTA Button Style

/// Press feedback style: deeper scale, glow bloom, saturation punch, haptic response.
struct PremiumCTAButtonStyle: ButtonStyle {
    var glowColor: Color = .purple

    func makeBody(configuration: Configuration) -> some View {
        let pressed = configuration.isPressed

        configuration.label
            .scaleEffect(pressed ? 0.95 : 1.0)
            .brightness(pressed ? -0.05 : 0)
            .shadow(
                color: glowColor.opacity(pressed ? 0.50 : 0.20),
                radius: pressed ? 22 : 10,
                y: pressed ? 2 : 4
            )
            .saturation(pressed ? 1.15 : 1.0)
            .animation(
                .spring(response: 0.30, dampingFraction: 0.55),
                value: pressed
            )
            .onChange(of: pressed) { _, isDown in
                if isDown {
                    HapticsService.shared.buttonPress()
                }
            }
    }
}
