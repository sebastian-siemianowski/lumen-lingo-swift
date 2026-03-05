import { useCallback, useRef, useEffect } from 'react';

// Lightweight audio feedback hook using Web Audio API
// Creates subtle, dimensional sounds for micro-interactions
// Inspired by Duolingo, Apple, and Nintendo UI sound design

export default function useAudioFeedback() {
  const audioContextRef = useRef(null);
  const enabledRef = useRef(true);

  // Initialize audio context lazily (requires user interaction first)
  const getAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      try {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      } catch (e) {
        console.warn('Web Audio API not supported');
        return null;
      }
    }
    return audioContextRef.current;
  }, []);

  // Check if sound is enabled in preferences
  useEffect(() => {
    const checkSoundEnabled = () => {
      try {
        const saved = localStorage.getItem('audioFeedbackEnabled');
        enabledRef.current = saved === null ? true : saved === 'true';
      } catch {
        enabledRef.current = true;
      }
    };
    checkSoundEnabled();
    window.addEventListener('audioFeedbackChanged', checkSoundEnabled);
    window.addEventListener('soundSettingsChanged', checkSoundEnabled);
    return () => {
      window.removeEventListener('audioFeedbackChanged', checkSoundEnabled);
      window.removeEventListener('soundSettingsChanged', checkSoundEnabled);
    };
  }, []);

  // Glass "plink" - crystalline card flip sound
  const playPlink = useCallback(() => {
    if (!enabledRef.current) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    // Primary glass tap
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    
    osc1.frequency.setValueAtTime(2200, ctx.currentTime);
    osc1.frequency.exponentialRampToValueAtTime(1600, ctx.currentTime + 0.06);
    osc1.type = 'sine';
    
    gain1.gain.setValueAtTime(0, ctx.currentTime);
    gain1.gain.linearRampToValueAtTime(0.07, ctx.currentTime + 0.008);
    gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
    
    osc1.start(ctx.currentTime);
    osc1.stop(ctx.currentTime + 0.12);

    // Subtle harmonic shimmer
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    
    osc2.frequency.setValueAtTime(3300, ctx.currentTime);
    osc2.frequency.exponentialRampToValueAtTime(2400, ctx.currentTime + 0.08);
    osc2.type = 'sine';
    
    gain2.gain.setValueAtTime(0, ctx.currentTime + 0.01);
    gain2.gain.linearRampToValueAtTime(0.03, ctx.currentTime + 0.02);
    gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
    
    osc2.start(ctx.currentTime + 0.01);
    osc2.stop(ctx.currentTime + 0.15);
  }, [getAudioContext]);

  // Glass chime + sparkle tail - "Got It!" success sound
  const playWarmPulse = useCallback(() => {
    if (!enabledRef.current) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    // Main chime - ascending, joyful
    const frequencies = [523, 659, 784]; // C5, E5, G5 - major chord arpeggio
    frequencies.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const delay = i * 0.035;
      osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.02, ctx.currentTime + delay + 0.1);
      osc.type = 'sine';

      gain.gain.setValueAtTime(0, ctx.currentTime + delay);
      gain.gain.linearRampToValueAtTime(0.08 - (i * 0.015), ctx.currentTime + delay + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.25);

      osc.start(ctx.currentTime + delay);
      osc.stop(ctx.currentTime + delay + 0.25);
    });

    // Sparkle tail - high shimmer
    [1568, 2093, 2637].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const delay = 0.08 + (i * 0.025);
      osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);
      osc.type = 'sine';

      gain.gain.setValueAtTime(0, ctx.currentTime + delay);
      gain.gain.linearRampToValueAtTime(0.025, ctx.currentTime + delay + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.18);

      osc.start(ctx.currentTime + delay);
      osc.stop(ctx.currentTime + delay + 0.18);
    });
  }, [getAudioContext]);

  // Soft muted wooden click - "Still Learning" (supportive, not punishing)
  const playSoftNudge = useCallback(() => {
    if (!enabledRef.current) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    // Soft wooden thunk - low, warm, gentle
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.frequency.setValueAtTime(180, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.08);
    osc.type = 'triangle';

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(400, ctx.currentTime);
    filter.Q.setValueAtTime(1, ctx.currentTime);

    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.12);

    // Subtle harmonic - warmth
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.connect(gain2);
    gain2.connect(ctx.destination);

    osc2.frequency.setValueAtTime(280, ctx.currentTime);
    osc2.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.06);
    osc2.type = 'sine';

    gain2.gain.setValueAtTime(0, ctx.currentTime);
    gain2.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 0.01);
    gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

    osc2.start(ctx.currentTime);
    osc2.stop(ctx.currentTime + 0.1);
  }, [getAudioContext]);

  // Low whoosh - progression/movement sound
  const playWhoosh = useCallback(() => {
    if (!enabledRef.current) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    // White noise filtered for whoosh effect
    const bufferSize = ctx.sampleRate * 0.18;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 1.5);
    }

    const source = ctx.createBufferSource();
    const filter = ctx.createBiquadFilter();
    const gainNode = ctx.createGain();

    source.buffer = buffer;
    source.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(600, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.12);
    filter.Q.setValueAtTime(0.5, ctx.currentTime);

    gainNode.gain.setValueAtTime(0.05, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);

    source.start(ctx.currentTime);
  }, [getAudioContext]);

  // Soft click - subtle UI interaction
  const playSoftClick = useCallback(() => {
    if (!enabledRef.current) return;
    
    // Check UI sounds category
    try {
      const uiEnabled = localStorage.getItem('uiSoundsEnabled');
      if (uiEnabled === 'false') return;
    } catch {}
    
    const ctx = getAudioContext();
    if (!ctx) return;

    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.frequency.setValueAtTime(800, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(500, ctx.currentTime + 0.03);
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 0.003);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.05);
  }, [getAudioContext]);

  // Celebration - tranquil, ethereal chime cascade (spa/meditation inspired)
  const playCelebration = useCallback(() => {
    if (!enabledRef.current) return;
    
    // Check achievement sounds category
    try {
      const achievementEnabled = localStorage.getItem('achievementSoundsEnabled');
      if (achievementEnabled === 'false') return;
    } catch {}
    
    const ctx = getAudioContext();
    if (!ctx) return;

    // Gentle pentatonic cascade - peaceful and warm
    const notes = [
      { freq: 392, delay: 0, duration: 0.8 },       // G4
      { freq: 523, delay: 0.15, duration: 0.75 },   // C5
      { freq: 587, delay: 0.30, duration: 0.70 },   // D5
      { freq: 784, delay: 0.48, duration: 0.85 },   // G5
      { freq: 1047, delay: 0.68, duration: 1.0 },   // C6 - gentle peak
    ];

    notes.forEach(({ freq, delay, duration }) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();
      
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);
      osc.type = 'sine';

      // Soft lowpass for warmth
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(2000, ctx.currentTime + delay);
      filter.Q.setValueAtTime(0.5, ctx.currentTime + delay);

      // Very gentle envelope - slow attack, long decay
      gain.gain.setValueAtTime(0, ctx.currentTime + delay);
      gain.gain.linearRampToValueAtTime(0.055, ctx.currentTime + delay + 0.08);
      gain.gain.setValueAtTime(0.055, ctx.currentTime + delay + duration * 0.3);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + duration);

      osc.start(ctx.currentTime + delay);
      osc.stop(ctx.currentTime + delay + duration);
    });

    // Ethereal shimmer - high, delicate overtones
    [1319, 1568, 2093].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const delay = 0.5 + (i * 0.12);
      osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);
      osc.type = 'sine';

      gain.gain.setValueAtTime(0, ctx.currentTime + delay);
      gain.gain.linearRampToValueAtTime(0.018, ctx.currentTime + delay + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.5);

      osc.start(ctx.currentTime + delay);
      osc.stop(ctx.currentTime + delay + 0.5);
    });

    // Warm pad underneath - subtle foundation
    const padOsc = ctx.createOscillator();
    const padGain = ctx.createGain();
    const padFilter = ctx.createBiquadFilter();
    
    padOsc.connect(padFilter);
    padFilter.connect(padGain);
    padGain.connect(ctx.destination);

    padOsc.frequency.setValueAtTime(196, ctx.currentTime); // G3
    padOsc.type = 'sine';
    
    padFilter.type = 'lowpass';
    padFilter.frequency.setValueAtTime(400, ctx.currentTime);

    padGain.gain.setValueAtTime(0, ctx.currentTime);
    padGain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 0.2);
    padGain.gain.setValueAtTime(0.04, ctx.currentTime + 0.6);
    padGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);

    padOsc.start(ctx.currentTime);
    padOsc.stop(ctx.currentTime + 1.2);
  }, [getAudioContext]);

  // Button tap - premium glass button press
  const playButtonTap = useCallback(() => {
    if (!enabledRef.current) return;
    
    // Check UI sounds category
    try {
      const uiEnabled = localStorage.getItem('uiSoundsEnabled');
      if (uiEnabled === 'false') return;
    } catch {}
    
    const ctx = getAudioContext();
    if (!ctx) return;

    // Primary tap - crisp and satisfying
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.connect(gain1);
    gain1.connect(ctx.destination);

    osc1.frequency.setValueAtTime(1200, ctx.currentTime);
    osc1.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.04);
    osc1.type = 'sine';

    gain1.gain.setValueAtTime(0, ctx.currentTime);
    gain1.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.005);
    gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

    osc1.start(ctx.currentTime);
    osc1.stop(ctx.currentTime + 0.08);

    // Subtle harmonic overtone
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.connect(gain2);
    gain2.connect(ctx.destination);

    osc2.frequency.setValueAtTime(2000, ctx.currentTime);
    osc2.frequency.exponentialRampToValueAtTime(1400, ctx.currentTime + 0.03);
    osc2.type = 'sine';

    gain2.gain.setValueAtTime(0, ctx.currentTime);
    gain2.gain.linearRampToValueAtTime(0.03, ctx.currentTime + 0.003);
    gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);

    osc2.start(ctx.currentTime);
    osc2.stop(ctx.currentTime + 0.06);
  }, [getAudioContext]);

  // Navigate sound - soft whoosh with direction
  const playNavigate = useCallback(() => {
    if (!enabledRef.current) return;
    
    // Check UI sounds category
    try {
      const uiEnabled = localStorage.getItem('uiSoundsEnabled');
      if (uiEnabled === 'false') return;
    } catch {}
    
    const ctx = getAudioContext();
    if (!ctx) return;

    // Soft swoosh
    const bufferSize = ctx.sampleRate * 0.15;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      const envelope = Math.sin((i / bufferSize) * Math.PI);
      data[i] = (Math.random() * 2 - 1) * envelope * 0.5;
    }

    const source = ctx.createBufferSource();
    const filter = ctx.createBiquadFilter();
    const gainNode = ctx.createGain();

    source.buffer = buffer;
    source.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(800, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.12);
    filter.Q.setValueAtTime(0.7, ctx.currentTime);

    gainNode.gain.setValueAtTime(0.06, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

    source.start(ctx.currentTime);

    // Subtle tonal accent
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.08);
    osc.type = 'sine';

    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.1);
  }, [getAudioContext]);

  // ===== WORD BUILDER SPECIFIC SOUNDS =====
  // AirPods UI + Piano inspired - soft, premium, science-based multisensory

  // Tile picked - paper-soft drag sound (like lifting a card)
  const playTilePick = useCallback(() => {
    if (!enabledRef.current) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    // Soft paper lift - filtered noise burst
    const bufferSize = ctx.sampleRate * 0.035;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      const envelope = Math.pow(1 - i / bufferSize, 2);
      data[i] = (Math.random() * 2 - 1) * envelope * 0.3;
    }
    
    const source = ctx.createBufferSource();
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();
    
    source.buffer = buffer;
    source.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(2000, ctx.currentTime);
    filter.Q.setValueAtTime(0.5, ctx.currentTime);
    
    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.035);
    
    source.start(ctx.currentTime);

    // Subtle piano-like attack tone
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    osc.connect(oscGain);
    oscGain.connect(ctx.destination);

    osc.frequency.setValueAtTime(880, ctx.currentTime); // A5
    osc.type = 'sine';

    oscGain.gain.setValueAtTime(0, ctx.currentTime);
    oscGain.gain.linearRampToValueAtTime(0.025, ctx.currentTime + 0.005);
    oscGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.06);
  }, [getAudioContext]);

  // Tile placed - magnetic click (satisfying snap-in)
  const playTilePlace = useCallback(() => {
    if (!enabledRef.current) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    // Primary magnetic click - low thump with resonance
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    const filter1 = ctx.createBiquadFilter();
    
    osc1.connect(filter1);
    filter1.connect(gain1);
    gain1.connect(ctx.destination);

    osc1.frequency.setValueAtTime(220, ctx.currentTime);
    osc1.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + 0.04);
    osc1.type = 'sine';
    
    filter1.type = 'lowpass';
    filter1.frequency.setValueAtTime(800, ctx.currentTime);

    gain1.gain.setValueAtTime(0, ctx.currentTime);
    gain1.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 0.003);
    gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

    osc1.start(ctx.currentTime);
    osc1.stop(ctx.currentTime + 0.08);

    // High harmonic click - the "snap" part
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.connect(gain2);
    gain2.connect(ctx.destination);

    osc2.frequency.setValueAtTime(1760, ctx.currentTime); // A6
    osc2.frequency.exponentialRampToValueAtTime(1320, ctx.currentTime + 0.02);
    osc2.type = 'sine';

    gain2.gain.setValueAtTime(0, ctx.currentTime);
    gain2.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 0.002);
    gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

    osc2.start(ctx.currentTime);
    osc2.stop(ctx.currentTime + 0.04);
  }, [getAudioContext]);

  // Correct word - glass chime (single elegant note + shimmer)
  const playWordCorrect = useCallback(() => {
    if (!enabledRef.current) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    // Primary glass chime - pure, crystalline E6
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.connect(gain1);
    gain1.connect(ctx.destination);

    osc1.frequency.setValueAtTime(1319, ctx.currentTime); // E6
    osc1.type = 'sine';

    gain1.gain.setValueAtTime(0, ctx.currentTime);
    gain1.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.01);
    gain1.gain.setValueAtTime(0.08, ctx.currentTime + 0.05);
    gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);

    osc1.start(ctx.currentTime);
    osc1.stop(ctx.currentTime + 0.5);

    // Octave shimmer - ethereal tail
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.connect(gain2);
    gain2.connect(ctx.destination);

    osc2.frequency.setValueAtTime(2637, ctx.currentTime + 0.02); // E7
    osc2.type = 'sine';

    gain2.gain.setValueAtTime(0, ctx.currentTime + 0.02);
    gain2.gain.linearRampToValueAtTime(0.03, ctx.currentTime + 0.04);
    gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);

    osc2.start(ctx.currentTime + 0.02);
    osc2.stop(ctx.currentTime + 0.4);

    // Fifth harmonic for richness
    const osc3 = ctx.createOscillator();
    const gain3 = ctx.createGain();
    osc3.connect(gain3);
    gain3.connect(ctx.destination);

    osc3.frequency.setValueAtTime(1976, ctx.currentTime + 0.01); // B6
    osc3.type = 'sine';

    gain3.gain.setValueAtTime(0, ctx.currentTime + 0.01);
    gain3.gain.linearRampToValueAtTime(0.025, ctx.currentTime + 0.025);
    gain3.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

    osc3.start(ctx.currentTime + 0.01);
    osc3.stop(ctx.currentTime + 0.35);
  }, [getAudioContext]);

  // Perfect streak - gentle piano arpeggio (3+ correct in a row)
  const playStreakBonus = useCallback(() => {
    if (!enabledRef.current) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    // Gentle ascending arpeggio - C major with soft attack
    const notes = [
      { freq: 523, delay: 0 },      // C5
      { freq: 659, delay: 0.10 },   // E5
      { freq: 784, delay: 0.20 },   // G5
      { freq: 1047, delay: 0.32 },  // C6 - resolution
    ];

    notes.forEach(({ freq, delay }, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();
      
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);
      osc.type = 'sine';
      
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(3000, ctx.currentTime + delay);

      // Piano-like envelope - soft attack, gentle decay
      gain.gain.setValueAtTime(0, ctx.currentTime + delay);
      gain.gain.linearRampToValueAtTime(0.055 - (i * 0.008), ctx.currentTime + delay + 0.02);
      gain.gain.setValueAtTime(0.055 - (i * 0.008), ctx.currentTime + delay + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.4);

      osc.start(ctx.currentTime + delay);
      osc.stop(ctx.currentTime + delay + 0.4);
    });
  }, [getAudioContext]);

  // ===== PREMIUM MICRO-FEEDBACK SOUNDS (< 20% volume) =====

  // Correct letter placed - bright ascending "ding" 
  const playLetterCorrect = useCallback(() => {
    if (!enabledRef.current) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    // Bright ascending tone - positive, uplifting
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.connect(gain1);
    gain1.connect(ctx.destination);

    // Ascending pitch = positive feeling
    osc1.frequency.setValueAtTime(880, ctx.currentTime);
    osc1.frequency.exponentialRampToValueAtTime(1320, ctx.currentTime + 0.08);
    osc1.type = 'sine';

    gain1.gain.setValueAtTime(0, ctx.currentTime);
    gain1.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 0.008);
    gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);

    osc1.start(ctx.currentTime);
    osc1.stop(ctx.currentTime + 0.15);

    // Sparkle overtone
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.connect(gain2);
    gain2.connect(ctx.destination);

    osc2.frequency.setValueAtTime(1760, ctx.currentTime + 0.02);
    osc2.frequency.exponentialRampToValueAtTime(2200, ctx.currentTime + 0.08);
    osc2.type = 'sine';

    gain2.gain.setValueAtTime(0, ctx.currentTime + 0.02);
    gain2.gain.linearRampToValueAtTime(0.025, ctx.currentTime + 0.03);
    gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

    osc2.start(ctx.currentTime + 0.02);
    osc2.stop(ctx.currentTime + 0.12);
  }, [getAudioContext]);

  // Wrong letter placed - low descending "thud"
  const playLetterWrong = useCallback(() => {
    if (!enabledRef.current) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    // Low descending tone - gentle negative feedback
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    
    osc1.connect(filter);
    filter.connect(gain1);
    gain1.connect(ctx.destination);

    // Descending pitch = negative/wrong feeling
    osc1.frequency.setValueAtTime(280, ctx.currentTime);
    osc1.frequency.exponentialRampToValueAtTime(140, ctx.currentTime + 0.1);
    osc1.type = 'triangle';
    
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(500, ctx.currentTime);

    gain1.gain.setValueAtTime(0, ctx.currentTime);
    gain1.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.01);
    gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

    osc1.start(ctx.currentTime);
    osc1.stop(ctx.currentTime + 0.12);

    // Soft thump undertone
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.connect(gain2);
    gain2.connect(ctx.destination);

    osc2.frequency.setValueAtTime(100, ctx.currentTime);
    osc2.frequency.exponentialRampToValueAtTime(60, ctx.currentTime + 0.06);
    osc2.type = 'sine';

    gain2.gain.setValueAtTime(0, ctx.currentTime);
    gain2.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 0.005);
    gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

    osc2.start(ctx.currentTime);
    osc2.stop(ctx.currentTime + 0.08);
  }, [getAudioContext]);

  // Hint used - whisper sparkle ("shhh-ding")
  const playHintSparkle = useCallback(() => {
    if (!enabledRef.current) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    // "Shhh" - soft breath/whisper noise
    const bufferSize = ctx.sampleRate * 0.12;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < bufferSize; i++) {
      const envelope = Math.sin((i / bufferSize) * Math.PI) * 0.3;
      data[i] = (Math.random() * 2 - 1) * envelope;
    }

    const source = ctx.createBufferSource();
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();

    source.buffer = buffer;
    source.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    filter.type = 'highpass';
    filter.frequency.setValueAtTime(3000, ctx.currentTime);
    filter.Q.setValueAtTime(0.3, ctx.currentTime);

    gain.gain.setValueAtTime(0.02, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.03, ctx.currentTime + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

    source.start(ctx.currentTime);

    // "Ding" - crystalline sparkle after the whisper
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    osc.connect(oscGain);
    oscGain.connect(ctx.destination);

    osc.frequency.setValueAtTime(2637, ctx.currentTime + 0.06); // E7
    osc.type = 'sine';

    oscGain.gain.setValueAtTime(0, ctx.currentTime + 0.06);
    oscGain.gain.linearRampToValueAtTime(0.025, ctx.currentTime + 0.07);
    oscGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);

    osc.start(ctx.currentTime + 0.06);
    osc.stop(ctx.currentTime + 0.25);

    // Secondary shimmer - magical quality
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.connect(gain2);
    gain2.connect(ctx.destination);

    osc2.frequency.setValueAtTime(3951, ctx.currentTime + 0.08); // B7
    osc2.type = 'sine';

    gain2.gain.setValueAtTime(0, ctx.currentTime + 0.08);
    gain2.gain.linearRampToValueAtTime(0.012, ctx.currentTime + 0.09);
    gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);

    osc2.start(ctx.currentTime + 0.08);
    osc2.stop(ctx.currentTime + 0.2);
  }, [getAudioContext]);

  return {
    playPlink,       // Card flip - glass tap
    playWarmPulse,   // Got it! - glass chime + sparkle
    playWhoosh,      // Progress - soft whoosh
    playSoftClick,   // Button press
    playSoftNudge,   // Still learning - wooden click
    playCelebration, // Game complete - triumphant fanfare
    playButtonTap,   // Premium button tap
    playNavigate,    // Navigation/transition sound
    // Word Builder specific
    playTilePick,    // Tile picked - soft click
    playTilePlace,   // Tile placed - magnetic snap
    playWordCorrect, // Correct word - bell chime + shimmer
    playStreakBonus, // Perfect streak - ascending tri-tone
    // Premium micro-feedback (< 20% volume)
    playLetterCorrect, // Correct letter placed - soft "tock"
    playLetterWrong,   // Wrong letter placed - soft "puff"
    playHintSparkle    // Hint used - whisper sparkle
  };
}