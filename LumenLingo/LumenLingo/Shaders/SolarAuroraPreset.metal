#include <metal_stdlib>
#include "CosmicNoise.h"
using namespace metal;

// ============================================================
// MARK: - Solar Aurora Nebula Background
// Violet → Fuchsia → Gold aurora ribbons with 6 geometry types,
// traveling shimmer pulse, animated gradient overlays
// PALETTE FIX: now violet/fuchsia/gold (was incorrectly green)
// ============================================================

vertex float4 solarAuroraBgVertex(uint vid [[vertex_id]]) {
    float2 pos;
    pos.x = (vid == 1) ? 3.0 : -1.0;
    pos.y = (vid == 2) ? 3.0 : -1.0;
    return float4(pos, 0.0, 1.0);
}

fragment float4 solarAuroraBgFragment(
    float4 position [[position]],
    constant CosmicUniforms& u [[buffer(0)]]
) {
    float2 uv = position.xy / u.resolution;
    float2 centered = uv - 0.5;
    float t = u.time * u.speed * 0.35;
    
    // Deep space void
    float3 voidInner = rgb(15, 8, 25);
    float3 voidOuter = rgb(3, 2, 8);
    float dist = length(centered);
    float3 col = mix(voidInner, voidOuter, smoothstep(0.0, 0.8, dist));
    
    // ---- Ambient Violet Glow ----
    float3 violetAmb = rgb(100, 50, 180);
    float vGlow = radialGlow(uv, float2(0.5, 0.4), 0.55);
    vGlow = pow(vGlow, 2.0);
    col = screenBlend(col, violetAmb, vGlow * 0.06 * u.intensity);
    
    // ---- 9 Aurora Ribbons ----
    // React colors: c1=violet[95,45,190] → c2=fuchsia[210,60,160] → c3=gold[255,180,70]
    float3 c1 = rgb(95, 45, 190);
    float3 c2 = rgb(210, 60, 160);
    float3 c3 = rgb(255, 180, 70);
    
    float3 ribbonAccum = float3(0.0);
    
    for (int r = 0; r < 9; r++) {
        float baseY = 0.15 + seededRandom(31, r * 7) * 0.45;
        float amplitude = 0.03 + seededRandom(31, r * 7 + 1) * 0.07;
        float frequency = 3.0 + seededRandom(31, r * 7 + 2) * 8.0;
        float ribbonWidth = 0.015 + seededRandom(31, r * 7 + 3) * 0.035;
        float flowSpeed = 0.5 + seededRandom(31, r * 7 + 5) * 1.5;
        float phaseOffset = t * (0.2 + seededRandom(31, r * 7 + 5) * 0.3);
        float breathe = sin(t * 0.43 + float(r) * 0.8) * 0.3 + 0.7;
        
        // Geometry type (6 types from React)
        int geomType = r % 6;
        float x = uv.x;
        float wave;
        
        if (geomType == 0) {
            // Smooth: sin + cos
            wave = sin(x * frequency * 2.0 * M_PI_F + phaseOffset) * amplitude
                 + cos(x * frequency * 1.4 * M_PI_F + phaseOffset * 1.3) * amplitude * 0.4;
        } else if (geomType == 1) {
            // Fold: abs(sin) with offset
            float base = sin(x * frequency * 1.8 * M_PI_F + phaseOffset) * amplitude;
            wave = abs(base) * 1.5 - amplitude * 0.4;
        } else if (geomType == 2) {
            // Spiral: phase-shifted
            float spiralPhase = phaseOffset + x * M_PI_F * 2.0;
            wave = sin(x * frequency * 1.6 * M_PI_F + spiralPhase) * amplitude * (0.5 + x * 0.8);
        } else if (geomType == 3) {
            // S-curve: cubic sin
            float raw = sin(x * frequency * 2.0 * M_PI_F + phaseOffset);
            wave = raw * raw * raw * amplitude * 1.2;
        } else if (geomType == 4) {
            // Drape: catenary
            float seg = fract(x * 4.0);
            float catenary = (exp((seg - 0.5) * 3.0) + exp(-(seg - 0.5) * 3.0)) * 0.5 - 1.0;
            float drift = sin(phaseOffset + x * M_PI_F * 3.0) * 0.5;
            wave = catenary * amplitude * 0.6 + drift * amplitude * 0.3;
        } else {
            // Ripple: multi-freq
            wave = sin(x * frequency * 2.4 * M_PI_F + phaseOffset) * amplitude * 0.6
                 + sin(x * frequency * 1.2 * M_PI_F + phaseOffset * 1.7) * amplitude * 0.4
                 + cos(x * frequency * 3.6 * M_PI_F + phaseOffset * 0.6) * amplitude * 0.2;
        }
        
        float ribbonY = baseY + wave;
        float yDist = abs(uv.y - ribbonY) / ribbonWidth;
        
        if (yDist < 3.0) {
            // Color cycling: violet → fuchsia → gold
            float colorPhase = sin(t * 0.15 + float(r) * 0.7) * 0.5 + 0.5;
            float3 ribbonColor;
            if (colorPhase < 0.5) {
                ribbonColor = mix(c1, c2, colorPhase * 2.0);
            } else {
                ribbonColor = mix(c2, c3, (colorPhase - 0.5) * 2.0);
            }
            
            // Aurora Y-position tinting
            if (uv.y < 0.35) {
                // Upper: more violet
                ribbonColor = mix(ribbonColor, c1, 0.3);
            } else if (uv.y > 0.65) {
                // Lower: more amber/gold
                ribbonColor = mix(ribbonColor, c3, 0.25);
            }
            
            // Vertical gradient profile (bright core at 30%, fade at edges)  
            float profile;
            if (yDist < 0.3) {
                profile = smoothstep(0.0, 0.3, 0.3 - yDist) * 0.5 + 0.5;
            } else if (yDist < 1.0) {
                profile = 1.0 - smoothstep(0.3, 1.0, yDist);
            } else {
                profile = (1.0 - smoothstep(1.0, 3.0, yDist)) * 0.3;
            }
            
            // Traveling shimmer pulse
            float shimmer = sin(x * 12.0 - t * flowSpeed * 3.0) * 0.5 + 0.5;
            shimmer = shimmer * 0.3 + 0.7;
            
            float alpha = 0.04 * breathe * profile * shimmer;
            ribbonAccum += ribbonColor * alpha;
        }
    }
    
    col = additiveBlend(col, ribbonAccum, u.intensity);
    
    // ---- Animated Gradient Overlays ----
    // Fuchsia overlay (28s cycle)
    float3 fuchsiaOv = rgb(210, 60, 160);
    float fuchsiaGlow = radialGlow(uv, float2(0.4 + sin(t * 0.22) * 0.1, 0.35 + cos(t * 0.18) * 0.08), 0.3);
    fuchsiaGlow = pow(fuchsiaGlow, 3.0);
    col = screenBlend(col, fuchsiaOv, fuchsiaGlow * 0.04 * u.intensity);
    
    // Gold overlay (24s cycle)
    float3 goldOv = rgb(255, 180, 70);
    float goldGlow = radialGlow(uv, float2(0.6 + cos(t * 0.26) * 0.08, 0.6 + sin(t * 0.2) * 0.06), 0.25);
    goldGlow = pow(goldGlow, 3.0);
    col = screenBlend(col, goldOv, goldGlow * 0.035 * u.intensity);
    
    // Pink overlay (32s cycle)
    float3 pinkOv = rgb(255, 120, 180);
    float pinkGlow = radialGlow(uv, float2(0.5 + sin(t * 0.19) * 0.06, 0.45 + cos(t * 0.15) * 0.05), 0.28);
    pinkGlow = pow(pinkGlow, 3.0);
    col = screenBlend(col, pinkOv, pinkGlow * 0.03 * u.intensity);
    
    // ---- Volumetric Glow ----
    float3 volColor = rgb(200, 160, 240);
    float volGlow = radialGlow(uv, float2(0.5, 0.5), 0.4);
    volGlow = pow(volGlow, 3.0);
    col = screenBlend(col, volColor, volGlow * 0.022 * u.intensity);
    
    float alpha = clamp(length(col) * 5.0 + 0.35, 0.0, 1.0);
    return float4(col, alpha);
}
