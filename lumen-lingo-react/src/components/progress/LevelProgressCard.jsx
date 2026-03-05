import React from "react";
import { motion } from "framer-motion";
import { Star, Zap, Flame, CalendarDays } from "lucide-react";
import { useDarkMode } from "../theme/DarkModeContext";
import { useLanguage } from "../language/LanguageContext";
import { useTranslations } from "../utils/translations";
import GlassDivider from "../shared/GlassDivider";

export default function LevelProgressCard({ currentLevel, currentLevelProgress, userProfile }) {
  const { darkMode } = useDarkMode();
  const { sourceLanguage } = useLanguage();
  const t = useTranslations(sourceLanguage);

  if (!sourceLanguage || !t) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="mb-5 sm:mb-6 relative"
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
        className="relative rounded-[22px] sm:rounded-[26px] p-4 sm:p-5 overflow-hidden transition-all duration-500"
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
        {/* Subtle color tint overlay - dark mode only */}
        {darkMode && (
          <div 
            className="absolute inset-0 rounded-[22px] sm:rounded-[26px] pointer-events-none"
            style={{
              background: 'linear-gradient(165deg, rgba(60, 80, 140, 0.12) 0%, rgba(80, 60, 130, 0.08) 50%, rgba(50, 70, 120, 0.1) 100%)',
            }}
          />
        )}

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
        
        {/* Inner Top Luminance - Soft internal glow */}
        {darkMode && (
          <div 
            className="absolute top-0 left-[5%] right-[5%] h-20 sm:h-32 rounded-t-[22px] sm:rounded-t-[26px] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(80, 170, 210, 0.06) 0%, transparent 70%)',
            }}
          />
        )}


      
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <Star className="w-8 h-8 text-yellow-300" style={{ filter: 'drop-shadow(0 0 4px rgba(250, 204, 21, 0.5))' }} />
            <div>
              <h2 className={`text-xl sm:text-2xl font-bold text-white ${!darkMode ? 'light-mode-heading' : ''}`}
                style={{ textShadow: darkMode ? '0 2px 4px rgba(0, 0, 0, 0.5)' : '0 1px 2px rgba(0, 0, 0, 0.2)' }}>
                {t('level')} {currentLevel}
              </h2>
              <p className={`text-white/70 text-xs font-semibold ${!darkMode ? 'light-mode-subtext' : ''}`}
                style={{ textShadow: darkMode ? '0 1px 2px rgba(0, 0, 0, 0.3)' : 'none' }}>
                {currentLevelProgress}/100 XP {t('to_level')} {currentLevel + 1}
              </p>
            </div>
          </div>

          {/* XP Bar Container with Momentum Halo */}
          <div className="relative py-3">
            {/* Momentum Halo - now limited to filled progress */}
            <motion.div
              className="absolute inset-y-0 left-0 rounded-3xl pointer-events-none"
              style={{
                background: darkMode
                  ? 'radial-gradient(ellipse 120% 300% at 30% 50%, rgba(255, 211, 138, 0.25) 0%, rgba(255, 154, 99, 0.18) 35%, rgba(255, 182, 135, 0.08) 60%, transparent 80%)'
                  : 'radial-gradient(ellipse 120% 300% at 30% 50%, rgba(255, 211, 138, 0.35) 0%, rgba(255, 154, 99, 0.22) 35%, rgba(255, 182, 135, 0.10) 60%, transparent 80%)',
                filter: 'blur(10px)'
              }}
              initial={{ width: 0 }}
              animate={{
                width: `${currentLevelProgress}%`,
                opacity: [0.4, 0.75, 0.4]
              }}
              transition={{
                duration: 0.8,
                ease: [0.34, 1.56, 0.64, 1],
                opacity: { duration: 2.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 3.2 }
              }}
            />

            {/* Premium Glass Progress Bar */}
            <div 
              className="relative z-10 w-full h-3 sm:h-4 rounded-full overflow-hidden"
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
            {/* Main progress fill - golden gradient */}
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                background: 'linear-gradient(90deg, #fbbf24 0%, #f59e0b 40%, #ea580c 100%)',
                boxShadow: darkMode
                  ? '0 0 18px rgba(251, 191, 36, 0.5), 0 0 30px rgba(249, 115, 22, 0.3)'
                  : '0 0 15px rgba(251, 191, 36, 0.4), 0 0 25px rgba(249, 115, 22, 0.25)'
              }}
              initial={{ width: 0 }}
              animate={{ width: `${currentLevelProgress}%` }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            />
            
            {/* Internal glow overlay for alive feel */}
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, transparent 50%, rgba(255, 255, 255, 0.1) 100%)',
                filter: 'blur(0.5px)'
              }}
              initial={{ width: 0 }}
              animate={{ width: `${currentLevelProgress}%` }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            />
            
            {/* Subtle living glow breathing - confined to filled area */}
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full pointer-events-none"
              style={{
                background: 'transparent',
                boxShadow: darkMode
                  ? '0 0 25px rgba(251, 191, 36, 0.35), 0 0 50px rgba(249, 115, 22, 0.2)'
                  : '0 0 20px rgba(251, 191, 36, 0.3), 0 0 40px rgba(249, 115, 22, 0.18)'
              }}
              initial={{ width: 0 }}
              animate={{ width: `${currentLevelProgress}%`, opacity: [0.4, 0.7, 0.4] }}
              transition={{ width: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }, opacity: { duration: 2.5, repeat: Infinity, ease: "easeInOut" } }}
            />
            
          </div>
          </div>

          {/* Soft divider line */}
          <GlassDivider className="my-3 sm:my-4" />

          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            <div className="text-center">
              <Zap className="w-6 h-6 text-blue-300 mx-auto mb-1" style={{ filter: 'drop-shadow(0 0 4px rgba(96, 165, 250, 0.5))' }} />
                    <p className={`text-white/60 text-[11px] font-bold uppercase tracking-wide mb-1 ${!darkMode ? 'light-mode-subtext' : ''}`}
                      style={{ textShadow: darkMode ? '0 1px 2px rgba(0, 0, 0, 0.3)' : 'none' }}>{t('total_xp')}</p>
                    <p className={`text-white font-bold text-xl sm:text-2xl ${!darkMode ? 'light-mode-stat' : ''}`}
                      style={{ textShadow: darkMode ? '0 2px 4px rgba(0, 0, 0, 0.4)' : '0 1px 2px rgba(0, 0, 0, 0.15)' }}>{userProfile?.total_xp || 0}</p>
            </div>
            <div className="text-center">
              <Flame className="w-6 h-6 text-orange-300 mx-auto mb-1" style={{ filter: 'drop-shadow(0 0 4px rgba(251, 146, 60, 0.5))' }} />
                    <p className={`text-white/60 text-[11px] font-bold uppercase tracking-wide mb-1 ${!darkMode ? 'light-mode-subtext' : ''}`}
                      style={{ textShadow: darkMode ? '0 1px 2px rgba(0, 0, 0, 0.3)' : 'none' }}>{t('daily_streak')}</p>
                    <p className={`text-white font-bold text-xl sm:text-2xl ${!darkMode ? 'light-mode-stat' : ''}`}
                      style={{ textShadow: darkMode ? '0 2px 4px rgba(0, 0, 0, 0.4)' : '0 1px 2px rgba(0, 0, 0, 0.15)' }}>{userProfile?.daily_streak || 0}</p>
            </div>
            <div className="text-center">
              <CalendarDays className="w-6 h-6 text-green-300 mx-auto mb-1" style={{ filter: 'drop-shadow(0 0 4px rgba(74, 222, 128, 0.5))' }} />
                    <p className={`text-white/60 text-[11px] font-bold uppercase tracking-wide mb-1 ${!darkMode ? 'light-mode-subtext' : ''}`}
                      style={{ textShadow: darkMode ? '0 1px 2px rgba(0, 0, 0, 0.3)' : 'none' }}>{t('total_active_days')}</p>
                    <p className={`text-white font-bold text-xl sm:text-2xl ${!darkMode ? 'light-mode-stat' : ''}`}
                      style={{ textShadow: darkMode ? '0 2px 4px rgba(0, 0, 0, 0.4)' : '0 1px 2px rgba(0, 0, 0, 0.15)' }}>{userProfile?.total_active_days || 0}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}