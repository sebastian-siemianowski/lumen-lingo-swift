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
    constant CosmicUniforms& u [[buffer(0)]],
    constant GasCloudData* ringGas [[buffer(1)]],
    constant GasCloudData* accretion [[buffer(2)]]
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
    washGlow = washGlow * washGlow;
    col = screenBlend(col, violetWash, washGlow * 0.04 * u.intensity);
    
    // ---- Core Glow ----
    float3 coreColor = rgb(217, 196, 255);
    float coreGlow = gaussian2D(uv, float2(0.5, 0.5), float2(0.03, 0.03));
    col = screenBlend(col, coreColor, coreGlow * 0.20 * u.intensity);
    
    // Inner halo
    float3 innerHalo = rgb(154, 86, 255);
    float iHalo = gaussian2D(uv, float2(0.5, 0.5), float2(0.06, 0.06));
    col = screenBlend(col, innerHalo, iHalo * 0.10 * u.intensity);
    
    // ---- Ring Gas Structure (~80 particles, pre-computed) ----
    float ringRadius = 0.35;
    float ringSpread = 0.09;
    float ringRotation = t * 0.004; // Match React: elapsed * 0.004 (was 0.013)
    
    float subtleDrift = t * 0.0007; // Whole-galaxy drift
    
    for (int i = 0; i < 80; i++) {
        GasCloudData p = ringGas[i];
        float particleAngle = p.phase + ringRotation + subtleDrift;
        float particleR = p.basePosX; // pre-computed radius
        float pSize = p.sizePx / 1170.0; // normalize from reference px
        
        // Fluid dynamics: 3 wave frequencies (matching React)
        float waveA = sin(particleAngle * 3.0 + t * 0.2) * 0.012;
        float waveB = cos(particleAngle * 6.0 - t * 0.15) * 0.006;
        float waveC = sin(particleAngle * 10.0 + t * 0.4) * 0.003;
        particleR += waveA + waveB + waveC;
        
        float2 pPos = float2(0.5 + cos(particleAngle) * particleR,
                              0.5 + sin(particleAngle) * particleR);
        
        // Tangential stretch: align particle along orbit direction
        float2 tangent = float2(-sin(particleAngle), cos(particleAngle));
        float2 radial = float2(tangent.y, -tangent.x);
        float2 toPixel = uv - pPos;
        float stretchFactor = p.flowFreq; // pre-computed stretch 1.5-3.0
        float deepBreath = sin(t * 0.8 + p.pulsePhase) * 0.1;
        float stretchBreath = 1.0 + deepBreath * 0.15;
        float along = abs(dot(toPixel, tangent)) / (pSize * stretchFactor * stretchBreath);
        float across = abs(dot(toPixel, radial)) / pSize;
        float d = sqrt(along * along + across * across);
        
        if (d < 1.0) {
            float3 gasColor = float3(p.colorR, p.colorG, p.colorB);
            
            // Volumetric plasma gradient (4 stops matching React sprite)
            float3 hotCenter = min(gasColor + 0.12, float3(1.0)); // +30 RGB equivalent
            float3 plasmaColor;
            float plasmaAlpha;
            if (d < 0.25) {
                plasmaColor = mix(hotCenter, gasColor, d / 0.25);
                plasmaAlpha = mix(0.25, 0.12, d / 0.25);
            } else if (d < 0.6) {
                plasmaColor = gasColor;
                plasmaAlpha = mix(0.12, 0.03, (d - 0.25) / 0.35);
            } else {
                plasmaColor = gasColor;
                plasmaAlpha = mix(0.03, 0.0, (d - 0.6) / 0.4);
            }
            
            // Ethereal breath pulsing
            float pulse = 1.0 + sin(t * (p.depth * 0.5) + p.pulsePhase) * 0.08 + deepBreath;
            float densityBoost = max(0.0, waveA + waveB) * 0.15;
            float alpha = (0.22 + densityBoost) * plasmaAlpha * pulse * u.intensity;
            col = screenBlend(col, plasmaColor, alpha);
        }
    }
    
    // ---- Accretion Disk (~60 particles, pre-computed) ----
    float eyeBreath = 1.0 + sin(t * 0.2) * 0.03;
    
    for (int i = 0; i < 60; i++) {
        GasCloudData p = accretion[i];
        float aAngle = p.phase;
        float rNorm = p.depth; // pre-computed normalized radius
        float aR = p.basePosX * eyeBreath; // pre-computed radius + breathing
        
        // Keplerian speed: inner orbits faster
        float orbSpeed = p.flowFreq;
        aAngle += t * orbSpeed + subtleDrift;
        
        float2 aPos = float2(0.5 + cos(aAngle) * aR, 0.5 + sin(aAngle) * aR);
        float aSize = (p.sizePx / 1170.0) * (0.8 + sin(t * 0.4 + p.pulsePhase) * 0.2);
        
        // Spaghettification: stretch increases near center
        float stretch = 1.5 + (1.0 - rNorm) * 2.5;
        float2 tangent = float2(-sin(aAngle), cos(aAngle));
        float2 radial = float2(tangent.y, -tangent.x);
        float2 toPixel = uv - aPos;
        float along = abs(dot(toPixel, tangent)) / (aSize * stretch);
        float across = abs(dot(toPixel, radial)) / aSize;
        float d = sqrt(along * along + across * across);
        
        if (d < 1.5) {
            float3 accColor = float3(p.colorR, p.colorG, p.colorB);
            
            // Volumetric plasma gradient
            float3 hotCenter = min(accColor + 0.12, float3(1.0));
            float3 plasmaColor;
            float plasmaAlpha;
            if (d < 0.25) {
                plasmaColor = mix(hotCenter, accColor, d / 0.25);
                plasmaAlpha = mix(0.25, 0.12, d / 0.25);
            } else if (d < 0.6) {
                plasmaColor = accColor;
                plasmaAlpha = mix(0.12, 0.03, (d - 0.25) / 0.35);
            } else {
                plasmaColor = accColor;
                plasmaAlpha = mix(0.03, 0.0, (d - 0.6) / 0.9);
            }
            
            // Brightness increases near center
            float alpha = (1.0 - rNorm * 0.7) * 0.7 * plasmaAlpha * u.intensity;
            col = screenBlend(col, plasmaColor, alpha);
        }
    }
    
    // ---- Dust Particles (15, darkening) ----
    {
        float3 dustColor = rgb(6, 3, 16);
        for (int i = 0; i < 15; i++) {
            float fi = float(i);
            float dAngle = fi / 15.0 * 6.2831853 + seededRandom(91, i * 4) * 1.0;
            dAngle += subtleDrift; // moves with galaxy drift only
            float dR = 0.35 + (seededRandom(91, i * 4 + 1) - 0.5) * 0.1;
            float dSize = (50.0 + seededRandom(91, i * 4 + 2) * 40.0) / 1170.0;
            float dOpacity = 0.1 + seededRandom(91, i * 4 + 3) * 0.1;
            
            float2 dPos = float2(0.5 + cos(dAngle) * dR, 0.5 + sin(dAngle) * dR);
            float dd = length(uv - dPos) / (dSize * 1.5);
            
            if (dd < 1.0) {
                // Radial gradient: 0.6 alpha at center → 0 at edge
                float dustAlpha = (1.0 - dd) * 0.6 * dOpacity * u.intensity;
                col = multiplyBlend(col, dustColor, dustAlpha);
            }
        }
    }
    
    // ---- Motes (4, tiny bright drifting dots) ----
    {
        float3 moteColor = rgb(210, 225, 255);
        for (int i = 0; i < 4; i++) {
            // Base position and velocity (deterministic from seed)
            float bx = seededRandom(103, i * 6);
            float by = seededRandom(103, i * 6 + 1);
            float vx = (seededRandom(103, i * 6 + 2) - 0.5) * 0.08;
            float vy = (seededRandom(103, i * 6 + 3) - 0.5) * 0.08;
            float mSize = (1.5 + seededRandom(103, i * 6 + 4) * 2.5) / 1170.0;
            float mOpacity = 0.03 + seededRandom(103, i * 6 + 5) * 0.06;
            float mPhase = seededRandom(103, i * 6 + 6) * 6.2831853;
            
            // Continuous smooth drift with wrapping
            float mx = fract(bx + vx * t * 0.1);
            float my = fract(by + vy * t * 0.1);
            
            float md = length(uv - float2(mx, my)) / mSize;
            if (md < 1.0) {
                float pulse = 0.7 + sin(t * 0.5 + mPhase) * 0.3;
                float alpha = mOpacity * 1.5 * pulse * (1.0 - md) * u.intensity;
                col = additiveBlend(col, moteColor, alpha);
            }
        }
    }
    
    // ---- Natural Nebula Clouds (4 zones, organic shapes) ----
    {
        // Violet zone — upper-left, organic blob
        float3 nebViolet = rgb(140, 100, 220);
        float2 vOff = uv - float2(0.35, 0.40);
        float vAngle = atan2(vOff.y, vOff.x);
        float vR = length(vOff / float2(0.22, 0.19)); // elliptical
        vR += sin(vAngle * 3.0 + 1.2) * 0.1 + sin(vAngle * 5.0 - 0.8) * 0.05; // organic deformation
        float nv = 1.0 - smoothstep(0.0, 1.0, vR);
        nv = nv * nv * nv; // soft falloff (blur approximation)
        col = screenBlend(col, nebViolet, nv * 0.07 * u.intensity);
        
        // Magenta zone — right, organic blob
        float3 nebMagenta = rgb(180, 80, 200);
        float2 mOff = uv - float2(0.62, 0.55);
        float mAngle = atan2(mOff.y, mOff.x);
        float mR = length(mOff / float2(0.19, 0.22)); // elliptical
        mR += sin(mAngle * 4.0 + 2.5) * 0.08 + sin(mAngle * 7.0) * 0.04;
        float nm = 1.0 - smoothstep(0.0, 1.0, mR);
        nm = nm * nm * nm;
        col = screenBlend(col, nebMagenta, nm * 0.05 * u.intensity);
        
        // Blue-violet zone — bottom, organic blob
        float3 nebBlueV = rgb(100, 120, 200);
        float2 bOff = uv - float2(0.45, 0.65);
        float bAngle = atan2(bOff.y, bOff.x);
        float bR = length(bOff / float2(0.24, 0.16)); // wide ellipse
        bR += sin(bAngle * 3.0 + 4.0) * 0.12 + sin(bAngle * 6.0 + 1.5) * 0.05;
        float nbv = 1.0 - smoothstep(0.0, 1.0, bR);
        nbv = nbv * nbv * nbv;
        col = screenBlend(col, nebBlueV, nbv * 0.04 * u.intensity);
        
        // Cyan zone — lower-left, organic blob
        float3 nebCyan = rgb(80, 160, 220);
        float2 cOff = uv - float2(0.58, 0.38);
        float cAngle = atan2(cOff.y, cOff.x);
        float cR = length(cOff / float2(0.16, 0.14)); // smaller
        cR += sin(cAngle * 5.0 + 3.3) * 0.08;
        float nc = 1.0 - smoothstep(0.0, 1.0, cR);
        nc = nc * nc * nc;
        col = screenBlend(col, nebCyan, nc * 0.035 * u.intensity);
    }
    
    // ---- Warped FBM ring detail (with ring-band mask) ----
    float ringMask = gaussian(dist - ringRadius, ringSpread * 0.8);
    if (ringMask > 0.01) {
        float3 gasP = float3(centered * 4.0, t * 0.05);
        float gasNoise = warpedFBM(gasP, t, 4);
        float gasDensity = pow(gasNoise * 0.5 + 0.5, 2.0) * ringMask;
        float3 ringGasColor = mix(rgb(154, 86, 255), rgb(208, 75, 255), gasNoise * 0.5 + 0.5);
        col = screenBlend(col, ringGasColor, gasDensity * 0.10 * u.intensity);
    }
    
    float alpha = clamp(length(col) * 5.0 + 0.3, 0.0, 1.0);
    return float4(col, alpha);
}
