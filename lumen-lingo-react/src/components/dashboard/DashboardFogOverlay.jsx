import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../theme/DarkModeContext";

export default function DashboardFogOverlay() {
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
        className="fixed top-0 left-0 right-0 h-48 pointer-events-none z-50"
        style={{
          background: 'linear-gradient(to bottom, rgba(88, 28, 135, 0.25) 0%, rgba(88, 28, 135, 0.15) 30%, rgba(88, 28, 135, 0.05) 60%, transparent 100%)',
          opacity: topFogOpacity * 0.6
        }}
        animate={{
          opacity: topFogOpacity > 0 ? [topFogOpacity * 0.5, topFogOpacity * 0.65, topFogOpacity * 0.5] : 0
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: [0.42, 0, 0.58, 1]
        }}
      />
      
      <motion.div
        className="fixed top-0 left-0 right-0 h-64 pointer-events-none z-50"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(147, 51, 234, 0.15) 0%, rgba(168, 85, 247, 0.08) 40%, transparent 70%)',
          opacity: topFogOpacity * 0.4
        }}
        animate={{
          opacity: topFogOpacity > 0 ? [topFogOpacity * 0.3, topFogOpacity * 0.5, topFogOpacity * 0.3] : 0,
          scale: [1, 1.02, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: [0.42, 0, 0.58, 1],
          delay: 0.5
        }}
      />

      <motion.div
        className="fixed bottom-0 left-0 right-0 h-48 pointer-events-none z-50"
        style={{
          background: 'linear-gradient(to top, rgba(88, 28, 135, 0.25) 0%, rgba(88, 28, 135, 0.15) 30%, rgba(88, 28, 135, 0.05) 60%, transparent 100%)'
        }}
        animate={{
          opacity: [0.5, 0.65, 0.5]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: [0.42, 0, 0.58, 1],
          delay: 1
        }}
      />
      
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-64 pointer-events-none z-50"
        style={{
          background: 'radial-gradient(ellipse at bottom, rgba(147, 51, 234, 0.15) 0%, rgba(168, 85, 247, 0.08) 40%, transparent 70%)'
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.02, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: [0.42, 0, 0.58, 1],
          delay: 1.5
        }}
      />

      <motion.div
        className="fixed inset-0 pointer-events-none z-50"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(192, 132, 252, 0.04) 0%, transparent 40%), radial-gradient(circle at 70% 80%, rgba(168, 85, 247, 0.04) 0%, transparent 40%)',
          opacity: topFogOpacity * 0.3
        }}
        animate={{
          opacity: topFogOpacity > 0 ? [topFogOpacity * 0.2, topFogOpacity * 0.35, topFogOpacity * 0.2] : 0
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: [0.42, 0, 0.58, 1]
        }}
      />
    </>
  );
}