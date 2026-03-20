# Starburst Ring Galaxy — React → Metal Analysis

## Table of Contents

1. [High-Level Architecture](#1-high-level-architecture)
2. [Visual Identity: The Cosmic Eye](#2-visual-identity-the-cosmic-eye)
3. [Color Palette & Constants](#3-color-palette--constants)
4. [Layering & Compositing Stack](#4-layering--compositing-stack)
5. [Layer 1: Deep Void & Event Horizon](#5-layer-1-deep-void--event-horizon)
6. [Layer 2: Atmospheric Wash](#6-layer-2-atmospheric-wash)
7. [Layer 3: Ring Gas Structure (200 Particles)](#7-layer-3-ring-gas-structure-200-particles)
8. [Layer 4: Accretion Disk (160 Particles)](#8-layer-4-accretion-disk-160-particles)
9. [Layer 5: Dust Particles (15)](#9-layer-5-dust-particles-15)
10. [Layer 6: Drifting Motes](#10-layer-6-drifting-motes)
11. [Layer 7: Natural Nebula Clouds](#11-layer-7-natural-nebula-clouds)
12. [Layer 8: Microstars (2500 Canvas Sprites)](#12-layer-8-microstars-2500-canvas-sprites)
13. [Layer 9: Vignette Overlay](#13-layer-9-vignette-overlay)
14. [Sprite System Deep-Dive](#14-sprite-system-deep-dive)
15. [Animation Timing & Motion Constants](#15-animation-timing--motion-constants)
16. [Gas Particle Sprite Rendering](#16-gas-particle-sprite-rendering)
17. [Accretion Disk Physics](#17-accretion-disk-physics)
18. [Microstar Canvas System](#18-microstar-canvas-system)
19. [React vs Current Metal Gap Analysis](#19-react-vs-current-metal-gap-analysis)
20. [Metal Shader Rewrite Plan](#20-metal-shader-rewrite-plan)
21. [Performance Budget](#21-performance-budget)
22. [Appendix A: Full Color Tables](#appendix-a-full-color-tables)
23. [Appendix B: Sprite Gradient Specifications](#appendix-b-sprite-gradient-specifications)
24. [Appendix C: Animation Timing Reference](#appendix-c-animation-timing-reference)
25. [Appendix D: Buffer Layout Reference](#appendix-d-buffer-layout-reference)

---

## 1. High-Level Architecture

### React Implementation (970 lines)

The React Starburst Ring Galaxy creates a "Cosmic Eye" — a Hoag's Object-inspired
ring galaxy with a dark event horizon at center, swirling accretion disk, luminous
gas ring, and a rich stellar field. The effect is achieved through **6 separate
rendering layers** composited via CSS blend modes and canvas operations.

```
React Layer Stack (bottom to top):
┌──────────────────────────────────────────┐
│  6. Vignette Overlay (CSS radial)        │  ← Darkens edges
├──────────────────────────────────────────┤
│  5. MicrostarCanvas (2500 sprites)       │  ← mix-blend-mode: screen
├──────────────────────────────────────────┤
│  4. Natural Nebula Clouds (CSS divs)     │  ← mix-blend-mode: screen, blur(60px)
├──────────────────────────────────────────┤
│  3. RingStructureCanvas (gas+accretion)  │  ← mix-blend-mode: screen
├──────────────────────────────────────────┤
│  2. Atmospheric Wash (CSS radial)        │  ← mix-blend-mode: screen
├──────────────────────────────────────────┤
│  1. Deep Void + Event Horizon (CSS)      │  ← Opaque background
└──────────────────────────────────────────┘
```

### Metal Implementation (Single Pass)

All layers are composited in a **single fragment shader pass** using the same
blending functions (screenBlend, additiveBlend, multiplyBlend) from CosmicNoise.h.

```
Metal Rendering Pipeline:
┌──────────────────────────────────────────┐
│  Phase 0: starburstBgFragment            │  ← Fullscreen triangle
│    ├─ Deep void gradient                 │
│    ├─ Event horizon                      │
│    ├─ Atmospheric wash                   │
│    ├─ Core glow + inner halo             │
│    ├─ Ring gas (80 particles, buffer 1)  │
│    ├─ Accretion disk (60 particles, b2)  │
│    ├─ Dust particles (15, procedural)    │
│    ├─ Motes (4, procedural)              │
│    ├─ Natural nebula clouds (4 zones)    │
│    └─ Warped FBM ring detail             │
├──────────────────────────────────────────┤
│  Phase 1: starburstStarVertex/Fragment   │  ← Instanced quads (1800 stars)
└──────────────────────────────────────────┘
```

### Key Architectural Differences

| Aspect               | React                           | Metal (Current)                |
|-----------------------|---------------------------------|--------------------------------|
| Gas particles         | 200 sprite-rendered             | 80 analytical gaussians        |
| Accretion particles   | 160 sprite-rendered             | 60 analytical ellipsoids       |
| Sprite system         | Pre-rendered canvas textures    | Analytical radial gradients    |
| Gas sprite profile    | 4-stop radial gradient          | 4-stop if/else gradient        |
| Stars                 | 2500 canvas sprites (3 types)   | 1800 instanced quads           |
| Nebula clouds         | CSS blur(60px) + organic shapes | Analytical organic blobs       |
| Ring FBM detail       | Not present (sprite overlap)    | warpedFBM 4-octave             |
| Compositing           | Multi-canvas screen blend       | Single-pass screen blend       |
| Hero star spikes      | Canvas diffraction spikes       | Not implemented                |
| Ring gas stretch       | Canvas rotate+scale             | Analytical tangential stretch  |

---

## 2. Visual Identity: The Cosmic Eye

### What Makes It Stunning

The Starburst Ring Galaxy achieves its "cosmic eye" appearance through several
carefully orchestrated visual elements:

1. **The Pupil**: A true black event horizon at center (~11% radius), surrounded
   by a faint lavender core glow (217, 196, 255). This creates depth — the
   viewer is looking into an abyss.

2. **The Iris**: The ring gas structure at ~35% radius creates the "iris" of the
   cosmic eye. 200 stretched, tangentially-aligned gas particles with volumetric
   plasma gradients create a dense, luminous ring of violet/magenta/cyan/white.

3. **The Sclera**: The accretion disk (160 particles between 13-33% radius)
   creates the inner white/blue-white glow between the pupil and iris, like the
   sclera of an eye catching light.

4. **The Eyelash Halo**: Beyond the ring, a field of 2500 microstars creates
   scattered light, with larger "hero" stars having James Webb-style diffraction
   spikes that catch the eye.

5. **Atmospheric Depth**: Four organic nebula clouds in violet/magenta/blue/cyan
   create asymmetric depth, preventing the scene from looking like a simple
   symmetric ring.

6. **Dark Matter**: 15 dust particles using multiply blend create dark patches
   within the ring, adding visual complexity and preventing the ring from looking
   uniformly bright.

### Visual Elements Priority

For the Metal shader to achieve parity, the most impactful elements in order of
visual importance:

```
Priority 1 (Critical — defines the look):
  ├─ Ring gas structure: particle count (200 vs 80), stretch quality, plasma gradient
  ├─ Accretion disk: particle count (160 vs 60), Keplerian speed, spaghettification
  ├─ Deep void + event horizon: the dark center "pupil"
  └─ Core glow: the bright lavender center that illuminates the hub

Priority 2 (Important — adds richness):
  ├─ Nebula clouds: organic asymmetric depth
  ├─ Dust particles: dark patches breaking ring uniformity
  ├─ Atmospheric wash: violet radial haze
  └─ Motes: tiny drifting life

Priority 3 (Enhancement — hero moments):
  ├─ Ring FBM detail: adds turbulent gas texture within ring
  ├─ Vignette: edge darkening focuses attention on center
  └─ Star diffraction spikes (hero stars only)
```

---

## 3. Color Palette & Constants

### Master Color Palette (from React PALETTE object)

```javascript
const PALETTE = {
  coreGlow:    [217, 196, 255],  // Warm lavender — the central star-like glow
  innerHalo:   [154,  86, 255],  // Deep violet — inner ring halo
  violetGas:   [125,  44, 255],  // Vivid violet — primary ring gas color
  magentaGas:  [208,  75, 255],  // Hot magenta — secondary ring gas
  neonBlue:    [ 75, 216, 255],  // Electric cyan — accent gas color
  hotWhite:    [255, 255, 255],  // Pure white — hot star cores
  blueWhite:   [221, 234, 255],  // Cool blue-white — star color
  softMagenta: [246, 201, 255],  // Soft pink-magenta — atmospheric glow
  voidStart:   [ 14,   6,  42],  // Deep purple-black — void edge
  voidEnd:     [ 20,   5,  49],  // Slightly warmer void
};
```

### Metal RGB Equivalents

```metal
// Palette anchors (Metal float3 via rgb() helper)
float3 coreGlow    = rgb(217, 196, 255);  // (0.851, 0.769, 1.000)
float3 innerHalo   = rgb(154,  86, 255);  // (0.604, 0.337, 1.000)
float3 violetGas   = rgb(125,  44, 255);  // (0.490, 0.173, 1.000)
float3 magentaGas  = rgb(208,  75, 255);  // (0.816, 0.294, 1.000)
float3 neonBlue    = rgb( 75, 216, 255);  // (0.294, 0.847, 1.000)
float3 hotWhite    = float3(1.0);         // (1.000, 1.000, 1.000)
float3 blueWhite   = rgb(221, 234, 255);  // (0.867, 0.918, 1.000)
float3 softMagenta = rgb(246, 201, 255);  // (0.965, 0.788, 1.000)
float3 voidStart   = rgb( 14,   6,  42);  // (0.055, 0.024, 0.165)
float3 voidEnd     = rgb( 20,   5,  49);  // (0.078, 0.020, 0.192)
```

### Ring Gas Colors (5 colors from React gasParticles useMemo)

The ring gas uses 5 colors from the palette, randomly assigned:
```javascript
const colors = [
  PALETTE.violetGas,    // [125,  44, 255]  — 20% of particles
  PALETTE.magentaGas,   // [208,  75, 255]  — 20%
  PALETTE.neonBlue,     // [ 75, 216, 255]  — 20%
  PALETTE.innerHalo,    // [154,  86, 255]  — 20%
  PALETTE.coreGlow      // [217, 196, 255]  — 20%
];
```

### Accretion Disk Colors (3 colors — hot inner matter)

```javascript
const colors = [
  [255, 255, 255],   // Pure white — hottest
  [200, 230, 255],   // Blue-white — cooling
  [230, 210, 255]    // Lavender — intermediate
];
```

### Nebula Cloud Colors (4 asymmetric zones)

```
Violet zone:  rgba(140, 100, 220, 0.15) center, fades to transparent
Magenta zone: rgba(180,  80, 200, 0.12)
Blue-violet:  rgba(100, 120, 200, 0.10)
Cyan accent:  rgba( 80, 160, 220, 0.08)
```

### Void Gradient (CSS → Metal mapping)

```css
/* React CSS radial-gradient */
radial-gradient(circle at 50% 50%, 
  rgb(0, 0, 0) 0%,           /* True black at center */
  rgb(0, 0, 0) 11%,          /* Black extends to 11% — event horizon */
  rgba(25, 10, 50, 0.4) 14%, /* Faint violet-black transition */
  rgb(20, 5, 49) 30%,        /* Deep void start */
  rgb(14, 6, 42) 60%,        /* Mid-void */
  rgb(4, 2, 14) 100%         /* Near-black edges */
)
```

---

## 4. Layering & Compositing Stack

### React's Multi-Canvas Architecture

React uses **6 DOM layers** stacked via CSS:

```
z-index → bottom to top:
  Layer 1: <div> with CSS radial-gradient (void + event horizon)
  Layer 2: <div> with CSS radial-gradient (atmospheric wash) — screen blend
  Layer 3: <RingStructureCanvas> — HTML5 Canvas — screen blend
  Layer 4: <div> wrapper — 4 CSS blurred divs for nebula clouds — screen blend
  Layer 5: <MicrostarCanvas> — HTML5 Canvas — screen blend
  Layer 6: <div> with CSS radial-gradient (vignette)
```

### Key Compositing Observations

1. **Screen blend** is used for ALL luminous layers (wash, ring gas, nebula, stars).
   Screen blend formula: `1 - (1-base) * (1-overlay * opacity)`

2. **Source-over** is used within the RingStructureCanvas for gas particles.
   This means gas particles **do not screen-blend with each other**, they paint
   on top of each other with standard alpha compositing. Only the ENTIRE canvas
   screens against the background.

3. **Dust uses source-over** within the canvas too — it applies multiply-like
   darkening via low-alpha dark sprite painting.

4. **Motes** are drawn with `ctx.fill()` as simple circles — standard alpha.

### Metal Single-Pass Equivalent

In the Metal shader, we composite everything sequentially in a single fragment:

```metal
// Start with void
float3 col = voidGradient(dist);

// Event horizon (black circle cutout)
col = mix(col, float3(0.0), eventHorizonMask);

// Atmospheric wash (screen blend)
col = screenBlend(col, violetWash, washAlpha);

// Core glow (screen blend)
col = screenBlend(col, coreColor, coreAlpha);

// Inner halo (screen blend)
col = screenBlend(col, innerHalo, haloAlpha);

// Ring gas particles (screen blend per particle)
for (int i = 0; i < 80; i++) { ... screenBlend ... }

// Accretion disk (screen blend per particle)
for (int i = 0; i < 60; i++) { ... screenBlend ... }

// Dust (multiply blend)
for (int i = 0; i < 15; i++) { ... multiplyBlend ... }

// Motes (additive blend)
for (int i = 0; i < 4; i++) { ... additiveBlend ... }

// Nebula clouds (screen blend)
// 4 organic zones screen-blended

// Ring FBM detail (screen blend)
col = screenBlend(col, ringGasColor, fbmAlpha);

// Vignette is applied via stars/alpha channel
```

### CRITICAL: React Uses Source-Over Within Canvas

In React, gas particles are drawn with `ctx.globalCompositeOperation = 'source-over'`
within the RingStructureCanvas. This means particles paint ON TOP of each other
normally (alpha compositing), creating a **layered, stacked appearance** where
overlapping particles build up opacity.

The ENTIRE canvas then screen-blends with the background via CSS `mix-blend-mode: screen`.

In Metal, we do `screenBlend` per particle against the accumulating `col`, which is
a slightly different result — each particle individually screen-blends rather than
being composited together first. For the ring gas, this creates a slightly different
(generally more transparent) look than React's approach.

**Solution**: For ring gas, accumulate particle contributions into a temporary
`float3 ringAccum`, THEN screen-blend the accumulated result against the background.
This better matches React's canvas→screen CSS pipeline.

---

## 5. Layer 1: Deep Void & Event Horizon

### React Implementation

Two CSS elements create the void:

```css
/* Element 1: Main void gradient */
background: radial-gradient(circle at 50% 50%, 
  rgb(0, 0, 0) 0%,
  rgb(0, 0, 0) 11%,
  rgba(25, 10, 50, 0.4) 14%,
  rgb(20, 5, 49) 30%,
  rgb(14, 6, 42) 60%,
  rgb(4, 2, 14) 100%
);
```

### Key Observations

1. **True black** extends from center to 11% radius — this is the event horizon.
   It's NOT a gradient — it's solid black up to 11%.

2. **Transition zone** (11% → 14%): A subtle rgba(25, 10, 50, 0.4) transition.
   With 40% alpha against the black behind it, this creates approximately
   rgb(10, 4, 20) — a very dark purple-black. This transition prevents a hard
   edge at the event horizon boundary.

3. **Void body** (14% → 100%): Smooth gradient from deep purple (20, 5, 49) to
   near-black (4, 2, 14). This is the "deep space" surrounding the galaxy.

### Current Metal Implementation

```metal
float3 voidCenter = float3(0.0);
float3 voidMid = rgb(25, 10, 50);       // (0.098, 0.039, 0.196)
float3 voidEdge = rgb(14, 6, 42);       // (0.055, 0.024, 0.165)
float3 voidFar = rgb(4, 2, 14);         // (0.016, 0.008, 0.055)

if (dist < 0.08) {
    col = voidCenter;
} else if (dist < 0.2) {
    col = mix(voidCenter, voidMid, smoothstep(0.08, 0.2, dist));
} else {
    col = mix(voidMid, mix(voidEdge, voidFar, smoothstep(0.4, 0.8, dist)),
              smoothstep(0.2, 0.5, dist));
}

// Event Horizon — hard black at ~11%
float eventHorizon = 1.0 - smoothstep(0.08, 0.11, dist);
col = mix(col, float3(0.0), eventHorizon);
```

### Gap Analysis: Void

| Aspect                    | React                          | Metal (Current)              |
|---------------------------|--------------------------------|------------------------------|
| Event horizon radius      | 11% (black to 11%)            | 8-11% smoothstep             |
| Transition zone           | 11-14% (rgba 25,10,50,0.4)    | 8-20% smoothstep             |
| Void gradient stops       | 6 stops (precise CSS)          | 3-color nested mix           |
| Dark purple-black          | rgb(25, 10, 50) at 40% alpha  | rgb(25, 10, 50) at 100%     |
| Far void color            | rgb(4, 2, 14)                  | rgb(4, 2, 14) ✓             |

### Issues with Current Metal Void

1. **Event horizon too small** — Metal uses 0.08, React uses 0.11. The "pupil" of
   the cosmic eye needs to be larger for impact.

2. **Transition zone mismatch** — React has a very narrow 11%→14% subtle purple
   zone. Metal has a wider 0.08→0.20 gradient that's less defined.

3. **Missing the alpha interaction** — React's 40% alpha purple at 14% creates a
   very subtle transition. Metal's full-opacity purple is too visible.

---

## 6. Layer 2: Atmospheric Wash

### React Implementation

```css
background: radial-gradient(circle at 50% 50%,
  rgba(125, 44, 255, 0.04) 0%,
  transparent 60%
);
mix-blend-mode: screen;
```

A faint violet radial glow at 4% opacity, fading to transparent at 60% radius,
screen-blended. This creates a subtle atmospheric haze across the inner portion
of the scene.

### Current Metal Implementation

```metal
float3 violetWash = rgb(125, 44, 255);
float washGlow = radialGlow(uv, float2(0.5, 0.5), 0.6);
washGlow = washGlow * washGlow;   // squared for softer falloff
col = screenBlend(col, violetWash, washGlow * 0.04 * u.intensity);
```

### Assessment: ✅ Close Match

The Metal implementation matches reasonably well. The `radialGlow` returns
`1.0 - smoothstep(0, radius, dist)` which creates a similar falloff to the CSS
gradient. The squaring (`washGlow * washGlow`) makes it softer at edges, which
approximates the CSS linear→transparent gradient.

Minor difference: CSS gradient is a hard linear interpolation from 0.04 to 0.0
between center and 60%. Metal uses smoothstep which has an S-curve. The visual
difference is minimal.

---

## 7. Layer 3: Ring Gas Structure (200 Particles)

### This is THE most important visual layer — it defines the "Cosmic Eye"

### React: Particle Generation (useMemo)

```javascript
const gasParticles = useMemo(() => {
  const p = [];
  const colors = [violetGas, magentaGas, neonBlue, innerHalo, coreGlow];
  
  for (let i = 0; i < 200; i++) {
    const angle = (i / 200) * Math.PI * 2 + (Math.random() * 0.1);
    const rVar = (Math.random() - 0.5) * 0.18;
    const r = 0.35 + rVar;                    // Radius: 0.26 to 0.44
    const size = 40 + Math.random() * 50;     // 40-90 reference px
    const color = colors[Math.floor(Math.random() * colors.length)];
    const stretch = 1.5 + Math.random() * 1.5; // 1.5-3.0 tangential stretch
    
    p.push({
      angle,                                    // Evenly distributed + jitter
      r,                                         // ~0.35 ± 0.09
      size,                                      // 40-90 px (bigger than Metal!)
      color,                                     // One of 5 palette colors
      stretch,                                   // Tangential elongation
      speed: 0.02 + Math.random() * 0.04,       // Orbit speed multiplier
      pulseOffset: Math.random() * Math.PI * 2,  // Pulse animation phase
      wobbleSpeed: 0.5 + Math.random(),          // 0.5-1.5 wobble
      sprite: null                               // Generated in useEffect
    });
  }
  return p;
}, []);
```

### React: Gas Particle Animation Loop

```javascript
// Global rotation — very slow for majesty
const globalRot = elapsed * 0.004;     // 0.004 radians/sec → full circle in ~26 min
const subtleDrift = elapsed * 0.0007;  // Whole-galaxy drift — barely noticeable

for (let i = 0; i < gasParticles.length; i++) {
  const p = gasParticles[i];
  const a = p.angle + globalRot * p.speed + subtleDrift;
  
  // Fluid Dynamics: 3 wave frequencies ("Liquid light")
  const wave1 = Math.sin(a * 3 + elapsed * 0.2);     // Slow heave
  const wave2 = Math.cos(a * 6 - elapsed * 0.15);    // Counter flow
  const wave3 = Math.sin(a * 10 + elapsed * 0.4) * 0.3; // Detail ripple
  
  const turb = (wave1 * 0.012 + wave2 * 0.006 + wave3 * 0.003);
  const dist = (p.r + turb) * ringScale;  // ringScale = minDim
  
  const x = cx + Math.cos(a) * dist;
  const y = cy + Math.sin(a) * dist;
  
  // "Ethereal Breath" — very slow pulsing
  const deepBreath = Math.sin(elapsed * 0.8 + p.pulseOffset) * 0.1;
  const pulse = 1 + Math.sin(elapsed * (p.wobbleSpeed * 0.5) + p.pulseOffset) * 0.08
                + deepBreath;
  
  // Density brightness: smoother transition
  const densityBoost = Math.max(0, wave1 + wave2) * 0.15;
  const baseSize = p.size * (minDim / 800) * pulse;
  
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(a + Math.PI/2);  // Align tangentially
  
  // Opacity: reduced base, rely on additive overlap
  ctx.globalAlpha = Math.min(1, (0.22 + densityBoost) * intensity);
  
  // Gentle stretch breathing
  const stretchBreath = 1 + deepBreath * 0.15;
  ctx.scale(1, p.stretch * stretchBreath);
  ctx.drawImage(p.sprite, -baseSize, -baseSize, baseSize*2, baseSize*2);
  ctx.restore();
}
```

### React Gas Particle Rendering — Critical Details

#### 1. Tangential Alignment
The `ctx.rotate(a + Math.PI/2)` rotates each particle so its long axis (the
stretched Y axis) runs **tangent to the ring**. This is crucial — it makes particles
look like they're flowing along the ring orbit, not pointing radially.

#### 2. Asymmetric Stretch
`ctx.scale(1, p.stretch * stretchBreath)` scales ONLY the Y axis (which after
rotation is the tangential direction). Factor range: 1.5–3.0 (static) × ±15%
breathing. This creates elongated gas streaks rather than circular blobs.

#### 3. Canvas Sprite (getGasSprite)
Each gas particle is rendered via a pre-generated canvas sprite with a 4-stop
volumetric plasma gradient:

```javascript
const getGasSprite = (color, size) => {
  const grad = ctx.createRadialGradient(center, center, 0, center, center, size);
  grad.addColorStop(0,    `rgba(${r+30}, ${g+30}, ${b+30}, 0.25)`); // Hot center
  grad.addColorStop(0.25, `rgba(${r}, ${g}, ${b}, 0.12)`);
  grad.addColorStop(0.6,  `rgba(${r}, ${g}, ${b}, 0.03)`);
  grad.addColorStop(1,    `rgba(${r}, ${g}, ${b}, 0)`);
};
```

**Key observation**: The sprite is rendered at `size=64` pixels. The 4-stop gradient
creates a hot bright center (+30 RGB) that quickly falls off. The max alpha is only
0.25 even at center — extremely translucent. But with 200 overlapping particles,
the accumulated opacity builds up naturally.

#### 4. Source-Over Compositing
Gas particles use `ctx.globalCompositeOperation = 'source-over'` (standard alpha
blend). They paint on top of each other. When 3 overlapping particles each at
alpha 0.22 × 0.25 = 0.055 final, they create cumulative opacity of ~0.16 which
builds the visible ring structure.

#### 5. Wave-Based Radius Modulation
Three wave frequencies create "breathing" radial motion:
- Wave 1: `sin(angle*3)` × 0.012 — slow heave, 3 peaks around ring
- Wave 2: `-cos(angle*6)` × 0.006 — counter-flow with 6 peaks
- Wave 3: `sin(angle*10)` × 0.003 — fine detail ripple, 10 peaks

Combined turbulence range: ±0.021 viewport units (±2.1% of screen).
This creates organic radial "breathing" that makes the ring feel alive.

### Current Metal Ring Gas — Gaps

| Aspect                  | React                        | Metal (Current)             |
|-------------------------|------------------------------|-----------------------------|
| Particle count          | **200**                      | **80** — 2.5× fewer        |
| Particle size           | 40-90 px @ reference         | 0.03-0.08 UV               |
| Sprite size (generation)| 64px canvas                  | N/A (analytical)            |
| Gradient stops          | 4-stop radial gradient       | 4-stop if/else ✓            |
| Hot center (+30 RGB)    | ✓ min(r+30, 255)            | ✓ min(color+0.12, 1.0)     |
| Max center alpha        | 0.25                         | 0.25 ✓                      |
| Tangential alignment    | rotate(angle + π/2) + scale  | Analytical projection ✓     |
| Stretch range           | 1.5-3.0                      | 1.5-3.0 ✓                   |
| Stretch breathing       | ±15% from deepBreath         | ✓                            |
| Compositing model       | source-over THEN screen      | Per-particle screen          |
| Base opacity            | 0.22 × intensity             | 0.22 × intensity ✓          |
| Density boost           | max(0, w1+w2) × 0.15        | max(0, wA+wB) × 0.15 ✓      |
| Wave frequencies        | sin(a*3), cos(a*6), sin(a*10)| sin(a*3), cos(a*6), sin(a*10) ✓|

**PRIMARY ISSUE**: Only 80 particles instead of 200. React's ring looks denser and
more luminous because 200 overlapping translucent particles create much more
accumulated brightness. With 80 particles, the ring appears sparse and lacks the
dense, flowing "liquid light" quality.

**SECONDARY ISSUE**: Metal uses per-particle screen blend against the accumulating
background, while React accumulates all gas using source-over first, then screens
the entire result. This subtly reduces total ring brightness in Metal.

---

## 8. Layer 4: Accretion Disk (160 Particles)

### React: Accretion Particle Generation

```javascript
const accretionParticles = useMemo(() => {
  const a = [];
  const colors = [[255,255,255], [200,230,255], [230,210,255]];
  
  for (let i = 0; i < 160; i++) {
    a.push({
      angle: Math.random() * Math.PI * 2,
      r: 0.13 + Math.pow(Math.random(), 1.8) * 0.20,  // Power distribution
      speed: 0.3 + Math.random() * 0.5,                 // 0.3-0.8
      size: 12 + Math.random() * 18,                    // 12-30 px
      color: colors[Math.floor(Math.random() * 3)],
      phase: Math.random() * Math.PI * 2
    });
  }
  return a;
}, []);
```

### Critical: Power-Law Radius Distribution

```javascript
r: 0.13 + Math.pow(Math.random(), 1.8) * 0.20
```

Using `random^1.8` creates a **power-law distribution** that concentrates particles
near the inner edge (r=0.13, the event horizon boundary). This mimics real accretion
disks where matter accumulates near the black hole. The distribution:

- ~40% of particles in inner 25% of radial range (0.13-0.18)
- ~25% in next 25% (0.18-0.23)
- ~20% in next 25% (0.23-0.28)
- ~15% in outer 25% (0.28-0.33)

### React: Accretion Animation Loop

```javascript
for (let i = 0; i < accretionParticles.length; i++) {
  const p = accretionParticles[i];
  const rNorm = (p.r - 0.13) / 0.20;  // Normalized: 0 = horizon, 1 = outer

  // Keplerian speed: faster near center
  const rotSpeed = p.speed * (1 + (1 - rNorm) * 2.5);
  const currentAngle = p.angle + globalRot * rotSpeed * 0.8 + subtleDrift;

  // Subtle eye breathing
  const eyeBreath = 1 + Math.sin(elapsed * 0.2) * 0.03;
  const dist = p.r * ringScale * eyeBreath;

  const x = cx + Math.cos(currentAngle) * dist;
  const y = cy + Math.sin(currentAngle) * dist;

  // Spaghettification: stretch increases toward center
  const stretch = 1.5 + (1 - rNorm) * 2.5;  // 1.5 at edge → 4.0 at center
  const size = p.size * (minDim / 800) * (0.8 + Math.sin(elapsed * 0.4 + p.phase) * 0.2);

  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(currentAngle + Math.PI / 2);  // Tangential alignment

  const alpha = Math.min(1, (1 - rNorm * 0.7) * 0.7 * intensity);
  ctx.globalAlpha = alpha;

  ctx.scale(1, stretch);
  ctx.drawImage(p.sprite, -size/2, -size/2, size, size);
  ctx.restore();
}
```

### Accretion Disk Key Physics

#### 1. Keplerian Differential Rotation
```javascript
rotSpeed = p.speed * (1 + (1 - rNorm) * 2.5)
```
Inner particles (rNorm→0): speed × 3.5 — very fast orbiting
Outer particles (rNorm→1): speed × 1.0 — normal speed

This creates visible differential rotation where the inner accretion disk spins
faster than the outer edge, true to real black hole physics.

#### 2. Spaghettification
```javascript
stretch = 1.5 + (1 - rNorm) * 2.5
```
At center (rNorm=0): stretch = 4.0 — extremely elongated
At edge (rNorm=1): stretch = 1.5 — mildly stretched

This simulates tidal stretching near the event horizon — matter gets pulled into
elongated streams as it falls inward.

#### 3. Brightness vs Distance
```javascript
alpha = (1 - rNorm * 0.7) * 0.7 * intensity
```
At center: alpha = 0.7 × intensity — bright
At edge: alpha = 0.21 × intensity — dim

This creates a natural brightness gradient where the inner accretion disk is
hottest/brightest.

#### 4. Eye Breathing
```javascript
eyeBreath = 1 + Math.sin(elapsed * 0.2) * 0.03
```
The entire accretion disk radius slowly pulses ±3% at 0.2 rad/sec (31-second cycle).
This subtle but important animation makes the "eye" feel alive.

### Current Metal Accretion vs React

| Aspect                  | React                        | Metal (Current)             |
|-------------------------|------------------------------|-----------------------------|
| Particle count          | **160**                      | **60** — 2.67× fewer        |
| Radius distribution     | pow(random, 1.8) × 0.20     | pow(random, 1.8) × 0.20 ✓  |
| Inner radius            | 0.13                         | 0.13 ✓                      |
| Keplerian speed         | speed × (1 + (1-rNorm)*2.5) | speed × (1 + (1-rNorm)*2.5) ✓|
| Spaghettification       | 1.5 + (1-rNorm)*2.5         | 1.5 + (1-rNorm)*2.5 ✓       |
| Eye breathing           | ±3% at 0.2 rad/sec          | ✓                            |
| Brightness gradient     | (1-rNorm*0.7) × 0.7         | (1-rNorm*0.7) × 0.7 ✓       |
| Size pulsing            | ±20% at 0.4 rad/sec         | ✓                            |
| Colors                  | White/bluewhite/lavender     | White/bluewhite/lavender ✓   |

**PRIMARY ISSUE**: 60 particles vs 160. The accretion disk needs to appear as a
continuous, swirling white-lavender band. With only 60 particles, it shows gaps
and doesn't create the dense "sclera" effect of the cosmic eye.

---

## 9. Layer 5: Dust Particles (15)

### React Implementation

```javascript
const dustParticles = useMemo(() => {
  const d = [];
  for (let i = 0; i < 15; i++) {
    d.push({
      angle: (i / 15) * Math.PI * 2 + Math.random(),
      r: 0.35 + (Math.random() - 0.5) * 0.1,    // Around ring radius ±0.05
      size: 50 + Math.random() * 40,               // 50-90 px
      opacity: 0.1 + Math.random() * 0.1           // 0.1-0.2
    });
  }
  return d;
}, []);
```

### Dust Rendering

```javascript
// Dust uses dark sprite with source-over — creates darkening
const dustSprite = /* 128px dark radial: rgba(6,3,16,0.6) center → transparent */

for (let i = 0; i < dustParticles.length; i++) {
  const d = dustParticles[i];
  const a = d.angle + subtleDrift;  // Only galaxy drift, no ring rotation
  const dist = d.r * ringScale;
  const x = cx + Math.cos(a) * dist;
  const y = cy + Math.sin(a) * dist;
  const s = d.size * (minDim / 800) * 1.5;
  
  ctx.globalAlpha = d.opacity * intensity;
  ctx.drawImage(dustSprite, x - s, y - s, s * 2, s * 2);
}
```

### Key Dust Observations

1. **Purpose**: Dark patches within the ring that break up the uniform brightness.
   Without dust, the ring looks like a smooth, evenly-lit circle. With dust, there
   are darker patches that create visual complexity — like dark nebulae in the
   Milky Way.

2. **Very slow movement**: Dust only moves with `subtleDrift` (0.0007 rad/sec),
   NOT with `globalRot`. This means dust moves ~6× slower than the gas ring,
   creating a parallax effect.

3. **Sprite**: 128×128 canvas, dark pixel (rgb(6,3,16) — near-black purple) with
   0.6 alpha at center, radial gradient to transparent. This gets painted using
   source-over which darkens whatever is behind it.

### Current Metal Dust

```metal
float3 dustColor = rgb(6, 3, 16);
for (int i = 0; i < 15; i++) {
    float fi = float(i);
    float dAngle = fi / 15.0 * 6.2831853 + seededRandom(91, i * 4) * 1.0;
    dAngle += subtleDrift;
    float dR = 0.35 + (seededRandom(91, i * 4 + 1) - 0.5) * 0.1;
    float dSize = (50.0 + seededRandom(91, i * 4 + 2) * 40.0) / 1170.0;
    float dOpacity = 0.1 + seededRandom(91, i * 4 + 3) * 0.1;
    
    float2 dPos = float2(0.5 + cos(dAngle) * dR, 0.5 + sin(dAngle) * dR);
    float dd = length(uv - dPos) / (dSize * 1.5);
    
    if (dd < 1.0) {
        float dustAlpha = (1.0 - dd) * 0.6 * dOpacity * u.intensity;
        col = multiplyBlend(col, dustColor, dustAlpha);
    }
}
```

**Assessment**: ✅ Good match. The Metal implementation correctly:
- Uses 15 particles at ring radius ±0.05
- Uses multiply blend (darkening effect)
- Has similar opacity range and size
- Only moves with subtleDrift (not ring rotation)

The main difference is Metal uses `multiplyBlend` while React uses source-over with
a dark sprite. Both create darkening. Metal's multiply blend is actually a more
correct approach since it darkens proportionally to existing brightness.

---

## 10. Layer 6: Drifting Motes

### React Implementation

```javascript
const moteParticles = useMemo(() => {
  const m = [];
  const count = 3 + Math.floor(Math.random() * 3); // 3 to 5
  for (let i = 0; i < count; i++) {
    m.push({
      bx: Math.random(),
      by: Math.random(),
      vx: (Math.random() - 0.5) * 0.08,
      vy: (Math.random() - 0.5) * 0.08,
      size: 1.5 + Math.random() * 2.5,
      opacity: 0.03 + Math.random() * 0.06,
      phase: Math.random() * Math.PI * 2
    });
  }
  return m;
}, []);
```

### Mote Rendering

```javascript
ctx.fillStyle = 'rgba(210, 225, 255, 0.8)';
for (let i = 0; i < moteParticles.length; i++) {
  const m = moteParticles[i];
  let x = (m.bx + m.vx * elapsed * 0.1) % 1.0;
  let y = (m.by + m.vy * elapsed * 0.1) % 1.0;
  if (x < 0) x += 1;
  if (y < 0) y += 1;
  
  const pulse = 0.7 + Math.sin(elapsed * 0.5 + m.phase) * 0.3;
  ctx.globalAlpha = m.opacity * 1.5 * pulse * intensity;
  ctx.beginPath();
  ctx.arc(px, py, m.size * (minDim / 1000), 0, Math.PI * 2);
  ctx.fill();
}
```

### Key Mote Observations

1. **Tiny bright dots** — blue-white color (210, 225, 255), between 1.5-4px
2. **Extremely faint** — opacity 0.03-0.06 × 1.5 × pulse = ~0.06 final
3. **Slow drift** — velocity 0.08 × 0.1 = 0.008 viewports/sec
4. **Wrapping** — motes wrap around screen edges using modulo
5. **Pulse** — opacity oscillates 70%-130% at 0.5 rad/sec

### Current Metal Implementation

Metal uses 4 fixed motes with similar parameters. ✅ Close enough — motes are
extremely subtle and contribute minimally to the overall look.

---

## 11. Layer 7: Natural Nebula Clouds

### React Implementation (CSS Divs with blur)

```html
<div className="absolute inset-0 opacity-70 mix-blend-screen overflow-hidden">
  <!-- Violet cloud - upper left -->
  <div style={{
    background: 'radial-gradient(ellipse at center,
      rgba(140, 100, 220, 0.15) 0%,
      rgba(110, 70, 180, 0.05) 50%,
      transparent 70%)',
    filter: 'blur(60px)',
    borderRadius: '40% 60% 70% 30% / 50% 60% 40% 50%',
    opacity: 0.7,
    width: '80vw', height: '70vw',
    left: '-10%', top: '-10%'
  }} />
  
  <!-- Magenta cloud - right side -->
  <div style={{
    background: 'radial-gradient(ellipse at center,
      rgba(180, 80, 200, 0.12) 0%,
      rgba(150, 60, 170, 0.04) 50%,
      transparent 70%)',
    filter: 'blur(65px)',
    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
    opacity: 0.6,
    width: '70vw', height: '80vw',
    right: '-15%', top: '10%'
  }} />
  
  <!-- Blue-violet wisps - bottom -->
  <div style={{
    background: 'radial-gradient(ellipse at center,
      rgba(100, 120, 200, 0.10) 0%,
      rgba(80, 100, 170, 0.03) 50%,
      transparent 70%)',
    filter: 'blur(55px)',
    opacity: 0.5,
    width: '90vw', height: '60vw',
    left: '5%', bottom: '-15%'
  }} />
  
  <!-- Cyan accent - lower left -->
  <div style={{
    background: 'radial-gradient(ellipse at center,
      rgba(80, 160, 220, 0.08) 0%,
      transparent 70%)',
    filter: 'blur(50px)',
    opacity: 0.4,
    width: '60vw', height: '50vw',
    left: '-5%', bottom: '10%'
  }} />
</div>
```

### Key Nebula Cloud Observations

These 4 CSS cloud divs create **asymmetric depth** that breaks the radial symmetry
of the ring galaxy, adding visual interest and the impression of a vast nebular
environment surrounding the galaxy.

1. **Blur**: 50-65px CSS filter blur. This creates extremely soft, atmospheric
   gradients. In Metal, the `cubed falloff` (nv³) approximation is a reasonable
   substitute for blur.

2. **Organic shapes**: The CSS `borderRadius` values create irregular, organic
   shapes (not circles). In Metal, this is approximated by `sin(angle * N)` boundary
   deformation.

3. **Opacity layers**: 0.4–0.7 wrapper opacity × 0.08–0.15 gradient alpha × screen
   blend creates very subtle tinting. Final visible alpha might be as low as 0.03.

4. **Positioning**: Clouds extend off-screen (negative margins) so only the soft
   inner portions are visible. This avoids visible edges.

### Current Metal Implementation

```metal
// Violet zone — upper-left, organic blob
float3 nebViolet = rgb(140, 100, 220);
float2 vOff = uv - float2(0.35, 0.40);
float vAngle = atan2(vOff.y, vOff.x);
float vR = length(vOff / float2(0.22, 0.19));
vR += sin(vAngle * 3.0 + 1.2) * 0.1 + sin(vAngle * 5.0 - 0.8) * 0.05;
float nv = 1.0 - smoothstep(0.0, 1.0, vR);
nv = nv * nv * nv;  // soft falloff (blur approximation)
col = screenBlend(col, nebViolet, nv * 0.07 * u.intensity);
```

**Assessment**: ✅ Good approximation. The elliptical coordinate + sin(angle) boundary
deformation + cubed falloff creates a similar visual effect to React's blurred organic
divs. The key improvement would be slightly increasing the opacity multipliers to
match React's more visible clouds.

---

## 12. Layer 8: Microstars (2500 Canvas Sprites)

### React Star Generation System

The microstar system is the most complex part of the React implementation. It generates
2500 stars using a TypedArray-based particle system with 3 sprite types.

#### Spatial Distribution

```javascript
// Zone selection via random roll
if (zr < 0.04) {
  // CORE (4%): Beta distribution, r < 0.1
  r = rand(3) * rand(4) * 0.1;  // Product of 2 randoms → concentrated near 0
} else if (zr < 0.62) {
  // RING (58%): Annular 0.24..0.52 with inner/outer bias
  const bias = zr < 0.42 ? 0.3 : 0.8;
  r = ringInner + (ringOuter - ringInner) * (rand(3) * 0.4 + bias * 0.6);
} else if (zr < 0.82) {
  // HALO (20%): Beyond ring 0.52..0.75
  r = ringOuter + rand(3) * 0.23;
} else {
  // FIELD (18%): Uniform random
  x = rand(2); y = rand(3);
}
```

This creates the characteristic "Hoag's Object" distribution:
- Dense ring of stars at ring radius
- Sparse center with just a few core stars
- Scattered halo beyond the ring
- Uniform field background

#### Star Type Distribution

```
sr > 0.985 → Massive Super-Giants (1.5%), size 2.5, type=hero
sr > 0.95  → Large Bright Stars (3.5%), size 1.5, type=hero
sr > 0.85  → Medium normal (10%), size 1.0, type=normal
sr > 0.65  → Mid-Size Halo (20%), size 1.5, type=halo
sr ≤ 0.65  → Small normal (65%), size 0.5, type=normal
```

#### Three Sprite Types

**Normal**: Standard star with atmospheric halo + photosphere
- Halo: 4× size, 0.1 alpha radial
- Aura: 2.5× size, 0.2 alpha screen-blend
- Photosphere: 0.9× size with hot white core

**Hero**: Massive "James Webb" style with diffraction spikes
- Deep halo: 8× size, 0.22 alpha
- Inner aura: 4× size, 0.45 alpha screen-blend
- Photosphere: 0.9× size with overexposed white
- Lens bloom ring: 2.8× size, 12% alpha stroke
- Horizontal anamorphic flare: 16× size! — sharp & long
- Vertical flare: 10× size — slightly shorter
- Diagonal X glow: 5× size, soft

**Halo (Spiral style)**: Soft nebular appearance
- Atmospheric diffusion: 6× size, 0.15 alpha
- Soft glow: 3.5× size, 0.4 alpha
- Soft core: 1.2× size, 0.9 white center

### Star Animation (Twinkle & Breathing)

```javascript
// Hero stars: Complex organic breathing
const wave1 = Math.sin(t * 0.3 + offset);           // ~21s cycle
const wave2 = Math.sin(t * 1.1 + offset * 2) * 0.3; // ~5.7s harmonic
twinkle = 0.5 + 0.5 * ((wave1 + wave2) / 1.3);      // Normalized 0-1

// Halo stars: Gentle pulsing
twinkle = 0.6 + 0.4 * Math.sin(t * 0.5 + offset);   // ~12.6s cycle

// Normal: Standard twinkle
twinkle = (Math.sin(phase * speed + offset) + 1) * 0.5;

// Hero alpha: 0.9 + 0.3 * twinkle → 0.9-1.2 range
// Halo alpha: 0.7 + 0.4 * twinkle → 0.7-1.1 range
// Normal alpha: 0.4 + 0.6 * twinkle → 0.4-1.0 range

// SIZE DYNAMICS — the "Breathing" effect
const breatheRange = isHero ? 0.35 : (isHalo ? 0.15 : 0.06);
const breathe = 1 + (breatheEase - 0.5) * breatheRange;
// Hero: 0.825–1.175 scale
// Halo: 0.925–1.075 scale
// Normal: 0.97–1.03 scale

// HERO ROTATION — ultra-slow roll
const rot = elapsed * 0.015 * dir + offset;  // ~420s full rotation
```

### Star Motion Types

```javascript
if (isOrbital) {
  // Core/Ring/Halo stars orbit the center
  const angle = baseAngle + elapsed * orbitalSpeed + elapsed * 0.0007;
  const r = baseRadius * minDim * 0.5 * (1 + Math.sin(elapsed * 0.2 + i) * 0.01);
  x = cx + Math.cos(angle) * r;
  y = cy + Math.sin(angle) * r;
  x += driftX * baseRadius;  // Parallax
} else {
  // Field stars drift slowly
  x = ox * width + driftX * 0.2 + dx * elapsed * 10;
  y = oy * height + driftY * 0.2 + dy * elapsed * 10;
  // Wrap at edges
}
```

### Current Metal Star System

The Metal star system uses 1800 instanced quads rendered by `StarburstStars.metal`.
Stars have 5 motion classes based on z-depth and are generally well-implemented.
The star system is separate from the background fragment shader and is NOT being
rewritten — only the background shader needs reconstruction.

---

## 13. Layer 9: Vignette Overlay

### React Implementation

```css
background: radial-gradient(
  ellipse 90% 80% at 50% 50%,
  transparent 40%,
  rgba(0, 0, 0, 0.6) 100%
);
```

A wide elliptical vignette that's transparent in the center 40% and darkens to
60% black at the edges. The ellipse is 90% wide × 80% tall — wider than tall to
match typical landscape/portrait screens.

### Current Metal: No Explicit Vignette

The current shader doesn't have an explicit vignette pass. However, the void
gradient already creates natural darkening at edges. The vignette could be added
as a final pass:

```metal
// Vignette
float2 vigUV = (uv - 0.5) * float2(1.0/0.9, 1.0/0.8); // Elliptical
float vigDist = length(vigUV);
float vignette = smoothstep(0.4, 1.0, vigDist) * 0.6;
col *= (1.0 - vignette);
```

---

## 14. Sprite System Deep-Dive

### Why React Uses Sprites

React's canvas API doesn't have built-in radial gradient shapes. Instead of drawing
gradients on every frame, it pre-renders each unique star/gas appearance onto small
offscreen canvases (sprites). During animation, `drawImage()` blits these sprites
which is GPU-accelerated on modern browsers.

### Metal Translation: Analytical Equivalents

In Metal, we don't need sprites — we can compute the exact radial gradient analytically
per pixel. This is actually MORE flexible since we can:

1. Evaluate at arbitrary resolution (no pixelation)
2. Avoid texture sampling overhead
3. Combine effects without intermediate buffers

The key is making sure our analytical functions match the VISUAL RESULT of the
React sprites, not just the gradient stops. Canvas sprites have:
- Anti-aliased edges (subpixel rendering)
- Canvas-specific alpha compositing behavior
- Pre-multiplied alpha in some browsers

Our Metal analytical approach should produce equivalent or better results since
we evaluate per-pixel at full resolution.

---

## 15. Animation Timing & Motion Constants

### Global Time Scaling

```javascript
// React
const elapsed = (t - startT) / 1000 * speed;
// Metal
float t = u.time * u.speed * 0.3;  // Additional 0.3 factor in current Metal
```

**IMPORTANT**: The current Metal shader multiplies speed by 0.3 which makes everything
~3× slower than React at the same speed setting. This needs to be considered when
matching animation timing.

### Animation Frequencies Reference

| Element             | React Frequency | React Period | Metal Factor |
|---------------------|-----------------|--------------|--------------|
| Ring rotation        | 0.004 rad/s    | 26 min       | 0.004 × 0.3 = 0.0012 |
| Galaxy drift         | 0.0007 rad/s   | 150 min      | 0.0007 × 0.3 |
| Gas pulse wave 1     | angle*3 @ 0.2  | ~31s          | ✓            |
| Gas pulse wave 2     | angle*6 @ 0.15 | ~42s          | ✓            |
| Gas pulse wave 3     | angle*10 @ 0.4 | ~16s          | ✓            |
| Deep breath           | 0.8 rad/s      | 7.9s          | ✓            |
| Wobble speed          | 0.25-0.75      | 8-25s         | ✓            |
| Accretion orbit       | Keplerian      | varies        | ✓            |
| Eye breathing         | 0.2 rad/s      | 31s           | ✓            |
| Core glow pulse       | Not animated   | Static        | Static ✓     |
| Star hero breathing   | 0.3 rad/s      | 21s           | In stars     |
| Star halo pulse       | 0.5 rad/s      | 12.6s         | In stars     |

---

## 16. Gas Particle Sprite Rendering

### The Gas Sprite Gradient Profile

The gas sprite is the fundamental visual unit of the ring. Every gas particle is
rendered as a stretched, rotated instance of this sprite:

```
Radius (d):  0.00    0.25    0.60    1.00
     Alpha:  0.25    0.12    0.03    0.00
     Color:  R+30    R       R       R
             G+30    G       G       G
             B+30    B       B       B
```

Where `d` is normalized distance from particle center (0=center, 1=edge).

### Metal Analytical Equivalent

```metal
// Current Metal 4-stop gradient
if (d < 0.25) {
    plasmaColor = mix(hotCenter, gasColor, d / 0.25);
    plasmaAlpha = mix(0.25, 0.12, d / 0.25);
} else if (d < 0.6) {
    plasmaColor = gasColor;
    plasmaAlpha = mix(0.12, 0.03, (d - 0.25) / 0.35);
} else {
    plasmaColor = gasColor;
    plasmaAlpha = mix(0.03, 0.0, (d - 0.6) / 0.4);
}
```

This is a correct analytical match to the React canvas gradient. The `hotCenter` is
computed as `min(gasColor + 0.12, 1.0)` which matches React's `Math.min(255, r+30)/255`.

### Sprite → Per-Pixel Conversion

In React, the sprite is 64×64 pixels. In Metal, we evaluate the same gradient
analytically at the exact pixel position. Key differences:

1. **No pixelation**: Metal evaluates at sub-pixel precision
2. **No edge aliasing**: Smooth analytical falloff vs sprite edge aliasing
3. **Better precision**: float vs 8-bit alpha in canvas sprite

The Metal approach should produce a smoother, higher-quality result.

---

## 17. Accretion Disk Physics

### Keplerian Orbit Model

Real accretion disks follow Kepler's third law: orbital velocity ∝ r^(-0.5).
React approximates this with:

```javascript
rotSpeed = baseSpeed * (1 + (1 - rNorm) * 2.5)
```

Where rNorm is normalized radius (0=horizon, 1=outer edge). This gives:
- At horizon: speed × 3.5
- At outer edge: speed × 1.0

True Keplerian would use `1/sqrt(rNorm)` but the linear approximation creates a
similar visual effect of differential rotation without the singularity at r=0.

### Spaghettification Model

```javascript
stretch = 1.5 + (1 - rNorm) * 2.5
```

This creates an increasingly extreme tangential stretch as matter approaches the
event horizon. Combined with canvas rotate+scale, each accretion particle becomes
more elongated the closer it orbits to the center.

Visual effect: The inner accretion disk appears as thin, bright streaks while the
outer region has rounder blobs. This creates the characteristic "swirling" look of
matter falling into a black hole.

### Current Metal Implementation

The Metal accretion disk correctly implements Keplerian speed and spaghettification
with matching formulas. The primary gap is particle count (60 vs 160).

---

## 18. Microstar Canvas System

### React's Optimized Rendering Pipeline

```
Generation:      Animation:
┌─────────┐      ┌──────────────┐
│ useMemo │───►  │ Float32Array │  ← 14 floats per star
│ (once)  │      │ 2500 × 14    │
└─────────┘      └──────┬───────┘
                         │
                 ┌───────▼────────┐
                 │ spriteCatalog  │  ← Unique sprite canvases
                 │ deduplication  │     (~30 unique, cached)
                 └───────┬────────┘
                         │
                 ┌───────▼────────┐
                 │ Animation Loop │  ← requestAnimationFrame
                 │ (per star):    │
                 │  - Orbital calc │
                 │  - Twinkle      │
                 │  - drawImage    │
                 └────────────────┘
```

### Metal Translation

The Metal star system uses instanced rendering via `StarburstStars.metal` and
`StarFieldGenerator.swift`. This is already a fundamentally different architecture
(GPU instancing vs CPU canvas iteration) and is **NOT being rewritten** — the
star shader is separate from the background shader.

Key Metal star features already implemented:
- 1800 stars (vs React's 2500) in 4+1 spatial zones
- 5 motion classes by z-depth
- Twinkle + size pulse animation
- Zone tinting for ring/core stars

---

## 19. React vs Current Metal Gap Analysis

### Summary of All Gaps

```
╔═══════════════════════════════════════════════════════════════╗
║ CRITICAL GAPS (directly impact visual identity)              ║
╠═══════════════════════════════════════════════════════════════╣
║ 1. Ring gas: 80 particles vs 200 — ring appears sparse      ║
║ 2. Accretion: 60 particles vs 160 — eye interior is empty   ║
║ 3. Compositing: per-particle screen vs accumulated screen   ║
║ 4. Event horizon: 8% vs 11% — pupil too small               ║
║ 5. Gas particle sizes: possibly too small after UV normalize ║
╠═══════════════════════════════════════════════════════════════╣
║ MODERATE GAPS (affect richness/atmosphere)                   ║
╠═══════════════════════════════════════════════════════════════╣
║ 6. Ring FBM should complement particles not replace them     ║
║ 7. Nebula cloud opacity could be slightly higher             ║
║ 8. Missing explicit vignette                                 ║
║ 9. Core glow could be slightly more prominent                ║
╠═══════════════════════════════════════════════════════════════╣
║ MINOR GAPS (nice-to-have refinements)                        ║
╠═══════════════════════════════════════════════════════════════╣
║ 10. Star hero diffraction spikes (handled in star shader)    ║
║ 11. Mote count (3-5 vs 4 fixed) — minimal visual impact     ║
║ 12. Time scaling factor (0.3×)                               ║
╚═══════════════════════════════════════════════════════════════╝
```

### Root Cause Analysis

The primary visual discrepancy between React and Metal is **particle density**.
React uses 200 ring gas + 160 accretion = **360 total particles** in the ring/disk
area. Metal uses 80 + 60 = **140 total particles** — only 39% of React's count.

With each particle being very translucent (alpha 0.05-0.25), the visual effect is
primarily driven by **overlap accumulation**. More particles = more overlaps = 
brighter, denser, more "liquid light" ring.

The solution is to increase particle counts to match React. Since Metal evaluates
analytically (no texture fetches), the per-pixel cost is dominated by the loop body
which is mostly math operations. Modern GPUs (A12+) can handle 200+ particles
per pixel at 60fps.

---

## 20. Metal Shader Rewrite Plan

### Strategy: Full Rewrite

The current `StarburstRingPreset.metal` has the right structure but needs:

1. **Increased particle counts** via larger CPU-generated buffers
2. **Accumulated compositing** for gas ring
3. **Corrected void gradient** matching React's 6-stop CSS gradient
4. **Added explicit vignette** pass
5. **Tuned nebula cloud opacities**
6. **Enhanced core glow / inner halo** luminosity
7. **Gas particle rendering improvements** for denser, more luminous ring

### Rewrite Architecture

```metal
fragment float4 starburstBgFragment(...) {
    // 1. Void gradient (6-stop radial matching CSS)
    // 2. Event horizon (11% hard black)
    // 3. Atmospheric wash (screen blend, violet radial)
    // 4. Core glow + inner halo (screen blend, gaussian)
    // 5. Ring gas structure (200 particles, accumulated → screen blend)
    // 6. Accretion disk (160 particles, accumulated → screen blend)
    // 7. Dust particles (15, multiply blend)
    // 8. Motes (4, additive blend)
    // 9. Nebula clouds (4 zones, enhanced opacity)
    // 10. Ring FBM detail (warped FBM, ring-masked)
    // 11. Vignette (elliptical darken)
}
```

### Buffer Changes Required

Current buffers:
```
buffer(1): GasCloudData[80]  — ring gas
buffer(2): GasCloudData[60]  — accretion
```

New buffers needed:
```
buffer(1): GasCloudData[200] — ring gas (increased)
buffer(2): GasCloudData[160] — accretion (increased)
```

This requires changes in:
1. `StarFieldGenerator.swift` → `starburstRingGasClouds()` — generate 200 particles
2. `StarFieldGenerator.swift` → `starburstAccretionClouds()` — generate 160 particles
3. Shader loop bounds: `i < 200` and `i < 160`

### Compositing Change

Replace per-particle screen blend for ring gas with:

```metal
float3 ringAccum = float3(0.0);
for (int i = 0; i < 200; i++) {
    // ... compute particle contribution ...
    // Source-over accumulation (mimics React canvas)
    ringAccum = ringAccum * (1.0 - alpha) + plasmaColor * alpha;
}
// THEN screen blend the accumulated result
col = screenBlend(col, ringAccum, 1.0);
```

This better matches React's architecture where gas particles composite with
source-over within the canvas, then the canvas screens against the background.

---

## 21. Performance Budget

### Per-Pixel Cost Estimate (Rewritten Shader)

```
Operation                          | Approx. Cost (ALU ops)
─────────────────────────────────────────────────────────
Void gradient (6-stop)             |    15
Event horizon                      |     5
Atmospheric wash                   |    10
Core glow + inner halo             |    15
Ring gas (200 particles × ~50 ops) | 10000  (with early-exit ~3000)
Accretion disk (160 × ~45 ops)     |  7200  (with early-exit ~2000)
Dust (15 × ~20 ops)                |   300
Motes (4 × ~15 ops)                |    60
Nebula clouds (4 zones × ~20 ops)  |    80
Ring FBM (4 octaves × ~100 ops)    |   400  (masked, ~50 avg)
Vignette                           |     8
─────────────────────────────────────────────────────────
Total (worst case)                 | ~18000 ops
Total (average with early-exit)    | ~6000 ops
```

### GPU Budget Assessment

| GPU     | ALU/cycle | Target FPS | Budget/pixel | Feasible? |
|---------|-----------|------------|--------------|-----------|
| A14+    | ~2048     | 60         | ~34K ops     | ✅ Yes    |
| A12-A13 | ~1024     | 60         | ~17K ops     | ✅ Tight  |
| A11     | ~512      | 30         | ~17K ops     | ✅ At 30  |

The early-exit optimization for particles (skip if distance > particle size) will
keep average cost well within budget for all modern Apple GPUs. Most pixels only
intersect 2-5 particles, not all 200+160.

### Early-Exit Strategy

```metal
// Skip particle if pixel is clearly outside its influence radius
float2 toPixel = uv - pPos;
float quickDist = abs(toPixel.x) + abs(toPixel.y); // Manhattan distance (cheaper than length)
if (quickDist > pSize * 3.5) continue; // Skip if clearly outside
```

Using Manhattan distance as a quick pre-filter avoids the sqrt in `length()` for
most particles that are far from the current pixel.

---

## Appendix A: Full Color Tables

### Ring Gas Particle Colors (Metal float3)

```metal
// 5 ring gas colors (20% each from React)
float3 ringColors[5] = {
    rgb(125,  44, 255),  // violetGas   — vivid violet
    rgb(208,  75, 255),  // magentaGas  — hot magenta
    rgb( 75, 216, 255),  // neonBlue    — electric cyan
    rgb(154,  86, 255),  // innerHalo   — deep violet
    rgb(217, 196, 255),  // coreGlow    — warm lavender
};
```

### Accretion Disk Colors (Metal float3)

```metal
// 3 accretion colors (33% each from React)
float3 accretionColors[3] = {
    float3(1.0, 1.0, 1.0),              // Pure white — hottest
    rgb(200, 230, 255),                   // Blue-white — cooling
    rgb(230, 210, 255),                   // Lavender — intermediate
};
```

### Star Color Palette (React 10-color weighted system)

```metal
// Cumulative weights: 0.40, 0.55, 0.67, 0.75, 0.81, 0.87, 0.92, 0.96, 0.98, 1.00
float3 starColors[10] = {
    float3(1.000, 1.000, 1.000),  // 40% — pure white
    rgb(220, 235, 255),            //  15% — blue-white
    rgb(255, 248, 240),            //  12% — warm-white
    rgb(200, 180, 255),            //   8% — soft-violet
    rgb(255, 220, 240),            //   6% — pink
    rgb(255, 245, 220),            //   6% — warm
    rgb(180, 220, 255),            //   5% — cool-blue
    rgb(255, 200, 220),            //   4% — rose
    rgb(200, 255, 245),            //   2% — teal
    rgb(255, 190, 210),            //   2% — deep-pink
};
```

### Nebula Cloud Colors

```metal
float3 nebViolet  = rgb(140, 100, 220);  // opacity: 0.07 × intensity
float3 nebMagenta = rgb(180,  80, 200);  // opacity: 0.05 × intensity
float3 nebBlueV   = rgb(100, 120, 200);  // opacity: 0.04 × intensity
float3 nebCyan    = rgb( 80, 160, 220);  // opacity: 0.035 × intensity
```

### Dust Color

```metal
float3 dustColor = rgb(6, 3, 16);  // Near-black purple — for multiply darkening
```

---

## Appendix B: Sprite Gradient Specifications

### Gas Sprite (getGasSprite)

| Stop | Radius | Color                    | Alpha |
|------|--------|--------------------------|-------|
| 0    | 0.00   | (R+30, G+30, B+30)      | 0.25  |
| 1    | 0.25   | (R, G, B)               | 0.12  |
| 2    | 0.60   | (R, G, B)               | 0.03  |
| 3    | 1.00   | (R, G, B)               | 0.00  |

Rendered at 64×64px. Canvas size = size × 2.

### Normal Star Sprite

| Layer            | Radius   | Max Alpha | Blend Mode  |
|------------------|----------|-----------|-------------|
| Atmospheric Halo | 4× size  | 0.10      | source-over |
| Inner Aura       | 2.5× size| 0.20      | screen      |
| Photosphere      | 0.9× size| 0.92 white| source-over |

### Hero Star Sprite

| Layer              | Radius    | Max Alpha | Blend Mode  |
|--------------------|-----------|-----------|-------------|
| Deep Halo          | 8× size   | 0.22      | source-over |
| Inner Aura         | 4× size   | 0.45      | screen      |
| Photosphere        | 0.9× size | 0.92 white| source-over |
| Lens Bloom Ring    | 2.8× size | 0.12 stroke| screen     |
| Horizontal Flare   | 16× size  | 0.85      | screen      |
| Vertical Flare     | 10× size  | 0.60      | screen      |
| Diagonal X Glow ×2 | 5× size  | 0.25      | screen      |

### Halo Star Sprite

| Layer              | Radius    | Max Alpha | Blend Mode  |
|--------------------|-----------|-----------|-------------|
| Wide Diffusion     | 6× size   | 0.15      | source-over |
| Soft Glow          | 3.5× size | 0.40      | screen      |
| Soft Core          | 1.2× size | 0.90 white| source-over |

---

## Appendix C: Animation Timing Reference

### All Animation Frequencies (React values, using `elapsed * speed`)

| Animation                    | Frequency (rad/s) | Period    | Phase Source          |
|------------------------------|--------------------|-----------|----------------------|
| Ring rotation (globalRot)     | 0.004             | 26.2 min  | Fixed                |
| Galaxy drift (subtleDrift)    | 0.0007            | 149.6 min | Fixed                |
| Gas wave 1                    | 0.2               | 31.4 s    | angle × 3            |
| Gas wave 2                    | -0.15             | 41.9 s    | angle × 6            |
| Gas wave 3                    | 0.4               | 15.7 s    | angle × 10           |
| Deep breath                  | 0.8               | 7.9 s     | pulseOffset           |
| Wobble pulse                 | 0.25-0.75         | 8.4-25.1s | pulseOffset           |
| Eye breathing                | 0.2               | 31.4 s    | Fixed (sin phase)     |
| Accretion size               | 0.4               | 15.7 s    | phase                 |
| Mote pulse                   | 0.5               | 12.6 s    | phase                 |
| Mote drift                   | 0.008 viewports/s | ~125 s    | Linear                |
| Hero star wave 1             | 0.3               | 20.9 s    | twinkleOffset         |
| Hero star wave 2             | 1.1               | 5.7 s     | twinkleOffset × 2    |
| Halo star pulse              | 0.5               | 12.6 s    | twinkleOffset         |
| Star radius breathe          | 0.2               | 31.4 s    | per-star + i          |
| Hero rotation                | 0.015             | 418.9 s   | twinkleOffset         |
| Camera drift X               | 0.05              | 125.7 s   | Fixed                |
| Camera drift Y               | 0.04              | 157.1 s   | Fixed                |

---

## Appendix D: Buffer Layout Reference

### GasCloudData Struct (64 bytes, 16 floats)

```c
struct GasCloudData {
    float basePosX;     // Ring gas: radius from center. Accretion: radius.
    float basePosY;     // Unused for ring (=0)
    float depth;        // Ring gas: wobbleSpeed. Accretion: rNorm.
    float sizePx;       // Size in reference pixels (for ring gas)
    float colorR;       // RGB color components
    float colorG;
    float colorB;
    float baseAlpha;    // Base opacity (0.03 for ring, 0.025 for accretion)
    float phase;        // Starting angle (radians)
    float flowFreq;     // Ring gas: stretch factor (1.5-3.0). Accretion: orbSpeed.
    float flowBaseMul;  // Unused for starburst (=0)
    float pulseFreq;    // Ring gas: 0.8. Accretion: unused.
    float pulsePhase;   // Animation pulse phase
    float spiralDist;   // Unused for starburst (=0)
    float spiralTheta;  // Unused for starburst (=0)
    float _pad0;        // Alignment padding
};
```

### Ring Gas Buffer Fields (buffer 1, N=200)

| Field        | Ring Gas Usage                                    |
|--------------|--------------------------------------------------|
| basePosX     | Particle radius from center (~0.26-0.44)         |
| basePosY     | Unused (0)                                        |
| depth        | Wobble speed (0.5-1.5)                           |
| sizePx       | Sprite size in reference pixels (35-94 px)        |
| colorR/G/B   | One of 5 palette colors                          |
| baseAlpha    | 0.03 (base, multiplied by gradients)             |
| phase        | Starting angle + even distribution + jitter       |
| flowFreq     | Tangential stretch factor (1.5-3.0)              |
| flowBaseMul  | Unused (0)                                        |
| pulseFreq    | 0.8 (deep breath frequency)                      |
| pulsePhase   | Random phase offset for pulse animation           |
| spiralDist   | Unused (0)                                        |
| spiralTheta  | Unused (0)                                        |

### Accretion Buffer Fields (buffer 2, N=160)

| Field        | Accretion Usage                                   |
|--------------|--------------------------------------------------|
| basePosX     | Particle radius (0.13-0.33)                      |
| basePosY     | Unused (0)                                        |
| depth        | Normalized radius rNorm (0=horizon, 1=outer)     |
| sizePx       | Size in reference pixels (12-30 px)               |
| colorR/G/B   | One of 3 colors (white/blue-white/lavender)       |
| baseAlpha    | 0.025                                             |
| phase        | Starting angle                                    |
| flowFreq     | Keplerian orbital speed (pre-computed)            |
| flowBaseMul  | Unused (0)                                        |
| pulseFreq    | Unused (0)                                        |
| pulsePhase   | Animation phase offset                            |
| spiralDist   | Unused (0)                                        |
| spiralTheta  | Unused (0)                                        |

### CosmicUniforms (buffer 0, 24 bytes)

```c
struct CosmicUniforms {
    float time;           // Elapsed seconds
    float intensity;      // User intensity setting (0.0-1.0)
    float speed;          // User speed setting (default 1.0)
    float2 resolution;    // Drawable size in pixels
    int presetIndex;      // 5 = starburstRing
};
```

---

## Appendix E: Detailed Void Gradient Matching

### React CSS Gradient (6 stops)

```
Stop 0:   0% — rgb(0, 0, 0)           — Pure black
Stop 1:  11% — rgb(0, 0, 0)           — Black (event horizon edge)
Stop 2:  14% — rgba(25, 10, 50, 0.4)  — Faint purple transition
Stop 3:  30% — rgb(20, 5, 49)         — Deep void
Stop 4:  60% — rgb(14, 6, 42)         — Mid void
Stop 5: 100% — rgb(4, 2, 14)          — Near-black
```

### Metal Equivalent

```metal
float3 computeVoid(float dist) {
    // CSS radial-gradient stops (percentages = dist from center)
    if (dist < 0.11) {
        return float3(0.0);  // Pure black through event horizon
    }
    if (dist < 0.14) {
        // Transition zone: rgba(25,10,50,0.4) over black
        // 0.4 alpha × (25,10,50) = effective (10,4,20)
        float t = (dist - 0.11) / 0.03;
        return mix(float3(0.0), rgb(10, 4, 20), t);
    }
    if (dist < 0.30) {
        float t = (dist - 0.14) / 0.16;
        return mix(rgb(10, 4, 20), rgb(20, 5, 49), t);
    }
    if (dist < 0.60) {
        float t = (dist - 0.30) / 0.30;
        return mix(rgb(20, 5, 49), rgb(14, 6, 42), t);
    }
    // 0.60 → 1.00
    float t = (dist - 0.60) / 0.40;
    return mix(rgb(14, 6, 42), rgb(4, 2, 14), t);
}
```

---

## Appendix F: Gas Particle Size Calibration

### React Size System

```javascript
// Gas particle size: 40 + random * 50 → range 40-90 px
// Rendered at: baseSize = p.size * (minDim / 800)
// For iPhone 15 Pro (minDim ≈ 393 portrait → 393*1.35 = 530):
//   baseSize = 50 * (530/800) ≈ 33 → diameter ≈ 66 css-px
// But sprite is rendered at 64×64 canvas px

// So actual drawn size:
//   ctx.drawImage(sprite, -baseSize, -baseSize, baseSize*2, baseSize*2)
//   → 66 × 66 css-px rectangle (but visible radius from gradient ≈ 60% of that)
```

### Metal Size Conversion

```metal
// Current: sizePx / 1170.0
// For 50px base: 50/1170 ≈ 0.043 UV
// Reference resolution: 1170px (iPhone 14 Pro/15 Pro @3x width)

// React's effective visible radius:
//   ~0.6 of draw size (gradient hits near-zero at r=0.6)
//   → 0.043 * 0.6 ≈ 0.026 UV visible influence radius

// With stretch factor 2.0 average:
//   Tangential: 0.026 * 2.0 = 0.052 UV
//   Radial: 0.026 UV
```

This means each gas particle influences approximately a 0.05 × 0.026 UV ellipse.
Since the ring is at radius ≈ 0.35, the ring circumference is ≈ 2.2 UV units.
With 200 particles each spanning 0.05 tangentially, we get 200 × 0.05 = 10 UV
of total tangential coverage — about 4.5× overlap on average around the ring.
This overlap is what creates the dense, luminous appearance.

With only 80 particles: 80 × 0.05 = 4 UV — about 1.8× overlap. Much sparser.

---

## Appendix G: Compositing Equivalence Proof

### React Model (Source-Over Accumulation → Screen)

For 3 overlapping gas particles with alpha values a1, a2, a3 and colors c1, c2, c3,
drawing with source-over into an initially transparent canvas:

```
After particle 1: canvas = c1 × a1
After particle 2: canvas = canvas × (1-a2) + c2 × a2
After particle 3: canvas = canvas × (1-a3) + c3 × a3
```

Then screen-blended against background `bg`:
```
result = 1 - (1 - bg) × (1 - canvas)
```

### Metal Model (Per-Particle Screen Blend)

```
After particle 1: col = 1 - (1 - col) × (1 - c1 × a1)
After particle 2: col = 1 - (1 - col) × (1 - c2 × a2)
After particle 3: col = 1 - (1 - col) × (1 - c3 × a3)
```

### Difference

For small alpha values (a < 0.1), both approaches give similar results because
screen blend of small values approximates additive. But for higher accumulated
alpha (many overlapping particles), the React approach creates more saturated colors
because source-over accumulation can build up to near-opaque, while per-particle
screen blend always brightens toward white.

The practical difference: React's ring gas appears more **color-saturated** (vivid
violet/magenta), while Metal's ring gas appears more **pastel/washed out** (tends
toward white as particles overlap).

**Fix**: Use source-over accumulation in Metal:

```metal
float3 ringAccum = float3(0.0);
float ringAlpha = 0.0;
for (int i = 0; i < 200; i++) {
    float3 pColor = plasmaColor * alpha;
    ringAccum = ringAccum * (1.0 - alpha) + pColor;
    ringAlpha = ringAlpha * (1.0 - alpha) + alpha;
}
col = screenBlend(col, ringAccum, min(ringAlpha, 1.0));
```

---

## Appendix H: Detailed Rewrite Subtasks

### Subtask List

```
 1. Update StarFieldGenerator.starburstRingGasClouds() → 200 particles
 2. Update StarFieldGenerator.starburstAccretionClouds() → 160 particles
 3. Rewrite void gradient to match 6-stop CSS exactly
 4. Correct event horizon to 11% (from 8%)
 5. Keep atmospheric wash (already good)
 6. Enhance core glow intensity slightly
 7. Keep inner halo (already good)
 8. Implement source-over accumulation for ring gas
 9. Increase ring gas loop bound to 200
10. Increase accretion loop bound to 160
11. Tuned nebula cloud opacities (slight increase)
12. Add explicit vignette as final pass
13. Keep dust particles (already good match)
14. Keep motes (already good match)
15. Keep ring FBM detail (additive detail)
16. Verify animation timing with 0.3× factor
17. Test and iterate
```

### Priority Order

1. **Gas particles** (#1, #8, #9) — highest visual impact
2. **Accretion particles** (#2, #10) — second highest
3. **Void gradient** (#3, #4) — defines the "pupil"
4. **Core glow** (#6) — illuminates the center
5. **Vignette** (#12) — edge darkening
6. **Nebula opacity** (#11) — atmospheric depth
7. **Timing** (#16) — animation feel

---

## Appendix I: Ring Gas Tangential Stretch — Detailed Math

### React's Canvas Pipeline

```javascript
ctx.save();
ctx.translate(x, y);             // Move origin to particle center
ctx.rotate(a + Math.PI/2);       // Rotate so Y-axis points tangentially
ctx.scale(1, p.stretch * stretchBreath);  // Stretch along tangent
ctx.drawImage(sprite, -s, -s, s*2, s*2);  // Draw centered sprite
ctx.restore();
```

This creates an elliptical sprite aligned tangentially to the ring orbit.
The stretch factor (1.5-3.0) means the particle is 1.5-3× longer along
the ring than perpendicular to it.

### Metal Analytical Equivalent

In Metal, instead of rotating and scaling a texture, we project the pixel
coordinate onto the tangent/radial axes and apply differential scaling:

```metal
// Tangent vector (perpendicular to radial direction)
float2 tangent = float2(-sin(particleAngle), cos(particleAngle));
float2 radial = float2(tangent.y, -tangent.x);
float2 toPixel = uv - pPos;

// Project pixel offset onto tangent/radial axes with asymmetric scaling
float along = abs(dot(toPixel, tangent)) / (pSize * stretchFactor * stretchBreath);
float across = abs(dot(toPixel, radial)) / pSize;

// Combine into normalized elliptical distance
float d = sqrt(along * along + across * across);
```

This is mathematically equivalent to the canvas rotate+scale operation:
1. `dot(toPixel, tangent)` = component along orbit direction
2. `dot(toPixel, radial)` = component perpendicular to orbit
3. Dividing by different scaling factors creates the elliptical shape
4. The resulting `d` is 1.0 at the particle boundary

### Stretch Breathing

React: `stretchBreath = 1 + deepBreath * 0.15` where `deepBreath = sin(t*0.8+phase)*0.1`
So stretchBreath oscillates between 0.985 and 1.015 — a ±1.5% variation.

### Critical: The Stretch Creates the "Flow" Look

Without tangential stretching, gas particles would appear as circular blobs
sitting in a ring — like beads on a necklace. WITH stretching, they become
elongated streaks that overlap heavily along the ring direction, creating the
continuous "flowing liquid light" appearance that makes the ring look alive.

The overlap calculation changes dramatically:
- Circular (no stretch): each particle subtends ~5° of ring arc
- Stretched 2×: each particle subtends ~10° of ring arc
- Stretched 3×: each particle subtends ~15° of ring arc

With 200 particles at average 2.25× stretch: 200 × (360/200 × 2.25) = 810°
of total tangential coverage. That's 2.25× coverage — every point on the ring
is covered by ~2 particles on average, creating the continuous band.

With 80 particles: 80 × (360/80 × 2.25) = 810° — still same total coverage
in degrees but SPACED differently. 80 particles with 4.5° base spacing vs
200 particles with 1.8° spacing. The 80-particle version has visible gaps
between particle centers, while 200 particles create continuous overlap.

---

## Appendix J: Accretion Disk Visualization

### Radial Structure

```
r = 0.13  (Event Horizon boundary)
│█████████████████████████████████████│  ← Densest (40% of particles)
│████████████████████████████         │  ← Dense (25%)
│██████████████████                   │  ← Moderate (20%)
│██████████                           │  ← Sparse (15%)
r = 0.33  (Outer accretion edge)
```

### Brightness Profile

```
r = 0.13:  alpha = (1-0*0.7) × 0.7 = 0.70  — Very bright
r = 0.18:  alpha = (1-0.25*0.7) × 0.7 = 0.58
r = 0.23:  alpha = (1-0.5*0.7) × 0.7 = 0.46
r = 0.28:  alpha = (1-0.75*0.7) × 0.7 = 0.33
r = 0.33:  alpha = (1-1.0*0.7) × 0.7 = 0.21  — Dim outer edge
```

### Speed Profile (Keplerian)

```
r = 0.13:  factor = 1 + (1-0) × 2.5 = 3.5  — Fastest
r = 0.18:  factor = 1 + (1-0.25) × 2.5 = 2.875
r = 0.23:  factor = 1 + (1-0.5) × 2.5 = 2.25
r = 0.28:  factor = 1 + (1-0.75) × 2.5 = 1.625
r = 0.33:  factor = 1 + (1-1.0) × 2.5 = 1.0  — Slowest
```

This differential rotation creates the visual impression of matter spiraling
inward — inner matter visibly orbits faster than outer matter, true to black
hole physics. After a few seconds of observation, the viewer can see the inner
ring rotating significantly faster, giving the scene its dynamic, alive quality.

### Stretch Profile (Spaghettification)

```
r = 0.13:  stretch = 1.5 + (1-0) × 2.5 = 4.0  — Extreme elongation
r = 0.18:  stretch = 1.5 + (1-0.25) × 2.5 = 3.375
r = 0.23:  stretch = 1.5 + (1-0.5) × 2.5 = 2.75
r = 0.28:  stretch = 1.5 + (1-0.75) × 2.5 = 2.125
r = 0.33:  stretch = 1.5 + (1-1.0) × 2.5 = 1.5  — Mild stretch
```

---

## Appendix K: React RingStructureCanvas Full Render Order

The `RingStructureCanvas` animation loop renders in this exact order:

```
1. ctx.clearRect(0, 0, width, height)         — Start with transparent
2. ctx.globalCompositeOperation = 'source-over'
3. FOR each of 200 gas particles:
   a. Compute orbital position (angle + drift)
   b. Apply 3-wave radial turbulence
   c. Compute pulsing, density boost
   d. ctx.save() → translate → rotate(tangential) → scale(stretch)
   e. ctx.globalAlpha = (0.22 + densityBoost) × intensity
   f. ctx.drawImage(gasSprite, ...) — source-over
   g. ctx.restore()
4. FOR each of 160 accretion particles:
   a. Compute Keplerian orbital position
   b. Apply eye breathing
   c. ctx.save() → translate → rotate(tangential) → scale(spaghettification)
   d. ctx.globalAlpha = (1 - rNorm*0.7) × 0.7 × intensity
   e. ctx.drawImage(accSprite, ...) — source-over
   f. ctx.restore()
5. ctx.globalCompositeOperation = 'source-over'
6. FOR each of 15 dust particles:
   a. Compute position (galaxy drift only, no ring rotation)
   b. ctx.globalAlpha = opacity × intensity
   c. ctx.drawImage(darkDustSprite, ...) — source-over (darkens via dark sprite)
7. ctx.fillStyle = 'rgba(210, 225, 255, 0.8)'
8. FOR each of 3-5 motes:
   a. Compute drifting position with wrapping
   b. ctx.globalAlpha = opacity × 1.5 × pulse × intensity
   c. ctx.arc() → ctx.fill() — tiny bright dot
```

The ENTIRE canvas result is then displayed with CSS `mix-blend-mode: screen`
which screen-blends it against all layers beneath. This means:
- Gas particles source-over each other → building up ring opacity
- Accretion particles source-over on top → adding bright inner disk
- Dust darkens via dark sprite overlay
- Motes add tiny bright pinpoints
- Everything screens against the void/wash background

---

## Appendix L: Key Differences in Gas Particle Generation

### React (Math.random)

```javascript
const angle = (i / 200) * Math.PI * 2 + (Math.random() * 0.1);
const rVar = (Math.random() - 0.5) * 0.18;
const r = 0.35 + rVar;
```

React uses `Math.random()` for particle positioning, giving truly random (non-
deterministic) distribution. However, the base angle is evenly distributed
(`i/200 * 2π`) with only small random jitter (±0.1 rad ≈ ±5.7°), ensuring
particles are evenly spaced around the ring.

### Metal (seededRandom)

```swift
let angle = sRand(55, i * 5) * Float.pi * 2.0
let radius = ringRadius + (sRand(55, i * 5 + 1) - 0.5) * ringSpread * 2.0
```

Metal uses `seededRandom` for deterministic positioning. However, the angle is
FULLY random (not evenly distributed + jitter like React). This can create
clusters and gaps in the ring.

**Improvement for rewrite**: Use evenly-distributed base angles with small jitter,
matching React's `(i/N)*2π + rand*0.1` pattern. This ensures uniform ring coverage.

---

## Appendix M: Performance Optimization Techniques

### Manhattan Distance Pre-Filter

```metal
// Cheap pre-filter: skip particles clearly out of range
float2 toPixel = uv - pPos;
float manhattanD = abs(toPixel.x) + abs(toPixel.y);
if (manhattanD > pSize * 4.0) continue;
```

Manhattan distance is ~3× cheaper than Euclidean distance (no sqrt, single abs+add).
It overestimates by up to √2 ≈ 41%, so we multiply the threshold by √2 to
compensate. This filters out ~80% of particles before doing the expensive
tangent/radial projection.

### Loop Unrolling Considerations

Metal compiler may auto-unroll small loops but 200 iterations is too many for
full unrolling. The `if (d < 1.0)` / `if (d < 1.5)` early-exit conditions
effectively create dynamic loop bodies — most iterations skip quickly.

### Register Pressure

With 200 ring gas + 160 accretion particles, register pressure is manageable
since we only hold one particle's data at a time (loaded from buffer, used,
discarded). The accumulator (`ringAccum`, `col`) adds 3-6 floats of register usage.

### Bandwidth

Each GasCloudData is 64 bytes × (200 + 160) = 23 KB total buffer read.
This is well within L1 texture cache on all Apple GPUs.

---

## Appendix N: Visual Quality Checklist

### For the rewritten shader, verify these visual qualities:

```
□ Event horizon: true black circle, clearly defined at ~11% radius
□ Core glow: soft lavender (217,196,255) gaussian at center
□ Inner halo: violet (154,86,255) wider gaussian
□ Ring gas: dense, continuous band at ~35% radius
□ Ring gas: visible tangential stretching (flow direction)
□ Ring gas: 5 distinct colors visible (violet/magenta/cyan/deepviolet/lavender)
□ Ring gas: subtle radial breathing (3-wave turbulence)
□ Ring gas: slow orbital rotation (~26min full cycle)
□ Accretion disk: bright white-lavender band between horizon and ring
□ Accretion disk: visible differential rotation (inner faster)
□ Accretion disk: spaghettification (inner particles elongated)
□ Accretion disk: eye breathing (±3% radial pulse)
□ Dust: dark patches within ring breaking uniformity
□ Motes: tiny bright drifting dots (barely visible)
□ Nebula clouds: 4 asymmetric colored zones
□ Void: deep purple-black with smooth gradient to edges
□ Vignette: subtle edge darkening
□ Overall: "cosmic eye" impression — looks like looking into space
□ Overall: colors are vivid (violet/magenta/cyan), not washed out
□ Overall: motion feels majestic and slow, not frenetic
```
