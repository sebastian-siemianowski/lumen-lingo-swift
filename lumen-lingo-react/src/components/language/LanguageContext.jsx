import React, { createContext, useContext, useState, useEffect } from "react";
import { getLocalData, STORAGE_KEYS } from "../utils/offlineSync";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      languagePair: { source_language: 'english', target_language: 'spanish', is_active: true, is_enabled: true },
      loading: true,
      sourceLanguage: 'english',
      targetLanguage: 'spanish',
      refreshLanguagePreference: () => {}
    };
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [languagePair, setLanguagePair] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize language preference
  useEffect(() => {
    const initLanguage = async () => {
      try {
        // First check localStorage
        let stored = getLocalData(STORAGE_KEYS.LANGUAGE_PREFERENCE);
        
        // If no stored preference, try to fetch from server
        if (!stored || !stored.source_language || !stored.target_language) {
          try {
            const user = await base44.auth.me();
            if (user?.email) {
              const serverPrefs = await base44.entities.UserLanguagePreference.filter({ 
                created_by: user.email, 
                is_active: true 
              });
              
              if (serverPrefs.length > 0) {
                stored = serverPrefs[0];
                // Save to localStorage
                setLocalData(STORAGE_KEYS.LANGUAGE_PREFERENCE, stored);
              }
            }
          } catch (apiError) {
            console.log("Could not fetch language preference from server");
          }
        }
        
        if (stored && stored.source_language && stored.target_language) {
          setLanguagePair(stored);
        } else {
          // Only set default if nothing stored and nothing on server
          const defaultPair = {
            source_language: "english",
            target_language: "spanish",
            is_active: true,
            is_enabled: true
          };
          setLanguagePair(defaultPair);
          // Save default to localStorage
          setLocalData(STORAGE_KEYS.LANGUAGE_PREFERENCE, defaultPair);
        }
      } catch (error) {
        console.error("Error reading language preference:", error);
        const fallback = {
          source_language: "english",
          target_language: "spanish",
          is_active: true,
          is_enabled: true
        };
        setLanguagePair(fallback);
      } finally {
        setIsInitialized(true);
      }
    };

    initLanguage();
  }, []);

  const refreshLanguagePreference = () => {
    try {
      const stored = getLocalData(STORAGE_KEYS.LANGUAGE_PREFERENCE);
      if (stored && stored.source_language && stored.target_language) {
        setLanguagePair(stored);
      }
    } catch (error) {
      console.error("Error refreshing language preference:", error);
    }
  };

  // Listen for storage changes across tabs and custom events
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === STORAGE_KEYS.LANGUAGE_PREFERENCE && e.newValue) {
        try {
          const newValue = JSON.parse(e.newValue);
          if (newValue && newValue.source_language && newValue.target_language) {
            setLanguagePair(newValue);
          }
        } catch (error) {
          console.error("Error parsing storage change:", error);
        }
      }
    };

    const handleCustomChange = () => {
      refreshLanguagePreference();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('languagePreferenceChanged', handleCustomChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('languagePreferenceChanged', handleCustomChange);
    };
  }, []);

  // Render with a safe fallback context while initializing to avoid blank screens
  if (!isInitialized || !languagePair) {
    const fallback = {
      source_language: "english",
      target_language: "spanish",
      is_active: true,
      is_enabled: true
    };
    return (
      <LanguageContext.Provider value={{
        languagePair: fallback,
        loading: true,
        sourceLanguage: fallback.source_language,
        targetLanguage: fallback.target_language,
        refreshLanguagePreference
      }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  // Ensure we have valid language values
  const safeSourceLanguage = languagePair?.source_language || 'english';
  const safeTargetLanguage = languagePair?.target_language || 'spanish';

  return (
    <LanguageContext.Provider value={{ 
      languagePair, 
      loading: false,
      sourceLanguage: safeSourceLanguage,
      targetLanguage: safeTargetLanguage,
      refreshLanguagePreference
    }}>
      {children}
    </LanguageContext.Provider>
  );
};