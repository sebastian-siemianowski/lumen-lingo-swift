import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDarkMode } from "../theme/DarkModeContext";

export default function BetaLanguagesSection({ 
  unavailableTargetLanguages, 
  selectedSource, 
  t,
  isDesktop = false
}) {
  const { darkMode } = useDarkMode();

  return (
    <div 
      className={`rounded-[18px] sm:rounded-[24px] ${isDesktop ? 'p-2.5 flex-1 flex flex-col min-h-0' : 'p-3'} transition-all duration-500`}
      style={{
        background: darkMode 
          ? 'rgba(139, 92, 246, 0.03)' 
          : 'rgba(255, 255, 255, 0.04)',
        border: darkMode 
          ? '1px solid rgba(255, 255, 255, 0.06)' 
          : '1px solid rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: darkMode 
          ? 'inset 0 1px 6px rgba(0, 0, 0, 0.1), inset 0 -1px 3px rgba(255, 255, 255, 0.02)'
          : 'inset 0 1px 6px rgba(0, 0, 0, 0.05), inset 0 -1px 3px rgba(255, 255, 255, 0.03)'
      }}
    >
      <p className={`text-xs font-semibold mb-2 text-center ${isDesktop ? 'flex-shrink-0' : ''} transition-colors duration-500 ${
        darkMode ? 'text-purple-300/70' : 'text-white/70 light-mode-modal-subtext'
      }`}>
        {t('beta_languages')}
      </p>
      {unavailableTargetLanguages.length > 0 ? (
        <div className={isDesktop ? 'flex-1 overflow-y-auto min-h-0' : ''}>
          <div className={`grid grid-cols-3 gap-${isDesktop ? '1.5' : '2'}`}>
            <AnimatePresence mode="popLayout">
              {unavailableTargetLanguages.map((lang, index) => (
                <motion.div
                  key={lang.code}
                  layout
                  initial={{ opacity: 0, filter: 'blur(8px)' }}
                  animate={{ opacity: 0.28, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{
                    layout: { 
                      type: "spring", 
                      stiffness: 350, 
                      damping: 28 
                    },
                    opacity: { duration: 0.3 },
                    filter: { duration: 0.3 }
                  }}
                  className={`relative ${isDesktop ? 'p-1.5' : 'p-2.5'} rounded-[18px] sm:rounded-[24px] border transition-all duration-300 flex flex-col items-center justify-center ${
                    darkMode
                      ? 'bg-gray-900/40 border-purple-500/15'
                      : 'bg-white/5 border-white/15'
                  }`}
                >
                  <div className={`${isDesktop ? 'text-sm' : 'text-lg'} ${isDesktop ? 'mb-0.5' : 'mb-1'} grayscale text-center`}>{lang.flag}</div>
                  <div className={`${isDesktop ? 'text-[9px]' : 'text-xs'} font-medium transition-colors duration-300 text-center ${
                    darkMode ? 'text-purple-200/60' : 'text-white/60'
                  }`}>
                    {t(lang.code).charAt(0).toUpperCase() + t(lang.code).slice(1)}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      ) : (
        <div className={`${isDesktop ? 'flex-1 flex items-center justify-center' : 'py-2'} text-${isDesktop ? '[10px]' : 'xs'} font-medium transition-colors duration-300 ${
          darkMode ? 'text-purple-200/40' : 'text-white/40'
        }`}>
          {t('all_languages_enabled')}
        </div>
      )}
    </div>
  );
}