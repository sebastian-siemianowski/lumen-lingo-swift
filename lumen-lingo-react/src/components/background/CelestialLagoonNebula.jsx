import React, { useMemo, useRef, useEffect, memo } from "react";
import { motion } from "framer-motion";

// ═══════════════════════════════════════════════════════════════
// CELESTIAL LAGOON NEBULA — ULTRA PREMIUM TIER
// Matching quality of Edge of Andromeda / Spiral Halo / Starburst Ring
// Aqua/Cyan/Turquoise cloudy nebula with stellar populations
// Canvas-based turbulent gas, quantum sparkles, diffraction spikes
// ═══════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════
// UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════

const seededRandom = (seed, n = 1) => {
  const x = Math.sin(seed * 9999 + n * 7919) * 10000;
  return x - Math.floor(x);
};

const createNoise2D = (seed = 42) => {
  const perm = new Array(512);
  const p = new Array(256);
  for (let i = 0; i < 256; i++) p[i] = i;
  
  for (let i = 255; i > 0; i--) {
    const x = Math.sin(seed * 9999 + i * 7919) * 10000;
    const j = Math.floor((x - Math.floor(x)) * (i + 1));
    [p[i], p[j]] = [p[j], p[i]];
  }
  for (let i = 0; i < 512; i++) perm[i] = p[i & 255];
  
  const fade = t => t * t * t * (t * (t * 6 - 15) + 10);
  const lerp = (a, b, t) => a + t * (b - a);
  const grad = (hash, x, y) => {
    const h = hash & 3;
    const u = h < 2 ? x : y;
    const v = h < 2 ? y : x;
    return ((h & 1) ? -u : u) + ((h & 2) ? -v : v);
  };
  
  return (x, y) => {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    x -= Math.floor(x);
    y -= Math.floor(y);
    const u = fade(x);
    const v = fade(y);
    const A = perm[X] + Y, B = perm[X + 1] + Y;
    return lerp(
      lerp(grad(perm[A], x, y), grad(perm[B], x - 1, y), u),
      lerp(grad(perm[A + 1], x, y - 1), grad(perm[B + 1], x - 1, y - 1), u),
      v
    );
  };
};

// ═══════════════════════════════════════════════════════════════
// STELLAR POPULATIONS - Multiple types for realism
// ═══════════════════════════════════════════════════════════════

const STELLAR_CLASSIFICATIONS = {
  // Hot massive stars
  O_TYPE_BLUE: [195, 235, 255],      // Ultra hot blue
  O_TYPE_CYAN: [185, 245, 255],      // Cyan-blue giant
  B_TYPE_BRIGHT: [215, 245, 255],    // Bright blue-white
  B_TYPE_BLUE: [200, 240, 255],      // Blue supergiant
  
  // White-blue stars
  A_TYPE_WHITE: [240, 250, 255],     // Pure white
  A_TYPE_BLUE: [230, 248, 255],      // White-blue
  F_TYPE_YELLOW_WHITE: [255, 252, 245], // Yellow-white
  
  // Yellow stars (Sun-like)
  G_TYPE_YELLOW: [255, 248, 235],    // Solar yellow
  G_TYPE_WARM: [255, 245, 220],      // Warm yellow
  
  // Aqua/Cyan theme stars (signature)
  CYAN_SUPERGIANT: [170, 245, 255],  // Bright cyan
  AQUA_GIANT: [185, 255, 250],       // Aqua giant
  AQUA_BRIGHT: [200, 255, 248],      // Bright aqua
  TEAL_BRIGHT: [180, 255, 235],      // Bright teal
  TEAL_DEEP: [165, 245, 230],        // Deep teal
  TURQUOISE: [175, 255, 245],        // Turquoise
  
  // Accent colors for variety
  MINT_GREEN: [200, 255, 225],       // Mint accent
  ICE_BLUE: [210, 248, 255],         // Ice blue
  PINK_NEBULA: [255, 195, 225],      // Nebula reflection
  LAVENDER: [225, 205, 255],         // Lavender accent
  PEACH: [255, 225, 200],            // Warm peach
  
  // Cool exotic variants
  VIOLET_TINT: [215, 195, 255],      // Subtle violet
  ELECTRIC_CYAN: [160, 255, 255],    // Electric cyan
  SEAFOAM: [190, 255, 240],          // Seafoam green
  AZURE: [180, 235, 255],            // Azure blue
};

// ═══════════════════════════════════════════════════════════════
// STAR FIELD GENERATION - Multiple stellar populations
// ═══════════════════════════════════════════════════════════════

const generateStellarPopulations = (seed = 42) => {
  const noise = createNoise2D(seed);
  const populations = {
    field: [],      // Distant background stars
    nebula: [],     // Stars embedded in nebula
    bright: [],     // Luminous foreground stars
    hero: []        // Spectacular bright stars
  };

  // ═══════════════════════════════════════════════════════════════
  // LAYER C - FAR BACKGROUND (45% of stars) - Infinite distance illusion
  // Smallest, faintest, barely noticeable drift
  // ═══════════════════════════════════════════════════════════════
  const layerC_count = 600;
  for (let i = 0; i < layerC_count; i++) {
    const rand = (n) => seededRandom(seed + i * 13, n);
    
    // Soft pastel colors only
    const colorRoll = rand(5);
    let color;
    if (colorRoll > 0.7) color = [210, 240, 250];      // Pale icy blue
    else if (colorRoll > 0.45) color = [200, 245, 245]; // Faint turquoise
    else if (colorRoll > 0.25) color = [220, 245, 255]; // Soft aquamarine
    else color = [235, 245, 250];                        // Nearly white
    
    populations.field.push({
      x: rand(1),
      y: rand(2),
      size: 0.2 + rand(3) * 0.4,
      baseOpacity: 0.12 + rand(4) * 0.28,
      color,
      driftPhaseX: rand(6) * Math.PI * 2,
      driftPhaseY: rand(7) * Math.PI * 2,
      flickerPhase: rand(8) * Math.PI * 2,
      hasFlicker: rand(9) > 0.65, // 35% flicker
      twinkleSpeed: 0.15 + rand(10) * 0.4,
      twinkleOffset: rand(11) * Math.PI * 2,
      layerDepth: 1,
      depthLayer: 'C',
      layer: 'field'
    });
  }

  // ═══════════════════════════════════════════════════════════════
  // LAYER B - MID LAYER (45% of stars) - Primary visible field
  // Medium brightness, gentle horizontal drift
  // ═══════════════════════════════════════════════════════════════
  const layerB_count = 600;
  for (let i = 0; i < layerB_count; i++) {
    const rand = (n) => seededRandom(seed + 1000 + i * 17, n);
    
    // Soft color palette
    const colorRoll = rand(5);
    let color;
    if (colorRoll > 0.75) color = [185, 235, 245];      // Soft turquoise
    else if (colorRoll > 0.5) color = [195, 240, 250];  // Pale cyan
    else if (colorRoll > 0.3) color = [210, 245, 255];  // Ice blue
    else color = [225, 250, 255];                        // Faint white-blue
    
    populations.nebula.push({
      x: rand(1),
      y: rand(2),
      size: 0.35 + rand(3) * 0.7,
      baseOpacity: 0.28 + rand(4) * 0.45,
      color,
      driftPhaseX: rand(6) * Math.PI * 2,
      driftPhaseY: rand(7) * Math.PI * 2,
      flickerPhase: rand(8) * Math.PI * 2,
      hasFlicker: rand(9) > 0.6, // 40% flicker
      twinkleSpeed: 0.25 + rand(10) * 0.7,
      twinkleOffset: rand(11) * Math.PI * 2,
      layerDepth: 0.5,
      depthLayer: 'B',
      layer: 'nebula'
    });
  }

  // ═══════════════════════════════════════════════════════════════
  // LAYER A - FOREGROUND (10% of stars) - Brightest, largest
  // Slow orbital drift + slight vertical shimmer, soft glow
  // ═══════════════════════════════════════════════════════════════
  const layerA_count = 130;
  for (let i = 0; i < layerA_count; i++) {
    const rand = (n) => seededRandom(seed + 2000 + i * 19, n);
    
    // Brightest soft colors
    const colorRoll = rand(5);
    let color;
    if (colorRoll > 0.7) color = [170, 230, 245];       // Bright turquoise
    else if (colorRoll > 0.45) color = [185, 240, 250]; // Aqua
    else if (colorRoll > 0.25) color = [200, 245, 255]; // Cyan-white
    else color = [215, 250, 255];                        // Bright ice
    
    populations.bright.push({
      x: rand(1),
      y: rand(2),
      size: 0.7 + rand(3) * 1.2,
      baseOpacity: 0.55 + rand(4) * 0.4,
      color,
      driftPhaseX: rand(6) * Math.PI * 2,
      driftPhaseY: rand(7) * Math.PI * 2,
      orbitPhase: rand(8) * Math.PI * 2,
      verticalPhase: rand(9) * Math.PI * 2,
      flickerPhase: rand(10) * Math.PI * 2,
      hasFlicker: rand(11) > 0.55, // 45% flicker
      breathePhase: rand(12) * Math.PI * 2,
      twinkleSpeed: 0.25 + rand(13) * 0.7,
      twinkleOffset: rand(14) * Math.PI * 2,
      layerDepth: 0,
      depthLayer: 'A',
      layer: 'bright'
    });
  }

  return populations;
};

// ═══════════════════════════════════════════════════════════════
// TURBULENT GAS CANVAS - Flowing nebula clouds on canvas
// ═══════════════════════════════════════════════════════════════

const TurbulentGasCanvas = memo(({ intensity, speed }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const startTimeRef = useRef(Date.now());
  const noiseRef = useRef(createNoise2D(777));
  const isPausedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { 
      alpha: true, 
      desynchronized: true,
      willReadFrequently: false 
    });
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width, height;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    const noise = noiseRef.current;

    const animate = () => {
      if (isPausedRef.current) { return; }
      const elapsed = (Date.now() - startTimeRef.current) / 1000 * speed;
      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'lighter';

      const centerX = width * 0.5;
      const centerY = height * 0.5;
      const maxDim = Math.max(width, height);

      // Draw turbulent gas clouds
      for (let layer = 0; layer < 4; layer++) {
        const layerSeed = layer * 100;
        const layerTime = elapsed * (0.04 + layer * 0.01);
        
        for (let i = 0; i < 35; i++) {
          const rand = (n) => seededRandom(layerSeed + i * 13, n);
          
          const baseX = rand(1) * width;
          const baseY = rand(2) * height;
          
          // Smooth sinusoidal drift instead of noise-based
          const driftPhase = rand(3) * Math.PI * 2;
          const driftX = Math.sin(layerTime + driftPhase) * maxDim * 0.08;
          const driftY = Math.cos(layerTime * 0.8 + driftPhase * 1.3) * maxDim * 0.06;
          
          const x = Math.round(baseX + driftX);
          const y = Math.round(baseY + driftY);
          
          const size = (40 + rand(3) * 80) * (1 + layer * 0.3);
          const baseAlpha = (0.025 + rand(4) * 0.04) * intensity;
          
          // Pulsing opacity
          const pulsePhase = elapsed * 0.15 + rand(5) * Math.PI * 2;
          const pulse = 0.7 + Math.sin(pulsePhase) * 0.3;
          const alpha = baseAlpha * pulse;
          
          // Aqua/cyan/teal color selection
          const colorRoll = rand(6);
          let r, g, b;
          if (colorRoll > 0.75) {
            r = 20 + rand(7) * 30;
            g = 170 + rand(8) * 40;
            b = 165 + rand(9) * 35;
          } else if (colorRoll > 0.5) {
            r = 30 + rand(7) * 25;
            g = 190 + rand(8) * 35;
            b = 200 + rand(9) * 30;
          } else if (colorRoll > 0.25) {
            r = 40 + rand(7) * 30;
            g = 210 + rand(8) * 25;
            b = 195 + rand(9) * 30;
          } else {
            r = 15 + rand(7) * 20;
            g = 150 + rand(8) * 30;
            b = 148 + rand(9) * 27;
          }
          
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
          gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha})`);
          gradient.addColorStop(0.3, `rgba(${r}, ${g}, ${b}, ${alpha * 0.6})`);
          gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${alpha * 0.3})`);
          gradient.addColorStop(0.75, `rgba(${r}, ${g}, ${b}, ${alpha * 0.08})`);
          gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
          
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleCollapsePause = (e) => { 
      const wasPaused = isPausedRef.current;
      isPausedRef.current = e.detail?.paused ?? false;
      if (wasPaused && !isPausedRef.current) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };
    window.addEventListener('collapsePause', handleCollapsePause);
    isPausedRef.current = document.body.classList.contains('collapse-animating');

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('collapsePause', handleCollapsePause);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [intensity, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ 
        opacity: 0.85, 
        mixBlendMode: 'screen',
        willChange: 'contents',
        transform: 'translate3d(0, 0, 0)',
        imageRendering: 'high-quality'
      }}
    />
  );
});

TurbulentGasCanvas.displayName = 'TurbulentGasCanvas';

// ═══════════════════════════════════════════════════════════════
// STELLAR CANVAS - All star populations with advanced rendering
// ═══════════════════════════════════════════════════════════════

const StellarCanvas = memo(({ populations, intensity, speed }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const startTimeRef = useRef(Date.now());
  const noiseRef = useRef(createNoise2D(456));
  const isPausedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width, height;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    const noise = noiseRef.current;
    const allStars = [
      ...populations.field,
      ...populations.nebula,
      ...populations.bright
    ];

    const animate = () => {
      if (isPausedRef.current) { return; }
      const elapsed = (Date.now() - startTimeRef.current) / 1000 * speed;
      ctx.clearRect(0, 0, width, height);

      // Gentle visible drift
      const globalDriftX = Math.sin(elapsed * 0.035) * 8;
      const globalDriftY = Math.cos(elapsed * 0.028) * 6;

      allStars.forEach((star, i) => {
        const [baseR, baseG, baseB] = star.color;
        const layerMultiplier = 0.5 + star.layerDepth * 0.5;

        // Multi-layer twinkle - organic breathing like Spiral Halo
        const twinklePhase = elapsed * star.twinkleSpeed + star.twinkleOffset;
        const twinkle = 0.5 + Math.sin(twinklePhase) * 0.35 + Math.sin(twinklePhase * 1.7) * 0.15;

        // Intensity breathing - stars fade in/out organically (from Edge of Andromeda)
        const intensityBreath = 0.7 + Math.sin(elapsed * 0.12 + star.twinkleOffset) * 0.2 + 
                                Math.sin(elapsed * 0.08 + star.twinkleOffset * 1.5) * 0.1;

        // Visible flickering (30-45% of stars)
        let flickerMultiplier = 1;
        if (star.hasFlicker) {
          const flickerPhase = elapsed * 0.42 + star.flickerPhase;
          const flicker = Math.sin(flickerPhase) * 0.25 + Math.sin(flickerPhase * 1.8) * 0.12;
          flickerMultiplier = 1 + flicker;
        }

        const opacity = star.baseOpacity * twinkle * flickerMultiplier * intensityBreath * intensity;
        if (opacity < 0.01) return;

        // Enhanced breathing with dual harmonics (from Spiral Halo)
        const breathePhase = elapsed * 0.15 + (star.breathePhase || star.twinkleOffset * 0.5);
        const breathe = 1 + Math.sin(breathePhase) * 0.12 + Math.sin(breathePhase * 0.7) * 0.08;
        const sizePulse = 1 + Math.sin(twinklePhase * 0.6) * 0.08;
        const size = star.size * sizePulse * breathe;

        // Color-shifting glow - stars slowly transition through hues (from Edge of Andromeda)
        const colorCycleSpeed = 0.06 + (i % 7) * 0.01;
        const colorPhase = elapsed * colorCycleSpeed + star.twinkleOffset * 2;
        const colorShiftIntensity = 0.15 + Math.sin(elapsed * 0.03 + i * 0.5) * 0.1;
        
        const hueShift = Math.sin(colorPhase) * colorShiftIntensity;
        const warmShift = Math.max(0, hueShift);
        const coolShift = Math.max(0, -hueShift);
        
        const r = Math.min(255, Math.round(baseR + warmShift * 40 - coolShift * 30));
        const g = Math.min(255, Math.round(baseG + warmShift * 20 - coolShift * 10));
        const b = Math.min(255, Math.round(baseB - warmShift * 20 + coolShift * 50));

        // ═══════════════════════════════════════════════════════════
        // 3D PARALLAX MOTION - Cinematic depth with gentle movement
        // Optimized for 60fps performance
        // ═══════════════════════════════════════════════════════════
        let x, y;
        const baseX = star.x * width;
        const baseY = star.y * height;
        const toCenter = { x: star.x - 0.5, y: star.y - 0.5 };
        const distFromCenter = Math.sqrt(toCenter.x * toCenter.x + toCenter.y * toCenter.y);

        if (star.depthLayer === 'C') {
          // LAYER C: Far background - gentle wandering like Edge of Andromeda halo stars
          const starPhase = i * 0.1 + star.twinkleOffset;
          const driftSpeed = 0.3 + star.layerDepth * 0.2;
          const localDriftX = Math.sin(elapsed * driftSpeed + starPhase) * 12 * layerMultiplier;
          const localDriftY = Math.cos(elapsed * driftSpeed * 0.8 + starPhase * 1.3) * 10 * layerMultiplier;
          
          // Slow circular wander
          const wanderAngle = elapsed * 0.08 + starPhase;
          const wanderX = Math.cos(wanderAngle) * 6;
          const wanderY = Math.sin(wanderAngle) * 5;

          // Tiny parallax offset based on position (perspective)
          const perspectiveX = toCenter.x * globalDriftX * 0.05;
          const perspectiveY = toCenter.y * globalDriftY * 0.05;

          x = baseX + globalDriftX * layerMultiplier + localDriftX + wanderX + perspectiveX;
          y = baseY + globalDriftY * layerMultiplier + localDriftY + wanderY + perspectiveY;

        } else if (star.depthLayer === 'B') {
          // LAYER B: Mid layer - flowing drift like Spiral Halo
          const starPhase = i * 0.1 + star.twinkleOffset;
          const flowSpeed = 0.3 + star.layerDepth * 0.2;
          const localDriftX = Math.sin(elapsed * flowSpeed + starPhase) * 12 * layerMultiplier;
          const localDriftY = Math.cos(elapsed * flowSpeed * 0.8 + starPhase * 1.3) * 10 * layerMultiplier;

          // Organic wave based on vertical position (creates flowing effect)
          const waveX = Math.sin(elapsed * 0.025 + baseY * 0.0025) * 5;
          const waveY = Math.cos(elapsed * 0.022 + baseX * 0.002) * 3;

          // Medium parallax
          const perspectiveX = toCenter.x * globalDriftX * 0.15;
          const perspectiveY = toCenter.y * globalDriftY * 0.12;

          x = baseX + globalDriftX * layerMultiplier + localDriftX + waveX + perspectiveX;
          y = baseY + globalDriftY * layerMultiplier + localDriftY + waveY + perspectiveY;

        } else {
          // LAYER A: Foreground - enhanced organic motion from Edge of Andromeda
          const starPhase = i * 0.1 + star.twinkleOffset;
          const flowSpeed = 0.4 + star.layerDepth * 0.3;
          const localDriftX = Math.sin(elapsed * flowSpeed + starPhase) * 18 * layerMultiplier;
          const localDriftY = Math.cos(elapsed * flowSpeed * 0.7 + starPhase * 1.3) * 8 * layerMultiplier;
          
          // Gentle orbital rotation
          const orbitPhase = elapsed * 0.016 + star.orbitPhase;
          const orbitRadius = 12 + distFromCenter * 10;
          const orbitX = Math.cos(orbitPhase) * orbitRadius;
          const orbitY = Math.sin(orbitPhase) * orbitRadius * 0.7;

          // Vertical shimmer (breathing motion)
          const shimmer = Math.sin(elapsed * 0.03 + star.verticalPhase) * 7;

          // Strong parallax for depth
          const perspectiveX = toCenter.x * globalDriftX * 0.35;
          const perspectiveY = toCenter.y * globalDriftY * 0.3;

          // Z-axis simulation (stars closer appear to move faster)
          const zPhase = elapsed * 0.04 + star.breathePhase;
          const zOffset = Math.sin(zPhase) * 0.12;
          const zParallax = {
            x: toCenter.x * width * zOffset * 0.18,
            y: toCenter.y * height * zOffset * 0.18
          };

          x = baseX + globalDriftX * layerMultiplier + localDriftX + orbitX + shimmer * 0.3 + perspectiveX + zParallax.x;
          y = baseY + globalDriftY * layerMultiplier + localDriftY + orbitY + shimmer + perspectiveY + zParallax.y;
        }

        // Wrap around edges smoothly
        x = ((x % width) + width) % width;
        y = ((y % height) + height) % height;

        // ═══════════════════════════════════════════════════════════
        // RENDERING: Soft Gaussian dots with depth-based glow
        // ═══════════════════════════════════════════════════════════
        
        // Atmospheric diffusion glow (larger, softer) - from Edge of Andromeda
        const diffuseRadius = size * 5;
        const diffuseGradient = ctx.createRadialGradient(x, y, 0, x, y, diffuseRadius);
        diffuseGradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${opacity * 0.15})`);
        diffuseGradient.addColorStop(0.3, `rgba(${r}, ${g}, ${b}, ${opacity * 0.06})`);
        diffuseGradient.addColorStop(0.6, `rgba(${r}, ${g}, ${b}, ${opacity * 0.02})`);
        diffuseGradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

        ctx.beginPath();
        ctx.arc(x, y, diffuseRadius, 0, Math.PI * 2);
        ctx.fillStyle = diffuseGradient;
        ctx.fill();

        // Main glow with shifted color - from Spiral Halo
        const glowRadius = size * 2.8;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${opacity * 0.55})`);
        gradient.addColorStop(0.25, `rgba(${r}, ${g}, ${b}, ${opacity * 0.3})`);
        gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${opacity * 0.12})`);
        gradient.addColorStop(0.75, `rgba(${r}, ${g}, ${b}, ${opacity * 0.04})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

        ctx.beginPath();
        ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core with hot center - from Edge of Andromeda
        const coreRadius = size * 1.1;
        const coreGradient = ctx.createRadialGradient(x, y, 0, x, y, coreRadius);
        coreGradient.addColorStop(0, `rgba(255, 255, 255, ${Math.min(1, opacity * 1.15)})`);
        coreGradient.addColorStop(0.15, `rgba(255, 253, 250, ${opacity * 0.95})`);
        coreGradient.addColorStop(0.35, `rgba(${Math.min(255, r + 25)}, ${Math.min(255, g + 20)}, ${Math.min(255, b + 15)}, ${opacity * 0.7})`);
        coreGradient.addColorStop(0.6, `rgba(${r}, ${g}, ${b}, ${opacity * 0.4})`);
        coreGradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

        ctx.beginPath();
        ctx.arc(x, y, coreRadius, 0, Math.PI * 2);
        ctx.fillStyle = coreGradient;
        ctx.fill();

        // Bright hotspot for prominent stars
        if (star.baseOpacity > 0.4 && size > 0.9) {
          ctx.beginPath();
          ctx.arc(x, y, size * 0.18, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, opacity * 1.4)})`;
          ctx.fill();
        }

        // Cross-diffraction for bright stars - magical sparkle effect
        if (star.baseOpacity > 0.6 && size > 1.3) {
          ctx.save();
          ctx.globalAlpha = opacity * 0.15;
          
          const spikeLength = size * 3.5;
          const spikeGrad = ctx.createLinearGradient(x - spikeLength, y, x + spikeLength, y);
          spikeGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0)`);
          spikeGrad.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, 0.4)`);
          spikeGrad.addColorStop(0.5, `rgba(255, 255, 255, 0.6)`);
          spikeGrad.addColorStop(0.6, `rgba(${r}, ${g}, ${b}, 0.4)`);
          spikeGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
          
          ctx.strokeStyle = spikeGrad;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(x - spikeLength, y);
          ctx.lineTo(x + spikeLength, y);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(x, y - spikeLength * 0.7);
          ctx.lineTo(x, y + spikeLength * 0.7);
          ctx.stroke();
          
          ctx.restore();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleCollapsePause = (e) => { 
      const wasPaused = isPausedRef.current;
      isPausedRef.current = e.detail?.paused ?? false;
      if (wasPaused && !isPausedRef.current) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };
    window.addEventListener('collapsePause', handleCollapsePause);
    isPausedRef.current = document.body.classList.contains('collapse-animating');

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('collapsePause', handleCollapsePause);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [populations, intensity, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ 
        willChange: 'contents',
        transform: 'translate3d(0, 0, 0)',
        isolation: 'isolate'
      }}
    />
  );
});

StellarCanvas.displayName = 'StellarCanvas';

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════

export default function CelestialLagoonNebula({ intensity = 1.0, speed = 1.0 }) {
  const populations = useMemo(() => generateStellarPopulations(888), []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden" 
      style={{ zIndex: 0, isolation: 'isolate' }}
    >
      {/* ═══════════════════════════════════════════════════════════════
          FOUNDATION VOID - Deep ocean abyss
      ═══════════════════════════════════════════════════════════════ */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 140% 120% at 50% 50%, 
              rgba(6, 15, 28, 0) 0%, 
              rgba(4, 10, 22, 0.5) 40%,
              rgba(3, 7, 16, 0.8) 70%,
              rgba(2, 4, 10, 1) 100%
            )
          `
        }}
      />

      {/* ═══════════════════════════════════════════════════════════════
          AMBIENT AQUA GLOW - Unified soft atmosphere
      ═══════════════════════════════════════════════════════════════ */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 85% 75% at 50% 50%, 
              rgba(25, 165, 160, ${0.08 * intensity}) 0%, 
              rgba(18, 130, 125, ${0.04 * intensity}) 50%,
              rgba(12, 95, 90, ${0.015 * intensity}) 75%,
              transparent 100%
            )
          `,
          filter: 'blur(120px)',
          mixBlendMode: 'screen'
        }}
      />

      {/* ═══════════════════════════════════════════════════════════════
          TURBULENT GAS CLOUDS - Canvas-based flowing nebula
      ═══════════════════════════════════════════════════════════════ */}
      <TurbulentGasCanvas intensity={intensity} speed={speed} />

      {/* ═══════════════════════════════════════════════════════════════
          SOFT CYAN CURRENTS - Flowing atmosphere
      ═══════════════════════════════════════════════════════════════ */}
      <motion.div
        className="absolute"
        style={{
          width: '140%',
          height: '140%',
          top: '-20%',
          left: '-20%',
          background: `
            radial-gradient(ellipse 60% 55% at 35% 40%, 
              rgba(32, 190, 185, ${0.1 * intensity}) 0%, 
              rgba(24, 155, 150, ${0.05 * intensity}) 50%, 
              rgba(16, 120, 115, ${0.02 * intensity}) 75%,
              transparent 95%)
          `,
          filter: 'blur(95px)',
          mixBlendMode: 'screen',
          willChange: 'transform, opacity'
        }}
        animate={{
          scale: [1, 1.05, 1.02, 1.04, 1],
          opacity: [0.7, 0.85, 0.75, 0.8, 0.7],
          x: [0, 10, -6, 5, 0],
          y: [0, -6, 4, -3, 0],
        }}
        transition={{
          duration: 30 / speed,
          repeat: Infinity,
          ease: [0.45, 0.05, 0.55, 0.95],
        }}
      />

      {/* ═══════════════════════════════════════════════════════════════
          TURQUOISE WISPS - Ethereal highlights
      ═══════════════════════════════════════════════════════════════ */}
      <motion.div
        className="absolute"
        style={{
          width: '130%',
          height: '130%',
          top: '-15%',
          left: '-15%',
          background: `
            radial-gradient(ellipse 55% 50% at 65% 55%, 
              rgba(45, 215, 200, ${0.09 * intensity}) 0%, 
              rgba(35, 175, 165, ${0.045 * intensity}) 55%, 
              rgba(25, 135, 130, ${0.018 * intensity}) 80%,
              transparent 98%)
          `,
          filter: 'blur(88px)',
          mixBlendMode: 'screen',
          willChange: 'transform, opacity'
        }}
        animate={{
          scale: [1, 1.04, 1.07, 1.02, 1],
          opacity: [0.6, 0.78, 0.65, 0.72, 0.6],
          x: [0, -8, 5, -3, 0],
          y: [0, 5, -4, 6, 0],
        }}
        transition={{
          duration: 34 / speed,
          repeat: Infinity,
          ease: [0.42, 0, 0.58, 1],
          delay: 4,
        }}
      />

      {/* ═══════════════════════════════════════════════════════════════
          SOFT PINK ACCENT - Very subtle, no violet vines
      ═══════════════════════════════════════════════════════════════ */}
      <motion.div
        className="absolute"
        style={{
          width: '110%',
          height: '110%',
          top: '-5%',
          left: '-5%',
          background: `
            radial-gradient(ellipse 42% 38% at 70% 35%, 
              rgba(160, 115, 140, ${0.04 * intensity}) 0%, 
              rgba(130, 90, 110, ${0.02 * intensity}) 65%, 
              transparent 95%)
          `,
          filter: 'blur(105px)',
          mixBlendMode: 'screen',
          willChange: 'transform, opacity'
        }}
        animate={{
          scale: [1, 1.08, 1, 1.06, 1],
          opacity: [0.4, 0.55, 0.45, 0.5, 0.4],
        }}
        transition={{
          duration: 26 / speed,
          repeat: Infinity,
          ease: [0.4, 0, 0.6, 1],
          delay: 8,
        }}
      />

      {/* ═══════════════════════════════════════════════════════════════
          STELLAR CANVAS - All star populations
      ═══════════════════════════════════════════════════════════════ */}
      <StellarCanvas populations={populations} intensity={intensity} speed={speed} />

      {/* ═══════════════════════════════════════════════════════════════
          SOFT VOLUMETRIC GLOW - Gentle light diffusion
      ═══════════════════════════════════════════════════════════════ */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 55% 45% at 48% 45%, 
              rgba(180, 245, 245, ${0.025 * intensity}) 0%, 
              rgba(160, 235, 240, ${0.012 * intensity}) 55%, 
              transparent 85%)
          `,
          filter: 'blur(80px)',
          mixBlendMode: 'screen'
        }}
      />

      {/* ═══════════════════════════════════════════════════════════════
          EDGE VIGNETTE - Smooth cosmic frame
      ═══════════════════════════════════════════════════════════════ */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 92% 78% at 50% 50%, 
              transparent 0%, 
              transparent 35%,
              rgba(4, 10, 20, ${0.1 * intensity}) 55%,
              rgba(3, 7, 15, ${0.25 * intensity}) 72%,
              rgba(2, 5, 12, ${0.45 * intensity}) 87%,
              rgba(1, 3, 8, ${0.65 * intensity}) 100%
            )
          `
        }}
      />

      {/* ═══════════════════════════════════════════════════════════════
          CENTRAL CLARITY - UI readability
      ═══════════════════════════════════════════════════════════════ */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 68% 58% at 50% 46%, 
              rgba(210, 250, 248, ${0.014 * intensity}) 0%, 
              rgba(190, 245, 245, ${0.007 * intensity}) 45%,
              transparent 75%
            )
          `,
          mixBlendMode: 'screen'
        }}
      />
    </div>
  );
}