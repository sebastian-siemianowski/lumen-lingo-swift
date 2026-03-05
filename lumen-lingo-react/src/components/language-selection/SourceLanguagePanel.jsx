import React from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useDarkMode } from "../theme/DarkModeContext";
import LanguageCard from "./LanguageCard";

export default function SourceLanguagePanel({ 
  selectedSource, 
  sourceLanguages, 
  onSourceChange, 
  t,
  isMobile = false
}) {
  const { darkMode } = useDarkMode();

  return (
    <div className={isMobile ? 'mb-8' : ''}>
      <div className="flex items-center gap-2 mb-2.5">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Globe 
            className={`w-4 h-4 ${darkMode ? 'text-cyan-400' : 'text-cyan-300'}`}
            style={{ filter: darkMode ? 'drop-shadow(0 0 6px rgba(34,211,238,0.5))' : 'drop-shadow(0 0 4px rgba(34,211,238,0.4))' }}
          />
        </motion.div>
        <motion.h3
          key={`i-know-${selectedSource}-${isMobile ? 'mobile' : 'desktop'}`}
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
          {t('i_know')}
        </motion.h3>
      </div>
      
      {!isMobile ? (
        <div className="h-[420px]">
          <div className="grid grid-cols-3 gap-2.5">
            {sourceLanguages.map((lang, index) => (
              <motion.div
                key={lang.code}
                initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.04,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <LanguageCard
                  lang={lang}
                  isSelected={selectedSource === lang.code}
                  onClick={() => onSourceChange(lang.code)}
                  type="source"
                  isMobile={isMobile}
                  t={t}
                />
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-2.5">
          {sourceLanguages.map((lang, index) => (
            <motion.div
              key={lang.code}
              initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.04,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <LanguageCard
                lang={lang}
                isSelected={selectedSource === lang.code}
                onClick={() => onSourceChange(lang.code)}
                type="source"
                isMobile={isMobile}
                t={t}
              />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}