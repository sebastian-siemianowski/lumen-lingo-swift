import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useDarkMode } from "../theme/DarkModeContext";
import useAudioFeedback from "../shared/useAudioFeedback";

export default function SchemeCard({ 
  scheme, 
  isSelected, 
  onSelect, 
  previewHeight = '80px',
  renderPreview 
}) {
  const { darkMode } = useDarkMode();
  const { playSoftClick } = useAudioFeedback();

  const getCardStyles = () => ({
    background: darkMode 
      ? 'transparent' 
      : 'rgba(255, 255, 255, 0.08)',
    backdropFilter: darkMode ? 'none' : 'blur(35px)',
    WebkitBackdropFilter: darkMode ? 'none' : 'blur(35px)',
    border: isSelected
      ? `1px solid ${scheme.colors[scheme.colors.length > 3 ? 2 : 1]}`
      : darkMode
        ? '1px solid rgba(168, 85, 247, 0.35)'
        : '1px solid rgba(255, 255, 255, 0.25)',
    boxShadow: isSelected
      ? darkMode
        ? `inset 0 2px 8px rgba(255, 255, 255, 0.1), inset 0 0 25px rgba(255, 255, 255, 0.08), inset 0 -2px 12px rgba(255, 255, 255, 0.1), 0 0 25px ${scheme.colors[scheme.colors.length > 3 ? 2 : 1]}50, 0 0 20px rgba(255, 255, 255, 0.15)`
        : `inset 0 2px 8px rgba(255, 255, 255, 0.15), 0 25px 50px -12px rgba(0, 0, 0, 0.08), 0 12px 24px -8px rgba(0, 0, 0, 0.05), inset 0 -2px 6px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.15)`
      : darkMode
        ? 'inset 0 1px 1px rgba(255, 255, 255, 0.15), inset 0 0 15px rgba(255, 255, 255, 0.03), inset 0 -2px 8px rgba(255, 255, 255, 0.05)'
        : '0 25px 50px -12px rgba(0, 0, 0, 0.05), 0 12px 24px -8px rgba(0, 0, 0, 0.03), inset 0 -2px 6px rgba(255, 255, 255, 0.2)',
    transition: 'border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
  });

  return (
    <motion.button
      onClick={() => {
        playSoftClick();
        onSelect(scheme.id);
      }}
      className={`group relative overflow-hidden rounded-[18px] sm:rounded-[24px] flex flex-col ${
        !isSelected ? 'hover:border-white/20' : ''
      }`}
      style={getCardStyles()}
      whileHover={{
        y: -4,
        scale: 1.02,
        boxShadow: isSelected 
          ? undefined 
          : darkMode 
            ? 'inset 0 2px 6px rgba(255, 255, 255, 0.08), inset 0 0 20px rgba(255, 255, 255, 0.05), inset 0 -2px 10px rgba(255, 255, 255, 0.08), 0 0 15px rgba(168, 85, 247, 0.2)'
            : 'inset 0 2px 6px rgba(255, 255, 255, 0.12), 0 25px 50px -12px rgba(0, 0, 0, 0.06), 0 12px 24px -8px rgba(0, 0, 0, 0.04), inset 0 -2px 6px rgba(255, 255, 255, 0.25)'
      }}
      whileTap={{ scale: 0.98, y: -2 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30
      }}
    >
      {/* Preview Area */}
      <div
        className="relative"
        style={{
          height: previewHeight,
          background: renderPreview 
            ? undefined 
            : scheme.colors.length === 5
              ? `linear-gradient(135deg, ${scheme.colors[0]} 0%, ${scheme.colors[1]} 25%, ${scheme.colors[2]} 50%, ${scheme.colors[3]} 75%, ${scheme.colors[4]} 100%)`
              : `linear-gradient(135deg, ${scheme.colors[0]} 0%, ${scheme.colors[1]} 50%, ${scheme.colors[2]} 100%)`
        }}
      >
        {renderPreview ? renderPreview(scheme) : (
          <>
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(0,0,0,0.15) 100%)',
                mixBlendMode: 'overlay'
              }}
            />

            <motion.div
              className="absolute inset-0 w-full h-full pointer-events-none"
              initial={{ x: '-100%', opacity: 0 }}
              whileHover={{ x: '100%', opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)'
              }}
            />
          </>
        )}

        <AnimatePresence>
          {isSelected && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 600,
                damping: 25
              }}
              className="absolute top-2 right-2"
              style={{ zIndex: 30 }}
            >
              <motion.div
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow-2xl flex items-center justify-center"
                animate={{
                  boxShadow: [
                    '0 4px 16px rgba(0, 0, 0, 0.2)',
                    '0 6px 24px rgba(0, 0, 0, 0.3)',
                    '0 4px 16px rgba(0, 0, 0, 0.2)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <CheckCircle
                  className="w-5 h-5 sm:w-5.5 sm:h-5.5"
                  strokeWidth={2.5}
                  style={{ color: scheme.colors[scheme.colors.length === 5 ? 2 : 1] }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scheme Name & Description */}
      <div 
        className="relative w-full flex-1"
        style={{
          background: darkMode ? 'transparent' : 'rgba(255, 255, 255, 0.08)'
        }}
      >
        <div className="relative px-3 pt-2.5 pb-3 sm:pt-3 sm:pb-3.5 text-center">
          <span className={`text-xs sm:text-sm font-bold block mb-1.5 ${
            isSelected
              ? 'text-white'
              : darkMode ? 'text-white/60 group-hover:text-white/80' : 'text-white'
          }`}
          style={!darkMode ? {
            textShadow: isSelected ? '0 1px 3px rgba(0, 0, 0, 0.3)' : '0 1px 2px rgba(0, 0, 0, 0.2)'
          } : {}}
          >
            {scheme.name}
          </span>
          <span className={`text-[10px] sm:text-xs block leading-snug ${
            isSelected
              ? darkMode ? 'text-white/75' : 'text-white/85'
              : darkMode ? 'text-white/40 group-hover:text-white/55' : 'text-white/85'
          }`}
          style={!darkMode ? {
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
          } : {}}
          >
            {scheme.description}
          </span>
        </div>
      </div>
    </motion.button>
  );
}