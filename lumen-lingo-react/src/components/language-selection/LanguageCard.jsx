import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useDarkMode } from "../theme/DarkModeContext";
import useAudioFeedback from "../shared/useAudioFeedback";

export default function LanguageCard({ 
  lang, 
  isSelected, 
  onClick, 
  type = 'source',
  isMobile = false,
  t
}) {
  const { darkMode } = useDarkMode();
  const { playSoftClick } = useAudioFeedback();
  
  const isPurple = type === 'source';
  
  return (
    <motion.button
      onClick={() => {
        playSoftClick();
        onClick();
      }}
      whileHover={!isMobile ? { scale: 1.04, y: -2 } : undefined}
      whileTap={{ 
        scale: 0.97, 
        filter: 'brightness(0.95)',
        boxShadow: '0 0 0 0 transparent',
        transition: { duration: 0.15 }
      }}
      animate={isSelected ? { 
        scale: 1.06,
        boxShadow: isMobile 
          ? '0 6px 14px rgba(255, 255, 255, 0.18)' 
          : undefined
      } : { 
        scale: 1,
        boxShadow: isMobile 
          ? '0 4px 10px rgba(255, 255, 255, 0.12)' 
          : undefined
      }}
      animate={isSelected ? { scale: 1.06 } : { scale: 1 }}
      transition={{
        scale: { type: "spring", stiffness: 300, damping: 20 },
        y: { type: "spring", stiffness: 400, damping: 25 },
        filter: { duration: 0.15, ease: "easeOut" },
        boxShadow: { type: "spring", stiffness: 250, damping: 18 }
      }}
      className={`relative ${isMobile ? 'p-3' : 'p-2 mb-0.5'} rounded-[18px] sm:rounded-[24px] border transition-all duration-300 w-full h-full ${
        isSelected
          ? darkMode
            ? isPurple
              ? 'border-purple-300/70'
              : 'border-fuchsia-300/70'
            : 'border-white/60'
          : darkMode
            ? isPurple
              ? 'border-purple-400/40 hover:border-purple-300/60'
              : 'border-fuchsia-400/40 hover:border-fuchsia-300/60'
            : 'border-white/15 hover:border-white/40'
      }`}
      style={{
        background: isSelected
          ? darkMode 
            ? isPurple
              ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.32) 0%, rgba(168, 85, 247, 0.28) 50%, rgba(192, 132, 252, 0.24) 100%)'
              : 'linear-gradient(135deg, rgba(217, 70, 239, 0.32) 0%, rgba(236, 72, 153, 0.28) 50%, rgba(244, 114, 182, 0.24) 100%)'
            : 'rgba(255, 255, 255, 0.25)'
          : darkMode 
            ? isPurple
              ? 'rgba(25, 18, 45, 0.55)'
              : 'rgba(25, 18, 45, 0.55)'
            : 'rgba(255, 255, 255, 0.08)',
        backdropFilter: darkMode ? 'blur(24px)' : 'blur(35px)',
        WebkitBackdropFilter: darkMode ? 'blur(24px)' : 'blur(35px)',
        boxShadow: isSelected
          ? darkMode
            ? isPurple
              ? '0 0 30px rgba(168, 85, 247, 0.5), 0 0 15px rgba(34, 211, 238, 0.2), 0 8px 24px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.25), inset 0 0 20px rgba(168, 85, 247, 0.15), inset 0 -2px 10px rgba(255, 255, 255, 0.1)'
              : '0 0 30px rgba(217, 70, 239, 0.5), 0 0 15px rgba(244, 114, 182, 0.2), 0 8px 24px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.25), inset 0 0 20px rgba(217, 70, 239, 0.15), inset 0 -2px 10px rgba(255, 255, 255, 0.1)'
            : '0 25px 50px -12px rgba(0, 0, 0, 0.08), 0 12px 24px -8px rgba(0, 0, 0, 0.05), 0 0 25px rgba(255, 255, 255, 0.1), inset 0 -2px 6px rgba(255, 255, 255, 0.3), inset 0 0 8px rgba(255, 255, 255, 0.1)'
          : darkMode
            ? 'inset 0 1px 1px rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.03), 0 4px 12px rgba(0, 0, 0, 0.15)'
            : '0 25px 50px -12px rgba(0, 0, 0, 0.05), 0 12px 24px -8px rgba(0, 0, 0, 0.03), inset 0 -2px 6px rgba(255, 255, 255, 0.2), inset 0 0 8px rgba(255, 255, 255, 0.1)'
      }}
    >
      {isSelected && (
        <>
          {/* Ripple effect */}
          <motion.div
            className="absolute -top-1.5 -right-1.5 w-8 h-8 rounded-full"
            initial={{ scale: 0.5, opacity: 0.15 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              background: darkMode
                ? isPurple ? 'rgba(34, 211, 238, 0.3)' : 'rgba(244, 114, 182, 0.3)'
                : isPurple ? 'rgba(34, 211, 238, 0.25)' : 'rgba(251, 146, 60, 0.25)'
            }}
          />
          <motion.div 
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 500, 
              damping: 18,
              mass: 0.8
            }}
            className={`absolute ${isMobile ? '-top-1 -right-1 w-6 h-6' : '-top-1.5 -right-1.5 w-[18px] h-[18px]'} rounded-full flex items-center justify-center ${
            darkMode
              ? isPurple
                ? 'bg-gradient-to-br from-cyan-400 to-cyan-500'
                : 'bg-gradient-to-br from-pink-400 to-pink-500'
              : isPurple
                ? 'bg-gradient-to-br from-white to-cyan-100'
                : 'bg-gradient-to-br from-orange-400 via-orange-500 to-amber-500'
          }`}
            style={darkMode ? {
              boxShadow: isPurple 
                ? '0 0 12px rgba(34, 211, 238, 0.55), 0 0 20px rgba(34, 211, 238, 0.35), 0 2px 4px rgba(0, 0, 0, 0.15)' 
                : '0 0 12px rgba(244, 114, 182, 0.55), 0 0 20px rgba(244, 114, 182, 0.35), 0 2px 4px rgba(0, 0, 0, 0.15)'
            } : isPurple ? {
              boxShadow: '0 0 10px rgba(34, 211, 238, 0.45), 0 0 18px rgba(34, 211, 238, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.5)'
            } : {
              boxShadow: '0 0 10px rgba(255, 170, 20, 0.45), 0 0 18px rgba(251, 146, 60, 0.35), 0 2px 6px rgba(245, 158, 11, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.45)'
            }}
          >
          <Check className={`${isMobile ? 'w-3.5 h-3.5' : 'w-3 h-3'} ${darkMode ? 'text-white' : isPurple ? 'text-cyan-600' : 'text-white'} drop-shadow-sm`} strokeWidth={3.5} />
          </motion.div>
          </>
          )}
      {/* Glass curvature light gradient */}
      <div 
        className="absolute top-0 left-0 w-full h-[22%] rounded-t-[18px] sm:rounded-t-[24px] pointer-events-none"
        style={{
          background: darkMode 
            ? isSelected
              ? 'linear-gradient(to bottom, rgba(255, 255, 255, 0.15), transparent)'
              : 'linear-gradient(to bottom, rgba(255, 255, 255, 0.06), transparent)'
            : 'linear-gradient(to bottom, rgba(255, 255, 255, 0.12), transparent)',
          filter: 'blur(1px)'
        }}
      />
      
      {/* Ambient glow for dark mode */}
      {darkMode && (
        <div className="absolute inset-0 bg-gradient-to-b from-white/3 via-transparent to-white/3 mix-blend-soft-light pointer-events-none rounded-[18px] sm:rounded-[24px]" />
      )}
      <div className={isMobile ? 'text-2xl mb-1' : 'text-lg mb-0.5'}>{lang.flag}</div>
      <div className={`${isMobile ? 'text-xs' : 'text-[11px]'} font-bold transition-colors duration-300 ${
        isSelected 
          ? darkMode ? 'text-white' : 'text-white light-mode-modal-lang' 
          : darkMode ? 'text-white/85' : 'text-white/90 light-mode-modal-lang'
      }`}
        style={{ textShadow: darkMode ? '0 1px 3px rgba(0, 0, 0, 0.4)' : '0 1px 2px rgba(0, 0, 0, 0.15)' }}>
        {type === 'source' ? lang.name : (t(lang.code).charAt(0).toUpperCase() + t(lang.code).slice(1))}
      </div>
    </motion.button>
  );
}