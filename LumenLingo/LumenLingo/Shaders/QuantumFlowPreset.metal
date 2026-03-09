#include <metal_stdlib>
using namespace metal;

// ============================================================
// MARK: - Quantum Flow Metal Shader  (optimised)
// GPU aurora borealis — 12 curtains per scene.
// Performance wins vs v1:
//   • half-precision colour/alpha  (2× ALU throughput on Apple GPU)
//   • branchless gradient shape    (no per-pixel divergence)
//   • glow on base layers only     (4 exp() instead of 12)
//   • early colour-group rejection (skip curtains far from pixel)
//   • pre-computed loop invariants
//   • saturate() free modifier instead of clamp(x,0,1)
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

// ---- Constant palette (device-constant, not rebuilt per-pixel) ----

constant half3 kDarkPalette[6][4] = {
    { half3(0.961h, 0.620h, 0.043h), half3(0.024h, 0.714h, 0.831h), half3(0.545h, 0.361h, 0.965h), half3(0.925h, 0.286h, 0.600h) },
    { half3(0.545h, 0.361h, 0.965h), half3(0.925h, 0.286h, 0.600h), half3(0.078h, 0.722h, 0.651h), half3(0.753h, 0.518h, 0.988h) },
    { half3(0.925h, 0.286h, 0.600h), half3(0.961h, 0.620h, 0.043h), half3(0.545h, 0.361h, 0.965h), half3(0.984h, 0.573h, 0.235h) },
    { half3(0.925h, 0.286h, 0.600h), half3(0.024h, 0.714h, 0.831h), half3(0.545h, 0.361h, 0.965h), half3(0.078h, 0.722h, 0.651h) },
    { half3(0.984h, 0.573h, 0.235h), half3(0.925h, 0.286h, 0.600h), half3(0.545h, 0.361h, 0.965h), half3(0.961h, 0.620h, 0.043h) },
    { half3(0.753h, 0.149h, 0.827h), half3(0.545h, 0.361h, 0.965h), half3(0.376h, 0.647h, 0.980h), half3(0.925h, 0.286h, 0.600h) },
};

constant half3 kLightPalette[6][4] = {
    { half3(0.545h, 0.765h, 0.290h), half3(0.149h, 0.776h, 0.855h), half3(0.259h, 0.647h, 0.961h), half3(0.494h, 0.341h, 0.761h) },
    { half3(0.580h, 0.384h, 0.906h), half3(0.780h, 0.361h, 0.612h), half3(0.690h, 0.302h, 0.675h), half3(0.298h, 0.655h, 0.608h) },
    { half3(1.0h,   0.561h, 0.639h), half3(1.0h,   0.690h, 0.533h), half3(1.0h,   0.624h, 0.431h), half3(0.824h, 0.569h, 0.737h) },
    { half3(0.851h, 0.275h, 0.627h), half3(0.722h, 0.310h, 0.659h), half3(0.231h, 0.604h, 0.878h), half3(0.165h, 0.659h, 0.608h) },
    { half3(1.0h,   0.690h, 0.533h), half3(1.0h,   0.561h, 0.639h), half3(0.761h, 0.569h, 0.831h), half3(0.824h, 0.569h, 0.737h) },
    { half3(0.627h, 0.267h, 0.851h), half3(0.557h, 0.306h, 0.886h), half3(0.506h, 0.365h, 0.922h), half3(0.467h, 0.439h, 0.933h) },
};

constant float kBlendDark[6]  = { 0.85, 0.96, 0.82, 0.86, 0.84, 0.87 };
constant float kBlendLight[6] = { 0.78, 0.94, 0.76, 0.79, 0.77, 0.81 };

// Intensity curve (uniform per-frame, evaluated once)
static float intensityCurve(float raw, bool isDark) {
    if (isDark) {
        if (raw <= 0.7)  return raw * 1.035;                   // 0.9 * 1.15
        if (raw <= 1.0)  return (0.63 + (raw - 0.7)) * 1.15;
        float b = raw - 1.0;
        return (0.93 + b * 0.45 * (1.0 - b * 0.12)) * 1.15;
    } else {
        if (raw <= 0.7)  return raw * 1.12;
        if (raw <= 1.0)  return 0.784 + (raw - 0.7) * 0.55;
        float b = raw - 1.0;
        return 0.949 + b * 0.22 * (1.0 - b * 0.35);
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
// MARK: - Fragment Shader  (optimised)
// ============================================================

fragment half4 quantumFlowFragment(
    float4 position [[position]],
    constant QuantumFlowUniforms& u [[buffer(0)]]
) {
    float2 uv = position.xy / u.resolution;

    int scene   = u.sceneIndex;
    bool dark   = (u.isDarkMode != 0);
    float elapsed = u.time * u.speed;

    // ---- Per-frame constants (computed once, reused 12×) ----
    float scaledIntensity = intensityCurve(u.intensity, dark);
    float blendFac = dark ? kBlendDark[clamp(scene, 0, 5)]
                          : kBlendLight[clamp(scene, 0, 5)];
    float harmonicScale = 0.8 + scaledIntensity * 0.2;
    float invResY = 1.0 / u.resolution.y;
    float resX    = u.resolution.x;

    half hScaledInt = half(scaledIntensity);
    half hBaseAlpha = dark ? 0.28h : 0.42h;
    half hAlphaCap  = dark ? 0.95h : 0.92h;
    half hBlendFac  = half(blendFac);
    half hIntBoost  = half(dark ? min(1.0 + scaledIntensity * 0.3,  1.5)
                                : min(1.0 + scaledIntensity * 0.25, 1.4));
    bool doGlow = (scaledIntensity > 0.6);

    // Branchless gradient shape parameters (dark / light selected once)
    float shR1 = dark ? 0.08 : 0.06;
    float shP1 = dark ? 0.92 : 1.00;
    float shR2 = dark ? 0.35 : 0.28;
    float shP2 = dark ? 0.75 : 0.88;
    float shR3 = dark ? 0.75 : 0.68;
    float shP3 = dark ? 0.22 : 0.34;

    // Pre-fetch palette for this scene (4 colours, half-precision)
    int sc = clamp(scene, 0, 5);
    half3 palette[4];
    for (int i = 0; i < 4; i++) {
        palette[i] = dark ? kDarkPalette[sc][i] : kLightPalette[sc][i];
    }

    // ---- Accumulator ----
    half3 col = half3(0.0h);
    half totalAlpha = 0.0h;

    float x = uv.x;

    for (int colorIdx = 0; colorIdx < 4; colorIdx++) {

        // Early rejection: skip colour group if pixel is far from curtain band.
        // Curtain bands span ~0.35 UV units; generous margin avoids false culls.
        float groupCenter = 0.3 + float(colorIdx) * 0.14;
        if (abs(uv.y - groupCenter) > 0.38) continue;

        half3 curtainColor = palette[colorIdx];

        for (int layer = 0; layer < 3; layer++) {
            int seed = colorIdx * 3 + layer;

            // ---- Seed-based diversity ----
            float yBase        = groupCenter + float(layer) * 0.04;
            float curtainHeight = (380.0 + float((seed * 42) % 200)) * invResY;
            float frequency    = (0.0008 + float(seed) * 0.0003) * resX;
            float phase        = fract(float(seed) * 1.618) * (M_PI_F * 2.0);
            float curtainSpeed = 0.4 + float((seed * 15) % 60) * 0.01;

            float h1Freq  = (0.008 + float((seed * 2) % 12) * 0.001) * resX;
            float h1Amp   = (38.0  + float((seed * 5) % 22)) * invResY;
            float h1Speed = 1.2  + float((seed * 2) % 6)  * 0.1;
            float h1Phase = fract(float(seed) * 2.718) * (M_PI_F * 2.0);

            float h2Freq  = (0.022 + float((seed * 5) % 18) * 0.001) * resX;
            float h2Amp   = (20.0  + float((seed * 3) % 14)) * invResY;
            float h2Speed = 2.2  + float((seed * 3) % 8)  * 0.1;
            float h2Phase = fract(float(seed) * 1.414) * (M_PI_F * 2.0);

            float turbScale    = (0.002 + float((seed * 5) % 30) * 0.0001) * resX;
            float turbStrength = (12.0  + float((seed * 3) % 10)) * invResY;
            float turbSpeed    = 0.8  + float((seed * 2) % 5) * 0.1;

            // ---- Wave position (4 sin + 1 cos) ----
            float waveY = yBase
                + sin(x * frequency + elapsed * curtainSpeed + phase) * 55.0 * invResY
                + sin(x * h1Freq + elapsed * h1Speed * u.speed + h1Phase) * h1Amp * harmonicScale
                + sin(x * h2Freq + elapsed * h2Speed * u.speed + h2Phase) * h2Amp * harmonicScale
                + sin(x * turbScale + elapsed * turbSpeed) * turbStrength
                  * cos(x * turbScale * 1.7 - elapsed * turbSpeed * 0.8);

            // ---- Vertical gradient ----
            float endY   = waveY - curtainHeight * (0.9 + scaledIntensity * 0.25);
            float startY = waveY + 60.0 * invResY;
            float gradT  = 1.0 - saturate((uv.y - endY) / (startY - endY + 1e-4));

            // Branchless 4-segment shape (chained smoothstep → mix, no divergence)
            half s1 = half(smoothstep(0.0, shR1, gradT));
            half s2 = half(smoothstep(shR1, shR2, gradT));
            half s3 = half(smoothstep(shR2, shR3, gradT));
            half s4 = half(smoothstep(shR3, 1.0,  gradT));
            half curtainShape = s1 * half(shP1);
            curtainShape = mix(curtainShape, half(shP2), s2);
            curtainShape = mix(curtainShape, half(shP3), s3);
            curtainShape = mix(curtainShape, 0.0h,       s4);

            // ---- Alpha ----
            half opacityFactor = (layer == 0) ? 1.0h : half(0.88 - float(layer) * 0.18);
            half alpha = min(hBaseAlpha * hScaledInt * opacityFactor * hBlendFac, hAlphaCap);
            half curtainAlpha = alpha * curtainShape * hIntBoost;

            if (curtainAlpha < 0.003h) continue;

            // ---- Blending ----
            if (dark) {
                col += curtainColor * curtainAlpha;      // additive
            } else {
                col = mix(col, curtainColor, curtainAlpha); // normal
            }
            totalAlpha = max(totalAlpha, curtainAlpha);

            // ---- Glow (base layers only — saves 8 exp() calls) ----
            if (doGlow && layer == 0) {
                half dy       = half(uv.y) - half(waveY - curtainHeight * 0.3);
                half spread2  = half(curtainHeight * 0.6);
                spread2      *= spread2;
                half glowT    = half(exp(float(-dy * dy / (2.0h * spread2))));
                half glowAlpha = dark
                    ? min(alpha * 0.58h, 0.4h)  * glowT * hScaledInt
                    : min(alpha * 0.40h, 0.28h) * glowT * hScaledInt;

                // Slight boost (1.3×) to compensate for removed secondary-layer glow
                glowAlpha *= 1.3h;

                if (dark) {
                    col += curtainColor * glowAlpha * 0.78h;
                } else {
                    col = mix(col, curtainColor, glowAlpha * 0.65h);
                }
            }
        }
    }

    // ---- Atmospheric vignette (dark mode) ----
    if (dark) {
        float aspect = u.resolution.x * invResY;
        half vig = 1.0h - half(smoothstep(0.3, 0.9, length((uv - 0.5) * float2(aspect, 1.0))));
        col *= mix(0.85h, 1.0h, vig);
    }

    // ---- Output premultiplied alpha ----
    half fa = saturate(totalAlpha);
    return half4(col * fa, fa);
}
