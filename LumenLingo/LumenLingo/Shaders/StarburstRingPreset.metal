#include <metal_stdlib>
#include "CosmicNoise.h"
using namespace metal;

// ============================================================
// MARK: - Starburst Ring Galaxy Background  (v3 — React-faithful)
//
// Key corrections from v2:
//  * Circle-based void gradient using pixel-space distance (CSS match)
//  * Nebula clouds VASTLY enlarged (80vw×70vw etc) to match React
//  * Gas rotation uses elapsed * 0.004 * p.speed (was 75× too fast)
//  * Source-over compositing within canvas (was pure additive)
//  * Particle sizes normalised by 800 (React's minDim/800 factor)
//  * Accretion uses globalRot * orbSpeed * 0.8 (React match)
//  * Vignette matches React CSS exactly
// ============================================================

vertex float4 starburstBgVertex(uint vid [[vertex_id]]) {
    float2 pos;
    pos.x = (vid == 1) ? 3.0 : -1.0;
    pos.y = (vid == 2) ? 3.0 : -1.0;
    return float4(pos, 0.0, 1.0);
}

fragment float4 starburstBgFragment(
    float4 position [[position]],
    constant CosmicUniforms& u [[buffer(0)]],
    constant GasCloudData* ringGas [[buffer(1)]],
    constant GasCloudData* accretion [[buffer(2)]]
) {
    float2 uv = position.xy / u.resolution;
    float2 centered = uv - 0.5;
    float minDim = min(u.resolution.x, u.resolution.y);
    float2 isotropic = (centered * u.resolution) / minDim;
    float dist = length(isotropic);
    float angle = atan2(isotropic.y, isotropic.x);

    // Pixel-space distance for CSS circle gradient mapping
    float2 pixOff = centered * u.resolution;
    float pixDist = length(pixOff);
    float cornerDist = length(u.resolution * 0.5); // farthest corner
    float gd = pixDist / cornerDist;               // 0..1 = CSS % stops

    float elapsed = u.time * u.speed;

    // ================================================================
    // 1. VOID — CSS circle gradient (pixel-proportional stops)
    //    rgb(0,0,0) 0%, rgb(0,0,0) 11%, rgba(25,10,50,0.4) 14%,
    //    rgb(20,5,49) 30%, rgb(14,6,42) 60%, rgb(4,2,14) 100%
    //    Then explicitly reinforce the black pupil + transition ring.
    // ================================================================
    float3 col = float3(0.0);

    if (gd >= 0.11) {
        if (gd < 0.14) {
            float f = smoothstep(0.11, 0.14, gd);
            col = rgb(25, 10, 50) * (f * 0.4);
        } else if (gd < 0.30) {
            float f = smoothstep(0.14, 0.30, gd);
            col = mix(rgb(25, 10, 50) * 0.4, rgb(20, 5, 49), f);
        } else if (gd < 0.60) {
            float f = smoothstep(0.30, 0.60, gd);
            col = mix(rgb(20, 5, 49), rgb(14, 6, 42), f);
        } else {
            float f = smoothstep(0.60, 1.0, gd);
            col = mix(rgb(14, 6, 42), rgb(4, 2, 14), f);
        }
    }

    // Harder abyss pupil + explicit 11%..14% purple transition ring.
    {
        float pupilRound = 1.0 - smoothstep(0.102, 0.112, gd);
        float pupilEllipse = dist;
        float pupilOval = 1.0 - smoothstep(0.112, 0.145, pupilEllipse);
        float pupil = max(pupilRound, pupilOval);
        col = mix(col, float3(0.0), pupil);

        float transitionBand = smoothstep(0.110, 0.124, gd) * (1.0 - smoothstep(0.142, 0.162, gd));
        float transitionShape = gaussian(gd - 0.135, 0.016);
        float3 transitionColor = mix(rgb(25, 10, 50), rgb(60, 24, 115), 0.35);
        col = screenBlend(col, transitionColor, transitionBand * transitionShape * 0.18 * u.intensity);

        float abyssLip = smoothstep(0.118, 0.148, gd) * (1.0 - smoothstep(0.165, 0.205, gd));
        col = multiplyBlend(col, rgb(8, 3, 20), abyssLip * 0.22 * u.intensity);

        float innerShadowShell = smoothstep(0.135, 0.175, pupilEllipse) * (1.0 - smoothstep(0.215, 0.290, pupilEllipse));
        col = multiplyBlend(col, rgb(9, 4, 22), innerShadowShell * 0.28 * u.intensity);

        float coreVoid = 1.0 - smoothstep(0.0, 0.20, dist);
        col = mix(col, float3(0.0), coreVoid * 0.84);
    }

    // ================================================================
    // 2. ATMOSPHERIC WASH — radial-gradient(circle, rgba(125,44,255,0.04)
    //    0%, transparent 60%)  screen blend
    // ================================================================
    {
        float wd = gd / 0.60;
        float wg = max(0.0, 1.0 - wd);
        wg *= wg;
        col = screenBlend(col, rgb(125, 44, 255), wg * 0.04 * u.intensity);
    }

    // ================================================================
    // 3. NEBULA CLOUDS — React uses huge blurred divs (60-90 vw)
    //    wrapped in opacity-70 parent, each screen-blended.
    //    Here we push further toward the reference image with more
    //    colour variety, stronger opacity, and richer deformation.
    // ================================================================
    {
        float po = 0.70; // parent opacity

        // ── IRIS MICRO-FIBERS ──
        // Dozens of bright radial streaks radiating outward from
        // the pupil edge, like muscle fibers of a real eye iris.
        {
            float irisInner = 0.11;
            float irisOuter = 0.48;
            float irisBand = smoothstep(irisInner, irisInner + 0.02, dist)
                           * (1.0 - smoothstep(irisOuter - 0.05, irisOuter, dist));

            if (irisBand > 0.001) {
                float irisR = (dist - irisInner) / (irisOuter - irisInner);
                float a = angle;

                // Layer 1: ~36 fibers (primary)
                float f1 = sin(a * 36.0 + 0.0) * 0.5 + 0.5;
                f1 = smoothstep(0.58, 0.82, f1);

                // Layer 2: ~28 fibers (secondary, offset)
                float f2 = sin(a * 28.0 + 1.7) * 0.5 + 0.5;
                f2 = smoothstep(0.62, 0.86, f2);

                // Layer 3: ~48 very fine fibers
                float f3 = sin(a * 48.0 + 3.1) * 0.5 + 0.5;
                f3 = smoothstep(0.65, 0.88, f3);

                // Layer 4: ~18 broader fibers for variety
                float f4 = sin(a * 18.0 + 5.4) * 0.5 + 0.5;
                f4 = smoothstep(0.50, 0.78, f4);

                // Combine: max blend gives overlapping streaks
                float fibers = max(max(f1, f2), max(f3 * 0.7, f4 * 0.5));

                // Mild angular variation (mostly uniform around the circle)
                float sectorVar = 0.75 + 0.25 * sin(a * 3.0 + 2.1)
                                              * sin(a * 5.0 - 0.8);

                // Radial brightness: peaks just off pupil edge, gentle fade
                float radialFade = (1.0 - irisR * 0.5);
                radialFade *= radialFade;

                // Color: bright white/lavender near pupil, violet outward
                float3 fiberColor = mix(rgb(230, 220, 255), rgb(140, 90, 230), irisR);
                float blueTint = f3 * (1.0 - irisR) * 0.4;
                fiberColor = mix(fiberColor, rgb(220, 225, 255), blueTint);

                float fiberAlpha = fibers * sectorVar * radialFade * irisBand * 0.55;
                col = screenBlend(col, fiberColor, fiberAlpha * u.intensity);

                // Dark gaps between fibers — strong contrast
                float gaps = 1.0 - max(max(f1, f2), f3 * 0.6);
                gaps = smoothstep(0.2, 0.6, gaps);
                float gapDarken = gaps * irisBand * radialFade * 0.25;
                col = multiplyBlend(col, rgb(4, 2, 14), gapDarken * u.intensity);
            }
        }

        // (e) Rose-magenta fog — image-driven extra colour complexity
        {
            float3 nc = rgb(235, 130, 230);
            float2 c2 = float2(0.62, 0.30);
            float2 r2 = float2(0.28, 0.24);
            float2 o = (uv - c2) / r2;
            float a = atan2(o.y, o.x);
            float nd = length(o) + sin(a * 6.0 + 0.9) * 0.06 + sin(a * 11.0 - 1.4) * 0.025;
            if (nd < 1.0) {
                float na = mix(0.10, 0.0, nd);
                na *= (1.0 - nd) * (1.0 - nd);
                col = screenBlend(col, nc, na * 0.78 * u.intensity);
            }
        }

        // (f) Lavender-white mist near the ring for richer perceived depth
        {
            float ringBand = gaussian(dist - 0.37, 0.10) * (1.0 - smoothstep(0.10, 0.22, gd));
            float cloudNoise = 0.5 + 0.5 * sin(angle * 3.0 - dist * 7.0 + elapsed * 0.018);
            float3 nc = mix(rgb(185, 145, 255), rgb(235, 220, 255), cloudNoise);
            col = screenBlend(col, nc, ringBand * 0.14 * u.intensity);
        }

        // (g) Full-field chroma nebula veil — stronger than the React base
        //     because the reference image has much richer visible cloud colour.
        {
            float cloudMask = smoothstep(0.20, 0.38, dist) * (1.0 - smoothstep(1.02, 1.22, dist));

            float cloudA = fbm(float3(isotropic * float2(1.45, 1.10) * 1.55, 11.0 + elapsed * 0.004), 3, 2.0, 0.5) * 0.5 + 0.5;
            float cloudB = fbm(float3((isotropic + float2(0.24, -0.12)) * float2(1.20, 1.55) * 1.40, 23.0 + elapsed * 0.003), 3, 2.0, 0.5) * 0.5 + 0.5;
            float cloudC = 0.5 + 0.5 * sin(isotropic.x * 2.8 - isotropic.y * 2.1 + elapsed * 0.010 + cloudA * 2.4);

            float leftField = gaussian2D(uv, float2(0.21, 0.50), float2(0.30, 0.26));
            float upperRightField = gaussian2D(uv, float2(0.77, 0.28), float2(0.28, 0.24));
            float lowerField = gaussian2D(uv, float2(0.44, 0.78), float2(0.34, 0.22));
            float fieldBias = 0.42 + leftField * 0.55 + upperRightField * 0.48 + lowerField * 0.32;

            float vapor = smoothstep(0.50, 0.86, cloudA) * 0.50
                        + smoothstep(0.54, 0.88, cloudB) * 0.36
                        + smoothstep(0.58, 0.90, cloudC) * 0.28;

            float magentaMix = smoothstep(0.46, 0.80, cloudB);
            float cyanMix = smoothstep(0.62, 0.90, cloudC) * 0.62;
            float pearlMix = smoothstep(0.78, 0.95, cloudA) * 0.16;

            float3 nebulaColor = mix(rgb(84, 34, 198), rgb(224, 86, 220), magentaMix);
            nebulaColor = mix(nebulaColor, rgb(64, 178, 246), cyanMix);
            nebulaColor = mix(nebulaColor, rgb(236, 226, 255), pearlMix);

            col = screenBlend(col, nebulaColor, cloudMask * fieldBias * vapor * 0.11 * u.intensity);
        }

        // (h) Additional image-driven side blooms to make the nebula read
        //     immediately, especially on the left and upper-right of frame.
        {
            float leftBloom = gaussian2D(uv, float2(0.20, 0.47), float2(0.24, 0.26));
            float rightBloom = gaussian2D(uv, float2(0.79, 0.31), float2(0.27, 0.24));
            float bottomBloom = gaussian2D(uv, float2(0.36, 0.80), float2(0.29, 0.19));

            col = screenBlend(col, rgb(176, 84, 238), leftBloom * 0.10 * u.intensity);
            col = screenBlend(col, rgb(146, 74, 228), rightBloom * 0.09 * u.intensity);
            col = screenBlend(col, rgb(74, 148, 236), bottomBloom * 0.06 * u.intensity);
        }

        // Extra: broad violet under-glow filling the mid-field
        //     (compensates for the many small star halos in React
        //      that collectively tint the mid-range purple)
        {
            float3 nc = rgb(120, 60, 200);
            float nd2 = gd / 0.70; // extends to ~70% of farthest corner
            if (nd2 < 1.0) {
                float na = 0.08 * (1.0 - nd2) * (1.0 - nd2);
                // Ring-band boost: stronger where the ring is
                float ringB = gaussian(dist - 0.35, 0.12);
                na += ringB * 0.05;
                col = screenBlend(col, nc, na * u.intensity);
            }
        }
    }

    // ================================================================
    // 4. ABYSS-SHELL LUMINOSITY — keep the hole dark, but light the
    //    wall around it with pale violet/white haze like the reference.
    // ================================================================
    {
            float pupilEllipse = dist;
        float shellInner = gaussian(pupilEllipse - 0.180, 0.030);
        float shellMid = gaussian(pupilEllipse - 0.235, 0.045);
        float shellOuter = gaussian(pupilEllipse - 0.315, 0.080);

        col = screenBlend(col, rgb(228, 236, 255), shellInner * 0.10 * u.intensity);
        col = screenBlend(col, rgb(154, 86, 255), shellMid * 0.14 * u.intensity);
        col = screenBlend(col, rgb(96, 52, 190), shellOuter * 0.08 * u.intensity);

        float ringLift = gaussian(dist - 0.355, 0.050);
        float ringHue = 0.5 + 0.5 * sin(angle * 1.2 + elapsed * 0.04);
        float3 ringColor = mix(rgb(214, 86, 255), rgb(86, 174, 246), ringHue * 0.30);
        col = screenBlend(col, ringColor, ringLift * 0.16 * u.intensity);
    }

    // ================================================================
    // 5. RING GAS — 200 particles, source-over canvas → screen blend
    //
    //    React timing:
    //      globalRot  = elapsed * 0.004
    //      per-particle angle = base_angle + globalRot * p_speed + subtleDrift
    //      p_speed stored in basePosY (0.02-0.06)
    //    Particle size in UV = sizePx / 800  (React's minDim/800 scaling)
    // ================================================================
    float globalRot   = elapsed * 0.004;
    float subtleDrift = elapsed * 0.0007;
    float ringRadius  = 0.35;

    // Source-over canvas accumulation
    float3 canvasRGB = float3(0.0);
    float  canvasA   = 0.0;

    for (int i = 0; i < 144; i++) {
        GasCloudData p = ringGas[i];

        // React-exact angle: p.angle + globalRot * p.speed + subtleDrift
        float particleAngle = p.phase + globalRot * p.basePosY + subtleDrift;
        float particleR = p.basePosX;
        float pSize = p.sizePx / 800.0;  // resolution-independent

        // Position (before wave perturbation — used for pre-filter)
        float2 pPos = float2(cos(particleAngle) * particleR,
                      sin(particleAngle) * particleR);

        // Manhattan pre-filter
        float2 diff = abs(isotropic - pPos);
        if (diff.x + diff.y > pSize * 3.5) continue;

        // Fluid dynamics: 3 wave frequencies
        float wA = sin(particleAngle * 3.0 + elapsed * 0.2)  * 0.012;
        float wB = cos(particleAngle * 6.0 - elapsed * 0.15) * 0.006;
        float wC = sin(particleAngle * 10.0 + elapsed * 0.4) * 0.003;
        particleR += wA + wB + wC;

        // Final position
        pPos = float2(cos(particleAngle) * particleR,
                   sin(particleAngle) * particleR);

        // Tangential stretch ellipse
        float2 tang = float2(-sin(particleAngle), cos(particleAngle));
        float2 rad  = float2( tang.y, -tang.x);
        float2 tp   = isotropic - pPos;
        float stretchF = p.flowFreq; // 1.5-3.0
        float deepBr   = sin(elapsed * 0.8 + p.pulsePhase) * 0.1;
        float sBr      = 1.0 + deepBr * 0.15;
        float along  = abs(dot(tp, tang)) / (pSize * stretchF * sBr);
        float across = abs(dot(tp, rad))  / pSize;
        float d = sqrt(along * along + across * across);

        if (d < 1.0) {
            float3 gc = float3(p.colorR, p.colorG, p.colorB);

            // Volumetric plasma gradient (matches gas sprite)
            float3 hot = min(gc + float3(30.0/255.0), float3(1.0));
            float3 pc; float pa;
            if (d < 0.25) {
                pc = mix(hot, gc, d / 0.25);
                pa = mix(0.25, 0.12, d / 0.25);
            } else if (d < 0.60) {
                pc = gc;
                pa = mix(0.12, 0.03, (d - 0.25) / 0.35);
            } else {
                pc = gc;
                pa = mix(0.03, 0.0, (d - 0.60) / 0.40);
            }

            float pulse = 1.0 + sin(elapsed * (p.depth * 0.5) + p.pulsePhase) * 0.08 + deepBr;
            float denB  = max(0.0, wA + wB) * 0.15;
            float alpha = min(1.0, (0.22 + denB) * pa * pulse * u.intensity);

            // Source-over compositing on transparent canvas
            canvasRGB = canvasRGB * (1.0 - alpha) + pc * alpha;
            canvasA   = canvasA   + alpha * (1.0 - canvasA);
        }
    }

    // Screen-blend the canvas onto the background
    col = screenBlend(col, canvasRGB, canvasA);

    // ================================================================
    // 5b. OUTER NEBULA FLOW — soft rotating gaseous streaks, not hard rays.
    //     Built from broad polar wave fields for better performance.
    // ================================================================
    {
        float outerBand = smoothstep(0.24, 0.34, dist) * (1.0 - smoothstep(0.96, 1.18, dist));
        if (outerBand > 0.001) {
            float flowAngle = angle + elapsed * 0.010;
            float waveA = 0.5 + 0.5 * sin(flowAngle * 3.2 - dist * 8.4 + sin(flowAngle * 1.8 - elapsed * 0.012) * 1.4);
            float waveB = 0.5 + 0.5 * sin(flowAngle * 5.0 + dist * 6.6 - elapsed * 0.016 + cos(flowAngle * 2.3) * 0.8);
            float flowA = waveA;
            float flowB = waveB;

            float leftMass = gaussian2D(uv, float2(0.19, 0.48), float2(0.22, 0.24));
            float rightMass = gaussian2D(uv, float2(0.79, 0.33), float2(0.25, 0.22));
            float lowerMass = gaussian2D(uv, float2(0.38, 0.80), float2(0.24, 0.16));
            float massBias = 0.28 + leftMass * 0.80 + rightMass * 0.68 + lowerMass * 0.36;

            float streakField = smoothstep(0.58, 0.88, flowA * 0.62 + flowB * 0.38);
            float radialShape = gaussian(dist - 0.47, 0.11) * 0.40
                              + gaussian(dist - 0.61, 0.18)
                              + gaussian(dist - 0.79, 0.24) * 0.76;
            float plumeStrength = streakField * radialShape * outerBand * massBias;

            float colorShift = 0.5 + 0.5 * sin(elapsed * 0.05 + angle * 1.4 + flowB * 2.6);
            float cyanShift = smoothstep(0.76, 0.96, flowA) * 0.42;
            float pearlShift = smoothstep(0.86, 0.98, flowB) * 0.10;
            float3 plumeColor = mix(rgb(102, 54, 212), rgb(208, 98, 244), colorShift);
            plumeColor = mix(plumeColor, rgb(70, 176, 244), cyanShift);
            plumeColor = mix(plumeColor, rgb(236, 228, 255), pearlShift);

            col = screenBlend(col, plumeColor, plumeStrength * 0.16 * u.intensity);

            float softWash = radialShape * outerBand * (0.06 + flowA * 0.05) * (0.50 + massBias * 0.34);
            col = screenBlend(col, mix(rgb(102, 64, 212), rgb(184, 100, 240), colorShift), softWash * u.intensity);
        }
    }

    // ================================================================
    // 6. ACCRETION DISK — 160 particles, Keplerian orbits
    //    React: currentAngle = p.angle + globalRot * rotSpeed * 0.8 + subtleDrift
    //    rotSpeed (= flowFreq) already contains p.speed*(1+(1-rNorm)*2.5)
    // ================================================================
    float eyeBr = 1.0 + sin(elapsed * 0.2) * 0.03;
    float3 accRGB = float3(0.0);
    float  accA   = 0.0;

    for (int i = 0; i < 96; i++) {
        GasCloudData p = accretion[i];
        float rNorm = p.depth;
        float aR    = p.basePosX * eyeBr;

        // React-exact angle: p.angle + globalRot * rotSpeed * 0.8 + subtleDrift
        float aAngle = p.phase + globalRot * p.flowFreq * 0.8 + subtleDrift;

        float2 aPos = float2(cos(aAngle) * aR,
                      sin(aAngle) * aR);
        float aSize = (p.sizePx / 800.0) * (0.8 + sin(elapsed * 0.4 + p.pulsePhase) * 0.2);

        // Manhattan pre-filter
        float2 aDiff = abs(isotropic - aPos);
        if (aDiff.x + aDiff.y > aSize * 5.0) continue;

        // Spaghettification
        float stretch = 1.5 + (1.0 - rNorm) * 2.5;
        float2 tang = float2(-sin(aAngle), cos(aAngle));
        float2 rad  = float2( tang.y, -tang.x);
        float2 tp   = isotropic - aPos;
        float along  = abs(dot(tp, tang)) / (aSize * stretch);
        float across = abs(dot(tp, rad))  / aSize;
        float d = sqrt(along * along + across * across);

        if (d < 1.5) {
            float3 ac = float3(p.colorR, p.colorG, p.colorB);
            float3 hot = min(ac + 0.15, float3(1.0));
            float3 pc; float pa;
            if (d < 0.25) {
                pc = mix(hot, ac, d / 0.25);
                pa = mix(0.30, 0.15, d / 0.25);
            } else if (d < 0.55) {
                pc = ac;
                pa = mix(0.15, 0.04, (d - 0.25) / 0.30);
            } else {
                pc = ac;
                pa = mix(0.04, 0.0, (d - 0.55) / 0.95);
            }

            float cBoost = 1.0 - rNorm * 0.7;
            float alpha  = min(1.0, cBoost * 0.7 * pa * u.intensity);

            // Source-over
            accRGB = accRGB * (1.0 - alpha) + pc * alpha;
            accA   = accA   + alpha * (1.0 - accA);
        }
    }

    col = screenBlend(col, accRGB, accA);

    // ================================================================
    // 6b. INNER IRIS NEBULA STREAKS — soft gaseous filaments rotating
    //     around the abyss, no hard sunburst spokes.
    // ================================================================
    {
        float irisBand = smoothstep(0.12, 0.16, dist) * (1.0 - smoothstep(0.36, 0.46, dist));
        if (irisBand > 0.001) {
            float irisAngle = angle + elapsed * 0.016;
            float irisFlowA = 0.5 + 0.5 * sin(irisAngle * 4.2 - dist * 13.0 + sin(irisAngle * 2.0 + elapsed * 0.012) * 1.0);
            float irisFlowB = 0.5 + 0.5 * sin(irisAngle * 6.8 + dist * 9.5 - elapsed * 0.018 + cos(irisAngle * 1.3) * 0.7);

            float filamentField = smoothstep(0.60, 0.88, irisFlowA * 0.64 + irisFlowB * 0.36);
            float filamentBias = 0.72 + 0.28 * sin(angle * 2.4 + irisFlowB * 2.3 - elapsed * 0.012);
            float streakMask = filamentField * filamentBias * irisBand;

            float radialFade = gaussian(dist - 0.175, 0.028) * 0.55
                             + gaussian(dist - 0.225, 0.050)
                             + gaussian(dist - 0.300, 0.080) * 0.75;

            float colorShift = 0.5 + 0.5 * sin(elapsed * 0.06 + angle * 1.2 + irisFlowA * 3.0);
            float blueHint = smoothstep(0.84, 0.97, irisFlowB) * 0.20;
            float pearlHint = smoothstep(0.84, 0.98, irisFlowA) * 0.24;
            float3 streakColor = mix(rgb(162, 98, 240), rgb(226, 232, 255), colorShift);
            streakColor = mix(streakColor, rgb(90, 150, 232), blueHint);
            streakColor = mix(streakColor, rgb(242, 240, 255), pearlHint);

            col = screenBlend(col, streakColor, streakMask * radialFade * 0.26 * u.intensity);

            float hotInnerRim = gaussian(dist - 0.168, 0.017) * (0.30 + streakMask * 0.70);
            float outerMist = gaussian(dist - 0.255, 0.060) * filamentField;
            col = screenBlend(col, rgb(238, 236, 255), hotInnerRim * 0.16 * u.intensity);
            col = screenBlend(col, mix(rgb(176, 138, 255), rgb(118, 88, 224), colorShift), outerMist * 0.09 * u.intensity);

            float softChannels = smoothstep(0.10, 0.46, 1.0 - filamentField) * radialFade;
            col = multiplyBlend(col, rgb(12, 7, 26), softChannels * 0.07 * u.intensity);
        }
    }

    // ================================================================
    // 7. DUST — 15 darkening patches along the ring
    // ================================================================
    {
        float3 dc = rgb(6, 3, 16);
        for (int i = 0; i < 15; i++) {
            float dAngle = float(i) / 15.0 * 6.2831853
                         + seededRandom(91, i * 4) * 1.0 + subtleDrift;
            float dR    = 0.35 + (seededRandom(91, i * 4 + 1) - 0.5) * 0.1;
            float dSize = (50.0 + seededRandom(91, i * 4 + 2) * 40.0) / 800.0;
            float dOp   = 0.1 + seededRandom(91, i * 4 + 3) * 0.1;

            float2 dPos = float2(cos(dAngle) * dR, sin(dAngle) * dR);
            float dd = length(isotropic - dPos) / (dSize * 1.5);
            if (dd < 1.0) {
                col = multiplyBlend(col, dc, (1.0 - dd) * 0.6 * dOp * u.intensity);
            }
        }
    }

    // ================================================================
    // 8. MOTES — tiny bright drifting dots
    // ================================================================
    {
        float3 mc = rgb(210, 225, 255);
        for (int i = 0; i < 4; i++) {
            float bx = seededRandom(103, i * 6);
            float by = seededRandom(103, i * 6 + 1);
            float vx = (seededRandom(103, i * 6 + 2) - 0.5) * 0.08;
            float vy = (seededRandom(103, i * 6 + 3) - 0.5) * 0.08;
            float ms = (1.5 + seededRandom(103, i * 6 + 4) * 2.5) / 800.0;
            float mo = 0.03 + seededRandom(103, i * 6 + 5) * 0.06;
            float mp = seededRandom(103, i * 6 + 6) * 6.2831853;

            float mx = fract(bx + vx * elapsed * 0.1);
            float my = fract(by + vy * elapsed * 0.1);

            float md = length(uv - float2(mx, my)) / ms;
            if (md < 1.0) {
                float pulse = 0.7 + sin(elapsed * 0.5 + mp) * 0.3;
                col = additiveBlend(col, mc,
                    mo * 1.5 * pulse * (1.0 - md) * u.intensity);
            }
        }
    }

    // ================================================================
    // 9. WARPED FBM RING DETAIL — procedural gas texture in ring band
    // ================================================================
    {
        float ringMask = gaussian(dist - ringRadius, 0.09 * 0.8);
        if (ringMask > 0.01) {
            float3 gp = float3(isotropic * 4.0, elapsed * 0.03);
            float gn  = fbm(gp, 3, 2.0, 0.5);
            float gd2 = pow(gn * 0.5 + 0.5, 2.0) * ringMask;
            float3 rc = mix(rgb(154, 86, 255), rgb(208, 75, 255), gn * 0.5 + 0.5);
            col = screenBlend(col, rc, gd2 * 0.16 * u.intensity);
        }
    }

    // ================================================================
    // 10. VIGNETTE — radial-gradient(ellipse 90% 80%, transparent 40%,
    //     rgba(0,0,0,0.6) 100%)  — normal blend (darkens edges)
    // ================================================================
    {
        float2 vRad = float2(0.45, 0.40); // 90%/2, 80%/2
        float vd = length(centered / vRad);
        float vig = smoothstep(0.40, 1.0, vd) * 0.6 * u.intensity;
        col = mix(col, float3(0.0), vig);
    }

    float alpha = clamp(length(col) * 5.0 + 0.3, 0.0, 1.0);
    return float4(col, alpha);
}
