import React, { useMemo, useRef, useState } from "react";
import useAudioFeedback from "./useAudioFeedback";
import { motion, AnimatePresence } from "framer-motion";
import { useDarkMode } from "../theme/DarkModeContext";

// Unified premium toggle with built-in sound, glow, spotlight, ripple, and accessibility
// Props: enabled, onToggle, enabledIcon, disabledIcon, size (xs|sm|md), enabledColor, sound ('tap'|'soft')
export default function AppToggle({
  enabled,
  onToggle,
  enabledIcon,
  disabledIcon,
  size = "md",
  sound = "tap",
  enabledColor = "purple",
  className,
  ariaLabel,
  title,
  variant = "default",
  ...rest
}) {
  const { darkMode } = useDarkMode();
  const isMinimal = variant === "minimal";
  const { playButtonTap, playSoftClick } = useAudioFeedback();
  const trackRef = useRef(null);
  const [spot, setSpot] = useState({ x: 0.5, y: 0.5 });
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleMove = (e) => {
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const clamp = (v) => Math.min(1, Math.max(0, v));
    setSpot({ x: clamp(x), y: clamp(y) });
    setHovered(true);
  };

  const onToggleWithSound = () => {
    if (sound === "soft") playSoftClick(); else playButtonTap();
    onToggle && onToggle();
  };

  const glow = useMemo(() => {
    const palettes = {
      purple: darkMode ? ["rgba(168,85,247,0.55)", "rgba(139,92,246,0.35)"] : ["rgba(168,85,247,0.32)", "rgba(236,72,153,0.20)"],
      pink: darkMode ? ["rgba(236,72,153,0.55)", "rgba(217,70,239,0.35)"] : ["rgba(244,114,182,0.32)", "rgba(236,72,153,0.20)"],
      green: darkMode ? ["rgba(16,185,129,0.5)", "rgba(45,212,191,0.35)"] : ["rgba(34,197,94,0.28)", "rgba(16,185,129,0.18)"],
      orange: darkMode ? ["rgba(251,146,60,0.5)", "rgba(251,191,36,0.35)"] : ["rgba(251,146,60,0.28)", "rgba(251,191,36,0.18)"],
      blue: darkMode ? ["rgba(96,165,250,0.5)", "rgba(59,130,246,0.35)"] : ["rgba(59,130,246,0.28)", "rgba(56,189,248,0.18)"],
      yellow: darkMode ? ["rgba(250,204,21,0.5)", "rgba(253,224,71,0.35)"] : ["rgba(251,191,36,0.28)", "rgba(253,224,71,0.18)"],
      cyan: darkMode ? ["rgba(34,211,238,0.5)", "rgba(6,182,212,0.35)"] : ["rgba(6,182,212,0.28)", "rgba(20,184,166,0.18)"]
    };
    const [c1, c2] = palettes[enabledColor] || palettes.purple;
    return {
      base: `radial-gradient(26px 26px at 50% 50%, ${c1} 0%, transparent 70%)`,
      hover: `radial-gradient(30px 30px at 50% 50%, ${c2} 0%, transparent 70%)`,
    };
  }, [enabledColor, darkMode]);

  return (
    <motion.div
      className={`relative inline-block align-middle select-none ${className || ""}`}
      initial={false}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {/* Active glow */}
      {!isMinimal && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-1 rounded-full"
          style={{ background: glow.base, filter: "blur(6px)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: enabled ? (darkMode ? 0.5 : 0.35) : 0 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        />
      )}

      {/* Hover halo */}
      {!isMinimal && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-1 rounded-full"
          style={{ background: glow.hover, filter: "blur(8px)" }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: enabled ? 0.28 : 0.18 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        />
      )}

      {/* Core toggle (track + thumb + icons) */}
      <motion.button
        ref={trackRef}
        onClick={(e) => { e.stopPropagation(); onToggleWithSound(); }}
        onMouseMove={handleMove}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="relative rounded-full flex items-center flex-shrink-0 cursor-pointer focus-visible:outline-none"
        role="switch"
        aria-checked={enabled}
        aria-label={ariaLabel || "Toggle"}
        title={title}
         {...rest}
         style={{
          width: (size === 'xs' ? 44 : size === 'sm' ? 52 : 56),
          height: (size === 'xs' ? 24 : size === 'sm' ? 28 : 30),
          background: enabled ? (darkMode
            ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.4) 0%, rgba(139, 92, 246, 0.4) 100%)'
            : 'linear-gradient(135deg, rgba(168, 85, 247, 0.35) 0%, rgba(139, 92, 246, 0.35) 100%)')
            : (darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.12)'),
          border: `1.5px solid ${enabled ? (darkMode ? 'rgba(168, 85, 247, 0.6)' : 'rgba(168, 85, 247, 0.5)') : (darkMode ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)')}`,
          boxShadow: enabled ? (darkMode ? '0 0 20px rgba(168, 85, 247, 0.4)' : '0 0 15px rgba(168, 85, 247, 0.25)') : 'inset 0 1px 3px rgba(0,0,0,0.1)',
          transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
          WebkitTapHighlightColor: 'transparent'
        }}
        whileHover={isMinimal ? undefined : { scale: 1.045 }}
        whileTap={isMinimal ? { scale: 0.98 } : { scale: 0.965 }}
      >
        {/* Enabled pulse */}
        {!isMinimal && enabled && (
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background: `radial-gradient(circle at ${enabled ? '75%' : '25%'} 50%, ${darkMode ? 'rgba(168, 85, 247, 0.6)' : 'rgba(168, 85, 247, 0.5)'} 0%, transparent 70%)`
            }}
          />
        )}

        {/* Sheen */}
        {!isMinimal && (
          <motion.div
            aria-hidden
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: darkMode
                ? 'linear-gradient(120deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 30%, transparent 60%)'
                : 'linear-gradient(120deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 30%, transparent 60%)'
            }}
            animate={{ x: hovered ? (spot.x - 0.5) * 6 : 0 }}
            transition={{ type: 'spring', stiffness: 180, damping: 18 }}
          />
        )}

        {/* Spotlight */}
        {!isMinimal && (
          <motion.div
            aria-hidden
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: `radial-gradient(40px 28px at ${spot.x * 100}% ${spot.y * 100}%, ${
                enabled ? (darkMode ? 'rgba(168,85,247,0.5)' : 'rgba(168,85,247,0.35)') : (darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)')
              } 0%, transparent 60%)`,
              filter: 'blur(8px)'
            }}
            animate={{ opacity: hovered ? 0.35 : 0 }}
            transition={{ duration: 0.25 }}
          />
        )}

        {/* Focus ring */}
        <AnimatePresence>
          {focused && (
            <motion.div
              key="focus-ring"
              className="absolute -inset-1 rounded-full pointer-events-none"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 0.9, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              style={{
                border: `2px solid ${enabled ? (darkMode ? 'rgba(168, 85, 247, 0.6)' : 'rgba(168, 85, 247, 0.5)') : (darkMode ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)')}`,
                boxShadow: enabled ? (darkMode ? '0 0 20px rgba(168, 85, 247, 0.4)' : '0 0 15px rgba(168, 85, 247, 0.25)') : '0 0 0 rgba(0,0,0,0)'
              }}
            />
          )}
        </AnimatePresence>

        {/* Ripple on state change */}
        {!isMinimal && (
          <AnimatePresence mode="wait">
          <motion.span
            key={`pulse-${enabled}`}
            className="absolute rounded-full pointer-events-none"
            initial={{ opacity: 0.22, scale: 0.6 }}
            animate={{ opacity: 0, scale: 1.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              left: (enabled ? (size === 'xs' ? 22 : size === 'sm' ? 26 : 28) : (size === 'xs' ? 3 : 3)) + (size === 'xs' ? 18 : size === 'sm' ? 22 : 24) / 2,
              top: (size === 'xs' ? 24 : size === 'sm' ? 28 : 30) / 2,
              width: (size === 'xs' ? 18 : size === 'sm' ? 22 : 24) * 1.4,
              height: (size === 'xs' ? 18 : size === 'sm' ? 22 : 24) * 1.4,
              transform: 'translate(-50%, -50%)',
              border: `2px solid ${enabled ? (darkMode ? 'rgba(168, 85, 247, 0.6)' : 'rgba(168, 85, 247, 0.5)') : (darkMode ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)')}`
            }}
          />
        </AnimatePresence>
        )}

        {/* Thumb */}
        <motion.div
          className="relative rounded-full flex items-center justify-center"
          style={{
            width: (size === 'xs' ? 18 : size === 'sm' ? 22 : 24),
            height: (size === 'xs' ? 18 : size === 'sm' ? 22 : 24),
            background: enabled ? 'linear-gradient(135deg, #A855F7 0%, #8B5CF6 100%)' : (darkMode
              ? 'linear-gradient(135deg, rgba(120, 100, 150, 0.9) 0%, rgba(100, 80, 130, 0.9) 100%)'
              : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 240, 245, 0.95) 100%)'),
            border: darkMode ? '1px solid rgba(255,255,255,0.18)' : '1px solid rgba(0,0,0,0.06)',
            boxShadow: enabled
              ? `0 2px 8px rgba(0, 0, 0, 0.2), 0 0 12px ${darkMode ? 'rgba(168, 85, 247, 0.6)' : 'rgba(168, 85, 247, 0.5)'}`
              : '0 2px 6px rgba(0, 0, 0, 0.15)'
          }}
          animate={{ x: enabled ? (size === 'xs' ? 22 : size === 'sm' ? 26 : 28) : 3, y: isMinimal ? 0 : (hovered ? -0.5 : 0), scale: enabled ? 1.02 : 1 }}
          transition={{ type: "spring", stiffness: 520, damping: 26 }}
        >
          {/* Inner highlight */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.35) 0%, transparent 55%)'
            }}
          />

          {/* Icon */}
          <AnimatePresence mode="wait">
            {enabled ? (
              enabledIcon && (
                <motion.div
                  key="enabled"
                  initial={{ scale: 0, rotate: -180, filter: 'blur(8px)' }}
                  animate={{ scale: 1, rotate: 0, filter: 'blur(0px)' }}
                  exit={{ scale: 0, rotate: 180, filter: 'blur(8px)' }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  {React.createElement(enabledIcon, { style: { width: (size === 'xs' ? 10 : size === 'sm' ? 12 : 14), height: (size === 'xs' ? 10 : size === 'sm' ? 12 : 14), color: '#FFFFFF', filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))' }, strokeWidth: 2.5 })}
                </motion.div>
              )
            ) : (
              disabledIcon && (
                <motion.div
                  key="disabled"
                  initial={{ scale: 0, rotate: 180, filter: 'blur(8px)' }}
                  animate={{ scale: 1, rotate: 0, filter: 'blur(0px)' }}
                  exit={{ scale: 0, rotate: -180, filter: 'blur(8px)' }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  {React.createElement(disabledIcon, { style: { width: (size === 'xs' ? 10 : size === 'sm' ? 12 : 14), height: (size === 'xs' ? 10 : size === 'sm' ? 12 : 14), color: (darkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.35)'), filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))' }, strokeWidth: 2.5 })}
                </motion.div>
              )
            )}
          </AnimatePresence>
        </motion.div>
      </motion.button>
    </motion.div>
  );
}