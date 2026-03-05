import React, { useState } from "react";
import LanguageSelector from "../language/LanguageSelector";
import { useLanguage } from "../language/LanguageContext";

export default function DashboardLanguageSelector() {
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const { sourceLanguage, targetLanguage, refreshLanguagePreference } = useLanguage();

  const handleClose = () => {
    setShowLanguageSelector(false);
    refreshLanguagePreference();
  };

  return showLanguageSelector ? (
    <LanguageSelector
      onClose={handleClose}
      initialSource={sourceLanguage}
      initialTarget={targetLanguage}
    />
  ) : null;
}