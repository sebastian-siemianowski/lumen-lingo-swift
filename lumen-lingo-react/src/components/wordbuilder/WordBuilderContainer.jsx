import React from "react";
import { useLanguage } from "../language/LanguageContext";
import useWordBuilderGame from "./useWordBuilderGame";
import WordBuilderLoadingState from "./WordBuilderLoadingState";
import WordBuilderContentUnavailable from "./WordBuilderContentUnavailable";
import WordBuilderGameView from "./WordBuilderGameView";

export default function WordBuilderContainer() {
  const { sourceLanguage, targetLanguage } = useLanguage();

  const {
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
  } = useWordBuilderGame(sourceLanguage, targetLanguage);

  if (!contentAvailable && !words.length) return <WordBuilderContentUnavailable />;
  if (words.length === 0 && contentAvailable) return <WordBuilderLoadingState />;

  return (
    <WordBuilderGameView
      currentWordIndex={currentWordIndex}
      setCurrentWordIndex={setCurrentWordIndex}
      score={score}
      correctAnswers={correctAnswers}
      wrongAnswers={wrongAnswers}
      currentStreak={currentStreak}
      showParticles={showParticles}
      gameComplete={gameComplete}
      words={words}
      handleCorrectAnswer={handleCorrectAnswer}
      handleIncorrectAnswer={handleIncorrectAnswer}
      handleSkippedAnswer={handleSkippedAnswer}
      resetGame={resetGame}
      skipToEnd={skipToEnd}
    />
  );
}