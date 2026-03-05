import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDarkMode } from "../theme/DarkModeContext";

export default function AnimatedProgressBar({ 
  percentage, 
  height = "h-3",
  showMilestones = true,
  correct = 0,
  wrong = 0,
  compact = false
}) {
  const { darkMode } = useDarkMode();
  const prevPercentageRef = React.useRef(percentage);
  const prevCorrectRef = React.useRef(correct);
  const prevWrongRef = React.useRef(wrong);
  const [showPulse, setShowPulse] = useState(false);
  const [showShimmer, setShowShimmer] = useState(false);
  const [flashType, setFlashType] = useState(null); // 'correct' or 'wrong'

  
  // Detect progress increase for pulse, shimmer, and tick effect
  useEffect(() => {
    if (percentage > prevPercentageRef.current) {
      setShowPulse(true);
      setShowShimmer(true);
      const pulseTimer = setTimeout(() => setShowPulse(false), 600);
      const shimmerTimer = setTimeout(() => setShowShimmer(false), 800);
      
      prevPercentageRef.current = percentage;
      
      return () => {
        clearTimeout(pulseTimer);
        clearTimeout(shimmerTimer);
      };
    }
    prevPercentageRef.current = percentage;
  }, [percentage]);

  // Detect correct/wrong changes for flash feedback
  useEffect(() => {
    if (correct > prevCorrectRef.current) {
      setFlashType('correct');
      const timer = setTimeout(() => setFlashType(null), 200);
      prevCorrectRef.current = correct;
      return () => clearTimeout(timer);
    }
    prevCorrectRef.current = correct;
  }, [correct]);

  useEffect(() => {
    if (wrong > prevWrongRef.current) {
      setFlashType('wrong');
      const timer = setTimeout(() => setFlashType(null), 200);
      prevWrongRef.current = wrong;
      return () => clearTimeout(timer);
    }
    prevWrongRef.current = wrong;
  }, [wrong]);

  return (
    /* Glass container capsule */
    <div 
      className={`relative ${compact ? 'h-2' : height} rounded-full overflow-hidden`}
      style={{
        background: darkMode 
          ? 'rgba(255, 255, 255, 0.06)' 
          : 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        border: darkMode 
          ? '1px solid rgba(255, 255, 255, 0.10)' 
          : '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: darkMode
          ? 'inset 0 1px 0 rgba(255, 255, 255, 0.22), inset 0 -1px 2px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.12)'
          : 'inset 0 1px 0 rgba(255, 255, 255, 0.25), inset 0 -1px 2px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.06)'
      }}
    >
      {/* Main progress fill - Layer 1: Gradient */}
      <motion.div
        className="absolute inset-y-0 left-0 rounded-full"
        style={{
          background: 'linear-gradient(90deg, #ff8a5a 0%, #ff2bb3 50%, #9a5bff 100%)',
          boxShadow: darkMode
            ? '0 0 18px rgba(255, 43, 179, 0.5), 0 0 30px rgba(154, 91, 255, 0.3)'
            : '0 0 15px rgba(255, 43, 179, 0.4), 0 0 25px rgba(154, 91, 255, 0.25)'
        }}
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ 
          width: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }
        }}
      />
      
      {/* Layer 2: Internal glow overlay for alive feel */}
      <motion.div
        className="absolute inset-y-0 left-0 rounded-full pointer-events-none"
        style={{
          width: `${percentage}%`,
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, transparent 50%, rgba(255, 255, 255, 0.1) 100%)',
          filter: 'blur(0.5px)'
        }}
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ width: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] } }}
      />
      
      {/* Shimmer effect - only on progress increase */}
      <AnimatePresence>
        {showShimmer && (
          <motion.div
            className="absolute inset-y-0 w-16 pointer-events-none rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%)',
              filter: 'blur(1px)'
            }}
            initial={{ x: '-64px', opacity: 1 }}
            animate={{ x: '500%', opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>
      

      
      {/* Full bar pulse effect on progress increase */}
      <AnimatePresence>
        {showPulse && (
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: darkMode
                ? 'linear-gradient(90deg, rgba(255, 138, 90, 0.3) 0%, rgba(255, 43, 179, 0.4) 50%, rgba(154, 91, 255, 0.3) 100%)'
                : 'linear-gradient(90deg, rgba(255, 138, 90, 0.25) 0%, rgba(255, 43, 179, 0.35) 50%, rgba(154, 91, 255, 0.25) 100%)',
            }}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: [0, 0.7, 0], scale: [1, 1.03, 1] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      {/* Correct answer - soft green glow */}
      <AnimatePresence>
        {flashType === 'correct' && (
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, rgba(52, 211, 153, 0.25) 0%, rgba(16, 185, 129, 0.35) 50%, rgba(52, 211, 153, 0.25) 100%)',
              boxShadow: '0 0 12px rgba(52, 211, 153, 0.3)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          />
        )}
      </AnimatePresence>

      {/* Wrong answer - soft warm glow */}
      <AnimatePresence>
        {flashType === 'wrong' && (
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, rgba(251, 191, 36, 0.2) 0%, rgba(251, 146, 60, 0.3) 50%, rgba(251, 191, 36, 0.2) 100%)',
              boxShadow: '0 0 10px rgba(251, 191, 36, 0.25)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
          />
        )}
      </AnimatePresence>
      
      {/* Subtle living glow breathing */}
      <motion.div
        className="absolute inset-y-0 left-0 rounded-full pointer-events-none"
        style={{
          width: `${percentage}%`,
          background: 'transparent',
          boxShadow: darkMode
            ? '0 0 25px rgba(255, 43, 179, 0.35), 0 0 50px rgba(154, 91, 255, 0.2)'
            : '0 0 20px rgba(255, 43, 179, 0.3), 0 0 40px rgba(154, 91, 255, 0.18)'
        }}
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      

    </div>
  );
}