import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../theme/DarkModeContext";

export default function ProgressFogOverlay() {
  const { darkMode } = useDarkMode();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!darkMode) return null;

  const topFogOpacity = Math.min(scrollY / 100, 1);

  return (
    <>
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-48 pointer-events-none z-50"
        style={{
          background: 'linear-gradient(to top, rgba(88, 28, 135, 0.6) 0%, rgba(88, 28, 135, 0.4) 30%, rgba(88, 28, 135, 0.2) 60%, transparent 100%)'
        }}
        animate={{
          opacity: [0.85, 1, 0.85]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </>
  );
}