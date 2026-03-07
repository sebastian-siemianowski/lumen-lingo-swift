#include <metal_stdlib>
#include "CosmicStarTypes.h"
using namespace metal;

// ============================================================
// Starburst Ring Stars — pulsing, radial
// Motion profile: drift=0.9, flow=1.1, driftFreq=0.8, flowFreq=1.3
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

    float twinkle = computeTwinkle(t, star.twinkleSpeed, star.twinkleAmp, phase);
    float sizePulse = computeSizePulse(t, star.twinkleSpeed, phase);
    float breathing = uniforms.globalBreathing;
    float parallax = 0.15 + star.zDepth * 0.85;

    // Starburst motion constants
    const float driftMul = 0.9;
    const float flowMul = 1.1;
    const float driftFreqMul = 0.8;
    const float flowFreqMul = 1.3;

    // Drift
    float da = star.driftAngle;
    float ds = star.driftSpeed;
    float driftX = sin(t * 0.18 * driftFreqMul + da)       * ds * 42.0 * parallax * driftMul
                 + sin(t * 0.47 * driftFreqMul + da * 2.1) * ds *  9.0 * parallax * driftMul;
    float driftY = cos(t * 0.14 * driftFreqMul + da * 1.3) * ds * 34.0 * parallax * driftMul
                 + cos(t * 0.38 * driftFreqMul + da * 1.7) * ds *  7.0 * parallax * driftMul;

    // Liquid flow
    float flowFreq = (0.15 + star.motionParams.y * 0.3) * flowFreqMul;
    float flowTime = t * flowFreq + phase;
    float flowAmp = 30.0 * parallax * flowMul;
    float flowX = sin(flowTime) * flowAmp + sin(flowTime * 1.6 + 1.5) * flowAmp * 0.18;
    float flowY = cos(flowTime * 0.65) * flowAmp * 0.7 + cos(flowTime * 1.3 + 2.1) * flowAmp * 0.12;

    // Differential rotation
    float rotAngle = uniforms.globalRotation * star.rotationFactor;
    float2 pos = star.position - 0.5;
    float2 rotatedPos;
    rotatedPos.x = pos.x * cos(rotAngle) - pos.y * sin(rotAngle);
    rotatedPos.y = pos.x * sin(rotAngle) + pos.y * cos(rotAngle);
    rotatedPos += 0.5;

    // Screen position with camera drift + motion
    float2 screenPos = rotatedPos * uniforms.resolution;
    screenPos += uniforms.cameraDrift * parallax;
    screenPos.x += driftX + flowX;
    screenPos.y += driftY + flowY;
    screenPos *= (1.0 + breathing);

    return finalizeStarVertex(star, screenPos, t, twinkle, sizePulse,
                              uniforms.resolution, uniforms.intensity, vertexID);
}
