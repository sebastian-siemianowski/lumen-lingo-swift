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
