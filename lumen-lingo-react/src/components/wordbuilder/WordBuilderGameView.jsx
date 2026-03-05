import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { AnimatePresence } from "framer-motion";
import { Lightbulb } from "lucide-react";
import WordBuilderBoard from "./WordBuilderBoard";
import GameComplete from "../shared/GameComplete";
import ParticleEffect from "../shared/ParticleEffect";
import ExerciseHeader from "../shared/ExerciseHeader";
import WordBuilderKeyboardHandler from "./WordBuilderKeyboardHandler";
import { useTranslations } from "../utils/translations";
import { useLanguage } from "../language/LanguageContext";

export default function WordBuilderGameView({
  currentWordIndex,
  setCurrentWordIndex,
  score,
  correctAnswers,
  wrongAnswers,
  currentStreak,
  showParticles,
  gameComplete,
  words,
  handleCorrectAnswer,
  handleIncorrectAnswer,
  handleSkippedAnswer,
  resetGame,
  skipToEnd
}) {
  const { sourceLanguage } = useLanguage();
  const t = useTranslations(sourceLanguage);
  const navigate = useNavigate();
  const wordBuilderRef = useRef(null);

  const progressPercentage = words.length > 0 
    ? ((currentWordIndex + 1) / words.length) * 100 
    : 0;

  if (gameComplete) {
    return (
      <GameComplete
        score={score}
        correct={correctAnswers}
        wrong={wrongAnswers}
        total={words.length}
        gameType={t('word_constructor')}
        onPlayAgain={resetGame}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col p-2 sm:p-6">
      <WordBuilderKeyboardHandler
        wordBuilderRef={wordBuilderRef}
        currentWordIndex={currentWordIndex}
        setCurrentWordIndex={setCurrentWordIndex}
        gameComplete={gameComplete}
        wordsLength={words.length}
      />

      {showParticles && <ParticleEffect />}
      
      <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col">
        <ExerciseHeader
          icon={Lightbulb}
          title={t('word_constructor')}
          gradient="from-amber-500 via-orange-500 to-red-500"
          backPath="WordBuilderCategories"
          currentIndex={currentWordIndex}
          totalCount={words.length}
          score={score}
          onReset={resetGame}
          storageKey="wordBuilderHeaderCollapsed"
          defaultCollapsed={true}
          showProgress={true}
          progressPercentage={progressPercentage}
          correct={correctAnswers}
          wrong={wrongAnswers}
          currentStreak={currentStreak}
          onSkipToEnd={skipToEnd}
        />

        <div className="flex-1 flex items-center justify-center overflow-auto">
          <AnimatePresence mode="wait">
            {words.length > 0 && currentWordIndex < words.length && (
              <WordBuilderBoard
                ref={wordBuilderRef}
                key={words[currentWordIndex].id || currentWordIndex}
                targetWord={words[currentWordIndex]}
                onCorrectAnswer={handleCorrectAnswer}
                onIncorrectAnswer={handleIncorrectAnswer}
                onSkippedAnswer={handleSkippedAnswer}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}