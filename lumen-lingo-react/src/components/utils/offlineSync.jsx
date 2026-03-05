import { base44 } from "@/api/base44Client";
import { getFromStorage, getAllKeys, cleanupDuplicateKeys } from "./sync/storageUtils";

export const STORAGE_KEYS = {
  USER_PROFILE: 'lumenlingo_user_profile',
  USER_DATA: 'lumenlingo_user_data',
  MASTERED_CONTENT: 'lumenlingo_mastered_content',
  GAME_PROGRESS: 'lumenlingo_game_progress',
  FAVORITE_CATEGORIES: 'lumenlingo_favorite_categories',
  LANGUAGE_PREFERENCE: 'lumenlingo_language_preference',
  LAST_SYNC: 'lumenlingo_last_sync',
  PENDING_SYNC: 'lumenlingo_pending_sync'
};

export const MAX_PROGRESS_RECORDS = 50;

const memoryCache = {};

export const getLocalData = (key) => {
  if (memoryCache[key]) return memoryCache[key];

  try {
    const data = getFromStorage(key);
    const parsed = data ? JSON.parse(data) : null;
    if (parsed) memoryCache[key] = parsed;
    return parsed;
  } catch (error) {
    return null;
  }
};

export const setLocalData = (key, data) => {
  try {
    const baseKey = key.startsWith('preview_') ? key : key;
    const prefixedKey = key.startsWith('preview_') ? key : `preview_${key}`;
    
    let cleanData = data;
    if (Array.isArray(data)) {
      cleanData = Array.from(new Set(data.map(item => 
        typeof item === 'object' ? JSON.stringify(item) : item
      ))).map(item => 
        typeof item === 'string' && item.startsWith('{') ? JSON.parse(item) : item
      );
    } else if (typeof data === 'object' && data !== null) {
      cleanData = {};
      Object.keys(data).forEach(k => {
        if (Array.isArray(data[k])) {
          cleanData[k] = [...new Set(data[k])];
        } else {
          cleanData[k] = data[k];
        }
      });
    }
    
    const existingData = localStorage.getItem(baseKey);
    const newDataStr = JSON.stringify(cleanData);
    const dataChanged = existingData !== newDataStr;
    
    localStorage.setItem(baseKey, newDataStr);
    if (!key.startsWith('preview_')) {
      localStorage.setItem(prefixedKey, newDataStr);
    }
    
    memoryCache[key] = cleanData;
    
    const noSyncKeys = [
      STORAGE_KEYS.USER_DATA,
      STORAGE_KEYS.LAST_SYNC,
      'lumenlingo_dark_mode',
      'breathingOrbsEnabled',
      'breathingOrbsIntensity',
      'breathingOrbsSpeed',
      'breathingOrbsGradient',
      'breathingOrbsRaveMode',
      'quantumFlowEnabled',
      'quantumFlowScheme',
      'quantumFlowIntensity',
      'quantumFlowSpeed',
      'nebulaDriftEnabled',
      'nebulaDriftPreset',
      'nebulaDriftIntensity',
      'nebulaDriftSpeed',
      'cosmicPreviewMode',
      'lumenlingo_sound_enabled',
      'lumenlingo_sound_volume'
    ];
    
    const shouldSync = dataChanged && !noSyncKeys.some(k => key.includes(k));
    
    if (shouldSync) {
      markPendingSync(true);
    }
    
    return true;
  } catch (error) {
    return false;
  }
};

export const clearMemoryCache = (key = null) => {
  if (key) {
    delete memoryCache[key];
  } else {
    Object.keys(memoryCache).forEach(k => delete memoryCache[k]);
  }
};

export const getCurrentUser = async () => {
  try {
    const cachedUser = getLocalData(STORAGE_KEYS.USER_DATA);
    return cachedUser || null;
  } catch (error) {
    return null;
  }
};

export const clearUserData = () => {
  localStorage.removeItem(STORAGE_KEYS.USER_DATA);
  localStorage.removeItem(`preview_${STORAGE_KEYS.USER_DATA}`);
  delete memoryCache[STORAGE_KEYS.USER_DATA];
};

export const clearAllAppData = () => {
  try {
    const keys = getAllKeys();
    
    const appKeys = keys.filter(k => {
      const key = k.toLowerCase();
      
      if (key.includes('base44') || 
          key.includes('auth') || 
          key.includes('token') || 
          key.includes('session') ||
          key.includes('_user_') ||
          key.includes('oauth') ||
          key.includes('google') ||
          key.includes('credential')) {
        return false;
      }
      
      return (
        k.includes('lumenlingo_') || 
        k.includes('preview_lumenlingo_') ||
        k.includes('mastered_') ||
        k.includes('preview_mastered_') ||
        k.includes('favorites_') ||
        k.includes('preview_favorites_') ||
        k.includes('breathingOrbs') ||
        k.includes('preview_breathingOrbs') ||
        k.includes('flashcards_') ||
        k.includes('grammar_') ||
        k.includes('word_builder_') ||
        k.includes('preview_flashcards_') ||
        k.includes('preview_grammar_') ||
        k.includes('preview_word_builder_')
      );
    });
    
    console.log(`🧹 Clearing ${appKeys.length} app keys (preserving ${keys.length - appKeys.length} system keys)`);
    
    appKeys.forEach(key => {
      localStorage.removeItem(key);
    });
    
    clearMemoryCache();
    
    return { success: true, clearedKeys: appKeys.length, preservedKeys: keys.length - appKeys.length };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const initializeLocalStorage = () => {
  try {
    if (!getLocalData(STORAGE_KEYS.USER_PROFILE)) {
      setLocalData(STORAGE_KEYS.USER_PROFILE, {
        total_xp: 0,
        current_level: 1,
        daily_streak: 0,
        total_active_days: 0,
        last_activity_date: null,
        favorite_game: null,
        achievements: [],
        preferences: {
          difficulty: "beginner",
          sound_enabled: true,
          dark_mode: false
        }
      });
    }

    if (!getLocalData(STORAGE_KEYS.LANGUAGE_PREFERENCE)) {
      setLocalData(STORAGE_KEYS.LANGUAGE_PREFERENCE, {
        source_language: "english",
        target_language: "spanish",
        is_active: true,
        is_enabled: true
      });
    }

    markPendingSync(false);
  } catch (error) {
    // Silent fail
  }
};

export const migrateOldStorageKeys = () => {
  // Handled dynamically
};

export const markPendingSync = (hasPending) => {
  const key = STORAGE_KEYS.PENDING_SYNC;
  const value = hasPending ? 'true' : 'false';
  localStorage.setItem(key, value);
  if (!key.startsWith('preview_')) {
    localStorage.setItem(`preview_${key}`, value);
  }
  
  if (hasPending) {
    const timestampKey = `${key}_timestamp`;
    const timestamp = Date.now().toString();
    localStorage.setItem(timestampKey, timestamp);
    if (!timestampKey.startsWith('preview_')) {
      localStorage.setItem(`preview_${timestampKey}`, timestamp);
    }
  } else {
    const timestampKey = `${key}_timestamp`;
    localStorage.removeItem(timestampKey);
    localStorage.removeItem(`preview_${timestampKey}`);
  }
  
  window.dispatchEvent(new Event('pendingSyncChanged'));
};

export const hasPendingSync = () => {
  const isPending = getFromStorage(STORAGE_KEYS.PENDING_SYNC) === 'true';
  const timestamp = getFromStorage(`${STORAGE_KEYS.PENDING_SYNC}_timestamp`);
  
  if (isPending && !timestamp) {
    markPendingSync(false);
    return false;
  }
  
  return isPending;
};

export const getLastSyncTime = () => {
  return getFromStorage(STORAGE_KEYS.LAST_SYNC);
};

export const isOnline = () => {
  return navigator.onLine;
};

// Re-export from sync modules
export { uploadDataToServer, downloadDataFromServer } from "./sync/syncOperations";
export { getFromStorage, getAllKeys, cleanupDuplicateKeys };

if (typeof window !== 'undefined') {
  migrateOldStorageKeys();
  initializeLocalStorage();
  cleanupDuplicateKeys();
}