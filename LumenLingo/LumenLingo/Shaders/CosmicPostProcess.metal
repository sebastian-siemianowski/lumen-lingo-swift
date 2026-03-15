#include <metal_stdlib>
#include "CosmicNoise.h"
using namespace metal;

// ============================================================
// MARK: - Post-Processing Uniforms
// ============================================================

struct PostProcessUniforms {
    float2 resolution;
    float  intensity;
    int    presetIndex;
};

// ============================================================
// MARK: - Fullscreen Vertex
// ============================================================

struct PostVertexOut {
    float4 position [[position]];
    float2 uv;
};

vertex PostVertexOut cosmicPostVertex(uint vid [[vertex_id]]) {
    PostVertexOut out;
    float2 pos;
    pos.x = (vid == 1) ? 3.0 : -1.0;
    pos.y = (vid == 2) ? 3.0 : -1.0;
    out.position = float4(pos, 0.0, 1.0);
    out.uv = pos * 0.5 + 0.5;
    out.uv.y = 1.0 - out.uv.y;
    return out;
}

// ============================================================
// MARK: - Post-Processing Fragment (Premultiplied Alpha Overlay)
// No texture read — blended on top of bg+stars via hardware blend:
//   result = src.rgb * 1 + dst.rgb * (1 - src.a)
// Vignette: dark color × alpha → darken existing
// Bloom / clarity: additive light baked into src.rgb
// ============================================================

fragment float4 cosmicPostFragment(
    PostVertexOut in [[stage_in]],
    constant PostProcessUniforms& uniforms [[buffer(0)]]
) {
    float2 uv = in.uv;
    float2 centered = uv - 0.5;
    float dist = length(centered);
    float scaledDist = dist * 1.4;
    
    // Accumulate premultiplied overlay components
    float3 premultRGB = float3(0.0);
    float  alpha = 0.0;
    
    // ------ Foundation Void Vignette ------
    float3 voidColor = rgb(2, 1, 6);
    float vigAmount = smoothstep(0.3, 0.85, scaledDist) * 0.6;
    
    // ------ Edge Vignette ------
    float3 edgeColor = rgb(8, 5, 18);
    float edgeAmount = smoothstep(0.3, 0.7, scaledDist) * 0.35;
    
    // Composite vignettes: overlay the stronger darkening on top
    // First layer: void vignette
    float3 vigRGB = voidColor * vigAmount;
    float  vigAlpha = vigAmount;
    
    // Second layer: edge vignette on top (premultiplied over compositing)
    float3 edgeRGB = edgeColor * edgeAmount;
    float  edgeAlpha = edgeAmount;
    vigRGB = edgeRGB + vigRGB * (1.0 - edgeAlpha);
    vigAlpha = edgeAlpha + vigAlpha * (1.0 - edgeAlpha);
    
    premultRGB = vigRGB;
    alpha = vigAlpha;
    
    // ------ Central Clarity ------
    float clarity = 1.0 - smoothstep(0.0, 0.35, scaledDist);
    clarity = clarity * clarity;
    float3 clarityColor = rgb(255, 245, 255);
    // Additive: bake directly into premultiplied RGB (no alpha contribution)
    premultRGB += clarityColor * clarity * 0.015;
    
    // ------ HDR Bloom ------
    float3 bloomColor = rgb(180, 140, 255);
    float2 bloomCenter = float2(0.4, 0.45);
    float bloomDist = length(uv - bloomCenter);
    float bloom = 1.0 - smoothstep(0.0, 0.4, bloomDist);
    bloom = bloom * bloom;
    // Additive: bake directly into premultiplied RGB
    premultRGB += bloomColor * bloom * 0.035 * uniforms.intensity;
    
    // ------ Per-Preset Color Grading ------
    if (uniforms.presetIndex == 0) {
        // Lagoon: warm-to-cool diagonal gradient (additive tint)
        float diag = uv.x * 0.8 + (1.0 - uv.y) * 0.2;
        float3 warmGrade = rgb(255, 180, 80);
        float3 coolGrade = rgb(100, 220, 255);
        float3 gradeColor = mix(warmGrade, coolGrade, diag);
        premultRGB += gradeColor * 0.015;
    } else if (uniforms.presetIndex == 1) {
        // Celestial Lagoon: deep ocean edge darkening
        float3 oceanTint = rgb(4, 10, 20);
        float oceanFade = smoothstep(0.3, 0.8, dist * 1.3) * 0.2;
        // Darken: over-composite ocean tint on top of existing vignette
        float3 oceanPremult = oceanTint * oceanFade;
        premultRGB = oceanPremult + premultRGB * (1.0 - oceanFade);
        alpha = oceanFade + alpha * (1.0 - oceanFade);
    } else if (uniforms.presetIndex == 2) {
        // Solar Aurora: vignette handled in main shader, minimal post-process
        // Just a very subtle top-edge darkening for extra depth
        float topFade = 1.0 - uv.y;
        float topAmount = topFade * topFade * 0.1;
        float3 violetTop = rgb(15, 8, 25);
        float3 topPremult = violetTop * topAmount;
        premultRGB = topPremult + premultRGB * (1.0 - topAmount);
        alpha = topAmount + alpha * (1.0 - topAmount);
    } else if (uniforms.presetIndex == 3) {
        // Spiral Halo: warm core glow + blue arm hints (additive)
        float coreGlow = 1.0 - smoothstep(0.0, 0.25, dist);
        premultRGB += rgb(255, 250, 235) * coreGlow * 0.04;
        float armHint = 1.0 - smoothstep(0.1, 0.35, dist);
        premultRGB += rgb(145, 180, 245) * armHint * 0.02;
    } else if (uniforms.presetIndex == 4) {
        // Edge of Andromeda: edge color drifts (additive)
        float3 indigoTL = rgb(40, 30, 80);
        float3 wineRBR = rgb(60, 20, 30);
        float3 midnightTR = rgb(15, 20, 45);
        float tlDist = length(uv - float2(0.0, 0.0));
        float brDist = length(uv - float2(1.0, 1.0));
        float trDist = length(uv - float2(1.0, 0.0));
        premultRGB += indigoTL * (1.0 - smoothstep(0.0, 0.6, tlDist)) * 0.04;
        premultRGB += wineRBR * (1.0 - smoothstep(0.0, 0.6, brDist)) * 0.03;
        premultRGB += midnightTR * (1.0 - smoothstep(0.0, 0.5, trDist)) * 0.025;
    } else if (uniforms.presetIndex == 5) {
        // Starburst Ring: heavier vignette darkening
        float ringVig = smoothstep(0.4, 1.0, dist * 1.3) * 0.5;
        float3 ringPremult = float3(0.0) * ringVig; // pure black vignette
        premultRGB = ringPremult + premultRGB * (1.0 - ringVig);
        alpha = ringVig + alpha * (1.0 - ringVig);
    }
    
    return float4(premultRGB, alpha);
}
