import React from "react";
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";
import { useDarkMode } from "../theme/DarkModeContext";

export default function EnableMoreBanner({ selectedSource, t, isMobile = false, isDesktop = false }) {
  const { darkMode } = useDarkMode();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className={`${isDesktop ? 'rounded-[18px] sm:rounded-[24px] px-2.5 py-2 mt-2' : 'rounded-[18px] sm:rounded-[24px] p-2.5 mt-3'} border backdrop-blur-xl flex items-start gap-2 transition-all duration-500 flex-shrink-0 ${
        darkMode
          ? 'border-orange-400/40 bg-gradient-to-br from-orange-500/20 to-orange-600/20'
          : 'border-white/30 bg-gradient-to-br from-orange-400/25 to-orange-500/20'
      }`}
      style={{
        boxShadow: darkMode 
          ? '0 4px 12px rgba(249, 115, 22, 0.25)' 
          : '0 4px 12px rgba(238, 116, 73, 0.15)'
      }}
    >
      {isDesktop && (
        <div className="flex-shrink-0 mt-0.5">
          <div className="relative w-5 h-5 flex items-center justify-center">
            <div 
              className="absolute inset-0 rounded-lg"
              style={{
                background: darkMode ? '#F97316' : '#EE7449',
                boxShadow: darkMode 
                  ? '0 4px 12px rgba(249, 115, 22, 0.4), 0 2px 4px rgba(0, 0, 0, 0.1)'
                  : '0 4px 12px rgba(238, 116, 73, 0.3), 0 2px 4px rgba(0, 0, 0, 0.1)'
              }}
            />

            <div 
              className="absolute inset-0 rounded-lg"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.05) 100%)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
              }}
            />

            <div 
              className="absolute inset-x-0 top-0 h-1/2 rounded-t-lg"
              style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, transparent 100%)'
              }}
            />

            <div 
              className="absolute inset-0 rounded-lg"
              style={{
                border: '1.5px solid rgba(255, 255, 255, 0.5)',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.6)'
              }}
            />

            <Lightbulb 
              className="w-3 h-3 text-white relative z-10" 
              strokeWidth={2.5}
              fill="currentColor"
              style={{
                filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.25))'
              }}
            />
          </div>
        </div>
      )}
      <div className="flex-1 min-w-0">
        <motion.p
          key={selectedSource}
          initial={{ filter: "blur(10px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-xs ${isDesktop ? 'font-semibold' : 'font-medium text-center'} leading-relaxed transition-colors duration-500 ${
            darkMode ? isDesktop ? 'text-orange-200' : 'text-orange-200/90' : 'text-white light-mode-modal-text'
          }`}
        >
          {t('enable_more_languages')}
        </motion.p>
      </div>
    </motion.div>
  );
}