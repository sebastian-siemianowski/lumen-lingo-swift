import React from "react";

export default function LanguageSelectionStyles() {
  return (
    <style>{`
      .light-mode-modal-heading {
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        font-weight: 600;
      }
      
      .light-mode-modal-text {
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
      }
      
      .light-mode-modal-subtext {
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);
      }
      
      .light-mode-modal-label {
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);
        font-weight: 600;
      }
      
      .light-mode-modal-lang {
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
      }

      .shimmer-effect {
        position: absolute;
        inset: 0;
        background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%);
        transform: translateX(-100%);
        animation: shimmer 3s linear infinite;
      }

      @keyframes shimmer {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(200%);
        }
      }

      .arrow-pulse {
        animation: arrowPulse 1.5s ease-in-out infinite;
      }

      @keyframes arrowPulse {
        0%, 100% {
          transform: translateX(0);
        }
        50% {
          transform: translateX(4px);
        }
      }
    `}</style>
  );
}