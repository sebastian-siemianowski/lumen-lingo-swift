import React from "react";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { useTranslations } from "../utils/translations";
import { useLanguage } from "../language/LanguageContext";

export default function WordBuilderContentUnavailable() {
  const { sourceLanguage, targetLanguage } = useLanguage();
  const t = useTranslations(sourceLanguage);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 max-w-md text-center"
      >
        <AlertCircle className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white mb-3">{t('content_not_available')}</h2>
        <p className="text-white/70 mb-6">
          {t('word_constructor')} {t('not_available_for_pair')} {t(sourceLanguage)} → {t(targetLanguage)}.
        </p>
        <p className="text-white/60 text-sm mb-6">
          {t('currently_available_only')}
        </p>
        <Link to={createPageUrl("Dashboard")}>
          <motion.button
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('back_to_dashboard')}
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}