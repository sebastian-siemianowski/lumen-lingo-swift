import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { getGameContent } from "../utils/contentLoader";
import { getLocalData, setLocalData, STORAGE_KEYS, MAX_PROGRESS_RECORDS } from "../utils/offlineSync";

export default function useGrammarGame(sourceLanguage, targetLanguage) {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryKey = urlParams.get('category') || 'present_tense';

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [contentAvailable, setContentAvailable] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [masteredQuestions, setMasteredQuestions] = useState(new Set());
  const [showComplete, setShowComplete] = useState(false);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [allCategories, setAllCategories] = useState([]);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [performanceMood, setPerformanceMood] = useState('neutral'); // 'warm', 'cool', 'neutral'
  const [continuousMode, setContinuousMode] = useState(() => {
    const saved = localStorage.getItem('grammar_continuous_mode');
    return saved === 'true';
  });
  
  const sessionStartTime = useRef(Date.now());
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('grammar_continuous_mode', continuousMode);
  }, [continuousMode]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentQuestion]);

  useEffect(() => {
    const loadQuestions = async () => {
      if (!categoryKey) {
        return;
      }
      setIsLoading(true);
      
      const content = await getGameContent('grammar', sourceLanguage, targetLanguage);
      
      if (!content) {
        setContentAvailable(false);
        setQuestions([]);
        setIsLoading(false);
        return;
      }

      const categories = Object.keys(content);
      setAllCategories(categories);
      const currentIndex = categories.indexOf(categoryKey);
      setCurrentCategoryIndex(currentIndex >= 0 ? currentIndex : 0);
      
      const categoryContent = content[categoryKey];
      
      if (categoryContent && categoryContent.questions) {
        setQuestions(categoryContent.questions);
        setContentAvailable(true);
      } else {
        setContentAvailable(false);
        setQuestions([]);
      }
      setIsLoading(false);
    };

    const loadMasteredQuestionsFromLocalStorage = () => {
      try {
        const cacheKey = `mastered_grammar_${sourceLanguage}_${targetLanguage}`;
        const cachedMastered = getLocalData(cacheKey);
        if (cachedMastered) {
          const categoryMastered = cachedMastered[categoryKey] || [];
          setMasteredQuestions(new Set(categoryMastered));
        }
      } catch (error) {
        // Silent error handling
      }
    };

    loadMasteredQuestionsFromLocalStorage();
    loadQuestions();
  }, [categoryKey, sourceLanguage, targetLanguage]);

  const handleGameComplete = async () => {
    const finalScore = score;
    const timeSpent = Math.floor((Date.now() - sessionStartTime.current) / 1000);

    if (continuousMode && currentCategoryIndex < allCategories.length - 1) {
      await saveProgress(finalScore, correct, wrong, timeSpent);
      
      const nextCategoryKey = allCategories[currentCategoryIndex + 1];
      navigate(createPageUrl("Grammar") + `?category=${nextCategoryKey}`);
      return;
    }

    setShowComplete(true);
    await saveProgress(finalScore, correct, wrong, timeSpent);
  };

  const saveProgress = async (finalScore, correctCount, wrongCount, timeSpent) => {
    try {
      const progressData = {
        game_type: "grammar",
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
        total_active_days: 0,
        daily_streak: 0, 
        last_activity_date: null 
      };
      
      localProfile.total_xp = (localProfile.total_xp || 0) + finalScore;
      localProfile.current_level = Math.floor(localProfile.total_xp / 100) + 1;
      
      const today = new Date().toISOString().split('T')[0];
      let newDailyStreak = localProfile.daily_streak || 0;
      let newTotalActiveDays = localProfile.total_active_days || 0;

      if (localProfile.last_activity_date) {
        const lastDate = new Date(localProfile.last_activity_date);
        const todayDate = new Date(today);
        const diffTime = todayDate.getTime() - lastDate.getTime();
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) { 
          // Same day
        } else if (diffDays === 1) { 
          newDailyStreak += 1;
          newTotalActiveDays += 1; 
        } else {
          newDailyStreak = 1;
          newTotalActiveDays += 1; 
        }
      } else {
        newDailyStreak = 1;
        newTotalActiveDays = 1;
      }

      localProfile.daily_streak = newDailyStreak;
      localProfile.total_active_days = newTotalActiveDays;
      localProfile.last_activity_date = today;
      
      setLocalData(STORAGE_KEYS.USER_PROFILE, localProfile);
    } catch (error) {
      // Silent error handling
    }
  };

  const handleAnswer = async (isCorrect) => {
    const currentQ = questions[currentQuestion];

    if (!currentQ || hasAnswered) return;

    setHasAnswered(true);
    setIsAnswerCorrect(isCorrect);

    // Score and streak are updated here (correct/wrong already updated in handleAnswerSelected)
    if (isCorrect) {
      setScore(prev => prev + 10);
      setCurrentStreak(prev => prev + 1);

      const questionId = currentQ.id;
      const newMasteredQuestions = new Set(masteredQuestions);
      if (!newMasteredQuestions.has(questionId)) {
         newMasteredQuestions.add(questionId);
         setMasteredQuestions(newMasteredQuestions);
      }

      try {
        const cacheKey = `mastered_grammar_${sourceLanguage}_${targetLanguage}`;
        const cachedMastered = getLocalData(cacheKey) || {};
        
        if (!cachedMastered[categoryKey]) {
          cachedMastered[categoryKey] = [];
        }
        if (!cachedMastered[categoryKey].includes(questionId)) {
          cachedMastered[categoryKey].push(questionId);
        }
        
        setLocalData(cacheKey, cachedMastered);
      } catch (error) {
        // Silent error handling
      }
    } else {
      setCurrentStreak(0);
    }

    const nextQuestionIndex = currentQuestion + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestion(nextQuestionIndex);
      setHasAnswered(false);
      setIsAnswerCorrect(false);
    } else {
      handleGameComplete();
    }
  };

  const handleCorrectAnswer = () => {
    // For celebration effects if needed
  };

  // Immediately triggered when user selects an answer (before pressing Next)
  const handleAnswerSelected = (isCorrectAnswer) => {
    if (isCorrectAnswer) {
      setCorrect(prev => prev + 1);
    } else {
      setWrong(prev => prev + 1);
    }

    // Update performance mood based on recent performance
    const newCorrect = isCorrectAnswer ? correct + 1 : correct;
    const newWrong = isCorrectAnswer ? wrong : wrong + 1;
    const total = newCorrect + newWrong;
    
    if (total >= 2) {
      const accuracy = newCorrect / total;
      if (accuracy >= 0.7) {
        setPerformanceMood('warm'); // Doing well - warm gradients
      } else if (accuracy < 0.4) {
        setPerformanceMood('cool'); // Struggling - encouraging lavender
      } else {
        setPerformanceMood('neutral');
      }
    }
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setCorrect(0);
    setWrong(0);
    setShowComplete(false);
    setHasAnswered(false);
    setIsAnswerCorrect(false);
    setCurrentStreak(0);
    setPerformanceMood('neutral');
    sessionStartTime.current = Date.now();
  };

  const toggleContinuousMode = () => {
    setContinuousMode(prev => !prev);
  };

  const skipToEnd = () => {
    setShowComplete(true);
  };

  return {
    categoryKey,
    currentQuestion,
    setCurrentQuestion,
    score,
    questions,
    contentAvailable,
    isLoading,
    hasAnswered,
    isAnswerCorrect,
    correct,
    wrong,
    showComplete,
    currentStreak,
    continuousMode,
    performanceMood,
    handleAnswer,
    handleCorrectAnswer,
    handleAnswerSelected,
    resetGame,
    toggleContinuousMode,
    skipToEnd
  };
}