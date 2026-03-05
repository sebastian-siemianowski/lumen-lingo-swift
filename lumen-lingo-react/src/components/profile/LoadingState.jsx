import React from "react";
import { useTranslations } from "../utils/translations";
import { useLanguage } from "../language/LanguageContext";
import useProfileData from "./useProfileData";

export default function LoadingState() {
  const { isLoading } = useProfileData();
  const { sourceLanguage } = useLanguage();
  const t = useTranslations(sourceLanguage);

  if (!isLoading) return null;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-white text-xl">{t('loading_profile')}</div>
    </div>
  );
}