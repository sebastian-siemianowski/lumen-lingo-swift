import React, { useMemo, useRef, useEffect, memo } from "react";
import { motion } from "framer-motion";

// ═══════════════════════════════════════════════════════════════
// SPIRAL HALO GALAXY
// Face-on spiral galaxy with rich microstars, color-shifting glow,
// organic breathing motion, and premium cinematic effects
// ═══════════════════════════════════════════════════════════════

// Perlin-like noise for organic distribution
const createNoise2D = (seed) => {
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

// Stellar classification colors (realistic)
const STELLAR_COLORS = {
  O: [[155, 176, 255], [162, 185, 255], [170, 191, 255]], // Blue giants
  B: [[185, 206, 255], [192, 213, 255], [200, 220, 255]], // Blue-white
  A: [[248, 248, 255], [255, 255, 255], [255, 252, 252]], // White
  F: [[255, 252, 240], [255, 250, 235], [255, 248, 230]], // Yellow-white
  G: [[255, 244, 214], [255, 240, 200], [255, 235, 185]], // Yellow
  K: [[255, 220, 180], [255, 210, 160], [255, 200, 145]], // Orange
  M: [[255, 190, 150], [255, 180, 140], [255, 170, 130]], // Red
};

// Generate spiral galaxy stars with realistic distribution
const generateSpiralStars = (count, seed = 42) => {
  const stars = [];
  const noise = createNoise2D(seed);
  const isMobile = window.innerWidth < 640;
  
  const seededRandom = (s, n) => {
    const x = Math.sin(s * 9999 + n * 7919) * 10000;
    return x - Math.floor(x);
  };

  // Background field stars (20%)
  const fieldStars = Math.floor(count * 0.2);
  for (let i = 0; i < fieldStars; i++) {
    const rand = (n) => seededRandom(seed + i * 3, n);
    
    let x = rand(1);
    let y = rand(2);
    x += noise(x * 4, y * 4) * 0.08;
    y += noise(x * 5 + 100, y * 5) * 0.06;
    x = Math.max(0.02, Math.min(0.98, x));
    y = Math.max(0.02, Math.min(0.98, y));
    
    const sizePow = Math.pow(rand(3), 2.5);
    const baseSize = 0.4 + sizePow * 1.2;
    const size = baseSize * (isMobile ? 2.5 : 1);
    
    const colorRand = rand(4);
    let color;
    if (colorRand < 0.6) color = STELLAR_COLORS.A[Math.floor(rand(5) * 3)];
    else if (colorRand < 0.8) color = STELLAR_COLORS.B[Math.floor(rand(5) * 3)];
    else color = STELLAR_COLORS.F[Math.floor(rand(5) * 3)];
    
    stars.push({
      x, y,
      size,
      color,
      zone: 'field',
      layer: 3,
      layerDepth: 1,
      baseOpacity: isMobile ? 0.18 + rand(6) * 0.28 : 0.12 + rand(6) * 0.25,
      twinkleOffset: rand(7) * Math.PI * 2,
      twinkleSpeed: 0.15 + rand(8) * 0.4,
      twinkleAmplitude: 0.02 + rand(9) * 0.04,
      spiralArm: -1,
      distFromCenter: Math.sqrt(Math.pow(x - 0.5, 2) + Math.pow(y - 0.5, 2))
    });
  }

  // Bright galactic core (15%)
  const coreStars = Math.floor(count * 0.15);
  for (let i = 0; i < coreStars; i++) {
    const rand = (n) => seededRandom(seed + i * 7 + 1000, n);
    
    // 2D Gaussian for core
    const u1 = rand(1);
    const u2 = rand(2);
    const mag = Math.sqrt(-2 * Math.log(Math.max(0.0001, u1))) * 0.06;
    const angle = u2 * Math.PI * 2;
    
    let x = 0.5 + Math.cos(angle) * mag;
    let y = 0.5 + Math.sin(angle) * mag;
    
    x += noise(x * 15 + i, y * 15) * 0.01;
    y += noise(x * 15 + 50, y * 15 + i) * 0.01;
    
    const distFromCenter = Math.sqrt(Math.pow(x - 0.5, 2) + Math.pow(y - 0.5, 2));
    const centralBrightness = Math.max(0, 1 - distFromCenter * 6);
    
    const baseSize = 0.6 + rand(3) * 1.4 + centralBrightness * 1.0;
    const size = baseSize * (isMobile ? 2.8 : 1);
    
    const colorRand = rand(4);
    let color;
    if (colorRand < 0.3) color = [255, 250, 240]; // Warm white
    else if (colorRand < 0.5) color = STELLAR_COLORS.F[Math.floor(rand(5) * 3)];
    else if (colorRand < 0.7) color = STELLAR_COLORS.G[Math.floor(rand(5) * 3)];
    else color = STELLAR_COLORS.A[Math.floor(rand(5) * 3)];
    
    stars.push({
      x, y,
      size,
      color,
      zone: 'core',
      layer: rand(6) < 0.4 ? 0 : 1,
      layerDepth: rand(6) < 0.4 ? 0 : 0.33,
      baseOpacity: isMobile ? 0.4 + rand(7) * 0.4 + centralBrightness * 0.25 : 0.5 + rand(7) * 0.4 + centralBrightness * 0.2,
      twinkleOffset: rand(8) * Math.PI * 2,
      twinkleSpeed: 0.2 + rand(9) * 0.5,
      twinkleAmplitude: rand(10) < 0.1 ? 0.12 + rand(11) * 0.1 : 0.03 + rand(11) * 0.05,
      spiralArm: -1,
      distFromCenter
    });
  }

  // Spiral arm stars (55%)
  const armStars = Math.floor(count * 0.55);
  const numArms = 4;
  const armSpread = 0.08; // Angular spread of arm - tighter for clearer definition
  
  for (let i = 0; i < armStars; i++) {
    const rand = (n) => seededRandom(seed + i * 11 + 2000, n);
    
    const armIndex = Math.floor(rand(1) * numArms);
    const armBaseAngle = (armIndex / numArms) * Math.PI * 2;
    
    // Distance from center - Gaussian biased toward middle distances
    const u1 = rand(2);
    const u2 = rand(3);
    const distGauss = Math.sqrt(-2 * Math.log(Math.max(0.0001, u1))) * Math.cos(u2 * Math.PI * 2);
    const distFromCenter = 0.12 + Math.abs(distGauss) * 0.25; // 0.12 to ~0.37
    
    // Logarithmic spiral: angle increases with distance
    const spiralTightness = 0.5;
    const spiralAngle = armBaseAngle + distFromCenter * spiralTightness * 18;
    
    // Add spread perpendicular to arm
    const spreadAngle = spiralAngle + (rand(4) - 0.5) * armSpread * 2;
    const spreadDist = distFromCenter + (rand(5) - 0.5) * 0.04;
    
    let x = 0.5 + Math.cos(spreadAngle) * spreadDist;
    let y = 0.5 + Math.sin(spreadAngle) * spreadDist;
    
    // Organic noise perturbation
    x += noise(x * 12 + i * 0.1, y * 12) * 0.025;
    y += noise(x * 12 + 100, y * 12 + i * 0.1) * 0.025;
    
    x = Math.max(0.05, Math.min(0.95, x));
    y = Math.max(0.05, Math.min(0.95, y));
    
    const sizePow = Math.pow(rand(6), 1.6);
    const baseSize = 0.35 + sizePow * 1.8;
    const size = baseSize * (isMobile ? 3.2 : 1.5);
    
    // Mixed stellar population - young blue stars in arms
    const colorRand = rand(7);
    const isYoung = rand(8) < 0.4;
    let color;
    
    if (isYoung) {
      if (colorRand < 0.2) color = STELLAR_COLORS.O[Math.floor(rand(9) * 3)];
      else if (colorRand < 0.5) color = STELLAR_COLORS.B[Math.floor(rand(9) * 3)];
      else if (colorRand < 0.8) color = STELLAR_COLORS.A[Math.floor(rand(9) * 3)];
      else color = STELLAR_COLORS.F[Math.floor(rand(9) * 3)];
    } else {
      if (colorRand < 0.35) color = STELLAR_COLORS.A[Math.floor(rand(9) * 3)];
      else if (colorRand < 0.55) color = STELLAR_COLORS.F[Math.floor(rand(9) * 3)];
      else if (colorRand < 0.75) color = STELLAR_COLORS.G[Math.floor(rand(9) * 3)];
      else if (colorRand < 0.9) color = STELLAR_COLORS.K[Math.floor(rand(9) * 3)];
      else color = STELLAR_COLORS.M[Math.floor(rand(9) * 3)];
    }
    
    const layer = rand(10) < 0.3 ? 0 : (rand(11) < 0.5 ? 1 : 2);
    
    stars.push({
      x, y,
      size,
      color,
      zone: 'arm',
      layer,
      layerDepth: layer / 3,
      baseOpacity: isMobile ? 0.22 + rand(12) * 0.45 + (isYoung ? 0.15 : 0) : 0.2 + rand(12) * 0.5 + (isYoung ? 0.15 : 0),
      twinkleOffset: rand(13) * Math.PI * 2,
      twinkleSpeed: 0.25 + rand(14) * 0.7,
      twinkleAmplitude: rand(15) < 0.08 ? 0.1 + rand(16) * 0.12 : 0.03 + rand(16) * 0.05,
      spiralArm: armIndex,
      spiralAngle: spreadAngle,
      distFromCenter: spreadDist
    });
  }

  // Outer halo stars (10%)
  const haloStars = Math.floor(count * 0.1);
  for (let i = 0; i < haloStars; i++) {
    const rand = (n) => seededRandom(seed + i * 13 + 3000, n);
    
    const angle = rand(1) * Math.PI * 2;
    const r = 0.3 + Math.pow(rand(2), 0.5) * 0.2;
    
    let x = 0.5 + Math.cos(angle) * r;
    let y = 0.5 + Math.sin(angle) * r;
    
    x += noise(x * 6 + i, y * 6) * 0.04;
    y += noise(x * 6 + 50, y * 6 + i) * 0.04;
    
    const baseSize = 0.4 + Math.pow(rand(3), 2) * 1.0;
    const size = baseSize * (isMobile ? 2.3 : 1);
    
    const colorRand = rand(4);
    let color;
    if (colorRand < 0.3) color = STELLAR_COLORS.K[Math.floor(rand(5) * 3)];
    else if (colorRand < 0.5) color = STELLAR_COLORS.M[Math.floor(rand(5) * 3)];
    else if (colorRand < 0.75) color = STELLAR_COLORS.G[Math.floor(rand(5) * 3)];
    else color = [230, 235, 255]; // Blue horizontal branch
    
    stars.push({
      x, y,
      size,
      color,
      zone: 'halo',
      layer: rand(6) < 0.3 ? 1 : 2,
      layerDepth: rand(6) < 0.3 ? 0.33 : 0.66,
      baseOpacity: isMobile ? 0.18 + rand(7) * 0.35 : 0.18 + rand(7) * 0.35,
      twinkleOffset: rand(8) * Math.PI * 2,
      twinkleSpeed: 0.15 + rand(9) * 0.35,
      twinkleAmplitude: 0.02 + rand(10) * 0.04,
      spiralArm: -1,
      distFromCenter: r
    });
  }

  return stars;
};

// Deep parallax background layer
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
      if (isPausedRef.current) { return; } // Completely stop loop when paused
      const elapsed = (Date.now() - startTimeRef.current) / 1000 * driftSpd;
      ctx.clearRect(0, 0, width, height);

      const globalDriftX = Math.sin(elapsed * 0.08) * 6;
      const globalDriftY = Math.cos(elapsed * 0.06) * 4;

      stars.forEach((star) => {
        const twinklePhase = elapsed * star.twinkleSpeed + star.twinkleOffset;
        const twinkle = 0.6 + Math.sin(twinklePhase) * 0.3;
        const opacity = star.baseOpacity * twinkle * intensity;

        const x = star.x * width + globalDriftX;
        const y = star.y * height + globalDriftY;

        const [r, g, b] = star.color;

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

    // Pause during collapse - event-based for immediate response
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

// Main Microstar Canvas with enhanced motion and color-shifting
const MicrostarCanvas = memo(({ stars, intensity, speed }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const startTimeRef = useRef(Date.now());
  const isPausedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width, height, isMobile;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      isMobile = width < 640;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      if (isPausedRef.current) { return; } // Completely stop loop when paused
      const elapsed = (Date.now() - startTimeRef.current) / 1000 * speed;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Global slow CLOCKWISE rotation of entire galaxy
      const globalRotation = -elapsed * 0.015; // Negative for clockwise
      
      // Global breathing
      const breathe = 1 + Math.sin(elapsed * 0.1) * 0.02;

      // Global drift
      const globalDriftX = Math.sin(elapsed * 0.12) * 10;
      const globalDriftY = Math.cos(elapsed * 0.09) * 8;

      stars.forEach((star, i) => {
        const layerMultiplier = 0.5 + star.layerDepth * 0.5;
        
        // Enhanced twinkle with more drama
        const twinklePhase = elapsed * star.twinkleSpeed + star.twinkleOffset;
        const twinkle = 0.65 + Math.sin(twinklePhase) * star.twinkleAmplitude * 1.3 + 
                        Math.sin(twinklePhase * 1.7) * star.twinkleAmplitude * 0.6;
        
        // Intensity breathing with stronger peaks
        const intensityBreath = 0.8 + Math.sin(elapsed * 0.12 + star.twinkleOffset) * 0.25 + 
                                Math.sin(elapsed * 0.08 + star.twinkleOffset * 1.5) * 0.15;
        const opacity = star.baseOpacity * twinkle * intensity * intensityBreath * (0.75 + star.layerDepth * 0.5);

        // Size breathing
        const breathePhase = elapsed * 0.15 + star.twinkleOffset * 0.5;
        const sizeBreath = 1 + Math.sin(breathePhase) * 0.12 + Math.sin(breathePhase * 0.7) * 0.08;
        const sizePulse = 1 + Math.sin(twinklePhase * 0.6) * 0.08;
        const size = star.size * sizePulse * sizeBreath;

        // Calculate position
        let x, y;
        
        // Get base position relative to center
        const baseX = star.x - 0.5;
        const baseY = star.y - 0.5;
        
        // Apply differential rotation based on distance (inner rotates faster)
        const rotationSpeed = star.zone === 'core' ? 1.5 : 
                              star.zone === 'arm' ? (1.2 - star.distFromCenter * 1.5) : 
                              star.zone === 'halo' ? 0.3 : 0.2;
        const starRotation = globalRotation * rotationSpeed;
        
        // Rotate position
        const rotatedX = baseX * Math.cos(starRotation) - baseY * Math.sin(starRotation);
        const rotatedY = baseX * Math.sin(starRotation) + baseY * Math.cos(starRotation);
        
        // Apply breathing scale
        x = centerX + rotatedX * width * breathe;
        y = centerY + rotatedY * height * breathe;
        
        // Add local drift
        const starPhase = i * 0.1 + star.twinkleOffset;
        const flowSpeed = 0.3 + star.layerDepth * 0.2;
        const localDriftX = Math.sin(elapsed * flowSpeed + starPhase) * 12 * layerMultiplier;
        const localDriftY = Math.cos(elapsed * flowSpeed * 0.8 + starPhase * 1.3) * 10 * layerMultiplier;
        
        // Spiral wave for arm stars
        let spiralWaveX = 0, spiralWaveY = 0;
        if (star.zone === 'arm' && star.spiralAngle !== undefined) {
          const wavePhase = elapsed * 0.2 + star.spiralAngle * 2;
          spiralWaveX = Math.cos(wavePhase) * 6 * layerMultiplier;
          spiralWaveY = Math.sin(wavePhase) * 6 * layerMultiplier;
        }
        
        x += globalDriftX * layerMultiplier + localDriftX + spiralWaveX;
        y += globalDriftY * layerMultiplier + localDriftY + spiralWaveY;

        // Skip if off screen
        if (x < -30 || x > width + 30 || y < -30 || y > height + 30) return;

        const [r, g, b] = star.color;
        
        // Color-shifting glow
        const colorCycleSpeed = 0.05 + (i % 7) * 0.008;
        const colorPhase = elapsed * colorCycleSpeed + star.twinkleOffset * 2;
        const colorShiftIntensity = 0.12 + Math.sin(elapsed * 0.03 + i * 0.5) * 0.08;
        
        const hueShift = Math.sin(colorPhase) * colorShiftIntensity;
        const warmShift = Math.max(0, hueShift);
        const coolShift = Math.max(0, -hueShift);
        
        const shiftedR = Math.min(255, Math.round(r + warmShift * 35 - coolShift * 25));
        const shiftedG = Math.min(255, Math.round(g + warmShift * 18 - coolShift * 8));
        const shiftedB = Math.min(255, Math.round(b - warmShift * 18 + coolShift * 45));
        
        // Zone-based color blending
        let blendR = shiftedR, blendG = shiftedG, blendB = shiftedB;
        
        if (star.zone === 'core') {
          blendR = Math.round(shiftedR * 0.9 + 255 * 0.1);
          blendG = Math.round(shiftedG * 0.9 + 240 * 0.1);
          blendB = Math.round(shiftedB * 0.92 + 200 * 0.08);
        } else if (star.zone === 'arm') {
          const tintStrength = 0.1;
          blendR = Math.round(shiftedR * (1 - tintStrength) + 180 * tintStrength);
          blendG = Math.round(shiftedG * (1 - tintStrength) + 200 * tintStrength);
          blendB = Math.round(shiftedB * (1 - tintStrength) + 255 * tintStrength);
        } else if (star.zone === 'halo') {
          const tintStrength = 0.12;
          blendR = Math.round(shiftedR * (1 - tintStrength) + 160 * tintStrength);
          blendG = Math.round(shiftedG * (1 - tintStrength) + 140 * tintStrength);
          blendB = Math.round(shiftedB * (1 - tintStrength) + 200 * tintStrength);
        }

        // Atmospheric diffusion - selective for larger stars
        if (size > (isMobile ? 2.5 : 0.8)) {
          const diffuseRadius = size * (isMobile ? 2.0 : 5.5);
          const diffuseGrad = ctx.createRadialGradient(x, y, 0, x, y, diffuseRadius);
          diffuseGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${opacity * (isMobile ? 0.12 : 0.18)})`);
          diffuseGrad.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, ${opacity * (isMobile ? 0.05 : 0.08)})`);
          diffuseGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
          ctx.fillStyle = diffuseGrad;
          ctx.beginPath();
          ctx.arc(x, y, diffuseRadius, 0, Math.PI * 2);
          ctx.fill();
        }

        // Main glow - crisp and sharp
        const glowRadius = size * (isMobile ? 1.8 : 3.0);
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${opacity * (isMobile ? 0.7 : 0.6)})`);
        gradient.addColorStop(0.35, `rgba(${r}, ${g}, ${b}, ${opacity * (isMobile ? 0.25 : 0.25)})`);
        gradient.addColorStop(0.65, `rgba(${r}, ${g}, ${b}, ${opacity * (isMobile ? 0.08 : 0.1)})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Sharp core
        const coreRadius = size * (isMobile ? 0.8 : 1.2);
        const coreGrad = ctx.createRadialGradient(x, y, 0, x, y, coreRadius);
        coreGrad.addColorStop(0, `rgba(255, 255, 255, ${Math.min(1, opacity * (isMobile ? 1.4 : 1.2))})`);
        coreGrad.addColorStop(0.3, `rgba(${Math.min(255, r + 40)}, ${Math.min(255, g + 40)}, ${Math.min(255, b + 40)}, ${opacity * (isMobile ? 0.95 : 0.8)})`);
        coreGrad.addColorStop(0.7, `rgba(${r}, ${g}, ${b}, ${opacity * (isMobile ? 0.4 : 0.3)})`);
        coreGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        ctx.fillStyle = coreGrad;
        ctx.beginPath();
        ctx.arc(x, y, coreRadius, 0, Math.PI * 2);
        ctx.fill();

        // Bright center for hero stars
        const heroThreshold = isMobile ? 2.0 : 1.0;
        const alphaThreshold = isMobile ? 0.3 : 0.5;
        if (size > heroThreshold && opacity > alphaThreshold) {
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, opacity * (isMobile ? 1.7 : 1.5))})`;
          ctx.beginPath();
          ctx.arc(x, y, size * (isMobile ? 0.2 : 0.22), 0, Math.PI * 2);
          ctx.fill();

          // Diffraction spikes - 4 legs
          ctx.save();
          ctx.globalAlpha = opacity * (isMobile ? 0.22 : 0.22);
          
          const spikeLength = size * (isMobile ? 3.0 : 4.2);
          const spikeGrad = ctx.createLinearGradient(x - spikeLength, y, x + spikeLength, y);
          spikeGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0)`);
          spikeGrad.addColorStop(0.5, `rgba(255, 255, 255, 0.8)`);
          spikeGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
          
          ctx.strokeStyle = spikeGrad;
          ctx.lineWidth = isMobile ? 0.7 : 0.7;
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

    // Pause during collapse - event-based for immediate response
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
      style={{ isolation: 'isolate' }}
    />
  );
});

MicrostarCanvas.displayName = 'SpiralHaloMicrostarCanvas';

// Cosmic Effects
const CosmicEffects = memo(({ intensity }) => {
  return (
    <>
      {/* Deep space vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 95% 80% at 50% 50%, 
              transparent 0%, 
              transparent 25%,
              rgba(8, 5, 20, ${0.1 * intensity}) 40%,
              rgba(5, 3, 15, ${0.25 * intensity}) 55%,
              rgba(3, 2, 10, ${0.45 * intensity}) 70%,
              rgba(2, 1, 6, ${0.65 * intensity}) 85%,
              rgba(1, 1, 4, ${0.8 * intensity}) 100%
            )
          `
        }}
      />

      {/* Warm core glow - enhanced */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 28% 28% at 50% 50%, 
              rgba(255, 250, 235, ${0.08 * intensity}) 0%,
              rgba(250, 235, 215, ${0.05 * intensity}) 30%, 
              rgba(240, 220, 200, ${0.03 * intensity}) 50%,
              rgba(220, 200, 200, ${0.015 * intensity}) 65%,
              transparent 80%
            )
          `,
          filter: 'blur(5px)',
          mixBlendMode: 'screen'
        }}
      />

      {/* Blue arm hints */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 50% 30% at 35% 35%, rgba(150, 180, 255, ${0.03 * intensity}) 0%, transparent 60%),
            radial-gradient(ellipse 45% 25% at 65% 65%, rgba(140, 170, 250, ${0.025 * intensity}) 0%, transparent 55%),
            radial-gradient(ellipse 40% 30% at 70% 35%, rgba(160, 190, 255, ${0.02 * intensity}) 0%, transparent 50%)
          `,
          filter: 'blur(40px)',
          mixBlendMode: 'screen'
        }}
      />

      {/* Indigo halo */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 70% at 50% 50%, 
              transparent 35%,
              rgba(100, 80, 180, ${0.025 * intensity}) 50%,
              rgba(80, 60, 150, ${0.015 * intensity}) 65%,
              transparent 80%
            )
          `,
          filter: 'blur(50px)',
          mixBlendMode: 'screen'
        }}
      />

      {/* Central clarity */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 50% 45% at 50% 50%, 
              rgba(255, 250, 255, ${0.008 * intensity}) 0%, 
              rgba(240, 235, 250, ${0.004 * intensity}) 35%,
              transparent 60%
            )
          `,
          mixBlendMode: 'screen'
        }}
      />

      {/* HDR bloom - stronger */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 40% 40% at 50% 50%, rgba(220, 210, 245, ${0.035 * intensity}) 0%, rgba(200, 190, 230, ${0.018 * intensity}) 40%, transparent 65%)
          `,
          filter: 'blur(60px)',
          mixBlendMode: 'screen',
          opacity: 0.75
        }}
      />
    </>
  );
});

CosmicEffects.displayName = 'SpiralHaloCosmicEffects';

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════

export default function SpiralHaloGalaxy({ intensity = 1.0, speed = 1.0 }) {
  const stars = useMemo(() => generateSpiralStars(1100, 42), []);

  const deepStars = useMemo(() => {
    const count = Math.floor(1100 * 0.12);
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
        size: 0.3 + rand(3) * 0.7,
        color: [200 + rand(4) * 55, 200 + rand(5) * 55, 220 + rand(6) * 35],
        baseOpacity: 0.03 + rand(7) * 0.07,
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
      {/* Deep cosmic void */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 150% 130% at 50% 50%, 
              rgba(8, 6, 22, 0) 0%, 
              rgba(5, 4, 16, 0.5) 25%,
              rgba(4, 3, 12, 0.75) 45%,
              rgba(2, 2, 8, 0.9) 65%,
              rgba(1, 1, 4, 1) 100%
            )
          `
        }}
      />
      
      {/* Subtle indigo ambience */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 120% 100% at 50% 50%, 
              rgba(30, 20, 60, 0.1) 0%, 
              rgba(22, 15, 48, 0.07) 30%,
              rgba(15, 10, 35, 0.04) 50%,
              transparent 75%
            )
          `
        }}
      />
      
      {/* Warm central glow */}
      <div 
        className="absolute inset-0"
        style={{
          background: window.innerWidth < 640
            ? 'radial-gradient(ellipse 30% 30% at 50% 50%, rgba(255, 250, 235, 0.06) 0%, rgba(240, 220, 200, 0.03) 40%, rgba(200, 180, 200, 0.015) 60%, transparent 80%)'
            : 'radial-gradient(ellipse 30% 30% at 50% 50%, rgba(255, 250, 235, 0.08) 0%, rgba(240, 220, 200, 0.04) 40%, rgba(200, 180, 200, 0.015) 60%, transparent 80%)',
          filter: window.innerWidth < 640 ? 'blur(25px)' : 'blur(25px)'
        }}
      />
      
      {/* BLUISH NEBULA CLOUDS - ROTATING CLOCKWISE WITH 4 SPIRAL ARMS */}
      <motion.div
        className="absolute inset-0"
        style={{ transformOrigin: 'center center', zIndex: 1 }}
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 180 / speed, repeat: Infinity, ease: "linear" }}
      >
        {/* Arm 1 - Right side from center - MORE VISIBLE */}
        <div className="absolute inset-0" style={{
          background: window.innerWidth < 640
            ? 'radial-gradient(ellipse 45% 35% at 62% 50%, rgba(160, 190, 255, 0.15) 0%, rgba(135, 165, 235, 0.08) 30%, rgba(120, 150, 220, 0.04) 50%, rgba(100, 130, 200, 0.02) 70%, transparent 85%)'
            : 'radial-gradient(ellipse 22% 18% at 62% 50%, rgba(160, 190, 255, 0.12) 0%, rgba(135, 165, 235, 0.06) 35%, rgba(120, 150, 220, 0.03) 55%, transparent 75%)',
          filter: window.innerWidth < 640 ? 'blur(35px)' : 'blur(70px)',
          mixBlendMode: 'screen'
        }} />
        
        {/* Arm 2 - Top from center */}
        <div className="absolute inset-0" style={{
          background: window.innerWidth < 640
            ? 'radial-gradient(ellipse 45% 35% at 50% 38%, rgba(145, 180, 255, 0.14) 0%, rgba(120, 150, 225, 0.07) 30%, rgba(110, 140, 210, 0.04) 50%, rgba(95, 125, 195, 0.02) 70%, transparent 85%)'
            : 'radial-gradient(ellipse 22% 18% at 50% 38%, rgba(145, 180, 255, 0.1) 0%, rgba(120, 150, 225, 0.05) 40%, rgba(110, 140, 210, 0.02) 60%, transparent 75%)',
          filter: window.innerWidth < 640 ? 'blur(32px)' : 'blur(65px)',
          mixBlendMode: 'screen'
        }} />
        
        {/* Arm 3 - Left from center - BRIGHTEST ARM */}
        <div className="absolute inset-0" style={{
          background: window.innerWidth < 640
            ? 'radial-gradient(ellipse 45% 35% at 38% 50%, rgba(110, 195, 235, 0.28) 0%, rgba(90, 170, 215, 0.15) 30%, rgba(80, 150, 200, 0.08) 50%, rgba(70, 135, 185, 0.04) 70%, transparent 85%)'
            : 'radial-gradient(ellipse 22% 18% at 38% 50%, rgba(110, 195, 235, 0.28) 0%, rgba(90, 170, 215, 0.14) 45%, rgba(80, 150, 200, 0.06) 65%, transparent 80%)',
          filter: window.innerWidth < 640 ? 'blur(30px)' : 'blur(60px)',
          mixBlendMode: 'screen'
        }} />
        
        {/* Arm 4 - Bottom from center - SECOND BRIGHTEST */}
        <div className="absolute inset-0" style={{
          background: window.innerWidth < 640
            ? 'radial-gradient(ellipse 45% 35% at 50% 62%, rgba(110, 130, 215, 0.3) 0%, rgba(90, 110, 185, 0.16) 30%, rgba(80, 100, 170, 0.08) 50%, rgba(70, 90, 155, 0.04) 70%, transparent 85%)'
            : 'radial-gradient(ellipse 22% 18% at 50% 62%, rgba(110, 130, 215, 0.3) 0%, rgba(90, 110, 185, 0.15) 50%, rgba(80, 100, 170, 0.06) 70%, transparent 85%)',
          filter: window.innerWidth < 640 ? 'blur(28px)' : 'blur(55px)',
          mixBlendMode: 'screen'
        }} />
        
        {/* Additional wisps along arms for density - BRIGHTER */}
        <div className="absolute inset-0" style={{
          background: window.innerWidth < 640
            ? 'radial-gradient(ellipse 35% 28% at 58% 42%, rgba(140, 175, 250, 0.22) 0%, rgba(115, 150, 225, 0.11) 40%, transparent 70%), radial-gradient(ellipse 35% 28% at 58% 58%, rgba(125, 160, 240, 0.21) 0%, rgba(100, 135, 215, 0.10) 40%, transparent 70%), radial-gradient(ellipse 35% 28% at 42% 58%, rgba(130, 170, 245, 0.23) 0%, rgba(105, 140, 220, 0.11) 40%, transparent 70%), radial-gradient(ellipse 35% 28% at 42% 42%, rgba(135, 175, 250, 0.24) 0%, rgba(110, 145, 225, 0.12) 40%, transparent 70%)'
            : 'radial-gradient(ellipse 18% 15% at 58% 42%, rgba(140, 175, 250, 0.22) 0%, rgba(115, 150, 225, 0.10) 45%, transparent 70%), radial-gradient(ellipse 18% 15% at 58% 58%, rgba(125, 160, 240, 0.2) 0%, rgba(100, 135, 215, 0.09) 45%, transparent 70%), radial-gradient(ellipse 18% 15% at 42% 58%, rgba(130, 170, 245, 0.21) 0%, rgba(105, 140, 220, 0.10) 45%, transparent 70%), radial-gradient(ellipse 18% 15% at 42% 42%, rgba(135, 175, 250, 0.23) 0%, rgba(110, 145, 225, 0.11) 45%, transparent 70%)',
          filter: window.innerWidth < 640 ? 'blur(30px)' : 'blur(60px)',
          mixBlendMode: 'screen'
        }} />
      </motion.div>

      {/* Inner indigo halo */}
      <div 
        className="absolute inset-0"
        style={{
          background: window.innerWidth < 640
            ? 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(90, 70, 180, 0.06) 0%, rgba(70, 55, 150, 0.03) 40%, rgba(50, 40, 120, 0.015) 60%, transparent 75%)'
            : 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(90, 70, 180, 0.08) 0%, rgba(70, 55, 150, 0.04) 40%, rgba(50, 40, 120, 0.015) 60%, transparent 75%)',
          filter: window.innerWidth < 640 ? 'blur(40px)' : 'blur(40px)'
        }}
      />



      {/* Deep parallax layer */}
      <DeepParallaxCanvas stars={deepStars} intensity={intensity} speed={speed} />

      {/* Main microstar field */}
      <MicrostarCanvas stars={stars} intensity={intensity} speed={speed} />

      {/* Effects */}
      <CosmicEffects intensity={intensity} />
    </div>
  );
}