import React from "react";

export default function LayoutStyles({ darkMode, scrollbarColors }) {
  return (
    <style>{`
      /* Pause expensive animations during collapse transitions */
      body.collapse-animating .breathing-orb,
      body.collapse-animating .breathing-orbs-container,
      body.collapse-animating [class*="nebula"],
      body.collapse-animating [class*="quantum"],
      body.collapse-animating [class*="cosmic"],
      body.collapse-animating [class*="Nebula"],
      body.collapse-animating [class*="Galaxy"],
      body.collapse-animating [class*="Aurora"],
      body.collapse-animating [class*="Canvas"] {
        animation-play-state: paused !important;
        transition: none !important;
        will-change: auto !important;
      }
      
      /* Pause framer-motion animations during collapse */
      body.collapse-animating [style*="transform"] {
        transition: none !important;
        animation: none !important;
      }
      
      body.collapse-animating canvas {
        /* Canvas elements are paused via JS event, CSS ensures no flicker */
      }
      
      body.collapse-animating svg {
        animation-play-state: paused !important;
      }
      
      body.collapse-animating [style*="animation"] {
        animation-play-state: paused !important;
      }
      
      body.collapse-animating .absolute.inset-0 {
        will-change: auto !important;
      }

      .cosmic-noise {
        position: relative;
      }

      .cosmic-noise::before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch' result='noise'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        background-size: 256px 256px;
        opacity: ${darkMode ? '0.025' : '0.018'};
        z-index: 9999;
        mix-blend-mode: ${darkMode ? 'soft-light' : 'multiply'};
        filter: contrast(105%) brightness(${darkMode ? '100%' : '102%'});
      }

      /* Custom scrollbar */
      * {
        scrollbar-width: thin;
        scrollbar-color: ${darkMode ? 'rgba(139, 92, 246, 0.8) rgba(30, 30, 40, 0.3)' : 'rgba(168, 85, 247, 0.7) transparent'};
      }

      *::-webkit-scrollbar {
        width: 12px;
        height: 12px;
      }

      *::-webkit-scrollbar-track {
        background: ${darkMode ? 'rgba(30, 30, 40, 0.3)' : 'transparent'};
        border-radius: 10px;
        margin: 4px 0;
      }

      *::-webkit-scrollbar-thumb {
        background: ${scrollbarColors.thumb};
        border-radius: 10px;
        border: 2px solid ${darkMode ? 'rgba(30, 30, 40, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
        box-shadow: 0 0 15px ${scrollbarColors.glow};
        transition: background 0.3s ease, box-shadow 0.3s ease;
      }

      *::-webkit-scrollbar-thumb:hover {
        background: ${scrollbarColors.thumb};
        box-shadow: 0 0 20px ${scrollbarColors.hoverGlow};
      }

      *::-webkit-scrollbar-corner {
        background: transparent;
      }

      /* Hide scrollbar on mobile for clean native feel */
      @media (max-width: 640px) {
        * {
          scrollbar-width: none;
        }
        *::-webkit-scrollbar {
          display: none;
        }
      }
    `}</style>
  );
}

export function getScrollbarColors(userLevel, darkMode) {
  if (userLevel >= 31) {
    // Near mastery - bright gold
    return {
      thumb: darkMode 
        ? 'linear-gradient(to bottom, rgba(255, 216, 111, 0.9), rgba(251, 191, 36, 0.9))'
        : 'linear-gradient(to bottom, rgba(255, 216, 111, 0.85), rgba(251, 191, 36, 0.85))',
      glow: darkMode ? 'rgba(255, 216, 111, 0.5)' : 'rgba(255, 216, 111, 0.35)',
      hoverGlow: darkMode ? 'rgba(255, 216, 111, 0.7)' : 'rgba(255, 216, 111, 0.5)'
    };
  } else if (userLevel >= 16) {
    // High progress - electric teal
    return {
      thumb: darkMode 
        ? 'linear-gradient(to bottom, rgba(125, 247, 232, 0.9), rgba(45, 212, 191, 0.9))'
        : 'linear-gradient(to bottom, rgba(125, 247, 232, 0.85), rgba(45, 212, 191, 0.85))',
      glow: darkMode ? 'rgba(125, 247, 232, 0.5)' : 'rgba(125, 247, 232, 0.35)',
      hoverGlow: darkMode ? 'rgba(125, 247, 232, 0.7)' : 'rgba(125, 247, 232, 0.5)'
    };
  } else if (userLevel >= 6) {
    // Midway - purple
    return {
      thumb: darkMode 
        ? 'linear-gradient(to bottom, rgba(194, 155, 255, 0.9), rgba(168, 85, 247, 0.9))'
        : 'linear-gradient(to bottom, rgba(194, 155, 255, 0.85), rgba(168, 85, 247, 0.85))',
      glow: darkMode ? 'rgba(194, 155, 255, 0.5)' : 'rgba(194, 155, 255, 0.35)',
      hoverGlow: darkMode ? 'rgba(194, 155, 255, 0.7)' : 'rgba(194, 155, 255, 0.5)'
    };
  } else {
    // Beginner - calm soft blue
    return {
      thumb: darkMode 
        ? 'linear-gradient(to bottom, rgba(174, 200, 255, 0.9), rgba(147, 197, 253, 0.9))'
        : 'linear-gradient(to bottom, rgba(174, 200, 255, 0.85), rgba(147, 197, 253, 0.85))',
      glow: darkMode ? 'rgba(174, 200, 255, 0.5)' : 'rgba(174, 200, 255, 0.35)',
      hoverGlow: darkMode ? 'rgba(174, 200, 255, 0.7)' : 'rgba(174, 200, 255, 0.5)'
    };
  }
}