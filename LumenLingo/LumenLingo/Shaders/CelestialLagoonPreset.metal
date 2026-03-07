#include <metal_stdlib>
#include "CosmicNoise.h"
using namespace metal;

// ============================================================
// MARK: - Celestial Lagoon Nebula Background
//
// Deep-ocean cosmic atmosphere with flowing aqua/cyan/teal clouds.
// Architecture mirrors Lagoon Nebula (discrete particles + glows,
// NO FBM/procedural noise) but with a turquoise-dominant palette.
//
// Layers (bottom → top):
//   1. Deep ocean void base with breathing cool/warm tint
//   2. 4 atmospheric colour regions (breathing + temperature cycling)
//   3. 55 animated gas cloud particles (main nebula visual)
//   4. Stellar nursery emission (cyan glow from star-forming core)
//   5. Bok globule depth shading
//   6. Opaque output
//
// Controls: speed → all animation rates; intensity → all luminance
// ============================================================

vertex float4 celestialBgVertex(uint vid [[vertex_id]]) {
    float2 pos;
    pos.x = (vid == 1) ? 3.0 : -1.0;
    pos.y = (vid == 2) ? 3.0 : -1.0;
    return float4(pos, 0.0, 1.0);
}

fragment float4 celestialBgFragment(
    float4 position [[position]],
    constant CosmicUniforms& u [[buffer(0)]]
) {
    float2 uv = position.xy / u.resolution;
    float t = u.time * u.speed;
    float intensity = u.intensity;
    float speedAmp = 1.0 + max(u.speed - 1.0, 0.0) * 0.4;

    // ================================================================
    // 1.  DEEP OCEAN VOID BASE — breathing cool/warm diagonal tint
    // ================================================================
    float3 col = rgb(2, 4, 10);
    {
        float bx = sin(t * 0.10) * 0.03;
        float by = cos(t * 0.08) * 0.02;

        // Cool teal corner — upper-left
        float coolD = length(uv - float2(0.25 + bx, 0.20 - by));
        col += rgb(8, 30, 45) * exp(-coolD * coolD * 1.4) * 0.30 * intensity;

        // Warm cyan-gold corner — lower-right
        float warmD = length(uv - float2(0.80 - bx, 0.75 + by));
        col += rgb(15, 35, 30) * exp(-warmD * warmD * 1.4) * 0.25 * intensity;
    }

    // ================================================================
    // 2.  ATMOSPHERIC COLOUR REGIONS (breathing + colour temperature)
    //     Centers drift gently; colours cycle warm↔cool over time.
    // ================================================================
    {
        float breathe  = sin(t * 0.13) * 0.025;
        float breathe2 = cos(t * 0.10) * 0.020;
        float tempCycle = sin(t * 0.05) * 0.5 + 0.5;

        // A. AQUA CLOUD BANK — upper-left
        {
            float2 center = float2(0.28 + breathe, 0.30 - breathe2);
            float2 nd = (uv - center) / float2(0.55, 0.48);
            float  d  = length(nd);
            float  g  = exp(-d * d * 0.6);

            float3 s1 = mix(rgb(25, 200, 210), rgb(35, 210, 220), tempCycle * 0.3);
            float3 s2 = mix(rgb(20, 165, 180), rgb(28, 175, 190), tempCycle * 0.3);
            float3 s3 = mix(rgb(15, 130, 150), rgb(20, 140, 160), tempCycle * 0.3);
            float3 c; float a;
            if (d < 0.40) {
                c = mix(s1, s2, d / 0.40); a = mix(0.32f, 0.18f, d / 0.40f);
            } else if (d < 0.60) {
                c = mix(s2, s3, (d - 0.40) / 0.20); a = mix(0.18f, 0.07f, (d - 0.40f) / 0.20f);
            } else {
                c = s3; a = mix(0.07f, 0.0f, saturate((d - 0.60) / 0.20));
            }
            col = screenBlend(col, c, g * a * 0.65 * intensity);
        }

        // B. CYAN ILLUMINATED CURRENT — centre diagonal
        {
            float2 center = float2(0.42 - breathe2, 0.45 + breathe * 0.7);
            float2 nd = (uv - center) / float2(0.50, 0.44);
            float  d  = length(nd);
            float  g  = exp(-d * d * 0.70);

            float3 s1 = mix(rgb(100, 235, 240), rgb(120, 245, 250), tempCycle * 0.2);
            float3 s2 = mix(rgb(70, 200, 215), rgb(85, 215, 225), tempCycle * 0.2);
            float3 c; float a;
            if (d < 0.45) {
                c = mix(s1, s2, d / 0.45); a = mix(0.30f, 0.16f, d / 0.45f);
            } else if (d < 0.65) {
                c = mix(s2, rgb(50, 170, 190), (d - 0.45) / 0.20);
                a = mix(0.16f, 0.06f, (d - 0.45f) / 0.20f);
            } else {
                c = rgb(50, 170, 190); a = mix(0.06f, 0.0f, saturate((d - 0.65) / 0.15));
            }
            col = screenBlend(col, c, g * a * 0.68 * intensity);
        }

        // C. TURQUOISE GLOW — lower-right
        {
            float2 center = float2(0.72 - breathe, 0.70 + breathe2);
            float2 nd = (uv - center) / float2(0.58, 0.50);
            float  d  = length(nd);
            float  g  = exp(-d * d * 0.50);

            float3 s1 = mix(rgb(60, 220, 210), rgb(80, 235, 225), tempCycle * 0.2);
            float3 c; float a;
            if (d < 0.42) {
                c = mix(s1, rgb(40, 180, 180), d / 0.42);
                a = mix(0.34f, 0.20f, d / 0.42f);
            } else if (d < 0.62) {
                c = mix(rgb(40, 180, 180), rgb(25, 145, 155), (d - 0.42) / 0.20);
                a = mix(0.20f, 0.08f, (d - 0.42f) / 0.20f);
            } else {
                c = rgb(25, 145, 155);
                a = mix(0.08f, 0.0f, saturate((d - 0.62) / 0.18));
            }
            col = screenBlend(col, c, g * a * 0.65 * intensity);
        }

        // D. SUBTLE PINK-LAVENDER ACCENT — upper-right
        {
            float2 center = float2(0.65 + breathe2, 0.30 - breathe);
            float2 nd = (uv - center) / float2(0.38, 0.34);
            float  d  = length(nd);
            float  g  = exp(-d * d * 0.9);
            float3 c; float a;
            if (d < 0.50) {
                c = mix(rgb(160, 130, 180), rgb(140, 110, 155), d / 0.50);
                a = mix(0.18f, 0.08f, d / 0.50f);
            } else {
                c = rgb(140, 110, 155);
                a = mix(0.08f, 0.0f, saturate((d - 0.50) / 0.22));
            }
            col = screenBlend(col, c, g * a * 0.50 * intensity);
        }
    }

    // ================================================================
    // 3.  GAS CLOUD PARTICLES  (55 — the MAIN nebula visual)
    //     Deep parallax, multi-harmonic liquid flow, turbulence.
    //     Aqua/cyan/teal/turquoise palette matching React.
    // ================================================================
    {
        float refWidth = 1170.0;
        float sizeScale = clamp(refWidth / u.resolution.x, 0.35, 1.0);

        // Global camera drift — smooth cinematic sweeps
        float camDX = sin(t * 0.06) * 60.0 / refWidth * sizeScale * speedAmp
                    + sin(t * 0.17) * 13.0 / refWidth * sizeScale * speedAmp;
        float camDY = cos(t * 0.05) * 48.0 / refWidth * sizeScale * speedAmp
                    + cos(t * 0.14) * 10.0 / refWidth * sizeScale * speedAmp;

        float4 gasCanvas = float4(0.0);

        for (int i = 0; i < 55; i++) {
            float rx = seededRandom(i * 53, 1);
            float ry = seededRandom(i * 53, 2);

            float3 pColor;
            float  pSizePx;
            float  pAlpha;
            float pDepth = seededRandom(i * 53, 9);

            // Color palette: aqua/cyan/teal/turquoise/mint
            float cc = seededRandom(i * 53, 3);
            if (cc < 0.22) {
                // Bright aqua
                pColor = rgb(15, 200, 230);
                pSizePx = 150.0 + seededRandom(i * 53, 4) * 300.0;
                pAlpha = 0.05 + seededRandom(i * 53, 5) * 0.08;
            } else if (cc < 0.42) {
                // Cyan
                pColor = rgb(40, 180, 200);
                pSizePx = 140.0 + seededRandom(i * 53, 4) * 280.0;
                pAlpha = 0.05 + seededRandom(i * 53, 5) * 0.07;
            } else if (cc < 0.58) {
                // Teal
                pColor = rgb(30, 150, 180);
                pSizePx = 130.0 + seededRandom(i * 53, 4) * 260.0;
                pAlpha = 0.04 + seededRandom(i * 53, 5) * 0.07;
            } else if (cc < 0.72) {
                // Mint cyan
                pColor = rgb(70, 235, 220);
                pSizePx = 160.0 + seededRandom(i * 53, 4) * 320.0;
                pAlpha = 0.05 + seededRandom(i * 53, 5) * 0.09;
            } else if (cc < 0.85) {
                // Deep teal
                pColor = rgb(50, 160, 148);
                pSizePx = 120.0 + seededRandom(i * 53, 4) * 220.0;
                pAlpha = 0.04 + seededRandom(i * 53, 5) * 0.06;
            } else {
                // Turquoise
                pColor = rgb(45, 215, 200);
                pSizePx = 155.0 + seededRandom(i * 53, 4) * 310.0;
                pAlpha = 0.05 + seededRandom(i * 53, 5) * 0.08;
            }

            float pSize = (pSizePx / refWidth) * sizeScale;

            // --- Dynamic 3D Movement ---
            float phase  = seededRandom(i * 53, 8) * 6.283185;
            float parallaxMul = 0.25 + pDepth * 0.75;

            // A. Parallax camera drift
            float gdX = camDX * parallaxMul;
            float gdY = camDY * parallaxMul;

            // B. Multi-harmonic liquid flow (oceanic, flowing)
            float flowFreq = 0.14 + seededRandom(i * 53, 10) * 0.30;
            float flowTime = t * flowFreq + phase;
            float flowBase = (40.0 + seededRandom(i * 53, 11) * 30.0)
                           / refWidth * sizeScale * parallaxMul * speedAmp;
            float flowX = sin(flowTime) * flowBase
                        + sin(flowTime * 1.5 + 1.4) * flowBase * 0.20;
            float flowY = cos(flowTime * 0.60) * flowBase * 0.75
                        + cos(flowTime * 1.15 + 2.3) * flowBase * 0.15;

            // C. Smooth turbulence (gentle ocean currents)
            float turbAmp = 45.0 / refWidth * sizeScale * parallaxMul * speedAmp;
            float noiseX = sin(t * 0.12 + ry * 3.8 + phase) * turbAmp
                         + sin(t * 0.30 + ry * 2.2 + phase * 1.6) * turbAmp * 0.18;
            float noiseY = cos(t * 0.10 + rx * 3.5 + phase * 1.3) * turbAmp
                         + cos(t * 0.26 + rx * 2.5 + phase * 2.0) * turbAmp * 0.16;

            // D. Constant velocity drift
            float velScale = 3.5 / refWidth * sizeScale;
            float vx = (seededRandom(i * 53, 6) - 0.5) * velScale * t;
            float vy = (seededRandom(i * 53, 7) - 0.5) * velScale * t;

            // E. Size & alpha pulsation
            float pulse = sin(t * 0.25 + phase);
            float intBoost = 0.7 + intensity * 0.6;
            float sz    = pSize * (1.0 + pulse * 0.18);
            float alpha = pAlpha * intBoost * (1.0 + pulse * 0.25);

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
            float  gasOpacity = gasCanvas.a * 0.85;
            col = screenBlend(col, gasColor, gasOpacity);
        }
    }

    // ================================================================
    // 4.  STELLAR NURSERY EMISSION (pulsing cyan radiance)
    // ================================================================
    {
        float emPulse = 0.6 + 0.4 * sin(t * 0.25);

        // Primary nursery — broad cyan radiance
        float2 nursery = float2(0.45, 0.48);
        float nd = length(uv - nursery);
        float outerGlow = exp(-nd * nd * 5.5);
        col = additiveBlend(col, rgb(120, 240, 235), outerGlow * 0.04 * emPulse * intensity);

        // Hot inner core — white-cyan
        float coreGlow = exp(-nd * nd * 30.0);
        col = additiveBlend(col, rgb(200, 255, 250), coreGlow * 0.035 * (0.7 + emPulse * 0.3) * intensity);

        // Secondary emission knot (asymmetry)
        float2 knot2 = float2(0.60, 0.38);
        float kd = length(uv - knot2);
        float kGlow = exp(-kd * kd * 12.0);
        col = additiveBlend(col, rgb(180, 220, 255), kGlow * 0.025 * emPulse * intensity);
    }

    // ================================================================
    // 5.  BOK GLOBULES (dark dust lanes)
    // ================================================================
    {
        float d1 = length(uv - float2(0.38, 0.42));
        float bok1 = smoothstep(0.35, 1.0, d1);
        col *= 1.0 - bok1 * 0.20;

        float2 lane = (uv - float2(0.52, 0.50)) / float2(0.28, 0.10);
        float bok2 = exp(-dot(lane, lane) * 1.5);
        col *= 1.0 - bok2 * 0.22;
    }

    // ================================================================
    // Output — always opaque
    // ================================================================
    return float4(col, 1.0);
}
