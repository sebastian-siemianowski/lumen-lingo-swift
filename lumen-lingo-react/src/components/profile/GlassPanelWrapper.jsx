import React from "react";
import { useDarkMode } from "../theme/DarkModeContext";
import WinterMistOverlay from "./WinterMistOverlay";

export default function GlassPanelWrapper({ children }) {
  const { darkMode } = useDarkMode();

  return (
    <div className="relative overflow-hidden rounded-[18px] sm:rounded-[32px]" style={{
      padding: typeof window !== 'undefined' && window.innerWidth < 640 ? '16px' : '38px',
      contain: 'layout style',
      willChange: 'opacity, transform',
      clipPath: 'inset(0 round 24px)'
    }}>
      {/* LAYER 1: Outermost Foggy Aura */}
      {darkMode && (
        <div className="absolute -inset-8 sm:-inset-12 rounded-[40px] sm:rounded-[56px] pointer-events-none" style={{
          background: `radial-gradient(ellipse 120% 60% at 50% -15%, rgba(70, 200, 220, 0.18) 0%, transparent 55%),
                       radial-gradient(ellipse 50% 120% at -15% 50%, rgba(60, 180, 210, 0.15) 0%, transparent 50%),
                       radial-gradient(ellipse 50% 120% at 115% 50%, rgba(60, 180, 210, 0.15) 0%, transparent 50%),
                       radial-gradient(ellipse 100% 50% at 50% 115%, rgba(55, 160, 190, 0.10) 0%, transparent 50%)`,
          filter: 'blur(16px)',
          willChange: 'opacity, transform',
          transform: 'translateZ(0)'
        }} />
      )}

      {/* LAYER 2: Mid Foggy Glow */}
      {darkMode && (
        <div className="absolute -inset-5 sm:-inset-7 rounded-[30px] sm:rounded-[45px] pointer-events-none" style={{
          background: `radial-gradient(ellipse 100% 50% at 50% -8%, rgba(140, 100, 220, 0.30) 0%, transparent 60%),
                       radial-gradient(ellipse 45% 100% at -8% 50%, rgba(120, 80, 200, 0.24) 0%, transparent 55%),
                       radial-gradient(ellipse 45% 100% at 108% 50%, rgba(120, 80, 200, 0.24) 0%, transparent 55%),
                       radial-gradient(ellipse 85% 45% at 50% 108%, rgba(110, 75, 190, 0.18) 0%, transparent 55%)`,
          filter: 'blur(12px)',
          willChange: 'opacity, transform',
          transform: 'translateZ(0)'
        }} />
      )}

      {/* LAYER 3: Inner Luminous Edge Glow */}
      {darkMode && (
        <div className="absolute -inset-2 sm:-inset-3 rounded-[22px] sm:rounded-[38px] pointer-events-none" style={{
          background: `radial-gradient(ellipse 90% 40% at 50% -3%, rgba(90, 190, 230, 0.36) 0%, rgba(140, 110, 210, 0.22) 40%, transparent 70%),
                       radial-gradient(ellipse 35% 90% at -3% 50%, rgba(85, 170, 210, 0.28) 0%, rgba(120, 90, 200, 0.18) 45%, transparent 65%),
                       radial-gradient(ellipse 35% 90% at 103% 50%, rgba(85, 170, 210, 0.28) 0%, rgba(120, 90, 200, 0.18) 45%, transparent 65%),
                       radial-gradient(ellipse 80% 35% at 50% 103%, rgba(75, 150, 195, 0.22) 0%, rgba(115, 85, 185, 0.14) 45%, transparent 65%)`,
          filter: 'blur(10px)',
          willChange: 'opacity, transform',
          transform: 'translateZ(0)'
        }} />
      )}

      {/* LAYER 4: Crisp Edge Highlight */}
      {darkMode && (
        <div className="absolute -inset-[1px] rounded-[19px] sm:rounded-[33px] pointer-events-none" style={{
          background: `linear-gradient(180deg, rgba(100, 200, 240, 0.5) 0%, rgba(140, 120, 220, 0.3) 15%, rgba(100, 80, 180, 0.15) 30%, rgba(80, 60, 150, 0.1) 50%, rgba(100, 80, 180, 0.15) 70%, rgba(140, 120, 220, 0.25) 85%, rgba(80, 180, 220, 0.35) 100%)`,
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1.5px'
        }} />
      )}

      {darkMode && <WinterMistOverlay darkMode={darkMode} />}

      {/* BASE FROSTED GLASS MATERIAL */}
      <div className="absolute inset-0 rounded-[18px] sm:rounded-[32px]" style={{
        background: darkMode ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.08)',
        backdropFilter: darkMode ? 'blur(16px)' : 'blur(10px)',
        WebkitBackdropFilter: darkMode ? 'blur(16px)' : 'blur(10px)'
      }} />

      {/* Subtle color tint overlay */}
      {darkMode && (
        <div className="absolute inset-0 rounded-[18px] sm:rounded-[32px] pointer-events-none" style={{
          background: 'linear-gradient(165deg, rgba(90, 60, 150, 0.10) 0%, rgba(70, 50, 140, 0.08) 45%, rgba(60, 40, 120, 0.10) 100%)'
        }} />
      )}

      {/* Inner Top Luminance */}
      {darkMode && (
        <div className="absolute top-0 left-[5%] right-[5%] h-32 rounded-t-[18px] sm:rounded-t-[32px] pointer-events-none" style={{
          background: 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(80, 170, 210, 0.06) 0%, transparent 70%)'
        }} />
      )}

      {/* INNER SHADOW */}
      <div className="absolute inset-0 rounded-[18px] sm:rounded-[32px] pointer-events-none" style={{
        boxShadow: darkMode
          ? '0 8px 20px rgba(0, 0, 0, 0.06), 0 3px 6px rgba(0, 0, 0, 0.04), inset 0 1px 2px rgba(255, 255, 255, 0.22), inset 0 0 24px rgba(255, 255, 255, 0.05), inset 0 -2px 12px rgba(255, 255, 255, 0.10)'
          : '0 8px 20px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.05), inset 0 1px 2px rgba(255, 255, 255, 0.25), inset 0 -3px 8px rgba(255, 255, 255, 0.22)'
      }} />

      {/* LIGHT MODE BORDER */}
      {!darkMode && (
        <div className="absolute inset-0 rounded-[18px] sm:rounded-[32px] pointer-events-none" style={{
          border: '1px solid rgba(255, 255, 255, 0.18)'
        }} />
      )}

      {/* LIGHT MODE: Top Wash */}
      {!darkMode && (
        <div className="absolute top-0 left-0 right-0 h-16 rounded-t-[18px] sm:rounded-t-[32px] pointer-events-none" style={{
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.10), transparent)'
        }} />
      )}

      {/* Content */}
      <div className="relative z-20" style={{ contain: 'layout paint style' }}>
        {children}
      </div>
    </div>
  );
}