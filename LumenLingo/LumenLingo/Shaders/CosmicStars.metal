#include <metal_stdlib>
#include "CosmicStarTypes.h"
using namespace metal;

// ============================================================
// MARK: - Shared Star Fragment Shader
// All 6 preset star vertex shaders output StarVertexOut;
// this fragment shader renders all star types for every preset.
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
