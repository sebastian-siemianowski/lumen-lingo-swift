import React, { useRef, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

const seededRandom = (seed, n = 1) => {
  const x = Math.sin(seed * 9999 + n * 7919) * 10000;
  return x - Math.floor(x);
};

const generateStellarPopulations = (seed = 888) => {
  const populations = { field: [], nebula: [], bright: [] };

  // Background field
  for (let i = 0; i < 200; i++) {
    const rand = (n) => seededRandom(seed + i * 13, n);
    
    const colorRoll = rand(5);
    let color;
    if (colorRoll > 0.7) color = [210, 240, 250];
    else if (colorRoll > 0.45) color = [200, 245, 245];
    else if (colorRoll > 0.25) color = [220, 245, 255];
    else color = [235, 245, 250];
    
    populations.field.push({
      x: rand(1), y: rand(2),
      size: 0.2 + rand(3) * 0.4,
      baseOpacity: 0.12 + rand(4) * 0.28,
      color,
      layerDepth: 1,
      layer: 'field'
    });
  }

  // Nebula layer
  for (let i = 0; i < 200; i++) {
    const rand = (n) => seededRandom(seed + 1000 + i * 17, n);
    
    const colorRoll = rand(5);
    let color;
    if (colorRoll > 0.75) color = [185, 235, 245];
    else if (colorRoll > 0.5) color = [195, 240, 250];
    else if (colorRoll > 0.3) color = [210, 245, 255];
    else color = [225, 250, 255];
    
    populations.nebula.push({
      x: rand(1), y: rand(2),
      size: 0.35 + rand(3) * 0.7,
      baseOpacity: 0.28 + rand(4) * 0.45,
      color,
      layerDepth: 0.5,
      layer: 'nebula'
    });
  }

  // Foreground bright
  for (let i = 0; i < 45; i++) {
    const rand = (n) => seededRandom(seed + 2000 + i * 19, n);
    
    const colorRoll = rand(5);
    let color;
    if (colorRoll > 0.7) color = [170, 230, 245];
    else if (colorRoll > 0.45) color = [185, 240, 250];
    else if (colorRoll > 0.25) color = [200, 245, 255];
    else color = [215, 250, 255];
    
    populations.bright.push({
      x: rand(1), y: rand(2),
      size: 0.7 + rand(3) * 1.2,
      baseOpacity: 0.55 + rand(4) * 0.4,
      color,
      layerDepth: 0,
      layer: 'bright'
    });
  }

  return populations;
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
      const [r, g, b] = star.color;
      const opacity = star.baseOpacity * intensity;

      const x = star.x * width;
      const y = star.y * height;

      // Atmospheric diffusion
      const diffuseRadius = star.size * 5;
      const diffuseGradient = ctx.createRadialGradient(x, y, 0, x, y, diffuseRadius);
      diffuseGradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${opacity * 0.15})`);
      diffuseGradient.addColorStop(0.3, `rgba(${r}, ${g}, ${b}, ${opacity * 0.06})`);
      diffuseGradient.addColorStop(0.6, `rgba(${r}, ${g}, ${b}, ${opacity * 0.02})`);
      diffuseGradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
      ctx.fillStyle = diffuseGradient;
      ctx.beginPath();
      ctx.arc(x, y, diffuseRadius, 0, Math.PI * 2);
      ctx.fill();

      // Main glow
      const glowRadius = star.size * 2.8;
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
      gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${opacity * 0.55})`);
      gradient.addColorStop(0.25, `rgba(${r}, ${g}, ${b}, ${opacity * 0.3})`);
      gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${opacity * 0.12})`);
      gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
      ctx.fill();

      // Core
      const coreRadius = star.size * 1.1;
      const coreGradient = ctx.createRadialGradient(x, y, 0, x, y, coreRadius);
      coreGradient.addColorStop(0, `rgba(255, 255, 255, ${Math.min(1, opacity * 1.15)})`);
      coreGradient.addColorStop(0.15, `rgba(255, 253, 250, ${opacity * 0.95})`);
      coreGradient.addColorStop(0.35, `rgba(${Math.min(255, r + 25)}, ${Math.min(255, g + 20)}, ${Math.min(255, b + 15)}, ${opacity * 0.7})`);
      coreGradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
      ctx.fillStyle = coreGradient;
      ctx.beginPath();
      ctx.arc(x, y, coreRadius, 0, Math.PI * 2);
      ctx.fill();

      // Bright hotspot
      if (star.baseOpacity > 0.4 && star.size > 0.9) {
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, opacity * 1.4)})`;
        ctx.beginPath();
        ctx.arc(x, y, star.size * 0.18, 0, Math.PI * 2);
        ctx.fill();
      }

      // Diffraction spikes
      if (star.baseOpacity > 0.6 && star.size > 1.3) {
        ctx.save();
        ctx.globalAlpha = opacity * 0.15;
        
        const spikeLength = star.size * 3.5;
        const spikeGrad = ctx.createLinearGradient(x - spikeLength, y, x + spikeLength, y);
        spikeGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0)`);
        spikeGrad.addColorStop(0.5, `rgba(255, 255, 255, 0.6)`);
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
  }, [allStars, intensity]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
      style={{ opacity: 0.95 }}
    />
  );
};

export default function CelestialLagoonPreview() {
  const populations = useMemo(() => generateStellarPopulations(888), []);

  return (
    <div className="absolute inset-0" style={{ background: 'rgb(3, 8, 14)' }}>
      {/* Deep abyss foundation */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 115% 105% at 50% 48%, rgba(5, 12, 18, 0.75) 0%, rgba(3, 8, 14, 1) 68%)'
      }} />

      {/* NEBULA: Primary turquoise cloud (left flowing) */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 72% 68% at 22% 35%, rgba(32, 195, 195, 0.88) 0%, rgba(24, 162, 168, 0.62) 26%, rgba(18, 128, 142, 0.32) 46%, transparent 68%),
          radial-gradient(ellipse 62% 58% at 15% 44%, rgba(38, 205, 202, 0.75) 0%, rgba(28, 172, 178, 0.48) 32%, rgba(20, 138, 152, 0.22) 54%, transparent 72%),
          radial-gradient(ellipse 55% 52% at 28% 28%, rgba(42, 212, 208, 0.68) 0%, rgba(32, 180, 185, 0.40) 36%, transparent 64%),
          radial-gradient(ellipse 48% 45% at 18% 52%, rgba(28, 188, 192, 0.58) 0%, rgba(22, 155, 165, 0.32) 40%, transparent 66%)
        `,
        filter: 'blur(22px)',
        mixBlendMode: 'screen',
        opacity: 0.90
      }}
      />

      {/* NEBULA: Brilliant cyan-aqua center glow */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 68% 64% at 68% 58%, rgba(48, 218, 228, 0.82) 0%, rgba(38, 188, 205, 0.56) 30%, rgba(28, 155, 178, 0.28) 52%, transparent 72%),
          radial-gradient(ellipse 58% 54% at 75% 52%, rgba(55, 228, 235, 0.72) 0%, rgba(42, 198, 215, 0.44) 34%, rgba(32, 165, 188, 0.20) 56%, transparent 74%),
          radial-gradient(ellipse 52% 48% at 62% 64%, rgba(42, 208, 218, 0.65) 0%, rgba(32, 178, 195, 0.36) 38%, transparent 68%)
        `,
        filter: 'blur(24px)',
        mixBlendMode: 'screen',
        opacity: 0.86
      }}
      />

      {/* NEBULA: Deep teal flowing wisps (bottom-right) */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 58% 54% at 82% 78%, rgba(20, 172, 182, 0.68) 0%, rgba(16, 142, 158, 0.42) 34%, rgba(12, 112, 132, 0.20) 56%, transparent 72%),
          radial-gradient(ellipse 50% 46% at 75% 85%, rgba(24, 182, 188, 0.58) 0%, rgba(18, 152, 165, 0.34) 38%, transparent 66%),
          radial-gradient(ellipse 45% 42% at 88% 72%, rgba(28, 192, 198, 0.52) 0%, rgba(20, 162, 175, 0.28) 42%, transparent 68%)
        `,
        filter: 'blur(20px)',
        mixBlendMode: 'screen',
        opacity: 0.78
      }}
      />

      {/* NEBULA: Soft emerald-teal transitions */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 54% 50% at 48% 42%, rgba(18, 155, 168, 0.52) 0%, rgba(14, 125, 142, 0.28) 40%, transparent 68%),
          radial-gradient(ellipse 46% 44% at 55% 50%, rgba(22, 165, 175, 0.46) 0%, rgba(16, 135, 152, 0.24) 44%, transparent 70%),
          radial-gradient(ellipse 42% 40% at 42% 55%, rgba(16, 145, 158, 0.42) 0%, rgba(12, 115, 132, 0.20) 46%, transparent 72%)
        `,
        filter: 'blur(18px)',
        mixBlendMode: 'screen',
        opacity: 0.68
      }}
      />

      {/* NEBULA: Subtle lavender depth accents */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 42% 38% at 35% 68%, rgba(148, 165, 205, 0.38) 0%, rgba(118, 138, 178, 0.18) 44%, transparent 68%),
          radial-gradient(ellipse 38% 36% at 62% 32%, rgba(158, 175, 215, 0.34) 0%, rgba(128, 148, 188, 0.16) 46%, transparent 70%)
        `,
        filter: 'blur(16px)',
        mixBlendMode: 'screen',
        opacity: 0.48
      }}
      />

      {/* Stars canvas */}
      <StellarCanvas populations={populations} intensity={1.0} />

      {/* Atmospheric depth vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 22%, rgba(0, 0, 0, 0.52) 100%)'
      }} />
    </div>
  );
}