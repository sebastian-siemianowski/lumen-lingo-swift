import SwiftUI

// MARK: - Animation Tokens

/// Centralized spring constants and timing for all CollapsibleSection animations.
/// Expand feels "breathe open" with ~2% overshoot; collapse feels "snap shut" — crisp and decisive.
enum CollapsibleAnimationTokens {
    /// Expand: slower response with noticeable overshoot.
    static let expandSpring: Animation = .spring(response: 0.40, dampingFraction: 0.72, blendDuration: 0.1)
    /// Collapse: faster, crisper, minimal overshoot.
    static let collapseSpring: Animation = .spring(response: 0.30, dampingFraction: 0.88)
    /// Content opacity lags height animation by 30ms to avoid empty-card flash.
    static let revealDelay: Double = 0.03
    /// Rapid toggle debounce — ignore re-toggle within this interval.
    static let debounceInterval: TimeInterval = 0.2
}

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
    var category: ThemeCategory? = nil
    var isLocked: Bool = false
    var lockedTierName: String? = nil
    var lockedTierColor: Color? = nil
    @ViewBuilder let header: () -> Header
    @ViewBuilder let content: () -> Content

    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.collapsibleDepth) private var depth
    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    @State private var isOnScreen = true
    @State private var isHeaderPressed = false
    @State private var isLongPressed = false
    @State private var longPressGlow: CGFloat = 0
    @State private var lockedFlash = false
    @State private var showLockedToast = false
    @State private var wasLocked = false
    @State private var unlockCelebrating = false
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
        // Locked visual treatment (Story 4.3.2, 4.3.6)
        .saturation(isLocked && !unlockCelebrating ? 0.4 : 1.0)
        .opacity(isLocked && !unlockCelebrating ? 0.85 : 1.0)
        .overlay {
            // Premium veil (Story 4.3.6) — static frosted distinction
            if isLocked, !unlockCelebrating {
                RoundedRectangle(cornerRadius: depthCornerRadius)
                    .fill(isDark ? Color.white.opacity(0.03) : Color.black.opacity(0.02))
                    .allowsHitTesting(false)
            }
        }
        .overlay {
            // Locked flash border (Story 4.3.4)
            if lockedFlash, let tierColor = lockedTierColor {
                RoundedRectangle(cornerRadius: depthCornerRadius)
                    .strokeBorder(
                        LinearGradient(
                            colors: [tierColor, tierColor.opacity(0.5)],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        ),
                        lineWidth: 2
                    )
                    .transition(.opacity)
            }
        }
        // Unlock celebration border flash (Story 4.3.7)
        .overlay {
            if unlockCelebrating, let tierColor = lockedTierColor {
                RoundedRectangle(cornerRadius: depthCornerRadius)
                    .strokeBorder(
                        LinearGradient(
                            colors: [tierColor, tierColor.opacity(0.6)],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        ),
                        lineWidth: 2
                    )
                    .transition(.opacity)
            }
        }
        .overlay(alignment: .bottom) {
            // "Unlock with {TierName}" toast (Story 4.3.4)
            if showLockedToast, let tierName = lockedTierName, let tierColor = lockedTierColor {
                Text("Unlock with \(tierName)")
                    .font(.system(size: 11, weight: .semibold))
                    .foregroundStyle(tierColor)
                    .padding(.horizontal, 12)
                    .padding(.vertical, 6)
                    .background(
                        Capsule().fill(.ultraThinMaterial)
                    )
                    .overlay(
                        Capsule().strokeBorder(tierColor.opacity(0.3), lineWidth: 0.5)
                    )
                    .transition(.move(edge: .bottom).combined(with: .opacity))
                    .padding(.bottom, 4)
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
        .animation(.easeInOut(duration: 0.5), value: isLocked)
        .animation(.easeInOut(duration: 0.3), value: unlockCelebrating)
        // Smooth dark↔light mode crossfade for all glass layers (Story 4.4.1)
        .animation(.easeInOut(duration: 0.4), value: colorScheme)
        // Unlock detection (Story 4.3.7)
        .onChange(of: isLocked) { oldVal, newVal in
            if oldVal == true, newVal == false {
                // Section just unlocked — celebrate
                unlockCelebrating = true
                Task { @MainActor in
                    try? await Task.sleep(for: .milliseconds(800))
                    withAnimation(.easeOut(duration: 0.3)) {
                        unlockCelebrating = false
                    }
                }
            }
            wasLocked = newVal
        }
        .environment(\.collapsibleDepth, clampedDepth + 1)
        .accessibilityElement(children: .contain)
        .accessibilityValue(isLocked ? "locked" : (isCollapsed ? "collapsed" : "expanded"))
        .onAppear {
            isOnScreen = true
            wasLocked = isLocked
        }
        .onDisappear { isOnScreen = false }
    }

    /// Tracks the last toggle time for rapid-toggle debounce.
    @State private var lastToggleTime: Date = .distantPast

    /// Asymmetric toggle: expand breathes open with overshoot; collapse snaps shut.
    /// Ignores rapid re-toggles within 200ms to prevent overlapping animations.
    /// When locked (Story 4.3.4), flashes the tier border and shows a toast instead of toggling.
    func toggle() {
        let now = Date()
        guard now.timeIntervalSince(lastToggleTime) >= CollapsibleAnimationTokens.debounceInterval else { return }
        lastToggleTime = now

        if isLocked {
            // Flash border + show toast (Story 4.3.4)
            withAnimation(.easeInOut(duration: 0.15)) { lockedFlash = true }
            withAnimation(.easeInOut(duration: 0.2)) { showLockedToast = true }
            HapticsService.shared.warning()
            Task { @MainActor in
                try? await Task.sleep(for: .milliseconds(600))
                withAnimation(.easeOut(duration: 0.3)) { lockedFlash = false }
                try? await Task.sleep(for: .milliseconds(800))
                withAnimation(.easeOut(duration: 0.25)) { showLockedToast = false }
            }
            return
        }

        let expanding = isCollapsed
        let spring = expanding ? CollapsibleAnimationTokens.expandSpring : CollapsibleAnimationTokens.collapseSpring
        withAnimation(spring) {
            isCollapsed.toggle()
        }
        HapticsService.shared.toggleSwitch()
    }

    // MARK: - Standard Layout

    private var standardBody: some View {
        VStack(spacing: 0) {
            Button { toggle() } label: { header() }
                .buttonStyle(CollapsibleHeaderButtonStyle())
                .onPreferenceChange(HeaderPressedKey.self) { pressed in
                    isHeaderPressed = pressed
                }
                .background(
                    isCollapsed ? AnyView(breathingGlassBackground) : AnyView(Color.clear)
                )

            // Category accent divider between header and content (Story 4.2.2)
            if !isCollapsed, let cat = category {
                categoryAccentDivider(cat)
            }

            MeasuredContentReveal(isExpanded: !isCollapsed) {
                content()
            }
        }
        .task(id: isHeaderPressed) {
            guard isHeaderPressed else { return }
            try? await Task.sleep(for: .milliseconds(300))
            guard !Task.isCancelled, isHeaderPressed else { return }
            isLongPressed = true
        }
        .onChange(of: isHeaderPressed) { _, pressed in
            if !pressed { isLongPressed = false }
        }
        .onChange(of: isLongPressed) { _, longPressed in
            if longPressed {
                withAnimation(.easeInOut(duration: 0.6).repeatForever(autoreverses: true)) {
                    longPressGlow = 1
                }
            } else {
                withAnimation(.easeOut(duration: 0.2)) {
                    longPressGlow = 0
                }
            }
        }
    }

    // MARK: - Category Accent Helpers (Story 4.2)

    /// Resolves the accent color for a category — danger/utility use red, others use the section gradient.
    private func categoryAccentColor(_ cat: ThemeCategory) -> Color {
        switch cat {
        case .danger:  return .red
        case .utility: return colors.first ?? .secondary
        default:       return colors.first ?? .purple
        }
    }

    /// Subtle accent divider between header and expanded content.
    /// Line style varies by category: solid for stats, dashed for analytics,
    /// dotted for engagement, red-tinted solid for danger/utility.
    @ViewBuilder
    private func categoryAccentDivider(_ cat: ThemeCategory) -> some View {
        let accent = categoryAccentColor(cat)
        let lineOpacity: CGFloat = (cat == .danger || cat == .utility) ? 0.35 : 0.18
        let gradient = LinearGradient(
            colors: [accent.opacity(0), accent.opacity(lineOpacity), accent.opacity(0)],
            startPoint: .leading,
            endPoint: .trailing
        )

        if let dash = cat.dashPattern {
            HorizontalLine()
                .stroke(gradient, style: StrokeStyle(lineWidth: 0.5, dash: dash))
                .frame(height: 0.5)
                .padding(.horizontal, 16)
        } else {
            Rectangle()
                .fill(gradient)
                .frame(height: 0.5)
                .padding(.horizontal, 16)
        }
    }

    /// Glass background for `.standard` style collapsed state — premium glass pill.
    /// Layers match GlassCardBackground: material → cosmic tint → frosted highlight → luminous glow → section accent → top frost → stroke → dual shadow.
    /// All intensity values are parameterized by `resolvedWeight`.
    /// Breathing parameters drive subtle highlight shift and stroke rotation (Story 3.3).
    /// Press parameters compress shadows, dim highlight, and boost stroke (Story 3.4).
    private func standardGlassBackground(highlightShift: CGFloat = 0, strokeAngle: CGFloat = 0, isPressed: Bool = false) -> some View {
        let w = resolvedWeight
        let tint = w.tintMultiplier
        let lift = w.liftShadow
        let ground = w.groundingShadow
        let cr = depthCornerRadius
        // Press compression: shadows shrink toward surface, highlight dims
        let pressLerp: CGFloat = isPressed ? 1.0 : 0.0
        let highlightDim: CGFloat = isPressed ? 0.7 : 1.0
        let liftRadius = lift.radius - pressLerp * (lift.radius - 8)
        let liftY = lift.y - pressLerp * (lift.y - 2)
        let groundRadius = ground.radius - pressLerp * (ground.radius - 3)
        let groundY = ground.y - pressLerp * (ground.y - 1)

        return RoundedRectangle(cornerRadius: cr)
            .fill(.ultraThinMaterial)
            .opacity(isDark ? w.materialOpacity.dark * 0.85 : w.materialOpacity.light)
            // Cosmic / Caribbean tint layer — intensity scaled by weight
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
                    } else {
                        // Dark mode: cosmic tint blended with section color for personality
                        RoundedRectangle(cornerRadius: cr)
                            .fill(
                                LinearGradient(
                                    colors: [
                                        Color(red: 0.08, green: 0.055, blue: 0.15).opacity(0.50 * tint),
                                        colors[0].opacity(0.07 * tint),
                                        Color(red: 0.05, green: 0.035, blue: 0.12).opacity(0.40 * tint)
                                    ],
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing
                                )
                            )
                    }
                }
            )
            // Frosted inner highlight — breathes ±3% vertically; dims 30% on press
            .overlay(
                RoundedRectangle(cornerRadius: cr)
                    .fill(
                        LinearGradient(
                            colors: isDark
                                ? [.white.opacity(0.16 * tint * highlightDim), .white.opacity(0.02 * tint * highlightDim), .white.opacity(0.06 * tint * highlightDim)]
                                : [.white.opacity(0.20 * tint * highlightDim), .clear, .white.opacity(0.05 * tint * highlightDim)],
                            startPoint: UnitPoint(x: 0.5, y: highlightShift),
                            endPoint: UnitPoint(x: 0.5, y: 1 + highlightShift)
                        )
                    )
            )
            // Dark mode luminous inner glow — section color radiates softly from center
            .overlay(
                Group {
                    if isDark {
                        RoundedRectangle(cornerRadius: cr)
                            .fill(
                                .radialGradient(
                                    colors: [
                                        colors[0].opacity(0.10 * tint * highlightDim),
                                        colors.last!.opacity(0.04 * tint * highlightDim),
                                        .clear
                                    ],
                                    center: UnitPoint(x: 0.3, y: 0.3 + highlightShift),
                                    startRadius: 0,
                                    endRadius: 120
                                )
                            )
                    }
                }
            )
            // Section accent tint — preserves per-section color identity
            .overlay(
                RoundedRectangle(cornerRadius: cr)
                    .fill(
                        LinearGradient(
                            colors: isDark
                                ? [
                                    colors[0].opacity(0.08 * tint),
                                    colors.last!.opacity(0.04 * tint)
                                ]
                                : [
                                    colors[0].opacity(0.08 * tint),
                                    colors.last!.opacity(0.05 * tint)
                                ],
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
            )
            // Dark mode top frost band — mimics light catching the top edge of frosted glass
            .overlay(
                Group {
                    if isDark {
                        VStack(spacing: 0) {
                            LinearGradient(
                                colors: [
                                    .white.opacity(0.10 * tint * highlightDim),
                                    .white.opacity(0.03 * tint * highlightDim),
                                    .clear
                                ],
                                startPoint: .top,
                                endPoint: .bottom
                            )
                            .frame(height: 18)
                            Spacer(minLength: 0)
                        }
                        .clipShape(RoundedRectangle(cornerRadius: cr))
                    }
                }
            )
            // Stroke border — breathes ±5° angle; intensifies 1.3× on press
            .overlay(strokeBorderOverlay(strokeAngle: strokeAngle, pressMultiplier: isPressed ? 1.3 : 1.0))
            // Dual shadow — compressed on press (card presses into surface)
            // Dark mode: ambient colored glow for depth; light mode: Caribbean shadows
            .shadow(
                color: isDark
                    ? colors[0].opacity(0.14 * lift.opacityMultiplier)
                    : Color(hex: "#C494FC").opacity(0.10 * lift.opacityMultiplier),
                radius: liftRadius,
                y: liftY
            )
            .shadow(
                color: isDark
                    ? colors.last!.opacity(0.06 * ground.opacityMultiplier)
                    : Color(hex: "#F472B6").opacity(0.04 * ground.opacityMultiplier),
                radius: groundRadius,
                y: groundY
            )
    }

    /// Breathing glass background — drives subtle highlight + stroke shimmer via TimelineView at 15fps.
    /// Also responds to press state: shadow compression, stroke boost, highlight dim (Story 3.4).
    /// Long press glow overlays a pulsing border when held >300ms.
    @ViewBuilder
    private var breathingGlassBackground: some View {
        Group {
            if reduceMotion || !isOnScreen {
                standardGlassBackground(isPressed: isHeaderPressed)
            } else {
                TimelineView(.animation(minimumInterval: 1.0 / 15.0)) { context in
                    let t = context.date.timeIntervalSince1970
                    let hShift = sin(t * .pi * 2.0 / 6.0) * 0.03
                    let sAngle = sin(t * .pi * 2.0 / 8.0) * 5.0
                    standardGlassBackground(highlightShift: hShift, strokeAngle: sAngle, isPressed: isHeaderPressed)
                }
            }
        }
        .animation(.spring(response: 0.25, dampingFraction: 0.7), value: isHeaderPressed)
        .overlay(
            RoundedRectangle(cornerRadius: depthCornerRadius)
                .strokeBorder(colors[0].opacity(0.05 * longPressGlow), lineWidth: 2)
                .allowsHitTesting(false)
        )
    }

    /// Weight-specific stroke border overlay.
    /// - `.primary`: 4-stop gradient (accent + white highlights) at elevated intensity
    /// - `.standard`: 2-stop gradient (current treatment, unchanged)
    /// - `.recessed`: barely-visible solid accent border
    /// Border intensity reduces by 15% when expanded.
    /// `strokeAngle` (degrees) applies breathing rotation to gradient direction.
    /// `pressMultiplier` boosts opacity on press (1.3× per spec).
    @ViewBuilder
    private func strokeBorderOverlay(strokeAngle: CGFloat = 0, pressMultiplier: CGFloat = 1.0) -> some View {
        let w = resolvedWeight
        let expandMul = isCollapsed ? 1.0 : 0.85
        let mul = expandMul * pressMultiplier
        let cr = depthCornerRadius

        switch w {
        case .primary:
            let rad = (45.0 + strokeAngle) * .pi / 180.0
            let r: CGFloat = 0.707
            RoundedRectangle(cornerRadius: cr)
                .strokeBorder(
                    LinearGradient(
                        colors: isDark
                            ? [
                                colors[0].opacity(0.35 * mul),
                                Color.white.opacity(0.12 * mul),
                                colors.last!.opacity(0.15 * mul),
                                Color.white.opacity(0.08 * mul)
                              ]
                            : [
                                colors[0].opacity(0.40 * mul),
                                Color.white.opacity(0.18 * mul),
                                colors.last!.opacity(0.20 * mul),
                                Color.white.opacity(0.10 * mul)
                              ],
                        startPoint: UnitPoint(x: 0.5 - r * cos(rad), y: 0.5 - r * sin(rad)),
                        endPoint: UnitPoint(x: 0.5 + r * cos(rad), y: 0.5 + r * sin(rad))
                    ),
                    lineWidth: isDark ? 1.5 : 1.0
                )

        case .standard:
            let rad = strokeAngle * .pi / 180.0
            RoundedRectangle(cornerRadius: cr)
                .strokeBorder(
                    LinearGradient(
                        colors: isDark
                            ? [colors[0].opacity(0.25 * mul), colors.last!.opacity(0.10 * mul)]
                            : [colors[0].opacity(0.30 * mul), colors.last!.opacity(0.15 * mul)],
                        startPoint: UnitPoint(x: 0.5 - 0.5 * cos(rad), y: 0.5 - 0.5 * sin(rad)),
                        endPoint: UnitPoint(x: 0.5 + 0.5 * cos(rad), y: 0.5 + 0.5 * sin(rad))
                    ),
                    lineWidth: isDark ? 0.75 : 0.5
                )

        case .recessed:
            RoundedRectangle(cornerRadius: cr)
                .strokeBorder(
                    colors[0].opacity(0.08 * mul),
                    lineWidth: 0.5
                )
        }
    }

    // MARK: - Hero Layout

    private var heroBody: some View {
        VStack(spacing: 0) {
            header()

            MeasuredContentReveal(isExpanded: !isCollapsed) {
                content()
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

            MeasuredContentReveal(isExpanded: !isCollapsed) {
                content()
            }
        }
        .modifier(DualShadowModifier(colors: colors, isCollapsed: isCollapsed, weight: resolvedWeight))
    }

    // MARK: - Inline Layout

    private var inlineBody: some View {
        VStack(spacing: 0) {
            Button { toggle() } label: { header() }
                .buttonStyle(LumenPressStyle(weight: .medium))

            MeasuredContentReveal(isExpanded: !isCollapsed) {
                content()
            }
        }
        .modifier(DualShadowModifier(colors: colors, isCollapsed: isCollapsed, weight: resolvedWeight))
    }

    // MARK: - Tip Layout

    private var tipBody: some View {
        VStack(spacing: 0) {
            Button { toggle() } label: { header() }
                .buttonStyle(CollapsibleHeaderButtonStyle())

            MeasuredContentReveal(isExpanded: !isCollapsed) {
                content()
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
        isLocked: Bool = false,
        lockedTierName: String? = nil,
        lockedTierColor: Color? = nil,
        @ViewBuilder content: @escaping () -> Content
    ) {
        self.style = .standard
        self.colors = colors
        self._isCollapsed = isCollapsed
        self.cornerRadius = cornerRadius
        self.glassWeight = glassWeight
        self.badge = badge
        self.isLocked = isLocked
        self.lockedTierName = lockedTierName
        self.lockedTierColor = lockedTierColor
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
                cornerRadius: cornerRadius,
                isLocked: isLocked,
                lockedTierColor: lockedTierColor
            )
        }
        self.content = content
    }

    /// Theme-based init — icon and colors sourced from the centralized theme registry.
    /// Eliminates inline color/icon specifications at each call site.
    init(
        title: String,
        theme: CollapsibleSectionTheme,
        isCollapsed: Binding<Bool>,
        subtitle: String? = nil,
        badge: CollapsibleBadge? = nil,
        cornerRadius: CGFloat = 18,
        glassWeight: GlassWeight? = nil,
        isLocked: Bool = false,
        lockedTierName: String? = nil,
        lockedTierColor: Color? = nil,
        @ViewBuilder content: @escaping () -> Content
    ) {
        self.init(
            title: title,
            icon: theme.icon,
            colors: theme.gradientColors,
            isCollapsed: isCollapsed,
            subtitle: subtitle,
            badge: badge,
            cornerRadius: cornerRadius,
            glassWeight: glassWeight,
            isLocked: isLocked,
            lockedTierName: lockedTierName,
            lockedTierColor: lockedTierColor,
            content: content
        )
        self.category = theme.category
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
    var isLocked: Bool = false
    var lockedTierColor: Color? = nil

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
                // Gradient icon circle with optional lock overlay (Story 4.3.2)
                ZStack(alignment: .bottomTrailing) {
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

                    // Mini lock overlay at bottom-right of icon
                    if isLocked {
                        Image(systemName: "lock.fill")
                            .font(.system(size: 8, weight: .bold))
                            .foregroundStyle(lockedTierColor ?? .secondary)
                            .offset(x: 2, y: 2)
                    }
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

                // Badge at trailing position (collapsed) — lock overrides data badge (Story 4.3.5)
                if isCollapsed {
                    if isLocked, let tierColor = lockedTierColor {
                        CollapsibleBadgeView(badge: .icon("lock.fill", tierColor), colors: colors, isSubtitle: false)
                            .matchedGeometryEffect(id: "badge", in: badgeNS)
                            .transition(.opacity.combined(with: .scale(scale: 0.8)))
                            .accessibilityLabel("locked")
                    } else if let badge {
                        CollapsibleBadgeView(badge: badge, colors: colors, isSubtitle: false)
                            .matchedGeometryEffect(id: "badge", in: badgeNS)
                            .transition(.opacity.combined(with: .scale(scale: 0.8)))
                            .accessibilityLabel(badge.accessibilityLabel)
                    }
                }

                // Pill chevron / lock indicator (Story 4.3.3)
                ZStack {
                    Capsule()
                        .fill(isDark ? .white.opacity(0.06) : .black.opacity(0.04))
                        .frame(width: 28, height: 20)

                    if isLocked {
                        Image(systemName: "lock.fill")
                            .font(.system(size: 9, weight: .bold))
                            .foregroundStyle(lockedTierColor ?? .secondary)
                    } else {
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
            }

            // Badge at subtitle position (expanded) — morphs from trailing via matchedGeometryEffect
            // Locked sections stay collapsed, so this only shows for unlocked expanded sections
            if let badge, !isCollapsed, !isLocked {
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

/// Key for propagating press state from CollapsibleHeaderButtonStyle to parent views.
private struct HeaderPressedKey: PreferenceKey {
    static var defaultValue = false
    static func reduce(value: inout Bool, nextValue: () -> Bool) {
        value = value || nextValue()
    }
}

/// Provides press feedback for section headers — subtle scale with spring rebound, no opacity change.
/// Emits press state via `HeaderPressedKey` so the glass background can respond.
struct CollapsibleHeaderButtonStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .scaleEffect(configuration.isPressed ? 0.98 : 1.0)
            .animation(.spring(response: 0.25, dampingFraction: 0.7), value: configuration.isPressed)
            .preference(key: HeaderPressedKey.self, value: configuration.isPressed)
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

// MARK: - Staggered Content Reveal

/// Animates content in with a cascading stagger effect when appearing.
/// Each item fades, slides, and scales into place with a spring animation
/// delayed by `index * delay`. Collapse is handled by the parent — no reverse stagger.
///
/// Usage:  `myView.staggeredReveal(index: 0)`
struct StaggeredRevealModifier: ViewModifier {
    let index: Int
    let delay: TimeInterval
    let maxStagger: Int

    @State private var isRevealed = false
    @Environment(\.accessibilityReduceMotion) private var reduceMotion

    private var effectiveDelay: TimeInterval {
        Double(min(index, maxStagger - 1)) * delay
    }

    func body(content: Content) -> some View {
        content
            .opacity(isRevealed ? 1 : 0)
            .offset(y: isRevealed ? 0 : 8)
            .scaleEffect(isRevealed ? 1.0 : 0.97)
            .onAppear {
                guard !isRevealed else { return }
                if reduceMotion {
                    isRevealed = true
                } else {
                    withAnimation(
                        .spring(response: 0.35, dampingFraction: 0.85)
                        .delay(effectiveDelay)
                    ) {
                        isRevealed = true
                    }
                }
            }
    }
}

extension View {
    /// Applies a staggered reveal animation based on the item's index.
    /// Items animate in with opacity, vertical offset, and scale transitions.
    /// - Parameters:
    ///   - index: Position in the stagger sequence (0 = first, appears immediately).
    ///   - delay: Delay between each item (default 40ms).
    ///   - maxStagger: Maximum items that stagger independently; beyond this, items appear with the last group.
    func staggeredReveal(index: Int, delay: TimeInterval = 0.04, maxStagger: Int = 8) -> some View {
        modifier(StaggeredRevealModifier(index: index, delay: delay, maxStagger: maxStagger))
    }
}

// MARK: - Measured Content Reveal

/// PreferenceKey for propagating measured content height up the view hierarchy.
private struct CollapsibleContentHeightKey: PreferenceKey {
    static var defaultValue: CGFloat = 0
    static func reduce(value: inout CGFloat, nextValue: () -> CGFloat) {
        value = max(value, nextValue())
    }
}

/// Reveals content with smooth height animation — pre-measures natural height,
/// animates a clipping frame from 0 to the measured value, and pins content to top.
/// Removes content from hierarchy after collapse to reclaim layout resources.
private struct MeasuredContentReveal<C: View>: View {
    let isExpanded: Bool
    @ViewBuilder let content: () -> C

    @State private var measuredHeight: CGFloat = 0
    @State private var hasExpanded: Bool
    @State private var contentOpacity: Double

    init(isExpanded: Bool, @ViewBuilder content: @escaping () -> C) {
        self.isExpanded = isExpanded
        self.content = content
        // Initialize state to match initial expansion so already-expanded sections show content immediately
        self._hasExpanded = State(initialValue: isExpanded)
        self._contentOpacity = State(initialValue: isExpanded ? 1 : 0)
    }

    var body: some View {
        Group {
            if hasExpanded || isExpanded {
                content()
                    .fixedSize(horizontal: false, vertical: true)
                    .opacity(contentOpacity)
                    .background(
                        GeometryReader { geo in
                            Color.clear
                                .preference(key: CollapsibleContentHeightKey.self, value: geo.size.height)
                        }
                    )
                    .onPreferenceChange(CollapsibleContentHeightKey.self) { height in
                        guard height > 0 else { return }
                        if abs(height - measuredHeight) > 1 {
                            if measuredHeight == 0 && isExpanded {
                                // First measurement for initially-expanded section — set without animation
                                measuredHeight = height
                            } else {
                                withAnimation(.spring(response: 0.35, dampingFraction: 0.8)) {
                                    measuredHeight = height
                                }
                            }
                        }
                    }
            }
        }
        .frame(height: isExpanded ? (measuredHeight > 0 ? measuredHeight : nil) : 0, alignment: .top)
        .clipped()
        .allowsHitTesting(isExpanded)
        .onChange(of: isExpanded) { _, expanded in
            if expanded {
                hasExpanded = true
                // Content opacity lags height by 30ms to avoid empty-card flash
                withAnimation(
                    CollapsibleAnimationTokens.expandSpring.delay(CollapsibleAnimationTokens.revealDelay)
                ) {
                    contentOpacity = 1
                }
            } else {
                withAnimation(CollapsibleAnimationTokens.collapseSpring) {
                    contentOpacity = 0
                }
            }
        }
        .task(id: isExpanded) {
            guard !isExpanded, hasExpanded else { return }
            try? await Task.sleep(for: .milliseconds(450))
            guard !isExpanded else { return }
            hasExpanded = false
            measuredHeight = 0
        }
    }
}

// MARK: - Horizontal Line Shape

/// A simple horizontal line from leading to trailing edge, used for dashed accent dividers.
private struct HorizontalLine: Shape {
    func path(in rect: CGRect) -> Path {
        Path { p in
            p.move(to: CGPoint(x: rect.minX, y: rect.midY))
            p.addLine(to: CGPoint(x: rect.maxX, y: rect.midY))
        }
    }
}
