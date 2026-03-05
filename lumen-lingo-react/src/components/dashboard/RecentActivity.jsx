import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { BookOpen, Brain, Lightbulb, ArrowRight } from "lucide-react";
import { useTranslations } from "../utils/translations";
import { useLanguage } from "../language/LanguageContext";
import { useDarkMode } from "../theme/DarkModeContext";
import { getLocalData, STORAGE_KEYS } from "../utils/offlineSync";
import GlassDivider from "../shared/GlassDivider";

export default function RecentActivity() {
  const { sourceLanguage, targetLanguage } = useLanguage();
  const { darkMode } = useDarkMode();
  const t = useTranslations(sourceLanguage);
  const [activities, setActivities] = React.useState([]);

  React.useEffect(() => {
    const loadActivities = () => {
      try {
        const localProgress = getLocalData(STORAGE_KEYS.GAME_PROGRESS) || [];

        const filteredProgress = localProgress
          .filter(p => p.source_language === sourceLanguage && p.target_language === targetLanguage)
          .sort((a, b) => {
            const dateA = new Date(a.created_date || 0);
            const dateB = new Date(b.created_date || 0);
            return dateB - dateA;
          })
          .slice(0, 5);

        setActivities(filteredProgress);
      } catch (error) {
        console.error("Error loading activities:", error);
      }
    };

    loadActivities();

    const handleStorageChange = () => loadActivities();
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('animationPreferencesChanged', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('animationPreferencesChanged', handleStorageChange);
    };
  }, [sourceLanguage, targetLanguage]);

  if (!activities || activities.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className="mt-8 sm:mt-12"
    >
      {/* Section divider glow - mobile only */}
      <GlassDivider className="sm:hidden mb-4" />
      
      <div 
        className="backdrop-blur-2xl rounded-[22px] sm:rounded-[26px] p-4 sm:p-6 shadow-xl"
        style={{
          background: darkMode ? 'rgba(255, 255, 255, 0.14)' : 'rgba(255, 255, 255, 0.16)',
          border: darkMode ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(255, 255, 255, 0.12)'
        }}
      >
        <h2 
          className={`text-[1.2rem] sm:text-2xl font-extrabold text-white mb-4 ${!darkMode ? 'light-mode-heading' : ''}`} 
          style={{ 
            letterSpacing: '0.5px',
            textShadow: darkMode ? '0 2px 4px rgba(0, 0, 0, 0.5)' : '0 1px 2px rgba(0,0,0,0.2)',
            background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.98) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          {t("recent_activity")}
        </h2>
        
        {/* Divider line */}
        <GlassDivider className="mb-4 sm:mb-5" />
        
        <div className="space-y-0">
          {activities.map((progress, index) => (
            <ActivityItem
              key={`${progress.id || index}-${progress.created_date}`}
              progress={progress}
              darkMode={darkMode}
              t={t}
              isLast={index === activities.length - 1}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ActivityItem({ progress, darkMode, t, isLast }) {
  const formatTimeAgo = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return t('just_practiced_moments_ago');
    if (diffMins === 1) return t('practiced_minute_ago');
    if (diffMins < 5) return t('practiced_few_minutes_ago');
    if (diffMins < 30) return t('practiced_minutes_ago').replace('{minutes}', diffMins);
    if (diffMins < 60) return t('practiced_about_hour_ago');
    if (diffHours === 1) return t('practiced_hour_ago');
    if (diffHours < 3) return t('practiced_couple_hours_ago');
    if (diffHours < 12) return t('practiced_hours_ago').replace('{hours}', diffHours);
    if (diffHours < 24) return t('practiced_earlier_today');
    if (diffDays === 1) return t('practiced_yesterday');
    if (diffDays === 2) return t('practiced_days_ago').replace('{days}', 2);
    if (diffDays < 7) return t('practiced_days_ago').replace('{days}', diffDays);
    if (diffDays < 14) return t('practiced_last_week');
    if (diffDays < 30) return t('practiced_weeks_ago').replace('{weeks}', Math.floor(diffDays / 7));
    if (diffDays < 60) return t('practiced_last_month');
    if (diffDays < 365) return t('practiced_months_ago').replace('{months}', Math.floor(diffDays / 30));
    return t('practiced_over_year_ago');
  };

  const getGameIcon = (gameType) => {
    const icons = {
      'flashcards': BookOpen,
      'grammar': Brain,
      'word_builder': Lightbulb
    };
    return icons[gameType] || BookOpen;
  };

  const getGameIconColor = (gameType) => {
    if (darkMode) {
      const colors = {
        'flashcards': 'from-cyan-500/20 to-blue-500/20',
        'grammar': 'from-fuchsia-500/20 to-pink-500/20',
        'word_builder': 'from-orange-500/20 to-amber-500/20'
      };
      return colors[gameType] || 'from-purple-400/20 to-blue-400/20';
    } else {
      const colors = {
        'flashcards': 'from-cyan-400/30 to-blue-400/30',
        'grammar': 'from-fuchsia-400/30 to-pink-400/30',
        'word_builder': 'from-orange-400/30 to-amber-400/30'
      };
      return colors[gameType] || 'from-purple-400/30 to-blue-400/30';
    }
  };

  const getGameIconTextColor = (gameType) => {
    const colors = {
      'flashcards': 'text-cyan-300',
      'grammar': 'text-fuchsia-300',
      'word_builder': 'text-orange-300'
    };
    return colors[gameType] || 'text-white';
  };

  const getCategoryDisplayName = (category) => {
    const categoryNames = {
      'absolute_basics': 'Absolute Basics',
      'food_drink': 'Food & Drink',
      'numbers_colors': 'Numbers & Colors',
      'common_phrases': 'Common Phrases',
      'ser_estar': 'Ser vs Estar',
      'present_tense': 'Present Tense',
      'past_tense': 'Past Tense',
      'future_tense': 'Future Tense',
      'beginner': 'Beginner',
      'intermediate': 'Intermediate',
      'advanced': 'Advanced'
    };

    return categoryNames[category] || category?.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  const getGameDisplayName = (gameType) => {
    const gameNames = {
      'flashcards': t('flashcards'),
      'grammar': t('grammar'),
      'word_builder': t('word_builder')
    };

    return gameNames[gameType] || gameType?.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  const gamePathMap = {
    flashcards: `FlashCards?category=${progress.level}`,
    grammar: `Grammar?category=${progress.level}`,
    word_builder: `WordBuilder?category=${progress.level}`
  };
  const gamePath = gamePathMap[progress.game_type] || 'Dashboard';
  const GameIcon = getGameIcon(progress.game_type);

  return (
    <Link to={createPageUrl(gamePath)} className="block">
      <motion.div
        className={`flex items-center justify-between p-2.5 sm:p-3 rounded-[18px] sm:rounded-[22px] transition-all duration-200 cursor-pointer group ${!isLast ? 'border-b border-white/5 pb-3 mb-2.5 sm:pb-4 sm:mb-3' : ''}`}
        style={{
          background: darkMode ? 'rgba(255, 255, 255, 0.10)' : 'rgba(255, 255, 255, 0.12)',
          backdropFilter: 'blur(35px)',
          WebkitBackdropFilter: 'blur(35px)',
          border: darkMode ? '1px solid rgba(255, 255, 255, 0.10)' : '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: darkMode
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 12px 24px -8px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.15), inset 0 0 15px rgba(255, 255, 255, 0.04), inset 0 -2px 8px rgba(255, 255, 255, 0.06)'
            : '0 25px 50px -12px rgba(0, 0, 0, 0.08), 0 12px 24px -8px rgba(0, 0, 0, 0.05), inset 0 -2px 6px rgba(255, 255, 255, 0.25)',
        }}
        whileHover={{ 
          y: -2,
          scale: 1.01, 
          borderColor: darkMode ? 'rgba(255, 255, 255, 0.18)' : 'rgba(255, 255, 255, 0.15)'
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
          <div 
            className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${getGameIconColor(progress.game_type)} rounded-[14px] sm:rounded-[18px] flex items-center justify-center flex-shrink-0 transition-all shadow-lg`}
            style={darkMode ? {
              border: progress.game_type === 'flashcards'
                ? '1px solid rgba(34, 211, 238, 0.6)'
                : progress.game_type === 'grammar'
                ? '1px solid rgba(217, 70, 239, 0.6)'
                : '1px solid rgba(251, 146, 60, 0.6)',
              boxShadow: progress.game_type === 'flashcards'
                ? '0 0 20px rgba(34, 211, 238, 0.5), 0 4px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(34, 211, 238, 0.3)'
                : progress.game_type === 'grammar'
                ? '0 0 20px rgba(217, 70, 239, 0.5), 0 4px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(217, 70, 239, 0.3)'
                : '0 0 20px rgba(251, 146, 60, 0.5), 0 4px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(251, 146, 60, 0.3)'
            } : {
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
            }}
          >
            <GameIcon className={`w-5 h-5 sm:w-6 sm:h-6 ${getGameIconTextColor(progress.game_type)}`} strokeWidth={2} />
          </div>
          <div className="min-w-0 flex-1">
            <p className={`text-white font-bold text-[13px] sm:text-sm truncate group-hover:text-cyan-200 transition-colors leading-tight ${!darkMode ? 'light-mode-text' : ''}`}
              style={{ textShadow: darkMode ? '0 1px 3px rgba(0, 0, 0, 0.4)' : '0 1px 2px rgba(0, 0, 0, 0.15)' }}>
              {getGameDisplayName(progress.game_type)} • {getCategoryDisplayName(progress.level)}
            </p>
            <p className="text-white/60 text-[11px] sm:text-xs font-medium group-hover:text-white/70 transition-colors leading-tight mt-0.5"
              style={{ textShadow: darkMode ? '0 1px 2px rgba(0, 0, 0, 0.3)' : 'none' }}>
              +{progress.score} XP · {progress.correct_answers}/{progress.total_questions} {t('correct')}
              {progress.created_date && ` · ${formatTimeAgo(progress.created_date)}`}
            </p>
          </div>
        </div>
        <div className="text-right flex-shrink-0 ml-2 flex items-center">
          <motion.div
            className="opacity-0 group-hover:opacity-100 transition-opacity"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/60" />
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}