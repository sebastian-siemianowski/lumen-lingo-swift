import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../theme/DarkModeContext";
import { useLanguage } from "../language/LanguageContext";
import { useTranslations } from "../utils/translations";
import GlassDivider from "../shared/GlassDivider";

import { Rocket } from "lucide-react";

// Animated Rocket Icon - celebrates improvement with launch animation
function PerformanceRocketIcon({ triggerBloom }) {
  const [isLaunching, setIsLaunching] = useState(false);
  
  useEffect(() => {
    if (triggerBloom) {
      setIsLaunching(true);
      const timer = setTimeout(() => setIsLaunching(false), 700);
      return () => clearTimeout(timer);
    }
  }, [triggerBloom]);

  // Trigger initial launch on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsLaunching(true), 500);
    const resetTimer = setTimeout(() => setIsLaunching(false), 1200);
    return () => {
      clearTimeout(timer);
      clearTimeout(resetTimer);
    };
  }, []);

  return (
    <motion.div
      className="relative"
      animate={{ 
        y: isLaunching ? -3 : 0,
        rotate: isLaunching ? -5 : 0
      }}
      transition={{ 
        duration: 0.7, 
        ease: [0.34, 1.56, 0.64, 1]
      }}
    >
      <Rocket 
        className="w-7 h-7" 
        style={{ 
          color: '#A0FFD9',
          filter: 'drop-shadow(0 0 6px rgba(160, 255, 217, 0.6)) drop-shadow(0 0 12px rgba(208, 184, 255, 0.4))'
        }} 
        strokeWidth={2}
      />
      {/* Flame trail when launching */}
      {isLaunching && (
        <motion.div
          className="absolute -bottom-1 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div 
            className="w-2 h-3 rounded-full"
            style={{
              background: 'linear-gradient(to bottom, #FFB366, #FF6B6B)',
              filter: 'blur(1px)',
              opacity: 0.8
            }}
          />
        </motion.div>
      )}
    </motion.div>
  );
}

export default function GameTypeBreakdown({ gameTypeStats }) {
  const { darkMode } = useDarkMode();
  const { sourceLanguage } = useLanguage();
  const t = useTranslations(sourceLanguage);

  if (!sourceLanguage || !t) return null;
  if (Object.keys(gameTypeStats).length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="relative"
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
        className="relative rounded-[22px] sm:rounded-[26px] p-4 sm:p-6 transition-all duration-500 overflow-hidden"
        style={{
          background: darkMode 
                    ? 'linear-gradient(135deg, rgba(25, 18, 45, 0.75) 0%, rgba(20, 14, 38, 0.8) 100%)' 
                    : 'rgba(255, 255, 255, 0.12)',
          backdropFilter: 'blur(34px)',
          WebkitBackdropFilter: 'blur(34px)',
          boxShadow: darkMode
            ? '0 8px 20px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.05), inset 0 1px 2px rgba(255, 255, 255, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.04), inset 0 -2px 10px rgba(255, 255, 255, 0.08)'
            : '0 30px 60px -20px rgba(0, 0, 0, 0.10), 0 14px 28px -10px rgba(0, 0, 0, 0.06), inset 0 -2px 6px rgba(255, 255, 255, 0.10), inset 0 1px 2px rgba(255, 255, 255, 0.08)',
          border: '1px solid transparent',
          isolation: 'isolate'
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

        {/* Subtle color tint overlay - dark mode only */}
        {darkMode && (
          <div 
            className="absolute inset-0 rounded-[22px] sm:rounded-[26px] pointer-events-none"
            style={{
              background: 'linear-gradient(165deg, rgba(60, 80, 140, 0.12) 0%, rgba(80, 60, 130, 0.08) 50%, rgba(50, 70, 120, 0.1) 100%)',
            }}
          />
        )}

        {/* Inner Top Luminance - Soft internal glow - dark mode only */}
        {darkMode && (
          <div 
            className="absolute top-0 left-[5%] right-[5%] h-20 sm:h-32 rounded-t-[22px] sm:rounded-t-[26px] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(80, 170, 210, 0.06) 0%, transparent 70%)',
            }}
          />
        )}
      
        {/* Atmospheric gradient overlay */}
        {darkMode && (
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)'
            }}
          />
        )}
        
        <div className="relative z-10">
          <div className="relative mb-4 sm:mb-5">
            {/* Soft glow pocket behind header */}
            <div className="absolute left-0 top-0 w-full h-[40px] bg-white/5 blur-xl rounded-2xl pointer-events-none" />
            
            <div className="relative flex items-center gap-3">
                <PerformanceRocketIcon triggerBloom={Object.keys(gameTypeStats).length > 0} />
                <h2 className={`text-xl sm:text-2xl font-bold text-white ${!darkMode ? 'light-mode-heading' : ''}`}
                  style={{ textShadow: darkMode ? '0 2px 4px rgba(0, 0, 0, 0.5)' : '0 1px 2px rgba(0, 0, 0, 0.2)' }}>{t('game_performance')}</h2>
              </div>
            {/* Micro separation line */}
            <GlassDivider className="mt-3 sm:mt-3 mb-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-5">
            {Object.entries(gameTypeStats).map(([gameType, stats], index) => (
              <motion.div
                key={gameType}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.04,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <GameTypeCard gameType={gameType} stats={stats} darkMode={darkMode} t={t} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function GameTypeCard({ gameType, stats, darkMode, t }) {
  // Tiered visual hierarchy: flashcards > grammar > word_builder
  // Premium metallic glass aesthetic - unified dark mode | Caribbean light mode
  const getCardStyles = () => {
    if (gameType === 'flashcards') {
      return {
        border: '1px solid transparent',
        background: darkMode 
          ? 'linear-gradient(135deg, rgba(25, 18, 45, 0.75) 0%, rgba(20, 14, 38, 0.8) 100%)' 
          : 'linear-gradient(135deg, rgba(244, 114, 182, 0.42) 0%, rgba(255, 127, 80, 0.30) 100%)',
        backdropFilter: 'blur(32px)',
        WebkitBackdropFilter: 'blur(32px)',
        boxShadow: darkMode
          ? '0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(180, 140, 240, 0.2), inset 0 -1px 2px rgba(120, 80, 180, 0.15), inset 2px 0 6px rgba(160, 120, 220, 0.08)'
          : 'inset 0 1px 1.5px rgba(255, 255, 255, 0.18), inset 0 -2px 6px rgba(255, 255, 255, 0.14), 0 12px 26px rgba(0,0,0,0.06)'
      };
    } else if (gameType === 'grammar') {
      return {
        border: '1px solid transparent',
        background: darkMode 
          ? 'linear-gradient(135deg, rgba(25, 18, 45, 0.75) 0%, rgba(20, 14, 38, 0.8) 100%)' 
          : 'linear-gradient(135deg, rgba(192, 132, 252, 0.40) 0%, rgba(236, 72, 153, 0.26) 100%)',
        backdropFilter: 'blur(32px)',
        WebkitBackdropFilter: 'blur(32px)',
        boxShadow: darkMode
          ? '0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(180, 140, 240, 0.2), inset 0 -1px 2px rgba(120, 80, 180, 0.15), inset 2px 0 6px rgba(160, 120, 220, 0.08)'
          : 'inset 0 1px 1.5px rgba(255, 255, 255, 0.18), inset 0 -2px 6px rgba(255, 255, 255, 0.14), 0 12px 26px rgba(0,0,0,0.06)'
      };
    } else {
      // word_builder
      return {
        border: '1px solid transparent',
        background: darkMode 
          ? 'linear-gradient(135deg, rgba(25, 18, 45, 0.75) 0%, rgba(20, 14, 38, 0.8) 100%)' 
          : 'linear-gradient(135deg, rgba(251, 191, 36, 0.38) 0%, rgba(249, 115, 22, 0.24) 100%)',
        backdropFilter: 'blur(32px)',
        WebkitBackdropFilter: 'blur(32px)',
        boxShadow: darkMode
          ? '0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(180, 140, 240, 0.2), inset 0 -1px 2px rgba(120, 80, 180, 0.15), inset 2px 0 6px rgba(160, 120, 220, 0.08)'
          : 'inset 0 1px 1.5px rgba(255, 255, 255, 0.18), inset 0 -2px 6px rgba(255, 255, 255, 0.14), 0 12px 26px rgba(0,0,0,0.06)'
      };
    }
  };

  const cardStyles = getCardStyles();

  return (
    <div 
      className="rounded-[18px] sm:rounded-[22px] p-4 sm:p-5 relative overflow-hidden transition-transform duration-300 hover:-translate-y-0.5"
      style={{
        ...cardStyles,
        backdropFilter: 'blur(32px)',
        WebkitBackdropFilter: 'blur(32px)',
      }}
    >
           {!darkMode && (
             <div
               className="absolute inset-0 pointer-events-none rounded-[18px]"
               style={{ border: '1px solid rgba(255, 255, 255, 0.18)' }}
             />
           )}
           {!darkMode && (
             <div
               className="absolute inset-0 pointer-events-none rounded-[18px]"
               style={{ boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.25), inset 0 -3px 8px rgba(255, 255, 255, 0.22)' }}
             />
           )}
           {/* Metallic reflection overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none rounded-[18px]"
        style={{
          background: darkMode 
            ? 'linear-gradient(135deg, rgba(180, 160, 220, 0.08) 0%, transparent 40%, transparent 60%, rgba(140, 120, 200, 0.06) 100%)'
            : 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.015) 100%)'
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none rounded-[18px]"
        style={{
          boxShadow: darkMode
            ? 'inset 0 10px 20px rgba(0,0,0,0.10), inset 0 -10px 16px rgba(0,0,0,0.08)'
            : '0 10px 24px rgba(0,0,0,0.06)'
        }}
      />

      {/* Color halos and micro highlights for light mode */}
      {!darkMode && (
        <div
          className="absolute inset-0 pointer-events-none rounded-[18px]"
          style={{
            background:
              gameType === 'flashcards'
                ? 'radial-gradient(600px 200px at 0% 0%, rgba(255, 105, 180, 0.12), transparent 60%), radial-gradient(600px 200px at 100% 100%, rgba(255, 127, 80, 0.08), transparent 60%)'
                : gameType === 'grammar'
                ? 'radial-gradient(600px 200px at 0% 0%, rgba(192, 132, 252, 0.12), transparent 60%), radial-gradient(600px 200px at 100% 100%, rgba(236, 72, 153, 0.08), transparent 60%)'
                : 'radial-gradient(600px 200px at 0% 0%, rgba(251, 191, 36, 0.12), transparent 60%), radial-gradient(600px 200px at 100% 100%, rgba(249, 115, 22, 0.08), transparent 60%)'
          }}
        />
      )}


      
      <h3 className={`text-base sm:text-lg font-bold text-white capitalize mb-3 sm:mb-4 relative z-10 ${!darkMode ? 'light-mode-heading' : ''}`}
        style={{ textShadow: darkMode ? '0 2px 4px rgba(0, 0, 0, 0.4)' : '0 1px 2px rgba(0, 0, 0, 0.15)' }}>
        {t(gameType)}
      </h3>

      <div className="space-y-3 relative z-10">
        <div>
          <p className={`text-white/60 text-[11px] font-bold uppercase tracking-wide mb-0.5 ${!darkMode ? 'light-mode-subtext' : ''}`}
            style={{ textShadow: darkMode ? '0 1px 2px rgba(0, 0, 0, 0.3)' : 'none' }}>{t('games_played')}</p>
          <p className={`text-white font-bold text-2xl sm:text-[26px] ${!darkMode ? 'light-mode-stat' : ''}`}
            style={{ textShadow: darkMode ? '0 2px 4px rgba(0, 0, 0, 0.4)' : '0 1px 2px rgba(0, 0, 0, 0.15)' }}>{stats.played}</p>
        </div>
        <div>
          <p className={`text-white/60 text-[11px] font-bold uppercase tracking-wide mb-0.5 ${!darkMode ? 'light-mode-subtext' : ''}`}
            style={{ textShadow: darkMode ? '0 1px 2px rgba(0, 0, 0, 0.3)' : 'none' }}>{t('avg_score')}</p>
          <p className={`text-white font-bold text-2xl sm:text-[26px] ${!darkMode ? 'light-mode-stat' : ''}`}
            style={{ textShadow: darkMode ? '0 2px 4px rgba(0, 0, 0, 0.4)' : '0 1px 2px rgba(0, 0, 0, 0.15)' }}>{stats.avgScore}</p>
        </div>
        <div>
          <p className={`text-white/60 text-[11px] font-bold uppercase tracking-wide mb-0.5 ${!darkMode ? 'light-mode-subtext' : ''}`}
            style={{ textShadow: darkMode ? '0 1px 2px rgba(0, 0, 0, 0.3)' : 'none' }}>{t('best_score')}</p>
          <p className={`text-white font-bold text-2xl sm:text-[26px] ${!darkMode ? 'light-mode-stat' : ''}`}
            style={{ textShadow: darkMode ? '0 2px 4px rgba(0, 0, 0, 0.4)' : '0 1px 2px rgba(0, 0, 0, 0.15)' }}>{stats.bestScore}</p>
        </div>
        <div>
                                    <p className={`text-white/60 text-[11px] font-bold uppercase tracking-wide mb-1 ${!darkMode ? 'light-mode-subtext' : ''}`}
                                      style={{ textShadow: darkMode ? '0 1px 2px rgba(0, 0, 0, 0.3)' : 'none' }}>{t('accuracy')}</p>
                                    <div className="flex items-center gap-2">
                                      {/* Premium Glass Progress Bar */}
                                      <div 
                                        className="relative flex-1 h-2 rounded-full overflow-hidden"
                                        style={{
                                          background: darkMode 
                                            ? 'rgba(255, 255, 255, 0.06)' 
                                            : 'rgba(255, 255, 255, 0.12)',
                                          backdropFilter: 'blur(18px)',
                                          WebkitBackdropFilter: 'blur(18px)',
                                          border: darkMode 
                                            ? '1px solid rgba(255, 255, 255, 0.10)' 
                                            : '1px solid rgba(255, 255, 255, 0.18)',
                                          boxShadow: darkMode
                                            ? 'inset 0 1px 0 rgba(255, 255, 255, 0.22), inset 0 -1px 2px rgba(0, 0, 0, 0.08)'
                                            : 'inset 0 1px 0 rgba(255, 255, 255, 0.28), inset 0 -1px 2px rgba(0, 0, 0, 0.10)'
                                        }}
                                      >
                                        {/* Main progress fill - emerald gradient */}
                                        <motion.div
                                          className="absolute inset-y-0 left-0 rounded-full"
                                          style={{
                                            background: 'linear-gradient(90deg, #34d399 0%, #10b981 50%, #059669 100%)',
                                            boxShadow: darkMode
                                              ? '0 0 12px rgba(52, 211, 153, 0.5), 0 0 20px rgba(16, 185, 129, 0.3)'
                                              : '0 0 10px rgba(52, 211, 153, 0.4), 0 0 18px rgba(16, 185, 129, 0.25)'
                                          }}
                                          initial={{ width: 0 }}
                                          animate={{ width: `${stats.accuracy}%` }}
                                          transition={{ duration: 0.8, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                                        />
                                        
                                        {/* Internal glow overlay */}
                                        <motion.div
                                          className="absolute inset-y-0 left-0 rounded-full pointer-events-none"
                                          style={{
                                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, transparent 50%, rgba(255, 255, 255, 0.1) 100%)',
                                            filter: 'blur(0.5px)'
                                          }}
                                          initial={{ width: 0 }}
                                          animate={{ width: `${stats.accuracy}%` }}
                                          transition={{ duration: 0.8, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                                        />
                                        
                                        {/* Subtle living glow breathing */}
                                        <motion.div
                                          className="absolute inset-y-0 left-0 rounded-full pointer-events-none"
                                          style={{
                                            width: `${stats.accuracy}%`,
                                            background: 'transparent',
                                            boxShadow: darkMode
                                              ? '0 0 15px rgba(52, 211, 153, 0.35), 0 0 30px rgba(16, 185, 129, 0.2)'
                                              : '0 0 12px rgba(52, 211, 153, 0.3), 0 0 25px rgba(16, 185, 129, 0.18)'
                                          }}
                                          animate={{ opacity: [0.4, 0.7, 0.4] }}
                                          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                        />
                                      </div>
                                      <span className={`text-white font-bold text-base ${!darkMode ? 'light-mode-stat' : ''}`}
                                        style={{ textShadow: darkMode ? '0 1px 3px rgba(0, 0, 0, 0.4)' : '0 1px 2px rgba(0, 0, 0, 0.15)' }}>{stats.accuracy}%</span>
                                    </div>
                                  </div>
      </div>
    </div>
  );
}