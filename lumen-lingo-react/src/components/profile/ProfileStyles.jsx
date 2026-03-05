import React from "react";

export default function ProfileStyles() {
  return (
    <style>{`
      .light-mode-text {
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .light-mode-heading {
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.15);
        font-weight: 600;
        letter-spacing: -0.01em;
      }

      .light-mode-subtext {
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.08);
      }

      .light-mode-stat {
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 2px 6px rgba(0, 0, 0, 0.12);
        font-weight: 600;
      }
    `}</style>
  );
}