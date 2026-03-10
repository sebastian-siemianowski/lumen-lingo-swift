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

    /// Built-in (non-beta) language pairs — the core supported pairs
    static let builtIn: [LanguagePair] = [
        .init(source: .english, target: .spanish),
        .init(source: .spanish, target: .english),
        .init(source: .polish, target: .english),
        .init(source: .polish, target: .spanish),
        .init(source: .polish, target: .german),
        .init(source: .german, target: .english),
        .init(source: .german, target: .spanish),
    ]

    /// Check if a pair is built-in by key
    static func isBuiltInKey(_ key: String) -> Bool {
        builtIn.contains { $0.key == key }
    }

    /// All possible combinations where content might exist
    static let allAvailable: [LanguagePair] = SupportedLanguage.allCases.flatMap { source in
        SupportedLanguage.allCases.compactMap { target in
            source != target ? LanguagePair(source: source, target: target) : nil
        }
    }

    var isBuiltIn: Bool {
        Self.builtIn.contains(self)
    }
}

// MARK: - Membership Tier

enum MembershipTier: String, CaseIterable, Identifiable {
    case starter
    case pro
    case elite
    case royal

    var id: String { rawValue }

    var displayName: String { rawValue.capitalized }

    var monthlyPrice: Decimal {
        switch self {
        case .starter: return 0
        case .pro: return 9.99
        case .elite: return 19.99
        case .royal: return 99.99
        }
    }

    var iconName: String {
        switch self {
        case .starter: return "star"
        case .pro: return "star.fill"
        case .elite: return "crown"
        case .royal: return "crown.fill"
        }
    }

    var accentColor: Color {
        switch self {
        case .starter: return .gray
        case .pro: return .blue
        case .elite: return .purple
        case .royal: return .yellow
        }
    }
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

    var description: String {
        switch self {
        case .lagoonNebula:
            return "Ethereal cosmic clouds where newborn stars ignite"
        case .celestialLagoon:
            return "Infinite turquoise ocean of luminous serenity"
        case .edgeOfAndromeda:
            return "A trillion suns suspended in eternal dance"
        case .solarAurora:
            return "Golden ribbons dancing across the cosmic void"
        case .spiralHaloGalaxy:
            return "A hundred billion stars in cosmic harmony"
        case .starburstRing:
            return "Brilliant ring of star formation in radiance"
        }
    }

    var iconName: String {
        switch self {
        case .lagoonNebula: return "cloud.fog.fill"
        case .celestialLagoon: return "water.waves"
        case .solarAurora: return "cloud.fog.fill"
        case .spiralHaloGalaxy: return "circle.dashed"
        case .edgeOfAndromeda: return "star.fill"
        case .starburstRing: return "circle.dashed"
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
