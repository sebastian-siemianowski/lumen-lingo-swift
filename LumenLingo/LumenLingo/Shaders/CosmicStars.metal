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
    
    if (in.starType == 0) {
        // ---- Normal Star ----
        // React normal sprite: atmospheric halo → inner aura → photosphere
        float halo = pow(max(0.0, 1.0 - dist / 1.0), 2.0);
        float aura = pow(max(0.0, 1.0 - dist / 0.62), 2.0);
        float body = pow(max(0.0, 1.0 - dist / 0.26), 3.0);

        float haloAlpha = halo * alpha * 0.10;
        float auraAlpha = aura * alpha * 0.20;
        float bodyAlpha = body * alpha * 0.92;

        float3 hotBody = mix(float3(1.0), in.starColor.rgb, 0.22);
        color.rgb = in.starColor.rgb * haloAlpha
                  + in.starColor.rgb * auraAlpha
                  + hotBody * bodyAlpha;
        color.a = max(max(haloAlpha, auraAlpha), bodyAlpha);

    } else if (in.starType == 2) {
        // ---- Halo / Nebular Star ----
        // React halo sprite: very wide atmospheric diffusion + soft glow + soft core.
        float diffuse = pow(max(0.0, 1.0 - dist / 1.05), 2.0);
        float glow = pow(max(0.0, 1.0 - dist / 0.72), 2.0);
        float core = pow(max(0.0, 1.0 - dist / 0.34), 2.5);

        float diffAlpha = diffuse * alpha * 0.15;
        float glowAlpha = glow * alpha * 0.40;
        float coreAlpha = core * alpha * 0.90;

        float3 softCore = mix(float3(1.0), in.starColor.rgb, 0.45);
        color.rgb = in.starColor.rgb * diffAlpha
                  + in.starColor.rgb * glowAlpha
                  + softCore * coreAlpha;
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
        // ---- Hero Anamorphic (React Starburst style) ----
        float2 p = uv;

        float halo = pow(max(0.0, 1.0 - dist / 1.0), 2.0);
        float aura = pow(max(0.0, 1.0 - dist / 0.62), 2.0);
        float core = pow(max(0.0, 1.0 - dist / 0.18), 3.0);

        float angle = in.heroRotation;
        float c = cos(angle);
        float s = sin(angle);
        float2 ruv = float2(p.x * c - p.y * s, p.x * s + p.y * c);
        float2 rot45 = float2(ruv.x * 0.70710678 - ruv.y * 0.70710678,
                              ruv.x * 0.70710678 + ruv.y * 0.70710678);

        // Long horizontal anamorphic flare
        float hSpike = (1.0 - smoothstep(0.0, 0.98, abs(ruv.x)))
                     * (1.0 - smoothstep(0.0, 0.020, abs(ruv.y)));

        // Distinct vertical flare
        float vSpike = (1.0 - smoothstep(0.0, 0.70, abs(ruv.y)))
                     * (1.0 - smoothstep(0.0, 0.028, abs(ruv.x)));

        // Softer diagonal glows
        float dSpike1 = (1.0 - smoothstep(0.0, 0.46, abs(rot45.x)))
                      * (1.0 - smoothstep(0.0, 0.090, abs(rot45.y)));
        float dSpike2 = (1.0 - smoothstep(0.0, 0.46, abs(rot45.y)))
                      * (1.0 - smoothstep(0.0, 0.090, abs(rot45.x)));

        float ringDist = abs(dist - 0.32);
        float bloomRing = 1.0 - smoothstep(0.0, 0.05, ringDist);

        float haloAlpha = halo * alpha * 0.22;
        float auraAlpha = aura * alpha * 0.45;
        float coreAlpha = core * alpha * 0.95;
        float hAlpha = hSpike * alpha * 0.85;
        float vAlpha = vSpike * alpha * 0.60;
        float dAlpha = max(dSpike1, dSpike2) * alpha * 0.25;
        float ringAlpha = bloomRing * alpha * 0.12;

        float3 spikeColor = mix(float3(1.0), in.starColor.rgb, 0.50);
        float3 coreColor = mix(float3(1.0), in.starColor.rgb, 0.20);

        color.rgb = in.starColor.rgb * haloAlpha
                  + in.starColor.rgb * auraAlpha
                  + spikeColor * hAlpha
                  + spikeColor * vAlpha
                  + in.starColor.rgb * dAlpha
                  + in.starColor.rgb * ringAlpha
                  + coreColor * coreAlpha;
        color.a = max(max(max(haloAlpha, auraAlpha), coreAlpha),
                      max(max(hAlpha, vAlpha), max(dAlpha, ringAlpha)));
    }
    
    // Premultiply for additive blending
    return float4(color.rgb, color.a);
}
