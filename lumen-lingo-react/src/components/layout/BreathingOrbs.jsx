import React from "react";
import { motion } from "framer-motion";
import { getGradientSchemes, getHueRotationRanges } from "./gradientSchemes";

export default function BreathingOrbs({
  darkMode,
  animationEnabled,
  animationIntensity,
  animationSpeed,
  gradientScheme,
  raveMode
}) {
  if (!animationEnabled) return null;

  const gradientSchemes = getGradientSchemes(darkMode, animationIntensity);
  const currentGradients = gradientSchemes[gradientScheme] || gradientSchemes.default;
  const currentHueRanges = getHueRotationRanges()[gradientScheme] || getHueRotationRanges().default;

  const baseOpacity = darkMode ? Math.min(0.8 * animationIntensity, 1.0) : Math.min(0.75 * animationIntensity, 1.0);
  const scaleMultiplier = 1 + (0.15 * animationIntensity);
  const speedDivisor = Math.max(animationSpeed, 0.1);

  const mobileBaseOpacity = darkMode ? Math.min(1.0 * animationIntensity, 1.0) : Math.min(1.0 * animationIntensity, 1.0);
  const mobileScaleMultiplier = 1 + (0.3 * animationIntensity);

  const createOrbAnimation = (orbKey, isRave, hueRange, blurAmount) => {
    if (isRave) {
      return {
        filter: hueRange.map(h => `blur(${blurAmount}px) hue-rotate(${h}deg)`)
      };
    }
    return { filter: `blur(${blurAmount}px)` };
  };

  return (
    <div className="absolute inset-0 pointer-events-none breathing-orbs-container" style={{ zIndex: 0 }}>
      {/* Desktop Orbs */}
      {/* Orb 1 - Top Left */}
      <motion.div
        key={`orb1-${raveMode}`}
        className="absolute rounded-full pointer-events-none hidden sm:block breathing-orb"
        style={{
          width: '550px',
          height: '550px',
          top: '-150px',
          left: '-150px',
          background: currentGradients.desktop.orb1,
          filter: darkMode ? 'blur(50px)' : 'blur(40px)',
          willChange: 'transform, opacity, filter',
        }}
        initial={{ opacity: baseOpacity * 0.88, scale: 0.96 }}
        animate={{
          scale: [0.96, scaleMultiplier * 1.08, 0.98, scaleMultiplier * 1.05, 0.96],
          opacity: [baseOpacity * 0.88, baseOpacity * 0.92, baseOpacity * 0.89, baseOpacity * 0.91, baseOpacity * 0.88],
          x: [0, 35 * animationIntensity, -12 * animationIntensity, 28 * animationIntensity, 0],
          y: [0, 30 * animationIntensity, 8 * animationIntensity, 22 * animationIntensity, 0],
          rotate: [0, 2, -1.5, 0.8, 0],
          ...(raveMode ? {
            filter: currentHueRanges.orb1.map(h => `blur(${darkMode ? 50 : 40}px) hue-rotate(${h}deg)`)
          } : {})
        }}
        transition={{
          duration: 12 / speedDivisor,
          repeat: Infinity,
          ease: [0.43, 0.13, 0.23, 0.96],
          times: [0, 0.3, 0.5, 0.75, 1],
        }}
      />

      {/* Orb 2 - Top Right */}
      <motion.div
        key={`orb2-${raveMode}`}
        className="absolute rounded-full pointer-events-none hidden sm:block breathing-orb"
        style={{
          width: '650px',
          height: '650px',
          top: '-100px',
          right: '-180px',
          background: currentGradients.desktop.orb2,
          filter: darkMode ? 'blur(55px)' : 'blur(45px)',
          willChange: 'transform, opacity, filter',
        }}
        initial={{ opacity: baseOpacity * 0.9, scale: 1.01 }}
        animate={{
          scale: [1.01, scaleMultiplier * 1.12, 0.99, scaleMultiplier * 1.09, 1.01],
          opacity: [baseOpacity * 0.9, baseOpacity * 0.94, baseOpacity * 0.91, baseOpacity * 0.93, baseOpacity * 0.9],
          x: [0, -35 * animationIntensity, 8 * animationIntensity, -28 * animationIntensity, 0],
          y: [0, 38 * animationIntensity, 18 * animationIntensity, 32 * animationIntensity, 0],
          rotate: [0, -1.5, 2, -0.8, 0],
          ...(raveMode ? {
            filter: currentHueRanges.orb2.map(h => `blur(${darkMode ? 55 : 45}px) hue-rotate(${h}deg)`)
          } : {})
        }}
        transition={{
          duration: 14 / speedDivisor,
          repeat: Infinity,
          ease: [0.45, 0.05, 0.55, 0.95],
          times: [0, 0.28, 0.55, 0.78, 1],
          delay: 1.8,
        }}
      />

      {/* Orb 3 - Center */}
      <motion.div
        key={`orb3-${raveMode}`}
        className="absolute rounded-full pointer-events-none hidden sm:block breathing-orb"
        style={{
          width: '600px',
          height: '600px',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: currentGradients.desktop.orb3,
          filter: darkMode ? 'blur(52px)' : 'blur(42px)',
          willChange: 'transform, opacity, filter',
        }}
        initial={{ opacity: baseOpacity * 0.87, scale: 0.98 }}
        animate={{
          scale: [0.98, scaleMultiplier * 1.15, 1.01, scaleMultiplier * 1.11, 0.98],
          opacity: [baseOpacity * 0.87, baseOpacity * 0.91, baseOpacity * 0.88, baseOpacity * 0.9, baseOpacity * 0.87],
          rotate: [0, 12 * animationIntensity, -6 * animationIntensity, 8 * animationIntensity, 0],
          x: [0, -10 * animationIntensity, 15 * animationIntensity, -6 * animationIntensity, 0],
          y: [0, 12 * animationIntensity, -8 * animationIntensity, 6 * animationIntensity, 0],
          ...(raveMode ? {
            filter: currentHueRanges.orb3.map(h => `blur(${darkMode ? 52 : 42}px) hue-rotate(${h}deg)`)
          } : {})
        }}
        transition={{
          duration: 16 / speedDivisor,
          repeat: Infinity,
          ease: [0.42, 0, 0.58, 1],
          times: [0, 0.25, 0.5, 0.75, 1],
          delay: 3.2,
        }}
      />

      {/* Orb 4 - Bottom Left */}
      <motion.div
        key={`orb4-${raveMode}`}
        className="absolute rounded-full pointer-events-none hidden sm:block breathing-orb"
        style={{
          width: '580px',
          height: '580px',
          bottom: '-100px',
          left: '5%',
          background: currentGradients.desktop.orb4,
          filter: darkMode ? 'blur(48px)' : 'blur(40px)',
          willChange: 'transform, opacity, filter',
        }}
        initial={{ opacity: baseOpacity * 0.89, scale: 1.0 }}
        animate={{
          scale: [1.0, scaleMultiplier * 1.1, 0.99, scaleMultiplier * 1.07, 1.0],
          opacity: [baseOpacity * 0.89, baseOpacity * 0.93, baseOpacity * 0.9, baseOpacity * 0.92, baseOpacity * 0.89],
          x: [0, 32 * animationIntensity, -8 * animationIntensity, 25 * animationIntensity, 0],
          y: [0, -35 * animationIntensity, -15 * animationIntensity, -28 * animationIntensity, 0],
          rotate: [0, -2, 1.5, -1, 0],
          ...(raveMode ? {
            filter: currentHueRanges.orb4.map(h => `blur(${darkMode ? 48 : 40}px) hue-rotate(${h}deg)`)
          } : {})
        }}
        transition={{
          duration: 13 / speedDivisor,
          repeat: Infinity,
          ease: [0.46, 0.03, 0.52, 0.96],
          times: [0, 0.3, 0.6, 0.8, 1],
          delay: 0.9,
        }}
      />

      {/* Orb 5 - Bottom Right */}
      <motion.div
        key={`orb5-${raveMode}`}
        className="absolute rounded-full pointer-events-none hidden sm:block breathing-orb"
        style={{
          width: '620px',
          height: '620px',
          bottom: '-80px',
          right: '8%',
          background: currentGradients.desktop.orb5,
          filter: darkMode ? 'blur(50px)' : 'blur(43px)',
          willChange: 'transform, opacity, filter',
        }}
        initial={{ opacity: baseOpacity * 0.86, scale: 0.99 }}
        animate={{
          scale: [0.99, scaleMultiplier * 1.16, 1.02, scaleMultiplier * 1.12, 0.99],
          opacity: [baseOpacity * 0.86, baseOpacity * 0.91, baseOpacity * 0.88, baseOpacity * 0.9, baseOpacity * 0.86],
          x: [0, -40 * animationIntensity, 12 * animationIntensity, -32 * animationIntensity, 0],
          y: [0, -32 * animationIntensity, -10 * animationIntensity, -25 * animationIntensity, 0],
          rotate: [0, 2, -2, 1, 0],
          ...(raveMode ? {
            filter: currentHueRanges.orb5.map(h => `blur(${darkMode ? 50 : 43}px) hue-rotate(${h}deg)`)
          } : {})
        }}
        transition={{
          duration: 15 / speedDivisor,
          repeat: Infinity,
          ease: [0.4, 0, 0.6, 1],
          times: [0, 0.27, 0.53, 0.78, 1],
          delay: 2.5,
        }}
      />

      {/* MOBILE ORBS */}
      {/* Mobile Orb 1 - Top Left */}
      <motion.div
        key={`mobile-orb1-${raveMode}`}
        className="absolute rounded-full pointer-events-none sm:hidden breathing-orb"
        style={{
          width: '380px',
          height: '380px',
          top: '-80px',
          left: '-120px',
          background: currentGradients.mobile.orb1,
          filter: darkMode ? 'blur(26px)' : 'blur(20px)',
          willChange: 'transform, opacity, filter',
        }}
        initial={{ opacity: mobileBaseOpacity * 0.91, scale: 0.98 }}
        animate={{
          scale: [0.98, mobileScaleMultiplier * 1.2, 1.0, mobileScaleMultiplier * 1.16, 0.98],
          opacity: [mobileBaseOpacity * 0.91, mobileBaseOpacity * 0.95, mobileBaseOpacity * 0.92, mobileBaseOpacity * 0.94, mobileBaseOpacity * 0.91],
          x: [0, 30 * animationIntensity, 10 * animationIntensity, 25 * animationIntensity, 0],
          y: [0, 35 * animationIntensity, 12 * animationIntensity, 28 * animationIntensity, 0],
          rotate: [0, 1.5, -1, 0.8, 0],
          ...(raveMode ? {
            filter: currentHueRanges.orb1.map(h => `blur(${darkMode ? 26 : 20}px) hue-rotate(${h}deg)`)
          } : {})
        }}
        transition={{
          duration: 13 / speedDivisor,
          repeat: Infinity,
          ease: [0.42, 0, 0.58, 1],
          times: [0, 0.28, 0.55, 0.78, 1],
        }}
      />

      {/* Mobile Orb 2 - Top Right */}
      <motion.div
        key={`mobile-orb2-${raveMode}`}
        className="absolute rounded-full pointer-events-none sm:hidden breathing-orb"
        style={{
          width: '420px',
          height: '420px',
          top: '-60px',
          right: '-110px',
          background: currentGradients.mobile.orb2,
          filter: darkMode ? 'blur(28px)' : 'blur(22px)',
          willChange: 'transform, opacity, filter',
        }}
        initial={{ opacity: mobileBaseOpacity * 0.89, scale: 1.01 }}
        animate={{
          scale: [1.01, mobileScaleMultiplier * 1.18, 0.99, mobileScaleMultiplier * 1.14, 1.01],
          opacity: [mobileBaseOpacity * 0.89, mobileBaseOpacity * 0.93, mobileBaseOpacity * 0.9, mobileBaseOpacity * 0.92, mobileBaseOpacity * 0.89],
          rotate: [0, 18 * animationIntensity, -10 * animationIntensity, 13 * animationIntensity, 0],
          x: [0, -28 * animationIntensity, -8 * animationIntensity, -22 * animationIntensity, 0],
          y: [0, 38 * animationIntensity, 15 * animationIntensity, 30 * animationIntensity, 0],
          ...(raveMode ? {
            filter: currentHueRanges.orb3.map(h => `blur(${darkMode ? 28 : 22}px) hue-rotate(${h}deg)`)
          } : {})
        }}
        transition={{
          duration: 15 / speedDivisor,
          repeat: Infinity,
          ease: [0.45, 0.05, 0.55, 0.95],
          times: [0, 0.26, 0.53, 0.77, 1],
          delay: 2.1,
        }}
      />

      {/* Mobile Orb 3 - Bottom Left */}
      <motion.div
        key={`mobile-orb3-${raveMode}`}
        className="absolute rounded-full pointer-events-none sm:hidden breathing-orb"
        style={{
          width: '400px',
          height: '400px',
          bottom: '-90px',
          left: '-100px',
          background: currentGradients.mobile.orb3,
          filter: darkMode ? 'blur(27px)' : 'blur(21px)',
          willChange: 'transform, opacity, filter',
        }}
        initial={{ opacity: mobileBaseOpacity * 0.9, scale: 0.99 }}
        animate={{
          scale: [0.99, mobileScaleMultiplier * 1.17, 1.0, mobileScaleMultiplier * 1.13, 0.99],
          opacity: [mobileBaseOpacity * 0.9, mobileBaseOpacity * 0.94, mobileBaseOpacity * 0.91, mobileBaseOpacity * 0.93, mobileBaseOpacity * 0.9],
          y: [0, -32 * animationIntensity, -10 * animationIntensity, -25 * animationIntensity, 0],
          x: [0, 25 * animationIntensity, 8 * animationIntensity, 20 * animationIntensity, 0],
          rotate: [0, -2, 1.5, -1, 0],
          ...(raveMode ? {
            filter: currentHueRanges.orb5.map(h => `blur(${darkMode ? 27 : 21}px) hue-rotate(${h}deg)`)
          } : {})
        }}
        transition={{
          duration: 14 / speedDivisor,
          repeat: Infinity,
          ease: [0.4, 0, 0.6, 1],
          times: [0, 0.29, 0.57, 0.8, 1],
          delay: 1.4,
        }}
      />

      {/* Mobile Orb 4 - Bottom Right */}
      <motion.div
        key={`mobile-orb4-${raveMode}`}
        className="absolute rounded-full pointer-events-none sm:hidden breathing-orb"
        style={{
          width: '410px',
          height: '410px',
          bottom: '-70px',
          right: '-100px',
          background: currentGradients.mobile.orb2,
          filter: darkMode ? 'blur(25px)' : 'blur(20px)',
          willChange: 'transform, opacity, filter',
        }}
        initial={{ opacity: mobileBaseOpacity * 0.88, scale: 1.0 }}
        animate={{
          scale: [1.0, mobileScaleMultiplier * 1.15, 0.98, mobileScaleMultiplier * 1.12, 1.0],
          opacity: [mobileBaseOpacity * 0.88, mobileBaseOpacity * 0.92, mobileBaseOpacity * 0.89, mobileBaseOpacity * 0.91, mobileBaseOpacity * 0.88],
          x: [0, -30 * animationIntensity, -10 * animationIntensity, -24 * animationIntensity, 0],
          y: [0, -30 * animationIntensity, -8 * animationIntensity, -22 * animationIntensity, 0],
          rotate: [0, -1.5, 1, -0.8, 0],
          ...(raveMode ? {
            filter: currentHueRanges.orb2.map(h => `blur(${darkMode ? 25 : 20}px) hue-rotate(${h}deg)`)
          } : {})
        }}
        transition={{
          duration: 16 / speedDivisor,
          repeat: Infinity,
          ease: [0.4, 0, 0.6, 1],
          times: [0, 0.27, 0.55, 0.8, 1],
          delay: 0.8,
        }}
      />
    </div>
  );
}