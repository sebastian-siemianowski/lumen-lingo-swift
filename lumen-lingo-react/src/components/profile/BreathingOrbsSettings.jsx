import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
        Target, 
        CircleOff, 
        Lightbulb, 
        Droplet, 
        Waves, 
        Flame, 
        Feather, 
        Wind, 
        Zap as ZapIcon,
        Leaf,
        Gauge,
        Timer,
        ChevronDown
      } from "lucide-react";
import { useDarkMode } from "../theme/DarkModeContext";
import { useLanguage } from "../language/LanguageContext";
import { useTranslations } from "../utils/translations";

import SchemeCard from "./SchemeCard";
import SettingsSlider from "./SettingsSlider";
import AppToggle from "../shared/AppToggle";
import Collapse from "../shared/Collapse";
import useAudioFeedback from "../shared/useAudioFeedback";

export default function BreathingOrbsSettings({
  breathingOrbsEnabled,
  breathingOrbsIntensity,
  breathingOrbsSpeed,
  gradientScheme,
  raveMode,
  onToggleAnimation,
  onIntensityChange,
  onSpeedChange,
  onGradientChange,
  onRaveModeToggle
}) {
  const { darkMode } = useDarkMode();
  const { sourceLanguage } = useLanguage();
  const t = useTranslations(sourceLanguage);
  const { playSoftClick } = useAudioFeedback();
  const [orbsExpanded, setOrbsExpanded] = React.useState(() => (typeof window !== 'undefined' ? window.innerWidth >= 640 : false));
  const [isDesktop, setIsDesktop] = React.useState(() => (typeof window !== 'undefined' ? window.innerWidth >= 640 : false));
  React.useEffect(() => {
    const handler = () => setIsDesktop(window.innerWidth >= 640);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  
  const gradientSchemes = [
    {
      id: 'default',
      name: 'Barcelona Nights',
      description: 'Twilight breathes Gaudí\'s forms, woven from mosaic, Mediterranean mystery.',
      colors: darkMode
        ? ['#8B5CF6', '#EC4899', '#FBBF18']
        : ['#F472B6', '#EC4899', '#F97316']
    },
    {
      id: 'ocean',
      name: 'Shanghai Shimmering Nexus',
      description: 'A port where starlight docks, reflecting cosmic wonders in its depths',
      colors: darkMode
        ? ['#3B82F6', '#06B6D4', '#14B8A6']
        : ['#0EA5E9', '#06B6D4', '#14B8A6']
    },
    {
      id: 'sunset',
      name: 'Tokyo Sunset',
      description: 'Mono no aware sunset, cherry-hued clouds dissolve, city\'s neon pulse awakens.',
      colors: darkMode
        ? ['#F59E0B', '#EF4444', '#EC4899']
        : ['#F59E0B', '#F97316', '#EF4444']
    },
    {
      id: 'forest',
      name: 'New York Mystical Gardens',
      description: 'Skyline\'s tender kiss to emerald depths; New York\'s unmatched allure, love at first glance.',
      colors: darkMode
        ? ['#059669', '#06B6D4', '#FBBF18']
        : ['#10B981', '#14B8A6', '#FCD34D']
    },
    {
      id: 'aurora',
      name: 'Paris Eclat Nocturne',
      description: 'Otherworldly brilliance descends nightly, where dreams entwine with light-coded verses falling like rain.',
      colors: darkMode
        ? ['#8B5CF6', '#3B82F6', '#06B6D4']
        : ['#A78BFA', '#60A5FA', '#22D3EE']
    },
    {
      id: 'miami',
      name: 'Krakow Luminescence',
      description: 'Ancient stones glow sapphire, echoing Wawel\'s dragon and royal legends. Serenity awaits kissed by spiritual light, sacred past',
      colors: darkMode
        ? ['#EC4899', '#C026D3', '#3B82F6']
        : ['#F472B6', '#D946EF', '#60A5FA']
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
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
            <motion.div
              animate={breathingOrbsEnabled ? {
                scale: [1, 1.15, 1],
              } : {}}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="flex-shrink-0"
            >
              <Target
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
                {t('breathing_orbs')}
              </p>
              <p 
                className="text-[10px] sm:text-sm leading-tight hidden sm:block"
                style={{
                  color: darkMode ? 'rgba(216, 180, 254, 0.7)' : 'rgba(255, 255, 255, 0.9)',
                  textShadow: !darkMode ? '0 1px 4px rgba(0, 0, 0, 0.2)' : undefined,
                  transition: 'color 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
                }}
              >
                {t('ambient_background_animation')}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <AppToggle
              enabled={breathingOrbsEnabled}
              onToggle={onToggleAnimation}
              enabledIcon={Target}
              disabledIcon={CircleOff}
              enabledColor="purple"
              size="md" variant="minimal"
            />

          </div>
        </div>

        <Collapse isOpen={true} noAnimation={true}>
            <div className="overflow-hidden">
              <motion.div 
                layout={!isDesktop}
                transition={{
                  layout: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
                className="space-y-5 sm:space-y-6"
              >
                {/* Rave Mode Setting */}
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <ZapIcon className={`w-5 h-5 ${darkMode ? 'text-purple-300' : 'text-white'}`} />
                      <span 
                        className="text-sm font-semibold"
                        style={{
                          color: darkMode ? 'rgb(233, 213, 255)' : 'rgba(255, 255, 255, 1)',
                          textShadow: !darkMode ? '0 2px 6px rgba(0, 0, 0, 0.25)' : undefined,
                          transition: 'color 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
                        }}
                      >
                        {t('rave_mode')}
                      </span>
                    </div>

                    <div className="shrink-0">
                      <AppToggle
                        enabled={raveMode}
                        onToggle={onRaveModeToggle}
                        enabledIcon={ZapIcon}
                        disabledIcon={CircleOff}
                        enabledColor="pink"
                        size="md" variant="minimal"
                      />
                    </div>
                  </div>

                  <p 
                    className="text-xs leading-relaxed"
                    style={{
                      color: darkMode ? 'rgba(216, 180, 254, 0.7)' : 'rgba(255, 255, 255, 0.85)',
                      textShadow: !darkMode ? '0 1px 3px rgba(0, 0, 0, 0.2)' : undefined,
                      transition: 'color 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
                    }}
                  >
                    {t('rave_mode_description')}
                  </p>
                </div>

                {/* Color Scheme Selector */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Lightbulb className={`w-5 h-5 ${darkMode ? 'text-purple-300' : 'text-white'}`} />
                    <span 
                      className="text-sm font-bold"
                      style={{
                        color: darkMode ? 'rgb(243, 232, 255)' : 'rgba(255, 255, 255, 1)',
                        textShadow: !darkMode ? '0 2px 6px rgba(0, 0, 0, 0.25)' : undefined,
                        transition: 'color 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
                      }}
                    >
                      {t('color_scheme')}
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
                    {gradientSchemes.map(scheme => (
                      <SchemeCard
                        key={scheme.id}
                        scheme={scheme}
                        isSelected={gradientScheme === scheme.id}
                        onSelect={onGradientChange}
                        previewHeight="80px"
                      />
                    ))}
                  </div>
                  </div>
                </div>

                {/* Intensity Control */}
                <SettingsSlider
                  label="Intensity"
                  icon={Gauge}
                  value={breathingOrbsIntensity}
                  onChange={onIntensityChange}
                  min={0}
                  max={2}
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
                  value={breathingOrbsSpeed}
                  onChange={onSpeedChange}
                  min={0}
                  max={2}
                  step={0.1}
                  presets={[
                    { value: 0.5, label: 'Calm', icon: Feather },
                    { value: 1.0, label: 'Flowing', icon: Wind },
                    { value: 1.5, label: 'Swift', icon: ZapIcon }
                  ]}
                />

                {/* Status Description */}
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
                    {breathingOrbsIntensity === 0
                      ? <Leaf className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      : breathingOrbsSpeed < 0.8
                      ? <Feather className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      : breathingOrbsSpeed < 1.2
                      ? <Waves className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      : <ZapIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                    <p className="text-xs sm:text-sm leading-relaxed text-center italic"
                    style={!darkMode ? {
                      textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)'
                    } : {}}
                    >
                      {breathingOrbsIntensity === 0
                        ? t('perfect_stillness')
                        : breathingOrbsSpeed < 0.8
                        ? t('gentle_and_peaceful')
                        : breathingOrbsSpeed < 1.2
                        ? t('balanced_rhythm')
                        : t('quick_and_energetic')
                      }
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