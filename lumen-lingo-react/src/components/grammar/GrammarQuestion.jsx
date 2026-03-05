import React, { useState, useEffect, useImperativeHandle, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, ArrowRight, Lightbulb, ChevronDown } from "lucide-react";
import { useLanguage } from "../language/LanguageContext";
import { useTranslations } from "../utils/translations";
import { useDarkMode } from "../theme/DarkModeContext";

const GrammarQuestion = forwardRef(({ question, onAnswer, onCorrectAnswer, onAnswerSelected, performanceMood = 'neutral' }, ref) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [wasSkipped, setWasSkipped] = useState(false);
  
  const [isTipExpanded, setIsTipExpanded] = useState(() => {
    try {
      const saved = localStorage.getItem('grammarTipExpanded');
      return saved === null ? true : saved === 'true';
    } catch {
      return true;
    }
  });
  
  const { sourceLanguage } = useLanguage();
  const { darkMode } = useDarkMode();
  const t = useTranslations(sourceLanguage);

  // Idle detection for gentle glow hint
  const [isIdle, setIsIdle] = useState(false);
  const idleTimerRef = React.useRef(null);

  useEffect(() => {
    if (showResult) {
      // Start idle timer when result is shown
      idleTimerRef.current = setTimeout(() => {
        setIsIdle(true);
      }, 7000);
    }
    return () => {
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
      setIsIdle(false);
    };
  }, [showResult, question.id]);

  // Gradient Intelligence - dynamic mood-based colors
  const getMoodGradient = () => {
    if (performanceMood === 'warm') {
      // User doing well - brighter, warmer pink→peach
      return darkMode
        ? 'linear-gradient(135deg, rgba(236, 72, 153, 0.42) 0%, rgba(251, 146, 60, 0.38) 50%, rgba(168, 85, 247, 0.40) 100%)'
        : 'linear-gradient(135deg, rgba(251, 146, 60, 0.18) 0%, rgba(244, 114, 182, 0.16) 50%, rgba(168, 85, 247, 0.14) 100%)';
    } else if (performanceMood === 'cool') {
      // User struggling - cooler lavender tones, encouraging
      return darkMode
        ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.40) 0%, rgba(168, 85, 247, 0.38) 50%, rgba(192, 132, 252, 0.36) 100%)'
        : 'linear-gradient(135deg, rgba(167, 139, 250, 0.16) 0%, rgba(192, 132, 252, 0.14) 50%, rgba(221, 214, 254, 0.12) 100%)';
    }
    // Neutral
    return darkMode
      ? 'linear-gradient(135deg, rgba(88, 28, 135, 0.35) 0%, rgba(124, 58, 237, 0.30) 50%, rgba(139, 92, 246, 0.35) 100%)'
      : undefined;
  };

  const moodGradient = getMoodGradient();

  // Support both data formats: {answers, correctAnswer} and {options, correct}
  const answerOptions = question.answers || question.options || [];
  const correctAnswer = question.correct || (question.correctAnswer !== undefined ? answerOptions[question.correctAnswer] : null);

  // NEW: Updated - showCorrectAnswer now marks as skipped (wrong)
  useImperativeHandle(ref, () => ({
    triggerNext: () => {
      if (showResult) {
        handleContinue();
      }
    },
    showCorrectAnswer: () => {
      if (!showResult) {
        // Mark as skipped and show correct answer
        setWasSkipped(true);
        setSelectedAnswer(correctAnswer); // Select correct answer for display purposes
        setIsCorrect(false); // Count as wrong because it was skipped
        setShowResult(true);
      }
    },
    isAnswered: () => showResult
  }));

  // Shuffle options on mount AND reset state when question changes
  useEffect(() => {
    const shuffled = answerOptions.map((option, index) => ({
      text: option,
      originalIndex: index
    }))
    .sort(() => Math.random() - 0.5);
    setShuffledOptions(shuffled);
    
    // Reset state for new question
    setSelectedAnswer(null);
    setShowResult(false);
    setIsCorrect(false);
    setWasSkipped(false); // NEW: Reset skip state
  }, [question.id]);

  const toggleTip = (e) => {
    e.stopPropagation();
    const newValue = !isTipExpanded;
    setIsTipExpanded(newValue);
    try {
      localStorage.setItem('grammarTipExpanded', String(newValue));
    } catch (error) {
      console.error('Error saving tip preference:', error);
    }
  };

  const renderQuestionWithAnswer = () => {
    const questionText = question.question;
    const answer = correctAnswer;
    
    const isNoArticle = answer && (
      answer.toLowerCase().includes('no article') ||
      answer.toLowerCase().includes('no word') ||
      answer.toLowerCase() === 'ø' ||
      answer.toLowerCase() === '-' ||
      answer === '—'
    );
    
    const placeholderRegex = /_{2,}|\[.*?\]|\(.*?\)|\.{3,}/g;
    
    if (!placeholderRegex.test(questionText)) {
      if (isNoArticle) {
        return <span>{questionText}</span>;
      }
      return (
        <span>
          {questionText} <span className={`font-black ${
            darkMode 
              ? 'text-emerald-300' 
              : 'text-emerald-100'
          }`} style={{
            textShadow: darkMode 
              ? '0 0 20px rgba(52, 211, 153, 0.8), 0 2px 8px rgba(16, 185, 129, 0.6)' 
              : '0 0 15px rgba(52, 211, 153, 0.6), 0 2px 6px rgba(16, 185, 129, 0.4)',
            textDecoration: 'underline',
            textDecorationColor: darkMode ? 'rgba(52, 211, 153, 0.5)' : 'rgba(52, 211, 153, 0.4)',
            textDecorationThickness: '2px',
            textUnderlineOffset: '3px'
          }}>
            {answer}
          </span>
        </span>
      );
    }
    
    const parts = questionText.split(placeholderRegex);
    
    if (isNoArticle) {
      return <span>{parts.join(' ').trim()}</span>;
    }
    
    const placeholders = questionText.match(placeholderRegex) || [];
    
    return (
      <span>
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index < placeholders.length && (
              <span className={`font-black ${
                darkMode 
                  ? 'text-emerald-300' 
                  : 'text-emerald-100'
              }`} style={{
                textShadow: darkMode 
                  ? '0 0 20px rgba(52, 211, 153, 0.8), 0 2px 8px rgba(16, 185, 129, 0.6)' 
                  : '0 0 15px rgba(52, 211, 153, 0.6), 0 2px 6px rgba(16, 185, 129, 0.4)',
                textDecoration: 'underline',
                textDecorationColor: darkMode ? 'rgba(52, 211, 153, 0.5)' : 'rgba(52, 211, 153, 0.4)',
                textDecorationThickness: '2px',
                textUnderlineOffset: '3px'
              }}>
                {answer}
              </span>
            )}
          </React.Fragment>
        ))}
      </span>
    );
  };

  const handleAnswerSelect = (selectedOption) => {
    if (showResult) return;

    setSelectedAnswer(selectedOption.text);
    const correct = selectedOption.text === correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);
    setWasSkipped(false); // User actually selected an answer, not skipped

    // Immediately notify parent of answer selection for progress bar flash
    if (onAnswerSelected) {
      onAnswerSelected(correct);
    }

    if (correct && onCorrectAnswer) {
      onCorrectAnswer();
    }
  };

  const handleContinue = () => {
    // When skipping, isCorrect is explicitly set to false.
    // If the user selected an answer, isCorrect reflects its correctness.
    onAnswer(isCorrect);
  };

  if (shuffledOptions.length === 0) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={{ 
          opacity: 0, 
          scale: 0.96,
          y: 20,
          filter: "blur(16px)"
        }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          y: 0,
          filter: "blur(0px)"
        }}
        exit={{ 
          opacity: 0, 
          scale: 0.98,
          y: -10,
          filter: "blur(12px)"
        }}
        transition={{ 
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
          opacity: { duration: 0.4 },
          scale: { duration: 0.5 },
          y: { duration: 0.5 },
          filter: { duration: 0.4 }
        }}
        className="w-full max-w-3xl mx-auto"
      >
        {/* Main Card */}
        <motion.div 
          className={`relative backdrop-blur-2xl rounded-lg sm:rounded-3xl shadow-2xl overflow-hidden ${
            darkMode
              ? 'border border-purple-400/30'
              : 'bg-white/12 border border-white/25'
          }`}
          style={{
            background: moodGradient,
            transition: 'background 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          layout
          transition={{
            layout: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
          }}
        >
          {/* Glass reflection band at top - consistent blur radius 12-16px */}
          <div 
            className="absolute top-0 left-0 w-full h-[18%] rounded-t-lg sm:rounded-t-3xl pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.18) 0%, transparent 100%)'
            }}
          />
          
          {/* Micro-gradient in content area - consistent Y-offset shadows */}
          <div 
            className="absolute inset-0 rounded-lg sm:rounded-3xl pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.03) 100%)'
            }}
          />
          
          {/* Subtle gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/4 via-transparent to-purple-500/4 pointer-events-none rounded-lg sm:rounded-3xl" />
          
          {/* ENHANCED: Celebratory glow on correct */}
          <AnimatePresence>
            {showResult && isCorrect && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0 pointer-events-none rounded-lg sm:rounded-3xl"
                style={{
                  background: darkMode
                    ? 'radial-gradient(circle at 50% 50%, rgba(52, 211, 153, 0.15) 0%, rgba(16, 185, 129, 0.08) 50%, transparent 100%)'
                    : 'radial-gradient(circle at 50% 50%, rgba(52, 211, 153, 0.12) 0%, rgba(16, 185, 129, 0.06) 50%, transparent 100%)'
                }}
              />
            )}
            
            {showResult && !isCorrect && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 pointer-events-none rounded-lg sm:rounded-3xl"
                style={{
                  background: darkMode
                    ? 'radial-gradient(circle at 50% 50%, rgba(251, 146, 60, 0.08) 0%, transparent 60%)'
                    : 'radial-gradient(circle at 50% 50%, rgba(251, 146, 60, 0.06) 0%, transparent 60%)'
                }}
              />
            )}
          </AnimatePresence>

          <div className="relative z-10 p-3 sm:p-8">
            {/* Question Text - transforms to show answer when showResult is true */}
            <motion.div 
              className="mb-3 sm:mb-8"
              layout
              transition={{ layout: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } }}
            >
              <motion.div
                layout
                transition={{ layout: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } }}
                  className={`relative backdrop-blur-xl rounded-lg sm:rounded-2xl p-3 sm:p-8 shadow-lg transition-all duration-700 ${
                    showResult
                      ? darkMode
                        ? 'border-2 border-emerald-400/40'
                        : 'border-2 border-emerald-300/50'
                      : darkMode
                        ? 'border border-purple-400/25'
                        : 'border border-white/25'
                  }`}
                  style={showResult ? {
                    background: darkMode
                      ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(5, 150, 105, 0.12) 50%, rgba(4, 120, 87, 0.15) 100%)'
                      : 'linear-gradient(135deg, rgba(52, 211, 153, 0.20) 0%, rgba(16, 185, 129, 0.18) 50%, rgba(5, 150, 105, 0.20) 100%)',
                    boxShadow: darkMode
                      ? '0 8px 32px rgba(16, 185, 129, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                      : '0 8px 32px rgba(52, 211, 153, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
                  } : darkMode ? {
                    background: 'linear-gradient(135deg, rgba(109, 40, 217, 0.25) 0%, rgba(124, 58, 237, 0.22) 50%, rgba(139, 92, 246, 0.25) 100%)'
                  } : {}}
                >
                  <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${
                    showResult ? 'via-emerald-300/40' : 'via-white/30'
                  } to-transparent rounded-t-lg sm:rounded-t-2xl`} />
                  
                  {showResult && (
                    <motion.div
                      className="absolute inset-0"
                      animate={{ opacity: [0.3, 0.5, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(52, 211, 153, 0.1) 0%, transparent 70%)'
                      }}
                    />
                  )}
                  
                  <div className="relative z-10">
                    <p className="text-white text-base sm:text-2xl font-bold leading-snug sm:leading-relaxed text-center drop-shadow-sm">
                      {showResult ? renderQuestionWithAnswer() : question.question}
                    </p>
                    
                    {question.translation && (
                      <p className={`text-xs sm:text-base mt-1.5 sm:mt-3 text-center italic drop-shadow-sm ${
                        showResult ? 'text-white/70' : 'text-white/60'
                      }`}>
                        {question.translation}
                      </p>
                    )}
                    
                    {question.context && (
                      <p className="text-white/70 text-xs sm:text-base mt-2 sm:mt-4 text-center italic drop-shadow-sm">
                        "{question.context}"
                      </p>
                    )}
                  </div>
                </motion.div>
            </motion.div>

            {/* Answer Choices */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-4"
              layout
              transition={{ layout: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } }}
            >
              {shuffledOptions.map((option, index) => {
                const isSelected = selectedAnswer === option.text;
                const isCorrectAnswer = option.text === correctAnswer;
                const showCorrect = showResult && isCorrectAnswer && !wasSkipped; // Correct if selected, and not skipped
                // UPDATED: Show as incorrect if it was skipped (even if it's the correct answer visually selected)
                // or if the selected answer is genuinely incorrect.
                const showIncorrect = showResult && isSelected && (!isCorrect || wasSkipped);
                const isUnselected = showResult && !isSelected && !isCorrectAnswer;

                return (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswerSelect(option)}
                    disabled={showResult}
                    layout
                    className={`
                      group relative w-full text-left overflow-hidden
                      rounded-lg sm:rounded-2xl
                      ${showResult ? 'cursor-default' : 'cursor-pointer'}
                    `}
                    style={{
                      background: showCorrect 
                        ? darkMode
                          ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.35) 0%, rgba(5, 150, 105, 0.35) 50%, rgba(4, 120, 87, 0.4) 100%)'
                          : 'linear-gradient(135deg, rgba(52, 211, 153, 0.40) 0%, rgba(16, 185, 129, 0.38) 50%, rgba(5, 150, 105, 0.42) 100%)'
                        : showIncorrect
                        ? darkMode
                          ? 'linear-gradient(135deg, rgba(251, 191, 36, 0.18) 0%, rgba(251, 146, 60, 0.15) 50%, rgba(245, 158, 11, 0.18) 100%)'
                          : 'linear-gradient(135deg, rgba(251, 191, 36, 0.22) 0%, rgba(251, 146, 60, 0.20) 50%, rgba(245, 158, 11, 0.22) 100%)'
                        : isUnselected
                        ? darkMode
                          ? 'rgba(255, 255, 255, 0.04)'
                          : 'rgba(255, 255, 255, 0.06)'
                        : darkMode
                        ? 'rgba(255, 255, 255, 0.08)'
                        : 'rgba(255, 255, 255, 0.10)',
                      backdropFilter: 'blur(14px)',
                      WebkitBackdropFilter: 'blur(14px)',
                      border: showCorrect
                        ? '1.5px solid rgba(0, 255, 180, 0.5)'
                        : showIncorrect
                        ? '1.5px solid rgba(251, 191, 36, 0.4)'
                        : isUnselected
                        ? darkMode
                          ? '1px solid rgba(255, 255, 255, 0.12)'
                          : '1px solid rgba(255, 255, 255, 0.15)'
                        : darkMode
                        ? '1px solid rgba(255, 255, 255, 0.20)'
                        : '1px solid rgba(255, 255, 255, 0.25)',
                      boxShadow: showCorrect
                        ? `0 6px 16px rgba(52, 211, 153, 0.25), inset 0 0 20px rgba(52, 211, 153, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.20)`
                        : showIncorrect
                        ? `0 6px 12px rgba(0, 0, 0, 0.06), inset 0 0 16px rgba(251, 191, 36, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.12)`
                        : isUnselected
                        ? '0 3px 8px rgba(0, 0, 0, 0.04)'
                        : '0 6px 14px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.10)',
                    }}
                    whileHover={!showResult ? { scale: 1.02, y: -2 } : {}}
                    whileTap={!showResult ? { scale: 0.98 } : {}}
                    initial={false}
                    animate={
                      showCorrect 
                        ? { 
                            opacity: 1, 
                            y: -3,
                            scale: 1.01,
                          }
                        : showIncorrect
                        ? {
                            opacity: 0.85,
                            x: [0, -3, 3, -2, 2, 0],
                            y: 2,
                          }
                        : isUnselected
                        ? { 
                            opacity: 0.5,
                            y: 4,
                            scale: 0.98,
                          }
                        : { opacity: 1, y: 0, x: 0, scale: 1 }
                    }
                    transition={{
                      layout: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                      opacity: { duration: 0.6, ease: "easeOut" },
                      y: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                      scale: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                      x: { duration: 0.4, ease: "easeOut" }
                    }}
                  >
                    {!showResult && (
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100"
                        style={{
                          background: darkMode
                            ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(236, 72, 153, 0.12) 100%)'
                            : 'linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(236, 72, 153, 0.10) 100%)'
                        }}
                        transition={{ duration: 0.4 }}
                      />
                    )}

                    {/* Soft bloom pulse for correct answer */}
                    {showCorrect && (
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: [0, 0.6, 0],
                          scale: [0.8, 1.15, 1.2]
                        }}
                        transition={{ 
                          duration: 1,
                          ease: [0.4, 0, 0.2, 1],
                          times: [0, 0.4, 1]
                        }}
                        style={{
                          background: 'radial-gradient(circle at 50% 50%, rgba(52, 211, 153, 0.4) 0%, rgba(16, 185, 129, 0.2) 40%, transparent 70%)',
                          filter: 'blur(8px)'
                        }}
                      />
                    )}

                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    <div className="relative flex items-center gap-2 sm:gap-4 p-2 sm:p-5">
                      <motion.div 
                        className="flex-shrink-0 w-7 h-7 sm:w-12 sm:h-12 rounded-md sm:rounded-xl flex items-center justify-center font-black text-xs sm:text-lg"
                        style={{
                          background: showCorrect
                            ? darkMode
                              ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.9) 0%, rgba(5, 150, 105, 0.95) 100%)'
                              : 'linear-gradient(135deg, rgba(52, 211, 153, 0.95) 0%, rgba(16, 185, 129, 1) 100%)'
                            : showIncorrect
                            ? darkMode
                              ? 'linear-gradient(135deg, rgba(251, 191, 36, 0.7) 0%, rgba(245, 158, 11, 0.75) 100%)'
                              : 'linear-gradient(135deg, rgba(251, 191, 36, 0.8) 0%, rgba(245, 158, 11, 0.85) 100%)'
                            : isUnselected
                            ? darkMode
                              ? 'rgba(255, 255, 255, 0.08)'
                              : 'rgba(255, 255, 255, 0.10)'
                            : darkMode
                            ? 'rgba(255, 255, 255, 0.15)'
                            : 'rgba(255, 255, 255, 0.18)',
                          color: (showCorrect || showIncorrect) ? 'white' : 'rgba(255, 255, 255, 0.9)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          boxShadow: showCorrect
                            ? 'inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 6px 14px rgba(52, 211, 153, 0.28)' 
                            : showIncorrect
                            ? 'inset 0 1px 0 rgba(255, 255, 255, 0.18), 0 6px 12px rgba(0, 0, 0, 0.08)'
                            : 'inset 0 1px 0 rgba(255, 255, 255, 0.12)',
                        }}
                        animate={{
                          scale: showCorrect ? 1.08 : showIncorrect ? 0.95 : 1
                        }}
                        transition={{ 
                          duration: 0.5, 
                          ease: [0.4, 0, 0.2, 1] 
                        }}
                      >
                        {String.fromCharCode(65 + index)}
                      </motion.div>

                      <div className="flex-1 min-w-0">
                        <motion.p 
                          className="text-sm sm:text-lg font-semibold leading-snug sm:leading-relaxed drop-shadow-sm"
                          style={{
                            color: isUnselected 
                              ? 'rgba(255, 255, 255, 0.4)' 
                              : 'rgba(255, 255, 255, 0.95)',
                            transition: 'color 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
                          }}
                        >
                          {option.text}
                        </motion.p>
                      </div>

                      <AnimatePresence>
                        {showResult && (isCorrectAnswer || isSelected) && (
                          <motion.div 
                            className="flex-shrink-0"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ 
                              duration: 0.5, 
                              ease: [0.34, 1.56, 0.64, 1],
                              delay: 0.1
                            }}
                          >
                            {(isCorrectAnswer && !wasSkipped) ? ( // Only show check if correct AND not skipped
                              <motion.div 
                                className="w-6 h-6 sm:w-10 sm:h-10 rounded-full flex items-center justify-center"
                                style={{
                                  background: darkMode
                                    ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.9) 0%, rgba(5, 150, 105, 0.95) 100%)'
                                    : 'linear-gradient(135deg, rgba(52, 211, 153, 0.95) 0%, rgba(16, 185, 129, 1) 100%)',
                                  boxShadow: darkMode
                                    ? '0 4px 20px rgba(16, 185, 129, 0.5)'
                                    : '0 4px 20px rgba(52, 211, 153, 0.6)'
                                }}
                                animate={{
                                  boxShadow: [
                                    darkMode ? '0 4px 20px rgba(16, 185, 129, 0.5)' : '0 4px 20px rgba(52, 211, 153, 0.6)',
                                    darkMode ? '0 4px 30px rgba(16, 185, 129, 0.7)' : '0 4px 30px rgba(52, 211, 153, 0.8)',
                                    darkMode ? '0 4px 20px rgba(16, 185, 129, 0.5)' : '0 4px 20px rgba(52, 211, 153, 0.6)',
                                  ]
                                }}
                                transition={{ duration: 1.2, ease: "easeInOut" }}
                              >
                                <CheckCircle className="w-3.5 h-3.5 sm:w-6 sm:h-6 text-white" strokeWidth={2.5} />
                              </motion.div>
                            ) : (isCorrectAnswer && wasSkipped) || (!isCorrectAnswer && isSelected) ? ( // Show warm indicator if skipped or wrong
                              <div 
                                className="w-6 h-6 sm:w-10 sm:h-10 rounded-full flex items-center justify-center"
                                style={{
                                  background: darkMode
                                    ? 'linear-gradient(135deg, rgba(251, 191, 36, 0.75) 0%, rgba(245, 158, 11, 0.8) 100%)'
                                    : 'linear-gradient(135deg, rgba(251, 191, 36, 0.85) 0%, rgba(245, 158, 11, 0.9) 100%)',
                                  boxShadow: darkMode
                                    ? '0 2px 12px rgba(251, 191, 36, 0.3)'
                                    : '0 2px 12px rgba(251, 191, 36, 0.4)'
                                }}
                              >
                                <XCircle className="w-3.5 h-3.5 sm:w-6 sm:h-6 text-white" strokeWidth={2.5} />
                              </div>
                            ) : null}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {!showResult && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-white/30 transition-all duration-500" />
                    )}
                  </motion.button>
                );
              })}
            </motion.div>

            {/* Explanation with Collapsible */}
            <AnimatePresence>
              {showResult && question.explanation && (
                <motion.div 
                  className="mt-4 sm:mt-9"
                  layout
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ 
                    layout: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                    opacity: { duration: 0.3, delay: 0.1 },
                    height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
                  }}
                >
                  <motion.div 
                  className="relative rounded-2xl sm:rounded-[1.25rem] overflow-hidden"
                  animate={{
                    background: isTipExpanded
                      ? darkMode
                        ? 'linear-gradient(to bottom right, rgba(30, 58, 138, 0.28) 0%, rgba(59, 130, 246, 0.22) 50%, rgba(37, 99, 235, 0.18) 100%)'
                        : 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.12) 0%, rgba(96, 165, 250, 0.10) 50%, rgba(147, 197, 253, 0.08) 100%)'
                      : darkMode
                        ? 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.18) 0%, rgba(96, 165, 250, 0.12) 50%, rgba(255, 255, 255, 0.04) 100%)'
                        : 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.04) 100%)'
                  }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  style={{
                    backdropFilter: 'blur(18px)',
                    WebkitBackdropFilter: 'blur(18px)',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    boxShadow: darkMode
                      ? '0 8px 32px rgba(59, 130, 246, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.08), inset 0 0 20px rgba(255, 255, 255, 0.05)'
                      : '0 8px 32px rgba(59, 130, 246, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.12), inset 0 0 20px rgba(255, 255, 255, 0.05)'
                  }}
                >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />
                    
                    <button
                      onClick={toggleTip}
                      className="w-full flex items-center justify-between gap-3 p-4 active:scale-[0.98] hover:bg-white/5 transition-all duration-200"
                    >
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div 
                          className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center"
                          style={{
                            background: darkMode
                              ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(96, 165, 250, 0.2) 100%)'
                              : 'linear-gradient(135deg, rgba(59, 130, 246, 0.25) 0%, rgba(96, 165, 250, 0.25) 100%)',
                            border: '1px solid rgba(147, 197, 253, 0.3)',
                          }}
                        >
                          <Lightbulb className="w-5 h-5 text-blue-100" strokeWidth={2.5} />
                        </div>
                        <span className="text-white font-semibold text-sm">{t('grammar_tip')}</span>
                      </div>
                      <motion.div
                        animate={{ rotate: isTipExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className="w-5 h-5 text-blue-100" strokeWidth={2.5} />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isTipExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 pb-4">
                            <p className="text-white text-sm sm:text-base leading-relaxed sm:leading-loose font-normal">
                              {question.explanation}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Next Button - Cognitive Flow: repositions based on correctness */}
            <AnimatePresence>
              {showResult && (
                <motion.div 
                  className={`mt-2 sm:mt-6 flex ${isCorrect ? 'justify-end' : 'justify-center'}`}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    layout: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                    opacity: { duration: 0.3, delay: 0.15 }
                  }}
                >
                  <motion.button
                    onClick={handleContinue}
                    className="relative group inline-flex items-center overflow-hidden"
                    style={{
                      gap: 'clamp(0.5rem, 2vw, 0.75rem)',
                      padding: 'clamp(0.5rem, 2vw, 0.75rem) clamp(1.25rem, 3vw, 1.75rem)',
                      borderRadius: '9999px',
                      willChange: 'transform'
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -3,
                      transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] }
                    }}
                    whileTap={{
                      scale: 0.96,
                      transition: { duration: 0.1 }
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: darkMode
                          ? 'linear-gradient(135deg, rgba(109, 40, 217, 0.45) 0%, rgba(124, 58, 237, 0.50) 50%, rgba(139, 92, 246, 0.45) 100%)'
                          : 'linear-gradient(135deg, rgba(168, 85, 247, 0.35) 0%, rgba(236, 72, 153, 0.40) 50%, rgba(251, 146, 60, 0.35) 100%)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        border: darkMode ? '1.5px solid rgba(139, 92, 246, 0.7)' : '1.5px solid rgba(255, 255, 255, 0.5)',
                      }}
                      animate={{
                        opacity: [1, 0.85, 1],
                        boxShadow: isIdle
                          ? [
                              darkMode ? '0 4px 12px rgba(139, 92, 246, 0.25)' : '0 4px 12px rgba(168, 85, 247, 0.2)',
                              darkMode ? '0 4px 24px rgba(139, 92, 246, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)' : '0 4px 24px rgba(168, 85, 247, 0.4), 0 0 40px rgba(236, 72, 153, 0.25)',
                              darkMode ? '0 4px 12px rgba(139, 92, 246, 0.25)' : '0 4px 12px rgba(168, 85, 247, 0.2)',
                            ]
                          : darkMode ? '0 4px 12px rgba(139, 92, 246, 0.25)' : '0 4px 12px rgba(168, 85, 247, 0.2)'
                      }}
                      transition={{
                        duration: isIdle ? 2 : 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    <div 
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.05) 100%)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)'
                      }}
                    />

                    {/* Highlight streak - top 20% */}
                    <div 
                      className="absolute inset-x-2 top-1 h-[20%] rounded-full"
                      style={{
                        background: 'rgba(255, 255, 255, 0.15)',
                        filter: 'blur(2px)'
                      }}
                    />

                    <div 
                      className="absolute inset-x-0 top-0 h-1/2 rounded-t-full"
                      style={{
                        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, transparent 100%)'
                      }}
                    />

                    <motion.div
                      className="absolute inset-0 rounded-full"
                      initial={{ x: '-100%', opacity: 0 }}
                      animate={{
                        x: '100%',
                        opacity: [0, 0.4, 0]
                      }}
                      transition={{
                        duration: 0.7,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)'
                      }}
                    />

                    <div className="relative flex items-center gap-2 z-10">
                      <span 
                        className="font-bold text-white drop-shadow-sm"
                        style={{
                          fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                          filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.25))'
                        }}
                      >
                        {t('next')}
                      </span>
                      <motion.div
                        animate={{ 
                          x: [0, 4, 0],
                          opacity: [0.9, 1, 0.9]
                        }}
                        transition={{ 
                          duration: 1.8, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                      >
                        <ArrowRight 
                          className="text-white drop-shadow-sm" 
                          style={{
                            width: 'clamp(1rem, 2vw, 1.25rem)',
                            height: 'clamp(1rem, 2vw, 1.25rem)',
                            strokeWidth: 2.5,
                            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.25))'
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
});

GrammarQuestion.displayName = 'GrammarQuestion';

export default GrammarQuestion;