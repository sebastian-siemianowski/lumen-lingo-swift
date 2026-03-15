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
    private var currentSoundscape: Soundscape?
    private var currentVariantIndex: Int = 0

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

        // Auto-start soundscape if enabled and one is selected
        if profile.ambientSoundsEnabled, let soundscape = profile.soundscapeEnum,
           currentSoundscape == nil {
            startSoundscape(soundscape, variantIndex: profile.soundscapeVariantIndex)
        }
    }

    // MARK: - Audio Session

    private func configureSessionIfNeeded() {
        guard !isSessionConfigured else { return }
        do {
            try AVAudioSession.sharedInstance().setCategory(
                .playback, mode: .default, options: [.mixWithOthers]
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

            // Single-tone prewarm (UI sounds)
            let toneItems: [(key: String, freq: Float, endFreq: Float?, dur: TimeInterval,
                             vol: Float, wf: Waveform, env: Envelope, rich: Float)] = [
                ("buttonTap", Freq.D5, nil, 0.03, 0.015, .glass, .spark, 0.10),
                ("tabSwitch", Freq.C5, nil, 0.04, 0.008, .glass, .petal, 0.0),
            ]
            for item in toneItems {
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
        // Keep soundscape playing in the background
        if ambientPlayer?.isPlaying == true {
            wasAmbientPlaying = true
        } else {
            wasAmbientPlaying = false
            deactivateSession()
        }
        playerPool.forEach { $0.stop() }
    }

    private func handleForeground() {
        sessionStartTime = Date()
        if wasAmbientPlaying, let soundscape = currentSoundscape {
            startSoundscape(soundscape, variantIndex: currentVariantIndex)
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
    // ║                                                            ║
    // ║  Game sounds (Flashcards/Grammar/WordBuilder):              ║
    // ║  Single tones with pitch glides — light, non-fatiguing.    ║
    // ║  Each area has a distinct sonic identity:                   ║
    // ║    Flashcards = Glass (ethereal, flowing study moments)     ║
    // ║    Grammar    = Glass+Wood (crisp thinking, warm rewards)   ║
    // ║    WordBuilder = Wood (tactile, satisfying tile clicks)     ║
    // ║                                                            ║
    // ║  Celebrations & Achievements:                               ║
    // ║  Multi-note chords reserved for rare special moments.       ║
    // ╚══════════════════════════════════════════════════════════════╝

    // MARK: - Flashcard Sounds (Epic 2)
    //
    // Sonic identity: "Glass Garden" — ethereal, flowing, meditative.
    // Glass timbre dominates for a zen-like study atmosphere.
    // Single tones with pitch glides mirror the gesture of turning pages.

    /// Story 2.1: Card appears — gentle glass breath, a page settling into view
    func playCardAppear() {
        guard isEnabled, gameSoundsEnabled, flashcardsSoundsEnabled else { return }
        guard canPlay("cardAppear", cooldown: 0.15) else { return }
        playTone(frequency: Freq.G4, duration: 0.16, volume: gameVol(0.22),
                 waveform: .glass, envelope: .petal, richness: 0.10)
    }

    /// Story 2.2: Card flip — warm rising glide, the satisfaction of turning a page
    func playCardFlipEnhanced() {
        guard isEnabled, gameSoundsEnabled, flashcardsSoundsEnabled else { return }
        guard canPlay("cardFlip", cooldown: 0.1) else { return }
        playTone(frequency: Freq.C4, endFrequency: Freq.E4, duration: 0.12,
                 volume: gameVol(0.32), waveform: .wood, envelope: .dew, richness: 0.20)
    }

    /// Story 2.8: Plink → Glow — quick bright crystal tap
    func playPlink() {
        guard isEnabled, gameSoundsEnabled else { return }
        guard canPlay("plink", cooldown: 0.08) else { return }
        playTone(frequency: Freq.A4, duration: 0.05, volume: gameVol(0.24),
                 waveform: .glass, envelope: .spark, richness: 0.10)
    }

    /// Story 2.3: Swipe right (correct) — warm ascending glide, a gentle "yes"
    func playSwipeRight() {
        guard isEnabled, gameSoundsEnabled, flashcardsSoundsEnabled else { return }
        guard canPlay("swipeRight", cooldown: 0.12) else { return }
        playTone(frequency: Freq.E4, endFrequency: Freq.G4, duration: 0.14,
                 volume: gameVol(0.38), waveform: .wood, envelope: .dew, richness: 0.22)
    }

    /// Story 2.4: Swipe left (still learning) — soft descending breath, compassionate
    func playSwipeLeft() {
        guard isEnabled, gameSoundsEnabled, flashcardsSoundsEnabled else { return }
        guard canPlay("swipeLeft", cooldown: 0.12) else { return }
        playTone(frequency: Freq.E4, endFrequency: Freq.D4, duration: 0.12,
                 volume: gameVol(0.18), waveform: .glass, envelope: .petal, richness: 0.08)
    }

    /// Story 2.5: Mastery progression — single notes that brighten as mastery grows
    func playMasteryProgress(level: Int) {
        guard isEnabled, gameSoundsEnabled, flashcardsSoundsEnabled else { return }
        guard canPlay("mastery", cooldown: 0.15) else { return }
        let freq: Float
        let wf: Waveform
        let rich: Float
        let vol: Float
        switch level {
        case 0...2:
            freq = Freq.C4; wf = .wood; rich = 0.18; vol = 0.30
        case 3...4:
            freq = Freq.E4; wf = .wood; rich = 0.22; vol = 0.34
        case 5...6:
            freq = Freq.G4; wf = .glass; rich = 0.18; vol = 0.38
        default:
            freq = Freq.C5; wf = .bell; rich = 0.25; vol = 0.42
        }
        playTone(frequency: freq, duration: 0.18, volume: gameVol(vol),
                 waveform: wf, envelope: .dew, richness: rich)
    }

    /// Story 2.6: Next category — light forward sweep
    func playCategoryNext() {
        guard isEnabled, gameSoundsEnabled else { return }
        guard canPlay("catNext", cooldown: 0.2) else { return }
        playTone(frequency: Freq.C4, endFrequency: Freq.E4, duration: 0.08,
                 volume: gameVol(0.22), waveform: .glass, envelope: .dew, richness: 0.08)
    }

    /// Previous category — light backward sweep
    func playCategoryPrev() {
        guard isEnabled, gameSoundsEnabled else { return }
        guard canPlay("catPrev", cooldown: 0.2) else { return }
        playTone(frequency: Freq.E4, endFrequency: Freq.C4, duration: 0.08,
                 volume: gameVol(0.20), waveform: .glass, envelope: .dew, richness: 0.08)
    }

    /// Story 2.7: XP gain — bright rising bell accent, a sparkle of achievement
    func playXPGain(amount: Int) {
        guard isEnabled, achievementSoundsEnabled else { return }
        guard canPlay("xpGain", cooldown: 0.3) else { return }
        playTone(frequency: Freq.G4, endFrequency: Freq.C5, duration: 0.10,
                 volume: achieveVol(0.34), waveform: .bell, envelope: .spark, richness: 0.22)
    }

    // MARK: - Word Builder Sounds (Epic 3)
    //
    // Sonic identity: "Wooden Workshop" — tactile, satisfying, hands-on.
    // Wood timbre dominates for physical tile interactions.
    // Short, snappy sounds that feel like touching real objects.

    /// Story 3.1: Tile picked — crisp wooden tap, like picking up a Scrabble tile
    func playTilePick(position: Int, total: Int) {
        guard isEnabled, gameSoundsEnabled, wordBuilderSoundsEnabled else { return }
        guard canPlay("tilePick", cooldown: 0.04) else { return }
        let richVariation = Float(position) / max(Float(total), 1) * 0.06
        playTone(frequency: Freq.E4, duration: 0.06, volume: gameVol(0.28),
                 waveform: .wood, envelope: .spark, richness: 0.18 + richVariation)
    }

    /// Tile pick (no position)
    func playTilePick() {
        guard isEnabled, gameSoundsEnabled else { return }
        guard canPlay("tilePick", cooldown: 0.04) else { return }
        playTone(frequency: Freq.E4, duration: 0.06, volume: gameVol(0.28),
                 waveform: .wood, envelope: .spark, richness: 0.18)
    }

    /// Story 3.3: Tile returned — softer tap, setting it back gently
    func playTileReturn(position: Int = 0, total: Int = 1) {
        guard isEnabled, gameSoundsEnabled, wordBuilderSoundsEnabled else { return }
        guard canPlay("tileReturn", cooldown: 0.04) else { return }
        playTone(frequency: Freq.D4, duration: 0.05, volume: gameVol(0.22),
                 waveform: .wood, envelope: .spark, richness: 0.15)
    }

    /// Story 3.2: Slot filled — satisfying snap, like a puzzle piece clicking
    func playSlotFill(slotIndex: Int, totalSlots: Int) {
        guard isEnabled, gameSoundsEnabled, wordBuilderSoundsEnabled else { return }
        guard canPlay("slotFill", cooldown: 0.03) else { return }
        playTone(frequency: Freq.G4, duration: 0.08, volume: gameVol(0.34),
                 waveform: .wood, envelope: .dew, richness: 0.22)
    }

    /// Story 3.2: Tile snap into place
    func playTilePlace() {
        guard isEnabled, gameSoundsEnabled else { return }
        guard canPlay("tilePlace", cooldown: 0.04) else { return }
        playTone(frequency: Freq.G4, duration: 0.08, volume: gameVol(0.34),
                 waveform: .wood, envelope: .dew, richness: 0.22)
    }

    /// Story 3.4: Word completed — ascending single notes resolving into a bell shimmer
    func playWordComplete(length: Int) {
        guard isEnabled, gameSoundsEnabled, wordBuilderSoundsEnabled else { return }
        guard canPlay("wordComplete", cooldown: 0.3) else { return }
        // Quick ascending single-note run
        let runNotes: [(freq: Float, delay: TimeInterval)] = [
            (Freq.C4, 0),
            (Freq.E4, 0.06),
            (Freq.G4, 0.12),
        ]
        for note in runNotes {
            DispatchQueue.main.asyncAfter(deadline: .now() + note.delay) { [weak self] in
                self?.playTone(frequency: note.freq, duration: 0.08,
                               volume: self?.gameVol(0.30) ?? 0.015,
                               waveform: .wood, envelope: .dew, richness: 0.22)
            }
        }
        // Resolve into a single shimmering bell note
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.18) { [weak self] in
            self?.playTone(frequency: Freq.C5, duration: 0.24,
                           volume: self?.gameVol(0.38) ?? 0.019,
                           waveform: .bell, envelope: .dew, richness: 0.28)
        }
    }

    /// Story 3.5: Word correct — warm upward sweep of recognition
    func playWordCorrect() {
        guard isEnabled, gameSoundsEnabled else { return }
        guard canPlay("wordCorrect", cooldown: 0.2) else { return }
        playTone(frequency: Freq.C4, endFrequency: Freq.G4, duration: 0.18,
                 volume: gameVol(0.40), waveform: .wood, envelope: .dew, richness: 0.25)
    }

    /// Story 3.6: Word wrong — compassionate settling tone
    func playWordWrong() {
        guard isEnabled, gameSoundsEnabled, wordBuilderSoundsEnabled else { return }
        guard canPlay("wordWrong", cooldown: 0.15) else { return }
        playTone(frequency: Freq.E4, endFrequency: Freq.D4, duration: 0.14,
                 volume: gameVol(0.20), waveform: .wood, envelope: .petal, richness: 0.15)
    }

    /// Letter cleared from slot — tiny release tap
    func playLetterClear(index: Int = 0, total: Int = 1) {
        guard isEnabled, gameSoundsEnabled, wordBuilderSoundsEnabled else { return }
        guard canPlay("letterClear", cooldown: 0.03) else { return }
        playTone(frequency: Freq.D4, duration: 0.04, volume: gameVol(0.20),
                 waveform: .wood, envelope: .spark, richness: 0.12)
    }

    /// Story 3.7: Hint available — gentle glass chime
    func playHintAvailable() {
        guard isEnabled, gameSoundsEnabled, wordBuilderSoundsEnabled else { return }
        guard canPlay("hintAvail", cooldown: 0.5) else { return }
        playTone(frequency: Freq.A4, duration: 0.10, volume: gameVol(0.22),
                 waveform: .glass, envelope: .dew, richness: 0.15)
    }

    /// Story 3.7: Hint revealed — gentle descending notes
    func playHintReveal(position: Int = 0) {
        guard isEnabled, gameSoundsEnabled, wordBuilderSoundsEnabled else { return }
        guard canPlay("hintReveal", cooldown: 0.1) else { return }
        let steps: [(freq: Float, delay: TimeInterval)] = [
            (Freq.G4, 0),
            (Freq.E4, 0.06),
            (Freq.C4, 0.12),
        ]
        for step in steps {
            DispatchQueue.main.asyncAfter(deadline: .now() + step.delay) { [weak self] in
                self?.playTone(frequency: step.freq, duration: 0.10,
                               volume: self?.gameVol(0.26) ?? 0.013,
                               waveform: .wood, envelope: .dew, richness: 0.20)
            }
        }
    }

    /// Story 3.7: Hint sparkle — tiny bright shimmer
    func playHintSparkle() {
        guard isEnabled, gameSoundsEnabled else { return }
        guard canPlay("hintSparkle", cooldown: 0.15) else { return }
        playTone(frequency: Freq.E5, duration: 0.04, volume: gameVol(0.18),
                 waveform: .glass, envelope: .spark, richness: 0.12)
    }

    /// Skip word — gentle glass descent, moving on
    func playSkipWord() {
        guard isEnabled, gameSoundsEnabled, wordBuilderSoundsEnabled else { return }
        guard canPlay("skipWord", cooldown: 0.3) else { return }
        playTone(frequency: Freq.E4, endFrequency: Freq.C4, duration: 0.10,
                 volume: gameVol(0.22), waveform: .glass, envelope: .dew, richness: 0.10)
    }

    /// Timer tick — wooden pulse with pitch rising as time runs low
    func playTimerTick(secondsRemaining: Int) {
        guard isEnabled, gameSoundsEnabled, wordBuilderSoundsEnabled else { return }
        guard canPlay("timerTick", cooldown: 0.8) else { return }
        let freq: Float
        let vol: Float
        if secondsRemaining <= 5 {
            freq = Freq.E4; vol = gameVol(0.26)
        } else if secondsRemaining <= 10 {
            freq = Freq.D4; vol = gameVol(0.22)
        } else {
            freq = Freq.C4; vol = gameVol(0.18)
        }
        playTone(frequency: freq, duration: 0.05, volume: vol,
                 waveform: .wood, envelope: .spark, richness: 0.15)
    }

    /// Timer expired — warm settling tone
    func playTimerExpired() {
        guard isEnabled, gameSoundsEnabled, wordBuilderSoundsEnabled else { return }
        guard canPlay("timerExpired", cooldown: 0.5) else { return }
        playTone(frequency: Freq.E4, endFrequency: Freq.C4, duration: 0.16,
                 volume: gameVol(0.26), waveform: .wood, envelope: .dew, richness: 0.18)
    }

    // MARK: - Grammar Sounds (Epic 4)
    //
    // Sonic identity: "Thinking Room" — crisp, decisive, intellectual.
    // Glass for contemplation, Wood for committed choices, Bell for streak rewards.

    /// Story 4.1: Question appears — clear glass invitation, "your turn to think"
    func playQuestionAppear() {
        guard isEnabled, gameSoundsEnabled, grammarSoundsEnabled else { return }
        guard canPlay("questionAppear", cooldown: 0.2) else { return }
        playTone(frequency: Freq.G4, duration: 0.10, volume: gameVol(0.24),
                 waveform: .glass, envelope: .dew, richness: 0.12)
    }

    /// Story 4.2: Answer selected — confident wooden tap, "I've decided"
    func playAnswerSelect() {
        guard isEnabled, gameSoundsEnabled, grammarSoundsEnabled else { return }
        guard canPlay("answerSelect", cooldown: 0.06) else { return }
        playTone(frequency: Freq.A4, duration: 0.06, volume: gameVol(0.30),
                 waveform: .wood, envelope: .spark, richness: 0.18)
    }

    /// Story 4.3: Grammar correct — warm rising tone that brightens with streaks
    func playGrammarCorrect(consecutiveCount: Int = 1) {
        guard isEnabled, gameSoundsEnabled, grammarSoundsEnabled else { return }
        guard canPlay("grammarCorrect", cooldown: 0.1) else { return }
        consecutiveCorrect = consecutiveCount
        let endFreq: Float
        let wf: Waveform
        let rich: Float
        let vol: Float
        if consecutiveCount >= 5 {
            // Streak reward — shimmering bell rise
            endFreq = Freq.C5; wf = .bell; rich = 0.25; vol = 0.44
        } else if consecutiveCount >= 3 {
            // Building confidence — warmer, higher
            endFreq = Freq.A4; wf = .wood; rich = 0.22; vol = 0.40
        } else {
            // Simple warm confirmation
            endFreq = Freq.G4; wf = .wood; rich = 0.20; vol = 0.36
        }
        playTone(frequency: Freq.E4, endFrequency: endFreq, duration: 0.14,
                 volume: gameVol(vol), waveform: wf, envelope: .dew, richness: rich)
    }

    /// Story 4.4: Grammar wrong — soft descending tone, reflective not punishing
    func playGrammarWrong() {
        guard isEnabled, gameSoundsEnabled, grammarSoundsEnabled else { return }
        guard canPlay("grammarWrong", cooldown: 0.15) else { return }
        consecutiveCorrect = 0
        playTone(frequency: Freq.E4, endFrequency: Freq.D4, duration: 0.14,
                 volume: gameVol(0.20), waveform: .glass, envelope: .petal, richness: 0.08)
        enforceSilence(duration: 0.08)
    }

    /// Story 4.5: Explanation revealed — gentle glass unfolding, understanding opens
    func playExplanationReveal() {
        guard isEnabled, gameSoundsEnabled, grammarSoundsEnabled else { return }
        guard canPlay("explanationReveal", cooldown: 0.3) else { return }
        playTone(frequency: Freq.C4, endFrequency: Freq.E4, duration: 0.14,
                 volume: gameVol(0.24), waveform: .glass, envelope: .petal, richness: 0.12)
    }

    /// Panel expand — light rising glass sweep
    func playPanelExpand() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("panelExpand", cooldown: 0.15) else { return }
        playTone(frequency: Freq.C4, endFrequency: Freq.E4, duration: 0.10,
                 volume: uiVol(0.24), waveform: .glass, envelope: .dew, richness: 0.10)
    }

    /// Panel collapse — settling glass sweep
    func playPanelCollapse() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("panelCollapse", cooldown: 0.15) else { return }
        playTone(frequency: Freq.E4, endFrequency: Freq.C4, duration: 0.10,
                 volume: uiVol(0.22), waveform: .glass, envelope: .dew, richness: 0.10)
    }

    /// "Got It!" success — quick ascending tones resolving into a bell shimmer
    func playWarmPulse() {
        guard isEnabled, gameSoundsEnabled else { return }
        guard canPlay("warmPulse", cooldown: 0.1) else { return }
        let runNotes: [(freq: Float, delay: TimeInterval)] = [
            (Freq.C4, 0), (Freq.E4, 0.04), (Freq.G4, 0.08),
        ]
        for note in runNotes {
            DispatchQueue.main.asyncAfter(deadline: .now() + note.delay) { [weak self] in
                self?.playTone(frequency: note.freq, duration: 0.06,
                               volume: self?.gameVol(0.28) ?? 0.014,
                               waveform: .wood, envelope: .dew, richness: 0.20)
            }
        }
        // Resolve into a single shimmering bell note
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.12) { [weak self] in
            self?.playTone(frequency: Freq.G4, duration: 0.18,
                           volume: self?.gameVol(0.36) ?? 0.018,
                           waveform: .bell, envelope: .dew, richness: 0.25)
        }
    }

    /// "Still Learning" nudge — warm wooden breath
    func playSoftNudge() {
        guard isEnabled, gameSoundsEnabled else { return }
        guard canPlay("softNudge", cooldown: 0.1) else { return }
        playTone(frequency: Freq.A3, duration: 0.14, volume: gameVol(0.22),
                 waveform: .wood, envelope: .dew, richness: 0.15)
    }

    /// Performance-based mood
    func setGrammarMood(_ mood: PerformanceMood) {
        currentMood = mood
    }

    /// Adaptive: acknowledge improvement — warm rising tone
    func playPerformanceImproved() {
        guard isEnabled, gameSoundsEnabled, adaptiveAudioEnabled else { return }
        guard canPlay("perfImproved", cooldown: 2.0) else { return }
        playTone(frequency: Freq.G4, endFrequency: Freq.A4, duration: 0.14,
                 volume: gameVol(0.32), waveform: .wood, envelope: .dew, richness: 0.20)
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

    /// Streak alive notification — warm wooden chord pair
    /// E3+E4 → G3+G4, Wood, Dew
    func playStreakAlive() {
        guard isEnabled, achievementSoundsEnabled else { return }
        guard canPlay("streakAlive", cooldown: 1.0) else { return }
        let chordData1 = generateChordWAVData(
            notes: [(Freq.E3, 0.3), (Freq.E4, 1.0)],
            duration: 0.18, volume: achieveVol(0.34),
            waveform: .wood, envelope: .dew, richness: 0.32)
        playFromData(chordData1)
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.08) { [weak self] in
            guard let self else { return }
            let chordData2 = self.generateChordWAVData(
                notes: [(Freq.G3, 0.3), (Freq.G4, 1.0)],
                duration: 0.20, volume: self.achieveVol(0.38),
                waveform: .wood, envelope: .dew, richness: 0.35)
            self.playFromData(chordData2)
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

    /// Journey screen arrival — full C major chord, warm welcome
    /// C3+C4+E4+G4, Bell, Petal
    func playJourneyArrival() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("journeyArrival", cooldown: 0.5) else { return }
        let chordData = generateChordWAVData(
            notes: [(Freq.C3, 0.2), (Freq.C4, 1.0), (Freq.E4, 0.7), (Freq.G4, 0.5)],
            duration: 0.32, volume: uiVol(0.28),
            waveform: .bell, envelope: .petal, richness: 0.35)
        playFromData(chordData)
    }

    /// Streak display (scales with days)
    func playStreakDisplay(days: Int) {
        guard isEnabled, achievementSoundsEnabled else { return }
        guard canPlay("streakDisplay", cooldown: 1.0) else { return }
        if days >= 30 {
            playStreakMilestone(days: days)
        } else if days >= 7 {
            let chordData = generateChordWAVData(
                notes: [(Freq.E3, 0.15), (Freq.E4, 1.0), (Freq.G4, 0.6), (Freq.C5, 0.3)],
                duration: 0.28, volume: achieveVol(0.40),
                waveform: .wood, envelope: .dew, richness: 0.36)
            playFromData(chordData)
        } else if days >= 1 {
            let chordData = generateChordWAVData(
                notes: [(Freq.E3, 0.2), (Freq.E4, 1.0)],
                duration: 0.18, volume: achieveVol(0.34),
                waveform: .wood, envelope: .dew, richness: 0.30)
            playFromData(chordData)
        }
    }

    /// Milestone unlocked — shimmering bell chord cascade
    func playMilestoneUnlocked() {
        guard isEnabled, achievementSoundsEnabled else { return }
        guard canPlay("milestoneUnlocked", cooldown: 0.5) else { return }
        guard canCelebrate() else { return }
        // Bright bell chord
        let chordData1 = generateChordWAVData(
            notes: [(Freq.G4, 1.0), (Freq.C5, 0.6)],
            duration: 0.14, volume: achieveVol(0.44),
            waveform: .bell, envelope: .spark, richness: 0.38)
        playFromData(chordData1)
        // Resolving full chord
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.08) { [weak self] in
            guard let self else { return }
            let chordData2 = self.generateChordWAVData(
                notes: [(Freq.C3, 0.15), (Freq.C4, 1.0), (Freq.E4, 0.7), (Freq.G4, 0.5)],
                duration: 0.28, volume: self.achieveVol(0.48),
                waveform: .bell, envelope: .dew, richness: 0.40)
            self.playFromData(chordData2)
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

    /// Language pair confirmed — warm C major chord bloom
    func playLanguageConfirmed() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("langConfirmed", cooldown: 0.3) else { return }
        let chordData = generateChordWAVData(
            notes: [(Freq.C3, 0.15), (Freq.C4, 1.0), (Freq.E4, 0.7), (Freq.G4, 0.5)],
            duration: 0.28, volume: uiVol(0.34),
            waveform: .wood, envelope: .dew, richness: 0.36)
        playFromData(chordData)
    }

    /// First-ever language selected — ascending arpeggio into radiant chord
    func playFirstLanguageSelected() {
        guard isEnabled, achievementSoundsEnabled else { return }
        guard canPlay("firstLang", cooldown: 1.0) else { return }
        // Quick ascending approach
        let welcome: [(freq: Float, delay: TimeInterval)] = [
            (Freq.C4, 0), (Freq.E4, 0.08), (Freq.G4, 0.16),
        ]
        for (freq, delay) in welcome {
            DispatchQueue.main.asyncAfter(deadline: .now() + delay) { [weak self] in
                self?.playTone(frequency: freq, duration: 0.14,
                               volume: self?.achieveVol(0.44) ?? 0.022,
                               waveform: .bell, envelope: .spark, richness: 0.50)
            }
        }
        // Resolving celebration chord
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.24) { [weak self] in
            guard let self else { return }
            let chordData = self.generateChordWAVData(
                notes: [(Freq.C3, 0.2), (Freq.C4, 1.0), (Freq.E4, 0.7),
                         (Freq.G4, 0.55), (Freq.A4, 0.35), (Freq.C5, 0.2)],
                duration: 0.42, volume: self.achieveVol(0.50),
                waveform: .bell, envelope: .petal, richness: 0.42)
            self.playFromData(chordData)
        }
    }

    // MARK: - Membership & IAP

    /// Membership page arrival — warm C major chord welcome
    func playMembershipArrival() {
        guard isEnabled, uiSoundsEnabled else { return }
        guard canPlay("memberArrival", cooldown: 0.5) else { return }
        let chordData = generateChordWAVData(
            notes: [(Freq.C3, 0.15), (Freq.C4, 1.0), (Freq.E4, 0.6), (Freq.G4, 0.4)],
            duration: 0.32, volume: uiVol(0.28),
            waveform: .bell, envelope: .petal, richness: 0.32)
        playFromData(chordData)
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

    /// Story 6.7: Purchase successful — radiant full chord
    /// C3+C4+E4+G4+C5, Bell, Dew, Celebrate tier
    func playPurchaseSuccess() {
        guard isEnabled, achievementSoundsEnabled else { return }
        guard canPlay("purchaseSuccess", cooldown: 1.0) else { return }
        guard canCelebrate() else { return }
        let chordData = generateChordWAVData(
            notes: [(Freq.C3, 0.2), (Freq.C4, 1.0), (Freq.E4, 0.7),
                     (Freq.G4, 0.55), (Freq.C5, 0.35)],
            duration: 0.42, volume: achieveVol(0.52),
            waveform: .bell, envelope: .dew, richness: 0.42)
        playFromData(chordData)
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
        // First chord: warm foundation
        let chordData1 = generateChordWAVData(
            notes: [(Freq.A2, 0.15), (Freq.A3, 0.6), (Freq.C4, 0.4), (Freq.E4, 0.3)],
            duration: 0.20, volume: achieveVol(0.46),
            waveform: .wood, envelope: .dew, richness: 0.36)
        playFromData(chordData1)
        // Second chord: resolution
        let notes2: [(frequency: Float, amplitude: Float)]
        if days >= 30 {
            notes2 = [(Freq.C3, 0.2), (Freq.C4, 1.0), (Freq.E4, 0.7), (Freq.G4, 0.55), (Freq.C5, 0.35)]
        } else if days >= 14 {
            notes2 = [(Freq.C3, 0.18), (Freq.C4, 1.0), (Freq.E4, 0.7), (Freq.G4, 0.5)]
        } else if days >= 7 {
            notes2 = [(Freq.C4, 1.0), (Freq.E4, 0.7), (Freq.G4, 0.5)]
        } else {
            notes2 = [(Freq.C4, 1.0), (Freq.G4, 0.5)]
        }
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.15) { [weak self] in
            guard let self else { return }
            let chordData2 = self.generateChordWAVData(
                notes: notes2, duration: 0.32, volume: self.achieveVol(0.50),
                waveform: .bell, envelope: .dew, richness: 0.42)
            self.playFromData(chordData2)
        }
        enforceSilence(duration: 0.5)
    }

    /// Story 6.2: Level up — ascending chord cascade resolving into full voicing
    func playLevelUp(level: Int = 1) {
        guard isEnabled, achievementSoundsEnabled else { return }
        guard canPlay("levelUp", cooldown: 1.0) else { return }
        guard canCelebrate() else { return }
        // Ascending approach: each step is a richer chord
        let steps: [(notes: [(Float, Float)], delay: TimeInterval, dur: TimeInterval)] = [
            ([(Freq.C4, 1.0)], 0, 0.10),
            ([(Freq.C4, 0.6), (Freq.E4, 1.0)], 0.06, 0.10),
            ([(Freq.C4, 0.5), (Freq.E4, 0.8), (Freq.G4, 1.0)], 0.12, 0.12),
        ]
        for step in steps {
            DispatchQueue.main.asyncAfter(deadline: .now() + step.delay) { [weak self] in
                guard let self else { return }
                let data = self.generateChordWAVData(
                    notes: step.notes.map { (frequency: $0.0, amplitude: $0.1) },
                    duration: step.dur, volume: self.achieveVol(0.44),
                    waveform: .bell, envelope: .spark, richness: 0.38)
                self.playFromData(data)
            }
        }
        // Final resolution: full voicing
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.20) { [weak self] in
            guard let self else { return }
            let chordData = self.generateChordWAVData(
                notes: [(Freq.C3, 0.2), (Freq.C4, 1.0), (Freq.E4, 0.7),
                         (Freq.G4, 0.55), (Freq.A4, 0.35), (Freq.C5, 0.2)],
                duration: 0.42, volume: self.achieveVol(0.50),
                waveform: .bell, envelope: .dew, richness: 0.42)
            self.playFromData(chordData)
        }
        enforceSilence(duration: 0.7)
    }

    /// Story 6.5: Daily goal complete — warm sunset chord
    /// Full C major voicing, Wood+Bell blend, Petal
    func playDailyGoalComplete() {
        guard isEnabled, achievementSoundsEnabled else { return }
        guard canPlay("dailyGoal", cooldown: 1.0) else { return }
        guard canCelebrate() else { return }
        let chordData = generateChordWAVData(
            notes: [(Freq.C3, 0.2), (Freq.C4, 1.0), (Freq.E4, 0.7),
                     (Freq.G4, 0.55), (Freq.C5, 0.25)],
            duration: 0.38, volume: achieveVol(0.48),
            waveform: .bell, envelope: .petal, richness: 0.40)
        playFromData(chordData)
        enforceSilence(duration: 0.5)
    }

    /// Story 6.4: Achievement notification — shimmering descending chord cascade
    func playAchievementUnlocked(type: String = "") {
        guard isEnabled, achievementSoundsEnabled else { return }
        guard canPlay("achieveUnlock", cooldown: 0.5) else { return }
        guard canCelebrate() else { return }
        // High bell chord
        let chordData1 = generateChordWAVData(
            notes: [(Freq.G4, 1.0), (Freq.C5, 0.6)],
            duration: 0.14, volume: achieveVol(0.44),
            waveform: .bell, envelope: .spark, richness: 0.38)
        playFromData(chordData1)
        // Resolving full chord
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.08) { [weak self] in
            guard let self else { return }
            let chordData2 = self.generateChordWAVData(
                notes: [(Freq.C3, 0.15), (Freq.C4, 1.0), (Freq.E4, 0.7), (Freq.G4, 0.5)],
                duration: 0.28, volume: self.achieveVol(0.48),
                waveform: .bell, envelope: .dew, richness: 0.40)
            self.playFromData(chordData2)
        }
        enforceSilence(duration: 0.4)
    }

    /// Story 6.6: Celebration — rapid ascending bloom resolving into full chord (rare)
    func playCelebration() {
        guard isEnabled, achievementSoundsEnabled else { return }
        guard canPlay("celebration", cooldown: 0.5) else { return }
        guard canCelebrate() else { return }
        // Quick ascending sparkles
        let sparkles: [(freq: Float, delay: TimeInterval)] = [
            (Freq.C5, 0), (Freq.E5, 0.03), (Freq.G5, 0.06),
        ]
        for s in sparkles {
            DispatchQueue.main.asyncAfter(deadline: .now() + s.delay) { [weak self] in
                self?.playTone(frequency: s.freq, duration: 0.06,
                               volume: self?.achieveVol(0.40) ?? 0.020,
                               waveform: .bell, envelope: .spark, richness: 0.50)
            }
        }
        // Resolving celebration chord — the payoff
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.10) { [weak self] in
            guard let self else { return }
            let chordData = self.generateChordWAVData(
                notes: [(Freq.C3, 0.15), (Freq.C4, 1.0), (Freq.E4, 0.7),
                         (Freq.G4, 0.55), (Freq.C5, 0.35), (Freq.E5, 0.15)],
                duration: 0.42, volume: self.achieveVol(0.52),
                waveform: .bell, envelope: .dew, richness: 0.42)
            self.playFromData(chordData)
        }
        enforceSilence(duration: 0.6)
    }

    /// Streak bonus — ascending arpeggio with chord resolution
    func playStreakBonus() {
        guard isEnabled, achievementSoundsEnabled else { return }
        guard canPlay("streakBonus", cooldown: 0.3) else { return }
        let arpeggio: [(freq: Float, delay: TimeInterval)] = [
            (Freq.C4, 0), (Freq.E4, 0.06), (Freq.G4, 0.12),
        ]
        for note in arpeggio {
            DispatchQueue.main.asyncAfter(deadline: .now() + note.delay) { [weak self] in
                self?.playTone(frequency: note.freq, duration: 0.12,
                               volume: self?.achieveVol(0.44) ?? 0.022,
                               waveform: .wood, envelope: .dew, richness: 0.35)
            }
        }
        // Chord resolution
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.18) { [weak self] in
            guard let self else { return }
            let chordData = self.generateChordWAVData(
                notes: [(Freq.C4, 1.0), (Freq.E4, 0.7), (Freq.G4, 0.5), (Freq.A4, 0.35)],
                duration: 0.28, volume: self.achieveVol(0.46),
                waveform: .bell, envelope: .dew, richness: 0.38)
            self.playFromData(chordData)
        }
    }

    /// Correct letter placed — quick bright wooden confirmation
    func playLetterCorrect() {
        guard isEnabled, gameSoundsEnabled else { return }
        guard canPlay("letterCorrect", cooldown: 0.04) else { return }
        playTone(frequency: Freq.E4, endFrequency: Freq.G4, duration: 0.06,
                 volume: gameVol(0.24), waveform: .wood, envelope: .spark, richness: 0.18)
    }

    /// Wrong letter placed — gentle low nudge
    func playLetterWrong() {
        guard isEnabled, gameSoundsEnabled else { return }
        guard canPlay("letterWrong", cooldown: 0.1) else { return }
        playTone(frequency: Freq.A3, duration: 0.08, volume: gameVol(0.20),
                 waveform: .wood, envelope: .dew, richness: 0.12)
    }

    // MARK: - Soundscapes (Ambient Audio Engine)

    /// Start a soundscape variant — plays bundled m4a file, falls back to generated drone
    func startSoundscape(_ soundscape: Soundscape, variantIndex: Int = 0) {
        guard isEnabled, ambientSoundsEnabled else { return }
        configureSessionIfNeeded()
        currentSoundscape = soundscape
        currentVariantIndex = variantIndex

        let clampedIndex = min(variantIndex, soundscape.variants.count - 1)
        let variant = soundscape.variants[max(0, clampedIndex)]

        // Try bundled audio file first
        if let url = bundleURL(for: variant.fileName, extension: "m4a") {
            DispatchQueue.main.async { [weak self] in
                guard let self else { return }
                do {
                    self.ambientPlayer?.stop()
                    let player = try AVAudioPlayer(contentsOf: url)
                    player.numberOfLoops = -1
                    player.volume = 0
                    player.prepareToPlay()
                    player.play()
                    self.ambientPlayer = player
                    self.fadeAmbient(to: self.ambientVolume * self.masterVolume * 10,
                                    duration: 3.0)
                } catch {
                    print("⚠️ Soundscape file playback error: \(error)")
                    self.startSoundscapeFallback(soundscape)
                }
            }
        } else {
            // Fallback to generated drone
            startSoundscapeFallback(soundscape)
        }
    }

    /// Fallback: generated ambient drone (used when audio file not found)
    /// Robust bundle file lookup — handles Unicode/accented filenames that
    /// `Bundle.main.url(forResource:)` can miss on real devices due to
    /// Unicode normalization differences (NFC vs NFD).
    private func bundleURL(for name: String, extension ext: String) -> URL? {
        // Standard lookup first
        if let url = Bundle.main.url(forResource: name, withExtension: ext) {
            return url
        }
        // Fallback: scan the bundle directory for a matching file
        guard let bundlePath = Bundle.main.resourcePath else { return nil }
        let fm = FileManager.default
        guard let contents = try? fm.contentsOfDirectory(atPath: bundlePath) else { return nil }
        let target = "\(name).\(ext)"
        // Compare using precomposedStringWithCanonicalMapping (NFC) for consistency
        let targetNFC = target.precomposedStringWithCanonicalMapping
        for file in contents where file.precomposedStringWithCanonicalMapping == targetNFC {
            return URL(fileURLWithPath: bundlePath).appendingPathComponent(file)
        }
        return nil
    }

    private func startSoundscapeFallback(_ soundscape: Soundscape) {
        cacheQueue.async { [weak self] in
            guard let self else { return }
            let data = self.generateSoundscapeData(soundscape.ambientConfig)
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
                                    duration: 3.0)
                } catch {
                    print("⚠️ Soundscape fallback playback error: \(error)")
                }
            }
        }
    }

    /// Legacy entry point for backward compatibility
    func startAmbient(preset: AmbientPreset) {
        // Map legacy presets to new soundscapes
        let soundscape: Soundscape
        switch preset {
        case .celestialLibrary, .cosmicDrift: soundscape = .observatoryNight
        case .oceanMorning, .tranquilWaves: soundscape = .dominicanBeach
        case .mountainSilence, .deepFocus: soundscape = .desertNightSky
        case .gardenRain, .stellarMeditation: soundscape = .rainyWindow
        }
        startSoundscape(soundscape)
    }

    /// Stop ambient with fade
    func stopAmbient(fadeDuration: TimeInterval = 2.0) {
        currentSoundscape = nil
        fadeAmbient(to: 0, duration: fadeDuration) { [weak self] in
            self?.ambientPlayer?.stop()
            self?.ambientPlayer = nil
        }
    }

    /// Crossfade to a different soundscape variant
    func crossfadeSoundscape(to soundscape: Soundscape, variantIndex: Int = 0) {
        stopAmbient(fadeDuration: 1.5)
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.6) { [weak self] in
            self?.startSoundscape(soundscape, variantIndex: variantIndex)
        }
    }

    /// Context-aware ambient volume ducking
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

    /// Whether a soundscape is currently playing
    var isSoundscapePlaying: Bool {
        ambientPlayer?.isPlaying == true
    }

    /// The currently active soundscape
    var activeSoundscape: Soundscape? {
        currentSoundscape
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

    /// Generate ambient drone data with per-soundscape breath & harmonic rates
    private func generateSoundscapeData(_ config: Soundscape.AmbientConfig) -> Data {
        let duration: TimeInterval = 8.0
        let numSamples = Int(Double(sampleRate) * duration)
        var samples = [Int16](repeating: 0, count: numSamples)

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

            // Per-soundscape breathing modulation
            let breathMod = 1.0 + sin(2.0 * Float.pi * t / config.breathRate) * 0.10

            // Per-soundscape harmonic movement
            let harmLfo = sin(2.0 * Float.pi * t / config.harmRate) * 0.3 + 0.7
            let moveLfo = sin(2.0 * Float.pi * t / (config.harmRate * 1.5)) * 0.5 + 0.5

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
    //
    // Architecture: Each note is rendered with MULTIPLE detuned voices (chorus)
    // to simulate the natural doubling of real acoustic instruments.
    // Wood = marimba/wooden bar: 3 voices ±6 cents, strong partials at 1:2:3:4:5:6
    // Bell = steel drum/gamelan: 3 voices ±8 cents, inharmonic partials (2.76, 4.07, 5.40)
    // Glass = clean crystalline: 2 voices ±4 cents, sparse harmonics
    //
    // Per-harmonic natural decay makes attacks bright and sustains warm,
    // exactly as real percussion behaves. Vibrato adds organic life.

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

        let releaseLevel: Float
        if releaseStart < decayStart + decaySamples {
            let partialDT = Float(releaseStart - decayStart) / Float(decaySamples)
            releaseLevel = sustainLevel + (1.0 - sustainLevel) * cos(min(partialDT, 1.0) * Float.pi * 0.5)
        } else {
            releaseLevel = sustainLevel
        }

        // ── Chorus voices ──
        // Gentle detuning creates natural thickness without audible beating.
        // Much subtler than a real ensemble — just enough to avoid clinical purity.
        let voiceDetunings: [Float] // cents
        switch waveform {
        case .glass: voiceDetunings = [-1.5, 1.5]      // 2 voices, barely-there shimmer
        case .wood:  voiceDetunings = [-2.5, 0, 2.5]   // 3 voices, gentle warmth
        case .bell:  voiceDetunings = [-3, 0, 3]        // 3 voices, subtle shimmer
        }
        let voiceCount = voiceDetunings.count

        // ── Vibrato ──
        // Very gentle — only on sounds long enough to benefit (>0.18s).
        // Bells get NO vibrato — they ring, they don't waver.
        let vibratoRate: Float = 4.0  // Hz — slower = more natural
        let vibratoDepthCents: Float
        let vibratoOnsetSamples: Int
        if duration < 0.18 {
            // Short sounds: no vibrato, it just sounds wobbly
            vibratoDepthCents = 0
            vibratoOnsetSamples = numSamples
        } else {
            switch waveform {
            case .glass: vibratoDepthCents = 2;   vibratoOnsetSamples = Int(0.06 * Float(sampleRate))
            case .wood:  vibratoDepthCents = 3;   vibratoOnsetSamples = Int(0.08 * Float(sampleRate))
            case .bell:  vibratoDepthCents = 0;   vibratoOnsetSamples = numSamples // bells don't waver
            }
        }

        // ── Harmonic content ──
        // Warmer, rounder spectra. The fundamental dominates with gentle color
        // from upper partials. Less is more — clarity over complexity.
        let harmonics: [(multiplier: Float, amplitude: Float)]
        switch waveform {
        case .glass:
            // Crystalline: nearly pure with the faintest octave color
            harmonics = [
                (1.0, 1.0),
                (2.0, 0.10 * richness),
                (3.0, 0.04 * richness),
            ]
        case .wood:
            // Warm wooden bar: strong fundamental, gentle octave warmth,
            // mild odd harmonics for body. Sounds like a soft marimba.
            harmonics = [
                (1.0,  1.0),
                (2.0,  0.40 * richness),     // Warm octave presence
                (3.0,  0.20 * richness),     // Gentle fifth color
                (4.0,  0.25 * richness),     // Soft double octave
                (5.0,  0.08 * richness),     // Faint upper color
            ]
        case .bell:
            // Gentle chime / kalimba — mild inharmonicity for shimmer
            // without the harsh metallic clang of aggressive steel drum ratios
            harmonics = [
                (1.0,   1.0),
                (2.0,   0.45 * richness),    // Warm octave
                (2.4,   0.20 * richness),    // Gentle inharmonic shimmer
                (3.0,   0.15 * richness),    // Soft twelfth
                (4.2,   0.08 * richness),    // Faint high color
            ]
        }

        // ── Per-harmonic decay rates ──
        // Gentle natural decay — upper partials fade a bit faster, creating
        // a warm sustain without harsh transient stacking on chords.
        let harmonicDecayRate: Float
        switch waveform {
        case .glass: harmonicDecayRate = 0.2
        case .wood:  harmonicDecayRate = 0.4
        case .bell:  harmonicDecayRate = 0.3
        }

        var samples = [Int16](repeating: 0, count: numSamples)

        // Phase accumulators: one per voice per harmonic
        var phases = [[Float]](repeating: [Float](repeating: 0, count: harmonics.count),
                               count: voiceCount)

        for i in 0..<numSamples {
            let t = Float(i) / Float(numSamples)
            let baseFreq = (startFreq + (endFreq - startFreq) * t) * detuneFactor

            // Vibrato: subtle pitch modulation with delayed onset
            let vibratoMod: Float
            if vibratoDepthCents > 0 && i > vibratoOnsetSamples && numSamples > vibratoOnsetSamples {
                let vibratoT = Float(i - vibratoOnsetSamples) / Float(numSamples - vibratoOnsetSamples)
                let rampIn = min(vibratoT * 4.0, 1.0)
                let vibrato = sin(2.0 * Float.pi * vibratoRate * Float(i) / Float(sampleRate))
                vibratoMod = pow(2.0, vibrato * vibratoDepthCents * rampIn / 1200.0)
            } else {
                vibratoMod = 1.0
            }

            // ADSR envelope
            let env: Float
            if i < attackSamples {
                let aT = Float(i) / Float(attackSamples)
                switch envelope {
                case .petal: env = sin(aT * Float.pi * 0.5)
                case .dew:   env = aT
                case .spark: env = aT * aT
                }
            } else if i < releaseStart {
                let dT = min(Float(i - decayStart) / Float(decaySamples), 1.0)
                env = sustainLevel + (1.0 - sustainLevel) * cos(dT * Float.pi * 0.5)
            } else {
                let rT = min(Float(i - releaseStart) / Float(releaseSamples), 1.0)
                switch envelope {
                case .petal: env = releaseLevel * cos(rT * Float.pi * 0.5)
                case .dew:   env = releaseLevel * (1.0 - rT)
                case .spark: env = releaseLevel * (1.0 - rT) * (1.0 - rT)
                }
            }

            // Sum all chorus voices × all harmonics
            var totalSample: Float = 0
            var totalAmp: Float = 0

            for v in 0..<voiceCount {
                let voiceDetune = pow(2.0, voiceDetunings[v] / 1200.0)
                let voiceFreq = baseFreq * vibratoMod * voiceDetune

                for h in 0..<harmonics.count {
                    let harmFreq = voiceFreq * harmonics[h].multiplier

                    // Harmonic rolloff: full below 2.5kHz, gentle roll to zero at 5kHz
                    // Warm ceiling — high enough to retain character, low enough to avoid shrillness
                    let rolloff: Float
                    if harmFreq <= 2500 {
                        rolloff = 1.0
                    } else if harmFreq < 5000 {
                        rolloff = (5000 - harmFreq) / 2500.0
                    } else {
                        rolloff = 0
                    }

                    // Per-harmonic natural decay: higher overtones fade faster
                    // Creates bright attack → warm sustain (like real percussion)
                    let harmonicDecay = exp(-t * (harmonics[h].multiplier - 1.0) * harmonicDecayRate)

                    let amp = harmonics[h].amplitude * rolloff * harmonicDecay
                    phases[v][h] += 2.0 * Float.pi * harmFreq / Float(sampleRate)
                    if phases[v][h] > 2.0 * Float.pi { phases[v][h] -= 2.0 * Float.pi }
                    totalSample += sin(phases[v][h]) * amp
                    totalAmp += amp
                }
            }

            if totalAmp > 0 { totalSample /= totalAmp }

            let value = totalSample * volume * env * 32767.0
            samples[i] = Int16(clamping: Int(value))
        }

        return buildWAVData(samples: samples)
    }

    // MARK: - Chord WAV Generation
    //
    // Mixes multiple simultaneous notes into ONE audio buffer with proper
    // phase relationships. This creates true chords where harmonics interact
    // naturally — beating, reinforcement, and the emergent warmth that
    // separate AVAudioPlayers can never achieve.

    private func generateChordWAVData(
        notes: [(frequency: Float, amplitude: Float)],
        duration: TimeInterval,
        volume: Float,
        waveform: Waveform,
        envelope: Envelope = .dew,
        richness: Float = 0.3
    ) -> Data {
        guard !notes.isEmpty else { return Data() }

        // Generate each note's WAV as raw float samples, then mix
        let numSamples = Int(Double(sampleRate) * duration)
        guard numSamples > 0 else { return Data() }

        // Accumulate all notes into a float buffer
        var mixBuffer = [Float](repeating: 0, count: numSamples)

        for note in notes {
            let noteData = generateWAVData(
                frequency: note.frequency,
                endFrequency: nil,
                duration: duration,
                volume: 1.0, // normalized — we'll scale after mixing
                waveform: waveform,
                envelope: envelope,
                richness: richness
            )

            // Extract Int16 samples from WAV data (skip 44-byte header)
            let headerSize = 44
            guard noteData.count > headerSize else { continue }
            let sampleCount = min((noteData.count - headerSize) / 2, numSamples)

            noteData.withUnsafeBytes { rawBuffer in
                let base = rawBuffer.baseAddress!.advanced(by: headerSize)
                    .assumingMemoryBound(to: Int16.self)
                for s in 0..<sampleCount {
                    mixBuffer[s] += Float(base[s]) / 32767.0 * note.amplitude
                }
            }
        }

        // Find peak for normalization (prevent clipping)
        var peak: Float = 0
        for s in 0..<numSamples {
            let abs = mixBuffer[s] < 0 ? -mixBuffer[s] : mixBuffer[s]
            if abs > peak { peak = abs }
        }
        let normalize = peak > 0 ? 1.0 / peak : 1.0

        // Convert to Int16 with final volume
        var samples = [Int16](repeating: 0, count: numSamples)
        for s in 0..<numSamples {
            let value = mixBuffer[s] * normalize * volume * 32767.0
            samples[s] = Int16(clamping: Int(value))
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

// MARK: - Legacy Ambient Preset (backward compatibility)

enum AmbientPreset: String, CaseIterable {
    case celestialLibrary
    case oceanMorning
    case mountainSilence
    case gardenRain
    case cosmicDrift
    case deepFocus
    case tranquilWaves
    case stellarMeditation
}
