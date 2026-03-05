import React from "react";

export default function DashboardStyles() {
  return (
    <style>{`
      .light-mode-text {
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
      }
      
      .light-mode-heading {
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        font-weight: 600;
        letter-spacing: -0.01em;
      }
      
      .light-mode-subtext {
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);
      }
      
      .light-mode-stat {
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);
        font-weight: 600;
      }
    `}</style>
  );
}