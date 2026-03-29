#ifndef CosmicNoise_h
#define CosmicNoise_h

#include <metal_stdlib>
using namespace metal;

// ============================================================
// MARK: - Shared Noise & Utility Functions for Cosmic Rendering
// ============================================================

// Suppress unused-function warnings — these utilities are shared across
// multiple preset shaders via #include; not every preset uses every helper.
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wunused-function"

// GPU-side seeded random matching React/Swift: sin(seed*9999 + n*7919) * 10000
static float seededRandom(int seed, int n) {
    float x = sin(float(seed) * 9999.0 + float(n) * 7919.0) * 10000.0;
    return fract(x);
}

// ============================================================
// MARK: - 3D Simplex Noise (Ashima / Stefan Gustavson)
// ============================================================

static float3 mod289_3(float3 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}

static float4 mod289_4(float4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}

static float4 permute(float4 x) {
    return mod289_4(((x * 34.0) + 1.0) * x);
}

static float4 taylorInvSqrt(float4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
}

static float snoise(float3 v) {
    const float2 C = float2(1.0 / 6.0, 1.0 / 3.0);
    const float4 D = float4(0.0, 0.5, 1.0, 2.0);

    float3 i = floor(v + dot(v, float3(C.y)));
    float3 x0 = v - i + dot(i, float3(C.x));

    float3 g = step(x0.yzx, x0.xyz);
    float3 l = 1.0 - g;
    float3 i1 = min(g.xyz, l.zxy);
    float3 i2 = max(g.xyz, l.zxy);

    float3 x1 = x0 - i1 + float3(C.x);
    float3 x2 = x0 - i2 + float3(C.y);
    float3 x3 = x0 - float3(D.y);

    i = mod289_3(i);
    float4 p = permute(permute(permute(
                i.z + float4(0.0, i1.z, i2.z, 1.0))
              + i.y + float4(0.0, i1.y, i2.y, 1.0))
              + i.x + float4(0.0, i1.x, i2.x, 1.0));

    float n_ = 0.142857142857;
    float3 ns = n_ * D.wyz - D.xzx;

    float4 j = p - 49.0 * floor(p * ns.z * ns.z);
    float4 x_ = floor(j * ns.z);
    float4 y_ = floor(j - 7.0 * x_);
    float4 x2_ = x_ * ns.x + float4(ns.y);
    float4 y2_ = y_ * ns.x + float4(ns.y);
    float4 h = 1.0 - abs(x2_) - abs(y2_);

    float4 b0 = float4(x2_.xy, y2_.xy);
    float4 b1 = float4(x2_.zw, y2_.zw);
    float4 s0 = floor(b0) * 2.0 + 1.0;
    float4 s1 = floor(b1) * 2.0 + 1.0;
    float4 sh = -step(h, float4(0.0));

    float4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    float4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

    float3 p0 = float3(a0.xy, h.x);
    float3 p1 = float3(a0.zw, h.y);
    float3 p2 = float3(a1.xy, h.z);
    float3 p3 = float3(a1.zw, h.w);

    float4 norm = taylorInvSqrt(float4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    float4 m = max(0.6 - float4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, float4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

// ============================================================
// MARK: - Fractal Brownian Motion
// ============================================================

static float fbm(float3 p, int octaves, float lacunarity, float gain) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    float maxValue = 0.0;
    for (int i = 0; i < octaves; i++) {
        value += amplitude * snoise(p * frequency);
        maxValue += amplitude;
        amplitude *= gain;
        frequency *= lacunarity;
    }
    return value / maxValue;
}

// ============================================================
// MARK: - Domain Warping
// ============================================================

static float warpedFBM(float3 p, float time, int octaves) {
    float3 q = float3(
        fbm(p + float3(0.0, 0.0, 0.0), octaves, 2.0, 0.5),
        fbm(p + float3(5.2, 1.3, 2.8), octaves, 2.0, 0.5),
        fbm(p + float3(1.7, 9.2, 3.4), octaves, 2.0, 0.5)
    );
    float3 r = float3(
        fbm(p + 4.0*q + float3(1.7, 9.2, time*0.15), octaves, 2.0, 0.5),
        fbm(p + 4.0*q + float3(8.3, 2.8, time*0.12), octaves, 2.0, 0.5),
        fbm(p + 4.0*q + float3(3.1, 6.5, time*0.10), octaves, 2.0, 0.5)
    );
    return fbm(p + 4.0*r, octaves, 2.0, 0.5);
}

// ============================================================
// MARK: - Gradient Helpers
// ============================================================

// Inverse radial: 1 at center, 0 at edge
static float radialGlow(float2 uv, float2 center, float radius) {
    float d = length(uv - center);
    return 1.0 - smoothstep(0.0, radius, d);
}

// Gaussian distribution
static float gaussian(float x, float sigma) {
    return exp(-(x*x) / (2.0 * sigma * sigma));
}

static float gaussian2D(float2 p, float2 center, float2 sigma) {
    float2 d = p - center;
    return exp(-(d.x*d.x)/(2.0*sigma.x*sigma.x) - (d.y*d.y)/(2.0*sigma.y*sigma.y));
}

// ============================================================
// MARK: - Color Blending Utilities
// ============================================================

// Screen blend: 1 - (1-a)*(1-b) — matches CSS 'screen' composite
static float3 screenBlend(float3 base, float3 overlay, float opacity) {
    float3 result = 1.0 - (1.0 - base) * (1.0 - overlay * opacity);
    return result;
}

// Additive / lighter blend
static float3 additiveBlend(float3 base, float3 overlay, float opacity) {
    return min(base + overlay * opacity, float3(1.0));
}

// Multiply blend
static float3 multiplyBlend(float3 base, float3 overlay, float opacity) {
    return mix(base, base * overlay, opacity);
}

// Color from RGB bytes
static float3 rgb(float r, float g, float b) {
    return float3(r / 255.0, g / 255.0, b / 255.0);
}

#pragma clang diagnostic pop

// ============================================================
// MARK: - Shared Uniform Structs
// ============================================================

struct CosmicUniforms {
    float time;
    float intensity;
    float speed;
    float2 resolution;
    int presetIndex; // 0=lagoon, 1=celestial, 2=solarAurora, 3=spiralHalo, 4=edgeAndromeda, 5=starburstRing
};

// ============================================================
// MARK: - Pre-computed Gas Cloud Particle Data
// Used by SpiralHaloPreset to avoid per-pixel seededRandom calls.
// Filled once on CPU, passed as buffer to fragment shader.
// ============================================================

struct GasCloudData {
    float basePosX;      // For non-arm: final X. For arm: spread offset X
    float basePosY;      // For non-arm: final Y. For arm: spread offset Y
    float depth;         // Parallax depth 0..1
    float sizePx;        // Size in reference pixels
    float colorR;        // RGB color
    float colorG;
    float colorB;
    float baseAlpha;     // Base opacity
    float phase;         // Animation phase
    float flowFreq;      // Flow oscillation frequency
    float flowBaseMul;   // Flow amplitude base (pre refWidth division)
    float pulseFreq;     // Pulse breathing frequency
    float pulsePhase;    // Pulse phase offset
    float spiralDist;    // >0 for arm particles needing rotation
    float spiralTheta;   // Spiral arm angle (for rotation reconstruction)
    float _pad0;         // Padding to 64 bytes (16 floats)
};

// ============================================================
// MARK: - Pre-computed Aurora Ribbon Data
// Used by SolarAuroraPreset to avoid per-pixel seededRandom calls.
// Filled once on CPU, passed as buffer to fragment shader.
// ============================================================

struct AuroraRibbonData {
    float baseHeight;    // Y center (0.2-0.65)
    float speed;         // Animation speed
    float drift;         // Horizontal drift factor
    float colorOffset;   // Color cycle phase
    float amplitude;     // Wave amplitude
    float frequency;     // Wave frequency
    float width;         // Ribbon width in UV
    float flowSpeed;     // Traveling shimmer speed
    float segHeight;     // Segment height (vertical extent)
    int   geomType;      // 0-5 geometry type
    float depth;         // Layer depth (0..1)
    float _pad0;         // Padding to 48 bytes (12 floats)
};

#endif /* CosmicNoise_h */
