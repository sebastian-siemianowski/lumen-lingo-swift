#include <metal_stdlib>
#include "CosmicNoise.h"
using namespace metal;

// ============================================================
// MARK: - Quantum Flow Metal Shader
// GPU aurora borealis — 12 curtains per scene, harmonic waves,
// vertical gradient fading, turbulence, domain warping, glow.
// Replaces the SwiftUI Canvas version for maximum performance.
// ============================================================

// Uniform struct matching the Swift side
struct QuantumFlowUniforms {
    float time;
    float intensity;
    float speed;
    float2 resolution;
    int sceneIndex;   // 0..5 matching QuantumFlowScene
    int isDarkMode;   // 0 or 1
};

// ---- Per-scene curtain colors (4 per scene, dark mode) ----
// Dubai:         Gold / Cyan / Violet / Pink
// Kyoto:         Violet / Pink / Teal / Lavender
// Buenos Aires:  Pink / Gold / Violet / Orange
// Hong Kong:     Pink / Cyan / Violet / Teal
// Marrakech:     Orange / Pink / Violet / Gold
// Vienna:        Fuchsia / Violet / Blue / Pink

static float3 darkSceneColor(int scene, int colorIdx) {
    // Row = scene, Col = colorIdx (0..3)
    // Using the exact hex values from QuantumFlowScene.colors
    const float3 palette[6][4] = {
        // Dubai
        { float3(0.961, 0.620, 0.043), float3(0.024, 0.714, 0.831), float3(0.545, 0.361, 0.965), float3(0.925, 0.286, 0.600) },
        // Kyoto
        { float3(0.545, 0.361, 0.965), float3(0.925, 0.286, 0.600), float3(0.078, 0.722, 0.651), float3(0.753, 0.518, 0.988) },
        // Buenos Aires
        { float3(0.925, 0.286, 0.600), float3(0.961, 0.620, 0.043), float3(0.545, 0.361, 0.965), float3(0.984, 0.573, 0.235) },
        // Hong Kong
        { float3(0.925, 0.286, 0.600), float3(0.024, 0.714, 0.831), float3(0.545, 0.361, 0.965), float3(0.078, 0.722, 0.651) },
        // Marrakech
        { float3(0.984, 0.573, 0.235), float3(0.925, 0.286, 0.600), float3(0.545, 0.361, 0.965), float3(0.961, 0.620, 0.043) },
        // Vienna
        { float3(0.753, 0.149, 0.827), float3(0.545, 0.361, 0.965), float3(0.376, 0.647, 0.980), float3(0.925, 0.286, 0.600) },
    };
    return palette[clamp(scene, 0, 5)][clamp(colorIdx, 0, 3)];
}

static float3 lightSceneColor(int scene, int colorIdx) {
    const float3 palette[6][4] = {
        // Dubai light
        { float3(0.545, 0.765, 0.290), float3(0.149, 0.776, 0.855), float3(0.259, 0.647, 0.961), float3(0.494, 0.341, 0.761) },
        // Kyoto light
        { float3(0.580, 0.384, 0.906), float3(0.780, 0.361, 0.612), float3(0.690, 0.302, 0.675), float3(0.298, 0.655, 0.608) },
        // Buenos Aires light
        { float3(1.0, 0.561, 0.639), float3(1.0, 0.690, 0.533), float3(1.0, 0.624, 0.431), float3(0.824, 0.569, 0.737) },
        // Hong Kong light
        { float3(0.851, 0.275, 0.627), float3(0.722, 0.310, 0.659), float3(0.231, 0.604, 0.878), float3(0.165, 0.659, 0.608) },
        // Marrakech light
        { float3(1.0, 0.690, 0.533), float3(1.0, 0.561, 0.639), float3(0.761, 0.569, 0.831), float3(0.824, 0.569, 0.737) },
        // Vienna light
        { float3(0.627, 0.267, 0.851), float3(0.557, 0.306, 0.886), float3(0.506, 0.365, 0.922), float3(0.467, 0.439, 0.933) },
    };
    return palette[clamp(scene, 0, 5)][clamp(colorIdx, 0, 3)];
}

// Per-scene blend factor
static float sceneBlendFactor(int scene, int isDark) {
    const float dark[6]  = { 0.85, 0.96, 0.82, 0.86, 0.84, 0.87 };
    const float light[6] = { 0.78, 0.94, 0.76, 0.79, 0.77, 0.81 };
    int s = clamp(scene, 0, 5);
    return isDark ? dark[s] : light[s];
}

// Intensity curve matching React's getIntensityCurve
static float intensityCurve(float raw, int isDark) {
    if (isDark) {
        if (raw <= 0.7) {
            return raw * 0.9 * 1.15;
        } else if (raw <= 1.0) {
            return (0.63 + (raw - 0.7) * 1.0) * 1.15;
        } else {
            float bloom = raw - 1.0;
            return (0.93 + (bloom * 0.45 * (1.0 - bloom * 0.12))) * 1.15;
        }
    } else {
        if (raw <= 0.7) {
            return raw * 1.12;
        } else if (raw <= 1.0) {
            return 0.784 + (raw - 0.7) * 0.55;
        } else {
            float bloom = raw - 1.0;
            return 0.949 + (bloom * 0.22 * (1.0 - bloom * 0.35));
        }
    }
}

// ============================================================
// MARK: - Vertex Shader (fullscreen triangle)
// ============================================================

vertex float4 quantumFlowVertex(uint vid [[vertex_id]]) {
    float2 pos;
    pos.x = (vid == 1) ? 3.0 : -1.0;
    pos.y = (vid == 2) ? 3.0 : -1.0;
    return float4(pos, 0.0, 1.0);
}

// ============================================================
// MARK: - Fragment Shader
// ============================================================

fragment float4 quantumFlowFragment(
    float4 position [[position]],
    constant QuantumFlowUniforms& u [[buffer(0)]]
) {
    float2 uv = position.xy / u.resolution;
    float aspect = u.resolution.x / u.resolution.y;
    
    int scene = u.sceneIndex;
    int dark = u.isDarkMode;
    float elapsed = u.time * u.speed;
    float scaledIntensity = intensityCurve(u.intensity, dark);
    float blendFac = sceneBlendFactor(scene, dark);
    
    // Start with transparent black — we render only the aurora, composited on top
    float3 col = float3(0.0);
    float totalAlpha = 0.0;
    
    // 4 colors × 3 layers = 12 curtains (matching the React & Canvas version)
    for (int colorIdx = 0; colorIdx < 4; colorIdx++) {
        float3 curtainColor = dark ? darkSceneColor(scene, colorIdx) : lightSceneColor(scene, colorIdx);
        
        for (int layer = 0; layer < 3; layer++) {
            int seed = colorIdx * 3 + layer;
            bool isBase = (layer == 0);
            
            // ---- Seed-based parameter diversity (golden ratio / e seeding) ----
            float yBase = 0.3 + float(colorIdx) * 0.14 + float(layer) * 0.04;
            float curtainHeight = (380.0 + float((seed * 42) % 200)) / u.resolution.y;
            float frequency = (0.0008 + float(seed) * 0.0003) * u.resolution.x;
            float phase = fract(float(seed) * 1.618) * M_PI_F * 2.0;
            float curtainSpeed = 0.4 + float((seed * 15) % 60) / 100.0;
            
            // Harmonics
            float h1Freq = (0.008 + float((seed * 2) % 12) / 1000.0) * u.resolution.x;
            float h1Amp  = (38.0 + float((seed * 5) % 22)) / u.resolution.y;
            float h1Speed = 1.2 + float((seed * 2) % 6) / 10.0;
            float h1Phase = fract(float(seed) * 2.718) * M_PI_F * 2.0;
            
            float h2Freq = (0.022 + float((seed * 5) % 18) / 1000.0) * u.resolution.x;
            float h2Amp  = (20.0 + float((seed * 3) % 14)) / u.resolution.y;
            float h2Speed = 2.2 + float((seed * 3) % 8) / 10.0;
            float h2Phase = fract(float(seed) * 1.414) * M_PI_F * 2.0;
            
            // Turbulence
            float turbScale = (0.002 + float((seed * 5) % 30) / 10000.0) * u.resolution.x;
            float turbStrength = (12.0 + float((seed * 3) % 10)) / u.resolution.y;
            float turbSpeed = 0.8 + float((seed * 2) % 5) / 10.0;
            
            // ---- Compute wave position ----
            float x = uv.x;
            float waveY = yBase;
            
            // Primary smooth wave
            waveY += sin(x * frequency + elapsed * curtainSpeed + phase) * 55.0 / u.resolution.y;
            
            // Two harmonics for interference pattern
            waveY += sin(x * h1Freq + elapsed * h1Speed * u.speed + h1Phase)
                        * h1Amp * (0.8 + scaledIntensity * 0.2);
            waveY += sin(x * h2Freq + elapsed * h2Speed * u.speed + h2Phase)
                        * h2Amp * (0.8 + scaledIntensity * 0.2);
            
            // Turbulence for organic natural feel
            waveY += sin(x * turbScale + elapsed * turbSpeed)
                        * turbStrength
                        * cos(x * turbScale * 1.7 - elapsed * turbSpeed * 0.8);
            
            // ---- Vertical gradient from wave position upward ----
            // pixel "above" the wave brightens, pixel "below" fades to zero
            float endY = waveY - curtainHeight * (0.9 + scaledIntensity * 0.25);
            float startY = waveY + 60.0 / u.resolution.y;
            
            // t=0 at bottom (startY), t=1 at top (endY) — aurora rises upward
            float gradT = 1.0 - clamp((uv.y - endY) / (startY - endY + 0.0001), 0.0, 1.0);
            
            // 9-stop gradient mapped to smooth curve
            float curtainShape;
            if (dark) {
                // Dark mode: concentrated near wave edge
                if (gradT < 0.08) {
                    curtainShape = smoothstep(0.0, 0.08, gradT) * 0.92;
                } else if (gradT < 0.35) {
                    curtainShape = mix(0.92, 0.75, smoothstep(0.08, 0.35, gradT));
                } else if (gradT < 0.75) {
                    curtainShape = mix(0.75, 0.22, smoothstep(0.35, 0.75, gradT));
                } else {
                    curtainShape = mix(0.22, 0.0, smoothstep(0.75, 1.0, gradT));
                }
            } else {
                // Light mode: broader, softer
                if (gradT < 0.06) {
                    curtainShape = smoothstep(0.0, 0.06, gradT) * 1.0;
                } else if (gradT < 0.28) {
                    curtainShape = mix(1.0, 0.88, smoothstep(0.06, 0.28, gradT));
                } else if (gradT < 0.68) {
                    curtainShape = mix(0.88, 0.34, smoothstep(0.28, 0.68, gradT));
                } else {
                    curtainShape = mix(0.34, 0.0, smoothstep(0.68, 1.0, gradT));
                }
            }
            
            // Opacity factor: base layer full, others fade
            float opacityFactor = isBase ? 1.0 : (0.8 - float(layer) * 0.2);
            float baseAlpha = dark ? 0.21 : 0.32;
            float alpha = min(baseAlpha * scaledIntensity * opacityFactor * blendFac,
                              dark ? 0.88 : 0.85);
            
            float intensityBoost = dark
                ? min(1.0 + scaledIntensity * 0.2, 1.3)
                : min(1.0 + scaledIntensity * 0.18, 1.22);
            
            float curtainAlpha = alpha * curtainShape * intensityBoost;
            
            if (curtainAlpha < 0.003) continue;
            
            // ---- Additive blending in dark, normal in light ----
            if (dark) {
                col += curtainColor * curtainAlpha;
            } else {
                col = mix(col, curtainColor, curtainAlpha);
            }
            totalAlpha = max(totalAlpha, curtainAlpha);
            
            // ---- Glow for high intensity ----
            if (scaledIntensity > 0.6) {
                // Approximate Gaussian glow around the wave center
                float glowCenterY = waveY - curtainHeight * 0.3;
                float glowSpread = curtainHeight * 0.6;
                float glowT = exp(-(uv.y - glowCenterY) * (uv.y - glowCenterY) / (2.0 * glowSpread * glowSpread));
                float glowAlpha = dark
                    ? min(alpha * 0.45, 0.3) * glowT * scaledIntensity
                    : min(alpha * 0.30, 0.2) * glowT * scaledIntensity;
                
                if (dark) {
                    col += curtainColor * glowAlpha * 0.6;
                } else {
                    col = mix(col, curtainColor, glowAlpha * 0.5);
                }
            }
        }
    }
    
    // ---- Atmospheric depth effect ----
    // Subtle radial darkening for depth in dark mode
    if (dark) {
        float vignette = 1.0 - smoothstep(0.3, 0.9, length((uv - 0.5) * float2(aspect, 1.0)));
        col *= mix(0.85, 1.0, vignette);
    }
    
    // ---- Final compositing ----
    // Output premultiplied alpha for proper blending in the layer stack
    float finalAlpha = clamp(totalAlpha, 0.0, 1.0);
    return float4(col * finalAlpha, finalAlpha);
}
