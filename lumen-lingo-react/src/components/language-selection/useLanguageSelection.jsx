import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { setLocalData, getLocalData, STORAGE_KEYS } from "../utils/offlineSync";
import { useTranslations } from "../utils/translations";

const TOP_LANGUAGE_PAIRS = [
  { source: "english", target: "spanish" },
  { source: "spanish", target: "english" },
  { source: "polish", target: "english" },
  { source: "polish", target: "spanish" },
  { source: "polish", target: "german" },
  { source: "german", target: "english" },
  { source: "german", target: "spanish" }
];

const isTopLanguagePair = (source, target) => {
  return TOP_LANGUAGE_PAIRS.some(
    pair => pair.source === source && pair.target === target
  );
};

export default function useLanguageSelection() {
  const navigate = useNavigate();
  const [selectedSource, setSelectedSource] = useState("english");
  const [selectedTarget, setSelectedTarget] = useState("spanish");
  const [saving, setSaving] = useState(false);
  const [enabledPairs, setEnabledPairs] = useState([]);
  const [error, setError] = useState("");

  const t = useTranslations(selectedSource);

  useEffect(() => {
    loadInitialLanguage();
    
    const handleStorageChange = (e) => {
      if (e.key === 'lumenlingo_enabled_pairs' && e.newValue) {
        try {
          const pairs = JSON.parse(e.newValue);
          setEnabledPairs(pairs);
        } catch (error) {
          console.error("Error parsing enabled pairs:", error);
        }
      }
    };
    
    const handleEnabledPairsChanged = (e) => {
      if (e.detail) {
        setEnabledPairs(e.detail);
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('enabledPairsChanged', handleEnabledPairsChanged);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('enabledPairsChanged', handleEnabledPairsChanged);
    };
  }, []);

  const loadInitialLanguage = async () => {
    try {
      const localLangPref = getLocalData(STORAGE_KEYS.LANGUAGE_PREFERENCE);
      if (localLangPref) {
        setSelectedSource(localLangPref.source_language);
        setSelectedTarget(localLangPref.target_language);
      }

      const storedEnabledPairs = localStorage.getItem('lumenlingo_enabled_pairs');
      if (storedEnabledPairs) {
        const pairs = JSON.parse(storedEnabledPairs);
        setEnabledPairs(pairs);
      }
    } catch (error) {
      console.error("Error loading preferences:", error);
    }
  };

  const isTargetAvailable = useMemo(() => {
    return (targetCode) => {
      if (selectedSource === targetCode) return false;
      if (isTopLanguagePair(selectedSource, targetCode)) return true;
      return enabledPairs.includes(`${selectedSource}-${targetCode}`);
    };
  }, [selectedSource, enabledPairs]);

  const sourceLanguages = [
    { code: "english", name: "English", flag: "🇬🇧" },
    { code: "polish", name: "Polski", flag: "🇵🇱" },
    { code: "spanish", name: "Español", flag: "🇪🇸" },
    { code: "german", name: "Deutsch", flag: "🇩🇪" },
    { code: "ukrainian", name: "Українська", flag: "🇺🇦" },
    { code: "french", name: "Français", flag: "🇫🇷" },
    { code: "arabic", name: "العربية", flag: "🇸🇦" },
    { code: "chinese", name: "中文", flag: "🇨🇳" },
    { code: "japanese", name: "日本語", flag: "🇯🇵"}
  ];

  const targetLanguages = [
    { code: "spanish", name: "Español", flag: "🇪🇸" },
    { code: "english", name: "English", flag: "🇬🇧" },
    { code: "polish", name: "Polski", flag: "🇵🇱" },
    { code: "german", name: "Deutsch", flag: "🇩🇪" },
    { code: "ukrainian", name: "Українська", flag: "🇺🇦" },
    { code: "french", name: "Français", flag: "🇫🇷" },
    { code: "arabic", name: "العربية", flag: "🇸🇦" },
    { code: "chinese", name: "中文", flag: "🇨🇳" },
    { code: "japanese", name: "日本語", flag: "🇯🇵" }
  ];

  useEffect(() => {
    const availableTargets = targetLanguages.filter(lang => {
      if (selectedSource === lang.code) return false;
      if (isTopLanguagePair(selectedSource, lang.code)) return true;
      return enabledPairs.includes(`${selectedSource}-${lang.code}`);
    });

    if (availableTargets.length > 0 && (!selectedTarget || !isTargetAvailable(selectedTarget))) {
      setSelectedTarget(availableTargets[0].code);
    } else if (availableTargets.length === 0) {
      setSelectedTarget("");
    }
  }, [selectedSource, enabledPairs, isTargetAvailable, selectedTarget, targetLanguages]);

  const handleSourceChange = (sourceCode) => {
    setSelectedSource(sourceCode);
  };

  const handleTargetChange = (targetCode) => {
    if (isTargetAvailable(targetCode)) {
      setSelectedTarget(targetCode);
    }
  };

  const hasValidSelection = useMemo(() => {
    return selectedSource && selectedTarget && selectedSource !== selectedTarget && isTargetAvailable(selectedTarget);
  }, [selectedSource, selectedTarget, isTargetAvailable]);

  const handleSave = async () => {
    if (!hasValidSelection) return;
    
    setSaving(true);
    setError("");

    try {
      const langPref = {
        source_language: selectedSource,
        target_language: selectedTarget,
        is_active: true,
        is_enabled: true
      };
      
      setLocalData(STORAGE_KEYS.LANGUAGE_PREFERENCE, langPref);
      window.dispatchEvent(new Event('languagePreferenceChanged'));
      
      await new Promise(resolve => setTimeout(resolve, 300));
      
      navigate(createPageUrl("Dashboard"));
    } catch (error) {
      console.error("Error saving language preference:", error);
      setError(t('save_error'));
    } finally {
      setSaving(false);
    }
  };

  const availableTargetLanguages = useMemo(() => {
    return targetLanguages.filter(lang => isTargetAvailable(lang.code));
  }, [selectedSource, enabledPairs, isTargetAvailable, targetLanguages]);

  const unavailableTargetLanguages = useMemo(() => {
    return targetLanguages.filter(lang => {
      if (selectedSource === lang.code) return false;
      return !isTargetAvailable(lang.code);
    });
  }, [selectedSource, enabledPairs, isTargetAvailable, targetLanguages]);

  return {
    selectedSource,
    selectedTarget,
    saving,
    error,
    sourceLanguages,
    targetLanguages,
    availableTargetLanguages,
    unavailableTargetLanguages,
    hasValidSelection,
    isTargetAvailable,
    handleSourceChange,
    handleTargetChange,
    handleSave,
    t
  };
}