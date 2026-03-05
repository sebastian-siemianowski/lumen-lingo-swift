import React, { useMemo, useRef, useEffect, memo } from "react";
import { motion } from "framer-motion";
import { generateMicrostars, getPresetById } from "./cosmicPresets";

// ═══════════════════════════════════════════════════════════════
// EDGE OF ANDROMEDA GALAXY
// Premium edge-on galaxy with ~1200 microstars, spiraling motion,
// warm gold nucleus transitioning to cool violet halos
// ═══════════════════════════════════════════════════════════════

// Premium Perlin-like noise for organic distribution
const createNoise2D = (seed) => {
  const perm = new Array(512);
  const p = new Array(256);
  for (let i = 0; i < 256; i++) p[i] = i;
  
  // Seeded shuffle
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

// Stellar classification colors (realistic temperatures)
const STELLAR_COLORS = {
  // O-type: Blue giants (rare, very hot)
  O: [[155, 176, 255], [162, 185, 255], [170, 191, 255]],
  // B-type: Blue-white (hot)
  B: [[185, 206, 255], [192, 213, 255], [200, 220, 255]],
  // A-type: White (hot-warm)
  A: [[248, 248, 255], [255, 255, 255], [255, 252, 252]],
  // F-type: Yellow-white
  F: [[255, 252, 240], [255, 250, 235], [255, 248, 230]],
  // G-type: Yellow (like Sun)
  G: [[255, 244, 214], [255, 240, 200], [255, 235, 185]],
  // K-type: Orange
  K: [[255, 220, 180], [255, 210, 160], [255, 200, 145]],
  // M-type: Red (cool, common)
  M: [[255, 190, 150], [255, 180, 140], [255, 170, 130]],
};

// Custom star generation with realistic galactic distribution
const generateEdgeOnStars = (count, seed = 42) => {
  const stars = [];
  const noise = createNoise2D(seed);
  
  const seededRandom = (s, n) => {
    const x = Math.sin(s * 9999 + n * 7919) * 10000;
    return x - Math.floor(x);
  };

  // Generate background field stars first (very distant)
  const fieldStars = Math.floor(count * 0.25);
  for (let i = 0; i < fieldStars; i++) {
    const rand = (n) => seededRandom(seed + i * 3, n);
    
    // Uniform distribution with noise perturbation
    let x = rand(1);
    let y = rand(2);
    
    // Add organic clustering using noise
    const noiseVal = noise(x * 4, y * 4) * 0.08;
    x += noiseVal;
    y += noise(x * 5 + 100, y * 5) * 0.06;
    
    // Keep in bounds
    x = Math.max(0.02, Math.min(0.98, x));
    y = Math.max(0.02, Math.min(0.98, y));
    
    // Mostly faint, small stars
    const sizePow = Math.pow(rand(3), 2.5); // Heavy bias toward small
    const size = 0.2 + sizePow * 1.0;
    
    // Color - mostly white/blue-white for distant stars
    const colorRand = rand(4);
    let color;
    if (colorRand < 0.6) color = STELLAR_COLORS.A[Math.floor(rand(5) * 3)];
    else if (colorRand < 0.8) color = STELLAR_COLORS.B[Math.floor(rand(5) * 3)];
    else if (colorRand < 0.92) color = STELLAR_COLORS.F[Math.floor(rand(5) * 3)];
    else color = STELLAR_COLORS.G[Math.floor(rand(5) * 3)];
    
    stars.push({
      x, y,
      size,
      color,
      zone: 'field',
      layer: 3,
      layerDepth: 1,
      baseOpacity: 0.08 + rand(6) * 0.25,
      twinkleOffset: rand(7) * Math.PI * 2,
      twinkleSpeed: 0.15 + rand(8) * 0.4,
      twinkleAmplitude: 0.02 + rand(9) * 0.04,
      orbitalSpeed: 0,
      orbitalRadius: 0,
      orbitalAngle: 0
    });
  }

  // Galaxy nucleus stars (bright, warm, concentrated)
  const nucleusStars = Math.floor(count * 0.12);
  for (let i = 0; i < nucleusStars; i++) {
    const rand = (n) => seededRandom(seed + i * 7 + 1000, n);
    
    // 2D Gaussian distribution for nucleus
    const u1 = rand(1);
    const u2 = rand(2);
    const mag = Math.sqrt(-2 * Math.log(Math.max(0.0001, u1))) * 0.035;
    const angle = u2 * Math.PI * 2;
    
    let x = 0.5 + Math.cos(angle) * mag;
    let y = 0.5 + Math.sin(angle) * mag * 0.35; // Flattened
    
    // Add noise for organic feel
    x += noise(x * 20 + i, y * 20) * 0.008;
    y += noise(x * 20 + 50, y * 20 + i) * 0.004;
    
    // Nucleus stars are brighter
    const distFromCenter = Math.sqrt(Math.pow(x - 0.5, 2) + Math.pow((y - 0.5) * 2.5, 2));
    const centralBrightness = Math.max(0, 1 - distFromCenter * 8);
    
    const size = 0.5 + rand(3) * 1.2 + centralBrightness * 0.8;
    
    // Nucleus stars - warm center with some cool tones
    const colorRand = rand(4);
    let color;
    if (colorRand < 0.25) color = STELLAR_COLORS.F[Math.floor(rand(5) * 3)]; // Yellow-white
    else if (colorRand < 0.45) color = STELLAR_COLORS.G[Math.floor(rand(5) * 3)]; // Yellow (warm)
    else if (colorRand < 0.6) color = [255, 245, 220]; // Warm cream
    else if (colorRand < 0.8) color = STELLAR_COLORS.A[Math.floor(rand(5) * 3)]; // White
    else color = [240, 235, 250]; // Cool violet-white
    
    stars.push({
      x, y,
      size,
      color,
      zone: 'nucleus',
      layer: rand(6) < 0.4 ? 0 : 1,
      layerDepth: rand(6) < 0.4 ? 0 : 0.33,
      baseOpacity: 0.45 + rand(7) * 0.45 + centralBrightness * 0.2,
      twinkleOffset: rand(8) * Math.PI * 2,
      twinkleSpeed: 0.2 + rand(9) * 0.5,
      twinkleAmplitude: rand(10) < 0.08 ? 0.12 + rand(11) * 0.1 : 0.03 + rand(11) * 0.05,
      orbitalSpeed: 0.003 + rand(12) * 0.004,
      orbitalRadius: distFromCenter,
      orbitalAngle: Math.atan2((y - 0.5) * 2.5, x - 0.5)
    });
  }

  // Galactic disc stars (edge-on band with spiral structure hints)
  const discStars = Math.floor(count * 0.55); // Increased from 0.45 to 0.55
  for (let i = 0; i < discStars; i++) {
    const rand = (n) => seededRandom(seed + i * 11 + 2000, n);
    
    // Horizontal spread - GAUSSIAN distribution centered in middle (realistic galaxy)
    const u1 = rand(1);
    const u2 = rand(10);
    // Box-Muller for Gaussian distribution - more stars in center, tapering to edges
    const horzGauss = Math.sqrt(-2 * Math.log(Math.max(0.0001, u1))) * Math.cos(u2 * Math.PI * 2);
    // Sigma of ~0.18 means 68% of stars within center third, 95% within center 2/3
    let x = 0.5 + horzGauss * 0.18;
    
    // WIDER vertical band - thicker disc line for Andromeda look
    const v1 = rand(2);
    const v2 = rand(3);
    const vertGauss = Math.sqrt(-2 * Math.log(Math.max(0.0001, v1))) * Math.cos(v2 * Math.PI * 2);
    // Thicker disc spread for dense horizontal band
    let y = 0.5 + vertGauss * 0.065;
    
    // Add spiral arm hints using noise - more pronounced
    const spiralPhase = (x - 0.5) * 6 + noise(x * 3, 0) * 2;
    const spiralOffset = Math.sin(spiralPhase) * 0.018;
    y += spiralOffset;
    
    // Organic perturbation - increased for more spread
    x += noise(x * 15 + i * 0.1, y * 15) * 0.02;
    y += noise(x * 20 + 100, y * 20 + i * 0.1) * 0.012;
    
    const distFromCenter = Math.abs(x - 0.5);
    
    // Size varies - some bright young stars, many faint
    const sizePow = Math.pow(rand(4), 1.8);
    const size = 0.3 + sizePow * 1.5 + (1 - distFromCenter * 2) * 0.3;
    
    // Mixed stellar population - young (blue) in arms, old (yellow/red) throughout
    const colorRand = rand(5);
    const isYoung = rand(6) < 0.3; // Star-forming regions
    let color;
    
    if (isYoung) {
      // Young hot stars
      if (colorRand < 0.15) color = STELLAR_COLORS.O[Math.floor(rand(7) * 3)];
      else if (colorRand < 0.45) color = STELLAR_COLORS.B[Math.floor(rand(7) * 3)];
      else if (colorRand < 0.75) color = STELLAR_COLORS.A[Math.floor(rand(7) * 3)];
      else color = STELLAR_COLORS.F[Math.floor(rand(7) * 3)];
    } else {
      // Older population
      if (colorRand < 0.35) color = STELLAR_COLORS.A[Math.floor(rand(7) * 3)];
      else if (colorRand < 0.55) color = STELLAR_COLORS.F[Math.floor(rand(7) * 3)];
      else if (colorRand < 0.75) color = STELLAR_COLORS.G[Math.floor(rand(7) * 3)];
      else if (colorRand < 0.9) color = STELLAR_COLORS.K[Math.floor(rand(7) * 3)];
      else color = STELLAR_COLORS.M[Math.floor(rand(7) * 3)];
    }
    
    const layer = rand(8) < 0.3 ? 0 : (rand(9) < 0.5 ? 1 : 2);
    
    stars.push({
      x, y,
      size,
      color,
      zone: 'disc',
      layer,
      layerDepth: layer / 3,
      baseOpacity: 0.2 + rand(10) * 0.5 + (isYoung ? 0.15 : 0),
      twinkleOffset: rand(11) * Math.PI * 2,
      twinkleSpeed: 0.25 + rand(12) * 0.7,
      twinkleAmplitude: rand(13) < 0.06 ? 0.1 + rand(14) * 0.12 : 0.03 + rand(14) * 0.05,
      orbitalSpeed: 0.006 + rand(15) * 0.01 + (0.5 - distFromCenter) * 0.008,
      orbitalRadius: Math.sqrt(Math.pow(x - 0.5, 2) + Math.pow((y - 0.5) / 0.2, 2)),
      orbitalAngle: Math.atan2((y - 0.5) / 0.2, x - 0.5)
    });
  }

  // Halo stars (old, cool, diffuse)
  const haloStars = Math.floor(count * 0.08); // Reduced from 0.18 to 0.08
  for (let i = 0; i < haloStars; i++) {
    const rand = (n) => seededRandom(seed + i * 13 + 3000, n);
    
    // Spheroidal distribution
    const phi = rand(1) * Math.PI * 2;
    const cosTheta = rand(2) * 2 - 1;
    const sinTheta = Math.sqrt(1 - cosTheta * cosTheta);
    const r = 0.1 + Math.pow(rand(3), 0.6) * 0.38;
    
    let x = 0.5 + Math.cos(phi) * sinTheta * r;
    let y = 0.5 + cosTheta * r * 0.45; // Slightly flattened
    
    // Noise perturbation
    x += noise(x * 8 + i, y * 8) * 0.03;
    y += noise(x * 8 + 50, y * 8 + i) * 0.02;
    
    // Halo stars are generally faint
    const size = 0.25 + Math.pow(rand(4), 2) * 0.9;
    
    // Old stellar population - red giants, cool dwarfs
    const colorRand = rand(5);
    let color;
    if (colorRand < 0.25) color = STELLAR_COLORS.K[Math.floor(rand(6) * 3)];
    else if (colorRand < 0.45) color = STELLAR_COLORS.M[Math.floor(rand(6) * 3)];
    else if (colorRand < 0.7) color = STELLAR_COLORS.G[Math.floor(rand(6) * 3)];
    else if (colorRand < 0.88) color = [255, 245, 235]; // Warm
    else color = [230, 235, 255]; // Blue horizontal branch
    
    stars.push({
      x, y,
      size,
      color,
      zone: 'halo',
      layer: rand(7) < 0.3 ? 1 : (rand(8) < 0.6 ? 2 : 3),
      layerDepth: rand(7) < 0.3 ? 0.33 : (rand(8) < 0.6 ? 0.66 : 1),
      baseOpacity: 0.1 + rand(9) * 0.35,
      twinkleOffset: rand(10) * Math.PI * 2,
      twinkleSpeed: 0.15 + rand(11) * 0.35,
      twinkleAmplitude: 0.02 + rand(12) * 0.04,
      orbitalSpeed: 0,
      orbitalRadius: 0,
      orbitalAngle: 0
    });
  }

  return stars;
};

// ⭐ Deep parallax background layer - slower, blurrier for infinite depth
const DeepParallaxCanvas = memo(({ stars, intensity, speed }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const startTimeRef = useRef(Date.now());
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

    const driftSpd = speed * 0.33;

    const animate = () => {
      if (isPausedRef.current) { return; }
      const elapsed = (Date.now() - startTimeRef.current) / 1000 * driftSpd;
      ctx.clearRect(0, 0, width, height);

      // Very slow global drift
      const globalDriftX = Math.sin(elapsed * 0.08) * 6;
      const globalDriftY = Math.cos(elapsed * 0.06) * 4;

      stars.forEach((star) => {
        const twinklePhase = elapsed * star.twinkleSpeed + star.twinkleOffset;
        const twinkle = 0.6 + Math.sin(twinklePhase) * 0.3;
        const opacity = star.baseOpacity * twinkle * intensity;

        const x = star.x * width + globalDriftX;
        const y = star.y * height + globalDriftY;

        const [r, g, b] = star.color;

        // ⭐ Larger blur for deep stars - softer glow
        const glowRadius = star.size * 6;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${opacity * 0.4})`);
        gradient.addColorStop(0.3, `rgba(${r}, ${g}, ${b}, ${opacity * 0.15})`);
        gradient.addColorStop(0.6, `rgba(${r}, ${g}, ${b}, ${opacity * 0.05})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

        ctx.beginPath();
        ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
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
  }, [stars, intensity, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ isolation: 'isolate', filter: 'blur(1.5px)' }}
    />
  );
});

DeepParallaxCanvas.displayName = 'DeepParallaxCanvas';

// Enhanced Microstar Canvas with spiraling motion + quantum sparkle
const MicrostarCanvas = memo(({ stars, preset, intensity, speed }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const startTimeRef = useRef(Date.now());
  const isPausedRef = useRef(false);

  const motion_config = preset.motion || {};

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

    const driftSpd = (motion_config.driftSpeed || 1.0) * speed;
    const waveAmp = motion_config.waveAmplitude || { x: 12, y: 10 };
    const waveFreq = motion_config.waveFrequency || 0.0005;
    const hasRotation = motion_config.rotation?.enabled;
    const rotationSpeed = motion_config.rotation?.speed || 0.0001;
    const rotationDir = motion_config.rotation?.direction === 'clockwise' ? 1 : -1;
    const hasRadialDrift = motion_config.radialDrift?.enabled;
    const radialAmp = motion_config.radialDrift?.amplitude || 4;
    const radialSpeed = motion_config.radialDrift?.speed || 0.0002;
    const hasUndulating = motion_config.undulatingWave;
    const vertTurbulence = motion_config.verticalTurbulence || 0;

    // ⭐ Quantum sparkle - 5 special stars that brighten chaotically
    const quantumStarIndices = [47, 189, 412, 678, 1023].filter(i => i < stars.length);
    const quantumCycle = 14; // seconds

    const animate = () => {
      if (isPausedRef.current) { return; } // Completely stop loop when paused
      const elapsed = (Date.now() - startTimeRef.current) / 1000 * driftSpd;
      ctx.clearRect(0, 0, width, height);

      // ⭐ Cinematic easing applied to global drift
      const easedElapsed = elapsed * 0.25 + Math.sin(elapsed * 0.1) * 0.75;
      const globalDriftX = Math.sin(easedElapsed * 0.15) * waveAmp.x * 0.3;
      const globalDriftY = Math.cos(easedElapsed * 0.1) * waveAmp.y * 0.2;

      const centerX = width / 2;
      const centerY = height / 2;

      stars.forEach((star, i) => {
        // ⭐ Quantum sparkle effect - 2% brightness boost for 1.8s every ~14s
        let quantumBoost = 1;
        if (quantumStarIndices.includes(i)) {
          const cyclePhase = (elapsed % quantumCycle) / quantumCycle;
          const starPhaseOffset = (i * 0.1) % 1;
          const adjustedPhase = (cyclePhase + starPhaseOffset) % 1;
          if (adjustedPhase < 0.13) { // ~1.8s window in 14s cycle
            quantumBoost = 1 + 0.02 * Math.sin(adjustedPhase / 0.13 * Math.PI);
          }
        }
        const layerMultiplier = 0.5 + star.layerDepth * 0.5;
        
        // Twinkle calculation
        const twinklePhase = elapsed * star.twinkleSpeed + star.twinkleOffset;
        const twinkle = 0.5 + Math.sin(twinklePhase) * star.twinkleAmplitude + 
                        Math.sin(twinklePhase * 1.7) * star.twinkleAmplitude * 0.5;
        // Intensity breathing - stars fade in/out organically + quantum boost
        const intensityBreath = 0.7 + Math.sin(elapsed * 0.12 + star.twinkleOffset) * 0.2 + Math.sin(elapsed * 0.08 + star.twinkleOffset * 1.5) * 0.1;
        const opacity = star.baseOpacity * twinkle * intensity * intensityBreath * quantumBoost * (0.6 + star.layerDepth * 0.4);

        // Size pulsing with intensity breathing (like Lagoon Nebula)
        const breathePhase = elapsed * 0.15 + star.twinkleOffset * 0.5;
        const breathe = 1 + Math.sin(breathePhase) * 0.12 + Math.sin(breathePhase * 0.7) * 0.08;
        const sizePulse = 1 + Math.sin(twinklePhase * 0.6) * 0.08;
        const size = star.size * sizePulse * breathe;

        let x, y;

        // Disc stars - flowing motion along the galactic plane
        if (star.zone === 'disc') {
          const starPhase = i * 0.1 + star.twinkleOffset;
          
          // Stronger flowing drift along the disc
          const flowSpeed = 0.4 + star.layerDepth * 0.3;
          const localDriftX = Math.sin(elapsed * flowSpeed + starPhase) * 18 * layerMultiplier;
          const localDriftY = Math.cos(elapsed * flowSpeed * 0.7 + starPhase * 1.3) * 8 * layerMultiplier;
          
          // Gentle galactic rotation feel
          const slowRotation = elapsed * (star.orbitalSpeed || 0.005) * 0.8;
          const distFromCenter = Math.abs(star.x - 0.5);
          const rotDriftX = Math.cos(slowRotation + star.orbitalAngle) * (8 + distFromCenter * 15);
          const rotDriftY = Math.sin(slowRotation + star.orbitalAngle) * 3;
          
          // Subtle vertical undulation (galactic wave)
          const waveY = Math.sin(elapsed * 0.25 + star.x * 8) * 4;
          
          x = star.x * width + globalDriftX * layerMultiplier + localDriftX + rotDriftX;
          y = star.y * height + globalDriftY * layerMultiplier + localDriftY + rotDriftY + waveY;
        } else if (star.orbitalSpeed > 0 && star.zone === 'nucleus') {
          // Nucleus stars - tighter orbital motion
          const orbitalAngle = star.orbitalAngle + elapsed * star.orbitalSpeed * 1.5;
          const baseRadius = star.orbitalRadius;
          
          const breathe = 1 + Math.sin(elapsed * 0.15) * 0.03;
          
          x = centerX + Math.cos(orbitalAngle) * baseRadius * width * 0.5 * breathe;
          y = centerY + Math.sin(orbitalAngle) * baseRadius * height * 0.15 * breathe;
          
          const wobbleX = Math.sin(elapsed * 0.5 + star.twinkleOffset) * 4 * layerMultiplier;
          const wobbleY = Math.cos(elapsed * 0.4 + star.twinkleOffset * 1.3) * 2 * layerMultiplier;
          x += wobbleX;
          y += wobbleY;
        } else {
          // Halo and field stars - gentle wandering drift
          const starPhase = i * 0.1 + star.twinkleOffset;
          const driftSpeed = 0.3 + star.layerDepth * 0.2;
          const localDriftX = Math.sin(elapsed * driftSpeed + starPhase) * 12 * layerMultiplier;
          const localDriftY = Math.cos(elapsed * driftSpeed * 0.8 + starPhase * 1.3) * 10 * layerMultiplier;
          
          // Slow circular wander
          const wanderAngle = elapsed * 0.08 + starPhase;
          const wanderX = Math.cos(wanderAngle) * 6;
          const wanderY = Math.sin(wanderAngle) * 5;
          
          x = star.x * width + globalDriftX * layerMultiplier + localDriftX + wanderX;
          y = star.y * height + globalDriftY * layerMultiplier + localDriftY + wanderY;
        }

        // Skip if off screen
        if (x < -20 || x > width + 20 || y < -20 || y > height + 20) return;

        const [r, g, b] = star.color;
        
        // ⭐ Color-shifting glow - stars slowly transition through hues
        const colorCycleSpeed = 0.06 + (i % 7) * 0.01; // Varied speeds per star
        const colorPhase = elapsed * colorCycleSpeed + star.twinkleOffset * 2;
        const colorShiftIntensity = 0.15 + Math.sin(elapsed * 0.03 + i * 0.5) * 0.1; // 5-25% shift
        
        // Cycle through warm → cool → warm colors
        const hueShift = Math.sin(colorPhase) * colorShiftIntensity;
        const warmShift = Math.max(0, hueShift); // Positive = warmer (more red/yellow)
        const coolShift = Math.max(0, -hueShift); // Negative = cooler (more blue/violet)
        
        // Apply color shift
        const shiftedR = Math.min(255, Math.round(r + warmShift * 40 - coolShift * 30));
        const shiftedG = Math.min(255, Math.round(g + warmShift * 20 - coolShift * 10));
        const shiftedB = Math.min(255, Math.round(b - warmShift * 20 + coolShift * 50));
        
        // Zone-based color blending with background
        let blendR = shiftedR, blendG = shiftedG, blendB = shiftedB;
        
        // Nucleus stars blend with warm gold (galactic core)
        if (star.zone === 'nucleus') {
          blendR = Math.round(r * 0.88 + 255 * 0.12);
          blendG = Math.round(g * 0.88 + 230 * 0.12);
          blendB = Math.round(b * 0.92 + 180 * 0.08);
        }
        // Disc stars get subtle violet/magenta tint
        else if (star.zone === 'disc') {
          const tintStrength = 0.08;
          blendR = Math.round(r * (1 - tintStrength) + 200 * tintStrength);
          blendG = Math.round(g * (1 - tintStrength) + 160 * tintStrength);
          blendB = Math.round(b * (1 - tintStrength) + 220 * tintStrength);
        }
        // Halo stars blend with cool violet
        else if (star.zone === 'halo') {
          const tintStrength = 0.12;
          blendR = Math.round(r * (1 - tintStrength) + 180 * tintStrength);
          blendG = Math.round(g * (1 - tintStrength) + 150 * tintStrength);
          blendB = Math.round(b * (1 - tintStrength) + 220 * tintStrength);
        }
        // Field stars get deep space blue tint
        else {
          const tintStrength = 0.1;
          blendR = Math.round(r * (1 - tintStrength) + 160 * tintStrength);
          blendG = Math.round(g * (1 - tintStrength) + 170 * tintStrength);
          blendB = Math.round(b * (1 - tintStrength) + 210 * tintStrength);
        }

        // Atmospheric diffusion glow (larger, softer)
        const diffuseRadius = size * 5;
        const diffuseGradient = ctx.createRadialGradient(x, y, 0, x, y, diffuseRadius);
        diffuseGradient.addColorStop(0, `rgba(${blendR}, ${blendG}, ${blendB}, ${opacity * 0.15})`);
        diffuseGradient.addColorStop(0.3, `rgba(${blendR}, ${blendG}, ${blendB}, ${opacity * 0.06})`);
        diffuseGradient.addColorStop(0.6, `rgba(${blendR}, ${blendG}, ${blendB}, ${opacity * 0.02})`);
        diffuseGradient.addColorStop(1, `rgba(${blendR}, ${blendG}, ${blendB}, 0)`);

        ctx.beginPath();
        ctx.arc(x, y, diffuseRadius, 0, Math.PI * 2);
        ctx.fillStyle = diffuseGradient;
        ctx.fill();

        // Main glow with shifted color
        const glowRadius = size * 2.8;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
        gradient.addColorStop(0, `rgba(${shiftedR}, ${shiftedG}, ${shiftedB}, ${opacity * 0.55})`);
        gradient.addColorStop(0.25, `rgba(${shiftedR}, ${shiftedG}, ${shiftedB}, ${opacity * 0.3})`);
        gradient.addColorStop(0.5, `rgba(${blendR}, ${blendG}, ${blendB}, ${opacity * 0.12})`);
        gradient.addColorStop(0.75, `rgba(${blendR}, ${blendG}, ${blendB}, ${opacity * 0.04})`);
        gradient.addColorStop(1, `rgba(${blendR}, ${blendG}, ${blendB}, 0)`);

        ctx.beginPath();
        ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core with hot center transitioning to shifted star color
        const coreRadius = size * 1.1;
        const coreGradient = ctx.createRadialGradient(x, y, 0, x, y, coreRadius);
        coreGradient.addColorStop(0, `rgba(255, 255, 255, ${Math.min(1, opacity * 1.15)})`);
        coreGradient.addColorStop(0.15, `rgba(255, 253, 250, ${opacity * 0.95})`);
        coreGradient.addColorStop(0.35, `rgba(${Math.min(255, shiftedR + 25)}, ${Math.min(255, shiftedG + 20)}, ${Math.min(255, shiftedB + 15)}, ${opacity * 0.7})`);
        coreGradient.addColorStop(0.6, `rgba(${shiftedR}, ${shiftedG}, ${shiftedB}, ${opacity * 0.4})`);
        coreGradient.addColorStop(1, `rgba(${shiftedR}, ${shiftedG}, ${shiftedB}, 0)`);

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

        // Subtle cross-diffraction for very bright stars
        if (star.baseOpacity > 0.65 && size > 1.2) {
          ctx.save();
          ctx.globalAlpha = opacity * 0.18;
          
          const spikeLength = size * 3;
          const spikeGrad = ctx.createLinearGradient(
            x - spikeLength, y, x + spikeLength, y
          );
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
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [stars, preset, intensity, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ isolation: 'isolate' }}
    />
  );
});

MicrostarCanvas.displayName = 'EdgeOfAndromedaMicrostarCanvas';

// Gradient Layers - exact copy from CosmicBackground
const GradientLayers = memo(({ preset, intensity, speed }) => {
  const layers = preset.gradientLayers || [];
  
  return (
    <>
      {layers.map((layer, idx) => {
        if (layer.type === 'radial') {
          const colors = layer.colors.map(c => {
            const opacity = (c.opacity || 0) * intensity;
            return `rgba(${c.color[0]}, ${c.color[1]}, ${c.color[2]}, ${opacity}) ${c.stop}%`;
          }).join(', ');

          const gradient = `radial-gradient(ellipse ${layer.size.w}% ${layer.size.h}% at ${layer.position.x}% ${layer.position.y}%, ${colors})`;

          return (
            <motion.div
              key={idx}
              className="absolute inset-0"
              style={{
                background: gradient,
                filter: layer.blur ? `blur(${layer.blur}px)` : undefined,
                transform: layer.rotation ? `rotate(${layer.rotation}deg)` : undefined
              }}
              animate={layer.animated ? {
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8]
              } : undefined}
              transition={layer.animated ? {
                duration: 15 / speed,
                repeat: Infinity,
                ease: "easeInOut"
              } : undefined}
            />
          );
        }

        if (layer.type === 'conic') {
          const stops = layer.colors.map(c => {
            const opacity = (c.opacity || 0) * intensity;
            return `rgba(${c.color[0]}, ${c.color[1]}, ${c.color[2]}, ${opacity}) ${c.angle}deg`;
          }).join(', ');

          return (
            <motion.div
              key={idx}
              className="absolute"
              style={{
                width: `${layer.outerRadius * 2}%`,
                height: `${layer.outerRadius * 2}%`,
                left: `${50 - layer.outerRadius}%`,
                top: `${50 - layer.outerRadius}%`,
                background: `conic-gradient(from 0deg at 50% 50%, ${stops})`,
                filter: layer.blur ? `blur(${layer.blur}px)` : undefined,
                borderRadius: '50%',
                WebkitMask: `radial-gradient(circle, transparent ${layer.innerRadius / layer.outerRadius * 100}%, black ${layer.innerRadius / layer.outerRadius * 100 + 5}%)`,
                mask: `radial-gradient(circle, transparent ${layer.innerRadius / layer.outerRadius * 100}%, black ${layer.innerRadius / layer.outerRadius * 100 + 5}%)`
              }}
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 300 / speed,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          );
        }

        return null;
      })}
    </>
  );
});

GradientLayers.displayName = 'EdgeOfAndromedaGradientLayers';

// Enhanced Effects with color diversity + edge color drift
const CosmicEffects = memo(({ intensity }) => {
  return (
    <>
      {/* Deep space vignette with violet undertones */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 95% 80% at 50% 50%, 
              transparent 0%, 
              transparent 25%,
              rgba(12, 8, 25, ${0.08 * intensity}) 40%,
              rgba(8, 5, 20, ${0.2 * intensity}) 55%,
              rgba(5, 3, 15, ${0.4 * intensity}) 70%,
              rgba(3, 2, 10, ${0.6 * intensity}) 85%,
              rgba(2, 1, 6, ${0.75 * intensity}) 100%
            )
          `
        }}
      />

      {/* ⭐ Edge color drift - deep indigo top-left */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 5% 10%, rgba(30, 20, 70, ${0.04 * intensity}) 0%, transparent 60%)`,
          mixBlendMode: 'screen'
        }}
      />
      
      {/* ⭐ Edge color drift - faint wine-red bottom-right */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 55% 45% at 95% 90%, rgba(60, 20, 35, ${0.035 * intensity}) 0%, transparent 55%)`,
          mixBlendMode: 'screen'
        }}
      />
      
      {/* ⭐ Edge color drift - muted midnight blue top-right */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 50% 40% at 92% 8%, rgba(15, 25, 50, ${0.03 * intensity}) 0%, transparent 50%)`,
          mixBlendMode: 'screen'
        }}
      />

      {/* ⭐ ENHANCED: Warm nucleus glow - 10% brighter with softer falloff */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 22% 12% at 50% 50%, 
              rgba(220, 195, 180, ${0.042 * intensity}) 0%, 
              rgba(200, 175, 170, ${0.025 * intensity}) 35%,
              rgba(180, 160, 165, ${0.012 * intensity}) 55%,
              transparent 75%
            )
          `,
          mixBlendMode: 'screen'
        }}
      />

      {/* Central clarity with violet tint */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 50% 35% at 50% 50%, 
              rgba(220, 210, 230, ${0.006 * intensity}) 0%, 
              rgba(200, 190, 220, ${0.003 * intensity}) 35%,
              transparent 60%
            )
          `,
          mixBlendMode: 'screen'
        }}
      />

      {/* Violet halo accents - upper */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 40% at 50% 35%, 
              rgba(160, 120, 200, ${0.025 * intensity}) 0%, 
              rgba(140, 100, 180, ${0.012 * intensity}) 40%,
              transparent 70%
            )
          `,
          filter: 'blur(40px)',
          mixBlendMode: 'screen'
        }}
      />

      {/* Violet halo accents - lower */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 65% 35% at 50% 65%, 
              rgba(150, 110, 190, ${0.02 * intensity}) 0%, 
              rgba(130, 90, 170, ${0.01 * intensity}) 45%,
              transparent 70%
            )
          `,
          filter: 'blur(35px)',
          mixBlendMode: 'screen'
        }}
      />

      {/* Subtle blue edges for depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 90% 15% at 15% 50%, rgba(100, 140, 200, ${0.018 * intensity}) 0%, transparent 50%),
            radial-gradient(ellipse 90% 15% at 85% 50%, rgba(110, 130, 190, ${0.015 * intensity}) 0%, transparent 50%)
          `,
          filter: 'blur(50px)',
          mixBlendMode: 'screen'
        }}
      />

      {/* Cosmic dust lanes hint */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 4% at 50% 51%, 
              rgba(15, 10, 25, ${0.15 * intensity}) 0%, 
              rgba(10, 6, 18, ${0.08 * intensity}) 50%,
              transparent 80%
            )
          `
        }}
      />

      {/* HDR bloom with violet tones */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 40% 20% at 50% 50%, rgba(180, 160, 200, ${0.012 * intensity}) 0%, transparent 50%),
            radial-gradient(ellipse 30% 25% at 52% 48%, rgba(170, 155, 195, ${0.008 * intensity}) 0%, transparent 45%)
          `,
          filter: 'blur(50px)',
          mixBlendMode: 'screen',
          opacity: 0.6
        }}
      />
    </>
  );
});

CosmicEffects.displayName = 'EdgeOfAndromedaCosmicEffects';

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════

export default function EdgeOfAndromedaGalaxy({ intensity = 1.0, speed = 1.0 }) {
  // Get the preset config
  const preset = getPresetById('galaxy_02');
  
  // Generate stars using custom edge-on distribution with realistic stellar populations
  const stars = useMemo(() => {
    return generateEdgeOnStars(1400, 42);
  }, []);

  // ⭐ Secondary deep parallax layer - 15% density, 1/3 speed, larger blur
  const deepStars = useMemo(() => {
    const count = Math.floor(1400 * 0.15);
    const seed = 77;
    const seededRandom = (s, n) => {
      const x = Math.sin(s * 9999 + n * 7919) * 10000;
      return x - Math.floor(x);
    };
    
    const result = [];
    for (let i = 0; i < count; i++) {
      const rand = (n) => seededRandom(seed + i * 5, n);
      result.push({
        x: rand(1),
        y: rand(2),
        size: 0.4 + rand(3) * 0.8,
        color: [200 + rand(4) * 55, 200 + rand(5) * 55, 220 + rand(6) * 35],
        baseOpacity: 0.04 + rand(7) * 0.08,
        twinkleOffset: rand(8) * Math.PI * 2,
        twinkleSpeed: 0.08 + rand(9) * 0.12,
      });
    }
    return result;
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden" 
      style={{ zIndex: 0, isolation: 'isolate' }}
    >
      {/* Deep cosmic void with violet undertones */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 150% 130% at 50% 50%, 
              rgba(12, 8, 28, 0) 0%, 
              rgba(8, 5, 22, 0.5) 25%,
              rgba(6, 4, 18, 0.75) 45%,
              rgba(4, 3, 14, 0.9) 65%,
              rgba(2, 1, 8, 1) 100%
            )
          `
        }}
      />
      
      {/* Pleasant violet ambience - subtle */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 120% 100% at 50% 50%, 
              rgba(35, 18, 55, 0.12) 0%, 
              rgba(28, 15, 45, 0.09) 30%,
              rgba(20, 12, 38, 0.06) 50%,
              transparent 75%
            )
          `
        }}
      />
      
      {/* Warm central region undertone - very subtle */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 35% 18% at 50% 50%, 
              rgba(40, 25, 35, 0.06) 0%, 
              rgba(30, 20, 28, 0.03) 40%,
              transparent 60%
            )
          `
        }}
      />
      
      {/* Deep violet outer haze - subdued */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 80% at 50% 50%, 
              transparent 25%,
              rgba(25, 15, 45, 0.1) 50%,
              rgba(18, 12, 38, 0.07) 70%,
              rgba(12, 8, 30, 0.05) 90%
            )
          `
        }}
      />

      {/* ═══ NEBULA GAS CLOUDS - OPTIMIZED ═══ */}
      
      {/* Combined warm core + disc glow (single element) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 25% 12% at 50% 50%, rgba(255, 225, 170, 0.2) 0%, rgba(255, 200, 140, 0.08) 50%, transparent 80%),
            radial-gradient(ellipse 65% 5% at 50% 50%, rgba(255, 210, 170, 0.1) 0%, rgba(200, 160, 160, 0.04) 60%, transparent 90%)
          `,
          filter: 'blur(18px)',
          mixBlendMode: 'screen'
        }}
      />

      {/* Combined violet halos (single element with multiple gradients) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 50% 40% at 32% 38%, rgba(140, 90, 180, 0.12) 0%, rgba(110, 65, 150, 0.04) 50%, transparent 75%),
            radial-gradient(ellipse 45% 35% at 68% 40%, rgba(150, 100, 190, 0.1) 0%, rgba(120, 70, 160, 0.035) 55%, transparent 80%),
            radial-gradient(ellipse 60% 45% at 50% 62%, rgba(130, 85, 175, 0.09) 0%, rgba(100, 60, 145, 0.03) 55%, transparent 80%)
          `,
          filter: 'blur(40px)',
          mixBlendMode: 'screen'
        }}
      />

      {/* Combined magenta accents (single element) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 35% 45% at 22% 50%, rgba(160, 75, 145, 0.08) 0%, rgba(140, 55, 125, 0.025) 55%, transparent 75%),
            radial-gradient(ellipse 30% 40% at 78% 52%, rgba(155, 70, 140, 0.07) 0%, rgba(135, 50, 120, 0.02) 55%, transparent 75%)
          `,
          filter: 'blur(45px)',
          mixBlendMode: 'screen'
        }}
      />

      {/* Gradient layers from preset */}
      <GradientLayers preset={preset} intensity={intensity} speed={speed} />

      {/* ⭐ Deep parallax layer - infinite depth illusion */}
      <DeepParallaxCanvas stars={deepStars} intensity={intensity} speed={speed} />

      {/* Microstar field */}
      <MicrostarCanvas stars={stars} preset={preset} intensity={intensity} speed={speed} />

      {/* Common effects */}
      <CosmicEffects intensity={intensity} />
    </div>
  );
}