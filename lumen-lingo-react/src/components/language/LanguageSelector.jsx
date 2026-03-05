import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Sparkles, ArrowRight, Loader2, Globe, ChevronLeft, ChevronRight, AlertCircle, Lightbulb } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { useTranslations } from "../utils/translations";
import { useDarkMode } from "../theme/DarkModeContext";
import { setLocalData, STORAGE_KEYS } from "../utils/offlineSync"; // Added import

const TOP_LANGUAGE_PAIRS = [
  { source: "english", target: "spanish" },
  { source: "spanish", target: "english" },
  { source: "polish", target: "english" },
  { source: "polish", target: "spanish" },
  { source: "polish", target: "german" },
  { source: "german", target: "english" },
  { source: "german", target: "spanish" }
];

const isTopLanguagePair = (source, target) => {
  return TOP_LANGUAGE_PAIRS.some(
    pair => pair.source === source && pair.target === target
  );
};

export default function LanguageSelector({ onClose, initialSource = "english", initialTarget = "spanish" }) {
  const [selectedSource, setSelectedSource] = useState(initialSource);
  const [selectedTarget, setSelectedTarget] = useState(initialTarget);
  const [saving, setSaving] = useState(false);
  const [enabledPairs, setEnabledPairs] = useState([]);
  const [isClosing, setIsClosing] = useState(false);
  const [showBetaLanguages, setShowBetaLanguages] = useState(false);
  const [error, setError] = useState(""); // Added error state

  const { darkMode } = useDarkMode();
  const t = useTranslations(selectedSource);

  const sourceLanguages = [
    { code: "english", name: "English", flag: "🇬🇧" },
    { code: "polish", name: "Polski", flag: "🇵🇱" },
    { code: "spanish", name: "Español", flag: "🇪🇸" },
    { code: "german", name: "Deutsch", flag: "🇩🇪" },
    { code: "ukrainian", name: "Українська", flag: "🇺🇦" },
    { code: "french", name: "Français", flag: "🇫🇷" },
    { code: "arabic", name: "العربية", flag: "🇸🇦" },
    { code: "chinese", name: "中文", flag: "🇨🇳" },
    { code: "japanese", name: "日本語", flag: "🇯🇵" }
  ];

  const targetLanguages = [
    { code: "spanish", name: "Español", flag: "🇪🇸" },
    { code: "english", name: "English", flag: "🇬🇧" },
    { code: "polish", name: "Polski", flag: "🇵🇱" },
    { code: "german", name: "Deutsch", flag: "🇩🇪" },
    { code: "ukrainian", name: "Українська", flag: "🇺🇦" },
    { code: "french", name: "Français", flag: "🇫🇷" },
    { code: "arabic", name: "العربية", flag: "🇸🇦" },
    { code: "chinese", name: "中文", flag: "🇨🇳" },
    { code: "japanese", name: "日本語", flag: "🇯🇵" }
  ];

  useEffect(() => {
    const loadUserPreferences = async () => {
      try {
        const currentUser = await base44.auth.me();
        if (!currentUser || !currentUser.email) return;

        const prefs = await base44.entities.UserLanguagePreference.filter({
          created_by: currentUser.email,
          is_enabled: true
        });

        if (prefs.length > 0) {
          setEnabledPairs(prefs.map(p => `${p.source_language}-${p.target_language}`));
        }
      } catch (error) {
        console.error("Error loading preferences:", error);
      }
    };

    loadUserPreferences();
  }, []);

  const isTargetAvailable = useMemo(() => {
    return (targetCode) => {
      if (selectedSource === targetCode) return false;
      if (isTopLanguagePair(selectedSource, targetCode)) return true;
      return enabledPairs.includes(`${selectedSource}-${targetCode}`);
    };
  }, [selectedSource, enabledPairs]);

  const handleSourceChange = (sourceCode) => {
    setSelectedSource(sourceCode);
    
    const availableTargets = targetLanguages.filter(lang => {
      if (sourceCode === lang.code) return false;
      if (isTopLanguagePair(sourceCode, lang.code)) return true;
      return enabledPairs.includes(`${sourceCode}-${lang.code}`);
    });

    if (availableTargets.length > 0 && !isTargetAvailable(selectedTarget)) {
      setSelectedTarget(availableTargets[0].code);
    }
  };

  const hasValidSelection = useMemo(() => {
    return selectedSource && selectedTarget && selectedSource !== selectedTarget && isTargetAvailable(selectedTarget);
  }, [selectedSource, selectedTarget, isTargetAvailable]);

  const handleSave = async () => {
    if (!hasValidSelection) return;
    
    setSaving(true);
    setError(""); // Clear previous errors

    try {
      // Save to localStorage only - no API calls
      const langPref = {
        source_language: selectedSource, // Using selectedSource
        target_language: selectedTarget, // Using selectedTarget
        is_active: true,
        is_enabled: true
      };
      
      setLocalData(STORAGE_KEYS.LANGUAGE_PREFERENCE, langPref);
      
      // Small delay for user feedback
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Replicating original closing animation behavior
      setIsClosing(true);
      setTimeout(() => {
        onClose();
      }, 100);

    } catch (error) {
      console.error("Error saving language preference:", error);
      setError(t('save_error')); // Set error message
    } finally {
      setSaving(false);
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 100);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isClosing ? 0 : 1 }}
      transition={{ duration: 0.15 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
      style={{ pointerEvents: isClosing ? 'none' : 'auto' }}
    >
      {/* Enhanced text readability styles for light mode */}
      <style jsx global>{`
        .light-mode-modal-heading {
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
          font-weight: 600;
        }
        
        .light-mode-modal-text {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
        }
        
        .light-mode-modal-subtext {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);
        }
        
        .light-mode-modal-label {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);
          font-weight: 600;
        }
        
        .light-mode-modal-lang {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      {/* Enhanced Backdrop with Dark Mode Support */}
      <div className={`absolute inset-0 backdrop-blur-2xl transition-all duration-500 ${
        darkMode
          ? 'bg-gradient-to-br from-purple-900/90 via-fuchsia-900/90 to-violet-900/90'
          : 'bg-gradient-to-br from-purple-500/50 via-pink-500/50 to-orange-500/50'
      }`}></div>

      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: isClosing ? 0.96 : 1, opacity: isClosing ? 0 : 1 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl mx-auto"
      >
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className={`backdrop-blur-2xl rounded-2xl sm:rounded-3xl border shadow-2xl p-8 transition-all duration-500 ${
            darkMode
              ? 'bg-gradient-to-br from-gray-900/80 via-purple-900/60 to-gray-900/80 border-purple-400/40'
              : 'bg-white/15 border-white/30'
          }`}
          style={darkMode ? {
            boxShadow: '0 0 40px rgba(168, 85, 247, 0.4), 0 0 80px rgba(139, 92, 246, 0.2)'
          } : {}}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-lg transition-all duration-500 ${
                  darkMode
                    ? 'bg-gradient-to-br from-violet-500/40 to-fuchsia-600/40 border-purple-300/40'
                    : 'bg-gradient-to-br from-violet-400 to-fuchsia-500 border-white/30'
                }`}
                style={darkMode ? {
                  boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)'
                } : {}}
                >
                  <Globe className="w-6 h-6 text-white drop-shadow-lg" strokeWidth={2.5} />
                </div>
                <div>
                  <motion.h2
                    key={selectedSource}
                    initial={{ filter: "blur(10px)", opacity: 0 }}
                    animate={{ filter: "blur(0px)", opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className={`text-3xl font-black tracking-tight drop-shadow-sm transition-colors duration-500 ${
                      darkMode ? 'text-purple-100' : 'text-white light-mode-modal-heading'
                    }`}
                  >
                    {t('choose_your_journey')}
                  </motion.h2>
                  <motion.p
                    key={`${selectedSource}-sub`}
                    initial={{ filter: "blur(10px)", opacity: 0 }}
                    animate={{ filter: "blur(0px)", opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className={`text-sm mt-1 drop-shadow-sm transition-colors duration-500 ${
                      darkMode ? 'text-purple-200/80' : 'text-white/80 light-mode-modal-subtext'
                    }`}
                  >
                    {t('select_learning_pair')}
                  </motion.p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className={`w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 border shadow-lg ${
                  darkMode
                    ? 'bg-purple-500/20 hover:bg-purple-500/30 border-purple-400/40'
                    : 'bg-white/15 hover:bg-white/25 border-white/30'
                }`}
              >
                <X className="w-6 h-6 text-white" strokeWidth={2.5} />
              </button>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* Source Language Panel */}
              <div className={`backdrop-blur-xl rounded-2xl border p-6 shadow-xl transition-all duration-500 ${
                darkMode
                  ? 'bg-gradient-to-br from-purple-500/15 via-fuchsia-500/10 to-purple-500/15 border-purple-400/40'
                  : 'bg-white/12 border-white/30'
              }`}
              style={darkMode ? {
                boxShadow: '0 0 30px rgba(168, 85, 247, 0.2)'
              } : {}}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-3 h-3 rounded-full shadow-lg transition-all duration-500 ${
                    darkMode ? 'bg-cyan-400 shadow-cyan-400/60' : 'bg-cyan-400 shadow-cyan-400/50'
                  }`}></div>
                  <motion.h3
                    key={`i-know-${selectedSource}`}
                    initial={{ filter: "blur(10px)", opacity: 0 }}
                    animate={{ filter: "blur(0px)", opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className={`font-bold text-lg drop-shadow-sm transition-colors duration-500 ${
                      darkMode ? 'text-purple-100' : 'text-white light-mode-modal-label'
                    }`}
                  >
                    {t('i_know')}
                  </motion.h3>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  {sourceLanguages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleSourceChange(lang.code)}
                      className={`relative p-4 rounded-xl border transition-all duration-300 ${
                        selectedSource === lang.code
                          ? darkMode
                            ? 'bg-gradient-to-br from-purple-500/40 via-fuchsia-500/35 to-purple-500/40 border-purple-300/70 shadow-xl scale-105'
                            : 'bg-white/25 border-white/50 shadow-xl scale-105'
                          : darkMode
                            ? 'bg-purple-500/10 border-purple-400/30 hover:bg-purple-500/20 hover:border-purple-300/50 hover:shadow-lg'
                            : 'bg-white/10 border-white/25 hover:bg-white/15 hover:border-white/35'
                      }`}
                      style={selectedSource === lang.code && darkMode ? {
                        boxShadow: '0 0 20px rgba(168, 85, 247, 0.4), 0 4px 12px rgba(0, 0, 0, 0.2)'
                      } : {}}
                    >
                      {selectedSource === lang.code && (
                        <div className={`absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center shadow-lg ${
                          darkMode
                            ? 'bg-gradient-to-br from-cyan-400 to-cyan-500'
                            : 'bg-gradient-to-br from-cyan-400 to-blue-500'
                        }`}
                        style={darkMode ? {
                          boxShadow: '0 0 15px rgba(34, 211, 238, 0.6)'
                        } : {}}
                        >
                          <Check className="w-4 h-4 text-white" strokeWidth={3} />
                        </div>
                      )}
                      <div className="text-3xl mb-2">{lang.flag}</div>
                      <motion.div
                        key={`${lang.code}-${selectedSource}`}
                        initial={{ filter: "blur(10px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className={`text-sm font-semibold drop-shadow-sm transition-colors duration-300 ${
                          selectedSource === lang.code 
                            ? darkMode ? 'text-purple-50' : 'text-white light-mode-modal-lang' 
                            : darkMode ? 'text-purple-200/90' : 'text-white/85 light-mode-modal-lang'
                        }`}
                      >
                        {lang.name}
                      </motion.div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Target Language Panel */}
              <div className={`backdrop-blur-xl rounded-2xl border p-6 shadow-xl transition-all duration-500 ${
                darkMode
                  ? 'bg-gradient-to-br from-fuchsia-500/15 via-pink-500/10 to-fuchsia-500/15 border-fuchsia-400/40'
                  : 'bg-white/12 border-white/30'
              }`}
              style={darkMode ? {
                boxShadow: '0 0 30px rgba(217, 70, 239, 0.2)'
              } : {}}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-3 h-3 rounded-full shadow-lg transition-all duration-500 ${
                    darkMode ? 'bg-pink-400 shadow-pink-400/60' : 'bg-pink-400 shadow-pink-400/50'
                  }`}></div>
                  <motion.h3
                    key={`i-learn-${selectedSource}`}
                    initial={{ filter: "blur(10px)", opacity: 0 }}
                    animate={{ filter: "blur(0px)", opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className={`font-bold text-lg drop-shadow-sm transition-colors duration-500 ${
                      darkMode ? 'text-purple-100' : 'text-white light-mode-modal-label'
                    }`}
                  >
                    {t('i_want_to_learn')}
                  </motion.h3>
                </div>
                
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {targetLanguages.map((lang) => {
                    const isAvailable = isTargetAvailable(lang.code);
                    const isDisabled = !isAvailable;
                    
                    return (
                      <button
                        key={lang.code}
                        onClick={() => isAvailable && setSelectedTarget(lang.code)}
                        disabled={isDisabled}
                        className={`relative p-4 rounded-xl border transition-all duration-300 ${
                          isDisabled
                            ? darkMode
                              ? 'bg-gray-900/30 border-purple-500/10 opacity-30 cursor-not-allowed'
                              : 'bg-white/5 border-white/10 opacity-30 cursor-not-allowed'
                            : selectedTarget === lang.code
                            ? darkMode
                              ? 'bg-gradient-to-br from-fuchsia-500/40 via-pink-500/35 to-fuchsia-500/40 border-fuchsia-300/70 shadow-xl scale-105'
                              : 'bg-white/25 border-white/50 shadow-xl scale-105'
                            : darkMode
                              ? 'bg-fuchsia-500/10 border-fuchsia-400/30 hover:bg-fuchsia-500/20 hover:border-fuchsia-300/50 hover:shadow-lg'
                              : 'bg-white/10 border-white/25 hover:bg-white/15 hover:border-white/35'
                        }`}
                        style={selectedTarget === lang.code && isAvailable && darkMode ? {
                          boxShadow: '0 0 20px rgba(217, 70, 239, 0.4), 0 4px 12px rgba(0, 0, 0, 0.2)'
                        } : {}}
                      >
                        {selectedTarget === lang.code && isAvailable && (
                          <div className={`absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center shadow-lg ${
                            darkMode
                              ? 'bg-gradient-to-br from-pink-400 to-pink-500'
                              : 'bg-gradient-to-br from-pink-400 to-purple-500'
                          }`}
                          style={darkMode ? {
                            boxShadow: '0 0 15px rgba(244, 114, 182, 0.6)'
                          } : {}}
                          >
                            <Check className="w-4 h-4 text-white" strokeWidth={3} />
                          </div>
                        )}
                        <div className="text-3xl mb-2">{lang.flag}</div>
                        <motion.div
                          key={`${lang.code}-${selectedSource}-${selectedTarget}`}
                          initial={{ filter: "blur(10px)", opacity: 0 }}
                          animate={{ filter: "blur(0px)", opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className={`text-sm font-semibold drop-shadow-sm transition-colors duration-300 ${
                            isDisabled 
                              ? darkMode ? 'text-purple-200/30' : 'text-white/30'
                              : selectedTarget === lang.code 
                              ? darkMode ? 'text-purple-50' : 'text-white light-mode-modal-lang' 
                              : darkMode ? 'text-purple-200/90' : 'text-white/85 light-mode-modal-lang'
                          }`}
                        >
                          {t(lang.code)}
                        </motion.div>
                      </button>
                    );
                  })}
                </div>

                {/* Enable More Languages Info Banner */}
                {!showBetaLanguages && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className={`mt-4 px-4 py-3.5 rounded-2xl border backdrop-blur-xl flex items-start gap-3 transition-all duration-500 ${
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
                    <div className="flex-shrink-0 mt-0.5">
                      {/* Glassmorphic Icon */}
                      <div className="relative w-9 h-9 flex items-center justify-center">
                        {/* Vibrant gradient base */}
                        <div 
                          className="absolute inset-0 rounded-xl"
                          style={{
                            background: darkMode ? '#F97316' : '#EE7449',
                            boxShadow: darkMode 
                              ? '0 4px 12px rgba(249, 115, 22, 0.4), 0 2px 4px rgba(0, 0, 0, 0.1)'
                              : '0 4px 12px rgba(238, 116, 73, 0.3), 0 2px 4px rgba(0, 0, 0, 0.1)'
                          }}
                        />

                        {/* Glass overlay */}
                        <div 
                          className="absolute inset-0 rounded-xl"
                          style={{
                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.05) 100%)',
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)'
                          }}
                        />

                        {/* Top light reflection */}
                        <div 
                          className="absolute inset-x-0 top-0 h-1/2 rounded-t-xl"
                          style={{
                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, transparent 100%)'
                          }}
                        />

                        {/* Crisp border */}
                        <div 
                          className="absolute inset-0 rounded-xl"
                          style={{
                            border: '1.5px solid rgba(255, 255, 255, 0.5)',
                            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.6)'
                          }}
                        />

                        {/* Icon */}
                        <Lightbulb 
                          className="w-5 h-5 text-white relative z-10" 
                          strokeWidth={2.5}
                          fill="currentColor"
                          style={{
                            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.25))'
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <motion.p
                        key={selectedSource}
                        initial={{ filter: "blur(10px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className={`text-sm font-semibold leading-relaxed transition-colors duration-500 ${
                          darkMode ? 'text-orange-200' : 'text-white light-mode-modal-text'
                        }`}
                      >
                        {t('enable_more_languages')}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-8">
              {error && (
                <div className={`mb-4 p-3 rounded-xl flex items-center justify-center gap-2 ${
                  darkMode ? 'bg-red-500/20 text-red-300 border border-red-400/40' : 'bg-red-100 text-red-700 border border-red-300'
                }`}>
                  <AlertCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">{error}</span>
                </div>
              )}
              <button
                onClick={handleSave}
                disabled={saving || !hasValidSelection}
                className={`button-shimmer relative w-full group overflow-hidden rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-transform hover:scale-[1.02] active:scale-[0.98] border ${
                  darkMode ? 'border-purple-400/40' : 'border-white/30'
                }`}
                style={{
                  boxShadow: darkMode 
                    ? '0 8px 32px rgba(168, 85, 247, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
                    : '0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                <div className={`absolute inset-0 opacity-90 group-hover:opacity-100 transition-opacity ${
                  darkMode
                    ? 'bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500'
                    : 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500'
                }`}></div>
                
                <div className="shimmer-effect"></div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className={`absolute inset-0 blur-xl ${
                    darkMode
                      ? 'bg-gradient-to-r from-purple-400/50 via-fuchsia-400/50 to-purple-400/50'
                      : 'bg-gradient-to-r from-purple-400/50 via-pink-400/50 to-orange-400/50'
                  }`}></div>
                </div>

                <div className="relative flex items-center justify-center gap-3 py-5 px-8">
                  {saving ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin text-white" />
                      <span className={`text-white font-bold text-lg ${!darkMode ? 'light-mode-modal-text' : ''}`}>{t('saving')}</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-6 h-6 text-white drop-shadow-lg" />
                      <motion.span
                        key={`start-${selectedSource}-${selectedTarget}`}
                        initial={{ filter: "blur(10px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className={`text-white font-bold text-lg tracking-wide drop-shadow-lg ${!darkMode ? 'light-mode-modal-text' : ''}`}
                      >
                        {t('start_learning')}
                      </motion.span>
                      <ArrowRight className="w-6 h-6 text-white drop-shadow-lg arrow-pulse" strokeWidth={2.5} />
                    </>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              </button>

              {hasValidSelection && !saving && (
                <p className={`text-center text-sm mt-4 drop-shadow-sm transition-colors duration-500 ${
                  darkMode ? 'text-purple-200/90' : 'text-white/80 light-mode-modal-subtext'
                }`}>
                  {t(selectedSource)} → {t(selectedTarget)}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Layout - same blur animations */}
        <div className="lg:hidden max-h-[90vh] overflow-y-auto">
          <div className={`backdrop-blur-2xl rounded-2xl sm:rounded-3xl border shadow-2xl p-6 transition-all duration-500 ${
            darkMode
              ? 'bg-gradient-to-br from-gray-900/80 via-purple-900/60 to-gray-900/80 border-purple-400/40'
              : 'bg-white/15 border-white/30'
          }`}
          style={darkMode ? {
            boxShadow: '0 0 40px rgba(168, 85, 247, 0.4), 0 0 80px rgba(139, 92, 246, 0.2)'
          } : {}}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border shadow-lg transition-all duration-500 ${
                  darkMode
                    ? 'bg-gradient-to-br from-violet-500/40 to-fuchsia-600/40 border-purple-300/40'
                    : 'bg-gradient-to-br from-violet-400 to-fuchsia-500 border-white/30'
                }`}
                style={darkMode ? {
                  boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)'
                } : {}}
                >
                  <Globe className="w-5 h-5 text-white drop-shadow-lg" strokeWidth={2.5} />
                </div>
                <motion.h2
                  key={selectedSource}
                  initial={{ filter: "blur(10px)", opacity: 0 }}
                  animate={{ filter: "blur(0px)", opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className={`text-xl font-black tracking-tight drop-shadow-sm transition-colors duration-500 ${
                    darkMode ? 'text-purple-100' : 'text-white light-mode-modal-heading'
                  }`}
                >
                  {t('choose_your_journey')}
                </motion.h2>
              </div>
              <button
                onClick={handleClose}
                className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 border shadow-lg ${
                  darkMode
                    ? 'bg-purple-500/20 hover:bg-purple-500/30 border-purple-400/40'
                    : 'bg-white/15 hover:bg-white/25 border-white/30'
                }`}
              >
                <X className="w-5 h-5 text-white" strokeWidth={2.5} />
              </button>
            </div>

            <motion.p
              key={`${selectedSource}-sub-mobile`}
              initial={{ filter: "blur(10px)", opacity: 0 }}
              animate={{ filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className={`text-sm mb-6 drop-shadow-sm transition-colors duration-500 ${
                darkMode ? 'text-purple-200/80' : 'text-white/80 light-mode-modal-subtext'
              }`}
            >
              {t('select_learning_pair')}
            </motion.p>

            {/* Source Language */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-2.5 h-2.5 rounded-full shadow-lg transition-all duration-500 ${
                  darkMode ? 'bg-cyan-400 shadow-cyan-400/60' : 'bg-cyan-400 shadow-cyan-400/50'
                }`}></div>
                <motion.h3
                  key={`i-know-mobile-${selectedSource}`}
                  initial={{ filter: "blur(10px)", opacity: 0 }}
                  animate={{ filter: "blur(0px)", opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className={`font-bold drop-shadow-sm transition-colors duration-500 ${
                    darkMode ? 'text-purple-100' : 'text-white light-mode-modal-label'
                  }`}
                >
                  {t('i_know')}
                </motion.h3>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {sourceLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleSourceChange(lang.code)}
                    className={`relative p-3 rounded-xl border transition-all duration-300 ${
                      selectedSource === lang.code
                        ? darkMode
                          ? 'bg-gradient-to-br from-purple-500/40 via-fuchsia-500/35 to-purple-500/40 border-purple-300/70 shadow-lg'
                          : 'bg-white/25 border-white/50 shadow-lg'
                        : darkMode
                          ? 'bg-purple-500/10 border-purple-400/30 hover:bg-purple-500/20'
                          : 'bg-white/10 border-white/25 hover:bg-white/15'
                    }`}
                    style={selectedSource === lang.code && darkMode ? {
                      boxShadow: '0 0 15px rgba(168, 85, 247, 0.3), 0 2px 8px rgba(0, 0, 0, 0.1)'
                    } : {}}
                  >
                    {selectedSource === lang.code && (
                      <div className={`absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center shadow-lg ${
                        darkMode
                          ? 'bg-gradient-to-br from-cyan-400 to-cyan-500'
                          : 'bg-gradient-to-br from-cyan-400 to-blue-500'
                      }`}
                      style={darkMode ? {
                        boxShadow: '0 0 10px rgba(34, 211, 238, 0.5)'
                      } : {}}
                      >
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                    )}
                    <div className="text-2xl mb-1">{lang.flag}</div>
                    <motion.div
                      key={`${lang.code}-mobile-${selectedSource}`}
                      initial={{ filter: "blur(10px)", opacity: 0 }}
                      animate={{ filter: "blur(0px)", opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`text-xs font-semibold drop-shadow-sm transition-colors duration-300 ${
                        selectedSource === lang.code 
                          ? darkMode ? 'text-purple-50' : 'text-white light-mode-modal-lang' 
                          : darkMode ? 'text-purple-200/90' : 'text-white/85 light-mode-modal-lang'
                      }`}
                    >
                      {lang.name}
                    </motion.div>
                  </button>
                ))}
              </div>
            </div>

            {/* Target Language */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-2.5 h-2.5 rounded-full shadow-lg transition-all duration-500 ${
                  darkMode ? 'bg-pink-400 shadow-pink-400/60' : 'bg-pink-400 shadow-pink-400/50'
                }`}></div>
                <motion.h3
                  key={`i-learn-mobile-${selectedSource}`}
                  initial={{ filter: "blur(10px)", opacity: 0 }}
                  animate={{ filter: "blur(0px)", opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className={`font-bold drop-shadow-sm transition-colors duration-500 ${
                    darkMode ? 'text-purple-100' : 'text-white light-mode-modal-label'
                  }`}
                >
                  {t('i_want_to_learn')}
                </motion.h3>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-3">
                {targetLanguages.map((lang) => {
                  const isAvailable = isTargetAvailable(lang.code);
                  const isDisabled = !isAvailable;
                  
                  return (
                    <button
                      key={lang.code}
                      onClick={() => isAvailable && setSelectedTarget(lang.code)}
                      disabled={isDisabled}
                      className={`relative p-3 rounded-xl border transition-all duration-300 ${
                        isDisabled
                          ? darkMode
                            ? 'bg-gray-900/30 border-purple-50/10 opacity-30'
                            : 'bg-white/5 border-white/10 opacity-30'
                          : selectedTarget === lang.code
                          ? darkMode
                            ? 'bg-gradient-to-br from-fuchsia-500/40 via-pink-500/35 to-fuchsia-500/40 border-fuchsia-300/70 shadow-lg'
                            : 'bg-white/25 border-white/50 shadow-lg'
                          : darkMode
                            ? 'bg-fuchsia-500/10 border-fuchsia-400/30 hover:bg-fuchsia-500/20'
                            : 'bg-white/10 border-white/25 hover:bg-white/15'
                      }`}
                      style={selectedTarget === lang.code && isAvailable && darkMode ? {
                        boxShadow: '0 0 15px rgba(217, 70, 239, 0.3), 0 2px 8px rgba(0, 0, 0, 0.1)'
                      } : {}}
                    >
                      {selectedTarget === lang.code && isAvailable && (
                        <div className={`absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center shadow-lg ${
                          darkMode
                            ? 'bg-gradient-to-br from-pink-400 to-pink-500'
                            : 'bg-gradient-to-br from-pink-400 to-purple-500'
                        }`}
                        style={darkMode ? {
                          boxShadow: '0 0 10px rgba(244, 114, 182, 0.5)'
                        } : {}}
                        >
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                      )}
                      <div className="text-2xl mb-1">{lang.flag}</div>
                      <motion.div
                        key={`${lang.code}-mobile-${selectedSource}-${selectedTarget}`}
                        initial={{ filter: "blur(10px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className={`text-xs font-semibold drop-shadow-sm transition-colors duration-300 ${
                          isDisabled 
                            ? darkMode ? 'text-purple-200/30' : 'text-white/30'
                            : selectedTarget === lang.code 
                            ? darkMode ? 'text-purple-50' : 'text-white light-mode-modal-lang' 
                            : darkMode ? 'text-purple-200/90' : 'text-white/85 light-mode-modal-lang'
                        }`}
                      >
                        {t(lang.code)}
                      </motion.div>
                    </button>
                  );
                })}
              </div>

              {/* Mobile version of the 'enable more languages' info banner */}
              <div className={`rounded-lg p-2.5 border backdrop-blur-xl transition-all duration-500 ${
                darkMode
                  ? 'border-orange-400/40 bg-gradient-to-br from-orange-500/20 to-orange-600/20'
                  : 'border-white/30 bg-gradient-to-br from-orange-400/25 to-orange-500/20'
              }`}>
                <motion.p
                  key={`enable-mobile-${selectedSource}`}
                  initial={{ filter: "blur(10px)", opacity: 0 }}
                  animate={{ filter: "blur(0px)", opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`text-xs text-center leading-relaxed font-medium transition-colors duration-500 ${
                    darkMode ? 'text-orange-200/90' : 'text-white/90 light-mode-modal-text'
                  }`}
                >
                  {t('enable_more_languages')}
                </motion.p>
              </div>
            </div>

            {/* Action Button */}
            <div>
              {error && (
                <div className={`mb-4 p-3 rounded-xl flex items-center justify-center gap-2 text-sm font-medium ${
                  darkMode ? 'bg-red-500/20 text-red-300 border border-red-400/40' : 'bg-red-100 text-red-700 border border-red-300'
                }`}>
                  <AlertCircle className="w-5 h-5" />
                  <span>{error}</span>
                </div>
              )}
              <button
                onClick={handleSave}
                disabled={saving || !hasValidSelection}
                className={`button-shimmer relative w-full group overflow-hidden rounded-xl disabled:opacity-50 transition-transform active:scale-95 border ${
                  darkMode ? 'border-purple-400/40' : 'border-white/30'
                }`}
                style={{
                  boxShadow: darkMode 
                    ? '0 8px 32px rgba(168, 85, 247, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
                    : '0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                <div className={`absolute inset-0 opacity-90 active:opacity-100 transition-opacity ${
                  darkMode
                    ? 'bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500'
                    : 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500'
                }`}></div>
                
                <div className="shimmer-effect"></div>

                <div className="relative flex items-center justify-center gap-2.5 py-4 px-6">
                  {saving ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-white" />
                      <span className={`text-white font-bold text-base ${!darkMode ? 'light-mode-modal-text' : ''}`}>{t('saving')}</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 text-white drop-shadow-lg" />
                      <motion.span
                        key={`start-mobile-${selectedSource}-${selectedTarget}`}
                        initial={{ filter: "blur(10px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className={`text-white font-bold text-base tracking-wide drop-shadow-lg ${!darkMode ? 'light-mode-modal-text' : ''}`}
                      >
                        {t('start_learning')}
                      </motion.span>
                      <ArrowRight className="w-5 h-5 text-white drop-shadow-lg" strokeWidth={2.5} />
                    </>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              </button>

              {hasValidSelection && !saving && (
                <p className={`text-center text-xs mt-3 drop-shadow-sm transition-colors duration-500 ${
                  darkMode ? 'text-purple-200/90' : 'text-white/80 light-mode-modal-subtext'
                }`}>
                  {t(selectedSource)} → {t(selectedTarget)}
                </p>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        .shimmer-effect {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%);
          transform: translateX(-100%);
          animation: shimmer 3s linear infinite;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }

        .arrow-pulse {
          animation: arrowPulse 1.5s ease-in-out infinite;
        }

        @keyframes arrowPulse {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(4px);
          }
        }

        .button-shimmer {
          will-change: transform;
        }
      `}</style>
    </motion.div>
  );
}