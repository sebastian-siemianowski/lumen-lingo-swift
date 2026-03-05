import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Loader2 } from "lucide-react";
import { useDarkMode } from "../theme/DarkModeContext";
import useAudioFeedback from "../shared/useAudioFeedback";
import ButtonMicrostars from "./ButtonMicrostars";

export default function ActionButton({ 
  onClick, 
  disabled, 
  saving, 
  hasValidSelection,
  selectedSource,
  selectedTarget,
  t,
  isMobile = false
}) {
  const { darkMode } = useDarkMode();
  const { playButtonTap } = useAudioFeedback();
  const [showRipple, setShowRipple] = React.useState(false);
  const [mousePosition, setMousePosition] = React.useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleClick = () => {
    if (!saving && hasValidSelection) {
      playButtonTap();
      setShowRipple(true);
      setTimeout(() => setShowRipple(false), 400);
      onClick();
    }
  };

  const handleMouseMove = (e) => {
    if (!darkMode) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  return (
    <motion.button
      onClick={handleClick}
      disabled={disabled}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={!saving && hasValidSelection ? { 
        scale: 1.02, 
        y: -2,
        filter: darkMode ? 'brightness(1.2)' : 'brightness(1.1)'
      } : {}}
      whileTap={!saving && hasValidSelection ? { 
        scale: 0.98,
        y: 1,
        filter: darkMode ? 'brightness(0.95)' : 'brightness(0.92)'
      } : {}}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 25,
        mass: 0.6
      }}
      className="button-shimmer relative w-full group overflow-hidden rounded-[18px] sm:rounded-[24px] disabled:opacity-50 disabled:cursor-not-allowed"
      style={{
        background: darkMode
          ? 'linear-gradient(135deg, rgba(30, 27, 75, 0.8) 0%, rgba(45, 35, 85, 0.85) 25%, rgba(55, 40, 95, 0.85) 50%, rgba(45, 35, 85, 0.85) 75%, rgba(30, 27, 75, 0.8) 100%)'
          : 'linear-gradient(135deg, rgb(168, 85, 247), rgb(217, 70, 239), rgb(236, 72, 153))',
        border: darkMode ? '1.5px solid rgba(139, 92, 246, 0.5)' : '1px solid rgba(255, 255, 255, 0.6)',
        backdropFilter: darkMode ? 'blur(40px)' : 'blur(20px)',
        WebkitBackdropFilter: darkMode ? 'blur(40px)' : 'blur(20px)',
        boxShadow: darkMode 
          ? '0 0 60px 12px rgba(99, 102, 241, 0.8), 0 0 100px 20px rgba(139, 92, 246, 0.6), 0 0 140px 28px rgba(168, 85, 247, 0.4), 0 20px 60px rgba(0, 0, 0, 0.6), inset 0 0 60px 15px rgba(139, 92, 246, 0.2), inset 0 4px 16px rgba(192, 132, 252, 0.3), inset 0 -4px 16px rgba(99, 102, 241, 0.2)'
          : '0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 0 24px rgba(255, 255, 255, 0.12)',
        transform: 'translateZ(0)',
        willChange: 'transform'
      }}
    >
      {/* Deep Space Foundation - Cosmic Void */}
      {darkMode && (
        <>
          {/* Infinite depth layers */}
          <motion.div 
            className="absolute inset-0 rounded-[18px] sm:rounded-[24px] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 150% 120% at 50% 50%, rgba(20, 15, 45, 0.95) 0%, rgba(15, 10, 35, 0.98) 60%, rgba(10, 5, 25, 1) 100%)',
            }}
          />
          
          {/* Cosmic Energy Core - Pulsing Heart */}
          <motion.div 
            className="absolute inset-0 rounded-[18px] sm:rounded-[24px] pointer-events-none"
            animate={{
              opacity: [0.6, 0.9, 0.6],
              scale: [0.95, 1.05, 0.95]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: [0.45, 0, 0.55, 1]
            }}
            style={{
              background: `radial-gradient(ellipse 100% 80% at 50% 50%, 
                rgba(99, 102, 241, 0.7) 0%, 
                rgba(139, 92, 246, 0.5) 20%, 
                rgba(168, 85, 247, 0.4) 40%, 
                rgba(192, 132, 252, 0.25) 60%, 
                transparent 80%)`,
              filter: 'blur(25px)',
              mixBlendMode: 'screen'
            }}
          />

          {/* Aurora Borealis Waves - Flowing Energy */}
          <motion.div 
            className="absolute inset-0 rounded-[18px] sm:rounded-[24px] pointer-events-none overflow-hidden"
            style={{
              maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
            }}
          >
            <motion.div
              className="absolute inset-0"
              animate={{
                x: ['-100%', '100%'],
                opacity: [0, 0.6, 0.8, 0.6, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0.6) 25%, rgba(168, 85, 247, 0.8) 50%, rgba(192, 132, 252, 0.6) 75%, transparent 100%)',
                filter: 'blur(15px)',
                width: '200%',
                height: '100%'
              }}
            />
          </motion.div>

          {/* Secondary Aurora Layer */}
          <motion.div 
            className="absolute inset-0 rounded-[18px] sm:rounded-[24px] pointer-events-none overflow-hidden"
            style={{
              maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 85%)'
            }}
          >
            <motion.div
              className="absolute inset-0"
              animate={{
                x: ['100%', '-100%'],
                opacity: [0, 0.5, 0.7, 0.5, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(217, 70, 239, 0.5) 25%, rgba(236, 72, 153, 0.7) 50%, rgba(244, 114, 182, 0.5) 75%, transparent 100%)',
                filter: 'blur(20px)',
                width: '200%',
                height: '100%'
              }}
            />
          </motion.div>

          {/* Galaxy Dust Clouds - Organic Movement */}
          <motion.div 
            className="absolute inset-0 rounded-[18px] sm:rounded-[24px] pointer-events-none"
            animate={{
              opacity: [0.3, 0.5, 0.4, 0.6, 0.3],
              scale: [1, 1.08, 1.05, 1.1, 1],
              rotate: [0, 8, -5, 10, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              background: 'radial-gradient(ellipse 140% 110% at 25% 35%, rgba(99, 102, 241, 0.4) 0%, transparent 50%), radial-gradient(ellipse 130% 100% at 75% 65%, rgba(168, 85, 247, 0.35) 0%, transparent 55%)',
              filter: 'blur(30px)',
              mixBlendMode: 'screen'
            }}
          />

          {/* Nebula Bloom - Breathing Life */}
          <motion.div 
            className="absolute inset-0 rounded-[18px] sm:rounded-[24px] pointer-events-none"
            animate={{
              opacity: [0.25, 0.45, 0.35, 0.5, 0.25],
              scale: [1.02, 1.12, 1.06, 1.15, 1.02]
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: [0.4, 0, 0.6, 1],
              delay: 1.5
            }}
            style={{
              background: 'radial-gradient(ellipse 110% 130% at 60% 45%, rgba(192, 132, 252, 0.5) 0%, rgba(217, 70, 239, 0.3) 35%, transparent 65%)',
              filter: 'blur(35px)',
              mixBlendMode: 'screen'
            }}
          />

          {/* Reactive Light Trail - Mouse Following */}
          {isHovered && (
            <motion.div
              className="absolute inset-0 rounded-[18px] sm:rounded-[24px] pointer-events-none"
              animate={{
                background: `radial-gradient(circle 200px at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
                  rgba(192, 132, 252, 0.6) 0%, 
                  rgba(168, 85, 247, 0.4) 25%, 
                  rgba(139, 92, 246, 0.2) 50%, 
                  transparent 70%)`
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 20
              }}
              style={{
                filter: 'blur(20px)',
                mixBlendMode: 'screen'
              }}
            />
          )}
        </>
      )}

      {/* Celestial Symphony - Stars & Constellations */}
      {darkMode && (
        <div className="absolute inset-0 rounded-[18px] sm:rounded-[24px] pointer-events-none overflow-hidden">
          {/* Hero Stars - Tranquil Breathing */}
          <motion.div 
            className="absolute w-1.5 h-1.5 bg-white rounded-full top-[18%] left-[15%]"
            animate={{ 
              opacity: [0.5, 0.75, 0.92, 0.75, 0.5],
              scale: [0.85, 0.95, 1.08, 0.95, 0.85],
              boxShadow: [
                '0 0 6px 1.5px rgba(255,255,255,0.5), 0 0 12px 3px rgba(192,132,252,0.3)',
                '0 0 7px 2px rgba(255,255,255,0.7), 0 0 14px 3.5px rgba(192,132,252,0.45)',
                '0 0 8px 2px rgba(255,255,255,0.9), 0 0 16px 4px rgba(192,132,252,0.6)',
                '0 0 7px 2px rgba(255,255,255,0.7), 0 0 14px 3.5px rgba(192,132,252,0.45)',
                '0 0 6px 1.5px rgba(255,255,255,0.5), 0 0 12px 3px rgba(192,132,252,0.3)'
              ]
            }}
            transition={{ duration: 6.5, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
          />
          <motion.div 
            className="absolute w-1.5 h-1.5 rounded-full top-[38%] left-[82%]"
            style={{ backgroundColor: '#A78BFA' }}
            animate={{ 
              opacity: [0.48, 0.7, 0.88, 0.7, 0.48],
              scale: [0.8, 0.92, 1.1, 0.92, 0.8],
              boxShadow: [
                '0 0 6px 1.5px rgba(167,139,250,0.5), 0 0 12px 3px rgba(139,92,246,0.3)',
                '0 0 7px 2px rgba(167,139,250,0.7), 0 0 14px 3.5px rgba(139,92,246,0.45)',
                '0 0 8px 2px rgba(167,139,250,0.9), 0 0 16px 4px rgba(139,92,246,0.6)',
                '0 0 7px 2px rgba(167,139,250,0.7), 0 0 14px 3.5px rgba(139,92,246,0.45)',
                '0 0 6px 1.5px rgba(167,139,250,0.5), 0 0 12px 3px rgba(139,92,246,0.3)'
              ]
            }}
            transition={{ duration: 7.2, repeat: Infinity, ease: [0.4, 0, 0.6, 1], delay: 1.2 }}
          />
          <motion.div 
            className="absolute w-1.5 h-1.5 rounded-full top-[68%] left-[28%]"
            style={{ backgroundColor: '#7DD3FC' }}
            animate={{ 
              opacity: [0.45, 0.68, 0.85, 0.68, 0.45],
              scale: [0.82, 0.94, 1.06, 0.94, 0.82],
              boxShadow: [
                '0 0 6px 1.5px rgba(125,211,252,0.5), 0 0 12px 3px rgba(99,102,241,0.25)',
                '0 0 7px 2px rgba(125,211,252,0.7), 0 0 14px 3.5px rgba(99,102,241,0.35)',
                '0 0 8px 2px rgba(125,211,252,0.9), 0 0 16px 4px rgba(99,102,241,0.5)',
                '0 0 7px 2px rgba(125,211,252,0.7), 0 0 14px 3.5px rgba(99,102,241,0.35)',
                '0 0 6px 1.5px rgba(125,211,252,0.5), 0 0 12px 3px rgba(99,102,241,0.25)'
              ]
            }}
            transition={{ duration: 8.0, repeat: Infinity, ease: [0.42, 0, 0.58, 1], delay: 2.5 }}
          />
          <motion.div 
            className="absolute w-1.5 h-1.5 rounded-full top-[85%] left-[92%]"
            style={{ backgroundColor: '#F9A8D4' }}
            animate={{ 
              opacity: [0.52, 0.72, 0.9, 0.72, 0.52],
              scale: [0.88, 0.96, 1.08, 0.96, 0.88],
              boxShadow: [
                '0 0 6px 1.5px rgba(249,168,212,0.5), 0 0 12px 3px rgba(217,70,239,0.25)',
                '0 0 7px 2px rgba(249,168,212,0.7), 0 0 14px 3.5px rgba(217,70,239,0.35)',
                '0 0 8px 2px rgba(249,168,212,0.9), 0 0 16px 4px rgba(217,70,239,0.5)',
                '0 0 7px 2px rgba(249,168,212,0.7), 0 0 14px 3.5px rgba(217,70,239,0.35)',
                '0 0 6px 1.5px rgba(249,168,212,0.5), 0 0 12px 3px rgba(217,70,239,0.25)'
              ]
            }}
            transition={{ duration: 6.8, repeat: Infinity, ease: [0.45, 0, 0.55, 1], delay: 0.8 }}
          />

          {/* Shooting Stars - Gentle Trails */}
          <motion.div
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            initial={{ top: '10%', left: '5%', opacity: 0, scale: 0 }}
            animate={{
              top: ['10%', '90%'],
              left: ['5%', '95%'],
              opacity: [0, 0.3, 0.7, 0.9, 0.7, 0.3, 0],
              scale: [0, 0.8, 1.2, 1.5, 1.2, 0.8, 0],
              boxShadow: [
                '0 0 0px rgba(255,255,255,0)',
                '0 0 4px 1px rgba(255,255,255,0.3), 0 0 8px 2px rgba(192,132,252,0.2)',
                '0 0 6px 1.5px rgba(255,255,255,0.6), 0 0 12px 3px rgba(192,132,252,0.4)',
                '0 0 8px 2px rgba(255,255,255,0.8), 0 0 16px 4px rgba(192,132,252,0.5)',
                '0 0 6px 1.5px rgba(255,255,255,0.6), 0 0 12px 3px rgba(192,132,252,0.4)',
                '0 0 4px 1px rgba(255,255,255,0.3), 0 0 8px 2px rgba(192,132,252,0.2)',
                '0 0 0px rgba(255,255,255,0)'
              ]
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              repeatDelay: 12,
              ease: [0.4, 0, 0.6, 1]
            }}
            style={{ filter: 'blur(0.5px)' }}
          />
          <motion.div
            className="absolute w-0.5 h-0.5 rounded-full"
            style={{ backgroundColor: '#A78BFA' }}
            initial={{ top: '15%', left: '85%', opacity: 0, scale: 0 }}
            animate={{
              top: ['15%', '85%'],
              left: ['85%', '15%'],
              opacity: [0, 0.25, 0.6, 0.85, 0.6, 0.25, 0],
              scale: [0, 0.75, 1.15, 1.5, 1.15, 0.75, 0],
              boxShadow: [
                '0 0 0px rgba(167,139,250,0)',
                '0 0 4px 1px rgba(167,139,250,0.3), 0 0 8px 2px rgba(139,92,246,0.2)',
                '0 0 6px 1.5px rgba(167,139,250,0.6), 0 0 12px 3px rgba(139,92,246,0.35)',
                '0 0 8px 2px rgba(167,139,250,0.8), 0 0 16px 4px rgba(139,92,246,0.5)',
                '0 0 6px 1.5px rgba(167,139,250,0.6), 0 0 12px 3px rgba(139,92,246,0.35)',
                '0 0 4px 1px rgba(167,139,250,0.3), 0 0 8px 2px rgba(139,92,246,0.2)',
                '0 0 0px rgba(167,139,250,0)'
              ]
            }}
            transition={{
              duration: 5.0,
              repeat: Infinity,
              repeatDelay: 15,
              ease: [0.45, 0, 0.55, 1],
              delay: 6
            }}
            style={{ filter: 'blur(0.5px)' }}
          />

          {/* Medium Constellation Stars - Serene Breathing */}
          <motion.div className="absolute w-1 h-1 bg-white rounded-full top-[12%] left-[42%]"
            animate={{ 
              opacity: [0.4, 0.6, 0.8, 0.6, 0.4], 
              scale: [0.85, 0.95, 1.05, 0.95, 0.85],
              boxShadow: [
                '0 0 3px 0.5px rgba(255,255,255,0.4)',
                '0 0 4px 1px rgba(255,255,255,0.6)',
                '0 0 5px 1px rgba(255,255,255,0.7)',
                '0 0 4px 1px rgba(255,255,255,0.6)',
                '0 0 3px 0.5px rgba(255,255,255,0.4)'
              ]
            }}
            transition={{ duration: 5.8, repeat: Infinity, ease: [0.45, 0, 0.55, 1], delay: 0.5 }}
          />
          <motion.div className="absolute w-1 h-1 rounded-full top-[28%] left-[62%]"
            style={{ backgroundColor: '#DDD6FE' }}
            animate={{ 
              opacity: [0.38, 0.58, 0.75, 0.58, 0.38], 
              scale: [0.8, 0.92, 1.08, 0.92, 0.8],
              boxShadow: [
                '0 0 3px 0.5px rgba(221,214,254,0.35)',
                '0 0 4px 1px rgba(221,214,254,0.55)',
                '0 0 5px 1px rgba(221,214,254,0.6)',
                '0 0 4px 1px rgba(221,214,254,0.55)',
                '0 0 3px 0.5px rgba(221,214,254,0.35)'
              ]
            }}
            transition={{ duration: 6.5, repeat: Infinity, ease: [0.4, 0, 0.6, 1], delay: 1.8 }}
          />
          <motion.div className="absolute w-1 h-1 rounded-full top-[52%] left-[48%]"
            style={{ backgroundColor: '#BAE6FD' }}
            animate={{ 
              opacity: [0.42, 0.62, 0.82, 0.62, 0.42], 
              scale: [0.82, 0.94, 1.06, 0.94, 0.82],
              boxShadow: [
                '0 0 3px 0.5px rgba(186,230,253,0.35)',
                '0 0 4px 1px rgba(186,230,253,0.55)',
                '0 0 5px 1px rgba(186,230,253,0.6)',
                '0 0 4px 1px rgba(186,230,253,0.55)',
                '0 0 3px 0.5px rgba(186,230,253,0.35)'
              ]
            }}
            transition={{ duration: 6.2, repeat: Infinity, ease: [0.42, 0, 0.58, 1], delay: 1.2 }}
          />
          <motion.div className="absolute w-1 h-1 rounded-full top-[75%] left-[68%]"
            style={{ backgroundColor: '#FBCFE8' }}
            animate={{ 
              opacity: [0.4, 0.6, 0.78, 0.6, 0.4], 
              scale: [0.88, 0.96, 1.04, 0.96, 0.88],
              boxShadow: [
                '0 0 3px 0.5px rgba(251,207,232,0.35)',
                '0 0 4px 1px rgba(251,207,232,0.55)',
                '0 0 5px 1px rgba(251,207,232,0.6)',
                '0 0 4px 1px rgba(251,207,232,0.55)',
                '0 0 3px 0.5px rgba(251,207,232,0.35)'
              ]
            }}
            transition={{ duration: 7.0, repeat: Infinity, ease: [0.45, 0, 0.55, 1], delay: 2.2 }}
          />

          {/* Micro Stars - Organic Breathing (Spiral Halo inspired) */}
          <motion.div className="absolute w-0.5 h-0.5 bg-white rounded-full top-[8%] left-[32%]"
            animate={{ 
              opacity: [0.25, 0.38, 0.52, 0.68, 0.75, 0.68, 0.52, 0.38, 0.25],
              scale: [0.7, 0.8, 0.9, 0.98, 1.05, 0.98, 0.9, 0.8, 0.7],
              boxShadow: [
                '0 0 2px 0.5px rgba(255,255,255,0.25)',
                '0 0 2.5px 0.8px rgba(255,255,255,0.35)',
                '0 0 3px 1px rgba(255,255,255,0.42)',
                '0 0 3.5px 1.2px rgba(255,255,255,0.48)',
                '0 0 4px 1.5px rgba(255,255,255,0.52)',
                '0 0 3.5px 1.2px rgba(255,255,255,0.48)',
                '0 0 3px 1px rgba(255,255,255,0.42)',
                '0 0 2.5px 0.8px rgba(255,255,255,0.35)',
                '0 0 2px 0.5px rgba(255,255,255,0.25)'
              ]
            }}
            transition={{ duration: 8.5, repeat: Infinity, ease: [0.45, 0.05, 0.55, 0.95], delay: 0.4 }}
          />
          <motion.div className="absolute w-0.5 h-0.5 rounded-full top-[20%] left-[72%]"
            style={{ backgroundColor: '#E9D5FF' }}
            animate={{ 
              opacity: [0.22, 0.35, 0.48, 0.62, 0.7, 0.62, 0.48, 0.35, 0.22],
              scale: [0.75, 0.85, 0.95, 1.02, 1.08, 1.02, 0.95, 0.85, 0.75],
              boxShadow: [
                '0 0 2px 0.5px rgba(233,213,255,0.22)',
                '0 0 2.5px 0.8px rgba(233,213,255,0.32)',
                '0 0 3px 1px rgba(233,213,255,0.38)',
                '0 0 4px 1.5px rgba(233,213,255,0.44)',
                '0 0 5px 2px rgba(233,213,255,0.48)',
                '0 0 4px 1.5px rgba(233,213,255,0.44)',
                '0 0 3px 1px rgba(233,213,255,0.38)',
                '0 0 2.5px 0.8px rgba(233,213,255,0.32)',
                '0 0 2px 0.5px rgba(233,213,255,0.22)'
              ]
            }}
            transition={{ duration: 9.2, repeat: Infinity, ease: [0.4, 0.05, 0.6, 0.95], delay: 1.3 }}
          />
          <motion.div className="absolute w-0.5 h-0.5 rounded-full top-[35%] left-[18%]"
            style={{ backgroundColor: '#A5F3FC' }}
            animate={{ 
              opacity: [0.28, 0.42, 0.56, 0.7, 0.78, 0.7, 0.56, 0.42, 0.28],
              scale: [0.72, 0.82, 0.92, 1.0, 1.06, 1.0, 0.92, 0.82, 0.72],
              boxShadow: [
                '0 0 2px 0.5px rgba(165,243,252,0.28)',
                '0 0 2.5px 0.8px rgba(165,243,252,0.38)',
                '0 0 3px 1px rgba(165,243,252,0.45)',
                '0 0 4px 1.5px rgba(165,243,252,0.5)',
                '0 0 5px 2px rgba(165,243,252,0.54)',
                '0 0 4px 1.5px rgba(165,243,252,0.5)',
                '0 0 3px 1px rgba(165,243,252,0.45)',
                '0 0 2.5px 0.8px rgba(165,243,252,0.38)',
                '0 0 2px 0.5px rgba(165,243,252,0.28)'
              ]
            }}
            transition={{ duration: 10.0, repeat: Infinity, ease: [0.42, 0.05, 0.58, 0.95], delay: 0.9 }}
          />
          <motion.div className="absolute w-0.5 h-0.5 bg-white rounded-full top-[48%] left-[88%]"
            animate={{ 
              opacity: [0.3, 0.44, 0.58, 0.7, 0.76, 0.7, 0.58, 0.44, 0.3],
              scale: [0.68, 0.78, 0.9, 1.0, 1.08, 1.0, 0.9, 0.78, 0.68],
              boxShadow: [
                '0 0 2px 0.5px rgba(255,255,255,0.3)',
                '0 0 2.5px 0.8px rgba(255,255,255,0.4)',
                '0 0 3px 1px rgba(255,255,255,0.46)',
                '0 0 3.5px 1.2px rgba(255,255,255,0.5)',
                '0 0 4px 1.5px rgba(255,255,255,0.54)',
                '0 0 3.5px 1.2px rgba(255,255,255,0.5)',
                '0 0 3px 1px rgba(255,255,255,0.46)',
                '0 0 2.5px 0.8px rgba(255,255,255,0.4)',
                '0 0 2px 0.5px rgba(255,255,255,0.3)'
              ]
            }}
            transition={{ duration: 8.8, repeat: Infinity, ease: [0.4, 0.05, 0.6, 0.95], delay: 1.7 }}
          />
          <motion.div className="absolute w-0.5 h-0.5 rounded-full top-[62%] left-[55%]"
            style={{ backgroundColor: '#F5D0FE' }}
            animate={{ 
              opacity: [0.26, 0.4, 0.54, 0.68, 0.75, 0.68, 0.54, 0.4, 0.26],
              scale: [0.74, 0.84, 0.94, 1.02, 1.08, 1.02, 0.94, 0.84, 0.74],
              boxShadow: [
                '0 0 2px 0.5px rgba(245,208,254,0.25)',
                '0 0 2.5px 0.8px rgba(245,208,254,0.35)',
                '0 0 3px 1px rgba(245,208,254,0.42)',
                '0 0 4px 1.5px rgba(245,208,254,0.47)',
                '0 0 5px 2px rgba(245,208,254,0.5)',
                '0 0 4px 1.5px rgba(245,208,254,0.47)',
                '0 0 3px 1px rgba(245,208,254,0.42)',
                '0 0 2.5px 0.8px rgba(245,208,254,0.35)',
                '0 0 2px 0.5px rgba(245,208,254,0.25)'
              ]
            }}
            transition={{ duration: 9.5, repeat: Infinity, ease: [0.45, 0.05, 0.55, 0.95], delay: 0.5 }}
          />
          <motion.div className="absolute w-0.5 h-0.5 bg-white rounded-full top-[78%] left-[12%]"
            animate={{ 
              opacity: [0.24, 0.36, 0.5, 0.64, 0.72, 0.64, 0.5, 0.36, 0.24],
              scale: [0.7, 0.8, 0.92, 1.02, 1.1, 1.02, 0.92, 0.8, 0.7],
              boxShadow: [
                '0 0 2px 0.5px rgba(255,255,255,0.24)',
                '0 0 2.5px 0.8px rgba(255,255,255,0.34)',
                '0 0 3px 1px rgba(255,255,255,0.42)',
                '0 0 3.5px 1.2px rgba(255,255,255,0.48)',
                '0 0 4px 1.5px rgba(255,255,255,0.52)',
                '0 0 3.5px 1.2px rgba(255,255,255,0.48)',
                '0 0 3px 1px rgba(255,255,255,0.42)',
                '0 0 2.5px 0.8px rgba(255,255,255,0.34)',
                '0 0 2px 0.5px rgba(255,255,255,0.24)'
              ]
            }}
            transition={{ duration: 10.5, repeat: Infinity, ease: [0.4, 0.05, 0.6, 0.95], delay: 1.2 }}
          />
          <motion.div className="absolute w-0.5 h-0.5 rounded-full top-[88%] left-[78%]"
            style={{ backgroundColor: '#C7D2FE' }}
            animate={{ 
              opacity: [0.28, 0.42, 0.56, 0.7, 0.77, 0.7, 0.56, 0.42, 0.28],
              scale: [0.68, 0.78, 0.9, 1.0, 1.12, 1.0, 0.9, 0.78, 0.68],
              boxShadow: [
                '0 0 2px 0.5px rgba(199,210,254,0.26)',
                '0 0 2.5px 0.8px rgba(199,210,254,0.36)',
                '0 0 3px 1px rgba(199,210,254,0.43)',
                '0 0 4px 1.5px rgba(199,210,254,0.48)',
                '0 0 5px 2px rgba(199,210,254,0.52)',
                '0 0 4px 1.5px rgba(199,210,254,0.48)',
                '0 0 3px 1px rgba(199,210,254,0.43)',
                '0 0 2.5px 0.8px rgba(199,210,254,0.36)',
                '0 0 2px 0.5px rgba(199,210,254,0.26)'
              ]
            }}
            transition={{ duration: 8.0, repeat: Infinity, ease: [0.42, 0.05, 0.58, 0.95], delay: 0.8 }}
          />
          
          {/* Tiny Sparkles - Deepest Depth Field */}
          <motion.div className="absolute w-px h-px bg-white rounded-full top-[5%] left-[52%]"
            animate={{ 
              opacity: [0.18, 0.28, 0.38, 0.48, 0.55, 0.48, 0.38, 0.28, 0.18],
              scale: [0.65, 0.75, 0.85, 0.95, 1.0, 0.95, 0.85, 0.75, 0.65],
              boxShadow: [
                '0 0 1.5px 0.3px rgba(255,255,255,0.18)',
                '0 0 2px 0.4px rgba(255,255,255,0.26)',
                '0 0 2.5px 0.6px rgba(255,255,255,0.32)',
                '0 0 3px 0.8px rgba(255,255,255,0.38)',
                '0 0 3px 1px rgba(255,255,255,0.42)',
                '0 0 3px 0.8px rgba(255,255,255,0.38)',
                '0 0 2.5px 0.6px rgba(255,255,255,0.32)',
                '0 0 2px 0.4px rgba(255,255,255,0.26)',
                '0 0 1.5px 0.3px rgba(255,255,255,0.18)'
              ]
            }}
            transition={{ duration: 9.2, repeat: Infinity, ease: [0.45, 0.05, 0.55, 0.95], delay: 0.6 }}
          />
          <motion.div className="absolute w-px h-px rounded-full top-[25%] left-[8%]"
            style={{ backgroundColor: '#FED7E2' }}
            animate={{ 
              opacity: [0.2, 0.3, 0.42, 0.54, 0.6, 0.54, 0.42, 0.3, 0.2],
              scale: [0.68, 0.78, 0.88, 0.98, 1.04, 0.98, 0.88, 0.78, 0.68],
              boxShadow: [
                '0 0 1.5px 0.3px rgba(254,215,226,0.2)',
                '0 0 2px 0.4px rgba(254,215,226,0.28)',
                '0 0 2.5px 0.6px rgba(254,215,226,0.34)',
                '0 0 3px 0.8px rgba(254,215,226,0.4)',
                '0 0 3px 1px rgba(254,215,226,0.44)',
                '0 0 3px 0.8px rgba(254,215,226,0.4)',
                '0 0 2.5px 0.6px rgba(254,215,226,0.34)',
                '0 0 2px 0.4px rgba(254,215,226,0.28)',
                '0 0 1.5px 0.3px rgba(254,215,226,0.2)'
              ]
            }}
            transition={{ duration: 10.5, repeat: Infinity, ease: [0.4, 0.05, 0.6, 0.95], delay: 1.5 }}
          />
          <motion.div className="absolute w-px h-px rounded-full top-[42%] left-[95%]"
            style={{ backgroundColor: '#BFDBFE' }}
            animate={{ 
              opacity: [0.16, 0.26, 0.38, 0.5, 0.58, 0.5, 0.38, 0.26, 0.16],
              scale: [0.7, 0.8, 0.9, 1.0, 1.08, 1.0, 0.9, 0.8, 0.7],
              boxShadow: [
                '0 0 1.5px 0.3px rgba(191,219,254,0.16)',
                '0 0 2px 0.4px rgba(191,219,254,0.24)',
                '0 0 2.5px 0.6px rgba(191,219,254,0.32)',
                '0 0 3px 0.8px rgba(191,219,254,0.38)',
                '0 0 3px 1px rgba(191,219,254,0.42)',
                '0 0 3px 0.8px rgba(191,219,254,0.38)',
                '0 0 2.5px 0.6px rgba(191,219,254,0.32)',
                '0 0 2px 0.4px rgba(191,219,254,0.24)',
                '0 0 1.5px 0.3px rgba(191,219,254,0.16)'
              ]
            }}
            transition={{ duration: 11.0, repeat: Infinity, ease: [0.42, 0.05, 0.58, 0.95], delay: 0.3 }}
          />
          <motion.div className="absolute w-px h-px bg-white rounded-full top-[58%] left-[22%]"
            animate={{ 
              opacity: [0.2, 0.3, 0.4, 0.52, 0.58, 0.52, 0.4, 0.3, 0.2],
              scale: [0.65, 0.75, 0.88, 0.98, 1.05, 0.98, 0.88, 0.75, 0.65],
              boxShadow: [
                '0 0 1.5px 0.3px rgba(255,255,255,0.2)',
                '0 0 2px 0.4px rgba(255,255,255,0.28)',
                '0 0 2.5px 0.6px rgba(255,255,255,0.34)',
                '0 0 3px 0.8px rgba(255,255,255,0.4)',
                '0 0 3px 1px rgba(255,255,255,0.44)',
                '0 0 3px 0.8px rgba(255,255,255,0.4)',
                '0 0 2.5px 0.6px rgba(255,255,255,0.34)',
                '0 0 2px 0.4px rgba(255,255,255,0.28)',
                '0 0 1.5px 0.3px rgba(255,255,255,0.2)'
              ]
            }}
            transition={{ duration: 9.8, repeat: Infinity, ease: [0.4, 0.05, 0.6, 0.95], delay: 1.8 }}
          />
          <motion.div className="absolute w-px h-px rounded-full top-[72%] left-[92%]"
            style={{ backgroundColor: '#FDE68A' }}
            animate={{ 
              opacity: [0.18, 0.28, 0.4, 0.52, 0.56, 0.52, 0.4, 0.28, 0.18],
              scale: [0.72, 0.82, 0.92, 1.0, 1.06, 1.0, 0.92, 0.82, 0.72],
              boxShadow: [
                '0 0 1.5px 0.3px rgba(253,230,138,0.18)',
                '0 0 2px 0.4px rgba(253,230,138,0.26)',
                '0 0 2.5px 0.6px rgba(253,230,138,0.34)',
                '0 0 3px 0.8px rgba(253,230,138,0.4)',
                '0 0 3px 1px rgba(253,230,138,0.44)',
                '0 0 3px 0.8px rgba(253,230,138,0.4)',
                '0 0 2.5px 0.6px rgba(253,230,138,0.34)',
                '0 0 2px 0.4px rgba(253,230,138,0.26)',
                '0 0 1.5px 0.3px rgba(253,230,138,0.18)'
              ]
            }}
            transition={{ duration: 12.0, repeat: Infinity, ease: [0.45, 0.05, 0.55, 0.95], delay: 0.7 }}
          />
          <motion.div className="absolute w-px h-px rounded-full top-[92%] left-[38%]"
            style={{ backgroundColor: '#DDD6FE' }}
            animate={{ 
              opacity: [0.22, 0.32, 0.44, 0.56, 0.62, 0.56, 0.44, 0.32, 0.22],
              scale: [0.7, 0.8, 0.9, 0.98, 1.04, 0.98, 0.9, 0.8, 0.7],
              boxShadow: [
                '0 0 1.5px 0.3px rgba(221,214,254,0.22)',
                '0 0 2px 0.4px rgba(221,214,254,0.3)',
                '0 0 2.5px 0.6px rgba(221,214,254,0.36)',
                '0 0 3px 0.8px rgba(221,214,254,0.42)',
                '0 0 3px 1px rgba(221,214,254,0.46)',
                '0 0 3px 0.8px rgba(221,214,254,0.42)',
                '0 0 2.5px 0.6px rgba(221,214,254,0.36)',
                '0 0 2px 0.4px rgba(221,214,254,0.3)',
                '0 0 1.5px 0.3px rgba(221,214,254,0.22)'
              ]
            }}
            transition={{ duration: 9.0, repeat: Infinity, ease: [0.4, 0.05, 0.6, 0.95], delay: 1.4 }}
          />

          {/* Canvas-based diverse microstars */}
          <ButtonMicrostars />
        </div>
      )}
      
      {/* Holographic Top Edge - Prismatic Shine */}
      {darkMode ? (
        <>
          <motion.div 
            className="absolute top-0 left-0 right-0 h-[2px] rounded-t-[18px] sm:rounded-t-[24px] overflow-hidden"
            animate={{
              background: [
                'linear-gradient(to right, transparent 0%, rgba(99, 102, 241, 0.9) 20%, rgba(168, 85, 247, 0.9) 50%, rgba(192, 132, 252, 0.9) 80%, transparent 100%)',
                'linear-gradient(to right, transparent 0%, rgba(192, 132, 252, 0.9) 20%, rgba(217, 70, 239, 0.9) 50%, rgba(168, 85, 247, 0.9) 80%, transparent 100%)',
                'linear-gradient(to right, transparent 0%, rgba(99, 102, 241, 0.9) 20%, rgba(168, 85, 247, 0.9) 50%, rgba(192, 132, 252, 0.9) 80%, transparent 100%)'
              ]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              filter: 'blur(1px)',
              boxShadow: '0 -1px 16px 2px rgba(168, 85, 247, 0.5)'
            }}
          />
          <motion.div 
            className="absolute top-0 left-0 right-0 h-px"
            animate={{
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              background: 'linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.6) 50%, transparent 100%)',
              boxShadow: '0 0 6px 1px rgba(255, 255, 255, 0.3)'
            }}
          />
        </>
      ) : (
        <div className="absolute top-0 left-0 right-0 h-px rounded-t-[18px] sm:rounded-t-[24px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      )}
      
      {/* Glass reflection layer */}
      <div className="absolute inset-0 rounded-[18px] sm:rounded-[24px] bg-gradient-to-b from-white/15 via-transparent to-transparent pointer-events-none" />

      {/* Quantum Hover Effect - Energy Intensification */}
      {darkMode ? (
        <motion.div 
          className="absolute inset-0 rounded-[18px] sm:rounded-[24px] pointer-events-none opacity-0 group-hover:opacity-100"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Primary Energy Surge */}
          <motion.div
            className="absolute inset-0 rounded-[18px] sm:rounded-[24px]"
            animate={{
              background: [
                'radial-gradient(ellipse 130% 110% at 50% 50%, rgba(168, 85, 247, 0.4) 0%, rgba(139, 92, 246, 0.25) 40%, transparent 70%)',
                'radial-gradient(ellipse 140% 120% at 50% 50%, rgba(192, 132, 252, 0.5) 0%, rgba(168, 85, 247, 0.3) 40%, transparent 70%)',
                'radial-gradient(ellipse 130% 110% at 50% 50%, rgba(168, 85, 247, 0.4) 0%, rgba(139, 92, 246, 0.25) 40%, transparent 70%)'
              ]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              filter: 'blur(15px)',
              mixBlendMode: 'screen'
            }}
          />
          
          {/* Rotating Energy Rings */}
          <motion.div
            className="absolute inset-0 rounded-[18px] sm:rounded-[24px]"
            animate={{
              rotate: [0, 360],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{
              background: 'conic-gradient(from 0deg, transparent 0%, rgba(99, 102, 241, 0.3) 15%, transparent 30%, rgba(168, 85, 247, 0.3) 45%, transparent 60%, rgba(192, 132, 252, 0.3) 75%, transparent 90%)',
              filter: 'blur(20px)',
              mixBlendMode: 'screen'
            }}
          />

          {/* Pulsing Core Intensifier */}
          <motion.div
            className="absolute inset-0 rounded-[18px] sm:rounded-[24px]"
            animate={{
              scale: [0.9, 1.1, 0.9],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: [0.4, 0, 0.6, 1]
            }}
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(217, 70, 239, 0.5) 0%, rgba(168, 85, 247, 0.3) 30%, transparent 60%)',
              filter: 'blur(25px)',
              mixBlendMode: 'screen'
            }}
          />
        </motion.div>
      ) : (
        <div className="absolute inset-0 rounded-[18px] sm:rounded-[24px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 70%)'
          }}
        />
      )}

      {/* Active press pulse */}
      <motion.div
        className="absolute inset-0 rounded-[18px] sm:rounded-[24px] pointer-events-none"
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 0 }}
        whileTap={!saving && hasValidSelection ? { 
          opacity: [0, 0.4, 0],
          scale: [0.95, 1.05, 1.1]
        } : {}}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        style={{
          background: darkMode
            ? 'radial-gradient(circle, rgba(200, 146, 255, 0.6) 0%, rgba(181, 125, 255, 0.3) 40%, transparent 70%)'
            : 'radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, transparent 60%)'
        }}
      />

      {/* Success ripple pulse */}
      {showRipple && (
        <motion.div
          className="absolute inset-0 rounded-[18px] sm:rounded-[24px] pointer-events-none"
          initial={{ opacity: 0.7, scale: 1 }}
          animate={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            background: darkMode
              ? 'radial-gradient(circle, rgba(168, 85, 247, 0.8) 0%, rgba(217, 70, 239, 0.5) 40%, transparent 70%)'
              : 'radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, transparent 70%)'
          }}
        />
      )}

      <div className={`relative flex items-center justify-center gap-3 ${isMobile ? 'py-[18px] px-6' : 'py-4 px-8'} z-10`}>
        {saving ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin text-white" 
              style={{ filter: darkMode ? 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 3px rgba(200, 146, 255, 0.4))' : 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.8)) drop-shadow(0 2px 4px rgba(168, 85, 247, 0.3))' }} />
            <span className={`text-white font-semibold text-[17px] tracking-[0.02em] ${!darkMode ? 'light-mode-modal-text' : ''}`}
              style={{ 
                filter: darkMode 
                  ? 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 3px rgba(200, 146, 255, 0.4))' 
                  : 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.8)) drop-shadow(0 2px 4px rgba(168, 85, 247, 0.3))',
                textShadow: darkMode
                  ? '0 0 12px rgba(255, 255, 255, 0.5), 0 0 6px rgba(200, 146, 255, 0.3)'
                  : '0 0 10px rgba(255, 255, 255, 0.7), 0 2px 4px rgba(168, 85, 247, 0.25)'
              }}>
              {t('saving')}
            </span>
          </>
        ) : (
          <>
            <Sparkles className="w-5 h-5 text-white" 
              style={{ filter: darkMode ? 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 3px rgba(200, 146, 255, 0.4))' : 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.8)) drop-shadow(0 2px 4px rgba(168, 85, 247, 0.3))' }} />
            <motion.span
              key={`start-${isMobile ? 'mobile' : 'desktop'}-${selectedSource}-${selectedTarget}`}
              initial={{ filter: "blur(10px)", opacity: 0 }}
              animate={{ filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 0.4 }}
              className={`text-white font-semibold text-[17px] tracking-[0.02em] ${!darkMode ? 'light-mode-modal-text' : ''}`}
              style={{ 
                filter: darkMode 
                  ? 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 3px rgba(200, 146, 255, 0.4))' 
                  : 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.8)) drop-shadow(0 2px 4px rgba(168, 85, 247, 0.3))',
                textShadow: darkMode
                  ? '0 0 12px rgba(255, 255, 255, 0.5), 0 0 6px rgba(200, 146, 255, 0.3)'
                  : '0 0 10px rgba(255, 255, 255, 0.7), 0 2px 4px rgba(168, 85, 247, 0.25)'
              }}
            >
              {t('start_learning')}
            </motion.span>
            <motion.div
              whileTap={!saving && hasValidSelection ? { x: 2 } : {}}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
            >
              <ArrowRight className="w-5 h-5 text-white arrow-pulse" strokeWidth={2.5}
                style={{ filter: darkMode ? 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 3px rgba(200, 146, 255, 0.4))' : 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.8)) drop-shadow(0 2px 4px rgba(168, 85, 247, 0.3))' }} />
            </motion.div>
          </>
        )}
      </div>

      {/* Holographic Bottom Edge - Prismatic Glow */}
      {darkMode ? (
        <>
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-[18px] sm:rounded-b-[24px] overflow-hidden"
            animate={{
              background: [
                'linear-gradient(to right, transparent 0%, rgba(168, 85, 247, 0.85) 20%, rgba(217, 70, 239, 0.85) 50%, rgba(236, 72, 153, 0.85) 80%, transparent 100%)',
                'linear-gradient(to right, transparent 0%, rgba(236, 72, 153, 0.85) 20%, rgba(192, 132, 252, 0.85) 50%, rgba(168, 85, 247, 0.85) 80%, transparent 100%)',
                'linear-gradient(to right, transparent 0%, rgba(168, 85, 247, 0.85) 20%, rgba(217, 70, 239, 0.85) 50%, rgba(236, 72, 153, 0.85) 80%, transparent 100%)'
              ]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
              delay: 2.5
            }}
            style={{
              filter: 'blur(1px)',
              boxShadow: '0 1px 16px 2px rgba(217, 70, 239, 0.4)'
            }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-px"
            animate={{
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            style={{
              background: 'linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.6) 50%, transparent 100%)',
              boxShadow: '0 0 6px 1px rgba(255, 255, 255, 0.3)'
            }}
          />
        </>
      ) : (
        <div className="absolute bottom-0 left-0 right-0 h-px rounded-b-[18px] sm:rounded-b-[24px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      )}
      </motion.button>
  );
}