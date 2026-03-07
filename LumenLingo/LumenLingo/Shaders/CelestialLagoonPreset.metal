#include <metal_stdlib>
#include "CosmicNoise.h"
using namespace metal;

// ============================================================
// MARK: - Celestial Lagoon Nebula Background
// Deep-space turquoise nebula with turbulent gas clouds,
// 3-layer parallax, aqua/cyan/teal turbulent gas
// COMPLETE VISUAL OVERHAUL — replaces underwater bioluminescent
// ============================================================

vertex float4 celestialBgVertex(uint vid [[vertex_id]]) {
    float2 pos;
    pos.x = (vid == 1) ? 3.0 : -1.0;
    pos.y = (vid == 2) ? 3.0 : -1.0;
    return float4(pos, 0.0, 1.0);
}

fragment float4 celestialBgFragment(
    float4 position [[position]],
    constant CosmicUniforms& u [[buffer(0)]]
) {
    float2 uv = position.xy / u.resolution;
    float2 centered = uv - 0.5;
    float t = u.time * u.speed * 0.3;
    float dist = length(centered);
    
    // Foundation void — deep ocean dark
    float3 voidInner = rgb(6, 15, 28);
    float3 voidOuter = rgb(2, 4, 10);
    float3 col = mix(voidInner, voidOuter, smoothstep(0.0, 0.7, dist));
    
    // ---- Ambient Aqua Glow ----
    float3 aquaColor = rgb(25, 165, 160);
    float aquaGlow = radialGlow(uv, float2(0.5, 0.45), 0.6);
    aquaGlow = pow(aquaGlow, 2.0);
    col = screenBlend(col, aquaColor, aquaGlow * 0.08 * u.intensity);
    
    // ---- Turbulent Gas Clouds (4 layers × 35 blobs = 140) ----
    for (int layer = 0; layer < 4; layer++) {
        float layerScale = 1.0 + float(layer) * 0.3;
        float layerSpeed = 0.04 + float(layer) * 0.01;
        
        for (int blob = 0; blob < 35; blob++) {
            int idx = layer * 35 + blob;
            float bx = seededRandom(99, idx * 4);
            float by = seededRandom(99, idx * 4 + 1);
            float bsize = 0.08 + seededRandom(99, idx * 4 + 2) * 0.18;
            bsize *= layerScale;
            
            // Color: aqua/cyan/teal range
            float cc = seededRandom(99, idx * 4 + 3);
            float3 blobColor;
            if (cc < 0.3)
                blobColor = rgb(15, 200, 230);     // bright aqua
            else if (cc < 0.55)
                blobColor = rgb(40, 180, 200);      // cyan
            else if (cc < 0.75)
                blobColor = rgb(30, 150, 180);      // teal
            else if (cc < 0.9)
                blobColor = rgb(70, 235, 220);      // mint cyan
            else
                blobColor = rgb(50, 160, 148);      // deep teal
            
            // Sinusoidal drift
            float phase = seededRandom(99, idx * 7) * M_PI_F * 2.0;
            float driftX = sin(t * layerSpeed * 3.0 + phase) * 0.02;
            float driftY = cos(t * layerSpeed * 2.5 + phase * 1.3) * 0.015;
            
            // Pulsing opacity
            float pulse = sin(t * 0.5 + phase) * 0.3 + 0.7;
            
            float2 blobPos = float2(bx + driftX, by + driftY);
            float d = length(uv - blobPos) / bsize;
            
            if (d < 1.0) {
                float falloff = 1.0 - smoothstep(0.0, 1.0, d);
                falloff = falloff * falloff;
                float alpha = 0.04 * pulse * u.intensity * falloff;
                col = additiveBlend(col, blobColor, alpha);
            }
        }
    }
    
    // ---- Warped FBM gas structure ----
    float3 gasP = float3(centered * 2.5, t * 0.08);
    float gasNoise = warpedFBM(gasP, t, 5);
    float gasDensity = (gasNoise * 0.5 + 0.5);
    gasDensity = pow(gasDensity, 1.8);
    
    float3 gasColor1 = rgb(25, 180, 200);
    float3 gasColor2 = rgb(80, 235, 220);
    float3 gasColor = mix(gasColor1, gasColor2, smoothstep(-0.2, 0.5, gasNoise));
    col = screenBlend(col, gasColor, gasDensity * 0.12 * u.intensity);
    
    // ---- Animated Color Overlays ----
    // Cyan currents (slow drift)
    float3 cyanCurrent = rgb(100, 245, 255);
    float cyanFlow = radialGlow(uv, float2(0.3 + sin(t * 0.1) * 0.1, 0.4 + cos(t * 0.08) * 0.05), 0.35);
    cyanFlow = pow(cyanFlow, 3.0);
    col = screenBlend(col, cyanCurrent, cyanFlow * 0.04 * u.intensity);
    
    // Turquoise wisps
    float3 turqWisp = rgb(120, 255, 235);
    float turqFlow = radialGlow(uv, float2(0.6 + cos(t * 0.09) * 0.08, 0.55 + sin(t * 0.07) * 0.06), 0.3);
    turqFlow = pow(turqFlow, 3.0);
    col = screenBlend(col, turqWisp, turqFlow * 0.035 * u.intensity);
    
    // Subtle pink accent
    float3 pinkAccent = rgb(160, 115, 140);
    float pinkFlow = radialGlow(uv, float2(0.45 + sin(t * 0.12) * 0.05, 0.5 + cos(t * 0.1) * 0.04), 0.25);
    pinkFlow = pow(pinkFlow, 3.0);
    col = screenBlend(col, pinkAccent, pinkFlow * 0.04 * u.intensity);
    
    // ---- Volumetric Glow ----
    float3 volColor = rgb(180, 245, 245);
    float volGlow = radialGlow(uv, float2(0.5, 0.5), 0.45);
    volGlow = pow(volGlow, 3.0);
    col = screenBlend(col, volColor, volGlow * 0.025 * u.intensity);
    
    float alpha = clamp(length(col) * 5.0 + 0.4, 0.0, 1.0);
    return float4(col, alpha);
}
