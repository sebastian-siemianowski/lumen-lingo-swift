import React, { useState, useEffect, useImperativeHandle, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, RotateCcw, Sparkles, Heart, Star, Zap, Cloud, Moon, Wind, Flower, Lightbulb } from "lucide-react";
import { useLanguage } from "../language/LanguageContext";
import { useTranslations } from "../utils/translations";
import { useDarkMode } from "../theme/DarkModeContext";
import useAudioFeedback from "../shared/useAudioFeedback";

// Hook to get slow mode state
const useSlowMode = () => {
  const [slowMode, setSlowMode] = useState(() => {
    try {
      return localStorage.getItem('accessibilitySlowMode') === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const handleSlowModeChange = (e) => {
      setSlowMode(e.detail?.slowMode ?? false);
    };
    window.addEventListener('slowModeChanged', handleSlowModeChange);
    return () => window.removeEventListener('slowModeChanged', handleSlowModeChange);
  }, []);

  return slowMode;
};

const FlashCard = forwardRef(({ card, onAnswer, onCelebrate }, ref) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [ripple, setRipple] = useState(null);
  const [successAura, setSuccessAura] = useState(null); // 'gotit' | 'learning' | null
  const cardRef = React.useRef(null);

  const { sourceLanguage } = useLanguage();
  const { darkMode } = useDarkMode();
  const t = useTranslations(sourceLanguage);
  const slowMode = useSlowMode();
  const { playPlink, playWarmPulse, playSoftNudge, playWhoosh } = useAudioFeedback();

  // Animation duration multipliers for slow mode
  const durationMultiplier = slowMode ? 2 : 1;
  const transitionDelay = slowMode ? 0.15 : 0;

  // Expose methods and state to parent component
  useImperativeHandle(ref, () => ({
    flipCard: () => {
      if (!isFlipped && !hasAnswered) {
        setIsFlipped(true);
      }
    },
    isFlipped: () => isFlipped,
    markAsStillLearning: () => {
      if (isFlipped && !hasAnswered) {
        handleAnswer(false);
      }
    }
  }));

  // Reset flip state when card changes
  useEffect(() => {
    setIsFlipped(false);
    // As per new logic, setHasAnswered(false) is handled after onAnswer in handleAnswer function
  }, [card.id]);

  const handleCardClick = (e) => {
    if (!isFlipped && !hasAnswered) {
      // Create ripple at touch/click point
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setRipple({ x, y, id: Date.now() });
        
        // Clear ripple after animation
        setTimeout(() => setRipple(null), 400);
      }
      // Glass plink sound on flip
      playPlink();
      setIsFlipped(true);
    }
  };

  const handleAnswer = (correct) => {
    setHasAnswered(true);
    
    // Trigger success aura animation
    setSuccessAura(correct ? 'gotit' : 'learning');
    
    // Audio feedback based on answer
    if (correct) {
      playWarmPulse();
      if (onCelebrate) {
        onCelebrate();
      }
    } else {
      playSoftNudge();
    }

    setIsFlipped(false);

    // Whoosh on progress
    setTimeout(() => {
      playWhoosh();
      onAnswer(correct);
      setHasAnswered(false);
      setSuccessAura(null);
    }, slowMode ? 1600 : 1100);
  };

  // Dynamic font size based on text length - ADJUSTED FOR MOBILE
  const getResponsiveFontSize = (text) => {
    if (!text) return { mobile: 'text-5xl', desktop: 'sm:text-6xl' };
    
    const length = text.length;
    
    // Very short (1-3 characters): Huge
    if (length <= 3) {
      return { mobile: 'text-6xl', desktop: 'sm:text-7xl' };
    }
    // Short (4-6 characters): Large
    else if (length <= 6) {
      return { mobile: 'text-5xl', desktop: 'sm:text-6xl' };
    }
    // Medium short (7-10 characters): Default
    else if (length <= 10) {
      return { mobile: 'text-4xl', desktop: 'sm:text-5xl' };
    }
    // Medium (11-15 characters): Smaller
    else if (length <= 15) {
      return { mobile: 'text-3xl', desktop: 'sm:text-4xl' };
    }
    // Long (16-25 characters): Much smaller
    else if (length <= 25) {
      return { mobile: 'text-2xl', desktop: 'sm:text-3xl' };
    }
    // Very long (26-40 characters): Small
    else if (length <= 40) {
      return { mobile: 'text-xl', desktop: 'sm:text-2xl' };
    }
    // Extra long (41-60 characters): Very small
    else if (length <= 60) {
      return { mobile: 'text-lg', desktop: 'sm:text-xl' };
    }
    // Sentence (61+ characters): Tiny
    else {
      return { mobile: 'text-base', desktop: 'sm:text-lg' };
    }
  };

  if (!card || !card.front || !card.back) {
    return (
      <div className="text-white text-center">
        {t('loading_word')}
      </div>
    );
  }

  const frontFontSize = getResponsiveFontSize(card.front);
  const backFontSize = getResponsiveFontSize(card.back);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={card.id}
        className="w-full max-w-2xl px-2 sm:px-4"
        initial={{ 
          opacity: 0, 
          scale: 0.90,
          filter: slowMode ? "blur(15px)" : "blur(30px)"
        }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          filter: "blur(0px)"
        }}
        exit={{ 
          opacity: 0, 
          scale: 0.92,
          filter: slowMode ? "blur(15px)" : "blur(30px)"
        }}
        transition={{ 
          duration: slowMode ? 1.8 : 1.0,
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        <div className="relative flex flex-col gap-5">



          <div 
            ref={cardRef}
            className="relative w-full cursor-pointer"
            style={{ 
              perspective: '1500px',
              perspectiveOrigin: 'center center'
            }}
            onClick={handleCardClick}
          >
            {/* Light ripple effect on flip */}
            <AnimatePresence>
              {ripple && (
                <motion.div
                  key={ripple.id}
                  className="absolute pointer-events-none z-50 rounded-full"
                  style={{
                    left: ripple.x,
                    top: ripple.y,
                    transform: 'translate(-50%, -50%)',
                    background: darkMode
                      ? 'radial-gradient(circle, rgba(192, 132, 252, 0.5) 0%, rgba(139, 92, 246, 0.3) 40%, transparent 70%)'
                      : 'radial-gradient(circle, rgba(255, 255, 255, 0.7) 0%, rgba(255, 182, 193, 0.4) 40%, transparent 70%)'
                  }}
                  initial={{ 
                    width: 0, 
                    height: 0, 
                    opacity: 0.9,
                    filter: 'blur(35px)'
                  }}
                  animate={{ 
                    width: 350, 
                    height: 350, 
                    opacity: 0,
                    filter: 'blur(0px)'
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    duration: 0.38, 
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                />
              )}
            </AnimatePresence>
            <motion.div
              className="relative w-full"
              animate={{ 
                rotateY: isFlipped ? 180 : 0,
                y: [0, -3, 0]
              }}
              transition={{
                rotateY: {
                  duration: slowMode ? 1.4 : 0.7,
                  ease: [0.34, 0.61, 0.64, 1]
                },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.2, 1]
                }
              }}
              style={{
                transformStyle: 'preserve-3d',
                minHeight: '340px',
                willChange: 'transform'
              }}
              whileHover={!isFlipped && !hasAnswered ? {
                scale: 1.01,
                transition: { duration: 0.3 }
              } : {}}
              whileTap={!hasAnswered ? {
                scale: 0.99,
                transition: { duration: 0.15 }
              } : {}}
            >


              {/* FRONT SIDE - Source Language */}
                <div
                  className={`absolute inset-0 rounded-[32px] p-10 sm:p-16 flex flex-col items-center justify-center overflow-hidden border ring-1 ${
                    darkMode
                      ? 'border-white/20 ring-white/12'
                      : 'border-white/30 ring-white/15'
                  }`}
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(0deg)',
                    backdropFilter: 'blur(24px) saturate(140%)',
                    WebkitBackdropFilter: 'blur(24px) saturate(140%)',
                    background: darkMode
                      ? 'linear-gradient(135deg, rgba(30, 30, 40, 0.65) 0%, rgba(20, 20, 30, 0.55) 100%)'
                      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.30) 100%)',
                    boxShadow: darkMode
                      ? '0 0 60px rgba(168, 85, 247, 0.08), inset 0 2px 3px rgba(255, 255, 255, 0.20), inset 0 0 30px rgba(255, 255, 255, 0.05)'
                      : '0 0 60px rgba(255, 255, 255, 0.25), inset 0 2px 3px rgba(255, 255, 255, 0.50), inset 0 -3px 8px rgba(255, 255, 255, 0.30)',
                    minHeight: '340px'
                  }}
                >
                {/* Chromatic edge glows - living glass effect */}
                <div 
                  className="absolute inset-0 rounded-[32px] pointer-events-none"
                  style={{
                    boxShadow: `
                      inset 0 1px 8px rgba(139, 92, 246, ${darkMode ? 0.12 : 0.08}),
                      inset 0 -1px 8px rgba(168, 85, 247, ${darkMode ? 0.10 : 0.07}),
                      inset 1px 0 8px rgba(99, 102, 241, ${darkMode ? 0.10 : 0.07}),
                      inset -1px 0 8px rgba(192, 132, 252, ${darkMode ? 0.08 : 0.06})
                    `
                  }}
                />
                {/* Glass refraction line at top */}
                                      <div 
                                        className="absolute inset-x-0 top-0 h-[0.5px] rounded-t-[32px] pointer-events-none"
                                        style={{
                                          background: 'rgba(255, 255, 255, 0.12)'
                                        }}
                                      />
                <motion.div
                  className="absolute top-0 left-0 w-full h-full rounded-[32px] pointer-events-none"
                  style={{
                    background: darkMode
                      ? 'radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.08) 0%, transparent 60%)'
                      : 'radial-gradient(circle at 20% 30%, rgba(147, 197, 253, 0.12) 0%, transparent 60%)'
                  }}
                  animate={{ opacity: [0.4, 0.6, 0.4] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />

                <motion.div
                  className="absolute bottom-0 right-0 w-full h-full rounded-[32px] pointer-events-none"
                  style={{
                    background: darkMode
                      ? 'radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.07) 0%, transparent 55%)'
                      : 'radial-gradient(circle at 80% 70%, rgba(196, 181, 253, 0.10) 0%, transparent 55%)'
                  }}
                  animate={{ opacity: [0.3, 0.55, 0.3] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />

                <motion.div
                    className="absolute top-7 left-7"
                    animate={{
                      rotate: [0, 180, 360],
                      scale: [1, 1.08, 1, 1.05, 1],
                      opacity: [0.55, 0.75, 0.55, 0.65, 0.55]
                    }}
                    transition={{
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 12, repeat: Infinity, ease: "easeInOut" },
                      opacity: { duration: 12, repeat: Infinity, ease: "easeInOut" }
                    }}
                    style={{
                      filter: darkMode 
                        ? 'drop-shadow(0 0 12px rgba(251, 191, 36, 0.7)) drop-shadow(0 0 24px rgba(253, 224, 71, 0.5)) drop-shadow(0 0 36px rgba(251, 146, 60, 0.3))'
                        : 'drop-shadow(0 0 10px rgba(251, 191, 36, 0.8)) drop-shadow(0 0 20px rgba(253, 224, 71, 0.6)) drop-shadow(0 0 30px rgba(251, 146, 60, 0.4))'
                    }}
                  >
                    <Sparkles 
                      className={darkMode ? 'text-yellow-200' : 'text-amber-300'} 
                      size={24} 
                      strokeWidth={2.5}
                    />
                  </motion.div>
                
                <motion.div
                  className="absolute bottom-7 right-7"
                  animate={{
                    scale: [1, 1.05, 1.08, 1.05, 1],
                    opacity: [0.5, 0.65, 0.75, 0.65, 0.5],
                    rotate: [0, -2, 2, -2, 0],
                    filter: darkMode 
                      ? [
                          'drop-shadow(0 0 6px rgba(253, 224, 71, 0.3)) drop-shadow(0 0 12px rgba(251, 191, 36, 0.2))',
                          'drop-shadow(0 0 10px rgba(253, 224, 71, 0.5)) drop-shadow(0 0 20px rgba(251, 191, 36, 0.3))',
                          'drop-shadow(0 0 14px rgba(253, 224, 71, 0.6)) drop-shadow(0 0 28px rgba(251, 191, 36, 0.4))',
                          'drop-shadow(0 0 10px rgba(253, 224, 71, 0.5)) drop-shadow(0 0 20px rgba(251, 191, 36, 0.3))',
                          'drop-shadow(0 0 6px rgba(253, 224, 71, 0.3)) drop-shadow(0 0 12px rgba(251, 191, 36, 0.2))'
                        ]
                      : [
                          'drop-shadow(0 0 5px rgba(253, 224, 71, 0.4)) drop-shadow(0 0 10px rgba(251, 191, 36, 0.25))',
                          'drop-shadow(0 0 8px rgba(253, 224, 71, 0.55)) drop-shadow(0 0 16px rgba(251, 191, 36, 0.35))',
                          'drop-shadow(0 0 12px rgba(253, 224, 71, 0.7)) drop-shadow(0 0 24px rgba(251, 191, 36, 0.5))',
                          'drop-shadow(0 0 8px rgba(253, 224, 71, 0.55)) drop-shadow(0 0 16px rgba(251, 191, 36, 0.35))',
                          'drop-shadow(0 0 5px rgba(253, 224, 71, 0.4)) drop-shadow(0 0 10px rgba(251, 191, 36, 0.25))'
                        ]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.25, 0.5, 0.75, 1]
                  }}
                >
                  <Lightbulb 
                    className={darkMode ? 'text-amber-200' : 'text-amber-400'} 
                    size={22} 
                    strokeWidth={2.5}
                    fill={darkMode ? 'rgba(253, 224, 71, 0.5)' : 'rgba(251, 191, 36, 0.5)'}
                  />
                </motion.div>

                {darkMode ? (
                  <>
                    <motion.div
                      className="absolute top-10 right-12"
                      animate={{
                        y: [0, -6, 0],
                        x: [0, 5, 0],
                        opacity: [0.4, 0.6, 0.4]
                      }}
                      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                      style={{
                        filter: 'drop-shadow(0 0 12px rgba(139, 92, 246, 0.6)) drop-shadow(0 0 24px rgba(168, 85, 247, 0.4))'
                      }}
                    >
                      <Cloud className="text-white/80" size={28} strokeWidth={1.8} />
                    </motion.div>

                    <motion.div
                      className="absolute bottom-12 left-10"
                      animate={{
                        y: [0, -4, 0],
                        opacity: [0.45, 0.65, 0.45],
                        rotate: [0, -5, 0, 5, 0]
                      }}
                      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      style={{
                        filter: 'drop-shadow(0 0 14px rgba(192, 132, 252, 0.7)) drop-shadow(0 0 28px rgba(168, 85, 247, 0.5)) drop-shadow(0 0 42px rgba(139, 92, 246, 0.3))'
                      }}
                    >
                      <Moon className="text-white/85" size={24} strokeWidth={2} />
                    </motion.div>

                    <motion.div
                      className="absolute top-1/3 left-8"
                      animate={{
                        x: [0, 8, 0],
                        opacity: [0.35, 0.55, 0.35]
                      }}
                      transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                      style={{
                        filter: 'drop-shadow(0 0 14px rgba(139, 92, 246, 0.5)) drop-shadow(0 0 28px rgba(168, 85, 247, 0.3))'
                      }}
                    >
                      <Wind className="text-white/80" size={22} strokeWidth={1.8} />
                    </motion.div>
                  </>
                ) : (
                  <>
                    <motion.div
                      className="absolute top-10 right-12"
                      animate={{
                        y: [0, -5, 0],
                        rotate: [0, 10, 0],
                        scale: [1, 1.06, 1],
                        opacity: [0.45, 0.65, 0.45]
                      }}
                      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Sparkles className="text-white/85" size={26} strokeWidth={2} />
                    </motion.div>

                    <motion.div
                      className="absolute bottom-12 left-10"
                      animate={{
                        y: [0, -4, 0],
                        rotate: [0, -10, 0],
                        scale: [1, 1.08, 1],
                        opacity: [0.4, 0.6, 0.4]
                      }}
                      transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                      <Star className="text-white/80" size={22} strokeWidth={2} fill="rgba(255, 255, 255, 0.3)" />
                    </motion.div>
                  </>
                )}

                {/* FRONT CONTENT - Dynamic Font Size */}
                <div className="relative z-10 text-center w-full max-w-lg px-4 pt-2">
                  <motion.h2
                    className={`${frontFontSize.mobile} ${frontFontSize.desktop} font-bold mb-7 text-white break-words`}
                    style={{
                      textShadow: darkMode
                        ? '0 2px 4px rgba(0, 0, 0, 0.8), 0 8px 24px rgba(0, 0, 0, 0.6), 0 0 12px rgba(139, 92, 246, 0.4)'
                        : '0 2px 4px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08), 0 0 4px rgba(255, 255, 255, 0.25)',
                      lineHeight: 1.2,
                      letterSpacing: '-0.02em',
                      overflowWrap: 'break-word',
                      wordWrap: 'break-word',
                      hyphens: 'auto',
                      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
                    }}
                  >
                    {card.front}
                  </motion.h2>

                  {card.exampleTranslation && (
                    <motion.p
                      className={`text-sm sm:text-base font-medium mb-5 italic px-4 ${
                        darkMode ? 'text-white/90' : 'text-white/95'
                      }`}
                      style={{
                        textShadow: darkMode 
                          ? '0 2px 10px rgba(0, 0, 0, 0.6), 0 4px 20px rgba(0, 0, 0, 0.4), 0 0 30px rgba(139, 92, 246, 0.3)' 
                          : '0 2px 4px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)',
                        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        letterSpacing: '-0.01em'
                      }}
                    >
                      "{card.exampleTranslation}"
                    </motion.p>
                  )}

                  <motion.div
                    animate={{ opacity: slowMode ? [0.7, 0.95, 0.7] : [0.6, 0.85, 0.6] }}
                    transition={{ duration: slowMode ? 6 : 4.5, repeat: Infinity, ease: "easeInOut" }}
                    className={`flex items-center justify-center gap-2.5 text-sm ${
                      darkMode ? 'text-white/75' : 'text-white/85'
                    }`}
                    style={{
                      textShadow: darkMode 
                        ? '0 2px 8px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.3)' 
                        : '0 2px 4px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.15)',
                      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    <RotateCcw className="w-4 h-4" strokeWidth={2.2} style={{
                      filter: darkMode 
                        ? 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.4))' 
                        : 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.4))'
                    }} />
                    <span className="font-medium">{t('tap_to_see_meaning')}</span>
                    {slowMode && (
                      <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                        darkMode ? 'bg-amber-500/20 text-amber-200' : 'bg-amber-400/30 text-amber-100'
                      }`}>
                        ✨ {t('take_your_time') || 'Take your time'}
                      </span>
                    )}
                  </motion.div>
                </div>
              </div>



              {/* BACK SIDE - Target Language */}
              <div
                className={`absolute inset-0 rounded-[32px] p-10 sm:p-16 flex flex-col items-center justify-center overflow-hidden border ring-1 ${
                  darkMode
                    ? 'border-emerald-300/25 ring-emerald-200/12'
                    : 'border-pink-200/35 ring-white/15'
                }`}
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  backdropFilter: 'blur(24px) saturate(140%)',
                  WebkitBackdropFilter: 'blur(24px) saturate(140%)',
                  background: darkMode
                    ? 'linear-gradient(135deg, rgba(6, 78, 59, 0.65) 0%, rgba(2, 44, 34, 0.55) 100%)'
                    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.30) 100%)',
                  boxShadow: darkMode
                    ? '0 0 60px rgba(52, 211, 153, 0.10), inset 0 2px 3px rgba(255, 255, 255, 0.20), inset 0 0 30px rgba(255, 255, 255, 0.05)'
                    : '0 0 60px rgba(255, 105, 180, 0.20), inset 0 2px 3px rgba(255, 255, 255, 0.50), inset 0 -3px 8px rgba(255, 255, 255, 0.30)',
                  minHeight: '340px'
                }}
              >
                {/* Chromatic edge glows - living glass effect */}
                <div 
                  className="absolute inset-0 rounded-[32px] pointer-events-none"
                  style={{
                    boxShadow: darkMode
                      ? `
                        inset 0 1px 8px rgba(52, 211, 153, 0.12),
                        inset 0 -1px 8px rgba(251, 146, 60, 0.10),
                        inset 1px 0 8px rgba(16, 185, 129, 0.10),
                        inset -1px 0 8px rgba(253, 224, 71, 0.08)
                      `
                      : `
                        inset 0 1px 8px rgba(255, 105, 180, 0.10),
                        inset 0 -1px 8px rgba(255, 218, 185, 0.08),
                        inset 1px 0 8px rgba(255, 182, 193, 0.08),
                        inset -1px 0 8px rgba(253, 224, 71, 0.07)
                      `
                  }}
                />
                {/* Glass refraction line at top */}
                                      <div 
                                        className="absolute inset-x-0 top-0 h-[0.5px] rounded-t-[32px] pointer-events-none"
                                        style={{
                                          background: 'rgba(255, 255, 255, 0.12)'
                                        }}
                                      />
                <div 
                  className="absolute inset-0 rounded-[32px] pointer-events-none"
                  style={{
                    boxShadow: darkMode
                      ? `
                        inset 0 1px 8px rgba(52, 211, 153, 0.12),
                        inset 0 -1px 8px rgba(251, 146, 60, 0.10),
                        inset 1px 0 8px rgba(16, 185, 129, 0.10),
                        inset -1px 0 8px rgba(253, 224, 71, 0.08)
                      `
                      : `
                        inset 0 1px 8px rgba(255, 105, 180, 0.10),
                        inset 0 -1px 8px rgba(255, 218, 185, 0.08),
                        inset 1px 0 8px rgba(255, 182, 193, 0.08),
                        inset -1px 0 8px rgba(253, 224, 71, 0.07)
                      `
                  }}
                />
                {/* Glass refraction line at top */}
                                      <div 
                                        className="absolute inset-x-0 top-0 h-[0.5px] rounded-t-[32px] pointer-events-none"
                                        style={{
                                          background: 'rgba(255, 255, 255, 0.12)'
                                        }}
                                      />
                <motion.div
                  className="absolute top-0 left-0 w-full h-full rounded-[32px] pointer-events-none"
                  style={{
                    background: darkMode
                      ? 'radial-gradient(circle at 30% 25%, rgba(16, 185, 129, 0.12) 0%, transparent 65%)'
                      : 'radial-gradient(circle at 30% 25%, rgba(255, 105, 180, 0.35) 0%, transparent 65%)'
                  }}
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />

                <motion.div
                  className="absolute bottom-0 right-0 w-full h-full rounded-[32px] pointer-events-none"
                  style={{
                    background: darkMode
                      ? 'radial-gradient(circle at 75% 80%, rgba(245, 158, 11, 0.06) 0%, transparent 55%)'
                      : 'radial-gradient(circle at 75% 80%, rgba(255, 182, 193, 0.30) 0%, transparent 55%)'
                  }}
                  animate={{ opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                />

                <motion.div
                  className="absolute top-0 right-0 w-full h-full rounded-[32px] pointer-events-none"
                  style={{
                    background: darkMode
                      ? 'transparent'
                      : 'radial-gradient(circle at 80% 20%, rgba(255, 218, 185, 0.28) 0%, transparent 60%)'
                  }}
                  animate={{ opacity: [0.6, 0.85, 0.6] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />

                <motion.div
                  className="absolute top-7 left-7"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 0.85, 0.6]
                  }}
                  transition={{
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  style={{
                    filter: darkMode
                      ? 'drop-shadow(0 0 12px rgba(52, 211, 153, 0.6)) drop-shadow(0 0 24px rgba(16, 185, 129, 0.4))'
                      : 'drop-shadow(0 0 10px rgba(255, 105, 180, 0.5))'
                  }}
                >
                  <Star
                    className={darkMode ? 'text-white/90' : 'text-white/85'}
                    size={20}
                    strokeWidth={2.2}
                    fill={darkMode ? 'rgba(255, 255, 255, 0.35)' : 'rgba(255, 255, 255, 0.3)'}
                  />
                </motion.div>

                <motion.div
                  className="absolute bottom-7 right-7"
                  animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.55, 0.8, 0.55]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    filter: darkMode
                      ? 'drop-shadow(0 0 10px rgba(245, 158, 11, 0.5)) drop-shadow(0 0 20px rgba(251, 191, 36, 0.3))'
                      : 'drop-shadow(0 0 8px rgba(255, 182, 193, 0.5))'
                  }}
                >
                  <Heart
                    className={darkMode ? 'text-amber-200' : 'text-white/85'}
                    size={18}
                    strokeWidth={2.2}
                    fill={darkMode ? 'rgba(253, 224, 71, 0.45)' : 'rgba(255, 255, 255, 0.35)'}
                  />
                </motion.div>

                {darkMode ? (
                  <>
                    <motion.div
                      className="absolute top-12 right-10"
                      animate={{
                        rotate: [0, 15, -15, 0],
                        scale: [1, 1.15, 1],
                        y: [0, -6, 0],
                        opacity: [0.6, 0.85, 0.6]
                      }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      style={{
                        filter: 'drop-shadow(0 0 15px rgba(16, 185, 129, 0.6)) drop-shadow(0 0 30px rgba(52, 211, 153, 0.4))'
                      }}
                    >
                      <Flower className="text-white/90" size={26} strokeWidth={2} />
                    </motion.div>

                    <motion.div
                      className="absolute bottom-10 left-12"
                      animate={{
                        rotate: [0, -18, 18, 0],
                        scale: [1, 1.2, 1],
                        y: [0, -5, 0],
                        opacity: [0.55, 0.8, 0.55]
                      }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      style={{
                        filter: 'drop-shadow(0 0 12px rgba(52, 211, 153, 0.5)) drop-shadow(0 0 24px rgba(167, 243, 208, 0.35))'
                      }}
                    >
                      <Sparkles className="text-white/85" size={22} strokeWidth={2} />
                    </motion.div>

                    <motion.div
                      className="absolute top-1/2 right-8"
                      style={{ transform: 'translateY(-50%)' }}
                      animate={{
                        scale: [1, 1.15, 1],
                        rotate: [0, 12, 0],
                        opacity: [0.55, 0.8, 0.55]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                      <Zap
                        className="text-amber-200"
                        size={20}
                        fill="rgba(253, 224, 71, 0.5)"
                        strokeWidth={2}
                        style={{
                          filter: 'drop-shadow(0 0 10px rgba(245, 158, 11, 0.5)) drop-shadow(0 0 20px rgba(251, 191, 36, 0.35))'
                        }}
                      />
                    </motion.div>
                  </>
                ) : (
                  <>
                    <motion.div
                      className="absolute top-12 right-10"
                      animate={{
                        rotate: [0, 12, -12, 0],
                        scale: [1, 1.12, 1],
                        y: [0, -5, 0],
                        opacity: [0.6, 0.85, 0.6]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Star className="text-white/90" size={24} fill="rgba(255, 255, 255, 0.4)" strokeWidth={2.2} />
                    </motion.div>

                    <motion.div
                      className="absolute bottom-10 left-12"
                      animate={{
                        rotate: [0, -15, 15, 0],
                        scale: [1, 1.15, 1],
                        y: [0, -4, 0],
                        opacity: [0.55, 0.8, 0.55]
                      }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                      <Sparkles className="text-white/85" size={22} strokeWidth={2.2} />
                    </motion.div>

                    <motion.div
                      className="absolute top-1/2 right-8"
                      style={{ transform: 'translateY(-50%)' }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.6, 0.85, 0.6]
                      }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                      <Heart className="text-white/85" size={20} fill="rgba(255, 255, 255, 0.35)" strokeWidth={2} />
                    </motion.div>
                  </>
                )}

                {/* BACK CONTENT - Dynamic Font Size with Premium Reveal Animation */}
                <div className="relative z-10 text-center w-full max-w-lg px-4 pt-2">
                  {/* Main word - dramatic reveal */}
                  <motion.h3
                    className={`${backFontSize.mobile} ${backFontSize.desktop} font-bold mb-7 text-white break-words`}
                    initial={{ opacity: 0, y: 8, scale: 0.97, filter: 'blur(8px)' }}
                    animate={isFlipped 
                      ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' } 
                      : { opacity: 0, y: 8, scale: 0.97, filter: 'blur(8px)' }
                    }
                    transition={{ 
                      duration: slowMode ? 0.4 : 0.2,
                      delay: slowMode ? 0.45 : 0.22,
                      ease: [0.16, 1, 0.3, 1],
                      scale: { type: "spring", stiffness: 200, damping: 20 }
                    }}
                    style={{
                      textShadow: darkMode
                        ? '0 2px 4px rgba(0, 0, 0, 0.8), 0 8px 24px rgba(0, 0, 0, 0.6), 0 0 12px rgba(52, 211, 153, 0.4)'
                        : '0 2px 4px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08), 0 0 4px rgba(255, 255, 255, 0.25)',
                      lineHeight: 1.2,
                      letterSpacing: '-0.02em',
                      overflowWrap: 'break-word',
                      wordWrap: 'break-word',
                      hyphens: 'auto',
                      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
                    }}
                  >
                    {card.back}
                  </motion.h3>

                  {/* Divider line - elegant expand */}
                  <motion.div
                    className="w-24 h-1 rounded-full mx-auto mb-5"
                    initial={{ opacity: 0, scaleX: 0, filter: 'blur(4px)' }}
                    animate={isFlipped 
                      ? { opacity: 1, scaleX: 1, filter: 'blur(0px)' } 
                      : { opacity: 0, scaleX: 0, filter: 'blur(4px)' }
                    }
                    transition={{ 
                      duration: slowMode ? 0.35 : 0.18,
                      delay: slowMode ? 0.55 : 0.28,
                      ease: [0.34, 1.56, 0.64, 1]
                    }}
                    style={{
                      background: darkMode
                        ? 'linear-gradient(90deg, transparent, rgba(52, 211, 153, 0.5), transparent)'
                        : 'linear-gradient(90deg, transparent, rgba(255, 105, 180, 0.7), transparent)',
                      boxShadow: darkMode
                        ? '0 0 20px rgba(52, 211, 153, 0.3)'
                        : '0 0 20px rgba(255, 105, 180, 0.4)'
                    }}
                  />

                  {/* Example sentence - soft fade up */}
                  {card.example && (
                    <motion.p
                      className={`text-sm sm:text-base font-medium mb-3 italic px-4 ${
                        darkMode ? 'text-emerald-50/95' : 'text-white/95'
                      }`}
                      initial={{ opacity: 0, y: 6, filter: 'blur(3px)' }}
                      animate={isFlipped 
                        ? { opacity: 1, y: 0, filter: 'blur(0px)' } 
                        : { opacity: 0, y: 6, filter: 'blur(3px)' }
                      }
                      transition={{ 
                        duration: slowMode ? 0.3 : 0.15,
                        delay: slowMode ? 0.65 : 0.32,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      style={{
                        textShadow: darkMode 
                          ? '0 2px 10px rgba(0, 0, 0, 0.6), 0 4px 20px rgba(0, 0, 0, 0.4), 0 0 20px rgba(52, 211, 153, 0.25)' 
                          : '0 2px 4px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)',
                        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        letterSpacing: '-0.01em'
                      }}
                    >
                      "{card.example}"
                    </motion.p>
                  )}

                  {/* Translation - subtle cascade */}
                  {card.exampleTranslation && (
                    <motion.p
                      className={`text-xs sm:text-sm font-medium mb-4 px-4 ${
                        darkMode ? 'text-emerald-100/80' : 'text-white/90'
                      }`}
                      initial={{ opacity: 0, y: 4 }}
                      animate={isFlipped 
                        ? { opacity: 1, y: 0 } 
                        : { opacity: 0, y: 4 }
                      }
                      transition={{ 
                        duration: slowMode ? 0.25 : 0.12,
                        delay: slowMode ? 0.75 : 0.38,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      style={{
                        textShadow: darkMode 
                          ? '0 2px 8px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.3)' 
                          : '0 2px 4px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.15)',
                        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        letterSpacing: '-0.01em'
                      }}
                    >
                      ({card.exampleTranslation})
                    </motion.p>
                  )}

                  {/* Word pair footer - final touch */}
                  <motion.p
                    className={`text-sm font-medium ${
                      darkMode ? 'text-emerald-100/85' : 'text-white/90'
                    }`}
                    initial={{ opacity: 0, y: 3 }}
                    animate={isFlipped 
                      ? { opacity: 1, y: 0 } 
                      : { opacity: 0, y: 3 }
                    }
                    transition={{ 
                      duration: slowMode ? 0.2 : 0.1,
                      delay: slowMode ? 0.85 : 0.42,
                      ease: "easeOut"
                    }}
                    style={{
                      textShadow: darkMode 
                        ? '0 2px 8px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.3)' 
                        : '0 2px 4px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.15)',
                      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {card.front} • {card.back}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* BUTTONS */}
                          <AnimatePresence mode="wait">
                            {isFlipped && !hasAnswered && (
                              <motion.div
                                initial={{ opacity: 0, y: 15, scale: 0.96 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.96 }}
                                transition={{
                                  duration: slowMode ? 0.7 : 0.35,
                                  delay: slowMode ? 0.5 : 0.25,
                                  ease: [0.22, 1, 0.36, 1]
                                }}
                                className="flex gap-4 relative"
                              >
                                {/* Chromatic noise texture overlay for both buttons */}
                                <style>{`
                                  .chromatic-noise::before {
                                    content: '';
                                    position: absolute;
                                    inset: 0;
                                    border-radius: 28px;
                                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
                                    opacity: 0.04;
                                    mix-blend-mode: overlay;
                                    pointer-events: none;
                                    z-index: 1;
                                  }
                                `}</style>
                {/* Success Aura Effects */}
                <AnimatePresence>
                  {successAura === 'gotit' && (
                    <>
                      {/* Emerald glow */}
                      <motion.div
                        className="absolute inset-0 rounded-[28px] pointer-events-none"
                        style={{
                          background: 'radial-gradient(circle at 75% 50%, rgba(52, 211, 153, 0.4) 0%, rgba(16, 185, 129, 0.2) 40%, transparent 70%)',
                          filter: 'blur(20px)'
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: [0, 1, 0], scale: [0.8, 1.3, 1.5] }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      />
                      {/* Burst particles */}
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 rounded-full pointer-events-none"
                          style={{
                            background: 'rgba(167, 243, 208, 0.6)',
                            left: '75%',
                            top: '50%',
                            boxShadow: '0 0 8px rgba(52, 211, 153, 0.5)'
                          }}
                          initial={{ opacity: 0.8, scale: 0, x: 0, y: 0 }}
                          animate={{
                            opacity: [0.8, 0.15, 0],
                            scale: [0, 1, 0.5],
                            x: Math.cos((i * 60) * Math.PI / 180) * 60,
                            y: Math.sin((i * 60) * Math.PI / 180) * 40
                          }}
                          transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.03 }}
                        />
                      ))}
                    </>
                  )}
                  {successAura === 'learning' && (
                    /* Gentle orange ripple - supportive, not punishing */
                    <motion.div
                      className="absolute inset-0 rounded-[28px] pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle at 25% 50%, rgba(251, 191, 36, 0.35) 0%, rgba(251, 146, 60, 0.2) 40%, transparent 70%)',
                        filter: 'blur(15px)'
                      }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: [0, 0.8, 0], scale: [0.9, 1.2, 1.4] }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </AnimatePresence>

                {/* STILL LEARNING BUTTON */}
                                        <motion.button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            handleAnswer(false);
                                          }}
                                          onHoverStart={() => setHoveredButton('learning')}
                                          onHoverEnd={() => setHoveredButton(null)}
                                          className="group relative flex-1 rounded-[28px] overflow-hidden chromatic-noise"
                    style={{
                                              backdropFilter: 'blur(28px) saturate(140%)',
                                              WebkitBackdropFilter: 'blur(28px) saturate(140%)',
                                              background: darkMode
                                                ? 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04)), linear-gradient(145deg, rgba(254, 215, 170, 0.12) 0%, rgba(251, 146, 60, 0.15) 40%, rgba(249, 115, 22, 0.10) 100%)'
                                                : 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.06)), linear-gradient(145deg, rgba(255, 237, 213, 0.25) 0%, rgba(251, 146, 60, 0.22) 40%, rgba(249, 115, 22, 0.16) 100%)',
                      border: darkMode
                        ? '1.5px solid rgba(251, 191, 36, 0.35)'
                        : '1.5px solid rgba(251, 191, 36, 0.45)',
                      boxShadow: darkMode
                        ? 'inset 0 0 40px rgba(255, 255, 255, 0.10), inset 0 0 4px rgba(255, 255, 255, 0.28), inset 0 -8px 20px rgba(251, 146, 60, 0.08), inset 0 8px 20px rgba(254, 215, 170, 0.06), 0 0 20px rgba(251, 191, 36, 0.25), 0 0 40px rgba(251, 146, 60, 0.15), 0 20px 40px rgba(0, 0, 0, 0.05), 0 25px 50px -12px rgba(0, 0, 0, 0.30), inset 0 1px 2px rgba(255, 255, 255, 0.18)'
                        : 'inset 0 0 40px rgba(255, 255, 255, 0.12), inset 0 0 4px rgba(255, 255, 255, 0.32), inset 0 -8px 20px rgba(251, 146, 60, 0.10), inset 0 8px 20px rgba(255, 237, 213, 0.12), 0 0 20px rgba(251, 191, 36, 0.30), 0 0 40px rgba(251, 146, 60, 0.18), 0 20px 40px rgba(0, 0, 0, 0.05), 0 25px 50px -12px rgba(0, 0, 0, 0.20), inset 0 1px 2px rgba(255, 255, 255, 0.25)'
                    }}
                    whileHover={{
                      y: -4,
                      scale: 1.02,
                      boxShadow: darkMode
                        ? 'inset 0 0 0 1px rgba(255, 255, 255, 0.18), inset 0 -10px 25px rgba(251, 146, 60, 0.12), inset 0 10px 25px rgba(254, 215, 170, 0.10), 0 0 32px rgba(251, 191, 36, 0.40), 0 0 60px rgba(251, 146, 60, 0.25), 0 30px 60px -12px rgba(0, 0, 0, 0.35), inset 0 1px 2px rgba(255, 255, 255, 0.22)'
                        : 'inset 0 0 0 1px rgba(255, 255, 255, 0.25), inset 0 -10px 25px rgba(251, 146, 60, 0.15), inset 0 10px 25px rgba(255, 237, 213, 0.18), 0 0 32px rgba(251, 191, 36, 0.45), 0 0 60px rgba(251, 146, 60, 0.28), 0 30px 60px -12px rgba(0, 0, 0, 0.25), inset 0 1px 2px rgba(255, 255, 255, 0.30)'
                    }}
                    whileTap={{ 
                      scale: 0.96,
                      boxShadow: darkMode
                        ? 'inset 0 0 0 1px rgba(255, 255, 255, 0.10), inset 0 4px 12px rgba(0, 0, 0, 0.30), 0 0 15px rgba(251, 191, 36, 0.20)'
                        : 'inset 0 0 0 1px rgba(255, 255, 255, 0.15), inset 0 4px 12px rgba(0, 0, 0, 0.18), 0 0 15px rgba(251, 191, 36, 0.25)'
                    }}
                    transition={{
                      duration: 0.25,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    {/* Top glass refraction line */}
                      <div 
                        className="absolute inset-x-0 top-0 h-[1px] pointer-events-none"
                        style={{
                          background: 'linear-gradient(90deg, transparent 10%, rgba(255, 255, 255, 0.25) 50%, transparent 90%)'
                        }}
                      />

                      {/* Vertical satin sheen gradient */}
                      <div 
                        className="absolute inset-0 pointer-events-none rounded-[28px]"
                        style={{
                          background: darkMode
                            ? 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, transparent 35%, transparent 65%, rgba(0, 0, 0, 0.06) 100%)'
                            : 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, transparent 35%, transparent 65%, rgba(0, 0, 0, 0.04) 100%)'
                        }}
                      />

                      {/* Hover glow overlay */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                        style={{
                          background: 'radial-gradient(circle at 50% 0%, rgba(254, 215, 170, 0.25) 0%, transparent 60%)',
                          opacity: hoveredButton === 'learning' ? 1 : 0
                        }}
                      />

                    <div className="relative h-full flex flex-col items-center justify-center gap-3.5 px-6 py-8">
                      <motion.div
                        className="w-14 h-14 rounded-[18px] flex items-center justify-center relative overflow-hidden"
                        style={{
                          background: darkMode
                            ? 'linear-gradient(135deg, rgba(254, 215, 170, 0.25) 0%, rgba(251, 146, 60, 0.18) 100%)'
                            : 'linear-gradient(135deg, rgba(254, 215, 170, 0.40) 0%, rgba(251, 146, 60, 0.30) 100%)',
                          border: darkMode
                            ? '1px solid rgba(251, 191, 36, 0.30)'
                            : '1px solid rgba(251, 191, 36, 0.40)',
                          boxShadow: darkMode
                            ? '0 8px 20px rgba(251, 146, 60, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.15)'
                            : '0 8px 20px rgba(251, 146, 60, 0.20), inset 0 1px 1px rgba(255, 255, 255, 0.25)'
                        }}
                        whileHover={{
                          scale: 1.08,
                          rotate: -5,
                          transition: { duration: 0.25, type: "spring", stiffness: 400, damping: 20 }
                        }}
                        animate={successAura === 'learning' ? {
                          boxShadow: [
                            '0 8px 20px rgba(251, 146, 60, 0.15)',
                            '0 8px 40px rgba(251, 146, 60, 0.50)',
                            '0 8px 20px rgba(251, 146, 60, 0.15)'
                          ]
                        } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        {/* Orange ripple effect */}
                        <AnimatePresence>
                          {successAura === 'learning' && (
                            <motion.div
                              className="absolute inset-0 rounded-[18px]"
                              style={{
                                background: 'radial-gradient(circle, rgba(251, 146, 60, 0.5) 0%, transparent 70%)'
                              }}
                              initial={{ scale: 0.5, opacity: 0.8 }}
                              animate={{ scale: 2.5, opacity: 0 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.5, ease: "easeOut" }}
                            />
                          )}
                        </AnimatePresence>
                        <motion.div
                          animate={successAura === 'learning' ? {
                            rotate: [0, 12, 0],
                            scale: [1, 1.15, 1]
                          } : {}}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                          <RotateCcw
                            className={darkMode ? 'text-orange-100' : 'text-white'}
                            size={24}
                            strokeWidth={2.5}
                            style={{
                              filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.6))'
                            }}
                          />
                        </motion.div>
                      </motion.div>

                      <div className="text-center space-y-1">
                        <p className="font-semibold text-base sm:text-lg text-white" style={{
                          textShadow: darkMode 
                            ? '0 2px 8px rgba(255, 255, 255, 0.45), 0 4px 12px rgba(0, 0, 0, 0.15)'
                            : '0 2px 4px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(255, 255, 255, 0.2)',
                          fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                          letterSpacing: '-0.02em'
                        }}>
                          {t('still_learning')}
                        </p>
                        <p className={`text-xs sm:text-sm font-normal ${
                          darkMode ? 'text-orange-100/75' : 'text-white/85'
                        }`} style={{
                          textShadow: darkMode ? '0 1px 6px rgba(0, 0, 0, 0.20)' : '0 1px 3px rgba(0, 0, 0, 0.12)',
                          fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
                        }}>
                          {t('practice_more')}
                        </p>
                      </div>
                    </div>
                  </motion.button>

                {/* GOT IT BUTTON */}
                                      <motion.button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          handleAnswer(true);
                                        }}
                                        onHoverStart={() => setHoveredButton('gotit')}
                                        onHoverEnd={() => setHoveredButton(null)}
                                        className="group relative flex-1 rounded-[28px] overflow-hidden chromatic-noise"
                  style={{
                                            backdropFilter: 'blur(28px) saturate(140%)',
                                            WebkitBackdropFilter: 'blur(28px) saturate(140%)',
                                            background: darkMode
                                              ? 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04)), linear-gradient(145deg, rgba(167, 243, 208, 0.10) 0%, rgba(52, 211, 153, 0.15) 40%, rgba(16, 185, 129, 0.10) 100%)'
                                              : 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.06)), linear-gradient(145deg, rgba(209, 250, 229, 0.22) 0%, rgba(52, 211, 153, 0.22) 40%, rgba(16, 185, 129, 0.16) 100%)',
                    border: darkMode
                      ? '1.5px solid rgba(110, 231, 183, 0.35)'
                      : '1.5px solid rgba(52, 211, 153, 0.45)',
                    boxShadow: darkMode
                      ? 'inset 0 0 40px rgba(255, 255, 255, 0.10), inset 0 0 4px rgba(255, 255, 255, 0.28), inset 0 -8px 20px rgba(16, 185, 129, 0.08), inset 0 8px 20px rgba(167, 243, 208, 0.06), 0 0 20px rgba(52, 211, 153, 0.25), 0 0 40px rgba(16, 185, 129, 0.15), 0 20px 40px rgba(0, 0, 0, 0.05), 0 25px 50px -12px rgba(0, 0, 0, 0.30), inset 0 1px 2px rgba(255, 255, 255, 0.18)'
                      : 'inset 0 0 40px rgba(255, 255, 255, 0.12), inset 0 0 4px rgba(255, 255, 255, 0.32), inset 0 -8px 20px rgba(16, 185, 129, 0.10), inset 0 8px 20px rgba(209, 250, 229, 0.12), 0 0 20px rgba(52, 211, 153, 0.30), 0 0 40px rgba(16, 185, 129, 0.18), 0 20px 40px rgba(0, 0, 0, 0.05), 0 25px 50px -12px rgba(0, 0, 0, 0.20), inset 0 1px 2px rgba(255, 255, 255, 0.25)'
                  }}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                    boxShadow: darkMode
                      ? 'inset 0 0 0 1px rgba(255, 255, 255, 0.18), inset 0 -10px 25px rgba(16, 185, 129, 0.12), inset 0 10px 25px rgba(167, 243, 208, 0.10), 0 0 32px rgba(52, 211, 153, 0.40), 0 0 60px rgba(16, 185, 129, 0.25), 0 30px 60px -12px rgba(0, 0, 0, 0.35), inset 0 1px 2px rgba(255, 255, 255, 0.22)'
                      : 'inset 0 0 0 1px rgba(255, 255, 255, 0.25), inset 0 -10px 25px rgba(16, 185, 129, 0.15), inset 0 10px 25px rgba(209, 250, 229, 0.18), 0 0 32px rgba(52, 211, 153, 0.45), 0 0 60px rgba(16, 185, 129, 0.28), 0 30px 60px -12px rgba(0, 0, 0, 0.25), inset 0 1px 2px rgba(255, 255, 255, 0.30)'
                  }}
                  whileTap={{ 
                    scale: 0.96,
                    boxShadow: darkMode
                      ? 'inset 0 0 0 1px rgba(255, 255, 255, 0.10), inset 0 4px 12px rgba(0, 0, 0, 0.30), 0 0 15px rgba(52, 211, 153, 0.20)'
                      : 'inset 0 0 0 1px rgba(255, 255, 255, 0.15), inset 0 4px 12px rgba(0, 0, 0, 0.18), 0 0 15px rgba(52, 211, 153, 0.25)'
                  }}
                  transition={{
                    duration: 0.25,
                      ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  {/* Top glass refraction line */}
                  <div 
                    className="absolute inset-x-0 top-0 h-[1px] pointer-events-none"
                    style={{
                      background: 'linear-gradient(90deg, transparent 10%, rgba(255, 255, 255, 0.25) 50%, transparent 90%)'
                    }}
                  />

                  {/* Vertical satin sheen gradient */}
                  <div 
                    className="absolute inset-0 pointer-events-none rounded-[28px]"
                    style={{
                      background: darkMode
                        ? 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, transparent 35%, transparent 65%, rgba(0, 0, 0, 0.06) 100%)'
                        : 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, transparent 35%, transparent 65%, rgba(0, 0, 0, 0.04) 100%)'
                    }}
                  />

                  {/* Hover glow overlay */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                    style={{
                      background: 'radial-gradient(circle at 50% 0%, rgba(167, 243, 208, 0.25) 0%, transparent 60%)',
                      opacity: hoveredButton === 'gotit' ? 1 : 0
                    }}
                  />

                  {/* Sparkle on hover */}
                  <motion.div
                    className="absolute top-4 right-4 pointer-events-none"
                    style={{
                      opacity: hoveredButton === 'gotit' ? 0.8 : 0,
                      transition: 'opacity 0.3s ease-in-out'
                    }}
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.15, 1]
                    }}
                    transition={{
                      rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    <Sparkles
                      className={darkMode ? 'text-emerald-200' : 'text-white'}
                      size={16}
                      strokeWidth={2}
                      style={{
                        filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.6))'
                      }}
                    />
                  </motion.div>

                  <div className="relative h-full flex flex-col items-center justify-center gap-3.5 px-6 py-8">
                    <motion.div
                      className="w-14 h-14 rounded-[18px] flex items-center justify-center relative overflow-visible"
                      style={{
                        background: darkMode
                          ? 'linear-gradient(135deg, rgba(167, 243, 208, 0.25) 0%, rgba(52, 211, 153, 0.18) 100%)'
                          : 'linear-gradient(135deg, rgba(167, 243, 208, 0.40) 0%, rgba(52, 211, 153, 0.30) 100%)',
                        border: darkMode
                          ? '1px solid rgba(110, 231, 183, 0.30)'
                          : '1px solid rgba(52, 211, 153, 0.45)',
                        boxShadow: darkMode
                          ? '0 8px 20px rgba(52, 211, 153, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.15)'
                          : '0 8px 20px rgba(16, 185, 129, 0.20), inset 0 1px 1px rgba(255, 255, 255, 0.25)'
                      }}
                      whileHover={{
                        scale: 1.08,
                        transition: { duration: 0.25, type: "spring", stiffness: 400, damping: 20 }
                      }}
                      animate={successAura === 'gotit' ? {
                        boxShadow: [
                          '0 8px 20px rgba(52, 211, 153, 0.15)',
                          '0 8px 50px rgba(52, 211, 153, 0.60)',
                          '0 8px 20px rgba(52, 211, 153, 0.15)'
                        ]
                      } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Green starburst effect */}
                      <AnimatePresence>
                        {successAura === 'gotit' && (
                          <>
                            <motion.div
                              className="absolute inset-0 rounded-[18px]"
                              style={{
                                background: 'radial-gradient(circle, rgba(52, 211, 153, 0.6) 0%, rgba(16, 185, 129, 0.3) 40%, transparent 70%)'
                              }}
                              initial={{ scale: 0.5, opacity: 0.9 }}
                              animate={{ scale: 3, opacity: 0 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.5, ease: "easeOut" }}
                            />
                            {/* Sparkle trails */}
                            {[...Array(6)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-1.5 h-1.5 rounded-full"
                                style={{
                                  background: 'rgba(167, 243, 208, 0.95)',
                                  boxShadow: '0 0 6px rgba(52, 211, 153, 0.8)'
                                }}
                                initial={{ 
                                  x: 0, 
                                  y: 0, 
                                  opacity: 1,
                                  scale: 1
                                }}
                                animate={{ 
                                  x: (Math.random() - 0.5) * 50,
                                  y: -25 - Math.random() * 30,
                                  opacity: 0,
                                  scale: 0.2
                                }}
                                transition={{ 
                                  duration: 0.6 + Math.random() * 0.2,
                                  ease: "easeOut",
                                  delay: i * 0.04
                                }}
                              />
                            ))}
                          </>
                        )}
                      </AnimatePresence>
                      <motion.div
                        animate={successAura === 'gotit' ? {
                          scale: [1, 1.25, 1],
                        } : {}}
                        transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
                      >
                        <Check
                          className={darkMode ? 'text-emerald-100' : 'text-white'}
                          size={26}
                          strokeWidth={3}
                          style={{
                            filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.6))'
                          }}
                        />
                      </motion.div>
                    </motion.div>

                    <div className="text-center space-y-1">
                      <p className="font-semibold text-base sm:text-lg text-white" style={{
                        textShadow: darkMode
                          ? '0 2px 8px rgba(255, 255, 255, 0.45), 0 4px 12px rgba(0, 0, 0, 0.15)'
                          : '0 2px 4px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(255, 255, 255, 0.2)',
                        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        letterSpacing: '-0.02em'
                      }}>
                        {t('got_it')}
                      </p>
                      <p className={`text-xs sm:text-sm font-normal ${
                        darkMode ? 'text-emerald-100/75' : 'text-white/85'
                      }`} style={{
                        textShadow: darkMode ? '0 1px 6px rgba(0, 0, 0, 0.20)' : '0 1px 3px rgba(0, 0, 0, 0.12)',
                        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
                      }}>
                        {t('know_this_word')}
                      </p>
                    </div>
                  </div>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
});

FlashCard.displayName = 'FlashCard';

export default FlashCard;