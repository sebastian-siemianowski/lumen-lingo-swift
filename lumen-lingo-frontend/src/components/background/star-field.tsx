'use client';

import { useMemo } from 'react';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

/**
 * Pure-CSS star field using layered box-shadow particles.
 * Three depth layers at different sizes & twinkle speeds.
 * Zero canvas, zero images — just CSS + compositing.
 */
export function StarField() {
  const prefersReduced = useReducedMotion();

  // Generate deterministic star positions once (SSR-safe with fixed seed)
  const [small, medium, large] = useMemo(() => {
    const s = generateStars(180, 2000, 2000, 1);
    const m = generateStars(60, 2000, 2000, 2);
    const l = generateStars(20, 2000, 2000, 3);
    return [s, m, l];
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-background" />

      {/* Small stars — faint, many */}
      <div
        className={`absolute top-0 left-0 h-[1px] w-[1px] will-change-transform ${prefersReduced ? '' : 'animate-twinkle-slow'}`}
        style={{ boxShadow: small, borderRadius: '50%' }}
      />

      {/* Medium stars */}
      <div
        className={`absolute top-0 left-0 h-[2px] w-[2px] will-change-transform ${prefersReduced ? '' : 'animate-twinkle-mid'}`}
        style={{ boxShadow: medium, borderRadius: '50%' }}
      />

      {/* Large stars — few, brighter */}
      <div
        className={`absolute top-0 left-0 h-[3px] w-[3px] will-change-transform ${prefersReduced ? '' : 'animate-twinkle-fast'}`}
        style={{ boxShadow: large, borderRadius: '50%' }}
      />

      {/* Subtle radial fade to keep edges dark */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--color-background)_80%)]" />
    </div>
  );
}

/**
 * Deterministic star position generator using a simple seeded LCG.
 * Returns a box-shadow string with `count` stars spread across `w`×`h` px.
 */
function generateStars(count: number, w: number, h: number, seed: number): string {
  let s = seed;
  function rng() {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  }

  const shadows: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.round(rng() * w);
    const y = Math.round(rng() * h);
    const alpha = 0.15 + rng() * 0.55;
    shadows.push(`${x}px ${y}px 0 rgba(255,255,255,${alpha.toFixed(2)})`);
  }
  return shadows.join(',');
}
