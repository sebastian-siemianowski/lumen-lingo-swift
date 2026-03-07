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
        let starCount = 700
        
        for i in 0..<starCount {
            // Per-star seed matching React: seededRandom(i * 137, n)
            func rand(_ n: Int) -> Float { sRand(i * 137, n) }
            
            // Z-depth: pow(rand, 0.6) biases towards foreground
            let z = pow(rand(1), 0.6)
            
            // Position
            var rx = rand(2)
            var ry = rand(3)
            
            // Clustering: ~45% in diagonal band (React: rand(4) > 0.55)
            let isCluster = rand(4) > 0.55
            if isCluster {
                let theta = rand(5) * Float.pi * 2
                let radius = rand(6) * 0.4
                let cx: Float = 0.5 + rand(20) * 0.15
                let cy: Float = 0.48 + rand(21) * 0.12
                rx = cx + cos(theta) * radius
                ry = cy + sin(theta) * radius * 1.6
            }
            
            // 8 JWST stellar color types (exact React distribution)
            let colorRoll = rand(7)
            var baseColor: SIMD4<Float>
            if colorRoll < 0.25 {
                baseColor = SIMD4(255.0/255, 220.0/255, 180.0/255, 1) // GOLDEN_STAR
            } else if colorRoll < 0.45 {
                baseColor = SIMD4(255.0/255, 180.0/255, 120.0/255, 1) // AMBER_GLOW
            } else if colorRoll < 0.60 {
                baseColor = SIMD4(255.0/255, 248.0/255, 240.0/255, 1) // WARM_WHITE
            } else if colorRoll < 0.72 {
                baseColor = SIMD4(255.0/255, 140.0/255, 80.0/255, 1)  // DEEP_ORANGE
            } else if colorRoll < 0.82 {
                baseColor = SIMD4(200.0/255, 230.0/255, 255.0/255, 1) // HOT_BLUE
            } else if colorRoll < 0.90 {
                baseColor = SIMD4(180.0/255, 230.0/255, 255.0/255, 1) // CYAN_BLUE
            } else if colorRoll < 0.96 {
                baseColor = SIMD4(255.0/255, 100.0/255, 100.0/255, 1) // RUBY_RED
            } else {
                baseColor = SIMD4(240.0/255, 250.0/255, 255.0/255, 1) // ELECTRIC_WHITE
            }
            
            // Size — React mobile formula
            let baseSize: Float = (0.4 + pow(rand(9), 2.2) * 1.4) * (1.3 - z * 0.5) * 1.5
            
            // Hero & mystical (React logic)
            let isHero = isCluster && z < 0.4 && rand(10) > 0.94
            let isMystical = !isHero && rand(18) < 0.35
            
            // Per-star brightness from React: (0.65 + rand * 0.55) * (1 - zDepth * 0.35)
            // Encoded in color.a — vertex shader multiplies finalAlpha by this
            let baseAlpha: Float = (0.65 + rand(11) * 0.55) * (1.0 - z * 0.35)
            baseColor.w = min(baseAlpha, 1.0)
            
            let starType: Int32 = isHero ? 1 : (isMystical ? 2 : 0)
            
            stars.append(StarData(
                position: SIMD2(rx, ry),
                baseSize: baseSize * (isHero ? 3.5 : 1.0),
                zDepth: z,
                color: baseColor,
                twinkleSpeed: 0.25 + rand(16) * 0.5,
                twinklePhase: rand(17) * .pi * 2,
                twinkleAmp: 0.15,  // React range 0.85±0.15 – gentle shimmer
                starType: starType,
                driftAngle: rand(12) * .pi * 2,
                driftSpeed: (0.005 + rand(13) * 0.02) * (1.0 - z * 0.5) * 50.0,
                motionParams: SIMD2(rand(14) * .pi * 2, 0.2 + rand(15) * 0.4),
                rotationFactor: 0,
                zoneTintStrength: 0,
                zoneTintColor: SIMD4(0, 0, 0, 0)
            ))
        }
        
        // 80 Deep Parallax Stars — warm dusty background (React DeepParallaxCanvas)
        for i in 0..<80 {
            let seed = 500 + i * 3
            let rx = sRand(seed, 1)
            let ry = sRand(seed, 2)
            let size: Float = 0.5 + sRand(seed, 3) * 1.5
            let opacity: Float = 0.1 + sRand(seed, 4) * 0.3
            let isGolden = sRand(seed, 5) > 0.5
            // Deep parallax stars use opacity as baseAlpha in color.a
            let color: SIMD4<Float> = isGolden
                ? SIMD4(255.0/255, 180.0/255, 80.0/255, opacity)
                : SIMD4(180.0/255, 60.0/255, 40.0/255, opacity)
            
            stars.append(StarData(
                position: SIMD2(rx, ry),
                baseSize: size,
                zDepth: 0.9 + sRand(seed, 6) * 0.1,
                color: color,
                twinkleSpeed: 0.1 + sRand(seed, 6) * 0.2,
                twinklePhase: sRand(seed, 7) * .pi * 2,
                twinkleAmp: 0.12,  // very subtle for background dust
                starType: 0,
                driftAngle: sRand(seed, 8) * .pi * 2, // random direction
                driftSpeed: 0.05 + sRand(seed, 9) * 0.1, // very slow
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
        let seed = 99
        
        // Layer C — 600 far background stars (icy/aquamarine palette)
        // Enhanced: wider color variety, some mystical types
        for i in 0..<600 {
            let colorRoll = sRand(seed, i * 11 + 7)
            var baseColor: SIMD4<Float>
            if colorRoll > 0.80 {
                baseColor = SIMD4(210.0/255, 240.0/255, 250.0/255, 1) // Pale icy blue
            } else if colorRoll > 0.60 {
                baseColor = SIMD4(200.0/255, 245.0/255, 245.0/255, 1) // Faint turquoise
            } else if colorRoll > 0.40 {
                baseColor = SIMD4(220.0/255, 245.0/255, 255.0/255, 1) // Soft aquamarine
            } else if colorRoll > 0.25 {
                baseColor = SIMD4(190.0/255, 255.0/255, 240.0/255, 1) // Seafoam
            } else if colorRoll > 0.12 {
                baseColor = SIMD4(180.0/255, 235.0/255, 255.0/255, 1) // Azure
            } else {
                baseColor = SIMD4(235.0/255, 245.0/255, 250.0/255, 1) // Nearly white
            }
            
            let size: Float = 0.2 + sRand(seed, i * 7 + 2) * 0.4
            let baseAlpha: Float = 0.12 + sRand(seed, i * 7 + 4) * 0.28
            baseColor.w = baseAlpha
            
            // 8% mystical stars in background — color-shifting
            let isMystical = sRand(seed, i * 23 + 5) > 0.92
            
            stars.append(StarData(
                position: SIMD2(sRand(seed, i * 7), sRand(seed, i * 7 + 1)),
                baseSize: size,
                zDepth: 0.05 + sRand(seed, i * 7 + 3) * 0.25,
                color: baseColor,
                twinkleSpeed: 0.15 + sRand(seed, i * 13) * 0.4,
                twinklePhase: sRand(seed, i * 11) * .pi * 2,
                twinkleAmp: 0.40,
                starType: isMystical ? 2 : 0,
                driftAngle: sRand(seed, i * 19) * .pi * 2,
                driftSpeed: 0.08,
                motionParams: SIMD2(1.0, sRand(seed, i * 17 + 3) * 0.5),
                rotationFactor: 0,
                zoneTintStrength: 0,
                zoneTintColor: SIMD4(0, 0, 0, 0)
            ))
        }
        
        // Layer B — 600 mid stars (cyan/turquoise palette)
        // Enhanced: more color variety, zone tinting near nebula core
        for i in 0..<600 {
            let idx = 600 + i
            let colorRoll = sRand(seed, idx * 11 + 7)
            var baseColor: SIMD4<Float>
            if colorRoll > 0.78 {
                baseColor = SIMD4(185.0/255, 235.0/255, 245.0/255, 1) // Soft turquoise
            } else if colorRoll > 0.58 {
                baseColor = SIMD4(195.0/255, 240.0/255, 250.0/255, 1) // Pale cyan
            } else if colorRoll > 0.40 {
                baseColor = SIMD4(210.0/255, 245.0/255, 255.0/255, 1) // Ice blue
            } else if colorRoll > 0.25 {
                baseColor = SIMD4(160.0/255, 255.0/255, 255.0/255, 1) // Electric cyan
            } else if colorRoll > 0.12 {
                baseColor = SIMD4(200.0/255, 255.0/255, 225.0/255, 1) // Mint green
            } else {
                baseColor = SIMD4(225.0/255, 250.0/255, 255.0/255, 1) // Faint white-blue
            }
            
            let size: Float = 0.35 + sRand(seed, idx * 7 + 2) * 0.70
            let baseAlpha: Float = 0.28 + sRand(seed, idx * 7 + 4) * 0.45
            baseColor.w = baseAlpha
            
            // 12% mystical in mid-layer
            let isMystical = sRand(seed, idx * 23 + 5) > 0.88
            
            // Zone tinting — stars near nebula centre pick up aqua tint
            let px = sRand(seed, idx * 7)
            let py = sRand(seed, idx * 7 + 1)
            let distToCore = sqrt((px - 0.45) * (px - 0.45) + (py - 0.48) * (py - 0.48))
            let zoneTint: Float = distToCore < 0.3 ? (0.3 - distToCore) * 0.4 : 0
            
            stars.append(StarData(
                position: SIMD2(px, py),
                baseSize: size,
                zDepth: 0.3 + sRand(seed, idx * 7 + 3) * 0.3,
                color: baseColor,
                twinkleSpeed: 0.25 + sRand(seed, idx * 13) * 0.7,
                twinklePhase: sRand(seed, idx * 11) * .pi * 2,
                twinkleAmp: 0.45,
                starType: isMystical ? 2 : 0,
                driftAngle: sRand(seed, idx * 19) * .pi * 2,
                driftSpeed: 0.18,
                motionParams: SIMD2(0.5, sRand(seed, idx * 17 + 3) * 0.6),
                rotationFactor: 0,
                zoneTintStrength: zoneTint,
                zoneTintColor: SIMD4(120.0/255, 240.0/255, 235.0/255, 1)
            ))
        }
        
        // Layer A — 130 foreground stars (bright aqua palette, hero + mystical)
        // Enhanced: anamorphic heroes, more color variety, stronger motion
        for i in 0..<130 {
            let idx = 1200 + i
            let colorRoll = sRand(seed, idx * 11 + 7)
            var baseColor: SIMD4<Float>
            if colorRoll > 0.75 {
                baseColor = SIMD4(170.0/255, 230.0/255, 245.0/255, 1) // Bright turquoise
            } else if colorRoll > 0.55 {
                baseColor = SIMD4(185.0/255, 240.0/255, 250.0/255, 1) // Aqua
            } else if colorRoll > 0.35 {
                baseColor = SIMD4(200.0/255, 245.0/255, 255.0/255, 1) // Cyan-white
            } else if colorRoll > 0.18 {
                baseColor = SIMD4(175.0/255, 255.0/255, 245.0/255, 1) // Turquoise bright
            } else if colorRoll > 0.08 {
                baseColor = SIMD4(185.0/255, 255.0/255, 250.0/255, 1) // Aqua giant
            } else {
                baseColor = SIMD4(215.0/255, 250.0/255, 255.0/255, 1) // Bright ice
            }
            
            let size: Float = 0.7 + sRand(seed, idx * 7 + 2) * 1.2
            let baseAlpha: Float = 0.55 + sRand(seed, idx * 7 + 3) * 0.4
            baseColor.w = baseAlpha
            
            // Hero stars: JWST diffraction for brightest, anamorphic for very large
            let isVeryBright = baseAlpha > 0.75 && size > 1.5
            let isBright = baseAlpha > 0.6 && size > 1.3
            let starType: Int32
            if isVeryBright {
                starType = 3 // heroAnamorphic — spectacular
            } else if isBright {
                starType = 1 // hero JWST 6-point
            } else if sRand(seed, idx * 29) > 0.7 {
                starType = 2 // mystical color-shifting
            } else {
                starType = 0 // normal
            }
            
            stars.append(StarData(
                position: SIMD2(sRand(seed, idx * 7), sRand(seed, idx * 7 + 1)),
                baseSize: size * (starType == 1 || starType == 3 ? 2.0 : 1.0),
                zDepth: 0.7 + sRand(seed, idx * 7 + 4) * 0.3,
                color: baseColor,
                twinkleSpeed: 0.25 + sRand(seed, idx * 13) * 0.7,
                twinklePhase: sRand(seed, idx * 11) * .pi * 2,
                twinkleAmp: 0.50,
                starType: starType,
                driftAngle: sRand(seed, idx * 19) * .pi * 2,
                driftSpeed: 0.35,
                motionParams: SIMD2(sRand(seed, idx * 31), sRand(seed, idx * 17 + 3) * 0.8),
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
        let seed = 73
        
        // Field population (500) — faint background stars
        for i in 0..<500 {
            let colorRoll = sRand(seed, i * 11)
            var baseColor: SIMD4<Float>
            if colorRoll > 0.7 {
                baseColor = SIMD4(210.0/255, 205.0/255, 255.0/255, 1) // Pale violet
            } else if colorRoll > 0.45 {
                baseColor = SIMD4(255.0/255, 220.0/255, 240.0/255, 1) // Faint pink
            } else if colorRoll > 0.25 {
                baseColor = SIMD4(255.0/255, 240.0/255, 220.0/255, 1) // Faint amber
            } else {
                baseColor = SIMD4(235.0/255, 235.0/255, 245.0/255, 1) // Nearly white
            }
            
            let size: Float = 0.25 + sRand(seed, i * 7 + 2) * 0.50
            // Per-star baseAlpha from React: 0.15 + rand * 0.3, range [0.15, 0.45]
            let baseAlpha: Float = 0.15 + sRand(seed, i * 7 + 4) * 0.3
            baseColor.w = baseAlpha
            
            // Aurora Y-position tinting
            let y = sRand(seed, i * 7 + 1)
            let tintColor: SIMD4<Float>
            let tintStrength: Float
            if y < 0.35 {
                tintColor = SIMD4(95.0/255, 45.0/255, 190.0/255, 1) // violet
                tintStrength = 0.15
            } else if y > 0.65 {
                tintColor = SIMD4(255.0/255, 180.0/255, 70.0/255, 1) // gold
                tintStrength = 0.12
            } else {
                tintColor = SIMD4(210.0/255, 60.0/255, 160.0/255, 1) // fuchsia
                tintStrength = 0.08
            }
            
            stars.append(StarData(
                position: SIMD2(sRand(seed, i * 7), y),
                baseSize: size,
                zDepth: sRand(seed, i * 7 + 3) * 0.4,
                color: baseColor,
                twinkleSpeed: 0.2 + sRand(seed, i * 13) * 0.5,
                twinklePhase: sRand(seed, i * 11) * .pi * 2,
                twinkleAmp: 0.40,
                starType: 0,
                driftAngle: sRand(seed, i * 19) * .pi * 2,
                driftSpeed: 0.1,
                motionParams: SIMD2(0, 0),
                rotationFactor: 0,
                zoneTintStrength: tintStrength,
                zoneTintColor: tintColor
            ))
        }
        
        // Nebula population (550) — mid-layer stars
        for i in 0..<550 {
            let idx = 500 + i
            let colorRoll = sRand(seed, idx * 11)
            var baseColor: SIMD4<Float>
            if colorRoll > 0.7 {
                baseColor = SIMD4(195.0/255, 175.0/255, 255.0/255, 1) // Soft violet
            } else if colorRoll > 0.45 {
                baseColor = SIMD4(255.0/255, 190.0/255, 230.0/255, 1) // Pink
            } else if colorRoll > 0.25 {
                baseColor = SIMD4(255.0/255, 220.0/255, 190.0/255, 1) // Golden
            } else {
                baseColor = SIMD4(225.0/255, 220.0/255, 245.0/255, 1) // Violet-white
            }
            
            let size: Float = 0.4 + sRand(seed, idx * 7 + 2) * 0.80
            // Per-star baseAlpha from React: 0.3 + rand * 0.5, range [0.30, 0.80]
            let baseAlpha: Float = 0.3 + sRand(seed, idx * 7 + 4) * 0.5
            baseColor.w = baseAlpha
            
            let y = sRand(seed, idx * 7 + 1)
            let tintColor: SIMD4<Float>
            let tintStrength: Float
            if y < 0.35 {
                tintColor = SIMD4(95.0/255, 45.0/255, 190.0/255, 1)
                tintStrength = 0.20
            } else if y > 0.65 {
                tintColor = SIMD4(255.0/255, 180.0/255, 70.0/255, 1)
                tintStrength = 0.18
            } else {
                tintColor = SIMD4(210.0/255, 60.0/255, 160.0/255, 1)
                tintStrength = 0.12
            }
            
            stars.append(StarData(
                position: SIMD2(sRand(seed, idx * 7), y),
                baseSize: size,
                zDepth: 0.3 + sRand(seed, idx * 7 + 3) * 0.4,
                color: baseColor,
                twinkleSpeed: 0.3 + sRand(seed, idx * 13) * 0.8,
                twinklePhase: sRand(seed, idx * 11) * .pi * 2,
                twinkleAmp: 0.45,
                starType: 0,
                driftAngle: sRand(seed, idx * 19) * .pi * 2,
                driftSpeed: 0.15,
                motionParams: SIMD2(0, 0),
                rotationFactor: 0,
                zoneTintStrength: tintStrength,
                zoneTintColor: tintColor
            ))
        }
        
        // Bright population (120) — foreground featured stars
        for i in 0..<120 {
            let idx = 1050 + i
            let colorRoll = sRand(seed, idx * 11)
            var baseColor: SIMD4<Float>
            if colorRoll > 0.7 {
                baseColor = SIMD4(180.0/255, 150.0/255, 255.0/255, 1) // Bright violet
            } else if colorRoll > 0.45 {
                baseColor = SIMD4(255.0/255, 170.0/255, 220.0/255, 1) // Pink
            } else if colorRoll > 0.25 {
                baseColor = SIMD4(255.0/255, 200.0/255, 160.0/255, 1) // Amber
            } else {
                baseColor = SIMD4(215.0/255, 210.0/255, 255.0/255, 1) // White-violet
            }
            
            let size: Float = 0.8 + sRand(seed, idx * 7 + 2) * 1.4
            // Per-star baseAlpha from React: 0.6 + rand * 0.35, range [0.60, 0.95]
            let baseAlpha: Float = 0.6 + sRand(seed, idx * 7 + 4) * 0.35
            baseColor.w = baseAlpha
            
            let y = sRand(seed, idx * 7 + 1)
            // React hero: baseOp > 0.65 && size > 1.4
            let isHero = baseAlpha > 0.65 && size > 1.4
            
            let tintColor: SIMD4<Float>
            let tintStrength: Float
            if y < 0.35 {
                tintColor = SIMD4(95.0/255, 45.0/255, 190.0/255, 1)
                tintStrength = 0.25
            } else if y > 0.65 {
                tintColor = SIMD4(255.0/255, 180.0/255, 70.0/255, 1)
                tintStrength = 0.22
            } else {
                tintColor = SIMD4(210.0/255, 60.0/255, 160.0/255, 1)
                tintStrength = 0.15
            }
            
            stars.append(StarData(
                position: SIMD2(sRand(seed, idx * 7), y),
                baseSize: size * (isHero ? 2.0 : 1.0),
                zDepth: 0.6 + sRand(seed, idx * 7 + 3) * 0.35,
                color: baseColor,
                twinkleSpeed: 0.3 + sRand(seed, idx * 13) * 0.8,
                twinklePhase: sRand(seed, idx * 11) * .pi * 2,
                twinkleAmp: 0.50,
                starType: isHero ? 1 : 0,
                driftAngle: sRand(seed, idx * 19) * .pi * 2,
                driftSpeed: 0.2,
                motionParams: SIMD2(0, 0),
                rotationFactor: 0,
                zoneTintStrength: tintStrength,
                zoneTintColor: tintColor
            ))
        }
        
        return stars
    }
    
    // ============================================================
    // MARK: - Spiral Halo Galaxy (1100 + 132 deep = 1232 stars)
    // Sizes match React MOBILE multipliers. baseAlpha per zone.
    // ============================================================
    
    static func spiralHaloStars() -> [StarData] {
        var stars: [StarData] = []
        let seed = 42
        
        // O/B/A/F/G/K/M spectral types with 3 variants each (from React)
        let specColors: [[SIMD4<Float>]] = [
            [SIMD4(155.0/255, 176.0/255, 255.0/255, 1), SIMD4(162.0/255, 185.0/255, 255.0/255, 1), SIMD4(170.0/255, 191.0/255, 255.0/255, 1)], // O
            [SIMD4(185.0/255, 206.0/255, 255.0/255, 1), SIMD4(192.0/255, 213.0/255, 255.0/255, 1), SIMD4(200.0/255, 220.0/255, 255.0/255, 1)], // B
            [SIMD4(248.0/255, 248.0/255, 255.0/255, 1), SIMD4(255.0/255, 255.0/255, 255.0/255, 1), SIMD4(255.0/255, 252.0/255, 252.0/255, 1)], // A
            [SIMD4(255.0/255, 252.0/255, 240.0/255, 1), SIMD4(255.0/255, 250.0/255, 235.0/255, 1), SIMD4(255.0/255, 248.0/255, 230.0/255, 1)], // F
            [SIMD4(255.0/255, 244.0/255, 214.0/255, 1), SIMD4(255.0/255, 240.0/255, 200.0/255, 1), SIMD4(255.0/255, 235.0/255, 185.0/255, 1)], // G
            [SIMD4(255.0/255, 220.0/255, 180.0/255, 1), SIMD4(255.0/255, 210.0/255, 160.0/255, 1), SIMD4(255.0/255, 200.0/255, 145.0/255, 1)], // K
            [SIMD4(255.0/255, 190.0/255, 150.0/255, 1), SIMD4(255.0/255, 180.0/255, 140.0/255, 1), SIMD4(255.0/255, 170.0/255, 130.0/255, 1)], // M
        ]
        
        func pickColor(_ typeIdx: Int, _ i: Int) -> SIMD4<Float> {
            let variant = Int(sRand(seed, i * 31) * 3) % 3
            return specColors[min(typeIdx, 6)][variant]
        }
        
        // Background field (220 stars, 20%)
        // React: size = (0.4 + pow(r,2.5)*1.2) * 2.5 (mobile)
        // React: baseOp = 0.18 + r*0.28 (mobile)
        for i in 0..<220 {
            let noiseX = sRand(seed, i * 7) + sin(Float(i) * 0.37) * 0.05
            let noiseY = sRand(seed, i * 7 + 1) + cos(Float(i) * 0.29) * 0.05
            let rx = (noiseX).truncatingRemainder(dividingBy: 1.0)
            let ry = abs(noiseY).truncatingRemainder(dividingBy: 1.0)
            
            // React color: 60% A, 20% B, 20% F
            let colorRand = sRand(seed, i * 11)
            let typeIdx: Int
            if colorRand < 0.6 { typeIdx = 2 }      // A
            else if colorRand < 0.8 { typeIdx = 1 }  // B
            else { typeIdx = 3 }                       // F
            var color = pickColor(typeIdx, i)
            
            // React mobile size: (0.4 + pow(rand, 2.5) * 1.2) * 2.5
            let size: Float = (0.4 + pow(sRand(seed, i * 7 + 2), 2.5) * 1.2) * 2.5
            // React mobile baseOp: 0.18 + rand * 0.28
            let baseAlpha: Float = 0.18 + sRand(seed, i * 7 + 6) * 0.28
            color.w = baseAlpha
            
            // React twinkleAmp: 0.02 + rand * 0.04
            let tAmp: Float = 0.02 + sRand(seed, i * 17) * 0.04
            // Combined with intensityBreath → effective Metal amp ~0.25
            let isHero = size > 2.0 && baseAlpha > 0.3
            
            stars.append(StarData(
                position: SIMD2(rx, ry),
                baseSize: size * (isHero ? 2.0 : 1.0),
                zDepth: sRand(seed, i * 7 + 3) * 0.3,
                color: color,
                twinkleSpeed: 0.15 + sRand(seed, i * 13) * 0.4,
                twinklePhase: sRand(seed, i * 11) * .pi * 2,
                twinkleAmp: 0.20 + tAmp * 3.0,
                starType: isHero ? 1 : 0,
                driftAngle: sRand(seed, i * 19) * .pi * 2,
                driftSpeed: 0.08,
                motionParams: SIMD2(0, 0),
                rotationFactor: 0.2,
                zoneTintStrength: 0.08,
                zoneTintColor: SIMD4(30.0/255, 30.0/255, 60.0/255, 1)
            ))
        }
        
        // Core (165 stars, 15%)
        // React: size = (0.6 + r*1.4 + cb*1.0) * 2.8 (mobile)
        // React: baseOp = 0.4 + r*0.4 + cb*0.25 (mobile)
        for i in 0..<165 {
            let idx = 220 + i
            let gx = gaussianRand(seed, idx * 7, sigma: 0.06)
            let gy = gaussianRand(seed, idx * 7 + 1, sigma: 0.06)
            let rx = 0.5 + gx
            let ry = 0.5 + gy
            
            // Central brightness bonus (brighter near galaxy center)
            let distFromCenter = sqrt(gx * gx + gy * gy)
            let centralBrightness = max(Float(0), 1.0 - distFromCenter / 0.18)
            
            // React core color: 30% warm white, 20% F, 20% G, 30% A
            let colorRand = sRand(seed, idx * 11)
            let typeIdx: Int
            if colorRand < 0.3 { typeIdx = 3 }      // F (warm white)
            else if colorRand < 0.5 { typeIdx = 3 }  // F
            else if colorRand < 0.7 { typeIdx = 4 }  // G
            else { typeIdx = 2 }                       // A
            var color = pickColor(typeIdx, idx)
            
            // React mobile: (0.6 + rand*1.4 + cb*1.0) * 2.8
            let size: Float = (0.6 + sRand(seed, idx * 7 + 2) * 1.4 + centralBrightness * 1.0) * 2.8
            // React mobile: 0.4 + rand*0.4 + cb*0.25
            let baseAlpha: Float = min(1.0, 0.4 + sRand(seed, idx * 7 + 7) * 0.4 + centralBrightness * 0.25)
            color.w = baseAlpha
            
            // 10% get pronounced twinkle, rest gentle
            let tAmp: Float = sRand(seed, idx * 17) < 0.1
                ? (0.12 + sRand(seed, idx * 17 + 1) * 0.1)
                : (0.03 + sRand(seed, idx * 17 + 1) * 0.05)
            
            let isHero = size > 2.0 && baseAlpha > 0.3
            
            stars.append(StarData(
                position: SIMD2(rx, ry),
                baseSize: size * (isHero ? 2.0 : 1.0),
                zDepth: 0.5 + sRand(seed, idx * 7 + 3) * 0.3,
                color: color,
                twinkleSpeed: 0.2 + sRand(seed, idx * 13) * 0.5,
                twinklePhase: sRand(seed, idx * 11) * .pi * 2,
                twinkleAmp: 0.20 + tAmp * 2.5,
                starType: isHero ? 1 : 0,
                driftAngle: sRand(seed, idx * 19) * .pi * 2,
                driftSpeed: 0.1,
                motionParams: SIMD2(0, 0),
                rotationFactor: 1.5,
                zoneTintStrength: 0.10,
                zoneTintColor: SIMD4(255.0/255, 240.0/255, 200.0/255, 1)
            ))
        }
        
        // Spiral arms (605 stars, 55%)
        // React: size = (0.35 + pow(r,1.6)*1.8) * 3.2 (mobile)
        // React: baseOp = 0.22 + r*0.45 + (isYoung?0.15:0) (mobile)
        let armCount = 4
        let tightness: Float = 0.5
        for i in 0..<605 {
            let idx = 385 + i
            let armIdx = i % armCount
            let armOffset = Float(armIdx) * .pi * 0.5
            
            let dist: Float = 0.12 + sRand(seed, idx * 7) * 0.25
            let spreadAngle = (sRand(seed, idx * 7 + 1) - 0.5) * 0.16
            let spiralAngle = log(dist / 0.05) / tightness + armOffset + spreadAngle
            
            let rx = 0.5 + cos(spiralAngle) * dist
            let ry = 0.5 + sin(spiralAngle) * dist
            
            let isYoung = sRand(seed, idx * 11) < 0.4
            // Young: 20% O, 30% B, 30% A, 20% F
            // Old: 35% A, 20% F, 20% G, 15% K, 10% M
            let colorRand = sRand(seed, idx * 13)
            let typeIdx: Int
            if isYoung {
                if colorRand < 0.2 { typeIdx = 0 }
                else if colorRand < 0.5 { typeIdx = 1 }
                else if colorRand < 0.8 { typeIdx = 2 }
                else { typeIdx = 3 }
            } else {
                if colorRand < 0.35 { typeIdx = 2 }
                else if colorRand < 0.55 { typeIdx = 3 }
                else if colorRand < 0.75 { typeIdx = 4 }
                else if colorRand < 0.9 { typeIdx = 5 }
                else { typeIdx = 6 }
            }
            var color = pickColor(typeIdx, idx)
            
            // React mobile: (0.35 + pow(rand, 1.6) * 1.8) * 3.2
            let size: Float = (0.35 + pow(sRand(seed, idx * 7 + 2), 1.6) * 1.8) * 3.2
            // React mobile: 0.22 + rand*0.45 + (isYoung ? 0.15 : 0)
            let baseAlpha: Float = min(1.0, 0.22 + sRand(seed, idx * 7 + 12) * 0.45 + (isYoung ? 0.15 : 0))
            color.w = baseAlpha
            
            // 8% get pronounced twinkle
            let tAmp: Float = sRand(seed, idx * 17) < 0.08
                ? (0.1 + sRand(seed, idx * 17 + 1) * 0.12)
                : (0.03 + sRand(seed, idx * 17 + 1) * 0.05)
            
            let rotationFact: Float = 1.2 - dist * 1.5
            let isHero = size > 2.0 && baseAlpha > 0.3
            
            stars.append(StarData(
                position: SIMD2(rx, ry),
                baseSize: size * (isHero ? 2.0 : 1.0),
                zDepth: 0.3 + sRand(seed, idx * 7 + 3) * 0.4,
                color: color,
                twinkleSpeed: 0.25 + sRand(seed, idx * 13 + 5) * 0.7,
                twinklePhase: sRand(seed, idx * 11 + 3) * .pi * 2,
                twinkleAmp: 0.20 + tAmp * 2.5,
                starType: isHero ? 1 : 0,
                driftAngle: spiralAngle,
                driftSpeed: 0.12,
                motionParams: SIMD2(0, 0),
                rotationFactor: max(0.1, rotationFact),
                zoneTintStrength: 0.10,
                zoneTintColor: SIMD4(180.0/255, 200.0/255, 255.0/255, 1)
            ))
        }
        
        // Outer halo (110 stars, 10%)
        // React: size = (0.4 + pow(r,2)*1.0) * 2.3 (mobile)
        // React: baseOp = 0.18 + r*0.35
        for i in 0..<110 {
            let idx = 990 + i
            let angle = sRand(seed, idx * 7) * .pi * 2
            let r: Float = 0.3 + sRand(seed, idx * 7 + 1) * 0.2
            let rx = 0.5 + cos(angle) * r
            let ry = 0.5 + sin(angle) * r
            
            // React halo: 30% K, 20% M, 25% G, 25% blue horizontal branch
            let colorRand = sRand(seed, idx * 11)
            let typeIdx: Int
            if colorRand < 0.3 { typeIdx = 5 }       // K
            else if colorRand < 0.5 { typeIdx = 6 }  // M
            else if colorRand < 0.75 { typeIdx = 4 }  // G
            else { typeIdx = 1 }                       // B (blue horizontal branch)
            var color = pickColor(typeIdx, idx)
            
            // React mobile: (0.4 + pow(rand,2)*1.0) * 2.3
            let size: Float = (0.4 + pow(sRand(seed, idx * 7 + 2), 2.0) * 1.0) * 2.3
            // React: 0.18 + rand*0.35
            let baseAlpha: Float = 0.18 + sRand(seed, idx * 7 + 7) * 0.35
            color.w = baseAlpha
            
            stars.append(StarData(
                position: SIMD2(rx, ry),
                baseSize: size,
                zDepth: 0.2 + sRand(seed, idx * 7 + 3) * 0.3,
                color: color,
                twinkleSpeed: 0.15 + sRand(seed, idx * 13) * 0.35,
                twinklePhase: sRand(seed, idx * 11) * .pi * 2,
                twinkleAmp: 0.18 + (0.02 + sRand(seed, idx * 17) * 0.04) * 2.5,
                starType: 0,
                driftAngle: angle,
                driftSpeed: 0.06,
                motionParams: SIMD2(0, 0),
                rotationFactor: 0.3,
                zoneTintStrength: 0.12,
                zoneTintColor: SIMD4(160.0/255, 140.0/255, 200.0/255, 1)
            ))
        }
        
        // Deep parallax (132 ultra-faint)
        // React: size 0.3+r*0.7, baseOp 0.03+r*0.07
        for i in 0..<132 {
            let idx = 1100 + i
            var color = pickColor(Int(sRand(seed, idx * 11) * 4) + 2, idx)
            // React: 0.03 + rand * 0.07
            let baseAlpha: Float = 0.03 + sRand(seed, idx * 7 + 7) * 0.07
            color.w = baseAlpha
            
            stars.append(StarData(
                position: SIMD2(sRand(seed, idx * 7), sRand(seed, idx * 7 + 1)),
                baseSize: 0.3 + sRand(seed, idx * 7 + 2) * 0.7,
                zDepth: sRand(seed, idx * 7 + 3) * 0.1,
                color: color,
                twinkleSpeed: 0.08 + sRand(seed, idx * 13) * 0.12,
                twinklePhase: sRand(seed, idx * 11) * .pi * 2,
                twinkleAmp: 0.15,
                starType: 0,
                driftAngle: sRand(seed, idx * 19) * .pi * 2,
                driftSpeed: 0.03,
                motionParams: SIMD2(0, 0),
                rotationFactor: 0.1,
                zoneTintStrength: 0,
                zoneTintColor: SIMD4(0, 0, 0, 0)
            ))
        }
        
        return stars
    }
    
    // ============================================================
    // MARK: - Edge of Andromeda (1400 + 210 deep = 1610 stars)
    // Sizes with pow(), baseAlpha per zone, React color distributions
    // ============================================================
    
    static func edgeOfAndromedaStars() -> [StarData] {
        var stars: [StarData] = []
        let seed = 42
        
        let specColors: [[SIMD4<Float>]] = [
            [SIMD4(155.0/255, 176.0/255, 255.0/255, 1), SIMD4(162.0/255, 185.0/255, 255.0/255, 1), SIMD4(170.0/255, 191.0/255, 255.0/255, 1)],
            [SIMD4(185.0/255, 206.0/255, 255.0/255, 1), SIMD4(192.0/255, 213.0/255, 255.0/255, 1), SIMD4(200.0/255, 220.0/255, 255.0/255, 1)],
            [SIMD4(248.0/255, 248.0/255, 255.0/255, 1), SIMD4(255.0/255, 255.0/255, 255.0/255, 1), SIMD4(255.0/255, 252.0/255, 252.0/255, 1)],
            [SIMD4(255.0/255, 252.0/255, 240.0/255, 1), SIMD4(255.0/255, 250.0/255, 235.0/255, 1), SIMD4(255.0/255, 248.0/255, 230.0/255, 1)],
            [SIMD4(255.0/255, 244.0/255, 214.0/255, 1), SIMD4(255.0/255, 240.0/255, 200.0/255, 1), SIMD4(255.0/255, 235.0/255, 185.0/255, 1)],
            [SIMD4(255.0/255, 220.0/255, 180.0/255, 1), SIMD4(255.0/255, 210.0/255, 160.0/255, 1), SIMD4(255.0/255, 200.0/255, 145.0/255, 1)],
            [SIMD4(255.0/255, 190.0/255, 150.0/255, 1), SIMD4(255.0/255, 180.0/255, 140.0/255, 1), SIMD4(255.0/255, 170.0/255, 130.0/255, 1)],
        ]
        
        func pickColor(_ typeIdx: Int, _ i: Int) -> SIMD4<Float> {
            let variant = Int(sRand(seed, i * 31) * 3) % 3
            return specColors[min(typeIdx, 6)][variant]
        }
        
        // Quantum sparkle indices (5 fixed stars get periodic brightness boost)
        let quantumIndices: Set<Int> = [47, 189, 412, 678, 1023]
        
        // Background field (350 stars, 25%)
        // React: size = 0.2 + pow(rand, 2.5) * 1.0
        // React: baseOp = 0.08 + rand * 0.25
        for i in 0..<350 {
            // React: 60% A, 20% B, 12% F, 8% G
            let colorRand = sRand(seed, i * 11)
            let typeIdx: Int
            if colorRand < 0.6 { typeIdx = 2 }       // A
            else if colorRand < 0.8 { typeIdx = 1 }  // B
            else if colorRand < 0.92 { typeIdx = 3 } // F
            else { typeIdx = 4 }                       // G
            var color = pickColor(typeIdx, i)
            
            // React: 0.2 + pow(rand, 2.5) * 1.0
            let size: Float = 0.2 + pow(sRand(seed, i * 7 + 2), 2.5) * 1.0
            // React: 0.08 + rand * 0.25
            let baseAlpha: Float = 0.08 + sRand(seed, i * 7 + 6) * 0.25
            color.w = baseAlpha
            
            stars.append(StarData(
                position: SIMD2(sRand(seed, i * 7), sRand(seed, i * 7 + 1)),
                baseSize: size,
                zDepth: sRand(seed, i * 7 + 3) * 0.3,
                color: color,
                twinkleSpeed: 0.15 + sRand(seed, i * 13) * 0.4,
                twinklePhase: sRand(seed, i * 11) * .pi * 2,
                twinkleAmp: quantumIndices.contains(i) ? 0.6 : (0.18 + (0.02 + sRand(seed, i * 17) * 0.04) * 2.5),
                starType: 0,
                driftAngle: sRand(seed, i * 19) * .pi * 2,
                driftSpeed: 0.08,
                motionParams: SIMD2(quantumIndices.contains(i) ? 1.0 : 0.0, 0),
                rotationFactor: 0,
                zoneTintStrength: 0.10,
                zoneTintColor: SIMD4(30.0/255, 35.0/255, 60.0/255, 1)
            ))
        }
        
        // Galaxy nucleus (168 stars, 12%)
        // React: size = 0.5 + rand*1.2 + centralBrightness*0.8
        // React: baseOp = 0.45 + rand*0.45 + centralBrightness*0.2
        for i in 0..<168 {
            let idx = 350 + i
            let gx = gaussianRand(seed, idx * 7, sigma: 0.035)
            let gy = gaussianRand(seed, idx * 7 + 1, sigma: 0.035 * 0.35)
            let rx = 0.5 + gx
            let ry = 0.5 + gy
            
            let distFromCenter = sqrt(gx * gx + gy * gy)
            let centralBrightness = max(Float(0), 1.0 - distFromCenter / 0.105)
            
            // React nucleus: 25% F, 20% G, 15% warm cream, 20% A, 20% cool violet-white
            let colorRand = sRand(seed, idx * 11)
            let typeIdx: Int
            if colorRand < 0.25 { typeIdx = 3 }      // F
            else if colorRand < 0.45 { typeIdx = 4 } // G
            else if colorRand < 0.6 { typeIdx = 3 }  // warm cream (F)
            else if colorRand < 0.8 { typeIdx = 2 }  // A
            else { typeIdx = 2 }                       // cool white (A)
            var color = pickColor(typeIdx, idx)
            
            // React: 0.5 + rand*1.2 + cb*0.8
            let size: Float = 0.5 + sRand(seed, idx * 7 + 2) * 1.2 + centralBrightness * 0.8
            // React: 0.45 + rand*0.45 + cb*0.2
            let baseAlpha: Float = min(1.0, 0.45 + sRand(seed, idx * 7 + 7) * 0.45 + centralBrightness * 0.2)
            color.w = baseAlpha
            
            let orbitalSpeed: Float = 0.006 + sRand(seed, idx * 23) * 0.01 + max(0, 0.5 - distFromCenter) * 0.008
            
            // 8% get pronounced twinkle
            let tAmp: Float = sRand(seed, idx * 17) < 0.08
                ? (0.12 + sRand(seed, idx * 17 + 1) * 0.1)
                : (0.03 + sRand(seed, idx * 17 + 1) * 0.05)
            
            // React hero: baseOp > 0.65 && size > 1.2
            let isHero = baseAlpha > 0.65 && size > 1.2
            
            stars.append(StarData(
                position: SIMD2(rx, ry),
                baseSize: size * (isHero ? 2.0 : 1.0),
                zDepth: 0.5 + sRand(seed, idx * 7 + 3) * 0.3,
                color: color,
                twinkleSpeed: 0.2 + sRand(seed, idx * 13) * 0.5,
                twinklePhase: sRand(seed, idx * 11) * .pi * 2,
                twinkleAmp: 0.18 + tAmp * 2.5,
                starType: isHero ? 1 : 0,
                driftAngle: atan2(gy, gx),
                driftSpeed: orbitalSpeed * 10,
                motionParams: SIMD2(0, 0),
                rotationFactor: 1.5,
                zoneTintStrength: 0.12,
                zoneTintColor: SIMD4(255.0/255, 240.0/255, 200.0/255, 1)
            ))
        }
        
        // Galactic disc (770 stars, 55%)
        // React: size = 0.3 + pow(rand, 1.8) * 1.5 + (1-dist*2)*0.3
        // React: baseOp = 0.2 + rand*0.5 + (isYoung ? 0.15 : 0)
        for i in 0..<770 {
            let idx = 518 + i
            let gx = gaussianRand(seed, idx * 7, sigma: 0.18)
            let gy = gaussianRand(seed, idx * 7 + 1, sigma: 0.065)
            let armHint = sin(gx * 6 + sRand(seed, idx * 23) * 2.0) * 0.018
            let rx = 0.5 + gx
            let ry = 0.5 + gy + armHint
            
            let distFromCenter = sqrt(gx * gx + gy * gy)
            
            let isYoung = sRand(seed, idx * 11) < 0.3
            // Young: 15% O, 30% B, 30% A, 25% F
            // Old: 35% A, 20% F, 20% G, 15% K, 10% M
            let colorRand = sRand(seed, idx * 13)
            let typeIdx: Int
            if isYoung {
                if colorRand < 0.15 { typeIdx = 0 }
                else if colorRand < 0.45 { typeIdx = 1 }
                else if colorRand < 0.75 { typeIdx = 2 }
                else { typeIdx = 3 }
            } else {
                if colorRand < 0.35 { typeIdx = 2 }
                else if colorRand < 0.55 { typeIdx = 3 }
                else if colorRand < 0.75 { typeIdx = 4 }
                else if colorRand < 0.9 { typeIdx = 5 }
                else { typeIdx = 6 }
            }
            var color = pickColor(typeIdx, idx)
            
            // React: 0.3 + pow(rand, 1.8) * 1.5 + (1-dist*2)*0.3
            let distBonus: Float = max(0, (1.0 - distFromCenter * 2.0) * 0.3)
            let size: Float = 0.3 + pow(sRand(seed, idx * 7 + 2), 1.8) * 1.5 + distBonus
            // React: 0.2 + rand*0.5 + (isYoung ? 0.15 : 0)
            let baseAlpha: Float = min(1.0, 0.2 + sRand(seed, idx * 7 + 10) * 0.5 + (isYoung ? 0.15 : 0))
            color.w = baseAlpha
            
            let flowSpeed: Float = 0.4 + sRand(seed, idx * 23) * 0.3
            
            // 6% get pronounced twinkle
            let tAmp: Float = sRand(seed, idx * 17) < 0.06
                ? (0.1 + sRand(seed, idx * 17 + 1) * 0.12)
                : (0.03 + sRand(seed, idx * 17 + 1) * 0.05)
            
            // React hero: baseOp > 0.65 && size > 1.2
            let isHero = baseAlpha > 0.65 && size > 1.2
            
            stars.append(StarData(
                position: SIMD2(rx, ry),
                baseSize: size * (isHero ? 2.0 : 1.0),
                zDepth: 0.3 + sRand(seed, idx * 7 + 3) * 0.4,
                color: color,
                twinkleSpeed: 0.25 + sRand(seed, idx * 13 + 5) * 0.7,
                twinklePhase: sRand(seed, idx * 11 + 3) * .pi * 2,
                twinkleAmp: quantumIndices.contains(idx) ? 0.6 : (0.18 + tAmp * 2.5),
                starType: isHero ? 1 : 0,
                driftAngle: atan2(gy, gx + 0.001),
                driftSpeed: flowSpeed * 0.3,
                motionParams: SIMD2(quantumIndices.contains(idx) ? 1.0 : 0.0, 0),
                rotationFactor: 0.8,
                zoneTintStrength: 0.08,
                zoneTintColor: SIMD4(180.0/255, 140.0/255, 200.0/255, 1)
            ))
        }
        
        // Halo (112 stars, 8%)
        // React: size = 0.25 + pow(rand, 2) * 0.9
        // React: baseOp = 0.1 + rand * 0.35
        for i in 0..<112 {
            let idx = 1288 + i
            let angle = sRand(seed, idx * 7) * .pi * 2
            let r: Float = 0.25 + sRand(seed, idx * 7 + 1) * 0.25
            let flattening: Float = 0.45
            let rx = 0.5 + cos(angle) * r
            let ry = 0.5 + sin(angle) * r * flattening
            
            // React halo: 25% K, 20% M, 25% G, 13% warm, 17% blue horiz branch
            let colorRand = sRand(seed, idx * 11)
            let typeIdx: Int
            if colorRand < 0.25 { typeIdx = 5 }       // K
            else if colorRand < 0.45 { typeIdx = 6 }  // M
            else if colorRand < 0.7 { typeIdx = 4 }   // G
            else if colorRand < 0.88 { typeIdx = 3 }  // F (warm)
            else { typeIdx = 1 }                        // B (blue horizontal branch)
            var color = pickColor(typeIdx, idx)
            
            // React: 0.25 + pow(rand, 2) * 0.9
            let size: Float = 0.25 + pow(sRand(seed, idx * 7 + 2), 2.0) * 0.9
            // React: 0.1 + rand * 0.35
            let baseAlpha: Float = 0.1 + sRand(seed, idx * 7 + 9) * 0.35
            color.w = baseAlpha
            
            stars.append(StarData(
                position: SIMD2(rx, ry),
                baseSize: size,
                zDepth: 0.2 + sRand(seed, idx * 7 + 3) * 0.2,
                color: color,
                twinkleSpeed: 0.15 + sRand(seed, idx * 13) * 0.35,
                twinklePhase: sRand(seed, idx * 11) * .pi * 2,
                twinkleAmp: 0.18 + (0.02 + sRand(seed, idx * 17) * 0.04) * 2.5,
                starType: 0,
                driftAngle: angle,
                driftSpeed: 0.05,
                motionParams: SIMD2(0, 0),
                rotationFactor: 0.2,
                zoneTintStrength: 0.12,
                zoneTintColor: SIMD4(140.0/255, 120.0/255, 180.0/255, 1)
            ))
        }
        
        // Deep parallax (210 ultra-faint)
        // React: size 0.4+r*0.8, baseOp 0.04+r*0.08
        for i in 0..<210 {
            let idx = 1400 + i
            var color = pickColor(Int(sRand(seed, idx * 11) * 5) + 1, idx)
            // React: 0.04 + rand * 0.08
            let baseAlpha: Float = 0.04 + sRand(seed, idx * 7 + 7) * 0.08
            color.w = baseAlpha
            
            stars.append(StarData(
                position: SIMD2(sRand(seed, idx * 7), sRand(seed, idx * 7 + 1)),
                baseSize: 0.4 + sRand(seed, idx * 7 + 2) * 0.8,
                zDepth: sRand(seed, idx * 7 + 3) * 0.1,
                color: color,
                twinkleSpeed: 0.08 + sRand(seed, idx * 13) * 0.12,
                twinklePhase: sRand(seed, idx * 11) * .pi * 2,
                twinkleAmp: 0.15,
                starType: 0,
                driftAngle: sRand(seed, idx * 19) * .pi * 2,
                driftSpeed: 0.02,
                motionParams: SIMD2(0, 0),
                rotationFactor: 0,
                zoneTintStrength: 0,
                zoneTintColor: SIMD4(0, 0, 0, 0)
            ))
        }
        
        return stars
    }
    
    // ============================================================
    // MARK: - Starburst Ring Galaxy (1600 stars)
    // React size classes, baseAlpha, type-specific twinkle
    // ============================================================
    
    static func starburstRingStars() -> [StarData] {
        var stars: [StarData] = []
        let seed = 42
        
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
        
        for i in 0..<1600 {
            // Zone distribution (spatial position) — matches React exactly
            let zone: Int // 0=core, 1=ring, 2=halo, 3=field
            let zoneRand = sRand(seed, i * 3)
            if zoneRand < 0.04 {
                zone = 0
            } else if zoneRand < 0.62 {
                zone = 1
            } else if zoneRand < 0.82 {
                zone = 2
            } else {
                zone = 3
            }
            
            var rx: Float, ry: Float
            
            switch zone {
            case 0: // Core — concentrated
                let angle = sRand(seed, i * 7) * .pi * 2
                let r = sRand(seed, i * 7 + 1) * 0.1
                rx = 0.5 + cos(angle) * r
                ry = 0.5 + sin(angle) * r
            case 1: // Ring — radius 0.24..0.52
                let angle = sRand(seed, i * 7) * .pi * 2
                let innerR: Float = 0.24
                let outerR: Float = 0.52
                let r = innerR + sRand(seed, i * 7 + 1) * (outerR - innerR)
                rx = 0.5 + cos(angle) * r
                ry = 0.5 + sin(angle) * r
            case 2: // Halo — 0.52..0.75
                let angle = sRand(seed, i * 7) * .pi * 2
                let r: Float = 0.52 + sRand(seed, i * 7 + 1) * 0.23
                rx = 0.5 + cos(angle) * r
                ry = 0.5 + sin(angle) * r
            default: // Field — uniform
                rx = sRand(seed, i * 7)
                ry = sRand(seed, i * 7 + 1)
            }
            
            // Size/type classification — React: sr = rand(4)
            // Hero(1.5%): sr > 0.985, baseR=2.5
            // Large(3.5%): sr > 0.95, baseR=1.5 (hero type)
            // Medium(10%): sr > 0.85, baseR=1.0
            // Mid-halo(20%): sr > 0.65, baseR=1.5 (halo pulsing)
            // Small(65%): baseR=0.5
            let sizeRand = sRand(seed, i * 7 + 2)
            let baseSize: Float
            let starType: Int32
            let isHeroType: Bool
            let isHaloType: Bool
            
            if sizeRand > 0.985 { // 1.5% super hero
                baseSize = 2.5
                starType = 3
                isHeroType = true
                isHaloType = false
            } else if sizeRand > 0.95 { // 3.5% large hero
                baseSize = 1.5
                starType = 3
                isHeroType = true
                isHaloType = false
            } else if sizeRand > 0.85 { // 10% medium
                baseSize = 1.0
                starType = 0
                isHeroType = false
                isHaloType = false
            } else if sizeRand > 0.65 { // 20% halo-style
                baseSize = 1.5
                starType = 0
                isHeroType = false
                isHaloType = true
            } else { // 65% small
                baseSize = 0.5
                starType = 0
                isHeroType = false
                isHaloType = false
            }
            
            var color = pickWeightedColor(sRand(seed, i * 11))
            
            // Per-star baseAlpha from React: 0.1 + rand * 0.7
            let baseAlpha: Float = 0.1 + sRand(seed, i * 7 + 7) * 0.7
            color.w = baseAlpha
            
            // Type-specific twinkle amplitude (from React alpha dynamics)
            // Hero: 0.9+0.3*twinkle → stays bright, gentle pulsing
            // Halo: 0.7+0.4*twinkle → moderate pulsing
            // Normal: 0.4+0.6*twinkle → full range pulsing
            let twinkleAmp: Float
            if isHeroType {
                twinkleAmp = 0.35 + sRand(seed, i * 17) * 0.15 // range ~0.35-0.50
            } else if isHaloType {
                twinkleAmp = 0.45 + sRand(seed, i * 17) * 0.15 // range ~0.45-0.60
            } else {
                twinkleAmp = 0.55 + sRand(seed, i * 17) * 0.20 // range ~0.55-0.75
            }
            
            // Very slow ring rotation
            let ringAngle = atan2(ry - 0.5, rx - 0.5)
            let distFromCenter = sqrt((rx - 0.5) * (rx - 0.5) + (ry - 0.5) * (ry - 0.5))
            
            stars.append(StarData(
                position: SIMD2(rx, ry),
                baseSize: baseSize,
                zDepth: 0.3 + sRand(seed, i * 7 + 3) * 0.5,
                color: color,
                twinkleSpeed: 0.1 + sRand(seed, i * 13) * 0.5,
                twinklePhase: sRand(seed, i * 11) * .pi * 2,
                twinkleAmp: twinkleAmp,
                starType: starType,
                driftAngle: ringAngle,
                driftSpeed: zone == 1 ? 0.15 : 0.05,
                motionParams: SIMD2(Float(zone), distFromCenter),
                rotationFactor: zone == 0 ? 2.0 : (zone == 1 ? 1.0 : (zone == 2 ? 0.5 : 0.1)),
                zoneTintStrength: zone == 1 ? 0.08 : 0,
                zoneTintColor: zone == 1 ? SIMD4(154.0/255, 86.0/255, 255.0/255, 1) : SIMD4(0, 0, 0, 0)
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
