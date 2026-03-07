#include <metal_stdlib>
#include "CosmicNoise.h"
using namespace metal;

// ============================================================
// MARK: - Spiral Halo Galaxy Background
//
// Lagoon-inspired volumetric approach adapted for spiral galaxy:
//   1. Deep void with breathing warm/cool tint
//   2. 4 atmospheric arm colour regions (independent drift)
//   3. 45 animated gas cloud particles following spiral structure
//   4. Warm central core with multiple glow layers
//   5. Inner indigo halo + arm wisps
//   6. Warped FBM volumetric texture
//   7. Dark dust lanes
//   8. Opaque output
// ============================================================

vertex float4 spiralHaloBgVertex(uint vid [[vertex_id]]) {
    float2 pos;
    pos.x = (vid == 1) ? 3.0 : -1.0;
    pos.y = (vid == 2) ? 3.0 : -1.0;
    return float4(pos, 0.0, 1.0);
}

fragment float4 spiralHaloBgFragment(
    float4 position [[position]],
    constant CosmicUniforms& u [[buffer(0)]]
) {
    float2 uv = position.xy / u.resolution;
    float2 centered = uv - 0.5;
    float dist = length(centered);
    float angle = atan2(centered.y, centered.x);
    float t = u.time * u.speed;
    float intensity = u.intensity;
    float speedAmp = 1.0 + max(u.speed - 1.0, 0.0) * 0.4;

    // ================================================================
    // 1.  DEEP VOID BASE — asymmetric warm/cool tint
    // ================================================================
    float3 col = rgb(4, 3, 12);
    {
        float bx = sin(t * 0.05) * 0.03 + sin(t * 0.15) * 0.008;
        float by = cos(t * 0.04) * 0.025 + cos(t * 0.11) * 0.006;

        float warmD = length(uv - float2(0.35 + bx, 0.55 - by));
        col += rgb(18, 10, 35) * exp(-warmD * warmD * 1.2) * 0.30 * intensity;

        float coolD = length(uv - float2(0.65 - bx * 0.7, 0.40 + by * 1.1));
        col += rgb(10, 15, 35) * exp(-coolD * coolD * 1.3) * 0.25 * intensity;
    }

    // ================================================================
    // 2.  ATMOSPHERIC ARM COLOUR REGIONS (4 spiral arm zones)
    //     Each region drifts independently for 3D depth.
    //     Positioned along spiral arm paths, rotate with galaxy.
    // ================================================================
    {
        float rotation = t * 0.035;
        float ca = cos(rotation);
        float sa = sin(rotation);

        // A. ARM 1 — Steel blue nebulosity (upper-right arc)
        {
            float2 drift = float2(sin(t * 0.06) * 0.025 + sin(t * 0.17) * 0.007,
                                  cos(t * 0.05) * 0.020 + cos(t * 0.13) * 0.005);
            float2 armC = float2(0.62 + drift.x, 0.38 - drift.y);
            float2 rc = float2(0.5 + (armC.x - 0.5) * ca - (armC.y - 0.5) * sa,
                               0.5 + (armC.x - 0.5) * sa + (armC.y - 0.5) * ca);
            float2 nd = (uv - rc) / float2(0.35, 0.18);
            float d = length(nd);
            float g = exp(-d * d * 0.7);
            float3 s1 = rgb(110, 150, 225);
            float3 s2 = rgb(90, 130, 210);
            float3 c = mix(s1, s2, saturate(d / 0.45));
            float a = d < 0.45 ? mix(0.28f, 0.14f, d / 0.45f)
                                : mix(0.14f, 0.0f, saturate((d - 0.45) / 0.25));
            col = screenBlend(col, c, g * a * 0.55 * intensity);
        }

        // B. ARM 2 — Violet-blue nebulosity (lower-left arc)
        {
            float2 drift = float2(cos(t * 0.055) * 0.022 + sin(t * 0.14) * 0.006,
                                  sin(t * 0.048) * 0.018 + cos(t * 0.12) * 0.005);
            float2 armC = float2(0.38 - drift.x, 0.62 + drift.y);
            float2 rc = float2(0.5 + (armC.x - 0.5) * ca - (armC.y - 0.5) * sa,
                               0.5 + (armC.x - 0.5) * sa + (armC.y - 0.5) * ca);
            float2 nd = (uv - rc) / float2(0.32, 0.16);
            float d = length(nd);
            float g = exp(-d * d * 0.8);
            float3 s1 = rgb(130, 120, 220);
            float3 s2 = rgb(100, 90, 200);
            float3 c = mix(s1, s2, saturate(d / 0.42));
            float a = d < 0.42 ? mix(0.25f, 0.12f, d / 0.42f)
                                : mix(0.12f, 0.0f, saturate((d - 0.42) / 0.22));
            col = screenBlend(col, c, g * a * 0.50 * intensity);
        }

        // C. ARM 3 — Pale cyan nebulosity (upper-left arc)
        {
            float2 drift = float2(sin(t * 0.065) * 0.020 + cos(t * 0.16) * 0.006,
                                  cos(t * 0.055) * 0.016 + sin(t * 0.13) * 0.004);
            float2 armC = float2(0.38 + drift.x, 0.38 - drift.y);
            float2 rc = float2(0.5 + (armC.x - 0.5) * ca - (armC.y - 0.5) * sa,
                               0.5 + (armC.x - 0.5) * sa + (armC.y - 0.5) * ca);
            float2 nd = (uv - rc) / float2(0.30, 0.15);
            float d = length(nd);
            float g = exp(-d * d * 0.75);
            float3 s1 = rgb(120, 170, 230);
            float3 s2 = rgb(95, 145, 215);
            float3 c = mix(s1, s2, saturate(d / 0.40));
            float a = d < 0.40 ? mix(0.22f, 0.10f, d / 0.40f)
                                : mix(0.10f, 0.0f, saturate((d - 0.40) / 0.20));
            col = screenBlend(col, c, g * a * 0.48 * intensity);
        }

        // D. ARM 4 — Warm indigo nebulosity (lower-right arc)
        {
            float2 drift = float2(cos(t * 0.058) * 0.018 + sin(t * 0.15) * 0.005,
                                  sin(t * 0.050) * 0.015 + cos(t * 0.11) * 0.004);
            float2 armC = float2(0.62 - drift.x, 0.62 + drift.y);
            float2 rc = float2(0.5 + (armC.x - 0.5) * ca - (armC.y - 0.5) * sa,
                               0.5 + (armC.x - 0.5) * sa + (armC.y - 0.5) * ca);
            float2 nd = (uv - rc) / float2(0.28, 0.14);
            float d = length(nd);
            float g = exp(-d * d * 0.85);
            float3 s1 = rgb(115, 100, 210);
            float3 s2 = rgb(85, 75, 185);
            float3 c = mix(s1, s2, saturate(d / 0.38));
            float a = d < 0.38 ? mix(0.20f, 0.09f, d / 0.38f)
                                : mix(0.09f, 0.0f, saturate((d - 0.38) / 0.20));
            col = screenBlend(col, c, g * a * 0.45 * intensity);
        }

        // E. INTER-ARM WISPS — faint connections between arms
        {
            float2 drift = float2(sin(t * 0.04) * 0.015, cos(t * 0.035) * 0.012);
            float2 wc = float2(0.50 + drift.x, 0.50 + drift.y);
            float2 nd = (uv - wc) / float2(0.50, 0.50);
            float d = length(nd);
            float g = exp(-d * d * 0.4);
            col = screenBlend(col, rgb(100, 110, 190), g * 0.04 * intensity);
        }
    }

    // ================================================================
    // 3.  GAS CLOUD PARTICLES (45 — the MAIN nebula visual)
    //     Positioned along spiral arm structure with deep parallax.
    //     Multi-harmonic liquid flow, turbulence.
    //     (Lagoon-quality particle system adapted for spiral galaxy)
    // ================================================================
    {
        float refWidth = 1170.0;
        float sizeScale = clamp(refWidth / u.resolution.x, 0.35, 1.0);
        float rotation = t * 0.035;

        float camDX = sin(t * 0.07) * 60.0 / refWidth * sizeScale * speedAmp
                    + sin(t * 0.19) * 12.0 / refWidth * sizeScale * speedAmp;
        float camDY = cos(t * 0.055) * 50.0 / refWidth * sizeScale * speedAmp
                    + cos(t * 0.15) * 10.0 / refWidth * sizeScale * speedAmp;

        float4 gasCanvas = float4(0.0);

        for (int i = 0; i < 45; i++) {
            float rx = seededRandom(i * 53, 1);
            float ry = seededRandom(i * 53, 2);
            float armRoll = seededRandom(i * 53, 8);

            // Place ~60% of particles along spiral arms
            if (armRoll < 0.60) {
                int arm = int(armRoll / 0.15);
                float spiralDist = 0.08 + seededRandom(i * 53, 9) * 0.28;
                float armAngle = float(arm) * M_PI_F * 0.5;
                float theta = log(spiralDist / 0.05) / 0.5 + armAngle;
                float spread = (seededRandom(i * 53, 10) - 0.5) * 0.12;
                rx = 0.5 + cos(theta + rotation) * spiralDist
                   + cos(theta + M_PI_F * 0.5) * spread;
                ry = 0.5 + sin(theta + rotation) * spiralDist
                   + sin(theta + M_PI_F * 0.5) * spread;
            }

            float pDepth = seededRandom(i * 53, 3);
            float ridgeDist = length(float2(rx - 0.5, ry - 0.5));
            float3 pColor;
            float pSizePx;
            float pAlpha;
            float cc = seededRandom(i * 53, 4);

            if (ridgeDist < 0.10) {
                pColor = cc > 0.5 ? rgb(255, 245, 220) : rgb(240, 225, 200);
                pSizePx = 100.0 + seededRandom(i * 53, 5) * 200.0;
                pAlpha = 0.06 + seededRandom(i * 53, 6) * 0.08;
            } else if (ridgeDist < 0.25) {
                if (cc > 0.6)      pColor = rgb(130, 160, 240);
                else if (cc > 0.3) pColor = rgb(110, 130, 220);
                else               pColor = rgb(120, 100, 210);
                pSizePx = 140.0 + seededRandom(i * 53, 5) * 280.0;
                pAlpha = 0.05 + seededRandom(i * 53, 6) * 0.09;
            } else {
                pColor = cc > 0.5 ? rgb(100, 130, 210) : rgb(80, 100, 180);
                pSizePx = 110.0 + seededRandom(i * 53, 5) * 220.0;
                pAlpha = 0.04 + seededRandom(i * 53, 6) * 0.06;
            }

            float pSize = (pSizePx / refWidth) * sizeScale;
            float phase = seededRandom(i * 53, 7) * 6.283185;
            float parallaxMul = 0.25 + pDepth * 0.75;

            float gdX = camDX * parallaxMul;
            float gdY = camDY * parallaxMul;

            float flowFreq = 0.15 + seededRandom(i * 53, 11) * 0.30;
            float flowTime = t * flowFreq + phase;
            float flowBase = (40.0 + seededRandom(i * 53, 12) * 30.0)
                           / refWidth * sizeScale * parallaxMul * speedAmp;
            float flowX = sin(flowTime) * flowBase
                        + sin(flowTime * 1.5 + 1.2) * flowBase * 0.18;
            float flowY = cos(flowTime * 0.6) * flowBase * 0.75
                        + cos(flowTime * 1.1 + 2.3) * flowBase * 0.13;

            float turbAmp = 45.0 / refWidth * sizeScale * parallaxMul * speedAmp;
            float noiseX = sin(t * 0.13 + ry * 3.5 + phase) * turbAmp
                         + sin(t * 0.35 + ry * 2.0 + phase * 1.6) * turbAmp * 0.18;
            float noiseY = cos(t * 0.10 + rx * 3.5 + phase * 1.2) * turbAmp
                         + cos(t * 0.28 + rx * 2.3 + phase * 2.0) * turbAmp * 0.15;

            float velScale = 3.5 / refWidth * sizeScale;
            float vx = (seededRandom(i * 53, 13) - 0.5) * velScale * t;
            float vy = (seededRandom(i * 53, 14) - 0.5) * velScale * t;

            float pulseFreq = 0.12 + seededRandom(i * 53, 15) * 0.22;
            float pulsePhase = phase + seededRandom(i * 53, 16) * 6.283;
            float pulse = sin(t * pulseFreq + pulsePhase);
            float intBoost = 0.7 + intensity * 0.6;
            float sz    = pSize * (1.0 + pulse * 0.10);
            float alpha = pAlpha * intBoost * (1.0 + pulse * 0.15);

            float2 pos = float2(rx + gdX + flowX + noiseX + vx,
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
            float3 gasCol = gasCanvas.rgb / max(gasCanvas.a, 0.001);
            float  gasOp  = gasCanvas.a * 0.85;
            col = screenBlend(col, gasCol, gasOp);
        }
    }

    // ================================================================
    // 4.  CENTRAL CORE — compact warm-gold glow (no white blob)
    // ================================================================
    {
        float emVar = 0.88 + 0.12 * sin(t * 0.14);

        // Tight hot point — warm gold, NOT white
        float hotGlow = gaussian2D(uv, float2(0.5, 0.5), float2(0.012, 0.012));
        col = additiveBlend(col, rgb(255, 235, 190), hotGlow * 0.06 * emVar * intensity);

        // Warm secondary — small and golden
        float goldGlow = gaussian2D(uv, float2(0.5, 0.5), float2(0.028, 0.028));
        col = screenBlend(col, rgb(255, 225, 170), goldGlow * 0.04 * intensity);

        // Broad subtle amber haze — barely visible
        float hazeGlow = gaussian2D(uv, float2(0.5, 0.5), float2(0.055, 0.055));
        col = screenBlend(col, rgb(240, 220, 180), hazeGlow * 0.025 * intensity);
    }

    // ================================================================
    // 5.  INNER INDIGO HALO — broad purple ring
    // ================================================================
    {
        float haloGlow = gaussian2D(uv, float2(0.5, 0.5), float2(0.14, 0.14));
        col = screenBlend(col, rgb(90, 70, 180), haloGlow * 0.09 * intensity);

        float outerGlow = gaussian2D(uv, float2(0.5, 0.5), float2(0.22, 0.22));
        col = screenBlend(col, rgb(60, 50, 140), outerGlow * 0.04 * intensity);
    }

    // ================================================================
    // 6.  WARPED FBM — volumetric texture across galaxy
    // ================================================================
    {
        float3 gasP = float3(centered * 4.0, t * 0.04);
        float gasNoise = warpedFBM(gasP, t * 0.6, 5);
        float gasDensity = pow(gasNoise * 0.5 + 0.5, 2.0);

        float armMask = 1.0 - smoothstep(0.05, 0.35, dist);
        col = screenBlend(col, rgb(120, 130, 210), gasDensity * armMask * 0.08 * intensity);

        float outerDensity = pow(gasNoise * 0.5 + 0.5, 3.0);
        float outerMask = smoothstep(0.15, 0.40, dist) * (1.0 - smoothstep(0.40, 0.55, dist));
        col = screenBlend(col, rgb(100, 115, 195), outerDensity * outerMask * 0.05 * intensity);
    }

    // ================================================================
    // 7.  DARK DUST LANES — inter-arm darkening
    // ================================================================
    {
        float rotation = t * 0.035;
        float laneAngle1 = rotation + M_PI_F * 0.25;
        float angleDiff1 = abs(fmod(angle - laneAngle1 + M_PI_F * 3.0, M_PI_F * 2.0) - M_PI_F);
        float lane1 = smoothstep(0.3, 0.0, angleDiff1)
                     * smoothstep(0.05, 0.15, dist)
                     * smoothstep(0.40, 0.25, dist);
        col *= 1.0 - lane1 * 0.15;

        float laneAngle2 = rotation + M_PI_F * 1.25;
        float angleDiff2 = abs(fmod(angle - laneAngle2 + M_PI_F * 3.0, M_PI_F * 2.0) - M_PI_F);
        float lane2 = smoothstep(0.3, 0.0, angleDiff2)
                     * smoothstep(0.05, 0.15, dist)
                     * smoothstep(0.40, 0.25, dist);
        col *= 1.0 - lane2 * 0.12;
    }

    // ================================================================
    // Output — always opaque
    // ================================================================
    return float4(col, 1.0);
}
