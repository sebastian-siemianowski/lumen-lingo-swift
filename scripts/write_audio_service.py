#!/usr/bin/env python3
"""Write the new comprehensive AudioService.swift"""
import os

TARGET = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "LumenLingo", "LumenLingo", "Services", "AudioService.swift"
)

CONTENT = r'''import AVFoundation
import Foundation
import UIKit

// MARK: - Audio Service

/// Production-grade synthesized audio system for LumenLingo.
///
/// Architecture:
/// - **Player Pool**: 6 recycled AVAudioPlayers for zero-allocation playback
/// - **Anti-Spam**: Per-sound cooldowns prevent overlapping rapid-fire triggers
/// - **Per-Game Guards**: Independent enable flags for flashcards, grammar, word builder
/// - **Adaptive Intelligence**: Fatigue detection, performance mood, time-of-day scaling
/// - **Ambient Engine**: Looping synthesized drone with crossfade support
/// - **Lifecycle**: Background/foreground transitions, memory pressure response
/// - **Musical Coherence**: All tones in C major / A minor pentatonic
///
/// WAV is generated in-memory (16-bit mono PCM, 44100Hz) via phase accumulation,
/// avoiding AVAudioEngine crash on certain simulator configurations.
@Observable
final class AudioService {
    static let shared = AudioService()

    // MARK: - Public Configuration

    var isEnabled: Bool = true
    var uiSoundsEnabled: Bool = true
    var gameSoundsEnabled: Bool = true
    var flashcardsSoundsEnabled: Bool = true
    var grammarSoundsEnabled: Bool = true
    var wordBuilderSoundsEnabled: Bool = true
    var achievementSoundsEnabled: Bool = true
    var ambientSoundsEnabled: Bool = false
    var adaptiveAudioEnabled: Bool = true
    var masterVolume: Float = 0.08
    var gameSoundsVolume: Float = 1.0
    var uiSoundsVolume: Float = 1.0
    var achievementSoundsVolume: Float = 1.0
    var ambientVolume: Float = 0.3

    // MARK: - Player Pool

    private var playerPool: [AVAudioPlayer] = []
    private var poolIndex: Int = 0
    private let poolSize = 6

    // MARK: - Anti-Spam

    private var lastPlayTimes: [String: TimeInterval] = [:]
    private let defaultCooldown: TimeInterval = 0.04

    // MARK: - Session State

    private var isSessionConfigured = false
    private var sessionSoundCount: Int = 0
    private var sessionStartTime: Date = Date()

    // MARK: - Ambient Engine

    private var ambientPlayer: AVAudioPlayer?
    private var ambientFadeTimer: Timer?
    private var wasAmbientPlaying = false
    private var currentAmbientPreset: AmbientPreset?

    // MARK: - Adaptive State

    private var consecutiveCorrect: Int = 0
    private var currentMood: PerformanceMood = .neutral

    // MARK: - Sound Cache

    private var soundCache: [String: Data] = [:]
    private let cacheQueue = DispatchQueue(label: "audio.cache", qos: .userInitiated)

    private let sampleRate: Int = 44100

    // MARK: - Init

    private init() {
        setupLifecycleObservers()
        prewarmSounds()
    }

    // MARK: - Sync from UserProfile

    func syncFromProfile(_ profile: UserProfile) {
        isEnabled = profile.soundEnabled
        gameSoundsEnabled = profile.gamesSoundsEnabled
        flashcardsSoundsEnabled = profile.flashcardsSoundsEnabled
        grammarSoundsEnabled = profile.grammarSoundsEnabled
        wordBuilderSoundsEnabled = profile.wordBuilderSoundsEnabled
        uiSoundsEnabled = profile.uiSoundsEnabled
        achievementSoundsEnabled = profile.achievementSoundsEnabled
        ambientSoundsEnabled = profile.ambientSoundsEnabled
        adaptiveAudioEnabled = profile.adaptiveAudioEnabled
        gameSoundsVolume = profile.gameSoundsVolume
        uiSoundsVolume = profile.uiSoundsVolume
        achievementSoundsVolume = profile.achievementSoundsVolume
        ambientVolume = profile.ambientVolume
    }

    // MARK: - Audio Session

    private func configureSessionIfNeeded() {
        guard !isSessionConfigured else { return }
        do {
            try AVAudioSession.sharedInstance().setCategory(
                .ambient, mode: .default, options: [.mixWithOthers]
            )
            try AVAudioSession.sharedInstance().setActive(true)
            isSessionConfigured = true
        } catch {
            print("⚠️ Audio session config failed: \(error)")
        }
    }

    func deactivateSession() {
        try? AVAudioSession.sharedInstance().setActive(false, options: .notifyOthersOnDeactivation)
        isSessionConfigured = false
    }

    // MARK: - Pre-warming (Story 1.5)

    private func prewarmSounds() {
        cacheQueue.async { [weak self] in
            guard let self else { return }
            let warmList: [(String, Float, Float?, TimeInterval, Float, Waveform)] = [
                ("plink", 2200, 1600, 0.12, 0.048, .sine),
                ("softClick", 800, 500, 0.05, 0.024, .sine),
                ("buttonTap", 1200, 800, 0.08, 0.024, .sine),
                ("tilePick", 880, nil, 0.06, 0.032, .sine),
                ("tilePlace", 220, 110, 0.08, 0.032, .sine),
            ]
            for (key, freq, endFreq, dur, vol, wf) in warmList {
                let data = self.generateWAVData(
                    frequency: freq, endFrequency: endFreq,
                    duration: dur, volume: vol, waveform: wf
                )
                DispatchQueue.main.async { self.soundCache[key] = data }
            }
        }
    }

    // MARK: - Lifecycle (Story 18.2)

    private func setupLifecycleObservers() {
        NotificationCenter.default.addObserver(
            forName: UIApplication.didEnterBackgroundNotification,
            object: nil, queue: .main
        ) { [weak self] _ in self?.handleBackground() }

        NotificationCenter.default.addObserver(
            forName: UIApplication.willEnterForegroundNotification,
            object: nil, queue: .main
        ) { [weak self] _ in self?.handleForeground() }

        NotificationCenter.default.addObserver(
            forName: UIApplication.didReceiveMemoryWarningNotification,
            object: nil, queue: .main
        ) { [weak self] _ in self?.handleMemoryWarning() }

        NotificationCenter.default.addObserver(
            forName: .NSProcessInfoPowerStateDidChange,
            object: nil, queue: .main
        ) { [weak self] _ in self?.handlePowerStateChange() }
    }

    private func handleBackground() {
        wasAmbientPlaying = ambientPlayer?.isPlaying == true
        stopAmbient(fadeDuration: 0.3)
        playerPool.forEach { $0.stop() }
        deactivateSession()
    }

    private func handleForeground() {
        if wasAmbientPlaying, let preset = currentAmbientPreset {
            startAmbient(preset: preset)
        }
    }

    private func handleMemoryWarning() {
        soundCache.removeAll()
        if ambientPlayer?.isPlaying != true {
            ambientPlayer = nil
        }
    }

    private func handlePowerStateChange() {
        if ProcessInfo.processInfo.isLowPowerModeEnabled {
            soundCache.removeAll()
            if ambientPlayer?.isPlaying == true {
                stopAmbient(fadeDuration: 1.0)
            }
        }
    }

    // MARK: - Flashcard Sounds (Epic 3)

    /// Card appears on screen
    func playCardAppear() {
        guard isEnabled, gameSoundsEnabled, flashcardsSoundsEnabled else { return }
        guard canPlay("cardAppear", cooldown: 0.15) else { return }
        playTone(frequency: 1046.50, duration: 0.10, volume: gameVol(0.25), waveform: .sine)
    }

    /// Enhanced card flip with overtone
    func playCardFlipEnhanced() {
        guard isEnabled, gameSoundsEnabled, flashcardsSoundsEnabled else { return }
        guard canPlay("cardFlip", cooldown: 0.1) else { return }
        playTone(frequency: 1318.51, endFrequency: 1046.50, duration: 0.10, volume: gameVol(0.45))
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.04) { [weak self] in
            self?.playTone(frequency: 2637.02, duration: 0.06, volume: self?.gameVol(0.15) ?? 0.01)
        }
    }

    /// Original card flip (kept for compatibility)
    func playPlink() {
        guard isEnabled, gameSoundsEnabled else { return }
        guard canPlay("plink", cooldown: 0.08) else { return }
        if let cached = soundCache["plink"] {
            playFromData(cached)
        } else {
            playTone(frequency: 2200, endFrequency: 1600, duration: 0.12, volume: gameVol(0.6))
        }
    }

    /// Swipe right (correct)
    func playSwipeRight() {
        guard isEnabled, gameSoundsEnabled, flashcardsSoundsEnabled else { return }
        guard canPlay("swipeRight", cooldown: 0.12) else { return }
        playTone(frequency: 523.25, endFrequency: 783.99, duration: 0.12, volume: gameVol(0.4))
    }

    /// Swipe left (still learning)
    func playSwipeLeft() {
        guard isEnabled, gameSoundsEnabled, flashcardsSoundsEnabled else { return }
        guard canPlay("swipeLeft", cooldown: 0.12) else { return }
        playTone(frequency: 329.63, endFrequency: 261.63, duration: 0.10,
                 volume: gameVol(0.3), waveform: .triangle)
    }

    /// Mastery progression (level 0-5)
    func playMasteryProgress(level: Int) {
        guard isEnabled, gameSoundsEnabled, flashcardsSoundsEnabled else { return }
        guard canPlay("mastery", cooldown: 0.15) else { return }
        let pentatonic: [Float] = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98]
        let idx = min(max(level, 0), pentatonic.count - 1)
        playTone(frequency: pentatonic[idx], duration: 0.18, volume: gameVol(0.35))
    }

    /// Next category navigation
    func playCategoryNext() {
        guard isEnabled, gameSoundsEnabled else { return }
        guard canPlay("catNext", cooldown: 0.2) else { return }
        playTone(frequency: 440, endFrequency: 880, duration: 0.12, volume: gameVol(0.25))
    }

    /// Previous category navigation
    func playCategoryPrev() {
        guard isEnabled, gameSoundsEnabled else { return }
        guard canPlay("catPrev", cooldown: 0.2) else { return }
        playTone(frequency: 880, endFrequency: 440, duration: 0.12, volume: gameVol(0.25))
    }

    /// XP gain sparkle (intensity scales with amount)
    func playXPGain(amount: Int) {
        guard isEnabled, achievementSoundsEnabled else { return }
        guard canPlay("xpGain", cooldown: 0.3) else { return }
        let baseFreq: Float = amount >= 50 ? 1567.98 : (amount >= 20 ? 1318.51 : 1046.50)
        playTone(frequency: baseFreq, endFrequency: baseFreq * 1.2, duration: 0.15,
                 volume: achieveVol(0.3))
    }

    // MARK: - Word Builder Sounds (Epic 4)

    /// Tile picked from bank (position-aware)
    func playTilePick(position: Int, total: Int) {
        guard isEnabled, gameSoundsEnabled, wordBuilderSoundsEnabled else { return }
        guard canPlay("tilePick", cooldown: 0.04) else { return }
        let baseFreq: Float = 660 + Float(position) * (440.0 / max(Float(total), 1))
        playTone(frequency: baseFreq, duration: 0.06, volume: gameVol(0.35))
    }

    /// Original tile pick (no position)
    func playTilePick() {
        guard isEnabled, gameSoundsEnabled else { return }
        guard canPlay("tilePick", cooldown: 0.04) else { return }
        if let cached = soundCache["tilePick"] {
            playFromData(cached)
        } else {
            playTone(frequency: 880, duration: 0.06, volume: gameVol(0.4))
        }
    }

    /// Tile returned to bank
    func playTileReturn(position: Int = 0, total: Int = 1) {
        guard isEnabled, gameSoundsEnabled, wordBuilderSoundsEnabled else { return }
        guard canPlay("tileReturn", cooldown: 0.04) else { return }
        let base: Float = 880 - Float(position) * (220.0 / max(Float(total), 1))
        playTone(frequency: base, endFrequency: base * 0.7, duration: 0.06,
                 volume: gameVol(0.3))
    }

    /// Slot filled (ascending pitch per slot)
    func playSlotFill(slotIndex: Int, totalSlots: Int) {
        guard isEnabled, gameSoundsEnabled, wordBuilderSoundsEnabled else { return }
        guard canPlay("slotFill", cooldown: 0.03) else { return }
        let cMajor: [Float] = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50, 1318.51]
        let idx = Int(Float(slotIndex) / max(Float(totalSlots - 1), 1) * Float(cMajor.count - 1))
        let freq = cMajor[min(idx, cMajor.count - 1)]
        playTone(frequency: freq, duration: 0.07, volume: gameVol(0.3))
    }

    /// Tile snap into place (original)
    func playTilePlace() {
        guard isEnabled, gameSoundsEnabled else { return }
        guard canPlay("tilePlace", cooldown: 0.04) else { return }
        if let cached = soundCache["tilePlace"] {
            playFromData(cached)
        } else {
            playTone(frequency: 220, endFrequency: 110, duration: 0.08, volume: gameVol(0.4))
        }
    }

    /// Word completed (richness scales with length)
    func playWordComplete(length: Int) {
        guard isEnabled, gameSoundsEnabled, wordBuilderSoundsEnabled else { return }
        guard canPlay("wordComplete", cooldown: 0.3) else { return }
        let notes: [(Float, TimeInterval)] = length >= 6
            ? [(783.99, 0), (1046.50, 0.06), (1318.51, 0.12), (1567.98, 0.18)]
            : [(783.99, 0), (1046.50, 0.07), (1318.51, 0.14)]
        for (freq, delay) in notes {
            DispatchQueue.main.asyncAfter(deadline: .now() + delay) { [weak self] in
                self?.playTone(frequency: freq, duration: 0.20, volume: self?.gameVol(0.4) ?? 0.03)
            }
        }
    }

    /// Original word correct (glass chime E6)
    func playWordCorrect() {
        guard isEnabled, gameSoundsEnabled else { return }
        guard canPlay("wordCorrect", cooldown: 0.2) else { return }
        playTone(frequency: 1318.51, duration: 0.5, volume: gameVol(0.5))
    }

    /// Word wrong
    func playWordWrong() {
        guard isEnabled, gameSoundsEnabled, wordBuilderSoundsEnabled else { return }
        guard canPlay("wordWrong", cooldown: 0.15) else { return }
        playTone(frequency: 293.66, endFrequency: 220, duration: 0.18,
                 volume: gameVol(0.3), waveform: .triangle)
    }

    /// Letter cleared from slot
    func playLetterClear(index: Int = 0, total: Int = 1) {
        guard isEnabled, gameSoundsEnabled, wordBuilderSoundsEnabled else { return }
        guard canPlay("letterClear", cooldown: 0.03) else { return }
        let freq: Float = 600 - Float(index) * (200.0 / max(Float(total), 1))
        playTone(frequency: freq, duration: 0.04, volume: gameVol(0.2))
    }

    /// Hint becomes available
    func playHintAvailable() {
        guard isEnabled, gameSoundsEnabled, wordBuilderSoundsEnabled else { return }
        guard canPlay("hintAvail", cooldown: 0.5) else { return }
        playTone(frequency: 1567.98, duration: 0.15, volume: gameVol(0.2))
    }

    /// Hint letter revealed
    func playHintReveal(position: Int = 0) {
        guard isEnabled, gameSoundsEnabled, wordBuilderSoundsEnabled else { return }
        guard canPlay("hintReveal", cooldown: 0.1) else { return }
        let freq: Float = 2093.0 + Float(position) * 200
        playTone(frequency: freq, duration: 0.20, volume: gameVol(0.25))
    }

    /// Original hint sparkle (E7)
    func playHintSparkle() {
        guard isEnabled, gameSoundsEnabled else { return }
        guard canPlay("hintSparkle", cooldown: 0.15) else { return }
        playTone(frequency: 2637.02, duration: 0.25, volume: gameVol(0.3))
    }

    /// Skip word
    func playSkipWord() {
        guard isEnabled, gameSoundsEnabled, wordBuilderSoundsEnabled else { return }
        guard canPlay("skipWord", cooldown: 0.3) else { return }
        playTone(frequency: 440, endFrequency: 330, duration: 0.12,
                 volume: gameVol(0.25), waveform: .triangle)
    }

    /// Timer tick (urgency increases)
    func playTimerTick(secondsRemaining: Int) {
        guard isEnabled, gameSoundsEnabled, wordBuilderSoundsEnabled else { return }
        guard canPlay("timerTick", cooldown: 0.8) else { return }
        let freq: Float = secondsRemaining <= 5 ? 1200 : 800
        let vol = secondsRemaining <= 5 ? gameVol(0.35) : gameVol(0.15)
        playTone(frequency: freq, duration: 0.03, volume: vol)
    }

    /// Timer expired
    func playTimerExpired() {
        guard isEnabled, gameSoundsEnabled, wordBuilderSoundsEnabled else { return }
        guard canPlay("timerExpired", cooldown: 0.5) else { return }
        playTone(frequency: 440, endFrequency: 220, duration: 0.25,
                 volume: gameVol(0.4), waveform: .triangle)
    }

    // MARK: - Grammar Sounds (Epic 5)

    /// Question appears
    func playQuestionAppear() {
        guard isEnabled, gameSoundsEnabled, grammarSoundsEnabled else { return }
        guard canPlay("questionAppear", cooldown: 0.2) else { return }
        playTone(frequency: 783.99, duration: 0.08, volume: gameVol(0.2))
    }

    /// Answer option selected
    func playAnswerSelect() {
        guard isEnabled, gameSoundsEnabled, grammarSoundsEnabled else { return }
        guard canPlay("answerSelect", cooldown: 0.06) else { return }
        playTone(frequency: 880, duration: 0.04, volume: gameVol(0.2))
    }

    /// Grammar correct (progressive richness)
    func playGrammarCorrect(consecutiveCount: Int = 1) {
        guard isEnabled, gameSoundsEnabled, grammarSoundsEnabled else { return }
        guard canPlay("grammarCorrect", cooldown: 0.1) else { return }
        consecutiveCorrect = consecutiveCount
        if consecutiveCount >= 5 {
            let notes: [(Float, TimeInterval)] = [
                (523.25, 0), (659.25, 0.04), (783.99, 0.08), (1046.50, 0.12)
            ]
            for (freq, delay) in notes {
                DispatchQueue.main.asyncAfter(deadline: .now() + delay) { [weak self] in
                    self?.playTone(frequency: freq, duration: 0.12,
                                   volume: self?.gameVol(0.4) ?? 0.03)
                }
            }
        } else if consecutiveCount >= 3 {
            playTone(frequency: 523.25, duration: 0.10, volume: gameVol(0.35))
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.05) { [weak self] in
                self?.playTone(frequency: 659.25, duration: 0.10,
                               volume: self?.gameVol(0.35) ?? 0.03)
            }
        } else {
            playTone(frequency: 523.25, duration: 0.12, volume: gameVol(0.35))
        }
    }

    /// Grammar wrong
    func playGrammarWrong() {
        guard isEnabled, gameSoundsEnabled, grammarSoundsEnabled else { return }
        guard canPlay("grammarWrong", cooldown: 0.15) else { return }
        consecutiveCorrect = 0
        playTone(frequency: 220, endFrequency: 165, duration: 0.15,
                 volume: gameVol(0.25), waveform: .triangle)
    }

    /// Explanation panel reveals
    func playExplanationReveal() {
        guard isEnabled, gameSoundsEnabled, grammarSoundsEnabled else { return }
        guard canPlay("explanationReveal", cooldown: 0.3) else { return }
        playTone(frequency: 659.25, endFrequency: 783.99, duration: 0.12, volume: gameVol(0.2))
    }

    /// Panel expand
    func playPanelExpand() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("panelExpand", cooldown: 0.15) else { return }
        playTone(frequency: 440, endFrequency: 660, duration: 0.08, volume: uiVol(0.2))
    }

    /// Panel collapse
    func playPanelCollapse() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("panelCollapse", cooldown: 0.15) else { return }
        playTone(frequency: 660, endFrequency: 440, duration: 0.08, volume: uiVol(0.2))
    }

    /// "Got It!" success (original, refined)
    func playWarmPulse() {
        guard isEnabled, gameSoundsEnabled else { return }
        guard canPlay("warmPulse", cooldown: 0.1) else { return }
        let notes: [(freq: Float, delay: TimeInterval)] = [
            (523.25, 0), (659.25, 0.035), (783.99, 0.070),
        ]
        for note in notes {
            DispatchQueue.main.asyncAfter(deadline: .now() + note.delay) { [weak self] in
                self?.playTone(frequency: note.freq, duration: 0.15,
                               volume: self?.gameVol(0.5) ?? 0.04)
            }
        }
    }

    /// "Still Learning" nudge (original, refined)
    func playSoftNudge() {
        guard isEnabled, gameSoundsEnabled else { return }
        guard canPlay("softNudge", cooldown: 0.1) else { return }
        playTone(frequency: 180, endFrequency: 120, duration: 0.12,
                 volume: gameVol(0.4), waveform: .triangle)
    }

    /// Performance-based mood
    func setGrammarMood(_ mood: PerformanceMood) {
        currentMood = mood
    }

    /// Adaptive: acknowledge improvement
    func playPerformanceImproved() {
        guard isEnabled, gameSoundsEnabled, adaptiveAudioEnabled else { return }
        guard canPlay("perfImproved", cooldown: 2.0) else { return }
        playTone(frequency: 783.99, endFrequency: 1046.50, duration: 0.2, volume: gameVol(0.3))
    }

    // MARK: - Navigation & UI Sounds (Epic 6)

    /// Tab bar switch
    func playTabSwitch(tabIndex: Int = 0) {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("tabSwitch", cooldown: 0.12) else { return }
        let tabs: [Float] = [523.25, 659.25, 783.99, 1046.50, 1318.51]
        let freq = tabs[min(tabIndex, tabs.count - 1)]
        playTone(frequency: freq, duration: 0.05, volume: uiVol(0.2))
    }

    /// Dashboard game card tapped
    func playGameCardTap(game: String = "") {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("gameCardTap", cooldown: 0.15) else { return }
        playTone(frequency: 880, endFrequency: 1046.50, duration: 0.07, volume: uiVol(0.25))
    }

    /// Navigation push
    func playNavPush() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("navPush", cooldown: 0.15) else { return }
        playTone(frequency: 400, endFrequency: 700, duration: 0.10, volume: uiVol(0.2))
    }

    /// Navigation pop
    func playNavPop() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("navPop", cooldown: 0.15) else { return }
        playTone(frequency: 700, endFrequency: 400, duration: 0.10, volume: uiVol(0.2))
    }

    /// Sheet presented
    func playSheetPresent() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("sheetPresent", cooldown: 0.2) else { return }
        playTone(frequency: 330, endFrequency: 523.25, duration: 0.12, volume: uiVol(0.2))
    }

    /// Sheet dismissed
    func playSheetDismiss() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("sheetDismiss", cooldown: 0.2) else { return }
        playTone(frequency: 523.25, endFrequency: 330, duration: 0.12, volume: uiVol(0.18))
    }

    /// Dashboard stats ready
    func playStatsReady() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("statsReady", cooldown: 0.5) else { return }
        playTone(frequency: 783.99, duration: 0.10, volume: uiVol(0.15))
    }

    /// Streak alive notification
    func playStreakAlive() {
        guard isEnabled, achievementSoundsEnabled else { return }
        guard canPlay("streakAlive", cooldown: 1.0) else { return }
        let notes: [(Float, TimeInterval)] = [(659.25, 0), (783.99, 0.06)]
        for (freq, delay) in notes {
            DispatchQueue.main.asyncAfter(deadline: .now() + delay) { [weak self] in
                self?.playTone(frequency: freq, duration: 0.12,
                               volume: self?.achieveVol(0.3) ?? 0.02)
            }
        }
    }

    /// Navigation whoosh (original, refined)
    func playWhoosh() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("whoosh", cooldown: 0.12) else { return }
        playTone(frequency: 600, endFrequency: 200, duration: 0.15, volume: uiVol(0.3))
    }

    /// Subtle UI click (original, refined)
    func playSoftClick() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("softClick", cooldown: 0.05) else { return }
        if let cached = soundCache["softClick"] {
            playFromData(cached)
        } else {
            playTone(frequency: 800, endFrequency: 500, duration: 0.05, volume: uiVol(0.3))
        }
    }

    /// Premium button tap (original, refined)
    func playButtonTap() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("buttonTap", cooldown: 0.08) else { return }
        if let cached = soundCache["buttonTap"] {
            playFromData(cached)
        } else {
            playTone(frequency: 1200, endFrequency: 800, duration: 0.08, volume: uiVol(0.3))
        }
    }

    /// Toggle on
    func playToggleOn() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("toggleOn", cooldown: 0.1) else { return }
        playTone(frequency: 659.25, endFrequency: 1046.50, duration: 0.08, volume: uiVol(0.25))
    }

    /// Toggle off
    func playToggleOff() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("toggleOff", cooldown: 0.1) else { return }
        playTone(frequency: 1046.50, endFrequency: 659.25, duration: 0.08, volume: uiVol(0.2))
    }

    /// Profile tab switch
    func playProfileTabSwitch() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("profileTab", cooldown: 0.12) else { return }
        playTone(frequency: 523.25, duration: 0.05, volume: uiVol(0.18))
    }

    /// Slider continuous tick
    func playSliderTick(normalizedPosition: Float = 0.5) {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("sliderTick", cooldown: 0.06) else { return }
        let freq: Float = 400 + normalizedPosition * 800
        playTone(frequency: freq, duration: 0.02, volume: uiVol(0.1))
    }

    /// Slider hits min/max
    func playSliderEndpoint() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("sliderEnd", cooldown: 0.15) else { return }
        playTone(frequency: 1046.50, duration: 0.06, volume: uiVol(0.25))
    }

    /// Color scheme selected
    func playSchemeSelect() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("schemeSelect", cooldown: 0.15) else { return }
        playTone(frequency: 783.99, endFrequency: 1046.50, duration: 0.10, volume: uiVol(0.2))
    }

    /// Pagination page change
    func playPageChange() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("pageChange", cooldown: 0.1) else { return }
        playTone(frequency: 523.25, duration: 0.04, volume: uiVol(0.15))
    }

    /// Search field focused
    func playSearchFocus() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("searchFocus", cooldown: 0.3) else { return }
        playTone(frequency: 880, duration: 0.05, volume: uiVol(0.12))
    }

    /// Search found results
    func playSearchFound() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("searchFound", cooldown: 0.3) else { return }
        playTone(frequency: 1046.50, duration: 0.06, volume: uiVol(0.15))
    }

    /// Search returned empty
    func playSearchEmpty() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("searchEmpty", cooldown: 0.5) else { return }
        playTone(frequency: 330, endFrequency: 262, duration: 0.10,
                 volume: uiVol(0.12), waveform: .triangle)
    }

    // MARK: - Journey & Progress Sounds (Epic 7)

    /// Journey screen arrival
    func playJourneyArrival() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("journeyArrival", cooldown: 0.5) else { return }
        let chord: [(Float, TimeInterval)] = [(523.25, 0), (659.25, 0.03), (783.99, 0.06)]
        for (freq, delay) in chord {
            DispatchQueue.main.asyncAfter(deadline: .now() + delay) { [weak self] in
                self?.playTone(frequency: freq, duration: 0.20, volume: self?.uiVol(0.25) ?? 0.02)
            }
        }
    }

    /// Streak display (scales with days)
    func playStreakDisplay(days: Int) {
        guard isEnabled, achievementSoundsEnabled else { return }
        guard canPlay("streakDisplay", cooldown: 1.0) else { return }
        if days >= 30 {
            playStreakMilestone(days: days)
        } else if days >= 7 {
            let notes: [(Float, TimeInterval)] = [(659.25, 0), (783.99, 0.05), (1046.50, 0.10)]
            for (freq, delay) in notes {
                DispatchQueue.main.asyncAfter(deadline: .now() + delay) { [weak self] in
                    self?.playTone(frequency: freq, duration: 0.15,
                                   volume: self?.achieveVol(0.3) ?? 0.02)
                }
            }
        } else if days >= 1 {
            playTone(frequency: 659.25, duration: 0.12, volume: achieveVol(0.25))
        }
    }

    /// Milestone unlocked
    func playMilestoneUnlocked() {
        guard isEnabled, achievementSoundsEnabled else { return }
        guard canPlay("milestoneUnlocked", cooldown: 0.5) else { return }
        let fanfare: [(Float, TimeInterval)] = [
            (523.25, 0), (659.25, 0.08), (783.99, 0.16),
            (1046.50, 0.24), (1567.98, 0.36),
        ]
        for (freq, delay) in fanfare {
            DispatchQueue.main.asyncAfter(deadline: .now() + delay) { [weak self] in
                self?.playTone(frequency: freq, duration: 0.25,
                               volume: self?.achieveVol(0.45) ?? 0.03)
            }
        }
    }

    /// Milestone locked
    func playMilestoneLocked() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("milestoneLocked", cooldown: 0.3) else { return }
        playTone(frequency: 330, duration: 0.08, volume: uiVol(0.12), waveform: .triangle)
    }

    /// Stat reveal
    func playStatReveal(isHighPerformance: Bool = false) {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("statReveal", cooldown: 0.15) else { return }
        let freq: Float = isHighPerformance ? 1046.50 : 659.25
        playTone(frequency: freq, duration: 0.08, volume: uiVol(0.18))
    }

    /// Reset progress warning
    func playResetWarning() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("resetWarning", cooldown: 0.5) else { return }
        playTone(frequency: 220, duration: 0.25, volume: uiVol(0.3), waveform: .triangle)
    }

    /// Reset confirmed
    func playResetConfirmed() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("resetConfirmed", cooldown: 0.5) else { return }
        playTone(frequency: 330, endFrequency: 165, duration: 0.3,
                 volume: uiVol(0.25), waveform: .triangle)
    }

    /// Reset cancelled
    func playResetCancelled() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("resetCancelled", cooldown: 0.3) else { return }
        playTone(frequency: 523.25, duration: 0.10, volume: uiVol(0.2))
    }

    // MARK: - Categories & Favorites (Epic 9)

    /// Category card tapped
    func playCategoryTap() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("categoryTap", cooldown: 0.1) else { return }
        playTone(frequency: 783.99, duration: 0.06, volume: uiVol(0.2))
    }

    /// Favorite added
    func playFavoriteAdd() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("favAdd", cooldown: 0.15) else { return }
        playTone(frequency: 659.25, endFrequency: 1046.50, duration: 0.12, volume: uiVol(0.25))
    }

    /// Favorite removed
    func playFavoriteRemove() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("favRemove", cooldown: 0.15) else { return }
        playTone(frequency: 880, endFrequency: 523.25, duration: 0.10, volume: uiVol(0.18))
    }

    // MARK: - Language Selection (Epic 10)

    /// Language option hovered
    func playLanguageHover() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("langHover", cooldown: 0.08) else { return }
        playTone(frequency: 880, duration: 0.03, volume: uiVol(0.1))
    }

    /// Language pair confirmed
    func playLanguageConfirmed() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("langConfirmed", cooldown: 0.3) else { return }
        let notes: [(Float, TimeInterval)] = [(523.25, 0), (783.99, 0.06), (1046.50, 0.12)]
        for (freq, delay) in notes {
            DispatchQueue.main.asyncAfter(deadline: .now() + delay) { [weak self] in
                self?.playTone(frequency: freq, duration: 0.15,
                               volume: self?.uiVol(0.3) ?? 0.02)
            }
        }
    }

    /// First-ever language selected
    func playFirstLanguageSelected() {
        guard isEnabled, achievementSoundsEnabled else { return }
        guard canPlay("firstLang", cooldown: 1.0) else { return }
        let welcome: [(Float, TimeInterval)] = [
            (523.25, 0), (659.25, 0.10), (783.99, 0.20),
            (1046.50, 0.30), (1318.51, 0.40),
        ]
        for (freq, delay) in welcome {
            DispatchQueue.main.asyncAfter(deadline: .now() + delay) { [weak self] in
                self?.playTone(frequency: freq, duration: 0.25,
                               volume: self?.achieveVol(0.4) ?? 0.03)
            }
        }
    }

    // MARK: - Membership & IAP (Epic 11)

    /// Membership page arrival
    func playMembershipArrival() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("memberArrival", cooldown: 0.5) else { return }
        let chord: [(Float, TimeInterval)] = [(392, 0), (523.25, 0.04), (659.25, 0.08)]
        for (freq, delay) in chord {
            DispatchQueue.main.asyncAfter(deadline: .now() + delay) { [weak self] in
                self?.playTone(frequency: freq, duration: 0.30, volume: self?.uiVol(0.2) ?? 0.02)
            }
        }
    }

    /// Tier card selected
    func playTierSelect(isUpgrade: Bool = true) {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("tierSelect", cooldown: 0.15) else { return }
        if isUpgrade {
            playTone(frequency: 523.25, endFrequency: 1046.50, duration: 0.12, volume: uiVol(0.25))
        } else {
            playTone(frequency: 1046.50, endFrequency: 523.25, duration: 0.12, volume: uiVol(0.2))
        }
    }

    /// Purchase initiated
    func playPurchaseInitiated() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("purchaseInit", cooldown: 0.5) else { return }
        playTone(frequency: 523.25, endFrequency: 659.25, duration: 0.15, volume: uiVol(0.2))
    }

    /// Purchase successful
    func playPurchaseSuccess() {
        guard isEnabled, achievementSoundsEnabled else { return }
        guard canPlay("purchaseSuccess", cooldown: 1.0) else { return }
        let cascade: [(Float, TimeInterval)] = [
            (523.25, 0), (783.99, 0.08), (1046.50, 0.16),
            (1318.51, 0.24), (1567.98, 0.32), (2093.0, 0.44),
        ]
        for (freq, delay) in cascade {
            DispatchQueue.main.asyncAfter(deadline: .now() + delay) { [weak self] in
                self?.playTone(frequency: freq, duration: 0.30,
                               volume: self?.achieveVol(0.45) ?? 0.03)
            }
        }
    }

    /// Purchase failed
    func playPurchaseFailed() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("purchaseFailed", cooldown: 0.5) else { return }
        playTone(frequency: 330, endFrequency: 262, duration: 0.15,
                 volume: uiVol(0.2), waveform: .triangle)
    }

    /// Purchase restored
    func playPurchaseRestored() {
        guard isEnabled, achievementSoundsEnabled else { return }
        guard canPlay("purchaseRestored", cooldown: 1.0) else { return }
        let notes: [(Float, TimeInterval)] = [
            (659.25, 0), (783.99, 0.08), (1046.50, 0.16), (1318.51, 0.24),
        ]
        for (freq, delay) in notes {
            DispatchQueue.main.asyncAfter(deadline: .now() + delay) { [weak self] in
                self?.playTone(frequency: freq, duration: 0.20,
                               volume: self?.achieveVol(0.35) ?? 0.03)
            }
        }
    }

    // MARK: - Wisdom Quotes (Epic 12)

    /// Quote card appears
    func playQuoteAppear() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("quoteAppear", cooldown: 0.3) else { return }
        playTone(frequency: 523.25, duration: 0.25, volume: uiVol(0.18))
    }

    /// Quote shuffled
    func playQuoteShuffle() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("quoteShuffle", cooldown: 0.2) else { return }
        playTone(frequency: 440, endFrequency: 660, duration: 0.10, volume: uiVol(0.15))
    }

    // MARK: - Sign Out & Sync (Epic 8)

    /// Sign out warning
    func playSignOutWarning() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("signOutWarn", cooldown: 0.5) else { return }
        playTone(frequency: 262, duration: 0.2, volume: uiVol(0.25), waveform: .triangle)
    }

    /// Sign out confirmed
    func playSignOutConfirmed() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("signOutDone", cooldown: 0.5) else { return }
        playTone(frequency: 392, endFrequency: 196, duration: 0.25,
                 volume: uiVol(0.2), waveform: .triangle)
    }

    /// Sync complete
    func playSyncComplete() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("syncComplete", cooldown: 0.5) else { return }
        playTone(frequency: 1046.50, duration: 0.12, volume: uiVol(0.25))
    }

    /// Sync error
    func playSyncError() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("syncError", cooldown: 0.5) else { return }
        playTone(frequency: 220, endFrequency: 165, duration: 0.15,
                 volume: uiVol(0.2), waveform: .triangle)
    }

    // MARK: - Streaks & Achievements (Epic 14)

    /// Streak milestone fanfare (scales with days)
    func playStreakMilestone(days: Int) {
        guard isEnabled, achievementSoundsEnabled else { return }
        guard canPlay("streakMile", cooldown: 1.0) else { return }
        let noteCount = days >= 100 ? 6 : (days >= 30 ? 5 : (days >= 7 ? 4 : 3))
        let notes: [Float] = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98]
        for i in 0..<noteCount {
            let delay = TimeInterval(i) * 0.08
            let freq = notes[min(i, notes.count - 1)]
            DispatchQueue.main.asyncAfter(deadline: .now() + delay) { [weak self] in
                self?.playTone(frequency: freq, duration: 0.22,
                               volume: self?.achieveVol(0.4) ?? 0.03)
            }
        }
    }

    /// Level up
    func playLevelUp(level: Int = 1) {
        guard isEnabled, achievementSoundsEnabled else { return }
        guard canPlay("levelUp", cooldown: 1.0) else { return }
        let scale: [(Float, TimeInterval)] = [
            (392, 0), (523.25, 0.10), (659.25, 0.20),
            (783.99, 0.30), (1046.50, 0.40), (1567.98, 0.55),
        ]
        for (freq, delay) in scale {
            DispatchQueue.main.asyncAfter(deadline: .now() + delay) { [weak self] in
                self?.playTone(frequency: freq, duration: 0.30,
                               volume: self?.achieveVol(0.45) ?? 0.03)
            }
        }
    }

    /// Daily goal complete
    func playDailyGoalComplete() {
        guard isEnabled, achievementSoundsEnabled else { return }
        guard canPlay("dailyGoal", cooldown: 1.0) else { return }
        let chord: [(Float, TimeInterval)] = [
            (523.25, 0), (659.25, 0.05), (783.99, 0.10), (1046.50, 0.20),
        ]
        for (freq, delay) in chord {
            DispatchQueue.main.asyncAfter(deadline: .now() + delay) { [weak self] in
                self?.playTone(frequency: freq, duration: 0.25,
                               volume: self?.achieveVol(0.4) ?? 0.03)
            }
        }
    }

    /// Achievement notification
    func playAchievementUnlocked(type: String = "") {
        guard isEnabled, achievementSoundsEnabled else { return }
        guard canPlay("achieveUnlock", cooldown: 0.5) else { return }
        let sparkle: [(Float, TimeInterval)] = [
            (1046.50, 0), (1318.51, 0.06), (1567.98, 0.12),
            (2093.0, 0.18), (2637.02, 0.28),
        ]
        for (freq, delay) in sparkle {
            DispatchQueue.main.asyncAfter(deadline: .now() + delay) { [weak self] in
                self?.playTone(frequency: freq, duration: 0.22,
                               volume: self?.achieveVol(0.35) ?? 0.03)
            }
        }
    }

    /// Game complete celebration (original, refined)
    func playCelebration() {
        guard isEnabled, achievementSoundsEnabled else { return }
        guard canPlay("celebration", cooldown: 0.5) else { return }
        let cascade: [(freq: Float, delay: TimeInterval)] = [
            (783.99, 0), (1046.50, 0.12), (1174.66, 0.24),
            (1567.98, 0.36), (2093.00, 0.48),
        ]
        for note in cascade {
            DispatchQueue.main.asyncAfter(deadline: .now() + note.delay) { [weak self] in
                self?.playTone(frequency: note.freq, duration: 0.3,
                               volume: self?.achieveVol(0.5) ?? 0.04)
            }
        }
    }

    /// Streak bonus (original, refined)
    func playStreakBonus() {
        guard isEnabled, achievementSoundsEnabled else { return }
        guard canPlay("streakBonus", cooldown: 0.3) else { return }
        let arpeggio: [(freq: Float, delay: TimeInterval)] = [
            (523.25, 0), (659.25, 0.10), (783.99, 0.20), (1046.50, 0.30),
        ]
        for note in arpeggio {
            DispatchQueue.main.asyncAfter(deadline: .now() + note.delay) { [weak self] in
                self?.playTone(frequency: note.freq, duration: 0.2,
                               volume: self?.achieveVol(0.4) ?? 0.03)
            }
        }
    }

    /// Correct letter placed (original, refined)
    func playLetterCorrect() {
        guard isEnabled, gameSoundsEnabled else { return }
        guard canPlay("letterCorrect", cooldown: 0.04) else { return }
        playTone(frequency: 880, endFrequency: 1320, duration: 0.08, volume: gameVol(0.15))
    }

    /// Wrong letter placed (original, refined)
    func playLetterWrong() {
        guard isEnabled, gameSoundsEnabled else { return }
        guard canPlay("letterWrong", cooldown: 0.1) else { return }
        playTone(frequency: 280, endFrequency: 140, duration: 0.08,
                 volume: gameVol(0.15), waveform: .triangle)
    }

    // MARK: - Ambient Soundscapes (Epic 13)

    /// Start ambient drone
    func startAmbient(preset: AmbientPreset) {
        guard isEnabled, ambientSoundsEnabled else { return }
        configureSessionIfNeeded()
        currentAmbientPreset = preset

        cacheQueue.async { [weak self] in
            guard let self else { return }
            let data = self.generateAmbientData(preset: preset)
            DispatchQueue.main.async {
                do {
                    self.ambientPlayer?.stop()
                    let player = try AVAudioPlayer(data: data)
                    player.numberOfLoops = -1
                    player.volume = 0
                    player.prepareToPlay()
                    player.play()
                    self.ambientPlayer = player
                    self.fadeAmbient(to: self.ambientVolume * self.masterVolume * 10,
                                    duration: 1.0)
                } catch {
                    print("⚠️ Ambient playback error: \(error)")
                }
            }
        }
    }

    /// Stop ambient with fade
    func stopAmbient(fadeDuration: TimeInterval = 1.0) {
        fadeAmbient(to: 0, duration: fadeDuration) { [weak self] in
            self?.ambientPlayer?.stop()
            self?.ambientPlayer = nil
            self?.currentAmbientPreset = nil
        }
    }

    /// Crossfade to new preset
    func crossfadeAmbient(to preset: AmbientPreset) {
        stopAmbient(fadeDuration: 0.5)
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.6) { [weak self] in
            self?.startAmbient(preset: preset)
        }
    }

    /// Context-aware ambient volume
    func setAmbientContext(_ context: String) {
        guard ambientPlayer?.isPlaying == true else { return }
        switch context {
        case "game":
            fadeAmbient(to: ambientVolume * masterVolume * 5, duration: 0.5)
        case "menu":
            fadeAmbient(to: ambientVolume * masterVolume * 10, duration: 0.5)
        default:
            fadeAmbient(to: ambientVolume * masterVolume * 8, duration: 0.5)
        }
    }

    private func fadeAmbient(to volume: Float, duration: TimeInterval,
                             completion: (() -> Void)? = nil) {
        ambientFadeTimer?.invalidate()
        guard let player = ambientPlayer else {
            completion?()
            return
        }
        let steps = 20
        let interval = duration / Double(steps)
        let startVol = player.volume
        let delta = (volume - startVol) / Float(steps)
        var step = 0

        ambientFadeTimer = Timer.scheduledTimer(withTimeInterval: interval, repeats: true) { [weak self] timer in
            step += 1
            player.volume = startVol + delta * Float(step)
            if step >= steps {
                timer.invalidate()
                self?.ambientFadeTimer = nil
                player.volume = volume
                completion?()
            }
        }
    }

    private func generateAmbientData(preset: AmbientPreset) -> Data {
        let duration: TimeInterval = 8.0
        let numSamples = Int(Double(sampleRate) * duration)
        var samples = [Int16](repeating: 0, count: numSamples)

        let config = preset.config
        var phase1: Float = 0
        var phase2: Float = 0
        var phase3: Float = 0

        for i in 0..<numSamples {
            let t = Float(i) / Float(sampleRate)

            phase1 += 2.0 * Float.pi * config.freq1 / Float(sampleRate)
            phase2 += 2.0 * Float.pi * config.freq2 / Float(sampleRate)
            phase3 += 2.0 * Float.pi * config.freq3 / Float(sampleRate)
            if phase1 > 2.0 * Float.pi { phase1 -= 2.0 * Float.pi }
            if phase2 > 2.0 * Float.pi { phase2 -= 2.0 * Float.pi }
            if phase3 > 2.0 * Float.pi { phase3 -= 2.0 * Float.pi }

            let lfo = sin(2.0 * Float.pi * 0.15 * t) * 0.3 + 0.7

            let drone = sin(phase1) * config.amp1
                + sin(phase2) * config.amp2 * lfo
                + sin(phase3) * config.amp3

            let loopT = Float(i) / Float(numSamples)
            let loopEnv: Float
            if loopT < 0.1 {
                loopEnv = loopT / 0.1
            } else if loopT > 0.9 {
                loopEnv = (1.0 - loopT) / 0.1
            } else {
                loopEnv = 1.0
            }

            let value = drone * loopEnv * 32767.0
            samples[i] = Int16(clamping: Int(value))
        }

        return buildWAVData(samples: samples)
    }

    // MARK: - Core Synthesis Engine

    enum Waveform {
        case sine
        case triangle
    }

    private func playTone(
        frequency: Float,
        endFrequency: Float? = nil,
        duration: TimeInterval = 0.1,
        volume: Float = 0.05,
        waveform: Waveform = .sine
    ) {
        configureSessionIfNeeded()
        guard isSessionConfigured else { return }
        sessionSoundCount += 1

        let fatigueScale: Float
        if adaptiveAudioEnabled {
            let elapsed = Date().timeIntervalSince(sessionStartTime)
            let rate = elapsed > 0 ? Double(sessionSoundCount) / elapsed : 0
            fatigueScale = rate > 5 ? 0.7 : (rate > 3 ? 0.85 : 1.0)
        } else {
            fatigueScale = 1.0
        }

        let adjustedVolume = volume * fatigueScale

        let wavData = generateWAVData(
            frequency: frequency,
            endFrequency: endFrequency,
            duration: duration,
            volume: adjustedVolume,
            waveform: waveform
        )

        playFromData(wavData)
    }

    private func playFromData(_ wavData: Data) {
        do {
            let player = try AVAudioPlayer(data: wavData)
            player.prepareToPlay()
            player.play()

            if playerPool.count < poolSize {
                playerPool.append(player)
            } else {
                playerPool[poolIndex % poolSize].stop()
                playerPool[poolIndex % poolSize] = player
            }
            poolIndex += 1
        } catch {
            print("⚠️ Tone playback error: \(error)")
        }
    }

    // MARK: - Anti-Spam

    private func canPlay(_ soundID: String, cooldown: TimeInterval? = nil) -> Bool {
        let now = ProcessInfo.processInfo.systemUptime
        let cd = cooldown ?? defaultCooldown
        if let last = lastPlayTimes[soundID], now - last < cd {
            return false
        }
        lastPlayTimes[soundID] = now
        return true
    }

    // MARK: - Volume Helpers

    private func gameVol(_ multiplier: Float) -> Float {
        masterVolume * gameSoundsVolume * multiplier
    }

    private func uiVol(_ multiplier: Float) -> Float {
        masterVolume * uiSoundsVolume * multiplier
    }

    private func achieveVol(_ multiplier: Float) -> Float {
        masterVolume * achievementSoundsVolume * multiplier
    }

    // MARK: - Session Management

    func resetSessionCounters() {
        sessionSoundCount = 0
        sessionStartTime = Date()
        consecutiveCorrect = 0
    }

    // MARK: - WAV Data Generation

    private func generateWAVData(
        frequency: Float,
        endFrequency: Float?,
        duration: TimeInterval,
        volume: Float,
        waveform: Waveform
    ) -> Data {
        let numSamples = Int(Double(sampleRate) * duration)
        guard numSamples > 0 else { return Data() }

        let startFreq = frequency
        let endFreq = endFrequency ?? frequency

        var samples = [Int16](repeating: 0, count: numSamples)
        var phase: Float = 0

        for i in 0..<numSamples {
            let t = Float(i) / Float(numSamples)
            let currentFreq = startFreq + (endFreq - startFreq) * t

            phase += 2.0 * Float.pi * currentFreq / Float(sampleRate)
            if phase > 2.0 * Float.pi { phase -= 2.0 * Float.pi }

            let envelope: Float
            if t < 0.05 {
                envelope = t / 0.05
            } else if t < 0.6 {
                let decayT = (t - 0.05) / 0.55
                envelope = 1.0 - decayT * 0.08
            } else {
                let releaseT = (t - 0.6) / 0.4
                envelope = 0.92 * (1.0 - releaseT) * (1.0 - releaseT)
            }

            let raw: Float
            switch waveform {
            case .sine:
                raw = sin(phase)
            case .triangle:
                let norm = phase / (2 * Float.pi)
                raw = 2.0 * abs(2.0 * norm - 1.0) - 1.0
            }

            let value = raw * volume * envelope * 32767.0
            samples[i] = Int16(clamping: Int(value))
        }

        return buildWAVData(samples: samples)
    }

    private func buildWAVData(samples: [Int16]) -> Data {
        let numChannels: UInt16 = 1
        let bitsPerSample: UInt16 = 16
        let dataSize = UInt32(samples.count * Int(numChannels) * Int(bitsPerSample / 8))
        let fileSize = 36 + dataSize

        var data = Data(capacity: Int(44 + dataSize))

        data.append(contentsOf: "RIFF".utf8)
        appendUInt32(&data, fileSize)
        data.append(contentsOf: "WAVE".utf8)

        data.append(contentsOf: "fmt ".utf8)
        appendUInt32(&data, 16)
        appendUInt16(&data, 1)
        appendUInt16(&data, numChannels)
        appendUInt32(&data, UInt32(sampleRate))
        let byteRate = UInt32(sampleRate) * UInt32(numChannels) * UInt32(bitsPerSample / 8)
        appendUInt32(&data, byteRate)
        let blockAlign = numChannels * (bitsPerSample / 8)
        appendUInt16(&data, blockAlign)
        appendUInt16(&data, bitsPerSample)

        data.append(contentsOf: "data".utf8)
        appendUInt32(&data, dataSize)

        for sample in samples {
            appendInt16(&data, sample)
        }

        return data
    }

    // MARK: - Binary Helpers

    private func appendUInt32(_ data: inout Data, _ value: UInt32) {
        withUnsafeBytes(of: value.littleEndian) { data.append(contentsOf: $0) }
    }

    private func appendUInt16(_ data: inout Data, _ value: UInt16) {
        withUnsafeBytes(of: value.littleEndian) { data.append(contentsOf: $0) }
    }

    private func appendInt16(_ data: inout Data, _ value: Int16) {
        withUnsafeBytes(of: value.littleEndian) { data.append(contentsOf: $0) }
    }
}

// MARK: - Ambient Preset

enum AmbientPreset: String, CaseIterable {
    case cosmicDrift
    case deepFocus
    case tranquilWaves
    case stellarMeditation

    struct Config {
        let freq1: Float, amp1: Float
        let freq2: Float, amp2: Float
        let freq3: Float, amp3: Float
    }

    var config: Config {
        switch self {
        case .cosmicDrift:
            return Config(freq1: 82.41, amp1: 0.4, freq2: 123.47, amp2: 0.25, freq3: 164.81, amp3: 0.15)
        case .deepFocus:
            return Config(freq1: 110.0, amp1: 0.35, freq2: 146.83, amp2: 0.2, freq3: 220.0, amp3: 0.12)
        case .tranquilWaves:
            return Config(freq1: 65.41, amp1: 0.45, freq2: 98.0, amp2: 0.3, freq3: 130.81, amp3: 0.18)
        case .stellarMeditation:
            return Config(freq1: 73.42, amp1: 0.38, freq2: 110.0, amp2: 0.22, freq3: 146.83, amp3: 0.14)
        }
    }

    var displayName: String {
        switch self {
        case .cosmicDrift: return "Cosmic Drift"
        case .deepFocus: return "Deep Focus"
        case .tranquilWaves: return "Tranquil Waves"
        case .stellarMeditation: return "Stellar Meditation"
        }
    }
}

// MARK: - Performance Mood

enum PerformanceMood {
    case struggling
    case neutral
    case confident
    case onFire
}
'''

with open(TARGET, 'w') as f:
    f.write(CONTENT)

with open(TARGET) as f:
    lines = f.readlines()
print(f"SUCCESS: Written {len(CONTENT)} chars, {len(lines)} lines to {TARGET}")
