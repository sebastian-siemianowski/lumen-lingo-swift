import React from "react";
import LagoonNebulaPreview from "./LagoonNebulaPreview";
import CelestialLagoonPreview from "./CelestialLagoonPreview";
import SolarAuroraPreview from "./SolarAuroraPreview";
import SpiralHaloPreview from "./SpiralHaloPreview";
import EdgeOfAndromedaPreview from "./EdgeOfAndromedaPreview";
import StarburstRingPreview from "./StarburstRingPreview";

// Accurate cosmic background renderers for each preset
const PresetRenderers = {
  lagoon_nebula: () => <LagoonNebulaPreview />,
  
  lagoon_nebula_OLD: () => {
    // LAGOON NEBULA - Hyper-realistic JWST-accurate preview
    const seed = 42;
    const random = (i, salt = 0) => {
      const x = Math.sin(seed * 9999 + i * 7919 + salt * 1234) * 10000;
      return x - Math.floor(x);
    };

    // Generate 240+ diverse stars with JWST-accurate clustering
    const stars = [];
    const starCount = 245;
    
    for (let i = 0; i < starCount; i++) {
      const clusterRoll = random(i, 0);
      const isInDiagonalBand = clusterRoll > 0.30; // 70% diagonal clustering
      
      let x, y;
      if (isInDiagonalBand) {
        // Dense diagonal band with organic spread
        const t = random(i, 1);
        const spreadMajor = (random(i, 2) - 0.5) * 0.55;
        const spreadMinor = (random(i, 20) - 0.5) * 0.25;
        x = Math.max(0, Math.min(100, (t * 0.90 + 0.05 + spreadMajor) * 100));
        y = Math.max(0, Math.min(100, (t * 0.95 + 0.025 - spreadMajor * 0.8 + spreadMinor) * 100));
      } else {
        x = random(i, 1) * 100;
        y = random(i, 2) * 100;
      }

      // Extreme power-law: most stars tiny, rare giants
      const sizeCurve = Math.pow(random(i, 3), 5.5);
      let baseSize = 0.22 + sizeCurve * 5.0;
      
      // Depth with more variation
      const depthRoll = random(i, 4);
      let depth, sizeMultiplier, alphaMultiplier;
      
      if (depthRoll < 0.15) { // 15% brilliant foreground
        depth = 'foreground';
        sizeMultiplier = 1.8;
        alphaMultiplier = 1.5;
      } else if (depthRoll < 0.70) { // 55% midground
        depth = 'midground';
        sizeMultiplier = 1.0;
        alphaMultiplier = 1.0;
      } else { // 30% faint background
        depth = 'background';
        sizeMultiplier = 0.55;
        alphaMultiplier = 0.5;
      }
      
      const size = baseSize * sizeMultiplier;
      
      // JWST color palette - warmer bias for Lagoon
      const colorRoll = random(i, 5);
      let r, g, b, glowR, glowG, glowB;
      
      if (colorRoll < 0.22) { // Warm golden (dust-embedded)
        r = 255; g = 200 + random(i, 10) * 35; b = 145 + random(i, 11) * 45;
        glowR = 255; glowG = 190; glowB = 130;
      } else if (colorRoll < 0.40) { // Deep amber/orange
        r = 255; g = 170 + random(i, 10) * 40; b = 95 + random(i, 11) * 50;
        glowR = 255; glowG = 160; glowB = 85;
      } else if (colorRoll < 0.52) { // Brilliant white cores
        r = 255; g = 250 + random(i, 10) * 5; b = 245 + random(i, 11) * 10;
        glowR = 255; glowG = 255; glowB = 255;
      } else if (colorRoll < 0.63) { // Warm peach
        r = 255; g = 185 + random(i, 10) * 35; b = 115 + random(i, 11) * 45;
        glowR = 255; glowG = 175; glowB = 105;
      } else if (colorRoll < 0.73) { // Cool blue-white
        r = 190 + random(i, 10) * 65; g = 210 + random(i, 11) * 45; b = 255;
        glowR = 195; glowG = 220; glowB = 255;
      } else if (colorRoll < 0.82) { // Electric cyan
        r = 160 + random(i, 10) * 60; g = 205 + random(i, 11) * 50; b = 255;
        glowR = 170; glowG = 210; glowB = 255;
      } else if (colorRoll < 0.90) { // Ruby protostars
        r = 255; g = 140 + random(i, 10) * 40; b = 75 + random(i, 11) * 50;
        glowR = 255; glowG = 150; glowB = 85;
      } else if (colorRoll < 0.96) { // Soft yellow-white
        r = 255; g = 240 + random(i, 10) * 15; b = 210 + random(i, 11) * 30;
        glowR = 255; glowG = 240; glowB = 215;
      } else { // Super-brilliant electric white
        r = 255; g = 255; b = 250 + random(i, 11) * 5;
        glowR = 255; glowG = 255; glowB = 255;
      }

      const baseAlpha = (0.30 + random(i, 6) * 0.70) * alphaMultiplier;
      const color = `rgba(${r}, ${g}, ${b}, ${baseAlpha})`;
      const glowColor = `rgba(${glowR}, ${glowG}, ${glowB}, 0.6)`;
      
      const isLarge = size > 2.8;
      const hasDiffraction = isLarge && random(i, 7) > 0.60;
      const hasStrongGlow = size > 1.0;
      const glowRadius = hasStrongGlow ? size * (1.6 + random(i, 8) * 1.0) : size * 0.5;
      
      stars.push({ 
        x, y, size, r, g, b, baseAlpha, glowColor, glowRadius,
        depth, hasDiffraction, hasStrongGlow,
        twinkleOffset: (i % 15) * 0.2,
        twinkleDuration: 2.2 + (random(i, 9) * 2.5)
      });
    }

    return (
      <div className="absolute inset-0" style={{ background: 'rgb(1, 0, 2)' }}>
        {/* Deep void foundation */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 125% 115% at 52% 48%, rgba(5, 3, 8, 0.7) 0%, rgba(1, 0, 2, 1) 72%)'
        }} />

        {/* NEBULA: Burnt rust/orange dust (Top-Left) - Multiple sub-clouds */}
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(ellipse 60% 55% at 16% 16%, rgba(225, 100, 48, 0.78) 0%, rgba(185, 72, 32, 0.52) 26%, rgba(145, 48, 20, 0.24) 46%, transparent 66%),
            radial-gradient(ellipse 48% 45% at 10% 24%, rgba(205, 82, 38, 0.62) 0%, rgba(165, 58, 25, 0.35) 32%, rgba(125, 38, 15, 0.14) 54%, transparent 72%),
            radial-gradient(ellipse 42% 38% at 24% 12%, rgba(240, 112, 52, 0.58) 0%, rgba(195, 80, 35, 0.30) 36%, transparent 62%)
          `,
          filter: 'blur(16px)',
          mixBlendMode: 'screen',
          opacity: 0.90
        }}
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

        {/* MICROSTAR FIELD - Multi-layered for depth & realism */}
        {/* Layer 1: Brilliant hero stars with glows */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: (() => {
              const heroes = stars.filter(s => s.size > 2.5).slice(0, 15);
              return heroes.map(s => 
                `radial-gradient(circle ${s.size * 1.2}px at ${s.x}% ${s.y}%, rgba(${s.r}, ${s.g}, ${s.b}, 1), rgba(${s.r}, ${s.g}, ${s.b}, 0.6) 30%, rgba(${s.r}, ${s.g}, ${s.b}, 0.25) 50%, transparent 75%)`
              ).join(',');
            })(),
            opacity: 0.90
          }}
        />

        {/* Layer 2: Large stars - vivid colors */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: (() => {
              const large = stars.filter(s => s.size > 1.5 && s.size <= 2.5).slice(0, 28);
              return large.map(s => 
                `radial-gradient(circle ${s.size}px at ${s.x}% ${s.y}%, rgba(${s.r}, ${s.g}, ${s.b}, ${s.baseAlpha}), rgba(${s.r}, ${s.g}, ${s.b}, ${s.baseAlpha * 0.35}) 50%, transparent 70%)`
              ).join(',');
            })(),
            opacity: 0.84
          }}
        />

        {/* Layer 3: Medium stars - main population */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: (() => {
              const medium = stars.filter(s => s.size > 0.65 && s.size <= 1.5).slice(0, 50);
              return medium.map(s => 
                `radial-gradient(circle ${Math.max(s.size, 0.5)}px at ${s.x}% ${s.y}%, rgba(${s.r}, ${s.g}, ${s.b}, ${s.baseAlpha * 0.95}), transparent 60%)`
              ).join(',');
            })(),
            opacity: 0.78
          }}
        />

        {/* Layer 4: Small stars - rich texture */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: (() => {
              const small = stars.filter(s => s.size > 0.35 && s.size <= 0.65).slice(0, 55);
              return small.map(s => 
                `radial-gradient(circle ${Math.max(s.size, 0.35)}px at ${s.x}% ${s.y}%, rgba(${s.r}, ${s.g}, ${s.b}, ${s.baseAlpha * 0.85}), transparent 55%)`
              ).join(',');
            })(),
            opacity: 0.68
          }}
        />

        {/* Layer 5: Micro dust stars - atmospheric depth */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: (() => {
              const micro = stars.filter(s => s.size <= 0.35).slice(0, 60);
              return micro.map(s => 
                `radial-gradient(circle ${Math.max(s.size, 0.25)}px at ${s.x}% ${s.y}%, rgba(${s.r}, ${s.g}, ${s.b}, ${s.baseAlpha * 0.65}), transparent 50%)`
              ).join(',');
            })(),
            opacity: 0.75
          }}
        />

        {/* Layer 6: Extra faint starfield for richness */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: (() => {
              const faint = stars.slice(180).map(s => 
                `radial-gradient(circle 0.3px at ${s.x}% ${s.y}%, rgba(${s.r}, ${s.g}, ${s.b}, ${s.baseAlpha * 0.4}), transparent 45%)`
              ).join(',');
              return faint;
            })(),
            opacity: 0.55
          }}
        />

        {/* Dust extinction (realistic dimming in dense regions) */}
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
  },
  
  celestial_lagoon: () => <CelestialLagoonPreview />,
  
  celestial_lagoon_OLD: () => {
    // CELESTIAL LAGOON - Deep serene underwater cosmic abyss
    const seed = 88;
    const random = (i, salt = 0) => {
      const x = Math.sin(seed * 9999 + i * 7919 + salt * 1234) * 10000;
      return x - Math.floor(x);
    };

    // Generate 235 stars - aquatic color theme
    const stars = [];
    const starCount = 235;
    
    for (let i = 0; i < starCount; i++) {
      const x = random(i, 1) * 100;
      const y = random(i, 2) * 100;

      const sizeCurve = Math.pow(random(i, 3), 5.8);
      let baseSize = 0.22 + sizeCurve * 4.8;
      
      const depthRoll = random(i, 4);
      let sizeMultiplier, alphaMultiplier;
      
      if (depthRoll < 0.14) {
        sizeMultiplier = 1.85;
        alphaMultiplier = 1.55;
      } else if (depthRoll < 0.68) {
        sizeMultiplier = 1.0;
        alphaMultiplier = 1.0;
      } else {
        sizeMultiplier = 0.52;
        alphaMultiplier = 0.48;
      }
      
      const size = baseSize * sizeMultiplier;
      
      // Underwater aquatic palette - cool tones dominant
      const colorRoll = random(i, 5);
      let r, g, b;
      
      if (colorRoll < 0.32) { // Aquamarine cyan
        r = 145 + random(i, 10) * 75; g = 225 + random(i, 11) * 30; b = 245 + random(i, 12) * 10;
      } else if (colorRoll < 0.58) { // Pure crystalline white
        r = 250 + random(i, 10) * 5; g = 252 + random(i, 11) * 3; b = 255;
      } else if (colorRoll < 0.75) { // Deep teal
        r = 95 + random(i, 10) * 80; g = 195 + random(i, 11) * 50; b = 215 + random(i, 12) * 40;
      } else if (colorRoll < 0.86) { // Turquoise
        r = 115 + random(i, 10) * 85; g = 215 + random(i, 11) * 40; b = 235 + random(i, 12) * 20;
      } else if (colorRoll < 0.94) { // Soft lavender-blue
        r = 200 + random(i, 10) * 45; g = 220 + random(i, 11) * 35; b = 250 + random(i, 12) * 5;
      } else { // Brilliant white-cyan
        r = 240 + random(i, 10) * 15; g = 250 + random(i, 11) * 5; b = 255;
      }

      const baseAlpha = (0.32 + random(i, 6) * 0.68) * alphaMultiplier;
      
      stars.push({ x, y, size, r, g, b, baseAlpha });
    }

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

        {/* MICROSTAR FIELD - 6 aquatic layers */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: (() => {
              const heroes = stars.filter(s => s.size > 2.6).slice(0, 14);
              return heroes.map(s => 
                `radial-gradient(circle ${s.size * 1.35}px at ${s.x}% ${s.y}%, rgba(${s.r}, ${s.g}, ${s.b}, 1), rgba(${s.r}, ${s.g}, ${s.b}, 0.68) 26%, rgba(${s.r}, ${s.g}, ${s.b}, 0.32) 46%, transparent 70%)`
              ).join(',');
            })(),
            opacity: 0.93
          }}
        />

        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: (() => {
              const large = stars.filter(s => s.size > 1.5 && s.size <= 2.6).slice(0, 28);
              return large.map(s => 
                `radial-gradient(circle ${s.size}px at ${s.x}% ${s.y}%, rgba(${s.r}, ${s.g}, ${s.b}, ${s.baseAlpha}), rgba(${s.r}, ${s.g}, ${s.b}, ${s.baseAlpha * 0.42}) 46%, transparent 66%)`
              ).join(',');
            })(),
            opacity: 0.87
          }}
        />

        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: (() => {
              const medium = stars.filter(s => s.size > 0.68 && s.size <= 1.5).slice(0, 50);
              return medium.map(s => 
                `radial-gradient(circle ${Math.max(s.size, 0.56)}px at ${s.x}% ${s.y}%, rgba(${s.r}, ${s.g}, ${s.b}, ${s.baseAlpha * 0.97}), transparent 56%)`
              ).join(',');
            })(),
            opacity: 0.81
          }}
        />

        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: (() => {
              const small = stars.filter(s => s.size > 0.36 && s.size <= 0.68).slice(0, 54);
              return small.map(s => 
                `radial-gradient(circle ${Math.max(s.size, 0.40)}px at ${s.x}% ${s.y}%, rgba(${s.r}, ${s.g}, ${s.b}, ${s.baseAlpha * 0.90}), transparent 52%)`
              ).join(',');
            })(),
            opacity: 0.72
          }}
        />

        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: (() => {
              const micro = stars.filter(s => s.size <= 0.36).slice(0, 60);
              return micro.map(s => 
                `radial-gradient(circle ${Math.max(s.size, 0.30)}px at ${s.x}% ${s.y}%, rgba(${s.r}, ${s.g}, ${s.b}, ${s.baseAlpha * 0.70}), transparent 46%)`
              ).join(',');
            })(),
            opacity: 0.80
          }}
        />

        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: (() => {
              const faint = stars.slice(175).map(s => 
                `radial-gradient(circle 0.34px at ${s.x}% ${s.y}%, rgba(${s.r}, ${s.g}, ${s.b}, ${s.baseAlpha * 0.44}), transparent 42%)`
              ).join(',');
              return faint;
            })(),
            opacity: 0.62
          }}
        />

        {/* Atmospheric depth vignette */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 22%, rgba(0, 0, 0, 0.52) 100%)'
        }} />
      </div>
    );
  },

  solar_aurora: () => <SolarAuroraPreview />,

  spiral_halo: () => <SpiralHaloPreview />,
  
  spiral_halo_OLD: () => (
    // SPIRAL HALO - Indigo core with pale blue spiral arms
    <div className="absolute inset-0" style={{ background: 'rgb(1, 1, 5)' }}>
      {/* Bright core */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle 18% at 50% 50%, rgba(255, 250, 240, 0.88) 0%, rgba(200, 180, 255, 0.68) 30%, rgba(80, 60, 180, 0.42) 55%, transparent 75%)',
          filter: 'blur(25px)'
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Spiral arm 1 - more vibrant */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 35% at 30% 30%, rgba(160, 190, 255, 0.58) 0%, rgba(135, 165, 235, 0.32) 50%, transparent 70%)',
          filter: 'blur(35px)',
          transform: 'rotate(-30deg)',
          transformOrigin: '50% 50%'
        }}
        animate={{ opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Spiral arm 2 - more vibrant */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 75% 30% at 70% 70%, rgba(145, 180, 255, 0.55) 0%, rgba(120, 150, 225, 0.28) 55%, transparent 70%)',
          filter: 'blur(35px)',
          transform: 'rotate(150deg)',
          transformOrigin: '50% 50%'
        }}
        animate={{ opacity: [0.68, 0.95, 0.68] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      {/* Additional bright arms */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 28% at 60% 40%, rgba(140, 175, 250, 0.48) 0%, rgba(115, 150, 225, 0.22) 55%, transparent 72%)',
          filter: 'blur(38px)',
          transform: 'rotate(60deg)',
          transformOrigin: '50% 50%'
        }}
        animate={{ opacity: [0.65, 0.88, 0.65] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 72% 30% at 40% 60%, rgba(135, 170, 245, 0.45) 0%, rgba(110, 145, 220, 0.20) 55%, transparent 72%)',
          filter: 'blur(38px)',
          transform: 'rotate(240deg)',
          transformOrigin: '50% 50%'
        }}
        animate={{ opacity: [0.62, 0.85, 0.62] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 4.5 }}
      />
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle 1.2px at 50% 50%, rgba(255, 255, 255, 1), transparent),
          radial-gradient(circle 1px at 40% 45%, rgba(200, 220, 255, 0.9), transparent),
          radial-gradient(circle 0.9px at 60% 55%, rgba(255, 255, 255, 0.85), transparent)
        `
      }} />
    </div>
  ),

  edge_of_andromeda: () => <EdgeOfAndromedaPreview />,
  
  edge_of_andromeda_OLD: () => (
    // EDGE OF ANDROMEDA - Horizontal disc with warm nucleus
    <div className="absolute inset-0" style={{ background: 'rgb(3, 2, 8)' }}>
      {/* Warm golden nucleus */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 25% 12% at 50% 50%, rgba(255, 235, 200, 0.5) 0%, rgba(240, 215, 180, 0.25) 45%, transparent 70%)',
          filter: 'blur(20px)'
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Disc horizontal band */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 95% 8% at 50% 50%, rgba(220, 200, 195, 0.35) 0%, rgba(180, 165, 190, 0.18) 50%, transparent 75%)',
          filter: 'blur(15px)'
        }}
      />
      {/* Violet outer halo */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 90% 50% at 50% 50%, transparent 30%, rgba(120, 85, 180, 0.25) 50%, rgba(90, 60, 150, 0.12) 70%, transparent 85%)',
          filter: 'blur(50px)'
        }}
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Dust lane */}
      <div
        className="absolute"
        style={{
          top: '48%',
          left: '10%',
          right: '10%',
          height: '4%',
          background: 'linear-gradient(to right, transparent, rgba(8, 5, 18, 0.7) 20%, rgba(8, 5, 18, 0.7) 80%, transparent)',
          filter: 'blur(4px)'
        }}
      />
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle 1px at 50% 50%, rgba(255, 248, 235, 0.95), transparent),
          radial-gradient(circle 0.8px at 35% 49%, rgba(255, 235, 210, 0.8), transparent),
          radial-gradient(circle 0.9px at 65% 51%, rgba(215, 225, 255, 0.75), transparent)
        `
      }} />
    </div>
  ),

  starburst_ring: () => <StarburstRingPreview />,
  
  starburst_ring_OLD: () => (
    // STARBURST RING - Neon ring with purple nucleus
    <div className="absolute inset-0" style={{ background: 'rgb(8, 6, 18)' }}>
      {/* Purple nucleus */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle 15% at 50% 50%, rgba(90, 46, 255, 0.6) 0%, rgba(154, 86, 255, 0.3) 40%, transparent 65%)',
          filter: 'blur(30px)'
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Magenta ring */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle 45% at 50% 50%, transparent 25%, rgba(255, 59, 234, 0.7) 35%, rgba(255, 59, 234, 0.4) 42%, transparent 60%)',
          filter: 'blur(20px)',
          mixBlendMode: 'screen'
        }}
        animate={{ scale: [1, 1.08, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      {/* Cyan accent clusters */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle 8% at 65% 35%, rgba(92, 201, 255, 0.5) 0%, transparent 60%),
            radial-gradient(circle 7% at 35% 65%, rgba(92, 201, 255, 0.45) 0%, transparent 60%)
          `,
          filter: 'blur(18px)',
          mixBlendMode: 'screen'
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle 1.3px at 50% 50%, rgba(255, 255, 255, 1), transparent),
          radial-gradient(circle 1px at 62% 38%, rgba(255, 59, 234, 0.9), transparent),
          radial-gradient(circle 0.9px at 38% 62%, rgba(92, 201, 255, 0.85), transparent)
        `
      }} />
    </div>
  )
};

export default function NebulaPreviewCard({ presetId }) {
  const Renderer = PresetRenderers[presetId] || PresetRenderers.lagoon_nebula;
  
  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden">
      <Renderer />
      {/* Subtle vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 30%, rgba(0, 0, 0, 0.5) 100%)'
        }}
      />
    </div>
  );
}