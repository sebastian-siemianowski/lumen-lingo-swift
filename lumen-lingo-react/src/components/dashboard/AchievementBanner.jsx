import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, X, Sparkles } from "lucide-react";
import { useLanguage } from "../language/LanguageContext";
import { useTranslations } from "../utils/translations";

export default function AchievementBanner({ onClose }) {
  const { sourceLanguage } = useLanguage();
  const t = useTranslations(sourceLanguage);
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50"
      >
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 shadow-2xl border border-yellow-300/50 max-w-md">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <Trophy className="w-8 h-8 text-white animate-bounce" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold text-lg flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                {t('achievement_unlocked')}
              </h3>
              <p className="text-white/90">{t('great_job_progress')}</p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}