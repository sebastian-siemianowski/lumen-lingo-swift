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
        // Warm tint (lower-left) — React: rgba(30,10,5, 0.3) at 20%,80%
        float warmD = length(uv - float2(0.20, 0.80));
        col += rgb(30, 10, 5) * exp(-warmD * warmD * 1.5) * 0.20 * u.intensity;

        // Cool tint (upper-right) — React: rgba(10,20,40, 0.4) at 80%,20%
        float coolD = length(uv - float2(0.80, 0.20));
        col += rgb(10, 20, 40) * exp(-coolD * coolD * 1.5) * 0.25 * u.intensity;
    }

    // ================================================================
    // 2.  ATMOSPHERIC COLOUR REGIONS  (4 subtle background tints)
    //     These provide large-scale colour zones. Gas particles on top
    //     create the actual multicoloured cloud structure.
    //     Reduced to ~25% of React values to keep background dark
    //     for additive star blending AND to let gas particles pop.
    // ================================================================

    // A. RUST/ORANGE DUST BANK — upper-left quadrant
    {
        float2 nd = (uv - float2(0.25, 0.25)) / float2(0.55, 0.45);
        float  d = length(nd);
        float  g = exp(-d * d * 1.2);
        float3 c = mix(rgb(120, 40, 18), rgb(200, 85, 40),
                       smoothstep(1.0, 0.0, d));
        col = screenBlend(col, c, g * 0.08 * u.intensity);
    }

    // B. GOLDEN ILLUMINATED FRONTIER — centre diagonal
    {
        float2 nd = (uv - float2(0.38, 0.40)) / float2(0.48, 0.42);
        float  d = length(nd);
        float  g = exp(-d * d * 1.4);
        float3 c = mix(rgb(200, 120, 45), rgb(255, 180, 80),
                       smoothstep(1.0, 0.0, d));
        col = screenBlend(col, c, g * 0.07 * u.intensity);
    }

    // C. ELECTRIC CYAN IONIZATION — lower-right
    {
        float2 nd = (uv - float2(0.75, 0.75)) / float2(0.62, 0.52);
        float  d = length(nd);
        float  g = exp(-d * d * 1.0);
        float3 c = mix(rgb(35, 140, 190), rgb(100, 220, 255),
                       smoothstep(1.0, 0.0, d));
        col = screenBlend(col, c, g * 0.09 * u.intensity);
    }

    // D. DEEP TEAL ACCENT — centre-right
    {
        float2 nd = (uv - float2(0.58, 0.52)) / float2(0.42, 0.38);
        float  d = length(nd);
        float  g = exp(-d * d * 1.6);
        float3 c = mix(rgb(15, 95, 125), rgb(20, 130, 160),
                       smoothstep(1.0, 0.0, d));
        col = screenBlend(col, c, g * 0.05 * u.intensity);
    }

    // ================================================================
    // 3.  GAS CLOUD PARTICLES  (45 — the MAIN nebula visual)
    //
    //     45 animated gas blobs create the multicoloured cloud layers.
    //     Each particle is individually visible as a coloured cloud.
    //     Source-over compositing within canvas, then screen blend.
    //
    //     CRITICAL: Particle sizes scale with device width so clouds
    //     look like individual blobs, not one merged glow.
    //     React uses pixel sizes: mobile 180-530px, desktop 150-450px.
    //     Metal uses UV: divide pixel sizes by resolution width.
    // ================================================================
    {
        // Scale factor: sizes are calibrated for 1170px (iPhone 3x).
        // On wider screens, particles should be proportionally smaller
        // so they don't merge into one uniform blob.
        float refWidth = 1170.0;
        float sizeScale = refWidth / u.resolution.x;
        // Clamp so particles don't get absurdly small on massive screens
        sizeScale = clamp(sizeScale, 0.35, 1.0);

        float4 gasCanvas = float4(0.0);

        for (int i = 0; i < 45; i++) {
            float rx = seededRandom(i * 49, 1);
            float ry = seededRandom(i * 49, 2);
            float ridgePos = rx + ry;

            float3 pColor;
            float  pSizePx;  // size in reference pixels
            float  pAlpha;

            if (ridgePos < 0.8) {
                // DUST — golden / burnt-orange / deep-rust (upper-left)
                float cc = seededRandom(i * 49, 3);
                pColor = cc > 0.6 ? rgb(255, 180, 80) :
                         cc > 0.3 ? rgb(220, 100, 50) :
                                    rgb(180, 60, 40);
                // React mobile: 180 + rand * 350
                pSizePx = 180.0 + seededRandom(i * 49, 4) * 350.0;
                pAlpha  = 0.06 + seededRandom(i * 49, 5) * 0.09;
            } else if (ridgePos > 1.2) {
                // IONIZED — electric cyan / deep teal (lower-right)
                float cc = seededRandom(i * 49, 3);
                pColor = cc > 0.5 ? rgb(100, 220, 255) : rgb(20, 100, 120);
                // React mobile: 130 + rand * 240
                pSizePx = 130.0 + seededRandom(i * 49, 4) * 240.0;
                pAlpha  = 0.05 + seededRandom(i * 49, 5) * 0.07;
            } else {
                // FRONTIER — bright golden ridge (centre)
                pColor = rgb(255, 180, 80);
                // React mobile: 110 + rand * 180
                pSizePx = 110.0 + seededRandom(i * 49, 4) * 180.0;
                pAlpha  = 0.08 + seededRandom(i * 49, 5) * 0.11;
            }

            // Convert pixel size to UV, scaled for device
            float pSize = (pSizePx / refWidth) * sizeScale;

            // Animation — drift, noise, velocity, pulse (in UV space)
            float phase = seededRandom(i * 49, 8) * 6.283185;
            // React drift: 20px, 15px — convert to UV at reference width
            float driftUV = 20.0 / refWidth * sizeScale;
            float gdX = sin(t * 0.05) * driftUV;
            float gdY = cos(t * 0.04) * driftUV * 0.75;
            // React noise: 20px
            float noiseUV = 20.0 / refWidth * sizeScale;
            float noiseX = sin(t * 0.1 + ry * 1.7) * noiseUV;
            float noiseY = cos(t * 0.1 + rx * 1.7) * noiseUV;
            // React velocity: (rand-0.5) * 0.2 * elapsed * 20
            float velScale = 4.0 / refWidth * sizeScale;
            float vx = (seededRandom(i * 49, 6) - 0.5) * velScale * t;
            float vy = (seededRandom(i * 49, 7) - 0.5) * velScale * t;

            float pulse = sin(t * 0.2 + phase);
            float sz    = pSize * (1.0 + pulse * 0.15);
            float alpha = pAlpha * u.intensity * (1.0 + pulse * 0.2);

            float2 pos = float2(rx + gdX + noiseX + vx,
                                ry + gdY + noiseY + vy);
            float2 diff = uv - pos;
            diff = diff - round(diff); // toroidal wrapping
            float d = length(diff) / sz;

            if (d < 1.0) {
                // React 4-stop radial gradient:
                //   0%:  rgba(r,g,b, alpha)
                //  40%:  rgba(r,g,b, alpha * 0.4)
                //  70%:  rgba(r,g,b, alpha * 0.1)
                // 100%:  rgba(r,g,b, 0)
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
        // Screen blend gas canvas onto background
        if (gasCanvas.a > 0.001) {
            float3 gasColor = gasCanvas.rgb / max(gasCanvas.a, 0.001);
            float  gasOpacity = gasCanvas.a * 0.9;
            col = screenBlend(col, gasColor, gasOpacity);
        }
    }

    // ================================================================
    // 4.  BOK GLOBULES  (dark dust lanes — multiply darkening)
    //     React: radial-gradient + elliptical dust lane, multiply blend
    //     Creates dark "negative space" that breaks up the uniform glow.
    // ================================================================
    {
        // Radial darkening from centre outward at 40%,40%
        float d1 = length(uv - float2(0.40, 0.40));
        float bok1 = smoothstep(0.40, 1.0, d1);
        col *= 1.0 - bok1 * 0.22;

        // Elliptical dust lane at 50%,50% — horizontal band
        float2 lane = (uv - float2(0.50, 0.50)) / float2(0.30, 0.10);
        float bok2 = exp(-dot(lane, lane) * 1.5);
        col *= 1.0 - bok2 * 0.30;
    }

    // ================================================================
    // Output — always opaque
    // ================================================================
    return float4(col, 1.0);
}
