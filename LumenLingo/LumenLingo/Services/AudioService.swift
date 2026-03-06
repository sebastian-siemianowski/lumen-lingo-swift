import AVFoundation
import Foundation

// MARK: - Audio Service

/// Synthesized audio feedback using AVAudioEngine.
/// Port of React's useAudioFeedback.jsx — all sounds generated programmatically.
@Observable
final class AudioService {
    static let shared = AudioService()

    var isEnabled: Bool = true
    var uiSoundsEnabled: Bool = true
    var gameSoundsEnabled: Bool = true
    var achievementSoundsEnabled: Bool = true
    var masterVolume: Float = 0.08

    private var audioEngine: AVAudioEngine?
    private var isInitialized = false

    private init() {}

    // MARK: - Initialization

    private func ensureInitialized() {
        guard !isInitialized else { return }
        do {
            let engine = AVAudioEngine()
            self.audioEngine = engine

            try AVAudioSession.sharedInstance().setCategory(.ambient, mode: .default)
            try AVAudioSession.sharedInstance().setActive(true)

            try engine.start()
            isInitialized = true
        } catch {
            print("⚠️ AudioService initialization failed: \(error)")
        }
    }

    // MARK: - Sound Effects

    /// Card flip sound — two sine tones descending
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

    /// Navigation transition — noise burst with tonal accent
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

    // MARK: - Tone Generation

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
        ensureInitialized()
        guard let engine = audioEngine, engine.isRunning else { return }

        let sampleRate = Float(engine.outputNode.outputFormat(forBus: 0).sampleRate)
        let frameCount = AVAudioFrameCount(sampleRate * Float(duration))
        guard frameCount > 0 else { return }

        let format = engine.outputNode.outputFormat(forBus: 0)
        guard let buffer = AVAudioPCMBuffer(pcmFormat: format, frameCapacity: frameCount) else { return }
        buffer.frameLength = frameCount

        guard let channelData = buffer.floatChannelData else { return }
        let channelCount = Int(format.channelCount)

        let startFreq = frequency
        let endFreq = endFrequency ?? frequency

        for frame in 0..<Int(frameCount) {
            let t = Float(frame) / Float(frameCount)
            let currentFreq = startFreq + (endFreq - startFreq) * t
            let phase = 2.0 * Float.pi * currentFreq * Float(frame) / sampleRate

            // Envelope: attack 10%, sustain 60%, release 30%
            let envelope: Float
            if t < 0.1 {
                envelope = t / 0.1
            } else if t < 0.7 {
                envelope = 1.0
            } else {
                envelope = (1.0 - t) / 0.3
            }

            let sample: Float
            switch waveform {
            case .sine:
                sample = sin(phase) * volume * envelope
            case .triangle:
                let normalized = phase.truncatingRemainder(dividingBy: 2 * Float.pi) / (2 * Float.pi)
                sample = (2.0 * abs(2.0 * normalized - 1.0) - 1.0) * volume * envelope
            }

            for channel in 0..<channelCount {
                channelData[channel][frame] = sample
            }
        }

        let playerNode = AVAudioPlayerNode()
        engine.attach(playerNode)
        engine.connect(playerNode, to: engine.mainMixerNode, format: format)
        playerNode.play()
        playerNode.scheduleBuffer(buffer) {
            DispatchQueue.main.async {
                playerNode.stop()
                engine.detach(playerNode)
            }
        }
    }
}
