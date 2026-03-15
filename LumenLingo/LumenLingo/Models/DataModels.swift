import Foundation
import SwiftData

// MARK: - User Profile (SwiftData)

@Model
final class UserProfile {
    var totalXP: Int
    var dailyStreak: Int
    var totalActiveDays: Int
    var lastActivityDate: Date?
    var favoriteGame: String?
    var difficulty: String
    var soundEnabled: Bool
    var darkMode: Bool

    // Appearance preferences
    var breathingOrbsEnabled: Bool
    var breathingOrbScheme: String
    var quantumFlowEnabled: Bool
    var quantumFlowScene: String
    var nebulaDriftEnabled: Bool
    var nebulaPreset: String
    var animationIntensity: Double
    var animationSpeed: Double

    // Per-system intensity/speed (React parity)
    var orbIntensity: Double
    var orbSpeed: Double
    var orbRaveMode: Bool
    var quantumIntensity: Double
    var quantumSpeed: Double
    var quantumRaveMode: Bool = false
    var nebulaDriftIntensity: Double
    var nebulaDriftSpeed: Double

    // Per-category sound toggles (React parity)
    var gamesSoundsEnabled: Bool = true
    var flashcardsSoundsEnabled: Bool = true
    var grammarSoundsEnabled: Bool = true
    var wordBuilderSoundsEnabled: Bool = true
    var uiSoundsEnabled: Bool = true
    var achievementSoundsEnabled: Bool = true
    var ambientSoundsEnabled: Bool = true
    var selectedSoundscape: String = "parisCafe"
    var soundscapeVariantIndex: Int = 0
    var hapticsEnabled: Bool = true
    var adaptiveAudioEnabled: Bool = true
    var gameSoundsVolume: Float = 1.0
    var uiSoundsVolume: Float = 1.0
    var achievementSoundsVolume: Float = 1.0
    var ambientVolume: Float = 0.3

    /// Selected membership tier (persisted across launches). Defaults to "free".
    var selectedTierId: String = "free"

    /// Whether offline mode is enabled (Pro+ feature). Free tier always false.
    var offlineModeEnabled: Bool = false

    /// Level scales quadratically: cumulative XP for level L = 50·L·(L−1).
    /// Each level costs 100·L XP, so reaching high levels takes real dedication.
    var currentLevel: Int {
        max(1, Int((1.0 + (1.0 + 0.08 * Double(totalXP)).squareRoot()) / 2.0))
    }

    var xpInCurrentLevel: Int {
        totalXP - 50 * currentLevel * (currentLevel - 1)
    }

    var xpForNextLevel: Int {
        100 * currentLevel
    }

    var levelProgress: Double {
        let needed = xpForNextLevel
        guard needed > 0 else { return 0 }
        return min(1.0, Double(xpInCurrentLevel) / Double(needed))
    }

    /// Alias used by views
    var streakDays: Int {
        get { dailyStreak }
        set { dailyStreak = newValue }
    }

    /// Typed accessor for nebulaPreset (String storage → NebulaPreset enum)
    var nebulaPresetEnum: NebulaPreset {
        get { NebulaPreset(rawValue: nebulaPreset) ?? .lagoonNebula }
        set { nebulaPreset = newValue.rawValue }
    }

    /// Typed accessor for breathing orb scheme
    var orbScheme: BreathingOrbScheme {
        get { BreathingOrbScheme(rawValue: breathingOrbScheme) ?? .barcelonaNights }
        set { breathingOrbScheme = newValue.rawValue }
    }

    /// Typed accessor for quantum flow scene
    var quantumScene: QuantumFlowScene {
        get { QuantumFlowScene(rawValue: quantumFlowScene) ?? .dubaiCelestialMirage }
        set { quantumFlowScene = newValue.rawValue }
    }

    /// Typed accessor for selected soundscape (nil = none selected)
    var soundscapeEnum: Soundscape? {
        get { Soundscape(rawValue: selectedSoundscape) }
        set { selectedSoundscape = newValue?.rawValue ?? "" }
    }

    init(
        totalXP: Int = 0,
        dailyStreak: Int = 0,
        totalActiveDays: Int = 0,
        lastActivityDate: Date? = nil,
        favoriteGame: String? = nil,
        difficulty: String = Difficulty.beginner.rawValue,
        soundEnabled: Bool = true,
        darkMode: Bool = true,
        breathingOrbsEnabled: Bool = true,
        breathingOrbScheme: String = BreathingOrbScheme.barcelonaNights.rawValue,
        quantumFlowEnabled: Bool = true,
        quantumFlowScene: String = QuantumFlowScene.dubaiCelestialMirage.rawValue,
        nebulaDriftEnabled: Bool = true,
        nebulaPreset: String = NebulaPreset.lagoonNebula.rawValue,
        animationIntensity: Double = 0.8,
        animationSpeed: Double = 1.0,
        orbIntensity: Double = 1.0,
        orbSpeed: Double = 1.0,
        orbRaveMode: Bool = false,
        quantumIntensity: Double = 1.0,
        quantumSpeed: Double = 1.0,
        quantumRaveMode: Bool = false,
        nebulaDriftIntensity: Double = 1.0,
        nebulaDriftSpeed: Double = 1.0,
        gamesSoundsEnabled: Bool = true,
        flashcardsSoundsEnabled: Bool = true,
        grammarSoundsEnabled: Bool = true,
        wordBuilderSoundsEnabled: Bool = true,
        uiSoundsEnabled: Bool = true,
        achievementSoundsEnabled: Bool = true,
        ambientSoundsEnabled: Bool = true,
        selectedSoundscape: String = "parisCafe",
        soundscapeVariantIndex: Int = 0,
        hapticsEnabled: Bool = true,
        adaptiveAudioEnabled: Bool = true,
        gameSoundsVolume: Float = 1.0,
        uiSoundsVolume: Float = 1.0,
        achievementSoundsVolume: Float = 1.0,
        ambientVolume: Float = 0.3,
        selectedTierId: String = "free",
        offlineModeEnabled: Bool = false
    ) {
        self.totalXP = totalXP
        self.dailyStreak = dailyStreak
        self.totalActiveDays = totalActiveDays
        self.lastActivityDate = lastActivityDate
        self.favoriteGame = favoriteGame
        self.difficulty = difficulty
        self.soundEnabled = soundEnabled
        self.darkMode = darkMode
        self.breathingOrbsEnabled = breathingOrbsEnabled
        self.breathingOrbScheme = breathingOrbScheme
        self.quantumFlowEnabled = quantumFlowEnabled
        self.quantumFlowScene = quantumFlowScene
        self.nebulaDriftEnabled = nebulaDriftEnabled
        self.nebulaPreset = nebulaPreset
        self.animationIntensity = animationIntensity
        self.animationSpeed = animationSpeed
        self.orbIntensity = orbIntensity
        self.orbSpeed = orbSpeed
        self.orbRaveMode = orbRaveMode
        self.quantumIntensity = quantumIntensity
        self.quantumSpeed = quantumSpeed
        self.quantumRaveMode = quantumRaveMode
        self.nebulaDriftIntensity = nebulaDriftIntensity
        self.nebulaDriftSpeed = nebulaDriftSpeed
        self.gamesSoundsEnabled = gamesSoundsEnabled
        self.flashcardsSoundsEnabled = flashcardsSoundsEnabled
        self.grammarSoundsEnabled = grammarSoundsEnabled
        self.wordBuilderSoundsEnabled = wordBuilderSoundsEnabled
        self.uiSoundsEnabled = uiSoundsEnabled
        self.achievementSoundsEnabled = achievementSoundsEnabled
        self.ambientSoundsEnabled = ambientSoundsEnabled
        self.selectedSoundscape = selectedSoundscape
        self.soundscapeVariantIndex = soundscapeVariantIndex
        self.hapticsEnabled = hapticsEnabled
        self.adaptiveAudioEnabled = adaptiveAudioEnabled
        self.gameSoundsVolume = gameSoundsVolume
        self.uiSoundsVolume = uiSoundsVolume
        self.achievementSoundsVolume = achievementSoundsVolume
        self.ambientVolume = ambientVolume
        self.selectedTierId = selectedTierId
        self.offlineModeEnabled = offlineModeEnabled
    }
}

// MARK: - Game Progress Record (SwiftData)

@Model
final class GameProgressRecord {
    var gameType: String
    var level: String
    var score: Int
    var correctAnswers: Int
    var totalQuestions: Int
    var timeSpent: Int // seconds
    var sourceLanguage: String
    var targetLanguage: String
    var createdDate: Date

    init(
        gameType: GameType,
        level: String,
        score: Int,
        correctAnswers: Int,
        totalQuestions: Int,
        timeSpent: Int,
        sourceLanguage: String,
        targetLanguage: String,
        createdDate: Date = .now
    ) {
        self.gameType = gameType.rawValue
        self.level = level
        self.score = score
        self.correctAnswers = correctAnswers
        self.totalQuestions = totalQuestions
        self.timeSpent = timeSpent
        self.sourceLanguage = sourceLanguage
        self.targetLanguage = targetLanguage
        self.createdDate = createdDate
    }

    var gameTypeEnum: GameType? {
        GameType(rawValue: gameType)
    }

    /// Alias used by views — maps to createdDate
    var completedAt: Date {
        get { createdDate }
        set { createdDate = newValue }
    }

    /// Human-friendly category name — transforms raw key (e.g. "greetings_basics" → "Greetings Basics")
    var categoryName: String {
        level
            .replacingOccurrences(of: "_", with: " ")
            .split(separator: " ")
            .map { $0.prefix(1).uppercased() + $0.dropFirst() }
            .joined(separator: " ")
    }

    /// The raw category key stored in level, used for navigation
    var categoryKey: String {
        level
    }

    var accuracy: Double {
        guard totalQuestions > 0 else { return 0 }
        return Double(correctAnswers) / Double(totalQuestions) * 100
    }
}

// MARK: - Language Preference (SwiftData)

@Model
final class LanguagePreference {
    @Attribute(.unique) var id: String
    var sourceLanguage: String
    var targetLanguage: String
    var isActive: Bool

    init(
        sourceLanguage: String = SupportedLanguage.english.rawValue,
        targetLanguage: String = SupportedLanguage.spanish.rawValue,
        isActive: Bool = true
    ) {
        self.id = "current"
        self.sourceLanguage = sourceLanguage
        self.targetLanguage = targetLanguage
        self.isActive = isActive
    }

    /// Convenience init accepting typed SupportedLanguage values
    convenience init(source: SupportedLanguage, target: SupportedLanguage) {
        self.init(sourceLanguage: source.rawValue, targetLanguage: target.rawValue)
    }

    /// Typed accessor for source language
    var sourceLanguageEnum: SupportedLanguage {
        get { SupportedLanguage(rawValue: sourceLanguage) ?? .english }
        set { sourceLanguage = newValue.rawValue }
    }

    /// Typed accessor for target language
    var targetLanguageEnum: SupportedLanguage {
        get { SupportedLanguage(rawValue: targetLanguage) ?? .spanish }
        set { targetLanguage = newValue.rawValue }
    }

    var pair: LanguagePair? {
        guard let source = SupportedLanguage(rawValue: sourceLanguage),
              let target = SupportedLanguage(rawValue: targetLanguage) else { return nil }
        return LanguagePair(source: source, target: target)
    }
}

// MARK: - Favorite Category (SwiftData)

@Model
final class FavoriteCategory {
    var gameType: String
    var categoryKey: String
    var sourceLanguage: String
    var targetLanguage: String

    init(gameType: GameType, categoryKey: String, sourceLanguage: String, targetLanguage: String) {
        self.gameType = gameType.rawValue
        self.categoryKey = categoryKey
        self.sourceLanguage = sourceLanguage
        self.targetLanguage = targetLanguage
    }

    /// Alias used by some views
    var categoryId: String {
        get { categoryKey }
        set { categoryKey = newValue }
    }
}

// MARK: - Mastered Content (SwiftData)

@Model
final class MasteredContent {
    var gameType: String
    var category: String
    var contentID: String
    var masteredCount: Int
    var sourceLanguage: String
    var targetLanguage: String

    init(
        gameType: GameType,
        category: String,
        contentID: String,
        masteredCount: Int = 1,
        sourceLanguage: String,
        targetLanguage: String
    ) {
        self.gameType = gameType.rawValue
        self.category = category
        self.contentID = contentID
        self.masteredCount = masteredCount
        self.sourceLanguage = sourceLanguage
        self.targetLanguage = targetLanguage
    }
}


