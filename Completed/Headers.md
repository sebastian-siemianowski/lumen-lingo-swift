# Epic: Dashboard Light-Mode Section Headers & Dividers — "Caribbean Waterline"

> *"The details are not the details. They make the design."* — Charles Eames

## Design Philosophy

This epic elevates two overlooked elements — section dividers and content headers — from functional afterthoughts into signature moments of craft. The goal is not decoration; it is precision. Every gradient stop, every spacing value, every opacity is derived from intentional mathematical relationships rooted in the golden ratio (φ = 1.618) and the Fibonacci sequence (5, 8, 13, 21, 34).

The metaphor is a **Caribbean morning shoreline**: the divider is the horizon where turquoise water meets sky, with a single point of golden sunlight reflecting off the surface. The headers are the hand-lettered signs of a boutique island resort — warm, confident, inviting, with the quiet authority of master calligraphy.

### The Three UX Principles

1. **Material Honesty** — Light refracting through water, not drawn lines. Every visual element should feel like it *exists* in the Caribbean light-mode environment, not like it was placed on top of it.

2. **Mathematical Harmony** — The φ-derived spacing grid (8, 13, 21, 34pt) creates visual rhythm that the eye perceives as "beautiful" without conscious analysis. Font sizes, icon dimensions, padding, and gradient inflection points all lock to this grid.

3. **Restrained Warmth** — The 60-30-10 color rule: 60% neutral (caribbeanInk, caribbeanCanvas), 30% signature (caribbeanOcean, caribbeanLagoon), 10% warm accent (caribbeanSunrise, caribbeanCoral). The warm 10% is what creates emotional connection — the "sun on water" moment.

### Current State Problems

| Element | Current Light Mode | Problem |
|---|---|---|
| GlassDivider | Symmetric 5-stop gradient, caribbeanLagoon, 0.15 opacity | Generic, no personality, reads as "system separator" not "design element" |
| "Choose Your Adventure" header | 48pt icon box + flat 28×3pt turquoise bar + solid ink text | Accent bar is a mechanical placeholder; text lacks typographic craft; feels like a wireframe |
| "Start a game to boost your skills" subtitle | 13pt caribbeanPlum, no tracking | Orphaned below title with no visual relationship to the accent elements |
| "Recent Activity" header | 3×16pt vertical turquoise bar + solid ink text | Inconsistent with games header design language; feels like a different app |
| Divider-to-section spacing | Standard VStack spacing | No intentional breathing room; sections feel crowded together |

### Color Tokens Used (Reference)

```
caribbeanInk        → #2D1B4E (deep aubergine — headings)
caribbeanPlum       → #6B4C8A (warm plum — subtitles)
caribbeanMist       → #9B8EB0 (dusty orchid — tertiary)
caribbeanOcean      → #0EA5E9 (signature turquoise)
caribbeanLagoon     → #06B6D4 (deeper turquoise)
caribbeanSunrise    → #FB923C (golden amber)
caribbeanCoral      → #FB7185 (warm coral)
caribbeanShallows   → #67E8F9 (pale turquoise)
caribbeanFoam       → #ECFDF5 (seafoam white)
caribbeanSand       → #FDE68A (warm sand gold)
caribbeanGradientOcean   → [#0EA5E9, #06B6D4, #0891B2]
caribbeanGradientSunset  → [#FB923C, #F472B6, #C084FC]
caribbeanGradientWarm    → [#FB923C, #F59E0B, #FDE68A]
```

---

## Story 1: Caribbean Waterline Divider — Light Mode

**As a** user viewing the Dashboard in light mode,
**I want** the section dividers to feel like a natural part of the Caribbean visual language — a horizon line where ocean meets sky with a point of golden sunlight,
**So that** every scroll through the dashboard feels like a curated, resort-quality experience rather than a utilitarian layout.

### 1.1 Design Specification

**Anatomy of the Waterline Divider (light mode only — dark mode unchanged):**

```
 ← 38.2% →            ← 23.6% →            ← 38.2% →
[transparent]───[ocean fade-in]───[☀ warm shimmer]───[ocean fade-out]───[transparent]
                                       ↕
                              soft turquoise underglow
```

The proportions 38.2% / 23.6% / 38.2% derive from φ: the outer fade zones are each (1 - 1/φ) = 0.382, and the center luminous zone is 1 - 2(0.382) = 0.236.

**Gradient Structure (9-stop `LinearGradient`):**

| Stop | Position | Color | Opacity |
|------|----------|-------|---------|
| 0 | 0.00 | caribbeanOcean | 0.00 |
| 1 | 0.15 | caribbeanOcean | 0.04 |
| 2 | 0.382 | caribbeanLagoon | 0.14 |
| 3 | 0.44 | caribbeanSunrise | 0.10 |
| 4 | 0.50 | caribbeanSunrise | 0.18 |
| 5 | 0.56 | caribbeanSunrise | 0.10 |
| 6 | 0.618 | caribbeanLagoon | 0.14 |
| 7 | 0.85 | caribbeanOcean | 0.04 |
| 8 | 1.00 | caribbeanOcean | 0.00 |

**Note:** The warm center (stops 3-5) spans only 12% of the width — restrained enough to be perceived as "a glint of sunlight" not "a gold bar." The turquoise flanks (stops 2,6) at the φ-inflection points create the ocean-meets-sky moment.

**Underglow:**
- Color: `caribbeanLagoon` at 0.06 opacity
- Radius: 6pt
- Offset: y = 1pt (light comes from above)

**Line Dimensions:**
- Height: 1pt (retina-crisp, never blurry)
- Horizontal padding: 34pt each side (Fibonacci) — pulled in from edges to feel intentional, not edge-to-edge

**Optional Center Ornament (`.ornate` style):**
A tiny diamond shape at the exact center:
- Size: 5pt × 5pt, rotated 45°
- Fill: `caribbeanGradientWarm`
- Border: `caribbeanOcean` at 0.08 opacity, 0.5pt lineWidth
- Use case: Between the hero section and games section (primary divider). Do NOT use between games and recent activity (secondary divider uses plain waterline).

### 1.2 Acceptance Criteria

- [ ] **AC 1.2.1**: In light mode, `GlassDivider` renders a 9-stop asymmetric gradient with warm center shimmer (caribbeanSunrise) flanked by turquoise ocean fades, using φ-derived position stops at 0.382 and 0.618.
- [ ] **AC 1.2.2**: Divider line height is exactly 1pt with a soft turquoise underglow (caribbeanLagoon, 0.06 opacity, 6pt blur radius, 1pt y-offset).
- [ ] **AC 1.2.3**: Horizontal inset is 34pt from each edge (not flush to screen).
- [ ] **AC 1.2.4**: An `.ornate` style variant renders a 5×5pt diamond ornament at center, filled with caribbeanGradientWarm, with a 0.5pt caribbeanOcean border at 0.08 opacity.
- [ ] **AC 1.2.5**: The primary dashboard divider (below hero/soundscape, above games) uses `.ornate` style. The secondary divider (below games, above recent activity) uses plain waterline.
- [ ] **AC 1.2.6**: Dark mode rendering is completely unchanged — existing GlassDivider behavior preserved.
- [ ] **AC 1.2.7**: VoiceOver announces dividers as decorative (`.accessibilityHidden(true)`).

### 1.3 Implementation Notes

Add a `DividerStyle` enum to `GlassDivider`:

```swift
enum DividerStyle {
    case standard    // current behavior (dark mode always uses this)
    case waterline   // light-mode 9-stop gradient
    case ornate      // waterline + center diamond ornament
}
```

The `GlassDivider` initializer gains an optional `style` parameter (default `.standard`). In light mode, `.standard` auto-promotes to `.waterline`. The `.ornate` style must be explicitly requested.

---

## Story 2: "Choose Your Adventure" Section Header — Calligraphy Brushstroke

**As a** user viewing the games section in light mode,
**I want** the "Choose Your Adventure" header to feel like an invitation hand-lettered by a master typographer — warm, confident, with a signature brushstroke accent,
**So that** I feel emotionally drawn to explore the games below, not just informed that they exist.

### 2.1 Design Specification

**Layout Grid (φ-derived):**

```
┌─[Icon 44pt]─┐  13pt  ┌──────────────────────────────────────┐
│   gradient   │  gap   │  Choose Your Adventure               │
│   container  │        │  ═══════════════──── (brushstroke)    │
│              │        │  Start a game to boost your skills    │
└──────────────┘        └──────────────────────────────────────┘
```

**Icon Container (refined):**
- Size: 44 × 44pt (Fibonacci-adjacent, replaces current 48pt)
- Corner radius: 13pt (Fibonacci)
- Fill: `caribbeanGradientOcean`
- Inner highlight: white at 0.20 opacity, top-to-center gradient
- Border: caribbeanShallows at 0.15 opacity, 0.5pt lineWidth
- Shadow: dual-layer
  - Primary: caribbeanOcean at 0.12 opacity, radius 8pt, y: 3pt
  - Ambient: caribbeanLagoon at 0.06 opacity, radius 13pt, y: 0pt
- Icon: `wand.and.stars`, 20pt medium weight, white with 0.25 white text shadow at radius 1.5

**Title "Choose Your Adventure":**
- Font: system 20pt, bold weight (bumped from 19pt for golden-ratio alignment with 13pt subtitle: 20/13 ≈ 1.538 ≈ φ⁻⁰·²⁵)
- Tracking: 0.3pt
- Color: caribbeanInk
- Line height: default

**Calligraphy Brushstroke Underline:**

This is the signature element. A custom `Shape` that draws an asymmetric tapered stroke — thick at the leading edge, tapering to a whisper at the trailing edge, like a single confident brush mark.

```
   ║══════════════════════════───────┄┄┄
   3pt                                 0.5pt
   ├── 80pt total width ──────────────┤
```

- Total width: 80pt
- Leading height: 3pt
- Trailing height: 0.5pt
- The taper follows a quadratic Bézier curve (easeOut) not a linear slope
- Fill: 3-stop gradient:
  - Leading: caribbeanOcean (full saturation)
  - Center (60%): caribbeanLagoon
  - Trailing: caribbeanShallows at 0.4 opacity (fades to nothing)
- Vertical offset: 3pt below title baseline
- No shadow (the gradient fade IS the softness)

**Subtitle "Start a game to boost your skills":**
- Font: system 13pt, regular weight (Fibonacci)
- Tracking: 0.15pt
- Color: caribbeanPlum
- Top spacing: 5pt from brushstroke (Fibonacci)

**VStack internal spacing:**
- Title to brushstroke: 3pt
- Brushstroke to subtitle: 5pt
- Total title block height: ~46pt

**HStack spacing (icon to text block):** 13pt (Fibonacci)

### 2.2 Acceptance Criteria

- [ ] **AC 2.2.1**: Icon container is 44×44pt with 13pt corner radius, filled with `caribbeanGradientOcean`, dual-layer shadow (ocean 0.12/8pt/3pt-y + lagoon 0.06/13pt/0pt-y), white inner highlight at 0.20 opacity.
- [ ] **AC 2.2.2**: Title "Choose Your Adventure" renders at system 20pt bold, caribbeanInk, 0.3pt tracking.
- [ ] **AC 2.2.3**: A `CalligraphyBrushstroke` custom Shape renders below the title: 80pt wide, tapering from 3pt height (leading) to 0.5pt (trailing) via quadratic Bézier easeOut curve.
- [ ] **AC 2.2.4**: Brushstroke fill is a 3-stop gradient: caribbeanOcean → caribbeanLagoon → caribbeanShallows at 0.4 opacity.
- [ ] **AC 2.2.5**: Subtitle "Start a game to boost your skills" at 13pt regular, caribbeanPlum, 0.15pt tracking, 5pt below brushstroke.
- [ ] **AC 2.2.6**: All spacing values are Fibonacci-derived: icon-to-text 13pt, title-to-brushstroke 3pt, brushstroke-to-subtitle 5pt.
- [ ] **AC 2.2.7**: In dark mode, the header renders exactly as it does today — all changes are light-mode only.
- [ ] **AC 2.2.8**: The pulsing glow animation on the icon is REMOVED in light mode (Caribbean aesthetic is calm, not attention-seeking). Dark mode keeps its pulse.

### 2.3 Implementation Notes

Create `CalligraphyBrushstroke` as a standalone `Shape` in a new file `Views/Shared/CalligraphyBrushstroke.swift` (or inline if small):

```swift
struct CalligraphyBrushstroke: Shape {
    let width: CGFloat   // 80
    let leadingHeight: CGFloat  // 3
    let trailingHeight: CGFloat // 0.5

    func path(in rect: CGRect) -> Path {
        var path = Path()
        path.move(to: CGPoint(x: 0, y: 0))
        path.addLine(to: CGPoint(x: 0, y: leadingHeight))
        // Quadratic Bézier for easeOut taper
        path.addQuadCurve(
            to: CGPoint(x: width, y: leadingHeight - trailingHeight),
            control: CGPoint(x: width * 0.65, y: leadingHeight)
        )
        path.addLine(to: CGPoint(x: width, y: leadingHeight - trailingHeight - trailingHeight))
        path.addQuadCurve(
            to: CGPoint(x: 0, y: 0),
            control: CGPoint(x: width * 0.35, y: 0)
        )
        path.closeSubpath()
        return path
    }
}
```

---

## Story 3: "Recent Activity" Section Header — Tidal Consistency

**As a** user scrolling to the Recent Activity section in light mode,
**I want** the header to share the same design language as "Choose Your Adventure" — recognizably from the same family, but at a secondary hierarchy level,
**So that** the dashboard reads as a single cohesive composition, not a patchwork of disparate elements.

### 3.1 Design Specification

**Design Principle — Secondary Hierarchy:**

"Recent Activity" is the *second* content section. It must visually rhyme with "Choose Your Adventure" but at reduced emphasis. The rules:

- Icon container: **34pt** (vs 44pt for primary) — ratio 34/44 ≈ 0.773, close to 1/φ⁰·⁵
- No subtitle (subtitle is a primary-section privilege)
- Brushstroke underline: **55pt** wide (vs 80pt) — ratio 55/80 ≈ 0.688 ≈ φ⁻⁰·⁸
- Title font: **17pt** bold (vs 20pt) — ratio 17/20 ≈ 0.85, a conscious step-down

**Layout:**

```
┌─[Icon 34pt]─┐  13pt  ┌──────────────────────────────┐
│   gradient   │  gap   │  Recent Activity              │
│   container  │        │  ═══════════──── (brushstroke) │
└──────────────┘        └──────────────────────────────┘
         ↓ 8pt gap ↓
    ┌─── Segmented Picker ───┐
```

**Icon Container:**
- Size: 34 × 34pt
- Corner radius: 10pt
- Fill: `caribbeanGradientOcean`
- Inner highlight: white at 0.18 opacity
- Border: caribbeanShallows at 0.12 opacity, 0.5pt
- Shadow: single layer — caribbeanOcean at 0.10 opacity, radius 6pt, y: 2pt
- Icon: `clock.arrow.circlepath`, 16pt medium weight, white

**Title "Recent Activity":**
- Font: system 17pt, bold (step down from 20pt)
- Tracking: 0.25pt
- Color: caribbeanInk

**Brushstroke Underline (secondary variant):**
- Width: 55pt (shorter than primary's 80pt)
- Leading height: 2.5pt (slightly thinner than primary's 3pt)
- Trailing height: 0.5pt
- Same Bézier taper, same gradient fills

**Spacing:**
- Icon-to-text: 13pt (same as primary — shared grid)
- Title-to-brushstroke: 3pt
- Header-to-picker: 8pt (Fibonacci)

### 3.2 Acceptance Criteria

- [ ] **AC 3.2.1**: "Recent Activity" header gains a 34×34pt icon container with `clock.arrow.circlepath` icon, filled with caribbeanGradientOcean, 10pt corner radius, single-layer shadow (ocean 0.10/6pt/2pt-y).
- [ ] **AC 3.2.2**: Title renders at system 17pt bold, caribbeanInk, 0.25pt tracking.
- [ ] **AC 3.2.3**: A secondary-scale `CalligraphyBrushstroke` (55pt wide, 2.5pt leading → 0.5pt trailing) renders below the title with 3pt gap.
- [ ] **AC 3.2.4**: The old vertical 3×16pt accent bar is removed in light mode.
- [ ] **AC 3.2.5**: Segmented picker spacing from header is 8pt.
- [ ] **AC 3.2.6**: The icon container, brushstroke, and spacing proportions maintain a φ-consistent ratio to the "Choose Your Adventure" primary header (34/44 for icon, 55/80 for stroke, 17/20 for font).
- [ ] **AC 3.2.7**: Dark mode renders exactly as today — gradient text, no icon container, no brushstroke.

### 3.3 Implementation Notes

Reuse `CalligraphyBrushstroke` shape with parameterized width and height values. Extract the icon-container + brushstroke pattern into a reusable `SectionHeader` component if the pattern proves useful elsewhere:

```swift
struct CaribbeanSectionHeader: View {
    let title: String
    let icon: String
    let subtitle: String?
    let hierarchy: Hierarchy

    enum Hierarchy {
        case primary   // 44pt icon, 20pt text, 80pt stroke, has subtitle
        case secondary // 34pt icon, 17pt text, 55pt stroke, no subtitle
    }
}
```

---

## Story 4: Breathing Room — φ-Derived Section Spacing

**As a** user scrolling through the dashboard in light mode,
**I want** generous, intentional whitespace between sections that follows a consistent mathematical rhythm,
**So that** each section feels like its own "room" in a gallery — distinct, unhurried, with space to breathe.

### 4.1 Design Specification

**Current spacing (approximate):** Sections are separated by a `GlassDivider` inside VStack spacing. The spacing feels uniform and slightly cramped.

**New spacing model (light mode):**

```
 ┌─ Hero / Soundscape Section ──────┐
 └──────────────────────────────────┘
          ↕ 21pt padding
    ──── Waterline Divider (ornate) ────
          ↕ 21pt padding
 ┌─ Games Section Header ──────────┐
 │  Cards...                        │
 └──────────────────────────────────┘
          ↕ 13pt padding
    ──── Waterline Divider (plain) ────
          ↕ 13pt padding
 ┌─ Recent Activity Header ────────┐
 │  Rows...                         │
 └──────────────────────────────────┘
```

**Key values:**
- Primary divider (ornate) top/bottom padding: **21pt** each (Fibonacci) — more breathing room because this separates the two major zones (hero vs. content)
- Secondary divider (plain) top/bottom padding: **13pt** each (Fibonacci) — tighter because games and activity are sibling sections

**The ratio:** 21/13 ≈ 1.615 ≈ φ. The primary gap (42pt total) is φ× the secondary gap (26pt total). This creates a perceptible but not jarring rhythm difference that the eye reads as intentional hierarchy.

### 4.2 Acceptance Criteria

- [ ] **AC 4.2.1**: The primary divider (between hero/soundscape and games section) has exactly 21pt vertical padding above and below in light mode.
- [ ] **AC 4.2.2**: The secondary divider (between games and recent activity) has exactly 13pt vertical padding above and below in light mode.
- [ ] **AC 4.2.3**: The spacing ratio between primary and secondary divider zones is φ (42pt / 26pt ≈ 1.615).
- [ ] **AC 4.2.4**: Dark mode spacing remains unchanged.

### 4.3 Implementation Notes

Wrap dividers in light mode with explicit `.padding(.vertical, value)` rather than relying on parent VStack spacing. This preserves dark-mode behavior while giving light mode its own rhythm.

---

## Story 5: Segmented Picker Refinement — Visual Cohesion

**As a** user viewing the Recent Activity section in light mode,
**I want** the segmented picker ("This Language" / "All Languages") to feel harmonious with the new header design language,
**So that** the transition from header to control to content flows as one continuous thought.

### 5.1 Design Specification

The default `Picker(.segmented)` in iOS has a gray rounded-rect background. In the Caribbean light mode, this feels cold and disconnected from the turquoise/warm palette.

**Refinement (light mode only):**
- Tint the segmented picker with `.tint(.caribbeanOcean)` for the selected segment indicator
- Selected segment text: caribbeanInk (bold)
- Unselected segment text: caribbeanPlum
- Background: caribbeanRecessed (the pale seafoam well color already defined)
- Corner radius: matches system (no override needed)
- Top spacing from header brushstroke: 8pt (Fibonacci)

**Note:** This is a *tinting* refinement, not a custom picker rebuild. Keep the native `pickerStyle(.segmented)` for accessibility and system consistency.

### 5.2 Acceptance Criteria

- [ ] **AC 5.2.1**: In light mode, segmented picker tint is `.caribbeanOcean`.
- [ ] **AC 5.2.2**: Picker is spaced 8pt below the Recent Activity header.
- [ ] **AC 5.2.3**: Dark mode picker styling is unchanged.

---

## Story 6: Visual QA — Cross-Section Harmony Validation

**As a** designer reviewing the complete light-mode dashboard,
**I want** to verify that all section headers, dividers, and spacing form a cohesive visual system that passes the "squint test" — when blurred, the page should read as an intentional composition with clear hierarchy,
**So that** we ship craft, not coincidence.

### 6.1 Acceptance Criteria

- [ ] **AC 6.1.1**: When viewing the full dashboard scrolled to show all sections, the visual weight decreases from top (hero) → middle (games header) → bottom (activity header), creating a clear reading hierarchy.
- [ ] **AC 6.1.2**: The ornate divider (with diamond) is visually distinct from the plain waterline divider when viewed at normal reading distance.
- [ ] **AC 6.1.3**: Both section headers use the same `CalligraphyBrushstroke` shape at different scales — they are recognizably "siblings" but not identical.
- [ ] **AC 6.1.4**: The warm shimmer point in dividers and the ocean gradient in headers create a consistent color temperature across the page (predominantly cool turquoise with warm golden accents at φ-spaced intervals).
- [ ] **AC 6.1.5**: No element in the new design competes with the game cards below for visual attention — headers and dividers support, they don't upstage.
- [ ] **AC 6.1.6**: All elements pass WCAG 2.1 AA contrast requirements (4.5:1 for text, 3:1 for UI components) against the caribbeanCanvas background.
- [ ] **AC 6.1.7**: iPhone SE (smallest screen) → iPhone 16 Pro Max (largest) — the design scales gracefully. Brushstroke widths and icon sizes remain proportional. No clipping, no orphaned elements.

---

## Appendix A: Mathematical Reference

### Golden Ratio Derivations

| Symbol | Value | Usage |
|--------|-------|-------|
| φ | 1.618 | Master proportion |
| 1/φ | 0.618 | Gradient inflection point (stop 6) |
| 1 - 1/φ | 0.382 | Gradient inflection point (stop 2) |
| φ⁻⁰·²⁵ | ≈ 1.134 | Font ratio 20pt title / 17pt secondary ≈ 1.176, close enough |
| φ⁻⁰·⁸ | ≈ 0.699 | Brushstroke ratio 55pt/80pt = 0.688, ≈ match |

### Fibonacci Spacing Grid

| Value | Usage |
|-------|-------|
| 3pt | Title-to-brushstroke gap, brushstroke trailing height |
| 5pt | Brushstroke-to-subtitle gap, diamond ornament size |
| 8pt | Header-to-picker gap |
| 13pt | Icon-to-text gap, secondary divider padding, subtitle font size |
| 21pt | Primary divider padding |
| 34pt | Divider horizontal inset |
| 44pt | Primary icon container size (≈ 34+8+2) |

### Icon Container Scale Ratio

| Metric | Primary (Games) | Secondary (Activity) | Ratio |
|--------|-----------------|---------------------|-------|
| Container | 44pt | 34pt | 0.773 |
| Corner radius | 13pt | 10pt | 0.769 |
| Icon font | 20pt | 16pt | 0.800 |
| Shadow radius | 8+13pt | 6pt | — |
| Brushstroke width | 80pt | 55pt | 0.688 |
| Title font | 20pt | 17pt | 0.850 |

### Color Temperature Map

```
Section Header Icons    → Cool (caribbeanOcean gradient)      ████ 
Brushstroke Underlines  → Cool→Pale (ocean→shallows fade)     ████░░
Divider Flanks         → Cool (caribbeanLagoon)               ████
Divider Center         → WARM (caribbeanSunrise shimmer)      ████  ← focal accent
Diamond Ornament       → Warm (caribbeanGradientWarm)         ████  ← focal accent
Title Text             → Neutral warm (caribbeanInk/aubergine)████
Subtitle Text          → Neutral warm (caribbeanPlum)         ████
```

The warm elements (divider center + ornament) appear at exactly two points in the vertical scroll, creating a φ-spaced "golden thread" that ties the composition together subconsciously.

---

## Appendix B: File Impact Map

| File | Change Type | Scope |
|------|-------------|-------|
| `Views/Shared/GlassDivider.swift` | Modify | Add `DividerStyle` enum, 9-stop waterline gradient, diamond ornament |
| `Views/Shared/CalligraphyBrushstroke.swift` | **New** | Reusable tapered brushstroke `Shape` |
| `Views/Shared/CaribbeanSectionHeader.swift` | **New** | Reusable header with icon + title + brushstroke + optional subtitle |
| `Views/Dashboard/DashboardView.swift` | Modify | Replace inline header code with `CaribbeanSectionHeader`, update divider styles and spacing |
| `project.yml` | No change | XcodeGen auto-discovers `**/*.swift` in LumenLingo/ |

**Estimated new code:** ~150 lines across 2 new files + ~40 lines of modifications in existing files.

**Risk:** Zero dark-mode regression — all changes gated behind `!isDark` / `colorScheme == .light` checks.
