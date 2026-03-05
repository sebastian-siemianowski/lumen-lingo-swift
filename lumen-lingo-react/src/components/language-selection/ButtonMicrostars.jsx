import React, { useRef, useEffect, memo } from "react";

// Diverse stellar color palette (from cosmic scenes)
const STELLAR_PALETTE = {
  // Hot massive stars
  O_BLUE: [[155, 176, 255], [162, 185, 255], [170, 191, 255]],
  B_BLUE_WHITE: [[185, 206, 255], [192, 213, 255], [200, 220, 255]],
  A_WHITE: [[248, 248, 255], [255, 255, 255], [255, 252, 252]],
  F_YELLOW_WHITE: [[255, 252, 240], [255, 250, 235], [255, 248, 230]],
  G_YELLOW: [[255, 244, 214], [255, 240, 200], [255, 235, 185]],
  K_ORANGE: [[255, 220, 180], [255, 210, 160], [255, 200, 145]],
  // Aqua/Cyan stars (Celestial Lagoon)
  CYAN_SUPER: [170, 245, 255],
  AQUA_GIANT: [185, 255, 250],
  TEAL_BRIGHT: [180, 255, 235],
  TURQUOISE: [175, 255, 245],
  // Exotic colors
  LAVENDER: [233, 213, 255],
  PINK_NEBULA: [255, 195, 225],
  MINT: [200, 255, 225],
  ICE_BLUE: [210, 248, 255],
  RUBY: [255, 100, 100],
  AMBER: [255, 180, 120],
};

// Generate diverse button microstars (inspired by all scenes)
const generateButtonStars = (seed = 123) => {
  const stars = [];
  const seededRandom = (s, n) => {
    const x = Math.sin(s * 9999 + n * 7919) * 10000;
    return x - Math.floor(x);
  };

  // GUARANTEED HERO STARS - Positioned away from center, with slight drift
  const heroPositions = [
    { x: 0.20, y: 0.25, color: [255, 255, 255], driftAngle: 0 },
    { x: 0.80, y: 0.22, color: [170, 245, 255], driftAngle: Math.PI / 2 },
    { x: 0.22, y: 0.78, color: [255, 195, 225], driftAngle: Math.PI },
    { x: 0.82, y: 0.75, color: [233, 213, 255], driftAngle: Math.PI * 1.5 },
  ];

  heroPositions.forEach((hero, i) => {
    stars.push({
      x: hero.x,
      y: hero.y,
      size: 8.0,  // Very large
      color: hero.color,
      type: 'hero',
      hasSpikes: true,
      hasFlicker: false,
      baseOpacity: 1.0,  // Maximum brightness
      twinkleOffset: i * Math.PI / 2,
      twinkleSpeed: 0.08,
      breatheOffset: i * Math.PI / 2,
      breatheSpeed: 0.06,
      flickerPhase: 0,
      colorShiftPhase: 0,
      driftAngle: hero.driftAngle,
      driftRadius: 0.03 + i * 0.008,  // Slightly more drift
      driftSpeed: 0.15 + i * 0.03,    // Drift speed
    });
  });

  // MYSTICAL STARS - Color-shifting
  const mysticalCount = 12;
  for (let i = 0; i < mysticalCount; i++) {
    const rand = (n) => seededRandom(seed + i * 11, n);
    
    const colorRoll = rand(5);
    let color;
    if (colorRoll < 0.3) color = STELLAR_PALETTE.CYAN_SUPER;
    else if (colorRoll < 0.5) color = STELLAR_PALETTE.AQUA_GIANT;
    else if (colorRoll < 0.7) color = STELLAR_PALETTE.LAVENDER;
    else color = STELLAR_PALETTE.PINK_NEBULA;
    
    stars.push({
      x: rand(1),
      y: rand(2),
      size: 1.5 + rand(3) * 2.0,
      color,
      type: 'mystical',
      hasSpikes: false,
      hasFlicker: true,
      baseOpacity: 0.6 + rand(7) * 0.3,
      twinkleOffset: rand(8) * Math.PI * 2,
      twinkleSpeed: 0.2 + rand(9) * 0.3,
      breatheOffset: rand(10) * Math.PI * 2,
      breatheSpeed: 0.08 + rand(11) * 0.12,
      flickerPhase: rand(12) * Math.PI * 2,
      colorShiftPhase: rand(13) * Math.PI * 2,
      driftAngle: rand(14) * Math.PI * 2,
      driftRadius: 0.015 + rand(15) * 0.02,
      driftSpeed: 0.08 + rand(16) * 0.12,
    });
  }

  // STANDARD STARS - Background field
  const standardCount = 24;
  for (let i = 0; i < standardCount; i++) {
    const rand = (n) => seededRandom(seed + 1000 + i * 13, n);
    
    const colorRoll = rand(5);
    let color;
    if (colorRoll < 0.3) color = STELLAR_PALETTE.A_WHITE[Math.floor(rand(6) * 3)];
    else if (colorRoll < 0.5) color = STELLAR_PALETTE.B_BLUE_WHITE[Math.floor(rand(6) * 3)];
    else if (colorRoll < 0.65) color = STELLAR_PALETTE.ICE_BLUE;
    else if (colorRoll < 0.8) color = STELLAR_PALETTE.TEAL_BRIGHT;
    else color = STELLAR_PALETTE.MINT;
    
    stars.push({
      x: rand(1),
      y: rand(2),
      size: 0.5 + rand(3) * 1.2,
      color,
      type: 'standard',
      hasSpikes: false,
      hasFlicker: false,
      baseOpacity: 0.3 + rand(7) * 0.35,
      twinkleOffset: rand(8) * Math.PI * 2,
      twinkleSpeed: 0.15 + rand(9) * 0.25,
      breatheOffset: rand(10) * Math.PI * 2,
      breatheSpeed: 0.08 + rand(11) * 0.12,
      flickerPhase: 0,
      colorShiftPhase: 0,
      driftAngle: rand(12) * Math.PI * 2,
      driftRadius: 0.01 + rand(13) * 0.015,
      driftSpeed: 0.06 + rand(14) * 0.08,
    });
  }

  return stars;
};

const ButtonMicrostars = memo(() => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const startTimeRef = useRef(Date.now());
  const starsRef = useRef(generateButtonStars(123));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let parentRect = canvas.parentElement?.getBoundingClientRect();
    
    const resize = () => {
      parentRect = canvas.parentElement?.getBoundingClientRect();
      if (!parentRect) return;
      
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = parentRect.width * dpr;
      canvas.height = parentRect.height * dpr;
      canvas.style.width = `${parentRect.width}px`;
      canvas.style.height = `${parentRect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      if (!parentRect) {
        parentRect = canvas.parentElement?.getBoundingClientRect();
        if (!parentRect) {
          animationRef.current = requestAnimationFrame(animate);
          return;
        }
      }

      const elapsed = (Date.now() - startTimeRef.current) / 1000;
      const width = parentRect.width;
      const height = parentRect.height;

      ctx.clearRect(0, 0, width, height);

      starsRef.current.forEach((star, i) => {
        const [baseR, baseG, baseB] = star.color;
        
        // Multi-layer twinkle - organic breathing (Spiral Halo)
        const twinklePhase = elapsed * star.twinkleSpeed + star.twinkleOffset;
        const twinkle = 0.5 + Math.sin(twinklePhase) * 0.35 + Math.sin(twinklePhase * 1.7) * 0.15;
        
        // Intensity breathing (Edge of Andromeda)
        const intensityBreath = 0.7 + Math.sin(elapsed * 0.12 + star.twinkleOffset) * 0.2 + 
                                Math.sin(elapsed * 0.08 + star.twinkleOffset * 1.5) * 0.1;
        
        // Flickering effect (Celestial Lagoon) - 30% of stars
        let flickerMult = 1;
        if (star.hasFlicker) {
          const flickerPhase = elapsed * 0.42 + star.flickerPhase;
          flickerMult = 1 + Math.sin(flickerPhase) * 0.25 + Math.sin(flickerPhase * 1.8) * 0.12;
        }
        
        let opacity = star.baseOpacity * twinkle * flickerMult * intensityBreath;
        if (opacity < 0.01) return;
        
        // Size breathing with dual harmonics (Spiral Halo)
        const breathePhase = elapsed * 0.15 + star.breatheOffset;
        const breathe = 1 + Math.sin(breathePhase) * 0.12 + Math.sin(breathePhase * 0.7) * 0.08;
        const sizePulse = 1 + Math.sin(twinklePhase * 0.6) * 0.08;
        const size = star.size * sizePulse * breathe;

        let x = star.x * width;
        let y = star.y * height;

        // Drift animation for all stars
        const driftPhase = elapsed * star.driftSpeed + star.driftAngle;
        x += Math.cos(driftPhase) * star.driftRadius * width;
        y += Math.sin(driftPhase) * star.driftRadius * height;

        // Color-shifting for mystical stars (Lagoon Nebula style)
        let r = baseR, g = baseG, b = baseB;
        if (star.type === 'mystical') {
          const colorCycleSpeed = 0.08 + (i % 7) * 0.012;
          const colorPhase = elapsed * colorCycleSpeed + star.colorShiftPhase;
          const colorShiftIntensity = 0.25 + Math.sin(elapsed * 0.04 + i) * 0.15;
          
          const hueShift = Math.sin(colorPhase) * colorShiftIntensity;
          const warmShift = Math.max(0, hueShift);
          const coolShift = Math.max(0, -hueShift);
          
          r = Math.min(255, Math.round(baseR + warmShift * 65 - coolShift * 35));
          g = Math.min(255, Math.round(baseG + warmShift * 35 - coolShift * 15));
          b = Math.min(255, Math.round(baseB - warmShift * 35 + coolShift * 75));
        } else if (star.type !== 'micro') {
          // Subtle thermal shimmer for standard stars (Lagoon)
          const thermalPhase = elapsed * 0.18 + star.x * 5 + star.y * 3;
          const shift = Math.sin(thermalPhase) * 15 + Math.cos(thermalPhase * 1.4) * 8;
          r = Math.min(255, Math.max(0, baseR + shift));
          g = Math.min(255, Math.max(0, baseG + shift * 0.5));
          b = Math.min(255, Math.max(0, baseB - shift));
        }

        // Multi-layer rendering based on star type
        
        // Atmospheric diffusion (Edge of Andromeda / Lagoon)
        if (star.type !== 'micro') {
          const atmoRadius = size * (star.type === 'hero' ? 9 : star.type === 'mystical' ? 7 : 6);
          const atmoGrad = ctx.createRadialGradient(x, y, 0, x, y, atmoRadius);
          atmoGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${opacity * 0.12})`);
          atmoGrad.addColorStop(0.3, `rgba(${r}, ${g}, ${b}, ${opacity * 0.05})`);
          atmoGrad.addColorStop(0.6, `rgba(${r}, ${g}, ${b}, ${opacity * 0.02})`);
          atmoGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
          ctx.fillStyle = atmoGrad;
          ctx.beginPath();
          ctx.arc(x, y, atmoRadius, 0, Math.PI * 2);
          ctx.fill();
        }

        // Main glow layer (Celestial Lagoon style)
        const glowRadius = size * (star.type === 'hero' ? 5 : 3.5);
        const glowGrad = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
        glowGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${opacity * 0.6})`);
        glowGrad.addColorStop(0.25, `rgba(${r}, ${g}, ${b}, ${opacity * 0.35})`);
        glowGrad.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${opacity * 0.15})`);
        glowGrad.addColorStop(0.75, `rgba(${r}, ${g}, ${b}, ${opacity * 0.05})`);
        glowGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Core with white center (Edge of Andromeda)
        const coreRadius = size * 1.5;
        const coreGrad = ctx.createRadialGradient(x, y, 0, x, y, coreRadius);
        coreGrad.addColorStop(0, `rgba(255, 255, 255, ${Math.min(1, opacity * 1.4)})`);
        coreGrad.addColorStop(0.15, `rgba(255, 253, 250, ${opacity * 1.1})`);
        coreGrad.addColorStop(0.35, `rgba(${Math.min(255, r + 30)}, ${Math.min(255, g + 25)}, ${Math.min(255, b + 20)}, ${opacity * 0.8})`);
        coreGrad.addColorStop(0.6, `rgba(${r}, ${g}, ${b}, ${opacity * 0.4})`);
        coreGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        ctx.fillStyle = coreGrad;
        ctx.beginPath();
        ctx.arc(x, y, coreRadius, 0, Math.PI * 2);
        ctx.fill();

        // Bright hotspot (Celestial Lagoon) - Fast breathing for heroes
        if (star.type !== 'micro' && opacity > 0.35) {
          const innerBreathSpeed = star.type === 'hero' ? 0.8 : 0.15;  // Much faster for heroes
          const innerBreath = 1 + Math.sin(elapsed * innerBreathSpeed + star.breatheOffset) * 0.4;
          const hotspotSize = size * 0.22 * innerBreath;
          const hotspotOpacity = Math.min(1, opacity * 1.5 * innerBreath);
          
          ctx.fillStyle = `rgba(255, 255, 255, ${hotspotOpacity})`;
          ctx.beginPath();
          ctx.arc(x, y, hotspotSize, 0, Math.PI * 2);
          ctx.fill();
        }

        // JWST Diffraction spikes for hero stars - EXTREMELY VISIBLE
        if (star.hasSpikes) {
          ctx.save();
          ctx.globalAlpha = 0.7;  // Very bright, independent of star opacity
          
          const spikeLength = size * 5;  // Smaller spikes
          
          // Horizontal spike
          const hGrad = ctx.createLinearGradient(x - spikeLength, y, x + spikeLength, y);
          hGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0)`);
          hGrad.addColorStop(0.3, `rgba(${r}, ${g}, ${b}, 0.6)`);
          hGrad.addColorStop(0.5, `rgba(255, 255, 255, 1.0)`);
          hGrad.addColorStop(0.7, `rgba(${r}, ${g}, ${b}, 0.6)`);
          hGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
          
          ctx.strokeStyle = hGrad;
          ctx.lineWidth = 2.0;  // Much thicker
          ctx.beginPath();
          ctx.moveTo(x - spikeLength, y);
          ctx.lineTo(x + spikeLength, y);
          ctx.stroke();
          
          // Vertical spike
          const vGrad = ctx.createLinearGradient(x, y - spikeLength, x, y + spikeLength);
          vGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0)`);
          vGrad.addColorStop(0.3, `rgba(${r}, ${g}, ${b}, 0.6)`);
          vGrad.addColorStop(0.5, `rgba(255, 255, 255, 1.0)`);
          vGrad.addColorStop(0.7, `rgba(${r}, ${g}, ${b}, 0.6)`);
          vGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
          
          ctx.strokeStyle = vGrad;
          ctx.lineWidth = 2.0;
          ctx.beginPath();
          ctx.moveTo(x, y - spikeLength);
          ctx.lineTo(x, y + spikeLength);
          ctx.stroke();
          
          ctx.restore();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none rounded-[22px]"
      style={{ 
        isolation: 'isolate', 
        zIndex: 15,
        mixBlendMode: 'screen'
      }}
    />
  );
});

ButtonMicrostars.displayName = 'ButtonMicrostars';

export default ButtonMicrostars;