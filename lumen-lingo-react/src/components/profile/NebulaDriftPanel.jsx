import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CloudFog, 
  CircleOff, 
  Eye,
  Gauge,
  Timer,
  Droplet,
  Waves,
  Flame,
  Feather,
  Wind,
  Zap as ZapIcon,
  ChevronDown,
  Maximize2,
  X
} from "lucide-react";
import { useDarkMode } from "../theme/DarkModeContext";
import { useLanguage } from "../language/LanguageContext";
import { useTranslations } from "../utils/translations";
import SettingsSlider from "./SettingsSlider";
import AppToggle from "../shared/AppToggle";

import NebulaPreviewCard from "./NebulaPreviewCard";
import useAudioFeedback from "../shared/useAudioFeedback";

// Lightweight local collapse optimized for Nebula panel only
const LocalCollapse = ({ isOpen, children }) => {
  const outerRef = React.useRef(null);
  const contentRef = React.useRef(null);
  const [maxHeight, setMaxHeight] = React.useState(0);

  // Measure content height efficiently
  React.useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const measure = () => setMaxHeight(el.scrollHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Animate height without touching global state/body
  React.useEffect(() => {
    const outer = outerRef.current;
    if (!outer) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      outer.style.maxHeight = isOpen ? `${maxHeight}px` : '0px';
      return;
    }

    outer.style.willChange = 'max-height';
    // Force reflow before transition target for smoothness
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    outer.offsetHeight;
    requestAnimationFrame(() => {
      outer.style.maxHeight = isOpen ? `${maxHeight}px` : '0px';
    });

    const onEnd = () => { outer.style.willChange = 'auto'; };
    outer.addEventListener('transitionend', onEnd, { once: true });
  }, [isOpen, maxHeight]);

  // Keep height in sync while open
  React.useEffect(() => {
    const outer = outerRef.current;
    if (!outer) return;
    if (isOpen) outer.style.maxHeight = `${maxHeight}px`;
  }, [maxHeight, isOpen]);

  return (
    <div
      ref={outerRef}
      style={{
        maxHeight: isOpen ? `${maxHeight}px` : '0px',
        overflow: 'clip',
        transition: 'max-height 320ms cubic-bezier(0.16, 1, 0.3, 1)',
        contain: 'layout paint',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        transform: 'translateZ(0)'
      }}
      aria-hidden={!isOpen}
    >
      <div ref={contentRef} style={{ contain: 'layout paint' }}>
        {children}
      </div>
    </div>
  );
};

const NEBULA_SCENES = [
  {
    id: 'lagoon_nebula',
    name: 'Lagoon Nebula',
    description: 'Ethereal cosmic clouds where newborn stars ignite',
    icon: CloudFog,
    colors: ['#DC6432', '#64DCFF', '#FFB450']
  },
  {
    id: 'celestial_lagoon',
    name: 'Celestial Lagoon',
    description: 'Infinite turquoise ocean of luminous serenity',
    icon: Waves,
    colors: ['#14B4AA', '#1EC8D2', '#C850A0']
  },
  {
    id: 'solar_aurora',
    name: 'Solar Aurora',
    description: 'Golden ribbons dancing across the cosmic void',
    icon: CloudFog,
    colors: ['#823CC8', '#DC3CA0', '#FFB450']
  },
  {
    id: 'spiral_halo',
    name: 'Spiral Halo',
    description: 'A hundred billion stars in cosmic harmony',
    icon: Wind,
    colors: ['#503CB4', '#96B4FF', '#FFFAF0']
  },
  {
    id: 'edge_of_andromeda',
    name: 'Edge of Andromeda',
    description: 'A trillion suns suspended in eternal dance',
    icon: Feather,
    colors: ['#FFDCB4', '#8C64C8', '#FFC88C']
  },
  {
    id: 'starburst_ring',
    name: 'Starburst Ring',
    description: 'Brilliant ring of star formation in radiance',
    icon: ZapIcon,
    colors: ['#DC3CB4', '#5096FF', '#FFFFFF']
  }
];

export default function NebulaDriftPanel() {
  const { darkMode } = useDarkMode();
  const { sourceLanguage } = useLanguage();
  const t = useTranslations(sourceLanguage);
  const { playButtonTap, playSoftClick } = useAudioFeedback();
  const [isExpanded, setIsExpanded] = React.useState(false);

  const [nebulaEnabled, setNebulaEnabled] = React.useState(() => {
    try {
      const saved = localStorage.getItem('nebulaDriftEnabled');
      return saved === 'true';
    } catch {
      return false;
    }
  });

  const [selectedPreset, setSelectedPreset] = React.useState(() => {
    try {
      const saved = localStorage.getItem('nebulaDriftPreset');
      return saved || 'lagoon_nebula';
    } catch {
      return 'lagoon_nebula';
    }
  });

  const [intensity, setIntensity] = React.useState(() => {
    try {
      const saved = localStorage.getItem('nebulaDriftIntensity');
      return saved ? parseFloat(saved) : 1.0;
    } catch {
      return 1.0;
    }
  });

  const [speed, setSpeed] = React.useState(() => {
    try {
      const saved = localStorage.getItem('nebulaDriftSpeed');
      return saved ? parseFloat(saved) : 1.0;
    } catch {
      return 1.0;
    }
  });

  const [previewingPreset, setPreviewingPreset] = React.useState(null);

  const handlePreview = (presetId) => {
    setPreviewingPreset(presetId);
    try {
      localStorage.setItem('nebulaDriftEnabled', 'true');
      localStorage.setItem('nebulaDriftPreset', presetId);
      localStorage.setItem('cosmicPreviewMode', 'true');
      window.dispatchEvent(new Event('animationPreferencesChanged'));
    } catch (error) {
      console.error('Error previewing preset:', error);
    }
  };

  const handleExitPreview = () => {
    setPreviewingPreset(null);
    try {
      localStorage.setItem('nebulaDriftEnabled', String(nebulaEnabled));
      localStorage.setItem('nebulaDriftPreset', selectedPreset);
      localStorage.removeItem('cosmicPreviewMode');
      window.dispatchEvent(new Event('animationPreferencesChanged'));
    } catch (error) {
      console.error('Error exiting preview:', error);
    }
  };

  const handleToggle = () => {
    playButtonTap();
    const newValue = !nebulaEnabled;
    setNebulaEnabled(newValue);
    try {
      localStorage.setItem('nebulaDriftEnabled', String(newValue));
      window.dispatchEvent(new Event('animationPreferencesChanged'));
    } catch (error) {
      console.error('Error saving nebula drift mode:', error);
    }
  };

  const handleIntensityChange = (value) => {
    setIntensity(value);
    try {
      localStorage.setItem('nebulaDriftIntensity', String(value));
      window.dispatchEvent(new Event('animationPreferencesChanged'));
    } catch (error) {
      console.error('Error saving nebula drift intensity:', error);
    }
  };

  const handleSpeedChange = (value) => {
    setSpeed(value);
    try {
      localStorage.setItem('nebulaDriftSpeed', String(value));
      window.dispatchEvent(new Event('animationPreferencesChanged'));
    } catch (error) {
      console.error('Error saving nebula drift speed:', error);
    }
  };

  const handlePresetChange = (presetId) => {
    setSelectedPreset(presetId);
    playSoftClick();
    try {
      localStorage.setItem('nebulaDriftPreset', presetId);
      window.dispatchEvent(new Event('animationPreferencesChanged'));
    } catch (error) {
      console.error('Error saving nebula drift preset:', error);
    }
  };

  React.useEffect(() => {
    const handleStorageChange = () => {
      try {
        const enabled = localStorage.getItem('nebulaDriftEnabled');
        const preset = localStorage.getItem('nebulaDriftPreset');
        const intensityVal = localStorage.getItem('nebulaDriftIntensity');
        const speedVal = localStorage.getItem('nebulaDriftSpeed');
        
        if (enabled !== null) setNebulaEnabled(enabled === 'true');
        if (preset !== null) {
          const legacyMapping = {
            'nebula_01': 'lagoon_nebula',
            'nebula_02': 'celestial_lagoon',
            'nebula_03': 'solar_aurora',
            'galaxy_01': 'spiral_halo',
            'galaxy_02': 'edge_of_andromeda',
            'galaxy_03': 'starburst_ring'
          };
          setSelectedPreset(legacyMapping[preset] || preset);
        }
        if (intensityVal !== null) setIntensity(parseFloat(intensityVal));
        if (speedVal !== null) setSpeed(parseFloat(speedVal));
      } catch (error) {
        console.error('Error reading nebula drift settings:', error);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('animationPreferencesChanged', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('animationPreferencesChanged', handleStorageChange);
    };
  }, []);

  const currentScene = NEBULA_SCENES.find(s => s.id === selectedPreset) || NEBULA_SCENES[0];

  return (
    <>
      {/* Fullscreen preview overlay */}
      <AnimatePresence>
        {previewingPreset && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[9999] flex items-end justify-center pb-8"
            style={{ background: 'rgb(6, 5, 20)' }}
            onClick={handleExitPreview}
          >
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              onClick={(e) => {
                e.stopPropagation();
                handleExitPreview();
              }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full text-white/90 text-sm font-medium relative z-10"
              style={{
                background: 'rgba(20, 10, 40, 0.8)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(139, 92, 246, 0.4)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4), 0 0 30px rgba(139, 92, 246, 0.2)'
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 4px 25px rgba(0, 0, 0, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="w-4 h-4" />
              <span>{t('exit_preview')}</span>
              <span className="text-violet-300/70 text-xs">({NEBULA_SCENES.find(s => s.id === previewingPreset)?.name})</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Panel */}
      <div
        className="rounded-[18px] sm:rounded-[18px] sm:rounded-[24px] transition-all duration-500 border relative overflow-visible"
        style={{
          padding: window.innerWidth < 640 ? '12px 12px 16px' : '28px 28px 40px',
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
          boxShadow: darkMode
            ? 'inset 0 1px 1px rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.03)'
            : '0 25px 50px -12px rgba(0, 0, 0, 0.08)',
          isolation: 'isolate'
        }}
      >
        {/* Ambient glass reflection */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/3 via-transparent to-white/3 pointer-events-none rounded-[18px] sm:rounded-[18px] sm:rounded-[24px]" />
        {!darkMode && (
          <>
            <div className="absolute inset-0 pointer-events-none rounded-[18px] sm:rounded-[18px] sm:rounded-[24px]" style={{ border: '1px solid rgba(255, 255, 255, 0.18)' }} />
            <div className="absolute inset-0 pointer-events-none rounded-[18px] sm:rounded-[18px] sm:rounded-[24px]" style={{ boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.28), inset 0 -3px 10px rgba(255, 255, 255, 0.26)' }} />
            <div className="absolute inset-0 pointer-events-none rounded-[18px] sm:rounded-[18px] sm:rounded-[24px]" style={{ background: 'radial-gradient(900px 320px at 12% 0%, rgba(236, 72, 153, 0.16), transparent 68%), radial-gradient(900px 320px at 88% 100%, rgba(168, 85, 247, 0.14), transparent 68%)' }} />
            <div className="absolute inset-0 pointer-events-none rounded-[18px] sm:rounded-[18px] sm:rounded-[24px]" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.06), transparent)' }} />
          </>
        )}

        <div className="relative z-10">
          {/* Header */}
          <motion.div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => { playSoftClick(); setIsExpanded(!isExpanded); }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-[44px] h-[44px] rounded-2xl flex items-center justify-center relative overflow-hidden"
                style={{
                  background: darkMode 
                    ? nebulaEnabled 
                      ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.35) 0%, rgba(168, 85, 247, 0.35) 100%)' 
                      : 'linear-gradient(135deg, rgba(100, 70, 160, 0.25) 0%, rgba(120, 80, 180, 0.25) 100%)'
                    : 'linear-gradient(135deg, rgba(168, 85, 247, 0.3) 0%, rgba(236, 72, 153, 0.3) 100%)',
                  border: darkMode 
                    ? nebulaEnabled ? '1px solid rgba(168, 85, 247, 0.35)' : '1px solid rgba(100, 70, 160, 0.25)'
                    : '1px solid rgba(255, 255, 255, 0.4)',
                  boxShadow: darkMode && nebulaEnabled
                    ? '0 0 20px rgba(168, 85, 247, 0.15), inset 0 -2px 8px rgba(168, 85, 247, 0.1)'
                    : !darkMode ? '0 0 15px rgba(168, 85, 247, 0.15), inset 0 -2px 6px rgba(168, 85, 247, 0.15)' : undefined
                }}
              >
                <motion.div
                  animate={nebulaEnabled && darkMode ? {
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8]
                  } : {}}
                  transition={{
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <CloudFog
                    className={`w-[22px] h-[22px] ${darkMode ? nebulaEnabled ? 'text-violet-300' : 'text-purple-300/60' : 'text-purple-300'}`}
                    style={darkMode && nebulaEnabled ? { filter: 'drop-shadow(0 0 6px rgba(139, 92, 246, 0.5))' } : !darkMode ? { filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.25))' } : {}}
                  />
                </motion.div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <h2 
                    className="text-[17px] sm:text-[22px] font-bold tracking-tight"
                    style={{
                      color: darkMode ? '#FFFFFF' : 'rgba(255, 255, 255, 1)',
                      textShadow: !darkMode ? '0 2px 8px rgba(0, 0, 0, 0.25)' : undefined
                    }}
                  >
                    {t('nebula_drift')}
                  </h2>
                  <span className={`text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full whitespace-nowrap ${darkMode ? 'bg-violet-500/20 text-violet-300 border border-violet-400/30' : 'bg-purple-200/30 text-white/80 border border-white/20'}`}>
                    {t('dark_mode')}
                  </span>
                </div>
                <p 
                  className="text-[13px] sm:text-[17px]"
                  style={{
                    color: darkMode ? 'rgba(199, 186, 220, 0.7)' : 'rgba(255, 255, 255, 0.6)',
                    marginTop: '4px',
                    textShadow: !darkMode ? '0 1px 4px rgba(0, 0, 0, 0.2)' : undefined
                  }}
                >
                  {darkMode ? t('ethereal_cosmic_nebula') : t('enable_dark_mode_nebula')}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div onClick={(e) => e.stopPropagation()}>
                <AppToggle
                  enabled={nebulaEnabled}
                  onToggle={handleToggle}
                  enabledIcon={CloudFog}
                  disabledIcon={CircleOff}
                  enabledColor="purple"
                  size="md"
                  variant="minimal"
                />
              </div>

              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className={`p-2 rounded-xl ${darkMode ? 'hover:bg-white/10' : 'hover:bg-white/20'}`}
              >
                <ChevronDown 
                  className="w-5 h-5" 
                  style={{ color: darkMode ? 'rgba(199, 186, 220, 0.7)' : 'rgba(255, 255, 255, 0.7)' }}
                />
              </motion.div>
            </div>
          </motion.div>

          <LocalCollapse isOpen={isExpanded}>
            <div className="overflow-hidden" style={{ contain: 'layout paint' }}>
              <div className={`space-y-5 sm:space-y-6 ${!darkMode ? 'pointer-events-none opacity-50' : ''}`}>
                {/* Scene Selector Header */}
                <div className="flex items-center gap-2 mb-4 pt-4">
                  <Eye className={`w-5 h-5 ${darkMode ? 'text-purple-300' : 'text-white'}`} />
                  <span 
                    className="text-sm font-bold"
                    style={{
                      color: darkMode ? 'rgb(243, 232, 255)' : 'rgba(255, 255, 255, 1)',
                      textShadow: !darkMode ? '0 2px 6px rgba(0, 0, 0, 0.25)' : undefined
                    }}
                  >
                    {t('quantum_scene') || 'Cosmic Scene'}
                  </span>
                </div>

                {/* Scene Cards Grid */}
                <div 
                  className="relative rounded-2xl p-2"
                  style={{
                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.10), rgba(168, 85, 247, 0.10))',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)'
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                    {NEBULA_SCENES.map(scene => {
                      const isSelected = selectedPreset === scene.id;
                      const Icon = scene.icon;

                      return (
                        <motion.button
                          key={scene.id}
                          onClick={() => handlePresetChange(scene.id)}
                          disabled={!darkMode}
                          className="group relative overflow-hidden rounded-[18px] sm:rounded-[24px] flex flex-col"
                          style={{
                            background: darkMode ? 'transparent' : 'rgba(255, 255, 255, 0.08)',
                            backdropFilter: darkMode ? 'none' : 'blur(35px)',
                            WebkitBackdropFilter: darkMode ? 'none' : 'blur(35px)',
                            border: isSelected
                              ? `1px solid ${scene.colors[1]}`
                              : darkMode
                                ? '1px solid rgba(168, 85, 247, 0.35)'
                                : '1px solid rgba(255, 255, 255, 0.25)',
                            boxShadow: isSelected
                              ? `inset 0 2px 8px rgba(255, 255, 255, 0.1), inset 0 0 25px rgba(255, 255, 255, 0.08), inset 0 -2px 12px rgba(255, 255, 255, 0.1), 0 0 25px ${scene.colors[1]}50, 0 0 20px rgba(255, 255, 255, 0.15)`
                              : 'inset 0 1px 1px rgba(255, 255, 255, 0.15), inset 0 0 15px rgba(255, 255, 255, 0.03), inset 0 -2px 8px rgba(255, 255, 255, 0.05)',
                            transition: 'border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                          }}
                          whileHover={darkMode ? {
                            y: -4,
                            scale: 1.02,
                            boxShadow: isSelected 
                              ? undefined 
                              : 'inset 0 2px 6px rgba(255, 255, 255, 0.08), inset 0 0 20px rgba(255, 255, 255, 0.05), inset 0 -2px 10px rgba(255, 255, 255, 0.08), 0 0 15px rgba(168, 85, 247, 0.2)'
                          } : {}}
                          whileTap={darkMode ? { scale: 0.98, y: -2 } : {}}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        >
                          {/* Preview Area with Live Nebula */}
                          <div className="relative" style={{ height: '100px' }}>
                            <NebulaPreviewCard presetId={scene.id} />
                            
                            {/* Animated Nebula Waves Overlay */}
                            <motion.div
                              className="absolute inset-0 pointer-events-none"
                              style={{ background: `radial-gradient(ellipse at 30% 40%, ${scene.colors[0]}40 0%, transparent 50%)` }}
                              animate={{ x: [0, 15, 0], y: [0, -10, 0], opacity: [0.3, 0.5, 0.3] }}
                              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.div
                              className="absolute inset-0 pointer-events-none"
                              style={{ background: `radial-gradient(ellipse at 70% 60%, ${scene.colors[2]}40 0%, transparent 50%)` }}
                              animate={{ x: [0, -15, 0], y: [0, 10, 0], opacity: [0.3, 0.5, 0.3] }}
                              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            />

                            {/* Light overlay for depth */}
                            <div
                              className="absolute inset-0 w-full h-full pointer-events-none"
                              style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.12) 100%)', mixBlendMode: 'overlay' }}
                            />

                            {/* Hover shimmer */}
                            <motion.div
                              className="absolute inset-0 w-full h-full pointer-events-none"
                              initial={{ x: '-100%', opacity: 0 }}
                              whileHover={{ x: '100%', opacity: 1 }}
                              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                              style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)' }}
                            />

                            {/* Fullscreen Preview Button */}
                            {darkMode && (
                              <motion.div
                                onClick={(e) => {
                                  e.stopPropagation();
                                  playButtonTap();
                                  handlePreview(scene.id);
                                }}
                                className="absolute top-2 right-2 p-2 rounded-lg z-20 cursor-pointer"
                                style={{
                                  background: 'rgba(0, 0, 0, 0.7)',
                                  backdropFilter: 'blur(12px)',
                                  border: '1px solid rgba(168, 85, 247, 0.4)',
                                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)'
                                }}
                                whileHover={{ scale: 1.1, background: 'rgba(168, 85, 247, 0.7)' }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Maximize2 className="w-4 h-4 text-white" />
                              </motion.div>
                            )}

                            {/* Selected Checkmark */}
                            <AnimatePresence>
                              {isSelected && (
                                <motion.div
                                  initial={{ scale: 0, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  exit={{ scale: 0, opacity: 0 }}
                                  transition={{ type: "spring", stiffness: 600, damping: 25 }}
                                  className="absolute top-2 left-2"
                                  style={{ zIndex: 30 }}
                                >
                                  <motion.div
                                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white shadow-2xl flex items-center justify-center"
                                    animate={{ boxShadow: ['0 4px 16px rgba(0, 0, 0, 0.2)', '0 6px 24px rgba(0, 0, 0, 0.3)', '0 4px 16px rgba(0, 0, 0, 0.2)'] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                  >
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke={scene.colors[1]} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                      <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                  </motion.div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>

                          {/* Scene Name & Description */}
                          <div className="relative w-full flex-1" style={{ background: darkMode ? 'transparent' : 'rgba(255, 255, 255, 0.08)' }}>
                            <div className="relative px-3 pt-2.5 pb-3 sm:pt-3 sm:pb-3.5 text-center">
                              <span className={`text-xs sm:text-sm font-bold block mb-1 ${isSelected ? 'text-white' : darkMode ? 'text-white/60 group-hover:text-white/80' : 'text-white'}`}>
                                {scene.name}
                              </span>
                              <span className={`text-[9px] sm:text-[10px] block leading-snug ${isSelected ? 'text-white/75' : darkMode ? 'text-white/40 group-hover:text-white/55' : 'text-white/85'}`}>
                                {scene.description}
                              </span>
                            </div>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Intensity Control */}
                <SettingsSlider
                  label="Intensity"
                  icon={Gauge}
                  value={intensity}
                  onChange={handleIntensityChange}
                  min={0.3}
                  max={1.5}
                  step={0.1}
                  presets={[
                    { value: 0.5, label: 'Subtle', icon: Droplet },
                    { value: 1.0, label: 'Balanced', icon: Waves },
                    { value: 1.5, label: 'Vivid', icon: Flame }
                  ]}
                  disabled={!darkMode}
                />

                {/* Speed Control */}
                <SettingsSlider
                  label="Drift Speed"
                  icon={Timer}
                  value={speed}
                  onChange={handleSpeedChange}
                  min={0}
                  max={2.0}
                  step={0.1}
                  presets={[
                    { value: 0, label: 'Frozen', icon: CircleOff },
                    { value: 1.0, label: 'Flowing', icon: Wind },
                    { value: 1.5, label: 'Swift', icon: ZapIcon }
                  ]}
                  disabled={!darkMode}
                />

                {/* Info Message */}
                <div 
                  className={`relative rounded-lg sm:rounded-xl p-3 sm:p-4 ${darkMode ? 'bg-purple-500/10 text-purple-300/70' : 'bg-white/12 text-white/85'}`}
                  style={!darkMode ? { backdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.2)' } : {}}
                >
                  <div className="flex items-center justify-center gap-2">
                    <CloudFog className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <p className="text-xs sm:text-sm leading-relaxed text-center italic" style={!darkMode ? { textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)' } : {}}>
                      {darkMode ? t('nebula_clouds_description') : t('enable_dark_mode_nebula')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </LocalCollapse>
        </div>
      </div>
    </>
  );
}