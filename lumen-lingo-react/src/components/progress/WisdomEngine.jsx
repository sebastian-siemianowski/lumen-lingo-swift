import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../language/LanguageContext";
import { useTranslations } from "../utils/translations";
import { useDarkMode } from "../theme/DarkModeContext";

export default function WisdomEngine() {
  const { sourceLanguage } = useLanguage();
  const t = useTranslations(sourceLanguage);
  const { darkMode } = useDarkMode();

  if (!sourceLanguage || !t) {
    return null;
  }

  const messageKeys = useMemo(() => [
    'moral_quote_1', 'moral_quote_2', 'moral_quote_3', 'moral_quote_4', 'moral_quote_5',
    'moral_quote_6', 'moral_quote_7', 'moral_quote_8', 'moral_quote_9', 'moral_quote_10',
    'moral_quote_11', 'moral_quote_12', 'moral_quote_13', 'moral_quote_14', 'moral_quote_15',
    'moral_quote_16', 'moral_quote_17', 'moral_quote_18', 'moral_quote_19', 'moral_quote_20',
    'moral_quote_21', 'moral_quote_22', 'moral_quote_23', 'moral_quote_24', 'moral_quote_25',
    'moral_quote_26', 'moral_quote_27', 'moral_quote_28', 'moral_quote_29', 'moral_quote_30',
    'moral_quote_31', 'moral_quote_32', 'moral_quote_33', 'moral_quote_34', 'moral_quote_35',
    'moral_quote_36', 'moral_quote_37', 'moral_quote_38', 'moral_quote_39', 'moral_quote_40',
    'moral_quote_41', 'moral_quote_42', 'moral_quote_43', 'moral_quote_44', 'moral_quote_45',
    'moral_quote_46', 'moral_quote_47', 'moral_quote_48', 'moral_quote_49', 'moral_quote_50',
    'moral_quote_51', 'moral_quote_52', 'moral_quote_53', 'moral_quote_54', 'moral_quote_55',
    'moral_quote_56', 'moral_quote_57', 'moral_quote_58', 'moral_quote_59', 'moral_quote_60',
    'moral_quote_61', 'moral_quote_62', 'moral_quote_63', 'moral_quote_64', 'moral_quote_65',
    'moral_quote_66', 'moral_quote_67', 'moral_quote_68', 'moral_quote_69', 'moral_quote_70',
    'moral_quote_71', 'moral_quote_72', 'moral_quote_73', 'moral_quote_74', 'moral_quote_75',
    'moral_quote_76', 'moral_quote_77', 'moral_quote_78', 'moral_quote_79', 'moral_quote_80'
  ], []);

  const [seenQuotes, setSeenQuotes] = useState(() => {
    try {
      const saved = localStorage.getItem('lumenlingo_seenQuotes');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  const [messageIndex, setMessageIndex] = useState(() => {
    try {
      const saved = localStorage.getItem('lumenlingo_seenQuotes');
      const seen = saved ? new Set(JSON.parse(saved)) : new Set();
      const unseen = messageKeys.filter((_, i) => !seen.has(i));
      if (unseen.length > 0) {
        const unseenIndices = messageKeys.map((_, i) => i).filter(i => !seen.has(i));
        return unseenIndices[Math.floor(Math.random() * unseenIndices.length)];
      }
    } catch {}
    return Math.floor(Math.random() * messageKeys.length);
  });

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setSeenQuotes(prev => {
      const updated = new Set(prev);
      updated.add(messageIndex);
      if (updated.size >= messageKeys.length) {
        localStorage.setItem('lumenlingo_seenQuotes', JSON.stringify([messageIndex]));
        return new Set([messageIndex]);
      }
      localStorage.setItem('lumenlingo_seenQuotes', JSON.stringify([...updated]));
      return updated;
    });
  }, [messageIndex, messageKeys.length]);

  const cycleMessage = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setMessageIndex(prev => {
        const unseenIndices = messageKeys
          .map((_, i) => i)
          .filter(i => !seenQuotes.has(i) && i !== prev);

        if (unseenIndices.length > 0) {
          return unseenIndices[Math.floor(Math.random() * unseenIndices.length)];
        }
        let next;
        do {
          next = Math.floor(Math.random() * messageKeys.length);
        } while (next === prev && messageKeys.length > 1);
        return next;
      });
      setIsTransitioning(false);
    }, 300);
  }, [isTransitioning, messageKeys.length, seenQuotes]);

  const currentMessage = t(messageKeys[messageIndex]);

  return (
    <div 
      className="relative text-center cursor-pointer select-none min-h-[5rem] sm:min-h-[5.5rem] flex items-center justify-center px-4 sm:px-8 py-2"
      onClick={cycleMessage}
      title={t('click_for_another_quote')}
    >
      {darkMode && (
        <>
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(147, 51, 234, 0.28) 0%, rgba(59, 130, 246, 0.14) 45%, transparent 70%)',
              filter: 'blur(24px)',
              mixBlendMode: 'screen'
            }}
            initial={{ opacity: 0.2, scale: 0.97 }}
            animate={{ opacity: [0.2, 0.9, 0.2], scale: [0.97, 1.14, 0.97] }}
            transition={{ duration: 11, repeat: Infinity, ease: [0.37, 0, 0.63, 1], times: [0, 0.45, 1] }}
          />
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 50% 55%, rgba(216, 180, 254, 0.35) 0%, rgba(168, 85, 247, 0.28) 35%, transparent 55%)',
              filter: 'blur(16px)',
              mixBlendMode: 'screen'
            }}
            initial={{ opacity: 0.22, scale: 0.99 }}
            animate={{ opacity: [0.22, 0.68, 0.22], scale: [0.99, 1.14, 0.99] }}
            transition={{ duration: 12, repeat: Infinity, ease: [0.37, 0, 0.63, 1], delay: 0.8, times: [0, 0.5, 1] }}
          />
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 50% 52%, rgba(255,255,255,0.12) 0%, rgba(168, 85, 247, 0.4) 20%, rgba(59, 130, 246, 0.28) 38%, transparent 58%)',
              filter: 'blur(28px)',
              mixBlendMode: 'screen'
            }}
            initial={{ opacity: 0.15, scale: 0.96 }}
            animate={{ opacity: [0.15, 0.86, 0.15], scale: [0.96, 1.18, 0.96] }}
            transition={{ duration: 13, repeat: Infinity, ease: [0.37, 0, 0.63, 1], delay: 0.2, times: [0, 0.46, 1] }}
          />
          <motion.div
            className="absolute bottom-[18%] left-1/2 -translate-x-1/2 w-40 sm:w-64 h-[8px] rounded-full pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.6), rgba(59, 130, 246, 0.5), transparent)',
              filter: 'blur(10px)',
              mixBlendMode: 'screen'
            }}
            initial={{ opacity: 0.25, scaleX: 0.9 }}
            animate={{ opacity: [0.25, 0.92, 0.25], scaleX: [0.9, 1.25, 0.9] }}
            transition={{ duration: 9.5, repeat: Infinity, ease: [0.37, 0, 0.63, 1], delay: 0.3, times: [0, 0.48, 1] }}
          />
        </>
      )}
      <motion.div
        initial={{ scale: 1, y: 0 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 8, ease: [0.45, 0, 0.55, 1], repeat: Infinity }}
        style={{ willChange: 'transform' }}
      >
      <motion.div
        initial={{ scale: 1, y: 0 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 8, ease: [0.45, 0, 0.55, 1], repeat: Infinity }}
        style={{ willChange: 'transform' }}
      >
      <AnimatePresence mode="wait">
        <motion.p
          key={messageIndex}
          initial={{ opacity: 0, filter: isMobile ? 'blur(4px)' : 'blur(10px)', y: isMobile ? 4 : 8 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          exit={{ opacity: 0, filter: isMobile ? 'blur(4px)' : 'blur(10px)', y: isMobile ? -4 : -8 }}
          transition={{ duration: isMobile ? 0.25 : 0.5, ease: isMobile ? 'easeOut' : [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-base md:text-lg italic leading-relaxed sm:leading-loose font-medium max-w-3xl"
          style={{ 
            color: 'white',
            letterSpacing: '0.015em',
            textShadow: darkMode 
              ? isMobile 
                ? '0 2px 8px rgba(168, 85, 247, 0.6), 0 4px 16px rgba(139, 92, 246, 0.4)'
                : '0 2px 12px rgba(168, 85, 247, 0.7), 0 4px 24px rgba(139, 92, 246, 0.5), 0 8px 40px rgba(168, 85, 247, 0.4), 0 0 60px rgba(192, 132, 252, 0.3)'
              : isMobile
                ? '0 1px 3px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(0, 0, 0, 0.1)'
                : '0 2px 6px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.15), 0 8px 24px rgba(0, 0, 0, 0.1)',
            filter: darkMode 
              ? isMobile 
                ? 'drop-shadow(0 0 6px rgba(168, 85, 247, 0.4))'
                : 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.5)) drop-shadow(0 0 16px rgba(139, 92, 246, 0.3))'
              : isMobile
                ? 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.12))'
                : 'drop-shadow(0 3px 8px rgba(0, 0, 0, 0.15)) drop-shadow(0 6px 16px rgba(0, 0, 0, 0.1))'
          }}
        >
          {currentMessage}
        </motion.p>
      </AnimatePresence>
      </motion.div>
      </motion.div>
    </div>
  );
}