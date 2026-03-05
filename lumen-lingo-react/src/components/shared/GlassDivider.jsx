import React from "react";
import { useDarkMode } from "../theme/DarkModeContext";

export default function GlassDivider({ className = "" }) {
  const { darkMode } = useDarkMode();
  
  // Golden ratio positioning: 38.2% and 61.8% for natural visual balance
  // Gaussian-inspired opacity curve for perceptually smooth falloff
  // Ultra-subtle to register subconsciously without demanding attention
  
  return (
    <div className={`relative ${className}`} style={{ height: '1px' }}>
      {/* Primary luminance line - barely perceptible */}
      <div 
        className="absolute inset-0"
        style={{
          background: darkMode
            ? `linear-gradient(90deg, 
                transparent 0%, 
                rgba(255, 255, 255, 0.03) 15%, 
                rgba(255, 255, 255, 0.12) 38.2%, 
                rgba(255, 255, 255, 0.15) 50%, 
                rgba(255, 255, 255, 0.12) 61.8%, 
                rgba(255, 255, 255, 0.03) 85%, 
                transparent 100%)`
            : `linear-gradient(90deg, 
                transparent 0%, 
                rgba(255, 255, 255, 0.05) 15%, 
                rgba(255, 255, 255, 0.18) 38.2%, 
                rgba(255, 255, 255, 0.22) 50%, 
                rgba(255, 255, 255, 0.18) 61.8%, 
                rgba(255, 255, 255, 0.05) 85%, 
                transparent 100%)`
        }}
      />
      {/* Soft ambient glow - subthreshold warmth */}
      <div 
        className="absolute inset-0"
        style={{
          filter: 'blur(2px)',
          opacity: darkMode ? 0.4 : 0.3,
          background: darkMode
            ? `linear-gradient(90deg, 
                transparent 20%, 
                rgba(168, 130, 255, 0.08) 50%, 
                transparent 80%)`
            : `linear-gradient(90deg, 
                transparent 20%, 
                rgba(255, 200, 150, 0.1) 50%, 
                transparent 80%)`
        }}
      />
    </div>
  );
}