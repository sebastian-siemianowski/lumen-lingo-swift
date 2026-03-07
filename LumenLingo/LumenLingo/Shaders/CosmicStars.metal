#include <metal_stdlib>
#include "CosmicNoise.h"
using namespace metal;

// ============================================================
// MARK: - Star Data Structure (matches Swift buffer layout)
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

// ============================================================
// MARK: - Vertex Shader Output
// ============================================================

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
// MARK: - Vertex Shader
// ============================================================

vertex StarVertexOut cosmicStarVertex(
    uint vertexID [[vertex_id]],
    uint instanceID [[instance_id]],
    const device StarData* stars [[buffer(0)]],
    constant StarUniforms& uniforms [[buffer(1)]]
) {
    StarVertexOut out;
    
    StarData star = stars[instanceID];
    
    // Compute time-based animations
    float t = uniforms.time * uniforms.speed;
    
    // Twinkle: multi-harmonic brightness oscillation
    float phase = star.twinklePhase;
    float twinkleBase = sin(t * star.twinkleSpeed * 6.0 + phase) * 0.5 + 0.5;
    float harmonic = sin(t * star.twinkleSpeed * 6.0 * 1.7 + phase * 2.3) * 0.15;
    float twinkle = (twinkleBase + harmonic) * star.twinkleAmp + (1.0 - star.twinkleAmp);
    
    // Size breathing
    float sizePulse = 1.0 + sin(t * star.twinkleSpeed * 6.0 * 0.6 + phase * 1.7) * 0.08;
    
    // Global breathing for galaxy presets
    float breathing = uniforms.globalBreathing;
    
    // Depth-dependent parallax factor (near stars move more)
    // zDepth: 0=far, 1=near  →  parallax: 0.15..1.0
    float parallaxFactor = 0.15 + star.zDepth * 0.85;
    
    // Multi-harmonic drift — complex, organic 3D motion paths
    // Primary: slow sweeping arcs; Secondary: faster ripples
    float da = star.driftAngle;
    float ds = star.driftSpeed;
    float driftX = sin(t * 0.35 + da)       * ds * 35.0 * parallaxFactor
                 + sin(t * 0.85 + da * 2.1) * ds * 14.0 * parallaxFactor;
    float driftY = cos(t * 0.28 + da * 1.3) * ds * 28.0 * parallaxFactor
                 + cos(t * 0.70 + da * 1.7) * ds * 11.0 * parallaxFactor;
    
    // Liquid flow undulation — multi-harmonic for organic, living feel
    float flowFreq = 0.3 + star.motionParams.y * 0.5;
    float flowTime = t * flowFreq + phase;
    float flowAmp = 24.0 * parallaxFactor;
    float flowX = sin(flowTime) * flowAmp
                + sin(flowTime * 1.8 + 1.5) * flowAmp * 0.3;
    float flowY = cos(flowTime * 0.7) * flowAmp * 0.75
                + cos(flowTime * 1.4 + 2.1) * flowAmp * 0.2;
    
    // Differential rotation (for galaxy presets)
    float rotAngle = uniforms.globalRotation * star.rotationFactor;
    float2 pos = star.position - 0.5; // center origin
    float2 rotatedPos;
    rotatedPos.x = pos.x * cos(rotAngle) - pos.y * sin(rotAngle);
    rotatedPos.y = pos.x * sin(rotAngle) + pos.y * cos(rotAngle);
    rotatedPos += 0.5; // back to 0..1
    
    // Apply camera drift with parallax (near stars drift more)
    float2 screenPos = rotatedPos * uniforms.resolution;
    screenPos += uniforms.cameraDrift * parallaxFactor;
    screenPos.x += driftX + flowX;
    screenPos.y += driftY + flowY;
    screenPos *= (1.0 + breathing);
    
    // Determine quad size — hero stars need larger quads for spikes
    float quadScale = star.baseSize * sizePulse;
    if (star.starType == 1 || star.starType == 3) {
        quadScale *= 14.0; // hero: accommodate diffraction spikes
    } else {
        quadScale *= 6.0;  // normal: glow radius
    }
    
    // Billboard quad vertices (6 vertices = 2 triangles)
    float2 quadOffsets[6] = {
        float2(-1, -1), float2( 1, -1), float2(-1,  1),
        float2(-1,  1), float2( 1, -1), float2( 1,  1)
    };
    float2 offset = quadOffsets[vertexID % 6];
    
    // Convert to clip space
    float2 pixelPos = screenPos + offset * quadScale;
    float2 clipPos = (pixelPos / uniforms.resolution) * 2.0 - 1.0;
    clipPos.y = -clipPos.y; // Metal Y is flipped
    
    out.position = float4(clipPos, 0.0, 1.0);
    out.uv = offset;
    
    // Color with zone tinting
    float4 col = star.color;
    if (star.zoneTintStrength > 0.0) {
        col.rgb = mix(col.rgb, star.zoneTintColor.rgb, star.zoneTintStrength);
    }
    
    // Mystical color shifting
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
    
    // Edge fade: fade stars near screen edges
    float2 normPos = screenPos / uniforms.resolution;
    float edgeFade = smoothstep(0.0, 0.05, min(min(normPos.x, 1.0 - normPos.x),
                                                 min(normPos.y, 1.0 - normPos.y)));
    // star.color.a encodes per-star baseAlpha (React: 0.3–1.0 brightness variation)
    out.finalAlpha = twinkle * uniforms.intensity * edgeFade * star.color.a;
    
    return out;
}

// ============================================================
// MARK: - Fragment Shader
// ============================================================

fragment float4 cosmicStarFragment(StarVertexOut in [[stage_in]]) {
    float2 uv = in.uv; // -1..1
    float dist = length(uv);
    
    float4 color = float4(0.0);
    float alpha = in.finalAlpha;
    float size = in.starSize;
    
    if (in.starType == 0 || in.starType == 2) {
        // ---- Normal / Mystical Star ----
        // 3-pass rendering: diffusion → glow → core
        
        // Pass 1: Atmospheric diffusion (very soft, large radius)
        float diffusion = 1.0 - smoothstep(0.0, 1.0, dist);
        diffusion = diffusion * diffusion; // quadratic falloff
        float diffAlpha = diffusion * alpha * 0.10;
        
        // Pass 2: Glow (medium radius)
        float glowDist = dist * (6.0 / 2.8); // scale to glow radius
        float glow = 1.0 - smoothstep(0.0, 1.0, glowDist);
        glow = glow * glow;
        float glowAlpha = glow * alpha * 0.40;
        
        // Pass 3: Core (sharp center, white-hot)
        float coreDist = dist * (6.0 / 1.1); // scale to core radius
        float core = 1.0 - smoothstep(0.0, 1.0, coreDist);
        core = core * core * core; // cubic sharp falloff
        float coreAlpha = core * alpha * 1.0;
        
        // Composite: diffusion (star color) + glow (star color) + core (white blend)
        float3 coreColor = mix(float3(1.0), in.starColor.rgb, 0.3);
        color.rgb = in.starColor.rgb * diffAlpha
                  + in.starColor.rgb * glowAlpha
                  + coreColor * coreAlpha;
        color.a = max(max(diffAlpha, glowAlpha), coreAlpha);
        
    } else if (in.starType == 1) {
        // ---- Hero Star (JWST-style 6-point diffraction) ----
        
        // Atmospheric halo
        float halo = 1.0 - smoothstep(0.0, 0.65, dist);
        halo = halo * halo;
        float haloAlpha = halo * alpha * 0.08;
        
        // Diffusion ring
        float diffuse = 1.0 - smoothstep(0.0, 0.36, dist);
        diffuse = diffuse * diffuse;
        float diffAlpha = diffuse * alpha * 0.15;
        
        // Core
        float core = 1.0 - smoothstep(0.0, 0.14, dist);
        core = core * core * core;
        float coreAlpha = core * alpha * 0.95;
        
        // 6-point JWST diffraction spikes
        float spikes = 0.0;
        float angle = atan2(uv.y, uv.x) + in.heroRotation;
        for (int s = 0; s < 6; s++) {
            float spikeAngle = float(s) * M_PI_F / 3.0;
            float angleDiff = abs(fmod(angle - spikeAngle + M_PI_F * 3.0, M_PI_F) - M_PI_F * 0.5);
            // Thin angular window
            float angular = 1.0 - smoothstep(0.0, 0.04, angleDiff);
            // Radial falloff from center
            float radial = 1.0 - smoothstep(0.05, 0.85, dist);
            spikes += angular * radial;
        }
        spikes = min(spikes, 1.0);
        float spikeAlpha = spikes * alpha * 0.6;
        
        // Composite
        float3 coreColor = mix(float3(1.0), in.starColor.rgb, 0.3);
        float3 spikeColor = mix(float3(1.0), in.starColor.rgb, 0.5);
        color.rgb = in.starColor.rgb * haloAlpha
                  + in.starColor.rgb * diffAlpha
                  + coreColor * coreAlpha
                  + spikeColor * spikeAlpha;
        color.a = max(max(max(haloAlpha, diffAlpha), coreAlpha), spikeAlpha);
        
    } else if (in.starType == 3) {
        // ---- Hero Anamorphic (Starburst Ring style) ----
        
        // Horizontal anamorphic spike (very long)
        float hSpike = 1.0 - smoothstep(0.0, 0.85, abs(uv.x));
        hSpike *= 1.0 - smoothstep(0.0, 0.025, abs(uv.y));
        
        // Vertical spike (shorter)
        float vSpike = 1.0 - smoothstep(0.0, 0.6, abs(uv.y));
        vSpike *= 1.0 - smoothstep(0.0, 0.02, abs(uv.x));
        
        // Diagonal cross
        float2 rot45 = float2(uv.x * 0.707 - uv.y * 0.707,
                               uv.x * 0.707 + uv.y * 0.707);
        float dSpike1 = 1.0 - smoothstep(0.0, 0.4, abs(rot45.x));
        dSpike1 *= 1.0 - smoothstep(0.0, 0.015, abs(rot45.y));
        float dSpike2 = 1.0 - smoothstep(0.0, 0.4, abs(rot45.y));
        dSpike2 *= 1.0 - smoothstep(0.0, 0.015, abs(rot45.x));
        
        float allSpikes = max(max(hSpike, vSpike), max(dSpike1, dSpike2));
        
        // Lens bloom ring
        float ringDist = abs(dist - 0.2);
        float ring = 1.0 - smoothstep(0.0, 0.03, ringDist);
        
        // Core glow
        float core = 1.0 - smoothstep(0.0, 0.12, dist);
        core = core * core * core;
        
        // Halo
        float halo = 1.0 - smoothstep(0.0, 0.55, dist);
        halo = halo * halo;
        
        float3 coreColor = float3(1.0);
        color.rgb = in.starColor.rgb * halo * alpha * 0.1
                  + in.starColor.rgb * allSpikes * alpha * 0.5
                  + in.starColor.rgb * ring * alpha * 0.3
                  + coreColor * core * alpha * 0.95;
        color.a = max(max(halo * 0.1, allSpikes * 0.5), max(ring * 0.3, core * 0.95)) * alpha;
    }
    
    // Premultiply for additive blending
    return float4(color.rgb, color.a);
}
