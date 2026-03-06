import AVFoundation
import Foundation

// MARK: - Audio Service

/// Crash-proof synthesized audio feedback using in-memory WAV generation + AVAudioPlayer.
///
/// Previous implementation used AVAudioEngine which crashes on certain simulator
/// configurations (iPad Pro M5, iOS 26.2) with:
///   `'required condition is false: inputNode != nullptr || outputNode != nullptr'`
///
/// This version generates WAV buffers programmatically and plays them via AVAudioPlayer,
/// completely avoiding AVAudioEngine and its problematic I/O node access.
/// Phase accumulation ensures click-free frequency sweeps.
@Observable
final class AudioService {
    static let shared = AudioService()

    var isEnabled: Bool = true
    var uiSoundsEnabled: Bool = true
    var gameSoundsEnabled: Bool = true
    var achievementSoundsEnabled: Bool = true
    var ambientSoundsEnabled: Bool = false
    var masterVolume: Float = 0.08

    /// Active players kept alive during playback
    private var activePlayers: [AVAudioPlayer] = []
    private var isSessionConfigured = false

    private init() {}

    // MARK: - Sync from UserProfile

    /// Read all sound preferences from a SwiftData `UserProfile` so the
    /// AudioService's guard checks match what the user configured in Settings.
    func syncFromProfile(_ profile: UserProfile) {
        isEnabled = profile.soundEnabled
        gameSoundsEnabled = profile.gamesSoundsEnabled
            && profile.flashcardsSoundsEnabled
            && profile.grammarSoundsEnabled
            && profile.wordBuilderSoundsEnabled
        uiSoundsEnabled = profile.uiSoundsEnabled
        achievementSoundsEnabled = profile.achievementSoundsEnabled
        ambientSoundsEnabled = profile.ambientSoundsEnabled
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

    // MARK: - Sound Effects

    /// Card flip sound — descending sine sweep
    func playPlink() {
        guard isEnabled, gameSoundsEnabled else { return }
        playTone(frequency: 2200, endFrequency: 1600, duration: 0.12, volume: masterVolume * 0.6)
    }

    /// "Got It!" success — major arpeggio C5-E5-G5
    func playWarmPulse() {
        guard isEnabled, gameSoundsEnabled else { return }
        let notes: [(freq: Float, delay: TimeInterval)] = [
            (523.25, 0),      // C5
            (659.25, 0.035),  // E5
            (783.99, 0.070),  // G5
        ]
        for note in notes {
            DispatchQueue.main.asyncAfter(deadline: .now() + note.delay) { [weak self] in
                self?.playTone(frequency: note.freq, duration: 0.15, volume: (self?.masterVolume ?? 0.08) * 0.5)
            }
        }
    }

    /// "Still Learning" nudge — descending triangle wave
    func playSoftNudge() {
        guard isEnabled, gameSoundsEnabled else { return }
        playTone(frequency: 180, endFrequency: 120, duration: 0.12, volume: masterVolume * 0.4, waveform: .triangle)
    }

    /// Navigation transition — falling tone accent
    func playWhoosh() {
        guard isEnabled, uiSoundsEnabled else { return }
        playTone(frequency: 600, endFrequency: 200, duration: 0.15, volume: masterVolume * 0.3)
    }

    /// Subtle UI click
    func playSoftClick() {
        guard isEnabled, uiSoundsEnabled else { return }
        playTone(frequency: 800, endFrequency: 500, duration: 0.05, volume: masterVolume * 0.3)
    }

    /// Game complete celebration — pentatonic cascade
    func playCelebration() {
        guard isEnabled, achievementSoundsEnabled else { return }
        let cascade: [(freq: Float, delay: TimeInterval)] = [
            (783.99, 0),      // G5
            (1046.50, 0.12),  // C6
            (1174.66, 0.24),  // D6
            (1567.98, 0.36),  // G6
            (2093.00, 0.48),  // C7
        ]
        for note in cascade {
            DispatchQueue.main.asyncAfter(deadline: .now() + note.delay) { [weak self] in
                self?.playTone(frequency: note.freq, duration: 0.3, volume: (self?.masterVolume ?? 0.08) * 0.5)
            }
        }
    }

    /// Premium button tap
    func playButtonTap() {
        guard isEnabled, uiSoundsEnabled else { return }
        playTone(frequency: 1200, endFrequency: 800, duration: 0.08, volume: masterVolume * 0.3)
    }

    /// WordBuilder: tile lift
    func playTilePick() {
        guard isEnabled, gameSoundsEnabled else { return }
        playTone(frequency: 880, duration: 0.06, volume: masterVolume * 0.4)
    }

    /// WordBuilder: tile snap into place
    func playTilePlace() {
        guard isEnabled, gameSoundsEnabled else { return }
        playTone(frequency: 220, endFrequency: 110, duration: 0.08, volume: masterVolume * 0.4)
    }

    /// WordBuilder: correct word completed — glass chime
    func playWordCorrect() {
        guard isEnabled, gameSoundsEnabled else { return }
        playTone(frequency: 1318.51, duration: 0.5, volume: masterVolume * 0.5) // E6
    }

    /// Streak bonus — ascending arpeggio
    func playStreakBonus() {
        guard isEnabled, achievementSoundsEnabled else { return }
        let arpeggio: [(freq: Float, delay: TimeInterval)] = [
            (523.25, 0),      // C5
            (659.25, 0.10),   // E5
            (783.99, 0.20),   // G5
            (1046.50, 0.30),  // C6
        ]
        for note in arpeggio {
            DispatchQueue.main.asyncAfter(deadline: .now() + note.delay) { [weak self] in
                self?.playTone(frequency: note.freq, duration: 0.2, volume: (self?.masterVolume ?? 0.08) * 0.4)
            }
        }
    }

    /// Correct letter placed
    func playLetterCorrect() {
        guard isEnabled, gameSoundsEnabled else { return }
        playTone(frequency: 880, endFrequency: 1320, duration: 0.08, volume: masterVolume * 0.15)
    }

    /// Wrong letter placed
    func playLetterWrong() {
        guard isEnabled, gameSoundsEnabled else { return }
        playTone(frequency: 280, endFrequency: 140, duration: 0.08, volume: masterVolume * 0.15, waveform: .triangle)
    }

    /// Hint sparkle
    func playHintSparkle() {
        guard isEnabled, gameSoundsEnabled else { return }
        playTone(frequency: 2637.02, duration: 0.25, volume: masterVolume * 0.3) // E7
    }

    // MARK: - Core Tone Synthesis

    private enum Waveform {
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

        let wavData = generateWAVData(
            frequency: frequency,
            endFrequency: endFrequency,
            duration: duration,
            volume: volume,
            waveform: waveform
        )

        do {
            let player = try AVAudioPlayer(data: wavData)
            player.prepareToPlay()
            player.play()
            activePlayers.append(player)

            // Clean up reference after playback finishes
            let cleanupDelay = duration + 0.15
            DispatchQueue.main.asyncAfter(deadline: .now() + cleanupDelay) { [weak self] in
                self?.activePlayers.removeAll { $0 === player }
            }
        } catch {
            print("⚠️ Tone playback error: \(error)")
        }
    }

    // MARK: - WAV Data Generation

    private let sampleRate: Int = 44100

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

        // Generate 16-bit mono PCM samples with proper phase accumulation
        var samples = [Int16](repeating: 0, count: numSamples)
        var phase: Float = 0

        for i in 0..<numSamples {
            let t = Float(i) / Float(numSamples)
            let currentFreq = startFreq + (endFreq - startFreq) * t

            // Phase accumulation prevents discontinuities during frequency sweeps
            phase += 2.0 * Float.pi * currentFreq / Float(sampleRate)
            if phase > 2.0 * Float.pi { phase -= 2.0 * Float.pi }

            // Envelope: 5% attack, 55% sustain with gentle decay, 40% quadratic release
            let envelope: Float
            if t < 0.05 {
                envelope = t / 0.05
            } else if t < 0.6 {
                let decayT = (t - 0.05) / 0.55
                envelope = 1.0 - decayT * 0.08 // gentle 8% decay during sustain
            } else {
                let releaseT = (t - 0.6) / 0.4
                envelope = 0.92 * (1.0 - releaseT) * (1.0 - releaseT) // quadratic release
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

        // RIFF header
        data.append(contentsOf: "RIFF".utf8)
        appendUInt32(&data, fileSize)
        data.append(contentsOf: "WAVE".utf8)

        // fmt sub-chunk
        data.append(contentsOf: "fmt ".utf8)
        appendUInt32(&data, 16)              // sub-chunk size
        appendUInt16(&data, 1)               // PCM format
        appendUInt16(&data, numChannels)
        appendUInt32(&data, UInt32(sampleRate))
        let byteRate = UInt32(sampleRate) * UInt32(numChannels) * UInt32(bitsPerSample / 8)
        appendUInt32(&data, byteRate)
        let blockAlign = numChannels * (bitsPerSample / 8)
        appendUInt16(&data, blockAlign)
        appendUInt16(&data, bitsPerSample)

        // data sub-chunk
        data.append(contentsOf: "data".utf8)
        appendUInt32(&data, dataSize)

        // PCM samples
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
