import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function SpiralHaloPreview() {
  const canvasRef = useRef(null);

  const seed = 42;
  const seededRandom = (s, n) => {
    const x = Math.sin(s * 9999 + n * 7919) * 10000;
    return x - Math.floor(x);
  };

  // Stellar classification colors (realistic)
  const STELLAR_COLORS = {
    O: [[155, 176, 255], [162, 185, 255], [170, 191, 255]],
    B: [[185, 206, 255], [192, 213, 255], [200, 220, 255]],
    A: [[248, 248, 255], [255, 255, 255], [255, 252, 252]],
    F: [[255, 252, 240], [255, 250, 235], [255, 248, 230]],
    G: [[255, 244, 214], [255, 240, 200], [255, 235, 185]],
    K: [[255, 220, 180], [255, 210, 160], [255, 200, 145]],
    M: [[255, 190, 150], [255, 180, 140], [255, 170, 130]]
  };

  // Generate spiral galaxy stars with realistic distribution
  const generateSpiralStars = () => {
    const stars = [];
    const numArms = 4;
    const armSpread = 0.08;
    const isMobile = window.innerWidth < 640;

    // Background field stars (20%)
    const fieldCount = 85;
    for (let i = 0; i < fieldCount; i++) {
      const rand = (n) => seededRandom(seed + i * 3, n);
      
      let x = rand(1);
      let y = rand(2);
      
      const size = (0.4 + Math.pow(rand(3), 2.5) * 1.2) * (isMobile ? 1.2 : 1);
      
      const colorRoll = rand(4);
      let color;
      if (colorRoll < 0.6) color = STELLAR_COLORS.A[Math.floor(rand(5) * 3)];
      else if (colorRoll < 0.8) color = STELLAR_COLORS.B[Math.floor(rand(5) * 3)];
      else color = STELLAR_COLORS.F[Math.floor(rand(5) * 3)];
      
      stars.push({
        x, y, size, color,
        alpha: isMobile ? 0.08 + rand(6) * 0.15 : 0.12 + rand(6) * 0.25,
        zone: 'field'
      });
    }

    // Bright galactic core (15%)
    const coreCount = 65;
    for (let i = 0; i < coreCount; i++) {
      const rand = (n) => seededRandom(seed + i * 7 + 1000, n);
      
      const u1 = rand(1);
      const u2 = rand(2);
      const mag = Math.sqrt(-2 * Math.log(Math.max(0.0001, u1))) * 0.06;
      const angle = u2 * Math.PI * 2;
      
      const x = 0.5 + Math.cos(angle) * mag;
      const y = 0.5 + Math.sin(angle) * mag;
      
      const distFromCenter = Math.sqrt(Math.pow(x - 0.5, 2) + Math.pow(y - 0.5, 2));
      const centralBrightness = Math.max(0, 1 - distFromCenter * 12);
      
      const size = (0.6 + rand(3) * 1.4 + centralBrightness * 1.0) * (isMobile ? 1.3 : 1);
      
      const colorRoll = rand(4);
      let color;
      if (colorRoll < 0.3) color = [255, 250, 240];
      else if (colorRoll < 0.5) color = STELLAR_COLORS.F[Math.floor(rand(5) * 3)];
      else if (colorRoll < 0.7) color = STELLAR_COLORS.G[Math.floor(rand(5) * 3)];
      else color = STELLAR_COLORS.A[Math.floor(rand(5) * 3)];
      
      stars.push({
        x, y, size, color,
        alpha: isMobile ? 0.25 + rand(7) * 0.25 + centralBrightness * 0.15 : 0.5 + rand(7) * 0.4 + centralBrightness * 0.2,
        zone: 'core'
      });
    }

    // Spiral arm stars (55%)
    const armCount = 240;
    for (let i = 0; i < armCount; i++) {
      const rand = (n) => seededRandom(seed + i * 11 + 2000, n);
      
      const armIndex = Math.floor(rand(1) * numArms);
      const armBaseAngle = (armIndex / numArms) * Math.PI * 2;
      
      const u1 = rand(2);
      const u2 = rand(3);
      const distGauss = Math.sqrt(-2 * Math.log(Math.max(0.0001, u1))) * Math.cos(u2 * Math.PI * 2);
      const distFromCenter = 0.12 + Math.abs(distGauss) * 0.25;
      
      const spiralTightness = 0.5;
      const spiralAngle = armBaseAngle + distFromCenter * spiralTightness * 18;
      
      const spreadAngle = spiralAngle + (rand(4) - 0.5) * armSpread * 2;
      const spreadDist = distFromCenter + (rand(5) - 0.5) * 0.04;
      
      let x = 0.5 + Math.cos(spreadAngle) * spreadDist;
      let y = 0.5 + Math.sin(spreadAngle) * spreadDist;

      if (x < 0.05 || x > 0.95 || y < 0.05 || y > 0.95) continue;

      const size = (0.8 + Math.pow(rand(6), 1.6) * 4) * (isMobile ? 1.5 : 1.5);
      
      const isYoung = rand(8) < 0.4;
      const colorRoll = rand(7);
      let color;
      
      if (isYoung) {
        if (colorRoll < 0.2) color = STELLAR_COLORS.O[Math.floor(rand(9) * 3)];
        else if (colorRoll < 0.5) color = STELLAR_COLORS.B[Math.floor(rand(9) * 3)];
        else if (colorRoll < 0.8) color = STELLAR_COLORS.A[Math.floor(rand(9) * 3)];
        else color = STELLAR_COLORS.F[Math.floor(rand(9) * 3)];
      } else {
        if (colorRoll < 0.35) color = STELLAR_COLORS.A[Math.floor(rand(9) * 3)];
        else if (colorRoll < 0.55) color = STELLAR_COLORS.F[Math.floor(rand(9) * 3)];
        else if (colorRoll < 0.75) color = STELLAR_COLORS.G[Math.floor(rand(9) * 3)];
        else if (colorRoll < 0.9) color = STELLAR_COLORS.K[Math.floor(rand(9) * 3)];
        else color = STELLAR_COLORS.M[Math.floor(rand(9) * 3)];
      }
      
      stars.push({
        x, y, size, color,
        alpha: isMobile ? 0.1 + rand(12) * 0.3 + (isYoung ? 0.08 : 0) : 0.2 + rand(12) * 0.5 + (isYoung ? 0.15 : 0),
        zone: 'arm'
      });
    }

    // Outer halo (10%)
    const haloCount = 45;
    for (let i = 0; i < haloCount; i++) {
      const rand = (n) => seededRandom(seed + i * 13 + 3000, n);
      
      const angle = rand(1) * Math.PI * 2;
      const r = 0.3 + Math.pow(rand(2), 0.5) * 0.2;
      
      const x = 0.5 + Math.cos(angle) * r;
      const y = 0.5 + Math.sin(angle) * r;
      
      const size = (0.4 + Math.pow(rand(3), 2) * 1.0) * (isMobile ? 1.1 : 1);
      
      const colorRoll = rand(4);
      let color;
      if (colorRoll < 0.3) color = STELLAR_COLORS.K[Math.floor(rand(5) * 3)];
      else if (colorRoll < 0.5) color = STELLAR_COLORS.M[Math.floor(rand(5) * 3)];
      else if (colorRoll < 0.75) color = STELLAR_COLORS.G[Math.floor(rand(5) * 3)];
      else color = [230, 235, 255];
      
      stars.push({
        x, y, size, color,
        alpha: isMobile ? 0.1 + rand(7) * 0.2 : 0.18 + rand(7) * 0.35,
        zone: 'halo'
      });
    }

    return stars;
  };

  const stars = generateSpiralStars();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = canvas.parentElement.offsetWidth;
    const height = canvas.parentElement.offsetHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, width, height);

    const isMobile = width < 640;
    
    stars.forEach(star => {
      const x = star.x * width;
      const y = star.y * height;
      const [r, g, b] = star.color;

      // Atmospheric diffusion - skip on mobile for smaller stars
      if (star.size > 0.8 && (!isMobile || star.size > 2.0)) {
        const diffuseRadius = star.size * (isMobile ? 2.5 : 5.5);
        const diffuseGrad = ctx.createRadialGradient(x, y, 0, x, y, diffuseRadius);
        diffuseGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${star.alpha * (isMobile ? 0.08 : 0.18)})`);
        diffuseGrad.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, ${star.alpha * (isMobile ? 0.04 : 0.08)})`);
        diffuseGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        ctx.fillStyle = diffuseGrad;
        ctx.beginPath();
        ctx.arc(x, y, diffuseRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Main glow - much tighter on mobile
      const glowRadius = star.size * (isMobile ? 1.4 : 3.0);
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
      gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${star.alpha * (isMobile ? 0.5 : 0.6)})`);
      gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${star.alpha * (isMobile ? 0.1 : 0.15)})`);
      gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
      ctx.fill();

      // Core - sharper on mobile
      const coreRadius = star.size * (isMobile ? 0.6 : 1.2);
      const coreGrad = ctx.createRadialGradient(x, y, 0, x, y, coreRadius);
      coreGrad.addColorStop(0, `rgba(255, 255, 255, ${Math.min(1, star.alpha * 1.2)})`);
      coreGrad.addColorStop(0.4, `rgba(${Math.min(255, r + 30)}, ${Math.min(255, g + 30)}, ${Math.min(255, b + 30)}, ${star.alpha * 0.8})`);
      coreGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(x, y, coreRadius, 0, Math.PI * 2);
      ctx.fill();

      // Bright center for hero stars - smaller on mobile
      const heroThreshold = isMobile ? 2.0 : 1.0;
      const alphaThreshold = isMobile ? 0.3 : 0.5;
      if (star.size > heroThreshold && star.alpha > alphaThreshold) {
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, star.alpha * 1.5)})`;
        ctx.beginPath();
        ctx.arc(x, y, star.size * (isMobile ? 0.15 : 0.22), 0, Math.PI * 2);
        ctx.fill();

        // Diffraction spikes - shorter on mobile
        ctx.save();
        ctx.globalAlpha = star.alpha * (isMobile ? 0.15 : 0.22);
        
        const spikeLength = star.size * (isMobile ? 2.8 : 4.2);
        const spikeGrad = ctx.createLinearGradient(x - spikeLength, y, x + spikeLength, y);
        spikeGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0)`);
        spikeGrad.addColorStop(0.5, `rgba(255, 255, 255, 0.8)`);
        spikeGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        
        ctx.strokeStyle = spikeGrad;
        ctx.lineWidth = isMobile ? 0.5 : 0.7;
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
    <div className="absolute inset-0" style={{ background: 'rgb(1, 1, 4)' }}>
      {/* Deep cosmic void */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 150% 130% at 50% 50%, rgba(8, 6, 22, 0) 0%, rgba(5, 4, 16, 0.5) 25%, rgba(4, 3, 12, 0.75) 45%, rgba(2, 2, 8, 0.9) 65%, rgba(1, 1, 4, 1) 100%)'
      }} />
      
      {/* Subtle indigo ambience */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 120% 100% at 50% 50%, rgba(30, 20, 60, 0.1) 0%, rgba(22, 15, 48, 0.07) 30%, rgba(15, 10, 35, 0.04) 50%, transparent 75%)'
      }} />
      
      {/* Warm central glow */}
      <div className="absolute inset-0" style={{
        background: window.innerWidth < 640 
          ? 'radial-gradient(ellipse 30% 30% at 50% 50%, rgba(255, 250, 235, 0.06) 0%, rgba(240, 220, 200, 0.03) 40%, rgba(200, 180, 200, 0.015) 60%, transparent 80%)'
          : 'radial-gradient(ellipse 30% 30% at 50% 50%, rgba(255, 250, 235, 0.08) 0%, rgba(240, 220, 200, 0.04) 40%, rgba(200, 180, 200, 0.015) 60%, transparent 80%)',
        filter: window.innerWidth < 640 ? 'blur(25px)' : 'blur(25px)'
      }} />

      {/* Inner indigo halo */}
      <div className="absolute inset-0" style={{
        background: window.innerWidth < 640
          ? 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(90, 70, 180, 0.06) 0%, rgba(70, 55, 150, 0.03) 40%, rgba(50, 40, 120, 0.015) 60%, transparent 75%)'
          : 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(90, 70, 180, 0.08) 0%, rgba(70, 55, 150, 0.04) 40%, rgba(50, 40, 120, 0.015) 60%, transparent 75%)',
        filter: window.innerWidth < 640 ? 'blur(40px)' : 'blur(40px)'
      }} />

      {/* BLUISH NEBULA CLOUDS - ROTATING CONTAINER WITH 4 SPIRAL ARMS */}
      <motion.div
        className="absolute inset-0"
        style={{ transformOrigin: 'center center', zIndex: 1 }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
      >
        {/* Arm 1 - Right side from center */}
        <div className="absolute inset-0" style={{
          background: window.innerWidth < 640
            ? 'radial-gradient(ellipse 45% 35% at 62% 50%, rgba(160, 190, 255, 0.08) 0%, rgba(135, 165, 235, 0.04) 30%, rgba(120, 150, 220, 0.02) 50%, rgba(100, 130, 200, 0.01) 70%, transparent 85%)'
            : 'radial-gradient(ellipse 22% 18% at 62% 50%, rgba(160, 190, 255, 0.08) 0%, rgba(135, 165, 235, 0.04) 35%, rgba(120, 150, 220, 0.02) 55%, transparent 75%)',
          filter: window.innerWidth < 640 ? 'blur(35px)' : 'blur(70px)',
          mixBlendMode: 'screen'
        }} />
        
        {/* Arm 2 - Top from center */}
        <div className="absolute inset-0" style={{
          background: window.innerWidth < 640
            ? 'radial-gradient(ellipse 45% 35% at 50% 38%, rgba(145, 180, 255, 0.07) 0%, rgba(120, 150, 225, 0.035) 30%, rgba(110, 140, 210, 0.02) 50%, rgba(95, 125, 195, 0.01) 70%, transparent 85%)'
            : 'radial-gradient(ellipse 22% 18% at 50% 38%, rgba(145, 180, 255, 0.06) 0%, rgba(120, 150, 225, 0.03) 40%, rgba(110, 140, 210, 0.01) 60%, transparent 75%)',
          filter: window.innerWidth < 640 ? 'blur(32px)' : 'blur(65px)',
          mixBlendMode: 'screen'
        }} />
        
        {/* Arm 3 - Left from center */}
        <div className="absolute inset-0" style={{
          background: window.innerWidth < 640
            ? 'radial-gradient(ellipse 45% 35% at 38% 50%, rgba(110, 195, 235, 0.22) 0%, rgba(90, 170, 215, 0.12) 30%, rgba(80, 150, 200, 0.06) 50%, rgba(70, 135, 185, 0.03) 70%, transparent 85%)'
            : 'radial-gradient(ellipse 22% 18% at 38% 50%, rgba(110, 195, 235, 0.22) 0%, rgba(90, 170, 215, 0.1) 45%, rgba(80, 150, 200, 0.04) 65%, transparent 80%)',
          filter: window.innerWidth < 640 ? 'blur(30px)' : 'blur(60px)',
          mixBlendMode: 'screen'
        }} />
        
        {/* Arm 4 - Bottom from center */}
        <div className="absolute inset-0" style={{
          background: window.innerWidth < 640
            ? 'radial-gradient(ellipse 45% 35% at 50% 62%, rgba(110, 130, 215, 0.24) 0%, rgba(90, 110, 185, 0.13) 30%, rgba(80, 100, 170, 0.065) 50%, rgba(70, 90, 155, 0.03) 70%, transparent 85%)'
            : 'radial-gradient(ellipse 22% 18% at 50% 62%, rgba(110, 130, 215, 0.24) 0%, rgba(90, 110, 185, 0.11) 50%, rgba(80, 100, 170, 0.04) 70%, transparent 85%)',
          filter: window.innerWidth < 640 ? 'blur(28px)' : 'blur(55px)',
          mixBlendMode: 'screen'
        }} />
        
        {/* Additional wisps along arms for density */}
        <div className="absolute inset-0" style={{
          background: window.innerWidth < 640
            ? 'radial-gradient(ellipse 35% 28% at 58% 42%, rgba(140, 175, 250, 0.18) 0%, rgba(115, 150, 225, 0.09) 40%, transparent 70%), radial-gradient(ellipse 35% 28% at 58% 58%, rgba(125, 160, 240, 0.17) 0%, rgba(100, 135, 215, 0.085) 40%, transparent 70%), radial-gradient(ellipse 35% 28% at 42% 58%, rgba(130, 170, 245, 0.175) 0%, rgba(105, 140, 220, 0.09) 40%, transparent 70%), radial-gradient(ellipse 35% 28% at 42% 42%, rgba(135, 175, 250, 0.19) 0%, rgba(110, 145, 225, 0.095) 40%, transparent 70%)'
            : 'radial-gradient(ellipse 18% 15% at 58% 42%, rgba(140, 175, 250, 0.18) 0%, rgba(115, 150, 225, 0.08) 45%, transparent 70%), radial-gradient(ellipse 18% 15% at 58% 58%, rgba(125, 160, 240, 0.16) 0%, rgba(100, 135, 215, 0.07) 45%, transparent 70%), radial-gradient(ellipse 18% 15% at 42% 58%, rgba(130, 170, 245, 0.17) 0%, rgba(105, 140, 220, 0.08) 45%, transparent 70%), radial-gradient(ellipse 18% 15% at 42% 42%, rgba(135, 175, 250, 0.19) 0%, rgba(110, 145, 225, 0.09) 45%, transparent 70%)',
          filter: window.innerWidth < 640 ? 'blur(30px)' : 'blur(60px)',
          mixBlendMode: 'screen'
        }} />
      </motion.div>

      {/* Microstar canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ opacity: 0.95, zIndex: 2 }}
      />

      {/* Deep space vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 95% 80% at 50% 50%, transparent 0%, transparent 25%, rgba(8, 5, 20, 0.1) 40%, rgba(5, 3, 15, 0.25) 55%, rgba(3, 2, 10, 0.45) 70%, rgba(2, 1, 6, 0.65) 85%, rgba(1, 1, 4, 0.8) 100%)'
      }} />

      {/* Warm core glow overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 28% 28% at 50% 50%, rgba(255, 250, 235, 0.08) 0%, rgba(250, 235, 215, 0.05) 30%, rgba(240, 220, 200, 0.03) 50%, transparent 70%)',
        filter: 'blur(20px)',
        mixBlendMode: 'screen'
      }} />

      {/* Central clarity */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 50% 45% at 50% 50%, rgba(255, 250, 255, 0.008) 0%, rgba(240, 235, 250, 0.004) 35%, transparent 60%)',
        mixBlendMode: 'screen'
      }} />
    </div>
  );
}