import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, WifiOff, Cloud } from "lucide-react";

export default function SyncHeader({ 
  darkMode, 
  t, 
  pendingChanges, 
  isExpanded, 
  onToggle, 
  playSoftClick,
  isDesktop
}) {
  return (
    <motion.div
      className="flex items-center justify-between"
      
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-[44px] h-[44px] rounded-2xl flex items-center justify-center relative overflow-hidden"
          style={{
            background: pendingChanges
              ? darkMode 
                ? 'linear-gradient(135deg, rgba(249, 115, 22, 0.35) 0%, rgba(251, 146, 60, 0.35) 100%)' 
                : 'linear-gradient(135deg, rgba(251, 146, 60, 0.3) 0%, rgba(249, 115, 22, 0.3) 100%)'
              : darkMode 
                ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.35) 0%, rgba(74, 222, 128, 0.35) 100%)' 
                : 'linear-gradient(135deg, rgba(74, 222, 128, 0.3) 0%, rgba(34, 197, 94, 0.3) 100%)',
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
            border: pendingChanges
              ? darkMode ? '1px solid rgba(251, 146, 60, 0.35)' : '1px solid rgba(251, 146, 60, 0.4)'
              : darkMode ? '1px solid rgba(74, 222, 128, 0.35)' : '1px solid rgba(74, 222, 128, 0.4)',
            boxShadow: pendingChanges
              ? darkMode
                ? '0 0 20px rgba(251, 146, 60, 0.15), inset 0 -2px 8px rgba(251, 146, 60, 0.1)'
                : '0 0 15px rgba(251, 146, 60, 0.15), inset 0 -2px 6px rgba(251, 146, 60, 0.15)'
              : darkMode
                ? '0 0 20px rgba(74, 222, 128, 0.15), inset 0 -2px 8px rgba(74, 222, 128, 0.1)'
                : '0 0 15px rgba(74, 222, 128, 0.15), inset 0 -2px 6px rgba(74, 222, 128, 0.15)'
          }}
        >
          {pendingChanges ? (
            <WifiOff className="w-[22px] h-[22px]" style={{ color: darkMode ? '#FDB27A' : 'rgb(251, 146, 60)' }} />
          ) : (
            <Cloud className="w-[22px] h-[22px]" style={{ color: darkMode ? '#86EFAC' : 'rgb(74, 222, 128)' }} />
          )}
        </div>

        <div>
          <h2 
            className="text-[17px] sm:text-[22px] font-bold tracking-tight"
            style={{
              color: darkMode ? '#FFFFFF' : 'rgba(255, 255, 255, 1)',
              transition: 'color 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
            }}
          >{pendingChanges ? t('offline_mode') : t('synced')}</h2>
          <p 
            className="text-[13px] sm:text-[17px]"
            style={{
              color: darkMode ? 'rgba(199, 186, 220, 0.7)' : 'rgba(255, 255, 255, 0.6)',
              marginTop: '4px'
            }}
          >
            {pendingChanges ? t('unsaved_changes') : t('all_changes_saved')}
          </p>
        </div>
      </div>


    </motion.div>
  );
}