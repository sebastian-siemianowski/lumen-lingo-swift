import SwiftUI

// MARK: - Collapsible Depth Environment

/// Environment key for tracking nesting depth of collapsible sections.
private struct CollapsibleDepthKey: EnvironmentKey {
    static let defaultValue: Int = 0
}

extension EnvironmentValues {
    var collapsibleDepth: Int {
        get { self[CollapsibleDepthKey.self] }
        set { self[CollapsibleDepthKey.self] = newValue }
    }
}

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

// MARK: - Glass Weight

/// Three-tier glass hierarchy for collapsible panels.
/// Controls material opacity, tint intensity, stroke weight, and shadow depth.
enum GlassWeight {
    /// Hero-level: heaviest glass, highest prominence. For `.hero` and `.miniPlayer`.
    case primary
    /// Workhorse sections: standard glass weight. For `.standard` and `.tip`.
    case standard
    /// Subordinate: lighter glass, reduced presence. For `.inline` and nested panels.
    case recessed

    /// Material base opacity per color scheme.
    var materialOpacity: (dark: Double, light: Double) {
        switch self {
        case .primary:  return (1.0, 0.65)
        case .standard: return (1.0, 0.55)
        case .recessed: return (0.70, 0.385)
        }
    }

    /// Caribbean tint intensity multiplier (1.0 = standard).
    var tintMultiplier: Double {
        switch self {
        case .primary:  return 1.2
        case .standard: return 1.0
        case .recessed: return 0.6
        }
    }

    /// Stroke border line width per color scheme.
    var strokeWidth: (dark: CGFloat, light: CGFloat) {
        switch self {
        case .primary:  return (1.5, 1.0)
        case .standard: return (0.75, 0.5)
        case .recessed: return (0.5, 0.35)
        }
    }

    /// Stroke opacity multiplier (1.0 = standard).
    var strokeOpacityMultiplier: Double {
        switch self {
        case .primary:  return 1.2
        case .standard: return 1.0
        case .recessed: return 0.5
        }
    }

    /// Lift shadow: (radius, y-offset, opacity-multiplier).
    var liftShadow: (radius: CGFloat, y: CGFloat, opacityMultiplier: Double) {
        switch self {
        case .primary:  return (20, 8, 1.2)
        case .standard: return (16, 6, 1.0)
        case .recessed: return (8, 3, 0.5)
        }
    }

    /// Grounding shadow: (radius, y-offset, opacity-multiplier).
    var groundingShadow: (radius: CGFloat, y: CGFloat, opacityMultiplier: Double) {
        switch self {
        case .primary:  return (6, 3, 1.2)
        case .standard: return (5, 2, 1.0)
        case .recessed: return (3, 1, 0.5)
        }
    }

    /// Default weight for a given collapsible style.
    static func defaultWeight(for style: CollapsibleStyle) -> GlassWeight {
        switch style {
        case .hero, .miniPlayer: return .primary
        case .standard, .tip: return .standard
        case .inline: return .recessed
        }
    }
}

// MARK: - Collapsible Badge

/// Lightweight at-a-glance summary information displayed on collapsed section headers.
/// Each case renders a distinct visual treatment optimized for the collapsed pill context.
enum CollapsibleBadge {
    /// Numeric count in a gradient glass pill (e.g., milestone count).
    case count(Int)
    /// Short text label (max 12 chars), subtle secondary style.
    case text(String)
    /// SF Symbol in a colored circle — status indicators like lock, checkmark, warning.
    case icon(String, Color)
    /// Mini progress bar (0.0–1.0) with section accent gradient fill.
    case progress(Double)

    /// VoiceOver description of the badge content.
    var accessibilityLabel: String {
        switch self {
        case .count(let n): return "\(n)"
        case .text(let s): return s
        case .icon(let name, _):
            return name.replacingOccurrences(of: ".fill", with: "")
                       .replacingOccurrences(of: ".", with: " ")
        case .progress(let p): return "\(Int(p * 100)) percent"
        }
    }
}

/// Renders a `CollapsibleBadge` with visual treatment matching the parent section's accent colors.
/// `isSubtitle` switches to a more compact rendering for the expanded-state subtitle position.
private struct CollapsibleBadgeView: View {
    let badge: CollapsibleBadge
    let colors: [Color]
    let isSubtitle: Bool

    @Environment(\.colorScheme) private var colorScheme
    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        switch badge {
        case .count(let n):   countBadge(n)
        case .text(let s):    textBadge(s)
        case .icon(let name, let color): iconBadge(name, color: color)
        case .progress(let p): progressBadge(p)
        }
    }

    private func countBadge(_ n: Int) -> some View {
        Text("\(n)")
            .font(.system(size: isSubtitle ? 10 : 11, weight: .semibold, design: .rounded))
            .foregroundStyle(
                LinearGradient(colors: colors, startPoint: .leading, endPoint: .trailing)
            )
            .padding(.horizontal, 8)
            .padding(.vertical, 3)
            .background(
                Capsule()
                    .fill(.ultraThinMaterial)
                    .opacity(isDark ? 0.6 : 0.4)
            )
            .overlay(
                Capsule()
                    .strokeBorder(
                        LinearGradient(
                            colors: colors.map { $0.opacity(0.3) },
                            startPoint: .leading,
                            endPoint: .trailing
                        ),
                        lineWidth: 0.5
                    )
            )
    }

    private func textBadge(_ s: String) -> some View {
        Text(s.prefix(12))
            .font(.system(size: isSubtitle ? 10 : 11, weight: .medium))
            .foregroundStyle(isDark ? .white.opacity(0.45) : .secondary)
            .lineLimit(1)
    }

    private func iconBadge(_ name: String, color: Color) -> some View {
        let size: CGFloat = isSubtitle ? 18 : 22
        return ZStack {
            Circle()
                .fill(color.opacity(isDark ? 0.15 : 0.10))
                .frame(width: size, height: size)
            Image(systemName: name)
                .font(.system(size: size * 0.45, weight: .medium))
                .foregroundStyle(color)
        }
    }

    private func progressBadge(_ value: Double) -> some View {
        let clamped = min(max(value, 0), 1)
        return ZStack(alignment: .leading) {
            Capsule()
                .fill(isDark ? .white.opacity(0.08) : .black.opacity(0.06))
                .frame(width: 40, height: 4)
            Capsule()
                .fill(
                    LinearGradient(colors: colors, startPoint: .leading, endPoint: .trailing)
                )
                .frame(width: 40 * clamped, height: 4)
        }
    }
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
    var glassWeight: GlassWeight? = nil
    var badge: CollapsibleBadge? = nil
    @ViewBuilder let header: () -> Header
    @ViewBuilder let content: () -> Content

    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.collapsibleDepth) private var depth
    private var isDark: Bool { colorScheme == .dark }

    /// Resolved weight: explicit override, depth-forced recessed, or auto-derived from style.
    private var resolvedWeight: GlassWeight {
        if depth > 0 { return .recessed }
        return glassWeight ?? GlassWeight.defaultWeight(for: style)
    }

    /// Depth-adjusted corner radius: 18 → 14 → 12.
    private var depthCornerRadius: CGFloat {
        let clampedDepth = min(depth, 2)
        switch clampedDepth {
        case 0: return cornerRadius
        case 1: return 14
        default: return 12
        }
    }

    var body: some View {
        let clampedDepth = min(depth, 2)
        #if DEBUG
        let _ = {
            if depth > 2 {
                assertionFailure("CollapsibleSection nesting depth \(depth) exceeds maximum of 2. Clamping to depth 2 visuals.")
            }
        }()
        #endif

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
        .overlay(alignment: .leading) {
            // Indent guide for nested sections (depth ≥ 1)
            if clampedDepth > 0 {
                RoundedRectangle(cornerRadius: 1)
                    .fill(colors[0].opacity(clampedDepth == 1 ? 0.20 : 0.12))
                    .frame(width: 2)
                    .padding(.vertical, 6)
            }
        }
        .environment(\.collapsibleDepth, clampedDepth + 1)
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
    /// All intensity values are parameterized by `resolvedWeight`.
    private var standardGlassBackground: some View {
        let w = resolvedWeight
        let tint = w.tintMultiplier
        let lift = w.liftShadow
        let ground = w.groundingShadow
        let cr = depthCornerRadius

        return RoundedRectangle(cornerRadius: cr)
            .fill(.ultraThinMaterial)
            .opacity(isDark ? w.materialOpacity.dark : w.materialOpacity.light)
            // Caribbean tint layer (light mode only) — intensity scaled by weight
            .overlay(
                Group {
                    if !isDark {
                        RoundedRectangle(cornerRadius: cr)
                            .fill(
                                LinearGradient(
                                    colors: [
                                        Color(hex: "#C494FC").opacity(0.12 * tint),
                                        Color(hex: "#F472B6").opacity(0.08 * tint),
                                        Color(hex: "#FB923C").opacity(0.06 * tint)
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
                RoundedRectangle(cornerRadius: cr)
                    .fill(
                        LinearGradient(
                            colors: isDark
                                ? [.white.opacity(0.10 * tint), .clear, .white.opacity(0.03 * tint)]
                                : [.white.opacity(0.20 * tint), .clear, .white.opacity(0.05 * tint)],
                            startPoint: .top,
                            endPoint: .bottom
                        )
                    )
            )
            // Section accent tint — preserves per-section color identity
            .overlay(
                Group {
                    if !isDark {
                        RoundedRectangle(cornerRadius: cr)
                            .fill(
                                LinearGradient(
                                    colors: [
                                        colors[0].opacity(0.08 * tint),
                                        colors.last!.opacity(0.05 * tint)
                                    ],
                                    startPoint: .leading,
                                    endPoint: .trailing
                                )
                            )
                    }
                }
            )
            // Stroke border — treatment varies by glass weight
            .overlay(strokeBorderOverlay)
            // Dual shadow: lift + grounding — depth from weight
            .shadow(
                color: isDark
                    ? colors[0].opacity(0.10 * lift.opacityMultiplier)
                    : Color(hex: "#C494FC").opacity(0.10 * lift.opacityMultiplier),
                radius: lift.radius,
                y: lift.y
            )
            .shadow(
                color: isDark
                    ? .black.opacity(0.04 * ground.opacityMultiplier)
                    : Color(hex: "#F472B6").opacity(0.04 * ground.opacityMultiplier),
                radius: ground.radius,
                y: ground.y
            )
    }

    /// Weight-specific stroke border overlay.
    /// - `.primary`: 4-stop gradient (accent + white highlights) at elevated intensity
    /// - `.standard`: 2-stop gradient (current treatment, unchanged)
    /// - `.recessed`: barely-visible solid accent border
    /// Border intensity reduces by 15% when expanded.
    @ViewBuilder
    private var strokeBorderOverlay: some View {
        let w = resolvedWeight
        let expandMul = isCollapsed ? 1.0 : 0.85
        let cr = depthCornerRadius

        switch w {
        case .primary:
            // 4-stop gradient: accent → white highlight → accent end → white edge
            RoundedRectangle(cornerRadius: cr)
                .strokeBorder(
                    LinearGradient(
                        colors: isDark
                            ? [
                                colors[0].opacity(0.35 * expandMul),
                                Color.white.opacity(0.12 * expandMul),
                                colors.last!.opacity(0.15 * expandMul),
                                Color.white.opacity(0.08 * expandMul)
                              ]
                            : [
                                colors[0].opacity(0.40 * expandMul),
                                Color.white.opacity(0.18 * expandMul),
                                colors.last!.opacity(0.20 * expandMul),
                                Color.white.opacity(0.10 * expandMul)
                              ],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    ),
                    lineWidth: isDark ? 1.5 : 1.0
                )

        case .standard:
            // 2-stop gradient — unchanged from original design
            RoundedRectangle(cornerRadius: cr)
                .strokeBorder(
                    LinearGradient(
                        colors: isDark
                            ? [colors[0].opacity(0.25 * expandMul), colors.last!.opacity(0.10 * expandMul)]
                            : [colors[0].opacity(0.30 * expandMul), colors.last!.opacity(0.15 * expandMul)],
                        startPoint: .leading,
                        endPoint: .trailing
                    ),
                    lineWidth: isDark ? 0.75 : 0.5
                )

        case .recessed:
            // Solid accent border — barely visible edge definition
            RoundedRectangle(cornerRadius: cr)
                .strokeBorder(
                    colors[0].opacity(0.08 * expandMul),
                    lineWidth: 0.5
                )
        }
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
        .modifier(DualShadowModifier(colors: colors, isCollapsed: isCollapsed, weight: resolvedWeight))
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
        .modifier(DualShadowModifier(colors: colors, isCollapsed: isCollapsed, weight: resolvedWeight))
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
        .modifier(DualShadowModifier(colors: colors, isCollapsed: isCollapsed, weight: resolvedWeight))
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
        badge: CollapsibleBadge? = nil,
        cornerRadius: CGFloat = 18,
        glassWeight: GlassWeight? = nil,
        @ViewBuilder content: @escaping () -> Content
    ) {
        self.style = .standard
        self.colors = colors
        self._isCollapsed = isCollapsed
        self.cornerRadius = cornerRadius
        self.glassWeight = glassWeight
        self.badge = badge
        let capturedBinding = isCollapsed
        let capturedSubtitle = subtitle
        let capturedBadge = badge
        self.header = {
            DefaultCollapsibleHeader(
                title: title,
                icon: icon,
                colors: colors,
                isCollapsed: capturedBinding.wrappedValue,
                subtitle: capturedSubtitle,
                badge: capturedBadge,
                cornerRadius: cornerRadius
            )
        }
        self.content = content
    }
}

// MARK: - Default Collapsible Header

/// Auto-generated header for `.standard` style — gradient icon, title, subtitle, chevron pill,
/// and glass background when collapsed. Typography and padding adapt to nesting depth.
/// Badges migrate between trailing (collapsed) and subtitle (expanded) positions via matchedGeometryEffect.
struct DefaultCollapsibleHeader: View {
    let title: String
    let icon: String
    let colors: [Color]
    let isCollapsed: Bool
    let subtitle: String?
    let badge: CollapsibleBadge?
    let cornerRadius: CGFloat

    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.collapsibleDepth) private var depth
    @Namespace private var badgeNS
    private var isDark: Bool { colorScheme == .dark }

    /// Depth-adaptive title font size: 15 → 13 → 12.
    private var titleSize: CGFloat {
        switch min(depth, 2) {
        case 0: return 15
        case 1: return 13
        default: return 12
        }
    }

    /// Depth-adaptive icon circle size: 30 → 26 → 24.
    private var iconCircleSize: CGFloat {
        switch min(depth, 2) {
        case 0: return 30
        case 1: return 26
        default: return 24
        }
    }

    /// Depth-adaptive horizontal padding: 14 → 12 → 10.
    private var horizontalPad: CGFloat {
        switch min(depth, 2) {
        case 0: return 14
        case 1: return 12
        default: return 10
        }
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
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
                        .frame(width: iconCircleSize, height: iconCircleSize)

                    Image(systemName: icon)
                        .font(.system(size: iconCircleSize * 0.43, weight: .medium))
                        .foregroundStyle(
                            LinearGradient(
                                colors: colors,
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            )
                        )
                }

                Text(title)
                    .font(.system(size: titleSize, weight: .semibold))
                    .foregroundStyle(isDark ? .white.opacity(0.9) : .caribbeanInk)

                if let subtitle, isCollapsed {
                    Text(subtitle)
                        .font(.system(size: 12, weight: .medium))
                        .foregroundStyle(isDark ? .white.opacity(0.45) : .secondary)
                        .lineLimit(1)
                        .transition(.opacity.combined(with: .scale(scale: 0.8)))
                }

                Spacer()

                // Badge at trailing position (collapsed)
                if let badge, isCollapsed {
                    CollapsibleBadgeView(badge: badge, colors: colors, isSubtitle: false)
                        .matchedGeometryEffect(id: "badge", in: badgeNS)
                        .transition(.opacity.combined(with: .scale(scale: 0.8)))
                        .accessibilityLabel(badge.accessibilityLabel)
                }

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

            // Badge at subtitle position (expanded) — morphs from trailing via matchedGeometryEffect
            if let badge, !isCollapsed {
                CollapsibleBadgeView(badge: badge, colors: colors, isSubtitle: true)
                    .matchedGeometryEffect(id: "badge", in: badgeNS)
                    .padding(.leading, iconCircleSize + 10)
                    .padding(.top, 2)
                    .transition(.opacity.combined(with: .scale(scale: 0.8)))
                    .accessibilityLabel(badge.accessibilityLabel)
            }
        }
        .padding(.horizontal, horizontalPad)
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
/// Shadow depth is parameterized by `GlassWeight`.
private struct DualShadowModifier: ViewModifier {
    let colors: [Color]
    let isCollapsed: Bool
    var weight: GlassWeight = .standard

    @Environment(\.colorScheme) private var colorScheme
    private var isDark: Bool { colorScheme == .dark }

    func body(content: Content) -> some View {
        let lift = weight.liftShadow
        let ground = weight.groundingShadow
        // Expanded state gets slightly more shadow for "floating" feel
        let expandedLiftBump: Double = isCollapsed ? 1.0 : 1.15
        let expandedRadiusBump: CGFloat = isCollapsed ? 0 : 4
        let expandedYBump: CGFloat = isCollapsed ? 0 : 2

        content
            .shadow(
                color: isDark
                    ? colors[0].opacity(0.10 * lift.opacityMultiplier * expandedLiftBump)
                    : Color(hex: "#C494FC").opacity(0.10 * lift.opacityMultiplier * expandedLiftBump),
                radius: lift.radius + expandedRadiusBump,
                y: lift.y + expandedYBump
            )
            .shadow(
                color: isDark
                    ? .black.opacity(0.04 * ground.opacityMultiplier * expandedLiftBump)
                    : Color(hex: "#F472B6").opacity(0.04 * ground.opacityMultiplier * expandedLiftBump),
                radius: ground.radius + (isCollapsed ? 0 : 1),
                y: ground.y + (isCollapsed ? 0 : 1)
            )
    }
}
