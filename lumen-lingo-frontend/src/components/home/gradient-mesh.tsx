'use client';

import { useReducedMotion } from '@/hooks/use-reduced-motion';

export function GradientMesh() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {/* Base dark overlay to anchor the depth */}
      <div className="absolute inset-0 bg-background" />

      {/* Primary violet orb — top right drift */}
      <div
        className={`absolute -top-1/4 -right-1/4 h-[800px] w-[800px] rounded-full bg-violet/[0.07] blur-[120px] ${
          prefersReduced ? '' : 'animate-drift-slow'
        }`}
      />

      {/* Cyan accent orb — bottom left, slower */}
      <div
        className={`absolute -bottom-1/4 -left-1/4 h-[600px] w-[600px] rounded-full bg-cyan/[0.05] blur-[100px] ${
          prefersReduced ? '' : 'animate-drift-reverse'
        }`}
      />

      {/* Subtle warm orb — centre, very faint */}
      <div
        className={`absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/[0.04] blur-[80px] ${
          prefersReduced ? '' : 'animate-pulse-slow'
        }`}
      />

      {/* Noise texture overlay for depth and organic feel */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />

      {/* Radial gradient fade — centres attention on content */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-background)_70%)]" />
    </div>
  );
}
