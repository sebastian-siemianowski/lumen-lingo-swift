#include <metal_stdlib>
#include "CosmicNoise.h"
using namespace metal;

// ============================================================
// MARK: - Lagoon Nebula Background  (NGC 6523 — JWST Cinematic)
//
// Cinematic cosmic experience with deep parallax, flowing nebula
// clouds, luminous filaments, volumetric light, and stellar
// nursery emission. Every element responds to speed & intensity.
//
// Layers (bottom → top):
//   1. Deep void base with breathing warm/cool tint
//   2. 4 atmospheric colour regions (breathing + colour cycling)
//   3. 12 nebula filaments (elongated particles — structural depth)
//   4. 55 animated gas cloud particles (main nebula visual)
//   5. Stellar nursery emission (pulsing radiance)
//   6. Volumetric light rays (god-rays from golden frontier)
//   7. Bok globule depth shading
//   8. Opaque output (α = 1)
//
// Controls: speed → all animation rates; intensity → all luminance
// Stars: CosmicStars.metal (additive — needs dark bg)
// Post:  CosmicPostProcess.metal (vignette + grading)
// ============================================================

vertex float4 lagoonBgVertex(uint vid [[vertex_id]]) {
    float2 pos;
    pos.x = (vid == 1) ? 3.0 : -1.0;
    pos.y = (vid == 2) ? 3.0 : -1.0;
    return float4(pos, 0.0, 1.0);
}

fragment float4 lagoonBgFragment(
    float4 position [[position]],
    constant CosmicUniforms& u [[buffer(0)]]
) {
    float2 uv = position.xy / u.resolution;
    float t = u.time * u.speed;
    float intensity = u.intensity;
    // Speed-driven amplitude boost: at speed=2 movement is 1.4× larger
    float speedAmp = 1.0 + max(u.speed - 1.0, 0.0) * 0.4;

    // ================================================================
    // 1.  DEEP VOID BASE — complex multi-axis drift (NO breathing)
    // ================================================================
    float3 col = rgb(2, 1, 3);
    {
        // Lissajous figure drift instead of symmetric breathing
        float bx = sin(t * 0.06) * 0.04 + sin(t * 0.17) * 0.012;
        float by = cos(t * 0.05) * 0.03 + cos(t * 0.13) * 0.010;

        float warmD = length(uv - float2(0.20 + bx, 0.80 - by));
        col += rgb(30, 10, 5) * exp(-warmD * warmD * 1.4) * 0.28 * intensity;

        float coolD = length(uv - float2(0.80 - bx * 0.8, 0.20 + by * 1.2));
        col += rgb(10, 20, 40) * exp(-coolD * coolD * 1.4) * 0.32 * intensity;
    }

    // ================================================================
    // 2.  ATMOSPHERIC COLOUR REGIONS (independent multi-axis drift)
    //     Each region drifts on its own Lissajous path + color shift.
    //     No uniform breathing — each moves independently for 3D depth.
    // ================================================================
    {
        float tempCycle = sin(t * 0.06) * 0.5 + 0.5; // 0..1 warm↔cool

        // A. RUST/ORANGE DUST BANK — upper-left (slow figure-8)
        {
            float2 drift = float2(sin(t * 0.07) * 0.03 + sin(t * 0.19) * 0.008,
                                  cos(t * 0.06) * 0.025 + cos(t * 0.15) * 0.007);
            float2 center = float2(0.25 + drift.x, 0.25 - drift.y);
            float2 nd = (uv - center) / float2(0.55, 0.45);
            float  d  = length(nd);
            float  g  = exp(-d * d * 0.6);

            float3 s1 = mix(rgb(200, 85, 40), rgb(200, 100, 80), tempCycle * 0.3);
            float3 s2 = mix(rgb(160, 60, 28), rgb(170, 70, 50), tempCycle * 0.3);
            float3 s3 = mix(rgb(120, 40, 18), rgb(130, 50, 35), tempCycle * 0.3);
            float3 c; float a;
            if (d < 0.40) {
                c = mix(s1, s2, d / 0.40); a = mix(0.38f, 0.22f, d / 0.40f);
            } else if (d < 0.60) {
                c = mix(s2, s3, (d - 0.40) / 0.20); a = mix(0.22f, 0.09f, (d - 0.40f) / 0.20f);
            } else {
                c = s3; a = mix(0.09f, 0.0f, saturate((d - 0.60) / 0.20));
            }
            col = screenBlend(col, c, g * a * 0.70 * intensity);
        }

        // B. GOLDEN ILLUMINATED FRONTIER — centre diagonal (elliptical orbit)
        {
            float2 drift = float2(cos(t * 0.05) * 0.028 + sin(t * 0.14) * 0.009,
                                  sin(t * 0.045) * 0.022 + cos(t * 0.12) * 0.007);
            float2 center = float2(0.38 - drift.x, 0.40 + drift.y);
            float2 nd = (uv - center) / float2(0.48, 0.42);
            float  d  = length(nd);
            float  g  = exp(-d * d * 0.75);

            float3 s1 = mix(rgb(255, 180, 80), rgb(255, 200, 110), tempCycle * 0.2);
            float3 s2 = mix(rgb(235, 150, 65), rgb(240, 165, 85), tempCycle * 0.2);
            float3 c; float a;
            if (d < 0.45) {
                c = mix(s1, s2, d / 0.45); a = mix(0.35f, 0.20f, d / 0.45f);
            } else if (d < 0.65) {
                c = mix(s2, rgb(200, 120, 45), (d - 0.45) / 0.20); a = mix(0.20f, 0.08f, (d - 0.45f) / 0.20f);
            } else {
                c = rgb(200, 120, 45); a = mix(0.08f, 0.0f, saturate((d - 0.65) / 0.15));
            }
            col = screenBlend(col, c, g * a * 0.72 * intensity);
        }

        // C. ELECTRIC CYAN IONIZATION — lower-right (gentle arc)
        {
            float2 drift = float2(sin(t * 0.055) * 0.032 + cos(t * 0.16) * 0.010,
                                  cos(t * 0.048) * 0.026 + sin(t * 0.13) * 0.008);
            float2 center = float2(0.75 - drift.x, 0.75 + drift.y);
            float2 nd = (uv - center) / float2(0.62, 0.52);
            float  d  = length(nd);
            float  g  = exp(-d * d * 0.45);

            float3 s1 = mix(rgb(100, 220, 255), rgb(120, 230, 245), tempCycle * 0.2);
            float3 c; float a;
            if (d < 0.42) {
                c = mix(s1, rgb(60, 180, 230), d / 0.42); a = mix(0.38f, 0.24f, d / 0.42f);
            } else if (d < 0.62) {
                c = mix(rgb(60, 180, 230), rgb(35, 140, 190), (d - 0.42) / 0.20);
                a = mix(0.24f, 0.10f, (d - 0.42f) / 0.20f);
            } else {
                c = rgb(35, 140, 190); a = mix(0.10f, 0.0f, saturate((d - 0.62) / 0.18));
            }
            col = screenBlend(col, c, g * a * 0.70 * intensity);
        }

        // D. DEEP TEAL ACCENT — centre-right (lazy pendulum)
        {
            float2 drift = float2(cos(t * 0.065) * 0.024 + sin(t * 0.18) * 0.007,
                                  sin(t * 0.055) * 0.020 + cos(t * 0.14) * 0.006);
            float2 center = float2(0.58 + drift.x, 0.52 - drift.y);
            float2 nd = (uv - center) / float2(0.42, 0.38);
            float  d  = length(nd);
            float  g  = exp(-d * d * 0.9);
            float3 c; float a;
            if (d < 0.50) {
                c = mix(rgb(20, 130, 160), rgb(15, 95, 125), d / 0.50);
                a = mix(0.26f, 0.12f, d / 0.50f);
            } else {
                c = rgb(15, 95, 125); a = mix(0.12f, 0.0f, saturate((d - 0.50) / 0.22));
            }
            col = screenBlend(col, c, g * a * 0.70 * intensity);
        }
    }

    // ================================================================
    // 3.  GAS CLOUD PARTICLES  (55 — the MAIN nebula visual)
    //     Deep parallax, multi-harmonic liquid flow, turbulence.
    //     Dramatically responsive to speed and intensity.
    // ================================================================
    {
        float refWidth = 1170.0;
        float sizeScale = clamp(refWidth / u.resolution.x, 0.35, 1.0);

        // Global camera drift — large, smooth cinematic sweeps
        float camDX = sin(t * 0.08) * 70.0 / refWidth * sizeScale * speedAmp
                    + sin(t * 0.21) * 15.0 / refWidth * sizeScale * speedAmp;
        float camDY = cos(t * 0.06) * 55.0 / refWidth * sizeScale * speedAmp
                    + cos(t * 0.17) * 12.0 / refWidth * sizeScale * speedAmp;

        float4 gasCanvas = float4(0.0);

        for (int i = 0; i < 55; i++) {
            float rx = seededRandom(i * 49, 1);
            float ry = seededRandom(i * 49, 2);
            float ridgePos = rx + ry;

            float3 pColor;
            float  pSizePx;
            float  pAlpha;
            float pDepth = seededRandom(i * 49, 9);

            if (ridgePos < 0.8) {
                float cc = seededRandom(i * 49, 3);
                pColor = cc > 0.6 ? rgb(255, 180, 80)
                       : cc > 0.3 ? rgb(220, 100, 50)
                                  : rgb(180, 60, 40);
                pSizePx = 180.0 + seededRandom(i * 49, 4) * 350.0;
                pAlpha  = 0.06 + seededRandom(i * 49, 5) * 0.09;
            } else if (ridgePos > 1.2) {
                float cc = seededRandom(i * 49, 3);
                pColor = cc > 0.5 ? rgb(100, 220, 255)
                                  : rgb(20, 100, 120);
                pSizePx = 130.0 + seededRandom(i * 49, 4) * 240.0;
                pAlpha  = 0.05 + seededRandom(i * 49, 5) * 0.07;
            } else {
                pColor = rgb(255, 180, 80);
                pSizePx = 110.0 + seededRandom(i * 49, 4) * 180.0;
                pAlpha  = 0.08 + seededRandom(i * 49, 5) * 0.11;
            }

            float pSize = (pSizePx / refWidth) * sizeScale;

            // --- Dynamic 3D Movement ---
            float phase  = seededRandom(i * 49, 8) * 6.283185;
            float parallaxMul = 0.25 + pDepth * 0.75;

            // A. Parallax camera drift
            float gdX = camDX * parallaxMul;
            float gdY = camDY * parallaxMul;

            // B. Multi-harmonic liquid flow (smooth, organic)
            float flowFreq = 0.18 + seededRandom(i * 49, 10) * 0.35;
            float flowTime = t * flowFreq + phase;
            float flowBase = (45.0 + seededRandom(i * 49, 11) * 35.0)
                           / refWidth * sizeScale * parallaxMul * speedAmp;
            float flowX = sin(flowTime) * flowBase
                        + sin(flowTime * 1.6 + 1.3) * flowBase * 0.2;
            float flowY = cos(flowTime * 0.65) * flowBase * 0.8
                        + cos(flowTime * 1.2 + 2.5) * flowBase * 0.15;

            // C. Smooth turbulence (gentle, natural)
            float turbAmp = 55.0 / refWidth * sizeScale * parallaxMul * speedAmp;
            float noiseX = sin(t * 0.15 + ry * 4.0 + phase) * turbAmp
                         + sin(t * 0.38 + ry * 2.5 + phase * 1.7) * turbAmp * 0.2;
            float noiseY = cos(t * 0.12 + rx * 4.0 + phase * 1.3) * turbAmp
                         + cos(t * 0.32 + rx * 2.8 + phase * 2.1) * turbAmp * 0.18;

            // D. Constant velocity drift
            float velScale = 4.5 / refWidth * sizeScale;
            float vx = (seededRandom(i * 49, 6) - 0.5) * velScale * t;
            float vy = (seededRandom(i * 49, 7) - 0.5) * velScale * t;

            // E. Size & alpha modulation — phase-staggered (NOT uniform breathing)
            //    Each particle pulses at its own rate/phase so they don't sync
            float pulseFreq = 0.15 + seededRandom(i * 49, 12) * 0.25; // 0.15–0.40 (varied)
            float pulsePhase = phase + seededRandom(i * 49, 13) * 6.283;
            float pulse = sin(t * pulseFreq + pulsePhase);
            float intBoost = 0.7 + intensity * 0.6;
            float sz    = pSize * (1.0 + pulse * 0.10);  // ±10% size (was ±20%)
            float alpha = pAlpha * intBoost * (1.0 + pulse * 0.15); // ±15% alpha (was ±30%)

            float2 pos  = float2(rx + gdX + flowX + noiseX + vx,
                                 ry + gdY + flowY + noiseY + vy);
            float2 diff = uv - pos;
            diff = diff - round(diff);
            float d = length(diff) / sz;

            if (d < 1.0) {
                float gradAlpha;
                if      (d < 0.4) gradAlpha = mix(1.0f, 0.4f, d / 0.4f);
                else if (d < 0.7) gradAlpha = mix(0.4f, 0.1f, (d - 0.4f) / 0.3f);
                else              gradAlpha = mix(0.1f, 0.0f, (d - 0.7f) / 0.3f);
                gradAlpha *= alpha;

                float3 srcPremult = pColor * gradAlpha;
                gasCanvas.rgb = srcPremult + gasCanvas.rgb * (1.0 - gradAlpha);
                gasCanvas.a   = gradAlpha  + gasCanvas.a   * (1.0 - gradAlpha);
            }
        }

        if (gasCanvas.a > 0.001) {
            float3 gasColor   = gasCanvas.rgb / max(gasCanvas.a, 0.001);
            float  gasOpacity = gasCanvas.a * 0.9;
            col = screenBlend(col, gasColor, gasOpacity);
        }
    }

    // ================================================================
    // 5.  STELLAR NURSERY EMISSION (slow radiance with subtle variation)
    //     Warm inner glow + secondary emission knot. Intensity-responsive.
    //     Uses very slow, desynchronized modulations — no visible breathing.
    // ================================================================
    {
        // Very slow, gentle luminance variation (period ~40s at speed=1)
        float emVar = 0.85 + 0.15 * sin(t * 0.16);

        // Primary nursery — broad warm radiance
        float2 nursery = float2(0.42, 0.45);
        float nd = length(uv - nursery);
        float outerGlow = exp(-nd * nd * 6.0);
        col = additiveBlend(col, rgb(255, 190, 130), outerGlow * 0.05 * emVar * intensity);

        // Hot inner core — even slower variation
        float coreVar = 0.90 + 0.10 * sin(t * 0.11 + 1.7);
        float coreGlow = exp(-nd * nd * 35.0);
        col = additiveBlend(col, rgb(255, 240, 210), coreGlow * 0.04 * coreVar * intensity);

        // Secondary emission knot — offset phase
        float2 knot2 = float2(0.56, 0.37);
        float kd = length(uv - knot2);
        float kGlow = exp(-kd * kd * 14.0);
        float kVar = 0.80 + 0.20 * sin(t * 0.13 + 3.1);
        col = additiveBlend(col, rgb(200, 160, 255), kGlow * 0.03 * kVar * intensity);
    }

    // ================================================================
    // 6.  BOK GLOBULES (dark dust lanes — multiply darkening)
    // ================================================================
    {
        float d1 = length(uv - float2(0.40, 0.40));
        float bok1 = smoothstep(0.35, 1.0, d1);
        col *= 1.0 - bok1 * 0.25;

        float2 lane = (uv - float2(0.50, 0.50)) / float2(0.30, 0.10);
        float bok2 = exp(-dot(lane, lane) * 1.5);
        col *= 1.0 - bok2 * 0.30;
    }

    // ================================================================
    // Output — always opaque
    // ================================================================
    return float4(col, 1.0);
}
