import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { useDarkMode } from "../theme/DarkModeContext";
import { useLanguage } from "../language/LanguageContext";
import { useTranslations } from "../utils/translations";
import GlassDivider from "../shared/GlassDivider";

export default function ProgressHeader() {
  const { darkMode } = useDarkMode();
  const { sourceLanguage } = useLanguage();
  const t = useTranslations(sourceLanguage);
  const [isHeaderIconHovered, setIsHeaderIconHovered] = useState(false);

  if (!sourceLanguage || !t) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-5 sm:mb-8 relative"
    >
      {/* ═══ LAYER 1: Outermost Foggy Aura - Teal/Cyan ═══ */}
      {darkMode && (
        <div 
          className="absolute -inset-6 sm:-inset-8 rounded-[36px] sm:rounded-[40px] pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 120% 60% at 50% -15%, rgba(45, 180, 200, 0.22) 0%, transparent 55%),
              radial-gradient(ellipse 50% 120% at -15% 50%, rgba(40, 160, 190, 0.18) 0%, transparent 50%),
              radial-gradient(ellipse 50% 120% at 115% 50%, rgba(40, 160, 190, 0.18) 0%, transparent 50%),
              radial-gradient(ellipse 100% 50% at 50% 115%, rgba(35, 140, 170, 0.12) 0%, transparent 50%)
            `,
            filter: 'blur(30px)',
          }}
        />
      )}

      {/* ═══ LAYER 2: Mid Foggy Glow - Purple/Violet ═══ */}
      {darkMode && (
        <div 
          className="absolute -inset-4 sm:-inset-5 rounded-[28px] sm:rounded-[32px] pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 100% 50% at 50% -8%, rgba(120, 80, 200, 0.35) 0%, transparent 60%),
              radial-gradient(ellipse 45% 100% at -8% 50%, rgba(100, 70, 180, 0.28) 0%, transparent 55%),
              radial-gradient(ellipse 45% 100% at 108% 50%, rgba(100, 70, 180, 0.28) 0%, transparent 55%),
              radial-gradient(ellipse 85% 45% at 50% 108%, rgba(90, 60, 160, 0.2) 0%, transparent 55%)
            `,
            filter: 'blur(20px)',
          }}
        />
      )}

      {/* ═══ LAYER 3: Inner Luminous Edge Glow ═══ */}
      {darkMode && (
        <div 
          className="absolute -inset-2 rounded-[20px] sm:rounded-[26px] pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 90% 40% at 50% -3%, rgba(80, 180, 220, 0.4) 0%, rgba(130, 100, 200, 0.25) 40%, transparent 70%),
              radial-gradient(ellipse 35% 90% at -3% 50%, rgba(70, 160, 200, 0.32) 0%, rgba(110, 80, 180, 0.2) 45%, transparent 65%),
              radial-gradient(ellipse 35% 90% at 103% 50%, rgba(70, 160, 200, 0.32) 0%, rgba(110, 80, 180, 0.2) 45%, transparent 65%),
              radial-gradient(ellipse 80% 35% at 50% 103%, rgba(60, 140, 180, 0.25) 0%, rgba(100, 70, 170, 0.15) 45%, transparent 65%)
            `,
            filter: 'blur(10px)',
          }}
        />
      )}

      {/* ═══ LAYER 4: Crisp Edge Highlight ═══ */}
      {darkMode && (
        <div 
          className="absolute -inset-[1px] rounded-[17px] sm:rounded-[25px] pointer-events-none"
          style={{
            background: `
              linear-gradient(180deg, 
                rgba(100, 200, 240, 0.5) 0%, 
                rgba(140, 120, 220, 0.3) 15%,
                rgba(100, 80, 180, 0.15) 30%,
                rgba(80, 60, 150, 0.1) 50%,
                rgba(100, 80, 180, 0.15) 70%,
                rgba(140, 120, 220, 0.25) 85%,
                rgba(80, 180, 220, 0.35) 100%
              )
            `,
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            padding: '1.5px',
          }}
        />
      )}

      <motion.div
        className="relative rounded-[22px] sm:rounded-[26px] p-4 sm:p-5 transition-all duration-500"
        style={{
          background: darkMode 
            ? 'linear-gradient(135deg, rgba(25, 18, 45, 0.75) 0%, rgba(20, 14, 38, 0.8) 100%)' 
            : 'rgba(255, 255, 255, 0.12)',
          backdropFilter: 'blur(34px)',
          WebkitBackdropFilter: 'blur(34px)',
          border: '1px solid transparent',
          boxShadow: darkMode
            ? '0 8px 20px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.05), inset 0 1px 2px rgba(255, 255, 255, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.04), inset 0 -2px 10px rgba(255, 255, 255, 0.08)'
            : '0 25px 50px -12px rgba(0, 0, 0, 0.08), 0 12px 24px -8px rgba(0, 0, 0, 0.05), inset 0 -2px 6px rgba(255, 255, 255, 0.10)'
        }}
      >
                    {!darkMode && (
                      <div
                        className="absolute inset-0 rounded-[22px] sm:rounded-[26px] pointer-events-none"
                        style={{ border: '1px solid rgba(255, 255, 255, 0.18)' }}
                      />
                    )}
                    {!darkMode && (
                      <div
                        className="absolute inset-0 rounded-[22px] sm:rounded-[26px] pointer-events-none"
                        style={{ boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.25), inset 0 -3px 8px rgba(255, 255, 255, 0.22)' }}
                      />
                    )}
                    <div className="relative z-10">
          <div className="flex items-center gap-3 sm:gap-4 mb-2">
            {/* Icon container with micro glow halo */}
            <div className="relative">
              {/* Micro glow halo - hero badge effect */}
              <div className="absolute -inset-2 bg-white/10 blur-xl rounded-full pointer-events-none" />
              
              <motion.div
                onHoverStart={() => setIsHeaderIconHovered(true)}
                onHoverEnd={() => setIsHeaderIconHovered(false)}
                className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg border ${
                  darkMode
                    ? 'bg-gradient-to-br from-amber-500/60 via-orange-500/60 to-yellow-600/60 border-amber-300/60'
                    : 'bg-gradient-to-br from-amber-400 via-orange-400 to-yellow-500 border-white/40'
                }`}
                style={darkMode ? {
                  background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.6) 0%, rgba(249, 115, 22, 0.65) 50%, rgba(234, 179, 8, 0.6) 100%)',
                  border: '1px solid rgba(252, 211, 77, 0.5)',
                  boxShadow: isHeaderIconHovered
                    ? '0 0 25px rgba(249, 115, 22, 0.8), 0 4px 20px rgba(245, 158, 11, 0.5), 0 8px 35px rgba(234, 179, 8, 0.4), inset 0 2px 12px rgba(252, 211, 77, 0.3), inset 0 -2px 12px rgba(234, 179, 8, 0.2)'
                    : '0 0 20px rgba(249, 115, 22, 0.6), 0 4px 15px rgba(245, 158, 11, 0.4), 0 8px 30px rgba(234, 179, 8, 0.3), inset 0 2px 8px rgba(252, 211, 77, 0.25)'
                } : {
                  boxShadow: isHeaderIconHovered 
                    ? '0 4px 20px rgba(249, 115, 22, 0.5), 0 8px 32px rgba(245, 158, 11, 0.3), inset 0 2px 8px rgba(255, 255, 255, 0.4), inset 0 -2px 8px rgba(249, 115, 22, 0.2)' 
                    : '0 4px 12px rgba(249, 115, 22, 0.3), 0 6px 20px rgba(245, 158, 11, 0.2), inset 0 2px 6px rgba(255, 255, 255, 0.35)',
                  background: 'linear-gradient(135deg, rgb(251, 191, 36) 0%, rgb(249, 115, 22) 50%, rgb(234, 179, 8) 100%)'
                }}
                animate={{ 
                  rotate: isHeaderIconHovered ? [0, 8, -8, 0] : [0, 3, -3, 0],
                  scale: isHeaderIconHovered ? 1.08 : 1,
                }}
                transition={{ 
                  rotate: { 
                    duration: isHeaderIconHovered ? 0.5 : 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    repeatDelay: isHeaderIconHovered ? 0 : 1
                  },
                  scale: {
                    duration: 0.3,
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }
                }}
              >
                <AnimatePresence>
                  {isHeaderIconHovered && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
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

                {darkMode && isHeaderIconHovered && (
                  <>
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.7) 0%, rgba(245, 158, 11, 0.5) 40%, transparent 70%)'
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
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: 'radial-gradient(circle at 30% 30%, rgba(234, 179, 8, 0.5) 0%, transparent 60%)'
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

                <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-white drop-shadow-lg relative z-10" strokeWidth={2.5} style={{ filter: 'drop-shadow(0 0 4px rgba(249, 115, 22, 0.5))' }} />
              </motion.div>
            </div>
            
            <div>
              <h1 className={`text-2xl sm:text-3xl font-bold text-white/90 tracking-tight ${!darkMode ? 'light-mode-heading' : ''}`}
                style={{ textShadow: darkMode ? '0 2px 4px rgba(0, 0, 0, 0.5)' : '0 1px 2px rgba(0, 0, 0, 0.2)' }}>
                {t('your_journey')}
              </h1>
              <p className={`text-white/70 text-sm sm:text-base font-semibold ${!darkMode ? 'light-mode-subtext' : ''}`}
                style={{ textShadow: darkMode ? '0 1px 3px rgba(0, 0, 0, 0.4)' : '0 1px 2px rgba(0, 0, 0, 0.15)' }}>
                {t('journey_subtitle')} ✨
              </p>
            </div>
          </div>
          
        </div>
      </motion.div>
      </motion.div>
  );
}