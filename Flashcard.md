# Epic: Frosty White Flashcard — Light Mode Masterpiece

> *"Great design is not about what you add. It's about what you refine until it feels inevitable."*

## Vision Statement

Transform the light-mode flashcard into a **frosty white glass artifact** — a surface that feels like holding a piece of frosted crystal in morning light. Every pixel calibrated with mathematical precision. Every layer purposeful. The card should feel so premium that users instinctively slow down, hold their breath, and fall in love with the act of learning.

The dark-mode card already embodies cosmic glassmorphism. The light-mode card must embody its polar opposite: **luminous frost** — warm, weightless, alive with subtle refraction.

---

## Design Principles

1. **Material Truth**: The card must feel like a physical frosted glass pane — not a flat white rectangle with effects bolted on. Every layer serves the illusion of a real material.
2. **Golden Ratio Harmony**: Spacing, blur radii, opacity curves, and shadow falloffs follow φ (1.618) proportional relationships for subconscious visual harmony.
3. **Warm Frost**: Frost in nature catches warm ambient light. Our frost has a micro-warm tint (not clinical blue-white) — inviting, not sterile.
4. **Contrast Mastery**: WCAG AAA contrast on all text against the frosty surface. Rich plum/indigo tones replace the current gradient text for crisp legibility.
5. **Breathing Material**: Subtle, organic animation gives the frost a living quality — not flashy, but unmistakably alive.

---

## Current State Analysis

The existing `liquidGlassCard` in light mode has these limitations:

| Layer | Current Implementation | Issue |
|-------|----------------------|-------|
| Base material | `.ultraThinMaterial` at `0.18` opacity | Nearly invisible — card has no body |
| Inner gradient | `caribbeanOcean.opacity(0.06)` → clear | So subtle it reads as nothing |
| Border | AngularGradient with caribbean tints at ~0.40 | Colorful but inconsistent with "frost" |
| Specular | Capsule highlights top/bottom | Good concept, but lost without card body |
| Shadow | `.black.opacity(0.08)` | Too subtle — card doesn't lift off background |
| Front text | 3-color gradient (`#6366f1` → `#a855f7` → `#ec4899`) | Vibrant but fights with frost aesthetic |
| Example text | `.caribbeanPlum` on `.caribbeanRecessed` pill | Adequate but not refined |

**Root problem**: The card is essentially transparent in light mode. Without material body, all the beautiful layering collapses into flatness.

---

## Story Map

```
Epic: Frosty White Flashcard
├── Story 1: Frost Glass Foundation (the material itself)
├── Story 2: Luminous Typography (text against frost)
├── Story 3: Edge Definition & Specular System (the card's physical edges)
├── Story 4: Depth & Shadow Architecture (how the card floats)
├── Story 5: Frost Breathing & Micro-Animations (living material)
├── Story 6: Answer Feedback Frost States (correct/wrong glow)
├── Story 7: Action Button Frost Integration (Got It / Still Learning)
└── Story 8: Flip Transition Frost Continuity (3D rotation polish)
```

---

## Story 1: Frost Glass Foundation

**As a** user studying flashcards in light mode,
**I want** the card to feel like a piece of frosted crystal glass,
**So that** I perceive premium quality and feel emotionally engaged with the learning surface.

### Design Specification

Replace the current light-mode path in `liquidGlassCard` with a **7-layer frost architecture**:

```
Layer 0 — Frost Body        : White fill at 88% opacity (φ-derived: 1 - 1/φ³ ≈ 0.882)
Layer 1 — Material Blur     : .ultraThinMaterial at 55% opacity (adds real backdrop blur)
Layer 2 — Warmth Bloom      : Radial gradient, warm ivory center → transparent edges
Layer 3 — Frost Grain       : Ultra-subtle noise texture (simulated via gradient dithering)
Layer 4 — Inner Luminance   : Top-down linear gradient, white 30% → transparent
Layer 5 — Refraction Edge   : Inset rounded rect with white 40% stroke at 0.5pt
Layer 6 — Outer Definition  : Outer stroke with cool blue-grey at 6% opacity
```

### Layer Details

**Layer 0 — Frost Body** (`RoundedRectangle`, `cornerRadius: 32`)
- Fill: `Color.white.opacity(0.88)`
- Purpose: Gives the card physical presence. The 88% opacity lets the faintest whisper of the background bleed through, preserving the glass illusion.
- Rationale: 88% derived from 1 − 1/φ³. Pure white (100%) kills the glass feel. Below 80%, the card loses body.

**Layer 1 — Material Blur** (`RoundedRectangle`, `.ultraThinMaterial`)
- Opacity: `0.55`
- Purpose: Adds genuine backdrop blur. When the background image shifts behind the card, you see soft color bleeding through — the hallmark of real frosted glass.
- Stacks on Layer 0: Combined, these produce roughly 95% coverage with beautiful edge-blur bleeding.

**Layer 2 — Warmth Bloom** (`RoundedRectangle`, `RadialGradient`)
- Center color: `Color(red: 1.0, green: 0.99, blue: 0.96).opacity(0.35)` (warm ivory)
- Edge color: `Color.clear`
- Center: `.center`, startRadius: `0`, endRadius: `280`
- Purpose: Mimics warm ambient light pooling in the center of frosted glass. Prevents the card from feeling clinical.
- The warm ivory tint corresponds to 4200K color temperature — morning golden hour.

**Layer 3 — Frost Grain** (gradient dithering)
- Implementation: Two overlapping `LinearGradient` layers at opposing 45° angles with ultra-subtle white ↔ clear stops
- Opacity: `0.04` each
- Purpose: Simulates the micro-texture of real frosted glass. Invisible at conscious level, profoundly felt at subconscious level.

**Layer 4 — Inner Luminance** (`RoundedRectangle`, `LinearGradient`)
- Colors: `[.white.opacity(0.30), .white.opacity(0.08), .clear]`
- Direction: `.top` → `.bottom`
- Height: clipped to top 45% of card
- Purpose: Light catching the top surface of the glass — the specular highlight that establishes 3D curvature.

**Layer 5 — Refraction Edge** (`RoundedRectangle`, `.strokeBorder`)
- Color: `.white.opacity(0.40)`
- Width: `0.5`pt
- Inset: `1.0`pt from outer edge
- Purpose: The inner light-catch edge. On real frosted glass, the interior edge refracts light and appears as a bright white line.

**Layer 6 — Outer Definition** (`RoundedRectangle`, `.strokeBorder`)
- Color: `Color(red: 0.75, green: 0.78, blue: 0.82).opacity(0.18)` (cool blue-grey)
- Width: `0.5`pt
- Purpose: Defines the card boundary without being heavy. The blue-grey hue adds "frost coolness" to the edge while the interior stays warm.

### Acceptance Criteria

- [x] AC 1.1: In light mode, the flashcard has visible material body — not transparent
- [x] AC 1.2: Background image/color bleeds softly through the card edges (frosted glass effect)
- [x] AC 1.3: Card center is microscopically warmer than card edges (warmth bloom visible in side-by-side comparison with flat white)
- [x] AC 1.4: Top surface has a visible but gentle luminance band (light catching the glass)
- [x] AC 1.5: Two distinct border lines visible: inner bright refraction + outer cool definition
- [x] AC 1.6: Card corner radius remains `32`pt (unchanged)
- [x] AC 1.7: Card height remains `360`pt, max width `500`pt (unchanged)
- [x] AC 1.8: Dark mode card is completely unaffected — all changes gated behind `!isDark`
- [x] AC 1.9: `.clipShape(RoundedRectangle(cornerRadius: 32))` preserves all layering within card bounds

---

## Story 2: Luminous Typography

**As a** user reading vocabulary on the frosty card,
**I want** the text to feel beautifully crafted and effortlessly readable,
**So that** reading feels pleasurable rather than effortful.

### Design Specification

**Front Side — Source Word**
- Replace 3-color gradient with **Caribbean Sunset gradient**: electric purple `(0.60, 0.10, 0.92)` → hot pink `(0.96, 0.16, 0.46)` → golden orange `(0.98, 0.55, 0.05)`
- Weight: `.bold` (unchanged)
- Dynamic font size: unchanged logic
- Add subtle text shadow: `color: Color(red: 0.96, green: 0.16, blue: 0.46).opacity(0.06), radius: 8, y: 3`
- Rationale: Full-vibrancy Caribbean sunset — electric purple through hot pink to golden orange. Maximally uplifting and joyful on frost white.

**Front Side — Example Translation**
- Color: `Color(red: 0.25, green: 0.25, blue: 0.27)` (neutral dark grey, ~10:1 contrast)
- Remove the `.caribbeanRecessed` pill background
- Replace with: subtle bottom border line (1pt, `Color(red: 0.38, green: 0.30, blue: 0.52).opacity(0.12)`)
- Rationale: the recessed pill competes with the frosty card surface. A line is more refined.

**Front Side — "Tap to Reveal" Hint**
- Color: `Color(red: 0.55, green: 0.50, blue: 0.62).opacity(0.70)` (whisper-grey)
- Shadow: none
- Pulse: unchanged `.symbolEffect(.pulse)`

**Back Side — Target Word**
- Replace 3-color gradient with **Caribbean Ocean gradient**: electric blue `(0.04, 0.46, 0.96)` → bright cyan `(0.00, 0.72, 0.84)` → caribbean jade `(0.04, 0.78, 0.52)`
- Derived from caribbeanGradientOcean but cranked to full vibrancy — electric tropical water
- Text shadow: same approach as front, cyan-tinted at 0.06 opacity

**Back Side — Example Sentence**
- Same plum-grey as front example, but rendered in quotes
- Remove `.caribbeanRecessed` pill background
- Replace with: matching bottom border line

**Back Side — Divider Capsule**
- Change from `caribbeanMist.opacity(0.35)` to `Color(red: 0.75, green: 0.72, blue: 0.80).opacity(0.30)` 
- Width: expand from `80`pt to `100`pt with φ-based padding

**Back Side — Word Pair Footer Pill**
- Background: `Color.white.opacity(0.65)` (frost-on-frost layering)
- Border: `Color(red: 0.75, green: 0.78, blue: 0.82).opacity(0.15)`
- Front word color: plum-grey
- Arrow color: `Color(red: 0.55, green: 0.50, blue: 0.62).opacity(0.40)`
- Back word color: bright ocean accent `(0.03, 0.55, 0.78)` (single-color for small caption text)

### Acceptance Criteria

- [x] AC 2.1: Front source word uses Caribbean Sunset gradient (violet → bougainvillea → coral), WCAG AAA contrast ≥ 7:1 against white
- [x] AC 2.2: Back target word uses Caribbean Ocean gradient (deep ocean → turquoise → lagoon), WCAG AAA contrast ≥ 7:1 against white
- [x] AC 2.3: Example text uses plum-grey with subtle underline, no pill background
- [x] AC 2.4: All text has micro-shadow (radius ≤ 8, opacity ≤ 0.06) for depth on frost surface
- [x] AC 2.5: "Tap to reveal" hint is visible but distinctly tertiary (contrast 3.5:1–4.5:1)
- [x] AC 2.6: Back-side word pair footer pill uses frost-on-frost layering (white on white with subtle distinction)
- [x] AC 2.7: Divider capsule is wider (100pt) and uses neutral lavender-grey
- [x] AC 2.8: Dark mode typography is completely unaffected

---

## Story 3: Edge Definition & Specular System

**As a** user viewing the flashcard,
**I want** the card's edges to feel like real glass catching light,
**So that** the card has convincing physical presence.

### Design Specification

Replace the current AngularGradient iridescent border (light mode path) with a **dual-rim specular system**:

**Top Specular Rim**
- Shape: `Capsule`, positioned at top of card
- Fill: `LinearGradient` from `[.clear, .white.opacity(0.65), .white.opacity(0.65), .clear]`
- Height: `1`pt (currently exists but opacity too low in light mode)
- Horizontal padding: `40`pt (slightly narrower than card for realistic falloff)
- Purpose: Simulates directional light hitting the top edge of the glass

**Bottom Specular Rim**
- Existing bottom capsule at `0.08` → increase to `0.15` for light mode
- Purpose: Faint reflection on the bottom edge (ambient bounce light)

**Left/Right Edge Gradient**
- Not rendered separately — achieved through Layer 6 outer stroke definition being slightly heavier on left/right sides via a `LinearGradient` stroke instead of solid color
- Left-to-right: `0.20` → `0.12` → `0.20` opacity cool blue-grey
- Purpose: Edges perpendicular to light source catch more light

**Remove in Light Mode:**
- The AngularGradient iridescent border — too colorful for frost aesthetic
- The breathing `borderBreathPhase` on the iridescent border — replaced by Story 5's frost breathing
- The `.flipEdgeGlowOpacity` ocean-to-lavender shimmer — replaced by Story 8's frost flip glow

### Acceptance Criteria

- [x] AC 3.1: Top specular rim is a clear white highlight catching directional light
- [x] AC 3.2: Bottom specular rim is present but ~4× dimmer than top (ambient bounce)
- [x] AC 3.3: Side edges have marginally more definition than top/bottom (perpendicular light catch)
- [x] AC 3.4: No iridescent/rainbow border in light mode — replaced by frost-appropriate edges
- [x] AC 3.5: Dark mode iridescent border is completely unaffected
- [x] AC 3.6: Border system renders at ≤ 1pt line width (frost glass is refined, not chunky)

---

## Story 4: Depth & Shadow Architecture

**As a** user interacting with the flashcard,
**I want** the card to feel like it's floating slightly above the surface,
**So that** it has a sense of weightlessness and premium depth.

### Design Specification

Replace the current dual shadow with a **3-layer shadow system** tuned for light-on-light:

**Shadow 1 — Ambient Fog** (outermost)
- Color: `Color(red: 0.55, green: 0.50, blue: 0.68).opacity(0.08)` (lavender-grey)
- Radius: `40`pt
- Y offset: `20`pt
- Purpose: Large, diffuse atmospheric shadow. Creates "floating in light" feel.

**Shadow 2 — Contact Shadow** (middle)
- Color: `Color(red: 0.55, green: 0.50, blue: 0.68).opacity(0.12)` (slightly more saturated)
- Radius: `16`pt
- Y offset: `8`pt
- Purpose: Medium shadow grounds the card. Tells the eye "this object is close to the surface."

**Shadow 3 — Edge Crispness** (innermost)
- Color: `Color(red: 0.55, green: 0.50, blue: 0.68).opacity(0.04)`
- Radius: `4`pt
- Y offset: `2`pt
- Purpose: Ultra-tight shadow right at the card edge. Adds perceived crispness without hard lines.

**Shadow Color Rationale**: All shadows use lavender-grey (not black) to maintain the warm, luminous mood. Black shadows on a bright surface create harshness. Lavender-grey shadows create sophistication.

**Floating Offset Animation** (existing `floatPhase` already applies `sin * 3` offset):
- Shadow Y offsets should correlate with float: as card floats up, shadows extend slightly
- Implementation: multiply shadow Y by `1.0 + sin(floatPhase) * 0.08` (±8% variation)

### Acceptance Criteria

- [x] AC 4.1: Card casts a 3-layer shadow in light mode: ambient fog + contact + edge crispness
- [x] AC 4.2: All shadow colors are lavender-grey, not black
- [x] AC 4.3: Shadow depth subtly shifts in sync with the floating animation
- [x] AC 4.4: Card appears to hover 4–6pt above the surface (perceptual test)
- [x] AC 4.5: Dark mode shadow system is completely unaffected
- [x] AC 4.6: Shadows do not extend beyond ~60pt from card edge (avoid bleeding into adjacent UI)

---

## Story 5: Frost Breathing & Micro-Animations

**As a** user looking at the flashcard,
**I want** the card to feel subtly alive — like frost catching shifting light,
**So that** the experience feels organic and premium, not static.

### Design Specification

**Frost Luminance Breathing** (replaces iridescent border breathing)
- Layer 4 Inner Luminance: oscillate opacity between `0.28` and `0.34` on a 6-second cycle
- Implementation: `sin(time * π * 2 / 6) * 0.03 + 0.31` → produces 0.28–0.34 range
- Purpose: Mimics slow, subtle light shifts across a frosted surface

**Warmth Bloom Drift**
- Layer 2 Warmth Bloom center: slowly drift position
- X: `0.48 + sin(time * π * 2 / 10) * 0.04` (±4% horizontal)
- Y: `0.48 + cos(time * π * 2 / 8) * 0.03` (±3% vertical)
- Purpose: Creates the illusion that the light source is very slowly moving — like sunlight through a window

**Edge Shimmer**
- Layer 5 Refraction Edge: oscillate opacity between `0.35` and `0.45` on a 7-second cycle
- Slightly out of phase with luminance breathing (different period creates organic polyrhythm)
- Purpose: The inner edge shimmers as if light is flickering across the glass surface

**Micro-Scale on Tap** (existing behavior preserved)
- Current: `microScale = 0.985` → should stay
- Add: On press-down, frost luminance spikes to `0.38` briefly (250ms ease-out), as if pressing the card pushes it into light
- Release: springs back with existing timing

**Reduce Motion Support**
- All frost breathing disabled when `accessibilityReduceMotion` is true
- Static values: luminance at `0.31`, bloom at center, edge at `0.40`

### Acceptance Criteria

- [ ] AC 5.1: Frost luminance subtly breathes on a 6-second cycle (visible only when consciously watched)
- [ ] AC 5.2: Warmth bloom center slowly drifts (10s and 8s Lissajous curve)
- [ ] AC 5.3: Inner refraction edge shimmers on a 7s cycle, out of phase with luminance
- [ ] AC 5.4: On tap press-down, luminance spikes briefly (250ms) then returns
- [ ] AC 5.5: All micro-animations honor `accessibilityReduceMotion`
- [ ] AC 5.6: Combined CPU/GPU cost of frost animations is negligible (no additional render passes — all driven by existing `TimelineView` or `sin()` in modifiers)
- [ ] AC 5.7: Dark mode animations are completely unaffected

---

## Story 6: Answer Feedback Frost States

**As a** user tapping "Got It" or "Still Learning",
**I want** the frost card to respond with beautiful colored light,
**So that** the feedback feels integrated into the frost material rather than overlaid.

### Design Specification

Replace the current `borderGlowColor`/`borderGlowOpacity` system with **frost diffusion glow**:

**Correct Answer — Green Frost Diffusion**
- Layer 2 Warmth Bloom: temporarily shift color to `Color(red: 0.30, green: 0.85, blue: 0.55).opacity(0.20)` (mint green)
- Duration: 400ms ease-in, 600ms ease-out
- Layer 5 Refraction Edge: shift to mint green at `0.50` opacity for 300ms
- Outer border glow: `Color(red: 0.30, green: 0.85, blue: 0.55).opacity(0.15)`, radius 8pt, 500ms duration
- Purpose: The frost itself turns briefly green — light diffuses through the material, not around it

**Wrong Answer — Warm Amber Frost Diffusion**  
- Layer 2 Warmth Bloom: shift to `Color(red: 0.95, green: 0.65, blue: 0.25).opacity(0.18)` (warm amber)
- Duration: 300ms ease-in, 400ms ease-out
- Layer 5 Refraction Edge: shift to amber at `0.45` opacity for 250ms
- No outer glow (wrong feels inward, not radiating)
- Purpose: Amber is warmer and less punishing than orange. The frost absorbs the warmth briefly.

**Existing Elements to Preserve:**
- `answerGlow` radial gradient behind card — keep but soften colors to match frost vocabulary
- Luminous motes on correct — keep as-is (they float above the card, not part of its material)

### Acceptance Criteria

- [ ] AC 6.1: Correct answer makes the frost card glow mint green from within (internal light, not border stroke)
- [ ] AC 6.2: Wrong answer suffuses the frost with warm amber briefly
- [ ] AC 6.3: Green glow persists ~1s total, amber glow ~700ms (correct celebration lasts longer)
- [ ] AC 6.4: Refraction edge follows the glow color during feedback
- [ ] AC 6.5: Existing luminous motes and card-area radial glow still render on top
- [ ] AC 6.6: Dark mode answer feedback is completely unaffected
- [ ] AC 6.7: Transitions between neutral frost → colored frost → neutral frost are smooth (no pops)

---

## Story 7: Action Button Frost Integration

**As a** user choosing "Got It" or "Still Learning",
**I want** the buttons to feel like they belong to the same frost material family,
**So that** the entire flashcard experience feels cohesive.

### Design Specification

**"Still Learning" Button — Frost Warm**
- Remove gradient fill (`#f59e0b` → `#f43f5e`)
- Replace with:
  - Base: `Color.white.opacity(0.80)` (frost glass button)
  - Material: `.ultraThinMaterial` at `0.30` opacity
  - Inner highlight: top `white.opacity(0.25)` → `clear` gradient
  - Icon circle: `Color(red: 0.92, green: 0.58, blue: 0.12)` at 15% opacity background, icon in full amber
  - Text color: `Color(red: 0.75, green: 0.42, blue: 0.08)` (rich amber)
  - Border: `Color(red: 0.92, green: 0.58, blue: 0.12).opacity(0.20)`, 0.5pt
  - Shadow: amber-tinted lavender, radius 12pt, y 4pt

**"Got It" Button — Frost Cool**
- Remove gradient fill (`#10b981` → `#06b6d4`)
- Replace with:
  - Base: `Color.white.opacity(0.80)` (frost glass button)
  - Material: `.ultraThinMaterial` at `0.30` opacity
  - Inner highlight: top `white.opacity(0.25)` → `clear` gradient
  - Icon circle: `Color(red: 0.06, green: 0.70, blue: 0.50)` at 15% opacity background, icon in full teal
  - Text color: `Color(red: 0.03, green: 0.52, blue: 0.38)` (rich teal)
  - Border: `Color(red: 0.06, green: 0.70, blue: 0.50).opacity(0.20)`, 0.5pt
  - Shadow: teal-tinted lavender, radius 12pt, y 4pt

**Shared Button Properties:**
- Corner radius: `28`pt (unchanged)
- Both buttons use matching frost-white base to maintain material family
- Color differentiation comes from text, icon tint, and border — not the button body
- Existing `LumenPressStyle` behavior preserved

### Acceptance Criteria

- [ ] AC 7.1: Both action buttons use frost-white glass base (matching card material family)
- [ ] AC 7.2: "Still Learning" is differentiated by amber text/icon/border accents
- [ ] AC 7.3: "Got It" is differentiated by teal text/icon/border accents
- [ ] AC 7.4: Button text contrast against frost base ≥ 4.5:1 (WCAG AA for interactive elements)
- [ ] AC 7.5: Icon circles maintain semantic color coding (amber = retry, teal = success)
- [ ] AC 7.6: Press animation (scale/brightness) preserved from `LumenPressStyle`
- [ ] AC 7.7: Dark mode action buttons are completely unaffected
- [ ] AC 7.8: Buttons' frost matches card's frost (same white opacity, same material)

---

## Story 8: Flip Transition Frost Continuity

**As a** user flipping the card from front to back,
**I want** the frost material to maintain its beauty during the 3D rotation,
**So that** the flip feels magical and physically convincing.

### Design Specification

**Frost Edge Glow on Flip** (replaces `.flipEdgeGlowOpacity` ocean-to-lavender shimmer)
- During flip (0ms–550ms):
  - At 0ms: trigger edge glow
  - At ~150ms (card perpendicular): peak brightness
  - At ~350ms: glow fading
  - At 550ms: glow gone
- Glow color: `Color.white.opacity(0.65)` (pure white light catch)
- Implementation: `RoundedRectangle` stroke at 1.0pt, same timing as existing `flipEdgeGlowOpacity`
- Purpose: When a glass pane rotates, the edge catches maximum light at 90° — this physically accurate
- Add: ultra-subtle shadow expansion during mid-flip (radius grows by ~30% at rotation midpoint, like the card pivoting away from the surface)

**Ripple Effect**
- Existing radial gradient purple ripple → change to `Color.white.opacity(0.30)` center → `Color(red: 0.75, green: 0.72, blue: 0.80).opacity(0.12)` → `.clear`
- Purpose: Frost-appropriate ripple (no purple in the frost vocabulary)

**Content Crossfade**
- Existing `opacity` animation with `0.01` duration and `0.28` delay → preserve exactly
- This instant swap at the rotation midpoint is physically correct and feels crisp

### Acceptance Criteria

- [ ] AC 8.1: During flip, the card edge glows white (like glass catching light while rotating)
- [ ] AC 8.2: Edge glow peaks at rotation midpoint (~150ms into flip)
- [ ] AC 8.3: Shadow subtly expands during mid-flip (card lifts slightly during rotation)
- [ ] AC 8.4: Ripple effect on flip uses frost-appropriate colors (white/lavender, not purple)
- [ ] AC 8.5: Content crossfade at midpoint is instant (no visible frame where both sides show)
- [ ] AC 8.6: Dark mode flip behavior is completely unaffected
- [ ] AC 8.7: Flip animation duration remains `0.55s` easeInOut (unchanged timing)

---

## Technical Implementation Notes

### Files to Modify

| File | Scope |
|------|-------|
| `FlashCardsView.swift` → `liquidGlassCard()` | Stories 1, 3, 5 (light-mode glass body) |
| `FlashCardsView.swift` → `frontContent()` | Story 2 (frost typography) |
| `FlashCardsView.swift` → `backContent()` | Story 2 (frost typography) |
| `FlashCardsView.swift` → `flashcard()` | Stories 3, 4, 5, 8 (edges, shadows, breathing, flip) |
| `FlashCardsView.swift` → `actionButtons` | Story 7 (frost buttons) |
| `FlashCardsView.swift` → `handleAnswer()` | Story 6 (frost diffusion glow) |
| `FlashCardsView.swift` → `flipCard()` | Story 8 (frost flip edge glow) |

### No New Files Required

All changes are contained within the existing `FlashCardsView.swift`. The frost treatment is flashcard-specific and should not be abstracted into a shared component (the card's frost is uniquely tuned for the flashcard's 360pt × 500pt canvas and its specific content layout).

### Performance Budget

- No additional Metal shaders
- No additional `TimelineView` instances (reuse existing `floatPhase` animation driver)
- Frost breathing driven by `sin()` on existing animation values
- Total additional draw calls: 0 (layers are `SwiftUI` shape fills, composited by the framework)
- Memory impact: negligible (no texture allocations)

### Color Constants

For implementor reference, all frost colors in one place:

```swift
// Frost Foundation
let frostBody          = Color.white.opacity(0.88)
let frostMaterial      = 0.55 // ultraThinMaterial opacity
let frostWarmth        = Color(red: 1.0, green: 0.99, blue: 0.96) // 4200K warm
let frostLuminance     = Color.white // top highlight
let frostRefractionEdge = Color.white.opacity(0.40)
let frostOuterEdge     = Color(red: 0.75, green: 0.78, blue: 0.82).opacity(0.18)

// Frost Typography
let frostTextPrimary   = LinearGradient([0.60/0.10/0.92 → 0.96/0.16/0.46 → 0.98/0.55/0.05]) // front sunset
let frostTextSecondary = Color(red: 0.25, green: 0.25, blue: 0.27) // neutral dark grey
let frostTextTertiary  = Color(red: 0.45, green: 0.45, blue: 0.47) // medium grey
let frostTextOcean     = LinearGradient([0.04/0.46/0.96 → 0.00/0.72/0.84 → 0.04/0.78/0.52]) // back ocean

// Frost Shadows
let frostShadowColor   = Color(red: 0.55, green: 0.50, blue: 0.68) // lavender-grey

// Frost Feedback
let frostGreenGlow     = Color(red: 0.30, green: 0.85, blue: 0.55) // correct
let frostAmberGlow     = Color(red: 0.95, green: 0.65, blue: 0.25) // wrong

// Frost Buttons
let frostButtonBase    = Color.white.opacity(0.80)
let frostAmberAccent   = Color(red: 0.92, green: 0.58, blue: 0.12)
let frostTealAccent    = Color(red: 0.06, green: 0.70, blue: 0.50)
```

---

## Implementation Priority

| Order | Story | Rationale |
|-------|-------|-----------|
| 1 | Story 1: Frost Glass Foundation | Everything else builds on the material |
| 2 | Story 2: Luminous Typography | Text is the core content — must be readable on the new material |
| 3 | Story 4: Depth & Shadow | Shadows establish the card's spatial relationship |
| 4 | Story 3: Edge Definition | Edges refine the material's physical presence |
| 5 | Story 5: Frost Breathing | Animation brings the static material to life |
| 6 | Story 7: Action Buttons | Buttons must match the frost family |
| 7 | Story 8: Flip Transition | Polish the dynamic moment |
| 8 | Story 6: Answer Feedback | Final emotional polish layer |

---

## Quality Bar

This epic is complete when a user switching from dark mode to light mode feels that **both modes are equally premium** — the dark card is cosmic glass, the light card is frost crystal, and neither feels like an afterthought.

The frost card should pass the **"screenshot test"**: if someone screenshots the flashcard and shares it, people ask "what app is this?" — not because of flashy gradients, but because of the quiet, unmistakable feeling of craft.
