/**
 * LAZY LOADING CONTENT LOADER
 * Only loads data when actually needed - massive performance improvement
 * No more loading ALL language pairs upfront
 */

// Cache to avoid re-importing the same data
const contentCache = {};

// Attempt to load a base data file, or fall back to concatenating _partN files
async function loadModuleOrParts(languagePair, baseFile, exportKey) {
  // 1) Try base file (non-part)
  try {
    const basePath = `../data/${languagePair}/${baseFile}`;
    const module = await import(/* @vite-ignore */ basePath);
    // The main file should have a default export or a named export matching exportKey
    const data = module.default || module[exportKey];
    if (data && typeof data === 'object' && Object.keys(data).length > 0) {
      return data;
    }
  } catch (e) {
    // Fallthrough to try loading parts
  }

  // 2) Try numbered parts if base file fails
  const MAX_PARTS = 50;
  let combined = {};
  let foundAny = false;

  for (let i = 1; i <= MAX_PARTS; i++) {
    try {
      const partPath = `../data/${languagePair}/${baseFile}_part${i}`;
      const mod = await import(/* @vite-ignore */ partPath);
      
      // Find the first exported object in the module. This is more robust.
      const exportedObject = Object.values(mod).find(v => typeof v === 'object' && v !== null && !Array.isArray(v));

      if (exportedObject) {
        combined = { ...combined, ...exportedObject };
        foundAny = true;
      } else {
         if (foundAny) break; // Stop if we hit a gap in numbering
      }
    } catch (e) {
      if (foundAny) break; // Stop on error if we've already found parts
    }
  }

  return foundAny ? combined : null;
}

/**
 * Dynamically import flashcards data for a specific language pair
 */
async function loadFlashcardsData(languagePair) {
  const cacheKey = `flashcards_${languagePair}`;
  if (contentCache[cacheKey]) return contentCache[cacheKey];

  const data = await loadModuleOrParts(languagePair, 'flashcardsData', 'flashcardsCategories');
  if (data) contentCache[cacheKey] = data;
  return data;
}

/**
 * Dynamically import grammar data for a specific language pair
 */
async function loadGrammarData(languagePair) {
  const cacheKey = `grammar_${languagePair}`;
  if (contentCache[cacheKey]) return contentCache[cacheKey];

  const data = await loadModuleOrParts(languagePair, 'grammarData', 'grammarCategories');
  if (data) contentCache[cacheKey] = data;
  return data;
}

/**
 * Dynamically import word builder data for a specific language pair
 */
async function loadWordBuilderData(languagePair) {
  const cacheKey = `word_builder_${languagePair}`;
  if (contentCache[cacheKey]) return contentCache[cacheKey];

  const data = await loadModuleOrParts(languagePair, 'wordBuilderData', 'wordBuilderCategories');
  if (data) contentCache[cacheKey] = data;
  return data;
}

/**
 * Main function to get game content - now async with lazy loading
 * @param {string} gameType - 'flashcards', 'grammar', or 'word_builder'
 * @param {string} sourceLanguage - e.g., 'english', 'polish'
 * @param {string} targetLanguage - e.g., 'spanish', 'english'
 * @returns {Promise<Object|null>} - The content data or null if not available
 */
export async function getGameContent(gameType, sourceLanguage, targetLanguage) {
  const languagePair = `${sourceLanguage}_${targetLanguage}`;
  
  try {
    let content = null;
    
    switch (gameType) {
      case 'flashcards':
        content = await loadFlashcardsData(languagePair);
        break;
      case 'grammar':
        content = await loadGrammarData(languagePair);
        break;
      case 'word_builder':
        content = await loadWordBuilderData(languagePair);
        break;
      default:
        // console.error('❌ [ContentLoader] Invalid game type:', gameType);
        return null;
    }
    
    if (!content) {
      // console.warn(`⚠️ [ContentLoader] No content found for ${gameType} with language pair: ${languagePair}`);
    }
    
    return content;
  } catch (error) {
    // console.error('❌ [ContentLoader] Error loading content:', error);
    return null;
  }
}

/**
 * Preload content for faster subsequent access (optional)
 * Call this when user hovers over a game card
 */
export function preloadGameContent(gameType, sourceLanguage, targetLanguage) {
  // Fire and forget - load in background
  getGameContent(gameType, sourceLanguage, targetLanguage).catch(() => {
    // Silently fail - it's just a preload
  });
}

/**
 * Clear the cache if needed (e.g., on language change)
 */
export function clearContentCache() {
  Object.keys(contentCache).forEach(key => delete contentCache[key]);
}