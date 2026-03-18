# LumenLingo — Caribbean Light Mode: Premium UX Revamp

## Document Version: 1.0
## Status: Ready for Implementation
## Priority: Critical — User Delight & Brand Perception

---

## Table of Contents

1. [Vision & Design Philosophy](#vision--design-philosophy)
2. [Current State Audit Summary](#current-state-audit-summary)
3. [Design Principles](#design-principles)
4. [Epic 1: Caribbean Color Foundation & Design Tokens](#epic-1-caribbean-color-foundation--design-tokens)
5. [Epic 2: Glass Morphism & Card System Revamp](#epic-2-glass-morphism--card-system-revamp)
6. [Epic 3: Navigation, Tab Bar & App Shell](#epic-3-navigation-tab-bar--app-shell)
7. [Epic 4: Dashboard — The First Impression](#epic-4-dashboard--the-first-impression)
8. [Epic 5: Practice Screens — FlashCards, WordBuilder, Grammar](#epic-5-practice-screens--flashcards-wordbuilder-grammar)
9. [Epic 6: Journey, Categories & Progress Visualization](#epic-6-journey-categories--progress-visualization)
10. [Epic 7: Profile, Settings & Membership](#epic-7-profile-settings--membership)
11. [Epic 8: Background, Depth & Atmospheric Effects](#epic-8-background-depth--atmospheric-effects)
12. [Epic 9: Animation, Motion & Micro-Interactions](#epic-9-animation-motion--micro-interactions)
13. [Epic 10: Accessibility, Polish & Quality Assurance](#epic-10-accessibility-polish--quality-assurance)

---

## Vision & Design Philosophy

### The Problem

LumenLingo's dark mode (Cosmic) is deeply premium — a rich universe of purples, deep voids, and ethereal glass morphism that makes users feel they're learning inside a galaxy. The Caribbean light mode, by contrast, feels like an afterthought: a bright lavender wash with inconsistent opacity values, invisible UI elements (white-on-white), and missing atmospheric depth. Users who prefer light mode deserve the same emotional response — that feeling of luxury, warmth, and delight.

### The Vision: "Golden Hour on a Caribbean Shore"

Imagine the 20 minutes before sunset on a Caribbean island. The sky shifts from deep cerulean through rose gold to warm amber. The light is impossibly soft, casting everything in a luminous glow. The water catches light like liquid pearl. Every surface shimmers with warmth.

**This is our target emotional space.**

The revamped Caribbean light mode will be:

- **Luminous, not flat** — Surfaces glow with internal warmth, not just sit there
- **Layered, not washed out** — Multiple depth levels create richness and dimension
- **Warm, not sterile** — Every element carries the Caribbean sunset warmth
- **Refined, not busy** — Restraint in decoration, generosity in spacing and breathing room
- **Consistent, not patchy** — Every single element adapts gracefully, no white-on-white ghosts

### Success Metric

> "I actually prefer light mode now." — Target user sentiment

---

## Current State Audit Summary

### What's Working Well ✓
- **3-tier Caribbean text system** (`caribbeanInk`, `caribbeanPlum`, `caribbeanMist`) is consistent across ~69 files
- **CategoriesView** — excellently adapted with lavender-tinted backgrounds
- **JourneyView** — well-adapted with proper GlassPanelWrapper usage
- **ProfileView** — thoughtful jewel-tone tab indicators
- **AdventureCTAButton** — purpose-built warm frosted light bar
- **CollapsibleSection** — proper Caribbean tint overlays and strokes
- **PremiumTransparentCardBackground** — full 10-layer light mode system

### Critical Failures ✗
- **FlashCardsView** — loading spinner invisible (white on white); liquidGlassCard has zero light adaptation
- **GrammarView** — question panel hardcoded dark purple; answer buttons invisible
- **WordBuilderView** — clue text has white in gradient (invisible); all tiles/slots use white opacity (invisible)
- **GlassDivider** — default white color invisible on light backgrounds
- **AnimatedProgressBar** — white track invisible in light mode
- **MembershipView** — comparison toggle invisible on gradient background
- **GlassPanelWrapper** — all decorative layers (aura, edge highlight, mist) disabled in light mode

### The Pattern

The root cause is systematic: components built for dark mode using `.white.opacity(0.XX)` patterns that become invisible against light backgrounds. The fix requires a comprehensive token system and per-component adaptation.

---

## Design Principles

### 1. "Warm Glass, Not Cold Plastic"
Every surface in light mode should feel like light passing through warm-tinted glass — translucent, layered, alive. Never flat, never opaque, never sterile. The glass should carry the Caribbean sunset within it.

### 2. "Depth Through Light, Not Shadow"
In dark mode, depth comes from darkness (voids, deep shadows). In light mode, depth comes from luminosity gradients — brighter surfaces are "closer," subtly tinted surfaces are "further." Shadows exist but are soft, warm, and colored (lavender/rose), never harsh grey or black.

### 3. "One Palette, Infinite Harmonics"
The Caribbean palette has three anchor points: lavender (`#C494FC`), rose (`#F472B6`), and amber (`#FB923C`). Every UI element should derive its light-mode identity from these three, creating visual harmony without monotony.

### 4. "Invisible is Unacceptable"
If a user can't see an element, we've failed. Every interactive element must have sufficient contrast. Every decorative element must be intentionally visible or intentionally absent — never accidentally invisible.

### 5. "Earned Richness"
Premium doesn't mean more stuff. It means every detail has been considered. Generous white space, precise alignment, intentional color choices, and purposeful animation — that's what creates the feeling of luxury.

---

## Epic 1: Caribbean Color Foundation & Design Tokens

**Epic Owner:** Design System Lead
**Priority:** P0 — Blocking for all other epics
**Goal:** Establish a comprehensive, semantic color token system for Caribbean light mode that replaces ad-hoc `.white.opacity(X)` patterns with intentional, documented, reusable tokens.

### Why This Epic Matters
The current light mode uses ~15 different approaches to color: some views use Caribbean tokens, some use raw RGB, some use `.white.opacity()` values tuned for dark mode. This inconsistency is the root cause of the "not premium" feeling. A unified token system creates instant visual coherence.

---

### Story 1.1: Define Caribbean Surface Token Hierarchy

**As a** designer implementing light mode,
**I want** a documented hierarchy of surface colors with semantic tokens,
**So that** every background, card, and container has a purposeful, distinct layer.

**Story Points:** 5
**Priority:** P0

#### Subtask 1.1.1: Define Primary Surface Tokens

Create the following semantic surface tokens in `Extensions.swift`:

| Token Name | Value | Role | Contrast Notes |
|---|---|---|---|
| `caribbeanCanvas` | `rgb(252, 249, 255)` `#FCF9FF` | App-level page background | Warmest near-white, barely-there lavender |
| `caribbeanSurface` | `rgb(248, 245, 253)` `#F8F5FD` | Nav/tab bar, secondary backgrounds | Current `F8F5FD`, proven to work |
| `caribbeanElevated` | `rgb(255, 255, 255, 0.72)` | Cards, panels on top of canvas | Pure white at 72% lets canvas warmth bleed through |
| `caribbeanRecessed` | `rgb(237, 228, 248)` `#EDE4F8` | Input fields, empty slots, wells | Deeper lavender signals "container awaiting content" |
| `caribbeanOverlay` | `rgb(255, 255, 255, 0.85)` | Modals, sheets, alerts over content | High opacity for readability, warm tint from below |

**Acceptance Criteria:**
- [ ] All 5 surface tokens defined as `static var` on `Color` extension
- [ ] Each token has an inline comment documenting its role (e.g., `/// App-level page background — warmest near-white`)
- [ ] Tokens use `Color(red:green:blue:opacity:)` initializer for precision
- [ ] Visual test: screenshot each surface token rendered as a full-screen rectangle — confirm warm undertone visible, not cold grey
- [ ] Each surface token meets WCAG 2.1 AA contrast ratio (≥ 4.5:1) with `caribbeanInk` text

#### Subtask 1.1.2: Define Interactive Surface Tokens

| Token Name | Value | Role |
|---|---|---|
| `caribbeanHover` | `rgb(243, 235, 253)` `#F3EBFD` | Button/card hover/pressed state |
| `caribbeanSelected` | `rgb(196, 148, 252, 0.18)` | Active/selected item background |
| `caribbeanDisabled` | `rgb(237, 228, 248, 0.55)` | Disabled controls background |

**Acceptance Criteria:**
- [ ] 3 interactive surface tokens defined
- [ ] `caribbeanHover` is visibly distinct from `caribbeanCanvas` at a glance (not requiring careful examination)
- [ ] `caribbeanSelected` creates a clear "this is active" signal — test by placing 5 items in a row with 1 selected
- [ ] `caribbeanDisabled` reads as "unavailable" without being ugly or jarring

#### Subtask 1.1.3: Define Depth Shadow Token System

Replace current ad-hoc shadow system with semantic shadow tokens:

| Token Name | Color | Radius | Y-Offset | Role |
|---|---|---|---|---|
| `caribbeanShadowSubtle` | `#C494FC` @ 0.06 | 4 | 2 | Cards, small containers |
| `caribbeanShadowMedium` | `#C494FC` @ 0.10 | 12 | 4 | Elevated panels, modals |
| `caribbeanShadowDeep` | `#C494FC` @ 0.14 + `#F472B6` @ 0.04 | 20 + 8 | 6 + 2 | Floating elements, dropdown menus |
| `caribbeanShadowGlow` | `#F472B6` @ 0.08 | 16 | 0 | Interactive highlights, CTA glow |

**Acceptance Criteria:**
- [ ] Shadow tokens implemented as `ViewModifier` structs (e.g., `.caribbeanShadow(.subtle)`)
- [ ] Each shadow uses **colored** shadows (lavender/rose), never grey or black
- [ ] Shadow intensity scales with element elevation — higher elements cast deeper, more diffuse shadows
- [ ] Shadows are warm-tinted, not cool/neutral
- [ ] On white backgrounds, shadows create a gentle "floating" effect, not a hard edge

---

### Story 1.2: Define Caribbean Accent & Semantic Color Tokens

**As a** developer building Caribbean light mode,
**I want** semantic color tokens for all interactive states and feedback,
**So that** buttons, alerts, badges, and indicators feel cohesive and intentional.

**Story Points:** 5
**Priority:** P0

#### Subtask 1.2.1: Define Accent Gradient Tokens

| Token | Colors | Direction | Usage |
|---|---|---|---|
| `caribbeanGradientPrimary` | `#C494FC` → `#F472B6` | leading → trailing | Primary CTA, active tab indicator |
| `caribbeanGradientSecondary` | `#F472B6` → `#FB923C` | top → bottom | Secondary buttons, badges |
| `caribbeanGradientWarm` | `#FDE68A` → `#FB923C` → `#F472B6` | topLeading → bottomTrailing | Achievement, celebration, reward |
| `caribbeanGradientCool` | `#A78BFA` → `#6366F1` | top → bottom | Informational, neutral emphasis |
| `caribbeanGradientSunset` | `#C494FC` → `#F472B6` → `#FB923C` | topLeading → bottomTrailing | Hero sections, premium features |

**Acceptance Criteria:**
- [ ] All 5 gradient tokens defined as static properties returning `LinearGradient`
- [ ] Each gradient has start/end points documented
- [ ] Gradients tested against both `caribbeanCanvas` and `caribbeanElevated` backgrounds
- [ ] No gradient contains pure white (kills contrast on light backgrounds)
- [ ] Each gradient is visually distinct from the others at thumbnail size

#### Subtask 1.2.2: Define Semantic Feedback Colors

| Token | Light Mode Value | Usage | Dark Mode Equivalent |
|---|---|---|---|
| `caribbeanSuccess` | `#059669` (emerald-600) | Correct answer, completion, positive | Same |
| `caribbeanSuccessSoft` | `#059669` @ 0.12 | Success background tint | `#059669` @ 0.15 |
| `caribbeanError` | `#DC2626` (red-600) | Wrong answer, validation error | Same |
| `caribbeanErrorSoft` | `#DC2626` @ 0.10 | Error background tint | `#DC2626` @ 0.15 |
| `caribbeanWarning` | `#D97706` (amber-600) | Streak at risk, timer warning | Same |
| `caribbeanWarningSoft` | `#D97706` @ 0.10 | Warning background tint | `#D97706` @ 0.15 |
| `caribbeanInfo` | `#7C3AED` (violet-600) | Tips, hints, informational | Same |
| `caribbeanInfoSoft` | `#7C3AED` @ 0.10 | Info background tint | `#7C3AED` @ 0.15 |

**Acceptance Criteria:**
- [ ] All 8 semantic feedback tokens defined
- [ ] "Soft" variants create a tinted background visible on `caribbeanElevated` cards
- [ ] Contrast ratio: main color on soft background ≥ 3:1
- [ ] Each feedback color pair tested in a notification/badge mockup
- [ ] Colors are consistent with Tailwind CSS naming conventions for familiarity

#### Subtask 1.2.3: Define Border & Separator Tokens

| Token | Value | Usage |
|---|---|---|
| `caribbeanBorder` | `#C494FC` @ 0.20 | Card borders, input field outlines |
| `caribbeanBorderSubtle` | `#C494FC` @ 0.10 | Dividers, subtle section separators |
| `caribbeanBorderFocus` | `#A855F7` @ 0.45 | Focused input, active card selection ring |
| `caribbeanBorderAccent` | `caribbeanGradientPrimary` | Premium feature borders, hero cards |

**Acceptance Criteria:**
- [ ] All 4 border tokens defined
- [ ] `caribbeanBorder` visible against both `caribbeanCanvas` and `caribbeanElevated`
- [ ] `caribbeanBorderSubtle` creates a "just barely there" line — visible on close inspection, not distracting
- [ ] `caribbeanBorderFocus` stands out clearly for accessibility (visible from arm's length)
- [ ] `caribbeanBorderAccent` gradient renders cleanly on rounded rectangles (no clipping artifacts)
- [ ] All borders use **lavender or rose tint**, never raw grey or black

---

### Story 1.3: Replace All `.white.opacity()` Patterns in Light Mode

**As a** user in light mode,
**I want** every UI element to be clearly visible,
**So that** nothing disappears against the light background.

**Story Points:** 8
**Priority:** P0

#### Subtask 1.3.1: Audit and Replace in Game Views

Systematically replace `.white.opacity(X)` with Caribbean tokens in all game views:

**FlashCardsView.swift:**
| Current | Replacement | Line Context |
|---|---|---|
| `.tint(.white)` on ProgressView | `.tint(isDark ? .white : .caribbeanPlum)` | Loading spinner |
| `.white.opacity(0.12)` footer pill bg | `isDark ? .white.opacity(0.12) : caribbeanBorderSubtle` fill | Word pair footer |
| `.white.opacity(0.20)` footer pill stroke | `isDark ? .white.opacity(0.20) : caribbeanBorder` | Word pair footer border |
| `.white.opacity(0.45)` capsule divider | `isDark ? .white.opacity(0.45) : caribbeanMist.opacity(0.3)` | Back side divider |

**WordBuilderView.swift:**
| Current | Replacement |
|---|---|
| `.white` in clue gradient | `isDark ? .white : caribbeanInk` (or remove white entirely for light) |
| `.white.opacity(0.04)` empty slot bg | `isDark ? ... : caribbeanRecessed` |
| `.white.opacity(0.08)` slot border | `isDark ? ... : caribbeanBorderSubtle` |
| `.white.opacity(0.04)` letter bank bg | `isDark ? ... : caribbeanRecessed` |
| `.white.opacity(0.06)` letter bank stroke | `isDark ? ... : caribbeanBorderSubtle` |
| `.white.opacity(0.03)` placeholder bg | `isDark ? ... : caribbeanRecessed.opacity(0.5)` |
| `.white.opacity(0.15)` tile overlay | `isDark ? ... : caribbeanBorder` |

**GrammarView.swift:**
| Current | Replacement |
|---|---|
| `Color(hex: "#2E1065").opacity(0.55)` panel bg | `isDark ? ... : caribbeanRecessed` with Caribbean gradient tint |
| `.white.opacity(0.06)` answer btn bg | `isDark ? ... : caribbeanElevated` |
| `.white.opacity(0.15)` answer btn border | `isDark ? ... : caribbeanBorder` |
| `.white.opacity(0.12)` letter badge bg | `isDark ? ... : caribbeanSelected` |
| `.white.opacity(0.04)` explanation bg | `isDark ? ... : caribbeanRecessed` |

**Acceptance Criteria:**
- [ ] Zero instances of `.white.opacity()` used for backgrounds/borders in light mode path of game views
- [ ] Each replacement tested with screenshot — element clearly visible on Caribbean background
- [ ] No replacement introduces harsh contrast or jarring color discontinuities
- [ ] Replacements use semantic tokens (not raw RGB values)
- [ ] All three game views (FlashCards, WordBuilder, Grammar) pass visual QA review

#### Subtask 1.3.2: Audit and Replace in Shared Components

**GlassDivider (default color):**
- Change default `color` parameter from `.white` to adaptive: `isDark ? .white : .caribbeanMist`
- Or accept a `colorScheme` environment and adapt internally

**AnimatedProgressBar track:**
- Replace `.white.opacity(0.08)` with `isDark ? .white.opacity(0.08) : caribbeanRecessed`

**GameHeader border/background:**
- Add Caribbean tint overlay in light mode matching `GlassCardBackground` approach

**Acceptance Criteria:**
- [ ] `GlassDivider` renders as a visible lavender-tinted line in light mode
- [ ] `AnimatedProgressBar` track visible in light mode — shows as a soft lavender track
- [ ] `GameHeader` gains Caribbean warmth in light mode (not plain grey material)
- [ ] No regressions in dark mode — all existing dark mode values preserved

#### Subtask 1.3.3: Audit and Replace in Membership & Language Selection

**MembershipView.swift:**
- Comparison toggle `.white.opacity(0.06)` → light mode `caribbeanElevated` with `caribbeanBorder` stroke

**LanguageSelectionView.swift:**
- Replace all inline `Color(red: 45/255, green: 22/255, blue: 62/255)` with `.caribbeanInk`
- Replace all inline `Color(red: 140/255, green: 96/255, blue: 136/255)` with `.caribbeanMist`
- Replace all inline `Color(red: 100/255, green: 58/255, blue: 100/255)` with `.caribbeanPlum`
- Replace `.white.opacity(0.5)` card backgrounds with `caribbeanElevated`

**Acceptance Criteria:**
- [ ] Membership comparison toggle clearly visible and interactive-looking in light mode
- [ ] LanguageSelectionView uses zero inline RGB values that duplicate Caribbean token values
- [ ] All card backgrounds in language selection use semantic tokens
- [ ] Style consistency between LanguageSelectionView and the rest of the app verified side-by-side

---

### Story 1.4: Implement Caribbean Color Token Utility Modifiers

**As a** developer applying light mode theming,
**I want** convenience modifiers that auto-adapt between dark and light,
**So that** I don't need to write `isDark ? X : Y` ternaries everywhere.

**Story Points:** 5
**Priority:** P1

#### Subtask 1.4.1: Create `AdaptiveColor` Protocol Helpers

Implement helper extensions that reduce boilerplate:

```swift
extension Color {
    /// Returns the appropriate text color for the current mode
    static func adaptiveText(
        _ tier: TextTier,
        isDark: Bool
    ) -> Color {
        switch tier {
        case .primary:   return isDark ? .white : .caribbeanInk
        case .secondary: return isDark ? .white.opacity(0.7) : .caribbeanPlum
        case .tertiary:  return isDark ? .white.opacity(0.5) : .caribbeanMist
        }
    }
}
```

**Acceptance Criteria:**
- [ ] `TextTier` enum with `.primary`, `.secondary`, `.tertiary` cases defined
- [ ] `Color.adaptiveText(_:isDark:)` returns correct colors for each tier in both modes
- [ ] `Color.adaptiveSurface(_:isDark:)` helper for surface levels (`.canvas`, `.elevated`, `.recessed`)
- [ ] `Color.adaptiveBorder(_:isDark:)` helper for border levels (`.subtle`, `.normal`, `.focus`)
- [ ] Helpers are opt-in — existing code doesn't break; new code can adopt incrementally
- [ ] Unit test validates each helper returns correct value for both `isDark: true` and `isDark: false`

#### Subtask 1.4.2: Create Shadow Modifier System

```swift
enum CaribbeanShadowLevel { case subtle, medium, deep, glow }

struct CaribbeanShadowModifier: ViewModifier {
    let level: CaribbeanShadowLevel
    @Environment(ThemeManager.self) var themeManager
    // ... applies correct shadow for level + mode
}

extension View {
    func caribbeanShadow(_ level: CaribbeanShadowLevel) -> some View
}
```

**Acceptance Criteria:**
- [ ] `.caribbeanShadow(.subtle)` applies lavender-tinted shadow in light, dark shadow in dark
- [ ] `.caribbeanShadow(.glow)` creates a rose-pink glow visible on interactive elements
- [ ] Shadow modifier is environment-aware (reads ThemeManager)
- [ ] Applied to a white card on `caribbeanCanvas`, shadow creates visible floating effect
- [ ] Performance: shadow modifiers don't trigger unnecessary re-renders

---

### Story 1.5: Define Caribbean Iconography Token Set

**As a** user navigating the app in light mode,
**I want** icons that feel warm and intentional (not default system grey),
**So that** every detail reinforces the premium Caribbean aesthetic.

**Story Points:** 3
**Priority:** P1

#### Subtask 1.5.1: Define Icon Color Tokens

| Token | Value | Usage |
|---|---|---|
| `caribbeanIconPrimary` | `caribbeanInk` | Active/interactive icons |
| `caribbeanIconSecondary` | `caribbeanPlum` | Decorative/informational icons |
| `caribbeanIconTertiary` | `caribbeanMist` | Disabled/placeholder icons |
| `caribbeanIconAccent` | `caribbeanGradientPrimary` | Featured/premium icons (gradient fill) |

**Acceptance Criteria:**
- [ ] Icon tokens defined and documented
- [ ] Tab bar icons use `caribbeanIconPrimary` (selected) and `caribbeanIconTertiary` (unselected) in light mode
- [ ] Settings section icons use `caribbeanIconSecondary`
- [ ] Premium/locked feature icons use `caribbeanIconAccent` gradient
- [ ] All icons tested at SF Symbol weight `medium` for optical consistency

---

## Epic 2: Glass Morphism & Card System Revamp

**Epic Owner:** UI Engineering Lead
**Priority:** P0 — Cards are the primary content vessel; broken cards = broken experience
**Goal:** Transform the Caribbean light mode glass morphism from "faded dark mode" into a warm, luminous, layered system where every card feels like sunlight through rose-tinted glass.

### The Current Problem

Dark mode glass cards use `.ultraThinMaterial` with white inner highlights and white borders — creating ethereal, glowing panels against the cosmic void. In light mode, the same approach produces washed-out, flat, nearly-invisible rectangles. The `GlassCardBackground` has partial Caribbean adaptation (tint overlays, colored shadows), but `liquidGlassCard`, `GlassPanelWrapper`, `GameHeader`, and game-specific card styles lack proper light mode treatment.

### The Target

Light mode cards should feel like **frosted pearl** — a warm, semi-translucent surface with subtle internal color that catches the ambient gradient. The card should glow gently from within, with edges defined by soft lavender borders rather than harsh lines. Shadows should be tinted and diffuse, creating a sense of the card floating above a warm ocean of light.

---

### Story 2.1: Redesign GlassCardBackground for Premium Light Mode

**As a** user viewing any card in light mode,
**I want** the card to feel like a luminous, warm glass surface,
**So that** it conveys the same premium quality as the dark mode cosmic glass.

**Story Points:** 8
**Priority:** P0

#### Subtask 2.1.1: Redefine Light Mode Material Layer

Replace the current `0.55 opacity` material with a richer, more layered approach:

**Current light mode material stack:**
```
.ultraThinMaterial @ 0.55 opacity
→ Caribbean gradient tint @ [0.18, 0.12, 0.10]
→ White inner highlight [0.25 → 0.06]
→ Border: #C494FC @ 0.25, lineWidth 0.5
→ Shadow: #C494FC @ 0.12 r:20
```

**Proposed premium light mode material stack:**
```
Layer 0: caribbeanElevated base (white @ 0.72)
Layer 1: .thinMaterial @ 0.35 opacity (subtler blur, more translucency)
Layer 2: Caribbean warm wash — radialGradient from center:
         #C494FC @ 0.06 → #F472B6 @ 0.04 → transparent
         (creates internal warmth radiating from center)
Layer 3: Top-edge luminance band: white @ 0.35 → white @ 0.0
         (simulates light catching the top edge — key premium signal)
Layer 4: Bottom-edge warmth band: #FB923C @ 0.03 → transparent
         (catches the "sunset below" from the background gradient)
Layer 5: Border — 2-layer:
         Inner: white @ 0.50, lineWidth 0.5 (crisp light catch)
         Outer: #C494FC @ 0.18, lineWidth 0.5, offset 0.5 (lavender definition)
Layer 6: Shadow stack:
         Primary: #C494FC @ 0.10, radius 16, y:4
         Secondary: #F472B6 @ 0.04, radius 6, y:2
         Ambient: white @ 0.25 (inset, simulates internal glow)
```

**Acceptance Criteria:**
- [ ] `GlassCardBackground` in light mode renders with visible internal warmth
- [ ] Card is clearly distinguishable from the canvas background at a glance
- [ ] Top edge has a bright highlight that creates a "caught the light" effect
- [ ] Bottom edge has a subtle warm tint that connects to the sunset background
- [ ] Border is visible but delicate — never harsh or heavy
- [ ] Card feels "floating" due to colored shadow, not "sitting" flat
- [ ] Material layer allows background gradient to show through subtly
- [ ] Dark mode is completely unaffected — all changes gated behind `isDark` check
- [ ] Tested on all screen sizes: iPhone SE, iPhone 15, iPhone 15 Pro Max, iPad

#### Subtask 2.1.2: Add Ambient Glow Effect for Light Mode Cards

Introduce a subtle outer glow that makes cards feel luminous:

```swift
// In light mode only:
.background {
    RoundedRectangle(cornerRadius: cornerRadius + 2)
        .fill(
            RadialGradient(
                colors: [
                    Color(hex: "#C494FC").opacity(0.08),
                    Color.clear
                ],
                center: .center,
                startRadius: 0,
                endRadius: min(geo.size.width, geo.size.height) * 0.6
            )
        )
        .blur(radius: 8)
        .offset(y: 2)
}
```

**Acceptance Criteria:**
- [ ] Cards in light mode have a soft, diffuse glow extending 4-8 points beyond their bounds
- [ ] Glow color is warm lavender, never grey
- [ ] Glow is subtle — visible on inspection, not overwhelming
- [ ] Glow doesn't interfere with adjacent card spacing (no visual collision)
- [ ] Performance: glow renders as a single blurred shape, not per-frame computation

#### Subtask 2.1.3: Implement Light Mode Shimmer Accent (Optional Premium Touch)

Add an ultra-subtle shimmer that moves across the card surface in light mode, simulating light playing on glass:

**Acceptance Criteria:**
- [ ] Shimmer is a diagonal gradient band (white @ 0.0 → 0.08 → 0.0) that slowly drifts
- [ ] Animation duration: 6-8 seconds per cycle, ease-in-out
- [ ] Shimmer is barely perceptible — a "did I just see that?" effect
- [ ] Disabled during reduce-motion accessibility setting
- [ ] Shimmer only renders on cards currently visible on screen (lazy evaluation)
- [ ] Performance impact: < 1% GPU overhead (measured with Instruments)

---

### Story 2.2: Redesign LiquidGlassCard for Light Mode

**As a** user playing FlashCards or interacting with featured content,
**I want** the premium liquid glass cards to look equally stunning in light mode,
**So that** the flagship game experience doesn't feel degraded.

**Story Points:** 8
**Priority:** P0

#### Subtask 2.2.1: Audit Current LiquidGlassCard Dark-Only Values

The current `liquidGlassCard` (used in FlashCardsView) has these dark-mode-only values:
- Material: `0.18` opacity
- Inner gradient: `.white.opacity(0.06)` top → `clear`
- Tint: accent color at `0.12` opacity
- Border: white at 0.15

None of these adapt for light mode.

**Acceptance Criteria:**
- [ ] Complete audit of `LiquidGlassCardModifier` and `PremiumTransparentCardBackground` documenting every opacity value
- [ ] List of exactly which values need light mode adaptation
- [ ] Prioritized by visual impact (most visible issues first)

#### Subtask 2.2.2: Implement Light Mode LiquidGlassCard Stack

**Proposed light mode stack for LiquidGlassCard:**
```
Layer 0: caribbeanElevated base fill
Layer 1: .thinMaterial @ 0.25 (lighter than dark, more translucent)
Layer 2: Accent tint @ 0.28 (current isDark logic already handles this — verify)
Layer 3: Caribbean prismatic wash:
         AngularGradient [#C494FC, #F472B6, #FB923C, #C494FC]
         @ 0.06 opacity (gives prismatic rainbow edge in light)
Layer 4: Inner highlight: white @ 0.40 top-edge → 0.0 (stronger than GlassCard)
Layer 5: Border:
         AngularGradient [#C494FC @ 0.25, white @ 0.45, #F472B6 @ 0.25]
         lineWidth 1.0 (prismatic border catches light at different angles)
Layer 6: Shadows:
         Primary: accent @ 0.12, radius 20, y:6
         Ambient: #C494FC @ 0.06, radius 8
```

**Acceptance Criteria:**
- [ ] LiquidGlassCard in light mode shows prismatic edge effect (rainbow subtle shimmer)
- [ ] Card is clearly a "premium" tier above regular `GlassCardBackground`
- [ ] FlashCard front shows the card clearly against the Caribbean sunset background
- [ ] FlashCard back (revealed translation) is equally readable and premium
- [ ] Card flip animation maintains premium feel — no frame where it looks flat/broken
- [ ] Text gradients on card front/back remain well-contrasted against the new card surface
- [ ] Game-specific accent colors (different per game) integrate cleanly with light card

#### Subtask 2.2.3: Adapt FlashCard Content Colors for Light Mode Cards

With the new card surface, verify and adjust content colors:

| Element | Current Light | Proposed Light | Rationale |
|---|---|---|---|
| Front text gradient | `#6366f1 → #a855f7 → #ec4899` | Keep — excellent contrast on warm white | Rich jewel tones pop beautifully |
| Front shadow | `#a855f7 @ 0.15` | `#a855f7 @ 0.20` | Slightly stronger to offset lighter surface |
| Back text gradient | `#059669 → #0891b2 → #7c3aed` | Keep — complementary to front | Creates satisfying reveal contrast |
| Example text | `.caribbeanPlum` | Keep | Consistent with system |
| Hint text | `.caribbeanMist` | Keep | Consistent with system |
| Footer pill bg | `.white.opacity(0.12)` → **fix** | `caribbeanRecessed` | Currently invisible |
| Footer pill border | `.white.opacity(0.20)` → **fix** | `caribbeanBorder` | Currently invisible |
| Capsule divider | `.white.opacity(0.45)` → **fix** | `caribbeanMist.opacity(0.3)` | Currently invisible |

**Acceptance Criteria:**
- [ ] All FlashCard content elements visible and well-contrasted in light mode
- [ ] Footer pill containing word pairs is clearly visible and reads as a distinct UI element
- [ ] Capsule divider separating sections on card back is visible
- [ ] Screenshot comparison: dark mode FlashCard vs light mode FlashCard — both feel premium
- [ ] No color clashes between card surface and text gradients (test with varied color combos)

---

### Story 2.3: Revamp GlassPanelWrapper for Light Mode

**As a** user viewing Journey, Profile, or any sectioned content in light mode,
**I want** the panel containers to feel substantial and layered,
**So that** content organization is clear and the app feels polished.

**Story Points:** 5
**Priority:** P0

#### Subtask 2.3.1: Restore Decorative Layers for Light Mode

Currently, `GlassPanelWrapper` disables all decorative layers in light mode (aura, edge highlights, winter mist all set to `opacity: 0`). Restore them with light-appropriate values:

**Proposed light mode decorative layers:**
```
Aura (outer glow): #C494FC @ 0.05, blur 12 (was 0 in light)
Edge highlight top: white @ 0.4 → 0.0 vertical (was 0 in light)
Edge highlight bottom: #FB923C @ 0.03 → 0.0 vertical (new — warm ground reflection)
Mist: radial white @ 0.06 from topLeading (was 0 in light)
Inner vignette: caribbeanMist @ 0.02 around edges (new — adds depth)
```

**Acceptance Criteria:**
- [ ] `GlassPanelWrapper` in light mode has visible but subtle decorative layers
- [ ] Top edge has a bright highlight (simulates overhead light)
- [ ] Panel has a gentle outer glow that creates depth separation from canvas
- [ ] Decorative layers don't compete with content for attention
- [ ] Panel reads as a distinct elevated surface, not just a bordered rectangle
- [ ] Verified on JourneyView, ProfileView, and any other panel consumers

#### Subtask 2.3.2: Enhance Panel Header Styling for Light Mode

Glass panels with section headers should have enhanced header treatment:

**Acceptance Criteria:**
- [ ] Section header text uses `caribbeanInk` with increased font weight in light mode
- [ ] Header area has a subtle bottom-edge separator (not a harsh line — a gradient fade)
- [ ] Header icon use `caribbeanGradientPrimary` fill (gradient icon) instead of flat color
- [ ] Expand/collapse chevron has a `caribbeanHover` background pill on tap
- [ ] Header area feels like a "title bar" on a glass panel — clearly delineated from content

---

### Story 2.4: Create Caribbean Game Card Component

**As a** user playing any practice game in light mode,
**I want** game-specific cards (answer options, letter tiles, grammar choices) to be clearly defined,
**So that** I can interact confidently and quickly during timed practice.

**Story Points:** 8
**Priority:** P0

#### Subtask 2.4.1: Design Grammar Answer Option Card for Light Mode

Current issue: Grammar answer buttons use `.white.opacity(0.06)` background and `.white.opacity(0.15)` border — both invisible in light mode.

**Proposed light mode grammar answer card:**
```
Background: caribbeanElevated (white @ 0.72)
Border: caribbeanBorder (#C494FC @ 0.20), lineWidth 1, cornerRadius 14
Letter badge: caribbeanSelected (#C494FC @ 0.18) fill, caribbeanInk text
Hover/Pressed: caribbeanHover (#F3EBFD)
Selected (correct): caribbeanSuccessSoft bg, caribbeanSuccess border, lineWidth 1.5
Selected (wrong): caribbeanErrorSoft bg, caribbeanError border, lineWidth 1.5
Shadow: caribbeanShadowSubtle
```

**Acceptance Criteria:**
- [ ] Grammar answer options are clearly defined rectangles with visible borders
- [ ] Each answer option is visually distinct — not blending into the background
- [ ] Letter badge (A, B, C, D) is clearly visible with contrasting background
- [ ] Pressed state provides immediate tactile visual feedback
- [ ] Correct answer green glow is warm and celebratory
- [ ] Wrong answer red is firm but not harsh — enough to communicate without punishing
- [ ] Transition from default → selected → revealed is smooth (0.25s animation)
- [ ] All answer options maintain consistent sizing and spacing

#### Subtask 2.4.2: Design WordBuilder Letter Tile for Light Mode

Current issue: Letter tiles use `.white.opacity(0.15)` overlay and `.white.opacity(0.12)` inner glow — invisible in light mode.

**Proposed light mode letter tile:**
```
Base: caribbeanElevated (white @ 0.72)
Material: .thinMaterial @ 0.4 (for subtle backdrop blur)
Border: caribbeanBorder, lineWidth 0.75
Text: caribbeanInk, weight .semibold
Shadow: caribbeanShadowSubtle (lavender, y: 2)
Pressed: scale 0.95, caribbeanHover bg, caribbeanShadowMedium
Placed (in answer slot): caribbeanSelected bg, caribbeanBorderFocus border
Hint glow: caribbeanGradientWarm @ 0.15 overlay (pulsing)
```

**Answer slot (empty):**
```
Background: caribbeanRecessed (#EDE4F8)
Border: caribbeanBorderSubtle, dashed (- - -)
Text: caribbeanMist (placeholder text)
```

**Answer slot (filled):**
```
Background: caribbeanSelected (#C494FC @ 0.18)
Border: caribbeanBorder, solid
Text: caribbeanInk
```

**Acceptance Criteria:**
- [ ] Letter tiles look like physical tiles — elevated, tactile, tappable
- [ ] Empty answer slots look like "drop zones" — recessed, inviting, clearly distinct from filled
- [ ] Filled answer slots show the letter clearly with a "placed" color state
- [ ] The letter bank area has a visible container boundary
- [ ] Hint tiles have a warm pulsing glow that draws the eye
- [ ] Tile spacing creates a comfortable touch target (≥ 44pt)
- [ ] Animation from tile pick-up to placement is smooth and satisfying

#### Subtask 2.4.3: Design Grammar Question Panel for Light Mode

Current issue: Question panel uses hardcoded dark purple background — appears as a dark bruise on light glass cards.

**Proposed light mode question panel:**
```
Background: caribbeanRecessed with a subtle gradient:
    top: caribbeanRecessed (#EDE4F8)
    bottom: caribbeanRecessed mixed with #C494FC @ 0.08
Border: caribbeanBorder, lineWidth 0.75
Inner top highlight: white @ 0.50 → 0.0 (bright top edge)
Text: caribbeanInk (question), caribbeanPlum (translation)
Corner radius: match parent card radius - 8
Shadow: inset caribbeanShadowSubtle (frame inverts — pushes panel IN)
```

**Acceptance Criteria:**
- [ ] Question panel reads as a "recessed" area within the card (depth illusion)
- [ ] Question text is the highest-contrast element in the card (immediately draws eye)
- [ ] Translation text is clearly secondary (lower contrast, lighter weight)
- [ ] Panel has a gentle top-edge highlight that integrates with the parent card's glass
- [ ] No dark purple / dark blue visible in light mode — all warm, light tones
- [ ] Panel corners are smooth and match the parent card's radius proportionally

---

### Story 2.5: Standardize Card Corner Radius & Spacing System

**As a** user,
**I want** consistent card shapes and spacing throughout light mode,
**So that** the app feels carefully designed, not assembled from random pieces.

**Story Points:** 3
**Priority:** P1

#### Subtask 2.5.1: Define Corner Radius Tokens

| Token | Value | Usage |
|---|---|---|
| `caribbeanRadiusSmall` | 8pt | Small badges, tags, status indicators |
| `caribbeanRadiusMedium` | 14pt | Answer options, tiles, small cards |
| `caribbeanRadiusLarge` | 20pt | Content cards, glass panels, main containers |
| `caribbeanRadiusXLarge` | 28pt | Hero cards, featured content, modals |

**Acceptance Criteria:**
- [ ] All cards and containers in the app use one of the 4 token values
- [ ] No hardcoded corner radius values remain in light-mode-visible code
- [ ] Nested cards have proportionally smaller radius than parents (visual nesting)
- [ ] Test: all cards at each radius look correct (no content clipping, no excessive rounding)

#### Subtask 2.5.2: Define Spacing Tokens for Card Content

| Token | Value | Usage |
|---|---|---|
| `caribbeanSpacingTight` | 6pt | Within compact elements (badge content, pill text) |
| `caribbeanSpacingBase` | 12pt | Default content padding, between related items |
| `caribbeanSpacingRelaxed` | 18pt | Between card sections, paragraph spacing |
| `caribbeanSpacingGenerous` | 24pt | Card-to-card spacing, section separators |

**Acceptance Criteria:**
- [ ] Consistent spacing between all card content elements
- [ ] Cards have generous internal padding (≥ `caribbeanSpacingBase`)
- [ ] Cards have comfortable external spacing (≥ `caribbeanSpacingGenerous`)
- [ ] Content doesn't feel cramped or crowded in any card
- [ ] Touch targets within cards maintain ≥ 44pt minimum with spacing

---

## Epic 3: Navigation, Tab Bar & App Shell

**Epic Owner:** UI Engineering Lead
**Priority:** P0 — The shell is ever-present; it defines the constant emotional tone
**Goal:** Transform the navigation chrome from functional-but-plain into a signature premium element that makes users feel the Caribbean warmth every moment they use the app.

### The Opportunity

The tab bar and navigation bar are visible 100% of the time. They're the frame around every masterpiece. Currently, the light mode shell is competent — pale lavender backgrounds, purple-tinted text — but it lacks the warmth, depth, and delight of the dark mode's glowing cosmic void. This is the highest-impact opportunity: improve the frame, and every screen inside it looks better.

---

### Story 3.1: Redesign Tab Bar for Premium Light Mode

**As a** user navigating between app sections,
**I want** the tab bar to feel warm, glassy, and elevated,
**So that** the navigation itself feels like a premium experience.

**Story Points:** 8
**Priority:** P0

#### Subtask 3.1.1: Redesign Tab Bar Background & Surface

**Current light mode tab bar:**
```
Background: solid rgb(248, 245, 253) — flat, opaque, plain
Shadow: caribbeanInk @ 0.08 (single line shadow)
Selected tint: #7c3aed
Unselected: rgba(100, 59, 161, 0.50)
```

**Proposed premium light mode tab bar:**
```
Layer 0: .regularMaterial @ 0.82 (allows background gradient to peek through)
Layer 1: Caribbean warm tint: linear horizontal
         #C494FC @ 0.04 (left) → #F472B6 @ 0.03 (center) → #FB923C @ 0.04 (right)
         (subtle rainbow undertone across the bar)
Layer 2: Top-edge luminance line:
         Rectangle height 0.5, white @ 0.45
         (crisp light catch simulating glass edge)
Layer 3: Inner top glow:
         white @ 0.15 → 0.0 (height 8pt, downward gradient)
         (soft light bleeding down from the edge)
Shadow: #C494FC @ 0.08, radius 12, y: -4 (shadow goes UP — bar is bottom-anchored)
         #F472B6 @ 0.03, radius 4, y: -2 (secondary warm shadow)
```

**Acceptance Criteria:**
- [ ] Tab bar shows hint of the Caribbean sunset gradient through the material
- [ ] Top edge has a bright, crisp line that defines the bar boundary
- [ ] Background is not pure opaque — some transparency reveals depth
- [ ] Tab bar feels like a frosted glass shelf the icons sit on
- [ ] Shadow is upward-facing (warm lavender), creating depth against the content above
- [ ] On the Dashboard tab (which has the full sunset background), the bar picks up warm tones
- [ ] On other tabs (which have the pale lavender background), the bar is subtler but still warm
- [ ] No visual jumping when switching between tabs with different background types

#### Subtask 3.1.2: Redesign Tab Bar Icon States

**Proposed icon states:**
```
Selected:
  - Icon fill: caribbeanGradientPrimary (lavender → rose gradient)
  - Icon weight: .semibold
  - Below icon: dot indicator, 4pt circle, caribbeanGradientPrimary fill
  - Label: caribbeanInk, weight .medium, tracking 0.3
  - Subtle glow: caribbeanGradientPrimary @ 0.12 behind icon, blur 4

Unselected:
  - Icon fill: caribbeanMist (dusty orchid)
  - Icon weight: .regular
  - No dot indicator
  - Label: caribbeanMist, weight .regular, tracking 0
  - No glow

Transition: 0.3s spring animation for color, scale (1.0 → 1.08 → 1.0 bounce on select)
```

**Acceptance Criteria:**
- [ ] Selected tab is immediately identifiable at a glance
- [ ] The gradient fill on selected icon creates a premium, "lit up" effect
- [ ] Dot indicator below selected icon provides secondary positional cue
- [ ] Unselected icons are clearly deemphasized but not invisible
- [ ] Selection animation has a playful bounce that feels alive
- [ ] Transition between tabs is smooth — no flicker or harsh switch
- [ ] All 4 tabs (Dashboard, Journey, Membership, Profile) tested with correct icon rendering
- [ ] Icons maintain crisp rendering at all animation states (no anti-aliasing artifacts)

#### Subtask 3.1.3: Add Active Tab Underline Glow

Add a glowing underline beneath the active tab for premium emphasis:

```swift
// Beneath the selected tab icon
Capsule()
    .fill(caribbeanGradientPrimary)
    .frame(width: 28, height: 3)
    .shadow(color: Color(hex: "#C494FC").opacity(0.35), radius: 6, y: 1)
    .offset(y: 2)
    .matchedGeometryEffect(id: "activeTab", in: tabNamespace)
```

**Acceptance Criteria:**
- [ ] Glowing capsule moves smoothly between tabs using `matchedGeometryEffect`
- [ ] Capsule has a gradient fill (lavender → rose)
- [ ] Shadow creates a glow effect below the capsule (light "reflecting" down onto the bar)
- [ ] Animation is fluid, 0.35s spring with slight overshoot
- [ ] Capsule width is proportional to icon width (not the full tab width)
- [ ] Glow doesn't bleed into adjacent tab icons

---

### Story 3.2: Redesign Navigation Bar for Premium Light Mode

**As a** user viewing any screen with a navigation bar,
**I want** the nav bar to feel like a natural extension of the premium experience,
**So that** the app title and back navigation enhance rather than detract from the content.

**Story Points:** 5
**Priority:** P0

#### Subtask 3.2.1: Enhance LumenLingoNavBar Light Mode

**Current light mode nav bar:**
```
Background: solid rgb(248, 245, 253)
Title: pink → purple gradient (same both modes)
Subtitle: caribbeanPlum
Bottom separator: caribbeanInk @ 0.06
```

**Proposed premium light mode nav bar:**
```
Background: .regularMaterial @ 0.75 (translucent)
Caribbean tint: horizontal gradient #C494FC @ 0.03 → #F472B6 @ 0.02
Bottom edge:
  - Gradient line (height 1): caribbeanGradientPrimary @ 0.15
    (replaces the plain separator with a warm gradient stroke)
  - Below the line: caribbeanGradientPrimary @ 0.06, blur 4, height 4
    (soft glow below the line, simulating light bleeding down)
Title shadow: caribbeanPlum @ 0.10, radius 8
  (gives the gradient title a warm backlight effect)
```

**Acceptance Criteria:**
- [ ] Nav bar has subtle translucency — content scrolling beneath is faintly visible
- [ ] Bottom edge has a warm gradient line (not a plain grey separator)
- [ ] Gradient line has a soft glow below it, creating depth
- [ ] Title text gradient has a faint warm shadow/glow behind it
- [ ] Subtitle text in `caribbeanPlum` maintains excellent readability
- [ ] Nav bar scrolled state (content behind it) looks correct with material blur applied
- [ ] Large title → small title transition (if applicable) maintains premium treatment

#### Subtask 3.2.2: Redesign Back Button & Navigation Controls

**Proposed light mode navigation controls:**
```
Back button:
  - chevron: caribbeanPlum (warm, not system blue)
  - text: caribbeanPlum
  - pressed state: caribbeanHover background pill (rounded rectangle, appears on press)

Right bar buttons (if any):
  - icon: caribbeanIconSecondary
  - pressed: caribbeanHover background circle
  - badge (notification dot): caribbeanGradientSecondary (rose → amber)
```

**Acceptance Criteria:**
- [ ] Back button uses warm Caribbean colors, not default iOS system blue
- [ ] Pressed state shows a subtle background pill for tactile feedback
- [ ] All navigation controls have consistent warm Caribbean styling
- [ ] Badge/notification dots use gradient fill for premium look
- [ ] Controls meet ≥ 44pt touch target requirement

---

### Story 3.3: Design Light Mode Status Bar & Safe Area Treatment

**As a** user,
**I want** the status bar area to feel integrated with the nav bar,
**So that** there's no jarring line between system chrome and app content.

**Story Points:** 3
**Priority:** P1

#### Subtask 3.3.1: Status Bar Colour Coordination

**Acceptance Criteria:**
- [ ] Status bar text uses dark appearance (`.statusBarStyle = .darkContent`) for readability on light background
- [ ] Safe area background matches nav bar material treatment — no color discontinuity at the notch/dynamic island border
- [ ] On screens with the Caribbean sunset background (Dashboard), status bar icons remain readable
- [ ] Scroll-to-top behavior works correctly with the new nav bar material

#### Subtask 3.3.2: Bottom Safe Area Treatment

**Acceptance Criteria:**
- [ ] Bottom safe area (below tab bar, home indicator region) matches tab bar background treatment
- [ ] No harsh line between tab bar and home indicator area
- [ ] The warm material extends fully into the safe area
- [ ] Home indicator is visible against the tab bar background

---

### Story 3.4: Design Light Mode Sheet & Modal Presentation

**As a** user opening any bottom sheet or modal in light mode,
**I want** sheets to feel like they're rising from a warm surface,
**So that** the presentation itself feels premium and intentional.

**Story Points:** 5
**Priority:** P1

#### Subtask 3.4.1: Design Sheet Background & Dimming Layer

**Proposed light mode sheet treatment:**
```
Dimming layer (behind sheet):
  - Not black — warm: caribbeanInk @ 0.25 (deep aubergine tint)
  - Subtle gradient: top darker, bottom lighter (light comes from below)

Sheet background:
  - caribbeanCanvas base
  - .regularMaterial @ 0.88
  - Top edge: handle pill in caribbeanMist @ 0.40
  - Top corner radius: 20pt
  - Inner top glow: white → transparent (height 8pt)
  - Shadow (behind sheet): #C494FC @ 0.15, radius 24, y: -8
```

**Acceptance Criteria:**
- [ ] Sheet dimming layer is warm (aubergine-tinted), not cold black
- [ ] Sheet surface matches overall Caribbean canvas warmth
- [ ] Handle pill is visible and warm-tinted (not grey)
- [ ] Inner top glow creates a "caught the light" effect on the sheet edge
- [ ] Shadow behind sheet creates depth, making it feel elevated above the dimmed content
- [ ] Sheet dismiss gesture (swipe down) animation is smooth
- [ ] Content behind the sheet is visible through the warm dimming (not fully obscured)

#### Subtask 3.4.2: Design Full-Screen Modal Light Mode Treatment

**Acceptance Criteria:**
- [ ] Full-screen modals use `caribbeanCanvas` base with nav bar treatment from Story 3.2
- [ ] Close button (X) uses `caribbeanIconSecondary` with `caribbeanHover` background circle
- [ ] Transition animation: scale up from 0.94 with opacity fade (gentle "rising" feel)
- [ ] Modal doesn't feel disconnected from the main app — same color family, same warmth

---

### Story 3.5: Design Light Mode Haptic & Audio Integration Points

**As a** user navigating the app in light mode,
**I want** haptic feedback and UI sounds that complement the visual warmth,
**So that** the premium experience extends beyond just sight.

**Story Points:** 3
**Priority:** P2

#### Subtask 3.5.1: Define Haptic Feedback Map for Navigation

| Action | Haptic Type | Notes |
|---|---|---|
| Tab selection | `.selection` | Light tap acknowledging change |
| Sheet dismiss | `.soft` | Gentle thump as sheet settles |
| Back navigation | `.light` | Barely-there confirmation |
| Card interaction | `.medium` | Satisfying tile-press feel |
| Error state | `.notificationError` | Standard iOS error — dignified |
| Achievement | `.notificationSuccess` + `.rigid` | Double-tap celebration |

**Acceptance Criteria:**
- [ ] All navigation haptics fire consistently (no missed triggers)
- [ ] Haptic intensity matches visual feedback intensity
- [ ] Haptics respect system haptic settings (silent mode, etc.)
- [ ] No haptic on scroll or passive viewing — only on user-initiated actions

---

## Epic 4: Dashboard — The First Impression

**Epic Owner:** Product Design Lead
**Priority:** P0 — The dashboard is the first screen users see; it defines their emotional benchmark
**Goal:** Transform the Caribbean light mode dashboard from a competent stats display into a breathtaking "golden hour" experience that makes users pause and admire before they start learning.

### The Emotional Target

When a user opens the app in light mode, they should feel like stepping onto a sun-warmed terrace overlooking the Caribbean Sea. The background breathes with warm gradients. Stats float on pearlescent cards. The greeting feels personal. Every element has been placed with the care of a luxury resort designer.

---

### Story 4.1: Redesign Dashboard Greeting & Hero Section

**As a** returning user opening the app,
**I want** the greeting to feel warm, personal, and inviting,
**So that** I feel welcomed back to my learning journey every time.

**Story Points:** 5
**Priority:** P0

#### Subtask 4.1.1: Enhance Greeting Typography & Layout

**Current light mode greeting:**
```
"Good morning/afternoon/evening, [Name]" — caribbeanInk text
Subtitle — caribbeanPlum text
Standard font sizes, standard spacing
```

**Proposed premium light mode greeting:**
```
Time-of-day greeting:
  - Font: .title2 weight .bold
  - Color: caribbeanInk
  - Letter spacing: 0.3pt (airy, luxurious feel)

User name:
  - Font: .largeTitle weight .bold
  - Color: caribbeanGradientSunset (lavender → rose → amber gradient text)
  - Shadow: caribbeanPlum @ 0.08, radius 4 (warm backlight)

Subtitle (streak/motivation):
  - Font: .callout weight .regular
  - Color: caribbeanPlum
  - Italic style for motivational phrases

Spacing:
  - 4pt between greeting and name
  - 8pt between name and subtitle
  - 24pt below subtitle before stats
```

**Acceptance Criteria:**
- [ ] User's name renders in Caribbean sunset gradient text (warm, premium)
- [ ] Gradient text has a subtle warm shadow that makes letters glow
- [ ] Greeting line adapts correctly for morning/afternoon/evening
- [ ] Subtitle shows streak count or motivational text in warm italic
- [ ] Typography hierarchy is clear: greeting (medium), name (large/bold), subtitle (small/calm)
- [ ] Layout has generous vertical spacing — nothing feels cramped
- [ ] Works with long names (15+ characters) without truncation breaking the layout

#### Subtask 4.1.2: Add Time-of-Day Ambient Accent

Enhance the greeting area with a subtle time-of-day visual accent:

```
Morning (5am-12pm):
  - Accent orb: radialGradient #FDE68A → #FB923C @ 0.06
    (warm golden sun reference, top-right corner, radius 80)

Afternoon (12pm-5pm):
  - Accent orb: radialGradient #F472B6 → #C494FC @ 0.05
    (full Caribbean warmth, center-right, radius 100)

Evening (5pm-9pm):
  - Accent orb: radialGradient #FB923C → #F472B6 → #C494FC @ 0.07
    (sunset glow, bottom-right, radius 120)

Night (9pm-5am):
  - Accent orb: radialGradient #C494FC → #A78BFA @ 0.04
    (twilight lavender, center, radius 90)
```

**Acceptance Criteria:**
- [ ] Ambient accent changes based on time of day — providing visual variety
- [ ] Accent is extremely subtle — a background warmth, not a visible circle
- [ ] Users who open the app at different times perceive slight visual freshness
- [ ] Accent doesn't interfere with text readability
- [ ] Graceful transition if user keeps app open across time boundaries (e.g., 4:59 → 5:00 PM)

---

### Story 4.2: Redesign Dashboard Stat Cards

**As a** user checking my learning progress,
**I want** stat cards to feel like polished gemstones — each one warm, distinct, and satisfying to look at,
**So that** my progress data feels valued and celebrated.

**Story Points:** 8
**Priority:** P0

#### Subtask 4.2.1: Redesign Individual Stat Card Surface

**Current light mode stat card:**
```
Background: .white.opacity(0.45)
Border: caribbeanMist @ 0.15
Text: caribbeanInk (value), caribbeanPlum (label)
— Flat, minimal, forgettable
```

**Proposed premium light mode stat card:**
```
Layer 0: Base — caribbeanElevated (white @ 0.72)
Layer 1: .thinMaterial @ 0.30 (subtle frosted glass)
Layer 2: Stat-specific accent tint — each stat gets its own warm accent:
         Streak: #FDE68A @ 0.06 (golden — streaks are precious)
         Words Learned: #A78BFA @ 0.06 (violet — knowledge is deep)
         Accuracy: #34D399 @ 0.06 (emerald — correctness is fresh)
         Time: #F472B6 @ 0.06 (rose — time is romantic)
Layer 3: Top-edge highlight: white @ 0.40 → 0.0 (height 3pt)
Layer 4: Stat icon area — small circle with stat-accent gradient @ 0.15
Border: stat-accent @ 0.18, lineWidth 0.5
Shadow: stat-accent @ 0.08, radius 8, y: 3
```

**Acceptance Criteria:**
- [ ] Each stat card has a unique, warm color tint that gives it personality
- [ ] Cards are visually distinct from each other (golden streak ≠ violet knowledge ≠ green accuracy)
- [ ] Top-edge highlight creates a "caught the light" premium signal on each card
- [ ] Icons sit in a tinted circle that echoes the card's accent color
- [ ] Stat values are large, bold, and immediately readable (`caribbeanInk`)
- [ ] Labels are clearly secondary (`caribbeanPlum`)
- [ ] Cards have individual warm-colored shadows (not generic grey)
- [ ] Grid of 4 stat cards creates a harmonious "gem collection" visual

#### Subtask 4.2.2: Add Stat Value Animation

When stat values change or on first appearance, animate them:

```
Number animation:
  - Count-up from 0 to value over 0.6s, ease-out curve
  - During count, text color pulses stat-accent color briefly
  - Final value "lands" with a subtle scale bounce (1.0 → 1.05 → 1.0)

First appearance:
  - Card fades in with 0.1s stagger per card (left → right, top → bottom)
  - Each card scales from 0.92 → 1.0 with spring animation
  - Value count-up starts 0.2s after card appears
```

**Acceptance Criteria:**
- [ ] Stat values count up smoothly when dashboard first loads
- [ ] Stagger animation creates a satisfying "cascade" effect
- [ ] Number formatting is correct during animation (no floating point artifacts)
- [ ] Animation respects `reduceMotion` accessibility setting (jump to final value instead)
- [ ] Values that haven't changed since last visit still animate on fresh load (user delight)
- [ ] Performance: animation is smooth 60fps with no frame drops

#### Subtask 4.2.3: Design Compact Stat Badge for Collapsed State

When stats are collapsed (collapse button tapped), compact badges should look premium:

**Current compact badge:**
```
Background: caribbeanMist @ 0.1 capsule — minimal, pale
```

**Proposed premium compact badge:**
```
Background: caribbeanElevated capsule
Border: stat-accent @ 0.15, lineWidth 0.5
Icon: stat-accent gradient fill (tiny, 12pt)
Value: caribbeanInk, weight .semibold
Label: hidden (space savings)
Shadow: stat-accent @ 0.04, radius 3, y: 1
Spacing: 4pt between icon and value, 8pt horizontal padding
```

**Acceptance Criteria:**
- [ ] Compact badges are small but legible and premium-looking
- [ ] Each badge retains its stat-specific accent color
- [ ] Badges are arranged in a horizontal flow with reasonable spacing
- [ ] The collapse/expand transition animates smoothly (0.35s spring)
- [ ] Expanded → collapsed doesn't feel like "losing quality" — badge form is still premium

---

### Story 4.3: Redesign "Choose Your Adventure" Game Selection Cards

**As a** user choosing a practice activity,
**I want** game cards to look exciting, inviting, and clearly distinct from each other,
**So that** I'm motivated to start practicing and can quickly find the game I want.

**Story Points:** 8
**Priority:** P0

#### Subtask 4.3.1: Redesign Game Selection Card Surface

**Proposed premium light mode game card:**
```
Layer 0: caribbeanElevated (white @ 0.72)
Layer 1: .thinMaterial @ 0.25
Layer 2: Game-specific gradient tint:
         FlashCards: [#A78BFA → #C494FC] @ 0.08 topLeading → bottomTrailing
         Grammar: [#34D399 → #059669] @ 0.08
         WordBuilder: [#F472B6 → #FB923C] @ 0.08
         (each game has a signature color palette)
Layer 3: Top highlight band: white @ 0.35 → 0.0 (3pt)
Layer 4: Game icon area — left side, 48pt gradient circle:
         Fill: game-specific gradient
         Icon: white SF Symbol
         Shadow: game gradient color @ 0.15, radius 8
Layer 5: Border: game gradient @ 0.15 → 0.08 (fading vertically)
Shadow: game gradient color @ 0.10, radius 14, y: 4
        game gradient color @ 0.04, radius 4, y: 2
```

**Acceptance Criteria:**
- [ ] Each game card has a unique, warm color identity (purple FlashCards, green Grammar, pink-orange WordBuilder)
- [ ] Game icon sits in a glowing gradient circle — premium, eye-catching
- [ ] Game title is bold and immediately readable in `caribbeanInk`
- [ ] Game description is secondary in `caribbeanPlum`
- [ ] Card surface has visible depth (not flat) — top highlight + shadow create dimension
- [ ] Cards feel "tappable" — the design invites interaction
- [ ] Game-specific gradients are harmonious when viewed side by side
- [ ] Card hover/pressed state darkens slightly (caribbeanHover) with scale 0.98

#### Subtask 4.3.2: Add Game Card Progress Indicator

Each game card should show the user's recent progress:

```
Bottom-right area of game card:
  - Mini progress ring (24pt diameter)
  - Track: game-accent @ 0.10
  - Fill: game-specific gradient
  - Center: percentage text, caribbeanMist, .caption font
  - Ring stroke: 3pt with rounded caps

Below ring (or alongside):
  - "12 words today" or "3 streak" — caribbeanMist, .caption2
```

**Acceptance Criteria:**
- [ ] Each game card shows a mini progress ring with today's progress
- [ ] Progress ring uses the game's signature color gradient
- [ ] Ring animation: fills clockwise from 0% to current over 0.8s on appear
- [ ] Progress text is small but readable
- [ ] Ring doesn't dominate the card — it's a secondary accent
- [ ] Cards with no progress today show an empty ring (0%) with a motivational micro-copy

#### Subtask 4.3.3: Design "New" / "Recommended" Badge for Game Cards

For games the algorithm recommends or new games added:

```
Badge position: top-right corner of card, overlapping card border
Badge style:
  - Capsule shape
  - Fill: caribbeanGradientWarm (golden → amber → rose)
  - Text: white, .caption2, weight .bold, uppercased
  - Shadow: #FB923C @ 0.20, radius 6
  - Content: "NEW" or "✦ FOR YOU" or "🔥 HOT STREAK"
```

**Acceptance Criteria:**
- [ ] Badge is visually prominent without being obnoxious
- [ ] Warm gradient fill makes badge feel celebratory
- [ ] Badge text is crisp and readable at .caption2 size
- [ ] Badge has a soft shadow to float above the card surface
- [ ] Multiple badges can exist side by side if needed
- [ ] Badge appears with a scale-up spring animation on first load

---

### Story 4.4: Redesign Recent Activity Section

**As a** user reviewing my recent practice sessions,
**I want** the activity feed to feel like a warm journal of my progress,
**So that** I feel proud of the work I've done and motivated to continue.

**Story Points:** 5
**Priority:** P1

#### Subtask 4.4.1: Redesign Activity Row

**Current light mode activity row:**
```
Game name: caribbeanInk
Metadata: caribbeanPlum  
Chevron: caribbeanMist
— Simple text rows, minimal visual identity
```

**Proposed premium light mode activity row:**
```
Leading element:
  - Game icon in a 32pt circle
  - Fill: game-specific gradient @ 0.12
  - Icon: game-specific color, 14pt

Content:
  - Game name: caribbeanInk, .callout weight .semibold
  - Score/result: caribbeanPlum, .subheadline
  - Timestamp: caribbeanMist, .caption
  - Optional: "+12 words" badge in caribbeanSuccessSoft capsule

Trailing element:
  - Score badge or chevron
  - Score: caribbeanInk on stat-accent-soft capsule
  - Chevron: caribbeanMist

Separator:
  - caribbeanBorderSubtle (lavender @ 0.10), indented from leading
  
Row background:
  - Default: transparent
  - Pressed: caribbeanHover
```

**Acceptance Criteria:**
- [ ] Each activity row has a game-colored icon that provides instant visual identification
- [ ] Activity rows feel like "journal entries" — warm, personal, meaningful
- [ ] Score badges use warm tints that feel celebratory even for average scores
- [ ] Timestamp is gentle and unobtrusive
- [ ] Separators are warm lavender (not harsh grey lines)
- [ ] Pressed state provides subtle feedback
- [ ] Row spacing is generous (≥ 56pt height) for comfortable reading

#### Subtask 4.4.2: Redesign Empty State for Activities

**Current:** Arrow icon `.white.opacity(0.4)` — invisible in light mode.

**Proposed premium empty state:**
```
Icon: SF Symbol "sparkles" or "star.fill"
  - Rendered in caribbeanGradientWarm gradient fill
  - Size: 48pt
  - Gentle pulse animation (scale 1.0 → 1.06, opacity 0.8 → 1.0, 3s cycle)

Title: "Your Journey Begins Here"
  - caribbeanInk, .title3 weight .bold

Subtitle: "Start a practice session and watch your progress unfold"
  - caribbeanPlum, .callout weight .regular

CTA: "Start Learning" button
  - caribbeanGradientPrimary fill
  - White text, weight .semibold
  - caribbeanShadowGlow
  - Scale press effect
```

**Acceptance Criteria:**
- [ ] Empty state icon is visible and warm (NOT white opacity on white)
- [ ] Icon has a gentle breathing animation that draws the eye
- [ ] Copy is motivational and warm — not clinical or placeholder-feeling
- [ ] CTA button is the clear focal point with gradient and glow
- [ ] Empty state looks intentionally designed, not like a missing-data fallback
- [ ] Layout is centered with generous spacing

---

### Story 4.5: Redesign Dashboard Scroll & Section Transitions

**As a** user scrolling through the dashboard,
**I want** smooth, warm transitions between sections,
**So that** the experience feels fluid and continuous, not chunky.

**Story Points:** 3
**Priority:** P1

#### Subtask 4.5.1: Design Section Headers for Light Mode

**Proposed section header style:**
```
Title: caribbeanInk, .headline weight .bold, tracking 0.2
Accent: 3pt line before title (leading edge), caribbeanGradientPrimary, height 16pt
Subtitle (if any): caribbeanPlum, .subheadline weight .regular
Spacing: 24pt above header, 12pt below
```

**Acceptance Criteria:**
- [ ] Section headers have a small gradient accent marker for visual interest
- [ ] Headers clearly delineate sections without heavy divider lines
- [ ] Typography is bold enough to serve as a landmark while scrolling
- [ ] Spacing above headers is generous (section breathing room)
- [ ] Headers animate in when scrolling (fade up from 0.5 opacity, 8pt offset)

#### Subtask 4.5.2: Add Parallax Depth to Dashboard Background

On the Dashboard tab (with the full Caribbean sunset background):

```
Parallax layers:
  - Background gradient: moves at 0.3x scroll speed (parallax behind content)
  - Breathing orbs: move at 0.5x scroll speed
  - Content: moves at 1.0x (normal)
  - Result: scrolling creates a subtle depth illusion
```

**Acceptance Criteria:**
- [ ] Background gradient shifts subtly as user scrolls — creating depth
- [ ] Effect is very subtle — perceptible subconsciously, not consciously distracting
- [ ] Parallax doesn't affect scroll performance (< 1ms per frame additional work)
- [ ] Parallax disabled when `reduceMotion` is enabled
- [ ] Pull-to-refresh interaction works correctly with parallax layers

---

## Epic 5: Practice Screens — FlashCards, WordBuilder, Grammar

**Epic Owner:** Game Design Lead
**Priority:** P0 — Practice screens are the core product; this is where users spend 80% of their time
**Goal:** Make every practice session in light mode feel like a warm, focused, luxurious learning experience where game elements are crystal-clear, feedback is instant and beautiful, and the user is in a state of pleasant flow.

### The Core Problem

Practice screens have the worst light mode issues. FlashCards have invisible loading spinners and ghost footer pills. WordBuilder has invisible letter tiles, slots, and clue text. Grammar has dark purple panels bruising light backgrounds. These aren't cosmetic issues — they're usability failures that make the app feel broken.

### The Target

Each practice screen should feel like a premium card game on a sunlit table. Cards, tiles, and options are tactile and clear. Feedback (correct/wrong) is warm and encouraging. Progress is always visible. The user never squints, never wonders what to tap, never loses their place.

---

### Story 5.1: FlashCards — Complete Light Mode Redesign

**As a** user practicing vocabulary with flashcards in light mode,
**I want** every card state, animation, and feedback element to be beautiful and clear,
**So that** the flashcard experience is just as premium as dark mode.

**Story Points:** 13
**Priority:** P0

#### Subtask 5.1.1: Fix Critical Visibility Bugs

Immediate fixes for broken elements:

| Element | Bug | Fix |
|---|---|---|
| Loading ProgressView | `.tint(.white)` — invisible | `.tint(isDark ? .white : .caribbeanPlum)` |
| Footer pill background | `.white.opacity(0.12)` — invisible | `isDark ? .white.opacity(0.12) : Color.caribbeanRecessed` |
| Footer pill border | `.white.opacity(0.20)` — invisible | `isDark ? .white.opacity(0.20) : Color.caribbeanBorder` |
| Capsule divider | `.white.opacity(0.45)` — faint | `isDark ? .white.opacity(0.45) : Color.caribbeanMist.opacity(0.35)` |

**Acceptance Criteria:**
- [ ] Loading spinner is visually prominent in light mode — user knows content is loading
- [ ] Footer pill showing word pairs is clearly visible with border definition
- [ ] Capsule divider between card sections is visible as a warm separator
- [ ] All fixes are conditional on `isDark` — dark mode remains untouched
- [ ] Each fix verified with screenshot on device (not just preview)

#### Subtask 5.1.2: Redesign FlashCard Front Face for Light Mode

**Proposed light mode card front:**
```
Card surface: Premium LiquidGlassCard treatment (from Story 2.2)

Word display:
  - Font: .largeTitle weight .bold
  - Color: gradient [#6366f1, #a855f7, #ec4899] (keep — excellent)
  - Shadow: #a855f7 @ 0.18, radius 6 (slightly stronger for light surface)
  - Letter spacing: 0.5pt (airy, premium)

Example sentence:
  - Font: .body weight .regular, italic
  - Color: caribbeanPlum
  - Container: caribbeanRecessed pill with caribbeanBorderSubtle
  - Padding: 10pt horizontal, 6pt vertical

"Tap to reveal" hint:
  - Font: .caption weight .medium
  - Color: caribbeanMist
  - Icon: hand.tap SF Symbol, caribbeanMist
  - Gentle pulse animation (opacity 0.5 → 1.0, 2s cycle)

Card decoration:
  - Subtle watermark pattern: small dots in caribbeanMist @ 0.03
    arranged in a geometric pattern (Mediterranean tile reference)
  - Only visible at close inspection — subliminal premium signal
```

**Acceptance Criteria:**
- [ ] Word text is the clear hero — large, gradient, glowing
- [ ] Example sentence is contained in a recessed pill (visually distinct from card surface)
- [ ] "Tap to reveal" hint has a gentle pulse animation drawing attention
- [ ] Card front has subtle decorative detail that rewards close inspection
- [ ] Overall composition has generous white space — content is not cramped
- [ ] Card feels "ready to flip" — the design invites the tap gesture

#### Subtask 5.1.3: Redesign FlashCard Back Face for Light Mode

**Proposed light mode card back:**
```
Card surface: Premium LiquidGlassCard (same as front — consistency)

Translation word:
  - Font: .largeTitle weight .bold
  - Color: gradient [#059669, #0891b2, #7c3aed] (keep — complementary to front)
  - Shadow: #0891b2 @ 0.18, radius 6

Source → Target reference:
  - Container: horizontal pill layout
  - Source word: caribbeanPlum, weight .medium
  - Arrow: caribbeanMist, SF Symbol "arrow.right"
  - Target word: caribbeanInk, weight .semibold
  - Pill background: caribbeanRecessed
  - Pill border: caribbeanBorderSubtle

Example sentence:
  - Same treatment as front — caribbeanPlum, recessed pill

Difficulty rating area:
  - Centered at card bottom
  - 4 buttons: "Easy" "Good" "Hard" "Again"
  - Each button: caribbeanElevated surface, caribbeanBorder
  - Active/selected: button-specific accent color fill at 0.15
  - Easy: emerald tint, Good: blue tint, Hard: amber tint, Again: rose tint
```

**Acceptance Criteria:**
- [ ] Translation reveals with a satisfying visual difference from front (green vs purple gradient)
- [ ] Source → Target word pair is in a clearly defined pill container
- [ ] Arrow icon visually connects the two words
- [ ] Difficulty rating buttons are distinct, tappable, and color-coded
- [ ] Button pressed states provide immediate visual feedback
- [ ] The "reveal" feeling is preserved — back face should feel like a reward

#### Subtask 5.1.4: Design FlashCard Flip Animation for Light Mode

**Acceptance Criteria:**
- [ ] Card flip is a 3D Y-axis rotation (0° → 90° → 0°, with surface swap at 90°)
- [ ] During flip, card edge catches light — thin white edge glow visible at 90° angle
- [ ] Flip duration: 0.5s with ease-in-out-back curve (slight overshoot at end)
- [ ] Shadow adjusts during flip — compresses at 90° (card perpendicular), expands after
- [ ] No frame during the flip where the card looks flat/broken/glitchy
- [ ] Performance: flip animation is GPU-accelerated, no frame drops on older devices

#### Subtask 5.1.5: Design FlashCard Progress Bar and Score Display

**Proposed progress indicators:**
```
Progress bar (top of screen):
  - Track: caribbeanRecessed, height 4pt, full width
  - Fill: caribbeanGradientPrimary, rounded caps
  - Shadow on fill: caribbeanGradientPrimary color @ 0.20, radius 3, y: 1
  - Glow effect: fill color @ 0.08 extends 2pt above and below

Score display (in GameHeader):
  - Score value: caribbeanInk, weight .bold
  - Score label: caribbeanMist, weight .regular
  - Streak fire emoji: rendered at 1.2x size with warm glow behind
  - Card counter: "12/30" in caribbeanMist capsule with caribbeanBorderSubtle
```

**Acceptance Criteria:**
- [ ] Progress bar shows clear advancement with gradient fill
- [ ] Progress bar has a subtle glow that makes it feel alive
- [ ] Score display is immediately readable at a glance
- [ ] Streak counter has an extra touch of warmth (glow behind the emoji)
- [ ] Card counter clearly shows position in the deck
- [ ] Progress bar fill animation is smooth and satisfying

---

### Story 5.2: WordBuilder — Complete Light Mode Redesign

**As a** user building words from letter tiles in light mode,
**I want** every tile, slot, and interaction to be crystal clear and satisfying,
**So that** the word-building experience is fun and tactile.

**Story Points:** 13
**Priority:** P0

#### Subtask 5.2.1: Fix Critical Visibility Bugs

| Element | Bug | Fix |
|---|---|---|
| Clue gradient | `.white` in middle of gradient | `isDark ? .white : caribbeanInk.opacity(0.7)` |
| Empty slot background | `.white.opacity(0.04)` | `isDark ? ... : caribbeanRecessed` |
| Slot border inactive | `.white.opacity(0.08)` | `isDark ? ... : caribbeanBorderSubtle` |
| Letter bank background | `.white.opacity(0.04)` | `isDark ? ... : caribbeanRecessed.opacity(0.5)` |
| Letter bank stroke | `.white.opacity(0.06)` | `isDark ? ... : caribbeanBorderSubtle` |
| Placeholder tiles | `.white.opacity(0.03)` fill | `isDark ? ... : caribbeanRecessed.opacity(0.35)` |
| Tile overlay | `.white.opacity(0.15)` | `isDark ? ... : caribbeanBorder` |
| Top reflection band | `.white.opacity(0.10)` | `isDark ? ... : white.opacity(0.35)` |

**Acceptance Criteria:**
- [ ] All 8 visibility bugs fixed with conditional light mode values
- [ ] Every element visible against the Caribbean background
- [ ] Empty slots clearly read as "place letter here" containers
- [ ] Letter bank is a defined area with visible boundaries
- [ ] No white-on-white issues remaining in the entire WordBuilder view
- [ ] Dark mode completely unchanged

#### Subtask 5.2.2: Redesign Letter Tile for Light Mode

**Proposed premium light mode letter tile:**
```
Resting state:
  - Base: caribbeanElevated fill, cornerRadius 10
  - Material: .thinMaterial @ 0.25
  - Top highlight: white @ 0.45 → 0.0 (height 2pt) — "caught the light" edge
  - Border: caribbeanBorder (lavender @ 0.20)
  - Text: caribbeanInk, .title3 weight .bold
  - Shadow: #C494FC @ 0.08, radius 6, y: 3

Pressed state:
  - Scale: 0.93
  - Background: caribbeanHover
  - Shadow: compressed — radius 3, y: 1
  - Border: caribbeanBorderFocus
  - Haptic: .light

Placed state (in answer slot):
  - Background: caribbeanSelected (#C494FC @ 0.18)
  - Border: caribbeanBorderFocus (#A855F7 @ 0.45)
  - Text: caribbeanInk, weight .bold
  - No shadow (tile is "embedded" in slot)

Hint state:
  - Background: caribbeanWarningSoft (#D97706 @ 0.10) — warm golden glow
  - Border: #FDE68A @ 0.40
  - Pulsing glow: #FDE68A @ 0.12, radius 8 (2s cycle breathing)
  - Text: caribbeanInk

Disabled state:
  - Background: caribbeanDisabled
  - Border: caribbeanBorderSubtle
  - Text: caribbeanMist
  - Opacity: 0.6
```

**Acceptance Criteria:**
- [ ] Resting tiles look like physical, tactile objects that invite tapping
- [ ] Pressed state provides immediate, satisfying visual and haptic feedback
- [ ] Placed tiles look embedded in their slots, distinctly different from resting tiles
- [ ] Hint tiles draw the eye with warm golden pulsing glow
- [ ] Disabled tiles clearly communicate "not available" without being ugly
- [ ] All 5 states have smooth transitions between them (0.2s spring)
- [ ] Tiles are large enough for comfortable tapping (≥ 44pt by 44pt)

#### Subtask 5.2.3: Redesign Answer Slot Area

**Proposed premium light mode answer slots:**
```
Container:
  - Background: caribbeanRecessed.opacity(0.5) fill, cornerRadius 16
  - Border: caribbeanBorderSubtle, lineWidth 0.5
  - Internal padding: 8pt

Empty slot:
  - Background: caribbeanRecessed (#EDE4F8)
  - Border: caribbeanBorderSubtle, dashed (3pt dash, 3pt gap)
  - Size: matched to tile dimensions
  - Center content: slot number, caribbeanMist, .caption2

Filled slot:
  - Background: caribbeanSelected
  - Border: caribbeanBorder, solid
  - Tile letter: caribbeanInk, .title3 weight .bold
  - Tappable (to remove tile back to bank)

Correct completion:
  - All slots: caribbeanSuccessSoft background
  - Border: caribbeanSuccess, lineWidth 1.5
  - Confetti burst animation from center (warm colors: gold, rose, lavender)
  - Scale pulse: 1.0 → 1.03 → 1.0

Wrong completion:
  - Shake animation (horizontal, 3 cycles, 8pt amplitude)
  - Brief caribbeanErrorSoft flash (0.3s)
  - Return to normal state
```

**Acceptance Criteria:**
- [ ] Answer area is a clearly defined container distinct from the letter bank
- [ ] Empty slots have dashed borders that communicate "drop zone"
- [ ] Filled slots show letters clearly with a "placed" visual state
- [ ] Correct completion celebration is warm, brief, and satisfying
- [ ] Wrong completion gives clear feedback without being punishing
- [ ] Slot layout adapts cleanly to different word lengths (4-12 letters)

#### Subtask 5.2.4: Redesign Clue Section for Light Mode

**Proposed premium light mode clue:**
```
Container: GlassCardBackground with game accent color (#FB923C)
  - Caribbean treatment (from Epic 2)

Clue text:
  - Font: .title2 weight .semibold
  - Color: caribbeanInk (not a gradient — legibility first)
  - Shadow: #FB923C @ 0.08, radius 4 (warm amber glow)

Hint text:
  - Font: .callout weight .regular
  - Color: caribbeanPlum

Category badge:
  - Capsule background: game accent @ 0.12
  - Text: game accent color, .caption weight .semibold
  - Border: game accent @ 0.20, lineWidth 0.5
```

**Acceptance Criteria:**
- [ ] Clue text is immediately readable — no invisible white in gradients
- [ ] Clue container has warm amber accent tint from game color
- [ ] Hint text provides gentle secondary guidance
- [ ] Category badge gives context without dominating
- [ ] Overall clue section feels like a "mission briefing" — clear, inviting, warm

#### Subtask 5.2.5: Design Action Buttons (Undo, Clear, Hint) for Light Mode

**Proposed light mode action buttons:**
```
Undo button:
  - Icon: caribbeanPlum, "arrow.uturn.backward"
  - Background: caribbeanElevated
  - Border: caribbeanBorder
  - Pressed: caribbeanHover, scale 0.95

Clear button:
  - Icon: caribbeanPlum, "xmark.circle"
  - Background: caribbeanElevated
  - Border: caribbeanBorder
  - Pressed: caribbeanErrorSoft tint, scale 0.95

Hint button:
  - Icon: caribbeanGradientWarm gradient fill, "lightbulb.fill"
  - Background: caribbeanElevated with #FDE68A @ 0.06 tint
  - Border: #FDE68A @ 0.25
  - Pressed: golden glow expands, scale 0.95
  - Shadow: #FDE68A @ 0.10, radius 6

All buttons:
  - Corner radius: caribbeanRadiusMedium (14pt)
  - Size: 44pt minimum touch target
  - Label: caribbeanPlum, .caption weight .medium
```

**Acceptance Criteria:**
- [ ] All three action buttons are clearly visible and distinct
- [ ] Hint button has extra visual emphasis (golden tint, warm glow) — it's assistive and should feel inviting
- [ ] Clear button pressed state has a red warning tint — destructive action signal
- [ ] Undo button is neutral — routine action, no special treatment needed
- [ ] Button labels below icons are readable
- [ ] Buttons have consistent sizing and spacing in their row/stack

---

### Story 5.3: Grammar Practice — Complete Light Mode Redesign

**As a** user practicing grammar in light mode,
**I want** questions, answers, and explanations to be clearly presented and beautifully designed,
**So that** learning grammar feels elegant rather than clinical.

**Story Points:** 13
**Priority:** P0

#### Subtask 5.3.1: Fix Critical Visibility Bugs

| Element | Bug | Fix |
|---|---|---|
| Question panel bg | Hardcoded dark purple `#2E1065` | Light mode: caribbeanRecessed with gradient tint |
| Question text | Hardcoded `.white` | Light mode: caribbeanInk |
| Translation text | `.white.opacity(0.65)` | Light mode: caribbeanPlum |
| Answer button bg | `.white.opacity(0.06)` | Light mode: caribbeanElevated |
| Answer button border | `.white.opacity(0.15)` | Light mode: caribbeanBorder |
| Letter badge bg | `.white.opacity(0.12)` | Light mode: caribbeanSelected |
| Letter badge border | `.white.opacity(0.20)` | Light mode: caribbeanBorder |
| Explanation container bg | `.white.opacity(0.04)` | Light mode: caribbeanRecessed |
| Explanation border | `.white.opacity(0.12)` | Light mode: caribbeanBorderSubtle |
| Explanation gloss | `.white.opacity(0.06)` | Light mode: white.opacity(0.35) |

**Acceptance Criteria:**
- [ ] All 10 visibility issues resolved
- [ ] Question panel uses warm recessed background, not dark purple in light mode
- [ ] All answer buttons clearly visible with defined borders
- [ ] Letter badges (A, B, C, D) have contrasting backgrounds
- [ ] Explanation container has warm, readable background
- [ ] Dark mode completely unchanged — all changes conditional

#### Subtask 5.3.2: Redesign Grammar Question Panel for Light Mode

**Proposed premium light mode question panel:**
```
Container:
  - Background: caribbeanRecessed
  - Gradient overlay: #C494FC @ 0.05 (top) → #A78BFA @ 0.03 (bottom)
    (very subtle purple tint — distinguishes it from plain recessed)
  - Top highlight: white @ 0.45 → 0.0 (height 2pt)
  - Border: caribbeanBorder, lineWidth 0.75
  - Corner radius: parentRadius - 8 (nested card feel)
  - Inset shadow: caribbeanMist @ 0.04, radius 4 (pushed IN effect)

Question text:
  - Font: .title3 weight .semibold
  - Color: caribbeanInk
  - Line height: 1.4x (generous for readability)

Translation/hint:
  - Font: .callout weight .regular, italic
  - Color: caribbeanPlum
  - Separator above: caribbeanBorderSubtle horizontal line
```

**Acceptance Criteria:**
- [ ] Question panel feels "recessed" within the parent card — pushed in, not floating
- [ ] Inset shadow creates depth — panel is a "well" within the card
- [ ] Question text is the most prominent element — high contrast, generous size
- [ ] Translation text is clearly secondary — lower emphasis, italic
- [ ] Warm purple tint overlay connects panel to the Caribbean palette
- [ ] Panel corners are smooth and proportional to parent

#### Subtask 5.3.3: Redesign Grammar Answer Options for Light Mode

**Proposed premium light mode answer options:**
```
Default state:
  - Background: caribbeanElevated
  - Border: caribbeanBorder, lineWidth 1
  - Corner radius: caribbeanRadiusMedium (14pt)
  - Letter badge:
    - Circle, 28pt diameter
    - Fill: caribbeanSelected (#C494FC @ 0.18)
    - Text: caribbeanInk, weight .bold
    - Border: caribbeanBorder
  - Answer text: caribbeanInk, .body weight .regular
  - Shadow: caribbeanShadowSubtle

Pressed state:
  - Background: caribbeanHover
  - Scale: 0.98
  - Shadow: compressed
  - Border: caribbeanBorderFocus

Selected — Correct:
  - Background: caribbeanSuccessSoft (#059669 @ 0.12)
  - Border: caribbeanSuccess (#059669), lineWidth 1.5
  - Letter badge: caribbeanSuccess fill, white text
  - Answer text: caribbeanSuccess
  - Checkmark icon appears (right side), caribbeanSuccess
  - Shadow: #059669 @ 0.10, radius 8 (green glow)
  - Scale: 1.01 (slight expansion — "chosen" feeling)

Selected — Wrong:
  - Background: caribbeanErrorSoft (#DC2626 @ 0.10)
  - Border: caribbeanError (#DC2626), lineWidth 1.5
  - Letter badge: caribbeanError fill, white text
  - Answer text: caribbeanError
  - X icon appears (right side), caribbeanError
  - Shake animation: 3 cycles, 6pt horizontal
  - Then fade to 0.5 opacity (de-emphasized)

Revealed correct (when user selected wrong):
  - Same as "Selected — Correct" but with a pulsing green glow
  - Draws eye to the correct answer after processing the wrong one
```

**Acceptance Criteria:**
- [ ] Default answer options are clearly defined, tappable rectangles
- [ ] Letter badges (A, B, C, D) are prominent and help with quick identification
- [ ] Pressed state gives immediate feedback (within 1 frame)
- [ ] Correct selection triggers a warm green celebration that feels rewarding
- [ ] Wrong selection triggers red with a shake — firm but not punishing
- [ ] The correct answer is revealed clearly after a wrong selection
- [ ] Transition animations between states are smooth (0.25-0.35s)
- [ ] All answer options maintain alignment during state transitions

#### Subtask 5.3.4: Redesign Grammar Explanation Panel for Light Mode

**Proposed premium explanation panel:**
```
Appears after answering — slides up from below answer options:

Container:
  - Background: caribbeanRecessed.opacity(0.7)
  - Top border: caribbeanGradientPrimary fill, height 2pt (accent line)
  - Corner radius: caribbeanRadiusMedium
  - Inner padding: caribbeanSpacingBase (12pt)

Icon (leading):
  - "info.circle.fill" in caribbeanInfo (#7C3AED)
  - 24pt, weight .semibold

Title:
  - "Explanation" — caribbeanInk, .callout weight .bold

Body:
  - Explanation text — caribbeanPlum, .body weight .regular
  - Line height: 1.5x (generous for reading comprehension)

Optional tip callout:
  - Background: caribbeanInfoSoft (#7C3AED @ 0.10)
  - Border left: caribbeanInfo, lineWidth 2
  - Text: caribbeanInk, .callout, italic
  - Prefix: "💡 Tip: "

Disclosure chevron:
  - caribbeanMist
  - Rotates 180° on expand/collapse
```

**Acceptance Criteria:**
- [ ] Explanation panel appears with a smooth slide-up animation
- [ ] Top gradient accent line connects it to the app's Caribbean identity
- [ ] Info icon clearly marks this as explanatory content
- [ ] Text is readable with generous line height — grammar explanations need breathing room
- [ ] Tip callout (if present) is visually distinct from main explanation
- [ ] Panel is collapsible with smooth chevron rotation
- [ ] Panel doesn't push content off screen — scrolls if needed

---

## Epic 6: Journey, Categories & Progress Visualization

**Epic Owner:** Growth Design Lead
**Priority:** P1 — These screens drive retention; premium feel reinforces habit formation
**Goal:** Transform Journey and Categories from functional progress displays into luxurious visual narratives of the user's learning story, where every milestone and category feels like a treasure discovered on a Caribbean voyage.

### The Opportunity

JourneyView and CategoriesView are already reasonably well-adapted for light mode. JourneyView uses GlassPanelWrapper correctly, and CategoriesView has excellent lavender-tinted backgrounds. This epic takes "working" to "stunning" — adding warmth, personality, and delight to the progress visualization layer.

---

### Story 6.1: Enhance Journey Timeline Visualization

**As a** user viewing my learning journey in light mode,
**I want** the timeline to feel like a treasure map of my progress,
**So that** I feel a deep sense of accomplishment and excitement about what's ahead.

**Story Points:** 8
**Priority:** P1

#### Subtask 6.1.1: Redesign Journey Timeline Connector

**Current timeline connector:**
```
Unlocked: section color @ 0.3 (thin line)
Locked: grey @ 0.15 (dashed or thin)
```

**Proposed premium light mode timeline connector:**
```
Unlocked connector:
  - Width: 3pt (upgraded from thin line)
  - Fill: caribbeanGradientPrimary (lavender → rose)
  - Glow: caribbeanGradientPrimary @ 0.08, blur 4 (soft halo around line)
  - Animated: gradient position shifts slowly (4s cycle, moves like flowing liquid)
  - Junction dots: 6pt circles at each milestone, filled with gradient

Locked connector:
  - Width: 2pt
  - Fill: caribbeanMist @ 0.15
  - Style: dashed (4pt dash, 6pt gap)
  - Junction dots: 6pt circles, caribbeanMist @ 0.12 fill, caribbeanBorderSubtle stroke

Current position indicator:
  - Pulsing ring at current milestone, game-accent color
  - Inner dot: gradient fill
  - Glow: game-accent @ 0.15, blur 8 (breathing animation, 3s cycle)
  - "You are here" implied by the glowing dot
```

**Acceptance Criteria:**
- [ ] Unlocked path feels alive — the gradient flow animation suggests forward movement
- [ ] Locked path is clearly different: lighter, dashed, "future" feel
- [ ] Current position is unmistakable — glowing, pulsing, "here I am"
- [ ] Junction dots create visual rhythm along the timeline
- [ ] Timeline works vertically (phone) and potentially horizontally (iPad landscape)
- [ ] Gradient animation is GPU-efficient and respects `reduceMotion` setting
- [ ] Timeline renders correctly for users with 0 milestones through 50+ milestones

#### Subtask 6.1.2: Redesign Milestone Cards for Light Mode

**Proposed premium milestone card:**
```
Unlocked milestone:
  - Card: GlassCardBackground with milestone-specific accent tint
  - Icon: gradient-filled SF Symbol in a 40pt circle
  - Title: caribbeanInk, .headline weight .bold
  - Description: caribbeanPlum, .subheadline
  - XP earned: caribbeanGradientWarm text, weight .bold
  - Completion date: caribbeanMist, .caption
  - Achievement badge: gold ribbon accent, caribbeanGradientWarm capsule

Locked milestone:
  - Card: caribbeanDisabled surface
  - Icon: caribbeanMist, 40pt circle with dashed border
  - Title: caribbeanMist, .headline weight .medium
  - Description: hidden (reveal on unlock — creates anticipation)
  - XP required: caribbeanMist, .caption, "500 XP to unlock"
  - Lock icon overlay: caribbeanMist, small padlock

Upcoming (next to unlock):
  - Card: GlassCardBackground with golden shimmer
  - Special treatment: caribbeanGradientWarm border @ 0.20
  - "Almost there!" badge: caribbeanGradientWarm capsule, pulsing
  - Progress bar: XP progress toward this milestone
  - Remaining XP: caribbeanPlum
```

**Acceptance Criteria:**
- [ ] Unlocked milestones feel like achievements — warm, celebratory, substantial
- [ ] Locked milestones create curiosity — "what will I unlock?"
- [ ] Next-to-unlock milestone has special emphasis that creates goal tension
- [ ] Achievement badges use warm gold tones that feel genuinely rewarding
- [ ] Milestone cards have consistent sizing and don't vary wildly in height
- [ ] Progress bar on upcoming milestone is accurate and visually connected to the timeline

#### Subtask 6.1.3: Add Level Progress Header Enhancement

**Proposed premium level display:**
```
Level badge:
  - Circle, 56pt diameter
  - Fill: caribbeanGradientPrimary
  - Level number: white, .title2 weight .bold
  - Shadow: caribbeanShadowMedium + caribbeanShadowGlow
  - Rotating ring: thin (2pt) ring around the circle
    - Gradient: caribbeanGradientSunset
    - Rotation: 360° over 20s (slow, ambient, premium)
    - Opacity: 0.4 (subtle — premium doesn't shout)

XP progress:
  - Linear progress bar below the badge
  - Track: caribbeanRecessed, height 6pt, rounded
  - Fill: caribbeanGradientPrimary, animated
  - Text: "2,450 / 5,000 XP" — caribbeanPlum, .caption

Level title:
  - caribbeanInk, .headline weight .bold
  - e.g., "Explorer", "Scholar", "Master"
```

**Acceptance Criteria:**
- [ ] Level badge is a premium focal point at the top of the Journey view
- [ ] Rotating ring creates a subtle "alive" quality (like a compass needle)
- [ ] XP progress bar shows clear advancement toward next level
- [ ] Level title adds personality and aspiration
- [ ] All values (level, XP) update correctly from user data
- [ ] Ring rotation respects `reduceMotion` (stops when enabled)

---

### Story 6.2: Enhance Categories View for Premium Light Mode

**As a** user browsing word categories,
**I want** each category to feel like a distinct, inviting collection to explore,
**So that** choosing what to practice feels exciting rather than overwhelming.

**Story Points:** 8
**Priority:** P1

#### Subtask 6.2.1: Redesign Category Card for Light Mode

CategoriesView already has excellent light mode adaptation. This story takes it further:

**Proposed premium category card enhancements:**
```
Card surface:
  - PremiumTransparentCardBackground (keep — already excellent)
  - Add: category-specific accent tint @ 0.04 (each category gets a signature color)

Category icon:
  - Rendered in a 44pt circle
  - Fill: category-specific gradient
  - Icon: white, weight .semibold
  - Shadow: category gradient @ 0.12, radius 6

Category name:
  - caribbeanInk, .headline weight .bold
  - Single line, truncated with ellipsis if too long

Word count & description:
  - caribbeanPlum, .subheadline
  - "48 words — Daily conversations"

Progress ring:
  - Size: 32pt diameter
  - Track: category accent @ 0.10
  - Fill: category-specific gradient
  - Center: percentage text, caribbeanPlum, .caption2

Completed badge:
  - Emerald capsule with white "✓ Complete" text
  - Shadow: #059669 @ 0.10 (green glow)

Locked overlay:
  - Semi-transparent caribbeanCanvas @ 0.50, blur 2
  - Lock icon: caribbeanMist, centered
  - "Pro" or "Elite" tier badge in relevant tier gradient
```

**Acceptance Criteria:**
- [ ] Each category card has its own accent color — creating visual variety in the grid
- [ ] Category icons are vibrant and immediately communicative
- [ ] Progress rings show accurate completion data
- [ ] Completed categories have a satisfying "done" badge
- [ ] Locked categories are obviously locked but still appealing (not greyed-out dead)
- [ ] Grid layout creates a "collection" feel — browsing category cards feels like browsing treasures
- [ ] Card press state: scale 0.97 with caribbeanHover background, spring animation

#### Subtask 6.2.2: Enhance Search Bar for Light Mode

**Current search bar: well-adapted** (already uses #C494FC tinted background and border).

**Proposed enhancements:**
```
Idle state:
  - Keep current caribbeanMist icon and border treatment
  - Add: placeholder text animation — text gently fades between suggestions
    "Search categories...", "Try 'food'...", "Find 'travel'..."
    (3s per suggestion, crossfade, 3 rotating suggestions)

Focused state:
  - Border: caribbeanBorderFocus (#A855F7 @ 0.45) — stronger emphasis
  - Shadow: caribbeanShadowGlow — soft rose glow beneath
  - Background: caribbeanElevated (slightly brighter than idle)
  - Icon color: caribbeanGradientPrimary (animated gradient on focus)

Active (typing):
  - Clear button: caribbeanMist circle with "×"
  - Real-time filter: categories fade out/in smoothly (0.2s)
  - No results: warm empty state (not a blank void)
```

**Acceptance Criteria:**
- [ ] Search bar idle state has rotating placeholder suggestions
- [ ] Focus state clearly signals "active" with brighter border and glow
- [ ] Typing immediately filters categories with smooth transitions
- [ ] Clear button is visible and easy to tap
- [ ] No-results state is warm and helpful (suggest similar categories)
- [ ] Placeholder animation respects `reduceMotion`

#### Subtask 6.2.3: Redesign Filter Pills / Chips for Light Mode

**Proposed premium filter pills:**
```
Inactive:
  - Background: caribbeanElevated
  - Border: caribbeanBorderSubtle
  - Text: caribbeanPlum, .caption weight .medium
  - Corner radius: full capsule

Active:
  - Background: caribbeanGradientPrimary
  - Border: none (gradient fill provides definition)
  - Text: white, .caption weight .semibold
  - Shadow: caribbeanShadowGlow
  - Scale: 1.02 (slightly enlarged to emphasize active state)

Count badge (on filter):
  - Small circle, 16pt diameter
  - Fill: caribbeanGradientSecondary
  - Text: white, .caption2 weight .bold
  - Position: top-right of pill, offset (-4, -4)
```

**Acceptance Criteria:**
- [ ] Active filter is unmistakable — gradient fill stands out clearly
- [ ] Inactive filters are visible but clearly deemphasized
- [ ] Count badges show how many categories match each filter
- [ ] Transition between active/inactive is smooth (0.25s)
- [ ] Multiple active filters can coexist without visual confusion
- [ ] Pills scroll horizontally if too many to fit, with fade-out edges

---

### Story 6.3: Design Progress Celebration Moments

**As a** user who just completed a category, reached a milestone, or achieved a new level,
**I want** the celebration to be warm, personal, and memorable,
**So that** I feel genuinely rewarded and motivated to keep learning.

**Story Points:** 5
**Priority:** P1

#### Subtask 6.3.1: Design Category Completion Celebration

**When a user completes all words in a category:**
```
Celebration overlay:
  - Warm dimming layer: caribbeanInk @ 0.30
  - Central card: GlassCardBackground (large, centered)
  - Content:
    - Confetti burst: warm Caribbean colors (gold, rose, lavender, amber)
      - 40 particles, 1.5s animation, gravity-affected fall
    - Trophy/star icon: caribbeanGradientWarm, 64pt, with rotating glow ring
    - Title: "Category Complete!" — caribbeanInk, .title weight .bold
    - Category name: caribbeanGradientSunset text, .title2
    - Stats summary:
      - "48/48 words mastered" — caribbeanPlum
      - "92% accuracy" — caribbeanPlum
      - "Best streak: 12" — caribbeanPlum
    - XP earned badge: caribbeanGradientWarm capsule, "+250 XP"
    - "Continue" button: caribbeanGradientPrimary fill, white text

Auto-dismiss: after 5s if un-interacted (fades out)
```

**Acceptance Criteria:**
- [ ] Celebration triggers immediately and unmistakably on category completion
- [ ] Confetti uses Caribbean warm colors (no primary RGB — only palette colors)
- [ ] Trophy icon feels genuinely rewarding — warm glow, gradient fill
- [ ] Stats summary celebrates the achievement with specific numbers
- [ ] XP earned is prominently displayed as a tangible reward
- [ ] "Continue" button gracefully returns to the categories view
- [ ] Celebration is skippable by tapping anywhere outside the card
- [ ] Haptic feedback: `.notificationSuccess` + `.rigid` (celebratory double-tap)

#### Subtask 6.3.2: Design Milestone Achievement Celebration

**When a user reaches a journey milestone:**
```
Full-screen celebration:
  - Background: animated caribbean gradient (slow-shifting sunset)
  - Central element:
    - Milestone badge: large (80pt), gradient-filled, with particles
    - Badge arrives with scale-up spring animation (0 → 1.1 → 1.0)
  - Title: "Milestone Unlocked!" — caribbeanInk, .largeTitle
  - Milestone name: caribbeanGradientSunset text, .title
  - Motivational message: caribbeanPlum, .body, italic
    e.g., "You've mastered 200 words. That's the vocabulary of a confident traveler."
  - Share button: outline style, caribbeanBorder, caribbeanPlum text
  - Continue button: caribbeanGradientPrimary

Background particles:
  - 20 floating orbs in Caribbean palette colors
  - Slow drift animation (8-12s cycle)
  - Blur and size vary for depth illusion
```

**Acceptance Criteria:**
- [ ] Full-screen celebration feels like a genuine moment — not a popup
- [ ] Background gradient animation creates a "golden hour" atmosphere
- [ ] Badge arrival animation has weight and impact (spring, not linear)
- [ ] Motivational message is specific to the milestone (not generic)
- [ ] Share button allows user to capture/share the achievement
- [ ] Floating particles create ambient warmth and motion
- [ ] Performance: celebration renders at 60fps even with particles
- [ ] Celebration respects `reduceMotion` (static badge, no particles)

---

## Epic 7: Profile, Settings & Membership

**Epic Owner:** Premium Experience Lead
**Priority:** P1 — Profile and Membership drive upgrade conversion; premium feel directly impacts revenue
**Goal:** Transform the Profile and Membership screens from functional settings panels into aspirational, luxurious spaces that make users feel valued and make the premium tiers feel irresistible.

### The Strategic Importance

Profile is where users see their identity within the app. Membership is where they decide whether to invest. In light mode, these screens need to feel like visiting a luxury boutique — warm, inviting, exclusive, and aspirational. Every element should whisper "you deserve the best experience."

---

### Story 7.1: Redesign Profile Header for Premium Light Mode

**As a** user viewing my profile,
**I want** my profile header to feel like a personalized, luxurious identity card,
**So that** I feel valued and see my learning identity reflected beautifully.

**Story Points:** 5
**Priority:** P1

#### Subtask 7.1.1: Enhance Profile Avatar & Name Display

**Current profile header:**
```
Name: purple gradient (same both modes)
Level subtitle: caribbeanPlum
Quick stats: caribbeanInk values, caribbeanPlum labels
Divider: .black.opacity(0.06) (appropriate)
```

**Proposed premium light mode profile header:**
```
Avatar area:
  - User initials in a 72pt circle
  - Fill: caribbeanGradientSunset (lavender → rose → amber)
  - Border: white @ 0.60, lineWidth 2 (bright ring — like a pearl setting)
  - Shadow: #C494FC @ 0.15, radius 12 + #F472B6 @ 0.06, radius 4
  - Rotating ambient ring: thin (1.5pt), caribbeanGradientPrimary @ 0.30
    360° rotation over 30s (very slow, luxurious)

Name:
  - caribbeanGradientSunset text (warmer than current purple-only)
  - .title weight .bold
  - Shadow: caribbeanPlum @ 0.06, radius 4

Level indicator:
  - Tier badge inline with level text
  - Level text: caribbeanPlum, .subheadline
  - Tier badge: tier-specific gradient capsule (from TierBadgeView)

Quick stats row:
  - 3-column layout: Words | Streak | Accuracy
  - Value: caribbeanInk, .title2 weight .bold
  - Label: caribbeanPlum, .caption
  - Dividers: caribbeanBorderSubtle vertical lines
  - Each stat has a micro-icon: SF Symbol in caribbeanPlum, 12pt
```

**Acceptance Criteria:**
- [ ] Profile avatar is a warm, glowing circle with the user's initials
- [ ] Rotating ambient ring creates a subtle "alive" premium quality
- [ ] Name uses the full Caribbean sunset gradient (warmer than current)
- [ ] Tier badge is prominently displayed next to level text
- [ ] Quick stat values are large and immediately readable
- [ ] Three-column stat layout is balanced and proportional
- [ ] Avatar glow doesn't interfere with name text readability

#### Subtask 7.1.2: Add Profile Streak Calendar Visualization

**Proposed light mode streak calendar:**
```
Calendar grid (last 30 days):
  - Each day: 14pt circle
  - Active day (practiced): caribbeanGradientPrimary fill
  - Inactive day (missed): caribbeanRecessed fill, caribbeanBorderSubtle stroke
  - Today: caribbeanGradientWarm fill + pulsing glow ring
  - Future: caribbeanDisabled (lighter than inactive)

Streak highlight:
  - Consecutive days connected with a thin caribbeanGradientPrimary line
  - Current streak days have slightly larger circles (16pt)
  - Streak label: "🔥 12-day streak" — caribbeanGradientWarm text

Container: GlassCardBackground
  - Title: "Activity Calendar" — caribbeanInk
  - Month/year: caribbeanPlum
```

**Acceptance Criteria:**
- [ ] Calendar clearly shows active vs inactive days with warm/cool contrast
- [ ] Today's circle is the most prominent (golden glow)
- [ ] Streak connections create a visual "chain" that users want to maintain
- [ ] Calendar fits cleanly within the profile section
- [ ] Tapping a day could show a breakdown (stretch goal)
- [ ] Calendar updates correctly when the user practices

---

### Story 7.2: Redesign Settings Panels for Premium Light Mode

**As a** user adjusting app settings,
**I want** settings to feel organized, clear, and warm,
**So that** configuring the app feels easy and pleasant, not clinical.

**Story Points:** 5
**Priority:** P1

#### Subtask 7.2.1: Redesign Settings Tab Bar / Segmented Control

**Current profile tabs:**
```
Active tab: Color(hex: "#3730a3") (deep indigo)
Inactive: caribbeanInk @ 0.7
Bar bg: Color(hex: "#4338ca") @ 0.08
Active capsule bg: Color(hex: "#4338ca") @ 0.15
```

**Proposed premium settings tabs:**
```
Tab bar container:
  - Background: caribbeanElevated with caribbeanBorderSubtle stroke
  - Corner radius: full capsule (pill shape)
  - Inner padding: 3pt

Active tab:
  - Background: caribbeanGradientPrimary fill (gradient capsule)
  - Text: white, weight .semibold
  - Shadow: caribbeanShadowGlow (rose glow beneath active pill)
  - Transition: matchedGeometryEffect for sliding active indicator

Inactive tab:
  - Background: transparent
  - Text: caribbeanPlum, weight .medium
  - Pressed: caribbeanHover background flash
```

**Acceptance Criteria:**
- [ ] Active tab is unmistakable with gradient fill — premium pill indicator
- [ ] Active pill slides smoothly between tabs using `matchedGeometryEffect`
- [ ] Inactive tabs are clearly tappable but secondary
- [ ] Tab bar feels like a premium segmented control, not basic iOS style
- [ ] All tabs (Appearance, Sounds, Nebula Drift — where applicable) work correctly

#### Subtask 7.2.2: Redesign Dark/Light Mode Toggle

The dark/light mode toggle is a critical UX moment — switching to light mode should feel intentional and premium:

**Proposed premium toggle:**
```
Container: GlassPanelWrapper (or GlassCardBackground)

Toggle row:
  - Icon: animated sun/moon
    Light mode: ☀️ with warm golden rays (animated, subtle rotation)
    Dark mode: 🌙 with cosmic purple glow
  - Title: "Appearance" — caribbeanInk, weight .semibold
  - Subtitle: "Caribbean Sunrise" or "Cosmic Night" — caribbeanPlum
  - Toggle: PremiumToggle component with warm tint

Toggle animation (dark → light):
  1. Toggle pill slides from moon to sun side
  2. Warm golden wash ripples outward from toggle (0.5s, radialGradient expanding)
  3. All UI elements smoothly crossfade to light mode values (0.4s)
  4. Status bar text color transitions

Toggle animation (light → dark):
  1. Toggle pill slides from sun to moon side
  2. Purple cosmic wash ripples outward (0.5s)
  3. All UI elements crossfade to dark mode values (0.4s)
```

**Acceptance Criteria:**
- [ ] Toggle label changes contextually: "Caribbean Sunrise" in light, "Cosmic Night" in dark
- [ ] Toggle animation is smooth and delightful — the moment of switching should spark joy
- [ ] Warm wash effect rippling from the toggle creates a "the world is changing" moment
- [ ] All visible UI elements transition smoothly (no flash, no jarring color jumps)
- [ ] Toggle is accessible with VoiceOver (announces current mode and action)
- [ ] Animation respects `reduceMotion` (instant switch, no ripple)

#### Subtask 7.2.3: Redesign Settings Rows & Controls

**Proposed premium settings row:**
```
Row layout:
  - Leading icon: 28pt circle, section-specific accent gradient fill, white icon
  - Title: caribbeanInk, .body weight .regular
  - Subtitle (if any): caribbeanPlum, .caption
  - Trailing control: toggle / chevron / value
  - Separator: caribbeanBorderSubtle, indented from icon

Section header:
  - Section title: caribbeanPlum, .footnote weight .semibold, uppercased, tracking 1.0
  - Top spacing: caribbeanSpacingGenerous (24pt)
  - Bottom spacing: caribbeanSpacingTight (6pt)

Toggle control (PremiumToggle):
  - Track off: caribbeanRecessed fill
  - Track on: caribbeanGradientPrimary
  - Thumb: white with caribbeanShadowSubtle
  - Thumb on: white with caribbeanShadowGlow

Value display:
  - caribbeanPlum, .body
  - e.g., "English → Spanish" with caribbeanMist arrow

Chevron:
  - caribbeanMist, 12pt
```

**Acceptance Criteria:**
- [ ] Settings rows feel warm and organized, not clinical
- [ ] Leading icons provide color variety and visual interest
- [ ] Section headers clearly delineate settings groups
- [ ] Toggle animations are smooth and satisfying
- [ ] Value displays are readable and appropriately emphasized
- [ ] Row press state shows caribbeanHover background
- [ ] All settings rows maintain consistent height and alignment

---

### Story 7.3: Redesign Membership View for Premium Light Mode Conversion

**As a** user on the free tier browsing membership options,
**I want** the membership screen to feel aspirational and luxurious,
**So that** upgrading feels like an investment in a premium experience, not just a paywall.

**Story Points:** 13
**Priority:** P0 (Revenue-critical)

#### Subtask 7.3.1: Redesign Membership Hero Section

**Proposed premium membership hero for light mode:**
```
Background:
  - Animated Caribbean gradient (slower, more saturated than dashboard)
  - Breathing orbs in warmer tones (gold, amber, rose)
  - Subtle particle system: tiny golden sparkles drifting upward

Hero content:
  - Crown/diamond icon: 80pt, caribbeanGradientWarm fill
    - Rotating glow ring (same as profile avatar — design consistency)
    - Particles emanating from icon (4-5 tiny dots drifting up, 3s cycle)
  - Title: "Unlock Your Full Potential" — caribbeanInk, .largeTitle weight .bold
    - Or tier-specific: "Discover Pro", "Experience Elite", "Command Royal"
  - Subtitle: caribbeanPlum, .title3 weight .regular
    - "Join thousands of learners who've elevated their journey"
  - Social proof: "⭐ 4.9 from 2,400 Pro members" — caribbeanPlum capsule
```

**Acceptance Criteria:**
- [ ] Membership hero creates immediate aspiration — "I want this"
- [ ] Animated gradient background creates premium atmosphere
- [ ] Crown icon has presence and warmth — it glows and shimmers
- [ ] Title is powerful and motivational
- [ ] Social proof adds credibility without being salesy
- [ ] Overall hero section is not too tall — content below is visible

#### Subtask 7.3.2: Redesign Tier Cards for Light Mode

**Proposed premium tier card treatment:**
```
Each tier card (Free, Pro, Elite, Royal):

Card surface: TierGlassCardModifier (currently forces dark mode)
  - CHANGE: In light mode, use LIGHT glass treatment instead of forcing dark
  - Tier gradient tint @ 0.08 (subtle identity color)

Tier badge:
  - Top-left corner, overlapping card edge
  - Tier name in uppercase, weight .bold
  - Gradient fill specific to tier
  - Shadow: tier gradient @ 0.15

Price:
  - Large: .largeTitle weight .bold
  - Color: caribbeanInk
  - Period: caribbeanPlum, .subheadline

Feature list:
  - Each feature: checkbox icon + text
  - Available: caribbeanSuccess checkmark, caribbeanInk text
  - Unavailable: caribbeanMist dash, caribbeanMist text (strikethrough)
  - Premium feature: ✦ star prefix, caribbeanGradientWarm text

CTA button:
  - Current tier: outlined, caribbeanBorder, "Current Plan"
  - Upgrade target: caribbeanGradientPrimary fill, white text, .semibold
  - Shadow: caribbeanShadowGlow — rose glow on upgrade CTA
  - Pulsing glow animation on recommended tier (2s cycle)

Recommended badge:
  - "MOST POPULAR" or "BEST VALUE" ribbon
  - caribbeanGradientWarm fill
  - Positioned top of card, centered
  - Shadow: #FB923C @ 0.15
```

**Acceptance Criteria:**
- [ ] Tier cards in light mode DO NOT force dark color scheme (current behavior)
- [ ] Each tier has a distinct visual identity through its gradient accent
- [ ] Price is the most prominent element in each card
- [ ] Feature available/unavailable is immediately clear through icon and color
- [ ] Premium features have special emphasis (star, gradient text)
- [ ] Upgrade CTA button has a warm glow that draws the eye
- [ ] Recommended tier has a prominent ribbon badge
- [ ] Cards feel aspirational — each tier upgrade feels like a meaningful step up
- [ ] Scrolling through tiers feels like browsing luxury options

#### Subtask 7.3.3: Fix Membership Comparison Toggle Visibility

**Current bug:** Comparison toggle uses `.white.opacity(0.06)` fill + `.white.opacity(0.06)` stroke — invisible on the Caribbean gradient background.

**Fix:**
```
Light mode comparison toggle:
  - Background: caribbeanElevated with caribbeanBorderSubtle stroke
  - Text: caribbeanInk, weight .medium
  - Chevron: caribbeanMist
  - Pressed: caribbeanHover
  - Shadow: caribbeanShadowSubtle
```

**Acceptance Criteria:**
- [ ] Comparison toggle is clearly visible against the gradient background
- [ ] Toggle text is readable and the chevron indicates expandability
- [ ] Pressed state provides feedback
- [ ] Expanded state shows the full comparison table with correct light mode styling
- [ ] Comparison table alternating rows use caribbeanRecessed / transparent alternation

#### Subtask 7.3.4: Redesign Feature Comparison Table

**Proposed light mode comparison table:**
```
Table header row:
  - Tier names: tier-gradient text, weight .bold
  - Background: caribbeanRecessed

Feature rows:
  - Even rows: caribbeanRecessed.opacity(0.3) (subtle banding)
  - Odd rows: transparent
  - Feature name: caribbeanInk, .callout
  - Available: caribbeanSuccess checkmark in emerald circle
  - Unavailable: caribbeanMist "—" text
  - Limited: caribbeanWarning "●" with count, e.g., "●3"

Row dividers:
  - caribbeanBorderSubtle horizontal line
  - Full width

Table border:
  - caribbeanBorder, lineWidth 0.75, cornerRadius caribbeanRadiusLarge
```

**Acceptance Criteria:**
- [ ] Comparison table is easy to scan — users can quickly see what each tier offers
- [ ] Row banding creates readable horizontal rhythm
- [ ] Available checks are warm green, unavailable dashes are muted
- [ ] Table fits within the screen width without horizontal scrolling
- [ ] Column widths are proportional and balanced
- [ ] Scrolling within the table is smooth if it exceeds viewport height

---

### Story 7.4: Language Selection View Consistency

**As a** new user selecting their language pair,
**I want** the onboarding experience to perfectly match the Caribbean premium feel,
**So that** my first impression of the app is warm, inviting, and polished.

**Story Points:** 3
**Priority:** P1

#### Subtask 7.4.1: Replace Inline RGB Values with Tokens

**Current issue:** LanguageSelectionView uses raw `Color(red: 45/255, ...)` values instead of `.caribbeanInk`, `.caribbeanPlum`, `.caribbeanMist` tokens.

**Fix:** Replace all 6+ instances of inline RGB with semantic tokens:
- `Color(red: 45/255, green: 22/255, blue: 62/255)` → `.caribbeanInk`
- `Color(red: 140/255, green: 96/255, blue: 136/255)` → `.caribbeanMist`
- `Color(red: 100/255, green: 58/255, blue: 100/255)` → `.caribbeanPlum`

**Acceptance Criteria:**
- [ ] Zero inline RGB values that duplicate Caribbean token values
- [ ] All text and icon colors use semantic tokens
- [ ] No visual change — tokens have identical values to the raw RGB
- [ ] Future token color changes will automatically propagate

#### Subtask 7.4.2: Enhance Language Card Light Mode Treatment

**Proposed enhancements:**
```
Language card:
  - Replace .white.opacity(0.5) bg with caribbeanElevated
  - Add flag emoji or Language icon in a gradient circle
  - Border: caribbeanBorder (currently white opacity)
  - Shadow: caribbeanShadowSubtle (currently none)
  - Selected state: caribbeanSelected bg, caribbeanBorderFocus border

Connection rail:
  - Replace .white.opacity(0.45) circle with caribbeanElevated
  - Connection line: caribbeanGradientPrimary @ 0.30

"Start Adventure" button:
  - Keep caribbeanInk text (works well)
  - Button background: caribbeanGradientWarm (warmer than current)
  - Shadow: caribbeanShadowGlow
  - Scale press animation
```

**Acceptance Criteria:**
- [ ] Language cards use consistent Caribbean token styling
- [ ] Selected language card is clearly distinguished from unselected
- [ ] Connection rail between source and target language is warm and visible
- [ ] "Start Adventure" CTA is the clear focal point with warm glow
- [ ] Overall onboarding screen matches the premium quality of the rest of the app

---

## Epic 8: Background System, Depth & Atmospheric Effects

**Epic Owner:** Visual Design Systems Lead
**Priority:** P0 — The background is the canvas on which everything else sits; it defines the entire mood
**Goal:** Create a luminous, breathing Caribbean background system that feels like golden hour on a tropical beach — warm light filtering through palm trees, soft lens flares, and a gently shifting sky that makes every screen feel alive with warmth and possibility.

### The Design Vision

Dark mode has the cosmic nebula — a rich, animated Metal shader background with stars, depth, and drama. Light mode needs an equally stunning counterpart, but through the lens of warm, natural light. Think: golden hour photography, Caribbean sunrises, watercolor washes, and the way light dances on ocean surfaces.

---

### Story 8.1: Redesign Layout Background for Premium Light Mode

**As a** user experiencing the app in light mode,
**I want** the background to be a living, breathing canvas of warm light,
**So that** the entire app feels premium, alive, and emotionally warm.

**Story Points:** 13
**Priority:** P0

#### Subtask 8.1.1: Redesign Dashboard Background Layers

**Current LayoutBackgroundView light mode layers (7-layer composited):**
```
Layer 1: Lavender-rose gradient
Layer 2: Hot pink radial pulse
Layer 3: Warm orange radial pulse
Layer 4: Lavender mist float
Layer 5: Rose-gold accent
Layer 6: Caribbean crystal overlay
Layer 7: Soft veil (caribbeanInk @ 0.03)
```

**Proposed premium light mode background layers:**
```
Base layer (static):
  - Gradient: caribbeanCanvas → caribbeanElevated (slightly warm off-white)
  - Direction: top (warm) → bottom (cool) — natural sky lighting model

Layer 1 — Warm Sky Wash:
  - Radial gradient: center-top anchored
  - Color: #FFF7ED (cream) → transparent
  - Size: 140% of screen width
  - Purpose: Simulates warm light coming from above
  - Animated: center position drifts ±5% over 20s (slow breathing)

Layer 2 — Lavender Atmosphere:
  - Radial gradient: offset 30% right, 70% down
  - Color: #C494FC @ 0.06 → transparent
  - Size: 90% of screen width
  - Purpose: Caribbean lavender identity — brand signature
  - Animated: opacity breathes 0.04-0.08 over 12s

Layer 3 — Rose Gold Accent Pool:
  - Radial gradient: offset 20% left, 40% down
  - Color: #F472B6 @ 0.05 → transparent
  - Size: 60% of screen width
  - Purpose: Warmth accent — like rose-gold jewelry catching light
  - Animated: position drifts ±8% in both axes over 16s

Layer 4 — Amber Highlight (Golden Hour):
  - Radial gradient: offset 50% right, 20% down
  - Color: #FB923C @ 0.04 → transparent
  - Size: 50% of screen width
  - Purpose: Sunset warmth, creates depth variety
  - Animated: opacity pulses 0.02-0.06 over 18s

Layer 5 — Crystalline Shimmer:
  - Noise texture overlay: very subtle, caribbeanInk @ 0.012
  - Purpose: Prevents banding in gradients, adds "texture"
  - Static (no animation)

Atmospheric veil:
  - caribbeanInk @ 0.015 overlay (barely visible)
  - Purpose: Prevents background from washing out text

TOTAL: 5 visual layers + 1 noise layer + 1 veil
PERFORMANCE: Only Layers 1-4 animate (slow sine-wave position/opacity changes)
POWER: Much cheaper than Metal shaders — all SwiftUI/Core Animation
```

**Acceptance Criteria:**
- [ ] Background feels warm, luminous, and alive — like sitting in warm sunlight
- [ ] No single color dominates — the blend of lavender, rose, and amber creates richness
- [ ] Background works on all screen sizes (iPhone SE through iPad Pro)
- [ ] Background doesn't distract from content — all layers stay below 0.08 opacity
- [ ] No gradient banding visible — noise texture layer eliminates bands
- [ ] Performance: no dropped frames — animations use slow sine waves, minimal GPU
- [ ] Atmospheric veil ensures text contrast remains excellent (WCAG 4.5:1 min)
- [ ] Background gracefully crossfades during dark ↔ light mode transition
- [ ] Background continues animating subtly when the user scrolls

#### Subtask 8.1.2: Redesign Non-Dashboard Tab Backgrounds

**Current non-dashboard background:** Solid `rgb(248, 245, 253)` — pale lavender white (adequate but lifeless).

**Proposed premium non-dashboard backgrounds:**
```
Categories tab background:
  - Base: caribbeanCanvas
  - Single ambient wash: lavender @ 0.03, radial, center-top
  - Subtle: enough warmth to not feel like "empty screen"

Journey tab background:
  - Base: caribbeanCanvas
  - Ambient wash: rose-gold @ 0.03, radial, 60% down (warms the timeline)
  - Subtle: milestone cards still pop against the slightly warm canvas

Profile tab background:
  - Base: caribbeanCanvas
  - Ambient wash: warm cream (#FFF7ED) @ 0.06, radial, top
  - Slightly warmer: profile is personal, should feel warm

Practice screens:
  - Uses game-specific accent color @ 0.02 ambient wash
  - FlashCards: caribbeanGradientPrimary values
  - WordBuilder: emerald values
  - Grammar: amber values

Consistent elements across all tabs:
  - Noise texture overlay (same as dashboard — brand consistency)
  - caribbeanInk @ 0.015 atmospheric veil
```

**Acceptance Criteria:**
- [ ] Non-dashboard tabs feel warm and branded (not flat, clinical white)
- [ ] Each tab has a signature ambient color — subtle but identifiable
- [ ] Ambient washes are extremely subtle (≤ 0.06 opacity) so content stays prominent
- [ ] Consistency: all tabs share noise texture and atmospheric veil
- [ ] Scroll performance is unaffected
- [ ] Background doesn't shift when navigating between tabs (ambient wash is per-tab, positioned identically)

#### Subtask 8.1.3: Define Parallax Scrolling Integration

**Current dashboard has parallax scrolling activated.**

**Proposed light mode parallax behavior:**
```
Scroll events:
  - Background layers scroll at 0.15× the content speed (parallax factor)
  - Layer 1 (sky wash): 0.10× (most distant — moves least)
  - Layer 3 (rose pool): 0.15× (mid-distance)
  - Layer 4 (amber): 0.20× (closest — moves most)
  - Layer 2 (lavender): 0.12× (atmospheric — stays mostly still)

Pull-to-refresh overshoot:
  - Background layers shift down at 0.3×
  - Warm light wash intensifies slightly (opacity +0.02)
  - Creates "sun breaking through" feeling on over-pull

Scroll-to-top acceleration:
  - Background layers smoothly snap back to resting position
  - Spring animation: response 0.6, dampingFraction 0.7

Reduced motion fallback:
  - All layers at static positions (no parallax)
  - Background still shows the same warm, layered composition — just no movement
```

**Acceptance Criteria:**
- [ ] Parallax creates depth — the background feels like it's behind the content
- [ ] Different parallax speeds for each layer sell the depth illusion
- [ ] Pull-to-refresh has a warm, "sun intensifies" moment
- [ ] Snap-back uses spring physics (not linear)
- [ ] Parallax is disabled when `reduceMotion` is active
- [ ] No jittering or jank in scroll — all layers move smoothly
- [ ] Parallax doesn't cause layout shifts or content jumpiness

---

### Story 8.2: Adapt Breathing Orbs for Light Mode

**As a** user who enjoys the breathing orbs feature,
**I want** the orbs to feel warm and luminous in light mode,
**So that** the meditative quality is preserved but with a Caribbean warmth.

**Story Points:** 5
**Priority:** P1

#### Subtask 8.2.1: Define Light Mode Orb Color Palette

**Current BreathingOrbsView:** Uses cosmic colors (purple, blue, cyan) — appropriate for dark mode but wrong for light.

**Proposed Caribbean orb palette:**
```
Light mode orb colors:
  Orb 1: caribbeanGradientPrimary (#C494FC → #F472B6) — lavender → rose
  Orb 2: caribbeanGradientWarm (#F472B6 → #FB923C) — rose → amber
  Orb 3: caribbeanGradientSecondary (#C494FC → #8B5CF6) — lavender → violet
  Orb 4: caribbeanGradientSunset (#FFF7ED → #F472B6 → #C494FC) — cream → rose → lavender

Orb opacity: 0.08 - 0.15 (more transparent than dark mode)
Orb blur: 20 - 40pt (softer than dark mode — dreamy quality)
Orb size: same as dark mode

Background interaction:
  - Orbs blend with the background gradient layers
  - Overlapping orbs create warmer pockets
  - Maximum combined opacity in any area: 0.30

Glow effect:
  - Outer glow: orb gradient @ 0.04, blur 15
  - Much softer than dark mode glow (dark mode glow is dramatic; light mode is gentle)
```

**Acceptance Criteria:**
- [ ] Orbs use warm Caribbean palette (not cosmic purple/blue)
- [ ] Orbs are more transparent and softer than dark mode counterparts
- [ ] Overlapping orbs create warm pockets without opaque masses
- [ ] Orb breathing animation continues at the same pace as dark mode
- [ ] Orbs don't overpower the content layer
- [ ] Color transition when switching dark ↔ light mode is smooth (crossfade)

#### Subtask 8.2.2: Adapt Orb Interaction for Light Mode

**Light mode orb behavior adjustments:**
```
Breathing cycle:
  - Same timing as dark mode (continuity)
  - But: lighter, softer scale range
  - Scale: 0.95 to 1.05 (vs 0.85 to 1.15 in dark mode — tighter range)
  - Reason: big scale changes on light bg feel "bouncy" not "breathing"

Drift:
  - Same drift pattern as dark mode
  - Speed: 0.8× dark mode speed (slightly slower — more languid)
  - Reason: light mode is "daytime" — calmer energy

Touch interaction (if enabled):
  - Tap orb: warm ripple, caribbeanGradientWarm expanding circle
  - Press: orb brightens to 0.25 opacity, glow intensifies
  - Release: spring back to normal opacity
```

**Acceptance Criteria:**
- [ ] Breathing is subtler in light mode (tighter scale range)
- [ ] Drift is slightly slower — "afternoon" energy
- [ ] Touch interactions produce warm, Caribbean-colored responses
- [ ] Orbs feel like warm light objects, not cosmic entities
- [ ] Combined orb + background layer composition stays under budget (total overdraw < 3×)

---

### Story 8.3: Define Light Mode Fog, Mist & Atmospheric Effects

**As a** user experiencing the app in light mode,
**I want** subtle atmospheric effects that add depth and warmth,
**So that** the app feels like a living environment, not a flat interface.

**Story Points:** 8
**Priority:** P2

#### Subtask 8.3.1: Design Caribbean Mist Effect

**Proposed light mode atmospheric mist:**
```
Mist layer (optional premium effect):
  - Position: bottom 20% of screen
  - Gradient: caribbeanCanvas → transparent (bottom → up)
  - Opacity: 0.30 → 0.00
  - Animated: slow horizontal drift (40s full cycle)
  - Gives content a "rising from mist" feeling at the bottom

Purpose:
  - Replaces the harsh bottom edge where content ends and background starts
  - Creates the illusion that content continues "below the mist"
  - Adds depth layering: content → mist → background

Implementation:
  - Simple gradient overlay (not a texture/image)
  - Masked to avoid covering interactive elements
  - Fades out when user is scrolled to bottom of content
```

**Acceptance Criteria:**
- [ ] Mist creates a soft bottom edge — content doesn't just "end"
- [ ] Mist animation is extremely subtle — user shouldn't consciously notice it
- [ ] Mist doesn't cover interactive elements (buttons, tabs)
- [ ] Mist fades when user reaches end of scrollable content
- [ ] No performance impact — single gradient layer with alpha animation
- [ ] Mist is elegant, not cheesy — think "morning fog," not "smoke machine"

#### Subtask 8.3.2: Design Light Lens Flare & Bokeh Accents

**Proposed premium light accents (stretch goal):**
```
Lens flare (dashboard only):
  - Single soft hexagonal flare in top-right area
  - Color: warm cream → transparent (#FFF7ED)
  - Size: 30px, opacity 0.12
  - Animated: slow fade in/out (6s cycle)
  - Purpose: "camera pointed at sunlight" — photographic warmth

Bokeh circles (dashboard + journey):
  - 5-8 soft circles scattered across background
  - Colors: mix of caribbeanGradientPrimary values @ 0.03
  - Sizes: 20-60px, blur 10-20
  - Animated: very slow drift (20-30s cycles)
  - Purpose: "out-of-focus light" — depth-of-field effect from photography

Implementation:
  - Both effects are purely cosmetic layers behind content
  - Both respect reduceMotion (static when enabled)
  - Both are behind the atmospheric veil layer
```

**Acceptance Criteria:**
- [ ] Lens flare adds warmth without being distracting (barely noticeable)
- [ ] Bokeh circles create depth — "this is a living space" feeling
- [ ] Effects are invisible when `reduceMotion` is enabled (or static)
- [ ] Performance: < 1ms per frame for these effects
- [ ] Effects don't compete with breathing orbs (different layer, different behavior)
- [ ] Effects are tasteful — premium app, not a photo filter app

---

## Epic 9: Animation, Motion & Micro-Interactions

**Epic Owner:** Motion Design Lead
**Priority:** P1 — Motion is the soul of a premium experience; it's what makes the app feel alive versus static
**Goal:** Define a cohesive Caribbean light mode motion language that is warm, fluid, and confident — like the gentle sway of a hammock in a tropical breeze. Every animation should serve purpose: guide attention, confirm actions, or create ambient warmth.

### Motion Design Principles for Caribbean Light Mode

1. **Warm, not electric.** Dark mode animations can be sharp and cosmic. Light mode animations should be fluid, gentle, and organic — like water, light, and breeze.
2. **Confident, not bouncy.** Spring animations use higher damping (0.7-0.85) and moderate response (0.35-0.5s). Nothing should feel rubbery or toy-like.
3. **Purposeful, not decorative.** Every animation answers the question: what is this teaching the user? Where should they look? What just happened?
4. **Layered, not simultaneous.** Complex transitions stagger elements by 50-80ms, creating a "ripple" effect rather than everything appearing at once.

---

### Story 9.1: Define Core Light Mode Animation Curves & Timings

**As a** developer implementing Caribbean light mode animations,
**I want** a consistent animation system with defined curves and timings,
**So that** all motion feels cohesive, premium, and intentional across the app.

**Story Points:** 5
**Priority:** P0

#### Subtask 9.1.1: Define Animation Token Library

**Caribbean Light Mode Animation Tokens:**
```swift
// MARK: — Spring Animations (primary motion system)

/// Standard interaction response (button presses, card taps)
static let caribbeanSpringStandard = Animation.spring(
    response: 0.4, dampingFraction: 0.78, blendDuration: 0.1
)

/// Quick micro-feedback (toggles, checkmarks, small state changes)
static let caribbeanSpringQuick = Animation.spring(
    response: 0.25, dampingFraction: 0.82, blendDuration: 0.05
)

/// Dramatic entrance (cards appearing, modals presenting, celebrations)
static let caribbeanSpringDramatic = Animation.spring(
    response: 0.55, dampingFraction: 0.72, blendDuration: 0.15
)

/// Ambient breathing (background layers, orbs, subtle pulsing)
static let caribbeanSpringBreathing = Animation.spring(
    response: 1.2, dampingFraction: 0.95, blendDuration: 0.3
)

// MARK: — Easing Curves (for non-spring animations)

/// Smooth entrance (elements sliding in)
static let caribbeanEaseOut = Animation.easeOut(duration: 0.35)

/// Smooth exit (elements sliding out — slightly faster than entrance)
static let caribbeanEaseIn = Animation.easeIn(duration: 0.25)

/// Content fade (text, icons changing content)
static let caribbeanFade = Animation.easeInOut(duration: 0.2)

/// Long ambient cycle (gradient shifts, glow pulses)
static let caribbeanAmbient = Animation.easeInOut(duration: 3.0)
    .repeatForever(autoreverses: true)

// MARK: — Stagger Delays

/// Sequential item delay (list items, grid items)
static let caribbeanStaggerDelay: TimeInterval = 0.06

/// Group stagger (sections appearing)
static let caribbeanGroupStagger: TimeInterval = 0.12
```

**Acceptance Criteria:**
- [ ] All animation tokens are defined in a central extension (e.g., `Animation+Caribbean.swift`)
- [ ] Spring damping values are all ≥ 0.70 (no bouncy/toy-like feel)
- [ ] Quick feedback is ≤ 0.25s response (instant feel)
- [ ] Dramatic entrances are ≤ 0.55s response (impressive but not slow)
- [ ] Ambient animations use high damping (≥ 0.95) for smooth, slow movement
- [ ] Stagger delays are consistent across all list/grid animations
- [ ] Every animation in the app references a token — no inline hardcoded values

#### Subtask 9.1.2: Define Transition Patterns Between Views

**View transition patterns for light mode:**
```
Tab switching:
  - Content crossfade: 0.2s easeInOut
  - Background ambient layer: no transition (stays persistent)
  - Tab bar indicator: spring slide (caribbeanSpringQuick)

Navigation push:
  - Standard iOS push with custom duration: 0.35s
  - Entering view: slide from right + fade in (offset 30pt → 0)
  - Exiting view: slide left + slight fade out (offset 0 → -15pt)
  - Background: stays static (no movement — grounds the transition)

Modal presentation:
  - Sheet presentation: standard iOS sheet with custom detents (no changes needed)
  - Full-screen modal: crossfade from bottom
    - Entering: y offset 20pt → 0, opacity 0 → 1, caribbeanSpringDramatic
    - Background: dims with caribbeanInk @ 0.25

Pop-in animations (lists, grids):
  - Each item: y offset 12 → 0, opacity 0 → 1
  - Stagger: caribbeanStaggerDelay between items
  - Spring: caribbeanSpringStandard
  - Max stagger items: 8 (items beyond 8 appear without stagger to prevent slow loading)
```

**Acceptance Criteria:**
- [ ] Tab switching feels instant — content appears within 200ms
- [ ] Navigation push feels smooth and grounded (not floaty)
- [ ] Modal presentation has gentle upward movement
- [ ] List items stagger in sequence, creating a pleasant "waterfall" effect
- [ ] Stagger is capped at 8 items to prevent perceived slowness
- [ ] All transitions respect `reduceMotion` (instant, no animation)
- [ ] Transition timings are consistent regardless of device performance

---

### Story 9.2: Define Micro-Interaction Animations

**As a** user interacting with the app,
**I want** every tap, swipe, and state change to have a satisfying physical response,
**So that** the app feels responsive, alive, and rewarding to use.

**Story Points:** 8
**Priority:** P1

#### Subtask 9.2.1: Button & Card Press Animations

**Standardized press feedback for light mode:**
```
Primary CTA button (gradient fill):
  Press: scale 0.97, caribbeanSpringQuick
  Shadow: reduce from caribbeanShadowMedium → caribbeanShadowSubtle
  Brightness: -0.03 (slightly darker — "pushed in")
  Release: scale 1.0, caribbeanSpringStandard, shadow restores
  Haptic: .light impact on press

Secondary button (outline):
  Press: background → caribbeanHover, scale 0.98
  Border color: caribbeanBorderFocus (emphasis on press)
  Release: background → transparent, scale 1.0
  Haptic: none (secondary — less emphasis)

Card press (GlassCardBackground, PremiumTransparentCardBackground):
  Press: scale 0.985 (barely perceptible — cards are larger so less scale)
  Shadow: caribbeanShadowMedium → caribbeanShadowSubtle (card descends)
  Background: caribbeanHover tint overlay
  Release: spring back, caribbeanSpringStandard
  Haptic: .soft impact

Toggle press:
  Tap: caribbeanSpringQuick for thumb position
  Track color: smooth transition 0.2s easeInOut
  Haptic: .rigid impact (satisfying "clack")

Destructive action:
  Press: scale 0.97
  Color: background flashes caribbeanError @ 0.08
  Release: normal
  Haptic: .notificationWarning
```

**Acceptance Criteria:**
- [ ] All pressable elements have consistent, categorized press responses
- [ ] Scale factors are subtle (0.97-0.985) — premium, not cartoon
- [ ] Shadow changes create "depth" — pressed elements feel like they descend
- [ ] Haptic feedback matches the importance of the action
- [ ] Release animations use spring physics (always spring, never linear)
- [ ] Press feedback is immediate — no perceivable delay between touch and visual response

#### Subtask 9.2.2: State Change Micro-Animations

**Animated state transitions for light mode:**
```
Checkbox / task completion:
  - Unchecked → Checked:
    - Circle: caribbeanBorderSubtle stroke → caribbeanSuccess fill
    - Checkmark: draws in with stroke animation (0.25s, easeOut)
    - Scale bounce: 0 → 1.15 → 1.0, caribbeanSpringQuick
    - Celebration: single tiny burst of 4-6 particles, caribbeanSuccess color, 0.3s
  - Checked → Unchecked:
    - Reverse checkmark draw (0.15s, faster than draw-in)
    - Fill: caribbeanSuccess → caribbeanBorderSubtle stroke
    - No particle burst (removing isn't celebrated)

Progress bar increment:
  - Width: animates from current → new width, caribbeanSpringStandard
  - Color: if crossing a threshold (25%, 50%, 75%, 100%):
    - Gradient shifts to warmer tones
    - Single flash pulse on the leading edge (0.3s)
  - 100%: full gradient sweep + gold shimmer overlay (0.5s, once)

Counter increment (XP, word count, streak):
  - Outgoing number: fade out + y offset -8, 0.15s
  - Incoming number: fade in + y offset +8 → 0, caribbeanSpringQuick
  - Content size change: animate with caribbeanSpringQuick
  - Milestone number (every 100, 500, 1000): gold flash, scale 1.1, haptic .success

Skeleton loading → content:
  - Skeleton: caribbeanRecessed with caribbeanElevated shimmer
    - Shimmer: horizontal gradient sweep, 1.5s cycle, smooth
  - Content reveal: crossfade, 0.2s easeInOut
  - Individual items: stagger by caribbeanStaggerDelay
```

**Acceptance Criteria:**
- [ ] Checkbox completion feels celebratory — the checkmark draws in with life
- [ ] Progress bar changes are smooth and satisfying to watch
- [ ] Counter animations prevent numbers from just "jumping" — they flow
- [ ] Skeleton loading shimmer is warm (Caribbean-tinted, not grey)
- [ ] State changes are clear — the user always knows what changed
- [ ] Particle effects on completion are restrained (4-6 particles, not an explosion)
- [ ] All state change animations have fallback for `reduceMotion` (instant, no animation)

#### Subtask 9.2.3: Swipe Gesture Animations

**Practice screen swipe animations for light mode:**
```
FlashCard swipe (correct/incorrect):
  Correct (swipe right):
    - Card: slides right with rotation (8° clockwise)
    - Trail: caribbeanSuccess gradient streak behind card (0.3s, fades)
    - Stamp: "✓" caribbeanSuccess, large, stamped onto card at swipe start
    - Background: brief green flash pulse (caribbeanSuccess @ 0.06, 0.2s)
    - Haptic: .success notification

  Incorrect (swipe left):
    - Card: slides left with rotation (8° counter-clockwise)
    - Trail: caribbeanError gradient streak (0.3s, fades)
    - Stamp: "✗" caribbeanError, large
    - Background: brief warm-red flash (caribbeanError @ 0.04, 0.2s)
    - Haptic: .error notification

  Card entrance (next card):
    - From bottom: y offset 40 → 0, opacity 0 → 1
    - Spring: caribbeanSpringDramatic
    - Delay: 0.1s after previous card exit
    - Slight scale: 0.95 → 1.0

WordBuilder tile drag:
  Pick up: scale 1.08, caribbeanShadowMedium shadow appears
  Dragging: follows finger with 2-frame lag (organic feel)
  Over valid slot: slot border → caribbeanBorderFocus, glow
  Over invalid slot: slot border → caribbeanError @ 0.20, no glow
  Drop valid: scale 1.08 → 1.0, caribbeanSpringQuick, haptic .light
  Drop invalid: spring back to origin, caribbeanSpringStandard, haptic .warning
  Snap-to-grid: caribbeanSpringQuick (fast — should feel magnetically attracted)
```

**Acceptance Criteria:**
- [ ] Flashcard swipe feels physical — rotation, trail, and stamp make it real
- [ ] Correct/incorrect swipes are visually and haptically distinct
- [ ] New card entrance has a satisfying "next challenge awaits" spring
- [ ] WordBuilder tile pickup feels like "grabbing" (scale + shadow)
- [ ] Tile dragging feels smooth with slight lag (organic, not locked to finger)
- [ ] Valid/invalid drop targets provide clear visual signaling during the drag
- [ ] Snap-to-grid is fast enough to feel magnetic
- [ ] All gestures respect `reduceMotion` (reduced animation, still functional)

---

### Story 9.3: Dark ↔ Light Mode Transition Choreography

**As a** user switching between dark and light mode,
**I want** the transition to be a choreographed moment of delight,
**So that** switching modes feels intentional and magical, not jarring.

**Story Points:** 5
**Priority:** P1

#### Subtask 9.3.1: Design the Mode Switch Transition Sequence

**Choreographed transition (dark → light):**
```
Phase 1 (0.0s - 0.15s): Toggle Responds
  - Toggle pill slides to sun position
  - Sun icon begins to glow warm

Phase 2 (0.1s - 0.5s): Warm Wash Expands
  - Radial gradient expands from the toggle position
  - Color: caribbeanGradientSunset → transparent
  - Expansion: 0 → screen diagonal, easeOut
  - Behind the wash: light mode colors are already set

Phase 3 (0.15s - 0.55s): UI Elements Crossfade
  - All UI colors crossfade from dark → light values
  - Timing: 0.4s easeInOut
  - Elements are individually animated (not a single snapshot)
  - Glass cards: blur and tint shift simultaneously

Phase 4 (0.3s - 0.8s): Background Awakens
  - Background layers: dark cosmic → warm Caribbean
  - Stars: fade out
  - Warm sky wash: fades in
  - Breathing orbs: color crossfade (cosmic → Caribbean)

Phase 5 (0.5s - 1.0s): Settle
  - Warm wash gradient fades to 0 (reveals the fully light UI)
  - All ambient animations resume at their normal pace
  - Status bar text: animates from white to black

Total duration: ~1.0s (feels instantaneous but choreographed)
```

**Choreographed transition (light → dark):**
```
Same phasing but reversed:
  - Moon icon glows cosmic purple
  - Cosmic wash expands from toggle (dark purple → transparent)
  - UI elements crossfade to dark values
  - Background: warm → cosmic, stars fade in
  - Settle: cosmic wash fades, dark mode is fully active
```

**Acceptance Criteria:**
- [ ] Mode switch feels like a "moment" — not a jarring flash
- [ ] Warm/cosmic wash creates the illusion of light spreading across the screen
- [ ] No flickering or partial states visible during transition
- [ ] UI elements don't flash to system colors at any point
- [ ] Total transition is ≤ 1.0s (impressive but not slow)
- [ ] `reduceMotion`: instant crossfade (0.2s, no wash effect)
- [ ] Status bar text color transitions smoothly (no sharp black↔white flash)
- [ ] Transition works correctly regardless of which screen the user is on

---

## Epic 10: Accessibility, Polish & Quality Assurance

**Epic Owner:** Quality & Accessibility Lead
**Priority:** P0 — Accessibility is not a feature; it is a requirement. Polish is not optional; it is what separates good from premium.
**Goal:** Ensure the Caribbean light mode is accessible to all users, performs flawlessly across all devices, and withstands rigorous quality testing. A premium experience must be premium for everyone.

### Non-Negotiable Standards

- WCAG 2.1 AA compliance minimum across all light mode screens
- VoiceOver full support with meaningful, contextual labels
- Dynamic Type respect (all text scales correctly)
- Reduce Motion respect (all animations have static fallback)
- Color blindness safe (no information conveyed by color alone)
- Performance budget: 60fps minimum on all supported devices

---

### Story 10.1: WCAG Compliance & Color Contrast Validation

**As a** user with visual needs (reduced sight, color blindness, or bright-light sensitivity),
**I want** the Caribbean light mode to be fully accessible,
**So that** I can enjoy the premium experience regardless of my visual capabilities.

**Story Points:** 8
**Priority:** P0

#### Subtask 10.1.1: Validate All Text Contrast Ratios

**WCAG 2.1 AA minimum contrast requirements:**
```
Normal text (< 18pt or < 14pt bold): 4.5:1 minimum
Large text (≥ 18pt or ≥ 14pt bold): 3:1 minimum
UI components and graphical objects: 3:1 minimum
```

**Validation matrix for Caribbean tokens:**

| Token Pair                         | Usage                  | Target Ratio | Notes                          |
|------------------------------------|------------------------|-------------|--------------------------------|
| caribbeanInk on caribbeanCanvas    | Primary text on bg     | ≥ 7:1       | Must be excellent, not just AA |
| caribbeanInk on caribbeanElevated  | Primary text on cards  | ≥ 7:1       | Cards are primary reading area |
| caribbeanPlum on caribbeanCanvas   | Secondary text on bg   | ≥ 4.5:1     | Must pass AA                   |
| caribbeanPlum on caribbeanElevated | Secondary text on card | ≥ 4.5:1     | Common combination             |
| caribbeanMist on caribbeanCanvas   | Tertiary/hint text     | ≥ 3:1       | Large text only, or non-text   |
| caribbeanMist on caribbeanElevated | Hint text on card      | ≥ 3:1       | Large text or UI component     |
| White on caribbeanGradientPrimary  | Button text on CTA     | ≥ 4.5:1     | Buttons must be fully readable |
| caribbeanInk on caribbeanRecessed  | Input text on tracks   | ≥ 4.5:1     | Progress bars, form fields     |

**Action items if any pair fails:**
```
1. Adjust the lighter color to be darker (increase caribbeanPlum richness)
2. OR adjust the background to be lighter
3. NEVER reduce contrast to achieve "aesthetics"
4. All adjustments must be reviewed with the full token system
5. Document the adjustment and its ripple effects
```

**Acceptance Criteria:**
- [ ] All text-on-background combinations meet WCAG 2.1 AA (4.5:1 minimum)
- [ ] Large text (18pt+) meets 3:1 minimum on all surfaces
- [ ] CTA button text (white on gradients) meets 4.5:1 across the full gradient range
- [ ] Primary text (caribbeanInk) achieves 7:1+ on all surfaces (AAA standard)
- [ ] Tested with Xcode Accessibility Inspector color contrast tool
- [ ] Tested on an actual device in bright sunlight (real-world validation)
- [ ] No text contrast is "borderline" — all comfortably exceed minimums

#### Subtask 10.1.2: Color Blindness Safe Design Validation

**Color blindness types to validate against:**
```
Protanopia (red-blind, ~1.3% of males):
  - Risk: caribbeanError red may be indistinguishable from caribbeanSuccess green
  - Solution: Always pair color with icon (✓ for success, ✗ for error)
  - Test: Apply protanopia filter and verify all states are distinguishable

Deuteranopia (green-blind, ~5.9% of males):
  - Risk: Same as protanopia — red/green confusion
  - Solution: Same icon-pairing requirement
  - Test: Apply deuteranopia filter and verify

Tritanopia (blue-blind, ~0.02% of population):
  - Risk: caribbeanGradientPrimary lavender may lose distinction
  - Solution: Ensure gradient endpoints have sufficient lightness contrast
  - Test: Apply tritanopia filter and verify key UI is distinguishable

Achromatopsia (complete color blindness, ~0.003%):
  - Risk: Most Caribbean palette becomes similar grey tones
  - Solution: Ensure sufficient lightness variety in all states
  - Test: Desaturate UI completely and verify all states are distinguishable
```

**Acceptance Criteria:**
- [ ] No information is conveyed by color alone — always pair with icon, text, or pattern
- [ ] FlashCard correct/incorrect: icon + color + haptic (triple-coded)
- [ ] Progress indicators: color + position + text label (triple-coded)
- [ ] Status badges: color + icon + text (triple-coded)
- [ ] App tested with all four CVD simulation filters in Xcode
- [ ] App is fully usable in "Greyscale" accessibility mode

#### Subtask 10.1.3: Dynamic Type & Text Scaling Support

**Dynamic Type requirements:**
```
All text in the app must scale correctly with Dynamic Type preference:

Size categories to test:
  - xSmall through AX5 (Accessibility sizes)
  - Focus: Large, Extra Large, AX1, AX3

Layout adaptations:
  - Text truncation: use .lineLimit(nil) where content must be fully readable
  - Card heights: must grow with text size
  - Grid layouts: switch from 2-column to 1-column at AX1+
  - Button heights: minimum 44pt hit target, grows with text
  - Navigation bar: title truncates at AX3+ (not wraps)

Font usage:
  - All text uses .font(.headline), .font(.body), etc. — never hardcoded sizes
  - If a custom size is needed: @ScaledMetric for dynamic scaling
```

**Acceptance Criteria:**
- [ ] All text in the app responds to Dynamic Type settings
- [ ] At AX3 (Accessibility Extra Extra Extra Large), all text is readable
- [ ] No text is clipped or truncated at any Dynamic Type size (unless explicitly designed)
- [ ] Cards/containers grow to accommodate larger text
- [ ] Grid layouts adapt (2 → 1 column) at larger type sizes
- [ ] Button hit targets remain ≥ 44pt at all type sizes
- [ ] App tested at xSmall, Large, AX1, AX3, AX5 sizes

---

### Story 10.2: VoiceOver & Assistive Technology Support

**As a** VoiceOver user,
**I want** the Caribbean light mode to provide meaningful, contextual accessibility labels,
**So that** I can navigate and use the app efficiently with assistive technology.

**Story Points:** 5
**Priority:** P0

#### Subtask 10.2.1: Audit VoiceOver Labels for Light Mode Elements

**Key areas to audit:**
```
Dashboard:
  - Stat cards: "Words learned, 1,247" (value + label, not just "1247")
  - Game cards: "FlashCards practice, 85% accuracy, continue practicing" (contextual)
  - Activity feed: "Today, FlashCards, 15 minutes, 92% accuracy"

Practice screens:
  - FlashCard: "Word card showing [word]. Double tap to flip."
  - WordBuilder: "Letter tile, [letter]. Double tap to place in slot [number]."
  - Grammar: "Question [number] of [total]. [question text]."

Navigation:
  - Tab bar: "Dashboard tab, selected", "Categories tab"
  - Back button: "Go back to [previous screen name]"

Membership:
  - Tier card: "Pro membership, $9.99 per month, includes [feature list]"
  - CTA: "Upgrade to Pro, $9.99 per month"

Celebrations:
  - "Congratulations! Category [name] completed. [stats]. Dismiss."
```

**Acceptance Criteria:**
- [ ] Every interactive element has a meaningful accessibility label
- [ ] Labels include context — not just the visible text but the meaning
- [ ] Value + label pairs are read correctly (not just numbers)
- [ ] Button actions are announced ("Double tap to..." where non-obvious)
- [ ] Celebration overlays are announced and dismissible
- [ ] VoiceOver rotor headings work for section navigation
- [ ] No "Button" or "Image" labels without descriptive context

#### Subtask 10.2.2: Ensure Accessibility Trait Correctness

**Traits to validate:**
```
.isButton: All tappable elements that trigger actions
.isHeader: Section headers in scrollable views
.isSelected: Active tab, active filter, selected option
.isImage: Decorative images (marked .accessibilityHidden)
.updatesFrequently: Live counters, timers, progress bars
.playsSound: Sound-producing interactions (with audio description)
.allowsDirectInteraction: Drag-and-drop tiles (WordBuilder)
```

**Acceptance Criteria:**
- [ ] All buttons are marked `.isButton`
- [ ] Section headers support VoiceOver rotor navigation
- [ ] Selected states are announced (tabs, filters, options)
- [ ] Decorative imagery is hidden from VoiceOver
- [ ] Live regions update VoiceOver when values change (timers, XP)
- [ ] Drag-and-drop has alternative VoiceOver interaction
- [ ] Full app traversal with VoiceOver completes without dead-ends or traps

---

### Story 10.3: Performance & Device Compatibility Testing

**As a** user on any supported device,
**I want** the Caribbean light mode to perform flawlessly,
**So that** the premium experience is consistent regardless of my hardware.

**Story Points:** 8
**Priority:** P0

#### Subtask 10.3.1: Define Performance Budgets

**Performance budget for Caribbean light mode:**
```
Rendering:
  - Frame rate: 60fps minimum on all screens (30fps acceptable during transitions)
  - Frame drops: ≤ 2 dropped frames per 10-second window
  - GPU utilization: ≤ 40% during ambient animation (background layers, orbs)
  - GPU utilization: ≤ 70% during transitions (mode switch, celebrations)

Memory:
  - Additional memory for light mode tokens: ≤ 2MB over dark mode baseline
  - Background layer textures: ≤ 8MB total
  - No memory leaks during repeated dark ↔ light mode switching (100+ cycles)

Battery:
  - Background animation power draw: ≤ 5% per hour (screen-on, idle)
  - Total app power draw in light mode: within 10% of dark mode draw
  - OLED note: light mode inherently uses more power on OLED; no target differential

Launch:
  - Additional startup time for light mode initialization: ≤ 50ms
  - First frame render: light mode assets must be available by first frame

Storage:
  - Light mode specific assets: ≤ 1MB additional (most is code, not assets)
```

**Acceptance Criteria:**
- [ ] 60fps maintained on iPhone 12 (minimum target device) across all screens
- [ ] No frame drops during parallax scrolling, swipe gestures, or tab switching
- [ ] GPU utilization measured and under budget on low-end target device
- [ ] 100 dark↔light switches produce no memory leaks (Instruments validation)
- [ ] App launch time is not meaningfully impacted by light mode support
- [ ] Battery drain is within 10% of dark mode for comparable usage patterns
- [ ] All measurements captured in Instruments and documented

#### Subtask 10.3.2: Device Compatibility Matrix

**Full device compatibility testing:**
```
Screen sizes:
  - iPhone SE (3rd gen) — smallest screen, 4.7"
  - iPhone 15 — standard, 6.1"
  - iPhone 15 Pro Max — largest phone, 6.7"
  - iPad mini (6th gen) — compact tablet
  - iPad Air (5th gen) — standard tablet
  - iPad Pro 12.9" — largest supported device

iOS versions:
  - Current iOS (17.x) — primary target
  - Previous iOS (16.x) — secondary target (if supported)

Special modes:
  - Split View (iPad)
  - Slide Over (iPad)
  - Stage Manager (iPad, macOS)

Environmental:
  - Bright sunlight (display at max brightness)
  - Night (display at minimum brightness)
  - True Tone on/off
  - Night Shift on/off
  - Color Filters accessibility (increased contrast, color tints)
```

**Acceptance Criteria:**
- [ ] All phones render correctly without overflow, clipping, or misalignment
- [ ] iPad layouts use available space effectively (not just phone-sized content centered)
- [ ] Split View maintains usable layout at all split ratios
- [ ] App is visible and usable in direct sunlight (max brightness, outdoor)
- [ ] App is comfortable to use in darkness (min brightness, no harsh elements)
- [ ] True Tone and Night Shift don't cause unintended color shifts
- [ ] All accessibility color filters produce usable (if not ideal) experiences

---

### Story 10.4: Visual Regression Testing Framework

**As a** developer working on light mode,
**I want** automated visual regression testing,
**So that** changes don't accidentally break previously-fixed screens.

**Story Points:** 8
**Priority:** P1

#### Subtask 10.4.1: Define Snapshot Test Suite

**Screens to capture for visual regression baseline:**
```
Critical (must pass before merge):
  - Dashboard (light mode)
  - FlashCards game in-progress (light mode)
  - WordBuilder game in-progress (light mode)
  - Grammar game in-progress (light mode)
  - Categories grid (light mode)
  - Journey timeline (light mode)
  - Profile overview (light mode)
  - Membership tiers (light mode)
  - Language selection (light mode)

States within screens:
  - Dashboard: with data / empty state / loading skeleton
  - FlashCards: front of card / back of card / swipe mid-gesture
  - WordBuilder: tiles scattered / word partially built / word complete
  - Categories: all unlocked / mixed / filter active
  - Membership: each tier expanded / comparison table open

Device configurations per snapshot:
  - iPhone SE (smallest)
  - iPhone 15 (standard)
  - Dynamic Type: default + AX1
  - Light mode only (dark is separate test suite)

Total estimated snapshots: ~60 unique configurations
```

**Acceptance Criteria:**
- [ ] Baseline snapshots captured for all critical screens
- [ ] Snapshot diff tolerance set to 0.1% (catches real changes, ignores anti-aliasing)
- [ ] CI/CD pipeline runs snapshot tests on every PR touching light mode files
- [ ] Failed snapshot tests block merge until reviewed and approved
- [ ] Snapshot test suite runs in < 3 minutes (parallel execution)
- [ ] Baseline snapshots are version-controlled and reviewable

#### Subtask 10.4.2: Define Manual QA Test Plan

**Manual QA checklist for each release that touches light mode:**
```
Visual check (per screen):
  □ All text is readable with good contrast
  □ All interactive elements have visible boundaries
  □ Glass cards have visible structure (border, shadow, or tint)
  □ Gradients are smooth (no banding)
  □ Animations are smooth (no jank or stuttering)
  □ Dark ↔ light switch transitions smoothly
  □ No hardcoded dark-mode-only colors visible

Interaction check:
  □ All buttons provide press feedback
  □ All swipe gestures work correctly
  □ All toggles animate smoothly
  □ Tab switching is responsive
  □ Navigation push/pop works correctly
  □ Modals present and dismiss correctly

Accessibility check:
  □ VoiceOver can navigate all screens without getting stuck
  □ Dynamic Type Large renders correctly
  □ Dynamic Type AX3 renders correctly (no clipping)
  □ Reduce Motion provides static alternatives to all animations
  □ Bold Text setting changes font weights appropriately

Performance check:
  □ No visible frame drops during scrolling
  □ Background animations are smooth
  □ Mode switch doesn't stutter
  □ Memory usage stable after 5 minutes of mixed use
```

**Acceptance Criteria:**
- [ ] Manual QA checklist is documented and versioned
- [ ] QA team signs off before each release
- [ ] Regression issues found in QA are added to the checklist
- [ ] Checklist covers visual, interaction, accessibility, and performance
- [ ] Average time to complete checklist: < 45 minutes per tester

---

## Appendix A: Implementation Priority Matrix

### Phase 1: Foundation (Weeks 1-2)
| Epic | Story | Priority | Effort | Impact | Dependencies |
|------|-------|----------|--------|--------|-------------|
| 1    | 1.1-1.5 | P0    | L      | Critical | None — all else depends on this |
| 10   | 10.1  | P0       | M      | Critical | Epic 1 (validates tokens) |

### Phase 2: Core Fixes (Weeks 3-5)
| Epic | Story | Priority | Effort | Impact | Dependencies |
|------|-------|----------|--------|--------|-------------|
| 2    | 2.1-2.4 | P0    | L      | High   | Epic 1 |
| 3    | 3.1-3.3 | P0    | M      | High   | Epics 1, 2 |
| 5    | 5.1-5.3 | P0    | XL     | Critical | Epics 1, 2 (fixes invisible elements) |

### Phase 3: Polish & Elevation (Weeks 6-8)
| Epic | Story | Priority | Effort | Impact | Dependencies |
|------|-------|----------|--------|--------|-------------|
| 4    | 4.1-4.5 | P1    | L      | High   | Epics 1, 2, 3 |
| 6    | 6.1-6.3 | P1    | M      | Medium | Epics 1, 2 |
| 7    | 7.1-7.4 | P1    | L      | High   | Epics 1, 2 (revenue impact) |

### Phase 4: Premium Experience (Weeks 9-12)
| Epic | Story | Priority | Effort | Impact | Dependencies |
|------|-------|----------|--------|--------|-------------|
| 8    | 8.1-8.3 | P1    | XL     | High   | Epics 1, 4 |
| 9    | 9.1-9.3 | P1    | L      | High   | Epics 1-8 |
| 10   | 10.2-10.4 | P0  | L      | Critical | All epics |

### Effort Legend
- **S** = 1-2 days (1 developer)
- **M** = 3-5 days (1 developer)
- **L** = 1-2 weeks (1 developer)
- **XL** = 2-3 weeks (1-2 developers)

---

## Appendix B: Success Metrics

### Quantitative Metrics
| Metric | Current (est.) | Target | Measurement |
|--------|---------------|--------|-------------|
| Light mode daily active % | ~15% | 35%+ | Analytics: mode preference |
| Light mode retention (D7) | Unknown | Within 5% of dark mode | Cohort analysis |
| Membership upgrade rate (light mode users) | Unknown | Within 10% of dark mode | Funnel analytics |
| App Store reviews mentioning "light mode" negatively | Unknown | 0 per quarter | Review monitoring |
| Accessibility audit pass rate | Unknown | 100% WCAG AA | Automated + manual |
| Frame rate (light mode average) | Unknown | ≥ 58fps | Instruments profiling |

### Qualitative Metrics
| Metric | Method | Frequency |
|--------|--------|-----------|
| User satisfaction with light mode | In-app survey (1-5 stars) | Monthly |
| "Premium feel" perception | A/B test: before/after | One-time post-launch |
| Design consistency rating | Internal design review | Per epic completion |
| Accessibility feedback | User support tickets | Ongoing |

---

## Appendix C: Risk Register

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Token refactoring breaks dark mode | Medium | Critical | All changes gated by `!isDark` check; shared tokens work in both modes |
| Performance regression from background layers | Low | High | Performance budget defined; Instruments profiling on every PR |
| WCAG contrast failures after token adjustment | Low | Critical | Automated contrast testing in CI; manual sunlight testing |
| Dynamic Type breaks layouts | Medium | High | Snapshot tests at AX1 and AX3 sizes; manual QA checklist |
| Mode switch transition janks on older devices | Medium | Medium | Respect reduceMotion; test on iPhone 12 (baseline device) |
| Caribbean palette feels too "different" from dark mode | Low | Medium | User testing; consistent brand elements (logo, icons, layout) bridge the gap |
| Membership conversion drops | Low | Critical | A/B test light mode membership redesign; monitor funnel closely |

---

## Appendix D: File Reference — Key Files to Modify

| File | Epic | Changes |
|------|------|---------|
| `Extensions.swift` | 1 | Add ~40 new Caribbean tokens (surfaces, shadows, borders, gradients) |
| `ThemeManager.swift` | 1, 9 | Add theme transition choreography support |
| `GlassDivider.swift` | 2 | Adapt GlassCardBackground, GlassPanelWrapper, AnimatedProgressBar |
| `LiquidGlassCard.swift` | 2 | Adapt PremiumTransparentCardBackground for light mode |
| `TierGlassCard.swift` | 2, 7 | Remove forced dark mode; add light mode glass treatment |
| `ContentView.swift` | 3 | Tab bar and nav bar light enhancements |
| `DashboardView.swift` | 4 | Stat cards, game cards, activity feed, empty states |
| `FlashCardsView.swift` | 5 | Fix invisible elements, adapt card flip, swipe trails |
| `WordBuilderView.swift` | 5 | Fix invisible tiles/slots, adapt color gradients |
| `GrammarView.swift` | 5 | Fix hardcoded dark panels, adapt question cards |
| `JourneyView.swift` | 6 | Enhance timeline, milestone cards, level display |
| `CategoriesView.swift` | 6 | Category cards, search bar, filter pills |
| `ProfileView.swift` | 7 | Header, calendar, settings panels |
| `MembershipView.swift` | 7 | Fix comparison toggle, redesign tier cards |
| `LanguageSelectionView.swift` | 7 | Replace inline RGB with tokens |
| `LayoutBackgroundView.swift` | 8 | Complete background layer redesign |
| `BreathingOrbsView.swift` | 8 | Caribbean orb colors and behavior |
| New: `Animation+Caribbean.swift` | 9 | Animation token library |

---

*Document version: 1.0*
*Author: Senior Staff UX Designer / Product Owner*
*Created: comprehensive Caribbean light mode revamp specification*
*Total stories: 35 | Total subtasks: 65+ | Total acceptance criteria: 250+*
