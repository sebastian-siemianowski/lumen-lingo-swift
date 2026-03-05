import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, ChevronDown, Zap, Sparkles, Music, Award, Gamepad2, MessageSquare, PenTool } from "lucide-react";
import { useDarkMode } from "../theme/DarkModeContext";
import { useLanguage } from "../language/LanguageContext";
import { useTranslations } from "../utils/translations";
import useAudioFeedback from "../shared/useAudioFeedback";
import AppToggle from "../shared/AppToggle";
import Collapse from "../shared/Collapse";

export default function SoundSettings() {
  const { darkMode } = useDarkMode();
  const { sourceLanguage } = useLanguage();
  const t = useTranslations(sourceLanguage);
  const { playSoftClick } = useAudioFeedback();
  const audioContextRef = useRef(null);

  const [isDesktop, setIsDesktop] = useState(() => (typeof window !== 'undefined' ? window.innerWidth >= 640 : false));
  useEffect(() => {
    const handler = () => setIsDesktop(window.innerWidth >= 640);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const [isExpanded, setIsExpanded] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(() => {
    try {
      const saved = localStorage.getItem("audioFeedbackEnabled");
      return saved === null ? true : saved === "true";
    } catch {
      return true;
    }
  });

  // Category toggles
  const [gamesSoundsEnabled, setGamesSoundsEnabled] = useState(() => {
    try { const v = localStorage.getItem("gamesSoundsEnabled"); return v === null ? true : v === "true"; } catch { return true; }
  });
  const [flashcardsSoundsEnabled, setFlashcardsSoundsEnabled] = useState(() => {
    try { const v = localStorage.getItem("flashcardsSoundsEnabled"); return v === null ? true : v === "true"; } catch { return true; }
  });
  const [grammarSoundsEnabled, setGrammarSoundsEnabled] = useState(() => {
    try { const v = localStorage.getItem("grammarSoundsEnabled"); return v === null ? true : v === "true"; } catch { return true; }
  });
  const [wordBuilderSoundsEnabled, setWordBuilderSoundsEnabled] = useState(() => {
    try { const v = localStorage.getItem("wordBuilderSoundsEnabled"); return v === null ? true : v === "true"; } catch { return true; }
  });
  const [uiSoundsEnabled, setUiSoundsEnabled] = useState(() => {
    try { const v = localStorage.getItem("uiSoundsEnabled"); return v === null ? true : v === "true"; } catch { return true; }
  });
  const [achievementSoundsEnabled, setAchievementSoundsEnabled] = useState(() => {
    try { const v = localStorage.getItem("achievementSoundsEnabled"); return v === null ? true : v === "true"; } catch { return true; }
  });
  const [ambientSoundsEnabled, setAmbientSoundsEnabled] = useState(() => {
    try { const v = localStorage.getItem("ambientSoundsEnabled"); return v === null ? false : v === "true"; } catch { return false; }
  });

  // Audio context (preview)
  const getAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      try {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      } catch (e) {
        return null;
      }
    }
    return audioContextRef.current;
  }, []);

  const playPreviewSound = useCallback(() => {
    const ctx = getAudioContext();
    if (!ctx) return;
    [1400, 1800, 2200].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.type = "sine";
      const delay = i * 0.04;
      gain.gain.setValueAtTime(0, ctx.currentTime + delay);
      gain.gain.linearRampToValueAtTime(0.06, ctx.currentTime + delay + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.2);
      osc.start(ctx.currentTime + delay);
      osc.stop(ctx.currentTime + delay + 0.2);
    });
  }, [getAudioContext]);

  // Handlers
  const handleToggle = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    try {
      localStorage.setItem("audioFeedbackEnabled", next.toString());
      window.dispatchEvent(new Event("audioFeedbackChanged"));
      if (!next) {
        setGamesSoundsEnabled(false);
        setFlashcardsSoundsEnabled(false);
        setGrammarSoundsEnabled(false);
        setWordBuilderSoundsEnabled(false);
        setUiSoundsEnabled(false);
        setAchievementSoundsEnabled(false);
        setAmbientSoundsEnabled(false);
        localStorage.setItem("gamesSoundsEnabled", "false");
        localStorage.setItem("flashcardsSoundsEnabled", "false");
        localStorage.setItem("grammarSoundsEnabled", "false");
        localStorage.setItem("wordBuilderSoundsEnabled", "false");
        localStorage.setItem("uiSoundsEnabled", "false");
        localStorage.setItem("achievementSoundsEnabled", "false");
        localStorage.setItem("ambientSoundsEnabled", "false");
      } else {
        setGamesSoundsEnabled(true);
        setFlashcardsSoundsEnabled(true);
        setGrammarSoundsEnabled(true);
        setWordBuilderSoundsEnabled(true);
        setUiSoundsEnabled(true);
        setAchievementSoundsEnabled(true);
        localStorage.setItem("gamesSoundsEnabled", "true");
        localStorage.setItem("flashcardsSoundsEnabled", "true");
        localStorage.setItem("grammarSoundsEnabled", "true");
        localStorage.setItem("wordBuilderSoundsEnabled", "true");
        localStorage.setItem("uiSoundsEnabled", "true");
        localStorage.setItem("achievementSoundsEnabled", "true");
        setTimeout(() => playPreviewSound(), 100);
      }
      window.dispatchEvent(new Event("soundSettingsChanged"));
    } catch {}
  };

  const handleCategoryToggle = (key, current, setter) => {
    const next = !current;
    setter(next);
    try {
      localStorage.setItem(key, next.toString());
      window.dispatchEvent(new Event("soundSettingsChanged"));
      if (next) playPreviewSound();
    } catch {}
  };

  const handleToggleAllGames = () => {
    const next = !gamesSoundsEnabled;
    setGamesSoundsEnabled(next);
    setFlashcardsSoundsEnabled(next);
    setGrammarSoundsEnabled(next);
    setWordBuilderSoundsEnabled(next);
    try {
      localStorage.setItem("gamesSoundsEnabled", next.toString());
      localStorage.setItem("flashcardsSoundsEnabled", next.toString());
      localStorage.setItem("grammarSoundsEnabled", next.toString());
      localStorage.setItem("wordBuilderSoundsEnabled", next.toString());
      window.dispatchEvent(new Event("soundSettingsChanged"));
      if (next) playPreviewSound();
    } catch {}
  };

  // Keep master games toggle in sync with its children
  useEffect(() => {
    const allOn = flashcardsSoundsEnabled && grammarSoundsEnabled && wordBuilderSoundsEnabled;
    if (gamesSoundsEnabled !== allOn) {
      setGamesSoundsEnabled(allOn);
      try { localStorage.setItem("gamesSoundsEnabled", allOn.toString()); } catch {}
    }
  }, [flashcardsSoundsEnabled, grammarSoundsEnabled, wordBuilderSoundsEnabled, gamesSoundsEnabled]);

  return (
    <div
      className="rounded-[18px] sm:rounded-[18px] sm:rounded-[24px] transition-all duration-500 relative overflow-hidden"
      style={{
        padding: window.innerWidth < 640 ? "12px 12px 10px" : "28px 28px 20px",
        background: darkMode ? "rgba(25, 18, 45, 0.6)" : "rgba(120, 60, 160, 0.25)",
        border: darkMode ? "1px solid rgba(100, 70, 160, 0.3)" : "1px solid rgba(255, 255, 255, 0.18)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        isolation: "isolate",
      }}
    >
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
        />
      )}
      {!darkMode && (
        <div
          className="absolute inset-0 pointer-events-none rounded-[18px] sm:rounded-[24px]"
          style={{
            background: 'radial-gradient(900px 320px at 12% 0%, rgba(251, 191, 36, 0.11), transparent 68%), radial-gradient(900px 320px at 88% 100%, rgba(249, 115, 22, 0.09), transparent 68%)'
          }}
        />
      )}
      {!darkMode && (
        <div
          className="absolute inset-0 pointer-events-none rounded-[18px] sm:rounded-[24px]"
          style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.06), transparent)' }}
        />
      )}
      <div className="relative z-10">
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
                  ? "linear-gradient(135deg, rgba(139, 92, 246, 0.35) 0%, rgba(192, 132, 252, 0.35) 100%)"
                  : "linear-gradient(135deg, rgba(251, 191, 36, 0.3) 0%, rgba(251, 146, 60, 0.3) 100%)",
                backdropFilter: "blur(40px)",
                WebkitBackdropFilter: "blur(40px)",
                border: darkMode ? "1px solid rgba(139, 92, 246, 0.35)" : "1px solid rgba(251, 191, 36, 0.4)",
                boxShadow: darkMode
                  ? "0 0 20px rgba(139, 92, 246, 0.15), inset 0 -2px 8px rgba(139, 92, 246, 0.1)"
                  : "0 0 15px rgba(251, 191, 36, 0.15), inset 0 -2px 6px rgba(251, 191, 36, 0.15)",
              }}
            >
              <AnimatePresence mode="wait">
                {soundEnabled ? (
                  <motion.div
                    key="vol-on"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Volume2 className="w-[22px] h-[22px]" style={{ color: darkMode ? "#C9B7FF" : "rgb(250, 204, 21)" }} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="vol-off"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <VolumeX className="w-[22px] h-[22px]" style={{ color: darkMode ? "rgba(201, 183, 255, 0.5)" : "rgba(250, 204, 21, 0.5)" }} />
                  </motion.div>
                  )}
                  </AnimatePresence>
            </div>

            <div>
              <h2
                className="text-[17px] sm:text-[22px] font-bold tracking-tight"
                style={{ color: darkMode ? "#FFFFFF" : "rgba(255, 255, 255, 1)" }}
              >
                {t("sound_effects") || "Sound Effects"}
              </h2>
              <p
                className="text-[13px] sm:text-[17px]"
                style={{ color: darkMode ? "rgba(199, 186, 220, 0.7)" : "rgba(255, 255, 255, 0.6)", marginTop: "4px" }}
              >
                {soundEnabled ? (t("sound_effects_on") || "Chimes and feedback sounds") : (t("sound_effects_off") || "Silent mode")}
              </p>
            </div>
          </div>


        </motion.div>

        {/* Collapsible content */}
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
              <div className="space-y-4 sm:space-y-5 mt-4 sm:mt-6 pb-4 sm:pb-7">
                {/* Master Toggle */}
                  <div
                    className="p-3 sm:p-4 rounded-[14px] sm:rounded-[18px]"
                  style={{
                    background: darkMode ? "rgba(20, 14, 38, 0.7)" : "rgba(60, 30, 100, 0.28)",
                    border: darkMode ? "1px solid rgba(90, 60, 150, 0.35)" : "1px solid rgba(255, 255, 255, 0.15)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AnimatePresence mode="wait">
                        {soundEnabled ? (
                          <motion.div key="toggle-on" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} transition={{ duration: 0.2 }}>
                            <Volume2 className="w-5 h-5" style={{ color: darkMode ? "rgb(192, 132, 252)" : "rgb(250, 204, 21)" }} />
                          </motion.div>
                        ) : (
                          <motion.div key="toggle-off" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} transition={{ duration: 0.2 }}>
                            <VolumeX className="w-5 h-5" style={{ color: darkMode ? "rgba(192, 132, 252, 0.5)" : "rgba(255, 255, 255, 0.5)" }} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <div>
                        <p className="font-semibold text-sm sm:text-base" style={{ color: darkMode ? "rgb(233, 213, 255)" : "rgba(255, 255, 255, 1)" }}>{t("master_audio") || "Master Audio"}</p>
                        <p className="text-xs sm:text-sm" style={{ color: darkMode ? "rgba(199, 186, 220, 0.6)" : "rgba(255, 255, 255, 0.5)" }}>{soundEnabled ? (t("all_sounds_on") || "All sounds enabled") : (t("all_sounds_off") || "All sounds muted")}</p>
                      </div>
                    </div>
                    <div onClick={(e) => e.stopPropagation()}>
                      <AppToggle enabled={soundEnabled} onToggle={handleToggle} enabledIcon={Volume2} disabledIcon={VolumeX} enabledColor="purple" size="md" variant="minimal" />
                    </div>
                  </div>
                </div>

                {/* Grouped sub-panels for smooth collapse when master off */}
                <AnimatePresence>
                  {soundEnabled && (
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
                    <div className="space-y-3 sm:space-y-4">
                      {/* Game Sounds Section */}
                      <div className="space-y-3">
                        <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider px-1" style={{ color: darkMode ? "rgba(199, 186, 220, 0.5)" : "rgba(255, 255, 255, 0.5)" }}>{t("game_sounds") || "Game Sounds"}</h3>
                        {/* All Games Toggle */}
                        <div className="p-3 sm:p-4 rounded-[14px] sm:rounded-[18px]" style={{ background: darkMode ? "rgba(15, 10, 30, 0.5)" : "rgba(50, 20, 90, 0.2)", border: darkMode ? "1px solid rgba(80, 50, 140, 0.25)" : "1px solid rgba(255, 255, 255, 0.1)" }}>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                              <Gamepad2 className="w-4 h-4" style={{ color: darkMode ? "rgb(168, 140, 255)" : "rgb(250, 204, 21)" }} />
                              <span className="font-medium text-sm" style={{ color: darkMode ? "rgb(220, 200, 255)" : "rgba(255, 255, 255, 0.95)" }}>{t("all_games") || "All Games"}</span>
                            </div>
                            <AppToggle enabled={gamesSoundsEnabled} onToggle={handleToggleAllGames} enabledIcon={Gamepad2} disabledIcon={Gamepad2} enabledColor="purple" size="md" variant="minimal" />
                          </div>
                        </div>
                        {/* Individual Game Toggles */}
                        <div className="space-y-2 pl-2 sm:pl-3 mt-2">
                          {/* Flashcards */}
                          <div className="p-2.5 sm:p-3 rounded-[12px] sm:rounded-[14px]" style={{ background: darkMode ? "rgba(10, 5, 25, 0.4)" : "rgba(40, 15, 80, 0.15)", border: darkMode ? "1px solid rgba(70, 40, 130, 0.2)" : "1px solid rgba(255, 255, 255, 0.08)" }}>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Zap className="w-3.5 h-3.5" style={{ color: darkMode ? "rgb(147, 197, 253)" : "rgb(59, 130, 246)" }} />
                                <span className="text-xs sm:text-sm" style={{ color: darkMode ? "rgb(210, 190, 240)" : "rgba(255, 255, 255, 0.9)" }}>{t("flashcards") || "Flashcards"}</span>
                              </div>
                              <AppToggle enabled={flashcardsSoundsEnabled} onToggle={() => handleCategoryToggle("flashcardsSoundsEnabled", flashcardsSoundsEnabled, setFlashcardsSoundsEnabled)} enabledIcon={Zap} disabledIcon={Zap} enabledColor="blue" size="md" variant="minimal" />
                            </div>
                          </div>
                          {/* Grammar */}
                          <div className="p-2.5 sm:p-3 rounded-[12px] sm:rounded-[14px]" style={{ background: darkMode ? "rgba(10, 5, 25, 0.4)" : "rgba(40, 15, 80, 0.15)", border: darkMode ? "1px solid rgba(70, 40, 130, 0.2)" : "1px solid rgba(255, 255, 255, 0.08)" }}>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <MessageSquare className="w-3.5 h-3.5" style={{ color: darkMode ? "rgb(134, 239, 172)" : "rgb(34, 197, 94)" }} />
                                <span className="text-xs sm:text-sm" style={{ color: darkMode ? "rgb(210, 190, 240)" : "rgba(255, 255, 255, 0.9)" }}>{t("grammar") || "Grammar"}</span>
                              </div>
                              <AppToggle enabled={grammarSoundsEnabled} onToggle={() => handleCategoryToggle("grammarSoundsEnabled", grammarSoundsEnabled, setGrammarSoundsEnabled)} enabledIcon={MessageSquare} disabledIcon={MessageSquare} enabledColor="green" size="md" variant="minimal" />
                            </div>
                          </div>
                          {/* Word Builder */}
                          <div className="p-2.5 sm:p-3 rounded-[12px] sm:rounded-[14px]" style={{ background: darkMode ? "rgba(10, 5, 25, 0.4)" : "rgba(40, 15, 80, 0.15)", border: darkMode ? "1px solid rgba(70, 40, 130, 0.2)" : "1px solid rgba(255, 255, 255, 0.08)" }}>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <PenTool className="w-3.5 h-3.5" style={{ color: darkMode ? "rgb(251, 146, 60)" : "rgb(249, 115, 22)" }} />
                                <span className="text-xs sm:text-sm" style={{ color: darkMode ? "rgb(210, 190, 240)" : "rgba(255, 255, 255, 0.9)" }}>{t("word_builder") || "Word Builder"}</span>
                              </div>
                              <AppToggle enabled={wordBuilderSoundsEnabled} onToggle={() => handleCategoryToggle("wordBuilderSoundsEnabled", wordBuilderSoundsEnabled, setWordBuilderSoundsEnabled)} enabledIcon={PenTool} disabledIcon={PenTool} enabledColor="orange" size="md" variant="minimal" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* UI Sounds */}
                      <div className="p-3 sm:p-4 rounded-[14px] sm:rounded-[18px]" style={{ background: darkMode ? "rgba(15, 10, 30, 0.5)" : "rgba(50, 20, 90, 0.2)", border: darkMode ? "1px solid rgba(80, 50, 140, 0.25)" : "1px solid rgba(255, 255, 255, 0.1)" }}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <Sparkles className="w-4 h-4" style={{ color: darkMode ? "rgb(251, 191, 36)" : "rgb(250, 204, 21)" }} />
                            <div>
                              <p className="font-medium text-sm" style={{ color: darkMode ? "rgb(220, 200, 255)" : "rgba(255, 255, 255, 0.95)" }}>{t("ui_interactions") || "UI Interactions"}</p>
                              <p className="text-[11px] sm:text-xs" style={{ color: darkMode ? "rgba(199, 186, 220, 0.5)" : "rgba(255, 255, 255, 0.5)" }}>{t("ui_sounds_desc") || "Button taps, navigation"}</p>
                            </div>
                          </div>
                          <AppToggle enabled={uiSoundsEnabled} onToggle={() => handleCategoryToggle("uiSoundsEnabled", uiSoundsEnabled, setUiSoundsEnabled)} enabledIcon={Sparkles} disabledIcon={Sparkles} enabledColor="yellow" size="md" variant="minimal" />
                        </div>
                      </div>

                      {/* Achievement Sounds */}
                      <div className="p-3 sm:p-4 rounded-[14px] sm:rounded-[18px]" style={{ background: darkMode ? "rgba(15, 10, 30, 0.5)" : "rgba(50, 20, 90, 0.2)", border: darkMode ? "1px solid rgba(80, 50, 140, 0.25)" : "1px solid rgba(255, 255, 255, 0.1)" }}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <Award className="w-4 h-4" style={{ color: darkMode ? "rgb(250, 204, 21)" : "rgb(251, 191, 36)" }} />
                            <div>
                              <p className="font-medium text-sm" style={{ color: darkMode ? "rgb(220, 200, 255)" : "rgba(255, 255, 255, 0.95)" }}>{t("achievements") || "Achievements"}</p>
                              <p className="text-[11px] sm:text-xs" style={{ color: darkMode ? "rgba(199, 186, 220, 0.5)" : "rgba(255, 255, 255, 0.5)" }}>{t("achievement_sounds_desc") || "Celebrations, level ups"}</p>
                            </div>
                          </div>
                          <AppToggle enabled={achievementSoundsEnabled} onToggle={() => handleCategoryToggle("achievementSoundsEnabled", achievementSoundsEnabled, setAchievementSoundsEnabled)} enabledIcon={Award} disabledIcon={Award} enabledColor="yellow" size="md" variant="minimal" />
                        </div>
                      </div>

                      {/* Ambient Sounds */}
                      <div className="p-3 sm:p-4 rounded-[14px] sm:rounded-[18px]" style={{ background: darkMode ? "rgba(15, 10, 30, 0.5)" : "rgba(50, 20, 90, 0.2)", border: darkMode ? "1px solid rgba(80, 50, 140, 0.25)" : "1px solid rgba(255, 255, 255, 0.1)" }}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <Music className="w-4 h-4" style={{ color: darkMode ? "rgb(167, 139, 250)" : "rgb(139, 92, 246)" }} />
                            <div>
                              <p className="font-medium text-sm" style={{ color: darkMode ? "rgb(220, 200, 255)" : "rgba(255, 255, 255, 0.95)" }}>{t("ambient_audio") || "Ambient Audio"}</p>
                              <p className="text-[11px] sm:text-xs" style={{ color: darkMode ? "rgba(199, 186, 220, 0.5)" : "rgba(255, 255, 255, 0.5)" }}>{t("ambient_sounds_desc") || "Gentle background music"}</p>
                            </div>
                          </div>
                          <AppToggle enabled={ambientSoundsEnabled} onToggle={() => handleCategoryToggle("ambientSoundsEnabled", ambientSoundsEnabled, setAmbientSoundsEnabled)} enabledIcon={Music} disabledIcon={Music} enabledColor="purple" size="md" variant="minimal" />
                        </div>
                      </div>
                    </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}