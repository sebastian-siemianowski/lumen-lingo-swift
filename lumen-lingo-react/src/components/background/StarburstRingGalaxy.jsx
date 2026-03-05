import React, { useMemo, useRef, useEffect, memo } from "react";
import { motion } from "framer-motion";

// ═══════════════════════════════════════════════════════════════
// STARBURST RING GALAXY — Optimized Sprite Renderer
// Uses pre-rendered offscreen canvases (sprites) for 60fps performance
// ═══════════════════════════════════════════════════════════════

const PALETTE = {
  coreGlow: [217, 196, 255],
  innerHalo: [154, 86, 255],
  violetGas: [125, 44, 255],
  magentaGas: [208, 75, 255],
  neonBlue: [75, 216, 255],
  hotWhite: [255, 255, 255],
  blueWhite: [221, 234, 255],
  softMagenta: [246, 201, 255],
  voidStart: [14, 6, 42],
  voidEnd: [20, 5, 49],
};

const seededRandom = (seed, n = 1) => {
  const x = Math.sin(seed * 9999 + n * 7919) * 10000;
  return x - Math.floor(x);
};

// ═══════════════════════════════════════════════════════════════
// SPRITE GENERATION SYSTEM
// ═══════════════════════════════════════════════════════════════

// Cache for star sprites to prevent memory leaks and redundant creation
const spriteCache = {};

// Generate a high-quality star sprite
const getStarSprite = (size, color, type = 'normal') => {
  const [r, g, b] = color;
  const key = `${r},${g},${b}-${size}-${type}`;

  if (spriteCache[key]) return spriteCache[key];

  const canvas = document.createElement('canvas');
  // Massive padding for ultra-soft, cinematic glow
  // Halo type gets extra padding for the diffuse glow
  const padding = type === 'hero' ? size * 16 : (type === 'halo' ? size * 12 : size * 6);
  const diam = Math.ceil(size * 2 + padding * 2);
  canvas.width = diam;
  canvas.height = diam;
  const ctx = canvas.getContext('2d', { alpha: true });
  const center = diam / 2;

  if (type === 'halo') {
    // ════ "SPIRAL HALO" TEMPLATE STYLE ════
    // Softer, deeper, more nebular look

    // 1. Wide Atmospheric Diffusion (The "Nebula" feel)
    const diffuseRadius = size * 6;
    const diffuse = ctx.createRadialGradient(center, center, 0, center, center, diffuseRadius);
    diffuse.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.15)`);
    diffuse.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, 0.05)`);
    diffuse.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

    ctx.beginPath();
    ctx.arc(center, center, diffuseRadius, 0, Math.PI * 2);
    ctx.fillStyle = diffuse;
    ctx.fill();

    // 2. Main Soft Glow
    const glowRadius = size * 3.5;
    const glow = ctx.createRadialGradient(center, center, 0, center, center, glowRadius);
    glow.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.4)`);
    glow.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, 0.1)`);
    glow.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

    ctx.globalCompositeOperation = 'screen';
    ctx.beginPath();
    ctx.arc(center, center, glowRadius, 0, Math.PI * 2);
    ctx.fillStyle = glow;
    ctx.fill();

    // 3. Core (Soft but bright)
    const coreRadius = Math.max(0.5, size * 1.2);
    const core = ctx.createRadialGradient(center, center, 0, center, center, coreRadius);
    core.addColorStop(0, `rgba(255, 255, 255, 0.9)`);
    core.addColorStop(0.4, `rgba(${Math.min(255, r+30)}, ${Math.min(255, g+30)}, ${Math.min(255, b+30)}, 0.8)`);
    core.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

    ctx.globalCompositeOperation = 'source-over';
    ctx.beginPath();
    ctx.arc(center, center, coreRadius, 0, Math.PI * 2);
    ctx.fillStyle = core;
    ctx.fill();

  } else {
    // ════ STANDARD & HERO STYLES ════

    // 1. "Atmospheric" Deep Halo
    const haloRadius = type === 'hero' ? size * 8 : size * 4;
    const halo = ctx.createRadialGradient(center, center, 0, center, center, haloRadius);
    halo.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${type === 'hero' ? 0.22 : 0.1})`);
    halo.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${type === 'hero' ? 0.08 : 0.02})`);
    halo.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

    ctx.beginPath();
    ctx.arc(center, center, haloRadius, 0, Math.PI * 2);
    ctx.fillStyle = halo;
    ctx.fill();

    // 2. Radiant Inner Aura
    const auraRadius = type === 'hero' ? size * 4 : size * 2.5;
    const aura = ctx.createRadialGradient(center, center, 0, center, center, auraRadius);
    aura.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${type === 'hero' ? 0.45 : 0.2})`);
    aura.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${type === 'hero' ? 0.15 : 0.04})`);
    aura.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

    ctx.globalCompositeOperation = 'screen';
    ctx.beginPath();
    ctx.arc(center, center, auraRadius, 0, Math.PI * 2);
    ctx.fillStyle = aura;
    ctx.fill();

    // 3. The Photosphere
    const bodyRadius = Math.max(0.5, size * 0.9);
    const body = ctx.createRadialGradient(center, center, 0, center, center, bodyRadius * 2);
    body.addColorStop(0, `rgba(255, 255, 255, 0.92)`); 
    body.addColorStop(0.15, `rgba(${Math.min(255, r+50)}, ${Math.min(255, g+50)}, ${Math.min(255, b+50)}, 0.9)`);
    body.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, 0.5)`);
    body.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

    ctx.globalCompositeOperation = 'source-over';
    ctx.beginPath();
    ctx.arc(center, center, bodyRadius * 2, 0, Math.PI * 2);
    ctx.fillStyle = body;
    ctx.fill();
  }

  // 4. Cinematic Diffraction Spikes & Lens Artifacts (Hero only)
  // "James Webb" style aesthetics for maximum wonder
  if (type === 'hero') {
    ctx.globalCompositeOperation = 'screen';

    const drawSoftSpike = (angle, len, width, intensity, sharp = false) => {
      ctx.save();
      ctx.translate(center, center);
      ctx.rotate(angle);
      const grad = ctx.createLinearGradient(-len, 0, len, 0);

      if (sharp) {
          // Hotter, sharper core for the main spikes
          grad.addColorStop(0, `rgba(${r},${g},${b},0)`);
          grad.addColorStop(0.35, `rgba(${r},${g},${b},${intensity * 0.4})`);
          grad.addColorStop(0.48, `rgba(255,255,255,${intensity * 0.9})`);
          grad.addColorStop(0.5, `rgba(255,255,255,${intensity * 1.2})`); // Overexposed center
          grad.addColorStop(0.52, `rgba(255,255,255,${intensity * 0.9})`);
          grad.addColorStop(0.65, `rgba(${r},${g},${b},${intensity * 0.4})`);
          grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
      } else {
          // Softer glow spikes
          grad.addColorStop(0, `rgba(${r},${g},${b},0)`);
          grad.addColorStop(0.4, `rgba(${r},${g},${b},${intensity * 0.6})`);
          grad.addColorStop(0.5, `rgba(255,255,255,${intensity})`);
          grad.addColorStop(0.6, `rgba(${r},${g},${b},${intensity * 0.6})`);
          grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
      }

      ctx.fillStyle = grad;
      ctx.beginPath();
      // Slightly sharper ellipse for the "sharp" spikes
      ctx.ellipse(0, 0, len, width, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    // 1. Lens Bloom (Subtle outer ring)
    const bloomRadius = size * 2.8;
    ctx.beginPath();
    ctx.arc(center, center, bloomRadius, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.12)`;
    ctx.lineWidth = size * 0.4;
    ctx.stroke();

    // 2. Main Horizontal Flare (Anamorphic - Sharp & Long)
    drawSoftSpike(0, size * 16, size * 0.12, 0.85, true);

    // 3. Vertical Flare (Slightly shorter but distinct)
    drawSoftSpike(Math.PI/2, size * 10, size * 0.15, 0.6, true);

    // 4. Diagonal Glows (X shape - Soft)
    drawSoftSpike(Math.PI/4, size * 5, size * 0.6, 0.25);
    drawSoftSpike(-Math.PI/4, size * 5, size * 0.6, 0.25);
  }

  spriteCache[key] = canvas;
  return canvas;
  };

// Gas/Cloud Sprite for the Ring
const getGasSprite = (color, size) => {
  const [r, g, b] = color;
  const key = `gas-${r},${g},${b}-${size}`;
  if (spriteCache[key]) return spriteCache[key];

  const canvas = document.createElement('canvas');
  canvas.width = size * 2;
  canvas.height = size * 2;
  const ctx = canvas.getContext('2d');
  const center = size;

  const grad = ctx.createRadialGradient(center, center, 0, center, center, size);
  // Volumetric "Plasma" Gradient - Hotter core, structured falloff
  // Creates a sense of internal luminosity (Awe factor)
  grad.addColorStop(0, `rgba(${Math.min(255, r+30)}, ${Math.min(255, g+30)}, ${Math.min(255, b+30)}, 0.25)`); // Hot center
  grad.addColorStop(0.25, `rgba(${r}, ${g}, ${b}, 0.12)`);
  grad.addColorStop(0.6, `rgba(${r}, ${g}, ${b}, 0.03)`);
  grad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size * 2, size * 2);

  spriteCache[key] = canvas;
  return canvas;
};


// ═══════════════════════════════════════════════════════════════
// DATA GENERATION
// ═══════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════
// MEMORY OPTIMIZATION: TypedArray Particle System
// ═══════════════════════════════════════════════════════════════

const generateMicrostars = (count = 2500, seed = 77) => {
  // 14 floats per star to pack all data
  const data = new Float32Array(count * 14);
  const spriteCatalog = []; // To store unique sprite combinations
  const spriteMap = new Map(); // For deduplication

  const starColors = [
    [255, 255, 255], [220, 235, 255], [255, 248, 240], 
    [200, 180, 255], [255, 220, 240], [255, 245, 220],
    [180, 220, 255], [255, 200, 220], [200, 255, 245], [255, 190, 210]
  ];
  const weights = [0.4, 0.15, 0.12, 0.08, 0.06, 0.06, 0.05, 0.04, 0.02, 0.02];

  // Pre-calculate cumulative weights
  const cumWeights = [];
  let sum = 0;
  weights.forEach(w => { sum += w; cumWeights.push(sum); });

  const ringInner = 0.24;
  const ringOuter = 0.52;

  for (let i = 0; i < count; i++) {
    const stride = i * 14;
    const rand = (n) => seededRandom(seed + i * 7, n);

    // Zone selection
    const zr = rand(1);
    let x, y;

    // Optimized zone logic
    if (zr < 0.04) { // Core
      const a = rand(2) * Math.PI * 2;
      const r = rand(3) * rand(4) * 0.1;
      x = 0.5 + Math.cos(a) * r;
      y = 0.5 + Math.sin(a) * r;
    } else if (zr < 0.62) { // Ring
      const a = rand(2) * Math.PI * 2;
      const bias = zr < 0.42 ? 0.3 : 0.8;
      const r = ringInner + (ringOuter - ringInner) * (rand(3) * 0.4 + bias * 0.6);
      x = 0.5 + Math.cos(a) * r;
      y = 0.5 + Math.sin(a) * r;
    } else if (zr < 0.82) { // Halo
      const a = rand(2) * Math.PI * 2;
      const r = ringOuter + rand(3) * 0.23;
      x = 0.5 + Math.cos(a) * r;
      y = 0.5 + Math.sin(a) * r;
    } else { // Field
      x = rand(2);
      y = rand(3);
    }

    const dist = Math.sqrt((x-0.5)**2 + (y-0.5)**2);
    const angle = Math.atan2(y-0.5, x-0.5);

    // Size & Type - SIGNIFICANTLY increased Hero population for better visual impact
    const sr = rand(4);
    let sizeClass = 1; // Small
    let type = 0; // 0=normal, 1=hero, 2=halo

    // "Magnitude 10" Improvement:
    // Adjusted thresholds to be rarer (Quality over Quantity)
    if (sr > 0.985) { 
      sizeClass = 4; // Massive Super-Giants (Very Rare)
      type = 1; 
    } else if (sr > 0.95) { 
      sizeClass = 3; // Large Bright Stars (Rare)
      type = 1; 
    } else if (sr > 0.85) { 
      sizeClass = 2; // Medium (Standard)
      type = 0;
    } else if (sr > 0.65) {
      sizeClass = 2; // Mid-Size Halo (Spiral Template Style)
      type = 2; // New Halo Type
    }

    // Color
    const cr = rand(6);
    let colorIdx = 0;
    for(let k=0; k<cumWeights.length; k++) {
      if(cr < cumWeights[k]) { colorIdx = k; break; }
    }
    const color = starColors[colorIdx];

    // Sprite Management
    const spriteKey = `${color[0]},${color[1]},${color[2]}-${sizeClass}-${type}`;
    let spriteId;
    if (spriteMap.has(spriteKey)) {
      spriteId = spriteMap.get(spriteKey);
    } else {
      spriteId = spriteCatalog.length;
      spriteMap.set(spriteKey, spriteId);
      // Create sprite info object
      // Hero: 2.5, Halo: 1.5, Large: 1.5, Medium: 1, Small: 0.5
      const baseR = type === 1 ? 2.5 : (type === 2 ? 1.5 : (sizeClass === 3 ? 1.5 : (sizeClass === 2 ? 1 : 0.5)));
      // We'll generate the actual canvas in the component effect using getStarSprite
      spriteCatalog.push({
          id: spriteId,
          color,
          baseR,
          type: type === 1 ? 'hero' : (type === 2 ? 'halo' : 'normal'),
          canvas: null // Placeholder
      });
    }

    // Orbit Logic
    const isOrbital = (zr < 0.82) ? 1.0 : 0.0;
    const orbitalSpeed = isOrbital * (0.01 + rand(9) * 0.02) * (0.3 / (dist + 0.1));

    // Fill Buffer
    data[stride + 0] = x;              // ox (original x)
    data[stride + 1] = y;              // oy (original y)
    data[stride + 2] = angle;          // angle
    data[stride + 3] = dist;           // radius
    data[stride + 4] = orbitalSpeed;   // orbitalSpeed
    data[stride + 5] = rand(10) * Math.PI * 2; // twinkleOffset
    data[stride + 6] = 0.1 + rand(11) * 0.5;   // twinkleSpeed (Slower for elegance)
    data[stride + 7] = 0.1 + rand(7) * 0.7;    // opacity
    data[stride + 8] = spriteId;       // spriteIndex
    data[stride + 9] = (rand(12) - 0.5) * 0.05; // driftX
    data[stride + 10] = (rand(13) - 0.5) * 0.05; // driftY
    data[stride + 11] = isOrbital;     // isOrbital (0 or 1)
    data[stride + 12] = 0; // Padding/Unused
    data[stride + 13] = 0; // Padding/Unused
  }

  return { data, spriteCatalog };
};

// ═══════════════════════════════════════════════════════════════
// OPTIMIZED CANVASES
// ═══════════════════════════════════════════════════════════════

const RingStructureCanvas = memo(({ intensity, speed }) => {
  const canvasRef = useRef(null);
  const isPausedRef = useRef(false);
  
  // Pre-generate gas particles for sprite rendering
  const gasParticles = useMemo(() => {
    const p = [];
    const colors = [PALETTE.violetGas, PALETTE.magentaGas, PALETTE.neonBlue, PALETTE.innerHalo, PALETTE.coreGlow];
    // Create ~200 particles with stretched aspect ratios for "flow" look
    for(let i=0; i<200; i++) {
      const angle = (i / 200) * Math.PI * 2 + (Math.random() * 0.1);
      const rVar = (Math.random() - 0.5) * 0.18;
      const r = 0.35 + rVar; // Normalized radius
      const size = 40 + Math.random() * 50;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      // Stretch factor to make them look like streaks
      const stretch = 1.5 + Math.random() * 1.5; 
      
      p.push({
        angle,
        r, 
        size,
        color,
        stretch,
        speed: 0.02 + Math.random() * 0.04,
        pulseOffset: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.5 + Math.random(),
        sprite: null 
      });
    }
    return p;
  }, []);

  // Pre-generate dust particles
  // Pre-generate accretion disk particles (Infalling matter)
  const accretionParticles = useMemo(() => {
    const a = [];
    const colors = [[255, 255, 255], [200, 230, 255], [230, 210, 255]];
    for(let i=0; i<160; i++) {
      a.push({
        angle: Math.random() * Math.PI * 2,
        // Spiral distribution: dense near event horizon (0.13), spreading out to ring (0.32)
        r: 0.13 + Math.pow(Math.random(), 1.8) * 0.20, 
        speed: 0.3 + Math.random() * 0.5, // Faster near center
        size: 12 + Math.random() * 18,
        color: colors[Math.floor(Math.random() * colors.length)],
        phase: Math.random() * Math.PI * 2
      });
    }
    return a;
  }, []);

  const dustParticles = useMemo(() => {
    const d = [];
    for(let i=0; i<15; i++) {
      d.push({
        angle: (i / 15) * Math.PI * 2 + Math.random(),
        r: 0.35 + (Math.random()-0.5)*0.1,
        size: 50 + Math.random()*40,
        opacity: 0.1 + Math.random()*0.1
      });
    }
    return d;
  }, []);

  // Pre-generate slow drifting dust motes
  const moteParticles = useMemo(() => {
    const m = [];
    const count = 3 + Math.floor(Math.random() * 3); // 3 to 5
    for(let i=0; i<count; i++) {
      m.push({
        bx: Math.random(),
        by: Math.random(),
        vx: (Math.random() - 0.5) * 0.08, // Very slow drift
        vy: (Math.random() - 0.5) * 0.08,
        size: 1.5 + Math.random() * 2.5,
        opacity: 0.03 + Math.random() * 0.06, // Extremely faint
        phase: Math.random() * Math.PI * 2
      });
    }
    return m;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    
    // Generate sprites
    gasParticles.forEach(p => {
      p.sprite = getGasSprite(p.color, 64);
    });

    // Accretion sprites (smaller, hotter)
    accretionParticles.forEach(p => {
       p.sprite = getGasSprite(p.color, 32); 
    });

    // Dust sprite (dark)
    const dustSprite = document.createElement('canvas');
    dustSprite.width = 128; dustSprite.height = 128;
    const dCtx = dustSprite.getContext('2d');
    const dGrad = dCtx.createRadialGradient(64,64,0,64,64,64);
    dGrad.addColorStop(0, 'rgba(6,3,16,0.6)');
    dGrad.addColorStop(1, 'rgba(6,3,16,0)');
    dCtx.fillStyle = dGrad;
    dCtx.fillRect(0,0,128,128);

    let width, height, minDim;
    
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      
      // Responsive scale: On mobile (portrait), boost size to be more immersive
      const isPortrait = height > width;
      minDim = isPortrait ? width * 1.35 : Math.min(width, height);
      
      // Cap DPR for performance
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };
    resize();
    window.addEventListener('resize', resize);

    let frameId;
    const startT = performance.now();

    const render = (t) => {
      if (isPausedRef.current) { return; }
      const elapsed = (t - startT) / 1000 * speed;
      ctx.clearRect(0, 0, width, height);
      
      const cx = width / 2;
      const cy = height / 2;
      const ringScale = minDim;

      // Draw Gas Sprites - "Majestic Flow" Animation
      // Use source-over to prevent flickering
      ctx.globalCompositeOperation = 'source-over'; 
      // Slower global rotation for majesty
      const globalRot = elapsed * 0.004; 
      // Subtle whole-galaxy drift (0.04 deg/sec - barely noticeable)
      const subtleDrift = elapsed * 0.0007;

      for(let i=0; i<gasParticles.length; i++) {
        const p = gasParticles[i];
        const a = p.angle + globalRot * p.speed + subtleDrift;
        
        // Fluid Dynamics: Slower, rolling waves (Liquid light)
        // Frequencies reduced for relaxation
        const wave1 = Math.sin(a * 3 + elapsed * 0.2); // Slow heave
        const wave2 = Math.cos(a * 6 - elapsed * 0.15); // Counter flow
        const wave3 = Math.sin(a * 10 + elapsed * 0.4) * 0.3; // Detail ripple
        
        const turb = (wave1 * 0.012 + wave2 * 0.006 + wave3 * 0.003);
        const dist = (p.r + turb) * ringScale;
        
        const x = cx + Math.cos(a) * dist;
        const y = cy + Math.sin(a) * dist;
        
        // "Ethereal Breath" instead of rapid shimmer
        // Very slow, deep pulsing of light
        const deepBreath = Math.sin(elapsed * 0.8 + p.pulseOffset) * 0.1;
        const pulse = 1 + Math.sin(elapsed * (p.wobbleSpeed * 0.5) + p.pulseOffset) * 0.08 + deepBreath;
        
        // Density brightness: Smoother transition
        const densityBoost = Math.max(0, wave1 + wave2) * 0.15; 
        
        const baseSize = p.size * (minDim / 800) * pulse;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(a + Math.PI/2); 
        
        // Opacity: Richer but softer
        // Reduced base slightly, rely more on the additive overlap for intensity
        ctx.globalAlpha = Math.min(1, (0.22 + densityBoost) * intensity);
        
        // Gentle stretch breathing - follows the flow
        const stretchBreath = 1 + deepBreath * 0.15;
        ctx.scale(1, p.stretch * stretchBreath); 
        ctx.drawImage(p.sprite, -baseSize, -baseSize, baseSize*2, baseSize*2);
        
        ctx.restore();
      }

      // Draw Accretion Disk - "The Cosmic Eye" Infall
      // Intense, swirling matter falling into the event horizon
      for(let i=0; i<accretionParticles.length; i++) {
          const p = accretionParticles[i];
          // Normalized radius (0 = horizon, 1 = outer edge)
          const rNorm = (p.r - 0.13) / 0.20; 

          // Variable speed: Much faster near the black hole (Keplerian-ish)
          const rotSpeed = p.speed * (1 + (1 - rNorm) * 2.5); 
          const currentAngle = p.angle + globalRot * rotSpeed * 0.8 + subtleDrift;

          // Subtle "Breathing" of the eye
          const eyeBreath = 1 + Math.sin(elapsed * 0.2) * 0.03;
          const dist = p.r * ringScale * eyeBreath;

          const x = cx + Math.cos(currentAngle) * dist;
          const y = cy + Math.sin(currentAngle) * dist;

          // Spaghettification: Stretch particles as they get closer to the center
          const stretch = 1.5 + (1 - rNorm) * 2.5;
          const size = p.size * (minDim / 800) * (0.8 + Math.sin(elapsed * 0.4 + p.phase)*0.2);

          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(currentAngle + Math.PI/2); // Tangential alignment

          // Brightness increases near center
          const alpha = Math.min(1, (1 - rNorm * 0.7) * 0.7 * intensity);
          ctx.globalAlpha = alpha;

          ctx.scale(1, stretch);
          ctx.drawImage(p.sprite, -size/2, -size/2, size, size);
          ctx.restore();
      }

      // Draw Dust (Subtract/Darken)
      ctx.globalCompositeOperation = 'source-over';
      for(let i=0; i<dustParticles.length; i++) {
        const d = dustParticles[i];
        // Dust moves with the galaxy drift (no extra fast rotation)
        const a = d.angle + subtleDrift;
        const dist = d.r * ringScale;
        const x = cx + Math.cos(a) * dist;
        const y = cy + Math.sin(a) * dist;
        const s = d.size * (minDim / 800) * 1.5;
        
        ctx.globalAlpha = d.opacity * intensity;
        ctx.drawImage(dustSprite, x - s, y - s, s*2, s*2);
      }

      // Draw Motes (Slow Drifting Life)
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = 'rgba(210, 225, 255, 0.8)';
      for(let i=0; i<moteParticles.length; i++) {
        const m = moteParticles[i];
        
        // Continuous smooth drift based on elapsed time
        let x = (m.bx + m.vx * elapsed * 0.1) % 1.0;
        let y = (m.by + m.vy * elapsed * 0.1) % 1.0;
        
        if (x < 0) x += 1;
        if (y < 0) y += 1;
        
        const px = x * width;
        const py = y * height;
        
        // Subtle opacity breathing
        const pulse = 0.7 + Math.sin(elapsed * 0.5 + m.phase) * 0.3;
        // Slightly increased visibility for the "life" effect
        ctx.globalAlpha = m.opacity * 1.5 * pulse * intensity;
        
        ctx.beginPath();
        ctx.arc(px, py, m.size * (minDim / 1000), 0, Math.PI * 2);
        ctx.fill();
      }

      frameId = requestAnimationFrame(render);
    };
    
    const handleCollapsePause = (e) => { 
      const wasPaused = isPausedRef.current;
      isPausedRef.current = e.detail?.paused ?? false;
      if (wasPaused && !isPausedRef.current) {
        frameId = requestAnimationFrame(render);
      }
    };
    window.addEventListener('collapsePause', handleCollapsePause);
    isPausedRef.current = document.body.classList.contains('collapse-animating');
    
    frameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('collapsePause', handleCollapsePause);
      window.removeEventListener('resize', resize);
    };
  }, [intensity, speed, gasParticles, dustParticles, accretionParticles, moteParticles]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none" 
      style={{ mixBlendMode: 'screen' }}
    />
  );
});

RingStructureCanvas.displayName = 'RingStructureCanvas';


const MicrostarCanvas = memo(({ starsData, intensity, speed }) => {
  const canvasRef = useRef(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !starsData) return;
    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });

    let width, height, minDim;
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      
      const isPortrait = height > width;
      minDim = isPortrait ? width * 1.35 : Math.min(width, height);

      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialize sprites from catalog
    const { data, spriteCatalog } = starsData;
    // Pre-render canvases for catalog if not already done
    spriteCatalog.forEach(entry => {
      if (!entry.canvas) {
         entry.canvas = getStarSprite(entry.baseR, entry.color, entry.type);
         entry.offset = entry.canvas.width / 2;
      }
    });

    let frameId;
    const startT = performance.now();
    const count = data.length / 14;

    const render = (t) => {
      if (isPausedRef.current) { return; } // Completely stop loop when paused
      const elapsed = (t - startT) / 1000 * speed;
      ctx.clearRect(0, 0, width, height);

      // Global drift calculations
      const driftX = Math.sin(elapsed * 0.05) * minDim * 0.02;
      const driftY = Math.cos(elapsed * 0.04) * minDim * 0.02;

      const cx = width / 2;
      const cy = height / 2;

      ctx.globalCompositeOperation = 'source-over';

      for (let i = 0; i < count; i++) {
        const stride = i * 14;

        // Decode Data from Float32Array
        // [0]ox, [1]oy, [2]angle, [3]radius, [4]orbSpeed, [5]twOffset, [6]twSpeed, 
        // [7]opacity, [8]spriteId, [9]dX, [10]dY, [11]isOrbital

        const isOrbital = data[stride + 11];
        let x, y;

        if (isOrbital > 0.5) {
          // Orbital Motion + Subtle Drift (matched to 0.04 deg/s)
          const a = data[stride + 2] + elapsed * data[stride + 4] + elapsed * 0.0007;
          // Breathe radius
          const r = data[stride + 3] * minDim * 0.5 * (1 + Math.sin(elapsed * 0.2 + i) * 0.01);
          x = cx + Math.cos(a) * r;
          y = cy + Math.sin(a) * r;
          x += driftX * data[stride + 3]; // Parallax
        } else {
          // Field Motion
          x = data[stride + 0] * width + driftX * 0.2 + data[stride + 9] * elapsed * 10;
          y = data[stride + 1] * height + driftY * 0.2 + data[stride + 10] * elapsed * 10;

          // Wrap logic (inline for perf)
          if (x < 0) x = (x % width) + width;
          else if (x > width) x = x % width;

          if (y < 0) y = (y % height) + height;
          else if (y > height) y = y % height;
        }

        // Culling
        if (x < -20 || x > width + 20 || y < -20 || y > height + 20) continue;

        // MAGNITUDE 10 IMPROVEMENT: Organic Multi-Wave Animation
        const spriteIdx = data[stride + 8];
        const sprite = spriteCatalog[spriteIdx];
        const isHero = sprite.type === 'hero';
        const isHalo = sprite.type === 'halo';

        let twinkle;

        if (isHero) {
          // COMPLEX ORGANIC BREATHING
          // Combination of two sine waves at different frequencies creates a non-repetitive, natural feel
          // Wave 1: Slow, deep breath (Main cycle) - Slower (~6s cycle)
          // Wave 2: Subtle harmonic (Variation)
          const t = elapsed;
          const offset = data[stride + 5];

          const wave1 = Math.sin(t * 0.3 + offset); 
          const wave2 = Math.sin(t * 1.1 + offset * 2) * 0.3;

          // Normalized 0 to 1, pushed towards 1 for "always bright" feel
          twinkle = 0.5 + 0.5 * ((wave1 + wave2) / 1.3);
        } else if (isHalo) {
          // GENTLE PULSING (Spiral Halo Template)
          // Slower, rhythmic pulse like a distant beacon
          const t = elapsed;
          const offset = data[stride + 5];
          twinkle = 0.6 + 0.4 * Math.sin(t * 0.5 + offset);
        } else {
          // Standard background twinkle
          const phase = elapsed * data[stride + 6] + data[stride + 5];
          twinkle = (Math.sin(phase) + 1) * 0.5;
        }

        const baseAlpha = data[stride + 7] * intensity;

        // ALPHA DYNAMICS
        // Hero stars: Extremely stable high-end brightness (0.85 - 1.1) 
        // Halo stars: Stable, soft glow (0.7 - 1.1)
        // We allow >1.0 multiplier effectively because we want them to pop
        const alphaMultiplier = isHero 
          ? 0.9 + 0.3 * twinkle // Range: 0.9 to 1.2
          : (isHalo ? 0.7 + 0.4 * twinkle : 0.4 + 0.6 * twinkle); // Halo: 0.7-1.1

        // Cap alpha at 1.0 for canvas globalAlpha, but conceptually allow over-brightness via size
        let alpha = Math.min(1.0, baseAlpha * alphaMultiplier);

        // Special boost for super-bright moments
        if ((isHero || isHalo) && twinkle > 0.8) alpha = Math.min(1.0, alpha * 1.1);

        if (alpha < 0.01) continue;

        ctx.globalAlpha = alpha;

        // SIZE DYNAMICS (The "Breathing" Effect)
        // Hero stars: Majestic, deep breathing that feels alive
        // Halo stars: Moderate breathing
        const breatheRange = isHero ? 0.35 : (isHalo ? 0.15 : 0.06);
        // Smoother sine-based ease for a hypnotic pulse
        const breatheEase = (isHero || isHalo) ? (Math.sin((twinkle - 0.5) * Math.PI) * 0.5 + 0.5) : twinkle;
        const breathe = 1 + (breatheEase - 0.5) * breatheRange; 

        const baseScale = (minDim / 1000);
        const scale = baseScale * breathe;
        const offsetVal = sprite.offset * scale;
        const size = offsetVal * 2;

        // MAJESTIC ROTATION
        if (isHero) {
           ctx.save();
           ctx.translate(x, y);
           // Ultra-slow, imperceptible roll that catches the "light"
           // Alternating direction based on index to reduce uniformity
           const dir = (i % 2 === 0 ? 1 : -1);
           const rot = elapsed * 0.015 * dir + data[stride + 5];
           ctx.rotate(rot);
           ctx.drawImage(sprite.canvas, -offsetVal, -offsetVal, size, size);
           ctx.restore();
        } else {
           ctx.drawImage(sprite.canvas, x - offsetVal, y - offsetVal, size, size);
        }
      }

      frameId = requestAnimationFrame(render);
    };
    
    const handleCollapsePause = (e) => { 
      const wasPaused = isPausedRef.current;
      isPausedRef.current = e.detail?.paused ?? false;
      if (wasPaused && !isPausedRef.current) {
        frameId = requestAnimationFrame(render);
      }
    };
    window.addEventListener('collapsePause', handleCollapsePause);
    isPausedRef.current = document.body.classList.contains('collapse-animating');
    
    frameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('collapsePause', handleCollapsePause);
      window.removeEventListener('resize', resize);
    };
  }, [starsData, intensity, speed]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none" 
      style={{ mixBlendMode: 'screen' }}
    />
  );
});

MicrostarCanvas.displayName = 'MicrostarCanvas';

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════

export default function StarburstRingGalaxy({ intensity = 1.0, speed = 1.0 }) {
  // Generate optimized star set - Reduced count for cleaner look
  const microstars = useMemo(() => generateMicrostars(1600, 77), []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden" 
      style={{ zIndex: 0, isolation: 'isolate' }}
    >
      {/* 1. Deep Void & Event Horizon (CSS) */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, 
              rgb(0, 0, 0) 0%, 
              rgb(0, 0, 0) 11%, 
              rgba(25, 10, 50, 0.4) 14%,
              rgb(20, 5, 49) 30%, 
              rgb(14, 6, 42) 60%,
              rgb(4, 2, 14) 100%
            )
          `
        }}
      />

      {/* 2. Static Atmospheric Wash (CSS) - Cheaper than canvas fill */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(125, 44, 255, 0.04) 0%, transparent 60%)`,
          mixBlendMode: 'screen'
        }}
      />

      {/* 3. Ring Structure (Gas Sprites) */}
      <RingStructureCanvas intensity={intensity} speed={speed} />

      {/* 4. Natural Nebula Clouds (Static - No Animation) */}
      <div className="absolute inset-0 opacity-70 mix-blend-screen overflow-hidden">
        {/* Deep violet cloud - upper left */}
        <div 
          className="absolute w-[80vw] h-[70vw] left-[-10%] top-[-10%]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(140, 100, 220, 0.15) 0%, rgba(110, 70, 180, 0.05) 50%, transparent 70%)',
            filter: 'blur(60px)',
            borderRadius: '40% 60% 70% 30% / 50% 60% 40% 50%',
            opacity: 0.7
          }}
        />
        
        {/* Magenta cloud - right side */}
        <div 
          className="absolute w-[70vw] h-[80vw] right-[-15%] top-[10%]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(180, 80, 200, 0.12) 0%, rgba(150, 60, 170, 0.04) 50%, transparent 70%)',
            filter: 'blur(65px)',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            opacity: 0.6
          }}
        />
        
        {/* Blue-violet wisps - bottom */}
        <div 
          className="absolute w-[90vw] h-[60vw] left-[5%] bottom-[-15%]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(100, 120, 200, 0.1) 0%, rgba(80, 100, 170, 0.03) 50%, transparent 70%)',
            filter: 'blur(55px)',
            borderRadius: '70% 30% 50% 50% / 40% 60% 40% 60%',
            opacity: 0.5
          }}
        />

        {/* Cyan accent - lower left */}
        <div 
          className="absolute w-[60vw] h-[50vw] left-[-5%] bottom-[10%]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(80, 160, 220, 0.08) 0%, transparent 70%)',
            filter: 'blur(50px)',
            borderRadius: '50% 50% 60% 40%',
            opacity: 0.4
          }}
        />
      </div>

      {/* 5. Microstars (Sprite Canvas) */}
      <MicrostarCanvas starsData={microstars} intensity={intensity} speed={speed} />

      {/* 6. Vignette Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 90% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.6) 100%)`
        }}
      />
    </div>
  );
}