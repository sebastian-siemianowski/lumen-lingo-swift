export const getFromStorage = (baseKey) => {
  const variants = [baseKey, `preview_${baseKey}`, `preview_preview_${baseKey}`];
  for (const key of variants) {
    const value = localStorage.getItem(key);
    if (value) return value;
  }
  return null;
};

export const getAllKeys = () => {
  const keys = [];
  
  try {
    const len = localStorage.length;
    for (let i = 0; i < len; i++) {
      const key = localStorage.key(i);
      if (key && typeof key === 'string') {
        keys.push(key);
      }
    }
  } catch (error) {
    console.error('Error enumerating localStorage:', error);
  }
  
  if (keys.length === 0) {
    const patterns = [
      'preview_mastered_flashcards_',
      'preview_mastered_grammar_',
      'preview_mastered_word_builder_',
      'mastered_flashcards_',
      'mastered_grammar_',
      'mastered_word_builder_',
      'preview_favorites_flashcards_',
      'preview_favorites_grammar_',
      'preview_favorites_word_builder_',
      'favorites_flashcards_',
      'favorites_grammar_',
      'favorites_word_builder_',
      'preview_lumenlingo_',
      'lumenlingo_'
    ];
    
    const languages = ['english', 'spanish', 'polish', 'german', 'ukrainian', 'french', 'arabic', 'chinese', 'japanese'];
    
    patterns.forEach(pattern => {
      if (pattern.includes('mastered_') || pattern.includes('favorites_')) {
        languages.forEach(src => {
          languages.forEach(tgt => {
            if (src !== tgt) {
              const testKey = `${pattern}${src}_${tgt}`;
              try {
                if (localStorage.getItem(testKey) !== null) {
                  keys.push(testKey);
                }
              } catch (e) {}
            }
          });
        });
      } else {
        const commonKeys = [
          'user_profile', 'user_data', 'game_progress', 'last_sync', 
          'pending_sync', 'language_preference', 'dark_mode', 'enabled_pairs'
        ];
        commonKeys.forEach(suffix => {
          const testKey = pattern + suffix;
          try {
            if (localStorage.getItem(testKey) !== null) {
              keys.push(testKey);
            }
          } catch (e) {}
        });
      }
    });
  }
  
  return keys;
};

export const cleanupDuplicateKeys = () => {
  try {
    const keysToClean = [];
    const len = localStorage.length;
    for (let i = 0; i < len; i++) {
      const key = localStorage.key(i);
      if (key && key.includes('preview_preview_')) {
        keysToClean.push(key);
      }
    }
    
    keysToClean.forEach(dupKey => {
      try {
        const data = localStorage.getItem(dupKey);
        if (!data) return;
        
        const correctKey = dupKey.replace('preview_preview_', 'preview_');
        let parsed = JSON.parse(data);
        
        if (Array.isArray(parsed)) {
          parsed = Array.from(new Set(parsed.map(item => 
            typeof item === 'object' ? JSON.stringify(item) : item
          ))).map(item => 
            typeof item === 'string' && item.startsWith('{') ? JSON.parse(item) : item
          );
        } else if (typeof parsed === 'object' && parsed !== null) {
          Object.keys(parsed).forEach(k => {
            if (Array.isArray(parsed[k])) {
              parsed[k] = [...new Set(parsed[k])];
            }
          });
        }
        
        localStorage.setItem(correctKey, JSON.stringify(parsed));
        localStorage.removeItem(dupKey);
      } catch (err) {
        // Silent fail
      }
    });
  } catch (error) {
    // Silent fail
  }
};