import AVFoundation
import Foundation
import UIKit

// MARK: - Audio Service

/// Crafted synthesized audio system for LumenLingo.
///
/// Sound Design Philosophy (Sounds.md):
/// - **Warmth Over Precision**: Rounded waveforms with harmonic richness, micro-detuning ±3 cents
/// - **Breath & Decay**: Three envelope presets (Petal/Dew/Spark) with configurable ADSR
/// - **Whisper Rule**: Four-tier volume hierarchy (Whisper/Murmur/Speak/Celebrate), master ≤ 0.05
/// - **Pentatonic Garden**: All frequencies in C major pentatonic, ceiling 784Hz (1047Hz rare)
/// - **Three Waveforms**: Glass (pure/ethereal), Wood (warm/organic), Bell (rich/ceremonial)
/// - **Silence Is a Sound**: Anti-spam, fatigue, celebration rarity, density monitoring
///
/// WAV is generated in-memory (16-bit mono PCM, 44100Hz) via phase accumulation.
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
    var masterVolume: Float = 0.05
    var gameSoundsVolume: Float = 1.0
    var uiSoundsVolume: Float = 1.0
    var achievementSoundsVolume: Float = 1.0
    var ambientVolume: Float = 0.3

    // MARK: - Player Pool

    private var playerPool: [AVAudioPlayer] = []
    private var poolIndex: Int = 0
    private let poolSize = 6

    // MARK: - Anti-Spam & Density

    private var lastPlayTimes: [String: TimeInterval] = [:]
    private let defaultCooldown: TimeInterval = 0.04
    private var recentSoundTimestamps: [TimeInterval] = []
    private var lastSoundTime: TimeInterval = 0
    private var silenceWindowEnd: TimeInterval = 0

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
    private var recentAnswers: [Bool] = []
    private var celebrationTimestamps: [TimeInterval] = []

    private var soundCache: [String: Data] = [:]
    private let cacheQueue = DispatchQueue(label: "audio.cache", qos: .userInitiated)

    private let sampleRate: Int = 44100
    private let detuneRange: Float = 3.0  // ±3 cents

    // MARK: - C Major Pentatonic Reference (Appendix A)

    private enum Freq {
        // Octave 2
        static let G2: Float = 98
        static let A2: Float = 110
        // Octave 3
        static let C3: Float = 131
        static let D3: Float = 147
        static let E3: Float = 165
        static let G3: Float = 196
        static let A3: Float = 220
        // Octave 4
        static let C4: Float = 262
        static let D4: Float = 294
        static let E4: Float = 330
        static let G4: Float = 392
        static let A4: Float = 440
        // Octave 5
        static let C5: Float = 523
        static let D5: Float = 587
        static let E5: Float = 659
        static let G5: Float = 784
        static let A5: Float = 880
        // Octave 6 (rare, celebrations only)
        static let C6: Float = 1047
    }

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
            let warmList: [(key: String, freq: Float, endFreq: Float?, dur: TimeInterval, vol: Float, wf: Waveform, env: Envelope, rich: Float)] = [
                ("cardFlip", Freq.C4, Freq.E4, 0.13, 0.022, .wood, .dew, 0.45),
                ("buttonTap", Freq.D5, nil, 0.03, 0.015, .glass, .spark, 0.10),
                ("tilePick", Freq.E4, nil, 0.10, 0.020, .wood, .dew, 0.42),
                ("tilePlace", Freq.G4, nil, 0.11, 0.023, .wood, .dew, 0.48),
                ("tabSwitch", Freq.C5, nil, 0.04, 0.008, .glass, .petal, 0.0),
            ]
            for item in warmList {
                let data = self.generateWAVData(
                    frequency: item.freq, endFrequency: item.endFreq,
                    duration: item.dur, volume: item.vol, waveform: item.wf,
                    envelope: item.env, richness: item.rich
                )
                DispatchQueue.main.async { self.soundCache[item.key] = data }
            }
        }
    }

    // MARK: - Lifecycle

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
        sessionStartTime = Date()
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

    // ╔══════════════════════════════════════════════════════════════╗
    // ║  SOUND METHODS — Sounds.md Epic 2–12 Implementation        ║
    // ║                                                            ║
    // ║  Volume tiers (via masterVolume=0.05):                     ║
    // ║  Whisper 0.16-0.30  Murmur 0.30-0.50  Speak 0.50-0.70     ║
    // ║  Celebrate 0.70-1.00                                       ║
    // ║                                                            ║
    // ║  Frequencies: C major pentatonic only, ceiling 784Hz       ║
    // ║  (G5), absolute max 1047Hz (C6) for rare celebrations.     ║
    // ║  Harmonics rolled off above 1kHz, zero above 2kHz.         ║
    // ╚══════════════════════════════════════════════════════════════╝

    // MARK: - Flashcard Sounds (Epic 2)

    /// Story 2.1: Card appears — warm wooden tap, like a marimba welcoming you
    /// G4 (392Hz), Wood, Dew envelope — a single warm note that says "here I am"
    func playCardAppear() {
        guard isEnabled, gameSoundsEnabled, flashcardsSoundsEnabled else { return }
        guard canPlay("cardAppear", cooldown: 0.15) else { return }
        playTone(frequency: Freq.G4, duration: 0.14,
                 volume: gameVol(0.36), waveform: .wood, envelope: .dew, richness: 0.40)
    }

    /// Story 2.2: Card flip — rising warmth like turning a page in the sun
    /// C4→E4 (262→330Hz), Wood, Dew — a rising major third, pure joy
    func playCardFlipEnhanced() {
        guard isEnabled, gameSoundsEnabled, flashcardsSoundsEnabled else { return }
        guard canPlay("cardFlip", cooldown: 0.1) else { return }
        if let cached = soundCache["cardFlip"] {
            playFromData(cached)
        } else {
            playTone(frequency: Freq.C4, endFrequency: Freq.E4, duration: 0.13,
                     volume: gameVol(0.44), waveform: .wood, envelope: .dew, richness: 0.45)
        }
    }

    /// Story 2.8: Plink → Glow — warm wooden knock
    /// A4 (440Hz), Wood, Dew — a gentle marimba tap in the warm register
    func playPlink() {
        guard isEnabled, gameSoundsEnabled else { return }
        guard canPlay("plink", cooldown: 0.08) else { return }
        playTone(frequency: Freq.A4, duration: 0.12,
                 volume: gameVol(0.40), waveform: .wood, envelope: .dew, richness: 0.45)
    }

    /// Story 2.3: Swipe right (correct) — joyous rising steel-drum phrase
    /// Two-note arpeggio: C4→G4, Bell with rich harmonics — a little celebration
    func playSwipeRight() {
        guard isEnabled, gameSoundsEnabled, flashcardsSoundsEnabled else { return }
        guard canPlay("swipeRight", cooldown: 0.12) else { return }
        // Rising perfect fifth — the most joyous interval in music
        playTone(frequency: Freq.C4, duration: 0.15,
                 volume: gameVol(0.50), waveform: .bell, envelope: .dew, richness: 0.50)
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.06) { [weak self] in
            self?.playTone(frequency: Freq.G4, duration: 0.18,
                           volume: self?.gameVol(0.56) ?? 0.028,
                           waveform: .bell, envelope: .dew, richness: 0.55)
        }
    }

    /// Story 2.4: Swipe left (still learning) — warm gentle nudge, not cold
    /// G4→E4 (392→330Hz), Wood, Dew — falling third but *warm*, like "no worries"
    func playSwipeLeft() {
        guard isEnabled, gameSoundsEnabled, flashcardsSoundsEnabled else { return }
        guard canPlay("swipeLeft", cooldown: 0.12) else { return }
        playTone(frequency: Freq.G4, endFrequency: Freq.E4, duration: 0.12,
                 volume: gameVol(0.32), waveform: .wood, envelope: .dew, richness: 0.35)
    }

    /// Story 2.5: Mastery progression — climbing the warm scale like sunrise
    /// All Wood→Bell, rich harmonics throughout — every level feels warm and earned
    func playMasteryProgress(level: Int) {
        guard isEnabled, gameSoundsEnabled, flashcardsSoundsEnabled else { return }
        guard canPlay("mastery", cooldown: 0.15) else { return }
        let freq: Float
        let rich: Float
        let wf: Waveform
        switch level {
        case 0...2:  freq = Freq.C4; wf = .wood; rich = 0.40
        case 3...4:  freq = Freq.E4; wf = .wood; rich = 0.45
        case 5...6:  freq = Freq.G4; wf = .bell; rich = 0.50
        default:     freq = Freq.A4; wf = .bell; rich = 0.55
        }
        playTone(frequency: freq, duration: 0.15, volume: gameVol(0.44),
                 waveform: wf, envelope: .dew, richness: rich)
    }

    /// Story 2.6: Next category — warm wooden scroll, like flipping through vacation photos
    /// C4→E4 (262→330Hz), Wood, Dew
    func playCategoryNext() {
        guard isEnabled, gameSoundsEnabled else { return }
        guard canPlay("catNext", cooldown: 0.2) else { return }
        playTone(frequency: Freq.C4, endFrequency: Freq.E4, duration: 0.10,
                 volume: gameVol(0.30), waveform: .wood, envelope: .dew, richness: 0.35)
    }

    /// Previous category
    /// E4→C4 (330→262Hz), Wood, Dew
    func playCategoryPrev() {
        guard isEnabled, gameSoundsEnabled else { return }
        guard canPlay("catPrev", cooldown: 0.2) else { return }
        playTone(frequency: Freq.E4, endFrequency: Freq.C4, duration: 0.10,
                 volume: gameVol(0.30), waveform: .wood, envelope: .dew, richness: 0.35)
    }

    /// Story 2.7: XP gain — bright bell sparkle like a coin dropping in the sun
    /// G4 (392Hz), Bell, Spark — warm register, rich, quick
    func playXPGain(amount: Int) {
        guard isEnabled, achievementSoundsEnabled else { return }
        guard canPlay("xpGain", cooldown: 0.3) else { return }
        playTone(frequency: Freq.G4, duration: 0.08, volume: achieveVol(0.36),
                 waveform: .bell, envelope: .spark, richness: 0.45)
    }

    // MARK: - Word Builder Sounds (Epic 3)

    /// Story 3.1: Tile picked — a warm wooden pluck, like picking a mango
    /// E4 (330Hz), Wood, Dew — warm snap with rich body
    func playTilePick(position: Int, total: Int) {
        guard isEnabled, gameSoundsEnabled, wordBuilderSoundsEnabled else { return }
        guard canPlay("tilePick", cooldown: 0.04) else { return }
        let richVariation = Float(position) / max(Float(total), 1) * 0.08
        playTone(frequency: Freq.E4, duration: 0.10,
                 volume: gameVol(0.40), waveform: .wood, envelope: .dew,
                 richness: 0.42 + richVariation)
    }

    /// Tile pick (no position)
    func playTilePick() {
        guard isEnabled, gameSoundsEnabled else { return }
        guard canPlay("tilePick", cooldown: 0.04) else { return }
        if let cached = soundCache["tilePick"] {
            playFromData(cached)
        } else {
            playTone(frequency: Freq.E4, duration: 0.10,
                     volume: gameVol(0.40), waveform: .wood, envelope: .dew, richness: 0.42)
        }
    }

    /// Story 3.3: Tile returned — warm little knock back, like setting down a shell
    /// D4 (294Hz), Wood, Dew — lower than pick, still warm
    func playTileReturn(position: Int = 0, total: Int = 1) {
        guard isEnabled, gameSoundsEnabled, wordBuilderSoundsEnabled else { return }
        guard canPlay("tileReturn", cooldown: 0.04) else { return }
        playTone(frequency: Freq.D4, duration: 0.09,
                 volume: gameVol(0.32), waveform: .wood, envelope: .dew, richness: 0.38)
    }

    /// Story 3.2: Slot filled — satisfying wooden snap, like a puzzle piece clicking home
    /// G4 (392Hz), Wood, Dew — solid, warm, "yes that fits"
    func playSlotFill(slotIndex: Int, totalSlots: Int) {
        guard isEnabled, gameSoundsEnabled, wordBuilderSoundsEnabled else { return }
        guard canPlay("slotFill", cooldown: 0.03) else { return }
        playTone(frequency: Freq.G4, duration: 0.11,
                 volume: gameVol(0.46), waveform: .wood, envelope: .dew, richness: 0.48)
    }

    /// Story 3.2: Tile snap into place — same satisfying click
    /// G4 (392Hz), Wood, Dew
    func playTilePlace() {
        guard isEnabled, gameSoundsEnabled else { return }
        guard canPlay("tilePlace", cooldown: 0.04) else { return }
        if let cached = soundCache["tilePlace"] {
            playFromData(cached)
        } else {
            playTone(frequency: Freq.G4, duration: 0.11,
                     volume: gameVol(0.46), waveform: .wood, envelope: .dew, richness: 0.48)
        }
    }

    /// Story 3.4: Word completed — joyous ascending marimba run, like a steel drum melody
    /// C4→E4→G4→A4, Wood/Bell blend — each note richer, building to delight
    func playWordComplete(length: Int) {
        guard isEnabled, gameSoundsEnabled, wordBuilderSoundsEnabled else { return }
        guard canPlay("wordComplete", cooldown: 0.3) else { return }
        let notes: [(freq: Float, delay: TimeInterval, vol: Float, wf: Waveform, rich: Float)] = [
            (Freq.C4, 0,     gameVol(0.44), .wood, 0.42),
            (Freq.E4, 0.05,  gameVol(0.50), .wood, 0.48),
            (Freq.G4, 0.10,  gameVol(0.56), .bell, 0.52),
            (Freq.A4, 0.15,  gameVol(0.60), .bell, 0.55),
        ]
        for note in notes {
            DispatchQueue.main.asyncAfter(deadline: .now() + note.delay) { [weak self] in
                self?.playTone(frequency: note.freq, duration: 0.14,
                               volume: note.vol, waveform: note.wf,
                               envelope: .dew, richness: note.rich)
            }
        }
        // For 6+ letter words, add a warm bass resonance
        if length >= 6 {
            playTone(frequency: Freq.C3, duration: 0.25, volume: gameVol(0.20),
                     waveform: .wood, envelope: .dew, richness: 0.40)
        }
    }

    /// Story 3.5: Word correct — warm major chord, like a sunny ¡sí!
    /// C4+E4+G4 simultaneous, Bell — full, resonant, joyous
    func playWordCorrect() {
        guard isEnabled, gameSoundsEnabled else { return }
        guard canPlay("wordCorrect", cooldown: 0.2) else { return }
        // Simultaneous warm major triad
        playTone(frequency: Freq.C4, duration: 0.18, volume: gameVol(0.50),
                 waveform: .bell, envelope: .dew, richness: 0.50)
        playTone(frequency: Freq.E4, duration: 0.18, volume: gameVol(0.40),
                 waveform: .bell, envelope: .dew, richness: 0.45)
        playTone(frequency: Freq.G4, duration: 0.18, volume: gameVol(0.36),
                 waveform: .bell, envelope: .dew, richness: 0.42)
    }

    /// Story 3.6: Word wrong — warm "not quite" — like a friend saying "try again"
    /// A3 (220Hz), Wood, Dew — low, warm, unhurried, not punishing
    func playWordWrong() {
        guard isEnabled, gameSoundsEnabled, wordBuilderSoundsEnabled else { return }
        guard canPlay("wordWrong", cooldown: 0.15) else { return }
        playTone(frequency: Freq.A3, duration: 0.14,
                 volume: gameVol(0.30), waveform: .wood, envelope: .dew, richness: 0.35)
    }

    /// Letter cleared from slot — soft wooden release
    /// D4 (294Hz), Wood, Dew
    func playLetterClear(index: Int = 0, total: Int = 1) {
        guard isEnabled, gameSoundsEnabled, wordBuilderSoundsEnabled else { return }
        guard canPlay("letterClear", cooldown: 0.03) else { return }
        playTone(frequency: Freq.D4, duration: 0.08, volume: gameVol(0.28),
                 waveform: .wood, envelope: .dew, richness: 0.35)
    }

    /// Story 3.7: Hint available — gentle bell tap, "psst, over here"
    /// A4 (440Hz), Bell, Dew — warm, not clinical
    func playHintAvailable() {
        guard isEnabled, gameSoundsEnabled, wordBuilderSoundsEnabled else { return }
        guard canPlay("hintAvail", cooldown: 0.5) else { return }
        playTone(frequency: Freq.A4, duration: 0.10, volume: gameVol(0.28),
                 waveform: .bell, envelope: .dew, richness: 0.40)
    }

    /// Story 3.7: Hint revealed — warm descending wooden run
    /// G4→E4→C4, Wood, Dew — each note warm and present
    func playHintReveal(position: Int = 0) {
        guard isEnabled, gameSoundsEnabled, wordBuilderSoundsEnabled else { return }
        guard canPlay("hintReveal", cooldown: 0.1) else { return }
        let notes: [(freq: Float, delay: TimeInterval, vol: Float)] = [
            (Freq.G4, 0,    gameVol(0.36)),
            (Freq.E4, 0.04, gameVol(0.32)),
            (Freq.C4, 0.08, gameVol(0.28)),
        ]
        for note in notes {
            DispatchQueue.main.asyncAfter(deadline: .now() + note.delay) { [weak self] in
                self?.playTone(frequency: note.freq, duration: 0.10,
                               volume: note.vol, waveform: .wood,
                               envelope: .dew, richness: 0.40)
            }
        }
    }

    /// Story 3.7: Hint sparkle — bright bell accent
    /// E4 (330Hz), Bell, Spark — in the warm register
    func playHintSparkle() {
        guard isEnabled, gameSoundsEnabled else { return }
        guard canPlay("hintSparkle", cooldown: 0.15) else { return }
        playTone(frequency: Freq.E4, duration: 0.07, volume: gameVol(0.24),
                 waveform: .bell, envelope: .spark, richness: 0.42)
    }

    /// Skip word — breezy pass, like a wave rolling by
    /// E4→C4 (330→262Hz), Wood, Dew — warm, unhurried
    func playSkipWord() {
        guard isEnabled, gameSoundsEnabled, wordBuilderSoundsEnabled else { return }
        guard canPlay("skipWord", cooldown: 0.3) else { return }
        playTone(frequency: Freq.E4, endFrequency: Freq.C4, duration: 0.12,
                 volume: gameVol(0.32), waveform: .wood, envelope: .dew, richness: 0.38)
    }

    /// Timer tick — gentle wooden pulse, increases warmth with urgency
    /// C4/D4/E4 by urgency, Wood, Dew — never cold or clinical
    func playTimerTick(secondsRemaining: Int) {
        guard isEnabled, gameSoundsEnabled, wordBuilderSoundsEnabled else { return }
        guard canPlay("timerTick", cooldown: 0.8) else { return }
        let freq: Float
        let vol: Float
        if secondsRemaining <= 5 {
            freq = Freq.E4; vol = gameVol(0.30)
        } else if secondsRemaining <= 10 {
            freq = Freq.D4; vol = gameVol(0.24)
        } else {
            freq = Freq.C4; vol = gameVol(0.20)
        }
        playTone(frequency: freq, duration: 0.06, volume: vol,
                 waveform: .wood, envelope: .dew, richness: 0.30)
    }

    /// Timer expired — warm settling, like a wave receding
    /// E4→C4 (330→262Hz), Wood, Dew — warm and complete
    func playTimerExpired() {
        guard isEnabled, gameSoundsEnabled, wordBuilderSoundsEnabled else { return }
        guard canPlay("timerExpired", cooldown: 0.5) else { return }
        playTone(frequency: Freq.E4, endFrequency: Freq.C4, duration: 0.18,
                 volume: gameVol(0.34), waveform: .wood, envelope: .dew, richness: 0.40)
    }

    // MARK: - Grammar Sounds (Epic 4)

    /// Story 4.1: Question appears — warm marimba invitation
    /// G4 (392Hz), Wood, Dew — solid and warm, says "your turn"
    func playQuestionAppear() {
        guard isEnabled, gameSoundsEnabled, grammarSoundsEnabled else { return }
        guard canPlay("questionAppear", cooldown: 0.2) else { return }
        playTone(frequency: Freq.G4, duration: 0.13, volume: gameVol(0.36),
                 waveform: .wood, envelope: .dew, richness: 0.42)
    }

    /// Story 4.2: Answer selected — confident wooden tap
    /// A4 (440Hz), Wood, Dew — definite and warm, "I choose this!"
    func playAnswerSelect() {
        guard isEnabled, gameSoundsEnabled, grammarSoundsEnabled else { return }
        guard canPlay("answerSelect", cooldown: 0.06) else { return }
        playTone(frequency: Freq.A4, duration: 0.09, volume: gameVol(0.40),
                 waveform: .wood, envelope: .dew, richness: 0.42)
    }

    /// Story 4.3: Grammar correct — warm rising celebration, streak builds richness
    /// G4→A4/C5/E5 by streak, Bell, Dew — brighter and richer with each consecutive win
    func playGrammarCorrect(consecutiveCount: Int = 1) {
        guard isEnabled, gameSoundsEnabled, grammarSoundsEnabled else { return }
        guard canPlay("grammarCorrect", cooldown: 0.1) else { return }
        consecutiveCorrect = consecutiveCount
        let targetFreq: Float
        let rich: Float
        if consecutiveCount >= 5 {
            targetFreq = Freq.E4; rich = 0.60
        } else if consecutiveCount >= 3 {
            targetFreq = Freq.C5; rich = 0.52   // Rare octave above only for streak
        } else {
            targetFreq = Freq.A4; rich = 0.45
        }
        playTone(frequency: Freq.G4, endFrequency: targetFreq, duration: 0.15,
                 volume: gameVol(0.54), waveform: .bell, envelope: .dew, richness: rich)
        // 5+ streak: add warm resonance bed
        if consecutiveCount >= 5 {
            playTone(frequency: Freq.C4, duration: 0.22, volume: gameVol(0.20),
                     waveform: .wood, envelope: .dew, richness: 0.40)
        }
    }

    /// Story 4.4: Grammar wrong — warm low note, like a gentle "hmm, not that one"
    /// A3 (220Hz), Wood, Dew — deep, warm, forgiving
    func playGrammarWrong() {
        guard isEnabled, gameSoundsEnabled, grammarSoundsEnabled else { return }
        guard canPlay("grammarWrong", cooldown: 0.15) else { return }
        consecutiveCorrect = 0
        playTone(frequency: Freq.A3, duration: 0.14,
                 volume: gameVol(0.30), waveform: .wood, envelope: .dew, richness: 0.35)
        enforceSilence(duration: 0.08)
    }

    /// Story 4.5: Explanation revealed — warm rising phrase, like opening a window
    /// C4→E4 (262→330Hz), Wood, Dew — warm and inviting
    func playExplanationReveal() {
        guard isEnabled, gameSoundsEnabled, grammarSoundsEnabled else { return }
        guard canPlay("explanationReveal", cooldown: 0.3) else { return }
        playTone(frequency: Freq.C4, endFrequency: Freq.E4, duration: 0.14,
                 volume: gameVol(0.32), waveform: .wood, envelope: .dew, richness: 0.40)
    }

    /// Panel expand — warm wooden unfold
    /// C4→E4, Wood, Dew
    func playPanelExpand() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("panelExpand", cooldown: 0.15) else { return }
        playTone(frequency: Freq.C4, endFrequency: Freq.E4, duration: 0.10,
                 volume: uiVol(0.32), waveform: .wood, envelope: .dew, richness: 0.38)
    }

    /// Panel collapse — warm wooden fold
    /// E4→C4, Wood, Dew
    func playPanelCollapse() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("panelCollapse", cooldown: 0.15) else { return }
        playTone(frequency: Freq.E4, endFrequency: Freq.C4, duration: 0.10,
                 volume: uiVol(0.32), waveform: .wood, envelope: .dew, richness: 0.38)
    }

    /// "Got It!" success — warm ascending marimba phrase
    /// C4→E4→G4, Wood, Dew — rich and joyous
    func playWarmPulse() {
        guard isEnabled, gameSoundsEnabled else { return }
        guard canPlay("warmPulse", cooldown: 0.1) else { return }
        let notes: [(freq: Float, delay: TimeInterval)] = [
            (Freq.C4, 0), (Freq.E4, 0.05), (Freq.G4, 0.10),
        ]
        for note in notes {
            DispatchQueue.main.asyncAfter(deadline: .now() + note.delay) { [weak self] in
                self?.playTone(frequency: note.freq, duration: 0.16,
                               volume: self?.gameVol(0.50) ?? 0.025,
                               waveform: .wood, envelope: .dew, richness: 0.48)
            }
        }
    }

    /// "Still Learning" nudge — warm low wooden note
    /// A3 (220Hz), Wood, Dew — gentle and supportive
    func playSoftNudge() {
        guard isEnabled, gameSoundsEnabled else { return }
        guard canPlay("softNudge", cooldown: 0.1) else { return }
        playTone(frequency: Freq.A3, duration: 0.14,
                 volume: gameVol(0.30), waveform: .wood, envelope: .dew, richness: 0.35)
    }

    /// Performance-based mood
    func setGrammarMood(_ mood: PerformanceMood) {
        currentMood = mood
    }

    /// Adaptive: acknowledge improvement — warm rising wooden glow
    /// G4→A4, Wood, Dew — gentle warmth
    func playPerformanceImproved() {
        guard isEnabled, gameSoundsEnabled, adaptiveAudioEnabled else { return }
        guard canPlay("perfImproved", cooldown: 2.0) else { return }
        playTone(frequency: Freq.G4, endFrequency: Freq.A4, duration: 0.18,
                 volume: gameVol(0.44), waveform: .wood, envelope: .dew, richness: 0.48)
    }

    // MARK: - Navigation & UI Sounds (Epic 5)

    /// Story 5.1: Tab bar switch — single constant breath
    /// C5 (523Hz), Glass, Petal, Whisper tier (0.008), richness 0.0
    func playTabSwitch(tabIndex: Int = 0) {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("tabSwitch", cooldown: 0.12) else { return }
        if let cached = soundCache["tabSwitch"] {
            playFromData(cached)
        } else {
            playTone(frequency: Freq.C5, duration: 0.04, volume: uiVol(0.16),
                     waveform: .glass, envelope: .petal, richness: 0.0)
        }
    }

    /// Dashboard game card tapped
    /// E4→G4 (330→392Hz), Wood, Dew, Murmur tier
    func playGameCardTap(game: String = "") {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("gameCardTap", cooldown: 0.15) else { return }
        playTone(frequency: Freq.E4, endFrequency: Freq.G4, duration: 0.07,
                 volume: uiVol(0.28), waveform: .wood, envelope: .dew, richness: 0.25)
    }

    /// Story 5.2: Navigation push — stepping forward
    /// C4→E4 (262→330Hz), Glass, Petal, Whisper tier (0.010)
    func playNavPush() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("navPush", cooldown: 0.15) else { return }
        playTone(frequency: Freq.C4, endFrequency: Freq.E4, duration: 0.08,
                 volume: uiVol(0.20), waveform: .glass, envelope: .petal, richness: 0.05)
    }

    /// Story 5.2: Navigation pop — returning home
    /// E4→C4 (330→262Hz), Glass, Petal, Whisper tier (0.010)
    func playNavPop() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("navPop", cooldown: 0.15) else { return }
        playTone(frequency: Freq.E4, endFrequency: Freq.C4, duration: 0.08,
                 volume: uiVol(0.20), waveform: .glass, envelope: .petal, richness: 0.05)
    }

    /// Story 5.3: Sheet presented — curtain lifts
    /// A4→C5 (440→523Hz), Glass, Petal, Whisper tier (0.010)
    func playSheetPresent() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("sheetPresent", cooldown: 0.2) else { return }
        playTone(frequency: Freq.A4, endFrequency: Freq.C5, duration: 0.10,
                 volume: uiVol(0.20), waveform: .glass, envelope: .petal, richness: 0.05)
    }

    /// Story 5.3: Sheet dismissed — curtain settles
    /// C5→A4 (523→440Hz), Glass, Petal, Whisper tier (0.010)
    func playSheetDismiss() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("sheetDismiss", cooldown: 0.2) else { return }
        playTone(frequency: Freq.C5, endFrequency: Freq.A4, duration: 0.10,
                 volume: uiVol(0.20), waveform: .glass, envelope: .petal, richness: 0.05)
    }

    /// Dashboard stats ready
    /// G4 (392Hz), Glass, Dew, Whisper tier
    func playStatsReady() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("statsReady", cooldown: 0.5) else { return }
        playTone(frequency: Freq.G4, duration: 0.10, volume: uiVol(0.16),
                 waveform: .glass, envelope: .dew, richness: 0.15)
    }

    /// Streak alive notification
    /// E4→G4 (330→392Hz), Wood, Dew, Murmur tier
    func playStreakAlive() {
        guard isEnabled, achievementSoundsEnabled else { return }
        guard canPlay("streakAlive", cooldown: 1.0) else { return }
        let notes: [(Float, TimeInterval)] = [(Freq.E4, 0), (Freq.G4, 0.06)]
        for (freq, delay) in notes {
            DispatchQueue.main.asyncAfter(deadline: .now() + delay) { [weak self] in
                self?.playTone(frequency: freq, duration: 0.12,
                               volume: self?.achieveVol(0.36) ?? 0.018,
                               waveform: .wood, envelope: .dew, richness: 0.30)
            }
        }
    }

    /// Navigation whoosh — gentle sweep
    /// G4→C4 (392→262Hz), Glass, Dew, Murmur tier
    func playWhoosh() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("whoosh", cooldown: 0.12) else { return }
        playTone(frequency: Freq.G4, endFrequency: Freq.C4, duration: 0.12,
                 volume: uiVol(0.24), waveform: .glass, envelope: .dew, richness: 0.10)
    }

    /// Story 5.4: Subtle UI click — generic tiny confirmation
    /// C5 (523Hz), Glass, Spark, Whisper tier (0.010)
    func playSoftClick() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("softClick", cooldown: 0.05) else { return }
        playTone(frequency: Freq.C5, duration: 0.02, volume: uiVol(0.20),
                 waveform: .glass, envelope: .spark, richness: 0.0)
    }

    /// Story 5.4: Button tap — confirming press
    /// D5 (587Hz), Glass, Spark, Murmur tier (0.015)
    func playButtonTap() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("buttonTap", cooldown: 0.08) else { return }
        if let cached = soundCache["buttonTap"] {
            playFromData(cached)
        } else {
            playTone(frequency: Freq.D5, duration: 0.03, volume: uiVol(0.30),
                     waveform: .glass, envelope: .spark, richness: 0.10)
        }
    }

    /// Story 5.4: Toggle on — rising minor third
    /// C5→E5 (523→659Hz), Glass, Dew, Murmur tier (0.015)
    func playToggleOn() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("toggleOn", cooldown: 0.1) else { return }
        playTone(frequency: Freq.C5, endFrequency: Freq.E5, duration: 0.05,
                 volume: uiVol(0.30), waveform: .glass, envelope: .dew, richness: 0.10)
    }

    /// Story 5.4: Toggle off — falling minor third
    /// E5→C5 (659→523Hz), Glass, Dew, Whisper tier (0.012)
    func playToggleOff() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("toggleOff", cooldown: 0.1) else { return }
        playTone(frequency: Freq.E5, endFrequency: Freq.C5, duration: 0.05,
                 volume: uiVol(0.24), waveform: .glass, envelope: .dew, richness: 0.10)
    }

    /// Story 5.1: Profile section tab switch — same as tab switch
    /// C5 (523Hz), Glass, Petal, Whisper tier (0.008)
    func playProfileTabSwitch() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("profileTab", cooldown: 0.12) else { return }
        playTone(frequency: Freq.C5, duration: 0.04, volume: uiVol(0.16),
                 waveform: .glass, envelope: .petal, richness: 0.0)
    }

    /// Story 5.5: Slider continuous tick — smooth surface texture
    /// G4 base + pos×131Hz (392→523Hz), Glass, Spark, Whisper tier (0.006)
    func playSliderTick(normalizedPosition: Float = 0.5) {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("sliderTick", cooldown: 0.08) else { return }
        let freq = Freq.G4 + normalizedPosition * 131.0  // G4(392) to C5(523)
        playTone(frequency: freq, duration: 0.015, volume: uiVol(0.12),
                 waveform: .glass, envelope: .spark, richness: 0.0)
    }

    /// Story 5.5: Slider hits min/max
    /// G4 or C5, Glass, Dew, Whisper tier (0.010)
    func playSliderEndpoint() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("sliderEnd", cooldown: 0.15) else { return }
        playTone(frequency: Freq.C5, duration: 0.03, volume: uiVol(0.20),
                 waveform: .glass, envelope: .dew, richness: 0.05)
    }

    /// Color scheme selected
    /// G4→C5, Glass, Dew, Murmur tier
    func playSchemeSelect() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("schemeSelect", cooldown: 0.15) else { return }
        playTone(frequency: Freq.G4, endFrequency: Freq.C5, duration: 0.10,
                 volume: uiVol(0.24), waveform: .glass, envelope: .dew, richness: 0.15)
    }

    /// Story 5.5: Pagination page change
    /// A4 (440Hz), Glass, Petal, Whisper tier (0.008)
    func playPageChange() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("pageChange", cooldown: 0.1) else { return }
        playTone(frequency: Freq.A4, duration: 0.04, volume: uiVol(0.16),
                 waveform: .glass, envelope: .petal, richness: 0.0)
    }

    /// Story 5.6: Search field focused — starting to look
    /// A4 (440Hz), Glass, Petal, Whisper tier (0.008)
    func playSearchFocus() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("searchFocus", cooldown: 0.3) else { return }
        playTone(frequency: Freq.A4, duration: 0.04, volume: uiVol(0.16),
                 waveform: .glass, envelope: .petal, richness: 0.0)
    }

    /// Story 5.6: Search found results
    /// A4→C5 (440→523Hz), Glass, Dew, Whisper tier (0.012)
    func playSearchFound() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("searchFound", cooldown: 0.3) else { return }
        playTone(frequency: Freq.A4, endFrequency: Freq.C5, duration: 0.06,
                 volume: uiVol(0.24), waveform: .glass, envelope: .dew, richness: 0.05)
    }

    /// Story 5.6: Search returned empty — calm acceptance
    /// A4→G4 (440→392Hz), Glass, Petal, Whisper tier (0.008)
    func playSearchEmpty() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("searchEmpty", cooldown: 0.5) else { return }
        playTone(frequency: Freq.A4, endFrequency: Freq.G4, duration: 0.06,
                 volume: uiVol(0.16), waveform: .glass, envelope: .petal, richness: 0.0)
    }

    // MARK: - Journey & Progress Sounds

    /// Journey screen arrival
    /// C4→E4→G4 chord, Glass, Petal, Murmur tier
    func playJourneyArrival() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("journeyArrival", cooldown: 0.5) else { return }
        let chord: [(Float, TimeInterval)] = [(Freq.C4, 0), (Freq.E4, 0.03), (Freq.G4, 0.06)]
        for (freq, delay) in chord {
            DispatchQueue.main.asyncAfter(deadline: .now() + delay) { [weak self] in
                self?.playTone(frequency: freq, duration: 0.20, volume: self?.uiVol(0.28) ?? 0.014,
                               waveform: .glass, envelope: .petal, richness: 0.20)
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
            let notes: [(Float, TimeInterval)] = [(Freq.E4, 0), (Freq.G4, 0.05), (Freq.C5, 0.10)]
            for (freq, delay) in notes {
                DispatchQueue.main.asyncAfter(deadline: .now() + delay) { [weak self] in
                    self?.playTone(frequency: freq, duration: 0.15,
                                   volume: self?.achieveVol(0.44) ?? 0.022,
                                   waveform: .wood, envelope: .dew, richness: 0.30)
                }
            }
        } else if days >= 1 {
            playTone(frequency: Freq.E4, duration: 0.12, volume: achieveVol(0.36),
                     waveform: .wood, envelope: .dew, richness: 0.25)
        }
    }

    /// Milestone unlocked — same descending chime as achievement
    /// G5→E5→C5, Bell, Spark/Dew, Celebrate tier
    func playMilestoneUnlocked() {
        guard isEnabled, achievementSoundsEnabled else { return }
        guard canPlay("milestoneUnlocked", cooldown: 0.5) else { return }
        guard canCelebrate() else { return }
        let notes: [(freq: Float, delay: TimeInterval, vol: Float, rich: Float, env: Envelope, dur: TimeInterval)] = [
            (Freq.G5, 0,    0.042, 0.40, .spark, 0.08),
            (Freq.E5, 0.04, 0.038, 0.35, .spark, 0.08),
            (Freq.C5, 0.08, 0.035, 0.30, .dew,   0.12),
        ]
        for note in notes {
            DispatchQueue.main.asyncAfter(deadline: .now() + note.delay) { [weak self] in
                self?.playTone(frequency: note.freq, duration: note.dur,
                               volume: note.vol, waveform: .bell,
                               envelope: note.env, richness: note.rich)
            }
        }
        enforceSilence(duration: 0.4)
    }

    /// Milestone locked — muted acknowledgment
    /// E4 (330Hz), Glass, Dew, Whisper tier
    func playMilestoneLocked() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("milestoneLocked", cooldown: 0.3) else { return }
        playTone(frequency: Freq.E4, duration: 0.08, volume: uiVol(0.16),
                 waveform: .glass, envelope: .dew, richness: 0.10)
    }

    /// Stat reveal
    /// G4 or E4, Glass, Dew, Murmur tier
    func playStatReveal(isHighPerformance: Bool = false) {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("statReveal", cooldown: 0.15) else { return }
        let freq: Float = isHighPerformance ? Freq.G4 : Freq.E4
        playTone(frequency: freq, duration: 0.08, volume: uiVol(0.24),
                 waveform: .glass, envelope: .dew, richness: 0.15)
    }

    /// Reset progress warning
    /// A3 (220Hz), Glass, Petal, Murmur tier
    func playResetWarning() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("resetWarning", cooldown: 0.5) else { return }
        playTone(frequency: Freq.A3, duration: 0.20, volume: uiVol(0.30),
                 waveform: .glass, envelope: .petal, richness: 0.15)
    }

    /// Reset confirmed
    /// E4→C4 (330→262Hz), Glass, Petal, Murmur tier
    func playResetConfirmed() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("resetConfirmed", cooldown: 0.5) else { return }
        playTone(frequency: Freq.E4, endFrequency: Freq.C4, duration: 0.25,
                 volume: uiVol(0.28), waveform: .glass, envelope: .petal, richness: 0.10)
    }

    /// Reset cancelled
    /// C5 (523Hz), Glass, Dew, Murmur tier
    func playResetCancelled() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("resetCancelled", cooldown: 0.3) else { return }
        playTone(frequency: Freq.C5, duration: 0.10, volume: uiVol(0.24),
                 waveform: .glass, envelope: .dew, richness: 0.15)
    }

    // MARK: - Categories & Favorites

    /// Category card tapped
    /// G4 (392Hz), Glass, Dew, Murmur tier
    func playCategoryTap() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("categoryTap", cooldown: 0.1) else { return }
        playTone(frequency: Freq.G4, duration: 0.06, volume: uiVol(0.24),
                 waveform: .glass, envelope: .dew, richness: 0.15)
    }

    /// Favorite added
    /// E4→G4, Glass, Dew, Murmur tier
    func playFavoriteAdd() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("favAdd", cooldown: 0.15) else { return }
        playTone(frequency: Freq.E4, endFrequency: Freq.G4, duration: 0.10,
                 volume: uiVol(0.28), waveform: .glass, envelope: .dew, richness: 0.20)
    }

    /// Favorite removed
    /// G4→E4, Glass, Dew, Murmur tier
    func playFavoriteRemove() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("favRemove", cooldown: 0.15) else { return }
        playTone(frequency: Freq.G4, endFrequency: Freq.E4, duration: 0.10,
                 volume: uiVol(0.24), waveform: .glass, envelope: .dew, richness: 0.15)
    }

    // MARK: - Language Selection

    /// Language option hovered
    /// E4 (330Hz), Glass, Spark, Whisper tier
    func playLanguageHover() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("langHover", cooldown: 0.08) else { return }
        playTone(frequency: Freq.E4, duration: 0.04, volume: uiVol(0.12),
                 waveform: .glass, envelope: .spark, richness: 0.05)
    }

    /// Language pair confirmed
    /// C4→E4→G4, Wood, Dew, Murmur tier
    func playLanguageConfirmed() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("langConfirmed", cooldown: 0.3) else { return }
        let notes: [(Float, TimeInterval)] = [(Freq.C4, 0), (Freq.E4, 0.06), (Freq.G4, 0.12)]
        for (freq, delay) in notes {
            DispatchQueue.main.asyncAfter(deadline: .now() + delay) { [weak self] in
                self?.playTone(frequency: freq, duration: 0.15,
                               volume: self?.uiVol(0.36) ?? 0.018,
                               waveform: .wood, envelope: .dew, richness: 0.30)
            }
        }
    }

    /// First-ever language selected — welcome chime
    /// C4→D4→E4→G4→A4, Bell, Petal, Speak tier
    func playFirstLanguageSelected() {
        guard isEnabled, achievementSoundsEnabled else { return }
        guard canPlay("firstLang", cooldown: 1.0) else { return }
        let welcome: [(Float, TimeInterval)] = [
            (Freq.C4, 0), (Freq.D4, 0.10), (Freq.E4, 0.20),
            (Freq.G4, 0.30), (Freq.A4, 0.40),
        ]
        for (freq, delay) in welcome {
            DispatchQueue.main.asyncAfter(deadline: .now() + delay) { [weak self] in
                self?.playTone(frequency: freq, duration: 0.22,
                               volume: self?.achieveVol(0.56) ?? 0.028,
                               waveform: .bell, envelope: .petal, richness: 0.50)
            }
        }
    }

    // MARK: - Membership & IAP

    /// Membership page arrival — warm chord
    /// C4→E4→G4, Glass, Petal, Murmur tier
    func playMembershipArrival() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("memberArrival", cooldown: 0.5) else { return }
        let chord: [(Float, TimeInterval)] = [(Freq.C4, 0), (Freq.E4, 0.04), (Freq.G4, 0.08)]
        for (freq, delay) in chord {
            DispatchQueue.main.asyncAfter(deadline: .now() + delay) { [weak self] in
                self?.playTone(frequency: freq, duration: 0.25, volume: self?.uiVol(0.28) ?? 0.014,
                               waveform: .glass, envelope: .petal, richness: 0.20)
            }
        }
    }

    /// Tier card selected
    /// C4→G4 (up) or G4→C4 (down), Glass, Dew, Murmur tier
    func playTierSelect(isUpgrade: Bool = true) {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("tierSelect", cooldown: 0.15) else { return }
        if isUpgrade {
            playTone(frequency: Freq.C4, endFrequency: Freq.G4, duration: 0.12,
                     volume: uiVol(0.28), waveform: .glass, envelope: .dew, richness: 0.20)
        } else {
            playTone(frequency: Freq.G4, endFrequency: Freq.C4, duration: 0.12,
                     volume: uiVol(0.24), waveform: .glass, envelope: .dew, richness: 0.15)
        }
    }

    /// Purchase initiated
    /// C4→E4, Glass, Dew, Murmur tier
    func playPurchaseInitiated() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("purchaseInit", cooldown: 0.5) else { return }
        playTone(frequency: Freq.C4, endFrequency: Freq.E4, duration: 0.12,
                 volume: uiVol(0.24), waveform: .glass, envelope: .dew, richness: 0.15)
    }

    /// Story 6.7: Purchase successful — simultaneous golden chord
    /// C4+E4+G4+C5, Bell, Dew, Celebrate tier
    func playPurchaseSuccess() {
        guard isEnabled, achievementSoundsEnabled else { return }
        guard canPlay("purchaseSuccess", cooldown: 1.0) else { return }
        guard canCelebrate() else { return }
        // Simultaneous major chord with octave doubling
        playTone(frequency: Freq.C4, duration: 0.30, volume: 0.015,
                 waveform: .bell, envelope: .dew, richness: 0.40)
        playTone(frequency: Freq.E4, duration: 0.30, volume: 0.012,
                 waveform: .bell, envelope: .dew, richness: 0.40)
        playTone(frequency: Freq.G4, duration: 0.30, volume: 0.010,
                 waveform: .bell, envelope: .dew, richness: 0.40)
        playTone(frequency: Freq.C5, duration: 0.30, volume: 0.005,
                 waveform: .bell, envelope: .dew, richness: 0.40)
        enforceSilence(duration: 0.5)
    }

    /// Purchase failed — gentle descent
    /// E4→D4 (330→294Hz), Glass, Petal, Murmur tier
    func playPurchaseFailed() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("purchaseFailed", cooldown: 0.5) else { return }
        playTone(frequency: Freq.E4, endFrequency: Freq.D4, duration: 0.15,
                 volume: uiVol(0.24), waveform: .glass, envelope: .petal, richness: 0.10)
    }

    /// Purchase restored — ascending confirmation
    /// E4→G4→A4→C5, Wood, Dew, Speak tier
    func playPurchaseRestored() {
        guard isEnabled, achievementSoundsEnabled else { return }
        guard canPlay("purchaseRestored", cooldown: 1.0) else { return }
        let notes: [(Float, TimeInterval)] = [
            (Freq.E4, 0), (Freq.G4, 0.08), (Freq.A4, 0.16), (Freq.C5, 0.24),
        ]
        for (freq, delay) in notes {
            DispatchQueue.main.asyncAfter(deadline: .now() + delay) { [weak self] in
                self?.playTone(frequency: freq, duration: 0.18,
                               volume: self?.achieveVol(0.50) ?? 0.025,
                               waveform: .wood, envelope: .dew, richness: 0.35)
            }
        }
    }

    // MARK: - Wisdom Quotes

    /// Quote card appears
    /// C4 (262Hz), Glass, Petal, Murmur tier
    func playQuoteAppear() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("quoteAppear", cooldown: 0.3) else { return }
        playTone(frequency: Freq.C4, duration: 0.20, volume: uiVol(0.24),
                 waveform: .glass, envelope: .petal, richness: 0.15)
    }

    /// Quote shuffled
    /// D4→E4, Glass, Dew, Murmur tier
    func playQuoteShuffle() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("quoteShuffle", cooldown: 0.2) else { return }
        playTone(frequency: Freq.D4, endFrequency: Freq.E4, duration: 0.10,
                 volume: uiVol(0.24), waveform: .glass, envelope: .dew, richness: 0.15)
    }

    // MARK: - Sign Out & Sync

    /// Story 11.5: Sign out warning
    /// A3 (220Hz), Glass, Petal, Murmur tier
    func playSignOutWarning() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("signOutWarn", cooldown: 0.5) else { return }
        playTone(frequency: Freq.A3, duration: 0.18, volume: uiVol(0.28),
                 waveform: .glass, envelope: .petal, richness: 0.10)
    }

    /// Sign out confirmed
    /// E4→C4 (330→262Hz), Glass, Petal, Murmur tier
    func playSignOutConfirmed() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("signOutDone", cooldown: 0.5) else { return }
        playTone(frequency: Freq.E4, endFrequency: Freq.C4, duration: 0.20,
                 volume: uiVol(0.24), waveform: .glass, envelope: .petal, richness: 0.10)
    }

    /// Sync complete
    /// C5 (523Hz), Glass, Dew, Murmur tier
    func playSyncComplete() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("syncComplete", cooldown: 0.5) else { return }
        playTone(frequency: Freq.C5, duration: 0.10, volume: uiVol(0.28),
                 waveform: .glass, envelope: .dew, richness: 0.20)
    }

    /// Sync error — gentle two-note descent (Story 11.5)
    /// E4→D4, Glass, Petal, Murmur tier
    func playSyncError() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("syncError", cooldown: 0.5) else { return }
        playTone(frequency: Freq.E4, endFrequency: Freq.D4, duration: 0.15,
                 volume: uiVol(0.24), waveform: .glass, envelope: .petal, richness: 0.10)
    }

    // MARK: - Streaks & Achievements (Epic 6)

    /// Story 6.3: Streak milestone — warm heartbeat metaphor
    /// Two pulses of A3 (220Hz) with second pulse pitch varying by streak
    func playStreakMilestone(days: Int) {
        guard isEnabled, achievementSoundsEnabled else { return }
        guard canPlay("streakMile", cooldown: 1.0) else { return }
        guard canCelebrate() else { return }
        // Pulse 1: A3, Wood, Dew
        playTone(frequency: Freq.A3, duration: 0.10, volume: 0.025,
                 waveform: .wood, envelope: .dew, richness: 0.25)
        // Pulse 2: pitch varies by streak length, 150ms gap
        let pulse2Freq: Float
        if days >= 30 {
            pulse2Freq = Freq.A4   // Octave — mastery
        } else if days >= 14 {
            pulse2Freq = Freq.E4   // Wider — confidence
        } else if days >= 7 {
            pulse2Freq = Freq.C4   // Rising — growing
        } else {
            pulse2Freq = Freq.A3   // Same — simple heartbeat
        }
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.15) { [weak self] in
            self?.playTone(frequency: pulse2Freq, duration: 0.10, volume: 0.030,
                           waveform: .wood, envelope: .dew, richness: 0.35)
        }
        enforceSilence(duration: 0.3)
    }

    /// Story 6.2: Level up — 5-note ascending pentatonic tower
    /// C4→D4→E4→G4→A4, Bell, Spark (last Dew), Celebrate tier
    func playLevelUp(level: Int = 1) {
        guard isEnabled, achievementSoundsEnabled else { return }
        guard canPlay("levelUp", cooldown: 1.0) else { return }
        guard canCelebrate() else { return }
        let notes: [(freq: Float, delay: TimeInterval, vol: Float, rich: Float, env: Envelope, dur: TimeInterval)] = [
            (Freq.C4, 0,    0.020, 0.25, .spark, 0.10),
            (Freq.D4, 0.05, 0.025, 0.28, .spark, 0.10),
            (Freq.E4, 0.10, 0.030, 0.32, .spark, 0.10),
            (Freq.G4, 0.15, 0.035, 0.36, .spark, 0.10),
            (Freq.A4, 0.20, 0.040, 0.40, .dew,   0.30),  // Final note lingers
        ]
        for note in notes {
            DispatchQueue.main.asyncAfter(deadline: .now() + note.delay) { [weak self] in
                self?.playTone(frequency: note.freq, duration: note.dur,
                               volume: note.vol, waveform: .bell,
                               envelope: note.env, richness: note.rich)
            }
        }
        // Resonance bed: quiet sustained C3
        playTone(frequency: Freq.C3, duration: 0.60, volume: 0.005,
                 waveform: .glass, envelope: .petal, richness: 0.05)
        enforceSilence(duration: 0.6)
    }

    /// Story 6.5: Daily goal complete — sunset chord (simultaneous)
    /// C4+E4+G4, Wood, Petal, Speak tier
    func playDailyGoalComplete() {
        guard isEnabled, achievementSoundsEnabled else { return }
        guard canPlay("dailyGoal", cooldown: 1.0) else { return }
        guard canCelebrate() else { return }
        // Simultaneous major chord — warm, complete, peaceful
        playTone(frequency: Freq.C4, duration: 0.25, volume: 0.012,
                 waveform: .wood, envelope: .petal, richness: 0.20)
        playTone(frequency: Freq.E4, duration: 0.25, volume: 0.010,
                 waveform: .wood, envelope: .petal, richness: 0.25)
        playTone(frequency: Freq.G4, duration: 0.25, volume: 0.008,
                 waveform: .wood, envelope: .petal, richness: 0.20)
        enforceSilence(duration: 0.5)
    }

    /// Story 6.4: Achievement notification — descending chime cascade
    /// G5→E5→C5, Bell, Spark (last Dew), Celebrate tier
    func playAchievementUnlocked(type: String = "") {
        guard isEnabled, achievementSoundsEnabled else { return }
        guard canPlay("achieveUnlock", cooldown: 0.5) else { return }
        guard canCelebrate() else { return }
        let notes: [(freq: Float, delay: TimeInterval, vol: Float, rich: Float, env: Envelope, dur: TimeInterval)] = [
            (Freq.G5, 0,    0.042, 0.40, .spark, 0.08),
            (Freq.E5, 0.04, 0.038, 0.35, .spark, 0.08),
            (Freq.C5, 0.08, 0.035, 0.30, .dew,   0.12),  // Final note lingers
        ]
        for note in notes {
            DispatchQueue.main.asyncAfter(deadline: .now() + note.delay) { [weak self] in
                self?.playTone(frequency: note.freq, duration: note.dur,
                               volume: note.vol, waveform: .bell,
                               envelope: note.env, richness: note.rich)
            }
        }
        enforceSilence(duration: 0.4)
    }

    /// Story 6.6: Celebration — rapid ascending bloom (rare)
    /// C5→E5→G5→C6, Bell, Spark (last Dew), Celebrate tier
    func playCelebration() {
        guard isEnabled, achievementSoundsEnabled else { return }
        guard canPlay("celebration", cooldown: 0.5) else { return }
        guard canCelebrate() else { return }
        let notes: [(freq: Float, delay: TimeInterval, vol: Float, rich: Float, env: Envelope, dur: TimeInterval)] = [
            (Freq.C5, 0,     0.030, 0.35, .spark, 0.06),
            (Freq.E5, 0.025, 0.035, 0.38, .spark, 0.06),
            (Freq.G5, 0.05,  0.038, 0.40, .spark, 0.06),
            (Freq.C6, 0.075, 0.040, 0.42, .dew,   0.10),  // Final note lingers
        ]
        for note in notes {
            DispatchQueue.main.asyncAfter(deadline: .now() + note.delay) { [weak self] in
                self?.playTone(frequency: note.freq, duration: note.dur,
                               volume: note.vol, waveform: .bell,
                               envelope: note.env, richness: note.rich)
            }
        }
        enforceSilence(duration: 0.5)
    }

    /// Streak bonus — ascending encouragement
    /// C4→E4→G4→A4, Wood, Dew, Speak tier
    func playStreakBonus() {
        guard isEnabled, achievementSoundsEnabled else { return }
        guard canPlay("streakBonus", cooldown: 0.3) else { return }
        let arpeggio: [(freq: Float, delay: TimeInterval)] = [
            (Freq.C4, 0), (Freq.E4, 0.08), (Freq.G4, 0.16), (Freq.A4, 0.24),
        ]
        for note in arpeggio {
            DispatchQueue.main.asyncAfter(deadline: .now() + note.delay) { [weak self] in
                self?.playTone(frequency: note.freq, duration: 0.18,
                               volume: self?.achieveVol(0.56) ?? 0.028,
                               waveform: .wood, envelope: .dew, richness: 0.35)
            }
        }
    }

    /// Correct letter placed
    /// E4→G4, Wood, Spark, Murmur tier
    func playLetterCorrect() {
        guard isEnabled, gameSoundsEnabled else { return }
        guard canPlay("letterCorrect", cooldown: 0.04) else { return }
        playTone(frequency: Freq.E4, endFrequency: Freq.G4, duration: 0.08,
                 volume: gameVol(0.28), waveform: .wood, envelope: .spark, richness: 0.25)
    }

    /// Wrong letter placed — gentle, non-punishing
    /// A3 (220Hz), Glass, Petal, Murmur tier
    func playLetterWrong() {
        guard isEnabled, gameSoundsEnabled else { return }
        guard canPlay("letterWrong", cooldown: 0.1) else { return }
        playTone(frequency: Freq.A3, endFrequency: Freq.G3, duration: 0.08,
                 volume: gameVol(0.28), waveform: .glass, envelope: .petal, richness: 0.10)
    }

    // MARK: - Ambient Soundscapes (Epic 7)

    /// Story 7.1: Start ambient drone — entry ceremony (Story 7.5)
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
                    // 3-second fade-in (Story 7.1.4)
                    self.fadeAmbient(to: self.ambientVolume * self.masterVolume * 10,
                                    duration: 3.0)
                } catch {
                    print("⚠️ Ambient playback error: \(error)")
                }
            }
        }
    }

    /// Stop ambient with fade — exit ceremony (Story 7.5)
    func stopAmbient(fadeDuration: TimeInterval = 2.0) {
        fadeAmbient(to: 0, duration: fadeDuration) { [weak self] in
            self?.ambientPlayer?.stop()
            self?.ambientPlayer = nil
            self?.currentAmbientPreset = nil
        }
    }

    /// Story 7.3: Crossfade to new preset
    func crossfadeAmbient(to preset: AmbientPreset) {
        stopAmbient(fadeDuration: 1.5)
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.6) { [weak self] in
            self?.startAmbient(preset: preset)
        }
    }

    /// Story 7.4: Context-aware ambient volume ducking
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

    /// Story 7.1: Ambient drone with breathing modulation
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

            // Story 7.1.2: Breathing modulation — room breathes ±10% over 6s
            let breathMod = 1.0 + sin(2.0 * Float.pi * t / 6.0) * 0.10

            // Story 7.1.1: Non-repeating harmonic movement
            let harmLfo = sin(2.0 * Float.pi * t / 12.0) * 0.3 + 0.7
            let moveLfo = sin(2.0 * Float.pi * t / 18.0) * 0.5 + 0.5

            let drone = sin(phase1) * config.amp1 * breathMod
                + sin(phase2) * config.amp2 * harmLfo
                + sin(phase3) * config.amp3 * moveLfo

            // Loop crossfade envelope
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

    /// Three waveform characters (Appendix C: Waveform Recipes)
    enum Waveform {
        case glass   // Clean, ethereal — minimal harmonics (ambient, nav, gentle feedback)
        case wood    // Warm, organic — moderate harmonics (game feedback, interactions)
        case bell    // Rich, shimmering — wide harmonics with micro-detuning (celebrations)
    }

    /// Three envelope presets (Story 1.2.2 — ADSR with per-preset curves)
    enum Envelope {
        case petal   // Soft: attack 20ms, decay 30ms, sustain 0.7, release 150ms (sine-eased)
        case dew     // Medium: attack 10ms, decay 20ms, sustain 0.8, release 100ms (linear)
        case spark   // Bright: attack 5ms, decay 15ms, sustain 0.85, release 60ms (exponential)
    }

    private func playTone(
        frequency: Float,
        endFrequency: Float? = nil,
        duration: TimeInterval = 0.1,
        volume: Float = 0.02,
        waveform: Waveform = .glass,
        envelope: Envelope = .dew,
        richness: Float = 0.3
    ) {
        configureSessionIfNeeded()
        guard isSessionConfigured else { return }
        sessionSoundCount += 1

        // Frequency ceiling validation (Story 10.5)
        #if DEBUG
        let maxFreq = max(frequency, endFrequency ?? 0)
        if maxFreq > 1047 {
            print("⚠️ Frequency \(maxFreq)Hz exceeds absolute ceiling 1047Hz")
        }
        #endif

        // Session fatigue scaling (Story 9.2)
        let fatigueScale: Float
        if adaptiveAudioEnabled {
            let minutes = Date().timeIntervalSince(sessionStartTime) / 60.0
            if minutes > 30 {
                fatigueScale = 0.55
            } else if minutes > 20 {
                fatigueScale = 0.70
            } else if minutes > 10 {
                fatigueScale = 0.85
            } else {
                fatigueScale = 1.0
            }
        } else {
            fatigueScale = 1.0
        }

        // Volume ducking: sounds within 100ms reduce volume by 40% (Story 12.2)
        let now = ProcessInfo.processInfo.systemUptime
        let duckingScale: Float = (now - lastSoundTime < 0.1) ? 0.6 : 1.0
        lastSoundTime = now

        // Performance mood adjustment (Story 9.1)
        let moodRichnessBonus: Float
        switch currentMood {
        case .warm:
            moodRichnessBonus = 0.05
        case .cool:
            moodRichnessBonus = -0.05
        default:
            moodRichnessBonus = 0
        }

        let adjustedVolume = volume * fatigueScale * duckingScale

        // Silence window enforcement (Story 12.1)
        if now < silenceWindowEnd { return }

        // Sound density monitoring (Story 12.4)
        recentSoundTimestamps.append(now)
        recentSoundTimestamps = recentSoundTimestamps.filter { now - $0 < 5.0 }
        if Float(recentSoundTimestamps.count) / 5.0 > 3.0 { return }

        let wavData = generateWAVData(
            frequency: frequency,
            endFrequency: endFrequency,
            duration: duration,
            volume: adjustedVolume,
            waveform: waveform,
            envelope: envelope,
            richness: min(max(richness + moodRichnessBonus, 0), 1.0)
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

    // MARK: - Anti-Spam & Density

    private func canPlay(_ soundID: String, cooldown: TimeInterval? = nil) -> Bool {
        let now = ProcessInfo.processInfo.systemUptime
        let cd = cooldown ?? defaultCooldown
        if let last = lastPlayTimes[soundID], now - last < cd {
            return false
        }
        lastPlayTimes[soundID] = now
        return true
    }

    /// Enforce a silence window after celebration sounds (Story 12.1)
    private func enforceSilence(duration: TimeInterval) {
        silenceWindowEnd = ProcessInfo.processInfo.systemUptime + duration
    }

    // MARK: - Celebration Rarity (Story 9.3)

    /// Maximum 3 celebration-tier sounds per 5-minute window
    private func canCelebrate() -> Bool {
        let now = ProcessInfo.processInfo.systemUptime
        celebrationTimestamps = celebrationTimestamps.filter { now - $0 < 300 }
        if celebrationTimestamps.count >= 3 { return false }
        celebrationTimestamps.append(now)
        return true
    }

    // MARK: - Performance Tracking (Story 9.1)

    /// Track recent answers for mood-based audio adjustments
    func recordAnswer(correct: Bool) {
        recentAnswers.append(correct)
        if recentAnswers.count > 10 { recentAnswers.removeFirst() }

        let correctCount = recentAnswers.filter { $0 }.count
        let ratio = recentAnswers.isEmpty ? 0.5 : Float(correctCount) / Float(recentAnswers.count)
        if ratio >= 0.7 {
            currentMood = .warm
        } else if ratio < 0.4 {
            currentMood = .cool
        } else {
            currentMood = .neutral
        }
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
        recentAnswers.removeAll()
        celebrationTimestamps.removeAll()
        recentSoundTimestamps.removeAll()
        silenceWindowEnd = 0
        lastSoundTime = 0
    }

    // MARK: - WAV Data Generation (Stories 1.2, 1.4, 1.5)

    private func generateWAVData(
        frequency: Float,
        endFrequency: Float?,
        duration: TimeInterval,
        volume: Float,
        waveform: Waveform,
        envelope: Envelope = .dew,
        richness: Float = 0.3
    ) -> Data {
        let numSamples = Int(Double(sampleRate) * duration)
        guard numSamples > 0 else { return Data() }

        let startFreq = frequency
        let endFreq = endFrequency ?? frequency

        // Micro-detuning: ±3 cents random per call (Story 10.3)
        let detuneAmount = Float.random(in: -detuneRange...detuneRange)
        let detuneFactor = pow(2.0, detuneAmount / 1200.0)

        // Full ADSR from spec Story 1.2.2
        var attackMs: Float
        var decayMs: Float
        var releaseMs: Float
        let sustainLevel: Float

        switch envelope {
        case .petal:
            attackMs = 20;  decayMs = 30;  releaseMs = 150; sustainLevel = 0.7
        case .dew:
            attackMs = 10;  decayMs = 20;  releaseMs = 100; sustainLevel = 0.8
        case .spark:
            attackMs = 5;   decayMs = 15;  releaseMs = 60;  sustainLevel = 0.85
        }

        // Proportional scaling: if ADR envelope > 95% of duration, scale to fit
        // This prevents short sounds from clipping the envelope and producing pops
        let durationMs = Float(duration * 1000.0)
        let totalADRMs = attackMs + decayMs + releaseMs
        if totalADRMs > durationMs * 0.95 {
            let scale = (durationMs * 0.95) / totalADRMs
            attackMs *= scale
            decayMs *= scale
            releaseMs *= scale
        }

        let attackSamples = max(Int(attackMs / 1000.0 * Float(sampleRate)), 1)
        let decaySamples = max(Int(decayMs / 1000.0 * Float(sampleRate)), 1)
        let releaseSamples = max(Int(releaseMs / 1000.0 * Float(sampleRate)), 1)

        let decayStart = attackSamples
        let releaseStart = max(numSamples - releaseSamples, decayStart + decaySamples)

        // Compute envelope level at release start for smooth transition
        // (handles case where decay is truncated by an early release)
        let releaseLevel: Float
        if releaseStart < decayStart + decaySamples {
            let partialDT = Float(releaseStart - decayStart) / Float(decaySamples)
            releaseLevel = sustainLevel + (1.0 - sustainLevel) * cos(min(partialDT, 1.0) * Float.pi * 0.5)
        } else {
            releaseLevel = sustainLevel
        }

        // Harmonic content based on waveform character (Appendix C)
        let harmonics: [(multiplier: Float, amplitude: Float)]
        switch waveform {
        case .glass:
            harmonics = [
                (1.0, 1.0),
                (2.0, 0.08 * richness * 3),
                (3.0, 0.03 * richness * 3),
                (5.0, 0.005 * richness * 3),
            ]
        case .wood:
            harmonics = [
                (1.0, 1.0),
                (2.0, 0.15 * richness * 2.5),
                (3.0, 0.08 * richness * 2.5),
                (4.0, 0.04 * richness * 2.5),
                (5.0, 0.02 * richness * 2.5),
            ]
        case .bell:
            harmonics = [
                (1.0, 1.0),
                (2.003, 0.20 * richness * 2.5),
                (3.007, 0.12 * richness * 2.5),
                (4.01, 0.06 * richness * 2.5),
                (5.02, 0.04 * richness * 2.5),
                (6.03, 0.015 * richness * 2.5),
            ]
        }

        var samples = [Int16](repeating: 0, count: numSamples)
        var phases = [Float](repeating: 0, count: harmonics.count)

        for i in 0..<numSamples {
            let t = Float(i) / Float(numSamples)
            let currentFreq = (startFreq + (endFreq - startFreq) * t) * detuneFactor

            // ADSR envelope with smooth transitions (Story 1.2.2)
            let env: Float
            if i < attackSamples {
                // Attack: 0 → 1.0
                let aT = Float(i) / Float(attackSamples)
                switch envelope {
                case .petal: env = sin(aT * Float.pi * 0.5)
                case .dew:   env = aT
                case .spark: env = aT * aT
                }
            } else if i < releaseStart {
                // Decay: 1.0 → sustainLevel (cosine ease for smooth transition)
                let dT = min(Float(i - decayStart) / Float(decaySamples), 1.0)
                env = sustainLevel + (1.0 - sustainLevel) * cos(dT * Float.pi * 0.5)
            } else {
                // Release: releaseLevel → 0
                let rT = min(Float(i - releaseStart) / Float(releaseSamples), 1.0)
                switch envelope {
                case .petal: env = releaseLevel * cos(rT * Float.pi * 0.5)
                case .dew:   env = releaseLevel * (1.0 - rT)
                case .spark: env = releaseLevel * (1.0 - rT) * (1.0 - rT)
                }
            }

            // Sum harmonics with frequency ceiling rolloff (Principle 1, Story 1.1.2)
            // Smooth low-pass: full below 1kHz, linear rolloff to zero at 2kHz
            // Prevents harsh harmonics in the ear's peak sensitivity range (2–4kHz)
            var sample: Float = 0
            var totalAmp: Float = 0
            for h in 0..<harmonics.count {
                let harmFreq = currentFreq * harmonics[h].multiplier

                let rolloff: Float
                if harmFreq <= 1000 {
                    rolloff = 1.0
                } else if harmFreq < 2000 {
                    rolloff = (2000 - harmFreq) / 1000.0
                } else {
                    rolloff = 0
                }

                let amp = harmonics[h].amplitude * rolloff
                phases[h] += 2.0 * Float.pi * harmFreq / Float(sampleRate)
                if phases[h] > 2.0 * Float.pi { phases[h] -= 2.0 * Float.pi }
                sample += sin(phases[h]) * amp
                totalAmp += amp
            }

            // Normalize by total harmonic amplitude
            if totalAmp > 0 { sample /= totalAmp }

            let value = sample * volume * env * 32767.0
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

// MARK: - Ambient Preset (Story 7.3)

enum AmbientPreset: String, CaseIterable {
    case celestialLibrary   // Default: warm room filled with starlight
    case oceanMorning       // Gentle oceanic waves
    case mountainSilence    // Sparse, contemplative
    case gardenRain         // Soft rain on glass

    // Legacy compatibility
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
        case .celestialLibrary, .cosmicDrift:
            // C3 + G3 foundation with slow harmonic wandering
            return Config(freq1: 131, amp1: 0.35, freq2: 196, amp2: 0.20, freq3: 262, amp3: 0.12)
        case .oceanMorning, .tranquilWaves:
            // Low A2 with gentle pitch oscillation
            return Config(freq1: 110, amp1: 0.40, freq2: 165, amp2: 0.18, freq3: 220, amp3: 0.10)
        case .mountainSilence, .deepFocus:
            // Sparse D3, spends time in silence
            return Config(freq1: 147, amp1: 0.30, freq2: 196, amp2: 0.10, freq3: 262, amp3: 0.06)
        case .gardenRain, .stellarMeditation:
            // C3 with filtered noise character
            return Config(freq1: 131, amp1: 0.32, freq2: 147, amp2: 0.15, freq3: 196, amp3: 0.10)
        }
    }

    var displayName: String {
        switch self {
        case .celestialLibrary, .cosmicDrift: return "Celestial Library"
        case .oceanMorning, .tranquilWaves: return "Ocean Morning"
        case .mountainSilence, .deepFocus: return "Mountain Silence"
        case .gardenRain, .stellarMeditation: return "Garden Rain"
        }
    }
}
