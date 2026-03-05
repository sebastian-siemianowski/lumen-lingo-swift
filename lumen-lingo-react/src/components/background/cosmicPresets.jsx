/**
 * COSMIC BACKGROUND PRESETS
 * 
 * Each preset defines a unique cosmic environment with:
 * - Nebula/Galaxy gradient layers
 * - Custom microstar configuration
 * - Motion parameters
 * - Color palettes
 */

// ═══════════════════════════════════════════════════════════════
// MICROSTAR GENERATION UTILITIES
// ═══════════════════════════════════════════════════════════════

const seededRandom = (seed, n) => {
  const x = Math.sin(seed * 9999 + n * 7919) * 10000;
  return x - Math.floor(x);
};

export const generateMicrostars = (config, seed = 1) => {
  const {
    count,
    sizeRange,
    opacityRange,
    colorPalette,
    colorWeights,
    twinkleChance,
    parallaxLayers
  } = config;

  const stars = [];
  const starsPerLayer = Math.floor(count / parallaxLayers);

  for (let layer = 0; layer < parallaxLayers; layer++) {
    const layerDepth = layer / (parallaxLayers - 1 || 1);
    
    for (let i = 0; i < starsPerLayer; i++) {
      const idx = layer * starsPerLayer + i;
      const rand = (n) => seededRandom(seed + layer * 100, idx * n);

      // Size distribution - smaller stars more common
      const sizeRand = rand(11);
      const sizeCurve = Math.pow(sizeRand, 1.5); // Bias toward smaller
      const size = sizeRange[0] + sizeCurve * (sizeRange[1] - sizeRange[0]);

      // Opacity based on size (larger = brighter) with variance
      const baseOpacity = opacityRange[0] + (size - sizeRange[0]) / (sizeRange[1] - sizeRange[0]) * (opacityRange[1] - opacityRange[0]);
      const opacityVariance = 0.85 + rand(13) * 0.3;

      // Color selection based on weights
      let colorIdx = 0;
      let weightSum = 0;
      const colorRand = rand(17);
      for (let c = 0; c < colorWeights.length; c++) {
        weightSum += colorWeights[c];
        if (colorRand < weightSum) {
          colorIdx = c;
          break;
        }
      }

      stars.push({
        x: rand(3),
        y: rand(7),
        size,
        baseOpacity: baseOpacity * opacityVariance,
        color: colorPalette[colorIdx] || colorPalette[0],
        twinkleOffset: rand(19) * Math.PI * 2,
        twinkleSpeed: 0.3 + rand(23) * 1.2,
        twinkleAmplitude: rand(29) < twinkleChance ? 0.15 + rand(31) * 0.2 : 0.05,
        layer,
        layerDepth
      });
    }
  }

  return stars;
};

// ═══════════════════════════════════════════════════════════════
// PRESET DEFINITIONS
// ═══════════════════════════════════════════════════════════════

export const COSMIC_PRESETS = {
  // ═══════════════════════════════════════════════════════════════
  // Lagoon Nebula
  // ═══════════════════════════════════════════════════════════════
  lagoon_nebula: {
    id: 'lagoon_nebula',
    name: 'Lagoon Nebula',
    type: 'nebula',
    description: 'Ethereal cosmic nebula clouds drifting gently',
    
    useCustomRenderer: 'lagoon_nebula',
    
    microstarConfig: {
      count: 480,
      sizeRange: [0.3, 3.0],
      opacityRange: [0.12, 0.85],
      colorPalette: [
        [255, 255, 255],    // White
        [255, 200, 180],    // Warm peach
        [200, 220, 255],    // Blue-white
        [255, 180, 200],    // Rose pink
        [180, 200, 255],    // Cool blue
        [220, 180, 255],    // Lavender
      ],
      colorWeights: [0.5, 0.1, 0.15, 0.1, 0.1, 0.05],
      twinkleChance: 0.08,
      parallaxLayers: 3
    },

    motion: {
      driftDirection: { x: 0.15, y: 0.1 },
      driftSpeed: 1.0,
      waveAmplitude: { x: 14, y: 10 },
      waveFrequency: 0.0005
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // Celestial Lagoon
  // Deep aqua, cyan, turquoise with faint magenta glints
  // Uses dedicated CelestialLagoonNebula component
  // ═══════════════════════════════════════════════════════════════
  celestial_lagoon: {
    id: 'celestial_lagoon',
    name: 'Celestial Lagoon',
    type: 'nebula',
    description: 'Serene underwater-cosmic dreamscape',

    useCustomRenderer: 'celestial_lagoon',

    gradientLayers: [
      // Foundation void
      {
        type: 'radial',
        position: { x: 50, y: 50 },
        size: { w: 140, h: 120 },
        colors: [
          { stop: 0, color: [8, 18, 28], opacity: 0 },
          { stop: 35, color: [5, 12, 22], opacity: 0.4 },
          { stop: 60, color: [3, 8, 18], opacity: 0.7 },
          { stop: 100, color: [2, 4, 12], opacity: 1 }
        ]
      },
      // Primary aqua cloud
      {
        type: 'radial',
        position: { x: 30, y: 35 },
        size: { w: 55, h: 50 },
        colors: [
          { stop: 0, color: [20, 180, 170], opacity: 0.28 },
          { stop: 40, color: [15, 140, 135], opacity: 0.15 },
          { stop: 70, color: [10, 100, 100], opacity: 0.05 }
        ],
        blur: 65
      },
      // Cyan depth
      {
        type: 'radial',
        position: { x: 70, y: 55 },
        size: { w: 50, h: 45 },
        colors: [
          { stop: 0, color: [30, 200, 210], opacity: 0.24 },
          { stop: 45, color: [20, 160, 175], opacity: 0.12 },
          { stop: 65, color: [15, 120, 140], opacity: 0.04 }
        ],
        blur: 60
      },
      // Turquoise wisps
      {
        type: 'radial',
        position: { x: 50, y: 70 },
        size: { w: 60, h: 40 },
        colors: [
          { stop: 0, color: [40, 220, 200], opacity: 0.2 },
          { stop: 50, color: [30, 180, 165], opacity: 0.1 }
        ],
        blur: 55
      },
      // Deep teal current
      {
        type: 'radial',
        position: { x: 20, y: 65 },
        size: { w: 45, h: 55 },
        colors: [
          { stop: 0, color: [15, 160, 150], opacity: 0.22 },
          { stop: 55, color: [10, 120, 115], opacity: 0.08 }
        ],
        blur: 50
      },
      // Magenta glint accent
      {
        type: 'radial',
        position: { x: 75, y: 30 },
        size: { w: 30, h: 25 },
        colors: [
          { stop: 0, color: [200, 80, 160], opacity: 0.12 },
          { stop: 60, color: [160, 60, 130], opacity: 0.04 }
        ],
        blur: 45
      },
      // Secondary magenta
      {
        type: 'radial',
        position: { x: 25, y: 80 },
        size: { w: 25, h: 20 },
        colors: [
          { stop: 0, color: [180, 70, 150], opacity: 0.1 },
          { stop: 70, color: [140, 50, 120], opacity: 0.03 }
        ],
        blur: 40
      }
    ],

    microstarConfig: {
      count: 520,
      sizeRange: [0.7, 1.9],
      opacityRange: [0.15, 0.75],
      colorPalette: [
        [255, 255, 255],    // White (dominant)
        [200, 255, 250],    // Faint cyan tint
        [220, 200, 255],    // Faint violet tint
      ],
      colorWeights: [0.8, 0.12, 0.08],
      twinkleChance: 0.03, // 2-3% shimmer
      parallaxLayers: 3
    },

    motion: {
      driftDirection: { x: 0.25, y: 0.08 }, // Horizontal dominant
      driftSpeed: 0.9,
      waveAmplitude: { x: 18, y: 8 },
      waveFrequency: 0.0004,
      verticalTurbulence: 0.15
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // Solar Aurora
  // Vibrant violet, fuchsia, soft gold-orange internal glow
  // Uses dedicated SolarAuroraNebula component
  // ═══════════════════════════════════════════════════════════════
  solar_aurora: {
    id: 'solar_aurora',
    name: 'Solar Aurora',
    type: 'nebula',
    description: 'Energized yet peaceful aurora ribbons',
    
    useCustomRenderer: 'solar_aurora',
    
    gradientLayers: [
      // Deep space base
      {
        type: 'radial',
        position: { x: 50, y: 50 },
        size: { w: 140, h: 120 },
        colors: [
          { stop: 0, color: [15, 8, 25], opacity: 0 },
          { stop: 40, color: [10, 5, 20], opacity: 0.5 },
          { stop: 70, color: [6, 3, 14], opacity: 0.8 },
          { stop: 100, color: [3, 2, 8], opacity: 1 }
        ]
      },
      // Primary violet ribbon
      {
        type: 'radial',
        position: { x: 35, y: 40 },
        size: { w: 60, h: 35 },
        colors: [
          { stop: 0, color: [130, 60, 200], opacity: 0.32 },
          { stop: 35, color: [100, 45, 165], opacity: 0.18 },
          { stop: 60, color: [70, 30, 130], opacity: 0.06 }
        ],
        blur: 55
      },
      // Fuchsia arc
      {
        type: 'radial',
        position: { x: 65, y: 35 },
        size: { w: 55, h: 40 },
        colors: [
          { stop: 0, color: [220, 60, 160], opacity: 0.28 },
          { stop: 40, color: [180, 45, 130], opacity: 0.14 },
          { stop: 65, color: [140, 30, 100], opacity: 0.04 }
        ],
        blur: 50
      },
      // Deep violet current
      {
        type: 'radial',
        position: { x: 50, y: 60 },
        size: { w: 70, h: 45 },
        colors: [
          { stop: 0, color: [100, 50, 180], opacity: 0.25 },
          { stop: 50, color: [75, 35, 145], opacity: 0.12 }
        ],
        blur: 60
      },
      // Gold-orange internal glow
      {
        type: 'radial',
        position: { x: 48, y: 45 },
        size: { w: 40, h: 30 },
        colors: [
          { stop: 0, color: [255, 180, 80], opacity: 0.18 },
          { stop: 45, color: [245, 150, 60], opacity: 0.08 },
          { stop: 70, color: [220, 120, 40], opacity: 0.02 }
        ],
        blur: 45
      },
      // Secondary amber accent
      {
        type: 'radial',
        position: { x: 70, y: 65 },
        size: { w: 30, h: 25 },
        colors: [
          { stop: 0, color: [255, 160, 60], opacity: 0.14 },
          { stop: 60, color: [230, 130, 40], opacity: 0.05 }
        ],
        blur: 40
      },
      // Pink highlight
      {
        type: 'radial',
        position: { x: 25, y: 55 },
        size: { w: 35, h: 30 },
        colors: [
          { stop: 0, color: [255, 100, 180], opacity: 0.16 },
          { stop: 55, color: [220, 70, 150], opacity: 0.06 }
        ],
        blur: 42
      }
    ],

    microstarConfig: {
      count: 400,
      sizeRange: [0.6, 1.6],
      opacityRange: [0.18, 0.7],
      colorPalette: [
        [255, 255, 255],    // White
        [255, 200, 230],    // Faint fuchsia
        [255, 230, 200],    // Faint amber
      ],
      colorWeights: [0.9, 0.05, 0.05],
      twinkleChance: 0.06,
      parallaxLayers: 2
    },

    motion: {
      driftDirection: { x: 0.12, y: 0.18 },
      driftSpeed: 1.1,
      waveAmplitude: { x: 12, y: 16 },
      waveFrequency: 0.0006,
      undulatingWave: true
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // Spiral Halo
  // Face-on spiral galaxy with indigo core, pale blue arms
  // Uses dedicated SpiralHaloGalaxy component
  // ═══════════════════════════════════════════════════════════════
  spiral_halo: {
    id: 'spiral_halo',
    name: 'Spiral Halo',
    type: 'galaxy',
    description: 'Majestic spiral galaxy with luminous arms',
    
    useCustomRenderer: 'spiral_halo',
    
    gradientLayers: [
      // Infinite void
      {
        type: 'radial',
        position: { x: 50, y: 50 },
        size: { w: 150, h: 130 },
        colors: [
          { stop: 0, color: [5, 5, 15], opacity: 0 },
          { stop: 50, color: [3, 3, 10], opacity: 0.6 },
          { stop: 100, color: [1, 1, 5], opacity: 1 }
        ]
      },
      // Bright galactic core
      {
        type: 'radial',
        position: { x: 50, y: 50 },
        size: { w: 25, h: 25 },
        colors: [
          { stop: 0, color: [255, 250, 240], opacity: 0.35 },
          { stop: 30, color: [200, 180, 255], opacity: 0.25 },
          { stop: 60, color: [120, 100, 200], opacity: 0.12 },
          { stop: 100, color: [70, 50, 150], opacity: 0.02 }
        ],
        blur: 30
      },
      // Inner indigo halo
      {
        type: 'radial',
        position: { x: 50, y: 50 },
        size: { w: 45, h: 45 },
        colors: [
          { stop: 0, color: [80, 60, 180], opacity: 0.22 },
          { stop: 50, color: [60, 45, 140], opacity: 0.1 },
          { stop: 80, color: [40, 30, 100], opacity: 0.03 }
        ],
        blur: 40
      },
      // Spiral arm 1 (pale blue)
      {
        type: 'radial',
        position: { x: 35, y: 35 },
        size: { w: 50, h: 25 },
        colors: [
          { stop: 0, color: [150, 180, 255], opacity: 0.18 },
          { stop: 50, color: [120, 150, 220], opacity: 0.08 },
          { stop: 80, color: [90, 120, 180], opacity: 0.02 }
        ],
        blur: 35,
        rotation: -30
      },
      // Spiral arm 2
      {
        type: 'radial',
        position: { x: 65, y: 65 },
        size: { w: 50, h: 25 },
        colors: [
          { stop: 0, color: [140, 170, 250], opacity: 0.16 },
          { stop: 55, color: [110, 140, 210], opacity: 0.07 }
        ],
        blur: 35,
        rotation: 150
      },
      // Spiral arm 3
      {
        type: 'radial',
        position: { x: 70, y: 35 },
        size: { w: 45, h: 22 },
        colors: [
          { stop: 0, color: [160, 190, 255], opacity: 0.14 },
          { stop: 60, color: [130, 160, 220], opacity: 0.05 }
        ],
        blur: 32,
        rotation: 60
      },
      // Outer halo glow
      {
        type: 'radial',
        position: { x: 50, y: 50 },
        size: { w: 80, h: 80 },
        colors: [
          { stop: 40, color: [100, 120, 200], opacity: 0.06 },
          { stop: 70, color: [80, 100, 170], opacity: 0.03 },
          { stop: 100, color: [60, 80, 140], opacity: 0 }
        ],
        blur: 50
      }
    ],

    microstarConfig: {
      count: 650,
      sizeRange: [0.6, 2.1],
      opacityRange: [0.12, 0.8],
      colorPalette: [
        [255, 255, 255],    // White (dominant)
        [200, 220, 255],    // Pale blue
      ],
      colorWeights: [0.92, 0.08],
      twinkleChance: 0.02,
      parallaxLayers: 4
    },

    motion: {
      driftDirection: { x: 0.05, y: 0.03 },
      driftSpeed: 0.6,
      waveAmplitude: { x: 6, y: 6 },
      waveFrequency: 0.0002,
      rotation: {
        enabled: true,
        speed: 0.0001,
        direction: 'clockwise'
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // Edge of Andromeda
  // Edge-on galaxy with warm gold → cool violet palette
  // Uses dedicated EdgeOfAndromedaGalaxy component
  // ═══════════════════════════════════════════════════════════════
  edge_of_andromeda: {
    id: 'edge_of_andromeda',
    name: 'Edge of Andromeda',
    type: 'galaxy',
    description: 'Distant edge-on galaxy with luminous nucleus',
    
    useCustomRenderer: 'edge_of_andromeda',
    
    gradientLayers: [
      // Deep space void with violet
      {
        type: 'radial',
        position: { x: 50, y: 50 },
        size: { w: 150, h: 130 },
        colors: [
          { stop: 0, color: [10, 6, 22], opacity: 0 },
          { stop: 45, color: [6, 4, 16], opacity: 0.5 },
          { stop: 100, color: [3, 2, 8], opacity: 1 }
        ]
      },
      // Warm nucleus core (galactic center)
      {
        type: 'radial',
        position: { x: 50, y: 50 },
        size: { w: 16, h: 8 },
        colors: [
          { stop: 0, color: [255, 235, 200], opacity: 0.15 },
          { stop: 35, color: [240, 215, 180], opacity: 0.08 },
          { stop: 70, color: [200, 180, 170], opacity: 0.03 }
        ],
        blur: 20
      },
      // Subtle disc glow (transitioning warm to violet)
      {
        type: 'radial',
        position: { x: 50, y: 50 },
        size: { w: 75, h: 5 },
        colors: [
          { stop: 0, color: [220, 200, 195], opacity: 0.06 },
          { stop: 40, color: [180, 165, 190], opacity: 0.03 },
          { stop: 70, color: [150, 135, 175], opacity: 0.01 }
        ],
        blur: 18
      },
      // Dust lane (dark band)
      {
        type: 'radial',
        position: { x: 50, y: 51 },
        size: { w: 75, h: 3 },
        colors: [
          { stop: 0, color: [8, 5, 18], opacity: 0.4 },
          { stop: 80, color: [4, 3, 12], opacity: 0.2 }
        ],
        blur: 8
      },
      // Violet outer halo (upper)
      {
        type: 'radial',
        position: { x: 50, y: 40 },
        size: { w: 70, h: 30 },
        colors: [
          { stop: 20, color: [120, 85, 180], opacity: 0.06 },
          { stop: 60, color: [90, 60, 150], opacity: 0.025 },
          { stop: 100, color: [60, 45, 120], opacity: 0 }
        ],
        blur: 45
      },
      // Violet halo (lower)
      {
        type: 'radial',
        position: { x: 50, y: 60 },
        size: { w: 70, h: 30 },
        colors: [
          { stop: 20, color: [110, 75, 170], opacity: 0.05 },
          { stop: 65, color: [85, 55, 140], opacity: 0.02 }
        ],
        blur: 45
      },
      // Subtle violet edge glow
      {
        type: 'radial',
        position: { x: 20, y: 50 },
        size: { w: 30, h: 15 },
        colors: [
          { stop: 0, color: [140, 110, 180], opacity: 0.04 },
          { stop: 70, color: [120, 90, 160], opacity: 0.015 }
        ],
        blur: 30
      }
    ],

    microstarConfig: {
      count: 1200,
      sizeRange: [0.3, 2.0],
      opacityRange: [0.1, 0.85],
      colorPalette: [
        [255, 255, 255],    // White (dominant)
        [255, 248, 235],    // Warm cream
        [255, 235, 210],    // Gold tint
        [215, 225, 255],    // Cool blue
        [235, 220, 255],    // Violet tint
      ],
      colorWeights: [0.55, 0.15, 0.12, 0.10, 0.08],
      twinkleChance: 0.05,
      parallaxLayers: 4,
      // Edge-on disc distribution
      ellipticalDistribution: {
        enabled: true,
        aspectRatio: 0.15,
        coreConcentration: 0.25
      }
    },

    motion: {
      driftDirection: { x: 0.15, y: 0 },
      driftSpeed: 0.6,
      waveAmplitude: { x: 10, y: 3 },
      waveFrequency: 0.0002,
      // Elliptical orbital motion
      ellipticalOrbit: {
        enabled: true,
        speedFalloff: 0.4 // Inner stars faster
      },
      breathing: {
        enabled: true,
        amplitude: 0.06,
        speed: 0.0003
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // Starburst Ring — "Stellar Bloom Halo"
  // Ring galaxy with intense star formation, neon cosmic energy
  // Palette: #5A2EFF (nucleus), #FF3BEA (ring), #5CC9FF (clusters)
  // ═══════════════════════════════════════════════════════════════
  starburst_ring: {
    id: 'starburst_ring',
    name: 'Starburst Ring',
    type: 'galaxy',
    description: 'Luminous star-forming ring galaxy',
    
    // Custom rendering - uses dedicated StarburstRingGalaxy component
    useCustomRenderer: 'starburst_ring',

    microstarConfig: {
      count: 220, // High density for starburst
      sizeRange: [0.6, 2.2],
      opacityRange: [0.18, 0.88],
      colorPalette: [
        [255, 255, 255],    // White (70%)
        [255, 59, 234],     // Neon magenta #FF3BEA (15%)
        [92, 201, 255],     // Electric blue #5CC9FF (15%)
      ],
      colorWeights: [0.70, 0.15, 0.15],
      twinkleChance: 0.07, // 5-8% shimmer
      parallaxLayers: 3,
      // Stars near ring are larger
      ringBoost: {
        innerRadius: 0.25,
        outerRadius: 0.42,
        sizeMultiplier: 1.4,
        densityMultiplier: 1.8
      }
    },

    motion: {
      driftDirection: { x: 0.05, y: 0.05 },
      driftSpeed: 0.6,
      waveAmplitude: { x: 6, y: 6 },
      waveFrequency: 0.0002,
      rotation: {
        enabled: true,
        speed: 0.02, // 0.015-0.025 rad/s range
        direction: 'clockwise'
      },
      radialDrift: {
        enabled: true,
        amplitude: 3,
        speed: 0.08 // px/s for outer haze
      },
      glintPulse: {
        enabled: true,
        intensityVariation: 0.12, // 10-15%
        frequency: 0.04 // 0.03-0.06 Hz
      }
    },

    // Color palette reference
    palette: {
      nucleus: [90, 46, 255],        // #5A2EFF
      innerHalo: [154, 86, 255],     // #9A56FF
      ringMain: [255, 59, 234],      // #FF3BEA
      ringAccent: [92, 201, 255],    // #5CC9FF
      outerHaze: [194, 161, 255],    // #C2A1FF
      voidStart: [18, 11, 40],       // #120B28
      voidEnd: [8, 6, 18]            // #080612
    }
  }
};

// ═══════════════════════════════════════════════════════════════
// PRESET CATEGORIES
// ═══════════════════════════════════════════════════════════════

export const PRESET_CATEGORIES = {
  nebulae: ['lagoon_nebula', 'celestial_lagoon', 'solar_aurora'],
  galaxies: ['spiral_halo', 'edge_of_andromeda', 'starburst_ring']
};

export const getPresetById = (id) => COSMIC_PRESETS[id] || COSMIC_PRESETS.lagoon_nebula;

export const getAllPresets = () => Object.values(COSMIC_PRESETS);

export const getPresetsByType = (type) => 
  Object.values(COSMIC_PRESETS).filter(p => p.type === type);