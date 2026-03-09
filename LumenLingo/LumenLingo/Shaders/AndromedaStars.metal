#include <metal_stdlib>
#include "CosmicStarTypes.h"
using namespace metal;

// ============================================================
// Edge of Andromeda Stars — sweeping galactic stellar field
//
// 5 distinct motion classes based on depth:
//   Far bg      (z < 0.15): glacial drift, barely perceptible
//   Deep mid    (0.15–0.35): slow Lissajous figure-8 wander
//   Mid-field   (0.35–0.55): galactic disc flow + position waves
//   Near-mid    (0.55–0.75): elliptical orbital + sweeping drift
//   Foreground  (z > 0.75): parallax-dominant + fast wander + jitter
//
// NO uniform breathing, NO differential rotation.
// Dramatic, sweeping, cinematic.
// ============================================================

vertex StarVertexOut andromedaStarVertex(
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

    float depthFactor = 0.08 + z * 0.92;
    float2 camMotion = uniforms.cameraDrift * depthFactor;

    float motionX = 0.0;
    float motionY = 0.0;

    float da = star.driftAngle;
    float ds = star.driftSpeed;

    if (z < 0.15) {
        // ═══ FAR BACKGROUND — glacial, nearly static ═══
        float driftTime = t * 0.015;
        motionX = cos(da) * ds * 0.15 * t
                + sin(driftTime + phase) * 1.5;
        motionY = sin(da) * ds * 0.15 * t
                + cos(driftTime * 0.8 + phase * 1.3) * 1.2;

    } else if (z < 0.35) {
        // ═══ DEEP MID — slow Lissajous figure-8 wander ═══
        float lissSpeed = 0.028 + ds * 0.01;
        float lissPhase = da * 2.1 + phase;
        float lissRadius = 5.0 + ds * 7.0;
        motionX = sin(t * lissSpeed + lissPhase) * lissRadius
                + sin(t * lissSpeed * 2.0 + lissPhase + 1.5) * lissRadius * 0.3;
        motionY = cos(t * lissSpeed * 1.5 + lissPhase + 0.7) * lissRadius * 0.75;

        motionX += cos(da) * ds * 0.25 * t;
        motionY += sin(da) * ds * 0.25 * t;

    } else if (z < 0.55) {
        // ═══ MID-FIELD — galactic disc flow + position waves ═══
        float flowFreq = 0.14 + star.motionParams.y * 0.28;
        float flowTime = t * flowFreq + phase;
        float flowAmp = 9.0 + ds * 6.0;
        motionX = sin(flowTime) * flowAmp
                + sin(flowTime * 1.7 + 2.1) * flowAmp * 0.18;
        motionY = cos(flowTime * 0.65 + 0.8) * flowAmp * 0.7
                + cos(flowTime * 1.4 + 1.3) * flowAmp * 0.14;

        float waveX = sin(t * 0.024 + star.position.y * 7.5) * 4.0;
        float waveY = cos(t * 0.020 + star.position.x * 5.5) * 3.0;
        motionX += waveX;
        motionY += waveY;

        motionX += cos(da) * ds * 0.4 * t;
        motionY += sin(da) * ds * 0.4 * t;

    } else if (z < 0.75) {
        // ═══ NEAR-MID — elliptical orbital + sweeping drift ═══
        float orbitSpeed = 0.035 + ds * 0.018;
        float orbitPhase = da * 1.4 + phase * 0.6;
        float orbitA = 7.0 + ds * 12.0;
        float orbitB = orbitA * (0.35 + star.motionParams.y * 0.55);
        motionX = sin(t * orbitSpeed + orbitPhase) * orbitA;
        motionY = cos(t * orbitSpeed * 1.18 + orbitPhase + 0.9) * orbitB;

        motionX += cos(da) * ds * 0.55 * t;
        motionY += sin(da) * ds * 0.55 * t;

        float secPhase = phase * 2.3 + da;
        motionX += sin(t * 0.075 + secPhase) * 3.5;
        motionY += cos(t * 0.065 + secPhase + 1.8) * 3.0;

    } else {
        // ═══ FOREGROUND — parallax-dominant + fast wander + jitter ═══
        float flowFreq = 0.16 + star.motionParams.y * 0.32;
        float flowTime = t * flowFreq + phase;
        float flowAmp = 14.0 + ds * 9.0;
        motionX = sin(flowTime) * flowAmp;
        motionY = cos(flowTime * 0.7) * flowAmp * 0.75;

        float wanderSpeed = 0.045 + ds * 0.025;
        float wanderPhase = da * 1.7 + phase * 0.8;
        float wanderRadius = 8.0 + ds * 9.0;
        motionX += sin(t * wanderSpeed + wanderPhase) * wanderRadius;
        motionY += cos(t * wanderSpeed * 1.3 + wanderPhase + 1.2) * wanderRadius;

        motionX += cos(da) * ds * 0.65 * t;
        motionY += sin(da) * ds * 0.65 * t;

        float jitterAmt = (z - 0.75) * 8.0;
        motionX += sin(t * 2.1 + phase * 3.7) * jitterAmt;
        motionY += cos(t * 1.8 + phase * 2.9) * jitterAmt;
    }

    // Compose final screen position — NO breathing scale
    float2 screenPos = star.position * uniforms.resolution;
    screenPos += camMotion;
    screenPos.x += motionX;
    screenPos.y += motionY;

    return finalizeStarVertex(star, screenPos, t, twinkle, sizePulse,
                              uniforms.resolution, uniforms.intensity, vertexID);
}
