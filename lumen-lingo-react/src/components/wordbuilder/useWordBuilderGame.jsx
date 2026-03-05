import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { getGameContent } from "../utils/contentLoader";
import { getLocalData, setLocalData, STORAGE_KEYS, MAX_PROGRESS_RECORDS } from "../utils/offlineSync";

export default function useWordBuilderGame(sourceLanguage, targetLanguage) {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryKey = urlParams.get('category') || 'fruits';

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [showParticles, setShowParticles] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [startTime, setStartTime] = useState(Date.now());
  const [words, setWords] = useState([]);
  const [contentAvailable, setContentAvailable] = useState(true);
  const [masteredWords, setMasteredWords] = useState(new Set());

  const navigate = useNavigate();

  const loadWords = async () => {
    const content = await getGameContent('word_builder', sourceLanguage, targetLanguage);
    
    if (!content) {
      setContentAvailable(false);
      setWords([]);
      return;
    }
    
    const categoryContent = content[categoryKey];
    
    if (categoryContent && categoryContent.words && categoryContent.words.length > 0) {
      setWords(categoryContent.words);
      setContentAvailable(true);
    } else {
      setWords([]);
      setContentAvailable(false);
    }
    
    resetGame();
  };

  useEffect(() => {
    const loadLocalData = () => {
      if (!categoryKey) {
        return;
      }
      try {
        const cacheKey = `mastered_word_builder_${sourceLanguage}_${targetLanguage}`;
        const cachedMastered = getLocalData(cacheKey);
        if (cachedMastered) {
          const categoryMastered = cachedMastered[categoryKey] || [];
          setMasteredWords(new Set(categoryMastered));
        }
      } catch (error) {
        // Silent error handling
      }
    };

    loadLocalData();
    loadWords();
  }, [categoryKey, sourceLanguage, targetLanguage]);

  const handleCorrectAnswer = async () => {
    const newScore = score + 15;
    const newCorrectAnswers = correctAnswers + 1;
    const isLastWord = currentWordIndex >= words.length - 1;
    
    setScore(newScore);
    setCorrectAnswers(newCorrectAnswers);
    setCurrentStreak(prev => prev + 1);
    setShowParticles(true);
    setTimeout(() => setShowParticles(false), 1000);

    const currentWord = words[currentWordIndex];
    if (currentWord && currentWord.id) {
      const wordId = currentWord.id;
      
      setMasteredWords(prev => {
        const newMasteredWords = new Set(prev);
        newMasteredWords.add(wordId);

        try {
          const cacheKey = `mastered_word_builder_${sourceLanguage}_${targetLanguage}`;
          const cachedMastered = getLocalData(cacheKey) || {};
          
          if (!cachedMastered[categoryKey]) {
            cachedMastered[categoryKey] = [];
          }
          if (!cachedMastered[categoryKey].includes(wordId)) {
            cachedMastered[categoryKey].push(wordId);
          }
          
          setLocalData(cacheKey, cachedMastered);
        } catch (error) {
          // Silent error handling
        }
        return newMasteredWords;
      });
    }

    if (isLastWord) {
      setTimeout(() => {
        completeGame(newScore, newCorrectAnswers);
      }, 2000);
    } else {
      setTimeout(() => {
        setCurrentWordIndex(prev => prev + 1);
      }, 2000);
    }
  };
  
  const handleIncorrectAnswer = () => {
    setWrongAnswers(prev => prev + 1);
    setCurrentStreak(0);
  };

  const handleSkippedAnswer = () => {
    setWrongAnswers(prev => prev + 1);
    setCurrentStreak(0);
    
    if (currentWordIndex < words.length - 1) {
      setCurrentWordIndex(prev => prev + 1);
    } else {
      completeGame();
    }
  };

  const completeGame = async (finalScore = score, finalCorrectAnswers = correctAnswers) => {
    setGameComplete(true); 

    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    
    try {
      const progressData = {
        game_type: "word_builder",
        level: categoryKey,
        score: finalScore,
        correct_answers: finalCorrectAnswers,
        total_questions: words.length,
        time_spent: timeSpent,
        source_language: sourceLanguage,
        target_language: targetLanguage,
        created_date: new Date().toISOString()
      };

      const localProgress = getLocalData(STORAGE_KEYS.GAME_PROGRESS) || [];
      localProgress.unshift(progressData);
      
      const trimmedProgress = localProgress.slice(0, MAX_PROGRESS_RECORDS);
      setLocalData(STORAGE_KEYS.GAME_PROGRESS, trimmedProgress);

      const localProfile = getLocalData(STORAGE_KEYS.USER_PROFILE) || {
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
    setCurrentWordIndex(0);
    setScore(0);
    setCorrectAnswers(0);
    setWrongAnswers(0);
    setCurrentStreak(0);
    setGameComplete(false);
    setStartTime(Date.now());
  };

  const skipToEnd = () => {
    setGameComplete(true);
  };

  return {
    categoryKey,
    currentWordIndex,
    setCurrentWordIndex,
    score,
    correctAnswers,
    wrongAnswers,
    currentStreak,
    showParticles,
    gameComplete,
    words,
    contentAvailable,
    handleCorrectAnswer,
    handleIncorrectAnswer,
    handleSkippedAnswer,
    resetGame,
    skipToEnd
  };
}