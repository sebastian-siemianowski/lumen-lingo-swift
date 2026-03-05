import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Home, User, TrendingUp, Menu, X, Globe, Martini, Crown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import useAudioFeedback from "../shared/useAudioFeedback";

export default function LayoutNavbar({ darkMode, t }) {
  const location = useLocation();
  const { playButtonTap } = useAudioFeedback();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  const navItems = [
    { name: t('dashboard'), path: "Dashboard", icon: Home },
    { name: t('language'), path: "LanguageSelection", icon: Globe },
    { name: t('stats'), path: "Journey", icon: TrendingUp },
    { name: t('membership'), path: "Membership", icon: Crown },
    { name: t('profile'), path: "Profile", icon: User },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b" style={{
      backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.09)',
      borderColor: darkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.12)',
    }}>
      <div className="max-w-7xl mx-auto px-[18px] sm:px-6 py-[10px] pt-[14px] sm:py-0">
        <div className="flex items-center justify-between h-10 sm:h-16">
          <Link to={createPageUrl("Dashboard")}>
            <motion.div 
              onClick={() => playButtonTap()}
              data-sound-handled="true"
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onHoverStart={() => setIsLogoHovered(true)}
              onHoverEnd={() => setIsLogoHovered(false)}
            >
              <motion.div
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center relative overflow-hidden ${
                  darkMode
                    ? 'bg-gradient-to-br from-pink-400/60 via-fuchsia-400/60 to-purple-400/60 border border-pink-300/60'
                    : 'bg-gradient-to-br from-pink-400 via-fuchsia-500 to-pink-500 border border-white/40'
                } shadow-lg`}
                style={darkMode ? {
                  background: 'linear-gradient(135deg, rgba(244, 114, 182, 0.6) 0%, rgba(217, 70, 239, 0.65) 50%, rgba(168, 85, 247, 0.6) 100%)',
                  border: '1px solid rgba(255, 182, 218, 0.5)',
                  boxShadow: isLogoHovered
                    ? '0 4px 28px rgba(236, 72, 153, 0.88), 0 8px 44px rgba(217, 70, 239, 0.58), 0 12px 64px rgba(168, 85, 247, 0.48), inset 0 2px 12px rgba(255, 182, 218, 0.35), inset 0 -2px 12px rgba(168, 85, 247, 0.25)'
                    : '0 4px 22px rgba(236, 72, 153, 0.68), 0 8px 36px rgba(217, 70, 239, 0.48), 0 12px 52px rgba(168, 85, 247, 0.38), inset 0 2px 8px rgba(255, 182, 218, 0.3)'
                } : {
                  boxShadow: isLogoHovered 
                    ? '0 4px 22px rgba(236, 72, 153, 0.58), 0 8px 36px rgba(217, 70, 239, 0.38), inset 0 2px 8px rgba(255, 255, 255, 0.45), inset 0 -2px 8px rgba(236, 72, 153, 0.25)' 
                    : '0 4px 14px rgba(236, 72, 153, 0.38), 0 6px 22px rgba(217, 70, 239, 0.28), inset 0 2px 6px rgba(255, 255, 255, 0.4)',
                  background: 'linear-gradient(135deg, rgb(244, 114, 182) 0%, rgb(217, 70, 239) 50%, rgb(236, 72, 153) 100%)'
                }}
                animate={{ 
                  rotate: isLogoHovered ? [0, 10, -10, 0] : 0,
                  scale: isLogoHovered ? 1.08 : 1
                }}
                transition={{ 
                  rotate: { duration: 0.6, ease: "easeInOut" },
                  scale: { duration: 0.3, type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <AnimatePresence>
                  {isLogoHovered && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      initial={{ x: '-100%' }}
                      animate={{ x: '200%' }}
                      exit={{ x: '200%' }}
                      transition={{ duration: 0.8, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.5 }}
                    />
                  )}
                </AnimatePresence>

                {darkMode && isLogoHovered && (
                  <>
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      style={{ background: 'radial-gradient(circle at 50% 50%, rgba(244, 114, 182, 0.7) 0%, rgba(217, 70, 239, 0.5) 40%, transparent 70%)' }}
                      animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0.9, 0.6] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      style={{ background: 'radial-gradient(circle at 30% 30%, rgba(168, 85, 247, 0.5) 0%, transparent 60%)' }}
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5], rotate: [0, 180, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  </>
                )}

                <Martini className="w-4 h-4 sm:w-5 sm:h-5 text-white drop-shadow-lg relative z-10" strokeWidth={2.5} fill="currentColor" />
              </motion.div>
              <div className="flex flex-col justify-center">
                <h1 className={`text-lg sm:text-2xl font-black tracking-tight leading-tight ${darkMode ? 'text-white' : 'text-white'}`}>
                  LumenLingo
                </h1>
                <span className={`text-[8px] sm:text-[10px] font-medium tracking-widest uppercase -mt-0.5 leading-tight ${darkMode ? 'text-purple-300/50' : 'text-white/50'}`}>
                  Language Mastery Engine
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = location.pathname === createPageUrl(item.path);
              return (
                <Link key={item.path} to={createPageUrl(item.path)}>
                  <motion.button
                    onClick={() => playButtonTap()}
                    data-sound-handled="true"
                    className={`relative px-4 py-2.5 rounded-xl text-sm transition-all ${
                      isActive
                        ? darkMode
                          ? 'bg-white/10 text-white/90 font-normal'
                          : 'bg-white/20 text-white/90 font-normal'
                        : darkMode
                          ? 'text-white/70 hover:text-white hover:bg-white/10 font-normal'
                          : 'text-white/80 hover:text-white hover:bg-white/15 font-normal'
                    }`}
                    style={{
                      boxShadow: isActive 
                        ? darkMode 
                          ? '0 0 12px rgba(168, 85, 247, 0.12)' 
                          : '0 0 12px rgba(255, 255, 255, 0.12)'
                        : 'none'
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: darkMode 
                        ? '0 0 20px rgba(168, 85, 247, 0.3), 0 4px 15px rgba(0, 0, 0, 0.15)' 
                        : '0 0 20px rgba(255, 255, 255, 0.25), 0 4px 15px rgba(0, 0, 0, 0.1)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center gap-2.5">
                      <item.icon 
                        className="w-5 h-5" 
                        strokeWidth={2.25} 
                        style={{
                          filter: isActive 
                            ? darkMode 
                              ? 'drop-shadow(0 0 4px rgba(168, 85, 247, 0.5)) drop-shadow(0 0 2px rgba(255, 255, 255, 0.2))' 
                              : 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.45)) drop-shadow(0 0 2px rgba(255, 255, 255, 0.2))'
                            : 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.15))',
                        }} 
                      />
                      <span>{item.name}</span>
                    </div>
                    {isActive && (
                      <>
                        <motion.div
                          className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[18px] h-[3px] rounded-full"
                          style={{
                            background: darkMode ? 'rgba(168, 85, 247, 0.5)' : 'rgba(255, 255, 255, 0.4)',
                            filter: 'blur(2px)'
                          }}
                          layoutId="navUnderlineGlow"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                        <motion.div
                          className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[14px] h-[2px] rounded-full"
                          style={{ background: darkMode ? 'rgba(192, 132, 252, 0.7)' : 'rgba(255, 255, 255, 0.6)' }}
                          layoutId="navUnderlineCore"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      </>
                    )}
                  </motion.button>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-1.5 rounded-lg backdrop-blur-sm text-white"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(248, 224, 255, 0.08) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: 'inset 0 0 2px rgba(255, 255, 255, 0.12), 0 0 8px rgba(255, 255, 255, 0.06)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.12, ease: "easeInOut" }}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden border-t border-white/10"
          >
            <div className="px-4 pt-4 pb-5 space-y-3">
              <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                  <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="100%" stopColor="#E7EFFF" />
                  </linearGradient>
                </defs>
              </svg>
              {navItems.map((item) => {
                const isActive = location.pathname === createPageUrl(item.path);
                return (
                  <Link key={item.path} to={createPageUrl(item.path)} onClick={() => setMobileMenuOpen(false)} className="block mb-3 last:mb-0">
                    <motion.button
                      onClick={() => playButtonTap()}
                      data-sound-handled="true"
                      className={`w-full pl-4 pr-4 py-2.5 rounded-3xl font-semibold text-sm transition-all flex items-center gap-3 ${
                        isActive
                          ? 'text-white'
                          : darkMode
                            ? 'text-white/70 hover:bg-white/10'
                            : 'text-white/80 hover:bg-white/15'
                      }`}
                      style={{
                        background: isActive 
                          ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.06) 100%)'
                          : 'transparent',
                        boxShadow: isActive 
                          ? `inset 0 1px 4px rgba(255, 255, 255, 0.18), 0 0 4px rgba(255, 255, 255, 0.08), ${darkMode ? '0 0 8px rgba(168, 85, 247, 0.25)' : '0 0 8px rgba(255, 255, 255, 0.15)'}`
                          : 'none'
                      }}
                      whileHover={{ 
                        scale: 1.02,
                        backgroundColor: isActive ? undefined : 'rgba(255, 255, 255, 0.12)',
                        boxShadow: isActive ? undefined : 'inset 0 1px 3px rgba(255, 255, 255, 0.10), 0 0 3px rgba(255, 255, 255, 0.05)'
                      }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <item.icon 
                        className="w-5 h-5" 
                        strokeWidth={2.25}
                        style={{
                          filter: isActive 
                            ? 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.4))' 
                            : 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.15))',
                          stroke: 'url(#iconGradient)',
                        }}
                      />
                      <span>{item.name}</span>
                    </motion.button>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}