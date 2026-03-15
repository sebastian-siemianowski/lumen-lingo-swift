import Foundation
import SwiftUI

// MARK: - Game Type

enum GameType: String, Codable, CaseIterable, Identifiable {
    case flashCards = "flashcards"
    case grammar
    case wordBuilder = "word_builder"

    var id: String { rawValue }

    var displayName: String {
        switch self {
        case .flashCards: return "Flash Cards"
        case .grammar: return "Grammar"
        case .wordBuilder: return "Word Builder"
        }
    }

    var iconName: String {
        switch self {
        case .flashCards: return "rectangle.stack.fill"
        case .grammar: return "text.book.closed.fill"
        case .wordBuilder: return "character.textbox"
        }
    }

    var scorePerCorrect: Int {
        switch self {
        case .flashCards: return 10
        case .grammar: return 10
        case .wordBuilder: return 15
        }
    }

    var gradientColors: [Color] {
        switch self {
        case .flashCards: return [.purple, .indigo]
        case .grammar: return [.blue, .cyan]
        case .wordBuilder: return [.orange, .pink]
        }
    }
}

// MARK: - Difficulty

enum Difficulty: String, Codable, CaseIterable, Identifiable {
    case beginner
    case intermediate
    case advanced

    var id: String { rawValue }

    var displayName: String { rawValue.capitalized }

    var color: Color {
        switch self {
        case .beginner: return .green
        case .intermediate: return .orange
        case .advanced: return .red
        }
    }

    /// Richer, deeper colours that pop against the Caribbean gradient in light mode
    var lightModeColor: Color {
        switch self {
        case .beginner: return Color(hex: "#059669")     // emerald-600
        case .intermediate: return Color(hex: "#D97706") // amber-600
        case .advanced: return Color(hex: "#DC2626")     // red-600
        }
    }

    /// Premium gradient colors for stunning difficulty capsule pills
    var gradientColors: [Color] {
        switch self {
        case .beginner:
            return [Color(hex: "#10b981"), Color(hex: "#06b6d4")]      // emerald → cyan
        case .intermediate:
            return [Color(hex: "#f59e0b"), Color(hex: "#f43f5e")]      // amber → rose
        case .advanced:
            return [Color(hex: "#a855f7"), Color(hex: "#ec4899")]      // purple → pink
        }
    }

    /// Shadow accent color for the difficulty pill
    var pillShadowColor: Color {
        switch self {
        case .beginner:    return Color(hex: "#10b981")
        case .intermediate: return Color(hex: "#f59e0b")
        case .advanced:    return Color(hex: "#a855f7")
        }
    }
}

// MARK: - Performance Mood (Grammar game)

enum PerformanceMood: String {
    case warm
    case cool
    case neutral

    var gradientColors: [Color] {
        switch self {
        case .warm: return [Color(red: 1, green: 0.6, blue: 0.2), Color(red: 1, green: 0.3, blue: 0.3)]
        case .cool: return [Color(red: 0.3, green: 0.5, blue: 1), Color(red: 0.4, green: 0.8, blue: 1)]
        case .neutral: return [Color(red: 0.5, green: 0.4, blue: 0.9), Color(red: 0.6, green: 0.3, blue: 0.8)]
        }
    }
}

// MARK: - Supported Language

enum SupportedLanguage: String, Codable, CaseIterable, Identifiable {
    case english
    case spanish
    case french
    case german
    case polish
    case arabic
    case chinese
    case japanese
    case ukrainian

    var id: String { rawValue }

    var displayName: String {
        switch self {
        case .english: return "English"
        case .spanish: return "Español"
        case .french: return "Français"
        case .german: return "Deutsch"
        case .polish: return "Polski"
        case .arabic: return "العربية"
        case .chinese: return "中文"
        case .japanese: return "日本語"
        case .ukrainian: return "Українська"
        }
    }

    /// ISO 3166-1 alpha-2 country code used to generate flag emoji at runtime.
    /// Using country codes avoids source-file encoding issues with emoji literals.
    var countryCode: String {
        switch self {
        case .english: return "GB"
        case .spanish: return "ES"
        case .french: return "FR"
        case .german: return "DE"
        case .polish: return "PL"
        case .arabic: return "SA"
        case .chinese: return "CN"
        case .japanese: return "JP"
        case .ukrainian: return "UA"
        }
    }

    /// Flag emoji generated from the country code at runtime.
    var flag: String {
        countryCode
            .unicodeScalars
            .compactMap { Unicode.Scalar(127397 + $0.value) }
            .map { String($0) }
            .joined()
    }

    var englishName: String { name(in: .english) }

    /// Returns this language's name translated into the given language.
    /// e.g. `SupportedLanguage.spanish.name(in: .english)` → "Spanish"
    ///      `SupportedLanguage.spanish.name(in: .polish)` → "Hiszpański"
    func name(in language: SupportedLanguage) -> String {
        switch language {
        case .english:
            switch self {
            case .english:    return "English"
            case .spanish:    return "Spanish"
            case .french:     return "French"
            case .german:     return "German"
            case .polish:     return "Polish"
            case .arabic:     return "Arabic"
            case .chinese:    return "Chinese"
            case .japanese:   return "Japanese"
            case .ukrainian:  return "Ukrainian"
            }
        case .spanish:
            switch self {
            case .english:    return "Inglés"
            case .spanish:    return "Español"
            case .french:     return "Francés"
            case .german:     return "Alemán"
            case .polish:     return "Polaco"
            case .arabic:     return "Árabe"
            case .chinese:    return "Chino"
            case .japanese:   return "Japonés"
            case .ukrainian:  return "Ucraniano"
            }
        case .french:
            switch self {
            case .english:    return "Anglais"
            case .spanish:    return "Espagnol"
            case .french:     return "Français"
            case .german:     return "Allemand"
            case .polish:     return "Polonais"
            case .arabic:     return "Arabe"
            case .chinese:    return "Chinois"
            case .japanese:   return "Japonais"
            case .ukrainian:  return "Ukrainien"
            }
        case .german:
            switch self {
            case .english:    return "Englisch"
            case .spanish:    return "Spanisch"
            case .french:     return "Französisch"
            case .german:     return "Deutsch"
            case .polish:     return "Polnisch"
            case .arabic:     return "Arabisch"
            case .chinese:    return "Chinesisch"
            case .japanese:   return "Japanisch"
            case .ukrainian:  return "Ukrainisch"
            }
        case .polish:
            switch self {
            case .english:    return "Angielski"
            case .spanish:    return "Hiszpański"
            case .french:     return "Francuski"
            case .german:     return "Niemiecki"
            case .polish:     return "Polski"
            case .arabic:     return "Arabski"
            case .chinese:    return "Chiński"
            case .japanese:   return "Japoński"
            case .ukrainian:  return "Ukraiński"
            }
        case .arabic:
            switch self {
            case .english:    return "الإنجليزية"
            case .spanish:    return "الإسبانية"
            case .french:     return "الفرنسية"
            case .german:     return "الألمانية"
            case .polish:     return "البولندية"
            case .arabic:     return "العربية"
            case .chinese:    return "الصينية"
            case .japanese:   return "اليابانية"
            case .ukrainian:  return "الأوكرانية"
            }
        case .chinese:
            switch self {
            case .english:    return "英语"
            case .spanish:    return "西班牙语"
            case .french:     return "法语"
            case .german:     return "德语"
            case .polish:     return "波兰语"
            case .arabic:     return "阿拉伯语"
            case .chinese:    return "中文"
            case .japanese:   return "日语"
            case .ukrainian:  return "乌克兰语"
            }
        case .japanese:
            switch self {
            case .english:    return "英語"
            case .spanish:    return "スペイン語"
            case .french:     return "フランス語"
            case .german:     return "ドイツ語"
            case .polish:     return "ポーランド語"
            case .arabic:     return "アラビア語"
            case .chinese:    return "中国語"
            case .japanese:   return "日本語"
            case .ukrainian:  return "ウクライナ語"
            }
        case .ukrainian:
            switch self {
            case .english:    return "Англійська"
            case .spanish:    return "Іспанська"
            case .french:     return "Французька"
            case .german:     return "Німецька"
            case .polish:     return "Польська"
            case .arabic:     return "Арабська"
            case .chinese:    return "Китайська"
            case .japanese:   return "Японська"
            case .ukrainian:  return "Українська"
            }

        }
    }

    var isRTL: Bool {
        self == .arabic
    }
}

// MARK: - Language Pair

struct LanguagePair: Equatable, Hashable, Codable {
    let source: SupportedLanguage
    let target: SupportedLanguage

    var key: String { "\(source.rawValue)_\(target.rawValue)" }

    var displayName: String {
        "\(source.displayName) \u{2192} \(target.displayName)"
    }

    /// All possible combinations where content might exist
    static let allAvailable: [LanguagePair] = SupportedLanguage.allCases.flatMap { source in
        SupportedLanguage.allCases.compactMap { target in
            source != target ? LanguagePair(source: source, target: target) : nil
        }
    }

    /// All language pairs that have bundled content (flashcards, grammar, wordbuilder)
    static let withContent: [LanguagePair] = [
        .init(source: .arabic, target: .english),
        .init(source: .chinese, target: .english),
        .init(source: .english, target: .arabic),
        .init(source: .english, target: .chinese),
        .init(source: .english, target: .french),
        .init(source: .english, target: .german),
        .init(source: .english, target: .japanese),
        .init(source: .english, target: .polish),
        .init(source: .english, target: .spanish),
        .init(source: .french, target: .english),
        .init(source: .german, target: .english),
        .init(source: .german, target: .polish),
        .init(source: .german, target: .spanish),
        .init(source: .japanese, target: .english),
        .init(source: .polish, target: .arabic),
        .init(source: .polish, target: .chinese),
        .init(source: .polish, target: .english),
        .init(source: .polish, target: .french),
        .init(source: .polish, target: .german),
        .init(source: .polish, target: .japanese),
        .init(source: .polish, target: .spanish),
        .init(source: .polish, target: .ukrainian),
        .init(source: .spanish, target: .english),
        .init(source: .ukrainian, target: .english),
        .init(source: .ukrainian, target: .polish),
    ]

    /// Check if a pair has bundled content
    var hasContent: Bool {
        Self.withContent.contains(self)
    }
}

// MARK: - Membership Tier

enum MembershipTier: String, CaseIterable, Identifiable {
    case trial
    case free
    case pro
    case elite
    case royal

    var id: String { rawValue }

    /// Numeric rank for comparison: higher = more premium.
    var rank: Int {
        switch self {
        case .free:  return 0
        case .pro:   return 1
        case .elite: return 2
        case .royal: return 3
        case .trial: return 3  // Trial = Royal-level access
        }
    }

    var displayName: String {
        switch self {
        case .trial: return "Royal Trial"
        case .free:  return "Starter"
        case .pro:   return "Pro"
        case .elite: return "Elite"
        case .royal: return "Royal"
        }
    }

    var monthlyPrice: Decimal {
        switch self {
        case .trial:   return 0
        case .free:    return 0
        case .pro:     return 9.99
        case .elite:   return 19.99
        case .royal:   return 99.99
        }
    }

    var iconName: String {
        switch self {
        case .trial: return "gift.fill"
        case .free:  return "globe"
        case .pro:   return "bolt.fill"
        case .elite: return "sparkles"
        case .royal: return "crown.fill"
        }
    }

    var gradientColors: [Color] {
        switch self {
        case .trial: return [Color(hex: "#fbbf24"), Color(hex: "#a855f7"), Color(hex: "#ec4899")]
        case .free:  return [Color(hex: "#94a3b8"), Color(hex: "#64748b")]
        case .pro:   return [Color(hex: "#a855f7"), Color(hex: "#d946ef"), Color(hex: "#ec4899")]
        case .elite: return [Color(hex: "#7c3aed"), Color(hex: "#9333ea"), Color(hex: "#a21caf")]
        case .royal: return [Color(hex: "#fbbf24"), Color(hex: "#f97316"), Color(hex: "#f43f5e")]
        }
    }

    var accentColor: Color {
        switch self {
        case .trial: return .orange
        case .free:  return .gray
        case .pro:   return .purple
        case .elite: return .cyan
        case .royal: return .yellow
        }
    }

    /// Initialise from a tier ID string (e.g. from MembershipView or UserProfile).
    /// Falls back to `.free` for unknown values.
    init(tierId: String) {
        self = MembershipTier(rawValue: tierId) ?? .free
    }
}

// MARK: - Premium Feature

/// Features that can be gated by tier.
enum PremiumFeature: Equatable {
    case soundscapes
    case languagePairs
    case unlimitedPractice
    case breathingOrbs
    case quantumFlow
    case nebulaDrift
    case offlineMode
}

// MARK: - Breathing Orb Color Scheme

/// Matches React's 6 orb color schemes (rawValues = React localStorage IDs).
enum BreathingOrbScheme: String, CaseIterable, Identifiable {
    case barcelonaNights = "default"
    case shanghaiShimmeringNexus = "ocean"
    case tokyoSunset = "sunset"
    case newYorkMysticalGardens = "forest"
    case parisEclatNocturne = "aurora"
    case krakowLuminescence = "miami"

    var id: String { rawValue }

    var displayName: String {
        switch self {
        case .barcelonaNights: return "Barcelona Nights"
        case .shanghaiShimmeringNexus: return "Shanghai Shimmering Nexus"
        case .tokyoSunset: return "Tokyo Sunset"
        case .newYorkMysticalGardens: return "New York Mystical Gardens"
        case .parisEclatNocturne: return "Paris Éclat Nocturne"
        case .krakowLuminescence: return "Krakow Luminescence"
        }
    }

    var description: String {
        switch self {
        case .barcelonaNights:
            return "Twilight breathes Gaudí's forms, woven from mosaic mystery"
        case .shanghaiShimmeringNexus:
            return "Starlight docks at the port, reflecting cosmic wonders"
        case .tokyoSunset:
            return "Cherry-hued clouds dissolve as the city's neon pulse awakens"
        case .newYorkMysticalGardens:
            return "Skyline kisses emerald depths in unmatched urban allure"
        case .parisEclatNocturne:
            return "Brilliance descends nightly, dreams entwine with coded light"
        case .krakowLuminescence:
            return "Ancient stones glow sapphire, echoing royal legends"
        }
    }

    var iconName: String {
        switch self {
        case .barcelonaNights: return "moon.stars.fill"
        case .shanghaiShimmeringNexus: return "building.2.crop.circle.fill"
        case .tokyoSunset: return "sun.horizon.fill"
        case .newYorkMysticalGardens: return "leaf.circle.fill"
        case .parisEclatNocturne: return "staroflife.fill"
        case .krakowLuminescence: return "crown.fill"
        }
    }

    /// Dark mode orb colors (5 orbs per scheme)
    var darkColors: [[Color]] {
        switch self {
        case .barcelonaNights: return [
            [Color(red: 99/255, green: 102/255, blue: 241/255)],   // Indigo
            [Color(red: 236/255, green: 72/255, blue: 153/255)],   // Pink
            [Color(red: 251/255, green: 191/255, blue: 36/255)],   // Amber
            [Color(red: 20/255, green: 184/255, blue: 166/255)],   // Teal
            [Color(red: 168/255, green: 85/255, blue: 247/255)],   // Purple
        ]
        case .shanghaiShimmeringNexus: return [
            [Color(red: 14/255, green: 165/255, blue: 233/255)],   // Sky
            [Color(red: 6/255, green: 182/255, blue: 212/255)],    // Cyan
            [Color(red: 59/255, green: 130/255, blue: 246/255)],   // Blue
            [Color(red: 99/255, green: 102/255, blue: 241/255)],   // Indigo
            [Color(red: 56/255, green: 189/255, blue: 248/255)],   // Light blue
        ]
        case .tokyoSunset: return [
            [Color(red: 239/255, green: 68/255, blue: 68/255)],    // Red
            [Color(red: 245/255, green: 158/255, blue: 11/255)],   // Amber
            [Color(red: 236/255, green: 72/255, blue: 153/255)],   // Pink
            [Color(red: 249/255, green: 115/255, blue: 22/255)],   // Orange
            [Color(red: 220/255, green: 38/255, blue: 38/255)],    // Deep red
        ]
        case .newYorkMysticalGardens: return [
            [Color(red: 34/255, green: 197/255, blue: 94/255)],    // Green
            [Color(red: 16/255, green: 185/255, blue: 129/255)],   // Emerald
            [Color(red: 52/255, green: 211/255, blue: 153/255)],   // Mint
            [Color(red: 5/255, green: 150/255, blue: 105/255)],    // Green
            [Color(red: 74/255, green: 222/255, blue: 128/255)],   // Light green
        ]
        case .parisEclatNocturne: return [
            [Color(red: 236/255, green: 72/255, blue: 153/255)],   // Pink
            [Color(red: 168/255, green: 85/255, blue: 247/255)],   // Purple
            [Color(red: 139/255, green: 92/255, blue: 246/255)],   // Violet
            [Color(red: 244/255, green: 63/255, blue: 94/255)],    // Rose
            [Color(red: 192/255, green: 38/255, blue: 211/255)],   // Fuchsia
        ]
        case .krakowLuminescence: return [
            [Color(red: 6/255, green: 182/255, blue: 212/255)],    // Cyan
            [Color(red: 139/255, green: 92/255, blue: 246/255)],   // Violet
            [Color(red: 14/255, green: 165/255, blue: 233/255)],   // Sky
            [Color(red: 168/255, green: 85/255, blue: 247/255)],   // Purple
            [Color(red: 56/255, green: 189/255, blue: 248/255)],   // Light sky
        ]
        }
    }

    /// Light mode orb colors (5 orbs per scheme)
    var lightColors: [[Color]] {
        switch self {
        case .barcelonaNights: return [
            [Color(red: 129/255, green: 140/255, blue: 248/255)],
            [Color(red: 244/255, green: 114/255, blue: 182/255)],
            [Color(red: 252/255, green: 211/255, blue: 77/255)],
            [Color(red: 45/255, green: 212/255, blue: 191/255)],
            [Color(red: 192/255, green: 132/255, blue: 252/255)],
        ]
        case .shanghaiShimmeringNexus: return [
            [Color(red: 125/255, green: 211/255, blue: 252/255)],
            [Color(red: 103/255, green: 232/255, blue: 249/255)],
            [Color(red: 147/255, green: 197/255, blue: 253/255)],
            [Color(red: 165/255, green: 180/255, blue: 252/255)],
            [Color(red: 186/255, green: 230/255, blue: 253/255)],
        ]
        case .tokyoSunset: return [
            [Color(red: 252/255, green: 165/255, blue: 165/255)],
            [Color(red: 253/255, green: 230/255, blue: 138/255)],
            [Color(red: 244/255, green: 114/255, blue: 182/255)],
            [Color(red: 253/255, green: 186/255, blue: 116/255)],
            [Color(red: 252/255, green: 165/255, blue: 165/255)],
        ]
        case .newYorkMysticalGardens: return [
            [Color(red: 134/255, green: 239/255, blue: 172/255)],
            [Color(red: 110/255, green: 231/255, blue: 183/255)],
            [Color(red: 167/255, green: 243/255, blue: 208/255)],
            [Color(red: 52/255, green: 211/255, blue: 153/255)],
            [Color(red: 134/255, green: 239/255, blue: 172/255)],
        ]
        case .parisEclatNocturne: return [
            [Color(red: 244/255, green: 114/255, blue: 182/255)],
            [Color(red: 192/255, green: 132/255, blue: 252/255)],
            [Color(red: 167/255, green: 139/255, blue: 250/255)],
            [Color(red: 251/255, green: 113/255, blue: 133/255)],
            [Color(red: 232/255, green: 121/255, blue: 249/255)],
        ]
        case .krakowLuminescence: return [
            [Color(red: 103/255, green: 232/255, blue: 249/255)],
            [Color(red: 196/255, green: 181/255, blue: 253/255)],
            [Color(red: 125/255, green: 211/255, blue: 252/255)],
            [Color(red: 216/255, green: 180/255, blue: 254/255)],
            [Color(red: 186/255, green: 230/255, blue: 253/255)],
        ]
        }
    }

    /// 3-color preview gradient for scheme cards
    var previewColors: [Color] {
        let cols = darkColors
        guard cols.count >= 3 else { return [.purple, .indigo, .cyan] }
        return [cols[0][0], cols[1][0], cols[2][0]]
    }
}

// MARK: - Quantum Flow Scene

/// Matches React's 6 quantum flow scenes (rawValues = React localStorage IDs).
enum QuantumFlowScene: String, CaseIterable, Identifiable {
    case dubaiCelestialMirage = "dubai"
    case kyotoSacredTwilight = "kyoto"
    case buenosAiresTangoFlame = "buenos_aires"
    case hongKongHarbourDreams = "hong_kong"
    case marrakechSpiceReverie = "marrakech"
    case viennaImperialWaltz = "vienna"

    var id: String { rawValue }

    var displayName: String {
        switch self {
        case .dubaiCelestialMirage: return "Dubai Celestial Mirage"
        case .kyotoSacredTwilight: return "Kyoto Sacred Twilight"
        case .buenosAiresTangoFlame: return "Buenos Aires Tango Flame"
        case .hongKongHarbourDreams: return "Hong Kong Harbour Dreams"
        case .marrakechSpiceReverie: return "Marrakech Spice Reverie"
        case .viennaImperialWaltz: return "Vienna Imperial Waltz"
        }
    }

    var description: String {
        switch self {
        case .dubaiCelestialMirage:
            return "Desert stars kiss glass towers, where golden sands meet infinite azure dreams"
        case .kyotoSacredTwilight:
            return "Temple bells echo through silk mist, bamboo forests breathe ancient wisdom's gentle kiss"
        case .buenosAiresTangoFlame:
            return "Passion ignites cobblestone nights, souls entwine where music paints eternal light"
        case .hongKongHarbourDreams:
            return "Victoria Peak kisses crimson dawn, where East meets West in a symphony reborn"
        case .marrakechSpiceReverie:
            return "Lanterns float through jasmine air, silk bazaars shimmer with treasures beyond compare"
        case .viennaImperialWaltz:
            return "Symphony cascades through palace halls, where elegance and wonder eternally enthralls"
        }
    }

    var iconName: String {
        switch self {
        case .dubaiCelestialMirage: return "sun.max.fill"
        case .kyotoSacredTwilight: return "bird.fill"
        case .buenosAiresTangoFlame: return "flame.fill"
        case .hongKongHarbourDreams: return "ferry.fill"
        case .marrakechSpiceReverie: return "wind"
        case .viennaImperialWaltz: return "music.note"
        }
    }

    /// Dark mode curtain colors (4 colors per scene)
    var colors: [Color] {
        switch self {
        case .dubaiCelestialMirage: return [Color(hex: "F59E0B"), Color(hex: "06B6D4"), Color(hex: "8B5CF6"), Color(hex: "EC4899")]
        case .kyotoSacredTwilight: return [Color(hex: "8B5CF6"), Color(hex: "EC4899"), Color(hex: "14B8A6"), Color(hex: "C084FC")]
        case .buenosAiresTangoFlame: return [Color(hex: "EC4899"), Color(hex: "F59E0B"), Color(hex: "8B5CF6"), Color(hex: "FB923C")]
        case .hongKongHarbourDreams: return [Color(hex: "EC4899"), Color(hex: "06B6D4"), Color(hex: "8B5CF6"), Color(hex: "14B8A6")]
        case .marrakechSpiceReverie: return [Color(hex: "FB923C"), Color(hex: "EC4899"), Color(hex: "8B5CF6"), Color(hex: "F59E0B")]
        case .viennaImperialWaltz: return [Color(hex: "C026D3"), Color(hex: "8B5CF6"), Color(hex: "60A5FA"), Color(hex: "EC4899")]
        }
    }

    /// Light mode curtain colors
    var lightColors: [Color] {
        switch self {
        case .dubaiCelestialMirage: return [Color(hex: "8BC34A"), Color(hex: "26C6DA"), Color(hex: "42A5F5"), Color(hex: "7E57C2")]
        case .kyotoSacredTwilight: return [Color(hex: "9462E7"), Color(hex: "C75C9C"), Color(hex: "B04DAC"), Color(hex: "4CA79B")]
        case .buenosAiresTangoFlame: return [Color(hex: "FF8FA3"), Color(hex: "FFB088"), Color(hex: "FF9F6E"), Color(hex: "D291BC")]
        case .hongKongHarbourDreams: return [Color(hex: "D946A0"), Color(hex: "B84FA8"), Color(hex: "3B9AE0"), Color(hex: "2AA89B")]
        case .marrakechSpiceReverie: return [Color(hex: "FFB088"), Color(hex: "FF8FA3"), Color(hex: "C291D4"), Color(hex: "D291BC")]
        case .viennaImperialWaltz: return [Color(hex: "A044D9"), Color(hex: "8E4EE2"), Color(hex: "815DEB"), Color(hex: "7770EE")]
        }
    }

    /// Per-scheme blend factors matching React's SCHEMES
    var blendFactor: (dark: Double, light: Double) {
        switch self {
        case .dubaiCelestialMirage:      return (0.85, 0.78)
        case .kyotoSacredTwilight:       return (0.96, 0.94)
        case .buenosAiresTangoFlame:     return (0.82, 0.76)
        case .hongKongHarbourDreams:     return (0.86, 0.79)
        case .marrakechSpiceReverie:     return (0.84, 0.77)
        case .viennaImperialWaltz:       return (0.87, 0.81)
        }
    }

    /// 3-color preview gradient for scheme cards
    var previewColors: [Color] {
        return [colors[0], colors[1], colors[2]]
    }
}

// MARK: - Nebula Preset

/// Matches React's 6 nebula/galaxy presets (rawValues = React localStorage IDs).
enum NebulaPreset: String, CaseIterable, Identifiable {
    case lagoonNebula = "lagoon_nebula"
    case celestialLagoon = "celestial_lagoon"
    case edgeOfAndromeda = "edge_of_andromeda"
    case solarAurora = "solar_aurora"
    case spiralHaloGalaxy = "spiral_halo"
    case starburstRing = "starburst_ring"

    var id: String { rawValue }

    var displayName: String {
        switch self {
        case .lagoonNebula: return "Lagoon Nebula"
        case .celestialLagoon: return "Celestial Lagoon"
        case .edgeOfAndromeda: return "Edge of Andromeda"
        case .solarAurora: return "Solar Aurora"
        case .spiralHaloGalaxy: return "Spiral Halo"
        case .starburstRing: return "Starburst Ring"
        }
    }

    func localizedDescription(_ L: AppStrings) -> String {
        switch self {
        case .lagoonNebula: return L.nebulaDescLagoon
        case .celestialLagoon: return L.nebulaDescCelestial
        case .edgeOfAndromeda: return L.nebulaDescAndromeda
        case .solarAurora: return L.nebulaDescSolarAurora
        case .spiralHaloGalaxy: return L.nebulaDescSpiralHalo
        case .starburstRing: return L.nebulaDescStarburst
        }
    }
    var iconName: String {
        switch self {
        case .lagoonNebula: return "cloud.fog.fill"
        case .celestialLagoon: return "drop.triangle.fill"
        case .solarAurora: return "sun.and.horizon.fill"
        case .spiralHaloGalaxy: return "hurricane"
        case .edgeOfAndromeda: return "star.fill"
        case .starburstRing: return "rays"
        }
    }

    /// 3-color preview gradient for preset cards
    var previewColors: [Color] {
        switch self {
        case .lagoonNebula: return [Color(hex: "EC4899"), Color(hex: "8B5CF6"), Color(hex: "6366F1")]
        case .celestialLagoon: return [Color(hex: "06B6D4"), Color(hex: "14B8A6"), Color(hex: "8B5CF6")]
        case .solarAurora: return [Color(hex: "F59E0B"), Color(hex: "EC4899"), Color(hex: "8B5CF6")]
        case .spiralHaloGalaxy: return [Color(hex: "6366F1"), Color(hex: "8B5CF6"), Color(hex: "C084FC")]
        case .edgeOfAndromeda: return [Color(hex: "F59E0B"), Color(hex: "A855F7"), Color(hex: "6366F1")]
        case .starburstRing: return [Color(hex: "5A2EFF").opacity(1), Color(hex: "FF3BEA"), Color(hex: "5CC9FF")]
        }
    }
}

// MARK: - Soundscape Categories & Presets

enum SoundscapeCategory: String, CaseIterable, Identifiable {
    case cozy
    case travel
    case nature
    case atmospheric

    var id: String { rawValue }

    var icon: String {
        switch self {
        case .cozy: return "cup.and.saucer.fill"
        case .nature: return "leaf.fill"
        case .atmospheric: return "sparkles"
        case .travel: return "globe.americas.fill"
        }
    }

    var displayName: String {
        switch self {
        case .cozy: return "Cozy"
        case .nature: return "Nature"
        case .atmospheric: return "Atmospheric"
        case .travel: return "Travel"
        }
    }

    var soundscapes: [Soundscape] {
        Soundscape.allCases.filter { $0.category == self }
    }
}

enum Soundscape: String, CaseIterable, Identifiable {
    case parisCafe
    case midnightJazzPiano
    case rainyWindow
    case japaneseBambooForest
    case amazonRainforest
    case mountainCampfire
    case observatoryNight
    case desertNightSky
    case deepSpaceDrift
    case dominicanBeach
    case veniceCanalMorning
    case tokyoNightStreet

    var id: String { rawValue }

    /// Deterministic unlock priority. Lower = unlocked first.
    /// Pro (1 soundscape) gets sortOrder 0; Elite (8) gets 0–7; Royal/Trial get all 12.
    var sortOrder: Int {
        switch self {
        case .parisCafe:             return 0   // Pro's single soundscape
        case .rainyWindow:           return 1
        case .dominicanBeach:        return 2
        case .mountainCampfire:      return 3
        case .midnightJazzPiano:     return 4
        case .japaneseBambooForest:  return 5
        case .observatoryNight:      return 6
        case .tokyoNightStreet:      return 7   // Elite cap
        case .amazonRainforest:      return 8
        case .desertNightSky:        return 9
        case .veniceCanalMorning:    return 10
        case .deepSpaceDrift:        return 11
        }
    }

    var category: SoundscapeCategory {
        switch self {
        case .parisCafe, .midnightJazzPiano, .rainyWindow: return .cozy
        case .japaneseBambooForest, .amazonRainforest, .mountainCampfire: return .nature
        case .observatoryNight, .desertNightSky, .deepSpaceDrift: return .atmospheric
        case .dominicanBeach, .veniceCanalMorning, .tokyoNightStreet: return .travel
        }
    }

    var displayName: String {
        switch self {
        case .parisCafe: return "Paris Café"
        case .midnightJazzPiano: return "Midnight Jazz Piano"
        case .rainyWindow: return "Rainy Window"
        case .japaneseBambooForest: return "Japanese Bamboo Forest"
        case .amazonRainforest: return "Amazon Rainforest"
        case .mountainCampfire: return "Mountain Campfire"
        case .observatoryNight: return "Observatory Night"
        case .desertNightSky: return "Desert Night Sky"
        case .deepSpaceDrift: return "Deep Space Drift"
        case .dominicanBeach: return "Dominican Beach"
        case .veniceCanalMorning: return "Venice Canal Morning"
        case .tokyoNightStreet: return "Tokyo Night Street"
        }
    }

    var subtitle: String {
        switch self {
        case .parisCafe: return "Warm chatter & clinking cups"
        case .midnightJazzPiano: return "Soft keys in a smoky lounge"
        case .rainyWindow: return "Droplets on glass, distant thunder"
        case .japaneseBambooForest: return "Wind chimes & rustling leaves"
        case .amazonRainforest: return "Dense canopy, exotic birds"
        case .mountainCampfire: return "Crackling flames under stars"
        case .observatoryNight: return "Telescopes hum, cosmic silence"
        case .desertNightSky: return "Infinite stillness, warm breeze"
        case .deepSpaceDrift: return "Weightless among the stars"
        case .dominicanBeach: return "Gentle waves & tropical breeze"
        case .veniceCanalMorning: return "Water lapping, church bells"
        case .tokyoNightStreet: return "Neon glow & distant chatter"
        }
    }

    var icon: String {
        switch self {
        case .parisCafe: return "cup.and.saucer.fill"
        case .midnightJazzPiano: return "pianokeys"
        case .rainyWindow: return "cloud.rain.fill"
        case .japaneseBambooForest: return "leaf.fill"
        case .amazonRainforest: return "tree.fill"
        case .mountainCampfire: return "flame.fill"
        case .observatoryNight: return "moon.stars.fill"
        case .desertNightSky: return "sparkles"
        case .deepSpaceDrift: return "circle.dotted"
        case .dominicanBeach: return "water.waves"
        case .veniceCanalMorning: return "ferry.fill"
        case .tokyoNightStreet: return "building.2.fill"
        }
    }

    /// Audio file variants bundled in the Soundscapes folder.
    struct Variant: Identifiable, Equatable {
        let id: Int          // 0-based index
        let fileName: String // e.g. "Paris-Café-1" (no extension)
        let label: String    // e.g. "Variant 1"
    }

    var variants: [Variant] {
        switch self {
        case .parisCafe:             return [Variant(id: 0, fileName: "Paris-Café-1", label: "Parisian Dawn"),
                                              Variant(id: 1, fileName: "Paris-Café-2", label: "Evening Terrace")]
        case .observatoryNight:      return [Variant(id: 0, fileName: "Observatory-Night-1", label: "Stargazer"),
                                              Variant(id: 1, fileName: "Observatory-Night-2", label: "Deep Sky")]
        case .dominicanBeach:        return [Variant(id: 0, fileName: "Dominican-Beach-1", label: "Shoreline"),
                                              Variant(id: 1, fileName: "Dominican-Beach-2", label: "Sunset Cove")]
        case .midnightJazzPiano:     return [Variant(id: 0, fileName: "Midnight-Jazz-Piano", label: "Late Set")]
        case .rainyWindow:           return [Variant(id: 0, fileName: "Rainy-Window", label: "Gentle Rain")]
        case .japaneseBambooForest:  return [Variant(id: 0, fileName: "Japanese-Bamboo-Forest", label: "Zen Garden")]
        case .amazonRainforest:      return [Variant(id: 0, fileName: "Amazon-Rainforest", label: "Canopy")]
        case .mountainCampfire:      return [Variant(id: 0, fileName: "Mountain-Campfire", label: "Fireside")]
        case .desertNightSky:        return [Variant(id: 0, fileName: "Desert-Night-Sky", label: "Starlit Sand")]
        case .deepSpaceDrift:        return [Variant(id: 0, fileName: "Deep-Space-Drift", label: "Cosmic Float")]
        case .veniceCanalMorning:    return [Variant(id: 0, fileName: "Venice-Canal-Morning", label: "Canal Bells")]
        case .tokyoNightStreet:      return [Variant(id: 0, fileName: "Tokyo-Night-Street", label: "Neon Walk")]
        }
    }

    var hasMultipleVariants: Bool { variants.count > 1 }

    /// The minimum tier required to unlock this soundscape.
    var minimumTier: MembershipTier {
        switch sortOrder {
        case 0:      return .pro    // Pro gets 1
        case 1...7:  return .elite  // Elite gets 8
        default:     return .royal  // Royal gets all 12
        }
    }

    var previewColors: [Color] {
        switch self {
        case .parisCafe: return [Color(hex: "8B6914"), Color(hex: "C4956A"), Color(hex: "5C3A1E")]
        case .midnightJazzPiano: return [Color(hex: "1A1A2E"), Color(hex: "4A3B6B"), Color(hex: "16213E")]
        case .rainyWindow: return [Color(hex: "4A6FA5"), Color(hex: "7B9BBF"), Color(hex: "2C3E50")]
        case .japaneseBambooForest: return [Color(hex: "2D6A4F"), Color(hex: "74C69D"), Color(hex: "1B4332")]
        case .amazonRainforest: return [Color(hex: "1B4332"), Color(hex: "52B788"), Color(hex: "081C15")]
        case .mountainCampfire: return [Color(hex: "C1440E"), Color(hex: "E85D04"), Color(hex: "370617")]
        case .observatoryNight: return [Color(hex: "0B1354"), Color(hex: "4361EE"), Color(hex: "0A0E27")]
        case .desertNightSky: return [Color(hex: "1B1464"), Color(hex: "6A5ACD"), Color(hex: "2E1A47")]
        case .deepSpaceDrift: return [Color(hex: "0D0221"), Color(hex: "3C1361"), Color(hex: "150050")]
        case .dominicanBeach: return [Color(hex: "0077B6"), Color(hex: "00B4D8"), Color(hex: "023E8A")]
        case .veniceCanalMorning: return [Color(hex: "E6B8A2"), Color(hex: "DEAB90"), Color(hex: "8B6F47")]
        case .tokyoNightStreet: return [Color(hex: "FF006E"), Color(hex: "8338EC"), Color(hex: "3A0CA3")]
        }
    }

    /// Ambient drone config — 3-frequency synthesis with per-soundscape character
    struct AmbientConfig {
        let freq1: Float, amp1: Float
        let freq2: Float, amp2: Float
        let freq3: Float, amp3: Float
        let breathRate: Float   // cycle period in seconds
        let harmRate: Float     // harmonic LFO period
    }

    var ambientConfig: AmbientConfig {
        switch self {
        case .parisCafe:
            return AmbientConfig(freq1: 131, amp1: 0.30, freq2: 165, amp2: 0.18, freq3: 196, amp3: 0.12, breathRate: 5.0, harmRate: 10.0)
        case .midnightJazzPiano:
            return AmbientConfig(freq1: 110, amp1: 0.32, freq2: 147, amp2: 0.20, freq3: 220, amp3: 0.10, breathRate: 8.0, harmRate: 16.0)
        case .rainyWindow:
            return AmbientConfig(freq1: 131, amp1: 0.28, freq2: 147, amp2: 0.22, freq3: 165, amp3: 0.16, breathRate: 4.0, harmRate: 8.0)
        case .japaneseBambooForest:
            return AmbientConfig(freq1: 147, amp1: 0.25, freq2: 220, amp2: 0.15, freq3: 294, amp3: 0.08, breathRate: 7.0, harmRate: 14.0)
        case .amazonRainforest:
            return AmbientConfig(freq1: 98, amp1: 0.35, freq2: 131, amp2: 0.22, freq3: 165, amp3: 0.14, breathRate: 3.0, harmRate: 6.0)
        case .mountainCampfire:
            return AmbientConfig(freq1: 110, amp1: 0.30, freq2: 165, amp2: 0.18, freq3: 220, amp3: 0.10, breathRate: 6.0, harmRate: 15.0)
        case .observatoryNight:
            return AmbientConfig(freq1: 196, amp1: 0.22, freq2: 294, amp2: 0.12, freq3: 392, amp3: 0.06, breathRate: 9.0, harmRate: 20.0)
        case .desertNightSky:
            return AmbientConfig(freq1: 110, amp1: 0.25, freq2: 165, amp2: 0.12, freq3: 262, amp3: 0.06, breathRate: 10.0, harmRate: 22.0)
        case .deepSpaceDrift:
            return AmbientConfig(freq1: 98, amp1: 0.30, freq2: 131, amp2: 0.15, freq3: 196, amp3: 0.08, breathRate: 12.0, harmRate: 25.0)
        case .dominicanBeach:
            return AmbientConfig(freq1: 131, amp1: 0.30, freq2: 165, amp2: 0.20, freq3: 220, amp3: 0.12, breathRate: 5.0, harmRate: 10.0)
        case .veniceCanalMorning:
            return AmbientConfig(freq1: 165, amp1: 0.28, freq2: 220, amp2: 0.18, freq3: 262, amp3: 0.10, breathRate: 6.0, harmRate: 12.0)
        case .tokyoNightStreet:
            return AmbientConfig(freq1: 131, amp1: 0.28, freq2: 196, amp2: 0.20, freq3: 262, amp3: 0.14, breathRate: 4.0, harmRate: 7.0)
        }
    }
}
