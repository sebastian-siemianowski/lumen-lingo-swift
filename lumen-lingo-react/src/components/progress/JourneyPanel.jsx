import React from "react";
import { useDarkMode } from "../theme/DarkModeContext";

export default function JourneyPanel({ children, className = "" }) {
  const { darkMode } = useDarkMode();

  return (
    <div className={`relative ${className}`}>
      {/* LAYER 1: Outermost Foggy Aura - Teal/Cyan */}
      {darkMode && (
        <div
          className="absolute -inset-4 sm:-inset-6 rounded-[28px] sm:rounded-[36px] pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 120% 60% at 50% -15%, rgba(45, 180, 200, 0.22) 0%, transparent 55%),
              radial-gradient(ellipse 50% 120% at -15% 50%, rgba(40, 160, 190, 0.18) 0%, transparent 50%),
              radial-gradient(ellipse 50% 120% at 115% 50%, rgba(40, 160, 190, 0.18) 0%, transparent 50%),
              radial-gradient(ellipse 100% 50% at 50% 115%, rgba(35, 140, 170, 0.12) 0%, transparent 50%)
            `,
            filter: 'blur(18px)'
          }}
        />
      )}

      {/* LAYER 2: Mid Foggy Glow - Purple/Violet */}
      {darkMode && (
        <div
          className="absolute -inset-3 sm:-inset-4 rounded-[24px] sm:rounded-[30px] pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 100% 50% at 50% -8%, rgba(120, 80, 200, 0.32) 0%, transparent 60%),
              radial-gradient(ellipse 45% 100% at -8% 50%, rgba(100, 70, 180, 0.26) 0%, transparent 55%),
              radial-gradient(ellipse 45% 100% at 108% 50%, rgba(100, 70, 180, 0.26) 0%, transparent 55%),
              radial-gradient(ellipse 85% 45% at 50% 108%, rgba(90, 60, 160, 0.18) 0%, transparent 55%)
            `,
            filter: 'blur(12px)'
          }}
        />
      )}

      {/* LAYER 3: Inner Luminous Edge Glow - Mixed Teal+Purple */}
      {darkMode && (
        <div
          className="absolute -inset-1.5 sm:-inset-2 rounded-[22px] sm:rounded-[26px] pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 90% 40% at 50% -3%, rgba(80, 180, 220, 0.36) 0%, rgba(130, 100, 200, 0.22) 40%, transparent 70%),
              radial-gradient(ellipse 35% 90% at -3% 50%, rgba(70, 160, 200, 0.28) 0%, rgba(110, 80, 180, 0.18) 45%, transparent 65%),
              radial-gradient(ellipse 35% 90% at 103% 50%, rgba(70, 160, 200, 0.28) 0%, rgba(110, 80, 180, 0.18) 45%, transparent 65%),
              radial-gradient(ellipse 80% 35% at 50% 103%, rgba(60, 140, 180, 0.22) 0%, rgba(100, 70, 170, 0.12) 45%, transparent 65%)
            `,
            filter: 'blur(8px)'
          }}
        />
      )}

      {/* LAYER 4: Crisp Edge Highlight - Bright accent line */}
      {darkMode && (
        <div
          className="absolute -inset-[1px] rounded-[21px] sm:rounded-[25px] pointer-events-none"
          style={{
            background: `
              linear-gradient(180deg,
                rgba(100, 200, 240, 0.5) 0%,
                rgba(140, 120, 220, 0.3) 15%,
                rgba(100, 80, 180, 0.15) 30%,
                rgba(80, 60, 150, 0.1) 50%,
                rgba(100, 80, 180, 0.15) 70%,
                rgba(140, 120, 220, 0.25) 85%,
                rgba(80, 180, 220, 0.35) 100%
              )
            `,
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            padding: '1.5px'
          }}
        />
      )}

      {/* Base content panel */}
      <div
        className="relative rounded-[22px] sm:rounded-[26px] p-4 sm:p-5 overflow-hidden"
        style={{
          background: darkMode
            ? 'linear-gradient(135deg, rgba(25, 18, 45, 0.75) 0%, rgba(20, 14, 38, 0.8) 100%)'
            : 'rgba(255, 255, 255, 0.12)',
          backdropFilter: 'blur(34px)',
          WebkitBackdropFilter: 'blur(34px)',
          boxShadow: darkMode
            ? '0 8px 20px rgba(0, 0, 0, 0.12), inset 0 1px 2px rgba(255, 255, 255, 0.18), inset 0 0 14px rgba(255, 255, 255, 0.04), inset 0 -2px 8px rgba(255, 255, 255, 0.06)'
            : '0 30px 60px -20px rgba(0, 0, 0, 0.10), 0 14px 28px -10px rgba(0, 0, 0, 0.06), inset 0 -2px 6px rgba(255, 255, 255, 0.10), inset 0 1px 2px rgba(255, 255, 255, 0.08)',
          border: '1px solid transparent'
        }}
      >
               {!darkMode && (
                 <div
                   className="absolute inset-0 rounded-[22px] sm:rounded-[26px] pointer-events-none"
                   style={{ border: '1px solid rgba(255, 255, 255, 0.18)' }}
                 />
               )}

               {!darkMode && (
                 <div
                   className="absolute inset-0 rounded-[22px] sm:rounded-[26px] pointer-events-none"
                   style={{ boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.25), inset 0 -3px 8px rgba(255, 255, 255, 0.22)' }}
                 />
               )}
               {/* Subtle color tint overlay - dark mode only */}
        {darkMode && (
          <div
            className="absolute inset-0 rounded-[22px] sm:rounded-[26px] pointer-events-none"
            style={{
              background: 'linear-gradient(165deg, rgba(60, 80, 140, 0.12) 0%, rgba(80, 60, 130, 0.08) 50%, rgba(50, 70, 120, 0.1) 100%)'
            }}
          />
        )}


        {/* Inner Top Luminance - Soft internal glow - dark mode only */}
        {darkMode && (
          <div
            className="absolute top-0 left-[5%] right-[5%] h-20 sm:h-24 rounded-t-[22px] sm:rounded-t-[26px] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(80, 170, 210, 0.06) 0%, transparent 70%)'
            }}
          />
        )}

        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}