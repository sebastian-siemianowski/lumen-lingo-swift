import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "../utils/translations";
import { useLanguage } from "../language/LanguageContext";

export default function CategoryLoadingState() {
  const { sourceLanguage } = useLanguage();
  const t = useTranslations(sourceLanguage);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 1.02, filter: 'blur(10px)' }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen flex items-center justify-center"
    >
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
    </motion.div>
  );
}