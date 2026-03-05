import React, { useState, useEffect, useRef, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, RotateCcw, ChevronDown, ChevronUp, Zap, Play, Snail, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { useTranslations } from "../utils/translations";
import { useLanguage } from "../language/LanguageContext";
import { useDarkMode } from "../theme/DarkModeContext";
import AnimatedCounter from "./AnimatedCounter";
import AnimatedProgressBar from "./AnimatedProgressBar";

// Slow Mode Context for sharing state across components
export const SlowModeContext = createContext({ slowMode: false, setSlowMode: () => {} });
export const useSlowMode = () => useContext(SlowModeContext);

export default function ExerciseHeader({
  icon: Icon,
  title,
  categoryName,
  gradient,
  backPath,
  currentIndex,
  totalCount,
  score,
  onReset,
  storageKey = 'exerciseHeaderCollapsed',
  defaultCollapsed = false,
  showProgress = false,
  progressPercentage = 0,
  correct = 0,
  wrong = 0,
  currentStreak = 0,
  showContinuousMode = false,
  continuousMode = false,
  onToggleContinuousMode = null,
  onSkipToEnd = null
}) {
  const { sourceLanguage } = useLanguage();
  const { darkMode } = useDarkMode();
  const t = useTranslations(sourceLanguage);
  const navigate = useNavigate();

  const [isCollapsed, setIsCollapsed] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved === null ? defaultCollapsed : saved === 'true';
    } catch {
      return defaultCollapsed;
    }
  });

  const [slowMode, setSlowMode] = useState(() => {
    try {
      const saved = localStorage.getItem('accessibilitySlowMode');
      return saved === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('accessibilitySlowMode', slowMode.toString());
      // Dispatch event so other components can listen
      window.dispatchEvent(new CustomEvent('slowModeChanged', { detail: { slowMode } }));
    } catch (error) {
      // Silently fail
    }
  }, [slowMode]);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, isCollapsed.toString());
    } catch (error) {
      // console.error('Error saving header state:', error);
    }
  }, [isCollapsed, storageKey]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleBackClick = () => {
    navigate(createPageUrl(backPath));
  };

  const displayTitle = categoryName || title;

  // Provide slow mode context to children
  const slowModeValue = { slowMode, setSlowMode };

  return (
    <SlowModeContext.Provider value={slowModeValue}>
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: slowMode ? 0.6 : 0.3 }}
      className={`backdrop-blur-2xl rounded-xl sm:rounded-2xl shadow-xl overflow-hidden transition-all duration-500`}
      style={{
        background: darkMode
          ? 'linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.06) 100%)'
          : 'linear-gradient(180deg, rgba(255, 182, 193, 0.18) 0%, rgba(218, 112, 214, 0.12) 50%, rgba(255, 218, 185, 0.10) 100%)',
        border: darkMode
          ? '0.75px solid rgba(168, 85, 247, 0.30)'
          : '0.75px solid rgba(255, 255, 255, 0.30)',
        boxShadow: darkMode
          ? '0 0 30px rgba(168, 85, 247, 0.2)'
          : '0 4px 20px rgba(0, 0, 0, 0.08)'
      }}
    >
      <AnimatePresence mode="wait">
        {isCollapsed ? (
          <motion.div
            key="collapsed"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="sm:hidden"
          >
            {/* Compact mobile collapsed: 36px height, reduced padding */}
            <div className="py-2 px-2.5">
              <div className="flex items-center gap-1.5">
                {/* Back button - larger tap target */}
                <button
                  onClick={handleBackClick}
                  type="button"
                  className={`w-8 h-8 flex items-center justify-center rounded-md border flex-shrink-0 ${
                    darkMode
                      ? 'bg-purple-500/20 border-purple-400/40 active:bg-purple-500/30'
                      : 'bg-white/10 border-white/20 active:bg-white/25'
                  }`}
                  style={{
                    touchAction: 'manipulation',
                    WebkitTapHighlightColor: 'transparent'
                  }}
                >
                  <ArrowLeft className="w-4 h-4 text-white" strokeWidth={2.5} />
                </button>
                
                {/* Progress bar - takes remaining space */}
                {showProgress && (
                  <div className="flex-1 min-w-0">
                    <AnimatedProgressBar percentage={progressPercentage} correct={correct} wrong={wrong} compact />
                  </div>
                )}
                
                {/* Stats inline */}
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  {showProgress && (
                    <>
                      <div className="flex items-center gap-0.5">
                        <div className={`w-1 h-1 rounded-full ${
                          darkMode ? 'bg-emerald-400' : 'bg-emerald-300'
                        }`} />
                        <span className="text-white/90 font-semibold text-[10px]">{correct}</span>
                      </div>
                      
                      <div className="flex items-center gap-0.5">
                        <div className={`w-1 h-1 rounded-full ${
                          darkMode ? 'bg-orange-400' : 'bg-orange-300'
                        }`} />
                        <span className="text-white/90 font-semibold text-[10px]">{wrong}</span>
                      </div>
                      
                      {currentStreak > 0 && (
                        <div className="flex items-center">
                          <Zap className={`w-2.5 h-2.5 ${
                            currentStreak >= 3 ? 'text-yellow-300' : 'text-white/70'
                          }`} fill={currentStreak >= 3 ? 'currentColor' : 'none'} strokeWidth={2} />
                          <span className={`font-bold text-[10px] ${
                            currentStreak >= 3 ? 'text-yellow-300' : 'text-white/70'
                          }`}>
                            {currentStreak}
                          </span>
                        </div>
                      )}
                    </>
                  )}
                  <span className="text-white/60 text-[10px]">{currentIndex + 1}/{totalCount}</span>
                </div>
                
                {/* Action buttons - same size as back button */}
                <div className="flex items-center gap-1 flex-shrink-0">
                  {onSkipToEnd && (
                    <motion.button
                      onClick={onSkipToEnd}
                      type="button"
                      className={`w-8 h-8 flex items-center justify-center rounded-md flex-shrink-0 ${
                        darkMode
                          ? 'bg-amber-500/25 border border-amber-400/40'
                          : 'bg-amber-400/25 border border-amber-300/40'
                      }`}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Trophy className="w-3.5 h-3.5 text-amber-300" strokeWidth={2.5} />
                    </motion.button>
                  )}
                  
                  {showContinuousMode && onToggleContinuousMode && (
                    <motion.button
                      onClick={onToggleContinuousMode}
                      type="button"
                      className={`w-8 h-8 flex items-center justify-center rounded-md border ${
                        continuousMode
                          ? darkMode
                            ? 'bg-cyan-500/30 border-cyan-400/50'
                            : 'bg-cyan-400/30 border-cyan-300/50'
                          : darkMode
                            ? 'bg-purple-500/20 border-purple-400/40'
                            : 'bg-white/10 border-white/20'
                      }`}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className={`w-3.5 h-3.5 ${continuousMode ? 'text-cyan-200' : 'text-white/70'}`} strokeWidth={2.5} fill={continuousMode ? 'currentColor' : 'none'} />
                    </motion.button>
                  )}
                  
                  <motion.button
                    onClick={onReset}
                    type="button"
                    className={`w-8 h-8 flex items-center justify-center rounded-md border ${
                      darkMode
                        ? 'bg-purple-500/20 border-purple-400/40'
                        : 'bg-white/10 border-white/20'
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                  </motion.button>
                  
                  <motion.button
                    onClick={toggleCollapse}
                    type="button"
                    className={`w-8 h-8 flex items-center justify-center rounded-md border flex-shrink-0 ${
                      darkMode
                        ? 'bg-purple-500/20 border-purple-400/40'
                        : 'bg-white/10 border-white/20'
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronDown className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="block sm:hidden"
          >
            <div className="p-1.5 px-2">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <button
                    onClick={handleBackClick}
                    type="button"
                    className={`w-7 h-7 flex items-center justify-center rounded-lg border flex-shrink-0 ${
                      darkMode
                        ? 'bg-purple-500/20 border-purple-400/40 active:bg-purple-500/30'
                        : 'bg-white/10 border-white/20 active:bg-white/25'
                    }`}
                    style={{
                      touchAction: 'manipulation',
                      WebkitTapHighlightColor: 'transparent'
                    }}
                  >
                    <ArrowLeft className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </button>
                </div>
                
                <div className="flex items-center gap-1">
                  {onSkipToEnd && (
                    <motion.button
                      onClick={onSkipToEnd}
                      type="button"
                      className={`w-7 h-7 flex items-center justify-center rounded-lg flex-shrink-0 ${
                        darkMode
                          ? 'bg-amber-500/25 border border-amber-400/40'
                          : 'bg-amber-400/25 border border-amber-300/40'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      title={t('skip_to_results')}
                    >
                      <Trophy className="w-4 h-4 text-amber-300" strokeWidth={2.5} />
                    </motion.button>
                  )}
                  
                  {showContinuousMode && onToggleContinuousMode && (
                    <motion.button
                      onClick={onToggleContinuousMode}
                      type="button"
                      className={`w-7 h-7 flex items-center justify-center rounded-lg border ${
                        continuousMode
                          ? darkMode
                            ? 'bg-cyan-500/30 border-cyan-400/50'
                            : 'bg-cyan-400/30 border-cyan-300/50'
                          : darkMode
                            ? 'bg-purple-500/20 border-purple-400/40'
                            : 'bg-white/10 border-white/20'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      >
                      <Play className={`w-3.5 h-3.5 ${continuousMode ? 'text-cyan-200' : 'text-white/70'}`} strokeWidth={2.5} fill={continuousMode ? 'currentColor' : 'none'} />
                    </motion.button>
                  )}
                  
                  <motion.button
                    onClick={onReset}
                    type="button"
                    className={`w-7 h-7 flex items-center justify-center rounded-lg border ${
                      darkMode
                        ? 'bg-purple-500/20 border-purple-400/40'
                        : 'bg-white/10 border-white/20'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    >
                    <RotateCcw className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                  </motion.button>
                  
                  <motion.button
                    onClick={toggleCollapse}
                    type="button"
                    className={`w-7 h-7 flex items-center justify-center rounded-lg border flex-shrink-0 ${
                      darkMode
                        ? 'bg-purple-500/20 border-purple-400/40'
                        : 'bg-white/10 border-white/20'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    >
                    <ChevronUp className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                  </motion.button>
                </div>
              </div>

              {showProgress && (
                <div className="mb-1.5">
                  <AnimatedProgressBar percentage={progressPercentage} correct={correct} wrong={wrong} />
                </div>
              )}

              <div className="flex items-center justify-between text-[10px]">
                <div className="flex items-center gap-1.5">
                  {showProgress && (
                    <>
                      <AnimatedCounter 
                        value={progressPercentage} 
                        className="text-white/60 font-medium text-[11px]"
                      />

                      <span className="text-white/60 text-[11px]">•</span>

                      <div className="flex items-center gap-0.5">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          darkMode ? 'bg-emerald-400 shadow-sm shadow-emerald-400/50' : 'bg-emerald-300 shadow-sm shadow-emerald-300/50'
                        }`} />
                        <span className="text-white/90 font-semibold text-[11px]">{correct}</span>
                      </div>

                      <div className="flex items-center gap-0.5">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          darkMode ? 'bg-orange-400 shadow-sm shadow-orange-400/50' : 'bg-orange-300 shadow-sm shadow-orange-300/50'
                        }`} />
                        <span className="text-white/90 font-semibold text-[11px]">{wrong}</span>
                      </div>

                      {currentStreak > 0 && (
                        <div className="flex items-center gap-0.5">
                          <Zap className={`w-2.5 h-2.5 ${
                            currentStreak >= 3 ? 'text-yellow-300' : 'text-white/70'
                          }`} fill={currentStreak >= 3 ? 'currentColor' : 'none'} strokeWidth={2} />
                          <span className={`font-bold text-[11px] ${
                            currentStreak >= 3 ? 'text-yellow-300' : 'text-white/70'
                          }`}>
                            {currentStreak}
                          </span>
                        </div>
                      )}
                    </>
                  )}
                  <span className="text-white/60 text-[11px]">{currentIndex + 1}/{totalCount}</span>
                  <span className="text-white/60 text-[11px]">•</span>
                  <p className="text-white font-semibold text-[11px] truncate max-w-[120px]">{displayTitle}</p>
                </div>
                <span className="text-white/90 font-bold">{score} XP</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop view */}
      <AnimatePresence mode="wait">
        {isCollapsed ? (
          <motion.div
            key="desktop-collapsed"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="hidden sm:block"
          >
            <div className="p-4 px-5">
              {showProgress && (
                <div className="mb-2.5 flex items-center gap-2">
                  <div className="flex-1">
                    <AnimatedProgressBar percentage={progressPercentage} correct={correct} wrong={wrong} />
                  </div>
                  {onSkipToEnd && (
                    <motion.button
                      onClick={onSkipToEnd}
                      type="button"
                      className={`w-7 h-7 flex items-center justify-center rounded-xl flex-shrink-0 transition-all duration-300 ${
                        darkMode
                          ? 'bg-amber-500/25 hover:bg-amber-500/35'
                          : 'bg-amber-400/25 hover:bg-amber-400/35'
                      }`}
                      style={{
                        border: '0.75px solid rgba(251, 191, 36, 0.45)'
                      }}
                      whileHover={{ 
                        scale: 1.08,
                        boxShadow: '0 0 18px rgba(251, 191, 36, 0.40)'
                      }}
                      whileTap={{ scale: 0.92 }}
                      title={t('skip_to_results')}
                    >
                      <Trophy className="w-3.5 h-3.5 text-amber-300" strokeWidth={2.5} />
                    </motion.button>
                  )}
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={handleBackClick}
                    type="button"
                    className={`p-2 rounded-xl border ${
                      darkMode
                        ? 'bg-purple-500/20 border-purple-400/40 hover:bg-purple-500/30'
                        : 'bg-white/10 border-white/20 hover:bg-white/20'
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </button>
                  
                  <div className="flex items-center gap-3">
                    {showProgress && (
                      <>
                        <AnimatedCounter 
                          value={progressPercentage} 
                          className="text-white/60 text-xs font-medium"
                        />
                        
                        <span className="text-white/60 text-xs">•</span>
                        
                        <motion.div 
                          className="flex items-center gap-1"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            darkMode ? 'bg-emerald-400 shadow-lg shadow-emerald-400/50' : 'bg-emerald-300 shadow-lg shadow-emerald-300/50'
                          }`} />
                          <span className="text-white/90 text-xs font-semibold">{correct}</span>
                        </motion.div>
                        
                        <motion.div 
                          className="flex items-center gap-1"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            darkMode ? 'bg-orange-400 shadow-lg shadow-orange-400/50' : 'bg-orange-300 shadow-lg shadow-orange-300/50'
                          }`} />
                          <span className="text-white/90 text-xs font-semibold">{wrong}</span>
                        </motion.div>
                        
                        {currentStreak > 0 && (
                          <motion.div 
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex items-center gap-1"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Zap className={`w-3.5 h-3.5 ${
                              currentStreak >= 3 ? 'text-yellow-300' : 'text-white/70'
                            }`} fill={currentStreak >= 3 ? 'currentColor' : 'none'} strokeWidth={2} />
                            <span className={`text-xs font-bold ${
                              currentStreak >= 3 ? 'text-yellow-300' : 'text-white/70'
                            }`}>
                              {currentStreak}
                            </span>
                          </motion.div>
                        )}
                      </>
                    )}
                    
                    <span className="text-white/60 text-xs font-medium">
                      {currentIndex + 1}/{totalCount}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {/* Slow Mode Toggle - Desktop Collapsed */}
                  <motion.button
                    onClick={() => setSlowMode(!slowMode)}
                    type="button"
                    className={`h-8 w-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      slowMode
                        ? darkMode
                          ? 'bg-amber-500/30 hover:bg-amber-500/40'
                          : 'bg-amber-400/30 hover:bg-amber-400/40'
                        : darkMode
                          ? 'bg-purple-500/20 hover:bg-purple-500/30'
                          : 'bg-white/10 hover:bg-white/20'
                    }`}
                    style={{
                      border: slowMode
                        ? '0.75px solid rgba(251, 191, 36, 0.50)'
                        : darkMode ? '0.75px solid rgba(168, 85, 247, 0.40)' : '0.75px solid rgba(255, 255, 255, 0.25)'
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: slowMode
                        ? '0 0 20px rgba(251, 191, 36, 0.40)'
                        : darkMode
                          ? '0 0 18px rgba(168, 85, 247, 0.35)'
                          : '0 0 18px rgba(255, 255, 255, 0.25)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    title={slowMode ? t('slow_mode_on') : t('slow_mode_off')}
                  >
                    <Snail 
                      className={`w-3.5 h-3.5 ${slowMode ? 'text-amber-200' : 'text-white/60'}`} 
                      strokeWidth={2} 
                    />
                  </motion.button>

                  {showContinuousMode && onToggleContinuousMode && (
                    <motion.button
                      onClick={onToggleContinuousMode}
                      type="button"
                      className={`h-8 px-3 rounded-xl flex items-center gap-1.5 transition-all duration-300 ${
                        continuousMode
                          ? darkMode
                            ? 'bg-cyan-500/30 hover:bg-cyan-500/40'
                            : 'bg-cyan-400/30 hover:bg-cyan-400/40'
                          : darkMode
                            ? 'bg-purple-500/20 hover:bg-purple-500/30'
                            : 'bg-white/10 hover:bg-white/20'
                      }`}
                      style={{
                        border: continuousMode
                          ? darkMode ? '0.75px solid rgba(34, 211, 238, 0.50)' : '0.75px solid rgba(34, 211, 238, 0.50)'
                          : darkMode ? '0.75px solid rgba(168, 85, 247, 0.40)' : '0.75px solid rgba(255, 255, 255, 0.25)'
                      }}
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: continuousMode
                          ? '0 0 20px rgba(34, 211, 238, 0.35)'
                          : darkMode
                            ? '0 0 18px rgba(168, 85, 247, 0.35)'
                            : '0 0 18px rgba(255, 255, 255, 0.25)'
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Play className={`w-3.5 h-3.5 ${continuousMode ? 'text-cyan-200' : 'text-white/70'}`} strokeWidth={2.5} fill={continuousMode ? 'currentColor' : 'none'} />
                      <span className={`font-semibold text-xs ${continuousMode ? 'text-cyan-200' : 'text-white/70'}`}>
                        {t('continuous')}
                      </span>
                    </motion.button>
                  )}
                  
                  <motion.button
                    onClick={onReset}
                    type="button"
                    className={`h-8 w-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      darkMode
                        ? 'bg-purple-500/20 hover:bg-purple-500/30'
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                    style={{
                      border: darkMode ? '0.75px solid rgba(168, 85, 247, 0.40)' : '0.75px solid rgba(255, 255, 255, 0.25)'
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: darkMode
                        ? '0 0 18px rgba(168, 85, 247, 0.35)'
                        : '0 0 18px rgba(255, 255, 255, 0.25)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                  </motion.button>
                  
                  <motion.button
                    onClick={toggleCollapse}
                    type="button"
                    className={`h-8 w-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      darkMode
                        ? 'bg-purple-500/20 hover:bg-purple-500/30'
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                    style={{
                      border: darkMode ? '0.75px solid rgba(168, 85, 247, 0.40)' : '0.75px solid rgba(255, 255, 255, 0.25)'
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: darkMode
                        ? '0 0 18px rgba(168, 85, 247, 0.35)'
                        : '0 0 18px rgba(255, 255, 255, 0.25)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronDown className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="desktop-expanded"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="hidden sm:block"
          >
            <div className="p-4 px-5">
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={handleBackClick}
                    type="button"
                    className={`p-2 rounded-xl border ${
                      darkMode
                        ? 'bg-purple-500/20 border-purple-400/40 hover:bg-purple-500/30'
                        : 'bg-white/10 border-white/20 hover:bg-white/20'
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </button>
                  
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center bg-gradient-to-br ${gradient}`}>
                      <Icon className="w-4 h-4 text-white" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h2 className="text-white font-bold text-base leading-tight">{displayTitle}</h2>
                      <p className="text-white/60 text-xs">
                        {t('question')} {currentIndex + 1} {t('of')} {totalCount}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  {/* Slow Mode Toggle */}
                  <motion.button
                    onClick={() => setSlowMode(!slowMode)}
                    type="button"
                    className={`h-8 w-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      slowMode
                        ? darkMode
                          ? 'bg-amber-500/30 hover:bg-amber-500/40'
                          : 'bg-amber-400/30 hover:bg-amber-400/40'
                        : darkMode
                          ? 'bg-purple-500/20 hover:bg-purple-500/30'
                          : 'bg-white/10 hover:bg-white/20'
                    }`}
                    style={{
                      border: slowMode
                        ? '0.75px solid rgba(251, 191, 36, 0.50)'
                        : darkMode ? '0.75px solid rgba(168, 85, 247, 0.40)' : '0.75px solid rgba(255, 255, 255, 0.25)'
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: slowMode
                        ? '0 0 20px rgba(251, 191, 36, 0.40)'
                        : darkMode
                          ? '0 0 18px rgba(168, 85, 247, 0.35)'
                          : '0 0 18px rgba(255, 255, 255, 0.25)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    title={slowMode ? t('slow_mode_on') : t('slow_mode_off')}
                  >
                    <Snail 
                      className={`w-4 h-4 ${slowMode ? 'text-amber-200' : 'text-white/60'}`} 
                      strokeWidth={2} 
                    />
                  </motion.button>

                  {showContinuousMode && onToggleContinuousMode && (
                    <motion.button
                      onClick={onToggleContinuousMode}
                      type="button"
                      className={`h-8 px-3.5 rounded-xl flex items-center gap-1.5 transition-all duration-300 ${
                        continuousMode
                          ? darkMode
                            ? 'bg-cyan-500/30 hover:bg-cyan-500/40'
                            : 'bg-cyan-400/30 hover:bg-cyan-400/40'
                          : darkMode
                            ? 'bg-purple-500/20 hover:bg-purple-500/30'
                            : 'bg-white/10 hover:bg-white/20'
                      }`}
                      style={{
                        border: continuousMode
                          ? darkMode ? '0.75px solid rgba(34, 211, 238, 0.50)' : '0.75px solid rgba(34, 211, 238, 0.50)'
                          : darkMode ? '0.75px solid rgba(168, 85, 247, 0.40)' : '0.75px solid rgba(255, 255, 255, 0.25)'
                      }}
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: continuousMode
                          ? '0 0 20px rgba(34, 211, 238, 0.35)'
                          : darkMode
                            ? '0 0 18px rgba(168, 85, 247, 0.35)'
                            : '0 0 18px rgba(255, 255, 255, 0.25)'
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Play className={`w-3.5 h-3.5 ${continuousMode ? 'text-cyan-200' : 'text-white/70'}`} strokeWidth={2.5} fill={continuousMode ? 'currentColor' : 'none'} />
                      <span className={`font-semibold text-xs ${continuousMode ? 'text-cyan-200' : 'text-white/70'}`}>
                        {t('continuous')}
                      </span>
                    </motion.button>
                  )}
                  
                  <motion.button
                    onClick={onReset}
                    type="button"
                    className={`h-8 px-3.5 rounded-xl flex items-center gap-1.5 transition-all duration-300 ${
                      darkMode
                        ? 'bg-purple-500/20 hover:bg-purple-500/30'
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                    style={{
                      border: darkMode ? '0.75px solid rgba(168, 85, 247, 0.40)' : '0.75px solid rgba(255, 255, 255, 0.25)'
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: darkMode
                        ? '0 0 18px rgba(168, 85, 247, 0.35)'
                        : '0 0 18px rgba(255, 255, 255, 0.25)'
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                    <span className="text-white font-semibold text-xs">{t('reset')}</span>
                  </motion.button>
                  
                  <motion.button
                    onClick={toggleCollapse}
                    type="button"
                    className={`h-8 px-3 rounded-xl flex items-center gap-1 transition-all duration-300 ${
                      darkMode
                        ? 'bg-purple-500/20 hover:bg-purple-500/30'
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                    style={{
                      border: darkMode ? '0.75px solid rgba(168, 85, 247, 0.40)' : '0.75px solid rgba(255, 255, 255, 0.25)'
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: darkMode
                        ? '0 0 18px rgba(168, 85, 247, 0.35)'
                        : '0 0 18px rgba(255, 255, 255, 0.25)'
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ChevronUp className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                  </motion.button>
                </div>
              </div>

              {showProgress && (
                <div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1">
                      <AnimatedProgressBar percentage={progressPercentage} correct={correct} wrong={wrong} />
                    </div>
                    {onSkipToEnd && (
                      <motion.button
                        onClick={onSkipToEnd}
                        type="button"
                        className={`w-8 h-8 flex items-center justify-center rounded-xl flex-shrink-0 transition-all duration-300 ${
                          darkMode
                            ? 'bg-amber-500/25 hover:bg-amber-500/35'
                            : 'bg-amber-400/25 hover:bg-amber-400/35'
                        }`}
                        style={{
                          border: '0.75px solid rgba(251, 191, 36, 0.45)'
                        }}
                        whileHover={{ 
                          scale: 1.08,
                          boxShadow: '0 0 18px rgba(251, 191, 36, 0.40)'
                        }}
                        whileTap={{ scale: 0.92 }}
                        title={t('skip_to_results')}
                      >
                        <Trophy className="w-4 h-4 text-amber-300" strokeWidth={2.5} />
                      </motion.button>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-3">
                      <AnimatedCounter 
                        value={progressPercentage} 
                        className="text-white/60 text-xs font-medium"
                      />
                      
                      <span className="text-white/60 text-xs">•</span>
                      
                      <motion.div 
                        className="flex items-center gap-1"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          darkMode ? 'bg-emerald-400 shadow-lg shadow-emerald-400/50' : 'bg-emerald-300 shadow-lg shadow-emerald-300/50'
                        }`} />
                        <span className="text-white/90 text-xs font-semibold">{correct}</span>
                      </motion.div>
                      
                      <motion.div 
                        className="flex items-center gap-1"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          darkMode ? 'bg-orange-400 shadow-lg shadow-orange-400/50' : 'bg-orange-300 shadow-lg shadow-orange-300/50'
                        }`} />
                        <span className="text-white/90 text-xs font-semibold">{wrong}</span>
                      </motion.div>
                      
                      {currentStreak > 0 && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="flex items-center gap-1"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Zap className={`w-3.5 h-3.5 ${
                            currentStreak >= 3 ? 'text-yellow-300' : 'text-white/70'
                          }`} fill={currentStreak >= 3 ? 'currentColor' : 'none'} strokeWidth={2} />
                          <span className={`text-xs font-bold ${
                            currentStreak >= 3 ? 'text-yellow-300' : 'text-white/70'
                          }`}>
                            {currentStreak}
                          </span>
                        </motion.div>
                      )}
                    </div>
                    
                    <span className="text-white/90 font-bold text-sm">{score} XP</span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
    </SlowModeContext.Provider>
  );
}