import React from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useDarkMode } from "../theme/DarkModeContext";
import GlassDivider from "../shared/GlassDivider";

export default function LanguageSelectionHeader({ selectedSource, t, isMobile }) {
  const { darkMode } = useDarkMode();

  return (
    <div className={`flex flex-col items-center ${isMobile ? 'mt-6 mb-4' : 'mb-3'}`}>
      {/* Icon above text - stays stable */}
      <motion.div 
        className={`${isMobile ? 'w-10 h-10 mb-2' : 'w-9 h-9 mb-2'} rounded-xl flex items-center justify-center border shadow-lg transition-all duration-500 ${
          darkMode
            ? 'bg-gradient-to-br from-violet-500/40 to-fuchsia-600/40 border-purple-300/40'
            : 'bg-gradient-to-br from-violet-400 to-fuchsia-500 border-white/30'
        }`}
        style={darkMode ? {
          boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)'
        } : {}}
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Globe className={`${isMobile ? 'w-5 h-5' : 'w-[18px] h-[18px]'} text-white drop-shadow-lg`} strokeWidth={2.5} />
      </motion.div>
      
      {/* Text content */}
      <div className="flex flex-col items-center">
        <motion.h2
          key={selectedSource}
          initial={{ filter: "blur(10px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.4 }}
          className={`${isMobile ? 'text-lg' : 'text-lg'} font-black transition-colors duration-500 text-center ${
            darkMode ? 'text-white' : 'text-white light-mode-modal-heading'
          }`}
          style={{ 
            letterSpacing: '0.02em',
            textShadow: darkMode ? '0 2px 4px rgba(0, 0, 0, 0.5)' : '0 1px 2px rgba(0, 0, 0, 0.2)'
          }}
        >
          {t('choose_your_journey')}
        </motion.h2>
        {!isMobile && (
          <motion.p
            key={`${selectedSource}-sub`}
            initial={{ filter: "blur(10px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className={`text-xs mt-0.5 font-medium transition-colors duration-500 text-center ${
              darkMode ? 'text-white/85' : 'text-white/85 light-mode-modal-subtext'
            }`}
            style={{ 
              letterSpacing: '0.01em',
              textShadow: darkMode ? '0 1px 3px rgba(0, 0, 0, 0.4)' : '0 1px 2px rgba(0, 0, 0, 0.15)'
            }}
          >
            {t('select_learning_pair')}
          </motion.p>
        )}
      </div>
      
      {/* Subtle underline gradient */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className={`${isMobile ? 'w-36' : 'w-36'} mt-2`}
      >
        <GlassDivider />
      </motion.div>
    </div>
  );
}