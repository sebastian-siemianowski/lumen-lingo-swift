import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { LanguageProvider, useLanguage } from "./components/language/LanguageContext";
import { DarkModeProvider, useDarkMode } from "./components/theme/DarkModeContext";
import { useTranslations } from "./components/utils/translations";
import SoundManager from "./components/shared/SoundManager";
import useAudioFeedback from "./components/shared/useAudioFeedback";

// Layout components
import LayoutBackground from "./components/layout/LayoutBackground";
import BreathingOrbs from "./components/layout/BreathingOrbs";
import LayoutNavbar from "./components/layout/LayoutNavbar";
import CosmicPreviewMode from "./components/layout/CosmicPreviewMode";
import LayoutStyles, { getScrollbarColors } from "./components/layout/LayoutStyles";
import { useLayoutPreferences } from "./components/layout/useLayoutPreferences";

function LayoutContent({ children, currentPageName }) {
  const location = useLocation();
  const { sourceLanguage, targetLanguage } = useLanguage();
  const { darkMode } = useDarkMode();
  const t = useTranslations(sourceLanguage);
  const { playNavigate, playButtonTap } = useAudioFeedback();
  const [userLevel, setUserLevel] = useState(1);
  const [direction, setDirection] = useState('forward');
  const [prevPath, setPrevPath] = useState(location.pathname);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const firstNavRef = React.useRef(true);

  // Get all layout preferences from custom hook
  const {
    animationEnabled,
    animationIntensity,
    animationSpeed,
    gradientScheme,
    raveMode,
    quantumEnabled,
    quantumScheme,
    quantumIntensity,
    quantumSpeed,
    nebulaEnabled,
    nebulaPreset,
    setNebulaPreset,
    nebulaIntensity,
    nebulaSpeed,
    cosmicPreviewMode,
    setCosmicPreviewMode
  } = useLayoutPreferences();

  // Load user level for progress-based scrollbar
  useEffect(() => {
    const loadUserLevel = () => {
      try {
        const profileData = localStorage.getItem('lumenlingo_userProfile');
        if (profileData) {
          const profile = JSON.parse(profileData);
          setUserLevel(profile?.current_level || 1);
        }
      } catch (error) {
        console.error('Error loading user level:', error);
      }
    };

    loadUserLevel();
    window.addEventListener('storage', loadUserLevel);
    window.addEventListener('animationPreferencesChanged', loadUserLevel);
    
    return () => {
      window.removeEventListener('storage', loadUserLevel);
      window.removeEventListener('animationPreferencesChanged', loadUserLevel);
    };
  }, []);

  const scrollbarColors = getScrollbarColors(userLevel, darkMode);

  // Navigation direction detection
  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath.includes('Dashboard') && !prevPath.includes('Dashboard')) {
      setDirection('back');
    } else if (currentPath.includes('Categories') && prevPath.includes('Dashboard')) {
      setDirection('forward');
    } else {
      setDirection('forward');
    }
    setPrevPath(currentPath);
  }, [location.pathname, prevPath]);

  // Page transition overlay
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Navigation sound
  useEffect(() => {
    if (firstNavRef.current) { firstNavRef.current = false; return; }
    playNavigate();
  }, [location.pathname, playNavigate]);

  // Global button tap sound
  useEffect(() => {
    const handler = (e) => {
      try {
        const el = e.target.closest('button, a, [role="button"]');
        if (!el) return;
        if (el.hasAttribute('data-sound-handled')) return;
        if (el.getAttribute('aria-disabled') === 'true' || el.hasAttribute('disabled')) return;
        playButtonTap();
      } catch {}
    };
    window.addEventListener('click', handler, true);
    return () => window.removeEventListener('click', handler, true);
  }, [playButtonTap]);

  const isGamePage = currentPageName === 'FlashCards' || 
                     currentPageName === 'Grammar' || 
                     currentPageName === 'WordBuilder';
  const isProfilePage = currentPageName === 'Profile';

  // Page transition variants
  const pageTransitionVariants = {
    initial: (direction) => ({
      opacity: 0,
      scale: direction === 'back' ? 1.03 : 0.97,
      filter: isProfilePage ? 'none' : 'blur(20px)',
      rotateX: direction === 'back' ? -2 : 2,
      y: direction === 'back' ? -20 : 20,
    }),
    animate: {
      opacity: 1,
      scale: 1,
      filter: isProfilePage ? 'none' : 'blur(0px)',
      rotateX: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.19, 1, 0.22, 1],
        opacity: { duration: 0.4 },
        scale: { type: "spring", stiffness: 300, damping: 30 },
        filter: { duration: 0.5 },
        rotateX: { duration: 0.5 },
        y: { type: "spring", stiffness: 200, damping: 25 }
      }
    },
    exit: (direction) => ({
      opacity: 0,
      scale: direction === 'back' ? 0.97 : 1.03,
      filter: isProfilePage ? 'none' : 'blur(20px)',
      rotateX: direction === 'back' ? 2 : -2,
      y: direction === 'back' ? 20 : -20,
      transition: {
        duration: 0.4,
        ease: [0.19, 1, 0.22, 1],
        opacity: { duration: 0.3 },
        scale: { duration: 0.4 },
        filter: { duration: 0.4 }
      }
    })
  };

  const handleExitCosmicPreview = () => {
    localStorage.removeItem('cosmicPreviewMode');
    setCosmicPreviewMode(false);
    window.dispatchEvent(new Event('animationPreferencesChanged'));
  };

  return (
    <>
      <SoundManager />
      <LayoutStyles darkMode={darkMode} scrollbarColors={scrollbarColors} />

      <div className="min-h-screen relative overflow-hidden cosmic-noise" style={{ backgroundColor: darkMode ? 'rgb(6, 5, 20)' : 'transparent' }}>
        {/* Background layers */}
        <LayoutBackground
          darkMode={darkMode}
          quantumEnabled={quantumEnabled}
          quantumScheme={quantumScheme}
          quantumIntensity={quantumIntensity}
          quantumSpeed={quantumSpeed}
          nebulaEnabled={nebulaEnabled}
          nebulaPreset={nebulaPreset}
          nebulaIntensity={nebulaIntensity}
          nebulaSpeed={nebulaSpeed}
          currentPageName={currentPageName}
        />

        {/* Transition gradient overlay */}
        <AnimatePresence>
          {isTransitioning && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.12 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.24 }}
              className="fixed inset-0 pointer-events-none z-[60] will-change-auto"
              style={{
                background: darkMode
                  ? 'radial-gradient(circle at center, rgba(168, 85, 247, 0.35) 0%, transparent 70%)'
                  : 'radial-gradient(circle at center, rgba(255, 255, 255, 0.35) 0%, transparent 70%)',
                contain: 'layout paint style',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden'
              }}
            />
          )}
        </AnimatePresence>

        {/* Breathing Orbs */}
        <BreathingOrbs
          darkMode={darkMode}
          animationEnabled={animationEnabled}
          animationIntensity={animationIntensity}
          animationSpeed={animationSpeed}
          gradientScheme={gradientScheme}
          raveMode={raveMode}
        />

        {/* Navigation */}
        {!isGamePage && !cosmicPreviewMode && (
          <LayoutNavbar darkMode={darkMode} t={t} />
        )}

        {/* Page content */}
        {!cosmicPreviewMode && (
          <div style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}>
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.main
                key={`${location.pathname}-${sourceLanguage}-${targetLanguage}`}
                custom={direction}
                variants={pageTransitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="relative z-10"
                style={{ 
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  minHeight: 'calc(100vh - 80px)',
                  willChange: 'opacity, transform, filter'
                }}
              >
                {children}
              </motion.main>
            </AnimatePresence>
          </div>
        )}

        {/* Cosmic preview mode */}
        <AnimatePresence>
          {cosmicPreviewMode && (
            <CosmicPreviewMode
              nebulaPreset={nebulaPreset}
              setNebulaPreset={setNebulaPreset}
              onExit={handleExitCosmicPreview}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default function Layout({ children, currentPageName }) {
  return (
    <DarkModeProvider>
      <LanguageProvider>
        <LayoutContent children={children} currentPageName={currentPageName} />
      </LanguageProvider>
    </DarkModeProvider>
  );
}