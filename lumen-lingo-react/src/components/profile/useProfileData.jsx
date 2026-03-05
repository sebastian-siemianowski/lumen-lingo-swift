import { useState, useEffect } from "react";
import { base44 } from '@/api/base44Client';
import { setLocalData, getLocalData, STORAGE_KEYS } from '../utils/offlineSync';

export default function useProfileData() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadProfileData = async () => {
    try {
      // Always get fresh user data from API
      const currentUser = await base44.auth.me();
      
      if (currentUser) {
        // Save to localStorage for offline use
        setLocalData(STORAGE_KEYS.USER_DATA, currentUser);
        setUser(currentUser);
      }
    } catch (error) {
      console.error("Error loading profile:", error);
    }
    setIsLoading(false);
  };

  // 1) Hydrate immediately from localStorage to avoid loading screen
  useEffect(() => {
    try {
      const cached = getLocalData(STORAGE_KEYS.USER_DATA);
      if (cached) {
        setUser(cached);
        setIsLoading(false);
      }
    } catch {}
  }, []);

  // 2) Refresh from API in background
  useEffect(() => {
    loadProfileData();
  }, []);

  return { user, isLoading, loadProfileData };
}