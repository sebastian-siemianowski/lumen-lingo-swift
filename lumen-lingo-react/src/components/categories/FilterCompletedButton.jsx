import React from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
import { useTranslations } from '../utils/translations';
import { useLanguage } from '../language/LanguageContext';

export default function FilterCompletedButton({ isActive, onToggle }) {
  const { sourceLanguage } = useLanguage();
  const t = useTranslations(sourceLanguage);

  return (
    <motion.button
      onClick={onToggle}
      whileHover={{ scale: 1.05, y: -1 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="relative p-2.5 sm:p-3 rounded-xl overflow-hidden"
      style={{
        background: isActive
          ? 'rgba(255, 255, 255, 0.18)'
          : 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.25)',
        boxShadow: isActive
          ? '0 0 15px rgba(255, 255, 255, 0.2), 0 2px 8px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          : '0 2px 6px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
      }}
      aria-label={isActive ? t('show_all') : t('hide_completed')}
    >
      <div
        className="absolute inset-x-0 top-0 h-1/2 rounded-t-xl pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%)'
        }}
      />
      
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          background: 'linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)'
        }}
        initial={{ x: '-150%', opacity: 0 }}
        whileHover={{ 
          x: '150%',
          opacity: 1,
          transition: { duration: 0.7, ease: "easeInOut" }
        }}
      />

      <motion.div
        className="relative z-10"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 500, damping: 25 }}
      >
        {isActive ? (
          <EyeOff 
            className="w-[22px] h-[22px] text-white"
            strokeWidth={2.5}
            style={{
              filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.15))'
            }}
          />
        ) : (
          <Eye 
            className="w-[22px] h-[22px] text-white/75"
            strokeWidth={2.5}
            style={{
              filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.15))'
            }}
          />
        )}
      </motion.div>
    </motion.button>
  );
}