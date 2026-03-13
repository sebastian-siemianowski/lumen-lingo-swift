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
    float dist = length(centered);

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
        float pupilEllipse = length(float2(centered.x / 0.90, centered.y / 1.10));
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

        // (a) Deep violet — w:80vw h:70vw  left:-10% top:-10%
        //     center UV ≈ (0.30, 0.25/ar mapped), radii cover most of viewport
        {
            float3 nc = rgb(140, 100, 220);
            float2 c2 = float2(0.30, 0.22);
            float2 r2 = float2(0.42, 0.38);  // large spread
            float2 o = (uv - c2) / r2;
            float a = atan2(o.y, o.x);
            float nd = length(o);
            // Organic shape distortion (border-radius simulation)
            nd += sin(a * 3.0 + 1.2) * 0.10
                + sin(a * 5.0 - 0.8) * 0.05
                + sin(a * 8.0 + 2.7) * 0.025;
            if (nd < 1.0) {
                // Gradient: alpha 0.15 center → 0.05 at 50% → 0 at 100%
                float na;
                if (nd < 0.50) {
                    na = mix(0.20, 0.07, nd / 0.50);
                } else {
                    na = mix(0.07, 0.0, (nd - 0.50) / 0.50);
                }
                // Simulate 60px blur with squared falloff
                float blur = 1.0 - nd;
                blur = blur * blur * (1.25 - blur * 0.25);
                na *= blur;
                col = screenBlend(col, nc, na * po * 0.92 * u.intensity);
            }
        }

        // (b) Magenta — w:70vw h:80vw  right:-15% top:10%
        {
            float3 nc = rgb(180, 80, 200);
            float2 c2 = float2(0.78, 0.48);
            float2 r2 = float2(0.38, 0.42);
            float2 o = (uv - c2) / r2;
            float a = atan2(o.y, o.x);
            float nd = length(o);
            nd += sin(a * 4.0 + 2.5) * 0.08
                + sin(a * 7.0) * 0.04
                + sin(a * 9.0 - 0.6) * 0.02;
            if (nd < 1.0) {
                float na;
                if (nd < 0.50) {
                    na = mix(0.16, 0.05, nd / 0.50);
                } else {
                    na = mix(0.05, 0.0, (nd - 0.50) / 0.50);
                }
                float blur = 1.0 - nd;
                blur = blur * blur * (1.25 - blur * 0.25);
                na *= blur;
                col = screenBlend(col, nc, na * po * 0.82 * u.intensity);
            }
        }

        // (c) Blue-violet — w:90vw h:60vw  left:5% bottom:-15%
        {
            float3 nc = rgb(100, 120, 200);
            float2 c2 = float2(0.50, 0.82);
            float2 r2 = float2(0.48, 0.34);
            float2 o = (uv - c2) / r2;
            float a = atan2(o.y, o.x);
            float nd = length(o);
            nd += sin(a * 3.0 + 4.0) * 0.11
                + sin(a * 6.0 + 1.5) * 0.05
                + sin(a * 10.0 - 0.7) * 0.02;
            if (nd < 1.0) {
                float na;
                if (nd < 0.50) {
                    na = mix(0.13, 0.04, nd / 0.50);
                } else {
                    na = mix(0.04, 0.0, (nd - 0.50) / 0.50);
                }
                float blur = 1.0 - nd;
                blur = blur * blur * (1.20 - blur * 0.20);
                na *= blur;
                col = screenBlend(col, nc, na * po * 0.72 * u.intensity);
            }
        }

        // (d) Cyan — w:60vw h:50vw  left:-5% bottom:10%
        {
            float3 nc = rgb(80, 160, 220);
            float2 c2 = float2(0.25, 0.62);
            float2 r2 = float2(0.32, 0.28);
            float2 o = (uv - c2) / r2;
            float a = atan2(o.y, o.x);
            float nd = length(o);
            nd += sin(a * 5.0 + 3.3) * 0.08 + sin(a * 9.0 - 0.5) * 0.025;
            if (nd < 1.0) {
                float na = 0.11 * (1.0 - nd);
                na *= (1.0 - nd) * (1.15 - (1.0 - nd) * 0.15);
                col = screenBlend(col, nc, na * po * 0.58 * u.intensity);
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
                col = screenBlend(col, nc, na * 0.62 * u.intensity);
            }
        }

        // (f) Lavender-white mist near the ring for richer perceived depth
        {
            float ringBand = gaussian(dist - 0.37, 0.10) * (1.0 - smoothstep(0.10, 0.22, gd));
            float cloudNoise = warpedFBM(float3(centered * 2.2, elapsed * 0.02), elapsed, 4) * 0.5 + 0.5;
            float3 nc = mix(rgb(185, 145, 255), rgb(235, 220, 255), cloudNoise);
            col = screenBlend(col, nc, ringBand * 0.10 * u.intensity);
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
        float pupilEllipse = length(float2(centered.x / 0.90, centered.y / 1.10));
        float shellInner = gaussian(pupilEllipse - 0.180, 0.030);
        float shellMid = gaussian(pupilEllipse - 0.235, 0.045);
        float shellOuter = gaussian(pupilEllipse - 0.315, 0.080);

        col = screenBlend(col, rgb(228, 236, 255), shellInner * 0.10 * u.intensity);
        col = screenBlend(col, rgb(154, 86, 255), shellMid * 0.14 * u.intensity);
        col = screenBlend(col, rgb(96, 52, 190), shellOuter * 0.08 * u.intensity);
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

    for (int i = 0; i < 200; i++) {
        GasCloudData p = ringGas[i];

        // React-exact angle: p.angle + globalRot * p.speed + subtleDrift
        float particleAngle = p.phase + globalRot * p.basePosY + subtleDrift;
        float particleR = p.basePosX;
        float pSize = p.sizePx / 800.0;  // resolution-independent

        // Position (before wave perturbation — used for pre-filter)
        float2 pPos = float2(0.5 + cos(particleAngle) * particleR,
                              0.5 + sin(particleAngle) * particleR);

        // Manhattan pre-filter
        float2 diff = abs(uv - pPos);
        if (diff.x + diff.y > pSize * 3.5) continue;

        // Fluid dynamics: 3 wave frequencies
        float wA = sin(particleAngle * 3.0 + elapsed * 0.2)  * 0.012;
        float wB = cos(particleAngle * 6.0 - elapsed * 0.15) * 0.006;
        float wC = sin(particleAngle * 10.0 + elapsed * 0.4) * 0.003;
        particleR += wA + wB + wC;

        // Final position
        pPos = float2(0.5 + cos(particleAngle) * particleR,
                       0.5 + sin(particleAngle) * particleR);

        // Tangential stretch ellipse
        float2 tang = float2(-sin(particleAngle), cos(particleAngle));
        float2 rad  = float2( tang.y, -tang.x);
        float2 tp   = uv - pPos;
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
    // 5b. OUTER RADIAL PLUMES — the reference image has broad,
    //     feathery purple lobes radiating from the ring into the nebula.
    //     They are wide, soft, and more floral than spiky.
    // ================================================================
    {
        float angle = atan2(centered.y, centered.x);
        float outerBand = smoothstep(0.24, 0.34, dist) * (1.0 - smoothstep(0.92, 1.12, dist));
        if (outerBand > 0.001) {
            float lobeA = sin(angle * 6.0 + sin(angle * 2.0 + 0.8) * 1.0 + elapsed * 0.010) * 0.5 + 0.5;
            float lobeB = sin(angle * 9.0 - sin(angle * 4.0 - 1.2) * 0.8 - elapsed * 0.008) * 0.5 + 0.5;
            float lobeC = sin(angle * 13.0 + elapsed * 0.014) * 0.5 + 0.5;
            float plumeMask = pow(saturate(lobeA * 0.55 + lobeB * 0.30 + lobeC * 0.15), 2.1);

            float radialShape = gaussian(dist - 0.44, 0.12) * 0.5
                              + gaussian(dist - 0.58, 0.20)
                              + gaussian(dist - 0.74, 0.24) * 0.7;
            float plumeStrength = plumeMask * radialShape * outerBand;

            float plumeNoise = warpedFBM(float3(cos(angle) * 1.2, sin(angle) * 1.2, elapsed * 0.012 + dist * 1.8), elapsed, 3);
            float plumeMix = plumeNoise * 0.5 + 0.5;
            float3 plumeColor = mix(rgb(108, 72, 210), rgb(182, 150, 255), plumeMix);

            col = screenBlend(col, plumeColor, plumeStrength * 0.20 * u.intensity);
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

    for (int i = 0; i < 160; i++) {
        GasCloudData p = accretion[i];
        float rNorm = p.depth;
        float aR    = p.basePosX * eyeBr;

        // React-exact angle: p.angle + globalRot * rotSpeed * 0.8 + subtleDrift
        float aAngle = p.phase + globalRot * p.flowFreq * 0.8 + subtleDrift;

        float2 aPos = float2(0.5 + cos(aAngle) * aR,
                              0.5 + sin(aAngle) * aR);
        float aSize = (p.sizePx / 800.0) * (0.8 + sin(elapsed * 0.4 + p.pulsePhase) * 0.2);

        // Manhattan pre-filter
        float2 aDiff = abs(uv - aPos);
        if (aDiff.x + aDiff.y > aSize * 5.0) continue;

        // Spaghettification
        float stretch = 1.5 + (1.0 - rNorm) * 2.5;
        float2 tang = float2(-sin(aAngle), cos(aAngle));
        float2 rad  = float2( tang.y, -tang.x);
        float2 tp   = uv - aPos;
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
    // 6b. INNER IRIS / RADIAL SPOKES — this is where the reference
    //     image really sings: bright soft streaks feathering outward
    //     from the abyss, with dark channels between them.
    // ================================================================
    {
        float angle = atan2(centered.y, centered.x);
        float spokeBand = smoothstep(0.11, 0.15, dist) * (1.0 - smoothstep(0.35, 0.44, dist));
        if (spokeBand > 0.001) {
            float angleWarp = sin(angle * 7.0 + elapsed * 0.20) * 0.35
                            + sin(angle * 13.0 - elapsed * 0.11) * 0.18;
            float spokeA = pow(max(0.0, sin(angle * 48.0 + angleWarp + elapsed * 0.03)), 10.0);
            float spokeB = pow(max(0.0, sin(angle * 30.0 - angleWarp * 1.3 - elapsed * 0.02)), 7.0);
            float spokeC = pow(max(0.0, sin(angle * 18.0 + angleWarp * 0.6 + elapsed * 0.01) * 0.5 + 0.5), 3.5) * 0.45;
            float spokeMask = saturate(max(spokeA, spokeB) + spokeC) * spokeBand;

            float radialFade = gaussian(dist - 0.18, 0.035) * 0.8
                             + gaussian(dist - 0.24, 0.055)
                             + gaussian(dist - 0.31, 0.075) * 0.55;
            float innerFade = 1.0 - smoothstep(0.12, 0.18, dist);
            float spokeNoise = warpedFBM(float3(cos(angle) * 1.8, sin(angle) * 1.8, elapsed * 0.02 + dist * 3.0), elapsed, 3) * 0.5 + 0.5;

            // Bright misty spokes
            float3 spokeColor = mix(rgb(225, 232, 255), rgb(154, 86, 255), 0.48 + spokeNoise * 0.14);
            col = screenBlend(col, spokeColor, spokeMask * radialFade * 0.28 * u.intensity);

            float hotIris = gaussian(dist - 0.175, 0.020) * (0.35 + spokeMask * 0.65);
            col = screenBlend(col, rgb(240, 242, 255), hotIris * 0.14 * u.intensity);

            // Dark channels between spokes to sharpen the iris structure
            float gapMask = (1.0 - max(spokeA, spokeB)) * spokeBand * radialFade;
            col = multiplyBlend(col, rgb(10, 6, 24), gapMask * 0.18 * u.intensity * (1.0 - innerFade * 0.4));
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

            float2 dPos = float2(0.5 + cos(dAngle) * dR, 0.5 + sin(dAngle) * dR);
            float dd = length(uv - dPos) / (dSize * 1.5);
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
            float3 gp = float3(centered * 4.0, elapsed * 0.05);
            float gn  = warpedFBM(gp, elapsed, 4);
            float gd2 = pow(gn * 0.5 + 0.5, 2.0) * ringMask;
            float3 rc = mix(rgb(154, 86, 255), rgb(208, 75, 255), gn * 0.5 + 0.5);
            col = screenBlend(col, rc, gd2 * 0.12 * u.intensity);
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
