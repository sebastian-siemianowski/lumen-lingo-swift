import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Trophy, Target, Crown } from "lucide-react";
import { useDarkMode } from "../theme/DarkModeContext";
import { useLanguage } from "../language/LanguageContext";
import { useTranslations } from "../utils/translations";

export default function StatsGrid({ gameStats }) {
  const { darkMode } = useDarkMode();
  const { sourceLanguage } = useLanguage();
  const t = useTranslations(sourceLanguage);

  if (!sourceLanguage || !t) {
    return null;
  }

  // Calculate best score and last score for comparison
  const safeGameStats = gameStats || [];
  const bestScore = safeGameStats.length > 0 ? Math.max(...safeGameStats.map(g => g?.score || 0)) : 0;
  const sortedByDate = [...safeGameStats].sort((a, b) => new Date(b?.created_date || 0) - new Date(a?.created_date || 0));
  const lastScore = sortedByDate.length > 0 ? (sortedByDate[0]?.score || 0) : 0;
  const scoreDiff = lastScore - bestScore;

  const avgAccuracy = safeGameStats.length > 0
    ? Math.round(safeGameStats.reduce((acc, game) => {
        const total = game?.total_questions || 1;
        const correct = game?.correct_answers || 0;
        return acc + ((correct / total) * 100);
      }, 0) / safeGameStats.length)
    : 0;

  const stats = [
    {
      icon: Trophy,
      title: t('total_games'),
      value: safeGameStats.length,
      subtitle: t('sessions_completed'),
      color: 'cyan',
      delay: 0.2,
      animDelay: 0.2
      },
      {
      icon: Target,
      title: t('avg_accuracy'),
      value: `${avgAccuracy}%`,
      subtitle: t('overall_performance'),
      color: 'green',
      delay: 0.3,
      animDelay: 0.7
      },
      {
      icon: Crown,
      title: t('best_score'),
      value: bestScore,
      subtitle: t('highest_single_game'),
      color: 'gold',
      delay: 0.4,
      animDelay: 1.2,
      lastScore: lastScore,
      scoreDiff: scoreDiff,
      showComparison: safeGameStats.length > 1
      }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-4 mb-5 sm:mb-4">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} darkMode={darkMode} t={t} />
      ))}
    </div>
  );
}

// Animated Icon with launch effect
function AnimatedStatIcon({ icon: Icon, color, isActive }) {
  const colorStyles = {
    cyan: { 
      color: '#67E8F9', 
      glow: 'drop-shadow(0 0 6px rgba(103, 232, 249, 0.6)) drop-shadow(0 0 12px rgba(34, 211, 238, 0.4))'
    },
    green: { 
      color: '#86EFAC', 
      glow: 'drop-shadow(0 0 6px rgba(134, 239, 172, 0.6)) drop-shadow(0 0 12px rgba(74, 222, 128, 0.4))'
    },
    gold: { 
      color: '#FCD34D', 
      glow: 'drop-shadow(0 0 6px rgba(252, 211, 77, 0.6)) drop-shadow(0 0 12px rgba(251, 191, 36, 0.4))'
    }
  };

  return (
    <motion.div
      className="relative"
      animate={{ 
        y: isActive ? -2 : 0,
        scale: isActive ? 1.1 : 1
      }}
      transition={{ 
        duration: 0.7, 
        ease: [0.34, 1.56, 0.64, 1]
      }}
    >
      <Icon 
        className="w-6 h-6 sm:w-7 sm:h-7" 
        style={{ 
          color: colorStyles[color].color,
          filter: colorStyles[color].glow
        }} 
        strokeWidth={2}
      />
    </motion.div>
  );
}

function StatCard({ icon: Icon, title, value, subtitle, color, delay, animDelay, darkMode, lastScore, scoreDiff, showComparison, t }) {
  const [isActive, setIsActive] = useState(false);
  
  // Trigger animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsActive(true), (delay * 1000) + 300);
    const resetTimer = setTimeout(() => setIsActive(false), (delay * 1000) + 1000);
    return () => {
      clearTimeout(timer);
      clearTimeout(resetTimer);
    };
  }, [delay]);

  const isPositive = scoreDiff >= 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="relative"
    >
      {/* ═══ LAYER 1: Outermost Foggy Aura - Teal/Cyan ═══ */}
      {darkMode && (
        <div 
          className="absolute -inset-4 sm:-inset-5 rounded-[28px] sm:rounded-[32px] pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 120% 60% at 50% -15%, rgba(45, 180, 200, 0.18) 0%, transparent 55%),
              radial-gradient(ellipse 50% 120% at -15% 50%, rgba(40, 160, 190, 0.14) 0%, transparent 50%),
              radial-gradient(ellipse 50% 120% at 115% 50%, rgba(40, 160, 190, 0.14) 0%, transparent 50%),
              radial-gradient(ellipse 100% 50% at 50% 115%, rgba(35, 140, 170, 0.1) 0%, transparent 50%)
            `,
            filter: 'blur(22px)',
          }}
        />
      )}

      {/* ═══ LAYER 2: Mid Foggy Glow - Purple/Violet ═══ */}
      {darkMode && (
        <div 
          className="absolute -inset-2 sm:-inset-3 rounded-[20px] sm:rounded-[26px] pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 100% 50% at 50% -8%, rgba(120, 80, 200, 0.28) 0%, transparent 60%),
              radial-gradient(ellipse 45% 100% at -8% 50%, rgba(100, 70, 180, 0.22) 0%, transparent 55%),
              radial-gradient(ellipse 45% 100% at 108% 50%, rgba(100, 70, 180, 0.22) 0%, transparent 55%),
              radial-gradient(ellipse 85% 45% at 50% 108%, rgba(90, 60, 160, 0.16) 0%, transparent 55%)
            `,
            filter: 'blur(14px)',
          }}
        />
      )}

      {/* ═══ LAYER 3: Inner Luminous Edge Glow ═══ */}
      {darkMode && (
        <div 
          className="absolute -inset-1 rounded-[18px] sm:rounded-[24px] pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 90% 40% at 50% -3%, rgba(80, 180, 220, 0.32) 0%, rgba(130, 100, 200, 0.2) 40%, transparent 70%),
              radial-gradient(ellipse 35% 90% at -3% 50%, rgba(70, 160, 200, 0.26) 0%, rgba(110, 80, 180, 0.16) 45%, transparent 65%),
              radial-gradient(ellipse 35% 90% at 103% 50%, rgba(70, 160, 200, 0.26) 0%, rgba(110, 80, 180, 0.16) 45%, transparent 65%),
              radial-gradient(ellipse 80% 35% at 50% 103%, rgba(60, 140, 180, 0.2) 0%, rgba(100, 70, 170, 0.12) 45%, transparent 65%)
            `,
            filter: 'blur(8px)',
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
                rgba(100, 200, 240, 0.45) 0%, 
                rgba(140, 120, 220, 0.25) 15%,
                rgba(100, 80, 180, 0.12) 30%,
                rgba(80, 60, 150, 0.08) 50%,
                rgba(100, 80, 180, 0.12) 70%,
                rgba(140, 120, 220, 0.2) 85%,
                rgba(80, 180, 220, 0.3) 100%
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
        className="rounded-[22px] sm:rounded-[26px] p-4 sm:p-5 transition-all duration-500 h-full relative overflow-hidden"
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
              <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <AnimatedStatIcon icon={Icon} color={color} isActive={isActive} />
            <h3 className={`text-base sm:text-lg font-bold text-white ${!darkMode ? 'light-mode-heading' : ''}`}
              style={{ textShadow: darkMode ? '0 2px 4px rgba(0, 0, 0, 0.4)' : '0 1px 2px rgba(0, 0, 0, 0.15)' }}>{title}</h3>
          </div>
          <p 
            className={`text-3xl sm:text-4xl font-black text-white mb-1 ${!darkMode ? 'light-mode-stat' : ''}`}
            style={{ 
              lineHeight: '1.1',
              minHeight: '2.5rem',
              display: 'flex',
              alignItems: 'baseline',
              textShadow: darkMode ? '0 2px 4px rgba(0, 0, 0, 0.5)' : '0 1px 2px rgba(0, 0, 0, 0.2)'
            }}
          >
            {value}
          </p>
          <p className={`text-white/70 text-sm font-medium ${showComparison ? 'mb-2' : 'mt-auto'} ${!darkMode ? 'light-mode-subtext' : ''}`}
            style={{ textShadow: darkMode ? '0 1px 2px rgba(0, 0, 0, 0.3)' : 'none' }}>{subtitle}</p>
          
          {/* Score Comparison Highlight */}
          {showComparison && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delay + 0.2 }}
              className="mt-auto pt-2 border-t border-white/10"
            >
              <p 
                className="text-xs font-medium flex items-center gap-1.5"
                style={{
                  background: isPositive
                    ? 'linear-gradient(90deg, #BCFFEE 0%, #89FFCA 100%)'
                    : 'linear-gradient(90deg, #FFB8CC 0%, #FFCBA6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  opacity: 0.85
                }}
              >
                <span>{t('last_score')} {lastScore}</span>
                <span className="inline-flex items-center">
                  ({isPositive ? '↑' : '↓'} {Math.abs(scoreDiff)} {isPositive ? t('new_best') : t('from_best')})
                </span>
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}