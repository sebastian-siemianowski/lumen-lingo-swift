import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Star, CheckCircle, ChevronLeft, ChevronRight, Grid, List, Sprout, Flame, Award, Sparkles, AlertCircle, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { base44 } from "@/api/base44Client";
import { getGameContent } from "../utils/contentLoader";
import { useLanguage } from "../language/LanguageContext";
import { useTranslations } from "../utils/translations";
import { useDarkMode } from "../theme/DarkModeContext";
import { getLocalData, setLocalData } from "../utils/offlineSync";

import FavoriteButton from "./FavoriteButton";
import FilterCompletedButton from "./FilterCompletedButton";

// ARCHITECTURE IMPROVEMENT: Use Set for O(1) lookup instead of Array
const useFavoriteSet = (favoriteCategories) => {
  return useMemo(() => new Set(favoriteCategories), [favoriteCategories]);
};

// ARCHITECTURE IMPROVEMENT: Memoize level info to avoid recalculation
const LEVEL_INFO_CACHE = {
  beginner: {
    text: 'easy_start',
    Icon: Sprout,
    gradient: 'from-lime-400 to-green-500',
    bgGradient: 'from-lime-400/45 to-green-500/45',
    borderColor: 'border-lime-300/70',
    glowColor: 'shadow-lime-400/25',
    hoverGlow: 'shadow-lime-400/40',
    textColor: 'text-white',
    starColor: 'text-lime-100 fill-lime-100',
    stars: 1
  },
  intermediate: {
    text: 'challenge',
    Icon: Flame,
    gradient: 'from-orange-400 to-rose-500',
    bgGradient: 'from-orange-400/45 to-rose-500/45',
    borderColor: 'border-orange-300/70',
    glowColor: 'shadow-orange-400/25',
    hoverGlow: 'shadow-orange-400/40',
    textColor: 'text-white',
    starColor: 'text-amber-100 fill-amber-100',
    stars: 2
  },
  advanced: {
    text: 'expert',
    Icon: Award,
    gradient: 'from-purple-500 to-fuchsia-600',
    bgGradient: 'from-purple-500/50 to-fuchsia-600/50',
    borderColor: 'border-fuchsia-300',
    glowColor: 'shadow-purple-500/30',
    hoverGlow: 'shadow-purple-500/50',
    textColor: 'text-white',
    starColor: 'text-fuchsia-200 fill-fuchsia-200',
    stars: 3
  },
  default: {
    text: '', // Should be translated with actual category.level if default is used
    Icon: Star,
    gradient: 'from-gray-400 to-slate-500',
    bgGradient: 'from-gray-500/20 to-slate-500/20',
    borderColor: 'border-gray-400/40',
    glowColor: 'shadow-gray-400/20',
    hoverGlow: 'shadow-gray-400/30',
    textColor: 'text-gray-100',
    starColor: 'text-gray-300 fill-gray-300',
    stars: 1
  }
};

// Memoized loading skeleton component
const CategorySkeleton = React.memo(() => (
  <div className="bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 p-3 sm:p-6 animate-pulse">
    <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/10"></div>
      <div className="flex-1 space-y-2">
        <div className="h-5 sm:h-6 bg-white/10 rounded-lg w-3/4"></div>
        <div className="h-3 sm:h-4 bg-white/10 rounded-lg w-full"></div>
      </div>
    </div>
    <div className="space-y-2 mb-3">
      <div className="flex justify-between">
        <div className="h-3 bg-white/10 rounded w-24"></div>
        <div className="h-3 bg-white/10 rounded w-12"></div>
      </div>
      <div className="h-2 sm:h-2.5 bg-white/10 rounded-full"></div>
    </div>
    <div className="flex gap-2">
      <div className="h-8 bg-white/10 rounded-full w-24"></div>
    </div>
  </div>
));

// ARCHITECTURE IMPROVEMENT: Separate component for category rendering
const CategoryCard = React.memo(({
  categoryKey,
  category,
  isFavorite,
  progress,
  onToggleFavorite,
  onSelect,
  t,
  levelInfo,
  viewMode = 'grid',
  darkMode = false,
  parallaxOffset = 0 // Parallax Y offset based on position
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLevelHovered, setIsLevelHovered] = useState(false);
  const [isCompletedHovered, setIsCompletedHovered] = useState(false);

  const IconComponent = category.icon;

  // NEW: Determine if we're in list mode for smaller sizing
  const isListMode = viewMode === 'list';

  return (
    <motion.div
      onClick={() => onSelect(categoryKey, category)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={false}
      whileHover={{
        y: -6,
        scale: 1.01,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      }}
      whileTap={{ 
        scale: 0.985,
        filter: 'brightness(0.96)',
        transition: { type: "spring", stiffness: 500, damping: 30 }
      }}
      className={`group relative bg-white/18 rounded-xl sm:rounded-2xl border border-white/20 cursor-pointer transition-all duration-300 hover:border-white/40 hover:bg-white/22 overflow-hidden ${
        isListMode ? 'p-2 sm:p-3' : 'p-2 sm:p-4'
      }`}
      style={{
        backdropFilter: 'blur(28px)',
        WebkitBackdropFilter: 'blur(28px)',
        ...({
          transformOrigin: "center center",
          transform: `translateY(${parallaxOffset}px)`,
          boxShadow: isHovered 
            ? `
              0 12px 28px -8px rgba(0, 0, 0, 0.25),
              0 0 50px 25px rgba(255, 255, 255, 0.08),
              inset 0 1px 1px rgba(255, 255, 255, 0.1),
              inset 0 -1px 2px rgba(0, 0, 0, 0.05)
            ` 
            : `
              0 8px 20px -6px rgba(0, 0, 0, 0.2),
              0 0 40px 20px rgba(255, 255, 255, 0.06),
              inset 0 1px 1px rgba(255, 255, 255, 0.08),
              inset 0 -1px 2px rgba(0, 0, 0, 0.03)
            `
        })
      }}

    >
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-15 rounded-xl sm:rounded-2xl`}
        initial={false}
        animate={{ opacity: isHovered ? 0.15 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <AnimatePresence>
        {isHovered && (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0, x: 20, y: 20 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: [20, 40, 60],
                y: [20, 10, 0]
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
              className="absolute top-4 right-16 pointer-events-none"
            >
              <Sparkles className="w-4 h-4 text-yellow-300/60" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0, x: 30, y: 40 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: [30, 20, 10],
                y: [40, 50, 60]
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 1.5, delay: 0.3, repeat: Infinity, repeatDelay: 0.5 }}
              className="absolute bottom-8 left-8 pointer-events-none"
            >
              <Sparkles className="w-3 h-3 text-cyan-300/60" />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10">
        <motion.div
          className="scale-75 sm:scale-100"
          initial={false}
          animate={{ scale: isHovered ? [1, 1.05, 1] : 1 }}
          transition={{ duration: 0.3 }}
        >
          <FavoriteButton
            isFavorite={isFavorite}
            onToggle={(e) => onToggleFavorite(categoryKey, category.name, e)}
            categoryName={category.name}
          />
        </motion.div>
      </div>

      <div className={`flex items-start gap-3 sm:gap-4 relative z-[1] ${isListMode ? 'mb-1.5 sm:mb-2' : 'mb-2 sm:mb-3'}`}>
        <motion.div
          className={`relative flex items-center justify-center flex-shrink-0 ${
            isListMode ? 'w-10 h-10 sm:w-12 sm:h-12' : 'w-12 h-12 sm:w-16 sm:h-16'
          }`}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 600, damping: 30 }}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${category.color} ${
              isListMode ? 'rounded-lg sm:rounded-xl' : 'rounded-xl sm:rounded-2xl'
            }`}
            style={{
              boxShadow: `
                0 4px 12px ${category.color.includes('purple') ? 'rgba(147, 51, 234, 0.3)' :
                  category.color.includes('lime') ? 'rgba(132, 204, 22, 0.3)' :
                  category.color.includes('orange') ? 'rgba(249, 115, 22, 0.3)' :
                  category.color.includes('blue') ? 'rgba(59, 130, 246, 0.3)' :
                  category.color.includes('pink') ? 'rgba(236, 72, 153, 0.3)' :
                  category.color.includes('cyan') ? 'rgba(6, 182, 212, 0.3)' :
                  category.color.includes('emerald') ? 'rgba(16, 185, 129, 0.3)' :
                  category.color.includes('yellow') ? 'rgba(234, 179, 8, 0.3)' :
                  category.color.includes('red') ? 'rgba(239, 68, 68, 0.3)' :
                  'rgba(147, 51, 234, 0.3)'},
                0 2px 4px rgba(0, 0, 0, 0.1)
              `
            }}
          />

          <div
            className={`absolute inset-0 ${isListMode ? 'rounded-lg sm:rounded-xl' : 'rounded-xl sm:rounded-2xl'}`}
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.05) 100%)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          />

          <div
            className={`absolute inset-x-0 top-0 h-1/2 ${isListMode ? 'rounded-t-lg sm:rounded-t-xl' : 'rounded-t-xl sm:rounded-t-2xl'}`}
            style={{
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, transparent 100%)'
            }}
          />

          <div
            className={`absolute inset-0 ${isListMode ? 'rounded-lg sm:rounded-xl' : 'rounded-xl sm:rounded-2xl'}`}
            style={{
              border: '1.5px solid rgba(255, 255, 255, 0.5)',
              boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.6)'
            }}
          />

          {IconComponent ? (
            <motion.div
              className="relative z-10"
              animate={{
                scale: isHovered ? 1.1 : 1,
                opacity: isHovered ? 1 : 0.95
              }}
              transition={{ type: "spring", stiffness: 600, damping: 25 }}
            >
              <IconComponent
                className={isListMode ? 'w-5 h-5 sm:w-6 sm:h-6 text-white' : 'w-6 h-6 sm:w-8 sm:h-8 text-white'}
                strokeWidth={2.5}
                style={{
                  filter: isHovered 
                    ? 'drop-shadow(0 2px 6px rgba(255, 255, 255, 0.3)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.25))'
                    : 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.25))'
                }}
              />
            </motion.div>
          ) : (
            <div className={`${isListMode ? 'w-5 h-5 sm:w-6 sm:h-6' : 'w-6 h-6 sm:w-8 sm:h-8'} bg-white/20 rounded-lg relative z-10`} />
          )}
        </motion.div>

        <div className="flex-1 min-w-0 pr-6 sm:pr-8">
          <motion.h3
            className={`font-bold truncate ${
              isListMode ? 'text-sm sm:text-sm mb-0.5' : 'text-sm sm:text-base mb-1'
            } ${!darkMode ? 'light-mode-category-heading' : 'text-white'}`}
            style={{ lineHeight: 1.2 }}
            animate={{ color: isHovered ? 'rgb(254, 240, 138)' : 'rgb(255, 255, 255)' }}
            transition={{ duration: 0.3 }}
          >
            {category.name}
          </motion.h3>
          <motion.p
            className={`line-clamp-2 ${
              isListMode ? 'text-xs sm:text-xs' : 'text-xs sm:text-sm'
            } ${!darkMode ? 'text-white/70 light-mode-category-text' : 'text-white/70'}`}
            animate={{ opacity: isHovered ? 1 : 0.7 }}
            transition={{ duration: 0.3 }}
          >
            {category.description}
          </motion.p>
        </div>
      </div>

      <div className={`space-y-1.5 relative z-[1] ${isListMode ? 'mb-1.5 sm:mb-2' : 'mb-2 sm:mb-2.5'}`}>
        <div className="flex justify-between items-center text-xs sm:text-sm">
          <span className={!darkMode ? 'text-white/70 light-mode-category-text' : 'text-white/70'}>
            {progress.mastered} / {progress.total} {t('mastered')}
          </span>
          <motion.span
            className={`font-bold tabular-nums ${!darkMode ? 'text-white light-mode-category-text' : 'text-white'}`}
            animate={{ 
              scale: isHovered ? 1.05 : 1,
              color: isHovered ? 'rgb(254, 240, 138)' : 'rgb(255, 255, 255)'
            }}
            transition={{ duration: 0.2 }}
          >
            {progress.percentage}%
          </motion.span>
        </div>
        
        {/* Premium Glass Progress Bar */}
        <div 
          className="relative w-full h-2.5 sm:h-3 rounded-full overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.06)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            border: '1px solid rgba(255, 255, 255, 0.10)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.22), inset 0 -1px 2px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.12)'
          }}
        >
          {/* Main progress fill - golden adventure gradient */}
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{ 
              background: 'linear-gradient(90deg, #fbbf24 0%, #f59e0b 40%, #ea580c 100%)',
              boxShadow: '0 0 18px rgba(251, 191, 36, 0.5), 0 0 30px rgba(249, 115, 22, 0.3)'
            }}
            initial={{ width: 0 }}
            animate={{ width: `${progress.percentage}%` }}
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
            animate={{ width: `${progress.percentage}%` }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          />
          
          {/* Subtle living glow breathing */}
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full pointer-events-none"
            style={{
              width: `${progress.percentage}%`,
              background: 'transparent',
              boxShadow: '0 0 25px rgba(251, 191, 36, 0.35), 0 0 50px rgba(249, 115, 22, 0.2)'
            }}
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 flex-wrap relative z-[1]">
        {category.level && (
          <motion.div
            onHoverStart={(e) => {
              e.stopPropagation();
              setIsLevelHovered(true);
            }}
            onHoverEnd={(e) => {
              e.stopPropagation();
              setIsLevelHovered(false);
            }}
            whileHover={{
              scale: 1.05,
              y: -3,
              transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] }
            }}
            whileTap={{
              scale: 0.96,
              transition: { duration: 0.1 }
            }}
            className={`relative inline-flex items-center gap-2 rounded-full backdrop-blur-sm overflow-hidden border ${levelInfo.borderColor} shadow-lg transition-shadow duration-300 cursor-pointer ${
              isListMode ? 'px-2.5 py-1 sm:px-3 sm:py-1.5' : 'px-3 py-1.5 sm:px-4 sm:py-2'
            }`}
            style={{
              boxShadow: isLevelHovered
                ? `0 10px 30px ${levelInfo.hoverGlow.replace('shadow-', 'rgba(').replace('/40', ', 0.45)')}, 0 0 0 2px rgba(255, 255, 255, 0.1)`
                : `0 4px 12px ${levelInfo.glowColor.replace('shadow-', 'rgba(').replace('/25', ', 0.25)')}`
            }}
          >
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${levelInfo.bgGradient} rounded-full`}
              animate={{
                opacity: isLevelHovered ? [1, 0.85, 1] : 1
              }}
              transition={{
                duration: 1.5,
                repeat: isLevelHovered ? Infinity : 0,
                ease: "easeInOut"
              }}
            />

            <div className="relative flex items-center gap-2">
              <motion.div
                animate={{
                  scale: isLevelHovered ? 1.15 : 1
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
              >
                <levelInfo.Icon className="w-4 h-4 sm:w-4 sm:h-4 text-white drop-shadow-md" strokeWidth={2.5} />
              </motion.div>

              <span className={`font-bold text-xs sm:text-sm drop-shadow-sm ${
                !darkMode ? `${levelInfo.textColor} light-mode-category-label` : levelInfo.textColor
              }`}>
                {t(levelInfo.text)}
              </span>

              <div className="flex gap-0.5">
                {[...Array(levelInfo.stars)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: isLevelHovered ? 1.12 : 1,
                      filter: isLevelHovered
                        ? `drop-shadow(0 0 4px rgba(255, 255, 255, ${0.6 + i * 0.2}))`
                        : 'drop-shadow(0 0 0px rgba(255, 255, 255, 0))'
                    }}
                    transition={{
                      duration: 0.3,
                      delay: isLevelHovered ? i * 0.08 : 0,
                      ease: [0.34, 1.56, 0.64, 1]
                    }}
                  >
                    <Star className={`w-3 h-3 ${levelInfo.starColor} drop-shadow-sm`} />
                  </motion.div>
                ))}
              </div>
            </div>

            <AnimatePresence>
              {isLevelHovered && (
                <motion.div
                  className="absolute inset-0 rounded-full"
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{
                    x: '100%',
                    opacity: [0, 0.4, 0]
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)'
                  }}
                />
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {progress.percentage === 100 && (
          <motion.div
            onHoverStart={(e) => {
              e.stopPropagation();
              setIsCompletedHovered(true);
            }}
            onHoverEnd={(e) => {
              e.stopPropagation();
              setIsCompletedHovered(false);
            }}
            whileHover={{
              scale: 1.05,
              y: -3,
              transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] }
            }}
            whileTap={{
              scale: 0.96,
              transition: { duration: 0.1 }
            }}
            className={`relative inline-flex items-center gap-2 rounded-full backdrop-blur-sm overflow-hidden border border-emerald-300/70 shadow-lg transition-shadow duration-300 cursor-pointer ${
              isListMode ? 'px-2.5 py-1 sm:px-3 sm:py-1.5' : 'px-3 py-1.5 sm:px-4 sm:py-2'
            }`}
            style={{
              boxShadow: isCompletedHovered
                ? '0 10px 30px rgba(16, 185, 129, 0.45), 0 0 0 2px rgba(255, 255, 255, 0.1)'
                : '0 4px 12px rgba(16, 185, 129, 0.25)'
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-400/45 to-green-500/45 rounded-full"
              animate={{
                opacity: isCompletedHovered ? [1, 0.85, 1] : 1
              }}
              transition={{
                duration: 1.5,
                repeat: isCompletedHovered ? Infinity : 0,
                ease: "easeInOut"
              }}
            />

            <div className="relative flex items-center gap-2">
              <motion.div
                animate={{
                  scale: isCompletedHovered ? 1.15 : 1,
                  rotate: isCompletedHovered ? 180 : 0
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
              >
                <CheckCircle className="w-4 h-4 sm:w-4 sm:h-4 text-white drop-shadow-md" strokeWidth={2.5} />
              </motion.div>

              <span className={`font-bold text-xs sm:text-sm drop-shadow-sm ${
                !darkMode ? 'text-white light-mode-category-label' : 'text-white'
              }`}>
                {t('completed_status')}
              </span>
            </div>

            <AnimatePresence>
              {isCompletedHovered && (
                <motion.div
                  className="absolute inset-0 rounded-full"
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{
                    x: '100%',
                    opacity: [0, 0.4, 0]
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)'
                  }}
                />
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}, (prevProps, nextProps) => {
  return (
    prevProps.categoryKey === nextProps.categoryKey &&
    prevProps.isFavorite === nextProps.isFavorite &&
    prevProps.progress.percentage === nextProps.progress.percentage &&
    prevProps.category === nextProps.category &&
    prevProps.viewMode === nextProps.viewMode &&
    prevProps.darkMode === nextProps.darkMode &&
    prevProps.parallaxOffset === nextProps.parallaxOffset
  );
});

// Validation function for data structure
const validateContent = (content, gameType, sourceLanguage, targetLanguage) => {
  if (!content) {
    console.error(`❌ [Data Validation] No content for ${gameType} ${sourceLanguage}→${targetLanguage}`);
    return false;
  }

  let hasErrors = false;

  Object.entries(content).forEach(([categoryKey, category]) => {
    const missingKeys = [];
    
    // Check required category properties
    if (!category.name) missingKeys.push('name');
    if (!category.description) missingKeys.push('description');
    if (!category.icon) missingKeys.push('icon');
    if (!category.color) missingKeys.push('color');
    if (!category.level) missingKeys.push('level');
    
    if (gameType === 'flashcards') {
      if (!category.words || !Array.isArray(category.words)) {
        console.error(`❌ [Data Validation] Category "${categoryKey}" in ${sourceLanguage}→${targetLanguage} flashcards is missing "words" array`);
        hasErrors = true;
      } else if (category.words.length === 0) {
        console.warn(`⚠️ [Data Validation] Category "${categoryKey}" in ${sourceLanguage}→${targetLanguage} flashcards has empty "words" array`);
      } else {
        // Validate first word structure as sample
        const sampleWord = category.words[0];
        const wordMissingKeys = [];
        if (!sampleWord.id) wordMissingKeys.push('id');
        if (!sampleWord[sourceLanguage]) wordMissingKeys.push(sourceLanguage);
        if (!sampleWord[targetLanguage]) wordMissingKeys.push(targetLanguage);
        
        if (wordMissingKeys.length > 0) {
          console.error(`❌ [Data Validation] Words in category "${categoryKey}" (${sourceLanguage}→${targetLanguage}) missing keys: ${wordMissingKeys.join(', ')}`);
          hasErrors = true;
        }
      }
    } else if (gameType === 'grammar') {
      if (!category.questions || !Array.isArray(category.questions)) {
        console.error(`❌ [Data Validation] Category "${categoryKey}" in ${sourceLanguage}→${targetLanguage} grammar is missing "questions" array`);
        hasErrors = true;
      }
    } else if (gameType === 'wordbuilder') {
      if (!category.words || !Array.isArray(category.words)) {
        console.error(`❌ [Data Validation] Category "${categoryKey}" in ${sourceLanguage}→${targetLanguage} wordbuilder is missing "words" array`);
        hasErrors = true;
      }
    }
    
    if (missingKeys.length > 0) {
      console.error(`❌ [Data Validation] Category "${categoryKey}" in ${sourceLanguage}→${targetLanguage} ${gameType} missing keys: ${missingKeys.join(', ')}`);
      hasErrors = true;
    }
  });

  if (!hasErrors) {
    console.log(`✅ [Data Validation] ${sourceLanguage}→${targetLanguage} ${gameType} data structure is valid`);
  }

  return !hasErrors;
};


export default function CategorySelector({ gameType, title, onSelectCategory, preloadedContent, hideCompleted, onToggleHideCompleted }) {
  const { sourceLanguage, targetLanguage } = useLanguage();
  const { darkMode } = useDarkMode();
  const t = useTranslations(sourceLanguage);
  
  // FIXED: Load mastered using offlineSync helper
  const masteredData = useMemo(() => {
    try {
      const cacheKey = `mastered_${gameType}_${sourceLanguage}_${targetLanguage}`;
      const data = getLocalData(cacheKey);
      return data || {};
    } catch {
      return {};
    }
  }, [gameType, sourceLanguage, targetLanguage]);
  
  // FIXED: Load favorites using offlineSync helper
  const [favoriteCategories, setFavoriteCategories] = useState(() => {
    try {
      const cacheKey = `favorites_${gameType}_${sourceLanguage}_${targetLanguage}`;
      const data = getLocalData(cacheKey);
      return Array.isArray(data) ? data : [];
    } catch (error) {
      return [];
    }
  });
  
  const favoriteSet = useFavoriteSet(favoriteCategories);

  // State variables re-defined/reordered as per outline
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState(() => {
    try {
      return localStorage.getItem('categoryViewMode') || 'grid';
    } catch {
      return 'grid';
    }
  });
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [loading, setLoading] = useState(false); // Changed to false as content is loaded synchronously
  const [direction, setDirection] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Retained state variables
  // const [hoveredCard, setHoveredCard] = useState(null); // Not used in this version, could be removed.
  const [hoveredPage, setHoveredPage] = useState(null);
  const [toastCount, setToastCount] = useState(0);
  const toastTimerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // const [apiError, setApiError] = useState(false); // Removed as per outline

  // New itemsPerPage constant, replaces old state and useEffect for it
  const itemsPerPage = useMemo(() => {
    if (viewMode === 'grid') {
      return window.innerWidth < 640 ? 3 : 6; // 3 on mobile, 6 on desktop for grid
    }
    return 3; // 3 for both mobile and desktop in list mode
  }, [viewMode]);

  // Save viewMode to localStorage
  useEffect(() => {
    localStorage.setItem('categoryViewMode', viewMode);
  }, [viewMode]);

  // ARCHITECTURE IMPROVEMENT: Use preloaded content if available
  const content = useMemo(() => {
    // validate content structure
    if (preloadedContent) {
      validateContent(preloadedContent, gameType, sourceLanguage, targetLanguage);
    }
    return preloadedContent;
  }, [preloadedContent, gameType, sourceLanguage, targetLanguage]);


  const contentAvailable = useMemo(() => {
    const available = content !== null && content !== undefined && Object.keys(content || {}).length > 0;
    return available;
  }, [content]);

  // ARCHITECTURE IMPROVEMENT: Only convert to array once
  const allCategories = useMemo(() => {
    if (!content) {
      return [];
    }
    const result = Object.entries(content);
    return result;
  }, [content]);

  // ARCHITECTURE IMPROVEMENT: Progress calculation function (memoized)
  const calculateProgress = useCallback((categoryKey, category) => {
    const masteredIds = masteredData[categoryKey] || [];
    let total;

    if (gameType === 'flashcards' || gameType === 'wordbuilder') {
      total = category.words?.length || 0;
    } else if (gameType === 'grammar') {
      total = category.questions?.length || 0;
    } else {
      total = category.words?.length || 0;
    }

    const mastered = masteredIds.length;
    const percentage = total > 0 ? Math.min(Math.round((mastered / total) * 100), 100) : 0;

    return { mastered: Math.min(mastered, total), total, percentage };
  }, [masteredData, gameType]);

  // ARCHITECTURE IMPROVEMENT: Filter by favorites first
  const filteredByFavorites = useMemo(() => {
    if (!showOnlyFavorites) return allCategories;
    
    return allCategories.filter(([key]) => favoriteSet.has(key));
  }, [allCategories, showOnlyFavorites, favoriteSet]);

  // Apply all other filters (like hideCompleted) and calculate progress
  const categoriesForPagination = useMemo(() => {
    let result = filteredByFavorites.map(([key, category]) => ({
      key,
      category,
      progress: calculateProgress(key, category),
      isFavorite: favoriteSet.has(key),
      levelInfo: LEVEL_INFO_CACHE[category.level] || { ...LEVEL_INFO_CACHE.default, text: category.level }
    }));

    if (hideCompleted) {
      result = result.filter(item => item.progress.percentage < 100);
    }
    return result;
  }, [filteredByFavorites, hideCompleted, calculateProgress, favoriteSet]);

  const totalPages = Math.ceil(categoriesForPagination.length / itemsPerPage);
  // Adjusted startIndex for 1-based currentPage
  const startIndex = (currentPage - 1) * itemsPerPage;

  // ARCHITECTURE IMPROVEMENT: Only process visible categories
  const displayedCategories = useMemo(() => {
    return categoriesForPagination.slice(startIndex, startIndex + itemsPerPage);
  }, [categoriesForPagination, startIndex, itemsPerPage]);

  useEffect(() => {
    // Reset to page 1 when viewMode or favorites filter or hideCompleted changes
    setCurrentPage(1);
  }, [showOnlyFavorites, viewMode, hideCompleted]);

  useEffect(() => {
    if (categoriesForPagination.length > 0 && totalPages > 0 && currentPage > totalPages) { // Changed from >= to > for 1-based index
      setCurrentPage(Math.max(1, totalPages)); // Adjust to 1-based indexing
    } else if (categoriesForPagination.length === 0 && currentPage !== 1) { // If no filtered items, default to page 1
      setCurrentPage(1);
    }
  }, [totalPages, currentPage, categoriesForPagination.length]);

  const showToastMessage = useCallback((message, isAdding) => {
    // Clear existing timer
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }

    if (isAdding) {
      setToastCount(prev => prev + 1);
      setToastMessage(t('added_to_favorites'));
    } else {
      setToastCount(prev => Math.max(0, prev - 1));
      setToastMessage(t('removed_from_favorites'));
    }

    setShowToast(true);

    // Auto-hide after 1.5 seconds
    toastTimerRef.current = setTimeout(() => {
      setShowToast(false);
      setToastCount(0);
    }, 1500);
  }, [t]);

  // FIXED: Use setLocalData instead of direct localStorage
  const toggleFavorite = useCallback(async (categoryKey, categoryName, e) => {
    e.stopPropagation();

    // Update state immediately using functional update
    setFavoriteCategories(prev => {
      const safePrev = Array.isArray(prev) ? prev : [];
      const isFavorited = safePrev.includes(categoryKey);
      const shouldAdd = !isFavorited;
      const newFavorites = shouldAdd
        ? [...safePrev, categoryKey]
        : safePrev.filter(c => c !== categoryKey);

      // FIXED: Use setLocalData which handles preview_ prefix
      const cacheKey = `favorites_${gameType}_${sourceLanguage}_${targetLanguage}`;
      setLocalData(cacheKey, newFavorites);

      return newFavorites;
    });

    // Show toast
    showToastMessage(categoryName, !favoriteSet.has(categoryKey)); // use favoriteSet to determine if adding or removing
  }, [gameType, sourceLanguage, targetLanguage, showToastMessage, favoriteSet]);

  const goToPage = useCallback((newPage) => {
    if (newPage !== currentPage && newPage >= 1 && newPage <= totalPages) { // Adjusted for 1-based indexing
      setDirection(newPage > currentPage ? 1 : -1);
      setCurrentPage(newPage);
    }
  }, [currentPage, totalPages]);

  const containerVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.85,
      filter: "blur(4px)"
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        x: { type: "tween", duration: 0.5, ease: [0.4, 0, 0.2, 1] },
        opacity: { duration: 0.4 },
        scale: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
        filter: { duration: 0.3 }
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.85,
      filter: "blur(4px)",
      transition: {
        x: { type: "tween", duration: 0.5, ease: [0.4, 0, 0.2, 1] },
        opacity: { duration: 0.4 },
        scale: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
        filter: { duration: 0.3 }
      }
    })
  };

  if (!contentAvailable) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 max-w-md text-center"
        >
          <AlertCircle className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">{t('content_not_available')}</h2>
          <p className="text-white/70 mb-6 leading-relaxed">
            <span className="font-semibold text-white">{title}</span>
            {' '}
            {t('not_available_for_pair')}
            {' '}
            <span className="font-semibold text-white">
              {t(sourceLanguage)} → {t(targetLanguage)}
            </span>
          </p>
          <p className="text-white/60 text-sm mb-6 leading-relaxed">
            {t('currently_available_only')}
          </p>
          <Link to={createPageUrl("Dashboard")}>
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('back_to_dashboard')}
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
  }

  if (loading) { // Show skeletons if loading is explicitly true (e.g., if content fetch becomes async)
    return (
      <div className="min-h-screen p-3 sm:p-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-8">
            <Link
              to={createPageUrl("Dashboard")}
              className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 text-white hover:bg-white/20 transition-all flex-shrink-0"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <div className="min-w-0">
              <h1 className="text-xl sm:text-3xl font-bold text-white tracking-tight truncate">
                {title}
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
              >
                <CategorySkeleton />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Enhanced text readability styles for light mode */}
      <style jsx global>{`
        .light-mode-category-heading {
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
          font-weight: 700;
        }
        
        .light-mode-category-text {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
        }
        
        .light-mode-category-subtext {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);
        }
        
        .light-mode-category-label {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);
          font-weight: 600;
        }
      `}</style>

      <AnimatePresence>
        {showToast && (
          <motion.div
            key="favorite-toast-wrapper"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-6 left-0 right-0 z-50 pointer-events-none flex justify-center px-4"
          >
            <div 
              className="px-6 py-3 rounded-xl shadow-2xl border backdrop-blur-xl"
              style={{
                background: 'linear-gradient(135deg, rgba(246, 92, 112, 0.95) 0%, rgba(250, 115, 131, 0.95) 35%, rgba(253, 163, 168, 0.95) 70%, rgba(252, 174, 177, 0.95) 100%)',
                borderColor: 'rgba(255, 255, 255, 0.4)'
              }}
            >
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, -10, 10, 0]
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                >
                  <Heart
                    className="w-5 h-5 text-white fill-white drop-shadow-lg"
                    strokeWidth={2.5}
                  />
                </motion.div>
                <p className="font-bold text-sm text-white drop-shadow-sm">
                  {toastMessage}
                  {toastCount > 1 && ` (${toastCount})`}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ambient soft noise layer - removes gradient banding */}
      <div 
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          opacity: 0.015,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay'
        }}
      />

      <div className="min-h-screen flex flex-col">
        {/* Custom Scrollbar Styles */}
        <style>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }

          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, rgba(168, 85, 247, 0.6), rgba(236, 72, 153, 0.6));
            border-radius: 10px;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, rgba(168, 85, 247, 0.8), rgba(236, 72, 153, 0.8));
          }

          /* Firefox */
          .custom-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: rgba(168, 85, 247, 0.6) rgba(255, 255, 255, 0.05);
          }
        `}</style>

        <div className="max-w-7xl mx-auto w-full flex flex-col px-3 sm:px-6 py-3">

          {/* Mobile: Only filter buttons, no title - REDUCED MARGINS */}
          <div className="sm:hidden flex items-center gap-2 justify-between mb-2 mt-2 flex-shrink-0">
            {/* Back button - left side */}
            <Link
              to={createPageUrl("Dashboard")}
              className="flex items-center gap-2 p-2.5 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 text-white hover:bg-white/20 transition-all flex-shrink-0 hover:scale-105 active:scale-95"
            >
              <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
            </Link>

            {/* Right side buttons */}
            <div className="flex items-center gap-1.5">
              <motion.button
                onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="relative p-2.5 rounded-xl overflow-hidden"
                style={{
                  background: showOnlyFavorites
                    ? 'linear-gradient(135deg, #f65c70 0%, #FA7383 35%, #FDA3A8 70%, #FCAEB1 100%)'
                    : 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: showOnlyFavorites
                    ? '1px solid rgba(255, 255, 255, 0.7)'
                    : '1px solid rgba(255, 255, 255, 0.25)',
                  boxShadow: showOnlyFavorites
                    ? '0 4px 12px rgba(246, 92, 112, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
                    : '0 2px 6px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
                }}
                aria-label={t('show_favorites_only')}
              >
                <motion.div
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{
                    background: 'linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.4) 50%, transparent 70%)'
                  }}
                  initial={{ x: '-150%', opacity: 0 }}
                  whileHover={{ 
                    x: '150%',
                    opacity: 1,
                    transition: { duration: 0.7, ease: "easeInOut" }
                  }}
                />

                <motion.div
                  className="relative z-10"
                  animate={{
                    scale: showOnlyFavorites ? 1 : 1,
                    rotate: 0
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: showOnlyFavorites ? [0, -10, 10, 0] : 0
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.34, 1.56, 0.64, 1]
                  }}
                >
                  <Heart
                    className={`w-5 h-5 transition-all duration-300 ${
                      showOnlyFavorites 
                        ? 'fill-white text-white' 
                        : 'text-white/75'
                    }`}
                    strokeWidth={2.5}
                    style={{
                      filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.25))'
                    }}
                  />
                </motion.div>
              </motion.button>

              {onToggleHideCompleted && (
                <FilterCompletedButton 
                  isActive={hideCompleted}
                  onToggle={onToggleHideCompleted}
                />
              )}
            </div>
          </div>

          {/* Desktop: Title and buttons aligned on same row - REDUCED MARGINS */}
          <div className="hidden sm:flex items-center justify-between gap-4 mb-3 mt-3 flex-shrink-0">
            {/* Left: Back button and title */}
            <div className="flex items-center gap-4">
              <Link
                to={createPageUrl("Dashboard")}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 text-white hover:bg-white/20 transition-all flex-shrink-0 hover:scale-105 active:scale-95"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="min-w-0 relative">
                {/* Micro-glow ring behind title */}
                <div 
                  className="absolute -top-[5px] left-0 w-full h-[40px] pointer-events-none"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    filter: 'blur(40px)'
                  }}
                />
                <h1 className={`text-3xl font-bold tracking-tight truncate relative ${
                  !darkMode ? 'text-white light-mode-category-heading' : 'text-white'
                }`}>
                  {title}
                </h1>
                <p className={`text-sm ${
                  !darkMode ? 'text-white/75 light-mode-category-subtext' : 'text-white/75'
                }`}>
                  {showOnlyFavorites
                    ? `${categoriesForPagination.length} ${t('favorite')} ${t('categories').toLowerCase()}`
                    : `${categoriesForPagination.length} ${t('categories')}`
                  }
                </p>
              </div>
            </div>

            {/* Right: Filter buttons */}
            <div className="flex items-center gap-1.5">
              <motion.button
                onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="relative p-3 rounded-xl overflow-hidden"
                style={{
                  background: showOnlyFavorites
                    ? 'linear-gradient(135deg, #f65c70 0%, #FA7383 35%, #FDA3A8 70%, #FCAEB1 100%)'
                    : 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: showOnlyFavorites
                    ? '1px solid rgba(255, 255, 255, 0.7)'
                    : '1px solid rgba(255, 255, 255, 0.25)',
                  boxShadow: showOnlyFavorites
                    ? '0 0 15px rgba(255, 255, 255, 0.2), 0 4px 12px rgba(246, 92, 112, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
                    : '0 2px 6px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
                }}
                aria-label={t('show_favorites_only')}
              >
                <motion.div
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{
                    background: 'linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.4) 50%, transparent 70%)'
                  }}
                  initial={{ x: '-150%', opacity: 0 }}
                  whileHover={{ 
                    x: '150%',
                    opacity: 1,
                    transition: { duration: 0.7, ease: "easeInOut" }
                  }}
                />

                <motion.div
                  className="relative z-10"
                  animate={{
                    scale: showOnlyFavorites ? 1 : 1,
                    rotate: 0
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: showOnlyFavorites ? [0, -10, 10, 0] : 0
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.34, 1.56, 0.64, 1]
                  }}
                >
                  <Heart
                    className={`w-[22px] h-[22px] transition-all duration-300 ${
                      showOnlyFavorites 
                        ? 'fill-white text-white' 
                        : 'text-white/75'
                    }`}
                    strokeWidth={2.5}
                    style={{
                      filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.25))'
                    }}
                  />
                </motion.div>
              </motion.button>

              {onToggleHideCompleted && (
                <FilterCompletedButton 
                  isActive={hideCompleted}
                  onToggle={onToggleHideCompleted}
                />
              )}

              <motion.button
                onClick={() => setViewMode('grid')}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="p-3 rounded-xl relative overflow-hidden"
                style={{
                  background: viewMode === 'grid' 
                    ? 'rgba(255, 255, 255, 0.18)' 
                    : 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  boxShadow: viewMode === 'grid'
                    ? '0 0 15px rgba(255, 255, 255, 0.2), 0 2px 8px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                    : '0 2px 6px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
                }}
                aria-label={t('grid_view')}
              >
                <div
                  className="absolute inset-x-0 top-0 h-1/2 rounded-t-xl pointer-events-none"
                  style={{
                    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%)'
                  }}
                />
                
                <motion.div
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{
                    background: 'linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)'
                  }}
                  initial={{ x: '-150%', opacity: 0 }}
                  whileHover={{ 
                    x: '150%',
                    opacity: 1,
                    transition: { duration: 0.7, ease: "easeInOut" }
                  }}
                />

                <motion.div
                  className="relative z-10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                >
                  <Grid 
                    className={`w-[22px] h-[22px] transition-colors duration-300 ${
                      viewMode === 'grid' ? 'text-white' : 'text-white/75'
                    }`}
                    strokeWidth={2.5}
                    style={{
                      filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.15))'
                    }}
                  />
                </motion.div>
              </motion.button>
              
              <motion.button
                onClick={() => setViewMode('list')}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="p-3 rounded-xl relative overflow-hidden"
                style={{
                  background: viewMode === 'list' 
                    ? 'rgba(255, 255, 255, 0.18)' 
                    : 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  boxShadow: viewMode === 'list'
                    ? '0 0 15px rgba(255, 255, 255, 0.2), 0 2px 8px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                    : '0 2px 6px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
                }}
                aria-label={t('list_view')}
              >
                <div
                  className="absolute inset-x-0 top-0 h-1/2 rounded-t-xl pointer-events-none"
                  style={{
                    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%)'
                  }}
                />
                
                <motion.div
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{
                    background: 'linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)'
                  }}
                  initial={{ x: '-150%', opacity: 0 }}
                  whileHover={{ 
                    x: '150%',
                    opacity: 1,
                    transition: { duration: 0.7, ease: "easeInOut" }
                  }}
                />

                <motion.div
                  className="relative z-10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                >
                  <List 
                    className={`w-[22px] h-[22px] transition-colors duration-300 ${
                      viewMode === 'list' ? 'text-white' : 'text-white/75'
                    }`}
                    strokeWidth={2.5}
                    style={{
                      filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.15))'
                    }}
                  />
                </motion.div>
              </motion.button>
            </div>
          </div>

          {viewMode === 'grid' ? (
            <div className="flex flex-col">
              {/* Content area */}
              <div>
                <AnimatePresence mode="wait" initial={false} custom={direction}>
                  <motion.div
                    key={`${currentPage}-${showOnlyFavorites}-${hideCompleted}`}
                    custom={direction}
                    variants={containerVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3"
                  >
                    {displayedCategories.length === 0 ? (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`col-span-full text-center text-lg py-12 ${
                          !darkMode ? 'text-white/60 light-mode-category-text' : 'text-white/60'
                        }`}
                      >
                        {showOnlyFavorites
                          ? t('no_favorite_categories')
                          : (hideCompleted ? t('all_categories_completed') : t('no_categories_found'))
                        }
                      </motion.div>
                    ) : (
                      <AnimatePresence mode="popLayout">
                        {displayedCategories.map((item) => (
                          <motion.div
                            key={item.key}
                            layout={showOnlyFavorites || hideCompleted}
                            initial={false}
                            exit={(showOnlyFavorites || hideCompleted) ? {
                              opacity: 0,
                              scale: 0.85,
                              y: 20,
                              filter: "blur(4px)",
                              transition: { 
                                duration: 0.5,
                                ease: [0.4, 0, 0.2, 1],
                                opacity: { duration: 0.4 },
                                filter: { duration: 0.3 }
                              }
                            } : false}
                            transition={{
                              layout: {
                                duration: 0.5,
                                ease: [0.4, 0, 0.2, 1]
                              }
                            }}
                          >
                            <CategoryCard
                              categoryKey={item.key}
                              category={item.category}
                              isFavorite={item.isFavorite}
                              progress={item.progress}
                              levelInfo={item.levelInfo}
                              onToggleFavorite={toggleFavorite}
                              onSelect={onSelectCategory}
                              t={t}
                              viewMode="grid"
                              darkMode={darkMode}
                              parallaxOffset={(() => {
                                const idx = displayedCategories.indexOf(item);
                                const row = Math.floor(idx / 3);
                                const totalRows = Math.ceil(displayedCategories.length / 3);
                                const midRow = (totalRows - 1) / 2;
                                const rowDiff = row - midRow;
                                return rowDiff * (scrollY * 0.008);
                              })()}
                            />
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <motion.div
                  className="flex items-center justify-center gap-2 sm:gap-3 py-2 mt-3 border-t border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05, duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <motion.button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="relative group p-3 sm:p-4 bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 text-white disabled:opacity-20 disabled:cursor-not-allowed overflow-hidden shadow-lg"
                    whileHover={currentPage === 1 ? {} : { scale: 1.12, backgroundColor: "rgba(255, 255, 255, 0.14)" }}
                    whileTap={currentPage === totalPages ? {} : { scale: 0.94 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    aria-label={t('previous_page')}
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" strokeWidth={2.5} />
                  </motion.button>

                  <motion.div 
                    className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 relative overflow-hidden"
                    style={{
                      boxShadow: '0 30px 60px -20px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.08)'
                    }}
                  >
                    {/* Glass curvature highlight */}
                    <div className="absolute top-0 inset-x-0 h-[22%] bg-white/10 rounded-t-2xl blur-sm pointer-events-none" />
                    
                    {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }

                      const isActive = currentPage === pageNum;
                      const isHoveredNum = hoveredPage === pageNum;

                      return (
                        <motion.button
                          key={`page-grid-${pageNum}`}
                          onClick={() => goToPage(pageNum)}
                          onHoverStart={() => setHoveredPage(pageNum)}
                          onHoverEnd={() => setHoveredPage(null)}
                          className="relative flex items-center justify-center font-semibold text-xs sm:text-sm"
                          style={{
                            width: isActive ? '42px' : '34px',
                            height: isActive ? '42px' : '34px',
                            willChange: 'transform'
                          }}
                          animate={{
                            width: isActive ? (window.innerWidth < 640 ? 38 : 42) : (window.innerWidth < 640 ? 30 : 34),
                            height: isActive ? (window.innerWidth < 640 ? 38 : 42) : (window.innerWidth < 640 ? 30 : 34),
                            color: isActive ? '#000' : isHoveredNum ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.6)'
                          }}
                          whileHover={isActive ? { scale: 1.06 } : { scale: 1.15 }}
                          whileTap={{ scale: 0.88 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          aria-label={`${t('go_to_page')} ${pageNum}`}
                        >
                          {isActive && (
                            <motion.div
                              layoutId="activePageBg-grid"
                              className="absolute inset-0 rounded-[14px] shadow-xl"
                              style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)' }}
                              transition={{ 
                                type: "tween",
                                duration: 0.5,
                                ease: [0.24, 1.40, 0.36, 1.00]
                              }}
                            />
                          )}

                          {!isActive && isHoveredNum && (
                            <motion.div
                              className="absolute inset-0 rounded-[14px] bg-white/10"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            />
                          )}

                          <span className="relative z-10 select-none">
                            {pageNum}
                          </span>
                        </motion.button>
                      );
                    })}
                  </motion.div>

                  <motion.button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="relative group p-3 sm:p-4 bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 text-white disabled:opacity-20 disabled:cursor-not-allowed overflow-hidden shadow-lg"
                    whileHover={currentPage === totalPages ? {} : { scale: 1.12, backgroundColor: "rgba(255, 255, 255, 0.14)" }}
                    whileTap={currentPage === totalPages ? {} : { scale: 0.94 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    aria-label={t('next_page')}
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" strokeWidth={2.5} />
                  </motion.button>
                </motion.div>
              )}

              {totalPages <= 1 && displayedCategories.length > 0 && (
                <motion.div
                  className="flex items-center justify-center py-2 mt-3 border-t border-white/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="px-4 py-2 bg-white/5 backdrop-blur-2xl rounded-full border border-white/10">
                    <span className="text-white/70 text-sm font-medium">1</span>
                  </div>
                </motion.div>
              )}
            </div>
          ) : (
            <div className="flex flex-col">
              <div>
                {/* UPDATED: Changed to AnimatePresence with same animation as grid mode */}
                <AnimatePresence mode="wait" initial={false} custom={direction}>
                  <motion.div
                    key={`${currentPage}-${showOnlyFavorites}-${hideCompleted}-list`}
                    custom={direction}
                    variants={containerVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="flex flex-col gap-2 sm:gap-2.5"
                  >
                    {displayedCategories.length === 0 ? (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-center text-lg py-12 ${
                          !darkMode ? 'text-white/60 light-mode-category-text' : 'text-white/60'
                        }`}
                      >
                        {showOnlyFavorites
                          ? t('no_favorite_categories')
                          : (hideCompleted ? t('all_categories_completed') : t('no_categories_found'))
                        }
                      </motion.div>
                    ) : (
                      <AnimatePresence mode="popLayout">
                        {displayedCategories.map((item) => (
                          <motion.div
                            key={item.key}
                            layout={showOnlyFavorites || hideCompleted}
                            initial={false}
                            exit={(showOnlyFavorites || hideCompleted) ? {
                              opacity: 0,
                              x: -30,
                              scale: 0.9,
                              filter: "blur(3px)",
                              transition: { 
                                duration: 0.5,
                                ease: [0.4, 0, 0.2, 1],
                                opacity: { duration: 0.4 },
                                filter: { duration: 0.3 }
                              }
                            } : false}
                            transition={{
                              layout: {
                                duration: 0.5,
                                ease: [0.4, 0, 0.2, 1]
                              }
                            }}
                          >
                            <CategoryCard
                              categoryKey={item.key}
                              category={item.category}
                              isFavorite={item.isFavorite}
                              progress={item.progress}
                              levelInfo={item.levelInfo}
                              onToggleFavorite={toggleFavorite}
                              onSelect={onSelectCategory}
                              t={t}
                              viewMode="list"
                              darkMode={darkMode}
                              parallaxOffset={(() => {
                                const idx = displayedCategories.indexOf(item);
                                const midIdx = (displayedCategories.length - 1) / 2;
                                const idxDiff = idx - midIdx;
                                return idxDiff * (scrollY * 0.006);
                              })()}
                            />
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {totalPages > 1 && (
                <motion.div
                  className="flex items-center justify-center gap-2 sm:gap-3 py-2 mt-3 border-t border-white/10 flex-shrink-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05, duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <motion.button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="relative group p-3 sm:p-4 bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 text-white disabled:opacity-20 disabled:cursor-not-allowed overflow-hidden shadow-lg"
                    whileHover={currentPage === 1 ? {} : { scale: 1.12, backgroundColor: "rgba(255, 255, 255, 0.14)" }}
                    whileTap={currentPage === totalPages ? {} : { scale: 0.94 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    aria-label={t('previous_page')}
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" strokeWidth={2.5} />
                  </motion.button>

                  <motion.div 
                    className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 relative overflow-hidden"
                    style={{
                      boxShadow: '0 30px 60px -20px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.08)'
                    }}
                  >
                    {/* Glass curvature highlight */}
                    <div className="absolute top-0 inset-x-0 h-[22%] bg-white/10 rounded-t-2xl blur-sm pointer-events-none" />
                    
                    {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }

                      const isActive = currentPage === pageNum;
                      const isHoveredNum = hoveredPage === pageNum;

                      return (
                        <motion.button
                          key={`page-list-${pageNum}`}
                          onClick={() => goToPage(pageNum)}
                          onHoverStart={() => setHoveredPage(pageNum)}
                          onHoverEnd={() => setHoveredPage(null)}
                          className="relative flex items-center justify-center font-semibold text-xs sm:text-sm"
                          style={{
                            width: isActive ? '42px' : '34px',
                            height: isActive ? '42px' : '42px',
                            willChange: 'transform'
                          }}
                          animate={{
                            width: isActive ? (window.innerWidth < 640 ? 38 : 42) : (window.innerWidth < 640 ? 30 : 34),
                            height: isActive ? (window.innerWidth < 640 ? 38 : 42) : (window.innerWidth < 640 ? 30 : 34),
                            color: isActive ? '#000' : isHoveredNum ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.6)'
                          }}
                          whileHover={isActive ? { scale: 1.06 } : { scale: 1.15 }}
                          whileTap={{ scale: 0.88 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          aria-label={`${t('go_to_page')} ${pageNum}`}
                        >
                          {isActive && (
                            <motion.div
                              layoutId="activePageBg-list"
                              className="absolute inset-0 rounded-[14px] shadow-xl"
                              style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)' }}
                              transition={{ 
                                type: "tween",
                                duration: 0.5,
                                ease: [0.24, 1.40, 0.36, 1.00]
                              }}
                            />
                          )}

                          {!isActive && isHoveredNum && (
                            <motion.div
                              className="absolute inset-0 rounded-[14px] bg-white/10"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            />
                          )}

                          <span className="relative z-10 select-none">
                            {pageNum}
                          </span>
                        </motion.button>
                      );
                    })}
                  </motion.div>

                  <motion.button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="relative group p-3 sm:p-4 bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 text-white disabled:opacity-20 disabled:cursor-not-allowed overflow-hidden shadow-lg"
                    whileHover={currentPage === totalPages ? {} : { scale: 1.12, backgroundColor: "rgba(255, 255, 255, 0.14)" }}
                    whileTap={currentPage === totalPages ? {} : { scale: 0.94 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    aria-label={t('next_page')}
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" strokeWidth={2.5} />
                  </motion.button>
                </motion.div>
              )}

              {totalPages <= 1 && displayedCategories.length > 0 && (
                <motion.div
                  className="flex items-center justify-center py-2 mt-3 border-t border-white/10 flex-shrink-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="px-4 py-2 bg-white/5 backdrop-blur-2xl rounded-full border border-white/10">
                    <span className="text-white/70 text-sm font-medium">1</span>
                  </div>
                </motion.div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}