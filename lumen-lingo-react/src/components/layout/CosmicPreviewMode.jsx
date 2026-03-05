import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const PRESET_INFO = {
  lagoon_nebula: { category: '✧ Stellar Nursery ✧', name: 'Lagoon Nebula', description: 'Drift through ancient stellar nurseries where newborn stars ignite within veils of ethereal cosmic dust — the birthplace of worlds yet to be.' },
  celestial_lagoon: { category: '✧ Cosmic Ocean ✧', name: 'Celestial Lagoon', description: 'Lose yourself in an infinite ocean of luminous turquoise, where time dissolves and the universe breathes in eternal, serene stillness.' },
  solar_aurora: { category: '✧ Solar Phenomenon ✧', name: 'Solar Aurora', description: 'Witness the celestial ballet of solar winds, as ribbons of golden fire dance across the void, painting auroras that span light-years.' },
  spiral_halo: { category: '✧ Spiral Galaxy ✧', name: 'Spiral Halo', description: 'Behold a hundred billion stars spiraling in perfect cosmic harmony — each one a sun, perhaps with worlds gazing back at us.' },
  edge_of_andromeda: { category: '✧ Edge-On Galaxy ✧', name: 'Edge of Andromeda', description: 'Witness the majesty of a trillion suns suspended in eternal dance — an island universe so vast that the light reaching your eyes began its journey before humanity existed.' },
  starburst_ring: { category: '✧ Ring Galaxy ✧', name: 'Starburst Ring', description: 'A celestial phoenix of creation — a ring of brilliant star formation where cosmic collisions birth new suns in spectacular radiance.' }
};

const PRESETS = ['lagoon_nebula', 'celestial_lagoon', 'solar_aurora', 'spiral_halo', 'edge_of_andromeda', 'starburst_ring'];

export default function CosmicPreviewMode({ nebulaPreset, setNebulaPreset, onExit }) {
  const navigatePreset = (direction) => {
    const currentIdx = PRESETS.indexOf(nebulaPreset);
    let newIdx;
    if (direction === 'prev') {
      newIdx = currentIdx <= 0 ? PRESETS.length - 1 : currentIdx - 1;
    } else {
      newIdx = currentIdx >= PRESETS.length - 1 ? 0 : currentIdx + 1;
    }
    setNebulaPreset(PRESETS[newIdx]);
    localStorage.setItem('nebulaDriftPreset', PRESETS[newIdx]);
    window.dispatchEvent(new Event('animationPreferencesChanged'));
  };

  const info = PRESET_INFO[nebulaPreset] || PRESET_INFO.lagoon_nebula;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-end justify-center pb-4 sm:pb-10 pointer-events-none"
    >
      {/* Left navigation arrow */}
      <motion.button
        initial={{ opacity: 0, x: -30, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: -30, scale: 0.8 }}
        transition={{ duration: 0.4, delay: 0.2, type: "spring", stiffness: 200 }}
        onClick={() => navigatePreset('prev')}
        className="fixed left-2 sm:left-8 top-1/2 -translate-y-1/2 p-2 sm:p-4 rounded-xl sm:rounded-2xl text-white/90 pointer-events-auto group"
        style={{
          background: 'linear-gradient(135deg, rgba(30, 15, 60, 0.35) 0%, rgba(20, 10, 45, 0.4) 100%)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(167, 139, 250, 0.3)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(139, 92, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
        }}
        whileHover={{ 
          scale: 1.12, 
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5), 0 0 40px rgba(139, 92, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
          border: '1px solid rgba(167, 139, 250, 0.5)'
        }}
        whileTap={{ scale: 0.92 }}
      >
        <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7 group-hover:text-violet-200 transition-colors" />
      </motion.button>

      {/* Right navigation arrow */}
      <motion.button
        initial={{ opacity: 0, x: 30, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 30, scale: 0.8 }}
        transition={{ duration: 0.4, delay: 0.2, type: "spring", stiffness: 200 }}
        onClick={() => navigatePreset('next')}
        className="fixed right-2 sm:right-8 top-1/2 -translate-y-1/2 p-2 sm:p-4 rounded-xl sm:rounded-2xl text-white/90 pointer-events-auto group"
        style={{
          background: 'linear-gradient(135deg, rgba(30, 15, 60, 0.35) 0%, rgba(20, 10, 45, 0.4) 100%)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(167, 139, 250, 0.3)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(139, 92, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
        }}
        whileHover={{ 
          scale: 1.12, 
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5), 0 0 40px rgba(139, 92, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
          border: '1px solid rgba(167, 139, 250, 0.5)'
        }}
        whileTap={{ scale: 0.92 }}
      >
        <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7 group-hover:text-violet-200 transition-colors" />
      </motion.button>

      {/* Bottom controls */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 120 }}
        className="flex flex-col items-center gap-2 sm:gap-4 pointer-events-auto px-3 sm:px-4"
      >
        {/* Theme description card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={nebulaPreset}
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center px-4 sm:px-10 py-3 sm:py-6 rounded-2xl sm:rounded-3xl relative overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, rgba(15, 8, 35, 0.4) 0%, rgba(10, 5, 25, 0.45) 100%)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(167, 139, 250, 0.2)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(139, 92, 246, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.08), inset 0 0 12px rgba(180, 160, 220, 0.015)'
            }}
          >
            {/* Glow effect */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 30%, rgba(139, 92, 246, 0.3) 0%, transparent 70%)' }}
            />

            <div 
              className="absolute inset-[1px] rounded-2xl sm:rounded-3xl pointer-events-none"
              style={{ border: '1px solid rgba(180, 160, 220, 0.015)', boxShadow: 'inset 0 0 8px rgba(140, 130, 200, 0.02)' }}
            />

            <div 
              className="absolute bottom-0 left-0 right-0 h-[3px] pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.4))', borderRadius: '0 0 1rem 1rem' }}
            />

            <div className="relative z-10">
              <motion.div 
                className="text-violet-300/60 text-[10px] sm:text-xs font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-1 sm:mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {info.category}
              </motion.div>

              <h3 className="text-white font-bold text-base sm:text-2xl mb-2 sm:mb-3 tracking-wide"
                style={{ textShadow: '0 2px 20px rgba(139, 92, 246, 0.4)' }}
              >
                {info.name}
              </h3>

              <p className="text-violet-100/60 text-xs sm:text-base leading-relaxed max-w-xs sm:max-w-sm mx-auto font-light"
                style={{ fontStyle: 'italic', letterSpacing: '-0.1px' }}
              >
                {info.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Exit button */}
        <motion.button
          onClick={onExit}
          className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-white/95 text-xs sm:text-sm font-medium group"
          style={{
            background: 'linear-gradient(135deg, rgba(40, 20, 80, 0.4) 0%, rgba(25, 12, 55, 0.45) 100%)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(167, 139, 250, 0.35)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 30px rgba(139, 92, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
          animate={{ scale: [1, 1.0025, 1] }}
          transition={{ scale: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
          whileHover={{ 
            scale: 1.05, 
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5), 0 0 50px rgba(139, 92, 246, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
            border: '1px solid rgba(167, 139, 250, 0.5)'
          }}
          whileTap={{ scale: 0.95 }}
        >
          <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
          <span>Return to Reality</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}