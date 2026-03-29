'use client';

import { useReducedMotion } from '@/hooks/use-reduced-motion';

/**
 * Cosmic diffused background — smooth overlapping gradients that create
 * a gassy, nebula-like atmosphere. No hard orbs or layered circles.
 * Pure CSS, GPU-composited, zero images.
 */
export function CosmicGradient() {
  const prefersReduced = useReducedMotion();
  const anim = (cls: string) => (prefersReduced ? '' : cls);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Anchored base so we never flash white */}
      <div className="absolute inset-0 bg-background" />

      {/* Primary diffused violet wash — top center, very wide spread */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 120% 80% at 50% 20%, rgba(139,92,246,0.10) 0%, transparent 70%)',
        }}
      />

      {/* Secondary cyan wash — bottom right, wide and soft */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 100% 70% at 80% 85%, rgba(6,182,212,0.06) 0%, transparent 65%)',
        }}
      />

      {/* Tertiary emerald accent — left side, barely visible */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 15% 50%, rgba(16,185,129,0.04) 0%, transparent 60%)',
        }}
      />

      {/* Gentle animated shimmer — slow drift for life */}
      <div
        className={`absolute inset-0 will-change-transform ${anim('animate-cosmic-drift-1')}`}
        style={{
          background:
            'radial-gradient(ellipse 90% 50% at 60% 40%, rgba(139,92,246,0.05) 0%, transparent 60%)',
        }}
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

      {/* Soft edge fade — draws eye to center without harsh vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 0%, transparent 50%, var(--color-background) 90%)',
        }}
      />
    </div>
  );
}
