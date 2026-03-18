import SwiftUI

// MARK: - Collapsible Style

/// Visual style variants for CollapsibleSection.
enum CollapsibleStyle {
    /// Default: gradient icon + title + chevron pill, glass background when collapsed.
    case standard
    /// Hero-weight card with GlassCardBackground, custom header, tap-anywhere to expand.
    case hero
    /// Compact mini-player, custom-colored background, header tap to toggle.
    case miniPlayer
    /// Text-link toggle with capsule background, inline chevron.
    case inline
    /// Tip/explanation panel with glass card background.
    case tip
}

// MARK: - Collapsible Section

/// Unified collapsible section component used across the entire app.
/// Provides consistent collapse/expand behavior with style-specific visual treatment.
///
/// **Standard style** (backward-compatible): auto-generated header with gradient icon, title, chevron pill.
/// **Custom header styles** (.hero, .miniPlayer, .inline, .tip): caller provides header content.
struct CollapsibleSection<Header: View, Content: View>: View {
    let style: CollapsibleStyle
    let colors: [Color]
    @Binding var isCollapsed: Bool
    var cornerRadius: CGFloat = 18
    @ViewBuilder let header: () -> Header
    @ViewBuilder let content: () -> Content

    @Environment(\.colorScheme) private var colorScheme
    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        Group {
            switch style {
            case .standard:
                standardBody
            case .hero:
                heroBody
            case .miniPlayer:
                miniPlayerBody
            case .inline:
                inlineBody
            case .tip:
                tipBody
            }
        }
        .accessibilityElement(children: .contain)
        .accessibilityValue(isCollapsed ? "collapsed" : "expanded")
    }

    /// Unified toggle with standard spring animation and haptic.
    func toggle() {
        withAnimation(.spring(response: 0.35, dampingFraction: 0.8)) {
            isCollapsed.toggle()
        }
        HapticsService.shared.toggleSwitch()
    }

    // MARK: - Standard Layout

    private var standardBody: some View {
        VStack(spacing: 0) {
            Button { toggle() } label: { header() }
                .buttonStyle(CollapsibleHeaderButtonStyle())
                .background(
                    isCollapsed ? AnyView(standardGlassBackground) : AnyView(Color.clear)
                )

            if !isCollapsed {
                content()
                    .transition(.opacity.combined(with: .move(edge: .top)))
            }
        }
    }

    /// Glass background for `.standard` style collapsed state — premium glass pill.
    /// Layers match GlassCardBackground: material → Caribbean tint → frosted highlight → section accent → stroke → dual shadow.
    private var standardGlassBackground: some View {
        RoundedRectangle(cornerRadius: cornerRadius)
            .fill(.ultraThinMaterial)
            .opacity(isDark ? 1.0 : 0.55)
            // Caribbean tint layer (light mode only) — matching GlassCardBackground
            .overlay(
                Group {
                    if !isDark {
                        RoundedRectangle(cornerRadius: cornerRadius)
                            .fill(
                                LinearGradient(
                                    colors: [
                                        Color(hex: "#C494FC").opacity(0.12),
                                        Color(hex: "#F472B6").opacity(0.08),
                                        Color(hex: "#FB923C").opacity(0.06)
                                    ],
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing
                                )
                            )
                    }
                }
            )
            // Frosted inner highlight — matching GlassCardBackground
            .overlay(
                RoundedRectangle(cornerRadius: cornerRadius)
                    .fill(
                        LinearGradient(
                            colors: isDark
                                ? [.white.opacity(0.10), .clear, .white.opacity(0.03)]
                                : [.white.opacity(0.20), .clear, .white.opacity(0.05)],
                            startPoint: .top,
                            endPoint: .bottom
                        )
                    )
            )
            // Section accent tint — preserves per-section color identity
            .overlay(
                Group {
                    if !isDark {
                        RoundedRectangle(cornerRadius: cornerRadius)
                            .fill(
                                LinearGradient(
                                    colors: [
                                        colors[0].opacity(0.08),
                                        colors.last!.opacity(0.05)
                                    ],
                                    startPoint: .leading,
                                    endPoint: .trailing
                                )
                            )
                    }
                }
            )
            // Gradient stroke border
            .overlay(
                RoundedRectangle(cornerRadius: cornerRadius)
                    .strokeBorder(
                        LinearGradient(
                            colors: isDark
                                ? [colors[0].opacity(0.25), colors.last!.opacity(0.1)]
                                : [colors[0].opacity(0.3), colors.last!.opacity(0.15)],
                            startPoint: .leading,
                            endPoint: .trailing
                        ),
                        lineWidth: isDark ? 0.75 : 0.5
                    )
            )
            // Dual shadow: lift + grounding
            .shadow(
                color: isDark
                    ? colors[0].opacity(0.10)
                    : Color(hex: "#C494FC").opacity(0.10),
                radius: 16,
                y: 6
            )
            .shadow(
                color: isDark
                    ? .black.opacity(0.04)
                    : Color(hex: "#F472B6").opacity(0.04),
                radius: 5,
                y: 2
            )
    }

    // MARK: - Hero Layout

    private var heroBody: some View {
        VStack(spacing: 0) {
            header()

            if !isCollapsed {
                content()
                    .transition(.move(edge: .top).combined(with: .opacity))
            }
        }
        .background(GlassCardBackground(cornerRadius: cornerRadius))
        .onTapGesture {
            if isCollapsed { toggle() }
        }
    }

    // MARK: - Mini Player Layout

    private var miniPlayerBody: some View {
        VStack(spacing: 0) {
            header()
                .contentShape(Rectangle())
                .onTapGesture { toggle() }

            if !isCollapsed {
                content()
                    .transition(.opacity.combined(with: .move(edge: .top)))
            }
        }
        .modifier(DualShadowModifier(colors: colors, isCollapsed: isCollapsed))
    }

    // MARK: - Inline Layout

    private var inlineBody: some View {
        VStack(spacing: 0) {
            Button { toggle() } label: { header() }
                .buttonStyle(LumenPressStyle(weight: .medium))

            if !isCollapsed {
                content()
                    .transition(.opacity.combined(with: .move(edge: .top)))
            }
        }
        .modifier(DualShadowModifier(colors: colors, isCollapsed: isCollapsed))
    }

    // MARK: - Tip Layout

    private var tipBody: some View {
        VStack(spacing: 0) {
            Button { toggle() } label: { header() }
                .buttonStyle(CollapsibleHeaderButtonStyle())

            if !isCollapsed {
                content()
                    .transition(.opacity.combined(with: .move(edge: .top)))
            }
        }
        .modifier(DualShadowModifier(colors: colors, isCollapsed: isCollapsed))
    }

}

// MARK: - Standard Convenience Init (Backward-Compatible)

extension CollapsibleSection where Header == DefaultCollapsibleHeader {
    /// Backward-compatible init with auto-generated standard header.
    /// Used by JourneyView (13 instances) and ProfileView (2 instances).
    init(
        title: String,
        icon: String,
        colors: [Color],
        isCollapsed: Binding<Bool>,
        subtitle: String? = nil,
        cornerRadius: CGFloat = 18,
        @ViewBuilder content: @escaping () -> Content
    ) {
        self.style = .standard
        self.colors = colors
        self._isCollapsed = isCollapsed
        self.cornerRadius = cornerRadius
        let capturedBinding = isCollapsed
        let capturedSubtitle = subtitle
        self.header = {
            DefaultCollapsibleHeader(
                title: title,
                icon: icon,
                colors: colors,
                isCollapsed: capturedBinding.wrappedValue,
                subtitle: capturedSubtitle,
                cornerRadius: cornerRadius
            )
        }
        self.content = content
    }
}

// MARK: - Default Collapsible Header

/// Auto-generated header for `.standard` style — gradient icon, title, subtitle, chevron pill,
/// and glass background when collapsed.
struct DefaultCollapsibleHeader: View {
    let title: String
    let icon: String
    let colors: [Color]
    let isCollapsed: Bool
    let subtitle: String?
    let cornerRadius: CGFloat

    @Environment(\.colorScheme) private var colorScheme
    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        HStack(spacing: 10) {
            // Gradient icon circle
            ZStack {
                Circle()
                    .fill(
                        LinearGradient(
                            colors: colors.map { $0.opacity(isDark ? 0.2 : 0.15) },
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
                    .frame(width: 30, height: 30)

                Image(systemName: icon)
                    .font(.system(size: 13, weight: .medium))
                    .foregroundStyle(
                        LinearGradient(
                            colors: colors,
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
            }

            Text(title)
                .font(.system(size: 15, weight: .semibold))
                .foregroundStyle(isDark ? .white.opacity(0.9) : .caribbeanInk)

            if let subtitle, isCollapsed {
                Text(subtitle)
                    .font(.system(size: 12, weight: .medium))
                    .foregroundStyle(isDark ? .white.opacity(0.45) : .secondary)
                    .lineLimit(1)
                    .transition(.opacity.combined(with: .scale(scale: 0.8)))
            }

            Spacer()

            // Pill chevron
            ZStack {
                Capsule()
                    .fill(isDark ? .white.opacity(0.06) : .black.opacity(0.04))
                    .frame(width: 28, height: 20)

                Image(systemName: "chevron.right")
                    .font(.system(size: 10, weight: .bold))
                    .foregroundStyle(
                        isCollapsed
                            ? AnyShapeStyle(LinearGradient(colors: colors, startPoint: .leading, endPoint: .trailing))
                            : AnyShapeStyle(isDark ? Color.white.opacity(0.3) : Color.caribbeanMist)
                    )
                    .rotationEffect(.degrees(isCollapsed ? 0 : 90))
            }
        }
        .padding(.horizontal, 14)
        .padding(.vertical, 14)
    }
}

// MARK: - Collapsible Header Button Style

/// Provides press feedback — subtle scale + opacity shift — for section headers.
struct CollapsibleHeaderButtonStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .scaleEffect(configuration.isPressed ? 0.97 : 1.0)
            .opacity(configuration.isPressed ? 0.85 : 1.0)
            .animation(.easeOut(duration: 0.15), value: configuration.isPressed)
    }
}

// MARK: - Dual Shadow Elevation

/// Dual shadow matching GlassCardBackground: colored lift shadow + tight grounding shadow.
/// Light mode uses Caribbean lavender #C494FC for lift.
private struct DualShadowModifier: ViewModifier {
    let colors: [Color]
    let isCollapsed: Bool

    @Environment(\.colorScheme) private var colorScheme
    private var isDark: Bool { colorScheme == .dark }

    func body(content: Content) -> some View {
        content
            .shadow(
                color: isDark
                    ? colors[0].opacity(isCollapsed ? 0.10 : 0.12)
                    : Color(hex: "#C494FC").opacity(isCollapsed ? 0.10 : 0.12),
                radius: isCollapsed ? 16 : 20,
                y: isCollapsed ? 6 : 8
            )
            .shadow(
                color: isDark
                    ? .black.opacity(isCollapsed ? 0.04 : 0.05)
                    : Color(hex: "#F472B6").opacity(isCollapsed ? 0.04 : 0.06),
                radius: isCollapsed ? 5 : 6,
                y: isCollapsed ? 2 : 3
            )
    }
}
