import React, { useState, useEffect } from "react";
import { useDarkMode } from "../theme/DarkModeContext";

export default function FogOverlays() {
  const { darkMode } = useDarkMode();
  const [auroraEnabled, setAuroraEnabled] = useState(false);

  useEffect(() => {
    try {
      const aurora = localStorage.getItem('auroraEnabled');
      setAuroraEnabled(aurora === 'true');
    } catch {}

    const handleAuroraChange = () => {
      try {
        const aurora = localStorage.getItem('auroraEnabled');
        setAuroraEnabled(aurora === 'true');
      } catch {}
    };

    window.addEventListener('animationPreferencesChanged', handleAuroraChange);
    return () => window.removeEventListener('animationPreferencesChanged', handleAuroraChange);
  }, []);

  if (!darkMode || auroraEnabled) return null;

  return (
    <>
      <style jsx>{`
        @keyframes fogPulse {
          0%, 100% { opacity: 0.85; }
          50% { opacity: 1; }
        }
        
        @keyframes fogPulse2 {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.9; }
        }
        
        @keyframes fogScale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .fog-layer-1 {
          animation: fogPulse 4s ease-in-out infinite;
        }
        
        .fog-layer-2 {
          animation: fogPulse2 5s ease-in-out 0.5s infinite, fogScale 5s ease-in-out 0.5s infinite;
        }
        
        .fog-layer-3 {
          animation: fogPulse 4s ease-in-out 1s infinite;
        }
        
        .fog-layer-4 {
          animation: fogPulse2 5s ease-in-out 1.5s infinite, fogScale 5s ease-in-out 1.5s infinite;
        }
        
        .fog-layer-5 {
          animation: fogPulse2 6s ease-in-out infinite;
        }
      `}</style>

      <div 
        className="fixed top-0 left-0 right-0 h-48 pointer-events-none z-50 fog-layer-1"
        style={{
          background: 'linear-gradient(to bottom, rgba(88, 28, 135, 0.6) 0%, rgba(88, 28, 135, 0.4) 30%, rgba(88, 28, 135, 0.2) 60%, transparent 100%)',
          willChange: 'opacity',
          backfaceVisibility: 'hidden',
          transform: 'translateZ(0)'
        }}
      />

      <div 
        className="fixed top-0 left-0 right-0 h-64 pointer-events-none z-50 fog-layer-2"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(147, 51, 234, 0.35) 0%, rgba(168, 85, 247, 0.2) 40%, transparent 70%)',
          willChange: 'opacity, transform',
          backfaceVisibility: 'hidden',
          transformOrigin: 'center top'
        }}
      />

      <div 
        className="fixed bottom-0 left-0 right-0 h-48 pointer-events-none z-50 fog-layer-3"
        style={{
          background: 'linear-gradient(to top, rgba(88, 28, 135, 0.6) 0%, rgba(88, 28, 135, 0.4) 30%, rgba(88, 28, 135, 0.2) 60%, transparent 100%)',
          willChange: 'opacity',
          backfaceVisibility: 'hidden',
          transform: 'translateZ(0)'
        }}
      />

      <div 
        className="fixed bottom-0 left-0 right-0 h-64 pointer-events-none z-50 fog-layer-4"
        style={{
          background: 'radial-gradient(ellipse at bottom, rgba(147, 51, 234, 0.35) 0%, rgba(168, 85, 247, 0.2) 40%, transparent 70%)',
          willChange: 'opacity, transform',
          backfaceVisibility: 'hidden',
          transformOrigin: 'center bottom'
        }}
      />

      <div 
        className="fixed inset-0 pointer-events-none z-50 fog-layer-5"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(192, 132, 252, 0.08) 0%, transparent 40%), radial-gradient(circle at 70% 80%, rgba(168, 85, 247, 0.08) 0%, transparent 40%)',
          willChange: 'opacity',
          backfaceVisibility: 'hidden',
          transform: 'translateZ(0)'
        }}
      />
    </>
  );
}