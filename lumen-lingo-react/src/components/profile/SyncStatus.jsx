import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock } from 'lucide-react';
import { useDarkMode } from "../theme/DarkModeContext";
import { useTranslations } from "../utils/translations";
import { useLanguage } from "../language/LanguageContext";
import useAudioFeedback from "../shared/useAudioFeedback";
import useSyncLogic from "./useSyncLogic";
import SyncHeader from "./SyncHeader";
import SyncStatusMessage from "./SyncStatusMessage";
import SyncButtons from "./SyncButtons";

export default function SyncStatus({ onReloadProfile }) {
  const { darkMode } = useDarkMode();
  const { sourceLanguage } = useLanguage();
  const t = useTranslations(sourceLanguage);
  const { playSoftClick, playButtonTap } = useAudioFeedback();

  const [isDesktop, setIsDesktop] = useState(() => (typeof window !== 'undefined' ? window.innerWidth >= 640 : false));
  useEffect(() => {
    const handler = () => setIsDesktop(window.innerWidth >= 640);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const [isExpanded, setIsExpanded] = useState(true);
  const [showSyncDetails, setShowSyncDetails] = useState(false);

  const {
    syncing,
    syncStatus,
    pendingChanges,
    lastSync,
    handleUpload,
    handleDownload,
    setSyncStatus
  } = useSyncLogic(t, onReloadProfile);

  const formatLastSync = (timestamp) => {
    if (!timestamp) return t('never_synced');

    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return t('just_now');
    if (diffMins < 60) return `${diffMins} ${t('min_ago')}`;
    if (diffHours === 1) return `1 ${t('hour_ago')}`;
    if (diffHours < 24) return `${diffHours} ${t('hours_ago')}`;
    if (diffDays === 1) return `1 ${t('day_ago')}`;
    return `${diffDays} ${t('days_ago')}`;
  };

  const handleToggleExpanded = () => {
    if (isExpanded) {
      setSyncStatus(null);
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="mb-0"
    >
      <motion.div
        className="rounded-[18px] sm:rounded-[24px] transition-all duration-500 relative"
        style={{
          padding: window.innerWidth < 640 ? '12px 12px 20px 12px' : '28px 28px 28px 28px',
          background: darkMode 
            ? 'rgba(25, 18, 45, 0.6)' 
            : 'rgba(120, 60, 160, 0.25)',
          border: darkMode 
            ? '1px solid rgba(100, 70, 160, 0.3)' 
            : '1px solid rgba(255, 255, 255, 0.18)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          isolation: 'isolate'
        }}
      >
        {/* Glass effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/3 via-transparent to-white/3 mix-blend-soft-light pointer-events-none rounded-[18px] sm:rounded-[24px]" />
        {!darkMode && (
          <>
            <div className="absolute inset-0 pointer-events-none rounded-[18px] sm:rounded-[24px]" style={{ border: '1px solid rgba(255, 255, 255, 0.18)' }} />
            <div className="absolute inset-0 pointer-events-none rounded-[18px] sm:rounded-[24px]" style={{ boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.25), inset 0 -3px 8px rgba(255, 255, 255, 0.22)' }} />
            <div className="absolute inset-0 pointer-events-none rounded-[18px] sm:rounded-[24px]" style={{ background: 'radial-gradient(900px 320px at 12% 0%, rgba(20, 184, 166, 0.11), transparent 68%), radial-gradient(900px 320px at 88% 100%, rgba(16, 185, 129, 0.09), transparent 68%)' }} />
            <div className="absolute inset-0 pointer-events-none rounded-[18px] sm:rounded-[24px]" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.06), transparent)' }} />
          </>
        )}
        
        <div className="relative z-10">
          <SyncHeader
             darkMode={darkMode}
             t={t}
             pendingChanges={pendingChanges}
             isExpanded={isExpanded}
             onToggle={handleToggleExpanded}
             playSoftClick={playSoftClick}
             isDesktop={isDesktop}
           />

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
                {lastSync && (
                  <div 
                    className="flex items-center gap-2 text-xs mt-1.5 mb-2.5"
                    style={{
                      color: 'rgba(255, 255, 255, 0.6)',
                      transition: 'color 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
                    }}
                  >
                    <Clock className="w-4 h-4" />
                    <span>{formatLastSync(lastSync)}</span>
                  </div>
                )}

                <AnimatePresence mode="wait">
                  <SyncStatusMessage
                    syncStatus={syncStatus}
                    showSyncDetails={showSyncDetails}
                    onToggleDetails={() => setShowSyncDetails(!showSyncDetails)}
                    darkMode={darkMode}
                    playSoftClick={playSoftClick}
                  />
                </AnimatePresence>

                <SyncButtons
                  syncing={syncing}
                  darkMode={darkMode}
                  t={t}
                  onUpload={handleUpload}
                  onDownload={handleDownload}
                  playButtonTap={playButtonTap}
                />

                <div className={`rounded-[18px] sm:rounded-[24px] p-3 mt-2 border ${
                  darkMode
                    ? 'bg-white/5 border-white/10'
                    : 'bg-white/15 backdrop-blur-xl border-white/25'
                }`}>
                  <p className={`text-xs text-center ${
                    darkMode ? 'text-white/50' : 'text-white/85 light-mode-subtext'
                  }`}>
                    Upload saves your local progress to the cloud. Download retrieves your last saved data. Downloading will overwrite your local data.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}