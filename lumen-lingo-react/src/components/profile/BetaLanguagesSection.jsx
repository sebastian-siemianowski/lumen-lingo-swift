import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { setLocalData, STORAGE_KEYS } from "../utils/offlineSync";
import { 
  FlaskConical, 
  Globe, 
  CheckCircle, 
  XCircle, 
  Lightbulb, 
  ChevronDown,
  Star,
  Sparkles
} from "lucide-react";
import { useDarkMode } from "../theme/DarkModeContext";
import { useLanguage } from "../language/LanguageContext";
import { useTranslations } from "../utils/translations";
import useAudioFeedback from "../shared/useAudioFeedback";

const TOP_LANGUAGE_PAIRS = [
  { source: "english", target: "spanish", label: "English → Spanish" },
  { source: "spanish", target: "english", label: "Spanish → English" },
  { source: "polish", target: "english", label: "Polish → English" },
  { source: "polish", target: "spanish", label: "Polish → Spanish" },
  { source: "polish", target: "german", label: "Polish → German" },
  { source: "german", target: "english", label: "German → English" },
  { source: "german", target: "spanish", label: "German → Spanish" }
];

const ALL_LANGUAGE_PAIRS = [
  { source: "english", target: "spanish", label: "English → Spanish" },
  { source: "english", target: "polish", label: "English → Polish" },
  { source: "english", target: "german", label: "English → German" },
  { source: "english", target: "french", label: "English → French" },
  { source: "english", target: "arabic", label: "English → Arabic" },
  { source: "english", target: "chinese", label: "English → Chinese" },
  { source: "english", target: "japanese", label: "English → Japanese" },
  { source: "spanish", target: "english", label: "Spanish → English" },
  { source: "polish", target: "english", label: "Polish → English" },
  { source: "polish", target: "spanish", label: "Polish → Spanish" },
  { source: "polish", target: "german", label: "Polish → German" },
  { source: "polish", target: "ukrainian", label: "Polish → Ukrainian" },
  { source: "polish", target: "french", label: "Polish → French" },
  { source: "polish", target: "arabic", label: "Polish → Arabic" },
  { source: "polish", target: "chinese", label: "Polish → Chinese" },
  { source: "polish", target: "japanese", label: "Polish → Japanese" },
  { source: "german", target: "english", label: "German → English" },
  { source: "german", target: "spanish", label: "German → Spanish" },
  { source: "german", target: "polish", label: "German → Polish" },
  { source: "ukrainian", target: "english", label: "Ukrainian → English" },
  { source: "ukrainian", target: "polish", label: "Ukrainian → Polish" },
  { source: "french", target: "english", label: "French → English" },
  { source: "arabic", target: "english", label: "Arabic → English" },
  { source: "chinese", target: "english", label: "Chinese → English" },
  { source: "japanese", target: "english", label: "Japanese → English" }
];

const isTopPair = (source, target) => {
  return TOP_LANGUAGE_PAIRS.some(p => p.source === source && p.target === target);
};

export default function BetaLanguagesSection() {
  const { darkMode } = useDarkMode();
  const { sourceLanguage } = useLanguage();
  const t = useTranslations(sourceLanguage);
  const [enabledPairs, setEnabledPairs] = useState([]);
  const { playSoftClick, playButtonTap } = useAudioFeedback();
  const [isDesktop, setIsDesktop] = useState(() => (typeof window !== 'undefined' ? window.innerWidth >= 640 : false));
  useEffect(() => {
    const handler = () => setIsDesktop(window.innerWidth >= 640);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  const [savingPairs, setSavingPairs] = useState(false);
  const [showBetaSection, setShowBetaSection] = useState(false);
  const [showCoreLanguages, setShowCoreLanguages] = useState(false);
  const [showExperimentalLanguages, setShowExperimentalLanguages] = useState(false);

  useEffect(() => {
    const localStorageEnabledPairs = JSON.parse(localStorage.getItem('lumenlingo_enabled_pairs') || '[]');
    setEnabledPairs(localStorageEnabledPairs);
  }, []);

  const toggleLanguagePair = async (source, target) => {
    playButtonTap();
    const pairKey = `${source}-${target}`;
    const isCurrentlyEnabled = enabledPairs.includes(pairKey);

    setSavingPairs(true);

    try {
      const updatedPairs = isCurrentlyEnabled
        ? enabledPairs.filter(p => p !== pairKey)
        : [...enabledPairs, pairKey];
      
      setEnabledPairs(updatedPairs);
      
      localStorage.setItem('lumenlingo_enabled_pairs', JSON.stringify(updatedPairs));
      window.dispatchEvent(new CustomEvent('enabledPairsChanged', { detail: updatedPairs }));

      // Don't change the active language pair - just enable/disable it
      // The user's current selection should remain unchanged

    } catch (error) {
      alert("Failed to update language pair. Please try again.");
    }

    setSavingPairs(false);
  };

  const topPairs = ALL_LANGUAGE_PAIRS.filter(pair => isTopPair(pair.source, pair.target));
  const betaPairs = ALL_LANGUAGE_PAIRS.filter(pair => !isTopPair(pair.source, pair.target));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
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
        <div className="absolute inset-0 bg-gradient-to-b from-white/3 via-transparent to-white/3 mix-blend-soft-light pointer-events-none rounded-[18px] sm:rounded-[24px]" />
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
              background: 'radial-gradient(900px 320px at 15% 0%, rgba(103, 232, 249, 0.10), transparent 68%), radial-gradient(900px 320px at 85% 100%, rgba(34, 211, 238, 0.08), transparent 68%)'
            }}
          />
        )}
        {darkMode && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 30% 20%, rgba(168, 85, 247, 0.08) 0%, transparent 50%)'
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}

        <div className="relative z-10" style={{ isolation: 'isolate' }}>
          {/* Header */}
          <motion.div
            className="flex items-center justify-between"
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-[44px] h-[44px] rounded-2xl flex items-center justify-center relative overflow-hidden"
                style={{
                  background: darkMode 
                    ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.35) 0%, rgba(20, 184, 166, 0.35) 100%)' 
                    : 'linear-gradient(135deg, rgba(103, 232, 249, 0.3) 0%, rgba(34, 211, 238, 0.3) 100%)',
                  backdropFilter: 'blur(40px)',
                  WebkitBackdropFilter: 'blur(40px)',
                  border: darkMode ? '1px solid rgba(34, 211, 238, 0.35)' : '1px solid rgba(34, 211, 238, 0.4)',
                  boxShadow: darkMode
                    ? '0 0 20px rgba(34, 211, 238, 0.15), inset 0 -2px 8px rgba(34, 211, 238, 0.1)'
                    : '0 0 15px rgba(34, 211, 238, 0.15), inset 0 -2px 6px rgba(34, 211, 238, 0.15)'
                }}
              >
                <FlaskConical className="w-[22px] h-[22px]" style={{ color: darkMode ? '#67E8F9' : 'rgb(103, 232, 249)' }} />
              </div>

              <div>
                <h2 
                  className="text-[17px] sm:text-[22px] font-bold tracking-tight"
                  style={{
                    color: darkMode ? '#FFFFFF' : 'rgba(255, 255, 255, 1)',
                    transition: 'color 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
                  }}
                >{t('beta_languages')}</h2>
                <p 
                  className="text-[13px] sm:text-[17px]"
                  style={{
                    color: darkMode ? 'rgba(199, 186, 220, 0.7)' : 'rgba(255, 255, 255, 0.6)',
                    marginTop: '4px'
                  }}
                >
                  {t('experimental_language_pairs')}
                </p>
              </div>
            </div>


          </motion.div>

          <AnimatePresence>
            {true && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: 1, 
                  height: 'auto',
                  transition: {
                    height: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
                    opacity: { duration: 0.35, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
                  }
                }}
                exit={{ 
                  opacity: 0, 
                  height: 0,
                  transition: {
                    height: { duration: 0.4, ease: [0.55, 0.085, 0.68, 0.53] },
                    opacity: { duration: 0.2, ease: [0.55, 0.085, 0.68, 0.53] }
                  }
                }}
                style={{ overflow: 'hidden' }}
              >
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="rounded-[18px] sm:rounded-[24px] p-4 mb-5 mt-4"
                  style={darkMode ? {
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'rgba(251, 191, 36, 0.3)',
                    background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.12) 0%, rgba(217, 119, 6, 0.08) 100%)'
                  } : {
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'rgba(255, 255, 255, 0.4)',
                    background: 'linear-gradient(135deg, rgba(252, 211, 77, 0.25) 0%, rgba(251, 191, 36, 0.2) 100%)',
                    backdropFilter: 'blur(16px)'
                  }}
                >
                  <div className="flex items-start gap-3">
                    <motion.div
                      animate={{
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Lightbulb className={`w-5 h-5 flex-shrink-0 ${darkMode ? 'text-yellow-400' : 'text-white'}`} strokeWidth={2.5} />
                    </motion.div>
                    <div className="flex-1">
                      <p 
                        className="font-bold text-sm mb-1"
                        style={{
                          color: darkMode ? 'rgb(254, 240, 138)' : 'rgba(255, 255, 255, 1)',
                          transition: 'color 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
                        }}
                      >
                        {t('experimental_features')}
                      </p>
                      <p 
                        className="text-xs leading-relaxed"
                        style={{
                          color: darkMode ? 'rgba(254, 240, 138, 0.7)' : 'rgba(255, 255, 255, 0.9)',
                          transition: 'color 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
                        }}
                      >
                        {t('experimental_features_desc')}
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="mb-6"
                >
                  <div className="relative flex items-center justify-between mb-3">
                    {/* Micro-light halo behind header */}
                    <div className="absolute -inset-x-4 top-0 h-[40px] bg-white/8 blur-xl rounded-[18px] sm:rounded-[24px] pointer-events-none" />
                    
                    <div className="relative flex items-center gap-2">
                      <Star className={`w-4 h-4 ${darkMode ? 'text-yellow-400' : 'text-white'}`} strokeWidth={2.5} />
                      <h3 
                        className="font-bold text-sm sm:text-base"
                        style={{
                          color: 'rgba(255, 255, 255, 1)',
                          transition: 'color 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
                        }}
                      >
                        {t('core_languages')}
                      </h3>
                      <div
                        className="px-2 py-0.5 rounded-full text-[10px] font-bold"
                        style={darkMode ? {
                          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(16, 185, 129, 0.2) 100%)',
                          color: '#4ADE80',
                          border: '1px solid rgba(34, 197, 94, 0.3)'
                        } : {
                          background: 'rgba(255, 255, 255, 0.25)',
                          color: 'white',
                          border: '1px solid rgba(255, 255, 255, 0.35)',
                          textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
                        }}
                      >
                        {t('always_on')}
                      </div>
                    </div>


                  </div>

                  <AnimatePresence initial={false}>
                    {true && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ 
                          opacity: 1, 
                          height: 'auto',
                          transition: {
                            height: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
                            opacity: { duration: 0.35, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
                          }
                        }}
                        exit={{ 
                          opacity: 0, 
                          height: 0,
                          transition: {
                            height: { duration: 0.4, ease: [0.55, 0.085, 0.68, 0.53] },
                            opacity: { duration: 0.2, ease: [0.55, 0.085, 0.68, 0.53] }
                          }
                        }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {topPairs.map((pair, index) => {
                            const pairKey = `${pair.source}-${pair.target}`;

                            return (
                              <motion.div
                                key={pairKey}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ 
                                  opacity: 1, 
                                  y: 0,
                                  transition: {
                                    delay: index * 0.03,
                                    duration: 0.3,
                                    ease: [0.32, 0.72, 0, 1]
                                  }
                                }}
                                exit={{ 
                                  opacity: 0,
                                  transition: { duration: 0.15 }
                                }}
                                className="group relative rounded-[18px] sm:rounded-[24px]"
                                style={{
                                  background: darkMode 
                                    ? (index % 2 === 0 ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.08)')
                                    : (index % 2 === 0 ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 0.1)'),
                                  backdropFilter: darkMode ? 'blur(32px)' : 'blur(35px)',
                                  WebkitBackdropFilter: darkMode ? 'blur(32px)' : 'blur(35px)',
                                  border: darkMode ? '1px solid rgba(34, 197, 94, 0.35)' : '1px solid rgba(255, 255, 255, 0.2)',
                                  boxShadow: darkMode
                                    ? '0 30px 60px -15px rgba(0, 0, 0, 0.12), 0 15px 30px -10px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -3px 8px rgba(255, 255, 255, 0.05)'
                                    : '0 25px 50px -12px rgba(0, 0, 0, 0.05), 0 12px 24px -8px rgba(0, 0, 0, 0.03), inset 0 -2px 6px rgba(255, 255, 255, 0.2)'
                                }}
                              >
                                <div className="relative z-10 p-3.5 flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <div
                                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                                      style={darkMode ? {
                                        borderWidth: '1px',
                                        borderStyle: 'solid',
                                        borderColor: 'rgba(34, 197, 94, 0.3)',
                                        background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(16, 185, 129, 0.15) 100%)'
                                      } : {
                                        borderWidth: '1px',
                                        borderStyle: 'solid',
                                        borderColor: 'rgba(255, 255, 255, 0.45)',
                                        background: 'rgba(255, 255, 255, 0.25)'
                                      }}
                                    >
                                      <Globe className={`w-4 h-4 ${darkMode ? 'text-green-300' : 'text-white'}`} strokeWidth={2.5} />
                                    </div>
                                    <span 
                                      className="font-semibold text-sm"
                                      style={{
                                        color: darkMode ? 'rgb(220, 252, 231)' : 'rgba(255, 255, 255, 1)',
                                        transition: 'color 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
                                      }}
                                    >
                                      {pair.label}
                                    </span>
                                  </div>

                                  <div className="flex items-center gap-3">
                                    <motion.div
                                      animate={{ scale: [1, 1.1, 1] }}
                                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                      <CheckCircle className={`w-5 h-5 ${darkMode ? 'text-green-400' : 'text-white'}`} strokeWidth={2.5} />
                                    </motion.div>
                                    <span 
                                      className="text-xs font-bold"
                                      style={{
                                        color: darkMode ? 'rgb(134, 239, 172)' : 'rgba(255, 255, 255, 1)',
                                        transition: 'color 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
                                      }}
                                    >
                                      {t('active')}
                                    </span>
                                  </div>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <div className="relative flex items-center justify-between mb-3">
                    {/* Micro-light halo behind header */}
                    <div className="absolute -inset-x-4 top-0 h-[40px] bg-white/8 blur-xl rounded-[18px] sm:rounded-[24px] pointer-events-none" />
                    
                    <div className="relative flex items-center gap-2">
                      <FlaskConical className={`w-4 h-4 ${darkMode ? 'text-cyan-400' : 'text-white'}`} strokeWidth={2.5} />
                      <h3 
                        className="font-bold text-sm sm:text-base"
                        style={{
                          color: darkMode ? 'rgb(165, 243, 252)' : 'rgba(255, 255, 255, 1)',
                          transition: 'color 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
                        }}
                      >
                        {t('experimental_languages')}
                      </h3>
                    </div>


                  </div>

                  <AnimatePresence initial={false}>
                    {true && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ 
                          opacity: 1, 
                          height: 'auto',
                          transition: {
                            height: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
                            opacity: { duration: 0.35, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
                          }
                        }}
                        exit={{ 
                          opacity: 0, 
                          height: 0,
                          transition: {
                            height: { duration: 0.4, ease: [0.55, 0.085, 0.68, 0.53] },
                            opacity: { duration: 0.2, ease: [0.55, 0.085, 0.68, 0.53] }
                          }
                        }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {betaPairs.map((pair, index) => {
                            const pairKey = `${pair.source}-${pair.target}`;
                            const isEnabled = enabledPairs.includes(pairKey);

                            return (
                              <motion.button
                                key={pairKey}
                                onClick={() => toggleLanguagePair(pair.source, pair.target)}
                                disabled={savingPairs}
                                whileHover={{ 
                                  scale: savingPairs ? 1 : 1.015,
                                  y: savingPairs ? 0 : -2
                                }}
                                whileTap={{ scale: savingPairs ? 1 : 0.985 }}
                                className="group relative rounded-[18px] sm:rounded-[24px]"
                                animate={
                                  isEnabled
                                    ? darkMode
                                      ? {
                                          background: [
                                            'linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(168, 85, 247, 0.08) 100%)',
                                            'linear-gradient(135deg, rgba(139, 92, 246, 0.18) 0%, rgba(168, 85, 247, 0.14) 100%)',
                                            'linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(168, 85, 247, 0.08) 100%)'
                                          ],
                                          borderColor: [
                                            'rgba(168, 85, 247, 0.35)',
                                            'rgba(168, 85, 247, 0.45)',
                                            'rgba(168, 85, 247, 0.35)'
                                          ]
                                        }
                                      : {
                                          background: [
                                            'linear-gradient(135deg, rgba(192, 132, 252, 0.25) 0%, rgba(168, 85, 247, 0.2) 100%)',
                                            'linear-gradient(135deg, rgba(192, 132, 252, 0.32) 0%, rgba(168, 85, 247, 0.28) 100%)',
                                            'linear-gradient(135deg, rgba(192, 132, 252, 0.25) 0%, rgba(168, 85, 247, 0.2) 100%)'
                                          ]
                                        }
                                    : darkMode
                                      ? {
                                          background: 'rgba(255, 255, 255, 0.06)',
                                          borderColor: 'rgba(255, 255, 255, 0.15)'
                                        }
                                      : {}
                                }
                                transition={
                                  isEnabled
                                    ? {
                                        background: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                                        borderColor: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                                      }
                                    : { 
                                        background: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                                        borderColor: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                                      }
                                }
                                style={
                                  savingPairs
                                    ? {
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        backdropFilter: 'blur(32px)',
                                        WebkitBackdropFilter: 'blur(32px)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        opacity: 0.5,
                                        cursor: 'wait'
                                      }
                                    : isEnabled
                                      ? {
                                          background: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.12)',
                                          backdropFilter: darkMode ? 'blur(32px)' : 'blur(35px)',
                                          WebkitBackdropFilter: darkMode ? 'blur(32px)' : 'blur(35px)',
                                          border: darkMode ? '1px solid rgba(168, 85, 247, 0.4)' : '1px solid rgba(255, 255, 255, 0.35)',
                                          boxShadow: darkMode
                                            ? '0 30px 60px -15px rgba(0, 0, 0, 0.12), 0 15px 30px -10px rgba(0, 0, 0, 0.08), 0 0 15px rgba(168, 85, 247, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -3px 8px rgba(255, 255, 255, 0.08)'
                                            : '0 25px 50px -12px rgba(0, 0, 0, 0.05), 0 12px 24px -8px rgba(0, 0, 0, 0.03), inset 0 -2px 6px rgba(255, 255, 255, 0.25)'
                                        }
                                      : {
                                          background: darkMode 
                                        ? (index % 2 === 0 ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.08)')
                                        : (index % 2 === 0 ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 0.1)'),
                                          backdropFilter: darkMode ? 'blur(32px)' : 'blur(35px)',
                                          WebkitBackdropFilter: darkMode ? 'blur(32px)' : 'blur(35px)',
                                          border: darkMode ? '1px solid rgba(168, 85, 247, 0.35)' : '1px solid rgba(255, 255, 255, 0.15)',
                                          boxShadow: darkMode
                                            ? '0 30px 60px -15px rgba(0, 0, 0, 0.12), 0 15px 30px -10px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -3px 8px rgba(255, 255, 255, 0.05)'
                                            : '0 25px 50px -12px rgba(0, 0, 0, 0.03), 0 12px 24px -8px rgba(0, 0, 0, 0.02), inset 0 -2px 6px rgba(255, 255, 255, 0.15)'
                                        }
                                }
                              >
                                <div className="relative z-10 p-3.5 flex items-center justify-between">
                                  <div className="flex items-center gap-3 flex-1 min-w-0">
                                    <motion.div
                                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                                      animate={
                                        isEnabled
                                          ? darkMode
                                            ? {
                                                background: [
                                                  'linear-gradient(135deg, rgba(168, 85, 247, 0.25) 0%, rgba(147, 51, 234, 0.2) 100%)',
                                                  'linear-gradient(135deg, rgba(168, 85, 247, 0.35) 0%, rgba(147, 51, 234, 0.28) 100%)',
                                                  'linear-gradient(135deg, rgba(168, 85, 247, 0.25) 0%, rgba(147, 51, 234, 0.2) 100%)'
                                                ],
                                                borderColor: [
                                                  'rgba(192, 132, 252, 0.35)',
                                                  'rgba(192, 132, 252, 0.45)',
                                                  'rgba(192, 132, 252, 0.35)'
                                                ]
                                              }
                                            : {}
                                          : darkMode
                                            ? {
                                                background: 'rgba(255, 255, 255, 0.03)',
                                                borderColor: 'rgba(255, 255, 255, 0.08)'
                                              }
                                            : {}
                                      }
                                      transition={
                                        isEnabled
                                          ? { 
                                              background: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                                              borderColor: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                                            }
                                          : { 
                                              background: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                                              borderColor: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                                            }
                                      }
                                      style={
                                        isEnabled
                                          ? darkMode
                                            ? {
                                                borderWidth: '1px',
                                                borderStyle: 'solid',
                                                borderColor: 'rgba(192, 132, 252, 0.4)',
                                                background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.25) 0%, rgba(147, 51, 234, 0.2) 100%)'
                                              }
                                            : {
                                                borderWidth: '1px',
                                                borderStyle: 'solid',
                                                borderColor: 'rgba(255, 255, 255, 0.5)',
                                                background: 'rgba(255, 255, 255, 0.3)'
                                              }
                                          : darkMode
                                            ? {
                                                borderWidth: '1px',
                                                borderStyle: 'solid',
                                                borderColor: 'rgba(255, 255, 255, 0.08)',
                                                background: 'rgba(255, 255, 255, 0.03)'
                                              }
                                            : {
                                                borderWidth: '1px',
                                                borderStyle: 'solid',
                                                borderColor: 'rgba(255, 255, 255, 0.3)',
                                                background: 'rgba(255, 255, 255, 0.12)'
                                              }
                                      }
                                    >
                                      <Globe 
                                        className={`w-4 h-4 ${
                                          isEnabled
                                            ? darkMode ? 'text-purple-300' : 'text-white'
                                            : !darkMode && 'text-white/60'
                                        }`}
                                        style={!isEnabled && darkMode ? { color: '#CEC9D7' } : {}}
                                        strokeWidth={2.5}
                                      />
                                    </motion.div>

                                    <span 
                                      className="font-semibold text-sm truncate"
                                      style={{
                                        color: isEnabled
                                          ? darkMode ? 'rgb(243, 232, 255)' : 'rgba(255, 255, 255, 1)'
                                          : darkMode ? 'rgba(255, 255, 255, 0.75)' : 'rgba(255, 255, 255, 0.7)',
                                        transition: 'color 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
                                      }}
                                    >
                                      {pair.label}
                                    </span>
                                  </div>

                                  <div className="relative flex items-center gap-3 flex-shrink-0">
                                    <AnimatePresence mode="wait">
                                      {isEnabled ? (
                                        <motion.div
                                          key="enabled"
                                          initial={{ scale: 0, rotate: -90 }}
                                          animate={{ scale: 1, rotate: 0 }}
                                          exit={{ scale: 0, rotate: 90 }}
                                          transition={{ type: "spring", stiffness: 500, damping: 25 }}
                                          className="flex items-center gap-1.5"
                                        >
                                          <CheckCircle 
                                            className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-white'}`}
                                            strokeWidth={2.5}
                                          />
                                          <span 
                                            className="text-xs font-bold"
                                            style={{
                                              color: darkMode ? 'rgb(216, 180, 254)' : 'rgba(255, 255, 255, 1)',
                                              transition: 'color 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
                                            }}
                                          >
                                            {t('on')}
                                          </span>
                                        </motion.div>
                                      ) : (
                                        <motion.div
                                          key="disabled"
                                          initial={{ scale: 0, rotate: 90 }}
                                          animate={{ scale: 1, rotate: 0 }}
                                          exit={{ scale: 0, rotate: -90 }}
                                          transition={{ type: "spring", stiffness: 500, damping: 25 }}
                                          className="flex items-center gap-1.5"
                                        >
                                          <XCircle 
                                            className={`w-5 h-5 ${!darkMode && 'text-white/60'}`}
                                            style={darkMode ? { color: '#CEC9D7' } : {}}
                                            strokeWidth={2.5}
                                          />
                                          <span 
                                            className="text-xs font-bold"
                                            style={{
                                              color: darkMode ? 'rgba(255, 255, 255, 0.75)' : 'rgba(255, 255, 255, 0.7)',
                                              transition: 'color 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
                                            }}
                                          >
                                            {t('off')}
                                          </span>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                </div>
                              </motion.button>
                            );
                          })}
                        </div>

                        <AnimatePresence>
                          {savingPairs && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="mt-4 flex items-center justify-center gap-2 rounded-[18px] sm:rounded-[24px] p-3"
                              style={darkMode ? {
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                borderColor: 'rgba(168, 85, 247, 0.3)',
                                background: 'rgba(168, 85, 247, 0.08)'
                              } : {
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                borderColor: 'rgba(255, 255, 255, 0.4)',
                                background: 'rgba(255, 255, 255, 0.15)',
                                backdropFilter: 'blur(12px)'
                              }}
                            >
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              >
                                <Sparkles className={`w-4 h-4 ${darkMode ? 'text-purple-400' : 'text-white'}`} strokeWidth={2.5} />
                              </motion.div>
                              <span className={`text-sm font-semibold ${
                                darkMode ? 'text-purple-300' : 'text-white light-mode-text'
                              }`}>
                                {t('updating_preferences')}
                              </span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}