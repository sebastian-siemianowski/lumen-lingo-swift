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
