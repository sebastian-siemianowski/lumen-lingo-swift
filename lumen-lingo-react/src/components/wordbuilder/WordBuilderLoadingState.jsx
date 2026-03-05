import React from "react";
import { useTranslations } from "../utils/translations";
import { useLanguage } from "../language/LanguageContext";

export default function WordBuilderLoadingState() {
  const { sourceLanguage } = useLanguage();
  const t = useTranslations(sourceLanguage);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-white text-xl">{t('loading')}...</div>
    </div>
  );
}