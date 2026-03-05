import React from "react";
import { motion } from "framer-motion";

export default function EdgeOfAndromedaPreview() {
  const seed = 99;
  const random = (i, salt = 0) => {
    const x = Math.sin(seed * 9999 + i * 7919 + salt * 1234) * 10000;
    return x - Math.floor(x);
  };

  // Generate edge-on disc stars
  const stars = [];
  const isMobile = window.innerWidth < 640;
  const isSmallPanel = true; // Profile settings card context
  const starCount = isSmallPanel ? 280 : (isMobile ? 220 : 180);
  
  for (let i = 0; i < starCount; i++) {
    // Concentrated in horizontal band
    const x = random(i, 1) * 100;
    const yGaussian = Math.pow(random(i, 2), 3);
    const ySpread = isMobile ? 16 : 12;
    const y = 50 + (random(i, 3) - 0.5) * yGaussian * ySpread;
    
    if (y < 0 || y > 100) continue;
    
    const distFromCenter = Math.abs(x - 50);
    const brightness = 1 - distFromCenter / 50;
    
    const sizeMultiplier = isSmallPanel ? 1.8 : (isMobile ? 2.8 : 2.2);
    const size = (isSmallPanel ? 0.4 : 0.3) + Math.pow(random(i, 4), 2.5) * sizeMultiplier * (1 + brightness * 0.5);
    
    // Warm nucleus colors
    let r, g, b;
    const colorRoll = random(i, 5);
    const coreRange = isMobile ? 20 : 15;
    
    if (distFromCenter < coreRange) {
      // Core - warm and brighter on mobile
      if (colorRoll < 0.5) {
        r = 255; g = 240 + random(i, 6) * 15; b = 210 + random(i, 7) * 30;
      } else {
        r = 255; g = 250 + random(i, 6) * 5; b = 245 + random(i, 7) * 10;
      }
    } else {
      // Disc - mixed with more warmth on mobile
      if (colorRoll < 0.3) {
        r = 220 + random(i, 6) * 35; g = 230 + random(i, 7) * 25; b = 255;
      } else if (colorRoll < 0.6) {
        r = 252 + random(i, 6) * 3; g = 250 + random(i, 7) * 5; b = 255;
      } else {
        r = 255; g = 225 + random(i, 6) * 20; b = 200 + random(i, 7) * 35;
      }
    }
    
    const alphaBoost = isMobile ? 1.25 : 1.0;
    const alpha = (0.4 + random(i, 8) * 0.6) * (0.7 + brightness * 0.3) * alphaBoost;
    stars.push({ x, y, size, r, g, b, alpha });
  }

  return (
    <div className="absolute inset-0" style={{ background: 'rgb(3, 2, 8)' }}>
      {/* Deep space */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 120% 100% at 50% 50%, rgba(5, 4, 12, 0.8) 0%, rgba(3, 2, 8, 1) 70%)'
      }} />

      {/* Warm golden nucleus */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 38% 24% at 50% 50%, rgba(255, 248, 230, 0.9) 0%, rgba(255, 235, 200, 0.6) 30%, rgba(245, 210, 170, 0.35) 55%, transparent 75%)',
          filter: 'blur(6px)',
          mixBlendMode: 'screen'
        }}
        animate={{ scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Disc horizontal band */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 95% 16% at 50% 50%, rgba(245, 225, 215, 0.65) 0%, rgba(210, 190, 205, 0.4) 40%, rgba(180, 165, 195, 0.2) 65%, transparent 80%)',
          filter: 'blur(5px)',
          mixBlendMode: 'screen'
        }}
      />

      {/* Additional warm glow layer */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 45% 20% at 50% 50%, rgba(255, 225, 190, 0.45) 0%, rgba(250, 210, 170, 0.2) 45%, transparent 70%)',
          filter: 'blur(8px)',
          mixBlendMode: 'screen'
        }}
        animate={{ opacity: [0.7, 0.9, 0.7] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Violet outer halo */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 85% 65% at 50% 50%, transparent 15%, rgba(145, 105, 205, 0.5) 38%, rgba(115, 80, 175, 0.32) 55%, rgba(95, 65, 155, 0.15) 72%, transparent 88%)',
          filter: 'blur(18px)',
          mixBlendMode: 'screen'
        }}
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Dust lane */}
      <div
        className="absolute"
        style={{
          top: '48%',
          left: '10%',
          right: '10%',
          height: '4%',
          background: 'linear-gradient(to right, transparent, rgba(8, 5, 18, 0.75) 20%, rgba(8, 5, 18, 0.75) 80%, transparent)',
          filter: 'blur(4px)'
        }}
      />

      {/* MICROSTAR FIELD */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: (() => {
            return stars.map(s => 
              `radial-gradient(circle ${s.size}px at ${s.x}% ${s.y}%, rgba(${s.r}, ${s.g}, ${s.b}, ${s.alpha}), rgba(${s.r}, ${s.g}, ${s.b}, ${s.alpha * 0.5}) 40%, transparent 70%)`
            ).join(',');
          })(),
          opacity: 0.95
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 25%, rgba(0, 0, 0, 0.6) 100%)'
      }} />
    </div>
  );
}