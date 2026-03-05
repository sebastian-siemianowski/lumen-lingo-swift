import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../theme/DarkModeContext";

export default function ScrollIndicator() {
  const { darkMode } = useDarkMode();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      
      setScrollProgress(progress);
      setIsVisible(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed left-0 top-0 bottom-0 w-[2px] z-50 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.28 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute left-0 w-full rounded-full"
        style={{
          background: darkMode
            ? 'linear-gradient(180deg, rgba(168, 85, 247, 0.9) 0%, rgba(34, 211, 238, 0.9) 100%)'
            : 'linear-gradient(180deg, rgba(168, 85, 247, 0.85) 0%, rgba(34, 211, 238, 0.85) 100%)',
          height: '80px',
          top: `${scrollProgress * (100 - 8)}%`,
          borderRadius: '12px',
          boxShadow: darkMode
            ? '0 0 8px rgba(168, 85, 247, 0.5), 0 0 16px rgba(34, 211, 238, 0.3)'
            : '0 0 6px rgba(168, 85, 247, 0.4), 0 0 12px rgba(34, 211, 238, 0.25)'
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    </motion.div>
  );
}