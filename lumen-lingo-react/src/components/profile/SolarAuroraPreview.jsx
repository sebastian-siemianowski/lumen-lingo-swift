import React, { useRef, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

const seededRandom = (seed, n = 1) => {
  const x = Math.sin(seed * 9999 + n * 7919) * 10000;
  return x - Math.floor(x);
};

const generateAuroraStars = (seed = 999) => {
  const populations = { field: [], nebula: [], bright: [] };

  // Background field
  for (let i = 0; i < 165; i++) {
    const rand = (n) => seededRandom(seed + i * 13, n);
    
    const colorRoll = rand(5);
    let color;
    if (colorRoll > 0.7) color = [210, 205, 255];
    else if (colorRoll > 0.45) color = [255, 220, 240];
    else if (colorRoll > 0.25) color = [255, 240, 220];
    else color = [235, 235, 245];
    
    populations.field.push({
      x: rand(1), y: rand(2),
      size: 0.25 + rand(3) * 0.5,
      baseOpacity: 0.15 + rand(4) * 0.3,
      color,
      layerDepth: 1,
      layer: 'field'
    });
  }

  // Nebula layer
  for (let i = 0; i < 185; i++) {
    const rand = (n) => seededRandom(seed + 1000 + i * 17, n);
    
    const colorRoll = rand(5);
    let color;
    if (colorRoll > 0.7) color = [195, 175, 255];
    else if (colorRoll > 0.45) color = [255, 190, 230];
    else if (colorRoll > 0.25) color = [255, 220, 190];
    else color = [225, 220, 245];
    
    populations.nebula.push({
      x: rand(1), y: rand(2),
      size: 0.4 + rand(3) * 0.8,
      baseOpacity: 0.3 + rand(4) * 0.5,
      color,
      layerDepth: 0.5,
      layer: 'nebula'
    });
  }

  // Foreground bright
  for (let i = 0; i < 40; i++) {
    const rand = (n) => seededRandom(seed + 2000 + i * 19, n);
    
    const colorRoll = rand(5);
    let color;
    if (colorRoll > 0.7) color = [180, 150, 255];
    else if (colorRoll > 0.45) color = [255, 170, 220];
    else if (colorRoll > 0.25) color = [255, 200, 160];
    else color = [215, 210, 255];
    
    populations.bright.push({
      x: rand(1), y: rand(2),
      size: 0.8 + rand(3) * 1.4,
      baseOpacity: 0.6 + rand(4) * 0.35,
      color,
      layerDepth: 0,
      layer: 'bright'
    });
  }

  return populations;
};

const AuroraRibbonsCanvas = ({ intensity = 1.0 }) => {
  const canvasRef = useRef(null);

  const ribbons = useMemo(() => {
    const types = ['smooth', 'fold', 'spiral', 's-curve', 'drape', 'ripple', 'smooth', 'fold', 's-curve'];
    return types.map((type, i) => ({
      id: i,
      type,
      depth: i / 8,
      baseHeight: 0.2 + (Math.sin(i * 99) * 0.5 + 0.5) * 0.45,
      colorOffset: Math.random() * Math.PI * 2,
      amplitude: 0.08 + Math.random() * 0.18,
      frequency: 0.3 + Math.random() * 1.2,
      width: 0.006 + Math.random() * 0.008,
      segments: 400 + Math.floor(Math.random() * 150)
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    const { width, height } = canvas.getBoundingClientRect();
    canvas.width = width * 2;
    canvas.height = height * 2;
    ctx.scale(2, 2);

    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = 'lighter';

    ribbons.forEach((ribbon) => {
      const c1 = { r: 95, g: 45, b: 190 };  
      const c2 = { r: 210, g: 60, b: 160 }; 
      const c3 = { r: 255, g: 180, b: 70 }; 

      const rawCycle = Math.sin(ribbon.id * 0.5 + ribbon.colorOffset) * 0.5 + 0.5;
      let r, g, b;
      if (rawCycle < 0.5) {
        const t = rawCycle * 2;
        r = c1.r + (c2.r - c1.r) * t;
        g = c1.g + (c2.g - c1.g) * t;
        b = c1.b + (c2.b - c1.b) * t;
      } else {
        const t = (rawCycle - 0.5) * 2;
        r = c2.r + (c3.r - c2.r) * t;
        g = c2.g + (c3.g - c2.g) * t;
        b = c2.b + (c3.b - c2.b) * t;
      }

      for (let i = 0; i < ribbon.segments; i++) {
        const t = i / ribbon.segments;
        let x = t * width;
        let yOffset = 0;

        if (ribbon.type === 'smooth') {
          yOffset = Math.sin(t * Math.PI * 2) * height * 0.055 + Math.cos(t * Math.PI * 2) * height * 0.025;
        } else if (ribbon.type === 's-curve') {
          x += Math.sin(t * Math.PI * 2) * width * 0.11;
          yOffset = Math.sin(t * Math.PI * 2) * height * 0.09;
        } else if (ribbon.type === 'spiral') {
          const spiralT = t * Math.PI * 4;
          x += Math.cos(spiralT) * width * 0.045;
          yOffset = Math.sin(spiralT) * height * 0.065;
        } else if (ribbon.type === 'fold') {
          const foldPhase = t * Math.PI * 6;
          const fold = Math.sin(foldPhase);
          x += fold * width * 0.018;
          yOffset = -Math.abs(fold) * height * 0.03;
        } else if (ribbon.type === 'drape') {
          yOffset = Math.abs(Math.sin(t * Math.PI * 2)) * height * 0.11;
        } else if (ribbon.type === 'ripple') {
          yOffset = Math.sin(t * Math.PI * 10) * height * 0.018 + Math.sin(t * Math.PI * 4) * height * 0.025;
        }

        const finalY = height * ribbon.baseHeight + yOffset;
        const segmentWidth = width * ribbon.width * 4.2;
        const segmentHeight = height * 0.26 * (1 - ribbon.depth * 0.3);
        const alpha = 0.018 * intensity * (1 - ribbon.depth * 0.5);

        const grad = ctx.createLinearGradient(x, finalY, x, finalY - segmentHeight);
        grad.addColorStop(0, `rgba(${Math.floor(r)}, ${Math.floor(g)}, ${Math.floor(b)}, 0)`);
        grad.addColorStop(0.1, `rgba(${Math.floor(r)}, ${Math.floor(g)}, ${Math.floor(b)}, ${alpha * 0.12})`);
        grad.addColorStop(0.3, `rgba(${Math.min(255, Math.floor(r)+35)}, ${Math.min(255, Math.floor(g)+35)}, ${Math.min(255, Math.floor(b)+35)}, ${alpha * 1.05})`);
        grad.addColorStop(0.55, `rgba(${Math.floor(r)}, ${Math.floor(g)}, ${Math.floor(b)}, ${alpha * 0.7})`);
        grad.addColorStop(1, `rgba(${Math.max(0, Math.floor(r)-30)}, ${Math.max(0, Math.floor(g)-15)}, ${Math.min(255, Math.floor(b)+30)}, 0)`);

        ctx.fillStyle = grad;
        ctx.fillRect(x - segmentWidth/2, finalY - segmentHeight, segmentWidth, segmentHeight);
      }
    });
  }, [ribbons, intensity]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
      style={{ opacity: 0.95, mixBlendMode: 'screen', filter: 'blur(0.8px)' }}
    />
  );
};

const StellarCanvas = ({ populations, intensity = 1.0 }) => {
  const canvasRef = useRef(null);

  const allStars = useMemo(() => [
    ...populations.field,
    ...populations.nebula,
    ...populations.bright
  ], [populations]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const { width, height } = canvas.getBoundingClientRect();
    canvas.width = width * 2;
    canvas.height = height * 2;
    ctx.scale(2, 2);

    ctx.clearRect(0, 0, width, height);

    allStars.forEach((star, i) => {
      const [baseR, baseG, baseB] = star.color;
      const opacity = star.baseOpacity * intensity;

      const x = star.x * width;
      const y = star.y * height;

      // Aurora tinting
      const yRatio = star.y;
      let r, g, b;
      
      if (yRatio < 0.4) {
        r = Math.max(0, baseR - 30); g = Math.max(0, baseG - 20); b = Math.min(255, baseB + 20);
      } else if (yRatio > 0.6) {
        r = Math.min(255, baseR + 25); g = Math.min(255, baseG + 15); b = Math.max(0, baseB - 25);
      } else {
        r = Math.min(255, baseR + 20); g = Math.max(0, baseG - 10); b = Math.min(255, baseB + 15);
      }

      // Diffusion
      const diffuseRadius = star.size * 5;
      const diffuseGradient = ctx.createRadialGradient(x, y, 0, x, y, diffuseRadius);
      diffuseGradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${opacity * 0.15})`);
      diffuseGradient.addColorStop(0.3, `rgba(${r}, ${g}, ${b}, ${opacity * 0.06})`);
      diffuseGradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
      ctx.fillStyle = diffuseGradient;
      ctx.beginPath();
      ctx.arc(x, y, diffuseRadius, 0, Math.PI * 2);
      ctx.fill();

      // Main glow
      const glowRadius = star.size * 2.8;
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
      gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${opacity * 0.55})`);
      gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${opacity * 0.12})`);
      gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
      ctx.fill();

      // Core
      const coreGradient = ctx.createRadialGradient(x, y, 0, x, y, star.size * 1.1);
      coreGradient.addColorStop(0, `rgba(255, 255, 255, ${Math.min(1, opacity * 1.15)})`);
      coreGradient.addColorStop(0.35, `rgba(${Math.min(255, r + 25)}, ${Math.min(255, g + 20)}, ${Math.min(255, b + 15)}, ${opacity * 0.7})`);
      coreGradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
      ctx.fillStyle = coreGradient;
      ctx.beginPath();
      ctx.arc(x, y, star.size * 1.1, 0, Math.PI * 2);
      ctx.fill();

      // Bright center
      if (star.baseOpacity > 0.45 && star.size > 0.95) {
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, opacity * 1.4)})`;
        ctx.beginPath();
        ctx.arc(x, y, star.size * 0.2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Diffraction spikes
      if (star.baseOpacity > 0.65 && star.size > 1.4) {
        ctx.save();
        ctx.globalAlpha = opacity * 0.18;
        
        const spikeLength = star.size * 3.8;
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
  }, [allStars, intensity]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
      style={{ opacity: 0.95 }}
    />
  );
};

export default function SolarAuroraPreview() {
  const populations = useMemo(() => generateAuroraStars(999), []);

  return (
    <div className="absolute inset-0" style={{ background: 'rgb(3, 2, 8)' }}>
      {/* Deep void foundation */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 140% 120% at 50% 50%, rgba(15, 8, 25, 0) 0%, rgba(10, 5, 20, 0.5) 40%, rgba(6, 3, 14, 0.8) 70%, rgba(3, 2, 8, 1) 100%)'
      }} />

      {/* Ambient violet base */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 75% 65% at 50% 50%, rgba(100, 50, 180, 0.06) 0%, rgba(75, 35, 145, 0.03) 55%, transparent 85%)',
        filter: 'blur(110px)',
        mixBlendMode: 'screen'
      }} />

      {/* Aurora ribbons - main effect */}
      <AuroraRibbonsCanvas intensity={1.0} />

      {/* NEBULA: Rich violet-magenta upper region */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 62% 58% at 28% 22%, rgba(148, 72, 235, 0.48) 0%, rgba(120, 55, 195, 0.28) 34%, rgba(95, 42, 160, 0.12) 56%, transparent 72%),
          radial-gradient(ellipse 54% 50% at 18% 32%, rgba(165, 85, 248, 0.42) 0%, rgba(135, 65, 210, 0.24) 38%, transparent 66%),
          radial-gradient(ellipse 48% 45% at 35% 18%, rgba(128, 62, 215, 0.38) 0%, rgba(102, 48, 180, 0.20) 42%, transparent 68%)
        `,
        filter: 'blur(18px)',
        mixBlendMode: 'screen',
        opacity: 0.82
      }}
      />

      {/* NEBULA: Brilliant fuchsia-pink heart */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 58% 54% at 68% 42%, rgba(228, 68, 175, 0.65) 0%, rgba(198, 52, 152, 0.42) 30%, rgba(168, 38, 128, 0.20) 52%, transparent 70%),
          radial-gradient(ellipse 50% 46% at 75% 36%, rgba(242, 82, 188, 0.58) 0%, rgba(212, 62, 165, 0.34) 34%, transparent 64%),
          radial-gradient(ellipse 45% 42% at 62% 48%, rgba(218, 58, 168, 0.52) 0%, rgba(188, 45, 145, 0.28) 38%, transparent 66%)
        `,
        filter: 'blur(16px)',
        mixBlendMode: 'screen',
        opacity: 0.78
      }}
      />

      {/* NEBULA: Golden amber cascade (center-right) */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 52% 48% at 58% 52%, rgba(255, 188, 85, 0.58) 0%, rgba(242, 162, 68, 0.36) 32%, rgba(225, 138, 52, 0.18) 54%, transparent 70%),
          radial-gradient(ellipse 45% 42% at 52% 46%, rgba(255, 205, 102, 0.52) 0%, rgba(245, 178, 82, 0.30) 36%, transparent 64%),
          radial-gradient(ellipse 42% 40% at 64% 58%, rgba(248, 172, 75, 0.48) 0%, rgba(232, 148, 58, 0.26) 40%, transparent 66%)
        `,
        filter: 'blur(14px)',
        mixBlendMode: 'screen',
        opacity: 0.72
      }}
      />

      {/* NEBULA: Soft orchid wisps (lower-left) */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 46% 44% at 32% 68%, rgba(198, 122, 235, 0.42) 0%, rgba(168, 95, 205, 0.24) 38%, transparent 66%),
          radial-gradient(ellipse 40% 38% at 25% 75%, rgba(185, 105, 225, 0.38) 0%, rgba(155, 82, 195, 0.20) 42%, transparent 68%),
          radial-gradient(ellipse 38% 36% at 38% 62%, rgba(212, 138, 248, 0.36) 0%, rgba(182, 112, 218, 0.18) 44%, transparent 70%)
        `,
        filter: 'blur(15px)',
        mixBlendMode: 'screen',
        opacity: 0.58
      }}
      />

      {/* NEBULA: Coral-pink highlights (right edge) */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 42% 40% at 78% 58%, rgba(255, 118, 192, 0.45) 0%, rgba(232, 92, 168, 0.26) 36%, transparent 64%),
          radial-gradient(ellipse 38% 36% at 85% 48%, rgba(248, 105, 185, 0.40) 0%, rgba(225, 82, 162, 0.22) 40%, transparent 66%)
        `,
        filter: 'blur(13px)',
        mixBlendMode: 'screen',
        opacity: 0.52
      }}
      />

      {/* Stars canvas */}
      <StellarCanvas populations={populations} intensity={1.0} />

      {/* Volumetric depth glow */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 52% 42% at 50% 46%, rgba(200, 160, 240, 0.022) 0%, rgba(180, 140, 220, 0.01) 60%, transparent 88%)',
        filter: 'blur(70px)',
        mixBlendMode: 'screen'
      }} />

      {/* Atmospheric vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 90% 76% at 50% 50%, transparent 0%, transparent 32%, rgba(6, 4, 16, 0.12) 54%, rgba(4, 3, 12, 0.28) 72%, rgba(3, 2, 9, 0.5) 87%, rgba(2, 1, 6, 0.7) 100%)'
      }} />
    </div>
  );
}