import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserCircle } from "lucide-react";
import { useDarkMode } from "../theme/DarkModeContext";
import { useTranslations } from "../utils/translations";
import { useLanguage } from "../language/LanguageContext";
import useProfileData from "./useProfileData";
import { formatNameWithInitial } from "../utils/privacyUtils";

export default function ProfileHeader() {
  const { user } = useProfileData();
  const { darkMode } = useDarkMode();
  const { sourceLanguage, targetLanguage } = useLanguage();
  const t = useTranslations(sourceLanguage);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className=""
    >
      <motion.div
        className="rounded-[18px] sm:rounded-[24px] transition-all duration-500 relative overflow-hidden"
        style={{
          padding: window.innerWidth < 640 ? '12px' : '28px',
          background: darkMode 
            ? 'rgba(25, 18, 45, 0.6)'
            : 'rgba(120, 60, 160, 0.25)',
          border: darkMode 
            ? '1px solid rgba(100, 70, 160, 0.3)' 
            : '1px solid rgba(255, 255, 255, 0.18)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          isolation: 'isolate'
        }}
      >
        {/* Ambient glass reflection */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/3 via-transparent to-white/3 pointer-events-none rounded-[18px] sm:rounded-[24px]" />
        {!darkMode && (
          <div
            className="absolute inset-0 pointer-events-none rounded-[18px] sm:rounded-[24px]"
            style={{ border: '1px solid rgba(255, 255, 255, 0.18)' }}
          />
        )}
        {!darkMode && (
          <div
            className="absolute inset-0 pointer-events-none rounded-[18px] sm:rounded-[24px]"
            style={{ boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.25), inset 0 -3px 8px rgba(255, 255, 255, 0.22)' }}
          />
        )}
        {!darkMode && (
          <div
            className="absolute inset-0 pointer-events-none rounded-[18px] sm:rounded-[24px]"
            style={{
              background: 'radial-gradient(900px 320px at 12% 0%, rgba(244, 114, 182, 0.11), transparent 68%), radial-gradient(900px 320px at 88% 100%, rgba(168, 85, 247, 0.09), transparent 68%)'
            }}
          />
        )}
        <div className="relative z-10">
          {/* Identity presence halo */}
          <div className="absolute -inset-4 top-0 bg-white/5 blur-2xl rounded-3xl pointer-events-none" />
          
          <div className="relative flex items-center gap-2 mb-1 sm:mb-2">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <UserCircle className={`w-5 h-5 sm:w-7 sm:h-7 ${darkMode ? 'text-purple-300' : 'text-white'} drop-shadow-lg`} />
            </motion.div>
            <h1 className="text-lg sm:text-3xl font-black tracking-tight">
                <span 
                  style={{
                    color: darkMode ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 1)',
                    textShadow: darkMode ? '0 2px 10px rgba(139, 92, 246, 0.3)' : '0 2px 10px rgba(0, 0, 0, 0.15)',
                    transition: 'color 1.2s cubic-bezier(0.22, 1, 0.36, 1), text-shadow 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
                  }}
                >
                  {user?.full_name ? formatNameWithInitial(user.full_name) : `${targetLanguage} ${t('learner')}`}
                </span>
              </h1>
          </div>

          <p 
            className="text-xs sm:text-sm font-medium ml-1 relative"
            style={{
              color: darkMode ? 'rgba(216, 180, 254, 0.85)' : 'rgba(255, 255, 255, 0.85)',
              transition: 'color 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
            }}
          >
            {user?.email}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}