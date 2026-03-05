import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun, Palette, ChevronDown, CloudFog, Orbit, Target } from "lucide-react";
import { useDarkMode } from "../theme/DarkModeContext";
import { useTranslations } from "../utils/translations";
import useAudioFeedback from "../shared/useAudioFeedback";
import { useLanguage } from "../language/LanguageContext";
import BreathingOrbsSettings from "./BreathingOrbsSettings";
import QuantumFlowSettings from "./QuantumFlowSettings";
import NebulaDriftSettings from "./NebulaDriftSettings";

import AppToggle from "../shared/AppToggle";

export default function ThemeSettings() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { sourceLanguage } = useLanguage();
  const t = useTranslations(sourceLanguage);
  const { playSoftClick, playButtonTap } = useAudioFeedback();

  const [isExpanded, setIsExpanded] = React.useState(true);
  const [isToggling, setIsToggling] = React.useState(false);
  const [breathingOrbsEnabled, setBreathingOrbsEnabled] = React.useState(() => {
    try {
      const saved = localStorage.getItem('breathingOrbsEnabled');
      return saved === null ? true : saved === 'true';
    } catch {
      return true;
    }
  });
  const [breathingOrbsIntensity, setBreathingOrbsIntensity] = React.useState(() => {
    try {
      const saved = localStorage.getItem('breathingOrbsIntensity');
      return saved ? parseFloat(saved) : 1.0;
    } catch {
      return 1.0;
    }
  });
  const [breathingOrbsSpeed, setBreathingOrbsSpeed] = React.useState(() => {
    try {
      const saved = localStorage.getItem('breathingOrbsSpeed');
      return saved ? parseFloat(saved) : 1.0;
    } catch {
      return 1.0;
    }
  });
  const [gradientScheme, setGradientScheme] = React.useState(() => {
    try {
      const saved = localStorage.getItem('breathingOrbsGradient');
      return saved || 'default';
    } catch {
      return 'default';
    }
  });
  const [raveMode, setRaveMode] = React.useState(() => {
    try {
      const saved = localStorage.getItem('breathingOrbsRaveMode');
      return saved === 'true';
    } catch {
      return false;
    }
  });
  const [darkSettingsExpanded, setDarkSettingsExpanded] = React.useState(false); // unused on mobile collapse removed

  // Desktop detection for tabbed UI (sm breakpoint ~640px)
  const [isDesktop, setIsDesktop] = React.useState(() => (typeof window !== 'undefined' ? window.innerWidth >= 640 : false));
  React.useEffect(() => {
    const handler = () => setIsDesktop(window.innerWidth >= 640);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  // Appearance tabs: theme, orbs, quantum, nebula
  const [activeTab, setActiveTab] = React.useState('theme');
  const prevTabRef = React.useRef('theme');
  const [swipeDir, setSwipeDir] = React.useState(1); // 1 -> forward/right, -1 -> left
  React.useEffect(() => {
    const order = ['theme', 'orbs', 'quantum', 'nebula'];
    const prevIdx = order.indexOf(prevTabRef.current);
    const curIdx = order.indexOf(activeTab);
    setSwipeDir(curIdx >= prevIdx ? 1 : -1);
    prevTabRef.current = activeTab;
  }, [activeTab]);

  const handleDarkModeToggle = async () => {
    playButtonTap();
    setIsToggling(true);
    await toggleDarkMode();
    setTimeout(() => setIsToggling(false), 600);
  };

  const handleToggleAnimation = () => {
    const newValue = !breathingOrbsEnabled;
    setBreathingOrbsEnabled(newValue);
    try {
      localStorage.setItem('breathingOrbsEnabled', newValue.toString());
      window.dispatchEvent(new Event('animationPreferencesChanged'));
    } catch (error) {
      // console.error('Error saving animation preference:', error);
    }
  };

  const handleIntensityChange = (newIntensity) => {
    setBreathingOrbsIntensity(newIntensity);
    try {
      localStorage.setItem('breathingOrbsIntensity', newIntensity.toString());
      window.dispatchEvent(new Event('animationPreferencesChanged'));
    } catch (error) {
      // console.error('Error saving animation intensity:', error);
    }
  };

  const handleSpeedChange = (newSpeed) => {
    setBreathingOrbsSpeed(newSpeed);
    try {
      localStorage.setItem('breathingOrbsSpeed', newSpeed.toString());
      window.dispatchEvent(new Event('animationPreferencesChanged'));
    } catch (error) {
      // console.error('Error saving animation speed:', error);
    }
  };

  const handleGradientChange = (scheme) => {
    setGradientScheme(scheme);
    try {
      localStorage.setItem('breathingOrbsGradient', scheme);
      window.dispatchEvent(new Event('animationPreferencesChanged'));
    } catch (error) {
      // console.error('Error saving gradient scheme:', error);
    }
  };

  const handleRaveModeToggle = () => {
    const newValue = !raveMode;
    setRaveMode(newValue);
    try {
      localStorage.setItem('breathingOrbsRaveMode', newValue.toString());
      window.dispatchEvent(new Event('animationPreferencesChanged'));
    } catch (error) {
      // console.error('Error saving rave mode:', error);
    }
  };

  // Listen for storage changes from download/upload
  React.useEffect(() => {
    const handleStorageChange = () => {
      try {
        const enabled = localStorage.getItem('breathingOrbsEnabled');
        const intensity = localStorage.getItem('breathingOrbsIntensity');
        const speed = localStorage.getItem('breathingOrbsSpeed');
        const gradient = localStorage.getItem('breathingOrbsGradient');
        const rave = localStorage.getItem('breathingOrbsRaveMode');
        
        if (enabled !== null) setBreathingOrbsEnabled(enabled === 'true');
        if (intensity !== null) setBreathingOrbsIntensity(parseFloat(intensity));
        if (speed !== null) setBreathingOrbsSpeed(parseFloat(speed));
        if (gradient !== null) setGradientScheme(gradient);
        if (rave !== null) setRaveMode(rave === 'true');
      } catch (error) {
        // Silent fail
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('animationPreferencesChanged', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('animationPreferencesChanged', handleStorageChange);
    };
  }, []);

  return (
    <div className="">
      {/* Sub-panel with premium glass material */}
      <div
        className="rounded-[18px] sm:rounded-[18px] sm:rounded-[24px] transition-all duration-500 border relative overflow-visible"
        style={{
                        padding: window.innerWidth < 640 ? '12px 12px 6px' : '28px 28px 16px',
                        // Performance hints
                        contain: 'layout paint style',
                        willChange: 'opacity, transform',
                        transform: 'translateZ(0)',
          background: darkMode 
                            ? 'rgba(25, 18, 45, 0.6)'
                            : 'rgba(120, 60, 160, 0.25)',
          border: darkMode 
            ? '1px solid rgba(100, 70, 160, 0.3)' 
            : '1px solid rgba(255, 255, 255, 0.18)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          isolation: 'isolate',
          contain: 'layout paint style',
          willChange: 'opacity, transform',
          transform: 'translateZ(0)'
          }}
      >
        {/* Ambient glass reflection */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/3 via-transparent to-white/3 pointer-events-none rounded-[18px] sm:rounded-[18px] sm:rounded-[24px]" />
        {!darkMode && (
          <div
            className="absolute inset-0 pointer-events-none rounded-[18px] sm:rounded-[18px] sm:rounded-[24px]"
            style={{ border: '1px solid rgba(255, 255, 255, 0.18)' }}
          />
        )}
        {!darkMode && (
          <div
            className="absolute inset-0 pointer-events-none rounded-[18px] sm:rounded-[18px] sm:rounded-[24px]"
            style={{ boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.28), inset 0 -3px 10px rgba(255, 255, 255, 0.26)' }}
          />
        )}
        {!darkMode && (
          <div
            className="absolute inset-0 pointer-events-none rounded-[18px] sm:rounded-[18px] sm:rounded-[24px]"
            style={{
                              background: 'radial-gradient(900px 320px at 12% 0%, rgba(236, 72, 153, 0.16), transparent 68%), radial-gradient(900px 320px at 88% 100%, rgba(168, 85, 247, 0.14), transparent 68%)'
                            }}
          />
        )}
        {!darkMode && (
          <div
            className="absolute inset-0 pointer-events-none rounded-[18px] sm:rounded-[18px] sm:rounded-[24px]"
            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.06), transparent)' }}
          />
        )}
        <div className="relative z-10">
          {/* Header with Icon */}
          <motion.div 
           className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-[44px] h-[44px] rounded-2xl flex items-center justify-center relative overflow-hidden"
                style={{
                  background: darkMode 
                    ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.35) 0%, rgba(139, 92, 246, 0.35) 100%)' 
                    : 'linear-gradient(135deg, rgba(251, 146, 60, 0.3) 0%, rgba(251, 191, 36, 0.3) 100%)',
                  backdropFilter: 'none',
                  WebkitBackdropFilter: 'none',
                  border: darkMode ? '1px solid rgba(168, 85, 247, 0.35)' : '1px solid rgba(251, 191, 36, 0.4)',
                  boxShadow: darkMode
                    ? '0 0 20px rgba(168, 85, 247, 0.15), inset 0 -2px 8px rgba(168, 85, 247, 0.1)'
                    : '0 0 15px rgba(251, 191, 36, 0.15), inset 0 -2px 6px rgba(251, 191, 36, 0.15)'
                }}
              >
                <AnimatePresence mode="wait">
                  {darkMode ? (
                    <motion.div 
                      key="moon"
                      initial={{ scale: 0, rotate: -180, filter: 'blur(8px)' }}
                      animate={{ scale: 1, rotate: 0, filter: 'blur(0px)' }}
                      exit={{ scale: 0, rotate: 180, filter: 'blur(8px)' }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Moon className="w-[22px] h-[22px]" style={{ color: '#C9B7FF' }} />
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="sun"
                      initial={{ scale: 0, rotate: 180, filter: 'blur(8px)' }}
                      animate={{ scale: 1, rotate: 0, filter: 'blur(0px)' }}
                      exit={{ scale: 0, rotate: -180, filter: 'blur(8px)' }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Sun className="w-[22px] h-[22px] text-yellow-400" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <h2 
                  className="text-[17px] sm:text-[22px] font-bold tracking-tight"
                  style={{
                    color: darkMode ? '#FFFFFF' : 'rgba(255, 255, 255, 1)',
                    transition: 'color 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
                  }}
                >{t('appearance')}</h2>
                <AnimatePresence mode="wait">
                  <motion.p 
                    key={darkMode ? 'switch-light' : 'switch-dark'}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
                    className="text-[13px] sm:text-[17px]"
                    style={{
                      color: darkMode ? 'rgba(199, 186, 220, 0.7)' : 'rgba(255, 255, 255, 0.6)',
                      marginTop: '4px'
                    }}
                  >
                    {darkMode ? t('switch_to_light') : t('switch_to_dark')}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>


          </motion.div>

          {isDesktop && (
            <div className="mt-4">
              <div className="inline-flex rounded-xl overflow-hidden border"
                   style={{ borderColor: darkMode ? 'rgba(120, 90, 180, 0.3)' : 'rgba(255,255,255,0.2)', background: darkMode ? 'rgba(20,14,38,0.6)' : 'rgba(255,255,255,0.15)' }}>
                {[
                  { id: 'theme', label: 'Dark/Light Mode', Icon: Palette },
                  { id: 'orbs', label: t('breathing_orbs'), Icon: Target },
                  { id: 'quantum', label: t('quantum_flow'), Icon: Orbit },
                  { id: 'nebula', label: t('nebula_drift'), Icon: CloudFog },
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      const order = ['theme', 'orbs', 'quantum', 'nebula'];
                      const prevIdx = order.indexOf(activeTab);
                      const nextIdx = order.indexOf(tab.id);
                      setSwipeDir(nextIdx >= prevIdx ? 1 : -1);
                      prevTabRef.current = activeTab;
                      setActiveTab(tab.id);
                    }}
                    className="px-3 sm:px-4 py-2 sm:py-2.5 flex items-center gap-2 text-xs sm:text-sm font-medium transition-colors"
                    style={{
                      color: activeTab === tab.id ? (darkMode ? '#E9D5FF' : 'white') : (darkMode ? 'rgba(216,180,254,0.7)' : 'rgba(255,255,255,0.85)'),
                      background: activeTab === tab.id ? (darkMode ? 'rgba(120,90,180,0.25)' : 'rgba(255,255,255,0.15)') : 'transparent',
                      borderRight: '1px solid ' + (darkMode ? 'rgba(120,90,180,0.25)' : 'rgba(255,255,255,0.2)')
                    }}
                  >
                    <tab.Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>

              <div className="mt-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, filter: 'blur(10px)', x: swipeDir > 0 ? 20 : -20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
                    exit={{ opacity: 0, filter: 'blur(8px)', x: swipeDir > 0 ? -15 : 15 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    style={{ willChange: 'opacity, filter, transform', position: 'relative', overflow: 'hidden' }}
                  >
                    <AnimatePresence initial={false}>
                      <motion.div
                        key={activeTab + '-swipe'}
                        initial={{ left: swipeDir > 0 ? '-30%' : '130%', opacity: 0 }}
                        animate={{ left: swipeDir > 0 ? '130%' : '-30%', opacity: [0, 0.35, 0] }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                          position: 'absolute',
                          top: 0,
                          bottom: 0,
                          width: '34%',
                          pointerEvents: 'none',
                          borderRadius: 'inherit',
                          background: 'linear-gradient(90deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.0) 100%)',
                          backdropFilter: 'blur(10px) saturate(120%)',
                          WebkitBackdropFilter: 'blur(10px) saturate(120%)',
                          mixBlendMode: 'screen'
                        }}
                      />
                    </AnimatePresence>
                    {activeTab === 'theme' && (
                      <div 
                        className="rounded-[18px] sm:rounded-[24px] transition-all duration-700 relative overflow-hidden mb-2 sm:mb-4 mt-4 sm:mt-6"
                        style={{
                          padding: window.innerWidth < 640 ? '10px' : '28px',
                          background: darkMode 
                            ? 'rgba(20, 14, 38, 0.7)' 
                            : 'rgba(120, 60, 160, 0.25)',
                          border: darkMode 
                            ? '1px solid rgba(90, 60, 150, 0.35)' 
                            : '1px solid rgba(255, 255, 255, 0.18)',
                          backdropFilter: 'blur(24px)',
                          WebkitBackdropFilter: 'blur(24px)',
                          isolation: 'isolate'
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-b from-white/3 via-transparent to-white/3 pointer-events-none rounded-[18px] sm:rounded-[24px]" />
                        <div className="relative z-10">
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                              <motion.div
                                animate={darkMode ? {
                                  scale: [1, 1.1, 1],
                                } : {
                                  rotate: [0, 15, -15, 0]
                                }}
                                transition={{
                                  duration: 4,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                                className="flex-shrink-0"
                              >
                                <Palette 
                                  className="w-4 h-4 sm:w-6 sm:h-6"
                                  style={{
                                    color: darkMode ? 'rgb(216, 180, 254)' : 'white',
                                  }}
                                />
                              </motion.div>
                              <div className="min-w-0">
                                <p 
                                  className="font-bold text-[14px] sm:text-xl leading-tight"
                                  style={{
                                    color: darkMode ? 'rgb(233, 213, 255)' : 'rgba(255, 255, 255, 1)'
                                  }}
                                >
                                  {darkMode ? t('dark_mode') : t('light_mode')}
                                </p>
                                <p 
                                  className="text-[10px] sm:text-sm leading-tight hidden sm:block"
                                  style={{
                                    color: darkMode ? 'rgba(216, 180, 254, 0.7)' : 'rgba(255, 255, 255, 0.9)'
                                  }}
                                >
                                  {darkMode ? t('peaceful_dark_theme') : 'Vibrant light theme'}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 shrink-0">
                              <AppToggle
                                enabled={darkMode}
                                onToggle={handleDarkModeToggle}
                                enabledIcon={Moon}
                                disabledIcon={Sun}
                                enabledColor="purple"
                                size="md" variant="minimal"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'orbs' && (
                      <div className="mt-2 sm:mt-4">
                        <BreathingOrbsSettings
                          breathingOrbsEnabled={breathingOrbsEnabled}
                          breathingOrbsIntensity={breathingOrbsIntensity}
                          breathingOrbsSpeed={breathingOrbsSpeed}
                          gradientScheme={gradientScheme}
                          raveMode={raveMode}
                          onToggleAnimation={handleToggleAnimation}
                          onIntensityChange={handleIntensityChange}
                          onSpeedChange={handleSpeedChange}
                          onGradientChange={handleGradientChange}
                          onRaveModeToggle={handleRaveModeToggle}
                        />
                      </div>
                    )}

                    {activeTab === 'quantum' && (
                      <div className="mt-2 sm:mt-4">
                        <QuantumFlowSettings />
                      </div>
                    )}

                    {activeTab === 'nebula' && (
                      <div className="mt-2 sm:mt-4">
                        <NebulaDriftSettings />
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          )}

          {!isDesktop && (
          <div
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
            className="overflow-visible"
          >
          {/* Dark Mode Toggle Card - Inner Sub-panel (migrated under tabs on mobile) */}
          <div className="hidden"
            style={{
              padding: window.innerWidth < 640 ? '10px' : '28px',
              background: darkMode 
                ? 'rgba(20, 14, 38, 0.7)' 
                : 'rgba(120, 60, 160, 0.25)',
              border: darkMode 
                ? '1px solid rgba(90, 60, 150, 0.35)' 
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
                style={{ boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.28), inset 0 -3px 10px rgba(255, 255, 255, 0.26)' }}
              />
            )}
            {!darkMode && (
              <div
                className="absolute inset-0 pointer-events-none rounded-[18px] sm:rounded-[24px]"
                style={{
                  background: 'radial-gradient(900px 320px at 12% 0%, rgba(236, 72, 153, 0.16), transparent 68%), radial-gradient(900px 320px at 88% 100%, rgba(168, 85, 247, 0.14), transparent 68%)'
                }}
              />
            )}
            {!darkMode && (
              <div
                className="absolute inset-0 pointer-events-none rounded-[18px] sm:rounded-[24px]"
                style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.06), transparent)' }}
              />
            )}
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                  <motion.div
                    animate={darkMode ? {
                      scale: [1, 1.1, 1],
                    } : {
                      rotate: [0, 15, -15, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="flex-shrink-0"
                  >
                    <Palette 
                      className="w-4 h-4 sm:w-6 sm:h-6"
                      style={{
                        color: darkMode ? 'rgb(216, 180, 254)' : 'white',
                        filter: !darkMode ? 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.25))' : undefined
                      }}
                    />
                  </motion.div>
                  <div className="min-w-0">
                    <AnimatePresence mode="wait">
                      <motion.p 
                        key={darkMode ? 'dark' : 'light'}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="font-bold text-[14px] sm:text-xl leading-tight"
                        style={{
                          color: darkMode ? 'rgb(233, 213, 255)' : 'rgba(255, 255, 255, 1)',
                          textShadow: !darkMode ? '0 2px 8px rgba(0, 0, 0, 0.25)' : undefined,
                          transition: 'color 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
                        }}
                      >
                        {darkMode ? t('dark_mode') : t('light_mode')}
                      </motion.p>
                    </AnimatePresence>
                    <p 
                      className="text-[10px] sm:text-sm leading-tight hidden sm:block"
                      style={{
                        color: darkMode ? 'rgba(216, 180, 254, 0.7)' : 'rgba(255, 255, 255, 0.9)',
                        textShadow: !darkMode ? '0 1px 4px rgba(0, 0, 0, 0.2)' : undefined,
                        transition: 'color 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
                      }}
                    >
                      {darkMode ? t('peaceful_dark_theme') : 'Vibrant light theme'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <AppToggle
                    enabled={darkMode}
                    onToggle={handleDarkModeToggle}
                    enabledIcon={Moon}
                    disabledIcon={Sun}
                    enabledColor="purple"
                    size="md" variant="minimal"
                  />
                </div>
              </div>

              <AnimatePresence>
                {darkSettingsExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, height: 'auto', filter: 'blur(0px)' }}
                    exit={{ opacity: 0, height: 0, filter: 'blur(4px)' }}
                    transition={{
                      height: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                      opacity: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                      filter: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                    }}
                    className="hidden"
                  >
                    <div
                      className={`relative p-3 rounded-xl transition-all duration-300 cursor-pointer ${
                        !darkMode
                          ? 'border-amber-300/60'
                          : 'opacity-70 hover:opacity-100'
                      }`}
                      style={{
                        background: !darkMode 
                                                        ? 'rgba(255, 255, 255, 0.26)' 
                                                        : 'rgba(15, 10, 30, 0.6)',
                        backdropFilter: 'none',
                        WebkitBackdropFilter: 'none',
                        border: !darkMode 
                                                        ? '1px solid rgba(251, 191, 36, 0.85)' 
                                                        : '1px solid rgba(80, 50, 130, 0.4)',
                        boxShadow: !darkMode
                                                        ? '0 25px 50px -12px rgba(0, 0, 0, 0.16), 0 12px 24px -8px rgba(0, 0, 0, 0.12), 0 0 26px rgba(251, 191, 36, 0.34), inset 0 -2px 10px rgba(255, 255, 255, 0.32)'
                                                        : 'inset 0 1px 0 rgba(120, 80, 180, 0.1)'
                      }}
                      onClick={() => !darkMode ? null : handleDarkModeToggle()}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Sun className={`w-4 h-4 ${!darkMode ? 'text-amber-500' : 'text-purple-300/60'}`} />
                        <span className={`text-xs font-bold ${!darkMode ? 'text-white light-mode-text' : 'text-purple-200/60'}`}>{t('light')}</span>
                      </div>
                      <div className="space-y-1">
                        <div className={`h-2 rounded w-full ${!darkMode ? 'bg-amber-300/60' : 'bg-purple-500/30'}`} />
                        <div className={`h-2 rounded w-3/4 ${!darkMode ? 'bg-orange-300/60' : 'bg-purple-400/25'}`} />
                      </div>
                    </div>

                    <div
                      className={`relative p-3 rounded-xl transition-all duration-300 cursor-pointer ${
                        darkMode
                          ? ''
                          : 'opacity-60 hover:opacity-100'
                      }`}
                      style={{
                        background: darkMode 
                          ? 'rgba(15, 10, 30, 0.6)' 
                          : 'rgba(0, 0, 0, 0.24)',
                        backdropFilter: 'none',
                        WebkitBackdropFilter: 'none',
                        border: darkMode 
                          ? '1px solid rgba(130, 90, 200, 0.5)' 
                          : '1px solid rgba(255, 255, 255, 0.15)',
                        boxShadow: darkMode
                          ? 'inset 0 1px 0 rgba(160, 120, 220, 0.15), 0 0 20px rgba(130, 90, 200, 0.15)'
                          : '0 25px 50px -12px rgba(0, 0, 0, 0.08), 0 12px 24px -8px rgba(0, 0, 0, 0.05), inset 0 -2px 6px rgba(255, 255, 255, 0.15)'
                      }}
                      onClick={() => darkMode ? null : handleDarkModeToggle()}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Moon className={`w-4 h-4 ${darkMode ? 'text-purple-300' : 'text-purple-400/70'}`} />
                        <span className={`text-xs font-bold ${darkMode ? 'text-purple-200' : 'text-white/60 light-mode-text'}`}>{t('dark')}</span>
                      </div>
                      <div className="space-y-1">
                        <div className={`h-2 rounded w-full ${darkMode ? 'bg-purple-500/60' : 'bg-purple-400/30'}`} />
                        <div className={`h-2 rounded w-3/4 ${darkMode ? 'bg-violet-400/50' : 'bg-fuchsia-400/30'}`} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>



          {/* Mobile Appearance Tabs */}
          <div className="mt-3">
            <div
              className="flex w-full rounded-xl overflow-hidden border whitespace-nowrap overflow-x-auto no-scrollbar"
              style={{ borderColor: darkMode ? 'rgba(120, 90, 180, 0.3)' : 'rgba(255,255,255,0.2)', background: darkMode ? 'rgba(20,14,38,0.6)' : 'rgba(255,255,255,0.15)' }}
            >
              {[
                { id: 'theme', label: 'Dark/Light Mode', Icon: Palette },
                { id: 'orbs', label: t('breathing_orbs'), Icon: Target },
                { id: 'quantum', label: t('quantum_flow'), Icon: Orbit },
                { id: 'nebula', label: t('nebula_drift'), Icon: CloudFog },
              ].map((tab, idx, arr) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="px-2.5 py-1.5 min-w-[44px] shrink-0 flex items-center justify-center gap-1 text-[11px] leading-none font-medium transition-colors"
                  style={{
                    color: activeTab === tab.id ? (darkMode ? '#E9D5FF' : 'white') : (darkMode ? 'rgba(216,180,254,0.7)' : 'rgba(255,255,255,0.85)'),
                    background: activeTab === tab.id ? (darkMode ? 'rgba(120,90,180,0.25)' : 'rgba(255,255,255,0.15)') : 'transparent',
                    borderRight: idx < arr.length - 1 ? '1px solid ' + (darkMode ? 'rgba(120,90,180,0.25)' : 'rgba(255,255,255,0.2)') : 'none'
                  }}
                  title={typeof tab.label === 'string' ? tab.label : ''}
                >
                  <tab.Icon className="w-5 h-5" />
                  <span className="sr-only">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Theme (Dark/Light) Panel */}
          {activeTab === 'theme' && (
            <div 
              className="rounded-[18px] sm:rounded-[24px] transition-all duration-700 relative overflow-hidden mb-2 sm:mb-4 mt-3"
              style={{
                padding: window.innerWidth < 640 ? '10px' : '28px',
                background: darkMode 
                  ? 'rgba(20, 14, 38, 0.7)' 
                  : 'rgba(120, 60, 160, 0.25)',
                border: darkMode 
                  ? '1px solid rgba(90, 60, 150, 0.35)' 
                  : '1px solid rgba(255, 255, 255, 0.18)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                isolation: 'isolate'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/3 via-transparent to-white/3 pointer-events-none rounded-[18px] sm:rounded-[24px]" />
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                    <motion.div
                      animate={darkMode ? { scale: [1, 1.1, 1] } : { rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="flex-shrink-0"
                    >
                      <Palette className="w-4 h-4 sm:w-6 sm:h-6" style={{ color: darkMode ? 'rgb(216, 180, 254)' : 'white' }} />
                    </motion.div>
                    <div className="min-w-0">
                      <p className="font-bold text-[14px] sm:text-xl leading-tight" style={{ color: darkMode ? 'rgb(233, 213, 255)' : 'rgba(255, 255, 255, 1)' }}>
                        {darkMode ? t('dark_mode') : t('light_mode')}
                      </p>
                      <p className="text-[10px] sm:text-sm leading-tight hidden sm:block" style={{ color: darkMode ? 'rgba(216, 180, 254, 0.7)' : 'rgba(255, 255, 255, 0.9)' }}>
                        {darkMode ? t('peaceful_dark_theme') : 'Vibrant light theme'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <AppToggle enabled={darkMode} onToggle={handleDarkModeToggle} enabledIcon={Moon} disabledIcon={Sun} enabledColor="purple" size="md" variant="minimal" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Orbs */}
          {activeTab === 'orbs' && (
            <div className="mt-2 sm:mt-4">
              <BreathingOrbsSettings
                breathingOrbsEnabled={breathingOrbsEnabled}
                breathingOrbsIntensity={breathingOrbsIntensity}
                breathingOrbsSpeed={breathingOrbsSpeed}
                gradientScheme={gradientScheme}
                raveMode={raveMode}
                onToggleAnimation={handleToggleAnimation}
                onIntensityChange={handleIntensityChange}
                onSpeedChange={handleSpeedChange}
                onGradientChange={handleGradientChange}
                onRaveModeToggle={handleRaveModeToggle}
              />
            </div>
          )}

          {/* Quantum Flow */}
          {activeTab === 'quantum' && (
            <div className="mt-2 sm:mt-4">
              <QuantumFlowSettings />
            </div>
          )}

          {/* Nebula Drift */}
          {activeTab === 'nebula' && (
            <div className="mt-2 sm:mt-4">
              <NebulaDriftSettings />
            </div>
          )}
          </div>
          )}
          </div>
          </div>
          </div>
          );
          }