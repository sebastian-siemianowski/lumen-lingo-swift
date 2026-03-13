# Solar Aurora Nebula — Complete Reverse-Engineering Analysis (v2)

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Why Previous Metal Versions Failed](#2-why-previous-metal-versions-failed)
3. [React Architecture Deep Dive](#3-react-architecture-deep-dive)
4. [Layer-by-Layer Specification](#4-layer-by-layer-specification)
5. [Aurora Ribbon Engine — The Heart of the Visual](#5-aurora-ribbon-engine)
6. [Geometry Types — Exact Formulas with Worked Examples](#6-geometry-types)
7. [Color System — Cosine Interpolation](#7-color-system)
8. [Vertical Gradient — The Defining Visual Signature](#8-vertical-gradient)
9. [Overlap Model — Why Single-Pass Metal Needs Compensation](#9-overlap-model)
10. [Shimmer & Energy Flow](#10-shimmer--energy-flow)
11. [Drift, Wrapping & Turbulence](#11-drift-wrapping--turbulence)
12. [Atmospheric Overlay Glows](#12-atmospheric-overlay-glows)
13. [Vignette & Post Effects](#13-vignette--post-effects)
14. [Current Metal Implementation — Line-by-Line Critique](#14-current-metal-critique)
15. [Fundamental Architecture Problem](#15-fundamental-architecture-problem)
16. [Rebuild Strategy](#16-rebuild-strategy)
17. [Subtask Checklist](#17-subtask-checklist)

---

## 1. Executive Summary

The React `SolarAuroraNebula.jsx` (749 lines) creates **volumetric vertical aurora curtains**
flowing through deep space. The effect depends on:

- **9 aurora ribbons** each rendered as 400-550 overlapping vertical fillRect streaks
- **Additive (lighter) compositing** within the canvas creating glow accumulation
- **Screen blend** of the canvas onto 7+ CSS gradient layers
- **0.8px CSS blur** softening hard segment edges
- **3 animated atmospheric glow clouds** (fuchsia/gold/pink) with 65-110px CSS blur
- **Elliptical vignette** and **central clarity** layers

The visual signature is **tall vertical columns of colored light** — like real aurora
borealis curtains — with a bright concentrated core line ~30% up from the base,
fading ethereally upward with a blue-shift, and transparent at the bottom.

### What Makes It Look Like Aurora Borealis

Real aurora borealis has these characteristics that the React version captures:

1. **Vertical curtain structure** — light follows magnetic field lines (roughly vertical)
2. **Bottom-heavy brightness** — light is concentrated where atmospheric density is highest
3. **Color layering** — different altitudes produce different colors (green low, purple high)
4. **Gentle lateral undulation** — curtains sway slowly in solar wind
5. **Shimmering energy flow** — traveling brightness pulses along the curtains
6. **Multiple overlapping curtains** at different depths
7. **Soft atmospheric glow** — scattered light creates diffuse colored hazes

---

## 2. Why Previous Metal Versions Failed

### Problem 1: Ribbons Look Like Flat Horizontal Bands, Not Vertical Curtains

The Metal shader evaluates each pixel once per ribbon. In React, each ribbon draws
400-550 **overlapping rectangles** stacked horizontally. Each rectangle is a vertical
streak with a gradient from transparent (bottom) to bright core to ethereal fade (top).

The massive overlap (14× coverage) means every point on screen is covered by ~14
overlapping gradient rectangles from each ribbon. This creates:
- **Uniform horizontal density** (no gaps between segments)
- **Accumulated glow** (14 × alpha = strong visible ribbon)
- **Soft edges** (the CSS blur(0.8px) smooths remaining transitions)

The Metal version correctly samples the ribbon once per pixel, but:
- Uses `alpha = 0.25` as a pre-calculated overlap factor
- This produces a flat, uniform band — no texture or variation along x
- Missing the slight density variations that come from segment width changes

**Fix**: The overlap factor approach is CORRECT in principle. The issue is elsewhere.

### Problem 2: Vertical Gradient Doesn't Read as "Curtain"

The 5-stop vertical gradient is the single most important visual element.
When rendered correctly, each ribbon should look like a curtain of light:

```
Top:    ░░░░░░░░░░░  (ethereal blue-shifted fade, alpha → 0)
        ░░▒▒▒▒▒▒░░░  (main body, alpha * 0.7)
Core:   ▓▓████████▓  (BRIGHT CORE — alpha * 1.05, color +35)
        ░░▒▒▒▒▒▒░░░  (subtle start, alpha * 0.12)
Bottom: ░░░░░░░░░░░  (transparent, alpha = 0)
```

The bright core at 30% from bottom creates the visual anchor.
**If the gradient alpha values are wrong, the ribbon becomes either invisible
or a featureless fog.** The current implementation has the correct stops but
the overall alpha scaling may wash out the core.

### Problem 3: Atmospheric Glows Too Subtle

React's fuchsia/gold/pink overlays use MASSIVE CSS blur (65-110px on ~1170px viewport).
This turns small gradients into enormous soft clouds covering large portions of screen.
The previous Metal used `radialGlow()` cubed — this drops off far too sharply.
With squaring it's better, but the radii and alphas also need exact matching.

### Problem 4: Void Starting Color

React: `rgba(15, 8, 25, 0)` over black parent → center is PURE BLACK.
Previous Metal: started at `rgb(15, 8, 25)` → center was dim purple.
Most recent: correctly starts at black — this is fixed.

### Problem 5: Missing Dynamic Height Variation

React varies segment height per-segment along x:
```javascript
const localHeightNoise = sin(t * PI * 4 + rTime * 0.7) * 0.4 +
                          cos(t * PI * 2 - rTime * 0.2) * 0.3 + 0.3;
const segmentHeight = height * (0.26 + localHeightNoise * 0.11) * (1 - depth * 0.3);
```

This makes ribbons **breathe** — some sections taller, some shorter — creating organic
variation that static-height ribbons lack. The current Metal version has this but
may need verification.

### Problem 6: Soft Edge Treatment

React applies `filter: blur(0.8px)` to the ENTIRE canvas. This isn't just cosmetic —
it softens the edges between the hard-edged fillRect calls, creating smooth inter-segment
transitions. In Metal, where we evaluate continuously, we need analogous softness at
the vertical edges of each ribbon's extent. Using `smoothstep` at the top and bottom
edges instead of hard cutoffs achieves a similar effect.

---

## 3. React Architecture Deep Dive

### Component Tree

```
SolarAuroraNebula (root div, fixed inset-0)
│
├── [1] Deep Space Foundation
│   CSS radial-gradient, ellipse 140%×120%, 4 stops
│   Background: transparent center → dark purple edges
│   Over black parent → center appears pure black
│
├── [2] Ambient Violet Glow
│   CSS radial-gradient, ellipse 75%×65%
│   blur(110px), mix-blend-mode: screen
│   rgba(100,50,180, 0.06*int) center
│
├── [3] Aurora Ribbons Canvas ← THE MAIN VISUAL
│   HTML Canvas, opacity: 0.95, filter: blur(0.8px)
│   mix-blend-mode: screen
│   Internal: ctx.globalCompositeOperation = 'lighter'
│   9 ribbons × 400-550 segments each = ~4000 fillRect/frame
│
├── [4] Fuchsia Accent Glow
│   Framer Motion div, 130%×130%, offset (-15%,-15%)
│   radial-gradient ellipse 50%×45% at 65%,38%
│   blur(85px), screen blend
│   Animated: scale/opacity/xy over 28s
│
├── [5] Gold Internal Glow
│   Motion div, 110%×110%, offset (-5%,-5%)
│   radial-gradient ellipse 45%×35% at 48%,45%
│   blur(75px), screen blend
│   Animated: scale/opacity over 24s, 6s delay
│
├── [6] Pink Highlights
│   Motion div, 100%×100%
│   radial-gradient ellipse 38%×30% at 30%,55%
│   blur(65px), screen blend
│   Animated: scale/opacity/x over 32s, 10s delay
│
├── [7] Stellar Canvas (Stars — NOT our concern, already good)
│
├── [8] Soft Volumetric Glow
│   CSS radial-gradient, ellipse 52%×42% at 50%,46%
│   blur(70px), screen blend
│   rgba(200,160,240, 0.022*int)
│
├── [9] Edge Vignette
│   CSS radial-gradient, ellipse 90%×76%, 6 stops
│   NO blend mode (normal — darkens)
│   Transparent center → rgba(2,1,6, 0.7*int) edges
│
└── [10] Central Clarity
    CSS radial-gradient, ellipse 66%×56% at 50%,47%
    screen blend
    rgba(230,210,250, 0.016*int)
```

### Layer Ordering in React vs Metal

React renders DOM elements back-to-front. The aurora canvas is behind the
fuchsia/gold/pink overlays but in front of the void and ambient glow.

**In Metal we render in one pass.** The order should be:
1. Deep space void (base)
2. Ambient violet
3. Fuchsia/gold/pink atmospheric glows
4. Aurora ribbons (screen blended)
5. Bottom volumetric
6. Soft volumetric center
7. Vignette (darken)
8. Central clarity (screen brighten)

Placing overlays BEFORE ribbons means ribbons sit on top, which actually
produces a cleaner look in Metal since ribbons are the hero element.

---

## 4. Layer-by-Layer Specification

### Layer 1: Deep Space Void

**CSS (exact):**
```css
radial-gradient(ellipse 140% 120% at 50% 50%,
  rgba(15, 8, 25, 0) 0%,
  rgba(10, 5, 20, 0.5) 40%,
  rgba(6, 3, 14, 0.8) 70%,
  rgba(3, 2, 8, 1) 100%
)
```

**Critical**: The `0%` stop has **alpha = 0**, so the black parent shows through.
Center = pure black. NOT rgb(15,8,25).

**Ellipse math** (in UV space):
- 140% × 120% → radii are 70% × 60% of viewport → `float2(0.7, 0.6)`
- Elliptical distance: `length((uv - 0.5) / float2(0.7, 0.6))`
- At center (dist=0): alpha=0 → black
- At dist=0.4: color lerps 15,8,25 → 10,5,20, alpha=0.5
- At dist=0.7: color lerps to 6,3,14, alpha=0.8
- At dist=1.0+: color=3,2,8, alpha=1.0

**Metal approach:**
```metal
float3 col = float3(0.0); // Pure black (the void itself)
// Alpha-composite the gradient:
col = mix(col, gradientColor, gradientAlpha);
```

### Layer 2: Ambient Violet Glow

**CSS:**
```css
radial-gradient(ellipse 75% 65% at 50% 50%,
  rgba(100, 50, 180, 0.06 * intensity) 0%,
  rgba(75, 35, 145, 0.03 * intensity) 55%,
  transparent 85%
)
filter: blur(110px);
mix-blend-mode: screen;
```

**UV radii**: 75%/2 = 0.375, 65%/2 = 0.325
**Center**: (0.5, 0.5) — dead center
**Max alpha**: 0.06 * intensity — very subtle
**Blur(110px)**: On 1170px width = 9.4% of viewport. After blur, the gradient
     becomes an even softer gaussian-like hump with no visible edges.

**Metal**: Squared smoothstep already approximates this. The gaussian2D helper
from CosmicNoise.h could also work but squared smoothstep is simpler.

### Layer 8 (rendered in canvas): Bottom Volumetric Glow

After all ribbons are drawn, React switches to `Screen` compositing and draws:
```javascript
ctx.globalCompositeOperation = 'screen';
const glowGrad = ctx.createLinearGradient(0, height, 0, height * 0.6);
glowGrad.addColorStop(0, `rgba(120, 60, 200, ${0.01 * intensity})`);
glowGrad.addColorStop(1, `rgba(120, 60, 200, 0)`);
ctx.fillStyle = glowGrad;
ctx.fillRect(0, 0, width, height);
```

Linear gradient: bottom of screen (uv.y=1.0) → 60% from top (uv.y=0.6).
Color: rgb(120, 60, 200). Alpha: 0.01 at bottom, 0 at 60%.

---

## 5. Aurora Ribbon Engine — The Heart of the Visual

### How React Renders Ribbons

```javascript
// SETUP
ctx.globalCompositeOperation = 'lighter'; // Additive within canvas
const sortedRibbons = [...ribbons].sort((a, b) => b.depth - a.depth);
// Back ribbons (depth=1) render first, front (depth=0) render last

sortedRibbons.forEach((ribbon) => {
    const rTime = time * ribbon.speed + ribbon.id * 10;
    const totalWidth = width + 400; // 200px buffer each side
    const driftX = sin(rTime * 0.1) * width * 0.1 + rTime * 50 * ribbon.drift;

    // Color interpolation (once per ribbon per frame)
    const rawCycle = sin(rTime * 0.15 + ribbon.colorOffset) * 0.5 + 0.5;
    // ... cosine interpolation to get r, g, b ...

    for (let i = 0; i < ribbon.segments; i++) {
        const t = i / ribbon.segments;
        let x = t * totalWidth;
        let yOffset = 0;
        let zOffset = 0;

        // 6 geometry types compute yOffset, some also modify x and zOffset

        // Turbulence + drift + wrapping
        finalX = ((x + driftX + turbulence) % totalWidth + totalWidth) % totalWidth - 200;
        finalY = height * ribbon.baseHeight + yOffset;

        // Segment dimensions
        segmentWidth = width * ribbon.width * (1 + zOffset * 0.35) * 4.2;
        segmentHeight = height * (0.26 + heightNoise * 0.11) * (1 - depth * 0.3);

        // Alpha & shimmer
        alpha = 0.018 * intensity * (1 - depth * 0.5) * shimmer;

        // 5-stop vertical gradient fillRect
        ctx.fillRect(finalX - segmentWidth/2, finalY - segmentHeight, segmentWidth, segmentHeight);
    }
});
```

### Key Numbers

| Property | Range | Notes |
|----------|-------|-------|
| Ribbons | 9 | Fixed count |
| Segments per ribbon | 400-550 | ~450 average |
| Segment spacing | ~3.5px (at 1570 totalWidth / 450 seg) | Very tight |
| Segment width | 29-93px (varies by ribbon width & perspective) | ~49px average |
| Overlap per pixel | 7.5× to 32.6×, typically ~14× | Critical for alpha |
| Segment height | 15-37% of viewport height | Varies per segment |
| Base alpha | 0.018 | Per segment |
| Effective alpha | 0.018 × 14 ≈ 0.25 per ribbon peak | With overlap |
| Color cycle period | ~42 seconds per ribbon speed unit | Slow drift |
| Drift oscillation | ±10% of viewport width | Plus linear drift |

---

## 6. Geometry Types — Exact Formulas with Worked Examples

All formulas use `t = i / segments` ranging 0 to 1. In Metal, `t` maps to the
ribbon-local x coordinate `x = fract(uv.x - driftX)`.

All displacements are in **viewport fraction** (UV space). React computes in pixels
(`height * coefficient`) but since we divide by height, the coefficient IS the UV value.

### Type 0: smooth

```javascript
yOffset = sin(t * PI * 2 + rTime * 0.35) * height * 0.055 +
          cos(t * PI * 2 - rTime * 0.1) * height * 0.025;
```

**UV formula:**
```metal
yOffset = sin(x * PI * 2.0 + rTime * 0.35) * 0.055
        + cos(x * PI * 2.0 - rTime * 0.1) * 0.025;
```

**Visual**: One complete sine wave across the screen width plus a slower
counter-rotating cosine. Creates gentle undulating up-down motion.
At t=0.5 (mid-screen), both waves may cancel or reinforce.

**Amplitude**: ±0.08 UV (±8% of screen height), which at 844px = ±67px.
This is a gentle sway, not dramatic displacement.

### Type 1: fold

```javascript
const foldPhase = t * PI * 6 + rTime * 0.12;
const fold = sin(foldPhase);
x += fold * width * 0.018;
zOffset = fold;
yOffset = -abs(fold) * height * 0.03;
```

**UV formula:**
```metal
float foldPhase = x * PI * 6.0 + rTime * 0.12;
float fold = sin(foldPhase);
yOffset = -abs(fold) * 0.03; // Always UP (negative in screen-down coords)
// x displacement: fold * 0.018 — creates horizontal crumpling
// zOffset: fold → affects segment width via perspectiveWidth
```

**Visual**: 3 fold cycles across the width. The `-abs(fold)` creates UPWARD
displacement wherever the fold peaks. At fold peaks, the segment is also wider
(perspectiveWidth = 1 + fold * 0.35 = 1.35). This creates accordion-like
vertical pleats.

### Type 2: spiral

```javascript
const spiralT = t * PI * 4 + rTime * 0.25;
x += cos(spiralT) * width * 0.045;
yOffset = sin(spiralT) * height * 0.065;
zOffset = sin(spiralT);
```

**UV formula:**
```metal
float spiralT = x * PI * 4.0 + rTime * 0.25;
yOffset = sin(spiralT) * 0.065;
// x displacement creates corkscrew path
```

**Visual**: 2 full spiral loops. Simultaneous x and y displacement creates a
corkscrew/helix path. The largest y-displacement of all types (±6.5%).

### Type 3: s-curve

```javascript
x += sin(t * PI * 2 + rTime * 0.15) * width * 0.11 +
     sin(t * PI * 2 + rTime * 0.05) * width * 0.05;
yOffset = sin(t * PI * 2 + rTime * 0.22) * height * 0.09;
```

**UV formula:**
```metal
yOffset = sin(x * PI * 2.0 + rTime * 0.22) * 0.09;
// x displacement: ±16% total — widest meandering of all types
```

**Visual**: Large sweeping S-shape. The x-displacement makes the ribbon
meander dramatically left and right (±16% of viewport = ±187px at 1170px).
The y-displacement is also large (±9%).

**In Metal**: x-displacement is challenging because we're evaluating per-pixel.
The ribbon centerline isn't at `uv.x` — it's at a displaced position.
For practical purposes, we can approximate by evaluating at the pixel's x
and accepting the slightly different visual.

### Type 4: drape

```javascript
yOffset = abs(sin(t * PI * 2 + rTime * 0.09)) * height * 0.11;
```

**UV formula:**
```metal
yOffset = abs(sin(x * PI * 2.0 + rTime * 0.09)) * 0.11;
```

**Visual**: `abs(sin)` creates a catenary/hanging drape shape. Always POSITIVE
(pushes ribbon DOWN in screen space). One full drape cycle. Very slow animation
(rTime * 0.09). This is the most "aurora-like" — a hanging curtain shape.

### Type 5: ripple

```javascript
yOffset = sin(t * PI * 10 - rTime * 0.7) * height * 0.018 +
          sin(t * PI * 4 + rTime * 0.2) * height * 0.025;
```

**UV formula:**
```metal
yOffset = sin(x * PI * 10.0 - rTime * 0.7) * 0.018
        + sin(x * PI * 4.0  + rTime * 0.2) * 0.025;
```

**Visual**: High-frequency ripples (5 cycles) on top of slower waves (2 cycles).
The high-freq component animates fast (rTime * 0.7 — negative = rightward travel).
Small amplitude (±4.3% total). Creates fine detail texture.

### Summary Table

| Type | y-range (UV) | x-disp (UV) | Cycles | Character |
|------|-------------|-------------|--------|-----------|
| smooth | ±0.080 | 0 | 1 | Gentle sway |
| fold | -0.030 to 0 | ±0.018 | 3 | Accordion pleats |
| spiral | ±0.065 | ±0.045 | 2 | Corkscrew |
| s-curve | ±0.090 | ±0.160 | 1 | Wide meandering |
| drape | 0 to +0.110 | 0 | 1 | Hanging curtain |
| ripple | ±0.043 | 0 | 5+2 | Fine detail |

---

## 7. Color System — Cosine Interpolation

### Three anchor colors

```
c1 = (95, 45, 190)   → 0.373, 0.176, 0.745   // Deep violet
c2 = (210, 60, 160)  → 0.824, 0.235, 0.627   // Hot fuchsia
c3 = (255, 180, 70)  → 1.000, 0.706, 0.275   // Warm gold
```

### Interpolation formula

```javascript
const rawCycle = sin(rTime * 0.15 + ribbon.colorOffset) * 0.5 + 0.5; // 0 to 1

if (rawCycle < 0.5) {
    const t = (1 - cos(rawCycle * PI * 2)) * 0.5; // Cosine eased 0→1→0
    color = lerp(c1, c2, t);
} else {
    const t = (1 - cos((rawCycle - 0.5) * PI * 2)) * 0.5;
    color = lerp(c2, c3, t);
}
```

### Color cycle timeline

The rawCycle oscillates 0→1→0 with period `2π / 0.15 ≈ 42 seconds` per rTime unit.
At ribbon.speed=0.3: effective period = 42/0.3 ≈ 140 seconds.

For rawCycle sweeping 0 → 1:
```
rawCycle=0.00: cosine_t=0.0 → pure c1 (violet)
rawCycle=0.25: cosine_t=0.5 → c1↔c2 mid-blend
rawCycle=0.50: cosine_t=1.0 → pure c2 (fuchsia)
rawCycle=0.75: cosine_t=0.5 → c2↔c3 mid-blend
rawCycle=1.00: cosine_t=1.0 → pure c3 (gold)
```

Then back: gold → fuchsia → violet (symmetric).

### Cosine easing vs linear

The cosine function `(1 - cos(x * 2π)) / 2` is an S-curve (ease-in-out).
This means the color **lingers** near the pure anchors (violet, fuchsia, gold)
and transitions quickly through the midpoints. Visually: each ribbon spends
most of its time looking distinctly violet OR fuchsia OR gold, rather than
spending equal time in blended states.

### Metal code

```metal
float rawCycle = sin(rTime * 0.15 + rb.colorOffset) * 0.5 + 0.5;
float3 ribbonColor;
if (rawCycle < 0.5) {
    float ct = (1.0 - cos(rawCycle * M_PI_F * 2.0)) * 0.5;
    ribbonColor = mix(c1, c2, ct);
} else {
    float ct = (1.0 - cos((rawCycle - 0.5) * M_PI_F * 2.0)) * 0.5;
    ribbonColor = mix(c2, c3, ct);
}
```

---

## 8. Vertical Gradient — The Defining Visual Signature

### What the gradient represents physically

Each vertical streak represents a **column of excited atmospheric gas**.
The light is:
- **Absent at the base** (too dense, light is absorbed)
- **Building up** in the lower portion
- **Brightest at a concentrated core** (~30% up) where emission peaks
- **Fading gradually** through the main body above the core
- **Ethereally dimming** toward the top with a blue-shift (shorter wavelengths
  persist at higher altitudes)

### Exact 5-stop gradient (React)

The gradient goes from `finalY` (bottom of streak) to `finalY - segmentHeight` (top).
Stop 0.0 = bottom edge. Stop 1.0 = top edge.

| Stop | Position | Alpha multiplier | Color modification |
|------|----------|------------------|--------------------|
| 0.0 | Bottom | 0 | Base color (invisible) |
| 0.1 | 10% up | alpha × 0.12 | Base color |
| 0.3 | 30% up | alpha × 1.05 | +35/255 per channel (BRIGHT) |
| 0.55 | 55% up | alpha × 0.70 | Base color |
| 1.0 | Top | 0 | Blue-shifted: R-30, G-15, B+30 (/255) |

### Alpha at the bright core

```
base_alpha = 0.018 * intensity * (1 - depth * 0.5) * shimmer
core_alpha = base_alpha * 1.05
```

For a front ribbon (depth=0), intensity=1, shimmer=1:
```
core_alpha = 0.018 * 1.05 = 0.0189
```

This is per-SEGMENT. With ~14 overlapping segments:
```
effective_core_alpha = 0.0189 * 14 = 0.265
```

With 9 ribbons (not all overlapping at same y, typically 3-5):
```
total_pixel_alpha ≈ 0.265 * 4 = 1.06 (clamped to 1.0)
```

**Key insight**: At ribbon hotspots, the accumulated color fully saturates.
The visual is NOT a faint whisper — it's full-strength color at the core,
fading to transparency above and below.

### Metal implementation of the gradient

```metal
// vt = 0 at bottom (ribbon base), 1 at top
float gradAlpha;
float3 gradColor = ribbonColor;

if (vt < 0.1) {
    // Bottom → subtle start
    gradAlpha = (vt / 0.1) * 0.12;
} else if (vt < 0.3) {
    // Building to bright core
    float f = (vt - 0.1) / 0.2;
    gradAlpha = mix(0.12, 1.05, f);
    // Brighten the core: +35/255 = +0.137 per channel
    gradColor = min(ribbonColor + 0.137, float3(1.0));
} else if (vt < 0.55) {
    // Core → main body
    float f = (vt - 0.3) / 0.25;
    gradAlpha = mix(1.05, 0.7, f);
    float bm = 1.0 - f;
    gradColor = mix(ribbonColor, min(ribbonColor + 0.137, float3(1.0)), bm);
} else {
    // Main body → ethereal top fade with blue shift
    float f = (vt - 0.55) / 0.45;
    gradAlpha = mix(0.7, 0.0, f);
    float3 shifted = float3(
        max(ribbonColor.r - 30.0/255.0, 0.0),
        max(ribbonColor.g - 15.0/255.0, 0.0),
        min(ribbonColor.b + 30.0/255.0, 1.0)
    );
    gradColor = mix(ribbonColor, shifted, f);
}
```

### Soft edges at top and bottom

React's CSS `filter: blur(0.8px)` softens the hard boundary where `uv.y == topY`
or `uv.y == ribbonY`. In Metal, we should add softening:

```metal
// Instead of hard cutoff at topY and ribbonY:
float softBottom = smoothstep(ribbonY, ribbonY - 0.008, uv.y);
float softTop = smoothstep(topY - 0.008, topY, uv.y);
float edgeSoft = softBottom * softTop;
// Apply: alpha *= edgeSoft;
```

The 0.008 value = ~0.8px / 100px in UV, approximate. This prevents visible
hard lines at ribbon boundaries.

---

## 9. Overlap Model — Why Single-Pass Metal Needs Compensation

### The fundamental difference

**React**: Draws 450 overlapping rectangles per ribbon. Each adds `alpha = 0.018`.
A pixel covered by 14 overlapping rects accumulates `14 × 0.018 = 0.252`.

**Metal**: Evaluates the ribbon once per pixel. Must produce the same 0.252 directly.

### Derivation of overlap factor

```
Segment spacing = totalWidth / segments
                = (width + 400) / segments
                = (1170 + 400) / 450    (using midrange values)
                = 1570 / 450
                = 3.489 px

Segment width = width * ribbon.width * perspectiveWidth * 4.2
              = 1170 * 0.010 * 1.0 * 4.2   (midrange, no perspective)
              = 49.14 px

Overlap count = segmentWidth / segmentSpacing
              = 49.14 / 3.489
              = 14.08
```

### Width-dependent overlap

The overlap varies with ribbon.width:

| ribbon.width | segmentWidth (px) | overlap | effective alpha |
|-------------|-------------------|---------|-----------------|
| 0.006 (min) | 29.5 | 8.5 | 0.018 × 8.5 = 0.153 |
| 0.010 (mid) | 49.1 | 14.1 | 0.018 × 14.1 = 0.254 |
| 0.014 (max) | 68.7 | 19.7 | 0.018 × 19.7 = 0.355 |

**For Metal**: We can either:
1. Use a constant factor of 14 (simple, close enough)
2. Scale by `rb.width / 0.01 * 14` for proportional accuracy

Option 2 is better — wider ribbons SHOULD be brighter (more overlap).

```metal
float overlapFactor = rb.width / 0.01 * 14.0;
float effectiveAlpha = 0.018 * overlapFactor; // ≈ rb.width * 25.2
```

### Simplification: pre-baked effective alpha

Since `0.018 * (width / 0.01) * 14 = 0.018 * width * 1400 = width * 25.2`:

```metal
float baseAlpha = rb.width * 25.2 * (1.0 - rb.depth * 0.5);
```

At width=0.006: `0.006 * 25.2 * 1.0 = 0.151` (front, no depth fade)
At width=0.014: `0.014 * 25.2 * 1.0 = 0.353` (front)
At width=0.010, depth=0.5: `0.010 * 25.2 * 0.75 = 0.189`

These produce visible, strong ribbon contributions that accumulate
properly with 9 ribbons using additive blending.

---

## 10. Shimmer & Energy Flow

### React formula

```javascript
const flowPhase = t * 12 - rTime * ribbon.flowSpeed;
const energyFlow = sin(flowPhase) * 0.5 + 0.5;
const shimmer = 0.85 + energyFlow * 0.35;
```

### What it does

- `t * 12`: 12 shimmer cycles across one screen width (high spatial frequency)
- `- rTime * flowSpeed`: Shimmer travels RIGHT-to-LEFT (negative = leftward)
- Range: `0.85` (minimum, slight dimming) to `1.20` (maximum, 20% brightening)
- Combined with the base alpha, this creates **traveling bright pulses**
  flowing along each ribbon like energy currents in the aurora

### Travel speed

At flowSpeed=1.0, ribbon.speed=0.3:
```
rTime increases at speed * global_speed * 0.35 per real second
The shimmer phase shifts by flowSpeed per rTime unit
So visible effect: bright bands travel leftward along the ribbon
```

### Metal code

```metal
float flowPhase = x * 12.0 - rTime * rb.flowSpeed;
float shimmer = 0.85 + (sin(flowPhase) * 0.5 + 0.5) * 0.35;
```

Straightforward 1:1 translation. `x` is already in 0..1 UV range corresponding
to `t` in React.

---

## 11. Drift, Wrapping & Turbulence

### React drift

```javascript
const driftX = sin(rTime * 0.1) * width * 0.1 + rTime * 50 * ribbon.drift;
```

Two components:
1. **Oscillation**: `sin(rTime * 0.1) * width * 0.1`
   - Period: 2π/0.1 ≈ 63 rTime seconds
   - Amplitude: ±10% of viewport width (±0.1 UV)
   - Creates slow lateral swaying

2. **Linear drift**: `rTime * 50 * ribbon.drift`
   - At drift=±0.15: moves ±7.5 px/rTime second
   - In UV: `rTime * 50 / width * drift = rTime * 0.0427 * drift`
   - Creates slow unidirectional sliding

### UV formula

```metal
float driftX = sin(rTime * 0.1) * 0.1 + rTime * 0.0427 * rb.drift;
```

### Turbulence

```javascript
const turbulence = sin(x * 0.01 + rTime * 0.1) * 30;
```

In pixels: ±30px oscillation based on segment position.
In UV: `sin(uv.x * 11.7 + rTime * 0.1) * 0.0256`

This is very subtle (±2.5% of viewport). It's a slow spatial wobble that
adds organic irregularity. We can include it or skip it — the visual impact
is minimal.

### Wrapping

React wraps with double modulo:
```javascript
let finalX = ((x + driftX + turbulence) % totalWidth + totalWidth) % totalWidth - 200;
```

In Metal, `fract()` handles wrapping naturally:
```metal
float ribbonX = fract(uv.x - driftX); // Map pixel to ribbon-local coords
```

We subtract drift (reverse: pixel moves left = ribbon content moves right).

---

## 12. Atmospheric Overlay Glows

### Fuchsia Accent Glow

**React (exact values):**
```css
Element: 130% × 130%, positioned at (-15%, -15%)
Gradient: ellipse 50% 45% at 65% 38%
Colors: rgba(220, 60, 160, 0.09 * int) center
        rgba(180, 45, 130, 0.05 * int) at 60%
        transparent at 95%
Filter: blur(85px)
Blend: screen
```

**Viewport-space center** (accounting for element offset):
```
x = -0.15 + 0.65 * 1.3 = 0.695
y = -0.15 + 0.38 * 1.3 = 0.344
```

**Viewport-space ellipse radii:**
```
rx = 0.50 * 1.3 / 2 = 0.325
ry = 0.45 * 1.3 / 2 = 0.293
```

**Animation (Framer Motion):**
```javascript
scale: [1, 1.06, 1.02, 1.04, 1]       // ±6% breathing
opacity: [0.7, 0.88, 0.75, 0.82, 0.7] // 0.79 ± 0.09
x: [0, -8, 5, -4, 0]                   // ±8px lateral
y: [0, 6, -4, 5, 0]                    // ±6px vertical
duration: 28s / speed
```

**Metal approximation:** `0.79 + sin(t * 0.224) * 0.09` for opacity breathing.
Position shifts of ±8px are <1% of viewport — negligible.

### Gold Internal Glow

**React:**
```css
Element: 110% × 110%, positioned at (-5%, -5%)
Gradient: ellipse 45% 35% at 48% 45%
Colors: rgba(255, 180, 80, 0.11 * int) center
        rgba(245, 150, 60, 0.05 * int) at 55%
        transparent at 90%
Filter: blur(75px)
Blend: screen
Animation: 24s cycle, 6s delay
Opacity: [0.6, 0.78, 0.65, 0.72, 0.6] → 0.69 ± 0.09
```

**Viewport center:**
```
x = -0.05 + 0.48 * 1.1 = 0.478
y = -0.05 + 0.45 * 1.1 = 0.445
```

**Viewport radii:**
```
rx = 0.45 * 1.1 / 2 = 0.248
ry = 0.35 * 1.1 / 2 = 0.193
```

### Pink Highlights

**React:**
```css
Element: 100% × 100%, no offset
Gradient: ellipse 38% 30% at 30% 55%
Colors: rgba(255, 100, 180, 0.07 * int) center
        rgba(220, 70, 150, 0.03 * int) at 70%
        transparent at 95%
Filter: blur(65px)
Blend: screen
Animation: 32s cycle, 10s delay
Opacity: [0.5, 0.68, 0.55, 0.62, 0.5] → 0.59 ± 0.09
```

**Viewport center:** (0.30, 0.55) — lower left off-center
**Viewport radii:** (0.19, 0.15)

### Soft Volumetric Center

**React:**
```css
Gradient: ellipse 52% 42% at 50% 46%
Colors: rgba(200, 160, 240, 0.022 * int) center
        rgba(180, 140, 220, 0.01 * int) at 60%
        transparent at 88%
Filter: blur(70px)
Blend: screen
```

**Center:** (0.50, 0.46). **Radii:** (0.26, 0.21).

### Why blur matters and how to approximate it

CSS blur(N px) applies a Gaussian kernel of radius N px. For a gradient, this
smooths all edges and expands the visible area. A gradient that goes from
color at 60% to transparent at 95% of ellipse radius, after 85px blur,
effectively extends FAR beyond the 95% mark.

In Metal, we approximate this by:
1. Using `smoothstep` or squared falloff (`g * g`) instead of linear
2. Extending the effective radius slightly
3. The `ellipticalGlow` function with squared falloff already does this well

---

## 13. Vignette & Post Effects

### Edge Vignette (Layer 9 in React)

**CSS (exact):**
```css
radial-gradient(ellipse 90% 76% at 50% 50%,
  transparent 0%,
  transparent 32%,
  rgba(6, 4, 16, 0.12 * intensity) 54%,
  rgba(4, 3, 12, 0.28 * intensity) 72%,
  rgba(3, 2, 9, 0.5 * intensity) 87%,
  rgba(2, 1, 6, 0.7 * intensity) 100%
)
```

**No blend mode** — this is normal compositing. It **darkens** the edges.
**Radii**: (0.45, 0.38) in UV.

The 32% transparent zone means the center stays untouched. Darkening begins
at 32% and increases to 0.7 alpha of near-black at edges. This creates a
"looking through a telescope" framing effect.

### Central Clarity (Layer 10)

**CSS:**
```css
radial-gradient(ellipse 66% 56% at 50% 47%,
  rgba(230, 210, 250, 0.016 * intensity) 0%,
  rgba(210, 190, 240, 0.008 * intensity) 48%,
  transparent 78%
)
mix-blend-mode: screen
```

A very subtle warm lavender screen overlay that **brightens the center**.
This counteracts the vignette slightly and gives the aurora ribbons in
the center a slight luminosity boost.

### CosmicPostProcess.metal

Currently handles preset 2 with a top-fade darkening:
```metal
float topFade = 1.0 - uv.y;
float topAmount = topFade * topFade * 0.1;
```

Since we now handle vignette in the main shader, the post-process just
needs this minimal top enhancement (or can be removed entirely).

---

## 14. Current Metal Implementation — Line-by-Line Critique

### Lines 42-60: Deep Space Void ✓ GOOD
The alpha-compositing approach starting from black is correct.
Minor issue: could use smoother interpolation.

### Lines 62-67: Ambient Violet ✓ GOOD
Correctly centered at (0.5, 0.5) with elliptical falloff.

### Lines 73-106: Atmospheric Glows ✓ MOSTLY GOOD
Proper elliptical positioning, breathing animations, screen blend.
Issue: The `ellipticalGlow` squared falloff may still be too sharp.
The CSS blur creates an even SOFTER falloff than squared smoothstep.
Consider using `g * g * (3.0 - 2.0 * g)` (Hermite smoothstep) for softer edges.

### Lines 111-136: Ribbon Setup ✓ GOOD
Color interpolation matches React.

### Lines 138-162: Geometry Types ⚠️ NEEDS REVIEW
- Type 0 (smooth): Uses hardcoded 0.055/0.025 instead of `rb.amplitude` — this is actually
  CORRECT for matching React which also uses fixed coefficients per type.
- Type 1 (fold): Uses `0.03` — correct.
- Type 3 (s-curve): Current code `sin(x * PI * 2.0 + rTime * 0.22) * 0.09` — matches React.
- All types: OK match to React formulas.

### Lines 164-170: Dynamic Height ✓ GOOD
Matches React's `localHeightNoise` formula.

### Lines 174-207: Vertical Gradient ⚠️ NEEDS REVIEW
The gradient implementation matches in structure, but the `dimShifted` color for
the top fade should be:
```metal
float3(max(rc.r - 30.0/255.0, 0.0), max(rc.g - 15.0/255.0, 0.0), min(rc.b + 30.0/255.0, 1.0))
```
Current code has this correctly.

**Missing**: Soft edge treatment at top/bottom boundaries of the streak.
Currently uses hard `if (uv.y > topY && uv.y < ribbonY)` cutoff.

### Lines 209-214: Alpha Calculation ⚠️ KEY PROBLEM
```metal
float alpha = 0.25 * depthFade * gradAlpha * shimmer;
```

This uses a constant 0.25 regardless of ribbon width. Wider ribbons should
contribute more (more overlap in React). Should be:
```metal
float alpha = rb.width * 25.2 * depthFade * gradAlpha * shimmer;
```

But more importantly, the constant 0.25 might actually be too low or too high
depending on the ribbon. Let me recalculate:

At width=0.010 (mid): `0.010 * 25.2 = 0.252` ≈ current 0.25 ✓ close
At width=0.006: `0.006 * 25.2 = 0.151` — should be dimmer than 0.25
At width=0.014: `0.014 * 25.2 = 0.353` — should be brighter

Using width-scaled alpha is a minor improvement. The bigger issue may be
the overall visual result — if ribbons still look flat rather than columnar.

### Lines 217-218: Canvas Compositing ⚠️ NEEDS CHANGE
```metal
ribbonAccum = clamp(ribbonAccum * 0.95, 0.0, 1.0);
col = screenBlend(col, ribbonAccum, 1.0);
```

`screenBlend` with opacity 1.0 uses the FULL ribbonAccum as the overlay.
The screen blend formula: `1 - (1-base)*(1-overlay)`.
At overlay=(0.25, 0.12, 0.05): `1 - (1-base)*(1-overlay)` ≈ `base + overlay*(1-base)`.
For dark base (near 0): ≈ overlay. For bright base: slight brightening.

This should be correct. The ribbons ADD light to the dark background.

### Lines 220-223: Bottom Volumetric ✓ GOOD
`smoothstep(0.6, 1.0, uv.y) * 0.01` matches React.

### Lines 225-249: Soft Volumetric & Vignette ✓ GOOD
Matches React specifications.

### Lines 272-283: Central Clarity ✓ GOOD

### Overall Assessment of Current Implementation

The current code is structurally sound but lacks:
1. **Soft edges** at ribbon boundaries (hard cutoff)
2. **Width-proportional alpha** (constant 0.25 instead of width-scaled)
3. **Potentially stronger overlays** (atmospheric glows could be more visible)
4. **The visual "curtain" feel** — this is the hardest part

**The "curtain" feel** comes from the vertical gradient being rendered at full visual
intensity. If the overall brightness is calibrated correctly (alpha × gradAlpha gives
visible bright core), the curtain effect appears naturally. The issue might be
that on actual device, the values are too dim.

---

## 15. Fundamental Architecture Problem

### The Real Issue: Visual Density vs. Mathematical Accuracy

The current Metal version is **mathematically faithful** to the React code.
The overlap factor of 0.25 is correctly derived. The gradient stops match.
The colors match. The geometry matches.

So why does it look different?

**Answer**: Several compounding small differences:

1. **No CSS blur(0.8px)**: React softens everything. Metal has hard pixel boundaries.
   Solution: Add smoothstep soft edges.

2. **Screen blend vs additive**: React's canvas uses `lighter` (additive) internally,
   then `screen` blends with background. The current Metal does `screenBlend(col, ribbonAccum, 1.0)`.
   But React's screen blend uses the PRE-CLAMPED additive result × 0.95 opacity.
   
   In React: `canvas_color = clamp(sum_additive, 0, 1)` then
   `final = screen(background, canvas_color * 0.95)`.
   
   In Metal: we do the same. This should be equivalent.

3. **Atmospheric glow intensity**: The three overlay clouds (fuchsia/gold/pink) create a
   significant atmospheric presence in React. In Metal, they may be too subtle.
   
   React's blur(85px) on a 1170px viewport = 7.3% radius. On a gradient that peaks at
   alpha=0.09, the blur SPREADS the color wider but also REDUCES the peak intensity.
   Our `ellipticalGlow` squared already approximates this, but we should verify the
   alpha multipliers are strong enough.

4. **Total ribbon brightness**: With 9 ribbons, not all overlap at the same y position.
   At any given y-position, typically 3-5 ribbons contribute. The front ribbons
   are brightest (depth=0, no fade) and the back ribbons faintest (depth=1, 50% fade).
   
   Expected total at a typical point:
   ```
   Front ribbon: 0.25 × 1.0 × gradAlpha × shimmer
   Mid ribbon:   0.25 × 0.75 × gradAlpha × shimmer
   Back ribbon:  0.25 × 0.5 × gradAlpha × shimmer
   
   At bright core (gradAlpha=1.05, shimmer=1.0):
   Total ≈ 0.25 × (1.0 + 0.75 + 0.5) × 1.05 ≈ 0.59
   ```
   
   0.59 screen-blended with near-black background ≈ 0.59. That's a moderately
   bright colored region. This SHOULD be visible.

5. **The real culprit might be the gradient profile shape**: The bright core at 30%
   with alpha × 1.05 is a narrow band. Above and below, alpha drops to 0.7 then 0.
   The VISUAL impression is dominated by the area above 55% (which has alpha dropping
   from 0.7 to 0) — this is the MAJORITY of the streak's area. So most of the
   streak is at alpha × 0.35 average in the upper portion, which at 0.25 base =
   about 0.09. This IS faint.
   
   The bright core band (vt 0.2 to 0.4) spans 20% of segment height. At segH=0.3:
   the core is 0.06 UV tall = about 51 pixels. Not a hairline — visible but narrow.

### The Fix Strategy

Rather than fundamental architecture changes, the fix is **calibration**:

1. **Increase effective alpha** to ensure the bright core is CLEARLY visible
2. **Add soft edges** to remove hard cutoffs that look artificial
3. **Boost overlay glows** to create the atmospheric ambiance
4. **Ensure the vertical gradient profile** creates a visible bright band

The biggest single change: **soft edges plus potentially boosted alpha at the core**.

---

## 16. Rebuild Strategy

Based on the deep analysis, the issues are:

### Category A: Must Fix (affect fundamental look)

1. **Soft edges at ribbon boundaries** — Add smoothstep falloff at top/bottom
2. **Width-proportional alpha** — Use `rb.width * 25.2` instead of flat 0.25
3. **Strengthen atmospheric glows** — Increase alpha multipliers for fuchsia/gold/pink
4. **Add turbulence to drift** — Minor organic variation

### Category B: Should Fix (enhance realism)

5. **Double the nominal alpha** — Currently each ribbon peak barely reaches 0.25.
   In React, the actual visual shows SATURATED color at hotspots. This suggests
   either the overlap factor is underestimated or the visual threshold needs boosting.
   Consider using `rb.width * 35.0` instead of `25.2` (50% boost).
6. **CSS blur approximation** — Widen the vertical gradient slightly (extend range)
7. **Overlay glow softer falloff** — Use cube-root or linear instead of squared

### Category C: Polish

8. **Turbulence in drift** (very subtle, ±2.5% viewport)
9. **Central clarity boost** — May need slight increase
10. **Fine-tune vignette** — Verify edge darkness level

### Rebuild Plan

**Complete rewrite** of `solarAuroraBgFragment()`. This time with:
- Soft-edged ribbons (smoothstep at boundaries)
- Width-proportional alpha with a tuning constant
- Stronger atmospheric glows with softer falloff
- Better-calibrated overall brightness
- Clean layer ordering matching React's visual result

---

## 17. Subtask Checklist

### Phase 1: Foundation Layers

- [ ] **1.1** Deep Space Void — black center, alpha-composite gradient
  - Pure black at center
  - 4-stop gradient with alpha compositing
  - Ellipse 140%×120%

- [ ] **1.2** Ambient Violet Glow — elliptical, screen
  - Center (0.5, 0.5), radii (0.375, 0.325)
  - `rgb(100,50,180)` → `rgb(75,35,145)`, alpha 0.06 → 0.03
  - Soft gaussian-like falloff (squared smoothstep)

### Phase 2: Atmospheric Glows (behind ribbons)

- [ ] **2.1** Fuchsia glow
  - Center (0.695, 0.344), radii (0.325, 0.293)
  - rgb(220,60,160) → rgb(180,45,130), alpha 0.09 → 0.05
  - Breathing: 0.79 + sin(t * 0.224) * 0.09
  - SOFTER falloff — use cube for wider spread

- [ ] **2.2** Gold glow
  - Center (0.478, 0.445), radii (0.248, 0.193)
  - rgb(255,180,80) → rgb(245,150,60), alpha 0.11 → 0.05
  - Breathing: 0.69 + sin(t * 0.262 + 6.0) * 0.09

- [ ] **2.3** Pink glow
  - Center (0.30, 0.55), radii (0.19, 0.15)
  - rgb(255,100,180) → rgb(220,70,150), alpha 0.07 → 0.03
  - Breathing: 0.59 + sin(t * 0.196 + 10.0) * 0.09

### Phase 3: Aurora Ribbon Engine

- [ ] **3.1** Ribbon loop setup
  - 9 ribbons from buffer
  - rTime, driftX, color interpolation

- [ ] **3.2** Geometry type switch
  - 6 types with exact React displacement formulas
  - All in UV space

- [ ] **3.3** Dynamic segment height
  - `(0.26 + heightNoise * 0.11) * (1 - depth * 0.3)`
  - heightNoise from dual-frequency sine/cos

- [ ] **3.4** SOFT EDGE ribbon boundaries
  - `smoothstep` at topY and ribbonY
  - ~0.01 UV softening zone (≈1% of screen height)

- [ ] **3.5** 5-stop vertical gradient
  - Exact alpha multipliers: 0, 0.12, 1.05, 0.7, 0
  - Core brightening: +35/255 per channel
  - Top fade: blue-shift (-30R, -15G, +30B per 255)
  - Correct interpolation between stops

- [ ] **3.6** Traveling shimmer
  - 12 cycles across width, traveling at flowSpeed
  - Range: 0.85 to 1.20

- [ ] **3.7** Width-proportional alpha
  - `rb.width * ALPHA_SCALE * depthFade * gradAlpha * shimmer`
  - ALPHA_SCALE starting at 30.0, tunable
  - depthFade = 1.0 - rb.depth * 0.5

- [ ] **3.8** Additive accumulation + screen blend
  - Sum all ribbons additively
  - Multiply by 0.95 (canvas opacity)
  - Screen blend with background

### Phase 4: Post-Ribbon Layers

- [ ] **4.1** Bottom volumetric glow
  - `smoothstep(0.6, 1.0, uv.y) * 0.01`
  - rgb(120, 60, 200), screen blend

- [ ] **4.2** Soft volumetric center
  - Elliptical at (0.5, 0.46), radii (0.26, 0.21)
  - rgb(200,160,240), alpha 0.022, screen

- [ ] **4.3** Edge vignette (6-stop)
  - Elliptical (0.45, 0.38)
  - Transparent 0-32%, darkness increasing to 0.7 at edge
  - Normal blend (darkening)

- [ ] **4.4** Central clarity
  - Elliptical at (0.5, 0.47), radii (0.33, 0.28)
  - rgb(230,210,250), alpha 0.016, screen

### Phase 5: Integration

- [ ] **5.1** Verify CosmicPostProcess.metal preset 2
  - Only needs minimal top fade (vignette in main shader)

- [ ] **5.2** Verify StarFieldGenerator.swift auroraRibbons()
  - Confirm value ranges match React
  - No changes needed if ranges are already correct

- [ ] **5.3** Build and compile
  - `cd LumenLingo && xcodegen generate && xcodebuild ...`

### Phase 6: Tuning Constants (post-build)

- [ ] **6.1** ALPHA_SCALE constant
  - Start at 30.0
  - Increase if ribbons too faint, decrease if too bright
  - Target: bright core clearly visible at all times

- [ ] **6.2** Overlay glow strength
  - The fuchsia/gold/pink clouds should be VISIBLE as colored atmospheric haze
  - Not dominant — subtle but present
  - Adjust alpha multipliers if too subtle

- [ ] **6.3** Vignette strength
  - Edges should darken but not clip the aurora
  - The 0.7 max alpha at edges is aggressive — verify it doesn't overdark

- [ ] **6.4** Soft edge width
  - 0.01 UV = ~8.4px at 844px height
  - May need adjustment: too wide = ribbons look fuzzy, too narrow = hard edges

---

## Appendix A: Color Reference Table

| Name | RGB | Float3 | Usage |
|------|-----|--------|-------|
| Deep violet (c1) | (95, 45, 190) | (0.373, 0.176, 0.745) | Ribbon anchor 1 |
| Hot fuchsia (c2) | (210, 60, 160) | (0.824, 0.235, 0.627) | Ribbon anchor 2 |
| Warm gold (c3) | (255, 180, 70) | (1.000, 0.706, 0.275) | Ribbon anchor 3 |
| Void transparent | (15, 8, 25, α=0) | — | Background L1 center |
| Void mid | (10, 5, 20, α=0.5) | (0.039, 0.020, 0.078) | Background L1 40% |
| Void dark | (6, 3, 14, α=0.8) | (0.024, 0.012, 0.055) | Background L1 70% |
| Void edge | (3, 2, 8, α=1) | (0.012, 0.008, 0.031) | Background L1 100% |
| Ambient violet center | (100, 50, 180) | (0.392, 0.196, 0.706) | L2 center |
| Ambient violet edge | (75, 35, 145) | (0.294, 0.137, 0.569) | L2 edge |
| Fuchsia glow center | (220, 60, 160) | (0.863, 0.235, 0.627) | L4 center |
| Fuchsia glow edge | (180, 45, 130) | (0.706, 0.176, 0.510) | L4 60% |
| Gold glow center | (255, 180, 80) | (1.000, 0.706, 0.314) | L5 center |
| Gold glow edge | (245, 150, 60) | (0.961, 0.588, 0.235) | L5 55% |
| Pink glow center | (255, 100, 180) | (1.000, 0.392, 0.706) | L6 center |
| Pink glow edge | (220, 70, 150) | (0.863, 0.275, 0.588) | L6 70% |
| Volumetric center | (200, 160, 240) | (0.784, 0.627, 0.941) | L8 center |
| Volumetric edge | (180, 140, 220) | (0.706, 0.549, 0.863) | L8 60% |
| Bottom glow | (120, 60, 200) | (0.471, 0.235, 0.784) | Canvas bottom |
| Vignette dark | (6, 4, 16) | (0.024, 0.016, 0.063) | L9 inner |
| Vignette darkest | (2, 1, 6) | (0.008, 0.004, 0.024) | L9 outer |
| Clarity warm | (230, 210, 250) | (0.902, 0.824, 0.980) | L10 center |
| Clarity cool | (210, 190, 240) | (0.824, 0.745, 0.941) | L10 48% |

## Appendix B: Timing Constants Reference

| Parameter | Formula | Period |
|-----------|---------|--------|
| Global time | `u.time * u.speed * 0.35` | — |
| Per-ribbon time | `t * rb.speed + r * 10.0` | — |
| Color cycle | `sin(rTime * 0.15 + offset)` | ~42s per rTime |
| Drift oscillation | `sin(rTime * 0.1)` | ~63s per rTime |
| Drift linear | `rTime * 0.0427 * drift` | Continuous |
| Shimmer spatial | `x * 12.0` | 12 cycles/width |
| Shimmer travel | `rTime * flowSpeed` | Varies |
| Fuchsia breathing | `sin(t * 0.224)` | ~28s |
| Gold breathing | `sin(t * 0.262 + 6.0)` | ~24s, 6s delay |
| Pink breathing | `sin(t * 0.196 + 10.0)` | ~32s, 10s delay |
| Height noise | `sin(x * π * 4 + rTime * 0.7)` | 2 cycles/width |

## Appendix C: Geometry Parameters Per Ribbon (React)

Ribbon generation uses `Math.random()` (non-deterministic in React).
In Metal, we use `sRand(31, i * 7 + n)` for deterministic equivalents.

| Ribbon | Type | geomType | depth | baseHeight |
|--------|------|----------|-------|------------|
| 0 | smooth | 0 | 0.000 | 0.425 |
| 1 | fold | 1 | 0.125 | 0.200 |
| 2 | spiral | 2 | 0.250 | 0.356 |
| 3 | s-curve | 3 | 0.375 | 0.626 |
| 4 | drape | 4 | 0.500 | 0.557 |
| 5 | ripple | 5 | 0.625 | 0.245 |
| 6 | smooth | 0 | 0.750 | 0.211 |
| 7 | fold | 1 | 0.875 | 0.530 |
| 8 | s-curve | 3 | 1.000 | 0.650 |

baseHeight computed: `0.2 + (sin(i * 99) * 0.5 + 0.5) * 0.45`

Note: Ribbons 1, 5, 6 have low baseHeight (0.20-0.25) — these are near the TOP
of the screen. Ribbons 3, 8 have high baseHeight (0.62-0.65) — these are in the
LOWER portion. This distributes ribbons across the middle 45% of the screen.

## Appendix D: Screen Blend Formula

```
screenBlend(base, overlay, opacity):
  result = 1 - (1 - base) * (1 - overlay * opacity)
```

Properties:
- `screenBlend(0, overlay, 1)` = overlay (on black, just shows the overlay)
- `screenBlend(base, 0, 1)` = base (blending with black = no change)
- `screenBlend(base, 1, 1)` = 1 (blending with white = white)
- `screenBlend(a, b, 1)` = `a + b - a*b` ≥ max(a, b) (always brightens or maintains)

For our use case (dark base, bright overlay): screen ≈ additive for low values,
but naturally soft-clips near 1.0 preventing blow-out.

## Appendix E: Complete Per-Pixel Ribbon Algorithm

```
FOR each pixel at uv:

  1. Base color: black (void) + gradient overlay with alpha compositing
  2. Layer ambient violet (screen)
  3. Layer fuchsia/gold/pink glows (screen)

  4. ribbonAccum = (0, 0, 0)
  
  5. FOR r = 0 to 8:
       rb = ribbons[r]
       rTime = t * rb.speed + r * 10
       
       driftX = sin(rTime * 0.1) * 0.1 + rTime * 0.0427 * rb.drift
       
       // Color
       rawCycle = sin(rTime * 0.15 + rb.colorOffset) * 0.5 + 0.5
       ribbonColor = cosine_interpolate(c1, c2, c3, rawCycle)
       
       // Position in ribbon space
       x = fract(uv.x - driftX)
       
       // Geometry displacement
       yOffset = type_function(x, rTime, geomType)
       
       // Ribbon Y center
       ribbonY = rb.baseHeight + yOffset
       
       // Dynamic height
       heightNoise = sin(x * PI * 4 + rTime * 0.7) * 0.4 +
                     cos(x * PI * 2 - rTime * 0.2) * 0.3 + 0.3
       segH = (0.26 + heightNoise * 0.11) * (1 - rb.depth * 0.3)
       
       topY = ribbonY - segH
       
       // Soft boundary check (replaces hard if)
       softBot = smoothstep(ribbonY + 0.005, ribbonY - 0.005, uv.y)
       softTop = smoothstep(topY - 0.005, topY + 0.005, uv.y)
       inRibbon = softBot * softTop
       
       IF inRibbon > 0.001:
         vt = (ribbonY - uv.y) / segH  // 0=base, 1=top
         vt = clamp(vt, 0, 1)
         
         // 5-stop gradient
         (gradAlpha, gradColor) = evaluate_gradient(vt, ribbonColor)
         
         // Shimmer
         shimmer = 0.85 + (sin(x * 12 - rTime * rb.flowSpeed) * 0.5 + 0.5) * 0.35
         
         // Width-proportional alpha
         alpha = rb.width * 30.0 * (1 - rb.depth * 0.5)
         alpha *= gradAlpha * shimmer * inRibbon
         
         ribbonAccum += gradColor * alpha
  
  6. ribbonAccum = clamp(ribbonAccum * 0.95, 0, 1)
     col = screenBlend(col, ribbonAccum, 1.0) // intensity already baked into breath
  
  7. Bottom volumetric (screen)
  8. Soft volumetric center (screen)
  9. Vignette (darken/mix)
  10. Central clarity (screen)
  
  11. alpha = clamp(length(col) * 5 + 0.35, 0, 1)
  12. return float4(col, alpha)
```

## Appendix F: Key Differences Between This Rebuild and Current Shader

| Aspect | Current Shader | This Rebuild |
|--------|---------------|--------------|
| Ribbon boundary | Hard `if` cutoff | `smoothstep` soft edges |
| Alpha per ribbon | Flat 0.25 | `rb.width * 30.0 * depthFade` |
| Overlay glow falloff | Squared smoothstep | Same but with stronger alpha |
| Atmospheric glows | Visible but subtle | Boosted strength |
| Turbulence in drift | Missing | Added (subtle) |
| Edge softening | None | ±0.005 UV smoothstep zone |
| Gradient at vt boundary | Possible hard edges | Clean interpolation chain |

## Appendix G: Visual Diagnostic Tests

### Test 1: Core Brightness
Set all 9 ribbons to depth=0, same baseHeight. The bright core band should be
CLEARLY visible as a horizontal bright line of saturated color. If it's barely
visible, ALPHA_SCALE needs increasing.

### Test 2: Atmospheric Cloud Visibility
Disable ribbons (set ribbonAccum = 0). The fuchsia, gold, and pink clouds should
be visible as soft colored patches against the dark void. If invisible, boost
their alpha multipliers.

### Test 3: Curtain Structure
With all layers active, individual ribbon curtains should be distinguishable.
Each should have a visible bright core with fainter glow above and below.
The top of each curtain should have a subtle blue tinge.

### Test 4: Color Cycle
Over ~140 seconds, ribbons should cycle: violet → fuchsia → gold → fuchsia → violet.
The transition should be SMOOTH (cosine easing, not linear).

### Test 5: Vignette
Edges of screen should darken significantly. The center should remain clear.
The vignette should frame the aurora without cutting it off abruptly.
