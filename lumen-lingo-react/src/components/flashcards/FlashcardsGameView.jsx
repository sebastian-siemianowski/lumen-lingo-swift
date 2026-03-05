import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { AnimatePresence } from "framer-motion";
import { BookOpen } from "lucide-react";
import FlashCard from "./FlashCard";
import GameComplete from "../shared/GameComplete";
import ParticleEffect from "../shared/ParticleEffect";
import FlashcardParticleField from "./FlashcardParticleField";
import ExerciseHeader from "../shared/ExerciseHeader";
import FlashcardsKeyboardHandler from "./FlashcardsKeyboardHandler";
import { getCategoryDisplayName } from "./categoryUtils";
import { useTranslations } from "../utils/translations";
import { useLanguage } from "../language/LanguageContext";

export default function FlashcardsGameView({
  currentCard,
  setCurrentCard,
  score,
  correctAnswers,
  wrongAnswers,
  currentStreak,
  showParticles,
  gameComplete,
  flashcards,
  continuousMode,
  categoryKey,
  handleAnswer,
  handleCelebrate,
  resetGame,
  toggleContinuousMode,
  skipToEnd
}) {
  const { sourceLanguage } = useLanguage();
  const t = useTranslations(sourceLanguage);
  const navigate = useNavigate();
  const flashCardRef = useRef(null);

  const progressPercentage = flashcards.length > 0 
    ? ((currentCard + 1) / flashcards.length) * 100 
    : 0;

  if (gameComplete) {
    return (
      <GameComplete
        score={score}
        correct={correctAnswers}
        wrong={wrongAnswers}
        total={flashcards.length}
        gameType={t('vocabulary_cards')}
        category={getCategoryDisplayName(categoryKey)}
        onPlayAgain={resetGame}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col p-3 sm:p-6 relative" style={{ isolation: 'auto' }}>
      <FlashcardsKeyboardHandler
        flashCardRef={flashCardRef}
        currentCard={currentCard}
        setCurrentCard={setCurrentCard}
        gameComplete={gameComplete}
        loading={false}
        flashcardsLength={flashcards.length}
      />

      {showParticles && <ParticleEffect />}

      <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col gap-4">
        <ExerciseHeader
          icon={BookOpen}
          title={t('vocabulary_cards')}
          categoryName={getCategoryDisplayName(categoryKey)}
          gradient="from-blue-500 via-cyan-400 to-teal-400"
          backPath="FlashCardsCategories"
          currentIndex={currentCard}
          totalCount={flashcards.length}
          score={score}
          onReset={resetGame}
          storageKey="flashcardsHeaderCollapsed"
          defaultCollapsed={true}
          showProgress={true}
          progressPercentage={progressPercentage}
          correct={correctAnswers}
          wrong={wrongAnswers}
          currentStreak={currentStreak}
          showContinuousMode={true}
          continuousMode={continuousMode}
          onToggleContinuousMode={toggleContinuousMode}
          onSkipToEnd={skipToEnd}
        />

        <div className="flex-1 flex items-start justify-center">
          <AnimatePresence mode="wait">
            {flashcards.length > 0 && currentCard < flashcards.length && (
              <FlashCard
                ref={flashCardRef}
                key={flashcards[currentCard].id || currentCard}
                card={flashcards[currentCard]}
                onAnswer={handleAnswer}
                onCelebrate={handleCelebrate}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}