import React, { useMemo, useRef, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COSMIC_PRESETS, generateMicrostars, getPresetById } from "./cosmicPresets";
import StarburstRingGalaxy from "./StarburstRingGalaxy";
import EdgeOfAndromedaGalaxy from "./EdgeOfAndromedaGalaxy";
import SpiralHaloGalaxy from "./SpiralHaloGalaxy";
import CelestialLagoonNebula from "./CelestialLagoonNebula";
import SolarAuroraNebula from "./SolarAuroraNebula";
import LagoonNebula from "./LagoonNebula";

// ═══════════════════════════════════════════════════════════════
// MICROSTAR CANVAS RENDERER
// High-performance canvas-based starfield with preset-specific behavior
// ═══════════════════════════════════════════════════════════════

// Sprite cache for MicrostarCanvas
const microstarSpriteCache = new Map();

const getMicrostarSprite = (size, color) => {
  // Round size to reduce cache variants
  const bucketedSize = Math.max(0.5, Math.round(size * 2) / 2);
  const key = `${color.join(',')}-${bucketedSize}`;
  
  if (microstarSpriteCache.has(key)) return microstarSpriteCache.get(key);

  const canvas = document.createElement('canvas');
  const glowRatio = 3.5; // Slightly tighter glow for microstars
  const fullSize = Math.ceil(bucketedSize * glowRatio * 2);
  
  canvas.width = fullSize;
  canvas.height = fullSize;
  const ctx = canvas.getContext('2d');
  const center = fullSize / 2;
  
  // Soft Glow
  const gradient = ctx.createRadialGradient(center, center, 0, center, center, bucketedSize * glowRatio);
  gradient.addColorStop(0, `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.9)`);
  gradient.addColorStop(0.2, `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.6)`);
  gradient.addColorStop(1, `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0)`);
  
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(center, center, bucketedSize * glowRatio, 0, Math.PI * 2);
  ctx.fill();

  // White Core
  const coreGradient = ctx.createRadialGradient(center, center, 0, center, center, bucketedSize * 0.6);
  coreGradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  coreGradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
  
  ctx.fillStyle = coreGradient;
  ctx.beginPath();
  ctx.arc(center, center, bucketedSize * 0.6, 0, Math.PI * 2);
  ctx.fill();

  microstarSpriteCache.set(key, canvas);
  return canvas;
};

const MicrostarCanvas = memo(({ stars, preset, intensity, speed }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const startTimeRef = useRef(Date.now());
  const isPausedRef = useRef(false);

  const motion_config = preset.motion || {};

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { desynchronized: true });
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

    // Pause during collapse animations - use event listener for immediate response
    const handleCollapsePause = (e) => {
      const wasPaused = isPausedRef.current;
      isPausedRef.current = e.detail?.paused ?? false;
      // Restart animation loop when unpausing
      if (wasPaused && !isPausedRef.current) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };
    window.addEventListener('collapsePause', handleCollapsePause);
    // Also check class as fallback
    isPausedRef.current = document.body.classList.contains('collapse-animating');

    const parallaxLayers = preset.microstarConfig?.parallaxLayers || 3;
    const driftDir = motion_config.driftDirection || { x: 0.15, y: 0.1 };
    const driftSpd = (motion_config.driftSpeed || 1.0) * speed;
    const waveAmp = motion_config.waveAmplitude || { x: 12, y: 10 };
    const waveFreq = motion_config.waveFrequency || 0.0005;
    const hasRotation = motion_config.rotation?.enabled;
    const rotationSpeed = motion_config.rotation?.speed || 0.0001;
    const rotationDir = motion_config.rotation?.direction === 'clockwise' ? 1 : -1;
    const hasRadialDrift = motion_config.radialDrift?.enabled;
    const radialAmp = motion_config.radialDrift?.amplitude || 4;
    const radialSpeed = motion_config.radialDrift?.speed || 0.0002;
    const hasUndulating = motion_config.undulatingWave;
    const vertTurbulence = motion_config.verticalTurbulence || 0;

    const animate = () => {
      if (isPausedRef.current) { return; } // Completely stop loop when paused
      const elapsed = (Date.now() - startTimeRef.current) / 1000 * driftSpd;
      ctx.clearRect(0, 0, width, height);

      // Global drift
      const globalDriftX = Math.sin(elapsed * 0.3) * waveAmp.x * 0.5;
      const globalDriftY = Math.cos(elapsed * 0.2) * waveAmp.y * 0.3;

      // Optional rotation angle for galaxy presets
      const rotationAngle = hasRotation ? elapsed * rotationSpeed * rotationDir : 0;

      stars.forEach((star, i) => {
        const layerMultiplier = 0.5 + star.layerDepth * 0.5;
        
        // Twinkle
        const twinklePhase = elapsed * star.twinkleSpeed + star.twinkleOffset;
        const twinkle = 0.5 + Math.sin(twinklePhase) * star.twinkleAmplitude + 
                        Math.sin(twinklePhase * 1.7) * star.twinkleAmplitude * 0.5;
        const opacity = star.baseOpacity * twinkle * intensity * (0.6 + star.layerDepth * 0.4);

        // Size pulsing
        const sizePulse = 1 + Math.sin(twinklePhase * 0.6) * 0.1;
        const size = star.size * sizePulse;

        // Individual drift
        const starPhase = i * 0.1 + star.twinkleOffset;
        let localDriftX = Math.sin(elapsed * waveFreq * 1000 + starPhase) * waveAmp.x * layerMultiplier;
        let localDriftY = Math.cos(elapsed * waveFreq * 800 + starPhase * 1.3) * waveAmp.y * 0.7 * layerMultiplier;

        // Undulating wave pattern for nebula_03
        if (hasUndulating) {
          localDriftY += Math.sin(elapsed * 0.4 + star.x * 10) * 8 * layerMultiplier;
        }

        // Vertical turbulence for nebula_02
        if (vertTurbulence > 0) {
          localDriftY += Math.sin(elapsed * 0.5 + starPhase * 2) * vertTurbulence * 20 * layerMultiplier;
        }

        // Radial drift for galaxy_03
        let radialOffsetX = 0, radialOffsetY = 0;
        if (hasRadialDrift) {
          const starAngle = Math.atan2(star.y - 0.5, star.x - 0.5);
          const radialPhase = elapsed * radialSpeed * 1000 + starPhase;
          const radialOffset = Math.sin(radialPhase) * radialAmp * layerMultiplier;
          radialOffsetX = Math.cos(starAngle) * radialOffset;
          radialOffsetY = Math.sin(starAngle) * radialOffset;
        }

        // Calculate base position
        let baseX = star.x * width;
        let baseY = star.y * height;

        // Apply rotation for galaxy presets
        if (hasRotation) {
          const centerX = width / 2;
          const centerY = height / 2;
          const dx = baseX - centerX;
          const dy = baseY - centerY;
          const rotatedX = dx * Math.cos(rotationAngle) - dy * Math.sin(rotationAngle);
          const rotatedY = dx * Math.sin(rotationAngle) + dy * Math.cos(rotationAngle);
          baseX = centerX + rotatedX;
          baseY = centerY + rotatedY;
        }

        // Final position with all drift components
        let x = baseX + globalDriftX * layerMultiplier + localDriftX * 0.6 + radialOffsetX;
        let y = baseY + globalDriftY * layerMultiplier + localDriftY * 0.6 + radialOffsetY;

        // Wrap around
        x = ((x % width) + width) % width;
        y = ((y % height) + height) % height;

        const [r, g, b] = star.color;

        // OPTIMIZED: Use pre-rendered sprites
        const sprite = getMicrostarSprite(size, star.color);
        
        if (sprite) {
          ctx.globalAlpha = Math.min(1, opacity);
          const drawSize = sprite.width;
          // Draw slightly larger to account for glow padding in sprite
          ctx.drawImage(sprite, x - drawSize/2, y - drawSize/2);
          ctx.globalAlpha = 1.0;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('collapsePause', handleCollapsePause);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [stars, preset, intensity, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ isolation: 'isolate' }}
    />
  );
});

MicrostarCanvas.displayName = 'MicrostarCanvas';

// ═══════════════════════════════════════════════════════════════
// GRADIENT LAYER RENDERER
// Renders preset-defined gradient layers with CSS
// ═══════════════════════════════════════════════════════════════

const GradientLayers = memo(({ preset, intensity, speed }) => {
  const layers = preset.gradientLayers || [];
  
  return (
    <>
      {layers.map((layer, idx) => {
        if (layer.type === 'radial') {
          const colors = layer.colors.map(c => {
            const opacity = (c.opacity || 0) * intensity;
            return `rgba(${c.color[0]}, ${c.color[1]}, ${c.color[2]}, ${opacity}) ${c.stop}%`;
          }).join(', ');

          const gradient = `radial-gradient(ellipse ${layer.size.w}% ${layer.size.h}% at ${layer.position.x}% ${layer.position.y}%, ${colors})`;

          return (
            <motion.div
              key={idx}
              className="absolute inset-0"
              style={{
                background: gradient,
                filter: layer.blur ? `blur(${layer.blur}px)` : undefined,
                transform: layer.rotation ? `rotate(${layer.rotation}deg)` : undefined
              }}
              animate={layer.animated ? {
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8]
              } : undefined}
              transition={layer.animated ? {
                duration: 15 / speed,
                repeat: Infinity,
                ease: "easeInOut"
              } : undefined}
            />
          );
        }

        if (layer.type === 'conic') {
          // Ring gradient for galaxy_03
          const stops = layer.colors.map(c => {
            const opacity = (c.opacity || 0) * intensity;
            return `rgba(${c.color[0]}, ${c.color[1]}, ${c.color[2]}, ${opacity}) ${c.angle}deg`;
          }).join(', ');

          return (
            <motion.div
              key={idx}
              className="absolute"
              style={{
                width: `${layer.outerRadius * 2}%`,
                height: `${layer.outerRadius * 2}%`,
                left: `${50 - layer.outerRadius}%`,
                top: `${50 - layer.outerRadius}%`,
                background: `conic-gradient(from 0deg at 50% 50%, ${stops})`,
                filter: layer.blur ? `blur(${layer.blur}px)` : undefined,
                borderRadius: '50%',
                WebkitMask: `radial-gradient(circle, transparent ${layer.innerRadius / layer.outerRadius * 100}%, black ${layer.innerRadius / layer.outerRadius * 100 + 5}%)`,
                mask: `radial-gradient(circle, transparent ${layer.innerRadius / layer.outerRadius * 100}%, black ${layer.innerRadius / layer.outerRadius * 100 + 5}%)`
              }}
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 300 / speed,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          );
        }

        return null;
      })}
    </>
  );
});

GradientLayers.displayName = 'GradientLayers';

// ═══════════════════════════════════════════════════════════════
// VIGNETTE AND EFFECTS
// ═══════════════════════════════════════════════════════════════

const CosmicEffects = memo(({ preset, intensity }) => {
  return (
    <>
      {/* Edge vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 90% 75% at 50% 50%, 
              transparent 0%, 
              transparent 30%,
              rgba(8, 5, 18, ${0.12 * intensity}) 50%,
              rgba(5, 3, 12, ${0.3 * intensity}) 70%,
              rgba(3, 2, 8, ${0.5 * intensity}) 85%,
              rgba(2, 1, 5, ${0.7 * intensity}) 100%
            )
          `
        }}
      />

      {/* Central clarity zone */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 55% at 50% 45%, 
              rgba(255, 245, 255, ${0.015 * intensity}) 0%, 
              rgba(240, 230, 250, ${0.008 * intensity}) 35%,
              transparent 65%
            )
          `,
          mixBlendMode: 'screen'
        }}
      />

      {/* HDR bloom */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 50% 40% at 45% 42%, rgba(255, 220, 240, ${0.025 * intensity}) 0%, transparent 50%),
            radial-gradient(ellipse 40% 35% at 60% 55%, rgba(240, 200, 230, ${0.02 * intensity}) 0%, transparent 45%)
          `,
          filter: 'blur(60px)',
          mixBlendMode: 'screen',
          opacity: 0.7
        }}
      />
    </>
  );
});

CosmicEffects.displayName = 'CosmicEffects';

// ═══════════════════════════════════════════════════════════════
// MAIN COSMIC BACKGROUND COMPONENT
// ═══════════════════════════════════════════════════════════════

export default function CosmicBackground({ 
  presetId = 'nebula_01', 
  intensity = 1.0, 
  speed = 1.0 
}) {
  const preset = getPresetById(presetId);
  
  // Use custom renderer for specific presets
  if (preset.useCustomRenderer === 'starburst_ring') {
    return <StarburstRingGalaxy intensity={intensity} speed={speed} />;
  }
  
  if (preset.useCustomRenderer === 'edge_of_andromeda') {
    return <EdgeOfAndromedaGalaxy intensity={intensity} speed={speed} />;
  }
  
  if (preset.useCustomRenderer === 'spiral_halo') {
    return <SpiralHaloGalaxy intensity={intensity} speed={speed} />;
  }
  
  if (preset.useCustomRenderer === 'celestial_lagoon') {
    return <CelestialLagoonNebula intensity={intensity} speed={speed} />;
  }
  
  if (preset.useCustomRenderer === 'solar_aurora') {
    return <SolarAuroraNebula intensity={intensity} speed={speed} />;
  }

  if (preset.useCustomRenderer === 'lagoon_nebula') {
    return <LagoonNebula intensity={intensity} speed={speed} />;
  }
  
  // Generate stars once per preset
  const stars = useMemo(() => {
    if (preset.microstarConfig) {
      return generateMicrostars(preset.microstarConfig, preset.id.charCodeAt(preset.id.length - 1));
    }
    return [];
  }, [preset.id, preset.microstarConfig]);

  // For nebula_01, we use the original NebulaDrift component
  // This check happens in the parent (Layout.js) to maintain exact behavior

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden" 
      style={{ zIndex: 0, isolation: 'isolate' }}
    >
      {/* Foundation void */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 140% 120% at 50% 50%, 
              rgba(12, 8, 28, 0) 0%, 
              rgba(8, 5, 20, 0.4) 35%,
              rgba(5, 3, 14, 0.7) 60%,
              rgba(3, 2, 10, 0.9) 85%,
              rgba(2, 1, 6, 1) 100%
            )
          `
        }}
      />

      {/* Gradient layers from preset */}
      <GradientLayers preset={preset} intensity={intensity} speed={speed} />

      {/* Microstar field */}
      <MicrostarCanvas stars={stars} preset={preset} intensity={intensity} speed={speed} />

      {/* Common effects */}
      <CosmicEffects preset={preset} intensity={intensity} />
    </div>
  );
}