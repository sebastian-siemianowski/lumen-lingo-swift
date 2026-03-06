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
    case italian
    case portuguese
    case polish
    case czech
    case catalan

    var id: String { rawValue }

    var displayName: String {
        switch self {
        case .english: return "English"
        case .spanish: return "Español"
        case .french: return "Français"
        case .german: return "Deutsch"
        case .italian: return "Italiano"
        case .portuguese: return "Português"
        case .polish: return "Polski"
        case .czech: return "Čeština"
        case .catalan: return "Català"
        }
    }

    var flag: String {
        switch self {
        case .english: return "🇬🇧"
        case .spanish: return "🇪🇸"
        case .french: return "🇫🇷"
        case .german: return "🇩🇪"
        case .italian: return "🇮🇹"
        case .portuguese: return "🇵🇹"
        case .polish: return "🇵🇱"
        case .czech: return "🇨🇿"
        case .catalan: return "🏴"
        }
    }

    var englishName: String {
        switch self {
        case .english: return "English"
        case .spanish: return "Spanish"
        case .french: return "French"
        case .german: return "German"
        case .italian: return "Italian"
        case .portuguese: return "Portuguese"
        case .polish: return "Polish"
        case .czech: return "Czech"
        case .catalan: return "Catalan"
        }
    }

    var isRTL: Bool {
        false
    }
}

// MARK: - Language Pair

struct LanguagePair: Equatable, Hashable, Codable {
    let source: SupportedLanguage
    let target: SupportedLanguage

    var key: String { "\(source.rawValue)_\(target.rawValue)" }

    var displayName: String {
        "\(source.flag) \(source.displayName) → \(target.flag) \(target.displayName)"
    }

    /// The 7 built-in (non-beta) language pairs
    static let builtIn: [LanguagePair] = [
        .init(source: .english, target: .spanish),
        .init(source: .spanish, target: .english),
        .init(source: .polish, target: .english),
        .init(source: .polish, target: .spanish),
        .init(source: .polish, target: .german),
        .init(source: .german, target: .english),
        .init(source: .french, target: .english),
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

enum BreathingOrbScheme: String, CaseIterable, Identifiable {
    case barcelonaNights = "barcelona_nights"
    case madridSunrise = "madrid_sunrise"
    case lisboaGoldenHour = "lisboa_golden_hour"
    case warsawTwilight = "warsaw_twilight"
    case prahaAmethyst = "praha_amethyst"
    case krakowLuminescence = "krakow_luminescence"

    var id: String { rawValue }

    var displayName: String {
        switch self {
        case .barcelonaNights: return "Barcelona Nights"
        case .madridSunrise: return "Madrid Sunrise"
        case .lisboaGoldenHour: return "Lisboa Golden Hour"
        case .warsawTwilight: return "Warsaw Twilight"
        case .prahaAmethyst: return "Praha Amethyst"
        case .krakowLuminescence: return "Krakow Luminescence"
        }
    }
}

// MARK: - Quantum Flow Scene

enum QuantumFlowScene: String, CaseIterable, Identifiable {
    case auroraBorealis = "aurora_borealis"
    case deepOcean = "deep_ocean"
    case cosmicDust = "cosmic_dust"
    case electricStorm = "electric_storm"
    case solarWind = "solar_wind"
    case nebulaCore = "nebula_core"

    var id: String { rawValue }

    var displayName: String {
        switch self {
        case .auroraBorealis: return "Aurora Borealis"
        case .deepOcean: return "Deep Ocean"
        case .cosmicDust: return "Cosmic Dust"
        case .electricStorm: return "Electric Storm"
        case .solarWind: return "Solar Wind"
        case .nebulaCore: return "Nebula Core"
        }
    }

    var colors: [Color] {
        switch self {
        case .auroraBorealis: return [Color(hex: "22C55E"), Color(hex: "06B6D4"), Color(hex: "8B5CF6"), Color(hex: "EC4899")]
        case .deepOcean: return [Color(hex: "0EA5E9"), Color(hex: "3B82F6"), Color(hex: "6366F1"), Color(hex: "8B5CF6")]
        case .cosmicDust: return [Color(hex: "F59E0B"), Color(hex: "EF4444"), Color(hex: "8B5CF6"), Color(hex: "EC4899")]
        case .electricStorm: return [Color(hex: "EC4899"), Color(hex: "8B5CF6"), Color(hex: "06B6D4"), Color(hex: "F59E0B")]
        case .solarWind: return [Color(hex: "F59E0B"), Color(hex: "EF4444"), Color(hex: "10B981"), Color(hex: "06B6D4")]
        case .nebulaCore: return [Color(hex: "A78BFA"), Color(hex: "60A5FA"), Color(hex: "34D399"), Color(hex: "F472B6")]
        }
    }
}

// MARK: - Nebula Preset

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
        case .spiralHaloGalaxy: return "Spiral Halo Galaxy"
        case .starburstRing: return "Starburst Ring"
        }
    }
}
