import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useProgressData from "./useProgressData";
import ProgressLoadingState from "./ProgressLoadingState";
import ProgressFogOverlay from "./ProgressFogOverlay";
import ProgressStyles from "./ProgressStyles";
import ProgressHeader from "./ProgressHeader";
import LevelProgressCard from "./LevelProgressCard";
import StatsGrid from "./StatsGrid";
import GameTypeBreakdown from "./GameTypeBreakdown";
import GlassDivider from "../shared/GlassDivider";
import WisdomEngine from "./WisdomEngine";
import JourneyPanel from "./JourneyPanel";
import { useDarkMode } from "../theme/DarkModeContext";
import WinterMistOverlay from "../profile/WinterMistOverlay";

export default function ProgressContainer() {
  const {
    isLoading,
    userProfile,
    gameStats,
    currentLevel,
    currentLevelProgress,
    gameTypeStats
  } = useProgressData();

  const { darkMode } = useDarkMode();

  // Material-motion parallax state
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;
    let mounted = true;
    
    const handleScroll = () => {
      if (!ticking && mounted) {
        ticking = true;
        requestAnimationFrame(() => {
          if (!mounted) return;
          
          const scrollY = window.scrollY;
          const scrollDelta = scrollY - lastScrollY.current;
          
          // Subtle vertical parallax based on scroll direction (1-3px range)
          const newY = Math.max(-3, Math.min(3, scrollDelta * 0.15));
          
          setParallaxOffset(prev => ({
            x: prev.x * 0.9, // Decay horizontal
            y: newY
          }));
          
          lastScrollY.current = scrollY;
          ticking = false;
        });
      }
    };

    const handleMouseMove = (e) => {
      if (!mounted || !containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate offset from center (max 2px shift)
      const offsetX = ((e.clientX - centerX) / rect.width) * 2;
      const offsetY = ((e.clientY - centerY) / rect.height) * 1.5;
      
      setParallaxOffset({ x: offsetX, y: offsetY });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      mounted = false;
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (isLoading) return <ProgressLoadingState />;

  // Safety check - if no data, show loading
  if (!userProfile && !gameStats) {
    return <ProgressLoadingState />;
  }

  return (
    <div className="min-h-screen p-3 sm:p-6 relative">
      <ProgressStyles />
      <ProgressFogOverlay />

      {/* Ambient gradient drift - soft volumetric light */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-300/20 via-transparent to-orange-200/10 pointer-events-none" />

      {/* Large radial glow behind main panel */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }}
      />

      {/* Soft vignette overlay */}
      <div 
        className="absolute inset-0 pointer-events-none mix-blend-soft-light"
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 0%, transparent 30%, transparent 70%, rgba(255, 255, 255, 0.05) 100%)'
        }}
      />

      <div ref={containerRef} className="max-w-[1120px] mx-auto relative mt-2 sm:mt-8 px-2 sm:px-4 pb-4 sm:pb-6 z-10">
        <div
          className="relative overflow-visible rounded-[18px] sm:rounded-[32px]"
          style={{
            padding: window.innerWidth < 640 ? '12px 16px 16px' : '10px 38px 38px',
            contain: 'layout paint style',
            willChange: 'opacity, transform',
            transform: 'translateZ(0)'
          }}
        >
          {/* LAYER 1: Outermost Foggy Aura - Teal/Cyan */}
          {darkMode && (
            <div 
              className="absolute -inset-8 sm:-inset-12 rounded-[40px] sm:rounded-[56px] pointer-events-none"
              style={{
                background: `
                  radial-gradient(ellipse 120% 60% at 50% -15%, rgba(45, 180, 200, 0.22) 0%, transparent 55%),
                  radial-gradient(ellipse 50% 120% at -15% 50%, rgba(40, 160, 190, 0.18) 0%, transparent 50%),
                  radial-gradient(ellipse 50% 120% at 115% 50%, rgba(40, 160, 190, 0.18) 0%, transparent 50%),
                  radial-gradient(ellipse 100% 50% at 50% 115%, rgba(35, 140, 170, 0.12) 0%, transparent 50%)
                `,
                filter: 'blur(14px)',
                willChange: 'opacity, transform',
                transform: 'translateZ(0)',
              }}
            />
          )}

          {/* LAYER 2: Mid Foggy Glow - Purple/Violet */}
          {darkMode && (
            <div 
              className="absolute -inset-5 sm:-inset-7 rounded-[30px] sm:rounded-[45px] pointer-events-none"
              style={{
                background: `
                  radial-gradient(ellipse 100% 50% at 50% -8%, rgba(120, 80, 200, 0.35) 0%, transparent 60%),
                  radial-gradient(ellipse 45% 100% at -8% 50%, rgba(100, 70, 180, 0.28) 0%, transparent 55%),
                  radial-gradient(ellipse 45% 100% at 108% 50%, rgba(100, 70, 180, 0.28) 0%, transparent 55%),
                  radial-gradient(ellipse 85% 45% at 50% 108%, rgba(90, 60, 160, 0.2) 0%, transparent 55%)
                `,
                filter: 'blur(10px)',
                willChange: 'opacity, transform',
                transform: 'translateZ(0)',
              }}
            />
          )}

          {/* LAYER 3: Inner Luminous Edge Glow - Mixed Teal+Purple */}
          {darkMode && (
            <div 
              className="absolute -inset-2 sm:-inset-3 rounded-[22px] sm:rounded-[38px] pointer-events-none"
              style={{
                background: `
                  radial-gradient(ellipse 90% 40% at 50% -3%, rgba(80, 180, 220, 0.4) 0%, rgba(130, 100, 200, 0.25) 40%, transparent 70%),
                  radial-gradient(ellipse 35% 90% at -3% 50%, rgba(70, 160, 200, 0.32) 0%, rgba(110, 80, 180, 0.2) 45%, transparent 65%),
                  radial-gradient(ellipse 35% 90% at 103% 50%, rgba(70, 160, 200, 0.32) 0%, rgba(110, 80, 180, 0.2) 45%, transparent 65%),
                  radial-gradient(ellipse 80% 35% at 50% 103%, rgba(60, 140, 180, 0.25) 0%, rgba(100, 70, 170, 0.15) 45%, transparent 65%)
                `,
                filter: 'blur(8px)',
                willChange: 'opacity, transform',
                transform: 'translateZ(0)',
              }}
            />
          )}

          {/* LAYER 4: Crisp Edge Highlight - Bright accent line */}
          {darkMode && (
            <div 
              className="absolute -inset-[1px] rounded-[19px] sm:rounded-[33px] pointer-events-none"
              style={{
                background: `
                  linear-gradient(180deg, 
                    rgba(100, 200, 240, 0.5) 0%, 
                    rgba(140, 120, 220, 0.3) 15%,
                    rgba(100, 80, 180, 0.15) 30%,
                    rgba(80, 60, 150, 0.1) 50%,
                    rgba(100, 80, 180, 0.15) 70%,
                    rgba(140, 120, 220, 0.25) 85%,
                    rgba(80, 180, 220, 0.35) 100%
                  )
                `,
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                padding: '1.5px',
              }}
            />
          )}

          {darkMode && <WinterMistOverlay darkMode={darkMode} />}

          {/* Base frosted material */}
          <div
            className="absolute inset-0 rounded-[18px] sm:rounded-[32px]"
            style={{
              background: darkMode ? 'rgba(255, 255, 255, 0.10)' : 'rgba(255, 255, 255, 0.08)',
              backdropFilter: darkMode ? 'none' : 'blur(10px)',
              WebkitBackdropFilter: darkMode ? 'none' : 'blur(10px)'
            }}
          />


          {/* Subtle color tint overlay */}
          {darkMode && (
            <div 
              className="absolute inset-0 rounded-[18px] sm:rounded-[32px] pointer-events-none"
              style={{
                background: 'linear-gradient(165deg, rgba(60, 80, 140, 0.12) 0%, rgba(80, 60, 130, 0.08) 50%, rgba(50, 70, 120, 0.1) 100%)',
              }}
            />
          )}
          {!darkMode && (
            <div 
              className="absolute top-0 left-0 right-0 h-16 rounded-t-[18px] sm:rounded-t-[32px] pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.10), transparent)'
              }}
            />
          )}

          {/* Inner Top Luminance - Soft internal glow */}
          {darkMode && (
            <div 
              className="absolute top-0 left-[5%] right-[5%] h-32 rounded-t-[18px] sm:rounded-t-[32px] pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(80, 170, 210, 0.06) 0%, transparent 70%)',
              }}
            />
          )}

          {/* INNER SHADOW - Frosted depth */}
          <div 
            className="absolute inset-0 rounded-[18px] sm:rounded-[32px] pointer-events-none"
            style={{
              boxShadow: darkMode 
                ? '0 8px 20px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.05), inset 0 1px 2px rgba(255, 255, 255, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.04), inset 0 -2px 10px rgba(255, 255, 255, 0.08)'
                : '0 8px 20px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.05), inset 0 1px 2px rgba(255, 255, 255, 0.25), inset 0 -3px 8px rgba(255, 255, 255, 0.22)',
            }}
          />

          {/* LIGHT MODE BORDER */}
          {!darkMode && (
            <div 
              className="absolute inset-0 rounded-[18px] sm:rounded-[32px] pointer-events-none"
              style={{
                border: '1px solid rgba(255, 255, 255, 0.18)'
              }}
            />
          )}

          <div className="space-y-2 sm:space-y-8 relative z-20">
            {/* Soft light edge - top illumination */}
            <div className="absolute top-0 inset-x-0 h-8 bg-white/5 blur-xl pointer-events-none" />
            {/* Soft light edge - bottom fade */}
            <div className="absolute bottom-0 inset-x-0 h-8 bg-black/5 blur-xl pointer-events-none" />

            <div className="-mt-3 sm:-mt-16"><ProgressHeader /></div>
            <div 
              style={{ 
                transform: `translate3d(${parallaxOffset.x * 0.5}px, ${parallaxOffset.y * 0.5}px, 0)`,
                transition: 'transform 0.15s cubic-bezier(0.23, 1, 0.32, 1)'
              }}
            >
              <LevelProgressCard 
                currentLevel={currentLevel || 1}
                currentLevelProgress={currentLevelProgress || 0}
                userProfile={userProfile || {}}
              />
            </div>
            <div 
              style={{ 
                transform: `translate3d(${parallaxOffset.x * 0.8}px, ${parallaxOffset.y * 0.8}px, 0)`,
                transition: 'transform 0.12s cubic-bezier(0.23, 1, 0.32, 1)'
              }}
            >
              <StatsGrid gameStats={gameStats || []} />
            </div>
            <div 
              style={{ 
                transform: `translate3d(${parallaxOffset.x}px, ${parallaxOffset.y}px, 0)`,
                transition: 'transform 0.1s cubic-bezier(0.23, 1, 0.32, 1)'
              }}
            >
              <GameTypeBreakdown gameTypeStats={gameTypeStats || {}} />
            </div>

            {/* Moral Reward Message - Clickable */}
            <GlassDivider className="mt-6 mb-4" />
            <JourneyPanel className="mb-6">
              <WisdomEngine />
            </JourneyPanel>
          </div>
        </div>
      </div>
    </div>
  );
}