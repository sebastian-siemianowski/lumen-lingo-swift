import React, { useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDarkMode } from "../theme/DarkModeContext";
import useAudioFeedback from "../shared/useAudioFeedback";

export default function SettingsSlider({
  label,
  icon: Icon,
  value,
  onChange,
  min = 0,
  max = 2,
  step = 0.1,
  presets = [],
  formatValue = (v) => `${Math.round(v * 100)}%`,
  disabled = false
}) {
  const { darkMode } = useDarkMode();
  const { playSoftClick } = useAudioFeedback();
  const percentage = ((value - min) / (max - min)) * 100;
  const sliderId = useId().replace(/:/g, '');
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between mb-2 sm:mb-3">
        <div className="flex items-center gap-2">
          <Icon 
            className="w-4 h-4"
            style={{
              color: darkMode ? 'rgb(216, 180, 254)' : 'rgba(255, 255, 255, 1)',
              transition: 'color 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
            }}
          />
          <span 
            className="text-xs sm:text-sm font-semibold"
            style={{
              color: darkMode ? 'rgb(233, 213, 255)' : 'rgba(255, 255, 255, 1)',
              textShadow: !darkMode ? '0 2px 6px rgba(0, 0, 0, 0.25)' : undefined,
              transition: 'color 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
            }}
          >
            {label}
          </span>
        </div>
        <span
          className="text-xs sm:text-sm font-bold tabular-nums px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg"
          style={{
            color: darkMode ? 'rgb(216, 180, 254)' : 'rgba(255, 255, 255, 1)',
            background: darkMode ? 'rgba(168, 85, 247, 0.2)' : 'rgba(255, 255, 255, 0.15)',
            textShadow: !darkMode ? '0 1px 3px rgba(0, 0, 0, 0.25)' : undefined,
            backdropFilter: !darkMode ? 'blur(8px)' : undefined,
            border: !darkMode ? '1px solid rgba(255, 255, 255, 0.2)' : undefined,
            transition: 'color 1.2s cubic-bezier(0.22, 1, 0.36, 1), background 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
          }}
        >
          {formatValue(value)}
        </span>
      </div>

      <div 
        className="relative py-3 px-0.5"
        style={{
          background: 'transparent'
        }}
      >
        <div 
          className="relative"
          onMouseEnter={() => !disabled && setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          style={{
            background: 'transparent'
          }}
        >
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(parseFloat(e.target.value))}
            onMouseDown={() => !disabled && setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onTouchStart={() => !disabled && setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            disabled={disabled}
            className={`w-full h-1 rounded-full appearance-none cursor-pointer quantum-slider-${sliderId}`}
            style={{ opacity: disabled ? 0.4 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }}
          />
          <style jsx>{`
            .quantum-slider-${sliderId} {
              background: transparent;
              position: relative;
              height: 4px;
            }

            /* Ultra-Premium 3D Liquid Glass Track */
            .quantum-slider-${sliderId}::-webkit-slider-runnable-track {
              width: 100%;
              height: 7px;
              background: ${darkMode
                ? `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 30%),
                   linear-gradient(90deg,
                    rgba(170, 120, 255, 1) 0%,
                    rgba(210, 160, 255, 1) ${Math.max(0, percentage - 3)}%,
                    rgba(240, 210, 255, 1) ${percentage}%,
                    rgba(30, 18, 60, 0.45) ${percentage}%,
                    rgba(20, 12, 45, 0.4) 100%)`
                : `linear-gradient(90deg,
                    rgba(170, 115, 255, 0.8) 0%,
                    rgba(205, 160, 255, 0.85) ${Math.max(0, percentage - 5)}%,
                    rgba(230, 205, 255, 0.9) ${percentage}%,
                    rgba(255, 255, 255, 0.28) ${percentage}%,
                    rgba(255, 255, 255, 0.25) 100%)`};
              border-radius: 9999px;
              position: relative;
              border: ${darkMode ? 'none' : '1px solid rgba(255, 255, 255, 0.4)'};
              box-shadow: ${darkMode
                ? `inset 0 3px 6px rgba(0, 0, 0, 0.65),
                   inset 0 -2px 5px rgba(200, 150, 255, 0.2),
                   inset 0 1px 1px rgba(255, 255, 255, 0.1),
                   0 2px 4px rgba(0, 0, 0, 0.15),
                   0 1px 3px rgba(220, 170, 255, 0.3),
                   0 0 ${isHovering ? '30px' : '20px'} rgba(170, 120, 255, ${isHovering ? '0.35' : '0.2'})`
                : `inset 0 2px 3px rgba(255, 255, 255, 0.6),
                   inset 0 -1px 2px rgba(0, 0, 0, 0.04),
                   0 2px 4px rgba(0, 0, 0, 0.08),
                   0 0 12px rgba(170, 115, 255, 0.15)`};
              overflow: visible;
              backdrop-filter: none;
              transition: ${isHovering ? 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)' : 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)'};
              filter: ${isHovering ? 'brightness(1.2) saturate(1.15) contrast(1.05)' : 'brightness(1)'} ${isDragging ? 'brightness(1.15) saturate(1.1)' : ''};
              transform: ${isDragging ? 'scaleY(1.05)' : 'scaleY(1)'};
            }

            .quantum-slider-${sliderId}::-moz-range-track {
              width: 100%;
              height: 7px;
              background: ${darkMode
                ? `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 30%),
                   linear-gradient(90deg,
                    rgba(170, 120, 255, 1) 0%,
                    rgba(210, 160, 255, 1) ${Math.max(0, percentage - 3)}%,
                    rgba(240, 210, 255, 1) ${percentage}%,
                    rgba(30, 18, 60, 0.45) ${percentage}%,
                    rgba(20, 12, 45, 0.4) 100%)`
                : `linear-gradient(90deg,
                    rgba(170, 115, 255, 0.8) 0%,
                    rgba(205, 160, 255, 0.85) ${Math.max(0, percentage - 5)}%,
                    rgba(230, 205, 255, 0.9) ${percentage}%,
                    rgba(255, 255, 255, 0.28) ${percentage}%,
                    rgba(255, 255, 255, 0.25) 100%)`};
              border-radius: 9999px;
              border: ${darkMode ? 'none' : '1px solid rgba(255, 255, 255, 0.4)'};
              box-shadow: ${darkMode
                ? `inset 0 3px 6px rgba(0, 0, 0, 0.65),
                   inset 0 -2px 5px rgba(200, 150, 255, 0.2),
                   inset 0 1px 1px rgba(255, 255, 255, 0.1),
                   0 2px 4px rgba(0, 0, 0, 0.15),
                   0 1px 3px rgba(220, 170, 255, 0.3),
                   0 0 ${isHovering ? '30px' : '20px'} rgba(170, 120, 255, ${isHovering ? '0.35' : '0.2'})`
                : `inset 0 2px 3px rgba(255, 255, 255, 0.6),
                   inset 0 -1px 2px rgba(0, 0, 0, 0.04),
                   0 2px 4px rgba(0, 0, 0, 0.08),
                   0 0 12px rgba(170, 115, 255, 0.15)`};
              backdrop-filter: none;
              transition: ${isHovering ? 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)' : 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)'};
              filter: ${isHovering ? 'brightness(1.2) saturate(1.15) contrast(1.05)' : 'brightness(1)'} ${isDragging ? 'brightness(1.15) saturate(1.1)' : ''};
              transform: ${isDragging ? 'scaleY(1.05)' : 'scaleY(1)'};
            }

            /* Ultra-Premium Quantum Orb Knob */
            .quantum-slider-${sliderId}::-webkit-slider-thumb {
              -webkit-appearance: none;
              width: 22px;
              height: 22px;
              border-radius: 50%;
              background: ${isDragging 
                ? 'radial-gradient(circle at 30% 30%, #FFFFFF 0%, #F5F5F5 100%)' 
                : 'radial-gradient(circle at 30% 30%, #FFFFFF 0%, #FAFAFA 100%)'};
              cursor: ${disabled ? 'not-allowed' : 'pointer'};
              box-shadow: ${darkMode
                ? `0 0 ${isHovering ? '18px' : '14px'} ${isHovering ? '6px' : '5px'} ${isDragging ? '#E5B5FF' : '#D5A5FF'},
                   0 0 ${isHovering ? '40px' : '35px'} ${isHovering ? '20px' : '18px'} rgba(180, 120, 255, ${isDragging ? '0.4' : (isHovering ? '0.3' : '0.22')}),
                   inset 0 2px 4px rgba(255, 255, 255, 0.7),
                   inset 0 -1px 2px rgba(200, 180, 255, 0.1),
                   0 4px 12px rgba(0, 0, 0, 0.3)`
                : `0 0 ${isHovering ? '14px' : '12px'} ${isHovering ? '5px' : '4px'} rgba(210, 175, 255, ${isDragging ? '0.7' : (isHovering ? '0.6' : '0.5')}),
                   inset 0 2px 3px rgba(255, 255, 255, 1),
                   inset 0 -1px 2px rgba(0, 0, 0, 0.05),
                   0 4px 14px rgba(0, 0, 0, 0.15)`};
              margin-top: -7.5px;
              transition: ${isDragging ? 'all 0.12s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'};
              transform: ${isDragging ? 'scale(0.95)' : (isHovering ? 'scale(1.12)' : 'scale(1)')};
              position: relative;
              z-index: 10;
            }

            .quantum-slider-${sliderId}::-moz-range-thumb {
              width: 22px;
              height: 22px;
              border-radius: 50%;
              background: ${isDragging 
                ? 'radial-gradient(circle at 30% 30%, #FFFFFF 0%, #F5F5F5 100%)' 
                : 'radial-gradient(circle at 30% 30%, #FFFFFF 0%, #FAFAFA 100%)'};
              cursor: ${disabled ? 'not-allowed' : 'pointer'};
              box-shadow: ${darkMode
                ? `0 0 ${isHovering ? '18px' : '14px'} ${isHovering ? '6px' : '5px'} ${isDragging ? '#E5B5FF' : '#D5A5FF'},
                   0 0 ${isHovering ? '40px' : '35px'} ${isHovering ? '20px' : '18px'} rgba(180, 120, 255, ${isDragging ? '0.4' : (isHovering ? '0.3' : '0.22')}),
                   inset 0 2px 4px rgba(255, 255, 255, 0.7),
                   inset 0 -1px 2px rgba(200, 180, 255, 0.1),
                   0 4px 12px rgba(0, 0, 0, 0.3)`
                : `0 0 ${isHovering ? '14px' : '12px'} ${isHovering ? '5px' : '4px'} rgba(210, 175, 255, ${isDragging ? '0.7' : (isHovering ? '0.6' : '0.5')}),
                   inset 0 2px 3px rgba(255, 255, 255, 1),
                   inset 0 -1px 2px rgba(0, 0, 0, 0.05),
                   0 4px 14px rgba(0, 0, 0, 0.15)`};
              border: none;
              transition: ${isDragging ? 'all 0.12s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'};
              transform: ${isDragging ? 'scale(0.95)' : (isHovering ? 'scale(1.12)' : 'scale(1)')};
            }

            .quantum-slider-${sliderId}:active::-webkit-slider-thumb {
              background: radial-gradient(circle at 30% 30%, #F8F8F8 0%, #F0F0F0 100%);
            }

            .quantum-slider-${sliderId}:active::-moz-range-thumb {
              background: radial-gradient(circle at 30% 30%, #F8F8F8 0%, #F0F0F0 100%);
            }

            .quantum-slider-${sliderId}:disabled::-webkit-slider-thumb,
            .quantum-slider-${sliderId}:disabled::-moz-range-thumb {
              cursor: not-allowed;
              opacity: 0.5;
            }
          `}</style>
          
          {/* Dynamic Bloom Halo */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
            animate={{
              scale: isDragging ? [1, 1.15, 1] : (isHovering ? [1, 1.08, 1] : 1),
              opacity: isDragging ? [0.7, 0.9, 0.7] : (isHovering ? [0.5, 0.65, 0.5] : 0)
            }}
            transition={{
              duration: isDragging ? 1.2 : 2,
              repeat: (isDragging || isHovering) ? Infinity : 0,
              ease: "easeInOut"
            }}
            style={{
              left: `${percentage}%`,
              width: '60px',
              height: '60px',
              marginLeft: '-30px',
              background: darkMode
                ? 'radial-gradient(circle, rgba(210, 160, 255, 0.35) 0%, rgba(180, 130, 255, 0.15) 40%, transparent 70%)'
                : 'radial-gradient(circle, rgba(215, 180, 255, 0.2) 0%, rgba(190, 150, 255, 0.08) 40%, transparent 70%)',
              filter: 'blur(20px)'
            }}
          />



          {/* Trailing light behind thumb on drag */}
          <AnimatePresence>
            {isDragging && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.75, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
                className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
                style={{
                  left: `calc(${percentage}% - 35px)`,
                  width: '50px',
                  height: '10px',
                  background: darkMode
                    ? 'linear-gradient(90deg, transparent 0%, rgba(220, 165, 255, 0.6) 60%, transparent 100%)'
                    : 'linear-gradient(90deg, transparent 0%, rgba(200, 168, 255, 0.5) 60%, transparent 100%)',
                  filter: 'blur(8px)',
                  borderRadius: '9999px'
                }}
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      {presets.length > 0 && (
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mt-3 sm:mt-4">
          {presets.map(preset => {
            const isSelected = Math.abs(value - preset.value) < 0.05;
            const [isHovering, setIsHovering] = React.useState(false);
            
            return (
              <motion.button
                key={preset.value}
                onClick={() => {
                  playSoftClick();
                  onChange(preset.value);
                }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="relative px-2 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 overflow-hidden"
                style={{
                  color: isSelected
                    ? darkMode ? 'rgb(255, 255, 255)' : 'rgba(255, 255, 255, 1)'
                    : darkMode ? 'rgba(216, 180, 254, 0.6)' : 'rgba(255, 255, 255, 0.75)',
                  background: isSelected
                    ? darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.15)'
                    : darkMode ? 'rgba(255, 255, 255, 0.07)' : 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: darkMode ? 'blur(32px)' : 'blur(35px)',
                  WebkitBackdropFilter: darkMode ? 'blur(32px)' : 'blur(35px)',
                  border: isSelected
                    ? darkMode ? '1px solid rgba(168, 85, 247, 0.4)' : '1px solid rgba(255, 255, 255, 0.35)'
                    : darkMode ? '1px solid rgba(168, 85, 247, 0.3)' : '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: isSelected
                    ? darkMode
                      ? 'inset 0 1px 1px rgba(255, 255, 255, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.05), inset 0 -2px 10px rgba(255, 255, 255, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.12)'
                      : '0 25px 50px -12px rgba(0, 0, 0, 0.05), 0 12px 24px -8px rgba(0, 0, 0, 0.03), inset 0 -2px 6px rgba(255, 255, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 0 8px rgba(255, 255, 255, 0.05)'
                    : darkMode
                      ? 'inset 0 1px 1px rgba(255, 255, 255, 0.15), inset 0 0 15px rgba(255, 255, 255, 0.03), inset 0 -2px 8px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
                      : '0 25px 50px -12px rgba(0, 0, 0, 0.03), 0 12px 24px -8px rgba(0, 0, 0, 0.02), inset 0 -2px 6px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 0 6px rgba(255, 255, 255, 0.03)',
                  textShadow: darkMode
                    ? isSelected
                      ? isHovering
                        ? '0 0 25px rgba(255, 255, 255, 1), 0 0 40px rgba(220, 180, 255, 0.95), 0 0 60px rgba(168, 85, 247, 0.75), 0 0 80px rgba(139, 92, 246, 0.5), 0 3px 10px rgba(0, 0, 0, 0.5)'
                        : '0 0 22px rgba(255, 255, 255, 0.95), 0 0 38px rgba(220, 180, 255, 0.85), 0 0 55px rgba(168, 85, 247, 0.65), 0 0 75px rgba(139, 92, 246, 0.45), 0 2px 8px rgba(0, 0, 0, 0.4)'
                      : isHovering
                        ? '0 0 18px rgba(220, 180, 255, 0.8), 0 0 32px rgba(168, 85, 247, 0.5), 0 0 45px rgba(139, 92, 246, 0.3), 0 2px 6px rgba(0, 0, 0, 0.35)'
                        : '0 0 14px rgba(200, 160, 255, 0.6), 0 0 25px rgba(168, 85, 247, 0.35), 0 0 38px rgba(139, 92, 246, 0.2), 0 1px 4px rgba(0, 0, 0, 0.3)'
                    : '0 1px 3px rgba(0, 0, 0, 0.2)',
                  transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)'
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                animate={darkMode && isSelected ? {
                  textShadow: [
                    '0 0 22px rgba(255, 255, 255, 0.95), 0 0 38px rgba(220, 180, 255, 0.85), 0 0 55px rgba(168, 85, 247, 0.65), 0 0 75px rgba(139, 92, 246, 0.45), 0 2px 8px rgba(0, 0, 0, 0.4)',
                    '0 0 28px rgba(255, 255, 255, 1), 0 0 45px rgba(220, 180, 255, 0.95), 0 0 65px rgba(168, 85, 247, 0.75), 0 0 85px rgba(139, 92, 246, 0.55), 0 2px 8px rgba(0, 0, 0, 0.4)',
                    '0 0 22px rgba(255, 255, 255, 0.95), 0 0 38px rgba(220, 180, 255, 0.85), 0 0 55px rgba(168, 85, 247, 0.65), 0 0 75px rgba(139, 92, 246, 0.45), 0 2px 8px rgba(0, 0, 0, 0.4)'
                  ]
                } : {}}
                transition={darkMode && isSelected ? {
                  textShadow: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                } : {}}
              >
                {/* Radiant aura for selected button */}
                {darkMode && isSelected && (
                  <>
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
                        filter: 'blur(20px)'
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(220, 180, 255, 0.1) 0%, transparent 60%)',
                        filter: 'blur(12px)'
                      }}
                      animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.6, 0.9, 0.6]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.3
                      }}
                    />
                  </>
                )}

                <preset.icon 
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 relative z-10" 
                  style={{
                    filter: darkMode
                      ? isSelected
                        ? isHovering
                          ? 'drop-shadow(0 0 8px rgba(220, 180, 255, 1)) drop-shadow(0 0 14px rgba(168, 85, 247, 0.8)) drop-shadow(0 0 20px rgba(139, 92, 246, 0.5))'
                          : 'drop-shadow(0 0 6px rgba(220, 180, 255, 0.9)) drop-shadow(0 0 12px rgba(168, 85, 247, 0.7)) drop-shadow(0 0 18px rgba(139, 92, 246, 0.4))'
                        : isHovering
                          ? 'drop-shadow(0 0 5px rgba(200, 160, 255, 0.7)) drop-shadow(0 0 10px rgba(168, 85, 247, 0.4))'
                          : 'drop-shadow(0 0 4px rgba(168, 85, 247, 0.4))'
                      : 'none',
                    transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)'
                  }}
                />
                <span className="hidden sm:inline relative z-10">{preset.label}</span>
              </motion.button>
            );
          })}
        </div>
      )}
    </div>
  );
}