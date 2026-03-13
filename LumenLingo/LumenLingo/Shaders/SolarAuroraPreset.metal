#include <metal_stdlib>
#include "CosmicNoise.h"
using namespace metal;

// ============================================================
// MARK: - Solar Aurora Nebula Background (v3 — from-scratch rebuild)
// Faithful recreation of React SolarAuroraNebula.jsx
// Key fixes: soft-edge ribbons, width-proportional alpha,
// stronger atmospheric glows, correct bright core visibility
// ============================================================

vertex float4 solarAuroraBgVertex(uint vid [[vertex_id]]) {
    float2 pos;
    pos.x = (vid == 1) ? 3.0 : -1.0;
    pos.y = (vid == 2) ? 3.0 : -1.0;
    return float4(pos, 0.0, 1.0);
}

// Soft elliptical glow with CSS-blur-like falloff.
// Uses smoothstep cubed for extra softness at edges (approximates heavy CSS blur).
static float softEllipseGlow(float2 uv, float2 center, float2 radii) {
    float d = length((uv - center) / radii);
    float g = 1.0 - smoothstep(0.0, 1.0, d);
    return g * g * g; // Cubed → very soft edges, wide spread (matches CSS blur 65-110px)
}

// Evaluate the 5-stop vertical gradient that defines the aurora curtain look.
// vt: 0=base/bottom, 1=top of the streak
// Returns (gradientAlphaMul, modifiedColor)
static float3 auroraVerticalGradient(float vt, float3 ribbonColor, thread float& gradAlpha) {
    float3 gradColor = ribbonColor;
    float3 brightCore = min(ribbonColor + float3(35.0 / 255.0), float3(1.0));
    float3 blueShifted = float3(
        max(ribbonColor.r - 30.0 / 255.0, 0.0),
        max(ribbonColor.g - 15.0 / 255.0, 0.0),
        min(ribbonColor.b + 30.0 / 255.0, 1.0)
    );

    if (vt < 0.1) {
        // Bottom: transparent → subtle start
        gradAlpha = (vt / 0.1) * 0.12;
    } else if (vt < 0.3) {
        // Building to BRIGHT CORE — the defining aurora feature
        float f = (vt - 0.1) / 0.2;
        gradAlpha = mix(0.12, 1.05, f);
        gradColor = mix(ribbonColor, brightCore, f);
    } else if (vt < 0.55) {
        // Core → main body: brightness easing down
        float f = (vt - 0.3) / 0.25;
        gradAlpha = mix(1.05, 0.7, f);
        gradColor = mix(brightCore, ribbonColor, f);
    } else {
        // Main body → ethereal top fade with blue-shift
        float f = (vt - 0.55) / 0.45;
        gradAlpha = mix(0.7, 0.0, f);
        gradColor = mix(ribbonColor, blueShifted, f);
    }

    return gradColor;
}

fragment float4 solarAuroraBgFragment(
    float4 position [[position]],
    constant CosmicUniforms& u [[buffer(0)]],
    constant AuroraRibbonData* ribbons [[buffer(1)]]
) {
    float2 uv = position.xy / u.resolution;
    float t = u.time * u.speed * 0.35;

    // ═══════════════════════════════════════════════════
    // LAYER 1: Deep Space Void
    // Pure black center, dark purple edges
    // React: radial-gradient(ellipse 140% 120%, rgba(15,8,25,0)→rgba(3,2,8,1))
    // Over black parent → center is PURE BLACK (alpha=0 at center)
    // ═══════════════════════════════════════════════════
    float voidDist = length((uv - 0.5) / float2(0.7, 0.6));
    float3 col = float3(0.0); // Pure black void

    // 4-stop alpha-composited gradient onto black
    {
        float3 voidCol;
        float voidA;
        if (voidDist < 0.4) {
            voidCol = mix(rgb(15, 8, 25), rgb(10, 5, 20), voidDist / 0.4);
            voidA = smoothstep(0.0, 0.4, voidDist) * 0.5;
        } else if (voidDist < 0.7) {
            float f = (voidDist - 0.4) / 0.3;
            voidCol = mix(rgb(10, 5, 20), rgb(6, 3, 14), f);
            voidA = mix(0.5, 0.8, f);
        } else {
            float f = saturate((voidDist - 0.7) / 0.3);
            voidCol = mix(rgb(6, 3, 14), rgb(3, 2, 8), f);
            voidA = mix(0.8, 1.0, f);
        }
        col = mix(col, voidCol, voidA);
    }

    // ═══════════════════════════════════════════════════
    // LAYER 2: Ambient Violet Glow
    // React: ellipse 75%×65%, blur(110px), screen
    // Very soft and wide — ambient purple haze
    // ═══════════════════════════════════════════════════
    {
        float2 ambRadii = float2(0.375, 0.325);
        float ambD = length((uv - 0.5) / ambRadii);
        float ambG = 1.0 - smoothstep(0.0, 1.0, ambD);
        ambG = ambG * ambG; // Squared → smooth falloff
        float3 ambCol = mix(rgb(100, 50, 180), rgb(75, 35, 145), smoothstep(0.0, 0.85, ambD));
        col = screenBlend(col, ambCol, ambG * 0.06 * u.intensity);
    }

    // ═══════════════════════════════════════════════════
    // LAYERS 4-6: Animated Atmospheric Glows (behind ribbons)
    // These create the colored haze that gives the aurora its
    // atmospheric presence. Using cubed falloff for softer spread,
    // matching heavy CSS blur (65-110px on ~1170px viewport).
    // ═══════════════════════════════════════════════════

    // Fuchsia accent — upper right, largest, most prominent
    {
        float breath = 0.79 + sin(t * 0.224) * 0.09;
        float2 fc = float2(0.695 + sin(t * 0.22) * 0.007,
                           0.344 + cos(t * 0.18) * 0.005);
        float2 fr = float2(0.325, 0.293);
        float fd = length((uv - fc) / fr);
        float fg = softEllipseGlow(uv, fc, fr);
        float3 fCol = mix(rgb(220, 60, 160), rgb(180, 45, 130), smoothstep(0.0, 0.6, fd));
        float fA = fg * mix(0.12, 0.06, smoothstep(0.0, 0.6, fd)) * breath * u.intensity;
        col = screenBlend(col, fCol, fA);
    }

    // Gold accent — center, warm tone
    {
        float breath = 0.69 + sin(t * 0.262 + 6.0) * 0.09;
        float2 gc = float2(0.478 + cos(t * 0.26) * 0.006,
                           0.445 + sin(t * 0.20) * 0.005);
        float2 gr = float2(0.248, 0.193);
        float gd = length((uv - gc) / gr);
        float gg = softEllipseGlow(uv, gc, gr);
        float3 gCol = mix(rgb(255, 180, 80), rgb(245, 150, 60), smoothstep(0.0, 0.55, gd));
        float gA = gg * mix(0.14, 0.06, smoothstep(0.0, 0.55, gd)) * breath * u.intensity;
        col = screenBlend(col, gCol, gA);
    }

    // Pink highlights — lower left
    {
        float breath = 0.59 + sin(t * 0.196 + 10.0) * 0.09;
        float2 pc = float2(0.30 + sin(t * 0.19) * 0.005,
                           0.55 + cos(t * 0.15) * 0.004);
        float2 pr = float2(0.19, 0.15);
        float pd = length((uv - pc) / pr);
        float pg = softEllipseGlow(uv, pc, pr);
        float3 pCol = mix(rgb(255, 100, 180), rgb(220, 70, 150), smoothstep(0.0, 0.70, pd));
        float pA = pg * mix(0.09, 0.04, smoothstep(0.0, 0.70, pd)) * breath * u.intensity;
        col = screenBlend(col, pCol, pA);
    }

    // ═══════════════════════════════════════════════════
    // AURORA RIBBONS: 9 vertical curtains
    // Each ribbon = tall vertical column of colored light
    // with bright core at ~30% from base, ethereal fade upward
    // Key differences from prior versions:
    //   • Soft edges via smoothstep (no hard if-else cutoff)
    //   • Width-proportional alpha (wider ribbons = brighter)
    //   • Subtle turbulence in drift for organic feel
    // ═══════════════════════════════════════════════════

    // Palette anchors
    float3 c1 = rgb(95, 45, 190);   // Deep violet
    float3 c2 = rgb(210, 60, 160);  // Hot fuchsia
    float3 c3 = rgb(255, 180, 70);  // Warm gold

    float3 ribbonAccum = float3(0.0);

    for (int r = 0; r < 9; r++) {
        AuroraRibbonData rb = ribbons[r];
        float rTime = t * rb.speed + float(r) * 10.0;

        // ── Drift (horizontal sliding) ──
        // Oscillation (±10% viewport) + linear drift + subtle turbulence
        float driftX = sin(rTime * 0.1) * 0.1
                     + rTime * 0.0427 * rb.drift;

        // Ribbon-local x [0..1] (pixel mapped to ribbon space, wrapping)
        float x = fract(uv.x - driftX);

        // Subtle turbulence (organic irregularity, ±2.5% viewport)
        float turbX = sin(x * 11.7 + rTime * 0.1) * 0.0256;
        x = fract(x + turbX);

        // ── Color via cosine interpolation ──
        float rawCycle = sin(rTime * 0.15 + rb.colorOffset) * 0.5 + 0.5;
        float3 ribbonColor;
        if (rawCycle < 0.5) {
            float ct = (1.0 - cos(rawCycle * 2.0 * M_PI_F)) * 0.5;
            ribbonColor = mix(c1, c2, ct);
        } else {
            float ct = (1.0 - cos((rawCycle - 0.5) * 2.0 * M_PI_F)) * 0.5;
            ribbonColor = mix(c2, c3, ct);
        }

        // ── Geometry displacement (6 types, exact React formulas) ──
        float yOffset = 0.0;
        int geomType = rb.geomType;

        if (geomType == 0) {
            // smooth: gentle undulation, 1 cycle
            yOffset = sin(x * M_PI_F * 2.0 + rTime * 0.35) * 0.055
                    + cos(x * M_PI_F * 2.0 - rTime * 0.1)  * 0.025;
        } else if (geomType == 1) {
            // fold: accordion pleats, 3 cycles, upward
            float foldPhase = x * M_PI_F * 6.0 + rTime * 0.12;
            float fold = sin(foldPhase);
            yOffset = -abs(fold) * 0.03;
        } else if (geomType == 2) {
            // spiral: corkscrew, 2 cycles
            float spiralT = x * M_PI_F * 4.0 + rTime * 0.25;
            yOffset = sin(spiralT) * 0.065;
        } else if (geomType == 3) {
            // s-curve: wide meandering S
            yOffset = sin(x * M_PI_F * 2.0 + rTime * 0.22) * 0.09;
        } else if (geomType == 4) {
            // drape: hanging catenary (always pushes down)
            yOffset = abs(sin(x * M_PI_F * 2.0 + rTime * 0.09)) * 0.11;
        } else {
            // ripple: high-freq detail + slow undulation
            yOffset = sin(x * M_PI_F * 10.0 - rTime * 0.7) * 0.018
                    + sin(x * M_PI_F * 4.0  + rTime * 0.2)  * 0.025;
        }

        // ── Vertical positioning ──
        float ribbonY = rb.baseHeight + yOffset;

        // Dynamic segment height — varies along x for organic breathing
        float heightNoise = sin(x * M_PI_F * 4.0 + rTime * 0.7) * 0.4
                          + cos(x * M_PI_F * 2.0 - rTime * 0.2) * 0.3 + 0.3;
        float segH = (0.26 + heightNoise * 0.11) * (1.0 - rb.depth * 0.3);

        float topY = ribbonY - segH;

        // ── SOFT EDGES: smoothstep boundaries instead of hard if-else ──
        // Softening zone ~0.008 UV ≈ CSS blur(0.8px) equivalent
        float softZone = 0.008;
        float inBottom = smoothstep(ribbonY + softZone, ribbonY - softZone, uv.y);
        float inTop    = smoothstep(topY - softZone,    topY + softZone,    uv.y);
        float inRibbon = inBottom * inTop;

        if (inRibbon > 0.001) {
            // Normalized vertical position (0=base, 1=top)
            float vt = saturate((ribbonY - uv.y) / segH);

            // 5-stop vertical gradient (aurora curtain profile)
            float gradAlpha;
            float3 gradColor = auroraVerticalGradient(vt, ribbonColor, gradAlpha);

            // Traveling shimmer: 12 spatial cycles, flowing at ribbon speed
            float shimmer = 0.85 + (sin(x * 12.0 - rTime * rb.flowSpeed) * 0.5 + 0.5) * 0.35;

            // Width-proportional alpha: wider ribbons have more overlapping
            // React segments → more accumulated brightness
            // Formula: 0.018 per segment × (width/0.01 × 14) overlap ≈ width × 25.2
            float depthFade = 1.0 - rb.depth * 0.5;
            float alpha = rb.width * 30.0 * depthFade * gradAlpha * shimmer * inRibbon;

            // Additive accumulation (matches React's globalCompositeOperation='lighter')
            ribbonAccum += gradColor * alpha;
        }
    }

    // Canvas compositing: clamp accumulated ribbons × 0.95 opacity, screen blend
    ribbonAccum = clamp(ribbonAccum * 0.95, 0.0, 1.0);
    col = screenBlend(col, ribbonAccum, 1.0);

    // ═══════════════════════════════════════════════════
    // Bottom Volumetric Glow (from canvas)
    // React: linear gradient from bottom to 60% height
    // rgb(120,60,200) at alpha 0.01, screen blend
    // ═══════════════════════════════════════════════════
    {
        float botGlow = smoothstep(0.6, 1.0, uv.y);
        col = screenBlend(col, rgb(120, 60, 200), botGlow * 0.01 * u.intensity);
    }

    // ═══════════════════════════════════════════════════
    // Soft Volumetric Center
    // React: ellipse 52%×42% at (50%,46%), screen blend
    // rgb(200,160,240) at alpha 0.022
    // ═══════════════════════════════════════════════════
    {
        float2 vc = float2(0.5, 0.46);
        float2 vr = float2(0.26, 0.21);
        float vd = length((uv - vc) / vr);
        float vg = 1.0 - smoothstep(0.0, 1.0, vd);
        vg = vg * vg; // Squared for soft falloff
        float3 vCol = mix(rgb(200, 160, 240), rgb(180, 140, 220), smoothstep(0.0, 0.6, vd));
        float vA = vg * mix(0.022, 0.01, smoothstep(0.0, 0.6, vd)) * u.intensity;
        col = screenBlend(col, vCol, vA);
    }

    // ═══════════════════════════════════════════════════
    // Edge Vignette (elliptical 6-stop darkening)
    // React: ellipse 90%×76%, transparent center → rgba(2,1,6,0.7) edges
    // Normal blend (darkens edges, not screen)
    // ═══════════════════════════════════════════════════
    {
        float vigDist = length((uv - 0.5) / float2(0.45, 0.38));
        float vigA;
        if (vigDist < 0.32) {
            vigA = 0.0; // Center untouched
        } else if (vigDist < 0.54) {
            vigA = smoothstep(0.32, 0.54, vigDist) * 0.12;
        } else if (vigDist < 0.72) {
            vigA = mix(0.12, 0.28, (vigDist - 0.54) / 0.18);
        } else if (vigDist < 0.87) {
            vigA = mix(0.28, 0.5, (vigDist - 0.72) / 0.15);
        } else {
            vigA = mix(0.5, 0.7, saturate((vigDist - 0.87) / 0.13));
        }
        float3 vigCol = mix(rgb(6, 4, 16), rgb(2, 1, 6), smoothstep(0.54, 1.0, vigDist));
        col = mix(col, vigCol, vigA * u.intensity);
    }

    // ═══════════════════════════════════════════════════
    // Central Clarity (subtle warm lavender screen boost)
    // React: ellipse 66%×56% at (50%,47%), screen blend
    // rgb(230,210,250) at alpha 0.016
    // ═══════════════════════════════════════════════════
    {
        float2 cc = float2(0.5, 0.47);
        float2 cr = float2(0.33, 0.28);
        float cd = length((uv - cc) / cr);
        float cg = 1.0 - smoothstep(0.0, 1.0, cd);
        cg = cg * cg; // Squared
        float3 cCol = mix(rgb(230, 210, 250), rgb(210, 190, 240), smoothstep(0.0, 0.48, cd));
        float cA = cg * mix(0.016, 0.008, smoothstep(0.0, 0.48, cd)) * u.intensity;
        col = screenBlend(col, cCol, cA);
    }

    // Final alpha for compositing with star layer
    float alpha = saturate(length(col) * 5.0 + 0.35);
    return float4(col, alpha);
}
