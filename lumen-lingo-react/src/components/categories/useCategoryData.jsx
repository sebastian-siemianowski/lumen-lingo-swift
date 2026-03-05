import { useState, useEffect, useMemo } from "react";
import { getGameContent } from "../utils/contentLoader";
import { getLocalData, setLocalData, STORAGE_KEYS } from "../utils/offlineSync";

export default function useCategoryData(gameType, sourceLanguage, targetLanguage) {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [hideCompleted, setHideCompleted] = useState(() => {
    const saved = localStorage.getItem(`${gameType}_hide_completed`);
    return saved === 'true';
  });

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      const data = await getGameContent(gameType, sourceLanguage, targetLanguage);
      setContent(data);
      setLoading(false);
    };

    loadContent();
  }, [gameType, sourceLanguage, targetLanguage]);

  useEffect(() => {
    localStorage.setItem(`${gameType}_hide_completed`, hideCompleted);
  }, [gameType, hideCompleted]);

  useEffect(() => {
    const loadFavorites = () => {
      const stored = getLocalData(STORAGE_KEYS.FAVORITE_CATEGORIES) || [];
      const gameFavorites = stored
        .filter(fav => fav.game_type === gameType && 
                      fav.source_language === sourceLanguage && 
                      fav.target_language === targetLanguage)
        .map(fav => fav.category_key);
      setFavorites(gameFavorites);
    };
    loadFavorites();
  }, [gameType, sourceLanguage, targetLanguage]);

  // Memoize mastered content to avoid repeated local storage reads
  const masteredContent = useMemo(() => {
    return getLocalData(STORAGE_KEYS.MASTERED_CONTENT) || [];
  }, []);

  const getCategoryProgress = useMemo(() => {
    return (categoryKey) => {
      const categories = content?.categories;

      if (!categories || !categories[categoryKey]) {
        return { total: 0, mastered: 0, percentage: 0, isComplete: false };
      }

      const categoryMastered = masteredContent.filter(
        m => m.game_type === gameType &&
             m.category === categoryKey &&
             m.source_language === sourceLanguage &&
             m.target_language === targetLanguage
      );

      const categoryData = categories[categoryKey];
      const total = categoryData.questions?.length || categoryData.words?.length || 0;
      const masteredCount = categoryMastered.length;
      const percentage = total > 0 ? Math.round((masteredCount / total) * 100) : 0;

      return { total, mastered: masteredCount, percentage, isComplete: percentage === 100 };
    };
  }, [content?.categories, masteredContent, gameType, sourceLanguage, targetLanguage]);

  // Pre-calculate all category progress
  const allCategoryProgress = useMemo(() => {
    const categories = content?.categories;
    if (!categories) return {};
    
    const progressMap = {};
    Object.keys(categories).forEach(key => {
      progressMap[key] = getCategoryProgress(key);
    });
    return progressMap;
  }, [content?.categories, getCategoryProgress]);

  const categoriesWithFavorites = useMemo(() => {
    const categories = content?.categories;
    if (!categories) return [];

    let categoryList = Object.keys(categories).map(key => ({
      key,
      ...categories[key],
      isFavorite: favorites.includes(key),
      progress: allCategoryProgress[key]
    }));

    if (hideCompleted) {
      categoryList = categoryList.filter(cat => !cat.progress?.isComplete);
    }

    if (showOnlyFavorites) {
      categoryList = categoryList.filter(cat => cat.isFavorite);
    }

    return categoryList.sort((a, b) => {
      if (a.isFavorite && !b.isFavorite) return -1;
      if (!a.isFavorite && b.isFavorite) return 1;
      return 0;
    });
  }, [content?.categories, favorites, hideCompleted, showOnlyFavorites, allCategoryProgress]);

  const handleToggleFavorite = (categoryKey, isFavorite) => {
    const allFavorites = getLocalData(STORAGE_KEYS.FAVORITE_CATEGORIES) || [];
    
    let newFavorites;
    if (isFavorite) {
      newFavorites = [...allFavorites, {
        game_type: gameType,
        category_key: categoryKey,
        source_language: sourceLanguage,
        target_language: targetLanguage
      }];
    } else {
      newFavorites = allFavorites.filter(
        fav => !(fav.game_type === gameType && 
                fav.category_key === categoryKey && 
                fav.source_language === sourceLanguage && 
                fav.target_language === targetLanguage)
      );
    }
    
    setLocalData(STORAGE_KEYS.FAVORITE_CATEGORIES, newFavorites);
    
    const gameFavorites = newFavorites
      .filter(fav => fav.game_type === gameType && 
                    fav.source_language === sourceLanguage && 
                    fav.target_language === targetLanguage)
      .map(fav => fav.category_key);
    setFavorites(gameFavorites);
  };

  return {
    loading,
    content,
    favorites,
    hideCompleted,
    setHideCompleted,
    getCategoryProgress,
    categoriesWithFavorites,
    handleToggleFavorite
  };
}