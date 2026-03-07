import simd

// ============================================================
// MARK: - Star Data (GPU Buffer Layout)
// Must match Metal StarData struct exactly
// ============================================================

struct StarData {
    var position: SIMD2<Float>       // normalized 0..1
    var baseSize: Float              // in points
    var zDepth: Float                // 0=far, 1=near
    var color: SIMD4<Float>          // RGBA
    var twinkleSpeed: Float
    var twinklePhase: Float
    var twinkleAmp: Float
    var starType: Int32              // 0=normal, 1=hero, 2=mystical, 3=heroAnamorphic
    var driftAngle: Float
    var driftSpeed: Float
    var motionParams: SIMD2<Float>   // preset-specific
    var rotationFactor: Float        // differential rotation
    var zoneTintStrength: Float
    var zoneTintColor: SIMD4<Float>  // zone tint RGBA
}

// ============================================================
// MARK: - Star Field Generator
// Generates per-preset star arrays matching React distributions
// ============================================================

enum StarFieldGenerator {
    
    // Deterministic PRNG matching React/Metal
    private static func sRand(_ seed: Int, _ n: Int) -> Float {
        let x = sin(Double(seed) * 9999.0 + Double(n) * 7919.0) * 10000.0
        return Float(x - floor(x))
    }
    
    // Gaussian via Box-Muller
    private static func gaussianRand(_ seed: Int, _ n: Int, sigma: Float) -> Float {
        let u1 = max(0.0001, sRand(seed, n))
        let u2 = sRand(seed, n + 1)
        return sigma * sqrt(-2.0 * log(u1)) * cos(2.0 * .pi * u2)
    }
    
    // Spectral colors (O through M type)
    private static let spectralColors: [SIMD4<Float>] = [
        SIMD4(155/255, 176/255, 255/255, 1), // O-type blue
        SIMD4(185/255, 206/255, 255/255, 1), // B-type blue-white
        SIMD4(248/255, 248/255, 255/255, 1), // A-type white
        SIMD4(255/255, 252/255, 240/255, 1), // F-type yellow-white
        SIMD4(255/255, 244/255, 214/255, 1), // G-type yellow
        SIMD4(255/255, 220/255, 180/255, 1), // K-type orange
        SIMD4(255/255, 190/255, 150/255, 1), // M-type red
    ]
    
    // ============================================================
    // MARK: - Lagoon Nebula (700 microstars + heroes + 80 deep parallax)
    // Matches React LagoonStarsCanvas + DeepParallaxCanvas exactly.
    // ============================================================
    
    static func lagoonStars() -> [StarData] {
        var stars: [StarData] = []
        
        // ============================================================
        // MARK: Main stellar population — 800 stars with rich diversity
        //
        // 5 depth zones for visual variety:
        //   Far bg    (z < 0.15): tiny pinpricks, warm dust colours
        //   Deep mid  (0.15–0.35): small, cool-shifted, lazy figure-8
        //   Mid-field (0.35–0.55): medium mix, nebula current flow
        //   Near-mid  (0.55–0.75): brighter, diverse, orbital drift
        //   Foreground(z > 0.75): large hero-eligible, vivid colours
        // ============================================================
        let starCount = 800
        
        for i in 0..<starCount {
            func rand(_ n: Int) -> Float { sRand(i * 137, n) }
            
            // Z-depth: pow(rand, 0.55) — slightly more foreground bias
            let z = pow(rand(1), 0.55)
            
            // Position
            var rx = rand(2)
            var ry = rand(3)
            
            // Clustering: ~45% in diagonal band
            let isCluster = rand(4) > 0.55
            if isCluster {
                let theta = rand(5) * Float.pi * 2
                let radius = rand(6) * 0.4
                let cx: Float = 0.5 + rand(20) * 0.15
                let cy: Float = 0.48 + rand(21) * 0.12
                rx = cx + cos(theta) * radius
                ry = cy + sin(theta) * radius * 1.6
            }
            
            // ── Depth-dependent colour selection ──
            // Far stars: warmer/dimmer. Near stars: wider palette, more vivid.
            let colorRoll = rand(7)
            var baseColor: SIMD4<Float>
            
            if z < 0.20 {
                // Far background — warm dust tones only
                if colorRoll < 0.40 {
                    baseColor = SIMD4(255.0/255, 200.0/255, 150.0/255, 1) // Warm gold
                } else if colorRoll < 0.70 {
                    baseColor = SIMD4(240.0/255, 170.0/255, 110.0/255, 1) // Soft amber
                } else if colorRoll < 0.90 {
                    baseColor = SIMD4(220.0/255, 150.0/255, 90.0/255, 1)  // Dusty orange
                } else {
                    baseColor = SIMD4(200.0/255, 140.0/255, 100.0/255, 1) // Faint rust
                }
            } else if z < 0.50 {
                // Mid-field — standard JWST 8-colour palette
                if colorRoll < 0.22 {
                    baseColor = SIMD4(255.0/255, 220.0/255, 180.0/255, 1) // GOLDEN_STAR
                } else if colorRoll < 0.40 {
                    baseColor = SIMD4(255.0/255, 180.0/255, 120.0/255, 1) // AMBER_GLOW
                } else if colorRoll < 0.55 {
                    baseColor = SIMD4(255.0/255, 248.0/255, 240.0/255, 1) // WARM_WHITE
                } else if colorRoll < 0.67 {
                    baseColor = SIMD4(255.0/255, 140.0/255, 80.0/255, 1)  // DEEP_ORANGE
                } else if colorRoll < 0.78 {
                    baseColor = SIMD4(200.0/255, 230.0/255, 255.0/255, 1) // HOT_BLUE
                } else if colorRoll < 0.88 {
                    baseColor = SIMD4(180.0/255, 230.0/255, 255.0/255, 1) // CYAN_BLUE
                } else if colorRoll < 0.95 {
                    baseColor = SIMD4(255.0/255, 100.0/255, 100.0/255, 1) // RUBY_RED
                } else {
                    baseColor = SIMD4(240.0/255, 250.0/255, 255.0/255, 1) // ELECTRIC_WHITE
                }
            } else {
                // Foreground — vivid, more blues & electric whites
                if colorRoll < 0.18 {
                    baseColor = SIMD4(255.0/255, 225.0/255, 190.0/255, 1) // Bright gold
                } else if colorRoll < 0.32 {
                    baseColor = SIMD4(255.0/255, 185.0/255, 130.0/255, 1) // Amber
                } else if colorRoll < 0.44 {
                    baseColor = SIMD4(255.0/255, 252.0/255, 248.0/255, 1) // Pure white
                } else if colorRoll < 0.54 {
                    baseColor = SIMD4(255.0/255, 150.0/255, 90.0/255, 1)  // Deep orange
                } else if colorRoll < 0.67 {
                    baseColor = SIMD4(190.0/255, 225.0/255, 255.0/255, 1) // Hot blue
                } else if colorRoll < 0.78 {
                    baseColor = SIMD4(170.0/255, 220.0/255, 255.0/255, 1) // Cyan blue
                } else if colorRoll < 0.86 {
                    baseColor = SIMD4(255.0/255, 120.0/255, 120.0/255, 1) // Ruby red
                } else if colorRoll < 0.93 {
                    baseColor = SIMD4(235.0/255, 248.0/255, 255.0/255, 1) // Electric white
                } else {
                    baseColor = SIMD4(220.0/255, 200.0/255, 255.0/255, 1) // Lavender protostar
                }
            }
            
            // ── Depth-dependent size ──
            // Far stars: tiny. Near stars: much wider range.
            let baseSize: Float
            if z < 0.20 {
                // Far: small, uniform
                baseSize = (0.3 + rand(9) * 0.5) * 1.2
            } else if z < 0.50 {
                // Mid: moderate range
                baseSize = (0.4 + pow(rand(9), 2.0) * 1.2) * (1.2 - z * 0.4) * 1.4
            } else {
                // Near: wide range, some very bright
                baseSize = (0.5 + pow(rand(9), 1.8) * 1.8) * (1.4 - z * 0.3) * 1.6
            }
            
            // ── Star type — hero and mystical distribution ──
            // Hero: only foreground clustered stars
            // Mystical: depth-dependent probability (more in mid/near)
            let isHero = isCluster && z < 0.4 && rand(10) > 0.94
            let mysticalChance: Float = z < 0.20 ? 0.10 : (z < 0.50 ? 0.30 : 0.45)
            let isMystical = !isHero && rand(18) < mysticalChance
            
            // Brightness: depth-scaled + individual variation
            let baseAlpha: Float = (0.60 + rand(11) * 0.55) * (1.0 - z * 0.35)
            baseColor.w = min(baseAlpha, 1.0)
            
            let starType: Int32 = isHero ? 1 : (isMystical ? 2 : 0)
            
            // ── Depth-dependent twinkle speed ──
            // Far stars: very slow twinkle. Near: faster shimmer.
            let twinkleSpeed: Float = z < 0.20
                ? 0.10 + rand(16) * 0.20  // far: slow
                : (z < 0.50
                   ? 0.20 + rand(16) * 0.35 // mid: moderate
                   : 0.30 + rand(16) * 0.50) // near: varied
            
            stars.append(StarData(
                position: SIMD2(rx, ry),
                baseSize: baseSize * (isHero ? 3.5 : 1.0),
                zDepth: z,
                color: baseColor,
                twinkleSpeed: twinkleSpeed,
                twinklePhase: rand(17) * .pi * 2,
                twinkleAmp: 0.15,  // Gentle shimmer
                starType: starType,
                driftAngle: rand(12) * .pi * 2,
                driftSpeed: (0.005 + rand(13) * 0.02) * (1.0 - z * 0.5) * 50.0,
                motionParams: SIMD2(rand(14) * .pi * 2, 0.2 + rand(15) * 0.4),
                rotationFactor: 0,
                zoneTintStrength: 0,
                zoneTintColor: SIMD4(0, 0, 0, 0)
            ))
        }
        
        // ============================================================
        // MARK: Deep Parallax Stars — 100 warm dusty background points
        // Very far, very small, slow drift. Creates depth backdrop.
        // ============================================================
        for i in 0..<100 {
            let seed = 500 + i * 3
            let rx = sRand(seed, 1)
            let ry = sRand(seed, 2)
            let size: Float = 0.3 + sRand(seed, 3) * 1.0
            let opacity: Float = 0.08 + sRand(seed, 4) * 0.22
            
            // Wider colour variety for background dust
            let dustRoll = sRand(seed, 5)
            let color: SIMD4<Float>
            if dustRoll < 0.35 {
                color = SIMD4(255.0/255, 190.0/255, 100.0/255, opacity) // Gold
            } else if dustRoll < 0.60 {
                color = SIMD4(200.0/255, 120.0/255, 70.0/255, opacity)  // Amber
            } else if dustRoll < 0.80 {
                color = SIMD4(180.0/255, 80.0/255, 50.0/255, opacity)   // Deep red
            } else {
                color = SIMD4(160.0/255, 170.0/255, 200.0/255, opacity) // Cool blue dust
            }
            
            stars.append(StarData(
                position: SIMD2(rx, ry),
                baseSize: size,
                zDepth: 0.90 + sRand(seed, 6) * 0.10, // very far back
                color: color,
                twinkleSpeed: 0.08 + sRand(seed, 6) * 0.15,
                twinklePhase: sRand(seed, 7) * .pi * 2,
                twinkleAmp: 0.10,
                starType: 0,
                driftAngle: sRand(seed, 8) * .pi * 2,
                driftSpeed: 0.03 + sRand(seed, 9) * 0.08,
                motionParams: SIMD2(0, 0.1 + sRand(seed, 10) * 0.15),
                rotationFactor: 0,
                zoneTintStrength: 0,
                zoneTintColor: SIMD4(0, 0, 0, 0)
            ))
        }
        
        return stars
    }
    
    // ============================================================
    // MARK: - Celestial Lagoon (1330 stars, 3 layers)
    // Per-layer aqua/cyan/turquoise palettes matching React exactly
    // ============================================================
    
    static func celestialLagoonStars() -> [StarData] {
        var stars: [StarData] = []
        
        // ============================================================
        // MARK: Main stellar population — 800 stars with rich diversity
        //
        // 5 depth zones (matching Lagoon's architecture):
        //   Far bg    (z < 0.15): tiny pinpricks, faint cool tones
        //   Deep mid  (0.15–0.35): small, Lissajous figure-8
        //   Mid-field (0.35–0.55): medium, current flow + wave
        //   Near-mid  (0.55–0.75): brighter, diverse, orbital drift
        //   Foreground(z > 0.75): large hero-eligible, vivid colours
        //
        // Colours: aqua/cyan/teal core palette + pink, lavender,
        // peach, mint, violet, electric cyan accents for diversity.
        // ============================================================
        let starCount = 800
        
        for i in 0..<starCount {
            func rand(_ n: Int) -> Float { sRand(i * 137, n) }
            
            // Z-depth: pow(rand, 0.55) — slightly more foreground bias
            let z = pow(rand(1), 0.55)
            
            // Position
            var rx = rand(2)
            var ry = rand(3)
            
            // Clustering: ~40% concentrated near nebula core for natural groupings
            let isCluster = rand(4) > 0.60
            if isCluster {
                let theta = rand(5) * Float.pi * 2
                let radius = rand(6) * 0.38
                let cx: Float = 0.48 + rand(20) * 0.12
                let cy: Float = 0.46 + rand(21) * 0.10
                rx = cx + cos(theta) * radius
                ry = cy + sin(theta) * radius * 1.5
            }
            
            // ── Depth-dependent colour selection ──
            let colorRoll = rand(7)
            var baseColor: SIMD4<Float>
            
            if z < 0.20 {
                // Far background — faint cool dust tones
                if colorRoll < 0.25 {
                    baseColor = SIMD4(210.0/255, 240.0/255, 250.0/255, 1) // Pale icy blue
                } else if colorRoll < 0.45 {
                    baseColor = SIMD4(200.0/255, 245.0/255, 245.0/255, 1) // Faint turquoise
                } else if colorRoll < 0.60 {
                    baseColor = SIMD4(235.0/255, 245.0/255, 250.0/255, 1) // Nearly white
                } else if colorRoll < 0.75 {
                    baseColor = SIMD4(225.0/255, 205.0/255, 255.0/255, 1) // Lavender dust
                } else if colorRoll < 0.88 {
                    baseColor = SIMD4(180.0/255, 235.0/255, 255.0/255, 1) // Azure
                } else {
                    baseColor = SIMD4(190.0/255, 255.0/255, 240.0/255, 1) // Seafoam
                }
            } else if z < 0.50 {
                // Mid-field — wider palette with accent colours
                if colorRoll < 0.15 {
                    baseColor = SIMD4(185.0/255, 235.0/255, 245.0/255, 1) // Soft turquoise
                } else if colorRoll < 0.28 {
                    baseColor = SIMD4(170.0/255, 245.0/255, 255.0/255, 1) // Cyan supergiant
                } else if colorRoll < 0.38 {
                    baseColor = SIMD4(200.0/255, 255.0/255, 225.0/255, 1) // Mint green
                } else if colorRoll < 0.48 {
                    baseColor = SIMD4(160.0/255, 255.0/255, 255.0/255, 1) // Electric cyan
                } else if colorRoll < 0.56 {
                    baseColor = SIMD4(255.0/255, 195.0/255, 225.0/255, 1) // Pink nebula
                } else if colorRoll < 0.64 {
                    baseColor = SIMD4(225.0/255, 205.0/255, 255.0/255, 1) // Lavender
                } else if colorRoll < 0.72 {
                    baseColor = SIMD4(255.0/255, 225.0/255, 200.0/255, 1) // Warm peach
                } else if colorRoll < 0.80 {
                    baseColor = SIMD4(215.0/255, 195.0/255, 255.0/255, 1) // Violet tint
                } else if colorRoll < 0.88 {
                    baseColor = SIMD4(255.0/255, 248.0/255, 235.0/255, 1) // Solar yellow
                } else if colorRoll < 0.94 {
                    baseColor = SIMD4(240.0/255, 250.0/255, 255.0/255, 1) // A-type white
                } else {
                    baseColor = SIMD4(185.0/255, 255.0/255, 250.0/255, 1) // Aqua giant
                }
            } else {
                // Foreground — vivid, full palette, more exotic
                if colorRoll < 0.12 {
                    baseColor = SIMD4(170.0/255, 230.0/255, 245.0/255, 1) // Bright turquoise
                } else if colorRoll < 0.22 {
                    baseColor = SIMD4(185.0/255, 255.0/255, 250.0/255, 1) // Aqua giant
                } else if colorRoll < 0.30 {
                    baseColor = SIMD4(175.0/255, 255.0/255, 245.0/255, 1) // Turquoise
                } else if colorRoll < 0.38 {
                    baseColor = SIMD4(160.0/255, 255.0/255, 255.0/255, 1) // Electric cyan
                } else if colorRoll < 0.46 {
                    baseColor = SIMD4(255.0/255, 195.0/255, 225.0/255, 1) // Pink nebula
                } else if colorRoll < 0.54 {
                    baseColor = SIMD4(225.0/255, 205.0/255, 255.0/255, 1) // Lavender
                } else if colorRoll < 0.62 {
                    baseColor = SIMD4(255.0/255, 225.0/255, 200.0/255, 1) // Peach
                } else if colorRoll < 0.70 {
                    baseColor = SIMD4(240.0/255, 250.0/255, 255.0/255, 1) // Pure white
                } else if colorRoll < 0.78 {
                    baseColor = SIMD4(195.0/255, 235.0/255, 255.0/255, 1) // O-type blue
                } else if colorRoll < 0.86 {
                    baseColor = SIMD4(180.0/255, 255.0/255, 235.0/255, 1) // Teal bright
                } else if colorRoll < 0.93 {
                    baseColor = SIMD4(215.0/255, 195.0/255, 255.0/255, 1) // Violet tint
                } else {
                    baseColor = SIMD4(255.0/255, 248.0/255, 235.0/255, 1) // Warm yellow
                }
            }
            
            // ── Depth-dependent size ──
            let baseSize: Float
            if z < 0.20 {
                baseSize = (0.3 + rand(9) * 0.5) * 1.2
            } else if z < 0.50 {
                baseSize = (0.4 + pow(rand(9), 2.0) * 1.2) * (1.2 - z * 0.4) * 1.4
            } else {
                baseSize = (0.5 + pow(rand(9), 1.8) * 1.8) * (1.4 - z * 0.3) * 1.6
            }
            
            // ── Star type — hero and mystical distribution ──
            let isHero = isCluster && z < 0.4 && rand(10) > 0.94
            let mysticalChance: Float = z < 0.20 ? 0.10 : (z < 0.50 ? 0.30 : 0.45)
            let isMystical = !isHero && rand(18) < mysticalChance
            
            // Brightness: depth-scaled + individual variation
            let baseAlpha: Float = (0.60 + rand(11) * 0.55) * (1.0 - z * 0.35)
            baseColor.w = min(baseAlpha, 1.0)
            
            let starType: Int32 = isHero ? 1 : (isMystical ? 2 : 0)
            
            // ── Depth-dependent twinkle speed ──
            let twinkleSpeed: Float = z < 0.20
                ? 0.10 + rand(16) * 0.20
                : (z < 0.50
                   ? 0.20 + rand(16) * 0.35
                   : 0.30 + rand(16) * 0.50)
            
            stars.append(StarData(
                position: SIMD2(rx, ry),
                baseSize: baseSize * (isHero ? 3.5 : 1.0),
                zDepth: z,
                color: baseColor,
                twinkleSpeed: twinkleSpeed,
                twinklePhase: rand(17) * .pi * 2,
                twinkleAmp: 0.15,  // Gentle shimmer
                starType: starType,
                driftAngle: rand(12) * .pi * 2,
                driftSpeed: (0.005 + rand(13) * 0.02) * (1.0 - z * 0.5) * 50.0,
                motionParams: SIMD2(rand(14) * .pi * 2, 0.2 + rand(15) * 0.4),
                rotationFactor: 0,
                zoneTintStrength: 0,
                zoneTintColor: SIMD4(0, 0, 0, 0)
            ))
        }
        
        // ============================================================
        // MARK: Deep Parallax Stars — 100 cool-toned background points
        // Very far, very small, slow drift. Creates depth backdrop.
        // ============================================================
        for i in 0..<100 {
            let seed = 600 + i * 3
            let rx = sRand(seed, 1)
            let ry = sRand(seed, 2)
            let size: Float = 0.3 + sRand(seed, 3) * 1.0
            let opacity: Float = 0.08 + sRand(seed, 4) * 0.22
            
            // Cool dust colour variety for underwater feel
            let dustRoll = sRand(seed, 5)
            let color: SIMD4<Float>
            if dustRoll < 0.30 {
                color = SIMD4(180.0/255, 220.0/255, 240.0/255, opacity) // Steel blue
            } else if dustRoll < 0.55 {
                color = SIMD4(160.0/255, 200.0/255, 230.0/255, opacity) // Faint teal
            } else if dustRoll < 0.75 {
                color = SIMD4(200.0/255, 190.0/255, 230.0/255, opacity) // Lavender dust
            } else {
                color = SIMD4(190.0/255, 235.0/255, 225.0/255, opacity) // Cool mint dust
            }
            
            stars.append(StarData(
                position: SIMD2(rx, ry),
                baseSize: size,
                zDepth: 0.90 + sRand(seed, 6) * 0.10, // very far back
                color: color,
                twinkleSpeed: 0.08 + sRand(seed, 6) * 0.15,
                twinklePhase: sRand(seed, 7) * .pi * 2,
                twinkleAmp: 0.10,
                starType: 0,
                driftAngle: sRand(seed, 8) * .pi * 2,
                driftSpeed: 0.03 + sRand(seed, 9) * 0.08,
                motionParams: SIMD2(0, 0.1 + sRand(seed, 10) * 0.15),
                rotationFactor: 0,
                zoneTintStrength: 0,
                zoneTintColor: SIMD4(0, 0, 0, 0)
            ))
        }
        
        return stars
    }
    
    // ============================================================
    // MARK: - Solar Aurora (1170 stars)
    // Per-layer violet/fuchsia/gold palettes + baseAlpha matching React
    // ============================================================
    
    static func solarAuroraStars() -> [StarData] {
        var stars: [StarData] = []
        
        // ============================================================
        // MARK: Main stellar population — 800 stars with rich diversity
        //
        // 5 depth zones for visual variety:
        //   Far bg    (z < 0.15): tiny pinpricks, faint violet/pink tones
        //   Deep mid  (0.15–0.35): small, warm pastel, Lissajous
        //   Mid-field (0.35–0.55): medium mix, aurora curtain flow
        //   Near-mid  (0.55–0.75): brighter, diverse, orbital drift
        //   Foreground(z > 0.75): large hero, vivid aurora colours
        //
        // Y-position aurora tinting preserved (violet bottom, fuchsia
        // middle, gold top) for authentic aurora band feeling.
        // ============================================================
        let starCount = 800
        
        for i in 0..<starCount {
            func rand(_ n: Int) -> Float { sRand(i * 137, n) }
            
            let z = pow(rand(1), 0.55)
            
            var rx = rand(2)
            var ry = rand(3)
            
            // Clustering near aurora core (~35%)
            let isCluster = rand(4) > 0.65
            if isCluster {
                let theta = rand(5) * Float.pi * 2
                let radius = rand(6) * 0.35
                let cx: Float = 0.50 + rand(20) * 0.10
                let cy: Float = 0.50 + rand(21) * 0.08
                rx = cx + cos(theta) * radius
                ry = cy + sin(theta) * radius * 1.4
            }
            
            let colorRoll = rand(7)
            var baseColor: SIMD4<Float>
            
            if z < 0.20 {
                // Far background — faint pastel aurora tones
                if colorRoll < 0.20 {
                    baseColor = SIMD4(210.0/255, 205.0/255, 255.0/255, 1) // Pale violet
                } else if colorRoll < 0.38 {
                    baseColor = SIMD4(255.0/255, 220.0/255, 240.0/255, 1) // Faint pink
                } else if colorRoll < 0.52 {
                    baseColor = SIMD4(255.0/255, 240.0/255, 220.0/255, 1) // Faint amber
                } else if colorRoll < 0.66 {
                    baseColor = SIMD4(235.0/255, 235.0/255, 245.0/255, 1) // Nearly white
                } else if colorRoll < 0.78 {
                    baseColor = SIMD4(230.0/255, 210.0/255, 250.0/255, 1) // Soft lavender
                } else if colorRoll < 0.90 {
                    baseColor = SIMD4(255.0/255, 235.0/255, 210.0/255, 1) // Warm cream
                } else {
                    baseColor = SIMD4(220.0/255, 220.0/255, 255.0/255, 1) // Cool blue-violet
                }
            } else if z < 0.50 {
                // Mid-field — wider aurora palette
                if colorRoll < 0.14 {
                    baseColor = SIMD4(195.0/255, 175.0/255, 255.0/255, 1) // Soft violet
                } else if colorRoll < 0.26 {
                    baseColor = SIMD4(255.0/255, 190.0/255, 230.0/255, 1) // Pink
                } else if colorRoll < 0.36 {
                    baseColor = SIMD4(255.0/255, 220.0/255, 190.0/255, 1) // Golden
                } else if colorRoll < 0.46 {
                    baseColor = SIMD4(225.0/255, 220.0/255, 245.0/255, 1) // Violet-white
                } else if colorRoll < 0.55 {
                    baseColor = SIMD4(255.0/255, 200.0/255, 160.0/255, 1) // Amber warm
                } else if colorRoll < 0.63 {
                    baseColor = SIMD4(210.0/255, 180.0/255, 255.0/255, 1) // Rich violet
                } else if colorRoll < 0.72 {
                    baseColor = SIMD4(255.0/255, 170.0/255, 220.0/255, 1) // Hot pink
                } else if colorRoll < 0.80 {
                    baseColor = SIMD4(255.0/255, 245.0/255, 230.0/255, 1) // Warm white
                } else if colorRoll < 0.88 {
                    baseColor = SIMD4(240.0/255, 200.0/255, 255.0/255, 1) // Magenta tint
                } else if colorRoll < 0.95 {
                    baseColor = SIMD4(255.0/255, 230.0/255, 180.0/255, 1) // Gold warm
                } else {
                    baseColor = SIMD4(200.0/255, 190.0/255, 255.0/255, 1) // Blue-violet
                }
            } else {
                // Foreground — vivid, full aurora spectrum
                if colorRoll < 0.12 {
                    baseColor = SIMD4(180.0/255, 150.0/255, 255.0/255, 1) // Bright violet
                } else if colorRoll < 0.22 {
                    baseColor = SIMD4(255.0/255, 170.0/255, 220.0/255, 1) // Pink
                } else if colorRoll < 0.32 {
                    baseColor = SIMD4(255.0/255, 200.0/255, 160.0/255, 1) // Amber
                } else if colorRoll < 0.40 {
                    baseColor = SIMD4(215.0/255, 210.0/255, 255.0/255, 1) // White-violet
                } else if colorRoll < 0.48 {
                    baseColor = SIMD4(255.0/255, 180.0/255, 100.0/255, 1) // Deep gold
                } else if colorRoll < 0.56 {
                    baseColor = SIMD4(240.0/255, 160.0/255, 255.0/255, 1) // Magenta
                } else if colorRoll < 0.64 {
                    baseColor = SIMD4(255.0/255, 150.0/255, 200.0/255, 1) // Rose
                } else if colorRoll < 0.72 {
                    baseColor = SIMD4(255.0/255, 248.0/255, 240.0/255, 1) // Pure warm white
                } else if colorRoll < 0.80 {
                    baseColor = SIMD4(200.0/255, 160.0/255, 255.0/255, 1) // Purple
                } else if colorRoll < 0.88 {
                    baseColor = SIMD4(255.0/255, 220.0/255, 150.0/255, 1) // Bright gold
                } else if colorRoll < 0.94 {
                    baseColor = SIMD4(255.0/255, 190.0/255, 240.0/255, 1) // Soft magenta
                } else {
                    baseColor = SIMD4(170.0/255, 140.0/255, 255.0/255, 1) // Deep violet
                }
            }
            
            // ── Depth-dependent size ──
            let baseSize: Float
            if z < 0.20 {
                baseSize = (0.3 + rand(9) * 0.5) * 1.2
            } else if z < 0.50 {
                baseSize = (0.4 + pow(rand(9), 2.0) * 1.2) * (1.2 - z * 0.4) * 1.4
            } else {
                baseSize = (0.5 + pow(rand(9), 1.8) * 1.8) * (1.4 - z * 0.3) * 1.6
            }
            
            let isHero = isCluster && z < 0.4 && rand(10) > 0.94
            let mysticalChance: Float = z < 0.20 ? 0.10 : (z < 0.50 ? 0.30 : 0.45)
            let isMystical = !isHero && rand(18) < mysticalChance
            
            let baseAlpha: Float = (0.60 + rand(11) * 0.55) * (1.0 - z * 0.35)
            baseColor.w = min(baseAlpha, 1.0)
            
            let starType: Int32 = isHero ? 1 : (isMystical ? 2 : 0)
            
            let twinkleSpeed: Float = z < 0.20
                ? 0.10 + rand(16) * 0.20
                : (z < 0.50
                   ? 0.20 + rand(16) * 0.35
                   : 0.30 + rand(16) * 0.50)
            
            // Aurora Y-position tinting (preserved from original)
            let tintColor: SIMD4<Float>
            let tintStrength: Float
            if ry < 0.35 {
                tintColor = SIMD4(95.0/255, 45.0/255, 190.0/255, 1) // violet
                tintStrength = 0.15 + z * 0.10
            } else if ry > 0.65 {
                tintColor = SIMD4(255.0/255, 180.0/255, 70.0/255, 1) // gold
                tintStrength = 0.12 + z * 0.10
            } else {
                tintColor = SIMD4(210.0/255, 60.0/255, 160.0/255, 1) // fuchsia
                tintStrength = 0.08 + z * 0.07
            }
            
            stars.append(StarData(
                position: SIMD2(rx, ry),
                baseSize: baseSize * (isHero ? 3.5 : 1.0),
                zDepth: z,
                color: baseColor,
                twinkleSpeed: twinkleSpeed,
                twinklePhase: rand(17) * .pi * 2,
                twinkleAmp: 0.15,
                starType: starType,
                driftAngle: rand(12) * .pi * 2,
                driftSpeed: (0.005 + rand(13) * 0.02) * (1.0 - z * 0.5) * 50.0,
                motionParams: SIMD2(rand(14) * .pi * 2, 0.2 + rand(15) * 0.4),
                rotationFactor: 0,
                zoneTintStrength: tintStrength,
                zoneTintColor: tintColor
            ))
        }
        
        // ============================================================
        // MARK: Deep Parallax Stars — 80 faint aurora-tinted background
        // ============================================================
        for i in 0..<80 {
            let seed = 700 + i * 3
            let rx = sRand(seed, 1)
            let ry = sRand(seed, 2)
            let size: Float = 0.3 + sRand(seed, 3) * 1.0
            let opacity: Float = 0.08 + sRand(seed, 4) * 0.22
            
            let dustRoll = sRand(seed, 5)
            let color: SIMD4<Float>
            if dustRoll < 0.30 {
                color = SIMD4(200.0/255, 180.0/255, 230.0/255, opacity) // Faint violet
            } else if dustRoll < 0.55 {
                color = SIMD4(230.0/255, 200.0/255, 220.0/255, opacity) // Faint pink
            } else if dustRoll < 0.75 {
                color = SIMD4(230.0/255, 220.0/255, 190.0/255, opacity) // Faint gold
            } else {
                color = SIMD4(220.0/255, 215.0/255, 240.0/255, opacity) // Faint lavender
            }
            
            stars.append(StarData(
                position: SIMD2(rx, ry),
                baseSize: size,
                zDepth: 0.90 + sRand(seed, 6) * 0.10,
                color: color,
                twinkleSpeed: 0.08 + sRand(seed, 6) * 0.15,
                twinklePhase: sRand(seed, 7) * .pi * 2,
                twinkleAmp: 0.10,
                starType: 0,
                driftAngle: sRand(seed, 8) * .pi * 2,
                driftSpeed: 0.03 + sRand(seed, 9) * 0.08,
                motionParams: SIMD2(0, 0.1 + sRand(seed, 10) * 0.15),
                rotationFactor: 0,
                zoneTintStrength: 0,
                zoneTintColor: SIMD4(0, 0, 0, 0)
            ))
        }
        
        return stars
    }
    
    // ============================================================
    // MARK: - Spiral Halo Galaxy (800 + 100 deep = 900 stars)
    // Continuous z-depth, rich spectral colours, spiral arm positioning
    // ============================================================
    
    static func spiralHaloStars() -> [StarData] {
        var stars: [StarData] = []
        
        // ============================================================
        // Main stellar population — 800 stars
        //
        // Spatial zones for galaxy structure:
        //   Background (20%): uniform random
        //   Core (15%): Gaussian σ=0.06
        //   Spiral arms (55%): 4-arm logarithmic spiral
        //   Outer halo (10%): annular r=0.3..0.5
        //
        // Continuous z-depth via pow(rand, 0.55)
        // 30+ depth-dependent colours: far=cool/faint, near=vivid
        // Hero/mystical distribution, depth-dependent everything
        // ============================================================
        let starCount = 800
        let armCount = 4
        let tightness: Float = 0.5
        
        for i in 0..<starCount {
            func rand(_ n: Int) -> Float { sRand(i * 137, n) }
            
            // Continuous z-depth
            let z = pow(rand(1), 0.55)
            
            // Spatial zone assignment
            let zoneRoll = rand(30)
            var rx: Float
            var ry: Float
            var isArm = false
            
            if zoneRoll < 0.20 {
                // Background — uniform with subtle perturbation
                rx = rand(2) + sin(Float(i) * 0.37) * 0.05
                ry = abs(rand(3) + cos(Float(i) * 0.29) * 0.05)
                rx = rx.truncatingRemainder(dividingBy: 1.0)
                ry = ry.truncatingRemainder(dividingBy: 1.0)
            } else if zoneRoll < 0.35 {
                // Core — concentrated Gaussian
                let gx = gaussianRand(i * 137, 2, sigma: 0.06)
                let gy = gaussianRand(i * 137, 4, sigma: 0.06)
                rx = 0.5 + gx
                ry = 0.5 + gy
            } else if zoneRoll < 0.90 {
                // Spiral arms — log spiral with spread
                isArm = true
                let armIdx = i % armCount
                let armOffset = Float(armIdx) * .pi * 0.5
                let dist: Float = 0.12 + rand(2) * 0.25
                let spreadAngle = (rand(3) - 0.5) * 0.16
                let spiralAngle = log(dist / 0.05) / tightness + armOffset + spreadAngle
                rx = 0.5 + cos(spiralAngle) * dist
                ry = 0.5 + sin(spiralAngle) * dist
            } else {
                // Outer halo — annular
                let angle = rand(2) * .pi * 2
                let r: Float = 0.3 + rand(3) * 0.2
                rx = 0.5 + cos(angle) * r
                ry = 0.5 + sin(angle) * r
            }
            
            // ── Depth-dependent colour selection ──
            let colorRoll = rand(7)
            var baseColor: SIMD4<Float>
            
            if z < 0.20 {
                // Far background — faint spectral dust
                if colorRoll < 0.22 {
                    baseColor = SIMD4(210.0/255, 220.0/255, 255.0/255, 1)
                } else if colorRoll < 0.40 {
                    baseColor = SIMD4(255.0/255, 248.0/255, 240.0/255, 1)
                } else if colorRoll < 0.55 {
                    baseColor = SIMD4(235.0/255, 240.0/255, 250.0/255, 1)
                } else if colorRoll < 0.68 {
                    baseColor = SIMD4(220.0/255, 210.0/255, 255.0/255, 1)
                } else if colorRoll < 0.80 {
                    baseColor = SIMD4(255.0/255, 235.0/255, 215.0/255, 1)
                } else if colorRoll < 0.90 {
                    baseColor = SIMD4(200.0/255, 225.0/255, 255.0/255, 1)
                } else {
                    baseColor = SIMD4(245.0/255, 245.0/255, 255.0/255, 1)
                }
            } else if z < 0.50 {
                // Mid-field — standard spectral palette + accents
                if colorRoll < 0.14 {
                    baseColor = SIMD4(185.0/255, 206.0/255, 255.0/255, 1) // B-type
                } else if colorRoll < 0.26 {
                    baseColor = SIMD4(248.0/255, 248.0/255, 255.0/255, 1) // A-type
                } else if colorRoll < 0.36 {
                    baseColor = SIMD4(255.0/255, 252.0/255, 240.0/255, 1) // F-type
                } else if colorRoll < 0.46 {
                    baseColor = SIMD4(255.0/255, 244.0/255, 214.0/255, 1) // G-type
                } else if colorRoll < 0.55 {
                    baseColor = SIMD4(155.0/255, 176.0/255, 255.0/255, 1) // O-type
                } else if colorRoll < 0.63 {
                    baseColor = SIMD4(255.0/255, 220.0/255, 180.0/255, 1) // K-type
                } else if colorRoll < 0.72 {
                    baseColor = SIMD4(215.0/255, 200.0/255, 255.0/255, 1) // Violet
                } else if colorRoll < 0.80 {
                    baseColor = SIMD4(200.0/255, 235.0/255, 255.0/255, 1) // Electric blue
                } else if colorRoll < 0.88 {
                    baseColor = SIMD4(255.0/255, 230.0/255, 200.0/255, 1) // Warm gold
                } else if colorRoll < 0.94 {
                    baseColor = SIMD4(230.0/255, 220.0/255, 255.0/255, 1) // Nebula violet
                } else {
                    baseColor = SIMD4(255.0/255, 190.0/255, 150.0/255, 1) // M-type
                }
            } else {
                // Foreground — vivid, full spectral range
                if colorRoll < 0.12 {
                    baseColor = SIMD4(170.0/255, 191.0/255, 255.0/255, 1) // Bright O
                } else if colorRoll < 0.22 {
                    baseColor = SIMD4(200.0/255, 220.0/255, 255.0/255, 1) // B bright
                } else if colorRoll < 0.32 {
                    baseColor = SIMD4(255.0/255, 255.0/255, 255.0/255, 1) // Pure white
                } else if colorRoll < 0.40 {
                    baseColor = SIMD4(255.0/255, 250.0/255, 235.0/255, 1) // F warm
                } else if colorRoll < 0.48 {
                    baseColor = SIMD4(255.0/255, 235.0/255, 185.0/255, 1) // G vivid
                } else if colorRoll < 0.56 {
                    baseColor = SIMD4(255.0/255, 200.0/255, 145.0/255, 1) // K deep
                } else if colorRoll < 0.64 {
                    baseColor = SIMD4(255.0/255, 170.0/255, 130.0/255, 1) // M red
                } else if colorRoll < 0.72 {
                    baseColor = SIMD4(210.0/255, 190.0/255, 255.0/255, 1) // Bright violet
                } else if colorRoll < 0.80 {
                    baseColor = SIMD4(180.0/255, 230.0/255, 255.0/255, 1) // Cyan blue
                } else if colorRoll < 0.88 {
                    baseColor = SIMD4(255.0/255, 220.0/255, 240.0/255, 1) // Pink nebula
                } else if colorRoll < 0.94 {
                    baseColor = SIMD4(240.0/255, 250.0/255, 255.0/255, 1) // Electric white
                } else {
                    baseColor = SIMD4(255.0/255, 195.0/255, 210.0/255, 1) // Rose accent
                }
            }
            
            // ── Depth-dependent size ──
            let baseSize: Float
            if z < 0.20 {
                baseSize = (0.3 + rand(9) * 0.5) * 1.2
            } else if z < 0.50 {
                baseSize = (0.4 + pow(rand(9), 2.0) * 1.2) * (1.2 - z * 0.4) * 1.4
            } else {
                baseSize = (0.5 + pow(rand(9), 1.8) * 1.8) * (1.4 - z * 0.3) * 1.6
            }
            
            // ── Star type — hero and mystical distribution ──
            let isHero = isArm && z < 0.4 && rand(10) > 0.94
            let mysticalChance: Float = z < 0.20 ? 0.10 : (z < 0.50 ? 0.30 : 0.45)
            let isMystical = !isHero && rand(18) < mysticalChance
            
            let baseAlpha: Float = (0.60 + rand(11) * 0.55) * (1.0 - z * 0.35)
            baseColor.w = min(baseAlpha, 1.0)
            
            let starType: Int32 = isHero ? 1 : (isMystical ? 2 : 0)
            
            // ── Depth-dependent twinkle speed ──
            let twinkleSpeed: Float = z < 0.20
                ? 0.10 + rand(16) * 0.20
                : (z < 0.50
                   ? 0.20 + rand(16) * 0.35
                   : 0.30 + rand(16) * 0.50)
            
            // Zone tint — arm regions get blue-violet tint
            let tintStrength: Float = isArm ? (0.08 + z * 0.06) : 0
            let tintColor: SIMD4<Float> = isArm
                ? SIMD4(180.0/255, 200.0/255, 255.0/255, 1)
                : SIMD4(0, 0, 0, 0)
            
            stars.append(StarData(
                position: SIMD2(rx, ry),
                baseSize: baseSize * (isHero ? 3.5 : 1.0),
                zDepth: z,
                color: baseColor,
                twinkleSpeed: twinkleSpeed,
                twinklePhase: rand(17) * .pi * 2,
                twinkleAmp: 0.15,
                starType: starType,
                driftAngle: rand(12) * .pi * 2,
                driftSpeed: (0.005 + rand(13) * 0.02) * (1.0 - z * 0.5) * 50.0,
                motionParams: SIMD2(rand(14) * .pi * 2, 0.2 + rand(15) * 0.4),
                rotationFactor: 0,
                zoneTintStrength: tintStrength,
                zoneTintColor: tintColor
            ))
        }
        
        // ============================================================
        // Deep Parallax Stars — 100 faint spectral dust
        // ============================================================
        for i in 0..<100 {
            let seed = 800 + i * 3
            let rx = sRand(seed, 1)
            let ry = sRand(seed, 2)
            let size: Float = 0.3 + sRand(seed, 3) * 1.0
            let opacity: Float = 0.08 + sRand(seed, 4) * 0.22
            
            let dustRoll = sRand(seed, 5)
            let color: SIMD4<Float>
            if dustRoll < 0.30 {
                color = SIMD4(200.0/255, 210.0/255, 240.0/255, opacity)
            } else if dustRoll < 0.55 {
                color = SIMD4(230.0/255, 225.0/255, 245.0/255, opacity)
            } else if dustRoll < 0.75 {
                color = SIMD4(240.0/255, 235.0/255, 220.0/255, opacity)
            } else {
                color = SIMD4(210.0/255, 230.0/255, 250.0/255, opacity)
            }
            
            stars.append(StarData(
                position: SIMD2(rx, ry),
                baseSize: size,
                zDepth: 0.90 + sRand(seed, 6) * 0.10,
                color: color,
                twinkleSpeed: 0.08 + sRand(seed, 6) * 0.15,
                twinklePhase: sRand(seed, 7) * .pi * 2,
                twinkleAmp: 0.10,
                starType: 0,
                driftAngle: sRand(seed, 8) * .pi * 2,
                driftSpeed: 0.03 + sRand(seed, 9) * 0.08,
                motionParams: SIMD2(0, 0.1 + sRand(seed, 10) * 0.15),
                rotationFactor: 0,
                zoneTintStrength: 0,
                zoneTintColor: SIMD4(0, 0, 0, 0)
            ))
        }
        
        return stars
    }
    
    // ============================================================
    // MARK: - Edge of Andromeda (800 + 100 deep = 900 stars)
    // Continuous z-depth, rich galaxy colours, edge-on disc positioning
    // ============================================================
    
    static func edgeOfAndromedaStars() -> [StarData] {
        var stars: [StarData] = []
        
        // ============================================================
        // Main stellar population — 800 stars
        //
        // Spatial zones for edge-on galaxy:
        //   Background (25%): uniform random
        //   Nucleus (12%): Gaussian σx=0.035, σy=0.012
        //   Galactic disc (55%): Gaussian σx=0.18, σy=0.065
        //   Halo (8%): annular, flattened
        //
        // Quantum sparkle: 5 specific stars get high twinkleAmp
        // Continuous z-depth, 30+ colours, depth-dependent everything
        // ============================================================
        let starCount = 800
        let quantumIndices: Set<Int> = [47, 189, 412, 678, 723]
        
        for i in 0..<starCount {
            func rand(_ n: Int) -> Float { sRand(i * 137, n) }
            
            // Continuous z-depth
            let z = pow(rand(1), 0.55)
            
            // Spatial zone assignment
            let zoneRoll = rand(30)
            var rx: Float
            var ry: Float
            var isDisc = false
            
            if zoneRoll < 0.25 {
                // Background — uniform
                rx = rand(2)
                ry = rand(3)
            } else if zoneRoll < 0.37 {
                // Nucleus — tight Gaussian, very flattened
                let gx = gaussianRand(i * 137, 2, sigma: 0.035)
                let gy = gaussianRand(i * 137, 4, sigma: 0.012)
                rx = 0.5 + gx
                ry = 0.5 + gy
            } else if zoneRoll < 0.92 {
                // Galactic disc — wide, flat
                isDisc = true
                let gx = gaussianRand(i * 137, 2, sigma: 0.18)
                let gy = gaussianRand(i * 137, 4, sigma: 0.065)
                let armHint = sin(gx * 6 + rand(22) * 2.0) * 0.018
                rx = 0.5 + gx
                ry = 0.5 + gy + armHint
            } else {
                // Halo — annular, flattened
                let angle = rand(2) * .pi * 2
                let r: Float = 0.25 + rand(3) * 0.25
                rx = 0.5 + cos(angle) * r
                ry = 0.5 + sin(angle) * r * 0.45
            }
            
            // ── Depth-dependent colour selection ──
            let colorRoll = rand(7)
            var baseColor: SIMD4<Float>
            
            if z < 0.20 {
                // Far background — cool galaxy dust
                if colorRoll < 0.20 {
                    baseColor = SIMD4(215.0/255, 225.0/255, 255.0/255, 1) // Pale blue
                } else if colorRoll < 0.38 {
                    baseColor = SIMD4(240.0/255, 240.0/255, 250.0/255, 1) // Nearly white
                } else if colorRoll < 0.52 {
                    baseColor = SIMD4(200.0/255, 210.0/255, 240.0/255, 1) // Steel blue
                } else if colorRoll < 0.65 {
                    baseColor = SIMD4(230.0/255, 225.0/255, 250.0/255, 1) // Lavender dust
                } else if colorRoll < 0.78 {
                    baseColor = SIMD4(255.0/255, 240.0/255, 225.0/255, 1) // Warm cream
                } else if colorRoll < 0.90 {
                    baseColor = SIMD4(225.0/255, 235.0/255, 255.0/255, 1) // Cool white
                } else {
                    baseColor = SIMD4(210.0/255, 200.0/255, 235.0/255, 1) // Faint violet
                }
            } else if z < 0.50 {
                // Mid-field — full spectral range
                if colorRoll < 0.12 {
                    baseColor = SIMD4(155.0/255, 176.0/255, 255.0/255, 1) // O-type
                } else if colorRoll < 0.24 {
                    baseColor = SIMD4(185.0/255, 206.0/255, 255.0/255, 1) // B-type
                } else if colorRoll < 0.35 {
                    baseColor = SIMD4(248.0/255, 248.0/255, 255.0/255, 1) // A-type
                } else if colorRoll < 0.45 {
                    baseColor = SIMD4(255.0/255, 252.0/255, 240.0/255, 1) // F-type
                } else if colorRoll < 0.55 {
                    baseColor = SIMD4(255.0/255, 244.0/255, 214.0/255, 1) // G-type
                } else if colorRoll < 0.64 {
                    baseColor = SIMD4(255.0/255, 220.0/255, 180.0/255, 1) // K-type
                } else if colorRoll < 0.73 {
                    baseColor = SIMD4(255.0/255, 190.0/255, 150.0/255, 1) // M-type
                } else if colorRoll < 0.81 {
                    baseColor = SIMD4(220.0/255, 210.0/255, 255.0/255, 1) // Violet
                } else if colorRoll < 0.89 {
                    baseColor = SIMD4(255.0/255, 235.0/255, 210.0/255, 1) // Warm gold
                } else if colorRoll < 0.95 {
                    baseColor = SIMD4(190.0/255, 220.0/255, 255.0/255, 1) // Bright blue
                } else {
                    baseColor = SIMD4(255.0/255, 200.0/255, 220.0/255, 1) // Rose
                }
            } else {
                // Foreground — vivid, exotic
                if colorRoll < 0.10 {
                    baseColor = SIMD4(170.0/255, 191.0/255, 255.0/255, 1) // Bright O
                } else if colorRoll < 0.20 {
                    baseColor = SIMD4(200.0/255, 220.0/255, 255.0/255, 1) // B vivid
                } else if colorRoll < 0.30 {
                    baseColor = SIMD4(255.0/255, 255.0/255, 255.0/255, 1) // Pure A
                } else if colorRoll < 0.38 {
                    baseColor = SIMD4(255.0/255, 250.0/255, 235.0/255, 1) // F warm
                } else if colorRoll < 0.46 {
                    baseColor = SIMD4(255.0/255, 240.0/255, 200.0/255, 1) // G vivid
                } else if colorRoll < 0.54 {
                    baseColor = SIMD4(255.0/255, 210.0/255, 160.0/255, 1) // K deep
                } else if colorRoll < 0.62 {
                    baseColor = SIMD4(255.0/255, 180.0/255, 140.0/255, 1) // M red
                } else if colorRoll < 0.70 {
                    baseColor = SIMD4(200.0/255, 180.0/255, 255.0/255, 1) // Violet protostar
                } else if colorRoll < 0.78 {
                    baseColor = SIMD4(180.0/255, 230.0/255, 255.0/255, 1) // Cyan
                } else if colorRoll < 0.86 {
                    baseColor = SIMD4(255.0/255, 220.0/255, 240.0/255, 1) // Pink nebula
                } else if colorRoll < 0.93 {
                    baseColor = SIMD4(240.0/255, 250.0/255, 255.0/255, 1) // Electric white
                } else {
                    baseColor = SIMD4(230.0/255, 200.0/255, 255.0/255, 1) // Deep violet
                }
            }
            
            // ── Depth-dependent size ──
            let baseSize: Float
            if z < 0.20 {
                baseSize = (0.3 + rand(9) * 0.5) * 1.2
            } else if z < 0.50 {
                baseSize = (0.4 + pow(rand(9), 2.0) * 1.2) * (1.2 - z * 0.4) * 1.4
            } else {
                baseSize = (0.5 + pow(rand(9), 1.8) * 1.8) * (1.4 - z * 0.3) * 1.6
            }
            
            // ── Star type — hero and mystical distribution ──
            let isHero = isDisc && z < 0.4 && rand(10) > 0.94
            let mysticalChance: Float = z < 0.20 ? 0.10 : (z < 0.50 ? 0.30 : 0.45)
            let isMystical = !isHero && rand(18) < mysticalChance
            
            let baseAlpha: Float = (0.60 + rand(11) * 0.55) * (1.0 - z * 0.35)
            baseColor.w = min(baseAlpha, 1.0)
            
            let starType: Int32 = isHero ? 1 : (isMystical ? 2 : 0)
            
            // ── Depth-dependent twinkle speed ──
            let twinkleSpeed: Float = z < 0.20
                ? 0.10 + rand(16) * 0.20
                : (z < 0.50
                   ? 0.20 + rand(16) * 0.35
                   : 0.30 + rand(16) * 0.50)
            
            // Quantum sparkle — 5 specific stars shimmer brightly
            let isQuantum = quantumIndices.contains(i)
            
            // Zone tint — disc regions get violet tint
            let tintStrength: Float = isDisc ? (0.06 + z * 0.06) : 0
            let tintColor: SIMD4<Float> = isDisc
                ? SIMD4(180.0/255, 140.0/255, 200.0/255, 1)
                : SIMD4(0, 0, 0, 0)
            
            stars.append(StarData(
                position: SIMD2(rx, ry),
                baseSize: baseSize * (isHero ? 3.5 : 1.0),
                zDepth: z,
                color: baseColor,
                twinkleSpeed: twinkleSpeed,
                twinklePhase: rand(17) * .pi * 2,
                twinkleAmp: isQuantum ? 0.6 : 0.15,
                starType: starType,
                driftAngle: rand(12) * .pi * 2,
                driftSpeed: (0.005 + rand(13) * 0.02) * (1.0 - z * 0.5) * 50.0,
                motionParams: SIMD2(isQuantum ? 1.0 : (rand(14) * .pi * 2),
                                    0.2 + rand(15) * 0.4),
                rotationFactor: 0,
                zoneTintStrength: tintStrength,
                zoneTintColor: tintColor
            ))
        }
        
        // ============================================================
        // Deep Parallax Stars — 100 faint galaxy dust
        // ============================================================
        for i in 0..<100 {
            let seed = 900 + i * 3
            let rx = sRand(seed, 1)
            let ry = sRand(seed, 2)
            let size: Float = 0.3 + sRand(seed, 3) * 1.0
            let opacity: Float = 0.08 + sRand(seed, 4) * 0.22
            
            let dustRoll = sRand(seed, 5)
            let color: SIMD4<Float>
            if dustRoll < 0.30 {
                color = SIMD4(190.0/255, 200.0/255, 235.0/255, opacity) // Cool blue
            } else if dustRoll < 0.55 {
                color = SIMD4(215.0/255, 210.0/255, 240.0/255, opacity) // Faint violet
            } else if dustRoll < 0.75 {
                color = SIMD4(235.0/255, 230.0/255, 215.0/255, opacity) // Warm dust
            } else {
                color = SIMD4(200.0/255, 220.0/255, 245.0/255, opacity) // Steel blue
            }
            
            stars.append(StarData(
                position: SIMD2(rx, ry),
                baseSize: size,
                zDepth: 0.90 + sRand(seed, 6) * 0.10,
                color: color,
                twinkleSpeed: 0.08 + sRand(seed, 6) * 0.15,
                twinklePhase: sRand(seed, 7) * .pi * 2,
                twinkleAmp: 0.10,
                starType: 0,
                driftAngle: sRand(seed, 8) * .pi * 2,
                driftSpeed: 0.03 + sRand(seed, 9) * 0.08,
                motionParams: SIMD2(0, 0.1 + sRand(seed, 10) * 0.15),
                rotationFactor: 0,
                zoneTintStrength: 0,
                zoneTintColor: SIMD4(0, 0, 0, 0)
            ))
        }
        
        return stars
    }
    
    // ============================================================
    // MARK: - Starburst Ring Galaxy (800 + 100 deep = 900 stars)
    // Continuous z-depth, rich colours, radial ring positioning
    // ============================================================
    
    static func starburstRingStars() -> [StarData] {
        var stars: [StarData] = []
        
        // ============================================================
        // Main stellar population — 800 stars
        //
        // Spatial zones for ring galaxy:
        //   Core (4%): Gaussian r<0.1
        //   Ring (58%): annular 0.24..0.52
        //   Halo (20%): annular 0.52..0.75
        //   Field (18%): uniform random
        //
        // Colour: weighted 10-colour system + depth-dependent shifts
        // Continuous z-depth, hero/mystical, depth-dependent everything
        // ============================================================
        let starCount = 800
        
        // Weighted color selection from React (10 colors)
        let weightedColors: [(SIMD4<Float>, Float)] = [
            (SIMD4(255.0/255, 255.0/255, 255.0/255, 1), 0.40),  // white
            (SIMD4(220.0/255, 235.0/255, 255.0/255, 1), 0.15),  // blue-white
            (SIMD4(255.0/255, 248.0/255, 240.0/255, 1), 0.12),  // warm-white
            (SIMD4(200.0/255, 180.0/255, 255.0/255, 1), 0.08),  // soft-violet
            (SIMD4(255.0/255, 220.0/255, 240.0/255, 1), 0.06),  // pink
            (SIMD4(255.0/255, 245.0/255, 220.0/255, 1), 0.06),  // warm
            (SIMD4(180.0/255, 220.0/255, 255.0/255, 1), 0.05),  // cool-blue
            (SIMD4(255.0/255, 200.0/255, 220.0/255, 1), 0.04),  // rose
            (SIMD4(200.0/255, 255.0/255, 245.0/255, 1), 0.02),  // teal
            (SIMD4(255.0/255, 190.0/255, 210.0/255, 1), 0.02),  // deep-pink
        ]
        
        func pickWeightedColor(_ r: Float) -> SIMD4<Float> {
            var cumulative: Float = 0
            for (color, weight) in weightedColors {
                cumulative += weight
                if r < cumulative { return color }
            }
            return weightedColors[0].0
        }
        
        for i in 0..<starCount {
            func rand(_ n: Int) -> Float { sRand(i * 137, n) }
            
            // Continuous z-depth
            let z = pow(rand(1), 0.55)
            
            // Spatial zone assignment (matches React ratios)
            let zoneRoll = rand(30)
            let zone: Int // 0=core, 1=ring, 2=halo, 3=field
            var rx: Float
            var ry: Float
            var isRing = false
            
            if zoneRoll < 0.04 {
                zone = 0
                // Core — concentrated Gaussian
                let angle = rand(2) * .pi * 2
                let r = rand(3) * 0.1
                rx = 0.5 + cos(angle) * r
                ry = 0.5 + sin(angle) * r
            } else if zoneRoll < 0.62 {
                zone = 1
                isRing = true
                // Ring — radius 0.24..0.52
                let angle = rand(2) * .pi * 2
                let innerR: Float = 0.24
                let outerR: Float = 0.52
                let r = innerR + rand(3) * (outerR - innerR)
                rx = 0.5 + cos(angle) * r
                ry = 0.5 + sin(angle) * r
            } else if zoneRoll < 0.82 {
                zone = 2
                // Halo — 0.52..0.75
                let angle = rand(2) * .pi * 2
                let r: Float = 0.52 + rand(3) * 0.23
                rx = 0.5 + cos(angle) * r
                ry = 0.5 + sin(angle) * r
            } else {
                zone = 3
                // Field — uniform
                rx = rand(2)
                ry = rand(3)
            }
            
            // ── Depth-dependent colour — base from weighted system + depth shifts ──
            let colorRoll = rand(7)
            var baseColor: SIMD4<Float>
            
            if z < 0.20 {
                // Far — faint, muted versions
                if colorRoll < 0.30 {
                    baseColor = SIMD4(235.0/255, 240.0/255, 250.0/255, 1) // Pale white
                } else if colorRoll < 0.50 {
                    baseColor = SIMD4(220.0/255, 230.0/255, 255.0/255, 1) // Cool blue
                } else if colorRoll < 0.65 {
                    baseColor = SIMD4(240.0/255, 235.0/255, 250.0/255, 1) // Faint violet
                } else if colorRoll < 0.78 {
                    baseColor = SIMD4(255.0/255, 245.0/255, 235.0/255, 1) // Warm cream
                } else if colorRoll < 0.88 {
                    baseColor = SIMD4(225.0/255, 220.0/255, 245.0/255, 1) // Lavender
                } else {
                    baseColor = SIMD4(210.0/255, 235.0/255, 255.0/255, 1) // Ice blue
                }
            } else if z < 0.50 {
                // Mid — weighted colour system + violet/pink accents
                baseColor = pickWeightedColor(colorRoll)
                // Add depth accent shift for ring stars
                if isRing && rand(31) < 0.3 {
                    let accentRoll = rand(32)
                    if accentRoll < 0.35 {
                        baseColor = SIMD4(200.0/255, 180.0/255, 255.0/255, 1) // Violet
                    } else if accentRoll < 0.60 {
                        baseColor = SIMD4(255.0/255, 200.0/255, 230.0/255, 1) // Pink
                    } else {
                        baseColor = SIMD4(180.0/255, 220.0/255, 255.0/255, 1) // Blue
                    }
                }
            } else {
                // Foreground — vivid weighted + exotic accents
                if colorRoll < 0.10 {
                    baseColor = SIMD4(200.0/255, 170.0/255, 255.0/255, 1) // Bright violet
                } else if colorRoll < 0.18 {
                    baseColor = SIMD4(255.0/255, 180.0/255, 220.0/255, 1) // Hot pink
                } else if colorRoll < 0.26 {
                    baseColor = SIMD4(170.0/255, 210.0/255, 255.0/255, 1) // Bright blue
                } else if colorRoll < 0.34 {
                    baseColor = SIMD4(255.0/255, 255.0/255, 255.0/255, 1) // Pure white
                } else if colorRoll < 0.42 {
                    baseColor = SIMD4(255.0/255, 245.0/255, 220.0/255, 1) // Warm gold
                } else if colorRoll < 0.50 {
                    baseColor = SIMD4(255.0/255, 190.0/255, 210.0/255, 1) // Rose
                } else if colorRoll < 0.58 {
                    baseColor = SIMD4(220.0/255, 235.0/255, 255.0/255, 1) // Blue-white
                } else if colorRoll < 0.66 {
                    baseColor = SIMD4(255.0/255, 248.0/255, 240.0/255, 1) // Warm white
                } else if colorRoll < 0.74 {
                    baseColor = SIMD4(230.0/255, 200.0/255, 255.0/255, 1) // Purple
                } else if colorRoll < 0.82 {
                    baseColor = SIMD4(200.0/255, 255.0/255, 245.0/255, 1) // Teal
                } else if colorRoll < 0.90 {
                    baseColor = SIMD4(255.0/255, 220.0/255, 240.0/255, 1) // Pink nebula
                } else {
                    baseColor = SIMD4(240.0/255, 250.0/255, 255.0/255, 1) // Electric white
                }
            }
            
            // ── Depth-dependent size ──
            let baseSize: Float
            if z < 0.20 {
                baseSize = (0.3 + rand(9) * 0.5) * 1.2
            } else if z < 0.50 {
                baseSize = (0.4 + pow(rand(9), 2.0) * 1.2) * (1.2 - z * 0.4) * 1.4
            } else {
                baseSize = (0.5 + pow(rand(9), 1.8) * 1.8) * (1.4 - z * 0.3) * 1.6
            }
            
            // ── Star type — hero and mystical distribution ──
            let isHero = isRing && z < 0.4 && rand(10) > 0.94
            let mysticalChance: Float = z < 0.20 ? 0.10 : (z < 0.50 ? 0.30 : 0.45)
            let isMystical = !isHero && rand(18) < mysticalChance
            
            let baseAlpha: Float = (0.60 + rand(11) * 0.55) * (1.0 - z * 0.35)
            baseColor.w = min(baseAlpha, 1.0)
            
            let starType: Int32 = isHero ? 1 : (isMystical ? 2 : 0)
            
            // ── Depth-dependent twinkle speed ──
            let twinkleSpeed: Float = z < 0.20
                ? 0.10 + rand(16) * 0.20
                : (z < 0.50
                   ? 0.20 + rand(16) * 0.35
                   : 0.30 + rand(16) * 0.50)
            
            // Ring angle for drift
            let ringAngle = atan2(ry - 0.5, rx - 0.5)
            let distFromCenter = sqrt((rx - 0.5) * (rx - 0.5) + (ry - 0.5) * (ry - 0.5))
            
            // Zone tint — ring regions get violet tint
            let tintStrength: Float = isRing ? (0.06 + z * 0.06) : 0
            let tintColor: SIMD4<Float> = isRing
                ? SIMD4(154.0/255, 86.0/255, 255.0/255, 1)
                : SIMD4(0, 0, 0, 0)
            
            stars.append(StarData(
                position: SIMD2(rx, ry),
                baseSize: baseSize * (isHero ? 3.5 : 1.0),
                zDepth: z,
                color: baseColor,
                twinkleSpeed: twinkleSpeed,
                twinklePhase: rand(17) * .pi * 2,
                twinkleAmp: 0.15,
                starType: starType,
                driftAngle: ringAngle,
                driftSpeed: (0.005 + rand(13) * 0.02) * (1.0 - z * 0.5) * 50.0,
                motionParams: SIMD2(Float(zone), distFromCenter),
                rotationFactor: 0,
                zoneTintStrength: tintStrength,
                zoneTintColor: tintColor
            ))
        }
        
        // ============================================================
        // Deep Parallax Stars — 100 faint ring dust
        // ============================================================
        for i in 0..<100 {
            let seed = 1000 + i * 3
            let rx = sRand(seed, 1)
            let ry = sRand(seed, 2)
            let size: Float = 0.3 + sRand(seed, 3) * 1.0
            let opacity: Float = 0.08 + sRand(seed, 4) * 0.22
            
            let dustRoll = sRand(seed, 5)
            let color: SIMD4<Float>
            if dustRoll < 0.30 {
                color = SIMD4(220.0/255, 215.0/255, 245.0/255, opacity) // Faint violet
            } else if dustRoll < 0.55 {
                color = SIMD4(230.0/255, 235.0/255, 250.0/255, opacity) // Cool blue
            } else if dustRoll < 0.75 {
                color = SIMD4(240.0/255, 235.0/255, 225.0/255, opacity) // Warm white
            } else {
                color = SIMD4(210.0/255, 225.0/255, 250.0/255, opacity) // Steel blue
            }
            
            stars.append(StarData(
                position: SIMD2(rx, ry),
                baseSize: size,
                zDepth: 0.90 + sRand(seed, 6) * 0.10,
                color: color,
                twinkleSpeed: 0.08 + sRand(seed, 6) * 0.15,
                twinklePhase: sRand(seed, 7) * .pi * 2,
                twinkleAmp: 0.10,
                starType: 0,
                driftAngle: sRand(seed, 8) * .pi * 2,
                driftSpeed: 0.03 + sRand(seed, 9) * 0.08,
                motionParams: SIMD2(0, 0.1 + sRand(seed, 10) * 0.15),
                rotationFactor: 0,
                zoneTintStrength: 0,
                zoneTintColor: SIMD4(0, 0, 0, 0)
            ))
        }
        
        return stars
    }
    
    // ============================================================
    // MARK: - Factory
    // ============================================================
    
    static func generateStars(for preset: NebulaPreset) -> [StarData] {
        switch preset {
        case .lagoonNebula: return lagoonStars()
        case .celestialLagoon: return celestialLagoonStars()
        case .solarAurora: return solarAuroraStars()
        case .spiralHaloGalaxy: return spiralHaloStars()
        case .edgeOfAndromeda: return edgeOfAndromedaStars()
        case .starburstRing: return starburstRingStars()
        }
    }
}
