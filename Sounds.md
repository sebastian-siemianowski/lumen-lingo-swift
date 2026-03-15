# LumenLingo — Sound Quality & Emotional Experience Masterplan

> **Vision**: Transform every sound in LumenLingo into a moment of beauty.
> Each tone, each haptic pulse, each silence should feel like a gift — a brief
> encounter with something carefully made, something that respects the learner's
> attention and emotional state. The goal is not merely functional feedback but
> a sonic experience worthy of the hours people spend inside this app.
>
> **Guiding Philosophy**: The greatest sound designers — Brian Eno composing
> ambient music for airports, Jony Ive's team crafting the iPhone's keyboard
> clicks, Nintendo's Kazumi Totaka shaping the sounds of Animal Crossing,
> Playdead's Martin Stig Andersen sculpting the audio of Inside — all share
> one belief: *sound should feel inevitable*. Not decorative. Not clever.
> Inevitable, as though the interaction could never have sounded any other way.
>
> **Current Problem**: The existing sounds are synthesized tones that prioritize
> technical coverage over emotional care. Many are harsh, piercing, or abrupt.
> The flashcard tap sound is painfully sharp. Multiple rapid interactions create
> an irritating cacophony rather than a musical flow. The sounds lack warmth,
> breath, and the kind of psychoacoustic gentleness that makes apps like
> Headspace, Duolingo, or Calm feel nurturing to use for extended sessions.

---

## The Seven Principles of LumenLingo Sound

### 1. Warmth Over Precision
Every tone should feel like sunlight through glass — not a laboratory signal.
Prefer rounded waveforms (sine with gentle harmonics) over pure mathematical
tones. Add subtle detuning (±2-4 cents) to create organic warmth, the way a
real instrument is never perfectly in tune.

### 2. Breath & Decay
No sound should start or stop abruptly. Every tone needs an attack envelope
(5-30ms fade-in) and a natural decay (50-200ms fade-out). The human ear
perceives sudden silence as violence. Let sounds breathe — inhale on entry,
exhale on exit.

### 3. The Whisper Rule
The loudest sound in the app should feel like a whisper in a quiet room.
Master volume should never exceed 0.06 (6% of system volume). Individual
sounds should live between 0.01-0.04. When in doubt, halve the volume.
The user should lean in to hear, not flinch away.

### 4. Musical Coherence (The Pentatonic Garden)
All sounds must belong to a single harmonic family: C major pentatonic
(C, D, E, G, A) and its octave extensions. This scale is universally
perceived as pleasant across all cultures — it is the scale of wind chimes,
children's lullabies, and the opening notes of "Amazing Grace." No sound
should ever contain a note outside this garden.

**Frequency Reference (C Major Pentatonic):**
| Note | Octave 3 | Octave 4 | Octave 5 | Octave 6 |
|------|----------|----------|----------|----------|
| C    | 130.81   | 261.63   | 523.25   | 1046.50  |
| D    | 146.83   | 293.66   | 587.33   | 1174.66  |
| E    | 164.81   | 329.63   | 659.25   | 1318.51  |
| G    | 196.00   | 392.00   | 783.99   | 1567.98  |
| A    | 220.00   | 440.00   | 880.00   | 1760.00  |

### 5. Silence Is a Sound
The most important sound in LumenLingo is silence. Between interactions,
the app should be quiet. Sounds should be rare enough that each one feels
meaningful. If a sound doesn't clearly improve the emotional experience of
a specific moment, remove it. An app with 10 perfect sounds is infinitely
better than an app with 100 mediocre ones.

### 6. Emotional Arc, Not Notification
Sounds should tell a micro-story. A correct answer isn't a "ding" — it's a
tiny celebration. A wrong answer isn't a "buzz" — it's a gentle
acknowledgment. Think of each sound as a one-second piece of music with a
beginning (attack), middle (sustain), and end (decay). The great film
composer John Williams could tell you what a character feels in three notes.
We have the same responsibility.

### 7. Haptic-Sonic Unity
Sound and haptics are one instrument, not two. A haptic pulse without its
paired tone feels hollow. A tone without its haptic feels disembodied. The
vibration should arrive 5-10ms before the sound (matching how we feel a
piano key before we hear the note). Together they create what psychoacoustics
researchers call "cross-modal binding" — the perception of a single,
unified event.

---

## Implementation Status

| Epic | Stories | Status |
|------|---------|--------|
| 1. Sonic Identity & Tonal Foundation | 5 | Not Started |
| 2. Flashcard Sonic Journey | 8 | Not Started |
| 3. Word Builder Sonic Architecture | 7 | Not Started |
| 4. Grammar Quiz Sonic Language | 6 | Not Started |
| 5. Navigation & Spatial Transitions | 6 | Not Started |
| 6. Achievement & Celebration System | 7 | Not Started |
| 7. Ambient Soundscapes & Atmosphere | 5 | Not Started |
| 8. Haptic Choreography | 6 | Not Started |
| 9. Adaptive Emotional Intelligence | 5 | Not Started |
| 10. Sound Design Polish & Psychoacoustics | 6 | Not Started |
| 11. Profile, Settings & System Sounds | 5 | Not Started |
| 12. Silence, Space & Anti-Fatigue | 5 | Not Started |
| **Total** | **71** | **0/71** |

---

## Table of Contents

1. [Epic 1: Sonic Identity & Tonal Foundation](#epic-1-sonic-identity--tonal-foundation)
2. [Epic 2: Flashcard Sonic Journey](#epic-2-flashcard-sonic-journey)
3. [Epic 3: Word Builder Sonic Architecture](#epic-3-word-builder-sonic-architecture)
4. [Epic 4: Grammar Quiz Sonic Language](#epic-4-grammar-quiz-sonic-language)
5. [Epic 5: Navigation & Spatial Transitions](#epic-5-navigation--spatial-transitions)
6. [Epic 6: Achievement & Celebration System](#epic-6-achievement--celebration-system)
7. [Epic 7: Ambient Soundscapes & Atmosphere](#epic-7-ambient-soundscapes--atmosphere)
8. [Epic 8: Haptic Choreography](#epic-8-haptic-choreography)
9. [Epic 9: Adaptive Emotional Intelligence](#epic-9-adaptive-emotional-intelligence)
10. [Epic 10: Sound Design Polish & Psychoacoustics](#epic-10-sound-design-polish--psychoacoustics)
11. [Epic 11: Profile, Settings & System Sounds](#epic-11-profile-settings--system-sounds)
12. [Epic 12: Silence, Space & Anti-Fatigue](#epic-12-silence-space--anti-fatigue)
13. [Appendix A: Emotional Frequency Map](#appendix-a-emotional-frequency-map)
14. [Appendix B: Volume Hierarchy Reference](#appendix-b-volume-hierarchy-reference)
15. [Appendix C: Waveform Recipes](#appendix-c-waveform-recipes)
16. [Appendix D: Haptic-Sound Pairing Matrix](#appendix-d-haptic-sound-pairing-matrix)
17. [Appendix E: A/B Testing Protocol](#appendix-e-ab-testing-protocol)

---

## Epic 1: Sonic Identity & Tonal Foundation

> *"The first step in sound design is to decide what your silence sounds like."*
> — Walter Murch, film sound designer (Apocalypse Now, The English Patient)

This epic establishes the emotional DNA of every sound in LumenLingo. Before
touching any individual effect, we must define the tonal language — the
harmonic rules, the volume envelope shapes, the waveform character — that
makes all sounds feel like they belong to one family.

### Story 1.1: Define the Emotional Frequency Palette

**Emotional Goal**: Every frequency used in LumenLingo should evoke one of
three feelings: *warmth* (low-mid range, 220-440Hz), *clarity* (mid range,
440-880Hz), or *sparkle* (upper range, 880-1760Hz). No frequency should
evoke *harshness* (above 2000Hz) or *dread* (below 130Hz).

**Psychological Basis**: Research in psychoacoustics (Hevner, 1937; Juslin &
Västfjäll, 2008) shows that the 220-880Hz range activates the brain's
"comfort zone" — frequencies associated with the human voice, the lullaby,
the purring cat. Frequencies above 2000Hz trigger alertness mechanisms
designed for detecting danger (breaking glass, screaming). An educational
app must live in the comfort zone.

**Current Problem**: Several sounds use frequencies in the 1200-2200Hz range
(e.g., `playPlink` at 2200→1600Hz, `playButtonTap` at 1200→800Hz). These
frequencies are perceived as "sharp," "clinical," or "irritating" during
extended study sessions. The flashcard tap (`playCardFlipEnhanced` at
1318→1046Hz with a 2637Hz overtone) is especially painful because the
overtone at 2637Hz sits squarely in the human ear's peak sensitivity range
(2000-4000Hz, where the ear canal resonates).

#### Sub-tasks:

- [ ] **1.1.1** Audit every `playTone()` call in `AudioService.swift` and
  catalog the frequency, end frequency, duration, and volume of each sound.
  Create a spreadsheet mapping each sound to its perceptual quality
  (warm / neutral / harsh).

- [ ] **1.1.2** Define the "LumenLingo Frequency Ceiling" at 1400Hz. No
  synthesized tone should have a fundamental frequency above this threshold.
  Sparkle effects (achievements, celebrations) may use 1046-1400Hz but must
  have very short durations (< 80ms) and low volume (< 0.02).

- [ ] **1.1.3** Remap all harsh sounds to their warm equivalents:
  - `playPlink`: 2200→1600Hz becomes 659→440Hz (E5→A4, a gentle falling fifth)
  - `playButtonTap`: 1200→800Hz becomes 523→392Hz (C5→G4, a perfect fourth)
  - `playCardFlipEnhanced`: Remove the 2637Hz overtone entirely. Remap primary
    from 1318→1046Hz to 659→523Hz (E5→C5, a warm falling third)
  - `playSearchFocus`: 1046Hz becomes 523Hz (drop one octave)
  - `playSearchFound`: 1046→1318Hz becomes 523→659Hz (drop one octave)

- [ ] **1.1.4** Implement a frequency validation guard in `playTone()` that
  logs a warning (debug builds only) if any frequency exceeds 1400Hz. This
  prevents future sound additions from violating the ceiling.

- [ ] **1.1.5** A/B test the remapped frequencies with 3-5 users over a
  15-minute study session. Measure: (a) self-reported comfort on 1-10 scale,
  (b) session length before voluntary stop, (c) qualitative feedback on
  "most pleasant" and "most annoying" sounds.

---

### Story 1.2: Implement Breath Envelopes (Attack-Decay-Sustain-Release)

**Emotional Goal**: No sound should feel like it "pops" into existence or
"cuts" off suddenly. Every sound should breathe — a gentle fade-in (the
"inhale") and a natural decay (the "exhale"). This is what separates a
musical instrument from a smoke alarm.

**Psychological Basis**: The auditory cortex processes sudden onsets as
potential threats (Näätänen et al., 2007). A 0ms attack time triggers the
same neural pathway as a door slamming. A 10ms attack time is perceived as
"a thing appearing." A 30ms attack time is perceived as "a thing growing."
We want the latter.

**Current Problem**: The `generateWAVData` function uses a basic linear
envelope with a very short attack. Many sounds feel "clicky" — they start
at full amplitude within 1-2 samples, creating a transient pop that the
ear registers as a tiny click before the tone begins.

#### Sub-tasks:

- [ ] **1.2.1** Redesign the `generateWAVData` envelope system to support
  configurable ADSR (Attack, Decay, Sustain, Release) parameters:
  - Attack: 5-30ms (time from silence to peak volume)
  - Decay: 10-50ms (time from peak to sustain level)
  - Sustain: 0.6-0.9 of peak (the steady-state level)
  - Release: 30-200ms (time from sustain to silence)

- [ ] **1.2.2** Define three envelope presets that cover all use cases:
  - **Petal** (soft sounds): Attack 20ms, Decay 30ms, Sustain 0.7, Release 150ms
    — Used for: card appear, navigation, ambient nudges
  - **Dew** (medium sounds): Attack 10ms, Decay 20ms, Sustain 0.8, Release 100ms
    — Used for: correct answers, tile placement, toggle changes
  - **Spark** (bright sounds): Attack 5ms, Decay 15ms, Sustain 0.85, Release 60ms
    — Used for: achievements, celebrations, milestones

- [ ] **1.2.3** Apply the Petal envelope to all navigation and UI sounds:
  `playTabSwitch`, `playNavPush`, `playNavPop`, `playSheetPresent`,
  `playSheetDismiss`, `playSoftClick`, `playButtonTap`, `playToggleOn`,
  `playToggleOff`, `playProfileTabSwitch`, `playPageChange`

- [ ] **1.2.4** Apply the Dew envelope to all game interaction sounds:
  `playCardAppear`, `playCardFlipEnhanced`, `playPlink`, `playSwipeRight`,
  `playSwipeLeft`, `playTilePick`, `playTilePlace`, `playSlotFill`,
  `playAnswerSelect`, `playQuestionAppear`

- [ ] **1.2.5** Apply the Spark envelope to all reward/achievement sounds:
  `playXPGain`, `playWordComplete`, `playWordCorrect`, `playGrammarCorrect`,
  `playLevelUp`, `playStreakMilestone`, `playAchievementUnlocked`,
  `playCelebration`, `playDailyGoalComplete`, `playPurchaseSuccess`

- [ ] **1.2.6** Verify that no envelope creates audible clicks by testing
  each sound at 2× volume in a silent room with quality headphones. Any
  click or pop indicates the attack is too steep.

---

### Story 1.3: Establish the Volume Whisper Hierarchy

**Emotional Goal**: The app should feel like a quiet companion, not a noisy
toy. Sounds should be barely-there — present enough to register, soft enough
to never irritate. The user should feel that the app is whispering to them,
not shouting.

**Psychological Basis**: Weber's Law states that the perceived change in a
stimulus is proportional to the stimulus itself. In a quiet app, even tiny
volume differences feel significant. This means we can communicate rich
information (correct vs. incorrect, progress vs. stagnation) using volume
variations of just 0.005-0.015, rather than the current 0.1-0.4 range.

**Current Problem**: Volume levels are inconsistent and often too loud.
`playCardFlipEnhanced` at 0.45 is nearly 10× louder than ambient sounds.
`playCelebration` layers multiple tones that compound to perceived volumes
above 0.5. After 10 minutes of flashcard practice, the cumulative audio
bombardment creates listener fatigue.

#### Sub-tasks:

- [ ] **1.3.1** Define the four-tier volume hierarchy:
  - **Whisper** (0.008-0.015): Background awareness sounds — card appear,
    navigation transitions, ambient transitions, slider ticks
  - **Murmur** (0.015-0.025): Primary interaction sounds — card flip, tile
    pick, answer select, toggle change, button tap
  - **Speak** (0.025-0.035): Feedback sounds — correct answer, wrong answer,
    word complete, XP gain
  - **Celebrate** (0.035-0.050): Rare milestone sounds — level up, streak
    milestone, achievement unlock, purchase success

- [ ] **1.3.2** Remap all 90+ sound methods to their correct tier. Create a
  reference table mapping each method to its tier, target volume, and
  rationale.

- [ ] **1.3.3** Reduce `masterVolume` from 0.08 to 0.05. This single change
  will soften every sound in the app by 37%.

- [ ] **1.3.4** Cap multi-layered sounds (those using `DispatchQueue.main.asyncAfter`
  to play overlapping tones) so the combined perceived volume never exceeds
  the Celebrate tier. For example, `playCelebration` currently plays 4
  overlapping tones — reduce each component to 0.012 so the sum stays ≤ 0.048.

- [ ] **1.3.5** Implement a "volume ducking" system where any sound that plays
  within 100ms of a previous sound automatically reduces its volume by 40%.
  This prevents the "cacophony effect" during rapid interactions (e.g., fast
  flashcard swiping).

---

### Story 1.4: Create the Waveform Character Library

**Emotional Goal**: Each waveform shape conveys a different emotional quality.
Pure sine waves sound "sterile" and "digital." Adding subtle harmonic
overtones creates warmth and personality — the difference between a tuning
fork and a wooden flute.

**Psychological Basis**: Helmholtz (1863) demonstrated that timbre — the
"color" of a sound — is determined by its overtone structure. A sound with
only odd harmonics (square-ish) sounds hollow and eerie. A sound with
natural harmonic decay (fundamental strongest, each overtone progressively
quieter) sounds warm and organic. This is why a cello sounds warm and a
synthesizer often sounds cold.

#### Sub-tasks:

- [ ] **1.4.1** Extend `generateWAVData` to support a "harmonic richness"
  parameter (0.0 = pure sine, 1.0 = rich harmonics). At richness 0.3:
  - Fundamental: 100% amplitude
  - 2nd harmonic (octave): 15% amplitude
  - 3rd harmonic (octave + fifth): 5% amplitude
  - 4th harmonic (two octaves): 2% amplitude

- [ ] **1.4.2** Define three waveform characters:
  - **Glass** (richness 0.0-0.1): Nearly pure sine. Used for ambient tones,
    meditation-style sounds, and gentle transitions. Emotional quality: serene.
  - **Wood** (richness 0.2-0.4): Warm fundamental with subtle overtones. Used
    for most interaction sounds — tile picks, card flips, button taps.
    Emotional quality: natural, handcrafted.
  - **Bell** (richness 0.3-0.5): Richer overtone structure with faster decay.
    Used for achievements, celebrations, milestones. Emotional quality:
    ceremonial, special.

- [ ] **1.4.3** Apply Glass character to: `playCardAppear`, `playNavPush`,
  `playNavPop`, `playSheetPresent`, `playSheetDismiss`, `playTabSwitch`,
  ambient drone base tones.

- [ ] **1.4.4** Apply Wood character to: `playCardFlipEnhanced`, `playPlink`,
  `playTilePick`, `playTilePlace`, `playSlotFill`, `playAnswerSelect`,
  `playButtonTap`, `playSoftClick`, `playToggleOn`, `playToggleOff`.

- [ ] **1.4.5** Apply Bell character to: `playWordComplete`, `playGrammarCorrect`,
  `playLevelUp`, `playStreakMilestone`, `playAchievementUnlocked`,
  `playCelebration`, `playPurchaseSuccess`, `playMilestoneUnlocked`.

---

### Story 1.5: Implement Micro-Detuning for Organic Feel

**Emotional Goal**: Perfect mathematical pitch sounds artificial. Real
instruments are never perfectly in tune — and that imperfection is what
makes them beautiful. Adding micro-detuning (±2-5 cents, where 100 cents
= one semitone) makes synthesized tones feel alive.

**Psychological Basis**: The "chorus effect" in music is created by slight
pitch variations between multiple voices singing the same note. Our brains
interpret micro-detuning as "alive" and exact pitch as "mechanical."
Eno's ambient compositions use continuous micro-detuning to create their
meditative quality.

#### Sub-tasks:

- [ ] **1.5.1** Add a `detune` parameter to `playTone()` (default: ±3 cents
  random variation). Each call generates a tiny random pitch offset:
  `actualFreq = frequency * pow(2.0, randomDetune / 1200.0)` where
  `randomDetune` is uniformly distributed in [-3, +3] cents.

- [ ] **1.5.2** For multi-tone sounds (celebrations, level-ups), apply
  different detuning to each overtone layer, creating a natural "ensemble"
  effect rather than a robotic unison.

- [ ] **1.5.3** Verify that detuning doesn't create audible "beating"
  (interference patterns) by testing with headphones. If beating is
  perceptible, reduce detune range to ±2 cents.

- [ ] **1.5.4** Make detuning deterministic per-session (seed with session
  start time) so the same interaction always produces the same detuning
  within a session, preventing uncanny randomness.

---

## Epic 2: Flashcard Sonic Journey

> *"The ear is the avenue to the heart."* — Voltaire

Flashcards are LumenLingo's most-used feature. A user may flip 50-200 cards
in a single session. This means the flashcard sounds are heard more than any
others — and therefore must be the most carefully designed. A sound that is
merely "fine" becomes intolerable after 100 repetitions. A sound that is
genuinely beautiful becomes a companion.

The design philosophy for flashcard sounds draws from the Japanese concept
of *wabi-sabi* — beauty in imperfection, simplicity, and transience. Each
card flip should feel like turning a page in a beloved book. Each correct
answer should feel like a small light turning on inside the learner.

### Story 2.1: Card Appear — The Invitation

**Emotional Goal**: When a flashcard appears, the learner should feel a
gentle pull of curiosity — an invitation to engage, not a demand for
attention. Think of the sound a butterfly makes when it lands on a flower:
barely there, but unmistakably present.

**Sound Character**: A single note rising from silence, like morning mist.
Glass waveform. Frequency: A4 (440Hz) → C5 (523Hz), a rising minor third
that evokes openness and possibility. Duration: 120ms. Volume: Whisper
tier (0.012). Petal envelope.

**Current Problem**: `playCardAppear` uses 1046Hz (C6), which is too high
and bright for a sound that plays this frequently. At C6, the tone has a
"notification" quality — it demands attention rather than inviting it.

#### Sub-tasks:

- [ ] **2.1.1** Redesign `playCardAppear` with these parameters:
  - Frequency: 440Hz → 523Hz (A4 → C5, rising minor third)
  - Duration: 120ms (currently 100ms — slightly longer for breath)
  - Volume: 0.012 (currently 0.25 × gameVol, far too loud)
  - Waveform: Glass (richness 0.05)
  - Envelope: Petal (attack 20ms, decay 30ms, sustain 0.7, release 150ms)

- [ ] **2.1.2** Add a 3ms pre-silence (actual silence before the tone begins)
  to separate the sound from any preceding audio event. This micro-gap
  creates psychological "space" that makes the new sound feel intentional.

- [ ] **2.1.3** Test with rapid card navigation (swiping through 10 cards
  in 5 seconds). The sound should create a pleasant melodic pattern, not
  an annoying repetition. Verify the anti-spam cooldown (150ms) is
  sufficient — if cards can change faster than 150ms, increase cooldown.

- [ ] **2.1.4** Pair with haptic: `softGenerator.impactOccurred(intensity: 0.25)`.
  The haptic should arrive 5ms before the sound — use a tiny
  `DispatchQueue.main.asyncAfter(deadline: .now() + 0.005)` for the sound
  call so the haptic fires first.

---

### Story 2.2: Card Flip — The Revelation

**Emotional Goal**: The card flip is the moment of truth — the learner turns
the card to see the answer. This should feel like opening a music box: a
brief, crystalline moment of wonder. Not a sharp click, but a soft chime.

**Sound Character**: A falling interval that resolves to warmth — E5 (659Hz)
→ C5 (523Hz), a falling major third that psychologically registers as
"arrival" and "completion." Think of the two-note motif in Pixar's WALL-E
when EVE says her name. Wood waveform for natural warmth. Duration: 100ms.
Volume: Murmur tier (0.020). Dew envelope.

**Current Problem**: `playCardFlipEnhanced` has a 2637Hz overtone that is
physically painful at volume. The primary tone (1318→1046Hz) is an octave
too high, creating a "smartphone notification" feel rather than a "music
box" feel. The sound is memorable for the wrong reason — it hurts.

#### Sub-tasks:

- [ ] **2.2.1** Completely redesign `playCardFlipEnhanced`:
  - Primary tone: 659Hz → 523Hz (E5 → C5, falling major third)
  - Duration: 100ms
  - Volume: 0.020
  - Waveform: Wood (richness 0.25)
  - Envelope: Dew (attack 10ms, decay 20ms, sustain 0.8, release 100ms)
  - Remove the 2637Hz overtone entirely — it was the primary source of pain

- [ ] **2.2.2** Add a subtle "air" component: a very quiet (volume 0.004)
  white noise burst of 30ms, bandpass-filtered around 400Hz, mixed with the
  tone onset. This simulates the sound of a physical card turning in air
  and creates tactile realism. Implement by generating random samples
  attenuated by a bandpass-shaped window.

- [ ] **2.2.3** Test the "100-flip test": Flip 100 cards in sequence and
  evaluate at flips 1, 25, 50, 75, and 100. At flip 100, the sound should
  still feel pleasant and unobtrusive. If listener fatigue is detected at
  any checkpoint, reduce volume by 10% and retest.

- [ ] **2.2.4** Pair with haptic: `lightGenerator.impactOccurred(intensity: 0.4)`.
  Same 5ms pre-fire rule as 2.1.4.

---

### Story 2.3: Swipe Right (Correct) — The Warm Glow

**Emotional Goal**: A correct answer should feel like a candle being lit —
a brief, warm glow of satisfaction. Not a triumphant fanfare (that would
be exhausting after 50 correct answers) but a quiet "yes." The sound
should be a reward the learner wants to hear again — it should make them
want to answer correctly not just for the XP, but for the sound.

**Sound Character**: A rising perfect fifth — C5 (523Hz) → G5 (784Hz) —
the most consonant interval in Western music. This interval appears in
"Twinkle Twinkle Little Star," the Star Wars theme, and countless lullabies.
Bell waveform for a ceremonial quality. Duration: 140ms. Volume: Speak
tier (0.028). Dew envelope.

**Current Problem**: `playSwipeRight` is a simple rising sweep (440→659Hz)
that feels generic and doesn't create emotional distinction from other sounds.

#### Sub-tasks:

- [ ] **2.3.1** Redesign `playSwipeRight`:
  - Primary tone: 523Hz → 784Hz (C5 → G5, rising perfect fifth)
  - Duration: 140ms
  - Volume: 0.028
  - Waveform: Bell (richness 0.35)
  - Envelope: Dew with extended release (attack 10ms, decay 20ms,
    sustain 0.8, release 130ms — the tail lingers)

- [ ] **2.3.2** Add a "shimmer" layer: a secondary tone at 1046Hz (C6, one
  octave above the destination) at volume 0.006, starting 40ms after the
  primary. This creates a sparkle effect at the top of the swipe arc,
  like sunlight catching a jewel. Duration: 60ms, Glass waveform.

- [ ] **2.3.3** Implement progressive warmth: if the user gets 5+ correct
  in a row, add a third layer — a sustained hum at 262Hz (C4, one octave
  below start) at volume 0.004, duration 200ms. This "bass warmth" creates
  a subconscious feeling of depth and solidity, rewarding consistency
  without being obvious.

- [ ] **2.3.4** Pair with haptic: `notificationGenerator.notificationOccurred(.success)`
  at reduced intensity. The success notification is iOS's most "positive"
  haptic pattern — two quick taps that feel like a heartbeat.

---

### Story 2.4: Swipe Left (Incorrect) — The Gentle Nudge

**Emotional Goal**: A wrong answer must NEVER feel like punishment. The sound
should communicate "not quite" rather than "wrong." Think of a music teacher
who smiles and says "let's try that again" — encouraging, not judgmental.
Research (Dweck, 2006) shows that negative audio feedback can trigger a
"fixed mindset" response, where learners interpret failure as inability
rather than opportunity.

**Sound Character**: A falling minor second — E4 (330Hz) → D4 (294Hz) — the
smallest interval, perceived as a gentle sigh rather than a dissonant clash.
Glass waveform for softness. Duration: 100ms. Volume: Whisper tier (0.014)
— deliberately quieter than the correct answer sound to avoid amplifying
the mistake. Petal envelope with extended release.

**Current Problem**: `playSwipeLeft` (and `playSoftNudge`) use frequencies
that feel too clinical. The emotional asymmetry between correct and
incorrect is insufficient — they sound too similar, failing to create the
"warm contrast" needed for effective learning feedback.

#### Sub-tasks:

- [ ] **2.4.1** Redesign `playSwipeLeft`:
  - Frequency: 330Hz → 294Hz (E4 → D4, falling major second)
  - Duration: 100ms
  - Volume: 0.014 (deliberately quieter than correct answer's 0.028)
  - Waveform: Glass (richness 0.08)
  - Envelope: Petal with extended release (attack 20ms, decay 30ms,
    sustain 0.7, release 200ms — the sound fades gently like a sigh)

- [ ] **2.4.2** Add a 50ms silence after the sound before any other sound
  can play. This micro-pause gives the learner a moment to process the
  mistake without being immediately bombarded with the next card's sound.

- [ ] **2.4.3** CRITICAL: Verify the sound never triggers anxiety. Test with
  5 intentional wrong answers in a row. The sound should remain gentle
  and forgiving on repetition — no escalation, no increasing harshness.
  Each wrong answer should sound identical to the first.

- [ ] **2.4.4** Pair with haptic: `softGenerator.impactOccurred(intensity: 0.3)`.
  Soft, not rigid. No notification haptic (which feels like an alert).

---

### Story 2.5: Mastery Progress — The Growing Light

**Emotional Goal**: As the learner progresses through mastery levels on a
card, the sound should subtly evolve — growing warmer and richer, like a
sunrise. By the final mastery level, the sound should feel like a small
personal achievement.

**Sound Character**: Use the same C major pentatonic scale, but ascend through
notes as mastery increases:
- Level 1-2: C4 (262Hz) — beginning, grounding
- Level 3-4: E4 (330Hz) — growth, movement  
- Level 5-6: G4 (392Hz) — confidence, clarity
- Level 7+: A4 (440Hz) — accomplishment, warmth

**Current Problem**: `playMasteryProgress` uses a mathematical mapping that
doesn't create emotional progression. The frequency changes feel arbitrary
rather than narratively satisfying.

#### Sub-tasks:

- [ ] **2.5.1** Redesign `playMasteryProgress` with explicit level-to-note
  mapping using the pentatonic scale. Each level should feel like one step
  higher on a musical staircase.

- [ ] **2.5.2** Increase harmonic richness proportionally to mastery level:
  Level 1 at Glass (0.05), Level 4 at Wood (0.25), Level 7+ at Bell (0.35).
  This creates a perceptual "warming" as mastery deepens.

- [ ] **2.5.3** Add a subtle "memory echo" for levels 5+: replay the previous
  level's note at 20% volume with a 80ms delay, creating a two-note chord
  that sounds like "confirmation of the journey." Example at Level 5:
  primary G4 (392Hz), echo E4 (330Hz) at 0.005 volume.

- [ ] **2.5.4** Pair with haptic: intensity scales with level — 0.3 at Level 1,
  0.5 at Level 4, 0.7 at Level 7+. The physical feedback should feel
  increasingly "solid" as mastery deepens.

---

### Story 2.6: Category Navigation — The Gentle Scroll

**Emotional Goal**: Moving between flashcard categories should feel like
turning pages in a photo album — smooth, unhurried, with each page bringing
a new experience. The sound should mark the transition without demanding
attention.

**Sound Character**: A very quiet interval shift. Next category: C5→D5
(523→587Hz, rising whole step). Previous category: D5→C5 (587→523Hz,
falling whole step). Duration: 80ms. Volume: Whisper (0.010). Glass waveform.
Petal envelope.

#### Sub-tasks:

- [ ] **2.6.1** Redesign `playCategoryNext` and `playCategoryPrev`:
  - Next: 523Hz → 587Hz (C5 → D5), Glass, 80ms, volume 0.010
  - Prev: 587Hz → 523Hz (D5 → C5), Glass, 80ms, volume 0.010

- [ ] **2.6.2** Implement "scroll momentum" — if the user navigates 3+
  categories in quick succession (within 500ms each), progressively
  reduce volume by 15% per step, bottoming at 0.005. This prevents
  rapid scrolling from creating a buzzing corridor of sound.

- [ ] **2.6.3** Pair with haptic: `selectionGenerator.selectionChanged()`.
  The lightest haptic available — just enough to confirm the finger's input.

---

### Story 2.7: XP Gain — The Quiet Reward

**Emotional Goal**: XP gain is the learner's primary reward metric. But
because it happens frequently (every correct answer), the sound must be
almost subliminal — a tiny sparkle that the conscious mind barely notices
but the reward system fully registers. Think of the coin sound in Mario:
iconic, brief, and never annoying despite hearing it hundreds of times.

**Sound Character**: A bright but ultra-brief note. A5 (880Hz), duration
only 50ms, at volume 0.015. Spark envelope (fast attack, fast decay).
Glass waveform. The brevity is what makes it tolerable at high frequency.

**Current Problem**: `playXPGain` uses a mathematical mapping from amount
to frequency (200→800Hz range) that sounds mechanical. The amount-based
variation creates inconsistency — +5 XP sounds completely different from
+20 XP, making the "language" of the sound unlearnable.

#### Sub-tasks:

- [ ] **2.7.1** Redesign `playXPGain` to use a SINGLE consistent tone
  regardless of XP amount:
  - Frequency: 880Hz (A5)
  - Duration: 50ms
  - Volume: 0.015
  - Waveform: Glass (richness 0.08)
  - Envelope: Spark (attack 5ms, decay 15ms, sustain 0.85, release 30ms)

- [ ] **2.7.2** For bonus XP (daily streak bonus, first-time bonus), add
  a subtle "twin" — the same tone played twice with 60ms gap, creating
  a "sparkle-sparkle" double-tap effect. Second tone at 90% volume
  of the first.

- [ ] **2.7.3** Implement XP sound fatigue protection: after 20 XP gains
  in a single session, reduce volume by 30%. After 40, reduce by 50%.
  This prevents the reward sound from becoming background noise.

- [ ] **2.7.4** Pair with haptic: `softGenerator.impactOccurred(intensity: 0.2)`.
  The softest possible — a breath, not a tap.

---

### Story 2.8: Plink (Legacy Correct Answer) — Sunset This Sound

**Emotional Goal**: The current `playPlink` (2200→1600Hz) is the single
most irritating sound in the app. It must be fundamentally transformed.
"Plink" should become "glow" — a warm, rounded tone that replaces the
sharp descending sweep with a gentle resolving chord.

**Current Problem**: 2200Hz is in the ear's resonance range. The descending
sweep from 2200→1600Hz sounds like a cartoon spring being released. During
rapid flashcard sessions, it creates a "plinking" pattern that users
associate with arcade games, not meditative learning.

#### Sub-tasks:

- [ ] **2.8.1** Replace `playPlink` with `playGlow`:
  - Frequency: 523Hz → 440Hz (C5 → A4, falling minor third — resolving,
    like coming home)
  - Duration: 100ms
  - Volume: 0.020
  - Waveform: Wood (richness 0.20)
  - Envelope: Dew (attack 10ms, decay 20ms, sustain 0.8, release 100ms)

- [ ] **2.8.2** Update all call sites that reference `playPlink()` to call
  the new `playGlow()` — or, for backward compatibility, make `playPlink()`
  internally redirect to `playGlow()`.

- [ ] **2.8.3** Conduct the "50-repetition test" — play the new sound 50
  times in 3 minutes. Rate comfort at repetitions 1, 10, 25, 50. Target:
  comfort score ≥ 7/10 at repetition 50.

---

## Epic 3: Word Builder Sonic Architecture

> *"Architecture is frozen music."* — Johann Wolfgang von Goethe

Word Builder is a spatial game — the learner picks letter tiles and places
them into slots to build words. The sounds must reflect this physical,
architectural quality. Each tile should feel like a building block with
weight and position. Each slot fill should feel like a piece clicking into
place. And the completed word should feel like a small building standing
proud.

The sonic inspiration comes from the craftsmanship sounds in Studio Ghibli
films: the click of a loom shuttle, the snap of a puzzle piece, the quiet
satisfaction of placing the last stone in a wall. Director Hayao Miyazaki
insisted that every object in his films have a sound that communicates its
weight and material. A wooden tile sounds different from a metal tile. Our
letter tiles should sound like polished river stones — smooth, warm, with
a subtle gravitational thud.

### Story 3.1: Tile Pick — The Lifted Stone

**Emotional Goal**: Picking up a tile should feel like lifting a smooth
pebble from a stream — a brief moment of contact, weight, and potential.
The sound should be crisp enough to confirm the selection but warm enough
to feel natural.

**Sound Character**: A brief upward inflection from A4 (440Hz) to C5
(523Hz), Wood waveform with moderate richness. Duration: 60ms. The
rising pitch suggests "lifting." Volume: Murmur (0.018). Dew envelope.

**Current Problem**: `playTilePick` at 880Hz feels too bright and thin
for a tile that should feel weighty. The positional mapping (higher
frequency for later tiles) creates disorienting pitch variation during
rapid selection.

#### Sub-tasks:

- [ ] **3.1.1** Redesign `playTilePick`:
  - Frequency: 440Hz → 523Hz (A4 → C5, rising minor third)
  - Duration: 60ms
  - Volume: 0.018
  - Waveform: Wood (richness 0.30)
  - Envelope: Dew (attack 10ms, sustain 0.8, release 60ms)

- [ ] **3.1.2** Simplify the positional mapping: instead of changing
  frequency per tile position, use consistent frequency but vary the
  harmonic richness slightly (±0.05) to create subtle differentiation
  without disorienting pitch shifts.

- [ ] **3.1.3** Pair with haptic: `lightGenerator.impactOccurred(intensity: 0.45)`.
  The haptic should feel like the fingertip "gripping" the tile.

---

### Story 3.2: Tile Place (Slot Fill) — The Satisfying Click

**Emotional Goal**: Placing a tile into its slot should feel like a puzzle
piece clicking home — one of the most universally satisfying sounds in
human experience. This is the "pop" when you push a USB-C cable into place,
the "snap" of a Lego brick, the "thock" of a Cherry MX mechanical key.
It needs to be brief, tactile, and deeply satisfying.

**Sound Character**: A falling pitch that resolves to a "thud" — C5 (523Hz)
→ A4 (440Hz), Wood waveform with high richness (0.35). Duration: 70ms.
Volume: Murmur (0.022). Dew envelope with very short release (50ms) to
create a "clipped" percussive quality.

**Current Problem**: `playTilePlace` at 220→110Hz is too low and boomy —
it sounds like a bass drum rather than a satisfying click. `playSlotFill`
uses a slot-index-based frequency mapping that creates a scale, which is
musically interesting but not emotionally satisfying per-slot.

#### Sub-tasks:

- [ ] **3.2.1** Redesign `playTilePlace` and `playSlotFill` as a single
  unified sound:
  - Frequency: 523Hz → 440Hz (C5 → A4, falling minor third — "settling")
  - Duration: 70ms
  - Volume: 0.022
  - Waveform: Wood (richness 0.35)
  - Envelope: Dew with short release (attack 10ms, decay 15ms,
    sustain 0.85, release 50ms)

- [ ] **3.2.2** For progressive slot fills (building a word), add a
  very subtle ascending overtone based on progress: when 50% of slots
  are filled, add a quiet harmonic at the octave (1046Hz) at volume
  0.003. This creates a subconscious sense of "the word is growing."

- [ ] **3.2.3** Pair with haptic: `rigidGenerator.impactOccurred(intensity: 0.5)`.
  Rigid — not soft — because the tile is "locking into place." The rigid
  feedback creates the sensation of a physical snap.

---

### Story 3.3: Tile Return — The Gentle Undo

**Emotional Goal**: Returning a tile to the pool should feel easy and
consequence-free — like erasing a pencil mark. No drama, no judgment.
The sound should communicate "you're still thinking" not "you made a
mistake."

**Sound Character**: The inverse of tile place — A4 (440Hz) → G4 (392Hz),
a falling whole step. Glass waveform (softer than tile place). Duration:
60ms. Volume: Whisper (0.012). Petal envelope.

#### Sub-tasks:

- [ ] **3.3.1** Redesign `playTileReturn`:
  - Frequency: 440Hz → 392Hz (A4 → G4, falling whole step)
  - Duration: 60ms
  - Volume: 0.012
  - Waveform: Glass (richness 0.08)
  - Envelope: Petal (attack 20ms, release 100ms)

- [ ] **3.3.2** Pair with haptic: `softGenerator.impactOccurred(intensity: 0.25)`.
  Softest possible — the tile "floats" back.

---

### Story 3.4: Word Complete — The Built Cathedral

**Emotional Goal**: Completing a word is the climax of the Word Builder
experience. The sound should feel like the last brick being placed on a
beautiful wall — a moment of structural completion. This is rarer than a
correct flashcard answer (maybe 5-15 times per session), so it can be
slightly more prominent.

**Sound Character**: A rising arpeggio through three notes of the
pentatonic scale — C4→E4→G4 (262→330→392Hz) — played in rapid succession
(30ms between notes). Bell waveform. Each note slightly louder than the
previous (0.020, 0.025, 0.030). The ascending triad creates a sense of
"stacking" that mirrors the tile-building metaphor. Total duration: ~180ms
including release tails.

**Current Problem**: `playWordComplete` has a word-length-based frequency
mapping that is intellectually interesting but emotionally flat. Longer
words don't automatically feel more satisfying because frequency alone
doesn't communicate "bigger achievement."

#### Sub-tasks:

- [ ] **3.4.1** Redesign `playWordComplete` as a three-note ascending
  arpeggio:
  - Note 1: C4 (262Hz), volume 0.020, Bell richness 0.30
  - Note 2: E4 (330Hz) after 30ms delay, volume 0.025, Bell richness 0.35
  - Note 3: G4 (392Hz) after 60ms delay, volume 0.030, Bell richness 0.40
  - Each note: 80ms duration, Spark envelope

- [ ] **3.4.2** For words of 6+ letters, add a "foundation" bass note:
  C3 (131Hz) at volume 0.008, sustaining through the arpeggio. This
  creates depth and gravitas proportional to the word's length.

- [ ] **3.4.3** Pair with haptic: `notificationGenerator.notificationOccurred(.success)`
  timed with the third (final) note.

---

### Story 3.5: Word Correct — The Teacher's Smile

**Emotional Goal**: Different from word complete — this confirms the word
is actually correct. It should feel like a teacher's approving nod.

**Sound Character**: A single resolved chord — C5 and G5 played
simultaneously (523Hz + 784Hz, a perfect fifth). Bell waveform. Duration:
120ms. Volume: Speak (0.028). Dew envelope.

#### Sub-tasks:

- [ ] **3.5.1** Redesign `playWordCorrect` as a simultaneous two-note chord:
  - Note 1: 523Hz (C5), volume 0.028, Bell richness 0.30
  - Note 2: 784Hz (G5), volume 0.014 (half of primary), Bell richness 0.20
  - Both notes: 120ms duration, Dew envelope

- [ ] **3.5.2** Pair with haptic: `mediumGenerator.impactOccurred(intensity: 0.5)`.

---

### Story 3.6: Word Wrong — The Patient Pause

**Emotional Goal**: Same philosophy as flashcard incorrect (Story 2.4) —
gentle, forgiving, encouraging.

**Sound Character**: The same "sigh" as 2.4 — E4→D4 (330→294Hz), but with
slightly more body (Wood waveform instead of Glass) to feel proportional
to the larger Word Builder context. Duration: 100ms. Volume: Whisper (0.014).

#### Sub-tasks:

- [ ] **3.6.1** Redesign `playWordWrong`:
  - Frequency: 330Hz → 294Hz (E4 → D4, same as flashcard incorrect)
  - Duration: 100ms
  - Volume: 0.014
  - Waveform: Wood (richness 0.15)
  - Envelope: Petal with release 180ms

- [ ] **3.6.2** Ensure emotional consistency: the wrong-answer sound must
  feel identical in emotional tone across flashcards, word builder, and
  grammar — three different timbres of the same "gentle nudge."

---

### Story 3.7: Hint System — The Whispered Clue

**Emotional Goal**: Requesting a hint should feel like a friend leaning
over and whispering the answer — helpful, not shameful. Many learners
feel guilty about using hints; the sound should normalize it.

**Sound Character**: A quiet descending shimmer — G5→E5→C5 (784→659→523Hz)
played as a fast descending arpeggio (20ms between notes). Glass waveform.
Volume: Whisper (0.012). The descending pattern suggests "the answer is
coming down to meet you."

#### Sub-tasks:

- [ ] **3.7.1** Redesign `playHintReveal`:
  - Note 1: G5 (784Hz), volume 0.012, Glass
  - Note 2: E5 (659Hz) after 20ms, volume 0.010, Glass
  - Note 3: C5 (523Hz) after 40ms, volume 0.008, Glass
  - Each note: 50ms duration, Petal envelope

- [ ] **3.7.2** Redesign `playHintAvailable` as a single subtle pulse:
  - Frequency: 523Hz (C5), duration 40ms, volume 0.008, Glass, Petal

- [ ] **3.7.3** Redesign `playHintSparkle` to complement the reveal:
  - A very short shimmer at A5 (880Hz), duration 30ms, volume 0.006,
    Glass, Spark envelope. Fires 50ms after the reveal arpeggio ends.

- [ ] **3.7.4** Pair hint reveal with haptic: `selectionGenerator.selectionChanged()`
  — the lightest possible, just a whisper of contact.

---

## Epic 4: Grammar Quiz Sonic Language

> *"Music is the shorthand of emotion."* — Leo Tolstoy

Grammar quizzes are multiple-choice — the learner selects from 2-4 options.
The sonic design must support three distinct moments: question arrival
(focus), answer selection (commitment), and result revelation (feedback).
The emotional complexity here is greater than flashcards because the learner
is actively choosing, and wrong choices feel more deliberate.

The inspiration for grammar sounds comes from the work of Ryuichi Sakamoto
(The Last Emperor, The Revenant) — spare, precise notes that carry enormous
emotional weight. Each sound should feel intentional and composed, as though
a pianist placed exactly one perfect note.

### Story 4.1: Question Appear — The Focused Invitation

**Emotional Goal**: When a grammar question appears, the learner's attention
should gently sharpen — like the moment before a chess player moves. Not
anxiety, but pleasant focus. The sound says "here is something interesting."

**Sound Character**: A single sustained note — G4 (392Hz) — the "neutral"
note of the pentatonic scale. Neither beginning (C) nor end (A), but
middle — the sound of "considering." Wood waveform, duration 100ms,
volume Whisper (0.012). Petal envelope with extended sustain.

#### Sub-tasks:

- [ ] **4.1.1** Redesign `playQuestionAppear`:
  - Frequency: 392Hz (G4)
  - Duration: 100ms
  - Volume: 0.012
  - Waveform: Wood (richness 0.20)
  - Envelope: Petal (attack 20ms, decay 15ms, sustain 0.7, release 120ms)

- [ ] **4.1.2** Pair with haptic: `softGenerator.impactOccurred(intensity: 0.2)`.
  Barely there — just enough to draw attention.

---

### Story 4.2: Answer Select — The Committed Touch

**Emotional Goal**: Tapping an answer option should feel like placing a chip
on a roulette table — a moment of commitment. The sound should confirm
"you chose this" without revealing whether it's right or wrong.

**Sound Character**: A clean, neutral tone — D5 (587Hz) — with no pitch
movement. No rising (which implies optimism), no falling (which implies
doubt). Just a clear, honest note. Wood waveform, duration 60ms, volume
Murmur (0.018). Dew envelope.

#### Sub-tasks:

- [ ] **4.2.1** Redesign `playAnswerSelect`:
  - Frequency: 587Hz (D5)
  - Duration: 60ms
  - Volume: 0.018
  - Waveform: Wood (richness 0.20)
  - Envelope: Dew (attack 10ms, release 70ms)

- [ ] **4.2.2** Pair with haptic: `lightGenerator.impactOccurred(intensity: 0.4)`.
  A clean, definitive tap — "I've made my choice."

---

### Story 4.3: Grammar Correct — The Rising Affirmation

**Emotional Goal**: A correct grammar answer should feel more intellectually
satisfying than a flashcard correct — grammar requires reasoning, not just
memory. The sound should communicate "you understood this" — a deeper, more
cerebral reward than the flashcard's warm glow.

**Sound Character**: A rising perfect fourth — G4→C5 (392→523Hz). The
perfect fourth is the interval used in "Here Comes the Bride" and many
fanfares — it signals "arrival" and "resolution." Bell waveform for
ceremonial weight. Duration: 120ms. Volume: Speak (0.025). Dew envelope.

**Enhancement for Streaks**: For consecutive correct answers, the interval
widens:
- 1-2 correct: Perfect fourth (G4→C5, 392→523Hz)
- 3-4 correct: Perfect fifth (G4→D5, 392→587Hz)
- 5+ correct: Major sixth (G4→E5, 392→659Hz) — the sound is literally
  "opening up" as the streak grows

#### Sub-tasks:

- [ ] **4.3.1** Redesign `playGrammarCorrect` with streak-aware intervals:
  - Base tone: 392Hz (G4), Bell richness 0.30
  - Target tone: varies by consecutive count (523, 587, or 659Hz)
  - Duration: 120ms
  - Volume: 0.025
  - Envelope: Dew (attack 10ms, release 100ms)

- [ ] **4.3.2** For 5+ consecutive correct, add a subtle "resonance" layer:
  a quiet sustained C4 (262Hz) at volume 0.006, duration 200ms, Glass
  waveform. This creates a subconscious "harmonic foundation" that rewards
  sustained performance.

- [ ] **4.3.3** Pair with haptic: intensity scales with streak count:
  1-2: `lightGenerator.impactOccurred(intensity: 0.4)`
  3-4: `mediumGenerator.impactOccurred(intensity: 0.5)`
  5+: `notificationGenerator.notificationOccurred(.success)`

---

### Story 4.4: Grammar Wrong — The Thoughtful Pause

**Emotional Goal**: Grammar mistakes feel more personal than flashcard
mistakes (the learner actively reasoned and was wrong). The sound must be
especially gentle — more "interesting, let's think about this" than
"incorrect."

**Sound Character**: Same E4→D4 (330→294Hz) family as other wrong-answer
sounds, but with an added micro-rest (80ms silence after the tone) before
the explanation panel reveals. This silence is a deliberate design choice:
it creates space for the learner to process without the app rushing them.

#### Sub-tasks:

- [ ] **4.4.1** Redesign `playGrammarWrong`:
  - Frequency: 330Hz → 294Hz (E4 → D4)
  - Duration: 100ms, FOLLOWED by 80ms enforced silence before any
    other sound can play
  - Volume: 0.014
  - Waveform: Glass (richness 0.10) — deliberately softer than
    grammar correct to avoid emphasis on the mistake
  - Envelope: Petal with extended release (200ms)

- [ ] **4.4.2** Pair with haptic: `softGenerator.impactOccurred(intensity: 0.25)`.

---

### Story 4.5: Explanation Reveal — The Opened Book

**Emotional Goal**: When the grammar explanation panel expands, it should
feel like opening a book to a helpful page — a moment of learning, not
correction. The sound says "here's something useful."

**Sound Character**: A gentle ascending pair — C4→E4 (262→330Hz), evoking
the feeling of "opening." Glass waveform, very quiet. Duration: 100ms.
Volume: Whisper (0.010). Petal envelope.

#### Sub-tasks:

- [ ] **4.5.1** Redesign `playExplanationReveal`:
  - Frequency: 262Hz → 330Hz (C4 → E4, rising major third)
  - Duration: 100ms
  - Volume: 0.010
  - Waveform: Glass (richness 0.05)
  - Envelope: Petal (attack 25ms, release 150ms)

- [ ] **4.5.2** Pair with haptic: none. The explanation reveal should
  be purely sonic — adding a haptic here would make it feel like a
  notification rather than a natural progression.

---

### Story 4.6: Timer Sounds — Tension Without Anxiety

**Emotional Goal**: Grammar quizzes have a timer. Timer sounds must create
productive focus without anxiety. The goal is "flow state awareness" —
the learner knows time is passing without feeling rushed. Think of the
gentle tick of a grandfather clock, not a bomb countdown.

**Sound Character**: Timer ticks use a metronome-like pulse at C4 (262Hz),
so quiet it's barely audible. As time runs low (final 5 seconds), the
pitch rises gently to E4 (330Hz) — a subtle tonal shift that the
subconscious registers as "pay attention" without triggering fight-or-flight.

**Current Problem**: `playTimerTick` escalates frequency exponentially
as time runs out, creating genuine anxiety.

#### Sub-tasks:

- [ ] **4.6.1** Redesign `playTimerTick`:
  - Normal ticks (>10 seconds remaining): 262Hz (C4), volume 0.006,
    Glass, duration 20ms, Petal envelope. One tick per second.
  - Warning ticks (5-10 seconds): 294Hz (D4), volume 0.008
  - Urgent ticks (1-5 seconds): 330Hz (E4), volume 0.010
  - The frequency shift is exactly 2 notes — barely perceptible
    consciously but enough for the subconscious to register urgency

- [ ] **4.6.2** Redesign `playTimerExpired`:
  - Frequency: 330Hz → 262Hz (E4 → C4, falling major third, "settling")
  - Duration: 150ms
  - Volume: 0.015
  - Waveform: Wood (richness 0.15)
  - Envelope: Dew with long release (200ms) — the timer doesn't
    "buzz" when it expires, it "settles," communicating
    "time's up, and that's okay"

- [ ] **4.6.3** Pair with haptic: timer ticks get no haptic (too frequent,
  would be maddening). Timer expiry gets
  `softGenerator.impactOccurred(intensity: 0.35)`.

---

## Epic 5: Navigation & Spatial Transitions

> *"The space between the notes — that's where the music lives."*
> — Claude Debussy

Navigation sounds are the connective tissue of the app. They mark movement
from one context to another — switching tabs, pushing screens, presenting
sheets, dismissing views. These sounds are heard dozens if not hundreds of
times per session, so they must be almost invisible: present enough to
confirm the transition, quiet enough to never register as "a sound the
app made."

The design philosophy draws from the concept of *Ma* (間) in Japanese
aesthetics — the meaningful space between things. A tab switch sound is
not about the destination tab; it's about the *space* between the old tab
and the new one. The sound should feel like a breath between sentences.

### Story 5.1: Tab Switch — The Breath Between

**Emotional Goal**: Switching tabs should feel like exhaling — a brief
release of the previous context, making room for the next one. Not a click,
not a chime, but a breath.

**Sound Character**: A single, barely-audible tone — a pure sine at C5
(523Hz) with Glass waveform, duration only 40ms, volume at the absolute
floor of Whisper tier (0.008). Petal envelope with rapid release. The
sound should be so quiet that users debate whether the app makes a sound
at all. That's the correct volume.

**Current Problem**: `playTabSwitch` cycles through 5 different frequencies
(523-1318Hz) based on tab index. This creates a "musical scale" effect
that draws attention to the tab switching mechanism. Tab sounds should be
indistinguishable from each other — the tab bar is not a piano.

#### Sub-tasks:

- [ ] **5.1.1** Redesign `playTabSwitch` and `playProfileTabSwitch` as
  a single, non-indexed, constant sound:
  - Frequency: 523Hz (C5)
  - Duration: 40ms
  - Volume: 0.008
  - Waveform: Glass (richness 0.0 — pure sine)
  - Envelope: Petal (attack 15ms, release 60ms)
  - Remove the tab-index-based frequency array entirely

- [ ] **5.1.2** Apply identical parameters to the ContentView tab bar
  `.onChange(of: selectedTab)` sound. All tab switches across the entire
  app should sound identical.

- [ ] **5.1.3** Pair with haptic: `selectionGenerator.selectionChanged()`.
  This is iOS's lightest haptic — perfect for tab switching.

---

### Story 5.2: Screen Push & Pop — Spatial Movement

**Emotional Goal**: Navigating deeper into the app (push) should feel like
stepping forward. Navigating back (pop) should feel like stepping backward.
The sounds create a spatial metaphor — the app has "depth."

**Sound Character**:
- Push: Rising minor third, C4→E4 (262→330Hz). "Moving forward."
- Pop: Falling minor third, E4→C4 (330→262Hz). "Returning home."

Both at Glass waveform, 80ms duration, Whisper volume (0.010). Petal
envelope. The push and pop should be recognizable inversions of each other.

#### Sub-tasks:

- [ ] **5.2.1** Redesign `playNavPush`:
  - Frequency: 262Hz → 330Hz (C4 → E4)
  - Duration: 80ms, Volume: 0.010, Glass, Petal

- [ ] **5.2.2** Redesign `playNavPop`:
  - Frequency: 330Hz → 262Hz (E4 → C4)
  - Duration: 80ms, Volume: 0.010, Glass, Petal

- [ ] **5.2.3** Pair push with haptic:
  `softGenerator.impactOccurred(intensity: 0.20)`.
  Pair pop with haptic:
  `softGenerator.impactOccurred(intensity: 0.15)` — slightly lighter,
  "returning is easier than departing."

---

### Story 5.3: Sheet Present & Dismiss — Rising & Settling

**Emotional Goal**: Presenting a sheet (modal) should feel like lifting a
curtain. Dismissing should feel like the curtain falling gently. The
metaphor is theatrical: sheets are moments of heightened focus.

**Sound Character**:
- Present: A4→C5 (440→523Hz), rising — "the curtain lifts"
- Dismiss: C5→A4 (523→440Hz), falling — "the curtain settles"

Both at Glass waveform, 100ms, Whisper (0.010). Petal envelope with
longer release (150ms) for theatrical "settling."

#### Sub-tasks:

- [ ] **5.3.1** Redesign `playSheetPresent`:
  - Frequency: 440Hz → 523Hz, duration 100ms, volume 0.010, Glass, Petal

- [ ] **5.3.2** Redesign `playSheetDismiss`:
  - Frequency: 523Hz → 440Hz, duration 100ms, volume 0.010, Glass, Petal

- [ ] **5.3.3** Pair with haptic: present gets
  `lightGenerator.impactOccurred(intensity: 0.3)`, dismiss gets
  `softGenerator.impactOccurred(intensity: 0.2)`.

---

### Story 5.4: Button & Toggle Sounds — Micro-Confirmations

**Emotional Goal**: Buttons and toggles are the app's most frequent
interaction points. Their sounds must be so brief and quiet that they
register as "tactile texture" rather than "audio feedback." Think of the
sound a light switch makes in a quiet room — you hear it, but you'd never
describe it as "a sound."

**Sound Character**:
- Button tap: D5 (587Hz), 30ms, Murmur (0.015), Glass, Spark envelope
- Toggle on: C5→E5 (523→659Hz), 50ms, Murmur (0.015), Glass, Dew envelope
- Toggle off: E5→C5 (659→523Hz), 50ms, Whisper (0.012), Glass, Dew envelope
  (off-toggle is slightly quieter than on-toggle — turning things off
  should be even more subtle)

#### Sub-tasks:

- [ ] **5.4.1** Redesign `playButtonTap`:
  - Frequency: 587Hz (D5), duration 30ms, volume 0.015, Glass, Spark

- [ ] **5.4.2** Redesign `playToggleOn`:
  - Frequency: 523Hz → 659Hz (C5 → E5), duration 50ms, volume 0.015,
    Glass, Dew

- [ ] **5.4.3** Redesign `playToggleOff`:
  - Frequency: 659Hz → 523Hz (E5 → C5), duration 50ms, volume 0.012,
    Glass, Dew

- [ ] **5.4.4** Redesign `playSoftClick`:
  - Frequency: 523Hz (C5), duration 20ms, volume 0.010, Glass, Spark
  - This is the "generic tiny confirmation" — used where no specific
    sound exists

- [ ] **5.4.5** Pair all with haptic:
  `softGenerator.impactOccurred(intensity: 0.2)`.

---

### Story 5.5: Slider & Page Changes — The Continuous Texture

**Emotional Goal**: Sliders and pagination create continuous interaction —
the user drags or swipes through values. The sound should feel like running
a finger along a smooth surface — a subtle texture rather than discrete events.

#### Sub-tasks:

- [ ] **5.5.1** Redesign `playSliderTick`:
  - Frequency: base 392Hz (G4) + normalized position × 131Hz
    (range: G4 to C5, 392→523Hz)
  - Duration: 15ms (ultra-brief)
  - Volume: 0.006
  - Waveform: Glass, Spark envelope

- [ ] **5.5.2** Redesign `playSliderEndpoint`:
  - Frequency: either 392Hz (at minimum) or 523Hz (at maximum)
  - Duration: 30ms, Volume: 0.010, Glass, Dew

- [ ] **5.5.3** Redesign `playPageChange`:
  - Frequency: 440Hz (A4), duration 40ms, volume 0.008, Glass, Petal

- [ ] **5.5.4** Pair slider ticks with haptic: none (would be maddening
  during continuous drag). Pair endpoints and page changes with
  `selectionGenerator.selectionChanged()`.

---

### Story 5.6: Search Interaction Sounds — Discovery

**Emotional Goal**: Search should feel like exploration — the learner is
seeking something. Found = satisfaction. Empty = calm acceptance.

#### Sub-tasks:

- [ ] **5.6.1** Redesign `playSearchFocus`:
  - Frequency: 440Hz (A4), duration 40ms, volume 0.008, Glass, Petal
  - The sound of "starting to look"

- [ ] **5.6.2** Redesign `playSearchFound`:
  - Frequency: 440Hz → 523Hz (A4 → C5), duration 60ms, volume 0.012,
    Glass, Dew — "found what I was looking for"

- [ ] **5.6.3** Redesign `playSearchEmpty`:
  - Frequency: 440Hz → 392Hz (A4 → G4), duration 60ms, volume 0.008,
    Glass, Petal — "nothing here, and that's okay"

---

## Epic 6: Achievement & Celebration System

> *"Celebrate what you want to see more of."* — Tom Peters

Achievements, milestones, and celebrations are the app's rarest and most
emotionally significant sounds. Because they happen infrequently (a level-up
might happen once every 20-30 minutes, a streak milestone once per day),
they can be SLIGHTLY more elaborate and louder than everyday sounds. But
"slightly" is the operative word — even celebrations should feel like
candle-lit champagne, not a stadium fireworks show.

The inspiration comes from the level-up sound in Zelda: Breath of the Wild —
a 2-second musical phrase that feels like a gift, not an alarm. Every
player remembers it fondly because it's beautiful, rare, and earned.

### Story 6.1: XP Gain — The Tiny Sparkle

(Already defined in Story 2.7 — this is a cross-reference. XP gain is
placed in Epic 2 because it primarily occurs during flashcard sessions.)

---

### Story 6.2: Level Up — The Ascending Tower

**Emotional Goal**: Leveling up is the single most significant moment in a
play session. The sound should feel like climbing to the top of a tower and
seeing the view for the first time — a moment of earned beauty.

**Sound Character**: A full ascending pentatonic arpeggio through 5 notes:
C4→D4→E4→G4→A4 (262→294→330→392→440Hz), each note separated by 50ms.
Bell waveform with increasing richness. The final note (A4) sustains for
300ms with a slow fade. Total duration: ~500ms. Volume peaks at Celebrate
tier (0.040 for the final note). This is the longest and most elaborate
sound in the entire app — and justifiably so.

**Current Problem**: `playLevelUp` already uses a multi-note structure but
the frequencies (based on level number) create inconsistency. The sound
should be identical and beautiful at every level.

#### Sub-tasks:

- [ ] **6.2.1** Redesign `playLevelUp` as a 5-note ascending pentatonic arpeggio:
  - Note 1: C4 (262Hz), delay 0ms, volume 0.020, Bell richness 0.25
  - Note 2: D4 (294Hz), delay 50ms, volume 0.025, Bell richness 0.28
  - Note 3: E4 (330Hz), delay 100ms, volume 0.030, Bell richness 0.32
  - Note 4: G4 (392Hz), delay 150ms, volume 0.035, Bell richness 0.36
  - Note 5: A4 (440Hz), delay 200ms, volume 0.040, Bell richness 0.40,
    sustain duration 300ms
  - All notes: Spark envelope except Note 5 which uses Dew with
    extended release (250ms)

- [ ] **6.2.2** Add a "resonance bed" — a very quiet sustained C3 (131Hz)
  at volume 0.005, Glass waveform, duration 600ms, starting at Note 1.
  This bass undertone creates subconscious depth and gravitas.

- [ ] **6.2.3** Add a "shimmer" — scattered micro-tones at octave-doubled
  frequencies (1046Hz, 880Hz) at volume 0.003, Glass, fired at random
  times during the arpeggio (3-4 micro-tones, each 20ms duration).
  These simulate the "sparkle" of achievement particles.

- [ ] **6.2.4** Pair with haptic: a progressive haptic sequence matching
  the arpeggio:
  - Notes 1-2: `softGenerator.impactOccurred(intensity: 0.3)`
  - Notes 3-4: `lightGenerator.impactOccurred(intensity: 0.5)`
  - Note 5: `notificationGenerator.notificationOccurred(.success)`

---

### Story 6.3: Streak Milestone — The Warm Pulse

**Emotional Goal**: Maintaining a daily streak is an act of discipline and
commitment. The streak sound should feel like a warm heartbeat — the app
acknowledging the learner's dedication with pride and affection.

**Sound Character**: Two warm pulses separated by 150ms — like a heartbeat.
First pulse: A3 (220Hz), second pulse: A3 (220Hz) with richer harmonics.
Wood waveform. Duration: 100ms each. Volume: Speak (0.030). Dew envelope.

For longer streaks (7+, 14+, 30+), the second pulse rises in pitch:
- 1-6 days: A3→A3 (220→220Hz, same — simple heartbeat)
- 7-13 days: A3→C4 (220→262Hz, rising — growing)
- 14-29 days: A3→E4 (220→330Hz, wider — confidence)
- 30+ days: A3→A4 (220→440Hz, octave — mastery)

#### Sub-tasks:

- [ ] **6.3.1** Redesign `playStreakMilestone` with the heartbeat metaphor:
  - Pulse 1: 220Hz (A3), Wood richness 0.25, volume 0.025, 100ms, Dew
  - Pulse 2: varies by streak length (see above), Wood richness 0.35,
    volume 0.030, 100ms, Dew
  - Gap between pulses: 150ms

- [ ] **6.3.2** For 30+ day streaks, add a third element: a sustained
  breath at C3 (131Hz), volume 0.008, Glass, duration 400ms, starting
  at Pulse 1. This "foundation" makes the 30-day streak sound feel
  distinctly more significant.

- [ ] **6.3.3** Pair with haptic: two `mediumGenerator.impactOccurred(intensity: 0.5)`
  matching the two pulses, separated by 150ms.

---

### Story 6.4: Achievement Unlocked — The Chime Sequence

**Emotional Goal**: Unlocking an achievement is a moment of surprise and
delight. The sound should feel like discovering a hidden treasure —
unexpected, beautiful, and memorable.

**Sound Character**: A three-note descending chime — G5→E5→C5
(784→659→523Hz), played with 40ms gaps. Bell waveform. The descending
pattern is counterintuitive (achievements usually ascend) but creates
a "gentle cascade" quality — like coins falling softly onto velvet.
Volume: Celebrate (0.035-0.042). Each note diminishes slightly:
0.042, 0.038, 0.035.

#### Sub-tasks:

- [ ] **6.4.1** Redesign `playAchievementUnlocked`:
  - Note 1: G5 (784Hz), volume 0.042, Bell richness 0.40, 80ms
  - Note 2: E5 (659Hz), delay 40ms, volume 0.038, Bell richness 0.35, 80ms
  - Note 3: C5 (523Hz), delay 80ms, volume 0.035, Bell richness 0.30,
    120ms (final note lingers)
  - All: Spark envelope except Note 3 which uses Dew

- [ ] **6.4.2** Pair with haptic: `notificationGenerator.notificationOccurred(.success)`
  timed with Note 2.

---

### Story 6.5: Daily Goal Complete — The Sunset Chord

**Emotional Goal**: Completing the daily goal is the learner's "good night" —
the moment when they've done enough for today. The sound should feel like
watching a sunset: warm, complete, peaceful.

**Sound Character**: A sustained major chord — C4+E4+G4 (262+330+392Hz)
played simultaneously. Wood waveform. Duration: 250ms with a very long
release (300ms fade). Volume: Speak (0.028 total, ~0.012 per note).
Petal envelope. The chord resolves into silence like a sunset fading.

#### Sub-tasks:

- [ ] **6.5.1** Redesign `playDailyGoalComplete` as a sustained major chord:
  - C4 (262Hz), volume 0.012, Wood richness 0.20
  - E4 (330Hz), volume 0.010, Wood richness 0.25
  - G4 (392Hz), volume 0.008, Wood richness 0.20
  - All: duration 250ms, Petal envelope with 300ms release

- [ ] **6.5.2** Pair with haptic:
  `notificationGenerator.notificationOccurred(.success)`, fired 50ms
  before the chord begins.

---

### Story 6.6: Celebration — The Rare Bloom

**Emotional Goal**: The celebration sound fires on extraordinary events
(perfect score, long streak bonus). It should feel like a rare flower
blooming — surprising, beautiful, and over quickly.

**Sound Character**: A rapid 4-note ascending arpeggio — C5→E5→G5→C6
(523→659→784→1046Hz), with 25ms gaps. Bell waveform. Volume: Celebrate
(0.040). The final C6 at 1046Hz is the ONE exception to the 1400Hz ceiling
(Story 1.1) — celebrations earn this brightness precisely because they're
rare. Spark envelope for energy.

#### Sub-tasks:

- [ ] **6.6.1** Redesign `playCelebration`:
  - Note 1: C5 (523Hz), volume 0.030, Bell richness 0.35, 60ms
  - Note 2: E5 (659Hz), delay 25ms, volume 0.035, Bell richness 0.38, 60ms
  - Note 3: G5 (784Hz), delay 50ms, volume 0.038, Bell richness 0.40, 60ms
  - Note 4: C6 (1046Hz), delay 75ms, volume 0.040, Bell richness 0.42, 100ms
  - All: Spark envelope, final note gets Dew with 150ms release

- [ ] **6.6.2** Anti-fatigue: celebration sound has a 30-second cooldown.
  If triggered within 30s of a previous celebration, reduce volume by 40%.

---

### Story 6.7: Purchase Success — The Golden Moment

**Emotional Goal**: A successful in-app purchase is a commitment of real
money. The sound should validate that commitment — "you made a wonderful
choice." Warm, substantial, memorable.

**Sound Character**: The same major chord as daily goal (C4+E4+G4) but
with added octave doubling (C5 layered at very low volume). Total duration:
300ms. Volume: Celebrate (0.040). Bell waveform with high richness.

#### Sub-tasks:

- [ ] **6.7.1** Redesign `playPurchaseSuccess`:
  - Chord: C4 (262Hz) + E4 (330Hz) + G4 (392Hz) + C5 (523Hz support)
  - Volumes: 0.015 + 0.012 + 0.010 + 0.005
  - Duration: 300ms, Bell richness 0.40
  - Dew envelope with 250ms release

- [ ] **6.7.2** Pair with haptic:
  `notificationGenerator.notificationOccurred(.success)`, then 200ms later
  `mediumGenerator.impactOccurred(intensity: 0.6)`. The double haptic
  creates a "solid and complete" sensation.

---

## Epic 7: Ambient Soundscapes & Atmosphere

> *"Ambient music must be as ignorable as it is interesting."*
> — Brian Eno, Music for Airports liner notes, 1978

Ambient soundscapes transform LumenLingo from a utility into a place — a
space the learner inhabits during study. The ambient layer is optional
(off by default), but when enabled, it should feel like studying in a
beautiful room: warm, immersive, and subtly alive.

The primary inspiration is Eno's "Music for Airports" — slowly evolving
tones that never demand attention but always reward it. Secondary
inspirations include the ambient work of Hiroshi Yoshimura ("Music for
Nine Post Cards") and the environmental sounds in the game Journey
(composed by Austin Wintory).

### Story 7.1: Ambient Drone Foundation — The Living Room

**Emotional Goal**: The ambient drone is the "floor" of the soundscape — a
warm, barely-perceptible hum that makes silence feel "furnished." When
ambient is on, the learner should feel like they're studying in a place
that cares about them — a library with perfect acoustics, not a sterile
cubicle.

**Sound Character**: A sustained C3 (131Hz) with very gentle harmonic
movement — the 2nd harmonic (C4, 262Hz) slowly pulses in and out over
a 12-second cycle. Glass waveform. Volume: 0.006. This is below the
threshold of conscious attention — the learner shouldn't think "I hear
ambient music." They should think "studying feels nice today."

**Current Problem**: The ambient presets use sine waves at fixed frequencies
that sound robotic. There's no movement, no breathing — they feel like a
test tone rather than a living environment.

#### Sub-tasks:

- [ ] **7.1.1** Redesign the ambient drone generator:
  - Base tone: C3 (131Hz), continuous, volume 0.004, Glass
  - Harmonic layer: C4 (262Hz), volume oscillates between 0.001 and 0.003
    over a 12-second sine cycle
  - Movement layer: G3 (196Hz), volume oscillates between 0.000 and 0.002
    over an 18-second sine cycle (different period than the harmonic,
    creating non-repeating evolution)
  - Total perceived volume: ~0.006 at peaks

- [ ] **7.1.2** Add a "breath" modulation to the base tone: amplitude
  gently fluctuates ±10% over a 6-second cycle, like the room itself
  is breathing. This prevents the drone from feeling "dead."

- [ ] **7.1.3** Implement smooth crossfade between ambient presets (when
  user switches in settings): 2-second linear crossfade. Never cut
  ambient abruptly.

- [ ] **7.1.4** When ambient is first enabled, fade in over 3 seconds.
  When disabled, fade out over 2 seconds. The transition should feel
  like sunrise (slow in) and twilight (slightly faster out).

---

### Story 7.2: Time-of-Day Tonal Adaptation

**Emotional Goal**: If the learner studies at different times of day, the
ambient character should subtly shift — warmer and deeper in the evening,
slightly brighter in the morning. This creates a subconscious feeling that
the app "knows" when they're studying, like a room with smart lighting.

**Sound Character**:
- Morning (6am-12pm): Base tone rises to D3 (147Hz), harmonic layer
  includes E4 (330Hz) at very low volume. Slightly brighter, "waking up."
- Afternoon (12pm-6pm): Standard C3 foundation. Neutral, focused.
- Evening (6pm-10pm): Base drops to A2 (110Hz), harmonic layer shifts
  to G3 (196Hz). Warmer, "settling down."
- Night (10pm-6am): Deepest — G2 (98Hz) base, very slow modulation.
  Almost meditative. Volume reduced to 0.004. The app is "whispering
  in the dark."

#### Sub-tasks:

- [ ] **7.2.1** Implement time-of-day detection using `Calendar.current.component(.hour)`.

- [ ] **7.2.2** Define the four tonal signatures (morning/afternoon/evening/night)
  as ambient parameter sets.

- [ ] **7.2.3** Implement gradual transitioning — if the learner studies
  through a boundary (e.g., 5:45pm → 6:15pm), the ambient should smoothly
  transition over 5 minutes, not jump at exactly 6:00pm.

- [ ] **7.2.4** Make time-of-day adaptation toggleable in settings (default: on
  when ambient is enabled). Some users may prefer consistent ambient.

---

### Story 7.3: Ambient Presets — Emotional Environments

**Emotional Goal**: Different learners prefer different emotional environments.
Offer 3-4 ambient presets, each evoking a distinct psychological space.

**Preset Designs**:

1. **Celestial Library** (default): C3 + G3 foundation with slow harmonic
   wandering. Evokes: a warm room filled with starlight.
   
2. **Ocean Morning**: Low A2 (110Hz) with gentle pitch oscillation (±5Hz
   over 8 seconds, simulating waves). Evokes: studying by the sea.
   
3. **Mountain Silence**: Very sparse — single D3 (147Hz) tone with 20-second
   decay cycles, spending half the time in true silence. Evokes: a cabin
   in the mountains, hearing distant wind.
   
4. **Garden Rain**: C3 foundation with a soft filtered-noise layer
   (bandwidth 100-400Hz) at volume 0.002, simulating gentle rain on glass.
   Evokes: studying indoors while rain falls outside.

#### Sub-tasks:

- [ ] **7.3.1** Define the parameter sets for all 4 presets (base frequency,
  harmonic frequencies, modulation rates, noise characteristics).

- [ ] **7.3.2** Implement preset switching with 3-second crossfade.

- [ ] **7.3.3** Add preset selection UI in SoundSettingsView (only visible
  when ambient is enabled).

- [ ] **7.3.4** Test each preset over a 30-minute study session. Evaluate:
  does it enhance focus? Does it become annoying? Does it remain
  unobtrusive enough to forget it's there?

---

### Story 7.4: Ambient Interaction Ducking

**Emotional Goal**: When the learner interacts (taps, swipes, answers),
the ambient layer should momentarily "breathe out" — reducing volume by
30% for 500ms, then smoothly returning. This creates a hierarchical
listening experience where interaction sounds sit above the ambient floor
without needing to be loud themselves.

#### Sub-tasks:

- [ ] **7.4.1** Implement volume ducking in the ambient playback loop:
  when any `playTone()` is called, temporarily reduce ambient volume
  by 30% over 100ms, hold for 400ms, then restore over 200ms.

- [ ] **7.4.2** Use an exponential ease-out for the restoration curve
  (fast restore at first, then gradual — feels more natural than linear).

- [ ] **7.4.3** If multiple interactions occur during a duck, don't
  compound the reduction — maintain the ducked level and restart the
  400ms hold timer. This prevents the ambient from disappearing during
  rapid interaction.

---

### Story 7.5: Ambient Entry & Exit Ceremonies

**Emotional Goal**: The moment ambient sound fades in should feel like
stepping into a warm bath. The moment it fades out should feel like
sunrise gently ending a dream.

#### Sub-tasks:

- [ ] **7.5.1** Design the "entry ceremony": a 4-second fade-in where
  the base tone appears first (0-1s), then harmonics join (1-2.5s),
  then modulation begins (2.5-4s). The ambient "assembles" rather
  than "turns on."

- [ ] **7.5.2** Design the "exit ceremony": a 2.5-second fade-out where
  modulation stops first (0-0.8s), harmonics fade (0.8-1.5s), then
  base tone dissolves (1.5-2.5s). The ambient "disassembles" gracefully.

- [ ] **7.5.3** When the app enters background, immediately stop the
  entry ceremony (if in progress) and begin a rapid 0.3s exit. Don't
  waste battery on background ambient audio.

---

## Epic 8: Haptic Choreography

> *"Touch is the most fundamental sense. A baby experiences the world
> through touch before sight, sound, or taste."*
> — Tiffany Field, Touch Research Institute

Haptics are not auxiliary to sound — they are the other half of the sensory
experience. A perfectly designed haptic pattern can make even silence feel
meaningful. The goal of this epic is to ensure every haptic in LumenLingo
is intentionally choreographed, with the precision and care of a master
watchmaker assembling a mechanical movement.

The chief inspiration is Apple's Taptic Engine design philosophy: "Haptics
should feel like the physical world." When you tap a UI element, the haptic
should feel like the element has mass, substance, and resistance. Not a
vibration, but a sensation.

### Story 8.1: Haptic Timing — The 5ms Rule

**Emotional Goal**: Haptic and sound must arrive at the perceived same
instant. Research (Adelson & Bergen, 1985) shows that haptic arriving
2-8ms BEFORE audio creates the most convincing cross-modal binding — the
sensation of a single unified event. Haptic arriving AFTER audio feels
"delayed" and cheap.

#### Sub-tasks:

- [ ] **8.1.1** Audit all haptic-sound pairs across the codebase. For each
  pair, ensure the haptic fires 5ms before the audio. If they currently
  fire simultaneously, add `DispatchQueue.main.asyncAfter(deadline: .now() + 0.005)`
  to the audio call.

- [ ] **8.1.2** Create a `HapticsService.playWithSound(_ sound: () -> Void)` 
  convenience method that fires the haptic immediately and defers the
  sound by 5ms. This ensures the rule is followed consistently.

- [ ] **8.1.3** Test on physical device (not simulator — simulator haptics
  have different latency). Verify that the haptic-sound pair feels like
  one event, not two sequential events.

---

### Story 8.2: Haptic Weight System — Mass & Material

**Emotional Goal**: Every interactive element should feel like it has a
specific weight. A toggle switch feels lighter than a button. A tile feels
heavier than a card. A celebration feels more substantial than a daily tap.

**Weight Definitions**:
- **Feather** (intensity 0.15-0.25): Card appear, search focus, slider tick,
  page change. Uses `softGenerator`.
- **Pebble** (intensity 0.30-0.45): Card flip, tile pick, answer select,
  toggle change, button tap. Uses `lightGenerator`.
- **Stone** (intensity 0.50-0.65): Tile place, correct answer, wrong answer,
  word complete. Uses `mediumGenerator` or `rigidGenerator`.
- **Bell** (intensity 0.70-0.85): Level up, achievement, celebration, purchase
  success. Uses `notificationGenerator` or multi-tap sequences.

#### Sub-tasks:

- [ ] **8.2.1** Create a `HapticWeight` enum (feather, pebble, stone, bell)
  in `HapticsService` with associated generator and intensity range.

- [ ] **8.2.2** Remap all existing haptic calls to their appropriate weight
  category. Document each mapping with rationale.

- [ ] **8.2.3** Implement weight-proportional pre-warm: heavier weights
  pre-warm their generators more frequently (Bell every 4 seconds,
  Feather every 10 seconds).

---

### Story 8.3: Haptic Sequences — Musical Phrases

**Emotional Goal**: For milestone events (level up, streak milestone,
celebration), the haptic should be a SEQUENCE — not a single tap, but a
rhythmic phrase that evolves over 200-500ms. This creates the sensation
of the device "responding with enthusiasm" rather than "beeping once."

#### Sub-tasks:

- [ ] **8.3.1** Design the level-up haptic sequence:
  - 0ms: soft at 0.3 (anticipation)
  - 80ms: light at 0.4 (rising)
  - 160ms: medium at 0.5 (growing)
  - 250ms: light at 0.6 (building)
  - 350ms: success notification (climax)
  - Total: 5 haptic events over 350ms, matching the 5-note arpeggio

- [ ] **8.3.2** Design the streak-milestone haptic sequence:
  - 0ms: medium at 0.5 (first heartbeat)
  - 150ms: medium at 0.6 (second heartbeat — slightly stronger)
  - Total: 2 haptic events over 150ms, matching the heartbeat metaphor

- [ ] **8.3.3** Design the celebration haptic sequence:
  - 0ms: soft at 0.3 → 25ms: light at 0.4 → 50ms: medium at 0.5
    → 75ms: success notification
  - Total: 4 events over 75ms — fast, energetic, matching the
    rapid arpeggio

- [ ] **8.3.4** Implement a `playSequence([HapticEvent])` method in
  `HapticsService` that accepts an array of (delay, generator, intensity)
  tuples and fires them in order.

---

### Story 8.4: Haptic Absence — When Silence Speaks

**Emotional Goal**: Some sounds should explicitly have NO haptic. The absence
of haptic creates its own meaning — "this is a thought, not a touch."

**Haptic-Free Sounds**:
- Ambient drone (continuous haptic would be maddening)
- Timer ticks (would create anxiety through constant vibration)
- Explanation reveal (should feel cerebral, not physical)
- Search empty (absence of result = absence of feedback)
- Wrong answer (consider removing haptic to avoid "punishment" feel)

#### Sub-tasks:

- [ ] **8.4.1** Review the wrong-answer haptic (`softGenerator` at 0.3).
  Conduct a preference test: 3 users try 10 wrong answers with haptic,
  10 without. Ask which feels "gentler" and "less judgmental."

- [ ] **8.4.2** Ensure timer ticks have NO haptic. If any code path triggers
  a haptic during timer countdown, remove it.

- [ ] **8.4.3** Document the "no-haptic" list in HapticsService as comments
  explaining WHY each interaction is deliberately haptic-free.

---

### Story 8.5: Haptic Fatigue Protection

**Emotional Goal**: Haptics, like sounds, can become irritating through
overuse. After extended sessions, the learner's sensitivity to haptic
decreases, and what felt pleasant at minute 1 feels buzzy at minute 30.

#### Sub-tasks:

- [ ] **8.5.1** Implement haptic session tracking: count total haptic events
  per session.

- [ ] **8.5.2** After 100 haptic events in a session, reduce all intensities
  by 20%. After 200 events, reduce by 35%. After 300, reduce by 50%.
  This mirrors the sound fatigue system.

- [ ] **8.5.3** Exempt "rare" haptics (level up, achievement, celebration)
  from fatigue reduction — these should always feel full-strength.

---

### Story 8.6: Cross-Modal Cancellation — When Sound is Off

**Emotional Goal**: When the user disables sound but keeps haptics enabled,
the haptics should slightly increase in intensity (by 15%) to compensate
for the missing audio component. Psychoacoustic research (Ernst & Banks,
2002) shows that disabling one sensory channel increases reliance on the
remaining channels. Slightly stronger haptics fill the perceptual gap.

#### Sub-tasks:

- [ ] **8.6.1** Detect when sound is disabled but haptics enabled.

- [ ] **8.6.2** Apply a 1.15× intensity multiplier to all haptic events
  in this mode (capped at 1.0 intensity maximum).

- [ ] **8.6.3** When sound is re-enabled, smoothly reduce the haptic
  multiplier back to 1.0× over 2 seconds (not instantly — the sudden
  reduction would feel jarring).

---

## Epic 9: Adaptive Emotional Intelligence

> *"The best technology is invisible — it adapts to you, rather than
> demanding that you adapt to it."*
> — Don Norman, The Design of Everyday Things

Adaptive audio intelligence makes LumenLingo's sound system respond to
the learner's emotional state. Not through complex AI, but through simple
heuristics: a learner who is doing well should hear encouraging warmth;
a learner who is struggling should hear gentle support; a learner who has
been studying for a long time should hear progressively less.

### Story 9.1: Performance Mood Detection

**Emotional Goal**: The app should "sense" how the learner is doing and
adjust its tonal warmth accordingly. This is subtle — the learner should
never think "the app changed its sounds." They should think "studying
feels different today."

**Mood States**:
- **Confident** (70%+ correct in last 10 answers): Sounds gain slightly
  more harmonic richness (+0.05). The world feels "warmer" when you're
  doing well.
- **Neutral** (40-70% correct): Standard parameters. No adjustment.
- **Struggling** (below 40% correct): Wrong-answer sounds become 20%
  quieter (even more gentle). Correct-answer sounds become 10% louder
  (extra encouragement). The gap between "right" and "wrong" softens.

#### Sub-tasks:

- [ ] **9.1.1** Implement a rolling average of the last 10 answer results
  (correct/incorrect) in AudioService.

- [ ] **9.1.2** Define three mood states with their audio parameter
  adjustments: richness modifier, volume modifier, release modifier.

- [ ] **9.1.3** Apply mood adjustments through a global modifier in
  `playTone()` — not per-sound, so all sounds shift together.

- [ ] **9.1.4** Transitions between moods should be gradual (fade over
  3-5 interactions, not snap).

---

### Story 9.2: Session Duration Fatigue

**Emotional Goal**: After 15-20 minutes of continuous use, the human
ear begins to experience "listener fatigue" — a gradual decrease in
sensitivity that makes sounds feel harsher. The app should counter this
by gradually reducing volume and simplifying sounds over time.

**Fatigue Stages**:
- 0-10 min: Full sound palette, normal volumes
- 10-20 min: Volume reduces by 15%, harmonic richness reduces by 0.05
- 20-30 min: Volume reduces by 30%, multi-tone sounds simplify to
  single-tone versions
- 30+ min: Volume reduces by 45%, only essential feedback sounds play
  (correct/incorrect), all navigation sounds muted

#### Sub-tasks:

- [ ] **9.2.1** Track session start time in AudioService.

- [ ] **9.2.2** Implement a `fatigueFactor` (0.0-1.0) that scales with
  session duration according to the stages above.

- [ ] **9.2.3** Apply `fatigueFactor` as a volume multiplier and richness
  reducer in `playTone()`.

- [ ] **9.2.4** When the app enters background and returns, reset the
  fatigue timer (the break counts as rest).

- [ ] **9.2.5** Display a subtle indicator in settings showing "session
  duration: 23 minutes | audio at 70% to protect your ears."

---

### Story 9.3: Celebration Rarity Protection

**Emotional Goal**: Celebrations and achievements lose their emotional
impact when they're too frequent. The sound system should enforce rarity —
if a learner achieves multiple milestones in quick succession, only the
most significant one plays with full ceremony.

#### Sub-tasks:

- [ ] **9.3.1** Implement a "celebration budget" — maximum 3 celebration-tier
  sounds per 5-minute window. If exceeded, downgrade excess celebrations
  to Speak-tier volume (0.028 instead of 0.040).

- [ ] **9.3.2** Define a celebration priority hierarchy:
  Level Up > Achievement > Streak Milestone > Daily Goal > Perfect Score
  > Streak Bonus. When multiple celebrations compete, the highest
  priority wins full ceremony.

- [ ] **9.3.3** If a celebration is downgraded, show a subtle visual
  indicator (pulse, glow) to compensate for the reduced audio ceremony.

---

### Story 9.4: Context-Aware Sound Selection

**Emotional Goal**: The same interaction might warrant different sound
qualities depending on context. The first correct answer in a session
should feel slightly more celebratory than the 50th.

#### Sub-tasks:

- [ ] **9.4.1** Track a `sessionInteractionCount` in AudioService.

- [ ] **9.4.2** For the FIRST correct answer of a session, add 10% more
  harmonic richness and 5% more volume — a tiny "welcome back" warmth.

- [ ] **9.4.3** For the FIRST wrong answer after 5+ correct, reduce the
  wrong-answer volume by an additional 20% — the learner was on a roll,
  and the mistake already feels bad enough without audio emphasis.

- [ ] **9.4.4** For the LAST interaction before the daily goal is complete,
  add a subtle "approaching" quality — slightly longer release tail (extra
  50ms) that creates anticipation for the goal-complete sound.

---

### Story 9.5: Low-Power & Reduced-Motion Awareness

**Emotional Goal**: When the device is in Low Power Mode or the user has
enabled Reduce Motion in accessibility settings, the sound system should
respect these signals by simplifying.

#### Sub-tasks:

- [ ] **9.5.1** Detect Low Power Mode via `ProcessInfo.processInfo.isLowPowerModeEnabled`.
  When active: disable ambient drone, reduce all multi-tone sounds to
  single-tone, increase cooldowns by 50%.

- [ ] **9.5.2** Detect Reduce Motion via `UIAccessibility.isReduceMotionEnabled`.
  When active: double all envelope attack/release times (sounds feel
  even smoother and slower), disable any rapid arpeggio patterns
  (replace with single sustained notes).

- [ ] **9.5.3** When both are active simultaneously, consider muting all
  non-essential sounds — only keep correct/incorrect feedback.

---

## Epic 10: Sound Design Polish & Psychoacoustics

> *"The ear demands to be surprised, but the body demands to be comforted."*
> — Pauline Oliveros, Deep Listening

This epic addresses the craft of fine-tuning individual sounds. While
earlier epics defined WHAT each sound should feel like, this epic focuses
on HOW to achieve that feeling through precise psychoacoustic techniques.

### Story 10.1: Envelope Sculpting — The Art of Attack & Release

**Emotional Goal**: The attack and release of every sound are more important
than the pitch or timbre. A harsh attack (< 5ms) triggers the brain's
startle reflex. A soft attack (50-150ms) feels like a caress. A short
release (< 100ms) feels clinical. A long release (300-600ms) feels warm
and enveloping. Every sound should be individually evaluated for its
attack and release quality.

**Guiding Principle**: For UI interactions (taps, toggles), attack should be
fast enough to confirm the action (~20-40ms) but never instant. For
feedback sounds (correct, wrong), attack can be slower (~50-80ms) because
the learner is waiting for the result. For ambient sounds, attack should
be imperceptible (>150ms).

#### Sub-tasks:

- [ ] **10.1.1** Create an envelope audit spreadsheet listing every sound
  in AudioService with its current attack/release times. Evaluate each:
  - Does the attack feel jarring? → Increase to 40-80ms
  - Does the release cut off abruptly? → Increase to 200-400ms
  - Does the sound "click" at the beginning? → The attack is too fast,
    the oscillator isn't ramping smoothly, add a cubic ease-in on gain

- [ ] **10.1.2** Implement three envelope presets as configurable constants:
  - `petalEnvelope`: attack 80ms, release 350ms (gentle, for feedback)
  - `dewEnvelope`: attack 40ms, release 200ms (crisp, for UI)  
  - `sparkEnvelope`: attack 15ms, release 150ms (quick, for micro-events)
  - Each preset has its own gain curve: Petal uses sine-eased attack,
    Dew uses linear, Spark uses exponential

- [ ] **10.1.3** Assign each sound to exactly one envelope preset. Document
  the assignment and rationale. Then fine-tune ±20ms per sound based on
  listening tests.

- [ ] **10.1.4** Add a DC-offset removal step before release: at the
  beginning of the release phase, gently push the waveform toward zero
  center over 10ms. This prevents the audible "thump" that occurs when
  a non-zero-crossing signal is abruptly decayed.

---

### Story 10.2: Harmonic Richness — Warmth Through Overtones

**Emotional Goal**: Pure sine waves sound cold and clinical. Adding subtle
harmonic richness (2nd and 3rd harmonics) creates warmth — like the
difference between a tuning fork and a wooden flute.

**Warmth Ladder** (from coldest to warmest):
1. Pure sine — clinical, robotic (avoid for primary sounds)
2. Sine + 2nd harmonic (×2 freq) at 15% level — slightly warm
3. Sine + 2nd at 15% + 3rd (×3 freq) at 8% — comfortably warm (default)
4. Sine + 2nd at 20% + 3rd at 12% + 5th (×5 freq) at 3% — rich, full
5. Sine + 2nd at 25% + 3rd at 15% + 5th at 8% — very warm (celebrations)

#### Sub-tasks:

- [ ] **10.2.1** Add a `richness` parameter (0.0-1.0) to `playTone()` that
  controls harmonic content. Map 0.0 → ladder step 1, 0.5 → step 3,
  1.0 → step 5.

- [ ] **10.2.2** Assign richness values to each sound category:
  - Navigation sounds: 0.3 (slightly warm, not distracting)
  - Game feedback sounds: 0.5 (default warmth)
  - Correct-answer sounds: 0.6 (rewarding warmth)
  - Celebration sounds: 0.8 (full, enveloping warmth)
  - Wrong-answer sounds: 0.2 (cooler, less attention-demanding)

- [ ] **10.2.3** When generating harmonics, each overtone should have
  a slightly different attack time than the fundamental: 2nd harmonic
  starts 3ms later, 3rd starts 6ms later. This creates a psychoacoustic
  "bloom" effect — the sound seems to blossom from thin to full.

---

### Story 10.3: Micro-Detuning — Life Through Imperfection

**Emotional Goal**: Perfectly tuned frequencies sound artificial. The human
ear perceives micro-variations in pitch as "alive" and "natural." Every
sustained tone should have subtle pitch drift — not vibrato, but drift,
like a candle flame in still air.

#### Sub-tasks:

- [ ] **10.3.1** For all tones longer than 150ms, apply a slow random
  pitch drift of ±3 cents (±0.17%) using a smoothed random walk at
  4Hz rate. This is below the threshold of conscious pitch detection
  but above the threshold where the brain registers "static" vs. "alive."

- [ ] **10.3.2** For multi-tone sounds (arpeggios, chords), detune each
  voice by a different fixed offset: voice 1 at -2 cents, voice 2 at
  +1 cent, voice 3 at +3 cents. This creates natural "chorusing"
  without requiring a separate chorus effect.

- [ ] **10.3.3** For the ambient drone, apply a slower drift rate (0.5Hz)
  with wider range (±5 cents). Ambient sounds benefit from more
  movement because they're heard for longer durations.

---

### Story 10.4: Spatial Positioning — Depth Without Stereo Tricks

**Emotional Goal**: Even on mono speakers (iPhone without headphones),
sounds can have a sense of "near" or "far" by manipulating frequency
content. Near sounds have more high-frequency content; far sounds have
more low-frequency content (air absorbs high frequencies over distance).

#### Sub-tasks:

- [ ] **10.4.1** Define spatial zones:
  - **Intimate** (touch feedback): Full frequency range. Volume at normal
    level. Feels like the sound originates from the fingertip.
  - **Arms-length** (game events): Gentle high-frequency rolloff above
    1000Hz (reduce by 3dB). Volume reduced by 10%. Feels like the sound
    comes from the screen.
  - **Room** (ambient, achievements): Stronger high-frequency rolloff
    above 800Hz (reduce by 6dB). Volume reduced by 20%. Feels like the
    sound fills the space around the device.

- [ ] **10.4.2** Implement spatial zones as modifiers in `playTone()`:
  a `SpatialZone` parameter (intimate/armsLength/room) that applies the
  appropriate frequency rolloff and volume adjustment.

- [ ] **10.4.3** Assign spatial zones to each sound. Most touch interactions
  are Intimate. Most game feedback is Arms-length. Ambient and
  celebrations are Room.

---

### Story 10.5: Psychoacoustic Frequency Avoidance

**Emotional Goal**: Certain frequencies trigger negative psychological
responses in most humans. These should be aggressively avoided:

**Frequencies to avoid**:
- 2500-3500 Hz: The "alarm" range — human hearing is most sensitive here
  (ear canal resonance). Sounds in this range feel "piercing."
- 1000 Hz pure tone: Associated with hearing tests and medical equipment.
  Sounds clinical and triggers anxiety in many people.
- Below 80 Hz: At low volumes, these are felt as vibration rather than
  heard as tone. Can create unease (infrasound).
- Exact octave multiples of 60 Hz (120, 240, 480, 960): Associated with
  electrical hum and cheap electronics.

**Frequencies to embrace**:
- 260-523 Hz (C4-C5 range): The "voice" range. Warm, familiar, comforting.
- 130-260 Hz (C3-C4): The "cello" range. Deep warmth without muddiness.
- 784-1047 Hz (G5-C6): The "bell" range. Bright and pleasant in short
  doses (used sparingly for celebrations only).

#### Sub-tasks:

- [ ] **10.5.1** Audit all frequencies in AudioService against the
  avoidance list. Replace any frequencies in the 2500-3500Hz range
  with equivalent notes in the 260-523Hz range.

- [ ] **10.5.2** Verify that no harmonic overtone of any fundamental
  frequency lands in the 2500-3500Hz range at significant volume.
  For example: C4 (262Hz) × 10th harmonic = 2620Hz. If the 10th
  harmonic is barely audible (< -40dB from fundamental), it's fine.
  If it's stronger, roll it off.

- [ ] **10.5.3** Create a "safe frequency" reference constant set in
  AudioService listing all approved frequencies with their note names
  and emotional associations.

---

### Story 10.6: Zero-Crossing Fade Prevention

**Emotional Goal**: Clicks and pops destroy the illusion of warmth. Every
time a sound starts or stops, if the waveform is not at zero-crossing,
there's an audible click. This must never happen.

#### Sub-tasks:

- [ ] **10.6.1** Ensure all `AVAudioSourceNode` render callbacks start
  with gain at 0.0 and ramp to target over the attack time. Never
  set gain to a non-zero value on the first sample.

- [ ] **10.6.2** Ensure all sound endings ramp to 0.0 gain before the
  node is disconnected. Never disconnect a node while gain is above 0.0.

- [ ] **10.6.3** For very short sounds (< 100ms total), use a
  Hann window function (raised cosine) across the entire duration.
  This guarantees zero at both endpoints with smooth interior.

- [ ] **10.6.4** Add a global click detector during development: monitor
  the audio output buffer for sample-to-sample jumps greater than 0.1
  (on a 0.0-1.0 scale). Log these as warnings. In release builds,
  replace the detector with a statistics counter.

---

## Epic 11: Profile, Settings & System Sounds

> *"Settings are an admission of design failure. But when they exist,
> they should feel like opening a beautifully organized toolkit."*
> — Inspired by Jony Ive's design ethos

The settings experience should have its own sonic character — quieter,
more intimate, and more "meta" than the game sounds. When the learner
opens settings, they're stepping out of the game world and into the
workshop. Sounds here should feel like precise, deliberate tools.

### Story 11.1: Toggle Sounds — Mechanical Precision

**Emotional Goal**: Toggling a setting should feel like flipping a
high-quality physical switch — the kind you find on a luxury amplifier,
not a light switch. The sound should convey "something changed" with
satisfying finality.

**Sound Design**:
- Toggle ON: G4 (392Hz) → C5 (523Hz), 100ms total. The upward interval
  (perfect 4th) conveys "opening" or "enabling." Wood waveform with
  Dew envelope. Volume: Murmur tier (0.015).
- Toggle OFF: C5 → G4, 100ms total. The downward interval conveys
  "closing" or "disabling." Same character, reversed direction.
  Volume: Murmur (0.012) — slightly quieter than ON, because "off"
  should whisper.

#### Sub-tasks:

- [ ] **11.1.1** Implement `playToggleOn()` and `playToggleOff()` in
  AudioService with the parameters above.

- [ ] **11.1.2** Wire toggle sounds into all PremiumToggle instances.
  Use the `isOn` boolean to determine which sound to play:
  if toggling to ON → `playToggleOn()`, if toggling to OFF → `playToggleOff()`.

- [ ] **11.1.3** Wire toggle sounds into all standard Toggle instances
  in SoundSettingsView and other settings views.

- [ ] **11.1.4** Test: rapidly toggle 10 times. The sounds should not
  overlap unpleasantly — each toggle should have its own space. If
  they overlap, increase the cooldown to 120ms.

---

### Story 11.2: Slider Sounds — Continuous Feedback

**Emotional Goal**: Dragging a volume slider should produce gentle tonal
feedback — a soft note that changes pitch with the slider position. This
creates a synesthetic experience: the learner "hears" the value they're
setting.

**Sound Design**: A continuous tone that maps the slider's 0.0-1.0 range
to C4 (262Hz) → G5 (784Hz). Volume tracks the slider value ×0.01 (so at
50%, the sound is at 0.005 volume). Glass waveform, very long release
(500ms) so the sound lingers slightly after the finger lifts.

#### Sub-tasks:

- [ ] **11.2.1** Implement a `playSliderTone(value: Float)` method that
  plays a 150ms tone at the frequency mapped to the value.

- [ ] **11.2.2** Throttle slider sounds to one every 80ms (sliders can
  generate dozens of value changes per second during drag).

- [ ] **11.2.3** When the slider is released (drag ended), play a slightly
  louder "settle" tone at the final value — an extra 30ms of release time
  that says "locked in."

---

### Story 11.3: Section Navigation Sounds — Moving Through Settings

**Emotional Goal**: Tapping between settings sections (Appearance, Sound,
Beta, Sync) should have a subtle "tch" — barely noticeable, but creating
a sense of progression through the settings hierarchy.

**Sound Design**: A micro-tone similar to playTabSwitch() but 30% quieter
and 20% shorter. Settings navigation is "one layer deeper" than app
navigation, so it should feel more intimate.

#### Sub-tasks:

- [ ] **11.3.1** Implement `playSettingsTabSwitch()` in AudioService:
  E4 (330Hz), 60ms duration, Dew envelope, Glass waveform, volume 0.008.

- [ ] **11.3.2** Wire into ProfileView's section buttons (Appearance,
  Sound, Beta, Sync, Sign Out).

- [ ] **11.3.3** Do NOT play this sound when ProfileView first appears —
  only on subsequent section changes. The initial appearance is handled
  by the sheet-present sound.

---

### Story 11.4: Settings Confirmation — Save & Apply

**Emotional Goal**: When a setting is changed and takes effect, the learner
should feel subtle confirmation — "yes, that was saved." This is especially
important for settings where the effect isn't immediately visible (like
enabling haptics, changing volume, or toggling adaptive audio).

#### Sub-tasks:

- [ ] **11.4.1** Design a "setting confirmed" micro-sound: D4 (294Hz)
  dip to C4 (262Hz) over 120ms, then back to D4 over 80ms. Total 200ms.
  This creates a "nod" gesture — the app acknowledges the change.
  Volume: Whisper tier (0.008).

- [ ] **11.4.2** Play this sound only for settings that don't have their
  own immediate audible feedback. For example: don't play it when
  toggling sound ON (the toggle sound IS the confirmation). DO play it
  when changing the ambient preset (the ambient crossfade takes 3 seconds,
  so immediate confirmation is helpful).

---

### Story 11.5: Error & Warning States in Settings

**Emotional Goal**: If something goes wrong in settings (network error
during sync, invalid state), the sound should be informative but not
alarming. A gentle two-note descending phrase that says "hmm, something
needs attention" rather than "ERROR ERROR."

#### Sub-tasks:

- [ ] **11.5.1** Design a "settings warning" sound: E4 (330Hz) → D4 (294Hz)
  over 200ms. Whole step descent, gentle and contemplative. Wood waveform,
  Petal envelope, volume 0.015.

- [ ] **11.5.2** Design a "settings error" sound: Two repetitions of the
  warning sound with 100ms gap. The repetition conveys "this is important"
  without being harsh.

- [ ] **11.5.3** Pair warning with `softGenerator.impactOccurred(intensity: 0.25)`.
  Pair error with two soft impacts: one at 0ms, one at 300ms.

---

## Epic 12: Silence, Space & Anti-Fatigue

> *"Music is the space between the notes."*
> — Claude Debussy

The most important sound in LumenLingo might be no sound at all. This
epic systematically designs the silences — the gaps, the spaces, the
moments of rest that give every sound its meaning. Without intentional
silence, sound becomes noise.

### Story 12.1: Mandatory Silence Windows

**Emotional Goal**: After any celebration-tier sound, the system should
enforce a "silence window" — a period where no other sounds play. This
gives the celebration room to breathe and creates a psychological sense
of importance. The celebration doesn't just happen — it echoes.

#### Sub-tasks:

- [ ] **12.1.1** Implement a silence window after celebration sounds:
  - Level up: 600ms silence
  - Achievement unlocked: 400ms silence
  - Streak milestone: 300ms silence
  - Daily goal complete: 500ms silence
  During the silence window, any sound triggers are queued or dropped.

- [ ] **12.1.2** During the silence window, haptics should still fire
  (silence is auditory, not tactile). This creates a striking effect:
  the learner feels the next interaction but doesn't hear it, making
  the celebration feel even more "final."

- [ ] **12.1.3** If two celebration-tier sounds would play within 1 second
  of each other, merge them into a single celebration with the
  higher-priority sound design.

---

### Story 12.2: Natural Decay Respect

**Emotional Goal**: Never play a new sound while the previous sound is
still in its release phase if they would clash harmonically. A new sound
should start only when the previous has decayed below -20dB (roughly 10%
of peak amplitude).

#### Sub-tasks:

- [ ] **12.2.1** Track the estimated decay time of the most recent sound.
  If a new sound is triggered before the decay completes:
  - If the new sound is in the same key (C major pentatonic) → allow,
    the overlap will be consonant
  - If the new sound would be dissonant → delay by remaining decay time,
    capped at 80ms (don't create noticeable lag)

- [ ] **12.2.2** For rapid-fire scenarios (quick flashcard swiping), use
  a "last wins" policy: the most recent sound plays at full volume, and
  the previous sound's release is accelerated to 50ms regardless of
  its original release time.

---

### Story 12.3: Session Wind-Down — The Closing Ceremony

**Emotional Goal**: When the learner finishes their study session (closes
the app, or has been idle for 3+ minutes), the sound system should perform
a gentle "wind-down" — a final sonic gesture that says "well done, rest
now."

#### Sub-tasks:

- [ ] **12.3.1** Design the wind-down sequence:
  - When idle for 3 minutes: ambient volume gradually reduces by 50%
    over 30 seconds
  - When the app enters background: play a quiet C3 (131Hz) tone at
    volume 0.005, release 800ms. The last sound the learner hears is
    a warm, low "goodbye."

- [ ] **12.3.2** The wind-down should NOT play if the learner is mid-exercise
  (active game view). Only trigger in navigation/dashboard views.

- [ ] **12.3.3** If the learner returns within 30 seconds of backgrounding,
  skip the "welcome" ceremony on return — they just stepped away briefly.

---

### Story 12.4: Sound Density Monitoring

**Emotional Goal**: If the system is producing more than 3 sounds per
second sustained over 5 seconds, something is wrong — either the learner
is frantically tapping, or sounds are triggering from multiple sources
simultaneously. The system should automatically throttle.

#### Sub-tasks:

- [ ] **12.4.1** Implement a sound-density monitor that tracks sounds
  per second over a rolling 5-second window.

- [ ] **12.4.2** When density exceeds 3/second: progressively mute lower-
  priority sounds (navigation first, then UI feedback, keeping only
  game feedback sounds).

- [ ] **12.4.3** When density drops below 2/second for 3 continuous seconds:
  restore normal sound pipeline.

- [ ] **12.4.4** Log density spikes during development to identify
  code paths that generate excessive sound triggers.

---

### Story 12.5: The Final Silence — Audio Engine Lifecycle

**Emotional Goal**: The audio engine itself should be a respectful citizen
of the iOS audio ecosystem. It should not claim audio resources when
they're not needed, and it should release them cleanly when done.

#### Sub-tasks:

- [ ] **12.5.1** Stop the `AVAudioEngine` when the app enters background
  (unless ambient is playing and the user has explicitly enabled
  background ambient — which is NOT supported in v1).

- [ ] **12.5.2** Restart the engine on return to foreground with a 200ms
  warmup delay before the first sound plays (the engine needs time to
  re-initialize).

- [ ] **12.5.3** Handle audio interruptions (phone call, Siri, alarm):
  pause all audio, and when the interruption ends, resume with a 500ms
  fade-in rather than snapping back at full volume.

- [ ] **12.5.4** When switching audio routes (plugging in headphones,
  connecting Bluetooth), briefly mute for 300ms then fade in. Route
  changes can cause pops — the mute prevents them.

---
---

# Appendices

## Appendix A: Emotional Frequency Map

A comprehensive reference of every frequency used in LumenLingo, organized
by emotional quality. All frequencies are from the C major pentatonic
scale unless explicitly noted.

| Note | Freq (Hz) | Emotional Quality | Primary Use |
|------|-----------|-------------------|-------------|
| G2 | 98 | Deep calm, night | Night ambient base |
| A2 | 110 | Oceanic, vast | Ocean ambient preset |
| C3 | 131 | Foundation, warmth | Ambient drone base, wind-down |
| D3 | 147 | Contemplation | Mountain ambient, question appear |
| E3 | 165 | Openness | Grammar explanation reveal |
| G3 | 196 | Balance, stability | Ambient harmonic layer, card appear |
| A3 | 220 | Grounding | Wrong answer (gentle), tile return |
| C4 | 262 | Home, comfort | Correct answer base, level up root |
| D4 | 294 | Thoughtfulness | Settings confirmation, slider base |
| E4 | 330 | Curiosity | Card flip, answer select, tab switch |
| G4 | 392 | Brightness, hope | Swipe right, word correct note 1 |
| A4 | 440 | Clarity | XP gain, achievement, progress step |
| C5 | 523 | Joy, arrival | Streak milestone peak, toggle ON |
| D5 | 587 | Sparkle | Level up peak, pure celebration |
| E5 | 659 | Brilliance (rare) | Achievement fanfare peak |
| G5 | 784 | Effervescence (rare) | Celebration peak, slider max |

**Forbidden Frequencies**: 1000Hz (medical), 2500-3500Hz (alarm range),
60/120/240/480/960Hz (electrical hum), below 80Hz (infrasound discomfort).

**Frequency Ceiling**: 784Hz for normal use, 1047Hz absolute maximum for
rare celebrations. The ear is most sensitive at 2500-3500Hz — we stay
well below this to ensure every sound feels soft.

---

## Appendix B: Volume Hierarchy Reference

The four-tier volume system ensures dynamic range without jarring
transitions. All volumes are in the 0.0-1.0 amplitude scale passed to
`AVAudioSourceNode` render callbacks.

### Tier 1: Whisper (0.006 - 0.012)

Sounds at this tier are barely perceptible — the listener may not
consciously register them, but their absence would be felt. Used for:
ambient drones, slider ticks, page changes, search focus, card appear.

| Sound | Volume | Rationale |
|-------|--------|-----------|
| Ambient drone | 0.004-0.006 | Below consciousness |
| Card appear | 0.008 | Soft presence |
| Page change | 0.008 | Spatial marker |
| Search focus | 0.006 | Intimate, close |
| Timer tick (if used) | 0.006 | Must not create anxiety |
| Settings confirmed | 0.008 | Subtle nod |

### Tier 2: Murmur (0.012 - 0.020)

Clearly audible but gentle — the "indoor voice" of the sound system.
Used for: card flip, answer select, tab switch, toggle change, hint,
category navigation.

| Sound | Volume | Rationale |
|-------|--------|-----------|
| Card flip | 0.015 | Satisfying but not loud |
| Answer select | 0.015 | Confirms tap clearly |
| Tab switch | 0.012 | Navigation is secondary |
| Toggle ON | 0.015 | Clear state change |
| Toggle OFF | 0.012 | Off is quieter than on |
| Tile pick/place | 0.018 | Tactile, needs presence |
| Hint reveal | 0.014 | Supportive whisper |
| Sheet present | 0.015 | Spatial depth cue |

### Tier 3: Speak (0.020 - 0.035)

Full voice — sounds that convey meaningful feedback the learner needs to
hear. Used for: correct answer, wrong answer, word complete, XP gain,
swipe gestures.

| Sound | Volume | Rationale |
|-------|--------|-----------|
| Correct answer | 0.028 | Rewarding, clear |
| Wrong answer | 0.020 | Gentle, never punishing |
| Word complete | 0.025 | Satisfying completion |
| Swipe right | 0.022 | Positive momentum |
| Swipe left | 0.018 | Neutral reshelving |
| XP gain | 0.022 | Encouraging pulse |
| Mastery progress | 0.020 | Growth acknowledgment |

### Tier 4: Celebrate (0.035 - 0.050)

The "outdoor voice" — used maximally 3 times per 5-minute window.
Reserved for milestone achievements. These are the only sounds that
should make the learner consciously think "I hear that!"

| Sound | Volume | Rationale |
|-------|--------|-----------|
| Level up | 0.045 | Peak celebration |
| Achievement unlock | 0.040 | Major milestone |
| Streak milestone | 0.035 | Encouraging heartbeat |
| Daily goal complete | 0.040 | Session reward |
| Celebration | 0.050 | Maximum joy (rare) |
| Purchase success | 0.038 | Premium confirmation |

---

## Appendix C: Waveform Recipes

Three waveform characters used throughout LumenLingo. Each recipe defines
the harmonic content of a single oscillator voice.

### Glass Waveform

**Character**: Clean, ethereal, bell-like. Pure sine with minimal
harmonic content. Used for ambient, navigation, and gentle feedback.

```
Fundamental:  1.000 amplitude
2nd harmonic: 0.080 amplitude (frequency × 2)
3rd harmonic: 0.030 amplitude (frequency × 3)
5th harmonic: 0.005 amplitude (frequency × 5)
```

**Association**: Crystal, starlight, water drops, morning light.
**Best for**: Ambient drones, card appear, card flip, search, slider.

### Wood Waveform

**Character**: Warm, organic, slightly hollow. Stronger even harmonics
that create a clarinet-like quality. Used for game feedback and
interaction confirmation.

```
Fundamental:  1.000 amplitude
2nd harmonic: 0.150 amplitude (frequency × 2)
3rd harmonic: 0.080 amplitude (frequency × 3)
4th harmonic: 0.040 amplitude (frequency × 4)
5th harmonic: 0.020 amplitude (frequency × 5)
```

**Association**: Wooden marimba, bamboo chimes, autumn warmth.
**Best for**: Correct/wrong answers, tile interactions, toggles, settings.

### Bell Waveform

**Character**: Rich, shimmering, slightly inharmonic. Wide harmonic
content with micro-detuning in the upper partials, creating a natural
bell-like quality. Reserved for celebrations and milestones.

```
Fundamental:  1.000 amplitude
2nd harmonic: 0.200 amplitude (frequency × 2.003)  ← slight detuning
3rd harmonic: 0.120 amplitude (frequency × 3.007)  ← slight detuning
4th harmonic: 0.060 amplitude (frequency × 4.01)
5th harmonic: 0.040 amplitude (frequency × 5.02)   ← wider detuning
6th harmonic: 0.015 amplitude (frequency × 6.03)
```

**Association**: Temple bells, wind chimes, celebration, golden light.
**Best for**: Level up, achievement, streak milestone, celebration.

---

## Appendix D: Haptic-Sound Pairing Matrix

Complete reference of every haptic-sound pair in LumenLingo. The "5ms
Rule" column indicates whether the haptic fires 5ms before the audio
(Y) or simultaneously (N — for cases where timing isn't critical).

| Interaction | Sound | Haptic Generator | Intensity | 5ms Rule | Weight |
|-------------|-------|-----------------|-----------|----------|--------|
| Card appear | G3, Glass, 80ms | soft | 0.2 | N | Feather |
| Card flip | E4, Glass, 100ms | light | 0.35 | Y | Pebble |
| Swipe right | G4→A4, Wood, 120ms | light | 0.4 | Y | Pebble |
| Swipe left | E4→D4, Glass, 100ms | soft | 0.25 | N | Feather |
| Correct answer | C4→E4→G4, Wood, 180ms | medium | 0.5 | Y | Stone |
| Wrong answer | A3, Glass, 120ms | soft | 0.3 | N | Pebble |
| Tile pick | E4, Wood, 60ms | medium | 0.35 | Y | Pebble |
| Tile place | G4, Wood, 80ms | rigid | 0.45 | Y | Stone |
| Tile return | D4, Glass, 60ms | soft | 0.2 | N | Feather |
| Word complete | C4→E4→G4→C5, Bell, 240ms | medium | 0.5 | Y | Stone |
| Answer select | E4, Glass, 80ms | light | 0.35 | Y | Pebble |
| Tab switch | D4, Glass, 80ms | soft | 0.2 | N | Feather |
| Button tap | E4, Wood, 60ms | light | 0.3 | Y | Pebble |
| Toggle change | G4↔C5, Wood, 100ms | light | 0.35 | Y | Pebble |
| Sheet present | C4→E4, Glass, 120ms | soft | 0.25 | N | Feather |
| Sheet dismiss | E4→C4, Glass, 100ms | soft | 0.2 | N | Feather |
| Level up | 5-note arpeggio, Bell, 400ms | sequence | 0.3-0.7 | Y | Bell |
| Achievement | 3-note fanfare, Bell, 300ms | notification(.success) | — | Y | Bell |
| Streak milestone | 2 pulses, Wood, 200ms | medium × 2 | 0.4/0.5 | Y | Stone |
| Daily goal | 4-note descent, Bell, 350ms | notification(.success) | — | Y | Bell |
| Celebration | rapid arpeggio, Bell, 200ms | sequence | 0.3-0.6 | Y | Bell |
| XP gain | A4, Glass, 80ms | light | 0.3 | Y | Pebble |
| Slider drag | mapped tone, Glass, 150ms | None | — | — | — |
| Timer tick | C4, Glass, 40ms | None | — | — | — |
| Ambient drone | sustained, Glass | None | — | — | — |

**Key**: Interactions marked "None" for haptic are deliberately haptic-free
(see Story 8.4). Sequence haptics use the patterns from Story 8.3.

---

## Appendix E: A/B Testing Protocol

Sound design is ultimately subjective. No amount of psychoacoustic theory
can substitute for real user feedback. This appendix defines the testing
methodology for validating every sound design decision.

### Test Group Structure

- **Group A** (control): Current sound implementation
- **Group B** (treatment): New sound implementation
- **Group size**: Minimum 30 users per group (for statistical significance
  at p < 0.05 with medium effect size)
- **Duration**: 7 days per test (captures full weekly usage patterns)

### Metrics to Track

1. **Session duration**: Does the sound change affect how long users study?
   Hypothesis: better sounds → longer sessions.

2. **Session frequency**: Does the sound change affect how often users
   return? Hypothesis: pleasant sounds → higher return rate.

3. **Sound-off rate**: What percentage of users disable sounds during the
   test period? Lower is better.

4. **Task completion rate**: Are users more likely to complete exercises?
   Sound should enhance, not distract.

5. **Subjective rating**: After 7 days, survey users: "How would you
   describe the sounds in the app?" Options: Annoying / Neutral / Pleasant /
   Delightful. Target: >60% Pleasant or Delightful.

### Testing Schedule

| Phase | What to Test | Duration |
|-------|-------------|----------|
| Phase 1 | Core feedback sounds (correct/wrong/flip) | 7 days |
| Phase 2 | Volume hierarchy (current vs. whisper system) | 7 days |
| Phase 3 | Celebration sounds (current vs. pentatonic) | 7 days |
| Phase 4 | Ambient soundscapes (off vs. on by default) | 7 days |
| Phase 5 | Haptic choreography (current vs. 5ms rule) | 7 days |
| Phase 6 | Adaptive system (fatigue on vs. off) | 7 days |

### How to Run a Sound A/B Test

1. Create a feature flag: `SoundVariant.phaseN` with values `.control`
   and `.treatment`.

2. In AudioService, branch on the flag for affected methods only. Do NOT
   change unrelated sounds during the test.

3. Log sound events with the variant tag so analysis can correlate sound
   changes with behavior changes.

4. After the test concludes, permanently adopt the winning variant and
   remove the flag.

### Disqualification Criteria

A sound must be rejected if:
- >15% of the treatment group disables sounds (vs. control baseline)
- Session duration drops by >10%
- >3 users independently describe the sound as "annoying" in feedback
- The sound triggers headphone safety warnings on any Apple device
  (this indicates the sound is too loud or has concerning frequency content)

### Post-Test Analysis Template

```
## Sound A/B Test: [Test Name]
- Date: [Start] → [End]
- Groups: A (n=X) / B (n=Y)
- Sound Changed: [method name]
- Previous: [description]
- Treatment: [description]

### Results:
- Session duration: A = Xm, B = Ym (Δ = Z%, p = W)
- Sound-off rate: A = X%, B = Y% (Δ = Z%, p = W)
- Subjective rating: A = X% pleasant+, B = Y% pleasant+
- Decision: ADOPT / REJECT / ITERATE
- Rationale: [brief explanation]
```

---
---

# Document Summary

**Total Epics**: 12
**Total Stories**: 71
**Total Sub-tasks**: ~210

**Sound Design Philosophy**: Every sound in LumenLingo should be a gift to
the learner — not a notification, not an alert, not a beep, but a small
moment of beauty woven into the fabric of their study experience. When
implemented with care, these sounds will transform LumenLingo from an
app that teaches language into a place where learning feels like home.

**Implementation Priority**:
1. Epic 1 (Sonic Identity) — must be implemented first, establishes
   all foundational parameters
2. Epics 2-4 (Game sounds) — core experience, highest user touch frequency
3. Epic 5 (Navigation) — secondary but important for spatial coherence
4. Epic 10 (Polish) — refinement of all existing sounds
5. Epic 6 (Achievement) — celebration system
6. Epics 7-8 (Ambient + Haptics) — advanced features
7. Epic 9 (Adaptive) — sophistication layer
8. Epics 11-12 (Settings + Silence) — completion
9. Appendix E (A/B Testing) — validation

**The Golden Rule**: When in doubt, make it quieter. When in more doubt,
make it silence.


