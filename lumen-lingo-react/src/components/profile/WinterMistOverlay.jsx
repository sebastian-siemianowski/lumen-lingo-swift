import React from "react";

// Subtle, performant bluish mist overlay (no backdrop-filter, low blurs, GPU hints)
export default function WinterMistOverlay({ darkMode }) {
  if (!darkMode) return null;

  return (
    <>
      {/* Outer cold aura */}
      <div
        className="absolute -inset-8 sm:-inset-12 rounded-[40px] sm:rounded-[56px] pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 120% 65% at 50% -10%, rgba(96, 165, 250, 0.20) 0%, transparent 58%),
            radial-gradient(ellipse 70% 110% at -10% 45%, rgba(59, 130, 246, 0.16) 0%, transparent 55%),
            radial-gradient(ellipse 70% 110% at 110% 60%, rgba(56, 189, 248, 0.16) 0%, transparent 55%),
            radial-gradient(ellipse 95% 45% at 50% 108%, rgba(30, 58, 138, 0.12) 0%, transparent 60%)
          `,
          filter: 'blur(16px)',
          contain: 'paint style',
          willChange: 'opacity, transform',
          transform: 'translateZ(0)'
        }}
      />

      {/* Soft top frost glow */}
      <div
        className="absolute inset-x-[6%] top-0 h-28 rounded-t-[18px] sm:rounded-t-[32px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 90% 100% at 50% 0%, rgba(191, 219, 254, 0.08) 0%, transparent 70%)',
          filter: 'blur(10px)',
          contain: 'paint style',
          willChange: 'opacity, transform',
          transform: 'translateZ(0)'
        }}
      />

      {/* Mist band for tranquil depth */}
      <div
        className="absolute inset-0 rounded-[18px] sm:rounded-[32px] pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(203, 213, 225, 0.06) 0%, transparent 30%, transparent 70%, rgba(15, 23, 42, 0.06) 100%)',
          contain: 'paint style',
          willChange: 'opacity',
          transform: 'translateZ(0)'
        }}
      />

      {/* Bottom blue haze */}
      <div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[82%] h-24 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(56, 189, 248, 0.16) 0%, transparent 72%)',
          filter: 'blur(14px)',
          contain: 'paint style',
          willChange: 'opacity, transform',
          transform: 'translateZ(0)'
        }}
      />

      {/* Corner crystalline tints */}
      <div
        className="absolute -top-6 -left-4 w-40 h-40 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(147, 197, 253, 0.14) 0%, transparent 70%)',
          filter: 'blur(12px)',
          contain: 'paint style',
          willChange: 'opacity, transform',
          transform: 'translateZ(0)'
        }}
      />
      <div
        className="absolute -bottom-6 -right-4 w-44 h-44 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(96, 165, 250, 0.14) 0%, transparent 70%)',
          filter: 'blur(12px)',
          contain: 'paint style',
          willChange: 'opacity, transform',
          transform: 'translateZ(0)'
        }}
      />
    </>
  );
}