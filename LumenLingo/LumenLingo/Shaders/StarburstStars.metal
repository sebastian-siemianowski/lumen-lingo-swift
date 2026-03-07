#include <metal_stdlib>
#include "CosmicStarTypes.h"
using namespace metal;

// ============================================================
// Starburst Ring Stars — radial pulsing stellar field
//
// 5 distinct motion classes based on depth:
//   Far bg      (z < 0.15): glacial drift
//   Deep mid    (0.15–0.35): gentle radial oscillation
//   Mid-field   (0.35–0.55): ring rotation + radial pulse
//   Near-mid    (0.55–0.75): tangential flow + radial drift
//   Foreground  (z > 0.75): fast ring orbit + radial pulse + jitter
//
// NO uniform breathing, NO differential rotation.
// Pulsing, radial, energetic.
// ============================================================

vertex StarVertexOut starburstStarVertex(
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
        // ═══ FAR BACKGROUND — glacial ═══
        float driftTime = t * 0.013;
        motionX = cos(da) * ds * 0.12 * t
                + sin(driftTime + phase) * 1.3;
        motionY = sin(da) * ds * 0.12 * t
                + cos(driftTime * 0.8 + phase * 1.3) * 1.1;

    } else if (z < 0.35) {
        // ═══ DEEP MID — gentle radial oscillation ═══
        float radialAmp = 3.0 + ds * 4.5;
        motionX = cos(da) * sin(t * 0.025 + phase) * radialAmp;
        motionY = sin(da) * sin(t * 0.025 + phase) * radialAmp;

        // Small tangential wander
        motionX += -sin(da) * cos(t * 0.015 + phase * 1.3) * radialAmp * 0.4;
        motionY += cos(da) * cos(t * 0.015 + phase * 1.3) * radialAmp * 0.4;

        motionX += cos(da) * ds * 0.18 * t;
        motionY += sin(da) * ds * 0.18 * t;

    } else if (z < 0.55) {
        // ═══ MID-FIELD — ring rotation + radial pulse ═══
        float flowFreq = 0.11 + star.motionParams.y * 0.22;
        float flowTime = t * flowFreq + phase;
        float flowAmp = 7.5 + ds * 5.0;

        // Tangential (ring rotation)
        motionX += -sin(da) * sin(flowTime) * flowAmp;
        motionY += cos(da) * sin(flowTime) * flowAmp;

        // Radial pulse
        float radialPulse = sin(t * 0.03 + phase * 1.5) * 4.0;
        motionX += cos(da) * radialPulse;
        motionY += sin(da) * radialPulse;

        // Position wave
        float waveX = sin(t * 0.020 + star.position.y * 6.5) * 3.0;
        float waveY = cos(t * 0.017 + star.position.x * 5.0) * 2.5;
        motionX += waveX;
        motionY += waveY;

        motionX += cos(da) * ds * 0.32 * t;
        motionY += sin(da) * ds * 0.32 * t;

    } else if (z < 0.75) {
        // ═══ NEAR-MID — tangential flow + radial drift ═══
        float orbitSpeed = 0.028 + ds * 0.015;
        float orbitPhase = da * 1.4 + phase * 0.6;
        float orbitA = 6.0 + ds * 10.0;
        float orbitB = orbitA * (0.4 + star.motionParams.y * 0.5);
        motionX = sin(t * orbitSpeed + orbitPhase) * orbitA;
        motionY = cos(t * orbitSpeed * 1.18 + orbitPhase + 0.9) * orbitB;

        // Radial drift component
        float radialDrift = sin(t * 0.035 + phase) * 3.5;
        motionX += cos(da) * radialDrift;
        motionY += sin(da) * radialDrift;

        motionX += cos(da) * ds * 0.48 * t;
        motionY += sin(da) * ds * 0.48 * t;

        float secPhase = phase * 2.3 + da;
        motionX += sin(t * 0.065 + secPhase) * 2.8;
        motionY += cos(t * 0.06 + secPhase + 1.8) * 2.3;

    } else {
        // ═══ FOREGROUND — fast ring orbit + radial pulse + jitter ═══
        float flowFreq = 0.15 + star.motionParams.y * 0.30;
        float flowTime = t * flowFreq + phase;
        float flowAmp = 12.0 + ds * 8.0;
        motionX = sin(flowTime) * flowAmp;
        motionY = cos(flowTime * 0.7) * flowAmp * 0.8;

        // Radial expansion/contraction
        float radialPulse = sin(t * 0.04 + phase * 1.3) * 5.0;
        motionX += cos(da) * radialPulse;
        motionY += sin(da) * radialPulse;

        // Orbital wander
        float wanderSpeed = 0.04 + ds * 0.022;
        float wanderPhase = da * 1.7 + phase * 0.8;
        float wanderRadius = 7.0 + ds * 8.0;
        motionX += sin(t * wanderSpeed + wanderPhase) * wanderRadius;
        motionY += cos(t * wanderSpeed * 1.3 + wanderPhase + 1.2) * wanderRadius;

        motionX += cos(da) * ds * 0.58 * t;
        motionY += sin(da) * ds * 0.58 * t;

        float jitterAmt = (z - 0.75) * 7.5;
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
