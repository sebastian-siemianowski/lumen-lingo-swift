import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Star, TrendingUp, ArrowRight, Home, Sparkles, Award, Target, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { useLanguage } from "../language/LanguageContext";
import { useTranslations } from "../utils/translations";
import { useDarkMode } from "../theme/DarkModeContext";

import ParticleEffect from "./ParticleEffect";
import useAudioFeedback from "./useAudioFeedback";
import WisdomEngine from "../progress/WisdomEngine";

export default function GameComplete({ 
  score, 
  correct,
  wrong,
  total,
  gameType,
  category,
  onPlayAgain, 
  onBackToDashboard
}) {
  const { sourceLanguage } = useLanguage();
  const { darkMode } = useDarkMode();
  const t = useTranslations(sourceLanguage);
  const navigate = useNavigate();
  const { playCelebration, playButtonTap, playNavigate } = useAudioFeedback();

  // Play celebration sound on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      playCelebration();
    }, 300); // Slight delay to sync with animations
    return () => clearTimeout(timer);
  }, [playCelebration]);

  // Animation preferences from localStorage (sync with profile settings)
  const [animationEnabled, setAnimationEnabled] = useState(() => {
    try {
      const saved = localStorage.getItem('breathingOrbsEnabled');
      return saved === null ? true : saved === 'true';
    } catch {
      return true;
    }
  });

  const [animationIntensity, setAnimationIntensity] = useState(() => {
    try {
      const saved = localStorage.getItem('breathingOrbsIntensity');
      return saved ? parseFloat(saved) : 1.0;
    } catch {
      return 1.0;
    }
  });

  const [animationSpeed, setAnimationSpeed] = useState(() => {
    try {
      const saved = localStorage.getItem('breathingOrbsSpeed');
      return saved ? parseFloat(saved) : 1.0;
    } catch {
      return 1.0;
    }
  });

  // Listen for animation preference changes
  useEffect(() => {
    const handleStorageChange = () => {
      try {
        const enabled = localStorage.getItem('breathingOrbsEnabled');
        const intensity = localStorage.getItem('breathingOrbsIntensity');
        const speed = localStorage.getItem('breathingOrbsSpeed');
        
        if (enabled !== null) {
          setAnimationEnabled(enabled === 'true');
        }
        if (intensity !== null) {
          setAnimationIntensity(parseFloat(intensity));
        }
        if (speed !== null) {
          setAnimationSpeed(parseFloat(speed));
        }
      } catch (error) {
        console.error('Error reading animation preferences:', error);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('animationPreferencesChanged', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('animationPreferencesChanged', handleStorageChange);
    };
  }, []);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBackToDashboard = () => {
    playNavigate();
    navigate(createPageUrl("Dashboard"));
  };

  const handlePlayAgainClick = () => {
    playButtonTap();
    if (onPlayAgain) {
      onPlayAgain();
    }
  };

  const accuracy = Math.round((correct / total) * 100);

  const getPerformanceMessage = () => {
    if (accuracy >= 90) return { 
      title: t('excellent'), 
      message: t('outstanding'), 
      gradient: darkMode 
        ? "from-yellow-400 via-amber-500 to-orange-500"
        : "from-yellow-300 via-amber-400 to-orange-400",
      iconGradient: darkMode
        ? "from-yellow-300 to-orange-400"
        : "from-yellow-400 to-orange-500",
      glowColor: "rgba(251, 191, 36, 0.4)"
    };
    if (accuracy >= 75) return { 
      title: t('great_job'), 
      message: t('fantastic_progress'), 
      gradient: darkMode
        ? "from-emerald-400 via-green-500 to-teal-500"
        : "from-emerald-300 via-green-400 to-teal-400",
      iconGradient: darkMode
        ? "from-emerald-300 to-teal-400"
        : "from-emerald-400 to-teal-500",
      glowColor: "rgba(52, 211, 153, 0.4)"
    };
    if (accuracy >= 60) return { 
      title: t('good_effort'), 
      message: t('keep_practicing'), 
      gradient: darkMode
        ? "from-blue-400 via-cyan-500 to-sky-500"
        : "from-blue-300 via-cyan-400 to-sky-400",
      iconGradient: darkMode
        ? "from-blue-300 to-sky-400"
        : "from-blue-400 to-sky-500",
      glowColor: "rgba(59, 130, 246, 0.4)"
    };
    return { 
      title: t('keep_going'), 
      message: t('every_session_helps'), 
      gradient: darkMode
        ? "from-purple-400 via-fuchsia-500 to-pink-500"
        : "from-purple-300 via-fuchsia-400 to-pink-400",
      iconGradient: darkMode
        ? "from-purple-300 to-pink-400"
        : "from-purple-400 to-pink-500",
      glowColor: "rgba(168, 85, 247, 0.4)"
    };
  };

  const performance = getPerformanceMessage();

  const getGameTypeTranslation = () => {
    const gameTypeMap = {
      'Vocabulary Flash Cards': t('vocabulary_cards'),
      'Grammar Challenge': t('grammar_challenge'),
      'Word Constructor': t('word_constructor'),
      'Flashcards': t('flashcards'),
      'Grammar': t('grammar'),
      'Word Builder': t('word_builder')
    };
    return gameTypeMap[gameType] || gameType;
  };

  // Calculate dynamic opacity and scale based on intensity (matching Layout.js)
  const baseOpacity = darkMode ? Math.min(0.7 * animationIntensity, 1.0) : 0.5 * animationIntensity;
  const maxOpacity = darkMode ? Math.min(1.0 * animationIntensity, 1.0) : 0.8 * animationIntensity;
  const scaleMultiplier = 1 + (0.15 * animationIntensity);
  const speedDivisor = Math.max(animationSpeed, 0.1);

  // Mobile-specific intensity
  const mobileBaseOpacity = 0.9 * animationIntensity;
  const mobileMaxOpacity = 1.0 * Math.min(animationIntensity * 1.3, 2.6);
  const mobileScaleMultiplier = 1 + (0.3 * animationIntensity);

  return (
    <div className="min-h-[100dvh] flex items-center justify-center p-1 sm:p-6 relative overflow-hidden">
      {/* Dark mode background - Layer 1: Base Abyss */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'rgb(6, 5, 20)'
        }}
        initial={false}
        animate={{ opacity: darkMode ? 1 : 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />
      
      {/* Layer 2: Subtle Radial Nebulas */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(59, 27, 94, 0.2) 0%, transparent 60%),
            radial-gradient(circle at 80% 70%, rgba(109, 45, 255, 0.13) 0%, transparent 70%),
            radial-gradient(circle at 50% 120%, rgba(46, 15, 70, 0.27) 0%, transparent 80%)
          `
        }}
        initial={false}
        animate={{ opacity: darkMode ? 1 : 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />
      
      {/* Soft Cosmic Bloom - centered violet glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle 340px at 50% 40%, rgba(143, 110, 255, 0.06) 0%, transparent 70%)',
          mixBlendMode: 'screen'
        }}
        initial={false}
        animate={{ opacity: darkMode ? 1 : 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />
      
      {/* Light mode background - unified to-br direction: purple → pink → orange */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom right, rgb(196, 148, 252), rgb(244, 114, 182), rgb(251, 146, 60))'
        }}
        initial={false}
        animate={{ opacity: darkMode ? 0 : 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Background gradient layer - only for light mode */}
      <div 
        className="absolute inset-0"
        style={{
          background: darkMode
            ? 'transparent'
            : 'linear-gradient(to bottom right, rgba(168, 85, 247, 0.2), transparent, rgba(251, 146, 60, 0.2))',
          transition: 'background 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      ></div>
        
        {/* BREATHING ORBS - Matching Layout.js exactly */}
        {animationEnabled && (
          <div className="absolute inset-0">
            {/* Desktop Orbs - Hidden on Mobile */}
            {/* Orb 1 - Top Left */}
            <motion.div
              className="absolute rounded-full pointer-events-none hidden sm:block"
              style={{
                width: '550px',
                height: '550px',
                top: '-150px',
                left: '-150px',
                background: darkMode
                  ? `radial-gradient(circle, rgba(99, 102, 241, ${0.55 * animationIntensity}) 0%, rgba(99, 102, 241, ${0.35 * animationIntensity}) 30%, rgba(99, 102, 241, ${0.18 * animationIntensity}) 50%, transparent 70%)`
                  : `radial-gradient(circle, rgba(255, 127, 80, ${0.68 * animationIntensity}) 0%, rgba(255, 154, 118, ${0.45 * animationIntensity}) 30%, rgba(255, 178, 153, ${0.22 * animationIntensity}) 50%, transparent 70%)`,
                filter: darkMode ? 'blur(45px)' : 'blur(50px)',
                willChange: 'transform, opacity',
              }}
              initial={{ opacity: baseOpacity, scale: 1 }}
              animate={{
                scale: [1, scaleMultiplier * 1.1, 1],
                opacity: [baseOpacity, maxOpacity, baseOpacity],
                x: [0, 35 * animationIntensity, 0],
                y: [0, 30 * animationIntensity, 0],
              }}
              transition={{
                duration: 7 / speedDivisor,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1],
              }}
            />

            {/* Orb 2 - Top Right */}
            <motion.div
              className="absolute rounded-full pointer-events-none hidden sm:block"
              style={{
                width: '650px',
                height: '650px',
                top: '-100px',
                right: '-180px',
                background: darkMode
                  ? `radial-gradient(circle, rgba(236, 72, 153, ${0.50 * animationIntensity}) 0%, rgba(236, 72, 153, ${0.32 * animationIntensity}) 30%, rgba(236, 72, 153, ${0.16 * animationIntensity}) 50%, transparent 70%)`
                  : `radial-gradient(circle, rgba(255, 105, 180, ${0.72 * animationIntensity}) 0%, rgba(255, 130, 200, ${0.48 * animationIntensity}) 30%, rgba(255, 160, 220, ${0.24 * animationIntensity}) 50%, transparent 70%)`,
                filter: darkMode ? 'blur(50px)' : 'blur(55px)',
                willChange: 'transform, opacity',
              }}
              initial={{ opacity: baseOpacity * 0.95, scale: 1 }}
              animate={{
                scale: [1, scaleMultiplier * 1.15, 1],
                opacity: [baseOpacity * 0.95, maxOpacity, baseOpacity * 0.95],
                x: [0, -35 * animationIntensity, 0],
                y: [0, 40 * animationIntensity, 0],
              }}
              transition={{
                duration: 9 / speedDivisor,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1],
                delay: 1,
              }}
            />

            {/* Orb 3 - Center */}
            <motion.div
              className="absolute rounded-full pointer-events-none hidden sm:block"
              style={{
                width: '600px',
                height: '600px',
                top: '35%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: darkMode
                  ? `radial-gradient(circle, rgba(251, 191, 36, ${0.45 * animationIntensity}) 0%, rgba(251, 191, 36, ${0.28 * animationIntensity}) 30%, rgba(251, 191, 36, ${0.14 * animationIntensity}) 50%, transparent 70%)`
                  : `radial-gradient(circle, rgba(255, 193, 7, ${0.75 * animationIntensity}) 0%, rgba(255, 214, 64, ${0.50 * animationIntensity}) 30%, rgba(255, 235, 120, ${0.25 * animationIntensity}) 50%, transparent 70%)`,
                filter: darkMode ? 'blur(48px)' : 'blur(52px)',
                willChange: 'transform, opacity',
              }}
              initial={{ opacity: baseOpacity, scale: 1 }}
              animate={{
                scale: [1, scaleMultiplier * 1.18, 1],
                opacity: [baseOpacity, maxOpacity, baseOpacity],
                rotate: [0, 12 * animationIntensity, 0, -12 * animationIntensity, 0],
              }}
              transition={{
                duration: 8 / speedDivisor,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1],
                delay: 2,
              }}
            />

            {/* Orb 4 - Bottom Left */}
            <motion.div
              className="absolute rounded-full pointer-events-none hidden sm:block"
              style={{
                width: '580px',
                height: '580px',
                bottom: '-100px',
                left: '5%',
                background: darkMode
                  ? `radial-gradient(circle, rgba(20, 184, 166, ${0.52 * animationIntensity}) 0%, rgba(20, 184, 166, ${0.34 * animationIntensity}) 30%, rgba(20, 184, 166, ${0.17 * animationIntensity}) 50%, transparent 70%)`
                  : `radial-gradient(circle, rgba(64, 224, 208, ${0.70 * animationIntensity}) 0%, rgba(102, 235, 221, ${0.46 * animationIntensity}) 30%, rgba(140, 245, 234, ${0.23 * animationIntensity}) 50%, transparent 70%)`,
                filter: darkMode ? 'blur(42px)' : 'blur(48px)',
                willChange: 'transform, opacity',
              }}
              initial={{ opacity: baseOpacity, scale: 1 }}
              animate={{
                scale: [1, scaleMultiplier * 1.12, 1],
                opacity: [baseOpacity, maxOpacity * 1.05, baseOpacity],
                x: [0, 30 * animationIntensity, 0],
                y: [0, -35 * animationIntensity, 0],
              }}
              transition={{
                duration: 7.5 / speedDivisor,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1],
                delay: 0.5,
              }}
            />

            {/* Orb 5 - Bottom Right */}
            <motion.div
              className="absolute rounded-full pointer-events-none hidden sm:block"
              style={{
                width: '620px',
                height: '620px',
                bottom: '-80px',
                right: '8%',
                background: darkMode
                  ? `radial-gradient(circle, rgba(168, 85, 247, ${0.58 * animationIntensity}) 0%, rgba(168, 85, 247, ${0.38 * animationIntensity}) 30%, rgba(168, 85, 247, ${0.19 * animationIntensity}) 50%, transparent 70%)`
                  : `radial-gradient(circle, rgba(186, 104, 255, ${0.74 * animationIntensity}) 0%, rgba(203, 140, 255, ${0.49 * animationIntensity}) 30%, rgba(220, 176, 255, ${0.24 * animationIntensity}) 50%, transparent 70%)`,
                filter: darkMode ? 'blur(46px)' : 'blur(50px)',
                willChange: 'transform, opacity',
              }}
              initial={{ opacity: baseOpacity * 0.95, scale: 1 }}
              animate={{
                scale: [1, scaleMultiplier * 1.2, 1],
                opacity: [baseOpacity * 0.95, maxOpacity, baseOpacity * 0.95],
                x: [0, -40 * animationIntensity, 0],
                y: [0, -30 * animationIntensity, 0],
              }}
              transition={{
                duration: 8.5 / speedDivisor,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1],
                delay: 1.5,
              }}
            />

            {/* MOBILE ORBS */}
            {/* Mobile Orb 1 - Top */}
            <motion.div
              className="absolute rounded-full pointer-events-none sm:hidden"
              style={{
                width: '400px',
                height: '400px',
                top: '8%',
                left: '50%',
                transform: 'translateX(-50%)',
                background: darkMode
                  ? 'radial-gradient(circle, rgba(139, 92, 246, 0.85) 0%, rgba(139, 92, 246, 0.55) 25%, rgba(139, 92, 246, 0.28) 45%, transparent 65%)'
                  : 'radial-gradient(circle, rgba(255, 77, 120, 0.88) 0%, rgba(255, 107, 145, 0.60) 25%, rgba(255, 137, 170, 0.32) 45%, transparent 65%)',
                filter: darkMode ? 'blur(22px)' : 'blur(26px)',
                willChange: 'transform, opacity',
              }}
              initial={{ opacity: mobileBaseOpacity, scale: 1 }}
              animate={{
                scale: [1, mobileScaleMultiplier * 1.25, 1],
                opacity: [mobileBaseOpacity, mobileMaxOpacity, mobileBaseOpacity],
                y: [0, 40 * animationIntensity, 0],
              }}
              transition={{
                duration: 7 / speedDivisor,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1],
              }}
            />

            {/* Mobile Orb 2 - Center */}
            <motion.div
              className="absolute rounded-full pointer-events-none sm:hidden"
              style={{
                width: '440px',
                height: '440px',
                top: '45%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: darkMode
                  ? 'radial-gradient(circle, rgba(236, 72, 153, 0.80) 0%, rgba(236, 72, 153, 0.50) 25%, rgba(236, 72, 153, 0.25) 45%, transparent 65%)'
                  : 'radial-gradient(circle, rgba(255, 152, 0, 0.90) 0%, rgba(255, 178, 51, 0.62) 25%, rgba(255, 204, 102, 0.34) 45%, transparent 65%)',
                filter: darkMode ? 'blur(24px)' : 'blur(28px)',
                willChange: 'transform, opacity',
              }}
              initial={{ opacity: mobileBaseOpacity * 0.98, scale: 1 }}
              animate={{
                scale: [1, mobileScaleMultiplier * 1.22, 1],
                opacity: [mobileBaseOpacity * 0.98, mobileMaxOpacity, mobileBaseOpacity * 0.98],
                rotate: [0, 18 * animationIntensity, 0, -18 * animationIntensity, 0],
              }}
              transition={{
                duration: 8 / speedDivisor,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1],
                delay: 1,
              }}
            />

            {/* Mobile Orb 3 - Bottom */}
            <motion.div
              className="absolute rounded-full pointer-events-none sm:hidden"
              style={{
                width: '420px',
                height: '420px',
                bottom: '12%',
                left: '50%',
                transform: 'translateX(-50%)',
                background: darkMode
                  ? 'radial-gradient(circle, rgba(192, 132, 252, 0.82) 0%, rgba(192, 132, 252, 0.52) 25%, rgba(192, 132, 252, 0.26) 45%, transparent 65%)'
                  : 'radial-gradient(circle, rgba(147, 112, 219, 0.86) 0%, rgba(171, 140, 230, 0.58) 25%, rgba(195, 168, 241, 0.30) 45%, transparent 65%)',
                filter: darkMode ? 'blur(23px)' : 'blur(27px)',
                willChange: 'transform, opacity',
              }}
              initial={{ opacity: mobileBaseOpacity, scale: 1 }}
              animate={{
                scale: [1, mobileScaleMultiplier * 1.2, 1],
                opacity: [mobileBaseOpacity, mobileMaxOpacity, mobileBaseOpacity],
                y: [0, -35 * animationIntensity, 0],
              }}
              transition={{
                duration: 7.5 / speedDivisor,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1],
                delay: 0.5,
              }}
            />
          </div>
        )}

      {/* Subtle overlay gradient for depth - only for light mode */}
      <div
        className="absolute inset-0"
        style={{
          background: darkMode
            ? 'transparent'
            : 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.05) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* ParticleEffect */}
      <ParticleEffect /> 

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full max-w-3xl z-10 relative"
      >
        <div 
          className={`relative rounded-3xl sm:rounded-[2.5rem] p-2 sm:p-10 shadow-2xl overflow-hidden`}
          style={darkMode ? {
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 0 30px rgba(168, 85, 247, 0.25), 0 0 60px rgba(139, 92, 246, 0.12), 0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          } : {
            background: 'rgba(255, 255, 255, 0.09)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 4px 8px rgba(255, 255, 255, 0.15)'
          }}
        >
          {/* Gentle Vertical Fade - top to bottom elegance */}
          <div 
            className="absolute inset-0 rounded-3xl sm:rounded-[2.5rem] pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 0%, rgba(255, 255, 255, 0.01) 40%, rgba(255, 255, 255, 0) 100%)'
            }}
          />

          {/* Lumen Particle Drift - ultra subtle magic */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`lumen-${i}`}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: `${3 + Math.random() * 3}px`,
                height: `${3 + Math.random() * 3}px`,
                left: `${15 + i * 18}%`,
                top: `${20 + (i % 3) * 25}%`,
                background: darkMode
                  ? `radial-gradient(circle, rgba(255, 255, 255, ${0.12 + Math.random() * 0.08}) 0%, transparent 70%)`
                  : `radial-gradient(circle, rgba(255, 255, 255, ${0.18 + Math.random() * 0.1}) 0%, transparent 70%)`,
                filter: 'blur(1px)',
              }}
              animate={{
                y: [0, -15 - i * 3, 0],
                x: [0, (i % 2 === 0 ? 8 : -8), 0],
                opacity: [
                  darkMode ? 0.15 : 0.22,
                  darkMode ? 0.25 : 0.35,
                  darkMode ? 0.15 : 0.22
                ],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 12 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5,
              }}
            />
          ))}

          {/* Dreamy gradient overlay for dark mode */}
          {darkMode && (
            <div 
              className="absolute inset-0 rounded-3xl sm:rounded-[2.5rem] pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(168, 85, 247, 0.05) 50%, rgba(192, 132, 252, 0.1) 100%)'
              }}
            />
          )}

          {/* Animated gradient overlays */}
          <motion.div
            className="absolute inset-0 rounded-3xl sm:rounded-[2.5rem] pointer-events-none"
            style={{
              background: darkMode
                ? 'radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.12) 0%, transparent 60%)'
                : 'radial-gradient(circle at 20% 30%, rgba(168, 85, 247, 0.15) 0%, transparent 60%)'
            }}
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.div
            className="absolute inset-0 rounded-3xl sm:rounded-[2.5rem] pointer-events-none"
            style={{
              background: darkMode
                ? 'radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.10) 0%, transparent 55%)'
                : 'radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.12) 0%, transparent 55%)'
            }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          {/* Content Container */}
          <div className="relative z-10">
            {/* Trophy Animation - Elastic drop from above */}
            <motion.div
              initial={{ scale: 0.9, y: -8, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.15,
                ease: [0.34, 1.56, 0.64, 1] // Elastic ease (not bounce)
              }}
              className="flex justify-center mb-1 sm:mb-8"
            >
              <div className="relative">
                <motion.div
                  className={`relative w-10 h-10 sm:w-32 sm:h-32 bg-gradient-to-br ${performance.gradient} rounded-full flex items-center justify-center overflow-hidden`}
                  style={{
                    boxShadow: darkMode
                      ? `0 12px 28px rgba(255, 255, 255, 0.12), 0 6px 12px rgba(0, 0, 0, 0.10), 0 0 22px rgba(215, 140, 255, 0.25), 0 0 40px ${performance.glowColor}, 0 20px 40px rgba(0, 0, 0, 0.4)`
                      : `0 12px 28px rgba(255, 255, 255, 0.12), 0 6px 12px rgba(0, 0, 0, 0.10), 0 0 22px rgba(215, 140, 255, 0.25), 0 0 30px ${performance.glowColor}, 0 20px 40px rgba(0, 0, 0, 0.2)`
                  }}
                  animate={{ 
                    scale: [1, 1.04, 1],
                    boxShadow: darkMode
                      ? [
                          `0 12px 28px rgba(255, 255, 255, 0.12), 0 6px 12px rgba(0, 0, 0, 0.10), 0 0 22px rgba(215, 140, 255, 0.25), 0 0 40px ${performance.glowColor}, 0 20px 40px rgba(0, 0, 0, 0.4)`,
                          `0 16px 36px rgba(255, 255, 255, 0.18), 0 10px 20px rgba(0, 0, 0, 0.14), 0 0 40px rgba(215, 140, 255, 0.45), 0 0 70px ${performance.glowColor}, 0 28px 56px rgba(0, 0, 0, 0.5)`,
                          `0 12px 28px rgba(255, 255, 255, 0.12), 0 6px 12px rgba(0, 0, 0, 0.10), 0 0 22px rgba(215, 140, 255, 0.25), 0 0 40px ${performance.glowColor}, 0 20px 40px rgba(0, 0, 0, 0.4)`
                        ]
                      : [
                          `0 12px 28px rgba(255, 255, 255, 0.12), 0 6px 12px rgba(0, 0, 0, 0.10), 0 0 22px rgba(215, 140, 255, 0.25), 0 0 30px ${performance.glowColor}, 0 20px 40px rgba(0, 0, 0, 0.2)`,
                          `0 16px 36px rgba(255, 255, 255, 0.20), 0 10px 20px rgba(0, 0, 0, 0.14), 0 0 40px rgba(215, 140, 255, 0.45), 0 0 60px ${performance.glowColor}, 0 28px 56px rgba(0, 0, 0, 0.28)`,
                          `0 12px 28px rgba(255, 255, 255, 0.12), 0 6px 12px rgba(0, 0, 0, 0.10), 0 0 22px rgba(215, 140, 255, 0.25), 0 0 30px ${performance.glowColor}, 0 20px 40px rgba(0, 0, 0, 0.2)`
                        ]
                  }}
                  transition={{ 
                    scale: { duration: 4.5, repeat: Infinity, ease: [0.4, 0, 0.6, 1] },
                    boxShadow: { duration: 4.5, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }
                  }}
                >
                  {/* Celebration Light Sweep - ONE TIME */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(120deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0.0) 100%)',
                    }}
                    initial={{ x: '-120%', opacity: 0 }}
                    animate={{ x: '150%', opacity: [0, 0.6, 0] }}
                    transition={{ 
                      duration: 2.4, 
                      delay: 0.5,
                      ease: "easeInOut",
                    }}
                  />
                  <Trophy className="w-5 h-5 sm:w-16 sm:h-16 text-white drop-shadow-2xl relative z-10" strokeWidth={2} />
                  
                  {/* Subtle inner glow ring - breathes with the orb */}
                  <motion.div
                    className="absolute inset-2 rounded-full"
                    style={{
                      background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, transparent 70%)'
                    }}
                    animate={{ 
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>

                <motion.div
                  className="absolute -top-0.5 -right-0.5 sm:-top-3 sm:-right-3"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <Sparkles 
                    className="w-3 h-3 sm:w-8 sm:h-8 text-yellow-300" 
                    strokeWidth={2}
                    style={{
                      filter: darkMode
                        ? 'drop-shadow(0 0 10px rgba(253, 224, 71, 0.8))'
                        : 'drop-shadow(0 0 8px rgba(253, 224, 71, 0.6))'
                    }}
                  />
                </motion.div>

                <motion.div
                  className="absolute -bottom-0.5 -left-0.5 sm:-bottom-3 sm:-left-3"
                  animate={{
                    rotate: [0, -360],
                    scale: [1, 1.15, 1]
                  }}
                  transition={{
                    rotate: { duration: 5, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                  }}
                >
                  <Star 
                    className="w-2.5 h-2.5 sm:w-6 sm:h-6 text-yellow-300" 
                    fill="rgba(253, 224, 71, 0.6)"
                    strokeWidth={2}
                    style={{
                      filter: darkMode
                        ? 'drop-shadow(0 0 8px rgba(253, 224, 71, 0.6))'
                        : 'drop-shadow(0 0 6px rgba(253, 224, 71, 0.5))'
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Title Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-center mb-1 sm:mb-8"
            >
              <motion.h2 
                className={`text-xl sm:text-6xl font-black mb-1 sm:mb-3 ${
                  !darkMode ? 'light-mode-heading' : ''
                }`}
                style={{
                  background: `linear-gradient(135deg, ${performance.iconGradient})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: 'none',
                  filter: 'none'
                }}
              >
                {performance.title}
              </motion.h2>
              
              <p className={`text-xs sm:text-[1.35rem] font-extrabold mb-0.5 sm:mb-2 ${
                                    darkMode ? 'text-white/90' : 'text-white'
                                  } ${!darkMode ? 'light-mode-text' : ''}`}
                                  style={{ letterSpacing: '0.4px', lineHeight: '1.24' }}>
                                    {t('mastering')} {getGameTypeTranslation()}
                                  </p>

                                  {category && (
                                    <p className={`text-xs sm:text-base font-semibold ${
                                      darkMode ? 'text-white/70' : 'text-white/80'
                                    } ${!darkMode ? 'light-mode-subtext' : ''}`}
                                    style={{ letterSpacing: '0.3px' }}>
                                      {category}
                                    </p>
                                  )}
              
              <motion.p 
                className={`text-[10px] sm:text-base font-medium mt-1 sm:mt-3 ${
                  darkMode ? 'text-white/60' : 'text-white/80'
                } ${!darkMode ? 'light-mode-subtext' : ''}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {performance.message}
              </motion.p>
            </motion.div>

            {/* Stats Grid - MOBILE OPTIMIZED with staggered fade up */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-4 mb-1.5 sm:mb-8"
            >
              {/* Score Card */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.div
                  className={`relative rounded-xl sm:rounded-3xl p-2 sm:p-6 overflow-hidden ${
                    darkMode
                      ? 'bg-white/8 backdrop-blur-2xl'
                      : 'bg-white/25 backdrop-blur-xl'
                  }`}
                  style={{
                    border: darkMode 
                      ? '1px solid rgba(251, 191, 36, 0.35)' 
                      : '1px solid rgba(255, 180, 90, 0.45)',
                    boxShadow: darkMode
                      ? '0 12px 24px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(251, 191, 36, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                      : '0 12px 24px rgba(0, 0, 0, 0.08), inset 0 4px 8px rgba(255, 255, 255, 0.15)'
                  }}
                  whileHover={{ 
                    y: -6,
                    scale: 1.03,
                    boxShadow: darkMode
                      ? '0 20px 40px rgba(251, 191, 36, 0.3), 0 0 40px rgba(251, 191, 36, 0.2)'
                      : '0 20px 40px rgba(251, 191, 36, 0.4), 0 0 30px rgba(251, 191, 36, 0.3)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400/15 to-orange-400/10 opacity-60"
                />
                
                <div className="relative z-10 flex flex-col items-center justify-center text-center h-full min-h-[40px] sm:min-h-[110px]">
                  <div className="flex items-center justify-center gap-1 sm:gap-2 mb-0.5 sm:mb-3">
                    <div className={`p-1 sm:p-2 rounded-lg sm:rounded-xl bg-gradient-to-br from-yellow-400 to-orange-400 shadow-lg`}>
                      <Star className="w-2.5 h-2.5 sm:w-5 sm:h-5 text-white" strokeWidth={2.5} />
                    </div>
                    <p className={`text-[9px] sm:text-xs font-bold uppercase tracking-wider ${
                      darkMode ? 'text-white/80' : 'text-white/95'
                    }`}>
                      {t('score')}
                    </p>
                  </div>
                  <div className="flex items-baseline justify-center gap-0.5">
                    <p className={`text-xl sm:text-5xl font-black leading-none ${
                      darkMode ? 'text-white' : 'text-white'
                    } ${!darkMode ? 'light-mode-stat' : ''}`}>
                      {score}
                    </p>
                    <p className={`text-[10px] sm:text-base font-bold ${
                      darkMode ? 'text-white/70' : 'text-white/85'
                    }`}>
                      XP
                    </p>
                  </div>
                </div>
                </motion.div>
              </motion.div>

              {/* Correct Card */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.43, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.div
                  className={`relative rounded-xl sm:rounded-3xl p-2 sm:p-6 overflow-hidden ${
                    darkMode
                      ? 'bg-white/8 backdrop-blur-2xl'
                      : 'bg-white/25 backdrop-blur-xl'
                  }`}
                  style={{
                    border: darkMode 
                      ? '1px solid rgba(52, 211, 153, 0.35)' 
                      : '1px solid rgba(110, 231, 183, 0.45)',
                    boxShadow: darkMode
                      ? '0 12px 24px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(52, 211, 153, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                      : '0 12px 24px rgba(0, 0, 0, 0.08), inset 0 4px 8px rgba(255, 255, 255, 0.15)'
                  }}
                  whileHover={{ 
                    y: -6,
                    scale: 1.03,
                    boxShadow: darkMode
                      ? '0 20px 40px rgba(52, 211, 153, 0.3), 0 0 40px rgba(52, 211, 153, 0.2)'
                      : '0 20px 40px rgba(52, 211, 153, 0.4), 0 0 30px rgba(52, 211, 153, 0.3)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-emerald-400/15 to-green-400/10 opacity-60"
                />
                
                <div className="relative z-10 flex flex-col items-center justify-center text-center h-full min-h-[40px] sm:min-h-[110px]">
                  <div className="flex items-center justify-center gap-1 sm:gap-2 mb-0.5 sm:mb-3">
                    <div className={`p-1 sm:p-2 rounded-lg sm:rounded-xl bg-gradient-to-br from-emerald-400 to-green-400 shadow-lg`}>
                      <Target className="w-2.5 h-2.5 sm:w-5 sm:h-5 text-white" strokeWidth={2.5} />
                    </div>
                    <p className={`text-[9px] sm:text-xs font-bold uppercase tracking-wider ${
                      darkMode ? 'text-white/80' : 'text-white/95'
                    }`}>
                      {t('correct')}
                    </p>
                  </div>
                  <div className="flex items-baseline justify-center gap-0.5">
                    <p className={`text-xl sm:text-5xl font-black leading-none ${
                      darkMode ? 'text-white' : 'text-white'
                    } ${!darkMode ? 'light-mode-stat' : ''}`}>
                      {correct}
                    </p>
                    <p className={`text-xs sm:text-lg font-bold ${
                      darkMode ? 'text-white/70' : 'text-white/85'
                    }`}>
                      / {total}
                    </p>
                  </div>
                </div>
                </motion.div>
              </motion.div>

              {/* Accuracy Card */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.51, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.div
                  className={`relative rounded-xl sm:rounded-3xl p-2 sm:p-6 overflow-hidden ${
                    darkMode
                      ? 'bg-white/8 backdrop-blur-2xl'
                      : 'bg-white/25 backdrop-blur-xl'
                  }`}
                  style={{
                    border: darkMode 
                      ? '1px solid rgba(59, 130, 246, 0.35)' 
                      : '1px solid rgba(96, 165, 250, 0.45)',
                    boxShadow: darkMode
                      ? '0 12px 24px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(59, 130, 246, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                      : '0 12px 24px rgba(0, 0, 0, 0.08), inset 0 4px 8px rgba(255, 255, 255, 0.15)'
                  }}
                  whileHover={{ 
                    y: -6,
                    scale: 1.03,
                    boxShadow: darkMode
                      ? '0 20px 40px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.2)'
                      : '0 20px 40px rgba(59, 130, 246, 0.4), 0 0 30px rgba(59, 130, 246, 0.3)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-blue-400/15 to-cyan-400/10 opacity-60"
                />
                
                <div className="relative z-10 flex flex-col items-center justify-center text-center h-full min-h-[40px] sm:min-h-[110px]">
                  <div className="flex items-center justify-center gap-1 sm:gap-2 mb-0.5 sm:mb-3">
                    <div className={`p-1 sm:p-2 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-400 to-cyan-400 shadow-lg`}>
                      <TrendingUp className="w-2.5 h-2.5 sm:w-5 sm:h-5 text-white" strokeWidth={2.5} />
                    </div>
                    <p className={`text-[9px] sm:text-xs font-bold uppercase tracking-wider ${
                      darkMode ? 'text-white/80' : 'text-white/95'
                    }`}>
                      {t('accuracy')}
                    </p>
                  </div>
                  <div className="flex items-baseline justify-center gap-0.5">
                    <p className={`text-xl sm:text-5xl font-black leading-none ${
                      darkMode ? 'text-white' : 'text-white'
                    } ${!darkMode ? 'light-mode-stat' : ''}`}>
                      {accuracy}
                    </p>
                    <p className={`text-sm sm:text-2xl font-bold ${
                      darkMode ? 'text-white/70' : 'text-white/85'
                    }`}>
                      %
                    </p>
                  </div>
                </div>
                </motion.div>
              </motion.div>

              {/* Wrong Card */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.59, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.div
                  className={`relative rounded-xl sm:rounded-3xl p-2 sm:p-6 overflow-hidden ${
                    darkMode
                      ? 'bg-white/8 backdrop-blur-2xl'
                      : 'bg-white/25 backdrop-blur-xl'
                  }`}
                  style={{
                    border: darkMode 
                      ? '1px solid rgba(249, 115, 22, 0.35)' 
                      : '1px solid rgba(251, 146, 60, 0.45)',
                    boxShadow: darkMode
                      ? '0 12px 24px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(249, 115, 22, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                      : '0 12px 24px rgba(0, 0, 0, 0.08), inset 0 4px 8px rgba(255, 255, 255, 0.15)'
                  }}
                  whileHover={{ 
                    y: -6,
                    scale: 1.03,
                    boxShadow: darkMode
                      ? '0 20px 40px rgba(249, 115, 22, 0.3), 0 0 40px rgba(249, 115, 22, 0.2)'
                      : '0 20px 40px rgba(249, 115, 22, 0.4), 0 0 30px rgba(249, 115, 22, 0.3)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-orange-400/15 to-red-400/10 opacity-60"
                />
                
                <div className="relative z-10 flex flex-col items-center justify-center text-center h-full min-h-[40px] sm:min-h-[110px]">
                  <div className="flex items-center justify-center gap-1 sm:gap-2 mb-0.5 sm:mb-3">
                    <div className={`p-1 sm:p-2 rounded-lg sm:rounded-xl bg-gradient-to-br from-orange-400 to-red-400 shadow-lg`}>
                      <Zap className="w-2.5 h-2.5 sm:w-5 sm:h-5 text-white" strokeWidth={2.5} />
                    </div>
                    <p className={`text-[9px] sm:text-xs font-bold uppercase tracking-wider ${
                      darkMode ? 'text-white/80' : 'text-white/95'
                    }`}>
                      {t('wrong')}
                    </p>
                  </div>
                  <div className="flex items-baseline justify-center gap-0.5">
                    <p className={`text-xl sm:text-5xl font-black leading-none ${
                      darkMode ? 'text-white' : 'text-white'
                    } ${!darkMode ? 'light-mode-stat' : ''}`}>
                      {wrong}
                    </p>
                  </div>
                </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Wisdom Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="hidden sm:block mb-2 sm:mb-6"
            >
              <WisdomEngine />
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-row gap-1.5 sm:gap-4"
            >
              {/* Play Again Button */}
              <motion.button
                onClick={handlePlayAgainClick}
                type="button"
                className={`group relative flex-1 rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer ${
                  darkMode
                    ? 'bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500'
                    : 'bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400'
                }`}
                style={{
                  boxShadow: darkMode
                    ? 'inset 0 0 8px rgba(255, 255, 255, 0.22), 0 4px 18px rgba(168, 85, 247, 0.4)'
                    : 'inset 0 0 8px rgba(255, 255, 255, 0.22), 0 4px 18px rgba(255, 115, 190, 0.28)'
                }}
                whileHover={{ 
                  y: -2,
                  scale: 1.015,
                  filter: 'brightness(1.06)',
                  boxShadow: darkMode
                    ? 'inset 0 0 14px rgba(255, 255, 255, 0.38), 0 10px 32px rgba(168, 85, 247, 0.5), 0 0 24px rgba(236, 72, 153, 0.35)'
                    : 'inset 0 0 14px rgba(255, 255, 255, 0.42), 0 10px 32px rgba(255, 115, 190, 0.5), 0 0 20px rgba(168, 85, 247, 0.3)'
                }}
                whileTap={{ 
                  scale: 0.97,
                  y: 0,
                  filter: 'brightness(0.95)',
                  boxShadow: darkMode
                    ? 'inset 0 2px 8px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(168, 85, 247, 0.3)'
                    : 'inset 0 2px 8px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(255, 115, 190, 0.2)'
                }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
              >
                {/* Gradient shift on hover */}
                <motion.div
                  className={`absolute inset-0 ${
                    darkMode
                      ? 'bg-gradient-to-r from-fuchsia-500 via-pink-500 to-purple-500'
                      : 'bg-gradient-to-r from-fuchsia-400 via-pink-400 to-purple-400'
                  }`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.6 }}
                />
                
                <div className="relative px-3 sm:px-6 py-2.5 sm:py-4 flex items-center justify-center gap-1.5 sm:gap-2">
                  <motion.div
                    whileHover={{ y: -1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <Sparkles className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white" strokeWidth={2.5} />
                  </motion.div>
                  <motion.span 
                    className={`text-xs sm:text-lg font-black text-white ${
                      !darkMode ? 'light-mode-text' : ''
                    }`}
                    style={{ letterSpacing: '0px' }}
                    whileHover={{ letterSpacing: '0.5px' }}
                    transition={{ duration: 0.2 }}
                  >
                    {t('play_again')}
                  </motion.span>
                  <motion.div
                    whileHover={{ x: 3, y: -1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <ArrowRight 
                      className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white" 
                      strokeWidth={2.5}
                    />
                  </motion.div>
                </div>
              </motion.button>

              {/* Back to Dashboard Button */}
              <motion.button
                onClick={handleBackToDashboard}
                type="button"
                className={`group relative flex-1 rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer ${
                  darkMode
                    ? 'bg-white/10'
                    : 'bg-white/25'
                }`}
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.28)',
                  backdropFilter: 'blur(18px)',
                  WebkitBackdropFilter: 'blur(18px)'
                }}
                whileHover={{ 
                  y: -2,
                  scale: 1.015,
                  backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.16)' : 'rgba(255, 255, 255, 0.35)',
                  borderColor: 'rgba(255, 255, 255, 0.42)',
                  boxShadow: darkMode
                    ? '0 8px 28px rgba(255, 255, 255, 0.12), 0 0 18px rgba(168, 85, 247, 0.18)'
                    : '0 8px 28px rgba(255, 255, 255, 0.22), 0 0 18px rgba(255, 255, 255, 0.18)'
                }}
                whileTap={{ 
                  scale: 0.97,
                  y: 0,
                  backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.2)',
                  boxShadow: 'inset 0 2px 6px rgba(0, 0, 0, 0.1)'
                }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
              >
                <div className="relative px-3 sm:px-6 py-2.5 sm:py-4 flex items-center justify-center gap-1.5 sm:gap-2">
                  <motion.div
                    whileHover={{ y: -1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <Home className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white" strokeWidth={2.5} />
                  </motion.div>
                  <motion.span 
                    className={`text-xs sm:text-lg font-black text-white ${
                      !darkMode ? 'light-mode-text' : ''
                    }`}
                    style={{ letterSpacing: '0px' }}
                    whileHover={{ letterSpacing: '0.5px' }}
                    transition={{ duration: 0.2 }}
                  >
                    {t('back_to_dashboard')}
                  </motion.span>
                </div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}