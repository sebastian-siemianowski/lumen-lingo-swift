import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight, Sparkles, Star, Heart, Sun, Crown, Rocket } from "lucide-react";
import { useDarkMode } from "../theme/DarkModeContext";
import { useLanguage } from "../language/LanguageContext";
import { useTranslations } from "../utils/translations";

export default function GameCard({ game }) {
  const { darkMode } = useDarkMode();
  const { sourceLanguage } = useLanguage();
  const t = useTranslations(sourceLanguage);
  const Icon = game.icon;
  const [isHovered, setIsHovered] = useState(false);
  const [isIconHovered, setIsIconHovered] = useState(false);
  const [hoverKey, setHoverKey] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [showEntryShimmer, setShowEntryShimmer] = useState(false);
  const [accentOffset, setAccentOffset] = useState(0);
  const lastScrollY = useRef(0);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Trigger entry shimmer on mobile when card enters viewport
  useEffect(() => {
    if (isMobile && isInView) {
      setShowEntryShimmer(true);
      const timer = setTimeout(() => setShowEntryShimmer(false), 600);
      return () => clearTimeout(timer);
    }
  }, [isMobile, isInView]);

  // Scroll-responsive accent line on mobile
  useEffect(() => {
    if (!isMobile) return;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;
      lastScrollY.current = currentScrollY;
      
      // Calculate offset based on scroll velocity (clamped to -5 to 5px)
      const velocityOffset = Math.max(-5, Math.min(5, scrollDelta * 0.3));
      
      setAccentOffset(prev => {
        const target = velocityOffset;
        const newOffset = prev + (target - prev) * 0.3;
        if (Math.abs(newOffset) < 0.1 && Math.abs(scrollDelta) < 1) return 0;
        return newOffset;
      });
    };

    // Decay back to center when not scrolling
    const decayInterval = setInterval(() => {
      setAccentOffset(prev => {
        if (Math.abs(prev) < 0.1) return 0;
        return prev * 0.92;
      });
    }, 16);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(decayInterval);
    };
  }, [isMobile]);
  
  // Define unique color schemes and animations for each game
  const getColorScheme = () => {
    if (game.id === 'flashcards') {
      return {
        gradient: 'from-blue-500 via-cyan-400 to-teal-400',
        iconGradientDark: 'from-cyan-500/60 to-blue-600/60',
        iconGradientLight: 'from-cyan-400 via-blue-400 to-sky-500',
        iconBorderDark: 'border-cyan-300/60',
        iconBorderLight: 'border-white/40',
        iconGlowDark: '0 0 20px rgba(34, 211, 238, 0.6), 0 4px 15px rgba(59, 130, 246, 0.4), inset 0 2px 8px rgba(125, 211, 252, 0.25)',
        iconGlowLight: '0 2px 8px rgba(59, 130, 246, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
        iconGlowDarkHover: '0 0 25px rgba(34, 211, 238, 0.8), 0 4px 20px rgba(59, 130, 246, 0.5), 0 8px 35px rgba(14, 165, 233, 0.4), inset 0 2px 12px rgba(125, 211, 252, 0.3), inset 0 -2px 12px rgba(14, 165, 233, 0.2)',
        iconGlowLightHover: '0 4px 20px rgba(59, 130, 246, 0.5), 0 8px 32px rgba(34, 211, 238, 0.3), inset 0 2px 8px rgba(255, 255, 255, 0.4), inset 0 -2px 8px rgba(59, 130, 246, 0.2)',
        iconBackgroundDark: 'linear-gradient(135deg, rgba(34, 211, 238, 0.6) 0%, rgba(59, 130, 246, 0.65) 50%, rgba(14, 165, 233, 0.6) 100%)',
        iconBackgroundLight: 'linear-gradient(135deg, rgb(125, 211, 252) 0%, rgb(96, 165, 250) 50%, rgb(56, 189, 248) 100%)',
        pulsingGlowColor1: 'rgba(34, 211, 238, 0.7)',
        pulsingGlowColor2: 'rgba(14, 165, 233, 0.5)',
        glowColor: darkMode ? 'rgba(34, 211, 238, 0.5)' : 'rgba(99, 102, 241, 0.35)',
        shadowColor: darkMode ? 'rgba(34, 211, 238, 0.3)' : 'rgba(99, 102, 241, 0.2)',
        borderColor: darkMode ? 'rgba(34, 211, 238, 0.4)' : 'rgba(99, 102, 241, 0.3)',
        overlayColor: darkMode ? 'rgba(34, 211, 238, 0.12)' : 'rgba(255, 255, 255, 0.3)',
        topBarColor: darkMode ? 'rgba(34, 211, 238, 0.8)' : 'rgba(59, 130, 246, 0.9)',
        particleIcons: [Star, Star, Star, Star, Star],
        particleColors: ['text-cyan-300', 'text-cyan-300', 'text-cyan-300', 'text-cyan-300', 'text-cyan-300']
      };
    } else if (game.id === 'grammar') {
      return {
        gradient: 'from-purple-500 via-pink-500 to-rose-500',
        iconGradientDark: 'from-fuchsia-500/60 to-pink-600/60',
        iconGradientLight: 'from-fuchsia-400 via-pink-400 to-rose-500',
        iconBorderDark: 'border-fuchsia-300/60',
        iconBorderLight: 'border-white/40',
        iconGlowDark: '0 0 20px rgba(217, 70, 239, 0.6), 0 4px 15px rgba(236, 72, 153, 0.4), inset 0 2px 8px rgba(240, 171, 252, 0.25)',
        iconGlowLight: '0 2px 8px rgba(236, 72, 153, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
        iconGlowDarkHover: '0 0 25px rgba(217, 70, 239, 0.8), 0 4px 20px rgba(236, 72, 153, 0.5), 0 8px 35px rgba(244, 114, 182, 0.4), inset 0 2px 12px rgba(240, 171, 252, 0.3), inset 0 -2px 12px rgba(244, 114, 182, 0.2)',
        iconGlowLightHover: '0 4px 20px rgba(236, 72, 153, 0.5), 0 8px 32px rgba(217, 70, 239, 0.3), inset 0 2px 8px rgba(255, 255, 255, 0.4), inset 0 -2px 8px rgba(236, 72, 153, 0.2)',
        iconBackgroundDark: 'linear-gradient(135deg, rgba(217, 70, 239, 0.6) 0%, rgba(236, 72, 153, 0.65) 50%, rgba(244, 114, 182, 0.6) 100%)',
        iconBackgroundLight: 'linear-gradient(135deg, rgb(240, 171, 252) 0%, rgb(244, 114, 182) 50%, rgb(251, 113, 133) 100%)',
        pulsingGlowColor1: 'rgba(217, 70, 239, 0.7)',
        pulsingGlowColor2: 'rgba(244, 114, 182, 0.5)',
        glowColor: darkMode ? 'rgba(236, 72, 153, 0.5)' : 'rgba(236, 72, 153, 0.4)',
        shadowColor: darkMode ? 'rgba(236, 72, 153, 0.3)' : 'rgba(236, 72, 153, 0.25)',
        borderColor: darkMode ? 'rgba(236, 72, 153, 0.4)' : 'rgba(236, 72, 153, 0.35)',
        overlayColor: darkMode ? 'rgba(236, 72, 153, 0.12)' : 'rgba(255, 255, 255, 0.3)',
        topBarColor: darkMode ? 'rgba(168, 85, 247, 0.8)' : 'rgba(168, 85, 247, 0.9)',
        particleIcons: [Heart, Crown, Star, Sparkles, Star],
        particleColors: ['text-pink-300', 'text-purple-300', 'text-rose-300', 'text-fuchsia-300', 'text-pink-300']
      };
    } else { // word_builder
      return {
        gradient: 'from-amber-500 via-orange-500 to-red-500',
        iconGradientDark: 'from-orange-500/60 to-amber-600/60',
        iconGradientLight: 'from-orange-400 via-amber-400 to-yellow-500',
        iconBorderDark: 'border-orange-300/60',
        iconBorderLight: 'border-white/40',
        iconGlowDark: '0 0 20px rgba(251, 146, 60, 0.6), 0 4px 15px rgba(245, 158, 11, 0.4), inset 0 2px 8px rgba(252, 211, 77, 0.25)',
        iconGlowLight: '0 2px 8px rgba(251, 146, 60, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
        iconGlowDarkHover: '0 0 25px rgba(251, 146, 60, 0.8), 0 4px 20px rgba(245, 158, 11, 0.5), 0 8px 35px rgba(234, 179, 8, 0.4), inset 0 2px 12px rgba(252, 211, 77, 0.3), inset 0 -2px 12px rgba(234, 179, 8, 0.2)',
        iconGlowLightHover: '0 4px 20px rgba(251, 146, 60, 0.5), 0 8px 32px rgba(245, 158, 11, 0.3), inset 0 2px 8px rgba(255, 255, 255, 0.4), inset 0 -2px 8px rgba(251, 146, 60, 0.2)',
        iconBackgroundDark: 'linear-gradient(135deg, rgba(251, 146, 60, 0.6) 0%, rgba(245, 158, 11, 0.65) 50%, rgba(234, 179, 8, 0.6) 100%)',
        iconBackgroundLight: 'linear-gradient(135deg, rgb(252, 211, 77) 0%, rgb(251, 146, 60) 50%, rgb(234, 179, 8) 100%)',
        pulsingGlowColor1: 'rgba(251, 146, 60, 0.7)',
        pulsingGlowColor2: 'rgba(234, 179, 8, 0.5)',
        glowColor: darkMode ? 'rgba(251, 146, 60, 0.5)' : 'rgba(251, 146, 60, 0.4)',
        shadowColor: darkMode ? 'rgba(251, 146, 60, 0.3)' : 'rgba(251, 146, 60, 0.25)',
        borderColor: darkMode ? 'rgba(251, 146, 60, 0.4)' : 'rgba(251, 146, 60, 0.35)',
        overlayColor: darkMode ? 'rgba(251, 146, 60, 0.12)' : 'rgba(255, 255, 255, 0.3)',
        topBarColor: darkMode ? 'rgba(251, 191, 36, 0.8)' : 'rgba(245, 158, 11, 0.9)',
        particleIcons: [Rocket, Sun, Sparkles, Rocket, Sun],
        particleColors: ['text-amber-300', 'text-yellow-300', 'text-orange-300', 'text-amber-300', 'text-yellow-300']
      };
    }
  };
  
  const colors = getColorScheme();

  return (
    <Link to={createPageUrl(game.path)} className="block h-full">
      <motion.div
        ref={cardRef}
        className={`relative h-full rounded-[22px] sm:rounded-[26px] overflow-hidden group cursor-pointer transition-all duration-500`}
        style={{
          background: darkMode ? 'rgba(255, 255, 255, 0.18)' : 'rgba(255, 255, 255, 0.18)',
          backdropFilter: 'blur(34px)',
          WebkitBackdropFilter: 'blur(34px)',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: isHovered ? colors.borderColor : darkMode ? 'rgba(168, 85, 247, 0.35)' : 'rgba(255, 255, 255, 0.2)',
          boxShadow: isHovered 
            ? `0 0 40px ${colors.glowColor}, 0 8px 20px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.05), inset 0 1px 2px rgba(255, 255, 255, 0.25), inset 0 0 20px rgba(255, 255, 255, 0.06), inset 0 -2px 10px ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.3)'}`
            : darkMode 
              ? '0 8px 20px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.05), inset 0 1px 2px rgba(255, 255, 255, 0.25), inset 0 0 20px rgba(255, 255, 255, 0.06), inset 0 -2px 10px rgba(255, 255, 255, 0.1)'
              : '0 8px 20px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.05), inset 0 1px 2px rgba(255, 255, 255, 0.3), inset 0 -2px 6px rgba(255, 255, 255, 0.3)'
        }}
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ 
          opacity: isInView ? 1 : 0, 
          y: isInView ? 0 : 20, 
          scale: isInView ? 1 : 0.95,
          transition: isMobile ? {
            duration: 0.1,
            ease: "easeOut"
          } : {
            type: "spring",
            stiffness: 300,
            damping: 25
          }
        }}
        whileHover={{ 
          y: -6,
          scale: 1.01,
          transition: { 
            type: "spring",
            stiffness: 400,
            damping: 20
          }
        }}
        whileTap={isMobile ? { 
          scale: 0.97,
          transition: { 
            type: "spring",
            stiffness: 600,
            damping: 15,
            duration: 0.08
          }
        } : { scale: 0.98 }}
        onHoverStart={() => {
          setIsHovered(true);
          setHoverKey(prev => prev + 1);
        }}
        onHoverEnd={() => {
          setIsHovered(false);
          setHoverKey(prev => prev + 1);
        }}
      >
        {/* Soft vertical gradient overlay for mobile contrast */}
        <div 
          className="absolute inset-0 pointer-events-none sm:hidden"
          style={{
            background: darkMode 
              ? 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, transparent 40%, rgba(0, 0, 0, 0.02) 100%)'
              : 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, transparent 40%, rgba(0, 0, 0, 0.02) 100%)'
          }}
        />

        {/* Mobile entry shimmer - triggers when card enters viewport */}
        {isMobile && showEntryShimmer && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: '200%', opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              background: `linear-gradient(90deg, transparent 0%, ${colors.overlayColor} 50%, transparent 100%)`,
              filter: 'blur(8px)'
            }}
          />
        )}

        {/* Top highlight aura - premium luminous glow + scroll-responsive on mobile */}
        <div 
          className={`absolute top-0 left-6 right-6 h-[5px] bg-gradient-to-r ${colors.gradient} rounded-xl transition-transform`}
          style={{
            boxShadow: `0 2px 8px ${colors.shadowColor}, 0 4px 16px ${colors.glowColor}`,
            filter: 'blur(1.5px)',
            opacity: isMobile ? (0.85 + Math.abs(accentOffset) * 0.02) : 0.85,
            transform: isMobile ? `translateX(${accentOffset}px)` : 'none'
          }}
        />

        {/* Subtle color personality tint - always visible */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: game.id === 'flashcards' 
              ? darkMode 
                ? 'linear-gradient(135deg, rgba(20, 184, 166, 0.06) 0%, rgba(34, 211, 238, 0.04) 50%, transparent 100%)'
                : 'linear-gradient(135deg, rgba(20, 184, 166, 0.08) 0%, rgba(34, 211, 238, 0.05) 50%, transparent 100%)'
              : game.id === 'grammar'
                ? darkMode
                  ? 'linear-gradient(135deg, rgba(232, 121, 249, 0.06) 0%, rgba(244, 114, 182, 0.04) 50%, transparent 100%)'
                  : 'linear-gradient(135deg, rgba(232, 121, 249, 0.08) 0%, rgba(244, 114, 182, 0.05) 50%, transparent 100%)'
                : darkMode
                  ? 'linear-gradient(135deg, rgba(251, 191, 36, 0.06) 0%, rgba(251, 146, 60, 0.04) 50%, transparent 100%)'
                  : 'linear-gradient(135deg, rgba(251, 191, 36, 0.08) 0%, rgba(251, 146, 60, 0.05) 50%, transparent 100%)'
          }}
        />

        {/* Animated gradient overlay with color transition */}
        <motion.div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            background: `linear-gradient(135deg, ${colors.overlayColor} 0%, transparent 100%)`,
            opacity: isHovered ? 1 : 0
          }}
        />

        {/* Animated particles on hover - continuous looping animation */}
        {isHovered && (
          <>
            {[
              { startX: '15%', startY: '20%', endX: '5%', endY: '10%' },
              { startX: '50%', startY: '30%', endX: '50%', endY: '5%' },
              { startX: '80%', startY: '25%', endX: '90%', endY: '15%' },
              { startX: '25%', startY: '70%', endX: '10%', endY: '85%' },
              { startX: '75%', startY: '75%', endX: '88%', endY: '90%' }
            ].map((pos, i) => {
              const ParticleIcon = colors.particleIcons[i];
              return (
                <motion.div
                  key={`${hoverKey}-${i}`}
                  className="absolute pointer-events-none"
                  style={{
                    left: pos.startX,
                    top: pos.startY
                  }}
                  initial={{ 
                    opacity: 0,
                    scale: 0,
                    x: 0,
                    y: 0,
                    rotate: 0
                  }}
                  animate={{ 
                    opacity: [0, 1, 0.7, 0],
                    scale: [0, 1.2, 1, 0.8],
                    x: [`0%`, `${(parseFloat(pos.endX) - parseFloat(pos.startX)) * 3}px`],
                    y: [`0%`, `${(parseFloat(pos.endY) - parseFloat(pos.startY)) * 3}px`],
                    rotate: [0, 180 + i * 72, 360 + i * 72]
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.1,
                    ease: "easeOut",
                    repeat: Infinity,
                    repeatDelay: 0.5
                  }}
                >
                  <ParticleIcon className={`w-6 h-6 ${colors.particleColors[i]} drop-shadow-lg`} fill="currentColor" strokeWidth={2} />
                </motion.div>
              );
            })}
          </>
        )}

        {/* Enhanced sparkle effect */}
        <motion.div
          className="absolute top-4 right-4"
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ 
            scale: isHovered ? 1 : 0,
            rotate: isHovered ? 0 : -180,
            opacity: isHovered ? 1 : 0
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 20,
            duration: 0.4
          }}
        >
          <motion.div
            animate={isHovered ? { 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Sparkles className="w-5 h-5 text-yellow-300 drop-shadow-lg" fill="currentColor" />
          </motion.div>
        </motion.div>

        <div className="relative z-10 px-6 sm:px-8 h-full flex flex-col pt-7 sm:pt-7 pb-5 sm:pb-7">
                    {/* Icon row - 48px height on desktop, lifted 2px for visual balance */}
                    <div className="h-10 sm:h-12 mb-[6px] sm:mb-3">
                                                      {/* FABULOUS animated icon container - matching profile icon quality */}
                                                      <motion.div 
                                                        onHoverStart={() => setIsIconHovered(true)}
                                                        onHoverEnd={() => setIsIconHovered(false)}
                                                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-[10px] sm:rounded-[12px] flex items-center justify-center flex-shrink-0 sm:-translate-y-[2px] bg-gradient-to-br ${
                      darkMode ? colors.iconGradientDark : colors.iconGradientLight
                    } border shadow-lg transition-all duration-500 relative overflow-hidden ${
                      darkMode ? colors.iconBorderDark : colors.iconBorderLight
                    } backdrop-blur-md`}
            style={darkMode ? {
              background: colors.iconBackgroundDark,
              border: `1px solid ${colors.iconBorderDark.replace('border-', '').replace('/60', '')}`,
              boxShadow: isIconHovered ? colors.iconGlowDarkHover : colors.iconGlowDark
            } : {
              boxShadow: isIconHovered ? colors.iconGlowLightHover : colors.iconGlowLight,
              background: colors.iconBackgroundLight
            }}
            animate={{ 
              rotate: isIconHovered ? [0, 8, -8, 0] : [0, 3, -3, 0],
              scale: isIconHovered ? 1.08 : 1,
            }}
            transition={{ 
              rotate: { 
                duration: isIconHovered ? 0.5 : 3, 
                repeat: Infinity, 
                ease: "easeInOut",
                repeatDelay: isIconHovered ? 0 : 1
              },
              scale: {
                duration: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 20
              }
            }}
          >
            {/* Inner highlight glow for softer feel */}
            <div 
              className="absolute inset-0 rounded-[10px] sm:rounded-[12px] pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.06) 50%, transparent 100%)',
              }}
            />
            
            {/* Shimmer effect - only on hover */}
            <AnimatePresence>
              {isIconHovered && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  exit={{ x: '200%' }}
                  transition={{ 
                    duration: 0.8, 
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 0.5
                  }}
                />
              )}
            </AnimatePresence>
            
            {/* Enhanced pulsing glow on hover - dark mode only */}
            {darkMode && isIconHovered && (
              <>
                <motion.div
                  className="absolute inset-0 rounded-[10px] sm:rounded-[12px]"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${colors.pulsingGlowColor1} 0%, ${colors.pulsingGlowColor2} 40%, transparent 70%)`
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-[10px] sm:rounded-[12px]"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${colors.pulsingGlowColor2} 0%, transparent 60%)`
                  }}
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.4, 0.7, 0.4],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </>
            )}
            
            <Icon 
              className="w-5 h-5 sm:w-7 sm:h-7 relative z-10" 
              strokeWidth={2.5}
              style={{
                color: 'white',
                filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15))',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.5) 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
              }}
            />
            </motion.div>
            </div>

            {/* Title - 8px below icon row on desktop */}
            <motion.h3 
              className={`text-[22px] sm:text-[26px] font-bold mb-[6px] sm:mb-2 ${
                darkMode ? 'text-white' : 'text-white'
              } ${!darkMode ? 'light-mode-heading' : ''}`}
              style={{
                lineHeight: window.innerWidth >= 640 ? '32px' : '28px',
                letterSpacing: '-0.01em',
                textShadow: darkMode ? '0 2px 4px rgba(0, 0, 0, 0.5)' : '0 1px 2px rgba(0, 0, 0, 0.2)'
              }}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {game.title}
            </motion.h3>

            {/* Description - 8px below title, 18px margin to CTA on desktop, max-width for readability */}
            <div className="flex-1">
            <motion.p 
              className={`text-[14px] sm:text-[17px] font-medium sm:max-w-[360px] ${
                darkMode ? 'text-white/90' : 'text-white/90'
              } ${!darkMode ? 'light-mode-subtext' : ''}`}
              style={{
                lineHeight: window.innerWidth >= 640 ? '26px' : '20px',
                textShadow: darkMode ? '0 1px 3px rgba(0, 0, 0, 0.4)' : '0 1px 2px rgba(0, 0, 0, 0.15)'
              }}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {game.description}
            </motion.p>
            </div>

          {/* CTA - 18px top margin on desktop */}
          <motion.div 
            className={`relative flex items-center gap-2 font-bold text-[15px] sm:text-[17px] transition-all duration-300 mt-[14px] sm:mt-[18px] ${
              darkMode ? 'text-white' : 'text-white'
            }`}
            style={{
              gap: isHovered ? '16px' : '8px',
              lineHeight: '20px',
              letterSpacing: '-0.005em',
              textShadow: darkMode ? '0 2px 4px rgba(0, 0, 0, 0.5)' : '0 1px 2px rgba(0, 0, 0, 0.2)'
            }}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            whileTap={{ scale: 0.97 }}
          >
            {/* Tap ripple effect */}
            <motion.div
              className="absolute inset-0 -mx-2 -my-1 rounded-[18px] bg-white/10"
              initial={{ scale: 0, opacity: 0 }}
              whileTap={{ scale: 1.5, opacity: [0, 0.3, 0] }}
              transition={{ duration: 0.4 }}
            />
            <span>{game.id === 'flashcards' ? t('master_new_words') : game.id === 'grammar' ? t('test_your_skills') : t('craft_and_discover')}</span>
            <motion.div
              animate={isHovered ? { 
                x: [0, 6, 0],
                scale: [1, 1.2, 1]
              } : { x: 0 }}
              transition={{ 
                duration: 0.8, 
                repeat: isHovered ? Infinity : 0, 
                ease: "easeInOut"
              }}
              style={{ letterSpacing: '4px' }}
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 sm:translate-y-[-1px] sm:translate-x-[1px]" strokeWidth={2.5} />
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced bottom gradient line with glow */}
        <motion.div
          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.gradient}`}
          initial={{ scaleX: 0 }}
          animate={{ 
            scaleX: isHovered ? 1 : 0,
            boxShadow: isHovered ? `0 0 15px ${colors.glowColor}` : 'none'
          }}
          transition={{ 
            duration: 0.4,
            ease: "easeOut"
          }}
          style={{ transformOrigin: 'left' }}
        />
        
        {/* Pulsing corner accents - soft and dreamy */}
        <AnimatePresence>
          {isHovered && (
            <>
              <motion.div
                className={`absolute top-0 left-0 w-24 h-24 bg-gradient-to-br ${colors.gradient} opacity-10 blur-2xl`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${colors.gradient} opacity-10 blur-2xl`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
}