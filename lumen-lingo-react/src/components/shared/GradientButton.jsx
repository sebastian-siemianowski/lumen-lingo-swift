import React from "react";
import { motion } from "framer-motion";

export default function GradientButton({ 
  onClick, 
  disabled = false,
  icon: Icon,
  children,
  bgGradient = "from-purple-400/45 to-fuchsia-500/45",
  borderColor = "border-purple-300/70",
  glowColor = "shadow-purple-500/30",
  className = "",
  fullWidth = false,
  badge = null
}) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05, y: disabled ? 0 : -2 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className={`relative inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm overflow-hidden border ${borderColor} ${glowColor} shadow-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 ${fullWidth ? 'w-full justify-center' : ''} ${className}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${bgGradient} rounded-full`}></div>

      <div className="relative flex items-center gap-2">
        {Icon && <Icon className="w-4 h-4 text-white drop-shadow-md" strokeWidth={2.5} />}
        <span className="font-bold text-xs sm:text-sm text-white drop-shadow-sm">
          {children}
        </span>
        {badge}
      </div>
    </motion.button>
  );
}