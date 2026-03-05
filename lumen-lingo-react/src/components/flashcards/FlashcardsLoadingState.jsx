import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "../utils/translations";
import { useLanguage } from "../language/LanguageContext";

export default function FlashcardsLoadingState() {
  const { sourceLanguage } = useLanguage();
  const t = useTranslations(sourceLanguage);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-white text-xl flex flex-col items-center gap-4"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full"
        />
        <p>{t('loading')}...</p>
      </motion.div>
    </div>
  );
}