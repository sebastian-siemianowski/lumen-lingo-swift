#include <metal_stdlib>
#include "CosmicNoise.h"
using namespace metal;

// ============================================================
// MARK: - Spiral Halo Galaxy Background
// 4 logarithmic spiral arms rotating at ~2°/s, warm core glow,
// indigo ambience, inner halo
// ============================================================

vertex float4 spiralHaloBgVertex(uint vid [[vertex_id]]) {
    float2 pos;
    pos.x = (vid == 1) ? 3.0 : -1.0;
    pos.y = (vid == 2) ? 3.0 : -1.0;
    return float4(pos, 0.0, 1.0);
}

fragment float4 spiralHaloBgFragment(
    float4 position [[position]],
    constant CosmicUniforms& u [[buffer(0)]]
) {
    float2 uv = position.xy / u.resolution;
    float2 centered = uv - 0.5;
    float dist = length(centered);
    float angle = atan2(centered.y, centered.x);
    float t = u.time * u.speed;
    
    // Deep cosmic void
    float3 voidInner = rgb(8, 6, 22);
    float3 voidOuter = rgb(1, 1, 4);
    float3 col = mix(voidInner, voidOuter, smoothstep(0.0, 0.7, dist));
    
    // ---- Subtle Indigo Ambience ----
    float3 indigoAmb = rgb(30, 20, 60);
    col = mix(col, indigoAmb, 0.10 * u.intensity);
    
    // ---- Warm Central Glow ----
    float3 warmCore = rgb(255, 250, 235);
    float coreGlow = gaussian2D(uv, float2(0.5, 0.5), float2(0.04, 0.04));
    col = screenBlend(col, warmCore, coreGlow * 0.07 * u.intensity);
    
    // Secondary core (broader)
    float3 softCore = rgb(255, 240, 210);
    float broadCore = gaussian2D(uv, float2(0.5, 0.5), float2(0.08, 0.08));
    col = screenBlend(col, softCore, broadCore * 0.04 * u.intensity);
    
    // ---- 4 Rotating Spiral Arm Nebula Clouds ----
    float rotation = t * 0.035; // ~2°/s
    float tightness = 0.5;
    float armSpread = 0.08;
    
    for (int arm = 0; arm < 4; arm++) {
        float armAngle = float(arm) * M_PI_F * 0.5 + rotation;
        
        // Logarithmic spiral: r = a * exp(b * theta)
        // For each pixel, find closest point on spiral
        float closestDist = 999.0;
        
        // Sample multiple spiral points
        for (float theta = -M_PI_F * 3.0; theta < M_PI_F * 3.0; theta += 0.1) {
            float spiralR = 0.05 * exp(tightness * theta);
            if (spiralR > 0.5) break;
            if (spiralR < 0.02) continue;
            
            float spiralAngle = theta + armAngle;
            float2 spiralPos = float2(0.5 + cos(spiralAngle) * spiralR,
                                       0.5 + sin(spiralAngle) * spiralR);
            float d = length(uv - spiralPos);
            closestDist = min(closestDist, d);
        }
        
        // Arm brightness based on distance from spiral
        float armBrightness = 1.0 - smoothstep(0.0, armSpread, closestDist);
        armBrightness = pow(armBrightness, 2.0);
        
        // Arm color: pale blue with slight arm variation
        float3 armColor;
        if (arm == 0) armColor = rgb(155, 185, 245);
        else if (arm == 1) armColor = rgb(160, 190, 250);
        else if (arm == 2) armColor = rgb(150, 180, 240);
        else armColor = rgb(145, 175, 235);
        
        // Inter-arm wisps
        float wispNoise = snoise(float3(uv * 8.0, t * 0.05 + float(arm) * 2.0));
        float wisp = max(0.0, wispNoise * 0.5 + 0.3) * armBrightness;
        
        float armAlpha = (armBrightness * 0.15 + wisp * 0.05) * u.intensity;
        col = screenBlend(col, armColor, armAlpha);
    }
    
    // ---- Inner Indigo Halo ----
    float3 indigoHalo = rgb(90, 70, 180);
    float haloGlow = gaussian2D(uv, float2(0.5, 0.5), float2(0.12, 0.12));
    col = screenBlend(col, indigoHalo, haloGlow * 0.07 * u.intensity);
    
    // ---- Subtle Warped FBM Gas ----
    float3 gasP = float3(centered * 3.0, t * 0.03);
    float gasNoise = warpedFBM(gasP, t * 0.5, 4);
    float gasDensity = pow(gasNoise * 0.5 + 0.5, 2.0);
    float3 gasColor = rgb(140, 130, 200);
    col = screenBlend(col, gasColor, gasDensity * 0.06 * u.intensity);
    
    float alpha = clamp(length(col) * 6.0 + 0.3, 0.0, 1.0);
    return float4(col, alpha);
}
