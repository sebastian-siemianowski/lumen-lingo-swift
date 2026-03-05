import React from "react";
import { useLanguage } from "../language/LanguageContext";
import useGrammarGame from "./useGrammarGame";
import GrammarLoadingState from "./GrammarLoadingState";
import GrammarContentUnavailable from "./GrammarContentUnavailable";
import GrammarGameView from "./GrammarGameView";

export default function GrammarContainer() {
  const { sourceLanguage, targetLanguage } = useLanguage();

  const {
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
  } = useGrammarGame(sourceLanguage, targetLanguage);

  if (isLoading) return <GrammarLoadingState />;
  if (!contentAvailable) return <GrammarContentUnavailable />;

  return (
    <GrammarGameView
      currentQuestion={currentQuestion}
      setCurrentQuestion={setCurrentQuestion}
      score={score}
      questions={questions}
      hasAnswered={hasAnswered}
      isAnswerCorrect={isAnswerCorrect}
      correct={correct}
      wrong={wrong}
      showComplete={showComplete}
      currentStreak={currentStreak}
      continuousMode={continuousMode}
      categoryKey={categoryKey}
      handleAnswer={handleAnswer}
      handleCorrectAnswer={handleCorrectAnswer}
      handleAnswerSelected={handleAnswerSelected}
      performanceMood={performanceMood}
      resetGame={resetGame}
      toggleContinuousMode={toggleContinuousMode}
      skipToEnd={skipToEnd}
      setHasAnswered={(val) => {}}
      setIsAnswerCorrect={(val) => {}}
      />
  );
}