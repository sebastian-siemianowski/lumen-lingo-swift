#include <metal_stdlib>
#include "CosmicStarTypes.h"
using namespace metal;

// ============================================================
// Starburst Ring Stars — React-faithful star canvas behavior
//
// React model:
//   * Orbital stars (core/ring/halo) rotate slowly around center
//   * Field stars drift almost imperceptibly with wrap
//   * Hero stars breathe organically and roll ultra-slowly
//   * Halo stars pulse gently like nebular beacons
//   * No invented jitter / radial explosions / multi-band motion classes
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

    float minDim = uniforms.resolution.y > uniforms.resolution.x
        ? uniforms.resolution.x * 1.35
        : min(uniforms.resolution.x, uniforms.resolution.y);

    float driftX = sin(t * 0.05) * minDim * 0.02;
    float driftY = cos(t * 0.04) * minDim * 0.02;

    float2 screenPos;
    bool isOrbital = star.motionParams.y > 0.5;

    if (isOrbital) {
        float a = star.driftAngle + t * star.driftSpeed + t * 0.0007;
        float r = star.motionParams.x * minDim * 0.5
                * (1.0 + sin(t * 0.2 + float(instanceID)) * 0.01);
        screenPos.x = uniforms.resolution.x * 0.5 + cos(a) * r + driftX * star.motionParams.x;
        screenPos.y = uniforms.resolution.y * 0.5 + sin(a) * r;
    } else {
        float x = star.position.x * uniforms.resolution.x + driftX * 0.2 + star.driftAngle * t * 10.0;
        float y = star.position.y * uniforms.resolution.y + driftY * 0.2 + star.driftSpeed * t * 10.0;

        x = fmod(x, uniforms.resolution.x);
        y = fmod(y, uniforms.resolution.y);
        if (x < 0.0) x += uniforms.resolution.x;
        if (y < 0.0) y += uniforms.resolution.y;

        screenPos = float2(x, y);
    }

    float twinkle;
    float alphaMultiplier;
    float breatheRange;
    float breatheEase;

    if (star.starType == 3) {
        float wave1 = sin(t * 0.3 + phase);
        float wave2 = sin(t * 1.1 + phase * 2.0) * 0.3;
        twinkle = 0.5 + 0.5 * ((wave1 + wave2) / 1.3);
        alphaMultiplier = 0.9 + 0.3 * twinkle;
        breatheEase = sin((twinkle - 0.5) * M_PI_F) * 0.5 + 0.5;
        breatheRange = 0.35;
    } else if (star.starType == 2) {
        twinkle = 0.6 + 0.4 * sin(t * 0.5 + phase);
        alphaMultiplier = 0.7 + 0.4 * twinkle;
        breatheEase = sin((twinkle - 0.5) * M_PI_F) * 0.5 + 0.5;
        breatheRange = 0.15;
    } else {
        twinkle = (sin(t * star.twinkleSpeed + phase) + 1.0) * 0.5;
        alphaMultiplier = 0.4 + 0.6 * twinkle;
        breatheEase = twinkle;
        breatheRange = 0.06;
    }

    float alpha = min(1.0, star.color.a * alphaMultiplier);
    if ((star.starType == 3 || star.starType == 2) && twinkle > 0.8) {
        alpha = min(1.0, alpha * 1.1);
    }

    float ringRadiusNorm = star.motionParams.x;
    float ringBandBoost = isOrbital
        ? smoothstep(0.20, 0.28, ringRadiusNorm) * (1.0 - smoothstep(0.54, 0.62, ringRadiusNorm))
        : 0.0;
    float coreBoost = isOrbital ? (1.0 - smoothstep(0.10, 0.16, ringRadiusNorm)) : 0.0;

    alpha = min(1.0, alpha * (1.0 + ringBandBoost * 0.22 + coreBoost * 0.12));

    float breathe = 1.0 + (breatheEase - 0.5) * breatheRange;
    float scaledBase = star.baseSize * (minDim / 1000.0) * breathe;
    scaledBase *= 1.0 + ringBandBoost * 0.18 + coreBoost * 0.10;

    float quadScale = scaledBase;
    if (star.starType == 3) {
        quadScale *= 16.0;
    } else if (star.starType == 2) {
        quadScale *= 8.0;
    } else {
        quadScale *= 6.0;
    }

    float2 quadOffsets[6] = {
        float2(-1, -1), float2( 1, -1), float2(-1,  1),
        float2(-1,  1), float2( 1, -1), float2( 1,  1)
    };

    float2 offset = quadOffsets[vertexID % 6];
    float2 pixelPos = screenPos + offset * quadScale;
    float2 clipPos = (pixelPos / uniforms.resolution) * 2.0 - 1.0;
    clipPos.y = -clipPos.y;

    StarVertexOut out;
    out.position = float4(clipPos, 0.0, 1.0);
    out.uv = offset;
    out.starColor = float4(star.color.rgb, 1.0);
    out.starSize = scaledBase;
    out.twinkle = twinkle;
    out.starType = star.starType;
    out.heroRotation = (star.starType == 3)
        ? (t * 0.015 * ((instanceID & 1) == 0 ? 1.0 : -1.0) + phase)
        : 0.0;
    out.effectParam = isOrbital ? star.motionParams.x : 0.0;

    float2 normPos = screenPos / uniforms.resolution;
    float edgeFade = smoothstep(0.0, 0.05,
        min(min(normPos.x, 1.0 - normPos.x), min(normPos.y, 1.0 - normPos.y)));
    out.finalAlpha = alpha * uniforms.intensity * edgeFade;

    return out;
}
