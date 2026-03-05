import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, ChevronDown, Layers } from "lucide-react";

export default function SyncStatusMessage({ 
  syncStatus, 
  showSyncDetails, 
  onToggleDetails, 
  darkMode,
  playSoftClick 
}) {
  if (!syncStatus) return null;

  return (
    <motion.div 
      className="mb-4"
      initial={{ opacity: 0, y: -15, scale: 0.97 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          duration: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }}
      exit={{ 
        opacity: 0, 
        y: -10, 
        scale: 0.98,
        transition: {
          duration: 0.25,
          ease: [0.55, 0.085, 0.68, 0.53]
        }
      }}
    >
      <div
        className="rounded-[18px] sm:rounded-[24px] overflow-hidden relative"
        style={darkMode ? {
          background: syncStatus.type === 'success'
            ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(168, 85, 247, 0.12) 50%, rgba(192, 132, 252, 0.1) 100%)'
            : 'linear-gradient(135deg, rgba(220, 38, 38, 0.12) 0%, rgba(239, 68, 68, 0.1) 50%, rgba(248, 113, 113, 0.08) 100%)',
          backdropFilter: 'blur(32px)',
          WebkitBackdropFilter: 'blur(32px)',
          border: syncStatus.type === 'success'
            ? '1px solid rgba(168, 85, 247, 0.35)'
            : '1px solid rgba(239, 68, 68, 0.35)',
          boxShadow: syncStatus.type === 'success'
            ? '0 8px 32px rgba(139, 92, 246, 0.2), 0 0 0 1px rgba(168, 85, 247, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(139, 92, 246, 0.2)'
            : '0 8px 32px rgba(220, 38, 38, 0.2), 0 0 0 1px rgba(239, 68, 68, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(220, 38, 38, 0.2)'
        } : {
          background: syncStatus.type === 'success'
            ? 'linear-gradient(135deg, rgba(196, 148, 252, 0.12) 0%, rgba(244, 114, 182, 0.08) 50%, rgba(251, 191, 36, 0.06) 100%)'
            : 'linear-gradient(135deg, rgba(252, 165, 165, 0.12) 0%, rgba(254, 202, 202, 0.08) 50%, rgba(254, 215, 215, 0.06) 100%)',
          backdropFilter: 'blur(50px)',
          WebkitBackdropFilter: 'blur(50px)',
          border: syncStatus.type === 'success'
            ? '1px solid rgba(255, 255, 255, 0.12)'
            : '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 0 20px rgba(255, 255, 255, 0.05)'
        }}
      >
        {/* Ambient glow */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: darkMode
              ? syncStatus.type === 'success'
                ? 'radial-gradient(circle at 50% 0%, rgba(168, 85, 247, 0.15) 0%, transparent 60%)'
                : 'radial-gradient(circle at 50% 0%, rgba(239, 68, 68, 0.15) 0%, transparent 60%)'
              : 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.4) 0%, transparent 60%)'
          }}
        />

        <div className="p-4 sm:p-5 relative z-10">
          <div className="flex items-center gap-3">
            {syncStatus.type === 'success' ? (
              <div 
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center relative overflow-hidden"
                style={darkMode ? {
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(168, 85, 247, 0.25) 100%)',
                  border: '1px solid rgba(168, 85, 247, 0.4)',
                  boxShadow: '0 0 20px rgba(168, 85, 247, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                } : {
                  background: 'linear-gradient(135deg, rgba(196, 148, 252, 0.16) 0%, rgba(244, 114, 182, 0.14) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.25), inset 0 0 20px rgba(255, 255, 255, 0.06)'
                }}
              >
                <CheckCircle2 
                  className={darkMode ? 'text-purple-200' : 'text-white'} 
                  style={{ width: '20px', height: '20px', filter: 'drop-shadow(0 0 4px rgba(168, 85, 247, 0.3))' }}
                  strokeWidth={2.5} 
                />
              </div>
            ) : (
              <div 
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center relative overflow-hidden"
                style={darkMode ? {
                  background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.25) 0%, rgba(239, 68, 68, 0.2) 100%)',
                  border: '1px solid rgba(239, 68, 68, 0.4)',
                  boxShadow: '0 0 20px rgba(239, 68, 68, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
                } : {
                  background: 'linear-gradient(135deg, rgba(252, 165, 165, 0.16) 0%, rgba(254, 202, 202, 0.14) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.25), inset 0 0 20px rgba(255, 255, 255, 0.06)'
                }}
              >
                <AlertCircle 
                  className={darkMode ? 'text-red-300' : 'text-white'} 
                  style={{ width: '20px', height: '20px', filter: 'drop-shadow(0 0 4px rgba(239, 68, 68, 0.3))' }}
                  strokeWidth={2.5} 
                />
              </div>
            )}

            <div className="flex-1 min-w-0">
              <p
                className="font-bold text-base"
                style={{
                  color: darkMode 
                    ? 'rgba(255, 255, 255, 0.95)'
                    : syncStatus.type === 'success' ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.9)',
                  letterSpacing: '-0.01em',
                  textShadow: darkMode 
                    ? '0 1px 2px rgba(0, 0, 0, 0.3)'
                    : '0 1px 2px rgba(0, 0, 0, 0.15)'
                }}
              >
                {syncStatus.message}
              </p>
              {syncStatus.details && (
                <p 
                  className="text-sm mt-1.5"
                  style={{
                    color: darkMode 
                      ? 'rgba(199, 186, 220, 0.8)'
                      : 'rgba(255, 255, 255, 0.75)',
                    lineHeight: '1.5'
                  }}
                >
                  {syncStatus.details}
                </p>
              )}
            </div>

            {syncStatus.fullDetails && syncStatus.fullDetails.length > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  playSoftClick();
                  onToggleDetails();
                }}
                className="flex-shrink-0 p-2 rounded-xl transition-all relative overflow-hidden"
                style={darkMode ? {
                  background: showSyncDetails 
                    ? 'rgba(168, 85, 247, 0.2)' 
                    : 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(168, 85, 247, 0.25)',
                  color: 'rgba(199, 186, 220, 0.9)'
                } : {
                  background: showSyncDetails 
                    ? 'rgba(255, 255, 255, 0.5)' 
                    : 'rgba(255, 255, 255, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  color: 'rgba(255, 255, 255, 1)'
                }}
              >
                <ChevronDown 
                  className="w-4 h-4 transition-transform duration-300" 
                  strokeWidth={2.5}
                  style={{ transform: showSyncDetails ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </button>
            )}
          </div>

          {/* Detailed Breakdown */}
          <AnimatePresence>
            {showSyncDetails && syncStatus.fullDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: 1, 
                  height: 'auto',
                  transition: {
                    height: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                    opacity: { duration: 0.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }
                  }
                }}
                exit={{ 
                  opacity: 0, 
                  height: 0,
                  transition: {
                    height: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                    opacity: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                  }
                }}
                className={`border-t pt-3 mt-3 overflow-hidden ${
                  darkMode ? 'border-white/10' : 'border-white/35'
                }`}
              >
                <div className="grid grid-cols-1 gap-2.5">
                  {syncStatus.fullDetails.map((detail, i) => {
                    const IconComponent = detail.icon || Layers;

                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ 
                          opacity: 1, 
                          y: 0,
                          transition: {
                            delay: i * 0.04,
                            duration: 0.3,
                            ease: [0.16, 1, 0.3, 1]
                          }
                        }}
                        exit={{ 
                          opacity: 0,
                          transition: {
                            duration: 0.15,
                            ease: [0.6, 0, 1, 1]
                          }
                        }}
                        className="group relative rounded-[18px] sm:rounded-[24px] p-3.5 transition-all duration-200"
                        style={darkMode ? {
                          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(168, 85, 247, 0.08) 100%)',
                          backdropFilter: 'blur(20px)',
                          WebkitBackdropFilter: 'blur(20px)',
                          border: '1px solid rgba(168, 85, 247, 0.25)',
                          boxShadow: '0 4px 16px rgba(139, 92, 246, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                        } : {
                          background: 'linear-gradient(135deg, rgba(196, 148, 252, 0.08) 0%, rgba(244, 114, 182, 0.06) 100%)',
                          backdropFilter: 'blur(40px)',
                          WebkitBackdropFilter: 'blur(40px)',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.04)'
                        }}
                      >
                        <div className="flex items-start gap-3 relative z-10">
                          <div
                            className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center relative overflow-hidden"
                            style={darkMode ? {
                              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(168, 85, 247, 0.25) 100%)',
                              border: '1px solid rgba(168, 85, 247, 0.35)',
                              boxShadow: '0 0 16px rgba(168, 85, 247, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
                            } : {
                              background: 'linear-gradient(135deg, rgba(196, 148, 252, 0.14) 0%, rgba(244, 114, 182, 0.12) 100%)',
                              border: '1px solid rgba(255, 255, 255, 0.18)',
                              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.03), inset 0 1px 0 rgba(255, 255, 255, 0.22), inset 0 0 15px rgba(255, 255, 255, 0.04)'
                            }}
                          >
                            <IconComponent 
                              className={darkMode ? 'text-purple-200' : 'text-white'} 
                              style={{ 
                                width: '18px', 
                                height: '18px',
                                filter: darkMode 
                                  ? 'drop-shadow(0 0 4px rgba(168, 85, 247, 0.3))'
                                  : 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.08))'
                              }}
                              strokeWidth={2.5} 
                            />
                          </div>

                          <div className="flex-1 min-w-0">
                            <span 
                              className="font-bold text-sm block"
                              style={{
                                color: darkMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                                letterSpacing: '-0.01em',
                                textShadow: darkMode 
                                  ? '0 1px 2px rgba(0, 0, 0, 0.2)'
                                  : '0 1px 2px rgba(0, 0, 0, 0.12)'
                              }}
                            >
                              {detail.entity}
                            </span>
                            {detail.info && (
                              <p 
                                className="text-xs leading-relaxed mt-1"
                                style={{
                                  color: darkMode 
                                    ? 'rgba(199, 186, 220, 0.75)' 
                                    : 'rgba(255, 255, 255, 0.8)',
                                  lineHeight: '1.5'
                                }}
                              >
                                {detail.info}
                              </p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}