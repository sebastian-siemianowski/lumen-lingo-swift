#include <metal_stdlib>
#include "CosmicStarTypes.h"
using namespace metal;

// ============================================================
// Solar Aurora Stars — vertical aurora shimmer stellar field
//
// 5 distinct motion classes based on depth:
//   Far bg      (z < 0.15): glacial drift with slight vertical bias
//   Deep mid    (0.15–0.35): Lissajous with vertical elongation
//   Mid-field   (0.35–0.55): aurora curtain flow + vertical waves
//   Near-mid    (0.55–0.75): Y-elongated elliptical orbital
//   Foreground  (z > 0.75): parallax + vertical shimmer + jitter
//
// NO uniform breathing, NO differential rotation.
// Warm, shimmering, aurora-like.
// ============================================================

vertex StarVertexOut solarAuroraStarVertex(
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
        // ═══ FAR BACKGROUND — glacial with gentle vertical bias ═══
        float driftTime = t * 0.015;
        motionX = cos(da) * ds * 0.12 * t
                + sin(driftTime + phase) * 1.2;
        motionY = sin(da) * ds * 0.18 * t
                + cos(driftTime * 0.7 + phase * 1.3) * 1.8;

    } else if (z < 0.35) {
        // ═══ DEEP MID — Lissajous with vertical elongation ═══
        float lissSpeed = 0.022 + ds * 0.008;
        float lissPhase = da * 2.1 + phase;
        float lissRadius = 3.5 + ds * 5.5;
        motionX = sin(t * lissSpeed + lissPhase) * lissRadius * 0.7;
        motionY = cos(t * lissSpeed * 1.5 + lissPhase + 0.7) * lissRadius;
        motionX += sin(t * lissSpeed * 2.0 + lissPhase + 1.5) * lissRadius * 0.2;

        motionX += cos(da) * ds * 0.18 * t;
        motionY += sin(da) * ds * 0.22 * t;

    } else if (z < 0.55) {
        // ═══ MID-FIELD — aurora curtain flow + vertical waves ═══
        float flowFreq = 0.10 + star.motionParams.y * 0.22;
        float flowTime = t * flowFreq + phase;
        float flowAmp = 7.0 + ds * 4.5;
        motionX = sin(flowTime) * flowAmp * 0.6;
        motionY = cos(flowTime * 0.55 + 0.8) * flowAmp
                + cos(flowTime * 1.3 + 1.3) * flowAmp * 0.15;

        // Aurora curtain: vertical wave based on X position
        float curtainY = sin(t * 0.028 + star.position.x * 9.0) * 5.0;
        float curtainX = sin(t * 0.015 + star.position.y * 4.0) * 2.0;
        motionX += curtainX;
        motionY += curtainY;

        motionX += cos(da) * ds * 0.3 * t;
        motionY += sin(da) * ds * 0.38 * t;

    } else if (z < 0.75) {
        // ═══ NEAR-MID — Y-elongated elliptical orbital ═══
        float orbitSpeed = 0.028 + ds * 0.014;
        float orbitPhase = da * 1.4 + phase * 0.6;
        float orbitA = 5.0 + ds * 8.0;
        float orbitB = orbitA * (0.6 + star.motionParams.y * 0.6);
        motionX = sin(t * orbitSpeed + orbitPhase) * orbitA;
        motionY = cos(t * orbitSpeed * 1.18 + orbitPhase + 0.9) * orbitB;

        motionX += cos(da) * ds * 0.45 * t;
        motionY += sin(da) * ds * 0.55 * t;

        float secPhase = phase * 2.3 + da;
        motionX += sin(t * 0.06 + secPhase) * 2.5;
        motionY += cos(t * 0.055 + secPhase + 1.8) * 3.5;

    } else {
        // ═══ FOREGROUND — parallax + vertical shimmer + jitter ═══
        float flowFreq = 0.13 + star.motionParams.y * 0.28;
        float flowTime = t * flowFreq + phase;
        float flowAmp = 10.0 + ds * 7.0;
        motionX = sin(flowTime) * flowAmp * 0.65;
        motionY = cos(flowTime * 0.6) * flowAmp;

        // Vertical shimmer (aurora-like)
        float shimmerPhase = t * 0.04 + phase * 1.5;
        motionY += sin(shimmerPhase) * 6.0;
        motionX += sin(shimmerPhase * 0.7) * 2.0;

        // Wander
        float wanderSpeed = 0.035 + ds * 0.02;
        float wanderPhase = da * 1.7 + phase * 0.8;
        float wanderRadius = 6.0 + ds * 7.0;
        motionX += sin(t * wanderSpeed + wanderPhase) * wanderRadius * 0.7;
        motionY += cos(t * wanderSpeed * 1.3 + wanderPhase + 1.2) * wanderRadius;

        motionX += cos(da) * ds * 0.5 * t;
        motionY += sin(da) * ds * 0.6 * t;

        // Atmospheric jitter
        float jitterAmt = (z - 0.75) * 7.0;
        motionX += sin(t * 2.1 + phase * 3.7) * jitterAmt * 0.6;
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
