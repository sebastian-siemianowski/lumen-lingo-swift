# Shader Performance & Rewrite Task List

This document contains comprehensive subtasks for three areas of shader work:
1. **Performance improvements** for all 6 nebula presets (safe optimizations only — no early-out bounding checks)
2. **Solar Aurora rewrite** to match the React prototype (keeping existing stars)
3. **Starburst Ring complete rewrite** to match the React prototype

---

## Table of Contents

- [1. Performance Improvements](#1-performance-improvements)
  - [1.1 Lagoon Nebula](#11-lagoon-nebula)
  - [1.2 Celestial Lagoon](#12-celestial-lagoon)
  - [1.3 Solar Aurora](#13-solar-aurora)
  - [1.4 Spiral Halo](#14-spiral-halo)
  - [1.5 Edge of Andromeda](#15-edge-of-andromeda)
  - [1.6 Starburst Ring](#16-starburst-ring)
  - [1.7 CosmicNoise.h (shared)](#17-cosmicnoiseh-shared)
  - [1.8 CosmicPostProcess.metal](#18-cosmicpostprocessmetal)
- [2. Solar Aurora Rewrite](#2-solar-aurora-rewrite)
- [3. Starburst Ring Rewrite](#3-starburst-ring-rewrite)

---

## 1. Performance Improvements

### Important Constraints

- **NO early-out bounding checks on particle loops.** Previous attempts with `length(uv - center) > radius` caused "holographic lens" artifacts — hard-edged circles where particles abruptly appear/disappear because flow, turbulence, and velocity displacement shift particles far from their base positions.
- **NO reducing warpedFBM octaves below 4.** Reducing 4→3 caused visible quality loss.
- **Safe optimization patterns:**
  - CPU pre-computation of particle data into `GasCloudData` buffers (already done for Lagoon, Celestial, SpiralHalo)
  - Reducing redundant math (hoisting loop-invariant calculations)
  - Using `half` precision where full `float` is unnecessary
  - Combining overlapping radial glow calculations
  - Using `fast::` math intrinsics for non-critical paths
  - Reducing particle counts IF visual quality is preserved (test carefully)

---

### 1.1 Lagoon Nebula

**Current state:** 383 lines. Uses `GasCloudData` buffer (55 particles). Has 4 atmospheric regions, stellar nursery, Bok globules. No FBM/warpedFBM.

- [ ] **1.1.1** Hoist loop-invariant calculations out of the 55-particle gas cloud loop. Currently `refWidth`, `sizeScale`, `camDX`, `camDY` are computed outside the loop (good), but `float intBoost = 0.7 + intensity * 0.6` is inside — move it out.
- [ ] **1.1.2** Use `half` precision for gas cloud color channels (`p.colorR/G/B`), particle falloff gradient alpha, and blending accumulation. The 4 atmospheric regions also use many `float3` color constants that can be `half3`.
- [ ] **1.1.3** Combine the 4 atmospheric region distance calculations. Currently each region independently computes `length(nd)` and `exp(-d*d*k)`. Pre-compute `uv` relative to each center once, then batch the gaussian evaluations.
- [ ] **1.1.4** Simplify the stellar nursery section: the 3 emission knots each compute a separate `length()` + `exp()`. Pre-compute positions as constants and use a single loop or combine into fewer expressions.
- [ ] **1.1.5** Replace `exp(-d*d*k)` with `smoothstep` approximation where visual difference is negligible (atmospheric regions, not gas particles). `exp()` is expensive on mobile GPUs; `smoothstep` is essentially free.

---

### 1.2 Celestial Lagoon

**Current state:** 343 lines. Mirrors Lagoon architecture with `GasCloudData` buffer (55 particles), 4 atmospheric regions, stellar nursery, Bok globules. Turquoise/cyan palette.

- [ ] **1.2.1** Apply same loop-invariant hoisting as Lagoon: move `intBoost` calculation outside the 55-particle loop.
- [ ] **1.2.2** Use `half` precision for color channels and gradient alpha in the gas cloud loop and atmospheric regions.
- [ ] **1.2.3** Combine atmospheric region gaussian calculations (same pattern as Lagoon 1.1.3).
- [ ] **1.2.4** Replace `exp()` with `smoothstep` approximation in atmospheric regions.
- [ ] **1.2.5** The `breathe` and `breathe2` values in the atmospheric section are computed as `sin(t*0.13)*0.025` and `cos(t*0.10)*0.020` — these are shared across all 4 regions. Verify they're computed once (they appear to be, but confirm the compiler isn't recomputing).

---

### 1.3 Solar Aurora

**Current state:** 198 lines. Has a loop of 9 ribbons, each computing 6 geometry types with `seededRandom()` calls, plus 4 static overlay glows. No buffer optimization — all per-pixel.

- [ ] **1.3.1** Pre-compute ribbon properties into a CPU-side buffer (9 entries). Currently each pixel calls `seededRandom(31, r*7+k)` 6 times per ribbon × 9 ribbons = 54 `sin()` calls per pixel just for ribbon parameters (`baseY`, `amplitude`, `frequency`, `ribbonWidth`, `flowSpeed`, `phaseOffset`). Create a `AuroraRibbonData` struct and populate it once on CPU.
- [ ] **1.3.2** Hoist `breathe`, `phaseOffset`, `colorPhase`, and `ribbonColor` calculations outside the implicit per-pixel re-evaluation. These depend only on `t` and ribbon index, not on `uv`.
- [ ] **1.3.3** The 4 animated gradient overlays each independently compute `radialGlow()` + `pow(x, 3.0)`. Merge the violet, fuchsia, gold, and pink overlays into a single pass that evaluates all 4 distances and applies screenBlend once with a combined color.
- [ ] **1.3.4** Use `half` precision for the `ribbonAccum` accumulator and overlay color constants.
- [ ] **1.3.5** Consider replacing `pow(x, 3.0)` with `x*x*x` — the Metal compiler may already do this, but making it explicit avoids any function call overhead.

---

### 1.4 Spiral Halo

**Current state:** 447 lines. Uses `GasCloudData` buffer (40 particles). Has 4 arm color regions, inter-arm wisps, warped FBM, dark dust lanes. **Already has the CPU pre-computation pattern (original implementation).**

- [ ] **1.4.1** The SpiralHalo fragment still has a tight early-out in the gas cloud loop (`length(bd) > pSize + 0.08`). This is the **only** preset where early-outs survived because the particles are smaller and tightly constrained to spiral arms. **Monitor for artifacts** — if any circular clipping appears, remove it.
- [ ] **1.4.2** The warped FBM section uses `fbm(gasP, 2, 2.0, 0.5)` with only 2 octaves (good), but applies it across 3 separate masks (`coreMask`, `armMask`, `outerMask`). The FBM value itself is computed once (good) — verify that each mask application is truly independent or can be combined.
- [ ] **1.4.3** The 4 arm color regions + inter-arm wisps (section 2) total 5 screen blend operations. Each one computes `exp(-d*d*k)`. Consider batching: compute all 5 distances first, then apply all screen blends in one pass.
- [ ] **1.4.4** The 2 dust lane calculations (`laneAngle1/2`) each compute `fmod`, `abs`, `smoothstep` — these are cheap but could share the `rotation` sin/cos calculation (already extracted as `ca`/`sa`).
- [ ] **1.4.5** Use `half` precision for gas cloud color channels and atmospheric region colors.

---

### 1.5 Edge of Andromeda

**Current state:** 151 lines. Shortest shader. Uses `warpedFBM` with 4 octaves (most expensive operation), gaussian nucleus/disc, dust lane with `snoise()`, violet halos, magenta accents.

- [ ] **1.5.1** The `warpedFBM(gasP, t, 4)` call is the single most expensive operation in this shader. It calls `fbm()` 7 times internally (3 for `q`, 3 for `r`, 1 final), each with 4 octaves = 28 `snoise()` calls per pixel. Investigate: apply a disc mask BEFORE the FBM call — if the pixel is far from the galactic disc (e.g. `abs(centered.y) > 0.15`), skip the FBM entirely and use a simpler noise. This is NOT an early-out on particles — it's a spatial mask on procedural noise, which is safe because procedural noise doesn't have position offsets from animation.
- [ ] **1.5.2** The `snoise()` call for dust wisps (`float3(centered * float2(12.0, 80.0), t * 0.05)`) is independent of the warpedFBM. Consider combining the two noise evaluations by reusing intermediate values if the input coordinates overlap (they don't currently, but the snoise base permutations could be factored).
- [ ] **1.5.3** The nucleus uses two `gaussian2D()` calls (nucleus + aura), and the disc uses two more (disc + blue disc). These are 4 independent exp() evaluations. Combine by computing the elliptical distance once and deriving all 4 values from it.
- [ ] **1.5.4** The 2 magenta accent `radialGlow` + `pow(x, 3.0)` calls could be combined into a single evaluation.
- [ ] **1.5.5** Use `half` precision for all color constants and the final composite accumulation.

---

### 1.6 Starburst Ring

**Current state:** 243 lines. Has 80 ring gas particles + 60 accretion particles (all with per-pixel `seededRandom`), 4 nebula cloud zones, warpedFBM with 4 octaves. **No buffer optimization yet — highest priority for pre-computation.**

- [ ] **1.6.1** **CPU pre-compute ring gas particle data** (highest impact). The 80-particle ring loop calls `seededRandom(55, i*5+k)` 5 times per particle × 80 = 400 `sin()` calls per pixel per frame. Create a `RingGasParticle` struct (or reuse `GasCloudData`) storing: angle, radius, size, color, pulseOffset. Populate once on CPU, pass as buffer.
- [ ] **1.6.2** **CPU pre-compute accretion disk particle data.** The 60-particle accretion loop calls `seededRandom(77, i*4+k)` 4 times per particle × 60 = 240 `sin()` calls per pixel. Pre-compute: angle, radius, size, orbital speed, color blend factor.
- [ ] **1.6.3** The `warpedFBM(gasP, t, 4)` for ring detail has the same cost as Edge of Andromeda (28 snoise calls). Apply a ring-band mask: if pixel is far from `ringRadius` (e.g., `abs(dist - 0.35) > 0.20`), skip the FBM. This is safe because the ring mask (`gaussian(dist - ringRadius, ...)`) would zero out the contribution anyway.
- [ ] **1.6.4** The 4 nebula cloud zones each compute `radialGlow()` + `pow(x, 2.5)` independently. Batch: compute all 4 distances, then apply screen blends in a combined pass.
- [ ] **1.6.5** In the accretion loop, the spaghettification math (`dot(toPixel, tangent)`, `dot(toPixel, perpendicular)`) + `sqrt()` is computed for every pixel for all 60 particles. Hoist the falloff check: if the raw distance to `aPos` is > `aSize * 4`, the stretched elliptical distance will also be > 1.5, so skip the dot products.
- [ ] **1.6.6** Use `half` precision for color constants, particle falloff values, and nebula cloud blending.

---

### 1.7 CosmicNoise.h (shared)

- [ ] **1.7.1** Add a `snoise_fast()` variant using a cheaper permutation polynomial. The current Ashima simplex noise uses `mod289` + full-precision `permute()`. A half-precision variant with simpler permutation would benefit all shaders using `snoise` (Andromeda dust wisps, all FBM/warpedFBM users).
- [ ] **1.7.2** Add a `warpedFBM_lite()` variant that uses 2 octaves internally instead of accepting an `octaves` parameter. This would be useful for non-critical FBM applications (e.g., Spiral Halo already uses `fbm` with 2 octaves separately).
- [ ] **1.7.3** Consider adding `fast::sin`/`fast::cos` versions of `seededRandom` for use in non-visual-critical calculations. The `fast::` math intrinsics on Apple GPUs trade ~1 ULP of precision for significant throughput improvement.
- [ ] **1.7.4** Audit `radialGlow()`: it uses `smoothstep(0.0, radius, d)` which the compiler should optimize well, but verify it's inlined at all call sites (it's declared `static`).

---

### 1.8 CosmicPostProcess.metal

- [ ] **1.8.1** The post-process fragment computes 6 preset-specific branches behind `if/else if` chains. Since only one branch executes per frame (presetIndex is uniform), the GPU should handle this efficiently via uniform branching. Verify with GPU profiler that no warp divergence occurs.
- [ ] **1.8.2** The foundation vignette + edge vignette compute two separate `smoothstep(0.3, K, dist * 1.4)` calls. Pre-compute `dist * 1.4` once and derive both from it.
- [ ] **1.8.3** Use `half` precision for all color constants and intermediate blending values.

---

## 2. Solar Aurora Rewrite

### Goal

Rewrite `SolarAuroraPreset.metal` to match the React `SolarAuroraNebula.jsx` visual output while **keeping the existing star rendering** (`SolarAuroraStars.metal` — do not modify).

### Key Differences Between Current Metal and React

| Aspect | React (Target) | Current Metal |
|--------|----------------|---------------|
| **Ribbon rendering** | Vertical streaks: each ribbon segment is a `fillRect` with a vertical `LinearGradient` (bottom→top). Height = 26-37% of screen. Width = ~0.6-1.4% of screen × 4.2. | Horizontal wave profile: ribbon is a horizontal curve with `yDist` falloff from centerline. No vertical structure. |
| **Ribbon geometry** | Each ribbon has 400-550 segments spanning the X axis. Each segment gets independent displacement, producing a dense curtain of vertical light columns. | Single wave function per ribbon applied once to `uv.y`. No per-segment structure. |
| **Ribbon color** | Smooth cosine interpolation between violet(95,45,190) → fuchsia(210,60,160) → gold(255,180,70). Color cycles per-ribbon with independent `colorOffset`. | Same 3 colors but uses linear `mix()` instead of cosine interpolation. |
| **Ribbon gradient profile** | Volumetric 5-stop vertical gradient: transparent base → 12% alpha → bright core at 30% → main body at 55% → ethereal fade to top. Core is brightened (+35 RGB). | 3-zone horizontal falloff profile (`yDist < 0.3`, `< 1.0`, `< 3.0`). No vertical gradient structure. |
| **Traveling shimmer** | `sin(x * 12 - t * flowSpeed * 3) * 0.5 + 0.5` → range 0.7-1.05 multiplier. Fast, visible energy flow along each ribbon. | Similar but applied to a single wave, not per-segment. |
| **Global volumetric glow** | Screen-blended bottom-up linear gradient: `rgba(120, 60, 200, 0.01)` at bottom → transparent at 60% height. | Not present. |
| **Layer composition (React)** | Deep space gradient → ambient violet glow → ribbons (lighter/additive blend, 0.95 opacity, 0.8px blur) → fuchsia accent (28s breathing) → gold glow (24s breathing) → pink highlights (32s breathing) → stars → volumetric glow (screen) → vignette → central clarity | Deep void → ambient violet → 9 ribbon loop (additive) → fuchsia/gold/pink overlays → volumetric glow → output alpha |
| **Compositing** | Ribbons use `globalCompositeOperation = 'lighter'` (additive) with `mixBlendMode: 'screen'` on the canvas + `filter: 'blur(0.8px)'` | Ribbons use `additiveBlend()` — close, but no per-canvas screen blend or blur |

### Subtasks

- [ ] **2.1** **Define `AuroraRibbonData` struct in CosmicNoise.h.** Fields: `baseHeight` (float), `speed` (float), `drift` (float), `colorOffset` (float), `amplitude` (float), `frequency` (float), `width` (float), `segmentCount` (int), `flowSpeed` (float), `geomType` (int), `depth` (float). Size: ~48 bytes per ribbon.

- [ ] **2.2** **Add `generateAuroraRibbons()` to StarFieldGenerator.swift.** Populate 9 `AuroraRibbonData` entries matching React parameters:
  - `depth` = i/8 (0..1)
  - `baseHeight` = 0.2 + (sin(i * 99) * 0.5 + 0.5) * 0.45 → range 0.2-0.65
  - `speed` = 0.15 + random * 0.35
  - `drift` = (random - 0.5) * 0.3
  - `amplitude` = 0.08 + random * 0.18
  - `frequency` = 0.3 + random * 1.2
  - `width` = 0.006 + random * 0.008
  - `segmentCount` = 400 + random * 150
  - `flowSpeed` = 0.5 + random * 1.5
  - `colorOffset` = random * 2π
  - `geomType` = r % 6 (same cycle as React: smooth/fold/spiral/s-curve/drape/ripple/smooth/fold/s-curve)

- [ ] **2.3** **Wire the ribbon buffer through MetalCosmicRenderer.swift.** Add the `AuroraRibbonData` buffer to the Solar Aurora preset's fragment encoder at buffer index 1 (same pattern as `gasCloudBuffers` for Lagoon/Celestial/SpiralHalo).

- [ ] **2.4** **Rewrite the ribbon rendering loop in SolarAuroraPreset.metal.** Replace the current 9-ribbon loop with a fundamentally different approach:

  **For each ribbon r (0..8):**
  
  1. Read `AuroraRibbonData` from buffer.
  2. Compute `rTime = t * ribbon.speed + r * 10`.
  3. Compute horizontal drift: `driftX = sin(rTime * 0.1) * 0.1 + rTime * 0.02 * ribbon.drift`.
  4. Compute color from cosine interpolation:
     - `rawCycle = sin(rTime * 0.15 + ribbon.colorOffset) * 0.5 + 0.5`
     - If rawCycle < 0.5: `tVal = (1 - cos(rawCycle * 2π)) * 0.5`, lerp c1→c2
     - Else: `tVal = (1 - cos((rawCycle-0.5) * 2π)) * 0.5`, lerp c2→c3
  5. **Determine if this pixel belongs to this ribbon's vertical streak:** 
     - Compute `segmentT = (uv.x + driftX) / totalWidth` (where totalWidth = 1.0 + some buffer).
     - Apply geometry displacement to get `finalY` (ribbon's Y center at this X).
     - Check if pixel is within the ribbon's vertical extent: `uv.y > finalY - segmentHeight` and `uv.y < finalY`.
  6. If within vertical extent, compute the 5-stop vertical gradient alpha.
  7. Accumulate using additive blend.

- [ ] **2.5** **Implement all 6 geometry types matching React.** The current Metal shader already has these, but they need to be rewritten to work in the new vertical-streak paradigm:
  - **Smooth:** `yOffset = sin(t * 2π + rTime * 0.35) * height * 0.055 + cos(t * 2π - rTime * 0.1) * height * 0.025`
  - **Fold:** `fold = sin(t * 6π + rTime * 0.12); yOffset = -abs(fold) * height * 0.03`
  - **Spiral:** `spiralT = t * 4π + rTime * 0.25; yOffset = sin(spiralT) * height * 0.065`
  - **S-curve:** x displacement + `yOffset = sin(t * 2π + rTime * 0.22) * height * 0.09`
  - **Drape:** `yOffset = abs(sin(t * 2π + rTime * 0.09)) * height * 0.11`
  - **Ripple:** `yOffset = sin(t * 10π - rTime * 0.7) * height * 0.018 + sin(t * 4π + rTime * 0.2) * height * 0.025`

  Note: In the React version, `t` here is normalized 0..1 across the ribbon's width. In Metal, this becomes `uv.x` (or wrapped `uv.x + driftX`).

- [ ] **2.6** **Implement the vertical streak gradient profile.** Each visible segment should produce a vertical gradient:
  ```
  stop 0.0: rgba(color, 0)                              — bottom (transparent)
  stop 0.1: rgba(color, alpha * 0.12)                    — subtle start
  stop 0.3: rgba(brightened_color, alpha * 1.05)          — bright core
  stop 0.55: rgba(color, alpha * 0.7)                    — main body
  stop 1.0: rgba(dimmed_color, 0)                        — top fade (ethereal)
  ```
  Where `brightened_color = min(255, color + 35)` and `dimmed_color = max(0, color - 30)` (with blue getting +30 instead of -30).
  
  In Metal, this translates to evaluating the pixel's Y position within the segment's vertical extent and using `mix()` between the gradient stops.

- [ ] **2.7** **Implement the segmented approach.** The React version draws 400-550 discrete rectangles per ribbon. In Metal, we can't draw rectangles — instead, for each pixel, determine which ribbon segment it falls into:
  - Segment width = `ribbon.width * perspectiveWidth * 4.2` (in UV space)
  - Determine which segment index the pixel's X falls into
  - Compute that segment's Y offset from the geometry function
  - Apply the vertical gradient based on Y position relative to segment
  
  **Alternative simplified approach:** Since Metal runs per-pixel, we don't need to iterate segments. For each ribbon, compute the geometry displacement at `uv.x`, then evaluate the vertical gradient directly. The "segmented" look comes from the ribbon width — the ribbon occupies a narrow horizontal band at each X position, and the gradient goes vertically.

- [ ] **2.8** **Implement traveling shimmer pulse.** Per React: `flowPhase = x * 12 - rTime * ribbon.flowSpeed`. `energyFlow = sin(flowPhase) * 0.5 + 0.5`. Shimmer = `0.85 + energyFlow * 0.35`. This modulates the alpha of each streak for a visible energy-flow effect along the ribbon.

- [ ] **2.9** **Add bottom-up volumetric glow.** After ribbon accumulation, add a screen-blended linear gradient:
  ```
  color: rgb(120, 60, 200)
  alpha at bottom (uv.y = 1.0): 0.01 * intensity
  alpha at 60% height (uv.y = 0.4): 0
  ```
  Use `screenBlend(col, rgb(120,60,200), glow * 0.01 * intensity)`.

- [ ] **2.10** **Adjust overlay glow positions and timing to match React.** Current overlays are close but verify:
  - Fuchsia: center (0.65, 0.38), size 50%×45%, 28s cycle
  - Gold: center (0.48, 0.45), size 45%×35%, 24s cycle, 6s delay
  - Pink: center (0.30, 0.55), size 38%×30%, 32s cycle, 10s delay
  
  Current Metal has these at slightly different positions — adjust to match React exactly.

- [ ] **2.11** **Adjust deep space void gradient.** React uses:
  ```
  radial-gradient(ellipse 140% 120% at 50% 50%, 
    rgba(15, 8, 25, 0) 0%, 
    rgba(10, 5, 20, 0.5) 40%,
    rgba(6, 3, 14, 0.8) 70%,
    rgba(3, 2, 8, 1) 100%)
  ```
  Current Metal uses linear mix `voidInner→voidOuter` with `smoothstep(0.0, 0.8, dist)`. Adjust to match the multi-stop elliptical gradient.

- [ ] **2.12** **Adjust output alpha.** Current: `alpha = clamp(length(col) * 5.0 + 0.35, 0, 1)`. The React version renders on a fully opaque background. Consider if the alpha calculation needs adjustment for proper compositing with the star layer.

- [ ] **2.13** **Test visual match.** Run side-by-side with React version at same viewport size. Key visual indicators:
  - Ribbons should look like curtains of vertical light, not horizontal waves
  - Color should cycle smoothly violet → fuchsia → gold with cosine interpolation
  - Visible energy shimmer should flow along each ribbon
  - Bottom of screen should have subtle purple volumetric glow
  - Overall density and brightness should be similar (not too bright, not too dim)

---

## 3. Starburst Ring Rewrite

### Goal

Complete rewrite of `StarburstRingPreset.metal` to match the React `StarburstRingGalaxy.jsx`. The current Metal version looks significantly inferior — the ring lacks definition, the accretion disk is unconvincing, and the overall composition is flat compared to the React version's layered depth.

### Key Differences Between Current Metal and React

| Aspect | React (Target) | Current Metal |
|--------|----------------|---------------|
| **Ring gas particles** | 200 particles with stretched aspect ratios (1.5-3.0×), tangentially aligned, fluid dynamics with 3 wave frequencies, "ethereal breath" pulsing, sprite-based volumetric plasma look | 80 particles, uniform circular falloff, simple 3-wave turbulence, basic pulsing |
| **Accretion disk** | 160 particles with Keplerian variable speed (faster near center), spaghettification stretch (1.5-4.0×), "eye breathing" effect, tangentially aligned | 60 particles, simplified elliptical distance, basic orbit speed |
| **Ring radius** | `0.35` (normalized to minDim), ring appears large relative to screen | `0.35` normalized to UV — appears smaller due to different coordinate system |
| **Event horizon** | Hard black circle with smooth transition at r=0.08-0.11 of total dimension | Same range in UV space, proportionally correct |
| **Nebula clouds** | 4 CSS `div` elements with organic blob shapes, heavy blur (50-65px), varied opacity, `mix-blend-mode: screen`, NOT animated — static atmospheric background | 4 `radialGlow()` zones with `pow(x, 2.5)` — circular, no organic shape, no blur equivalent |
| **Dust particles** | 15 dark circles moving with galaxy drift, subtraction-style darkening | Not present in Metal version |
| **Motes** | 3-5 slowly drifting tiny bright dots with breathing opacity — "signs of life" | Not present in Metal version |
| **Core glow** | Radial gradient: `rgb(0,0,0)` 0-11% → `rgba(25,10,50,0.4)` 14% → `rgb(20,5,49)` 30% → `rgb(14,6,42)` 60% → `rgb(4,2,14)` 100% | Similar multi-stop void gradient — close |
| **Gas cloud rendering** | Each gas sprite is a pre-rendered offscreen canvas with volumetric plasma gradient (hot center +30 RGB, structured falloff at 0/25%/60%/100% stops). Screen-blended. | Simple `1 - smoothstep(0,1,d)` squared falloff with additive blend |
| **Global rotation** | Very slow: `elapsed * 0.004` for gas, `elapsed * 0.0007` for subtle drift | `t * 0.013` — 3× faster than React's gas rotation |
| **Fluid dynamics** | 3 waves: `sin(a*3 + t*0.2)` slow heave, `cos(a*6 - t*0.15)` counter flow, `sin(a*10 + t*0.4)*0.3` detail ripple. Combined amplitude ~0.021 of ring scale. | 3 waves with similar structure but different frequencies and amplitudes |
| **Star rendering** | Separate MicrostarCanvas with 1600 stars from Float32Array. 3 star types: normal, hero (JWST diffraction spikes + rotation), halo (nebular soft glow). Zone distribution: core 4%, ring 58%, halo 20%, field 18%. Screen blend. | Handled by StarburstStars.metal (separate, keep as-is) |
| **Atmospheric wash** | CSS radial gradient: `rgba(125, 44, 255, 0.04)` center → transparent 60%, screen blend | `radialGlow()` with `pow(x, 2.0)` + `screenBlend` at 0.04 — similar |
| **Vignette** | `radial-gradient(ellipse 90% 80%, transparent 40% → rgba(0,0,0,0.6) 100%)` | Handled by CosmicPostProcess.metal — verify match |
| **warpedFBM** | Not present in React — React uses discrete sprite particles only | Used for ring detail texture — adds organic structure but is expensive |

### Subtasks

- [ ] **3.1** **Define `RingParticleData` struct in CosmicNoise.h.** For ring gas particles. Fields: `angle` (float), `radius` (float), `size` (float), `colorR/G/B` (float×3), `stretch` (float), `speed` (float), `pulseOffset` (float), `wobbleSpeed` (float), `_pad` (float×5 for alignment). Total: 16 floats = 64 bytes (can reuse `GasCloudData` if fields map cleanly).

- [ ] **3.2** **Define `AccretionParticleData` struct in CosmicNoise.h** (or reuse `GasCloudData`). Fields: `angle` (float), `radius` (float), `speed` (float), `size` (float), `colorR/G/B` (float×3), `phase` (float), `_pad` (float×8). Total: 16 floats = 64 bytes.

- [ ] **3.3** **Add `generateStarburstRingParticles()` to StarFieldGenerator.swift.** Generate:
  - **200 ring gas particles** matching React:
    - `angle` = (i/200) * 2π + random * 0.1
    - `radius` = 0.35 + (random - 0.5) * 0.18 → range 0.26-0.44
    - `size` = 40 + random * 50 → 40-90 (in reference pixels)
    - `color` = random pick from: violetGas(125,44,255), magentaGas(208,75,255), neonBlue(75,216,255), innerHalo(154,86,255), coreGlow(217,196,255)
    - `stretch` = 1.5 + random * 1.5 → 1.5-3.0
    - `speed` = 0.02 + random * 0.04
    - `pulseOffset` = random * 2π
    - `wobbleSpeed` = 0.5 + random
  - **160 accretion particles** matching React:
    - `angle` = random * 2π
    - `radius` = 0.13 + pow(random, 1.8) * 0.20 → 0.13-0.33 (power distribution = dense near center)
    - `speed` = 0.3 + random * 0.5
    - `size` = 12 + random * 18 → 12-30 (reference pixels)
    - `color` = random pick from: white(255,255,255), blueWhite(200,230,255), lavender(230,210,255)
    - `phase` = random * 2π

- [ ] **3.4** **Wire both buffers through MetalCosmicRenderer.swift.** Pass ring gas data at buffer index 1, accretion data at buffer index 2. Update the pipeline descriptor and encoder for the Starburst Ring preset.

- [ ] **3.5** **Rewrite the deep void / event horizon section.** Match React's multi-stop radial gradient precisely:
  ```
  dist 0.00 - 0.08: pure black rgb(0,0,0)
  dist 0.08 - 0.11: transition to black (event horizon edge)
  dist 0.11 - 0.14: rgba(25,10,50) at 0.4 opacity
  dist 0.14 - 0.30: rgb(20,5,49)
  dist 0.30 - 0.60: rgb(14,6,42) 
  dist 0.60 - 1.00: rgb(4,2,14)
  ```
  Note: React uses `circle at 50% 50%` — isotropic. Current Metal is already isotropic.

- [ ] **3.6** **Rewrite the ring gas particle loop (200 particles).** Key changes from current:
  1. Read from buffer instead of `seededRandom`.
  2. Apply global rotation: `globalRot = t * 0.004` (was 0.013 — 3× slower!). Plus subtle drift: `t * 0.0007`.
  3. Fluid dynamics matching React frequencies:
     - `wave1 = sin(angle * 3 + t * 0.2) * 0.012` (slow heave)
     - `wave2 = cos(angle * 6 - t * 0.15) * 0.006` (counter flow)
     - `wave3 = sin(angle * 10 + t * 0.4) * 0.003` (detail ripple)
  4. **Implement tangential stretch.** Each gas particle in React is rotated by `angle + π/2` (perpendicular to radial direction) and scaled by `stretch` factor (1.5-3.0×) along that axis. In Metal: compute the pixel's position relative to particle center in tangent/radial coordinates, then scale the radial component by 1/stretch before computing distance.
  5. **Implement volumetric plasma gradient.** React's gas sprite has 4 stops:
     - Center: `rgba(color+30, color+30, color+30, 0.25)` (hot center)
     - 25%: `rgba(color, 0.12)`
     - 60%: `rgba(color, 0.03)`
     - 100%: `rgba(color, 0)`
  6. **Ethereal breath pulsing:**
     - `deepBreath = sin(t * 0.8 + pulseOffset) * 0.1`
     - `pulse = 1 + sin(t * wobbleSpeed * 0.5 + pulseOffset) * 0.08 + deepBreath`
     - Base alpha: `(0.22 + densityBoost) * intensity` where `densityBoost = max(0, wave1 + wave2) * 0.15`
  7. Use `source-over` compositing (NOT additive) for gas, matching React's `ctx.globalCompositeOperation = 'source-over'` followed by canvas `mixBlendMode: 'screen'`.

- [ ] **3.7** **Rewrite the accretion disk loop (160 particles).** Key changes:
  1. Read from buffer.
  2. Variable Keplerian speed: `rotSpeed = particle.speed * (1 + (1 - rNorm) * 2.5)` where `rNorm = (radius - 0.13) / 0.20`.
  3. Eye breathing: `eyeBreath = 1 + sin(t * 0.2) * 0.03`.
  4. Spaghettification: `stretch = 1.5 + (1 - rNorm) * 2.5`. Particles near center stretch up to 4.0× along the tangential axis (same stretch technique as ring gas).
  5. Size pulsing: `size * (0.8 + sin(t * 0.4 + phase) * 0.2)`.
  6. Alpha increases near center: `alpha = (1 - rNorm * 0.7) * 0.7 * intensity`.
  7. Use the same volumetric sprite gradient as gas particles but with the accretion colors.

- [ ] **3.8** **Add dust particle rendering (15 particles).** After gas and accretion:
  1. Pre-generate 15 dust particle positions (angle, radius ~0.35 ± 0.05, size 50-90 reference px, opacity 0.1-0.2).
  2. Move with subtle drift only (no fast rotation): `angle + t * 0.0007`.
  3. Render as dark circles: `rgb(6, 3, 16)` with radial gradient (0.6 alpha at center → 0 at edge).
  4. Apply using multiply blend (darkening).

- [ ] **3.9** **Add mote particle rendering (3-5 particles).** After dust:
  1. Pre-generate 3-5 motes with random base positions, very slow drift velocity, sizes 1.5-4.0, ultra-low opacity (0.03-0.09).
  2. Continuous smooth drift: `pos = basePos + velocity * t * 0.1` (wrapping).
  3. Opacity breathing: `0.7 + sin(t * 0.5 + phase) * 0.3`.
  4. Color: `rgb(210, 225, 255)`.
  5. Render as simple small circles.

- [ ] **3.10** **Replace the 4 nebula cloud zones with organic shapes.** React uses CSS `div` elements with:
  - Organic `border-radius` (e.g., `40% 60% 70% 30% / 50% 60% 40% 50%`)
  - Heavy blur (50-65px)
  - Varied opacity per cloud
  - `mix-blend-mode: screen`
  
  In Metal, approximate with:
  - Elliptical distance fields with slight polar deformation: add `sin(angle * 3 + offset) * 0.1` to the radius to create blob-like shapes instead of perfect ellipses.
  - Apply gaussian blur approximation via wider falloff radii.
  - Match React cloud positions:
    - Violet: upper-left, 80×70vw, `rgba(140, 100, 220, 0.15)`, opacity 0.7
    - Magenta: right, 70×80vw, `rgba(180, 80, 200, 0.12)`, opacity 0.6
    - Blue-violet: bottom, 90×60vw, `rgba(100, 120, 200, 0.10)`, opacity 0.5
    - Cyan: lower-left, 60×50vw, `rgba(80, 160, 220, 0.08)`, opacity 0.4

- [ ] **3.11** **Decide on warpedFBM retention.** The React version does NOT use procedural noise for ring detail — it relies entirely on discrete sprite particles. Options:
  - **Option A (recommended):** Remove warpedFBM entirely, rely on the increased particle count (200 vs 80) plus stretched aspect ratios to provide organic structure. This saves 28 snoise calls per pixel.
  - **Option B:** Keep warpedFBM but reduce to 2 octaves with a tight ring mask (only evaluate near ring radius). This adds subtle organic texture that the discrete particles can't provide.
  
  Choose based on visual testing — if 200 stretched particles provide sufficient organic structure, go with Option A.

- [ ] **3.12** **Adjust rotation speeds.** Critical for visual match:
  - Gas: `t * 0.004` (React: `elapsed * 0.004`) — current is `t * 0.013` (3× too fast)
  - Subtle drift: `t * 0.0007` (React: `elapsed * 0.0007`) — not present in current
  - Accretion: variable via Keplerian formula, not a single uniform speed

- [ ] **3.13** **Adjust coordinate system mapping.** React normalizes to `minDim = isPortrait ? width * 1.35 : min(width, height)`. The ring scale is relative to this dimension, not the UV 0-1 range. In Metal:
  - Compute `minDim = min(resolution.x, resolution.y)` (portrait handling may need adjustment).
  - Scale ring positions: particle world position = center + cos/sin(angle) * radius * minDim.
  - Convert to UV: divide by resolution.
  - This ensures the ring appears at the same relative size as in React.

- [ ] **3.14** **Match core glow layers.** React has:
  - Core: gaussian at center, `rgb(217, 196, 255)`, sigma ~3% of dimension, alpha 0.20
  - Inner halo: `rgb(154, 86, 255)`, sigma ~6%, alpha 0.10
  
  Current Metal matches these — verify values are identical.

- [ ] **3.15** **Match atmospheric wash.** React: `rgba(125, 44, 255, 0.04)` center → transparent at 60% radius, screen blend. Current Metal uses `radialGlow() + pow(x, 2.0) * 0.04` — verify the falloff curve matches.

- [ ] **3.16** **Verify vignette in CosmicPostProcess.metal.** React vignette: `radial-gradient(ellipse 90% 80%, transparent 40% → rgba(0,0,0,0.6) 100%)`. Current post-process for preset 5 (Starburst): `smoothstep(0.4, 1.0, dist * 1.3) * 0.5`. Verify these produce similar darkening profiles.

- [ ] **3.17** **Test with reduced particle counts if performance is poor.** If 200 + 160 + 15 + 5 = 380 particles per pixel is too heavy on lower-end iOS devices:
  - Reduce ring gas to 120 (minimum for visual continuity)
  - Reduce accretion to 100
  - Dust and motes are cheap (20 total) — keep as-is
  - Target: ≤ 300 particles with buffer pre-computation should be manageable

- [ ] **3.18** **Visual testing checklist.** Compare with React side-by-side:
  - [ ] Ring appears as a continuous band of flowing, stretched gas clouds (not individual dots)
  - [ ] Accretion disk is visible as infalling matter with tangential stretch increasing near center
  - [ ] Center is truly black with subtle core glow transition
  - [ ] Rotation speed is very slow — almost imperceptible
  - [ ] Nebula clouds provide atmospheric depth behind the ring (not just flat colored circles)
  - [ ] Dust particles add subtle dark structure within the ring
  - [ ] Motes provide tiny points of "life" drifting slowly
  - [ ] Overall color palette matches: deep violet/magenta/cyan with warm white accents
  - [ ] Screen dimensions and ring proportions match across phone sizes

---

## Notes

### Build Command
```bash
cd LumenLingo && xcodegen generate && xcodebuild -scheme LumenLingo -destination 'generic/platform=iOS Simulator' build
```

### File Locations
- **Metal shaders:** `LumenLingo/LumenLingo/Shaders/`
- **Shared header:** `LumenLingo/LumenLingo/Shaders/CosmicNoise.h`
- **Star types header:** `LumenLingo/LumenLingo/Shaders/CosmicStarTypes.h`
- **Renderer:** `LumenLingo/LumenLingo/Views/Background/MetalCosmicRenderer.swift`
- **Star/particle generator:** `LumenLingo/LumenLingo/Views/Background/StarFieldGenerator.swift`
- **React references (read-only):** `lumen-lingo-react/src/components/background/SolarAuroraNebula.jsx`, `StarburstRingGalaxy.jsx`

### Preset Index Mapping
| Index | Preset | Buffer at index 1 |
|-------|--------|-------------------|
| 0 | Lagoon Nebula | GasCloudData × 55 |
| 1 | Celestial Lagoon | GasCloudData × 55 |
| 2 | Solar Aurora | (none currently — add AuroraRibbonData × 9) |
| 3 | Spiral Halo | GasCloudData × 40 |
| 4 | Edge of Andromeda | (none) |
| 5 | Starburst Ring | (none currently — add RingParticleData × 200 + AccretionParticleData × 160) |

### GasCloudData Struct (existing, 16 floats = 64 bytes)
```c
struct GasCloudData {
    float basePosX, basePosY;     // Position
    float depth;                   // Parallax depth 0..1
    float sizePx;                  // Size in reference pixels
    float colorR, colorG, colorB; // RGB color
    float baseAlpha;              // Base opacity
    float phase;                  // Animation phase
    float flowFreq;               // Flow oscillation frequency
    float flowBaseMul;            // Flow amplitude base
    float pulseFreq;              // Pulse breathing frequency
    float pulsePhase;             // Pulse phase offset
    float spiralDist;             // >0 for arm particles needing rotation
    float spiralTheta;            // Spiral arm angle
    float _pad0;                  // Padding to 64 bytes
};
```

### Artifact Prevention Rules
1. **Never** add `if (distance > threshold) continue` to particle loops — particles move via flow, turbulence, and drift that can place them far from their base positions.
2. **Never** reduce FBM octaves below their current values without visual testing.
3. **Always** test shader changes on actual device (Simulator GPU differs from real Metal GPU).
4. Safe to skip expensive operations (like warpedFBM) based on **procedural mask** (e.g., `if pixel is far from galaxy disc, skip FBM`) because the mask itself doesn't move — only the noise input does.
