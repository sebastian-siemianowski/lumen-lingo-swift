import React, { useMemo, useRef, useEffect, memo } from "react";
import { motion } from "framer-motion";

// ═══════════════════════════════════════════════════════════════
// LAGOON NEBULA: JWST EDITION (NGC 6523)
// 
// A hyper-realistic interpretation of the Lagoon Nebula based on 
// James Webb Space Telescope imagery.
// 
// KEY FEATURES:
// 1. "Cosmic Cliffs" - Massive walls of glowing gas (Rust/Gold)
// 2. Dark Bok Globules - Dense dust knots that obscure light
// 3. Ionization Fronts - Where UV radiation meets cold gas (Electric Blue)
// 4. The Central Hourglass - Intense star formation region
// 5. Open Cluster NGC 6530 - Brilliant young stars embedded in gas
// ═══════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════
// UTILITIES & NOISE
// ═══════════════════════════════════════════════════════════════

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

const seededRandom = (seed, n = 1) => {
  const x = Math.sin(seed * 9999 + n * 7919) * 10000;
  return x - Math.floor(x);
};

// ═══════════════════════════════════════════════════════════════
// JWST COLOR PALETTE (NIRCAM / MIRI INSPIRED)
// ═══════════════════════════════════════════════════════════════

const JWST_PALETTE = {
  // EMISSION NEBULA (H-alpha / Sulfur)
  DEEP_RUST: [180, 60, 40],      // Dark reddish-brown gas
  BURNT_ORANGE: [220, 100, 50],  // Glowing fronts
  GOLDEN_DUST: [255, 180, 80],   // Bright illuminated dust
  
  // REFLECTION / OXYGEN (OIII)
  ELECTRIC_CYAN: [100, 220, 255], // Hot ionized gas
  DEEP_TEAL: [20, 100, 120],      // Cooler oxygen
  
  // DARK DUST
  VOID_BLACK: [5, 3, 8],          // Deepest shadow
  
  // STARS - Rich Stellar Palette
  HOT_BLUE: [200, 230, 255],      // O/B type
  WARM_WHITE: [255, 248, 240],    // A type
  GOLDEN_STAR: [255, 220, 180],   // F/G type
  AMBER_GLOW: [255, 180, 120],    // K type
  DEEP_ORANGE: [255, 140, 80],    // Embedded young
  RUBY_RED: [255, 100, 100],      // Protostar deep
  CYAN_BLUE: [180, 230, 255],     // Hot ionized
  ELECTRIC_WHITE: [240, 250, 255] // Brilliant core
};

// ═══════════════════════════════════════════════════════════════
// JWST GAS ENGINE - The core of the look
// Uses Domain Warping for "liquid" gas texture
// ═══════════════════════════════════════════════════════════════

const JWSTGasCanvas = memo(({ intensity, speed }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const startTimeRef = useRef(Date.now());
  const noiseRef = useRef(createNoise2D(123));
  const isPausedRef = useRef(false);
  const isMobile = useMemo(() => typeof window !== 'undefined' && window.innerWidth < 640, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // High quality rendering
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

    const particles = [];
    // Drastically reduce particle count for performance
    const particleCount = isMobile ? 45 : 80; 
    
    // Initialize Gas Clouds (The "Cosmic Cliffs")
    for (let i = 0; i < particleCount; i++) {
      const rand = (n) => seededRandom(i * 49, n);
      
      // Distribution: Concentrate in diagonal "ridge" across screen
      // Lagoon often looks like a diagonal divide between dark and light
      const baseX = rand(1) * width;
      const baseY = rand(2) * height;
      
      // Determine type based on position for structure
      // Top-Left: Darker, Redder (Dust)
      // Bottom-Right: Brighter, Bluer (Ionized)
      const ridgePos = (baseX / width) + (baseY / height); // 0 to 2
      
      let color, size, alpha, type;
      
      if (ridgePos < 0.8) {
        // RUST/GOLD CLOUDS (Top Left)
        type = 'dust';
        const cRoll = rand(3);
        color = cRoll > 0.6 ? JWST_PALETTE.GOLDEN_DUST : 
                cRoll > 0.3 ? JWST_PALETTE.BURNT_ORANGE : JWST_PALETTE.DEEP_RUST;
        size = isMobile ? (180 + rand(4) * 350) : (150 + rand(4) * 300);
        alpha = isMobile ? (0.06 + rand(5) * 0.09) : (0.04 + rand(5) * 0.06);
      } else if (ridgePos > 1.2) {
        // ELECTRIC BLUE IONIZATION (Bottom Right)
        type = 'gas';
        const cRoll = rand(3);
        color = cRoll > 0.5 ? JWST_PALETTE.ELECTRIC_CYAN : JWST_PALETTE.DEEP_TEAL;
        size = isMobile ? (130 + rand(4) * 240) : (100 + rand(4) * 200);
        alpha = isMobile ? (0.05 + rand(5) * 0.07) : (0.03 + rand(5) * 0.05);
      } else {
        // THE FRONTIER (Middle) - Intense interaction zone
        type = 'front';
        color = JWST_PALETTE.GOLDEN_DUST; // Bright ridge
        size = isMobile ? (110 + rand(4) * 180) : (80 + rand(4) * 150);
        alpha = isMobile ? (0.08 + rand(5) * 0.11) : (0.06 + rand(5) * 0.08);
      }

      particles.push({
        x: baseX,
        y: baseY,
        vx: (rand(6) - 0.5) * 0.2,
        vy: (rand(7) - 0.5) * 0.2,
        size,
        baseSize: size,
        color,
        alpha,
        baseAlpha: alpha,
        phase: rand(8) * Math.PI * 2,
        type
      });
    }

    const animate = () => {
      if (isPausedRef.current) { return; } // Completely stop loop when paused
      const elapsed = speed === 0 ? 0 : (Date.now() - startTimeRef.current) / 1000 * speed;
      
      ctx.clearRect(0, 0, width, height);
      
      const driftX = speed === 0 ? 0 : Math.sin(elapsed * 0.05) * 20;
      const driftY = speed === 0 ? 0 : Math.cos(elapsed * 0.04) * 15;

      // Use simple source-over like Spiral Halo - no composite switching
      ctx.globalCompositeOperation = 'source-over';

      particles.forEach(p => {
        const noiseX = speed === 0 ? 0 : Math.sin(elapsed * 0.1 + p.y * 0.002) * 20;
        const noiseY = speed === 0 ? 0 : Math.cos(elapsed * 0.1 + p.x * 0.002) * 20;
        
        let x = p.x + driftX + noiseX + (speed === 0 ? 0 : p.vx * elapsed * 20);
        let y = p.y + driftY + noiseY + (speed === 0 ? 0 : p.vy * elapsed * 20);
        
        x = ((x % (width + 400)) + width + 400) % (width + 400) - 200;
        y = ((y % (height + 400)) + height + 400) % (height + 400) - 200;
        
        const pulse = speed === 0 ? 0 : Math.sin(elapsed * 0.2 + p.phase);
        const size = p.baseSize * (1 + pulse * 0.15);
        const alpha = p.baseAlpha * intensity * (1 + pulse * 0.2);
        
        const [r, g, b] = p.color;
        const grad = ctx.createRadialGradient(x, y, 0, x, y, size);
        grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha})`);
        grad.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, ${alpha * 0.4})`);
        grad.addColorStop(0.7, `rgba(${r}, ${g}, ${b}, ${alpha * 0.1})`);
        grad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
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
  }, [intensity, speed, isMobile]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ 
        opacity: 0.9,
        filter: isMobile ? 'blur(3px)' : 'blur(2px)', 
        transform: 'translate3d(0, 0, 0)',
        mixBlendMode: 'screen'
      }}
    />
  );
});

JWSTGasCanvas.displayName = 'JWSTGasCanvas';

// ═══════════════════════════════════════════════════════════════
// DEEP PARALLAX FIELD - The "Dust" Stars
// ═══════════════════════════════════════════════════════════════

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

    const animate = () => {
      if (isPausedRef.current) { return; }
      const elapsed = speed === 0 ? 0 : (Date.now() - startTimeRef.current) / 1000 * speed * 0.33;
      
      ctx.clearRect(0, 0, width, height);

      const globalDriftX = speed === 0 ? 0 : Math.sin(elapsed * 0.08) * 6;
      const globalDriftY = speed === 0 ? 0 : Math.cos(elapsed * 0.06) * 4;

      stars.forEach((star) => {
        const twinklePhase = elapsed * star.twinkleSpeed + star.twinkleOffset;
        const twinkle = 0.6 + Math.sin(twinklePhase) * 0.3;
        const opacity = star.baseOpacity * twinkle * intensity;

        const x = star.x * width + globalDriftX;
        const y = star.y * height + globalDriftY;

        const [r, g, b] = star.color;

        const glowRadius = star.size * 5;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${opacity * 0.5})`);
        gradient.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, ${opacity * 0.15})`);
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
      style={{ filter: 'blur(1.5px)' }}
    />
  );
});

DeepParallaxCanvas.displayName = 'DeepParallaxCanvas';

// ═══════════════════════════════════════════════════════════════
// STELLAR NURSERY - NGC 6530 Open Cluster
// Cinematic Microstar System:
// - Seamless Wrap-Around (Edge Fading)
// - Harmonic Polyrhythmic Twinkling
// - Liquid Drift Physics
// - Photorealistic JWST Diffraction Spikes
// ═══════════════════════════════════════════════════════════════

const LagoonStarsCanvas = memo(({ intensity, speed }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const startTimeRef = useRef(Date.now());
  const isPausedRef = useRef(false);

  // Advanced Star Generation - ENHANCED for better visual representation
  const stars = useMemo(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    const count = isMobile ? 400 : 700;
    const s = [];
    
    for (let i = 0; i < count; i++) {
      const rand = (n) => seededRandom(i * 137, n);
      
      // Z-DEPTH: 0 (close/fast) to 1 (far/slow)
      const zDepth = Math.pow(rand(1), 0.6); // More foreground stars
      
      // POSITIONING - Better distribution
      let x = rand(2);
      let y = rand(3);
      
      // CLUSTERING: More pronounced diagonal band
      const isCluster = rand(4) > 0.55; // More clustering
      if (isCluster) {
        const t = rand(5) * Math.PI * 2;
        const radius = rand(6) * 0.4; // Wider band
        const cx = 0.5 + rand(20) * 0.15;
        const cy = 0.48 + rand(21) * 0.12;
        
        x = cx + Math.cos(t) * radius;
        y = cy + Math.sin(t) * radius * 1.6;
      }

      // COLORS - Warmer palette for Lagoon
      const colorRoll = rand(7);
      let baseColor;
      if (colorRoll < 0.25) baseColor = JWST_PALETTE.GOLDEN_STAR;      // More golden
      else if (colorRoll < 0.45) baseColor = JWST_PALETTE.AMBER_GLOW;   // More amber
      else if (colorRoll < 0.60) baseColor = JWST_PALETTE.WARM_WHITE;   // Warm white
      else if (colorRoll < 0.72) baseColor = JWST_PALETTE.DEEP_ORANGE;  // Orange embedded
      else if (colorRoll < 0.82) baseColor = JWST_PALETTE.HOT_BLUE;     // Some blue
      else if (colorRoll < 0.90) baseColor = JWST_PALETTE.CYAN_BLUE;    // Cyan accents
      else if (colorRoll < 0.96) baseColor = JWST_PALETTE.RUBY_RED;     // Ruby protostars
      else baseColor = JWST_PALETTE.ELECTRIC_WHITE;                     // Brilliant cores
        
      // SIZE - Better distribution
      const sizeMult = isMobile ? 1.5 : 1.1;
      const baseSize = (0.4 + Math.pow(rand(9), 2.2) * 1.4) * (1.3 - zDepth * 0.5) * sizeMult;
      
      // HERO STARS - More visible
      const heroThreshold = isMobile ? 0.94 : 0.965;
      const isHero = isCluster && zDepth < 0.4 && rand(10) > heroThreshold;
      
      s.push({
        x, y,
        zDepth,
        size: isHero ? baseSize * 3.5 : baseSize,
        color: baseColor,
        // Alpha: Much brighter and more visible
        baseAlpha: ((isMobile ? 0.65 : 0.55) + rand(11) * 0.55) * (1 - zDepth * 0.35),
        
        // Motion Physics (Spiral Halo inspired)
        // Each star has a unique drift vector
        driftAngle: rand(12) * Math.PI * 2,
        driftSpeed: (0.005 + rand(13) * 0.02) * (1 - zDepth * 0.5), 
        
        // Liquid Flow
        flowPhase: rand(14) * Math.PI * 2,
        flowFreq: 0.2 + rand(15) * 0.4,
        
        // Optical Properties
        twinkleSpeed: 0.25 + rand(16) * 0.5, 
        twinklePhase: rand(17) * Math.PI * 2,
        isHero,
        isMystical: !isHero && rand(18) < 0.35 // 35% mystical stars for color variety
      });
    }
    return s;
  }, []);

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

    const animate = () => {
      if (isPausedRef.current) { return; }
      const elapsed = speed === 0 ? 0 : (Date.now() - startTimeRef.current) / 1000 * speed;
      
      ctx.clearRect(0, 0, width, height);
      
      // Global Cinematic Slow Pan
      const camX = speed === 0 ? 0 : Math.sin(elapsed * 0.03) * 15;
      const camY = speed === 0 ? 0 : Math.cos(elapsed * 0.025) * 12;

      stars.forEach(star => {
        // 1. PHYSICS: FLUID MOTION (Spiral Halo Style)
        
        // Parallax Layering
        const parallaxX = camX * (1 - star.zDepth);
        const parallaxY = camY * (1 - star.zDepth);
        
        // Constant Drift
        const driftX = Math.cos(star.driftAngle) * star.driftSpeed * 100 * elapsed;
        const driftY = Math.sin(star.driftAngle) * star.driftSpeed * 100 * elapsed;
        
        // Liquid Undulation (Nebula currents)
        const flowTime = elapsed * star.flowFreq + star.flowPhase;
        const flowX = Math.sin(flowTime) * 8 * (1 - star.zDepth);
        const flowY = Math.cos(flowTime * 0.7) * 6 * (1 - star.zDepth);
        
        let x = (star.x * width + parallaxX + driftX + flowX);
        let y = (star.y * height + parallaxY + driftY + flowY);
        
        // 2. EDGE FADING (Anti-Popping)
        // Wrap coordinates with a large buffer
        const buffer = 150; 
        const totalW = width + buffer * 2;
        const totalH = height + buffer * 2;
        
        // Wrap to simulation space
        x = ((x + buffer) % totalW + totalW) % totalW - buffer;
        y = ((y + buffer) % totalH + totalH) % totalH - buffer;
        
        // Calculate edge distance for fade out
        // If star is within 'buffer' distance of edge, fade it
        let edgeFade = 1.0;
        // Left/Right
        if (x < 0) edgeFade *= Math.max(0, (x + buffer) / buffer);
        else if (x > width) edgeFade *= Math.max(0, (buffer - (x - width)) / buffer);
        // Top/Bottom
        if (y < 0) edgeFade *= Math.max(0, (y + buffer) / buffer);
        else if (y > height) edgeFade *= Math.max(0, (buffer - (y - height)) / buffer);
        
        // If purely off-screen/invisible, skip
        if (edgeFade <= 0.01) return;

        // 3. OPTICS: HARMONIC TWINKLE
        // Smooth sine wave sum - never fully black
        const tVal = elapsed * star.twinkleSpeed + star.twinklePhase;
        // Gentle breathing (0.7 to 1.0 range)
        const twinkle = 0.85 + Math.sin(tVal) * 0.15; 
        
        const alpha = star.baseAlpha * twinkle * intensity * edgeFade;
        // Hard clamp to prevent rendering invisible stars
        if (alpha < 0.005) return;

        // 4. RENDERING
        const [r, g, b] = star.color;

        if (star.isMystical) {
           // MYSTICAL STARS - Maximum Visual Impact
           // Multi-frequency color shift for richness
           const colorCycleSpeed = 0.08 + (star.x * 10 % 7) * 0.012;
           const colorPhase = elapsed * colorCycleSpeed + star.twinklePhase * 2;
           const colorShiftIntensity = 0.25 + Math.sin(elapsed * 0.04 + star.y * 10) * 0.15;
           
           const hueShift = Math.sin(colorPhase) * colorShiftIntensity;
           const secondaryShift = Math.cos(colorPhase * 1.618) * colorShiftIntensity * 0.6; // Golden ratio
           const warmShift = Math.max(0, hueShift + secondaryShift * 0.5);
           const coolShift = Math.max(0, -hueShift - secondaryShift * 0.5);
           
           const shiftedR = Math.min(255, Math.round(r + warmShift * 65 - coolShift * 35));
           const shiftedG = Math.min(255, Math.round(g + warmShift * 35 - coolShift * 15));
           const shiftedB = Math.min(255, Math.round(b - warmShift * 35 + coolShift * 75));

           // Outer atmosphere - ultra soft
           const atmoRadius = star.size * 9;
           const atmoGrad = ctx.createRadialGradient(x, y, 0, x, y, atmoRadius);
           atmoGrad.addColorStop(0, `rgba(${shiftedR}, ${shiftedG}, ${shiftedB}, ${alpha * 0.08})`);
           atmoGrad.addColorStop(0.3, `rgba(${shiftedR}, ${shiftedG}, ${shiftedB}, ${alpha * 0.04})`);
           atmoGrad.addColorStop(1, `rgba(${shiftedR}, ${shiftedG}, ${shiftedB}, 0)`);
           ctx.fillStyle = atmoGrad;
           ctx.beginPath();
           ctx.arc(x, y, atmoRadius, 0, Math.PI * 2);
           ctx.fill();

           // Mid diffusion glow
           const diffuseRadius = star.size * 5;
           const diffuseGrad = ctx.createRadialGradient(x, y, 0, x, y, diffuseRadius);
           diffuseGrad.addColorStop(0, `rgba(${shiftedR}, ${shiftedG}, ${shiftedB}, ${alpha * 0.35})`);
           diffuseGrad.addColorStop(0.5, `rgba(${shiftedR}, ${shiftedG}, ${shiftedB}, ${alpha * 0.15})`);
           diffuseGrad.addColorStop(1, `rgba(${shiftedR}, ${shiftedG}, ${shiftedB}, 0)`);
           ctx.fillStyle = diffuseGrad;
           ctx.beginPath();
           ctx.arc(x, y, diffuseRadius, 0, Math.PI * 2);
           ctx.fill();

           // Core with brilliant white center
           const coreRadius = star.size * 2.0;
           const coreGrad = ctx.createRadialGradient(x, y, 0, x, y, coreRadius);
           coreGrad.addColorStop(0, `rgba(255, 255, 255, ${Math.min(1, alpha * 1.5)})`);
           coreGrad.addColorStop(0.2, `rgba(${shiftedR}, ${shiftedG}, ${shiftedB}, ${Math.min(1, alpha * 1.1)})`);
           coreGrad.addColorStop(0.6, `rgba(${shiftedR}, ${shiftedG}, ${shiftedB}, ${alpha * 0.5})`);
           coreGrad.addColorStop(1, `rgba(${shiftedR}, ${shiftedG}, ${shiftedB}, 0)`);
           ctx.fillStyle = coreGrad;
           ctx.beginPath();
           ctx.arc(x, y, coreRadius, 0, Math.PI * 2);
           ctx.fill();

        } else {
          // STANDARD STARS - Enhanced thermal shimmer
          const thermalPhase = elapsed * 0.18 + star.x * 5 + star.y * 3;
          const shift = Math.sin(thermalPhase) * 20 + Math.cos(thermalPhase * 1.4) * 10;
          const rS = Math.min(255, Math.max(0, r + shift));
          const gS = Math.min(255, Math.max(0, g + shift * 0.5));
          const bS = Math.min(255, Math.max(0, b - shift));

          if (star.isHero) {
           // HERO STARS: Premium Rendering
           // Soft Glow - Multi-pass for quality
           const drawAlpha = Math.min(1, alpha * 1.2);
           
           // Large soft halo
           const grad = ctx.createRadialGradient(x, y, 0, x, y, star.size * 6);
           grad.addColorStop(0, `rgba(${rS}, ${gS}, ${bS}, ${drawAlpha * 0.9})`);
           grad.addColorStop(0.4, `rgba(${rS}, ${gS}, ${bS}, ${drawAlpha * 0.3})`);
           grad.addColorStop(1, `rgba(${rS}, ${gS}, ${bS}, 0)`);
           ctx.fillStyle = grad;
           ctx.beginPath();
           ctx.arc(x, y, star.size * 6, 0, Math.PI * 2);
           ctx.fill();

           // Brilliant White Core
           const coreGrad = ctx.createRadialGradient(x, y, 0, x, y, star.size * 1.2);
           coreGrad.addColorStop(0, `rgba(255, 255, 255, ${Math.min(1, drawAlpha * 1.3)})`);
           coreGrad.addColorStop(0.7, `rgba(${rS}, ${gS}, ${bS}, ${drawAlpha * 0.6})`);
           coreGrad.addColorStop(1, `rgba(${rS}, ${gS}, ${bS}, 0)`);
           ctx.fillStyle = coreGrad;
           ctx.beginPath();
           ctx.arc(x, y, star.size * 1.2, 0, Math.PI * 2);
           ctx.fill();

           // JWST Diffraction Spikes
           // Render only if bright enough
           if (drawAlpha > 0.3) {
             const spikeAlpha = Math.min(1, drawAlpha * 0.8);
             const spikeSize = star.size * 12;

             ctx.strokeStyle = `rgba(${rS}, ${gS}, ${bS}, ${spikeAlpha})`;
             ctx.lineWidth = 1.0;
             
             // Use Gradient Strokes for soft fade-out tips
             const vGrad = ctx.createLinearGradient(x, y - spikeSize, x, y + spikeSize);
             vGrad.addColorStop(0, `rgba(${rS},${gS},${bS},0)`);
             vGrad.addColorStop(0.5, `rgba(${rS},${gS},${bS},${spikeAlpha})`);
             vGrad.addColorStop(1, `rgba(${rS},${gS},${bS},0)`);
             ctx.strokeStyle = vGrad;
             
             ctx.beginPath();
             ctx.moveTo(x, y - spikeSize);
             ctx.lineTo(x, y + spikeSize);
             ctx.stroke();

             // Diagonals
             const dX = spikeSize * 0.866; 
             const dY = spikeSize * 0.5;
             
             // Diagonal 1
             const d1Grad = ctx.createLinearGradient(x - dX, y - dY, x + dX, y + dY);
             d1Grad.addColorStop(0, `rgba(${rS},${gS},${bS},0)`);
             d1Grad.addColorStop(0.5, `rgba(${rS},${gS},${bS},${spikeAlpha})`);
             d1Grad.addColorStop(1, `rgba(${rS},${gS},${bS},0)`);
             ctx.strokeStyle = d1Grad;
             ctx.beginPath();
             ctx.moveTo(x - dX, y - dY);
             ctx.lineTo(x + dX, y + dY);
             ctx.stroke();

             // Diagonal 2
             const d2Grad = ctx.createLinearGradient(x - dX, y + dY, x + dX, y - dY);
             d2Grad.addColorStop(0, `rgba(${rS},${gS},${bS},0)`);
             d2Grad.addColorStop(0.5, `rgba(${rS},${gS},${bS},${spikeAlpha})`);
             d2Grad.addColorStop(1, `rgba(${rS},${gS},${bS},0)`);
             ctx.strokeStyle = d2Grad;
             ctx.beginPath();
             ctx.moveTo(x - dX, y + dY);
             ctx.lineTo(x + dX, y - dY);
             ctx.stroke();
           }

        } else {
           // MICROSTARS: High quality soft dots
           // Only render significant stars
           const drawAlpha = alpha;
           
           if (star.zDepth > 0.6) {
             // Background: Soft glowing presence
             const bgRadius = star.size * 2.5;
             const bgGrad = ctx.createRadialGradient(x, y, 0, x, y, bgRadius);
             bgGrad.addColorStop(0, `rgba(${rS}, ${gS}, ${bS}, ${drawAlpha * 0.9})`);
             bgGrad.addColorStop(0.4, `rgba(${rS}, ${gS}, ${bS}, ${drawAlpha * 0.3})`);
             bgGrad.addColorStop(1, `rgba(${rS}, ${gS}, ${bS}, 0)`);
             
             ctx.fillStyle = bgGrad;
             ctx.beginPath();
             ctx.arc(x, y, bgRadius, 0, Math.PI * 2);
             ctx.fill();
           } else {
             // Foreground: Multi-layer luminous rendering
             // Outer atmospheric bloom
             const bloomRadius = star.size * 6.5;
             const bloomGrad = ctx.createRadialGradient(x, y, 0, x, y, bloomRadius);
             bloomGrad.addColorStop(0, `rgba(${rS}, ${gS}, ${bS}, ${drawAlpha * 0.12})`);
             bloomGrad.addColorStop(0.6, `rgba(${rS}, ${gS}, ${bS}, ${drawAlpha * 0.04})`);
             bloomGrad.addColorStop(1, `rgba(${rS}, ${gS}, ${bS}, 0)`);
             ctx.fillStyle = bloomGrad;
             ctx.beginPath();
             ctx.arc(x, y, bloomRadius, 0, Math.PI * 2);
             ctx.fill();
             
             // Mid glow layer
             const glowRadius = star.size * 3.2;
             const glowGrad = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
             glowGrad.addColorStop(0, `rgba(${rS}, ${gS}, ${bS}, ${drawAlpha * 0.6})`);
             glowGrad.addColorStop(0.5, `rgba(${rS}, ${gS}, ${bS}, ${drawAlpha * 0.25})`);
             glowGrad.addColorStop(1, `rgba(${rS}, ${gS}, ${bS}, 0)`);
             ctx.fillStyle = glowGrad;
             ctx.beginPath();
             ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
             ctx.fill();
             
             // Brilliant white core
             const coreRadius = star.size * 0.8;
             const coreGrad = ctx.createRadialGradient(x, y, 0, x, y, coreRadius);
             coreGrad.addColorStop(0, `rgba(255, 255, 255, ${Math.min(1, drawAlpha * 1.4)})`);
             coreGrad.addColorStop(0.6, `rgba(${rS}, ${gS}, ${bS}, ${drawAlpha * 0.8})`);
             coreGrad.addColorStop(1, `rgba(${rS}, ${gS}, ${bS}, 0)`);
             ctx.fillStyle = coreGrad;
             ctx.beginPath();
             ctx.arc(x, y, coreRadius, 0, Math.PI * 2);
             ctx.fill();
           }
        }
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
  }, [intensity, speed, stars]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
    />
  );
});

LagoonStarsCanvas.displayName = 'LagoonStarsCanvas';

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════

export default function LagoonNebula({ intensity = 1.0, speed = 1.0 }) {
  const isMobile = useMemo(() => typeof window !== 'undefined' && window.innerWidth < 640, []);
  
  // Generate deep parallax stars
  const deepStars = useMemo(() => {
    const count = 80;
    const seed = 500;
    const s = [];
    for (let i = 0; i < count; i++) {
      const x = seededRandom(seed + i * 3, 1);
      const y = seededRandom(seed + i * 3, 2);
      const size = 0.5 + seededRandom(seed + i * 3, 3) * 1.5;
      const opacity = 0.1 + seededRandom(seed + i * 3, 4) * 0.3;
      // Warm dusty colors for the background
      const colorType = seededRandom(seed + i * 3, 5) > 0.5 ? JWST_PALETTE.GOLDEN_DUST : JWST_PALETTE.DEEP_RUST;
      
      s.push({
        x, y, size,
        color: colorType,
        baseOpacity: opacity,
        twinkleSpeed: 0.1 + seededRandom(seed + i * 3, 6) * 0.2,
        twinkleOffset: seededRandom(seed + i * 3, 7) * Math.PI * 2
      });
    }
    return s;
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden bg-[#020103]" 
      style={{ zIndex: 0, isolation: 'isolate' }}
    >
      {/* 1. BACKGROUND BASE - Deep warm/cool contrast */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 80% 20%, 
              rgba(10, 20, 40, 0.4) 0%, 
              transparent 50%),
            radial-gradient(circle at 20% 80%, 
              rgba(30, 10, 5, 0.3) 0%, 
              transparent 50%)
          `
        }}
      />

      {/* 2. MASSIVE ATMOSPHERIC GLOWS - Enhanced for visual impact */}
      {/* Rust/Orange Dust Bank (Top-Left quadrant) */}
      <div
        className="absolute"
        style={{
          top: '-25%',
          left: '-15%',
          width: '150%',
          height: '150%',
          background: `radial-gradient(ellipse 55% 45% at 25% 25%, 
              rgba(200, 85, 40, ${0.35 * intensity}) 0%, 
              rgba(160, 60, 28, ${0.20 * intensity}) 40%, 
              rgba(120, 40, 18, ${0.08 * intensity}) 60%, 
              transparent 80%)`,
          filter: 'blur(90px)',
          mixBlendMode: 'screen'
        }}
      />

      {/* Golden Illuminated Frontier (Center diagonal) */}
      <div
        className="absolute"
        style={{
          top: '10%',
          left: '15%',
          width: '120%',
          height: '120%',
          background: `radial-gradient(ellipse 48% 42% at 38% 40%, 
              rgba(255, 180, 80, ${0.32 * intensity}) 0%, 
              rgba(235, 150, 65, ${0.18 * intensity}) 45%, 
              rgba(200, 120, 45, ${0.07 * intensity}) 65%, 
              transparent 80%)`,
          filter: 'blur(70px)',
          mixBlendMode: 'screen'
        }}
      />

      {/* Electric Cyan Ionization (Bottom-Right) */}
      <div
        className="absolute"
        style={{
          bottom: '-25%',
          right: '-15%',
          width: '150%',
          height: '150%',
          background: `radial-gradient(ellipse 62% 52% at 75% 75%, 
              rgba(100, 220, 255, ${0.36 * intensity}) 0%, 
              rgba(60, 180, 230, ${0.22 * intensity}) 42%, 
              rgba(35, 140, 190, ${0.09 * intensity}) 62%, 
              transparent 80%)`,
          filter: 'blur(110px)',
          mixBlendMode: 'screen'
        }}
      />

      {/* Deep Teal Accent (Middle-Right) */}
      <div
        className="absolute"
        style={{
          top: '35%',
          right: '20%',
          width: '80%',
          height: '80%',
          background: `radial-gradient(ellipse 42% 38% at 58% 52%, 
              rgba(20, 130, 160, ${0.24 * intensity}) 0%, 
              rgba(15, 95, 125, ${0.11 * intensity}) 50%, 
              transparent 72%)`,
          filter: 'blur(65px)',
          mixBlendMode: 'screen'
        }}
      />

      {/* 3. VOLUMETRIC GAS SIMULATION (The Detail Layer) */}
      <JWSTGasCanvas intensity={intensity} speed={speed} />

      {/* 4. DARK BOK GLOBULES (Dust Lanes) - Negative space */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 40% 40%, transparent 0%, transparent 40%, rgba(0,0,0,0.3) 100%),
            radial-gradient(ellipse 30% 10% at 50% 50%, rgba(0,0,0,0.4) 0%, transparent 60%)
          `,
          mixBlendMode: 'multiply',
          filter: 'blur(40px)'
        }}
      />

      {/* 5. STARS & DIFFRACTION SPIKES */}
      <DeepParallaxCanvas stars={deepStars} intensity={intensity} speed={speed} />
      <LagoonStarsCanvas intensity={intensity} speed={speed} />

      {/* 6. FINAL CINEMATIC GRADING */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to bottom right, 
              rgba(255, 100, 50, ${0.02 * intensity}), 
              rgba(0, 0, 0, 0) 40%, 
              rgba(50, 200, 255, ${0.02 * intensity}))
          `,
          mixBlendMode: 'overlay',
          pointerEvents: 'none'
        }}
      />
      
      {/* 7. VIGNETTE */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, transparent 50%, rgba(0,0,0,0.6) 100%)`,
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}