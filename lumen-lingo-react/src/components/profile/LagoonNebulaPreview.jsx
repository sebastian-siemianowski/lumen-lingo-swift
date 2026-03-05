import React, { useRef, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

const seededRandom = (seed, n = 1) => {
  const x = Math.sin(seed * 9999 + n * 7919) * 10000;
  return x - Math.floor(x);
};

const JWST_PALETTE = {
  HOT_BLUE: [200, 230, 255],
  WARM_WHITE: [255, 248, 240],
  GOLDEN_STAR: [255, 220, 180],
  AMBER_GLOW: [255, 180, 120],
  DEEP_ORANGE: [255, 140, 80],
  RUBY_RED: [255, 100, 100],
  CYAN_BLUE: [180, 230, 255],
  ELECTRIC_WHITE: [240, 250, 255]
};

const StarsCanvas = ({ intensity = 1.0 }) => {
  const canvasRef = useRef(null);

  const stars = useMemo(() => {
    const count = 320;
    const s = [];
    
    for (let i = 0; i < count; i++) {
      const rand = (n) => seededRandom(i * 137, n);
      
      const zDepth = Math.pow(rand(1), 0.6);
      
      let x = rand(2);
      let y = rand(3);
      
      const isCluster = rand(4) > 0.55;
      if (isCluster) {
        const t = rand(5) * Math.PI * 2;
        const radius = rand(6) * 0.4;
        const cx = 0.5 + rand(20) * 0.15;
        const cy = 0.48 + rand(21) * 0.12;
        
        x = cx + Math.cos(t) * radius;
        y = cy + Math.sin(t) * radius * 1.6;
      }

      const colorRoll = rand(7);
      let baseColor;
      if (colorRoll < 0.25) baseColor = JWST_PALETTE.GOLDEN_STAR;
      else if (colorRoll < 0.45) baseColor = JWST_PALETTE.AMBER_GLOW;
      else if (colorRoll < 0.60) baseColor = JWST_PALETTE.WARM_WHITE;
      else if (colorRoll < 0.72) baseColor = JWST_PALETTE.DEEP_ORANGE;
      else if (colorRoll < 0.82) baseColor = JWST_PALETTE.HOT_BLUE;
      else if (colorRoll < 0.90) baseColor = JWST_PALETTE.CYAN_BLUE;
      else if (colorRoll < 0.96) baseColor = JWST_PALETTE.RUBY_RED;
      else baseColor = JWST_PALETTE.ELECTRIC_WHITE;
        
      const baseSize = (0.4 + Math.pow(rand(9), 2.2) * 1.4) * (1.3 - zDepth * 0.5);
      
      const heroThreshold = 0.965;
      const isHero = isCluster && zDepth < 0.4 && rand(10) > heroThreshold;
      
      s.push({
        x, y,
        zDepth,
        size: isHero ? baseSize * 3.5 : baseSize,
        color: baseColor,
        baseAlpha: (0.55 + rand(11) * 0.55) * (1 - zDepth * 0.35),
        isHero,
        isMystical: !isHero && rand(18) < 0.35
      });
    }
    return s;
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

    stars.forEach(star => {
      const x = star.x * width;
      const y = star.y * height;
      const [r, g, b] = star.color;
      const alpha = star.baseAlpha * intensity;

      if (star.isMystical) {
        // Outer atmosphere
        const atmoRadius = star.size * 9;
        const atmoGrad = ctx.createRadialGradient(x, y, 0, x, y, atmoRadius);
        atmoGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha * 0.08})`);
        atmoGrad.addColorStop(0.3, `rgba(${r}, ${g}, ${b}, ${alpha * 0.04})`);
        atmoGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        ctx.fillStyle = atmoGrad;
        ctx.beginPath();
        ctx.arc(x, y, atmoRadius, 0, Math.PI * 2);
        ctx.fill();

        // Mid diffusion
        const diffuseRadius = star.size * 5;
        const diffuseGrad = ctx.createRadialGradient(x, y, 0, x, y, diffuseRadius);
        diffuseGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha * 0.35})`);
        diffuseGrad.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${alpha * 0.15})`);
        diffuseGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        ctx.fillStyle = diffuseGrad;
        ctx.beginPath();
        ctx.arc(x, y, diffuseRadius, 0, Math.PI * 2);
        ctx.fill();

        // Core
        const coreRadius = star.size * 2.0;
        const coreGrad = ctx.createRadialGradient(x, y, 0, x, y, coreRadius);
        coreGrad.addColorStop(0, `rgba(255, 255, 255, ${Math.min(1, alpha * 1.5)})`);
        coreGrad.addColorStop(0.2, `rgba(${r}, ${g}, ${b}, ${Math.min(1, alpha * 1.1)})`);
        coreGrad.addColorStop(0.6, `rgba(${r}, ${g}, ${b}, ${alpha * 0.5})`);
        coreGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        ctx.fillStyle = coreGrad;
        ctx.beginPath();
        ctx.arc(x, y, coreRadius, 0, Math.PI * 2);
        ctx.fill();

      } else if (star.isHero) {
        // Hero stars - premium rendering
        const drawAlpha = Math.min(1, alpha * 1.2);
        
        // Large soft halo
        const grad = ctx.createRadialGradient(x, y, 0, x, y, star.size * 6);
        grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${drawAlpha * 0.9})`);
        grad.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, ${drawAlpha * 0.3})`);
        grad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, star.size * 6, 0, Math.PI * 2);
        ctx.fill();

        // Core
        const coreGrad = ctx.createRadialGradient(x, y, 0, x, y, star.size * 1.2);
        coreGrad.addColorStop(0, `rgba(255, 255, 255, ${Math.min(1, drawAlpha * 1.3)})`);
        coreGrad.addColorStop(0.7, `rgba(${r}, ${g}, ${b}, ${drawAlpha * 0.6})`);
        coreGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        ctx.fillStyle = coreGrad;
        ctx.beginPath();
        ctx.arc(x, y, star.size * 1.2, 0, Math.PI * 2);
        ctx.fill();

        // Diffraction spikes
        if (drawAlpha > 0.3) {
          const spikeAlpha = Math.min(1, drawAlpha * 0.8);
          const spikeSize = star.size * 12;

          const vGrad = ctx.createLinearGradient(x, y - spikeSize, x, y + spikeSize);
          vGrad.addColorStop(0, `rgba(${r},${g},${b},0)`);
          vGrad.addColorStop(0.5, `rgba(${r},${g},${b},${spikeAlpha})`);
          vGrad.addColorStop(1, `rgba(${r},${g},${b},0)`);
          ctx.strokeStyle = vGrad;
          ctx.lineWidth = 1.0;
          
          ctx.beginPath();
          ctx.moveTo(x, y - spikeSize);
          ctx.lineTo(x, y + spikeSize);
          ctx.stroke();

          const dX = spikeSize * 0.866; 
          const dY = spikeSize * 0.5;
          
          const d1Grad = ctx.createLinearGradient(x - dX, y - dY, x + dX, y + dY);
          d1Grad.addColorStop(0, `rgba(${r},${g},${b},0)`);
          d1Grad.addColorStop(0.5, `rgba(${r},${g},${b},${spikeAlpha})`);
          d1Grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
          ctx.strokeStyle = d1Grad;
          ctx.beginPath();
          ctx.moveTo(x - dX, y - dY);
          ctx.lineTo(x + dX, y + dY);
          ctx.stroke();

          const d2Grad = ctx.createLinearGradient(x - dX, y + dY, x + dX, y - dY);
          d2Grad.addColorStop(0, `rgba(${r},${g},${b},0)`);
          d2Grad.addColorStop(0.5, `rgba(${r},${g},${b},${spikeAlpha})`);
          d2Grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
          ctx.strokeStyle = d2Grad;
          ctx.beginPath();
          ctx.moveTo(x - dX, y + dY);
          ctx.lineTo(x + dX, y - dY);
          ctx.stroke();
        }

      } else {
        // Microstars
        if (star.zDepth > 0.6) {
          const bgRadius = star.size * 2.5;
          const bgGrad = ctx.createRadialGradient(x, y, 0, x, y, bgRadius);
          bgGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha * 0.9})`);
          bgGrad.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, ${alpha * 0.3})`);
          bgGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
          
          ctx.fillStyle = bgGrad;
          ctx.beginPath();
          ctx.arc(x, y, bgRadius, 0, Math.PI * 2);
          ctx.fill();
        } else {
          const bloomRadius = star.size * 6.5;
          const bloomGrad = ctx.createRadialGradient(x, y, 0, x, y, bloomRadius);
          bloomGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha * 0.12})`);
          bloomGrad.addColorStop(0.6, `rgba(${r}, ${g}, ${b}, ${alpha * 0.04})`);
          bloomGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
          ctx.fillStyle = bloomGrad;
          ctx.beginPath();
          ctx.arc(x, y, bloomRadius, 0, Math.PI * 2);
          ctx.fill();
          
          const glowRadius = star.size * 3.2;
          const glowGrad = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
          glowGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha * 0.6})`);
          glowGrad.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${alpha * 0.25})`);
          glowGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
          ctx.fill();
          
          const coreRadius = star.size * 0.8;
          const coreGrad = ctx.createRadialGradient(x, y, 0, x, y, coreRadius);
          coreGrad.addColorStop(0, `rgba(255, 255, 255, ${Math.min(1, alpha * 1.4)})`);
          coreGrad.addColorStop(0.6, `rgba(${r}, ${g}, ${b}, ${alpha * 0.8})`);
          coreGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
          ctx.fillStyle = coreGrad;
          ctx.beginPath();
          ctx.arc(x, y, coreRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    });
  }, [stars, intensity]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
      style={{ opacity: 0.95, mixBlendMode: 'screen' }}
    />
  );
};

export default function LagoonNebulaPreview() {
  return (
    <div className="absolute inset-0" style={{ background: 'rgb(2, 1, 3)' }}>
      {/* NEBULA: Burnt rust/orange dust (Top-Left) - Multiple sub-clouds */}
      <motion.div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 60% 55% at 16% 16%, rgba(225, 100, 48, 0.78) 0%, rgba(185, 72, 32, 0.52) 26%, rgba(145, 48, 20, 0.24) 46%, transparent 66%),
          radial-gradient(ellipse 48% 45% at 10% 24%, rgba(205, 82, 38, 0.62) 0%, rgba(165, 58, 25, 0.35) 32%, rgba(125, 38, 15, 0.14) 54%, transparent 72%),
          radial-gradient(ellipse 42% 38% at 24% 12%, rgba(240, 112, 52, 0.58) 0%, rgba(195, 80, 35, 0.30) 36%, transparent 62%)
        `,
        filter: 'blur(16px)',
        mixBlendMode: 'screen'
      }}
      animate={{ 
        scale: [1, 1.055, 1.018, 1.042, 1],
        opacity: [0.90, 1, 0.94, 0.98, 0.90],
        x: [0, 3.5, 0.8, 2.5, 0],
        y: [0, -2.8, -0.6, -2, 0]
      }}
      transition={{ duration: 8.5, repeat: Infinity, ease: [0.45, 0.05, 0.55, 0.95] }}
      />

      {/* NEBULA: Golden illuminated frontier (Center diagonal) */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 54% 48% at 40% 44%, rgba(255, 198, 95, 0.75) 0%, rgba(248, 170, 75, 0.48) 30%, rgba(225, 140, 55, 0.22) 52%, transparent 70%),
          radial-gradient(ellipse 45% 40% at 36% 50%, rgba(255, 215, 110, 0.62) 0%, rgba(240, 182, 85, 0.34) 35%, transparent 62%),
          radial-gradient(ellipse 38% 35% at 46% 40%, rgba(255, 185, 78, 0.55) 0%, rgba(230, 155, 62, 0.26) 40%, transparent 65%)
        `,
        filter: 'blur(13px)',
        mixBlendMode: 'screen',
        opacity: 0.85
      }}
      />

      {/* NEBULA: Electric cyan ionization (Bottom-Right) */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 64% 58% at 84% 80%, rgba(98, 225, 255, 0.76) 0%, rgba(62, 188, 240, 0.48) 30%, rgba(38, 148, 200, 0.22) 50%, transparent 70%),
          radial-gradient(ellipse 52% 48% at 78% 88%, rgba(82, 210, 252, 0.65) 0%, rgba(52, 175, 225, 0.36) 35%, transparent 62%),
          radial-gradient(ellipse 45% 42% at 88% 75%, rgba(115, 235, 255, 0.58) 0%, rgba(75, 195, 235, 0.28) 38%, transparent 65%)
        `,
        filter: 'blur(18px)',
        mixBlendMode: 'screen',
        opacity: 0.80
      }}
      />

      {/* NEBULA: Deep teal transition wisps */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 48% 44% at 60% 60%, rgba(32, 162, 188, 0.58) 0%, rgba(24, 125, 155, 0.30) 38%, transparent 65%),
          radial-gradient(ellipse 38% 35% at 67% 54%, rgba(40, 172, 198, 0.48) 0%, rgba(28, 135, 165, 0.22) 42%, transparent 68%),
          radial-gradient(ellipse 32% 30% at 54% 65%, rgba(28, 152, 178, 0.42) 0%, rgba(20, 115, 145, 0.18) 45%, transparent 70%)
        `,
        filter: 'blur(14px)',
        mixBlendMode: 'screen',
        opacity: 0.72
      }}
      />

      {/* NEBULA: Soft magenta/pink wisps */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 36% 34% at 50% 36%, rgba(212, 88, 152, 0.38) 0%, rgba(172, 65, 122, 0.18) 42%, transparent 66%),
          radial-gradient(ellipse 30% 28% at 44% 64%, rgba(192, 75, 142, 0.32) 0%, rgba(152, 55, 112, 0.14) 46%, transparent 68%),
          radial-gradient(ellipse 32% 30% at 60% 34%, rgba(202, 82, 148, 0.34) 0%, rgba(162, 62, 118, 0.16) 44%, transparent 67%)
        `,
        filter: 'blur(13px)',
        mixBlendMode: 'screen',
        opacity: 0.52
      }}
      />

      {/* NEBULA: Violet depth accents */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 34% 32% at 34% 74%, rgba(132, 68, 188, 0.32) 0%, rgba(100, 48, 148, 0.14) 46%, transparent 68%),
          radial-gradient(ellipse 30% 28% at 70% 26%, rgba(152, 78, 202, 0.28) 0%, rgba(115, 58, 162, 0.12) 48%, transparent 70%)
        `,
        filter: 'blur(12px)',
        mixBlendMode: 'screen',
        opacity: 0.42
      }}
      />

      {/* Stars canvas */}
      <StarsCanvas intensity={1.0} />

      {/* Dust extinction (realistic dimming) */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `
          radial-gradient(ellipse 42% 38% at 22% 22%, rgba(45, 22, 10, 0.42) 0%, rgba(30, 15, 6, 0.18) 50%, transparent 72%),
          radial-gradient(ellipse 35% 32% at 14% 30%, rgba(38, 18, 8, 0.35) 0%, rgba(25, 12, 5, 0.14) 48%, transparent 70%)
        `,
        mixBlendMode: 'multiply',
        filter: 'blur(10px)'
      }} />

      {/* Atmospheric vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 18%, rgba(0, 0, 0, 0.55) 100%)'
      }} />
    </div>
  );
}