import React, { useState, useEffect, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

// Smooth animated counter that counts up/down with spring physics
export default function AnimatedCounter({ value, className = "" }) {
  const springValue = useSpring(value, {
    stiffness: 100,
    damping: 20,
    mass: 0.5
  });
  
  const [displayValue, setDisplayValue] = useState(Math.round(value));
  
  useEffect(() => {
    springValue.set(value);
  }, [value, springValue]);
  
  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);
  
  return (
    <motion.span 
      className={className}
      key={displayValue}
      initial={{ scale: 1 }}
      animate={{ 
        scale: [1, 1.1, 1],
      }}
      transition={{ 
        duration: 0.3, 
        ease: [0.34, 1.56, 0.64, 1]
      }}
    >
      {displayValue}%
    </motion.span>
  );
}