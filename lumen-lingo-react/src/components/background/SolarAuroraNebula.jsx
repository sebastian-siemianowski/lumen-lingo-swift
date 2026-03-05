import React, { useMemo, useRef, useEffect, memo } from "react";
import { motion } from "framer-motion";

// ═══════════════════════════════════════════════════════════════
// SOLAR AURORA NEBULA — ULTRA PREMIUM TIER
// Energized aurora ribbons with violet, fuchsia, and gold glow
// Dynamic canvas ribbons, undulating motion, quantum sparkles
// ═══════════════════════════════════════════════════════════════

const seededRandom = (seed, n = 1) => {
  const x = Math.sin(seed * 9999 + n * 7919) * 10000;
  return x - Math.floor(x);
};

// ═══════════════════════════════════════════════════════════════
// STELLAR POPULATIONS - Aurora embedded stars
// ═══════════════════════════════════════════════════════════════

const generateAuroraStars = (seed = 42) => {
  const populations = {
    field: [],      // Background field
    nebula: [],     // Nebula-embedded
    bright: []      // Foreground luminous
  };

  // Background layer - faint stars
  for (let i = 0; i < 500; i++) {
    const rand = (n) => seededRandom(seed + i * 13, n);
    
    const colorRoll = rand(5);
    let color;
    if (colorRoll > 0.7) color = [210, 205, 255];      // Pale violet
    else if (colorRoll > 0.45) color = [255, 220, 240]; // Faint pink
    else if (colorRoll > 0.25) color = [255, 240, 220]; // Faint amber
    else color = [235, 235, 245];                        // Nearly white
    
    populations.field.push({
      x: rand(1),
      y: rand(2),
      size: 0.25 + rand(3) * 0.5,
      baseOpacity: 0.15 + rand(4) * 0.3,
      color,
      twinkleSpeed: 0.2 + rand(10) * 0.5,
      twinkleOffset: rand(11) * Math.PI * 2,
      layerDepth: 1,
      layer: 'field'
    });
  }

  // Nebula layer - aurora-tinted stars
  for (let i = 0; i < 550; i++) {
    const rand = (n) => seededRandom(seed + 1000 + i * 17, n);
    
    const colorRoll = rand(5);
    let color;
    if (colorRoll > 0.7) color = [195, 175, 255];      // Soft violet
    else if (colorRoll > 0.45) color = [255, 190, 230]; // Pink tint
    else if (colorRoll > 0.25) color = [255, 220, 190]; // Golden tint
    else color = [225, 220, 245];                        // Violet-white
    
    populations.nebula.push({
      x: rand(1),
      y: rand(2),
      size: 0.4 + rand(3) * 0.8,
      baseOpacity: 0.3 + rand(4) * 0.5,
      color,
      twinkleSpeed: 0.3 + rand(10) * 0.8,
      twinkleOffset: rand(11) * Math.PI * 2,
      layerDepth: 0.5,
      layer: 'nebula'
    });
  }

  // Foreground - bright aurora stars
  for (let i = 0; i < 120; i++) {
    const rand = (n) => seededRandom(seed + 2000 + i * 19, n);
    
    const colorRoll = rand(5);
    let color;
    if (colorRoll > 0.7) color = [180, 150, 255];      // Bright violet
    else if (colorRoll > 0.45) color = [255, 170, 220]; // Bright pink
    else if (colorRoll > 0.25) color = [255, 200, 160]; // Bright amber
    else color = [215, 210, 255];                        // Bright white-violet
    
    populations.bright.push({
      x: rand(1),
      y: rand(2),
      size: 0.8 + rand(3) * 1.4,
      baseOpacity: 0.6 + rand(4) * 0.35,
      color,
      twinkleSpeed: 0.3 + rand(13) * 0.8,
      twinkleOffset: rand(14) * Math.PI * 2,
      layerDepth: 0,
      layer: 'bright'
    });
  }

  return populations;
};

// ═══════════════════════════════════════════════════════════════
// AURORA CURTAINS - Volumetric gas-like aurora with vertical streaks
// Refined geometry: gentle folds, spirals, and organic flow
// ═══════════════════════════════════════════════════════════════

const AuroraRibbonsCanvas = memo(({ intensity, speed }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const startTimeRef = useRef(Date.now());
  const isPausedRef = useRef(false);

  // Generate unique ribbons with varied characteristics
  const ribbons = useMemo(() => {
    // 9 unique ribbons as requested (6-12 range)
    const types = ['smooth', 'fold', 'spiral', 's-curve', 'drape', 'ripple', 'smooth', 'fold', 's-curve'];
    
    return types.map((type, i) => {
      // Varied depths for parallax (0=front, 1=back)
      const depth = i / 8; 
      // Varied base heights (20% - 65% of screen)
      const baseHeight = 0.2 + (Math.sin(i * 99) * 0.5 + 0.5) * 0.45;
      
      return {
        id: i,
        type,
        depth,
        baseHeight, // 0.2 - 0.65
        speed: 0.15 + Math.random() * 0.35, // Slightly slower, more majestic
        drift: (Math.random() - 0.5) * 0.3, // Gentler drift
        colorOffset: Math.random() * Math.PI * 2,
        // Geometry properties
        amplitude: 0.08 + Math.random() * 0.18, // Slightly more dramatic curves
        frequency: 0.3 + Math.random() * 1.2, // Lower frequency = smoother big waves
        width: 0.006 + Math.random() * 0.008, // Slightly wider for full coverage
        segments: 400 + Math.floor(Math.random() * 150), // High density
        clustering: false, // Disabled clustering to ensure unbroken continuity
        flowSpeed: 0.5 + Math.random() * 1.5 // Speed of internal energy flow
      };
    });
  }, []);

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

    const animate = () => {
      if (isPausedRef.current) { return; }
      const time = (Date.now() - startTimeRef.current) / 1000 * speed;
      ctx.clearRect(0, 0, width, height);

      // Use lighter blending for additive glow
      ctx.globalCompositeOperation = 'lighter';

      // Sort ribbons by depth for proper layering (back first)
      const sortedRibbons = [...ribbons].sort((a, b) => b.depth - a.depth);

      sortedRibbons.forEach((ribbon) => {
        // Asynchronous time for each ribbon
        const rTime = time * ribbon.speed + ribbon.id * 10;

        // Extended width to cover wrapping buffer seamlessly
        const totalWidth = width + 400;

        // Horizontal drift calculation
        const driftX = Math.sin(rTime * 0.1) * width * 0.1 + rTime * 50 * ribbon.drift;

        // --- SMOOTH COLOR INTERPOLATION ---
        const rawCycle = Math.sin(rTime * 0.15 + ribbon.colorOffset) * 0.5 + 0.5;

        const c1 = { r: 95, g: 45, b: 190 };  
        const c2 = { r: 210, g: 60, b: 160 }; 
        const c3 = { r: 255, g: 180, b: 70 }; 

        let r, g, b;
        if (rawCycle < 0.5) {
            const t = (1 - Math.cos(rawCycle * Math.PI * 2)) * 0.5; 
            r = c1.r + (c2.r - c1.r) * t;
            g = c1.g + (c2.g - c1.g) * t;
            b = c1.b + (c2.b - c1.b) * t;
        } else {
            const t = (1 - Math.cos((rawCycle - 0.5) * Math.PI * 2)) * 0.5; 
            r = c2.r + (c3.r - c2.r) * t;
            g = c2.g + (c3.g - c2.g) * t;
            b = c2.b + (c3.b - c2.b) * t;
        }

        // Draw vertical streaks along the spline
        for (let i = 0; i < ribbon.segments; i++) {
          const t = i / ribbon.segments; // 0-1

          // --- SPATIAL DISPLACEMENT ---
          // Use totalWidth to ensure pattern continuity across wrap
          let x = t * totalWidth;
          let yOffset = 0;
          let zOffset = 0; 

          // PERIODIC SHAPE LOGIC (Multipliers must be EVEN integers for seamless loops)
          if (ribbon.type === 'smooth') {
             yOffset = Math.sin(t * Math.PI * 2 + rTime * 0.35) * height * 0.055 +
                       Math.cos(t * Math.PI * 2 - rTime * 0.1) * height * 0.025;
          } else if (ribbon.type === 's-curve') {
             x += Math.sin(t * Math.PI * 2 + rTime * 0.15) * width * 0.11 +
                  Math.sin(t * Math.PI * 2 + rTime * 0.05) * width * 0.05; 
             yOffset = Math.sin(t * Math.PI * 2 + rTime * 0.22) * height * 0.09;
          } else if (ribbon.type === 'spiral') {
             const spiralT = t * Math.PI * 4 + rTime * 0.25;
             x += Math.cos(spiralT) * width * 0.045;
             yOffset = Math.sin(spiralT) * height * 0.065;
             zOffset = Math.sin(spiralT); 
          } else if (ribbon.type === 'fold') {
             // 6PI for periodicity
             const foldPhase = t * Math.PI * 6 + rTime * 0.12;
             const fold = Math.sin(foldPhase);
             x += fold * width * 0.018;
             zOffset = fold; 
             yOffset = -Math.abs(fold) * height * 0.03;
          } else if (ribbon.type === 'drape') {
             // 2PI for periodicity
             yOffset = Math.abs(Math.sin(t * Math.PI * 2 + rTime * 0.09)) * height * 0.11;
          } else if (ribbon.type === 'ripple') {
             yOffset = Math.sin(t * Math.PI * 10 - rTime * 0.7) * height * 0.018 + 
                       Math.sin(t * Math.PI * 4 + rTime * 0.2) * height * 0.025;
          }

          // Apply drift with turbulence
          const turbulence = Math.sin(x * 0.01 + rTime * 0.1) * 30;

          // Wrap within totalWidth centered - using double modulo for robust negative handling
          let finalX = ((x + driftX + turbulence) % totalWidth + totalWidth) % totalWidth - 200;
          let finalY = height * ribbon.baseHeight + yOffset;

          // --- DENSITY ---
          // Full density for continuity, slight variation for texture only
          let density = 1.0; 

          // Removed clustering logic entirely to prevent gaps

          // --- RIBBON GEOMETRY ---
          const perspectiveWidth = 1 + zOffset * 0.35;
          const segmentWidth = width * ribbon.width * perspectiveWidth * 4.2; 

          // Periodic height variation
          const localHeightNoise = Math.sin(t * Math.PI * 4 + rTime * 0.7) * 0.4 + 
                                   Math.cos(t * Math.PI * 2 - rTime * 0.2) * 0.3 + 0.3;
          const segmentHeight = height * (0.26 + localHeightNoise * 0.11) * (1 - ribbon.depth * 0.3);

          // --- COLOR & GLOW ---
          // Traveling "Shimmer" pulse along the ribbon
          const flowPhase = t * 12 - rTime * ribbon.flowSpeed;
          const energyFlow = Math.sin(flowPhase) * 0.5 + 0.5;
          const shimmer = 0.85 + energyFlow * 0.35; 

          // Base alpha - slightly reduced for softer look
          const alpha = 0.018 * intensity * (1 - ribbon.depth * 0.5) * density * shimmer;

          // Create gradient for this streak
          const grad = ctx.createLinearGradient(finalX, finalY, finalX, finalY - segmentHeight);

          // Enhanced color richness
          const rInt = Math.floor(r);
          const gInt = Math.floor(g);
          const bInt = Math.floor(b);

          // Volumetric Gradient
          grad.addColorStop(0, `rgba(${rInt}, ${gInt}, ${bInt}, 0)`);
          grad.addColorStop(0.1, `rgba(${rInt}, ${gInt}, ${bInt}, ${alpha * 0.12})`);

          // Bright core (concentrated)
          grad.addColorStop(0.3, `rgba(${Math.min(255, rInt+35)}, ${Math.min(255, gInt+35)}, ${Math.min(255, bInt+35)}, ${alpha * 1.05})`);

          // Main Body
          grad.addColorStop(0.55, `rgba(${rInt}, ${gInt}, ${bInt}, ${alpha * 0.7})`);

          // Ethereal Top Fade
          grad.addColorStop(1, `rgba(${Math.max(0, rInt-30)}, ${Math.max(0, gInt-15)}, ${Math.min(255, bInt+30)}, 0)`);

          ctx.fillStyle = grad;
          ctx.fillRect(finalX - segmentWidth/2, finalY - segmentHeight, segmentWidth, segmentHeight);
        }
      });

      // Global Volumetric Glow (Light Scattering)
      // One soft pass at the bottom to unify
      ctx.globalCompositeOperation = 'screen';
      const glowGrad = ctx.createLinearGradient(0, height, 0, height * 0.6);
      glowGrad.addColorStop(0, `rgba(120, 60, 200, ${0.01 * intensity})`);
      glowGrad.addColorStop(1, `rgba(120, 60, 200, 0)`);
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, width, height);

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
  }, [intensity, speed, ribbons]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ 
        opacity: 0.95, 
        mixBlendMode: 'screen',
        willChange: 'contents',
        transform: 'translate3d(0, 0, 0)',
        filter: 'blur(0.8px)'
      }}
    />
  );
});

AuroraRibbonsCanvas.displayName = 'AuroraRibbonsCanvas';

// ═══════════════════════════════════════════════════════════════
// STELLAR CANVAS - All star populations with aurora tinting
// ═══════════════════════════════════════════════════════════════

const StellarCanvas = memo(({ populations, intensity, speed }) => {
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

    const allStars = [
      ...populations.field,
      ...populations.nebula,
      ...populations.bright
    ];

    const animate = () => {
      if (isPausedRef.current) { return; }
      const elapsed = (Date.now() - startTimeRef.current) / 1000 * speed;
      ctx.clearRect(0, 0, width, height);

      // Gentle global drift
      const globalDriftX = Math.sin(elapsed * 0.04) * 12;
      const globalDriftY = Math.cos(elapsed * 0.032) * 8;

      allStars.forEach((star, i) => {
        const [baseR, baseG, baseB] = star.color;
        const layerMultiplier = 0.5 + star.layerDepth * 0.5;

        // Organic twinkle
        const twinklePhase = elapsed * star.twinkleSpeed + star.twinkleOffset;
        const twinkle = 0.5 + Math.sin(twinklePhase) * 0.35 + Math.sin(twinklePhase * 1.7) * 0.15;

        // Intensity breathing
        const intensityBreath = 0.7 + Math.sin(elapsed * 0.12 + star.twinkleOffset) * 0.2;

        const opacity = star.baseOpacity * twinkle * intensityBreath * intensity;
        if (opacity < 0.01) return;

        // Size pulsing
        const sizePulse = 1 + Math.sin(twinklePhase * 0.6) * 0.08;
        const size = star.size * sizePulse;

        // Undulating wave motion (vertical dominant)
        const baseX = star.x * width;
        const baseY = star.y * height;
        const wavePhase = elapsed * 0.4 + star.x * 10;
        const verticalWave = Math.sin(wavePhase) * 15 * layerMultiplier;
        const horizontalWave = Math.sin(elapsed * 0.3 + star.y * 8) * 8 * layerMultiplier;

        let x = baseX + globalDriftX * layerMultiplier + horizontalWave;
        let y = baseY + globalDriftY * layerMultiplier + verticalWave;

        // Wrap around
        x = ((x % width) + width) % width;
        y = ((y % height) + height) % height;

        // Aurora color tinting based on position
        const yRatio = star.y;
        let r, g, b;
        
        if (yRatio < 0.4) {
          // Upper region - more violet
          const mix = Math.sin(elapsed * 0.1 + i * 0.5) * 0.15;
          r = Math.min(255, Math.round(baseR - mix * 40));
          g = Math.min(255, Math.round(baseG - mix * 30));
          b = Math.min(255, Math.round(baseB + mix * 60));
        } else if (yRatio > 0.6) {
          // Lower region - more amber
          const mix = Math.sin(elapsed * 0.12 + i * 0.7) * 0.15;
          r = Math.min(255, Math.round(baseR + mix * 50));
          g = Math.min(255, Math.round(baseG + mix * 30));
          b = Math.min(255, Math.round(baseB - mix * 40));
        } else {
          // Middle - fuchsia tint
          const mix = Math.sin(elapsed * 0.11 + i * 0.6) * 0.15;
          r = Math.min(255, Math.round(baseR + mix * 40));
          g = Math.min(255, Math.round(baseG - mix * 20));
          b = Math.min(255, Math.round(baseB + mix * 30));
        }

        // Atmospheric diffusion glow
        const diffuseRadius = size * 5;
        const diffuseGradient = ctx.createRadialGradient(x, y, 0, x, y, diffuseRadius);
        diffuseGradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${opacity * 0.15})`);
        diffuseGradient.addColorStop(0.3, `rgba(${r}, ${g}, ${b}, ${opacity * 0.06})`);
        diffuseGradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

        ctx.beginPath();
        ctx.arc(x, y, diffuseRadius, 0, Math.PI * 2);
        ctx.fillStyle = diffuseGradient;
        ctx.fill();

        // Main glow
        const glowRadius = size * 2.8;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${opacity * 0.55})`);
        gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${opacity * 0.12})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

        ctx.beginPath();
        ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core
        const coreGradient = ctx.createRadialGradient(x, y, 0, x, y, size * 1.1);
        coreGradient.addColorStop(0, `rgba(255, 255, 255, ${Math.min(1, opacity * 1.15)})`);
        coreGradient.addColorStop(0.35, `rgba(${Math.min(255, r + 25)}, ${Math.min(255, g + 20)}, ${Math.min(255, b + 15)}, ${opacity * 0.7})`);
        coreGradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

        ctx.beginPath();
        ctx.arc(x, y, size * 1.1, 0, Math.PI * 2);
        ctx.fillStyle = coreGradient;
        ctx.fill();

        // Bright center for prominent stars
        if (star.baseOpacity > 0.45 && size > 0.95) {
          ctx.beginPath();
          ctx.arc(x, y, size * 0.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, opacity * 1.4)})`;
          ctx.fill();
        }

        // Cross-diffraction for brightest stars
        if (star.baseOpacity > 0.65 && size > 1.4) {
          ctx.save();
          ctx.globalAlpha = opacity * 0.18;
          
          const spikeLength = size * 3.8;
          const spikeGrad = ctx.createLinearGradient(x - spikeLength, y, x + spikeLength, y);
          spikeGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0)`);
          spikeGrad.addColorStop(0.5, `rgba(255, 255, 255, 0.7)`);
          spikeGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
          
          ctx.strokeStyle = spikeGrad;
          ctx.lineWidth = 0.7;
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

export default function SolarAuroraNebula({ intensity = 1.0, speed = 1.0 }) {
  const populations = useMemo(() => generateAuroraStars(999), []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden" 
      style={{ zIndex: 0, isolation: 'isolate' }}
    >
      {/* Deep space foundation */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 140% 120% at 50% 50%, 
              rgba(15, 8, 25, 0) 0%, 
              rgba(10, 5, 20, 0.5) 40%,
              rgba(6, 3, 14, 0.8) 70%,
              rgba(3, 2, 8, 1) 100%
            )
          `
        }}
      />

      {/* Ambient violet glow */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 75% 65% at 50% 50%, 
              rgba(100, 50, 180, ${0.06 * intensity}) 0%, 
              rgba(75, 35, 145, ${0.03 * intensity}) 55%,
              transparent 85%
            )
          `,
          filter: 'blur(110px)',
          mixBlendMode: 'screen'
        }}
      />

      {/* Aurora ribbons canvas */}
      <AuroraRibbonsCanvas intensity={intensity} speed={speed} />

      {/* Fuchsia accent glow */}
      <motion.div
        className="absolute"
        style={{
          width: '130%',
          height: '130%',
          top: '-15%',
          left: '-15%',
          background: `
            radial-gradient(ellipse 50% 45% at 65% 38%, 
              rgba(220, 60, 160, ${0.09 * intensity}) 0%, 
              rgba(180, 45, 130, ${0.05 * intensity}) 60%, 
              transparent 95%)
          `,
          filter: 'blur(85px)',
          mixBlendMode: 'screen',
          willChange: 'transform, opacity'
        }}
        animate={{
          scale: [1, 1.06, 1.02, 1.04, 1],
          opacity: [0.7, 0.88, 0.75, 0.82, 0.7],
          x: [0, -8, 5, -4, 0],
          y: [0, 6, -4, 5, 0],
        }}
        transition={{
          duration: 28 / speed,
          repeat: Infinity,
          ease: [0.42, 0, 0.58, 1],
        }}
      />

      {/* Gold internal glow */}
      <motion.div
        className="absolute"
        style={{
          width: '110%',
          height: '110%',
          top: '-5%',
          left: '-5%',
          background: `
            radial-gradient(ellipse 45% 35% at 48% 45%, 
              rgba(255, 180, 80, ${0.11 * intensity}) 0%, 
              rgba(245, 150, 60, ${0.05 * intensity}) 55%, 
              transparent 90%)
          `,
          filter: 'blur(75px)',
          mixBlendMode: 'screen',
          willChange: 'transform, opacity'
        }}
        animate={{
          scale: [1, 1.08, 1, 1.06, 1],
          opacity: [0.6, 0.78, 0.65, 0.72, 0.6],
        }}
        transition={{
          duration: 24 / speed,
          repeat: Infinity,
          ease: [0.4, 0, 0.6, 1],
          delay: 6,
        }}
      />

      {/* Pink highlights */}
      <motion.div
        className="absolute"
        style={{
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(ellipse 38% 30% at 30% 55%, 
              rgba(255, 100, 180, ${0.07 * intensity}) 0%, 
              rgba(220, 70, 150, ${0.03 * intensity}) 70%, 
              transparent 95%)
          `,
          filter: 'blur(65px)',
          mixBlendMode: 'screen',
          willChange: 'transform, opacity'
        }}
        animate={{
          scale: [1, 1.05, 1.02, 1.04, 1],
          opacity: [0.5, 0.68, 0.55, 0.62, 0.5],
          x: [0, 6, -4, 5, 0],
        }}
        transition={{
          duration: 32 / speed,
          repeat: Infinity,
          ease: [0.45, 0.05, 0.55, 0.95],
          delay: 10,
        }}
      />

      {/* Stellar canvas */}
      <StellarCanvas populations={populations} intensity={intensity} speed={speed} />

      {/* Soft volumetric glow */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 52% 42% at 50% 46%, 
              rgba(200, 160, 240, ${0.022 * intensity}) 0%, 
              rgba(180, 140, 220, ${0.01 * intensity}) 60%, 
              transparent 88%)
          `,
          filter: 'blur(70px)',
          mixBlendMode: 'screen'
        }}
      />

      {/* Edge vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 90% 76% at 50% 50%, 
              transparent 0%, 
              transparent 32%,
              rgba(6, 4, 16, ${0.12 * intensity}) 54%,
              rgba(4, 3, 12, ${0.28 * intensity}) 72%,
              rgba(3, 2, 9, ${0.5 * intensity}) 87%,
              rgba(2, 1, 6, ${0.7 * intensity}) 100%
            )
          `
        }}
      />

      {/* Central clarity */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 66% 56% at 50% 47%, 
              rgba(230, 210, 250, ${0.016 * intensity}) 0%, 
              rgba(210, 190, 240, ${0.008 * intensity}) 48%,
              transparent 78%
            )
          `,
          mixBlendMode: 'screen'
        }}
      />
    </div>
  );
}