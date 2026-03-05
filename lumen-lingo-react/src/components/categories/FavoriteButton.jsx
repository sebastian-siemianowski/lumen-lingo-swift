import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useLanguage } from "../language/LanguageContext";
import { useTranslations } from "../utils/translations";

export default function FavoriteButton({ isFavorite, onToggle, categoryName }) {
  const { sourceLanguage } = useLanguage();
  const t = useTranslations(sourceLanguage);
  const buttonRef = useRef(null);
  const [magneticOffset, setMagneticOffset] = useState({ x: 0, y: 0, rotate: 0 });

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const distance = Math.sqrt(distX * distX + distY * distY);
    const magnetRadius = 25;
    
    if (distance < magnetRadius) {
      const strength = 1 - (distance / magnetRadius);
      const moveX = distX * strength * 0.15;
      const moveY = distY * strength * 0.15;
      const rotate = (distX * strength * 0.08);
      setMagneticOffset({ x: moveX, y: moveY, rotate });
    }
  };

  const handleMouseLeave = () => {
    setMagneticOffset({ x: 0, y: 0, rotate: 0 });
  };

  return (
    <motion.button
      ref={buttonRef}
      onClick={(e) => {
        e.stopPropagation();
        onToggle(e);
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group/fav"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      aria-label={isFavorite ? t('remove_from_favorites') : t('add_to_favorites')}
    >
      {/* Atmospheric halo behind button */}
      <div 
        className={`absolute inset-0 rounded-xl blur-md pointer-events-none transition-opacity duration-300 ${
          isFavorite ? 'bg-white/15 opacity-100' : 'bg-white/10 opacity-60'
        }`}
        style={{
          transform: 'scale(1.3)',
        }}
      />
      
      <motion.div
                className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                animate={{
                  x: magneticOffset.x,
                  y: magneticOffset.y,
                  rotate: magneticOffset.rotate
                }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
                style={{
                  background: isFavorite 
                    ? 'linear-gradient(135deg, #f65c70 0%, #FA7383 35%, #FDA3A8 70%, #FCAEB1 100%)'
                    : 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: isFavorite 
                    ? '1px solid rgba(255, 255, 255, 0.6)' 
                    : '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: magneticOffset.x !== 0 || magneticOffset.y !== 0
                    ? (isFavorite
                      ? '0 6px 16px rgba(246, 92, 112, 0.4), 0 0 25px rgba(255, 255, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
                      : '0 4px 10px rgba(0, 0, 0, 0.12), 0 0 25px rgba(255, 255, 255, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.18)')
                    : (isFavorite
                      ? '0 4px 12px rgba(246, 92, 112, 0.3), 0 0 20px rgba(255, 255, 255, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
                      : '0 2px 6px rgba(0, 0, 0, 0.08), 0 0 20px rgba(255, 255, 255, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.15)')
                }}
              >
        {/* Top reflection */}
        <div
          className="absolute inset-x-0 top-0 h-1/2 rounded-t-xl pointer-events-none"
          style={{
            background: isFavorite
              ? 'linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, transparent 100%)'
              : 'linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, transparent 100%)'
          }}
        />

        {/* Subtle shimmer on hover only */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            background: 'linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.4) 50%, transparent 70%)'
          }}
          initial={{ x: '-150%', opacity: 0 }}
          whileHover={{ 
            x: '150%',
            opacity: 1,
            transition: { duration: 0.6, ease: "easeInOut" }
          }}
        />

        {/* Heart icon with simple bounce when favorited */}
        <motion.div
          className="relative z-10"
          animate={{
            scale: isFavorite ? [1, 1.15, 1] : 1,
          }}
          transition={{
            duration: 0.4,
            ease: [0.34, 1.56, 0.64, 1]
          }}
        >
          <Heart
            className={`w-4.5 h-4.5 sm:w-5 sm:h-5 transition-all duration-300 ${
              isFavorite 
                ? 'fill-white text-white' 
                : 'text-white/80 group-hover/fav:text-white'
            }`}
            strokeWidth={2.5}
            style={{
              filter: isFavorite 
                ? 'drop-shadow(0 2px 4px rgba(246, 92, 112, 0.3))' 
                : 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.15))'
            }}
          />
        </motion.div>
      </motion.div>

      {/* Single clean glow ring when favorited - appears once then fades */}
      {isFavorite && (
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            border: '1px solid rgba(255, 255, 255, 0.5)',
            background: 'transparent'
          }}
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{
            scale: 1.4,
            opacity: 0
          }}
          transition={{
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1]
          }}
        />
      )}
    </motion.button>
  );
}