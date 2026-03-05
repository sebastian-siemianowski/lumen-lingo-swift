import { base44 } from "@/api/base44Client";
import { 
  getLocalData, 
  setLocalData, 
  markPendingSync, 
  clearMemoryCache,
  STORAGE_KEYS,
  MAX_PROGRESS_RECORDS 
} from "../offlineSync";
import { getAllMasteredItems, getAllFavorites } from "./dataCollectors";
import { getSettings, applySettings } from "./settingsManager";

// Upload data to server
export const uploadDataToServer = async () => {
  try {
    const user = await base44.auth.me();
    if (!user?.email) throw new Error('Not authenticated');
    
    setLocalData(STORAGE_KEYS.USER_DATA, user);

    console.log('🚀 UPLOAD - Starting sync to server');

    const r = {
      success: true,
      uploaded: [],
      details: [],
      errors: []
    };

    // Parallel execution
    const operations = [];

    // Profile
    operations.push((async () => {
      try {
        const prof = getLocalData(STORAGE_KEYS.USER_PROFILE) || {};
        const settings = getSettings();
        
        const toUpload = {
          ...prof,
          preferences: {
            ...(prof.preferences || {}),
            ...settings
          }
        };
        
        const serverProfs = await base44.entities.UserProfile.filter({ created_by: user.email });
        
        if (serverProfs.length > 0) {
          await base44.entities.UserProfile.update(serverProfs[0].id, toUpload);
          r.uploaded.push('Profile');
          r.details.push({ entity: 'Profile', action: 'saved', info: `Level ${prof.current_level||1} • ${prof.total_xp||0} XP • ${prof.daily_streak||0} day streak` });
        } else {
          await base44.entities.UserProfile.create(toUpload);
          r.uploaded.push('Profile');
          r.details.push({ entity: 'Profile', action: 'created', info: `New profile created` });
        }
      } catch (e) {
        r.errors.push({ entity: 'Profile', error: e.message });
      }
    })());

    // Mastered
    operations.push((async () => {
      try {
        const items = getAllMasteredItems();
        const existing = await base44.entities.MasteredContent.filter({ created_by: user.email });
        
        const localItemIdentifiers = new Set(
          items.map(i => `${i.game_type}_${i.category}_${i.content_id}_${i.source_language}_${i.target_language}`)
        );
        
        const toDelete = existing.filter(e => {
          const identifier = `${e.game_type}_${e.category}_${e.content_id}_${e.source_language}_${e.target_language}`;
          return !localItemIdentifiers.has(identifier);
        });
        
        const existingIdentifiers = new Set(
          existing.map(e => `${e.game_type}_${e.category}_${e.content_id}_${e.source_language}_${e.target_language}`)
        );
        
        const toCreate = items.filter(i => {
          const identifier = `${i.game_type}_${i.category}_${i.content_id}_${i.source_language}_${i.target_language}`;
          return !existingIdentifiers.has(identifier);
        });
        
        await Promise.all([
          ...(toDelete.length > 0 ? toDelete.map(x => base44.entities.MasteredContent.delete(x.id)) : []),
          ...(toCreate.length > 0 ? [base44.entities.MasteredContent.bulkCreate(toCreate)] : [])
        ]);
        
        if (items.length > 0 || toDelete.length > 0) {
          r.uploaded.push(`Mastered (${items.length})`);
          const changeDesc = toCreate.length > 0 && toDelete.length > 0 
            ? `${toCreate.length} new, ${toDelete.length} removed`
            : toCreate.length > 0
              ? `${toCreate.length} words mastered`
              : `${toDelete.length} removed`;
          r.details.push({ entity: 'Mastered Words', action: 'saved', info: changeDesc });
        } else {
          r.details.push({ entity: 'Mastered Words', action: 'saved', info: 'No mastered content yet' });
        }
      } catch (e) {
        r.errors.push({ entity: 'Mastered', error: e.message });
      }
    })());

    // Progress
    operations.push((async () => {
      try {
        const localProgress = getLocalData(STORAGE_KEYS.GAME_PROGRESS) || [];
        const serverProgress = await base44.entities.GameProgress.filter({ created_by: user.email }, '-created_date', 1000);
        
        const serverIdentifiers = new Set(
          serverProgress.map(p => 
            `${p.game_type}_${p.level}_${p.score}_${p.correct_answers}_${p.total_questions}_${p.source_language}_${p.target_language}_${p.created_date}`
          )
        );
        
        const toUpload = localProgress.filter(p => {
          const identifier = `${p.game_type}_${p.level}_${p.score}_${p.correct_answers}_${p.total_questions}_${p.source_language}_${p.target_language}_${p.created_date}`;
          return !serverIdentifiers.has(identifier);
        });
        
        if (toUpload.length > 0) {
          await base44.entities.GameProgress.bulkCreate(toUpload);
          r.uploaded.push(`Progress (${toUpload.length} new)`);
          r.details.push({ 
            entity: 'Recent Activity', 
            action: 'saved', 
            info: `${toUpload.length} new game ${toUpload.length === 1 ? 'session' : 'sessions'} uploaded` 
          });
        } else {
          r.details.push({ 
            entity: 'Recent Activity', 
            action: 'saved', 
            info: localProgress.length > 0 ? `${localProgress.length} ${localProgress.length === 1 ? 'session' : 'sessions'} already synced` : 'No activity yet' 
          });
        }
      } catch (e) {
        r.errors.push({ entity: 'Recent Activity', error: e.message });
      }
    })());

    // Favorites
    operations.push((async () => {
      try {
        const items = getAllFavorites();
        const existing = await base44.entities.FavoriteCategory.filter({ created_by: user.email });
        
        const localItemIdentifiers = new Set(
          items.map(i => `${i.game_type}_${i.category_key}_${i.source_language}_${i.target_language}`)
        );
        
        const toDelete = existing.filter(e => {
          const identifier = `${e.game_type}_${e.category_key}_${e.source_language}_${e.target_language}`;
          return !localItemIdentifiers.has(identifier);
        });
        
        const existingIdentifiers = new Set(
          existing.map(e => `${e.game_type}_${e.category_key}_${e.source_language}_${e.target_language}`)
        );
        
        const toCreate = items.filter(i => {
          const identifier = `${i.game_type}_${i.category_key}_${i.source_language}_${i.target_language}`;
          return !existingIdentifiers.has(identifier);
        });
        
        await Promise.all([
          ...(toDelete.length > 0 ? toDelete.map(x => base44.entities.FavoriteCategory.delete(x.id)) : []),
          ...(toCreate.length > 0 ? [base44.entities.FavoriteCategory.bulkCreate(toCreate)] : [])
        ]);

        if (items.length > 0 || toDelete.length > 0) {
          r.uploaded.push(`Favorites (${items.length})`);
          const changeDesc = toCreate.length > 0 && toDelete.length > 0 
            ? `${toCreate.length} added, ${toDelete.length} removed`
            : toCreate.length > 0
              ? `${toCreate.length} ${toCreate.length === 1 ? 'category' : 'categories'} favorited`
              : `${toDelete.length} unfavorited`;
          r.details.push({ entity: 'Favorites', action: 'saved', info: changeDesc });
        } else {
          r.details.push({ entity: 'Favorites', action: 'saved', info: 'No favorites yet' });
        }
      } catch (e) {
        r.errors.push({ entity: 'Favorites', error: e.message });
      }
    })());

    // Language
    operations.push((async () => {
      try {
        const lang = getLocalData(STORAGE_KEYS.LANGUAGE_PREFERENCE);
        if (lang) {
          const serverLangs = await base44.entities.UserLanguagePreference.filter({ created_by: user.email, is_active: true });
          
          if (serverLangs.length > 0) {
            await Promise.all(serverLangs.map(p => base44.entities.UserLanguagePreference.update(p.id, { is_active: false })));
          }
          
          await base44.entities.UserLanguagePreference.create(lang);
          r.uploaded.push('Language');
          const srcName = lang.source_language.charAt(0).toUpperCase() + lang.source_language.slice(1);
          const tgtName = lang.target_language.charAt(0).toUpperCase() + lang.target_language.slice(1);
          r.details.push({ entity: 'Learning', action: 'saved', info: `${srcName} → ${tgtName}` });
        }
      } catch (e) {
        r.errors.push({ entity: 'Language', error: e.message });
      }
    })());

    await Promise.all(operations);

    if (r.errors.length === 0) {
      const now = new Date().toISOString();
      const key = STORAGE_KEYS.LAST_SYNC;
      localStorage.setItem(key, now);
      if (!key.startsWith('preview_')) {
        localStorage.setItem(`preview_${key}`, now);
      }
      markPendingSync(false);
    } else {
      r.success = false;
    }

    return r;
  } catch (error) {
    return { success: false, uploaded: [], details: [], errors: [{ entity: 'Upload', error: error.message }] };
  }
};

// Download data from server
export const downloadDataFromServer = async () => {
  try {
    const user = await base44.auth.me();
    if (!user?.email) throw new Error('Not authenticated');
    
    setLocalData(STORAGE_KEYS.USER_DATA, user);

    console.log('🚀 DOWNLOAD - Starting sync from server');

    const r = { success: true, downloaded: [], details: [], errors: [] };

    const [profiles, masteredItems, progressItems, favoriteItems, languagePrefs] = await Promise.all([
      base44.entities.UserProfile.filter({ created_by: user.email }).catch(e => { r.errors.push({ entity: 'Profile', error: e.message }); return []; }),
      base44.entities.MasteredContent.filter({ created_by: user.email }).catch(e => { r.errors.push({ entity: 'Mastered', error: e.message }); return []; }),
      base44.entities.GameProgress.filter({ created_by: user.email }, '-created_date', MAX_PROGRESS_RECORDS).catch(e => { r.errors.push({ entity: 'Progress', error: e.message }); return []; }),
      base44.entities.FavoriteCategory.filter({ created_by: user.email }).catch(e => { r.errors.push({ entity: 'Favorites', error: e.message }); return []; }),
      base44.entities.UserLanguagePreference.filter({ created_by: user.email, is_active: true }).catch(e => { r.errors.push({ entity: 'Language', error: e.message }); return []; })
    ]);

    // Profile
    if (profiles.length > 0) {
      const p = profiles[0];
      
      if (p.preferences) {
        applySettings(p.preferences);
      }
      
      setLocalData(STORAGE_KEYS.USER_PROFILE, p);
      r.downloaded.push('Profile');
      r.details.push({ entity: 'Profile', action: 'restored', info: `Level ${p.current_level||1} • ${p.total_xp||0} XP • ${p.daily_streak||0} day streak` });
    } else {
      r.details.push({ entity: 'Profile', action: 'not found', info: 'No profile data found' });
    }

    // Mastered
    if (masteredItems.length > 0) {
      const byKey = {};
      masteredItems.forEach(x => {
        const k = `mastered_${x.game_type}_${x.source_language}_${x.target_language}`;
        if (!byKey[k]) byKey[k] = {};
        const c = x.category || 'default';
        if (!byKey[k][c]) byKey[k][c] = [];
        byKey[k][c].push(x.content_id);
      });
      
      Object.entries(byKey).forEach(([k, d]) => {
        setLocalData(k, d);
      });
      
      r.downloaded.push(`Mastered (${masteredItems.length})`);
      r.details.push({ entity: 'Mastered Words', action: 'restored', info: `${masteredItems.length} ${masteredItems.length === 1 ? 'word' : 'words'} mastered` });
    } else {
      r.details.push({ entity: 'Mastered Words', action: 'restored', info: 'No mastered content found' });
    }

    // Progress
    const trimmedProgress = progressItems.slice(0, MAX_PROGRESS_RECORDS);
    setLocalData(STORAGE_KEYS.GAME_PROGRESS, trimmedProgress);
    r.downloaded.push(`Progress (${trimmedProgress.length})`);
    r.details.push({ entity: 'Recent Activity', action: 'restored', info: trimmedProgress.length > 0 ? `${trimmedProgress.length} recent game ${trimmedProgress.length === 1 ? 'session' : 'sessions'}` : 'No activity yet' });

    // Favorites
    if (favoriteItems.length > 0) {
      const byKey = {};
      favoriteItems.forEach(x => {
        const k = `favorites_${x.game_type}_${x.source_language}_${x.target_language}`;
        if (!byKey[k]) byKey[k] = [];
        byKey[k].push(x.category_key);
      });
      
      Object.entries(byKey).forEach(([k, d]) => {
        setLocalData(k, d);
      });
      
      r.downloaded.push(`Favorites (${favoriteItems.length})`);
      r.details.push({ entity: 'Favorites', action: 'restored', info: `${favoriteItems.length} favorite ${favoriteItems.length === 1 ? 'category' : 'categories'}` });
    } else {
      r.details.push({ entity: 'Favorites', action: 'restored', info: 'No favorites found' });
    }

    // Language
    if (languagePrefs.length > 0) {
      const l = languagePrefs[0];
      setLocalData(STORAGE_KEYS.LANGUAGE_PREFERENCE, l);
      r.downloaded.push('Language');
      const srcName = l.source_language.charAt(0).toUpperCase() + l.source_language.slice(1);
      const tgtName = l.target_language.charAt(0).toUpperCase() + l.target_language.slice(1);
      r.details.push({ entity: 'Learning', action: 'restored', info: `${srcName} → ${tgtName}` });
    } else {
      const existingLang = getLocalData(STORAGE_KEYS.LANGUAGE_PREFERENCE);
      if (existingLang) {
        const srcName = existingLang.source_language.charAt(0).toUpperCase() + existingLang.source_language.slice(1);
        const tgtName = existingLang.target_language.charAt(0).toUpperCase() + existingLang.target_language.slice(1);
        r.details.push({ entity: 'Learning', action: 'kept local', info: `${srcName} → ${tgtName} (using local)` });
      } else {
        r.details.push({ entity: 'Learning', action: 'not found', info: 'No language preference found' });
      }
    }

    if (r.errors.length === 0) {
      const now = new Date().toISOString();
      const key = STORAGE_KEYS.LAST_SYNC;
      localStorage.setItem(key, now);
      if (!key.startsWith('preview_')) {
        localStorage.setItem(`preview_${key}`, now);
      }
      markPendingSync(false);
      clearMemoryCache();
    } else {
      r.success = false;
    }

    return r;
  } catch (error) {
    return { success: false, downloaded: [], details: [], errors: [{ entity: 'Download', error: error.message }] };
  }
};