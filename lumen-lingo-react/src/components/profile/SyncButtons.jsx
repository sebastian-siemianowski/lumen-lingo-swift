import React from "react";
import { motion } from "framer-motion";
import { CloudUpload, CloudDownload } from "lucide-react";

export default function SyncButtons({ 
  syncing, 
  darkMode, 
  t, 
  onUpload, 
  onDownload,
  playButtonTap 
}) {
  const buttonVariants = {
    hover: !syncing ? { 
      scale: 1.015,
      y: -1,
      filter: darkMode ? 'brightness(1.15)' : 'brightness(1.12)'
    } : {},
    tap: !syncing ? { 
      scale: 0.985,
      y: 1,
      filter: darkMode ? 'brightness(0.95)' : 'brightness(0.9)'
    } : {}
  };

  const buttonStyles = (isPurple) => ({
    background: syncing 
      ? 'rgba(255, 255, 255, 0.06)' 
      : darkMode 
        ? isPurple
          ? 'linear-gradient(135deg, rgba(147, 51, 234, 0.6) 0%, rgba(139, 92, 246, 0.6) 50%, rgba(168, 85, 247, 0.6) 100%)'
          : 'linear-gradient(135deg, rgba(217, 70, 239, 0.6) 0%, rgba(236, 72, 153, 0.6) 50%, rgba(251, 113, 133, 0.6) 100%)'
        : isPurple
          ? 'linear-gradient(135deg, rgb(147, 51, 234), rgb(139, 92, 246), rgb(168, 85, 247))'
          : 'linear-gradient(135deg, rgb(217, 70, 239), rgb(236, 72, 153), rgb(251, 113, 133))',
    backdropFilter: darkMode ? 'blur(32px)' : 'blur(35px)',
    WebkitBackdropFilter: darkMode ? 'blur(32px)' : 'blur(35px)',
    border: syncing 
      ? '1px solid rgba(255, 255, 255, 0.1)' 
      : darkMode 
        ? '1px solid rgba(183, 148, 246, 0.5)' 
        : '1px solid rgba(255, 255, 255, 0.5)',
    boxShadow: syncing
      ? 'none'
      : darkMode
        ? `0 30px 60px -15px rgba(0, 0, 0, 0.12), 0 15px 30px -10px rgba(0, 0, 0, 0.08), 0 0 20px ${isPurple ? 'rgba(168, 85, 247, 0.25)' : 'rgba(236, 72, 153, 0.25)'}, inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -3px 8px rgba(255, 255, 255, 0.08)`
        : '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 12px 24px -8px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.5), inset 0 -2px 6px rgba(255, 255, 255, 0.3)',
    opacity: syncing ? 0.5 : 1,
    cursor: syncing ? 'not-allowed' : 'pointer',
    overflow: 'visible'
  });

  return (
    <div className="grid grid-cols-2 gap-3 mt-3 sm:mt-6" style={{ overflow: 'visible' }}>
      {/* Upload Button */}
      <motion.button
        onClick={() => {
          playButtonTap();
          onUpload();
        }}
        disabled={syncing}
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
        transition={{ 
          type: "spring", 
          stiffness: 250, 
          damping: 22,
          mass: 0.8
        }}
        className="relative flex items-center justify-center gap-2 px-4 py-3 rounded-[18px] sm:rounded-[24px] font-semibold text-sm transition-all text-white group"
        style={buttonStyles(true)}
      >
        {!syncing && (
          <div className="absolute inset-0 rounded-[18px] sm:rounded-[24px] bg-gradient-to-b from-white/15 via-transparent to-transparent pointer-events-none" />
        )}
        
        <CloudUpload 
          className="w-5 h-5 relative z-10 transition-all duration-300" 
          style={{ filter: 'drop-shadow(0 0 0px rgba(255, 255, 255, 0))' }} 
        />
        <span 
          className="relative z-10 transition-all duration-300"
          style={{ textShadow: 'none' }}
        >
          {syncing ? t('uploading') : t('upload_to_cloud')}
        </span>
        
        {!syncing && (
          <style jsx>{`
            .group:hover .w-5 {
              filter: ${darkMode 
                ? 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.08))' 
                : 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.1))'} !important;
            }
            .group:hover span {
              text-shadow: ${darkMode
                ? '0 0 3px rgba(255, 255, 255, 0.08), 0 0 2px rgba(255, 255, 255, 0.06)'
                : '0 0 3px rgba(255, 255, 255, 0.12), 0 0 2px rgba(255, 255, 255, 0.1)'} !important;
            }
          `}</style>
        )}
      </motion.button>

      {/* Download Button */}
      <motion.button
        onClick={() => {
          playButtonTap();
          onDownload();
        }}
        disabled={syncing}
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
        transition={{ 
          type: "spring", 
          stiffness: 250, 
          damping: 22,
          mass: 0.8
        }}
        className="relative flex items-center justify-center gap-2 px-4 py-3 rounded-[18px] sm:rounded-[24px] font-semibold text-sm transition-all text-white group"
        style={buttonStyles(false)}
      >
        {!syncing && (
          <div className="absolute inset-0 rounded-[18px] sm:rounded-[24px] bg-gradient-to-b from-white/15 via-transparent to-transparent pointer-events-none" />
        )}
        
        <CloudDownload 
          className="w-5 h-5 relative z-10 transition-all duration-300" 
          style={{ filter: 'drop-shadow(0 0 0px rgba(255, 255, 255, 0))' }} 
        />
        <span 
          className="relative z-10 transition-all duration-300"
          style={{ textShadow: 'none' }}
        >
          {syncing ? t('downloading') : t('download_from_cloud')}
        </span>
        
        {!syncing && (
          <style jsx>{`
            .group:hover .w-5 {
              filter: ${darkMode 
                ? 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.08))' 
                : 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.1))'} !important;
            }
            .group:hover span {
              text-shadow: ${darkMode
                ? '0 0 3px rgba(255, 255, 255, 0.08), 0 0 2px rgba(255, 255, 255, 0.06)'
                : '0 0 3px rgba(255, 255, 255, 0.12), 0 0 2px rgba(255, 255, 255, 0.1)'} !important;
            }
          `}</style>
        )}
      </motion.button>
    </div>
  );
}