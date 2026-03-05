import { getAllKeys } from "./storageUtils";

export const getAllMasteredItems = () => {
  const all = [];
  const keys = getAllKeys();
  
  const cleanKeys = keys.filter(k => {
    if (k.includes('preview_preview_')) {
      const correctKey = k.replace('preview_preview_', 'preview_');
      return !keys.includes(correctKey);
    }
    return true;
  });
  
  cleanKeys.forEach(key => {
    if (key?.includes('mastered_flashcards') || key?.includes('mastered_grammar') || key?.includes('mastered_word')) {
      try {
        const data = localStorage.getItem(key);
        
        if (!data || data === '{}' || data === '[]' || data === 'null') {
          return;
        }
        
        const parsed = JSON.parse(data);
        const clean = key.replace('preview_preview_', 'preview_').replace('preview_', '');
        const parts = clean.split('_');
        const type = parts[1];
        const src = parts[2] || 'english';
        const tgt = parts[3] || 'spanish';
        
        if (typeof parsed === 'object' && !Array.isArray(parsed)) {
          Object.entries(parsed).forEach(([cat, items]) => {
            if (Array.isArray(items)) {
              const uniqueItems = [...new Set(items)];
              uniqueItems.forEach(id => {
                all.push({
                  game_type: type,
                  category: cat,
                  content_id: String(id),
                  mastered_count: 1,
                  source_language: src,
                  target_language: tgt
                });
              });
            }
          });
        }
      } catch (err) {
        // Silent fail
      }
    }
  });
  
  return all;
};

export const getAllFavorites = () => {
  const all = [];
  const keys = getAllKeys();
  
  const cleanKeys = keys.filter(k => {
    if (k.includes('preview_preview_')) {
      const correctKey = k.replace('preview_preview_', 'preview_');
      return !keys.includes(correctKey);
    }
    return true;
  });
  
  cleanKeys.forEach(key => {
    if (key?.includes('favorites_flashcards') || key?.includes('favorites_grammar') || key?.includes('favorites_word')) {
      try {
        const data = localStorage.getItem(key);
        
        if (!data || data === '[]' || data === 'null') {
          return;
        }
        
        const parsed = JSON.parse(data);
        const clean = key.replace('preview_preview_', 'preview_').replace('preview_', '');
        const parts = clean.split('_');
        const type = parts[1];
        const src = parts[2] || 'english';
        const tgt = parts[3] || 'spanish';
        
        if (Array.isArray(parsed)) {
          const uniqueParsed = [...new Set(parsed.map(item => 
            typeof item === 'object' ? JSON.stringify(item) : item
          ))].map(item => 
            typeof item === 'string' && item.startsWith('{') ? JSON.parse(item) : item
          );
          
          uniqueParsed.forEach(item => {
            const cat = typeof item === 'object' ? (item.category_key || item) : item;
            all.push({
              game_type: type,
              category_key: String(cat),
              source_language: src,
              target_language: tgt
            });
          });
        }
      } catch (err) {
        // Silent fail
      }
    }
  });
  
  return all;
};