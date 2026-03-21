import SwiftUI

// MARK: - Rainbow Color Palette

/// Shared rainbow palette used by AdventureCTAButton and the Siri-style close button.
/// Apple Intelligence–inspired pastel rainbow, doubled for seamless angular gradient loops.
enum AdventureCTARainbow {
    static let colors: [Color] = [
        Color(hex: "#FF6B6B"), // soft coral
        Color(hex: "#FECA57"), // warm gold
        Color(hex: "#48DBFB"), // sky cyan
        Color(hex: "#FF9FF3"), // soft pink
        Color(hex: "#54A0FF"), // periwinkle
        Color(hex: "#5F27CD"), // deep violet
        // repeat for seamless angular wrap
        Color(hex: "#FF6B6B"),
        Color(hex: "#FECA57"),
        Color(hex: "#48DBFB"),
        Color(hex: "#FF9FF3"),
        Color(hex: "#54A0FF"),
        Color(hex: "#5F27CD"),
        Color(hex: "#FF6B6B"),
    ]
}

// MARK: - AdventureCTAButton

/// A premium CTA button with an animated rainbow border, theme-adaptive styling,
/// and satisfying press feedback. Designed for high-impact calls-to-action.
///
/// Usage:
///     // Simple — title + optional icon
///     AdventureCTAButton(title: "Start Adventure", icon: "arrow.right") {
///         startAdventure()
///     }
///
///     // Custom label content
///     AdventureCTAButton(isActive: true, action: { go() }) {
///         HStack { Text("Let's go").foregroundStyle(.white) }
///     }
struct AdventureCTAButton<Label: View>: View {
    @Environment(\.colorScheme) private var colorScheme

    let isActive: Bool
    let action: () -> Void
    let label: Label

    private var isDark: Bool { colorScheme == .dark }

    init(isActive: Bool = true, action: @escaping () -> Void, @ViewBuilder label: () -> Label) {
        self.isActive = isActive
        self.action = action
        self.label = label()
    }

    var body: some View {
        Button(action: action) {
            label
                .padding(.horizontal, 22)
                .padding(.vertical, 16)
                .frame(maxWidth: .infinity)
                .background(animatedBackground)
        }
        .buttonStyle(LumenPressStyle(weight: .prominent, accentColor: .indigo))
    }

    // MARK: - Animated Rainbow Background

    private var animatedBackground: some View {
        TimelineView(.animation(minimumInterval: 1.0 / 30.0)) { context in
            let t = context.date.timeIntervalSinceReferenceDate
            let phase = CGFloat(t.truncatingRemainder(dividingBy: 4.0) / 4.0)

            ZStack {
                // Main fill gradient
                RoundedRectangle(cornerRadius: 18)
                    .fill(
                        LinearGradient(
                            colors: isActive
                                ? (isDark
                                    ? [Color(hex: "#4F46E5"), Color(hex: "#7C3AED")]
                                    : [Color(hex: "#0EA5E9"), Color(hex: "#06B6D4")])
                                : (isDark
                                    ? [Color(hex: "#2D1B69"), Color(hex: "#1B2A5C")]
                                    : [Color(hex: "#0EA5E9").opacity(0.55),
                                       Color(hex: "#06B6D4").opacity(0.55)]),
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )

                if isActive {
                    // Diffused rainbow glow — AI bloom
                    RoundedRectangle(cornerRadius: 18)
                        .stroke(
                            AngularGradient(
                                colors: AdventureCTARainbow.colors,
                                center: .center,
                                angle: .degrees(phase * 360)
                            ),
                            lineWidth: 4
                        )
                        .blur(radius: 8)
                        .opacity(0.5)

                    // Crisp rainbow border
                    RoundedRectangle(cornerRadius: 18)
                        .strokeBorder(
                            AngularGradient(
                                colors: AdventureCTARainbow.colors,
                                center: .center,
                                angle: .degrees(phase * 360)
                            ),
                            lineWidth: 1.5
                        )
                } else {
                    RoundedRectangle(cornerRadius: 18)
                        .strokeBorder(
                            LinearGradient(
                                colors: isDark
                                    ? [.indigo.opacity(0.3), .purple.opacity(0.15)]
                                    : [.white.opacity(0.5), .white.opacity(0.2)],
                                startPoint: .top, endPoint: .bottom
                            ),
                            lineWidth: 1
                        )
                }
            }
            .shadow(
                color: isActive
                    ? (isDark ? Color(hex: "#4F46E5") : Color(hex: "#0EA5E9")).opacity(0.4)
                    : (isDark ? Color.indigo.opacity(0.15) : Color(hex: "#0EA5E9").opacity(0.15)),
                radius: isActive ? 20 : 0,
                y: isActive ? 8 : 0
            )
        }
    }
}

// MARK: - Default Label

/// Default label for AdventureCTAButton with theme-adaptive text color.
struct AdventureCTADefaultLabel: View {
    @Environment(\.colorScheme) private var colorScheme

    let title: String
    let icon: String?

    private var isDark: Bool { colorScheme == .dark }

    /// Stable, readable text color: warm ivory on dark, deep charcoal on light.
    private var textColor: Color {
        isDark ? Color(hex: "#F5F0E8") : .white
    }

    var body: some View {
        HStack(spacing: 10) {
            Text(title)
                .font(.headline.weight(.bold))
                .foregroundStyle(textColor)

            if let icon {
                Image(systemName: icon)
                    .font(.system(size: 14, weight: .semibold))
                    .foregroundStyle(textColor)
            }
        }
    }
}

// MARK: - Convenience Initializer

extension AdventureCTAButton where Label == AdventureCTADefaultLabel {
    init(title: String, icon: String? = nil, isActive: Bool = true, action: @escaping () -> Void) {
        self.isActive = isActive
        self.action = action
        self.label = AdventureCTADefaultLabel(title: title, icon: icon)
    }
}

// MARK: - CTA Bar Background

/// Theme-adaptive background for the floating CTA bar area.
/// Dark mode: deep cosmic navy. Light mode: warm frosted tones.
struct AdventureCTABarBackground: View {
    @Environment(\.colorScheme) private var colorScheme

    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        Rectangle()
            .fill(
                isDark
                    ? AnyShapeStyle(LinearGradient(
                        colors: [Color(hex: "#0a0a1a"), Color(hex: "#0d1530")],
                        startPoint: .top, endPoint: .bottom
                    ))
                    : AnyShapeStyle(LinearGradient(
                        colors: [
                            Color(hex: "#FAF5FF").opacity(0.92),
                            Color.white.opacity(0.88),
                            Color(hex: "#FFF0F5").opacity(0.92)
                        ],
                        startPoint: .top, endPoint: .bottom
                    ))
            )
            .ignoresSafeArea()
    }
}
