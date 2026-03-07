#include <metal_stdlib>
#include "CosmicNoise.h"
using namespace metal;

// ============================================================
// MARK: - Lagoon Nebula Background  (NGC 6523 — JWST Edition)
//
// 1:1 port of React LagoonNebula.jsx visual structure.
// NO procedural noise — only discrete particle clouds + CSS-style glows.
//
// Layers (bottom → top):
//   1. Deep void base (#020103) with warm/cool diagonal tint
//   2. 4 atmospheric colour regions (wide Gaussian → simulates CSS blur)
//   3. 45 animated gas cloud particles (the main nebula visual)
//   4. Bok globule depth shading (simple multiply darkening)
//   5. Opaque output (α = 1)
//
// Stars: CosmicStars.metal (additive blending — needs dark bg)
// Post:  CosmicPostProcess.metal (vignette + grading + cinematic overlay)
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
    //     React: radial-gradient at 80%,20% cool + 20%,80% warm
    // ================================================================
    float3 col = rgb(2, 1, 3);
    {
        // Warm tint (lower-left) — React: rgba(30,10,5, 0.3) at 20%,80%
        float warmD = length(uv - float2(0.20, 0.80));
        col += rgb(30, 10, 5) * exp(-warmD * warmD * 1.5) * 0.25 * u.intensity;

        // Cool tint (upper-right) — React: rgba(10,20,40, 0.4) at 80%,20%
        float coolD = length(uv - float2(0.80, 0.20));
        col += rgb(10, 20, 40) * exp(-coolD * coolD * 1.5) * 0.30 * u.intensity;
    }

    // ================================================================
    // 2.  ATMOSPHERIC COLOUR REGIONS  (4 — matching React CSS divs)
    //     React uses CSS radial-gradient + filter:blur(65-110px) + screen.
    //     Metal simulates the heavy blur with wide Gaussians (low exp).
    //     Each region has 3 colour stops matching React exactly.
    //     Opacity ~70% of React CSS values (background must stay dark
    //     enough for additive star blending).
    // ================================================================

    // A. RUST/ORANGE DUST BANK — upper-left quadrant
    //    React: 150%×150% element, ellipse 55%×45% at 25%,25%
    //    Stops: rgba(200,85,40, 0.35), rgba(160,60,28, 0.20), rgba(120,40,18, 0.08)
    //    filter: blur(90px), mixBlendMode: screen
    {
        float2 nd = (uv - float2(0.25, 0.25)) / float2(0.55, 0.45);
        float  d  = length(nd);
        float  g  = exp(-d * d * 0.6);   // wide falloff = simulates blur(90px)

        // 3-stop colour gradient
        float3 c;
        float  a;
        if (d < 0.40) {
            c = mix(rgb(200, 85, 40), rgb(160, 60, 28), d / 0.40);
            a = mix(0.35f, 0.20f, d / 0.40f);
        } else if (d < 0.60) {
            c = mix(rgb(160, 60, 28), rgb(120, 40, 18), (d - 0.40) / 0.20);
            a = mix(0.20f, 0.08f, (d - 0.40f) / 0.20f);
        } else {
            c = rgb(120, 40, 18);
            a = mix(0.08f, 0.0f, saturate((d - 0.60) / 0.20));
        }
        col = screenBlend(col, c, g * a * 0.70 * u.intensity);
    }

    // B. GOLDEN ILLUMINATED FRONTIER — centre diagonal
    //    React: 120%×120% element, ellipse 48%×42% at 38%,40%
    //    Stops: rgba(255,180,80, 0.32), rgba(235,150,65, 0.18), rgba(200,120,45, 0.07)
    //    filter: blur(70px), mixBlendMode: screen
    {
        float2 nd = (uv - float2(0.38, 0.40)) / float2(0.48, 0.42);
        float  d  = length(nd);
        float  g  = exp(-d * d * 0.75);

        float3 c;
        float  a;
        if (d < 0.45) {
            c = mix(rgb(255, 180, 80), rgb(235, 150, 65), d / 0.45);
            a = mix(0.32f, 0.18f, d / 0.45f);
        } else if (d < 0.65) {
            c = mix(rgb(235, 150, 65), rgb(200, 120, 45), (d - 0.45) / 0.20);
            a = mix(0.18f, 0.07f, (d - 0.45f) / 0.20f);
        } else {
            c = rgb(200, 120, 45);
            a = mix(0.07f, 0.0f, saturate((d - 0.65) / 0.15));
        }
        col = screenBlend(col, c, g * a * 0.70 * u.intensity);
    }

    // C. ELECTRIC CYAN IONIZATION — lower-right
    //    React: 150%×150% element, ellipse 62%×52% at 75%,75%
    //    Stops: rgba(100,220,255, 0.36), rgba(60,180,230, 0.22), rgba(35,140,190, 0.09)
    //    filter: blur(110px), mixBlendMode: screen
    {
        float2 nd = (uv - float2(0.75, 0.75)) / float2(0.62, 0.52);
        float  d  = length(nd);
        float  g  = exp(-d * d * 0.45);  // widest = heaviest blur

        float3 c;
        float  a;
        if (d < 0.42) {
            c = mix(rgb(100, 220, 255), rgb(60, 180, 230), d / 0.42);
            a = mix(0.36f, 0.22f, d / 0.42f);
        } else if (d < 0.62) {
            c = mix(rgb(60, 180, 230), rgb(35, 140, 190), (d - 0.42) / 0.20);
            a = mix(0.22f, 0.09f, (d - 0.42f) / 0.20f);
        } else {
            c = rgb(35, 140, 190);
            a = mix(0.09f, 0.0f, saturate((d - 0.62) / 0.18));
        }
        col = screenBlend(col, c, g * a * 0.70 * u.intensity);
    }

    // D. DEEP TEAL ACCENT — centre-right
    //    React: 80%×80% element, ellipse 42%×38% at 58%,52%
    //    Stops: rgba(20,130,160, 0.24), rgba(15,95,125, 0.11)
    //    filter: blur(65px), mixBlendMode: screen
    {
        float2 nd = (uv - float2(0.58, 0.52)) / float2(0.42, 0.38);
        float  d  = length(nd);
        float  g  = exp(-d * d * 0.9);

        float3 c;
        float  a;
        if (d < 0.50) {
            c = mix(rgb(20, 130, 160), rgb(15, 95, 125), d / 0.50);
            a = mix(0.24f, 0.11f, d / 0.50f);
        } else {
            c = rgb(15, 95, 125);
            a = mix(0.11f, 0.0f, saturate((d - 0.50) / 0.22));
        }
        col = screenBlend(col, c, g * a * 0.70 * u.intensity);
    }

    // ================================================================
    // 3.  GAS CLOUD PARTICLES  (45 animated — the MAIN nebula visual)
    //
    //     Discrete blurred particles — no procedural noise.
    //     This is what React draws in JWSTGasCanvas.
    //     Source-over compositing within canvas, then screen blend.
    //     React: filter: blur(3px), mixBlendMode: screen, opacity: 0.9
    //
    //     Particles animate via drift + noise + velocity + pulse.
    //     This creates the visible "3D cloud movement" the user sees.
    // ================================================================
    {
        float refWidth = 1170.0;
        float sizeScale = clamp(refWidth / u.resolution.x, 0.35, 1.0);

        float4 gasCanvas = float4(0.0);

        for (int i = 0; i < 45; i++) {
            float rx = seededRandom(i * 49, 1);
            float ry = seededRandom(i * 49, 2);
            float ridgePos = rx + ry;

            float3 pColor;
            float  pSizePx;
            float  pAlpha;

            if (ridgePos < 0.8) {
                // DUST ZONE — golden / burnt-orange / deep-rust
                float cc = seededRandom(i * 49, 3);
                pColor = cc > 0.6 ? rgb(255, 180, 80)    // golden dust
                       : cc > 0.3 ? rgb(220, 100, 50)    // burnt orange
                                  : rgb(180, 60, 40);    // deep rust
                pSizePx = 180.0 + seededRandom(i * 49, 4) * 350.0;
                pAlpha  = 0.06 + seededRandom(i * 49, 5) * 0.09;
            } else if (ridgePos > 1.2) {
                // IONIZED ZONE — electric cyan / deep teal
                float cc = seededRandom(i * 49, 3);
                pColor = cc > 0.5 ? rgb(100, 220, 255)   // electric cyan
                                  : rgb(20, 100, 120);   // deep teal
                pSizePx = 130.0 + seededRandom(i * 49, 4) * 240.0;
                pAlpha  = 0.05 + seededRandom(i * 49, 5) * 0.07;
            } else {
                // FRONTIER — bright golden ridge
                pColor = rgb(255, 180, 80);
                pSizePx = 110.0 + seededRandom(i * 49, 4) * 180.0;
                pAlpha  = 0.08 + seededRandom(i * 49, 5) * 0.11;
            }

            float pSize = (pSizePx / refWidth) * sizeScale;

            // Animation — drift, noise, velocity, pulse
            // All values match React exactly:
            //   driftX = sin(elapsed * 0.05) * 20
            //   driftY = cos(elapsed * 0.04) * 15
            //   noiseX = sin(elapsed*0.1 + p.y*0.002) * 20
            //   noiseY = cos(elapsed*0.1 + p.x*0.002) * 20
            //   velocity = (rand-0.5)*0.2 * elapsed * 20
            //   pulse = sin(elapsed*0.2 + phase)
            float phase  = seededRandom(i * 49, 8) * 6.283185;

            float driftUV = 20.0 / refWidth * sizeScale;
            float gdX    = sin(t * 0.05) * driftUV;
            float gdY    = cos(t * 0.04) * driftUV * 0.75;

            float noiseUV = 20.0 / refWidth * sizeScale;
            float noiseX = sin(t * 0.1 + ry * 1.7) * noiseUV;
            float noiseY = cos(t * 0.1 + rx * 1.7) * noiseUV;

            float velScale = 4.0 / refWidth * sizeScale;
            float vx = (seededRandom(i * 49, 6) - 0.5) * velScale * t;
            float vy = (seededRandom(i * 49, 7) - 0.5) * velScale * t;

            float pulse = sin(t * 0.2 + phase);
            float sz    = pSize * (1.0 + pulse * 0.15);
            float alpha = pAlpha * u.intensity * (1.0 + pulse * 0.2);

            float2 pos  = float2(rx + gdX + noiseX + vx,
                                 ry + gdY + noiseY + vy);
            float2 diff = uv - pos;
            diff = diff - round(diff);  // toroidal wrapping
            float d = length(diff) / sz;

            if (d < 1.0) {
                // React 4-stop radial gradient:
                //   0%:   rgba(r,g,b, alpha)
                //   40%:  rgba(r,g,b, alpha * 0.4)
                //   70%:  rgba(r,g,b, alpha * 0.1)
                //   100%: rgba(r,g,b, 0)
                float gradAlpha;
                if      (d < 0.4) gradAlpha = mix(1.0f, 0.4f, d / 0.4f);
                else if (d < 0.7) gradAlpha = mix(0.4f, 0.1f, (d - 0.4f) / 0.3f);
                else              gradAlpha = mix(0.1f, 0.0f, (d - 0.7f) / 0.3f);
                gradAlpha *= alpha;

                // Source-over compositing within canvas
                float3 srcPremult = pColor * gradAlpha;
                gasCanvas.rgb = srcPremult + gasCanvas.rgb * (1.0 - gradAlpha);
                gasCanvas.a   = gradAlpha  + gasCanvas.a   * (1.0 - gradAlpha);
            }
        }

        // React: canvas with mixBlendMode='screen', opacity=0.9
        if (gasCanvas.a > 0.001) {
            float3 gasColor   = gasCanvas.rgb / max(gasCanvas.a, 0.001);
            float  gasOpacity = gasCanvas.a * 0.9;
            col = screenBlend(col, gasColor, gasOpacity);
        }
    }

    // ================================================================
    // 4.  BOK GLOBULES  (dark dust lanes — simple multiply darkening)
    //     React: radial-gradient + elliptical gradient, multiply blend,
    //     filter: blur(40px).  Creates dark "negative space".
    //     NO noise modulation — just smooth CSS-like gradients.
    // ================================================================
    {
        // React: radial-gradient(circle at 40%,40%, transparent 0%, transparent 40%, rgba(0,0,0,0.3) 100%)
        float d1 = length(uv - float2(0.40, 0.40));
        float bok1 = smoothstep(0.35, 1.0, d1);   // transparent→dark from centre
        col *= 1.0 - bok1 * 0.25;

        // React: radial-gradient(ellipse 30%×10% at 50%,50%, rgba(0,0,0,0.4) 0%, transparent 60%)
        float2 lane = (uv - float2(0.50, 0.50)) / float2(0.30, 0.10);
        float bok2 = exp(-dot(lane, lane) * 1.5);
        col *= 1.0 - bok2 * 0.30;
    }

    // ================================================================
    // Output — always opaque
    // ================================================================
    return float4(col, 1.0);
}
