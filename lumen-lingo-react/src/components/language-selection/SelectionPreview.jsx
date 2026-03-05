import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDarkMode } from "../theme/DarkModeContext";

export default function SelectionPreview({ 
  hasValidSelection,
  saving,
  selectedSource,
  selectedTarget,
  sourceLanguages,
  targetLanguages,
  availableTargetLanguages,
  t,
  isMobile = false
}) {
  const { darkMode } = useDarkMode();

  return (
    <div className={`${isMobile ? 'h-20' : 'h-7'} flex items-center justify-center ${isMobile ? 'mt-3' : 'mt-2.5'}`}>
      <AnimatePresence mode="wait">
        {hasValidSelection && !saving ? (
          <motion.div
            key={`${selectedSource}-${selectedTarget}`}
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(8px)', y: 5 }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
            exit={{ opacity: 0, scale: 0.9, filter: 'blur(8px)', y: -5 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.16, 1, 0.3, 1]
            }}
            className={isMobile ? "flex flex-col items-center justify-center" : ""}
          >
            {isMobile ? (
              <>
                <p className={`text-sm mb-1 ${darkMode ? 'text-white/60' : 'text-white/70 light-mode-modal-subtext'}`}>
                  {t('you_selected')}:
                </p>
                <p className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-white light-mode-modal-text'}`}>
                  {sourceLanguages.find(l => l.code === selectedSource)?.name} → {targetLanguages.find(l => l.code === selectedTarget)?.name}
                </p>
              </>
            ) : (
              <p 
                className={`relative text-center text-base font-medium transition-colors duration-500 w-fit mx-auto pb-1 ${
                  darkMode ? 'text-purple-100/85' : 'text-white/90 light-mode-modal-subtext'
                }`}
                style={{ 
                  letterSpacing: '1.3px',
                  textShadow: darkMode 
                    ? '0 0.5px 2px rgba(255, 255, 255, 0.1)' 
                    : '0 0.5px 2px rgba(255, 255, 255, 0.15)'
                }}
              >
                {t(selectedSource)} → {t(selectedTarget)}
                {/* Underline glow */}
                <span 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-3/4"
                  style={{
                    background: darkMode 
                      ? 'linear-gradient(90deg, transparent, rgba(192, 132, 252, 0.4), transparent)'
                      : 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent)',
                    boxShadow: darkMode 
                      ? '0 0 8px rgba(192, 132, 252, 0.3)' 
                      : '0 0 6px rgba(255, 255, 255, 0.2)'
                  }}
                />
              </p>
            )}
          </motion.div>
        ) : !hasValidSelection && !saving ? (
          <motion.p
            key={`no-selection-${selectedSource}-${isMobile ? 'mobile' : 'desktop'}`}
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(8px)', y: 5 }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
            exit={{ opacity: 0, scale: 0.9, filter: 'blur(8px)', y: -5 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.16, 1, 0.3, 1]
            }}
            className={`text-center ${isMobile ? 'text-sm' : 'text-xs'} drop-shadow-sm transition-colors duration-500 ${
              darkMode ? 'text-purple-300/60' : 'text-white/60 light-mode-modal-subtext'
            }`}
          >
            {isMobile && availableTargetLanguages.length === 0 
              ? t('enable_beta_languages_in_profile') 
              : isMobile 
                ? t('select_languages_above')
                : t('enable_beta_languages_in_profile')}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}