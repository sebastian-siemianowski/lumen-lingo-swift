import SwiftUI

// MARK: - Theme Category

/// Groups collapsible sections into visual families for category-based
/// accent patterns (Story 4.2) and scannable rhythm in dense lists.
enum ThemeCategory {
    case stats       // Core metrics: XP, Milestones, Streak
    case analytics   // Charts & reports: Game Performance, Daily XP, Weekly Trend, etc.
    case engagement  // Social & optional: Wisdom, Export
    case utility     // Settings & profile
    case danger      // Destructive: Reset Progress

    /// Dash pattern for the category accent line (Story 4.2.1).
    /// `nil` = solid line (stats). Dash arrays per `StrokeStyle`.
    var dashPattern: [CGFloat]? {
        switch self {
        case .stats:      return nil                // solid
        case .analytics:  return [4, 6]             // 2px-dash, 4px-gap (rendered at 0.5pt line = visual 2px)
        case .engagement: return [1.5, 4]           // 1px-dot, 3px-gap
        case .utility:    return nil                // solid (red-tinted via color)
        case .danger:     return nil                // solid (red-tinted via color)
        }
    }
}

// MARK: - Collapsible Section Theme

/// Centralized visual identity for every collapsible panel.
///
/// Replaces inline `icon:` / `colors:` at each call site with a single
/// `theme:` reference. Change a theme here, every instance updates.
struct CollapsibleSectionTheme {
    let icon: String
    let gradientColors: [Color]
    let category: ThemeCategory

    /// Primary accent derived from the leading gradient stop.
    var accentColor: Color { gradientColors.first ?? .purple }
}

// MARK: - Static Themes (15)

extension CollapsibleSectionTheme {

    // ── Stats ────────────────────────────────────────────────

    static let xpStats = CollapsibleSectionTheme(
        icon: "chart.bar.fill",
        gradientColors: [Color(hex: "#667eea"), Color(hex: "#764ba2")],
        category: .stats
    )

    static let milestones = CollapsibleSectionTheme(
        icon: "flag.checkered",
        gradientColors: [Color(hex: "#667eea"), Color(hex: "#06b6d4")],
        category: .stats
    )

    static let streak = CollapsibleSectionTheme(
        icon: "flame.fill",
        gradientColors: [.orange, Color(hex: "#ef4444")],
        category: .stats
    )

    // ── Analytics ────────────────────────────────────────────

    static let gamePerformance = CollapsibleSectionTheme(
        icon: "gamecontroller.fill",
        gradientColors: [Color(hex: "#a855f7"), Color(hex: "#ec4899")],
        category: .analytics
    )

    static let dailyXP = CollapsibleSectionTheme(
        icon: "chart.bar.xaxis",
        gradientColors: [Color(hex: "#f59e0b"), Color(hex: "#ef4444")],
        category: .analytics
    )

    static let weeklyTrend = CollapsibleSectionTheme(
        icon: "chart.line.uptrend.xyaxis",
        gradientColors: [Color(hex: "#10b981"), Color(hex: "#06b6d4")],
        category: .analytics
    )

    static let accuracyHeatmap = CollapsibleSectionTheme(
        icon: "tablecells.fill",
        gradientColors: [Color(hex: "#f97316"), Color(hex: "#f59e0b")],
        category: .analytics
    )

    static let monthlyReport = CollapsibleSectionTheme(
        icon: "doc.text.fill",
        gradientColors: [Color(hex: "#6366f1"), Color(hex: "#8b5cf6")],
        category: .analytics
    )

    static let milestonePredictions = CollapsibleSectionTheme(
        icon: "sparkle.magnifyingglass",
        gradientColors: [Color(hex: "#ec4899"), Color(hex: "#f43f5e")],
        category: .analytics
    )

    static let learningInsights = CollapsibleSectionTheme(
        icon: "lightbulb.fill",
        gradientColors: [Color(hex: "#f59e0b"), Color(hex: "#fbbf24")],
        category: .analytics
    )

    static let exportData = CollapsibleSectionTheme(
        icon: "square.and.arrow.up.fill",
        gradientColors: [Color(hex: "#14b8a6"), Color(hex: "#06b6d4")],
        category: .engagement
    )

    // ── Engagement ───────────────────────────────────────────

    static let wisdom = CollapsibleSectionTheme(
        icon: "sparkles",
        gradientColors: [Color(hex: "#c084fc"), Color(hex: "#f0abfc")],
        category: .engagement
    )

    // ── Utility ──────────────────────────────────────────────

    static let featureComparison = CollapsibleSectionTheme(
        icon: "list.bullet.rectangle.fill",
        gradientColors: [Color(hex: "#a855f7"), Color(hex: "#ec4899")],
        category: .utility
    )

    static let grammarTip = CollapsibleSectionTheme(
        icon: "lightbulb.max.fill",
        gradientColors: [Color(hex: "#3b82f6"), Color(hex: "#60a5fa")],
        category: .utility
    )

    static let masteredSummary = CollapsibleSectionTheme(
        icon: "trophy.fill",
        gradientColors: [Color(hex: "#10b981"), Color(hex: "#f59e0b")],
        category: .stats
    )

    // ── Danger ───────────────────────────────────────────────

    static let resetProgress = CollapsibleSectionTheme(
        icon: "arrow.triangle.2.circlepath",
        gradientColors: [.red.opacity(0.9), .red.opacity(0.6)],
        category: .danger
    )
}

// MARK: - Dynamic Theme Factories (3)

extension CollapsibleSectionTheme {

    /// Profile header — colors and icon adapt to the user's membership tier.
    static func profile(tierGradientColors: [Color]) -> CollapsibleSectionTheme {
        CollapsibleSectionTheme(
            icon: "person.circle.fill",
            gradientColors: tierGradientColors,
            category: .utility
        )
    }

    /// My Plan card — icon and colors from TierManager.
    static func myPlan(tierIcon: String, tierGradientColors: [Color]) -> CollapsibleSectionTheme {
        CollapsibleSectionTheme(
            icon: tierIcon,
            gradientColors: tierGradientColors,
            category: .utility
        )
    }

    /// Soundscape mini-player — colors from the active soundscape.
    static func soundscape(previewColors: [Color]) -> CollapsibleSectionTheme {
        CollapsibleSectionTheme(
            icon: "waveform.circle.fill",
            gradientColors: Array(previewColors.prefix(2)),
            category: .engagement
        )
    }
}
