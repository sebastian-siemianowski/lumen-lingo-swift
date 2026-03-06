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

    var currentLevel: Int {
        (totalXP / 100) + 1
    }

    var xpInCurrentLevel: Int {
        totalXP % 100
    }

    var xpForNextLevel: Int {
        currentLevel * 100
    }

    var levelProgress: Double {
        Double(xpInCurrentLevel) / 100.0
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
        get { QuantumFlowScene(rawValue: quantumFlowScene) ?? .auroraBorealis }
        set { quantumFlowScene = newValue.rawValue }
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
        quantumFlowScene: String = QuantumFlowScene.auroraBorealis.rawValue,
        nebulaDriftEnabled: Bool = true,
        nebulaPreset: String = NebulaPreset.lagoonNebula.rawValue,
        animationIntensity: Double = 0.8,
        animationSpeed: Double = 1.0
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

    /// Alias for category name — maps to level (which stores categoryKey)
    var categoryName: String {
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

// MARK: - Beta Language Pair (SwiftData)

@Model
final class EnabledBetaPair {
    var sourceLanguage: String
    var targetLanguage: String

    init(sourceLanguage: String, targetLanguage: String) {
        self.sourceLanguage = sourceLanguage
        self.targetLanguage = targetLanguage
    }
}
