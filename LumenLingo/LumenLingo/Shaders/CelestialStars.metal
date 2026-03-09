#include <metal_stdlib>
#include "CosmicStarTypes.h"
using namespace metal;

// ============================================================
// Celestial Lagoon Stars — Deep oceanic stellar field
//
// 5 distinct motion classes based on depth (matching Lagoon quality):
//   Far bg      (z < 0.15): glacial drift, barely perceptible
//   Deep mid    (0.15–0.35): slow Lissajous figure-8 wander
//   Mid-field   (0.35–0.55): gentle current flow + position waves
//   Near-mid    (0.55–0.75): elliptical orbital + secondary harmonics
//   Foreground  (z > 0.75): parallax-dominant + orbital + shimmer
//
// Key: driftSpeed (ds) scales motion amplitudes for per-star variety.
// NO uniform breathing — pure layered 3D movement.
// Tranquil, oceanic, cinematic.
// ============================================================

vertex StarVertexOut celestialStarVertex(
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

    // Continuous depth factor: far=0.08, near=1.0
    float depthFactor = 0.08 + z * 0.92;

    // Camera-driven parallax drift
    float2 camMotion = uniforms.cameraDrift * depthFactor;

    float motionX = 0.0;
    float motionY = 0.0;

    float da = star.driftAngle;
    float ds = star.driftSpeed;

    if (z < 0.15) {
        // ═══ FAR BACKGROUND — glacial, nearly static ═══
        // Tiny linear drift + minuscule wobble → pinpricks that barely move
        float driftTime = t * 0.015;
        motionX = cos(da) * ds * 0.15 * t
                + sin(driftTime + phase) * 1.5;
        motionY = sin(da) * ds * 0.15 * t
                + cos(driftTime * 0.8 + phase * 1.3) * 1.2;

    } else if (z < 0.35) {
        // ═══ DEEP MID — slow Lissajous figure-8 wander ═══
        float lissSpeed = 0.025 + ds * 0.008;
        float lissPhase = da * 2.1 + phase;
        float lissRadius = 4.0 + ds * 6.0;
        motionX = sin(t * lissSpeed + lissPhase) * lissRadius
                + sin(t * lissSpeed * 2.0 + lissPhase + 1.5) * lissRadius * 0.25;
        motionY = cos(t * lissSpeed * 1.5 + lissPhase + 0.7) * lissRadius * 0.8;

        // Tiny constant drift
        motionX += cos(da) * ds * 0.2 * t;
        motionY += sin(da) * ds * 0.2 * t;

    } else if (z < 0.55) {
        // ═══ MID-FIELD — gentle current flow + position-based waves ═══
        float flowFreq = 0.12 + star.motionParams.y * 0.25;
        float flowTime = t * flowFreq + phase;
        float flowAmp = 8.0 + ds * 5.0;
        motionX = sin(flowTime) * flowAmp
                + sin(flowTime * 1.7 + 2.1) * flowAmp * 0.15;
        motionY = cos(flowTime * 0.65 + 0.8) * flowAmp * 0.7
                + cos(flowTime * 1.4 + 1.3) * flowAmp * 0.12;

        // Position-based organic wave (unique per location)
        float waveX = sin(t * 0.022 + star.position.y * 7.0) * 3.5;
        float waveY = cos(t * 0.018 + star.position.x * 5.0) * 2.5;
        motionX += waveX;
        motionY += waveY;

        // Gentle constant drift
        motionX += cos(da) * ds * 0.35 * t;
        motionY += sin(da) * ds * 0.35 * t;

    } else if (z < 0.75) {
        // ═══ NEAR-MID — elliptical orbital drift ═══
        float orbitSpeed = 0.03 + ds * 0.015;
        float orbitPhase = da * 1.4 + phase * 0.6;
        float orbitA = 6.0 + ds * 10.0;
        float orbitB = orbitA * (0.4 + star.motionParams.y * 0.5);
        motionX = sin(t * orbitSpeed + orbitPhase) * orbitA;
        motionY = cos(t * orbitSpeed * 1.18 + orbitPhase + 0.9) * orbitB;

        // Moderate constant drift
        motionX += cos(da) * ds * 0.5 * t;
        motionY += sin(da) * ds * 0.5 * t;

        // Subtle secondary oscillation
        float secPhase = phase * 2.3 + da;
        motionX += sin(t * 0.07 + secPhase) * 3.0;
        motionY += cos(t * 0.06 + secPhase + 1.8) * 2.5;

    } else {
        // ═══ FOREGROUND — parallax-dominant + orbital + shimmer ═══
        float flowFreq = 0.15 + star.motionParams.y * 0.3;
        float flowTime = t * flowFreq + phase;
        float flowAmp = 12.0 + ds * 8.0;
        motionX = sin(flowTime) * flowAmp;
        motionY = cos(flowTime * 0.7) * flowAmp * 0.75;

        // Orbital wander (larger for foreground)
        float wanderSpeed = 0.04 + ds * 0.02;
        float wanderPhase = da * 1.7 + phase * 0.8;
        float wanderRadius = 7.0 + ds * 8.0;
        motionX += sin(t * wanderSpeed + wanderPhase) * wanderRadius;
        motionY += cos(t * wanderSpeed * 1.3 + wanderPhase + 1.2) * wanderRadius;

        // Constant drift
        motionX += cos(da) * ds * 0.6 * t;
        motionY += sin(da) * ds * 0.6 * t;

        // Atmospheric scintillation micro-jitter
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
