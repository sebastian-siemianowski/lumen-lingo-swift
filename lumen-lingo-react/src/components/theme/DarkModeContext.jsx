import React, { createContext, useContext, useState, useEffect } from "react";
import { getLocalData, setLocalData, STORAGE_KEYS } from "../utils/offlineSync";

const DarkModeContext = createContext();

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within DarkModeProvider");
  }
  return context;
};

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Try to get from user profile in localStorage first
    const profile = getLocalData(STORAGE_KEYS.USER_PROFILE);
    if (profile?.preferences?.dark_mode !== undefined) {
      return profile.preferences.dark_mode;
    }
    // Fall back to simple localStorage flag
    const stored = localStorage.getItem('lumenlingo_dark_mode');
    return stored === 'true';
  });
  const [loading, setLoading] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Listen for storage changes to update dark mode when downloading from cloud
  useEffect(() => {
    const handleStorageChange = () => {
      const stored = localStorage.getItem('lumenlingo_dark_mode');
      if (stored !== null) {
        const newDarkMode = stored === 'true';
        if (newDarkMode !== darkMode) {
          setDarkMode(newDarkMode);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('animationPreferencesChanged', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('animationPreferencesChanged', handleStorageChange);
    };
  }, [darkMode]);

  const toggleDarkMode = async () => {
    const newDarkMode = !darkMode;
    setIsTransitioning(true);
    setDarkMode(newDarkMode);
    localStorage.setItem('lumenlingo_dark_mode', newDarkMode);

    // Update in local storage profile
    const profile = getLocalData(STORAGE_KEYS.USER_PROFILE) || {};
    const updatedProfile = {
      ...profile,
      preferences: {
        ...profile.preferences,
        dark_mode: newDarkMode
      }
    };
    setLocalData(STORAGE_KEYS.USER_PROFILE, updatedProfile);
    
    // Clear transitioning state after animation completes (4+ seconds for smooth nebula fade)
    setTimeout(() => setIsTransitioning(false), 4500);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode, loading, isTransitioning }}>
      {children}
    </DarkModeContext.Provider>
  );
};