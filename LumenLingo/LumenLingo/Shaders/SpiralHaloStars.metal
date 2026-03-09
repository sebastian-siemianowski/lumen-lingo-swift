#include <metal_stdlib>
#include "CosmicStarTypes.h"
using namespace metal;

// ============================================================
// Spiral Halo Stars — orbital galactic stellar field
//
// TRUE GALACTIC ROTATION via rotationFactor:
//   Each star orbits the galaxy centre (0.5, 0.5) at a speed
//   proportional to rotationFactor (Keplerian: inner=faster).
//   This creates a visible winding spiral.
//
// 5 additional local-motion classes based on depth:
//   Far bg      (z < 0.15): glacial drift
//   Deep mid    (0.15–0.35): slow orbital wander
//   Mid-field   (0.35–0.55): tangential spiral flow + waves
//   Near-mid    (0.55–0.75): elliptical orbital + tangential drift
//   Foreground  (z > 0.75): fast orbital + parallax + jitter
// ============================================================

vertex StarVertexOut spiralHaloStarVertex(
    uint vertexID [[vertex_id]],
    uint instanceID [[instance_id]],
    const device StarData* stars [[buffer(0)]],
    constant StarUniforms& uniforms [[buffer(1)]]
) {
    StarData star = stars[instanceID];
    float t = uniforms.time * uniforms.speed;
    float phase = star.twinklePhase;
    float z = star.zDepth;

    float twinkle = computeTwinkle(t, star.twinkleSpeed, star.twinkleAmp, phase);
    float sizePulse = computeSizePulse(t, star.twinkleSpeed, phase);

    // ═══════════════════════════════════════════════════════════
    // DIFFERENTIAL GALACTIC ROTATION
    // Rotate star position around centre (0.5, 0.5).
    // rotationFactor encodes Keplerian speed per star:
    //   core ~1.5, inner arm ~1.0, outer arm ~0.5, halo ~0.3, field ~0.2
    // Base rate -0.015 = clockwise ~0.86°/s — matches React.
    // ═══════════════════════════════════════════════════════════
    float2 starPos = star.position;
    {
        float galacticAngle = t * -0.015 * star.rotationFactor;
        float2 centered = starPos - float2(0.5, 0.5);
        float cosA = cos(galacticAngle);
        float sinA = sin(galacticAngle);
        starPos = float2(0.5 + centered.x * cosA - centered.y * sinA,
                         0.5 + centered.x * sinA + centered.y * cosA);
    }

    float depthFactor = 0.08 + z * 0.92;
    float2 camMotion = uniforms.cameraDrift * depthFactor;

    float motionX = 0.0;
    float motionY = 0.0;

    float da = star.driftAngle;
    float ds = star.driftSpeed;

    // ═══════════════════════════════════════════════════════════
    // LOCAL MOTION — bounded oscillations ONLY (no linear drift)
    // Keeps stars coherent within their spiral arms forever.
    // The galactic rotation above is the ONLY large-scale motion.
    // ═══════════════════════════════════════════════════════════
    // Smooth depth blending to avoid hard zone cutoffs
    float zBlendFar   = 1.0 - smoothstep(0.12, 0.18, z);
    float zBlendDeep  = smoothstep(0.12, 0.18, z) * (1.0 - smoothstep(0.32, 0.38, z));
    float zBlendMid   = smoothstep(0.32, 0.38, z) * (1.0 - smoothstep(0.52, 0.58, z));
    float zBlendNear  = smoothstep(0.52, 0.58, z) * (1.0 - smoothstep(0.72, 0.78, z));
    float zBlendFront = smoothstep(0.72, 0.78, z);

    // FAR BACKGROUND — glacial sway
    {
        float slowT = t * 0.012;
        float fx = sin(slowT + phase) * 1.3 + sin(slowT * 1.6 + da) * 0.6;
        float fy = cos(slowT * 0.8 + phase * 1.3) * 1.0 + cos(slowT * 1.3 + da * 0.7) * 0.5;
        motionX += fx * zBlendFar;
        motionY += fy * zBlendFar;
    }

    // DEEP MID — slow orbital wander
    {
        float orbitSpeed = 0.018 + ds * 0.006;
        float orbitPhase = da * 2.1 + phase;
        float orbitRadius = 3.0 + ds * 4.0;
        float fx = sin(t * orbitSpeed + orbitPhase) * orbitRadius;
        float fy = cos(t * orbitSpeed * 1.2 + orbitPhase + 0.7) * orbitRadius * 0.85;
        motionX += fx * zBlendDeep;
        motionY += fy * zBlendDeep;
    }

    // MID-FIELD — tangential spiral flow + waves
    {
        float flowFreq = 0.08 + star.motionParams.y * 0.14;
        float flowTime = t * flowFreq + phase;
        float flowAmp = 5.0 + ds * 3.5;
        float fx = sin(flowTime) * flowAmp
                 + sin(flowTime * 1.7 + 2.1) * flowAmp * 0.12;
        float fy = cos(flowTime * 0.65 + 0.8) * flowAmp * 0.7
                 + cos(flowTime * 1.4 + 1.3) * flowAmp * 0.10;
        fx += sin(t * 0.020 + star.position.y * 6.0) * 2.5;
        fy += cos(t * 0.016 + star.position.x * 5.0) * 2.0;
        motionX += fx * zBlendMid;
        motionY += fy * zBlendMid;
    }

    // NEAR-MID — elliptical orbital
    {
        float orbitSpeed = 0.022 + ds * 0.010;
        float orbitPhase = da * 1.4 + phase * 0.6;
        float orbitA = 4.5 + ds * 6.0;
        float orbitB = orbitA * (0.4 + star.motionParams.y * 0.5);
        float fx = sin(t * orbitSpeed + orbitPhase) * orbitA;
        float fy = cos(t * orbitSpeed * 1.18 + orbitPhase + 0.9) * orbitB;
        fx += sin(t * 0.05 + phase * 2.3 + da) * 2.2;
        fy += cos(t * 0.045 + phase * 2.3 + da + 1.8) * 1.8;
        motionX += fx * zBlendNear;
        motionY += fy * zBlendNear;
    }

    // FOREGROUND — faster orbital + gentle jitter
    {
        float flowFreq = 0.10 + star.motionParams.y * 0.20;
        float flowTime = t * flowFreq + phase;
        float flowAmp = 7.0 + ds * 5.0;
        float fx = sin(flowTime) * flowAmp;
        float fy = cos(flowTime * 0.7) * flowAmp * 0.7;
        float wanderSpeed = 0.030 + ds * 0.015;
        float wanderPhase = da * 1.7 + phase * 0.8;
        float wanderRadius = 5.0 + ds * 5.5;
        fx += sin(t * wanderSpeed + wanderPhase) * wanderRadius;
        fy += cos(t * wanderSpeed * 1.3 + wanderPhase + 1.2) * wanderRadius;
        float jitterAmt = (z - 0.72) * 4.0;
        fx += sin(t * 1.5 + phase * 3.7) * max(jitterAmt, 0.0);
        fy += cos(t * 1.3 + phase * 2.9) * max(jitterAmt, 0.0);
        motionX += fx * zBlendFront;
        motionY += fy * zBlendFront;
    }

    // Compose final screen position — using rotated position
    float2 screenPos = starPos * uniforms.resolution;
    screenPos += camMotion;
    screenPos.x += motionX;
    screenPos.y += motionY;

    return finalizeStarVertex(star, screenPos, t, twinkle, sizePulse,
                              uniforms.resolution, uniforms.intensity, vertexID);
}
