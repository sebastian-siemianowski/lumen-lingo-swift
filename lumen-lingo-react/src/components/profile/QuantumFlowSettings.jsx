import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Orbit, 
  CircleOff, 
  Eye,
  Zap as ZapIcon,
  Wind,
  Droplet,
  Waves,
  Flame,
  Feather,
  Gauge,
  Timer,
  ChevronDown
} from "lucide-react";
import { useDarkMode } from "../theme/DarkModeContext";
import { useLanguage } from "../language/LanguageContext";
import { useTranslations } from "../utils/translations";
import useAudioFeedback from "../shared/useAudioFeedback";
import SchemeCard from "./SchemeCard";
import SettingsSlider from "./SettingsSlider";
import AppToggle from "../shared/AppToggle";
import Collapse from "../shared/Collapse";

export default function QuantumFlowSettings() {
  const { darkMode } = useDarkMode();
  const { sourceLanguage } = useLanguage();
  const t = useTranslations(sourceLanguage);
  const { playSoftClick } = useAudioFeedback();
  const [isExpanded, setIsExpanded] = React.useState(() => (typeof window !== 'undefined' ? window.innerWidth >= 640 : false));
  const [isDesktop, setIsDesktop] = React.useState(() => (typeof window !== 'undefined' ? window.innerWidth >= 640 : false));
  React.useEffect(() => {
    const handler = () => setIsDesktop(window.innerWidth >= 640);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const [quantumEnabled, setQuantumEnabled] = React.useState(() => {
    try {
      const saved = localStorage.getItem('quantumFlowEnabled');
      return saved === 'true';
    } catch {
      return false;
    }
  });

  const [selectedScheme, setSelectedScheme] = React.useState(() => {
    try {
      const saved = localStorage.getItem('quantumFlowScheme');
      return saved || 'dubai';
    } catch {
      return 'dubai';
    }
  });

  const [intensity, setIntensity] = React.useState(() => {
    try {
      const saved = localStorage.getItem('quantumFlowIntensity');
      return saved ? parseFloat(saved) : 1.0;
    } catch {
      return 1.0;
    }
  });

  const [speed, setSpeed] = React.useState(() => {
    try {
      const saved = localStorage.getItem('quantumFlowSpeed');
      return saved ? parseFloat(saved) : 1.0;
    } catch {
      return 1.0;
    }
  });

  const handleToggle = () => {
    const newValue = !quantumEnabled;
    setQuantumEnabled(newValue);
    try {
      localStorage.setItem('quantumFlowEnabled', String(newValue));
      window.dispatchEvent(new Event('animationPreferencesChanged'));
    } catch (error) {
      console.error('Error saving quantum flow mode:', error);
    }
  };

  const handleSchemeChange = (schemeId) => {
    setSelectedScheme(schemeId);
    try {
      localStorage.setItem('quantumFlowScheme', schemeId);
      window.dispatchEvent(new Event('animationPreferencesChanged'));
    } catch (error) {
      console.error('Error saving quantum flow scheme:', error);
    }
  };

  const handleIntensityChange = (value) => {
    setIntensity(value);
    try {
      localStorage.setItem('quantumFlowIntensity', String(value));
      window.dispatchEvent(new Event('animationPreferencesChanged'));
    } catch (error) {
      console.error('Error saving quantum flow intensity:', error);
    }
  };

  const handleSpeedChange = (value) => {
    setSpeed(value);
    try {
      localStorage.setItem('quantumFlowSpeed', String(value));
      window.dispatchEvent(new Event('animationPreferencesChanged'));
    } catch (error) {
      console.error('Error saving quantum flow speed:', error);
    }
  };

  // Listen for external changes (e.g., from cloud sync)
  React.useEffect(() => {
    const handleStorageChange = () => {
      try {
        const enabled = localStorage.getItem('quantumFlowEnabled');
        const scheme = localStorage.getItem('quantumFlowScheme');
        const intensityVal = localStorage.getItem('quantumFlowIntensity');
        const speedVal = localStorage.getItem('quantumFlowSpeed');
        
        if (enabled !== null) {
          setQuantumEnabled(enabled === 'true');
        }
        if (scheme !== null) {
          setSelectedScheme(scheme);
        }
        if (intensityVal !== null) {
          setIntensity(parseFloat(intensityVal));
        }
        if (speedVal !== null) {
          setSpeed(parseFloat(speedVal));
        }
      } catch (error) {
        console.error('Error reading quantum flow settings:', error);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('animationPreferencesChanged', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('animationPreferencesChanged', handleStorageChange);
    };
  }, []);

  const quantumSchemes = [
    {
      id: 'dubai',
      name: 'Dubai Celestial Mirage',
      description: 'Desert stars kiss glass towers, where golden sands meet infinite azure dreams',
      colors: ['#F59E0B', '#06B6D4', '#8B5CF6']
    },
    {
      id: 'kyoto',
      name: 'Kyoto Sacred Twilight',
      description: 'Temple bells echo through silk mist, bamboo forests breathe ancient wisdom\'s gentle kiss',
      colors: ['#8B5CF6', '#EC4899', '#14B8A6']
    },
    {
      id: 'buenos_aires',
      name: 'Buenos Aires Tango Flame',
      description: 'Passion ignites cobblestone nights, souls entwine where music paints eternal light',
      colors: ['#EC4899', '#F59E0B', '#8B5CF6']
    },
    {
      id: 'hong_kong',
      name: 'Hong Kong Harbour Dreams',
      description: 'Victoria Peak kisses crimson dawn, where East meets West in a symphony reborn',
      colors: ['#EC4899', '#06B6D4', '#8B5CF6']
    },
    {
      id: 'marrakech',
      name: 'Marrakech Spice Reverie',
      description: 'Lanterns float through jasmine air, silk bazaars shimmer with treasures beyond compare',
      colors: ['#FB923C', '#EC4899', '#8B5CF6']
    },
    {
      id: 'vienna',
      name: 'Vienna Imperial Waltz',
      description: 'Symphony cascades through palace halls, where elegance and wonder eternally enthralls',
      colors: ['#C026D3', '#8B5CF6', '#60A5FA']
    }
  ];

  return (
    <div 
      className="rounded-[18px] sm:rounded-[24px] transition-all duration-700 relative overflow-hidden"
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
      <div className="relative z-10" style={{ isolation: 'isolate' }}>
        <motion.div
          className="flex items-center justify-between gap-3"
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
            <motion.div
              animate={quantumEnabled ? {
                scale: [1, 1.1, 1],
                rotate: [0, 360]
              } : {}}
              transition={{
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 8, repeat: Infinity, ease: "linear" }
              }}
              className="flex-shrink-0"
            >
              <Orbit
                className={`w-4 h-4 sm:w-6 sm:h-6 ${darkMode ? 'text-purple-300' : 'text-white'}`}
                style={!darkMode ? {
                  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.25))'
                } : {}}
              />
            </motion.div>

            <div className="min-w-0">
              <p 
                className="font-bold text-[14px] sm:text-xl leading-tight"
                style={{
                  color: darkMode ? 'rgb(233, 213, 255)' : 'rgba(255, 255, 255, 1)',
                  textShadow: !darkMode ? '0 2px 8px rgba(0, 0, 0, 0.25)' : undefined,
                  transition: 'color 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
                }}
              >
                {t('quantum_flow')}
              </p>
              <p 
                className="text-[10px] sm:text-sm leading-tight hidden sm:block"
                style={{
                  color: darkMode ? 'rgba(216, 180, 254, 0.7)' : 'rgba(255, 255, 255, 0.9)',
                  textShadow: !darkMode ? '0 1px 4px rgba(0, 0, 0, 0.2)' : undefined,
                  transition: 'color 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
                }}
              >
                {t('ethereal_quantum_flow')}
              </p>
            </div>
          </div>

          {/* Toggle Switch - unified app colors */}
          <div onClick={(e) => e.stopPropagation()}>
            <AppToggle
              enabled={quantumEnabled}
              onToggle={handleToggle}
              enabledIcon={Orbit}
              disabledIcon={CircleOff}
              enabledColor="purple"
              size="md" variant="minimal"
            />
          </div>


        </motion.div>

        <Collapse isOpen={true} noAnimation={true}>
            <div className="overflow-hidden" style={{ contain: 'layout paint' }}>
              <motion.div 
                layout={!isDesktop}
                transition={{
                  layout: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
                className="space-y-5 sm:space-y-6"
              >
                {/* Quantum Scene Selector */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Eye className={`w-5 h-5 ${darkMode ? 'text-purple-300' : 'text-white'}`} />
                    <span 
                      className="text-sm font-bold"
                      style={{
                        color: darkMode ? 'rgb(243, 232, 255)' : 'rgba(255, 255, 255, 1)',
                        textShadow: !darkMode ? '0 2px 6px rgba(0, 0, 0, 0.25)' : undefined,
                        transition: 'color 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
                      }}
                    >
                      {t('quantum_scene')}
                    </span>
                  </div>

                  {/* Blur veneer behind cards for clarity */}
                <div 
                    className="relative rounded-2xl p-2"
                    style={{
                      background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.10), rgba(168, 85, 247, 0.10))',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)'
                    }}
                  >
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                    {quantumSchemes.map(scheme => (
                      <SchemeCard
                        key={scheme.id}
                        scheme={scheme}
                        isSelected={selectedScheme === scheme.id}
                        onSelect={handleSchemeChange}
                        previewHeight="100px"
                        renderPreview={(s) => (
                          <>
                            <div
                              className="absolute inset-0"
                              style={{
                                background: s.id === 'dubai'
                                  ? `linear-gradient(135deg, #F59E0B 0%, #D4A844 25%, #88B5C5 50%, #6FA5D4 75%, #8B5CF6 100%)`
                                  : s.id === 'kyoto'
                                  ? `linear-gradient(135deg, #8B5CF6 0%, #A857D8 25%, #C756A8 50%, #7894AA 75%, #14B8A6 100%)`
                                  : s.id === 'buenos_aires'
                                  ? `linear-gradient(135deg, #EC4899 0%, #EC6A70 25%, #EA8756 50%, #B87D6F 75%, #8B5CF6 100%)`
                                  : s.id === 'hong_kong'
                                  ? `linear-gradient(135deg, #EC4899 0%, #C85FB5 25%, #8E7CC8 50%, #6A93D0 75%, #8B5CF6 100%)`
                                  : `linear-gradient(135deg, ${s.colors[0]} 0%, ${s.colors[1]} 50%, ${s.colors[2]} 100%)`
                              }}
                            />
                            {/* Animated Quantum Waves */}
                            <motion.div
                              className="absolute inset-0"
                              style={{
                                background: `radial-gradient(ellipse at 30% 40%, ${s.colors[0]}60 0%, transparent 50%)`
                              }}
                              animate={{
                                x: [0, 20, 0],
                                y: [0, -15, 0],
                                opacity: [0.3, 0.6, 0.3]
                              }}
                              transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                            <motion.div
                              className="absolute inset-0"
                              style={{
                                background: `radial-gradient(ellipse at 70% 60%, ${s.colors[2]}60 0%, transparent 50%)`
                              }}
                              animate={{
                                x: [0, -20, 0],
                                y: [0, 15, 0],
                                opacity: [0.3, 0.6, 0.3]
                              }}
                              transition={{
                                duration: 7,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                              }}
                            />
                            <div
                              className="absolute inset-0 w-full h-full"
                              style={{
                                background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.12) 100%)',
                                mixBlendMode: 'overlay'
                              }}
                            />
                            <motion.div
                              className="absolute inset-0 w-full h-full pointer-events-none"
                              initial={{ x: '-100%', opacity: 0 }}
                              whileHover={{ x: '100%', opacity: 1 }}
                              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                              style={{
                                background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)'
                              }}
                            />
                          </>
                        )}
                      />
                    ))}
                  </div>
                  </div>
                </div>

                {/* Intensity Control */}
                <SettingsSlider
                  label="Intensity"
                  icon={Gauge}
                  value={intensity}
                  onChange={handleIntensityChange}
                  min={0.1}
                  max={1.5}
                  step={0.1}
                  presets={[
                    { value: 0.5, label: 'Subtle', icon: Droplet },
                    { value: 1.0, label: 'Balanced', icon: Waves },
                    { value: 1.5, label: 'Celestial', icon: Flame }
                  ]}
                />

                {/* Speed Control */}
                <SettingsSlider
                  label="Speed"
                  icon={Timer}
                  value={speed}
                  onChange={handleSpeedChange}
                  min={0.3}
                  max={1.5}
                  step={0.1}
                  presets={[
                    { value: 0.5, label: 'Calm', icon: Feather },
                    { value: 1.0, label: 'Flowing', icon: Wind },
                    { value: 1.5, label: 'Swift', icon: ZapIcon }
                  ]}
                />

                {/* Info Message */}
                <div
                  className={`relative rounded-lg sm:rounded-xl p-3 sm:p-4 ${
                                            darkMode ? 'bg-purple-500/10 text-purple-300/70' : 'bg-white/12 text-white/85'
                                          }`}
                  style={!darkMode ? {
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  } : {}}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Orbit className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <p className="text-xs sm:text-sm leading-relaxed text-center italic"
                    style={!darkMode ? {
                      textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)'
                    } : {}}
                    >
                      {t('quantum_waves_description')}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
        </Collapse>
      </div>
    </div>
  );
}