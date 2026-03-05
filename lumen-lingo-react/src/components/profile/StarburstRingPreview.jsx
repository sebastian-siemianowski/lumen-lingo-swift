import React, { useRef, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

const PALETTE = {
  coreGlow: [217, 196, 255],
  innerHalo: [154, 86, 255],
  violetGas: [125, 44, 255],
  magentaGas: [208, 75, 255],
  neonBlue: [75, 216, 255],
};

// Gas sprite generator matching the actual scene
const getGasSprite = (color, size) => {
  const [r, g, b] = color;
  const canvas = document.createElement('canvas');
  canvas.width = size * 2;
  canvas.height = size * 2;
  const ctx = canvas.getContext('2d');
  const center = size;

  const grad = ctx.createRadialGradient(center, center, 0, center, center, size);
  grad.addColorStop(0, `rgba(${Math.min(255, r+30)}, ${Math.min(255, g+30)}, ${Math.min(255, b+30)}, 0.25)`);
  grad.addColorStop(0.25, `rgba(${r}, ${g}, ${b}, 0.12)`);
  grad.addColorStop(0.6, `rgba(${r}, ${g}, ${b}, 0.03)`);
  grad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size * 2, size * 2);
  return canvas;
};

export default function StarburstRingPreview() {
  const canvasRef = useRef(null);
  const ringCanvasRef = useRef(null);
  const seed = 77;
  
  const seededRandom = (s, n) => {
    const x = Math.sin(s * 9999 + n * 7919) * 10000;
    return x - Math.floor(x);
  };

  // Generate star populations with realistic distribution
  const generateStars = () => {
    const stars = [];
    const starColors = [
      [255, 255, 255], [220, 235, 255], [255, 248, 240], 
      [200, 180, 255], [255, 220, 240], [255, 245, 220],
      [180, 220, 255], [255, 200, 220], [200, 255, 245], [255, 190, 210]
    ];

    // Ring stars (65%)
    for (let i = 0; i < 240; i++) {
      const rand = (n) => seededRandom(seed + i * 7, n);
      const angle = rand(1) * Math.PI * 2;
      const zr = rand(2);
      
      // Dense ring at 35% radius with spread
      const bias = zr < 0.42 ? 0.3 : 0.8;
      const r = 24 + 28 * (rand(3) * 0.4 + bias * 0.6);
      
      const x = 50 + Math.cos(angle) * r;
      const y = 50 + Math.sin(angle) * r;
      
      const sr = rand(4);
      const size = sr > 0.95 ? 1.2 + rand(5) * 1.2 : (sr > 0.8 ? 0.7 + rand(5) * 0.7 : 0.35 + rand(5) * 0.5);
      
      const colorIdx = Math.floor(rand(6) * starColors.length);
      const color = starColors[colorIdx];
      
      const alpha = 0.3 + rand(7) * 0.6;
      
      stars.push({ x, y, size, color, alpha, zone: 'ring', isHero: sr > 0.92 });
    }

    // Core stars (4%)
    for (let i = 0; i < 15; i++) {
      const rand = (n) => seededRandom(seed + 2000 + i * 19, n);
      const angle = rand(1) * Math.PI * 2;
      const r = rand(2) * rand(3) * 10;
      
      const x = 50 + Math.cos(angle) * r;
      const y = 50 + Math.sin(angle) * r;
      
      const size = 0.8 + rand(4) * 1.0;
      const color = [217, 196, 255];
      const alpha = 0.65 + rand(5) * 0.3;
      
      stars.push({ x, y, size, color, alpha, zone: 'core', isHero: false });
    }

    // Halo stars (18%)
    for (let i = 0; i < 68; i++) {
      const rand = (n) => seededRandom(seed + 3000 + i * 23, n);
      const angle = rand(1) * Math.PI * 2;
      const r = 52 + rand(2) * 23;
      
      const x = 50 + Math.cos(angle) * r;
      const y = 50 + Math.sin(angle) * r;
      
      const size = 0.4 + rand(3) * 0.7;
      const colorIdx = Math.floor(rand(4) * 3);
      const color = [[200, 180, 255], [255, 220, 240], [220, 235, 255]][colorIdx];
      const alpha = 0.25 + rand(5) * 0.45;
      
      stars.push({ x, y, size, color, alpha, zone: 'halo', isHero: false });
    }

    // Field stars (13%)
    for (let i = 0; i < 48; i++) {
      const rand = (n) => seededRandom(seed + 4000 + i * 29, n);
      
      const x = rand(1) * 100;
      const y = rand(2) * 100;
      const size = 0.3 + rand(3) * 0.5;
      const colorIdx = Math.floor(rand(4) * starColors.length);
      const color = starColors[colorIdx];
      const alpha = 0.15 + rand(5) * 0.3;
      
      stars.push({ x, y, size, color, alpha, zone: 'field', isHero: false });
    }

    return stars;
  };

  const stars = useMemo(() => generateStars(), []);

  // Generate ring gas particles - matching actual scene (200 particles)
  const gasParticles = useMemo(() => {
    const p = [];
    const colors = [PALETTE.violetGas, PALETTE.magentaGas, PALETTE.neonBlue, PALETTE.innerHalo, PALETTE.coreGlow];
    
    for (let i = 0; i < 200; i++) {
      const angle = (i / 200) * Math.PI * 2 + (Math.random() * 0.1);
      const rVar = (Math.random() - 0.5) * 0.18;
      const r = 0.35 + rVar;
      const size = 40 + Math.random() * 50;
      const color = colors[Math.floor(Math.random() * colors.length)];
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

  // Accretion disk particles - matching actual scene (160 particles)
  const accretionParticles = useMemo(() => {
    const a = [];
    const colors = [[255, 255, 255], [200, 230, 255], [230, 210, 255]];
    
    for (let i = 0; i < 160; i++) {
      a.push({
        angle: Math.random() * Math.PI * 2,
        r: 0.13 + Math.pow(Math.random(), 1.8) * 0.20,
        speed: 0.3 + Math.random() * 0.5,
        size: 12 + Math.random() * 18,
        color: colors[Math.floor(Math.random() * colors.length)],
        phase: Math.random() * Math.PI * 2,
        sprite: null
      });
    }
    return a;
  }, []);

  // Dust particles
  const dustParticles = useMemo(() => {
    const d = [];
    for (let i = 0; i < 15; i++) {
      d.push({
        angle: (i / 15) * Math.PI * 2 + Math.random(),
        r: 0.35 + (Math.random() - 0.5) * 0.1,
        size: 50 + Math.random() * 40,
        opacity: 0.1 + Math.random() * 0.1
      });
    }
    return d;
  }, []);

  // Mote particles
  const moteParticles = useMemo(() => {
    const m = [];
    const count = 3 + Math.floor(Math.random() * 3);
    for (let i = 0; i < count; i++) {
      m.push({
        bx: Math.random(),
        by: Math.random(),
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.08,
        size: 1.5 + Math.random() * 2.5,
        opacity: 0.03 + Math.random() * 0.06,
        phase: Math.random() * Math.PI * 2
      });
    }
    return m;
  }, []);

  // Ring canvas effect - matching actual scene
  useEffect(() => {
    const canvas = ringCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    let width, height;
    const resize = () => {
      width = canvas.parentElement.offsetWidth;
      height = canvas.parentElement.offsetHeight;
      const dpr = 2;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    
    resize();

    // Generate sprites
    gasParticles.forEach(p => {
      p.sprite = getGasSprite(p.color, 64);
    });

    accretionParticles.forEach(p => {
      p.sprite = getGasSprite(p.color, 32);
    });

    // Dust sprite
    const dustSprite = document.createElement('canvas');
    dustSprite.width = 128;
    dustSprite.height = 128;
    const dCtx = dustSprite.getContext('2d');
    const dGrad = dCtx.createRadialGradient(64, 64, 0, 64, 64, 64);
    dGrad.addColorStop(0, 'rgba(6,3,16,0.6)');
    dGrad.addColorStop(1, 'rgba(6,3,16,0)');
    dCtx.fillStyle = dGrad;
    dCtx.fillRect(0, 0, 128, 128);

    let animationId;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      // Responsive scale: On mobile (portrait), boost size to be more immersive
      const isPortrait = height > width;
      const minDim = isPortrait ? width * 1.35 : Math.min(width, height);
      const ringScale = minDim;

      ctx.globalCompositeOperation = 'lighter';
      const globalRot = elapsed * 0.004;
      const subtleDrift = elapsed * 0.0007;

      // Gas sprites
      for (let i = 0; i < gasParticles.length; i++) {
        const p = gasParticles[i];
        const a = p.angle + globalRot * p.speed + subtleDrift;
        
        const wave1 = Math.sin(a * 3 + elapsed * 0.2);
        const wave2 = Math.cos(a * 6 - elapsed * 0.15);
        const wave3 = Math.sin(a * 10 + elapsed * 0.4) * 0.3;
        const turb = (wave1 * 0.012 + wave2 * 0.006 + wave3 * 0.003);
        const dist = (p.r + turb) * ringScale;
        
        const x = cx + Math.cos(a) * dist;
        const y = cy + Math.sin(a) * dist;
        
        const deepBreath = Math.sin(elapsed * 0.8 + p.pulseOffset) * 0.1;
        const pulse = 1 + Math.sin(elapsed * (p.wobbleSpeed * 0.5) + p.pulseOffset) * 0.08 + deepBreath;
        const densityBoost = Math.max(0, wave1 + wave2) * 0.15;
        const baseSize = p.size * (minDim / 800) * pulse;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(a + Math.PI/2);
        ctx.globalAlpha = Math.min(1, (0.22 + densityBoost));
        
        const stretchBreath = 1 + deepBreath * 0.15;
        ctx.scale(1, p.stretch * stretchBreath);
        ctx.drawImage(p.sprite, -baseSize, -baseSize, baseSize * 2, baseSize * 2);
        ctx.restore();
      }

      // Accretion disk
      for (let i = 0; i < accretionParticles.length; i++) {
        const p = accretionParticles[i];
        const rNorm = (p.r - 0.13) / 0.20;
        const rotSpeed = p.speed * (1 + (1 - rNorm) * 2.5);
        const currentAngle = p.angle + globalRot * rotSpeed * 0.8 + subtleDrift;

        const eyeBreath = 1 + Math.sin(elapsed * 0.2) * 0.03;
        const dist = p.r * ringScale * eyeBreath;
        
        const x = cx + Math.cos(currentAngle) * dist;
        const y = cy + Math.sin(currentAngle) * dist;
        
        const stretch = 1.5 + (1 - rNorm) * 2.5;
        const size = p.size * (minDim / 800) * (0.8 + Math.sin(elapsed * 0.4 + p.phase) * 0.2);
        const alpha = Math.min(1, (1 - rNorm * 0.7) * 0.7);

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(currentAngle + Math.PI/2);
        ctx.globalAlpha = alpha;
        ctx.scale(1, stretch);
        ctx.drawImage(p.sprite, -size/2, -size/2, size, size);
        ctx.restore();
      }

      // Dust
      ctx.globalCompositeOperation = 'source-over';
      for (let i = 0; i < dustParticles.length; i++) {
        const d = dustParticles[i];
        const a = d.angle + subtleDrift;
        const dist = d.r * ringScale;
        const x = cx + Math.cos(a) * dist;
        const y = cy + Math.sin(a) * dist;
        const s = d.size * (minDim / 800) * 1.5;
        
        ctx.globalAlpha = d.opacity;
        ctx.drawImage(dustSprite, x - s, y - s, s * 2, s * 2);
      }

      // Motes
      ctx.globalCompositeOperation = 'screen';
      ctx.fillStyle = 'rgba(210, 225, 255, 1)';
      for (let i = 0; i < moteParticles.length; i++) {
        const m = moteParticles[i];
        
        let x = (m.bx + m.vx * elapsed * 0.1) % 1.0;
        let y = (m.by + m.vy * elapsed * 0.1) % 1.0;
        if (x < 0) x += 1;
        if (y < 0) y += 1;
        
        const px = x * width;
        const py = y * height;
        const pulse = 0.7 + Math.sin(elapsed * 0.5 + m.phase) * 0.3;
        
        ctx.globalAlpha = m.opacity * 1.5 * pulse;
        ctx.beginPath();
        ctx.arc(px, py, m.size * (minDim / 1000), 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [gasParticles, accretionParticles, dustParticles, moteParticles]);

  // Stars canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.parentElement.offsetWidth;
    const height = canvas.parentElement.offsetHeight;
    canvas.width = width * 2;
    canvas.height = height * 2;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(2, 2);

    ctx.clearRect(0, 0, width, height);

    stars.forEach(star => {
      const x = (star.x / 100) * width;
      const y = (star.y / 100) * height;
      const [r, g, b] = star.color;

      // Atmospheric diffusion
      if (star.size > 0.8) {
        const diffuseRadius = star.size * 5.5;
        const diffuseGrad = ctx.createRadialGradient(x, y, 0, x, y, diffuseRadius);
        diffuseGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${star.alpha * 0.18})`);
        diffuseGrad.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, ${star.alpha * 0.08})`);
        diffuseGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        ctx.fillStyle = diffuseGrad;
        ctx.beginPath();
        ctx.arc(x, y, diffuseRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Main glow
      const glowRadius = star.size * 3.0;
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
      gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${star.alpha * 0.6})`);
      gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${star.alpha * 0.15})`);
      gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
      ctx.fill();

      // Core
      const coreRadius = star.size * 1.2;
      const coreGrad = ctx.createRadialGradient(x, y, 0, x, y, coreRadius);
      coreGrad.addColorStop(0, `rgba(255, 255, 255, ${Math.min(1, star.alpha * 1.2)})`);
      coreGrad.addColorStop(0.4, `rgba(${Math.min(255, r + 30)}, ${Math.min(255, g + 30)}, ${Math.min(255, b + 30)}, ${star.alpha * 0.8})`);
      coreGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(x, y, coreRadius, 0, Math.PI * 2);
      ctx.fill();

      // Bright center for hero stars
      if (star.isHero && star.size > 1.0) {
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, star.alpha * 1.5)})`;
        ctx.beginPath();
        ctx.arc(x, y, star.size * 0.22, 0, Math.PI * 2);
        ctx.fill();

        // Diffraction spikes
        ctx.save();
        ctx.globalAlpha = star.alpha * 0.22;
        
        const spikeLength = star.size * 4.2;
        const spikeGrad = ctx.createLinearGradient(x - spikeLength, y, x + spikeLength, y);
        spikeGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0)`);
        spikeGrad.addColorStop(0.5, `rgba(255, 255, 255, 0.8)`);
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
  }, []);

  return (
    <div className="absolute inset-0" style={{ background: 'rgb(4, 2, 14)' }}>
      {/* Deep void - event horizon gradient */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at 50% 50%, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 11%, rgba(25, 10, 50, 0.4) 14%, rgb(20, 5, 49) 30%, rgb(14, 6, 42) 60%, rgb(4, 2, 14) 100%)'
      }} />

      {/* Atmospheric violet wash */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(125, 44, 255, 0.04) 0%, transparent 60%)',
        mixBlendMode: 'screen'
      }} />

      {/* Ring structure canvas */}
      <canvas
        ref={ringCanvasRef}
        className="absolute inset-0"
      />

      {/* Natural nebula clouds */}
      <div className="absolute inset-0 mix-blend-screen overflow-hidden" style={{ opacity: 0.7 }}>
        {/* Deep violet cloud - upper left */}
        <div 
          className="absolute"
          style={{
            width: '80vw',
            height: '70vw',
            left: '-10%',
            top: '-10%',
            background: 'radial-gradient(ellipse at center, rgba(140, 100, 220, 0.15) 0%, rgba(110, 70, 180, 0.05) 50%, transparent 70%)',
            filter: 'blur(60px)',
            borderRadius: '40% 60% 70% 30% / 50% 60% 40% 50%',
            opacity: 0.6
          }}
        />
        
        {/* Magenta cloud - right side */}
        <div 
          className="absolute"
          style={{
            width: '70vw',
            height: '80vw',
            right: '-15%',
            top: '10%',
            background: 'radial-gradient(ellipse at center, rgba(180, 80, 200, 0.12) 0%, rgba(150, 60, 170, 0.04) 50%, transparent 70%)',
            filter: 'blur(65px)',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            opacity: 0.5
          }}
        />
        
        {/* Blue-violet wisps - bottom */}
        <div 
          className="absolute"
          style={{
            width: '90vw',
            height: '60vw',
            left: '5%',
            bottom: '-15%',
            background: 'radial-gradient(ellipse at center, rgba(100, 120, 200, 0.1) 0%, rgba(80, 100, 170, 0.03) 50%, transparent 70%)',
            filter: 'blur(55px)',
            borderRadius: '70% 30% 50% 50% / 40% 60% 40% 60%',
            opacity: 0.4
          }}
        />

        {/* Cyan accent - lower left */}
        <div 
          className="absolute"
          style={{
            width: '60vw',
            height: '50vw',
            left: '-5%',
            bottom: '10%',
            background: 'radial-gradient(ellipse at center, rgba(80, 160, 220, 0.08) 0%, transparent 70%)',
            filter: 'blur(50px)',
            borderRadius: '50% 50% 60% 40%',
            opacity: 0.3
          }}
        />
      </div>

      {/* Microstar canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ opacity: 0.95 }}
      />

      {/* Atmospheric vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 90% 80% at 50% 50%, transparent 40%, rgba(0, 0, 0, 0.6) 100%)'
      }} />
    </div>
  );
}