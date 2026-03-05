import React from "react";
import { useLanguage } from "../language/LanguageContext";
import useFlashcardsGame from "./useFlashcardsGame";
import FlashcardsLoadingState from "./FlashcardsLoadingState";
import FlashcardsContentUnavailable from "./FlashcardsContentUnavailable";
import FlashcardsGameView from "./FlashcardsGameView";

export default function FlashcardsContainer() {
  const { sourceLanguage, targetLanguage } = useLanguage();

  const {
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
  } = useFlashcardsGame(sourceLanguage, targetLanguage);

  if (loading) return <FlashcardsLoadingState />;
  if (!contentAvailable) return <FlashcardsContentUnavailable />;
  if (flashcards.length === 0) return <FlashcardsLoadingState />;

  return (
    <FlashcardsGameView
      currentCard={currentCard}
      setCurrentCard={setCurrentCard}
      score={score}
      correctAnswers={correctAnswers}
      wrongAnswers={wrongAnswers}
      currentStreak={currentStreak}
      showParticles={showParticles}
      gameComplete={gameComplete}
      flashcards={flashcards}
      continuousMode={continuousMode}
      categoryKey={categoryKey}
      handleAnswer={handleAnswer}
      handleCelebrate={handleCelebrate}
      resetGame={resetGame}
      toggleContinuousMode={toggleContinuousMode}
      skipToEnd={skipToEnd}
    />
  );
}