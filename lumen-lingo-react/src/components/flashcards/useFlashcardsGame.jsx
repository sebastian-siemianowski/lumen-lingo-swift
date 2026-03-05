import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { getGameContent } from "../utils/contentLoader";
import { getLocalData, setLocalData, STORAGE_KEYS, MAX_PROGRESS_RECORDS } from "../utils/offlineSync";

export default function useFlashcardsGame(sourceLanguage, targetLanguage) {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryKey = urlParams.get('category') || 'greetings_basics';

  const [currentCard, setCurrentCard] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [showParticles, setShowParticles] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [startTime] = useState(Date.now());
  const [flashcards, setFlashcards] = useState([]);
  const [contentAvailable, setContentAvailable] = useState(true);
  const [masteredWords, setMasteredWords] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [allCategories, setAllCategories] = useState([]);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [continuousMode, setContinuousMode] = useState(() => {
    const saved = localStorage.getItem('flashcards_continuous_mode');
    return saved === 'true';
  });

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('flashcards_continuous_mode', continuousMode);
  }, [continuousMode]);

  useEffect(() => {
    const loadContent = async () => {
      if (!categoryKey) {
        return;
      }
      setLoading(true);
      
      try {
        const cacheKey = `mastered_flashcards_${sourceLanguage}_${targetLanguage}`;
        const cachedMastered = getLocalData(cacheKey);
        if (cachedMastered) {
          const categoryMastered = cachedMastered[categoryKey] || [];
          setMasteredWords(new Set(categoryMastered));
        }
      } catch (error) {
        // Silent error handling
      }

      try {
        const content = await getGameContent('flashcards', sourceLanguage, targetLanguage);

        if (!content) {
          setContentAvailable(false);
          setLoading(false);
          return;
        }

        const categories = Object.keys(content);
        setAllCategories(categories);
        const currentIndex = categories.indexOf(categoryKey);
        setCurrentCategoryIndex(currentIndex >= 0 ? currentIndex : 0);

        const category = content[categoryKey];
        
        if (category && category.words) {
          const transformedWords = category.words.map(word => {
            const frontWord = word[sourceLanguage] || word.polish || word.english || word.spanish || word.german || word.ukrainian || word.french || word.arabic || word.chinese || word.japanese;
            const backWord = word[targetLanguage] || word.spanish || word.english || word.polish || word.german || word.ukrainian || word.french || word.arabic || word.chinese || word.japanese;

            return {
              ...word,
              front: frontWord,
              back: backWord,
              example: word.example || null,
              exampleTranslation: word.exampleTranslation || null
            };
          });

          setFlashcards(transformedWords);
          setContentAvailable(true);
        } else {
          setContentAvailable(false);
        }
      } catch (error) {
        setContentAvailable(false);
      }

      setLoading(false);
      resetGame();
    };

    loadContent();
  }, [categoryKey, sourceLanguage, targetLanguage]);

  const handleCelebrate = () => {
    setShowParticles(true);
    setTimeout(() => setShowParticles(false), 1500);
  };

  const handleAnswer = async (isCorrect) => {
    if (isCorrect) {
      setScore(prev => prev + 10);
      setCorrectAnswers(prev => prev + 1);
      setCurrentStreak(prev => prev + 1);

      if (flashcards[currentCard] && flashcards[currentCard].id) {
        const wordId = flashcards[currentCard].id;
        const newMasteredWords = new Set(masteredWords);
        newMasteredWords.add(wordId);
        setMasteredWords(newMasteredWords);

        try {
          const cacheKey = `mastered_flashcards_${sourceLanguage}_${targetLanguage}`;
          const cachedMastered = getLocalData(cacheKey) || {};
          const allMastered = { ...cachedMastered };

          if (!allMastered[categoryKey]) {
            allMastered[categoryKey] = [];
          }
          if (!allMastered[categoryKey].includes(wordId)) {
            allMastered[categoryKey].push(wordId);
          }

          setLocalData(cacheKey, allMastered);
        } catch (error) {
          // Silent error handling
        }
      }
    } else {
      setWrongAnswers(prev => prev + 1);
      setCurrentStreak(0);
    }

    if (currentCard < flashcards.length - 1) {
      setCurrentCard(prev => prev + 1);
    } else {
      completeGame();
    }
  };

  const completeGame = async () => {
    const finalScore = score;
    const correctCount = correctAnswers;
    const wrongCount = flashcards.length - correctAnswers;
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);

    if (continuousMode && currentCategoryIndex < allCategories.length - 1) {
      await saveProgress(finalScore, correctCount, wrongCount, timeSpent);
      
      const nextCategoryKey = allCategories[currentCategoryIndex + 1];
      navigate(createPageUrl("FlashCards") + `?category=${nextCategoryKey}`);
      return;
    }

    setGameComplete(true);
    await saveProgress(finalScore, correctCount, wrongCount, timeSpent);
  };

  const saveProgress = async (finalScore, correctCount, wrongCount, timeSpent) => {
    try {
      const progressData = {
        game_type: "flashcards",
        level: categoryKey,
        score: finalScore,
        correct_answers: correctCount,
        total_questions: correctCount + wrongCount,
        time_spent: timeSpent,
        source_language: sourceLanguage,
        target_language: targetLanguage,
        created_date: new Date().toISOString()
      };

      const localProgress = getLocalData(STORAGE_KEYS.GAME_PROGRESS) || [];
      localProgress.unshift(progressData);
      
      const trimmedProgress = localProgress.slice(0, MAX_PROGRESS_RECORDS);
      setLocalData(STORAGE_KEYS.GAME_PROGRESS, trimmedProgress);

      let localProfile = getLocalData(STORAGE_KEYS.USER_PROFILE) || {
        total_xp: 0,
        current_level: 1,
        daily_streak: 0,
        total_active_days: 0,
        last_activity_date: null
      };

      localProfile.total_xp = (localProfile.total_xp || 0) + finalScore;
      localProfile.current_level = Math.floor(localProfile.total_xp / 100) + 1;

      const today = new Date().toISOString().split('T')[0];
      if (localProfile.last_activity_date) {
        const lastDate = new Date(localProfile.last_activity_date);
        const todayDate = new Date(today);
        const diffTime = todayDate.getTime() - lastDate.getTime();
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) {
          // Same day
        } else if (diffDays === 1) {
          localProfile.daily_streak = (localProfile.daily_streak || 0) + 1;
          localProfile.total_active_days = (localProfile.total_active_days || 0) + 1;
        } else {
          localProfile.daily_streak = 1;
          localProfile.total_active_days = (localProfile.total_active_days || 0) + 1;
        }
      } else {
        localProfile.daily_streak = 1;
        localProfile.total_active_days = 1;
      }
      localProfile.last_activity_date = today;

      setLocalData(STORAGE_KEYS.USER_PROFILE, localProfile);
    } catch (error) {
      // Silent error handling
    }
  };

  const resetGame = () => {
    setCurrentCard(0);
    setScore(0);
    setCorrectAnswers(0);
    setWrongAnswers(0);
    setCurrentStreak(0);
    setGameComplete(false);
  };

  const toggleContinuousMode = () => {
    setContinuousMode(prev => !prev);
  };

  const skipToEnd = () => {
    setGameComplete(true);
  };

  return {
    categoryKey,
    currentCard,
    setCurrentCard,
    score,
    correctAnswers,
    wrongAnswers,
    currentStreak,
    showParticles,
    gameComplete,
    flashcards,
    contentAvailable,
    loading,
    continuousMode,
    handleAnswer,
    handleCelebrate,
    resetGame,
    toggleContinuousMode,
    skipToEnd
  };
}