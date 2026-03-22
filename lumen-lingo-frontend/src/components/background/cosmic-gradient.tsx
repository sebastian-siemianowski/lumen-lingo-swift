'use client';

import { useReducedMotion } from '@/hooks/use-reduced-motion';

/**
 * Cosmic gradient mesh — 4 blurred colour orbs drifting on organic
 * paths over 40–60 seconds. Pure CSS, GPU-composited, zero images.
 */
export function CosmicGradient() {
  const prefersReduced = useReducedMotion();
  const anim = (cls: string) => (prefersReduced ? '' : cls);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Anchored base so we never flash white */}
      <div className="absolute inset-0 bg-background" />

      {/* 1 ─ Violet orb · top-right, 40s loop */}
      <div
        className={`absolute -top-[20%] -right-[15%] h-[min(800px,70vw)] w-[min(800px,70vw)] rounded-full bg-violet/[0.08] will-change-transform ${anim('animate-cosmic-drift-1')}`}
        style={{ filter: 'blur(120px)' }}
      />

      {/* 2 ─ Cyan orb · bottom-left, 50s loop */}
      <div
        className={`absolute -bottom-[18%] -left-[12%] h-[min(640px,55vw)] w-[min(640px,55vw)] rounded-full bg-cyan/[0.06] will-change-transform ${anim('animate-cosmic-drift-2')}`}
        style={{ filter: 'blur(110px)' }}
      />

      {/* 3 ─ Deep blue orb · center-right, 55s loop */}
      <div
        className={`absolute top-[30%] right-[5%] h-[min(520px,45vw)] w-[min(520px,45vw)] rounded-full bg-[#1e3a5f]/[0.12] will-change-transform ${anim('animate-cosmic-drift-3')}`}
        style={{ filter: 'blur(100px)' }}
      />

      {/* 4 ─ Warm violet pulse · centre, 45s loop */}
      <div
        className={`absolute top-1/2 left-1/2 h-[min(400px,35vw)] w-[min(400px,35vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/[0.04] will-change-transform ${anim('animate-cosmic-pulse')}`}
        style={{ filter: 'blur(90px)' }}
      />

      {/* Noise texture — organic grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />

      {/* Radial vignette — draws eye to content */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-background)_70%)]" />
    </div>
  );
}
