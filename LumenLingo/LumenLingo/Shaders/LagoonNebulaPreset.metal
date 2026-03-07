#include <metal_stdlib>
#include "CosmicNoise.h"
using namespace metal;

// ============================================================
// MARK: - Lagoon Nebula Background  (NGC 6523 — JWST Edition)
//
// Faithful port of React LagoonNebula.jsx visual quality.
//
// Layers (bottom → top):
//   1. Deep void base (#020103)
//   2. 4 atmospheric colour regions (vibrant screen-blended ellipses)
//   3. 45 animated gas cloud particles (detail layer)
//   4. Bok globule depth shading (multiply darkening)
//   5. Opaque output (α = 1)
//
// Stars: CosmicStars.metal (additive blending — needs dark bg)
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

    // ================================================================
    // 1.  DEEP VOID BASE
    //     Nearly black with warm/cool diagonal tint.
    // ================================================================
    float3 col = rgb(2, 1, 3);
    {
        // Warm tint (upper-left) — React: rgba(30,10,5, 0.3) at 20%,80%
        float warmD = length(uv - float2(0.20, 0.80));
        col += rgb(30, 10, 5) * exp(-warmD * warmD * 1.5) * 0.25 * u.intensity;

        // Cool tint (upper-right) — React: rgba(10,20,40, 0.4) at 80%,20%
        float coolD = length(uv - float2(0.80, 0.20));
        col += rgb(10, 20, 40) * exp(-coolD * coolD * 1.5) * 0.30 * u.intensity;
    }

    // ================================================================
    // 2.  ATMOSPHERIC COLOUR REGIONS  (4 vibrant elliptical glows)
    //     React: screen blend, blur 65-110px, peak opacity 0.24-0.36.
    //     Metal: Gaussian ellipses, multi-stop color, screen blend.
    //     Reduced ~50% vs React (stars use additive, need some dark).
    // ================================================================

    // A. RUST/ORANGE DUST BANK — upper-left quadrant
    //    React: ellipse 55%×45% at 25%,25%, peak 0.35, blur 90px
    {
        float2 nd = (uv - float2(0.25, 0.25)) / float2(0.55, 0.45);
        float  d = length(nd);
        float  g = exp(-d * d * 1.2);
        float3 c = mix(rgb(120, 40, 18),
                       mix(rgb(160, 60, 28), rgb(200, 85, 40),
                           smoothstep(0.6, 0.0, d)),
                       smoothstep(1.0, 0.2, d));
        col = screenBlend(col, c, g * 0.18 * u.intensity);
    }

    // B. GOLDEN ILLUMINATED FRONTIER — centre diagonal
    //    React: ellipse 48%×42% at 38%,40%, peak 0.32, blur 70px
    {
        float2 nd = (uv - float2(0.38, 0.40)) / float2(0.48, 0.42);
        float  d = length(nd);
        float  g = exp(-d * d * 1.4);
        float3 c = mix(rgb(200, 120, 45),
                       mix(rgb(235, 150, 65), rgb(255, 180, 80),
                           smoothstep(0.5, 0.0, d)),
                       smoothstep(1.0, 0.2, d));
        col = screenBlend(col, c, g * 0.16 * u.intensity);
    }

    // C. ELECTRIC CYAN IONIZATION — lower-right
    //    React: ellipse 62%×52% at 75%,75%, peak 0.36, blur 110px
    {
        float2 nd = (uv - float2(0.75, 0.75)) / float2(0.62, 0.52);
        float  d = length(nd);
        float  g = exp(-d * d * 1.0);
        float3 c = mix(rgb(35, 140, 190),
                       mix(rgb(60, 180, 230), rgb(100, 220, 255),
                           smoothstep(0.6, 0.0, d)),
                       smoothstep(1.0, 0.2, d));
        col = screenBlend(col, c, g * 0.20 * u.intensity);
    }

    // D. DEEP TEAL ACCENT — centre-right
    //    React: ellipse 42%×38% at 58%,52%, peak 0.24, blur 65px
    {
        float2 nd = (uv - float2(0.58, 0.52)) / float2(0.42, 0.38);
        float  d = length(nd);
        float  g = exp(-d * d * 1.6);
        float3 c = mix(rgb(15, 95, 125), rgb(20, 130, 160),
                       smoothstep(1.0, 0.0, d));
        col = screenBlend(col, c, g * 0.12 * u.intensity);
    }

    // ================================================================
    // 3.  GAS CLOUD PARTICLES  (45 — the MAIN nebula visual)
    //
    //     45 large animated gas blobs composited source-over,
    //     then screen-blended at 0.9 opacity.
    //     Rust/gold upper-left, cyan/teal lower-right, golden frontier.
    //     These create the rich multicoloured cloud layers.
    // ================================================================
    {
        float4 gasCanvas = float4(0.0);

        for (int i = 0; i < 45; i++) {
            float rx = seededRandom(i * 49, 1);
            float ry = seededRandom(i * 49, 2);
            float ridgePos = rx + ry;

            float3 pColor;
            float  pSize;
            float  pAlpha;

            if (ridgePos < 0.8) {
                // DUST — golden / burnt-orange / deep-rust
                float cc = seededRandom(i * 49, 3);
                pColor = cc > 0.6 ? rgb(255, 180, 80) :
                         cc > 0.3 ? rgb(220, 100, 50) :
                                    rgb(180, 60, 40);
                pSize  = 0.45 + seededRandom(i * 49, 4) * 0.875;
                pAlpha = 0.06 + seededRandom(i * 49, 5) * 0.09;
            } else if (ridgePos > 1.2) {
                // IONIZED — electric cyan / deep teal
                float cc = seededRandom(i * 49, 3);
                pColor = cc > 0.5 ? rgb(100, 220, 255) : rgb(20, 100, 120);
                pSize  = 0.325 + seededRandom(i * 49, 4) * 0.60;
                pAlpha = 0.05 + seededRandom(i * 49, 5) * 0.07;
            } else {
                // FRONTIER — bright golden ridge
                pColor = rgb(255, 180, 80);
                pSize  = 0.275 + seededRandom(i * 49, 4) * 0.45;
                pAlpha = 0.08 + seededRandom(i * 49, 5) * 0.11;
            }

            // Animation — drift, noise, velocity, pulse
            float phase = seededRandom(i * 49, 8) * 6.283185;
            float gdX = sin(t * 0.05) * 0.05;
            float gdY = cos(t * 0.04) * 0.0375;
            float noiseX = sin(t * 0.1 + ry * 1.7) * 0.05;
            float noiseY = cos(t * 0.1 + rx * 1.7) * 0.05;
            float vx = (seededRandom(i * 49, 6) - 0.5) * 0.01 * t;
            float vy = (seededRandom(i * 49, 7) - 0.5) * 0.01 * t;

            float pulse = sin(t * 0.2 + phase);
            float sz    = pSize * (1.0 + pulse * 0.15);
            float alpha = pAlpha * u.intensity * (1.0 + pulse * 0.2);

            float2 pos = float2(rx + gdX + noiseX + vx,
                                ry + gdY + noiseY + vy);
            float2 diff = uv - pos;
            diff = diff - round(diff);
            float d = length(diff) / sz;

            if (d < 1.0) {
                // CSS 4-stop radial gradient (piecewise-linear)
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

        // Screen blend gas canvas at 0.9 opacity
        if (gasCanvas.a > 0.001) {
            float3 gasColor = gasCanvas.rgb / gasCanvas.a;
            col = screenBlend(col, gasColor, gasCanvas.a * 0.9);
        }
    }

    // ================================================================
    // 4.  BOK GLOBULES  (dark dust lanes — multiply darkening)
    //     React: radial-gradient at 40%,40% (edges dark),
    //            ellipse 30%×10% dust lane at 50%,50% @ 0.4 opacity,
    //            multiply blend, blur 40px
    // ================================================================
    {
        // Radial darkening from centre at 40%,40%
        float d1 = length(uv - float2(0.40, 0.40));
        float bok1 = smoothstep(0.40, 1.0, d1);
        col *= 1.0 - bok1 * 0.20;

        // Horizontal dust lane at 50%,50%
        float2 lane = (uv - float2(0.50, 0.50)) / float2(0.30, 0.10);
        float bok2 = exp(-dot(lane, lane) * 1.5);
        col *= 1.0 - bok2 * 0.25;
    }

    // ================================================================
    // Output — always opaque
    // ================================================================
    return float4(col, 1.0);
}
