#include <metal_stdlib>
#include "CosmicStarTypes.h"
using namespace metal;

// ============================================================
// Lagoon Nebula Stars — NGC 6530 Open Cluster
//
// Design: Subtle, cinematic motion with deep 3D parallax.
// Matching React's gentle drift + small flow, but enhanced
// with per-depth orbital wander for real depth perception.
// NO breathing — pure translational 3D movement.
// ============================================================

vertex StarVertexOut lagoonStarVertex(
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

    // Depth-based parallax: far stars barely move, near stars track camera
    // zDepth: 0 = far/slow, 1 = near/fast
    float depthFactor = 0.1 + star.zDepth * 0.9; // 0.1 for far, 1.0 for near

    // --- A. Parallax camera drift (primary 3D depth cue) ---
    // Camera drift supplied per-frame; deeper stars lag behind
    float2 camMotion = uniforms.cameraDrift * depthFactor;

    // --- B. Gentle constant drift (very slow linear motion) ---
    // React: cos(angle) * speed * 100 * elapsed — tiny, constant
    float da = star.driftAngle;
    float ds = star.driftSpeed;
    float driftX = cos(da) * ds * 0.6 * t;
    float driftY = sin(da) * ds * 0.6 * t;

    // --- C. Soft liquid flow (nebula current undulation) ---
    // React: sin(flowTime)*8, cos(flowTime*0.7)*6 — very subtle
    float flowFreq = 0.2 + star.motionParams.y * 0.4;
    float flowTime = t * flowFreq + phase;
    float flowScale = 10.0 * depthFactor; // 10px max (React uses 8)
    float flowX = sin(flowTime) * flowScale;
    float flowY = cos(flowTime * 0.7) * flowScale * 0.75;

    // --- D. Depth-dependent orbital wander (3D "parallax breathing" replacement) ---
    // Each star slowly orbits a tiny circle at a rate dependent on depth.
    // This creates layered 3D motion without uniform breathing.
    float wanderRadius = (3.0 + star.zDepth * 8.0) * depthFactor; // 3-11px
    float wanderSpeed  = 0.04 + (1.0 - star.zDepth) * 0.03; // far=slower, near=faster
    float wanderPhase  = star.driftAngle * 1.7 + phase * 0.8;
    float wanderX = sin(t * wanderSpeed + wanderPhase) * wanderRadius;
    float wanderY = cos(t * wanderSpeed * 1.3 + wanderPhase + 1.2) * wanderRadius;

    // --- E. Micro-jitter (atmospheric scintillation for foreground stars) ---
    float jitterAmt = star.zDepth > 0.6 ? (star.zDepth - 0.6) * 3.0 : 0.0; // only near stars
    float jitterX = sin(t * 2.1 + phase * 3.7) * jitterAmt;
    float jitterY = cos(t * 1.8 + phase * 2.9) * jitterAmt;

    // Compose final screen position — NO breathing scale
    float2 screenPos = star.position * uniforms.resolution;
    screenPos += camMotion;
    screenPos.x += driftX + flowX + wanderX + jitterX;
    screenPos.y += driftY + flowY + wanderY + jitterY;

    return finalizeStarVertex(star, screenPos, t, twinkle, sizePulse,
                              uniforms.resolution, uniforms.intensity, vertexID);
}
