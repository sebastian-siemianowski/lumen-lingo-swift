#include <metal_stdlib>
#include "CosmicStarTypes.h"
using namespace metal;

// ============================================================
// Celestial Lagoon Stars — deep oceanic, flowing wave motion
// Enhanced with per-layer wave dynamics matching React's 3-layer
// parallax system. Slow, graceful, underwater current feeling.
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

    float twinkle = computeTwinkle(t, star.twinkleSpeed, star.twinkleAmp, phase);
    float sizePulse = computeSizePulse(t, star.twinkleSpeed, phase);
    float breathing = uniforms.globalBreathing;
    float parallax = 0.15 + star.zDepth * 0.85;

    // Drift animation — slower, deeper frequencies for oceanic feel
    float da = star.driftAngle;
    float ds = star.driftSpeed;
    float driftX = sin(t * 0.11 + da)       * ds * 38.0 * parallax
                 + sin(t * 0.29 + da * 2.1) * ds *  8.0 * parallax;
    float driftY = cos(t * 0.09 + da * 1.3) * ds * 30.0 * parallax
                 + cos(t * 0.24 + da * 1.7) * ds *  6.0 * parallax;

    // Oceanic liquid flow — slower frequencies, larger amplitudes
    float flowFreq = (0.10 + star.motionParams.y * 0.25) * 0.7;
    float flowTime = t * flowFreq + phase;
    float flowAmp = 38.0 * parallax;
    float flowX = sin(flowTime) * flowAmp + sin(flowTime * 1.4 + 1.2) * flowAmp * 0.22;
    float flowY = cos(flowTime * 0.55) * flowAmp * 0.75 + cos(flowTime * 1.1 + 2.0) * flowAmp * 0.15;

    // Organic wave motion — position-dependent undulation (like underwater currents)
    // Stars at different Y-positions drift with different wave phases
    float waveX = sin(t * 0.025 + star.position.y * 8.0) * 12.0 * parallax;
    float waveY = cos(t * 0.022 + star.position.x * 6.0) * 8.0 * parallax;

    // Slow circular wander (deep-space drift, unique per star)
    float wanderAngle = t * 0.06 + phase * 1.5;
    float wanderR = 10.0 * parallax;
    float wanderX = cos(wanderAngle) * wanderR;
    float wanderY = sin(wanderAngle) * wanderR * 0.7;

    // Differential rotation
    float rotAngle = uniforms.globalRotation * star.rotationFactor;
    float2 pos = star.position - 0.5;
    float2 rotatedPos;
    rotatedPos.x = pos.x * cos(rotAngle) - pos.y * sin(rotAngle);
    rotatedPos.y = pos.x * sin(rotAngle) + pos.y * cos(rotAngle);
    rotatedPos += 0.5;

    // Screen position with camera drift + all motion layers
    float2 screenPos = rotatedPos * uniforms.resolution;
    screenPos += uniforms.cameraDrift * parallax;
    screenPos.x += driftX + flowX + waveX + wanderX;
    screenPos.y += driftY + flowY + waveY + wanderY;
    screenPos *= (1.0 + breathing);

    return finalizeStarVertex(star, screenPos, t, twinkle, sizePulse,
                              uniforms.resolution, uniforms.intensity, vertexID);
}
