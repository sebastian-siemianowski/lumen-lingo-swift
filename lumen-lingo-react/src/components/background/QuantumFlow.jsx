import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Sophisticated color palettes optimized for beauty and blending
const SCHEMES = {
  dubai: {
    colors: ['#F59E0B', '#06B6D4', '#8B5CF6', '#EC4899'],
    blend: { dark: 0.85, light: 0.78 },
    lightColors: ['#8BC34A', '#26C6DA', '#42A5F5', '#7E57C2']
  },
  kyoto: {
    colors: ['#8B5CF6', '#EC4899', '#14B8A6', '#C084FC'],
    blend: { dark: 0.96, light: 0.94 },
    lightColors: ['#9462E7', '#C75C9C', '#B04DAC', '#4CA79B']
  },
  buenos_aires: {
    colors: ['#EC4899', '#F59E0B', '#8B5CF6', '#FB923C'],
    blend: { dark: 0.82, light: 0.76 },
    lightColors: ['#FF8FA3', '#FFB088', '#FF9F6E', '#D291BC', '#F5B75A']
  },
  hong_kong: {
    colors: ['#EC4899', '#06B6D4', '#8B5CF6', '#14B8A6'],
    blend: { dark: 0.86, light: 0.79 },
    lightColors: ['#D946A0', '#B84FA8', '#3B9AE0', '#2AA89B']
  },
  marrakech: {
    colors: ['#FB923C', '#EC4899', '#8B5CF6', '#F59E0B'],
    blend: { dark: 0.84, light: 0.77 },
    lightColors: ['#FFB088', '#FF8FA3', '#C291D4', '#D291BC', '#F5C77A']
  },
  vienna: {
    colors: ['#C026D3', '#8B5CF6', '#60A5FA', '#EC4899'],
    blend: { dark: 0.87, light: 0.81 },
    lightColors: ['#A044D9', '#8E4EE2', '#815DEB', '#7770EE', '#6F84F0']
  }
};

export default function QuantumFlow({ 
  scheme = 'dubai', 
  intensity = 1.0, 
  speed = 1.0, 
  darkMode = false,
  isProfilePage = false
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const contextRef = useRef(null);
  const animationFrameRef = useRef(null);
  const timeRef = useRef(0);
  const curtainsRef = useRef([]);
  const isPausedRef = useRef(false);

  // Initialize Sophisticated Quantum Flow Curtains
  useEffect(() => {
    const schemeData = SCHEMES[scheme] || SCHEMES.dubai;
    const colors = schemeData.colors;
    
    // Create elegant, layered curtains with sophisticated wave patterns
    curtainsRef.current = colors.flatMap((color, colorIndex) => {
      // Create 3 layers per color for rich patterns with better performance
      return [0, 1, 2].map(layer => {
        const isBase = layer === 0;
        const seed = colorIndex * 3 + layer;
        
        return {
          color,
          colorIndex,
          layer,
          // Elegant vertical positioning spanning more of the screen
          yBase: 0.3 + (colorIndex * 0.14) + (layer * 0.04), 
          // Taller curtains for better coverage
          height: 380 + (seed * 42) % 200,
          // Primary wave - smooth, elegant motion
          frequency: 0.0008 + (seed * 0.0003),
          phase: (seed * 1.618) % (Math.PI * 2), // Golden ratio for natural distribution
          speed: 0.4 + (seed * 0.15) % 0.6,
          // Optimized harmonics for beautiful interference
          harmonics: [
            // Large, gentle waves
            { 
              freq: 0.008 + (seed * 0.002) % 0.012, 
              amp: 38 + (seed * 5) % 22, 
              speed: 1.2 + (seed * 0.2) % 0.6,
              phase: (seed * 2.718) % (Math.PI * 2)
            },
            // Medium flowing ripples
            { 
              freq: 0.022 + (seed * 0.005) % 0.018, 
              amp: 20 + (seed * 3) % 14, 
              speed: 2.2 + (seed * 0.3) % 0.8,
              phase: (seed * 1.414) % (Math.PI * 2)
            }
          ],
          // Optimized opacity layering for visibility
          opacityFactor: isBase ? 1.0 : (0.8 - layer * 0.2),
          // Turbulence for organic feel
          turbulence: {
            scale: 0.002 + (seed * 0.0005) % 0.003,
            strength: 12 + (seed * 3) % 10,
            speed: 0.8 + (seed * 0.2) % 0.5
          }
        };
      });
    });
  }, [scheme]);

  // Canvas Setup
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    contextRef.current = ctx;

    const resizeCanvas = () => {
      const { width, height } = container.getBoundingClientRect();
      const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
  };

  // Elegant intensity curve - optimized for both modes
  const getIntensityCurve = (intensity, isDark) => {
    if (isDark) {
      // Dark mode - keep existing perfect curve
      if (intensity <= 0.7) {
        return intensity * 0.9 * 1.15;
      } else if (intensity <= 1.0) {
        return (0.63 + (intensity - 0.7) * 1.0) * 1.15;
      } else {
        const bloom = intensity - 1.0;
        return (0.93 + (bloom * 0.45 * (1 - bloom * 0.12))) * 1.15;
      }
    } else {
      // Light mode - balanced elegance with controlled bloom
      if (intensity <= 0.7) {
        return intensity * 1.12;
      } else if (intensity <= 1.0) {
        return 0.784 + (intensity - 0.7) * 0.55;
      } else {
        // Celestial bloom - luminous but controlled, no oversaturation
        const bloom = intensity - 1.0;
        return 0.949 + (bloom * 0.22 * (1 - bloom * 0.35));
      }
    }
  };

  // Sophisticated Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = contextRef.current;
    if (!canvas || !ctx) return;

    let animationFrameId;
    const schemeData = SCHEMES[scheme] || SCHEMES.dubai;
    const blendFactor = darkMode ? schemeData.blend.dark : schemeData.blend.light;

    const render = () => {
      if (isPausedRef.current) { return; }
      const width = canvas.width / (typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1);
      const height = canvas.height / (typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1);
      
      ctx.clearRect(0, 0, width, height);

      // Smooth, elegant time progression
      timeRef.current += 0.006 * speed;
      const t = timeRef.current;

      // Sophisticated blending for rich, deep colors
      ctx.globalCompositeOperation = darkMode ? 'lighter' : 'source-over';

      curtainsRef.current.forEach((curtain) => {
        // Use refined light colors for light mode
        const colorToUse = darkMode ? curtain.color : (schemeData.lightColors[curtain.colorIndex] || curtain.color);
        const { r, g, b } = hexToRgb(colorToUse);
        
        // Elegant intensity scaling optimized for visibility
        const scaledIntensity = getIntensityCurve(intensity, darkMode);
        
        // Refined alpha - balanced for light mode clarity
        const baseAlpha = darkMode ? 0.21 : 0.32;
        const alpha = Math.min(baseAlpha * scaledIntensity * curtain.opacityFactor * blendFactor, darkMode ? 0.88 : 0.85);

        if (alpha <= 0.008) return;

        ctx.beginPath();

        const points = [];
        const segments = Math.ceil(width / 14); // Optimized vertex density

        // Generate elegant wave points with optimized harmonics
        for (let i = 0; i <= segments; i++) {
          const x = i * 14;
          
          // Primary wave - smooth and flowing
          let y = height * curtain.yBase + 
                  Math.sin(x * curtain.frequency + t * curtain.speed + curtain.phase) * 55;
          
          // Add sophisticated harmonics for beautiful vertical rays
          curtain.harmonics.forEach(h => {
            y += Math.sin(x * h.freq + t * h.speed * speed + h.phase) * h.amp * (0.8 + scaledIntensity * 0.2);
          });

          // Subtle turbulence for organic, natural feel
          const turb = curtain.turbulence;
          y += Math.sin(x * turb.scale + t * turb.speed) * turb.strength * 
               Math.cos(x * turb.scale * 1.7 - t * turb.speed * 0.8);

          points.push({ x, y });
        }

        // Draw path with smooth curves
        ctx.moveTo(0, height);
        ctx.lineTo(points[0].x, points[0].y);

        // Smooth bezier curves for elegant flow
        for (let i = 1; i < points.length; i++) {
          const xc = (points[i].x + points[i - 1].x) / 2;
          const yc = (points[i].y + points[i - 1].y) / 2;
          ctx.quadraticCurveTo(points[i - 1].x, points[i - 1].y, xc, yc);
        }
        
        ctx.lineTo(width, points[points.length - 1].y);
        ctx.lineTo(width, -400);
        ctx.lineTo(0, -400);
        ctx.closePath();

        // Sophisticated gradient with elegant fade
        const avgY = height * curtain.yBase;
        const gradientStart = avgY + 60;
        const gradientEnd = avgY - curtain.height * (0.9 + scaledIntensity * 0.25);

        const gradient = ctx.createLinearGradient(0, gradientStart, 0, gradientEnd);
        
        // Beautiful gradient stops for elegant curtain effect
        if (darkMode) {
          const intensityBoost = Math.min(1 + scaledIntensity * 0.2, 1.3);
          gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0)`);
          gradient.addColorStop(0.03, `rgba(${r}, ${g}, ${b}, ${alpha * 0.3 * intensityBoost})`);
          gradient.addColorStop(0.08, `rgba(${r}, ${g}, ${b}, ${alpha * 0.85 * intensityBoost})`);
          gradient.addColorStop(0.18, `rgba(${r}, ${g}, ${b}, ${alpha * 0.92 * intensityBoost})`);
          gradient.addColorStop(0.35, `rgba(${r}, ${g}, ${b}, ${alpha * 0.75})`);
          gradient.addColorStop(0.55, `rgba(${r}, ${g}, ${b}, ${alpha * 0.45})`);
          gradient.addColorStop(0.75, `rgba(${r}, ${g}, ${b}, ${alpha * 0.22})`);
          gradient.addColorStop(0.9, `rgba(${r}, ${g}, ${b}, ${alpha * 0.08})`);
          gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        } else {
          // Light mode - rich, visible, elegant gradient with controlled intensity
          const intensityBoost = Math.min(1 + scaledIntensity * 0.18, 1.22);
          gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0)`);
          gradient.addColorStop(0.02, `rgba(${r}, ${g}, ${b}, ${alpha * 0.45 * intensityBoost})`);
          gradient.addColorStop(0.06, `rgba(${r}, ${g}, ${b}, ${alpha * 0.92 * intensityBoost})`);
          gradient.addColorStop(0.14, `rgba(${r}, ${g}, ${b}, ${alpha * 1.0 * intensityBoost})`);
          gradient.addColorStop(0.28, `rgba(${r}, ${g}, ${b}, ${alpha * 0.88})`);
          gradient.addColorStop(0.48, `rgba(${r}, ${g}, ${b}, ${alpha * 0.62})`);
          gradient.addColorStop(0.68, `rgba(${r}, ${g}, ${b}, ${alpha * 0.34})`);
          gradient.addColorStop(0.85, `rgba(${r}, ${g}, ${b}, ${alpha * 0.14})`);
          gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        }

        ctx.fillStyle = gradient;
        
        // Elegant glow for high intensity
        if (scaledIntensity > 0.6 && width > 600) {
          if (darkMode) {
            ctx.shadowBlur = 25 * scaledIntensity;
            ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${Math.min(alpha * 0.8, 0.5)})`;
          } else {
            // Light mode - elegant glow without oversaturation
            ctx.shadowBlur = 22 * scaledIntensity;
            ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${Math.min(alpha * 0.58, 0.42)})`;
          }
        }

        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    const handleCollapsePause = (e) => { 
      const wasPaused = isPausedRef.current;
      isPausedRef.current = e.detail?.paused ?? false;
      if (wasPaused && !isPausedRef.current) {
        animationFrameId = requestAnimationFrame(render);
      }
    };
    window.addEventListener('collapsePause', handleCollapsePause);
    isPausedRef.current = document.body.classList.contains('collapse-animating');

    render();

    return () => {
      window.removeEventListener('collapsePause', handleCollapsePause);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity, speed, darkMode, scheme]);

  return (
    <motion.div 
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <canvas
        ref={canvasRef}
        style={{ 
          display: 'block',
          width: '100%',
          height: '100%',
          filter: darkMode 
            ? `contrast(${1.18 + intensity * 0.06}) saturate(${1.15 + intensity * 0.1}) brightness(${1.05 + intensity * 0.05})` 
            : `contrast(${1.15 + intensity * 0.04}) saturate(${1.18 + intensity * 0.08}) brightness(${0.98})`
        }}
      />
      
      {/* Elegant Atmospheric Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: darkMode 
            ? 'radial-gradient(circle at 50% 90%, transparent 0%, transparent 40%, rgba(5, 5, 10, 0.6) 85%, rgba(5, 5, 10, 0.85) 100%)'
            : 'radial-gradient(circle at 50% 90%, transparent 0%, transparent 60%, rgba(0, 0, 0, 0.02) 90%, rgba(0, 0, 0, 0.04) 100%)',
          pointerEvents: 'none'
        }}
      />
    </motion.div>
  );
}