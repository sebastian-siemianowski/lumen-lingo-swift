#ifndef CosmicStarTypes_h
#define CosmicStarTypes_h

#include <metal_stdlib>
using namespace metal;

// ============================================================
// MARK: - Shared Star Data Structures
// Used by all 6 per-preset star shaders
// ============================================================

struct StarData {
    float2 position;      // normalized 0..1
    float  baseSize;      // in points
    float  zDepth;        // 0=far, 1=near
    float4 color;         // RGBA
    float  twinkleSpeed;
    float  twinklePhase;
    float  twinkleAmp;
    int    starType;      // 0=normal, 1=hero, 2=mystical, 3=heroAnamorphic
    float  driftAngle;
    float  driftSpeed;
    float2 motionParams;  // preset-specific (e.g. orbital angle, layer depth)
    float  rotationFactor; // differential rotation multiplier
    float  zoneTintStrength; // zone-based color tint strength
    float4 zoneTintColor; // zone tint RGBA
};

struct StarUniforms {
    float  time;
    float  intensity;
    float  speed;
    float2 resolution;
    float2 cameraDrift;   // per-frame camera offset in pixels
    float  globalRotation; // radians, for galaxy presets
    float  globalBreathing; // scale factor
    int    presetIndex;
};

struct StarVertexOut {
    float4 position [[position]];
    float2 uv;             // -1..1 within the quad
    float4 starColor;
    float  starSize;       // in pixels
    float  twinkle;        // computed brightness 0..1
    float  finalAlpha;
    int    starType;
    float  heroRotation;   // for diffraction spike rotation
    float  effectParam;    // for quantum sparkle, color shift etc
};

// ============================================================
// MARK: - Shared Vertex Helpers
// ============================================================

// Suppress unused-function warnings — these utilities are shared across
// multiple per-preset star shaders via #include.
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wunused-function"

// Common twinkle computation
static float computeTwinkle(float t, float twinkleSpeed, float twinkleAmp, float phase) {
    float twinkleBase = sin(t * twinkleSpeed * 6.0 + phase) * 0.5 + 0.5;
    float harmonic = sin(t * twinkleSpeed * 6.0 * 1.7 + phase * 2.3) * 0.15;
    return (twinkleBase + harmonic) * twinkleAmp + (1.0 - twinkleAmp);
}

// Common size breathing
static float computeSizePulse(float t, float twinkleSpeed, float phase) {
    return 1.0 + sin(t * twinkleSpeed * 6.0 * 0.6 + phase * 1.7) * 0.08;
}

// Common quad → clip-space positioning
static StarVertexOut finalizeStarVertex(
    StarData star, float2 screenPos, float t, float twinkle, float sizePulse,
    float2 resolution, float intensity, uint vertexID
) {
    StarVertexOut out;
    
    float quadScale = star.baseSize * sizePulse;
    if (star.starType == 1 || star.starType == 3) {
        quadScale *= 14.0;
    } else {
        quadScale *= 6.0;
    }
    
    float2 quadOffsets[6] = {
        float2(-1, -1), float2( 1, -1), float2(-1,  1),
        float2(-1,  1), float2( 1, -1), float2( 1,  1)
    };
    float2 offset = quadOffsets[vertexID % 6];
    
    float2 pixelPos = screenPos + offset * quadScale;
    float2 clipPos = (pixelPos / resolution) * 2.0 - 1.0;
    clipPos.y = -clipPos.y;
    
    out.position = float4(clipPos, 0.0, 1.0);
    out.uv = offset;
    
    // Color with zone tinting
    float4 col = star.color;
    if (star.zoneTintStrength > 0.0) {
        col.rgb = mix(col.rgb, star.zoneTintColor.rgb, star.zoneTintStrength);
    }
    
    // Mystical color shifting
    float phase = star.twinklePhase;
    if (star.starType == 2) {
        float goldenRatio = 1.618033988749895;
        float warmShift = sin(t * 0.3 + phase * goldenRatio) * 0.5 + 0.5;
        float coolShift = cos(t * 0.2 + phase * 2.7) * 0.5 + 0.5;
        col.r = col.r * (0.8 + warmShift * 0.2);
        col.g = col.g * (0.7 + warmShift * 0.15 - coolShift * 0.1);
        col.b = col.b * (0.5 + coolShift * 0.5);
    }
    
    out.starColor = col;
    out.starSize = star.baseSize * sizePulse;
    out.twinkle = twinkle;
    out.starType = star.starType;
    out.heroRotation = t * 0.015;
    out.effectParam = star.motionParams.x;
    
    // Edge fade
    float2 normPos = screenPos / resolution;
    float edgeFade = smoothstep(0.0, 0.05, min(min(normPos.x, 1.0 - normPos.x),
                                                 min(normPos.y, 1.0 - normPos.y)));
    out.finalAlpha = twinkle * intensity * edgeFade * star.color.a;
    
    return out;
}

#pragma clang diagnostic pop

#endif /* CosmicStarTypes_h */
