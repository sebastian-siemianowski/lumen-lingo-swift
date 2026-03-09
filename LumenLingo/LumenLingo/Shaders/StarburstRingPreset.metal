#include <metal_stdlib>
#include "CosmicNoise.h"
using namespace metal;

// ============================================================
// MARK: - Starburst Ring Galaxy Background  
// Hoag's Object: event horizon, ring gas structure, accretion disk,
// violet/magenta/cyan nebula clouds, core glow
// ============================================================

vertex float4 starburstBgVertex(uint vid [[vertex_id]]) {
    float2 pos;
    pos.x = (vid == 1) ? 3.0 : -1.0;
    pos.y = (vid == 2) ? 3.0 : -1.0;
    return float4(pos, 0.0, 1.0);
}

fragment float4 starburstBgFragment(
    float4 position [[position]],
    constant CosmicUniforms& u [[buffer(0)]]
) {
    float2 uv = position.xy / u.resolution;
    float2 centered = uv - 0.5;
    float dist = length(centered);
    float angle = atan2(centered.y, centered.x);
    float t = u.time * u.speed * 0.3;
    
    // Deep void — true black center with violet fringes
    float3 voidCenter = float3(0.0);
    float3 voidMid = rgb(25, 10, 50);
    float3 voidEdge = rgb(14, 6, 42);
    float3 voidFar = rgb(4, 2, 14);
    
    float3 col;
    if (dist < 0.08) {
        col = voidCenter; // True black center
    } else if (dist < 0.2) {
        col = mix(voidCenter, voidMid, smoothstep(0.08, 0.2, dist));
    } else {
        col = mix(voidMid, mix(voidEdge, voidFar, smoothstep(0.4, 0.8, dist)), smoothstep(0.2, 0.5, dist));
    }
    
    // ---- Event Horizon ----
    // Hard black circle at ~11% radius
    float eventHorizon = 1.0 - smoothstep(0.08, 0.11, dist);
    col = mix(col, float3(0.0), eventHorizon);
    
    // ---- Atmospheric Wash ----
    float3 violetWash = rgb(125, 44, 255);
    float washGlow = radialGlow(uv, float2(0.5, 0.5), 0.6);
    washGlow = pow(washGlow, 2.0);
    col = screenBlend(col, violetWash, washGlow * 0.04 * u.intensity);
    
    // ---- Core Glow ----
    float3 coreColor = rgb(217, 196, 255);
    float coreGlow = gaussian2D(uv, float2(0.5, 0.5), float2(0.03, 0.03));
    col = screenBlend(col, coreColor, coreGlow * 0.20 * u.intensity);
    
    // Inner halo
    float3 innerHalo = rgb(154, 86, 255);
    float iHalo = gaussian2D(uv, float2(0.5, 0.5), float2(0.06, 0.06));
    col = screenBlend(col, innerHalo, iHalo * 0.10 * u.intensity);
    
    // ---- Ring Gas Structure (~200 particles) ----
    float ringRadius = 0.35;
    float ringSpread = 0.09;
    float ringRotation = t * 0.013; // Very slow rotation
    
    for (int i = 0; i < 80; i++) {
        float particleAngle = seededRandom(55, i * 5) * M_PI_F * 2.0 + ringRotation;
        float particleR = ringRadius + (seededRandom(55, i * 5 + 1) - 0.5) * ringSpread * 2.0;
        float pSize = 0.03 + seededRandom(55, i * 5 + 2) * 0.05;
        
        // Fluid dynamics: 3 wave frequencies
        float waveA = sin(particleAngle * 3.0 + t * 0.2) * 0.015;
        float waveB = cos(particleAngle * 6.0 - t * 0.15) * 0.008;
        float waveC = sin(particleAngle * 10.0 + t * 0.4) * 0.004;
        particleR += waveA + waveB + waveC;
        
        float2 pPos = float2(0.5 + cos(particleAngle) * particleR,
                              0.5 + sin(particleAngle) * particleR);
        float d = length(uv - pPos) / pSize;
        
        if (d < 1.0) {
            // Color: violet/magenta/cyan mix
            float cc = seededRandom(55, i * 5 + 3);
            float3 gasColor;
            if (cc < 0.35) gasColor = rgb(125, 44, 255);      // violet
            else if (cc < 0.6) gasColor = rgb(208, 75, 255);   // magenta
            else if (cc < 0.8) gasColor = rgb(75, 216, 255);   // neon blue
            else gasColor = rgb(154, 86, 255);                  // inner halo
            
            float falloff = 1.0 - smoothstep(0.0, 1.0, d);
            falloff = falloff * falloff;
            float breathe = sin(t * 0.8 + seededRandom(55, i * 5 + 4) * M_PI_F * 2.0) * 0.1 + 0.9;
            float alpha = 0.03 * falloff * breathe * u.intensity;
            col = additiveBlend(col, gasColor, alpha);
        }
    }
    
    // ---- Accretion Disk (~60 particles, inner) ----
    for (int i = 0; i < 60; i++) {
        float aAngle = seededRandom(77, i * 4) * M_PI_F * 2.0;
        float rNorm = seededRandom(77, i * 4 + 1);
        float aR = 0.13 + rNorm * 0.20; // 0.13..0.33
        
        // Keplerian speed: inner orbits faster
        float orbSpeed = 0.04 * (1.0 + (1.0 - rNorm) * 2.5);
        aAngle += t * orbSpeed;
        
        float2 aPos = float2(0.5 + cos(aAngle) * aR, 0.5 + sin(aAngle) * aR);
        float aSize = 0.012 + seededRandom(77, i * 4 + 2) * 0.025;
        
        // Spaghettification: stretch along orbital tangent
        float2 tangent = float2(-sin(aAngle), cos(aAngle));
        float2 toPixel = uv - aPos;
        float along = abs(dot(toPixel, tangent)) / (aSize * 2.5);
        float across = abs(dot(toPixel, float2(tangent.y, -tangent.x))) / aSize;
        float d = sqrt(along * along + across * across);
        
        if (d < 1.5) {
            float3 accColor = mix(rgb(200, 160, 255), rgb(255, 200, 240), rNorm);
            float falloff = 1.0 - smoothstep(0.0, 1.5, d);
            falloff = falloff * falloff;
            col = additiveBlend(col, accColor, falloff * 0.025 * u.intensity);
        }
    }
    
    // ---- Natural Nebula Clouds (4 zones) ----
    // Violet zone
    float3 nebViolet = rgb(125, 44, 255);
    float nv = radialGlow(uv, float2(0.35, 0.40), 0.18);
    nv = pow(nv, 2.5);
    col = screenBlend(col, nebViolet, nv * 0.06 * u.intensity);
    
    // Magenta zone
    float3 nebMagenta = rgb(208, 75, 255);
    float nm = radialGlow(uv, float2(0.62, 0.55), 0.15);
    nm = pow(nm, 2.5);
    col = screenBlend(col, nebMagenta, nm * 0.05 * u.intensity);
    
    // Blue-violet zone
    float3 nebBlueV = rgb(90, 60, 220);
    float nbv = radialGlow(uv, float2(0.45, 0.65), 0.16);
    nbv = pow(nbv, 2.5);
    col = screenBlend(col, nebBlueV, nbv * 0.04 * u.intensity);
    
    // Cyan zone
    float3 nebCyan = rgb(75, 216, 255);
    float nc = radialGlow(uv, float2(0.58, 0.38), 0.14);
    nc = pow(nc, 2.5);
    col = screenBlend(col, nebCyan, nc * 0.035 * u.intensity);
    
    // ---- Warped FBM ring detail ----
    float3 gasP = float3(centered * 4.0, t * 0.05);
    float gasNoise = warpedFBM(gasP, t, 4);
    float ringMask = gaussian(dist - ringRadius, ringSpread * 0.8);
    float gasDensity = pow(gasNoise * 0.5 + 0.5, 2.0) * ringMask;
    float3 ringGasColor = mix(rgb(154, 86, 255), rgb(208, 75, 255), gasNoise * 0.5 + 0.5);
    col = screenBlend(col, ringGasColor, gasDensity * 0.10 * u.intensity);
    
    float alpha = clamp(length(col) * 5.0 + 0.3, 0.0, 1.0);
    return float4(col, alpha);
}
