import React from "react";
import { motion } from "framer-motion";
import { Star, Zap } from "lucide-react";
import { useLanguage } from "../language/LanguageContext";
import { useTranslations } from "../utils/translations";

export default function ScoreDisplay({ score, streak, level }) {
  const { sourceLanguage } = useLanguage();
  const t = useTranslations(sourceLanguage);
  return (
    <motion.div
      className="flex items-center gap-2 sm:gap-4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/20">
        <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
        <span className="text-white font-bold text-sm sm:text-base">{score}</span>
      </div>
      
      {streak !== undefined && streak > 0 && (
        <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/20">
          <Star className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
          <span className="text-white font-bold text-sm sm:text-base">{streak}</span>
        </div>
      )}

      {level && (
        <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
          <span className="text-white font-bold">{t('level')} {level}</span>
        </div>
      )}
    </motion.div>
  );
}