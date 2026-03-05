import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut, Shield, AlertTriangle, Wifi, WifiOff, ChevronDown } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { 
  uploadDataToServer,
  hasPendingSync,
  clearAllAppData,
  isOnline
} from "../utils/offlineSync";
import { useDarkMode } from "../theme/DarkModeContext";
import { useLanguage } from "../language/LanguageContext";
import { useTranslations } from "../utils/translations";
import useAudioFeedback from "../shared/useAudioFeedback";

export default function SignOutSection() {
  const { darkMode } = useDarkMode();
  const { sourceLanguage } = useLanguage();
  const t = useTranslations(sourceLanguage);
  const [isOnlineState, setIsOnlineState] = useState(isOnline());
  const { playSoftClick, playButtonTap } = useAudioFeedback();
  const [loggingOut, setLoggingOut] = useState(false);
  const [logoutStep, setLogoutStep] = useState('');
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() => (typeof window !== 'undefined' ? window.innerWidth >= 640 : false));
  useEffect(() => {
    const handler = () => setIsDesktop(window.innerWidth >= 640);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnlineState(true);
    const handleOffline = () => setIsOnlineState(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleLogout = async () => {
    playButtonTap();
    if (!isOnlineState) {
      alert(t('must_be_online_to_logout'));
      return;
    }

    const hasPending = hasPendingSync();
    if (hasPending) {
      setShowLogoutConfirm(true);
      return;
    }

    await executeLogout();
  };

  const executeLogout = async () => {
    playButtonTap();
    setLoggingOut(true);
    setShowLogoutConfirm(false);

    try {
      setLogoutStep(t('saving_progress'));

      const uploadResult = await uploadDataToServer();

      if (!uploadResult.success) {
        const errorEntities = uploadResult.errors.map(e => e.entity).join(', ');
        alert(`${t('failed_to_save_data')}: ${errorEntities}\n\n${t('data_not_saved')}`);
        setLoggingOut(false);
        setLogoutStep('');
        return;
      }

      if (!isOnline()) {
        alert(t('connection_lost'));
        setLoggingOut(false);
        setLogoutStep('');
        return;
      }

      setLogoutStep(t('clearing_local_data'));
      await new Promise(resolve => setTimeout(resolve, 500));

      const clearResult = clearAllAppData();
      if (!clearResult.success) {
        console.warn('Failed to clear local data:', clearResult.error);
      }

      setLogoutStep(t('signing_you_out'));
      await new Promise(resolve => setTimeout(resolve, 400));

      base44.auth.logout();

    } catch (error) {
      console.error('Error during logout:', error);

      if (logoutStep.includes(t('saving_progress').substring(0, 6))) {
        alert(t('failed_to_save_local_safe'));
      } else if (logoutStep.includes(t('clearing_local_data').substring(0, 6))) {
        alert(t('data_saved_clear_failed'));
        try {
          base44.auth.logout();
        } catch (e) {
          alert(t('critical_error_refresh'));
        }
      } else {
        alert(t('unexpected_error'));
      }

      setLoggingOut(false);
      setLogoutStep('');
    }
  };

  const cancelLogout = () => {
    playButtonTap();
    setShowLogoutConfirm(false);
  };

  const pendingChanges = hasPendingSync();

  return (
    <>
      {/* ENHANCED Logout Confirmation Modal */}
      <AnimatePresence>
        {showLogoutConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[200] flex items-center justify-center p-4"
            onClick={cancelLogout}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-md w-full border overflow-hidden ${
                darkMode
                  ? 'bg-gray-900/95 backdrop-blur-2xl border-orange-400/40'
                  : 'bg-white/20 backdrop-blur-2xl border-white/50'
              }`}
              style={darkMode ? {
                boxShadow: '0 0 60px rgba(251, 146, 60, 0.4), 0 20px 80px rgba(0, 0, 0, 0.5)'
              } : {
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)'
              }}
            >
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 pointer-events-none rounded-2xl sm:rounded-3xl"
                style={{
                  background: darkMode
                    ? 'radial-gradient(circle at 30% 30%, rgba(251, 146, 60, 0.15) 0%, transparent 60%)'
                    : 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3) 0%, transparent 60%)'
                }}
                animate={{
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-5">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, -5, 5, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                      darkMode
                        ? 'bg-gradient-to-br from-orange-500/30 to-red-500/30 border-2 border-orange-400/50'
                        : 'bg-gradient-to-br from-orange-400/50 to-red-400/50 border-2 border-white/40'
                    }`}
                    style={{
                      boxShadow: darkMode
                        ? '0 0 30px rgba(251, 146, 60, 0.4)'
                        : '0 8px 20px rgba(251, 146, 60, 0.3)'
                    }}
                  >
                    <AlertTriangle className="w-7 h-7 text-orange-300" strokeWidth={2.5} />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className={`text-xl sm:text-2xl font-black mb-1 ${
                      darkMode ? 'text-orange-100' : 'text-white light-mode-heading'
                    }`}>
                      {t('unsaved_changes')}
                    </h3>
                    <p className={`text-sm ${
                      darkMode ? 'text-orange-200/70' : 'text-white/85 light-mode-subtext'
                    }`}>
                      {t('dont_lose_progress')}
                    </p>
                  </div>
                </div>

                <p className={`text-sm leading-relaxed mb-6 ${
                  darkMode ? 'text-white/85' : 'text-white/95 light-mode-text'
                }`}>
                  {t('unsaved_progress_message')}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.button
                    onClick={() => { playButtonTap(); cancelLogout(); }}
                    className={`flex-1 px-5 py-3.5 rounded-xl font-bold text-sm transition-all border-2 ${
                      darkMode
                        ? 'bg-white/8 hover:bg-white/12 border-white/20 text-white'
                        : 'bg-white/20 hover:bg-white/30 border-white/50 text-white'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('cancel')}
                  </motion.button>
                  <motion.button
                    onClick={() => { playButtonTap(); executeLogout(); }}
                    className="relative overflow-hidden flex-1 px-5 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 text-white transition-all border-2 border-orange-400/50"
                    style={{
                      boxShadow: darkMode
                        ? '0 0 30px rgba(251, 146, 60, 0.4), 0 8px 20px rgba(0, 0, 0, 0.3)'
                        : '0 8px 20px rgba(251, 146, 60, 0.3)'
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="relative z-10 flex items-center justify-center gap-2">
                      <Shield className="w-5 h-5" strokeWidth={2.5} />
                      {t('save_and_logout')}
                    </div>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ENHANCED Logout Progress Overlay */}
      <AnimatePresence>
        {loggingOut && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/75 backdrop-blur-lg z-[200] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
              className={`rounded-2xl sm:rounded-3xl p-8 sm:p-10 max-w-sm w-full border overflow-hidden relative ${
                darkMode
                  ? 'bg-gray-900/95 backdrop-blur-2xl border-purple-400/50'
                  : 'bg-white/25 backdrop-blur-2xl border-white/60'
              }`}
              style={darkMode ? {
                boxShadow: '0 0 60px rgba(168, 85, 247, 0.5), 0 20px 80px rgba(0, 0, 0, 0.5)'
              } : {
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)'
              }}
            >
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 pointer-events-none rounded-2xl sm:rounded-3xl"
                style={{
                  background: darkMode
                    ? 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.2) 0%, transparent 70%)'
                    : 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.3) 0%, transparent 70%)'
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <div className="relative z-10 flex flex-col items-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 relative ${
                    darkMode
                      ? 'bg-gradient-to-br from-purple-500/30 to-fuchsia-500/30'
                      : 'bg-gradient-to-br from-purple-400/50 to-fuchsia-400/50'
                  }`}
                  style={{
                    boxShadow: darkMode
                      ? '0 0 40px rgba(168, 85, 247, 0.5), 0 10px 30px rgba(0, 0, 0, 0.3)'
                      : '0 0 30px rgba(168, 85, 247, 0.4), 0 10px 30px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <Shield className="w-10 h-10 text-white" strokeWidth={2.5} />

                  {/* Pulsing ring */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl border-2 ${
                      darkMode ? 'border-purple-400' : 'border-white'
                    }`}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.8, 0, 0.8]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  />
                </motion.div>

                <motion.p
                  className={`font-bold text-xl mb-2 text-center ${
                    darkMode ? 'text-white' : 'text-white light-mode-heading'
                  }`}
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  {logoutStep}
                </motion.p>
                <p className={`text-sm text-center ${
                  darkMode ? 'text-white/60' : 'text-white/80 light-mode-subtext'
                }`}>
                  {t('please_wait')}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sign Out Section - WITH GLOW EFFECTS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className=""
      >
        <motion.div
          className="rounded-[18px] sm:rounded-[24px] transition-all duration-500 relative"
          style={{
            padding: window.innerWidth < 640 ? '12px' : '28px',
            background: darkMode 
              ? 'rgba(25, 18, 45, 0.6)' 
              : 'rgba(120, 60, 160, 0.25)',
            border: darkMode 
              ? '1px solid rgba(100, 70, 160, 0.3)' 
              : '1px solid rgba(255, 255, 255, 0.18)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            zIndex: 100,
            isolation: 'isolate'
          }}
        >
          {/* Ambient glass reflection */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/3 via-transparent to-white/3 mix-blend-soft-light pointer-events-none rounded-[18px] sm:rounded-[24px]" />
          {!darkMode && (
            <div
              className="absolute inset-0 pointer-events-none rounded-[18px] sm:rounded-[24px]"
              style={{ border: '1px solid rgba(255, 255, 255, 0.18)' }}
            />
          )}
          {!darkMode && (
            <div
              className="absolute inset-0 pointer-events-none rounded-[18px] sm:rounded-[24px]"
              style={{ boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.25), inset 0 -3px 8px rgba(255, 255, 255, 0.22)' }}
            />
          )}
          {!darkMode && (
            <div
              className="absolute inset-0 pointer-events-none rounded-[18px] sm:rounded-[24px]"
              style={{
                background: 'radial-gradient(900px 320px at 12% 0%, rgba(244, 114, 182, 0.11), transparent 68%), radial-gradient(900px 320px at 88% 100%, rgba(251, 113, 133, 0.09), transparent 68%)'
              }}
            />
          )}
          {!darkMode && (
            <div
              className="absolute inset-0 pointer-events-none rounded-[18px] sm:rounded-[24px]"
              style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.06), transparent)' }}
            />
          )}
          <div className="relative z-10">
            {/* Header */}
            <motion.div
              className="flex items-center justify-between"
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-[44px] h-[44px] rounded-2xl flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: darkMode 
                      ? 'linear-gradient(135deg, rgba(239, 68, 68, 0.35) 0%, rgba(249, 115, 22, 0.35) 100%)' 
                      : 'linear-gradient(135deg, rgba(251, 113, 133, 0.3) 0%, rgba(244, 114, 182, 0.3) 100%)',
                    backdropFilter: 'blur(40px)',
                    WebkitBackdropFilter: 'blur(40px)',
                    border: darkMode ? '1px solid rgba(248, 113, 113, 0.35)' : '1px solid rgba(248, 113, 113, 0.4)',
                    boxShadow: darkMode
                      ? '0 0 20px rgba(248, 113, 113, 0.15), inset 0 -2px 8px rgba(248, 113, 113, 0.1)'
                      : '0 0 15px rgba(248, 113, 113, 0.15), inset 0 -2px 6px rgba(248, 113, 113, 0.15)'
                  }}
                >
                  <LogOut className="w-[22px] h-[22px]" style={{ color: darkMode ? '#F87171' : 'rgb(251, 113, 133)' }} />
                </div>

                <div>
                  <h2 
                    className="text-[17px] sm:text-[22px] font-bold tracking-tight"
                    style={{
                      color: darkMode ? '#FFFFFF' : 'rgba(255, 255, 255, 1)',
                      transition: 'color 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
                    }}
                  >{t('sign_out')}</h2>
                  <p 
                    className="text-[13px] sm:text-[17px]"
                    style={{
                      color: darkMode ? 'rgba(199, 186, 220, 0.7)' : 'rgba(255, 255, 255, 0.6)',
                      marginTop: '4px'
                    }}
                  >
                    {t('securely_logout')}
                  </p>
                </div>
              </div>


            </motion.div>

            <AnimatePresence>
            {true && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: 1, 
                height: 'auto',
                transition: {
                  height: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
                  opacity: { duration: 0.35, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
                }
              }}
              exit={{ 
                opacity: 0, 
                height: 0,
                transition: {
                  height: { duration: 0.4, ease: [0.55, 0.085, 0.68, 0.53] },
                  opacity: { duration: 0.2, ease: [0.55, 0.085, 0.68, 0.53] }
                }
              }}
              style={{ overflow: 'visible' }}
            >
            {/* Connection Status */}
            <motion.div
              className="rounded-[18px] sm:rounded-[24px] p-4 mb-4 mt-4"
              style={darkMode ? (
                isOnlineState
                  ? {
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: 'rgba(52, 211, 153, 0.4)',
                      background: 'linear-gradient(to bottom right, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.1))',
                      boxShadow: '0 4px 20px rgba(16, 185, 129, 0.2), 0 0 40px rgba(52, 211, 153, 0.1)'
                    }
                  : {
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: 'rgba(251, 146, 60, 0.4)',
                      background: 'linear-gradient(to bottom right, rgba(249, 115, 22, 0.15), rgba(239, 68, 68, 0.1))',
                      boxShadow: '0 4px 20px rgba(249, 115, 22, 0.2), 0 0 40px rgba(251, 146, 60, 0.1)'
                    }
              ) : (
                isOnlineState
                  ? {
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                      background: 'linear-gradient(to bottom right, rgba(52, 211, 153, 0.25), rgba(16, 185, 129, 0.2))',
                      backdropFilter: 'blur(12px)'
                    }
                  : {
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                      background: 'linear-gradient(to bottom right, rgba(249, 115, 22, 0.25), rgba(239, 68, 68, 0.2))',
                      backdropFilter: 'blur(12px)'
                    }
              )}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  {/* Micro-icon glow */}
                  <div className="absolute bg-white/10 blur-xl -inset-2 rounded-full" />
                  <motion.div
                    className="relative"
                    animate={isOnlineState ? {
                      scale: [1, 1.15, 1]
                    } : {
                      rotate: [0, -10, 10, 0]
                    }}
                    transition={{
                      duration: isOnlineState ? 2 : 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {isOnlineState ? (
                      <Wifi className={`w-6 h-6 ${darkMode ? 'text-green-400' : 'text-white'}`} strokeWidth={2.5} />
                    ) : (
                      <WifiOff className={`w-6 h-6 ${darkMode ? 'text-orange-400' : 'text-white'}`} strokeWidth={2.5} />
                    )}
                  </motion.div>
                </div>
                <div className="flex-1">
                  <span 
                    className="font-bold text-sm block"
                    style={{
                      color: isOnlineState
                        ? darkMode ? 'rgb(134, 239, 172)' : 'rgba(255, 255, 255, 1)'
                        : darkMode ? 'rgb(253, 186, 116)' : 'rgba(255, 255, 255, 1)',
                      transition: 'color 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
                    }}
                  >
                    {isOnlineState ? t('ready_to_sign_out') : t('youre_offline')}
                  </span>
                  <span 
                    className="text-xs"
                    style={{
                      color: isOnlineState
                        ? darkMode ? 'rgba(187, 247, 208, 0.6)' : 'rgba(255, 255, 255, 0.9)'
                        : darkMode ? 'rgba(254, 215, 170, 0.6)' : 'rgba(255, 255, 255, 0.9)',
                      transition: 'color 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
                    }}
                  >
                    {isOnlineState ? t('connected_to_internet') : t('connect_to_logout')}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Unsaved Progress Warning */}
            <AnimatePresence>
              {pendingChanges && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: 1, 
                    height: 'auto',
                    transition: {
                      height: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
                      opacity: { duration: 0.35, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
                    }
                  }}
                  exit={{ 
                    opacity: 0, 
                    height: 0,
                    transition: {
                      height: { duration: 0.4, ease: [0.55, 0.085, 0.68, 0.53] },
                      opacity: { duration: 0.2, ease: [0.55, 0.085, 0.68, 0.53] }
                    }
                  }}
                  className="rounded-[18px] sm:rounded-[24px] p-4 mb-4"
                  style={darkMode ? {
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'rgba(251, 191, 36, 0.4)',
                    background: 'linear-gradient(to bottom right, rgba(234, 179, 8, 0.15), rgba(217, 119, 6, 0.1))',
                    boxShadow: '0 4px 20px rgba(234, 179, 8, 0.2), 0 0 40px rgba(251, 191, 36, 0.1)'
                  } : {
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    background: 'linear-gradient(to bottom right, rgba(252, 211, 77, 0.3), rgba(251, 191, 36, 0.25))',
                    backdropFilter: 'blur(12px)'
                  }}
                >
                  <div className="flex items-start gap-3">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <AlertTriangle className={`w-6 h-6 flex-shrink-0 mt-0.5 ${darkMode ? 'text-yellow-400' : 'text-white'}`} strokeWidth={2.5} />
                    </motion.div>
                    <div className="flex-1">
                      <p className={`font-bold text-sm mb-1 ${
                        darkMode ? 'text-yellow-200' : 'text-white light-mode-text'
                      }`}>
                        {t('unsaved_progress_detected')}
                      </p>
                      <p className={`text-xs leading-relaxed ${
                        darkMode ? 'text-yellow-200/70' : 'text-white/95 light-mode-subtext'
                      }`}>
                        {t('will_save_before_logout')}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Logout Button */}
            <motion.button
              onClick={() => { playButtonTap(); handleLogout(); }}
              disabled={!isOnlineState || loggingOut}
              whileHover="hover"
              whileTap="tap"
              variants={{
                hover: isOnlineState && !loggingOut ? { 
                  scale: 1.015,
                  y: -1,
                  filter: darkMode ? 'brightness(1.15)' : 'brightness(1.12)'
                } : {},
                tap: isOnlineState && !loggingOut ? { 
                  scale: 0.985,
                  y: 1,
                  filter: darkMode ? 'brightness(0.95)' : 'brightness(0.9)'
                } : {}
              }}
              transition={{ 
                type: "spring", 
                stiffness: 250, 
                damping: 22,
                mass: 0.8
              }}
              className="relative w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-[18px] sm:rounded-[24px] font-semibold text-sm transition-all text-white group"
              style={
                (!isOnlineState || loggingOut)
                  ? {
                      background: 'rgba(255, 255, 255, 0.06)',
                      backdropFilter: darkMode ? 'blur(32px)' : 'blur(35px)',
                      WebkitBackdropFilter: darkMode ? 'blur(32px)' : 'blur(35px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: 'rgba(255, 255, 255, 0.4)',
                      cursor: 'not-allowed',
                      overflow: 'visible'
                    }
                  : {
                      background: darkMode 
                        ? 'linear-gradient(135deg, rgba(239, 68, 68, 0.6) 0%, rgba(236, 72, 153, 0.6) 50%, rgba(217, 70, 239, 0.6) 100%)'
                        : 'linear-gradient(135deg, rgb(239, 68, 68), rgb(244, 114, 182), rgb(251, 113, 133))',
                      backdropFilter: darkMode ? 'blur(32px)' : 'blur(35px)',
                      WebkitBackdropFilter: darkMode ? 'blur(32px)' : 'blur(35px)',
                      border: darkMode ? '1px solid rgba(248, 113, 113, 0.5)' : '1px solid rgba(255, 255, 255, 0.5)',
                      boxShadow: darkMode
                        ? '0 30px 60px -15px rgba(0, 0, 0, 0.12), 0 15px 30px -10px rgba(0, 0, 0, 0.08), 0 0 20px rgba(239, 68, 68, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -3px 8px rgba(255, 255, 255, 0.08)'
                        : '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 12px 24px -8px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.5), inset 0 -2px 6px rgba(255, 255, 255, 0.3)',
                      overflow: 'visible'
                    }
              }
            >
              {/* Glass reflection layer */}
              {isOnlineState && !loggingOut && (
                <div className="absolute inset-0 rounded-[18px] sm:rounded-[24px] bg-gradient-to-b from-white/15 via-transparent to-transparent pointer-events-none" />
              )}
              
              <LogOut 
                className="w-5 h-5 relative z-10 transition-all duration-300" 
                strokeWidth={2.5} 
                style={{ 
                  filter: 'drop-shadow(0 0 0px rgba(255, 255, 255, 0))'
                }} 
              />
              <span 
                className="relative z-10 transition-all duration-300"
                style={{
                  textShadow: 'none'
                }}
              >
                {loggingOut ? logoutStep : t('sign_out')}
              </span>
              
              {/* Hover/Tap glow effects */}
              {isOnlineState && !loggingOut && (
                <style jsx>{`
                  .group:hover .w-5 {
                    filter: ${darkMode 
                      ? 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.12))' 
                      : 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.15))'} !important;
                  }
                  .group:hover span {
                    text-shadow: ${darkMode
                      ? '0 0 3px rgba(255, 255, 255, 0.12), 0 0 2px rgba(255, 255, 255, 0.1)'
                      : '0 0 4px rgba(255, 255, 255, 0.18), 0 0 2px rgba(255, 255, 255, 0.14)'} !important;
                  }
                  .group:active .w-5 {
                    filter: ${darkMode 
                      ? 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.15))' 
                      : 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.2))'} !important;
                  }
                  .group:active span {
                    text-shadow: ${darkMode
                      ? '0 0 4px rgba(255, 255, 255, 0.15), 0 0 2px rgba(255, 255, 255, 0.12)'
                      : '0 0 5px rgba(255, 255, 255, 0.22), 0 0 3px rgba(255, 255, 255, 0.18)'} !important;
                  }
                `}</style>
              )}
            </motion.button>

            {/* Help text */}
            {!isOnlineState && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`text-xs text-center mt-3 ${
                  darkMode ? 'text-red-200/60' : 'text-white/90 light-mode-subtext'
                }`}
              >
                {t('connect_to_sign_out')}
              </motion.p>
            )}
            </motion.div>
            )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}