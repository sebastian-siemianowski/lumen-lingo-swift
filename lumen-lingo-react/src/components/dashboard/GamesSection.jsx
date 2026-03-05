import React, { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Brain, Lightbulb, Compass } from "lucide-react";
import GameCard from "./GameCard";
import { useTranslations } from "../utils/translations";
import { useLanguage } from "../language/LanguageContext";
import { useDarkMode } from "../theme/DarkModeContext";
import GlassDivider from "../shared/GlassDivider";

export default function GamesSection() {
  const { sourceLanguage } = useLanguage();
  const { darkMode } = useDarkMode();
  const t = useTranslations(sourceLanguage);
  const [isCompassHovered, setIsCompassHovered] = React.useState(false);

  const games = useMemo(() => [
    {
      id: "flashcards",
      title: t('vocabulary_cards'),
      description: t('master_words'),
      icon: BookOpen,
      gradient: "from-blue-500 via-cyan-400 to-teal-400",
      path: "FlashCardsCategories"
    },
    {
      id: "grammar",
      title: t('grammar_challenge'),
      description: t('test_grammar'),
      icon: Brain,
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      path: "GrammarCategories"
    },
    {
      id: "word_builder",
      title: t('word_constructor'),
      description: t('build_words'),
      icon: Lightbulb,
      gradient: "from-amber-500 via-orange-500 to-red-500",
      path: "WordBuilderCategories"
    }
  ], [t]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="mt-2 sm:mt-2"
    >
      <div className="mb-4 sm:mb-8">
        {/* Section divider glow - mobile only */}
        <GlassDivider className="sm:hidden mb-4" />
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="flex items-center gap-2.5 sm:gap-4 mb-3 sm:mb-6"
        >
          <CompassIcon 
            darkMode={darkMode}
            isHovered={isCompassHovered}
            onHoverChange={setIsCompassHovered}
          />
          <div>
            <h2 className={`text-[19px] sm:text-3xl font-bold text-white mb-0.5 sm:mb-1 ${!darkMode ? 'light-mode-heading' : ''}`} 
              style={{ letterSpacing: '0.5px', textShadow: darkMode ? '0 2px 4px rgba(0, 0, 0, 0.4)' : '0 1px 2px rgba(0, 0, 0, 0.15)' }}>
                            {t("choose_adventure")}
                          </h2>
              <p className={`text-white/80 text-[13px] sm:text-base font-semibold leading-tight sm:leading-normal ${!darkMode ? 'light-mode-subtext' : ''}`}
                style={{ textShadow: darkMode ? '0 1px 3px rgba(0, 0, 0, 0.4)' : '0 1px 2px rgba(0, 0, 0, 0.15)' }}>
              {t("select_game")}
            </p>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4">
        {games.map((game, index) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2 + (index * 0.05),
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="h-full"
          >
            <GameCard game={game} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function CompassIcon({ darkMode, isHovered, onHoverChange }) {
  return (
    <motion.div
      onHoverStart={() => onHoverChange(true)}
      onHoverEnd={() => onHoverChange(false)}
      className={`w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center border shadow-lg transition-all duration-500 relative overflow-hidden ${
        darkMode
          ? 'bg-gradient-to-br from-violet-500/60 to-fuchsia-600/60 border-purple-300/60'
          : 'bg-gradient-to-br from-violet-400 via-fuchsia-400 to-purple-500 border-white/40'
      }`}
      style={darkMode ? {
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.6) 0%, rgba(217, 70, 239, 0.65) 50%, rgba(168, 85, 247, 0.6) 100%)',
        border: '1px solid rgba(192, 132, 252, 0.5)',
        boxShadow: isHovered
          ? '0 0 25px rgba(168, 85, 247, 0.8), 0 4px 20px rgba(139, 92, 246, 0.5), 0 8px 35px rgba(217, 70, 239, 0.4), inset 0 2px 12px rgba(192, 132, 252, 0.3), inset 0 -2px 12px rgba(168, 85, 247, 0.2)'
          : '0 0 20px rgba(168, 85, 247, 0.6), 0 4px 15px rgba(139, 92, 246, 0.4), 0 8px 30px rgba(217, 70, 239, 0.3), inset 0 2px 8px rgba(192, 132, 252, 0.25)'
      } : {
        boxShadow: isHovered 
          ? '0 4px 20px rgba(168, 85, 247, 0.5), 0 8px 32px rgba(139, 92, 246, 0.3), inset 0 2px 8px rgba(255, 255, 255, 0.4), inset 0 -2px 8px rgba(168, 85, 247, 0.2)' 
          : '0 4px 12px rgba(168, 85, 247, 0.3), 0 6px 20px rgba(139, 92, 246, 0.2), inset 0 2px 6px rgba(255, 255, 255, 0.35)',
        background: 'linear-gradient(135deg, rgb(167, 139, 250) 0%, rgb(217, 70, 239) 50%, rgb(168, 85, 247) 100%)'
      }}
      animate={{ 
        rotate: isHovered ? [0, 8, -8, 0] : [0, 5, -5, 0],
        scale: isHovered ? 1.08 : 1
      }}
      transition={{ 
        rotate: { 
          duration: isHovered ? 0.5 : 3, 
          repeat: Infinity, 
          ease: "easeInOut",
          repeatDelay: isHovered ? 0 : 1
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
        {isHovered && (
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

      {darkMode && isHovered && (
        <>
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.7) 0%, rgba(139, 92, 246, 0.5) 40%, transparent 70%)'
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
              background: 'radial-gradient(circle at 30% 30%, rgba(217, 70, 239, 0.5) 0%, transparent 60%)'
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

      <Compass className="w-4 h-4 sm:w-6 sm:h-6 text-white drop-shadow-lg relative z-10" strokeWidth={2.5} />
    </motion.div>
  );
}