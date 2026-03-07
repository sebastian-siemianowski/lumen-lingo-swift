#include <metal_stdlib>
#include "CosmicNoise.h"
using namespace metal;

// ============================================================
// MARK: - Edge of Andromeda Galaxy Background
// Edge-on galaxy with flattened disc, compact nucleus, cosmic dust
// lane, violet halos, corner color drifts
// ============================================================

vertex float4 andromedaBgVertex(uint vid [[vertex_id]]) {
    float2 pos;
    pos.x = (vid == 1) ? 3.0 : -1.0;
    pos.y = (vid == 2) ? 3.0 : -1.0;
    return float4(pos, 0.0, 1.0);
}

fragment float4 andromedaBgFragment(
    float4 position [[position]],
    constant CosmicUniforms& u [[buffer(0)]]
) {
    float2 uv = position.xy / u.resolution;
    float2 centered = uv - 0.5;
    float dist = length(centered);
    float t = u.time * u.speed * 0.25;
    
    // Deep cosmic void with violet undertones
    float3 voidColor = rgb(12, 8, 28);
    float3 col = voidColor;
    
    // ---- Violet Ambience ----
    float3 violetAmb = rgb(35, 18, 55);
    col = mix(col, violetAmb, 0.12 * u.intensity);
    
    // ---- Warm Central Region ----
    float3 warmCenter = rgb(40, 25, 35);
    float warmGlow = gaussian2D(uv, float2(0.5, 0.5), float2(0.15, 0.06));
    col = mix(col, warmCenter, warmGlow * 0.3 * u.intensity);
    
    // ---- Deep Violet Outer Haze ----
    float3 violetHaze = rgb(25, 15, 45);
    float hazeGlow = 1.0 - smoothstep(0.25, 0.6, dist);
    col = mix(col, violetHaze, hazeGlow * 0.10 * u.intensity);
    
    // ---- Galaxy Nucleus ----
    float3 nucleusColor = rgb(255, 235, 200);
    float nucleusGlow = gaussian2D(uv, float2(0.5, 0.5), float2(0.035, 0.012));
    col = screenBlend(col, nucleusColor, nucleusGlow * 0.25 * u.intensity);
    
    // Broader nucleus aura
    float3 nucleusAura = rgb(255, 230, 190);
    float auraGlow = gaussian2D(uv, float2(0.5, 0.5), float2(0.06, 0.02));
    col = screenBlend(col, nucleusAura, auraGlow * 0.10 * u.intensity);
    
    // ---- Galactic Disc ----
    // Elongated horizontal glow, narrow vertical
    float3 discColor = rgb(220, 200, 195);
    float discGlow = gaussian2D(uv, float2(0.5, 0.5), float2(0.18, 0.025));
    col = screenBlend(col, discColor, discGlow * 0.08 * u.intensity);
    
    // Bluer outer disc
    float3 blueDisc = rgb(180, 200, 230);
    float blueDiscGlow = gaussian2D(uv, float2(0.5, 0.5), float2(0.25, 0.035));
    col = screenBlend(col, blueDisc, blueDiscGlow * 0.05 * u.intensity);
    
    // ---- Cosmic Dust Lane ----
    // Dark horizontal band across center (multiply style)
    float3 dustColor = rgb(8, 5, 18);
    float dustBand = gaussian(centered.y, 0.008);
    float dustHorizontal = 1.0 - smoothstep(0.0, 0.22, abs(centered.x));
    float dustStrength = dustBand * dustHorizontal * 0.4;
    col = multiplyBlend(col, dustColor, dustStrength * u.intensity);
    
    // Secondary dust wisps
    float dustNoise = snoise(float3(centered * float2(12.0, 80.0), t * 0.05));
    float wispDust = max(0.0, dustNoise * 0.5 + 0.3);
    float wispBand = gaussian(centered.y, 0.015);
    col = multiplyBlend(col, dustColor, wispDust * wispBand * 0.2 * u.intensity);
    
    // ---- Violet Halos (upper and lower) ----
    float3 violetHalo = rgb(60, 40, 100);
    float upperHalo = gaussian2D(uv, float2(0.5, 0.25), float2(0.20, 0.12));
    float lowerHalo = gaussian2D(uv, float2(0.5, 0.75), float2(0.20, 0.12));
    col = screenBlend(col, violetHalo, (upperHalo + lowerHalo) * 0.06 * u.intensity);
    
    // ---- Magenta Accents ----
    float3 magentaAcc = rgb(180, 80, 160);
    float magGlow1 = radialGlow(uv, float2(0.35, 0.48), 0.08);
    float magGlow2 = radialGlow(uv, float2(0.62, 0.52), 0.06);
    magGlow1 = pow(magGlow1, 3.0);
    magGlow2 = pow(magGlow2, 3.0);
    col = screenBlend(col, magentaAcc, (magGlow1 + magGlow2) * 0.04 * u.intensity);
    
    // ---- Warped FBM for structural detail ----
    float3 gasP = float3(centered * float2(3.0, 8.0), t * 0.05);
    float gasNoise = warpedFBM(gasP, t, 4);
    float gasDensity = pow(gasNoise * 0.5 + 0.5, 2.5);
    float3 gasColor = mix(rgb(180, 160, 200), rgb(200, 180, 160), smoothstep(-0.2, 0.4, gasNoise));
    float discMask = gaussian(centered.y, 0.04);
    col = screenBlend(col, gasColor, gasDensity * discMask * 0.08 * u.intensity);
    
    float alpha = clamp(length(col) * 5.0 + 0.35, 0.0, 1.0);
    return float4(col, alpha);
}
