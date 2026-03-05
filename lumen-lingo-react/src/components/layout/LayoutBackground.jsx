import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import QuantumFlow from "../background/QuantumFlow";
import CosmicBackground from "../background/CosmicBackground";

export default function LayoutBackground({
  darkMode,
  quantumEnabled,
  quantumScheme,
  quantumIntensity,
  quantumSpeed,
  nebulaEnabled,
  nebulaPreset,
  nebulaIntensity,
  nebulaSpeed,
  currentPageName
}) {
  return (
    <>
      {/* Dark mode background - Layer 1: Base Abyss */}
      <motion.div
        className="absolute inset-0"
        style={{ background: 'rgb(6, 5, 20)' }}
        initial={false}
        animate={{ opacity: darkMode ? 1 : 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />
      
      {/* Layer 2: Subtle Radial Nebulas */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(59, 27, 94, 0.2) 0%, transparent 60%),
            radial-gradient(circle at 80% 70%, rgba(109, 45, 255, 0.13) 0%, transparent 70%),
            radial-gradient(circle at 50% 120%, rgba(46, 15, 70, 0.27) 0%, transparent 80%)
          `
        }}
        initial={false}
        animate={{ opacity: darkMode ? 1 : 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />
      
      {/* Soft Cosmic Bloom */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle 340px at 50% 40%, rgba(143, 110, 255, 0.06) 0%, transparent 70%)',
          mixBlendMode: 'screen'
        }}
        initial={false}
        animate={{ opacity: darkMode ? 1 : 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />
      
      {/* Light mode background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom right, rgb(196, 148, 252), rgb(244, 114, 182), rgb(251, 146, 60))'
        }}
        initial={false}
        animate={{ opacity: darkMode ? 0 : 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Background gradient layer - only for light mode */}
      <div 
        className="absolute inset-0"
        style={{
          background: darkMode
            ? 'transparent'
            : 'linear-gradient(to bottom right, rgba(168, 85, 247, 0.2), transparent, rgba(251, 146, 60, 0.2))',
          transition: 'background 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      />

      {/* Subtle gradient shift overlay for dynamic feel - only for light mode */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: darkMode
            ? 'transparent'
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, transparent 50%, rgba(251, 146, 60, 0.08) 100%)',
          opacity: darkMode ? 0 : 0.6,
          transition: 'background 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      />

      {/* QUANTUM FLOW */}
      <AnimatePresence mode="wait">
        {quantumEnabled && (
          <motion.div
            key={`quantum-${quantumScheme}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <QuantumFlow
              scheme={quantumScheme}
              intensity={quantumIntensity}
              speed={quantumSpeed}
              darkMode={darkMode}
              isProfilePage={currentPageName === 'Profile'}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* NEBULA DRIFT / COSMIC BACKGROUNDS (Dark Mode Only) */}
      <AnimatePresence mode="wait">
        {nebulaEnabled && darkMode && (
          <motion.div
            key={`cosmic-${nebulaPreset}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <CosmicBackground
              presetId={nebulaPreset}
              intensity={nebulaIntensity}
              speed={nebulaSpeed}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle overlay gradient for depth - only for light mode */}
      <div
        className="absolute inset-0"
        style={{
          background: darkMode
            ? 'transparent'
            : 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.05) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Large-scale vignette for atmospheric center focus - only for light mode */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: darkMode
            ? 'transparent'
            : 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, transparent 50%, rgba(0, 0, 0, 0.04) 100%)'
        }}
      />

      {/* Global depth field - subtle atmospheric haze - only for light mode */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: darkMode ? 'transparent' : 'rgba(255, 255, 255, 0.04)',
          mixBlendMode: darkMode ? 'normal' : 'soft-light',
          backdropFilter: darkMode ? 'none' : 'blur(0.5px)',
          WebkitBackdropFilter: darkMode ? 'none' : 'blur(0.5px)'
        }}
      />

      {/* Subtle floating depth - vertical gradient for 3D atmosphere - only for light mode */}
      <div 
        className="pointer-events-none absolute inset-0"
        style={{
          background: darkMode
            ? 'transparent'
            : 'linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 0%, transparent 35%, transparent 65%, rgba(0, 0, 0, 0.03) 100%)'
        }}
      />
    </>
  );
}