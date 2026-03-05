import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Sprout, Flame, Award, Heart, Lock, Sparkles, CheckCircle } from "lucide-react";
import FavoriteButton from "./FavoriteButton";

const CategoryCard = React.memo(({
  categoryKey,
  category,
  isFavorite,
  progress,
  onToggleFavorite,
  onSelect,
  t,
  dataLoaded
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const levelInfo = useMemo(() => {
    const safeCategory = category || {};
    const level = safeCategory.level;
    
    switch(level) {
      case 'beginner':
        return {
          text: t('easy_start'),
          Icon: Sprout,
          gradient: 'from-lime-400 to-green-500',
          bgGradient: 'from-lime-400/45 to-green-500/45',
          borderColor: 'border-lime-300/70',
          glowColor: 'shadow-lime-400/25',
          hoverGlow: 'shadow-lime-400/40',
          textColor: 'text-white',
          starColor: 'text-lime-100 fill-lime-100',
          stars: 1
        };
      case 'intermediate':
        return {
          text: t('challenge'),
          Icon: Flame,
          gradient: 'from-orange-400 to-rose-500',
          bgGradient: 'from-orange-400/45 to-rose-500/45',
          borderColor: 'border-orange-300/70',
          glowColor: 'shadow-orange-400/25',
          hoverGlow: 'shadow-orange-400/40',
          textColor: 'text-white',
          starColor: 'text-amber-100 fill-amber-100',
          stars: 2
        };
      case 'advanced':
        return {
          text: t('expert'),
          Icon: Award,
          gradient: 'from-purple-500 to-fuchsia-600',
          bgGradient: 'from-purple-500/50 to-fuchsia-600/50',
          borderColor: 'border-fuchsia-300',
          glowColor: 'shadow-purple-500/30',
          hoverGlow: 'shadow-purple-500/50',
          textColor: 'text-white',
          starColor: 'text-fuchsia-200 fill-fuchsia-200',
          stars: 3
        };
      default:
        return {
          text: level || 'beginner',
          Icon: Star,
          gradient: 'from-gray-400 to-slate-500',
          bgGradient: 'from-gray-500/20 to-slate-500/20',
          borderColor: 'border-gray-400/40',
          glowColor: 'shadow-gray-400/20',
          hoverGlow: 'shadow-gray-400/30',
          textColor: 'text-gray-100',
          starColor: 'text-gray-300 fill-gray-300',
          stars: 1
        };
    }
  }, [category?.level, t]);

  const IconComponent = category?.icon || Star;
  const categoryColor = category?.color || 'from-purple-500 to-pink-500';
  const safeProgress = progress || { mastered: 0, total: 0, percentage: 0 };

  return (
    <motion.div
      onClick={() => onSelect(categoryKey, category)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={false}
      whileHover={{
        y: -6,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/20 p-3 sm:p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-white/40 hover:bg-white/15 overflow-hidden"
      style={{ transformOrigin: "center center" }}
    >
      {/* Glass curvature highlight - top */}
      <div className="absolute top-0 inset-x-0 h-[22%] bg-white/10 rounded-t-xl sm:rounded-t-2xl blur-sm pointer-events-none" />
      
      {/* Grounding shadow fade - bottom */}
      <div className="absolute bottom-0 inset-x-0 h-[18%] bg-black/5 rounded-b-xl sm:rounded-b-2xl blur-md pointer-events-none" />

      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${categoryColor} opacity-0 group-hover:opacity-15 rounded-xl sm:rounded-2xl`}
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
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <FavoriteButton
            isFavorite={isFavorite}
            onToggle={(e) => {
              onToggleFavorite(categoryKey, category?.name || '', e);
            }}
            categoryName={category?.name || ''}
          />
        </motion.div>
      </div>

      <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4 relative z-[1]">
        <motion.div
          className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${categoryColor} flex items-center justify-center shadow-lg flex-shrink-0 relative overflow-hidden -mt-0.5`}
          whileHover={{ rotate: [0, -5, 5, -5, 0] }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: isHovered ? [-100, 200] : -100 }}
            transition={{ duration: 0.8 }}
          />
          <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white drop-shadow-md relative z-10" strokeWidth={2} />
        </motion.div>

        <div className="flex-1 min-w-0 pr-6 sm:pr-8">
          <motion.h3
            className="text-base sm:text-xl font-bold text-white mb-1 truncate"
            animate={{ color: isHovered ? 'rgb(254, 240, 138)' : 'rgb(255, 255, 255)' }}
            transition={{ duration: 0.3 }}
          >
            {category?.name || 'Unknown'}
          </motion.h3>
          <motion.p
            className="text-xs sm:text-sm text-white/70 line-clamp-2"
            animate={{ opacity: isHovered ? 1 : 0.7 }}
            transition={{ duration: 0.3 }}
          >
            {category?.description || ''}
          </motion.p>
        </div>
      </div>

      <div className="space-y-2 mb-3 relative z-[1]">
        <div className="flex justify-between items-center text-xs sm:text-sm">
          <span className="text-white/70">
            {safeProgress.mastered} / {safeProgress.total} {t('mastered')}
          </span>
          <motion.span
            className="text-white font-bold"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {safeProgress.percentage}%
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
            animate={{ width: `${safeProgress.percentage}%` }}
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
            animate={{ width: `${safeProgress.percentage}%` }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          />
          
          {/* Subtle living glow breathing */}
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full pointer-events-none"
            style={{
              width: `${safeProgress.percentage}%`,
              background: 'transparent',
              boxShadow: '0 0 25px rgba(251, 191, 36, 0.35), 0 0 50px rgba(249, 115, 22, 0.2)'
            }}
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 flex-wrap relative z-[1]">
        {category?.level && (
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className={`relative inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm overflow-hidden border ${levelInfo.borderColor} ${levelInfo.glowColor} shadow-lg shadow-inner shadow-white/10`}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${levelInfo.bgGradient} rounded-full`}></div>
            
            {/* Subtle star sparkle shimmer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ 
                x: ['-100%', '200%'],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 1.2, 
                repeat: Infinity, 
                repeatDelay: 6,
                ease: "easeInOut"
              }}
            />

            <div className="relative flex items-center gap-2">
              <levelInfo.Icon className="w-4 h-4 sm:w-4 sm:h-4 text-white drop-shadow-md" strokeWidth={2.5} />
              <span className={`font-bold text-xs sm:text-sm ${levelInfo.textColor} drop-shadow-sm`}>
                {levelInfo.text}
              </span>
              <div className="flex gap-0.5">
                {[...Array(levelInfo.stars)].map((_, i) => (
                  <Star key={i} className={`w-3 h-3 ${levelInfo.starColor} drop-shadow-sm`} />
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {safeProgress.percentage === 100 && (
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm overflow-hidden border border-emerald-300/70 shadow-emerald-400/25 shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/45 to-green-500/45 rounded-full"></div>

            <div className="relative flex items-center gap-2">
              <CheckCircle className="w-4 h-4 sm:w-4 sm:h-4 text-white drop-shadow-md" strokeWidth={2.5} />
              <span className="font-bold text-xs sm:text-sm text-white drop-shadow-sm">
                {t('completed_status')}
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}, (prevProps, nextProps) => {
  return (
    prevProps.categoryKey === nextProps.categoryKey &&
    prevProps.isFavorite === nextProps.isFavorite &&
    prevProps.progress?.percentage === nextProps.progress?.percentage &&
    prevProps.category === nextProps.category &&
    prevProps.dataLoaded === nextProps.dataLoaded
  );
});

CategoryCard.displayName = 'CategoryCard';

export default CategoryCard;