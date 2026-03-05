import React from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../theme/DarkModeContext";

// Subtle particle field - creates a soft glowing nebula effect behind flashcards
export default function FlashcardParticleField() {
  const { darkMode } = useDarkMode();
  
  // Generate 8 particles with random positions
  const particles = React.useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      size: 2 + Math.random() * 2, // 2-4px
      initialX: 10 + Math.random() * 80, // % position
      initialY: 10 + Math.random() * 80,
      driftX: (Math.random() - 0.5) * 30, // drift range
      driftY: (Math.random() - 0.5) * 25,
      duration: 45 + Math.random() * 15, // 45-60s loop
      delay: Math.random() * -50, // stagger start
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
            background: darkMode
              ? 'rgba(192, 132, 252, 0.07)'
              : 'rgba(255, 255, 255, 0.06)',
            boxShadow: darkMode
              ? '0 0 6px rgba(139, 92, 246, 0.05)'
              : '0 0 6px rgba(255, 255, 255, 0.04)',
          }}
          animate={{
            x: [0, particle.driftX, -particle.driftX * 0.5, particle.driftX * 0.7, 0],
            y: [0, particle.driftY * 0.8, particle.driftY, -particle.driftY * 0.6, 0],
            opacity: [0.05, 0.07, 0.05, 0.06, 0.05],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}