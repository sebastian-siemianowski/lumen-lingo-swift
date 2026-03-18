import SwiftUI

// MARK: - Color Extensions

extension Color {
    /// Initialize Color from hex string (e.g., "FF5733" or "#FF5733")
    init(hex: String) {
        let hex = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted)
        var int: UInt64 = 0
        Scanner(string: hex).scanHexInt64(&int)
        let a, r, g, b: UInt64
        switch hex.count {
        case 3: // RGB (12-bit)
            (a, r, g, b) = (255, (int >> 8) * 17, (int >> 4 & 0xF) * 17, (int & 0xF) * 17)
        case 6: // RGB (24-bit)
            (a, r, g, b) = (255, int >> 16, int >> 8 & 0xFF, int & 0xFF)
        case 8: // ARGB (32-bit)
            (a, r, g, b) = (int >> 24, int >> 16 & 0xFF, int >> 8 & 0xFF, int & 0xFF)
        default:
            (a, r, g, b) = (255, 0, 0, 0)
        }
        self.init(
            .sRGB,
            red: Double(r) / 255,
            green: Double(g) / 255,
            blue: Double(b) / 255,
            opacity: Double(a) / 255
        )
    }

    // Cosmic theme colors
    static let cosmicAbyss = Color(red: 6/255, green: 5/255, blue: 20/255)
    static let deepVoid = Color(red: 2/255, green: 1/255, blue: 6/255)
    static let cosmicPurple = Color(red: 88/255, green: 28/255, blue: 135/255)
    static let nebulaPurple = Color(red: 76/255, green: 29/255, blue: 149/255)
    static let deepSpace = Color(red: 30/255, green: 10/255, blue: 60/255)
    static let cosmicBloom = Color(red: 143/255, green: 110/255, blue: 255/255)
    static let cosmicAccent = Color(hex: "#667eea")

    // MARK: - Caribbean Light Mode Typography
    //
    // Premium text colours for the Caribbean sunset gradient (lavender → pink → orange).
    // Deep aubergine primaries, warm plum mid-tones, dusty orchid tertiaries.

    /// Deep aubergine — headings, titles, key values.
    static let caribbeanInk = Color(red: 45/255, green: 22/255, blue: 62/255)

    /// Warm plum — subtitles, descriptions, secondary labels.
    static let caribbeanPlum = Color(red: 100/255, green: 58/255, blue: 100/255)

    /// Dusty orchid — hints, timestamps, counters, tertiary text.
    static let caribbeanMist = Color(red: 140/255, green: 96/255, blue: 136/255)

    // MARK: - Caribbean Surface Tokens (Story 1.1.1)
    //
    // Semantic surface hierarchy — warm sand-white tones evoking a Dominican Republic morning.

    /// App-level page background — warm sand-white, beach cabana linen
    static let caribbeanCanvas = Color(red: 255/255, green: 252/255, blue: 245/255)

    /// Nav/tab bar, secondary backgrounds — warm cream, dry sand above the tide line
    static let caribbeanSurface = Color(red: 253/255, green: 249/255, blue: 240/255)

    /// Cards, panels floating above canvas — sea-glass clarity with warmth from canvas beneath
    static let caribbeanElevated = Color(red: 255/255, green: 255/255, blue: 255/255).opacity(0.80)

    /// Input fields, empty slots, wells — cool seafoam-sage, shallow tide pool
    static let caribbeanRecessed = Color(red: 232/255, green: 240/255, blue: 238/255)

    /// Modals, sheets, alerts over content — warm sand-white with high opacity
    static let caribbeanOverlay = Color(red: 255/255, green: 253/255, blue: 248/255).opacity(0.90)

    // MARK: - Caribbean Interactive Surface Tokens (Story 1.1.2)

    /// Button/card hover/pressed — light seafoam wash with subtle ocean coolness
    static let caribbeanHover = Color(red: 240/255, green: 248/255, blue: 246/255)

    /// Active/selected item — turquoise ocean tint marking "this is active"
    static let caribbeanSelected = Color(red: 14/255, green: 165/255, blue: 233/255).opacity(0.12)

    /// Disabled controls — muted tide-pool
    static let caribbeanDisabled = Color(red: 232/255, green: 240/255, blue: 238/255).opacity(0.55)

    // MARK: - Caribbean Island Color Tokens (Story 1.2.4)
    //
    // Tropical-specific colors — the five anchor colors of the Dominican Republic.

    /// Punta Cana turquoise water — primary accent color
    static let caribbeanOcean = Color(hex: "0EA5E9")

    /// Samaná Bay shallow water — secondary ocean accent
    static let caribbeanLagoon = Color(hex: "06B6D4")

    /// Coral reef water, deeper turquoise — teal accent
    static let caribbeanReef = Color(hex: "14B8A6")

    /// Coral reef, bougainvillea petals — warm accent
    static let caribbeanCoral = Color(hex: "FB7185")

    /// Bávaro beach sand, golden hour — warm highlights
    static let caribbeanSand = Color(hex: "FDE68A")

    /// Weathered beach driftwood — tertiary warm accent
    static let caribbeanDriftwood = Color(hex: "D4A373")

    /// El Yunque forest palm fronds — growth indicators
    static let caribbeanPalm = Color(hex: "10B981")

    /// Caribbean sunrise gold — award badges, premium glow
    static let caribbeanSunrise = Color(hex: "F59E0B")

    /// Shallow water near shore — light tint backgrounds
    static let caribbeanShallows = Color(hex: "CCFBF1")

    /// Sea foam on beach — ultra-light accent backgrounds
    static let caribbeanFoam = Color(hex: "E0F7FA")

    // MARK: - Caribbean Semantic Feedback Colors (Story 1.2.2)

    /// Correct answer, completion, positive — emerald-600
    static let caribbeanSuccess = Color(hex: "059669")

    /// Success background tint
    static let caribbeanSuccessSoft = Color(hex: "059669").opacity(0.12)

    /// Wrong answer, validation error — red-600
    static let caribbeanError = Color(hex: "DC2626")

    /// Error background tint
    static let caribbeanErrorSoft = Color(hex: "DC2626").opacity(0.10)

    /// Streak at risk, timer warning — amber-600
    static let caribbeanWarning = Color(hex: "D97706")

    /// Warning background tint
    static let caribbeanWarningSoft = Color(hex: "D97706").opacity(0.10)

    /// Tips, hints, informational — violet-600
    static let caribbeanInfo = Color(hex: "7C3AED")

    /// Info background tint
    static let caribbeanInfoSoft = Color(hex: "7C3AED").opacity(0.10)

    // MARK: - Caribbean Border & Separator Tokens (Story 1.2.3)

    /// Card borders, input field outlines — turquoise ocean tint
    static let caribbeanBorder = Color(hex: "0EA5E9").opacity(0.15)

    /// Dividers, subtle section separators — barely-there ocean line
    static let caribbeanBorderSubtle = Color(hex: "0EA5E9").opacity(0.07)

    /// Focused input, active card selection ring — visible turquoise
    static let caribbeanBorderFocus = Color(hex: "0EA5E9").opacity(0.45)

    // MARK: - Caribbean Icon Tokens (Story 1.5.1)

    /// Active/interactive icons — same as caribbeanInk
    static let caribbeanIconPrimary = Color(red: 45/255, green: 22/255, blue: 62/255)

    /// Decorative/informational icons — same as caribbeanPlum
    static let caribbeanIconSecondary = Color(red: 100/255, green: 58/255, blue: 100/255)

    /// Disabled/placeholder icons — same as caribbeanMist
    static let caribbeanIconTertiary = Color(red: 140/255, green: 96/255, blue: 136/255)
}

// MARK: - Caribbean Gradient Tokens (Story 1.2.1)

extension LinearGradient {
    /// Primary signature — turquoise → teal. The Caribbean ocean.
    static let caribbeanGradientOcean = LinearGradient(
        colors: [Color(hex: "0EA5E9"), Color(hex: "06B6D4"), Color(hex: "14B8A6")],
        startPoint: .leading,
        endPoint: .trailing
    )

    /// Hero sections, premium features — lavender → rose → amber sunset
    static let caribbeanGradientSunset = LinearGradient(
        colors: [Color(hex: "C494FC"), Color(hex: "F472B6"), Color(hex: "FB923C")],
        startPoint: .topLeading,
        endPoint: .bottomTrailing
    )

    /// Secondary CTA — coral reef warmth
    static let caribbeanGradientCoral = LinearGradient(
        colors: [Color(hex: "FB7185"), Color(hex: "F472B6")],
        startPoint: .leading,
        endPoint: .trailing
    )

    /// Achievement, celebration — warm sand-gold
    static let caribbeanGradientSand = LinearGradient(
        colors: [Color(hex: "FDE68A"), Color(hex: "F59E0B"), Color(hex: "FB923C")],
        startPoint: .top,
        endPoint: .bottom
    )

    /// Success states — tropical palm foliage
    static let caribbeanGradientPalm = LinearGradient(
        colors: [Color(hex: "34D399"), Color(hex: "10B981"), Color(hex: "059669")],
        startPoint: .top,
        endPoint: .bottom
    )

    /// Special feature gradients — ocean meets sky at dusk
    static let caribbeanGradientLagoon = LinearGradient(
        colors: [Color(hex: "06B6D4"), Color(hex: "0EA5E9"), Color(hex: "C494FC")],
        startPoint: .topLeading,
        endPoint: .bottomTrailing
    )

    /// Vibrant island energy — ocean to coral to sand
    static let caribbeanGradientTropical = LinearGradient(
        colors: [Color(hex: "0EA5E9"), Color(hex: "FB7185"), Color(hex: "FDE68A")],
        startPoint: .leading,
        endPoint: .trailing
    )
}

// MARK: - Caribbean Shadow System (Story 1.1.3)

enum CaribbeanShadowLevel {
    case subtle, medium, deep, glow
}

struct CaribbeanShadowModifier: ViewModifier {
    let level: CaribbeanShadowLevel
    @Environment(\.colorScheme) private var colorScheme

    func body(content: Content) -> some View {
        let isDark = colorScheme == .dark
        if isDark {
            content
                .shadow(color: .black.opacity(0.3), radius: shadowRadius, y: shadowY)
        } else {
            switch level {
            case .subtle:
                content
                    .shadow(color: Color(hex: "0EA5E9").opacity(0.05), radius: 4, y: 2)
                    .shadow(color: Color(hex: "F59E0B").opacity(0.03), radius: 4, y: 2)
            case .medium:
                content
                    .shadow(color: Color(hex: "0EA5E9").opacity(0.08), radius: 12, y: 4)
                    .shadow(color: Color(hex: "C494FC").opacity(0.04), radius: 12, y: 4)
            case .deep:
                content
                    .shadow(color: Color(hex: "0EA5E9").opacity(0.10), radius: 20, y: 6)
                    .shadow(color: Color(hex: "FB7185").opacity(0.04), radius: 8, y: 2)
            case .glow:
                content
                    .shadow(color: Color(hex: "06B6D4").opacity(0.10), radius: 16, y: 0)
            }
        }
    }

    private var shadowRadius: CGFloat {
        switch level {
        case .subtle: return 4
        case .medium: return 12
        case .deep: return 20
        case .glow: return 16
        }
    }

    private var shadowY: CGFloat {
        switch level {
        case .subtle: return 2
        case .medium: return 4
        case .deep: return 6
        case .glow: return 0
        }
    }
}

extension View {
    func caribbeanShadow(_ level: CaribbeanShadowLevel) -> some View {
        modifier(CaribbeanShadowModifier(level: level))
    }
}

// MARK: - Caribbean Adaptive Color Helpers (Story 1.4)

enum TextTier {
    case primary, secondary, tertiary
}

enum SurfaceLevel {
    case canvas, elevated, recessed
}

enum BorderLevel {
    case subtle, normal, focus
}

extension Color {
    static func adaptiveText(_ tier: TextTier, isDark: Bool) -> Color {
        switch tier {
        case .primary:   return isDark ? .white : .caribbeanInk
        case .secondary: return isDark ? .white.opacity(0.7) : .caribbeanPlum
        case .tertiary:  return isDark ? .white.opacity(0.5) : .caribbeanMist
        }
    }

    static func adaptiveSurface(_ level: SurfaceLevel, isDark: Bool) -> Color {
        switch level {
        case .canvas:   return isDark ? .cosmicAbyss : .caribbeanCanvas
        case .elevated: return isDark ? .white.opacity(0.06) : Color(red: 255/255, green: 255/255, blue: 255/255, opacity: 0.80)
        case .recessed: return isDark ? .white.opacity(0.03) : .caribbeanRecessed
        }
    }

    static func adaptiveBorder(_ level: BorderLevel, isDark: Bool) -> Color {
        switch level {
        case .subtle: return isDark ? .white.opacity(0.06) : Color(hex: "0EA5E9").opacity(0.07)
        case .normal: return isDark ? .white.opacity(0.15) : Color(hex: "0EA5E9").opacity(0.15)
        case .focus:  return isDark ? .white.opacity(0.30) : Color(hex: "0EA5E9").opacity(0.45)
        }
    }
}

// MARK: - Caribbean Layout Tokens (Story 2.5)

enum CaribbeanRadius {
    /// 8pt — Small badges, tags, status indicators
    static let small: CGFloat = 8
    /// 14pt — Answer options, tiles, small cards
    static let medium: CGFloat = 14
    /// 20pt — Content cards, glass panels, main containers
    static let large: CGFloat = 20
    /// 28pt — Hero cards, featured content, modals
    static let xLarge: CGFloat = 28
}

enum CaribbeanSpacing {
    /// 6pt — Within compact elements (badge content, pill text)
    static let tight: CGFloat = 6
    /// 12pt — Default content padding, between related items
    static let base: CGFloat = 12
    /// 18pt — Between card sections, paragraph spacing
    static let relaxed: CGFloat = 18
    /// 24pt — Card-to-card spacing, section separators
    static let generous: CGFloat = 24
}

// MARK: - View Extensions

extension View {
    /// Apply a glow effect
    func glow(color: Color, radius: CGFloat) -> some View {
        self.shadow(color: color, radius: radius / 2)
            .shadow(color: color, radius: radius)
    }

    /// Conditional modifier
    @ViewBuilder
    func `if`<Content: View>(_ condition: Bool, transform: (Self) -> Content) -> some View {
        if condition {
            transform(self)
        } else {
            self
        }
    }
}

// MARK: - Date Extensions

extension Date {
    var isToday: Bool {
        Calendar.current.isDateInToday(self)
    }

    var isYesterday: Bool {
        Calendar.current.isDateInYesterday(self)
    }

    var relativeDescription: String {
        if isToday { return "Today" }
        if isYesterday { return "Yesterday" }

        let formatter = RelativeDateTimeFormatter()
        formatter.unitsStyle = .short
        return formatter.localizedString(for: self, relativeTo: .now)
    }

    var shortTimeString: String {
        let formatter = DateFormatter()
        formatter.timeStyle = .short
        return formatter.string(from: self)
    }

    /// Human-readable "time ago" string (e.g. "2h ago", "3d ago")
    var timeAgoDisplay: String {
        let interval = Date().timeIntervalSince(self)
        let seconds = Int(interval)
        if seconds < 60 { return "just now" }
        let minutes = seconds / 60
        if minutes < 60 { return "\(minutes)m ago" }
        let hours = minutes / 60
        if hours < 24 { return "\(hours)h ago" }
        let days = hours / 24
        if days < 7 { return "\(days)d ago" }
        let weeks = days / 7
        if weeks < 4 { return "\(weeks)w ago" }
        return relativeDescription
    }
}

// MARK: - Double Extensions

extension Double {
    /// Format as percentage string
    var percentageString: String {
        String(format: "%.0f%%", self)
    }
}

// MARK: - Int Extensions

extension Int {
    /// Format with thousands separator
    var formattedString: String {
        let formatter = NumberFormatter()
        formatter.numberStyle = .decimal
        return formatter.string(from: NSNumber(value: self)) ?? "\(self)"
    }

    /// Format seconds into readable time
    var timeString: String {
        if self < 60 {
            return "\(self)s"
        } else if self < 3600 {
            let minutes = self / 60
            let seconds = self % 60
            return "\(minutes)m \(seconds)s"
        } else {
            let hours = self / 3600
            let minutes = (self % 3600) / 60
            return "\(hours)h \(minutes)m"
        }
    }
}

// MARK: - Array Extensions

extension Array {
    /// Safe subscript that returns nil for out-of-bounds indices
    subscript(safe index: Index) -> Element? {
        indices.contains(index) ? self[index] : nil
    }
}

// MARK: - Seeded Random

/// Deterministic pseudo-random number generator matching React's seededRandom.
func seededRandom(_ seed: Int, _ n: Int) -> Double {
    let x = sin(Double(seed) * 9999.0 + Double(n) * 7919.0) * 10000.0
    return x - floor(x)
}
