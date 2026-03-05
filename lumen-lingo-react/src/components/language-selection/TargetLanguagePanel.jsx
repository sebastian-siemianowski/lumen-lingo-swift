import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useDarkMode } from "../theme/DarkModeContext";
import LanguageCard from "./LanguageCard";
import BetaLanguagesSection from "./BetaLanguagesSection";
import EnableMoreBanner from "./EnableMoreBanner";

const languageCardVariants = {
  initial: { 
    opacity: 0, 
    y: 8,
    filter: 'blur(4px)'
  },
  animate: (index) => ({ 
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.4,
      delay: index * 0.04,
      ease: [0.16, 1, 0.3, 1]
    }
  }),
  exit: { 
    opacity: 0, 
    scale: 0.85, 
    filter: 'blur(10px)',
    y: -20,
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 0.6, 1]
    }
  }
};

const panelTransitionVariants = {
  initial: { 
    opacity: 0, 
    filter: 'blur(20px)'
  },
  animate: { 
    opacity: 1, 
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  exit: { 
    opacity: 0, 
    filter: 'blur(20px)', 
    scale: 0.94,
    y: -20,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 1, 1]
    }
  }
};

export default function TargetLanguagePanel({ 
  selectedSource,
  selectedTarget,
  availableTargetLanguages,
  unavailableTargetLanguages,
  onTargetChange,
  t,
  isMobile = false,
  isDesktop = false
}) {
  const { darkMode } = useDarkMode();

  return (
    <div className={isMobile ? 'mb-10' : ''}>
      <div className="flex items-center gap-2 mb-2.5">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <GraduationCap 
            className={`w-4 h-4 ${darkMode ? 'text-pink-400' : 'text-fuchsia-200'}`}
            style={{ filter: darkMode ? 'drop-shadow(0 0 6px rgba(244,114,182,0.5))' : 'drop-shadow(0 0 8px rgba(236,72,153,0.7)) drop-shadow(0 0 12px rgba(217,70,239,0.5))' }}
          />
        </motion.div>
        <motion.h3
          key={`i-learn-${selectedSource}-${isMobile ? 'mobile' : 'desktop'}`}
          initial={{ filter: "blur(10px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.4 }}
          className={`${isMobile ? 'font-bold text-[15px]' : 'font-bold text-[17px]'} transition-colors duration-500 ${
            darkMode ? 'text-white' : 'text-white light-mode-modal-label'
          }`}
          style={{ 
            letterSpacing: '0.5px',
            textShadow: darkMode ? '0 2px 4px rgba(0, 0, 0, 0.4)' : '0 1px 2px rgba(0, 0, 0, 0.15)'
          }}
        >
          {t('i_want_to_learn')}
        </motion.h3>
      </div>

      {isDesktop ? (
        <div className="h-[420px] flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedSource}-targets`}
              variants={panelTransitionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex-shrink-0 mb-3 p-1"
            >
              <div className="grid grid-cols-3 gap-2.5 auto-rows-fr">
                <AnimatePresence mode="popLayout">
                  {availableTargetLanguages.map((lang, index) => (
                    <motion.div
                      key={lang.code}
                      layout
                      variants={languageCardVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      custom={index}
                      transition={{
                        layout: { 
                          type: "spring", 
                          stiffness: 350, 
                          damping: 28,
                          mass: 0.8
                        }
                      }}
                      className="flex"
                    >
                      <LanguageCard
                        lang={lang}
                        isSelected={selectedTarget === lang.code}
                        onClick={() => onTargetChange(lang.code)}
                        type="target"
                        t={t}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedSource}-beta`}
              variants={panelTransitionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ delay: 0.1 }}
              className="flex-1 flex flex-col min-h-0"
            >
              <BetaLanguagesSection 
                unavailableTargetLanguages={unavailableTargetLanguages}
                selectedSource={selectedSource}
                t={t}
                isDesktop={true}
              />
              <EnableMoreBanner selectedSource={selectedSource} t={t} isMobile={false} isDesktop={true} />
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        <>
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedSource}-mobile-targets`}
              variants={panelTransitionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="grid grid-cols-3 gap-2.5 mb-3"
            >
              <AnimatePresence mode="popLayout">
                {availableTargetLanguages.map((lang, index) => (
                  <motion.div
                    key={lang.code}
                    layout
                    variants={languageCardVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                      layout: { 
                        type: "spring", 
                        stiffness: 350, 
                        damping: 28 
                      }
                    }}
                  >
                    <LanguageCard
                      lang={lang}
                      isSelected={selectedTarget === lang.code}
                      onClick={() => onTargetChange(lang.code)}
                      type="target"
                      isMobile={true}
                      t={t}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>

          {unavailableTargetLanguages.length > 0 && (
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedSource}-mobile-beta`}
                variants={panelTransitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.1 }}
              >
                <BetaLanguagesSection 
                  unavailableTargetLanguages={unavailableTargetLanguages}
                  selectedSource={selectedSource}
                  t={t}
                  isDesktop={false}
                />
              </motion.div>
            </AnimatePresence>
          )}

          <EnableMoreBanner selectedSource={selectedSource} t={t} isMobile={true} isDesktop={false} />
        </>
      )}
    </div>
  );
}