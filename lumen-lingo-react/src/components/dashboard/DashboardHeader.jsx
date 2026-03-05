import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, User, Star, Zap, Trophy } from "lucide-react";
import { useTranslations } from "../utils/translations";
import { useLanguage } from "../language/LanguageContext";
import { useDarkMode } from "../theme/DarkModeContext";
import { getLocalData, STORAGE_KEYS } from "../utils/offlineSync";

export default function DashboardHeader() {
  const { sourceLanguage, targetLanguage } = useLanguage();
  const { darkMode } = useDarkMode();
  const t = useTranslations(sourceLanguage);

  const [isCollapsed, setIsCollapsed] = React.useState(() => {
    if (typeof window !== 'undefined' && window.innerWidth >= 640) {
      return false; // Always expanded on desktop
    }
    const saved = localStorage.getItem('dashboardHeaderCollapsed');
    return saved === 'true';
  });

  const [isLevelCardHovered, setIsLevelCardHovered] = React.useState(false);
  const [userProfile, setUserProfile] = React.useState(null);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 640) {
      localStorage.setItem('dashboardHeaderCollapsed', isCollapsed);
    }
  }, [isCollapsed]);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640 && isCollapsed) {
        setIsCollapsed(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isCollapsed]);

  React.useEffect(() => {
    const loadData = () => {
      try {
        setUser(getLocalData(STORAGE_KEYS.USER_DATA));
        setUserProfile(getLocalData(STORAGE_KEYS.USER_PROFILE));
      } catch (error) {
        console.error("Error loading header data:", error);
      }
    };

    loadData();

    const handleStorageChange = () => loadData();
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('animationPreferencesChanged', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('animationPreferencesChanged', handleStorageChange);
    };
  }, []);

  const getFirstName = () => {
    if (!user?.full_name) return 'there';
    return user.full_name.split(' ')[0];
  };

  const getReadyMessage = () => {
    const messages = {
      spanish: t('ready_for_spanish_adventure'),
      english: t('ready_for_english_adventure'),
      polish: t('ready_for_polish_adventure'),
      german: t('ready_for_german_adventure'),
      ukrainian: t('ready_for_ukrainian_adventure'),
      french: t('ready_for_french_adventure'),
      arabic: t('ready_for_arabic_adventure'),
      chinese: t('ready_for_chinese_adventure'),
      japanese: t('ready_for_japanese_adventure')
    };
    return messages[targetLanguage?.toLowerCase()] || t('ready_to_continue');
  };

  const getStreakText = (totalDays) => {
    const dayWord = totalDays === 1 ? t('day') : t('days');
    return `${totalDays} ${dayWord}`;
  };

  const currentLevel = userProfile?.current_level || 1;
  const xpInCurrentLevel = (userProfile?.total_xp || 0) % 100;
  const progressToNextLevel = Math.min((xpInCurrentLevel / 100) * 100, 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="mb-4 sm:mb-8 relative"
    >
      {/* Slow-moving radial highlight behind header - only animates in light mode */}
      <motion.div
        className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none"
        style={{
          background: darkMode
            ? 'radial-gradient(circle, rgba(168, 85, 247, 0.55) 0%, rgba(168, 85, 247, 0.38) 30%, rgba(168, 85, 247, 0.19) 50%, transparent 70%)'
            : 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.18) 35%, rgba(255, 255, 255, 0.06) 60%, transparent 80%)',
          filter: darkMode ? 'blur(52px)' : 'blur(35px)',
          willChange: darkMode ? 'auto' : 'transform, opacity',
          opacity: darkMode ? 0.6 : undefined,
        }}
        animate={darkMode ? {} : {
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={darkMode ? {} : {
          duration: 10,
          repeat: Infinity,
          ease: [0.4, 0, 0.2, 1],
        }}
      />

      <div 
          className="relative rounded-[22px] sm:rounded-[26px] border overflow-visible"
          style={{
            background: darkMode ? 'rgba(255, 255, 255, 0.16)' : 'rgba(255, 255, 255, 0.18)',
            backdropFilter: 'blur(34px)',
            WebkitBackdropFilter: 'blur(34px)',
            borderColor: darkMode ? 'rgba(255, 255, 255, 0.18)' : 'rgba(255, 255, 255, 0.2)',
            boxShadow: darkMode
              ? '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 12px 24px -8px rgba(0, 0, 0, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.25), inset 0 0 20px rgba(255, 255, 255, 0.06), inset 0 -2px 10px rgba(255, 255, 255, 0.1)'
              : '0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 12px 24px -8px rgba(0, 0, 0, 0.06), inset 0 1px 2px rgba(255, 255, 255, 0.3), inset 0 -2px 6px rgba(255, 255, 255, 0.3)',
          }}
        >
        {/* Soft vertical gradient overlay for mobile contrast */}
        <div 
          className="absolute inset-0 rounded-[22px] sm:rounded-[26px] pointer-events-none sm:hidden"
          style={{
            background: darkMode 
              ? 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, transparent 40%, rgba(0, 0, 0, 0.02) 100%)'
              : 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, transparent 40%, rgba(0, 0, 0, 0.02) 100%)'
          }}
        />
        {/* Mobile: Animated collapse/expand */}
        <div className="sm:hidden">
          <AnimatePresence initial={false} mode="wait">
            {isCollapsed ? (
              <CollapsedHeader
                key="collapsed"
                darkMode={darkMode}
                t={t}
                getFirstName={getFirstName}
                currentLevel={currentLevel}
                userProfile={userProfile}
                onToggle={() => setIsCollapsed(false)}
              />
            ) : (
              <MobileExpandedView
                key="expanded"
                darkMode={darkMode}
                t={t}
                getFirstName={getFirstName}
                getReadyMessage={getReadyMessage}
                getStreakText={getStreakText}
                currentLevel={currentLevel}
                xpInCurrentLevel={xpInCurrentLevel}
                progressToNextLevel={progressToNextLevel}
                userProfile={userProfile}
                onToggle={() => setIsCollapsed(true)}
              />
            )}
          </AnimatePresence>
        </div>
        
        {/* Desktop: Always expanded, no animation */}
        <DesktopView
          darkMode={darkMode}
          t={t}
          getFirstName={getFirstName}
          getReadyMessage={getReadyMessage}
          getStreakText={getStreakText}
          currentLevel={currentLevel}
          xpInCurrentLevel={xpInCurrentLevel}
          progressToNextLevel={progressToNextLevel}
          userProfile={userProfile}
          isLevelCardHovered={isLevelCardHovered}
          setIsLevelCardHovered={setIsLevelCardHovered}
        />
      </div>
    </motion.div>
  );
}

function CollapsedHeader({ darkMode, t, getFirstName, currentLevel, userProfile, onToggle }) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ 
        height: { duration: 0.5, ease: [0.32, 0.72, 0, 1] },
        opacity: { duration: 0.3 }
      }}
      className="overflow-hidden"
    >
      <div className="p-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          <UserAvatar darkMode={darkMode} size="small" />
          <div className="min-w-0 flex-1">
            <h2 className={`text-base font-bold text-white truncate ${!darkMode ? 'light-mode-heading' : ''}`}
              style={{ textShadow: darkMode ? '0 1px 3px rgba(0, 0, 0, 0.5)' : '0 1px 2px rgba(0, 0, 0, 0.2)' }}>
              {t("hello")}, {getFirstName()}!
            </h2>
            <div className="flex items-center gap-3 mt-0.5">
              <StatBadge icon={Star} value={currentLevel} color="yellow" />
              <StatBadge icon={Zap} value={`${userProfile?.total_xp || 0} XP`} color="cyan" />
              <StatBadge icon={Trophy} value={userProfile?.total_active_days || 0} color="orange" />
            </div>
          </div>

          <motion.button
            onClick={onToggle}
            className="ml-2 w-8 h-8 bg-white/10 backdrop-blur-xl rounded-lg flex items-center justify-center border border-white/20 flex-shrink-0"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronDown className="w-4 h-4 text-white" strokeWidth={2.5} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}



function MobileExpandedView({ darkMode, t, getFirstName, getReadyMessage, getStreakText, currentLevel, xpInCurrentLevel, progressToNextLevel, userProfile, onToggle }) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ 
        height: { duration: 0.5, ease: [0.32, 0.72, 0, 1] },
        opacity: { duration: 0.3 }
      }}
      style={{ overflow: "hidden" }}
    >
      <div className="relative z-10 p-4">
        <motion.button
          onClick={onToggle}
          className="absolute top-3 right-3 w-8 h-8 bg-white/10 backdrop-blur-xl rounded-lg flex items-center justify-center border border-white/20 z-20"
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronUp className="w-4 h-4 text-white" strokeWidth={2.5} />
        </motion.button>

        <div className="mb-3">
          <div className="flex items-center gap-2 mb-1">
            <UserAvatar darkMode={darkMode} size="medium" />
            <h1 className={`text-[24px] font-black tracking-tight ${!darkMode ? 'light-mode-heading' : ''}`}>
              <span className={`${darkMode ? 'bg-gradient-to-r bg-clip-text text-transparent drop-shadow-lg from-white via-white to-white/90' : 'text-white'}`}
                style={{ filter: darkMode ? 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4))' : 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))' }}>
                {t("hello")}, {getFirstName()}!
              </span>
            </h1>
          </div>
          <p className={`text-white/80 text-[13px] font-semibold ml-1 leading-snug ${!darkMode ? 'light-mode-subtext' : ''}`}
            style={{ textShadow: darkMode ? '0 1px 3px rgba(0, 0, 0, 0.4)' : '0 1px 2px rgba(0, 0, 0, 0.15)' }}>
            {getReadyMessage()}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <StatCard 
            icon={Star} 
            label={t("level")} 
            value={currentLevel}
            gradient="yellow"
            darkMode={darkMode}
            showProgress
            xpInCurrentLevel={xpInCurrentLevel}
            progressToNextLevel={progressToNextLevel}
            delay={0.4}
          />
          <StatCard 
            icon={Zap} 
            label={t("total_xp")} 
            value={userProfile?.total_xp || 0}
            gradient="cyan"
            darkMode={darkMode}
            delay={0.5}
          />
          <StatCard 
            icon={Trophy} 
            label={t("total_active_days")} 
            value={getStreakText(userProfile?.total_active_days || 0)}
            gradient="orange"
            darkMode={darkMode}
            smallValue
            delay={0.6}
          />
        </div>
      </div>
    </motion.div>
  );
}

function DesktopView({ darkMode, t, getFirstName, getReadyMessage, getStreakText, currentLevel, xpInCurrentLevel, progressToNextLevel, userProfile, isLevelCardHovered, setIsLevelCardHovered }) {
  return (
    <div className="hidden sm:block relative z-10 p-4">
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-1">
          <UserAvatar darkMode={darkMode} size="medium" />
          <h1 className={`text-3xl font-black tracking-tight ${!darkMode ? 'light-mode-heading' : ''}`}>
            <span className={`${darkMode ? 'bg-gradient-to-r bg-clip-text text-transparent drop-shadow-lg from-white via-white to-white/90' : 'text-white'}`}
              style={{ filter: darkMode ? 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4))' : 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))' }}>
              {t("hello")}, {getFirstName()}!
            </span>
          </h1>
        </div>
        <p className={`text-white/80 text-sm sm:text-base font-semibold ${!darkMode ? 'light-mode-subtext' : ''}`}
          style={{ textShadow: darkMode ? '0 1px 3px rgba(0, 0, 0, 0.4)' : '0 1px 2px rgba(0, 0, 0, 0.15)' }}>
          {getReadyMessage()}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <StatCard 
          icon={Star} 
          label={t("level")} 
          value={currentLevel}
          gradient="yellow"
          darkMode={darkMode}
          showProgress
          xpInCurrentLevel={xpInCurrentLevel}
          progressToNextLevel={progressToNextLevel}
          isHovered={isLevelCardHovered}
          onHoverChange={setIsLevelCardHovered}
          compact
          delay={0.4}
        />
        <StatCard 
          icon={Zap} 
          label={t("total_xp")} 
          value={userProfile?.total_xp || 0}
          gradient="cyan"
          darkMode={darkMode}
          compact
          delay={0.5}
        />
        <StatCard 
          icon={Trophy} 
          label={t("total_active_days")} 
          value={getStreakText(userProfile?.total_active_days || 0)}
          gradient="orange"
          darkMode={darkMode}
          smallValue
          compact
          delay={0.6}
        />
      </div>
    </div>
  );
}

function UserAvatar({ darkMode, size }) {
  const sizeClasses = {
    small: 'w-10 h-10',
    medium: 'w-10 h-10 sm:w-12 sm:h-12'
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} rounded-2xl flex items-center justify-center relative overflow-hidden ${
        darkMode
          ? 'bg-gradient-to-br from-indigo-400/60 to-purple-600/60 border border-indigo-300/60'
          : 'bg-gradient-to-br from-indigo-300 via-purple-300 to-indigo-400 border border-white/40'
      } shadow-lg`}
      style={darkMode ? {
        background: 'linear-gradient(135deg, rgba(129, 140, 248, 0.6) 0%, rgba(147, 51, 234, 0.65) 50%, rgba(124, 58, 237, 0.6) 100%)',
        border: '1px solid rgba(165, 180, 252, 0.5)',
        boxShadow: '0 0 20px rgba(124, 58, 237, 0.6), 0 4px 15px rgba(147, 51, 234, 0.4), inset 0 2px 8px rgba(165, 180, 252, 0.25)'
      } : {
        boxShadow: '0 2px 8px rgba(129, 140, 248, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
        background: 'linear-gradient(135deg, rgb(165, 180, 252) 0%, rgb(192, 132, 252) 50%, rgb(147, 197, 253) 100%)'
      }}
    >
      <User className="w-4 h-4 sm:w-5 sm:h-5 text-white drop-shadow-lg relative z-10" strokeWidth={2.5} />
    </motion.div>
  );
}

function StatBadge({ icon: Icon, value, color }) {
  const colorClasses = {
    yellow: 'text-yellow-400',
    cyan: 'text-cyan-300',
    orange: 'text-orange-300'
  };

  return (
    <div className="flex items-center gap-1">
      <Icon className={`w-3 h-3 ${colorClasses[color]} opacity-90`} />
      <span className="text-white text-[11px] font-semibold">{value}</span>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, gradient, darkMode, showProgress, xpInCurrentLevel, progressToNextLevel, isHovered, onHoverChange, smallValue, compact, delay }) {
  const gradientClasses = {
    yellow: darkMode ? 'from-yellow-400/40 to-orange-500/40 border-yellow-300/40' : 'from-yellow-400/50 via-orange-400/50 to-amber-400/50 border-white/30',
    cyan: darkMode ? 'from-cyan-400/40 to-blue-500/40 border-cyan-300/40' : 'from-cyan-400/50 via-blue-400/50 to-cyan-400/50 border-white/30',
    orange: darkMode ? 'from-orange-400/40 to-red-500/40 border-orange-300/40' : 'from-orange-400/50 via-red-400/50 to-orange-400/50 border-white/30'
  };

  const glowColors = {
    yellow: { color: 'rgba(251, 191, 36, 0.5)', light: 'rgba(251, 146, 60, 0.25)' },
    cyan: { color: 'rgba(34, 211, 238, 0.5)', light: 'rgba(34, 211, 238, 0.25)' },
    orange: { color: 'rgba(251, 146, 60, 0.5)', light: 'rgba(251, 146, 60, 0.25)' }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4 }}
      className="h-full"
      {...(onHoverChange && {
        onHoverStart: () => onHoverChange(true),
        onHoverEnd: () => onHoverChange(false)
      })}
    >
      <motion.div
        className={`bg-white/12 backdrop-blur-xl ${compact ? 'p-3 rounded-[18px]' : 'p-4 rounded-[22px]'} border border-white/15 transition-all duration-300 h-full flex flex-col ${showProgress ? '' : 'justify-center'}`}
        whileHover={{
          y: -4,
          boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
          borderColor: "rgba(255,255,255,0.25)"
        }}
        style={{ transformOrigin: "center center" }}
      >
        <div className={`flex items-center ${compact ? 'gap-2' : 'gap-3'} ${showProgress ? 'mb-2' : ''}`}>
          <motion.div 
            className={`${compact ? 'w-9 h-9 rounded-[14px]' : 'w-11 h-11 rounded-[16px]'} flex items-center justify-center relative overflow-hidden bg-gradient-to-br ${gradientClasses[gradient]} border shadow-lg flex-shrink-0`}
            style={darkMode ? {
              boxShadow: `0 0 ${compact ? '15' : '20'}px ${glowColors[gradient].color}, inset 0 1px 2px rgba(255, 255, 255, 0.15), inset 0 -1px 2px rgba(0, 0, 0, 0.1)`
            } : {
              boxShadow: `0 2px ${compact ? '6' : '8'}px ${glowColors[gradient].light}, inset 0 1px 2px rgba(255, 255, 255, 0.35), inset 0 -1px 2px rgba(0, 0, 0, 0.05)`
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: [-50, 100] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
            />
            <Icon className={`${compact ? 'w-[18px] h-[18px]' : 'w-[22px] h-[22px]'} text-white/90 drop-shadow-lg relative z-10`} strokeWidth={2.5} />
          </motion.div>
          <div className="flex-1 min-w-0">
            <p className={`text-white/70 ${compact ? 'text-[10px]' : 'text-xs'} font-bold uppercase tracking-wider ${compact ? 'mb-0.5' : 'mb-1'}`}
              style={{ textShadow: darkMode ? '0 1px 2px rgba(0, 0, 0, 0.3)' : 'none' }}>{label}</p>
            <p className={`${smallValue ? (compact ? 'text-xs' : 'text-sm') : (compact ? 'text-2xl' : 'text-3xl')} font-black text-white tracking-tight ${!darkMode ? 'light-mode-stat' : ''}`}
              style={{ textShadow: darkMode ? '0 2px 4px rgba(0, 0, 0, 0.4)' : '0 1px 2px rgba(0, 0, 0, 0.15)' }}>{value}</p>
          </div>
        </div>

        {showProgress && (
          <div className="mt-auto">
            <div className={`flex items-center justify-between ${compact ? 'text-[10px]' : 'text-xs'} text-white/50 ${compact ? 'mb-1' : 'mb-2'}`}>
              <span className="font-medium">{xpInCurrentLevel} XP</span>
              <motion.span
                className="font-medium tabular-nums"
                animate={isHovered !== undefined ? {
                  scale: isHovered ? 1.05 : 1,
                  color: isHovered ? 'rgb(254, 240, 138)' : 'rgba(255, 255, 255, 0.5)'
                } : {}}
                transition={{ duration: 0.2 }}
              >
                100 XP
              </motion.span>
            </div>
            <div className={`relative w-full ${compact ? 'h-1.5' : 'h-2.5'} bg-white/15 rounded-full overflow-hidden`}
              style={{
                boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)'
              }}
            >
              {/* Main progress bar with inner glow */}
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{
                  background: 'linear-gradient(to right, rgb(250, 204, 21), rgb(251, 146, 60))',
                  boxShadow: 'inset 0 -1px 2px rgba(255, 255, 255, 0.1), 0 0 8px rgba(251, 191, 36, 0.4)'
                }}
                initial={{ width: 0 }}
                animate={{
                  width: `${progressToNextLevel}%`,
                  opacity: isHovered !== undefined ? (isHovered ? 1 : 0.95) : 0.95
                }}
                transition={{
                  width: { duration: 1, delay: delay + 0.2, ease: [0.16, 1, 0.3, 1] },
                  opacity: { duration: 0.2 }
                }}
              />
              {/* Top highlight - 1px bright white line */}
              <motion.div
                className="absolute left-0 top-0 h-[1px] rounded-t-full"
                style={{
                  background: 'rgba(255, 255, 255, 0.4)',
                }}
                initial={{ width: 0 }}
                animate={{ width: `${progressToNextLevel}%` }}
                transition={{ duration: 1, delay: delay + 0.2, ease: [0.16, 1, 0.3, 1] }}
              />
              {/* Micro sparkles scattered along the bar */}
              {progressToNextLevel > 10 && (
                <>
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 w-[1px] h-[1px] bg-white rounded-full"
                    style={{ left: '12%' }}
                    animate={{ opacity: [0.02, 0.05, 0.02] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 w-[1px] h-[1px] bg-white rounded-full"
                    style={{ left: '28%' }}
                    animate={{ opacity: [0.03, 0.05, 0.03] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  />
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 w-[1px] h-[1px] bg-white rounded-full"
                    style={{ left: '45%' }}
                    animate={{ opacity: [0.02, 0.05, 0.02] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                  />
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 w-[1px] h-[1px] bg-white rounded-full"
                    style={{ left: '62%' }}
                    animate={{ opacity: [0.03, 0.05, 0.03] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  />
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 w-[1px] h-[1px] bg-white rounded-full"
                    style={{ left: '78%' }}
                    animate={{ opacity: [0.02, 0.05, 0.02] }}
                    transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
                  />
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 w-[1px] h-[1px] bg-white rounded-full"
                    style={{ left: '88%' }}
                    animate={{ opacity: [0.03, 0.05, 0.03] }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  />
                </>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}