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
            
            // baseAlpha encoded in size + twinkle, not color.a
            // (additive star blending needs full-brightness color)
            
            let starType: Int32 = isHero ? 1 : (isMystical ? 2 : 0)
            
            stars.append(StarData(
                position: SIMD2(rx, ry),
                baseSize: baseSize * (isHero ? 3.5 : 1.0),
                zDepth: z,
                color: baseColor,
                twinkleSpeed: 0.25 + rand(16) * 0.5,
                twinklePhase: rand(17) * .pi * 2,
                twinkleAmp: 0.15,  // gentle breathing (0.85–1.0)
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
            let color: SIMD4<Float> = isGolden
                ? SIMD4(255.0/255, 180.0/255, 80.0/255, 1)   // GOLDEN_DUST
                : SIMD4(180.0/255, 60.0/255, 40.0/255, 1)    // DEEP_RUST
            
            stars.append(StarData(
                position: SIMD2(rx, ry),
                baseSize: size * 0.5,  // smaller than main stars
                zDepth: 0.9 + sRand(seed, 6) * 0.1,
                color: color,
                twinkleSpeed: 0.1 + sRand(seed, 6) * 0.2,
                twinklePhase: sRand(seed, 7) * .pi * 2,
                twinkleAmp: 0.3,
                starType: 0,
                driftAngle: 0,
                driftSpeed: 0.1,
                motionParams: SIMD2(0, 0),
                rotationFactor: 0,
                zoneTintStrength: 0,
                zoneTintColor: SIMD4(0, 0, 0, 0)
            ))
        }
        
        return stars
    }
    
    // ============================================================
    // MARK: - Celestial Lagoon (1330 stars, 3 layers)
    // ============================================================
    
    static func celestialLagoonStars() -> [StarData] {
        var stars: [StarData] = []
        let seed = 99
        
        // 25 stellar classifications from React
        let stellarColors: [SIMD4<Float>] = [
            SIMD4(195/255, 235/255, 255/255, 1), // O_TYPE_BLUE
            SIMD4(185/255, 245/255, 255/255, 1), // O_TYPE_CYAN
            SIMD4(215/255, 245/255, 255/255, 1), // B_TYPE_BRIGHT
            SIMD4(200/255, 240/255, 255/255, 1), // B_TYPE_BLUE
            SIMD4(240/255, 250/255, 255/255, 1), // A_TYPE_WHITE
            SIMD4(230/255, 248/255, 255/255, 1), // A_TYPE_BLUE
            SIMD4(255/255, 252/255, 245/255, 1), // F_TYPE_YELLOW_WHITE
            SIMD4(255/255, 248/255, 235/255, 1), // G_TYPE_YELLOW
            SIMD4(255/255, 245/255, 220/255, 1), // G_TYPE_WARM
            SIMD4(170/255, 245/255, 255/255, 1), // CYAN_SUPERGIANT
            SIMD4(185/255, 255/255, 250/255, 1), // AQUA_GIANT
            SIMD4(200/255, 255/255, 248/255, 1), // AQUA_BRIGHT
            SIMD4(180/255, 255/255, 235/255, 1), // TEAL_BRIGHT
            SIMD4(165/255, 245/255, 230/255, 1), // TEAL_DEEP
            SIMD4(175/255, 255/255, 245/255, 1), // TURQUOISE
            SIMD4(200/255, 255/255, 225/255, 1), // MINT_GREEN
            SIMD4(210/255, 248/255, 255/255, 1), // ICE_BLUE
            SIMD4(255/255, 195/255, 225/255, 1), // PINK_NEBULA
            SIMD4(225/255, 205/255, 255/255, 1), // LAVENDER
            SIMD4(255/255, 225/255, 200/255, 1), // PEACH
            SIMD4(215/255, 195/255, 255/255, 1), // VIOLET_TINT
            SIMD4(160/255, 255/255, 255/255, 1), // ELECTRIC_CYAN
            SIMD4(190/255, 255/255, 240/255, 1), // SEAFOAM
            SIMD4(180/255, 235/255, 255/255, 1), // AZURE
        ]
        
        // Layer C — 600 far background stars
        for i in 0..<600 {
            let colorIdx = Int(sRand(seed, i * 11 + 7) * Float(stellarColors.count))
            let color = stellarColors[min(colorIdx, stellarColors.count - 1)]
            let size: Float = 0.2 + sRand(seed, i * 7 + 2) * 0.4
            
            stars.append(StarData(
                position: SIMD2(sRand(seed, i * 7), sRand(seed, i * 7 + 1)),
                baseSize: size,
                zDepth: 0.1 + sRand(seed, i * 7 + 3) * 0.2,
                color: color,
                twinkleSpeed: 0.2 + sRand(seed, i * 13) * 0.5,
                twinklePhase: sRand(seed, i * 11) * .pi * 2,
                twinkleAmp: sRand(seed, i * 17) < 0.35 ? 0.3 : 0.1,
                starType: 0,
                driftAngle: sRand(seed, i * 19) * .pi * 2,
                driftSpeed: 0.05, // gentle
                motionParams: SIMD2(1.0, 0), // layer depth marker
                rotationFactor: 0,
                zoneTintStrength: 0,
                zoneTintColor: SIMD4(0, 0, 0, 0)
            ))
        }
        
        // Layer B — 600 mid stars
        for i in 0..<600 {
            let idx = 600 + i
            let colorIdx = Int(sRand(seed, idx * 11 + 7) * Float(stellarColors.count))
            let color = stellarColors[min(colorIdx, stellarColors.count - 1)]
            let size: Float = 0.35 + sRand(seed, idx * 7 + 2) * 0.70
            
            stars.append(StarData(
                position: SIMD2(sRand(seed, idx * 7), sRand(seed, idx * 7 + 1)),
                baseSize: size,
                zDepth: 0.3 + sRand(seed, idx * 7 + 3) * 0.3,
                color: color,
                twinkleSpeed: 0.3 + sRand(seed, idx * 13) * 0.8,
                twinklePhase: sRand(seed, idx * 11) * .pi * 2,
                twinkleAmp: sRand(seed, idx * 17) < 0.40 ? 0.35 : 0.15,
                starType: 0,
                driftAngle: sRand(seed, idx * 19) * .pi * 2,
                driftSpeed: 0.15, // flowing
                motionParams: SIMD2(0.5, 0), // layer depth
                rotationFactor: 0,
                zoneTintStrength: 0,
                zoneTintColor: SIMD4(0, 0, 0, 0)
            ))
        }
        
        // Layer A — 130 foreground stars (some with cross-diffraction)
        for i in 0..<130 {
            let idx = 1200 + i
            let colorIdx = Int(sRand(seed, idx * 11 + 7) * Float(stellarColors.count))
            let color = stellarColors[min(colorIdx, stellarColors.count - 1)]
            let size: Float = 0.7 + sRand(seed, idx * 7 + 2) * 1.2
            let opacity: Float = 0.55 + sRand(seed, idx * 7 + 3) * 0.4
            
            // Cross-diffraction on bright large stars
            let isHero = opacity > 0.6 && size > 1.3
            
            stars.append(StarData(
                position: SIMD2(sRand(seed, idx * 7), sRand(seed, idx * 7 + 1)),
                baseSize: size * (isHero ? 2.0 : 1.0),
                zDepth: 0.7 + sRand(seed, idx * 7 + 4) * 0.3,
                color: color,
                twinkleSpeed: 0.4 + sRand(seed, idx * 13) * 1.0,
                twinklePhase: sRand(seed, idx * 11) * .pi * 2,
                twinkleAmp: sRand(seed, idx * 17) < 0.45 ? 0.4 : 0.2,
                starType: isHero ? 1 : 0,
                driftAngle: sRand(seed, idx * 19) * .pi * 2,
                driftSpeed: 0.3, // orbital + vertical shimmer
                motionParams: SIMD2(0, 0), // foreground
                rotationFactor: 0,
                zoneTintStrength: 0,
                zoneTintColor: SIMD4(0, 0, 0, 0)
            ))
        }
        
        return stars
    }
    
    // ============================================================
    // MARK: - Solar Aurora (1170 stars)
    // ============================================================
    
    static func solarAuroraStars() -> [StarData] {
        var stars: [StarData] = []
        let seed = 73
        
        // Field population (500)
        let fieldColors: [SIMD4<Float>] = [
            SIMD4(210/255, 205/255, 255/255, 1), // pale violet
            SIMD4(255/255, 220/255, 240/255, 1), // faint pink
            SIMD4(255/255, 240/255, 220/255, 1), // faint amber
            SIMD4(235/255, 235/255, 245/255, 1), // nearly white
        ]
        
        for i in 0..<500 {
            let colorIdx = Int(sRand(seed, i * 11) * Float(fieldColors.count))
            let color = fieldColors[min(colorIdx, fieldColors.count - 1)]
            let size: Float = 0.25 + sRand(seed, i * 7 + 2) * 0.50
            
            // Aurora Y-position tinting
            let y = sRand(seed, i * 7 + 1)
            let tintColor: SIMD4<Float>
            let tintStrength: Float
            if y < 0.35 {
                tintColor = SIMD4(95/255, 45/255, 190/255, 1) // violet
                tintStrength = 0.15
            } else if y > 0.65 {
                tintColor = SIMD4(255/255, 180/255, 70/255, 1) // gold
                tintStrength = 0.12
            } else {
                tintColor = SIMD4(210/255, 60/255, 160/255, 1) // fuchsia
                tintStrength = 0.08
            }
            
            stars.append(StarData(
                position: SIMD2(sRand(seed, i * 7), y),
                baseSize: size,
                zDepth: sRand(seed, i * 7 + 3) * 0.4,
                color: color,
                twinkleSpeed: 0.2 + sRand(seed, i * 13) * 0.6,
                twinklePhase: sRand(seed, i * 11) * .pi * 2,
                twinkleAmp: 0.15 + sRand(seed, i * 17) * 0.15,
                starType: 0,
                driftAngle: sRand(seed, i * 19) * .pi * 2,
                driftSpeed: 0.1,
                motionParams: SIMD2(0, 0),
                rotationFactor: 0,
                zoneTintStrength: tintStrength,
                zoneTintColor: tintColor
            ))
        }
        
        // Nebula population (550)
        let nebulaColors: [SIMD4<Float>] = [
            SIMD4(195/255, 175/255, 255/255, 1), // soft violet
            SIMD4(255/255, 190/255, 230/255, 1), // pink
            SIMD4(255/255, 220/255, 190/255, 1), // golden
            SIMD4(225/255, 220/255, 245/255, 1), // violet-white
        ]
        
        for i in 0..<550 {
            let idx = 500 + i
            let colorIdx = Int(sRand(seed, idx * 11) * Float(nebulaColors.count))
            let color = nebulaColors[min(colorIdx, nebulaColors.count - 1)]
            let size: Float = 0.4 + sRand(seed, idx * 7 + 2) * 0.80
            let y = sRand(seed, idx * 7 + 1)
            
            let tintColor: SIMD4<Float>
            let tintStrength: Float
            if y < 0.35 {
                tintColor = SIMD4(95/255, 45/255, 190/255, 1)
                tintStrength = 0.20
            } else if y > 0.65 {
                tintColor = SIMD4(255/255, 180/255, 70/255, 1)
                tintStrength = 0.18
            } else {
                tintColor = SIMD4(210/255, 60/255, 160/255, 1)
                tintStrength = 0.12
            }
            
            stars.append(StarData(
                position: SIMD2(sRand(seed, idx * 7), y),
                baseSize: size,
                zDepth: 0.3 + sRand(seed, idx * 7 + 3) * 0.4,
                color: color,
                twinkleSpeed: 0.3 + sRand(seed, idx * 13) * 0.9,
                twinklePhase: sRand(seed, idx * 11) * .pi * 2,
                twinkleAmp: 0.15 + sRand(seed, idx * 17) * 0.25,
                starType: 0,
                driftAngle: sRand(seed, idx * 19) * .pi * 2,
                driftSpeed: 0.15,
                motionParams: SIMD2(0, 0),
                rotationFactor: 0,
                zoneTintStrength: tintStrength,
                zoneTintColor: tintColor
            ))
        }
        
        // Bright population (120)
        let brightColors: [SIMD4<Float>] = [
            SIMD4(180/255, 150/255, 255/255, 1), // bright violet
            SIMD4(255/255, 170/255, 220/255, 1), // pink
            SIMD4(255/255, 200/255, 160/255, 1), // amber
            SIMD4(215/255, 210/255, 255/255, 1), // white-violet
        ]
        
        for i in 0..<120 {
            let idx = 1050 + i
            let colorIdx = Int(sRand(seed, idx * 11) * Float(brightColors.count))
            let color = brightColors[min(colorIdx, brightColors.count - 1)]
            let size: Float = 0.8 + sRand(seed, idx * 7 + 2) * 1.4
            let y = sRand(seed, idx * 7 + 1)
            
            let isHero = size > 1.8
            
            let tintColor: SIMD4<Float>
            let tintStrength: Float
            if y < 0.35 {
                tintColor = SIMD4(95/255, 45/255, 190/255, 1)
                tintStrength = 0.25
            } else if y > 0.65 {
                tintColor = SIMD4(255/255, 180/255, 70/255, 1)
                tintStrength = 0.22
            } else {
                tintColor = SIMD4(210/255, 60/255, 160/255, 1)
                tintStrength = 0.15
            }
            
            stars.append(StarData(
                position: SIMD2(sRand(seed, idx * 7), y),
                baseSize: size,
                zDepth: 0.6 + sRand(seed, idx * 7 + 3) * 0.35,
                color: color,
                twinkleSpeed: 0.4 + sRand(seed, idx * 13) * 1.0,
                twinklePhase: sRand(seed, idx * 11) * .pi * 2,
                twinkleAmp: 0.2 + sRand(seed, idx * 17) * 0.2,
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
    // ============================================================
    
    static func spiralHaloStars() -> [StarData] {
        var stars: [StarData] = []
        let seed = 42
        
        // O/B/A/F/G/K/M spectral types with 3 variants each (from React)
        let specColors: [[SIMD4<Float>]] = [
            [SIMD4(155/255, 176/255, 255/255, 1), SIMD4(162/255, 185/255, 255/255, 1), SIMD4(170/255, 191/255, 255/255, 1)], // O
            [SIMD4(185/255, 206/255, 255/255, 1), SIMD4(192/255, 213/255, 255/255, 1), SIMD4(200/255, 220/255, 255/255, 1)], // B
            [SIMD4(248/255, 248/255, 255/255, 1), SIMD4(255/255, 255/255, 255/255, 1), SIMD4(255/255, 252/255, 252/255, 1)], // A
            [SIMD4(255/255, 252/255, 240/255, 1), SIMD4(255/255, 250/255, 235/255, 1), SIMD4(255/255, 248/255, 230/255, 1)], // F
            [SIMD4(255/255, 244/255, 214/255, 1), SIMD4(255/255, 240/255, 200/255, 1), SIMD4(255/255, 235/255, 185/255, 1)], // G
            [SIMD4(255/255, 220/255, 180/255, 1), SIMD4(255/255, 210/255, 160/255, 1), SIMD4(255/255, 200/255, 145/255, 1)], // K
            [SIMD4(255/255, 190/255, 150/255, 1), SIMD4(255/255, 180/255, 140/255, 1), SIMD4(255/255, 170/255, 130/255, 1)], // M
        ]
        
        func pickColor(_ typeIdx: Int, _ i: Int) -> SIMD4<Float> {
            let variant = Int(sRand(seed, i * 31) * 3) % 3
            return specColors[min(typeIdx, 6)][variant]
        }
        
        // Background field (220 stars, 20%)
        for i in 0..<220 {
            let noiseX = sRand(seed, i * 7) + sin(Float(i) * 0.37) * 0.05
            let noiseY = sRand(seed, i * 7 + 1) + cos(Float(i) * 0.29) * 0.05
            let rx = (noiseX).truncatingRemainder(dividingBy: 1.0)
            let ry = abs(noiseY).truncatingRemainder(dividingBy: 1.0)
            let typeIdx = Int(sRand(seed, i * 11) * 4) + 2 // A/F/G/K
            let color = pickColor(typeIdx, i)
            
            stars.append(StarData(
                position: SIMD2(rx, ry),
                baseSize: 0.4 + sRand(seed, i * 7 + 2) * 1.2,
                zDepth: sRand(seed, i * 7 + 3) * 0.3,
                color: color,
                twinkleSpeed: 0.3 + sRand(seed, i * 13) * 0.8,
                twinklePhase: sRand(seed, i * 11) * .pi * 2,
                twinkleAmp: 0.15 + sRand(seed, i * 17) * 0.15,
                starType: 0,
                driftAngle: sRand(seed, i * 19) * .pi * 2,
                driftSpeed: 0.08,
                motionParams: SIMD2(0, 0),
                rotationFactor: 0.2, // field: slowest rotation
                zoneTintStrength: 0.08,
                zoneTintColor: SIMD4(30/255, 30/255, 60/255, 1)
            ))
        }
        
        // Core (165 stars, 15%)
        for i in 0..<165 {
            let idx = 220 + i
            let gx = gaussianRand(seed, idx * 7, sigma: 0.06)
            let gy = gaussianRand(seed, idx * 7 + 1, sigma: 0.06)
            let rx = 0.5 + gx
            let ry = 0.5 + gy
            let typeIdx = Int(sRand(seed, idx * 11) * 3) + 2 // A/F/G (warm whites)
            let color = pickColor(typeIdx, idx)
            
            stars.append(StarData(
                position: SIMD2(rx, ry),
                baseSize: 0.6 + sRand(seed, idx * 7 + 2) * 1.4,
                zDepth: 0.5 + sRand(seed, idx * 7 + 3) * 0.3,
                color: color,
                twinkleSpeed: 0.4 + sRand(seed, idx * 13) * 0.8,
                twinklePhase: sRand(seed, idx * 11) * .pi * 2,
                twinkleAmp: 0.12 + sRand(seed, idx * 17) * 0.15,
                starType: 0,
                driftAngle: sRand(seed, idx * 19) * .pi * 2,
                driftSpeed: 0.1,
                motionParams: SIMD2(0, 0),
                rotationFactor: 1.5, // core: fastest rotation
                zoneTintStrength: 0.10,
                zoneTintColor: SIMD4(255/255, 240/255, 200/255, 1) // warm gold
            ))
        }
        
        // Spiral arms (605 stars, 55%)
        let armCount = 4
        let tightness: Float = 0.5
        for i in 0..<605 {
            let idx = 385 + i
            let armIdx = i % armCount
            let armOffset = Float(armIdx) * .pi * 0.5
            
            // Logarithmic spiral position
            let dist: Float = 0.12 + sRand(seed, idx * 7) * 0.25 // 0.12..0.37
            let spreadAngle = (sRand(seed, idx * 7 + 1) - 0.5) * 0.16 // angular spread
            let spiralAngle = log(dist / 0.05) / tightness + armOffset + spreadAngle
            
            let rx = 0.5 + cos(spiralAngle) * dist
            let ry = 0.5 + sin(spiralAngle) * dist
            
            // Young/old star type
            let isYoung = sRand(seed, idx * 11) < 0.4
            let typeIdx = isYoung ? Int(sRand(seed, idx * 13) * 3) : (Int(sRand(seed, idx * 13) * 4) + 2) // O/B/A vs A/F/G/K
            let color = pickColor(typeIdx, idx)
            
            let rotationFact: Float = 1.2 - dist * 1.5 // inner faster
            
            stars.append(StarData(
                position: SIMD2(rx, ry),
                baseSize: 0.35 + sRand(seed, idx * 7 + 2) * 1.80,
                zDepth: 0.3 + sRand(seed, idx * 7 + 3) * 0.4,
                color: color,
                twinkleSpeed: 0.3 + sRand(seed, idx * 13 + 5) * 0.9,
                twinklePhase: sRand(seed, idx * 11 + 3) * .pi * 2,
                twinkleAmp: 0.13 + sRand(seed, idx * 17) * 0.18,
                starType: 0,
                driftAngle: spiralAngle,
                driftSpeed: 0.12,
                motionParams: SIMD2(0, 0),
                rotationFactor: max(0.1, rotationFact), // differential
                zoneTintStrength: 0.10,
                zoneTintColor: SIMD4(180/255, 200/255, 255/255, 1) // blue tint
            ))
        }
        
        // Outer halo (110 stars, 10%)
        for i in 0..<110 {
            let idx = 990 + i
            let angle = sRand(seed, idx * 7) * .pi * 2
            let r: Float = 0.3 + sRand(seed, idx * 7 + 1) * 0.2
            let rx = 0.5 + cos(angle) * r
            let ry = 0.5 + sin(angle) * r
            let typeIdx = Int(sRand(seed, idx * 11) * 3) + 4 // G/K/M (old population)
            let color = pickColor(typeIdx, idx)
            
            stars.append(StarData(
                position: SIMD2(rx, ry),
                baseSize: 0.4 + sRand(seed, idx * 7 + 2) * 1.0,
                zDepth: 0.2 + sRand(seed, idx * 7 + 3) * 0.3,
                color: color,
                twinkleSpeed: 0.2 + sRand(seed, idx * 13) * 0.6,
                twinklePhase: sRand(seed, idx * 11) * .pi * 2,
                twinkleAmp: 0.1 + sRand(seed, idx * 17) * 0.12,
                starType: 0,
                driftAngle: angle,
                driftSpeed: 0.06,
                motionParams: SIMD2(0, 0),
                rotationFactor: 0.3, // halo: slow
                zoneTintStrength: 0.12,
                zoneTintColor: SIMD4(160/255, 140/255, 200/255, 1) // violet tint
            ))
        }
        
        // Deep parallax (132 ultra-faint)
        for i in 0..<132 {
            let idx = 1100 + i
            let color = pickColor(Int(sRand(seed, idx * 11) * 4) + 2, idx)
            
            stars.append(StarData(
                position: SIMD2(sRand(seed, idx * 7), sRand(seed, idx * 7 + 1)),
                baseSize: 0.2 + sRand(seed, idx * 7 + 2) * 0.4,
                zDepth: sRand(seed, idx * 7 + 3) * 0.1,
                color: color,
                twinkleSpeed: 0.15 + sRand(seed, idx * 13) * 0.4,
                twinklePhase: sRand(seed, idx * 11) * .pi * 2,
                twinkleAmp: 0.05,
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
    // ============================================================
    
    static func edgeOfAndromedaStars() -> [StarData] {
        var stars: [StarData] = []
        let seed = 42
        
        let specColors: [[SIMD4<Float>]] = [
            [SIMD4(155/255, 176/255, 255/255, 1), SIMD4(162/255, 185/255, 255/255, 1), SIMD4(170/255, 191/255, 255/255, 1)],
            [SIMD4(185/255, 206/255, 255/255, 1), SIMD4(192/255, 213/255, 255/255, 1), SIMD4(200/255, 220/255, 255/255, 1)],
            [SIMD4(248/255, 248/255, 255/255, 1), SIMD4(255/255, 255/255, 255/255, 1), SIMD4(255/255, 252/255, 252/255, 1)],
            [SIMD4(255/255, 252/255, 240/255, 1), SIMD4(255/255, 250/255, 235/255, 1), SIMD4(255/255, 248/255, 230/255, 1)],
            [SIMD4(255/255, 244/255, 214/255, 1), SIMD4(255/255, 240/255, 200/255, 1), SIMD4(255/255, 235/255, 185/255, 1)],
            [SIMD4(255/255, 220/255, 180/255, 1), SIMD4(255/255, 210/255, 160/255, 1), SIMD4(255/255, 200/255, 145/255, 1)],
            [SIMD4(255/255, 190/255, 150/255, 1), SIMD4(255/255, 180/255, 140/255, 1), SIMD4(255/255, 170/255, 130/255, 1)],
        ]
        
        func pickColor(_ typeIdx: Int, _ i: Int) -> SIMD4<Float> {
            let variant = Int(sRand(seed, i * 31) * 3) % 3
            return specColors[min(typeIdx, 6)][variant]
        }
        
        // Quantum sparkle indices
        let quantumIndices: Set<Int> = [47, 189, 412, 678, 1023]
        
        // Background field (350 stars, 25%)
        for i in 0..<350 {
            let color = pickColor(Int(sRand(seed, i * 11) * 5) + 1, i)
            
            stars.append(StarData(
                position: SIMD2(sRand(seed, i * 7), sRand(seed, i * 7 + 1)),
                baseSize: 0.3 + sRand(seed, i * 7 + 2) * 1.2,
                zDepth: sRand(seed, i * 7 + 3) * 0.3,
                color: color,
                twinkleSpeed: 0.25 + sRand(seed, i * 13) * 0.7,
                twinklePhase: sRand(seed, i * 11) * .pi * 2,
                twinkleAmp: quantumIndices.contains(i) ? 0.6 : (0.12 + sRand(seed, i * 17) * 0.15),
                starType: 0,
                driftAngle: sRand(seed, i * 19) * .pi * 2,
                driftSpeed: 0.08,
                motionParams: SIMD2(quantumIndices.contains(i) ? 1.0 : 0.0, 0),
                rotationFactor: 0,
                zoneTintStrength: 0.10,
                zoneTintColor: SIMD4(30/255, 35/255, 60/255, 1) // deep space blue
            ))
        }
        
        // Galaxy nucleus (168 stars, 12%)
        for i in 0..<168 {
            let idx = 350 + i
            let gx = gaussianRand(seed, idx * 7, sigma: 0.035)
            let gy = gaussianRand(seed, idx * 7 + 1, sigma: 0.035 * 0.35) // flattened
            let rx = 0.5 + gx
            let ry = 0.5 + gy
            let typeIdx = Int(sRand(seed, idx * 11) * 3) + 2 // A/F/G warm
            let color = pickColor(typeIdx, idx)
            
            let distFromCenter = sqrt(gx * gx + gy * gy)
            let orbitalSpeed: Float = 0.006 + sRand(seed, idx * 23) * 0.01 + max(0, 0.5 - distFromCenter) * 0.008
            
            stars.append(StarData(
                position: SIMD2(rx, ry),
                baseSize: 0.5 + sRand(seed, idx * 7 + 2) * 1.5,
                zDepth: 0.5 + sRand(seed, idx * 7 + 3) * 0.3,
                color: color,
                twinkleSpeed: 0.35 + sRand(seed, idx * 13) * 0.7,
                twinklePhase: sRand(seed, idx * 11) * .pi * 2,
                twinkleAmp: 0.10 + sRand(seed, idx * 17) * 0.12,
                starType: 0,
                driftAngle: atan2(gy, gx),
                driftSpeed: orbitalSpeed * 10, // orbital
                motionParams: SIMD2(0, 0),
                rotationFactor: 1.5, // nucleus orbits fast
                zoneTintStrength: 0.12,
                zoneTintColor: SIMD4(255/255, 240/255, 200/255, 1) // warm gold
            ))
        }
        
        // Galactic disc (770 stars, 55%)
        for i in 0..<770 {
            let idx = 518 + i
            let gx = gaussianRand(seed, idx * 7, sigma: 0.18)
            let gy = gaussianRand(seed, idx * 7 + 1, sigma: 0.065)
            // Spiral arm hints
            let armHint = sin(gx * 6 + sRand(seed, idx * 23) * 2.0) * 0.018
            let rx = 0.5 + gx
            let ry = 0.5 + gy + armHint
            
            let isYoung = sRand(seed, idx * 11) < 0.3
            let typeIdx = isYoung ? Int(sRand(seed, idx * 13) * 2) : (Int(sRand(seed, idx * 13) * 4) + 2)
            let color = pickColor(typeIdx, idx)
            
            let flowSpeed: Float = 0.4 + sRand(seed, idx * 23) * 0.3
            
            stars.append(StarData(
                position: SIMD2(rx, ry),
                baseSize: 0.3 + sRand(seed, idx * 7 + 2) * 1.5,
                zDepth: 0.3 + sRand(seed, idx * 7 + 3) * 0.4,
                color: color,
                twinkleSpeed: 0.3 + sRand(seed, idx * 13 + 5) * 0.8,
                twinklePhase: sRand(seed, idx * 11 + 3) * .pi * 2,
                twinkleAmp: quantumIndices.contains(idx) ? 0.6 : (0.12 + sRand(seed, idx * 17) * 0.18),
                starType: 0,
                driftAngle: atan2(gy, gx + 0.001),
                driftSpeed: flowSpeed * 0.3,
                motionParams: SIMD2(quantumIndices.contains(idx) ? 1.0 : 0.0, 0),
                rotationFactor: 0.8,
                zoneTintStrength: 0.08,
                zoneTintColor: SIMD4(180/255, 140/255, 200/255, 1) // violet/magenta
            ))
        }
        
        // Halo (112 stars, 8%)
        for i in 0..<112 {
            let idx = 1288 + i
            let angle = sRand(seed, idx * 7) * .pi * 2
            let r: Float = 0.25 + sRand(seed, idx * 7 + 1) * 0.25
            let flattening: Float = 0.45
            let rx = 0.5 + cos(angle) * r
            let ry = 0.5 + sin(angle) * r * flattening
            let typeIdx = Int(sRand(seed, idx * 11) * 3) + 4 // G/K/M old
            let color = pickColor(typeIdx, idx)
            
            stars.append(StarData(
                position: SIMD2(rx, ry),
                baseSize: 0.3 + sRand(seed, idx * 7 + 2) * 0.8,
                zDepth: 0.2 + sRand(seed, idx * 7 + 3) * 0.2,
                color: color,
                twinkleSpeed: 0.2 + sRand(seed, idx * 13) * 0.5,
                twinklePhase: sRand(seed, idx * 11) * .pi * 2,
                twinkleAmp: 0.08 + sRand(seed, idx * 17) * 0.10,
                starType: 0,
                driftAngle: angle,
                driftSpeed: 0.05,
                motionParams: SIMD2(0, 0),
                rotationFactor: 0.2,
                zoneTintStrength: 0.12,
                zoneTintColor: SIMD4(140/255, 120/255, 180/255, 1) // cool violet
            ))
        }
        
        // Deep parallax (210 ultra-faint)
        for i in 0..<210 {
            let idx = 1400 + i
            let color = pickColor(Int(sRand(seed, idx * 11) * 5) + 1, idx)
            
            stars.append(StarData(
                position: SIMD2(sRand(seed, idx * 7), sRand(seed, idx * 7 + 1)),
                baseSize: 0.15 + sRand(seed, idx * 7 + 2) * 0.35,
                zDepth: sRand(seed, idx * 7 + 3) * 0.1,
                color: color,
                twinkleSpeed: 0.1 + sRand(seed, idx * 13) * 0.3,
                twinklePhase: sRand(seed, idx * 11) * .pi * 2,
                twinkleAmp: 0.04,
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
    // ============================================================
    
    static func starburstRingStars() -> [StarData] {
        var stars: [StarData] = []
        let seed = 42
        
        // Weighted color selection from React
        let weightedColors: [(SIMD4<Float>, Float)] = [
            (SIMD4(255/255, 255/255, 255/255, 1), 0.40),  // white
            (SIMD4(220/255, 235/255, 255/255, 1), 0.15),  // blue-white
            (SIMD4(255/255, 248/255, 240/255, 1), 0.12),  // warm-white
            (SIMD4(200/255, 180/255, 255/255, 1), 0.08),  // soft-violet
            (SIMD4(255/255, 220/255, 240/255, 1), 0.06),  // pink
            (SIMD4(255/255, 245/255, 220/255, 1), 0.06),  // warm
            (SIMD4(180/255, 220/255, 255/255, 1), 0.05),  // cool-blue
            (SIMD4(255/255, 200/255, 220/255, 1), 0.04),  // rose
            (SIMD4(200/255, 255/255, 245/255, 1), 0.02),  // teal
            (SIMD4(255/255, 190/255, 210/255, 1), 0.02),  // deep-pink
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
                let  r = sRand(seed, i * 7 + 1) * 0.1
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
            
            // Size/type classification
            let sizeRand = sRand(seed, i * 7 + 2)
            let baseSize: Float
            let starType: Int32
            
            if sizeRand < 0.015 { // 1.5% hero super-giants
                baseSize = 4.0
                starType = 3 // anamorphic hero
            } else if sizeRand < 0.05 { // 3.5% large
                baseSize = 3.0
                starType = 3
            } else if sizeRand < 0.20 { // 15% medium
                baseSize = 2.0
                starType = 0
            } else if sizeRand < 0.35 { // 15% halo-style
                baseSize = 2.0
                starType = 0
            } else { // 65% small
                baseSize = 1.0
                starType = 0
            }
            
            let color = pickWeightedColor(sRand(seed, i * 11))
            
            // Very slow ring rotation
            let ringAngle = atan2(ry - 0.5, rx - 0.5)
            let distFromCenter = sqrt((rx - 0.5) * (rx - 0.5) + (ry - 0.5) * (ry - 0.5))
            
            stars.append(StarData(
                position: SIMD2(rx, ry),
                baseSize: baseSize,
                zDepth: 0.3 + sRand(seed, i * 7 + 3) * 0.5,
                color: color,
                twinkleSpeed: 0.3 + sRand(seed, i * 13) * 1.0,
                twinklePhase: sRand(seed, i * 11) * .pi * 2,
                twinkleAmp: starType == 3 ? (0.3 + sRand(seed, i * 17) * 0.2) : (0.12 + sRand(seed, i * 17) * 0.15),
                starType: starType,
                driftAngle: ringAngle,
                driftSpeed: zone == 1 ? 0.15 : 0.05,
                motionParams: SIMD2(Float(zone), distFromCenter),
                rotationFactor: zone == 0 ? 2.0 : (zone == 1 ? 1.0 : (zone == 2 ? 0.5 : 0.1)),
                zoneTintStrength: zone == 1 ? 0.08 : 0,
                zoneTintColor: zone == 1 ? SIMD4(154/255, 86/255, 255/255, 1) : SIMD4(0, 0, 0, 0)
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
