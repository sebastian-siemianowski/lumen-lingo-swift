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

    if (z < 0.15) {
        // ═══ FAR BACKGROUND — glacial ═══
        float driftTime = t * 0.012;
        motionX = cos(da) * ds * 0.12 * t
                + sin(driftTime + phase) * 1.3;
        motionY = sin(da) * ds * 0.12 * t
                + cos(driftTime * 0.8 + phase * 1.3) * 1.0;

    } else if (z < 0.35) {
        // ═══ DEEP MID — slow orbital wander ═══
        float orbitSpeed = 0.018 + ds * 0.006;
        float orbitPhase = da * 2.1 + phase;
        float orbitRadius = 3.5 + ds * 5.0;
        motionX = sin(t * orbitSpeed + orbitPhase) * orbitRadius;
        motionY = cos(t * orbitSpeed * 1.2 + orbitPhase + 0.7) * orbitRadius * 0.85;

        motionX += cos(da) * ds * 0.15 * t;
        motionY += sin(da) * ds * 0.15 * t;

    } else if (z < 0.55) {
        // ═══ MID-FIELD — tangential spiral flow + waves ═══
        float flowFreq = 0.10 + star.motionParams.y * 0.20;
        float flowTime = t * flowFreq + phase;
        float flowAmp = 7.0 + ds * 5.0;
        motionX = sin(flowTime) * flowAmp
                + sin(flowTime * 1.7 + 2.1) * flowAmp * 0.15;
        motionY = cos(flowTime * 0.65 + 0.8) * flowAmp * 0.75
                + cos(flowTime * 1.4 + 1.3) * flowAmp * 0.12;

        float waveX = sin(t * 0.020 + star.position.y * 6.0) * 3.5;
        float waveY = cos(t * 0.016 + star.position.x * 5.0) * 2.5;
        motionX += waveX;
        motionY += waveY;

        motionX += cos(da) * ds * 0.30 * t;
        motionY += sin(da) * ds * 0.30 * t;

    } else if (z < 0.75) {
        // ═══ NEAR-MID — elliptical orbital + tangential drift ═══
        float orbitSpeed = 0.025 + ds * 0.013;
        float orbitPhase = da * 1.4 + phase * 0.6;
        float orbitA = 5.5 + ds * 9.0;
        float orbitB = orbitA * (0.4 + star.motionParams.y * 0.5);
        motionX = sin(t * orbitSpeed + orbitPhase) * orbitA;
        motionY = cos(t * orbitSpeed * 1.18 + orbitPhase + 0.9) * orbitB;

        motionX += cos(da) * ds * 0.45 * t;
        motionY += sin(da) * ds * 0.45 * t;

        float secPhase = phase * 2.3 + da;
        motionX += sin(t * 0.06 + secPhase) * 2.8;
        motionY += cos(t * 0.055 + secPhase + 1.8) * 2.3;

    } else {
        // ═══ FOREGROUND — fast orbital + parallax + jitter ═══
        float flowFreq = 0.14 + star.motionParams.y * 0.28;
        float flowTime = t * flowFreq + phase;
        float flowAmp = 11.0 + ds * 7.0;
        motionX = sin(flowTime) * flowAmp;
        motionY = cos(flowTime * 0.7) * flowAmp * 0.75;

        float wanderSpeed = 0.038 + ds * 0.02;
        float wanderPhase = da * 1.7 + phase * 0.8;
        float wanderRadius = 6.5 + ds * 7.5;
        motionX += sin(t * wanderSpeed + wanderPhase) * wanderRadius;
        motionY += cos(t * wanderSpeed * 1.3 + wanderPhase + 1.2) * wanderRadius;

        motionX += cos(da) * ds * 0.55 * t;
        motionY += sin(da) * ds * 0.55 * t;

        float jitterAmt = (z - 0.75) * 7.0;
        motionX += sin(t * 2.1 + phase * 3.7) * jitterAmt;
        motionY += cos(t * 1.8 + phase * 2.9) * jitterAmt;
    }

    // Compose final screen position — using rotated position
    float2 screenPos = starPos * uniforms.resolution;
    screenPos += camMotion;
    screenPos.x += motionX;
    screenPos.y += motionY;

    return finalizeStarVertex(star, screenPos, t, twinkle, sizePulse,
                              uniforms.resolution, uniforms.intensity, vertexID);
}
